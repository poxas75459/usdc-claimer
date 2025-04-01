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
    "4ZjP7D7PDJh4L44KQ5FULcoysG2YwAotvhybPVrLViG96QHkU1fe9naB6uAnViGkqLGAmupkhMPV2cudhEwWNp3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bg562141AcXKm5PRZbzqRPqxrb7atUeP2HyMNT7vvzMoSBPgJbR6XaXFHCC2wLENdiVu2jwtYfrZwrLvCHdWQxD",
  "key1": "2USAXxhFHp1ueK9ar67YCMg3gbakR7QbDKeotjfG3kouYKNbQhMEDoPjBvAr6k1Y8MuoCHQivh4Gg9HtE4xzqoj6",
  "key2": "3TZRXS7DZJEEM7pm9rFG4L5dupVoTWV3sUNGgsHA3BNCzKLJF11if2YtX4tZTszmvThaKryyYSQDGpQbTxazY4Z7",
  "key3": "3sbA3NNh9Rj7hd9qQoBrw4n38UyJtveRomnN5GwUfrabMeUS7QKJDXL6dQkXmZpuKjDS6RtQQZqvtFEkVKhnPWfN",
  "key4": "2QBm7B8mK73R9eZcviLfNQzMV9gtwdvhKpRXB4AGgY8KerHepMBHxfAvJd8VNHh2rNP58M1Q3TiA1Q8qFjoeWVYF",
  "key5": "3rd4arqXM1fjnuRX91HSx7Fa3u34JSKyPibsQvHwz6YXn9qXNLpAxojCLugMPvVZoBsvjqinBjB2GiEqKrD9LKv7",
  "key6": "3ikBUUm7fyuzrd7tR9JpysSQxCk2xQDxajNGCwsEAve18MpnxEwaMyHir3YV8nrDzxwnEN8Mdwaf7B6zMh9Yzxo4",
  "key7": "4K325BTjViF55CM4cuoU8Dqv2VrwRycGCQznfYHqJ6JCwJaNd7VXA79hmoVzSaazFmdw2vTiNefh6ZkA9XnMUZAF",
  "key8": "tvuba6SZjKVFLnKBKhgeXhiAWJvEVmwQPENGzN8EJtj2HAxYVKBENpo1cBCok9JwVoias8sHgBP9Bnn26C4b4Zy",
  "key9": "54Mqk71LQjEaXkWm8TspeoiVRW4NMMY6b5ECkvJ5YwamtbEGEFMSVmSSYTTyAFBSycRz7KiP7LK553juPzvtvEFR",
  "key10": "2cGSvfjKtQkKfFkDNSLbeCG93LmZya97bKozkBZoUUHddnGKiLTqsUUZa8ZWjwXp4tBaHXnBHWMxph2iyJXpxN49",
  "key11": "4J5UYy6GmjBvtd1r3SJJqxYW8hNM1uBBvvHUEGic5g1RGjmmVqbijH4a7hmdCbZVjUnFac54Yt6wZMxnxSkHf6b2",
  "key12": "2Tf3y8bXSzPCk48Z8rD2bi2R8rR4G43GyFquiq6cYSdv3N9BmKVRx7EtEsQh8jyGkkehTHvffarM5Tp7DZhqFavQ",
  "key13": "4zgbSNTxfs81cr5nZv3S7YhaZjiReQhyef1cW8QSVAywdyPRiKPuoY42Jwbs9Y1BZjDT2Ed3a1ETW382mFXCgb7L",
  "key14": "7g318HSBn4drYg4H5BYCpZ7V3nzL69cLwToy1mmgnWmW8WS1tNDQi5xu5faCy7fwSevUvXHmQWsiMfmr9zPBLj3",
  "key15": "47ywoqiVwD8kGQ57koUbzvaYwG85KN9uhhrDuC4XXCgB37DwdtFsUcaP62oWgmmwtcoF12PrFFewCfrM3vNLc17U",
  "key16": "tZFwDxZXN4DoGGouAjTPWPSZmZTLYVcFUUbQDwXypWwrUctD5jEuHJmPjrKQQbYATutora1RVkfEeAXrZFgEsij",
  "key17": "VHaNQVB1ESsq2dHuQUuBftAuFojjVDFYbGFXtB4CmG1bKaedAMp3MwJ8aonZ6C8RjKsVn2DeYTcnicykJn3xLVJ",
  "key18": "rSNB9QvD6st8AE3sdDXpVtnaTmrpFw1VPtsHGJmoV9TSzywTYAPsVFz6oHyeUwsuHyFQGAU1MVuxpWyM9FVtkCT",
  "key19": "UebDiRPDpR35f79P5A2AcWsXRRz9KVqVDcky13DU1trA6V2DEuCJTQSNmweVymQQJT2NEkLkK3e3BEFKqdFC1ti",
  "key20": "4277reJepgJ6NFoLE2hukPRcQN9h1kAsHqLbqHa5EZ8BAw7jJnbnCFRyN3agv5FnTzfSgKuCPn7jNExaMuHEtQsc",
  "key21": "MEHkVqzeZTx4TRRyzeYLU7obUJneDtKQghh9HccQMpi3bcSZmX6iikpZenQ8CzTpDTRMpqFkozqvRQnNh2Nm3ka",
  "key22": "2DVyyCv22MNnAKPfF1CGGJ94U1MEKAYXH2SZKes65HPYfpuVCt6MsvK3cXpiGbf3Y3tkUtybwAhBTrKcF8oq9unP",
  "key23": "4qceiw3YCjouBjKW53Vf3D5a7KVCtcNoVxCvo5vnsUD8vuPsB45HTLA56Jhp6g8JSZVobkvpxf4qgp2ZidHQc3iL",
  "key24": "LJqpojS979GiXvLSPacUELH1CWcdbwDqQaQjxaz7Ttcq1sGdx4gYzvTyAyZZqkLDZJewGo3anCT8xaMgePUELfV",
  "key25": "4Fs5Eigga2vaBwDqRhfhH19YXmjTTrLkJQ9zNS4bgwSfnRQBGHyUVHX85R2QE2jChPFZaURgfJfFoB1f47sPjBSU",
  "key26": "xgRCFMLRqSg7KMpSRKsh8jpxpkVFVbwv9gTSx8XEn9wAp4VnuLRhXeyXrJraczxPcW9bxRTwkJkLksWyb3K9UHT"
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
