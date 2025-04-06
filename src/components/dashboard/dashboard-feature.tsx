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
    "5NmdDkWexiTpE6ZxW48zFZxBZqGQ91WZDa5AczxngsgXWrq7VudtcNC2UpuXpQpQLY1q9a5ZfWT7fhaZTvWYkgwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkMgQrh857a38iED83QG9ixD9a9sLnRjzbZzApx8qNz8z1svNswpgNy6SN4YYY6LydXpPu8g1v7ESVBeSeq1nTY",
  "key1": "2r9gyzJbVwabweJkciGiURfnj2xhSVdgvYCxJHhXAdpbap319w6iLyTCrHVnmvvTapg2p1tNtRHx2hm7pTRbNWSp",
  "key2": "5SvmzVPV56ws7yxWBow4ZTXrsDRuRdaQEi3xn5xjmcHNA9ZrjhzTRwx3e3A81BGUeUPn6iNuSnv46yhywSAiv4Mg",
  "key3": "3xM1CM4rxd85kyqPEHD8qcAa67tFyrCNDwabaAfnGdbdvbPQa13ueaXhB9eWC41N115C47SnrMavvyymDXvAEdXQ",
  "key4": "3ca7MaeXSaPeMX1U66T8jQQHK38H5mg1Kx9av3E4DHqM9vof988TgPPYkSFxdBdLmu9zH8YrE1YfRVJhk68U1MZo",
  "key5": "4rXyNCB5MHNH2GAkERWshffhq6uLYcHo7eJvmZZdxMdefkwGG2ZJ9xTSTkUZR3iTuAXNjYCauv2j6gqiaZ863wD8",
  "key6": "L1aXQLoA7oSfRa2pCiVRuhZjfvAAgG2abZh2ub4iPof5sKBrQCR7beq8p6vUyG2kLooPzd5DHTiXVhmmqkZZsRQ",
  "key7": "Auoj7CY8YRkKnyBR6yknsaVA5h7kwx6GJxg2JbxDgMNX3F566Qd2WvJn1p9XgwFYceC351sVR8En3ojqs27dQkf",
  "key8": "5TWzGtNpKcDDGceGm76YNi8q49QFrKH21tTYg5hvT6cYf7FPLKZ6FBu3yfHUaVvykiesABF7g4vqNbgw2PNHAEhx",
  "key9": "2ivXCA7amMPR7iaFsTp8b94HgjSYPWcaY9vCfRHvwx5stn7Anf2dDrwLiqcvSZvj1ZwgHuu8w5XhyYxHpLGktzkb",
  "key10": "2FA7CsiJnGfzp6bp5gQmCx9Mvkaa5BphVG5bCMbjcBcixPuAduLaQCtpF9VcwpwtMEpRcycSW4YBZ4caB4nXP7nA",
  "key11": "5GX6kfrXZxC7ZWU5vs3i4BeYmERFrxUewddjNkQ7KypCJsspeAWf8KHzAk8aZ1UfQLv2mRfDCb9UkE9ZyovQDv4a",
  "key12": "28ui5MV4GJd3vn16cecLjDpy7QoPsszAfe35gF72Jhrao3erXMzUqXAZEivVnbjhPGjuXRtmDJaGWBiMe8YA99sB",
  "key13": "5fXWwDzwKHiFcTNhCY34XBHavZLLDw2dJSDtqLzmHJjYBAspL8g7fGZb73q3UaWGYyqtLGPB25wGt9TK85y6Hvk3",
  "key14": "4Lg6YY9KJrkxrmNkkbDN3JdJqbJo5UAWBpJVpP4w9ZQ6ZgTeCe2K7EMGkKyyWAjSXzbayk4zA9XedWVh1WiTKBsu",
  "key15": "479Pbd9HfPMWFNGkVfoupxxuUe3TPmLWq4U3U66MuG17kAA4E7thzK2HURNcCexr52KSvx1zFFiEiqUUfXZafASK",
  "key16": "5PGR2JXHWUX3x2UVvG4CQKqPzctQtReRLDWc7Np7tC8dayb9TaGYkmbf2L4GCknFkdeu4pnbCq9UQHKhc9L9bMXB",
  "key17": "5G39UxxNyop3WGYobvXKQmZ5LyUNi5VyQ2uswtGaBK8Zjd7jyyDSsS4dpxJHVsyn3jCjgoL6tdLnDBncrJQbM7cD",
  "key18": "3x1PYonrdekZHD6bVMHyLCEBPFG4K5rtKemWZ1pX8hShCczWPSpNtY1jj5WzDMG5sd3PzvuTLhCoAzrrELNNJWWX",
  "key19": "5sdAxHvfy2Rj6M5xrajVZ8WBYyXtVvcv8EmiB4KSApDuzE6bfAHtinkzTRDYcHAK9bH9cf4QNTQFQ3Ko9uv5zjvc",
  "key20": "2KBP3UKFPT5X5yVxhkSWKdM8ULtZUwNkN8VedD6yxk77724qPFxJk8Re9sgZn9MJBeVSxrGeHKAkqvPvo5kHkgfF",
  "key21": "osXfDqfLrJFDgZ2uodWyPXyJtthnHfa2n9ctzgM3q66Cn4v64pH2VEX7JqWMYB2XCyUbKK8jbfn5hpvSkD7GgK2",
  "key22": "4KoyMdiSL2tgHinZcpv7koELjPt5rwtoU9DxWYAYn1aV5EyXUv12Nm4xLy5tbWt6bX6ykm5MhgBPxMgMeg6kcp9v",
  "key23": "2giWC4ommU5V3RPbAS3XAzNxvYN6J9skhnCtDvwtr5zJXJi9qH6xxFLZ9HgCTTDGJNt1rSGcr4iEdXiA2BbZDoHm",
  "key24": "329ALQDZqzzmm2a3gK837Ewmsb4QhXApWahLk58MWwWui3dNVMXKzKFMfeLYcEWcfjDNsu2iMzvFYvSAfVxenFQg",
  "key25": "45qgotgG9EhmUdsfvwC2m8Jo9AHpqmgQx1DgCHmZ4vYqrfHxXBApboRoHbSmxhowCfMQByBK7RNr8qNujM62TodH",
  "key26": "dtVaKExCBbAV6vRayUGNHvhXiwXjuEAFE77RnwoZL7vmmGmfT1pAjTyRrxxCbPQ2Ac8CMjxx5TCeEnBAsQGVK7B",
  "key27": "3o8zYhRYYDo9kqnMeJXoeKsuhuGAWoVmippMCGPmHWPACYFsjxwYbEyV9JCp2CSdbC82JBXmbpm4piq498w7YDN8",
  "key28": "2rTzaRDPZJoxjXKsBWN78XnEBXhPnHQJ9qjcyqeChHkFNpwykHwCVV624jH2gpArMtm9KHrUe3m5E6RJHAd3HfiW",
  "key29": "5KoFNLo4wmt5YQj1zi5BD8Y4H2wvjc2EoEB5C8MWBXysjiUf7Nxtrr1e7nvzw4jabWwBrQdfyF3MXX7RUd3tR9EP",
  "key30": "22AxkJwMehnrRfqRhLNEbij8rYNibmzzmVnGhf2DJATau616sqj5jEKwXKxpyjDmFMvxksdbejugYqcNRQjawz6x",
  "key31": "3LpqAELmENUHSRXJjbnTZkj2mLbXLnP6wGeEwY2zjLwjrdAc5wFzGjv4K2d5LAWMzq7QdDJnuvgqmK4LtZAwioAE",
  "key32": "3nau9wXS4YqkKN8Nb4h8FRp1gwwJfLm6VtQ9g1dFrqLgPotKVSHdbYXr8tgQqkVyYUSv9mz6VAVYLxdmLfyZ9MdQ",
  "key33": "3Rf2bb4LpWPZrSTpXnWrchLLBJNTJ3XRBCRgJ43AdVCRY4xYPYxDtttqm9115tjYgL1p9BUPnEdej7j73UNUy11K",
  "key34": "j7XfAq6QrwWgzgkJp3Z7kriafSwJRhszSPvmMmbh2239PsRfRopto4j21Yk1qHc77bCvq9DwMsSj8m5MHdb3gpc",
  "key35": "KZFfPSrRpV15c4fqRQYSmpJwqAAMS9okd6S42xf5qPAeh1jowJ4xtgWhZoFsEq9FsuJvAY5St9FNboLhzsmV2Jk",
  "key36": "4BxQvUQcZxjwy46DfZ3mG17mCrr5C7zXvjSLc4TTVSbfU5FJpuN65CDfkac1R4aJWij5U6cpuWJBxBSRPse6ThmB",
  "key37": "4NGYruDE6aBPGUZBt6SfkepQkbeddFBypCVvXe5FoxAEQK9kqVMkincZhKwaMMmy5GK7P4GybyDqHb9Jf5rbsDnV",
  "key38": "25JXmBkn1jYeSyz2Tt44A7u5uv9FEsLR23S51xtvxzBjAhqhhgGrdhN86j6aVosDc7YjLnJiZu4Q8aQyaxJHXs3e",
  "key39": "jutYmrJzj8TKdac1fxYoNg3tdrMuRPCzYuhedw3xc78Bb6GWoYka35my3gkXmQcQUkFgE18Jiv9o1Jr1QB3mpM3",
  "key40": "5aWezPwFENTSPJEyyFb5enqfCXHcLkdjzVLK1aStfmyGL5T1wKyy6dGTfPHRrvhSQ5K2uQuMAPinUYpKWbQhsDae",
  "key41": "4oVsXVZ66RGm6u1CoDmG9aKXPggnPKztHYbktPsVEP293Rp73j3NwHGNQ3koDGSYzZCUEdAun4yAr79ZxaW7Fks7"
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
