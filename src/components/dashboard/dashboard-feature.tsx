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
    "P5ofKApNDNamP89reJQz5oBqSheRipvRD2ckQrVg62KrSxko3oYBe4hgqq5evvmo3q5PjasTVXUeoUgp41rFxQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyPJDEegeVPmyDimkdAvtmFRH9o9RosXaqwH24bNZkgXpNNMkGjZzHDBYe7dYJ52G4EPDvmkpfbGGnNqPuPXVua",
  "key1": "a75kRy1TchQW11tFwjzfhevzeJ2TRjtsoWVQQ18oM4wgWgji4X24DYX7ucYRWzVM6Jd6iGNucxKUG6nnBEqCL96",
  "key2": "3Yyc6Y7urwdLT5ZgtQCaa1ukH2GssGtPwazLdPqs93r19txyZQShZEHoGeK3r3Cu296dcpRC1Ww3wkCc9UbfpUcm",
  "key3": "2Jf8Yp68RrF5zSZ2vnNw11UeZhUcFgVaWEFukTrZhpXAsV8yhmDkJiQZCSZLPSyp6pHxQ411n6SzB8hjbeJVkyc6",
  "key4": "4eRVPam4uCLF7sk4NTXRuPVFCv43Knfbkj57hfLuxSrUMTCQd63CtbYebWszdujCmBuWzpTfdekjd1Zk2fqPsa8z",
  "key5": "4CCg1VVBbFmtCkzhWmqxw4KzikAskyT4U26tp2ZJQCyHcXjz1Tk117tPtwELuyVgrVtmSfeSwPdREZByoAv6mXyV",
  "key6": "3QsSdxWcThxdeG5Dyrk3oucYVDPXYHrLZWByUshv1eZYjynopjGicnmsjsvZgDcZcnZ4Rkhgb9DznRjnkjMSpF6r",
  "key7": "TgZwatyM4KNRgzmDFX3ScNnC4dAcRy2JSCS4e6tE9Mor8vNaUNpcyBD331kZNmgtMCZSnoX1DefkCQ4511mwq5Z",
  "key8": "3H9P1Nwk6bmpsRMgYbr4qbfj49S2aqnZwhRZJvNRsuQbyUPAFhGp8MAkCUMzeEBcXNuAmopQZLCvhsjPStPRhexh",
  "key9": "hfiaccNL3kFLy1rESjgxkcLU8BS3YPGArXu1LfU74AsGB3zNsLd47S7AQFWDXg1EDN3T666djAcBBU8DJrAQQ2g",
  "key10": "2nDGoKEoCkNn4cCvjVbrZ6uk3RaAmGJAsVjr5fDaZq9yxLDHnzzbpsmxbLXfLFn45aRAE2jCNUDn7DE262Qr9ENt",
  "key11": "5RY7bvY6PrES9tx1Jd8T4TqEH2wWcfYrnG4zyYU7DSByieYUAzixEemBwY26ZKA54jZhS8epRgavXsp12PshBfLh",
  "key12": "2fovceihAGMS23q5cSpRw7ke6xnRkka1H5QAQfazsCxeApwLX5Gi5YLnHTvu7RrbvwJMw1mKvtiZsdNdJpfqMPA7",
  "key13": "2pFEj77PG4pTXqZVBt9xprpaeSqb4ejzDbrBKQ2uxywq2JbqxMMaJYM1gKSMCU5aXwfeyqXwZCQknDZR3pMF2QHe",
  "key14": "41M2z3iKRcnRvEBag3oXbcNP2ioQyF4vqFkCoZwPja726CA6fYMcz3MZ41FLkBeXRFNJWddhpBdZcHszywibVnmH",
  "key15": "3F6W43Jy12SovonDTPg8c4F5wAwa6YXgwhmnLYkbXNLWMrm7GfFNDNNetuhL2sjUXavDGkp3vG65esWnc73qmWLW",
  "key16": "4W3WjXsKVSmq6SaqRmRXPH2agy3CFpZsS5RqPCrDBZ6LyhYDfsuCiV3rvE64GmT22F78jToQJjiDSoMXnHL73Lgc",
  "key17": "4fTFdWxAkNkF6Erv44cD6BQwWEdW8V5Xx8qoHxADHTLduGDsnARMrE2iE6nZbiniqBNFqTTHN5rQnzWchd3MC6mx",
  "key18": "2YTRibvMANVE9Hp13on9spkJGrwrxvqa4WjdyzZzdJhbSgcBPNYsDcEQmjBmyL1BCPEJftonJpR2PJJcXY3x8BXZ",
  "key19": "vt872Fn2HF1QsbLtrAWmxG55h25mWY7CYQpVs3NJSkgb25KWkSEugibzVeJ5xCkDoz4s23RbEkzPeNNM9WvbaUY",
  "key20": "4WZunvbpdXcCh9TKRh6pR1pbvXG6HinHRcccmBzzi1xDCx1CYowh3rkJRYMzaK8ZCFyjcYftw9suJbNvfXyAEX6h",
  "key21": "5mEYGH4H78uqu7B8X9QPEMXWFJ6dkkXUW1ahCB61NLPNhiXgTe2xhvKrhxpBbydYFU9VUNoUVctjAvFLaL2nwWhN",
  "key22": "LowTA55Y4Um4RViyin2FoWVk1VwxijqthhEsSgCzQBkxR2iCt5sG7dgDkdPJW8hhh6R79D4iegv1Mitijqx8tk6",
  "key23": "3pBDHu3JA2msucKssiYFqq3EJ8STH65ciBdU2m1AAJXMMvpcGPVDCNY593U3CP2HVKGgAmwHt3ZQRWe6FWkoLaC4",
  "key24": "5TNyf8NqEyBiBpuK9qmGnotAiweJPWNMJqYvBM5G6FdPQUuHeVEkZzqn8XGSvdsV9be2XiHC5nw5xUuzSMxYxr8X",
  "key25": "rzas6GXZ8rvkPjW8vAYmRwVZW5aJpc149NDAgHP2XXtovt4nPEysYA22x7y3VCka2Ff6Ne7BM3se2nHxEYJgZqw",
  "key26": "SKq57SYNTwzQqiwGJqkiFvvJDS5aJ6CDHSzi1tNvJzVP1vrgXUCcjhWNCwUBPMV499X8pL81asqohfBxj6gt5Zs",
  "key27": "tdyAcPv2zpfxyZfPktjX8myzNL2uvpzQ6GRooKSm7Z9ofaqMRzJ2ZvAH3y2rBjcjj1ZTgzDP4ubARo9Apf7x9S5",
  "key28": "2YJFLSCKx3DySY3cR7xtUXyKuyKdSR2F4woEG7B1mGKQe9M62uud6NCUJn95rVC1LAcDG1AAHyeodnTyHY5ATpCp",
  "key29": "5trcRuopFM6f6s4yJF3fgihnvhPx6e3SWN1mzCokrC74EWaggFTcNVCJHvAnHWRgxEJcms38Lxjak7GACiriUkaa",
  "key30": "2cfx5n3zuJ7Bz6X44BwZiGFjtapVDmhX9eZZ4jXcSibZW8uYnBeHvSj9JJ3rpGXVatKoAZpvRRiyzvcoKtDDs8JH",
  "key31": "5TTix35aw3YUgqsH6HZ7Vb9qV2wL6SV21WZ8gPuXWRnkLce1dPRHauSA8WAfEqHxFE5JaKERDRzydohfcCwseZFX",
  "key32": "4jRW1ztbus9aEBo5w7CSL8qHAAW5S9pwxWobstp1hcXwNssHLfxdFbk7pzvK4xmpuqCbnbwfp1es5WMRsjHvYZhg",
  "key33": "D5ccDntrhHRwJ8CTsfXCZ7aSPa9RfLNMhtdKTZFRJqqrR61MyJLXXfodkErTDxHeXW8P8VXbJy5bwhjRWG4Teky",
  "key34": "53weR8PWguwAAFpPeXL1GiuuGYEaZ2ALq8jgPLMZtSW66erVSruLBrug3KsJr5VS4x7e4s7znLbZgWTi6U5GnX2W",
  "key35": "474LTHNdvLjpekiKbs9qa4oQ57RfJ9TEuCkvD5mpWU5WfNEoRcsdLqHzJKFFny6TiW4J9V74NYG2jGD5fufWnrXn"
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
