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
    "2i43q3o1hzGqmjtKULMPa3cqmiCGdCWd7mHadGkp9NnykzgMDMyB3hzJDBmaMKmTvCwaUpTcGoK6HV3GV1q9UUfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfNn9amr3y995h46539EVnXsh2mLBwbCreMqxRKEuF3xvSsgoyeuPVWWshb119f3j4K4qC4PAHq86DnhHMJGskb",
  "key1": "2FMHyUrBj8dzpXzg9KfmrpdoCM9LXg4RmnqZX5oRJj6CW7JofRcznvsHqGJQk6UnywcFR9rmAsZdfJVziA4VM9c9",
  "key2": "NeNqrfaB4zB79E4y4NM6WStUBJ6WEboWeQ2BB4AqrihGfqEGGQd1UvK1mhcF9xbcNctbt19GjyWp5CU1DbJMW6n",
  "key3": "2JwbNfqa58ufzCxyrX4F4Zk3KVM62XjUvr8wcAf3fEA9cuVpm6RGyj9AyaPTdkrQ5Ey61CGMV72m2aoBpm25K7mR",
  "key4": "GgKDQhCWSyixa6yRMkXTPHiJv6rNtvAwjaSe9VT3TW9iYiRcjeyV8Y8dLCnKhB4zBnGpkQkDW32uAx7cQsHTa7d",
  "key5": "5GHJCVfH3G8grPnFWs6PcgbpbK6VEzEEzATcASe6kgWoRE3XMGEw5GCwg819fbYugbUmYBjv8rxwvRUff4YtHQ8c",
  "key6": "21W8s5V6nBfHV7A9YoCbsojKi9gBy5uVSh2qYUJ2KAh1cT8eVEoisjy7EfnUaxoE5kgX1hb1TW1GkXGutYQEgYgs",
  "key7": "3wxvFSueQGqkhYijaePGGdUzTzrLfoubK7Hc7pdCn5vNGu6yW2TwhJX2dpMyWYdHfn8GW9TJxGTKLWCfGqVfuNzP",
  "key8": "4zjoVNvJmzhFH3JcregjoyxvVPFG2DubYTQL9ADZq1ZBkuC5Dy1vhNbdmVXuF6yhyEEzXoBP1DfnS8C8VWBxLp2U",
  "key9": "6426XTDcUMJBZF8z6TjtoNP8sTWX2hKwxdxei1dGACBZnwyx8Z7HZC55EJZzBWDPe4GCuQaqiZJNtouS7fRT2n41",
  "key10": "641vR6pd6s7cRkRmPDNDGuzwouDs4n3RR8GW9ngYic4Uo4kJEx7WoG5dVfjNgKmC7fKHma8BocrLvm5srPM6z18Z",
  "key11": "33j9Gn3L8PV92uxN3ygixiSdVKztUke922P1cdLU2v2YN2jcjcYzF379iujJqZmzxt2MrNPgQruTo3z9SbHg4krr",
  "key12": "2eeHw1oHwq94dmS4T6wocjPvZGSatnzU8HX3FaWVpYk9x71NCqamkx6VkrU14mkziShf4AXmNvCWi9TCXzbVvdUh",
  "key13": "pnW2Fw6DXLLr5J46e4dtRwCw6VhLDtfCPBQBBcKJfquiGU1xMzFiJxLox16ENs8MxzLcAttADxkLVRJCxDbgH2E",
  "key14": "3KineuLNS4d9vtgD9KJ8LDL9ATYq2CxxdbPyYevUF4ZXPGqorSiZgoNDqcwomfqF8TWAxjTGS3dzAkeTLQnJqT1N",
  "key15": "5chTzG3BoToQeaV4ST9SQZne2fDWCCmf67vr4zKJYiSYFMGpUrPmjSoqCKzEgJHS1Lb8q82pdjCCoNVHf385jbQM",
  "key16": "54oL4fdJTSPFgyRDHLMVHa4AvrNAUjpFt73D2ewyf7yzyHb7C7ZLGJJBEx3nPPZH6yVkbd5KhMTxuCQrZCrABA3H",
  "key17": "57AN1qZjpVZBgA7utTCE8yrtKQciCxcKgG6rvHDhZbknhvH3V8M1g6aRpJQYwMcR6Q4pEZYzSjBwLxAM6XRbrdNw",
  "key18": "51ThbckCWQdfwih9PjHk32b848zUxQfQiyASY2sfv9XJKDFRRr5qE8Jjxs5RakPEriDPvvnEZVySHL3XL1gnwRLP",
  "key19": "4QZYAwGSBDQarZppBLExLQTd3BXZF1qFy6i5rfvdduLVoCUBv7VqP1mwgnosQENizANKnCFxRjoGSKQE7htYRbSp",
  "key20": "3gwiUUmqVGw3YPPN9LSGJZ9BDisgGf24U6bopYmfp3ezCyjckWp6bqXMbgQhGZCX2fchwANtsAUGoaUv3Ukf9xNW",
  "key21": "4NuXkf15By1DtmgusY4Vo47q58Ws4yr4XV6GDjikGTxDpKKuVywkGpSJGGnQh8Ry6QGwi9QFGwXh6qbeavk8uPnp",
  "key22": "5eUXmzKHD15sMSjis8TteCXZTrktMHGJUgjcWqGk5N21bHcyrWiL1TuJEJRmdicuD5BCxSozjXsCU6m6dDr1NUYU",
  "key23": "5F7FTUVw6TJZ675bhcm6oP41ju1woD39zKz5FNNhRdJHFPMQyUKvjy9nnoroXLSeYyHuAUCe3T5dBCUjeNsZPQPc",
  "key24": "4R3ES8GDXprdhgWoVKqphQMEqjS4AJBcJPcnbCWisU8wfEDrGkyJQzi86tmYnnUxbpsp5agpQEVTCxrCVPCasjnT",
  "key25": "cSHBYhs71VncVYdzjh4oqJboSaitXmxBqP22LCxXBPZNqJU1fNmJ9XLiTtZinZUYtVwQUdNV8M8KaDY7b16myiy",
  "key26": "3NwrpNqRHVSsUV6AykndxmFjRN3FkqVgmT51W2UdEgJxckU2vSt8mMamzTiNoYDHTmgEuiTGwRvg7BRbEEsExj2H",
  "key27": "5jjxDbLHQVUmxy5wDTiFkB2Qpo4hXgKxUwsQ4V1P6RT7BfcMK2NayiJV9fq8yypcFWcZjQzcqVGDvjm54C55Hr3h",
  "key28": "k7CPfkuYVq8WXfiRceMuxWdd3pWfaeKc6B1PaQ4qbPxNPhVQicDA62wXk7ioPLMc7EfH6T6wYUCZkT3ZzmwrTQC",
  "key29": "3gqyP4nV4sH9GPsbz6sWyir9pzDaSqDwa2Ad9BWVcdewasiWn6Sa8RTZ5EwGC3EActUCkqiNy6nGedgWDk5Pp4DN",
  "key30": "PkLGcoigxBuRwPpsGoyTNrmPdN8Di8u97UQXn1eEdHLKpPAFr5f8EQFhcnxJMQCprP84jG4BicJFLMiZuvkod8c",
  "key31": "xaSS4S9m2ps83GH1pdW77XeZyanTHUTMX9pSgyJjCSJ1h1zRMoapJ61RQiQ7FzSWAqQgktCjpNLh22dYWddkxG2",
  "key32": "dKUGZ8MnFxpHScZSdfKp93gVnL4Jk3oBpRMK2DD3khrLqNgm7nmZUHphXk3QNNBqzfd7fNMzhf9rm5GsMZ1FDXG"
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
