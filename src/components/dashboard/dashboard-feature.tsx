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
    "3Cr61rNxugobGG82FCEFwtZRiHfXm6S4g4FG9CAvupF2MqodEnz8yCn17UgDjtrvYTeUfWY5p1dH2QRYpMP2eMzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7zpntoq6mqx69HBWHsEuqb5dpDt4K8J6nKvhEnerjkLDNQfX2PD8HzKxzWDTAJDv3Rr6taKKfwKaEoko1jhvh1",
  "key1": "5eWtsXQY9EJNxryXQQ5rE8LzbqcHVDfpi3zVWUs3KvakGDJUpYGWRu9fpbCHg7QNust2Gt4YB4C9NhhpkXtUYQ1t",
  "key2": "3Gu95yvybwKinxkJ7KNn8YFMXA8TXYtPfFzbVmXXfWLPnA1rb9AiPfQaSjuJdzxEBNx8aMKLAFyeJyTErkqzNSF9",
  "key3": "4ZmHSvRQN46EYqULtSnPwp7eWV5XUhedkdsdR8tXADNMxmqUCWmXWz5gyqpcoeYNRtJKzTYEiYaLxVRS8MwJfQZs",
  "key4": "4XxDSACYG1qYfPnf7HFJKdUzTbApcAvVyiVafaGCEvc4b8y5aiHuJrrC17FCmfA8EHj9zAbnt1fHpEqoHoSyURoi",
  "key5": "2hCwMvFqje34Zi3JtqeTFBEYD2MpAjc19C9aQTugPrbUF7g7p8ogbvQoReBCpyWuMUYbcqPkjz1Ttk5wioeK99Hk",
  "key6": "3tE2c1zpxWUgFtxwFSqdhKdakDQLZsd34NUrSo6VkABbq8ZP1rYUjCq3zJ11YmbFzCGj8fstfeAuPX2dbStPv3KL",
  "key7": "5cUJMdDfnpnTdLZfcaRp6jsUo7KVDY5RpMFC4fYofoGi67ayeB7tiBMo9t9z443xzYwtG4i1cSrowqCUTsN65n38",
  "key8": "kcNExNPoGWPKw9prCgZo5HKQfB9PY1HJ5bu42sN2a7c85pGnHLDAt8UEGhD5AfrZq22KwSKuErNqw33qq1D5hbc",
  "key9": "5akGpbDzyRQqj9unMZRs5vEN6ok1viQ5LHawDRMnRYAVSN4LS1ZMYNVe9U5HWL3iAjxpe9cubEwo8QKZrcE7fz8G",
  "key10": "5xgMtu4zD6NTUmMRc9fJnRJo9Y2p7Qv2TwcJqjX5rtT12czXYEqkscdmC8YMAfkQ5inzZQgmsp2CL3iv82JSi7WN",
  "key11": "33nikXEdJRW7NPngznHuTQbuDmyoGb762Bpus7cxoSr2Mdh7hQjFvB2z16RrtEgHwcxk5gwQVXzYVrcinE7L4L8Y",
  "key12": "2aY3LXhFKTzTu2csH1DZsEDADvg4dKQzYBsw45auEj11xzVfYfAoEqcW5EVSoxDwcKjjmsQyhgBsZWGZdGZUJHpZ",
  "key13": "5vf2RwUjDoKvZFoEFqMFpDv6xKjiGiUNteN8YFTkuCr2eVwQNUpQFpYXGyS2AG3wDRDWhjjSW7vj2ZbPVDuGneTU",
  "key14": "5u7Lkgxi85W2DHynrJ7r3MLioxm9fmXdGxs3HgPQk8VazYEem5Z5SgY1WTrHdnVKY5ggAoqpHYRzPXWsDVsqFqoC",
  "key15": "44t69pZsyJV8YZjYMinqgbhUeavfUKQmhS3KEWLZ3VTcvMfeN9G5vwMKkwqdZpNaJrtnGYJyJbhP6u12jw1oXDL",
  "key16": "2wXFG7TA3mJ2nGF1YVHEpMSDW72w6v3HHUv43xnmKCwm5TSJat3xpJCUR29Sm9kb6q1aAg7NyJXcBi52xShmKGdj",
  "key17": "ZKaSGEmwhhgcDYrjeWyjGtHWNumpA3X7BbjnL4pQcULiRXfKhVhfugSm85Yj1qaQfePwtHb2qniphbx7dMNyBSu",
  "key18": "3VxvffawPcoNLdZUwPzzzWjbPMZpw7NBUvqXmsW3sRm78picgBughMFo1GkShosri4GRRwzfwjTftbFxYGB2Ki2B",
  "key19": "4FCdGJe2wjNbMyyWXVMb5fDMpMRdRAhyY39pfZwwFh6BozayL1aGXaWh6qBhsJbMY6kuMuiruLzLa6174A4gQ52n",
  "key20": "4H1tDgzsbhc8zt7eTDKXZJgz64uSvh8E4pC6Sx8BUFhMNckj7BKbEEjbtjq2qwSkpyxxVoizR5ZoGC1NxFqofqYB",
  "key21": "4JUNSXdSjmg6Pj4jPYir2e4YKhC8vLKej46aHGnbVHa8JmeDXGJCNLXR9dJSieH8mXVWLAgiwu648MwFdQFS65QR",
  "key22": "5FRVryDEnE5rUHmA6xzVLwzo5UtXj6jPGsHszYqtbCiVYj2tGgvXa3XX1iMPNg3uuNnugp9EJNdR1U2f6U7GFHew",
  "key23": "4VsbFxQ2RZe61NNfD74ttFpBwRAy3pau1ExRpNpjc8EeG2TR8Qq7ou1DHShF2ESqFDyEKTKbXhshyvVxaAAGruxp",
  "key24": "GAdhmEYKkx3foRR5rqYYe41xMheqg6KMjeNbnSguVXtpzxnn61MTqUsTbo2i32UCTVjE6P3vs4YMPV9aaW75Yg4",
  "key25": "3ASNCyGfqWRHtZxzHW9gedqLz3NinKZvGDksLvqAAboiPVKwmzNxEHbNokhZJuve8xBfmdHST3mqjQyp7aLnbhg5",
  "key26": "2AfTJFSiw5TJKfpGzTHVhi1pwz4zkHQLJHJ7cwZdnXRQr7J2JCEkChzepxB6DNk1qKpDK4SRYV3wbqjoceebgNym",
  "key27": "41f7YMMVid1FgYetoE4DeGg7pd9UU53kimn8hSbug39baToaBMUzAPDcCwRqctexiyGdoW6h56pwkxigTDguGWRM",
  "key28": "5zkeWXmGMPQjYMvNm1S9MBfM3BYd2626B8ewtFLYAAtDYDr914ThxiwPRmyAExQ7rYcnATKQfXyic71Jf8wEmuP4",
  "key29": "4H9nnyrbfJLYPnZNaZhd3HgVbckB9bLdNJR2EHXdgTr7bNBgw98enduQHFHeMGRvVpBLCU4sH7622h7Avj2fqeQX",
  "key30": "63PqpyNrKFFib86E13dz8LjRswPGu6oYcusFVYz3VbyEWBkBN5qP2J9FAyXCK4nJuRrQBTBp9D527wzES4HgSyyL",
  "key31": "5BdLj474y5nLnbxMBw5RXo5wZc2T1mJEKVqWrh3jQVMttQ3z3xwCyZYHxBQUhgZmyqr6U99bAnaJkbhSJPtt1mwM",
  "key32": "3uM2rZkEduEtQY1EB98Z6nNNFgt2UFDPTVHb9rCrVEx8xEz8LMc9Xiqw4e9oPBVixM7Fy922ERC6M4ABfnvFBtrn",
  "key33": "2JEJkhhYsFDBiD66w9hgcgYLEogQYrveio6FviTXudkikYoN63NS25xRGtiAER3QMrgGDh6zZr8B1Yz5BVYYSWz",
  "key34": "2Vbg782XxoSAaz5kHYoQ6X7FGDdhfxLfbxPGwmxqyfWrZQzN5yUX3htein4BFzufEhvR7mRoWvdBEbf7T9vuTuwJ",
  "key35": "3AZccRtVkKpoYvtGP22BjQgsXrfoQzV6q4pcyharcyt7rMRwiP859SfStqt7yHWPeQ1xoKPnxTSsWjREBXXVy8h6",
  "key36": "4BM2T7oRGUyfhGKhxZchABykg83RncBhp8eNdRaQ3aHHm33hzhBerzksfJLxuEo7couf2VoDgDBrEa6erz8dUvWi",
  "key37": "31cxe47LDJj5ZHmgTGHcfdDEzQyr42VqCYRMMNGWA1w7EmV9384V5i6ZNt1ZaTu5K2Ki2HFKE9PqFiuwS1RSaLHn",
  "key38": "4QVFhiE9phXQZShiK3f1vrzX4HNBqPU31NYf4wvcoT6XURZepXP5dH57Xyfe9Kg9yAoPavpT2EFAPs37SdRqCMCY"
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
