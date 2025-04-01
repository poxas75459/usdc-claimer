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
    "2z2DaC7k96v9dRty2SWJHsrQFQWPxrERngXwuxXao31Su9XCLaUJ3wqLT5ZV46abbWhWVg6xzNs964BEiBeXspbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o12gabM7N9seJikTXCqoE7Fbbtnk7QbyKyWXB58pWMmKtGJw1gQnrugcwVnKbESA3w6apkT3zSZpKZruL1nhNfW",
  "key1": "SCoV5NhdGA4XCGocnrPbboomVArtnk6VTvP5kV1TEoD7gJBnutgteVLdjyo8hQzuZnEY6UXYUsfNLSAVmEBwrha",
  "key2": "5hTQ6bRRcnWRFhnfanyxFsQnvWCoemipNDCN3QSRzh1KwaD8jFmMayUrYchAaNFtDuR9ZYhfjiVqkJSBw6dLbmuB",
  "key3": "UxNbNMZHjYCjib2RGfDZNSEXCUSDaFgUbuH2VXTkGjcVNSjRfaF6RvPDsL17SdYDkoPd9rc6MUECxagz4FVrhj3",
  "key4": "5A4vZYYStq7657Km3ZGwaFAfEiWFJE5c3hFaAQU5f4C1mH9nxRgwuRqLtwVkypJgHaWnZxkrXKCAg2icrZ4x1k55",
  "key5": "qCjAjw4TNrqCGitmLctEbEuEaWCvfJ4J3LhgCHwhyMnXga3J378cjaLb3K2QuXSbLTXxqcbkFnAgRpNMZYtLPnF",
  "key6": "4G97A97TU9EZAHe31V2s8DdUziRALEbFYWj3YvZXq61C47XKsWwD84zWL3ASQaDGo8NXiPKjC5zwvYp5JViYXtY",
  "key7": "378pMQzidBHg928GLVARJWRHJzqQrikJ1zuQ5dskCFiWeyMyYcwFsoDuiyGj9ix49GY1zzxsGESw1FbexLs4HJNV",
  "key8": "5De6satjn2bi4hrbx7D7i4AP21ZNnCyHvjMGtyzG8pe8egx4vcaDmkeqzKtjXQUN8v26Vbr7AehmDY9TeSvtbACm",
  "key9": "2jCFxvEwSQ628kNbfQeqe6X5vjoL2rv1DcH7q3w7HHcJ7agHbmGs5VcMoLzYB4RvNGNZGwySqjHunWNsx8GW73X2",
  "key10": "5k1dCzMFSiowoPC2f6auJjx9jtQiDHTXCNdTGFprCuhU7Ze7A92fhA4e1uuBzdLxgu2bCDsBmsyPpAvCjmzSWy9M",
  "key11": "64ywd2KQzh1JHAuoTq9kAkk9WuWEKcwT29aK7MzJ4DeYjRmpTmFnnnanrLkYPoNuv8JdRSWSi3Byvmwun4vwhgJe",
  "key12": "2tRGgoBY8a5zykKLdvRQ95CJPnTtm8Y5oA6uy2yby46RG7V1pCF8ymBof4vHkiSa7bRgEgRy4VKXH5Jj6XfuJP6z",
  "key13": "2oV8JwrPRMcbuvF5eVy1CYLjXiANAMRFZQC4y2SX6c4apBfht8rNxNjw65cePD3uC1oq8Lop9i7r5x6xSiFgWws6",
  "key14": "5XHAeuTdPkAPFJyzZDMjDs6yVmpbVipNUzz5AkZJnn3QUEMq7rRvyCM3hdqkfWesU2r944FDJGXgJACqtdtV3Fr4",
  "key15": "4s1ULysgwQ914dQj4gQJM2Qh1BoeesDSdAR7XpmLMnuw19rPQ4yw4dGoXxGo8cRAr7MbtuMuSuwK98GXV3YxoT1L",
  "key16": "2yiYGezqgWmPpUWM9fjf2NnCzbv8fP4EnRjhvCsCHFS5mvTSgFfPnQfuh1SSsgjczW6DNdFNUVWKrbDvLZaT35ct",
  "key17": "2vkPmETXwBp3RQyYMfnoqmPRjc3NNEqvaJPB892Gsdf76ndcUWnmBSY3ZDMH9mtYQ3Uiy7QpD3mr1PFoa2uEXgvQ",
  "key18": "3jsWkpSyaBkpdrSQk4p5Eh4o3VGiVsFZt9XAsrVMwkmTVH6jFZ8xZPWx59VJcQeXFCRPx7KY9txFXficxLjeNJeE",
  "key19": "45SYKF759gFpzN32u8AJgphznYUbHVByNEzDi1yQzWKR25wSne2WFvnWyyS9gqRRov98DM4mSdPZCK9SJE7kyda7",
  "key20": "52fDUVksJV3K4Pt6AeJTQzJeQF7sJ768Do56CDrss9grZbMU5fjgvvxPhUxRuqG3h6uNpLoCYmAEwz1RvyECZSBk",
  "key21": "pF9JvrW7wSoojHjaN1tabk3dhT9WwNcAYzDNTBo86ABiR2Ty4175B9poHi3tJe61r5uVkzXzjrPZJUhfxp6ENLL",
  "key22": "51GjE4kndV5Zvqux3k2eEkrMedx6mZHssvQCoWuqK3AnVDRcJSA45GJ7Fqx9LqDqX8GL8kYJkocHxYRJNfCk7251",
  "key23": "Gyy7Jwc8Waa4jj8WKUuHiuKUMETXyqFSb4yW6mun6C1q7sT2KrF25RypCaFuGhz1dYrkujUpbzSjjYFJX67p8V2",
  "key24": "3jNzxNMfvaQ43eerDvUvNfv5jQFbGVxj2mLR9LG3PoMHKuMvkfrtuFH7Pk3ynHVppPVbFBtfxhNTnLzSMcAmJSbQ",
  "key25": "2oJAiykVUbhNsgoYCzPEavCB4Ji5TYgPnNRpQwQsv53rzpmPdAbLKV5Gf9n3s16hGUJEzP399eFcbbJ2mKbe8ekt"
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
