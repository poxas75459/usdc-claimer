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
    "4NLxAb6ZwkoHZSsda69Lo2PJwFVqwxFMe1KQETq8qYXcafrkdqXdPemsC4qTVHZeDt9ymcPUWgiQA9W83b539w7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTyHUmoKnqztcFjPtE6uZCJrdJQZv9JxznQ1ZHmfb26mdehbxRk5oJBkt5qcNDMAkHmBKCiUv46xGpd4r3towct",
  "key1": "3A3k58AKazRcJmvdtk8V4FcC6MWPgCmQ8DDiLnfiCy7i8kXY8sbEUNfcdphs6Nahzs7raFr5cQJ2qAr86D8cZRjB",
  "key2": "5Gfewzu8nfgdLbDy2Bs2ivBTeuyoxdGGHW3zvswWotg68DFeCG2NCicWddhh3gPamY3RGZM1exbfqQfd62hkEj46",
  "key3": "wk1rZPhyFptTfQXLaBatTsgxEUftkQB9jwVx758aghb4S3Av9cQTW4HiAd8NP8di8qL8E2wnqqgShGseVbo2CAj",
  "key4": "5Hh2fQXajXXbhngWLsP4xLqafWNmjtAwrg17QFYfv8tgP2PVdhgBmyuxkLwPFJHKVxszor3WHqwMmwzAYZQ2VRrQ",
  "key5": "3gF7R3n1jRCUEyzhkDqpE3hVRXXZu1aReD7dNGBPEMRjmKrmdmmjqiJWorHHKPRwCN5TrarsCg9bUSPG2qYpJtB9",
  "key6": "27NsWTDmm1FsrsTMXKUwGePZAN2FGGbywZbnKEF5uvLM4ybkL1TwanEpbDULxRWYxBWS7esBUd7jBP7Hcsfg1gJP",
  "key7": "4h9fTDZkpQq3U5XyF1MRa1px1rXugRfdnVawqFnbtjLqFPXd1dtw4uqeLffE6fVhekatd8pMGCWr1f3MWfvEYHdP",
  "key8": "2fSycpyrGwgNNHKRpbJcD7CtVbe6iGTYUqRnqfvjyfzfznipQ2Czraq6WGDjwjoEWNTwF2GimuK8oEYspjSKAXTS",
  "key9": "5hX8MV5ahwQJeXMTLmVhYtwcXJtmoRpBi9nyTzcUvEHqajfkCaFWf7JHATsQLrHDjSx9AvGMT2UJNCT6sMnFdH9K",
  "key10": "3DAbQQi8HvfXWLMz5hQRJPoBdebuF1vaRoymgLfrASXBfLPKR6BwYtmUEoX3BKPLuMaHRJqfy4ZjZiwFy21jjpXX",
  "key11": "2nYFbUCp9RbdYWcMgGfJouJ6Px8Q4PBFNLgvNN5jx1AF3YorFD1y4D7Ta6xpVRUg736ttWNNLNY3rFdPZiEneFtv",
  "key12": "Yoqw3e9c9VXN9reNMz3vnVs8bzfSdz4GaqhiMJTXvxWZVQK7w9ppYSxrT78RkebiVik7kfQadMn2HwscC9Ph8Yn",
  "key13": "5qYjP3kmyanFU6vshgJjQGbaZ5ihKjWsR9F7K4zuDiaf1FfMs16ctwCuYEbLUVDxeQJyUBonmVE3JmPt3mawzaSG",
  "key14": "5nfwsrQ1HaZdw42uWjU4fehYqjJ9QtfQcJ3VfS316KV4Fx7jeKjbcC8y81oRL3fzy3KcJforTrPKN4EEJQZSXEHY",
  "key15": "34mv5n6TRgEpmPYusBwaUBrKW6jrnE69LAnaMn5yjMrNrxAvnYbSE894WYj1YrpfUKnD6t4Rn44S5HnLji3TtZW8",
  "key16": "931obfHEj2D1Gcb4chiM6rbFvcC9meR8iWUqtGPTHFPDcL8vNYN38yNWuCQ8YviyFxYTi367o2sig8pzVGMVqJL",
  "key17": "4hVKdh58mpbrSWHbgVaVBbwXhaoegLFS6UL7GrnrAXz46ppek6AviZ1S34bYRD6PzFkRwwFeBDoaB6KDA4dmPwuG",
  "key18": "3XBcvajc8XFSc1MnyQ5GMhqSbuw4R21C61gMt43Hf4a1HY7C4T9qan28B9L9fzbhbT5zzuv72UKbwzXcEAGyuoCa",
  "key19": "2HPCXcKvMKj8vbjfZz5Loo3eji23dLEK1FdTqfAs9gUPuxCNa75yYYWr9tfaCyHXVrZmVv7DMSQh8njJa2XA94FN",
  "key20": "3jLFhifQq7ybz4v7mn2AR3SnnScDmtyafLCUJBLBmQo1M9Vts4vNsiXSC79n5fLY3AA68KBado2FZz1xPs2U4P97",
  "key21": "2F9wPdBN9S5S7LJzShdHH2wCVCemqfLrutULgZqbFRvy7MErtp1FZBAAhrHgrGV9oaiHVGNxodpeqiuefXce2Git",
  "key22": "c5T1ftkDWH8PfmRNRiF86A2aXqfuWjSqaocox7kJPrYs1LNWGZkCifSvqZpdo6BTVBt8Nc6ckheuFfwxhKgzfjv",
  "key23": "5eV6sReAo9wY3in3TwSh6xwfQCWi3DPd1QWsuymtpF1C2uZZDgRnp3YJfwdRBjFJtwinLH7MoYKKMbepoHe8gEeL",
  "key24": "417TaJ94nkLPkUfam3BPYQw57sY71mqGHLosFrh6r1pEHdcBL69yYwDK36UYUTLrpPAziXUM9FM4q4HBmyyQ1Uog",
  "key25": "JytgZXVJWBuQ34oyR11f7rEbVs8DNRUCmQhTgj8gTRLTYJM258S8YNeCeakASQCnajbep7GkXruMnWRc9QaUyRx",
  "key26": "3aGzvrxZay1h6yHRnz5nF1RXJCqgWnuYZmWPMXa12gkRJQHU27BybemjE3KT56S3L4HQHo1DnCFfmSPt8uvCqm3Z",
  "key27": "3jCW6HYALBZfzcAwR2HBRv5aSU2zmJ9ga14TwAAGadDcnXKvPQqkQj7bj7NUM9gqWzjsHPj9DFu2rY1ZdkVfQYCs",
  "key28": "Moz18T4GVc3x92g445S3Ajtd56oif4KbTEE3cTQ6s2fP6HNnSWXfokvWawhyYmauszFXrmpqebqSPr3U2i8rPrb",
  "key29": "4kBVNji8CPPzhrUgrmxSz8a3x7UBgbJSSMpMgFpnMVbmdHyJUK6M3Xa7N9q7Nq7xWkpmzB8rdvwYDoRd97PqcJ6i",
  "key30": "4v5t1TGDgNzU91wqDQxbqhBTadx58u7c5tmz1yxz1VnoPbRdJRFLix4N5WxwjYEMBexYShC1YxgCst2UK1ym3m1y",
  "key31": "5wvrww1mRL8y6RMkVjRgD9gkFj8RCCHDLeXBaitahMxqSQ6CHkjkFZSh38y2VWvCBng9KfiqES8VnFQYugB5D6bN",
  "key32": "3azco3enNgDzfBJxhmxqzuSbTtbbqyx63XxvMuJcKGL9Zym4aKkTGnacDkrHHScQE1wCBmad7Z14xmgmkEiiD3Uj",
  "key33": "5kjtSutrNRU7RaXmF3ZtK4bLWy29GEq9GUUwXFgRN1gacsQV18rsyTS42A5Bq5iZtFt5vqhJEp5pJ8qH4zJr1rKL",
  "key34": "4nJDMsH16qovWYURs42oqiKDkHt2DokrZVaVnn4DnX3baYexq68TSs88R8E8P1HqzToeQQPTzYU6uCSbHaVXkamZ",
  "key35": "3qC8e2FfwHCYYf2T3nY1GsFW9ThAS6Mv9gequQTXcqPHu189qxHVYWXCtzdyXLB51HGLKThPBWV8LYbrKMq3uWMD"
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
