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
    "R246DFjRb1a5hdWoagTHx1mdpUK4Jn4nYVGwGLPbx2dyxWowjQGzZ23EtAgnXVPhioYiFBQF5f52GrZmJ1dC4X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdc8amcY2y6TmcLZpV7GbGS8hz3aiJzdUTiv8ZzKfxsG7okQ3CqzFmDAsvqvsM4fEFVjW7X4DBfAoitQpZ1L7fH",
  "key1": "2C3u863ykKA4oBy21x7KxfRTjs5R6vpfeinvv5LctrufZ9hkzjgbSNsAhtNutjUT9db2tFS5qW5jF2gb8w6G3AXV",
  "key2": "3eo9AgiJoJJqiFMK2qLBznyc8WmWMgwkcRYddFnzhLqSR8neSFYye9qpLg5T4UsEAWFB81yBSDaZMNL7PbXwF6KM",
  "key3": "3NyWXpk4XGEX2aKnpWCUJx8QMYzVm2nbuH4T7WorBTgbedm3MMcJfyHaPhHuVDFnpFtCWWY6X4nXsDNCyM37mDcw",
  "key4": "NY6EpDzmrUjXWj31rY2qomU1stBHNRHuL61PWjUcf56hJjdZ9SxNcfZBjLE4xJBvpUgj4KMxdwsMqJRr6T9R9pu",
  "key5": "2huAseoNh8NoLP6S162z8XEzprxuYUVyaj7fi9qDHrQfqrd1eCgypemqmjk3n3JbDHyekxMVcqd1fZDe1sfzef58",
  "key6": "HUpf9cH9VhCfranP6aHDq2jRLMQruVBsmweTCHPaBtAAdpuwfuSNzBmYyZUnLy52KorbT9ngcNezhjdGnDwHX77",
  "key7": "7ZrpNJcnqmvtktvgNgphuaZ1hbcwmJtdKqpM2EDLVzMt2UEB3rPYSSYVz79gRFCR29kk1m6zvEj1aBPCztaHVgh",
  "key8": "62QtRvHLq4ncSwT1EHpWGANVeUH5Mv191n7EumLATbKqdHFkotivKTYUzaN8Jbxj61nMowdJZJN2tDDUE91Mo5DN",
  "key9": "fvMb1VCXzjVtes7nsX981Awk7SRExysFCNLNPesPNFsaugJeWiwmfWncTVy21swH3gLKJwzKp6vUmKLhYYFqpW1",
  "key10": "4hvYw8w4PUfqDy1HCrsWHyAxD1vuUeghSu38sSmTPTuKvKC5PrJt59GBBiShZ48MJHKMoCQPbjF7iZaypntbD7kJ",
  "key11": "4SjUNHmiaMRvMa7ChJerD3UEz1DVq9s7LG7rCMQoKc9wPcbdDdHqmA4HFCfNkh7y6wVCEWQPnFbtZM4xxr7tS8xe",
  "key12": "5VEBzMWdEEtLgDBvXJt4xS9vAWoaJniXSzvMRj4RycFQR7mb51La7b1oQ4BPEBA6CHygrm7ZDDkaFtuSC6Mrupfq",
  "key13": "4F6i8MvkM6HgBJaPaPNyZriqcfNHtMfEMNzqAoBPswB6raT7FpA4MAbs9mBwP7jVX1txkodpwJxDL9Y7EEskBYkC",
  "key14": "9YzYgqhv8XRAKjHY6e3ouai8EFrRURhJCgrq297DV9ony89zWeRHNH9yFrjLhcfViLEGdKk6djAqSA2x8i2BfGG",
  "key15": "2RGFGzgx54oH8Evnkb5y2NwCGC76f1ntZg4y7iJoDzACV7yL3Si2HjjnnnU4P6qwQw21hcyD6ATsb8Ltmd9Zu21s",
  "key16": "5arwx8b5bsJHqbmzYAuGpxnP8rqTeY2rBf6NKYemBgvWxFGzea9DpEuBNQEtxqFog6rnPZij1uWPbvduRc4et4xn",
  "key17": "2PFPBVtHG5ZoEvSCSVXQDDPmSH8vVK4NGH5fiEmSHPpJE5niHr62uRLkh4GXnza8tNZW4EQipr6L8qEWDMM89Bwh",
  "key18": "3iXnygWjHSZduhuV5q3quoYFozHG3rnriNtKHysU2hRBuYWfutrMMchuMtyZWGLCYzLDZpewJYJK3M2ByJiw3JvW",
  "key19": "2NhPdMasgvKVuPxiNxRobnarzQjw88jac7HVxunux9wNW4qmEcuS9RvnEfw1UXHGXjRmFgEMjcTCgXGy4qyU3m8K",
  "key20": "35oHhdbGMkrVnjq8x15AfLYNWbnEWCS5dz1wCqLGPGwY2dCGvxgPjN8RkAHqNV5vKXzYAMxmnQHU9NU1KsYt67wz",
  "key21": "39AiJ7cxGotSKScWme3YjchTwjdiHZWXTHrpAvufQKxgcCRvcxkXC5u8cdgWFmS4nwky7uWZuQL4XYWZYp3enLim",
  "key22": "3RaGLTijwTL7TqEkAfZg1qPi54Pom5uKRNjvZ1EqyqXdmh6rXCU8D2M7iorZV4FS8YMyGMoj4DsZrfXna82T6UnC",
  "key23": "5nY4Fr2NDb3cNtyDSj7xEJUXiugiQk8TU4G8aArHDBvEu36TRF5ntU8XjxxdxUZC8o52kwyT3ywEJUvJuHEQZJp9",
  "key24": "2Vx2DYsB6WDKPMsNYimpeLDwsyomMBoqsLjuyyJMwujXiKHM7YSsTnED2yYCJHt1L5hs6UHVThYMhPLakUbdyVJp",
  "key25": "29PQEiHeQAyJmnxXSEbd3cn7A4No8cmEbUmFyLQFq1vyGncvPhYiWhsuQCbbk91s8FwfY4Rud7HKKFNSgo2k1cWm",
  "key26": "3FQPPjB5UmZcX3ZK9mrTxDU39FUXqzsSR4KZNXVwvy5wjjM1ZGVtSUqERSLPVH3utquQmMGkQ2JgM5xY5hf3gSNy",
  "key27": "3gi2prAUpN1A1EbA8tty12FNHM7Eva9q3bVFsHiSF3rwqAK7VuhgztMkj6xKSQjfJoNyGKxYRtXiANNjZRQd5EBS",
  "key28": "4SUrQa6REmM91djQ7tC25GukReqD6nHCTzTDSznaUuXSc9yHUca7B8r6X4DpGPXgLtocjZoH7DK5KdAEnkthPcEw",
  "key29": "49m4AXCgqxV9Bc9Yt2vpfsuy31AgRmeJ7ALg5qyyL1tsee9QHiFaX6vXGjb3eszASZuHzpeZShMm2ZDJAsE36LSH",
  "key30": "w4X2hQ7bJwvABjQx8AdtzhJU6rVwXPnZ1rMUMqzRnmkWc7GMZFEXh5YreoN7yKvmq5SFMkzSYfEL4onDcT6uMia",
  "key31": "2vcCdEvFiZMUzcEeXipCDb4AbH39H4hi12bu5qfFfq9u33XmEX1M6eDVuq6oBv4UU4Q24CeJVwGPhwK8PM4KoSXZ",
  "key32": "37Ri3e6umqFhoA1DhvPHo7Kac594nfgXQi7yDFAAu9sytrLWDQ78RHcjwX4y7UiMQPK9DJtiq9ySkL24PVQ47uEv",
  "key33": "325dDW9zDKWiKDXnEe6hBbXJPLho4E3XztV8CbsiCSkHxtPe4NAtqzWBsv9pRJUyLycEJQhX9Mtwdp4pCz5UgkCF",
  "key34": "5FxgimnqeivEZNAuYsmHxZAGmEdAHF67mfwaYNky48NbEoLiyNjLzBbEzaCmcVknVmdd5EyPGk2vBFJBVTR5r1GR",
  "key35": "3EWTCVe8x5VYZjKkGzXoC5JETQvC47QtLHEGN9QXwyHA2iy9Bor9T5h88PRy79wmYtQqAvGBviVxyf66gGGRPwgS",
  "key36": "2G2p4zRjFCCYrYpLYeDz4dE5BYofxUrF3CV4sQqZ2AeayTbLZDx37k57QNao9Qh5aMZ2BYFB1oFQPsBsNVaNUdDz",
  "key37": "5YcZkeAerFcqZAGve4JrzqJYyFmJCUjnEQ2NYttJq7fLp6U4FNpX1og4gWwwjbpBy8ask42qKaAPmd38e9iTw5q3",
  "key38": "5MQdJxs33L8XJMAkCdsm32gXadmkE8qkieGJeQZCT1xb1QTxenHAsRqiQaFaQhJ92z21CUTgtByXuzDXSM9K6Cgv",
  "key39": "2DUofYkNNHAvNg9jLcs8QtWzF67ikA4AvTGr2L8dFUQinfryXgpF4NTip4MWNwK1SJpYLisAS6dSjV9AEnkKr6dn",
  "key40": "5VNZJxpfWPGeEA6P1QnEKdVsj9z4iDU4euQH8dreg3k326qyJ3Cs6GdvgDtkfQXKm75S5qbRS8QSKoxMZ3a7Sq3W",
  "key41": "2KtiBJ1HyDtezV3UBq8rbCEEHSZSSVPY6isVuDvMn2aSEiBxeRdB9K2Yu8RAC68rp8AZzfphudXtTfo6fHJjHATw",
  "key42": "5V6TWxE15syuvHbBBRQ7wdaCZFcoJmPPu8o5hNZVqa838R3VCBRNLEvxVtDFiEuqsMadN8qik9feLFLm32XdVGM9",
  "key43": "4E8K7QkLroVB5T7eNooWBphni21CiKTDo575D8PczRj8t1fHQoRsvMB2dprTe4HmPA82G627KLPUiV3e3AKysaQh",
  "key44": "5W8hFve3oG2wQAYN9mHnq4fQ7yG7q9ZWRiiJmN5K7FRRWVwE4jFgPmqYA77mSWooi6ZKDLNBfxMPLA1fvDxUru1W",
  "key45": "4rCj1dq5GL9H5NkpurpWdjiYY53KZ34xZBDdG4Kns4BY2qmB1RHkGmU6g4mdjX56jNBTxAhQxUyt4r4qRe1KCV1E",
  "key46": "5H1uMHZaFPgbmvAU1pjDBNEPAaWfeDTMPEhMyjkry714jcuWeti9HrGWWqtq8bcc6QaGRcWTK7ggPm87ejmzrCx3"
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
