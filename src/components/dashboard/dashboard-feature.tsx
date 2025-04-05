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
    "5rqW6me4QAxoc8TGC1WRiXBf8NEC7tKrsnDDU8GPrRqPs4gKm6cdEL2r64qqPRj5dun8NDgYpF3HPhQ4kJXi5nf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SMhdHJnYKK7vpATW6CwCVo7kChQ3zb5QETcLxyzPJ38kXp8nFtSQ8GbnJ7azqGfdTsMnuVr77vwesjbMjfAmzJr",
  "key1": "43X2sDKsRK77rN662vnbi2XUktVLXQWM3hfHjPYuLd3HwMMJ6U1joGGaZyA7ZhhMqymUeBkuCmG3CNwGL3rcJF9E",
  "key2": "41LSak2HxmedLYE7MfeGgaJkZ7aEUrNHuBaG9h7u9V8vqffGhZns1tS3inC93roihv3FeiSQTpiSd3nVMuNmMCBo",
  "key3": "2zQdGV7TQXZ6BUXERW9jpy813EhsYfWy6rv5eMVB2iZ9xQZRZHuayQrjfGk5qgy4nKL3DYdr4sZi65McFZQ7zXDZ",
  "key4": "3NA14wrUgJ6Nzwxkc6ofgMabSXwWvQ91sAC1DAVNfEGGW6m49qs6yefFgefzyNBcymrHx1Rw73mDg7PCXFFHB7fj",
  "key5": "6LVkaQTDrtLMpt6rbH481KKk1EY99URAvgShqtBLvkW5eCmNPT9JBhMHXXFGU1AjiVMGnoSMiaU9PspxQ5SEApA",
  "key6": "5x6spAucUFukJrNof6bHf2p9zWd4hFbrpqVJy2iFqhsnFym1ydijCr8fq88ThYyaX8TtEnv2vRSVVipi533TBzLD",
  "key7": "2iBVaFxy9Jdj7TyYLzZwB5Kb1ZMPWxVoHpsvV5Cv2aqsFEnTHtZt3uGAfeEBtfViY2Q1LmVU8nyiGM8HofAwNBqU",
  "key8": "58MqvxTSaFwX5rdrcArCRvW3ZcUuuNfjDBiPupXh8tSs3DQd9y75T1dvbJZkrsAjW11npx2fGeFDDhThsyDuDQRt",
  "key9": "4i29atfpCs33RHALCQHjfn49xqnUzmKx7dqL46zPxW67omDr1uhE7Wv1gtNhvVeVR8Ym2skkLvFP8b1f89PaPKX",
  "key10": "TXd6M1nWD4uEcs2nUEMGG41UFRJwgNz3t7kyrQ2tAWoSQugC4LfjzJxebtP5M9fTKyhhC1HpNT65BWCDHt39PEt",
  "key11": "4JUFPfqtiLqGvBfQyxc9KkCeg3cmZouTpYmqqJ9i8vEqR94cJk9DFrJiwEfPxvqYVkdrXEedUhuB4m8DaFNLP3Sn",
  "key12": "4emhFJjYY9y8GMdVX2THUaM7LdWuFwMig2ie4L7syARSSE5hQwwFsUEh1FgPGUpfJscKagSCrLPswfuXRCud5feV",
  "key13": "3Lm3GTJPbUpCk1CGBC1LPqnS9kEdZ427PuTp4nip1aBtFuVj8m5FQ9iZHLg4hBvRrdqp69dt1xkcNkJPRnjTH1gW",
  "key14": "36Qbew1SA6Az8UVNRM66LemKjVqQbpTEQaF99tkdNVxsDkMYpPePGFaLJsKoEYtQn1A9C5NJoS3TrFxq4YfQpuLo",
  "key15": "RAtyp2sMcVbqGFTBtgk4qA5USUnHxMrkDWMdFJF5jji5Nf4VmfeBax7MYZfrSZCE1NBEC4k7EDymZVZUkoEuJfb",
  "key16": "HYWRUcG5jQ9nma72sFsF4mfvFQSYTbJGxhc14QvrkvNYjXYLHRpcuxjhdRdZGPYrHNrsMhu4gJGRrzKGjPDZuFL",
  "key17": "3sHrQpWye9hatiWSB4vfiY5R7JSxjM3j4pdKB23k2KJco59wYr9446WWLy8YrDhpMnFKJbTnb1HpQA2MTk8ekoFU",
  "key18": "5Y13Cq1oCu5E2MxyDDABuRsRXMuJxSNiE47jUZSMbcrPRD5GfiJizjTN6rkmdg5o9XSFoo5FxWGB3KzaGzjMYNTn",
  "key19": "25JFdR4tP3rkeDZ5Qj1P2NGeDXSaoJUdKMZpaKZkaM57xKNS8fDki2tNpVvfk4LbQE6i7AuaCZxmcSd1CZmoXFxs",
  "key20": "3iNntd25sGGA8CFdUFtREdN4zJckj4S2BLBBbsAJ1Dx7YBtxqkjpaUgXj2V3ukGz6aUf5mPj8bfna4peCAa9HGCB",
  "key21": "5pgVNq2hT67j8SXLJAMcW8XuaptSVtMSAvBTKdQe8hyZorZKCa75gHNQohjv6STasfodFtcV895uwVpkCeSdzUTz",
  "key22": "3geRo5uuH3kiZDuEmyw9V3SQyYmNpFEWX7iRjcJor4dr511yNKV2BubFEJYp8K4JuxeE1rWcAy6Lv1oAPCbGKoPT",
  "key23": "5rpw7x98arUjKBUrL4hrjWgT2vQtL2zo8JSNXiAnRMC4KygKG41e9ob6f4uoJxCPrEg9E4Pn2JFnor8b2XZH8iAT",
  "key24": "VyoRk1DpF4F5TvmWmekFeqxos27gf5MCmrtiocuaiPuieGypvGc5RPWLPTLUzVds96EZkZtPrmNURRNj3t8WVQa",
  "key25": "46H1zEff2GrcS8mzXECGnc3t8m6LdPRtV3hzssuvKwbNNJa6rQkJfHzWG1vqCQZjsQgo16GEeX8E8nWXdZqn8A4n",
  "key26": "H8PBLxDpy4hZLDVTRmzuphSCJkbhJxnyreo8DWCuCPR7pBVzBRiqVpeDYqLxd7yELj5UWXPrPCrBFvbgJRoBwuY",
  "key27": "mKqk45F4B9Pc5c4hVAtYD1SZu4FTMrfzThm8ZZWxCrhSuX9FSpz2mN5XFKUXXr7WEqX8bKgDvBwy1ByizNHw2ij",
  "key28": "5FzZ4RebyPyUkFg7sjbbNVyj9Td7aknrKejRFjeQeRNHA9uMJYAbQ92Ru4HcBFVk6SSwG6ntta1Ag86aVTcd6fSA",
  "key29": "3oyUNnZ9GVEV8Qp9rTyaRBpW16BDnsjAXAcucqPMuteYNB7nGiSypViLB8JqcQSc5EtLcBhsoGruCwZkhiXDaLEq",
  "key30": "24fweoKThgw3JEDvRTMe1hYTdrELutQdZJsCbvr6nQ78MeZjq9Pyo52HB1Gndkzn9sSW3ZLLK55E1tkLVe8rXo82",
  "key31": "jby8bRHP2HQhvBF9d3FHof6YzM7V7VwzAgprnsLhrXuSuG5oP1qqaVbMoovjHnXbSAjwd5mpVTX7jb8WFgcaqzV",
  "key32": "3CHkZuCwpRv3NrzQBuvfgqbs7Qbqz4T6oeFDmQTH97n9QQR4jrWLJmsfNV6D7GpnWUrNsL9vcQ5L88qjo5MhLA8L",
  "key33": "59PmVV7zRMMjWhEmWKBMErMRe5bxcBSVEXuzgDu3vVBrScn4bnyh4wH9L7D2PZfkBb4QZkH6Lwt4rTqkrLDqHuDw",
  "key34": "5MgjxsRFzw9bj6jNT9Z2p5ZSdjy8b517KjNgHjd66jHazh84XyrwWWMYhu9ZkvXK11Zifwbr25te9mzj6RMdWhJ3",
  "key35": "5zQGMZvoHgshkRFqtHPmpjHF6eNU2kXJoRLkNvAEorkAfeFsUJkbeK6XUS7CvjGhQ2ta8Mq9vi9Nfzbav8PWzUvb",
  "key36": "3ULDBwfnZGcyaE2MgYh6u718z137TbQvCYoGWc1Q8VRQE99CYM6vnPrBSAt3GUf1uZqdCNbzXaoduUMxUy2puGmP",
  "key37": "4iM1wwmSjhAEAx188fNn6yt9m3NqSMj8swi99ZHcaLFF94DowyXxRw5igv7W7pP1b8Jde7YT9gpNKpEUKn5NzFRx",
  "key38": "5KTiYk6gvcoZBV2E1sm6SP7twL5X35DJjLjbovCZdP5xpWyZ2J8SixNdDFpJMYVPjCvCfPoLBiu5UGG73gFRTN7b",
  "key39": "4hdkaQdmtqnsqhb2a7ZePfRaF723wiA4Q1fh1mEnwNNXsziVXGSEQVmDnq6KsZAFwUkxT3fpCAA6aaudNPsXKWye"
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
