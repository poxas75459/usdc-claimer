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
    "3UChqhNe54TM63PEQkP5GJ7tMu2hrZSsz2MLrmHJZTt5rpfza7AsD7Yu4baL2fNchEQi1fq5WU8XE8wiCqn2C1kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yi73RV9ypPZwGixXaur2DFB1REREGc4m7fpVcskeRoR9r3gvaqU3tx2P3oTHFvimpmJaoNo7WHyoae3oEDHBVqp",
  "key1": "5YBYaSUH7Yu4rGWYuP7nKRsHULhMqccWhA8JTTtLebYQxjEntFVi6YkdmRXmbUHYUVxi7gXrFEMXz5aH8SSkvQKN",
  "key2": "2YbpBmpWfjMspFZMYxKC9wuDxSnUXcstaKxTredZ44nLg9odmqHMMtx1WFsndpK45viVuP4JhxrF2qewc54aqGef",
  "key3": "3oUWt5FV9TgVZaDruCgTscW5dywsifNNEYymbqRVrwfGLFp6xcH75WP7EB7RDP3UirKJ7nQGBvtn36gw7pnso1PG",
  "key4": "5jzTdyfLaob7oLmzAibfVtKfCEqTstDBNEFzMS8DWQsuqPcpGAeBdpcGnjDPSyPx7eNerphsQyD7kmtv5bgbYTX9",
  "key5": "ntvqdAr1dwVfLXyxGJCxefj7qmxdNLsLDjruo5rBbXwPPzsXxVprUeE69P2znNKwwhVZPizccDBg8JVt9XJ8vUX",
  "key6": "3z8etMRGAbtcQg6dALCEV8h5xwYU6vht21X3KcuNZd71g7Ri2AarrXQATWTmHZ388J31eKsymxe1bhHaMnLta2N2",
  "key7": "55uop22hM4TPNCNT8CBy68vWHqYqZDU1V1fLSU2Q44E5EgfdcXQUsCnNsx8HtVKAJpzuxQfi4shhNFjv7LoKtFpq",
  "key8": "5E6VAv1JPshLfYcX5DNG312YStVR6TwGBU24ZiQ2GBbTWJob6nkJGzjWXenLDwzoiRWAv5QuEPaZhvpU4D5tfCa9",
  "key9": "4gdFjLZuUAQs7A5cj9ixWUEWVeZYJJKKwhL4as8kiQSeohfGFv6V8j81ApfRraqZhuomYBcgfH4Dz7JFihW65kmM",
  "key10": "3EamuHbboDTKyoVEnqQrCTxjgzHsEBuYNdL2CcEHECz7FuWZj6gD5bY66F56R5NRsEMMSbSBQxQ1YoguXRxnGiEm",
  "key11": "3Uh2EZ31gGhRNTMVxtQ8wyhzy5Lm37JaFs7M8wkrN5uwgQAcqee2fmAnj8WYg4iMyZcAPBWdwxmHSykZrjYohLcf",
  "key12": "223MsESxhFRDSpk833YeE1QPz9mgPKumDPKXdZdkfg2X3QKJudHxa1s4UxA5cU2rnTxV9CncHGE98Binf5EGXJpW",
  "key13": "2jsPYkiTBWMRxCwDwJVuvXLxy9C5438RcicCeA3j8TMXm2izF1H8z8cXQBGrRruzzVoPRsHQVQ99NpfCFpbHwjz6",
  "key14": "vFnbLGfzmQhKvoShvMh6GN5fdjVxiDaGXrW3sQpxtfRNuq47JLDiw5ga8BGqMShmgoPAKUJ4QuaVwZ7iS1hYZcV",
  "key15": "3PH2KFq2tHdFyocCjRQm8fi6Pgok3K5xg8S7us7EH1iKe74ZJLJ4QLembxQFLjCP4C1YpBbGadoSVvB2qnj87tHx",
  "key16": "2xwbbzeWE3jSvXYEkNjAx7ZUjYnmxgz68HezPm9KYpgQhbnRS6j8JDeZXGJG1WkPPG7vdTrAj1vhHtYjMbRNzbnP",
  "key17": "4a4kuZEEAmN1wTyBNQK9DbdHCPbXtgSPp4noyLWQmocrbB75YhrmoxXKHifTqqn3dJ6ttvGAuvj8cjDmvUoWF6xk",
  "key18": "4CHXhM8mxMfM9sYoBScbCvfEXLWjQdVyW3uCc99WLgVr6gidJZo3cNpaWr77cnjv6iS7jMHqeUtqkAEgd1iPNPgC",
  "key19": "KQTqEYWiTyhBQifecKxGcu4Lx3ofvEnzY5CvXEpgkDiTkJ6nLSi7knXyed3e8rXtiGEMApQMsYJxT46WP8Qr7zg",
  "key20": "43aqDP1RyynaWyBBJoCKU3C8zNxXxPDm7gcw7zWCxWNaDskGFAb4yTSL54PJhYFj9pAMwdXgo6vU8ruhPVCkDZUr",
  "key21": "2y6ivgGdnh2B7DzTA7SXUZZDWMKsHLxFwd6sKeHVmwS1r7f2jHD1HWsL4YyDyyaBrXc3WdEALCL9JzyPT6EUGxoy",
  "key22": "fTnvUx818aZKmqfVsUuDJkEfNkg8JGR1UDoVG1VgsmqWiLwQjMQgKRFCqwzAvi2ZTDZz1zdctixYRYKaTFzqPij",
  "key23": "wa1tRbhLxHFpY2Ji7Acts3BqkVejq2KQ3e61dzaCg1GTzCLPXopkh7woncmKE7z6Jaj8BrszcrwNodUpN8JpG84",
  "key24": "2emMhEtu5FSjbVx6HXr2WD7qiduNSxhLj8k4UhoQ4AoyMmRWQddR7Q3vgEPtkENywLV8LmUeev9NRdXvCqtxSsvU",
  "key25": "3NLjZjs7ZEVVYqT33ba5atrhz247HpQacvhS9xN4EUj71BXUUsqHWcDtno581F2ujv957dTxWnSxckUBVEf3c14D",
  "key26": "Stj64cUAHTW8B3UwdPQQmaEQjqWHtsLvfmCkBrMPfCLk2NxT5e6bXYNRbqAycyEVD3Em7sqbQKKHWJcDJv2LV6M",
  "key27": "3T3bAU4E49ZBii2hs87tNnV87XikDd85jpj6Zk6WbBaDoSxKGSGmf1nfzDMxt3ftfXMLFiRVHMs68VCaiFQmcgF7",
  "key28": "2K7sM7kfKb3MWuLdUjyemqWBd5yfimg1dJFeFTLeZAnLnvbLsJMjM6Y6vYkpoTYaEw5GfM3yhxAZb2DnJv6RChJi"
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
