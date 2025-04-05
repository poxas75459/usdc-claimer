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
    "5taWvZBvqmS75maWRu83jJxvAP9WE8WT1b4MCfgR6cWszLdvqJz4Ph57gmhcjp4C5j3unjthtKNJbMgWvv91LEcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWwV3q4nkx4midVi6Lzifxv54ByaqQ5oWUuPj2HQYGHc5SEk9R8y9Cca56aetE35si6Dva5AFBQSxLgbdmynnNd",
  "key1": "3gKVB6z9iypkEQBaJYY2sHC4fWsFREiJo99m763EXzcof4NKjuXHoMWTFdYyHqxMa3V5NRSQAEWKcmetV5KaRkU8",
  "key2": "4YybeqEWfKVRyo3wAZtod7fZfDiXUXuua95HjmnFT7CWmu2rpZvCcdgNCd854Kim6WmBtx9VCCwSYZDxqHiVzTdC",
  "key3": "cVP2cezeZeKfbbgr73JUi3XD8g3gEUJRq2PvYxJCAyVWuDUqb9DnUDQkFmUmQx4S5KRpHwP6bXVSMZ96oArUp35",
  "key4": "61A17xgV92a3uCJKyYAX5v9UWrU7vfWjegwnPP7aDVMz1VG96cFFspGcjig8KESpkmzGNykQfwHYdhSfuqwfBoFB",
  "key5": "q6K79kLxWEGyQzY6F53r1jgXm6NHx2p9LK7LGqC7JDtTvK1zJsKdjZy7PNhxGPUdwJtE2uCiju9aGhx2xLFVqyZ",
  "key6": "jkCQPGP4mBsCEALcsmqhuxorMMbxjH2Ud1MLBQdS1msQUHVaTFXR33MzMHArBtxGdeoyrLJpzXq1XdxLyjHGLSA",
  "key7": "5CZD9LWBbz9pefRF1UV9ikRRQ5ECdZGn79VuvMBsbgUfTUprobHrdzPhJ3AAydK4ANLnQzLgYVSYx2b47uXkYzAP",
  "key8": "cUu1zzaGEcjtt583WSppiauR72mFc5LpPzeFkbgngVkxQX1mEuwryMRzdCJHwphUQMD5oW6N3eyXKvhbHRfvd12",
  "key9": "4LA28n1y7nHJuaP8gtHD3813Atd9LgJEQSzbu9wsDEYyQnjWADoiTzvsoDybiqR8Lzobsk5wpyy5HvJHNrXfNAWM",
  "key10": "cSzcTTHYemhURx4ChhjUFCaAW6tuBKEdEFfNBfWcinU5S374MY1Uf36PkUxeG42y2feFM9E86SLmCz6mFuaM1ob",
  "key11": "ZHpH9H5Bh4cej6G6B737J73VHcU4pc4cyiSNSzaWbWnPU2erYUqLsFZCLokqTCAvVmDTn9fKTMfzdpAKPLcM18j",
  "key12": "3pDoHSpVFKeo9zMGc5Ded8rN2WXJzPnpRMmkXLrQftjLLrvWwkqCBFkfuv2soVSxX9Ez4vbAofEpbvazGFQHEWDh",
  "key13": "3EiCV32Bidy1oZatjqHH7HAPetnmcoxtaJ63jfi4cQa4tfSMLyTohvwkv6QKdMbLpUtfcQcy8mAWPWykAFxj6Um3",
  "key14": "3HHzPRpax9Hs73ovpxAA2z1rfNgiH9MfM9b4wpgnxpd7M7r5AyQhX65YR7LDr49scYZMyreLa7jJE1XgWokAkqhH",
  "key15": "3kCUsmSn7udTaNdv1JqZsDB4uN2SHTFSjaedSb3dHoXrwE71QAWSj5AEaP1QH7z9Xzehrhz6m9bSW6fSoCKV46ia",
  "key16": "4Esc4hQXtBohDz1Bn7miLGtUgzqgGiSKqQEcbLLyU1NczrtbrgeVaKztNFuTHYUm5CdsC6BQprJCZisq4fEzxV8N",
  "key17": "63T2viwJmWu6pK11zh1VUk2qQzbSCXXXszhCkWRfr1bG3b6YnDpcFxiGz4D2owYeNAvAARNwsmrZFjpvNrFepzc9",
  "key18": "51aY2aM8G12sBE1sJ4z3ZfVdnmaWnbjH1CvKTnxp7AMkx8URRu938unw66yPCQQVyTP5G16LiAnc3NYFpAoMKTdr",
  "key19": "4j58DuUXNjzErRZoXpM6EySDBPtxnPoasHTNCQjxHJrDNQmkSQWQvV2XzdVi6dDAYHDR85wTwRVKRxdrxg5AVS4J",
  "key20": "5xsZhQiK3yQSJsXd5Eusd3QP6hSFdSyqNFLg91iRVmTGu3kzb1z7iTBKxRNchrXemvbezdsvL61HZJtJtVDddprP",
  "key21": "2YuAegLEQ1bGSDwaxSGTbnXACw5XVxZAc1MSPgGRN5Cd3Ax5r1wePE4AXtPdRaDhXZenPghvNmRQyjJPupV6xdqj",
  "key22": "4uAnFqLRaNNtmQUuMEyXCkG4UtuUEPJbsiMtHjyCNAm9j9zq6mAV2kpwVzf9eibmeUxmcnpjPuzfxLTZesxP8RpL",
  "key23": "4dn76opgLfnsW6iVcZJiuqVy3GjQLiVDmbRE7K5ZWVyTJqLAS98zJzgUdryymxFGafV6j4FxEsVRm7QZoCwgyDg1",
  "key24": "386Ew6KYRyiTs6swpDmsjLBBhihsCA6UG9jkMejdj48rwpH7H73tGVQpaSYsttn4C6DSstp9jrvCsARy5LoF2A9w",
  "key25": "5Te3i4iFxbVD7PQUD1wLhKCdHCLMFEk1xGB9k4fLbwwnMyv3u2akZkKrSAMeqEuihskFUJMPR8EcKfNZQBE8LUDb",
  "key26": "4iPZsYjXMHq7B1rGD7bSEaLPUGDjG6fEas6YVDRPDDdDW8w9oDE44oxiYNQZUB5uhzSrK1Sxr52KJ95b6m9VhTh9",
  "key27": "4vVNzeoBQiTP5ocq5ysUyBsBtRM2USbsnw6NGXkDqmBuHCko4BWveBi43DEnNPmNc8V7c3BzprWDPuvRnT9qJi29",
  "key28": "mtTPpxG9iFp3U7jsMpxNFBCEXewL2cMgXBtAYU5ebv7Rg3EuQdd4vW6qftcDFznmhZdvCCSvSCWTNdYTyFVqukG",
  "key29": "2kZ6b4tFiwGKhHeBTLYd2VffcG6gbWzHRrZbzsTLRWxDp9BruuBz5nDtrjAqdeXk7b7a8E5xnS2ntdwP8K8RHWhX",
  "key30": "2xsfPELDgWCuzryvujouUnaT8VnyvnyeNb9mmJkKhmhKMFRPNBQHpjKLriuh81yZuCMjqzP7jWJ3CHVAaL2wfUdJ",
  "key31": "4dnimtDXnBNgDDtJkyByqZks999FCDEkCidBdQEYh7ysR7QoK1chZe4JpEoaBap3Z2BFE6RCH4FcyTg42AzyJw4n",
  "key32": "53GubAyKqbdGT8WNoRMt5RXLDecKFzrdUjktkppMANgHWg1MF89T7zFpzobhfrfDYXym3RE6d7ucaR85ZzMQN2c3",
  "key33": "31HoxofVfFegyHJC1zwbmav4pc6GmC4YpCoyqZ7TsztwBMrvU6mTdFo8dEFRdTJhsmA4Ctht5rmdQLqzwMNV9JrD",
  "key34": "55xLcC26Hxu8sduc162Es9eJUvtXx5qrJzJm7Y5ar7J7W2Bk5niTDok9Z1DBRuSyQ8LZVRQyJDDYQ4iwTLQbPUUn",
  "key35": "5ogSfW8AyNSQGAdH1CSXDGuZrsFcesouE3jTknq4R9j72T9m8k3jGgD9EyccRg8imVJFVcVVUhaHrpXihBpmnuVb",
  "key36": "5jPWjkuevoSfsKYm5G4L7Gi571fhPC2MiVSQBsW9foYdDPySivD8J854rxg96ewDMftKeeQ4RM4z4fqmeeAgz9tb",
  "key37": "4WKaGeb4W47RPVN5GzsNiZoWXfCwHUv8YHKJCeLd7jHVdfRP1otnAho8HuHsotst5mPtgyKnWMD1uQbXfdX1hgKK"
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
