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
    "2dU6632ZC2U8sQcRCuCuPxMvirbkkZrgYy4NJBh4FFTJh72owx7d2wANiWqNvXfAo5jT4PyWrnLQGKQkYJ949mKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58svcA5gyrLv8X3drgMaEzRRygSEvWRHYhftwxWC4dseeboEMyaB6KFhL7ADyqBr71vWYbYk6ebGMDtJWyuwrRKj",
  "key1": "3gDCWCa9ikFBNswrTJNA2FpbCdWc3As6RYeYPbkgHbBBEn8cPKDvXxrkZaHckcWn5NJUp5dcyT1rfpqtfqofQkVa",
  "key2": "3Y1avYdWCiR3hHWBXcTjeSCDnCKHxkqyQt9DFKqaAdipMNUXEMQJRLLzhY4nPU6omrUsHA4T8BWQHim4FmLiWUDM",
  "key3": "4FQ6CaE37Fxny1i7D1aechQ1YsJDyECD2YqoWk3Fjbf3KhtwZg2woFu99egU8Tzb2kPBTY5SvsDCr9sSUSNic5Gk",
  "key4": "4heVDqtbksribb8gu1dB3HrQzoGn5HA5RoMKQ2uWih7i1jttW72x3yaZtGh1ncYm9aYfYqYj2y7HusYKG5DcXq3w",
  "key5": "28f25ZcgsXG49jV3Bimc8dJxoVS7SKkw8N4z9FdfBWPpMZ2gzwqJRNA7YJJgii6eGWHGe6sU3wdYEGgQixPgspkr",
  "key6": "5pkHCNNodcdzkFTKXbi1iZiwJcnqZ6RvKGkn6U3gARES6e9rofiwBm87mCB4xAzshHymXw9TC25k2Cbo8nZaimQm",
  "key7": "4GHjG6w926nHoY1HX4U33ZtDyerXN2HMbDqjyNTHNxeB3X6crNiCm9JrMKhbhcVndUvcewaAfaWuP8yq5ZAFEMQR",
  "key8": "5REHaBAaQ7pERwpPaanYuvbtZ1jiX24XtL5876w7qvB3kfyESUb9zcYs2HH5CsarrLYU1KkjzaxtEhRcdMszbBLQ",
  "key9": "46wgkP2cSTfB1xuvLqWdsuWZsL2mn5cVKpYUr2uAX8W6Dt2QcizLUUWpX8VuYDNRTg8uRBd1KQS1xANrvEFMB4ZD",
  "key10": "5Fnm12u5AE7iqfARhVzpUejVzPDdwGQg42n7cSdwobA6Ng78NY7tu6do48Ly3dva7F1VJeNyw1VAjmAG9XgqcysK",
  "key11": "2Mf836tEiQnnHGKknJnpCqUT5fHVFDs2hfgehAwAex7m2CmF8qzxpYcPWNE3W6qcguMuzoSiDes31fxJKzSkDpvg",
  "key12": "3HsaQuajgnYKezNWGBey7FwCRYaiDcSZCFypvrX9PW98PFAepWoXs965eyjPvXt3hcAvx1xsowXDYWckgDuVRwv4",
  "key13": "3wubMJdUg76T1sAmdGL3eJ2yt2RfEjnGHaC7q2JiXbDYGidzu86YnLtr9xZoQtnBdCJ11yivJoAtBPMX9Wv9u8YH",
  "key14": "4P5393EaEUbaTQhgSp2EPin4EuRUMJE8dBr9uzvtbbjwPktc1FznSUgRyxjixGVrGmYT2FkbGBn1G1FYo869eGFk",
  "key15": "SMZw8yTLDrXEcUMFZqniyGCDbBkXz1Wqy25LAJTJ9djYzqCqVnW8bjBcXYsfJYkqkjUNA7dctrEUZvro5gM51QF",
  "key16": "56JrZRRf8nPp6A8JC7aaUxa1S5ix15sSPUs1FxpJz3nvy6LsTm9enqna1oimXnNwHrwmHne5d2pEjoJPewSUHqxz",
  "key17": "4oHPtWQm7YT6yG42CyCvR7LVpVmpese9TRD6nU7gJEcpnayKBdQFT1dFTad9RQPJ7KhFhScvuobhM17NpWuPpiRt",
  "key18": "2GCM1jCdQdYwAyfP7mshUPRYdxgA3m8RTrjb8QT39vwLhxn2sTS4mqN192N8J1waBVZfwr9xVi5YHeJZ1YAmwpgQ",
  "key19": "2fgmNvBa3Xum7BzEJfNqjyz8vEC3FeNEdsojwjt5s5ULDmTwBWgvdmuU3CCNnJ27NNUjWhJCg5FH5S7Su2pckXx",
  "key20": "WfaLArLgqVEHjgY9tpSCdzqaoffbXidkaoN3Le8yq1ATms9xsSL86G4BdpyrG1b9wZtLNnuBCVeskKgYAobsjPj",
  "key21": "YaL7yqUZSvWhQnh6RBrV1a47hskHBF1kRucuGFqkStcHgrHg6CLQgcRCZHfi3NLnhY7GYKCh8QajUDxvu1yLcWZ",
  "key22": "3Qfw6r23bWJtZhsCBFTPpokMM7uRvL4h1cdw2LFG3R2Nenzbdp3yVaecYzRhUsW2ta22Jb9VFb718PcExc5YmB2V",
  "key23": "54FeBWfHNputWCBtSMW4Kvkob5zJ6NwZXncjrRPLMNvGVYyR3whEco3ypwUXcb1m7SFhEyA5FjgshSGJb8Vy9B8E",
  "key24": "2mytvjBMhSnXKanBfSBWE9kJpzxLxvFRv2SCapU71jBkza7JqDPMX6BRYWD3r13dmyW3kwnhpZw78wRft1xYtLG",
  "key25": "29LQr98goUmT7HpQezFriR1dGJphXWHyHSeRMd2g9Hb2GkAGdpKKRABmnSQnnnCNuQEHcYtbULEToauDH6yuAvUs",
  "key26": "5QJrMxutmSfqaK1bByNwoAPoi7poy9KT8NUUzePrnvEjxq5p8oetJnACKi7vVn1sjT515Vsep8AG4tPx2QNMVAmC",
  "key27": "LMbD4LkfZh5UmJfEGWh2wzsTXupYMLRBm2hHgWDREvpsTCAfAm7r8Cyz6o8bxkEnt1AGS5fdHUxKzhrU2PobxBK",
  "key28": "5XnSfQ74UXrizePbL92JZhPG5FNUwrEX6HfpXJ12fJsADZvNvCjuPnD5SQdTWtiVPGfshjfVAEJ98zUEhiEfzSc4",
  "key29": "2ju8VnaZN5AKAPgeEKZCoKsRGZmqfwaKEzLNZCSdYTitKjvWoAdXo9iyTCBMWQYLkd5www5uXgY1dBYLWHoofCnw",
  "key30": "2SHYLCJJyLif6RjiUJhtmMyuxghg4GnT97N5rH18jFHNS3insFmhxwpgTi3CRRsYpoWMQk62fEKxA4MFXDpuA14e",
  "key31": "2My7FPWyE2ATfZ6pcUG8YTu4Tp669YtuZ3gk9C1KTURa4TnbUQxyJm7rFDfV6ra29QeoifqPTXgEAHAvdPqpPmUw",
  "key32": "56Ca61Fvn4vb28BvxoSnWDnE25iGVuLmYFTsZwsVj1j7puMEgDKzeV5jE3jAB8JU4azZhJ7XsNUENSL2ZhPivwHw",
  "key33": "5EhHgB3LiVkQoQEGh6gFtwDgmNLbepEZYJckX2jdRkpnoxFKPTGMiTavHg48WvafEvY2iCkbaKs1YmynkaAKQMQZ",
  "key34": "3YpbuTJCptMDsPjLUfv9xZVfSdK47qUpNqaqLC7MBPgVWgb32SsXNaph5DzdsHTLLadqzPgoxm4ZJKXM3hXHkehf",
  "key35": "2miP6T1m45H4YTvvSXU8fU5eZDDoyQSQY5RRLe7HYGfyfunBGPCQz4boxyFsT1ViXRbUG6f6c7Ts3M5UjzzNNxHa",
  "key36": "3bca7h1jV5ASW7n6axo8T6msHHbX7hdzncpvyVJXUbCQUu5GpRtyDQvrifPXdvQ7u4D5ohuxmrHdih3bemjZTE7D",
  "key37": "3dk2YkENATNpbgpUHLgN8rMsxCuxr9is2ErkVVWPC9mqK7iDHFmZoWGbKPEufCMEMBbPjiv7Gm7zZzNkvyaDHoEP",
  "key38": "3uquNXG5Wt7m5z28xPpU9riqzLRHkxxBLZQ9MfDG5VRhXcXHteiJSzGabr4idbimNdkGpbvxCBtgUXJGEbBcxU2F",
  "key39": "5tAo29ZGGyALAg73dwQrwDSkhC64TJ9UWZFQd7fF3DyFDjHhtbLXhhvi6unREwS58jwJnTTQz8wPP3LyTHdawn7p",
  "key40": "TsFbZjbHKpKHtxmfbEeHNxaZjAwd34dYCeNZYyPYTHHZ6BiCxMsYSuwqLfLL8gxaTczNvZznFxJPtuQRFUhiFSe",
  "key41": "3AaHJu7iESdCcJpksUzZWWtdX9QYZ7vysVdjoZaydbRQXcgLkZocy61BmWjPSLkXfYKYgmqyjo1VzRNXZgwE7D7j"
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
