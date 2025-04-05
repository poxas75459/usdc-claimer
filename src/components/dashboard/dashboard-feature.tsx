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
    "5wgJUmzS1G6uBhhR7ZcVeoLDZe1B9LBZmQ62qochBV69M3ZPcrdPMfzuaQCT91qrhEWeySrzoUAND2t6Q99zpdCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPSode1RBjxpwehjfc8sk15dt96ibuRQWKySj95NYThJsWWyZFXiXM14RM9cAWdZjTZMER6UrZ3xM8mUBefwBt5",
  "key1": "3d2We436AY88xp6FPGh6mWNSGkznLg9EvW3dsnNnVpLyNjLVBi7d4rTS1Vyi2AbE9iSdaVZSM9WkEpNmTiJ8pvjQ",
  "key2": "GuUV3SfYdCcv4hXBsJsDNKiHBGFcoU4yAdrNVaPeLZgZWs7CfNw1JsLbK8otpn81Qwz2fV7KRB8DUsE7UYueHH7",
  "key3": "596occkG9RJSHByAngY3igp1Lk2NTiZroRm45MQfwg1eGKT25Rs5ZPmdBA1SwLy8HnhTmn4mBXEPoZ96eEa1WpU2",
  "key4": "heSufbLi2KCZdrJbxwCJSwTx2y7myfUsMTQj6Z65GZogsUsnE5FFa64UmTNQeSZzdPVVc6JZj7eWxEDHTPrYyes",
  "key5": "4qXHtfcPbY9d2J8wGhcustG6b6b7HCeBFiBy5UFuCPHeCVkP2iUbwxC3Yq8EGrK1tMkCitYq84QkQwcYxDE5RNsm",
  "key6": "d7LYNY3p6xCh6duCi7DBbTpedfzc6qHRfcSDsddVMEi3Vh71M5QsTxF6dhiruy3bEj5UX3MRQiybDAQJUG2prpu",
  "key7": "LKPiHHtwzMRWW5k8LpXZfWrYvRooZ3WogJD1N6UHcy7KRm3FRM23tmEcRzD2ypxtemARR25oofHT4dNcC6U5FG3",
  "key8": "3uKHAVh4MyD7xvAimQCsus9TEXN4ACn3ZMLomVjAoj36ukAmH2BpN3o9qn8wYuXR8ZdGtmAkm25rx61QkXozJvQ9",
  "key9": "4CvuRFjbXH3qaQHEc2Sqaz8UKsJkykeZFhHbriyuuF7tGPJBMii7FUuBsic4XajX3PB82bqpqHaxDoKoAktscntD",
  "key10": "3LCzRkv3aVTU95tdq56HbDGkJLaESu2vR6kkRjdgL6JcREMNR2dsrxbL1MoY6VdL9KAuuKxqfe6SGxULM3Rb8rvj",
  "key11": "DA8RvVotkhYbAUhugDroTWoJc4LDuAQk75KZEY4fymfzBh8XABeqqNJM3UDdtvQMuXEXV4uJFX7adFVS6PM42S2",
  "key12": "63NLSVAfiTEE1PeneG3pzwWep2v5KP2n6teppcyLxdmFVkMYEgwNoxXajh3TeCSSSKMRmRbx8zj7JRpzBiSbJC3y",
  "key13": "zv4kRBJkmPthFkyRqDFdfAjFV8RyfxJeNb2SSAiReK4BiQB79PyLzdzxxYXhPJFJJczZhXpqL4g1n6FpVvyahYt",
  "key14": "2Re1GGAPRjzAPQ3WFqoiAQLjgzAXRNezNRehPFRAC4WxAz9koR3122MpdBhV334EmbyUzpFdhHwLgi5vnx8eRoLc",
  "key15": "5mQRH2Jj37pMWMULkChNmyMzYvany3jfsCfUkUsjnLkCjwm5PrYM9uiecvi7t8GXzcWZas6ubNKMjZCaYhkiU151",
  "key16": "2eXrcfYfDFW3SjzdpWwh8VSB1ejGta7uxKDmnXY2KM2UiTpSau33nW9Z2nWUj42jFhBB8ar8JZLbi71MxpwAj4Vs",
  "key17": "3YbZrKc7ENTni3SA3D1GUpNg6axFY3FEVpuQtgPk1mLfnhSs2q9D6WACdk71qKdhN6ThQ42KUpgLvu8MohytPEFM",
  "key18": "5GuJXbue9Dqfjp1u3AxuK2YPuRdtoJ2WxS1G72XqgUygHYPmCtbxmkBXvfTFz42uhFi6t9NWBCfhUmsFUygmhjmX",
  "key19": "63REhcXM3J9NVz8qkiwC7kdnxdsv4vcUBG2tX8V6dkEBAsoLV5yKWp3J7BXU2shmfzhUYdGCKaCMgLwTYaAeTrJA",
  "key20": "5FPgNKaXu9pddDcvettnMoxusCVMxvozTFhvED4ut2uBYSNeGXsrzqBVzZZg7EJJVD5Ue99xwb1udcLpU6P5Ripk",
  "key21": "xb9VjuYQ1x458M1S5JR46RYNS99G4EJXoLYLSFjgN4iYoC4hhn9natmbibJGV8g81JCNVqPwteozJ5FGV1QuRCm",
  "key22": "66QLjT93fvxfpsAWu53KBvCwoGdwn9qPo5jiokgWu7BGQJSdzZoavHq48tSYuGqcRs4Carj4Z9C7BjTiSnoiXk7D",
  "key23": "2tQc898Ky3Zdia9GspuK8awKChgYqtE5nQcYkLYUndoZ6waJjyiCN5PwrY55KiiRjijD3t2r8HXRmkcLRQtBVi5f",
  "key24": "4uik5nJuZn18k7BvUXG6rkzpJFU9oeWtd977h4gYrjTvU2f8rhzFDb3bR1bD5WbQYn6PKK6oev9forweJnv8B4mf",
  "key25": "2nPXXaf9r5j5W1SRLaw7RsKdqu23f8WpFNyYxdHq5aAmDdJjVMr4SM2ADGs4vbyJK3Q3v7FCnSG5JXEu7uUL1ktV",
  "key26": "3tZBFK2SMmpECxeTMEBs9L9QXeuHmGWgppKb9AbBdLWu4W6eDWWEjQQcTfe6RzutDX9LzzBkRsa1mBBD4bb1iVu3",
  "key27": "37UyBUtjp6dbSf3KMWbSsETpKeMRkpyf9xwRuWnLRwA1X1yWG1XsUjiQw7rPGMsMYu2DjHS7RqvmhBBYacMyaiTD",
  "key28": "237Qb93t97LBsBgG1gJUq7kq7hPVuNjZnozuQnmDpoNnKGUsRq1RzHvZxGYCnTCfCpiVHPTsHefKU784SUecA3Gf",
  "key29": "gXuoxHfKkzr1JRhppEu79gcw9DhbfnNtZrCH2v5FAWKVmwRjy2c8gEC2w841q8wSXAysxGQHSe3vMWQ84gAo72n"
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
