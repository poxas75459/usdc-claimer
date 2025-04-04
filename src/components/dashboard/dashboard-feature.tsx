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
    "28rKzW3bqkfP3vjQCtaYxPUSHaGSzb8nbej1w1t95XTfn7krra5jrVnSTAtAqw6mM9LjguwFgrEvNmPp2maCWhm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYJ38jeDegZQYpjTHGifRxz5aaAEsbaeTyqrawTCUkntyZwSD5hd4mn88jtcjY7cJyUfDe5a8htx7mfVsHHCmgK",
  "key1": "5hEyGLVRno6FoYCXq85S9ugEXPK6PXYrXC6AHLwTbugZu73FDuLev9Zd43xp1Dewa2yNTZn9hvQPWk1VTBnsBfDZ",
  "key2": "28jJAXe9uerZak5stSv5wDjqqHJ8Hgr7xtFfFJZDVdZDcyWsa8V5dUBNyaNjYtxMcugsijiEHM6NBkbQLimsddJ2",
  "key3": "3JTvgJJpq9XmKJfhfuryboJtKeBUVKfZu4vMeyoLzPREkyYf2LoT8UuhpMHCqviYquNiLmKzeQiJw4Smp382waFU",
  "key4": "4fUUdNMUggyKv18LDrR441EaiD3XtwpLcSugyvZMJQgS8bpfKCTuArrthPHTvhvF7eEDojVYPXxwtHQDhwBMuZeX",
  "key5": "D2yjrT33TryyfdpSCo8i8ieaN7tf3PhHPLQrdXZfBtN8GvxCGbxpNK5fVsa2PzGT8xLrn2zHYRey3fE614Mn3Mi",
  "key6": "4xwpM27BvAtwBT98jK54H5sRmcnUTQdE8CdWoLobMFdduzrcuRZfDJr5x6grfKqH5cvPi8Z1RWfVA4XVoie6XSM3",
  "key7": "5g2cwmQDVXeTWUX8bQXBkKnBKVcAjoomSJdBgZ6n2Z6R1gL1F6RySgdkPox8SwTUG3STi2TZmXn7BKJcfkMDo9Xw",
  "key8": "3VrjeaNvnaDLhVX9q7NkBmkdgWDdm6AXL65giKLrifjdug2YiPobSTjS7zskhaGheNSn1bAsTrGKBh28cBt2wGFs",
  "key9": "3pq5Nibgux55LhKetEhBSwQ2oPas4nojB8g5dDBes1smumwaZXzFqFiS2w55SSWBVCdj4QuMkhh1EVvY2oL8tLW1",
  "key10": "5dHU72dGsHxWsptMBo1xT6JENpp2cSvvhSAg9y8T2BRbbAmXcNvu3oCxHMFQSvMyfaT5WG3xbt8Hxg1bTjhCurky",
  "key11": "3kGvKx6NyeRhqxTCjGimc1XyeY5UceBx4iz4m6j2dAhUcxqB3cZvPpXZVbKPCgPAejPcKmqfCwfsarotBV66GcL9",
  "key12": "5qzcKnEqDbf6UixZ9RiPreQspCM5rbj49HavjVNm1gb2GbAGnMZJsGBNNgJQo4jMEsJYhePadYrtTgCRBqi9RCkm",
  "key13": "3MQs8xVAeXZxRnEuA68VBJxLXSV4vJTu6f91qeNzdpyXW6WCSZs1UWDGDwx5cSFg4VmmMGy53h4e1DzZ1a4b6MEa",
  "key14": "3zNdKFoxyRjTsK1kJ3cTzsx8Gonrz5ahY2JftPTAn5fPzTXuyzqDdDDwqpZvxeoQMCCgniyKoCmtTZ3akJZxpwkA",
  "key15": "5JKNBbFMa5kxwFXnJy6crRJoBkR9FMGGsn6sMczb4fDJtzhi2d4acpv4hdt7YCD2R5CGD4sFTL7bNVg9VYtyd9Eg",
  "key16": "3qvrgYoZjoQzC9ZuQ2Cuus2hqBTtwbQ6uPCF4yuRKceqj3o6617qhDkoHj6oKemLaGEf1kAN24LVajbdYa3MLWZM",
  "key17": "2KRmwpAXuD94YWGzVAaAWZwhtnZEceZSLQVUiX97N3SmBcZKa8DjzfTH6gwNuSzzoRLUNEBtbzzvwUVZKF5SF6ag",
  "key18": "pDtHS5DMX5otxPWqNNArYtx81FWj56czReKv1RM2HbbxLsL1XQkp65uRcCsCPm6cQNvqKvMmpmUog4zAY5aA8Hj",
  "key19": "5cVMT5u4sdHwqLYcFrxabwoEGEahmXyySCuswYNjQaxXYbeh6MM4QEywc11qyMSVLpmfPFaUUd1nLpb4kDAoTrkQ",
  "key20": "5psDJzU9dwX7hcmJwcVcNnbXB9Bk5rHuMm5sMStkfB6YXTidkYJTNMHK42UWbZhVRx9JLGSfjzM5Yp8Z5uU4EkBS",
  "key21": "5PoiE1PvaHXujRBNZ4R3TRvS1e5NpvtX3umA1oE2K1zn3mLjACF5QjaSv5kEpXzmcU72nVHTyxo4j5twKKQ5a9z5",
  "key22": "5xP4KG267LHwM6ST6fpZHKrusKVzmqkNPPDHGWuhpiMwNJi2YMWrPj2uaNkr7QCHWxztbsQcZDH771aixV5MeD27",
  "key23": "5MAFs5CY24rkbjqc8gH7RvE7knvH3wTpCaNUxB1HsmJ3VpFpLfuDzHwwRUuRvmfP5bPmMQFfdc4tvgLSTvFMycvr",
  "key24": "XZK9nsqUssrEGHgCEL4GjpNneGtpWjbA9fLTsnQtQhm6L7JqQ3vP94jXRM3suWAKi99XcAxjM5e9EKM9VGwnb4N",
  "key25": "muw7YweLi7Tio9gK28JDe2Zq6GjtogidLEWp3k7YVrZiV7zvm3PJPMU6V86sG1qUkAfHSX3JBwrwWitE8C6RxLo",
  "key26": "3vj2YxnebGiNyfduYZ4Y45UH4EDyD29JGWdeg9SjkyH9zLLgDD9aSg5wpM4qkAKvfjHH6YoCPm2YYJyEAL7eomiK",
  "key27": "2GoxBC2HjcNt34AApYTjspEh7L69NLvMk43XUHv3TiS2deaEVC9L3hoS5FYQ3km7dY5Ud6tVUmWBgUUV8LFoS8Fk",
  "key28": "3uD9ig5DUHDPTKTtnra6uJcZ3hZFEVRWcGjMoJf4nJC9FXvUSTAjKebvv979s5ms6zfzAp4joLscsPju1YUEH58G",
  "key29": "5YWfCsJxwtZceEDdYrRGGjjUx9KmAuto2A7AN8g5Y6KGRai27EF1aSGENxNbG1zMxt86N7vUCjPsYzhNBpN4G3HM",
  "key30": "4MoZpvW5p9c8gt2CTQcjQDVynBENXkLn1PVvsVamroZbsqV3hEg4d9sTmZkaJ2D4BBntiJ8V16AyqRaNVfdFLA7Z",
  "key31": "EVVJsneSpm7ewNnctp4GPemSCPDhriUUoJ7aA39r7fiJXY5ddoipvbbnhNAXMY3TqbsJ7Pehy9UVMemgimZGvp4",
  "key32": "4czWasSaozW8799qUqHRvpoYYama2FUDH6n5a7kjLDj5GqAe47WpurSUrqosttxn8tEtDPrsSDa5d8t16JnYC9Je",
  "key33": "5KoTL7mpgw3rm6FLBbXzXezBujpqRwCBUCL5MufLc3LKyHDhorncWBRhhMti7WYsRiSMUp5h6DWgY3DBiYjZJvbH",
  "key34": "5hBmTLcN6rLu13PkdzB3PiCvJQFnBJyv4U8nu7n25VDsqatBCRj5w1gf7haX9s18WrXURJ9Xbyq6PuVcENhM1GAg",
  "key35": "4jHKP7dwLr4SamT8JKzwDPvChVA8JG8hDiGne9UN5Avx5YLCQ2r3aCHk7ZiVJKQbVqARPZt6v5YhyonGQHYJeiyo",
  "key36": "26esJydYoB37FqRjrE9fBT8UHq4h8qYMoXBUdHoB2odv6nkL9X6LtA24obT9Ai5GspUUVKVLBVfRT8W3jEannMud",
  "key37": "5Htu6ftZbDmsjcMRxf9wchBs1VdKSHup6Bznhj4GQHA3FiDExkdDa6iqEsP1XngdRpDS9nCd5MzgvTJNHQ4dT4JV",
  "key38": "28vB48UEnUcBm7GydH7ugJeoRqgZVeFsNdVjW6HdjNnEqGwzGkfeqXvZRbkfHeaEC1RgT5utYcRXsbEBN8oyBeK6",
  "key39": "275kAYveDcW2rswrmggk88PYoZPYmkwRrmMqPdhqx4L9V1rrxw9n4Dj4kVMBjTeLCnJRJmSxj5ZkgKTMEtMGS52C",
  "key40": "5CjXEGe5iyAAAV8JXHAe6ooZe6T2hiJUcaDuXJ7BokbcDUJoLCPxjQJ97FDLvDEctfUFYNXewfVhp1ybJYB1yue9",
  "key41": "HvxqxE97tNfZ5Xre9SrwyZtHzSh4jCZd2MdQMdSANVbX6xYBhyVKqL94EDox63bdtgYJB1NTEwJKsnkuTnUmS9t",
  "key42": "2aREzG3r68Q9Uw7bvoFTCGhXiAtUhurmmAa43uyLdyeRK3Q8YEs4nwrLrDrvvku7yys9834x1Dhdpdr2ryqHqwsd",
  "key43": "AqiipXhumpWV5u8n5UDuQSQaBs9jBrcbJryDvtnDjy7CYCYYqmEWinedi1eSzrLBcEtEKS2aGBetiTcSPbpnJAR",
  "key44": "3jhBNaLdGfatu7143EouQXZaTXdtLtzdwJZPbw6eNu2KcyW4PxSSxTpN5z7RHyC9L3YZ4givvPjE3zKfeJd9smmR",
  "key45": "ibNeQHcQAKuzUDchaEfgv1M428pewE1ecwNZvD3A9TL2kUHm7BtBtmnbN7eTwcNTFAEDxffWG66DNQVbGciknA6",
  "key46": "4HzHdE9zKoosdkReB2oRp4T6DEM5siu1U6UsjNhjcDwp5HbyDDbUSjPDrus8wfenSe9FeFxjC7zMNxBdtavABpY6"
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
