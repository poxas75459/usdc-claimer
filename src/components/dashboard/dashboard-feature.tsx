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
    "2VkEeiX3qMPzQBFu7bBBwyZQDkspLEuhRUcDaezyTMTNpGZvrSdn2dsCaBzhiAm6aihmhv3MiW6Qps3gXd2nELKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxJf1wco93ZzGZL9DK8bZqT6u7VTVRh4c1UaF1anrhX2RYMShYSnbb98cSSyDyLsrZK7kDWk1tSimChkTvsBTm4",
  "key1": "3989BuimUr7uchY2jhEHYzmXyofV2qA4fxoxS2LVRLd7zHjXPidHfNGZKdmofm6FPgDTXH1GSMJSKY8CeksUAd89",
  "key2": "53yX5wtkAdvUCrvnzn4Txs35komJ2VLjtTcpd18gckvSHAUySeGnAL7y2oUNg5aunVwLLUUyMiv5X3CPFmktpMMm",
  "key3": "4yJoGVAqH3LkFizDcdHdUxfnxkAgrV6gG8t1SikEtZqJGkexaMhkMLi9EdGbfJih1A3FGUULcp76SRjcS9ZPmi7e",
  "key4": "24KUvaJnU7yUnsUP1jMJyUWmnchVUF19bzscXssJH5UH1LNeVn7A3UVQurmkL7j7bdCV3MaUc4ivAy1XC7VxKsLz",
  "key5": "3D3s7C9bMFDKBPpWqPzrCabfdc6sBy5HvVm7FVUD2pWkp3GTk59kxwJfqQkuGzcJGTGDvu7SMhnRuE2V632Mtmat",
  "key6": "DdXhnQd2sqeQp54HwCE6EwmshrLoG2Erq2bx2n6Ei7FZYf163waRfkJFTWuyC95SrYLhty1i1t1RNf3Xnsm3tZW",
  "key7": "5py1At6xeW6A4FLwPhMAG8RACPp317W6cc7UATQPBK8pAP3ynwAU64CncTfaBrP7SPsVhj8XAzXH3saH5k1ehS5S",
  "key8": "CsW9NPkbkN2ANByqp42cMywNh8iQFTrEvPvhLDFvekuB21L8mfR6TkZ9Sub83987HyL91GTCqUsEyEinvJYxeLT",
  "key9": "46BPf6jaMwCGXcXUsESNoGqxL6ZBeZnDYk6NgyzSat6twu2pdhNnbfKc3Xci9CQueSmQKb67P6guDeKH59EBNH6P",
  "key10": "48BGvTFtSMPxymC4kezxR4fqvAyr8pBxAiNovK1PcQECdUN2N47wyxQDa1Aw9sTM7QV9Zwo4ar62BQ1RXrtYYoc7",
  "key11": "2bsdsxswuabQtn6K4qNrt8Ne4ShyxE1XXuXxzGYa93CXwJQciVdN4t8QSQUFiC8ALejoDNPgqQLiP3vQDTZgV6VT",
  "key12": "4QYYwZbuyfnWcvTxDmDguvipLvWZDsonKYVg7SQJV8FasikYy6wU1qnWSaya3C8utfvAo9wJrDr6afSgoSKogNJY",
  "key13": "ZAy1uDHav26nre25B4iKiihvmeKdRsKyBhy4c5b3Yw4dAxHW2teuyHeFwBWmNf6P67ccBMceCBvJRzViUML49SQ",
  "key14": "31uGpoyUBTFRR3KyAXjKufvcYbksLymm9gcPNZWAPeU2eksYgpoYWcNXTv3wk4TNNMfzfhYwptcipuWmDHRuTLRj",
  "key15": "5713XdjtBnhqHp8gyVyFoWjipubN7RGrbHpXtpBu7SeX7yoA2u3gaW31cPNLTrKpio43eXs1F1sLWzTyJMBnCw5c",
  "key16": "59kH9ugmo3muhbD2kxWDwdQyFhdbHfLAjvpyt5W8YwvfGes9AJ2bggqevdc4a2P4NSLUVuy2AShjCkwpHZVJWycU",
  "key17": "5XXiK8ZhYcNE7zw1AnF4JKRyYsERYpuFULR4vfrQRtp73gpMoTvn3sj4EmYWUPNenPgvjZRwhBiQnHHJ5R3neP5M",
  "key18": "4qBPcqB1m6ttTixgTUCUwMXtG1XtiFMuvdabXdLMk6MkKFz2bYzLdByXcC5Q8R3hds9bdbHp1juv6TXEQBnDhp5q",
  "key19": "rF6hq1GDDPWpbcyvx1VGnHLzkZpFQ7DrzM6PoAexADh3G1FikZfDhhqY3DzXqCpxvEVx3EfmfL3qRwmJYkWnoFN",
  "key20": "35JPJVv6TiwfFAtFma4DHUMqJRXB8yhc5tpSyiigQETpznP7cfTkHgZZqbj2GweJQTtMVgcgtsoDpyzHXcAum4Sc",
  "key21": "5qkeK11W7UeyBhWhTTzjpSAmuL6x9DaCGze8SfjjJ63eBQ6s894vmSDEbnjaWt9eeRVcgkLGthTSu9ugQ3kuXY6y",
  "key22": "67gRDVtvXZQMqR44RLyvgKmDBHfZvVbvMqTn4k3vsgar5212RmMC2FWk2S25Fw2euEjW55P11gUoPyR6vD77Hirw",
  "key23": "ZwxHQ16u7suMo6QK1yfwmNk6a4M4FBMnoFd3cAre8Z3eZyzs4Pf7t1t9n38xVo58yuh6uuZhoZyDTT3199UKgHh",
  "key24": "4cz6ydcprgeEwtaFTbwDz3Y3pFrgDYn86H6DgGMgGL1prF9m1A8bysXfuEqSJ3qPahyY5rpoACqkGBn8Mna3YeKs",
  "key25": "QXBFRR4QBTAXGgLPNiPeYhLVRBWY3VTLEeqXBHfqCccrFPiHtc3vnF4nre4EMKcGPEUqiEdb73cSY4tspN9D2AB",
  "key26": "57wca5qqa6heiwcoFGpgYhsqbTDPsSaLG99Bsd3Ndv2kpamJ4oBTRGgDfS8jaJpm8ehw5BkX4drAFVTNyReEogh3",
  "key27": "66qMNqbF864MRaF3y85pjUQk2dkaVftFxSS1PGF8LYjvDzsUH7Wvh7zEbP3KE6XVRfBpmUayJpFofk3pxAHPaama",
  "key28": "4B74LCoALKvtP93JugvSadj4xwVtr4GyxdCmCSSU4oL1d8wTKRVC8QsQGkPwpexka2pagdWuTujNopDFqPUEavfF",
  "key29": "3HG1jDrLTqrQWCTLKw96zurd5HKZMd1RKQwTHCB49FLubhRjzJeuQA1aqsKB1dFy49eTjnAwdissdGfeqACg12nw"
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
