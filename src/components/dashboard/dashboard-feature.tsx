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
    "4HXPnBjeDmJF7AWticj46ostVDEvpTMZDpLY7jc9FPR1VmNWbF6butmidLwvApCQn433VTRKd7Ykd5tbBzf9rMiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGSfHnap5unkS8NAjKZ3B6rTjiXLN2nm8RZDshXJYXVdFdb5aipw1ntQGWTHvc8F1mMUTHSXHrwmFk3BmbwQyka",
  "key1": "4d7YBGCgMnW3HWYdeFZGc9kwK6cnYeXyyUvXA1gKagbhEVbH7Fs2EXA4i4o6gNj8sGCi7sMm7YRNbwdBuvxBWrqp",
  "key2": "44EqHMg8tngg2awYe3GZRX5Kmn1Amxx58tdHWmy9DpbVtw1RK3ctn3RLRDbf9c4TvYDAYYd4D3spPYaujxG8F6T3",
  "key3": "4TiEs9WEDsSFPj4Ao8NcZ7CaG2fR5hRtQvUss6XDRkeGC8pahNztrs2rDm8eAYWVLAb4jK4rRphjUddu5azidDdq",
  "key4": "5scn5V2kKJgqqYE4tSoZu5sAXFAQ6tPxef8rktbf4tAH7zqRbiXiEXnNLJGj2KK7JkxNuDm6nouwkYvBEHSEN5Ku",
  "key5": "MRbU9G2nc3R2RKovV8Vispn6yFCpMTwnPfkosLHhA3riJDeY4fKK7ebYU7HUD3MTAqmo9efmGrTc3UAaGeDY5xf",
  "key6": "5yDfVASsNAfrcF7G248iheS7bTjVNCviPJHdJp642FpUD4eHRDx3r9YNitHUEsJi5uwq9Y3v9Ghd21XzqCDwD2aJ",
  "key7": "5aLvK8CVs8AK7BWobmMy7Uw7gYB2sndemi4ZRmNfMhrcTh68ApFs5Mh7VR6J5Q3WfaZYJPiRHxPzdHRXC93UuYeU",
  "key8": "RQRTqUBtNMm8L3aeuN5K23qmNVp9cVtG1YmwFLpaTbs7aYkPPQumJBHY9xs7m3KV3yvmgJPQSAs1ppsWRMg7aG4",
  "key9": "5nX5bj3gFxENyBX6kS2MZGefG1rAKTECBzS6yCx5VryrrECUVRDcPNG68Tp9SQxmo7u9LCP4Hpjgbht6yeNiVJbE",
  "key10": "2jjknRYHDz5WzMNJfqmWvxBEuSoXaVbvj6sLms5jiQQgW6X29TguMamgtGuPzb88mFu51qFPsawUaG1uvHYVLNKH",
  "key11": "3XGqTTZZZFoy57K8A9ssm4kbd3dacrVF8NPXjKmjHx9LPMY6fcWyGaXANQHcrAEvaHXkZWtCiauN82MFELeHfNvR",
  "key12": "LWCSJDGcRsEFDwz6SPm6ZsRg2k5tJ8iHta4R2V7zfgHB2kUYVxU3w4EX3AmFAWzPCeWoNRYLhX49N79DBZpmCY5",
  "key13": "BBRbyCSudyBwggK6j7RjRe7WqgezRSAQ19FqC3MvQdPynjNvM497GJQmhHTJFt6kieYWytY6p3ucJ6DeW8drfnF",
  "key14": "32DDYMhizu4XKzr1Eu6jqkezpxHYsgWi58AWMBirLARaqY4fZiZpbyVEqWuNnZzKKdGaeavXZqUwJeNPgyhvjuGB",
  "key15": "2saCSKw2DgJG4jXM5dbmocixyNueuVNNdLLNN1k3Eqjua4C4coDWZ4i4zY1yEbfct7DXq44AcCWhCY6dRnxsH3xA",
  "key16": "2WWc7LSqBWGiqRPKtDoL4dyG5jr8D9AZwLkyrb8RomAApzC5fvt1kfNx68mYciVLC7164CReTcEuESCxSx19e1B4",
  "key17": "yetjeiKShfg5wLsvTzxa6K94uZ3DyN6JPvit77rvhB89yEnpRwtDr2pef1wNrUiKysEzW25eTJzT95Pf7EC2TJg",
  "key18": "4Te1tV4eDTNEX7k3qNHtrnzerbcAB2LAjCwPVzgbaaqXU4CsPpsMP9tAYtm2dN6bk8nvnrQhpC9o9PvTA2NW7hn7",
  "key19": "2WPKvszLZX1vrh1UdZTqtBWkxbY66R6AmBGmFkq776fG6T7vkCcJDdTe5pSgXuSbVaajAHSgDv3PeV9bAsx8XzGT",
  "key20": "qNLMFJLDymXKGQ8uaGijgd8rzcjRc8fDZi5qdAEag5NxeQShqSm9uUBSPHjXWaqzCF6KgkRwL4rcYMxcmWWcqKS",
  "key21": "5zFwudn5DpkNQrELLBCwUo5Ve74fMLmoWtWBqodFJquTgj5XPJScrFV81KvVzJeQoSUAjBGRRyNbXy8o7Prtt392",
  "key22": "3xpxnS4way7RvjSxndg4s9rGVNKzDUrHr92XyU7gLDBmSd3EtMVTYBevMZsqQkfZGSSbSamhi12vNwncNCd8mWnb",
  "key23": "kQrxG5NC3qAG51KMtydugfksdsUB9rzgHjxMEeffTAQtaUWAP8JTjoov6Q82XeGQ2gUmG8vYS1g45Pe49Jfe5SS",
  "key24": "2UvxijiuwKEmCuBzicF6LxP9RdAQLuLWWrgP9hQEAXWJysFznb8Wz1zPvdkzr7ajomLtAMi9VSCckJp6fREd612T",
  "key25": "21VkZi3o5m6Qb6VEbCGaJGBvf1Nydy1RU57WCWL53ybv6n7Spudxt6s51B3kxZetynCtUwtywAkMJiXgqenaRGtH",
  "key26": "JLmFQLYaUq3CiXvZzQPZzHFqtQjNwSYvvaYGJMQpHhEuUfeUxuM5HT9nKK3NRPAyZ7X395RDzcGHFLN9rgiAKcU",
  "key27": "63jmdunJamCCHWgfYrbrV1HWfjyqX45UkHqsrHiAWgWXzoiWCCdUmKbUCK2HVPCsPnn3pPxhXUZRdffNoM8myiMc",
  "key28": "3SpTy79CQ3pjifhkYcLdFijTUfjnRGK6DLP4pkwBfZVx3dqjTqbtu2aUc8qDimrKmtoThHZnGTQvp3Nic8sdj72B",
  "key29": "r8oTKEQ9qkgK4gBsRkZgfB9xrAPtqxFMiEKL1PF5Ncur5vjFYYZD7pjkJ5H14FrJJMYN7LrHNDE3Hdx3Htijz2q",
  "key30": "49bf4PddHMqNzCUMoe8gpZieKqC5Mbuv95CgQ7osBEzwQSJj7KfhAbYv5gtwMSXZ6aBg2yapLtJM5EdN3pDKRia1",
  "key31": "3ubng6Fp3G4EeSWjxbEfGVCP2k7nvWEhqY9JS5bMVjhHTEeFjDWyZMiPEVQSBM71fzBKQVcEjvCeDXVKhqdrrcEo",
  "key32": "4GdZ2kefimBDNf5UW63hoRT3RQo4VT7dPr8S11GkXvuBBWueLwN8QJb3HarD7nFsd6F5TTtmwS6ci3hvcAoongnr",
  "key33": "DrGzKm5NYEYp1VkYLDDN1UFxohTcoLkp14q7kibQFUeDEpCKYTxBwcp9NiYZAr7J2oNo7G98bL5YsGnzT1UYR9t",
  "key34": "5LvkY7UDnXz9i1iia551YuMZ49rrSd4ZXDhBJyBK3H9EF7mrPF9KuFPZtQcwtwBX51TxA5fJtF3QvuqNK4UKMLKr"
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
