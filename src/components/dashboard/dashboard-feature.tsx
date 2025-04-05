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
    "4kV7sxBy7Nu92vttfebvWrT6pLZJoTvf17PXdDgvy9pKzb9cNSCKQjMgCq7zTwa5PMZqHzxHMYE9MGCP67MFYmtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxgJVXGPfdT9PAQT5GLD7uYJEm4DMmgnECKnJJ8hqnt1F5sYP3pQ32bSWqtasy56N6fxAZVpvnoNtCmkmmdibuU",
  "key1": "seZKNx8LiNhdqLgzDJbd13tP9J7nrRpp4jhp877u1q6gugDT1NRMHtrLnk17SWjdaFBTnMjHTsEPYSQUbVio2sg",
  "key2": "4fSMqZpiB58VQgCMcsbENoPhkKWEaRXYFU3SoTA2PmbeoU3hjNyrz27PewGioeevinDKWPA1gfTWRQdT4uUiqJqT",
  "key3": "2QahQNxb1qNaZ9YXFnp2szPtYpyxVdubZA4JWj9xdS9xvKfog2Kz8hTm1tpPqgpZ5186mFCEL2z5PTr3J31piPBj",
  "key4": "36ojNscArc9J5EBrkHwkTtzK8AuVEc7kGKc3NRuksRybejw1MdQyDqsbzYjTexuxVmmByywZ918YQGQEm8Fg4E4D",
  "key5": "gv8nMa9PCrjzkkmWQMWxNre3aoRJkZ5eUtpzb8ZZHzx7A5FpriV1vrrQgCdmC9c11ccGC9e6xsgVDM54z5bSX1z",
  "key6": "325pFDLzGZcahxZiuGUBx4tBndk9AjZghzszfEen8quBmwEHmWQWkPMYkAF9kyiR175R9ddAmxS2eyJTSxC2ZzPX",
  "key7": "5w6PnZajAbNp6aLW4sBA2rs8p1P3tyVw7MxCjT3neEJPGi2F8mRCwSsuX7xnSssSzJ9ftKoPgevdTUSNe9L2M9Za",
  "key8": "4eYGqJ8SdeHipEBpoEv6KfHeF3ScRp3163s3diEmKoEdzsr5qmfaggPkJmJKwVaLbdsd81oqPKu1eB1ZPSvZBNtU",
  "key9": "48XLrD13VTH3ggEvMCSFFGTLyvWnD8yS4zaFpch44Xwzn4EDPXautuic3ERC8fWFU4U63mJSiMiS8AHCCEMa2Krt",
  "key10": "4maGPCgvZVVo7n9nzdpU96X6JZW5mpk75b4QQnETDZhouKTL1nbmNtwup1Nbc5sW6srEJTP55KKVZ8ruK1UStJYN",
  "key11": "3RYzeBTX16UYBiTvfYWQW52quiDXRDppD5EmG8PQqYMnsBb7L8eeAhk3SavvYNKYrbEAN5yqxHVNwbp7zc7ixAx9",
  "key12": "ksuMJ352b1QDQ7BunGSM4DG2iXeXHDPHB4D3o1j2ub1BhG5P4gAv1KMrUfRPzFyPhZQAp4D47zqqUv7fKkpYUPu",
  "key13": "q7pTcNgkQcM6unfs882HeKapGPmTtdpkdmYnMjXd6on28LC4DBjseCdUU5VSqbgM41NX7LETAwW8zoJZQid8oCd",
  "key14": "4QNZ9sFjpR2XpMQQ3veDiVo22K2z9XFvR64zjJZEm2VqpF9j5kMqCDRr3PD8fnh8H97h6tcqJY9kJ1grActCzERX",
  "key15": "dNe1Dh8YSvdbKXm47UhzANvYEkTABoDJSuBGxZcu6XkWPSus9jdMVUJKaEG3KU3qQuAJx3rdQWRdCo5sCxFN6s2",
  "key16": "LFEEZqezgVk3TnC5c42kkWLxGpxDZipyPUcu33oeLLDurv1ACzB9VdfCEMLeXsJBvjpJjxCBaLB4gXw8adAynhV",
  "key17": "3iDVerGnGGk4edhFKS7Q2qsjCk7tx7ETx8JvH3w6u6SzTahdjiHQVFBVtUL1rs1MULPoK3qhDbnmdT4Enz5fBUPz",
  "key18": "4Syba7viwrmqimDSJFDuSrPc4ezQVMN9hyEust2KM4sCSSrBeLEiF1ensBa6VhnBVgvak5XsPvEoXsWhKUix7H6c",
  "key19": "57NbHuwCrAjpYHMebBu9CX6wZds7DdtsPvbwB7roZQjMhy4GQQrUjjWTvhpRozSh6WanDkMeAASasRRLaXXQk3g",
  "key20": "2prDx4nrVE9Ed2X2wGCg1dtnf3o4CbFnrUYiHnXVPqBfpmjeTB7SuCDfA5RJdgWeWydVQbGzmJKjsHY9FkcHnctw",
  "key21": "4iVMiZfBb3rHe7ucmS48WVtTmwNAmiuotvwn9XgC8KdXEKPtWiJZqmz8UHcR6naSNsUPr24xX6RYHbwjofHcwj8U",
  "key22": "4kg6jBEkxG37AEeRp2JY6dEVGRBZvLVMwP8Tcqix9FYQfGCYr8FGiSsUwnuG2AxP3QHqawxG6PBetVt2XPaTJCaJ",
  "key23": "4VVbu29pe4VB1PZkUBo9AXNi3ovVv3QQvVtdUKftYJQTgJZYzn5AVxCZuRjnfeMrppX5TD9GX8v7nDvXgtrppqGo",
  "key24": "3Zi7FRT7tu9RyRMCh9KbJMhFUc3RveA5wRvzbnHF8fGxEYdc7TV71rCcgv9facgJjadx7DM41ZWkF8wHMuH4AjRx",
  "key25": "3q8LU3gag61uTSCWkd44gYsY4pNvmd1LLroA5HvwHQSwmNFRWaT2SWuzDnkh1E3gciZLAQmPk7PheXRZUnRJqHQS",
  "key26": "23svYovfi3Z9uNF7Q86QstXjXpPp5zQxf4qQji96XmdjiMKWPyWiTbCyLhDdPAH8LW2iRAsPe64muFMDYJMamC5s",
  "key27": "2kRWcQQfuyrzodZAwWhGp7nByg2MKwvV2G7zTS1Y9pch8mtmE9aKptuf9u9tJmoSzeTXABmsT1g9XwU1iv39NcBc",
  "key28": "4Q3hCc9zsHLriSGvpJPw8i23PCwcUtM31h1ogT8P45DJtzmanMkXU9NdC9snBcT5tKoU8t6VovqpHQpZ8gb2ha9M",
  "key29": "5TrYLeMLuvdPaMzrqFDWMKYJwWDw3AxF5WWFeYTUKFJcNkDXqmmm9CqLEgMsiYVXyGAsds7C2StMnNUBcCZYgbz6",
  "key30": "4Q3h6hymEWK6G1XX29LGK2DorF8SnxfxhTmjkDXCGzwMWmpce96y33drUZ85tEzcXaWYVptCknYu31gxsKzubvvF",
  "key31": "63jcgwbp2chMYHHNqTgHLmK43mVRkppkppteGa3DERRCWPVNMYERgKXkBuNmpFz5PcvVkkjhq7JNXSQ8TRWXJLzF",
  "key32": "5k8thv8ydBDUom5yxmZ85havRL95WihYv5bVbzt9oSXukQih5Z8jZYZ2wGShx4asR2wksTPAuBGc6mhsD7Qn4Eka",
  "key33": "KZQsXvth2Xz7R4swanYMj6H9itpK2Lr5B7qHxNHWs1qdmaDhbYAtFodNbkeM4QQeZPnovvwzw7B3NCJN8ofX7PH",
  "key34": "4DGmLxqUR2KYYQYgPqGSNjGFie9uJHJFm3Mdirehy1j5ZrWDP3VB27bezbKLYmykhnxcmuS9rxc2yg3WE2S9pFpd",
  "key35": "3AFcxnZhwYCp5fbdahZQfToRne28zTm61hTPTQ7uV6vmPypfuLWZnwvnCw1eZ5w7vcVsUFwGFcRkVVNJTEf3rbAT",
  "key36": "2Jrmva2EjRWxQ8ykgbbRcnTSEc8yqS1xMyB2jDfT1zxsSzjWGmHwwk4TeqCtqaQ5NwtSRBk8BpwYjYNRuxvxu2BC",
  "key37": "TgacUcvvzYqLYCycZmkp8sEDVjVYDXBQQiJBrsXzhKmGG1wT6E6k32bSJXq2QGEaC4pF9t9fFi7szH4kwPTNfMZ",
  "key38": "5bbdqjvS31taXBLvL1Ng5YDCkJypzL7r4s3jzWCeWvXiW1QPG4Ysx8gG2YU6E1HADT2srLmQLRzgtqTVuF9CpWEA",
  "key39": "56QDXawY3oKnuRQJBCRiZFg48PvbewFjtbC6XodGQqyYPUE2YVvzc5U2BQjwabh3hQRe4JF8n9PTWUDGJPWyuk8Q",
  "key40": "5gQpAttZQXCXbEi2KRZs46q8zzWuaUVnsLjZD4MEeVAbMJohdrHSn2Hiu2u9PckQKmF9khHT5ZdX2bLGdoM2BAK9",
  "key41": "3zXnidsByShm3LxZgDFNGnMnu1UcnAFfgoWwdk2GvwrtuduZTduKZcAjEMbZi72n39gbchBdcXV5yovvZbDs3BXE",
  "key42": "4Lg5ezBnLXzVbhaWWdLeMfXduf9QTcQH58uRvVHAyri2j5U5d27jgehnjiaWkXnMtCyDFpBZ4NFQTRPsNWzaSycR",
  "key43": "4PwAevTSeTsnGGLa4eK7QUkRuV6JQvXdBsuJY9C8S5EDUTSVvtAG9fDChQpALhkF6NCHZgHMeBvcu4qXFPQvcLJB",
  "key44": "5SucBvpKbCruQf8dqaj6re1rjfNeLPjQTGcQR1YJ3t6iEaW18gdgyiXRPCzM4ajib7d6oZinaoPGmJc6VaW3psyC",
  "key45": "4dZqejPYhFzvF8LYixsM6EukcowRj84xHfxVU8P7Ui3E56t3khRwkxp8s8bwb6NQDkGNQEAeZ38a5twgBJEA1mva",
  "key46": "2tKRHjggHvqTqzVw6DZNJjseLQs7axBNyJudYA3hRDxiwUFhMsaXtkyDAB8kdAufuq6qxaZ9Z3G334ywFw4TS8Pw"
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
