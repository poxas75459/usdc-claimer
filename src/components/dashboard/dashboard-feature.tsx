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
    "WrcTbcZxf7QVRYifVNwyZqYBVADg2PztZS3KZmbJG12KHhWx6D6BdcDysB3Fy4j7bKoi1x4AzRGExDzjkEtahwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZRj4jnFTuJTngX1Xr1HX9x1vRZkPx7ZHnwRxWS4f374AM3h9zwN6qxC6CszndJ5AgKGuSPamTUVc89gw4JGf5p",
  "key1": "3JqN6imV8Ype2wSQzMK7x3RugeJ35B6iwTwK6a4f2xuCSnQQ36haeHuzCy7dAko2mJJnmkFbd3NhPYjfoaf43UdN",
  "key2": "3LjKdhaHsRs7hFvggzhwVrPa39R1zZurwdXAQanF7BbJbANTfpM17wdy2hJmhericP4cp72ywcK4tQemumdsnL3c",
  "key3": "2Tb8BgJNprjhBYpus8Es1RTEuLQs3qr2ZwCMhMV8snAKbmAtgCVsQUj2Nf2xBrHn2ZiahgtybnZenaduWBF7mMJd",
  "key4": "gSUrL6md2FQPKa38a53zMN4B1BBA5jE134ocMPqfwEQi8azYZg3J1FaJv1pSkaYVRTtmCgbcDKWYVUMd1ZJEBWF",
  "key5": "4BFmVCTwf3hpYTtHvhxBuBRKUPkUWQMHWz4MpdkQpucBNub3tho5mUb5Px3JHdvNA2QJ4iTp7iZodHgVEt6LsS7q",
  "key6": "fnAtRzwsgW7AzMQHkZX44ifN546XvPyfeT13LTQ9jYxRydxae9DjiECqSnAYwHYoehTGAxTvgdDbAxC1kxescxd",
  "key7": "4WnH7NS7szpUjsS5Zhn19rP7bcig4KMjzxLpNuXs2gBGKxsqrbYeTsyjLnLUgcJEV3YQ9HZMiFzQnbSTzQzMYcmW",
  "key8": "4JS83M6BTcYz4QE2LZSNFxipD8pw2upVBm8y7woheF1nbEfd75yMyZy5D1zPheyTLndZSRTmUkqoZ1SVhuxWhwWp",
  "key9": "4Yhqp5UQRCVQoKkZWfNHiUdytuqHVFTC91adVuV84EBXcUCv9DECej9PntqLZTwuYgL3akepB8GHJthMW2bhpoR6",
  "key10": "4ZziyMULtxvyLttJdjKFc2KFtyKMTKgtAdCEqu9UZStZuF3T8UxnZYZY9sVgEeVkwP12irCg7bxjif47tFLiMBE2",
  "key11": "2DiqEtNascZcoKghcp4BMFK6HyuYGphxJqSSTaToLQBZmfbQXHs2fhgdyE87HEoPXgsietE3GieKaJhGuvp2Vech",
  "key12": "cv2n1Dt5JhF4DUQvo6Nz9jvZAFEhfe1kRZSREoBac8QTzW9AHyvynWEpZUdPutotQW5DhvKGWNVXVPuV2a6cA1M",
  "key13": "3bVZZLF5WpukZHUbW62iuBig2miWWd2ZPEpSax9rpqYRk3p3Cd4xVWrzdVNZQYYLMsodafUZB1bTRGneDpWrTWf3",
  "key14": "zws5C2sRex7C6zCnLZa9uuxmibTA8CuHUJZ1oHDY8rhZitps5MS5ANPtpyDp3LSLE6N6KxTccnoR4CEWqmpgGC6",
  "key15": "7MLRCC4GyUU9faMZUSWXo5n6hGHDFqYiwLfrSq93TQwpb1Rncgyv8K1Z9jwYmZhZ7uXFPso6FKqnBTB9fKmsKVa",
  "key16": "3A1GpbbFMfi3ggLo8hNcDBmKTi7xF4DtKwiSMvwA4DFo6F86y6trrqB51aWiuWNpBFannMVC14CPLnzugAwGBZ1y",
  "key17": "modJKsCzeHWR4jgyAK3ZwP8Dz7YBJcRjcuGadGeFRnWcSxHp6Ks2n9NT6ZEMTwdpgETFQkVngmZ7T3BGM4SuDCn",
  "key18": "4AnSVKbViSFdyp1p6fdNa8YDbxjWkw9L9yL1W5yf4368mAp4WGfQaLjGuZoECroqS83YcXkKKckRp5t7EF7BbGLe",
  "key19": "36i6fmF2yAJiBRXKzD5fATgh3hbg3eP5fSFJh9wg3PsMEsChqnWW8vGqABFvF9pXh8AD56NQyDckk5mDA4Gcn5H4",
  "key20": "3ZSvcWgyLqUhcft8StwhzneGcDeZExUowqXr8yB7a2YMfMCMsYxM4QwtVZqfoXt7kAMYESPzBcZrFDT83ZnFHL5P",
  "key21": "46XhFrTwbAoNHBtD3FYwihQNQyTYiuRLvN6Hg46TVFJiQw67SPqhVZQowdT7kokNZngFuRJ4aU5vpBVosMVRRnsd",
  "key22": "5T7M1HB5kd74CptNnyGuMwt7eroyfwn6QdjqkZS8YA87n2rQXC6rWqbHCq2kDqNAiuMN8ugenrDeaVpPYXpYuMj3",
  "key23": "5QvGiF9H6CTbcDxFtcAyDbCVYjyMLiV21mTs73QRZTv56Kij8KYNWZ8T29yh6xtbrApqMg5vxTeFnMUFQ36M5Vvs",
  "key24": "2RN4X7e6pt1rHx2mfTpfsf4DTSRYKMsHEN6AWxfSknvYhCB9ekTfLzXXybytXPsb9pwgqbQcrkxiEDD6rEDZNyXP",
  "key25": "3VsCzBSCi2sQ4GiKthNSTPTCbNnyky8XujCxFUkuaTY1ZcvQhUh25Jb9mb5p9erwPViTe7sUFtrZtJ6sUgudmLHz",
  "key26": "4BSUmFju9GPSuSomQeRCEbjF7n6BV8RaK3FkAWdTW65uAi1yFUwJmvpcroe8hvpGnkefFzjdd7KPEkftuVMmjMfM",
  "key27": "2P4fVk6Y85F68xudg1wDjFJnTTMAZmDSGiCWKPXfJWNEhCi8yF9RrdKmGsz2rEeXFFRGrkJS4rEJHBeLGDUDU4Bz",
  "key28": "41Lg2DKLoBzsPwUp1FQsXj574TbdGyeAppCtag1JjfWja15p6JA8FnVbaNQpf7fUn28h6P61PBzEFpknCt8swESk",
  "key29": "5KDqGzSu3hnfbUa3HwitSEU4xS17iB3GnAG7xKaGYXMjLyJTeBiTC9GdwW1oJVp4nsNpgxzbuUP7d9AjSFW93wKc",
  "key30": "59iR61Bvo4pbQTWhfvBUmfxpKtEAy4V5jShfkrHmnU3nGiPUD3aTqmoU9nKYQdXWmNdPxmvQ6w1MUYaqLJnuBo6",
  "key31": "5D4dvFcsskTR82sMoVkbdgQpNj22vH8pfr6mPEVhCwSaPpG3aPM4gCYjoZw1HmBdHit7gjCncc7ZsanwE5u54kVJ",
  "key32": "2GDCXez2NvoZSRaoFqB1LMKQWPzKksNJoCBH4spRnMSyUXWqWB9pUB57RSxww32iyoVUESzibAqG7MrvmxQHbXxt",
  "key33": "5U69QTLMzEGYW3LfwXFG2zKhpEqq23rR1hP1mux5zd7Jq9SNoRJSAHmZttU5pBX2HwdZqSenAPpfdc6gMHxndmEg",
  "key34": "2eoyi6p7KGaEB2yVfgVBL1aqpdRefjKooyQKCd89HHHZ5jcujWKeiEdMLkRkQscsp8xRdQwfBe2B4dFtQEQyz1te",
  "key35": "5K5RUMkreC7Ts8JLARV2kcyyKwnAtqVvf2VgYWmCjp22AZfogESMZfMtGfdkyyUzNygvaCRng4c1yFJ68e5Rnd5Z",
  "key36": "4iSx1YiRMpdgtqv15K3GJ2AX2nr9tEuRCn1MzXgBGmJ4AXFZfGbYbg6JRT2oPDkLz6A3etEvr6gWUyfLRPFMmsCS",
  "key37": "466EfzYVcJhdvymkh4FGnZg1JZ2i47haHx5greCKJUyLCQ59oonNM5dCsWULdj3N1N8rvxR3Q7WZErxN2BZtEkSS",
  "key38": "24EJcz7SprKf7mtzSEeAsWHUvyFQJ6SYvWnT78ksAfMF5vuMye9d172pUQ8LaSA2aAhgYfhdmPN14D7tyK3B3kzL",
  "key39": "4MyKj9eSVZYAaGFraSYz5JGLFnCDpMgRBk55sgJ8ibgsaEyxswYjY7LxgDL6WLRQ5oZFa292uj1wWVYnPTRLnnfi",
  "key40": "3YiZR45ULYV8orVNPqDzNQTL2UTUanjDfFou2MzBK2GnZssLw5xWAEFD8M7qjnK7jZs6uYy7REpLvhTwAPATVAKK",
  "key41": "2Pbss5yC1LnsNT8pKM38kTWQSETLXpKNkjwxWvpbcENpNjHYgmNNV6L5ZQshZFZFfL11YAWfUyv1gXYF3d9qPdJP",
  "key42": "3L9iejm916k3rGQr6iLoz9d38r1mEf3j9jA3ib3SnnjQNgPwZMJuqihGP5jmXEXVw66CpwtQV7i31sdY4cnUZh2M",
  "key43": "4wsvNm4F4jFisHz69p6EcgfXKH76qEj9XnK2sNn2GQEA3UCCE6KYJmagWd3CKtBhrVcvXzzpD2U7CgHVdbnhknLr"
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
