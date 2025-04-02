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
    "26uGo74JJvsWPM7heenby8MsWpW2UENEBVAbhygqqJuFDZn1so3ULvGs3ujFrCX7ftRi8v69JMzcss5iiByhL85c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtzBr1nBX6EcQiX5X3ax2u51Us4fDtmmi2r9yVpkUmiDVGdpZ4N2iP5JAYGmGqSVrfoUEMLhTmv2y8c13ohCpvg",
  "key1": "3KABeaDGEHkgHydkZkFYCg6r5vx1Kp4jCoc5mjjJjyYtW99gEjDmb5u7Ziujae5vSie5232YpfLKdjcaw7AegyiW",
  "key2": "2yDho4tQ1KGTqL6f1bc2JknRsJ3K4cEQmhkAkvsptpfr2uRawR2XeV1zeSDkKm4uZHj2nFpxNLcwqTzfA4TdFB8t",
  "key3": "4fgof87Ap8bag6R8pYfzaQRMSShyLd2Zv6EVUWYXguWi1U7fcbGJfuybbWtV4JFWpxKJPECKnFM1RJcF9jHk7wKp",
  "key4": "2sEoMYoYsRMd8pktd5iD8cXCT1EvGuQRbqEmViJCyGnBCm11kLBwRvKFAxDkNJNMPho4ed7aKj622Z94bMtrsJCZ",
  "key5": "2UcbPopVbRkbxQaM1qVSHYmU5i9tdvng7RDSmFDcHAgG5u7V38uLna7jWnKZ3imGwL2DWQgztezo9iuL4tUyWFhB",
  "key6": "2fwxy2YvH7JXz1v4MxAK5mFTMq8pds2wrojruFuCrm5zED1jFqrX1PFdLtUuck2vpAVcdnE9a7MPAYRMNmiHwsVw",
  "key7": "4qfoH4tNfVBJ71AM86y47D9uDZrKt2EAcaxptdzB7gH4mQFZe25J1NkupgXQbDj66vNkkq11beb5pRMc67AZbrXm",
  "key8": "8Ed2MmwLyiFQtbs9NSXzWgczjC8MBS49T95vWSipaeShKacxynWQzsYdW76soRqUQxpCZ6BtcAWB36ZekrRFyQk",
  "key9": "29hNEDFMbcn1CShCj8RPAoTqi27G1reBhEYKBYHoJ6Q5NYcJCCoT1BS6npBvnsBqeFX826tyGEWMv2LRj6nLR93a",
  "key10": "4wECig5D7joX6iEvfpT4hViFsWwtVRqRp91jjsPLGWqU3xd6fYgKbDBVZoRiVACCCHgfsHnXzhWoX2AGmPT9X4bV",
  "key11": "2gDYbrnRBVfV4mqwaaQktFh2GUP7H9xwZX8MpkWEcYw8aA4YALf84XbVLYjciGyLPJNc7fy7seujidtWNZRH916F",
  "key12": "Bps541CjnxzeYH56ag7Mn1KB9TWa42UkGPKoVhXYJ4PrVq9ey4t6hYXLQsEbpJyUrZKBDRdTeB6h52ewRei6WmD",
  "key13": "21CjHWZvgDv5WhNXh3PMt1hLcHZnmznexRe6QtjXHcVGmCWjcvqMx8zXwyPCkPRAP9kUfgGcSkAxvwuQZ2V4hDvC",
  "key14": "3JZR93xgaGkMToFiCzoJMLzyzgKebk942Ui2VnaiPHKe5AvVrF21g1CCTwwFtCLJVRdRg687ZNegcwmtZGEe9gkp",
  "key15": "4NzRBJ5AxfQtyzSFcyA9dKuhUbRUGGSGumXFYg3gGpJwkrxYfVMfq1ArDAd34dZLVzE8uop5XcPL7fGyktThYEDL",
  "key16": "3BZzJBAZmZ4xGkLUv8GTmbhHbiKpDR3RdoTrmZRQtTHBff1x527MybkFuhJW38gkD1c2kKu9EkauTd2GNp3ymv4m",
  "key17": "JtVbB8GrkHCDQJ9iV9kvSLtAgRyMt3X8vDYmojk9cu2K32i9DfJ1iU6CYrVeiNasjNYjGxFsgCmxsG58tzzbRq7",
  "key18": "5KnSGTrjj4XuBvZz6Fpmh1ReGMnAkF4VvD6tmePMEDvK9wv1ZfAhAnoL6UhQWiwwsRPF8nuTihgqzT5cSyppuThb",
  "key19": "5qKP5ut6Sk58BGztrwpxWKYB3mBs9TLEsb91wKE2QJMKXLrH7ffyzkbvhpooiZTBkc2t5NEhEYT5HNAQFsvNvnUM",
  "key20": "2J6Wq5nv4D1YLi3uDwUdXAVbax95dteeMio9FfEqjqi3i923d4dt6wz5mkY9xJhE7iL4YW2JsnivAYA8ogggPkzK",
  "key21": "2TatVBnaTnup8wDogntekR3H9VamwfEKNWqUViVRswpvtmLC6qkBKSLd2JEZU1nhi3VAuCf2D4fHykmt6Pz8qaCY",
  "key22": "4HKSD64BR19DTXgYU7rvFFqynaFajdsaWEaWZuXJeWhD3pPQArhutWUUfd7pGULqs5e6SbW2AY1i7yqyMAS6yR1D",
  "key23": "4BoumCNs162djiKQoyqMVRamAAG2HUEyFRpu4efK55B6Ztxibf1YJBoSUPH9qnMN9WXQk9VU1TaTsdqcX5mNzkvm",
  "key24": "2YC4Aw8bMhMLvNLDpuGWjgtvVbj8ByvKkf8G8PevNamdnPR991Ad1Gfzitxow6U6F94soGrLMiCMi6SbMvwxYU9H",
  "key25": "5pYBQsTDJaKdg8txNMF5MLaLaDQ34EXZAj3RsVpxySjRG4p4Xx3bFGZV18gFP3mvW8swkaZEGj32gHQxTwc13hXi",
  "key26": "3tmphDQdSWEs62e8kaVm7Yuf9vrn3hKSLWxZK74YTP2Xn99mtzVvYwT5q46yvEpFfVGuruovH24L7GxLjw2NZ116",
  "key27": "5kFUhrxSUKKqPDLE1ojUzhA5tBs7aXvjBriTPQuX4sHxUUsSgD4Qr3Srqmxwjxz8NBCpU8eCFHs2fHK838pdjkC3",
  "key28": "2iKC3fJUX3uz6gYZXknKYz2EugDUHrNbxWsyLptuY4frrTNWX9S7p79NZW9HRVx6ZRUnnCgCRwWh55cp8sH4QrVE",
  "key29": "2A3ob5xDJWbF7p683d3UW2saSnftHH3nVuP8DdoEQhDMmo9VuQP4mH9pJyQRyEupfWh93fvADFwVQUQt17WpT6cF",
  "key30": "1aqPxQxvwW3SoB9fWUgTaiGCDVzYrYHY12aF9AdEcqVmLfA2nefnpJ9CSQKDbfCAuK4FYXSBwYFpg7FBwe3XE2X",
  "key31": "3oUf4GQYVg563Prx1rW6V8Ack8zi3Hf65JpQCPfsMwttZktSCbPYe9wiWXTyri3DBJ69ZmJ7Kx1vy8ct4nNdH1dG",
  "key32": "2NJZWZ83v52hWazDnAYd3brCCzsdqWz42rUPq2kTyiG5KXpTEQvUXCkr9LfKjJ8Ekh9175PR6vqn3BCdgtsGzrTx",
  "key33": "3KLwKNCo1oiDyFFtyV3MhSr1PF2atfv1zq6kGF5wJ1ndBD27NYiT4v4KnJvkBrwaKEJLRZueuQUaVGRXPsiEpVaV",
  "key34": "ZSj86ispioDfgXMS1hEMZoTXEvSXcerYmcqzQbU7ffZFsQYt7gPrhG4GWZSY61x5ZFzFL8y5Qi3U3zU72RGe47t",
  "key35": "4otcABreChR5eZX7eTHmPcKR6wWYXFc8j8uY8acHTSP7vZHHptMAQgXHtt5JUsBVRSyfQt77E2fmcEgNq7x32JBq",
  "key36": "5P3hUdRUhzdfFucQLTJQPQFbtpnr91oAnhWocrP6eDsVNDn4nSsfmwu7Mf7H328ttsST3wZ2NUmaX86Rp1nJP9ps",
  "key37": "3xk58ztDKLAqtgtigsM284ZiQjVmAVmYjWpSVfw6WzZtdSz8euKxuiPdUBp57iyPmy1FaCn8zE3eqv3jRE4H3f3d",
  "key38": "3XvcyxASf4TdQ2NG26NF4Kz4xVpB1Xz8kbrmvCwA1dZUiSrSGb8TrBF8YSS4p3QUVDG2EHbi2CkSTzjxXkUWrSBM",
  "key39": "4mWnFpCay7db7V6eEewWs8jgvN7bHxbRzVwVud9RafUHwGG81JWtCmr2cZvSXsifHBorMVQNe3wPotrKuJNoDL56",
  "key40": "CpZ2iGuUS6KKnA43h3M4F5LeMULjPTpX8YSTeEzMzRSFyxLyXwvoMW3bHRSpwpaP8cSrF12TDif3pTD1hyqv1mG",
  "key41": "2Mby75qEtspBDr4kbgzxuHsdVfePmz7aNTaTVZyBeFzm7SXdMt7DTpvPFEPunc1ku9DN2GfoGEAomWR53TXFB2Bg"
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
