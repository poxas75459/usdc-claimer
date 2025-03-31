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
    "28icr36GQdWixtoLU4TfYqkPSVKWpgs5MywjWjkC1YWBNMXWqQXJTqrWvjaM4n2ZeUAe9FcKMmS9P4b2dxNcTiGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5sG3evP8CKwsGZjKPQExSD3gxqjX8i5j9cxADGLMcf79jiiFgYGkVraSu7KKB7KaS2dgsAnaAuc7XoR5hH8USF",
  "key1": "3ur62cqGoo1WeZWF5TbRCFj48EuEPMEjHLjD5NyWv7QSeF58XaLmBrrDc3ojk6UohewXUgGvFgMRZntZmFD6KQxZ",
  "key2": "4DrYf4S3RcWWwpr2yEjwwF181G6QFGhPiVieiyuLzCLoxLY6YL7YZ9hwEb3HpVuQT5KWaTnStJV1EejyCkPQ8QJu",
  "key3": "65gfgeCKB85WSD4VGHm3TKVWKmF1wXeTfEAZvhcrBRP9U9JGPedcpdQ6cdUDLpFdszJB3rW2sZsB9PDXHXzTbEdp",
  "key4": "4VamciZhuJ6rLabpefVJjG2ZyLCbprjHKmzfYZy7mQS38ge7reYLoWrDvn5xza2VSD6brRnDjHYjWZbkqZA9LQ3x",
  "key5": "5DfTANHxL8s8YVbiWpGQsjMV13PLusGKwQaUne5SiqiMRGhpVgqV68NtfoEoy2F6pJ24biSkJBqWVw5WZ8RqZ1Fa",
  "key6": "LH9QKAWYWm36z2rdyLLakZRMh4QSJNgRaJDDCMAxAVZ3phBDpw2MSD3ge8Qz9rBvP9mtXNHnEqyykuDWcT881bW",
  "key7": "H2FRKEQ8gSM17bjwTHUs7WhCPbmDMAF2xjah2yGtYoBiavUtme2q6P13m52VyveepVJ3CVyCodcB1ucRMrxQVA7",
  "key8": "2RF1mBEPXD6Xztvekn5f71jZD6CcTx6E6aweBHHrnfjpP9n3ZxKBbd2F95sdF1kD1PfShkKWRRQ8dJFF1aMpyUPn",
  "key9": "34SnKxN5dzUqZGSbx6adiPNKGidVrfYbTEcBS6LFDxZQtX14AcV1GeSiKRk1eRGxa7obPTm1wM78GJvMinZcm2D4",
  "key10": "59Poy9VgoFp9DMUk115v4HEtcoC5fDwm84BpPqDWJsPogYQhrMvc7HydinKVEvrzDGa4mz5sjc3hr9inrXKNFVeq",
  "key11": "4pjHiW4sRd2568TtS47184EzyMe5bBZrZkL4Z73jVLmPrUpyC8TTyPgzb1PUreVx4mU7rDfbCJu8YZLZ2Ubu7FAf",
  "key12": "1ct9Y3h3WLNGr8kK1V318uA8Jk1gDNsZjuWcbawWVqhaySN7kAgr9CT7R3xTDbYhNuANxUcwm5uzCr3uUnj3Yac",
  "key13": "49YAs7a9buu6ttu6zjycDH7j4uujoTRWFb8m5GxEMRJYew7qPkpuza6kYiN7FQAvpAtfLexstP1h59jesVijHrg",
  "key14": "PKzgp7aysqesnL6MXuCi6qp4vG6oHkqpeGajvwEeEpY3KVENCmdeWwjUD1npCHLsB3XE9p3QQPxrSxZR8h1szJ7",
  "key15": "4gPFRsaeFeNPnrL9wduo21unXm1HPx1nWWWqyxgq4nKhYHxRNhPeBffEYXzdZ4YhdyRje5jwXfzZ11LPCSDcctSh",
  "key16": "4xqRFPjdk8BYCoFCSY8DLifo6RgPZsfXCNQDpguXYquMDMYXcH9MsmPkPp5zxrgEYvWvn4cb8ZEx2aEXfxB6JKiR",
  "key17": "4iakAZ1At4ALFLJMiQLzQopCnjyLuqA6P7QaXWrJRY2v6Nj8CugtAQjoVA11kZf5tvDzXEVVrdakmqDyQQBXB4Jv",
  "key18": "YNuvZfqj94DAybtcKCErhR4SETXNnCNhKDBV5ML73yjidKp8NDvaNxXVgRL3S7fR7awiNVNfNcuxNDrUYxMgsiS",
  "key19": "4pdxKDiYjWzQnBUe6nrf47SMvwzp9y86xyfbqDf9MKrSGYB5GqCvDkrpBBGR6yVrRovavhkRC9PoLNkbKM6DBBJG",
  "key20": "4CZhWFRZ5we7UhMUQkMkRQ6yRu52p7ibAqKAd7VhzuwCLyHqeGvjYa2FNKeCMBHFKkoozGB6H6Yxyz7v7iF3yhB6",
  "key21": "4ung3jYyiQcGfNF1ucLwk2UNVm4zG5vSq961mxyJaAAdyxh7QcRbARQzdfWecJGk8572nipKwabcZPDdcU8UbTYp",
  "key22": "5d2Wue79Ls89Xr7nkSptqTWtgfL3XqFw1aCaavLGnuPD8qgY5JeKMk3YzFt9mDyY8S7fkxfJrH3ioSey4zsWGSwq",
  "key23": "21zppkfQXwa1ycScEGrtJpKu98BucFmZFReb7VALL38yJswf46xqCzhbTvLewiLmn6XNbsnwDmce65Uwe5XFSeyU",
  "key24": "5qUESwMDX78uZbSvhxhMHtqkMfUrchyDk2EMLfz6esMAMkyqoBLYGkA7qLYZeNGGtvgW21vqmFDtRQksrgEK2dct"
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
