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
    "4RCZYhwqmLs5uoTtopVe9mKezJujdKGbbzPdv8cyVViGwGvMS38z9zpghSiQTwsgUzsCKgTznHHvsKjXYBMy5Web"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eSkoDa8HKwUBvfu367qBB5f7p2zc9qNd2LNP1ktRKj77mmDHhvyYsCm9AYgbozxvNhKu8gCvDM37L2hTFjs7E7",
  "key1": "3GXwp5iaBLJkeG2qc8v8ZBKcRDqUXqs637MnF5nDJKar6UxQAVrvv3wGC4LBY4Pvo2hfWg7xU1v3P99mtyHWXZqb",
  "key2": "4j9xcMX1UHQAkyNMXVuPLXcD1pMbHPHz6JpesisXWm9wSYszHHCdQEkYpxXcvFikghboXZxQUqFkLM2NkvJUuZf",
  "key3": "35GWSdyit8AmVaTtBZfdayZ7wrkXG3W6PMKUYZb18n88qawGFCZ98E7bnUxEZMS8zZVRbmksGosBxSDvMSo8o6T6",
  "key4": "5ZtoJuyUmy5gRGux1j6bgypZLao61UL7Gqx2RaDcB3koyTktT8JujNAQHFKP3sp2tMG8SFUSEiY9UxJiyMaBQVcF",
  "key5": "5MSNt9SKAAU3dYHN2KDTmaLHNmf786USpPnw5qkusevJpfhMg4SpCE6diK6d55NcNoKRQyfYxes1dqFwVyUoeqr7",
  "key6": "3XqgCLxwbsY4MP7fgvfApaXWeCJmjanHoY9DexGmfRJNN8KELxytkdFSmBbkp3YckojDkrEtu6pngwgAadp4QjpP",
  "key7": "4d2T6K67LEqHrW93sDXYMjyXrPPmgksau8yvTfyHnqkxwxCWrpDaop4B7jYdpy3a3bVaFjjnH26nZc8r7r1QoeVg",
  "key8": "34qAgMJafpaWoZBv85wd5DoDPFzXstTiA6iw3k3AGE9P2swh8aTaVxN75NujdZTgFiXLaFy1dpmjC4NLdXdxdKAc",
  "key9": "2RngHa69E4Ki8ibrT2p5oWsAwrp5fkN6whFiCQRDr5ZbqVYJSSJ1AUeCvzGqmAB9YuTUMVfCPTWn97hvvXtGVaYx",
  "key10": "5EYb8DyWj6U8ccJbY2vS6m5jZmXh1fWfVWdn2E1BRFWLndBvcKnfkiiHmv4q6jSJetSdTDonATPtWFSXY2udsn8E",
  "key11": "56PEYk8JiKsVom1REPF8rw5qg3XESqax9E6cKBptAQqh8PvNpQzTr2ZsSkd4DCNbQubxSMEcTARHBQ1gurVSbDKw",
  "key12": "3iJ4nRBLN4M3KSXu217hnyjYNqxjmuQELazi5LU2EjU2cHZTjaQVqQgU7HknbHY6SLS9peD7zpteGurCGKaitE9r",
  "key13": "GFYaPuhvyP9QSyC5KH6CSrVqkDqBtjTQLESgzR1sCiBWAPJkP1WQdHzhnUg4tNr8KmfXE952eTBcPVJmbvpNEXm",
  "key14": "5zk9Y9x4jfV4ULEzGm3BKHpBfF9ma6BmJtvTHaNJ4PT8WZ9VZVov2KpTKYiSTJ2ACzuYc7Qb5THzfozL4eBbuK8M",
  "key15": "23EPgyDJ2dDjPXW1JRJeRH9PyX8kqdb4QRX4THnQVQAWk5dC9G1E3kNpUyqpUt6MQL5RNwVRb8wLsqwRdUS4whzt",
  "key16": "67kq6nLahfxrCzhvjdH5wH1bcV38bJhyBcWRdmYdbC84tSdPDbBp4XUrr1t7wtR8xPu3oCavg1E6DJV2MbsRETZf",
  "key17": "Y4rCSoZjKRypAgcAzvdoMLNMmEWiNMkfLzxXRi1Bgpc5RvDDX2hiWiMU6GufNmHf6fwFm7MSyVRZ9NH82dcyXxT",
  "key18": "5tDrVDBfcCowzwSNvVJNgz7vmT2N3mtQPrXsoyCSiP86ykqd49DpaWgh4rWMUJwQB25X7uhCAudeqnrPmLfV73K8",
  "key19": "3jMMhhzYRgG5AQHJ1uEtrwqVopNkKFhyu2AdDFpGxb56KTBdzXskkJCWVLhoJ4K6iCBunvALREreHi55XQ1VEeLF",
  "key20": "wHjm7MY3FYW6yopo81r9HMqD4aodyxak1fmBSU38GGnTvSX39dPPwkrtW6iFTcSzYPygdUE4oVKZWoW49GhFTYu",
  "key21": "5GcjmBCmSP2y1odp8YKMgx5jErhF7PhesrvSiwbi8MWmPuEeLkLevgA4AAa7XoJHkMfPVPjH1jKn6vvnJMogytsf",
  "key22": "nGqNuTBJgwGJ5knmQXVzT63TuLc7fsoGEv4JX3aAYF3HNcMF6U8osoizyPMk3H1Z8CN4gP7Ea26xostAmLsiEoC",
  "key23": "66BSCAFkM6HtopXG4pdd8eyrPkq22UCWK2v97zQ6piJKWVJqHN6nexGLSNLyaUqV6CCEfKEyZPtBccgw2pW5UgAx",
  "key24": "2F88hhkepNbK6i8dUwotXgD1yfwqo6fTDwtNMquPtQ93iR7kY3xHaQBxwc7wY2PcZkv45R3VEZLgiD6R7qKuMLwH",
  "key25": "YVa1s4QYRsSCoCBAAZMrtboC7w7kMgmpvameUvCGUU8ZTheDQQds1zZ5B6kbE3F6SMivwbsvENeddJkjciC4nR9",
  "key26": "CGS3oju6WCH3s2ing3mB3F83oQEcgNu3ExMSDr3WzPWUTzTfxwEzu5kvAogMKg552A8pm4MioghbPQyDz9MTZDT",
  "key27": "3ym7F2yBQpsUHkpJcgaka3e6L83gBFzENvQLXidmEzThQX97iBSerCe7xkKQrfkaxsn9BYXA3H4kqkd7VbMryxjz",
  "key28": "vdEgctcnoRy2pFDM5YkuvNWdTtjcu918CG6E5qDr9nBGmrMa5nLtRDUM8VHoirucXwq1vGebivp54tu2it7jvKR",
  "key29": "2aunaFarRTaEeedV3qcmsipK4Cqb79GPfJazLoFTBRLQFrwzPEJGDya2QV8Wiwp363GUozYzec3sBzc8CRPCoZR8",
  "key30": "5yDM7SFsndUpqskXP9oZBcc4coafrbS3ZXGsAdsbMdPUuisaYrj7oAyhwaFrtf1Z36hDrH25mT2CfrRtWpgTtgds",
  "key31": "4aJUMvLvPcuDg2YT21W7uuMUeUtgeK8rQaSTh4DHoy2ht2cmsetv8Tsp8zvKpQTFoptqQ17HYmMtP2B8VpnmpNNY",
  "key32": "39PrctJMvuKrdNrV61gABjoF6unJXxirj67MuDjKeCduLdGfZMiV1xUBrwiHDMDEDdkKhmuVrNTTFm3rLxpWMei3",
  "key33": "5HideKi4rgXjB8UAcwmRrcmX624VjCnfb1QRwK2xgHoLVdL3WBfodYpb9pmQracnCQUegFm3vBtQVN3AcfQYMaEH",
  "key34": "2MMaYJXP6v3PQYsqW67tdGcSo9NzzvV36vkoPb6ZFCf3f5wRf6ebAU1mVPAidBCeBaVQjRwwCaBTcdWMoS2pgf5r",
  "key35": "4crW1ebL4dqPH4UXMTowudGmKdapU7v5cBpD64Mm4sL3bDfaPDjvxxBQX1h2fE2xZzDWqwuoTzShdWHWM4DknTxQ",
  "key36": "5RzwyGNPgvGKURrredsNJe7upv1m7bn8ipfE7XVgcZghBntnjjYXn6L8gtCVdh9CPMbDTRRQRdAE66NE3iJLhYnz",
  "key37": "5rGzrtsS1cuXY1BzypwSt5sngE8wQnaH6fjMh32wVmcqmgtnACbxu6aUUdnpPUdit2CxYwybEyFUfSu6qKWSTiXM",
  "key38": "24vSajwLH1BxxKUvCaZVAB7Nk3ULmat6YxGdRSs2ixaLtx3oJrrPqxHKj7wSQJDFWnCjPzhHp1uiprXCpDdNcpM5",
  "key39": "5GB1m1Bpn3S3xRx8YXMyhXPpnnP3beP3FhyHoJt1KnLWN2WGsVAtd8GbjjK4VrR2x39oHddpUAmvF5s3g6LUbZsT",
  "key40": "2nmaxq9Dkagp3N78UV9EvJtKmrkrw58UkJ5d69ysywuU2JrtFKQQLfvKiSM4b9f7DhZ2HzM1D7xqcUEHJ7A4E399",
  "key41": "1HQusFRQQEbiPxe51YFy5Tj6jA1xvxhcADCsAK8TXD3NVQGKcKQbgGLieZAGoRLMPcXgKQyMJCa7YzPCXZrL5ju"
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
