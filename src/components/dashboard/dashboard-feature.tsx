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
    "SamgsmEh1R9Eb2o6p8xqoHabjTdGJBDbKgMTn8xhaiyYGW1sjVFk4Nqc41UWnxR5F8ReYMVcVSUUgK9AKQmHbZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JJhF7bPob4Kf5PVjfFgMXiG5NEvyZX76RaSeror3Nbjwha5ykHCrWasEUDoyLjryCJuXRNSEiNg6asquWDrKpY",
  "key1": "2tBecbvWxPtdpJtrXtTvgigdspR1Rdwk7tQhFAoPqxS3wQMVqqVknR6ACtuQCf8rv3LULPepz5RyuU7yyUb3Ke71",
  "key2": "3ay4d7DqeJ7wtPuVd75ni9RbiLxk4K7M1epEMKYv15KZtN7jNkmZFtTgugaAEJoTuDeHDqmBuMwDC1s2nsEx68gx",
  "key3": "4iyCLwgfdiUitVKvYHHkSh8wMQ83XBRBMbyGY4VK8jTzVkSCApSkWJyj1rG8ymfDfdK4YRuEkwXe2yN7xgPZYZFD",
  "key4": "3q6NhatC3hia1JnmD3e4hWiLmA2nB2r8Gihw3jZv6BqvqiuYD4YxbeDRe5xc15dZye2nDFTQ3tRBGpjSwRMQiZhK",
  "key5": "CNgNTocKqFL9Jyjfdu3xzThEyJEBQ3Uv8AyuiW84Gpfdr5k73UwvjyU63kGFR1vAPPwxJ6iS5gPe2gReLCfcgqm",
  "key6": "4sG7BsaVyiakrg2qEG7zGkzyAfdepSq2MVpXeeNiqe7PVf8ZqxEP1Uk2gU5h1yvhYxKbe11kfWA5fxrQxfRVEjpC",
  "key7": "eWQd9MNCiKdtWotWeFoxZMNjGKRUomQE8o1YqLKbRH4yEk4jU5X2Y2Q3dJsS5A4cd1bsgrpWwnDZutM6zZawCh7",
  "key8": "4y8x2on2kj9F44cDqbiuD5W1UvX4Uv25aycCx7JPxVx48NhpGM4iCCcbRCS1WWcdkzn9rJ7zMFTVLWuteHpR7Zbh",
  "key9": "rxoFUiLdSGNwrXV2M9cd7CndtjqVUdp4Va8qTmms27aYeDAesZvAiM2mxX8ddbu6wjgQY21WhmaCUmcZHii3TQd",
  "key10": "4ZWnKxb8rzKjD2DJkXDh2U2u7u8hRQh5ABptXy99mEHtYTrLUf4oJqwn42kj7LzaxUrGd9JKTD2j383HAPcHeocj",
  "key11": "2oCqpyRKHvuLXweJtZy5UN2DLfNNsQrF84bXx16Gcgw7MMSUSRUAPDWMtnZPEkRktFufxftztbqh27GbT9DgcYUL",
  "key12": "2LSurddfXL8TkJ6in4qhEBdgsF3eZXeu9cdvK1ZzYJXCGX8nDDqS2tiKvSskbjPLspDkNFcEpbcVJ28aTXWVrH29",
  "key13": "4nprW5EwAdvjJLngt7AFQvzCVz2ixPZzfdgKfefEdUzRNC5ivwqYWN6y5KFPMedCVjiuAtrGgdFbhdreyAah5yX",
  "key14": "5kpSkhZZHWnGnHxVCJf766J2LdrXr79uoZxLp1MPJn1vombxE4c5cqzthUReXyMkDVkgpjYoTuxyK5n89aehXnmA",
  "key15": "2FdDhQnEdr2L3LD9WpbU72x2yBuySgDnDaun6xnEp2iCVuKEgxeXpt68QgH85c3hGs9CLXNCKcHkpnxb3QXq8xtd",
  "key16": "3zvuPMonCb2qLRPGURC171NQWPJrdWAeosnZTenz8gjDhAoz8Ud5dUQ7p6mQC9K5wnph2RUfbiv4rxbLo6rKTbL8",
  "key17": "2d2cQp7gYVQMQjb2tdyjzjfA4H7w3rhPnfidFxdRrjfNPhRZVbvh4HFrxatDspEgKKFMyQgfpciNi7oBZQmU1BPa",
  "key18": "3Fb4mhdh8iEBskPU5M4bFz55WSvZGUimZ8eMLByLEWn628k1i7B7R2c4ePAx7FehiAyU21wxRGsE1oBsvBaUqHwr",
  "key19": "5PCd7ytdZC7EUErKJwuqoGUXYaqpWN5kXTgq6pkBz1dM5k4sskJzq2btWKgBeM6PXJitpktr79C1rJD2juEaP7pj",
  "key20": "LuAMksydzmUX7gu9ZyuXiKR35SpqgRcwy2gTzk25i9ZHFA1ZfREzjXk2FnnQ5Lnv2ZsMi6eVzv5a4SMZp3tmx19",
  "key21": "56CnmHsGFNxdCP2Crrc55kDjhk8UEuAHUZXvFC2tDWd6Aq9fA7V7yQaVDB5rxJnwo3Pff5nuEPqkjU1b6FELVJBb",
  "key22": "3kw4jBkG3tPoeHmpe5hViP7kZowFNhhEaubJgK4ZFad25S8gNYFfJCZWhHFsu5HnK9sKYr1HtwnTAEkxNoFf7PSF",
  "key23": "B59drWRwUckPZAruWVDjs48oRvoXRrhiU9AhoR7TCojRfxR6TR4CEpcjA4n3WXg7n9RsD5s8mLdNu49uCjrjrXg",
  "key24": "rWqUj3aRq9fMYe9mviMno94HfTmTBK6wV7Pb4z4WvsAuhqwfN2yoPr22UVoa5SjWGjurrZ176ckL3tjLvedNcon",
  "key25": "5CZMkuz2R2osnpk2poESk4JvyCoLTQdTGVEnyaSJzXCtPZ8eYd3Y6n6fztGfv1nimm1mzsMVzzHS7VpJZXw4Sumd",
  "key26": "4wJKK6aJuh48di3WfZdLW4vt5LBpXcQJcPd9evZXqD6ZsQNyCTkc8La6vsRXPu1CViP2mmU2R8hpTe4x3bZHxSmW",
  "key27": "2sSueye3M2xsKguH5BDKLW7SPRokaabcVP4NZwovRAvv2LcdQa2qjUyTrzcjjvqMPgmheymDkX27Pz1XthaR94MP",
  "key28": "4VmuTXz52cNCFkZBNRLMtXtxxbbUgmeDCMhC14AkFzrLNroEXnh4BhNRZUSmGRc7DDePeSmyhhmPNR5fkk3ypvDn",
  "key29": "3xrpPiSk2Pq9cV1jzXDKQWidvY27csC1A2ong9NXWGRap2Ag2YZz5vsSNc6hhD47MaLRTdSg13TLM2sVnjqNc1ym",
  "key30": "5YsRG9B5UmaFhqRo4EMt61ecpsBoN46kLwzKNoeusD52eMt9i5tXmr3zpN7EULWzLDpr4jwNfD1diDAbuTvJimGq",
  "key31": "KjLkwdsEqYg379gY5U34Nd4V3z48g17t6BoaL1TeL2U2ujJbW3R91HSKd3scHPtzsCcqafoeNGeggp7jCPcGbiW",
  "key32": "5NhF8ijE928Ar94ZpaNrhBWMWmfLqgz1CgF5EPz6pjXxcbrPYGFtdV1mGJGF2EHgcLvCjyCCf1QDHzcKY2ryEWWA",
  "key33": "3uFtBCgkhnG7wSSxXhUMkFfYfvXn6jAcCf2g5FcJ5cLV8fiCj7cX61BdB2QHfQQSMGt9GKVUjeWMFKZ1HKehyUhn"
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
