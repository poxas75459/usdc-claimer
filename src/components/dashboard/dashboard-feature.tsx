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
    "5XRgfqZXbZRSPdtTLVic8VYe4EYbBYgbEDZYP5KtD5fHciTvQUVCLVPpJxzvC1gNCmkqftgFrdKubaPXXWSsx47K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7vVxE6PhWT2qQnbHgRGuFPSCEwd4gkexw7HuakiCMa3Jzb4G3vFYitEa9rv3BYMyXksJVQJM2HLs1PmgpADX1e",
  "key1": "4PVurCSvvwQca6rU3nW84sqZXns4DAeT24932hD8ZqmZHPRZksVhRbWp96v9pE5VznTi3AFK48uAGi1rYDcvw17C",
  "key2": "zHpDc15SzEfakphWDmRASg9UWjiBLd1dqvNVV3MN5Y9SenP33fnwvziRe9hwVx4UQFW7jUVAC6RvozcbRes2idc",
  "key3": "4hSanes4c9h3YRruvD9KwY64myAUGHuXiASbRbpBDzJbw43JAYkpe8bscuvrCU4RbmgGTthGWhZ7JDmdqgj8qqx7",
  "key4": "5c9h2gv3JYvvYTm7uZzvaeTo1JCFg8FrT35cdembQrSKAB4TD5AyPzkhY91yBQq2GSUXwN5fD5WPGURtQQ8V25xX",
  "key5": "65Kk9XYERfCjdrGSWd3AGaDj7vfxBcBjS9KcgLPNDGvTcsyWC6VqRVWwKd1YdWaQaiJpzBpuHhVWG2mPiAJVWkvZ",
  "key6": "339hQKXNyp68uTmYkXjKwmYao7j2edHAptFJmaDjpWW5CTLg1oiSUfxMmERJSwMfxKT7pY1vSXSMDYJjWib196To",
  "key7": "2addvTguexynAsVhx1gQD6whL2xX1CoLUQqD3h4cHDpSbbEVpeLZMaG3Q7xuHbXaUdv1AFXXasaTfFuyVeTEuzLo",
  "key8": "4N67HYdpc9eiw4hAqPgjTWWAZkiAb47gBEVKbJ9KRKNyGZHsE5CfJfnuREUVG3Xe8gAkxsmg6AqQ3e5DL6jKLP2h",
  "key9": "4nHGWbJsKE6esmEGsEKkuzHXLjMZU4qiCYX2GUELCYXH2pEAP4RHdbJFsYQPuKybquYYyRzh4pTi67oCMRxanRe",
  "key10": "3zLJWqJyzTxCoQwzJ9F4cP7NxEcuFmWvoo61og4EPLDvGXXALf2uWuDvK6tnrcRaBpvu1H5JKqxPFq4EgKyEfWXx",
  "key11": "458rCz5U8aNjEbf69dMoUfZbfDA4PUDoD5vx8C2HfxL9WMjGahfDfQNTagxBDpyB9CvtArtqhy5NTa9ZLSohH3go",
  "key12": "4wzkWQCCkidMJ2KTnBwtth2ve3ZDHqGj2W9yxWtPBwwRuMSedfQGrjgKMiN12nJWu5vdbsSC64MtUT3YNqd9frxc",
  "key13": "2aYZ2VGLWGg4VgJRZHoYkhhAHEnCQx5YgUoz4Xp2mA1kJ3NRRJZBqrF6knLYGXwptbNZuEmSZxHXy7Dc9z4hbZNv",
  "key14": "32maigSFa1XAs5PtUrQC8z84fwXwvmubHtX9vsYYS6utY2aWjS5C7LjJVTmjC9W2EGqSteE6wWK2dkL4NnYxV5Eu",
  "key15": "3cNPMyattkrMpfKerYvrncTrN8GNFuGDdhvfRzUSUL2KqNt9emPKitN6NdPAAwGFQKGsaFpcbeodpZGGBAn7s4Hk",
  "key16": "oHLDfiEztwnymfKWySAeM813ceQNftFs9LVEDEuRmwmHvTNk5msNq49MUgXdQfwraw1REnb3odehHwnyLWMMyrC",
  "key17": "3X86rFk6fMygLsB5A1yYH2cDEhBFbAUxGMMofXWDATkAJzM87AxvnvvkcFyBrrQawgw1dCFyQoXAhvsBax2qZ3G9",
  "key18": "4BevkoEhCHd3HXgrSxBytz7ry9iiVHt8zRMEd6wCNpsoqQvp8HGBjPgs8fQ3YQacK7zoW4VfgLB6PcS6Yaryg4dJ",
  "key19": "2RKdkSsMjUJyqtxrzcRBi2ocdnNbiP6KbxPYLroX54M5GfVZhFt7GPvhqioQBXRRfvKNb7Amre1PSsCqF12Re8cr",
  "key20": "5atGuDdtfn1JhZUxpFqQuWWw4zR61wBfjCm88AQpUpvA5iE8RtPP88BcnFK2hu84DojLqhoFkbFsQ5xbAUf8vcX2",
  "key21": "CFiArZZjMJos8QGuLvDqrA78E5xL6xGEjC8Myoer9AQ6n47T7p9Wzv3rUDEVC6tAyfHBvVrcb3ncN8soFHFpqTx",
  "key22": "2WwX1L3fVrPJ6nMvfdZzzM5hDkoaMG2zTHcoboFeDvUEwNsUPabdaNtVAhqjh9Zd8edZJ5azv86FPQ5DByrpeDM8",
  "key23": "3FvTkyYzXh2jUozvbuGwPmuY1sPLpvADXPcZDTrYY2iJMn761Aoqiq3zpwZxWbtRPJGS9xffD2UtkTZmmwcrWHin",
  "key24": "wbgTNcBwzRteJax39ZHoM4BbUEWSMSYBDYL4JyLaMWVaox7p4j4HqKmCqeLD7AYBTD5Ve11vnmzUcGFX9RumGYv",
  "key25": "4piUmwJ4bYzBjiJHewcXc4WULqeE3SJwW6GkPR8XkyGLpLyvQcZSc5PiuiZEQr6pcVHSdzUshD5Rmtkn6SZS8dtQ",
  "key26": "5LfAxbyRcRaNb1QoVeJQakBxTWJNURiCPjR9FZCCjTEsd3QA19aSWW1r3uSYPGi4Wkpg9kL69T2p5Eyhceccs6zE",
  "key27": "2m9Uo5Ztteh5M1jA91JLQEq4xVkE8iZEfSr8B7mWSYgXMhEa66P6qVLxchG887nTDH1U8xvqFNvgLjeomouVXAMo",
  "key28": "5KKg3KQ42QEoZFNDyvGnqtVdPf7nR4Hq8oi6b5NpKjf132tSWdbjknbnun9bDs46R2LgKitJ3kpeqSoQWhzLS1V8",
  "key29": "uj3PpkVabN6fqMeWa2bvpMLawh7QTbNx8Diq7o1izLEC2aJPdpAA8rSzJHdGqZKA9vfoMHymcS8VYnQ698ouUdP",
  "key30": "3pGPSq2bvGhCW1C7KHo62TMJBTy9PhG45RpVeFxHA8VXftbdVSHMUEuhHmYAnPXq8V7zzywpvnYgYmQ1sgcvj7V6",
  "key31": "3TUP6v3DEprk3X1TaYNfRa5T95wTMKat9mCuZZK2wKeB7PQQupNDK6NPPmngAxUQAcnYGmdCMQKBMSuZCd8eCZUQ",
  "key32": "5b4uWBZSCA8UH7yW1HykT4fbLnzuEz4a3MRWZ8bCQFtWG5w1xbkyKuRswT3yssUM27JSqdD7n7aq895rAx2HhAeQ",
  "key33": "3oqyTVp6E7W5Ve9NVAa2QSTzQ6bMjSEa1WFaFFyhxLGdFqVcSBwj2fLaZRCptev4aZrEBfw3pwDgqEdaZbhgrowb",
  "key34": "3B3yt1kXn56BmjAzp9C9Drte6D6h5CFhTECRsp8zNsBGJEkh8zgT1fL2HZCs3uQUtXr4qBz6V5ZTErSfeP7PzSDm",
  "key35": "3ZmGvrxVpvQvXFLYZqAqfSdQB5HFeHQxQZ2LvyaQrbfB7bhR9z4pc3XWxzjvZFcZ4dkXkbqAQDe2WYg6mFDgL23x",
  "key36": "2pY7Ab6N6WoXMj8Sd2HStRCrkCB4Dz1sLaNf39DJdNZxwgVTkHAf1zejzdoG5NkUuJbnCxQuWmifji8wAE2yKJ1d",
  "key37": "3YZML5Uf3SKzsYRQzUPzxRRiywVYtxMVAwNSK8onmfVar2udFthTA4R1LKTqoAe7fSqV4s4NqQGWTNgUq2a3u4BY",
  "key38": "4TN8FgUHKQrptbhRq5rVJNEy9xTjFvZNvPPzSKt1zoKURLyBTawKgUzvvXxkRKXcnB7fQMxGpX2YvgrM9hrfSHWi",
  "key39": "3mCkN4oY3B8aYpesNKRyBNY6F8VHfmRJNKU7SLsweoFpJAAumQ5UHaQXDjXEiL1TdrDe2e5FapBCsh9LVi5g1gAy"
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
