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
    "o9tMAzjax5GhezrocLbUFeZ3yKefMxsEu16wkLqBrPRfuGaYjYU8Dtx7VKmyPofdRyFwzcCF29CrDvTvpZKYsDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dLuSrHBsBm4bXiT1fZMW5BetroUqdDDmuofbGC6fgwhCqdYGZUbZ3FyJWE1a9n5422JPex2acU4JhMjZVEBNNWV",
  "key1": "5Pb8mFftGXpokUg4vjggWoa3y4oEWEazFH8UsjQYxVmHLXU1EG7RQNTbCJB8tJdE1QPGNyaBwdtP8TWXJmeFsZH1",
  "key2": "49e6UqiLrKsqDkc4aJJ9tWLgEDLHE2VkLrzpxPJ4e99wbJT7ybzAMAezzeAwos9WxKPsT93vragBntbJ94h5eFwM",
  "key3": "DDB5dzfhZwf7ZqaYxrBWCBHiDQcYHyVvxypDk7KbJxQRTY6uu8T2Y2fpoeRT52KbQYKkZ5dP2TCNc4MNT4PPcQH",
  "key4": "4QeP2BErNNbXQ9HBdNHv52UJ1vbEt4TjrywUcBgfV4eAm15uwvtbsW84KVLCsRu1oY4BPbVGcTsdErmmVYHJ5jsc",
  "key5": "KSUYGJxVk8uX395t6B6c9qGyiDvaBwP6LA9ACTUF7fKwA6EAN6Zw4tETVTBmyCUZGxb21ggCDAYKWk2p1zJgNwx",
  "key6": "2yf6SFS9KNATneEozpzVgax3rt5oyKhoi5S7P7wuCtAuvUBpF6xWmjLDaxXH71fgJtpnU3fb4d2YNDroq7sw6Nrj",
  "key7": "5FJgYksVJ56fB3Jj2g9bTyQdwThxUbGJNsJqMP7FvD6eDvhpzNUMyjGBzxRPn53Z8P5MF37A5Ph7Jv5W74nUHio8",
  "key8": "mxjxNrG74s1QcE8BFBVz6Ntgvc7ZRUmVRp7jioL9Memr1KMpbSmV9VF1ionnfsKJN2CC6sFLgF77ELGipSQgreX",
  "key9": "KJEkHocyvN1wYym3MuuCqhujVWLTXFmQSi3cRTu4sumhwjwDXN5tX2HmhaRp7yDUX2gNSXbkAKnGxaps1LXz6R4",
  "key10": "4kmEwcCydFqwzZ5AuedZCfvna6SfXD2HC3cHqXFZCjPpKkdnp5AACaSzNfyLudVAFQPxHKkzKVY1CdxiTLw1VBqF",
  "key11": "2ND89ou6Ejd85b5gMfjxkFs7wvcFfJdu6ktbpyGBfaX64268PghwbmwwwYZx9foarn6vLFgiRy3eKyvzeMvev8As",
  "key12": "5fhKC6gRNKRJuRfJ1bCETz4b2dvjJ7qcd5o3ctcuSyqUtJNyWub1nHYUWWS4aeqh5R2eEb8KJCD8VcjuvSkWUEBK",
  "key13": "5ckahQm2d3x5iP8kH5eQdjGbb2vTdMhQaqgb7JLt2cvuWPCXUKux5YHnCMdb2GDud5FfvjAx5khJxYynb47TvTvw",
  "key14": "3oeZBL3LxYr58KmmhR7UgtRV1ie1t2SRoXqDWzwALnbkr7mbqDZ6ynscrCT6iNpfxKCnJ13a4FBuSpnHN9vsv4Bv",
  "key15": "4NgDerqf5JRdmKCby9dkBaD4EhxAu8wVerBHsRsR8nMKhMtgdsUYv6UGiW3nyadm4oR9ynDBbKCN2zQxCasQ22WF",
  "key16": "5AxR9jwCRjnXaxy7VyNFEgmmTRj8ZhAP5eby4KahsFsX35SmLvgdFNkZKHvHHDb247HN12MVcQUgkCrj7E55o3PQ",
  "key17": "2jGDfMoPSY6GrYfNmMH1VwnKcnAZzNg1vJ4Fwfq2bhxF58WS4e1iu3Sicgn8MHkm8srgD9PsHUSjZsX74hifPCXN",
  "key18": "4EdP4pHgCAupR2s2rtwyMNgPu7Bo6tqKZU6hWyBFuWCYfRF6gtCiSggbkQRqaGPcSfffiBMrLDxyh4hSFnt5nJrP",
  "key19": "4LK8AS3GVNfc7GLo3FCjGucsrCV7dFMnBop1FCnPGpLuL733EX92EbBJTxvPcTQFemz4wiADgDWgVSzLhXMRiJos",
  "key20": "4diZyrFyhQqAYWKYe3kAS6xcv1qZewuvNd1equyjiVFyG2GhyQHtGzN9HUwdhPh2iYPDwATtFmJpe9nZzoxQLDwE",
  "key21": "3X3RdKFvEAxZCRqa4jHNkvAxthvTXWJnWJsfNWSmnsuxKUX1ks5a59YDwRGBmoLUmaMsgNEvxiFRR3e6F8Z54tPX",
  "key22": "4JQWpab85GMQLrvLiGxboC98eRiwtJ1FsyaJgvDijfBHcUbVJwPcZ1D6zuucDK1MR2KtmPME5iZnrpbsT3Xa4MZU",
  "key23": "419qYXVuNJWowVpVDm2KmKERb22sC5rDDnppWVH3jbpf5CVo2kXAzQLrEXS7W44UpkUfTDwGAmxzyndNe5JdGvwc",
  "key24": "3CySVsYpxia82YsSzzqU678xqTLjQLkrGgARcWiJcML8ZT3e4kWHp43eWnMnUnbMwXb5F2ho5KjJetB55b57KBZ7",
  "key25": "2ESDHifzNyYt3VKWZtMWWNDVKt4G3hxek2fdrsjXRr4CmWg3sfGEL9JgFuKXghnPmYwsSUBYXXK8hvNNviPoP52V",
  "key26": "3BLdTT3e884Sck92hcz6Ni3BmtoBKwZAEG9eTHd7kZSVFC8bXGAYSUmyxMySrP572V3vd6Ue7YhP3E8coC5UfLm4",
  "key27": "MEvZ574VixJbxeknzB9mzU3RedXveSKCSmiwE311kYFCLhM1ijhoZunSLPGnxAaBk73g9Gw1pJ1ArJj2gbqPHr4",
  "key28": "4g8CTRp2gCfikz4ajwm4gUMUJH89VJAQwXCXoJY1TZ6ZDkTzaanqDgXtoCJWxTmq7dJa9oWJmiSVe6WoC534u9Ty",
  "key29": "iePh69ZrzT9ftK13Jer7Dz4DVPBzPMoxdvhKbhzVUg8UDkqz91WRZnQqooHZLDNfFt8fRtM5pzwRS8udf2obEzU",
  "key30": "XYUwJxM6C8NVpQZhbd7Vd4npQwSYNnnNByvKU5wRD41L8mKVgu6HKSiGpVTTV4Htq49KVijc1SxeGumfq4jFSAj",
  "key31": "4mU5TmBMgLpcoHBJdguPt6Lq7z4NCE7XPdXXT6LV2xWorbUBkstJwEwGG53nnLiD67LrVjeSNSfaQYTyqyJRV5bi",
  "key32": "Sr2nmBGc2hqwPBLov8TPDZ4eMQC3u3nTXnxHFmht6qNeyFb3W4QXKmSCNk4pfvK2ogL2oJe4q2ywj2Bh9bGgzJ5",
  "key33": "pS2B3Se9PAL2mn971FxZHvRunyUqvDzV9XosUgogyMWgBAcwQd2hZnBm8RZF2zkD13it1g5K1wZXHiqMSnTEejg",
  "key34": "Wf3KWFRQReX6eZwSptVVmkEss5rPk1429tLNrTmrqyWneGSAtUuzVWxA2SyPKhoMvc657qKZweKb4RXyvej3NiQ",
  "key35": "2u5jtRZ5W5QcsvTPuoZuxNaDrNr6gbm9MyojTFnA28jiUGqKVLakKcgdaE2iWkcuJ4vZok3E3yjieQDMJz3SnRJs",
  "key36": "5MnQpYTgYEkiDao2kCLEU2JpM3FJ4u43R6ae1FjarhvikYLQBbeV17xAAEQLfsL7V4YdwrZdGsJz6crd87kFanzc",
  "key37": "47aeoSmTEJK5z6STacBHby2mckYUiGsy6pTS1KN2ELMsUeTL7CTBx67weWzdwZSr1fpcmZUxHBoXQ2wSDZwLWGX6",
  "key38": "1nKfWRVp533LAftKrUCaq2GPnRg2DHUjCSNw5zKVb7D7TbqCeuPv2SQS1CG65Qc5GWhc1vf4EXH1811SD2FST45",
  "key39": "9miVBzk9uEmFUniHiswaBndqxsPgWoQdwGyTuyk3Sw8udQbrccLB4j3E8LVkemCe71KMqAegD3uffQMypBmEcQv",
  "key40": "PohQiDbWVQptxSQk4XdPfF78tBn7mHLYDJqbH8xRkMSveKp3bQk6fSqNHyLR78qE8vy2jtBB9gawADgo77C8woY",
  "key41": "swsxHFAdRPuHe31N7MgK5L6QbjGxfHvpbzHC7vFsNfxe36ScFRpAdAJNMA7Yrud9zfzZPKvA5qv9yQJCNZf6q2f"
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
