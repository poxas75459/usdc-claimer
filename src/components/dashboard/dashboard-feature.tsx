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
    "2WFJsPtsLfMBtS4WWtVYZ4Bn5ERrw1UcEtpcp3CJzmvjKnZhx1DcKtWBb7fy26zgTr9kHo6n37SzMKgk5YkLPWHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCLRKuiJiXkv7YaCC7p83f6w9bZUECGSNwRyY5xvehnyKpn6wkrPZbXiHWWYr6tfxiXVzLqetNVa6RtbJkBykqS",
  "key1": "2nTghvL9Q9K3poDoSpPv8HESgYjMxVr6Yf62imyVHokZFKQVWbDH1fmQziX8GcDBFFst1yTiyenNggW7duQmRRrA",
  "key2": "SjANpiqbsyDxuwyz25rfqJeQz4cCCbSXDEg3oiKQHY7NdY41PmKBsZfqEAgnNNwQQoBbT7LLYKoWytYev2eyi4b",
  "key3": "48qJoZmB1xDFXVBZSQkzHqae9rnXn2AKCPGP8vsnkbTsBgToXmSqmttm7nSWqVJymbrj57fta3YhGcowwYTcChns",
  "key4": "2H2Nm7UDwaPoGGUygp5m5eYMXkoYt9EZ7ViJn9NgdNwoFqJZG7C8pC4TAvQThUVMiKShCpBUh5wAGCBvSMxMsZSB",
  "key5": "3KPFZrt3EhtMsPS4cRJDWu2Kxh7q6wJ2LuJfNotK7nDUK7xV6WnNHwXaZoYRjaREi5VaJNmDgYSM7NTrqYYh4KMQ",
  "key6": "AE5dhGSqSzy86ppqWCpBriovonUGJUZiPt2PbEgXYhmFz2sjNVEwiDnuBh1QR8YLe1b4XETtUdssPb3Jk2dBwEw",
  "key7": "4r1spoEgu2aNNrws4b4AHmceVcX8ayxvhdU3A3Kkw9Tu7woQVZkKvh19Qqjx9XFb6gVbzaxgvbbn5HvKxBVeiWG2",
  "key8": "5EsDtzHLroRJkHCjXeshit7Fhde4nnb4pGTC1QEabYRhvwTu74e8hhZR194Tu2q2LzPtbvieWGfD6hPnk7d3qa9T",
  "key9": "5VQN4e3An3acu5vNgnPxUDm85rWK2qrHNwGqgDXNtq3MxHEvRHw9RHjoksgoEhwVBJkyhndYwPghPpUYNr4V7zNv",
  "key10": "5Q1P9kUhCFjKtcpqvd268RAtXJbAowtXwDL6UfGd3BzAeeiQwnLxFfS78LDLwLpAYNQZzsCsPPwPCnt3ZLyqLuP8",
  "key11": "4Fg7xz7zbCVBsTegrtYjKtFEDP1swNgwTvfFMNPFacSpw8stEpXzrL8apvtH86LU8SfsTqDN2kpt1YeCtegdxrZ2",
  "key12": "2a74GqWJnd7x5Rm9wgktHPxhXde4Ri9Z4vghZHdh1fS8YGdjziWoESJLwb6shLb14nW68r973RMi83B6syKSaLws",
  "key13": "22EEhfzBntG5gkPBNTaiJoZtJW8dWrWxHCngUhcNYCFXXPgoD8VhmVaLkMNzt2yKzKLMLtFHX6nEXng7KxFWnrHu",
  "key14": "57CSnNxdZfijapXbsunNc4Ch6YCDBzKwR2QSgKodrsdW9WREZCdD5RpdgHopnim3zzwJVuFePe8FTGPaR7fyHveN",
  "key15": "5RDuvwqmRgxBWeGPLfXrRvy7umdZFtgRXzDBn7Sf7GTwcmgdkMRH1f8EV7WW96sSvN5T6CsZ1kSTMyXFkWwaj8Nx",
  "key16": "RTH34ZwPZQdPCjV6fg3jReAgV5LX4dwEffCmF8ecdY6NYARPuP64PQtzSgDXAyVoVAjRgadjqi7JNufdLa35MgQ",
  "key17": "3NdKGDkNVyzEbnku7tnTHTkLDA1XR9uAfG1bXZaW8y83BEVCL6xdiLxMPt7tfg1YX9gSM8inhmeJrjSjp5RvQrx9",
  "key18": "NaY6WryPWzid3SMe7T9iTejbE6jdNaPYGSBphBpbH4kFJQeKaboF4uQxu6L41dvo7zytuPHmpf9B93q7W37MmWj",
  "key19": "sWUkBUkvYvDgcK675W4ALrfTgZFm7U8srHABgyRVLRH3DxveZZHwGhNdQqDM8F8G2MjqABcX8nukfDgeCHx495Q",
  "key20": "2PXXk5QZohEBnjGYNQsGcEUy2FVveRzaif2jZRgtPxmwkGhTDewtDwV32JTFzgs2VGcNKFHQhNFSwTiQzmYbzVsU",
  "key21": "hXHk3sukkzT8ppKGee26ekvcw6bVPZNYdM1UzyzQV6Xkcz3ToL5F82mTG538HBehQpcXf3zhbUieKv2T5rV3S5A",
  "key22": "2cGxnBZZuyc2bn5Ad9EKfLeVSbMniFZM2kGvjW52hjEwVsTxsZtDwpAD2QK6MLhmxFB8Va9sQZdVgnb1ZPadXHiR",
  "key23": "41AXP7oLwBtb92vRKyEiXbM7TQmGtrnh5MjD9jurbaKvecwAw4Rpn8DgTmvsa27jD6merMVfiojMZqP8PQnDC8U8",
  "key24": "2XUsB8qpsTDubCHR3fTDPCANvrFxWSmhSCJUYk5Rxq5Rswh3QvRobQsWp8YkAe3VCFy4WFPPW9kU2uNapeM6npHZ",
  "key25": "5vAsd6miN5hDm5WMM69GDFAmmXQd4FrLhzFNNHRVCyJR7HTkuRh3fxaQEvG4P5f2fD7e3pnhDiJhaNP9T1Tkrjcm",
  "key26": "4LVQZTmJw7WCeT6CzJfnt4Qgw9zE1KCHth2dTgtbcT8f8GUrpofq6sMrdqf6Ay72eQRe92ubcd7h4rUdN26aNWVq",
  "key27": "5UmvHEoKbdmu4ugH9grs74zGukF4AiD1B64vwau1cv2nwA7AhHMDYosqV79xfEXTtc6A9NguJY6kHtJJh3qHRsn8",
  "key28": "5ZPVuWqdJXg3DtAWAUSu2AoQXek1xZB6hbmB6t2oEeSpC8s4cvXT4C8n1rBRMMgtNWxEYt2crASFWB8fzMn1wNxD",
  "key29": "4o5pr6C6RRF8Wu69nxfGgpJLmyhihajq7wPpLWnLjVgTWVWq4KSF2T6yGLEGegFyCyLyg7vDG5DJnXF5jeSgLpRU",
  "key30": "5McKNeWpXCxJeE5nrBJRbTrj4LAoKpjWza2deBRg8FMkCqXHVtgjTbLDGJr3nJn1Mvao1eaqA65PNvNv5e4ds9HS",
  "key31": "4urzxPmtV8vX9riXHkR2QSNgjNUS1qAcJ4jGrgUbTnuziVXGdPv5CQU6GyBh2ZsuXem4UYCWyYAVqyQXq1g8ScYq",
  "key32": "62wmygySs9aCADTZz9zYhQKDbDp9rKiNe9uHteMM6L98n8TW9CqAynbjKRzAuxHc4WnpQzeSvMmg3kE652ELUSSb",
  "key33": "3N1ZWMkGDGQp39YwWwzyXWTo5gcWW2WLzd7B2j4LxLTK7k9UEDepmtV82ssamqS1b8YG9vPNo5x215TZDsBTrPsb",
  "key34": "5itYLABKzYRfqjVchbNWVF8dHKFhhhMfdaRxfj6G18kiYke6PEV7hzDXEkUr38bjPw2bTNNu988PgzwA8AhmXaWJ",
  "key35": "NBDw8g2XtGz6FTLRMRohYDx2GvgHyNSnXyJb3Lqun5J1A7FexuRFXAtNHENE89R5N4dh3UdnGUtcUA4MfdpAxdC",
  "key36": "4GwBUdEaowCkX6BcVTBKKEDWFBWAwoFjBYf33ZAMc6mPHZNghr8g3T21Kn2XfbCXVmxmm4edcHqqwtWwWrM19mBq"
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
