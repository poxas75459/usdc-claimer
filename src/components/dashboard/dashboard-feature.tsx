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
    "3Grg3EKY8U5HDLJXtb2DiFhVpM651UztEnDXKcw1jJb73hDcq4TyVWvhHmk5z6XqudApseMSTxfv21ht93WzSf1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJAuQ1jo7zd2EergKYXxRBeeTLAaJBMyb4KoU8CAFFo7nXDULJ3kRqdB2awdY8KV8PYzQsRxLBZ1DF6gqzPReFC",
  "key1": "4tqhsxQ3tCcKncTvECVwecmusnr2dVijCQXjMrUgEafQNSu87fczhAYERFmJA5qQUvzYHue3K47pon4dr9easzAD",
  "key2": "5sc2CQ5mAt5GKwS2oFLWBppJNWdzVjKGvjVoZChRtdnFsVLvwdY11v4pD3DJWvfxGbMPHkBmTAc3Yv9Jmvbhwed2",
  "key3": "QEEibrSiBehfcJjUTazZPUHAf247NthGuNPadqs4qz2AXqmfG8AxC5g5bbUNKFMnoM8LQhUjekUAECmUcfiaRjN",
  "key4": "3GTFdJzn3uz1mCG4V1eoYirx1JGKX7rEYPWBsCJ9zoDNepmqgxasrxp83xseK372hXiVAvsvNySRhgG8TqwJ2mHY",
  "key5": "3zBQxBAVgULvAfvPcnPuAtSfodVqz2W1jK7t96XKugYuDNpqH79s1DHoArxa1ZNZPxaj1EyNipnZXzmQx1araHoK",
  "key6": "2biD9XhSWhVX2kgf871RBZvEL3Pp1qWcG3CxpCDWogZpv3jP7713jM17qXCbexb3teJCsJNraa97Qf7jxT9yZvkw",
  "key7": "33L8Jzo6BFfhSeYPRkGQHvdhfMCQshcFzSUEvaczs27wKywSdcH5fJJYbeErTXPyGGWAaGe7vyw3VCcjMid517mp",
  "key8": "5p13oEjid4aBy2f2miZznNTuUori1A8fS3AZhcMqb3ByQDjrQdZNFaLczbohmcHD2stXSk6E3y5kMoudFGefapa9",
  "key9": "46oHTZ6gW41kxpkuDGUen96ZXiS8tmr1rPnUsDmeY3dmyb5YBcfa1UsYM2Fyz1a1br1LBdv5p7YDDvJvcfP86suN",
  "key10": "5t2yfMikMPBurZi6DUMvrxyMjJnfF81HuHsYRRzB9RvNSH3PH2jAhCXmWDfy9a9mZKnkEVv2vWfPnth1SePv5dHR",
  "key11": "2ADTiQYff78HGM1jFL37zz2XXazJqQJjVxosYFQczoAgz7YSCHSiip75G2aDfes6n8jJU4Fs3GSW9L4513HvMxvD",
  "key12": "3aS2D93yjhiwTMtwt95F6bXRDuy537aeftn45ErPLGbHdrqJpczvTjZE1rjTGh8BgptuEQK5KpdCQFdMJWrjmmbs",
  "key13": "59rht2E5mEcdfMkmgGojuBSaMf1qvmHnqvtjM83YDrZkS41VfdECn4VxYCYXcCqVjcGEB4Q7WzFxQJnM99fKK1Fx",
  "key14": "Xb7YDFf5Kw46iMV4hchSxz9XAKLXAXzja49PPNLHYwq4K1T4v8nAXWwdYkGb7h6uN9mTAfQ4QnZtye7awRBq7rK",
  "key15": "V16bGhmToKgBPmuTY1RfMeRSgAaFWm1BWqaw2fCZUrhV6vB5JbX9zLkqMXHbAFakd3rrtERoXJWHPuAX3j47VgG",
  "key16": "3YTHLxzSMfYEWyu45L8TVQGUPphCB25hLT1CaBPC6PnsSHLgPKmuUjSWAmqPzaqxx86souRRUwLsN39eqc49hGwf",
  "key17": "WEH9PxyxcUJoLkw8sVc7XZ61uWxsJUuyjzY3nSqPaYtSRwJbtR8ZreFuFUKyjdwH9thAp7XWAUQ2jerTK7TMnGm",
  "key18": "3ZXupntTwnHGkHWSBQN1xszzWLjnG5SrPxauwmtsVeQjRuy72S34JA5S5VFuZZy8mpHoFAL7AyCbHNpKLX9mZK9m",
  "key19": "5xz97FrX6KkWLqRhHiZvXF1RYksy21KDUn2rE2yWmTiUaHwTSeck7EgcurFPjz1EtrA66hhpmMQHi2Sj2ZnQkLoG",
  "key20": "fuMEZvv8WEJ8TwBugYE2LkcnZNzosNnP4mmC2peEscdwnhD3qAp2QH8zCw3egC3mXKGxgWPmgobnAZqfB8bs6Ac",
  "key21": "jQnRxYsHuVd8ao4QQsibmHZDjLSaNPgzwSftXrVxRshB78tB6uriT3CdnvY6CUAK2yjfPST2WSXZQFtxJwrvzhp",
  "key22": "31jXWRHPLU7yggSWQUZmuz3B7cKphoGJkSYsbTbXdA6A8Tzq46ECmCLcoC8q1p5S2QX8dgVDMyrppwAtwPwxH1RT",
  "key23": "5jxtfCvZB3EGwH7gnJtNr98xozkMfuC472oCVEK6NucgFmNbHwQHQUnwpwbam7Pgj2nFm7fFM2otHfsWqrviY56o",
  "key24": "BDkkJ7zZTPnRxkKCt53pAYMtMCtWeXLeFaj3uyHF7uVPQGpQ3gahv2wzpfhDvTkvFDgk2BWyret6BpjGbL7MNXL",
  "key25": "2HoZvJygVvuqy6wAoTocHt3tmASa35mAQXVxd6tfMih93gYwRLkTc11Jzqs8gos3BSKsMnHuKx3AQNz57nD411Yi",
  "key26": "5tpQfVvgLe8L1Cs9dB1b9k1qPmtW4wzbrJpkKY31z1THXPwNQM5XsLtbn3FtgKLytrJCLLw98uZ6wvsvQBRLGQ2b",
  "key27": "5MmZidRcoUCsYDZGCdgZ3Auh2eGQKwyaX9JfnBCz47ATJ2XqjQR9w5DnPxNF8Pn1Cp51mnF5pTpv3wKTN8U7Xn4p",
  "key28": "56btAQrjoMWiusY6JA5A14SmRjKqfDqh69X48eEdcpRxdLzVonijb7HLzx7WJ7yi3Mzq5Gf9hrSYv8mVpYzgJxyM",
  "key29": "45C2fURXHJUPPyBRTcSSS4ibRb44vNNB2LaG6YLjYjRTnw1mbrSKu7Qk6SvYRLvTbTScQurcagBngHMjwBRHvyF",
  "key30": "4RfEbi6AicuBgKQgftikc5ZtKmep6VXdzeUBDJN73Sm12A9R5r2XBohC2dQbuyu532tYtCXcG7ywxc9osvxLYJhw",
  "key31": "3SUeJBdEx1Y1guNbVxQaLZ3cU9AgggrvGjAkyucV4QCUQZePR93QMeW9f1rqWseYBfeJzP5HRDPU4oPNGczaDyj"
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
