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
    "2mx5Mu3rhxdGXw5R3YjZW4p3REdJZAvktrEUF2CucUhRiG6gqnkMS747ScBsdVFHESZupiDGWXbULkX6MJKUdaiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qxkm61jLK8vShiv4L5cGwEcxtJKBBZkWvjvCwhHSC67AiDgKBynwuhdS3GAbLusp8Xe78ggjMac4M3aBHWGx7d",
  "key1": "2xnzKdUhf1YvYD1zrUoLQGfMtXrXyFfgEWM3rGNSpJ4hMBWjjraHd9iMANUhT2GxFgHiZxVJqovsPkJ8L8ro7cmx",
  "key2": "NBGSg3UR8Y4fVHHJuL2qrDyhUsf347CLgoVhzXPQ7wt3VqDX37JQm7LvPUPDJM2zdzzTZ65aHhWzrgvFKr7orCJ",
  "key3": "4mHTC3BAU2VbwURt2HQCn4Hw6QrX31S6ayZSQ6htf5W2ujBEmDZD7iJCq48KuYpcoUdGeVeks5MBW7h6dkPjv6b",
  "key4": "3geW8mT2Z3W7oDDoF9ACjAaCDkZugsHfD41tbgberqKg5ShmSsLHnGyVXE59B3B78MzUzR5eSx6GatF6KtkSVd4S",
  "key5": "65FqbA5qrF13RkANCFxmT9qLyPxBTDSg5d9R3r9RNB5feZ3axMVd15DBzikKpzc9M7Aegytpg1uL6wFbeUhCXFsA",
  "key6": "426NiESTqjLi3FEeE5WVL8CqQAPUUeVgS2KoAdN3DUbEQQmmv9UqEdgnUQkKa5ngfKo34GikVcJEktaAmEks5Ghn",
  "key7": "3MNJpPg8ULAjMBGg2ETgojE7EHkXvARmHfEyYMi3TJ4nWFxENXN4wazaLhsDprKtg4gXWtBY4NQkZv2VctpzTdeo",
  "key8": "2ZMKYPnV45WGvVCz46n8kTVTa5NvCX7ecDa3XkqBk7szKojNxJsVX449tBUDTPKbLYpy9g7sYmNt5ZgdeSLcDNAw",
  "key9": "QDWL9XBMVTa2mXxtZN5Ai32KsdXX6JnbmWBKAnWDJX3brW3uhMbCg94DZDc1QttxMUgEbnTZYV1ocxjFDcJ4crn",
  "key10": "3da9VN52u1zCdPTjPNQBvZGZTt7cZF9mDwfg3Yonk4vVY88YNJNzqy7CqDjUcRZgDKV2gnVpYKxpHraZWFxadxkB",
  "key11": "vAZqT5YERXiYXY9haJHTXUJ6zS8yAJPzngGYU6gTuoAuBNvwQVRhu2ksArSZzzjSLaqhTUp18BcsH9f6idEcA1N",
  "key12": "2BrZ16QzqR7MZ5yDPz8LBwbaU8SY7hxRR5Wmg76UknoxKY6e6QYRX6yozGk9pMtcXfys9ud6HqTEjiAoRfVLYT2E",
  "key13": "31o6pCC4GP1hmzYVQ1YFAtZ3KPm99wxs1MLL5YFsREPkohsuNQnZkF2UEJ7MKiMQtXVtCaNF2jgbeVLvMXGtKD37",
  "key14": "JocJPty3B3dFbwNbfWVDpYZgCCKnZoJeFYX2E1Rq98eb1NtE7kBVqu1qpbPvG9z2dTuF3sixXHXbFHkeoM6nejh",
  "key15": "35qwDtpvTTskf7HatJ7fPAZKPy4rFFgWbsz39sXkKT4kMqDvdfVV7NbLYMpQKmbCNXyUX48GHTJCWJCqTL3bEMaz",
  "key16": "2vgByJyvggs4qYUdpCPjzAWk1CfevEVLTkGM9H3nXbgD5ffedB4k4MwbwVbNRjB2YyrADGcAbAChyPm1pLaYTfpT",
  "key17": "UPA23Lcfg6bDG5PUibxY18MNyitv38Uo5Y4igrP7REDfnJpngK2knWSgrvX35JFR4ivpW6MeRnt7GMqSfguKEbP",
  "key18": "27S9vn9Booi7EZ1V9gbuQkBiwYva78qqBboNPp1mDuHSp58ydfE62yxtmjfiozLxFvR6WxU1gM5T74p1TEtiUing",
  "key19": "3ks6NBJfB7piq7SD9FJLoc1tSMZE1F8YJBJVMhho2K5Ni9KiujvRyxrdd6T5R5mifYpHnHSXqJyF1b5quTLfhfS",
  "key20": "2ZQbtWfCAfCoHCkyCtSskkcdW2vqU8bXwxeMU3rKvzYWuz94HrzP7dAaqHEzcggML6kYAgDXmVgf9NGaQ1ZuEJCc",
  "key21": "2hwqRPxXKso87eissxL2VhYNDzdWd2JvHGXc2CaVBm6hWyJpmcvMR6FTmPTFoFsfaBJAW7cE8AJct9xwowKWMiWF",
  "key22": "5KpeLNujjQ7DK3NpK1PRZBJuX2bYsEap7GGL3GjN9DA8WWGhDowqSd4GhkocaP3WPQ256kdoxsUHSe4gbHVyH4FP",
  "key23": "2BmSmXzJwAg7G4TYa1M3jFqhoooSFDb8GbwTKhsHgCeLcihosHuhrJthxT8p5WGsjwwmTwTGS6WPuqVpNohfcRYt",
  "key24": "5yuS6ABNYo5FXG9GArAdaBSprDSbeRJ1TqEecXxAszq1e2XNeDEAhVzmeYMdbkq4CU5CCShwJSNkxb3UsegQHBi3",
  "key25": "5SoMZJ6GXEgDuhZ1aJbyyzwA2mxuYR24GFbtdUTeF5JiGJ8wboaQoCnNqDLyMW4QG2RzgWxncYCvsAG9qSbkdai",
  "key26": "28t1MEo7pS89TEkx6EW9jd3Y2pYuuCBd4SkYSLD94uXXHfCfGfUvr9BayEsyAaTRZ2XZgnyzbx4JBZVS9XZRrPog"
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
