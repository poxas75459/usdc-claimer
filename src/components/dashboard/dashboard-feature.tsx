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
    "2XU76XtG1DhN4RN5Q3RumAjasYwCXshv8wiuFo2auSU8k4vPWnrwE91HPurLozejWcCDcTLVLZw9GGxHG9AuCEGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKRA2BXgpMca3JQdcVEJ5bYiDkS6AkaRNQ3JSGx5zArdecVcVu2trBkxzaKimobkYxxNCMJxVvVfGvEaCaXkW9m",
  "key1": "5m7kxJdHisNyDtAfb7vabUEdUwZn4uTNkmF9mZEqPVGEM1cUhLs4TjPL4VjMtZCkLs8Q1us1Xe8JTLPMfhVvQp4i",
  "key2": "BAqf6wvvGweersq4fDLKcTBfuiixkQXThmSQkQGvToxtHguaKrCdoeJcuiRxsWPbxeizTRKG9Ax7yRSdMFmSFn1",
  "key3": "5BBvFzz48khuhWV4nLh9qywwUPcrF3rkvAPxhrF77F3EqNyhc6XhWUf4fieF9saDSPAfGqd4GzConuLajQQmuaCH",
  "key4": "5BQxJ63sVqxJoVtN6PYSbMYHJ4Hj1zRvy9mAwWTf3iUKQLZbqvpEXSAgzpBw3ha7jojUD7sbuQrQTNXxCxWJRzrP",
  "key5": "KTWrPnaXBgwM1Mds421AjnjjjkBjuqs8svjrEfDWuYt1AwK8QZqEArsHQjfVCmrhzAibRWXAzmYDduxtMzF3fay",
  "key6": "4rSx5GALncA4FKwxD2pgrNq3DfRNEohpnsiAUoxuF61c8egVwKQnQH9rMzcFRVRyXDtTUYG9GHuaLRubm4DAm2ps",
  "key7": "3Yx3rMQip17VG56xbBQuk4Qir3A94h1SFkVfavix616nsw1d8RFL3jnGebXpQRjnf4QcDChTDgM9voRe3iE93Hun",
  "key8": "2RCPRpEs1rgonunjR7g2knDv8qsnoY7qFBh826U3nkinov5PnCsgYQWkPZ7s9C4jyAobWNvt54D4NSSYhwgctLjG",
  "key9": "4m9kmtX7Db6tzt8xpELprA4yr1suaQvssATNbcxyFyRUjq3tdBD2qdP3SXsuSd16oHGG7Hc4JxS8976Yav3VDVbe",
  "key10": "51VQFD21F6gsHjP2KodB9LbfZTTcZathyekQzfuBSPTadL8jNuLQyQEXHJBowHeRyiEcchtWE1C5ChGdQaoGf5ej",
  "key11": "4QZexLLhyYcPXBkXJcJ2GcJa1CnrbkY1wT97nVr7fb9P3KRNryKwwqydjYg9tPuvLJPK4ahsaoB1u8Gx7aSTvDhH",
  "key12": "36hf2txyxF9wWWFHqYcfhN8YuVTuzwNfFNc5rfNGMt3SpsPyssgpzKA6jA1qyXh25gvg6TCsmzArf52jBBCqBARg",
  "key13": "4pjSrn5n5f2mzhXeq99qnaKYcCuCjBCQoevorPwKBW1WsD3yoiyc458j2guLyu6FWgCP3cr7iLKPEHYiSY9rMgUL",
  "key14": "631p3DEk9BpeuPmJepcJ1inedAEWym3HZcFzGyoxYkj3atNRiZtUY8FSeBaZBGtAssR3T7NbjmxEZ4YHrAvigUwm",
  "key15": "3Q6dRAE5YtELPCTNh1Rhf2yedDkkN3zmcB4vA96uy96teJPiVb4hEDo9KNj234zg8jeZiXnGqWgiiDaXsVndzw4U",
  "key16": "qr5Mtw7WYMxJrBdGX5Un4oEnY76A1NTrKXb6e6BZfxiEbY5JLaEMmJxc4nMzst1dsm2Hv59oUM1UhSZzUCexZpQ",
  "key17": "3fm7BqWDNQkTTzxTzmLzGCC1ZoP6L15T5EVbqhqgRN6ZzG25wmfk3pBSbCDTaZfA7ZjYJU2Tw4uzk2jHVArzP2FA",
  "key18": "28xpLkqFYqtLnFn1apvneNJNiRwZoXM6NDPjsh6MbVuNwLFUiNX3zcpvrPbNyjNcaJ5QzvjnqKGQ2vw2odyNaKRF",
  "key19": "5MNPwBUBuZFvxc3XyaSK9mta6HjVA9KE9gRHu76PGH5A694ijM53Wb9acJVVcnQ1AXTThCUxdyhREPtt11dnHw54",
  "key20": "EGjmR4vEHhTsZpFpebuFRoDxQbNewqNtL6Te92gAiwcsbQYmo6kSwTzUrL9ubPJ53B8i5pVBNmf1kse3R9ZjGwX",
  "key21": "2UiPxLYjhJmtDw9iLBBQk4VgWcNAd7x2gqb2W4ZvxQSXbLuPc9L5FzsBY1g7mA3KbR6uiEWAmsdFYcSjwujtV5nd",
  "key22": "3BcA47Ka1QzQvpdSmCgAw4LCnnWgoyAJGJHLHqxv2D5aVxHpvc58t26QeXsBgkKxa1CqzLZW6x9CoZJLaYqdXs1q",
  "key23": "27y2gAd2XAE53gvHq4iVyJwesG7J6ZNKExJAZgYCpKk9MYKa2ikpX238dXvMLBqmuDnjo1h6wm42UACd446xvEc6",
  "key24": "44i2SMscwxTUybgukdFCGvw1zUp7quq9rxcxRR2A5C4CG1iB8oPk4rpyezCP1sPTwArCTC8HP3sH8S26oKuwduLz",
  "key25": "wXMtFa6pvZA53gF8rbWi5RapvwCvbcVVLjzTEQB2q6myAxbwjdGLRzp1iAfZ6LvMj4Ccps1Js5GvcM45pyn4pXu",
  "key26": "3jLptkgCWufJjW4fswrMGwCnSbiAWQ2uQsfbuhDjTzc4XiECV5Ayrvnvs456HE7DgFGPR74C8HW59GxRurseYDVW",
  "key27": "4jwaFHFdGTCphfRRJ51oXLGizftz6B2K6LGxVwkfvwiAQqPJUr3VQ85KPCXfQv3K3Y5Ak9JeA4qFPPojPNyHSMiM",
  "key28": "2BqqkEbZNKopB8beZHetg7wMU9dcwU2mQ7JGQs4ZKwSuitE3nvPWS5SZjXCeadkoC31CjbUzWsUwHfQmtkqMEiCp",
  "key29": "53s9mVmoVa53y8fsodG7gAiEtPjR4f4WiccFyBrFs7fbkcaLXT96VQbJpMafWdFf19QD6UwTZP6Xrp6ia9RrjDsd",
  "key30": "wKACdNqJ34THUzn5xNWqaZBL7Lphpzzvfo6uNVS67Tg1kokJwmiZiYCyVoexqMTjyeryttn5rzEKtK13adrzE33",
  "key31": "46PtNnaPwCPpenjcBkpquyGkam3kygdQnKhwm2ZUaqV2mBGfnsEGrx5QmT1ancWraiagZYxJjnB2myLjH17v8DAZ",
  "key32": "2josqkcDLZJaHMjfJKXyczxpVgmCku2XYF1TwMJkdrGAXtTJ8wq3xLhKxVvKrZTV3EybhLZvPXkyXNHXvnEpns47",
  "key33": "2sL45kgocMtMe41EYNAHMuZWPF6LAHHNgyPYHrUehZDJAG6U2gJ6z4VBGwcm67qCx2Q7hzQDvtpmXoQd4uwW7FX9"
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
