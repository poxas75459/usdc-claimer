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
    "P1nRpckEWPpKRHwUZSErLVQapPzY4LJfP6rizC8fB16J7Ct65gV8QN1WJzAa3LpBMpyanQsAYko2gq34Ah4Xdto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQZGgKtw9UsTq1jn4t713RecLojJ9HfgAtxyDYGJgrN8NGQisk3nn9UMcFCMYDNdJZTaADgfp56t46Ysnm7x4wM",
  "key1": "4YPaXTQ26QT4bXBJJahW9wZARh34Bj3yiLeDdopci9L4HogVSHch1GDpUeZPt97dLaQewf9MKKeNNNxGWtLxGb1t",
  "key2": "667VKjbSwb2sKAhcY8RQg482cmpkRNimwY7Pdw3BnTYTC92E4S6GEbJU5A24wCCeW6vQDizf3nws2jYmFV6au4jn",
  "key3": "2MLmhmbpaMF8Ych5VQUTooWDsKMiQUaZNYgKAZ9RhvR2UYmwur1y67hgWAtiJTzCq3dnyPNGLLau4RQPxQNzGPcF",
  "key4": "57M6ceStPzadH5vQZcvyRyLGGKqCzSujxNLkgkPVoErkjWNwLmjmxwmKj5GuQtFhtNg5PMhKDdjYwmVyeasodBPK",
  "key5": "4WVMqshBwuT8HHcsTGbP438rSdPQVaJJN9T7WphmRgUbuZ6EpmUsoxgeDH6fDJbG52N9TtTvwQ6am9hueU9TLfsm",
  "key6": "4QYjycxZojHwaekfoHfxyDouDwwqJaqaxmjSqsKDuk7kKhXMDefDqBGtKdWsEhLPEXXaZS8qVgx1r8GMLZ4bT3gV",
  "key7": "2dFbC4YtUBNi9XiokKRDehJi6gPS9kHWy7aG5pt3JzQ8wuqr73UyJYMLoo5EKypUNn4mpNf1chQkZFxiG4wCtjVf",
  "key8": "4rqWBCVUy3D7qCQortgSErhquwRiUsxmXbpMNWKmFhRuxYujmABCShZenWbRibfGMMR5S5b19hGYY7ZAAe1mNTJY",
  "key9": "4uLMizBNAHUrXutuWzJnD5VDfqwvcab4hwk4Bu3da6L1Q7MMbQaoGQ4FRHFPkqhTaqMxxJn93fNwYXS6NL2sbi8e",
  "key10": "PoLdDAnC84j7HhLWmMqWGexsxh9w5NzQFGJCZEk8CMNKwJdhjAYrMkobB4PsnQYf7k6EDWuY1bd4Q1qpLVLjPRE",
  "key11": "5fEzk6CKt4oa4QRftPjqJBBHZsxYytB7j2QQGwTehTM9wtzAs4D6WHDsdYNLh5g9gZAmpdKDzuzZVGa6VXJPerDj",
  "key12": "675q2AyXDCxkYg7JRNcYAv3GLKTcS6FMbT4TY51DdxVHAaj6wZSr8r1ECLcChqwhxBPmkaMJCpUJogjpRQrVVkUp",
  "key13": "2TuYtM2PPVg2TBs1GUYzb4AkteMrFWPz9ETm4PZPJdkFNvvJUnR2qRKZsWSYJwk2CSwyNfbeNUvoNByHkSy7YMbb",
  "key14": "4DjvkDz7sLhiDcDf3hegWV28X2GEWtSC3t9PcU6xSnG4i3YejLEciewY12HT6b5M363YsPrKifozxc4eYQyJqMeA",
  "key15": "TAiJNGgNwKBEBDCYQGqM64hoUCRZCZJngw9CDv17YydGRPnmWynzNG2nQYJ7dQQc3mqzG72aQq5XfXATmigNKpb",
  "key16": "UrXDSDk8z4gfwJw2NHShhPVwG8BTHdBomFBAgY6LVCevXG6Ke8TiPsXe3eAXq9YNYxcR7rDqMo5vMZrQujboRcX",
  "key17": "QBeLWCGtwY8cXnbvgGLhPPKkLNiHR6NthZg6Qu8xPzDi2eTwDVo7bs1c4vzH3yW6o8ra663KyBEvDvqxo3Brof1",
  "key18": "5ucTeToEaWjA8rvbKGTDdTQHSKdJAzgvZ8o3H8Kc2Vcb13JZAvB3xt7yMYsgtqE7nxsALH9XaySPGPNaj8cSTueg",
  "key19": "2xz4YjkjXP83xU8VGqwzhySfSjegW3aJUDmQK3LXkp8kT7Q8FkjHYJyv5PweqYLn6Dgiau1EPiLzYubUkbvDBws9",
  "key20": "2CLvrxewQt5jCNC5Z5WSdqyBpgVKn2aF7tEQkHttTdcQJ4ZEt2uzDZ9bxa2RjEH28eDMe3nisv6pL9q79eBGuDPZ",
  "key21": "5GXxkiY1M3GTJj5WmCsCmiSoN6ozPPdnDrvokmZqzS24mLyMMfixsZ3Pwey7fqjNaCYNFURZRBSz7d1dfBrpJgg4",
  "key22": "5r1JjHHcPU6oABEdrnKYWTg9XCAks7jNqYS3BgYz5GkNTURq79aNFWtgYnNyU3h8WbczXQSdc4buWTpmZNoiaE2W",
  "key23": "2qGsDpcBUBo6tjL2orTMDZtkHhGzdptYoFHEuAm8waTgPEqKSsLLGvX1JCoJjMjmHNFBS6s4Gq5g5n8uoJrHyn7m",
  "key24": "NBPgZ56gWJvGQJfcQnpw9XRw5hz1wtxjKg7xPiGnX6mdN8FwCEThFXA7bUSS7SaXLhqZi2rRT6nJd1Je5CTgipR",
  "key25": "3Q1zLn6KiN68xadEGLzvhm17xFttwEiA2yUZrDa1AayaQZBdcvZb1jSsiF5jzGyMoCAa3ZpsgMEpWz1696JoHBGp",
  "key26": "4JwBteHByH9DFEtBGD6FXQfi1FnLWwZmb69BVKZWfzF75P6fSheYtoPPvqE6titqJdEwXDQYKHmrBWaxecYtKFsd",
  "key27": "5RqxNBio1FFjtixKUVyV5UNpNCw9kWaEKqqw7Kw6HaDyvSuJHTJtfzGcawnZ4JZira7ZGSDajQ1P6fm9QVMRUkXD",
  "key28": "e2bNL2rpwt6UdgpQVBj97JrkdNRdmbSjLi799vekCirnH8TWmymBGn6FTh4Nu8tUsAYpuxjnc88XujLjrtpUSnv",
  "key29": "Enfna6C71L94E7XM2xR6pxNeftE6auPvL3FiqknWvs3epeWH2LXkbWqQcCJaBANg1mPDN2Fge9pcyPu5Dye1utG",
  "key30": "231o4gGZkB3pZsSLyvjgEJAsACz713oethAqJdnLj6MFDvAaiWSexzwJZBqq8moTgsFSCyAzYg4mZzC3LJTjBoxX",
  "key31": "4qQMcX4t3dKot4ifHd1fLfhNkT4cbBEdm7aaSSfWfvRvR3YMVLtUSPHJdngsWKRyaW1neSTNbNwj2Y568RdzS9F3",
  "key32": "46KTV2GCHTMuWSp9kLGn8p6KQysrD3x2dt64f2op6NCEuTWmRQSqgzQERE1eSzQmdGp5gmDE93MnpUKN9ZBLyyPe",
  "key33": "N9EniunErgpxhpe8MiK39kN3Qfox5SntNmYCjiAnxUjrQn5Ky5RsUQ94jkuo3DpG1bZeggJS3LcSSDrwJ711KBT",
  "key34": "DTu9vaJer3CAWrxHyN1d2nw1ZEryvRbiP16XBTGXAiwjVb6CaCnuuQv9pUgqwe34jQSsPWye394K32mECD3SSXA",
  "key35": "31KgdKnYauTW3pmiCoChxj3RzDdHedkaXMSKKXJ36a1vpgbip6wbkVhd6xAjCApxakVdufxKFYfpQZDm8y2C3Acr",
  "key36": "2XKLCRMBdJhzhKcUBNWiFt7MzMAT9jKND922UUZ5dWnFqq2PzaTXCuEourvN8tcZznbjxhxrR2itcqSEvazo2scT",
  "key37": "2XerymKBhZNgGQxpcWmzQoxmYRpKcuxAzRiMcGPzMf36vxkvXaWENTXNgWebiK4VBe5qAAQQGFguJLm67sJafuyc",
  "key38": "3NXMb6tC54X9meB4JSKzga8HRmDZ1JKgnfdaT1gP8CLzXDBhjjNFmReaeMrhYPHxmztHYUVzgAnz7GzCMuUoRgEZ",
  "key39": "4BRPx4ovw83b5HGfLq1BYv8xBVZTEnprj74eSY1EumYYfhH7AXi13emhUtPq5YBejeVCDccj6FBhCUrM2r2Xr6T9",
  "key40": "uSgQQvKwSUYdHWxYWJEjpMtrBBWtHWhoPgo75pyVPK5U5FjQknBiQkQpy83jDi4JHURLuwqsgACS6G9exQtQcm4"
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
