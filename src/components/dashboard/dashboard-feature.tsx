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
    "3rYv3tNRDYhuxfKLzGmvSRtc8jgBTzcXkTcfHVPiRoQ6fYL48H5DhyE8egU9wKtbGYRHoWsGjM9tb6dTV5NveYvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpKXXwxrZpv7RZRGQ8ikeioGSWDDx4ynVV4Co9dYRj6cdQEx2rsJzwgdtVSVbygCcfmgaBoJMWBwW6hCDMJkm1H",
  "key1": "2AV1S8mXWPUwSVpCRLWczNeBdy7LFqti8vUjPzqUU65RkrpqbDaSSr33NTPU4uMtRpGGg6vk59EPQgkJkRRPR8Y5",
  "key2": "5g6TFyz1mcUkafa9a9dgMzQBnL9WnS28ELUQKf6Z5GNdp2TryG6CccjqvxMjnGVziu41ZwP5auvWUEQZ8CF15w2b",
  "key3": "u2Uhf12w4tiu6GG4XBXhiiXaK9An6KTKsXJMqs5SvEg2ibEFZv4UX41QZDgTSsL2qXKEQgjmjnMN8EuECPhvtU7",
  "key4": "3VgxBgK4gVkqW94w7CGSkPx3hKkeWhTLrk2vL5dFPV8BUfM5fv2a9miYeptFesyu9K2M6LTXkwZmmgaUJZi2jhiT",
  "key5": "2jthBvW1keXGa15U8cTstLe5L6sFN69Ys1LMTKbFjrsjwSnzSWEqe1GLymAgbQmkaBLxjxenHUy4St2U5PSKf7w5",
  "key6": "NnkrBEmz6RTMehM7yrbaErRHCrvr9VKayHeJtjeBWk331Eyrarh8wo9d3Tt1Rfdnr53m429K2LJdSvm2iqgABPu",
  "key7": "4KxhrN8e5ENdhsRhRxV3oxB4UVFeKqgN3Q2rxJAqmrkkmu4zQ7GtFcCx32oXaGgtaTJswJQySSdjDjkRSegBMFa6",
  "key8": "35wJ4SnkexEx8qD3nwnBGm2WrucQYKChDCUXb12emyyo53Hd6w625piBkr5jdBdFiLXbNqLtET4xe7B7Sj5GTuth",
  "key9": "3ad4fwsjs5ouux5TRhEWEbyuBCG5YP6HQqK5Y6Aye7LSaAJiQH8VP3vpu19e2Q6ECWPHNYvEViXdqVNchVHvqXFN",
  "key10": "3zvLN11bi9TeuMswvfYEqeGAqhWM31MaADQY8M4Kucv26Hq4qzxURnvJT7RtYn8g8NWd9LTnCZJf8b6k9sCDnhvH",
  "key11": "5pJCVnX5jKerXGm5icnd9yu2Qu7mabEtoBYsmnqS7yUR6qjxDm3L8ky85TuBUweTHqxNb8b7rg6VLsxFiUpudQX5",
  "key12": "2vCb7St2rZFCBSdidM7rwhFKQBWtuf1YnLLR2DJas4dpUwcDJLcuXJMhzfoyGquoSucB33enRFE8xvqFjTssGzd5",
  "key13": "gBxjAMT2HRgGdUidh9zvzDY15zsUtiXmJWGhn4A4pRXFoFAH1EzB6eLRnFXKixeSYXP833uTMPEqb5ZkKUo4gYB",
  "key14": "4CrFuLFxD9EFXhdQB9uwGbQ7JjFHw2MtEMRe6b44TrBxbdXHTuQQEjTxWCoaX25FFauARuf1KmbHC2NcQGsY6fEg",
  "key15": "5WDGndzUMbamVD5fsASkQ5N4YxsRSByYXpjBKnxSv4cJB112em5tNNoxN4XRLDW9HWi1BNcNjWvu8McM6QGWXSfA",
  "key16": "5XxeAGz81Uehj7sVD4s9FDXPd5227HpyRC3LuCMpF4aQ9Hnz29MFQtpo6EobAWWVeuAbkLykMumUC78WtT8maekM",
  "key17": "3RTjMFnn1Vg3QLehhxmipLfyMFa7MYTBUCvKHjNp3S9pK2Beim1iNTMnZPoAKTxHM65uy6FbsJaiKVRDkqZSM1MA",
  "key18": "ychk2C51Jh4yTtEfi5k8nW9TMgg5C35WeX4Up15QqKtmT8tBMUHFAsrExEaoULnvzbWD9NhK79rqHBa4B2LKBLs",
  "key19": "5AcV5cgLFqdQgUbN1cS85gsywP3ryX1qcZjZn5KNU6C7Qke4o5Yu5JMd66HSXTH5gaYVBiMwRwjGff8Kb76FmAxY",
  "key20": "2ZmdgQZxjBDNxGnHk8gm9NeUxeM6rjigmytLTds9GpbQ5W9K3YkHmDTtobomA4jGsK57USpzCMbZmpy1pS27CKhy",
  "key21": "4rbYUE9Jez655XXJSvHZKtPPUXT4o5VJBJecG2kDTzErEr5hMqZUwttWC1Dcxj2sDp2rpV8VofcNFJFF3eENnfoR",
  "key22": "5f5Z4P6xX1VqEqF42nJHe6Lv1um29zHcEx9Tinj9a8Wwqn2eRDvPJ4DaCa8CgHJNpQ6kFWyenyjCNh9ChEA1CNMY",
  "key23": "3nbxhWofunMonSK3vNbJJ5SoU7DdUTH49y86nRhYt84w1kUSFDLuKBQoBGWaqhgpP8oeYaREDyhoT8vgLMXsxkiT",
  "key24": "3BCp7hWbLqoW2KSA6FKLPS2naoSGASyDCV3JJCFvoVc6jbN1E3jkrjLSBagLWcV2151nAo3py4uvpH62HMK7B9vM",
  "key25": "2FH4BzYYVhjdDz2pvGpbe1p9SuEuWgeSq183TmUaJp5UWVNwV45uBRkd4GEXaFnFc5p1597n3j1K5xKVN3GKLLRY",
  "key26": "3MAfJjg9bjtbvEekKPhrgRVhuz2NHRKaZaJSZtQtjGWD7tqntM5QVcCE4TrfTDs5PtSsG7LcnaSTjisrzSMG5Yyj",
  "key27": "2rik9Kfxy7LMf25VQt1hmob8y8Nc9vSNRXGu8K54T6ki189zv85zM6w3F645ejNMnmm4rGyWRmszdwLCnkLPfeTg",
  "key28": "2TBu5yxMcPhmqfyHH6bPHbiu2yqt8qe25UTE5Y9m2MkV9s31gtpchUoBKmHPdb8iPCkUB5dMfb7Kum9C2yKuG2nb",
  "key29": "5GctKahstwzVXgzwQg9eVmRrUBdWWD6voAucAHdn4frtu67y5HJ7c8TEAqJua5fRLfE81YXogQNdStQqwmUC2pNH",
  "key30": "2Ryme2ajQ3cDy6UJH4MpSJ8hzKa52Nsjswevj8fuNNNX7SoMroJcqH7rjZsXgbAwYqwc8cGS25DASgeMGeyhEG7U",
  "key31": "2DgTW8snjvH8dMympFHPeuBp525X67amBfHmPgomsKGgp4skPsKkLWUxM1Z1QHxQPdwNUszSJ9zPAifsmMzZugzr",
  "key32": "4wWRXHTUhrgksd231hpVDwpAU6LVJrDhArQwo3R3w8RiFeRjtnDP7aZxAjRZRtJRxq4DXhiUGUkYFknrsT6VP34h",
  "key33": "2cJ5pUj4btcFQmvGmEY5W3qLQnDgqSfgKVVTwCC2sr5kdavkiYwEKEdRPDgR2Z4oFLyDZx1xEuYKkUfXNUNVcPzM",
  "key34": "2rt2kbDAJyPYPZfPM5PNZUjc5YTniUGXFttiT5PfzsFUo2UE1PjpfXmgj4HxDNsQpiG6Wnte7BEssVFUib5UypZt",
  "key35": "3xdphqo5DWtgr1iH4AwYC9wEQ1UjH9FzaJHmVqUu4RqtxdMQDtcfk45X8JWFdxMpGHr9xesGiaSXt8AMhPKfGVdF",
  "key36": "iiD4QZhhqe2kr9TBh9RaAvcb2Qmphvky65h32nVNpMQWW5oaCYupZyZUwVJ2DbaBofPpDVEmu4pimQu8TKuwBak",
  "key37": "52nn7HUBh5ntRbe7Gc95NZQPckhXspAvG217tYLMFBAGvxooC3DkoKhMEUi5wNbP6yEhtzgZoioCgDYDYZnLkcom",
  "key38": "3u6o5SQUMBENXr5PxMdWj4Uz1NvcGNP41gWdV7i9LWrdSZaaZqfScg6mJAg8ZvVzpHt9Jg9sJUL29nosYfcTUetz"
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
