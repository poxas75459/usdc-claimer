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
    "2sAfBTxRzXVvpkUX4rcD3zEK4PaRm4R84Dzg7oerjdUxT8Vtgoi7JwwvripqEs8iaML9v3NXFFUEjDbG3o1VSBKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epxSdh6gG4hyQcMWT3hTveY1zQMr99X1hQPAw7MNNqBSdidXc4J9Rs4WNwg5firryaX8FifME7YLwmSTJ5Wv1oP",
  "key1": "25dyTTaU5E2VgLM6E61qy9KT1PbvoUzbd1s9VK1ysuqUuJTLXX4eyxzgX22d3WN9Dq7T5t83xcvmvKSsxMzuW1hQ",
  "key2": "5BC3SqSL3YLgzTL9rwd9MRPTYgZARLbJgSQDugwNMsptmdWoJPAQqeaMzaRrU2Zu97svTMBuuRoF2QZ4H7DSAy5m",
  "key3": "3rMg8pBSVX1RybQHSHnwuZQrHHgwVChX1nguwkD16vvQeddfgsZtt7htPKwZUGoM1ubpMA74HjYA5U4kqBnnr8H",
  "key4": "4oLL6QVebCRaaEo2JCNcMZZRhPE1PNRFduAvadEzgP6Sik3N7M3WK41iN8QzN4GNMr2RXcAv8gQervzDq9foCS8M",
  "key5": "3DnhqhaihigoenaA8423xgzfLdw7MMX6PEkxQ7pgYrWjLsnzZducGejYgJT5nsXXRq3bk9LPrVxd483bRfK7ejqh",
  "key6": "5FiWj46E42R2Sqk2XJxDvK1DAKRqEK4nub6XtciVP5ixZoNfsvXvHz8eu32c7Qh8djRKPCrYnFQ8Yk2w9RKVGxLb",
  "key7": "2wJAuWEQGMPUricMFH5otvrHyb5kseBLfqKqecaRsXKXA7HD4b5sh8X2buTtFJmB9rk58dZYwpAdMoMkm7EZoKxD",
  "key8": "5UW8CrKmKwYsMiAfhuovR53xcGUBXo8j9syiUD3ocujjWKCK7n7pYy9tM7yKAoio1qJ1hNSMSCpZUjjUDoBt82aX",
  "key9": "m7pVMRbTXofh6bttwCQsyUW2fxWC64sCCvuobjAc5NB6FbxTyw7zfDekampAJDCkCWn4UQjan2f2teUu11dDf3Z",
  "key10": "4cSsc9tnq6ZHTu1Y5DYNoyxbUGMdBkNAezfXXmRTGkuESo9tFK5kirGRqf7wXjCUaETT2k5mSMXGS8CHvT1yQJV6",
  "key11": "4cFRnQbqanJ8EJQ8ScxvXsVcVLZdpvMroXLMQz3wCPTP3NwRTATsYyo1d2csbeYZJdVhHPoyF3TgvH8WNjFaXAyE",
  "key12": "5vg6BMex2az8CF8guJ4buGNX4JzViC28rJB5JwkcHMWqXZ31MigTYWU4Uc3gyQSxgQxUhoFPVyy2eYHzmWJ54yP6",
  "key13": "2cg6UeGES382HDCW6yfZya7JRV8gdAAJfC9mgKvivujtkqSxZRftMDQx27VELFtJKPaAhavK23cP3xcvSmZJmnyn",
  "key14": "4pwPAxbaGNGiy8aBuuSB3G53R1PRXzQTHhqcQrmWKt22cTo6QYx3TvNXSAZ6eZikUXsk19DnpH7dAD8ow2K7qdF8",
  "key15": "eMMsJjmBu3SYnYE1Y1mnQENLx1Gk67tDuVBpXvsQmtyp6RUT71Ra6pASX7MNWTpkXX5ThvtaLRQ5i34r1MFNxE9",
  "key16": "5YAJsjz5ffJudC72wURqBa2hoBf2aFdprRZEgLimjk4fCABgZowruuyxXe1FLpUycTeNsDi2oQA9JdNvo6KJswHU",
  "key17": "62UaW56cAe9AviUhAJ2kubrik9SxESn4trLF6bgMUfF9sxGBZAF4JFr2BWAm74Az6fSvRxCYMNheLw4dmryjMDxc",
  "key18": "Fq8mg1Mb3PSEdysFDxyKQBjkTwHPD9JmFCr3X9jxZJS42kBjczDq49LEHhJk5FcuzGnWHVkU45CVmuU6k3x4adp",
  "key19": "4SbvVFFc2R3z3JiWDgvLAsuTdTJLnbV8LCkL5hhCZEGwYqjG8V5t8tm1ok8U4TQRHXGLfDbDKztksG8VysxHzmzN",
  "key20": "hQTUkSanpq6aPGE8ZsWJX4Q1rukYZtr6U53LRKbKR2ssNGm6GNJjzaM8iY5gxRo2cjj5Ec3LEYgiK4enpeMah9T",
  "key21": "2CrQHXjQqEMXVvETJY9pXavwBopMdJvzYJi3qcGWZWDxQKYDCYWhB1exfCkU2bnUhXujJjLkFM3oYZipVboZNn7C",
  "key22": "5TgdsftazGD1RUyjApdckEVuhLan25ci9ZRQPfEcmq9KFyT2RjCufjg4xcow8Q6yD1vAjJXXcTGXzve1YV1ryAzS",
  "key23": "9Zb4EmmfTcRNWBMaYkPVLdPCcXJAEFMSr93MD3FJgfdSsBDj981JFV3rBqjyAdoS2Jd36tWmm2BjZ3X2CwcNTvo",
  "key24": "3Qi8tuaa6BQqprwoRwftkXZZ9TXEMJh1ekPaypyEbk9sq2kye2MqQ2ak6yx5FcSYgQ1dfpSDGE2CxthkEQs66CRG",
  "key25": "2JPj9DZPi8UgaM1t9CaCR66CzQogrdtPeVjwZGP6QmAitYGbdLV4gWgYityFmAjGpq6v6mv6VrpYn8DhPm2iG3Fy",
  "key26": "5y92CxXqZzPtLtkQfxo7FQy5CjNkMJHUj9jf4VddBBHQvaeWRJuQhTH5fvLH38agdZ1rUM4HKZCe1BmYrg6MpMqS",
  "key27": "5N7YW7uYu16SSpSbGHX8BxtayA1zX3cQEsoDJJDMQmtkcwoSSTLwWPqaTYbSRhSDdyVWqKri8KSZirxzkPUoNVpt",
  "key28": "adsKCshbgWnDUqrgrPgeVDruMJy7BWJZstHx29qLeKFZDz4nYzrkEpHQaCent1ugf7KNkaCiNoxWamd1CCuHqDa",
  "key29": "49Gd5ZquH4o8WzFZeoJAR9pw7KqrwL5j26NboFo99av9fxrW4pNSocv7mTX5Mji1Hcy6TAsVesL8FG9FpcGrAoUt",
  "key30": "WRhTBXPFgJxL3HpPr3vJDDFvbwUL2khwWFCpDDUBKmHFmfBGemmc1h6mEf6X1DDN9aTsTpRd5eK376ukUfCPLc6",
  "key31": "4NBQit4xkG1i1QQeny5EHTVXu84CgVnuAfCDVX4g955271CoYALTumcuFkLMxHc4Qje97m852KTwE3PU96778K8i",
  "key32": "4xhctGiSTB8AKo5bxi1pArknxrWnvdDrZugEj4tyFrTXeMpzKfdhBiWugxGVmuDFPzgbi6WraSCYGPqVyP9yaFCA",
  "key33": "AYeJ8fipkUo4H5R4FK31ShNduBjC23kQRjYw7dTokcg5p4HwLCM59BGf8M9mKmpK8FKV6GA3ALraWYWKAbk38Uu",
  "key34": "4eUqwpqLeC6FjHijrVqQLNnnD3X4nBtwb8Q7mjrc3qjdfbNvkWTt1Grs25kGohXEexVRJPuZ4PtuQBRbRoGY4C9R",
  "key35": "aD5b4dHZrxCK2WPMs74E9x62qFr6FYojsooshnEHyiJRmtyHUCUrQndfCUj23TZ21UkiuzJjNrX8EaN8cKht8BX",
  "key36": "BeVRLZQFdjCLHPRdgUmZhz7GZ92WFEBtaWFcks3HsYkyepxAiRg2zXk2wZmKoCwdT6eT4AKFgcGYhNYTenFyPmF",
  "key37": "4y6z4ZnCovQm73gLgAazjaoPYQ27EiSrLb8576YwjwaX4YcytDtNz3NsGAf27oxAt6SqGokySH2ZSS7H21JS3N18"
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
