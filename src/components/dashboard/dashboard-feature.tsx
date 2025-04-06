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
    "5BxDkP4RrCFJZSa3o8kU3KSL5ARuKpZ7MceSh43X5ZHPTqhus4EGf7yMhk7419DQhci7XD4fG7b6DFp4GYpz1Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJNFWNbZtmSHQmh6ZwoS7D3W9dNPyudRwuk4jwxDeNT3sG58a94n4x3pBsNjff8WsWzspRNwB4gmNS8BgJnow2E",
  "key1": "295bwdFKgiZJgwetx5BsXEqwbEzpngYSQ2rhvenkzTu2y5xYn8J6ocLQ5pEQYpcBkj4h3HShoBjMc93YPQSP6SsV",
  "key2": "dBYqHU4zw3VDNvtSyhm6M5B5RrwqiqXKfsA5bZCjgNXDzENBUT8yRX247W3bozbF8yTWCDC5eqrVbqnbnZZ2xFn",
  "key3": "22Ut2LpiCdmXoWTGPn5dy6JkWGD4ty9aps1eSy2bELKE7ypki32ZqWMfEyUUTgNgzsjhJBEwcV9BdSnyX6ongK8S",
  "key4": "4QvZoEStKK7DzymGsnoUF7Tu9KUSvaZjD2yhuqdcqEYbJtZaZrBzDepBvzHwVrHFkUCHicTdrRv6NbfiPfF36riD",
  "key5": "2fEpPXHYqoHXiDjpn1ZqrGBuGfTfBTdeDVUo42n5i5o3RSRf2QEwi2EUPtm6Rdgh6cvvH7wh1FVtQhUTpdgzVDXM",
  "key6": "2rK9j5LnfBZHwsCCgSzsskVS73id7DN5TjPLmSpTuX4oBe7yxVK7hoirqsnWnmE2aQZXmGf8P7ML2BWcupzm2Uea",
  "key7": "3BkivFi1kEzv6X4KqyVGgMczUVDBGvKVMrYsmhTmZhBhir3Zi3mbeuJfc1Fow72sexXEdakS7hwKwCKLumxLX4hB",
  "key8": "2jssn3otZbDvqTD2E7rF4dwMNvrhLU6iLTmZHgnSFPMk5Qpnm5UChbxN9DQh2wyCrbbsJerECtbbzsSxjVTydrYA",
  "key9": "5hFZct4kMDFQazUKwNfAWPoJotDYQ4MUxDpbuDe3TKNPK5nKkhgwUBza9sSnpj9SA2NVvhtSEreggcdqAUrJcgqR",
  "key10": "q3ByHE1WfQu6rWZhmmSpf2PYRTbCYLLMFAvqBTtFGLgWmg482swS2BtZcRdGiYwPKtdyYD6CButo3buto24Aq5P",
  "key11": "5zCxoDWfsphrez8gsGdPbBuScKaZHKjRd2CjeT8ifAaXQN8dLqfNnJmEuZU27NEYhCWdSZTufBaf2vUgSeTxG8EQ",
  "key12": "2a2LfDiAP9J71JMgpDeCnYc6uc6WJhKJ8rgZD6vvEvXPmVGPCNau6XPCdNcEwpfAF9cS69AtyTxGw1X58zZqEBBq",
  "key13": "3dQGaNVMnFY2aVC2r6a5EqRqH7wyQaweHA3RFvXCAzPcU5ewWVGioLd251c43YdggViWuR6K7UaqWhQiX4Hcd8AN",
  "key14": "42sditj8i5g6q8Wra9peLPsWEycaMGV8cuodb7Qwooiadxwd3Y1vSZdoiJWEuYYQVTKbi5XLptwmCkrQojivA7oE",
  "key15": "2Kd2gaT6XgAJoCL3JMeatW2so9Db5DpwaSWff3D2AQrd7wgdHZDgZ5ueXSkspaaXCLeJcESKGrxxev6Dhb2oKwJC",
  "key16": "2NUJws4d7zNy3PNSCfa3iKcHNXiMj2LjcuDz9ckBzmMDBYZaKzz5JpsDWFDTSzYaNcSU2F8sydDPKBab6P1dzxnx",
  "key17": "cRTmgDv34wVmtuLAFoGn8zscVZY13C5yeL7BY8NQemb6wMAwfLxegWfsEpoEizZPuvfG6ZpAEt9AiRPGnCGb4J1",
  "key18": "AjRLC8iwcFoeQ7WT2wib259N6G7bt3afeuBaZ7QG4XahbzRT4d192DLMsQ1U1R8we23NNks6r6X5sjqVUbM9wEG",
  "key19": "2rjuXsgCcAhXQpQamAKbqLZXMzredzi7eFYPfbXqF56v6WrMfcT5pjR82t933jPPZqismnH9twvLrWnm2YTSeV8m",
  "key20": "5pWJogn2g2aCJX6TxVDYioBFaUGUhb4QoQ2ri8jumqzHpBe6uJ5iJfJJpaxNrwMdZagQUHcrW6XDnynRxLrnDBUa",
  "key21": "4PM84pDA1BtjTrE8PrKM7dD3ryyHBk3zMyXna6frQWCh4yxyBdKvxU3TemRVfbbi9pPnoYtndAex8hswRdBRGSTC",
  "key22": "4jBDXJXxLot3zgHfAYgdHEZGdmR2WmyfVrQZ3XHWW2jYisQAtAkU1tBiUmfpdEiA3sFXhkmfpCxfQPYpJG7EEqi6",
  "key23": "bXPMb7J4NZeNWfrJ4HPbqDhpD3GCh9M4FVZ2jdsxjVSYM8pYvxrdVPZSmRgeXWjvTfBGQiH2jDbE7Ldp7cGFGEa",
  "key24": "5eCDzPhKiEUk4yvCgySBXSuUx2ycukS9vqKWppfChqRemjffDEXMYMsfJ4fD8XvctxfiEMEXTG5U8wLUt2kUJU5",
  "key25": "4SWzJPu35quyBz62z44vevDLu8owtGLG4mqn9iryRn1ZXYt87qfmssPddQCvxZ2FyyMn1pLNMhzyGeWwX15RXNcL",
  "key26": "5S4FQ5VwuKGX5DroydouiE795ocXEKjf2qppdT2h1E1WaeH3br61jN8Cx5oL1vV1FHG18PHvbY26Bd1XFLxEgwtY",
  "key27": "mxr7xiK2hUU328Bvz8ot9f17N3mPtacXK6jGuUiEUcZ77krgkYmzQE4jYKgF9KGbVTqJnw7jacQuTM6z1vWyxCh",
  "key28": "5DXyzcXxQSE7JgEWePr6DNewce6SYrc91VurrnBzDYNLewk4JoGhZ5nu9c1DCeWsE7dqhnQv99WhB5fQucy45bwP",
  "key29": "5GTQjDwuR2pe6Jtf6SXVS6v2V6QymmBFRGtFQg6azCzhomEjou2tcRrWp2u9K31HQwYbSJ5L8VD93utpRjVemtjY",
  "key30": "37cQKSYVFi7sSi2uF9tbHfxJhrhFKsZjxN5BqR4eaWeHAKxatd3W6S2K95g3J3MUUX5D6mSiYBQdLwzVj6HCzaE2",
  "key31": "5ZKVExqMRVnVZ5FKNRGAyvC6qz1oRq9znaYJiqZ8jQjCoLHp8cNtNHpD3Gm6ic4FEsxmPQFZsvRf2fxdE8wnSVNF"
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
