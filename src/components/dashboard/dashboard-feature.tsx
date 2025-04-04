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
    "4WkFBVmPmy7eB9dmZynL8U8Vh5TBo3KnTT8NQC4A7yqueuoXW4fuA2JnwePdEJ3Fj21BpLGESNUFbRPpbh3VKc4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zQxMk6yhmzVJaxgPfBo1H2xd2iFWTK2CRoNTeyXDiPJZ3rpSkuMi63ZrbhUfwhTfVGpGowGQRm9zFLxy1uwuPS",
  "key1": "4DMUqz8ymSZrE212SLNouyYzTZgcWSua5w3AkKiohqNcnorMhTVRwPfSRcCLgE9cN4przxdGtKHEezbZky88uDCt",
  "key2": "5e4zGmQywayzBRi7w6g1QTPXpo8AXdog8osYixKUyo7gYLvjWvuXQrMPAtZyNCpZECLDmVPUJFH1cGUBR8jjHh7Q",
  "key3": "64BPGcw3xe8SvrkGrGXThYXzmW5vD44zMQpJVk4MkG5HC7FvAf5Z4n56uLFhjyBEPdLqx6sgTHH48xBnxNxqtbhM",
  "key4": "r43NJdgPCxNqBzaQeBj897aEPvZbSwRTwmH14PqEfaWJtJb9g2gnHBLfyrYrEzXJ5FNoss4XJ6uSCZPKePPEBTj",
  "key5": "3Lf8NNU6Z69qw7ptTHAM1HbipNA4voMG1sHhc5nFcKmjJ37hE93GMh8eoFsaqCDRZXh2FDRMaSDYpKR5WEj6on87",
  "key6": "4Timv9m4ELkMpN5jbAo8dGDrp9YeoxHR5sbfGbvzqwpkDmQL7wcHRyh5sk5CcizBsfgv8cRWUaW6cG9oShbVY36V",
  "key7": "2cNf8he3rGkvVg2KBcaX58L4gKHJvSRxGN6XcXBGMuXxfdjeVBnaeinerL5yedV38sX3xpLAYvKathZUYJi1Sv1f",
  "key8": "2mykiAi6br85f177ueXMv9Tx8uz5Nq83FDphvZLe9LqPNfGYoJA5gkb1S5oLLZnSpkEmM2YgSxiBX9gRWCDBcukG",
  "key9": "1wAvB2rm3rzbqL6mqs2e86JXokp74mKnsdLrzYEmVRTthvv9WEtRSRxSk1nZnsKX6rxmAs1gjSoHCkRxpKBMZnK",
  "key10": "49Yy5cMZjxH5bUVssJiL9C4AQWQVpandpjvFqeai67gDoy7yKHVDDJAKqt27xrJZgSsn9DVHNA7chG4sp2Te27Sa",
  "key11": "3AjEuVryd6uEc5viisGjtgqW6WkCkpbNcxLBjQuPvTD9hcWSgCMbNuUs4aRHbY5CcHhosLbgiwNC8WqqD43JVgBV",
  "key12": "fNS21j2Z3oosxMWAW12EU7kCEddGjGtQ1ckJ6qRc6i6TLpS54TuFFGVyfH3ffS7XV8f7wFgaD6rQ9vJJV3S1Mig",
  "key13": "24fVXvPZDpivgj44NuxhS4Zpa1F66HB8em7o6eqg6kfNVXFvmLfoMbsYjJZ8Wm88C5Qky4fcJpm7rtMLJJHTSKTB",
  "key14": "3KtYiZ11MTvaYr6RPYY5nFR49YZwyp6w77egdAw9uybMc7dReLxNVCk2QGbvC9Hm2w6ZiJPsnWZy83nWrysdhJZZ",
  "key15": "4FZGgXEBj7zMR53kQXqgeRB5P6b2LYVFEAQb7P6HuC9vkcSJJPh1taDk2f96qc1jm39FnQ8b9HRV8PmdpX3aGo5E",
  "key16": "2qhc4gJy1WDGwqMM7YRus2S9NXeHjwHkRGiRYFwmnhjNKhudxBdJCXNfyk98MUdZp7NkEcgE5fjX27wUfLGHxyF4",
  "key17": "RQ2cGmi7E4Tdf7ZpPjnvYjZPrL6M9j6oj4qJ3T2J5RSMFyhtr2jwhLKY2bcVBgXs9o1WkqpyQ9PFRxZ5wS5rLWn",
  "key18": "rD9pGJVUNMSVq73eDJqS7wweub7tnAmVFFwp9ZqwLQF3gXgpfXyFY2aK84nGFDJQ1GHZVhFuxXkJG1ssWzT9xZ7",
  "key19": "4gu6vaUAjJKy3ycikWhpbyvwM7t6VrnZiUFWZyNKUSz57pnT2APBwkEhTfTbr35Zxi78gnYr4hLzVtftEkQWpVi6",
  "key20": "59qj5qHLApCb7YAHkGp7Eg7WNHjvvbiJ1MQyXwQAgJYrXPD9sHdTC5zp3vEgzM33neYaEU9NiT9NjBjnSM8ehqNQ",
  "key21": "MmHirKTH7rupvo5BJFdbfLNwUGrW5d4iapE7zdfba8bTNJ7QTxVfU15yQFtP2TzhSqCKmPYzTNLUfTu2oVTk2VT",
  "key22": "RVjJjSsjGch2PpK4Zmn7Ks1tyCVDLXc9b34ZGxvg3Nyjqo7xXiE4aLxtohb5TG1MQ2PsMVtopdrgGcXV9JAP5Aw",
  "key23": "2GTU9F58GboBrMCNrH6YycYn3GSJPfYKfTnLBrS5xBRDnCfWHB8CwpQ7P7YmDMd51NRV6ZhcnyJ8x76fdW63Mrut",
  "key24": "5tAiDqd1SvpNpg2UBrriUm3QYTyNrDhMcpx5mxPQjWSGnwFnW8WyJeeZGzpNJgKu2H8T52wsXtpaU97zk71mvPMk",
  "key25": "2ZUwYerxz8HvjoZ15XDT9KHG62vgKzZRmg7RF8C81eBWi7tWmL3j4zaL93v7AUeV5iSRU83r3TdBiVQQeVNmKLve",
  "key26": "3Rsc1je8n6eUbvTXCjLNGwsDwm9889yZsTxxKGrE3SsNPVckLh918dzXV5zEWtSXzn3WbMqRWUWC3ZkSZDrF4s4d",
  "key27": "3oXYdGUER73a3R4UCjxhqwT7tEMJLoRLQgTnWtJTuiUJ3sj6HzKRsX9Nt4Nq1TZFhLBHbH1nxzn7C5qyCa7baroU",
  "key28": "3soz5BdEYh7k5QppXqy7JcPxQnAs8g5DKSpcsx2BscP998dHbNNwiwmUoJcugrYHM8d1rpGEaCMpjUrHaqWGs2Xg",
  "key29": "UQ6BTHM8nt5JSqcFxnb3gKjLe5ynuE4JFD7DUC2XtJB3SeF7b2VxzpHqYzjfmBg9UYcoxXvtHij9cMFbxxqx8UQ",
  "key30": "3rTo6KbNNJ5FRxW3Nz8iv29dJ4ZcY9kX9GQfXLEgT4iKPuerkSpxVXGxZCfAppe48DjLMr2miDcqcVHD25RKKn5u",
  "key31": "sradsR8Js2Y6Z2wvXqGbxzSmRRbYXUnCEK4JnkdpyzRfs6zq58g834w8XUSJwEtEYF6xw3KYmbLrTXh8hyV7sRi",
  "key32": "2dmACRHzuKoG947hCJPNfCFepUR1Mo4eUpBvHKRtEjgjGG2KQThBu9bMhJTGzasv1EvQ2gPYYTLk1hpARqDDBtNZ"
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
