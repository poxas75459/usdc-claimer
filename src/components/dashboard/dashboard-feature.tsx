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
    "3TPSZMnQj7jj1VjaPfyEpmjveCJWouj941BU7WeTWRDgw2hemBxx34FdkfqPS6WnM944uZFkXpBmgizGBLnemetx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZjgMt1mjC1Bupvg5n1Fo25LTaERU9QkmybdxcKnMjkn6pLA8hGwEj1ANhkwJtzcvFuJqwDUPX4EP1Y3qqb6J1U",
  "key1": "43eY4Dox8M1NZETy77x5MPcgogW1CT2K2aQyzPLwcMggLVKHkQi1VtzSRkCbk8vi4grYDx3bPh94DKzcCCrC9EBY",
  "key2": "4uunYQugBuveSQu7mRP2qw3Bn3q7qdVkhMCzKa3RFT7gnXDv8Yk5ZTyB9PVj1KFawuceQDG7SWa4o83Yh6sUKmd1",
  "key3": "TDqXaywmXe1Tu8PNdHVBdyRTavxM5wieDpQxKPByyDY4PTHmuXLoYvts8EkF3qBA8WjYgbd2K23mqMM2MvqkHvK",
  "key4": "2YXdzw8dXi6QF3nvyoSAfsenvRFwQ2QMRKNBn1pCVCTeSDSMVX1MxCjHKVX2MfGDX2RQgCbWyR8Z2F6u945kuGaM",
  "key5": "479MfhmJJxMUqin4mFvb7Tc5BrpSm1fmjQRnLeFPtJ4puMoDctcGKCHH3dY3zokfiisps6tSTVQnsF1uFHKRJPG5",
  "key6": "2TL9v9qgsQQy3ur9Ge3KaCTFAWmqigFAS37uvqDfdA3SNEua9WHFSNPQXz8rwndomPstwP3kp6PZM2n4kW97EFsq",
  "key7": "2ciWFYm5tstPR6ToQigDYMckgpEc5bxBQJBN1axz1BCqB5yCopeB2RKT5tLkzrq8qWXNTBsgALDasxtbsbsKry36",
  "key8": "2PQR79VaDXuGEcLPCZUoL1PeVvrrPGKVjqjKMoQJKSauUYfF1hbYm98bFipUEYB9xLfq2Tmsd4iyX1ftZQz6rG83",
  "key9": "HHrnJ6C1xXCJP355uXj8vbUNcCbs1872rr27xrGS7V2wvfUXhT8mTtUh38yGmwPNdEWXGNS7xHQbsRdtfa6hTt6",
  "key10": "5xsBgh9ZGiZpzAd5ZWLaiB5bFxDKArPkFJZZ4MQYKeRV6xS2bc3Looqi634kbuuLapGVcsAuNr3UZtLFSrgmkpzk",
  "key11": "3hGjz7s8nKQCWQDEtzaLks3z7CJdXQUEGW5586Gbcod6TbMXcLPn2zYyqHVsknD2a46U13JYWX9EtG4KGQDrjStS",
  "key12": "5ZSp5Ev5SD7vJWWzvDSbw4ptiYixwUiYV55pSTjBd8ntYeC8ioPbr8PgbJbRcYuQQS1tMa7semGGUPRCy5fyccjm",
  "key13": "5RyJUMSFDcDuGpb3tnHDcxMEr45ejB2afCR9cVoLAk8nwY6ZbnS7EJHfhTC3PgHmBc6L6LRvwZChmGExWNYA5xRR",
  "key14": "i61oHiemCcYsSPz5fZHhkSDboewQPRYq6nJGNJBJJAwT4H5sRKEomA28wTDuwusmbDyD6SgfZLpNmYqEBfE2nE7",
  "key15": "27MXq5xkunQ1n8BgeS6A3U79VmRfxjjoPj4hSGWSnRh7Yx5tsTfdRUhu5pE8RGsPR7MvC17tQr1e1EH7YxtTY4FE",
  "key16": "3z4Kkv6gEWJg2Qm7TGqABfXmCA4A2pqEooxoqT4YYHqoffUSDEBmquNEvgSz71uKUnBuZ4sX4EL4JXY1NwwhkMDA",
  "key17": "2NQoMmKABFbHhngVHvBLisyGLNHcuYcwZxSogeiCaC97xPBcLFPP9LuXgjPTvnTukDKr3nyciGzPrkDNdRp6T6uT",
  "key18": "4cJrpmq6LuYtjWA4d1g9u9qvtKdge469Pen4bKvDbSUQzbTequ1N8KzWmDj1LVKgZt7u8BNwm1rzzGtoeLPrUGxY",
  "key19": "57nkJXHFNUv8wxykqwHNk9RAYfFcStWTvFiPTTpWk9SncyR2xDUkc4fGG3ui5B83ffYi14omd74wo4rAkFGEm54B",
  "key20": "3j6cLaiVC3VBpn6QT4CGpyuz4L5tNEtS9ib9UPKyMweDQ6BNJUzKsM3KnCnXjmEtyBx6wtJ6EERtu1VbkXXpxF9W",
  "key21": "33MV2gJpoSd2exyC5Fd9MUcyY3AiWKF6AiF2VSCSFVi6R69TmDzimUg2Ph1kH42cT5EXNgp499sMg77YNtuPAXAv",
  "key22": "5Ex3f2vHUDzSnSv2KUdhn6vLnDtHTyYdp9J35byZ4utHq2KpbqrQF34n44xeLdgxzqQcL5K5NVfZVP4gdqywLfsP",
  "key23": "5MbJEFmCBqJLYxiFnty9zqrh8DYKpgyxEnuzw9kkdQRNt68FRCihTeQpDai8HWzXNNfj8KgJBsLT1H4jrETgxm1X",
  "key24": "XT3SqdrNkSySGbCsesTpDkvzDre5XCeSv2W639rdmkN6cGZtNF6S3e6fm4sV3Wwgb8usmp838a3he6Ppi9kUfoB",
  "key25": "fbNdAG4wcg9rzY3jfhAaVV1WphSF4wKhcUejfSvG64aifYCsY6q7HbZcG7QyzUmKFxHumkXhCy4SLZAvzUNY8nA",
  "key26": "1885czw1BPgof3T5K7LL6G9pyQANRUrT6Wx2JWhk67g3UtxgC7M6BPLERgpy3JFHczE1juS2CZerKN7TKYu3RMm",
  "key27": "2mDwB5JziLKCcrCMwpqWvUNAVyUkjDdmeCB9Wh2Rb64N6RAHpho24xFaKLEmL9jmSFpaP2HGhWzKTe5rxyG7L4R7"
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
