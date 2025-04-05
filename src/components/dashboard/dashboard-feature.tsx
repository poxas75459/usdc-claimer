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
    "2zdzYGWiNQd6wQMk19GuebAG5qzheUgqmchMKNwGbnkSCjeCT9dY39mWPoWPPvjY8BaigJn4Le1HZp1prS2Lx3q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqk8MqWwLh3T2NP3XBU7iSmtD9TA77MhbCa2MUUAwGQX3mpHLKAEaVcqkQEf8toNxih14MFFnRryExCgdmmXDAK",
  "key1": "5V5m5vzHDiRYw7nEGY9Su2g3aHPyY2VMGJedHF5KpgTmgDfZvcGVzkGJEejkyVhXeMngRoxrZafQX5tfnMwoxomA",
  "key2": "5a1RN1uAUUyXx2GVs9h38R6QRdoU7BUGXQNyagkypUSQ9hLmhcRqGC2ZKBY2BFUBxxsKbUrN8ruCsmEsttpNcQg3",
  "key3": "5xqdKRAvkMzP7TwyEQmAiay8HBJXJm2dTuBacoM3boGXke9k4WBBGfZbPToSCCpKQ7LRb7KKSbttiQWTdgnXL89t",
  "key4": "uBRhjCzDddeP42m7SHFDc8pRzzV5i3a4XAuXbqyaX4iykuXXqYqhCYADhYF9ETkjqemqwLqvPLybiquDHPKQvTe",
  "key5": "3jFxR1541Ht83UAANmrGqQaxZmkt8MPLxBvr54z2setbRzy7UX3mKwHZsyM9e6THJTP6FjA56g4o7FQmspSTZbFB",
  "key6": "2FeHsrcyKnwKwNFxxAGVykcH5ofuswV668TDg2YHhLy6hfdA5UdFbhzBrfcWg2gj56JB5AuBqgPPGh9eVw2oEymC",
  "key7": "2kHZYzE9bBHZGhU7Mt7t9ZK8BPHE3nV1Kkd8MZ4QFrQoGHiq5GpTucewajqhwuF61ytox2MxtiAL9arQHSjyNnEP",
  "key8": "2ZQc1Tecai6qj7VC29wi1noe5Wm6q3mAUit3tEerMCFMS6GqEKmKy7qceBrp9u6dyZxWojKs2MvcKNqSj32ufbPV",
  "key9": "6QKhNRPNBCbHHecVohWKhmmDJWZMvh4XebtigeuWJCgs4sAWCLeboEMTLkvGhxPGQ5YFVeSprLA5kTCDM7rNikx",
  "key10": "5vnnDvZtrHWhk4djHt4FuKqgyFNbniysqjw3MFVsw9y2Ztpoe5SBP9drkUhtvMYoS5VLfACSZzMkYEePXG9NMM6R",
  "key11": "37mMpawAgo1khWUNntLembg1SLXmuoWPfcN5qY61WY2t82sFoTSNnT8JWaYwZJFQgu42Lwn8xQaCEZt4tzUaTKWo",
  "key12": "2XLg13xXfna7PCdtGpvtBrSZ3mK18BU93WXXXYRyhSx8qSRkajxxwsuNe4ERv3P97AyhhBVR8Gud5t4XxjR52V2W",
  "key13": "2fwHfzudLQMo2ea9AenRyscENPFWiHSMKziDy1rVxWLq3wCYES7MgxFDUoWRghZfnrxd6BA91E2cwQiwg6g6ppcx",
  "key14": "3ZaQ6bfi4zzxR2KoEVk8kfzpdCQrxqNA5r6wQY93F3P8SBNSVsLRGAHHFEz24Gi16XoWjBioWY2Sw8yfbkbgepXW",
  "key15": "59uePkcv1YxomnjhdpBGpW6ZmwXSi57cDvHZLz1uuhwYxHHQtATQxA7PfmjDkyi74LXu43vWXtN8ggnDZSSTF17B",
  "key16": "4FwuJHpW2VqLhkJA69aWTdrz3LSY4deYusvtQ76D28NNCcSfHJepU4Tc31JfTsJ92T8y3B9PFYpWtUmKBPXpzFxt",
  "key17": "5vhhXCZrAN1jszJ9aAGUf1esooCVJVviCdr1X98sj2YM4RmK9PwoZRphxV45uQ8i8n4h7LkijyRDTG3nYeyvZzPc",
  "key18": "31xFqxpeUY4atVtAjYZmf73qMiWCKSmmzxvP318hha6QZKtmvu7y46sL5MWGPCJXqbFqEVkpeWKuKtnJJe7xu9Kf",
  "key19": "ehWcxUzYL2sm8uZTzQ224KsjYsu4GnKzn5K6RF3xCcEim7ZesqA28XjpWf2hwQRu9GeDeDX8fsSht3PJz23uYwR",
  "key20": "23qTtFCFXypEiPA4j74jPz41gS9xbUdWYdHNxjd17TT8hriMdvwk9U3efRBoDqgFCA6QNUMWJhwvk1EPpJcJrh2D",
  "key21": "EYxd5Hehc6EqP2itt65tkSGPMWeZdaZEross659ap9Hnq7ENdbtyfd5jZBYXp5QKz1iMjixpwC6BADpdWR4NW5u",
  "key22": "23p1sTFnm7ZWmjGzRnEvm9KLPxBfXM7NZLneZm1aW5JteUaKSQhf3hvCWr4J1ETkTLR9xL23Vziz6Cirxf5ababj",
  "key23": "3TjXUnR7bbqD2VPso7PbBhjXxVfrFYMDMbUkduQKt4G2Ni61iz7THhxC2pw6QDdDDPXpFKLHBqKUzoHPinkhckDK",
  "key24": "5KwzDxfJ2sEn8VJ8k5VpcLAQc9BxrsVfeC49Xs4Di7RpDP1ms6EofZ7ZfTGe5tqSfXyLWwcDBhsMLvZuPoVDBBuB",
  "key25": "XcgchpSq21q83heGLa3F7TCiNkr9eLEdJTfBdqdtk3jsC5Txbcq6byrovtDLXGUcs86ZFb6nvhKtxwhc6oHaDF2",
  "key26": "oqtt6MdwnYtde5wSqoefwZtoxf49d48WX11ziCoxkRD7yjvVZw8uC3EPZ1daA4upxgeqN42Gtghqd6jVKe3v629",
  "key27": "2fUzhRLhCmbjt3XZZGu1HzbtSnxYGaVVAnJ4rryAuit5s6HhSiAnEygPAv1i71eh7pMi9jMLvkhRhMmnK3tZrsA1",
  "key28": "3ophWFyt84VKNCzf8riQhPmw6fMFwdHTpA5rp1U7oMvbpC2LD32869NoCs8echdQw2L2rP65ZJiZYhM9oLGKhTiC",
  "key29": "5BPridVEMQXPttLhsCoTQ1Thm51DRB1GLGLV47cK1MuvXXjyd4fvE2hc5HXMdYq4EdVvg28GwQSoiJr6UZZ8TQvd",
  "key30": "5mLMfFie7c6Pb2oqDm1aitx7tFqqf68ZBDVQTF2n1bTMr99YSA47VScdq4duSycPVYQbLsQeddFZirhhxHAa7oLB",
  "key31": "4uXoK6edQLuBd1fDtnnTMyohjez6ArJGvUiWtJ7kbQGGCfqAqLahNsSgK7PPtU4ovZGN1dQMiaNvsM4gDHzYfzCJ",
  "key32": "36e4di1M7ytpi4GWpqktVm2mcMHN9h81JBw41GBrnaQHyoPCeETZ8uAKGCuNiM8LU8Dqf18615yGgQNcW3Kuj2Mt",
  "key33": "YKAzBHuei4zFKVCeZzL4iSsHgTjgKrUPSakniA4q74eaLFrAKtg5dQ6sj7bR23p3wtLDqB6fv4wjbbejMmFYThR",
  "key34": "2Dhf3YjJ31HaSKo9PfPHd4zySLZky8tMXeGR6Er6azxr4BXbQUyhMxDP5zEsQ8fQujVWfkVT5LpfuMnmVDcWUrWT",
  "key35": "2VX15BMeYFj2ksFJgtXdEtpYmiK4w6wNUZ7EpkuccQQiYkt2FfsFP64aC84HQLM5GxTihSpgnGQD5tdk6XoHEqnh",
  "key36": "4GxGY3vRayyuostUfpKp8Y12px3zdbQHoXXzTzCL7MtUsupKTMzANrrpWJQuHv43SN5igXH2DVTEcmMkepowHU4q",
  "key37": "2YMiiWUtxDkeoy9KWZx35innRdKJZjgnMMDg1AriSghtJXuo9qyL9BJzSJnLYRRTVeKk864CDjAnUn4SrDBFcRP4",
  "key38": "3fiF5SKaQQAKWDASHyp7219mVa4SmJw83EBVMk61w1pKu8BEC5Wz9v47NJ4Eaz4K2tga5LG29nq7HnyyENcSvFXx",
  "key39": "2a6yeoFhg464kM7Vshg1kivTTG1wvyCgy4eFxe3wemdcc7Q1dVVLgfcwKQdSiTY7br6QuQqL3BJ7ujAyK82bjgfM",
  "key40": "2TwbYSP39SsndsQsa2KWuCuh8Q1YrtSHmxakfH2sUUWLpQx4ob1oWDBy5F7dYisnAzq2eJTSnuvQPNhctBJTxUxU",
  "key41": "4AMzB42MjVL3GxxWRAwL3Bk2m2si4QQK9WekVonqnFnpfBejV6RXzhd4HUfhz9x1GyH8HLMUQwpxC1Jc3f5ZGLku",
  "key42": "33VrC1RyGtJ25GUMMR4k5Zd4kogELxMyZQFrqssihf8DDqGifwX8M4j9Tw2pUUYMhUcYaK1GJyHqo3jM3L1GNmfw",
  "key43": "2Z1EJ1Eas54vgd8bXYRcSBRjQprQhuijLH2t3k5UnVteSbFFYC4Mk7uxBqEhkBXUHV7vZd78eFrE4HEVTRCakfvR"
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
