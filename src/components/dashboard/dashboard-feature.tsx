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
    "c8N5wJiponM1GqHLvDLZkbM9hCxHzjFiN4uty8c6QtDAwyXjkEJ67hzXCsQS4nf7sPazcVFEQ4ZbpAzP3JmFBsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdaCqoChzqc3rotVuGqWitt7VHPjmcXatP4toqyx8kkZAFdGrAK8NKYBZ66fZwxFYSueSakjQXFmGtpsjf4pqrN",
  "key1": "2P98BiKiwBfuZ8QA6fDdJFPvg5AbriLmta3uDiEa9KKgxNF6UTj6tvpRL9WTj2oAaGhczoCVwKvVZnpUDXRfq7UY",
  "key2": "5BdUstSBhSGb7nd6SWa2d1LgfWR3rGYNjbp7dJzP1kiuMK2pBYeAibrUF7dNoqYSfsmM8XMpvL5NzznbaS1AVrWn",
  "key3": "5HLBEmkk75zTsZPzxFcfHYgnoPurcUZqfRH6ci5navwkgjTMeN9xxcFSF1rETA859HLmvS6Xumvr85T9149UefpY",
  "key4": "47rmmLMNuTTxdcok1NMvxxjquGGLo4W7r8fxgcM6BpKhgo6MPWv9SvMP3e5uhXte5HT7oDFJm61cvpfg7JXuGFqJ",
  "key5": "xK5YJg5bJc5kN8R71Ngzt2nsd9b13KXFjQiYeyz9uUjc9URaZKP2T4MnQbx9q3LDtBNfzCwHaUkjFsFD8a3wszA",
  "key6": "4dhNdDV5Rb4Xkz4ABnmjveSv5crLrNaqUY46KNtwRB9TCu5fd4WVMyRPkyhziE1HdDUU4qwUhkmsxFwVCnsK2VYf",
  "key7": "5mSyVnFNihojRkXyZYs58ZGNfpuPmeBW5ZW4t96FpJst7wfLUZDdpJf7rLsQs47UW8CYUu463fFR7r9kzVz1ZVbQ",
  "key8": "5w3dAKH7rBjonQHyoB1GohfXk3eJ9HCkhSnYuEfUL4yrPxPfSYJJfJeWW1Yqbqd6GgrAEC9kUF5RXtn4fFyGYDzM",
  "key9": "2poNQFDfZAdw6LkQtds8qUSiMXLGMzdRZ2wMi73rYtFLEw9RJXDmiV1uCTsijbon9w9JiBVjKDXsgu2KWe5rCR8i",
  "key10": "66ASRhUMAs8zDC8VU5P2CmYWUjC2hVf3vjnb1ZxQ5jiVxYoc5LYVXZoCWJjkezahJKcD6V1wgoN84658ECDsoWAe",
  "key11": "4ZYTU7VgST1gh8nRoPcHYN3Uw4MLNMB7z55ZEYdgqAinYFtDMZjmUpTmJAx7PwNkVmxZuk5YcLr51HxxwUSRWd1n",
  "key12": "2Jx6JkHknznz2YzANiaQjpQNB8taUrJbT65WdvyCoSMo9nx2tWMnxkX27ZYveVhMCbQFa4MWBxdnB2NSLLHcZ9pN",
  "key13": "2qkKQC1yeLuEVDiRgRKoirW8xuoGmei8mW4b6KzciozWdcv2Kn646hFMgMuhCMKWBc2HnDsrTE1JM8gkMVzSY4kg",
  "key14": "38sdMcPZ5UpPdjxDd9K1FzR4DPMkCF4VuBZfju2Awy7mah4oDUuYpZELuQh6Cipho3W4G4BdKQW93HUEPJXLVrhX",
  "key15": "52z3XoWPfgNJW3Xp5tp2Lv6eG42168C9dnEewrqVVGYuB1Lhj6LVRH7AvfikJ3orcdVksftxM5FXdzzbx9YiaRJq",
  "key16": "rowZSZbfFe1iEwyA63PgFvrTSj9bqFr6LEhoWYHJ9HA1F5UM6k443Wx2tVbe7mxrVD3bw67sMrbwdkfaMKMhorw",
  "key17": "3KThLznfPobUpcNQHzbvdpBBNe8fiBkaBA1Sgb9xFG3waxULBFHzeVhT7ToGRgjRFovVpMYMyMiRLRCuAbfFVd3Q",
  "key18": "21PfRZ6nzy6LvxpdF8YNFBXp1grRCnoTVYb2r5x6BC52BoT7sJ4E4WGy39PmfXBUr1K8eY7HqXRkCjBqwrcnfBYa",
  "key19": "N5LGMT4R24D8NWEUtBMoB9EsUjxj4naYVDrLzTZfTuZkWJoHnqAy7ZhD2LZbfHG6PBbr8XPyFMRwcQ4uWPGenTQ",
  "key20": "5tyfJsyDHBFNSLjdee8nbFUJq1Ea5xY7d5uGbsiAg1hDoW9BZMBCtZtC85bzpYvDEeqjaHqgrAGwEtWxszWokZac",
  "key21": "23cqJqxHfWzGdBQye8Vk22j3bzCDyYwuBmBwgkH4BzFs83EMe7UJSoiGoeyEbhXPL8ngMaGmR3vQsxD3qpwZgoVF",
  "key22": "5aykdrazLfFeWBgAPCF62XNaUoH1XDU4yWm5woFY1PKQHRQjRJChLq87AmLhYtC3YV2HaiQTWSd1Uu3FTgCsQ56N",
  "key23": "4QrSgGZ9ZqydtjEZU4UMMgGXVdKYe32hgGk5t2LGQZ42MiAWkXdZ6a9dU83Rh2yisPGweNtXjBdF9MqgWrHUCoNs",
  "key24": "22JjRWwEAZ4ebrs8F5gwPWgkUy9fg9yqEYuyNF8y5rQ293LjGwXZzTAkSYGrrRkqFQBMR5Rz5UFrDT1DXgPDNNBC",
  "key25": "3aLQ23sX8yzToc3Gu7pXv6EgNURkKtnDTHA2QW4N1bEChMtMc5T2t8PT6fitbhfPDHKfocLmE4bNobAC2RCRuSA4",
  "key26": "3bhXHMrzpMqRt6Hx7YDVwCxpsdEs8cCa8iUy95grzR6JFeMviuzQefBGxfXZXesKvPUyb9oDvTdFTDFvuwAF4yCx",
  "key27": "4ACKhzA9DipPv6NbYZ3aoRza2qq1Z5WaFCLUEt8KXP6drr76EEbqSvF8K7TYETD679pPAughz2G68hWeHc9S1s8C",
  "key28": "2B4S1rvyfwSuCHwd6zZx7VenZJHUr6TWJtVKeLnxBrEFP6ukpd4cNirYNkVMu4GVBpkZdkeEUgjejoiKSEYnA1aU",
  "key29": "XPeVqCuJC8Cn1vAffUdAexCfspWM9CGimEU2BBaYHGBr4MjNk3ud9wVyyn3vUn7uXsi1dHC2W5JHxstT8vwm9P1",
  "key30": "rYAUCKXzBUbmpHCe4YMU5D5XfGfUf1bubJWbaMBi9n5kTL4osk6P29TRoXQsjkoF91ymir7uGRnWzN8ttizTagK",
  "key31": "2rrDj68JheXdamcpVeKd1Uf1gK9X65WBuYoYsbYSPE2AaTJdTBz19FbJD1oUP3akmoUEbjf9UegVLrSZvVTMVcvc",
  "key32": "66sKb3PmkFDmgXo4VFBLJzgoMBxtCVrxsBzMh7VgUui2kMgjKEmuZLi9yfa6iTDB87MihJCrb2zX778ucty7ChwJ",
  "key33": "5EaX9DDTy6wisMtBZp9RLqxDRrsEhNKa3WHLQPaUTecvBZ18Sftmm6p4PBb6HJ9XJs5VmprNF2Pjv83zQriMpA1k",
  "key34": "ee9hf25LQhwDZqSYnM5Wj64PWh6V24cRpnQkU7WUEWv4QfznwHEwahx4hVfyXnBaek14cDnYdJgkxmjybQsgtK3",
  "key35": "KgzQCeyPGxvm7szK7g2kYyqStDqHXpDP8mr2XtLL69PyuwbiH9kBC8m4qg29Ksf9PkKeWQUot4Mg7rhwnzaZX2V",
  "key36": "2XfCanwQgcySoa3EQ2QAk5PZaWCWmxWa69HpyYJctAwVK6zv9Pmgqmfx2ty9zsPJGYNxFxBQmPtTQpEmfgKvXGyX",
  "key37": "qcEjCTY7894N6KJrKESFgXE2EZXzB48RxwcsMGSMzNP4NBLz4DHzk9ocXGVu3nWCfH174nkWpKfVbrV9kpETWtq",
  "key38": "2yrZXpUwfJycpLgS1DGc1hZFbBXvTkx5NVjsGaLFB8KfwiDjUQ9uwYdvNnb16GTQEbbtu9M2rZaDqY1F7aQzdxqp",
  "key39": "22jkkokTjrwbWEzk86eP1feztsKV7KtHWV3XAhzpaAkg2HiRDvt8TcbyMHeKK2ourbJfDSg4syctuEZyVRVQnyJT",
  "key40": "4B2ua7dosKYNCrYyxRSJzkryT58MbXpAmSSwc4s9RR5V7YeGf98sTQ82dRXPqGrokntV8sh59cSGdygAoSTycXfR",
  "key41": "uaxnvNNjBZvRXwRrULNMJY8DW8rJQnrVQGoqw1Mibi1VQpFgAeVb5Tu9ypy9xDPECQb58xwCZ2fwHLxigbFp3Qq",
  "key42": "3nN4htrHGN7tH5WBmQoEq11vKZuwesWBNuWd8AXdy8pWjvc9QkCXaJ8vT6epk26cS5xfcQ9saQ3E6EoByai6dxkm",
  "key43": "2ZwJHcRSKjZoAdwKzuRVh9EJEi7og2Tto3RSzAV2hcPXaAcNmqt6UBP14ManWpZCga8qWQCjMNMbw6QooihqKoiH",
  "key44": "3tVoE4LY12pdkYfKJrLX7fPHzrnGQgYTvSt7DpzPyMRAJD3Y5Vk2nsvzPsPK6VKvKgTkR8iwVwqcUmGZNtAUcDBv",
  "key45": "4CNT9fFJJVz57VYopBCKon34tcZt4UoWwKpYaRxGcV77NG82UTceXEJ8dv3CC8czhfmcxQoSBwVaDqcWx7zTRyX1"
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
