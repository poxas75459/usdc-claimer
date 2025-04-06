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
    "452eVptc5vaUTLcUjVZVJLZWkupv2C88FU8BMpy3t1eu2zZvc9SbDR1hjL4jQ7btXfAV41rbLtsdWL2ckwgzRfJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTVga29cwUU3nnXaNgdm4JxmSwTnfWeW4rAJnEM8sSaFqe4oNhN8MQpuJqx2xhBiJhs37iFbD31ypCkQrF6JoaD",
  "key1": "3moeWBZZUALWtVLigfsGzaXAdzBo5GL69TKxWWyX7TJv9Gc9TatPWjWySA8bQ1K4iFDNw2nH8wffjw6G4KM2bsWc",
  "key2": "5oFQLdhxrLwHS4AaAgMQ1a4CNTo3e37M8N2SdL8Xmjn3aswJuYgooN2rHpdFKKGWqbrXMNiqjKchBcoKbARcRDvx",
  "key3": "2kQR7GMHgiFpZUTKp1cCw7sffUVBvKJg9Z9vFaCkKoSQAhEFUEXVLN2Vj8s1brDDJA3DcwMREH6kViUiR6xqF549",
  "key4": "4BVDnuTz7RUyXf6n9qesCsfLUeR8f6zBk5q65zCBA1dYr34Fu9QvK2RcmnBZ1BG2eBrgLd1mHbnY2HCArEgmAzc1",
  "key5": "3TrCH4SELpAUAo1BSup7z5hPFBegPz8eHgyi57taxs6kSekxSWzhALdPqRyu6iwXbyGCD6nL3r1423HiN6VdWyAz",
  "key6": "4rZczZMZrCZWVAefjSUn8Xjdm24JkbrfTubqbrra3MdvQXUJMZNgZgrNG65CDmMUEWN7RWQDukGg2PrZo8tN6jg3",
  "key7": "Qh1cA3uQyiEyRCtZ7VstQ6ptiQMU18adiykRgiecgB5EPvbp8LNYggaQfHUinydCqFiyVSxekXV2ttAzN8HXMW3",
  "key8": "4o26oiRdisydUd17tf87fj4ZhUYSK4kKLnGrJbSngyU6PzTDxE7hTn5M2JFKpuAiTbM8BrLjfbpvtKpUnSK99cyS",
  "key9": "LdgtviyEK1jTAgLadpxQ6VLY9SgRuprcieNx6NzSDuHn77s6qbh5XsTUzUaNh1grzPpHjNADBZk9Z82sfBqnTRX",
  "key10": "3iAzPhRqjPXEvwon2GXif1EGKhEwBZQ8mb9vp5i9ZgRsqXU64dGLiNNitwsEdqYe8JWUnYnMNbnEuj8JRaCBgkCR",
  "key11": "2kRniFpBkWN5Qi8axymUrdujGtmyx47ics1Px2DQ1qcySJMt4MuaT1u9bBVXMxNPhzN7bmxt2Zii3qBj4o139j5j",
  "key12": "39AtiADJ6QnLFAdR6nzQbXMMBNVdqS5AFf2PEcd6YpCgngK9GeahCBirQTH7r4oa6DmAU951g4Mcs5Jo8Ubc5njb",
  "key13": "3mFn55wKKdT618dAFjKoYnPBUSwZkrcGPv2pB1ywgAjMehuHJCMvWZkvYnY7uq5BPo2hvjTJnQJhbvhpr1LBNiW1",
  "key14": "3kaXfZKdtLCvSnkv2mhb9eXKmcu6bfBKqHXeBERioFPmm74UgTiFLTTrMzgFueB85WWjLYMhmhZ5XXjFXZCGnbA4",
  "key15": "5Y3ZPTjHtojqWWpGZJ52zPdCdgChX1KWBpscyVvPieNgqU1omzr2bEw5cP5tQvAdKTZE1Xiv4pZWnPbFVP7jHDDM",
  "key16": "5x3wqkbPetiHpje63GNe6Se99jidJTiNPrN8iKvUhZYg4W6edKXxRuXbyKC6SPZmSpKkqUZua8j2w2ca83Kx4y2o",
  "key17": "4tkL1j9mkyqKTNuBrMEQrfeoBxnz5K7yeTfuyaimhWJq4MtxE9sAAwum7r8vmSkGk7FNH6psTvf4a3SmxTibgRCY",
  "key18": "289nevxVvbdjBTGMDF1xxdViftH32wp4zDcHdELhQQdtM7dXwTxw6xAWwDcuFTZcmZDt2bM2wyMfrB3vTA1WyReh",
  "key19": "iYzLu5qUwnK5dttJocBLu2chPHGfwKe5kuH53YSzy7RFmnQHUicNzJkKkr15iaFxb3h3n7j5UA5nok35FfiALi9",
  "key20": "4MH1MKhHXQ2h6cac6QNugdz36rJTeWNE3VxmuwPYbogZkMTwr3epncVHvjKvCCt4UxkaMf4WeCHPKfnKXzYa5d2M",
  "key21": "4V4HrKLFPimpMzc49X9NzpD5yFESxDiJuR68KMe3qZWwNrxWeR6UBh7z6jxoXuDS9SN7yXkcXwFbwnwADJh1ovWz",
  "key22": "4mr9ggGmvFqDqD6yAGkM4nqoz2fUHKcyDVLS4ecy9W39Cqepoc2KxGdTDhpp66kKt13whKLHq6JY9X8Aze69TKmm",
  "key23": "4wqRdcJPS9J8azpp4fRHwMsDXn5DCDjyjPdmT4dG9kqdyHGueVP8xVS5ZQ6xuqNLXNHkoY24YpQ2WBTnzNcCfp4Z",
  "key24": "DvNeQiekrqLFChFgV4avde2mxstsKzYbgQjkPAZmAsCzfjCvL8LF4NNwzErZSoCY8YkDt2cqYUTMKh8r72CcRWW",
  "key25": "5qaBXLtKyaiXDtQUjXuYa8TnxTStYmdrtbR2VgBNYuCXS2xY7sEq7ZuJDRCHb1QdwPgMDzX1jnMuJRukffhB23rb",
  "key26": "5QMCEKFfPfj7J82yjFiH8LFbr7n7KLEauLG3XziAw2bAjbHwvSkDSEHa6x3yc5CUZwCNoBQCgy68WpEqt8U6oiZx",
  "key27": "3CPvyfuqT9hnRDy6r16QpR1mfiVsGAHg64yWxyu985C53MGF9Vdu9mNmcCUWd2azXm5ojZTAQdTZu6pBkKQuNoJQ",
  "key28": "3AoJhc6P4V9xqDoCdCKfVJNiiKc4zFPRFRTN9cAgWSFyPffH36U16X8STn7V6yfQWcDezoiDBRVtA1FUt8U2VzVF",
  "key29": "4o1ZSA1b7RmfAxA11okxdx1PtAdc5MV9yMqg3SdAq98QeUEQaqaqzruLSDKyyRo7DqUNer7RW9VNkBgqeysvp4N4"
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
