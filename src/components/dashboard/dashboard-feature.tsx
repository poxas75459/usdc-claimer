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
    "2eFx4XFzaL39dExpjpJV2A9n6gTQgVWR4v41YPKtmiL7UM6wWR3vkdpstHFs1vQCyXT1c5BRyZXa7FFSpnhhRm6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fk2Apg3BX9aiEScaZEjgg8XafLrqVAFPYongegjXWEXAL9ooKSELLKdR2sBtg281GhFA8ezVwYtgQvDoVz1f1hp",
  "key1": "5kAF5cuPERRr6JqiUMHTT5MDvisrivLWATq3WgWm7q2g16YSrbcrwoUjPQiMEFragYaqLLy89DyMnozjdMuUQeZq",
  "key2": "47tSe9hdc2ZsCmDqGCwor8FfKRAJh88hqxvfQvE8n18W6AT7RLoDKSFevxB3UZSGZodpvcGu3Q4kaoMnArCEaZV2",
  "key3": "4tJucQ1uDB5FkipYi2BvruA2H8adAxZXef88TgsJudx3xi58WF3YS87rN1bzLeHianb83nDah64uwXZXyGtsbPWa",
  "key4": "6765ResVvx6sFFUQAyDdJ7z1zPLWbpnFAvXQhS6GmGEBJBPqe57E6qo8GoRTDYZ1B6McETB12VQLAkdUj4nx4y14",
  "key5": "4EEhjBE5idd5JGbuVY3QdNKTnSd4WF3tcsJgcKLh9nwG6DNtoqixDLYNEHE9Hrj8EK8hxGnxwPTU4Zf5dJcfyLv9",
  "key6": "5shgtH3hoJz8xjQX3CdRHedLKT1UGTrxNfFX4SG7gDhGkFpWTU2bzsYvjVUmFfeDzwEJabMFtLtjoB3tGaHUxQw9",
  "key7": "2wsHMVoKJBLeoBfknxApvoUw98p1Xqv4k1uCXoyn9fTHJBhvGEL3nXvj9mYEWXqmm2CnoL5z5JGdM6XqU9d7yoig",
  "key8": "3qfa2qdGeysWFwLUfG8KCyanzZWWVt9jRSmWwV5svnYJnTXGDtPoWrMK5ZjxSRdjxEZ2sRh34P2d8KXqsnago9Sd",
  "key9": "XhmsqLumQxoumRxsLYPGq8D6LFAikdLiBVEd4msuL76UuAee6yjgEKbjc9NrdmwuRXQuAmZAq1nqJANPSkr9Zor",
  "key10": "3KwV34jUFNayUe4WtCn7Pj8CvS5UMs1SYc1SLi9kwRDQWf5GwNswW97nU1mnByKEzKbYp352DWLAx2bQAj7RzDRT",
  "key11": "3iDGi5kAtwC871wE9R4Up8S9t7x7qsCUdExL2rDmay7r7x7EcLcwyhxiarKBoK91WevwtFLmWr4XcdQzaZNSY4my",
  "key12": "27v1Yco3st2zxK6qHLU48RbPzSLQTFGQe9FeNsNDLSbkpuVWFjbscHBpWE2h3SxPozuAZPnjcp9gTme131eLt8Hq",
  "key13": "567FNfQ9ySADdUTVRNyMAfJEU9ZkC3hR5reWA9V2JaubdvExvKymccjyS3yh4aoCHkh6zNHHfs5hFybvT8JLfbRM",
  "key14": "ds4cC2RQMrMEG9283a7Xss76XstRafGBEooXtNdNgykEc4A9LboFSmwyJrbVTdvMj5XrLULFt7Yq49abJcC8q42",
  "key15": "5484AZHG9GxMCAWXkWeCuEsU991gDjEheMtVarAT22WodFB6iR6dfbTgnWUTf8CoDLVim8gXWPhWmnrQBYc7e7AN",
  "key16": "5CBaFASqkGrczyxif3MuSUC6WHkk8ia83z8s377i4bfbVGNgqSDHK6x649pofjKG6XNQKzZi9Sue8eD57yChFZVN",
  "key17": "4b57qYPqioQGjoMnjTx31TufosU832JehWWY8ZEUqiiq9vWAmXgquzK5HuZnkghERCZRSjnKmqUoVFX9Unofj1Ne",
  "key18": "4t2yGq9yBt5tA2iy4LrB28Tmr2wg9CuLTM7PdV5bXKm47FjDQ2MsmDrkvSqqkkAejcdwRGt1A7qhwbjZWgRaS8sP",
  "key19": "5C2J8wEEnHuhCHEQwnh5P6rXABf73srkDKMtCtqZTbQK6TovPtrjAnvZVhTfmQFGiYVX7mRhNd7a7GkhbPtY3jZZ",
  "key20": "291nM9QRXHN1ceYFbpKrC3dG9db3MC3Jv2HP5SdyTJsr8kT2oPTCEoVQ7KQwaKk5pDEgjAvCorrtSzM5yWaBugE8",
  "key21": "5o7j5xjzRU368CNmMkBSssxW9wn4aD821Fs8WfgTL5wqCkauT3hp7GmDPtuAfFCwHF37SBFFmwkcxCVHhC8ScwaP",
  "key22": "neTHihHDuv3fQNBo4f23LTqPzp1DoXCE4eG4wfspPcmn5Mx3HsrrZJpb2Qro9DAbzLGaKxmNS678D3ZknRXzxNp",
  "key23": "4JoZNqkuz23UeV3L5ENpsy3xLzWPWsZiBrKA4EzkBYz88nk5ictM98PPTg2rQ8CFAb59BnEKkobwV9NviKkNRAEy",
  "key24": "5YkAYYW4fVSvtHyqDP6gntj73fa72s5LSC9cW11byHktWc8NMu2TAHi3tLf7PEEQVY9eCHswVL91fHRQSX48oBFU",
  "key25": "61wsxzyWqyyYUrYWqDUTnQYkyuG4qWwhuvfM3GQ2Lg48n4TxpWojcqhNmLVDUGaxpCBr12m6jfSzbR3BT9r8Svqx",
  "key26": "258k9KmzzDihmaZtux8Mt3qQJ4chr3ep59h8d1QLF9qwNuNZqZXtrwSY2DfoAtyF7j52FvznafMv3bwjEUA7oGe7",
  "key27": "4mY7LhQt85q7fjQeo1WgUxLHRX3BSwCHfYFHc4WK5uNrkCsaDuAudtxzJ4P5CtTj4YrcSc3JpGGXit9vKTWxmA1J",
  "key28": "67hdqhYMbj5m2Ud16AshSG9SwbedCs5UXvkasycdZ9wM6R6253e2d8utTarxjRL2wE2erBmTw7UjZRgVcvgevXTQ",
  "key29": "3jikko1GfYApWrc4PZfnnTPkSk1eDwTvTZGxPmbgN9bjKCAFtWsZaQ8MRfWXGcSvZBgZX8xjF5LYYyqFs2iGiBiy",
  "key30": "4qzthbK9Ksjejat3tgKxc5SfjvwrAN8SQMKmiDDcdxXheXrdGUEFUVzQo5QiuzvL9gdQ88QDq7ZvjdknJSx9rTLz",
  "key31": "5rJxPtcqkqF7HSoXFekZip2Hzu9Q5s6ZcKtukwn5gGm1beo3kWGtdufCPReuUCnP6UkgwumMQG58PDBmgpAMmhFL",
  "key32": "4VrCAgN62QyubibxCVFY5fdTDUKE3kBpGTTSjwMu7SWn1zSGH2QMyuYSLogb6bKe5MX7XyBYckDyrXwrW8WT85Vw",
  "key33": "4SRyhgFVJKejQXkYce3vfX7fE16jBjonjmhY2ASX9kk8iwogGn6uoYZ5Prz7xk5sSUmheoZkkCJ8vhRo5f5yTnsN",
  "key34": "3u3fSCxf2Z3UP8zirWa3aRk7E57fNaVnDAgAJHvB64aLvbxfhShCjDX6drBAitvRcWbvp7NaoroAGjsdJYHVySDA",
  "key35": "zWwWANp4hJW8w4ZXCALJqX252xBftocvhcsM6CJAwYPgH3sEUgo78HE1F88MwhxcgmycPjJoSWddV47oY3GpjmC",
  "key36": "5XUtAhmZjDwD4GWqRtdjwtCApZX177aCRcYyJm3m83m4gLhcaURjzduGYaAugPDEVLAaNsTYAuxk7QsKCz3ENC24"
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
