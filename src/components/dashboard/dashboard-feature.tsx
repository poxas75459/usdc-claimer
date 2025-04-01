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
    "3iDfn5fgrv3hZaDen42eUbaSXJBxqNQQM41De96yDik737gFjcZNdV2DWT178rPwmdhdcMjtG79gP1DjMmyfbBvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCaZX1cwSEs2trLWQWFyRqA3Vt9zhSSSJZqAs7nZR52Msq3NxdJeZTTwA3b6DPUXAAZkt24zgH1bvVoTpPw6ZMS",
  "key1": "2uZPXG4hz3NS5QCBQmZs5dVp1uq9HDrQQ27chtH4JWC983R8SMYQgnNVLJqFwgcknDCQm5PfvrRgHjcQJArGvPif",
  "key2": "5rKzMdFRGzUDKE5RSbWgidm5vyb8nuLr29esyfF6HLXDvgJeaSQ3Hw2vo3uEiww5xxHaKggjRQcWM1NqGG8x8aHc",
  "key3": "5yc3bKMgg98hLwGqMaP5zY4YEzeEJUrSbyR2Ti4vWEQdyrAnqeXbKtvSZAgRs6yeD3Z1HGso7GA2vnu2UE1rT6B4",
  "key4": "13agLpuckWDWMSbXjbyrDGfn2DwPhfSpaYFukx6Urv48vR5mkT7JrcFUeCZBgYsLkZtjPQXuoY1RuD4sRinRWMC",
  "key5": "4xgL5ruUuKTxxhyrkBH8BwEbMqAQhGGQUNiz2HzGT9rJr9Lh9RgRiXDv6v3UyBNhgbxRgDj3WtQ4W7wykGs41PCg",
  "key6": "pfwofkBbqpvEmmW5Gi2kC1xkhkCixdZQF7rnqC9hv2D5EwmTxxt396SSKLCzscKYZLinhR1gEnqhFcZdJqwirZV",
  "key7": "366j6Qo4GGgzdNNhMfj1EY2VGnpvQHSRQqhkKiWKe9EYDeUhpDqNArNXWKrEZcz4UPwYtMDrKYn1YKikCJDeyoJU",
  "key8": "2bVB4BfDwhjTANAhHDEVoDQapfXAPX2m5wU5qU6eKGWEHeSMMBtMPkrJjekh1y7x5ZfxEicP9vATBZkm6KnTiadC",
  "key9": "51acwxHhRnWRkHr1qs21s4wdHhTpy42WRgGZHzAqc2EpdSAkMyVxP6pvq6fFV8mUMBvLh5DNgkDvdg9yHPfnoXbJ",
  "key10": "3ZH5gx8L1AkAgpiRKBtZp4MFmyxQEzvQATimJduQRRX6Y5F4Y5btNSbAoPtqPsx7gzuA9kcJqC3GcuVAqhYhgTKr",
  "key11": "3RaFQVy4hQCLqtjr3vzW62FM22kzZRqwL3LatHtZY83ejAxpHALCCFQ5wjziAtHDUe3AKKLemRYfYhVmGrAi41RP",
  "key12": "4yrXVbQWyukiJM7zPQ29H6X6b3eR16xzQrmsccKKwZ8bpQ2wvaMTVtFDqfzg4M1zEJht8TiU69GM8rdbWofNMbew",
  "key13": "WshhqHStzT5qd5Wbv24tcPtyMzEeenquJ3nG2M6jam4WhpftTJB62aNaA1nof18adLntAwGN5FNKYCWZCHZw6ws",
  "key14": "JZFeHJjTxe4kcg7uscak2Qn6H8bPPAdjfE1mNwhxJTdZdE1DQ1Ton4v1KwkFDMubDHJspj4gq7rfE97BiAdxqzW",
  "key15": "qPrA2Y2qbTCoXFA7AjtmznSJcRmoHahCn2v44cHtcbJ7pAK7nqdJGonRTRXqwkp5ENWo95YabxWVZHwZsrDbMP1",
  "key16": "3mdHqDPXje7Ah63bLv2ttGFogMHkR1Fn9hhhRrZxHqRsfJjgLBLoxhi1rngNfGzc16ozXibJEsoFjeyXboQns5L8",
  "key17": "EZ8E8HuQwMGmTTJbbncTWBHZ6MDtRrRZkAAHjZnkyigqnUEhuGF9LXHdfKkToFeMJqCey4uoP1iBMQGRXcpbqHB",
  "key18": "27CHWbZPPj5w79qS66HdPZtWEU7CQFj5KmJd1vpfP5hNGFcW6HnJid1dCoA9U79MQB43RMnxeUDi62kcf93AW17o",
  "key19": "2Rnm9Z1N8gdQyzGBSvbhbva875sb21K82k7wkHmLgXHmhoHu4GpA2cEiEwpXQHHCpfP2ZuYRApWHbiCtGoE2Pvvt",
  "key20": "3iYd5kyZdSFCNtZKHK258H7qbMz7zG4GzwtXYrKpc3cF4WjMHQRHJcfc3uj6K65YV7ojck5CaHgezwoFifRfW6a1",
  "key21": "ykALJvpPWXZDGrqpKybjDSFgs64yea1ixxW7TN85WsfhMLgh1nUsCsyiyBhTYAocugYnFU3DnDbye4b4AF3Fp9b",
  "key22": "5ux3VeDhwagwyiwzDJ3Y7PVwWkbtoSQvSNqNSs1uxsNd4i1D9BetmbJZhSpn57xVrkM4wkE6QTh6b1n7xbPsrqms",
  "key23": "49gUrfz9sPQ7iLa6ZoKeby82Dp2rn78V5e37nFVzDf83XNzyfseWLmzrkyayKA6Vu8rj4sGCx843ZbDsQnEBR3HU",
  "key24": "2mh6mwgxjJREh1VFgJQAeM8pvbZaFnK9zPkqzWU9kQxqZHip7npXEudye7F3wp9nYWWpw9P3advvr7h87bYSzZKy",
  "key25": "3UG5H6tMHBwnytMhQv9ufSi5VKpo3u1VViXZb5qfpKoDQEfYgyv989pe4RFK3RArBoaXSfF49TaPr9gZXERu5bgg",
  "key26": "54xMusf5F96zVE22vGXQMpfwsRPbdVAQaXpV3YGkUgdnKgmim12qdrmcfAdZUgfjadGFDyJCNpbToQF32JooigJy",
  "key27": "5Bmi4UwNpY1M8EL799gF6XP1WE7evnqCN1nVgPzYXyHHBJNWRXdkJAGcX9wnDqAgJ5EvYue7cj8hSeRABJ6ZaesW",
  "key28": "4Bsi1P6mEHfTBLYag7ed8qC3CBvgdSRW8DFzJj1jwzB2rkFPT5EKe2Gv3CGGSvw9rcoCYLoBcT1qqPnkAwgMQhbA",
  "key29": "2RmZkWp7CdUdbsCDA9sPfhMCkLL18MWTCiYVJeeseChCha4pYp3H7H2HZWsP94scRdHuikGeWC24yERUZa4gLL9Z",
  "key30": "YXW7b7ftmz55Rwdx7wi3J34rdmAkNs34nzQTwuP3BegR5dtN8Sdp3wM8UY3W8AApvtYKr2DGddqMvi7JiAjnHXR",
  "key31": "4xBHH6yPiEefGZupJoHrnhbiatyEwPJ56GB5YyxRFz8TV4MYUr4Hcx9pbUDRsDM9pVuuzgv4zE4DiWVj99nbJ9Z3",
  "key32": "hSFXbAbcV7xdRVUfUFGEaJrS8Lr9o8VGVcf26CLprU6YjzuNNJfciBPPuraCGPRMeksxzA15VNEN9j5bDJKW3Lq",
  "key33": "2xhsKDd3AuwZvzZUZHZMMDBjs6ZTrwo3TnPL2kcStJJwntP8zSr5RHU9CA3oHoT8i7tCt3mz8jbPsDtUc8m8kt9o",
  "key34": "5Qk2hXvJtRr1AJ8pvBJvWqS8c37Q7nhwTdUgiLnH9efkuNzzSjtpuJLr5wn9iP4Bvn4GDu69JMhJY11QZqvpb7Nf",
  "key35": "58jP3VwHk2pvfB1Ff1rT6dHCM2RLM6jRSyBcWHXcJ87kqhRihmMb4KnBkdqwWDRyCNvBd6kKw18qwH77HdLbkkgh",
  "key36": "3as9Mgx46kcMaMgjr1Bzynm7EGX7bq4vTeLcbLW3P4nRr8bGm8Y87WVXmfz9Q9qcn3nKE8Zh7M2R5dcdULQzr8hv"
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
