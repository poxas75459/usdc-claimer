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
    "4fog41TZ9i2B185F6sh8aqj8eePzpBGiJTujwrE8QzcTqm9gUwtGBkAQEcrcYccXwTxAe58F1CtxaoZEVPSVdcWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCqYsiB68dLc6tNxAXrQ1S7do68wSVhEqtAsjFmACG5wu8iu9dAUW1ub6FmRtJb91fCZrqKFPEfNJjj91Dfy3H3",
  "key1": "Kba8aP4dwgys332whGRnMGkR4rTqAX2wNaNXLdjiizNhTBd6pepcuX4uBdPCo9XvAcDij2rzoBTZDPbBmdWpbA1",
  "key2": "37AdhFSm8GZr5hXAFB56P8uKSCQ7C3ufzpsiC7zj42FV9G5bJXAKAuHfvydS5zkVL3gkAYCFkTKrSbzi8hTd35kY",
  "key3": "3g5ZpV4W798krqR2spbnqZxgV8Q4x2LPrvbY6bbEyqK3U8trFijGNSRE3673rLbbz4mZNvYqQxYxYi9CMpTRecSF",
  "key4": "3usX1879FZgieNiXStJpfA19i2qmwroZXzDyuUoDfCoia53gnW6eHNyZAh7w4ic4Xf2kjBckFLextPSE1NCVTomR",
  "key5": "4tgtarrTDmzQKbGy78pFErmfAK6AoPXfGcawuVtcbRKqDoJnJcBuBRUcPGckCiBQzhbPCdQmdwFRnyeuc1bn65fa",
  "key6": "3ZQTCFrY3eMv65hxEgFtCuXjpoER96ecmQr1s8cxFA2yEHTmHM82oRGCWhoja8rW9qYE5FiXtxUxmPJor8jNeUZo",
  "key7": "2tbXAVfoMY8RDFnBDH81JLAn8Xf5a7ucKTQjz5R2BojuZprY1rLGg1jQFaLmYUBQezbKGhAcCYagm2LbPcDBczTk",
  "key8": "2p7uWb4tYh9WRLQrLhURfutGG4Fk68kWSZhicqMnRoq9XoVCiT87fMFo5HPH6bkBqu2ayajt4LoVQUX5tBG3evDu",
  "key9": "52wHhSvyTuNuTdwfpAzRw2xWUnggGbMnVtTHNwzgE4GRgsGfzZeJ82rifrXricFg564KT7kvNioJX8AWkozFifAs",
  "key10": "5UwRGEE1v2bpoinQ5DNBsz3F9b2VvtX9CPEVUXQYYg3tXtETWaqvMYZUe5CVzSJK6XogiZXqrwWCaqSwLPr4SaCH",
  "key11": "5NG4BsuLxBUBZakCUQr9vEs9UGAKSrgZwABgGLZyASAzzgo6MbRAYkvSfmShCDLWA4VF1q2ZrVmj618xrRtWGQJg",
  "key12": "3vKWHzkxvVnHuLGiRQfHe6dMcCMPr8toDH974in6a8J6H7ZXj6bBXVEDmMddtsHKMHRix3vSYQ8Bxx2tMudKZQYo",
  "key13": "utSf6c4mG1te2uNbBQCh1RHk8gieT7byyMTVwVUhniXFjs9uga1TZCxtWv1eazxSxRcpFFtdbkdd2L5HBHkPdGf",
  "key14": "3pzdKZ8H1DCNxMRFjwjBr2ttVyYZtKM7YM8ouza8SCwTtTgkJBsTUanERz4XseiGbfuGkQBfMBDsNgJoUF7YUqma",
  "key15": "51VbD3b9ekXyRSdqj2GPhXytzsbLZJEAp5WKfi3RbibFvsRwiYrSRTU3cpgfoaygKKBREfnXaSvMPFu7vwFiXWfx",
  "key16": "4S52ZosZZ9kWdLFQh42W9iEGKx95KPfqkZxryPPi78cZxDebEHHemfxbRAcApZpc5giMGXLWqbFRJp1CFg4XXSqw",
  "key17": "2vbGrmz2jQpFAhMDHnkx3FuZCRzevrHTsJNjAKvSXkojjGYYVMcKe2uPbKxtbVvdpXn15bYkQKBrXBsdNLPLMYj2",
  "key18": "43sM4wFaFz5jhnTvm7bJZc7FSNk3Sus5LM1VQgXMTQgAWnSZjPfaJYTWYYZMPUhS71VgKzQ5ygUgUrosmS8dEZb9",
  "key19": "4rG29f2jxY5cBknpFuYaPFJeLrMzzWcTqgXnuYniorwZXEAbBbZA59Y11vzGj3kjYQmivD1qU6pwCrgT9sBXxexd",
  "key20": "4dsiTmJghNuUyaqv6jan3hPYF34KFrHHVPgrpLmMHsxpbfeCspe1Ui9kEWwmrQNrEzRCpPK8z6hQzzL7dp7zqzxN",
  "key21": "2D3jxtva8m76DWsmycMgHTU1kdRyviCKfbtwySNVfJFCRXpWwL3a4x2qTZADRwtXWpapZjMWj9jH8VzMRHM2rP2n",
  "key22": "3x4L7upQonZW3zboEFVSsvAEpKkzjyL2T293vboRRWgbn5vaxVi4TKUx6ms1MLjTZZGeQgKYxkuQ58e7hcZ9gF5d",
  "key23": "2yCT6CferyU5DXj3zZAFuFF3RgXWxgNTW9W9HkCcTeNF4GRHki3qjCPU1iVbdPZmFAJurMoom7Z1cqHZ948Hi38w",
  "key24": "3BXvqGnTXcsY5Qr3ut7r45wmGPjYfmkb7Udc71QmW1omUwtSbuySr27x4qhLfwAg9bGriVqrswY5XD3PjAsA1Snp",
  "key25": "5R3KrYbgdL4Z6YWSWmh6wxR8BQCqGT2N5uqy78uQ9PzKse6nq5XJmv49ZJtEjwkLEYNWwT1CMep6yLTPtH2Diqtc",
  "key26": "atqiu8E27R7hTW8h42Ac5PgBKgdxjF5oNUNi77tEuZHtsUrTHvxQPFvFouX9sosr8Vzz2ULradD8AsVRFfWbeup",
  "key27": "4jjWomB8fGbsJEgFZ8EKUapAFKqB8ECSTRBkRnG8M1jqU9fvm4ErT9rfseuBQ31RoL979QNy3fWz1A7KztkjNWtQ",
  "key28": "VUmEbj6oC6WN8LK6bXipbPDGsMKzEydCQ5rnDydxVX5G4fvth39cMhgD9p4JXpyyLuszBHykHZoHTxNE4LZz6tf",
  "key29": "54MztrM2tkCTfas14k1cdVdXz5mZS1SKzF3N7nJry68EcvXTMRDcqQgV3drmRvFvWx5TRjXTLGZToS8YjBUoopLw",
  "key30": "4wBWqpdn6xM49DS1oCpBEsa7AoogfwKs1zUEqJyyJpa4vRKKx2FRKxA4SZo52Pm8JVD4j1B3HMpgPAvTWFDFezhT",
  "key31": "xZe4EK3rhiY3uAEQh9mk4q69BMN8PRQMWKcjM45uaSbh9bW5TKMLxA7tJZXRbMJ5WpU9BSTasPCMiQrqPd5QMAn",
  "key32": "vtxtzXTRdhFYEWU9CRwStGmo8u5VcNogfkbZjWpGSYUaagQ2yg2dWxK3UaWBqMjsVAjCE8rVZZ4Xeasf3MTQ7FG",
  "key33": "3sGQvEgxAt3URae9YRwY2hvjXj7r9EW46ie2iJxJME5ttUmLDagcWnzDSdS8fA23P4PbMDrk6w32AhLDE5Mmm6Sm",
  "key34": "4YGUFNyKhCoi2aHSV5rhshGjwBiV7p6e53s2GSeMu3heTuw65bJWp6FUKUyNUat3WVRgDGHbFKhCLJrodTnxTEGc",
  "key35": "WtKbKLp2cBTUv2bC2GU1oCr9FNwhkdHiCYUw1qaFUdTkS9RCtvVeMovBK4rW2gMT62vZDdS59N55Fg56ixdw7z2",
  "key36": "4sLn9VKiKP3uWXaLzAkSMaMy6kPZgZda24k9R2AWCmuYHR7eXQvKBMRD8tDNqJbRNXd3iAwE2HhqbLorhGwC4Gb8",
  "key37": "4GJaaGkxu69KDVWomorqPksPdWmLukmG8P8QokNnvVHs4N1qhrCYoVu8Cbw6smMMGUR2E3NVufzRmAmgRRhcxZaJ",
  "key38": "4oHwntQ3CVWf6rHuKyAySF4tKSbrXVr6kCNFDMBXfgHsVH8pTUGsnPCFEGoPBQqdAL7ehdcCydNVU7UTJBoDRbKi",
  "key39": "53AXvRVyUomziMutJ4qSDxKBjR6m4QQcpT7eAuxjQHzPDFnD8hEZEwNfeFXwFCvUt22C99dxEArSYqFJsQFt6btv",
  "key40": "2XBqQ74ba2nZ2Tm3Fpn8wKXWQcXoroeHvaMLocoQ6MY9D3dhuqMUusmjewawSQ299Xw23kKq9wVLPoX2aViEZitn",
  "key41": "2wRybzL8kCTsSfg93w8rpHm9briZ3RX7m5EC8kmtrxpiMAay3vYUTZTFQgMP45fYFc52ojeB7Lzt6B2c5Kjsd91f",
  "key42": "Jbd9G31LGpBXDJTo9xWxfQi5AsVgUzHDVCYwDgyT5biNJtwFH8PmWpd2CjhWV83HLSxj1bPrRDqNCtVUN5e8Ebv"
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
