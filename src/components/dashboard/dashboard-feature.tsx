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
    "48KVNUqQh8euNUSB4i4SnmtKPYXAoTSdBBYyEMaiN1um6SEga4JnZw1PmGwjLtrMSVjFtL55YXqfhZEBFRxvuELR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sN6yrbabpBdf7k4fhrWEa6TdHcWvFU5tNaajbW5BzuBCVMpewByxYikw3F6LdieeKmU2fefgGojaC2kv2Y4YGjd",
  "key1": "28EZ9o7sUHwy5Sty91q7xdJhsKjdaYB8RRKw2CW71XH1DPNbhTWiD1gjbm2ndfFsYRfdDFkUwXg5kcdi5Q83PgrK",
  "key2": "5Yc7rUKZQHarvwLSGPbkgkZ3oA91W3z5KZZdYnZj4RvxxMpTCRiK1hAEihbS8RDWUo9ZM2pHpbpgMcrd4vWLSRMb",
  "key3": "3xU4WTSTLRQKCoq3wRQDxtcYxvNtPvPNrCvpjGC7cBrT9SndCWrMrVwAm6XBhSZL9PRJL8ZP6iBSWixGA6DRCmED",
  "key4": "22PyPdVXroEsJrgtSdxRdweTJuttQJuFc9YGCn4adWz2TbgcP1TvzQmc7WE93XHJuTdoMRs5paFiLP6RWEHsMKPa",
  "key5": "2vaoVaDwCEcuhoC62uffu3h6AWeig1BM4hTiJPDyeBfSMysqLGacTAnwzzuRkNaNuqWGH9TpkFKjLyNRvcw7KWuf",
  "key6": "4JMH4yWjUFmZuFD8LLykdBBDn7FQKVMno7jLmetyobMe5GApMeqG2fZyBzvHBYnzWBrEjezMHkZQKUxKV8QSEpZx",
  "key7": "aiR7cVELDfkJ8AUfnCbZ7h8GtY3aNPm9wJbJLf4BFF2PJDkxNG1azgkhBj3XZmHuqomBP7STiEWmV6r3mepmmiQ",
  "key8": "5GwRh6pEdqnH8MpzaQUYKwV19C6H9z3SGwcMWJJTi7rLkw3oJeVP4yxabFvYyJQhYTiMkPTDSinrEnA4Jf3mYh2g",
  "key9": "4Gm23EQWRSs7cNfU7dRBzo7tXujkpBwU2TVYLFUMQmitbseVyed2jmsjzShxL6aFHCABnsXqstk6Uf2ghueeUJSs",
  "key10": "4NQeThupFPfFY6UB7Jner7bDuhHZamtGnh2ci2nrs9nRLFxojk3WgSNrLKHG4Z3my15GRn1uJkh1Hs7iLKszXyy8",
  "key11": "2mscVtMH8BMzgryWtkDBxzUXKnnxh7yXjGZGuYx5H1dXu4kakre4btv3DZqC3QaeT2FoWTk2EsHazUgE8Bewrbuv",
  "key12": "5phoEAQwGBmwJ51YVzZjLG1xnWMWR23KuSkpBnBxPmrDb3DGfhTMMbmNopCtjkkuM9ch6ZfM9mGPAaaqWBPkbDqE",
  "key13": "gdxvbn5WzuSSikyCqim5LCypYoEtkv3Ln6SpUvV4XQQkacXob7Der8FBKiEayTjkjpWCBs6rTtUApfHvd7yc9Lu",
  "key14": "4XCxPmCsP4wxHqgU9ueQYKTjDWJo6BBrcpCxfcGmjo2paGFYhUcrV83whkuyRAARJqJYpC4SAQmfdJGC72pqGRnf",
  "key15": "396trD99Xifnp6p8A9c8L5227zyx7XVnPzDHLVtZkazPYhQMv56oNx7CnsrkBJapCJVdcJE6GuGxzeKgLvyMjSdF",
  "key16": "2iRXoY3hLtSJgT1F86SiEXqkuX7czhMv1yPd5NxzjGpbPdwf6c2HgcYcmc6x5dRu3FuaMynTKwUmqtnhnVGBfoMa",
  "key17": "5nDSPRfuoCVFf6ZyKEtTUsYW6NXHQw2REfRefAnfmdBdeeYVANy9RuTHfMpXitj39TERF1oCJcDs3cHDk61SpgCF",
  "key18": "5zrN2Xy9cHxb1TPFKUeieZMvYi5A1BRcMKpFVpjorUnppW35FYni4byNKZy9mr5jCKy6gCaWr8QTzQga3jPKY6d",
  "key19": "2nxHLoonDmbjXCrQhyowW5u8bgRvhbZKGgrfXduNh5oQYhcgKaCaf5Bk9fJqE47U1isVcJcVcPpTRYgHrGsgNXLh",
  "key20": "3T2wvc5zGoU7YhpeFptHGr8wFRMj81DnixJpkVgMmaN8vV7mcLXrte7Jjy7femePfuKLFNjSPhsAQGvUs3MtRKjd",
  "key21": "3kv81nP3AV7B71UPocR6RNBSE5VMoWYSK8btPe9VjS2xsX8eH9DSAeTsNS8f4BuhugN8hvPWJhqwQtVoVxcciDs6",
  "key22": "2LNz9c6GP8T3KL2u2kwpQymykjuEUQNUTVXPZyttRTNSBdWQXTngt5uc2X8sv7Weoznh9n1vsCWjCP3rpencVp22",
  "key23": "2r38Un7WREjcij5cZcGSPeyQJVD44uMi7jXecbgRgz3vYuaFKfeppm9jrcUEPpb6WitAEgusVpe5uKqQgTrSxPq1",
  "key24": "3xMLRaB3yxWWPAPhSkPdh1sENUuRHNijXyHcP7zp44S2i1hi5YeqvxkjsctNcxggAc8W4ZqHiJ1FvXihX65i5M44",
  "key25": "3DWtvzCaSk6kusV5a1qccBdPEcnd24zaZHqRABoVUwUz36JTTiqaBKxHnMDTrdmeZX5ttGJHC18TpVWqsoxnsesC",
  "key26": "5MfgocTYoJohntwQXRuDySVEBgPb1SGAnnSNW3UgHoMMZfLkKdJR7mJMsYLgLGTVuvymkWES9ozwGw6RN9bzkmah",
  "key27": "3UamdoJsmEAtRwV38T6U856QEoKx7ZaoaJX2F2tNtPnCd1x5556khqkTd59xuMn6sxEuLfNkrsYj1F5Ri4t6uk4y",
  "key28": "5DNoeXYSg2JKjrhWTMdmbcbybZDF9RcpfrMrXBKuNPKteTV7a24NBMuUumaGYV98on4Hb2LjYcskUJWbitUnqsGj",
  "key29": "3T1skga2JHbDfSgMbA3fpDo5H6Dksv3fWNw54hEzrcufaPtPsBPvcwX3domXfcQeBRb7yjjtDvqXtoXycKWp9ptC",
  "key30": "4YKCYuM4w5JXYkoQNgxZkuwd1SRtxhxeCpqfHgJSHw9LNffQRKbAP44LyGvcbhQdtwUqifPDhKm4Dw9uBouowVzm",
  "key31": "25v728BfUQVFJbfVpuGT195GffUc9pgn4E9PNA5ZPJs9bEHeHPLJ1vWZuWx8wCb31D12qxq9byzUzD7YSPeLKbdy",
  "key32": "2WtLkkx7h3Rk1yDoYgnQfiKDsd4YiDwFYDoWcAN74qJZvXqaERdUYVfMErPNhj65PXSL4DSYeLpsigPd2iVhbQ8Z",
  "key33": "kb8uonryBURFacYWckLkAJpthuxBwLCiGP2dTte2o2JpYt4vb99gEx8gcoWpAmCVHi6PzeXmQWecZQZKBKgivMF"
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
