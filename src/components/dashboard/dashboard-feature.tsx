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
    "3DSYyVv1dpJyQH2RBBfbsCzST6e6Hyqe1cMkoTqCNAppu9CW71jb7XRRba6Ny9jYDZEGoYwg7UT1Du24xoAqMwC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Pf7Mp7UWvM1j8macNyfeGqKV9ea6NHH4maP6o4CbGYoYUCrBJ7iMy7MQ7EM3VTzAfPHyfjbJGYSpMVJHaHvAc1",
  "key1": "3s7Cmj6j2MRCeUo3C96dj682cvWMza6WzcrDkdkBLbuRSUp5MSCYAfHcRFSt2mWdjrZYYRc3uBKLNgufVjHW8jAB",
  "key2": "3KBDgJRoLwd1V7RabRbrucEYadXGKMT4nVS8aud9knvm8SA7ew1XWTtsvXQ5QwYVAJKXAwBgU9d6bzP9BteBzcY2",
  "key3": "4N9EbmrFkpxjphXAAxQPUwr5fUvpusDL7eksMDhUW2W8TU3DCvQbFNjLVQ7atF1mG7Nfx7uBGLREDmvTN3M5KcbB",
  "key4": "2HSRmSrHTQarhxWGgudC9RiEysH7cVLzUYnt4DUhtHRUm22F1RWEbAdfZajhzcmNf5jKqMSQCEJzHKRC4owdyWLr",
  "key5": "wSPe1YSakMD5uQxXfXpbkGWkxioU8dkjmuJcw7wXE742h4985sAAqi2q9EwmDiKF1jkQcHnNBx2EqbvMDH3SfG9",
  "key6": "2Nj38L8mhAQAsJwv3pWrHbyuTZ4h3n2eoxVTtHpaABi2dN7SgFsCnazkUFmqszPumwHJJpAq9adNRNusdpKXjCb3",
  "key7": "21qmF8zh3K1avaRgHB23XfyDQtgHfgM17SBXsDNg3BCJfkYTt9FD2iKHMoVTARQQ3bjsPcPowv8sZfBFZMP7WYo5",
  "key8": "34MZYjUyzxWpYgQ7zoQNhnR3Cuo6JKWV6NBjsy1rdgnTz21JJ5QEMzRcLBNswRdcShPRiz93HMbitWeWFh9SEtfh",
  "key9": "4SvCi8N65p7QZ5fsp36X3ss6LZWJWWSEz9xXpLsDw6djq2YiG3mwPxjmjyuPgqS54gd2yLDZmj6j2Zk974NFg4aC",
  "key10": "2FjtALcc1YPQy5x9CYepQCJnLsnCxjvgnHJ5HvdXtFKLDicECMMHapAgbxMB5zE8xbHdZVAcaCGmu58D36DFD9zg",
  "key11": "22Q998tbuPf9VWie3sesZ7LSsyF5Mrq82HR9G5972644puAi7Gbhm8iGmaAYcsg7W2d9AFFZTnVyUCWGjoFYwNxU",
  "key12": "4Zrxavct8K5nvGgWT8hHDdrFWnVV6JhYyaYgYaPDHz8xkEPGTYRmRgvEQncGgwjPY5vpY7LjRSKDLaepTRcJjdqc",
  "key13": "VMzQEXdnfg2gtTQCcBFArAwPfdKnV4JgcvmcnB9FrP694fpmZry9ia8NNzi1dUkzi6m1LWKVwuq9FKDENETt8RV",
  "key14": "31AD3tuGe955tQTC4YuRaSkaZnLgCXbr7QL75ztdoU874DYhmrAj74x6a4bXir83huWwYzKgkRTmyXoJ9v7eWXvL",
  "key15": "2ddzPJt6RYg12Fxvw2uf1dDPi2RsTR6tWXRN2A71fhwqbjneToKgWLp3ZpYncP3ktS5RV2U4c53CcaiY6NKPU4Ts",
  "key16": "3c8BaDGCHFficWaiaHR6KnxbovXYQ4rRpaWtE1aj5NeEMLyuxP6PCwQJGzeBgULQit474zKbX7PVK6CKTFQEogeq",
  "key17": "4owfY55N1wKa18TUfHyCPckLUfR9qZfUjRtijodxBY5gYtLwjbyiwao1M6MYkfocSLDL4UJyWUmAAiAE31nqUcG9",
  "key18": "66GGHppdwp37ZRKoX5ammwWLYSkqiLmCz17ZS2V83dUdpUXqy4SswhvNKkkvkTizU2kxMjt1BKRkL3vdHD9neUHL",
  "key19": "3GgayqYA3Z4xtrawM3ZD6pop858uyxDq89vWmionAFeWts4HKAcYn5cDZKSu2K5sQ2vDGsyxCy8roAsy5A6UFkEg",
  "key20": "44GL2hY8akM7i4TZSEXUJbXu1K9pb9M8Sxp8PMqvd9PcvTPiASCtK7YFpWauuYb5bYndEo7X1f1AxFd9Dxo5a1P7",
  "key21": "5VABwbkp1oafQJ7hfq62Be7mJ99dSEDC7nkKGE1fq2g4HWsEbcrBXp8aHFVVPBh1WtjQoAWFTwNVRrKD5RfDCucU",
  "key22": "NGiTMonWDckmZx6ETX8BjVRHGivgtX42LzKqnjrGZsbFupANwxmDNvUhwAur74fBPMn6vJmhDvVLigfrzyeyBRR",
  "key23": "3stiMT4j1SRrMaQQtmgX3BsY3SJHJo78j83BwQd5RP15Tg4BsQEofeJacDpvCAiKjdnkGu5eaCVHYxSeXH9EQiFh",
  "key24": "5mEMdRTsTCbY9u71fqLrKsXfGXvcLNxKw6LgqWS3RChixUMBGN6vZB3oVCJmK2WzSdiYtMnZSGTm1KTYm6Gi1fZe",
  "key25": "2RdYXun5F1CkJqRbbo7Y1LmNnBhtp2jYFtGLFjq9CTsWvkLQ8oji258m9MtmqBaP7V1eNNeTuEQ6EZdUn4mzkBSG",
  "key26": "2LoRCaZKtLpXM69bCp5G3AxNCb3us6HzRXg457RzTAxyNw6XcLPg4cek25X2LRizcGigUzUMwVm3j6Ph5Jdt4fga",
  "key27": "3fZ3G7USzVwyHw9pmeRhwuiknrm4njpMjikHDLvv2NNQvZasYDHCi7uVCMUhv8uMwjVzpcBLCvu1aAXRHptVGp8m",
  "key28": "4yD4Kb2qf8C32Gwg6APded37uRJH6WC9PmTHdVdF6QVijLzpZogL7zwXQt8ea1UdmKck8Gkjhy18kHiFTnjtYNCg",
  "key29": "5nxtbttv4bPFr18xbRcP5gHtv1zFbhWnTKnKbTsH5TzvwbdDbTSd11SxGcyJc8TaHcbNgzTdbuQhLuci642FTEc1",
  "key30": "5Y9L2DwHqHSUhLSDj4X9854coWo3hVA1UtS2KEkVAUaZzn4Vts8wcsC7vsKLxPvXJL8TMhEEAGedDp4CKnbS57Rq",
  "key31": "3fN7eBbAK34tAm4SSpNz8j1RXoBQQyVmdcecx5eVXm2yxaS9TB2gSrLCN1tHBMycMBWXKZ4EPwER4v6JWff4FTHK"
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
