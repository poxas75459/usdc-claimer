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
    "4yYTRMbbADyASPMm3qwniKSmuRiAgJ5ZcHFAEMgvUeEAwNm43oCuTxNhv1pPXpASrAitteHQ249vMb1EN1jLn8ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ttq6j3dV1GeVt5rqjQNCNPZT6hHm89yscd44YbEAWQjU4yzJAnfJ4tTQ1BBQ22C1sWqfUC2TnKswVsYBcbWM5Fn",
  "key1": "5sw7hCeS8iRBTtDA1qBgzX3zyPpdgRWEvD7ZsFmJtDwzGcEz3PCpEkMP1sd2ZmYmgyvupN1yCDdvvmV8SdtBvE9L",
  "key2": "5MBckY7FMgrnhM8MT1bmq7Do7e56v1c3mF6Frge7K2SqrfPerNJenWw3otHGaSPjSdUTY6Jqx83ZvKo1SLGZaDXD",
  "key3": "3MFMhGE2dtb6cSXDSfRbbhGCv44GzQsSjMrsTHhnvEnRhLBU8NdMDtzby8oagrtHygoq8d4TMKAeKv2uvpmHGwfp",
  "key4": "33vQDmedvwwutPmF71Xwc5z2WHXNP9ki1TUaRv2nsvgsPKCTfVoywbcvoeVqRQsaXY3zTpArTBcj2pLTteczHLhj",
  "key5": "Jhnn6n41BSakqF6ydSLsJJRnG3d9i62F91VbUZ7Nj4nPcseGwaMZDu3NadjdSsTJALTv1ukGBp67f4WYXRQm24D",
  "key6": "utVFFB5EcX6Pv3DnCCvCLEzxV5tJDBAMzkTPuVJPW8Uh8zELSDRDEC8sfJYhfszjsBx1NRmUaXf5HSsu2fvKpvG",
  "key7": "2fUudMVFjPkc1KcQXHeRxbk1SbBRTSzGL9pei1h8LiHLMBpKURZ5x1L6aS6s3RZ9QuxqK3bTFPsFu1dh988EAY3s",
  "key8": "66DjLKTUXHubR1eyx5xs9CQv54dXieHUP2NnfouCGEzosTeCWbGuzdS5S1gybUrr7qD6Ztj99wEHymG6GDEE9Tre",
  "key9": "4F8DWfNw3hwFFJ2QGV1FG3GrLzPoUsTkqa9SwCEobdddSgT97U2KjC1vPGysqRXdorsZttH8iDjyPXiPtn82hfyE",
  "key10": "3qkLP443UyJqbHJc6RW9aRF66zsBwznpPbqme9AhRDVJvDwkszPptpBVnorMh8wPoxPNTp8FZ5HPd4KNoQEY5KBg",
  "key11": "4RKgRctsuPmCjmsoUYYdkJho7baQGVbBi9bQ6d48r5Tm9K9hahuZqb6vGvTJErxv1RNoa3s5PitY96vKBDUXAwUx",
  "key12": "2myYUrsm8e8hBLVfAmnsgz8AiXfuNPtuaTS6PHekaVwYkgRCsSu57W6ZwsbkCcRFhBam6NAHafc9eiZaAhNgDoEk",
  "key13": "52AbJFtvQKma6y1Q4x65BwmDUKhHCmjpWTPMHynQzGkLGRCaujxnTgbtMxiKKzRPggppMycKDUodApRtuQFbVtFn",
  "key14": "5r5S6yEiC57tNumj126LRGCkpe4xv2tFtycjJnbjBJHH1jDVzwmc3N4jWvYsTWUku69V9A6pw9VWU7unGDcnsZto",
  "key15": "5uyaa6X4D2xUe4Ax4EnQJNrHRyazEaGGWCzNnEeg5JKBDUCGnBZtb9xVrBZUfAnLETEztdaoUZevMgqeepUyMFVZ",
  "key16": "JxrbBN2cp9RiEvPBy3LyS2HRnWhsPTcurb3fQkPnnm7iKCJJqjXVK8vDg1Bd9ttu4GmLPsNXMUYqtdE9T1ikdfz",
  "key17": "4q4vuWTiGNaphw352GkPZm5a7GVn6GVPDAyTnFqVLR6nHSfxebGCSByDxT2QYJhFQH28sBytc9iNjFzvtTTeSP55",
  "key18": "2KhYhYexeSZ9mCZEcHBUfwA4FdKumg2iPxH8pwwgPebv8mcTSdJ25rBhN8KiuhAq18q59RDR3p6MuHo2y1mcdQZs",
  "key19": "tsogsSuTZe5AAF7yFFNoXHZACx2D6TfpUzxPAeJSiHaHiWyzrySqZj4A4EsKsVbJJSJPuUJ7uESy6gHsau75G2b",
  "key20": "PpLUmvCLiTcZYrW76K5hrJeT1Uv48LYucepioDmPR46zEKaZczLCXgLDR4ppbFNXPzcWpU8sUNTyunD7JnZ5bny",
  "key21": "5mKatS9ZtEVN176CioWYYCMq82wJG5n7JW1nZumqRw1Fix15hURMn65tsQr9WtQbuhSsrsKn3e3yXfqxAQyGPo1u",
  "key22": "4TQxdsUcTqFrRQQNf54t5friHAr3rvZ9eTWfCG7gDdrk5Q81AXjwkRcvd2LJp7e8zLUdZifJAdBovdH2STXb6d3M",
  "key23": "39c8ZUkb3npetLrCjoqJ7s8d7sFztd2GMgjs9K9XPCMZCVP3mm97txRk2nEcm8JzgkhNdL85MDuX2FYkAwWAZjei",
  "key24": "hkeTwAcBZBoXffTkeEUVm8hx7gYdE6vUBYbA9i8fwdxSuUMuHB14aq1PBBeZiXGBcLYSdqSRE6STBtxDpNJQCUr",
  "key25": "fTugExRSPmJk9dyG8fBS9ppTDyfyn8Yb1j5aF6PBKz3bkTbn7gSPsdcZF4q6d3nF9uGvX3eYcp4BLqqnYaCxmwQ",
  "key26": "2jjVNxNXXiKTFJSB6yH1GKfkGSsTKFMQfmsstzLNjHXoojUXe4dRJbhStRHS7AYnQsc9h6XNXVdWvY1iYgN9QmjC",
  "key27": "2KxvJSJyi7uBBwPhhZy88vR4gENLi7UeuAYPATwCX5e66iJWCWtfw2S417FQnw7mm8Y2atQMf1paR5SgKtc34zf7",
  "key28": "2j1pM8JFkYqcMSZmBYxrZ925VSMAgm4DTPvKZcfs8hrqg2zwvgcovUf9CpE1ZVFT2vPbvHncy9U9jakcSr9LPqV1",
  "key29": "q9Ry93VAo6TeEtscdbyHWLYxTX9qmPtW689MwZrbS16ymKpEBDFDJWaYqtDR3Aad5sMhd2c435ArtEaf3Cu9umL",
  "key30": "2ms5uVwXy43TPsoRvHtpmEPvePTqkGvkGYWVUkVFBbkivuw3Yvq6kVjjDn5vr2vkse9ETFcjjHGprtVjVgwuxYZn",
  "key31": "GntZ3A74YB1n6aWv5489tJnPn9G9JADEHLxfcBjoqAUPmQtH1ECwKpBSpU6BhHBB3Zyf5jwiVK1psivfEiJ2W2x",
  "key32": "5wDSLTpMzQpywhbKeoF13wP64SMB4Jrj3VMMsDAkYt3y6YXK6DkaLR1b87M5ph5DAo8Fyha2fKc2cPEvzksat5vB",
  "key33": "2REmnWRndZecKWs8PGA3DNVdLo3TwWS6wLZa3eXM7rR6zpv67BAiNEyjDaVawG8VPHZtiWP9LLsy4cQjSJZAAasF",
  "key34": "dABRt4H3swp2oRoiSnGmynpQbVXYnVhscieCyphhFCRurTt4Xkw6MvPwKYQ9ExuJYSPceYKus8X1H1vR14sJ8B9",
  "key35": "2qRzqvLy73wboD1ccWDvXGjN7AvcVGXfezRwKVnTt62FTAapZYztuB3o6qybKE7kTsDTqYTWUs28g2Vk6wR9dHc8",
  "key36": "2pwFQzzBrw13CK5B5GY58fiHdzZ4RDR8HdL6eiWhUcsysYyh6dVeBj9raGZ2MKeF84TumworGiRj1vJFzeHiyaBq",
  "key37": "PnRTP3zBDsRC2hUfwaJLcjTJCTSh78k6wbp6B1ukWPrhNLeFi51LBKivGxPRQjurh9U3TDD1CMu5R4b7G9LiPnA",
  "key38": "P9fwHVMGqd4Y8CnnpdMzKGQv3qd5WxAkQP4LBE1oxCFgWNurm8rrsaaDVdUFJ3yRi5P2rQCDJVjZNRLxQJZcXQe",
  "key39": "3gVL1suxCJtviBCfhumpzbJiT1dhwmspZ2hKGXdFLhueVzdGXGj88YhvnvW5NBVTEv3QXxuTh6v6GeAEspEfbndy",
  "key40": "wMnHxzj1sa52J9PNYvPvJNEUp6gWHDqd5KgjMMjDcBNdF5Cp8a8Yc5B5RDupR358AwQWXN2h6ENpVF7Nu46Qf4T"
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
