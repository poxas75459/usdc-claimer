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
    "h3FdCpbv5Cs6iNjfzP1y6JjGPbaAfsG7KztTng2pu5MXV6jKqu6MpWLFgvtUhWawyrWuKwLis8rQ2Wc7Y4nNSEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfArPBkCcz7dY5fVor8nLNHQHbkoKaDzktMBogFJi7uY8z8LgXNgvAs8BWkp1wcSzbiPv5LgfmYz7sEQtSHGHj5",
  "key1": "xDRHkouJZJft5Nd9EuLbhLHxV7G7DHVsQ45mrzirA9NgxF979o3iAqtCaAg69TJFCB5moCubSiSfX8UzzPYMDfm",
  "key2": "2aGrWiTxcqaeXmYTpTNmLoYtjBVVnv2DXAVAyNhmLE34ZJbKux2UtwGYMWgRPkRNXQR2eEX3a6suNE3yFUC2YBr7",
  "key3": "jwe6LYDanG66ioxvRMG2JsDLmXtzmVU9AosHaEUZLnpFm1Y1tGn88zV29QWwyrdeLcSGviNLHKB1jzEUF9oujJn",
  "key4": "2admyPLFHtYSs9mNm2HuVRRN9p253f8GYKW1ZWdRGEPCrh5tJCoKAFep5xsx9bRnA5wysQFm4d6hoJyGKtNRDG9s",
  "key5": "4CzmYAz2z8vqAQrJQ2vWhCsRjMcLCaTypVd9sSaYLNes5xcFpmw8E5eZmkT3qxWRpcsa21VAVgDkXbMQSrH2ZYiU",
  "key6": "4QXwafyM4SwBDLUAJ14vWnLUTTzsTJF5p8gdy7V6sv97BqBnxgW2GfSHyqNTAKEABMQsAQPTiEvZbso8F6At4iB1",
  "key7": "4uFPwJk39NZQGQW8aAiaKX44YEB69dAhfAc5XBkY5k9eN9jxr2hnmSpGANEEdxNHAj3MWtgxcqKD2cfsBAPXNQbM",
  "key8": "3zqa6xnRMHkTduSv16HGoaMQTjbnWUgnNd1rT4BaiWv6HBDaBvyRpsrexkQysw83Qd4Vs17rgnCxQqM22Sie2HPC",
  "key9": "125YM9qeRAhRvgUWtii2Q8HKzdch2en5iJifA8p514L9CckivLf2gk6LD5Pjn8rfU9FVs9N6F7KNsRVsLbHH6SMU",
  "key10": "2EKJhFeo8u2vGYNHV8gAV4fVinXZQMDnYb5aMzUKsSNwzSttdD1BjhvR789AtTZLc58Xbst3xRnD3ETJnWvaSXgf",
  "key11": "4iYqsdkha7mW6e7Vo2uhZcGdDSnE7KcnQBm9gNtJtF6foxUy61SFkSAEMNeigD4wu3AyxNPeKzgxD6YjNZfVTyj4",
  "key12": "4thn1mMy3TnA84zGcZL4LsuTLov928N3YX8Yu4J7cJ9jSY1YiKpkAnbgYN7CHFiuxeZVcFquxHjUyCaViJhEzBy6",
  "key13": "4c2D8ApMT1xbUU1pnHcEn2ctWqPRG46CFD9EH2Wz1ZbffPAZQeeLJrAqba1PHD6Py3DiqxFADg5RV614D57HX69R",
  "key14": "kWdU1NV85x33dP826T1yt1naWSmKHvJpskbxLd9qzN5y8RgvcKTd6qnQRCAUAcYSGydNzmApPUkTaDoazbz6DmK",
  "key15": "66sscFrXwrGatVkfHjB8TeL7V136LmN4sJSVR97FvMwutNeC6kYNxhy6PzuqbpBBEcg5ugc9D5jEZGzkDSqwcu4i",
  "key16": "38GZcsMANw2UqAKkkoJYqajpvwpAUaqBgjp8bVu3rS7vHkxwQwpH9FZZokjWgfhawAx7KA84S9qxrgqMvYGEt6tv",
  "key17": "22Z6LNFiU71Q2PEJJsL2wDth9zbmBNXLT5hxYeEmaD72saka7rRPYN93Z5NX5W3KFXNnrug4HpkTH2gyqvkYgNxF",
  "key18": "xPACMLBdQfKRpbGTBCMFUhfYTzjegghhmuSkXu1ajpFHXyHFZRtxfbCDn7GxxQSN9eqri8zQKtFZeeYv8CG4zky",
  "key19": "24PuWNbWGM1DmHbc46z9izsdnzWj2diToqjUdYBU7hV64gB62oRr9zLi7zhMDjoyn856zzZ5zmVFHCepdzucaUwh",
  "key20": "3cfhnDQvuYsJgjnBbc6QrQrgvk8Zkey6uwiHkvcCR4PUbAuVEYZxj8pez7WfBbXgxxpXgDJfLpZx83TX8ChrQra8",
  "key21": "3aKHRw7dteuqwDA6VAh4Dngs45WpUfLaxWendQDfESdq4Saa2ywAym3NYwwdsjJF2RZdRaFcBUmUQFUouuqGhHSZ",
  "key22": "5qkwJu6q9VtDMhq6UdJ77iFuhamfXJHJAWJseFGUEWa9JVyoUijXPHwu8swoCmFj95assZsvHeuqrN3HzhtdwM6a",
  "key23": "B8jChW6DyVcwFaUdDf3eDfXVvRMwxCXEJini6TEBgFK2pa7kHsugooJCR4ZecE5XsqsEJvKpx5Xi6HTvZo7U9cK",
  "key24": "3P6GYw8Tt9dNcSZuikV8GcR31bAKiifLevv8sx4rbgYQkZRtrbjXaZcbeBu1iWMNajp7jubWyVNN2ry8NCP62tYS",
  "key25": "q9TVDksCp8ExnwKPMpFBGRobs9F14PgiSiR4eFb8xTj2ACtzKjyVKFEAcPAU8nGKshfxxWrYFn6jAEtqQAroXQ4",
  "key26": "5c9Hsv9bEaHyzQSBhdzC1gVLot32JQRgDRYQ7ggnUDuQCnBC2e3ktnNERViVpq4YH8PUD5iYXDPNtRzEJRNzvPXn",
  "key27": "5HcqpgoRiGZqFVWi7MZ1z3dFZbo5TaFYJXtWf1jkDFvaUNKb3b7VG6rZmAfYUxYB1S8BJ6nq8CvK76YvLL225c2E",
  "key28": "32UWaEXWR8vjYLjVRFkWCv65DYLZyW25XPFMyHHjGngkemCVzvQJvsNwAkNpD6fetV3po1FePW79es3TuAZu8Jvg",
  "key29": "iUH1vN2CdAr1gHRkW2L8AgUM9GjZFnPrTvKy6FthFqR31TPmDnVXY5G19VgxCqUS2F5e4tQ4PdCAtjWgGbMGmkz",
  "key30": "38s1WRB6BpaKHBsHFz6VgqJ1FfzVWSvRinPGikc4PcPgyhoz4TzAMQmesBuyJL5JSYoBmcWodCqGKHpUCpq7D1NP",
  "key31": "3Y8E7WwBqA11DMDUgyynKmk7gNmLs5mx2fJjmvwL7P9nGeCJhq8yVVfgCfDCBRmdHHQod4gJicSHU5pB3aun59FD",
  "key32": "5qnCx3BhAsrNLdUdBw3zvJSZZYKXuCGKxp8xuF6cJnArNvMWHmpz1CEQWvx5Xgw3uD89psUHiZyErEuhvmFmxF3E",
  "key33": "crrdjKu3539fz2TdZuupBEaKkm2NMQigKST9nExdDfxgwc2EP9QgvcNpKfCpfwcLF59hro7nWbnico7MzCZBME3",
  "key34": "3FTRpNoHgnYJSfko7eEecuMTDyEhd8vtJj6CwWaMgYHGAc97qZbHemuNNyHNiv8PKu19rWoqmEm2UtgGrTJ3S1Bk"
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
