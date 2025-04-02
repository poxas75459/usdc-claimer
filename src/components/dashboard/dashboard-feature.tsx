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
    "4A38bvmbdqp86PUwJ2abGohqugKBn6ZEzVV2ZKjkzHm8kiSsXpLyYQGEiRmuQKAV6AgYJQENJsRG3foLM6WJZZSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fzQQ1Eg8WHZjKwTJEf7S9p4ik7tUtW5EcVJxCiJZmgHayZ5YVcu4f1wYZ1n6JTJv61AXxjGtExoqu671dotg26q",
  "key1": "3pJHKoVfxMmiWZv3HMujYScmouVgSbRhY2naBXQSdyHneS2LFKbrZbcxvSkyEzjJS7pmAhiu98XMHzprwMNn4Dtb",
  "key2": "ntQbXCi5ojgQMAMnsygMAti4w1LSiVAkKr42MxdUJiCydgug6sGATiMP9CQtByA7oPDr8aWUHKxxjvbocdJBU2R",
  "key3": "K8nb1wMeP31V356JRzRtB5LMPCaA2MmLGJFkG95Wi1R49Ua9NTPc8nNajHp7eoDehuEEBDwMDAPDQm4nJMBHCDL",
  "key4": "4WBsc3sWM5HZWM6bHkKkUC6sW3WuMkMNvXzS3k5BwGRTdqhbzwGhhqYTyCmSHKht6emJpStozswYviGAWHQL61di",
  "key5": "3QhtCcECoWdsVCiXuk8BMfT81ZxFE7BNQBpcqzYFqoUPk22tSQGZhYN4brMxbEt7brKZGgkijBuskD7fGF6hH6xW",
  "key6": "5ngRhTHMBXbPnMqKWaJnDmxBsCEq3ch83kD4PQWF4pTpdv7xDwJqqpt85xYPnAPpd6Hi1ZP727q4i6E2GcHX41n8",
  "key7": "4fDTuPdGZTcQDspeuhmm7C8TPvSUJmmwQE5agXi4o2E6a91CS6H12prUNNUkcgeRU7yheW7NP8woUBd9rxxzWa3Q",
  "key8": "3prr4Ury3wBaRuyNzyBtUBN2xKuv32VhxHEUogwDfzunx46xSTwswSNYDKFn79ZpQonKUbpf22QaZiZDsmvHuWiv",
  "key9": "4pvr6Er4fERcW57FRu2bvCs1ogiUd2ubnJJkBVVKAKTvM4dFFbYx3UVRBgRGQvF5kUxjUxmd5wzCZte7pYYNxTxL",
  "key10": "2FtAqPhjaqc3Yg5Zr24mHPTd2Wv3vvbkYLuaAvj1vt47nBNFoTEpBHmv73txxhxvZF4b92suupnE5iuj8X86P5MF",
  "key11": "5zZUpS1KwbtiqVbzzqTbMQuKH6DWcPrfn7ymDa7MVB7te7jf1r6WyX6jDhh3Nw9LC2U57G43V24R6NSKA2CYNpJB",
  "key12": "2PkqX2YEzwVx7SqEQUrJVMUAV88PcVBzCByH1dzf6HHeXFBLVur1aXAD3xdvRy8i8YAqdr2U4h78cvSCNiV4ddCf",
  "key13": "4p8XTiPGL9k6N71u2uijpPrSx6VUS3dSgLLhwNqkpepurrhDBjkGptrG3HUFxLDVbxstE786c92z7DUY1TN82VUL",
  "key14": "4io4V9icCcGRvFTR1KfdgPpgVRC9i17mu4gZvcq6AY8U17kzgpD32a8Tq8zvPZJeU5ghFewCnCmHVC5b7ohJppdx",
  "key15": "3MqKRVM4T9ssMuSXvdp49APqFoqrToMtzxgZsjfGNgBGYrznofiB6UdgWKoYMjGdA3RnKibor2JuUSfbB3hiXyfb",
  "key16": "3GKdXU1Nsqr3pQS8KufB1HEjemrigLvPRA3oPEdUFkkhd4SfLP6xzYrK3LToHR715zkitZoPT6xgBvy6UnKcksVJ",
  "key17": "4gbmasiSWhAYjAkQxVVDpqs3QumcrsN3x8NY9fTJ14wwKbZmJxWPW7HPmPdzVzZ64Gv4Kfnk3F9aBhda4wWcUmUP",
  "key18": "yu69dUbhXhhgUyKPgoT9hEwJMVz1dZc3jcja6t4cEYH8sZ5ycXnb7arUyS4vqHDrKLFBGC3pJDCkHdALVdNt3ez",
  "key19": "wTdNqDzaxnEkvDXYoC8461obqRQatKAA7Z13FHPzEnyRy27XXff44YqqCd3hJeFPEbinsj6CKbr4UpeAEjFGVY7",
  "key20": "3VwqYEVMSfdDhJPquhinKEfn74GRuqP1vxCbjhPa98187HjnwPnsDGUiG8NLZg46ojbbTqpkeUYWXdLq6YfQHLG3",
  "key21": "2UEACGCx7Sfv9Ng4ahJgxx9CBHFBBQF3kj2sLzYsymePf1Jjuk4JUXV73dwiCau3CeJuF4ur3Bmties26XN7D1jk",
  "key22": "3VthWBSceBg4Kj6fq2WgU7RtXwghobumgMXuk3KEsgj5WTDGNWcbDyNop6QnhhqmKV37uY4A1qu6deCFU2tXuxRD",
  "key23": "5PvjHzbbWrx6bN6xQoHV59SQkRUUTmyS8g67M1gXxqgfDonGwVxG6jUtia9cn4mQxzguvQdkkPUv4t9H2v3NMeRD",
  "key24": "5RzbyV5vTB2HNo558YqtDNADMe1pLbe3CQW1hgXe2PK8XgXAPG52m81asHkhQDErZ9Nt6dYffbfaPHw2HTV7xDNz",
  "key25": "49QmCBwJaJLFy8Ksh2QctWFASFYyhCHZkZY5ASno6sjmyw6ADQkYM59mjP9J68uteEJ4kzPwVfsS4KWCWBv95HkK",
  "key26": "2i38ySysvnVbbwyPuJaQwQiKqWhcYjGt7J39GcCnNFUMMjUNscDjjGYxjQAzomNxsmtN8C6kD8gqr3d9NwwdBwe1",
  "key27": "1HL7337si8TYe71cBGgoTyM2ns8ifaWowzRXeid7238FHGT7oUVSpJWjAcpgJszCRoTC2D7a9AQKrsmUgivEXpV",
  "key28": "3v2BwgGFYhYAbTA7VX6zgYFGZJBVZnavTp4fDejgCWtLoUG6LjXpNRmsSSWNCMBdt7DPV85rML6KskejWoovUpba"
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
