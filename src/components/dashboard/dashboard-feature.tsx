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
    "5CCtdoE7vXqzYCDR8yyTYLHXYhwBM78osVRJZQjm7pQFKn3jexqUCJwsNd9zUEi719YuAUA6ZFvU9RZSHekNDdgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tcZVapi9b3kw3oVRoV3bXmUKiHDXqZv9aQUr5jAEEZaSLuLp4mWF7X2df2wG6ozRhV4ANmgyGVTWqaB2tAj5HkK",
  "key1": "4y4Q6psQbvGSFcsf1VNhThDKd8e1J1wvkysFGNpC4rxqtcGN9hwx4WaCv27gE9JG8sWSxpzeBSrwo4FTqYaDiB3q",
  "key2": "2Trh8MTQjWrW7sMYcZJZ1ogaeehkYRVzxz1hzksEWeYewdHTSgcKBHxXZynxWDipnMCJfqC6eSRgKe5AAR5sTFEQ",
  "key3": "4PJ8w6BfiEkjgWpEYnyduRafJJNRjxS2fkaG4Z5u9XZ17HjWTKUoeJQzvKyzQay9KZ5pGKczNbJSpxGmpNL8upay",
  "key4": "5ybsi48G9fPPxBUvgboM42QjP7eHpx9rw94YhrJY3MMxZdeNJXEDQNYjBHM18f7px7yTBcsyJbHPcXLyA5NWsVf8",
  "key5": "2ba9XpdRXFzE19K1Cte9oEZmcXvug1ho25cqfSigGhNtTrh1WgKHTuXwV6253XA5L7Cn9dgoMcv5Nqnou3JHVatq",
  "key6": "4h7SWhXUzxS1yqibgdcuodwKYL4pKCQRVCfNZ2rD8uke18zH3y8HaDn8Sa5pcjBgPZNsKWqkQDZ5by5ciVBpsZ1g",
  "key7": "3jkva2HwAPRHmVEMd51xCgrD5Ya794iQPP7s2JCkykD3adq7hqDJYQkxKZKh4cPQHB3JquVDTGt6G5C9qx133kAr",
  "key8": "2G5UT8r3Fa9nLeMnTtg3nNn249ZmeiXDwvSpncbwNc9EvPhjBk5scbWz2mFbGypVKDkfzE35SegmP9vK2wuqTcju",
  "key9": "4hCKMPyu6bEQtyjsCCdRdB38F7fqHxoL3MPuSWjheUAoZt7RGmR2BaJevs7KRv7ATCLfvXb4RjMaGC1EGGdAa8yw",
  "key10": "3DuEnaUYdxozV549Ea8JNmZxmYsuzTjWEmC9EcWjFGbARtTUhQPkd5NWeDRbzx5ywD2ZXJdk3ji9CHVZE5fGDXtA",
  "key11": "4P7nZdanrcmUK3yPvkEJmbeH9hqe6zZti7QD3P2CgNaAg42LSjTB6sN1GGaJJjFnc7HMhHMeWtrAvMzBLAbf1WMd",
  "key12": "3rinKKG2DDPtqHVPJt2VkRFGMgRK4LR65usR9noWGxyYM2Tgt4PGMbQg9L2NzwEWtzupAevv19ZsdSPaz8gPLqU7",
  "key13": "4MaX3LAuPHqnicReNPhu3ot6wrLz5E89JM5L4jhL5iSk6FpeHqE1hZ17RYAJcAo44npvBnJHjQj3cMBsxXTT4mnM",
  "key14": "5HpCFc7gbszRabGhErktFoHLeva9o1sybweDUw3HRaNeXRckmfc4eyjDKR6y1YFrCa9yQLj1iNmKDFfMzrMovzo3",
  "key15": "5MnMReSD49c862EGgkAsMRGkKLaKk6NaMijf3U4ZiJsiWnmXZRnFY7Aq1y9U8RdcJSEiHJfLCLHkNoh35Wd4fdmP",
  "key16": "4a5cX2efaqP3qhwJoVDfC8UvWQrkp1fyaww5tqKq8ufzZtvSfsXqEYSvC9C3oukTWPfUrX6FkAD7P1DSz8JFdcFd",
  "key17": "G7kQfr1DnW92JvfXB31JRLDmmSs53KyxyKk8GveeNMVKji7HburN6LRdQeCVHY3ynsqshLXau53HttZ7oTPKV5N",
  "key18": "2TGh8kEuToAbphBLyDhnAA5JzwYxrVJGMXDCXNLgeyxGSus6F3TraSVDmk8Z7H9adMrTnM47nfVT9Vrvoqmk98Kc",
  "key19": "3kRdHAMyhzZvC56YUy8dajSSjPb6BenFSufYzryD5bHc7bNnRx3uArqjPzdJ2G1ip4BmfWRYWZeK95xhqPBQeBM4",
  "key20": "5U5J5oSDa9mH2NRiBRGtvMg4U26FrCyQmej8349cHKy5AyEFpkAoiMb99T7z4TMRSKFTcp2SMKcao6HEMMhckzsN",
  "key21": "4XbWxcFuLqHZHye1DU1HfXXjGrStGofRWgzMz39Ahve6P5FAffchdRZ4s2H1Dq5JcVQakrMzFM3MW5y3teuMS8Su",
  "key22": "4n522FXnX2WwaE4Ey3qCiBwMuxvyTCX6VN2frbBuM4ppPDoPoF8rUMLqPxa7Uy6pzaFU5st4HkfW4zeaUgmLP6fm",
  "key23": "24EoFNj6dmTgVjN7NMghD3EYrjZHJMJbMnphdKU3DPyYrymTQzH6pWEDD9tY1GF7b72w3QW4QY9VwKpq74Sk4DmL",
  "key24": "3GF7mb8PzJu6ioDNKirjcXvveBGW9sNhz36WEFE3K5gzxUTKp7wkZ6SnMsYVSdGBfmrQmeVL5bjHyVirxtxxcAh6",
  "key25": "5xzntBDxhGZHbJnKVaVecreidmaZ4bCWrsYFw3KhzcCf9ern68sCWRkfthSwX8qDQzeMRqqcwzVmvz4L2SCxfBSH",
  "key26": "52vQncVskHa6nWsfQhV3WeBRghz8H9ucCe5GKgiB1JgJhC8TZ5PJgAusA69AUd9RGuRXC4gKb1nJYnUdx36pTo5L",
  "key27": "Fgmttxcqaht1JMMfsv6wryFUTCPBkPmSPHfDa5Pd4hjaGX2PmFAVqx3hjCmtfJzKrApvFFGY9gGWLe6pLcacgFH"
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
