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
    "5AukcuveARLmKqKKRKfp5TWLcFgFfYwiHru1LGBvd9QyrFL85t1KepEx1knzyYz1x5yEeJ2gYrZfxN1riDub28Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86ijvJGnVXQF31DZGRM6t3PULBKJLJYsAjiXz3sdnwFT7Ktq4ZiZ85c96froCRt5nUYBkbmvo6afo1RVSTDXLis",
  "key1": "5brXzLdxtjf8nkH3C3bpEY2GcjuwwgWinvifxZ9ucUSps6i95jPMdUo2RCCjyCMMYSJTnixLyPaVbEGxMW59wHPF",
  "key2": "HxMFBDkxxMc2pbYF5FPJxByocZFXTRpFTfMJLwc39rgwGwQUrA3GXnKG7sa2RKrtLVXYBQ67sKxS48deuEkj3iZ",
  "key3": "4bkwyoNNUNdZHMMtY4G518NAhMEakyet52WLo7RzEPHVo7UKHqxjWRG2Gz32t2UmtichuHQp8FAqMg2ioEM1oaZD",
  "key4": "4VDN4xUA9uueNjp7uAzdPTMguPSnodQRPgtmoFvzM7sSQYb4RrChvnKNTVg2Lj6doDuYg3R4bZ4nzc9mF83nFXBe",
  "key5": "2hzSRon23kD9aKDHcNfbeYADjrPwEjFhDYV7HL2xC1pNeA4kCyQfztb1Cws3aXjwGxoe4bJDFdPsPSv2XgB9GMdV",
  "key6": "3EbjYEcg9U7ZPx3yQv25TVMLNMaSKAo8X64jTkqmFASDj41QPDQV1xBvVpWwfrNpBAXnneyBaEHMLEdUP7z4ZeKN",
  "key7": "5DBbZmdGBkZnjah4xH8LWKphLUbWNvyV7T1LrBz1zpyJYuHb1MveYhXiKiY4Fr8cpGj5QsFVuyZDh4g2eQxEU8vo",
  "key8": "2UkprkopFv3T2YydbzvDAct1VaoRmnxFexaYyxoUKbG7QCq6quK58r6SPDe6ySt2X6PeSKeoqCeZZuMw5nCDcz5X",
  "key9": "5eaHDEMk5SCCybENQ2oLLrQ6xS2uuUbG4hvEYZSNBpD2SY4D7S3ukyC5qy2gCzTMmM5ia4516kXgZ5NiXY76pn1w",
  "key10": "2skwEity6PVs7JEzhKg65cwac5vDykBC9kYKChzKz1dQY95qFjEYT2okz9VJAjctss8SmwQ5sib697RXrrQ7B7DQ",
  "key11": "2FePJEYduo6c5q2hpv1uMq1FzXczcsFDsd4VQbStTjvm6zt18yrwVVYcXGZBosTJbqFsx8PeLgzd7z2HwnHdkmEk",
  "key12": "22qWmyzfo8KhspTPnMBrhXKp55i6x4jqK88nTbTutAxyz9kraHUjAJZ9tzahEURrjUyfwhcpe8mrLWgoX8ag1weX",
  "key13": "3rZdcVjyqqowu6cx3C14HvmiphwUNMM6bzZWGUbAy3mY1rx2vSkehgSX3HGd8BMdYnZKUXqHeKgzKcB4FxquNpnB",
  "key14": "47qyuYniEzXcj1x5vuCE5kBQwoLBQH7NX1tZVaFNv4KtFLPzHSX8RcDJcjhEY8uJ8Yyp4jKtcRRrhCqiNAwDXWwK",
  "key15": "hB4Tgi8S3WUqFf9N6KGgYrtQYqHT7MvXamikrmTFNEXsNfNjivMtsuYiF7u5Rzr192gKfMLotzgRnpDJirqay9y",
  "key16": "rgKF1sNhu4jtb9LznHaLJ4xaKcubc9YpcLwRUh9wGCM1iR1yanwBc9EBnxWZmp8CDHRT5uecZkmnYPTwvShSAPh",
  "key17": "5UXQiKAz5bmwFHPJyYmrekmvn6ZiyiZCVndsPrCAkWWvN6QzaV1MXX294wnaojXNHs3tc4FcfrQSvcAiaZP5ECdF",
  "key18": "5JFfTTHvUpeEoSRhC9Ms2mfSNGQo9bUb7VPMKmmBZcd6VoVH1CYDksnKUZfjVnWXozfqZ5dd5utu3PpPc7CanaQE",
  "key19": "CDrZVoxLaJE6Emuc2xcF6o8yrVBka9eugT1EJzs8g1DhvzAyJK9xjhkn96BNef7bZCX2mcUYUysKqE8R5y5Rngv",
  "key20": "3X5CB3S8myxV2xawJyGdZsXoauWNYbXGRv88DoxXyyLaCinKdgNqQKYDdfCXT8zTVfPu9baYtGWHzcEmi4V9Q5QE",
  "key21": "3eYGusn2QJ9LLTvERQKNWHEHhWmuL2qAQyjiYyYbUXxYztpcFQUtdfT9v5rdeNL53ByxZgqtpP1m8PnxqWvGEtun",
  "key22": "5MqtFLpw5Xp5VrjTt3btqytm1sJD1Um7Jk2xVxX277b5nCkAS1GDFwRP2pX6YPGBHv3pR4A5df9E3Y92v8XqweD7",
  "key23": "cqG5hDK2XGfFKYYjXNGCNbyyPKx14oLp16tbwQSYJcj8GiA4GEdNL6vEYiCcSVK3QbPfYDAAMXehEVYAsfoRewu",
  "key24": "4tnJBoR9dQ8AwBcr32hxXDEAuq4tYvdnuJtuoei9MjLQrzJ4Kd5fB3e3Qj7Wx64be9UEnBSgy9u67sBqnCBLKrjQ",
  "key25": "2U8szoiNhiSQk54tAu2PN84aGJdUWmjitKmgZN2HGMoGFJtHjCTrK64qiXbmhi2bjDy7PptwvUe1C6GB9SauQXyX",
  "key26": "2FTf62c1bNSPMTCKxWZsmPeqxJhe3SSRKtTkyDKNmSUGV6GbRZaZycFwNegdYaVqQMBb58es1wFDQzHFYbrYn56W",
  "key27": "5HDLY2AZxBDibzm7XkN1jKQd6oNKdRu71EjAEiu6M5ToU1wBekhDDYtnT996bXdm2gkU1Zy6TTUVZjewJjUYkKw3",
  "key28": "2dkM3QF3K199cr4wBR5GmEG4ckp5hxhaW4YnePtrB7Snp8ycgsyVadA6huWpwcbkCJJXhoJVCySC6LxzJGH3SdxY",
  "key29": "4hsm2WSG7DhKsxzEXNK7ANi13cqnUbZKQPnyV3tWNtiW9gnk4xUCMFCtfKuKXTweeQJqwG5mF1xcuGBdizS1R1nD",
  "key30": "FhrbUXPWYfobRbtcFeNkjfkfMf1B7qug82xh3QG6UYsWWiU2A9haSMPENDqfqXgRLJPm1GfuoSSj2o5hXJXhpYh",
  "key31": "29qjQWgntAcQeMe98eVLmNsKe6puZRQbknQyz3Q8wfywubsXzMbzV91iXC6bqte6vumXrhoPfRV9d2K1t3rmscex",
  "key32": "5K2czMUtjCaff1docA3oUJK8sqUVXZR5Ae5tEZMrcbCZU6sCGA12GSYtf7dj64ubprYjhHQ55xrC8ChGYH2MoGLN",
  "key33": "4jcD9RYonE7pm2UxgZa6JYtrgD5Q8siz9TruPVzZUKXNXTCqsrDw3uyUL1fS6BTJngpEUpypnqfduTcB8uhbyLnc",
  "key34": "icqSfTpzE7phVaFA4bJdBp4a94hmRkfyKeBQ1Uf6jFrXzj9TeBTd1Ru9gCPAVw8RKWHWpzrKYiZkBHSDizmLevm",
  "key35": "48zSLwHG75occxnCdGWgyveeTooeWqukde1TQ2ueQVE1BpLM2ZqmTKM9Y2iYF3CRKLNVfVF2XYwxYWk5kWj2vuee",
  "key36": "3yUQ563KjnUgGCqbAGtDWZVgRfLHAW4gsyKTgoKNTWnUqPM26CpsC7326DpbCEUBANc82siw5f5gBsZgbbtxjZLf",
  "key37": "q9XxUk34Cd5yf3vvoCVTTesEQju1WALRGsxd5n3G3sycVXzjMSGJg4L4MESPbZWC1tpNGFC369Qpr3mPUQm5WpL",
  "key38": "48SUg4Y9eKkAn48Hd5pyHNqkN8kQTRw1L9MY2MWXZF2pEmJ8DoJZ58jf7R2WZbLQJFaiTAvhQ4E1CQMGa1ACfqSc",
  "key39": "4LDBxQ6qqNvm7JqHm7LSM6ZqWqfTesHamiJ3Uo8jDpZuiXDgop7AahYBaa45i2rmXCw9ePJiSFTR1JypF95tkccD",
  "key40": "3GAo2piKo132tXMTmqRQMvicLFZggk46Xzo1hHvqkg6McZCRsgwWuReCvwN3U6zkExHvSUquUg2BdLJKLT51tfV1",
  "key41": "3iYq9o4tuSh4qx8qTZubv71uRAsksjmgx7QPWoKnR4EcYsdC832niEiuAamTGnGwaXfxJhzccPfxA2RYAYdrZSfQ",
  "key42": "4aGdCUAEK9dkzRqjy55KecFjh31aREYin5Egt1bgknLwMEvijnmecFNTzhbDjS7ozPC5Zch7dCKDw1EmZ9tyQW5j",
  "key43": "3D6TaT2z5Syr3go2WQ2AMBBaH1xSJDt743CuRgsAced8HxPHxxWrKfiHyqaNWAzM9uFHfvchCVKtKyFfCNmFnc9f",
  "key44": "3hZspe3iMwWyX26RSDxr7EtrzUYYuErd55MzhVT4z4iPvW2uvm1xM6v9kzVCb4NxikDVUs3QEj9NePZzo7cD1vPK",
  "key45": "62KHLGPiWdgugkUuA6qAUv52HgDkjf1b3YHgagRdz5BUGSuPmN4cNHKvvzSdyhVr486PSHD8TKYGSqJDQo45Zmen",
  "key46": "2aefjEsMeMio2CArJeyBKJrHNDS333WvdD9K5EgVkZ1JhE3XZfzMExoYcZwZE1xDK9ZFNgAEycJpEVJvDd7okbBL"
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
