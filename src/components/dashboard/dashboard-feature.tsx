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
    "4cWj1DMrCH3WNU833SPGim8QP6Mr3ca1b1f4e3B9QdLm34c783bff4qsd3Cd12q4uEPKybK2u67DdDTa3ewgFesc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9XyCFBisMAMnvyHgFLNujeTrMqypTmbc4R9dWEVusrWAFQMVPKZuefzqJ9FiXXn19DTp8eTcoTL8suc7fgYckV",
  "key1": "2vfWjBFReYhUswhdKSoDT52JFQkvfUo5TejLKzPCgMLmyazQvZS1myUw7bqtsHJ13dGEH7fkBwAgdnWQzaKsX766",
  "key2": "c4cGHQGDRrfCy5ZsqxN3jWyW2xTXoFyJHd73YcPRf2rrScHNdKpFU8WCwzfPuJkz9EUYig38oSYrG2XYuRasSpM",
  "key3": "2gZdHeLW8xNP8pBdaFWgR2djPRedyefiGxK5BtQ1TEgDNXx6ACZ3ttYdwT195zrJxYzjVG7FiyQpCLsYxgNAcXEh",
  "key4": "5S6RBb9hrtXHfsozyFQB5VMGrVMktRwAteLWTrFV9NxRC3zahd8L1vCERxzhkcPfssKSJxiMz1pY7sbFJ3QrHmYX",
  "key5": "3L3cGiAXyirafxBP43ZW26YuKFoL2LeFWZjsNTDgFNyEtEcvrQRARebecHMUrSBU8o7EyegzzramzewyJgndrMTH",
  "key6": "2YYrSiiec9szodcoX2tThqS9ucdBmpzLpXUY73rxUnFK7xBr34LA7FvGoFZJmDiPsBTaTX8NHsw7MtiQgfutsMAk",
  "key7": "SyN3AUQSF6E1d7UMY4s3YofcwvpHRpSZVEvKTizMBRjmMMjESaGJ8RdgBk92R2tTmeWtPnk4c549hRHG1fopNEz",
  "key8": "2KEQ7oY5BfaA4H2WyYA2iHAbLzvTYoM2DvvYguDr7w5SncY4iqfWCWHphX4YHwEcihPoBX4ag8bBopZnrwTUpetu",
  "key9": "3UEV6FbcpP9dWwF7ZUTyeN18Au11RAhNmMEwe3cahGATKTSWjnZum4uvsAcrSgmb9HaB4SL8JV7R8gyCWbr9v73w",
  "key10": "2zxszLVPgAozU5JP9cq26V8mHYPRs7zuXyxpfXWqkUcauQaU9YvMJeawLGyYQhtmPZ79GdZj2RT4Y7RVUghVVaws",
  "key11": "WbnfkC6qkVHeEb2eMDznYBzRqoqPmr8FWBCHiyyfnPexmubN9wNFSqBnroZnGUFYa9MF6DSczuuuWmbq4GtCJHa",
  "key12": "rMr2qpQkMZU1aHcSaDELpaYyfLvDgRegjebuHXJ8PnZqrUDMf17o8icyeYe83KSyEZwRUiVGeZVEodRXhFzJRMb",
  "key13": "3EhL5khvuPfWQaEFHMk6wCXoQqXVQcg2gtCGSZLZrtG66D3YHong335Rdvz5FE9xk42FzuSeoRvCW4NprKE1fDqG",
  "key14": "5J5Z22HxxskX7xVEpwbpEvqMUexabQVQMvnGHa2jVK9skYtKkE1T6o7dZsLtA1GRgX9mPuEkNbUQhHPahoPqKnbD",
  "key15": "ccx1A8HrBbUrpmrXG8hANqp1NisRwPYTaN1doGjnC1TZrj2rzTs3G6DM5Zb8Aqy7zR8kibmHb7W2XdGRE6FnWco",
  "key16": "2S5mXaL8pbW6oHt4h4R9XTZEAwpUvwKN4FeFWTBYMSF7Xyi2MZPq51pCvq4tgGRZEwbVz3QPjGXFxGg9qwSJqiTK",
  "key17": "3WU4JYj1qSNKayVnFcQ6dM1XKSxfLVaT819qjk8CmhYfGW3KmrtM2QhuZnj9pHSLf54Xn8RCL7GNKkMTtZmd5phb",
  "key18": "4tt69t8M7nWRq9V6HyGVZSUpqPCYhE3YYccaoT6WHoEEBgeaWLRgTfF9yWGXLQ3q2FDyZYVmnHqKF8yy4PKpmccx",
  "key19": "5kJkTR9F76KsMNg6LRdJR7KiTnLUe7wGFpaLaCgMCMY9JDr9pbuYugpGougoKBeVA4CaJGMXaoDKG1Q6Xw582cHr",
  "key20": "4Lpmr2ojLq8s6gdTQtsFfnoWSBRAv9P5kyocxsCYdEkmZhSud4Ny32cKKKS2Eq7w58ue8V7dTo2LJGA8c4aSyYfT",
  "key21": "5XGkob72yw1GmQDmjbd5JFaj8QmHyGtDMtfq5vTeKnrsHreYTH4bc8PCfAzGx8x79CPju3MZSGE85Y1qjzEX54dd",
  "key22": "3ADZoKdb5dzE63RrCEgRQhGobsQBBdDP1zWRzQqG5qyRAb3gXLg3jjSzhktV9kK6YwgWN1FhKm1XUNB89ws9h3WM",
  "key23": "4PhXYFKEKYBDKQqtGpdncD3wSXWLv9rYFva6heYa74MuXMDAqzE3mQ1QNQysrdpjicZeVdxeye765DsMQZAJme1X",
  "key24": "4epNwvJgyGggWeYshPLRVPmzDS5fJTxZkjry8ZsyJSFxDPFt1vG3Jbt4nW32nfwtx51ngv7gS38QY3P7XQA8bGCn",
  "key25": "4jxEuobsVS9uo6QWtDCpC24Ke7AGfSbo5MK2i4oS6X54Rqpu9ouBucKBw5D8LdZenpohvHJXbYXBJjEcTL42zvU2"
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
