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
    "3oZ4Z1QkxvMyQoXXozSngoPk5VGDvoSyCm2SN5ByXZT4rysKesgMvF5PFPFUdP3RHmCxDM4vKUJLpP6P6dYDFcMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g2xi5at2YdxVhifmsS1mTVvmvT2FqtZ9m7ceH3nUJfE2WjGu2jeTUHs6DnfTYpF8xDg34W2cnntzwtFwUJGDebZ",
  "key1": "3cf6Jr5PCjUbGm7PzV7AfJhLTCtM5YDsxLa69aLgmNtB5FHS7ShVcx79fJPXDLxStVZZGEq9nQe36BZQfbrYd7qm",
  "key2": "cp3EVtYtBBjjeNbTfxjS9YXY77tH2eRHeSgtF3p2YGVPkXNC8cHrD88h6hJesLikUBhAs2wcGAjcW3DS2Ybprk5",
  "key3": "5dHMQ2dxPNP7UrEwh8hnPeTwWj3VXiZaw9iv6sChACLQ4TA1rSDF4ZemPvJSuKULt8JPscrCDx6e3bv9AqUaQrJZ",
  "key4": "2NEqouD42fW1ZKSU5xZ6GecyYP7e7AwYHZKcJ93UNkrLPckhWEKbaS8Ah6qJRqw3CWK2a1tUtazXoBzMnfBiShUx",
  "key5": "3qDgRHpwVfunJfi93sfTg772oUA2DhtLSvG6CrDEiZBaqxrEeL6P5CXtBwTMpx31RAGw7pH7brKC1RXVf8kb5hjJ",
  "key6": "5kTVBjuenKbJaw9j6mmCVW8gx5L1wfWDgvUVhwm6yiKVGFBkdxV1gcWFVBg5aFxXSGZQBuJ2PqR7XbnkV7hVjX4Z",
  "key7": "2E9r22cYJ6BeQ8mdtACfeTzMEYEfSmkKvRiQLZW25AfLc7cisFwfzeMSGUoA8bu3qLPv3bQjjWYGNreGvcHTSzjM",
  "key8": "2kBbMCp4VXUZUiGD8Tju8YdLCLsbp83y4TNdsj9YYhd5u7pq56LU5xCSzEMF3wxCy7Hfegu1wUsKVttp6TZEFf4R",
  "key9": "azXW1YbGsTQZ8buzhxAL5sn17WqDMPVt7FPgZ4cxta7sm7mQvHxnK8juWtYb4FrCSSPxySPTGR88BmpWbk5oz8V",
  "key10": "2iRsHHs2ghm8Tt2yA5sWDsRF1BfoPJuPqHiYtCzJ5RNzARfD4snEQXrHK6UiEyUe1L43CG4PCLQ8smQ6KMtbdLtq",
  "key11": "nQptdGqucF8Gygn9ogQ54zkAWfjwXSBGfEgYiwN8PTEAKUyefq88ayvmhbwQ7PTYQLT7aJwUkUGgbTmaVzhJNPj",
  "key12": "2PCVX1NxJnSLh1k3YHCxESNSXRuYGYx3EGtVErLZGQXi5iaCe2A844rwMxNm6K27Kg1n12HEdfgb23ZLH67pM7gZ",
  "key13": "2hZAhCGh1h1QgcPCNeR995tEHS7qQZm8vd9pj6vkpTT4U9dgX9C7UBT4zo7VrDxiECmaXonEqfXaZvrWo3eLxk7S",
  "key14": "2DdCkQZkt7LXAY8ouMgWjgCiYwHEs83bCp5C7syLMC1UoCKLe9E9gV5e96bXc2qmRt7a6oLGdyt5QV3zGW8HzKPm",
  "key15": "3JRVQ4QKQm3acpuGrpYwsq8oSFsdxTLg4oc9LtJ8R9FPa5MjNreTCNFTsiCG7PHShzVf4CCGW9Rk2uET2Qy2oPQm",
  "key16": "2ERJ364TgwqXxQbiKoSzjiUQVYfZejE5rdk2SV89HxRNXabvY1wS6SQvzb2q81uVZoZiPtxpM4VXpi9CjNoJLf11",
  "key17": "4SDqSZ9RXrzTV5aWLUSUeeHicY5S8QHTGokXjN3U78YPg6PSoctUrcpSUj78LLifWgA14iypHL7hbM7BsAokYBwd",
  "key18": "55Ap43Vmnp6fRZYQX1Aq77KaNh4rjAHnjTKpvDWsdiZmqPWMYKnoop63r17rSunEiu6ftcUxYrVXDXJD9CsC8g1c",
  "key19": "63N1i5LGSA23ECxGpKpRuNJFQH3uFeasz6Thpyrez1ZLF3WA36cHnZbMS7FC4zzQwmuqFZDjL1Kz4AGVTUqDHHWr",
  "key20": "4kpDJhMyRcrzWuFfrUc16rJzw2wQbjH3Ddcmp8DRYBjfFzFVLKSy27GhZsQdqQWPZan9QBdAt9jEJSUKnEZN4j4H",
  "key21": "4YYyFAEn7LpWoH1fDVSa1T1vBr5mnzYfJf2j5kcBC1gPmmwkn3JbnWt93twSaqH8qpC8s4FS6rZyBVzbCbxFDX52",
  "key22": "tFv4BW58wvKUrShwRGAQgNYuxQMUhMXkBTk8QqmkHu4LzqaPp2inuQKT6dJ7zFt18dFrPqdLLEE2JvHygB8ARSy",
  "key23": "3pL8bmF5Aq3oA4M3uqS6VavUU4MWkNPsXntSFVygVsYwFbQtHFxfUQs2HBgradshRQbMgFFYYrBXKM9J5LLUH1Bs",
  "key24": "3gKyrjyfC9xvr1R3SLKCuxcGZ8Vfr4BVRgMcs2Us32VDqQZEYdem6dwwR4N59dT3TB8tCnB8VQxAHo6V7PwrbomG"
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
