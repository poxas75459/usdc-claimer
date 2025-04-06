/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2nMe95oVa8jpv529HqJnv6htmBXrJEt6TYAc1cdYyz1r473XnSv4Une7aBJADgXa9oqYXAmmS9HWPKV6BAHr7zKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kv3jrcVKpmNcFnMWLJDXxYa19Tgf5xwu1kuDUGwztJqist3V1hpdXZUKv82Zf4NWDzQXfYPm3kimXeoBjBQynfd",
  "key1": "7FiTkvf1DdW5vHykXa49YkPGXrqDVshUfjyxzbCZLncvpykDW2ZFBvwJvv586yTVats6EN965WLt1YWzrZ6ucjY",
  "key2": "5KLhqFqUSRFcr71VDKeoqKcoghJeYs8yzTHj7EoFS1VdUYekMU2Sszh7mZkg1dXtPUxECofZqgReMb86cGFK4MUY",
  "key3": "cSK4kjwvLKnW4NyvdLN9ChxJ3eBrh2JTjXcNKVoyQqBqev6MKLsmDH4wg5Fi7J2FGusQXrhFMchaKXYTXP7oFbC",
  "key4": "5UvLuFqMVGnPUj1RrWRJ1g5MMxEF1psM3xCvh5UgFS1fiwasRvJb5TfCiLoeD7YP2QRS1YsVhTXe5KhYz3wf9Y16",
  "key5": "3YqcZ948uV4NxLD5riNZ5tknsxDFPPdsS9a5KzpgZkHD8KEkHLobgk68dqFFLpx6jjb2yxVw7Y4pu6taDLhexJj6",
  "key6": "63ZxANNPFmGBuLRR9BdEpWGHsctyqtjCzaMGZ8dyGSAkzhRfV84yEXmrju9kCnvUenZYHE8SMp5JZV8tBmK7hXmo",
  "key7": "3Tq5Y5yMyhbiFvjcnEckykz5H8figdrj5E3yjySosdbPSf2ihcofdowvscEKqtpWthM2JiDyhqRhMsbztdN8a1BM",
  "key8": "2SMo7abuFMm26VB4WSkJ2i3A6oCg8QXgQgenkCcFUMxfzeHPSu3QyLAUYzTs4voBy9Xbq7z4RPKGKPczYyVT6vSB",
  "key9": "Vz8itLZCxcjj87iviPSrBTckGdWXzvNb47NrtUGmotMA13D4sqdhtZkDp6RqyBa1qdG9WVttwCmbvBK2wrJZsQF",
  "key10": "2ed1ovMWMoWwZuQpEJyAadEhtSkQVY77EeUkt9QwX1zi3rTpNDwu6cj5dkiMXuUB7VwTJz3nVEao82MzVEA195LJ",
  "key11": "5KiGeY64xCLE96tPrecDM2DArWs9xQ7xmyiBoXYqkZwR7eyH4zyPmMqXXphTPPBYJrEHV6gg7GKUuPuCTp5xSjEZ",
  "key12": "4adrGEc6WA6Fwgyv5PaZFQnTN3zWkvihQH1NwnVd7HkkxqYN9Pj1goT1WiU8zWtRRbjhB1dxKN1QctXj4Yx1udDa",
  "key13": "3pfkhCBKXFYXsP2upzrH8ALLE1gAMTEDei9CTAHCaZx3uV46JLxZUHL6xgZ5WL5VYWG6uCKdM9ztb2ATLCRb7pWj",
  "key14": "3uZUep6pRGPgQa7D3sse9PiB27ihrg3Tke4bxRuew7Ly2ukpjkzCjofsU7qKkGgKZfze4BYHy7dbPu1EnJ9qwVJ4",
  "key15": "KtKUVZkEcbAjXsJrryhPHFA1VGQ8tptkX9YvM9QjJx2dU89SZ4Vr9WXKdQGJrZLJMeMxQAyaihBoHBp8XhQ7z6G",
  "key16": "22MUvdzoD9RdrqCfnhuuTNrxLtsoPGQ9533KZyFrYtFTDJvCAFy59zdZTPbs1gChvXkv7jVHNtAk2JR32vQRatzC",
  "key17": "5XRN8ubapCfL5HVVQaEfycdVpH6nZoy7wynmSiiZNY7qLqQ4rAhNiXHbLjnbvnYzJ2vrf2gpA9d9hQHpc6KzWuEm",
  "key18": "44zw7WRkwck1kxyk8C1pi1hhyCCszUui64wskMa5E8RE2yH2DWVfe2so5W5zREaEooRwXhv2G5cVqe9p4KKSg3gN",
  "key19": "bh4duqrLkYmB5U83TATwgKPHS8AuvkzJoARfhVJNiDwPA31Kq8Hn2tujjpEhzoWndAec9wBsq7Y2iqBJQkk8W15",
  "key20": "4MjGjWCVEUT7h25kWx5H96AXChYepmepWy7QZtmrTan2T6RFYBMLCcsQCVP2jifSpVxb5rhChv3gncsb47Z4AACL",
  "key21": "nW6TLR6jdevuFyTHECbmX1c5HC4pdYzXq8cqfiVsQPrqDoDtwuLe5oySAZrBseuKJsu7M4pRHtqBWNvFsvJVZXL",
  "key22": "2cDZWN79ZDu5awPbVrREL5VMDeU7VtNd3uYGiPZZspLnaNeY7gSbvEMKW8edqEwNcLMSbXDhdgWsQdJA3NhgRnFu",
  "key23": "4Fh8rmsMhY5u3zGnYw39vdEUY1wDHYXthcVTrEwHYtkPUNEePSSuUgu5sXBLnJUcyNmMer7mSDXhX5L3rHCwK8bi",
  "key24": "8RMubKmXFKkZBtb9aqNo5qBZxqwYDQUk7eyAYJwy6dCdMqX6HxLeXSKEZCuKV8hpKsLhUPuWDj6otkUfUHGX3tD",
  "key25": "63iyNyWmGYuU4V5wA5hJBFiZsHjQ5PhKZZLbQZ6Q9F5WUG5T1DZBkDQY9s5AyRAkL5L4ZEu3ameu7eUxam13HjSF",
  "key26": "3iEzghMkCAcj2Aq2YoVZAuyTuifsyss1S2nrKzLZxhfrA9u1Ug2FqH9eMZwArvx8UxXeAnPGSXWkCY42c6VcvWGL",
  "key27": "53AgqpHXLGNmazheruVSqraohmYwquXSHEEZ1WFsB4Qn9o9y4EFHjU7ciGsiRtomycGMJMXPTX48nVg2c2QMWC48",
  "key28": "54qtMiDDU23wp1wm3c4v1k5C6gLVWjw2sUK8NAQBPiQR2LqaU9KAgc1E3G6YTMfB9fLe2jKuRJbg1NUdF8cYSQZ9",
  "key29": "5kGGZTtgHAZbEeSMKmkB5a33V57oZ26S4HUKQRf17AwH8rBeNhE6711DPVLkKME7n2mzZ2sKdQvbmXwtnbhdrCTg",
  "key30": "5YhDXV7LFfEvNso4j8TpM17qdHwA5bdmNAKn6w3PsoLdVK5fNzrKgvyg5HeDhCZA7o28GLShLEyvj6YwPpeYEMx5",
  "key31": "4URHyiZVfZehr94B97BsbmQRCjafjkAfXxe4oKfKhW2JRW4SCvgH2nyxoJZKsgiB6E5N3k3hfxGxihxb8nvz7Lon",
  "key32": "5toZ91Pv5WYQbP1QkwYPUtYnrwp8Hp4S2XcC9Sd6CQPRsSpoqb6vcezRBUZyWjWgFNPG53NrH9AQ9kg7Zs9rCaYn",
  "key33": "4DEL7rpPSTZwMJ6HSQCX7PKafnnz43FUXVEPabXiX2VrqwBHNr9aeY8Xtw5ZDd2G8ezhNvepfuuiZbovtLYSrL4c",
  "key34": "FHr5dBY2d2nNY4mVRugpihsPP4BbniFsPJ5MaVWjkqdPSkE7tycPqdphf74nLoR8LP39y3n4fAtcDk3Zx5Nv7W5",
  "key35": "3py6ity5nC5texFoPueTkDpfaCamrgS8jcgScx86yPYA4b35FfEiQDtQbG28rg4uC1U3J3Pmk4cXsnw7NPaw74GE",
  "key36": "4vTG3u8BCwauDsCXVkVrdy3i4VNywADgFSe8mg2scE9BU5nHPjszNxLgXU59YkDJosj1nJ7tCyWWsakVtMAGMYXd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
