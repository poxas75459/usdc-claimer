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
    "5UejSWDwwSWNL4nqpXaAiJdCUwjLDbBJqiQhApNYkmwng44foQsV1yegWaHzBrdCUsFmVEds5QaNMp3EZLTSdTQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jec5DVXSHNkgjkdzZQC2eB3gRF7MbBFyYCJNRczroY9U4EA2yXPoXV8najAUArExk2hZKtQD4ySdycV2HuLFpr",
  "key1": "4deBErm17CmVLWhGNfcy6igVDRUzC7uaHTa2pbMks9CDs8TWoaoVv7wrqw8j2Kvf6JnmV62UE9mxTvpwjDE18atT",
  "key2": "3TSstQ6GKBQ2ajqtknZbYzn52x1r1Mdo8tZPXvaWuj7uLrBcVAWgHTFdcQ93T2cJAHBfQc2hGQwcD5KDLpCzjFRE",
  "key3": "5FE5dKhnEZPCnKU77MB4HFFYzPHHkzDfksAdN9Tpcx9UYStqoupuPcbtjEf49VT6K2fAZVWptyAi524PeD6k8Wpz",
  "key4": "3qTziYXcvpoPHX2ESctR8HPimvosKC1bzEPd5euqXtQ2zjyPhAfgsNQq3pWYc2f5CgZuEE6dZm8HYXZG1pmaouoL",
  "key5": "5F9Lfp7Wx7mbfEhCPobpSEYWR6R6hWeC5BTxBDhQkXuqt9dByc6vT9hTTFTzzwxzuiY44iS5mHUopRwZX6c6BiTR",
  "key6": "oa2Uh2n1mSvczXxUsHfKYfxXJa4DjB6CdcxjRZno9664UChNNAXiunwoX6ziw75ejgwff6gsedVSmmHQZrLgoAd",
  "key7": "U4yJ7gRgqMJGSV11LNewxB4JRFco8JGzKwT3oMoCEJckYPBWUAzqjirRuvx6mfD2EG89GyfCWMxf1VEpQPqgM18",
  "key8": "2xcsbmDJasr6a1T2CWVMqLLNAuNUBEaMA7bRPfRxE7YZG3wrwVrnJC31LPMbXQwurcyKSZmtsR7ubAEwqJtTDJNP",
  "key9": "5bATFdsUsmG24uXJSMJyACB5svLrnuBxUQx9kTiQYQZjeLmnwmefeLgxjN4Ui4z3N9NP6JKwrNgRSRZWE5D1cRbb",
  "key10": "GpGswNcpGNia5UxPiPkHKRZswDHrD6WYFG4TK9YG2L4ssG7u5NfYXjs1xBCMQLFSnnppKGr625SBiffgYCkLb3V",
  "key11": "5YevZLNVEiSvZbzhDPM3rfvweALdk81sv78uyA2Dznhq7jncr4hZW1jsv6QnZ1A13stdopADmkBRHpeSDuyE2P1E",
  "key12": "2qrK4kZgTcEF6kwhaamCSmyFMKuUmTBTX4ZrxbPrgPVCNZsUAgaAVYMJbjnwYTKZk1XeYs8NCdDhTLaZHQMkwpRC",
  "key13": "3VsxmUE1hwtmtMdGxBXP8b75mm3tHU2tfowVJZaTdmqMRGjafuaJMjFDxis6H1768DBXYLFh4L2yUPpuhN6Qc9aq",
  "key14": "3S5E9sGha2TdRc4WoihtibzqxhimhQHihEe1WKhnPSt72fvE67q5a5dc14AXn2F9thVeToPouPJm5DudssKLUtDr",
  "key15": "4xUv4yEJq7Qtoevmy28WTcAtnbCNzrX5QDExD5s7cGzDyPJU619FGo8WRJGTmiXxwrW2M7Kv4ehD9cmEuPmqNw1F",
  "key16": "5wcgNTLGGT6RGuZ7rerMMZ1H2gM7uhDHuKMkNUZwHccvrZ1QJcUsark4s6sjYJphj32PQXyLsYgZwDa2BGGJ22qZ",
  "key17": "tScVQLm2TjM3bEzitbxBkLt9VxVqUdhNcaEvfeZesPRsErijSMMiHHFD7CXWp4tgez8ALmEQhCnvL32Bhxy3k1L",
  "key18": "5qEnn5UP4eMjdZiBc1fSdw4qRH7xpsgFkMT8ZSEdNTMHcVsUpaM3UJp6MsS4r81XHjPpVozkt8hSqtdwn7J2fGPr",
  "key19": "cG1ugnuwXLixATETQMMH9KgEcmbbe8w1HwNhVGi6NyjuRGNHNdNrWvAKRXGXUxB7Gn4U92dQjfdADP8CkhvcUcE",
  "key20": "4wnaYXi59wSNx1qLEjrRTVPyUZuPZtxutnubs3SQ5kZiCc2FNsFW5od3S4KtnH4DfWzTBhUUCJXcWKoQCRR6q5ob",
  "key21": "6Z17qAN9egqAisgyvfZTM4J8G6Bkw5ZvFJHDQbsbU1sYRpiVFVg9rTCEGBdFRts42GkEMoSkm39of88arv6CWuC",
  "key22": "6747sivvnuonhKo1xr4fm7eKM2t3XxcnkhiUEXjXnsANLQDfrTuvKn8w26aJfRWiyRj1CzstUYNxD19HJ7F991FB",
  "key23": "zNTjR5LwNtbjT9vtSUBWhTNL1iXSAiMihtt7GCkwARtrZgWY2k25xUfrAasjLoACYy5UeW9zBHvyvj2QyMs2L1X",
  "key24": "iJ7S8Dj2mFF2rtDEQYKwAhJwWUtjk5SWsPDRYDLKXugn2t31tDJ3yFkKPS62fz2i2iuH6hkrCARSQKd1bvxxA4W",
  "key25": "5fdrVAo5ghXLAPNFxeAXwNm8ECQ5RKiZKPGzxDiU3vxmYvcNN1zSe1FUwn57L6XGEbPRRzoFisAwfsteJJcuXmBP",
  "key26": "5FA1jCYambYnCcXAuGowCLsmNGKU3VajHTSJaTn1fByJFsrfY3L3NsTfXH3naL5CWUSrJD9vvGwPGiq1d7QjsiXX",
  "key27": "5taD4dWMWNDikNx8itqFN5nyscbWxNQUHm4RU2jcMnexEd8qVMFDRj6E78QQ8A5Yw1AgRyNsc1yPHHuxgRVxQMTn",
  "key28": "5tctsweqmTa6dSLLaC8TtEaKGCcumfwnp86Cz6Cd5PNzCr7fgPHcpHXyjLjaaYu4ceNZG6tDvpfuEFhwG7anvsvk",
  "key29": "5WDsgZtDjH2TiyLCMLrnU1EbUGRj9TVvNL4HaNG6FqXJYrw95hco4pRQozmQFxiVYEF8uXczK5xaqSBH8HtRjWh8",
  "key30": "4KHkUPtk3e5Cog8dYMt64DH6sHwJEhTSNv6EyZ2NZ2dwWNiBebzyKmzLJZhnruykoxTf6YpSw6kHTGttTuY3gQUn",
  "key31": "5XmmSoGCWpqm1NrpufrQLMDyHkh7wq2jWPvgYbZ3KxHcv9ThR3xXJXwG6EdoZfooRCjCH1RmVvkkVLZ6zBTD2iTC",
  "key32": "4VjJz85mpEDhfAvEnkDKTaDuFbsKJWXXEsq9YGNjotUvw2tRP9sf7fGLZo2MkNVvj3qmSWyhmEosDUYxRsJxeJYf",
  "key33": "2Ub11aLCwqZtZWbUV5NjFW81qxZyi7YvhkpKuJAponjyHaEFb5RoUVkGxQUaaX51PwxtQkoBL4w5yj56ZB2Stonx",
  "key34": "3qxYR3NvRtbRujLLe9iy1c5bAMmkAEkNYS4ePrPjuDNbdp8C1boaGbRryTpVE3EhfNSYkEadwDZvBPsEa5aC6zze",
  "key35": "2f7XofeiqaHjS8CYVEJwdAxvxHEZFmn7S8aWCosxNjL3bGN4u6cE1GHRcfYdZf2JuFLtBRm479U8miiVvyYe8C63",
  "key36": "3HhhvHWB3GvsDNyr3uVp8T7SYN5VCkCxcQLz1QYBFkGNgXpKubSv6Jd7wZ9Ck2PRABGBwmg2n93mDuRH4F1FqdXX",
  "key37": "3gCZSxmLpjprRcy5hxQojjowpMXfBdUxCYv24G45fF54DGFe76V8XhzMC6gMvVVPzMQSk3nq3pWzsdJVEiEBCNWA",
  "key38": "2bKKNQZup2wnZEUNYB7EaAnAoeHofUgr9M6JLubALz8pcUmDjR6GXoRNxAP9d8xKW97euNSHFMYX5uQzB1pRB3Z2",
  "key39": "475GmwsPu6bqSBFkoNNZerFhEwdsprvoFeim3yLvuoSGKXBqGEPdiGqoAyip4eXNaugDJE1Lf9tvrLGqLB287XPa",
  "key40": "TfGWKbVz8FFZrZuhVrW5Wb8tdN52Y3RFoJc4Lwn4Er1r3zj7NJiSHz9kBqAFZGhVGyinKxayMbq4WDurNc6UnzX",
  "key41": "3noZNviThRGFPxVSUrdqBZ9Q2hCmgNAT5o72oCq7E6qT3xkvq4LenqyKY8yFSgXYHXk64tVHZYxBx78aJMA61BpJ",
  "key42": "2FPxiCJpctuBZqpn9eSooCdbxmqHaq7xpmKYDEAaPYTW5Yg2F5yue56Ykcqbd1sCpeEi5W5WduQQys9dEyZ28RtK",
  "key43": "4nmbvKRuJy5UfTYL1NXyx5dXjWyaJsXxbzXviDDSFEfFVL3iNhygT9K1g3kthDnYohHdBicCi2FkEt5B9DqxA2p3",
  "key44": "52qgN7i2qpZhs9LFjUFRiGvTBFdxP9X7WCQp7VbZPv6JBhoJC1C3H7xaxDXcXptMLXKW9uyBoFTQdnvdCNEAfcp6",
  "key45": "2GpkME86boiBnBwJegKsmnu1231GURrmBNxUL9no5ZW5Z4jFddX2AYiJ43451xnWwJaYCXXdPMTpEME8DEU7DZX",
  "key46": "4scHFScgHwYYhbPd4jySSp9XajvGVSkaew8NYyC5es3wY8PMVnvWA1NvwyKx3UowyYPoArK6NHAthYjhr5qhTGyC",
  "key47": "4tmDFW78D6rAzMJ92AVdMSq4G5G4KrxdmgDxDa24WFG8MQxnZssojjLFGDNSK6HkkXrMzQBCuLjvnmBNwe6GC71o"
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
