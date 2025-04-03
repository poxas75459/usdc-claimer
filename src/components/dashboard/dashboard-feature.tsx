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
    "37smRScfj6MrjSQ5hRfSwyp1AcVMDJK7VLPp7BT4irF3VPESu6jCsyvhkGwua8tV2ZLiup4yGXrkQZNs6eSPpY2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJ6saVCGwMgqa2fDfqJGzvn8Pa4zGxFvv7AgDG4JYNnUGJzQz65hShsVGFJBmtbrUZPTiHrCKXAuuSeu9R7i7a3",
  "key1": "3wRTDcsdSActYnnWt3pYBABdmWVFwqArV39R2jkqKomUpNCadDAwzwuT3kvsD1gF9BW1wrwqxSUoB3rKAQmhDNMH",
  "key2": "22RKsQzNe7799Q6FK3yx7Z1WyBwgFtLuhrEL5rw1K9nS2GvPd7qwKs1aZ93AD5mK5XYC51Sp9dNjbtagMey79tro",
  "key3": "4ehrm9vj9B6XL1adABQL54JYBSf1efG5Roi4eF5PbZFfWzH8hJiH5G7JP46BfWxZZVCjiMjRYeHUK2RwuJTr3bkA",
  "key4": "43A53kuSarTkPCpai8nxWLsykzcJQ6pwmkhV74dVtHGE7ttzxZe5cGWWcoLzpTC1QMQTbs2gZ1b64PqPJDGtS41d",
  "key5": "5HRMXFR3cuGthNd4zppyk8hR9YAd475KDtus1k43FEMH6DMoh8pwefcNSPUuEhxUuuwWu1mrNvQZWdm3K9Q7ERqj",
  "key6": "2vFtsXMxBtbPULbrXyNFbNRwkESbsbDVk2TpfAXpBwZAxvCRSqeqc1pBnaJi9u37EpticWANBRBeie8jVLZ4r6Dx",
  "key7": "6669Rc1TPoLFtE6ZwvWjYPWyfYqwtipGfATLzXPsKwa29aYHY5vYJDZ8dd2nDZWvZZtYzEeZ6cGDxmEQ4r65Do3Z",
  "key8": "3Jn9bXEN8S1WUhx4hTJSb5MDsWAf3k6GX9SPZpQTa2utRKGnQbVMARQXjxj8BB1jopu5XscbRp6ijbjcpa2gy162",
  "key9": "2YTtESeAizpZoX7oEYcsCaSsF512e9jbHBhkM9eDNdAPBWavHJaKKApuWcrizdu8wHdh7bJYybWXfLbz8TG2ejkJ",
  "key10": "32ZXJLA7ok6rnncvLzfSeAU9FQ9GLVsdgMfBjGh8ubU1j238E2B2Je1LjTo4PMMKyptYgzL6euX38YLdyc6jkma4",
  "key11": "5o74QL73zUaq7G19sKuovAK8dZJzLEBAXgj8vjKGUrWKB1dh7dKy1drPTPBkzWRLZhpXjGaHZ5pUDj3jjUv3punU",
  "key12": "Vw1m6Ps31WcyKvFEDMkBXpM5bn6qEspUHXAjxtssm3ssizTZTjxjYe2ioTGCYFzq1GoJZpvPYnWLEPZeAgEmJV8",
  "key13": "2Hp9yeQd4cynP2KvjyBXgF9sfjepCDkgJadptFxoCWzWkoiBMzAtSE9EY3HRPBPsngL9Kv6QUh7EPTfbC1AbEzyd",
  "key14": "61VuQYKWzMyBxuBrfShNKw3ncZ7xvuuErcdHF4QYZd9cnMRuAy59moaSYPDzArw88V4gnpHMLtkBebfcBQtckAVU",
  "key15": "5gDUFa1uwybYyCYvZpPe7jVES1Tx1gQbuDqXMQFzqc5EhnEeEMQgPLRddXQ5SKjvmzdWi8FKZF81NLXXwB3a9k2M",
  "key16": "3HPpMA1rudm5seJBKAJJp737hDfzPynMJ1FEECBonaME7iYBe4uMuZeeTZFwvAs9DTiH4kCdBfLPxq795H7Ys5DN",
  "key17": "4j2P3eJpkd6j41xGMCb9AGFjKJxrHpp7JETETLYXfxxf19U2F6gcgsX2mwQLQMwWw45Z6D7N9WgDLnE2mwKM3RKz",
  "key18": "37nkW2PENcaB5BicR8nsEYoyfGvhnLPT9DsovufzLLd2sXg7tBsAhgafY2ricJ4YHHc4S6E7HETb7MQSMcFGLUob",
  "key19": "GSyFxe7TSpUgBcAHjaSqvSVH6UwtphPXc7WoHr7hMGofPN7kVxQXNTkeeHuyDHpgRz8jo6VLQqcXckJJFojv1Hz",
  "key20": "5f4cJ6uYU4Na3LpEf4YhNQGqGaG6E2ysGcvotVpgNANdHBF4mGbi5Pk6aLFfoENQXqW8riuwYZyEkNL4iWDYzFs5",
  "key21": "LVJ85agwq6QwzcjFQRcrHNKKc8TDKsWNhEw9Um2dPevpdVK6QF19Nq24gfXpzcXskVFPB4s4SDeMNNRrQCNFzjE",
  "key22": "3roNYkcw7dWr9rRgw5VeFyy56yRHvLKNiMPDiUJEkbygxFhkNEmLo4dAgcJbDehns9EgwsLMEE5qexqCWwcTZzT",
  "key23": "Xqo8eyAxiBpwEtrBFajWCKrFcPJbEaYoNt252X16483saGcutVjHHraqshA7LDNETNjfsAWkZEmxHFzQzdzweMk",
  "key24": "3NntbhKZuGRWumg2AqGVAvK4FHiF1zyfTCKgpxenumiL278gBiws5yi1Nr5UgNH5qsm25fgkskgRv9JvysN2QSVJ",
  "key25": "3rRaoVtAc4WacGGbsuHPadVS3SbQeeWkoBeKSEfEisfxwaY7XZKbxtLCEUf7E5uaXYpKZRwzBAHfRwnhoq43dzfT",
  "key26": "467CH51q7EERUEkzVnb2SiBgjnnPHc4zN4SBNeFuPt1DyL314KDuw41xzM81KQEepEhFP4qCZpwtc9ZiJ5HV7JiJ",
  "key27": "3j8za3dFuTeCZkHVyhr3hABcHtyuY6nwKwYMwe56i8RbM9ESWNJToTHxbpNHTwnmZmqFEQAUvwpQxihwSrNxy7XM",
  "key28": "3wbbCqP4okue6FzaPFcU5C6nEB9E6kup8kTvnTdVhmRqp9iUDiCwBRP6bXpFvx6FgDDCTGbUNQqQPJGKAEdJdPPH",
  "key29": "32k6HXe4qSuAHYFfGx67mxJBqk8AQTYtH4L8p2as7F2mrWFxZc65HW3GyNUqje4sTAPJ4Qkb88xF26u4kHfdi5iQ",
  "key30": "7J6qReq4sRTF1xu5k25LK4r7agpx9cAdWhA7LD93yq3a4TcSDWuLACJzUxYHYy545orXDsTFtXdxtVhoax49eiW",
  "key31": "3JmNMpRMzkngZCmwUS142u4xpVXeT6zBaixkvJ4P5ZGoA9WLj6zEAJouGdBVwkja8PrQmy98AQjD2A7Gc8Uvg6ff",
  "key32": "2ksGZKRjSauUAFkZqtYJmoz19BgHobh4e8ymUstAvjo7emhTYM5MyiLYyvQUAWY8dwmJFva4BMgDMvCJgTUyRjrF",
  "key33": "2WmFi24X5UPL2bNxsYC4Ew356b8ongyyRbQNDxdYGJazQCduiUCXJPF2hfG5k9XpWF6zinTKvkhAWP1YSFzi4ibx",
  "key34": "2jzKY1SRd7Hc5RkoScJHEFwSfVwV4bHZJpj6chdfMZoKJymZmhy4UTTRvsi8WdgCYHmQQHs6o3Kg5JGLtytdjMLh",
  "key35": "4n5SGiAYNvyASdQamSn3AqemDnNXELQmFppEkfEk322s8DrQbDfpSwnZw4g9JB2QUdemWXpsgwNdVWoBHQfFCREw",
  "key36": "46sx7U2t6qeUFFn3cyJCkNrz7HqL1pExChe4iAcqQoftQAmuJuUYMCNFPTbSe6imokmzjoaakEdd4LiZWzwLGmXa",
  "key37": "3m2RZRLqQVHvvBX5V2dSzbPVu1D3QeyEzHRKS9k9Mp21kRoTd5tQUUnPTEPyTjdDT1CxfawzFYhLHgDgN7iWuRvW",
  "key38": "3VCwzJYPfWZrUNxieGQog95Dndo1x91NcybURjiiVfH9Rp2EKHFL1NYQM2vAsFkc4Xy6MKdkiTurv6B6pBDgKTBd",
  "key39": "GAjLmmhbcNwQLKvt5Z7dN7MLNWC8cB2taWngk8gCZaryNb1LP5BvVFkz6peM2wvQeeCBcPpiVxUBv7VCvYYCacV",
  "key40": "3X66usom6r8RXU6787Q2Q7ACTvGKcy3GPkSS8F19tYcJxx4PJV2xsmSQL9uNTnofG8uZTPw7ZbqEaVjV1DfACMyy",
  "key41": "3DjzESd2bAvAmaf5WvxQACdogccYsVxQ5iqhpZvhCZ9ZYoTHuHEXTaAbouobAdgfiwLGR8T4JRoSADcD2TNdzBqT",
  "key42": "SG5BsduQm2uPWrGXZ6UsfMS9tvkMt65fN7NgGZTW9HDyeo7XjEMVwVQtauSwbd2SNFG1EN9UUhvs5xeZ9wfsoeq",
  "key43": "9WS8MDUpc7XfjMDwqcxUuM9Kcs36CBncEeDbY8qN7rq41Utt3eSu89qFM1dfY2JjGvAiaeTrgG774r7L8N4kUhw",
  "key44": "2j1zgQBMqdfevxV3DRw8ZsKj8WyQRXDYufdR87W7SMxjJvCk9qYhWzjfKNjGTutweo3m6ZbrTENbFHAA7Qn1U9ZS",
  "key45": "Da3SbSjce3hkLxFbnvNYpsDx651GG9ixzBTyb8XN14UQqAmDNomKqJ88ZMbqWHNL7f4qGrUdeu6MRod7C8atRCs",
  "key46": "kBtwarR2cce53RESMPrzDz8htzPmWh9YPb7EEQXJg1X96aNRF2xVES2nuomHqPJMinpJtwWcPFyy9F7PZcRGBbM",
  "key47": "54gDrwYp9JDpm4Xr2nqekvij8VScWerbxZAJgh8hSXxrXTHJC85NRBas82tgoU3cyoLAE1TGDHBEGc43KyVNhofu"
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
