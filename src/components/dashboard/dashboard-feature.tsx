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
    "21Vpi5fFxB5GBU4hj8Z5YBN7Ji4jcgzAShYoWvUQSXbdEEh5nX9tMQ9qZsVg4RpzGGjdoDHwZW4PR4L35BoUkrWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZvJibf6Q7TxSAYDUAtKevTSLatCz3LdfBdLgpvdj94sKj6BgSb5uukhKZADTKek4C7McBrANYeXX7CPt3RVU4x",
  "key1": "3qT5okzXW4dXgZaWCr1pQ5ny17S3tTxpZ5siUBVmQa59bndLsBuamEj1VkJtCsDgPk9gB253nAmZz5WZnRSpbacJ",
  "key2": "4QgmKqPb38SRwe6zCwRsz87mx86nSLCQ5keGrsrmd5GcJXaQk1S9a9BnCoHbJACMmMscxbbX8Ga699v2vk1YrFna",
  "key3": "45MLvFLMLbtYa92XKVLhjfuEvfBLEJisXvjv6Vn6dSfPrwYdGvHfNmLoxGQabpw3kdfqG9p3DeqcuhvjwmFcnh7E",
  "key4": "34dH2geRnGD9BdXRqoMgT3gTK1rDn9knfxSHxdfALgTzdvYGG9guapFUfCKphRrVN6YV6BpskovReX4h5vXzPFQJ",
  "key5": "3fzdY99kdVik4w832L5w6UtUXKdbxNit3ReqGtGz3ysYVEowKvn9BnSFxAT7AtwurvCugCVaoTQFR5KazyWd3it4",
  "key6": "2VHX2VCcmvqhBLHQ7XQhjNDwKq16VtveA3DPK3xBRjD4woCnrhn1tzMpLqhZFy2KAtTHB28PsMSi15APDVmZ4ZE",
  "key7": "3wBevvUZzQP5n7gnim1SZScgDuSLp3m8cVsRaNLWw4wEg9fSYZ4uLnNVwXZg72iF5zH1mdCsAa94p2HuM5qMPNqP",
  "key8": "35xTxvKA8tFQhTTaWW71M2En9V5xXu74vCbuk4Hw9UDjmaJJqJ6v48NhDuKXAkZR5a9tqat2kgzxRdEM4mbGuc9w",
  "key9": "4AdMdq5KNa59eTzSJgnWgpJo81tMPrG2AtKw9LXWdFPHcq1G25fpauhxzUJvLszKhDL3H9Tvq433BiuFAqyfys24",
  "key10": "4UXP4DCmTBK7x2bkdYABbvEqGaKKDnqmMjL1QNqdsvLHGTJgPe6HGs9U153LzMNZ9zBdsxvNxmgmiWuez54mCqii",
  "key11": "4CHf4M5g4DVDWHayRqs9JGSvjMXCcNWovW3Xvgygejf6adEPCg3o3tDKsi9cbtxYgc3R5dKZaaAjoabkTyUyGLEE",
  "key12": "3SDXf4Yc7ZBGHNeyYGcUt76dC9G6SpNVbHTo5j2WVwypwAhjYDYH9Nj6XN6iHJFnVc2diqJ9CNUyoY2XykN4SQrd",
  "key13": "4Ln8VYiwuk3pS4CrczUPi82eNqV3FSi5eSo7eAF19dBvCLqPFvaScVERTeDKLp1FRpiDF6vjvWnuWGPAXA46Z1eX",
  "key14": "5CKwwW55XwmY9zGbGKVuwt8W8GEqJXHggFfQ7aowzw4eoi4gjDNkYNr5sFXGRXDgN5sa8QvB4F2gFhFZgpjkzfWj",
  "key15": "2f5Sq44RQwh7d75quBUFzjXdTfHjUr2t65SX2JeuPbokyHX5ZVG2YAhBQyt5UDZ7Vc9qmQVCPkE51kJiiZkEgdWi",
  "key16": "5TGkuiULoP4WMjZqJd4pUf9oCkyN2T7TuM92KWnZ2nXVwt4t8bjixiL21T2cykJ5mtLpZzrmqACKDukPaiQKvDEd",
  "key17": "43jbAKaNXVXaKE5iLY5uwFt6pTUFj6VwWW56kgU22tRHfUwECkQqsdys1x31viy7RehAXTuxtA4EXLaMfWWFayx4",
  "key18": "5ftevKv9gkWMHbBQhH1LZMJdKMBCsoC9J8CdBhzLHPiDnXQEagr8cUQqAu11ARDANuQguWnnwYiicDWvEaRKuzj9",
  "key19": "2XkKvL7URjji59oav4sYgp9edYZ2RAV8ZDrbkcGedcJuciJ3vovZEWmDfCUD2eg9fvxRDfXFyoWfqhWaDSigA2aY",
  "key20": "2qMkghSNUbEP15EABDPQcuL2gGXmDKfuim8PXikVYsMi1BiisFXetpLJZiMfX5U8ji1QtnS2HhB4LaLymAoEgbaM",
  "key21": "5nWSNqqJyBBgZuVXMekUVMDLrhnsDEvJxgmUiu3i4MAvamthid82zricuxZ3uhrg7NKjQJx6k81rUAfrYFNkZc6U",
  "key22": "4cWsYftp1qfkmDmRfwFVdtftbycdkk1f45skLh3MXc2Pifbj9BDFdpWhKptFH1jSGbtPd5HDuSvhwTmyKqdrSJ9F",
  "key23": "efjpdDDhBvkFwJp9dQNLdpQUqPsjYjt1dRaPedczUJVQkiMMQTCF8vbcP71nzrBLTC1EyA2UDBHoKj2ALdNSevE",
  "key24": "2KyHpqVJjMpgtrH28NorPTGePkiS6SY2fGPuieEtekzGvjaixtFYETkTgNYsvNqNm2GnQN8KtbNR7dbEVixgYVKd"
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
