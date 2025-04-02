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
    "2eb8TAmtGGtV17gCQNL2q5yi4aFZn8pDajJYZ3spJDk4AHkqcfBL6PFF8YyfVcBLDUgCgvdCj4iKwmqSX47DwaB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odiRcvSuwvAyUeWwq1TCV2owd44UrwD946ktgjF89uNieXipHa6mWCWLHyMti5gf8qLffoExMHiMQPkPdME7c7w",
  "key1": "KjxAmNczaYXPUV76qEt1GaGtePC6xh2TKKs7vijBaz8JtQrKgcujALKHCM3fJUSVPMNkBpbSZyLuPUcr4SCZ5ME",
  "key2": "5miU2k7PH3njQCpJn58VLVkSgmgB5Kqd2yUHYDWD72pisaBarF37JCqAAjjXtRBPTsx5WuJv3Gh2WtfBkHrm7sQX",
  "key3": "4RtEittZ8Ko5tUmjtcLsYZ1q3bAnZtJrG3JuFcqG5utFqvXzkrxnEXqQEkEdSHp1NmkgjCDGy4zKF6mbjWEjF6So",
  "key4": "5QzNunVYkBa4Ta2Nkgj1CEHbSmeumYQJcxDSSsHVJxjf3DoorK9eAk7z1UiR6Y3hTHjkCcvHqoNyffrsaJxy7ZCG",
  "key5": "3gHmhkLdYieLrxw1LpxmFJtiA2h8ivWdD7kcmFGXEgfwydcyvRYA953iBeD54gbxoJbsYPQFzXeP1xB2YaKqmkH5",
  "key6": "53A1q48c9PUNS6K8AvMKfkBcjYciNGnM7eEgnpvUmQsWVmxYtZ6FVhqJDzRPL1DfvzTxoi61PZk7YN7rhF42kSZM",
  "key7": "53Y3KoShdxgSA7kQwZo1p1s4GUZMCnUAswPzs2ghZi4gmgxfLeqrzK4VgtYqnCbXCzSHPDUG2qG5KhVnkXyr5GZj",
  "key8": "2Ku1TKRYgyaRKxB8Em75VKFBDDJuVtqC9dMAszhaqVCHJDPWmmG6qkSAL68UrQFHp22duzi9FCnPe2hCmTq7mSc4",
  "key9": "2szoQGtaJ3KiPSq9XWyfMs1HV4ym1dPEewWNvPHgufjKUsNPPkYE2iBbCycszNwZZr3PeiHwCNMR9GZ3iGS7ha5i",
  "key10": "4jkhLGg8n62Hnrz6VndKMDjGEF32HgpRHJehXPk5Sjgg6186CW2wJRQaRLC7w2umQTbTDbdg7eHbosrCrDwfAhMo",
  "key11": "LDYyKyAt4uzhDHizN5HSVQ2XjUTRGvsGd7pa7v3To3QbXAfyFkUy7VDvmXTsEnsDrhEWiFbkjKgphG6kJ6qZFa5",
  "key12": "4W5J8TwszxUfRJfwHcBes2yMgpFjTriZpZAspB3oLfphoC6pa4jMjVxGYWHQSCwe8n45YxJZfgdLfXG84zWZTUV5",
  "key13": "3WoZ7QqnJZF6hW4WFwR54fXLDzmwxDt1R3EXmNRV8VGeN9ho1gW6w1R1oQ3M4sRufJiwHqr8n3j14WJx596GBrRy",
  "key14": "5akkxq9kkSMffjzsR8UAZSSRcyXq8JAszbNW7SuwemdKLn8HLPVy4C1H3XeggtjQ6Moe8eqWTZ45f5wpPvrJEvEG",
  "key15": "4nAzQa4v7GGmCNocFv1sVMWiqLqAG8Mx5iVHQSpwPBuUiM3wUmG21pzQNDzdAERAJ1ywdAz3s5rYqb6zZ2NA76ZR",
  "key16": "4zCMLKC89FhuHhKhLZWR72C2m3azZFC8ybNRmYHcwkof3gH3HCEk6MbJFcTezecqUq8N8yPtCgmfLtgLJKK51gZ7",
  "key17": "5GuZ9bpUMj9GGRpYLLvwSFGkYQ1Qt3vFqeE1GK3rYGcES5cWHbJSafo9U4Mk8RbobfRTU75k3d6oWVDc4rnhTjLs",
  "key18": "4tSM85gJEk58r16gF1cU6SqojfndZkzKxFR5R7jHsmZ9htFSNn2Zk6z62QxifBSoXoyCU4QWmonp6W7rQJfoZ219",
  "key19": "3Lkm7cgD5c26t5cCXvDE4JguGhdus4aW6MBcMQuxTUAkyFwKej77zG7Z183Xpt2iPhCf7aPTTsR995ZUBP6o3FBM",
  "key20": "4VtQTstHPr51gx1doPkmSxcYhuPD6BXi8hVufuU86PuXfJnuJhMW6cCBSBsoJZgmuAGvNU1kvj9HFWQEpH2A9abu",
  "key21": "3eA87qU9N3er3uUjmY5aQoHF3c7bVexoqu3uPi7yh7L64r88LBnumgQuQ4UVUruBuuLSRXKw1zZz5z3E3hXyb9tC",
  "key22": "3qE13Pbs5mafnKbF6ahSmpZgBMc4QkGmJ8qdrmegiBKzVBE9LLUvcELr3UHHsb4VhXHeGXzNzRJ9z8G3AkRT6Kkb",
  "key23": "4pwpd4JW1mNi3KmS73MFsyy4Twx8HBpWscJwabbN3AziBP5eEZ4dXoUQovstWPuyxVj7SoJH1LydEcbaZAzTzvNe",
  "key24": "4cdDoGmifhUrgBeZjuxjNejTccKqFPLM1AbTpveRPGJDbNeb99sTm8VAbW7AG4Ba4mTZRXASgDJ18EiVnxzijrsW",
  "key25": "621QipuAXVYJSfxPpDkB3AsuATiy3hytKuS4rxbDnB4Mdgm9JoKAu5gURthng4LLZvmxAMzHQepSDRJ6nqBHDgBe",
  "key26": "2yEQmc9gvwcBdcKKNnGUsCSwTkXSyBv26b2UvFEwEgLJ2w5BBMhTNtbbZj9BzgUV1vyzB9FkykWDMP8vxnkg3ptz",
  "key27": "36r56vWQESW5YVbEo4PARG61q8LN3t448xt2Uagd47W16PkVGFBnjqvVs8EotGZzd8fwFEfMZGRiLZBwqKaVjsUR",
  "key28": "45MJppyUN5AwUd3KRMtD73v8bGhtfYw4agV1Ca7KeSFgc3hUKHEjEt4sh3cGS8HBXdmWGc1Ky6URMe3Cw7MDXw8b",
  "key29": "5c2qCpSLCp7VXvwxu8N7yvPL4uhrw46vyi365rSJyDyMHjhCRDjDyorASPr9Hxj1EEdK4UJqZfeVGgbLqDaBPQyA",
  "key30": "3mq5nJWSevkkzs4ucTZz1u2KhRbg5ejbAZ3VQK5QzDtJCFqTAp1csMNStucyNjUyw4GrMgzYVYfDHpH4f7U9okqd"
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
