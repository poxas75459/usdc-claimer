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
    "5Ln5U8WHDMTZjuqzDz6AgMhhB8rdt3CWrckvnyZWt5VFE1t4We3NL4RxsNxruuhAKc4HEc1twDG99m1kgN3ERxhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kzy3BoXb9L2YpnRmLRcGevoZX1dssB7yy8QvHGhxt5xPJdw2jcoP9EbSAeVJYkY7s1ziBheNRtBLV8g1KTrGCgm",
  "key1": "3CzF8LR6wNzdiZ743VxSJRig8kjJ5bD4q5PEdy6f2AWdR473gccSuZR2otkGmMFY11NKDbG3Fwii9G92VkJUQpzP",
  "key2": "2NF767WN1WFSzPm3wnWzp96irXD9k3We49h1xGF2R5BKj8tvx4bGaR5ASzh5ZoTu8A3cACmEacppD9iitGTLGvNK",
  "key3": "2WttLHaum5nRVDheDjgr6DVaSMVoBcmZkWw2EZrYKBGvSjLjL1icVDk5Q5iU6NUNJSJ9AzB9VNRgFATFeiudPVnJ",
  "key4": "2qdouXJJnnmtQuqvhDLDf8nnX1VcrqCdFwmqMURCVoUJYwm1VuF5jfB83cH9ozTSMMLYz5vKP8uDoH6DF2rCcbY8",
  "key5": "33KKYsLdbSqAgWHQaqjRVThGWtAfotozE6ct2VV2SpW1BFsdM1rQG4hxZ6iGFGmHe16Vc74yxvrFASV6itkaXT8Y",
  "key6": "4UsFWQC81zLkXAtVx6Sq5kMzabSqTTSwsx36dChYqupbtC6PjSWdhHu3aa8i2uxxyiyZCmbQa3V5d8NcPjiToL98",
  "key7": "cYYdmgQtG36fm5PCSDvbxSse4h41bopF687ZBwginWs2r8Xjhgt34vkW6mJqTrHeWHEJ3b9phVEheQpeXG2oPSX",
  "key8": "4RnDuFct7dFdamABcMmn9M1mgRN5VfzcaqyzGvwx4ZYEZs3ep9oAj5TUk59vjMbU3yn1Zg9DBT1YdbgzAgpFwNg8",
  "key9": "5njdcFWyFEEvvYhtwwofnsvDqEMvMPheGFW4EQvvQ8pFzqdU76qEsFtCZekKYfku5YMQFZC2LqRdwDAKWAhMGuqL",
  "key10": "51yFEzzCHDYr4yw9UMiHw7vMia8tzX2r5iCKnoCndSf79au5pK6a8V2zEBiH91kJZjpRfZXNYTwQmPCe3gLb9vqx",
  "key11": "5anBdnJAqwBqUuZR4eznfM8fwdqim1zSw4qrKNEKhWPgGipMCRSn8UAeTgHbEn8Yx3uCnWGp4DzwBYxtTwebQax",
  "key12": "Uy9BVWpJmdW9Ec8EuYTPMu4o6W2zs6bx6daGazayUNFANUTVVnJyEm3B3JBWMTSXd65UP1j4TpBWj5NJ89cu1Xe",
  "key13": "5dmUC2mKQYteetNQBjqEBioZdiKAQCuefddpNf8yRUZDRiBmRsYj1s3bp6zMuf26Q5AYArWCM8cbpDVq6aADn8PN",
  "key14": "E9PtebjZ12HzN7zdAGmaVoGrBrHBvmVNN7QoPevRjtmkkoMJ1BWdbQxYNpM1GG6PPmGSLWDwW28ApdzUkUgCihQ",
  "key15": "21hSJXxMkHWV22EpauG7cQvbxz3UjWE8NJCpAtvVaNj1mwmkJn5u47U5JX36nYh1kcJko9Ccw3QBJbYFF8dbJ8mE",
  "key16": "VAHefeQAX7t7GSWajzAqX7sUjmyCu9bsW5eN4vX6CC31Z686QXUeZmeqAWYAk4h946TsYrUeLxvmHuABvBgiMy4",
  "key17": "5uHZ5ZhJv6fc6itBff8ncWQnLfuthVBDptkbF27QeZsGrWLeXoGm5yGnzbtvNya6ehTEjyywPoexd2FFyDBhknyk",
  "key18": "3EsR5JuK6tLpKwEikFr2Nm55cyhoXkdg47zNhjTn8Gmrxb7EP3UhGR5ysduEtMwZrdSPFfbQHqdUCtgnbB9rGNQP",
  "key19": "4mcpD7QN14a3R6QUPC9EB2EjqxApLJZ2NfymQbxW8q1KMN9gmENrL3dckViBvhA3Ezex2nMsSmCxaZHxJrEMZWma",
  "key20": "YmTHqzjc77um5jvvr3sKw6LnzLaM1NWm878mPSTfyeNTafuCikb6ecGKNaFRbRzd8gttXNHruo5kjauTg8j2Ss7",
  "key21": "M4MJvzf3BbkrqdLheqmAARfPEpF3RAbQfb6NXsKfPMhueA4oogbKPSRLK9HJnNvnmCnZ76xvfSaGML2wQUT3N9r",
  "key22": "436sPEaRVWcWVro3AViJoi1wAu6TxSFedayPGxotJP419ezHthAWFfyf6L9bSB4SQ87q5qLbbT4a4caJRU4Ji2yC",
  "key23": "4SuGaJiQWZ6Sra8GjuLZDWsmTF5f6K2v1os56QgwmrCm48wsnADfvuQD9VsUFLF6E8jCJUJP3zujuH54rkrZ7VV",
  "key24": "5doD5GycnJHu1sk4NcM7u681TVqqCj8wsdCNLXwmoXfCnubeds3BH258mb9zwN9EWayKjST2LMc8gPhMzD72CUad",
  "key25": "3SjZDo9RLHXqMrQuBTWJ9SNFEzLMGNK8rpyGMnyUHBZjWF3ZPZFoNvVwZw2aY24R6cPesBuoeZv99XBqLtV11Zr6",
  "key26": "5HS8VGQBHTZXshzYGuFNSQbMYuuJ4uCP2PstZo89ZM9h2Fqv4a4G7BEYR6SeU48MJ3TtJbokGabp9qtheN98vQ81",
  "key27": "rgY1uK2pMX7MxrWQ2Q7r6CV7o3SAMX9d72gqKgHbT7R2AD4y7xAV7qQ9ZXJChpr2pFqhzrTBLco65KCjrGMcJ7b",
  "key28": "5SEbYeAhiTR7sDpaNWRgtW8EuVsJuAV3nZ8WzeyvqvNCqFZGU6Bxrp7PxsRYZpHWBfMCpUPesHtjp5b3Nh7XNhq9",
  "key29": "21zuqPkskxihTqc5dpCGG7sZzMqSvg24s4K25oF44GxHH3rp7YWLsXfMZGqUq6GhW5F2GkFqoief5QCFg1wK9BQ1",
  "key30": "4RsqFuY7h1jwaoTK6JrppDTAC5xv4L6Q9nfHfGA9LcYrJGjswsXiFqetTK6U6SNyBDk7m8C5ZH3wsFBaDrWA6UWx",
  "key31": "5UG1pWdGg8QsFUqJVYo5VPY9oXqM5BE5b9nmcRfXeZdAan4oDXTJwqxpwdKZmV6h4vWzLcapZRK163y3cEa8e2T7",
  "key32": "4chDVDLYGyMG78LxuSGhNYqPzzuEbpcAobatDDEPZuxk19rQ3y8LwxkyJejDGmRps2iBjSNFqUZUSZ6QSS5QG3JC",
  "key33": "jLaJ8W96SupLbAZuiHqbWHW39sRXZ88uYNdAcCojwQVHH7LJ314G1FzmCowhpkg6jue2XWWHymZEc9bcz3YwFLj",
  "key34": "nt7uVxnp93BE9WB6TPsacez4ii1NYw8dqUk6Dtr3aTDprasHCg6UrY6yokiqBvQFAUL23kcUKZsjm3Qbn7Npg1o",
  "key35": "2cfLvfzRhV5GFi23jvwgJUBMabr7NVwX56D4kUAogHJoXrn5dBs2iCturtbMRBsMF6oPYWfEwizS1htj4Ux3PS3C",
  "key36": "42JKfjiw3ExrNm2VTkSBEoJXnGgdkBwCDM64JH62si8fLfSYwHEaoML1jhVg7tqDry9SBmsjzUVVPbCBZTZBQWo3",
  "key37": "VsMDBN9hEkBSqRVfpLTmwGGjjHuSCWGtrLY853LoPU6EsApFetSX1WY2Rmv5rWEBQNTekXBS4BsPi4hmRyTdwoD",
  "key38": "2ampTBWypeofwmmfFsQhMNM136f2TGPCT5Y5MmKrqjdHPgeVpWMwqGWeVoVGyhXzdUSExUeqNMeG86tGFec4nyJk",
  "key39": "5rYUfCkqkzBrhvbL5bZ4xKdUvRkPeYZHfb46DWjg5yXcn2o7WcSFukE1EyqwNg9XyxAa8cgYciFx7zPSPByv2FB1",
  "key40": "43Y6z9XmoiaWshR7FFayGccWZS5msKw15tJN8MVHtrzwh7nz6i2GsBcs9sHqoPFmKjGiK3YgghB4ThaSJTMWoYi1",
  "key41": "4zYpJmXZmotdUiSivu8EhH7YBGsrUBecL8zeoi7o5FvWsq9CK2zZ6DsfhAxYemdtTUhMUDHwPbHDNuEjmYLraLzf",
  "key42": "4HmdHfhqhEY3yHyfixGuewxV5FzTeHxwPbcrJbaNJyW2iGbDay19Zf9rbi6e8WT71Wt7mdaYcVS5TKoNqfs2tqES",
  "key43": "2UixsKBeuwd7q7hKPWVLknzQhdQS4rCJERwuN8EeFtp8fRovvrYcwE3zxed7mgBJv4Rk3xHhrhxFXxrJq8fpAynX",
  "key44": "598s3bEab6Q9P3ce9jsWznESTm2z1d8GkDeKkuC63tuXDB8swTt8vzm4takxetWn4v6sN6e8YH69iYKA7PwArCid",
  "key45": "4E8Pq8wmonmwRATAvr2x4zfzuWfnZhmDiWALXN4utrp8s1Z52GPxEWex6FVLijv2JWfLT5FFWSVTVjD2Uyxc9AxP",
  "key46": "4bAXhGN6d5amNzyKtgbNpaYAFbrFEH5n1mNSXbBBKHbtr8Uyue9Uun8ekedco1VixC8guV55CCwYmCZ9Mm1xZ1on"
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
