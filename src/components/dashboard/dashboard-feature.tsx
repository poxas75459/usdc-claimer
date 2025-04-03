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
    "4KwV2MygoX16wZQfAmCh6AFgx9o8T7y14S6sbiwr4DRYEahWoqtg7Q6ij9Hun7whV7GSNxoD6w3bRuvuf4UPWX94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obKbsZP4uibvWegWkgKQC5FFYho3toB93kvf4gTSwnVgPhPCetuSUGF22kLKVMs2tqz5MQh8BqsYQJroVmDc3HJ",
  "key1": "4WzbdULtQ1te6Yq2bKf9Gc3m42FGR8LLvoWc5JMqg6rLRKvz83qAc8ps2kS2dgGsTEQYtu8YnjVZcfUZj5Ra1Yz7",
  "key2": "4K2nvPGPZsBD12A5Nn37u9yzxi1cCHN5bkiSUt3zwujPTXgo4xoQJXEHj1XXcDQxgQjmBwgLQDDGeZgWCbqubytd",
  "key3": "2WV8qP7YiXxAUpMwruabGt3dFA1QZLeFygS1kE3WcSZwLPfJmcQKSmK4UfLxxi8PTLs1Uj3q88atrjrS2JYqjeH1",
  "key4": "KnHUxMb2b2gDDNkyD7AUriH45sYNgUut6mg1ACCYW4Yky6JV9zebwMcYjYBKxEc3M8YkddHJtryZXt7jtM7MNtC",
  "key5": "WxxBpVSzjh8frVD7oojpSEmLXuwqTp7v5EC3co9zaM5wSTgaDVJqQeASJTSeEUscyAJMDZKo2sNcMqWzoXdf2q8",
  "key6": "4T4EcCKeGnxWuKJPwYuzSocCEecaeewA6aaDkyfn8CYsma1XJnZYh2ggUdWgvpr3YtEc4atBXHNHLHS6YiRctVrB",
  "key7": "nogHChw16TV18285SUBruLd7chTqhwmDKNBW6vXvDduNAvQLYNGUnkPtvNesVA9uY5y4PbRaqTDpDbWae8MVkD5",
  "key8": "2whLSwv9XGTgf7AN5RVCnipL4vmaQLN1dy1jgZ4XUsEj5dPoxDQ1eQjuPR5EzXnAUhfDwNbppwH9TPGYXyzvzNUt",
  "key9": "4YFqiauZZpG7irBHZGuoXK1SrvhD7CDNhx1abH4pGnCSuEuP4PPsAdKWNEcVQLtV2vnJ1XE1fWJahrZChofupRLm",
  "key10": "4JGXncKt129RUkT77bcMejA3zpa2x7NDvywgq11xcZ8ZNEW5CF4gpY4JrwPAQDxCmfqKNsSqTt8BKRPx8cJ6mVvE",
  "key11": "3Fndg55aUtCBEqZB4kr43d3EXh2bLXqY5646kinD3eQSQRyiN6HTAotrQQEea5WLff54hT9t4JSxR1KfigcRL6yR",
  "key12": "4EsdZd2KE72y1a8A738dzHKd7tXBeqM1ki7otjk8FBv4RyNBnyZG7Sojx48aUe9Fez9xokiazoD7ueGnFnHmAZCL",
  "key13": "2rPsBGTm8Lbqp5GEdGohoKpPGpj2hQ1h1PdF5ByTzDr9kRbSbjbMhQsNJtRAEkweM4N3c6qsHdnbUe9NqCstLFh5",
  "key14": "5WXSQrwV7QXzDv6fpgeJBpytXm5NKsCzoiMApUcQ9pmovj2mRB56p9deTpsumpb4o8RREDNei1ufy1jDdb9dT4Ba",
  "key15": "2afb6b6o1GxBfPcPQ1SiY8Qu1KtwxvSK58eU4Mto66kzoRqaFqp8wJMZXVdpo6wVwm3fXDHmMZ6RyC5tmUp1bUZj",
  "key16": "39j2faYnCp2PcJrg211Nuc2PNTdgnoc6RhfwV4qhKt6z8DwUjzaCMUtefm6ttaHEtFwYgGUJjvcD4hcs9aTv5aRh",
  "key17": "35DLMN7vuu9gY68oXJDecCmZvVM7uEpx2iWRa7A1zg7ufUqJ7mMv74HVCMnZyBm3gN3vt18XP5wpHcwodUdQ3Rfc",
  "key18": "JyUUPM3rjp3mWmFk52MB674LRvBeTKrEuUF9GQzgx3mXJmwLkDnL8DZ51Dtp8N4V53jQbcCQp7LfJ2k3vs125Lm",
  "key19": "5J88i1YUFSRJaoqTNSj7VYzRMXWp3VVi1wwupX4ckUPTJedjHfZVxMGbhTBYa57JhJz7kmJiZJsbeSHKYThbmPyr",
  "key20": "35vnpcWYeUazxaDsGtQfUUgX5QXiom7BXnwAGZk2xzdGZDV7CQFwjvXVkzmuzAhNo2pnqPkmyVtF9No23C4r56G9",
  "key21": "3CVAWgC5S8iski8RRNf25VXKT5dntmABA1x3JmGb5SZHUAAf3V6jkYQvfF1mm5ckJQ4oFfc2hQ4bk9rPxqYLx15G",
  "key22": "3d4iekQyZMxvAPRYCm8NmaeRfViqy7r28VAgeVoac1qjakC2CSKUvGS6u7ceqnGoLLnvkKR78fF1jVadjshW6qQi",
  "key23": "YYacQif7ByigqZ7hxvyanc37DFV3hMhNyaiPBWQrJToNx6GPfQ181N78Bp4BRuyVakLbpnVttEW8qwrTDZpTTDv",
  "key24": "35CaNqehuBbJhWi7i9qLhR68scVecdEDhJ7tWd15Di6ye7t8T6HkY64HJXiyvohd7G7MxuASMtu4YBSkHPoad9AR",
  "key25": "3PDK8NsY2uzitPqQaFE49229WuMyeEQcbpcQrdUqXa6v3dt3gsPtVRHfDTQpL5oJfRcGuedAD1SG6MUQCxQ5MKae"
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
