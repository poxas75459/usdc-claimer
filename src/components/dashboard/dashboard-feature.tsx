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
    "5pUrGBk9DRNQvrkXPNSaqfKHcccetFeZVNagRPvLMHm4j83jSApuL3uxcoTmzpCz2G1Qsn1nfLPi5Vd3VyhJmzE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRypZHywg85MNKefyT9zRRMb4BR2Kpuj6mTicSs5Q3ZJvTAr2dCmQzLPQhPM1hkx7sBrfAuD6zuoBw6MV89z6Z9",
  "key1": "3bHVz974vr3JvQgXkPRDeNdGuNxgfos4G42uTPSBoU48eUxg7UZasurcgpqc6Z6ZZ1UhuVEdKSTuz9NtWBqQ6WBk",
  "key2": "5HVnbedi49yEUpZFz8qK9icvxTLGUhWTcgjA2MjcsWhCp5sasQNiv93q7ou7Q8wUnHjkeesFgVjNC1UZvvuZp48r",
  "key3": "572WeEB85JnZAjQtn4DGtbBdPer3hH8EJxES5BUkvnHbnafqkKxZFSPp1fgmQSz1xiUcbBaGHnwWGZrhJy975xCy",
  "key4": "5Ca9Vb6UvebFcoSW9RzCc5TJaXEfigX9zp4ZVTJPVoUoP7YG72WBAzWXzVBdrp6xqwGEopBB4x9RDzxQybwk99rT",
  "key5": "4XnSgFLzxUNXzuBokVeh4i63T5KRUtu4kWDuB8JgCyrWaAt4kRjLSf6MRdcYFZWqVNv4pUvoxYGBHApbVaZvqoBd",
  "key6": "4hXgYk7bcu1s3jxqzgFvetDeZ2E9zWwmFywCHetyK3YNW4rh6fZkDFovnfCwF3g1eRSQSUg3FnTZ6oSD9QdjzNLR",
  "key7": "5tQTws6enNb7uiQouZQdnVGGqsq66Kijd9jYq5sCLJMEVAn1DkgZ4er2qe7dcxuJf4bu9R5JrkxbAoTSKr2HL832",
  "key8": "2HHnSEYSVmLnepDx5T6U7UkDMgHxFjiCMJXesMBuT9K1QSN1k9VefnKUtkDxEXkRtYL5McrfuPQZPcEBKTTWQoWx",
  "key9": "5skfgJHvj7gBGgokBVEvVpTyuyiZHrAnn8Fod9kEtrTU9U1BrAgtyVxUCpsv2UVsxnvaXHpFRYjyuBTWnojXjn99",
  "key10": "jUgs5BpTP81FrAYnDgCSQUxLoM9Nj6qCkchHK1ptmyfkVUaUX8hKuxyiAtThGP1cWHNqiDTcGGTPn5QUGVg1P6K",
  "key11": "2myYtkyTLmNFSj5hf1vBM6sFUGHcR4zLeHJ9uU5zAo4u3Bd7ECJMr3pGecfuFj1W8efxqCgiq3mHDyvBXgtMjyiX",
  "key12": "5jJuaLFQzE1NNWp2fgWpp1SSMeyuFTAsAwta4i6a6qAS4F14pYHEK5SxiHcyomPr5ViCjEoXKgdX2bxUi7zMDvJy",
  "key13": "5FwE12jZTvguLKQX72ST5R7V94WEgyAZhU5m74UC3Sq4eF2GHdZwxG2ojSFPHWZREAMnBAcye9mvyy7WHSb2dqno",
  "key14": "3tocos5XiCfETBSVmhFvyrWpmBmUqkrDuioQf5Jwk1chBKhoW1DmvQrqpK6UuBYk3Z1eRurQnGAZZg6pgfgtzNme",
  "key15": "5EdVKChxpXi9TEXBGFCAAGpUiGVeL85hAa4DbDpHdp5oFs3W1U4qZDVGk77a8XFLYFhKnR7yPHfXrLP6HeJPe2xS",
  "key16": "4qkgwTTHhKKQj5f7HKcBkAyeZ6bh3wRvrHJgM9hiBuDbY34o97h6iHTH54j2jYM4a6VPZYwvAqx3mRjaioSyQV5e",
  "key17": "5Wed6CTBXeiaYnJYPu4UciRnFDWCuw8V8ZsfrusQ9aMPCNFJbxsVMTtbUZzP3YLAwGc3CZrLSK99ASAip8rGK7ok",
  "key18": "4Wcm8mW96kA72N86Jfxct622zuvzyWU3AHxxYm4pt1smC64j87yEJ6sB1uHRvstMDPzm4dfuQA9CnqDfA2uqDj9F",
  "key19": "51WN6Xbi8NWmiQgrGu4A1QLrX5pN4pPgTF95WHrT7oYGB6pgw2JEs6ykELo6FFedSXSCYMzU4wJyohbRjySExTNY",
  "key20": "54TFc3UkcwYbFw5kWapKA8wnx5nwHf2LBbrmxMEnGQVQfuVNjEatyk4Jxu7sUoecRcgeEz2XpcXwPGfoH92U5dZK",
  "key21": "3veUBoxyhPBfEHaAUZPTKZpW8UUBQnmzR37LMwT6bQUiEUHJhtTfLd7ToF4XLumBTevkrVMfrUAFEqrr77piRm3V",
  "key22": "5KsoU5dApqdgtSZWx3c23eW9WoEgqZL1HsQRzA6Xh5FBaua7kfc29Vm7u2rv8NRjhvdatk6Acd491fjYfzK38ujy",
  "key23": "JASFc5KJ2qmDeHPXeozqVxq4jho66XYFCgqt2Q6g5GgpGnMsZCwxAfzAL6hTxwwutEjosAMrPqSsG2aMobJazBj",
  "key24": "32GsqewKpjnj7c9wjnZPqPcBGNiMGgqUpPGKmyHaQx5ALvdyPn2d8crYTHaPeXUsEqn8wKtPNxmvJXoGeXSPvxKg",
  "key25": "3D8tDstkkD671CPhJpGEXu13xqfgP2J6cbCFm5xSJ8jKcEWe2BTC4WxhXohj2pE4U9PcE87SEFDHEU5vUR8ozY9v",
  "key26": "4C2VKCEGqmUG2f6ogtYM4cZQZs5m9pAtTWpUHC3JN88WwATtpqytUsJRXGiaKn4t6pWk2fDqPC3mZpmvaADhm9D7",
  "key27": "3P1bePut529NzpyYsBCq7m2H5zjyb2cVgqCjxxZjLVrh5TwUudainPLEkzgazVp7EmwaaSjSxVJDEAaB5aHaFCVC",
  "key28": "3e7ddP9WTQJtgmz5ysvrtr2eVwERe2tkECoRXYEgcmUDEfP2EdLy7MaDFuimmDVZfFRFoDfFcdx4YqW13K4hafUU",
  "key29": "48nckyDtrnhR58qThdNF5SY8NFcGB2Z3Fun3s4LRmsGbmjkJZEgDSi3DY45jKELsMYoUeeazQnK7fnbWUCdFq9nF",
  "key30": "4eiouLBoBgJawaqvpjJj1gGUjhK9U7PVWuUWVFf8Vn1GZRWtavdgUTCkgz7G9sjkNSCPWfMdxsCe5BAGcKXZmdjY",
  "key31": "5ad5caKf7xqXj9V55JkkLbSWmjjn4Cx4Pkxu29YatHGjiF4Dq8WeW6Z2FsL1q1rjyzGPt8USM8srX2okPeeZAtE7",
  "key32": "3sYXLMqnf5rQfe6LxZvZmBVNrappHzoG2B89jxqtT8qUfzYtXDWiygD8wqRVaiNktSrhdYQwm2mpYzeeDwcw5jn2",
  "key33": "BgkcdtTfJPTnq18zaBFNC4uQivstqcrehihUGn3dE9tsAm5E2KHiP2Jr4erxWKWMgMH8c3A4h3KxdHRKk3dwJLv",
  "key34": "4SH1WmXd6JUznoKYRQjysYuiSHPvZo6gHj5hLJUxrAbv8a8YMz3tpuVSbDo1UJXtAtMWGAJTMUfc2eCFHEHHwenD",
  "key35": "26TfkzcMu7ikC132CipuBPvb913XXr71nakdUZ4YtaqeuNqJ2PL937VtqPDnt9syoGAENPNmra5XhSUTi9dJfhDJ",
  "key36": "3JWBWUjXqtmDRyg7ZhmjVDMW7nGq18Qx9WE8QswA8rkSL7iVH7YG6bkdHewHDzWg4iK7asSpwJRYQhipC19JU7FV",
  "key37": "42JRPsthFZ9ME8Xo3qEgRaS4BouMiDR7fh1RjR3b539PTw1EA6gSDh6auJiWoccLCa7YadRU3z62NW3opufovJgF",
  "key38": "3BLbTbrqoUVZ6VS4meT3ijJ8eWWW3hoz9bzqtpKWgB7YgQ9jcHPCZFoYdE19AFu4jqFNTUR8Q93EDAZSsfavkonD"
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
