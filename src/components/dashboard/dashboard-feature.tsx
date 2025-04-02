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
    "55WPwLqSpHrnKLftHuGvXUEXM7fJu23PazmP9uZvLAd5KZuFQ1GimFXZUryemGxYBfbnsGbTmtL9QXcdrFgnBAdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mh1YKhBQM24yHa3YwMf5vKRc3g9pMZUxzBcjBuD7JLP78s9kin7Pj14DbXP5BaLUC6Tao1TNNRyHWxUtvBxLAxb",
  "key1": "2DCMFVsnxsuErrKCcNcsYF56vcv6jz2NCHcN9mG68f9S1jABozBPepGuFib6qr2Bb8GLqaV58BYnHaQwrKAXmEso",
  "key2": "52d9TQgw89TM3vnQX5uqj2hiWqv4MSSs95GbJusrvXMydcd2MLNNzCo5ZHyZDYFnvr5MFzt9Xngm9thtHRo74HQj",
  "key3": "4uguMKuac39oq3SwdLS2mg2mWeRmgJC26z51A4t2CrVuTMpksxeNCHPgjDzLGw3FhzXcsztficG4Q3KdA6JErJa6",
  "key4": "jZdbRwVDaebkpoZJ9R6dDBzvZaRrwQMxLWpe5WBKyRBxUZehKzpL4924NygSr7mHQWYM6xc5VinfPCaybePrVrg",
  "key5": "zHJsGCfh5c2j8ZFznCKuRcEF47mvGyQtC9wmV8zsAZvAE3jBBHdPmqAgagVHTkmPaje7LyZ77dEBH7ZgfqyrUrx",
  "key6": "3ikZTEat65CFY1xBtnoEaUfeNFAm2Lwyryg6pg293PLuCwQ3rodqpHtP17CZQSbKWu2VsH8hoXBpEuirQgsTNuav",
  "key7": "41pDWLTQxex8Phg4rST2zHbmcLzSFbA4KeZz69ijRPjdMn1dnBHtET4DoARgScnoroDCYMiY5pyqZMmsRhakUfN3",
  "key8": "3Gnnb2WVvKBGYLthd1T4x2WtkJn93WpKmuxw6MqoAvLH6DrqJys94bcU7tb6UpBK6GKSRCDbyYRBBtCRFZtV1Xbs",
  "key9": "3jYk212EpJFG8njS13X8svtXzkHbui9qWqe2AqgfM2a9g17FBqoKyaMrqJbdh2NjDj9uCe6K7Um6B3JUbHF2CW5o",
  "key10": "22qTaqQhu6aUeAUjY47Zex96y7MLR7J1He7ukAXZAW1XWSBZsXh9T8z3VYSmBZGYBPjZcXfANHd9uDUj86pQ4pTM",
  "key11": "4EyXTKvLaEeP5s4wLzctF4Sp6P2Cmz8PEQYeV9kU9D8reXwzNYTRibbCXz68DaBZXYHzzGaeCPS9d6PRMt4AKHhp",
  "key12": "U3mbdpNUNrwgDNgcDjWeMppNiLbz3e5X99pBzi5CY87ky4mA4ofS6rNHYXvJwDQizc28eSbFa93EoxS8g5mtZyY",
  "key13": "3iLbVWAHwKsLSHxHp283ZyYnLM9wtNN3hN5P38p8A9heXFojNKeNatGpX1mN8Vbg38LWR8fHjvXsx1UsYF297cHG",
  "key14": "2zzx7dCuVYzx5TpW1ivwt3gWKYAvwgYEcL5qHPzady3sEBaMaAB6i3tT2SKPsXmXddyfwkkbdLqgANj7wyVAtMfQ",
  "key15": "5zJ6DAxwDujUoZ3TFker6j9GjUmnKv8PP9F4zYiPwYq9TyzYRm3aeVoTFXosHdKnGbG4TtdUmwAAuV2unLhJR1c4",
  "key16": "xn3g9caHJo2RjkyB3Zx51S13iphwEeyvbHDUktjYuG8qbSwEcmEwjnVPjzfCrJZJhidLcVYFMajUyfpsYvUtKMF",
  "key17": "4u3jokknG5NtvELV9ptamu61m3ywiyG5qfCLEzfN9hahfPGaKkT9zmUv5amRhhAJdbuxjNLbm6imGjmL4XSDHuUp",
  "key18": "7HxiHtATbRfgdXrfFVtywfyznGGCvESmsGymAFF8b17QWLTuXCbYBh2dbM8u8brAwZfPcAqDqJW4zjx4FbpyMnx",
  "key19": "3X5s9JBjpMc6xZMzFytyPYFiiDmh1SZDMiPtXZQy7M4iRkFX25eLHwjz4qw77CiXyBF7mAarUfg9M812vv3smGg5",
  "key20": "55HBK1B73T1RHimPX3AjQ18SiMd51ojMbiu1dtKAeE6FtoaVohxJFa6obpPEciwPGbvbxJgbL7H2xAphEdELui8p",
  "key21": "yAw5wdapq67U6EDLefYswHq1mBy26aMpNeDhu8WxSNwPWSx17fgVroXACKkJ32px25wFLEGNFPD2KPYdw2NCVC6",
  "key22": "27iRHF6QnxU3kHWr4qEruMs48qyff3gB92BrGZ8Ji8Ys4xCUJX8gyvxmrmgi8yDDN2eFNvt3bqhon26h36yDPoCQ",
  "key23": "5Af8bMqszJ85ANvdJiGudSXvxzxCsibh6qgCaDUog6RAkRQNqBBMFxU5WLtvyGPzLGcX4x6ii4X6M4sDepUr2prD",
  "key24": "27QW9J874q65gVaYqbaVEoBwEHnHa8qqWjwmWf1az8X2cQcqL5fYcHTbYrNYHRHTstn1CbrXbakAn4UEQCM6fS4U",
  "key25": "65y16pTERHyUXg9KBm6QhbGMDy24QpDR3UVWyCTunmHxSsKxUCHFD5gjCeDhkZXVZDXgoqvSFkvoc6GpL6PV6eXh",
  "key26": "5jgjampp1n3xcV8NeeYYnGFLbvGTqBit3STHkMa87AnitZbchp2q6G1KWEL2EUyb8E4ae8HZyJSXDtj9zhv19RUU",
  "key27": "tkGqThqvK1PvHN7TGFdSvLtNWDCLYLpYomxAGXU25u2jYPqDhmgRnSDQFydaQo1Z2R7LYKDifuscUprsQqG8eEk",
  "key28": "3sdvAKhWsKXpoRyxhT14Tkgb8VxuStX6LJTPvBvXSnviwt7WhQnXn1MaAaQym5WJmoqPGgKAKR6953mWyyXDXhDq",
  "key29": "MR1aSpdFsd2QSmyLu2EQ1eW96zNgRHwyAzViWERnvrMmkLQ4ahXU7LdJ52GpE6W16gbms8CNxkTbuwY2SasDKTD",
  "key30": "3mANbwaurViQtYgPvivDjWdc1vKUDbMYBcwDWP7Vzftr8yhWyP4saHSgx9tPmDGTfeNXG18kqZBW42GiLR4zk9KL",
  "key31": "3JL8EvQpEC5uoP3NEyaH3cgEM7d78bXnqXMkB8nnionKnptjSigovCWmB7XZEga9xqUzVBdemwex7QRit44De7s5",
  "key32": "31DZuWhmZPCdNsFCYGrbKipYPRcFaY2vq4rNz3HzDVtz1pPYuaDh7ArTg3qJt9tQ8Z1YZF9FumdeYJ1pErk7LG6c",
  "key33": "2tExKC2BBgheczCNLjfJU1D4tpwu11nKhbXSqMWAKfAhscpGVTTHCS5AawMm6vWBvhpne4sPQULT56fzj9PALuKK",
  "key34": "jGXLVYZFsmZJWQwgZZRsvt26HdZdCi3bvj9pnJKevM9vke4JjZAf5MQvL7vWezcq8w6Bv98VUrEXrSmgBaPQW9i",
  "key35": "4VibJSwQNBJucK2dgY4YBoU58ezSniuVA4ZYQ6DGLFjpc2RfcRwMGWK5g4twp9RvJ9t4Xi5CjiwL6Y36hayCDmvw",
  "key36": "8ULE1q64nver6jjzF5tF9XsrpFQL4LnfSdWLwxxV358r6c2V2BL1B5qZe5TrgKnneCyoQ8JAEuxa2TsiViPRubW",
  "key37": "2WXPPDTgzHAj4GK3bS69pXdzNH2aeYYb3YsYcn5S55bTdDGXDevF6p4oHX4BXFFnm8F8hjBGDZSjyfcmAd41bTdP"
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
