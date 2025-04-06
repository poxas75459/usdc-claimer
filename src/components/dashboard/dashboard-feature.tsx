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
    "4Hi7C9y7DntdRYPYsitWGboEGRSnzCGCC3T5Th41SNnG1QPv9ntdALmCB5ikrABE3Co7TC5YTUjPm6QtAukwP9qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXgr7tFcR4KcPVqTyyJqjYp4rb7fkZrtcUPWi8KQ6ikH6EdJXJbV52NvWwNyHCwqh3seSYqvgykXjZ4sorZZXnp",
  "key1": "4tpVpXeCF3E5XqRqCq6HPo5LyjoiMyKTN4KTNiGYYGMv1SNajKAX9EC6Y1sYKrHQLDuSLPF8yVgcUBj2PdipSqCC",
  "key2": "65KnqTRggjzP9Zy8oVsqUohAEKU2MkhC7i9Q2CTHwEi6Re3tKRRVRe1o4NYLHzmqpjy4pXpzGAoPnjqm5naHDPAe",
  "key3": "5uQPfodiEFdbGXaNxuTTofnvXgoy57RNGU7c95k9sbtesm3s6coPMfJEJQ8Rpf8eijmTa3tUbvrZPv6MnvK4X9hZ",
  "key4": "3EK3NrisA9jPJaf5uQ2vLBePsoavjndjCiwjhR2n5vXxAhpEAZirjujupCrPUbSrEs8fbGQB1HWVQKXkUzjudFEk",
  "key5": "4MFpBbDr7dbaxKaYdooeZHKvqohhFWvCwTiC2HVz9GzXUYFitP4CENZCs3TH8rFkv3soUghbAmvDBiEuinHQP12S",
  "key6": "2K5AQEnGGv7iMis1tbNSL8KzrqPMceMngN7KCGWxkZeHtBHeYPSF88SNYxrQRkLa6u7Fo8drbatMbqA6jasRoEhn",
  "key7": "5ddzwgkTzVm2Ja3JcGz8XDFNJd2oW733trZqkbwfAXkqgUWCRmNJASGU1gU7NvixAPMaLB5gUo36ix6xoRhi2Ru1",
  "key8": "4hHB1fKAMAJjQbWmweTDfmhPAMBr64j65h9HsFt4Z4uZZAMf2jeom8CSkEiUcvyVEFYD7fuDVmq2Gjg8711K5RfM",
  "key9": "4NqH47oHPtmRXY5gbsYjavBAZwgNQ5uFGdXSYdjrnJB9E4KDHb9FdezQrgfyhYBGLceFGPNamGMERXC9aHCPxZTh",
  "key10": "5wMBCCw53RAAdZVzVAvp71jsymikMZzwogDp2dft8coeEKDan2cgfDoMgbFaKRsHaoNugcVqHDe9Y3YLHf2AYH61",
  "key11": "2wDPqEsk33D5t9smdtP8gsyBiwSLgGvyLqBR7WuAw8yHzfh6XUgC3yVayVYiVmBnCiwczSadkdZDXa9vmMsw7JtG",
  "key12": "3cwfvxZSjyVNfrHzHLiDWu7Mt2QkMD79V6YSUZocdMkQHye47vyyAy4DJwWZxVbXj2MNGpR9h11aPERbsSLaKyu4",
  "key13": "3owNuZBYkSJC7frZ4McHDAudKpy2Dfo6tJqRSP2QvoDjKtawVvZ1L3jDJFBWa71bRyuHUucY2d9HMqHXf3bMZdFc",
  "key14": "coe1m5EBHu2ecnfHHMK7JrZHyY1T9eUpARszEzEn6jh25VKbUBYKAN9awAFH9UAuLDvbXKVqQEDite6jDkZm9A6",
  "key15": "4houjcgyfDStdyLrRCszFyJpFQ98Mbno1oPa4oPxGGQ1GPLYqFcpU4Bv7aeYpeFbvqzUXDt3gJsyjQ5RqhpqGWEv",
  "key16": "KfwJdCxHN9QYEtBv1266VPE9J5RkkCyKe69dQBMJ59xE9QjCFUBddgWKAGh1gtDw5C352WxECuiwGP19tR697wU",
  "key17": "48UdYxQwmRdNfKuFdhNedoibsnruWjfCypHTEDQvZej4im78KMfyVm2LL9o8AEbxNaoDGSZhLoKiMpfUgHK16aWp",
  "key18": "2wSe47ziPdWB4HTYzGtCTuqqodKxxp6Ry3gjYB5P874vWSFmtxH1eTyFH2Ddx5BeQBA4K1GKrL2FmHtd6H1YU1as",
  "key19": "cnSk3VoZ3T8JArfkXoRz5B8r58GAMGUUh7pJB89ogUrjGRfKkAqV5DDGgbifAZt1gZkm13TA9sC6ZwiZeR7qi4J",
  "key20": "2vyCSvpR7hHhcXhTFx5SfQyKBviSZRZ471NWB4biHeNvzkSVF69w1LgPb3rcubZHd8rRXtjhocYHAuPpSi765jui",
  "key21": "q27XhLgV2EUXSWkDZgzmc7MKtrEXWmrwqLJGxHTxsPHYa6kiDkhug6URaXNobHcmDk3GVzLfiSHu7aGZH1F3ax3",
  "key22": "4kxUmf9skFDptJ7axFBHuTTjLFMbXSGvXQagARShHhuZAQ9udNF1R84XMzR2WW5R94iefucBr9LwRTkWX6y8t5A6",
  "key23": "43n7Bps7nWnY1PDFKAN6973EAbauxQCqbMU6qh6sFB3GWVz9ypFf8znc1QAniqmF8GnDxwk7xMFPqAc5VBqSLZyY",
  "key24": "4fHvQqAG2M76DyRR9HTbC65ndqA6X4JwCPKpVTeigxfbAUv3f4sxmJsEo3SCbDsrAnoEb2BMaaHLWktVymboh2Yc",
  "key25": "SCL76x1Wk4QCJ8GJkn7FWVrc7aCm8aAkoVB98w1f9op8C3v4rhmrCwx2QyYqjBDX3LfmswVYDB4Miq3WXLzC2vf",
  "key26": "4RxoU71aCeqx2xyhEEHLgwvNxwzpWdsZtJN4jUge7KYmDZEi8ufByNriy6NLJHJ4YiYhrbpKRvdWnLty2dyhL3Xq",
  "key27": "2K9Y7Mwbvsj3csEMhk9PRaAgcC2dQBwVELq8RcjY1S8eSHd1GnNDHZVAZ6mGGH2RTvdkc52hbXri8HUTcKmXtWN4",
  "key28": "JFATBo5zeo4eJLkyuaoDMKZWoomGaGk1CnJRKkKjEfdxTrGBpZnJ7u4m5JZwRgximCiajqRKVpc2JNNoZJxWdrs",
  "key29": "2cD8vgpA7exUF4bVTTUiGVDbE4zUVskfF82Qcw2qx4soGSfTJzmGjR3MUoUzUJrxcdXiomxkq65yXQHukPD3p6Ti",
  "key30": "5EsEqBfDX2kMMqrJzkj7ugb6cLkcqXREaQjeCPmFkwB5mzNyktvdVXrvPNsHPk1w3J8NJ1xVihxbzhAHrFvGXshM",
  "key31": "64SsisT5RgXdABJp4XLKeYkdT7i3QvRM5tZcLdvAqdVXqYQZSs85mE4WBw9fMorUozV6x81svJPPQazGLfcCTQnU",
  "key32": "85ZpJmcV9hzWomutQ8JAmVPeWyErzSji3ANmeq238QUPXetpMWwLZWDsMBbn1eWS6zKykePPDekUK7wp1obva9A",
  "key33": "42T6329cDcPstMgkynq2pPunnLgqMZoBrKoBo36RRSdkNVD8PiXoWo9drjj3gBwMfad8nwkMZPMFLJo2so4Nudp",
  "key34": "4h9SiBr2wUQZSB2CSHZDiYjX9Wwxc8VM5gajE75jAMswxoS2AGoLFsbGKc7MzQztAiU8MWJyQH6hrte5eZicvc11",
  "key35": "29KuKmV8VuDRheR66xgcdd9WwNoKCiZdX687783k5tbtkyA9Mqg4KbFK6YBX5MeDab1YgZG8NUoZAVDYZ5s6c9bN",
  "key36": "5DETLc78GZtSjQ9ief9mJiLY51pUzESwASKUq1DZvP2hTrjEKNSTPRd9Q4vPuycvWZMy7y4ceswQM2id6EpwNhW8",
  "key37": "3EXNpnsYNzyXjzGSDtBnty1SLLBCoHzaR7F8PS9oNgEhds1wR3sjcmrPAgfF1eDubMGd7VFPyvuT8DeZ2NePSaUg",
  "key38": "syPKkUKdQgpmNyb3q9LXBesnHzRV6mVBcdsQryX3BXC9vaXwKATN4NTJqa7dhApvTxew4SxUorsdNnDQC1W9UoN",
  "key39": "j9Lt188HGLrDfMwXdjoFzEJaYdbkag7WFCoWGVBX2eptaNaMpQEERVFTidt8PuyqCghLqCDjRW2QgrDXka5rikh",
  "key40": "3RkrBZtMPASbEVd5we9bMdd6Tc2YobfkJU3LbSDUqQVd4cMorZbX8cBXH3UyN1JgPiMTb72uAkmgZR59rwwCXeu9",
  "key41": "2mdmapcLf1MnV2vcPC1mLsadhbTFx4EnsoDpzMijpfrWTk38THg71TohKWdPbauWyEZySzNPtnRowCrgR9m2cAdd",
  "key42": "5L8pmExKZ5C43L1x2y3BsC4mHL2xVD8D4u3rYKcc6ARkxLjc231XsswR7oTeB3zRARBsbKQTH53qNMuSENgpojoW",
  "key43": "43nX81kTdEMK8534GuHS9YFv3AN9cTYLRuJhCtKYTGy2darB5qiCJCVF4rVFSqi1wvVPdNbRfFTG3p46SSGhWsoK",
  "key44": "2ch9vKf8mJDcUVDZ85zF4ioyhaBqTwCq3YnK41uSFzvhvSoYctuhSNWca7akXPNBuQdP8XaCAB5RNcPmU6wYxiNo"
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
