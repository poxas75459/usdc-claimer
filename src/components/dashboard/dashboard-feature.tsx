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
    "44M1WAW9UdaBcvNy7zr5AkeyA9cuveKfrY28bpC3qHqQR315c7em2m1fHzepgBFB5kZm8C1FyZkzCn7sQHphSzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3ZpECQut9HWGm8HqmtAwSfJtxoFdznNXighqJKhkeW62SsXq2PQoHW3sCeZ11sbqSdtYBWhsbZEiGuJj9BjdDH",
  "key1": "j4VxUEagUyvEryS2TyzG2mwfEA23kGP3wGY3oywC95hFZKNUMBhi8K7ahVLgYfo4dxY5q28AVy8bB2E6A15ZHsb",
  "key2": "5YRNWpaz3dteUJDMAiTetX65GKeGBEha9GuXXLUHRHa9ZDufQVjbbrDi4UwBfSx9WLhwAMcUCD8TTwKiYZruQ7px",
  "key3": "5gtyu4jUQ41eSzkjLdKyYLTxYyMLykReguWyi5VXK1qMsjzAYkWfSjAzXV8XAUrbMN8stG1Nxbu6CWWYefBDMADK",
  "key4": "2i1PrV4WP4jM2k84uMedJbQAMrCzdQf3eHpaP7P23UkH7Gyxbd1vkkPFRkkE8dudzLvzuYewuPxyrFFbtn6h988Q",
  "key5": "28P3oNJ1PgsXG3YNQzfrS1KcU7D1NDcACZ9jecZ7YDFpDiaEpfcVHgxu8GgAVxvbd7KAATutYYK1tZAfbH2veFqV",
  "key6": "9uhvoarrpjEey4McEegYpyX5kfj5BRUPnVEGeo5RZEMPkbL9Tvm5hYVNziQeixH1wZPEd7jqhpp2StBeTXY32BH",
  "key7": "3YLgqyJebWRJ9ZoSPbakukgnKiNBt8FHc4chGWFJ47mSNKMND8F19gMnniaXqjpFofTau2jad1hFodqxbmcGtCFZ",
  "key8": "MNVZRwYochKnVqU9tyo6k6B9MgFr4eePoRQaCFUHKsqeXwZhgPvKxJMqGLU7T24jAJqgGBwHfU3K5xTmX7pzrDo",
  "key9": "So6F3T16sDwaajpjbuHdQvAWRNSPgFsiMauBGBsze2Ux7hdXpTxWS36HYk9dj7McvUvBaG5pd1tJVE9mxpTe7oE",
  "key10": "5Z7eTNieGuLfGGg6Eg9wRka9vuaH74e1R23oq7GHfjwJ4YPzgzx4DqLATnpPRZBqhsmSgYnAEKkMKCBNLKoEMdgj",
  "key11": "4HwFWKVD5VugUBwxzvSDUuBHVG1Fg3dzMunm91uz9CnaPBi7cCvTpAWA2W4M4s57qEjsqhN4Zkygg9Dd168NL7bj",
  "key12": "43B1deTVz8MwaTyd6GRS2PTuKJDjCrhCuSXVuipUMRhUVK46FLz7hwzha57fiYaqMQjY9vuS6kLapRrxSovHJi5S",
  "key13": "McQa6DBhbB2Se6e4ookieKyd6Mda9zVcCkahjaZWHy26MpCLUrGy8j85HEaor6dMceCYtjd2ZsfJriX2cbLzskQ",
  "key14": "51Y4LurNz4iHXnn6pfszK8vw6SrkiXqTuQRgartYAyxvVJhcizkSLuADFpAWYHQNrfnqReofKPMzKKUbsA1UszEA",
  "key15": "3D8zx1nbv4gfSKmni7Tz7VRPmuoV34d3iDrCXf4dnUWi4HMw5u7kE4HLAKZEcm46QAiFvJ6QKYzRxjbny4NYcsAj",
  "key16": "3wahQc44HeXofLvMULUxdJJ8XNZqcjQAsnkdStEjA6w9gHr5jUFQKJbNrrwJekeev4pqBNGd24ijGtkhsSTVYdJg",
  "key17": "62Ht9PcodDj4DhZZtrKsNopphK434rc6XdEWFB7u6zuyM6GBjAdJPQ9CLDr7GMNSMkNnEDkCyjEmaa4RLkWx5Yr8",
  "key18": "24m4Q9F7f4NspdEsrqff3cLVZGtn9CrWkBP3LEhJrPkMjo5u4PUq2ZR1hCacMqrCftDqk5RbChrLu5G91SxpkAGK",
  "key19": "3zSZNf3YHUB1iNMqxVVJP4uobStaqM2Z6ovtgmz3sbdATE5iEkXv6JNESkQ88RTVGzLcogNQTbC8A7hS32VfckCc",
  "key20": "2LAGR6ZpoCyEPQPcXsjVLsEmWNL7swEtMVVVHqUrnQgMPzxskFQdoUiYwYDfCU8KjQixiK1qyy9FwgvojWwpFxNU",
  "key21": "5i2gnhnws6NYUmHTfbGQFACTZ1sWaoGqHN5tATZYswzZHRmDYB8wDqqWS8XYX5AaEyyacjmo6PNso7Y9SvFaKyPD",
  "key22": "Ez5radyAhHSiYPTus1TS81SiaBQPA1YcDUuC84jq3XPb6sjdAx3KqymJa14rBDrY4FX5t6Y1YYCSFdJEtrZCHsJ",
  "key23": "4itZ27tc5KWJPGc5QZpdUJWZbuQgrb5whkdWTKcwhFGRpxyjcZpcmyQXLLkFeDsDQZYFW4xKjEQNKEGJb8Ldt2ut",
  "key24": "VKZ3kadCps34DygKJCb5cEKB36Ctnmqnv1PsWfkkKpf6mg5JQN2b3xgCdsRuy6Gcgvg1JteoQje1VmkSzxkJxVo",
  "key25": "VPEffGZdGcTmRHfLXf1pbU3U7beBRa9j6FjmhopisrkZDQa13BQkqd4ChmvpZbJKdMacWA1tejkMjgbFNYcqxzF",
  "key26": "5wRNb1CRkTDuP3oLWsvju6c8JBVrCLT2WJuQhsaVKFY2Mf9p8xshYU3upHuDwqvFtXGt5LjydhWszjgmEkdXVWu9",
  "key27": "44xu72JMnXpEMGbduJFhraU8sjAnSmW2ispDyYD6Rv2HYP6tqRVWukA86J53DQSPuJhWzwST4zvL73LJjRAUyAXe",
  "key28": "3cJqfk1C3AFij6fDiT3kvLe2durWcBDyQoibkXRZE2DwYG32SfE49Z8wJZRg8aNpsjEMdUVgxUz7GeaKi4t48S61",
  "key29": "5vxsvyGf2RggPnzEuTpxS9TwobB3MmYA9LFpaLtj6MYqfrCGnuruzaMv32T3FQ6i9BpzWRFyNtrvP59hVxnYGESm",
  "key30": "5hxqwJAvdcqRqNjbidQS3CN2jhsfDqFbbXXemYkUH3JB1zqsjFbgFeP4XYpttgLaup19hVPsAFqerCuTSypxWawF",
  "key31": "5mE8dUFtEtwz5wNJH8MdZJUurAg51qaXyYzz3EsGfFCY3ggXPEACukYfdACeoiCp5i9xBGNVR98VAjmkGp2yiSYG",
  "key32": "2fDAewfzE6qm7ZviHbFE4PSYPvymbgn7RNfhDYh73XC2n15sjduCAypwCN7afUTYWcMiYpc5wYCQTYUJSYg6E4Dt",
  "key33": "3YsCK6GwopPKdnFAzsg9pYik6d89uNZ6k1s81LBdHaQTxKkY8udNum6MHoFfWuuS1VJXyDkHbXS4p2wAg1AL35qq",
  "key34": "4ex8SiVkk7HVn6GGbSHGVK71Wv9i3BgM1Q1eyc6UrdQJuqJBMDbcML9KaSSK1NJKt3xQB7UwhpBoZ3er2MBtvXR1",
  "key35": "tAVPVnvqawLgARFDgGnn6e7eY13WkU1JFVgTcXNq9gcLHy1PYQgfmBKKZf2sizojic8Fz9qUAPajkAcDX3umiwr",
  "key36": "3jUMHetHMGo6gwLkumnWEyCvr4ZyQUA839i2YqHiBGiTDX53whQUSJ29dRXcz6e54f7M9NSnKVfarf7FN1GVd3zh",
  "key37": "RFGui8xiPsqAtTDeX2kAAtYUavDxE77MWo3bkaU7pWosxGeqhK4YVgiLq1ziwcV7LbsH8FKmyREaUmcxmDXH4s4",
  "key38": "jYJbCvKHCKjCimLUZ2Pix1bMP93RsT6NWBB4Wksv2nkZgjsLXNxSQR3ReyPRPefxEFoFH25fgaM5eHjD7JpMV3q",
  "key39": "5MpSknwfTvMoPVhxqHMyVybVCZ9vvMdQGFBiBS5ER2BMFCXfFcuniw1q3GMh7rQskhtZAGmD9o5VCgPTfCxfLobd",
  "key40": "4fNLqwbCmPrB1jHKMUyfvEzbSF8AnCTgUG9WZtEzTdWcqxnBfBqcwZEnLEasWhh7kT1dFWEbfwpajqePpmfXhjQP",
  "key41": "5iRsdc92aK5n1FP1G7H7AJwvr7HJMxPbhtddaciCvoJeaX2uk7uBNj7Km1AV7r3TcGAgz85FxUj9mwiS1awLmo7A",
  "key42": "2pcUVpAYZRUvjSLPpuQx57LoXUfVVvchcBagbmxq81HqhyS9hKDztFsGFPAGLYJeuU3GNin4Amk9EKV8WU2VhWnv",
  "key43": "5bzXp5HxrjWL7s7PNwAAKgWQXfZn6fxdcsCE89N39nFXDSGQZdffpu4WMB9oWfQX7eZ8gvTWPBoVKPHhkyp1gW94",
  "key44": "2hmtscRVkLpQzvaK2gj8qTDZZmDjsfPsfTE7FN39fKBeAJpLSL6NMJbgf3Fh41bGGx66VaVnJCDYGe3ZhBKPH3qj",
  "key45": "26cbgZUuY8SJeo1SB27jXt3T2iP3f5FPr7foEFd7LAZBt22yDF2L5EWpBaEHF6i2WLhwHcbg7YYzwEkNSuT5vsy9",
  "key46": "5nRuLL8wp2MB9JBpWiiNG1x7WQPcMrGbtqqUW7Q2uh1gSzxpbSSzvf868Jta1sqZ9bDVbHcp1ZB64K9dmvQCVVYe",
  "key47": "224EXa3FKknf3Q3gEtDt2Y6v4uVKqBYbNDdtFxFemwL1XnDPnbQVo7mx9uz7Erfzu3fvTnextwJxuZzj368gUSiN"
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
