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
    "2BRYazztHQNgLCDXELAg18Gqnzs5yZ75LgGevcmhyP4TB6V414jFxCLZFzac3RbXewA1MMBZAso2QGEsFcWpoZ25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cton1cPUTcnh3rmJfDHi6ZBvjD8wo4GoHeGAepPtad64MDBJtnfkPQFDg6kThpur57rWvTAfAnxWpurb3sf6Dma",
  "key1": "azmp4K7T74t5sNNLFe6ayPUuniRo1ZWDV8JBXT3eiN22U4krQngb12ycXRByuTXzEUekBeS1RtdHR5BKj2Zv3s4",
  "key2": "666Ys4xmbe5S1dc7seoDNwwh96N9Dxq5Ag9KWzgvVQozEnUrMvMwiS4a8RTt3oQL3eMiuGR77SjCGsWHzqWhht6g",
  "key3": "5r7UzDhyYvAF1zcjevdMcfGtNwHPj5KHbArc1aR3qGPFvEVrDAcuyUSuzcgW2iSNnzknMA6KooVjegLjFJHsvuzS",
  "key4": "4wFEHFdXf1VqePc7EU59abEA8HwShCPBMs8DJNpZhJaPkFYxRWcGkN7XHFEQ4rrwmW46XEoZBvHDSaDYjGXKkaE9",
  "key5": "2mY1FVEGbtNTBi45Gny7C8h5dXSwqAEWZ9g2Hvgd8xWVp5J9imSBMHonpy8SaW2VtuUM73x2tXzFaL5FvAv7SDuK",
  "key6": "3koC1ADx7B7D6EewE4Rb3aQ6bFhBQoF1rUuew2eXdSwWor485LTwVx46VVwpc8euWFQSBrqBer86K3gM8tQoFenW",
  "key7": "51oJd16DzhowPjGBvp1yjvyG2ME4Vt5EF9oy3xzBRYT1NAp2n6tx5k3J3Ctn7RCAjbSEx1bNuwg1z1Jf7n6HfVtA",
  "key8": "3oWxokKfbAqE5BGRryhUfL3eHmJQ7S8pp4y5Gn321k8G9npVDP2CkHdGfXTpiepCwC85Y3cB2Qz9435DS25daMz8",
  "key9": "2ozHVRn73zCycNHE2WXxBuFbWF5krMNqhUz6tUZytpXw1pGjx2atECzdHt2gbJVXZWb5EGt3smAAcDXcP2ZzVeN6",
  "key10": "4V9ppxLrp5xWUm4ekMRpc5B2QVC5pPiwcv3DjrkSsMC6mELbjvZTtoeek6iaQbzVGdZxyB4KWuFdWkb9ZfgNm9zr",
  "key11": "4KXwuSNjst4Rdpg85xmKJ78md3RcT1NaBUoq6DtHx7XWVHc1mLqk4FgUgoE2Aq6wG5EMGRUaYnda8Abet9LvhMCh",
  "key12": "3vYA7gezsSzDES2eMq9BfUAyCkk6t4NeqfEDmMtSb1sGjzZsjCAonVBUvxCjDE3G2zCPC2qrLG64VV1YYucMSLsi",
  "key13": "28f7Mmtr8e79WgDMkfV1as5rH2ig5zzcXwpyN6tSs5aPwJfEvuWa8xNsi8EjsdP6sxVbNf8DmyxNhH7ocUfCsAyG",
  "key14": "3U9jesqbEjVy9aKNJn9XJC8ktoehjF1MKCefti115MMfNvAFhRMBurivfY2oa96ZZFpfrb4m5VpWUhhGDDMTnmDK",
  "key15": "499yrCfqY28wPoXi9koa6DoBN3MjipCQ546MFcFws4oLaYH2d3m26ihaH6LB32rZAgKPdv7N4E8J3439GUShcghy",
  "key16": "3fQvrywDmKArdKR24aiLPWh282nCLfM1d2dx7ggCXKV5QVUkyE9XJWdrajZFnZCmtiX7fWCasqjKpoHgUvhxCDYL",
  "key17": "4X4wWX6EuJCmBLto4kSGpdpX5ujLGvWfZ2hPJbUvDuNV2hUrRFxnXMzfaDRstfiWRkTMMnu3yq2uwThnzvd3p7NZ",
  "key18": "D3goeCDSwzbUjjCo1qtNnJzm7ckmRrjVzWc4c3JJzxBvEE9Vb7Rjv3L9YB2RzCY4RYEAPPGeURS9YC94ixn8eHA",
  "key19": "2BwunbHTUiXNYG8pSBMU6V5EnkYpWwNQyihXyG3fLquXya2FHJnmJ5fwtEhCBePL9xjcu6xh4oWcFCS9LCm9FUHd",
  "key20": "3RtkMDRUtbwtTAUUcagorsFW9fpqZa2higeSETAyYYXkVUr7GhSYuswAv7ZbykYAQbFRJBxCvXpV3N85DcZJ68MC",
  "key21": "oDdggRQkVuwmJDi5SVM5JUsm2N5opapajqjsRY4AEUitCVjkcT19xMAFK3R69tYMf15WQ3MpkvikXXUTiGotGNS",
  "key22": "3pqSrFjPt9yrDe1MgMr85VUbDDH1PuBF8vyYjhSnXnoZSiYrKU9pxzEAYoVMjDZKSdbxEkXmH2VRyQPuF9krMWNm",
  "key23": "4fbhVPzMptikHqV7DXiNCKZERv5PPbotvFNAFsk7xakJ3fb8J3msupsNnnLQ6V6whD53DPP85MWAcD6rUTqdRMjr",
  "key24": "2DQGdmh7HRu5jsZKXDx9UjbZPNUsxWZuusbYo1fUyogRwCAgueQoo1txHtk661iKQmta645ik2926gQgd4qUPWNK",
  "key25": "WgpjQKWZFKybG4veskFvVnYxSXHSU1b3TptZ4N9wQKsMX34vMgJkjnG57tNCsZBtbxFAtMRPVQhKqXT47GSSdyh",
  "key26": "66mkyPe4D8zrZNfjNnnWDHDwwfm3uSGnK8Kiw8giXbryqVjEvmA7PYmC7Pv378QK8QvpcYgzKf3rQM2Ke6JZpvSM",
  "key27": "515XpNvrn5ofuwLN2KkirkYzHUAMUPTqSkLB2vCaW1CjUvpT8ciiNLjb5X8yVKKU6ZD7twQX7eh6tD5haWHF1bfB",
  "key28": "5Afp2TH7CVEBGBZZaPbFfXYXvC2LTq3LJBDwWNRRXresvRAKZqvStvxpnr1d5QJ9RDDxgP5RXrmtUPyqkbAoZPaT",
  "key29": "4MtkM1SGsra8r2fV7j8HxBmuVH1wDLhyyY3ER41fhEGcJqUQNiWkTuNqoYGqvaRj5uYqkKnNPgnXDHAJZNgZYRD9",
  "key30": "35posKoCwjrPMJJxWGa8nYTi7ytKXPpsTxPscb69iFSDoSP2VxKPPMfwrx5tXihdVm8gdriQqBixmD6A2sfdriRP",
  "key31": "Ay4RqGDhjcnwG5i3XK2iXYPaXsxgnx4iDxQnZgwb7aqcWTc62U3pP5U51e45ZthVk9N5Q3aud7nuoqqnkbspFE3",
  "key32": "2RNxqeq3cCVv41FYnou7kowSsJnVP3pbPfzNha7Advn7id5dY2C1j5aBBDYWXtC9LbWdnAWA8xhV6xruric47ZtS",
  "key33": "3MS2N2aFP1XnHt9wm1nrnLc85ECKYDazWNDfPRVBMEJMMo5o7TRsH4WYHPtxaCmjAqzPjfdrFtFgJHxZRzi8ek8A",
  "key34": "2HXR4j36Vo3hhQ7tJxDRDGZbio85SENiaSKmndWVCfSR2LoUDpNNbZCGCuL66itiXuTt7VRNRcDWrCJX4y4awCLT",
  "key35": "3bLxEj9HkXeE34GLrtyhEzkr8ookS67dsKXfhVrUU9MQehXhUPxRxm5u7fqGcvCzuAxN9gWworoGXb2K3CPSMKgF",
  "key36": "31TTAAtJYqbHhFF8Nin9QkfPZrYn8T5NaSn95FXnzMDH7kkEdtccnmo1Mfa1kd9rJ5mJc6mjNx1aZXRHb4LMdTe1",
  "key37": "2fxUNxoippovFtvUQd2r66Edq3aF9PvakG9uJenUmWe56RrRaUvKMSagLoV2eg3beudMSJVABiV8Xh35CHgMgLJe",
  "key38": "2y36frPpQ93x5LBW7GkZhL4p5tjduKH87mxgV4at94ANxxHPVchgdovCoSKcXYhfx8JBD3avU4FRK82khoJtZe7f",
  "key39": "2QRYXEt3goYB5VbTf9ABA6pmYzc7mTueid8V3ySha23SB4NNHMeC2TnNjBW667hEMSsJLE1erZqjAkmF3izci5mN",
  "key40": "5dMSh3xwtjG3m5WJc7ZV7UPRSAqqN3hUyLxan12PGCHKdDJSLftnqjQt9a9SUG4zzNd6GetK9W7ZV5KP4kgER3Qt"
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
