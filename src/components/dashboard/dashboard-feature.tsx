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
    "4tueRSTTf7eRM9jxPxxaYwZPPWXY3sr8B5D96kuZ4PsH5LT4YvnzXRNY9pWupGBsRYqNtMKz4Pg75LANCKntFztG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmKnrCuMPdCbaXv1uxKTqAg1wgqobkndXUBbznosFv1cANErRYKgeGhYKMdEFt8fTsysXUDRE283wWijdACbdw8",
  "key1": "62CrwgxNQGduprjWVSzQM4de5eqMtKK41WNZ9cSvKJeWJuQZomt6bz1Pwi3NeE4NKpEvo4Rx5UEAnd64mn1TF6ys",
  "key2": "Awcwd5DE2pEcAU3Tp9xjcqQ46x5mRQdWmRwYicKkRMdZCEq5M7oHW8ssvba3Tu7HzkkuV9ZU6fKjakSgUVyCUxm",
  "key3": "fyeWYzucN8Pf1m54s4HPKCQYkER6bHB6PVG9guLpmNJsuf3QGcrvaiBgUkh3oFHuB9jPvEtgbHiJRnfpic6aF7W",
  "key4": "5QLYF7u8hJjm5rzqmGLmixEenJ9i1uVKRastcR3o91Ph5jJsa9cQcL3iWqJPACpeqTSUzRRSeCxG47iWT4Phtdnq",
  "key5": "GqdEA4RDgrWUNqgxkw55m9VaWhpBSHbWATUsnSgAu5riusZ7QBgZwKAntrBJFqJ63MAfmdMJjJdan4aAwF8wCRK",
  "key6": "4o9ufFVJ8CiVWQjerwufVodVpEBi74HgLWcZnQBZZxk5VkkBVyXGKfSeg6bT8pid91Uk5ALDS1b8BgFxeGnmz3QE",
  "key7": "46RZ3NacdZ67icif85LAEjjxctH2DTYJnRDFaxnCGzmqVJtvW5zGB8epyEAWDVnN7P7KTwYjuh7GnN9vrhpGVN3B",
  "key8": "5w4bUvDDW29zAncECaghWGpePFDikxGhcZaWWSHkmRJ5xbYCLtrKR54ieabh1LUgpTDRz2Jyf3jDMi35iNFM831g",
  "key9": "5PLNBwHoFERkuTGRSWWJ7ZRdBh6tBdjEbP7j2pg43teeSP1HVPtcjx4YCDF4KKgohTWvXkEFidnxQ6Dxedd1V4nR",
  "key10": "fDgLPtvb6DCo9rWxXSdaMYg94X2DqKfn9cYJ6V9sEnc4DxjgQALadFiYQYwQpLYsqcWc7pwDhFci4KdGnYu5xhs",
  "key11": "tnLAMmxRRxPgTEHgyJJQqZWjbtnQKEiKgq24aTXn73cCA11wodbJBg3XWV8fyAxpah5YNDdMeiDMmzrPvfPNUh3",
  "key12": "4NL4nWC7P8Xnb1tURQDorKZX9W8UHKfuZRaBo77C7WskPJ36CyhBN7X1P28qpodLCecpYHgPKGh7gATZkwrX6gjF",
  "key13": "QQuoqsb2HGebZTY4QXLnyTktdZSMGdg9doVtcJ3yrFnEpYzZc4eDuN2UadKuk8iv2Q64Qu195CUkPxZyAwcF2Zb",
  "key14": "2KpwUiegdbz9YBYhrBcwhqAcG9cw37TqVtM3av6bMUsDqdDMginnS6TdQwfaxoYywu2bnXMsNsbxn8hRfec7wNTr",
  "key15": "23YRZ4p7Kn8i2matKw1F4FLgkZ57GTMNxzerNLyka95qBrouhbtWEWjXC2NBooBn8iBC9g7mCBmBDJqh2rUtssVY",
  "key16": "54YfgA8tjpXwoPZERqGAPmT3bCCyPPMTFwRi8GYdi3J6ij9SybpzY8fyGSPCom5PoqgJJowNGnBieiJVo8Vjqqoj",
  "key17": "rvMw3PXTjaYcJmRbkL6A4uTrmxeAFJKh2DehQCm1mJEEvz5QNhuGUU3KiRmnuC9gZwBeRsH9gdHEvQxbxXFQrov",
  "key18": "5aGgyDi6jCAp8zEMD75vXYhhu4HGRqAy4i5rR5AGzn8GSt6XCdcbFmcd11dFtZ516hEVqXRZaK2rNqK1dJhNnNoU",
  "key19": "BCmYrhKt1cTFRebgK6N2VXuLctje1KdnhfvSiazgJAHVVB7SXUXz3Acqy8Qh852m7BzZrbh56TrTzXNMiZD4qbm",
  "key20": "JMPJAvJZVN8X5nH4Tg5QFFXgNsrB7CzpdB1UmPGE4JMxWSwwJsQLFcrSwjdyD44Xx7EunwZcwSMqnPMEZTKN49S",
  "key21": "2W3UjjBsVvTNqi9WwCMybKhmeZinBaewytzPCcNnLcJK6SdSCceJ9D8YZNoWMoPo7kXjHcjVUSwN9BAXDTcxK1DQ",
  "key22": "5PTiBkPdVFKyMKYrco4GgrnQD8dqM7d3S9yQT9AZVymB8CJKwtBidkye6kbcUvb39Djpy7yXLgVwv4883YMiZGgG",
  "key23": "2ai1x1JwiVedwYpHpHpbtpqjik1LSHexsWCYiTwTDsLyZ51aPT8gcnG2buDRfFwU8GhfR67f5mWAYmAPRH4X6aSP",
  "key24": "42EHD272LM6eQVvi89VYzcjUoUkWbp1FQ8DM9cUz2UwjAo7hu4RJ7t31YTbGC5rRZAjk73dj3MzNGkZiRp3coeXw",
  "key25": "2GjdFTuWjP9qSNGvoQexm6H4FmZ2Fj9rz4psPUkVYW2LPR1WuZ8mtXhGsURGVFykw1HkDN2fEMwMddh9i7K4Nc1x",
  "key26": "3jPhCxxMtKCQUW8Pe9hSR54BwVTsD7QeT534ZswADc8jqvMbdZtrQpwxpWAdHuouXvUVFES2GZJ7fM3ZTvsx6sAk",
  "key27": "KwL4BdhVQWxrbPKUxg3n7W9j71PA11HjFV27ETowgNaRw9eU3836B188TUqfjHw4AZw4fVdxAYotSoEy4m6YEnj",
  "key28": "5ppfPhikzxXf7hxYDHRygS4rPjhDTpUQzXfv7ohhwEJVe5x4cMrD97T95Zh2TLHVKYwtUp31CXBSHAwQgtmeMeZe",
  "key29": "5zi7xnzuFda1o2vb2WSMNmrtB3XvfMDhxprdPyNKvRfSAzpmUUh6bePnKz3aTCaKKgXUXxxDoMx8GyMtoMyiogZa",
  "key30": "3sEFBqvkRTNYfoqXmVU2sdC74yyqxq9X4pWomFfUxFC149LRhpKHK6hYPnTPsqvGRxTtTW4VSwEccSTs4JQweAs2",
  "key31": "4cKxrBTpSUhQG954wnuqt5SBGnEHHhJkkqJsGy8bra4rHHz6J8Q3hDG7WEV4d25WF6GThwKkjNcHJv5YELnwV5Dc",
  "key32": "EDRruZDfuoGAp6c6aMeBVaj7rD5RKRnnCGf3uTC37rsVv9aiTTMcHAcPpwLM1Px7MRkRfCSXLei2KnNJaRr4VVG",
  "key33": "5CqGuXMbq5kHyH1kjRLragQkypEPgV2S8du5DCh23QkU7L3Pg3xccF6QsNMBHgRSopjEPRLgu7vj4qaAAiAjXCej",
  "key34": "44vnT6LyJf83ZeEXcaAgKuXjXfq42PxELbPrmtiTmtCi6KnQ33DvHAgWXSuCRhCSZuFAmEQm4KxCEP7gGmwfkB76",
  "key35": "N6yBKWHvfcDHY4wayTMxKtum35KeydiQXRiPfzEtMGgHGDB5pPjBQ6JjqrU7hrtbcvfH2kvcoQGn3mq2WbrKfoU",
  "key36": "fiH1LKEvBkBsdejZq2Lcuba3ijgHXq3xQMuCKuGVTjhuA5gxSaqVgXBq61DDJtRSBUc7eigFMgYygb4RqoQHW9E",
  "key37": "43kjeDiJjSdqsaLiCwcxC82u2KXyEenJA6VFSEzx1WiYYUNLp2spZoHCwvi8d1WBzeWSQqn8uNk1cMBa3g1Bo1fm",
  "key38": "5GBasJY2j9tnh3LqkUkqw5fxifiekSxF3MtSuXbGvXgqfdGbCKN6d3AiWzvjpaEji8ujsy51Ap4jPpmppVGUJna8",
  "key39": "4B1KgWtT1RVfDZxnzBURdgJg94EDLprzZRTAHVr3UeGE2Femu6fj3tHT2gqeXmPpoC4vF5mTgDdZVBV7PsrhiaTL",
  "key40": "4L4N14GJadB6nAEcor4SYyoZ8aaXjJtPbyCMA1UBFzVYtzU9LV9gZpEP1Rs9ZweDPumeyYJ9ecEr5vs7vAB3G9D2",
  "key41": "TQ5eg7EF3QNePGd85zFzxBTC9XpoPQHQoTSX75GeGAaqGmdu345ubfyryRBLdoR4qoTisM3hLpBX4tMHuP8GH38",
  "key42": "2YQd1JQHSx1R7ymNyorLFFi26Wgxwz7ftPbk4xN3L92ViB7vZYB6mSCVJCgyFmXbXzj4z37gyERRFJsg85jq9Bmp",
  "key43": "33ExY74evfD6fjzpMMxSCvb3UwFmr5kFUXWXAdYb3rPhyXr2D7wwj9TrvEnkKoDMCeMRKgcy2STz1pnTgX4bugQu",
  "key44": "74VLiLGdxB5jXE6nP7RqESy9L4ZGU5dBSC17fAwaN5ShWZN1e1ojSsQny9np9CMb6o8chRWNasi95QeUeUSANaw",
  "key45": "4MtNG1CtFDVh73EAHtz5eAJ1osHpJfa2n4qgwZcNz3FvjKowNTJMDzrQ33SrHLtB2KCqyiQaDFz9dH4TrbwWgonc",
  "key46": "2sWBvrPpuNUvmbuUFTz9NwWLZGZCGUrR1udv21fnnY3PpanHXQUcLQH2s4zBHuTNEsxFmPSZqdPdggQrhtjo4k4W",
  "key47": "5cwLLk2fCSM5PW5gAWNHPM8s9TKQ91PU3hnU9LUhfkv8rg64nVHAqFCQyRTXgZ7Kic7bvi2e66unMqZ51PwJZbvc",
  "key48": "2YobaiuQcjoS9z9AXbne4yDFbPWNtPZH6q2LmxnB5cgtZJwnxxBaDj3nKT82M25sMVJauBgeFJEPcm2MMvb2Ry57",
  "key49": "n44hj3VDFTZkDRrg2x54q1TTiFT1MarQiQDWoZohjCBPcdHJKKcASzeHc8vkt7WPTC8kKCN56YZhruUh8GMWCkn"
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
