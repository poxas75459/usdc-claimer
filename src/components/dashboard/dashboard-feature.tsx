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
    "4uBxoGnALuRtDGqi25jFme1V3SY2t8EmiwKkF7iES7oDiXgZ9E8oSXmVMVP46u3WSJzfFd3zjFZaLk3aXQZy8GUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GQ7bQptwcU49ewL2f26tNS2YaTTgJAJa9evxxX2rknZ9xP3sGvhr1k3H8SWX9jkGkd6gHXF55UxWn5sNuFgzxb",
  "key1": "AHiQtiyEWZReCVqW8FdCAmx2BDWp69M5hAGsKt9B2NwZyZ8Bbdpk2a6cR1iMxtQmx1A5KjnpPh2UHMWAdxMShFK",
  "key2": "3T9cAdWdJfTSsrFF1LfFMJNi8B1hNva3MhYi3spD8NBGRVSz5k6whvB4TGshPq2VpBu8vgkDLNYnNKdQE1dTWzt9",
  "key3": "4r4FwUN7cMZVdJ5Mo3DuhqDoaDZ4a9ztANajSUAP5FzwX6CPUnGNTbDSKjQoPL97h8LZJfHWvqETtqNRrX8XTZV6",
  "key4": "5No3ScpLLvTnbPUbnaDdJDsz6pRRUVgqeMz77WgW7wUhfzprBTQLfcXZY5dS33eAau3d5FkLR6hNJHg1bfxHhTEM",
  "key5": "5vd9UCHraba5Quy2GZPXHAtnLgiEBwtsAqTUdu4sjxfhwUkhPA5tvgh4boACYRvptqho5QVgYjS24vp3a9EHP7Fg",
  "key6": "4mMcfeu4H697yn9oVggEKTerXH3Z3RH8Z5jQWRWC7UhLs1RLce9dXCJoTcHF7agYiZnm2NA4qAn2pQMdqfmU3iLe",
  "key7": "nYTajnmEQS2NirWveWBkmzeZ9gPLUb98DoHKL3fdpKBuQeaUCLHVWMpbsqDUFfrAAjDJCcL1pgW2riBdYtamChY",
  "key8": "XGdkrTSag7XH5bknWXzT9p38CLTjJ6nERxS6boAq1X2HCNdd5W9MYvqE84nPqDifh2gnedETKZuJisuRmu55t3x",
  "key9": "uodeuuHo7twkbHwsEDcw8LqvCXSC3Ye8C6wGAPo4hePBfT3x1JxbNM7AAYTtDVtesA1dxLRdGEVYDWADQP2MZQr",
  "key10": "2a87gDyH29CMmiNz4xxHy6eR4Pv1Y7tXDWsFtz6SkU9BXQAPnWyHEjaUrhuVXY7u2EFSAGD2ZMPugtRL65smtQXa",
  "key11": "5moju4TYarXnNJWfWgB2od9VGnDnj5TDQDJELBfcL4WCKfLJ9vSDRJmYaFprg6m2p6zJAaapA9vuUfwBVp3osxoo",
  "key12": "3EhS4j2V7i1w8MNKdjj7of67SPqc9md2hq1NHxTBYbTX8caKhfwGNp3jXdJ8iB1873XktiCrbTz8m39PPouiiqA6",
  "key13": "3aDXszp31J4TszxVcB82yKNYkYFSMmje2D3Gyo6arkX5GXyRWBm2mEJHfdeuMVxEZkiGt7N3aC7YuGSFi1S75UGh",
  "key14": "41wM1K52Ew4AnCrgVFBM96EFpjfzg8b418WDv2ipqXu6iLMG2ZPHF1jJuat1AptuZWp95bnwXZxKJWVGFvupL1NQ",
  "key15": "4NuNM5fxLEvw7fDPkbH5CRVBcbSePvDvRC1Zo55vD1WEVA65zCeBLYqszwW2CPcFqnPnTiWc64PHzaQYnUzK1qdu",
  "key16": "2aN9ATToLK3Q355chHNPhGpHUreaenyHFVzVPvqowetmDcUvFXSJvfDWcMd8jEQcm13M6uqPMZEbReSPF5D7CfTr",
  "key17": "43JyKYNdvrV9EG5KZfbz5h7Ar6p7imaGaTvUcfS8uMt34j7j3a38AiHN7CLhNEqcFTUDbGwXa1vqJWGJWLpS1GPD",
  "key18": "59xUUkFaKf4EkEb9js6vbzgMFh1bbr7RTBRXWtXkxae5Uzjo8ZsGBxSsy8mYA5hUg3a7G8dJKaAw7S9peQKkyfJK",
  "key19": "3iMZFtNqaiJ85PceN2NCjdKM1p5o9EmbY5iB1As9gDPPgCFT2FX66KdTW5YWhN6VGEmvbDZ83QcTMGjRsjcgEyJt",
  "key20": "2t2hqp593Nz9EY2sbKKByuh1d5XbhR2ii6AwWHgzVdeGk7JQ9gvLbDpnXubqMgqgJ4wLLKYQKiCLhYbQouyFnCpw",
  "key21": "31dy8aRGxHhiaYz2Yd7owepko5TPx1ih9xC8H8HKNELj5oPuaU5QFkyHQYKkW38DMP2o5hot1aFdKgBmsAXgdAAH",
  "key22": "4vr1UgUXccCzK4LBsri1Eic2iSD4Ecc7aHMxwiVRrMf2RCzJBffpJcy6yzbtWsn9cNjQ1xhZJNXpFjvzhPrwhr3y",
  "key23": "4hQAhadtbirp9BzLHcGoKTQ6D9KJ4jkqntJKtQVG4SBJMcPWSAhgtc635UD7JqAMdZ5Fu7mbfgzUComYY5x9iqPK",
  "key24": "2VabZMdRfuUry12bj7GmWDEh84Zm6eVo8HuQ7CnCHC4fbRyuS3MaL68fE25crrYiVofvo39yuXEPcLZaghWERFkJ",
  "key25": "2jZhrJHB5oEex8GnwE7nihUwyL8N96CkeEhoeq5Ap2H3SHwxdVhpQ7xoLfd7CEfPDcbdyFQnpUcvyzYPN9QGqm5",
  "key26": "3BGWt65nf24W7Hwr6jjvwMn4pGqkrr487KRH6UibPCMbQSU3VJdyQsheG1Gics7DpWKd6SdARS6Go24SvjLNKwAx",
  "key27": "2DgLwN6iVaWSCh7uqh1vCnWmVhumhF38iY3QR8k3wS84e5i2ni8nzgyYzY3d5qyQi1KhvByVhN1AUQmqmrTa7MZi",
  "key28": "5hPhK2cWvwmf78KNnPkJ3uFNURzFvU8rLXbwaxAUocZHZEp2vHZVnFEh9nU8r13xGMB27XiNcq3r5LKYKoXe1pTa",
  "key29": "3xH36iUEQxR4EB8s9s7SupVSSonJJvjU19fSwVo1FP1H3hZ9Qs3CLJgsF2q6ULcMEnx22CXGhFFbXWzpypXW1Wrw",
  "key30": "3NfugyS58LFuE7GDzaQUP8YidiLw9bZDDJLcsinRCFQu8r7R1cGWL64VVsH9bLcvWHdBDPFLN2Jw9vynrBPkm7JC",
  "key31": "ajEBcQWoW7oKSoqSCgpe47VrJ9gP7yXdZHJVkyg8Ayr2bX86ESmZyRUdzpk1jfCo8hw5JxWMNcsfd2YqAXuWkde",
  "key32": "2hLqvtNv28TxTiDyKBNrJy6cqF7NRALfe5Srhb7nWdNWyqBTL6JQqGvYJP3VrjjsctM1bRkfruMD1YCazgk2Jaar",
  "key33": "5y73q7PjzqPUFemnKydFHgbWbPM4Di4NRKA5itCsrhaVXC3sfBbkdRFz9Jp5tQKvXCQSKLgq33CjX7Y2Me5qij86",
  "key34": "vwMjSk5N8fL9BSonjfQDU8vBZ4mGaWf7JyLdFaT37WSw5bkfm1dZn8BXkyzgqE9SZoTgTHvkT2CMUpqmU1nVpwP",
  "key35": "4jRSsw6JXRFJm2AnMEt9i66yAdSbDAqfz1iy6R8CfGXCHdAv53v2ZLyXkSkkwd52KPU273UpASs5dWuZJPW9jnc8",
  "key36": "vrNEq5nJdmRg2Wfbjfau31XcuLzaxVzn8bs5uCQdQvFVybdzbfCoqG31dx42B4MJoDsKTNeFHC5k6UxFcDCLE63",
  "key37": "3VuNEJuU4jT4R7QaXfwuRZX9Kj9Jk54GLmyfHno7BynYvTZemxbkhbkPcUZFLrwKPgr6K5r4xyTY62EyFDU6sxH",
  "key38": "4Fw2eBHnNFiT4RKy5v12bb2Umdx4prRHDx8RbBSZDVJfxsRZsbZ416YcJHvMbeWkNsZLbv3gpsz3KdVDDgoUxYJT"
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
