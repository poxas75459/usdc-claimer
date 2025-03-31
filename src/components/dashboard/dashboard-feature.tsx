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
    "s7nSNBStZ8tj98kRZJnnKRiQt1ERTam42uLkTaH762ge1NQbEVMt9RiT7Mr5JY4LeJczvkho2qwq5tn6EdbafWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7u3WcEUrdrpFHxNDb2XVHdn7f9TfmAC8pt2YH6Q1PWQKhGWjbRzcMiDvsPTKm991SJJZ6MN8mHJEJ5VHrQwk8d",
  "key1": "3JoEMjo6bD9zpDWnHo73v15wP7jzkAQNzMcxNtBiVCAKbgfC5AhXabdCcr2NVKzaW6oE6BNTP3UF3tKaszCWdAkL",
  "key2": "2N5qUSNjwSwufpdh1h1tAkqzK1wZaYCcJEzaXKcEbCSgAzKxT5FYntSG8DzxPkk3tA3rXin2oKVW6W9Cn5j1L3P",
  "key3": "5KdHfJHQfArxrcaMFoEjRAn5MgHcQ3ThRSnjYP5sE5umZCZK6aEsDAYEvdysmyi1rFuQZBpe9FxyBnKz7eQBFUvv",
  "key4": "3cHrXbv7FA1zEkkg9LrXUiKMdzHErv85HbaagUtJh5oBLMRHYYQhVhdVFcr7HQJYEpBas5MyvXueWwMMSEXYyUz5",
  "key5": "4y8LQhPWNUe89Jj7X6jwd6QK3pVUfjxWQm6QmrZq4qwanFG5VnUvxksxJ28ANuZNWWKzLjS4XPrwD4uAVT4y2Gtj",
  "key6": "44qKcxgLnEpgabjNDC4gapt47CdEy8nQhYHynmbvDGqa2Rb4xMrNth8ve2681MqGGs5S9DQ61SMHBsSPeysvMwh9",
  "key7": "2LQBZMWLT9Pru7NNGxtq6MPagr8zTpQkMgAKGQsi8sztR52xUHS9RnutV4kdFYnNqD537LKokjqG3TUqD3gEGHtv",
  "key8": "5JZYm61NV4WB4WUcwwjDyB4agtmrEissbHtCpzQ6E2oiV4CuBQkAqQfPGTt5tNKPjBPZ76rXKKa6u2w6BWvETXPs",
  "key9": "3LPxTRKkczRiXobNXv9oJwYGAqunN3XYarKmbumrTuYoNvUpb9QkfHE9dGSYzKkkdWJNGAmNfi7V3ZqRWXHot8fm",
  "key10": "2nJNAxXPqr6Uct8GYm12dLuBrBAW8e7UXieAWPM5wZ72jSdBuNHTw1iB6ErKHdAnS2NYSEyoKxWgTZ976YdfEsJh",
  "key11": "2G68mULeCwX2swU1UPMWNFbjTm5VmVtLUsxveEPNr9fbohyc3VAHoN6Jg5c6VoARDdMAddqWN9cmZhyVo1ASLD4T",
  "key12": "5EQBKk5ePuuhAiJmuVpb7hx6U6R1D9DELg4ZMPPEbkWu8sHNbUJtRHHsc8AGrMaaqrJ2KNJSDLmCpcvEXeGwc5Ad",
  "key13": "5zd9AxmSQcNUdtkoH3YdBpLNGAoXXyh6PdJTrdyjDfQPBbXaoWEHpNrmtXGCecF3FQbrdWbv8Zn5P9Wbyc3PnL6o",
  "key14": "38C5QdvQbndsXRpzUuknQ3kFc8H9vc7MjXD4HqHZHB2xNM4stevseWD5EJX6t939iaVBufdypNvk4K3k6k6cyHv3",
  "key15": "4HCwPSjm3FE3XvEkuMW1wGS8sMCc1q15ye526CjqT6GprtVZwueoje14URdP4ei7L29ng2VRcweJiovyQeHW15Us",
  "key16": "2AsYTUDcS2C6S29AgKcjbNk4vmrRP2yPupMY5nPrcGmmyA3btuMsaU7T6S6c2LgvJ4BCh8cuzir5GAyYfwrhSwwo",
  "key17": "2sZ1WtYHniR5rH7ng1UPKyu5qWV2z3sSEptByzXEGNX9uALhM6Np6DuiR41uzbVMukYThijwCEz7CzeDeFwQMpky",
  "key18": "3qNZES7mjERvt5YyVvGa6wUeiW4zuneVMihJ3ov2kJQjcZTMZdHP1Sxo9qfi13HmPCsiHQqBpYysu1Su76jYnDmR",
  "key19": "2PYiesLr7Nj9QGvJH8ya92JJeP4QRvbbC8bRhQV8Yyp9A2Uedzv9HbjKMY1V3ALonoLzjV5zPua2JxPghRghrzrv",
  "key20": "5EhgdJ9ojdmwUAV55BffVjAvJTb3GzL7HJTkia23a1vp4op5h6NoYQHfHB71yLybykSZfn1mB2T5qDAU5epoWwor",
  "key21": "4DgLrwzgsFFCeLe6stE74usgQ4fdTa5pZRfug6D5x1mgmhtj4Ez5W16C1TrZAsTXD8BEUvhLCrqffTyKEXSNMWiV",
  "key22": "4onwKMUBAPMEKo1h9s7MCoT4hHi3WDUsJMAeq4aFAZPp78BbKJWZ1HVvxgb9vXoerrrMHWDWZc7UmnEQ5EEJmmV7",
  "key23": "4b47xQrQKz66knastv2dPe7ndfTaHncf4MNMzLUPAJeZ3vTMgHFYvGvPx4F58s1V5dRkKe4CnQxRTw6BREy3HCYP",
  "key24": "2Cwp2oUg9BX6JaZGTyoKxegnpeGTdYy7doc26g6yaAXgps5vuMy7U5djQdWHmYZMwKbFuHRLH35faou88eAbi1Qa",
  "key25": "5kkYnrQtd8YNqTyKiYznn5ywJ4stPC1sRHLeP23kKPZt9vmk5mg2zM5DcUYtGuQnJ6oAh4C4tL7UpqDRT2r5GPkM",
  "key26": "3ueKgHYFnYK19J14cP6sgLda22vcdhEuyLDpShH2fdFPuZcPgnBgaz8qBtJxEsuiD8EQu4RiKPX51CeV2ozv1KCV"
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
