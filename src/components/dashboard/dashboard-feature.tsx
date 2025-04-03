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
    "5ymh9xSa39bogVHy9VfjtmyP7ZD8sZTX83DhCHZr1HF3dHGX1JmRDj2XgmBpXze9vTYpABim2oyimGMxnYT5YNte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qD6g129a75ELfEa8Mu7uBEXw1Tx2wvVsZDsPXgiwPNqVqdMDvJcWqBnJ8pj9ccKLZt9BK6kxjiccZzmREhPub5x",
  "key1": "4yCWaPwK8zcG7fpz4GCWGyKW2mkkkUvkJpnJpN6xbdDcXtWaDmxwDgQp941p5ept87oQStfjcdSTWq4WYKgU7EZv",
  "key2": "5rJEuB3o25q1Mx6Sbj9Dg9yjgXSwuvv2Kt2MRMDqByV3ajUL44kaQfJn2y1qeWdnq3hXp5hmQmbJMHeioJoMiWpF",
  "key3": "4vNuqcBttbRnaWoxwyaxH7nQLvcTtQ8tD18NdE44khZYh8fjCp4dzXJ7e27m8WVLC2vPfp2zGAMbCX78MhAfVM2B",
  "key4": "1jjcdGdscizfSywQKCgETSaxgUyG2qwxsPZZP2FzQRvd1mr4zKHyN2jWDLLiaVpnU5rxRxCDgEoG7TxzPSqSYJT",
  "key5": "4uTVRKmmGVqin1x2m2utky5XsR7FJPWjyktNZQMP3kQfCevJ4Vm3ymduyenLfLijT79qJgyNtvoy2JxzwN1jGKNL",
  "key6": "2a5ZUYpdUDdKBSJo9Vr4wviT1razQrfTCGMJinYE8EEcuqazKgsyJoS3THixwDiMZzyQVpFfQEpRA9gbkfDv2EwC",
  "key7": "4EDuGF6Zd8S2bhDqZbDCYjeeELEq3kTxpXjEUqE2WLLgX3iavEQi1uvks1uJDX7vgc5mczrckrMq2znUBve3N736",
  "key8": "MYwnhTPbwpvH9ZunsNmnkgxHRD9zmfXghLL9JsxM36sFBtZiMQ3hkP65xxv2oRXPgSHcRgt21eHnxgxi3PdDh2z",
  "key9": "5DjSwvBqLMvn549wk8NJLzbrDAXrqJFB3QKsRH6LHFmAjhrBJsnmuwRscv257GphfHJcP1xsbNTWsigXHJThEMeU",
  "key10": "tdev6froThLtqDtEvNMWJnxRSq7W5VozCW1CBDVSYP3AKuB8rsKcwuP6DPM47MUQTLPUUvK46CcrXVodaCisdz7",
  "key11": "4QCWrNfKbr4AXz8brVktXoLJFfCn9d3Y8nSLS9Lb8GnGVWri23ehqbcDL8PnDZV8a6Mbpq5vmPZt8SCPHNNR7ou5",
  "key12": "58Gjyb5vyYjyLqnTrncozBW7rTG1Vowfx4ai2VWM93gJpNZfq7RpFtkg5grUtWWqJTPdDVKMt9k6Yy21JdYwFPCw",
  "key13": "4UnNwqj9SjMHkhfdD1fox8NdRNHU78SZrcEqRXPvTL9iusuzm7XkKxuUup51e9jVP9JBJHbVErCCvdZWRioRxErx",
  "key14": "2yeH2Aw18R5wEM1JyvYnjvCG6RJVTVfs4vYWQNPcfwhA4rx63KKgpcAomakLz7PBU6nsE48o6sPNTosdWhH1PWjj",
  "key15": "bmSFMFeiQGyZYePkLTsh7mEzupmGaWP3cVviJk3nzZaCWFjtbABr4cWWxBmu4ZUoLu1UBFRMk4991igMBcN315p",
  "key16": "2Cp1XWtgwVpp3W6WMhE2AuGo2ytw1Q5QWhnezwTc36aQ9LK8BxbGwk479E2iq1SNNXVXArVYXCS4nksW4Xa98RgP",
  "key17": "5CBXidAwphBE3cByC2Ank4HLbibVLRyQp3qBEdFdAD9ftSAxHiVJgVoQeGhhkzHpLKBzYfHntUGGhrSyHPoPos8R",
  "key18": "4EUTh32sRNZZf956u4zSVuACrjTXjWwZywRAeizdnYDVsN1Rq2DQMVZSkLhdpyAA9Q1GiWANwjYXzKwHdRpsEjkJ",
  "key19": "oFKkCrW6RKvZZWqS5BehyRRedBRxY5nxj2CxoZxPVvsXBLNQidQuF29B7RdL2ZiBFRNhtsy1aVTwBxRZ4w8AgxT",
  "key20": "3caueNYPEVjs3X85RwNqdqseXDbh2oUJSgbEQT89WZhmxoxGGCgSR86p5WTYGtdjUM7zvcex7bde8Bepv3mp29HT",
  "key21": "5PDoowX74szjpmxLqtNYHHrRLcQsXQNjSgRpCG8XQfdu5ZatHGb9X2aUJyAFzfQQRydx9KXBMnnSrYvHtbgyv6jL",
  "key22": "2icuagrU7ho41KajzkcK1wfv4m8T5opTrwnhuvXmQ48KbuD1MYF9ZZ3X2oTCKNB3amsQVq5VQsdeGADCmFP4BVEn",
  "key23": "49tfE976npp2Uk4xUpC6h2gDgQqkiq9mJoFYqVcbPb7qLdhK28q4hS8V2nqt2i8DKvRTc9qcTBethbLydjkbRZeU",
  "key24": "oU1VkQtrepSre6UoFyLHsDmC2styDubsQMeFFsyWCeaeJqrghpKGehpRDYuMK1c4MVgNWuh2VWSttac1PtQoeJE",
  "key25": "2jAb3zcKynG2vB64h74NoxCBy8bfhp6jDyLp7XMsss8fctnwmLmpYDknLgHWyGETGiDJBXBxMvQvPJdKZftdjKqw",
  "key26": "3Bu3mfapv1iZ9wF4yzXHUosGXTcyjMDEZ1bFoW8oSsqMxnEfavq28KPTCw2K9gXoJ3vQZseVUZZKN3XbLqHYhuDx",
  "key27": "5jEbGuj7sXHACueTDz8fsxVHTfYbjqQC5kHkyYc7EkmDUkrfNXz9yqWLxueKRPx19o3bw3gv3ySM8qCcbxeNHDxi",
  "key28": "3R8FaMcej3vMHRLXgkWdywnzhuddkhG7qFxzrJLTtCNXCff6RHGVWvyoyX6zLJaJ4ZZGmynmkRfuSkhcHz8YxtN4",
  "key29": "5bGdYscpsfif4o9ygYFEsMiekX3LQsY4nxfFMWySXvuLwb7e9MTggr1bMkiNsQ5iGDPzPqqYor2NuWyhzH3F7YiU",
  "key30": "4nHSFUiMenAAK93dwosohrUNQW6HnUUrPnwQuVYMv8UfQsnZ2LgEmfqvC9SsRNP15WEzAEKebWfKRt4fCiMwNwY1",
  "key31": "2Yq2vWUMwUn59e25WHoMmKy2y5AjaQ1QPwijv3mnLi6pUiytbXUfSshzqdN42ZQzffvpivbJ5gM4wq2i3bSFMbRE",
  "key32": "YuLa6cLsy2Sjz9v2qGoRRCC1krmUfAMcAo68CH1QWSyBkAFwhY196YLAxjsJD6ahCPrspqMZ4xyVgrsSC9PwAir",
  "key33": "4zDEax8sK2e8DbQtDmqvgGqnQ15Cz6Y4FrUJgxCamsTyCX6Jdn5k77Xdrv46WRHSVcV1NBR3QFWq1LPiFMMnc4pZ",
  "key34": "5pQM2h474qf1yVz5VyNYUVt9Rd77zqU6kYWHHVAzQLQGCFGgQ8xPszRcsAbHVsZW6e2ZWxwr3TyWEMc7TgTQwn8x",
  "key35": "3wzundvehnG6vMkukMEepTLbgCbK85jC4adwgNUAXLYDxxCeJdcfBrBeSMMuP2oQtzBCfbPBbnP1EkLW1NuUG5oF",
  "key36": "43mSDAkXM83gVpWBhptEnakNus2BHuWDRCtvyiunV8Bn7mvCSxDz9uSE1teLuwbyHnif5CTXQPiAguFUNbNxcMKv",
  "key37": "3tGTsTeAHLxtJJpUy13nme8GdzGxsAZ67QqKKHco3b5k15vYcoUjSAgzPBFsvs3HiLR6m2iyGWMxhVLxUn85bjbM",
  "key38": "3mvBo1MhPpf4nQxp3PrSG4bys12omCWxiV95RfPacktQqiiHxZ4yYsHH2d3oit3dqKGtFZf8mSjSGdaW1wwNSAzW",
  "key39": "3A2qrenDTHDPTsQhVkuvUuskP19G5tmNGsU5idyJkvaGSbEggNdCRfTu29SrStUccSv1UMJ6PgEVSDbuKdcZ2MbL",
  "key40": "5HfBpiaNJYyrinFBYFL3ASsk66277UwQNM6uNJVVnoszeCBFMi6QQuNhYcnNye6AEW3dcQw2ewZgmLVmbk5qKzFr",
  "key41": "4rGRzPqq3YCaouYEs4kWSYU1MBeUrGayZKRjtyZUhViDgsdfa8Q36xNB3rMD4i4QT5JiTK6wgaYet4s5iuz67wjg",
  "key42": "XEexSCTn6RYxCuKTzDKzeYgv3byB3uU4unu4Ei26x9QjEgnoiRhgquYY17VxNc5QGMds21gLzkXWo7Uy1yFCx3F",
  "key43": "4ZzsLa23ubGsvMycvyPPs4SsgT9ZKSUVQd5J5MVpmvH41of7WUoCu1BCcDuU8XiCxwamhLfCpRFvwAZ5ofQ8Lyai",
  "key44": "22GRuXKD5vXNw6HLRZkPYtT5DudJBNqtS9tUXJn5ufrsnT8urU2okZ4KoEkY94zHrq3HenTT6kwwWvNXQejrU9o3",
  "key45": "5YvXk2F7P8qYYaPtzFqbYKV2WaxRCfjfHrjr1jYBBRfmKcWm9TgpDS6JZqxoqpwVndKmrKRwKNr2t6dKrs1SWwWR"
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
