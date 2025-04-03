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
    "5N23wNLC6rqM4P6ifbE11k7DPnzLFy6UGWhghxPrJgbd99ro4i8J1xVbgN8VDtFCCWpHmcm2oKi4Cv1SPW3WTR8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFjiVoehdyET3QN9bYpJMkU9N9hf6yUtcShrKEycJumSvBiDXB4tGkxyqUPgQ6G5D7XQuXvphXNP3L5VEs5Gdc2",
  "key1": "2VR3scxxZsaRinzFrrrVt2RpYxyA6QDfpKUgCSazYy4WoAgzQpfFwgpKLGie4iseED4sU2CwiMLwh5ap8irbc8Ku",
  "key2": "2ygwXEEyhUsBuSyJTyr64FaPwqKkPPR6hr1c2pEoKxgw5gyNsZHGfFgTPGTfdu1mfoheyJbCCLLgYJdH9rxbb8m1",
  "key3": "5Pib9cSAjMtZkZ7y4iSCRLvSpMoxfiGTGZ8PymsDJqEWvMcLmY4hsxY8kNMnDQxH8aMkFjrcqJRutjj4mH3QSCY9",
  "key4": "5uoRPAwKH4FvUzkcTefj9rs1dBkRYqVscSa99Nd1oKDJeqnavYjgzcsWoWFi9bwvk8RhdCzsdsdPPgXmFoARLfsX",
  "key5": "zCr4y2RFuMBemX4wQAS2ZZL4tEyVergyT9HQ6Udfw7eLQebPqLWwnp8XKSJES2KHBj4u2errSvKQgi7EXKJtQwQ",
  "key6": "5sbWTrA3EkxgCM9WwRS6sBRtgpSa1Xx1bETeHNVgzSXgWoLKjRA5xRrPw77fJozZ5JbFrUjuFDvfNwjmE2ic83fb",
  "key7": "5YzEuQd8CoV4g8P5aArHnw24GQ4Xa6gYyBXQN1t38CkzMFGkKWfbSmyuH977K46GxFNcESSzACkdaTZnsAfVd6vD",
  "key8": "2NHShdbpjYCUDJezg7V94rNqnMnVBXj7tpbVDDcECo2mDSsfGgKMsPmC8NHMiWC6mVAW34bETfMvQSMqy2yt2MzE",
  "key9": "4yDErGe4TVUrcipxrSakCuj9VhLZ1rUtVqrMSuka3XbfUXXFaQpyPwWCrWx3T4PnTKmKKcEvncSx2DwYzuPWu6yf",
  "key10": "5if2rQcHkvNxvSuMxuZV5JspuGbHcViWd9yFFjDSDYiLqhUjwEXbHSStoFfV3ruhEGXkcD3g4ctRv7g9pz9xwt9J",
  "key11": "3oy5TB9ywnapizekNnhF6g3dGENLeHY9RAUYFLrZscSdmBFQE6AdLBDwBp26pUSgfbmHi7SFWTZQ9mAWJPgrvnoC",
  "key12": "TaLKX5eN83i8svAYdvnya8radFNJgcQNtMtHqx5dgooYqDgAuJnU49MafHiDjXhzrfhL24TqmGh2FXP1bJDZ1jH",
  "key13": "j7icrFn5XSpRdGM2cZcRnV1FaERgEfRNFgkVGR8ctwJrUMiAqnSHFfjbmMRYWRuTrPy9DjcwgNuUHBCp1u4Wrm7",
  "key14": "UardFBhCDA9qWhTNJ2XnsVcew44ufAx56aEL1R3dg7bjfCQeWbC5YQSUbAUCp7kHauS2eV2RF57pFaeXV5WifdN",
  "key15": "43MSVB5rLTV3wF88PPrkWkSJAUYsZnKeAikBE2a7PH4PRSAQm56vDny3RCSxH3rPhXeJvo7CSJNtdA2vPko9imir",
  "key16": "59yijo9K2oiJQXqXD9BNPd9bd3iBmSQpAqA5ENW5EgFZBm3BgZwbQZ3amFyiFAmnP6hamFHFA9BDD8VD9xNQ9LQp",
  "key17": "4X5E7wx5u3NEde8C92XUtuTMjd3TjLz4aN7GCkicgaE3oeuneJwCJL4DLHtt7EwWFFb6YhrNjStyiw7VktRtoBBV",
  "key18": "Hr2pEkDGrJU57Hcb9rvSyUtmaHiBwWeUptdxBsWL4JeYuR6hso8PXTZMKZ3aFa3h6xbwXF62s6SaYY3JdNKBnuK",
  "key19": "26m2ZRSW3yzVWAVPZgeCqsrTho2FupM13hCAeTTcpXaHgTYCCqkRmG4GqiSff3nhWTuFTzSnd264sCYLixeLtXCa",
  "key20": "5oXskHdRheFowc3ikqqVSW5f8UHZyRhCzUBqQiM6Qwg65bSDJei2U9Lr6Mw7P43wrHSjSHRN26isTagstGgXvfnc",
  "key21": "cDzgrZiWbPN5BaX8mbywd8Xybbn81b88wwjgNjvfJQMJEi9BjHXYUxzNi4KstcX9XUkPmjYBtcziN2qELt1TdCZ",
  "key22": "3KDAtwgxEJzPvNdQ19NMkL1UoS2onXyv86gaFrnT531Pbip14sbSZDhvvixPdShpDAccT8vDbDYtzv9NzVadEm7B",
  "key23": "6231sxqoMCabThMLkPGpJQT3EJrhc14MaFT8T7fBGcnFQkYnd7FvrNYKqabfDQxiZowj4EyDKbvLH6e7vfhSGMV",
  "key24": "48sNo6Mbb5CohfEmSdkvobxRem63MTAZqju2hqbWwLdqkqAyxGwcsU4GFfgdQRGRTWJAYb1hrZzCqUCfMyaG7fCo",
  "key25": "4MFx64PA75TguSAXJyhBBnKP3HhcFqaYpM42ck3dRRYywwN8hv4USyAygCknRm66yG1cmrteX846hGNq97Smc5DB",
  "key26": "2YzLHV6D2T8PNGaUtZ8bVUd5jcptrmjtCjx98CV9QqmEazSBfLEE2WXvQmnYnu9edj5rxxNwEkdQ4dFKmjj9m4FQ",
  "key27": "4WQywZdegN5tZXa3MgcxgJFNXLG2wfp5cFQ3Tr3mNh76TTx2HCGwWwm3FMLYk8HAFNerHQ9WhFfW3FEXXz9NY8bh",
  "key28": "4Qxxop14RpKYuMFSPqHoQNhaAE5TF7V4mFMbGVz2FVyzNWfXZvahPMe6yJYZZJKcm4GDvcDGw3wj7qnSeA6dJmb6",
  "key29": "2jwnBA3yAwQkVj5Wkd6oU9RY14bwbnASawKccwur1P67JygJWUJ45J9zideX18yQcGoEpjJKSdiw9rv7w7WptHsL",
  "key30": "92mLh5sLsbkDGgSBHCp9VoSPcXa82h2JkqSjktXUzvyv9brpMHapdwRPeaeM7VP5QMpEXghqVf7WjZC4UeVcUkL",
  "key31": "WtcXsKS4KMVwecc2Ks2fUBEumhpTGK4FPTKhqNxwxHPceht5x6smxCRDvSUeUuLUz6yajNV9XjCb8kNFzsh2kNs",
  "key32": "34uQVeWGeWRtwbtZRtinwtZK9p3GFNSLXsW9i98bs9ryevWEdL5MzPBQnNLQ52vL8H2xzQFEsPqT17b3WxcQx1fC",
  "key33": "59aEGgXW4M5C9RSUbEPHjxWRTNJE6kg74Jm51Njbbvm5dDH1LytJbYB2Cy9fxY9MHpJLdXcCCRYeemk8umv1K41W",
  "key34": "52fQMqC2ScWYbYePLLH3Hy5AsAniFpuwHXKpPNzEURysEN46cEjWfTD4qLC5bi9TcvN5kVnhoWh2P5ZoNA534VJ9"
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
