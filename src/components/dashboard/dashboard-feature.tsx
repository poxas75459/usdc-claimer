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
    "2V52oafPzsVqJxXc6MZNYbnkJ1JuLx8jhayAU1wbY9AS4BhSAJY9rZGexttNn7MruJJUTWKRVfkc6TUfMEe48smQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3UukrkpsNEGbiMbLTYf9d62gHMfA7adRqqUZyePUKcw7bSr7tBZV9feM5AnE2g5JTM33G1k18K42mVM8ZjLP1B",
  "key1": "BhWCHMBBEuUoHRQz9Dq3F7SEDYCqUj6wZ4hPsvtHCRuZvddvW2dEhkine17yu4VbzMCgukcHETkByMF4EF6SdEE",
  "key2": "ptpo4WF3ooMpVABSYrNHYT1a3nh2aw1NTFq6tdfQaxaGdz1rqTS5wm93WqJomgXCxSxjAiqSdQrBgGE1zstnQMo",
  "key3": "2y7ADYM7MqpB7kLKWapFrGE4CkKbK5cDBaQUefPmNsPTXAx7PQU2d6sTrngWrDZnG4FMJYqgFE71b9JJHa6hcdnx",
  "key4": "42qRZWEpxJbRYrSF8bbMEbciuutvetetUHUx8pq4bCK6Xsn3iG6STHMMiVN1VdSguTxVr14i3kcRa5zGbW1fbwe6",
  "key5": "Lv2BCbrDzxdtRggRSWXkRdbRhha9Yhp39Lr1Mj21SF7steVw9TRmFejg77ZK9eJkNJnc5yG1CoxvGEFgaLbdaqb",
  "key6": "3ZpM9H1bdKeVXAxbhv4Cm7dHSKkNfyXMirW5f1Cxbd6S8iG3FJYuXjdZ2prCHevWQYRgeC2WgdLVJgWrfdamGgpd",
  "key7": "39CaK3y6EPMpMNw978V7fiK8xKXYAgw9CbRVmaHRdKAnq55ity7i2mKD8piMaZDAWXxSpbKqo7BKc9wCtcQrryvn",
  "key8": "mF7Rv6XkfZ4GTdXRciA9Wid4akScLYEwfsEUDmVKmMfamfCovmE5C3UFjG7yoJCnH1wGGpe1iorHxcBFEhMvTGR",
  "key9": "PsqsfCdbtq5YePAsm4n3SL4Uuraj8BWtS8xnjUPYChbAUN19sgsAXQqhoFGWsVDCpE8iLDmaoGC7K5GdsLftPWg",
  "key10": "3eWBaSSBkkZqrNkEMvJHRjMJfTw6SkeC8mz7eYDmCu4pCRcKT3KzG8R8s96eVWpKYzRHKfgEEtPa6UUmmPDhgiVP",
  "key11": "4hdZdBdqyNS9Xg43Su89wkow81g4wFy2w3Vqm9MfVNqCrtryCoiZytM61uGveNnyEGYSsGY4vze2oAVwtfMVGmv1",
  "key12": "3qhRscbaHaDFWbgriw2jjY2seq3K2BPoNx6pWfikqnvHSDQAnaJtdXhqachuVRFSZpPejXgSLbDacYNxkupkT29y",
  "key13": "5uy2Fnaw2TEF4EzpbQYC4sPf2mPoxPZjYWfyScVcM71ffmxewJjYSRvCYpm4rdiKSfX8X5AfyDXLZF4ZcN8orXN3",
  "key14": "48vJ28AzH3HoE2c2oqMDWrThjjVdXkj7xWqTDsnF8xCb66AnZLMNJdxGhSRF1Lvv23czQ8CDttes46orqf15k7o",
  "key15": "4gcPBoFQEoQAmdAVNJ3YP7wbt5fZtAzM3YhzYLzCzXuo2U6KZAoBGpC21zWMPSWZBB4Ui4wJTP1rXZvbHeoDRypR",
  "key16": "63wey5z9pF5WT2U7B1UP5akCPymsuDHQa7BUWV1bDYqP2T1w28rLVw23vCLQGB51EJkXYEjCKqVNa4XN7zaor2AN",
  "key17": "3DAqzfLNfRphgZUmnu8jPtMKtuUmFQe6uHwVbc996DfEVrS61hcfzhRMjo4PrLbsJfhWdz22vbvtgJs3HvHTyX5D",
  "key18": "3xA2fGQ9BCoAViyQLLW55qC69HhLwMsjpvGAeN2MKhWGR7RerU46NWdiKFcizEE7zunxvSvRpxtmLBRZRqBnQE9b",
  "key19": "3g3zq1Zv6A4YYWJu6LK6wC6FAgELXRvZsUswQHckd2Y6YcDPMgMxx5hLsENLn1WtNFBuMmKPcj9USEEXKqSLbCnk",
  "key20": "JK9x2zYzjxCbE7dLhUZhsYGKa7STxPq9QvFoqRgPb82qSPjToEPNHRRoGCbDxe6jiNomru4PtfgLWR1yNvyK6dH",
  "key21": "YyauAY3ohqxpfN6cSh4ui4c6LSdQBVSWUqttoLKXc97K7g7T81fvYo6hPeo8NPs6vJ9UK1LeCJp5myRXtNhAKMK",
  "key22": "p7GHB8Z2ZSPedbKDibG4ea4JupMWwxJKSju2uwhme7fHiHzdKNPPNsgvxtQrry6YDymWsPguxTVXSXokxZJHkWW",
  "key23": "4Gnqirzkzqbau2JRpttU7iZxcAoSWDerxCeAy2PbZfwjFBMz98kyN6BQJSo3TD75jBYM5vm23GzEx2UUp1GATzHf",
  "key24": "4nEQb7TyeRgPHE2dRdHjjuPLWZFJTqLwKpU8ic6itminbK9m11JGSdMdNRu2eM2jVQkXA2dBAfmbmpdcwvmpFSWJ",
  "key25": "5QpK1G3Rj1BLLD5jWdi2Wog1QYmVpFmizjXLgLtdi5hoc2na5bMg5u9LsXFeUu1fJ276oUxM1Qv4GcBF3Tcw6kpw",
  "key26": "2ptN7sbuxeuCMR8yyxDTBLmL7LaPzjMVnUmLJ7faXUKzNF4hKXZQgYsv4bnz6RUJAyEA7E7TPBAwvryiDkJCAcUa",
  "key27": "Jn5HaNsyzfRvTAJPWtxNpxvG9PcMHEaAhBTBRLKHzN5r2f6JgyubvyNs1opEejJ5cGGZji6tfBDLMjBQLTHSmgT",
  "key28": "gaKPEmhyr6dwknLS6FbCBrmyDUEuqeMDCHzoMm7Jv9QX3eFMYf63zSyZARfnpcmy4VKPnAywkvZRyhzYSAjyy4d",
  "key29": "4psqHmcZDZSSa76CLnjnNCNaNa1qzgfqGXyfjbrDxjwhdrHB7m8j3RmRTPrK5sPfpWyWsHSVbC8SiTGHnXUgyLME",
  "key30": "3XVhQ7bym5WemKpR1jUpwdKxtiVQkgtGKfwnUwy14umzEyikC6GTqCFwtufSoB789eLZULgs7yZiw1Bi1VjASHjV",
  "key31": "29G1hScsathBzk61h3veJTZ924uYb8mLk4iSy2Gu3yhqDDjayMvPGgiEiXqcMmL24sNtBTHkP82136WQ9mcThr88",
  "key32": "5QhDuQRQ3QYQ6jo47fJghg2m87yVoWHTnB9vHUvJNFpfJ7ehskAk2P4bhs169CphbTQAHh6K21J3WmPsNcd6ATuo",
  "key33": "634bxBsvdGPCCWVyraZcxVesnTqcbhrSYxtBvisTSf2m8t6sDixm3GeTLHfTvL3ZbB42ip7cYfoDKvqA5jzVp2FN",
  "key34": "TdhewVBder7LaADUxkjeGoAsFtK6igw8j4orMQbTNhPZggUfUZyfMfk3o28WTHtoHpHEr6kv5PJYkPGgigcQcPp",
  "key35": "3EEJjJGWRJsvvUG63MKLSU7R5j8GPV9nqqEHWdm5mbrj8CW2gVnvUzpX2XZTsYSgSE5w8NeGBB3ystHunaTR8xyR",
  "key36": "53321jhxMoUKPyHcxrpZvXXqVxXBmQwUC5mmr1CaDtYvU5E1SpYXrFFZAdp6CMFotMKqUgzmdYPs2ahZCUHxbHUx",
  "key37": "2ATa975SfhrjZ6hLuLxfStRtFFYaUYUXyRV9GxrmHrCfu6MKe4cSUEbJSou7F5GHvefnkUJ3UVoynvhQSo9xkuTi",
  "key38": "2jhkRBf2WuZq4CNTtZh2jZ6oYhtGKX8U6xmmtC9PTofohNEpNjizcW2MVCN7CMawakSW87vP51ngnGz6YjydPkks",
  "key39": "46dkCHg6WLrUxcDXgSpbC4kazKCpA3MJEZ5qWAGiWDex7wS24viJcJQwaf5TLDrVkDBr4wMsRxKwBXMxQXDXAnAn",
  "key40": "3jrk1TgVqPuDu8seCqkdBua7DoUEBbGzfaWtFq4RbAfkYbB2dj9LZ84QEamUBzwxYV2ukLnTJWJ5kWEa92w4JDNg",
  "key41": "fA88KBX3RHffJuv3Q15naUdzaeprzgr5ZJ4g5SPVANcsWKCJejTSvsQx1gHQi6NDAS39JGvjbPd9y1XBT1SArcy",
  "key42": "5mmk8Gt9w6YtZVTReU48PGsbruJB7WduBLzQT7SsLxqnMm8F9KLHKCpybrawdBEzxhbGxZYZeVMTrsnbvngSnMd8",
  "key43": "28SySaGTJD2Rn3evcxg5MnPftWfRe1sqSeK84QrhWUtnNGHKj2pFm4WReuosJbSbK5xyvJm9dSVuwYUwx6d7YuYN"
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
