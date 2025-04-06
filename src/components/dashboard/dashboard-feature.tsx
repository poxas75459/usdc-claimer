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
    "4tqNwyj7An52XTQnojTYKfHS6J5nUEZajC2CQcJ6u34nnMM9qiPN1Q1ntJQbqJKDpisgSCoW5qgqg4Fw2uc4BvCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5geiMcDf53Hz6P1p9jH4Hqpxus3TYN1AJGYHbv1xki4feZWcCjhKTD5fDcH1jVNGJu5bY4Xm3qAP1YSNSh4EtruC",
  "key1": "3jp4Hb3nSqAXNwxvfiT7NVQHV5vc5NaLfPFT4HhcYCpVJirJQj38bq51ofYTZ9zcFSeXrjrDdJ7EXYCpH7PupQDZ",
  "key2": "579JDxfz8qgUt1xxsMfyyeTomQN7VNMEUxYqgdsfWZHoX2vLjXeLTQVpg26UCaG9m6565oVuTEbuuQW7E7UdXHD9",
  "key3": "4EpaqCsJhJFAJ78KWftDAQSAacxAVc8h6x5MmFAhugk9ZrchETx7jLrAmTb7pMZT8STf9bAWczipYoVsih2x1Ayj",
  "key4": "9iQ3qNjfdXscGUJATfK3bW6NWiXQVrgJ271iaUXvz4YnrgjZD5rTAZwposdyWdT11ULLA1AJK1Ge15Q3fRkbPcr",
  "key5": "2WqKFFbYu9gPtpGu9p4Wjynr4KP3jrXZ8n3huEGw3DEMhAphshmjs5rXfqRvXoNGbMbtRhrFcakHRB8cPu9JzdmB",
  "key6": "4bKhJbwZnQ5DSFSrbeXWiHKnL9dFxNEvPfQmarQuVmHRW2xAxNK2AMMM1wcoJyYXgJ9NtDKftyPVNA6cXAxsfe3Y",
  "key7": "44SqTQV92dWZnAZzDUkrjXViscEcNoRWShd4nMtUchG8wa2CKeapuU66TbowS1Y7XK4Bmft7FGvCREkFNeLiygcY",
  "key8": "5fCTh7rWsbpWZpPT6xN1xagLJBDLq4deqbEAq7cXe8YdspnXyTsgNTasQSrcKqEmBLhkmKzLbGb64nDW3TLbegi4",
  "key9": "Y27XhfxHu9G9zajvrP1GFcW6dAKDhuPmEbysf1N1dVg6ciDmqsRgQBJiDgpoBpj5jHMKaL9YhcfD1ymqFucnQSy",
  "key10": "45VuL3PDxZv2M9jocFtf7gJQu7WoZSuShgdszws5wCN6qWYGf25rYxqmWWGBmruZb8teu3Z8duwUMEbUmgBYwGrg",
  "key11": "5uq4mKzXmqepTdU7aLkKBKQ7MP9p154fSBYuADYoYZPQXECLA8X6AJWrSjyv3hC5kGfGnZtoMqpWUvro8LDNEZ8A",
  "key12": "4AaAHkSdyzLQHE9GacCFstg46mJpSXfgjxFgSpd3tTqKcePqEgym5kjLqF6Z6Y4dkVnnLHPb4PJMMxwiNWd4MTL8",
  "key13": "5Uy17o88D7Cnk8KRgAMEnQDWv5mYp9PYtm7HDDhs9bD9E8unrSD9MJfPYdtmygqoMGGxFyW2UhScqv4VbAv8gc9S",
  "key14": "2ZkU7i4iW72NJyj194r9G6J86LWsiJNCgiXhx3fjnXgpL1dCEQEwrzxL42JHe9Qiqfo9mPgkXvMTsXenRLRefV12",
  "key15": "4iUXjXmDEQSdGjHdEJyjLjUV8a8cJdGUWF2q8u5fSfKDciLvFnRumDgC5CsHRQdC9W31YptjLqgGcKhguQt1D6oh",
  "key16": "3BseyrPzafZYZNkxc54iBTosipRqP81cbKgvhZ3fwxMtbxtQmB33brENvoMcFAxdLjamF5pzjeQZxZq9AZrzWe3d",
  "key17": "4a8BXNUyKqddioT9ghgnVutbxAJNQqd8nm11PAWY18BdzrrPuTMec8fZezZMhW2YMWBpoyRKNVAPxntfwc9RjTWo",
  "key18": "5fiFLoFyk8PfBS2SQbpBgvWV3R7uSq2DeNYPnVRaLtwE2DdwvNobZrmFvefQXy7ENBPgH2xavUa4Whdo9mdwYxZk",
  "key19": "54AqNPuJw8sBN1d2LF6JA4CqyxphjRfsu1Vc363h5b5tvYykNwsG7eGS3DPFtE8EmNZXwdo3rGdMefX9bGQh3hXX",
  "key20": "3dCDEudqrooZzMEVC25BMyXWPavyeBB5gkEJJcBUjY2kUxoUyzCUe1FKgC9jsiqHYZ8MAuzZBJJGJG1ZTQXPEaaQ",
  "key21": "2u9ZrS69dRN6JCxZ51g1R1X9fnVo7mTL7ZJ4ESWXpjJtexFb2n2ZfhkGk3uCfBwJ2XDS71hrFzUbgEEYy6VK3n8S",
  "key22": "54oU64qiwzFYrs9z63nSUDNdJhKSJFupGovV9scoBZubP55vitxRUmRGrx2mtmnPFi373m8Zy54WW8CvXZaHNUDs",
  "key23": "4miZtHBY1B3pQbHqp45fGjmRrfknUxPxT5xc63YyEyvwBPzv87H7PvM7EtSCM5ZKJt5BGgZhF33oH5PQAWNFoUid",
  "key24": "2eZQCPGDPQfUciU8you7VVgZ67QQTigV8oKe5JB6VFsGrdinsvZWTP6yUg65f3RFEku7eTENaue8eVacR4DmSUTe",
  "key25": "22qK3BpLtKVaGhcx18CdvusLiuKuz8JjjdR1wKmeraNBpR8AN3Xcr42xQL7fknYuaBHuSVwXztVgTWYoCdvJtGZj",
  "key26": "4tg5Ju5JsLN5Zgh8sV4w8SJDVQ4VJjz4p2JUaAz6g3ZgJsMw286UXZNWqjXJUbBTRzwadEHFGwZBiYu2onb2Qz8h",
  "key27": "3yWPaL1TrCLMbnz221VnLMfBefyzd7VyZQRAyZpdyr14pKCkBB2PnriP63eUjvGcV5pTLzosPBj55KhiaJvzsgDU",
  "key28": "ctDVmtX9Laf4FLjCKqciYZP1xDVRvbyVn6yaMCD9AFgbKdH9zMXy5PgrkK2mY5nFfR2nXRbPagpZBpWtYJJNZJU",
  "key29": "4QLML9zHRZgBA4SNJsjTHL2HiyGuEupB44N3jWtsogUMGPNYCSgWGZ9zzpqGGUudszMxUTkfc26uW4n8bcE3CuYS",
  "key30": "4FEUvrkiZ1cFwPVCDBc7sdY4xhvKqsgDA8h82E6bDAmQhVJCotzpe564kNenAMbrATygxADDJtYuxuUb8itWEvn8",
  "key31": "vwJxYsZgpnWPZWNtTdW53gMDg6hUp74x2o2iudP6fZ5LbFGDYPUWvNiUe4qzgEfAM2GbdJCyzX23huq3qQR25C3",
  "key32": "3n4FzZhDt8BLPdS9h1JAQCskncBziSkrYt7uw91EvF9UzjzVuimdLrrJRpaaddNwF9P6Y1PpQrR86YPvHMXv1V61",
  "key33": "NB92fyXkhiiWsj1aUvqJqbdeVz1bDDKb54D3cLaDsq1zCPAmr1SUi49nEByhUnCNfYDibzzVL5etgUntsVkWmDx",
  "key34": "zLYv1ArsQSvCyKRz6TxXcKvLZLPaMUV3Ww7x8iQEKUtmKHhEP3osZyN1j2BL9SMVtWSuXPqqu7rFueRJiuB4SND",
  "key35": "5EWTGRyVragYBY582MKMQ3j8JeNpKCHhEd6gzBhynRwoH7HTToDGKpEr9ruxcfAsD1XBtu6ENeKo48sQhbMmPUAE",
  "key36": "3fZxSjkopdJh3Y6UjrJg724q89YZGrs6zwQNSjAcaiWqZtsXqqajSZX99MbGh5V9N1LYS7JDBi3inyj1EafhyyC8",
  "key37": "61UPcTqh7gkTG5JSWyQNvwaMS1jns45Jrs4THUWQeqg41K4RmDzppK51aY2xjtNshJvowQpRrib8JdhVokwN53VX",
  "key38": "2Nj21HbWGXStuGQ3Ldv6MGPzuSsWCEbEKUM9MkQBVcAPQdzKM874zYGAjVntyRFvZWXPgCyPQUJYykCgSs6xXYA1",
  "key39": "3aqFvEHsX3V7AuQYtYLaDCnMVuTFqF7bNJ1AKYcq8aX2zxFpW9wdY7hTnXyeDKdgXuHtausHhAc2fVdsURr3VnZK",
  "key40": "4QNiwwhtiT7Nvaf6k3ARTFTucsbrQYwTvizXsBa2bBdBNxJ2AUNMi42YJtxaUgCWor6Nn9UNt6LNBKouhf8A2gBq",
  "key41": "RLPFyoamekHMRzzeeBJmRGZBLWub5rcjc6Fp6WCysNzFGuPprP6nvouNJPS6q7TohjM1BeqUcuqwwuASr3dKxWj",
  "key42": "5219DonqkGTpmg8AKTVxpfrWpD9UM8qvjwFED2UKUaUvmeHC6qsMa4ebwUrAXiU2L98fmong2nirsxoq7Ec4Chxx",
  "key43": "2rYMSRwggvrREcfxW4D4rd16rvkiMiSzUFzC3SGyBpXVipCbmCTuMDHN2iqKMNgz4SYvPvurnRHmxae66BBdt9So",
  "key44": "5eZE3GVZeA3Dc6pAoVhY5CHm1A1EduEp2JsTzDv8LbqmPFRodJTowe8o1t15qWQDj3q4FW3kAft7xqdoshnRnBiM",
  "key45": "jieaJetUv42aoVueaYFTeos2dyv7ckRSHgDwKE6ieDCnwSSr67YRNgEuHAxFQhMiGoLn1UQswDqQMb9MPs9bVoD",
  "key46": "27SSpzMJPFMjZAVLKx52bNnQhiVw3xE7cfdGWtaUrDGyC919e54XvEPuPCif9BWfrkGJuceXz4ZKvSGdJJSsLfh5",
  "key47": "5HEMmWDbyTH1Ff8kYZBN8TQ5QEYAtgpubkDKps9R9RyvCvWUExZcXZpusW6eUNvVJ36qg1aNmudPvRGLBEy2YDNp"
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
