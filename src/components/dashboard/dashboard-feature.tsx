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
    "2szfJhvP1ev3vU1vHdP8SCNMacufFKcL5uDQpEsQa565jGd4bpD6KPJz95dTJPd1pPoLHnMX9ypywg7g56bAaiwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akjZ2kfm5B4fUeaRpmGuhtmYrWUnP9VTKicx4bEArEkurbtgNieoAkQAbMmapZk3pJoz2zx8d8TJkEtTVAYx2a2",
  "key1": "4vG82GwyDSnt6gS9NRUmkdihsJnovZmEZoHq2t9Ek3WNsXwrAeN2SAWQPSXZXYrHhUceTuWkBDriQ7cCQvjFAez9",
  "key2": "62hmYwo9UDVe2cgvyVdAjYwzVzPX4pxeQpXeDyUSQzG5BWto8U5v3z8et6j9bZjBPmVT4EVYmv5b1q9s3aqgAAEA",
  "key3": "2dhMttRPN5GSEqukCkjiX116NwBkbgjbP7xkbppxGUFFP5H5zD5LCwGXuENXdbUDtvX4ihSBz3mUPPWbPyhVPRqL",
  "key4": "5ywF5pws9scXiHgQr32uJ33X49CzU3wqmwwD3FLudSkQUiRDxErveFuepZgp3YhQUcS99xNeVRViqNhmtFyiixpo",
  "key5": "3GXnKpt2wKUjmMGrz6MtYYtZQJBuECon38qwEQuKkvTNNgeiCFyV1vVHwRM2gpUz2nQ81HTjXgzdgSzyK147sf7F",
  "key6": "67QHZh18bdN2FP8ZNgxYJv5Y9g4YukRrKKh4rikkFXacYhtf9t9XsqKLbDiBiHM99sBWWXMSifaqwh7MQN6LkDgu",
  "key7": "4iEFGKAvryou5AdcwGEH4unSpm3M3qFv2aGy6Qmwnp7iwyVAiXbc9yyZRkqkHqRSpVCCiakjzxhnACScXLhs9hkb",
  "key8": "2wAQTzURoB8S6e36VNzxttE9ghunz7PuYXXEhv3mwLLWnKexy8pZ5o6zTV6mTaFP7RD2R4JrMCynstgoSwNnFXq7",
  "key9": "8HWqEYFGa5aYNmVUj2oSEwJeHrMHGpwj3p8gfN3PACTyiBApy8BMi4Ls4EtumeurY8hRhon8g9N84LMoWHwu1oT",
  "key10": "5ft7aNqu4RMDCrxjJVNWtwfH91mxzuNf3Y972VMCW2sgSSFZWDSVHtigjH2N5K72z4bRGULPTbuZCahCenrVd1xP",
  "key11": "4LNytQQCGHhJqa4MuWZqgqvWL1B1cgKbUZRFXwACAynB8aFmojWNjTwCro4f1no3ZS2Tus7SyxbW6oaDsE9ayr7G",
  "key12": "4ayoRd1aHpNTaMXogukkSqNKqn8bgxG4172JdVPsXwFJmajgKaf6M71ucAoeWFGCHwpb8feErqUSn8k3XRNtMcvj",
  "key13": "2n69rnKYVsgLgru6rR1S9PbUbXgH77kxKzGEhX2dfVMdmaWEGYUvspP4s79tr1sHV2oGMizV5m3VkfwBi4KZVuKq",
  "key14": "4CYThj8dodmQUhuoKgZU5GgGu54LEVZzJQDWk53Tk8vALDWUxU8aMY9as4gUUTJeVRJWMZnZTbM3zqyRpeSVR93d",
  "key15": "2qzwWX5o45YwFc9qDkSavHQqrw7hy8xpJUVt8wHZ3aEKsBShCm26J7cpEqehDBzUU7rKSsiA4eFg1hLtfxJ3DdCe",
  "key16": "45rriwDnwpbRhrxcR6WZAcdv9pBwDLoDKie345pN3qyxqGMZ2wBhkp6VE4Ln164XxbjST7ckyVivnBD6L2tANq7a",
  "key17": "2ZzhYQctFHspv8AztPa56ShxxYtwzpovWbAmmm3yQGVZ5cgDzabvQuWH6i5o5c92cjAuiyQuWYygGLrLWxUMnpmr",
  "key18": "DKpxnJz4nyHXQ5AuPEz5j9D33cWmjp6dsRhVZpirmDmmpu2pJsXeGwWjYGqeqEPHETToqPBKd4ESop3wxUg9d5z",
  "key19": "c4L17ED2U54B9CTZU7uuPSmUWAkv5CvJYU2agr4eRFWTUvggKxudWujmAXGpNPKEENkxSednFmXhab1NCeTJjD4",
  "key20": "5hN31hfMSM9NXBGDTxDRta5XrRbnFQ4Va64c64vqrw2Fm7GPCiatgFaiz5hNTXYcEKk281oUBB54cXkYnVMvsuTJ",
  "key21": "2FwBDzVKn9YdxiA15GAAhi2yk9K98zqfFTaGFhafrubg2CTUSmWmkP7hRwD9psxByMfBKv7tEF5zKPMwqFmEu2aG",
  "key22": "29yw2P4Zsrz5b6icwkoWmUYvqodssdd3twhFQLVTAiZJvbiniUwMXr7wgvq8vcENFevqSCZTLNcbsbGepFR9p3LL",
  "key23": "5tRfZQrbPopkx2EQoFsfGEwFnxHSLK6DmQPvLT2bQkouuYUEoMVvUDvFxjQh1xE3yo4BsHcJfPxCS3Q9UxiiTneA",
  "key24": "mgG2Y1q96HChawiXRb2yuSW1tQQ5YrcyrrhTJ1fZ1gXkPLrvYEmMDJpoTA5vYTLRcxQVimEiTjawUbyBKgUhRSA",
  "key25": "4su2r8EJTbZjQDk9M2ARZnZoC55QB1yuZgmZLZGatAfFWZGVyu1hRhA2gQySKMM4orA5YgTS4sB2Sfk5akBHM8bK"
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
