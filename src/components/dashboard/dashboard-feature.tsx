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
    "3gwECvP1JMDHGEKXw7bK6151oHiDppRBxy3x8FRj3skoAzoyJsg7eq4eS3TKEde71QNHw9tFkKM3Lp9QFeR49mmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXRaAZGzHzKjUQWfvPwXCZkosBmVjKVJa7PfGJxL9hTh545scka8SZFoZJzGy3DjgUMYSmiLjWwWggdE26Q9wPS",
  "key1": "4mBe7xTfjZegNss99LzwcWBhYfMNpr3GEssZoepZiSvhxdQdL8QXmDEkugmb1Bebsx2JrLDoBCU7Msm1VKoDK3ea",
  "key2": "4ZfJugt8ohgt89Q8yzDYC8M4nY5nPrJCLNNAUbLDq6L8hPYrgt9xeiqa6vRhdeXcTwKskFZE8kNJFR3sjxhPHm4Z",
  "key3": "2omD2t375164Vbpu1fJd1LGhzSALTycD3wn3WDiwghazzW8koi41jmG46AbhHL9qJQUcJdciKsLas2zWSxRk5ruo",
  "key4": "44SBGgov6oymBkYaLzZNpwgiC2W8HCxyKwZypbVxcyff8PCpSJRFqZ1hoVdn4FxW35J4NuJvoSfHVHxUJRGY6nDE",
  "key5": "2EmZAYSfPEGNst6FmWzcdNsBuhcjEsKppUbLjAr6CSdwSGZcMed8zga4gkpNiNPozGCUUfUif4B5hwcRCsfn3vWN",
  "key6": "538EAe1iFxu52PfUKUz7vTHGsgGRKqN2tnvCQVX97D96SojHfGHetY47zc71LAvx2NhyzYZwaJwY6FLvkScQbBvg",
  "key7": "2NZq8G8jeo1vEhGoJQwX9WWKfnQyYyuCxF6poHGFsAQDqmPgza9bW7BQPtNNRd11aXGJME264x9hrWRpwnhJACEc",
  "key8": "5T4iP8ZGM91QyDUvkb2vnSZtnZcqxf4N6XSu4djSVosHtNjyDCTkHjGie7Zz8ERFU9us5RbMRVUbMQcsbag2cgJs",
  "key9": "3oRaD2BgJpNXAdhmZRArYEybc6C2tZAs5jvAYNwp9W9AaDNgCudzSbwBuR24RMQTkjDynHpqYxnyXzpEajtxNFgG",
  "key10": "4YgdS1NSSLhTnzeCdvuDo6CDgehrvVWLiy4ZohiNBh2kuapfQw7YEfjuuJgXFDDw7Xfe74qzLPR7ebHQEJDbYqQC",
  "key11": "4RJrSUzcazkMTqQH4wNmYjpesczMUUGkUt6cy1stomLBbBZWVm6ZJpQD6NWF57fB4KqrgVhegWo3q38XgkSMguBk",
  "key12": "28AzgHSsZryNYY3ZZWoGeGizi4TzUsvvkk3kn8fXLgifLRfY67TrujDPa8h86hxzTBvbm9mLXG9uK2VM7qx79Sz8",
  "key13": "56jEpvCytHbV84JCgxfnNR2y6wBqtBYZGDjGGmjBb3b1RpKGDLak6JHiKYvoQwsF2admUqkg9ws9ma4XaAJZ8cTK",
  "key14": "5hghv33QCLnkjtmx6J3vaKK3UdPJkFwdDpvaGhr26afChbp83PU4EjGqWbXTnXh94YXa78GTaN3yEoNugeu9omj1",
  "key15": "HbaadAS1xd6tPzecJvtTquA5xdx3DW6dgS1JmV4a8kyQDgZ7UMtcTgtj17h9A5G1B3zXFytFqApY7Yp6PJ5RXoz",
  "key16": "4JDEDTtNp7kGDKRdH8uigfxAPbgjCpD25FwFKb7DmVkwarJSLdut3F5BqoJrJXN1eZPTXav1mRhaz2wci6CF2YbF",
  "key17": "3mCTxFtCJbSTpXeoMpKWravi2N3GnMite8sYCpSKyPM7e6dSrKPfZrFMLtoJA1wUyPk21DmYdpN722XJXjK8NXUP",
  "key18": "73LRepvm63wZPsyYvogsLECFUpy8BPTSs9wgY6oFTFpPDEXgddKm86wmALvcQEVKpwSDdvqSbhaSn8dMYtBp26Y",
  "key19": "DaY9xjTryjKyFRZxjPV6HkDMcRpVbj84tRG5r4ctLqwCbhWFFmcWd39p91X1PmxRTtaVuM8YCihsNebYhssSsxb",
  "key20": "5p6rYky9im2dayJCvU4hWWNdm78P5uc7t7ev4P6kK8hzcYEPnPQJzRDhEaf1iDKzSQhJSjpxfZuGV4PGu4LCryqY",
  "key21": "wR9emKWQpqhjox7J1cDmL1FdTAnQ62vFoqnpB8JUpbAuVT1PyFGMxnNfpG7qsCXsrnYDuqh9Gi9jt14cnJygpCx",
  "key22": "3TL4XzEbpUvLv9nfiZ2mpAJDXUQp387Kyzob7qhDtuwqxJzsHykzUk7NdwUiotyMo6i6PUJgK19dzoTSen6M2hKF",
  "key23": "5wA31F5VxxDcdgoDUPB8RQZWDGaNeQeukCnnDit7E39arhM6E4oKd5KJriaMRbYaeqfPFPVAm5Y4R7vXWb7WtPAc",
  "key24": "2Umq3bejfdzzaVFUBp8WbCxDefnkGWS7zpjpFpvh4gJLW3F9QA2L8DdNS91SyuwMYUxkdaeuoN2qLhHJGZEdj3n2",
  "key25": "2TYZdQuFuYwT6usEJeCnzsabgRgBELoWboFtBM5BJeZk3iGX7pzRYLmgUxh3uxChLqanZkq23DpgpnrwU7r6yPtK",
  "key26": "241YqPSdzSojufxnJV81b4FtQ3tgjVFnenJHcPDyCub2aZ6b6bf1s6QDGiC7b64tDSRX6VaPVfe8tKpaixmB9jYV"
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
