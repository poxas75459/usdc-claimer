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
    "VU9J3fygEL9HNkayvNKXF9zhNANgUMoybTrBo1Gyc5KE2kYJMfyGZFrn5zwbRXk2dr16XysXkkZKz3uyGDFqusg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJ7bXRw3ZFp21yuRz1vHBJn3FPAm6tvkY7TDkPhmGb78frrXYpv5gUEH8GFjsGnf38QvjBDJeaUBqizhkSbQ5DH",
  "key1": "4dzD94Q11wYRdpUTrntCrATmNy41UVrFxT1a8U3Cukhnm8Q8duvgsi3LqaNdE9tbau1FJZVZuQ8VKMjrG8AvnAxU",
  "key2": "J1TNMCfSFqtv8zyMWDjxt8NXA6ZPcWNebaZDmMKzZzyhV1mtudAo9nfVMtHYJF5eBkExSxciZAQ53CDWY6AeLEW",
  "key3": "2Gyq5MQqCiQnA31Gm5qgqqpFkCEXY72Vq7gii1wqdbJH7EyzdTJVsJwaU8oPSG6wGC3bCdDeKnzigUMTQr2QnQn2",
  "key4": "4C1LFreuLsCDXjPhvtsjMS9qbXRDtYLJi7hYfmEsXvR9qfPtRWnRMdBWfH4yRXC13oa8QYWazSpQg6LzH3nb371x",
  "key5": "2aoTGrZdm9q4Eg9sGcZTRNU7r9yAPdQW9R5tfnmHBEBz4kxmdgAnHZtHkFcnJoXYdzcbRvp3z8ZktHuZriasWNi9",
  "key6": "4NgpHWvn6zZm1HUeXB8wCQTatPqjtbu8b145f1BfpUN6WSH2MCapdLwAC2jYShhjbPg1WzS5PQFhQrJmn367s9YJ",
  "key7": "5PD4sin1o1uZGWcuoEH67jQN4v9uCRq5Fn34VCEfB6Qq5LjKNu6BrNGuUpmCSAeQJsbzoW2DFvUst7xxrnhzuf4c",
  "key8": "3xDiuTpCjSakqVsEbcVQVbv16J2EFcHWvKoD4D7LuMad6BnpJq69LTea2NghzY6jeM3TP3PCE1Nph5PByZEbicEK",
  "key9": "4hCeX7t6hNXheakR52DhByvXviSGDRPyjSj6fhTe3zyungJbHqvmyWH5MHTBZwE1HrV2eoEQ2qEAqMjack5oVSrh",
  "key10": "Uwd48BGumzrJfjzTKPmAUuhjs7Ct3tX4EdmXpeLnb2ELxS95Px1SVpGf2XqjLJpHgcB1GSAcmSzJvU8opXVoTXN",
  "key11": "2gACXgM9tsmAZ4ovz9TsHr2pptG6pjV38t76TCbEncVd33Zx3127sUcKxu7GbnongHu66PVJHW49DATGVa3UhcbL",
  "key12": "62xwMzVo2Emm37NauvC7dvqbmXNtv9smXi6qhP3XoMCyJCXW9b7n5RwhCt38CY4JtNnWdarXQ7LsvGMzidrRHxqD",
  "key13": "mrfuMHXZUuYkBauHHzvEbSDpwbgqFDoE6kiWegKDmPjuMHpvD4g3kgfayvhQHj3hQ7bGcKePft1DfYY11pPStFt",
  "key14": "66znHspHnp7GApU2fpT5xdKSNc9fioxJzeZnbZzfhhbiRvAcnTb8u4aopwSKUQbdErY5apj6gE8hgbh6NrpE36Fo",
  "key15": "4ynZ1sz4wqpigybae24HKZi9ALS9ZQtNM2yoS9rePXgkj1eNJNcRj2BMKjiD6w43k54CR6ZTaEKsrZSeZnaVUx8N",
  "key16": "4oPPwXhGDd8xBMrqH3BVeWjqeVQyCERGYhNaqcW7mNJRX38LRbQUrMgLgrtqwSCNsnUVc4WvS48GoxavpSSrnFtV",
  "key17": "4K3YKLnmV641mUDDomQU9LEqBRhxPN9eqEeKFAcGeL9yGWPWRuLneKbEjbcZdCk8MRDgspZNDnssvEt15y3dBxc6",
  "key18": "6eeYRQqhXt98Ki2VRUkPhfnrm7XBJ6U8A2KnTYVn4wZ166SrSfBsUBErq5NwFzHo924eyMrwdx1fzUFphL8pFoU",
  "key19": "5HsKvfH5vwDLhTnFG7xyh2F7DAypZfzRQUWaoyxAowHgxkvJM6dn76ShFohgHMicD2VjEx4pw73TBn8FrkqABMx1",
  "key20": "5L4mofzZchboEMWWQaJFHwX8YqLu4bbNGVt3pynZjcuniTHht6fGeLfguhqKvo5Hez2GrkpidXgPkb4Mkcict24n",
  "key21": "5E8hib6A2JTVpc1A8XaJ9KifHmJuoazwP6QjzdKtdQsouvQw8kpzvqiMqbuJkTw7MPbDxd6SM7GY6dSX2FkbY8n2",
  "key22": "4r14wACxjtKpvAZnR8UiQpC5N6s4Q5orvq9GfHBUaucwStYQ7BYQRt9HFatvb7gFmSNKQLs7qpRNv5vDc2Md7zcV",
  "key23": "PNECkYipkankpTD34iPPkfoy6RNV9Dn3DfRakAUm9LvDPqPLCvcjzpq1isMR1kERPzyfKLg3RqJSg3EB9jxjcUA",
  "key24": "4rRV1N6Aq6PXpBNWa351mKtSZhokm1V4x2bdmH76KYzh2GsCVQHqP3uVAfw4mCyjzhy7yD2KTeEeeQusnDaP1Tj8"
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
