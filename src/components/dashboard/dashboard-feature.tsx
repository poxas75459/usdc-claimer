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
    "2vUXqUVX2Pj2ChSjFwTTuBo79LX8mRtDt643xhWwGZzoHDRQ2uzZJKcRDs7gLfnLpmqKqxFbZHfBm1pP1ZL2yufo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fmy7wmeMv81dZCwmJUdisDYfi9nyVxN9uXdWf2Y1tEvwbSAsNzeAQCJLoGUyawTYEnEHiP6SFHb1PXfCmeeyHce",
  "key1": "51XeEpcymsNyhfMgpqkX2K4kk6nESPh8mmAELqW7LnkkBN5GTmJcidmXirixQFEQyc1SbXt6Z3wkXCqHajQyAfeA",
  "key2": "4MoofP4ezidnh1d4EEcYPBjZnJtDaF1jfKVMchRfrTwn9zyJcExzYcaT4r9E2mvBRRikUBYDFb4V8ezQmkGTf8ya",
  "key3": "3kRnsRDDgdNJtmUPvXT15qgmjRf7T1dzfY3ofWkFQW4oiuEx7RH5qKtDeUBSw2dA7asxd9GNakzwrAM47s58ETmm",
  "key4": "3uQ4gkgdowrVpJ5Fu8KXUxt9Z7bxhvQAC7ipRyum663SUb5yCiAXYWZnWPjxqUzn26eJbLCRhbL4y71pkjCMfBvL",
  "key5": "2MWWDg3T7BhjZ6V8qJbmtFvprgz8p1PxmYUQJcLpwQug4zNBJarwcFHWh8mG8L4NFHx1jRhWSmxmZpUPnfcYumXG",
  "key6": "2m3Zv8ufjFhP95o1UhvEatzSKwrhjcKNzpL1P2pAtjwrWzLGXKB3Cyv7xX4gP5sz7nHTT3HcHppCaNrGZ2CgwcTw",
  "key7": "3Bxuxq9VJUjzTJoDfaMmbR57MV7De1Fej6Hd8LRRRc3VQvo1YF2oXpTdDWYr8y4Sqpi7fcZxNTubWE93VHayAMP6",
  "key8": "5n81A1BqBodmi68E13BYtrf94XcCUDGEBsr442goYS1ScLcBCCDoJGyLci53eHXrBDJ8kZ5t41rXReMibCZzikfJ",
  "key9": "2A1QftqpNShRo5vLVRN3hhVYMsPKVy71gpB3Mdx9ZX9aHTMZjhWGjEfAv6sRVEg1wB27GFkqfSBqvAkx5MGvkT2n",
  "key10": "5NwTQ5NjVgGNwgRm9WwX2MuRroT4FQCFG3mXgyWb6Cne9So3VxpDGKENi5Q4ioCA6pLVK479oUT5SLmp1CwNHPiz",
  "key11": "4F7zksz5NyJ8mC8icqTLGYYZwvE1bcWvZYreQuwuGt5RFRuh3W4eAXoAumVkcaUAwt2RfYKYjCE27DNoMFP7Wc9c",
  "key12": "aTPXzUo3h936KPheySRXVKdaP5Crj9DuzAzMfbZZ9VDfAqRzYKAfmah2oCmbN9hBe5Js9JMcreGJmu7Vy9JgnCc",
  "key13": "2jsXKCgNe1De4YwdEgJkiVEFnrMqpu83oNWrS8uwE8ZA2bcvajSsGm5ktMFFu1b2RbH1SkAR31QPAn6L78ai8dHN",
  "key14": "5LTeydYw6q5H553juzerBWVpGd63bkXqnwbRF6YmQt4ad6uiZxaDjtd72SPCuEMyEwiS6645XNad99riGayBACzu",
  "key15": "3rYZzUWsQjmXFdNWTxDD3uzZy2Bvw1hXrYvmWezUsVRS2pvT5EEDE64z2qNSMcf91oTC9PqhvHB5ekjNfbi7RJ6X",
  "key16": "2zvwxGy9E39n83d53MuREQzSNmaqGpJDfDND3BRGRPAU4YviigGjHfW6YsrijzQWXGDS1pYTB9UcsauypfVSnCwp",
  "key17": "96MJ5GHAMQUVN4emB8jLytSHEnatpzxV4tydw3YPRsAUSq3c1dCdztkQpckyYTGHo7BtqAKurwFtfVznjdLkTS2",
  "key18": "5HKc56ecHUsjX7VmsAgh3Td35sN5DSgj24318C1u63rJuEYfsBWVoDMi7zvbGWx9xCGxZe1zZg3LfhGJikTrAVt1",
  "key19": "5Mez7XJNRCtpvNrajokUREcd4YBtEDSJzvYVwr1SHf3ngJVWJT6hcgbQYSBAxij5aDXt4qFdB5oYgWdT26nyDgT7",
  "key20": "3q5h4fkW8QPLNEvCZy2SKCWLSHuUGSQtdvaM34cuG7pg2M9rtk3aecywoHsWYJK98Wi4ph5e3RAt9gqfn5A8gxhV",
  "key21": "5j29deU4fvhSQpSTjv3VwSQoxENTo9518e4TSqfwqF6s9rY4i8wVsnpLkpWhHYBcw6dLQhHp55Kq5DfVhehBoBHG",
  "key22": "SEVXkh7Dn8KrmgL6goph3j1cKStjvUs1FkDFErMJHkVFXgArDwsWeLZCebUydM9gd6DLmBtYbFb6tEuWMuwCtUv",
  "key23": "5NPqcfjLJhJ45wfj5N1asMxxuGpNW3hHqrgDN5xTauV7XaLaWGS2sdcU3Mkk1UUU8bvvX4XQErSQjwUGNCx5HjaD",
  "key24": "3oVPCftYB7YhzTda9VAG1usMtFk8MXz9hQrCXvTkrgvN4WPxCCJgEfk9khFewWyuukf1fB8Y1NRrNx5ucSEe3ULt",
  "key25": "DkYcW37EAJs3JprNP57MVuEmUTLBCN5bQTrrPEAL1rtEZ5eoHek5FDsiLywJnsjXfb7vywEHG8H8V4QgjSjfdBd",
  "key26": "2foRn8SxZgxgNaYNepT8Put4s9MPp1HxaY3h9vTp8EeWRsT9EKYQibu6aZ5g14ZB3TXJpkftQqAcmYHnVHdTye8J",
  "key27": "2pN6h1Lf8KSUf3eoXCJuy1rdRKmMgfGKvn98bD43tYAcwuNzJUp6rRb913N92n67DJgyj7yzbjsC6YcC8K2pvsLo",
  "key28": "3PPfTJwxY8dvuYs5ADr6FWK3j8NBe2BT3aaUe4QqdsNjqUMEVv4ahSBAhrC76TXxhaaiEyY2Rk9jVgo2tRutFpkq",
  "key29": "3rmDMHfgoMXpeLaNK1q3sgxsf55yc18X285536GtwQFXZe7V3tz3ATAFkHM9Fk94U6zW7vyjnogTLrncsDfM63ir",
  "key30": "5CUn4muUoVSXwQVm8aFzJMvZ2eZxRDH9mkxaraGdEWAid1EXt5QCL2vxT3YNiF249NkjSkeZYoA5s4pVTstGhyZ4",
  "key31": "4Ai1rh4dRsXoPYupuUNyjQQiCPfudzyzTQyAQivq4MpfafZyaWGy2HKM2eHCM83R5Cct69TmkJYRrabY3gqamfAL",
  "key32": "2ys8Q8Pzkkkz1NZtPQZU7wiH5kZHXu9hEBbpdhjpqX9StCa2wLrSHiwRnPf6zXahrJHk9raCbKvpDemJPKiKkzeV",
  "key33": "5WnCEzoM3vNkS4PTq1FoZXWhBKVskY2XH7Wj1Rvwk5JHMPYnzaa7eWeZhYFyMbCrpztx75T66RB2Yjo8Cc9ZwHGF",
  "key34": "4cA81b1DzXdtXC6BaDB8Sr4Bzxkpf7Dib6v51ZmyKVmNs4APkZL5hnDxEqVZg7pKdbJ5EtQFisbwX1cUfM8DBTha",
  "key35": "3S1GCRURzGW7Devv395Qz8yzcfywQzLkr1n59Xaun1eso1iFrJxthZvf3vyvGDetQTV5STBge4bVCSg3sbRmoTF5",
  "key36": "4w7doBH88XLCU8vb4yQ7aaUJZU2JfJyjRQPQs68X3TSBbAjRe98ganehqRrDeukXwptn6vEHN2dXv82u1YvH1Kg",
  "key37": "5Ax4YHMeXvchCP5Qdk8sE56Q5yTCF3pqhkrvQEDU4fVWT5HpNCsKTDbzmysHVpu3i8vCGcoEncq8AryiJPdnkSXf"
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
