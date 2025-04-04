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
    "2YcZhSxAAVyZL7YiTMEoX5rSU3w4x1MdQPq6D4JUqnBjCfVBqsqBXbLMLsv9tHoNfwijs9BxB2cURpcsYw2SJzqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFp5mNagVae1NRsvJduRzJNDyiwmiLqZ3WuS5zWzpcXzigRvWBeLFkKkffcsVJvF76g92tEKwYF3mvpyDQcFNoG",
  "key1": "5KSnFqSqfMWBWbzz9JuyqC2hRX7ig4ktJU9hpVjDoxfokQuogt9Hr3FoabnngyCBm3UQjK1sPuftEbd1N9TDVegy",
  "key2": "4igSaB6ERHs3PLbu7wXwvDVk5NpRNXgdpNJJpVj314VK2qKbshrWLrdsiudeKtYRNU8zjYc6B7HdgBJo5kA7mnLv",
  "key3": "4JvmiBbgJQVGsfn3Xs7wRwbFat6G1cbYj6Y4FsvEv6GjPz3Dr7Ne2dMfTRgMJXLoY67huftpyBjwWJkWrBXyhr48",
  "key4": "2BG2Stp6hubFLzNF2P3L3XEMP4pYAfNkp4ufzL1kZKNaeXdM7Y2bVnTqg1qT3zLj9GdFuBXjPKaNRD28T8d7UzT7",
  "key5": "5qYAtv5txiCbC6mXrw3o5eWBW8pkBtKBV932AxhKmapcsWNXpEFZB1WqauVZVips4LN3cyDXF9L8GCKoW452ETYj",
  "key6": "bXUCmcUVacwpM38C2XEtsnJ38rPyzPBRe4EF1TeM9oAb8Mz9qgP6mEQPcGEiuiUcsvez2sJERJE12yqyiMx4BUT",
  "key7": "4jqBXtJGw9vS37eRaN4kc6ffKZZcftDFz4fCrggmcy1NdDimL7fwD8esGoa5Yfr9xwx4ZDkTZp2Xec9t2UBQZUDy",
  "key8": "3apTF47PazCeHboCEY6PpuMyvJSAvo9UFVtD4cpQDjwi2ekmmcicduc9SXVSGFALjvzcdVu8F8B71zhg85eb5vzG",
  "key9": "24ufzKgi6KpdEXw89gTbJpfK6vYiNuiw3BypwkByY7c1qanf3MYFMFbvjQE7ZCFRvaPspsyw6B9UdbuVLqaF1GG5",
  "key10": "33oSRr6LFrV782AKCKmvvg4WSv8AfEZ4re9S98DuW6ZxGb8ViX5MngCNABiBFEd7fpapuY65xqRS84oArfYK6ScV",
  "key11": "zBE4mVzn82behVZimee7d1EJPYoyQQo2cUfP7CXWP5hoT62bHwYinqBPD7rhhrTmZYcXKy7PZKk7eJ4ea3uf4gQ",
  "key12": "5AkCRVZgxTNaALCWtgoLjBezvcQKXmefVRTkipEK574V9PV5YuuAh5LSURTA5EBaEZUdaTrusoKo14mMZvPGfCh",
  "key13": "3K6tFY6tPPNP6KFsLveywLaN4VdPGzo5E56c3N9GKmiovibXpA557trK6ymqibaxpqwpKJ1WBnvDtjtwtMhi9zGT",
  "key14": "45jryQMo7Va5yRqoaZVCqpNBCcKaA6RNFePjivKSV6mAQBypyaXNx3xxHM9QRSz7srxA8YGWyR5ZeErTbWgGzZVf",
  "key15": "3Avrd9QeMbEz9pEwy4HEkvbeVLgZUt4dpz6dY7QnVJgoSWTi78ViKD34X9EjqcL9Uxs2Y5qwfwMQoX63Gi8hEp6f",
  "key16": "465YkjpGcWU58mXFH1Wfb3tWJ8yF41YM4iXMTXuxgCbtv6CvajitunWhmL8azMtbK9Atg3kDtadagU8iw2b9GpLY",
  "key17": "2dZwEBxTdyRds6AGV3x2DY8YVjKd1FpJWc8hsitJy3q5NAuJa3dQhAw4YEcYNAiocJrsmUJZcLXoEdM7XTexVyH1",
  "key18": "DgyUbqduH1TGHEHWJJHXWs5VoVbeMJegqD1hVd6Boh5Gy6GpsmUnNrLnbrCvjhZcchr6ZrSLrKw1GNDfDQgjDjM",
  "key19": "3fTdDTA2Ph1xjrJGG4CjhUhRChd1PkvwKdTDGgz758rEc1RuZv4cgDGnFmap6hXDcqkTEpMgoYdEMfnax784Ff4o",
  "key20": "cK2spSqaNsEkaQKVrSH26zDKfWRAg35FkzcgTxDKP46sWo7r7b5Ehjfd5acCAYhPXaDXJreMPsR9ePfJfbeTRDa",
  "key21": "2VADCHMcTJ1Erg63pa9znwsxQPLV9BAt6pVYt2xXkQ5SboKUSxPja7UZtZta8HYDaYt4LqJxJS4J6wtheorRffbL",
  "key22": "mau2om2vD5f5MSpNs1y7ChgKQHiBBqr37dbc8nm1TEk3UsEW9hELQz8AzQYwzdWtvXMCoxYGRghk8qnRziJhTZf",
  "key23": "2hGXcNyDNc2MzNtRumtCkdYBpWW5tUwP74NrNmGa8zUHeMW3FhzDyjrsTMrVZ3f4FvYKkczyPNwUokrfEgVdEeLQ",
  "key24": "58HHHWzc3e6EqPYiFx4xKad62i8VrnSZDugzEguNn4hM7LXckH3MGkYger7Q1EmJ5HvCGNKs8cv1VG7t6ua7ARRR",
  "key25": "2yjD5YuW53xej84ih9FzAw5YfCj6fTQQXW1eRESbvXVQfYsFfbr1E1aSGjqchgfv36NPy2yJ3H4KtA1cAxQjU2QG",
  "key26": "2ERH8oNV4LKJJcRdviQ6NXMSA1aoF4e457hueYx2Q6J5TZopbUybTCKPyckD2uF9SwkyX11zRVjZuAHaBZTfcA2n",
  "key27": "3MRkq3n82EfLDJCy4aQKEZ4jixEX33FgebNiTMJzXqNacUK2wrJRLSoSkfn5SX4UBmzXX8gn58BaEPooVKFixJCY"
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
