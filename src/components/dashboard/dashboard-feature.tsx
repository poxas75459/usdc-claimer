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
    "5i8CjeAxUNqkWRpKXn6pRB4TdDzwUHbN1U5pnvyY3s7rz8LnSqLG3Zb2B18bLD39EAeVz2tkqbTSSnXkMQwYgFPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDeWKhsA1L8GWjbWeeGn9m98tSAMAhb8gY15Bv4MhBodE1H6zMFC8X9HHjzNv3jHacW9yrGrjCyWyHQ2kxsJqfM",
  "key1": "2FxPitD4VDtpFxz752DKHhQ3836gStbaQYGRCoeSxifzoay2QGzv3sAbYz4vk7J8PiCFpobAqTHDd5jTQqjg6BEZ",
  "key2": "gDbs8V3d8jbsPBdi1RCXxx6MuUPtrDNvVBiGJHMqZN8EcRGmS5TmwNsh8KrAmfGs6nV4gBD5FMN2YDssT2qoKfi",
  "key3": "35n7Tcn3tqJBgyqEUU1svtoowpCbjBG3sPLDhZzm5HX3gyUf462cgaj7pUCwvmK618CMbuPrsgrntv8sFcFdcDRu",
  "key4": "2bKS3TezpWPKh7RiGUvFka5rNWZRbew6a2AWEJu45dncEqnDZfck4NKj3iWh3nnV4V8yhRkMcXetcrA9MTFfvyr9",
  "key5": "5aNxChcL92L2T4NfBXL4DYcmpGhDpCt3CXGL9xskTNDsUQzuEZv4rUJXkCeJkcpt3hvib4oG5cmE7AcKtDgibhCx",
  "key6": "43PRg4MdumnA2qh2eU7sSz6tpj3Lb2QZDuseeprdbVs95Fe4sEcV5qXZmhGaEjqhUnV7DwiAHE43xwa34UJm59ij",
  "key7": "5h7sXkLKBZCfF3dUEp8m4R8CczqWGvovNEeWCUYFLigxibXRT77wLsJiQcLGFntqBc1xCN4bUghoZMTE9kMYrygx",
  "key8": "3dYqymvrxnVR23o7RsbyriKsN4XBW3CxCiujAuM2r9CmiGyftfecudGkKQSkbRhR287JY4276SSySagJAKynLFPV",
  "key9": "67ibpgwyKoYzyZEYwNWfA7CT2x367wWMxoDK7Qk5VFRihZ3xHm8fhPmHABadnsj8k3nJXhYpqB4tPZKPsg3ubyui",
  "key10": "uraCMoQvis46TcE3UjtXBm1irG3hhmrB5dagSFbv1D3ftLfDTLvyg7K7CCBXPSMctaT9T8TW1x8t8jKZx3e9X98",
  "key11": "54VMfAB5dQSbBs8HxJiWbtrJG9HqM5qbiuXWyZN5ZxLHDxeJFMT29fkE9q3n9KacYtF9x7oLz7w5FRMeUGFo4vkd",
  "key12": "5xePnV1DRJpHY8fzsuFKFC4aFB9438rCAy2wWGQuZnPB8612NX6StxLmS5RTvJy6KJE7n1ehAQ4cDYVnJ3UQ3xAJ",
  "key13": "5JHqhoe6L1PcmvUMSkwsoyjDq9xZUk5w3GsDXx4Sjn4QAqzVqJogWhRQP2SADHJsMS7kd6rgA9LMMgtogFWUSNH3",
  "key14": "24NNTbpSujU2iZr5HcSRs9151kbatUSL68WdhTiwrtcGkCSMYQSgu7vHVkd3eH8uuddgHNmbrt4LTGEPXs53eGMc",
  "key15": "2nP5g42Q3vy1CH4z2MFoneKAmZjHa14jLdEMA3Ebyz8jwD2kx9uPTRNJduXwoWB545QN8pyRcwFRotRQVDd2LzBc",
  "key16": "g5QFsDpnQHbyEP9tt322ykMzmtZSPmBr6XmbDpxjy9DbkQavP25heWeMyv6SixazCVDtNQE8E82bR3paBYtemB8",
  "key17": "4FvksW8Fw424EY9U3gpbwRt3zRoDpwPbXLXBd47xvaL3Rdu13HaVwHxkRe8zeECDurjmkSBzPfBaZ6HB2GpSqFjp",
  "key18": "CamtJhzBya9TQnpTMpgwZ76XT6MCxJu9NCtFgtrDKQN9Lh31MYETAvSsjmP4WYbzDnm8SinowweNDoJ8W3f71Z7",
  "key19": "rsvKMsV5y1L6yzhU3pYv211mQtA1uaEpTWAcAhrUdv9oorgTBAWWB3hoMnjqdmyu8ztMYMvjeL7sLnjUaYtV3m9",
  "key20": "42Ds6RiuB6hWuX83rGqbs9eXyY9GKrVamViBXZZvwEsFnd7jpfgxtcGBM1rK779wpm6htviTvVbf5fn8tG6Uax4X",
  "key21": "5BSFNB8LMnG8jJTicyqDKzh8FG4JbrnGXZEtBzUkJBviofPbi8tL6sLp3q8kDsww2zA3Ba5YtcGRLGpUeDw9jKp3",
  "key22": "5LvhPJ8UqVyCjW7BUyNLzfvUc8aFM7enH7GuSwiGea7nvTgLzpAbJSN3C3UrACwCSW1Ze4NZegcarNof3RN5At1Y",
  "key23": "uu24oLV91V8Kh3wAxXbLkGD25vkmxmUWDu1j5n8jnfQJaSzKn8cYPiGc8CmrDT2MRMsbpvyDtnPZnwhzqtxkScs",
  "key24": "5AtQzSpCedqUUgCjiHNFCfvdHVBbNDhVyaVTU2LA4D4wdZB6ik1YFHgNkhqbZH9kTvDxtMY7qyVfQyBAtNswQJNx",
  "key25": "41dwUgYVvN9QWrpteSBvAjnR8bJr1UMtNDKucPkLyHUJQPp7opn24zwi1pgm9htHae7gY9KLFvaYgbYMXB3K3nL9",
  "key26": "9MKQqZsKdsenEhsKaUWkqDCchX8ANNy4DrvNG1JzYeU8tUPbmJi9YrmWSaqRpMsnuvjCwxgvuKSW3L9GFft7YBk",
  "key27": "4MCrUGXCr9349awRsxr3eMVaLmLmengcampctDxeyB6GYYcoPeJPQWbWyVn1oaedwSDyMfgx71iPisJPvfWerwno",
  "key28": "21xgUgCkW4WZpZdA6AQEZmj5dtuky5Kc5LxZET6UxxoxxpxZUmMFTwHrSXifFLUveyU6zpvn11TaUPTwcn5LtMMU",
  "key29": "SpgGuZW4DxC93WKd1Ka4rhNN4fgpTZoVnhwMZNMjLNUW9dfzG5X42w7qBUgQcAUiEi4oMwwipwRBeHVSiDL86Rz",
  "key30": "w6VdmusgG9H41cYDxgs9z9U26hkjB6TZ8D5m4e73EBnZQbNJm2Nn3xab4HUNjJH3qpwgaZKiaTwgHyYXsHMCPee",
  "key31": "7MFT71ZVTMeTnCjZjQ5mHXVPDvUZ911WTMkUhvoevPTRYs17PchSRA6tGKHnouLeet7cRUnUnLAUMgx2b3WjjcR",
  "key32": "4V5sz89YNEcJ9VB8t7rQdqdW5mPizSyTSf9jzGWRR8P9J2xkY2X6UAR5X1HvQgz9Eny5xbgsSGwX1wTLeBUoYyLY",
  "key33": "4Vy5mxpWYrJ5xLy3B5zNJP49164RP6GNPqDM1qQi2ZtezmULCv91ruC5BDnNwLgHmPtZyiiseu2KsqEHQcnmQMiB",
  "key34": "3nH8gTN8xmpT37uTpDtQH7UV2icq4dQtSVHUrYKKFNZCcqQLvWdpMbi4z2rcFTL1bDPfGkTWzYZcgbE9q5zK3h2u",
  "key35": "2t7kyiMNJ4S9bVJ8pS3GFsZ7ZB9rx3gUQib4FvuG2PmpTT3x1tyzpEFWFRw15aHkNQ8B8uht8Mu2zTkbYzkrMWgu",
  "key36": "csKGKKusQ2dkaq3i68eSR3Sgf3xhLLGgShn453wABngvLXg4yWS56YMmN3mP1uP9zjRt2MCKdK8VYzjtv7Zokb2",
  "key37": "3ac3mnquDyTQe8YNKAqtJMBcK8zEZJn2gckAj2YKz5VLmgirDPgcNcaYFZ9YcNUQa7XCoQQbf2xTd1ysRxf9YvqJ",
  "key38": "3NvvwsBio77SNLBYfy1j6aeQuqCeJuhqYi85RbHpVNNbYP1SXsxV4oms36wttcNGE4CYrkWSTY3hJfGMkHDtrzo6",
  "key39": "2XsGEaeyunjJoUVb8GGzbwTgjZ5RrRE1Mz4r1Dd5YZanUfZv97pvagddHbod8p4ddEVWUVBx97iLC2f7dn5q7Uvh",
  "key40": "5woicw4hVuyVvWaYK8QhLAECnkoQSZjomgvuFNVB1LortwhhrPNVucvmeZ6HAtDU3yCMeFw93kmfzW3jMTJ3C9je",
  "key41": "pY8G1WzPENRA1hvgGZYXfsdC5wCtzV1pUMwnLRTL6rKXWQAyLH1FYoZC1yRumSpZe5LEo2MLvAuZ68H9ai5muHf",
  "key42": "4XC6YVQVQnRL7Amif3mFyUcMGaojR2UDwrYGnz86Gwm2TXdf7dELcHdZqSpdqhqiswT7cpJnpLmWwxJqTjmteW4K",
  "key43": "5AXEcJnYjAZQyrLLrbLYEvAXi6HfSwiPt3kb39QU4VWHBpbwSUdEmgbacgBxvHrpKy7r9qo6TfZiUvVujEnK4ZFu",
  "key44": "5P8j6QfMmRyAernxH3Lyonx9D5MQYpouUabJkX5wpibDn1p9XKddr6V6DCtRAZjJABqC4SHN9WtocNuf2T8Hj9wa"
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
