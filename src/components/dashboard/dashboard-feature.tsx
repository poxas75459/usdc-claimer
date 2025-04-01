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
    "54LTG62g8gyyxn3fvNZ9yaeLuqzxzocoXmYSpkN5MQ8w9vG7Vj2xPs6cxFVSHXXABsT59oSuVX8wsN3yyMh2VkYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAdXaWR1XzxUmGy8K1b6yyiHsKn4KSPjHjvMhfrxqBXFFBBhKPJxs7CzqvkczPReqNXiqdbsg32GQ9Zcy8JbUpz",
  "key1": "2qiRnCNevEWATEU7ujaXGKxvgbtkrPQ3reiN8v8vEoFSGFvhTd9tnZYiyUB7VySnuQnoJjtyQcrBLxDBBvM3ysXA",
  "key2": "5kH22tSZQAN6iFDcSUsdWnd5pbndkF4LSScdRtEavTjiHP3xRoAGbh5aF2RYSuU4xNmt8cdATuUv78XhLJWa8ZLq",
  "key3": "2PCEmtawRziA2scyyjR3Wic3ZC3TBggqVuxc85ihvs7H8vy1uJSZYathTpp36sLMBwHAV69yNm39jPDXQUZ3e2sp",
  "key4": "25qroiBQMB9fm5cFJRQdixidBCPkkuTqfkfQwatNKkg3U2MzbrycctF9iLVziSFH5qhMj4f8rbDiNGap8jXdtUHS",
  "key5": "bB3RsbiZdkGLjquMCtJg5f1wafHqRDHBD673XreeqsUY5vaidgA9QZhY71M6591RLLrZQ8pHGLcksyeyePjFtbU",
  "key6": "46jdmgSUwBsnHGTeR4YQTCZ6mrtJtuQFwaE54HhKousEykXt6XH7qN9rswofMM57w2ECw7Ne8sADZfiU92ueb7jN",
  "key7": "5B88hNd9TrkFDbhXvsNw7ja534Zj9NYtB3JoZqbUtfGbwNsyng2JNvz2Fg4bjpj5CQbqHVKarTtwPQeNEF1ct176",
  "key8": "5JWuhtjXeDotHv4pHTNp2BLN6j6kho2GYZCxQ9xocEbGJLYGWWJyUpLZVpgGppzgGgrfknZR8DbuWq6Qo2awdLAA",
  "key9": "BGzWnQuJuqYhUchHhzgXaEhJqyVcVcYnz4EZzRsASc7WKPr2QcjkqX31qZHrSaWL4K8sMkQZxVuxVKSPd6jxtDU",
  "key10": "5o9Wmbmby9T27kGs1gc1niDRbJosaUWtm22XSBZWMRXMwKnDmnVP6eACx4oHWCa8vyKeVXMEfnrzfAGrM3cWrBTZ",
  "key11": "3twUCyQiy5aXWAVQoC21FByPUTZFTygnhgQjHFZ4GqGzRir7kQXwMjmmq8HWXXFjuxfJ4AgGseQCAWYLAWpYKiNt",
  "key12": "54XrMqCuon76d3Di5gXH3YJrRcuJu8gJz5FbX58KkxyT6oSBiLooLzqbxPGaBaeGELCDB6atstW4JGh9NYXbRQee",
  "key13": "2vHdrJLwzLNyhasiSiRMky6yX6yXJrp1LBGEpXHZkcjh5xZ9FAd1HE726nc5TjNEB9np4QMdmbZYdTi4VpzbAE7R",
  "key14": "5mATYdDAPdYeBRwXz7i6TkjiwzDy3RwiBps3tYSUVjUPF99JS2d5NcSxyFxuu4nbXnp4WmxU3brLx8iH81zEQytw",
  "key15": "4cyVCixxqUqoRsGNP3nPK9KcgL32PFvsDmMZZPQ78Ujbbyi3aTftSrgjmjmgWDgN6xYnTP2teqTDPWSyDtTJo4LC",
  "key16": "3ov6nmhqpBE4XBBgQJtCKvDaEauzqXrSdTieb9SftJhVbZNqgzh2RGVv852vcmirBpprrLY2HGd8zUKxerAUQbMa",
  "key17": "5KMLXvhqRhprkgU8TNpZjBgkVEcEtAfip9tdQNoFEmtcJ9fYc6dbLBTHq9C7zSEmmM2bEMBbg7XqspoJaPTb1UTB",
  "key18": "22wcdLnt1VYG5rB6r4xWQijzS9eU3jJeJCv5pecvPnv62iBHJZLbLbso68zHUfXSZTBx3qiHRkFjYZdWHTNgURRo",
  "key19": "21J8SsKRR5eyyxWkNwPT2cwc5m9LfVCFJv1kwJmwzR8W9qrwg11DdjXQMuDyrzFoUrPSpJ54PzSHx1Yomz8ZXMnB",
  "key20": "3xMb4mLVixEuHgtAWDRCbL7uNmw9dkD1WXgsJgnHqmA63Nb8FaBLDjhTAcHjZaE6sezyP2y4zBAkxhZtZib8FN77",
  "key21": "D3mbbXppZZvA1YDTYLVjfFtFZTDCX5Qkd7Pu2WGWxK41hGRQ6nDeN1FSf8wwHu4SNxqgoYNaBYx5qHKVgb3VS2n",
  "key22": "4bqfd5BphUTSy45wGqz2ZrLc2RAbMWJKqtiLHadRQLagyY9ptDbbwCCMR5bZuyDMkWdb5uBQxmGfDM2yJB5tQHTD",
  "key23": "3vLyTP8Q1m34W93yrEgh8jfmdpoCNJ2ktuh74RDr6rMe67RXtMnyoCoG2qpBKW3LTciyYjmm5Q5rZcCtUvga68Vm",
  "key24": "2eiStThvaipzAn4krtqm1xxHqXP8de5v5WxiLjfvD75YKKxB7Asz1eugWL1bMfLBXcw1Pef72tHdqRRTVp4iD6BF",
  "key25": "3JQ9KNUq1AYz2resYsUYXpDdY4wH5YvihuqBHiS2DoKSZYRAvXi37koZHhZqZPbUuV7CgpSewyGi9T2aDdFWDwBd",
  "key26": "pYWydoChzbULtMbBoa89jiQ5iqNEj9WZzMB3Mnssj4YSTBBsmsvAW98oxEETNLAH4BQ9F3v3sp2rqm57mRijvkr",
  "key27": "2UnjNMAVcUsBAbejNMrhpTVvX9K8zGeuxmeZ8tNSeuzJAU6nA7ZuPNXPQNUueH1sHWiccuaqXGPNETLM9v6JAtg"
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
