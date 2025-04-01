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
    "5bu6PWFKCse2vLSDiFn791T6T54HqV7hfdWkcbRTEQ5p8GevMDmWXkFQPH7XUfb2BdG9TY71UsZ9a4fqnjoVTzJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcNSVfyqS8n721DzM1WDbTpVYdoKmyP4wyRAcBKCBWNgJafDGAzu4T8nijMD36eUBEsAHXkdBM6SaAtLFJ6tCUA",
  "key1": "4fUsUf6hyupBNyWgz8MGNhogzEmpPc3HewpZeB9GhmPGmASJzNqoWcQu123WasG5rf3BmKAPNcmvw24kFtBpat1g",
  "key2": "xS1E664GzciqeDiBJ7Po6KwPs1GfM6vC5T47sggzP1FQWsLhP8MUxMw2QFuJXAXuzvATYHMSeB6jHvYuPKEsws3",
  "key3": "5UMbew9zemJENkXZGFhu4TeFgvpJANxoK12FF9D9YY6myPSKzNWjh83H5wk93wRQuxrSiNTGq7hip2YkW1sy5gie",
  "key4": "3msfanriBgz6myfL2fPwKLbmKWR2iCLYFSZz4hviCvYLg7gpjYpT5giQ9g2LKhpwmmPBMBvavmrT5VEbDv6wPieK",
  "key5": "2r5zFoLAL8AtZkX1Qo2QZxmhZYpY5eWqQFVN1V1cX9U4cybNSu6D4tFseWsxMHE7bvPNhUktMSdrpeNvqRbd54Qd",
  "key6": "3uRVTRgePfYJwzv6XKcdtQJGny7vBQ1YJQ3BFVvnCNEHhCf46SGAadCtZVegcn98dF52jVP5aLXD4BeMtGuuU9AZ",
  "key7": "4KXCcejS2oRbAxjBFftC5oi83gV2NAeZYnhFLrAthE8fqNckpHmQ5YigYCE3VS2bXADAHeBf6ZyukrLqDQ8jAEC9",
  "key8": "3fWR9ySJobX15XbrfEUKko2vWdNCf5QhQ7demvFGLravxLttmQGchavUQdhNf1ki6UB1uHmrUE4icKnmo4cJAcsw",
  "key9": "3wzs3ZgFhs5xfrV7EU3SFvmF4Sq1WuGbkYYSDtLVyqGXGGQoqWXEnLCkmSQR9EVtkCHB57BYsergowV3zdNLy7Ha",
  "key10": "4Dq5XDHaX3mkxvLJTRswoPokCZLENjg3s2zS7m8YQsxCGvuP7G4dJXiMDi2BNWgwtoXQbp6BnkSpB11YiSUN5kKZ",
  "key11": "4Ch1EzuRBJLe1HhCm3vRkWhuXjA2jSADy8dhGY6CW35etZHxTqTTcn71yFPMfEERKCfFa6qjrBNRG5ykWhUmdC4D",
  "key12": "21eNrrjRjSoG9zvNLDN8qQqiw64JSCYbm9Fi6bgFy8NufknEiW66UkSoaq9LmvNfq8B87WfsEpk1r9CWDVV1di1y",
  "key13": "4j9CUc6ChcM71wcm9fapntLNxXEAgevgeFXKwsKoaEh7P1q1NjLNUu8qgP9eunGGYSs1EAj5mFnAmJKcwDgwSDHG",
  "key14": "4RwUWESowx3G4m8Y3mWTjnhwJYN34XATkeciz5iK8vNoCCKpEyW7PmfmZVqK9Fz64GkWuAV2n6QukvH2mdtCWPp9",
  "key15": "3ePD6neEJWkxWJQ7V1UBkiZmLrjyk2saPP6Ya5fmtyQ7gEusiwNkPobpVNcKMaz9gUcA2tKX4ffuhBhRppx4PjkK",
  "key16": "3kP7fN8pjmm8KLFPaWpJZVS44ktESRCscwzi7jurtKF7vSd1en2xnqbtrPCBRg7k1XD1aNiKLHTmcjSd5JzrYdhn",
  "key17": "4krrg9haEx1qHGpM5AXdoVhTV4WzG7Zt68uFzFvpkWRTd6qk3Luk5ntcFb4CvdBYakTcVXuY7zEVKbWitUK812qt",
  "key18": "5Nv4Shih4WRtPE6yRupyUBW2YqA6NbZjJaNuVAS7c8ECr7VB5fT8JtnAJzr81xT21RRbi2tYfj9dBtP35q1n9ddQ",
  "key19": "5LQjKbBkDR5mYcWHGEGkTiEejnQXhi3ihnMKommfuof6DZ71VyY6yD8jS46hHbxeUXYpCNTboRAMGUXv3cEx6RgZ",
  "key20": "4q1pdB3xNSDGiiPoKttnbjuCHQgSZQAyCjiHsYko3HmqxTN7u186X1dXebCwY6c5Rhbok9BfZFC3cyE6MfR2Kwus",
  "key21": "2nJpsvdtb5mgqLnyK5ip4odKG1fTMDw4UohqaU3PRTy6pKusSHoTAZA98mesHAQw2gkmfaGGNA6hka9t94418ACv",
  "key22": "5AgL9MYPrVzFtK48nppALKjf29Stx9X61ZaFD5CsuB3CzCPy6PVQLPa7QnXjE7FMDcnv1k8pDAaidsdnLSAkir2c",
  "key23": "2JgDSpyFBeZFj5roR2a6zLG3qECnGzUkenuun1sjPpWEKuQHn86qoL26xpwaZ38Hx3f3RAvKJXRPPLsdc3ctsrjj",
  "key24": "JMCfYdhDWMZDYJAUHGT3s2WcSAemAQvzQKKpQtv1CrqBQy1vCc2aquLiUi12oJriZwCUKNAqMbibehT4278KEHo",
  "key25": "3Y72Lt8McvyBJGHFGy97sAZtyF4izsK2BpNv9eiQi24hpS2DtspNHfGaqmZWXRHTBRfVAopHno7m23Q7cX2k3CEB",
  "key26": "5jHMwNUS2wmkHmvC7EvBFYgHYK7isCoNauGr6cw9NKEruQBDahJryYQbfi4VoPJVTeAoZupC3G251zkjtUa2aihg",
  "key27": "5M19ihifrUuXtbxDyfDk7zqoYGF1enkgr7GK7eNrBc2LDexCJz7Mo6bfjkZyGwDtBbQK1sw81UEbf89Nw34iG16u",
  "key28": "3KM7HbaVUVYZYV1WTvYzw8doVWCgqqb9qhzqBcvvrvRw1NsouHHbZ2Z1pah6YBwtmaXjYyiKWDPoT16NqyEYh1Ga",
  "key29": "eL4cjwQjS8p5FdmeCJFYwJZZRDkSWV88ukfzQKBooHzSERiNgpGBJBA1mq176WRqUTYAnkxZs2W79PTRzxD8iPe",
  "key30": "2UHvMErNyRPHZGT4eQRFE9ydsg6UqxBT8CMnNWqHVy9T3TRKntqqJnbe2S6FNPSB8p1isA1gWFa8pPsbetapWKe4"
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
