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
    "5nVdEh4XUmKRF5ZwaPspVQoEHqysxPP6DXidm18dFo63bh26QFM2reRS1oqxtkSBF29eDVtjbAE3FX1jj19jmk18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wP8FCeu6wq6dhjmYghDbBeog8YhPNfCjAy1y8FxNugsm8FaCamw6rzW8iJj3hCkaL58h68kCy1FjLisX8Rt77p",
  "key1": "5TrBhtf9iSBWrzfmPzd7zbdDsaiJNiUhghbkokJNAhNn8jMwfko5DJAPWnx5bhcsStthdukyTSjt8ohq2VV91Ufd",
  "key2": "Ws7kPDgnt19yri2gAbgF8A4MSeq5ydh5FdZf5MbDSYDUWVhPyVgXsqnRxjvU9sHuajg3QhBiSTJAaomaQk1AseZ",
  "key3": "48GyiDC573ktxEZVjCMGJDKSZEA4MxenMq1dkmp7eFRiG5cSyDhitByzHeSJ6g7Y8Jragywb7MoM56PiHSVV1nt9",
  "key4": "3z3MN6bAfBFyF8z3GwTY5ma7PQ5VV2zmyokJi5r7f4LFtMbrjPtFUbHPSwesQ3yfEuMraNZseHfFXsa8nHNK8aj9",
  "key5": "2hKrnXXVSnQYFNKDa71qbvn5cc3NoNXosBN8TEhqwJzKrfvTuimaeywWVWGMa1RpGrWpL6QVbucDcMwMrHzkFoBB",
  "key6": "4nZaxrEn1V6fn9vwA1QmPvAbidfneb3jaKKfnRpo7xNDz4sFv7AQ1kfX2Sd6wX41kchq8TBE86qob3hnE7Z3JRhw",
  "key7": "8pM7RX2VvdzjMq6LJGaiMoPjZgby8nKKtZZ8duEfVA6EUJ1nqfMNGHFAPyrb8YwpsQL9WVCksxQMJKq8xP1g9rn",
  "key8": "yPRbh6G4p9krR1GLMCfgwSwBDtqnLH7RF97Lv3h3895cCbeivDCd9TLQTR7WSfXuSdMNqxXdZ3a1uosyDpBaqKg",
  "key9": "4o5cjpk5bWKi6Lcf38d3iids6WUvBy8bG66cHfga25H54PRSxYCxPU59rYbjf95fQkic4FfyWqdwMgXwN1GzeVip",
  "key10": "3783zHm3L2r8mwr2aF66a6UErPFPTieHbzboxoXm2n19JcLXNy8jJar5B2a1BFMW1SifSBAcjfP3WXNbRX9u4LhS",
  "key11": "5ZfHKpqPn1GWZyDjaDBSbkgFgGxsazXuqJ5NFtkGsiz2biYnDP35EqScKeocLz4V1i6GpT6qqqsZBJXkesyACKAS",
  "key12": "LrYvEVKtVJq1KB5YbabseBqamk7nQPU9nH76dqrzYxu86zWEexMUiD6D4XVvB6Xai4gqo5fYre3u99ku2c1yuFX",
  "key13": "4e4XrtQS77X7uu31iV1f9H7sDXDUYnGyiY2uBZZ6Skb8E9XzhXKmiks3D6HZSTQg2bGaPd2DVF9q7yA3dZpvrDu6",
  "key14": "SqoPfMosYCRUcqp8AB2yWQZik7iydp6FH9baeqdaZQpLDpwNK996thZLV3okdLGUgfrbzxisji8VaUFjdgcZb7P",
  "key15": "4HjmhetAL4ag1ZRgAQTmZXwqWTZUWNQGpZKY2L2oamHFjNeBsjTj5xcHV44voFsLqNkHDyk2uxUb2LguiuLcF8Vw",
  "key16": "VCJUwbdR2Dr8rPQ5Ui3YG73rEVc8wvcDNxGJnuPJZyxGxkdLtS1wUSfzAKP1ZjJErJXbnNsUgXhG4ExcGRr1WKi",
  "key17": "373EatcLRvNc3B8HxHPiWaLJnbkVQDcS7WD3fd95Q9NzsqJJV2f4GenxGjowCkLAKorLrUm82EgRvfuyFsYnSrMR",
  "key18": "aazFewoxhG4UypSLQXpVGSLoqsoNoP6fHuj1q38EWeGJEJEFjxsDqtP4nC21xftBJY3KStBtktnsy2dLX4ZZykh",
  "key19": "5BHfBng4Ky2jfAxBvKzKqU4VTAae32t3ZVJXkLwbPLCUs2aw4yXDvdDtuAjPpv7kwNscqy15vrNBrZdtE2BtLRcM",
  "key20": "23vVM2Lku3bMJCFZGbc9N6o2eDCepKLVjpqQxJLzcFhauDSJVnSTizufRwKcY7M4Qutanx1YzEDrLEt9G3D74EZJ",
  "key21": "eYLwbCABsj84criZsxysKLfw3drv6nCD3Th9U4MmjfnSZ57NAt4uxRSBKqczt3k5BzguxaAstbe2dvhXeFAFBn9",
  "key22": "3sQZGcjtqcjM7qgVs8mrTpAN1pFY9kaRB5W4ChFaM9xVF9adjYbb1JeYye93zCXcF7sci64vTeGd5JffWMmdPwfi",
  "key23": "2pcDFfVQc8BJQVX8JVSRummsH7Z6hvR7PF75x1bgLjqGQp3GRb4PHgu2tJEdDuRLTkToNpx3A1vXDRc7Ubf88PvZ",
  "key24": "3JtQnMKwGdz1xDvBeckPg8x5Z3uQ4fw94Gk5J7dEm7nNUh7P6hVYNbVaCjxDCWeMDX6utgs2cNw1T8dRGCbGHF4X"
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
