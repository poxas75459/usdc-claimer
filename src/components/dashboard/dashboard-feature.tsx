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
    "4Ro2E4sqQGAnCXuE5xV3BMWULxcLuc3shZFqT19QadvwSZSBvZkiDDbVLoKnneEMe7fQEvS58tCpKZM3C83qg6zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDFdwdXasEsFbU3jjUQapXgGYMX1f5SNGyPBbir5rR1noxE1dxrHuGUJR19sZCzBxjXTohfLiJ8vfGYtgqHc6L8",
  "key1": "48J2mWfPcZoVEZ5QkvH2bHhtaC8C4wU14V8ib5W56f7FmkX1H15Gep7hZ3FhDC6KBMyXrXg1DeEKNVNASouwRJXV",
  "key2": "36ZySzS5vcX9g49vTUU3Fra3fzdS8LLFs6FFKGBM8Q9vUeDGoyUsmSbmETN53YGS7rdXMWF92d2R9X9fDmwiELYK",
  "key3": "393LC51PJcPkFVGTvddbkfGeabnqX4BJ6mUdB5DbHXafztjxG1AUJojAiVbCmJ3Bm33J5SAFnmkqzjTF2wGJjUj5",
  "key4": "2WhibDBH2zwtQf7ezwerJLYFj3tHpFrK1Ya5BwRa2g242vc9TvnEeCbZZnj3rw5xgKzSpmDeij5Kr9X7ScqzPG9A",
  "key5": "3juXQdVcpgTc811thtoA5619vm3msu6k5uBZxwRYaYxzzVFntyDHWxnBpfHpqB2W5Jx9MevxbjhGS9R1orfnsjfm",
  "key6": "2oQx7VvFEgAPceRS67SeUDHAEFng8BkF6XmiNPW8xRfr2r9HaN8XpsELe98caJBt8yPgY1tm3betNo8e6CUGqfLb",
  "key7": "2m77ewTjBrKWPkVaTupYv9HR7qy7dpa5U763s9n69iMDUopcPARoGN6gnaBFMt6T828Z52TX7wkHtsDjGbrErBuq",
  "key8": "4kMGdDR4kjN7Xuxya7PnoSFs5St2Zhg4UNq5LYNh3B8M2VxgYoL7Rn41gHbNQsPqYK62Q8wUSbqzixYZhbp1Vdnc",
  "key9": "4ARo2ArVfq2nY1jZvKgiBmeguuRAppr7BqRWQyZLuqc3DxRBnwRAzfeahgvHMygBgnpvN4Vtc7XH1BeSqY1AWRPM",
  "key10": "8wGbwtDSJAzwxqLrcDaNTrS29RcpQu2yxA8yvrhwG5YLpMHXS9Rpo4YAqjGjdLFXdHWy656bRMnXnG6jaaUAkU2",
  "key11": "kEsVkWY2zSUgQBaq1tZH2oNWbvGHyFzhM8tKJcLjGQYT3UMQESb2v8X2JNgeK8nV1jbrr5SP3NUPfGuyMEJbqLg",
  "key12": "DCMXuUQX7E67UKSWaTSKU89L2Zk6hS71Y4ZN9VcMhdmNonZucykhc5sezGe7YRVojY5UMbgj4SoE2Ud91jZAS3j",
  "key13": "2q1pyPo8KkypboDkzxduUiSj7mgqza2FY8NrEZ6Hc4s5MagoxW3hRGhwjLbn4t7NiRvt6FczDUnmj8e5rYUN8qhB",
  "key14": "2c1p3mHbFV54CXuWwfY5e1XQg7W5UbQcCnDAFBAfZBTDPPbYmZq4xDtV9NWLV3fQ35373Pz4dm7ZpBqjWoHfWdGh",
  "key15": "twp2aosXJdrxErYSu56GCqEpoLRVo4yu2bXDpmZbBTVoPbNfHm9gcDkwvgd8Nh31HQ1iPap58NDM1hqFHnpwMdw",
  "key16": "q3BwgZfZrr1ZPZj8gwjxGN48XFKoe96hwgsRAV7ZY2n6ai6bDmaXsAi1MQNEmCf4gbzwYyxG8EHgcQ2EWyNwq6M",
  "key17": "4KCzm9QkMT4yGspm2qsQXoC9nDGGKKMapE7rhy3hTWLVgaKYKyNB9aqzueUGnYnY1aBcCG4UvQ83GChCRJHtMtot",
  "key18": "sx63iyw483ouaPtbQF1f7uBXDgxDSpHyZT3dwAkPmq61HK8RpAs9vTS3vugi7ZweLKq4kqjK3U4wfEYM8h9EKRY",
  "key19": "3y9mT2Yds5BGTBmddjBw7aGoHtwbxGhqF22C3sXVGkEj6Sg3mQNNydasoj6R8dJTLqkwTH2RC8dyqK1k79t3i26W",
  "key20": "SbD4ZTGnBEStpK2fDQFJ7PThs4T28xbpesFUxtEvS9nvxoEhBQkWWijURKpi5uwZMyWnBE8MhZ6v69YvnGW9nut",
  "key21": "5WYi8nbbkZh1ByoL9vdUrfPp4YK5Cx8mnSmaGhhvyxRN83MRdXSMvwcmmE8eQi9H7yR74fYzzZaLQysqJX2HyNaa",
  "key22": "xFREkFg3qBMHNahGJWJCqy18YC9JiVVLigGP9vXd5RTHk2BXGYwropLCBBKfMGK9GcH9E7cFEDn4KqFp8XpwnGG",
  "key23": "rYQcGgELKGAofdtwajoNKMUdwcAJ6vpXRnai5BxAv3HcbmJfcQ46CCeZrCApKkQbrjeUWj3e34otdNA9k1rv5ab",
  "key24": "2AAdEM27JJRWhqpeqXePf5cc516Bt4Xo75Eb86f48rTuUBpXYG3NKUAm7i9sJYANQmfSMyyHtpK1PF3oUAcr8E1E",
  "key25": "5j7nWi6e29rkVXenBZiQKcyCTfvrZ52FDq2CoZyNre6Qhk6DUfFQEb2h8A1E8P7gzoZaqKa7w4ZzxyXBttDFkxrc",
  "key26": "334x3oqbh91F9gHPqubrpkUdYmt7ce3qGE6YiSG7eJXVY3epwoQQarS75NSLJGAi1zFRfiKvuDY3p1mLo6c4m7Sc",
  "key27": "5QLSoQk39k882JRHVJBxgGnhwHiTEkQanSRi2Ffi3hwHMGHFGu3NnJHMn9DacNsMS7JWKe3N5rdNUxPnpGs5ZWsW",
  "key28": "4TgZfG3am9UfRNndZA3PRpDnEjAcrRzQpXSjC8XYtDbgsjGGkmAWvV6Kff544RmVp9nvKQM4SQSGBXBXL5FG3jAe",
  "key29": "3bde28Cv3hQ1DwDa3LF8mg1Kk2y14XSUGGm4SSGXCCo853cdXzvUBgsiD8tVh3jowdyLxhWbJogeJvZ8UQiR3Fvd",
  "key30": "5psTQvkSCBz32JKabxYgHZfadhf3rCiHGHBEopSRETdDXJQqfoWTbdkouBF67XKfBTyEqNFSfpsfdY4wA7gdciHN",
  "key31": "4YNejwpm6kYVmjbNARQizHNiy8PaGPMDKaW9SRJ599oCo1Ag6R6xGZ1B7uzyGdafJvfpTF3kC3XhjZDpNeucRC5y",
  "key32": "4KjHFR1pFwWNmZbbci6e3QmKaZZQHiNNRpGrSrdJ3xUHdqeQGc3BfDBUcTXifAn6zK9PjhH8anFVJiHDkTFkWEL1",
  "key33": "4SgyTXLEzCrSoBv5t7DqJw37tEfiA2N2QNMZjQzoKL6S9T9Fgxzm5vwR6D2WrHHhw1TdcB1FttpvhN2LxYSaoNC1",
  "key34": "2iJTvG6T9YrsXS8CdwJyndr3PCcaDaXv5akU6zgkAipeVfqHSoSzHPao1Dz5bNjFTqMWd7E6n1Nqwtaob43VgewA",
  "key35": "4Y9E3rCPeZWmyF3KXqyx1ZxuapA42W3pRcoTurX1WAbN53VZsmjqKhdFpowVe9pLkMu4rN1kqAAFfJBMCFX7ydyg",
  "key36": "5ShW8NqFj2uQkV3DfDYB2sBJ9Hbfp7aS42GjDAKxzsKhhjCWHRA828N1UrSHug7L1TMuRu9koiEVjkGvwSHLpKR9",
  "key37": "2b8aTzjNKFwHDRTietaHkix9fioZnANN6ncmvTsFZCjkbzkPeBgYeSLxfub544g6rFnmTDrAR7sCWAopLmYZ941s",
  "key38": "F8Z4KVfes4bKz3QVzjgpw3p9YUXQq2P2isz49M9i31kSvvJQVzP76z5BTwb1LYbHdhgLAf5Qv9K3fwZ7QunQdC4",
  "key39": "5b8x3J4cwxHmCMvgDxf8xe3hJ6z2CRJSe42AUZkUXmyFNFuRFWepyUMQ8gVqoc2jbeYH1Y21mygpX4fr7jJypn4J",
  "key40": "G6wCBzi1v6nSvFz6bUDLwx7CHhVDyDobDsBAXe17csjvJqHwnaNh3aiRx8N1PujgNjADGTm7TXMAo2135neHMJ2",
  "key41": "39kivdFxaSRG3SKs3vcLZziiy19GETodRtUhsFBwBEEpuN2m4JuBcw8pDjTqtsw8qGqRLJjJy9eizxyCZdj8jm5z",
  "key42": "5vdS1GmFHW7qMQ7bXUmDtsMM9s1xtYFcTKKRmestUvas1frYFfgHKgLZQurMLbaQwP5WyhBF8E9UgPF6mnr8EpWj",
  "key43": "4DHp1h1XsV4A6L8p2yVWtT1b25h7nZexttbePyNnkkjcAoEQpENDyhW718fynUaMxySpJBfYHiKziTerybp2ut7z",
  "key44": "c85qifT4vVk7wcbv2JF9ZRMKQDD8UsrW9B5JxVEznPKMfWp5UseEXwopwfpazG3j6zL9RnoM8BbVyuo18AbfhBT"
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
