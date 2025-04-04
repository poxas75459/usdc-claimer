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
    "37MPPjpGarkZyRJp6w4vsEPHQZWh32c3wEe82fbYRGevr8DJLQBjJUanFNkwCMcrfBALWVnmprpg6svgTg6LDsZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mb4Kcvb1FsT3mN2tjac3Etv8DU8ZFhfLM58UkmM2vpizuASdBjzu9A3dR91MZCVK9Y3XDvh788keEBJHKdrWzpS",
  "key1": "4NeCkeHeNeAE1yHVWcPqTtXch717Dbj41ZX8U4aJWVF3z23Jsp2qjb5dRiSaUjb3ZEJbFSLc2BGRQRWGCkJUgVfN",
  "key2": "31hYFgoDSfkx1zwjqzFRBPiLUJvydRo5Qed3PCdzW1VwANmVnM3YdCzGYknuKqvf9p7JKaiJvdkYBnyvv4qj143V",
  "key3": "25wphGzZGqR9KTZ8v21ZGk5hCeVw3hG1yUKyVePpNvfdiuxT8DzAeyX67dmh1eTHqfd3JB5fqujchFA5QTHHvKmb",
  "key4": "4GRvUS1NUnj5iydpFxBqEVFx8DLAVJj5zp5FnfjpYQn7hCDUz57DpVmhGhZTSe5p3yzGDfhbjZ41P1UUTCdN8z8W",
  "key5": "4ZiFEc5pHANwVgNNFBjXjvQdvv5dnP3L8q57PJ5rGDFBwZocN5D6KmwRPnddrNgaQVT8sojZaJ7hZN5Bcx5sgtFt",
  "key6": "4aKyBUCw9jNazMKsBCYpfs3A9TrBLGnNm1f9CaiPfvdpp4xdvo6dQTEcAYCURdEdLUMgsPjkruhbUHFYp8wKYzLQ",
  "key7": "51STvCBtLyBArCSynkq7FzctNEAcH4HYKNNryJ2aJefeHYTnkHnAZWRSujD4WHcVgo31Uk4GdbUjEd74HWqstrRQ",
  "key8": "3GbhTRNBk5tfB6KSwH6Erh6xeFCJsgaPB1f5YUNGzMLyTbsB1JvrB7YC4YNsHJx1LovNz1UA7CgSmURRi9wMA56x",
  "key9": "5y2Ho4ihresiXizkCyb5aNtDJx564DgJW3xmbk4URiHoNPT1dpoajW2ZijyhAw7DMV4ftxQ82oc2gyjouyXWiaxY",
  "key10": "44LCySrgchoKpTnxDsshbbg7duCTZ1LwC24eqZm7eZuADaedbcsptsAkX2gMGzYYhJmXETvYCAYtZFUrbXvNb22V",
  "key11": "2NnqZCvSkwqY6QJW3pDUWBfppiYEVnZSRmm9A8SuFMxeTrWXdZ9cz4VnbjaYTSkoqvfuwbxq7fQP8NsT8ujhwGnW",
  "key12": "3Q29nTMPeqCHBPTGrKTanepZxi5VVt5aA8HmHkUxDyKaAs5PHJMDiHM6bhKksWmp5E62DHJkc8Jbij12c8mkt6zc",
  "key13": "3YaHYAD18nU3ftCM4K491qWZX7wysnSTXkWxaXwzxbfows8RK6D4qRKW2YD3oRz1PGAXxnWSxkhLtmADqTLFbeQp",
  "key14": "4QJEEQsPiumAzeXcCqpPuWLfKnKQSWXMawahfAgvKXsDHqzfrs9t1vJwEHVjD8o8zWgEkmScunL8bmQfoy4yAbDK",
  "key15": "2UJQpjzBoeHgcM28dtjoJGF9yHjPJs6Byo2TqWMPWnxawg9JdN7qPbrq5f4ou8Bv8QqR5VEYM45nFPF2ZWZfcvEF",
  "key16": "hUrM4hNs9zHYmQM272b65rWxAB4Z33JcYMjMZHDN3dhvXaJEeNtVjLdMEJHdjwx7BWULgtANFRmDAhgsKijrQ2X",
  "key17": "3aKTYzTw9pi5adAZFwkWZLzoC1Gw5qoz4RVeXYaMw5k1t9pvVwNbq32HKZNzivECoiooKvMe2UWR7Si1ywMrpC11",
  "key18": "v3gVhGHUMJMFu4cEj6iLN2iRVR59rcZNVwj93xuX5HetAmac18mkEvWTFecfUtMJp5ECnzJrT5nwqTiWGyyzxCM",
  "key19": "cLfugZohQGPZFcGRkErwYXeU12PwEqn2Da6a4BfNbGJ979TAZfFqMKS8Bc4MVEiW2Xnewup4aaP36q4yDtrgS9L",
  "key20": "46psoKmWqFV6FX4Co5RhEFe8NfjqVniekiMbCmb5vc3exe9RenPE2MFq4wvNjbyxFJj3AQr4k9Mwzf5bUAZHCUX6",
  "key21": "2CeQaeLXNaP7nYjs5NR4bKVCbqac9hmbzkU5NAz6mKFmaC4P4p2FPPAovnNWrhNdWowvuqCqW7WtjEYvnE1D9mJZ",
  "key22": "5DpTa1i2euz7zJFn9xmcVJd2mcEfYt6HGazzUdoan3VT7qwcEi7Mmt2JvTEtFQEZ3mdMGVKnsMjZcZWdX2VsjirU",
  "key23": "2tyTngBEDBt9HUBewL7QUia5LYJWfnRgnQHaMgFTANYYsvetsNTcwXaxMfxu4qdgnHDATwHVDuK4ZN8vXnvQT4Gs",
  "key24": "5asDseqTvMqWgDeqPz5GHCFBJNTCRfzR5obghNssAYS384hcdEjmxVGUZBLLhPCgqH7MV4kRsyydBh4D6ihHHfQJ",
  "key25": "627FYS2gP6oEpm87fyJZFqxGHAjkstEsxLGbb9sGZkuU293Cb85wihhtgNnxrMKb6md75Egzg8mhMU6UZb6h5dah",
  "key26": "3LLaKS3czNmGBbuWYC9avTq2zcXib2q4gJdiurM7s3VVZ9qUkPaUXebxVeiYhYPAYVfqpbCSi4EVfZQja91n59VT",
  "key27": "3UcpQswg294h39v7Ayy9nkgNtXCmuKbFHDc6FArnFRcTVH2ZGRNCHaD1z4RSuAmVh2tE8UjHahpxPRWUqE2QMgZq",
  "key28": "2T7F9HBNaFYs1T7hw8YNdhQMNQcDRuJY8GXVyX9EnAyuYSeFqvACcJ8K6nuNmnAsVJdBKEeHs9d9n4Y9TiavNsHL"
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
