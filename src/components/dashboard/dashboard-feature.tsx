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
    "2J88sC8b2GL8LDibHKfNm53oBD3tZWwXt1bR9zwF3yhvWYQC246UXTjBAQj84pCTa5UNGiUyGL1MVJ8rL767P8tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkNUPE1Arma1vumKCkNbrqptbYDJPEdvbmrUtAVdVB2xraVHWhSEKM9CqpFFanawgDV7yj3sk6Zw4MQHmwRNSpF",
  "key1": "2RCVDbADxasvNM42TbERCySKg1B6UDN7t3h1deci6ba3pj32CtjD3TBgvuCBHrEvcpuwfJtboDBMnhJpud3Z7Z7m",
  "key2": "TTWxoQDiQtGWACR4ZH2L9xKedxyL1ujc7NqkvJoGyD7twsvXYU2YVD1JhMDVvPrPXwUPgyzPA62pWSA4uteSo7D",
  "key3": "3B6bF9xYWshDMgiJubM7bU1xcx6y4zuSrddbrsmbmj25NTmaKF8qrjiV7N6MAGwmTeWm6Kx9nCLjAJifZvq7LqwK",
  "key4": "2eh4q1ss6VxWUsmBPXPDG1yR8QmsRNA2t26ZqL8swbeY3Xy4fDTRWfPKZb4RYyMy1pJqF9t57xymWSYaXMHfAkPq",
  "key5": "YagrBKTcBj5CRZWsZ2SJGtpNKt6kzXAnuAWErvMZCARfN6JoDYrt3uYM4fKj5huu1nnDjrZUWyMY99D5nE7DqSJ",
  "key6": "2KWnSMJ6YmztZRC3LN7CQ3d2YKyCKDU48kbARqTmYJLfoW9AKFF9qPVeefWPyguUf6NCXzH9UDky8kPuksdKkpJR",
  "key7": "3RiUNo9aJ1E2d5skhe22367ZiQAKn4QnKYFq6mf8cTsLX34b25JRrqnuUNGNegMALcYh3TJ9SApEmNCQ7mpugyDY",
  "key8": "34N2nLTMj3uWGct3qZg15C2mpxTDDzNFfDTprHsmzTRbfAyNd7yTv6MdPWb6n5L8fg4C9VNFeVZAPiQ5JgfVh9fc",
  "key9": "3Z9BVfJqa61VpgvuTnD9w3HZHV1MTvs6jbrFStfqYo7tq63HMv3wBp45DV8KCK3r1ZQUvjGUJfo7BK5aG6pnTCqC",
  "key10": "22782YsUbkrXLa2XDCLgg1jXpTY7bANDXVV1kukj6zWSb7h5zC74M3DwG6vXgtfsqdnT2UzxMSPpn9TQ1HRiVcDk",
  "key11": "4mcGf9WPKtYhdvjxkFE2ShHyjZ1zQN3R5c7E9SsavEi8ttedAakZNsnSXwkYMa6m4vi1inf9oYXaQ4xoDdSM4htd",
  "key12": "3rkcekWGuEc6K4yqv8YJU49eop4AX4DPyuce5mB8YPpbRry9uz3jrHLJ1zf3CSrKDAbiGT1gTJTKXcbNcskUeP7V",
  "key13": "4zg6FfsJBSqYxxmWNjEyT8s7gP2nkLNUKehUpt8NT24SBEWQGMQViomhQ5kNtbkaAbwQ9FzAXTgMh77TYvaUHSQj",
  "key14": "rWpPE6jrvivL57EFX7yF7kgm2zayfJHHdhD6yMgQhBuMBz3SBYk548YebCW2UEtqjgDtDvCzkm62A2edSeou2Fb",
  "key15": "JV1qXtCFEWcAZa4pwRW9jg8yUnnQNcEi8gVz1Uuim4cqiYnchAXXV8DTGw5TBRMdxS5GtjhrrBzzyU9Qraseeoz",
  "key16": "4BS9JRURgigELShFj8gz8tezA9mmo4gHCrXn4sUp5zkNNyZFLuhyxewkBPe4vU2SAW8pfL9YTGMwfenCx7fb3L3Z",
  "key17": "1e5vuQ859ZfpoKzzVaVqZzsr4hURHS4UiEkTwicGNnVGDoQ6Cw74D9rPCjsSU33qUZjY7YftMi6gtcThrkCiga5",
  "key18": "3LXptBYGsisBpwZPFYQiJhcXDQ5CRrtwEA6LjnR3WkKsi3aAChtjc87UBqkGUV7DKDhm4jCHr8zVKVgGArSXNWsL",
  "key19": "3QrCJz5kmM3G1WFoKu84T96b4rwdX7ZQzYvYMzK8CzGWJbACnh43FraAqnM6EhASBmpzbe292BPWQYQgQecKzFzw",
  "key20": "21SwQt1JGFFhL5fbBNGqZdS7j1CVo9b64zaWEK5bck6ZdF6BP9v2YbTW73VsGyaChVy1qSHPxCbwJQZsrEypNnmc",
  "key21": "2Cnrz1oDXHwMufkbaCg7iNsQXcPbmJcvWNrCnnzb9s6PS1RfwLK1DtqF2r93exQBnH4teixZg7KWCQe8EtzSp4cE",
  "key22": "zxdbQTUp821TbAjVU5YLxwcR4qEJG8nw7ioVKpvtZ4q8UHaXRb5RFzJbErX4rdcbB7QEcYKXiWHAdPQY6JjE6RM",
  "key23": "4Z3YTZHmkJuUxtNc42FH1AVavnVjNhb2BPim95XvAVKwf8qBQBWDaVzS1ieQwhtznFgBp49vmSJsoXw5k7xudBBa",
  "key24": "2eEYR4zgaqSmkmGhQ3YnWuwYkStpqxxbUsRz7tAeLvZ3YVxMkZejF22wcLXSTebxQbp6iSga7yazjPwsZKkVMa1J",
  "key25": "2GVH49Ua76gdGd6GGkuXYc7JeXst4RJQnU2zu1rFe38tmGQrVduBsDcK5XHRfH2aXcpKyAibNYw7xu6D5ZMUuhXh",
  "key26": "3xeSywjHcrNts7mpE4KVBTLtY3RFuVH9vQrBeRYU7xzaWUfunZBL2P4mEjL7fJpqbAzrMU3hrYE36cqt23agB4CG",
  "key27": "4rgMtRksdWPh7LR7TtA5VjcAjGrMLcGeWEWcGPk1oSyKrUSi97hLLjcxhcWM2MKUv8kJY5RpaSXRbYQoh5HMTEGS"
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
