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
    "5DmFCUWBDT5aJniVzKcnRNNcmBcP7FtzPV2dCvRGiX8XFS2yR8GCFfKAn78C5oQfxXsN7UX8yxHWh2XMxH88spDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3jYUjgdo53TwDRM3wGy6VUKbdwApJEJUQuqt8xM6Uqizg9Ry3z2W2chCUXiWmTdndiCofaxdLAff6xQRNnMs4y",
  "key1": "3AGaxh5t9QEoD7KXPxnqzQaeXqgfbRq9uKPhcMTLaPNpY1BXTdK2eeeCj1YFyxL5PpX41TRYiZCJD6joFX872Z9h",
  "key2": "5X56QmwetXw67KuwbuXxXeWNymf4R7517i6Fa8tajxYjE6i9VV6QbbZUFP3i86A3FnQh1Agp1R13Mnzdkg8NCf2s",
  "key3": "2U4c1m9z3oyqZ2fVEFLQ5A4jRgpcTWZMSJ2RKKoh7oQ1MujJTV4mz3TFAz8wnUzrF5pJ6mJZYTRhn8Gg63xyfDE2",
  "key4": "38Gg3gXWhFLx8YmYEGehW6wp7ZmdwP6LP8iDYUNEbvm4FK6jidg4kV287XzmD9HmLp6gLaYZit5g51RPUW5gosMb",
  "key5": "q5NYV2q5AXu7pmcyCuegFVUbDPPRTYTUfCeGeb7b7sKi5X7QkTJLeXPKEB4oHWmZj3XjUkXEHEJkGm31f6FBrFc",
  "key6": "3y4A5nnnnAxtng2sjsGLH8SBHcJmewoNhaaYDP2RmWPy75xswSw372Gsc68DEmS6BosQqJZNmJxRespTRgbYpaHA",
  "key7": "5XjWtusPVahwEJHQtgxBucAiGzUgGTDEpY4nq8m7XDDWGV6oCJwmUcDrTXZW98LESPAZR1DTNTxYnvJ2zL85Vg8f",
  "key8": "4gcc175FxKcxorqYaeiPQgR4MEQynm9xEf5mAfcem3AXeiWxmGWS6Fka9iiyVM83qnc3NMK2AKypwueFzrQeBds1",
  "key9": "4U35gQ9HzvZZYTSg7PwXXfuLZjNkCvxhz994iVrpAf2ndi5ZXtSZu5w3zSv1pWLE9iVirmT8Kaw4iZKS19Gfh1SL",
  "key10": "2eUuLN6zY8RdcFUTUBqoKEQY56kPX5tb8MV3iE89wz9WYkbg26By7jeQ1jmYTsyz6Vc3sHdNLgUjU7bf1Ks1osWD",
  "key11": "2k71bBU154gFxtteuZtqTmVYwk3GvrwsZkvvBPsw41MuSfLx5s5Czdb8MVc9Rp1xvyMUj3Xw68ytP8rw9isuWq6M",
  "key12": "gTxvMZKUtup9sqfyV5yeioGNFfRXdHXSJdsw6345FG2tss8ChqHRkjpZaJP1to5YZqHDYxeT7Doewa5EyiEnFw6",
  "key13": "5yTa78XAyX7wCYLTyoPdrcWtcwnnDMyjimLZZTMaFeQrCD2hmPGyfayGnPmtSUdT1D4afSLUbFfaCQiD1TihM5bi",
  "key14": "4n925pKrj5PtR2wu76wB1kHdmMmW2SaeQR2inrX41gJW8LAxv4dHpewUHoP8SCKUyXrwWhWS8ZbigyuhkR5fAev3",
  "key15": "5zJP7fZMLrL3NzfPwVoaBE9NnPpNo1CbszHd9Kn2kJyLgwrZ4FbDE1Wk49wYeWZ8XcuuCc1j4s8JgEy31gacqyp8",
  "key16": "TBmefvqreeBozAYNAwmifdY519xiZ3LJu8ekyP3Hfr7aoag1NZsRJPBBBh3im1RM7W53DB3jRmYPDwGS2eSE7Ag",
  "key17": "5CK3NTE6q2igzQbnHqpATVDkFpEJh7fJWwbiEsyxt8bv4ht2jiuab9x8ecRw5e2N4rpRY8y4aZEqvcusuLaSV1a7",
  "key18": "3eJjKQp9BqDczvprLaDqNLh2KhWCGq6iKDFLNrggy7mBc9EdQbQZm58jdDju598UYoCN4AAGjRieaC9FUZFjSiKa",
  "key19": "2tvEcA6gQg7oekWWjdBeXPwmiRo5P6m7wp2zAWU4ytirLvPcw49qfVdBWnFQU29SW23Y6xurz9wLRvBdZADUuoCT",
  "key20": "4JXzJZtBTQDshGxKcEDc9AncbRz8hjpsGmrbDqUkdU99xgxWFmcfhduFaFjHmp8UnAst1nsabtxpUjmGf2NRNTeS",
  "key21": "5y2pMnXkXuE2oeamv4uePFnhSnPqMooMJtuTSAJnotUnkteaMx2EKMjUQnu1RN9SiwKyyKuT6Ato8ZK5nVtoJKje",
  "key22": "5a7MDurYT8Gx1G4ARLFHNupGqGkgnPGMJgkjwYAefE1GUh5n1ecjxDQvNtDwRstqLEDEFhcFm229oPKxoZ2LJeHA",
  "key23": "5djjsgdNYC1PpMHvMyAbfg6k9RxrfHtBCGnfsJKrNjwtwmf99VbsZzEKtwpf83eCW3gSPvJGviFNVbGTQodLsp1D",
  "key24": "msPTfPRhALuDFRaqeKVn8c8xvBxXxmjgG6Tj2fPbuY9cXdHMsTyVwCTUA69eSEykXFFTT31azVrWwLo4h52srG9",
  "key25": "5UWfC6gS7DjrBRBad3FsG5V66rZtDPTb2ywg5GMPc8tiFcEPynB9zVGkWbysDbZJP79iL4RfSkq8otrYauD6P92S",
  "key26": "2JPUukXmg85EujsUs9SnnusnAtmVJHKw9X61QTtMYbLWviYBsBE21xYmCiwS7QAUjfPBjQ5pwxfg6EpSQr6Myy1j",
  "key27": "4YkfRr8gHHfJrrsWbWtUTPHxrvNVtKEXFAco5vuxcnrANgHDyh3mnHNL9VdKd1TW1pi3ftxwFBdkrcJcPBwuvZcN"
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
