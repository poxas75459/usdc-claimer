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
    "5KgF6mM6UqbTqTCtwsej9gEtExAbWsP2CYqQWUifUGd989X6ip7eB981qMgHz6zHevcKb3DXxHmg8meTujdPBK62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464Bt44Ajom26Cb1b8m6yJiktqNbXioSWPV1p9ptZFtrHL4Sumt9AWzauqYjDNJ5CLgBt2Z8LXQdYPhtcYs124B2",
  "key1": "2WBwizAnH7TdvVVJVNXg9ZM47KaUS6GdLM2DbwoDfhQzbcAmTL4j86FJvxhyhksHbwW3gHxiH3KeNvDr4ybHJSmp",
  "key2": "4h28Bb7dfqNKiYXoqKydwNBT6217fwbvm5D7TfnCZhK8VRXDqhPd6kmWipQ8SEsHL7D9MSUUKTQRwpp3TYqKg2fi",
  "key3": "3rKFRaeJnbcoBhDThjk5ALiuagUeNknDUSZT67bLWFi44EvACvWi9byct1MPJ57CwcV3FJBCfAb4z6BYnksQHJ8D",
  "key4": "KMaMapB6J3vKMpdeDG97eZkKq1ZYik2WcVQhGGNER3NGn4uC1yygQkCi3ky3Rvsv2YPsxE9GtaNZb6bR4kVLWr5",
  "key5": "2PqTkTn2ZXBSZP4ga3hCayh2MhZD21fXbWuLTDsbUV47a8JMsrZh7NLjTGsEGxGau8SyqLTKK1WPRp8PgeRDLVSZ",
  "key6": "3UY2kWTkEG4VZu9qph2VhC94sr7F6AAzUSdMngw9cgLxGFQLJLSinwY6m1YRAHydWtuaof7wnoh6sjtYLHqaZxZ",
  "key7": "3QQxRjwEwk8cANRcwkUKTyeAp3muiWSvzppBjDQP3rSrfTSWkvHecqh9XRGJU2iwtMQqtqNeLcnuthv2WSw3kwsQ",
  "key8": "2a9Yqbuv1dxYQkryM6ZqYdV9uV7CPEw48PYibRULcXFFGqnjYUV4bua7vnPr6SUztvLoM94NJzM7hkewDWwoUWYz",
  "key9": "2ptg1mZGfqangMsZETpeiSAzzi1q5SgQfm5GRTJDj8q7CVCZaKHsP1jZSnbqEM4jFecZuyzTbyxSsZgTd9N9qHzk",
  "key10": "5BGcsfMuHqH6pRvKWykFAMnhd9LMXBUFWHZTLoqYQWC67umK1jvtbDXUw7jeF3y4gXywWRiU8Qbph2KKYeWEmVpM",
  "key11": "2gBqTQxS3QFcCc3prGHS1cy6cqczoXtj1UJKajJikC4hvJcskf2d5cyCTkoHTRthsuMqXfNDYD1bJQ5wLa6tvHVQ",
  "key12": "5NSTgPqppwVbu8KB9utd9qVArbeyakWJBnhxNn3wYhA57FZeEmpGazbUhsjosEa3bAKz3LnKpkWyUeN2Q7RKYp3q",
  "key13": "3A6oSao3GvEEtrvYnct8ymY5KMd1Jh3a82HLKzAT42oAg11FzR7YjcMFH9EtWh7pjcPwwiGFRbZAHMJdV7Y4vaUA",
  "key14": "44azHkNp1k43b6wfyKhdn3vKXNrRnc1yigMBrQMuQUXiyySe91w5aLVkWSek4PHZ7J5KsqWqfhgrq6ts6yT851u6",
  "key15": "3gAa5umK8EE8tQBXfaVFk6DWrKuqbdLDQBTeMyMvx6jggEgBJt9SAmagGLVrszoH7M6scCZYHGj7qhFt49tT425S",
  "key16": "58BPrPEH4cVMi5qzgzsSMZtDGexEqN3QgB8tKBC2V24bw6ouxQUzMAfyWhpbki7kAdf9dAdV1AsboaePfgF5sV9e",
  "key17": "5XAGrYmoapxoMpngHtva4DTc9pRg8uRGwkqCYhCGeomXDwSqkHQRLQ28tQXRXUuUvBPvNJ471Y14ssBPYVaQrQaG",
  "key18": "3LtWAqZSwQ8Kt1o5QQNaUbWisaDu7K3hVKJUx2nBMnYG7Z7W3cCq1hm7UULMmv1dtsCz4CEEhu1H4iHvkWPybFUi",
  "key19": "3aZCzkyAqnCCzzrfLByT6vC6dvXj7MNd3xiFLofuz23vxW53iqXPwCZSzJiUNdZdf69YDsUttD2WF1gdsG55gyjF",
  "key20": "5p2TYNmwhqTv38v4gKuRX9tq4XvBqtwBXM3D2un9KK6yHcmALJHPEiCnuUa5EXkDQQH6MmxGrZBmj87xi2tdTrZE",
  "key21": "4taW2pvNUYmumJ4mhxm7uizoDzZNYgo1JuhmfVaQV3kVGwPjCeD2PGCX21WjzYx1ifk8wFueTAxiRtYJHqHGEpCp",
  "key22": "49a5WHhR9gJ9xfHT2TRDp4SjPzPzn4EyqAuB6CCYj6zmz9tA1PnMHLikeSGynzZknpiew3cZvyjBdiSUwc3NKbA7",
  "key23": "2ovHjTRCKWwQ7oELvaez3tAyWZrDVT61jL5ayCLfnVdWCgKAWqhpgVSBK35ijeaDhTisYantYi7nndiUjJKrX7jM",
  "key24": "328mDyS1Gxxo8HRrVbHXZuHFtrsu4cRno3iHH4EXybawYRLULzM4sWGzDB2zwpxk88UQfSVVdqozYVnCR3XvxFFC",
  "key25": "3QiQcSxK2D6qXBg4SNHYE6c57xK13GBsZ3K2B4StifKxTt8g4iXTkoMjYfUgNxpSH8zBcjKd1xGCSfGb2LP2Bki4",
  "key26": "33CyA8ofZPVngK8BBSZzhF1VwN897iKSNgQz8MgEebf6CjbZBXGoYdUidm6pXjzXijiXENq6WkLzcyeq516o9NAP",
  "key27": "3vC4545Kr54V8MJJo3Xggzyzjd5aVcxyXeAFj2RsCqoBMNtJjAxMQUnLkkPgZshCDTExT2pmVfJeXfim8B2EWZJM",
  "key28": "yNZcghuebxPbVFUnyLi8Cgfc8qRGXTEZjmtPm3pHCZeckLWBnTBWhxb28mTKQWGpm9c5vtWwcxFSAnCsffMDywC",
  "key29": "4hYbMCqztUGnxtq51jShvsLa8MzBtH55C3kjuq9nD4TXj4rJ6zzouzvg2J1ycLepMjPBztfuCnWZE4QuV8z9Z4KT",
  "key30": "sR3KMsHU6ZQpFfPxLnwhg5PKUigt68skHg9MkUY6cSaNHKD8qHaJJxMiLqCPSwmKd9XmaP4awn4TcCb715jPzNo",
  "key31": "63MB23mXnXda9u9FJpi7qeaVeaASRL1KQ8Lj3Y9ttVBBone4nZeTrPwq7CE4NL66dXD4aw3Bb6dJLN9poiRtvyjL",
  "key32": "24ASXYCqDYRztGFrdzxn35qMQTzWnMCKy7svZhdFpR5SzuuzCSujdCvPVEMko1n8o734QZcudneTNzkjdvY9Nk8P",
  "key33": "5P9n6NTSAUG7A62es8iDxAfHUD5ZnB9EdMN7pHbUKGRerrX1LAyd3FrNUcRsqtxoeaDUDbW7a3EHqmmw9a7idQK8"
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
