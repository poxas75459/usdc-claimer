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
    "KNjRJjMbdpQx6S16xNxyWe3h6YaT2Uj2S9LmniNNeLG3zbVF7ygJaPGPyzhrChGPcFMPTyZfRpvkKQGSfK2W4ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F7WaY9E5otyKDxyFv6QTnVxNGBXPjJTg2zcxpXiBVsvxFhXiWGu5P7uHYFFJfppkp2Bm2UdfWEi3MymKdxLAbFF",
  "key1": "5yMaBiMJVPbvfkzojSJ5zAfRnE5XnwFHUhXgbmwxvqSzftvMqnyi5epSiAcWUgumD3RHk4HonYN2tveYHMz7s9s7",
  "key2": "62nxkjnu6s3E4qiou2ejTZiowMWrtg9vjQEbUK3CaMGB28ymfMgrEXvM1XoKHbfk2cSRGF5XZiiRC98zJ4vNhuK2",
  "key3": "w19R38MeWUbW6jwonVefstUzP9P36zaGx4Q2jb7hvkHUseuKAY51mwda5y48WXRGN9BSCTyo1prdh8MmoJ6SDDb",
  "key4": "5Xz2haAHuzwbtdYAUNKWuoULiWWJKGmvcPb1dUZnjepdLqqfomj8ENybtGtcj5Tm61QoGrpMWFa5iW1foqKNb2To",
  "key5": "3zbZ75BoUpukd1kWbfHpzUmP9aFVey3JPZXzcWNZfG9Edm9SYTjxGhSydXpucMt4BmBAY8iyoGa8coAsz24XuorF",
  "key6": "2ZypWmTvWFBtStf4vYxbqpshbWQdq1VJaP4hMPz6tKiVFg7VrVht7odhRUFJTTBrc7sg1b7DCAmfceoZ74Bv9RCQ",
  "key7": "NhSR17kSx8GPqXnaLL4D6Z5FeEmmp7e21yNZPmkCL2NEdzyY9EUVqRbF57A452YkGwjzdQEpZConVoNLLGHTfd2",
  "key8": "XD8PqW3ksS24hWStnNEcp3JK3EXkw6my6tfjV3rgwL8pyJqfTYKKbJV9dZNc3vAiqHq2HV7Lf1vY9wN8syVckKY",
  "key9": "zszk9ycwyfYAPsjQcPdsQ9FeiyQkRRKCGes6XdPzNYWH8tuWqzc6V6sosihi8hNQRRMdS2o3vrfj3G4oHkUAqFL",
  "key10": "3UdyQgajsVFsn3vof3nEr8TbMMjL7SUh1z91dcjwb8dJbDfmuh1FAQomG1NbqX3HfuZ4ofKxookFTJyrBm4XsJtP",
  "key11": "GbgdhLovf3E3frzrKyFzp8XEiudma4HZMHU3tEB2Dm1BVawwo4MVQbCwPFqJ8oioAkv5tbGjp7ihXDmi3Q4iUs4",
  "key12": "5AQjhkwJrpxJ5DMG62rMVDSnXb4ghcweuNfGWL3NAHgjAuUJFJtZzxsQ6cmtb6gJhfoRpmyoT2p5U1XC7Jm9pdhP",
  "key13": "jjWFLzhbM9nZRHCYZU7EKdaeG9r7Rvfn1ZF7X5R4NPnuRNaYh6sWashUZ4iNSDcr5LUfPXkqY539LWcV2EDmgmr",
  "key14": "8hsxpUNCd2WhLC15rcywK8JoCeQh83iFGEXX5Ajv2E22kUUBe7Qezsjbv2FUuYiKMZZdsZo9x5V5jVxPHyyB2Bf",
  "key15": "Jm5dbJFYihBY2hm1DxJzAA2m6JFCFCYtxf77LeymBbndzigwagiMM9n7QhHcdvMjVbzi4nc9ySnvh6ei1qw2pYV",
  "key16": "SS35zDFjBbUu2x86kiwGu8JqdJe7fYfBzP8UvczQVTqDxmVmBuSfZUtW4L6R7KLSEnUksBtMNeARsTsCETgsu65",
  "key17": "3kVBEfrZY23AW71CrrN1YG9FXXaD7hE1BUAfJ1qcmGBDsBx7b2DhJZWEbnbgPyPAxf2wdtJtf89qSLTkyPbtFfPR",
  "key18": "2yXmg9kVvkuVqGC4uZvVLAGNyqVBKmm7UZBVB1yaC8JvVHK23nWJPAiKuQcz395ZcGoUTPMj4bvQTWEVTkwVk8jV",
  "key19": "3t2nvL3A3nUCQhtv4kMK1Cdipt57Y6GXzj6WuDd8hgjjqmTn9AsyAtNsPEVtEBBuJ4nx5hVDN4GNm8izxhmVh1iu",
  "key20": "Tnf9712d1m7T2MY3vCByHoPiSuY89CeRhpX6vhiN78GiBK4Mmiu2XaxQDgaDWZF15dXuYS1a2GLm8TNi2mUgNBz",
  "key21": "5DWmeS85XYcPzDCh37mpHVvdF6VzoW31KwacKKJFyAtfwETxbFkk5hjWWnUzuB6oBug7XcVLuSAU7C9EnGiBY7y8",
  "key22": "4SK5rSMU2Tx5N3afHcVr2j3BvY8PJWv8U5N2Gszd4DbSb6FvtZc5UJA7S8p6NEy7g4Mw3P1cohr5wCtKw6tfEYH2",
  "key23": "47w2Bz2UGSsN77YLxhr23LwN4g7teYkAhDSs3FDr9cjjm2mNmpzVEVhBHjJctNyhj12krNoYMAkrMkLomtECLuE8",
  "key24": "ZyhhkDKBi8Fn1gqxt47MtbJ1d3t5KCLowBP4ruCxxVDc3ewyE3L6MpE3cv7TSHxvZ1aJK7akXrkFgzBY4HtEM2P",
  "key25": "2LwkBBfsU8LJnfoTPpCbQ75uYZum3H8umAX5VBCdJ6Hhs6UX2QvJqZVTtzWU4mNgFRPsEfdyiTdY9Q4ZwMYRcAs9",
  "key26": "3upSFLkxgTi8j3P5o9or1X1rkKCTQzgHtfuBVHoe92etGX5cksYe21tZFnjtW2mbs3d5kCptqo1yPvHN6WqeKqX",
  "key27": "4t7uuGFuwWjbZ1AqoKmH82xcEQbzM6LWvFteuCAF4xL6SEbiVVdcMxeB4KohmGaEWvfhjFbxyUtzmeeNsMkU6P6a",
  "key28": "x23vQKce5teYbBVZ2g19Cz9i5ojfDam6Kg3zChUXUsNuzPVGzMVSNU1KkfAGXguivcAVKBj12Tkh9mDyF4LPurX",
  "key29": "2RK9YUpnkgiCjo52WpYcgGDuPwYG5Ggk9i8WAD5bGsTrm2VLEbhviH5at8PxUXrCenxQ7aaQBGtHFJyRfKXdzUry",
  "key30": "5jCQyv8hPUG2UWdd7BdFtaHzajTWhAqNGByoM4o7SRP2ifGmYD3yiHWZ4eFCGW91mkB69c5dyMuvPekFBLQ4hzHU",
  "key31": "ckNioorjbzb4fC1i7rKhHbc3vC48HcyGhG8WPd2uAAAPi5VyrF78jdAfTUazfFbBwihC9VWSajMDTPGWu2jaVc6",
  "key32": "3CXXHsayS9Xd8hGooq9acM64Soy3hCJMQXpC3YBNxHgxBq7rizbk4rvwEeSsN2geobQCw5x4ToH2WTQzPLkARfdB",
  "key33": "4yRjSavBcb5RUpttKRcrTpD1T7XbyEmJampkfSUHAafQYbyvAK7vymVCzZzhTPHdfuv29FnyMEzkfuiBown469xX",
  "key34": "39uzXLaacNu33S6iU8ijXQTmjLNahJD5fr6zgVocjfgdyW4qiUTTnXtrhZKziSHj2jYSh91WwcxEJF6r2rxDv2pD",
  "key35": "43FRz5oWdTSf3YkwgVJzxgMvZijBpBZHVYG1fbbhHDMKG7BN2ZB86DT9JvJ1e2wVEhbW9Xor2DpbMyGoxoqqiKkT",
  "key36": "2cpCb3jXU4YwXxFCNzmbe5agbR1vBofc6zM3WauY87ny893Hh76TnWEkzzsshLawi7R77xPsTCaVvoLq4aunqdky",
  "key37": "f5ZZyGJHGAHnCAqk53wRX1Yg5yPpuoLbBVQEECq9sHgy3LqHviKsGCfFynGN7ZoXUxB3dyH4TEzgPJDsaKGha5e",
  "key38": "5ePz8uYGUDETfwWYBvUjdpKuuGgPG1Jw4vRw5dAPA4phBe3uXSL9zobHfp2UkxxaXgmkrQVvZ654DTwgBregaGkj",
  "key39": "3b7JH4vhwAEndMEj78rGM245s7p7VY5zPHSgYgB11iMz7zURbbEi8S75VoU3Zkpin8ysSyzYFEKuCe9NwpazvYwi",
  "key40": "3gxwGMhELYgcWdqSBK1wesMtZZwYe896Joxz6gWHBHLxRLRqnJjnpzYWPupDYEJdizscmeYgnk1cNkfLAb4Nuy4m",
  "key41": "3A1cjiKdBg71XtpQtQq7WqhLDCnKzENWsbkiEuH22aM7U9LbMQHuzt1mLTVYpoaMRqoXjDTWgyducYmJ76m2jpjg",
  "key42": "2Q5WioLidW53KhEnQufKizWJWq5mirLFj4V3Pp8YpfVwwxdDLneBtFLKJiG53ir1XfYvK2J4caXeb2cz8GAPYvTN"
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
