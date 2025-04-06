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
    "5vj7qH4q1HaBDCRk7upj5f7JEwgNcQqYfNuEpASgy1t5iWmZ25yqhHehzV5kbL9UT3J9vBvKsU3e2DgcEovS7XDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBZUL7PgU5FvznAmutANtHub1rAmuCu4Lxi1kbUCtCLVehDkrFWuGtAdXFRPewXS3Yikhvwrw3gnt5J6HtCWPoc",
  "key1": "5Bs6ypwQAwXv6HJL4HgkEog7qiYDiM5aK1n8QEwqbdQs7ZArHRMMY1Uz3Zi6LUm46NpA1e7h9J614RzNrgTPfjQa",
  "key2": "2toXkP5fm2vB2BkiYrBknsUSna6mzdysVSYG25F72Z5qexv2LRVMw6Wjzz6keBuZWGXbMmDt3LZfyMYCGJdoxAVX",
  "key3": "3hmaPbreiCLTBiUCjoAJa8osn9TEtwmHT3vhjTLGVZVhpQEPPZsvY7MEXQLNxM2h71kPmVYDKQYiGFLCW8gAs2CC",
  "key4": "45JNBByVPL4UoWJFtBkWHM5pL1YJWEQeoP7fdESBdqLGE9zr3ek1RJAFGFkvXhFVNRsppxV9Q2JTDo7YnBQTWEYy",
  "key5": "5keNSTRY2M7SMSNrF4v2QVBGd5LnDQD9MpX92C1oanvBX7XJ8eMja2scUNw1ir6Mb2xWsSLLtWqHEJ1Em8Yp9Ljy",
  "key6": "5rmAThXyiq97zAVswNPdfpthySkHgvZeAYzB4gwyChoA5hxiDQzGVgYvgjL7CSbjGaKHSHnkPe2s5wJdX3MaeTkc",
  "key7": "3PLLx9iAett3NBYEpipz2niL6ns3zbFytWDLJGiS3HFAuZ6io54stQViPgfGRkkedXttRR1hJXdScD2DZLWUmwpr",
  "key8": "2kzkwrETehLG8NEak18Qq2fp3J2QwUZ1CBnQkX4wERatrPPnemLQ2eYiSYRNoBc5M23dU1WMeSmD85ygBkHCc3va",
  "key9": "3j98KAVkbQwA8jBQBMRq6g7LWEcacsJfb2sp4tDzBgwRaMqH8CEELNn6ZApDs8xRvi8frsSQ1Zusrwp3twa3hbDv",
  "key10": "afViKdi49RMgkfh8e8sqAL8etwyErdnyBDS3eHekfCor3gDECw7qRkAyQghoinykxq96cB8x74ofn4AMGMRF2sX",
  "key11": "kT4KyNQjpGf1BienP72akBTQzryt6KAXN25QiMuKinJSgXExVswYLfqaZno8aYpAttRd9cZbbK4wgy3DQHFbXGf",
  "key12": "44yA7sYnW6PAwce1Ps5ymUfhv2pEZTQdg7jXLbzWBTYfiZvDRmyHCXQGTovQzRuSBycwyJ3heuQdaSgbuQvkWpXt",
  "key13": "3fBsVCUgZGUBxGk33iveB7NLYSH2zT2sJ5gyDfogp6TDrUgUDXn2HeQsBFi99HfcYoadqmwEFtRMF3tUZiW51v36",
  "key14": "2xvjwLvAoFtGwJhdhVrwvyoFMsS7p3cyJkdBXFUUmAooafGwuq2kQdh5csD1ridgPUbuPLXyz3gxdpvXVZetFjRp",
  "key15": "2YQnGMdobvmuf6zQMBUWwddYLtywt4nvKMci9m9fKitfaeY7kRrsVmhDTveyobmCDGdq9pFhSmP99HJ63Mta4CfA",
  "key16": "2yBkG25ZrSX7CF5gBkjuvmmMwwktHhY6CaXomPk5mgNiwG9Tde9qvvpwcganrNxtuK2wvbmUC4M2oEs1LE6TyQ8t",
  "key17": "4beAdBwQkLfchtFnccuZNmPN97UB5Yx4ksLiCvE5C3fhe34BRDz32anvJk1xpEaKVqRvNtCbG7ZPPX2hJFfQ5PGf",
  "key18": "KC8mxa528AdxKSoTNdmfzDRDEwXVzpMZJvEGBEjpoiM6ZQ5wSZuKu3yronMo68b6A8Qhjn53eLiyRfsXcyCmegF",
  "key19": "436qdXoQUJDtNjxbgSWHMeV2CjpRPRGECc7HdixShPHi7J5G6vcGDK2tuUgGDmGw1JPDJp8vNSqMy7iPBquw91RW",
  "key20": "P2M6jKx48rrWgZXQXBmvPp2ZyTJfBYHg5TXVC3FVmYc2wqRB23bv3xMK3tJcehuQzUP1WkLCerHvVw5Vn3BLB7A",
  "key21": "3VTnCfgX4e6wKeVsiUj9ZDSSz732b3jzsEz9JpRiu3CXD5WrqRTSt8SKqLzN2Qp9qVEjHWVhogAeGdPfXqEx8Pw4",
  "key22": "43e9zJVAzBfmzXNFfPzpbSAQmNWUV71Tmrya4wiaVQ78xGKhj5Ej6PN58rf6i4qEf3fqbFzmmQ9dTttEhGUcD6oL",
  "key23": "3WEUjf6kGyyVmmgGKViRwVjBHXA1eg22niShdbvkKWNyZNMuWtgtdGq8KRnS1c2eocWvCQzy4NZEjhEpXxMdvd1y",
  "key24": "52ymmvGZwCPLuT1tdyiKuNm1gsXyYEfYXcvb3Fj9sp2LdwTY2368dsMDYB8qhmqGSK29MDfQBkHxTsU64iw3fZr9",
  "key25": "55YitrCgYxoCudomM4DT8y8FfrrUuewzbkLPi3JhT9cgc3nFx59L4rjbntJFhugEVbQL9CmGhercjXNdxbXX3j3m",
  "key26": "3UE3CBk7dzZwaymfBWyiLp75djArugVEFnMyKSaM1nUqmxodUtVf83htAVaLSB9knCrJ8iLpNjxNUHsUWfqPmwmf"
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
