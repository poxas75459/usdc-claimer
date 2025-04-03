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
    "4MGcRu9pQYrJWixfBxwzqup1tTESan71HPT1z7e6cEUUmcqVJJBEfQHFn8mcBzWUsoYsYkmeKHnVXN7MDUpzmL9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g8LZVMd2z5rCAmEYz19ayhNtJKopgdaBGpqtB7TXDgVc4RR6SAhyB2uJsgBwiZmjxhgUrjgF3qDoKqyqZgVPCfM",
  "key1": "5MS5yGjURmoAG8eAnjaWHfuAkS3NTztGnVhSQqiz6NPzNEvxFYJfuP9Bj6R5TGatLqbbZbDAhC2aCiAJnZFi56tw",
  "key2": "421NmM4ZYYheoeXMogApbo6zWdBmySQbr7WGv7k91R9nRM62KxDbFDcPEhK4jZMF7ttLbRDfbvubviWxdfkLrYCQ",
  "key3": "5hHuo4hFFV9rwTPUiKq9TL2XgMHKAahAZEWg92Cqy36nJmbeRpJ4cQPBeAwNVag1xfzyWY1muwZ7LTD8zdPLbJDg",
  "key4": "4zW9n5CvGoU1Su4JYttTbYkgf2uDvVxrjgbCTC4cbFjPipzJXXwQKXjDyBYiDLmGbeZYohsA4U6M8ZismwAKbJ78",
  "key5": "2ksLjCqq4BCyj8vpQmfMJ2icUh24oiRwyFzGc1yiMCvDfLHNpXFrP6aJbSwpWfYUXxHaDV61wvVX3ewhA5wgrrxY",
  "key6": "5rdEYVtqAyWchqYVg5mEuVvW5f9jKUjN3Rsu648azAAPaDgLc8F6hsNhScAvPUrxqp5g5MzX6jWGLBphytC2CXkg",
  "key7": "5CRQ9feLqymaNgbZ9AqLSSofb2mLBHkdfLnu786bnB9TqZFouVd7swDxxywcqoDb7HY6WXZhKAhnKurYHbnMdZPk",
  "key8": "3n3TWfaQBUU6BgR4M2DsNK7QjcpXwEELywayVSvsuiUPCrJf7AG5FcTBkYug1Q6Kzg9oU9AgNc2pGEVa2FdxKKUv",
  "key9": "4NA9zqrXqxnTRMZMHKGGC8MGCrZ3x8cfgkTcG8v9Wctp2H6ixFtGjp4C8p9Amd1HnfC2AcmbAxriwQx4qJW5ircM",
  "key10": "4Qzj5aCmQEwBeDZs8krNQxGEFypKS78SHePJpSq9Bv2VXyffTSuxk4Nj8JdS58cWmX4XhnDvLe1v2wiqGG8gNsh7",
  "key11": "4vikdWLa9yYnAZ9TFP1Uq2WxsGjapkrQfJ81uYtRmeD289E4ftQX832VgoH1ZU639Lh9WMbmGroAeVr9xnaCA1tm",
  "key12": "5qMBnTkDHTC59fFTMgSWuWY99z7QTJu6jV4XWbxK1XrKsAB4rbtWTvD3QPkeW15mLUkDGULDKHBZX4nHxqAjrTDE",
  "key13": "62YCzNoNzmMAx5LWvjwUVveQsVtgUQNX9MHN8nRDaJBSGXUwdgeviKyumP6yknTCR1tGGbdHKouUWRCwAu7FuW2H",
  "key14": "57q5DYyoV25w8uGrtWbfsnqU3atebZEVaez7tHfwMbouwc7774HgiPb2LUyPhc4drjZ75NHTrTagtnM3H1oDbE7C",
  "key15": "3Tj4rgHpSdNcBomMwqucNDBVUMTHjFEEDamTytUxQRmjzTHawzNYFgqgQxVfpdxF6Fp5RCUZ5nWy983vxy1u2gmp",
  "key16": "4Zk4Rk1s4NkDequfCRBJSE4mguy3aDYF9syYgDhAhovtRrvvS9zrnQvggzRqUYByLhBVBu4j31rSGNAEBCCYjTqt",
  "key17": "28wy9dmmLAreQzeK7F4HbbGhbVKjJYjXuggfNoAteYtQJtzAyhTpDtutzvhTqZqCoGuYCftTjbrvdpHjSnGnrBv6",
  "key18": "2zbzjjYZkAEAC6WiusDnxJga6ovcnwYDWzEvmByGkqzmFP8Y5VEeB93wLHQwXW75CveWWM9bMKW24kKBs1g54fzv",
  "key19": "4WL8WWVJLLnwWYjF7YPvdp3uBJLWanASUguQPiTgq5sEiv5yWfdZw4hHX87WAG5JZqwbWLWpdFsd1Uak4BzUbNLp",
  "key20": "2mdtsmKEUgT7urne5bNRrog73AUx1c4xcNW3hotPFv3SQtz2A8Yr8fzGhuq9NrHF1xkcUAWedqhJDEsS8G5NbhY",
  "key21": "4QCD1y5pJZMAqYMVVHULWaRWpRFnpngCSwtBAhRof8hicKuKGan71Drfm2btpYPsx8X9ZaJVwRGJjcwtRkvMjuun",
  "key22": "2ktaDtYF5gDgsPa5gXAdpcPXqBWHuB4vxu7R2mQejA5HQi8cqyjXpBzGN8CseDWkVak1csy636p9MTDYfEr6z2v7",
  "key23": "3ghkLoY25DUSRCsVmrSEBTjRBrQTUHVZbSBdF8d8TwkY6SCqcmJZSmgFHE53JAPNXk2UA4MnWNFJuyzYJPN9r7Q3",
  "key24": "51oeUCsMHyaFVcpNN1PKwzpqBggCiB9BaD9ei2ZXcUg72rVWHt7K2U1h5CUc6wBqWC3ixVeJ13nwNCVegET31ZDy",
  "key25": "4SfsEYztwZ43MFa7UGgMn4g4qLD8JanWbH8KAuncJHBG44vcNjHbUBnLH5G6WGroAW74eCdkNoRxmwBgEJmjfXDv",
  "key26": "4ebhakrrUFv9dCHTK6EiUcfr4d7Uh3gAxazeuokdTujjTQxdbjRgYcU3ndccNrWUuUqgTZUF5xCLQdomSZv7VRoj",
  "key27": "2UXYpcyYrai9TbY6capSWGCf23H5Ca2bNB4XCVsc6dWLtmignQQJSYRYW7QdiYqSJUB5e7TdtV4CpY6qAUkki9Na",
  "key28": "3Vx6wZKiMrGTi7kKEx49UCHPj71acVJkFXUNH4wouHJyjRyQ7Cs6E6bgpeLD4zeVRUXqJyqyd5HhwkdonMyoz7mY",
  "key29": "3rkDVx1GM5Kf2JuShG4YrMYbAgpncqnRQUaH1CVaj8NFuofALWyGsvqoHevKsaG7grzZyQGKRGi2zZPMLaLHAWio",
  "key30": "4phWHgdhwTVzCdacsriMMLDBi8u3UwWzxfiHdPwYVgbktyCjnVKrq6p4yTocoBKXSvaoJw6CFcwu6ynEMopZR8GT",
  "key31": "3DccosKMhYncNpnT2MVg6Qe3fYRxs7H9CdsAyqC6ao8H1GYKZVKf5pcRt5w938VTpfqYrAuGVJ8fv2JysEc6N3Rn",
  "key32": "wC21PcgakXe4BZsxo5sVJHHcbWVYodz7dkTHiJXfsjrsCFYpPmXDSXx7X8ocwLeHkautCY36sJscD3iPudLpHwq",
  "key33": "3WLkiHDCjxr8PTgxmq77wekrN3YP4pwCSJxRkFqeeoQAkBxj8zpsgbtvSq93L2YiWB2G2ZDSDUiUFa9gk3DS2B2f",
  "key34": "2a7g8R844zShb5Sv9jDPo5wSj7FtXcPAuu5XEuXWTSLx1SjQvUpPptGzBBzBpSzbwsc9hddJM47eVsXkjx36Pchc",
  "key35": "itwtwfXwJG7o9yMxFHjCcEHMDPWnyzQ2U26H3bv5tx9iN28GKEp4wv2HEHdGnDus82iYRSPWZPnXf96RjX17H9T",
  "key36": "jhzHsFSppVVTKb5wvaYHCbeSPy1nqpKKm4EXWHBcU4gUB5Fv9MRpsfhdCdVMKUeAsxb5BRim3NF1ChUUVQztGf6",
  "key37": "VZL45v75EXLdtB7TzVYthevpLYKiBxYxAkPBhqmTVgMsmVrnXuSw4cpaeP1Gy8rg73uw9eyaxLR8FMB5BkE1n1w",
  "key38": "5k1G4mmJpji48Gs6QA2AAwdUqjHw9G9PjdgsTQez1eGTp6HFo7s1Pgv7sraWwNH5AEUxAgWuzA4kAHoLhj19YdW4"
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
