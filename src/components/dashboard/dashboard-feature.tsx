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
    "VRbrQxARhtz9jQEjCVpKdPcoyNByFrkdoseiXPutQdMqmRXwsQqt1KtnGze1jCC4xdZcTC9iobwvsHvfoVW3nj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEz41rHVwu6Dnk3A4v3W8m9XBM5udQMbGDhQP2weSmnLUHjynDtUdWYi2tuUBS2RkqiMt169rcVvbqokeFHXYE7",
  "key1": "44rDXmAKspPThHPjpQDKqLUi9x9NRTh9246dvU7G1Hxhed9jUW2eP8PrKNhzxtAEdNSKdtmjSVA8ELAfkBfWE9Fs",
  "key2": "3UGPMPDT9ybeFCKzbzzcp2nsmeZgcV1b2ijd1heHzAVds4NawrihGaGoFVJMhc8h4UfL7q5B4FsdL2GyMpb4oJwv",
  "key3": "5hQPdQZ8pX3g6NdYQSTrb5GLgwNRiXjE1SnpkezCbifYMWsxkHu2RefthRD2XjSoqEbxjtoVEog7nJHHY1o4cY4L",
  "key4": "2dQ4WsyWfh1Byr69oseP62LUwkwE8SGaw4SFvrdNqsjKG9LpUa5WeERaH8TnrMjFzjR8vr2gkd6sJfCsbpzgZrh5",
  "key5": "2fBToaS1iRpXwu7huJefYBCc3KcLg36552Sz7vyyADWDUgBJ3dmyH4YKNMvLEvmEJ4KSmsBSWQ73bb3JT2RSoE6Y",
  "key6": "k6gUdvk4xGfMqQX42VAtULkZrTUEGKiFeSjSR6h2Hix99qfCdKopgcphVUbiEDB5ipCKxwhTjGNTaV5U9GScXzN",
  "key7": "3fXJzvEyAi4Aw9BpA6hLLHH2SrF2QsJ67gZMSTkohULaJkNMxVxEd2JV2yBHbQCLNmDbBmn3xkw8e41xkdPtLE8B",
  "key8": "5ncZ5qefDv2qZ5FmsGJrXGy4f7a5jCqxaSMCVGeR9CZkA7TP9Zhjv1WWj2Vwx8haFcgxEqUFcRW3fenBBMMx6aaV",
  "key9": "2mHfDRwVDdjhSyYZM6mV6UKjM6i2S8QuWBpBXYaYyM6CCEtyJoipFk7BRQCJeZuMfesV4Rg8VoMJXr5qkgg9Hjbo",
  "key10": "Z7XKZxzY4V7CJcaqxWjDCv7ddS2Pv7UEtacEANZ3AboeQaN1FafxGuwiUYTwVSf3kMqyRux3yTvNPfZ1SEBaaMq",
  "key11": "VfaectyPeruPHMfQCi1At3975reHyjq9YuVPPKyvYHYEn2xRTRqV6LnpEVEBEhw75d3qFoK7gQ1yjt4Hn6evcPn",
  "key12": "3bbAh1xNiKjJN5gVzLgJLJVAnMuj7QQS7JTkK2xP926YJL13tEj94GLfzqZ4g5A9HTVmN9bD6e22KyJjkk7csshe",
  "key13": "3P6seikQERFgiXXNQomw9scYsSexo7qyUQ3xPe3bbHbTG2jWdK3C8NoqXDWd7CrCkQxguG7nxwq8penFozwpU2mv",
  "key14": "4BJLDbZ68DvxzrYuSpeu2HebRYXHu8A5k38xjVMUYRnPDhVhT46SqMeFT78MWguEGt83bcHm1unaAHupJF5Hk6jW",
  "key15": "29htu3r1WFnzdejzYiCsnh7sUyyNDY1EiDwny6EJiPQhD6x4z2LkvtCmR1MjYfysgG6JRBNfUoJqgwX7SxvcUpWB",
  "key16": "2aqN6Su4wyNup8gJ5ABYSwu6Bn4KtWri1qkVHdrz5LiTWZzmXGwSwwFLh3JXH7QaxLccLf9Ygkmqi66GvYgrww2n",
  "key17": "5vY5AZhxiqDifPoewkukV1Bm2t3DViq8tmUa3UcJUpf88Go94ZxYDfcdijxhfartyBWQu46WexGSdkzAziCfm257",
  "key18": "2ooAxNMHLUxKzD47zozM8XNeGrV2CKRnLgJSQcRhNbcABQkGKozq2DTusDvfLkUVrKiq7WPN9XChMJ9wozwdq63h",
  "key19": "484376GrWst5FfQpQBWPUEAyFjK6hD3Eax3RC3ou7ngTLZgVUttSqbr7EAwK2Wi6wSFrwHHZHKDeF4CTFqUoWTpx",
  "key20": "5VFVdUK9A8Z2iapWuJeePs4jZvKmL8eX1d64nYRKPhZCJcg4fpRPQiSYMtQ2ghNoFbs3AhDvRLYFvWwFJEtbTtZR",
  "key21": "2KDeSjDJR9UjD9J4qugMVzLjUvGCCDZe7vKeeVnCgbYiRsvMpKkGdXFMY6spyyriVZ8HUJTt1tiCAKoDfSCma8kk",
  "key22": "5qkvbyGVM2Gbrpr34oreTspsnwEtvJdhkPhCEkXZ1UoQ8zo7ukR6oL1JQYE6iNWfAvyABqxYSxUEXARdReLsBYVu",
  "key23": "XSSTfnwRXTsahp3h9bKM3Vhwjrg3Bpmsr9VnGhJcPkXVKGw2r7yQGNhYsLA4q4YJRzcjkCth9oyRN8U9CcdhgDs",
  "key24": "3sQvoYtqx6YzvPELcfvV7ZmuvutZv3Tp8V7oYtznAnEjXym4bBuiRnPQjpxxXNMERiYfPxQ2q75RQQYFdYydeMKU",
  "key25": "6gQVyG9xpMYnh4fWyjFanoB3UDCoLhpXaKFUVDuRiLUJQAtj1KnUaZ3FyzYTtMMdM24uEpQDtnej1n5QsUHyyqH",
  "key26": "365j5Yy8R63UTmm4KeabjyQUSiyPzn3fUe6xSiipBnjTetbd1zta7XawtF9rjppZdVfqjKg5BFMccCWcBLDSV9s6",
  "key27": "3udetL7djuxPhKtfr67mNgQkqskD35naeoa2py9kxcf6PqkT7Kgvd1Xo8aAQ56HMmmNjN35WXF1N2P75995WzTfy",
  "key28": "ww5ixWZw3rXbjsYmL3neHS6UuxcnftP16SfBeskMasmFr3WaWWFfu47VmZKzN3AGE5CqbbEDu1tpbHobrQS6zPE",
  "key29": "34bcZSpAduoXLEf9uFXuJCcZPhG5pH33xakCmzBfPxdbTH9nQtvCa46vtax3Wrud1rr6tk7vwqaXFpFxwTnbe7Zv",
  "key30": "33mYN6xaZm7fhr5FFRMo8G9vbU3q2UzVaSYQS95ebQj7s4XLozzNFZ4cAJAWvHCgV1Yd6LWq9JUTzYvKqzh8B4qq",
  "key31": "bxyZvPeokCS7KRRT1UDhtsUHo8BPaRMedGRQZwfYngFcEMTUTopLax3hwE949xJsau945GqCywhcrMRQL9ZaLRv",
  "key32": "XPFgPqMBzLHDhua54rncCxHTdX5nQUB5gFRsWhbREz1Gh7mqrj1zrCPFj2Rj7SsQyu9BCG6fuj4w2tpcMMopAyk",
  "key33": "4kJMmSUcHBdnjcEoMhgaDFeYGP4YZgXucjz8o34vizkg7FL2at2cC71Wws149SKemJLpr2aCoUxaogX5Yq3TZWgi",
  "key34": "2ZkTdDaEymsqRujaJ8s3x5jXckEZiy2HwfLdYm1aJWHV4VYV6v1Ym4UJ4wJXnmHZpeJzQvmq6sxQhUQkKUSvXiqD",
  "key35": "wMKxBCZDR8T8wJQutWTmj7LzWs97gWxP22ygMSjGUW7xKD7ze7qSfraPBRBMBccqbw1b9qjAgtCiDCWLz1ALAFW",
  "key36": "3ACpMu97Q5hJnUDdwQ6cZJmcQvRX54KNwDtkvXW8cdkXjYKacZM6aTsHSptywUb3xgcbVaPcGDbpr9pSzTr5b1oN",
  "key37": "2s2hLYRHPs2Ee6arx1L6jP62fXkMbBdk5vFjtAfu4Lx4RQKwbCL1zqLGz1XCjaRm5BN5RS365FfkDPpqrWgrf1dF",
  "key38": "4pgfZoT12r8t2JfYrcZRLT372LTc1Cj9y2Ff1np7nJturNMaAAttW2HkceBA2aGbgqVczrA2uc1qAWLFK1ov5caz",
  "key39": "4pVRMsd96yUu4WsTpTrxMZEyGAAi8XZd2g7vzvvkiK6RhcxQLx6C9cFt974bBAXT55SUQvSbWdUrN86XBueHHoeF",
  "key40": "3in2eCcjrEV7fSP9tzHBpswe7U5MLeeA5P1UH4SpkUgm21tSBLKEyTpK6t1C8CvG2jEH7XHTaVq8ki5wPcsA8cqR",
  "key41": "5BAKa6663WLBcooziC8YJtbvci9yVYqKHuN4kRWzeBrUA7JKcGeN3Ti2snHgEJiZ4X31d2DWQN6YKE1Napbc1hxs",
  "key42": "5VNNNFmAcKWKuT1uacmePiYPRSCN4GkJFEtY79hoQhx3LVSUiPw3w91T1p22vwiDkiLjoVuvTvqTmVGKyQ8wJVLY",
  "key43": "5cZcswjR8uYutFZXaBSapasz2PmKvzJLqz7RsZ6BcpetJASkL4sachr9x4LGcvJE6FWnXfSpLrcMchz6Z4s1EXj2",
  "key44": "3e2SvHbyP7GLYHkBiooTM8ARJ1XetaCjcp7Tndkon4Rw7jGYZVPvQnA7d7bcWQjc9P3JvTDUMZDx7Hui76Au2P3X",
  "key45": "5wAW3roBpsHwiX5CTvABx7nyzL2HszvKH6UG98eYco75Wg4bHs3xAfUQChHUJNrgDAtsECMpzPjSPwkVV6nLQYy8",
  "key46": "3ahkiA2qhnzQkB2CH7dG2tVAxPmyArsrXyaE1wrZNrReY4yrURVGrcbAPnKJfBf4Pa7v6nGVmbgKopKgJTFyMTWa",
  "key47": "5dsPP8wif9QVC3N14Xc6gsfrvdnFh94aYJRdjYV8fxdB1hEVP2Nz8RbnXi44se9uwA493yDTUMS5Vt5Xk5Wo3q1T",
  "key48": "2dy1GQ7vPUN9hAVcfdcEFKZbyiKpNtsv4MhQsz9WrvssiGAjY9dJGk3f79QVjbyekHbVmCqvVCYFgsUJnjiCciuh",
  "key49": "3iEA8THjPZBK2z8qyTLZYgLxdRQBCaNHqHPuS2fwmaNJoPB428cF6JYjYNRHYVta1aQn5WCXFCWcPzo7tjdV3A4B"
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
