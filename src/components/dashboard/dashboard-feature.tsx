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
    "bzdv1rSXBsbf2kX6zoGhrELtrjonAg8rfKkFtjApc8CcSpVcAJ7wcw7ZZ5Fj6wA996fhbFtMeALEesTnEYcjvvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rq9AtAgQzETb9Ux5jaeMRvsAaXar85TKwNN5SPKcZxJgHez8N6YGZefCUacSZKy1cQxWVzkVk6MgJ9XQVePbKoA",
  "key1": "3e4NQi36JFdWFgr2XyTDs7H4dmzFz167cDtVuihsnZhU4vvoK55w6rqnWTq2QeLcgmiPLQYgHPV1d33dygaEsd49",
  "key2": "21ayTptn7bwHp2UJCGujUPGDVuz6igyoAweCy3L6ip15mJXaB447BgdyYdZnWo6WCaMqtf4mCBX9HMbxJDuxEqEb",
  "key3": "3ef7AFqh5EaEYHFWQ3heCQV8dgxVgDndJJ9bL9sTqv9Xh1LaVodYhRZkidoZ7eDP6f9o7ZEJagwcBxwxJSJ6Q1N4",
  "key4": "pDtv25jUQ2vLjiEAapnxjT6DPk9r3TBkrwpyq1ZxELDki6siYAjUDAmU86FGr8EECYJXyAHdEuDhXdBcJKD3xx9",
  "key5": "3MGqvHzAgcJbghZQgbrmGVsbjHgbjtoYMzkAYkEBn56vi8Xkyf98eSQWzpv3xE6coMcXkPCzc7UAe1sSSv7tmaeq",
  "key6": "4BxsyysAD6bFFxoSAcL2rt5QTD1AD9hZc5HDTVq9L5kgFWqsyNUvTQLAyB8azyXfYxvWPGyK3anDZf5Ss1fivAng",
  "key7": "FXv4KMU63w2cAJp569FsVmwcJahYt2WFukpA5sViziy4G7rYjngApYjCX471ggW4SisqQWikKxE8bN9CvNdeSQ8",
  "key8": "p7tgryJroSiZhVxk2Uo4VJr2MLP3QRTkCyAoHR34WbBvh6eJRpzVZQNFaYrV43nJM7t8wyLZV9JMSrHimuTQS5n",
  "key9": "224uoTN9a24fRhmANMkh7eTTtomJQus44WEbXF5G3vKxdsTLsqzMvxmSJCTPyNyuQe3xZpRajUguAfWJKYevvm67",
  "key10": "3eSFEb4dE1ea9NQ7FHC3b2iLKoeDkqR8gubaviHneQxDpMtrc1dpt7pSXEsgP2xD2of3Rbjbom2jZGstvWrNU7CC",
  "key11": "1KsxsEuyr571mUuvebQTjsvSesnayj3NR99XzPrgFALQEsfSTUQzNiqoT9dfVW8cPVTwwJr5xvMoD639TDnDPFs",
  "key12": "5z6uAD7YZ7Ud85pgRxra9EmMN8gizjcdEh3CYtLqt3Lr3kacfhRaF7LjcN4MjtVqcGpGF5eQ8yQUQw4ee9UD6Wcr",
  "key13": "3MHnfmstMWuunyBhY5toci6FXkXQTcNurxuxY3jMDYafEeb5xrtWY2rtfQNuGobABtE5KCzj6Pyu8Ex3KWYSPH2j",
  "key14": "4oJkabARVD5kokBHPkc7c7FLWg7Pu8aXVrghHejy3GCPtXdcFdkoGvmdZ7EqFnUSDC2ZVSr2QTaycHdEDKmTq2go",
  "key15": "61mV2MRiftrndUcxiZwJ7mSLZ5ouk5dv8Fqyk9FhTohXQrUtWkjsByfwkwcmFtz4jTMPDQDHgHi7BWLmuGJ3xaXz",
  "key16": "5sAXqDKYLgbTxoKJKsYN6CRwK1rpcGSM3jWdL2nDruDtyCAWtHMhSkFnAy9MimXxUndcmtDvj1ssT5garLcD9bzv",
  "key17": "Xbe7DwLtpMhFtaGqiTLECY9sm7pky9tM9sz4pjjpZ86JX6fn1yDznVd16yaFKu5wK5oUtDH7sjuo2Xnmzv3kYe2",
  "key18": "3g8qSfn5yUqb7xYiBcoo4v5ffwVKkAWWBXWrF7qtcAPzSVHsHXS2LBu64wJuD9rAohat5UUPus3Gw5pLTcKJEFSA",
  "key19": "2QKy7CWJHuTWtK8FVx3A3KXwdnreH82LRaXXVjtL85BSofRdCNZHRxcv7ScgS2CHqBAViaqNA8TWYuWVVzkzTuYU",
  "key20": "3oe2cxBzEw9kccGbpV4y9hQtcguSDdLg7w3fNMPKWGhq874GGoAy2YYUKZHB884fenf6DgKTzXEsb5FwF7TPmPxq",
  "key21": "5jAdTLq9QwhcFZBev9kDbwerE7AF6xZxogtSJ14cgnSChR3s9axafg93o1dLYJqCohn2BrdVDNyhHLreq5sTjcnQ",
  "key22": "5v4CSEGUSBC5xKHcvgY8PutUrJdigaXfLvAmsy5rScp9i8G1RgyyrVpX6t8jUEz5voPxpQTCK9QSGwZFQrhMTWrM",
  "key23": "853hk5U8nnu8XJ8avBmtBpx8jjvL7b2yjpuYXRCSpmDFCfcWtH6Wy9SvA3yyJ1JX9JBGri6pP9d5v3QupPLJU4V",
  "key24": "HzXkPFmiTjbQKg1Q4WMVszRoh9seE2uTFf2qYzcQDDCpjzdSoQ3dVV942WuS59ZNZpoz8VXSVvQ7A69fD5AbhEx",
  "key25": "3zByvwuY2N9HQRrG4UrYuN2oKn51fmPKn4ZF23MZeR5hThZhf5ZDTiU2qnwe2YnXvio34ARbMe3nzyh36SpjszMP",
  "key26": "4mDuHcakFKTjZtUFsdo75k1P1S7XJA7FVfrNJNqVkx2qZwpTuirQbisShXQAJV3mqku59cBYiCfxp15BNphnULUM",
  "key27": "3D6fRrLPrvqDfKHkQ9uCCRT4ZYHBaMdFkbJMq3AA9ALitvxwf9ApiDVS1MDQgCiXbLTnDwRDz9k3rS2jWu8mijL7",
  "key28": "3nLuGqFcgJj82hc1rsKx9Pc8LxJDKBcu6Li6ERFKBhh8hsRz2GM4LdgBuAZ7G3pVPEUH1FaoTCEB7bQqc6M43JjC",
  "key29": "4YMkkaj7S8xHW8mHLg1tyMzyU4ySze6fe5RriAprEGKCdMKfwLKnYTr2Z4NvE72SAHHcWabjApcDoUYUukVbBVdD",
  "key30": "2kdmZkQWCeygUnXXGicNgnrJjVRs69nxDKKUZa9h7JPxn5rzVioCbydRvaRr5A2N5u4Y5ES1sjHQgnriGYqgf2Zm",
  "key31": "5Tff1sts5ztnaEBoTXp8zCas8LUxueunVUbnuJGnjZ8B7JmXDy6oLjmFAnirFGge1ZE22VdKj1N37oQ31BEQ7nGc"
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
