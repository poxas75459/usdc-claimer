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
    "25pqPD2nkDMGstk987NG9UbERuEsordqSy1NQRf6WLWSjYE522MB6FdvvYfz6TKCivqQtn54fPCJECWD5kg6V53M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqQbE7pAJwbB5sAdqUmtEeuGjckTF7wVBnnFVwfsW66AzpBaUETdfXX2va6j7KW9hnQm4L8zNmimT5okHgcvbo4",
  "key1": "63oGBkTHL3o9VgHuxMYwN7AN9WfdJLWVT5xQRTUBLgzRGwjKezAbTHyuYkoQYyBe5JmsxkUJR88fPNBbhYckRjGc",
  "key2": "59sNDEwZMctrU26vo3CBbhkKT6Tbms3btTudcy6QBZ9RzaLhfeDRmWRxpXnZH3dFLDcgNrK5d8AaEQad4F2ejfKn",
  "key3": "53gdr8JerUm9nfExvKZkStDMHeWevXcauQjszUdXVxsEYV6i8PndzVshtg2RCnuYryABn1pDBit2SdbA41PTkQRi",
  "key4": "23DohsTyoL7uuKvspfxkYMPuLSgLiaYkm9GdHzXmCG7ajqKCvpAkfeW1irMyQKC3GQAYZWxAHGyD9QmTBeGHjDF6",
  "key5": "2XdzerVq6GqTgCxac1bVJ1NC4gzZxQg4P5WfE3NDdbbSt8phWVsYyMtSHhYWqFoaoKVjLeDP2c1wfbCuzybkwRLP",
  "key6": "4H8TmpcN7QVeaeLJJy7Kbn5wa1MFjezAiDDNyP7uTM8ruQyCD5eGjHiGbDAkADpCUH1GC7svd6mJJmUwFodAdSUz",
  "key7": "3Qtv83qQCAjkm6RWd2nm2pmwxRfKqH9gsgVsqCXKu2eUvX7yNhnkmHt8gydUhkVdC6shidJVzwDN8L44ijQdWY9v",
  "key8": "4THm96afrHm3nFkywB52Qu3A2JNqqs1eedT6NKeHV9JZqGZWhfk5pfvsWiVwPyLkeyjxhenZBjp1k3BY3Hvyd8Ws",
  "key9": "3cu6DeQ5Xse2UW86gyufUhSQtfzF7A6hCv95vmiyv3muq5mtMPyDDKaohQ32QoE28xFKjJF7qSL6ohcyBe3cVnTS",
  "key10": "TKG71JMJiTPrSuwhWMfpG5R6EbGpCNE2DNa2NjXN17AE9s48zriCVjZsYZMT6kua9WHkxmuLKKXgHCFPjoQHUye",
  "key11": "54gXLPxzfuSraAjtMLcS4jmrqQ8eVPifDrEzfLG7FiWrqp73ELUek1z288gdJzb4qManZiWRwGX9i9HXJPB2Usgn",
  "key12": "5evmP6crx5NdhaRGN45JmugC1jD3hgBEq37tkW1T6SNgfSzXgJxvoytdsG2Nmis4vTchMJxkCpbJ4N8ZDyKMAywu",
  "key13": "Hv9TPiEXSro8USHo6aJr4ZCjUSiBkGHmuEYa3VidzgDBkof4KusLJ44yRVH6sNciitEEWYbD6pgryroeJHmUWcW",
  "key14": "yEe5pVZaWtAySVaAJZHYtxcEEpn3aary8vRJ4j6BgMGTYzh3EHxWhstdK6mvs7yZf7H1yZxhgSPHiMStzYNdK7p",
  "key15": "5ouDUdXPfGHzytArvSCvgCU7KhCusopdasB1716BaF8T4i4hcD49ub6xUX3zUoL1EaxAqVeJzRmX5Y5gj4TPvxBe",
  "key16": "5ZdcH1G6KcRhU6K8DS3gSTNHQvS7dd4sYrxtamaeCSX2k6wQuLSrupqXcgZQsszuvSp7KWjnjsFycKLMtKLHRN6k",
  "key17": "4Spygkbt3JFsfXLJRaTrCsWgeqj6TMvMadTJ4iFm7ziew2HeqsTDCEuLTPRcrfC3uFugBuYtvR1N3JRvaYBHMJSk",
  "key18": "zXFXDysoKtpPTgJR43Tw69siWGWcKutKj43znzEg4ogMVrse1Sa7vXTKT2TsNwyJ5CbWBrWodESCxvzrSe59n4U",
  "key19": "2c61RknZ6gpQ2AzEkDWqFnzrbcCSNcMBhnDEngJiMZA9iRjbkUSjgX7QysLzR9wEqdVp96JTuirLo1p2fuqZBpcY",
  "key20": "j4d3HDBaPYrzoHa6V38W5HgDsfMJKbpN9tocvWx51hZW4oig3YHa69uzy3sckKVXjN98BB6Qv1JAEnZSefZMuss",
  "key21": "3hWT5omyV9Fx4dmiVfSADxENhYVHaqKr8J2cqPEQUhgHtN6oaRHqzbumBkyZo5SsLerxNv9YRGbBZa8UjPuD9AoF",
  "key22": "5jCZayB7sd6LRPd73Vx5vbSqXzq5otezhtzhRc7WutGbeNV4hxz3p3aQMhkRgkE7TBeMaE4BKUhV2ECaT1D9ZmhX",
  "key23": "3A2jbdV595ATaVFdU4bvMh3p4rfyvYWjMR1A1GkaV2uJngNdNnjeBDfrWCkwo5hPhxvCY3p4V4XhPT7evwJauGcT",
  "key24": "3UfKGziQArxuysEfDposvz8cGuFxNek25mAf4MTdPntUKn7zWJMVkmMPx4PqJLib2m94pmQ3zWpmhJ4k7TNF5iyE",
  "key25": "4AyntYszXJidr2B9rb61zT2NXxCpQPJsPgughJjcRzmTeReJgVi1RbAArg6pmPgr6AFCUrLUczZi9Tk8xvFEKufQ",
  "key26": "5FuWuYuuXpMkMuQh3V1CpCREJNEPU1yuL7wy83LZsk664VWZCDFy4McDwm96j6FJDCe71MR5qGrvSzRL9jtgEb3C",
  "key27": "4EzqHExyNHW6hdj95yGmRpunV7K3ZoxhSp7WXKRvkz8UfmzQDdzKPdr9n2GajQ1e8FyzpWJWqSpKXDBFrzgAaswW",
  "key28": "3GRynnKhHDe3gRdUjwxMTgnJgW5H1HdqJioMUa3hxCj83rJefTC85bkUZa5QwkEYjzu7HE6yZVixgBwTT5HU5FNi"
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
