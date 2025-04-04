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
    "4Y4zA9SHyytkJZWZhUW3QmWUuYkqCzBwycaSMujkXxRirVcihqX5ibQAnfCqiTVeHGAngQb6p3FfBPDiEvY1x27D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdBKYq23F6VwyhWenaz5oLftfdk9SsBYb2vBsB2fyHEurYbt896PPqDhnWYSHgTxWPCHh26gKCSpp9FSKnyN6dt",
  "key1": "2QGQZpY6fVj2yMezLTc5Si7zNkMHky3wSJpRPvxgM75wJzbHfztJBi4LCH8RaafrqRBJxV9kR9gh2AJJQEyV9kgZ",
  "key2": "33qGRM6CV1R9mBLeToRF6G8zfbP1KAqCFh2LfPaYFN1E8hrZS6b6u6E2GuQcKrKb529U7vqFoyBTRQTcgydyXBES",
  "key3": "2YZK1JG3VAgGHDirK7RoKTDi2w9PVA4H6QSJQZoQ9zeiomnasGPgUVGfgKcZzaYU4c99mmPZNqp9SmUBir8fTxdn",
  "key4": "315YUgAta7Q1V8jWBUE6AVUDqxAaNtZqytpYdctUA6vST5r5EmnPjnQ5R6wHFmjr4MbuZQZgizSRoSdjAvSpAnBX",
  "key5": "21HxvrjRRDukNzBrV5VPmwNn5NnmJgyciqBSwHwGxTAn72qao2pSof1TVhVgcvN7WtwSYeWUPXDN9vMMKyce4A63",
  "key6": "468BbU8HXj3VPpdLH8tJpJyazRBa6QvNPevvcjw1piiDBoEPUdAUzBvyZWGs2mcck7XASsGPhNmYUdiR4HxwYkRG",
  "key7": "5kMSRTh62uij62ufqys6TyyBjiFcFHZ2X4VAfTDbxgKurysYWsAcDgF1ies21EzhZ1NAAvNDFh2J9RXbsf2fyiL9",
  "key8": "4eHWreQzCi4jSPRfY2SyGkhPzLtMYH1uirfMUtMK2mpxDCGfApKoDtBya1XMF4gNNc69UsfsJH7J2yRmRELpr2nq",
  "key9": "5yVYsdzkSdhWwYhZLaH9H2xzfC3LRUmszzCYKjjhjQYTRi9HZPboNRKy2hXbq4zyim23vpJnipL3haRvdpaWAJ6y",
  "key10": "4CNiQZQKLnpnSSQwUDburomBRBqSMPV3MuaqBgaMbpVwQQcg7TDF6p9m8pouw4YvgwxuCqbQvtTBGrVdcEd5H5tA",
  "key11": "4ySe7XnCnPueGG7qLrsaXUtfFmpZKg2eBBTiLvzScQpeFjREfe2cJwZHrcvwW6XwVDTTe6xPP38RhiG35T7VU4g6",
  "key12": "sa4j1eDp2USKE7nY73UuyKfVobMWdB4cbp8ZWzjRvnMQc93WFNJYfeT7DBVmLC8YZheAkoYGC4PWhq5qWsCRM8A",
  "key13": "41FNyAHNAk7iVK9a28ptWXhXtZcsUEeknPxCwrWZmTV7eyrMgeGPqeemVXhbsuWwFcoAfXdBEQ4LfNd978paz3pw",
  "key14": "SfzifYJ6DhwWwe5Uv6amfBr9UKrfSik35o5nRSVy2ZbxV1P6pJbHu5nkudciibyPtT2PNdspjrXKrdpGnhUM2S6",
  "key15": "27MD4dtyswMLnhx2h5NAuLUSSCAy3CNxVavzHStRU1qR4V7shTAo7ijPEU5Z78qhXXLJSzr6F5Zt5tWXTzf42oZg",
  "key16": "2wWHsUhYhyBVHGHAG6jsJ7XRyrdg8kvuKYsWPAKFKVjgGQvULxfbLXt5ofeT4q78MUBGg9n8m9Po5HpWFRxFmYig",
  "key17": "tNmHHfnXxqriLaLScvLpD2rdsEfyUuhP1mXR9inAhLPAriApTBgFiqf9C1DxK1La2F34c1cMeeMJEf8SMmLq9ss",
  "key18": "ycZXp6QsnoQ3YCUFStBk46UtkZqoLi2aSREfjvpXbqM97HPPshE2B2okCNgSvNvRfAcX95aVcZ6cx3GUMgNCT2n",
  "key19": "42a3P6xfpbUseFFzqfTZoRt3Cv1hrXuRN9aTcJsKNrDcS6srv6ZDEtqU4e3C9uM5s3RpaY1Xmr6jH5v2eYqWJ2gF",
  "key20": "3L4fjXMzxMU4PoHK4eoohArvsiQsKjEijxryF9aBHHKD5PwCp4uxEuc7iLgMyZBtiP7Upt5SysJBh7LAWkc6hp3g",
  "key21": "4hNPTPxUDW7r7wEtA8MEMTv219LeCyDbQZhutxA4Qz4KsZwSnZvXEGzajUyzvYRKpave5w1dLtW9Us5APXvu5ReE",
  "key22": "5UicXztXLCY6uGNMDvoJLHd4GdBXvCj818ZLfqtQbcjfLobDXYNP3xtLQnzDmFcPzQzHNaTZryZMott8rjvxBHGD",
  "key23": "3QAkeonJCYCMSSz4hNkAMiuf9Caxi9hn9xeLJBh8XyM45HjvkWXnCSY718nbpJyjjoKU8KQgitzbN2Uqrw3UTiKh",
  "key24": "PGJYfpdAswf2sujLWzwXcSfxSyf9SZ7Da9UF3A2TKHc8gLarUFBeMuinwQdHStoyB6MfA1HW8hPzQK38FX64WJQ",
  "key25": "5SCikX5jFwYe6cyLL6Hz9Q121UQR1n9sBuKK5TBtY4itwPtmudpiHeLZ6Dp79Jn2qzBrBsxBcBjsiyokHE76JQi8",
  "key26": "37T4d5duLLbJqCHwUwXUCPaQgU5yv83aAtbeqXCi1Ty9ZrZiK1fAoMrsfWuyvY12NDD9ubSv92N2dc6CmB52144",
  "key27": "44JpfYH1QBcQrwRkrU9JsVArseWWRQ5VriWy3FStcHwGyh89zR6e36PAd8Tuqk9i3Z7SvFt5jnYLtbfo84Bpcx6q",
  "key28": "2yaK65qgNysRKfB3QgsdfQq4zGc2HXtpzRR4xvBM3Z2zZH5k3dgyoLCb3oNEkZJFTTetEXMibbSdgscyxGTJtkzh",
  "key29": "PQ7HahjsMETEBozKGV3Y6QDACPULGtcaSNja9Y4MvW8UUKiRvsMSv3mXGDAM8QdaMzXMdEUhaTApxQAT4Q5SuFS"
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
