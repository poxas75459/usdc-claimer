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
    "9fP5k7Xj9ycCpsNjy6bKKq1BXJpYnJFdExV9cqmYHYPf2SkyzxYWVskSN8TLXTndcbih6TfkupG5c9rmmjBCXxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQnsRXG8CExjE93rWP6Dqc62TCEyZzyBaSNHd499bS2WrKUuoumsNLUUa3WjPHGJAPMuMSVCdKrDE6bW2F9SG71",
  "key1": "39f7GvEn8SS9epycqGNsXV6HtViJWhDav44mBnCS6Abtp9ZUBe3soNeehBzWwRUScgvVCb8Db52amfMC3iSTUTW9",
  "key2": "4xQF6uTzKi6e2R4ozoiwV3mfsRRUHY1SENpRDMv8nV3oQdwxnFPmFHW6dsQFZzBHthvQQnbwqNRRJQzyvL6yVqyd",
  "key3": "3s1Y1TbjKKw9yiij1i1rpwneaHtfrFezvizXMjPSgqzrEQEkbDzG7chAnL9xuQiSKR5uwWfV4dszY1dQtxdEzdGB",
  "key4": "4Lo1wt4irtdfnHUmarfBxHDVrmRJpnEZvuHpWXD7gRv2itd4Cw1fVLcVj1CtXFQxVRtfK9B8V3NB82h8QhewJYXB",
  "key5": "4MKePcS7gd4o2WwUL6vVtSTo53sULMKmDL2JagVrSCLgzQkiiF9YuDxaLM24rUcHM7UuhCRUGeNDCdESH2FwHaD4",
  "key6": "5vZRGVpsCQXgZihgT9abmyVYkRsQuqgdPFu6AyEkUEXzme6ufh28qBrwRsY8TnR2PAcsKjyfwF2aXCi1Q5YGrinR",
  "key7": "e3gpHZ1jZFkxDCzJ5e9f4k3iTCB7d6wNUra5SN3TmtwFuwgyx9PHmN751fwBgzQdcBMTZVcHqSUmsCLZb1JESaJ",
  "key8": "5Der2zuc7nq4MTqqUK7ZgtQwjHXeQc6FW9QHQGoDUMykAj5Tjhcimsg8HthQ6jqpfx2RMvzWE1WNMeiDrGmvBnrB",
  "key9": "5gy2WdqodawbQRauqCBBFPJRY73oiHcBLyaGka63aiGHGYKGHCZMd5wKmzEYoZuvf7UUHPLu5E6N6tLbB51sgAgb",
  "key10": "3Lk9aV5azs6rZiHwWJpn271mHV5ovkuxasry7YxFVvotMJg6meYjDBpCyrdp9w1CdA5CZhg1cQ819qfgmuZ7MR2E",
  "key11": "9o5aJxGcUkfYzhQfJaqjawSwnWGcw4CH8ENnSFsxVEuAN24g87dYjcZY842oKCLvPr7igsXVCGHkppzR8oaDv4r",
  "key12": "3ENyGWfBhP5rhs6z57ETigEGbtoXX5dWGAvLtdSaZYDirXHj19QKbR832Nq8jzPW6wNiZD1ChSTkGzgdEMxmfohw",
  "key13": "414YaWY3qHW4S52wZwg31vw2TFP3QUfbgfjSwCRSokN693Qp5mfRZ3txbk9Qoqo6Zi9EwA9MYqM7Z26JrmdK6BWB",
  "key14": "327xQrrGiPuLVaj4qnwaPTHmd4WYwsFo23ACw6r4fvB7GcBp69xp36GnHRzx2f83ENpzQcAR9buQqgsegRrRtUiF",
  "key15": "2Zvss7SQbL4WAtp9LEpcWh9J9iUJeddUrkUBDeEU4cECDXxFWDu3c6vU27Ak3GRrEdLnAwp88WURm5CrZhyJRRh2",
  "key16": "2AkozQtA1z4zX11Aizhsvtsw1cJts4sv37Qrffj7RvUS7GrNo54FyzFwZdi2PsoFH8ePMoCXEutqiYAu1rRS8jrq",
  "key17": "YcqU85pbhXJgD6iNfcfjvYxa8WMjkiTBGKsfzRh8Ym1X3aY6csFcfZNbEoM3Xdj8PzS7mSsvY4EWxESqH6b4Xjf",
  "key18": "2EQJzJ98TVazp9vvdPRbfEZA2uPbgtTbfDAAwAECnP7vpu134Xi3X2DciJqivyUqtwvncaiSHsJxrDiT3AtRM4u",
  "key19": "2HHMSwYVhzwP43fMYWVH89sEtiAqyD5C63DVyKaLf6bzd7xP7EBPRjULU4kP33j9gbqBAHnFzShVDxEXotqLxsB1",
  "key20": "vLXVXVn7Cp9nUAigPffs5gJHfKUUvUnBWe4S8PrbC49po2qcVy4eLSkVceVjvzJkvJYaQus4tqph4wxgKfJzSr5",
  "key21": "4q1V43F6hHR1dMj5sCGQytdpwuVknEnPcLYxgSVopqU1peJPgi3KgwPHJUtk89HKzVAkZ6NfvHjdsmUqQycrZjMf",
  "key22": "5AYvumghqbkUEimn8WBseNSi8RAGZK6GQgA6rsRQSRHmvBpjvRQZLV8MM4ohoNE1K7y7ng5pFqVoWRhK9N2TTd6X",
  "key23": "5f54UeKEKAe55YruW3fYVFwLsMGqJWqDCoXubkTV8wkwLjmrUgNueSYf6Z4aFpdCoHz4RNrDd9AEDazYjDy1jme7",
  "key24": "365TH5DYGFK77dGCKY59N18GEmGBYNwtqpdSZifU2fPQBJJ2bP8nqXwgVJeXwddH9fz5ajZAxR7SyayA2R4gmfBL",
  "key25": "5AY2T8gJXMHNmWqZq38KyA1sZYiVaJwazKQgKfYHy3k99VJPUuH9LrwvuDu9MndJnrE654CG8tMM9HvjZ4W2gpS4",
  "key26": "5jVPJ3TGu2g7dp4391gAqSU1ymMaqtroZG5f8VFtUcRC773dpKZwGwMuhyFFY2gDvCcS3Lyk9nEkie6Z2PALDxRq",
  "key27": "4jA8xFqtMYXsRQi29facNXGjyHqAbsfEBAqGkh5aLy9oY398T1EmQrCYSQym4q3u5sdPBS1bWaRAGFg5eWHyZQ7F",
  "key28": "3BwoZnyh7eG64uM4LnC8NWpBrV9VFURRCFQPbMJen9WWVaYUVTnzik73stttYuNfWECpF7WQ3XfLrFgaHvHrRhi7",
  "key29": "uuN5BHfSCfPSL9783fj1gTqRwGC2twwnyXyeo57z5BW7NW1vURt4sxxvzKGZnwkjWPAxWzXGQCpH6jXFy19qgRZ",
  "key30": "526G3TpJZX22DrNRufobBBbR3HcPZcLup4dR5tawh4JUEuVDZkVc8jWuHzNPLFVyv4ejLY3irXsuf9XvPUG4AWke",
  "key31": "25wJerCppiuRzBtug7taAcisKxJQx2ftgyctkxyBPy5hSMPQrcvorcWZemhv1PPvLSZS3afvLJJ8cWTzMw2QZx7U",
  "key32": "5dHZV9zcdCUTtXw2FGEKHjqoWH2q1RrN5TJKpuACshrt5jhJ9BD47ecRdfMoMzXyX3ZZRyocyNyfdjGwRJnAf5QY",
  "key33": "3FgFJ7Swa4EW1eeZW5jpW4KCQuyabcNY4Vxdji76WZSgtDxAohsxd1bm6zT4WDYtQ7RPiUD5y599FVeF2w4gecSu",
  "key34": "4WSUSLkzUGL85H6dxVKutL1vCefV4wjtzJkVjdKQp6mTjVREJXm19nPrJgwmvDtDJRPs14W2DW4JYfcMP1WxDAuc",
  "key35": "5mkowv81Rkuv84igRgxeTBmDgKi5uWT1F3jvqT6N7JV6ADa8sy7UCd4iUaXvSqv4mkzocDFVVcGPopPG6LLcQhW5",
  "key36": "3etBbf27arqox2TKjCDcSHJe8DiNgCas55vwgxB6nJzBv3hTaH2cKi61zxPpxmijzrqiYxsxSiitmS8iCZTwYmWC",
  "key37": "XLXYe55GT6kjzgCCanjPrwPdLh2q2Ekj7XTkVA6u2AKKhZewtQfnY7MWW3iSu6SYpbsYWQhzcS5upsyxKKvQxi9",
  "key38": "4YQ4csdHqVDLeANdSpyq73em4eMdqK5bEbhkoWEpwFjFFf1fG7ks6G5tKzHVs1Wf81xpQt3HxqVX7mQpACF3urWf",
  "key39": "8hY5fgJxr1was7PngssUGsJZqj4YGZxGLKupTe2N7ztRiwpYcDAh4UqUS69hAohKWfByDc2DiyfM1JTLV1Bd5th",
  "key40": "5bhry8UkLdYyQ3zD4e9FgFnwyyVR652DFN4ZMTSmXB3wbtnz9TzJRTe26KShFmf96j7o7eF4AqL4YL1GHRAFSE52",
  "key41": "2dFxahJaJMes6iw7KnkkqDuW64ujTTPAnqutZ237q8FY5mxZBMgWZqa3yUpNGZBneAzTk341NVj7GgFNpqxgJvU1",
  "key42": "45NWrqRupc4UfhXdqwgchzVTPSyfosSdRSjja5Y138de7Q5TGhir6jfzjJdBCadjQ7M27pEE1ciGzpeS5htuQdhS"
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
