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
    "5bAZeEtzdvtdU4RYvLZSqXCX7jd5tkgD6GnFH9jzq8X8mTcKrCRvqVy3K3zih4NtztimgLvrzD2kQF5M5CHdbikp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bREEnSH5ghLwgZ3fr9g6DAwcHABPNd3mLQnxE5kXw6BSsidJdCsbfotf7t1fWuhbsFNu1bvu978XufutdLJjtQG",
  "key1": "5XzLCTWEHCMrgxiJ9JvuSbmjJ8HLNXh2yUunCPNe1bT9qCrkWT1UN7ZeUqjamDnsdMkoA862icLwkoGTsYKLm2p1",
  "key2": "5Tb8dKZpQoZcay5diPgikct8o9WJ8uVc7hxAeV4wLww45YogCgP5dBo5RzoTLkZxE57QFEdKjCQjhxHgo3mHDTBV",
  "key3": "5Pd5gFExXG5uCTDmAYQuxNcoucbZKG2v84xnNUHWGQ7Bc9SFB3WBQrwGSwAJMm2EUcRiZo7sJnSVHadpw4gu9GEH",
  "key4": "5DoaFsEY4vXUzdCkASqtGXyo6YcQCcHgFZqCuAYKuLmiBho2qiRKyufEipumBZsp2yzhyy2wenYCKzyr6Au22x72",
  "key5": "M1HooNs6hsFgCWc5z9Py5zvkf9mesVYHMFpGys6Jh6uZmdPsJxhCynGJJk1BizXQReJRStpyzqHo4ekR5sBPSTp",
  "key6": "4s83komVD159FJPv8cpQp1cUtBmqDbCHYWnSJFsQu6ehsYhkcVcf3kdhEYAgXVVkvixSDJ1Us784Nw4SzAHdw3jy",
  "key7": "2gnsgyqpNUPgEJN4BZoPennUcTSU9j4Z38pmyQpDQ5t7dp1Gbd3diHBDwq8zWeviFjbr931D8W9nN2geedViwMNz",
  "key8": "3eP7QXT6h4kCn5dnNdNGs5giyUN3oT3Q4eYv2K6TWgfVfsecYJAhPLvazEvzGsE7zcVMCTKny239Bzj2vxfhGJvh",
  "key9": "48itLvWM5z8SQkHj5UCCnzkDgcERnq7NMj6hBL6dM635m7mSeMFrtTSgY7ejnKbVB1RisAV1HBHyw8WxUZLX7EQP",
  "key10": "575BaFsNKRpNp3S4WCZcVuyzXxc4q1UAq9fSAKHAp3fCcDHatU99ihCQdSfANfa7kS8dWcDKpt7p2J8XBrsnWWDq",
  "key11": "4x8EYZ1cTZYNczcuYXRZnZ9U9vkTy6BvQGiGkS6aTa1GguQ573o2pxnfnW7oDGsUrM3KaiaMkAdRw1QugW4TEWUW",
  "key12": "V1tvL8H5UJ7g1JhDY7ty9qjaB8ek7akxXDWZDNU3npbH94VamCGtaNM7i99NtaZSgDFdPC6FmkjvrHgVZsoghR1",
  "key13": "31rH8kJJESWnYSzprFYXCsAHTLMkGKU3L7vCu276cyPZ19fQM9uHanoutYmCXoMGw7mJe9TYHmsve8oHKMWKYdZE",
  "key14": "44N9WGkpQEgwQMvWTnbXapdUFnLo3cdzhvyifiXB8iTWaK5b3YTumiCgWRysEYWCfv7GuPXtcADDLd4Dg3zQcnR9",
  "key15": "3gzb3GyAjyfo5KPYgAk7ELKYmbN1HRhuWpe5BGFsCsLrcTkSCgt1fy4Sv41vZ57onahezZorgXUek3mmKCAA2GnP",
  "key16": "2wLuowqYipR93ZNwPPDvaoE8HhKM8QTUvVYK9SB12i4Fg5BFrVyhpCoyWYfhB33ax4kUXpCpg8t6a6JWe4tDUuj1",
  "key17": "592AgBh4CGGoMbGEBfrroiks39WogfyW89UGLgRZn6KxCdX14iGhUqs5uEabGt5gRLpA3ZQrthQztLxcV9eYr4U1",
  "key18": "46dv8bLvwsjefA8Ryb1Z9uUT1HhhdEF6AHcYGQCaNopSKvfuLM46ySrFrFPD83v5WR99hJd5biH4qKPz5DxCc2V5",
  "key19": "5Nw91SJxHw6fPtoC4VTsSreoBmJTk9nqZhpRPsBRF2juzvt2yhkByfcwe5gC3vp2X6uS3cxPSxpsFURtcsmxea2b",
  "key20": "2pv7y81UfpV6B5eNkD2eupn5HeSKgvzdG3RnGARXPQX9T3Qf6KuwvuHZPgJXxTCtnBCohx68HYZoY6b8efrt6k9Z",
  "key21": "3oLCWnAo8xzFPsxQdp9t3dfDKZRTXBhEjyQyDSymhZUR3uHH2B6S8akeM83TFHEA4qJspjCRRhacbcQQ5vgWviwP",
  "key22": "5kYRWmXrgTm5kein93MrcYK8tsswpmvFdEMdQLhkKgU5k95j9HWmsUvveLTMBRawnjJysJBtxmMRwxyLESV7bGHm",
  "key23": "3p2GVBeZmXWRf7nPqPqWHVaTYwRS7xpxK4qAysHcQCjg8e7jZHPoWaMJ2i4SMymitDpV9G5QTkMYQLi8CVbo5TBe",
  "key24": "37mq3Eyyah6yhQUJd5nn5uhRqbJDNgePjz25Z4Y8tR6DmTrnNjc2HAnqZt22RJxNKYAcgEVyCAQdR5sQAYKvbrCG",
  "key25": "2tHBPTzjt7uaTaT2eDT53vRQJcuiEriU6uPfxoPF12CyRKaD9uJMhg9HHBFAQxDJGu6Fkj3DYVMH5qhGHeKkFyJy"
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
