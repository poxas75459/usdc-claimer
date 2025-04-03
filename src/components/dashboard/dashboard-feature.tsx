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
    "5hku8yLPB1KCJXWWxHohwgDKW5YZoo743SK3rtoCRWKb54TDTNUrLuwMtcFx74CmHqbfLB6PQjDNaUShUranxDtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aaAdmPtTCizyvHTfHDkSy6E9EHCSSdkRowK82NoXihFmYDWC3DqJBUBvwwgSBWm3NDuBnfziZXkH9QRdkmngtCA",
  "key1": "3m857i8HRtqsbaA9HcMytwdmouxriJsiGUk5Y5hUao9K3yLhGz2TrENtKJa7bkfe6SVKUfJC3FeGV2GbTvVqXUsT",
  "key2": "2ea1EFtv5FUJB186ZH1itLSfBuYeryPymWXyZdPj9mQFFYdJnNE8T98jt4AJUGBm5cgyydSYh2ZtKNAsG9Zw2yr1",
  "key3": "28bSC4zgq5fAZ3WZZQVsmBepHj7f1NLH1cPHuyaUarbdqwPJqjGS3hTaXmMZpPByjBkWCUggEwFtfeahpdT1mGKc",
  "key4": "2QNd2g7SHGKjAzETZqzpn4GSVD6T5B816bgFazYsWisLQehwrTKXUYqZ7uDYjL3WY79B66aXYkHDEeEeqWDaAoAs",
  "key5": "2dM6PRQ1HqmV5anRhKdC8m4XFGS8ujUaHAEgMLeVc5HdmJdbdiKk5qzJE6SgjDpqYQxQdTfacDoVTYH94kJ1YoD3",
  "key6": "4Y9D6fbrBEt2mYXDjmPV5yuWyxQfZiTNR6b6CPyYF6UMT3wRcJhGqGsWokuWtRF1ssVvpFTn8yaxRGijZKjufs3G",
  "key7": "4qUv2VpGauiAnH1NSSMqJ5g8UR7Lv39p1kppcityB6y8LTfVkugLXwT5Cq6YxU9LXcWocPGu9K4jwDPGF7tzYF9d",
  "key8": "3CGN8PfqDxbeQdyG7kcbGuyEZQbDkaCtsWeDvW5i9543XsZVo4vAN6tSGnwUgLUqLhNgUGYBe5J1pwhciyh4Zh4E",
  "key9": "EZrzxFLY5cF91Lb2DFemomF4CpvhwipuNYwxLvxVrNicv5cx8tmuxeRN6THZAAGYfoGDhwyXVfqCec7Bi56kzH4",
  "key10": "taXkRPkBrop6Wqv1wcgXATDbEKbiu7RF3PxqsgfPRDZXemd8zXLNKpSvbMs1yrswuDDZLZjBbofLfq9yLUozEvV",
  "key11": "4ot2jBfw9Ysx7zqwgaSxBMdFhiqX5yBfmhSk5iNY9DCEbBNVkuqpcFuxgYYVP2t2XarNXWV8USWnN26NvBVVbX8B",
  "key12": "4yav4kruFZzbqe8BYgb2m45tM3phYhosTZifcCVwoyfnQrvUEYbpVk1fCovNV59SpUSVYEgi5V7RzGbavEU7HY79",
  "key13": "2HoN4FyTJMdzVpXLxRddAhsRYywVg8SCBF6mNFQzjyX4EeHMDF1sUZ6maX7qS5vYGvpd8JNbwmjuoQPLgAvtKhCk",
  "key14": "53DRxyAgpqvfEU3kLoMXirSzzon3v1KVvTZQRHRMPJVAi3hMi9QkxvAV5GHD9LCt7kCm66S2yMjefNmehkR3P6vK",
  "key15": "KFqH4bhvEZQJnUCTkPzV1GHuv4Um5xrdtwcQNqxrn35DJWhmD5fDjYFSs1DNGMSKAkXrtfnwYGuSNy3cakHmxfj",
  "key16": "5fGZar1MizPVQZvhMbEjFBTYtjQ43HDVUw96fuRUzRpSTRyytvcGViE6Pp31HHJRinvn7ZVAWAvw7TJaictpypAP",
  "key17": "L5MdQ45cVA5SXb1X6gTgdiLxQtZLAMor2LESmeWuhCWZhcbpidsHpBg1u8fWk81Ndo9UQ8vPYXtLh5TREv4CHhD",
  "key18": "3Hscv7sCs6wvq6RRUW3RqKXrSW3BgR65bfxoGCe1fVSUJLjXyGiQMT4s8uXtsHi5CZogWMtrnQmJ8eCAH7jPvmde",
  "key19": "5E3iDDNuQgA9Td8A5WxhEF7ZHkWmbB2BUY7NNHnXC1XrdYiULPL6EfvXW4wWPXC81tzWVypVx6jQ4cphJ74fT17o",
  "key20": "5epnsNYfREmzNWsjpVK7S2YTYKnAcpfKo3Ujqm83VpZdXLNknbGTpwk4nPHHo25oiNNEgsDg8BQKUe6Z4DaYxCen",
  "key21": "2TndAjfnzh4cQmRuyzfzCnckJQ77GRGr1BaXcNEDF4bhLbnyTzNvAziuZGZXv84ox4GhyZ84YEZAdcEreXBB7mLd",
  "key22": "4gDDeCFAXMQeoVPMit6955zjmQxbphvvj88KFtfUx7W9LDu1dpsroPnbpzzzuStCr2ASd3HMBxQyQcsCjwaj3RKp",
  "key23": "CmWtxRg7FjXXav7tEXnaZb53X1ijutMvT43j88yzjsZyWf5PJTC9C6HpTiSMyNM3Cb3fZ5qFQxk2oQythyuDsup",
  "key24": "YdAAzQjRW5CZSLpDDm4jaDPFxUo9iTbAS1oL3PZWUWBAVRnnEgde5SaHqKfyPCYMN79J4X3q8qiA7aWpUhVDzCV",
  "key25": "MvPebfGCnKsVvfFG7Ut3WoyWzZ5eHUjUY1pST9Fi8YmPedfoMB39C1ZB2iFu3zSYpwxtMkf5pzFtgJuEACfmrks",
  "key26": "3TqZcQBRMCJP2hXLGECnkNjYu9DJnt2fDSVGeqjjM2N3JorrJQNsE6HYf8KYiNvYzL6rtP9BgtzuihZvSJ8GVyeu",
  "key27": "2tU1YheWJz7E66Lr3cjZfGRUjQHUz88LoxqDuNQyDtAuATtbQ4AqvTY88PyKxHsUJyFZ8cV6SRfE6yJK9DYSiQoT",
  "key28": "4df5QicgEKKYXpZwZba1UPgR9m1TthhdtEWxXLFqyox2S74NEfTDWBbRRMT1pED3ii8ieWcVrBmj3nS4h55vKEEN",
  "key29": "2KczEXWmLbYCQiMpHjRPPFa6kihKP2qaAngQ7V2FUgNsK9f1rV16MkXm277aeuq3S5S8y1YRLeRB3QAXCq4Tgr1v",
  "key30": "P3TQJY8HLrydpXR1JLR2dTptNBTBXsyBZeye8qgZwtRH9HZmS39aYXf2T229SBYQDDYWCvHuRDBrGFGfsPKMU45"
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
