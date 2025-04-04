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
    "2ZhjKBL9W7vxg4hMZq4B2ZH9Eq8SFirV9oAqkJJAWzdZfZocs567M7kFYS6M3XF5DeZRbKWmcpf16fGqigXHrE7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MbvUjoAxzGsWtVKXM946s1zqRiPQmkJhZf7dC7GhvX7aigm5m1kRMCr929rqgKvFHaEUt5QoPP1bRw9ynFGr8FT",
  "key1": "2pEAn7pgkcZHz3aV6JxkWcC3R6QbxKyWmisHq4ikQvzrbW41D6hz9F2yWkyXu7cxQJbivP5EMMavi2EXHuuHyDF",
  "key2": "5Rq6BrGLY8QnSsgoye6r1h3vLc8fPb15i9dGwMt6H2NAaVmN9F1bvK56W3DpWgi9Zr6cfNcGMxnX8HnFfM8F8hKv",
  "key3": "5Fn6VBWDMQbNsKZtazX26sr1HJfgPYKQrSDid2NH5yHVG495CAFrdqSyW4dQH2gciLoVYWEzzcsiRoqZFzQwxY9o",
  "key4": "Cy3eoPYUBwEJ6t6F5cqTJPoX1LFnQHwLnTQ8Ufe6M5tUaoAybSTMRJjz8TQnsNbcu1CBuv8SBjfTEdyqmxrwGty",
  "key5": "yvbG3EAaP7MHq9sSMgNxxWvsFw5LnFLJzc7vNjdF8WohE8LSVpv1XaN4RMJBKu2TwuWXpcqUqLvXiTsRBoRrMct",
  "key6": "YQTNT4FKGGMKQ9kQmLdK511KuDRr8b5NFqWy1mE3ghCxD7eQjkBhrg9aHJZmH2CYRrJxU9oT85s9xVJrKyvGyVL",
  "key7": "HNV4Gkj7ycPcWFtiDX12KQ6gTBvyyDrK8NvJvwCrBbPBTE3Zft5gwJELFAqkuxMXoFkLnXC1K348BcFJUtJ1fLW",
  "key8": "4EWWMZxwJ3BMEJ9p7TSHtuWdMYQsRKQzeGxKS9PyFX4TZFjGT9RVkERwKCuRmTENXSQR1p3HGoaZADvaFCzH7mPB",
  "key9": "kn4tsYXcqRQggNwyU5FjNXxC8WT7M9iJdr6SfNmcDMBXDpp2dLs35P25U3uDKCn5fgYcGTNsWK6TgPokUdkt7CL",
  "key10": "3X3rZFWhJfpc8SK9FGXC4RqXJCCeAxVZaUBg2UKsjsi95iTEns7kt7GkHjJpNdcDMpSgNz4Kjhi6YfVCicQQDibH",
  "key11": "5bgkSSutJBytQvFY6LCi5RNS1oac5Sa6Y5uwhRuBRf8sfWYg6c7iV33DrGkapYZJMNfs74U65JtN619TaqXqhMcy",
  "key12": "zjNd1k7xhxVF6tRmJeYXTrs8azyXXVvJwqUVXnd8igfyAMzVsE25hhwuAqRirunfTMtzxETWRiMCZ1Mh75UW3BZ",
  "key13": "d12HTTaHeFwATVc8dd1GiC8hHZD8kSYW8HW9vAAEKVpz98K5AdhCx38HfHbpqUVwCLbdXbgQufgDU7ay8AXwBuK",
  "key14": "4emsPFfw9zE7Q95i2BG7KR7Li1C8gq6dQri3iCTQxL7o7ZXrCwkLDTbgYvMb55JmEeBXg3te2ZMN6yVuwyAWA9kC",
  "key15": "4ctc3SXNBUu5dA8qefejrroiycaAHGmTwgETefWS7RCSkfJSL3sHKGt3d26LBCzCSaCw1e1XzMtjnojKr41xy7nC",
  "key16": "byx7hvwU5Pd7pmAVYZ3KcjfseKt6v7XxeZtEC93nbjyLMz1JwgnApLTARKvWFqatVmBEDr4XcnqYUh7XjV9RfPF",
  "key17": "3m2TpWi8KB225PgQqkWWMTcu4Ni8CbuXTSUnxsGvxi6YppX3gWqnEtybtubp2WJpvD4X7W7wvysPBhMf8PSzXZh6",
  "key18": "3qLa15zzYrejapm7G9qdfFKx7JgQh7HuDpHqrnkS5XQXGyBFQ56j6UUh7waozPQUH3y3teRs4h4cKsDX8zVWXnyM",
  "key19": "4T2BpDFAxhKmESAjZm1Q649y97kCrsAaVjTguPvXm3ceoxqQNDykdggTHeBBm4AV1vFZAicF6VBYK3wpQGtED3n8",
  "key20": "3Xvvxy4uZpeMPkTdaCne59LYykkMckJXxCiwSeftYA1Fb1MnmDzV6RCssr8szzNbokRvRQsqAL6WHqV6DL6Q7JwJ",
  "key21": "2DPuS1j74ATEhQpGdP6N9kLpjgMEXuPxyM4zPnetR8qJJsWCA1TZUYUsqsKeDxggda49jX4ps7E3jjp6ib41K1Qc",
  "key22": "2dCA6rA6LaPdr5zSM8DXXJXMPW55w2MQM2gsKe1A5fbtFZwmfrGBBBC9R2oAWDd2Lp615CAk8PrSPsvS8bh6kPu5",
  "key23": "66pfcegALGrroC8iBNg5eR8g22SMj4ZCRryUCqV4mAHBJA8sZG6QnHWaWrJhGiJZL8mcEMz5qmiU5AjSimWfixEo",
  "key24": "HB2Ja9Qxt9ssry9HqW21Pucz79iZ5wQwXPj13AdXXqtA6FEknCgyWhzLyWdgsc8SA5ZR4HeNBcyrhsy7seKe52T",
  "key25": "4ZkCDnCCW1JWc2wqPCiHjtTMceiHJG7Bz41z9jkCh5aJNc3gYms2qGZCtdVSeiD86FK4JZbkznMjeuBYrmZ746jP",
  "key26": "3svB5wkufih4qgZA2atVcAKnGSnHmcFfKmCFgVe7BaHaL6ZbDPKNeKcDJQp24F2ir5t28MEbbN4N7GypzkC6Hrwo",
  "key27": "4eGwW4kJDWsgNhCBdCNFHhjWPLPT8BDgSmmpDnqLWQ3AqHkAKb1jA2VDQC4YxUqnrShzP3JnN8rGp9x4wipA7fBU",
  "key28": "57354sVv8GEFU4c8K17PzupPAn9pkTEPUMEdCg24Thfiyx2Wds48A3Uaq9cngxnLgfbgjmdjz9bWVD77Kse69mxW",
  "key29": "56np6t9weZJtE2gXoisJm3FMuBagDt5TAF88Hx4PDLg2AvrUfoXobfakCsRm1rRNuJTNU73XYrNSLmu57jnDTygD",
  "key30": "3txQTEPSkUy9EqCLPqwaUKimEtYhRxYGuALco53jD7AMFpg6qwhkB5hubuiZSuPdQViG4g2R4ybzwkS6ozpnZycQ",
  "key31": "25eZeXUF8r9NCHigX3dRq7SMSDy1frVdke4BPKg52cAZcbwzqzT85RhXHuumCrooroJjPkfSb5aRmj2qFS1w3cNL",
  "key32": "T5HsSJ5FpMj1UEN1yr7Nv2eqx2kmFbHmdsSwhaYeMVtSNvJXGUNF3aXXdovkxhUXXQmu9NHZmNC9ekVbjDU7Lm8",
  "key33": "2BshmeGwiEVRShvCDWMDVj1bjkCE8FpNy53SPvghW5CEzGbaf8hy8f9VEpjcGDBHkbhSknhmRyy1rbWRaHjzpavz",
  "key34": "2bsT7ZLfrkFLwrgNPBwBCTJYy8K2utqCGBmUG1GkRpC61BYLxnoH5RwsPr1ccaSAWj8jvsTBRCFLBkuHR6hp9qVz",
  "key35": "3FdvPZsDRcvp1ihnE5UJodK3iF2vx6uNY5C1mweij5YoxKzU2c5hwPpvqW6a6MpkBu114ov5Jp8YJyqJpV8aHqWy",
  "key36": "2XToFFv5QmKosH5xj9ZosRGbxYAr2NqEEDgQRc5Wnyn9S3bewGpaSSJNeHsqp8bCeeJWWhY327bLZgvbhdB19299",
  "key37": "28QnNf9xB9KtPPqoEyWrBGcEzXKvQCitiwAfzkmnMKw2MpmWNJNZtMBUbNxbbMVjV4VaiJSZoLSts2cz9TD5bNm1",
  "key38": "27B1T2UjTh9MJmmcGNkasmDG8F7BuBxQJYNpx3TDe55YoNpH4hhRnmSCkL8pYiULSgyqqnzbnUBvmUUM9ibcwgdr",
  "key39": "29P7EUB9MSAgNXSkJzgNaoavtHxfdbAThC4tjMx4t9Ajego3QCjmQRod4W6yP6ruCnzUZWjoP17EiqtgCcDpnWSX",
  "key40": "6m4YupTAzasMBXzc3vbmsnXbJrdoY3sUrejWGSkoK5uBm3vAxkhTpayyVex87RDs9EsLWk5dCkpx24qoYXbQo3s",
  "key41": "3Ns6DuVrwEEshMXHb3HtRM734q3V4CGmsKihNfuLPKgnHJhGgvJBDWzzUpNXETpcZ7TXSdX8LX96SW4Fi4Hxa4zm",
  "key42": "cHthEhcz3bNCZoWnwkvyahP7V4H8nt7Rus5kZqVZxrmvjMpbrxfX12YCaKFypo5KLQSiWCSMCKudBSuq8nXNDQ7",
  "key43": "2tm1WASR2tATphMkZXpDukT4V7eAzZYAN3kq2mDJpLS4vcTLWLEEn3QDbJswt2iF4p9yDAZiQz6hJgNgAodHG4u9",
  "key44": "4jABUpJtYSYnUWz4TdWR3BN7y5gKCUqVS7FV9MDJYRhUFRJzkkJaokxgfiQ5Pu5mJefdd23r9eChjbnxLSGJ1Cpt",
  "key45": "ppFDDWTTe37oXewHHqksD4ibsMWyojjCh64tsqEVkdv7RM136mJ5T7qP4ie1MEA6uCQPLUWHyruEwuYVCQyo4md",
  "key46": "5dNJmcKNuSsHhRqY4vMvtVK66b5DzwFQVVhNsBUHvH3FV5MfEfcsfKnoeNqNXerpbbsgtrnUccF4mVE34C8L7MF8",
  "key47": "4eyKgtA1HoxpnBFas9mVFmjw7RyQ5ebmRSczJKY1Jik6TZ35vMPQkSohDbdBKE2qnuyDcHARYV6EaHibax6omdxN",
  "key48": "4sMK5RTYZKsqqiAEmxFwuzFU2to1WDM1UmwhbS8599bqBQvzfuFmoALMpj79E1Q1USx7ch7jKmNrwVbA2RVvSHSw"
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
