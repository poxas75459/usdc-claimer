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
    "5MSqcWUgqL3JDsMci9kNoqyjRjXwxpg9BSDJYNTb7EXy52qju32eH6xa5XJUudhefLquonDkyQiww4TScG88T7zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ai5zDnDMsfWQtDJrRPxPRdo27TnfusyZsbmYhd1JxFP3yTVzLQi9bdHReQMhn7ECXvLGY6qhoM6vPHsch7jweTV",
  "key1": "57LbQuQZi3LfcvDNH8UfA2RZ5uPLyM5SUe3FeL1rgN86KhybKYkW9xYqJRNq5EdDAsiHA46vB4JXodB8DoptNjyS",
  "key2": "51Ym51JmrFYWpt2xa8egTiC9HVETwYhBPviDrvB585HaLbtmbK7kWAnwxWpVZgbGHfqvy8e5PAB9RidscvRhQLnF",
  "key3": "sT1HTWjUUTsEkGgQdTs3sP9qrHGCPz3iGsnKBpyrbNLFtv551cvrLQGHbVzx32QheAUzHa8GvHxZAvy579q64LX",
  "key4": "f4vZV7RZpfJjsJKnavDD462jsQvWUaeSGE59vHc4d5bBtj6JswSWiH8c4NsKSyiMcEhCxZB6ma4GpQDDLjvDb4x",
  "key5": "2DAzfGwzhkvsV4as1EMQpvvLN8VRrT5PdWW478TypoBh4drBbSavvnqEHCmPzVNUXuC71riyr2qYYTm9iGxsDWEb",
  "key6": "5Nsboz32hLZVASaKJJsvG6khHZvyyzC8FX8YQQVzg6Djbk9CgifdquACo51gYxCUnRZWGzy7YCSjN4eVKe3GuNWr",
  "key7": "4KpehkUouDUiK8KkXkoATEGz4xYVRVkvMWvVH1p9KkT2jWF6WuurVGVf6oCBnMX5CpWB14VzvkLqQJa9ScdV2Fms",
  "key8": "3kUFTkuj9jTTErgsSjdcq74mDvgx8uT4jXUzYhBLGkVWJy3KGaf4zALLV4ZJBxspRj5U2vJTgFpagy6UQYTDaBkD",
  "key9": "34im8vC8anGBa7Lhm2F2WGajU5zVPEqiMrkThbDLEqVq1LudwnoHipHLacNyRLFk3Yk45hSJko3YJMcCp6ktweqW",
  "key10": "3iojW4DhLxaJvntByt9KH3G4T5WFwBttfWJgmtvQM5eUVYDz3JHvo6Vt39EDHhC75i1LyvJg55XdB7bnfZR6xtj2",
  "key11": "2EWz6z9fxuoK1ZPtr2y8Eaa6sjJxyWB9ubab9f1fC8yL6XcRyeh7rwYjRfYnmHbbSuEdYeZijg3J2GLwtVjJE1e9",
  "key12": "23EBX7oRZc7eyw1857U64GwGXNsdbWjTa45YD5k5QuYvFeqCjBLiBhrXN2QrZjhqAAWTUSg1cezCFNRqR1rm8zhg",
  "key13": "62qqRxv9BNhvxqJvPf2eESqbQ8KVX3yqWn76qCu6EaQu7meL94xRRzVAvCuD3ovjF6nLc4GZRT779ba3EVXnDE2e",
  "key14": "2XiEVHqMnFx8ztbh5nhCJwRs5t8xnJ1oXDeoaPd5phYEdkvWVUzDz6QZ7vVwjp83rYDJYaJK4PUeKCjhqGi7MJ1",
  "key15": "2dM4KT329j7tzikPmdPpeoepM3U5e7JYkzJ1vyPbMxcSZUKPFnhaNqTuf53R7WYMTE3TyModGqoBvWjGvMjJfZnL",
  "key16": "56UQ7kKP7eUd1zfTVjbWeqQobTisLBpLiuXH7ASr1tKZUskmz9pH3qQjGn1TyCjVE52767C1mvPMpq9sdqwpky4g",
  "key17": "6325SCEpz8qT7BDhoNRDQ3qU9JkPMuUynSzuUPnLEfGqdTdEzpkLFNqvsqegjHLn7mUFAdxKz7F9qH7y1VqBe5W",
  "key18": "488eqBGYVnpZepKNH57KNCWURNd9WFH5YJ5734HqAHidJQj38foYgGELirxVQXvDHCKQbLVRrFeGZNrYauutXj1J",
  "key19": "5kuqfMWJkiy6ce4jJkfaR1Q49mW6nzKsvZrrTpnVzMaJyjMiAAnjTT1sGpPhzg8PxGnFchTA2QWf6Q4tK2aAXuxg",
  "key20": "5VkHcrE5ESpXX2QHB4Eqf3kjZedrBtAj3JHgwLnmZzKNT1e7wuxp8mTaXyFHMLrZ6D1em87XLTNEcoYfpwJe7aCQ",
  "key21": "2TYUc7BX8ym9kAY7pgarMw3YuEpTPtP9Hawbv6WoDqGr6w4mK3BYUXAiXgdMLhV3HwhVgy14tErrMDM18fcAwbaT",
  "key22": "3tGcxAeJz44gY41EDhsi6HDtcFYARiaWKEurUv5Emr1dSas8JtVWTfJH8YBjqegF8jjUZAAvdcaw6QXPFPnivDVQ",
  "key23": "2Awt4fRAbKbyjwwSNR6taG8HCniNNtk6MFRhewtPFx4CuEpvAJfpBLKjP2GnGZtD7Z9KtaLsRBLAT3wNQRZCx96j",
  "key24": "3XTKbxXk6iVuHULvuGBgfZAMLMUwtytbPdWhinpsJjiVTT5AbB9bBjk9By5kB6Mp5K3em1a3qQmeTUu2YUJWQDXn",
  "key25": "oghi3GbEvHy23KqpWr14eJKAQt3uZHkwF4tLqHusDARxb1PPfMVvhpFWmK5v75CaRtDCfyVTNjk1VuyeiePcPkh",
  "key26": "2GGWXjHoGfTKnHC9yE3fu6vVqh5EGoU5rSLgWmJh7XEpEAUzAZG1RGJ8fTgctUxmZiw6eoXhBkFTxBZX5JS135Ae",
  "key27": "4gasno4axMFLwo39sSpURKShgtkbfPknWaaaCtQfsxk13BDYxz7PAva3hnStVJ5Sm4q6BPrtyBweXQsFAXrRq2j7",
  "key28": "324SGcSvDvr8q8EPp5VH4VLYK8tqfBusKJ2FaTEqsQRS5yGTzXQou9dkwaBbJzAjJqNRSsjYsdhk7WfYZMMyZeWq",
  "key29": "2zTTyvwDTbo6Hq3svFwKVQxDg3EropEqCFm5zUJ7tCqtA9ZDxcovFzW2bNFgRYkSMJKzmsV9sZBQFYEhdFajxhCy",
  "key30": "Pz65uidSbzZoBFxFLFFmxwXTu31fMo5GaxuuwbrzpkM4A1yi8ZVVxoyRf3apkibMbtbsVgi5XtK7hrFczkrZmT8",
  "key31": "3rk4g2oJ2rwcxMVKGnGvsC34AZRFgXd8YPTfRYmcZaMZpLroapfQQnN1kZJ3r2b2D6hTtpoaYF4bB64QFWsF2aS8",
  "key32": "RNy4AVkLdbF5PFbMENcFDK4aoAbdqxfnm1SbcvN5RpGrv5Vd6fMK4jUuJHC9w5H3rFph3JXVmNKp3KdBC33fU4T",
  "key33": "4bzq6yWPYRNfrUsn2XM38JdZ4KUYLxBmZV4Rkz5DXvaWmL2t3H7MvhtaUnLLjy3khrmVueA5qAvQPZpHffp5WQvp",
  "key34": "2ah63moGqh4onfcm2FPc5RYjkhzctTpxsYuqzY7yxaJWxkEHj6Vr1XJfjqmTeiMZGvJyYUXhA2PTBKyTR7TF3Gxw",
  "key35": "wVv44tZ5WEzaYRtgJbWuqn6ei9hJjdEL8ETXJ281LXdnka9QPvPAcpXqeEKBVMTRkUdRMF9z9ZmGuB8XUjx9oPS",
  "key36": "5UPCBPyQyCc158Te1GbPNxmNPfcpT5d4EV9xvrPFjn1uX8GgR62ZJng8zmCR1MxdkHqDoNRhdR55BU9HzzaRHF6A",
  "key37": "94rRCYvmopeyFePN4SVHxoMHanmJCT8iYKxGvFdzmhBubnargKmvok1Dze3wYJK7srgmHajqYnirCg1bexbyx1q",
  "key38": "4A5CEMuK9URuoXx23pgyQTy2JvT78sWGkSRDTghKxH7ca5g5NFaBL7u88ftdRWad733gj5iZe3LPu5E3jgA7Cqah",
  "key39": "4zp4BUA4ojwDoAWzFnBKRjJ1D8ZLi7Vzf1LsRn24WLFrnpgNz5Hd3tZAummS5Sjq1Wq6UgQnyzA1RFZNwVaXy1bn",
  "key40": "43VXQUZGkkagaF4cXGZSRSqkXf5w2j9Zq7NbvBCvX49zBv8bx8imTSqqa77fNb8jP53kuvk16aRMQxSdyKuy68JA",
  "key41": "3rpg7SqEPRQogaQH4KHRaPbhyFsypvVZxyCwqpXqSoaLreYCBk8qBTteJ2x2t8N7b74AebAAH6GnM5kkuiE4VsPZ",
  "key42": "HcugFhNQ24NTqeRYpmLkdL794r53xGDPRDgjsPChkW3haWtW5kBfUDGGDeRNHHDUoNrtVtJ7qZs8rS5NDZ1nqnb",
  "key43": "41ggWkimWocxD5L26G8wG9R4d2VWaCd18jdFEygm4Ng52n7CHnnP8R5jaRLGb1sunZyojwLSHxvpQA42s5H4Utoh",
  "key44": "4CgeZShkkfocz2xxt4oebqt9YAeb827jNTk86JzToboEURTRJeMKc2gPZiwhzJSw7EopCtjF5soLD8AH3Z9EuFL",
  "key45": "2KvihBQjq2SeMqqZ9dEHffJU44p7Ghn2gxzYcUYGSYkzQiZmKFMSrp1ds4CTMKnaNRKxUTYmfcrxcggDpAtvgUpi",
  "key46": "3abaSqw1n4SmxhfnTrFqnJ1wsJtKNNg6DwDbkZuULdCH5wKUdusHz3morRz2n6Jp4njQ8RgAsbtQLzd2RUeSboR3"
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
