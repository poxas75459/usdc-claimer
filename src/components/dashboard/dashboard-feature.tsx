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
    "6uM2LBvvaeErchssTqagGH5CG217rTioFzwZz3TN9a7iPf2Tgi6psCgsBkkU3ai1Kp5p1ZCqUvu4Ua1T1bEbaga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEAVfYuRbeAaPLGhqWaXHMTz8oiFK4vvwAQUB4v9JUAYwsdakCZsPwAchY4osnWpqAJRNXNTys7FFpeWdL11qEc",
  "key1": "4oU76P1GpcNH3Z5kup6nsw5z4v3SUWddiz2juz63CfEeFWYqJ3C8n9rAY7jyFfSxhLzJZyuixh6iYEDpG6N3pCxv",
  "key2": "AHRmNvgMpzTSLMBqV5xD9UDdFg88AmpnaT4CHhztRigCUBnAs7SUtVEKve7vAERsJvZnbVe4Thdb7pUALEc9R9r",
  "key3": "4oLd9ortv7ox5hLREixh5E6NnuUJwoAeZcqmKGXJThoFSZ973P1tcuSknXszN7Fnz2Wy3C6GfpveeW5QoH2x5HJr",
  "key4": "5LUtALiqfw9GDJBewBVpzB4GLcRmHGZTB7zhuUCE9U4X22N85yfoJvNsyctohKaCcUDRBSzomeaRRNf1QE3p8Udk",
  "key5": "51o82qWSu6VcnyQGuM9BpPYxjwnixZASmMHabQ71LGRY6DhRFpLowyrZVCSPo4ZPN4SqQ3KgoJgWRQgLgzY8Z5a1",
  "key6": "2KVkNcwM8U8jFtrVKk6AjtpZf73w4Ux9cQZF1ZCiqTgiPtvzATaonxttnfX4bHkDdZ8hcNh6xkqUnfJGvbyw1mi9",
  "key7": "z11c3gZ7dx2BFGj2LenxSG4oHdCxKgn1q8djbWVwTZAVbix9Aq5W8Lwb2qpgksoqJTMaLKiXqi22PXvUFfYuHqk",
  "key8": "2BhF6bdcxJgBGwMrwZoLVJKTfmbJ6HWF1xPckxnRGF3C6L9ugaf5N6ezhE8DbYaTh4HxGpGLdJFsmRGHfsjFzk1w",
  "key9": "3fapFWKABfZuUSp8TSbBNFVsPSJniAHA9pLH8V4siANhFTV9TGGX4rpAinkq7fLAkRTH7VuWHgEXdxitd22LuqZi",
  "key10": "2FbdwMia1SuSZoHoJ6VfckTEWEMZ2HmsLXQBX4tfiN6UvUd8fXHd6TuqhndUpqqURsrqtYGLykRzaho1Rs9p3aMZ",
  "key11": "65efxahLdqUGQfbeuiUvEKe2nEnpN67d1oAKMMLyhhYezUZebGUUiod9swpgJevMZvpdCzBm9uQTJ9XbPGQJodUj",
  "key12": "5nyo9oFGMoJbDtz6HkmohHNpwR5KNUKD6g3XXcBweXNrGhVj56eriH16wkNJsDNkGVyB4Xbr2UgVvSzgxpdWHArc",
  "key13": "Ss5YqBjs2jetTZf2CGHAW69f8VWc6cRjACgTZ7v22TNy4dXHwFVmMDM57DzN4iRRbpjQNxM3LQxP112QMpo8hv7",
  "key14": "5FUHjEWSuMKsShRr5s9Pm9N2iy8w3NRvuoXGTSZYKHNsumaUGdPMWzeBcqYtP2GeUbGgzPySvedNXrQrAntAhPgM",
  "key15": "3AQtvQVELcysszo13V2sEntRXLoonZPE6XHckStRXsyoKi368T4723CR8yQRvo8ey6dUrw8pUjpMcnXwQbasLrPf",
  "key16": "2BtY6YZCEqwSCwi4WNB5PqrcZWzjKeYE6mS6Pdiwn5nPY6LG4CSwihJBq1Fwj4EwvJky2keBSATi9t1CLAe7Pt8T",
  "key17": "x68Vg8wWBc5U9KgJUUSzoXtRVbJ8QXvEELvvkfMPRzcAsX9GaXwZEb4xqFNrGa2RftaTiHzpVzS4Dp6kxD86RW1",
  "key18": "4sxvNHZyGbzFi4gmDg298HhTya8i4TJP16jmcb6QkvRkgemMhiHorPwciUYh51Q4wWH9anDLvJ3fx8hcZmGJpwDM",
  "key19": "2eE9vKR2kUaFV6a3yohaKKVbCJM2UbsHBKr9USvmhsMFK3QdvFF89brmz8inPCJ6TE2SKfqFzseC1tQ2zcUJ1Wgd",
  "key20": "3eD1myaoxyUPmgCK9xAvv3zPHB9MBDbxi3tCkFxgz7Gkxb2LymwnpESMKp2kZ6eGVPF6p9N1ap48UbxxFvbQLy3h",
  "key21": "2pfssoKFc8ipcrA67vo7DX9bESrbHFcHDid6Qik3WQ7vr8LyjSzsvYffFztskq6sTceGdnX74HGCUKZQSuHpDscD",
  "key22": "5irCcA5qvXCMMoRZKHxP6UY1STemETjLPtPLHsateyYprQMkrTxAzbsLeidPENnZAjs8HxZUHxwY6oB78dztsssw",
  "key23": "3MgTSfjTHDnNBaA5j19YhxWhtMVpi4jVmYheyGErQEpFohjbJdHSSiGjKgEMXgxytHV1r3aoAfrvY36kPUviSwyi",
  "key24": "4Z5aZYjbjwAicKoN2QuMokFZ7bPLNXKLAmfqBTpJEqpgXparRQK5i8YEGgquZcNAgbszkgzfmuiExa5ygKkoRXMy",
  "key25": "kLteZw6CT26G1wxdbbUPjxQ3gwpkdkdPZq9ki17iZWZd3pTvo9GoJ5hvUp4KQiSFy9pTWXa4PdmauhK8TnQ6xuh",
  "key26": "3FZSnWziezCL2MncH81oNSDGZ1y5GrPUPRibyP47wdWQSoSznwaQSrVSoeET7h3qG2XaNFw6JjNTAtbKHZ1gHCwu"
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
