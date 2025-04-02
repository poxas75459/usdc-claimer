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
    "3qfJtfCE4HToxhTqMWkZqa1GtwSYrkTP9vPXFmKL3XBVT7D75QxBuXp9ojC1JT1XCDPxqUpfoQBYZ8spEY8Zk8qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w4EpPhLx7A6vmoUmrv6sd4e5YNVU2bmCi6dcGrG4JHmsbfSxFNRQzv3T3nZut1KoY3dviHpqpJXiESTLACLCcud",
  "key1": "3XhqtdsSR6FMASndRub2DknzgvsWpPVgVoEwd3fsgbfasZWop1YBAkoDoW6HqU7RpkbAwTD1dqpMs7HQVAiHaEfF",
  "key2": "38FSMcJXre9aAUqi7tftLSLR4fR9UeZLVecaL3GgFrnb6DaodiPQdbJDfDBNM7VFTdvre5RZJusKQUqZDAc3VoW3",
  "key3": "2GGD9q8AGi1y6EkxY6jJDoL8MtACSPCXCs8mFTbpgonHKCvKbfY9HorPqQ1vvAdMnNBT7hr2QN7AggdCdt9oRA98",
  "key4": "2ekCHB3mqG3BRpMcZbkK1Cxc1shZbzNaCUyPF5USkASESEpKLN1qbgmzPe56fKqG6V38Eo11DSnv4JTLpVY3xahV",
  "key5": "64GLhhebc8bG9Bzc8pjp84V2bTUQb3rgZu5DuUtwCQ8Hdxs4FRxkjbgBm4wwqLKyru3s7GXkmbi7zxTKqQJdBpa4",
  "key6": "vYg9xjCgWoXoBpwtZvFsQYXZwf9yQvHyzRuQNAo4PE7f8yQP4c24sRhFAm2GPhtNdhhWG2i4bEVVtgSgPPiuzsz",
  "key7": "63rzT4TKwngAQuLWpt4BmWdiFGHnKoLFkvoyMS5BDuF2XSE1RPzCGPihKrGj4PNjhxUe3e8rEreJa3FL9HHtafbV",
  "key8": "3Dn584QrvPBif41iUehB3exhczd1CBHQTZEKVrAYuNgMoaYxx1BQTZ46XFLBEyykiPxyTydHesYtiC2Xmba2ChxK",
  "key9": "65QnB91dCV46HZ13YeYZ24DrPXvgcN9xYWJa47AAndsLgcwnfKCLuBHzQLtqjA1TdtRhME5SGcYotxn8HZ74CZ68",
  "key10": "3Ph6Ve6bfbpHq3hUYqqmt9NHeXXdj7bSaPNEgbPWnH32MKKYCiW1auKuLEvNbkYDCyLVYY1Cb2jW6RRoiY8c4qeK",
  "key11": "5H9fw8yLKrWdSg2zstenauAHh9tkKtqziLmPjqjcDaZdZu4E2Ym5ictwBCVgdU2kHzjrvjF4wdkXemfTWodcLeyH",
  "key12": "4sgFFC5UyYHhtAYCSWtHoT2NsHMSk94B9hbwtZnDwj4N3L2jdQMqFcmu1TCu5kY6JAvrWsCdcKjwSNeAdYqorjcR",
  "key13": "suMwkmy7V3qbEKCW6ymGTd615GzDzsfrMXDZmtpQua5WyFuNaESXeci8mp1iGNcPC6HUChjnNMyEAN5NDXf4NLv",
  "key14": "322MW7TCDMjLy6FVA4srdebmWXrB8g1bC87RYMarehGC7vZdpqniV4sN6NH5fJjcGqdc6hNhywZX7VLDu8LmPiEz",
  "key15": "HPpN9EEy9Fkj5vFENrd1ea18dV629S9b9JGpW9mBXiCN2yxwKxTbYwMqUHsxw6GRA64fDuxuwBkPBG23tGwyJXE",
  "key16": "2bVaBuEEED9V3ardQX6SHpRna6P1LWQpuMQ6672NzS18vvkPWsyQUnDwENLsHEec2u77sPAxmmbL7Qn6WB3AsCsG",
  "key17": "32LP6CFKERYZfkUJXp8Q1UwJ72pxrr9z3myEyzUagnNyTPG7ySpzAZcQymzzNoMwzs5eRhyWfb4TbU8bAzdKwiW4",
  "key18": "8Lxfpf4n3xDW6oBPRAFNyFFouSkPgNrQrhQVMj5HX59hxeyDkcGMHSGmNC6M8N6dpgud4qfLMaeUAAf3w56BQAT",
  "key19": "3RuGSTTu3nmbY2Tw861z6cySNw1RKnznGs492raTi7h1b8xXFMXoFDLaPiZNFZWNUHWfTvCwuBU4aVPGUrtsa5Uq",
  "key20": "66QvDaHWWsugVoycSrqAQT9JL3SXcLRKjzvsrwGtKUF6k8kArthedtAfuPLMASru8gGqNZu1JJJnmux35nZ9WtuE",
  "key21": "67hkG7m35v2r96egPn1YLVBxTKfZTqUrGaTJMxKXdyDs6pnMJ3JxZRt1LmWmQomGsqKkc58t4jqi4KaPJdux8u5k",
  "key22": "5ouBMeQ77CixuvhbuV7QemVNwyaUDPao4ysGb8GT8g8zWJ98FbSMTbgdGRcStDqd8Bfr34A8FZmDUWAN2zv3tjSV",
  "key23": "2zx6NuTbM9fab1SBebbt38PrZvRaZPpiuw5SAjXeVn7Jy5GMjqFZVUW3i4psfY8uY3skkZkpQD8NgNnpUUhtawi6",
  "key24": "3GtosJWcDQm1x66zy5ZvFNLVte1v1DypdQsaatSRTFtwkyQogqAjmGZxhwj25KpuYpSudrxEhhZPXbg9j6FXxRw4",
  "key25": "Mv1uSYrTrauk72CsLKxCPcjMmvb32a5onoWTC7tsF1gqxLhKnCuoJXpzhVBmo1inW6b635efrn8A9YEAPbbvczH",
  "key26": "t2PEz6TD2VdR78NszbquSBfCML2KafF6rSDgcH8FoTuJG4AvX3VNYijGcm3N9YpS8n4ZCQtJJVKRVtWFV4qd1L9",
  "key27": "4UCmTiCPK72AoNiYHrwvxuYfSWdA8dMdKfk5SRdJt7BAMBLibSAWhaEVv4qeuWi7FMNJu9Q5C5nU3VaVBHgmC3oQ",
  "key28": "VoKK1eXYU31ZeaBqErcWp2CuQzMMZ1f56WRU7BZjis4cFjkJkWrrZi3FsKRctdTstPZoXw6Njde7a2yrpPM1uA2",
  "key29": "2s1PL8hMbbxrh8aHAwxBgFYcrqXrDdYq6JYAB7beeC9mnRt6ZZ2kABjBUczqof4xasm4c2H41hL8WWeGrciozDkx",
  "key30": "54XdQ2PNwpAy1d5d42VcEJxUb86wWtw28aDZNQqrkdCWCEvQY5qciH3WBgDbo1a1GP9XnGLWuwU1J7hz8VCesj28",
  "key31": "3LfS6LSKV44S1CD2y4o5VFdgJwpTXLA6CfdecbHCq9UH4raRgzcKfgczDji6FFiJRVHuPGaNnSnRnk4RZascrM1o",
  "key32": "4m93cKN3SgVncdwPtdXVV1P6GShkVPGYQXnAa3HUYhYE7ftozjsuPZ6RZzin7YxR8ymdcCcG9QN7kewLyigdGsEY",
  "key33": "48pwYQaM6HrBfUv1WpPhBSYiozwodgd6wvuh76WaYdptd9J27aDQcL9VQTqsTeaAcLtftMDGmEwnjbJg8X8EycLf",
  "key34": "4S1ma2fN6D53QFhzqYtmJ25ZNX4VK3Nf8spiuc71mQZohkKik4oGWpXfKhvZcCMi8fmQb2ZmyG1Ej8fPVQNayZu6",
  "key35": "3HWEi4W6CEp9GRX23ZzqfDcVADfkp14gw5Ar3SmsCvw3qCAfv3Kc2x8jqe1MDi8u32e6YK4nyzTcSXSqm4EDQf3a",
  "key36": "4WKLj5vBbxNHR1bFHK1iUd4xyCEX6fKD9sQsdbcYY5tk6L5b1ib5sfGAMDmijfDQuKDoriTZFbDoNKuHhRLAEdwc",
  "key37": "5A2bRSr1v4sqbr5u2UYsLyNizZqwhvuE83arLKLmyFDtTVwTj66jVPJ77SwSAzA6b3q4Xw25ZRQ649LQwZhqvjVq",
  "key38": "2ufEeSdR3k3GmmNaRCKyRJRii4k7GvsweD1y7r29HQDDuJu6kT5gbsN1kdGibb6NwYnvowjoKRWt7pmuS8VQ7SCK",
  "key39": "22zCF7Ejhc3zzTfM1pmAXpS39iTxzEBC9avXsJk18WSgi9dUWf32Ap9acSmS92NsoML5s4aetCTGunqXUCSzUGAR",
  "key40": "5gPBhmPnZJ8aeqY9nNSBhvRuH9MTJ4kvHoV8Gw4xmx4zqXYMniVZ3HshLiMbZad94zvcCWJ5Z57oQZcgfpjokRj"
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
