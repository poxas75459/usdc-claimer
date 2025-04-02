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
    "3ZksGQsumWQSnRTKrhGmBphGdqQde1iyxktaFwULqV3yjjziDGny45wMRk18uxyFohcZHaFuXXcB2gkv8AXMshP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61UgJo2bGdDoyTzNvdFrkaX64W6BazWXazKreRu4PqECwDh5ANFuSbar6CzRRiBb8FhRMhYUByMPMAzw2mi5bZ6j",
  "key1": "44wH2DoAkrGB14ZGT9JQZLu4HfDUzudyWNMqPFkrQU4YKkVbtrHvEEFma1Svbk5YPvZ5RDDSYM7QtE2WB1gTaBaX",
  "key2": "3Ae8FydBpy72xx3tyYGKymnYgX2N3wwejU4qs9muxvHhVftAhfWshjMsPsePnTpW5B7rbP43dfcBzbDUxMH24Riu",
  "key3": "58ox6YrASczPJ5zbQdArH8iNUqHEnAEPnXLu2s4NQqVpVcVMzcgg5UT2LE4NPupUPDBYXLZLDo5rYGpw938gWoSG",
  "key4": "3rmoeyXttmqUMnzuZtZNLE4SYgZSs6N2FwHPu8x37ypWxRmwU6wBzMYqqNDqjTL4PGyiVK7YzAMNqS71DRMZH5Nz",
  "key5": "4k87vf9ZcLgUrRmyfB85jfSBiLDpndRpMeb13MU7hd2vZBbAsdhc1ZkTo4jpNeWFLLmV6McqtP6DCUsJoxdYGENj",
  "key6": "57M1ehqyeC48YJuVsaVwqxttphVkb1ch8EjCHjhEMNzYp1det4nKyMvZecD6ZRtJzhaAyi6qCb2ASbE1bjgsATAN",
  "key7": "4fqNPcB72PzPYJJWPurRFg9cS7myUHFTPrBuqaQoBf8z5gD3ANueZMNSKtasaM4UL2JnT2hiQiuRikQVzHTo9P8F",
  "key8": "2tsPRE3QNvqwNTeDBqMopqD3NEBa1oDk2L6zswjj5CSFegy6daXUDvJafz97cAoHxuUM6gA8oyiLAWNBAAJcVs5B",
  "key9": "5Hk6jJZH6gjFsrt4KGZJBV5JzumQnBmrTxX4m3uKUt8ggmHam7oCCDV9KTtWW5of3CsCFz1GQW864xE5BeL8BwQi",
  "key10": "HeXhdKAt8rZCzKDyraEz6N93TvV8UKW47b23z4Cvt8PaRvaA1VhLXP4eKtN4Wa73HuiHtdTLkBWT38ojQqEG7QL",
  "key11": "5SH9jFqiCZUBmuDHjaa4jjXpekBD2oSQgx8wbCop4FEvKx7m3SxrVVaAHVK1BDEU94RFPDwhJg4Lv4Nz54YgSSL7",
  "key12": "5XRrtBQPRRt1MhJciYR9bBAHycmGS9q1U6wk8baF88AsNQ8Xbnm5iHJfgtuyp4FcpJmkUD3SVQZ2iZW4Uti3tf4s",
  "key13": "5yNpQYKPDhzz1jp3VHSgXsnqa3e6bThU8L3Z6AD7fByn2oW2ieU3uXfpqzaVYGAkBvZscrMoKXfCRX6rcVzmQd4f",
  "key14": "4n8owWpjY72i57wvkAVPnDqa3W7MbnCfvr8VmCHdxNwt4fPGGa7UDgWwd5yGSbDVdkb3MxrQGcDwqQ7jtTady5LG",
  "key15": "4GfHZoMuyTiMQM4jvgRvpmW7zDBmTMdDDQvhMRMLYWffxurS4CobVYXxg1vu5oXeZTNM6gmymaEmADh4nPy4ceYR",
  "key16": "2koHpfK7As6LKZSNHmymx49BXPXZye13B4axHAmDb6LXFsRyHQPrVi9w6mJ6fmGBUCYf6BhjBko2xzDKJ1qACeLM",
  "key17": "2h7M8QqiAj45pgkya82oxUX3CooSpKmbHydaYQUtABQJ24q4tdnAwwojdvC38GVjd9mcjjbUsBgcWs86ULKeLVMY",
  "key18": "4H1F2KGvPWoEzjpGSBtEwKXAnoXGWjFWSAM5oLpqwgd9AMKZ8f445qNEvKqaATJ3p6b4wZgTCyZfyYXMurQEZhi6",
  "key19": "2c61R3HsrfmfbUsrqTRVFZ9Dev74spc7UX2shDcUemdVZ4wVa3qnVsjad6TNHBvdLKhNmGL3ChwyB7pPjcLBjo76",
  "key20": "2Kh4LaoRVosUFBYjjM6ngDz73Rfa8tag3e5xJJAfMTj68o1a1ssrtzAtcHXqEBSiJENyVeiEzwiwvu6p5zWiniGC",
  "key21": "4rXUVVGdxUtMfR4FL51faiAjeXG92EdVxrJdqC4gQnZozskpdDBSWZEGEoLc9WC6C29nshW9YfijSKhLDKhEhk6r",
  "key22": "4Z6M7vufZb5aH8dxZepmXd7Y2AB99c3b2y8WZHybjn5rLXyNZtob3gdpS8sTXh41KAEMgda8Ba2z1YwjHGgLuDc2",
  "key23": "32Gj92rESvEF1vtJHzjNDqK5a1ExRjVaP19j6dCApwe1twN7MQHDEfz2KTCRD8XjY6s3Z17F2ArKvDEVQWvLw7iV",
  "key24": "ZHxGVGAXBAvNQb91n8FBEUiksPpC7Rdq5ym4E7SjBmjwUY1JKB1vj6QSN8ZKUqAgKWPQysY6K4dGxYwWjDzkg8D",
  "key25": "3zQLtVW9L8gXfPca7FGUkMDyNoWRGQ9VDBv21gWeDRs7Vc1NopMxMoHJDLtHKu6deSFxSjTHkZSTsmJCmojKWPHs",
  "key26": "oECzDSoad9g6FuF4Wjm31ZR4AMTEEVTnDzbLh1ohjkWewyfqe3s9h8MXnDbntPwUoz8B3VW1ZVUrNY18a78BKTX",
  "key27": "2nNtM2HiDDLdigSQdGdqwzpzucqdmFQm7EENowo5MP5D3voa9kmmwQBfJs7dRLiCidyojWHq7QMPVukWhXkB6TgN"
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
