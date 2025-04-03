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
    "35ZbWHxbJgMjSRfARGxp7hW1u4F4v3TbWk7u869HKeDeGLzmuc8V5LMFq6WYMAtzmQzktXHTxgy3mqvnqXUMyaa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUHKPcG75tXnZWiasvMhLhC1Q63J8jgW9yM1q5HoneH6vykJT3yZjewxuzgPHppvRvFPjN7LLUmkrBKHFgsDEEP",
  "key1": "2ZmCbfjy87WHjUxmHxQA5CbpwYuut1pwn6ZKAjt218Q6EXKDE5mdVXDxdgsm2e18JS534ZXsjoWX6A8zjdoDjbfD",
  "key2": "2fX7y3FVpREssfkusJFptKPqoXbdArr31qF24s6ahRBvR3MsQQqX5HpfzYLR3wF8MxhEMFLqE1nbmvV3x4hmt3So",
  "key3": "3ioVocSTUJofK5XEgJYsxpFr9BKCN1MzzENBk2W7PHAqfAhjM4q29U2SHBL21vMgS3DqVLqPCVDjmcogVTXDZzpC",
  "key4": "1HyABHwwzqtppRDYyaBULAnmvosAJAQzhsSw6DVKtD55yaFbTpnavkeA3J8X3Tw2D9H4ifNTKfqP3kUepecvePZ",
  "key5": "3xpowLMywMVHBnb7UZ6KdExosnt1P7opDXxCZHj34scMiCgynomc8GthSrLLoZYbxU22vkrN5mMSqNxLYyNZnKEi",
  "key6": "4J4jo1vaviMBuJjkbRybQ7dZiU7T2UdrinUTUM22QwHE3Sg2oMpufU7epMUHpsmF1YjFCgx4TYauHNxZhNSWBUzh",
  "key7": "2dCDZmo2fBRjHYjk8DC8iJb3ySJcarrHdTkzJX41KWJaxtgQP7NFz9qRAEyJCpRAnSaNxV7jgewVDPYX9oHuyz9X",
  "key8": "26vX2njCAsy9oXuejb95bGdEyCt3R8XWPxsKhgDkTU5w4N4tBKZJPwFSpNUw2oQtZZUCouBDccJMNSHGoKDvazX5",
  "key9": "5pocwLKdL1TFE2v4qsMQHrj9u1T4zTJup41vgVN73Qo4auE1XiyyF3vRCRzy7fFh2RXDThyEWroxNNsnG1M9W8Ay",
  "key10": "3SZck9z46ujmBFSrkyRVFx2Dqs6dAPzdFRFDErwW6YQ4jfj7qr7mhTMFT3yEWSSSe6gvpX6FTRmFC1LJ6aqS87od",
  "key11": "3KK8phBerhFUVBRqWrPJYWCTefk9nW3Gzn1JXjmUG1AfFwYL1HAS8wpmHRQE7ae26UjPN26BJqMXw6onbAgJWKMA",
  "key12": "DtzEDQQdAG58cUSBQ5WeMqkeiTq9p2od5VbVUf4cfS8nzTxZo1GcZ4DXmzxB7sU68VLEXwvg524JWtGCBsv1ABm",
  "key13": "3uUL9wfDFT6gUeoNKxJn1pXu3Q81zT68w5NeXt34LfWGtJVZ8b3dm7aC1NEoK2yapbeQvjSVLFAqymvXYZm8rYiw",
  "key14": "4AnfJ91UBUviNtNtmZJANtPQ5CdmGyqh3GnxaAaBvxs7T8QxmgxWAHpqYeBjgPRU6mz41Uq5qiQeQT2APefuSLjF",
  "key15": "38yYWfhVtJDpXcW38u1xhxupVNvffNoDLouWCHcAFTmu8BMfDEXjkgVS1noWV2WmLzgevcJgp23KQZQDZz2LkdgH",
  "key16": "4HxLcA7dz5mYNi6HpBvpn9yLSBPfbExDwjakmbQQpK7QRiBhjposnNQqfWYsDP4DKnjf4pJaPPthtUstS9UMroZb",
  "key17": "4uSteUfAnn8UXEPkHdfguKzsTKxnCUbZ5LZPsvsTYchcgmnwTywrm9SLLjvaPrmcv9HrF2YpEbxdC8jyYJWogqKA",
  "key18": "2my4GVaAQDyE4TAvUGBH22pbffqQGNVkpMZNuDdokLeotjthbZY5LGsoVshVykGHFpFbra7Sddxn1KEHQf3XuCFq",
  "key19": "S5xZjSpJq2LSS7NrWJBrSrfSquFRR2UNgryMw8iRhuBVqmVCEqPrUyWWBXsLvnoxnQ9aEWwPArwxBnP3R7VpRTk",
  "key20": "4aJr4iwyXTMCCroScoKzubRyJmHsbK7iWAzwiFnDmqVasSZykBucR3FBoN7qevWow7piLYUuQDbSpipXnWEssh5X",
  "key21": "5XcN7XYSji9w9CyR5Xkffm5FZZMoMRCic2eaTnyhDENWJHGENhtV1RPBxdkb1tnXyk3GP8ta2PUwF25FCwkAsmpC",
  "key22": "4bEQsdYFJmysSkAG6jafjippiuhLv1SMXvoQ2LZaZ6cH5YkyrZG9sgiyWpuA4PV1imDG8tvD7B5SyKdiQ8uX5T3U",
  "key23": "4ja1nLZkxLH4WLFHMh5rFbfzRpPq7JDaeBgyimMTSh3M9ZXJzD66v5ju6TPnsGJ4caWBNxukAyjfQGVDqVCdoXeD",
  "key24": "hLAwp98owvhuLSQHksYzydrRHBGFQavucuaLTZL5Ma3ZmSanzK6aRABH8o6D6E2CN7VbCNfHuBUK8ofHqQK2vWE",
  "key25": "3Zr1EiUSMA3GtuceWVk6gRqnybKQuYpt6AUdQGGgyLLAqWEQvKuyaW66MGaUCNMtVNCPH4c47T91WzuzyQjfXz95",
  "key26": "5Wpwy4JGnZszSaoYCVjuBWTqZnLvXV2DuTp8ZP3u9BvCA9f6RNtov4kVSpKR51AwvxQLxFBy6bWA6mzVBaxPSUJh",
  "key27": "3EYxbrV2fE7oh2ogHd7sdMUDQqFajtQT4bEPZpNU9eoGCKBfQFTKP3vdMrMajaoBsihQNxetAvRmS7L2xStXWxif",
  "key28": "2JEhPsBYkxMqGLukSCXBX1KjyNqqonDjz1KjJotNXKy6HCFGvBxfZiGtaK9jJtws6czcAzdMKK26RgMgE24ADAG2",
  "key29": "5QKYPwGi8eVeYoc7g42imKKwkW5Ly8wQ6Ri6VLc9Q9X5XTeXZU44XyJfk8QPrHCMdAtezeMCyH2E42N2Z6R2HH1j",
  "key30": "GHu7yzRF4uiyuzBzRCs4erRm4mFZ2Mw7Lt2oQZfpujr1w2e4QBaq57tjk26mEiWgvPgnenoooF3GTuu74cGj94e",
  "key31": "37sHuZZCjXFZR5vuKKkjSZK3hxo3beFCMZRNC4SVXcEgfLv5jmV7Ch53GaquGsa1NxPcKc3RE8VqBNYgrY6fXUZi",
  "key32": "4GYYiTvvUv3iDEHvxioyTTbDyR1ySC5jcuQDy92RfZTUDXhKm8yc9iC7HnuAB1gfW9bKfav6rtT7DbSVKDKTw7bi",
  "key33": "xdTj3u4c2SsyjEpEQM6P6GBeaqAMEv6eSDahFJhuViGitbZ7peudLZBCDLtTVYTHqhP7GnWhY2rGgd2KANdieF1",
  "key34": "5WDDABtkCPRfFBZ32NEKBASan2tWfStbRjziV37FQqMS8ScT9Egg3DAyADDFCYr4byVTZreZnEF26ayfPVkC2m2L",
  "key35": "4xENXmq8CNZy4KTJqmVGs9A26RYPquHEkpktN87PCDXQHHuLygzJV3iNxan1BE7Y9LFA6VAYPU18HYVP4NteAL2A",
  "key36": "FBt7c8EBuXtEJ7wZhRJRAHyigcgeBpTtwxyVx2tzrTqvquLezoGofGytvoVcfzZN4iZWsLAGiawtRhPTiPbSwrS",
  "key37": "61u2WtTUa3bqTrFvNdj9UVgscvQCXobncCpyqU4sM35iEc58NSzQk9jYRrjCKQB6dc2MMC4XzHQUQJGyUepuTMSU",
  "key38": "3BsbhhD6kerWLp9bnXTMqGuJZNEwSxYjVxiXKfNiqz6959K8ekSGz8N9Awagw8Mu6LKXLUWZX6t8V618NcMwW4fu",
  "key39": "3S5pZt1cdDj9QUDdJrFv8VCWjNRKNZ4bmWD4AW3FR4kxG9PSScmPcP2dDF3ayf5MPPjQCUSmAEEyQUaB3kxQS7J3",
  "key40": "4whe3GcxuQVQjE14RpJsRpe8vWhsNCRmAFuxpEuJHi4Sy9jQPJqEXLEwTWWNBZDKMynhqtu1gXwaQsuBh9xVtgU1",
  "key41": "3Qn62e9GfHjHvCsNyoduC2Ha8QByvBsDZCNUcAnTYgra6mLtcXXcVpL7dzyEjTsEnuf7r6n2myN6aEjxFRcMXRDp",
  "key42": "YDK7xDDvJCZRczkwXQcen2eCESx3hxDFTM8Y7yv2Fx6JXdgZUg8HWuAAM4Sq1eALoRTPz1QjCKw35psSUqUs8LH",
  "key43": "36qvdrPPm8vkbjCxrPUbEDxEKV31uyBRuBhDCr4QXiTQjUMr2raWbFmaFBnGN7QikYnY2xhafcDWLptFtAEjiZtJ",
  "key44": "E1bBqcqQzdjuy2ywg7UpBJ9oqM95XpMgNTTea6QDUn7Zz3NR9oiqqUZSr3RavJvJyCvRFgWaDXmWWDFYQx6MNLG",
  "key45": "66FG8Ctw3srbP7XTymvMJyNYbA3oL6gBr3EsJbBWNC2daXk4YognZ74UUpqgAMCYTJ4WkEPtspmfPP5g8sP8wCDD",
  "key46": "3dSiNqqDaxgSpjUCpWuDKE9KEU5h1WBRdM8vpq9MVTbuYMpcfU8dbD2oNqTsZsXJZAV9aLJAwjvgs1LSkkSMsMNf"
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
