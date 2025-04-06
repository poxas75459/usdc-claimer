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
    "MEffQazJzHuNVmGKZatHaxYt24fvEL8E9dtUPZMq9XB2DUrG4WC6uHxm9kULPKWy1THDzzb4mmmo2NnLHaxBuij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJP2BSAAbakHVhzpNTSrJV9CuNfb3RXPyC2AXZVmU6TozghpkMDSf9Vf5Vnp2R4ehYUCkBSctNfsgkPFx5kucKr",
  "key1": "5DjgwzWLRNacDJbxb4aJ5gctnWf9gMpQS5fei3tC5hmxW76SrX48sXyXEBoeP82ZV4jui7D1hhsz3TtJABBCr5Nj",
  "key2": "59NwCzjA1hBLYdLsMihKjYh2oj1XrBsMSCGbfiJPohtVsPLMmMnveb5to8veuVuF3GBsRhxcd7P2iHfWE1hGS7dx",
  "key3": "4DfpBFYxpW8pZsKN3kWgzPosNCbGrjntm11D6M93fmtqKn51LhFpWZUZEyoySSDmWMiQFf7Ee3se4BXrNR6giauv",
  "key4": "5DNQmBV1SRQUMczJ7fanjKGLL7jL8A65Ur94dH24pQ7aVBfMM79DjDhybHay4SgdaLMadY1FutXKmXvYBiLyW1Tz",
  "key5": "StzTxnJxUBGJCe46ZVpjFYRUM7GR4LdjEhT5PuHzRZw3gyXt4KBfUY6XpUVGXz8W7geRoK8furLskXmj2wrEMZS",
  "key6": "NQpXq32Y4Y1u6ebgnMZDSDrvgE2CWhKmZHy2fyW3HmbMmuaXnxn7x7yfLzxE4T3wEFTV3iZUKBjZRdhc9mPn9Wd",
  "key7": "2dxnMfa4VRG2QNFzmvqeCeZeZysyjWr2ZcYVq51QfpuZAfHotWbeDebY6jGWVL7njbmEBrJg7qGEiA7hJ7Gn41cP",
  "key8": "3ufPYrjrgvJRqrPZW5L3cUEDxbtY9FpGwhQZ6yqLpBjpDpaHKb4XyGDevZyotToecjy1rbG676x6QMw6pSBL33TH",
  "key9": "2nMGrqYdxqSoXGPGTQvEJsgonzdTRMpY6ETyAWEEcdgJKi8KtTBBi1PhyzVUPCVtBFfT1pUPygDFrSiiwDnFw81o",
  "key10": "5Jj42mKpnbhsiFTQJi1tQ8d2kfin4azBH2zXHewXsvNWws6q19hqmEnaGNa8QNqZGPcB4LEMYaZcotvdjdrYZpca",
  "key11": "3Y9CRZkh9TAP53megHW5S5FfJmpkhkonV3iDzs9t1Rc5aERLcix9M1jzuGAsL2RPP6MrdQ9PFo9za4qD4MRT83Ke",
  "key12": "5YtSnKrVftqgPsvCQ2nu432izzZ8zjkk7bZRARSByjenS5VFfS3MY7vciqx7VjpCEpM9dJDTiYhZTT4SCwb6Q4CK",
  "key13": "2tVX2V66yntE55DWnCmt1DF3cW8pGhbsujxzdgZQyUv5isuH5Gx6qvXuLsVHYV294nUZXnioyZjwJPnauhymAzfD",
  "key14": "ybHpuq5smZ5yJzoXndwwFE8AHMSyt7FSbdP5suXJuDRDo2b7RMU4DhyfwmvYdX18KdMwM2FkbiNckrXzKKxvpD7",
  "key15": "3ddb1fYwaX4GJQZfkuGxdLnwZdNxxdqUsDZTqcsZqymyNz3RgT24zTLiYupjNP4zqQFTVVTNEdNE9AaJ8vHKw5Xk",
  "key16": "7Y7TnEqTi47N3vEiQJARd1BgAau1hG1Zfu8uM16FEkvNZikDg2ue7Bx7VRPXc3HHDmH7J1EzSEpVmahT33wUZCh",
  "key17": "3asuosJ3RPgdGWz27UYPFsps1JAeATBG8A4RK2UpY2RZUf4yY3SLQwuXornENZZGfHw6UG6AXetLW2PBb3aKP9yP",
  "key18": "3rvcndG6shrGpHbEVSp3rhVKNSmUCZbgX4q5EvipK1RDA8i4CDRmprnaFmSxuLjAxtWR8nGVgPT6aBSTZFsVRAwu",
  "key19": "5ZjfR4EveCqxgGrNZqP9uQXwwN3xGvXKR9DK7xQ4DM3L3je3JdK7ZRd82hZAwNitQtMDWBrz2AZkAU83JZeMFc54",
  "key20": "2DQZL7zXH7TXKcDnwuZGXV5233gSANejZG6keUiZAJAwKhGCp6VcpKaPVYgT9nyxoXbnftYFr6dcEk95t49Smvdi",
  "key21": "3wP3WctrVrc6uNPwyxXPoPJsC62gn8f1yxoSJU73nFimCMWKcxNT3R9xYdc2QGhtt3HTM97LrSa9XN2NsCLA8hSx",
  "key22": "3VAYnHK3HpRyYJ7cHHo4k35QgxJr29ywtEdWHiRquswZjNb6X6aiamemP3RHMGtV8XxUwieuWUPhn6Quzdjady14",
  "key23": "4G6dFDdNUR5DSnEeKAD6MWA9mzWrZNuRfSFPVae996aZgyjVvnki88pDj4HUoPNkpkSHS1vn2cbKmqMfSCKzahkN",
  "key24": "3812wM5ZVTLCRXDKuSZwXjCsZtLFEpEEsz7DLRrRsSTz6o7AN894U3WVXBBKmFZfMfW2bB9PBSsx85DEAoXXCSWH"
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
