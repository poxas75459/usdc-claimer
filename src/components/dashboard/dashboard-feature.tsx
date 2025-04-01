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
    "5hgFFCt8BVia1yEbNqTv9crrSfN4ejiEFsd7Lrj5PDM7jDTvAPzMco7f6WSMuidoiNEbujRbva2N1KDWTfQfGZj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPK5efiSZf5W2JTzZBBLzUrEVJWyWej1oVRMEme1PoQnvr11Hug7NdarJNxdcpXkw8tw1Ta9u3W2GEajqp8FTvL",
  "key1": "5inpGoitZ6Hadgf5JmnkVdNswC3U6sLGd8qDVGzim2Utnvtkx3t53aAWR9cDH28mRM5jhcuWoo1HHVfm3g1wZ3RD",
  "key2": "5V7mDvsEKuTd6HNEuWuxBCPmE9Sy6YsG3ds2FSHiaKSX8E992tkTWzjfvKF4m596yGtQCMRGsPPR1ixnm5Fs1f7a",
  "key3": "2ByESPqZSrdAis5yqxG2VLniKFoHkggQFHfPJcfRSYvKv4AvMsPFKbMMmDgK4DkMKDUFcYH3guyRjkmSAQsvbicc",
  "key4": "4CHxQKJfFz5TaX4AsZehCsvztQC3PBuPtrDWky9cnZmCvuLThE8wPL7jYCd5bxLx7ZbuM9EDt29KrwYyejY8bebW",
  "key5": "s18gtRfvz59CgR8hDYxQFJwpmdjG615GgKrFCu3m3WHSYSRfjimcAHz5Uuv7RAH5JBBzPgEZFAeNDdahtoLE3yY",
  "key6": "2ob6QrSGQ9B8BCtEza1PDYKLUbBfW9qb1vDd5b9pRqnP28u9r31A7ExsqVAvBvrmbm9KHvew7SFYEZ5BdvGJew1u",
  "key7": "41XAXp5WTn6EnYJF4eJPYebMuyDbdcGbJYs8833TeBMb4M4gtsa3WDDNWemsy6EDkQHEv6BvK7LCDXuJLQ1UzSD2",
  "key8": "4Sx6QnCFWPjBzFrrF6s31BzpiPxnhM3XCy9KYYw7ey4YMJfUg8bRHj8zPK5a36uGLo3Mku7sazRdZ665LMgGSsJB",
  "key9": "3sgPGm4gwHWVVcn17nhJwRU8sfaUouuYniMQP5P78SFfaEVpVREJU5Dpc2dRMXeFyV2BjXKWe6bczzadnVaEAsnM",
  "key10": "3FwsjMoZw4FtyaWBm6APKwGUxQbvDDyr1niKa5DdL1PeYa7JiKnLLnqCXNi7ftZ8jBaFg1v3EigA4ZXbppkZUc2R",
  "key11": "3MwvdoDwqsoBVjzrYaU9QqHvoxAi27Kn3nYrJSWPfHcMfWJEs5czNqknSTDgk5B6ibMSCLWbrL5qdD3tuQtR7vns",
  "key12": "m5JnYfQbC8QEWhQKdbB49ZWFTNxn5E1Wg2JsYrnXQYNTZEgb8QP1Agz3WmLaYVtW64yPgXcRmNNwk9pepSCP2B3",
  "key13": "4Y93XqS1dV6DJqtLZCP1TYTHeVjKmeB2pq76VNLYJdQLzU9nJovBSCkWGh9nNcYDyRB1GvzBBfxvKfhQLfDGMRYw",
  "key14": "41b6bVv8iWdi1kKR21HWv2i3zaqPHDcwQsPoe5TfGReazRbmESnH12SzDbVFwe136bgNZZzKy5gBDREifPVr86bE",
  "key15": "sRpgCiPotMp3pPMizqjaBnXCfLVnpFbfjYRGvcDwCqLAyRELgAouq4pE4QYvitG93bbDheVqHEkjseKBqjzrBMJ",
  "key16": "2nkjMYSFnzp8XTsCSYSEf4fr2vdzrJ4cFP5bEcbGxb68gR5Gpn9nU7VNzrMmF2GBm4K8tqsPEeVLUa1XrnB4BikV",
  "key17": "5LatJSz4KcDfV4pXdMJvGNmUQS17YSU13TdPsAYpuMuUTnA77Lvixp9Ky1xf4EDELHLDzLWLHN9X9C9D3Mw17XJ8",
  "key18": "2G7kRdVzD9FHCkesMcQ9LmQSuvhQb2HJyw7D3HZk3wpac2rxvfKcAdDbeS156dYhFWZk3Y9g4XFDK8to59xRMV3Q",
  "key19": "4JS5vvqwrQZTMBQD4h59HU9CVWMXVvdZZrtFVoXUrtBR1HNj3uAFaS4gh5TgbyCnjGgdFt12Kt8HmDzJx5nkTrHU",
  "key20": "2ES2GKgK1yQbE9LRui31fSMq231FB5JTYKKbZAvEDzS4jXpM83fSwM5etduq6BJdgS4CunTUA4dF7XPP7LuNPxsU",
  "key21": "2s29bQ7p2NC3NNjBAYRpYFHPWjZ9ZeiBFyWYsUubUcpu82Qd5qmqbiHYew8iHjYrWTNqNuhXsqKWvi6HPhEKNRJw",
  "key22": "2oPYoebRgX19heYhvA7rzyL72pfnwVK22CULmQ8L8izY5RYPYr7C32fRQjE6eVnjQAKouzyo6ZgHhyBmWuQF1nK2",
  "key23": "Ypr9JFoEh1Bp1WrfQXLFYyegChwn7wGyh1gvbYh26xWkSLgrBZqwSosZn8deaMyAGp9p5GTUWQFd3jha7oj1iWR",
  "key24": "4cvASa5xsukW4u4UMGrRioj75rbjgiSopVWoec2SnmdWQq2tzmjqiu5s63AiGRk9y2HrXo78EB1cCWSHro7dLJta"
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
