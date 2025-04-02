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
    "4eN9CPWaUMCyTnVWDRxijDy35dJqC3DqPxF1Jy2VorNgA6HmvQU6TowSrsaX57ws3kKwUhAKJP38PBGkk8NcUaEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7wSwF1FjZxGMsugNNBxAr4XoNJWWKi5dDh6VxcExGoAYU1JcM9FTDdp9ZAYQUh58BbWp7PhUGbxZvuC4nYZWkk",
  "key1": "2rhvGPkTTnHcf9Ed4F2WYUQAo7ncDpmUZ5CbUzSuSzFDMVPb1ZVapqYDGUhaaVq9v816Ne79MeZdZ6gmsV6YzpjQ",
  "key2": "2rKhbFDobeYp72MvWotxb6AhRN64n9MG4n2XP6rzGyepi8TBvsiUR2Es7bZ4HZZnZAY1zUxLmy5Y9gyVQeusMe3Z",
  "key3": "2d1HLtFjjrReUGQPWfTCjhdzDbDmpmv37T2VhF6YSBeLFwz6FBwjHMCtfaA6eZQkHxxQ5CrU92yx1TV7JbVi6WCo",
  "key4": "5TVGXWb2zfHpdnZn76Tsk2xZNfwS7WSjaYjBunbQ4HaoKxaLkmcM3YqHjhhsJQ6dg6bDrgLViTTyhbSeELrE5DhJ",
  "key5": "2KURTjVWV2gEm9iTQfq8urcGkJmjitiT4TKvk3BsEAjNYbw1n5qeZ5oAJWjZhQWEzieNsShD4ptXzZXmYy5VBR1z",
  "key6": "5fZPLZHwgWaXLK99r9xDcWKBmDbWJvmbWTLVzyBiWjpNCeFLioDE6yTjLLdapbUcM2Q2bZ7hq6matJhfytoQMppU",
  "key7": "2KunUTkahRVCqP4bSfmsfwa9RLxLxGfrSZUjQ3XPkXoQcNphj18PFs4hK8SAMxpdoQkoHUsYvei9iHgpNkhKUnTL",
  "key8": "5Fwj3KNtKep1MTfxEgnB7Cj3Z3cE6VLBViq6n4qGfh6NmzRZCdavGjXiojzSqQp6wv9MshD48pZiS7R8XGeocj4Y",
  "key9": "4pmDUc4yJJYKVqpNnDzxGLCLiRtKuC8AfHwet8x9LT2UEji88GEWhs3GgkRkdqUQExqP4NM4d4fhEW4rZyHC6y3J",
  "key10": "2niNDx7CUcUqsE2SbtTNHJ3YNDP6mXm1cHmqkeBNLGhHpMdcwkD3o8h6vWNfcBehLHds8sEw7dDcSwMcdkawc9w6",
  "key11": "5EDP1mFrgCN6eN2ev6aScq48BhH6rpSLxVeBbtKrzeEq4N43L8vahnqmMtiNeR54iC898ohBA3TePUvZwekVsJmP",
  "key12": "4f6wort9ycDJqUtuM94bmsDpoHhQE45q27juxoncTJZQ3b9Y9qjnXuoSpVD2Rd9qB6KrYfGrQzF1ebikMiy8UxBY",
  "key13": "5RpZXGqSTWa9AP3sdWma4Q8zv4JF3MHNt2PfXCoUHgYCuUEBLxyjGMi8FL7StjgwU9NrSmPo7vNuHcHf8FC7L5GL",
  "key14": "2pn6pdY8p1Wki8sS49jWriUaVLshSrEPCPxXcDX1doxjbJ6HoGMJmnYVkjFxiteWAiu5pAgHvgBNAgStF54y4w3f",
  "key15": "54QdZ8amTaYGSgTnMoKPucGzXkY6fh6cTbvyx6bcW3szrGxzUdG5UbhUp9f4Sh1eaDPCozGuhr5WyfZkvJQAMkyH",
  "key16": "61XQXFJKNfgUsVVicJ8i2RBU4xEvNTjgam6Cia9HKkMUkm8b1gLsfrVGSWYVEQAKeQ687HUgSbWaW64m1qqMJTbK",
  "key17": "3Mg9MoFigDer5u5Ky7gamGeF3qxZ73do8LGigeUDbBvNCVzeEAYANeRohkSTo2Wr7gQQ7rh5sgTAWNamN4Sz9HUN",
  "key18": "2h7EwC4jcksU2dByk5TWs8aGHYQnHChxZzP6evia6vWKTzQbxg4anG2YUscDG5sCJztUDbcxsipfkpGUhN5q2oPf",
  "key19": "3MNPZhM6QUgDkZPkdLiQn8H27QseNMZ95jyk9bLUFqByTYm7U3NerQFhNYFotRBaM7auSyfnLx3BedNRcvP3WhzN",
  "key20": "4FiUqWjqP1BZPSfM2aCxHQkZYV76EQgaE67dz4rzmam1C6V7x8q7ieSB4uurHe7mejXnPiBzo8uNFustV1DDqkJq",
  "key21": "4wSd5zBGGieiZnjfE73XKy1wRU29VKpLzZmynndsZWFxmXhGqvZTX3yxL4eDAFaJPiHG7CQURTgVN7gUpJKh27St",
  "key22": "22dxC8xLKyMP92rHsf9FVvKiNCdqEVZU677H2cm32c2KoqBSmLDoMsCShVZ65v4Fd5JZBdHc1B5PNXXUh91UYGYe",
  "key23": "vzP3pNELpt67G49GqMyVVgmwhSi1nBSREPRTjjnH52mN1HCMLgKHiFKTg9LVw7GQfAX2frP7fpoYxkztf1X44Px",
  "key24": "4AcQ21FZnUYnuy7CkYSmqVmcEG67MSRcUd5YqnSvNeTqGTVBpyAp7e4VqfSNAYUDGgPBYNnBsabLkfatYYLYisg9",
  "key25": "5v9uefhx2q9crMLLrzCiuiwbnSLHpUYtm8N7evXC2KKFxQgX5rBWKPAWcpH8NbdNCJ6V5X2yQVswLPSkfZjLJ8vq",
  "key26": "42Xhvwtp2LuKgB5o4KmRCRsLLQp5gbx87LuFAxy86v483bikFD3k5viPX17ofWNQQwCyLxU6H8Ns4dbnarXWex7j",
  "key27": "tH6ux7ftyhEgYNiTGw9danLfU5xusyGxbjSWqDAvU5bDWVKQKKLgtG9tiQmNJbjKUsmFXkybhH51rxeNGLUkw9K",
  "key28": "4pCWnVDWBPk5ukR3MpzvQjw9DpNt2Bo9gZoDRy9r3k8iRGFz7CXmNWZ6YHyTum6RzPM6JxVmWXTJZYXo7dxfWte1",
  "key29": "2gcDsb2uYAJNFWgNgzYtV2xX4DWHor5v6o7qKXZecwfXXkJ4rscZaxpHM72jpKS11fHAs7dYMdPD6yUzv2mhWAc7",
  "key30": "5BTay8NF2FYd1vh1HdHEZda6vywcvqUyRQfaue3GEgRREym9bDkvyRLNtJyZKW2DnDvKdivCHPgWknAkd5xqLQEF"
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
