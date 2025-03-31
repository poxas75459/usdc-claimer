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
    "3EcUsjbSgqMYeYHy5vYJ4w8EdTbxvqBuciq9CAcMT5mNQXLHogxSMt8nkAowsc1VwhBALPvwkyynMv5uYCME5jDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pG7saNNqG1d7gQctdsvTRuuaENZrYqjnFCXsvbwTRT94D1DW6h8mDqQ1hqZzNiDVrtkmnZN2z5zuPYwFhRN8TwP",
  "key1": "XL5MMiWubLm4De7nXkcE88SmWCz3hmRtamzbPihbdKNb3G92iQ4EFn2tvfksGj5CkLNqMUZDRhWiGYcub9Y2B56",
  "key2": "5QfQKuisnwUCx6pnXkg9g8feaAY6TJ1boA8fE8H9TEJxMy6HMfuDp7Jrcih3dPXXX9Fxxrx2MKTLZHSVToRupMfr",
  "key3": "5KxwdpEk1kLciuhTVw7rt2s7wbfpYCbvUhcNZh11kwEwPUJNGAHT5AdUi8BJPask31j1yM24qnAzx9CVpiYbg2Xw",
  "key4": "42akd52iQ7n3M6F2yKsePuiEtYAuavciNdbYhqP9WYqHT8qStBy4G5HX9hNp6bn5Lc9LKzcwdm9bT9EYVVUW6iVb",
  "key5": "KRJyMDoSKTWmHLf19QeyaMAAECMSn9VnjeYGDxzFGiB38ayLjuaXr9RFoBSc1qWRhwQ5vMihZG5nCZKRFiArSPG",
  "key6": "3AE4zCxRLeb4m61PgPhxDABRCu5HGoHhK42NzBZoUSBzadp1u5jU6QrZL4mBKYxSjkqhUYhkx3ZtdAGVsyoMEdTm",
  "key7": "2KQC8suK7nBGgVirc7yeXQF3kF9mmp27oXyE9gzTUQGYC1eKM8A9otwRCuhGK43Veiwr8pzLjEXUf4qYAFX2tDjj",
  "key8": "5nHnZGZbjsEBbjHgN3JQ7eP4YWKGoTY5f5rh4vkDJUaeXi6vkfCcZokrJa2Tp98RZ65wZEUuGnB2AKspTxH69qP",
  "key9": "3yferwuRew1Rcg1UwZcMgwRXkwCbYr8ZuzWxMiYAUpS6LzQrD9WDdDmFA8KdHVBzondV8bx8hAaG71EZXLsBSbFa",
  "key10": "2g7usTWBWK5HgFnfRu5zVQgDBFpG9RYSv4GHFBvc4AbDDf6aaFMgh5tBVTeTacbTfFiCqUhG5kBNhP41xReL6Kz3",
  "key11": "5DNv5CXW2Ky8gqGBiMB8QtxYXZQsCVphycStTZncBkwzrhrD83Vb1cr94tebPX6BTdKM9EPgaAuKHCa5k4zh3ps9",
  "key12": "CHzh5HV4o1dyt56SKJwfExGd1azYiepzvqoJaocbxMgpCAbdUGSPJ18BH3Hx9TjngJSHwX3b6BPQiTFcrH5CZ5G",
  "key13": "3DNsf3i9AFU4ZDa46DWL7ZFqupVG9YwUbsf7qQg4XQgPoHczYan6mZ2cmR6uLcfQBokfdk1DLsfpe54CFtysgXra",
  "key14": "2gQFG5YMKvsKpsC9buXutWh6ajrB6DnsS1FkhywtHpeLKopJiBk8f8cQ5jFei6SXYaN7FnA35PwwmwSyr4WsD2iq",
  "key15": "5774aS1fDuc3FgM1H7RtrGunsZfiTaSBmGYA4nLt4UXwrF1sGWdTcAQWc4KTMFTakdHLKrMXgQmcQZDDVyKNxRwP",
  "key16": "3giprBhQVx6xzVtVuRw8X46c8BZW1mHKaffXNQPfoFWiZHqXFtBB33ntFifi1QCJ5ziu82fUxiG57gZCiMSGscGB",
  "key17": "3zBX19qTAcyCpGbQGqBskFYkuAFJUmXNnD7TW2mcZBCvt1CpKTPtT8sFqDvcMRjAEFiwqf6vHe1tJuM7jmjJAfq7",
  "key18": "HH5hLvAG7HdMET6XsvAmkbse1M67UCV3iNiZwwafU5h9gZqjKRFCjq8s5QG1ywY5ZFkt2S2DahK5xhgH5af9Deg",
  "key19": "23tk1HKNnGsrfeQXz25eDA4xsaXN1NTLpehtQCNwCbDpiMUnzWbSAi7x6xpdPrz2C6kyp7vj4DJukcspMeAdDsg1",
  "key20": "2UVU8jDq2wMDe6VJmnUYB38QZLDHB3XLXsf8g4ChnVcdv734TcUhGvH1gCFN6k45YdcjjXpE3BxecQ4wM1CwkEsD",
  "key21": "eGXj31kZ1qJujxSTbMR1UGEmM2JirucTfEQvPRkFZZ3QvaoUFhA2XCoDSPcr6fuvmd5t37Lw72TBUqjJaYPiFWn",
  "key22": "3LnD9exgHJ9CLgZuSWk3P8gzjuS6HxBLtABnTF1YBpdMfeW9X6Wa3oC9GYLJQzmTyqMoiEo1jYpkjpA45tKP9Q4z",
  "key23": "5C7ALnE1P9cVsDkpkZNm5QPh9qo17wFuCgp2mCwTqgGcn8nAk1PyUiCnSVF7dQWDHgNWsMmPCLSEjHbUQme48UJq",
  "key24": "3YRbgwD3iUMb9eiZ21HSn5Gc6AUY8BC33vo71C3Yyn8YKat213oKyc11t5NGmJCaGwPb4jnNZxFVgkSt5LxSb5kn",
  "key25": "2f8Jt1ZgQXYMm5keVAFz8QZmir5JdQAEQMKk1UAxAkCcsCLzgNbSDB84Mmy1V2kvkcXbPSU3nqgzx52jagshoBch",
  "key26": "xJPSmUWvKBsFu82pBFgoViDA6m2ZfpFTTKc6hx5kGyqEweJwtMAJHK6qhq5CLeb3uZvnDqnVu5L39siLTpe3G2s",
  "key27": "5Y3rbDDRruzaWHoABxaMk5ffPkMYZLsRXtRTKHYAuhWNrLPEmN8sykEqYpu1gr5YcfaoNRZt1QQmiX44U3GXxSdL",
  "key28": "4FVcJGbtVNFK3JB6UujRjbKqkfkwVaBX7dkqUU2B5vEHN2xnUyDRvYNHrSLibGVW8kM59d1SukoKZ389oyxJmG3h",
  "key29": "2JYxofKGsSS6BE3uwQoTDM3fsZSfXmJfupPW9jxd9tzPPWgEe9cEKKhfDbA4ey5wviUdiHSMC1GVrg8gP3rh7zJ5",
  "key30": "5PHSWTXkKjaXgmpSFU7tTFwtdPdVfYNMW4NNusmSkkY61rHHw3TfzzezTgQvLRjWvL9GQPEGjEEAWDujUfwbpNzv",
  "key31": "5rFYAZeHZZA39GAARj3Q8CLBd9PUmR8Ye2N5K9MWsXfXbWt5dW6gsv3LnZ7zvRqCg1gtjocnDM3rEdn45JL7kH2E",
  "key32": "2sf42xzih3ZyhZbc3LGytYYmx858MQw8zwUef6SYn2JPVRKto56J6Bt8MMxbhoWzgHZxvGGyHHo1Fycx3gFYY3fN",
  "key33": "2AL18TAMmGY6AS6HhjW9FCFsJqA9o1ojdjeMJXgMyv5njfFVAJciWkVUrsw2iWxjyuetbkhK5rm7LPkPoRNwqFfV",
  "key34": "65oSvgSMLEabeKEbCFPPEBcG6jkedQ4qt9P7HDMLRBHuG4jUCAuTSm93hFoGYHRGquXeYUB156Zg579hxr2qhEMe",
  "key35": "5VRevJnH3adCGffP4AiLC8GHbCTZtrk6QEu7JhfSDWKdULTtB8wAf849LqDNCGhHpjqSaz7qStt2R1GDULXYTDmU",
  "key36": "2CrR5TsJQeYkd4WviBtN2TkNiBs2YtkEMFjutkp9FvuMgvjcUXbZY2umGB9w5hYFXbUuE5wUeSovQTRiuDWdPGu",
  "key37": "4z1rEgvDCzZojUSBm9CX6LSPnL7osb5TZdPF5jpamHkdviSKJ29m2izar9pkLhii5qV1U1vHVU16aN6RB1otwsHm",
  "key38": "3UU25aAvNymMNhZXn4PLekGcwLXd6JPDPH5XMaoSuR4DTRGuVRo6e4adnc4erkQq8pUjuvQ48Xf6ZNhAxecPXXHu",
  "key39": "4Jv3rnn3zDHvQKcUZfUgQcd5FuBtNUq2whGBrCzSC7obHzsnvBokVggEVn4MsPiYTWoKA8hFKu8XWhZhUe2TCpY4",
  "key40": "3VZyHtMeRuH5qZzKBpHTKXmeFCF48VWAGNgoEtstcyKCBjHpRQrX6aPEcD3NbuNTm1FnRkxvduGijQwLP9TfyekR",
  "key41": "4Gdvhq4iCW84KSojyADDq1z2tmpqq1EG5E1redidrU6WGSHg6c5egMiF9HGsepamop4oJzUgy7jn5XxvxgzzyYwm",
  "key42": "4e1S4HnZ1wDZLFFVasNvfvJBb1zcx3vbDv8MovYsaBHgXcnwZGCeLwk2ZPPiuETqEu4PK5NxWcYYT1fWY3PVkXmN",
  "key43": "ymjqbzQ1ienk1jgQkyXqQjVStj48BHxB2fehZz7Y5Gg8pCRKFfgTjDLGPRnACo61SphE9K3BfkwzhcKwkso3sZ9",
  "key44": "4HH2jrqLcQjoWZNFgh1edWxwqr4terEmvuV2UJCaqQK7v3kHZSZM3X2qvk6sP7AH9QyihZF47bqJQY1e1Gcnzt5F",
  "key45": "5LJTWTwoYnARxjQSMLiJm1Rk6Auyi65a4PNtKPKx1JENZfwBnAZmkYaduthTD3BjiwVZFSVYVa1aWoAP6a7VFs1q",
  "key46": "2m9Xc63kZW1Mhpz1sruPhZYpz3S2K3FMyCoNUndrT8Zy6wtzPX1waBpDX1fYVGJZGj8n8BwkciZgCTRnUr2j18m6",
  "key47": "5A64veDNiPfxDf1mi3u3HYBkB4xu9fmcbtinzqdAgHazGDxr5gPhxEAHo1N9aSWzC4UriGn4G47d4f281nT5YzHp",
  "key48": "5Gm5oSfuU6pZvXCQZuWKWSvNFjce1jfAxByxa7ww275joHBuPdQ9Eudi3HoKcmYxy426jyXggtrvjsHhshEzPMNU",
  "key49": "2djD6FDxAP8kz9SkYcs1xMXHu6FofRhFVDYPtjLrYSRipmqC3ZfQyNCWZtFg1xLV47gqxjiJhZghWvZLzwWrMm3M"
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
