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
    "3N762D1dRtuZxJzWrEikQ2s32FsS2V8wyAvAUQKoZurk8j8xxfZMsgLYQBCJ54ZjHKLJjCUZdXsaz8RzbUV7s2wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qo5AyUd58gDMQfsWjcvzfhcrAHTUEi2j6Ap57nycnudV7s4EzDkyTKafUsgYJPK8ghxgSmjHdNiCrXeYYNYJbKX",
  "key1": "4uuTBqX1ZiXEzGnfUWNQEacgfRNFLoRZzBwdtnjAykrPveUkM9QNFXu4i4bYAetbkTacj5FyLGE7YXd4MkTtG1T6",
  "key2": "5en6AaSXWq6pB6kn5AWSeGyT71j7E3UtxNkVi296v5yrRLE5oqHYmLo24ax4AnFozs79iqD8qsbtx25jFJNbBVto",
  "key3": "34qVKgABMvJaWwchSnwTLGJLRkBc4aksmkPvbWnryybcLtwNzgf7ckcPZ5NWerXH4ACPcVpmfAtt4rW9QQs6ma2c",
  "key4": "5hdB4dRjAb6jDCXE1tvaEBR7PyYzFqd2ZkocbZ8p8wWdFTA13vC4xWxCsoMkTU775ABxQWqqetryuNgyNajDwZmd",
  "key5": "39xeSJq2LaNd25h92Z1rkHsNrbDoGTFWP2Cdt5uBAyom6E2LVyNPqx8fG1L6Ud1wEcXoENUr2qzZQ6skz6X55CYf",
  "key6": "4NKsJqd2Rq8oxVC7NzncQLV8UrEpRhw9E3ErsYfQqowUPR6LESzpfWUcNF5m41i6KeqV4Zuk7YPWyqDvjYtn3SoW",
  "key7": "2HSuAQHQ8z61R2UaXk4asNK2v6Bc7XN2YpYBpzHusdEd7jZGXNArBhWmimbtTyiP37kj7EejJtq8T8zH8P1Dz63t",
  "key8": "2NjhakYEYXthczkDZ9Wou5sv74nAipxUW39ojfsLnr5pf29n93b8z2HdKeBdTTGo8a8djN6TZoCkybCYHCBm5V8G",
  "key9": "4rNWbnvVuKFe4EnvMShQMXnGn9M2WsWJHCGF4v1wxJvQDCwHSoXQVLcaqLiDY3tpfw8D3kLgTmXsQ89EofGeS6H6",
  "key10": "4WE4APJq4rZxhR16nLRSrVJu9wdKfETo2P7QpFwJKd5AVWXQxCWghRGurU9iZC7rjqFxugnYv6GcyjMnvDgdtu2B",
  "key11": "5q4rj5kjyhANza1UKVT5cZve748KdKeFzmMA3ZXCMvAPx3M7Gf2zJYYJbCx7Cmi9qRqCoANxPvPzDbHm3pMG1wMs",
  "key12": "3HzUFx8o3mqRvVhZUrJCWm9JxcjsPiSmDUf2UCXRJsrC4Ekk92gYa33bjBgiEvzk2F4WxxCzBTbmTTgfDnLzJSYL",
  "key13": "4QzC2pZgG4hEmwJLYELofTLqfH4d5yKug8HJFJJJy7ty9fJE35ZTB16PuF5snXW33a5EqtGJC2kdKGDvt5cPCLFh",
  "key14": "3bB7QjUdCn4U7Dm6zjhjb7RQ4JuJBJGbGPMUAYNEhjhhiNJKyXBQdzebYQF6dn3yZfBpJtmHSGq33WyoxBZ7W95n",
  "key15": "3TcYj1Yt679jQ3R2gpKLdFQXVCcbBuURHSKpqeP5ytRfdCVsFiHXnohLLCESKYvQaHRnvQBjMF1pouZcXYUoPowK",
  "key16": "r9dVk1PQC7QXRig92iraQvDSMmBeQWBCfM8p69ro9D5Mh7uK84U4rSJ68BFKJn4A26zCx2t3ZttSAv8x5cWyFzk",
  "key17": "63rnWGHpMB1MBtHwXC6cxa915RPX3gP68hQJjjkHZ6D4Dx3Ziizu6H5rDPEj3t7cDyozf4h8kJ23pPoZaczAd52h",
  "key18": "2eQAavSEXXbMA3PFVkpmfGxA2HcLYehtnssY5fsrHoCWNVpVtQbiGDDqMEQVo2jeHbNN27uaSQoSCHGZac1RnYGj",
  "key19": "2NQz85P7Xf3WBucobVdmag1wzEsfU6jM1qjsMmqpo7gxFdxhHx4kTLNS4g82xK3Yi7ERJgCrJAiwziu52UDwhVoL",
  "key20": "2pQDjRzLX6ez73uzwk6ipGnvoebxBVmfx8PBWjzLJxKqgHCRtxmT7nTXvhawSTxL1GceByAFik2M7cbRsAMyE9Cv",
  "key21": "4ykq3vYu2ABDv7udGTumov2ieXrLmz8R2yEGQhWSW45461iUX5H8323Je47ecFxztZRSpWanqNbBULhy1ffTVN7H",
  "key22": "2dVWaUmyUyUZ1BbruTgARKhnqxxeWoxdFVcuCgmBc5fLwrvCzaSRHSXdcYLqpCk3FD5QejwCznQ2HiGmp5GL1Bba",
  "key23": "3uvasaj8tLu6NK6QWR5nGVHMp19Z862BvY5SU1wM1eH5xn7pVPVp4r4M2PcFU5QRz7FoyrqaPV2sABHTfWMMxiPN",
  "key24": "37NWH3gNHV6xRGCQXdosVRD5o88j3pH8ZqUDp3F3jARDiXsGzUDpCJvoJaNMNiBwYdSvc5KkewhvRmHQkegVVEc",
  "key25": "2t9g8XrhBkCgHk29ZrLmNyP67uznBsihN3JSK3tM1D3iyDvnBqk8VaRQbW9BTCcvoJXw8zCipJfKYQwLihinpixw",
  "key26": "biTsoY8Xr3Y2S94rNsyC6quW4omYsCLGo3qpCe34rpkR73eT34XVXTNFnURdf4J7nG63buBEBRiwqbgm9MJifbz",
  "key27": "3yWoc2eAP8XgnYVz9foNJHfeSCvXvarG8SoRoAKw2r3Zkz71WkbqAUzw1vmGdS7UmcC84L2XN4xzwidon2XpDnCy",
  "key28": "3obYMu2MtNTxUiyPoqEfiPyVrkAv2v8SYGBkKaeZZFFR6TqrYkp2PYMMyKLsxbASdBwZiuQJCb7u4vWKrCs29yNL",
  "key29": "F76MZMHtXpmgmVVMoCbuza83RFExyN66VX8iVGe1RnzxHCb4MU16ETyvZsw8aK6xetMhb72U7SbNcKqtJWHwBKm",
  "key30": "39BZwytEDZWoe9G44tJi5Ep5A9AHmpAD8ngfY7Cu81sxw8JE3ekGQ4r5AkUJ7V8xi5c7absZDDS95BJM8vJ5SRKy",
  "key31": "2JbpyVwu1fuGCwYSkQg5LK4mfxNBn3giG1Tyz9FSvBkRBoDnSdLEG1hTyEiCFsSUm7zrPRXPvd1Khm8wAG3Q7gbV"
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
