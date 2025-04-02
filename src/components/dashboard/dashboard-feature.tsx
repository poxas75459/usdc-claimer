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
    "4voR6NFWcmZQb1sU5hKtFjhDEKNByafHY7Nac8SC8ukQSxkp19KZ1GdJe3cSS124aMgfTHesRNS8MkiBkvwLC1MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZSrTD8MPkkZuNk6s9wYf8i2F6xXDDy2WLNXAmeZ1Hch76QVmz6zj53vvNvswFZFzCPQjeDoJUb9hskKTN2tDAt",
  "key1": "5D3WrrBUj7dVwf6TctdJ8TQ9T3RYL8tZb7Aejyvkv4zSWdqiGdwmhgXzzjNJNmZzew8mW7mx1RCtgoPqnmueuS7o",
  "key2": "2ATX3WkKJ4eQHCHdonSto9Yd3JXxhVgmKbLBMgAixN1yeM3Q9WS6x3n3fBXjwaDdd9ojHTFiuSaAxz4HFXoHg8ud",
  "key3": "2ZB3HpB3dw9Tx3pV3PrNiEhK6Sdo9YFZs6UEefRH7EXhTj1CuTkz42WyEz2JS5BP3JTvbNXidPXHyCucgpUAp9Lb",
  "key4": "36gr7i2wosrXVrKSHXTbMoV8pagziuBtFphu4yQWCwnFYjZg78FC2tU5ociwT9xowLBsPi3ckBLzeKddsdszn3MF",
  "key5": "jybMD3igEX4vcJa4FQ5V4dyBMwhPLGBebnqevxKcCLoBHKkfpbmGj8YVqhsLYqCULezUfgmJiqAH8ffTT5vH5gC",
  "key6": "UZtxbnb8zXVZDhF2bucEzL69gUzmdTLKgoFaoiMsxrUvERLjqEhymcXyg5ugwt6hMCekAjXCLLnoy63aLVsvUWc",
  "key7": "2zb1TcVpWMyPTZaZWRi5ZgoLYKVw3DfNu5i5xgKjuWiuWnaizAwkR5e4KxxXiqhMaoJfb7ErVn59WBFnR8AM6ykQ",
  "key8": "2hvviAkG3P7W19aKyvdE5nGE6J6jm3YQTzRTr76WNa41r52vEp8PM7WaobxahvUfsg67bu3PDHNxmgwQ868Z9pAQ",
  "key9": "yXuE3nUxCff6VuhXY19tYzDSRzTVc1oLiBY3UiQxofRFpXMeqogWvPNwMg368F7SSiUNpJxNxjUXgbJ6vDdQEKZ",
  "key10": "37BL7m7NHGfo3obJ7uB8aFrMeXJU7vXvJRqmw6J24jWW8sq4D8LvfoFg8igrczQZJRW1rBxsZj6bhf9JLM5eVkdX",
  "key11": "xkc12qYhZUoYtdKbK6CYtSmvYS9mkgcmBXAf8rTXUAfd7JrRG3fM6g7sRyphGAhaXtZjTyTUvipzUf9nZj1d5oh",
  "key12": "3b1i1Hk5nkyHX12ggD8nGPFhxaMvQHSEDy8dyR21bU6PtnbjLzgvGxv6dqusvwSCZJDwsHyWZKWKg28sieuK75HP",
  "key13": "5sGFXv298VFdyRtQTVMgx3AHcvNA6Zv9iMckZ5zT44WnaHdYWaxr48ioWCDZ8KNrghZxjZMHERqYfJC9ndQULMBA",
  "key14": "2rWrYywcY2LQEXaUqwm4vbTV5aN8rDGALimt9nusPFLzHQyia1nsrjGBnUZcDW9jYjHuHsB5FSwWdZwaDVtjSEh8",
  "key15": "39Xv4FqJJCJnz3nAJT5F9jqWtAiJ9qPg5iu7CCC3TxBSDrpqvNzReK2zCo5PAi77WETksiapDBMCahGuxU97YwrG",
  "key16": "4s3tqzwWHaJpggLXx4WbZJmArJqVD8reSNoPhNFqLEuzcVaLYS2tSo9b8tezh3ZB1nscEs4zmposxKdeuj9xRDNb",
  "key17": "38E124KYgdL1q4Sc8faUuPLV7MJzL9jPkoibvsrhXSddWaFbUdx4gGwfZdsfjvp2wNVHz76UtyV3CctB9QJGf9cS",
  "key18": "1oAuQeD9o16Eoo8CkQAENxjE6YDx9RWnNuhzwdQFyXUxrB6rtJcSWwCiQbsoFXiJVGLLXbdFxk2MUJYZaK1gXiA",
  "key19": "2nxdnuTZWYCnHuPKdN69mEygP6854HsLj4U1PC8PrCn1TVQeTncnfyJGT574tcDV6GFaWGx2KMvHXs3qHhAgApTM",
  "key20": "56qMfdnJUEugi3LXbRGuy6vXJXYqbiAuQTqHnPBr3LeXC1Ft2B7Q6xfUkkhmxtCS19GRCkDtmVFACTTvqS3hmTuY",
  "key21": "CMn9brZke2QX8RSP1BHQL2soTeX9hosyHdUNVNRQ4F5RbKP6fSVMya3SxCqZHJrThEto6GgRzzVkznNFqGfZDS2",
  "key22": "itdAQj4N9uHQxA3eaGeLZRtf2gpNisTpLkA8hCZMGQqjKTDHHkuthYEwhm6uNe2YDzQwP5SYSwfbnR9v59DP1EL",
  "key23": "4AydGMAny8is2mSq2hH8AnNp1tMXGNLaYsQgJXjoB2QdMmhDzJLexipaQqJ4N3Prvb3QfWAD2SEVu8iGKRg6PJkk",
  "key24": "5d15bXDZYffNjNSzkf8J8B9N5DzCK491dDTbmJL8jeieB1S6nzPNYXpco78gMS46XTZ8gyUrm43PAHq6ajBDJiZB",
  "key25": "5mkG5mSmms3499zP6bqnc48ywvZGT52mdh5FCxTXmkW9vjTedMNhfXV1BRx3vxwQfYEvyh32czjCf7oF6ufpNngF",
  "key26": "5e9jZ5qhmYctMVvN6xCEj9RsGQ6TnVyXvdXWBEN53AVVx3QdYqQsGTTzCdpVfvvWzRhHGdFBPuhXBGPrq4Ea93tn",
  "key27": "52WTsqB4KJGJEQKE2Xjwktc5xaqAKwWu3dKJN6Gpf1vdM7PDDJTsdxhjAcYvF6GxbuX4677N4WGM9utQpQwtRFs8",
  "key28": "5pcKQC674hMGNUb6B3F2erNEEd4YoWUVkQmcw3Ge2HE1b3oT2uujbfA3RAqu1mvdU8sBZ6ZHeJNVSTRueQNyTUWP",
  "key29": "4yFuRK5uaLqaQpMjPXvC6YMdgfAeMGFmLKeHXPpLPK3wp7k2UBvpHiHJ4qmWCTqRKtXQVytFZAuhjGAhEgpRm3ci",
  "key30": "5fxnB4p78ZhS9QnsgQQMNELdkxdsbuaD1RdoUGqmBMbv83FyuAbC1PoHJ6DcXDQdxcHm2WqSvTeAtGZQG3HvBQJr",
  "key31": "5Xa7Bw7ZZMk4oUsuwyKyt8E843T8kLNP1bvzTdVuBsze7QFP9gaLTATtJB7QRCchdzf2A5yWLPdgvY8eR7H8yhhH",
  "key32": "bYKrDdz9FgLUuf7kSnEnbgijNT1FjhAWKxrbKma95WZCK28oFvkASrmrzcVWw2agy1EbuvSsy52ZxUjK47Bdd6V",
  "key33": "vC2JXByj6oWktdb3YvsM58XDvXD9yHLLcMdmyYkXkpD7FHgmZohyqwisdvGvrHBoer6ySuqx7ZUYPiw4PCVdN4c",
  "key34": "62RhrfXjixY68k4z8jidoKbpZ9EmHocrKbNUECoyizhTjPDZDYi3kGvZDFNeoLEC933BSHyEGm9cqmgNkHjthtpm",
  "key35": "42rF6ZPDs4LrBKQR2Q7YmAy4qPvh9mXsqiAvtWzo3iPirqFiPWBfegRVEKnW8Xvt67x7BFKXaeqPgJ1GT62FzZ3U",
  "key36": "53iU1iAwjDkp7aCUpLSqxQ23ksEXBX1QpBWD287hhYzmphWJzhorUQs4QMWxfKzENp2qXPHnYXqjvV7enpzeL591",
  "key37": "3EW5vZovG7EmtaChvUVVVQWZ5gdA7EMUHdEHmQEfRUfZV7BRBfuy4RhcTKs5cD9fZAVRvXw4cjVLhbkAasVAEaqM",
  "key38": "29ChND2uwsfhhAbEwBQzaBdu7s9UjyUZNHvxBipZWnrhEPSaFDUSfUuPekFKViPj9LPkNQoiapZxtNVSyYnuMLwY",
  "key39": "4Wtm3ereMX4P7fMGoTU4LAsFGbtdoxZsGDcTXNvmPbaeVzh45PQMuKZBnjxvRUn6sj4rFp54iN3tAYf6ryWPa7Gu",
  "key40": "4THnts4yqBSUCTqXtM9QQMb3Yiace9vQY8mU3HdmoWGemwTmA4cKERMYikoevJhrrHNsFC2CCc9FGv3vXfcFehc6",
  "key41": "2Rc8RLAcggNaYgUcAYRuxBSLVPEjHV3ftnHo2d34vGtoXoA7eMJ65Cg1QLzv8YyRdW2i6p16TBm3Z2YYn1Lv5y5T",
  "key42": "ti5yYWhJhKyw715vczhH7e8f1rg3K1tC4WYCCyRjKhu2fLZen4V6JiSBgEmFaNmCe8XLecasudePXpRWsQBMqbk",
  "key43": "48p4ESL64eQwEwdwtXQfyBQkxc8jdTLcWVAjnaT5wEw1892SXeD4nxqo1BQc7PaFF3A7mWJ7fAgx82DEDfJHRjmL",
  "key44": "3QWVqGqKMDpT8C1dePnfnzYSRfgms6joAjeBkZyEaeCLL5KP9i9hxvt4xmKp7iHWT7YK5GU4D8YRhBbkdKD3D4Fc"
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
