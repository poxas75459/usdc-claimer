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
    "34VonLhmPWwCppsJrZgS2dKwjqu6GFLV2945hHaWwzRXNPqJrpXA1LKXHAFz9WXfKxqGQ9APFGnVD1tySf5L1mB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyAxMvMm7ACXLzcrn3pHb2XRYkLME1iExx1K5dJ47jtWXsSyGhmbv3bPZNy1CFDEyE9V9m93zdDaaRdH28CmZwY",
  "key1": "1UdWiSXW1GMFPoH8H2UPfQJxqKWrMZYBZEfTavzFzuzdWoZYfPFKtkwVQ88FwjE4wRSx4ryYmZ2oY8DPmQ4SG9y",
  "key2": "iKRhAaXZaSnUygzU29AbDRLmSUKQJyN9pQZ1R4GoEDAVeC39EiNknY82cj1Xn4KXGXGZ8H6Vc78LET6Rv6aGCDf",
  "key3": "26G41shvL38xPqD4bvgM97fpSeSLUY3J6XU1vWRyEDDohawWVzrFtEiHJriU3PqkLtwkK6AbG9oU2YKbLVgXegSN",
  "key4": "5gDekMH9AiZTXzJkpPdj5ZHwBiQ5zT1AfqhpjLeY5toSUTnp7mqB1v2YzvhUgyihHEuAm63RrAbg8cfSYKedyDYk",
  "key5": "2asyF9g8iwkqEXkhiL4ccKSzaGYAMz6As2f3tftF8t9HN7PipqmmPsNFDU7Bc7YZyNCFvMMpzTF2NoqrPELoFRjp",
  "key6": "2sKDQ7FXPkuCSqFAvQjoEXmbVaZJPWA1RKZNUTTNJk7aPtcYXrk5ULQ6A6X2ufFodSGsEq3JyDNsU9dLHq6aarHh",
  "key7": "5VQhrWA7huAh9gT3edL62AxgZZERN8eaKNhB4ZbRYWvL9eUFKGaKacxh3LY3ENJMm7pUiZEsd7AEQnafYeHGRhCy",
  "key8": "3JdHSKhiHYqB3bujyR9RfV5YofN9yjbJ8SeEFnED6RN69uNUf6w19mqsJ5PVyXnsUvGLaVVvTBB4bJdmf8nu3z6t",
  "key9": "kVaE4gTtYqDhvnaoXpQWAKrpAajsCTJMPE678THW8vK62GL6dQaKUw46tipzq2HijRwAmofhTwGD5Zyimo79a1x",
  "key10": "3sAfTuUAi7jBUz1goQ9LtG8khoevRotBHq9AD9s5FHw3eKqoUdUFjw9f6tAbZQh9twrDh5Cwd33DMduEEcueWRT7",
  "key11": "Q2kN1XZpiUnNjA2CwUVZ9Fduap65CXw41Evqmcmh5Kzatp18dk9a8TJK25Vt4FgLrjbZaMNwntx88iduHfziknB",
  "key12": "qoBMkhhvQDrbo19Tbm5D3WLQaoTSrSk93yAwDaSEFDFabKDjEV5crXK6igTT9rfLqzJwhq9XkYJJXoUYV4bhXoQ",
  "key13": "49ApLc9wxqtJuEvf5QHak7fkkyh59GtxBs15oxaUFaLtUzsLbEaNUmxucS2JWErBtNXiBumTYFbHVEWx5BsLGAAA",
  "key14": "9ohJZ1AUhgrDV8Tf8FFqNm9fCrc2pwQ28gtLzGCTuHJ3j9eutojroP8BzyExHhv83YAxP5GTWZ62RvuzmTY6zpp",
  "key15": "49xv3DtnGSEpRxvoPpHpKzzVwYW1bN6omWfV4S34bNNa4zdE1eAFk2szgGinzDmkzhu2VhTVSYtyR1B1Nw9kCyaC",
  "key16": "27eeTGvtgSQEe63MNaHpPKykFSNqgXdeo98MmwyBLAUWznvCNR9vQzSwRcdBef6YRG8VyEUZd67iixFdQHZGqN2b",
  "key17": "4vT242uQJuo4X463EPYrRGSSyY7B5qj3heqrKLcMkYdTj7pnKiH6YmAhmaZxgtVhRMBvSy2yY161N9e2Ha2gRQTr",
  "key18": "2SLnY2odneJw3zEDa1brwpa58TnX11aPSTr2FPx9pDR1hsGjB2uMr6RfvQMC4eV8ur7a4BR1uVs6qwbvxU6AWzxd",
  "key19": "H1j2pYaB96qtzYhDAT1s1TkhXVWQ9pLsSTo9e9G2Ktv835dNf5B5bMT8SWYYZSadaVnS2kZM4sC79AWHSfJ3oRQ",
  "key20": "47v1EGSBoCbQo6JQuVZouib9uYKMq5UXizDTEy366zUp1n8oTgUSc4D5AFQMSniDnqFS3EXnNQBXJcm1J6yiQ71F",
  "key21": "2Ai9DtH8NGPaL9TqHm4HTMW84uBQbYioZRzkqSdMwMGaXq8MYFbfob8Nq7QiSfMpHGBnCnqTksA5JBVwDuqDX9W",
  "key22": "5cJBXK7dTymeeWfrnDDVaZGLPPcGeTRZPCAhEG28duBXAo5Rtw3ks2TpUrNBVEoG3qGzLuxwpFAz1V2EneFw5bAc",
  "key23": "2EpRoPMRNdMmSwVtTyoZCuCsN3kuCxA57iLxZi23zLbeTS2vpPy42f6YRXBCkUCC53W3HMadsPF62Nq2u3wBwYbS",
  "key24": "2EyQ7VxPGvXseFDsmbPRnrnEQam9BWy7Z1zLC9pmjXA5WLzWszZosm3TbMpXtueKqkXgTt5VErxjauHSJcmqWWSJ",
  "key25": "2S6StAMY1S44r19qEutm5dBkjjYjoeW4PEgLKqRotGjLLDeiJrE2FUh1MPM6rbjP6Uzo66Yq2f4VWtDdm9iknhvD",
  "key26": "5PJNxAEJgfHNY7iMMjZuiYT4Gx4a8VTrvUkHvNQmB3bUebPPPT5eeanQDk9CSXC7tBF7H2Y7z7ZnGJo3H3KemQLR",
  "key27": "G9UyXKdA7zGr6tSxE2fiSkx7AATJYsXXjB72snq4heG7dVBn42h6HsPpFc8rSSwfcZBWj6Ra2bqFYey4QUskqSg",
  "key28": "5Aq8vyQ45TzxE77wT9LJnpiXbLmUMq8YRCScwGoMQFYSHHgtYJXFKXc4jJSDWHf4jDsLStskBv9QWLZvF4wMWSB7",
  "key29": "3hFq8MUxup2QxGuzWDJQ5x15wFhtXjKYV7EzMgtEB6m18eodt7cTT4N9gQBJUdPxMdkE34hbC4NMSDjy3kHjqFbB",
  "key30": "g67cnY9vQNX3qqxbBaGe9FNcLKzkBRg3LnrYR7qdG9bw4rscb4Y3XMv2KuvmipvARe8DedBS4hs1PLJuwQoRs4d",
  "key31": "C1eSqrjvZNUHAfj4kDVYPCfLvDaNUDntsV5dffapZVvzmskEM15fKDVPzvwBD1WAHseqGtkRru9RnwnBZmLEhv7",
  "key32": "qEhBfAFkbWBxSTGF6LyvT8JCAqaq6gu2xYaJYf3kHJJfZApgNZ8yPSicgdyRMpoNR51ZMCV6WLUxWuWPUtgkqfw",
  "key33": "4RAXxMjH93uN3QcXS5EUzoJXX8MEnPdnB5n7o1UoqjkQxfaVx1kWwiqEH4w7HSUz82Js5z2wLQ4ugwx5f6VemCKZ",
  "key34": "2ptZTNeJBcwnRoV6wMn6p9ayVa3zt95LKTkcaRtjAKzW4hLWdoEefCt5VXnmKs9a7JP8Pn8v9NZgWuHC69NP7YCy",
  "key35": "MPnW2qMzRujoZbHxH8LprUtKHmCE2GPZLjEeqBqyyrPjV4YVrJFAoocYRXNWS83rwp4zRUhw8axJYZQpaSPREyW",
  "key36": "3nSXgU37U2iRmuiFFSPxLh8dT1Sx7jSPcYJTWC4SKM3ruyw2ZuQs1LehL1MmzPDxCEP5tuDUmcGurjUAfnTcdPPb",
  "key37": "2CG6AzKu98NAee652QzvrHK1oC9QTyYdxAmRNCQE9xE8HQTRch3Z34GTAqzGLshZSky8yKZPvUcT5ct1igbpdJhi"
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
