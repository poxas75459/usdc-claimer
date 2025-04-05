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
    "5p7SRtcZASW2m9HtqCWe1gZCu8kmqkBkfYgHN7XN3JSgEqh25qgXsS4wFoK4a4mt9ozSGA9vy7v49iiDRuu9GgdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abJMZLWG1qV455ntph39eWgBD9u8ZQdRSNh2xkLThdD58ra9ow9QNjGkmBmCtsRKGeNWVKUB7oPPhzKE3fEbbEA",
  "key1": "3SY3Xf4E6FMcYCopKdoZmR6hhJTnzkuq29WBUPSEmFfAm4b2m73AaqhoXJcRiSssPHw5zUUgojCmQUci3EefHGNU",
  "key2": "j31h2NjUEV6dEGVKBzXDjdBgsE5ZxKqapeBQkGzjCJM1CsZKK7VuKLJ1LPivF9aQFjhRFoiL8NxEV4RH8TiZvNB",
  "key3": "2mfW3t2NjmkjuKcKquV5Q3CCpW86ZZJeWVWGZbvZSepLA8Eu7wH4wzCgfgD1n7PZuPL3QNbmE5j3YPrtwCy7J6Yo",
  "key4": "3ZvpFxiZJGB8GZX6t9AUygjcw9t6YbkdvTrffwQghMgPwMx9tuyrag6A6smJFaEMSdpGbQEf3MvKJSQw5N6wCBex",
  "key5": "2VvFRVzmFcnmvzb5cvFYA28mzaFb9dPhk74e1Z1xVC7Y756PaNx1XnyrXk6UBh8gc56f8YzuxDPgvDRGwWkDq7PD",
  "key6": "5QkhWv2Gv5k99AtFt4L4rajNHopjgoBSRjftsfst8Dg1zpnu4rpP5dvPY9A9GyicU4dFsNqSzaGoPkrMdBsZ4WJS",
  "key7": "4B23WtNzuugMpeETytQXLe74hcdrQ7HxN8ijtRurmgwRp3UxMYQVgTnoy8ksZm7VRNzww7zvqWfDk9XY4s663fDv",
  "key8": "5HyF8gXRFm8cctrsWuy2oN5oiEcSfi7uFVwK53NBsngRWqMrNAJ388fMqgod8AAca5EKVN7QKLmTu1LyPLafbaC7",
  "key9": "4xtTqmY4F13AGVNafzLiCK956YdYGKospoxY6kyutPDW8ad9BMET8pY6zAqoL39fNk8CXZE8ejpcFKWNZdjFiR89",
  "key10": "2k4UmXkVHvBz5tkwdSZdQsUMbsfro26dGJUUr9R8A6zTyZLe558LtE6bhcqcg1cbL4HSjKXXEdqpr66ac1VYQQU3",
  "key11": "5wHQ4B4cTqwSqbB6oZyHjnn5KiMon6rcJKsYSRTKeJz456QKpBjF3neZzXpC5jphfewEoMQajzS7sBK67kCBDay2",
  "key12": "4p3iXrq2rVtgYbToQ9iZYJmiUscxWHweThv3JMWhMDmWmJjxUKin1SxJCTHwQjAGPRo1SUMWH8tcv46Nshawpsd9",
  "key13": "5LwdN96jbSWMF6nniBKJokdryroVEYkd9A4hq4bMpy5Dkf3ya9kxiEh5uKp9xFWY8UmRTBzSj5RdLmfpsYU7cYcA",
  "key14": "3kicSJRsMopZotocUyVeNeByWnVABxNuMo6xpqvEdhDrpn7HVMqne9PYmVsucMbMtFhRfHUbN1caor78FtJBnQDx",
  "key15": "3q43MYi6oGToUwFAXy6H3F8QPFf2zhA2ciBMbGQWUVCzw1sExjwtL1vtxVdCTXZjorkLg8rgxXeKp7sM9WRNhCJj",
  "key16": "5aquJRzNKjoNJB15Z2Zr82n7ZBDa5XUJuV2wkhT4JgD79rdJfEDuagmpBMGN6FA8sbPxyCVKyZkk8yWCbMCkXbNT",
  "key17": "b1dqEdi3R7FATbHktXsVnXWKqAV6qDkrSKieNzEVwLaUiEpWXTScTqbWNuBprcHAwj8JcMsdTepmds6FAcN5KNy",
  "key18": "3Kwh6DtAQYMukkosjmaXyxoRn8xqDzMmhiPZyo3EnwQGTkhVYc3uiP8be4WUp8MoF2rBymYPWfniW9tCmBiqevpb",
  "key19": "4tLVc65r8H7XpT9PGmbowxpFJfEt3Z5mKtojLzbgt9wEs3NnrQ7kZeigVEUV6gJv85Bks7V8eY3AEBQvpzc7oN7A",
  "key20": "2uzXnDyFx4b3MeA6ryndM6YHBbs7eLVxXS2GfCL47ooAEy2N3oH2Ttv8dqaVYDd7a8euAAa7YE83LVHU6K7u5vfg",
  "key21": "EzoFgCg9Gt6EhKMGtYdBXT4TwuG2B8wVRNbr5CdgvLUnKyKadkzzmNMEK7voPskeehszeqcjpY5vuFMqEWJmXZm",
  "key22": "2sWRPryFhEfCEc3TtzDHswoaqQj9vBgYHt4cdkoGDAZsQL6qcgKNsNoDuqqXw5wsZZfnJptoWta3MRCKW6pa6iMo",
  "key23": "38dkCfzJGfRyfZYZ6ErCdSTn71UoGeGNhjRiwY9Bm6KtKZAmDu5Wd6FHaexSRTwouUiL6j22bqMh5rRk3MrPgX3m",
  "key24": "NwYxvLJ6GDvw6yt2WrzkzHjgy4BYcYRyDSF6ytTxuwuhCvfgwPpLqS4KtYdLVY1iQn2DSkejK8xNSREynLqUuSZ",
  "key25": "2yEJUjeBZpt3ufYHjs9nnKtauZQi7n8aqqECNBKEAJbNMug46SeWFausEDJ7b3h4frtgEZaYp2GHT1bLTUijhAbW"
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
