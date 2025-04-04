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
    "2AtubLJE2R7KERmyWkvKacNDsE5zkRMGRVWK1VsxVmordMwMtWAZ2cQAqi5RDnnuBkym8MHSNLxb1hNyyGzmffFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kcD3xChK8tmQxn18CqrX5F6xurtC3pcPrb9f6yTv9egvQ7AjWNGzSniHLHxGSGjanmHoQNZaKnY5SXDGYqXxd6",
  "key1": "a9EVHZngfzPNXfav2cdm5uC3kkfA4S1itySKeDDXX3pis5ZNJucYzC6EiAXLeo1ZyLEZvNTVEQzSKNNUqSvAe2S",
  "key2": "5LGqdKBWvjPiMmqsHc76kQHAkpVLjuHcNQqa6zK4b98g6K2qkp82zFr7SXEA1DZ5bdtWW55ojbehqgsdfbT75kCa",
  "key3": "5QxKDJFqfz11CgroXhcMxyxrh4Q9kCzJ6wsofnAkq9g2g4a78iHrcqz7zVEqnLLp83k16DuqCSJFayMX8n8MypdF",
  "key4": "3F41zkGihBs2MjLpVUTg21gKHMbKfheWjcY1LYBVf7K5BtbzYASGm5xMV6sWQA73yQHfAyxRzkntXf8BXXD1hPFR",
  "key5": "LP59dTgri9iQsvqUN1g4V9YjWppbLN2K74duXBaGiTNB3z2Snzh5aSdPmdohhjDzsbkj6gvNaRNZsWg1N3pggnx",
  "key6": "34867MTccsLUF7LfEkBhXXFJuV8UYwnD3t9UnWW9YMttfMnEb1AN1AzxAs2uEdsCvwNALF2cZfj61QSYserNiqJd",
  "key7": "2CGPjajtnvtRQYhYHHtaj8uga8vGegHkA5wfJuR5nPM7sCRt7xS22oFAA55Ttxr6pLF4bnJ6EzyptjZJp8ruFG7q",
  "key8": "3tYikQ1UoiidmTamJapuHw2T3qrrMn47EQoiok7drWWFubF2B8dDCNkaExaifrKPpokLXfrZ4CVZSdjbWNSzefiv",
  "key9": "3euN8YJSm3b6Cgrx3wboNfFbBfEudXSw6xQomFx3WdnRAetZgGeH4GYJuA2Aad2DLGZ9udhWAMDkjw4hrkUfpqjm",
  "key10": "25zXEj4SEzCMHWqcZXT2nF19qcWVss7DNkbFayNMpGEJLesvphMmRX8DZjRFrcyuf3hUnrc5DYZPPyZ3QHCRLmLJ",
  "key11": "5RpReBQ57taF2QrT6qHMT25pDyCcWro8UEDNVj1gzfvfDhp5K8k4B4fFHadhgnpZz73m9n76VLTvkUcyZgeBYAXY",
  "key12": "FovBQ8bhfnEheo3HMwDNGPNHuyRiyaPxS7K3RjVxVPg6mNWAsqXbppKR8j11wzpG3Xr4Gxmu1M3NGusTzCiQgX3",
  "key13": "4P557UevAS1qPy491AS2BAb2cyHqsSnFfq6KTVVfPas5ELakLqsmcDfq71FzvPKcFda5WAd8upoKUkprN2VzZz69",
  "key14": "y4bNJBhy1x6ghLVVU9Xps7EHLmMnnPvqXJeCNeSna2rGRW7YUx3rgvkiYnxzrtpjmsB4FHZJcgzL251MXx94kmp",
  "key15": "5CiPXJDSJqCHbBP1Ct6d3AJhPe14jmLmaxsAHdHTuiaBB9YnkKDTtzfXsuogVR9xAFqd8uV6nt5tQFWkoHgmrbxM",
  "key16": "4nFyZQQrcKhxPD2jW87hrRQ2ApsVSER74iybQfivXDn7wRfoPrbGqrAddh9Mz9uszmDurr4H66Z2MZYXxb47mNu2",
  "key17": "35Gq5zt4RnV7CfDnB6S3D5HZRcdH5En33va6DbYdTqK88b9QqT5kiaZbo3Bcn3X8h72kEoFzxBnUmvyBRkWGZfQx",
  "key18": "3iahhfjh3qHJUDijhGr5rTtPbY8NpgXMzoPxsVqHCQZ9esmmZMjZzHsTYemZWTbJm9NbyWwkwTG9wahA9rmQZ7UB",
  "key19": "2rW2ov6ZPh2BJvTj6cMhXFaco95nKdXqpkYEMWsw6c7Don51iYzMmEBhw2wjTPSjUmJcntwpzKsydvD6R2JVtqDV",
  "key20": "75KCKHThVJ2yuGdArsfVcGXHTqS4v8K8uhZ9ut2XRbzKZ7M4j9drEUQCaMjw8zcSizQADwuVsvBwdhGWXGDo1KX",
  "key21": "2LNvnKs75JtQ9MVnVyupqQ4LusvuJfi31zqss9WFKj31YTrtrKHfR6PzxNTfas4xMz14fmvg86SRuuJn64Eovwbh",
  "key22": "4P9k18BZDUMqL1ro86oho2Ubzs2c7mo2MmaAXaCtzeq718eN49MNbccJk4DhnsjMiAV1t5nqv3b9d1ypCENN5Nng",
  "key23": "4mE1isgNMwSt9KKLrtAqPKxJEgEHh8kV7cgjo3bbtB99Lm2eJCg7g4xn5VpW6Th8jnEJ2ak4bsQzqM6zRqK2SktA",
  "key24": "47HKudmfZEmxkwY4yBCfdVGsFhfMk2CjpqbGHCpfpaVpwWexcHQdioWAHXrbo3afMo831ANZtcEMnJHsJrDDXMqY",
  "key25": "23NDme3vkhRq4SvvDufg1LWd38Ky2P8uHp36QGSiHg9yaSfqyivvptxNX7R7Rg8yUYDPUt27dUV6eYatgSiLuDP3",
  "key26": "2NSSFqM8VzBHSz4zJx8EJ2atfw7koxuGh7JhfUcdyBk5YNyUrcwbPhBHfncX9EgCwzXxBWmHm8aPWGfCsQNyud77",
  "key27": "rFmDm8an41KkbBfTJHHx4G9hz5kr4zLUe6LYQ6KkgNukAnhUHPXzNP3gTJJZVWi5PTiyLFEH54ncAeCA8ufAKvw",
  "key28": "FfLFTJkK4jyYebDBxM174eKC6ZVqbMp5yAQg1wevnourSefzsm8TPB4F1EpSVsFqK4nkkaVLLvYa1a133XGzT87",
  "key29": "vwJ9C6SNynB2HgjywpZpFVGBKA25Kg7AZXXzbLtjsD8MojyVqhvLdBC79G5NK2xrfYZnUQ6ACjyxrMxU6LKPNtX",
  "key30": "2HewadDbHzj9vRCApte892rvJg6XhJjNaGiEpxDbLjWN6A51QJBesviGFosvdDihDQtCXjKkot1TWhdnLvE97PzL",
  "key31": "5xamSVwBo8RQpfmfpYtBCGaZJGQcjMaRs3To3AiwVzX4CcTdUGNLgyKzmwjSc4cqRKu2bLArcBVT5a466Qph454A",
  "key32": "4cfM1VggJESEKNotyu9oYyhrvmki6ADbm14wiuvsCciqYyB7BztD8dzfd3Xb9FoLADg5FzozuEnz6WUTgAp4hicf",
  "key33": "5WbdSRj2bg7E4KrZc7YHmDHemqMgnu3FE1GdohtSJvNHw3mWtaRi7AG3YNY4Rk4JVnv4CYZ3KW6xMbyjWiiiDzxA",
  "key34": "4jzxBoa3K2UdtQcD1gswQ7BwHFh969E1UnrEtc3NfcZNBuWdVLvJA1fKA559gu1GFMsihEhxabE8us7bBdeu95u6",
  "key35": "5RbzRakqR2Y7Kth7iFW9HXcwttNAJ6CoZpCbL9DH5NJdfM1d9gHf478btpdiVDwiEn6dEUMxHX9atU9votk2gzpu",
  "key36": "3xL9Bs9Cj2oZhy4BMa3K5khfsWNCYTPdDz5uvddWnzmTMQent8cJacqsUjmjdqhznpqxpNQJb3vbyWkvu5xtCSU9",
  "key37": "5Fdsm5mMQdUMrT1YbnreLjDNbkZrigcXe1JnwqXewewkSbmdwEZCB2ZYRf6WgvFRwAZJ1qizNPtcdDhtsA8UAYxN",
  "key38": "4d3wwLrjhZNigcL7xe8cM3Vxn1tYrX7jLuxneaz6WDK8UiuMxz3rmB5Ax5vyk2QpniWtkgf1FCjjDnzVX7RFBo44",
  "key39": "5SyCBnj3uan6DoFf67htzuG7VPzFtJGXp3gnpqFDhJxoimerPT6QjPh3fhT73SKsfgMcuwh98TDJrNAaKkMwCry5",
  "key40": "3fmvawyS4SiWzxLySNB1n57kPMN4pPgMGNRdR3qA2uiVzyq4mJXotJpgEGBQRpcdejgxRpUmcRMhdAo1gffhkxin",
  "key41": "4VsU1Rrtp69BJkXAtUqkU57VT9nRcKaTCv2RwojERQm1YqNCY71od31724DJBfYcpS6P3kcrgbpRgp4rvnP9n9cf",
  "key42": "5vJrN2inF6HCESMaumKyg5ahdBf9zrHBQL14bK4PkzCRXg2jLXnWUGkEnac13m1RpP7J8mMSicmxSgD2XysqZY4d"
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
