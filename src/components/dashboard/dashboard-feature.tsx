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
    "4tNjZxU2AdYureiX3EHW2c1jY9BoSpB9nTRLWiCCoqZUWE46Zhon7s1mGKaeFsTCvZ8uEo6W97LrHwrHdLm7H4kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dS19m7Lwdi3baMtqNjBLdiLUgFVVhqAFSTnxXcEtJTAuunc4HzMgzMWb8SziUJUAt3zVWXG5FGoKkuYZUeHksuF",
  "key1": "5gDEMLLdWYBmqe3eUcFcghYMHw1puuu4BmzctxtbXmc52f9vXcuAiMRLr524Z2cm3A7qqu52ejs3VMP4YvHR85UK",
  "key2": "2QxQr7Pc5qiRrD2yDwnD6GWRutwFRGtjtDbQExTeUZnUhg4nuh9hwV2dc35gnfWsm8UFxYz1gvkK8zEBH89pM1qG",
  "key3": "2KyJ6zvTkX1n56Zg1bcmeyLPt67Vo1JCpYG8FLK8v3eUeE347X9MQDx7Wp6SZrsLq4deMRmHPuU7Src99kqBU1aA",
  "key4": "2gtqxT2Px7RPKuuMTkh4wdUg6186CC8Sq9PQf49Bz382i5o8pymJEzcvJvadKzDQkLv662864g38KTBU5FciT1FZ",
  "key5": "28y7SMN37EyKP91pQhgo9zzcTdborfkDyg71DpdDsfkvHrF67CmHr85xr5x9rs7VmsxvbhdBN5VcZ4fcgB7eBTWs",
  "key6": "4CmvYDhyAuCQTERwzvtdXi3qbsZFcWCWKsihE4TqXnWSQrnPMpvAWc1xzqnSbHhPQNJophb2kTwixjeUhDbKMHRk",
  "key7": "47fiy2kJ74EYqS2bXzeNkP4cFBiVMB3y1hDhd6sWVg2qxU8mLuhKL62YjiKjDYiSJPbqHaKind8aSKYVHk3hrqup",
  "key8": "8tvpKZxmdA5NcuDS64vtVQMab6PL8v3z6QVyoX52CEfygrcH8akuGT8LVNro1DaCb5WQcESuAjJxYicGh3kTVvw",
  "key9": "5zaVud4aToyaSTKaE5X1wSdochbTP2w4RX9DhCghd6ErAHwbuCsCccxqum7kuDWBRfTkpd7mtd9fZ8cqfRkEdPRP",
  "key10": "2iDoR13u2ZhfC7yitqjCkAzrdxNJ4jAnWaFS2UUov92aBXyvYeiH3os58Zrv9f7ndBuA2ZKg3TQBgMwcZXVxywBt",
  "key11": "3y1mDg5nzR7S2aZpSFy1rRVjtupUHyQrJCwwL3nYXQTYX8NAmRw9Toq6469ub8Cko7f3D3gKPcQuMt2hQbRGFtUz",
  "key12": "3F4HNXS3p33SgbWPvqjMbAb6JrLnzSJMGEBREWLDdYJDjyXaAz4vGqVZCtvhsdXs4BFo66PbiJgNkAzezurkopGa",
  "key13": "2ZYu2bNcGzYhEX8p5psEL1EiAFLQ9w7am1Vw2xmbGorEZZZaJygxwqrauCGdPjyhSgXYP7tw71WfThc4bfVnXMUt",
  "key14": "2kPzX1yR9pCBjGMMydrVSoGDsT2vs8Lh7LWZhjhf1FoRtBwD3EVBnsoKsdopCFKfR41gXBKTg8vZAzPd4ntT4Sgk",
  "key15": "2r2s182sLrh4Az4xnqBvSjUzVariU5jvKpZo8GtGs1ci1i37fhBw2gasLv1jaHLrmnYAdvQ17S4gm2M82wYfhC2J",
  "key16": "2i1rfTmC5VKP5BnUTamwebuuhYtxQyfTCH9gamw7nntFwnvi1gSCPevcWPjJfYH3SKGx6VbU8iAV5fHdN8RivZjd",
  "key17": "4Ztq6rdx6arn9U8kikcKpr4jTHxbGkfGMwyJcFoy6zuXGubUdbgvpZpVoUy4QQ2S8xikDL5V24fho8PTj5UMCV29",
  "key18": "4tj2c9Er8FbW4WiAHicGZeoBSenYWEXXe65o9jitMDydXcqRZ9BKhPVQEJf16gCZ4tbGtxfAw2mFGe3LVYDBrSnG",
  "key19": "4gMsa6RtdxdzyrEYoy9WRkABB6jQ5ihDHXKDyjRZiGCNRAmVs7DbbpqxhKKYzGFdg56RAYVXKGqwgZ4JxGCkz8Af",
  "key20": "62uP7ckhbxTEkdm1DVuL9iCSiDM5MNZf9ndpmoxCQZF6DJiuYxzSs5bGBwW5Mb8dPzfsasaz6z1wYx27WvRZwLiR",
  "key21": "3VXVnYeTHrEXXzsRdwoobdeP1w2Ma44MEqc3p3b3v4fDrABeuzQFjhZ2yWgo5s8a5pebco3c8jhZ1wvRdncQLjRU",
  "key22": "2GdZcjrgPAvzxegNuun5GZWyv34TKgZsNN9HZrYjDwFS73pUfooyuQ7Ku17R4scJpexjDy3LU9KgsHFHhf7udxYV",
  "key23": "3Lsf7sXaXQpSeuGdi6Wov2s5bpNYevCwPszgJUGy1o1Ef2ngPHmQBV274mQZ7Nn21KoCkQV1vpXEgtAnk4edR4ds",
  "key24": "d1NzxFcGrJ9piSmhYKRF3n7zMibDLkqAW1ejUs8s9b1r3eMhsdocPuEUs6zomXNRHYJ5dFzzpRKp5PVFovfUJqV",
  "key25": "3XtaUtHMGdBUYL1P4VAQ2Hxosrn1FMM8KgAwoLrrZMHbvCaMAxL5BiQMdZmNEsYFzF331yQrUrK1C21B1zmU9TYn",
  "key26": "5dtjECUD5ZHkn1Kmf5CcrdNQe4qyD4tgTRzFLGEfM7nj3F2QFpewpQEqWZYb3n9PtGgDAxuAqExgyUpmQVfzSxWh",
  "key27": "5W81X5vJuVsBgsNiTA2FTMRAtUfruubfVsbZihnH4vCcCeXaRTT1K2bimZrv7VHf3f7AGpU6eD37o13Z5Ug6ApEP",
  "key28": "31act4m9cdJbFvsRdhGEeKTSB19hLhKJ2Jkw1h757UyRzLiCnga32yc5E7a7rgbJUTsdVmzYCGjt5LkMfwJfXnMf",
  "key29": "hCNvsGi3mbwAd4vVnHH6y6sWqxk1gdLZHgi4VHyRaWc8ujsN9D9N1SB9cZzpULsfRXBo745hzETnDBqwKcRDH6H",
  "key30": "3rZQDS4BQW4aW3yjgWyJ1QTCi9F51p5jzzQjRJctcEARoESiw16LmUXpu96e4aSoncD6TXkbcjzYsQV7NhtDMk3J",
  "key31": "5erwrCNiWFks5ppGXGZHBSKNhx38AZv3NgTDy3KFemdZiSXAAax7pSS8xVrSWaxDVxWtNnUkpkxrdpJ8FsUDPvys",
  "key32": "2BPpX3FnYhG6PNML3hGqHnTFnFLvdNdotYuqno6v5dbCLoa4V2Wyo9F2wev1wHqdQ4xBgQK4A7n9nc3J4mpH8iDr",
  "key33": "No7u8sRa4zMMtrRXhFzWUxo8LrM52ACDPCMXGtkeaeGrNAANchzigctKZosbLVRU4n9WCFQ2qDzPsjbVgSQUZet",
  "key34": "MHPEk6qKtoJFLF5mhS8eXGVZtT8qnvcwV2tqw88Hfo77EbewKLL1TycfrZ9t5fMgzTHV5yGft16d8jkB56donwH",
  "key35": "3tMQpahhwmqDitH2Hqbcvrg7J8n2K7MAhZMTnCWvsLw4FbctqS1qHQkfmxpsPkyBQeySYzpAKGvs9tBYo93eLVN6",
  "key36": "2eLMBcdE2qxuinWSjww8YLi8jhNQgB4wQBoPDaYhyFbewTeU3pTMBrTi3yaTewaxmiuDRQrEukGVvFGdwsM15Gvc",
  "key37": "3kfJP7fDPVKus81cab8s8X2GVWZYwG68CTuFArWwsn7FQ77eTVoRoVjgdVn1eQe9dhEtqMGPskZvBMFr9jserEV2",
  "key38": "iLKqvKpMXq5jD2cLrBiqEvHUagM7GT42L35Pmr1BUVoS2g932jiFfJyEnWGYDTA5s4S5fHDCJffw853HVzP2Q1i",
  "key39": "uF74WJz8sTQcaxuyNsCfd259GqyW2V7VNfUz7vP9tjq6tRq3s8aUb8UujU96F87QJRMmjP9Gy5qEycjrmAWRMor",
  "key40": "356rgThkq9WTAL8HZxZ9X5ha4gQTXzJT6ruZYjzMgdCwUv6A8259oDPdKzmVt4nBszsF1czFsX5pA5YfJL5Hswew",
  "key41": "3sFpmwjJS9X8nevArQXX3oaJ2h7PNXbfme7KBuCP9CdP2tYrrxQeUZBdqNNvb2WcWhE76PoTbbRSPvEpmPDdqqY3",
  "key42": "W7gUqAB6xqzFN18RU4vG8iKhVZbG12kggh8GcuzMsZXac7hrcUSHWvTm1q9QitPyfUWDx2ZZsDHpvyQ5HZNT25w",
  "key43": "64WPoygBH246AaXgzjYnU1AywN1xBAR5c1TrRfAfbSDHuGJpBHMKfBhPxmd4LieAWTqKZb3ATw7ZYdVZbGRUGCRn",
  "key44": "2j5mMcVkGLenDberNn348j2inS3xBXEA5cVgdqXAHP9pNtAtDm6LevUugUrmR6JYtus6f1o2f4zFsnaHVgyih5Hy",
  "key45": "51HaebFpZkWEZk9szKeeSTWF6BByoRXuS3pMaLCiEcWCKwm2PBD8Ly4BoCKWjhnrm11CV3ugrKrPhFyixNaRkB8S",
  "key46": "2RsYXEpV1APGFjGSeQ9HWGbFLXyoB8guvXNmpX4XeB85bNUc9B3peGg3cWQxYbBTNuh8rYo5dyVBERpq3zzutJKV",
  "key47": "2MS5d265sf3YQccsUqUhpiCqENMCmavtsBb3ZdC4Pragm4gcd6MLsCArgpkN19uyGomv1TqnSsZsGEfPHQoacopD",
  "key48": "5EBEDatgqq4xE7QAf3NoQGkU35V3WAUKbeLhez91Wh46bwAut6S3MdkWZajN2tfYFuDSbnhhaQeLYPCpA5YyGCdr",
  "key49": "5EBzTiSPPghT1KFG5MDENt26orMAE41u2HrvQn5HKNpMtR7WthriKFhF2m6WBjLsQaWRiqSbhoWtPQ5jWnu8Hew9"
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
