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
    "5Ad82Mw4hruYb4UWPy1ozTfLuQsDPxHzdpzWEMHVB4wNmkcy82yN8mUyo3VCapzxc1ddTPBF9gyA83RXUnxER2m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwX6X9DCWb6G42TG9RrW2TgNLUK1t3bHyRdw414reGPcFsoynpB4bmTKE2LR6AzB5czLoiUYNen7S9Mx1MefPVu",
  "key1": "5fcbrqnnUwNpmq7VP3nHGaNjZBFz6TLroYx4QSU1Ps6bMPwRmXsu8M1u4adQi4NoKRWUMM4q9DdNuXvXMfwChLEJ",
  "key2": "Nc83Y4kb2VKA4SBRXK4CnibTZLxnXaSNjmkxPBEUMZS4a2h5pobkravCrcXCBbX29fau8yPomxQAUa19TRntY2v",
  "key3": "5pGv3aDHRLda9GUs4xg76Tfc9CmzizndpenRoaVDfxdRLrWwvqcYqBPcUAEWxUYoL2XDU8JVBtsaFhpTkdaoKiwJ",
  "key4": "4Ca8tGroYuRXeZDG2H7E3i5RkkCLW1SPWPXoNs6G1r3Qq7DpLmmRsk3tZ22FTN3n1va1Aqk44yZn6g2kPCbjphDQ",
  "key5": "3cCC5NQNX4EGGY8S2Bxr3mzVjncZHNfUQN2mR2mRJne1ujpBisHZELg9FTyCqThFjxUXuUZd36xu8t1jp6YrS7h7",
  "key6": "3tEQkTX5VPy65AW9sYRKsRV5Dbrc9T6s4yVUR6nP1abHRQVYt7RaBsonzWvWjThxa5gbstSpzCREF8T6EowQjTD1",
  "key7": "3rS3aWF8eMKCY92beHn8pMVCwPJPpHcKQVkNg9jAhBJxwLEPNtpr3w7A2FhpDwBsJ4CBgPq6CYmXdW65BPgtPEju",
  "key8": "39wjfRhbhnUmnte9p18AjNtH6AyZBJSeXzejVhm9wec1shsQc6r2DAAS5uY8HSxjkDqnwEMENJnuDiwWFonST7R3",
  "key9": "5vp3ybQJgUoPy99n94nSPPhxWDPVANrNAwjsMUa6E477mBEggmjjHMXUZpJs1rigdUvwizZPchvse1T9W3KYVG4m",
  "key10": "2wn5pp1EAcgiRGifTRFBRG99c9SqRxfdh55dWQBjvHAaw8vhkXTTkeS77796STw8pH6CZj9vpQSbi4Aa8tX7N9YR",
  "key11": "4pNqBbswVzz4D8bsSWXVtd6uHrAsHnEh77R22JEjyq955TcjMz859eQHab4vRb5cHYV12V1Vymb7L3mQw8HZzcUR",
  "key12": "bBi96MZ1aavzavRvW9az73SYJFjpgs27goF9m12q62CLsVWSzvSKpD3XqS3b6XefSftrEtJVs6oTt72crmkovUq",
  "key13": "33wzR3m4A646spDE1GuZtZg9jBShEeyyNAEy4dVBb2dwjjqRvuorL5PBD8VyQrHsdm6YjxoMZgqZzuEU6XqCjVBd",
  "key14": "3DqiWxJNjr8BBb3U3TaEfZp37ytacbo1WftVhXP5NEtNhxKkQ5ZQTkmudBUXrEiXS766joSvasvbRia2VWLEA2Tz",
  "key15": "5DKKvtDo3mfV8pdnN1S1tYjxDUEK5TqZ2ZCrKVU8n9zaQKbx6pD6uH8VYjtzkv8r7HEfnEJGft6thA2B1NZ5atzz",
  "key16": "3Th1LFdwY5DxrfucxSzbHjo3yKMaS7XqoJa2xS53hzV2P5eAcjKAGyFefD8nFF3kz6o8AxDjWm2yMmCw7iBdHhXX",
  "key17": "3XaobK2hyTa8zGrM6yH8m73YrnMnqVfhqGmUahwV3DxzB6mtLpwTXBAPwbwv8rVV2gwbrm5zevMRvky2wvabeM9L",
  "key18": "66qqeiGsmdKWMbUjHdeRKEDPQfDR4MigGyabGtsfXJXA19S8sev1YF988qaN1PHP4vkvWUK6p1jK2vPv1JRriPMp",
  "key19": "2wE5corREe2pdiijFSzLk4xv1AGt1C1hWkaeNYCdRkSQZgic4Zvi29JoE2dbxCb87scnPjqTzJVZBx4AFXCoN4Hh",
  "key20": "3igNLuGbrB9sXxA3gLzPo4o6tfN4e6fZ1jnVX43ExuZPgTBDUra8hgf1qHLPvXfthxPrYxaLzq9sLagG722EpUiV",
  "key21": "KPt3jckZgMtF7gx4AKPH67AXgXzBedYzAF6E9ukBXYQHtfX48MRdKDRtxLsqummSxNr577joTZESfqBvh9e3nKx",
  "key22": "3o83t6wXjtvw3DmgsFPMECLi4HmaotxhAYF3zrnMDsBLc6wxWUkxdqnS8DUof67S8dKGgZQpbAoP8zitCTpsdXNJ",
  "key23": "445tqvXqVPbgYFC7y6SxvsBVezstF8MmLsAVog14yufwpPC7rfNnHgtoWTxtgiB2CqBb5Yj1wdQ3PN3peHJNrqx6",
  "key24": "63DiiEtrfKD3CL9VdvujdHRx3A8kjAkni9EvVzVL6iFEGNeFyrcwLGb4YU6iC2tk81Pd6k9KczW18gRcreKUYCKC",
  "key25": "2M9cJmp61v2oo9cp7LN194RnCEXA5YMCSDc3XHzFGHBzYW2TCSqQhmLHqny9s4hA2tnv7BvEBNsDVbbBoyj8QrWE"
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
