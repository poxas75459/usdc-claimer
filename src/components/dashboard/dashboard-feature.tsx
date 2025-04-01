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
    "2fjbtDGQt3aEwt5usv4LjvGpPhLkV2AERMaQe1GaMumM8UWkLEftRAMVHdKaSgtiWEgSoRnNbvmFNQJpUL26pErr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HTqhrAVdCURJMyXeiP79x4r6oEXarQw3X2b3Bb2CnFznk6X8gjCMGcETXMDPnpwAmADugxMBg4o1o7mC2KzCYc",
  "key1": "XU2Ae3MophKnNSTorWNGN2cxeAvs398WaKoTvoxnumPUz8TJyuwTSdEgrHTLdpskMcDx9vfrXwRyFtpzBfwQzv9",
  "key2": "QLZKJSit3BfBFujYGKzZvk7kWdqRDGyM7Rf6qM1sEK61VFdicRzK1CxiBABdt39YyRXEMTvbAWL84YxUcvbcZE2",
  "key3": "39CBXGGnK3rpbbHZBSq3zT4RtAYuMoQTKFexfLTcNzpa75NeRvygSD1EwywbTGur3BwpS2srgSQRsq4XiG5ecq4m",
  "key4": "2jKcJNtdKiDaLDJxNPYQrGi8SnAKVKerPzqpoatKfi6kws8eVR7mj5YH4GnoEAQgJj97vqcGdejamn3rDkocWCj4",
  "key5": "zs67itbNrMgxYDquwwMAU6aERc6DVGvVYVZ3HPoakFCaknuo3t7DXFNBu98wBMyeJgL2UJB78yztYfhLCFqNVu5",
  "key6": "9JhK9JVUZoqaag4MwGDPWWjpfJrXC8216CBEYFm5s8JMnJpYA7HJCqsWf19kVMV97b8ioCuR9bRu7ABfCuh7ZWh",
  "key7": "4DiVCqxnwfgrvzorXH9CEvzJaTZWC3WrxUuByh32mHQ61z6f7ukjFs5tH6fonHXDzTA33HTN42Zh1k4CrioURaT3",
  "key8": "5AP9QbcSVKoravh15FX9am7vuPaUhAtDedJKTPWHJjcV3vw8JkKba1ZuQsTn85cBsCb4TLgVNqDFb6VyZ7FrTs76",
  "key9": "jHp9PTCfEaGZNoL5sSS2jv8UEex998U1ShwQrHyv9ssRKmrgKp5TgjKonD8s2bCHbVVGX7XnTUTxZ7av747WzKp",
  "key10": "45wy2eBwPjmKCJp1PcTviXkbDxDWXbm7f2M8MEBsJH4zKHJEAvkmtFDs9a1PtgCj8MzKV354VtR4p73qm3fDkJxq",
  "key11": "4sPwubAppAgDAe5aMWtyEfTs5w1amAPeTmGbvkoEsKpfqgkgD837SRfQBFDMs4K4AU97nt9S2ytNY8LXcqHoWL2c",
  "key12": "5vCK3N7SCuGiKmR1ppGk9W3FAi3yhwtw6pL3nzfx3DNTdbZgbecemtFsbZbr7kGAHpE4DCF1VKwk2PpkikCP83EH",
  "key13": "RNSWRAd1QMsPD9HZxzb4vTzceazSNJzMk38YmUmWEtL1vFX3MJUKfdGrSc26tCbFEb3z7K51zwMmbu7Q9ZjiEAY",
  "key14": "354x5pVyYXKAtV29gHB3y5RamqquJvDNujnWkyb4TacvZDsQxQdPZ5NBHQVbdE4xUYZG4tQQJnn6eSNtE1o2Fhve",
  "key15": "5ffzdm53thvk43gfnLUEjKphLfTdU4W82JyVLzChfp6kVMmEwTxSWj9y3zoTAekr3nswN2p4FBSQWLoiAFVSUtxT",
  "key16": "3w791hDh2zLDPYYQ9k28QrM78kCB9x737hVBhzSuiWZpMZa5HChWjaoTHdRejXNiXuAQsjGpbJFM3dN89YmVn43U",
  "key17": "54rGa5P1UsYnENzTJZ3tkKqxPupTmdtHsBqkpaMpw7BQ2EN1Y4aSSe4e7svBLGBwf2foUsQ9Dd5TDAUmdsBTA3yJ",
  "key18": "2areW4PVnUXr4qpBmpymCyrpk4fXiqhPUhsLXM6V58Ntp9ruLcQ5uQSp1CwfcvnXnVyqTp2uLoKjjew4VexndSY2",
  "key19": "4jCxsNATyXE3LKT63iWL16JzKzckUU2KsUQ49L4yeSmfuH28nZTiQnSCp2xSpZN7EEvNBUThAhvmBpMejSyoYED",
  "key20": "64mAsWPVBsUmYzBNCpMPBkr33dRfAmN1utk41y5Uchz6Sgjp5g7FqVGZyDkwWaZepCnTJWRKKsXM9LNgqtWkbGFa",
  "key21": "3bpqvNEmT9NABabvCWFwbXUY5pEhZhUZs82bxHuYQHf4QCWhyEnWD8F7Ss5tbYBfnZm4TBQ2wrAuw3ZXtiUNPeLh",
  "key22": "get9VAnxx837QZhAHyyvAbdQeAZLkLXPhxWmCUBABSgYEqKXswejg1XfCsAMdGQv7mdWV1x1xB9Yn7YQFsgEDoP",
  "key23": "5oooxk4FPnncTgZjsp8PkJLtjj8Fh4BimGvqaVmc4ZJgYbBXfDGs1MHGNLrfkEUhS6X6ti8K7z3HMZRqfUGZ63Yx",
  "key24": "4jYMFvVX25wKGurqQRTw8ABRTU4yoP84MWUGbned9x3cB2xVQBq5odyp7T4mVx7z1qDjUxrHdyLBiDVa3sW3p2vC",
  "key25": "241GbiSXD79baXGEtnFwzFXbGb6qw26n3EbQdmtMVHb3wFYYbAmygsiuF545f3k8YWY8s6jRRLCju2H48hYsYZJJ",
  "key26": "3hHXWdTh73x76wyu99HWL7QsWQcv5ku19F6Nmra12MYGr18y3sjVd3BtfLkDaLPpkqbuYQxkkoLp38X9RiMPzC9E"
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
