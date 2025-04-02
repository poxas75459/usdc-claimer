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
    "39nVD2GbzEA7ZLNhuVn6Yr96k5ir3qmXWUoV8RNYnVo7N1KTvGHzUxavpijPftKuSe1PTxQZHEEKqujmDuvz5AST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjVQxnzcwoVX56zivseWTVc6EWTTYsJa46DbiVYFZYwTZB2kSTuvhDeydHw9ARdm97nEfrh2wd5EjAX7CK1Fma",
  "key1": "3Rtygc9e5XNCbDkGutx1y66e2TMEZ3ysAWRVYn866NPCrSRr1pQUiZbDzsW37B6vj1vBRP4E7uXykxz3TqDCK5VG",
  "key2": "2nV2ewopavJd5HUFB2EKuUrfGRwhAQ2NoRLSR2TDu9NCtJxidB2sqkT7Ly8wW8cFMczuZRvCtdRoJ6iSszr7SsCF",
  "key3": "5tEdheBQvDUeSR3KZrXv5ZFTKD9GwzK2v2BwrvMaAHG72WHpfZrVFsD8mR84pjNmmkqBTiCWPjSdS2iczAfy1GDp",
  "key4": "3LyvkNM4KLDPCVy9atskSeLKETJDjSqbp7qNxkDJ9KwzPRqNhYVAAu6yANXX3RJwh7tDR9hz6zFy2EAM8A2dHfdw",
  "key5": "5xSfrLLuSfabB3isBpqEgCM8pHL6AYRT8cGGUTH8U98ebvsSQNg4dN6j8JST1o1hC8crsEaWviXWMm8zRtwwnyxr",
  "key6": "2bHhga4Nrxe4CfZdYWEXh49ahv8UfYCQggpew6sV9QyWMwxZr8NyNYbu9HWEqW88U2w5wvnA7bod88hf316RgKv6",
  "key7": "5wt7jhkmFnpgSALkRGGsHXuxfc6PFzgMjLs3SvMsssqgDaCkPPmuhdvv47PiVwDB4sLGgU23ndRrUBTTvNxMnBg8",
  "key8": "47AFZi6UykPtrtxi5SFaT8JBsBgJXxtzxxmmgEzvGf8MG7mtYevG2HqsmcRScFszgtqBq2f1kkmx7ghvYzYBkCNX",
  "key9": "5AUP5GQn3qy9usGG7fVqdApbK1Y5nAXejV9WexKEKWxdf29JPr8XrQTshrXjTKP9Bh6m8wDgwkMBkbGpEmHFfZkY",
  "key10": "2WouU6vqH3KLBVYhYMqsA4vrAgrgUW5JD5m4AZHttCKwfhnYWoVG9nN7pZM2RpRSxqmncym7pmLu63Wm5UtVFLFm",
  "key11": "5ujGZHLUvSvpPdHkd5hKUfsxmHKURNBLm7kEbGfowoBHCNaTQMLCMYuFKJHuXkfejk6Rt3d8pPmCqeRTjYzcpP9p",
  "key12": "n92bFRJWQcaueyunNTBVS8MXBzgxmA9Rhmc1GqeLb5p7natWvdqofE5JH1ZfgBPEfnCCifrMAuFNh8trA59hmXh",
  "key13": "xnd5TRg4xf4ErHfV4ozQLazTnaSvwB8ZoQg6RyXGYRJNtXjGZXVFhBMcMFRCoc7BnuUSF1s5EtUEZLoikR87ZsB",
  "key14": "4ub2Ub5eZMPCdpQ77HSPpUEpw4T9DHvtzSws5xHxmHNHU3UxuKChtF2vqbM74VfBC3y151YHUhyNrYRJQFLG156",
  "key15": "61ZnLB5SCAbwMdQNJmUUVsYdhp8zZSonWpK7MMtHYBXBMRkBnWAoM5wmsXNHD4zd6jSwbBtdKYZxd9AbyNrqstJw",
  "key16": "5oceG4Lg3Zq7V6vytuvkZ6GGLQmAANncuH7rRiUWncNZDTnQqmChhPZh46AEvaRyjijkxztZrQrWgyjpimoKvy1N",
  "key17": "59idmEL513WZK8qoKQoj3HnHe4X7pPG52eP6EBBCwVRGqrjzJ7hdJSYPMcm7YVRtxXHp2RF3mR151tAV9EyPvdgG",
  "key18": "2JdPx1sSirUw7def8TcC7oTuHLF8UQAgaRz2GHtjLCoiNr8um7eo8Ep9qfuLsKb9ewUziH8KMpGXype6wPxBL4Zs",
  "key19": "3GKJZ2cNLdfCibCgFjsjyZbmzHeq8RecRdE4QHAcVvmMzfKHZKKp2LhZWMdwbHTkxw2XJHKN2F4jTUkX6MPYo4Wk",
  "key20": "3c8styUjWE3kLUsz4wZnPmDPX75xTbT6xAEd74QZEU2KRgvwdpCqBG2hkRLvo7S1VVFr9vZ6YFX26BrwWEU471JM",
  "key21": "3fam3y4DFos4LLVHtquKamwo8fUiwwHVRvr8nZEy4r5mWPvBKJ1rnuUFVvvPBetgDY6s889d3cHDX412wKtHwDRw",
  "key22": "2yyvAbupimhh5oFdRA88GsdFAo7Jhw3k22c8UAmp2G12iWqDPPFLeSnnnfcec3ePvqB63ur1fFKPhRoNEUo7yP7A",
  "key23": "3QEY9ghd6Gg9DSEmcue1zydWBWza2uny8C113aEm8UvsXBMuQck63AR5hUMfkcu6MPM9K5KZqJrvcskkGEkocrwC",
  "key24": "2yqdBX1c7XZ2NU71ygEe1drEmQJTNGaLn8pkfbsHQck7BBXQQo38Mf6aUrDn2eMnKnsLrs9zrsqjn7kRMGf8TJUx",
  "key25": "2dKPqFsNjobUCyrDvJEhof3M2VuYAKUbfSWuenWDLaUPrspHvELWadKg87E1koUWB2mcWXkuGT9i6rCRKBJmD5sj"
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
