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
    "2MfhC3FQYzar92NBcBkUeEWQGamk8uZdHZt7ih9qeR1zon4AkToXrNbjsXtWEhkhznRsW6m6StJMF4xjBkenyGqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkznxZQxwas2pZ622UPbQ7EK2bdbotL5ZzmdSFca4o4TcsGqUgTYXygJAz5nUjEg6kSf1MdrK3XhM3PK3chZe3H",
  "key1": "247jQyKQqL9zZXTm2Sjz2gh1aPm6YfvhYstGSM4iEDvpy7Am7Hza1cdJKxrFtL3XgUTTAfZNspqdr9RKBgj67SqU",
  "key2": "JQ58Gx3eA8nVfU9MD4xoyvCRX1YHePhTm1uW68REVy4RBskHbW2d2eSgpS5kE8HKbN9EQFqjhGAcQEwvtW5dk8v",
  "key3": "qXpF9PZ2eHm4urbenxC43w9WMNA2ZtS3yknykedDUshrkvHUrYV71D9MnFLzy74vtyKAPAFwAnmkN33zysfyJW5",
  "key4": "4yzUVjeoJm3vSnUhHqxJ7EWqD6dPTjgkjBMCXm8NuTWg92AC5jgEHRBkuhamHpgwtASsn8bDyB6BvUmadzeLwpRN",
  "key5": "2g4JR1Wbc7Ze2ZqtwEoZ6qpK4CH7EaEBD1jBxPAFq9ND24zsMqCeJERALDJZvnhb54jMm9piTWsitsAvvnNEMUo6",
  "key6": "Qpbk2bPexP586BMSo4Y6USn1SekLtrYxZqZLFKohp5SfDfeM6DpD2WTjQHsiB8u7YVtdrQeGThnZ1d6FNfQRx95",
  "key7": "ezMygQVRWkkCfoFUCvCE4rvJUyNfuCStNEwdD7tDMwHwdeKhHZen1tvmEV8jVEbpcawUYUP5sNAJSU3cia73w3i",
  "key8": "3LHSLcuNMQrEv83fPzRLh5RHG516bqZr8wm6C2iyQMyM2gUEURKyZhgaiAMeY2PVNvQCANu1k6Cxdt7S82sE9FjU",
  "key9": "2ae2vT2ySWzvjwrxa4taVzsUj8ukLJPKf8pQEdy2U8tgTq3Gk3NVQDYsCmw9m4pzZDM6hCP7Ck1pa26mz4jGYvtQ",
  "key10": "4mj26H3Zu4szSCeoWextb4FSa1Ro8cxq71F9pwxN2z5ceUdhubEQBBk82R761tkKLicgzxVHGFKuXc4h34qEkcz8",
  "key11": "42mBgGDDMvHzLx55hARRGY71m5MVnAAyrdnurcaN9RZmCZLVT27SZRpJku4L1sspr7jikUfMX9tRYmzETT1n9Szr",
  "key12": "4EakkdmaaLaNtLCXC7cZBRBbXwyyACaRmtF1GLA2uhXK2dux3gcYtabWFrA4LagMVFqU6tFVFdgSe1FDin9McBha",
  "key13": "YCzH55ux4xWt9WANkrTUs8722HKHRzPdnApPvVZS4ZabpgVRFP21Z3c3NU3vzF46yYhCNrXDbouvWq4XBvXcZac",
  "key14": "4sbWFsXdNx4EzZi4rFEmKVSH4mPvrL1Bukav7AMm49ZmFs7fGQkmgwU2SMdEeEdTg7Dtyc6YnxucVvFBhF9HAoV2",
  "key15": "4CjfPdo4Br2ZY1h4teQzSzbjJiJB45mVkSDn5W43MALamCzqUytN1KSgxjvkrURo4ofY9V9mfqiRiiFcSpG3hcth",
  "key16": "2ACMQq5bNS5mmyNSg44CVkgsm3EeNNvU6F5qqqd95ZfRom7yEW4eAVZSHqtznbHuYSGwchu75MieAvFNHeHip4Ee",
  "key17": "4YPUh9ETv6UTmiTPUMXT8fXJf21pz16hxP6oaXiaEKdcdwQD7Ni1pwyzknVVvLYmQmPGvHbLuvmukSEc7nbaghUT",
  "key18": "2W4bbyyF5LW6G2AYdy81eVFL73v9fA1r1og3PSonVyegP2TiNsD1XJbeoYpdbTD45YpVhtZfGgy9u2SPxmNY7Eit",
  "key19": "5MvWyU7wCzvYD2GpF1h5fuQFSct7Qzj5jjwFyoWW4Trecv9Zd9HYoEFSUbkvuMNtXZbKCihadorHT596n8VCRfYQ",
  "key20": "YxC28to8T2vmGH4rdoA8swmrBwaGGhzqCA3w6t6Lkj8Fapc7kcTnmhYfmKgGfRwqHSbWugdBGheHubL3eTNVo9R",
  "key21": "4hntaY1tEUHVJ58gm5hytW5yfMLLsf2ybDLNmddQmWAyBXHv4VJ6gb86o9ek7KHqJMPKvy5oV6c5pGQXZiaimBqZ",
  "key22": "2maAWMvB6ABPM5udsNfdyWXUtkKLbQzUfqo6tWeZvy3dQm6q95x5L8GKDKe9fvwobQY9fFFzDvFjReonxpuDZ8zt",
  "key23": "mpNYShZsv44C7HUi1ojLtN6unJRPZ6mtYXM9493HRgs1yj8DS7RuVTVrJ52beTvePsQmrJLhkQ2bAWyhRH1rqvG",
  "key24": "64zbx32WDfhHVJ22kSMtuD6ytAWNnyiZ6j2BBiiLsYf4nr1TUhVUbpGnLVon8iWPyWTNd638UR517ig9fZK1Ydka",
  "key25": "2bnijFp4H2BLW4gFtKKcSVSht2cuTHckHDsofpfWBonY4kaC89XVXXRbM1qrzzC5W7nP9MX4SJSzxq6PzcqvG7H",
  "key26": "3qP3GVoSTbQGYzvTHu4LgWBrLSMbenBvkqRJvkFg72qUU5dbWWd6EESudD1NZXjBzfF6WuuP5cwoRSDBSfSADBQf",
  "key27": "2iR6xP6b61zftBeKzGmdTWWVFVBiGM3expk4FyUNVHBEJmLP9xCZwr2UiK1ynJAyfmDyxG8PgsddiXHAG5BaWwmG",
  "key28": "4R7KsFufww8MVUbBVPo4oVx7u6yZ7jWuUE6kdRSHbXsJsXq4riy8EdBazWpXewKM79cn36Fs2eWBet8w3PbBvBH4",
  "key29": "3eg26EuHpNriUkivyjyC33dcdhpqMkSBZTz3VJu9jMyhLzUDnLM2EzQEvqsiBFTUNMKPH1iBfofey22m1vrCPubJ",
  "key30": "5UCpxC76R4TA7Xoo9gKuSYsSEGYTNcCRE4PpPy7sviAG1esUPEw2cxmcetLqnnrAe4saDaYuuYB9bUhdcPT38bm2",
  "key31": "5TFznT3SpA6Z5AmaZJtMgKAFycbh2D7hx7PschteF2ywiPbxFcJWqrRyMYgnMyDWUjPc243H886RVQBDZPfuLXA3"
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
