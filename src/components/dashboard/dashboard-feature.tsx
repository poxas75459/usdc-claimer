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
    "9TxroFLQviXLn81KtPpe6wvNQpL6VVoGLbtprxmYMRMLU9WzKRJzQxcZ6GPYFd55tyqbjipKBkMnXE97JfKimbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21f97wU6t8jGrqoMUhZrQF665vBuhVjvD7975DjCTt8SeTg7bKPaQV6XjjHEwymErEe6J8196LaFcwjxurCDLziQ",
  "key1": "4ZkMgM1nVwoaGdtrpVNifNx14bS7aV5XKMgQLA9z74j4PA1pQQPeSLrym9ahxt6v8ZhY4QqiVq3Che8Kxpeivgc5",
  "key2": "5qYZafb8oF8uwFYvNKeHWf3NsiyUkf4bz9W26JXm6QDc1Y9U2Xirzf34y1Sfjd4ba8pwP4SSUGAoBDyzeEnGevQs",
  "key3": "KXJkgc2rBb1PghiATQuuF3EM2oufrx3kwCukj47RNoSkTNyfegsiWswdhktNe1uyJnRbqT7wviz4HcH5g3DHbWB",
  "key4": "4eGvWSF5KRXWyvotnW7uawm316AFuvujtziK5Gcq8WcYFxsJfqKZsaXeSQcUCZUyQPmaxMDDbfZZ8WWY1sAS4SoR",
  "key5": "7JGirADPQboS6azUByhc8yMob62LR6CFa9bV5tDfPdvn4thq8yTFVEM5P182kCSmiKd8ca28eebaWM3V6z2GVJt",
  "key6": "35L9TfnjkEDsSGwJidNgwv18P9FxQgebaJuRyNUtZWuJH7edwS8wtPBtqi6xsaWyUykRVmLeX98XKKuR4eQKTe25",
  "key7": "5yNozBanZzgvNUnY5b9SAfZk9JRU5YcJRaifnt2st7YFUx8LJJPzhHXmmP6mMMfVRpW98pGQDz4eVftJsXxqReW8",
  "key8": "4PRh3vtSvCME4ytVneD9FnBvca4oxkek2wEBiibCuAvWeocUCzeeBRDjXKVKSHHuHvLuF7XV9t7CjpoiHrLcXrkv",
  "key9": "3QhAoHDXzoqBHT3kfvK576WKYN1dwjqASYq95bcRF4BoyXLzY6H63xykHiYNA7BvBQ78qQ9frtD6KZ3bgHuUtpyj",
  "key10": "5g3aA35CKw4ryLKeGejJHnErLGSzJXwKcreqFhKHc5xTAvrz81Tej4sTJknq5oYpQWXgEBzJreQScpaTyQFpWUDn",
  "key11": "3Y99c4a6N9LPZxRU3t7CWG1M1fpyvVfX6qGUv61cmhCV8GyhUUgKSjg1XpG1XcH38GjtV4g5EH2jSAKDzuqFP14e",
  "key12": "62Tpor5K63A92womJAssxwu9X84dt5K9fxao5MDh21gVEgjTeE9h5NTVGqgECmBGBsceZYd29GZotQ3Dn3qbWPvL",
  "key13": "2E7vYfwDhRxkvuUiVuSfBt8r1p5hohJPRiqMfThrr5UD44Yz8RVpecnjYZyWwZMJUbZjM6F4547q8vTvpU3WiRYp",
  "key14": "N7g1JptEowmEZ9ebicvqcMktPYvVTva8NAgkCLQrSioSv9YfBFbLFaRxLbPk7bCWdPALtg3SLRMGBDmyXfGk2uB",
  "key15": "2CjsoeAPyHqwg63CG8ada6vW6BP4V5GdYrfS75tEV5RmFxaqWTeRvrjodWGs85ay61TRDY3d6gN4YvDsJJTHFeFG",
  "key16": "c4wvayLKgAsHKJuNCZTo8q3YN8hwydmsotjDEriJF8WzbFdKcTFQ44Q9THtLZ2YPhGmfE33WmdJFGrp3txnitEn",
  "key17": "4FBjG3JSUKSbKAjNeiz6mPphi29SiTZnw6jNM26dgaUTWvZbosQ844uiTrqrDQezcihxA2mXgAT2zG4cuoUEDMWj",
  "key18": "3K5t4ZvuUaNCx2XoQe4Eh6hQfyzwPhjXms3CFaJ3MNK7UFskGUbP6KA9KTmhYSZ37rU9ANgMGLnyUymtYJfbEBPo",
  "key19": "3A2Xi7ZzxUExRjXrfZyfwRNtAUDqbcAcgNpz3buCgggvzEpa6K43MWQBZ2CDgfTyUMjwHdehk7XdNNdkPkiC4oRk",
  "key20": "yvFFgCdz1nLRvdfb1En7mPhAtRFA7xm1MuLLhy2gTEgU4zRKAHFRy74kF2geu7n1uj3AgRyQamiv85LfRwdxu6Y",
  "key21": "5ifzdTxBsHD1PmDfSzQ1D6AHS2MbCbHwJrfquNJhPJNRpyFSgTxg3MM2NYVNB7d15FYi4rkG2kh1xsFwbiRDCP13",
  "key22": "2XxL9fFkm6iW8wHukGEQ1LduJ6yats4A6taSsWuvBY3bAyagMMatVeCkE7V6TqJdEeMiXVt5educUZ5GxsmhtW1p",
  "key23": "2zrQeDmakaxn1xvTovD2ipn8PyBc5bkixra1w4MwKMRSTp6SkrFf3DtDz1rEF56CTnrk9X91PKy8F5j1UnLPMZLV",
  "key24": "xhGR31VWMqyFFcHgpTGymVUCixcjKquB3DGUju8NEmHVqqgxTYdXrQ8NvctgjhPZtTvtrzb2cvpBNFMNEWefY9X",
  "key25": "beRHJbFSqktGeFi9xNrQYBD1C9zX88AhgDa77E696yQcdFzk2F7EhcR5SCyP944oixw7gDVkM8aUMyjYWxCqmWE",
  "key26": "L6YRzPtguy7Lxo744RttKiWARS9o5bYzSLtB4i7NBJLy9AAAX3nxAo9K9ctnHLP19sLBEwYjGh54JFjoA4ht6W1"
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
