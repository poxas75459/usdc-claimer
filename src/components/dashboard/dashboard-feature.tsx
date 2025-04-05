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
    "G4ceA26TsBp7RbPrQxRKTZQkRgoigp6E85njWStLHvjVnCEta6bEDQSSpuT9cxLeSKgQLpdJ8jB9wtDFCiVDNQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8hWFzbkqn3VqMHfgvKHkqfBZEE4oYxRPCQGXkHRiNF64JfV5E8dBxADJq5u2bCDQskUSnmP3H52jdQCqHM7JPA",
  "key1": "CMb1bpvxpqfxRYYfBYG1a5HuWmvWmPfXPLSZYNkey7paYWykmukBXMmKRb2srHna7VH7iDMA2hjAuancRoojqgo",
  "key2": "4Kr58niCsP2xrUr9P9nqGx4DrBcRR224eiyXg6LQ28HM1jZgG6jVF4GxrjGDp7s2AHgN5nWA9SwVDRTbQA79eLhF",
  "key3": "2wAKWTzsivwPD3gVQghHU1KgFXpL5hPUXqb5sRh67bSizoDpzJA3WiVCVLK9jZGuApFhQe94JKM9DtJys5ecXVPX",
  "key4": "3wN3kD91dV6x5mmMMsqm7WaCeX3S3oUtF7LmqbLZfNqMiD6AAxrhMXBzxYMqp99vgKZtDLpN7duYpf5TbyKNhgbF",
  "key5": "3bKybcN49otp4nrpEbRwaLvy3ASswWYyvSztnFtH9tFZYzN2FV2hbnxD5YzUwcE1Em2mXDPo8S3cY28zdfmKaRGn",
  "key6": "578P74R8FFRv22mxeypxqougV27eX5GDm4p1ygc8Mm1tzsq41T5mtW24rot8gzbkmtCBBiArzLSy7Pq6QFSdc2sF",
  "key7": "3dXHSQ86gdAkGEixntgzWbZsFmcjJcPNb8gdc75fDAtsQGk2ruNVWFk14ciPLtdjA56VrChuHdPE2d5SzHDeUbBs",
  "key8": "2aWXLaJnEc9chXsYFyFH3UYNFsZdYMck43zTg852fbkRWjWjaiLJbmXWqett8eSUYGTwPWquj6zbGPrNfBmG1W6w",
  "key9": "xodtqF4LAp73tbPoUx3rF569v9W893q9MhtYhU9groLctbyqPbpdTfHXLRYaKmKjSMpfWZtF7BBCDbq7x8XwgUu",
  "key10": "WiiuDajSj63EJewbKBYymEuaKisAzTRTE5AJecdqXYgzMXVt4Na8XYEXBZ3fk6ufPodFXD22hDRvFfVacADfube",
  "key11": "3YsbKzDm9Jhgu7PPs6bdDzYx6H79dz6uNMCWPfTADCfRFpKbhCt7im2bqktbmUXMVULDrwQTmktHTWZkUTpnKcJH",
  "key12": "ZZzjZZm2XozLFkaDw7dJA1e4jEr8SjHThNWZYY97ce1yJ1sJ9N19gaVSQEzhCLmDBf3aBd8nDkvt21AGjMvRKw2",
  "key13": "2gdrRVZapG3cmdFX13HJEebE1AeAfjGAU2nhBci2jH8b7e18XAZd4YM3uH52F66Afpedzja9aXDojrxXntzkmr75",
  "key14": "57Zh1Hkzqz12FKLfgdbdzbZFEndmX1waeSpBCHNnZa7i1z9tHbAzj7uovumSHyTB4RyqKDqf1zcfCkQg34fJpbNy",
  "key15": "2HRMfZkA7tRp4FxSMX1fE9PDnFqzNBCu6bg1qSoTfaqhgou68TkytbFHmum3WuS5wZ762wbMyQQyktBQLf7gUtfP",
  "key16": "5FsaNttBwKw5QzyiAYQEue2hUYne2GbjH5kw2wTtftTW4cQQqRqpRVcReW6NhbZRzEA8n3zoFnZvErmHgFxEoaAT",
  "key17": "46WTjwnLSeubS3mCKtWrsAtriHrkVPtuCcZFp3uHsGmQNRCzcdPbxqCUWD131NPupFtAwrLxtd2erM1y2roUaWEV",
  "key18": "4zTTozqk84xWQX5pZNgACVsF9KSuqd1imggmVyBYg4kWkbT9eJZ7o31ptmm2RfQFgqAdaZM4LP8EBb36rLaUCgLj",
  "key19": "4vHDe6ziQtXSggWqgV9F5n5jUXyWiEenW6CdbVRd9pRd6zaa9j43bh1WNAdi6bErGzUgx9P9m73StEj5CTvsLYSN",
  "key20": "US8jKLX6Hc6RMeNmMJiXeB1UiZqgfpqkBmSuC9iyLcNajWoLLGuL4NPsNqrfrLZUNgBNVbXJ8CtNH2wg97Lntd8",
  "key21": "5crFBVeqyQh5qzmjma6YJJgAig3Wg4XtruUZgJ4fcVso9XG8DTeGTDPPJiDViGAeVnetA8XqpNSR2NkP3bmjJRGP",
  "key22": "3Ub2wnP1BhXJ5kQkdNZhazZdQj21qaKVomMykPq9ScnCoGLiEfdmo3c9FvjhT9YzvUJHNaogCJD87ChZCkbY4ZMZ",
  "key23": "1XLWxrPB7mVWrWLZp2ibvXdwKzWL8uCBvpERmjF8EoAbqCyRWq7c8AVGCnncX3AEyz4nV3YEdNevhdLNX2NTMXT",
  "key24": "3fSta4dxZ77G1MRfDEmaaZSWrUXpz5NnpaNDaJnq7qzLQijciACzC4w3CdsgKWiNeTVAuQa9uizyRfHnxqhHR3CK",
  "key25": "4VhnaExY2hr3drwiBZPGu6Ve5dcS8K9NZLGxVh6pAz7qkLHBo8uaNNjqiFBpuDSrVs97VKP4jq2yCJwqpoFzU4Um",
  "key26": "5p3hVNp5VhoV4NDeL6hu1swNXryQHS1L2TNqegEtLGuZnLsDTDDt1Y993VuyPnGYaaPdfMoPkSE2ECNX3iWL77uJ",
  "key27": "5gvZUz9LSbKdXGugL34Gab1Dj2AgekPfJJNGAxPDZpfotarRhYeHwmSfMEYDVP3HZqBorebWAs7gGEWEqxxovnoZ",
  "key28": "HDMnin2UDW7PE1Tz6Gy1gVJ4WurSLetDtGves2WKE1rpPajk2zyE7nWCW4m1LaknSYbjDmfWvtUxnJuumSBptvm",
  "key29": "65XS19eN5V9SVYpJiw7fGgYymtVa9sEXJWeGzmKLm7kaNqdKCLWAMuKrc1ztutHzyZoxGUgQuWvWY2J35CWYAWyx",
  "key30": "5G41oBSGGdUGx4HBbf6hULgWyMWFTxGsxkDBVsP6scFHW5MSPZtpwiouJTGJBQLRJUZfrMw8K5EyX3kzDuvTrE96",
  "key31": "5UtdoUvZJVpQHTA4TEDBome4NbccecmYsec7ZfPrMfhfEUA1vUHMKaFZSqh3eNSbPsHfTkTUYEohwcGMP4ZEKiJZ",
  "key32": "V3NqLKf2PwF8ygSg1R4GQKWkw2PzBqUhGU9eYkbcTCPUHo5sfxNrfwL5i9riibVdpTRsnNtzcSpgZYY7YxqBBiJ",
  "key33": "4QKo8qr34hkzyCx2awCbF4ds1Xk5K1Lzy6Jd4q9eHm3pJdnEAZxGwFMhHhvEiubxiCWARZwgY5ggWzovMLYsd5nE",
  "key34": "67e8EHktGsNqCMnmzGcS5gX34nrPW7f9AUu4PZ2n7tgbwd2CZHFFbamcDN8nwKbD49LcVFGRv9MRy82Ee9a7VRN8",
  "key35": "3ttxzHFcgfpUuMBkcmm7Ddc9FUMHXtQHsyMxuiGTbREvrx4bQP1ycTbmoAUihTQfYsEEi3Ksr1GgMuJXSDxSTcAN",
  "key36": "hBfBF7AAddP8SUy76eR7A9HNuw79rFYVoWgUsGxo2oAQB7XY8YbTaH6kNn8X9jBm7Ljc4EYRE7JVZY3KhEsDbet",
  "key37": "SoUhR3eBveFMABcFYFcMgRJDogJFzN1KYtgqCL4AZ3xTDG4Q2eyo96Je24xs1pWcuRFDXyLbX59gQ8tz98ErwR4"
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
