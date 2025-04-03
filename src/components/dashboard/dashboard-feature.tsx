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
    "5GYHTRNueSMksHSqWQBZL2iwLBJSDgQdKqHavVqufUBYaUM6Y2A6o7Nqmc3UZxeUyvZkwUEg4B35qAd49EtoYkrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNxBefzrGU6k96fT76fokeH8tShWgiK62BFxaBHEFexehJt4az7hjWiUhrvmWQfZ7C2hSpZPiBrYdonvFPBJmR",
  "key1": "SG8rC8URQGSo2XPQHZVoJoBMYamxUmT8nwzNbZYdhFb9sVC3QHy1sryWyJ8Hcf9VmSkfh8b6MbySyyviZSxtb2f",
  "key2": "3YH9jjei42jCb2gp6egVUNSckP9Hiz3qzBcsk89m3PbWQLEoaedk1M5UWbnNWzJdYZS4GL8triMzYGJmS8o2JYnL",
  "key3": "2y5pt9Hi3ypq8wcaUsgpwv4Rr1y3FZWRnTFXNK1wtYQw53NouJXRskCjyoRrMFYxuGiThz7WcJ3SCy3t68gfhokP",
  "key4": "2N4ccmnzUomn5tT4xtSng482Xoura2FpsVdcioJ78ViKVPuYgUQCFizdAigJJtjyZAXVL1dL8Vg71EhXYrZWgsdN",
  "key5": "2cszWxrYJZXi631mm9wJ23LjvKxviPxDNc9yoHXncoWgRFe4g5Ci8RiNxNEuSvFuKC7h2qCQufNNqiV47qi7KZmc",
  "key6": "25Hb5Ja8qrDsbAVzJJz3QhQ2jhVVDPVxQ7MATMxTEw13zK7ni36sRrstTm1RviyCMsb5Gd41qGK4C3iA2xCWviVg",
  "key7": "4N9CVRTKGX9eLe9MBMpUYUgb3JacP6w8upnNn9mFUZQo7pFarh3WF7aAbFhAtc8f1wfgDmmBNEq5o4UwGdBhATwn",
  "key8": "3KgwDEKNGS5pksHPCTNY7SeL1XyB5H8L31nGkjCwPaC9pteeAE5adNhCBbxELDecRZztLEfpCtfewya5D16tWY9y",
  "key9": "kj4kpBp6Z2FpQu11U5sdRosD7KKm4BPQ2jvBY5FwKrYi3sqN64Ttweydu2gdTnHKc6PgGX1VQmg2whFJKfDkanB",
  "key10": "utTjQGes5dBKunMJu7miuWuyifWJDwKobisvKvrGTWLyvSVMZLKMBEkd3iUdaVcsVLtmiEimf4i1wdsLRKLWUf7",
  "key11": "65NdyPC5FQL35x1ejA6wtcrZMPQQiwuKsxisP9PL2yRMK4sEMUGEMHvnhLyStZs6Umo9fyKYaZHweb2WQsZfGHQe",
  "key12": "3U8J3sGLVdpehyDsnACQQrHjX5iUUxCzz2EDWEGbieVbyj4dEALWXHGyVRTX9QMPkeZq4vVTECw96SazVhXMKtLg",
  "key13": "546jL8yV1kC8CR7uMRVyZ9UymLDvKsYuiVPZDxLSJK2FuLa49B9Tn6gaTsWc4yCiSei3jYjogR3E9kVsiyV9Zv7D",
  "key14": "4UGHAgTs7WTD5dUAhgDbpJwv4LkrVY5QkBmySoAHnRKyg7R6hDPLKB9ZbRnmGfbXJbhFZdFDWmfzgMj9yjT8d3Td",
  "key15": "2a58edPRETe3JapVq2cx1pphX2HERcoRu4siW1gfDPfYKNCGDyvK1BFCbPbccWaqdp2LQP9ozvvJohkkZirDWjDt",
  "key16": "5TW9joESumvz83JnYUiymqp8XGgJWLByR8Rw1V6Vad4bVWkeH8zG1dWwdeDzSyMcamjTjRxMg3nvvvkgVJnciRLq",
  "key17": "D8j1v52rUrsjgJ6B4dB1PgsPej1URnhy51Akoj9LfrxQo8C9QVECbSJqJ1dP1By3pFFW9w6dFcstmKwhpQPrpJH",
  "key18": "3bCSByUaJPT6uq4o2DWfdFT1DEjjm1BPXagUM8WLSEkxAkwi5GNKWjpRpyyeoo7jPoNpupTSenNbWPqgCxbCxB6d",
  "key19": "FaLHaBRtBMZW4FCfv9Psgtt1UqSxT1kKsDvjKqFDm2dBg4NnjcdyFN1kkYpxVwfxK9Xoyehj6Kd3xUDHKFum6tR",
  "key20": "4RBSZWQYokAc69pvALMxiCUDtq8JTtJ8jbMqTJccXHhLork6L2Dnk52njsThKNXEBfKLtMqKDHzUSgcp6g1wz33A",
  "key21": "4UoKC9mpNXS5TtyWiqzkApJLc5kFUq3yRe5xPFiTiaTAk7qKGHiVWCvzedDFJ6fpReNPrG7jq9REcvxPZC7ZwhdR",
  "key22": "2HXmELDf1Q9Kw7Vi1qgMMKe98w9vxGkFP6AwPMWtCorcJgVMtUSpi7WprCd7KVVC8GzX8jCp4rgvWWqwGHwiKY2W",
  "key23": "2awTjzKzjwMtXkHdjfrZMrsYjPTgASj1L2bdTkTE6mUcsJ3LQP5bKTqZZZUVHSmNBcsuHQ7rk4A9vBa8jysJzYFG",
  "key24": "37uKD7WQPuVa82s7vtehYWAqaLUn6NsAapsmcBJJMxT4NgER5vYYZPwDkJQTodrD1HWrjKySQXLDDRwoeU7L3U5z",
  "key25": "2XHU2ngoWiD8Jkr9Uhe8fugtY9ZjNJcGdBUyuCEH9HvyqFimJT4SC4TzwFSKWgLgYeie43rJ8ukuy3x4cN7rN2NN",
  "key26": "5ktCaAG1hx3cX9eUCoRr9ChUvgNpxnKPGRUgjm85K4eLHCd4Wg13CpvFeqRKDiekBjtLBEFQLgrcXRKoEvN3NQPM",
  "key27": "3J8mJ7x2myVnJDc4ddvek3rz4CJPKt6PzJXmn23GzBDc89o3hJci1qmT2vvDgYBxmeddJN5HdC4YXGfxxvANkU1r",
  "key28": "3MDPQyEnenZ3xxVBuX7krv73FPgGo6KRVGUAdLAp8kdQ29BkznrFLJ8q7erMson7UaU45Qt8C8KAqGsz3Bzn6EVz",
  "key29": "5QKQoaCGrNFYGqQKwuDUsBgQr9r6MyTHiHUT7XDg7iJ5kkof95QPFtgncmcDWxuqWCopXemQG9duUZVnuebtdiZK",
  "key30": "2fGPamFdkPrQMxDtDPwTPSxnkiaCvGkBh3VKRR5riD9Jw8fhTbZANxgmV1Luc46aN95sB78iyefBFgbz8NYePFfL",
  "key31": "2BBRgctAFisnUdUmbXHxECEa5B2Qn355HoxGek2CLMG6DY8YbKoNLeXdJtKazyDcfQ6ZCZLfS65K9jAdESMqLcBr",
  "key32": "5sDZVxuZ6bDjA2Mb8STwj7CUU2GZ961hVahvyHWuB9rUcDNpgQjCUjYKYti1ybccGAagEn1LSfGJH85LnTtWQ4Hy",
  "key33": "3YZeQrYYUwW3MF6Wa1TAGGfPGZj41BjqFVLk4Tmx57KEiJNnRRo2ha2t3DyV41UuJAekje6s6BBXzApFFT8hE72v"
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
