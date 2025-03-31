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
    "uvkaTT7jZYKKmU7LjMhDqmEtGuTq1LRVyhmGE61rk7TusMNWvKippNpym8MmARqiUoLQugxQYL57TfeVnS4WYR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589PNR4koBdhKkaSk3WfXornNhn4nCHfJwGiL4mCecBKxHc1yV23iCuL1GwMmmX4NnFrZ8qz4Ru9Mci2VEtQv91u",
  "key1": "7pfvZaRaMzDMCzJ5EPDCpepZQH92KfarnKd8aJoDLhXgQ7SKE5eeD3vKGAoFM7mySDmyVY8GJZ4ZtqU1LroP7KZ",
  "key2": "23DRfZjEypnRugz8dSxKwD216ppnsVJeho5Yt8cjvRCp4DXE4ALpsfwhkvozteHjcScWGdkxTUPd7YBXb8PUmMrK",
  "key3": "2eEmHLNKmPpaEdarv5wJpw6aVTfChRgtNhTDq7xCWdQH6m7j39SEJfCUgjF67paQ2AfajvSKtcCo7LNpshgrMExH",
  "key4": "4KgdjPFp8TRRinfYMyaxf8QyzAdnHSZRKktuSuEX8dVYyw1fXzYgMkXwoAC8e37qSZerNBk3mJ68nFZ58hKjJU2t",
  "key5": "3wi33DCFLoGmZcHZAWEx2xuCDwCrh75d38x9q4RCtuoExiKtFQdr7N29aduZ9pjJaaVDVxUb7p17ZdUNPgsv8DNV",
  "key6": "3WWPGq7hZtEAbsKpRvnyHUe6Hp7uXVhVmMWvsXCMyVU9aCvB6RzvUgWunEnAVqLyn9ms4XZYmEpai7ziQebg2HYr",
  "key7": "2wsSj6rk8MTC9wEyhczbnFP59Pi3TbKctUyZJJLzhaQGYb5kbcUpxZ32h19q4oNYAKE9FYoT6ifMVsBEPTd2DgGc",
  "key8": "5TrWYqN1SLnkS5hNSGH8qwRwsb63GM2jqDrfAmoLtY34tDgbjsi9yAFsoERSrugZeKzepgZkxJQktowyLZhgop78",
  "key9": "3kjG7U4fVDqURyt5z2PAvU6JH5R1DNcxVJEtK9qFsjfW6BwXWFM46Mers75XicgWgqyjbktM3Eyj7MzAK8j4kamD",
  "key10": "3DMw7q3rigvEzBgSaWrbpi8En4GwJXpfKzhoQ31aMagnuPs2Tshj6u85BLrZP6fWCnzNwiP5Hew8AJpQ9vGUvJns",
  "key11": "58Eitdrsr8EYZoCLZ73AYYoPimb9S8ARRQkfCuJCRHMKRvoDpy5dZQ6nK3CApEjVpAjKK622eYTJkbqEki5vsFQX",
  "key12": "2pckBshycjJCi91TtRy2ZiA7Wk1P7fek4TWBvzVKuzV5EwYsiKYM87t21uotVbMEKzXnA7LE9oHqPnoyM6hQjVTs",
  "key13": "FQgy9spisw2QbvfSYgKmgTohzqgDnHBVG59bTzg56irkNPaLyzmRPjfbF5Khagf3GjiJ7oyD4EN3GiihGVTAjVK",
  "key14": "5LoaKdS3jp7xXdTmYJi74ZGzJDnwuh76MzSYVuoJJGKkZKqUnQbLWjA8GG3X8fubmbvL5kASEQvug6Vgo6FnbYPt",
  "key15": "45wYv2P7dcCcaAvnQrzoTXN9uf6YweNDBskn2562S4TMbeQY6iSFD8ViqoAdYCVbg8ZUWc4eLo4ig95yhYVhn6Tk",
  "key16": "2d7THJV54XKpweiBkiXKAiQ1FBrujP6i482kocAoF4zTMxpUFbKNb88G8BPp3LVejRVa5drTXt87JrgdmS4Nx5yS",
  "key17": "5vw9RVsuAqS6m64REmhA7MpMt89nKEahXuTs6QeH2iEk8j5DTEoarc5f6ipBoBh45K9Jo16gNrmfaRhUrJq8ae2h",
  "key18": "2JRjJ2G4h4aCB4KfZFEKSCrViiLTuGb8hkxDYFXW9NZtKSPdvqZCUBQG31QUcPeugF5i4t5jvX1reWPaKCJAjrZk",
  "key19": "4ha7p7TMJE8oDiMa1j3xmajmX3rerTCTYjY2oKYCAG5ghY8wy3s8epHPwYPv95AovCVVY5ztqJyvQwwb2VLGyhry",
  "key20": "3HD4WbdaSeEkPd3BuUTmChm3m8iZFEjnCJHXoqpKNhj3MQQFe4UUh7znqEMw7MRV9iWDQttoC67MxaPpzBGJK3pG",
  "key21": "5xeQiuRGade4esMVBxGaGSR1Wnv8e39vd4WjA9wZJmvLkiw2w7QU3oPLodBqBpkUWCQGGHjhYBR2xf5JcJ5K61U9",
  "key22": "5X1H19mtr9sAz8A2jV8j5hgsh6Mdc5XyQKtcH5yujLfDAWseGHm3jBd1RmZjV9evREKgzpAEUhKM96Gkquv6G3yv",
  "key23": "22o9pkxHJvxXYwqfyjURoc7aZLwXQL6KXCbYVXQSpCyuEEaH6STiEbvw1joT9LsPWPiDyPwJJY4FZ3aYdK1fRZ4B",
  "key24": "3eeJEUXfcndnq5XEUTvDjpAZAVr7ARUbbHdbSQTkDiMvkJgANtFt4ZiYTfiXbmjN918oppm4BeHAippsWqwVMqjX",
  "key25": "NoDWuuyR6FosuLrCyVhYrZDgSsV7sbuggPS3kPqxkrZVVg5avWVW7mKJpTcoFsrgCJLTYzJZsyvyj1EYbgLDgC1",
  "key26": "QY46UpSGb6VgjtHzUeXF4gyz5hHPbkMRfPKYtvoHwiy8q3Pd9qsbRG8WKW6dgdzyRKEBNWf8T3sYfwUVJKcAUUk",
  "key27": "3sMLyv2zxnfHV5pKMaWsDVE71ttGB74jgG9k84vyC4uxZeZ3SWDktUv9WhHVgofSUCrLGHrsKqdEartNqDoeNXjq",
  "key28": "yVSskoovXFA4HZozeUUzBkZXHoo42HjifVgDSpuuVthJpzJXk6JDhVPXYBNi1z7EnSSnxQLeYaKcm3CQ3ty4jkP",
  "key29": "5jEuFCAbZK81HdDtdNhwWX4i8nDU2seS6ZkDd6gGDfoMRvaFn6Y2biHspjPzznBo2eNuH1QxeY8gPtcd9LqajBQG",
  "key30": "jjYiKPNNEA2zMXhikSbkXXSHCSRZr7uX3Znwt7YYN75juYJatjoaVyvouGbjz3Sf6dsFrMy6A3Mrej4HU8y39FT",
  "key31": "2pix7s5aChw7YuETCHZT1hJQJ1hyGMbTcHKxaUJrMmzAyhH2svDrMPiNMzK6CqYdef1gsgWxLK91oWZCYb6ZmJpe",
  "key32": "2ocskYgjTNTto5WpVDNKtDceEgH7uXdXSaUq1BhuT9DcExTBw2pSVtG9122xrCNnpp5194R1vH7eZrbfzikfxtvb",
  "key33": "4MHvDbRHBdEFYUgZnRaNsmSfaqNvgTawfSWeY36nba64ZYprXi7is3Wbep5y86MTKQ6sFcrJPxCXMw11pQs797qh",
  "key34": "5XpPU13gL7U3hu6VEcnrXZUbY3LQhkWpqiVE2Z35fRxGQfrdiL1apM2H5RAM9exTfGpijywV5VDdtceyWAGN3mcB",
  "key35": "kBi89zwe8fFUX8gMpSs44S58EBAcFc9G7WFmjJiskwDhhUhsoL7QAcK6SoQbmNozdXu1J9ddcdnj9uzgsLuT6cU",
  "key36": "35Qh59cF9Uzxo6bWXYhXTNjT4BRUGxKJLBy4tP43aUvLtBS6kpoWLewtzpmPCDomr4Qcgb35VKTYWXhUibLedktE",
  "key37": "5HRCGUnmvGfkPYmRkCECwK6ksPTUVjiCwerLGWbuHybhqWBnAwVkQnMG2ZUVk7hobb5SG3LCcJ5cmz5LfSurCvrE"
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
