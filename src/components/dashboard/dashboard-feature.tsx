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
    "3vssmC11aeERvGVqPFJ8MyRhesPwk4opHGW9yB1sytBNGHmhyxwyruP6Rj25s76tCS1kCZfCfEVXiih62Rpg29oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsrQ3yWbeQXpgwruHGzttEg7ARCEZaYAjVvZX33yy6pWRT5FjVBPnBK2j6W8GpX9V7f8xTLka4UJSXXdHEbSmyJ",
  "key1": "4y82Nb4M8fEbWL1JdWwDTzB9m8QihcbWiUm1PJ1weqURmtodxsHc2XiQXT83LKS8adr15eCMyzo65DETYnTReLud",
  "key2": "32ckmCEoi29z6V9ennNswZJp14rcRK9jPdUcvBooW7zvzyt3CFwUs545auBXT3ucPWwisPhiw3EkSMCj3GqyrGpK",
  "key3": "4pZYHX7ZtpMWjrS34TYGfxvt1MuDWCMPtNRoX8jhgj3oeT9pda3NPfPeGsonmZDfyRRxT5kKQLwoKTCawScuujz5",
  "key4": "248u9RzvoVgZQ1PCzp6rsXkJmcDoAdggHaHLXgttnzaKcS8HX1AJdtgarsdfjBttm6NxcZNab4Hm6PpHzGLbKjjG",
  "key5": "5mgmFs3chBbzobncNJdKJY1tZsBJt8F3U6C2Ay4Dr8W5JbNjPt2C2LfxNX2QucjimEDjEDiyUBPoG7fTt1kHtLBL",
  "key6": "21ncnTVT55Epg7oiqxXUbRNM1s3i6xsETFcyqvcRT9wYPE6b6CZujVbGKXHxrF4bNeYxrQ5cFitCDQotXAJw4aoq",
  "key7": "3KMhFNENM4wmVa1dg3vJRN1s18njfB7RQmNXmXufJAq3qFb3Am9AnZqfMoiSedg7MVudNmtxKKmSvjGScqY92eWv",
  "key8": "4yuh4eEkJNqPnPeh5RmCzCmjexWteuKQyGaRa4WehkTSRoBRP1RQkhyWjTFtevtrmWa8VCpGdK1xpiWn6W4MdrRD",
  "key9": "5LVmFo5CFejs4fGVc1xNFZdjUFV1PrxHCjHbniedVPiCppsejLWDfeKyo3B5TtC9fv7pG8Zar41wGaC1urEhhTYM",
  "key10": "3XXCswAvbrT4hk4zrkwk25PCExuegqmKsueKomSXpUH8Lasm9muPWdntkLJrhAECZqFgVZwvAApKkAcdQRFWejyb",
  "key11": "4jLDNgrgatBnDo1Fw68pb7sxfC79X2NBmSfQu91nN6z8WPk1aAZQNWVw4wvSkXU8xUuf2kyjhA76ZgbgkAZQC2Ms",
  "key12": "46o9DzVAez2Pd1n2tk5pKK5w61qDSaWjHuHRHayebq6E6M1iW9zgnBkyyfUhQAxpC16wZBSdD6ZVYWyDLFS92Wko",
  "key13": "5mKFJt8Q8xE5zxMvmEubsDPhp7UwRsoT8tK48tYL8Kdyxfbs8k7n9jMxna6ecg8Tr4pHmpt5aVsqiEjknCf26pvn",
  "key14": "3Es3PXqTQAVuZWTzCcPmj3EMv6V2Cijrz8cZSPrjdNTY6fBqbZnpFYPg3AZirECZ9Wbr4hRBKeRY8U6NudTgtjNV",
  "key15": "65XzSdYtQmpHCuBSFr2h1H9vjAkznS6jo2VfRAqz8hut9uhxFbZ7sxJsRMAzXkct2r1sDZedBgkFJEXaeiLZkem1",
  "key16": "2Uk8VQq5euebsbYp4GgpAWpBxSLebapLEcXJU4bye5b6wBtkK9nQfSiVGvsqcCY94Qf1ZsLqK65ALq3X15YwHwPc",
  "key17": "2T4WKfViLSZooumMepAGBypmm45DHTo2AnuV3VksbCjFrxNo1ugwM8QsBaaGCxjLQ5MHKqefkoieRB8L72s2qP4X",
  "key18": "66aZe3o9wQ1XriyvQrobno5EngHwFeAQbgA4RaiFYiyA6DtVbuMeaHek3G12CtaYA5WkY9GgJwF1UxZFDxttskMf",
  "key19": "2Jr4WHf82HgHJS2rNJzC6pZduWjFaourDbXP4a3z6m2jPkm9BgbZo1YKs1XbAac7AgtCs2dF59f4mBSrwL7q7TNA",
  "key20": "3PtwETKu2KE5PcC6DHe7AxP72EVd5GPxy5yyzEeH7io8ts2aVD88uFkS2f7Y3wsxxKH7ohdq4FbhQXPMbLSFqNZ6",
  "key21": "5TUrzDFQWEQ9WJ54j2JsNTG4fznRsXKDVJBkjbDPw7CNS7rSQMgHZxCBuexPhacHm8RvLGe64EDbCDsV1Ng6NjLH",
  "key22": "3qtrtGMqgQoHzcM6fdGcBdLiFSaAU7Qq2rjebjdxMRdqBkf6rY2bi4Bqi8uAVCFj9THmPdwjQkodZbRNoptzhCoA",
  "key23": "28yk2c4fo5CWpoSd6pdpjyXHG4je21f3KEJWTwEUKoL3jwKVe8gkecRFkK54Q1iJjSgA54PKtzDf5nwdNthzGTqB",
  "key24": "34xy6SYSn5DcGNsDX3vxguBraUshQ8HEn1wnRGJ2wTCSv33DPukcgTEcPfqQw42Mrd8W7LjS9m9u42vkYimQHnxB",
  "key25": "2J6G63cK7crsTqSsU3dVZ67fYPtoEn4y78iLxtsnGzNSQs2iLM1tKbbTCeN1w6HvZLRCoPURVAMoXNPu31J3Wa9u",
  "key26": "43XhyYjAJFLEkrguEXFupYyUU5tR4Ud63W5AJLpLt2KdcFP4xBz23zaDQGxtmVRVQ4965GeknjV6hBSZL7vTvneC",
  "key27": "3THz342Y3w7rSJpJhzeoJojkqhq1EKsqtbfbvppmEWKeJqCjver5hCbVWbBEyzbSX1iXDqQhRy5atxYq8Y75qAs3",
  "key28": "4MB7m7RrHXC6n1VqrhQFmnbuFyt6CLaJLmLZfXYb6Ag6AEE9CQXn3gPVKdoyQ9ehkkQRP8CPNvRKm7yKHpjbScbo",
  "key29": "4NdjeeKgeAthWK5ny2E7PWoUBrWhGi8hDKjXbHdApfNVKtKS2RtiCXW8MdAjpZVP3D6Ms7zjbNBgsGwDvCTAQ1Jx",
  "key30": "2yLaHT7xKxuAb5yrb3tHr43BaewGHpqZrVwR48bnPMXaEF67wePefBQwPhupjCjyzt8axJUGgBPkiA4VaJ34tesr",
  "key31": "3nnnChEKjeCbixoT9vFSyeQmsaSaRcfwbw3arP1ip6PPUqYqoS1ZQ23s1fYp2bDP8nJcqSARRPM1LoHnd2NNc3mQ",
  "key32": "3KWx6jieSPVGCsAAkF1CCbkDx4cGALBLzTrzigwt7xGZJNYhA3HqMCcwuBZbwTuoyHvt6em5mTcFS9VyKz4p2qum",
  "key33": "EEpZSp1TYq8aBwDoxacTnyEyhkgnyAbDFvG3kvxtagcfLYEahkV42DJt8ov8wQ43WMJwgQg6Z6qc9b96Aw5EHSJ",
  "key34": "jpgCFHahssdd2NtCqecYwijcaYu4fjUYrNCPi3NByPe2Dpua3PTPr81Wm3DTYJ1esXj8fikXZxbHtwqjMxvyzFK",
  "key35": "4En9b6ziubxN7z9nDSMCk3i4Fa8Qg47Y34DkkDHh2GJxSZn8ywTzPuXxc1FrjiakQth3GbvMuf7RxWPLyPs9riZz",
  "key36": "4ahNMzm5rYjbfs2q3J8yWhM48wuguRrkbm8a5j9Rfny1HMwenPfSdsJq5FrmtJWb1HeQoqPXewAErexPXAG3mQgj",
  "key37": "5cEzR6zvtS4bFwQszRCQVUJCPAWy9AYJFxwKsaJFqmpELJiJW7y2edn7byKaAxo2USvR7bqnRS2SyEfiX8uphhaM"
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
