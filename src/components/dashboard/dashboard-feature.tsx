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
    "4rmpKBCzEPbdEmpoXbacULFL2UWcQMz9nA2GBwjr1MdFedMANZ8uxhNNThXQQ8Kr7CxEt38sjBLyPanLMon6UxmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqqqJtnPjJxXc9NH1gKihCQUQP57QPbrKAuhHsPxVsYJ6yEn8Yu1MAGCSFQMR351rnbR8M7w4vRDqKiFU3UinSy",
  "key1": "59hGbUoR8dRNVtwwaasV2rqZ6uiDU9nckVehHMXiGimcVmqsFAQirgW6L4quPb5T97fYyhuNLG7oUN5TrnwJXed9",
  "key2": "5gXSwmDwZ1iEaqmqmu19BQowV1435wwvPAxiWG3E7UsiXvhhfw2MzB4SaNtypCcS18YcjyL4GvnHo7bxGE6YsnPS",
  "key3": "5pQ5mxVh7AwX5sUe3dmpfG98R2Bzc9rqTBRtuDPXRaWmd4xuDtR7nbneqsfUV5A6fEhXM2Ejfyank4yLbeBK4H8R",
  "key4": "3hQ6pkGKCSxsvt1jyuDZrDUYQ4n5zUgEi4udAktZ3gAKDPrehtmAuJjunGLcr3YnzGogSHNkgSB2YBJGLaUvz1NH",
  "key5": "5NgVMvUi5cQwQHWs4ZAJV52EE5jW5ry7NVpheH24qviARGBnkiCvFzHGUrjWqvmkSXKP5rxrPxRmqpYsuU7KsT5L",
  "key6": "cxL9JZtg6tRaV8PJdKQyKGeTuFmVsuYqT24upn4sPXqRdU3buTFt7uwRu8x7Lebraca1PW4QaQTMvEn2tdGxN71",
  "key7": "5LuU7zUQcUCgR4GLUR5tKVzN3SvKdNrWdys38pkRuALpT2hUeQWcD6kvN2W2F9TzMtVSM6NB3V75ZKZAGBiM2JTG",
  "key8": "3KXt2vF542YVx5GoFCFaY68gDktmN36DZSJEfk764GdaWZi9ufpFvcSv1X822j2fLSXRbubh2rC4YEr1Mbq2ERPj",
  "key9": "5uftKWKGfHP71QFPQuG3LkcyKswkqybbv94YoQyhXD9qQHGwfPD62xUZx16Hp7vsGt4rZjn3WqFBvjxB55h7DM3",
  "key10": "4xt8c4bKzGToKdU7mGCw9pXQXz4pRwvWBedjr6UbMSmP7Wqk2q6rMaMC7kVf6AMHMwTXpGcgb6j7P1odVRqUPERa",
  "key11": "2JuQJbE9dgBzGsHvyHffCWwxYGWyLsRBt5DqYKfQXCqGbWbPv1mJjz1oNJnQh1jov5hBCVTR1wUfBrVvsmr8rBBR",
  "key12": "GCepx9XaxURFa2qFkAQFqED3DCGdTfWYhwLeAUq4VQnEDaWifXa4W5eR1bzyhGVdEkCgPo4rS4nvyVovtePbRwo",
  "key13": "41YsGPYVbvEw8pkahqRFt8GyJu19stoCR9UpohnE69Na3FUb1Es6Pccz6W8LCqZGUUY3j2FNHXXs3Ct7ayH56fyw",
  "key14": "4kY4aXJXNxq5GMDR4Y1ihpCLkMW1MjGErj4obmot8cgkfcRMa8JpP9JJh65J6VfNGBtEmSks7abrQLSyK9DuGuUY",
  "key15": "5n4h6pzSGmM2ymSqEBJTNfEmCaJCjb86UEdgqgT1ENcR2HbiMkEp2bu56LCytRjbDJYwjqTv88Hc4tAHtP3Jqeav",
  "key16": "4VszZUyuMyXvVAvfwTdU8amP7z2eoX6GmAkiFcLPHnwGgSufZYdrDKJP1ed7kxxqyv7F9y9r5u6Vm6jb7Yn27RqC",
  "key17": "3XjQ6yowg1fiosennofRyVj9zFhHAtadymH6n9cPUAaD4JzZJpPztgH8aTtDec2mTqvzKCaerPCXWR76Hw6QZzB5",
  "key18": "Js5UefwEKimhUHANK6cNvqJnFcZSWXHieAQRm5sT6jwGf2njs2M9cdZVCedc8Lv12yAe9UGCNCnVkuRDUuk5mzz",
  "key19": "4w5NMymW4T8ErrsxNxXPPxfME5rpp1FPWCHZkeNJ5Q6W7WPyDhr3SGjyz4iFFBwZYuebTvPhTyz7ZnqmV6tCftEj",
  "key20": "39Zd2RFd5D2m829frer9KXHGA6TH932cpEUKFYFC8PKt4cTe1DWWvezo2jssbBCegqV7kuLCG2q18bXt2ef4iNmN",
  "key21": "2qyXpuwWFfcxxGUnjfM713kdumMCPnA3UfYRWuXfhSn4n1SKitK3e7SM3oVn5cppezmBse6rDWk7APxqcbRUCfmJ",
  "key22": "4tjY2EP9acKmSUSjCfvKu9kPw14wZqWfjwR7zcK9CL4a6JrUs6vLXGRC1xq9XUtfmFkc6TrNpdJWBPPdYegY17Sq",
  "key23": "32GX9JdgFx7wxTSb32TR8cjxpun1whMWjCWgEgM13Gq9XJcw5N4Jw7GvV9X75xPkrc3gPVDvtLRg9ZJYL4RG5JCx",
  "key24": "57RtkiHKKmMEVaqDffnAaAEKQ4XZiLyx7jTGzTmh3WYL7tV7SdQ4P8kK2Vd8NE5BUFhgwkLZLzaUFTtAxXw1dJYm",
  "key25": "4MHErei41BA4ewca5PeJ36DdhHKjEw3N9rShst3WyWK7RcHovb1tMntq7AfnfcMHneePrVaqcvZD9tt1Qn7LGTKt",
  "key26": "5Zub57pHRnsfAyM8EkHz6E2KkVVbJZFhsZfjsRodCSxTb5XHjmMqmuMukjYcdoBeNTrciWWdrdeSDNabNMtRdw3o",
  "key27": "2mbjZqTzh8zG9Q1AZsmQyoN21FccMcMhPA3zCugT6WLv3csiTWV4G3bs1DjeBJ7rNoNoxvebTdibeR6ZiqDgdmRZ",
  "key28": "5m85SdTkDN91akqDYMCpK2fhCqTuGD7UPnwPUZZLXpqkjBZR93pE3YGbreUtPRwXMfMmHcBpH4c3fNvqxLtaHzqd",
  "key29": "5Y2sXjoSH6ppGScTLet7zUfmX5tR3qSLBHnUScbTft71EUQgD1YCGKsdyw7aptRxQYuBng4UWEp6DfsKQeyFB7zj",
  "key30": "5Sj4HKc57qeFoAU9sh1SkWquJRHyeGAb2JC3JQ2Ktt6QvWivG1nufQT7AJC8VEhCQXvf4GoceUDtgzXnEFveh6DB",
  "key31": "5Xen2siMXX9GE8XsTxKpTdu2eYAN88iYpyZW6ZZfytSWznSmokYdosJcHsa9aHvaoyt17rnBFaHSYjt6LcuUwAWj",
  "key32": "2SeAu6ZG27kjK8QeuTvgpJHcberAY3j3qEnWEB9jSy2p23zkXvGXA3fm9KtQRJMq6NDNTHyF4SbmKWtdfBpPxFde",
  "key33": "3Rt3TYNW7mp9i3eXoBB2jGzpGNaqbxLy4Q33ZLewcabYtWVS3MgPm2YcmDezTCEWNzssrJbQRyRC7w8jLvPAHoNz",
  "key34": "4XpUR8ZRVsir9Bjgtf9opnmBjqthNqj3EjZUBy59ZmxFbHbRwQRXwgMmzcirSxrGgABEqPvx2hLeda5qEsJzvZ7g",
  "key35": "4LwXjPcmiiPNWxGp9XUJ1AhBoXPMXQu2woxpVyJQL1V75U3sUFBzN7knREKLb5ptDaftRamdtNGSCYzoXhyTxbmv",
  "key36": "2d6dfDAvKC7gRNLoHAiuXJ5wcn3DnkvDJSL8jwDGwPdUFqg6joCveYBGmvz9sfmz9fEjFE3MjgTq8DDeGHWU9kos",
  "key37": "4wqy1nP6QZxGotsnRmx9rwxpY29vW8QRYsVHANnNSMCkpMemBXHSCC1sXJzToeeKFjzHPCBqxq3pWGzTRXJAoEqy",
  "key38": "3wmBvHhmi56u7kvxHohX8ErHCdC6RqvLxyUjZ1dHmSUpirCxgLmWLaeFpEyFuz2ikhSZBkNWLzqgazwmSbHFMMPu",
  "key39": "46ESHPT6Fj6UpGgZswbMWCuQAJUPFFhHGbDQrL3abmv4hgMgzsSt77eUGpbhXyaz4tEq1SGYSNyZEyq9GpfN8Cfo",
  "key40": "5Y8mzBqepPeFg9RDAPnfZheKBKgAv76WriZCKxdqoWzdqSmTzK7iHsEvMpfXym3Kn8FsihTF42JARDFF51BQtvSP",
  "key41": "MygKpqZAF1iszD8C1wpwbL9ZJR2riH1UehaPuA2vvUYv9oX75tFuQVch7n8Tq7NR5BTCpQHXuosmcCQ8tU4Xnjn",
  "key42": "2qtxQrHTsd6ZbPyzd1wLkqGhoJxXpJKk2fCj7TbRgBdEfYFDdNWQsmyE7t2LkbpYbB315yyDDs199QrGEX1xzp5M",
  "key43": "2AjJcUxp8eSq9WaoioCuKeUAWhZwoMzNqUoVjCP5spEoFyF8Drf9BQqvxoNpMWwKqRcRuXPszAJnTPX3AC22c22g",
  "key44": "kUwMkwD6xy5gS8TCc4WELaiVikkBFecFmYgMKsjTitpw5kzHBjVNhuv4T2Yc9B7jwG4sJnaywBUpgh7DyNX7bdT"
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
