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
    "4KzHDeGdJBRtXByeCMupJRE4r9LQJHca1gvWhhEDJJyu484spaV41V9oxJk42iYfBeUTBhD6acxgkeNMKUNWy1gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38k4ptamv3Ht44DxpxSZYcTQzsnRTi8jYePBAPJWH7RK5983an1zyaWMzGrH5RMHv8P48RbEg1sufjTpS93dP4um",
  "key1": "3HGke8Zjsk6c5bUPk8t6PFgn2BP8T7k4zmuYzYCADWZRKQKTrrAdmW2VFrh6KKwv1L9gxsNuLjVaNZV7Uu33SXKL",
  "key2": "54Uj9LgL8VvxxzE4RNsjWSUQH3kPobSq8fauGVzA3ZtDRtQSEdywhTzVtrgxwRUxXM9r8JC1FdS9gDWjUsmjacxx",
  "key3": "4q241fFUWCnmwKKnA1V6XtwZJMLHF27x5VU6qNLkvLSsCcTyuyM9E97vS9Aum5DqednEjrNPgQ8UpTNrZeeFQM2q",
  "key4": "5uVVT5PAJwBR8anpF2nJZKv1m9z4wtyhMc9cULoK76jBWu8kKW9abVwu5xLJCocYSCVx3m225tT8RWVAgykrwzJA",
  "key5": "7AwcHWiwiPbyAuWaZKNzmpHb5BP2VjZuPYn7zAYD4iwoJK9BYJdRxwNUrJnVgZjHQKxRtdGBoXgofDCB2JTKGwd",
  "key6": "Cv2ThtGUsybzSp8MkiGSDmSP8Q57ajMi3a1GdH7AJ4WTT4mpKSadjksJoN2Aj6hPPyRo3qxnuo2xGgjYqNw1Uoz",
  "key7": "2N9NU3c3tvoVrERfELUezmugUEEMFJho6JSNqNt1iXJqKT9y9EbjqUEArXkHr9aa79Ehiu5qMPNud1oUWVBv2ivM",
  "key8": "4zjTVBWmz56wDpEW3n4feWDVimVmmmE7AvmQHFEhYT9LWDdgNt86P2Zm1594EC5TVELDAb7cnd7V6ATLHrERRPS8",
  "key9": "3jFBpq3z3JkZMehXy5Lcn7JpH7GpH8aha25HTDPmk7HE2SJ9BrhmwKB2yLnmGXNXRAFoQspXnuekVbPowATHtyu6",
  "key10": "44qri8rJVwTn7FoEjVV58zj4rE7xeweXi3xinrKsxvNPQazpzFFknu2gVJDwX8N29ShyPfkwAETRuoBATtLK7N4K",
  "key11": "2MWv2sYXat6r4ZBRh1xuidNuyWcmcUVvH1CwYSRjD2qNZadXGVR4gyo6apc51zqrLPPS1XsvnDbwBmjGkqcL1WyT",
  "key12": "3RUqYJNxo7CGTY4JVfbv1S5bb2ZD7MPejnBtiZAq5FCdzsAjhcUrzkeU6bk8WShTAgsv84mjV6HrgoCngVuKQHK6",
  "key13": "oHWha1o1nMhUVVGM3HYu1ZKtN2r7owESeHpTDo6JZtB6dsqH7fKQ9DVX6MwpBdoedRebCypYJ7zHhw3VBKaLuVs",
  "key14": "bdhWhfiJdXH94UeWuHSF1vTQhqDJ7dcmxJ4ZgKs9DPGUNEdjkqStHbghsggL7suJpKvTxUZ9pV34J21Y3zF8wf2",
  "key15": "4K2j74AhPL2bVZWWo289T2FkkkehkcQ6Lm2BMbXqSCLtsEkk2TZYqBvhS5Km3XUSuXk9EMnN6fU3ZyiqFvaEaqE4",
  "key16": "o524QAX8EcqKY1KjwyNcSUGTY6Eoxdxk9DoiKi2QyFP7YwRWuE8TSMoWw5oHAaGYEkkD6rny9KYzoN3rsHezVgk",
  "key17": "587z3PweWzDoytXRjyRoBGMRVLNNWywKXckiPZsrv1DpAN3kpA8BZH8u7wdJCG13EP2sbAAALSR9ozx7FgTgJAup",
  "key18": "57FyfR45BWNSqG4gArc7v6jmvCYrMUJyExcMs5X2M86H1PbKAv3CToqfLq5iKKBVQ4ctxqYRtrqdw1f9cdUDmxnr",
  "key19": "2NfxhDqwU7fWXVnGhzZN2M2peGmb4p7XV7xpsSMEbWNaRZEd3u8sZkQfWK9DQgmc28SfbJp2EkrTbw8Ef53bEBLS",
  "key20": "wZ74y9cfTVRnSyhVv447spNzRsxNUoLbnPVn3oSC3DA2MM2twewhSWe2vV3CaUSrfPzRW2q3KDHoSY9YyXYk1wn",
  "key21": "2hAZ227Yw9QBimVEFHEkb4sBMvBnAe1DRmAo3LPDAPsuciH2FswxgmF3m3CQs44NLhK1PvNUQewjX6Z9uwJ8yXQW",
  "key22": "3PSWV7nfPSNzmhJpKdfyEJaVBNWcGGc5vAaJ1b5rdojjs68XrBFjgf2xgLJrPHNMegMQzT8HNAQJouvMEyDJyXbi",
  "key23": "36WXjdc7aeEkAUcQxUAPF6FJ4QQTMnYqeCnbS2Nq6oKipZLbkGZaN4EbnwxxQvNbqSCUaYhmghkmnJMo2PAU51oa",
  "key24": "xf8YUsPQuKUj83Kkru9cGHzYkVVRVC6CE3guU288T1gA43p9f4u4egkuwxeT4DohYchEPtQFDjXuQjzMac5BVn4"
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
