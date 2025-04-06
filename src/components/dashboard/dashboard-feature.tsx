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
    "26hNGXhzKuynsdMrv6rnThFhDD3fxRQNozoA7n8t5WzfdsvfCpCMs1jVmkZcDqVRhTN4aH8U38SjikfRXjTMBTqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lm2R9f1wf3qY2ZzG5tbVvJqkrtS7Xv8VfNboooieiXs8XArpFqvkqySu3XezPFjjizM3ifWDDNCpNCXM8uTK8fq",
  "key1": "3Z72adYVAQdLBWwBei3bb74DJxw2T8o5A4FHXHL5ed8PYv33saivT9MVPv45rc4E1n9aSZzudNR9QgVKHSyo5dcz",
  "key2": "5YPRMCyUq9MPwkTDx69FecuqnGJpDrtiYpjPwaUtgb15a4NvZ9eT4T6caCecF4XqhaVqKAdHy3oZaDeV3VBzZ7EU",
  "key3": "HiFLCoSrx9RbSX9kMR4P2Qcik7YCeWkfZnkCa4PgNzcUZziMjqbxgyDJZbcQWuMraFSHQFLfGXzv49xCgpqc4sY",
  "key4": "aK6N6EWtuPt4P4hLgMVSEMZNx6C4tYTRofRsrtTdgi4cNXNVM7dWQLQJJzKdT5WM1e3rij9LYKec9WKA2M7xpn2",
  "key5": "3v9MTr2t2nVpr49i8eAu59ZqLXbJH62erSvKshPpud2Wr1fhktzZfV9s4RQYXGn2S13mVc9mjPekRgoktg1Fy2fU",
  "key6": "nYfzSsC5JX5HnUVdU5Gjno5vVHKcXCZgQhN8Dh6yG7P51pZMKxEnZNcR4VKQQgq6vRX4R3kL9bCTPxErxUSdgeK",
  "key7": "37PSSBAycGkWePVBWNKBLHJx61ME6bEYWsx1eUi66drJMtUPvcBkDPvxoai7eZjWcndAJKp6LzvUTrWffFd5Ni8A",
  "key8": "3sEkyLwaBho9vnxLPV7ZsgnARBUrkguXkrviqUeMhQHa3wQjkzQL1fHA6Yz2b3Vfpy991ZcBeZma2cKwhbyE9PGx",
  "key9": "4JZgM1TMcZCaaXQxLPDLvNQiTZ8JfKKAd7LRcCWNRRBF5QwdtALX6SyXHsN5ahHwpbnuM1rHTKWdXwWf2mZyHWe8",
  "key10": "27Mjfk4oBRbUwke2G3Mzq7DvYWBejB9iiirZEtjCu7cHsQs9VWjh5GmnDbwKy4QT87rLurfFRHj1PTYV7BFFddFi",
  "key11": "2zxtcgVqw1LXCNzRN2CdT1T5qqnQu8SjzbHyYNF9v3NQkjsmT3y2ttwRff8UxGmgbiMhLiCyUqUbWoKrsR828SoM",
  "key12": "2R4uX8ig9sYpUmkK2WGHpPrLwYgFrztmwDqUfBGeDkdqWo6MWxbruFV8NuiwygBywjqeE6Mq2JdaN6GQAj9Thg6J",
  "key13": "2WDapWSYVJaiZ95tojENRD3wkA5zhDMEoxsR1eWgGBpiAmky7nKZLLMXv8Yq99YWMe1c2HtFPHHjNXspNRS5E5Mi",
  "key14": "5vHYushk1fxV3MQr3MYBF6aXrvVCEj6mvjoCSMynm5mHBzzTfvKXbJ44QNctmibuu6QM1buCHa7EZyyz4Dot2SNa",
  "key15": "4gc2mMSDh1xi92qMfrdnsuEDasnsiEyCjyCD9euRYN9L71UZ6YmAxckavvrGRvGVgEYixRbGP9C2qHgH3xDejY7e",
  "key16": "5LTxWCV3jbwLi8H1ZVRTumdQs1teYJcTaNJtKgmKuX1vPMAMySfqo6M2sC4HJJ2txxKp5nxNKALTHnykpg4aDrJB",
  "key17": "2TyvY2U7NLQmyJqNMfZSBiYpon3K8JRapvGgnbkp5RRM6M4qhDtW4EXqvg6La3PBWkSzT3VUcUZE17QgpyuER3vg",
  "key18": "9FxqkVw74yzrBCqMJSsTNvyvMZmeWEPRYmU2LC3erR1qHx58myypgocP1vHsdziWKjhtcemw6Xk5b8yKtZSbhcB",
  "key19": "43AWHvKQsa2eQpqsC7sU64nB2N5BMXTLz27FejATup4hVESRcegULdryZ9WhtrAzbBV3vcrj4waGdtrvm8HPamdY",
  "key20": "4VvmokWR2shsqKArMkm5wpXcNeMReKbYSqB2WRSk7ni2T394g6bDE4K6vAqMDK1AMSvkNmaSPDQYdWEh2Ez6RyfF",
  "key21": "2HgmonapqtPGt3M5FE3yPpwTf9uQqUKYRHy4HUu7mQHEmkoQu8RwS84tAEhqg8ybvsjStsq3tmTE4Qhh5LEPJqbw",
  "key22": "5aCakCFwxDCqHnUzYi6rGnk9T82pgGFnkxii4xJMC93yu3wL3GQTznsGXsapNQmEX8deY4hebCSuME71PCMywbXA",
  "key23": "pVB6uv3Q8MqAXFFYQ1RiKZSd3r1tPqQgCPgsQzW2B9y9GtRQw2bKh24n7YCw5KzWkZJnfmUkeHYseLrH8Dt4uMg",
  "key24": "EWDBeWGRro7qUHXrp6wbj6LdwWpgAVYrGzsz1KyqY77QhB7WNCTkYDUptY31kob3B6Vuf5wY8xFuFC5Lx8Y5LTJ",
  "key25": "5S8w1JvQeAaKE8ZsmCNvLymGB59WNPgn4KggrkAC2nDbBZyBP2aq7MXdFDN7sgUnXBocHaCgcTHY4M3QFy3EHiTk"
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
