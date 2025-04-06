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
    "jANQYqhvz4QiFexdYy9c2g9R3Xq7j6bggV7m6BC8UBWNAMMQe481NPekAbfXYPmXFytYjdS73oopub2ptiqUL7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lonw7notveGBCJXuAqstBQenN6ETFXKUv4LeqnVwTVbDMDrGFo5Bbjth4qQo4v4eLJqPL7wJiBFYb4EgCDcGQB1",
  "key1": "3AfgSt18MsGXzoMny7nL9R4GHVjNmnGUjaVkcY4sM9GDGoLh7pPiXGoM8JVYKWK1MaK9VFJPDY2NYSBR2WaBynmX",
  "key2": "4hgbKuAW6N4piWFxRXcnv91WeKNDxRumQd9FM9kJaYcb36HtY5C7BDfQMWpYp7aZWwZz6uJNpkbDPESm33zKmDmM",
  "key3": "5HUi25EdVz93Yt1sDetMQirzzfQDH5wnLFbHahVHLnfxsmH2rNCwQTGYRb5Gm59bwGkZ1etcebmN9LQp45LeJAd2",
  "key4": "4N2GF2ViuaqYDwKbE3fjVMNPomBrdiShJBtvygJiSZCw49DAGMohYG8UGR252SszwbgS2WkTHSo4gy9s1xs2R2cD",
  "key5": "3BwVYMQdEhU4fgY5QMu293v8yLVwwL8XNHWZA1T3ZeMwL5VbrGP3xiZVsb4ZcApEMecsGrbaV47FaQpycsguxXkY",
  "key6": "35Xqc4w5HEyrgVT9h1pBy8pxhbVFTbo9k7A36CycPf5eJFrYAyWcNgDc9GffQmvfyeSAenD4xNsEaShk6ZT5ZpGp",
  "key7": "4ZPCRz2438Ux4MWy7ZfM2UbPjWEai1gXLhkiMoy3PkPPyboDW9Wr97LhemtkaPLyTDmAQWm3jBkxiGYFTm74hRXY",
  "key8": "2khGEZ1WWewhfBgK5PbAn9xYtyWpXZjMcWqe8X3JNaLTnUxQEvKT3qon1a5wUZ3bvAahB9Cxeo2G5j5ZEfFLpWPt",
  "key9": "4WLQdcCoMUQdaLN3DZ5cyS8dE6qNybzzFraodGTPxZH9hq3Y3UgzJfACoDt93LqfiZkrWEqkLd4cnerAsysC9Jf8",
  "key10": "4Wg53tvPVBnVVQLok3Xbkqt3jdgmUbFtSKC4NBbaXPj8vgbbUvV6G5TgrSdmQNFnGoYS6HB7WZiSeosqNiByedLQ",
  "key11": "4rYuHriE5gWqiTdQJZcrj5aNnEvvsbHysSLb5ScsUqhTChvPudqegf7Y6wGz2NYYRwYoNnURfxMXCR2TwLUADXmR",
  "key12": "3xabYLbjhsMvxmhyW2vQ2BKrjsUhUMkhsq3KKHqBc6hDvMTcgw4eeaLgKM3xnDnPkSggqsShuQt8ftSjdC8j5d2M",
  "key13": "36ugCh4vc2t8nMmSwAjdtm2WS9tu6Mn11fRSZnAQDDkkZebtN8gWgbgvAHE9t84ya9c99MkyfEM5RkPHgkhbMYDj",
  "key14": "61g5GLZjEF3m91kgXwHfnRtKr2ME6MijQBPFzv5BGRezwK9i1x65unE3dk4qvBJ8xsgrXT2rZoYK1aqJRBdc8dPe",
  "key15": "4cac2Gk1b9xFFYkumMhQuCiryGtpaaVab5m3y8VyxS1iEpY8HSk3A3VkkZWF28hBKFB37mffCNehJeaYaH1JAaLr",
  "key16": "427S8gaUrXquyzKYjRAjPGcygqRjZShPxczK5G4NuSHhnsfdSUaM7ja4V4yzuHTb5ivgJA9Gd1E87zik6K88zwiL",
  "key17": "2VeCJoMgqEz3ABuEfgfqsWm62P8qrntVw9ejtojsxPRggrVTpWMMtG5izyFVpU4eABMP9BE2U4ayWxYWu746SABT",
  "key18": "51mWnuon95hrzyaNtxJgp2QJKMRBbZs6WYik3EFKsg9i9XAHKpzu56Za2rScdAp3rJzVWdwRv8wk536d2qu6Hfff",
  "key19": "jhm9dhNFdsHV57n2MP5DGpVMWrYPMnLoKe8mdu8v7sFg4a79GQdgPHmF2zbw3UK7RXuEJFxYbon296ahYd2LuVi",
  "key20": "53kag8or1xNQGGAM16L8xP31EfrPDyPF6cADU3HcSkad9SHqHNcEF3HyrpvSR3eMxAk6E4Ft1KwdqvjqBAZ3fbid",
  "key21": "d4YVGat6svrowcLZTw1mxBtXcxQkwHW2uMrSLB6mdqpsKg7gciMr9Ev8xhQJpRiAxVoWzA9mP3sRYLqw39Mfqet",
  "key22": "5amiZSoRNvF7PNL2BrrauZveVg3yoUJ69pMP4XiWv7VY26Beh8deNXaiDqBnRP8oqHizq9TzX9RAgzvcjQJj3YVL",
  "key23": "5F2eVfv36DcYuNWcKy24yrUfkA5S1CCCXdNRKNqmkizVtGwhonkeudpfZon32Ae5kQtwnrRpr5dhE5PwPTYV4pWi",
  "key24": "3T783jFwcj6Ez5Fy6wBc6fqbVZXfrkKtJE7sWLYiXaW1DTavs4As8SYcGWzd24dB3r6tpmHXY1zHth6nFWpQr7Dg",
  "key25": "rGa9wD1Ug47UZ4HqqeVnz1gevg9JcAJ7rH3XSiYyVhJi5sDQ4Gctnhzv4yCr7RUzjGh3AfR4BzuKjAjvrqKMZfJ",
  "key26": "5A6JKS89pUn4o9pWDwuewuVLsVtX424FsYDVde1BM7z4QVaVfkuZzeddWctDaQfq5T5a91Bb2uXdaRVxcYWV7ohh",
  "key27": "3dEgZSKNzifhyiKrhLRDEZBgg6znp6Mu6VaLYAXY8xjC9ZfBNmLFjoZWsBP2fDAFNPX9tQ2eLQrpNnw1gs8yjQM1",
  "key28": "4zVJXfCqJrRazVPUn2FSzya1Pvjr3ZjxGBmtDXi4WdqRvgSm5rajJwGw8XEd1wTgppLrcGh1vEEki67X7Z5ybyVG",
  "key29": "61mRkgnkr5mKm6dWHaoUgmwHBjnn8f7BMtwUUJx56Y1YiDjmVDsNMzFciKmP92VoJNV1VzYZruWwqpCcbLPKkLeo",
  "key30": "tSyqsCyX6CmHXKYzYpZu5bxPtCorcP1wpa3bbsKxC4xiBUcQkV8hMWjbULZNyNWdLuTc3fWaNKzUC7SdAejx1W3",
  "key31": "FWwkY1obqvkNryBb1orzDQ8h5NSf7dSf5sX5t5NqYWZQpvpgpdJSkqQQ8CJVP539i89cvbwSKQnv62QwHGbZBTR",
  "key32": "5LEXLbFXVTjdYUZh7GBQPn5XerohLjUUjkwKhv7kbrb6cQhcR1jnmdKC4KajsmD6erFNBai6yycFxCY8K6QYnnpX",
  "key33": "kQhZ8st7EmvMU5ucGrigtCKFn1AgsZhNaEwjvq92eeTYJbiLW9RfMVf8xJxAG9tFAdBHJyNSPrqcFHB3gDu7sHZ",
  "key34": "2feuDD9WK6QX4zYTRNnsUWYnYyPwYc2V2rrpryhWucGgzcUJPSgKrbxSASPcvdZ4JK4sXVjsbefCNzYtFJZomMoV",
  "key35": "3KHRXkv2fLVEV7ZsX3GccUMKLjMFyauj5VNhTS6EihudvctuLuyevjKpN8fLAvpAaLMc2TM6gqzk5ovFT9Achxwj"
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
