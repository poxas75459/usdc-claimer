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
    "2yuKbPvFG4VPre9sQWuCq71NzfA653Nhvc1Wn39fe3ixc6q1LZHaEm929e6C55cvRSB2PpzjneffVuKzJLhewno9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ru5JzQLLb5yvZeG9PminPHU9Nd63oCVza6xKZjHNYm9nCTFsEoWAuo6rpvb7VGzCztZ6V5uv3Zg9UdSaySHhfeT",
  "key1": "4Nc8Gcq8hTcixMju83W8n5aWqGUTQK8xM87eKm4YVpJYpHTqHTDkcqtNYLPEcy6wJWLZGFCwTYxcqAF4q7yg8KQV",
  "key2": "2Q4yTozUwWEiwuWV8744NbAzByUA4hrNRhDhFJxPSGtyRn692618mMs6iWT1tmAzDCTcM2VUbCGG3PgC5pWoSkPr",
  "key3": "2eLVy1iCVmZr1rxMNunHxJd66cMT3jFXPPeqQdeCDfgqpTa9PVkRGHTHtsZxxKBvYd2Kpo4JQ4HoraXkQbYQBFQC",
  "key4": "4fvbURwqLhzDGpZ3G91sYiPZH7VkGnraegyP4CkFYtwh1ExYEW8VUJ12UPXYGL3WaJnNBR3wHjAYU2PX6UvSHJ8r",
  "key5": "3VSKnWZCAf8JpScx5FBJ2DN3dVsc8ecZ26SV95L82Aa7h1QeXGRAFYY9nreTdcUYkxbxuhzzjkEEur7SRqGydeyG",
  "key6": "4eKRnuz7euceDvx9xdkww9mArTDZvxCeNagie8vdU9r82JNSpNievsFD1pwDMrPuA7hSyu8SSQh1C458QUT3sBhb",
  "key7": "5r61YV4pjuUdCbAyvHvvNSnbFuHjsk7oiBeEZeZ4fRJEvysuot1eeHL3hXKe86fgrD6tk2DY6fthTouhkdqL4fNp",
  "key8": "GK57W3PXM65Wp5oKJ9qjUmnPqV27hDYh1QcEghTMYVKnem9vGedFJMNXpsxa9E4wJQv4mHAYFahu5N7nXt3Ddf2",
  "key9": "3gs2xnoVtiUYVHtm5HKi2Q2kquQkrWdXP3dmmDE6u6un59psTz7eSD35T4VqKtTG7LJrARCndaKK9saDrnuBSo3r",
  "key10": "21a67JvYed4soFLSJ542sKWkif58HtMLEpSK3n2za7sbNbJFv3yMHdrLJVsW7bziAV4PGxsJodWujbLTD7yVAB8R",
  "key11": "4sPCKDQiviTQZgKeaDsDs6CZmexg6FPjWkxAdBrJWxBGk266oDYcatakvb2vk51UYUCmayVZiqMBRpch5CgBNkzL",
  "key12": "26DR1iABquX3zdqjYdrwmgCYvfEnMzN37K2vH3rQGbChXtaMU4D4HfJxegGAFQUSxH5mJWhayBhaB2pQxHd6VYxU",
  "key13": "2npEAocLkk6dM5nyXxBVGNf5hkV6Gd4Fm18eyhVfDKakA1aDDFQtpV3fomNwq6sHW1eikUNSAAHvzTXzmCn8DCXN",
  "key14": "4vJKFXWrRdCRsRMnctpQ95gdf4Qia65irPFK6DtJoTKWphYhUBcrQYhbGM28FfX72K441FWToTuBUH2MyYsiTvfb",
  "key15": "5sFYjKHZDZ1wcZfCbuRPN6hH4CVcGjZTXCTvEvDa3NoCPJENTpW2j16JHH4FjrAPmwGKhjhtRZRyEGPSfFhtdzd1",
  "key16": "4xGetfabCrJ6urMpveM9AVKot3upzzsce3iyQY4taj7znjqP7k1VvstA9ADuRaWpNHjnoZypYFWifjWdWJVDQm9e",
  "key17": "55eShFUy5dfCu9onC7F8xpGDR9xguGBJQJ86CB2g92dwfrF9wrfQPtwAvm5MUEHwzQzyh29i2Hz8au6UPiSFnWuj",
  "key18": "3J6T25oSbKNHgFr39MCX8QENCUMWDj9RkaksLdUnUww2QtPeEfyHMK1mQGPQwiSEyEgf7sPwrgUM7g5QKeY5cDKF",
  "key19": "35zA8BUgusvmcztiEr6kXzpNFQzdGtAnmhy55Ywhv6ccsbdZtwcfmLBLZJutoDa9PPmcYxEXYfQixpX6PJC5BUaz",
  "key20": "26WdA8SUuj14ri92wZYAXZSRTPugrukhtDSoh3FYKPR8U21ixfvCskosepngkAqWyzLkJKrMP89mi2Btgp2KSfyW",
  "key21": "62eMMZaLxSeQsDZDrYT1TXRaDckShDtGVHMN5a87HF4cDGxZqGnPzVW9a3LUR6HEfx2nfBEGcriRpicmmza5A7r1",
  "key22": "4bteUjzhoZZuui4Yx6XsqFJNrHMAZMHGARbnrFCE1X98tujQuNSftgabUYMHFo3Npe9es5GUz9Kfa9b52rxf4Vm4",
  "key23": "5ienYeqte3Pi8nyBiyaCyBudDHjVdjMiwJGxaDfKMfgXyHt1ajcfsFsQx1vyyNAmzzmMPjQhA2dhxcYnC1hZVPY1",
  "key24": "5HwKic1vXZad5nnKTAT3evzwCA9B3wj2gQaTsk9N1iVeiFmM9TspPe9vAXXZTXpMnDiDSnZ6Rx4z25fRsyc263aK",
  "key25": "2DHmtcepQsZgftizgcv8wfZnvFGig2BfuTuNFTnTp8FFjw4vD3xzHUp91gQwq26hPozz9xmGrvqcFwia8cLnQmim",
  "key26": "i3XfEjWrdjHnuBLAGbjMZKne6ZJ9ShHnbDGM5RKiVNcWFNoUvRwuboh12eeSck9da8SrTkbXzdzk3Fsk2KcZzhY",
  "key27": "5rE3qNRxsarH4tXyyjH5AfE9C1iBa4eKfjk6FUmaoZ6TyqgYnh9mbGAiWDqJ8aHR5DkXtgGSdB4id2ogeC1KcHgr",
  "key28": "4nWCRxoWuxvkdeyEKXVdGmVjsW9EjT2KJTbrk9byELakcJaHH55DWEgLDeEGjRWBDnb6vwSyWDNSB8HSaJgrKfyW",
  "key29": "UsavSqV2gpTgSMaz1JZ9RqijppSFxP3v449HiEq9JgCM7ZDSuCiSLwieosh4K9udGjccWVo6sy1JjJPEv97M7XF",
  "key30": "4kfvRQUHZ2GRB4f6dgQ1q2KFYNLACuZp933QqbQHUCn13ZceSa5eHAxBq1Wbpx2QhUPgZ5KwxZK6uXAja4GDgFrU"
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
