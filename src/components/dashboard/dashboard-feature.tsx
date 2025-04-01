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
    "4XJQiBdFXzNcnsHm5cNcm8ZbxdmVK6jipDjA2MKnGDpPFJBjYoWkkB9Se8PhxY6Z8Zm2kLWEaPPWU49h3wnE6JXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T5U5xmkY4H1CfSazNeo3bsHhPSPvh6YrMchp2Jb4hLuYNXVybUrjcnr2nBDkCGA8CmkpkzLHmRJtmhbB3oxRYUJ",
  "key1": "5zE1HeXdoUMyCbqSLF45orwy6aYoBtXHQomzvnZzKJu556WQLd9F1c9XUZdrVT5XBEVJurWWSBpbazY8R8T77jAc",
  "key2": "5ba8kd2fBHvyfcCaGbxjeDWgZykfLZZvuw9UEcC4eaFceFG7RBrE99rkpZ8HkuVRcP9r2Smnxrdvpo4yCRrfW1aZ",
  "key3": "ghyFdNJsjC6bkbdJyzVu3yeC9wLvfRZqCG4pV7Qi6FERmhgWEjb2RQia8UMXVv3R2du7sescSbA7WNNRu6RNnr5",
  "key4": "4PmpgdQh74VsPbgpY3bcBXQoBNv27FeqcpX1mjLz4hhCibKuSkNDBhpsALoFvqYgru1rKeksnPjKvetRkHDC1q94",
  "key5": "L5Z576ccvcN8LpYcmJCNcNAxrdnL6w7bznCd8GfMBcL9eve2tuWaRFoAbhYuuqWrZVWD582dW7JDAVMNTYK8AyW",
  "key6": "5wmdLQ2wQk6bDdPDESvy4WZ6Siuf6VPA7GVyoZCjP1NstgF4E8dju4SCpbC96iovuzoscGN1aAa9UsAkAiWMHGZA",
  "key7": "ck58M2Uw3duzm9hwYpf2fsZ6L3a9v2NZZBScxvgJYEhLB2V74j1356a59w19A8XXBnjvu3C9picESaGmehkNDH4",
  "key8": "36N8p56FB2WnDbp277Wbij7MA8hjmFq8KJPAYTLqDYw8MC4wWt1aXKAEAGeYa9q23Jnr93ZJKYybCAucfbjDbduJ",
  "key9": "3C9Rq7yGiPGKFJ5jeFGQbr8DKE8sxcKin7bEt7ncfX1aVNsseeWcicYeUnJKacdXgi73n6UuxQWWVs8hXAASGwM6",
  "key10": "P9BRcoW474QjbziJpzzRHwhF4fcJsq8ZT5iJDLcMXpimmVyZVpVSqJxcuBb2s9DJDq3FahhLggJfP1VsLH3s5Xz",
  "key11": "45onWxG8hvpLSpyHBpMdBTiRjqsxnBeGUqTTFYjpNGDb3wxgGfeHv2VB6Zh4YRJFs57hMvsvBzvEh2bf9UmmRHDh",
  "key12": "4Krgbz2w2SJARFgcDZztELYacetAJ9L4uTQNfvG9uoeC83EZX6GCrVgHFozHcQYL6rf4EYpVdyYN2WKMQjddh1Ce",
  "key13": "4rFwXTzMKrttjndjmQizyD12Z67XiJQdeNrbCFifHmUoqgDK6CJDYJzXaaaa18p8qxcAHcMfzrEjWnbNbFew7mP1",
  "key14": "25faFuUk54Dd5dfSYLryMPx7UUH9vGex4p3r5fGAiz7gtqyGK5yEUhcY1e8PmPtdKXf7MDVYEzqxTbygjX3h6PYq",
  "key15": "47KnaRWdwhreH8yB8kCn5sZjRXvXFX463jhhRV3mEEHc9innFbE9fbfgdHg3YKFsqo6S5hou3hJUD1i74HdRUwxn",
  "key16": "2D3A3qyrKREVCrBh8ncmSRjnB98fHBF5o8LJ5k2XKNMJR6i1mHLE68iPxqXH2i83CGB6HjJpVrLLpH6NchapbjXM",
  "key17": "4TWqARVu6PNXY5SWg6Q7ocdQaPqigRQN9Kow3gyxunP4ZPc9mU4TGMTr8EBE4cCCLeFLbazB5vxtERkrhUMTDhYX",
  "key18": "5nYKhDJGidRR9GeckZH2HVYjpSnJ1hnm6Xd4NMJxjrqTGiCjtKkmnMDbC8TAL9FWGqcHM9HLWSmm9bt4MNgcfhby",
  "key19": "5zxfbqsVptAYTyf4Td7G3tSGfnQ8xfh6JCGgN17gup1GWZrfgMLDnJzzhYfv5tTUkrG52jTwuW392iSxksdDqPZw",
  "key20": "KCKJEXS17ps1SCMVR2z1x8tTtpC65vM4qnbv3yUch4FZKembAvwz5nWBDFnPhXj2cK8N3nyTJcvc4rtSvrf1oSL",
  "key21": "4wx8o3BUnw4xKYV4z35rQao67d5uVZ3zoxws2KpTG1zGQbjsg8Nc6fJCDwMGmhwmzSnzJ674VHitn6EoXSu87PMt",
  "key22": "38CPFTguun53YdpCLjv9PftkUebWN12YkwrJqDDkrDKEBAvSHCvaqHKCmunQNEkythnAZWPqZuXKBvnF9YYcfD3h",
  "key23": "2ssioHg3SSbBitfY2DMkZkYaWJvCmyJPohWXW4YgniELnhCro2eCtrrpLf7C32h9gyCGuh1ZPhYX8jqHoVAsDxz6",
  "key24": "5bgZKNU4o6LPFywyy12Tx7WcyXdFBKJhXbJiZY2fvfmKpwE1i3AduRvCFCyAVK1CzYU8GqCBj4pyXsy1JRgcSYED",
  "key25": "3kjB7RQ3oTVGd4yCEo17JJE8NJNwSPxGsm2TCQpmcDnu6aXjVD9X9XRAonfJmnaBK2L64nWxLFR2j6AxppZjFJNB",
  "key26": "5qitvm4YorZQqB4iU4QtpLACh2mj1d9uU8fq6ahphiTs8hGdWWp8SQgi2j1kb6BCt6WEdUWxdqS6gGfCEQguBzT8",
  "key27": "JrQuSut9W7kz2mTF5XR8SwxL6VSBxz6uocJfUqeEoNk2MPifsaKYM5NxPQj5FdHUGZFqLvN6yUVaRS7H64CxFVh",
  "key28": "3W3SQAysaVBb5aNMfzDCsu1PbATJxGrMksyzhjF7bFT6Ziimu9JaF7CtdupcGGNUL3ubdQyu2gFBdNY8vfxRjFm6",
  "key29": "3rGXAMqVZcYEH4ME58zuKqUzTusijFP3tv45giavcYJAvBYa1KDEFEWNJsEgDB1h3bhMCk4evpzyGSNtHMTTMikt",
  "key30": "26mKFgPbiqWWx4SZ6SHk8H8tKYQodF7WwpBDJHut7322yML7EqSJayU5wTDkBReWoXg876WGv3Umd3rZcKWtAQMV",
  "key31": "2R2RtmkotZ9MArUyMTXrhy7BmrHzgwUT3DLXdXvi9ydoqGHH5VYyrwaMHQB9iuVW9TyrJExYzXr7fMGevprDaz5X",
  "key32": "3W2K56aiefCdHDJEHseidf8ehjaFig58Y6j4vLb46CTDpa5XveEK6EJioEASaahpDuVHyH1vJNUcTSUsUdxisVZH"
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
