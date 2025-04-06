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
    "3f4JWUGjF3YMUFu3X5ycUypvEEef8UCYxZFqx56oVN2iE9qtaB3hHGXqcxC7aU1UikU19JU63qF6WrVSe56KUFqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpQjzex9CSXrfKvokwiTr71Vf3FGiF8uSTGP7yScesdFLpAyKVZFhqCusBot6Z76JmZLssxKyWmVSgJ1HC7uGGD",
  "key1": "37bvKCuS3kajmzFHFefsV2mNkLtpa6QDzeVoSjsbu36LxVtkdS8C8DhYGQgfcp3KWu76Yr387m7yhpV4ozr7MGF6",
  "key2": "2Dvff7FTLu7R97FknMZWJsTiJ7auCDBEcC8BfusSdkqzgeH7RAsEtVKN5bwSMX2RmS6vbmc4jpWWcpkSNzJEySL6",
  "key3": "DJqp45fYWSRX7KuyYfxNQ5uB83bATSD6h4FuDWc3qKbKLLhxU61S3Tpbgbh3ReZt5pyeqn8io53ES3C7qeurEEb",
  "key4": "411NEKb7Cbaf52vZPVCPjn7FUCZtSXz1rroUZcz2aeCRGw9n4fbPUPt6HAoKmd9U7RqUhVQ39dJYAAXkQmYYRvtb",
  "key5": "3Ri4fveqs7SSvb4h7CeRnPwQbdLpMUBsU5zEukJSRVqUFW4ZSM3aW72sPqWnK2DE7McgBsidcZXeLPhijXBkhZq7",
  "key6": "2peLanzpacTWBfsJLiogaaARZspzuQoEf4kjqPnTv4DgJYQJBjUAzTdQQwcjiECeL2WoJdCvQS5KJT2R45TsPPkj",
  "key7": "4HvZAMciBBdA9JYSFTpSmFKvmG1cwJ7TjCsd54nHZ8XxE87qBQaG6YMMCYWHTx2eUqfK9arnYpGqmgJxcgZuEUsy",
  "key8": "TwBiZk5uCpg9rLuPktjHm4d4ZyDMAmfYCHjfGQY6phDx4WKgKShVKdhMHDkVyUCVcMQuZSCHeqKTJ15GzT4PTjj",
  "key9": "5ZuV1svnmYNBsGfnwQmc3PpLCb8ZJkax71XrScNwmjq3M66ciQfCQLqDieUq4Mhc724W6UdXktMnbpvePa6qkmF2",
  "key10": "D4zAm6fLsCDjtxB9jo1Vu872UAH2HRdc6h7Yu4uNnBhAMvyCpAz2acHC3jqBrqeQREEBEPwS7DtxGfpXVrn6qa4",
  "key11": "3xkKZoPj9AS9rc4XvkKFoaGAam7Ut5fchrhzDFxjrJFfR9SxcwQiW5KoqhFTYhNRZML29VvLMy3qoq9xtUaRw6ns",
  "key12": "4GeHmAdHWGhSA8TK8sLd697SKsw3viZUb9Bhr6uJVUbTG3WtqKXg8nwii1XWhS4Q5eit2iG49hf8iqCeDCiYdMJR",
  "key13": "4kXGgUSQ11ByTZARP6eos7kpdNSaPB2HJEGByfneqUSQNT2pHVLGQTCfxX7bn9ahJ8Uw1kxCkm6ZhejLzZzBTV9W",
  "key14": "bwwrtC5YiaFHcJaT6hK5PbmBHAbwDLAHUeaVGRXwQNYfpFCAweHx9whFBUDdcdYgNdto669tGe2BUGJeE2mZCkX",
  "key15": "26Zo6bhKDF9muLUdW7b1UDGD8hZYM9UZTxhetvokEnok4vewsCPC1n3p9ZTqRpDpkg75azQYE8ummhWyV1SfDoHz",
  "key16": "P5EB5MNB3mE7x4sFspHdGpcJi6yQYeZUcHPezvzxdKnAR2WfZf88qPzQ6awjenW4gZvSVLF1dHzeU3VvH21qE4n",
  "key17": "2fu1c4L9B91aJysG4edpwia7Hx8ZNfksxhE9cth7EzwmcQuuULN4Lgha9GZGjYqz7qWnHyJmpyJYP9tGGmyA9p94",
  "key18": "C5HsAAp2iHbaN8KFUb8HPRMGBGkN2C9qUkB7pPRcWCx6Nyohfuy9PeAXJxmMPAa3jgSwthodPCjfumW7Q5625Tu",
  "key19": "2m1kJmyqj3rnoMryFPBU9NjhcEtutFdKzbu7GQKYFo5P1SRtD13iPC2yaEVszJp5cKs8wLr5k5Uf6nEmfyWPGGLH",
  "key20": "TBmr1ggeuzizjPf9rHwtNE2BoDsnmZXbhmn8DTpYM8dCtuF6Pm5uFC2T2F91shg6koThoh5jNe6p83c4wUoBesf",
  "key21": "ULNtyte2gyGMHYbjzXjwmwvSZKDJ4SSwcr8cgy2TDPU9b8hrTRu4e6929RfsUL2uRqkBaD7pwGDtpPADxFCrTxW",
  "key22": "5MUmZebA86LEqzJNpfGZUL1xfe7vtBtRctjvG42qJgRzeUG8EUfDaKGDjTPzUkY5Kox4YRmDGrieHSeQrSbY9JLL",
  "key23": "2supZYQ7L5tk2RXR1vf8RpjGMsNVfWXMy2RUf5STsPc9XdyxQayfHJzEZUvhBFhZkQdo6Pr9DSUE2MDe2tJawLHK",
  "key24": "4Mj3YQ45ditV5gCZBWmyAa8dtNyx1xs1cvJdtv5QY2bkBghWq7sJ8Z22Jc5LScqhtT7aYn9Amo4QU3FdroktwL9L",
  "key25": "4vRzHYbaXENDKJrEXTZpkjrtfP3TJrvCjCf2QcMrw4SqScAwsMXsLkiED7buHX5HLBXsy4xBTtkSKKdvmyTfkQk7",
  "key26": "2z9Aq7faSwcWjwyr4AkhBTEcKWmJ2X92bZzYc2eXhT1Zy8ZqciyR4iLrw4XLSeREtUFr2fAo7odD9y7hmn4vuw78",
  "key27": "54XAJCaJvoQ5qwp6mS5AexWDuqXqDSM83iD2PB6LKQ1CPvA6FQutN29QiHxoTbiEE1DPzpgDoiFeSPvJsxAjDRYi",
  "key28": "5iQbTvU6idhaPJB13DXf4q7YzTSxgEUpPCPXToh7D1qWoX2Tt8nktjj78o7e1h7T3DmArTFsDFMq1iHaLYVwLNSj",
  "key29": "KsJ4hE8rVRDqVX7pgYcnxxkhs6B1KNohPfTxNuFJtLFgSj63YshgxwUFjS9PNYzanDvdyQTdMVk59fyhZSS1SbZ",
  "key30": "2ZbaYWZGgTHZfmBCee7kgBXGPkXkZMoLHJn9W588iAcd5v19gwTycZULGyavrjWoUvxwj24ch3Hw8Z2drQY3mFee",
  "key31": "4zrEbYr63QRgLgnhg7MokSG2DoZvdM4h9KW6j6oKiCGkX3xofFSxVWoExZcfKHzP4Qtmee4Tf4MxmZ7WZbyoNoSV",
  "key32": "5yS4Fcc11n4F1QPCo8V8Btjbv36md3vtpcCFCd6gKFq4HuQUpDAnRvB1ehXPxkqYajAHywZ3e5UMDYvKZgeuCMF",
  "key33": "392a3oLbhJwrYLUETDtNFUaSka3ZYDm5LcTEHw7MZTB2BZSdUTMaLJqdkzZZWXsUDBd9CuFLBYM1y8t6PpLcJfvL",
  "key34": "2x4HNJqngpZj51xzWpTevroM1JTKe3Gcct4ASWpfgoxcwqKdTWnBKT7rKTX92MkfS8MsJkgohy6oQLhBQ6aV6p3G",
  "key35": "5yptWeHuVuPTQPELCX41zLmoKQJY1b2k5fXaGhXrQHM22kfLxY4SqbgZk2ZPQ5bQEQime4X1XzkxxYzpqa6nEEEU"
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
