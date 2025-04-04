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
    "Non3H4tzM47NgcVEGchK8MYkqQFAV6qz8qg9UKvzfwj3gN6XszVgnz4XAiyvgJzsjsDhUyCz5i9zJE9BtVb6rSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Vc58jLVQD2nYWrF7LmLZuqJysdPR6gGsHGtyEjuL1PFt4hiVsGDkDbT4EPBT3f9NcL9ZJ9wYZfmgmmc6icisFX",
  "key1": "4TaGEXarNSRsdqcyRCgBdH2mbgX66ykX4DdNF6ScaN3h25rLAJ9KXvMJiHDX1yKDjWRnby84TjjHtHagu3VMYxw4",
  "key2": "5Ag16ccWWcQB41xENNFFQAfbaYUmdLFK5C9gbCLrg5jsfnmwEwaygK2cgtgr8BxEWQDebuVe5BfyCQzZoXyYkT6b",
  "key3": "2idqYpJj5oDX7cH1K8gPgWYHN3zVYRhEGRMC7KRQodoQMGwUK1X8hAA9DZhscJ2DBbiWrpbWKaDwECMHbiYu9iqi",
  "key4": "5HeEAM7RcJTF6v2TaFpQQPNBH2WP1GUwwiEfMVeMQvdCMiymAdW5NvzatoxkepkHoecfbbA2TAyJcRsE2Zc2mcV7",
  "key5": "54kxS7bzcxCA1QaFp4urVH4qTSALriPXy5p3bJDoxPT6AktCz7pee3aM9J37s9rRFoHfECStF9vhXa2dBCnLcu3A",
  "key6": "4JjnQ6114WC1vaonSocD9vp9E4uetw6ZG8SkkYWeyJpqs9YtLYTtKUAmS5hzBNtxvZyfzRxCyd5Mn8dhys72HjaZ",
  "key7": "2Crq9hXmBATFhQ3VuQWZKyLbbvemSxwj8oTuzZtH6WRvuP7YxuGgg9qfc3sqG9H3vWtW8kpsmkNxgU2Y6S7HPeog",
  "key8": "Y7ovnoz9pCAkJ2amm6KfQBy6nbz37Nf4HFm2bF2td1Bv9i7LMPUMCDBmPpMX2RSNUp125owGJ5GavvRtJwSLNVU",
  "key9": "3gXzTUzUVPx9EKfnQXpMH2ptu4RKQpGy2SPKLG7pkGQXsq9TH7DmdKiAjtxN5ybuUb1Er6pFM4Gz1oSkGywUCDPk",
  "key10": "4xuKyQCbkCiggKdAxNChsegQV5t4d1ePhLBGuhKzSiPcnwZCiEJChyh29NUJbNkf4RKWCyJm6DTt8JvcFNXtgB2w",
  "key11": "5Eb4kaWR5HzMrZFBa3xGB4EjaPVhVbSL8X7d69n9hknFbMbaKsFCnybNnoe2gk4kscCGsT1mdRmx9L4uik97nJyV",
  "key12": "5SsAzxda2RCn5EyVsakqLDesWKFTx3gKz9ZjDDzBH8gKLi3Eh1Bh61pXcRCX6sspJBoLxk7hppPNTSpV1VjTyq1h",
  "key13": "26xzTdibKJgREHVLSfUi6wUho9Pv2k1xS2RHyTTUzMztqDSft5REBgV5AENAt3wWs1hPjdpDGReyCTNAJ9RznV1M",
  "key14": "iQKBxgYVg4xiGBxdjotQpH37paXkT4mG2JeSak6M1rGMw9NwhfU9qja8Exb1eSdcZLoxgLrvGxspe1Uw5t2XCbN",
  "key15": "jbFEPiuBsAoTectWL4j6Do3WGhPSMuGKr7QBAHDpaVh5kDE7Mh1Zxwbm7uLhioxfxt9afE7ZhTPtEU1v3S67BSi",
  "key16": "2yc3J3oqKFe42JaSUoqRxxUNavAFhtDgM1tpqBRg32FVTJXkZAeymfVMY1JHprwKBPGjKYTaDXefPbwfrT6nJuvS",
  "key17": "6ugTAgcs3msu6hzDeiuKjUeGNXnQzpfPiaVXsU5Lh3Yb8LjZ9qdYEn4TUHRvJkBhQJVSd1fhJPuVeZzB1BCrNbR",
  "key18": "41xH8mEumHAMC5pEZtoPpgmdb2JaF54s3xXdQvxab3BLjhrzkM5aeLug38FsvcoxBVFYiTW3YUEDGmM5TQAWDtQi",
  "key19": "3EwuFtzL7e4go5oHeJGHyv5DxrPb26kjwf1BGrh3NHJghrgghbgg6rLywPdPExdQA9NiMvs1u9niHSzDmtJRGrbm",
  "key20": "5jXhooBvKHAmmscSzb1VERpVJq6CM2rgNic7HyX2ZyYAZ6KwLkB2x3YhVHE56NoDATP1NQ1ZM4B9sWMEw3BparjK",
  "key21": "3PpJieXevki3zKXCDtsA5jJqrdPSA3LWZE686cbyPZ4wUAMU4oo2GUknCPMh9xAZ2eg9JsaknV9GsozSAnSE7RKX",
  "key22": "tdZpFav4jseqL1QLwumN83gnfEkrhmsLJE2nw8zivciBMmNWChMSvaG8rypZKAdrdKjW3dkrTEgAcfFdx6tbh16",
  "key23": "4GbydFwMTBhwMx8aqcFjeWshxphDrQxJU5y5KjQjDWch4CaYnrvzPRdxZGPGnitECntqZsi5z5ziH8J7eW9Yzz19",
  "key24": "dZT6yCC7GZh9CwMfoXFDtofzFJvtbE9DNK9RdHpaMrTSEHmXAcdW7jK5zXJLnKmATHMDuV3joz2xCqAuEUV7xCW",
  "key25": "2qj5ynXprV3fMJR1J1Q7zRjyHQrWyw1bAvdDyjvRRfMmPAhLPfRADGPHhLwa69RbNZhai2oRd4yYVm4ywc3CdL7j",
  "key26": "2Q2f9cjV1bXb1i8gruWw6q7RVNPjip2n57KCJtFq94odp43uSq9UG8B8fuy4T5P99vZ4ifJkrj37JfkUHvUMKFUR",
  "key27": "YxZDaqvSnTZpB523yg8RX158SPxcEgSqVYqq5vMXUnQdaM8JaT2wrAx8ULki7n6fjDxvfsWYntW4FxS9j83awSY",
  "key28": "3rDWmDXZfV1HvfsPyL1Vhuo6LAzohFHvnySJhC2XVJ3dgAaUEZDoegWSAHx5oxjsgRN4ywdCYaxW7zwQ6KEfJpvh",
  "key29": "tpK1gJTQ9f3zvU6sbjF38KpBSSE6aMn557dRMLKDuBDaNcsZMh7Wt5Eoi7HTYiqw6tMk4aMSU1ELWzTpYNqkZXd",
  "key30": "5onpJjyPzgko2MssYZrd8bMxwqsCerFuho1VdsYPo9P4thGhqdeUpA7zZpdExHHtapR2FHL7oWbrXb62rhUZ3rqk",
  "key31": "2zFCxSRe75eCodYZSn9Y1wQ84o9BDiJL2Bnqo6yNrtq4hTNT2hdb9p2piM5KwhXD1AE54eKqf9bkBYhK9BBRu7Cu",
  "key32": "48dekm648HAPNDUJhmp7eFPMNEKZpRgVtYZvNApqww1wMXCNC38ScL7xtu1iJMNYWpNLWRruGYBaNb4iVApVXXe7",
  "key33": "46JQMXdXvdAfh7mZ8BrL7MjnRgw5EiaFyMoFhV6dg7LGua1gcK4q6AATBCJG7QzdwwsXKVVuKrhqcJjusv1vuwER",
  "key34": "2iQrenkV7doMVqLddp5ZxXFnkH4SbCfwtjYZPMp2jb5d2rsJqYha4os8cWx8ZAtEBC4GLagmu2SNgRjMeV3PMpU",
  "key35": "2kBKhisbUD1kH4aYcwbJhdDa4gomEiCZGMzrKbxGwE7UEvZawUpKYhk9eA5yr58QMWde8PMzRNayqU4uoGnr7FH8",
  "key36": "2MCNgaGFzQtLDrR764r3rv1SXA4qmNocJjWg3xxjdaFKiRsKE8dnaswNDBmD3XtVeX2icKUb5Psx4ia1Yy1yr9E6",
  "key37": "66UdrhhKfX4j46pRgoZZMbMReJDLRoty6BsMw95jdYQAorD4FTvQbxioDr4jdbiArjqoQaxhYTdcskTpYWN2c7K1"
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
