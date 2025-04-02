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
    "4iHmQLpbcb5NLvHhehcN7sn8gEekGhY5gUQxmrGULriLnvHoPJzdZPonJVJ5i1JqT1AWp5RGwVZ3w8yyS9wTVVeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7PxyePfJSJymApGa26Lr9sdbzq7SUD3g2FRXGCA5bppQVioNhc2QTL3rgEx7DrrRUFVg8SN8hbLHKa9avUREbP",
  "key1": "7d6DgEwxDui4YLrLwiPaEZaVYzNmnvhf7ZNw89n5ocMwLWKzzLgaSszkkxwYZGc2YEtNZPTXKfn2yRmZK5CsL3A",
  "key2": "btBmkVn9HJpaHtvQ9MpdUet76JSZJHsDMe4Ykw6QCEJFXRcos2uRU3owXHjvxmFTdq86jRtoHUzRaSP5vFkP4Fd",
  "key3": "xntda2PG8A4aM14hrTvGnaCxQk8bZzEMQKzMV9pakMXM3gvfcxbtmmSk7hiWf7wT1UGVT4cGA4XAsDva1upc1iW",
  "key4": "3S38nCeKH4xz2K9acjp8Rugiq5HNYEVpPVsuiSmjX4jwTApYWCsT6zZfkJap9Wzg2xo1vB8rbUsfwPxHyJBAnURa",
  "key5": "5jvEwDmymPZsrdaxg56cnYp8sFSwcDHwgZQxFzuA4GX7EgnMDxkWoai9H2iuZcYrb8kctjTsJ85ARZM9eASwK9UQ",
  "key6": "568d6cM2gA8T27N6PKtYuV2U55x365Y2iSTh5fNm5jxGCPvWtJfghodYD8qMSVVsvrUGQKzZt79hrtiXG2a4Sg3s",
  "key7": "2nWnedKG3vnHxwjSeMGgN91z6MrQYTkkWmCTwnTKXUEu6B1PyFspitWG2aknj5ovyPUC7XnahGAPu7vo6pz1oexT",
  "key8": "3G67Ze2TfuHMvtDCrmaS6nCC3yzwLbRJKXXjBhYTcT8D7XfaujmfqdcYQesFwjUp5aCUddCq7gunbN9Fmv5ZiRrD",
  "key9": "3nFHcEfDcoakhhFVhoZzLpwj5Ds8qTgZWswfj73y65Q2uu4tQXLuFQPsK3YGENRZmX3rfQM3NyHsTLqmKWPj95Rb",
  "key10": "3AVyKkcewBCndfQzTRusHEUXiA7KY44G3zH39eX733uXQgqVjy19bPXPhXXoSUMUGqDS5s3cGK7fXFjFzyR1wp5Y",
  "key11": "4QEdstUxXX3c3MLVwNZDLmcwh1Uev5C72nnN91X7FSCsVoVNUfbUBqup2ezQ1eNsjRCamLZhdZPGsAoXGyeC8WA2",
  "key12": "2ukaW6CaNuQnMsSj76trqEf1WJmT4anBFujEqTaeNhD28PibhUBwXo8PzTkEYGV15HwkdXSZuehetmkZtSwuXzZx",
  "key13": "5oAuakDMH7EFmt5MyQuEmSayWqFFxn32cAvauP3iLqxrexjjoFc7nfTPPEampQgXu6BrvJs7vM1MAytoFB38WDgA",
  "key14": "4iU13a7j6xz1uGWJkw75QbEkBchSgfr8A2WcydqWJwt828kSWciJBUEVsyxqdGs7xFPmGUhTuRdmfeoiyfiTbn8V",
  "key15": "4eK17X8AGiUVtmoe9FMLmGQn3RQJZ9Ecq3VYxErFVcGdWPzhUXZw9Zt4EKCjm7deGKxXhXovG5wfBhfiP8mcCExJ",
  "key16": "4Vc3SkabVT6qT5jzQN1mdTvUWgxfwqhDicGLjUuuYhZEJN8GvSiCdLxAnpxncweJ8NcJ6FyNKe3t6hKtK3GK3DU9",
  "key17": "2eWbe6aQezxkHLJKgXZ5SnCrEAzz4CuDXYApeazZXvZWdd4VwzE6kWExfCJm5AS5rzTUqRf6tWLVnP22u5B1oPWj",
  "key18": "tqWAUKX1UtMPvYF3BJAAw8ZubinGFjk9sRX2KGhNbsWSP6CWeUivTqWHyzvgVBTAKkDVQ2tqM5JfTLdZJR8s5yv",
  "key19": "2LDqQGtTjjdY6Jthbc7WJseM4KhZsqqyd1WpWzNDsBEVTbfQ2AVfspdzdXrMHdR14mTaYGsLVF7LrnJUfVE7x4Zp",
  "key20": "2VQrtoyimeoLo68TMSUjqfsnrZX7ZXtDSNot52oPnLJsxrbNd5GtJz58zDnJxP84oCAMxteY8MMFM8Si4gJ4LeZe",
  "key21": "5ydhmqFnc9n82HT6gNgRcjC95VpAFFdB3VctrpVRrZq29Pt8586Ppt77v99m4TBTaN2gtU3Lqs4GBAssdign3Mew",
  "key22": "sPVfQzeAKcznVUgieU9ADaD85KkaodPtJhzsRc8PeKXHr2pCpNqHeEjQjxtDHMF9i4QP17Zo1gq9aZUUJryHwEQ",
  "key23": "2aTgewKbL93p4oEjtJU75kEHWBpxZ87XWimUe4oGSsc4gVpFK7fCjtZb8jdfa4ZwxUG4SEcPL2YuSvV64zBEdQQm",
  "key24": "3ynZ6y2Ys9kkEXiBsw2La2PGcv9u42H52PT5jQcBWNPSGZ2DhfiYPbWK62qzvuuCCJMsxj5ALfGos4LwviG4nd24",
  "key25": "1xaeq4Jbpjif8mANzfvsYdg9RwWuPMvAe43wXfiyeUHRXoba3V3hNxPALFU3UbLnm7hhttBh7SfYWvNmnmwLs43",
  "key26": "3nV8yQA7cUMNVuTcjCRrZnurwrm24oJ33HJkweFNZisswh9jcqneE9Z96B88ouseJXA2XmEkWVqAPwWq7acEV2ST",
  "key27": "4SVkms2LTd1qCJKAkJsyKYUo4P7tzWC5WHLKZbYGweGXPtyu3R6j57t6TgdkF6763x7APuwP2xLoXjMrvHcZyCDh"
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
