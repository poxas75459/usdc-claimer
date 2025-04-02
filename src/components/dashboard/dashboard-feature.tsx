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
    "587TJVQWw116gUz6XhJE8eZif4nkmruwreCH2FNhtYNjuYTMfqnUMexWMpXHEyXn2X2yDU4gheGs8bfRMMKZJwdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFyQxV1vifM3cvRowMWy1eEsc86UNoXS6jv7GUp1hXHyPvFm5G7ijvKusCW1QpiMN6bhGas2T6RqeFexxrn14ie",
  "key1": "5o5x8S4gSzBPRBhEtiT3MYEtTmcMHdXZCNCXeHikKuxn1pVSq6SymrikbT5wazL7WLQmKYykq6Z4dtKdd4Z6W6JB",
  "key2": "dYjU2f7tbTRWJD1eUWBrpfDBrEArJkJsjxjmvn11Ft2jKP9QTQ1CsYLzgCaNS5vTGWGfC9at8LnG7qYjYruXMzt",
  "key3": "2xAA5YKr4cqGroZLtSYyxBdUfCUjsT3e6b6iNqFKn8kTAxxH2CdsEXtSDNBoWBrRvj33h8rYB7tyVM5UdUeCwj5M",
  "key4": "4nfhxin63r2N5rQhWJEhrbDmm8gQ7VKEXQmAT5JzJvnMCC94zxxnCt9zNFGZDypcxi277fY18aoNCtQNCyU8cbgP",
  "key5": "55b5MizjraeeF33HMgzCqFYMPjm1C3u6ti8qpBGnG5coTmWoNbXum57nJ4DPc3qGtzo8uDRXqAPKFUoUcKPYVJK4",
  "key6": "57aq1eBmZowC9sUnrUAjEwnmTz3pjhnWkTJwxmXc9K31gknRDAhkfZqA2hU3YkKbSnsa4kaLPh2vPv6sJ1R3vcMT",
  "key7": "GmHYHnEyzMmmzsWZv1oNrKMteowXBPgDz9ACJqow9BoWhga81D6PdzuyM95jfvUTWV3ntNBrY84pQ5pyiQskUHM",
  "key8": "a84dFKi9pMje4uhEKmzQdutSnpvfpFFLh2eJKHPrNvyziLnCGADzzDZaTm2TgPn6MJZqA9CVgJGBXKM6h2xWLbU",
  "key9": "45z49hjmBRv7bQdfjo9QP1CwhKXvmRVVuXKnprknGYf3HPz4g2UoPYJbAVh7F5gqLkucMKnBQExCnsKA5sUYY9qr",
  "key10": "4myeyJotWYZU3qPt8ZiGSrYJGTh4LCCSXs5xvPH6fAXjjt6i4BBZFQ7Jm34DZ24pUaNZbcwMyE25J6ntjHdSwXJX",
  "key11": "4jpstZDf8ZGjZBgh6fY9gzbwdL5LARsfHh9JHwS6doWHDYzkYngcSv3hFwPMi9AZYi66FC7nqK2myJ8z1hEVefgV",
  "key12": "bqPrTpbwEeyyfFciHdfkM3Q5AMc4n2muFwMrCuwu3UrYXzZcZosXpETQYeXVMcby5nVAEL4MPoEHxcMqej7X7dt",
  "key13": "42AzgLJjgtGmjGseFZ9PnCW8BVTj73zfwTpnqN6Ev9dXHe8wGgL42WcyoHFG3JHBeCHM4TDCyh4WDtusDNdHdtWg",
  "key14": "uWWiK2BroUAjbcaqnCnW4uBKDniN5atGsKEuVdjyhAa1Y9oc7N9hdBM7cdjRJJ5sKRU7HXKxCvGEUdPrx4WGp7o",
  "key15": "625MCVAMwpEb93srtVqJaWAwBxP8ATNNmCvnpms3k9dCEKpn7jgBpunEMy6fjy1S9EuFwk17noJvzZDH2F2UBEko",
  "key16": "4tad8AvgK7nXh1hxM7ARx3A8eXWe7tygWxjMNtBsivUiSHuLALVS5LPgBMHJm9kD6CFLnoMgbbupuq9bdXh5PNU1",
  "key17": "2UA8VDG58Jcx2mkzv1C9gVGZBVHF4Ry1MeBWRsbC2HeEPZybBmsK2ma6SvMnm8d22nML93bN41Nc4VjPwkRnNght",
  "key18": "JFBqvZv8wt84T47DpwT3mEa7kNocbWKU4B1SoCjzo8JKCKoMZRmaj6GoBaAYKeRbdRNkYpWfMqn8qjy9LJ3y8nH",
  "key19": "5DSf11ZQ4sbkQ8w3kZoQTnt42W515GJk3nt4pDJ3M8YKJb5c7vEN2TKLMBiyKWQdwvtr6GQZ8mh1miMoE8acjkM3",
  "key20": "XB2tAnmUbYhVpZ8KyTUnkZs3yBLDcbM3pTXWY7b1ZmaLZ91b8Nsi1io1UcT7mhB2rDfUBE7iVCUtuccxv4rZPRW",
  "key21": "jm8HarRjrHWVo1dDsE1HZSzch3vXXDVeLTW5kwcUdVCDYdJYMkPh72fVoALX253NN4U1rwCf8TwTyivQP8oUPjB",
  "key22": "57TXQRjpUG7Q1EhUnKS9ST64YjA9QZ1VsimYBwy98oVKkvBPnfttTDz2CcFRdp7tnG79MLcu6SZieHGUk3ezRhDf",
  "key23": "42FaGZKUdZWss2ug7eNieXdSHrtaFdvT2Vmzcx532Ka1yqpG2hjdq4gUcGGbUxgvrZEwUHEp6Cjs7jCFWxxpkqR2",
  "key24": "3NbzCf4asiXMjnATu7ooMHANzrTPBuyZmoS9R2VN6xWKnXWHbcXFDzrfpbcLCQDkeBVcN6bt1v2S3h1Ew3KLcbpH",
  "key25": "5J44GTaJnix4kJ7PmkzneXe7odrKz8PQgrqA3qm1bHhv3GY6NH3ER6tk7d8ZBATYiqQknHXin4G53fT9J43odhQu",
  "key26": "297ahzE3N3tDo9TaMdqPFPkXuqSDBR9spqjcuMzha46afHzaWrZX2bq3344H8zZanM5tnXdrgCHmEvoKhSGBvWux",
  "key27": "2DEKKfHe8yB4SnWxW1rJCWPpuzFtM7ryg7cNByEU51wj24uPrA1vfbFnWA6ZNryFsHHkKNHg74hM816cPkKEmtCK",
  "key28": "cTjoXCatBafwXdn6oBUPTJwf5X9rwSaHV7cbNJX65vKYvMqijiiMCkB3WXAJJrB8dzsDJUpQE6VNoMeSEZScopm",
  "key29": "3YY8rocYhysGhiandnbx2cEaMSjmK25M9SDtaWdbNKgZNYaH1y4VFRJNWwMJNn7cTLAo1zHbTeCxDtwMN7ykwbXQ",
  "key30": "4uc3PywXcxRSCnFWS1kMZbAGHDpNhoeUZUmmZ9qvw6PUChZu9MxaahNSyQjAr9sLp7mAsXSbJxezqwPmpP49iMXY",
  "key31": "uTk2reUHAuC8aMnDFWnms1Ub8i1NEAmFvxRsHtmDoNH1mUoucCwnWkqsooKcVNZBDgXrCBpMrhetcFMP7DsqHTR",
  "key32": "3uWkV72JUxAumiydz3kAPgZdFFDbsVGfSzzXZ85MhnueVEZu2QQ1KZqUKUo5HxNKrUpSukEzwrK31jdWqovKABEw",
  "key33": "eFBe1gCQix2Kcwd3yAMUFhYLiVXGrCPmek7bz4ffeQffrobbeS331YaH9sku4VDpS3eX3DpuabYYXW6yDS3UvPj",
  "key34": "3SRjaSw8pLb2M8B44rgT3unCnCpWXwpPb5AkftptL3xokBfYprkakUiRpuyhKr2nf6sLkaoeQGZg7fT6vtBQUsYn",
  "key35": "5EQRWBa6H89bT2jFGrKVVSCGmpVdheTSfpx3gtpzLqRDpkCe334CxKRnCnjvfCUZLa2S6xRmaPq7QA7hhVUMRd9e",
  "key36": "4Qk4XyWnFNZ5JmAma1vfptfHdEBzJwGNSr8JdH3vZq6f2gFSvqArpM88g27D9tyEDdf1TCeZW7fp976inrBLYrap",
  "key37": "4Hiom6zP4KNobnc5cg4eihxhY2vejRcD1HW9VTqcposhb3GLKNPTTm513CBP31rDYDxRT9q7L9SS3ZqJDgmQPcB9",
  "key38": "3183S2C4LewFPk8PPqSbVfzEW6ZQYjF9DaZAJxtGSFhXrGqDu8v83z8RHZXeVdxynoSC3eBQfVVZXEtjUi6pKtiM",
  "key39": "nvtsbDW61WK1vc8rAPkS3ydkvWQpn5wkVhipVxK7Zb12mHEE1hwSXqqvAbGTD52b8DDpDHzTTZZWybQupbYWZYW",
  "key40": "2MGe16V6WLsydFaF6UPDHkfx9jNTmqk5aa2VpE9SKsv5JCbZd84PZdRCgdvC3pXYPMjBpATzypSSVsih4a84Uyi9",
  "key41": "5UYWAqnS9vmwSQjZBicQxSkV4YtDuYVRUXW1LjjAMv7mr3xwPwTQ5fYwnWBTH4j2eimpyqq8mFYvSvaX5DjAKTvi",
  "key42": "5F2msJddNe8m4D6K9BJwvMFL2DrtYRzBcQXgDVqR4JkcYccYh3PXZGC8RjYBckqNXKwnMERJvWYRZ4G4K8eJeTUH",
  "key43": "3nwqBaEoobPoESTAPBzhQpEvHKRbj9EVtqkK8pJrqs7yKh7nRy17sh4YqgecS8Eu5Ykd2CiDeEeXgcySm6MTseMV",
  "key44": "FPnvqhc2hU6BakkRrwUqCbzjfVmwPjKy5n8VL1kxKYdr4oLeoat4U1fet7kdq4o2kuskMNGhhzTLu9rsxgBrzTg",
  "key45": "hwxFoX2sHfxA9V4xtKFwbabtr1XSUxtFQnbfQwPPSdkFvAdKP5wdyvEwEmLaf7ULJosRpszk8gJ8Q7rrW6ZUsPi",
  "key46": "43MBd6CpinPr2zBtchRr3VgNhFpSXE3D4ujwq8hHUSYbFVAUH1gWkSKxVYSKXyyvEKFNUCvvmb7RPzTBnRNS7MVf",
  "key47": "5B6ob5B571BENSvxAC2EACBwtGZccUm2mt4NH9v97CedT9JMvzkMb6Wtm3hJJkQiKgZgNrtKRHrWtUYS3BKK5CiT",
  "key48": "44PG8FnYpmq1pcWhu6ESrjCt1JqroMhgEfzmPPLuygzhri4P1vMGSU4gGpSwtYytoUnHEvckyBgL2Q1xdvDg7Dpo",
  "key49": "XHY2PJ8akDUFsRoUTGDBQ3vUR1PmAMVRhPPdAY34nSJVLiBXTUDdggaEL92W8yQfPho9UaNJhSwFee9cJjK3ZCd"
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
