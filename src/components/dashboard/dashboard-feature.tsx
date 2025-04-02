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
    "4vbQ2PKBajAiSkc9m5CQi5FmrZmoRDwjJqumkBpAAKnXnAoWQAJgHBLw4SX9cRkjzL82c1HQL3yYxw8bnaPVpDny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KZYCfqqBZjVLU6FkyFpAa2L8WSi9DHkrPWHKEf7PWubqo3Y6GjHV5DnjK8St1TRtj1r6gAibgdbgeKBHkutcXUU",
  "key1": "5fL2wQ2mw3QEwJhDMRk5ku2usKZx55irPRf7ixcKCsxZo8PmqKfgAZkrndd7FnaUAho156BRFWi3GBbvQ1USEMuP",
  "key2": "DsQPFbntHBA8MSAvRDSYsASbx2Z8DZ3VQ5pTTadTJ68GCM4EZHDeFu6BAmXVLDbjiFf5NfF3L663i7wbVsn6eZY",
  "key3": "h84sGPzEKYp7i3DDaFrkfY9G2LsacBhyBeKRWWsNX2NqrfQukHrTYA4JWB5nStSFoR8yE9iDWisLgcC9HCrH6g3",
  "key4": "3sexNUgrSrrcWoJEWDFemyp3FBotZGFACzmtrrDRCVeK5JrFVYm6pYY92ES2KERJjDmt2MWcNHqRRGV3mkVU1JNx",
  "key5": "C19ZhCe2uiaC6TXuqfGjc6aNAucLwYKUMPCJ7b5sN4bszTSD4QKATbtAo8mHtA5iYnKwQpfJhrKVtCiqETdz6UA",
  "key6": "22AtsKH83fvMLnNaz3jmASg97bXVtRXK9NaXDZP4jgNuURXCKJatdXWvTmycR781MpHGJmjVtnYaU4PWuGpFoSir",
  "key7": "3L7yWnNrhp4RyBqqBJYn6hcDMtXzYnUdCNi5RnrZXh8HYwBM1UYtDrHSuTtC5Nvt4EvAEvApeGWVzjWYW4L3yVZ7",
  "key8": "5Ddc62UxDDXDmkHocdZQ7CAZxXoo85ws2nCMmrE2EKjTuzh2MHVVCaj4Z67M4Diab7iUhTuyjLVDUULe6diXD3Rs",
  "key9": "gwavWVrg7Fbhngs8aFZb5hGFE6pc6pyNTJvUVgSQWNkMdFBVbpQEGrYFyBvbDz7Ji4uRZ2XzmBsTmX4vczxn66m",
  "key10": "63EYfLbcAqqzG8xBgVt1ZDpTtteB6q4zGA65TEAy6eEExzkVyCScNTCDqdnnD2qexoDUL7ix9wJSc6k87ZhMNF75",
  "key11": "2NHVuZ5RDMEiFkxjpkBue8NfErrjAStPWNNs3KreGFb8wTVHy7ds5dbYf3TrLijBXmGUYMTgSJwmcGWvx1qRjFSA",
  "key12": "mZF99g9c7yZNM8rLkwfUDDh9uqDW4U8nCUMzte1BMjm7SSZ7BLpAXeaitGyW4Rae4ow4kVA6LpJuH7fKxn2LEHa",
  "key13": "3iW7kzTqrDJKJzn2MAeTGSQPiKuJjyAG31gPpAsC6spRDD1XXsfSTnijad2KCpkY2T9nrDt9WbKG535Qm6qqm9HS",
  "key14": "3UzHCnd7Ny5G8KDrm3kTtovw49HFcJ3TUetrRzqJKwZR5ZYQjmUif1jZCR6mAg6QSiBjLn31sFgYJkEdR7SXJ78Z",
  "key15": "5UJmEp8GwRb4SnJaz6Dcqom5znTChdV4miMhsYpy7aGxrPY5wAXhMThjPn8Qc1Tdgcsm1posZPVYtXnectS1RuCx",
  "key16": "mVViRGChzxxfgPRYesu5Cx8sPSfdWTx7qcG9kbHENXNK7EE4SJb2mYekZVQi9ymrQG5D8TS2o2tC5ERk6SVvFSN",
  "key17": "4mbHDtRrnWJj7yRJAJDbtXpaWqBoJXVadbB6QoyGNyr1i433PKdwwtiAiXY3iMGnbhdoUcpkgAaUCcGmn6x3Zq3X",
  "key18": "3R2BWpWY8ghFZm4sQgH7ACGBwpUBo1gXPEWXtHs8JFihixfMbuJEqg7qSd44Ea1YKo4YdJoxEqC6pzBT8xpZ1yi8",
  "key19": "2xhKgiRVWYtHQTZCMcGCbwmq128vSEftikcDBEWvfdpa1yGMfhUqseSjrFm83HkYw2sNWzbSGn5HydQDMC3Gobtg",
  "key20": "2B8pZ8m1GYZruzw9k9uiWgxeSdVPgLW4HV2Mqc6B2hvHCFLwenHGKWBG5WnksiAqUYdx7bsQkYf2DreBpV3Dp74U",
  "key21": "4WujGy1CTkcrW1HsZ5PnsQx1q6WTonzhkFx687vr5us1uotS7JtjEvzvr1DGnDzML7V9L3zSnU2rmLUVQiXeKRzy",
  "key22": "5ptMXEUvmmZqQGWc81GcTHshKVLLBZuFmJCPdXrw5UCBZtBSn6EKrAgcrGtw2CNySZMNDouXjPywziB6JtrPxXTf",
  "key23": "5thEvceyZ8it7MRU7TZwPGJTT8uZxcDAjrYLKKEGafWSDNb4NBARi4uE6ofEYhDjUC5A5qjzptwQyMLkoq1PehnV",
  "key24": "iAeQbqc8sKCQzLwyoANafTJPg1FmNZhgDrtxgk6SNwpucpjrdtgS3fCppm3z8CCnjAw3foDzzsFFE3dzA2WYxia",
  "key25": "5hn7B6jd9JfmWvHq9YJdufP3bi4FXtSdgymkJ3sMb5joMGw8KkuZWCj29zCdBaes7oMZjQ7FyBVPixbwmVke8tuv",
  "key26": "3fG2bQStvFreqz5GDZormLXHTBvNJq2RmvppxBEzZXVApCFswArLkba7wEz4gmQDPAKw38xRb2XUwFU93KM5B3jV",
  "key27": "5scMEhQqoS1KFn24xuhk7APUkzN5X5ARtsNUhmrYMTWWbZc5on9brgVrKbJhpKQDcyzQi1bT7ehUMwjZdtQt4pPH",
  "key28": "2tag6VrZybPT8SiQ2fzwa6qWBWfYnTGMvV5LH9Pm63AUZ6VbHUdoZwVF3T3mBrnzSYbXmGrJmzQsEMdH2Pc1NYUz",
  "key29": "253o4ei97acsP7T2Y3css2Pa3ExYMEHUR3TNAHwZXPt368XyLXPzJZnrJrqoGnohDR8qxN6FCt6iutBivDgRW2KQ",
  "key30": "2n7MY9PtjSBHk7etGc4Luod13czfXKpcgWSWdeVEHV3zFHXNJMVGuzCp4VynY6jWXosrEvxaj5f4A6WCN1agjRkB",
  "key31": "2pTA9cpcEJfnzj41LE46CaxkqwjyU8pRQoRkAKQ2W6kt8PiNKDEaKYT2ubJrj9ZNa7QhHTsgJLJPMSSY3ffQqN2B",
  "key32": "5Hv27KxURpi1wo4PT4Xg2JGBE2ZiUjSohiZZ2N96fcrJoQbZE15cw4Ab6kn4VgGKtd84oXS66tJF7Duhvy8euacw"
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
