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
    "2yQLjwgiJvaEzKZguoHYHoSSTPCetySY5kkajJuwytjpxe1gQuyHq98sVj5JbKHeKx7DNmxWeeaZGmSM3JgGrpxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DA2nrsxumdxPp27CJxXWQfWQY3oytJZ25faPfjkiWJyns2y5ZWWpokxJGMw6Nw3gHzHBBuL7CBStprvaS46vjxr",
  "key1": "43tZGNHpJQ1oYrGBCo5wvcb8g7s5TBNpFH4xGrQRXTQU2hXkGureeVGk4DCqYKaXrVCPf9uKehcCPm2LsyNDTU38",
  "key2": "5AYL4Dz9Axw1wZK8gzsjFN61UNwCiB8vKy9sfw3vFjstVDCeuQ8w7FCrxc5hfRkzqEMvmBGE2L6hnC8GB95mpx1q",
  "key3": "41QTDxzfKLU8mFNCCpwuZE7riCrvJ4b2uwd4vHeVNyFaSSp6n2QcaSteV1LMpEwAujBVy4Y82ybXjAcC3AnkF7us",
  "key4": "3C4XUPJA6XXQyEmUpJL72rfFUW3bCYJcz4QQ6n7ddVRfsDRtPgnC4zhS9EDv8MMbpqJca4ps8aMDwohiTzb2pjdH",
  "key5": "5q8r3RxCRWCUKzBWnVHrnFoKYgBegsLpd8bHFDhrnC2g9JmdFUmALYtdvAPF1YqaxRF96xdA8Whbr7PKrGMCoRAM",
  "key6": "3oe1P4rXT2KXy579QokZhZ8mAAWLz8GvAw2xmsDJsWBUcB1VdVhsbBXpfGwvhbZtPfeyACEMPZvDTL31REYd22B1",
  "key7": "8A1BcjLK1w9hD1XugT9agFDPE15pcz62UoQRFaBU4zssx2ENzEdr8FYfkEtno3LC4onV5ZKDmLkEeMmGwtaEySE",
  "key8": "4SFHNbuujHrbrV9gn8S2R3QzLTLqp3Dre2HFJ5U8CVtnFT91GpjQEYFapDUdcNRDPzpeWhKgZnjsoQ3ENCAkdwHu",
  "key9": "4repZX3S3VGWgBwuxZ8WsQXNhGj8jcU9Qk4hqXvXhhkoauMMibj1ePv3ckGEvtBpM8TV4HHcAaY3TbpjFJ5PygnR",
  "key10": "5HxzToG1oWCTNmvLqafa1gPDy4NhzC7cswHCDRcvEXJ7wLT6pGY2Esiy1oKdYPom7xxhdsYfbqbVibk8MDVo4dQY",
  "key11": "35M8yv5crMsvup7DGCViRBj3xpzJZqJTgBhxGM9Sgk8KHB6wRFFsAr75PoNAP16CtveeJnFdHeEduA5hRDLVReDj",
  "key12": "2SQnCoVqQWDEeQ1LLZjGron56LtTZZf2d2v2CmpeFtzZq8hU47p59h1Z4aDUysZ7TEnqPdHmnFuLhE8ttMjwmpJo",
  "key13": "ZezzXpNj72sEY78f1YuozDTggVN8rFj7euYm9UGDCqHbGtWK4gd5dumeZgAd5yzzoQQnwiwVq1V3FfpqPZ55PPd",
  "key14": "5CJsB2a3vqbrn9ganBhj1HKMM5TZNC7hvT8bUdzHu6sG2Fancr4LWS6cWFgFK73yaupCMfuPkWCNM74NyJ2Prwfa",
  "key15": "oXQ3fT3uHM3Cy5vtD36kzADap4hrmLRnXf6aJPfY8XAppgMVSACmbXTzGLr2fAg7LHVq6n6qRkDPg6JwvsJXu6v",
  "key16": "4LDgqAsCjiT6fpqPsWp6JKxDHgw2Q4CrqMzRYfGw8xTnwu3MAkG8oXsmihaqoW4HDJUzVAgYPwm3mPYxULoNP5we",
  "key17": "2nSDXkbLmHmqQoyqni9NaEpAWMAiR2PwkJV75rbbKYHtEhr2iLUxEzCxrdHvQyBL2FcwLv9EvxGjCEfmsipjKUCE",
  "key18": "241YmysfRJTUHhZfiojA7w6rsaVZcUPhyek3GaSE6qJ4J7GXVMUV3535oQAHdp3vTcQrKfhRfLu3cM9XXXGLRuZ9",
  "key19": "3LJ4HT2KBPuAJZyYvLBb4LoUyPcV7TZ633LQDEsfjDv7bNMFgFxte3KbmpzexiLVydgobcM9nZQbE9kGK1Y8HUcQ",
  "key20": "5SctAAZxcm8194ggxxSbsjmP1aU4E4g6fJAawtutMhk81un8Fggrh38As5vGcbuoc8JoyGoPWw9QtT9Ukot3LGnS",
  "key21": "2JNGhbZjkFVQBvYsCY4qwZKkhiYspEphHtodHvUeHSQM6xSZQZGZmpGMkDKNxUA3EYxQRs5NhvMZVha9QiCwakFU",
  "key22": "3akDYrm7myY21FUtVNUNs5SfVkqJaUJ8MMBUHLyQ42Xb3chDjEsNCdVA8f3fZywRf6TSExZWee7tAYY9MNR7mSkE",
  "key23": "xaBVLC8MJXSvwUCBcDJDkKDxZN3pK1VPubNaSpnC5vcfgqwj2qRAcjXZpxhKKJSC7A4jEFXmwLs85QDn3PGThjQ",
  "key24": "3HvGttEFBycwiTLx3RwSuh6Bw4CmgSpaJ9pF1y5Fwx6iPpLanqQZaauiyqwvsQ9ieGtWaRNQLagjZCxeDCEQP3zg",
  "key25": "4YgtNjV9xdj6JkukmhEopzoSe1zgjbdPipUNS4emwLRXtZvpfqAufeAVxBDqf19SHdbCamsUrYxYb5pr8F9RbA3g",
  "key26": "4PcDvwVmj9tML4AELYarGaUT41k6S2CTTWzUn5vrg51UoauzGfLbAUJFEALJMchHgjYpt2qaJsCk6qAyy8z9sEvT",
  "key27": "uHZkadNpb7FzM93HVGPAKYP5CaniRAn8Lf37GYSGwAypZnQmbTnsgVEczR6s5wcSUZyWvjjbqLSfz483GY53XVm",
  "key28": "4yHRT1xoVBaQyfckrzzqYMore1b9opJBQq6VuafSZE58mwFMWe8M9aFPc9zfGm7QZnyVZn9TmqsywPgeADfLnN5s",
  "key29": "5i9QhzpwRsgPgV1HTNPh78FdHKPoefhLVdrPh1BatbHZKyyGNkT21BnkWH5goJM32ZYMJWUSyhEhk8LiqAnBkoje",
  "key30": "35ZSzikaid6gH5bCmATo9i1X38Ec4FaQSo1bubLRDTUj5ALd91Dgg2SfaZkDyKbAgnrgm16tMsppQjgTF7aoG6bS",
  "key31": "4avRMkaXBQxLimcbWyT6jtngWKz3kkMm3gJCmRmcHL7qgwuH2vscFoBSeVx8FfNtZdQAucsYu3gYEduFiGEAHqTH",
  "key32": "5K7b7uChPFoKBwZgiJkduHzMdvu7VknXoFnnQ6ZkyDL5T13LQcYM26sUwi65NrGuEHTZExyNwo7dMUENz8JCV2k2",
  "key33": "oNsto7XzxQybAGAexFMdEAATpK5kp6x27ntrT2wsTWVqHqoHkREnT1kSY1VWjGwMrcoSYKNvMYC8iiQ5kysY3ds",
  "key34": "oJyZ4YGgxBposvZHZomsVRKfTBq4VwTMWiuPj6s2F5pu5fynAszmbXbK2qbsEMT4L3N8hYPjmWvHRmJpucQEPWg",
  "key35": "KPhayPPmzj5KDjdFa2mUj5Qrc5562wxuycvaT346Fa3hHoRi2Ny3c9qPCP3vEnVTbAVtuUJRuFhoveMUozPGZyg",
  "key36": "5LGBqnkK7XRjBHkq8BRh3JF4YiEmYwGzNuDyLtEusZW1ZdD76bSxMUEAfVNfCAmowChGPVNpH7YiLj5uvzefPi3W",
  "key37": "64gV3SwmUpiDduzT3yvHJHJp9gMDjVVdCrmi2HiykM4RaJnGs2YoamEMHLXVkt276mN8cc6FsPXgEWivGpjbieS8",
  "key38": "3ZtVANUw83qxviRAVohY2oHXJGDkZbHbLJtJo7zxW147SpfjVqSK4WTCh2uPvax5BMQ1chYtstNiyyvmcpAp7mfn",
  "key39": "VP8JPvn7Gwu5NGPcuU7x4tM7L1yScGqwEjSwBFUwXdS4TynRVBxWFqBEs5YvhDGsycK9LDcvCC6w3meZEkpzR7L",
  "key40": "257fzQhpEPXvtEeP8LeZF4uxZheLtkYv2faoS88uVc1u6CBbXwD1z5N3ir3DeY6z48Baj8AE9nCTzjL4PK5XDyQd"
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
