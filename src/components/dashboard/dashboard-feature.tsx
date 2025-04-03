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
    "2zPieoUBeieLuVkpiVRqCZnc6i7Bx7BXKQ2HDHeJiSWD9vokQd4iC1X1xqULmsMRB3xwYBYnwBa7CDBWrZydMFQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFstj8MoqjgSZPoiWy2KPi9Z97hyWfjxFapHBdkBae8GhxzQMpBXscoBe35ExAnsWjdXLM1ijdWdMtGLYm3fcKX",
  "key1": "3faXZzeLudcX7skWt4PMqdB4BYDytpb7xT8bBxbc5GDmwQZbLDZFmutrdfPDwy2oGj9w6JerpDzS2u6w5uz6s3Nd",
  "key2": "2es5eQVmeD4RmPKQSFaHpt83JM5D34CxcoyDioxPRiGzPNXgMKax4JEPxv3ibN7xaKEt6vdah1n3pdvvLySugxfJ",
  "key3": "2y9KnLFDkBaxAnzGSUaHqcsxW6iUcYcWYFQiryJ52fnzyRgJ7Jr4JxQ43UKT1cLGNt7YWkjLPoi5xWEmzK3DG1BV",
  "key4": "3Zuzd7m6qAMnywAuPFzCgazfao8UepvapNpJ1QZfWwQn5CrEjpc4XRt5SNhip69zz8edxMZ9nPF8jcaotDCEPQGA",
  "key5": "27Jj3EbtwdZoAT1ZRUqXFwNNJH5Ki4D3Yvgo5CpkoePrNwQ1Q56R2PQvs8WDUxqWE3XuCN9TZuiechHYL4LMMKzw",
  "key6": "5HESPrX43zmjbgerxRPFLgNgkquWvQ1sFWxpHEfQh6WoXwEeLVXQ2AXFpLWs2jDr69nGeK7eoqsVN2g9osUKjGmL",
  "key7": "2yze7tGM8Rec5evKWGkwY9joPDikFbA3rLJcgw5rDo3DXQgZ9g1cJu5QgBD8k8FVkuCryP9fUNLWNwwH3seZtBBo",
  "key8": "3LYnWE8NmYgMCpJ3bjge6cPMmtfV3EB3FXzNx39B84YZ874wzujrTZK12nh48K5FxFdc2pvRTxqg81t5vVzfRz2",
  "key9": "4Cj28V1fQ43VtP7L2mRTR29iUpAfcfj2akh7CAyQPkf8tdxoa7Kqi1LEGiZTzT5jp9Xc6f6KRH94YbBC7kbSAFLg",
  "key10": "QAvvRehrVjCYNLE9o9umjjLDYKkc4NaTSmyFrUxfZTAZ2c9nmCjJg8jau2smhjWivZ7AVo9X8tGGEzw7xJu4iqe",
  "key11": "6xmrvxY3fNNzdDmfcn3CnKWCn9hQPTAxaU8BdpW4DJrArzQt7SZLL7zwT4qthCKSeC3e2zf5z45CjUzkV5ycPkm",
  "key12": "3RB8kcTaYWjSkWRLdS2Ja8XTEaQq8jVKnQSZwek3s3WsPHbb5isk7hNP5GDkLHLQonHFPingeFy7cjHgRwMwq75",
  "key13": "2p3xz8odU92bfDVjjPsshgXCrUBoSLHE7i7xW5kriLhAXktPYAX4Awy362gAGQD5MyZygFdgZ9H59Bxi184Ntdc4",
  "key14": "2bsAE47iQZi9EKQZkPYeT2hiBDLMe8tJNyE56fuV3oYG4htttHw5G5g8rQPawMbTFCpgJxQR6kbvBz9AcGCMZ7Jw",
  "key15": "3UKrg1Dqr92bkBSY8LtJUDfezf5Cf1a7cjTecAmh74U8X2CpvoLztpfLou5ynZPTtgnfXABDXvuuQNLm3mVVNJAg",
  "key16": "2Z8G4DUEEANJ8zKYCCtarQ41QoJTaJRtb1A7oYHeQFR6szngHQKyjYPcXSwQj75Qn7Pat9kjbaaHVJwbQFxRdBtd",
  "key17": "4mQYf7QPbW9VouP8gbRYNMawNyAXuRtMfW2fPATqgJEijxWbFQBYAVYsdrUNoxTkX9W66GCXL3X4WKqJToh9Vpxs",
  "key18": "52XCfFZo2CgJjrL1gVt7vsWR5JrSXxUAF1v1YYrc3MvuHTDQsuunYomssSEK9Qv6N9VrYiHc15fa9Z68Bsu7iABB",
  "key19": "iCLQekL66VBmVYayUiTDVYgUrtbWHbPDHYKmQSDezaLpHCb1Gf9wFcMYdc9DvC1Bn4XNoM28BoTdANv4tGVTFyz",
  "key20": "124FbA7EyMRDYxAFeGwVV4kCKdWUtoxJQikjyHpCTp4WMCjXEZey5n1hBLNXN1ZrViAtz9rh5v6Mc1NDCjLax4kN",
  "key21": "3gC3bYmXKYGS79Z67TiqDidCTUCedTGW9MC6rFnG1ZRGezwGP6eNDaeUujCoodvt9KmRJzdfWM8b2UVGRA5SS7RG",
  "key22": "3a7bez8RS8Pta9HuWLmmvj1YdouQWKDe4F3y984n3k6ugLqfSi8VXj1kQHGocy9og24aQgkVBzwp6xzWL2jUwa2i",
  "key23": "44J8rfzbNLw4tPXaruwJyV6rMP3pFHbw1QsSaZNSc6n9cqg2h4wm5NaKLoHv9DRMBQwrYKCWt4ZgS3NeMHSa1eod",
  "key24": "3X4rsFUesg7FHGTrfxCa7kSEY5noeJD937n6VLkp3wSsAdv9tAo34QwXDV2nfjknKJSedBhrwwuFo7eWaPGShyox",
  "key25": "8CtGiRx8g3mdzzg92YfDGfcgh1dWqDvwneEW3iYr4Avn6MfzEeo9ACs7ox2ipEopLBGs98veo2xd9TkpjZYQ1tt",
  "key26": "3Xe182MFkt28MYpBdgk9P4TJx9CTkB2iK82Xcnuc4JZnHyMYxfCYJq56RdDU87yhXZbHop6gXYbVpw8VoBpgBpdR",
  "key27": "G9VYHqAjuCZeSEZkhDTRWpVwrgWHABVJrNU5pj7EqwHM45wVa18tT1fJnvVYUXN51QRUMwEYPxGu26it3A1JN5N",
  "key28": "HiLjMT4oGWbdskuobJiDzXQNDsJ7emFE1tLjiv5wyDR8oN8obNZS19xqLpuirCVc2CirjP9Q6wrKDXkc8ZC4SQK",
  "key29": "34PgFaRy5nBcMK3dMguKDht1enmv8Q5NoPgiHmWpFYTFAUy5ezwEcLMSBi69FEej7E8CtzMtNFyDW61NuMdBovBY",
  "key30": "ojZwZRHbnY8NV7seaB6XJkgRNoWeDyckfZT4PYQMUsM9dJqR7xftrWgr7JgqPYLkFNg8VtezkPsx2JF8QBDzCvP",
  "key31": "p4RDvRhsiRs4ui4nAeY2J9Ph1brhLCSAtXz6PMGN3ef5eHDKTkygPVpc5g16Ni6yVFCjWBvvtL6yHVRPJpfEAqL",
  "key32": "4tUh79c5iffAo5qbrNyG4rmWPALLNmMCHxdDrbfLRkpAnBcTcaqCDCvBUEKY5Bz9m5HDMvmyjdppZV123d9rR3p3",
  "key33": "9c4TVX4h36JoEGVrpfaqp1v7rWSmjNqYFJKe7L3mbLF9TCcpn3W7eBDBsTHSyxxRJ7HTKARaAG1YtF5pmBX3CSw",
  "key34": "2Lk1Sx8jMZX5jCwmGU3tj8cSZRRh6A6wCBXgFwMxree7DJ1jZA9xCt1GaAajau3hn4sgUvxMwba7UPKTNDqX5cyU",
  "key35": "3Wes1hypkt4GkhCbeJkF4VwXpVtVE35WDVPaMAYUdQ9tLXRueoNGTwDNxbzusshTdGzqKstHEqFe8Ff4iiTNZgpm",
  "key36": "2g9A8oWfg43oryzDTUsQutiDc6Qv6WJdmzSxgwQtQZWetk77EDp5JTeoDtpeJkz7dGu8t2Pn6qb9e6Cnianh2eH7",
  "key37": "32FNmtj77vCth142m4aWeWghEUSYAph3uEGfxB3x2Qx1JpZ2CiSrKkb53T1ou5BFCcdakPkzoWUNrTxi1WjGz7Jc",
  "key38": "41hWTi9CD7whqZgG89uJR2W4Mvc5wbjoKrDbWmeosPi7FYYrmKRAnK6Zox1uh6mfkTtHCgqc3q2TdNiHJsLoXLd4",
  "key39": "2modfanh7CwksVBzETT5tbd5fzKh8iZQhTLNL7z64qpUG2cPaZ8Jjb5Mu7THvHujK5WL5ZBqop3nEgD8BbcRwBtm",
  "key40": "2t5CcjFb6PHPWj17fhvduzdZTc1yTYbBxRuX1cS73mT6yHNaaj2rupm8U7ykNoqbTVNnA5dkr5LyQyPzPQvuKcNN"
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
