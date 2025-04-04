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
    "5u62nCr1zVQtb2N1HwxmDynDWaXBovbzrezL95HShnf9SHaWtxjAHvccWwC14LdkPFiE1ofrmSguxqsuwz3Rhrut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnhmwzQCaq4oqzdKiN2GRcKZsyKKEc4cZ2nS6SzzfE7dYwBcxez4pMoNE8oaiAiq6hzWdbPwd2VLrNVHbbzTZA5",
  "key1": "3fkEnRfTi8eQFZ8kyCtZiXk5qJcUzjpewkDwGHyJ6B6A5YQ9Wuh1MTS3e7saLZjuvY53VkSMHGkM9ug2GdyudFxz",
  "key2": "78Y4WMpXnchdyHZiST1cRLEKtxNB3EojpQijJmZGnp9ontHhSKpYPk44nFYoucJwRxG6tivXLWhqwoWGCqZVc4q",
  "key3": "5drzTEdz3XnH5nukzz3xrR6jW4jaoR2w6Z6bbr3BdP2m8H74jWXMm24tbMyWD3TzASBWrvR9WicYMQyPk9qxmYef",
  "key4": "4dTy2u8ZpF6wB7oFmqcxMsDj7CAzSBtiVe2TCF11B8hdFhMze2zVr6Axz3JcvHq4vv7dN8KtQgUjsKptBbvdLUaj",
  "key5": "2novNUchCkTS6wvk77NifeVoMicKPZLyjXKZcvp1waqu1GBAcqaGBJAsmCmgk9kezLUbxFyEi4jSo93SRrvuDAsf",
  "key6": "o7zRbd4qtPAb6sKu1B2wwUbKZC53RYUgAzV6Bnc9ZWdT5PuGB16sMVNzYTnJWAhrWTPBCEfmuA151tVsKpQCYje",
  "key7": "4P9E3uEnKAUctYijdbsgJG3dxcH9qJ8CKUkJws6mewkhz3ps5P4QRiqozR9jhsbr58hPW7wxzYpqGckv2UuzAmNx",
  "key8": "3NLJvRo6p5qQ4ve6K5mNwezg8U8Jhy2Bez86KMGkkPfXVDM1bPUtgtrnDsdpdci98cxVzt7PXoDm8tH672ijVFha",
  "key9": "djaVV4VA9bzcChia9S9jxYG61mXiAvwwD7nnvHvhVYbzwNSrK46YUY5vsnXW2wjjyy6RxvShpX3BN8W4fCJoXka",
  "key10": "sgZzhn6Nh6gZL3TyQDP3ASbXNdVWWc43zmSKnaYXHE3CchceMQxCBneuHzz61drvgZvFSVqzbXVwGvkG7TyabLY",
  "key11": "5UEUxUYA4VciTgYrxz79aDJDmWKbyfDWWnWx6MLNVn5XeBBsyJgsvN1s3nf7rosmoWNfw5sHcEBo3u2K12k3p4b6",
  "key12": "3LcnrKg9LJLrsxKnDkE3zoiZB65wAfUtwq4K18nbB3ioSvSduykEo2ktob9tqAGTZzZhY1pDaoxCy5y5kLtLAaSx",
  "key13": "5hKhiKd3VTSQ4Bm2v1w8WY6o7HcnAZDMUVds1hxYcrU61t4CiUC42NgVFgSM2fY1t9i1MJJsnAtXYq3iy9woxs8J",
  "key14": "2whxAsoQ6kfEShUREiQyjTno6bt9EMuoiWnwpvJ9rgVQTiEj3bXWvH2kX8iwZj6frH5z44M75xvk4kiBBHXcx6AK",
  "key15": "2cVG7Nbw9EJGfPH4Tm9L5ytFgS5ASqZBXWdAExQzLskjvjRNpAY3QPUL26eNeU4tdJkLDQ6DmxSbjjm3kvTmVtA6",
  "key16": "rUXj68agxBHnhUkamME4mQoGvsotUzE7ZVNpdqFNxv4iZhZpVjXmWufmEJFt1RQ8YXnjVVmDHPHfVC6WRfzHqZF",
  "key17": "3ucHnaUgtMndqGER5wGoAmijwqAvyYLsSky2k3VoGag4qKQR8Cy6wNL43ydbVpFzhdP3ETPxUgKF6CUTvbGZs5dW",
  "key18": "wrVzZGyrJBa6XLui6VVpAXfPhhYLUm2gsuepCxWA1zkUTXpJk4wR8dcRpTYKn3dm4Hnp7r4H2npc4raiMFWJ4rV",
  "key19": "m7GFvUUEjJBiPeqgx3y2bYaVBygqCBEZh1vyMh2zBvafvLbWwDqSGoCFWN52EZoHo2pqmPwrAqEzvxqmZo5hLJo",
  "key20": "2uohRB2qbp9yc9DwwVac6vhC97m3m23ssDvcHg4RV3WBPyWxibFCgSzkRE4kcqZogvFoboXn3FvLjzrfC6FEpdir",
  "key21": "4SoB3pVLUzRrXnSTU7fE3jTY62vU6YPTxmLsY9PzAAzNDP9tCEDCfsYGYoAnt49y7GYyEfJP19W12EYWHE7GvqQn",
  "key22": "ujF2VU19qav8Bnaw33SUF2PZRTygpXyQNnEf48dzPmxC1VNGGt3DonzUFJ2DTZCiazVTV294ramb5CvP9dQTow1",
  "key23": "434JVg8xcTbikki65L7TTzpcPnfFo7todXtaKsaMhx78MB4rhu6TQ8JjeN3vaYmBojYWWzPxY7bHosK9iTUaXXBc",
  "key24": "3VXb68UQKSsPNUkfmN6UFxkkfJynQRuTqv149DjRJgHb6jxq8BwaCbXibBJwioTiCtHnwEuUYEo3SJqpLhEUvU6h",
  "key25": "47gDZA8obV6ybyTUiEHf9po97FQfSsyLiovBz8vSvPn3wprqr9JShxPTAfrabqs7pqqCsnoMeRVfe5jD4FAWDVnY"
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
