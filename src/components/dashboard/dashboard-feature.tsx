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
    "29Q77D9xCGbFZ62p8Y5gRw9PnPjzv98NEDMDbXCCKtRdKN98vHPcbrgrBTdD6G6mByBok8GNqEgZtnC1282w5ZS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w8fvY8Mhk4YHg82ZcJ3rsc6wL2W4UJTgCj5TyzjBNG6kYZPnv6fPBa4KYiSceMsDonbmsdfcWRdv21UyBJMq6HY",
  "key1": "2wWC7xkWYE5ybajoc7Y4GHdzbVDR5PiL1iBswG1EHndj7iDkFMBXXM2EYBB7aV3AYP6PWSxGqKd9hXsC32Sra3PQ",
  "key2": "9VFDM7USR544C8RWBoGrnvAWEiTxtHNAv2wdShrqDZJMRWC4wUT8H1BW7BkCE3TH4W9BL3CQMsCDb7UMcpF1BEJ",
  "key3": "3awdot5529EWAJpWhASLLMunhjjKzypmeYmcehy7oPTs7XTu4UUQvKjk7rxsGbECPvxh1w35ucwqaUjUvdFhsETj",
  "key4": "2PDuRmS9z83yRzNkeoZredYwzHwQRyfPkQ1BiJMxK5bHxaaXaE1hJdiN5bzPPGx18HHaVVnfqTVQbW8L4GKKEDj2",
  "key5": "2CCtHAy8M9ZUttUJgnENuD6JByUNK8sBgrLktTH49endGft3acLbxJ54XwpooWh5eYH4aZxpYCG8DADh6itdb14T",
  "key6": "4Mm2ViisbtE2VVsuXpJ53H2V4eHjN6G7CH3hKZBvsbnvJSWqh2Ak9etecJjiuQFyf3eBoJppho9jvt4YMpAwKckw",
  "key7": "3AqcKUsp3wqFAPjd5Knv2GfkBKUmXQFy5oXoAvsVo3uB6XFPWUcQq4hv8RHvDAz31jLqgKuC2vNsJ5dks7NXh3ig",
  "key8": "4b93hSUV1X3uaP9UmGbWwinFZPAimt5LELgJAME4ejYQcJAu4dPn6WikzPNAXi7NM5rKjjmz9UByBJnzDnTGow9D",
  "key9": "VTX7GaiLGmPLTkFPqWHBoTgBsiyWTp6BHKrTULARGjGTkY13Le3TMzvYNncEkuEtqF4YoYzxuKA9F9i9PbFgnXq",
  "key10": "2a6wdXLjff55GQwSv3tLyiA9NqsooFfFCjZABqduFmztiVxLzGsc4aw6pw7mEQH1bgW2QGwvNsoe5Tz8Kn9Rv3tx",
  "key11": "3hzF15U4weqwrpk7z9JSsXBxGKkMKMpwx6NW4pXJBJrUAbNkTP6oUP9CyfBAVWpFK1k3fp42ctwBCYmFnWXdx7Qs",
  "key12": "4npK2bVs5QcyzoHYJndyJaX5XXjq86uZw2VfTvzEYEPKtmC3x8RAVuCiJiV6ocRKqvf81FH46CdciRmhzCt9NoKh",
  "key13": "3GjgwMGKnZqtcpkn5h4usax9uyah5vaaDSNoUtdYTw9WP2y8tTkgx65iqZ4VwvyBWwsZky9fADVCVvU3NQ2Bak6J",
  "key14": "5kfrVeXfBdfMatko2LZDhWSscKgo84KMNbZYn33RjsbbbGupFbgRZjjstek7tgdWVZDkYdY7bL7Ntmr5QmPetpJk",
  "key15": "4wM9jdxPQHtrFeRduNmhNAn3gdc1yut5VNXMmtwwdJ6UnSaW3zwdWjz7CTVy3UXsCAogf2gNnzxMj2qquWUKCAs7",
  "key16": "45DLJaZPDx4vWc8dJ6LksBpfJ3Hi8eezrnorSQzmJJ6gjSNtdGp63fNZcffYV4pExM9shvym5gKbxT934bzvZ1xS",
  "key17": "4fF3fiSu8oxiAZvKu65xqSFTm4xbWdR1ZrtLL1MUNqnr5SEsjR4fFKGk3hQzGVDyapHNV64vZx4KXeGC6XKB6BAH",
  "key18": "3RUcYttq3RJHsm7WMpf5jV7dUfw9yzzhumkqBzjuAdoeVrLwKHBBndNjECEjKxDZk68sWoYPwyks3cHxGj4mEfj1",
  "key19": "26MN9G4aYcUUgCTTBNR8F3Hh1EWsguLqtGZU9fmoT3pcowV8gioF8eerGQ4ndiCzYmdV3JtKxmBbpczjV4VX82di",
  "key20": "2G77yYUqPhSuapqSwWBD2bqKw6WrsrVF4iGxia3BjFyGrFxX5ED8Ad98cYdVyup8p6jUGMLyToQaUMqkZC9nr2Ce",
  "key21": "3gbfcLGADqzvGjPztBcsxQ91mtQ3bGUG6UbbEM5RPgbNw6B4QKsXL4Fae54HuNf7xYqVSEe54YzoameZDN8WruF8",
  "key22": "4oN4Dg3UV547mnjdWkz9FgQ3EFZvpAiH6sfVntrtd46HTL7ZeedHpfYvc9eRkq5DCZSLUj6QiTxjr5yxf7nfcudQ",
  "key23": "4zwwfzAX3Mkbeh3Pkujk4KMdLkrb8XGm1cTRrxcy8yhRMpMPFdTSTNnZJwVu4gkxsPGdVNW2Wc8e9vAhryk3b64U",
  "key24": "4WvzH5t5hYE2Rdu7gBsGqxEmGzADhCoQyb2AGACYnR14bGkNcZoUej1VQsxeJxXqjojY5vzYzTDNyNkgGUT7uTUF",
  "key25": "3dVTn3hezHT1Ao7V2fmGdxmjT6Tppke1zsmp3TSico7DJ495ubemwuKSM29sXe4BWAXNzT12w9w1RWpngur6gT4g",
  "key26": "y4Ay5Pip6BarTXJq4Zd21xg4veRUP1safVPb6SmBvQAsSJtUFNqfZKwm7R8uqQq9zyja7xR4vpkmmncVYZ3jhaB"
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
