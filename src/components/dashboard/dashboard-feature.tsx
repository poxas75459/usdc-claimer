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
    "3ZxcGpxgFVhFPZovCUwmTKnEwC9167KFtSoyUCVkHHf5pVi4QWvMALaBVJSrX3vzPMqNeKWH2Esmw7qnueFPBmRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgSQJMLrDUx4txtQBu3m2HCYTBbrNiWKFpDWMpdLCAHTwozc94Tnp8gPp3dtP6YBwM27adwtKydrLWUBsRoW78v",
  "key1": "6X9TcBYGj8mwvfYK3sTT6joRP1qsuia6LxyyYd2JMk4iUBVY7WRH716BRhBWueAVxE1RUMg6jE3GXCFEc79Ha52",
  "key2": "4hdgfXZGRh6KQ8GGhZakrsuMe4oCa9nr2Pt6ide1vb5EcN7YPpPKiUTHLVb9TCaTUL28WRNH3dkZPgaKGNsWKWaB",
  "key3": "4zNfEWRmksvxa8kTHfg56Cuw5PC8ZLEzHLwtHfsvm6zaXc4uKkG1MptbbCji1wPL7pBEAo4FAE41SsfAd5ZQqoYk",
  "key4": "46ZraakQn5Qdsk5r4vLr1f7CJk1QtgoGNangbXXf7CcwXxxnuvcxXhp9beGJimKr8qzkkjkBweFvgtngX8Xrzein",
  "key5": "r8c4QM3M2Wc7Ed4m1sPADpq4WwS77vnHJiaRDFhwLq42x7TrfGWLxT1X8qVvdyg5DmqQog4GBi4z5jKo81qKdxL",
  "key6": "3spE2kpSdVP2EMhWhXrVN83Ky5naQVMmEBWqF7WyQqWRaksrGLVXzUkFgtFQXeLVnz3XH8udVFUeiQCGpn4huXiR",
  "key7": "CPQp5itRc2FF1uRuS2GK135aAVPeRzQg5F2j4wzmUyGJcs8oiHSwS5WN6mYHwZGZQpgRhFUc7ZhB5MrAbGEPNTN",
  "key8": "5shAr8nvNLVgLWD7MYRxnWDswgzDawUf6fddu4csFF3wBS2WMjMfh9VGEPJg2A3ZQ3jSpYZrcKdpKJngpTPJt6kc",
  "key9": "nNQv6k98hwE8Qhvt3iY5M9i96YhA8Vd3ZvVHnKEgTpQB3YV1RPAdjSLud8e7DP2TCPKh2k6Pi3vMsqrau5eEoV7",
  "key10": "5YFqWfQpAb7gTizm6DPm8Bk61MTkwhDAiGf9GfhawGmkG2NrThuduEe86TTmfpM4xZ5SSLn3Kw9popkaeTN38G2b",
  "key11": "3qZ5hC2M8K3wbMXfHTEKfnfPU4nE6jknsv7Rh3vQ8e9tmRqXZTzGsx9aEUUMomwGzrfmz9obkdAtQybAbaQApwts",
  "key12": "3SRenBbchvhXxJkkDxYxbz3ek11hqN4Vn6FhDeLF8SBYvh1Cnj7PbdBwDzaE33ECibeNZjTYFaZY89iV8SjTCbKj",
  "key13": "4TsWS1bWiRTCkK1ZK9uzvLkwqHPs4pLAbMKqrxHWf5K7WnP6J1cY8DDKWLbK6oG5KBxCf6N3XnaQzzXVeS3cJaUa",
  "key14": "QNSGh6dQPasr597AcPnXBA8xqv8WaGQ5AGuamnCKwP4ozGPduHj3HWZ12qSTTTQRzC9zP54wNoQe75MXxmnUcRg",
  "key15": "4fnrQMjW4VhdsvtsAuaXs8b9cequkqjEZGHU51g592qxp8NAmwGvNj8AC3gL316U7WfK9q6vtuYg3EXrWvGpq6MU",
  "key16": "BV6JnSEua9NfjBmmfbCC34F5Qm4Lc5MAK8gNLs1FGVbpXMpZXPBhvx446ZvAg7cKJYuDeST7DSDKFQ6oHQThmVX",
  "key17": "63NhEfDjkjQNBQf96DmAhdH9mAP8pP7rbfJFYbb99Sf4Pd9FmQ3u8dFTdzSeUMgCJcCjvhSN8RzRYG6EPViqMHZb",
  "key18": "3DRbz2XdcFb1R7Vvk98wyvLnxEDw4PYJrvdYywK6xKVhzZrEFTkn8k7WxkFNwx2d5eBeaKz7dEcqhpfDqHbWGQeD",
  "key19": "4Vy2g352zYUmZsjXbRVcttMhbYw1iSodzB2WkVsCMweXQdFyJ5Ga4NevGrVrA3S8AiBywfuoAopXS6yMxUWXVuu",
  "key20": "4gfWjVpNjkd8QZEZP2kabjXT3MYNDfW4yfFeG1YZNqTRQGjkw8jxZR92vZN7jCLW51vkm1jXp2a9k3eHNc3NrDK5",
  "key21": "32QeFWc2HX5KekEXoj62pARm91PK7SzhcSnhe2g4gCCXh5GoRDoQEv2brSQKbPNiQeg64gDeCdjMEAojhpoTjoGr",
  "key22": "4jmwiRML8AfPXQ3uqKJiy5sgWCoZafM7c2TZUE1wWGjyFxDExopjSw7FPhVBaFhh3qJ2A5e952gFCoxE66V3XYns",
  "key23": "4DCsFzZkV5XE2yTfr7xe32BtxWM6K1wGuVRpVxABPLhppiXCNwnYm2ZS7Kdj5qP8wcoS5MDZTu9X9TeJEfKBe78S",
  "key24": "2M2bAWHzZ6cMKLBPKn734u5GPU6bEMa8mW4k44zW6wZgaair8qqTJ7eqCG79hAU2cYydxF3spbKYJGXPeLj3xDC2",
  "key25": "5GfN624ATw9rA7JNFwJMeGKT2uJJTaK2xySqWeTUscSkecjZRy1j3FFGy3T42NFQxpJEUga1nAWYLXEbH5a7vRr2",
  "key26": "5qxWCrF85bPVfyZQziJ7N8ppgxpD25mEzDeHxWjyA3MsH3fQoNbgJB3DhaYGSdso2CDQVrYo36BhZY7fVHmRMo6g"
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
