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
    "rreYCJHVFQjs1kLmqnJzXosMf3LNqGpMaFfBbAQNrTMuU2ufrFP8gBN3xiAZRViRdQ8jM5qSbyBKczof6uV9U98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wa8yUmt1Rjabv8jXzwfTyzanmyX3tXUCfzuGvUN4R64ieeHV1UrJzi5Hzuudrqpv3nacg6rfxtBUohDh15NTJFS",
  "key1": "5dHfsrtqkdT7oR7kNGDegokx5hzherUUst3szHYcVrerXN9CBac5hTTSarQG2JN4GTFp2xxAPDGAWZ2nQkqDRsmH",
  "key2": "Xg2M7SugWCTGBLLzy8Liq9TxSBvUtcviTxRqtdEGH37W6KZfckkcefEw89DhN2ee5jHGp5f3pTKqLvtGsLaaCrF",
  "key3": "4Tq24p2b3n5641jfk9tcjT36Lg4hVqZ97Acx2LkqPp3egdaNNzTw4hZi3ahZu14TE1V2fEFfpytLv161EbmMFBdx",
  "key4": "xeaVaEZdGqLofYpWVmzjGhfzrPezssJyNwzxtcVMMvDSEEv6Yp6mSABSrXZXFWeNidV14W14g7xduQwv3BxdnGK",
  "key5": "5t7ZhNsa2puX53iNhZjmKtc3XLNdSwuJLm6DgBAEDqSWetFDCGr5DuhC3QmPKaWjyjZ8i3qNdrojjsCz8eWFZNkx",
  "key6": "4qtyMdqwX3tXvriSZu2kh8jPD99REcZXtQXqxWazneBdu7Rc4tFHXjC69KCBmfhUrrYPF4gRgDpe3Egn8LxLu13b",
  "key7": "E81BfKCtwq9KWSu8nVH59NKMQnzCnWQoZ98gAUYKsYn81qqi3te9jdJQVa5AikhyAEczYtGdaqN1jCGsvg9y3xT",
  "key8": "66xeGBDQb1azwgwjXDBt1SWBmbbmXwEPwZ8hngYEQ9aCeH2ahXRGd8PUnfr7114Lpim2AgoH97HDWwkctewUDFnA",
  "key9": "3xcHgGdADAeoBVmM8n3cu2Bv6q9EAttX95Nv3WADT31bL5GNGzJDi7YGWDnFrz2qTgNJKp2HJEGpcyjQ7WxdNSsr",
  "key10": "3jy3zKs7eH6iTihEceurmFn9kMVEBzocaiAZkPVrDKF96942apuPkkAdM9rdAg7Pc5AWt1kNupcLMmVzqANRAx9A",
  "key11": "V7pJWZSNSF87Cf4iU861sP5qaTfUtR9DXJKw1GfyzuhLRzmzngWPY8dK8zL3xNgtXj86iCqpA7jZbV1eKTjXVWg",
  "key12": "6mWVZMiKbEP8cgpmFjcZwABeJMJZUWSg9DtFwF78sdEVagovgokr1QVRZoe5gZbUECqmLQeKFAaqEGFZGPofyRM",
  "key13": "29jmy5Pi5K3cjMigQqdEWMK8pXST9Er6qqVDxmCp4Bir8TGpa8kPVWK3drJ6oETjBLrza2DvSnT5ze4U6TjDUcpb",
  "key14": "3VdvVPhDMrxXerfeb7qiAUBBantqbYzwcTri2CanQbDRF4TTeUVH37hdFur1Tn6KMspGmAvdnqMhtBVNc4FM8pmf",
  "key15": "3DX89tz57ru7etqckEz1AQ13kxw4iAxqiDonVk57WdYQGoQWqVEGBkYtQMa9NgaRjLsrD6AoYMCe6U9rNQLvNorK",
  "key16": "5HY7wY67xLX9e3oerH3YN9SeYfDKYHZCbU83tzEwCVRZtSPbV6XvcqgnPELDfbWy86fUxKa5vu3AU4JvaRcw9QNm",
  "key17": "62cgzVn6MY9FhJsVm7iRjKitmnaagYptPXgSUFePY2CNFr7MnTNCimHJV47t2WKXjBqpkfVeugBsUKTPZM12wxg3",
  "key18": "5bwLPFkJqNgXiJLBsJzk67PdL7PXQ2rWLyDtazVYik5F5QX23La2NB5PUvv2cJB6VFbMe9xkU9UkN5Zt4xhz73Ni",
  "key19": "23xLyHwF7DPAcSyLMYTbF4v5BgQAeV7Y2z4a3p2zVJVpMW26o9yZxAsVp4KtfpMJRqtorKw1D2uuLmohy87wSspt",
  "key20": "3yRjNWxn4pnC1VnqYZ6sKQ7KRGXphomgZPPEpX4dfneLdWpGJwU84veVAqh7oEqYF1MrVP22WRW69raBzH5bqsYG",
  "key21": "3htdbs3PTK39yS8hh5SEz2EWPvMPsNkAPwyjSqtasfZ6UDTL4RjyWJEXKX7QcCqWe4iC2hwArJ3mWscLwQkqymkq",
  "key22": "xBTFV62YnvYsPcufnGcqGzPGTcm4HLk46gsfnsg9gzBDarXYvZSU6S6CYJSgeYmo6JDNXdHgpcn9YmxtJEHjZab",
  "key23": "2ETYVRmyE5ZGnESnov8gJfJjY7WHmP8gKJFpFicQMSbX7DXpnV4pqfszTtks4M6M5dJYNTRuSZpNNwDzYNNTqJ7Z",
  "key24": "48BGa4vfmC3G3P8ESyBsF8h6PjkJQUNzVPnrvrbbseHj1vzG9KyP22W2NJquEt1U3EAJYkE9dtzNWg1USTFAsNWf"
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
