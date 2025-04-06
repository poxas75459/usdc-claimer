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
    "5JGaeHvpVnr1UU9K6ojCuTeoHdexmAQNhsEscvL2hnUGYSW54hyYUeaZuVA69GkrbFMXWSt84mWyDpa9WoUXk8bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDBuuMFWYK4J3x47amxrTvmZi2XJqHC5wVTdByCztBEvHCGmZuJoNpHfMeohsZnZa9PSn6ABN6SspcjDLqrS7gm",
  "key1": "657CmS71XWDbiYhMQotXXew33PcLjBm6Jwgr5CoV9BM8bZQvStTzVFvHNB3cwHcGnQUv1xx74gVM3HVjAvAcRh8v",
  "key2": "yxprDDkiC3GsFvpMtAsvUriodptNhNK18KGTMiPe5cnjy1YoHDcwincTCt9eUV6uDAGoYZr6rtLfWsknoPTMdTn",
  "key3": "9UjdxBr3AFsUAGubx3dHXRzpWpCzUPUgwpTDgd5GXsaF6aoLe12NCYgfcKiWWXDkKfKrwkyPBxzv6BpuQ8zM988",
  "key4": "3BW7EA18JY3pg6ZMSdRV25a3fG5Z2CUsYUzA5UREUcupbx7iaxGMgfkbEfbun547LVqBZBct4mLZsrwGsJQ27YLo",
  "key5": "66hdzKwXEu3dDhTr565pa1m69Sj5KVCksQFvyGue71UutLcXdMMFJGXLVGHoo9e2Vo2eP4sEeDEUNGqB9iBByHEA",
  "key6": "3fc8nR3PBBYJKXPZtNrqcBMdmPTC7mtRcJhiSzyPTqEgc8isi9ZF8jhmVffgVchzsL6ZXQadUfdLcLCuqsd7wsRV",
  "key7": "MxKGxhsr2TwVc2VCZG5ntrvQrWapo2RezsbbdcBwUHiH7CqvfDJpKrSndhds59Ck9pHmEGshjykvmjh5LdeEvCv",
  "key8": "5YHpzaLYucXcWFbwg155u7ZNBaguKWSiUGsS8V5qADeZpPujGNiMRBFBtjqdjLu9Te5BwDUQ9ijGLNqju2e3pXTW",
  "key9": "4EdKRnT6cEbEHBc3r8r8uMtfn2HwiJ7uXZ9vNBLCzTuNGbTmquEMaik4ychwcWi4mFEUbCPs164mc8C8YMCDvwrh",
  "key10": "3HuSZXXpVLg2cSgai29TAU1hz8jdocHWpYTYj5TEsuBWhQbvk1gCp7xWKNvGwHDVFQHx7Syy8pNPYcPSoSxYNh8w",
  "key11": "2DN42ju7LU6mfTDB3xH4jAxBZzbDCJK4E7M9TbPcupnnX5kw7Z42Zedfr63Ytq7Qr2MJpN38Tsd4CSuoiyyTpjm3",
  "key12": "64TjcgUth1yt9dLsVAZqKAnx1tYaAKH3iZ7UjnZQKUivrTP6F7UmocwQ6ERiajFyEhkfrUZeEvQX2i9gScSf5koY",
  "key13": "5pjKJ7DZschj2rVDmg5eHVG7FqU3ing7yZZR1xUWEqzxoHcWk1T5dSqTCKNcQsUoTfzAuyiYxJNvdS7tZrvUE49a",
  "key14": "m5BEpBcV1pYNukfcCSmETCetvT8jbt9CZGLqryXvhxFkhLc4qy7rLFm6hi4cPLEphwz4VchZHJBYMAS76BMFSyo",
  "key15": "2vjLteaaUmApFKFYV6vb6GGwMhcJh6X4RAztmVdT9cvhvbdVU9BYDxGLH3xdSE33ad2JqnkeYnWCMNnsB16Vtqt",
  "key16": "2HPWPu8xZQadU3ty8iD8FcaFinkANV3V7mRXN6jwxzj3VMYiEsnTQdiVyZtLJbjVKkMMTRRexYhXL4mxXgR6YVmw",
  "key17": "mRVyZCV3d6zqVUcxD3YRNNrqZzpRYDfVNQfbRTjZMEfbEHeSuJEzLhhFFvw1XNBMjRZWUJfrq1Vcig2jHQcfXZg",
  "key18": "3zyAM354E4y77eYQVJnwvJes5isxoUHYeLeHQfRyMK8MLDg7NNbzjXeC9CGCzuN4Vf7vA9BGSNWiCNRYkmbBqiYR",
  "key19": "2wtamybiFyuAaoDFriSDzut8GG4gXMFuSSM2iGsUFfTrhSioeLju7Y7qxf7xfZofRxTZ661kuZHkwB1W15CK4MJE",
  "key20": "T5yRUUVeEaKjzkoRU5XKb4Nt4rYtFebxPzGkh4WKo5nvbzhYKgQemDe4TjMPeFP96gU2pvae3qHU6eZvzR4X5mQ",
  "key21": "tZ42FgoMFMFBK3tsYriJBCv3Tvh11FHjxRLDqCFdtf183zEVtGU6pNQ3QnPfLmaEWBaPQrFvSNMSzhEuHwyZ2np",
  "key22": "24Biq3Y8uJAGSDWTANvq3218UbNkM5ja2Sqepuycu6VkARmmJb7JYEZToQVMNbhE4QbxcLnyxFeQo3cEAaZsVb1T",
  "key23": "MPE4GhSj6mSL92ogjtdkQvcXLknVoXTP7sSNLLS5ZxfMZN3p24jP2rrkv8bf1DSZiy2Gqy8gu5TohondT2QzzfN",
  "key24": "5X8CwLA3xKKi36AHRg1rS6sUmjEouzUAFLZnhnrigvo18XD3xJBQLjSj1Nx4T6h39sQ5P3q9Mep5Y31QdG9QEJBn",
  "key25": "5n9P1rY3F7Fga6GeaQrVv63HS26etL1E5fUDdx3egLfG47MJ7pypKuXK7z5eHEAuJHXeioXskADwFTpud7EGo7U1",
  "key26": "5NUv21s5GVse4unt9dYPUHz3h7VDTgUTnu8aWdAinnj1rm7fUxFxdAuCxTKLsAb76UbHrGx7X7nrCuf5yhjWWX1Y"
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
