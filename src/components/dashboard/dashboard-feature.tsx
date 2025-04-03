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
    "3EfTMT4XkGXrS85MmS2KhhWg8DAiN6Hm67eUn3CZURb5KxuWPQ1GWtp8dVQvXiBSgdz8NYPb2tqfg5Uw9YC2v49P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59sNcjkcCknYAByA2YQ1teAJrSU3mWu9D6AXZC2hYwJLosLZmrv2tYWywtyRN3SZrKzq7sWHqUdVLTqtsaUofoUV",
  "key1": "3qKQ5W9MGSRJyKV7dTtNLzZcCSWxaiBefsPDDK9kHb6q3U6wfjwSCkuWKpV2SBU8kcvdqxuHEofWeDvsWGKyEQrN",
  "key2": "5ZiJ2QfE7QXtcutJp5pRcsjnw9f4w3kwyNMNfZL4EdP1E4tz9yFpq2ndJVqbZezhojKbUaoMVYtpYrCYBUkBAGaN",
  "key3": "5Xmoqniu2MgVLmCpqh4ApKGkUFEPZiMKtFcgHKDRvDNtVBvsVXJ1wGDc3XVViYLCqGHZAwwpaL91kZoh8wJ9ePH2",
  "key4": "qYPxhCRFPLbPPKDDSxt8Ny9bPbDBjBsSyKX9rb8sUJdWLfG1omEKoooCQNHK7JXBcRPoJL1MrQejcK2Y3c6nB7X",
  "key5": "64a2tutq3mEDiN9BS6D4DEM5PAoyQFwnuty6VXQ9N3JqizmxeXwu865J7XkB5agoYMC5Ud2UJ3vTP9V4cSyBZM5f",
  "key6": "wjwLLKk3ua8cUzkmoPuHTEt6653ZoBjnFo5uU6TwtxiL4WU7nWczgAe1XSVTEsAEs4Y3Vxsh2DeCKEGXc5pLUhM",
  "key7": "64CGgroRkuQAERhubRFKMNjx795m5JYVi6c436e3m61GArBQbEcxF7LP8tS2NqcS8XCDUFzqMvwX2GyP6TmNPS5X",
  "key8": "4UTi25Gxt1WeBFjk6u7pQ5J9G5wLn1ftHPr8hSSyARAGcQ69dX3DsyPF9YpdDEoio45FDvnCEKLmDTvwJ3wFJ4zz",
  "key9": "3XYBgeV2twFkQgUwy3zGJE22y3LKWerqXEdBdUVKEmAxsG5vL1Gcn2RaKsxZuQ8BkvB1wn2AEGvwNT9tdRxpyLWr",
  "key10": "eCEuHoMcqryawXKCmEHWsERev7De4Kh2pAbVhbeTFNqzijTWxA4sf8ETeXjPq2AL4YqwaQXLGSq9hPE42dvuCzi",
  "key11": "3S5kDzKXdRKe2bcFe3JSdckLtboSAgas7dZA3svrbgDXrmNbyKMQGfS9dJCSq9RKHfggbGepjhKMqQDjENtmQQcm",
  "key12": "3KEypYPXbFPyxphkNqQnXwmVdtnZWHgkVNAMya5GDz5R6YJoEaSe8tnp7CykbHZo5jA8WUafBLdTTwSRFZSh8Pih",
  "key13": "cunTGSQ4WMSh5377xMdVYcyaAV69TPyoWTj2cbLyb7sjV19HXysb2nsNG5uxr7aNXPigkzFWVGCXfNVEAzcefDn",
  "key14": "PsYf3sNepBBqniXqmuyo6jEPRNAkdqokHqGk14bPyJZ1vktnjKWDTNtLTopgj8dfTEX81gXYHzCzdDGwNmkYWpD",
  "key15": "5KFp68cpajkpMZEygr653sH3S3neHowUrNofhqAWCVg5DjYGqXT5hhXgpa7UiN27FPD4gYviidUoAtCeWjpgWq4z",
  "key16": "xYKuBUjYB4vYt6Ae9WPddPdvViCESd8hoaGUmA3oNuQjrsXRQtcih8zy2MURk2KNAZLqf8ysMoEFzCw8BLJ7Ku2",
  "key17": "5yuA2wSvz3wth8Px7sXKatg8uQGLWm4miRNpcBx5YdoGto8Dp84vkjypm13G1B1PMU78F7MGEMdWBNByLHEmyD34",
  "key18": "4jNhffburSSG8bRggymApbVhKYqZ65yw6uTRbh7uiuQ521rpReHGZT73LP38XTiJS9GBeB1Uqhv1RP6RZCd1tP8T",
  "key19": "3A8k2shCwZ7TSgAVsfBtwMGGdXUw1fdSNmG9kF4NosifewvV9riiw8vNC6irpgJEwHr1UQAmjdYmcPgJ12SeKCQ9",
  "key20": "2knBTiuforqZ7Eag1ZbqXgqrwmbKCrTcw46hcY4E6DAtU2g5oUoVydNSuDaeGbQjyGck1DaJ9SdLGu2Lz1QYWqZL",
  "key21": "2cGVMk5YwHiXFkEdnDFufD3xdVgUsYYjsR4FjkUdWjsL6bYAMsZYwN7qxMvnCiSCRygon37EPboRL1EbKZwyh4JJ",
  "key22": "3BNFm9iT6TioCeiLBruHCBAhJ4ysmGdKSp3LdZtnDa8FBCrabpbd4xedrcu4wDqBkfg2SpbN2bf3yVS2PdY67gYk",
  "key23": "5dHHeYVYUqa7RkWkEB9RQnDcZFd5JwcZP55m2GK5U5ATokLeMUB8dXupsAZbejeuk1h1af9pNtWTMgJtcJipq4Tp",
  "key24": "4FWWMA6j5ZMnoRo1SUK1DbLnWJehgP4xftT7nuipVYi8y5b4czdZ2SQDZZ53etHsCDyDG4aggHCuPJsBUxSHe4Zs",
  "key25": "otQNuqHKWFLPGa3f9R4KGstsDotg5WYL46U4PWunNDnLQggagu9Hq7yj7VnF7Wx9YfP5boqFqVbJk6TtMAriCdf",
  "key26": "5tAAFuaKwqGZpVYvkKkjheHvu5hP36aWvZTrDHEJV8yo6tnShSWAa4VACGdjJJ3Ui64ss6VKM9geTvfo4F18NN2Y",
  "key27": "2bgaVeufGUaZ3bN4jstd5eubB6QpbWgZe1mMNLPmGnKBpNW8RKViQx6znh6ULjvtaufxjPFRB6aVL1Qa7qsK8GTU",
  "key28": "5dU144LAFaM2SA8pLw1jatZbDFtZVYD1QTYBLo1G2dRCEqwA76YbQShx5NqDeVuqbGbGgex8ihV7bN9RFyfNQab2",
  "key29": "dBbUTCj9z7MBLfvuJsmNWq3uG3j9xKCqaNqxZWgbmAApos62fAPHbioZ9C5YHj623FqwwkSHXT2XrFca8iUdCPw",
  "key30": "5mZKbdRM49tjpAVt6bNuYgYTHNmaEjZF8YMvK3YT1ECULQBY48jUxN3eZqNQwGWzTj4farwpBg3C2u5gJGZF5kj9",
  "key31": "2aCqTvJgBMQFcoL6cRc2FfqgAFruzRJteMpg36ufzuiZpshMuDVLt2An31p1hGq3vcTKC53qXKDzmhzNQ4bEV2Am",
  "key32": "5Re6vDGwoAjGD9fzEu8HCusNibPLcurCNGELAdHGNe2WsWyrwxkh1pTwnwF57Ft2orXHXa8yVun2ds2rGTAfPB4m",
  "key33": "1tRAyjWH3z32wxRTbSWJCSVm7oKc21mWuTEHy4zLHdtpicJKP24PZgrrju1in19iwsLUtJXobHNA82YpTZNcEzc",
  "key34": "27mzZ73WoRsMpwiHwoHeA9kAq6XumTmkXRnFFJnszjpfwRKzrTztAcJiCs8uxr5doxeBRqWxKr9pmzYRoRxm2RqV",
  "key35": "3rFD3CQiSbPGKqVjtQ5intv8E3RMtzKuax7uu7pAxERXKDYDGwxQevb6dVvdrWBoixN7wPbnLLuTSsnwzcmfwS9B",
  "key36": "httCrvoUFFnZDmLR9rWMbCBxhhzo1vxkD2FycDh4LyZSnoCXeP7oktz3VfAho6S5ms1JjGovJu9ZdQZmNTfrmb8",
  "key37": "2verGYb8S9s8f3JtQUauqYFhUD8wW9pkxZgjemjvebF6nbXS6vxjb5nx9o1M2YC4sXAHPRVHV1nbdiHWLbsy2Mpm",
  "key38": "5nAXCscPBKx7HsNmTWyHLsZ4KSJcugLHUPBFKuNAEcik48YscPuoFks6XjUy8ms2JD8f8sK19RQ4ess3P8K5oS4b",
  "key39": "65dsHbsXu2YMRexKCkciuRKgErirKVLEPPaT5i7133pkeS37hSw2opM978r8zE5mzcSTb3MY61tM9uJ3KkG2wnky",
  "key40": "3E999UoSp2jNwVne6p8Qp4ykidvq4iGeVz7zqXqYYgcuvZNQ2KBB6vwAhp238zP1To9xpYjgHFyrbqHYbfNEUb8g",
  "key41": "3WKMV8abrAdtrP3kEKr1m9htTjxQ2LW5EKtvLmibqKZ8W4haf1Sv9bJL1RYxutYhg21oYeyUzGohzgjVgzib9AxG",
  "key42": "54W8EYo5vnBeUz7YMrUUhX1DKDezsD6cJuFDPj6sdkABRiiukfmsw3o5VA3h1mDR3TL3fu9SMZNUfUsLwiZc5NmT"
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
