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
    "3koE1twXJFvjdHQUitV4nWUChD5fQcatKg57qjZuLYNFAv31HBkum3qyw1NA6BDExHjRTCrS7iaXKfk9aDaMTBQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rzHfF2ya3MX8YmYuG7TcXsMPqYCpqS8z6Hs4ph4ZQdPjKrCPMZm7Ur6aVPn7Q6XKSp6czfYB15gTwJyh85wTJQQ",
  "key1": "2Qbbghz7BgPPpPctnJAozdSvZnajj9TMoeDstf2DNLyFkR5gihWYseYyWJQXGDK2pvfFmvSRkHPjcpV1QCK9YfBE",
  "key2": "3FGqB5zNewmipmHCYAVKrVHiCNSUiywyiXZNLak8zNqPxeFkPidckgj2hrmDf4gbumZb87xwPGMK1rwBTMz4ah2j",
  "key3": "tdNqzppDKqnBJbMkKQaQ3KPgFUP2ipL4JbyrpFAfFukVtUcbQgfELGz2RAM7hug1VqFaTjHDrfSZecnngXa2Td4",
  "key4": "5KFQBtVxes9nd6oicQ34ZqcBSxajFNYU9atSEzMXQSfjxBi6f2GhrdPrLRB4yqhdnBokVq9MQC4ZxrxnFkcRtzuS",
  "key5": "3od5ppKDioWqngPo2EgVLW6PU7k2GZLDP1wfpaj85AKkaAECP6rYLCLUgh1BFcBpeAaFvoTA4PvhiF1DCh8UEPqf",
  "key6": "4p96vi1w363HNAxnq1ij2CHZhV3PSW5XqG2uj5Lj4KU3jSoFpgSGwLCsfHNy5mach6ngSN7CUTJV74eJ2Kce4Aw3",
  "key7": "1AZky2haXJbtYU825KoUJwPmHmjxbb15RJMGAWQq5DVp9wiiaTUfxo3TZ1bHViu5ybAHBSm35ooEkRxQZmZJMnX",
  "key8": "4BUvYypijFvbaCuisLwr98YpoUg23bQL7caJeFB8YrJ8Ugu1Ab9LUSrWNRi91wLAXPj3pWGLTDMqeD44QAoqHymU",
  "key9": "5jnvYCS84jhovuqPZWvkG9d6ZiDkXBa1CNe7gMDJUZPVGxt9ZawReEQhSzcz4m8hno7AcK19bhL81DXW5W4Z3VRm",
  "key10": "5Qh5ttnhMdjNrrdq2EDdfMtmgoV7NZyJhBRbEmCMsZ3Hi2yBiKeWtGzz7GuGeLoCFvGz3LieBYbjqyeM6MffNYZ4",
  "key11": "55FTAVLQhrhhVDvYQK2T3EF52VH9uHPc4HQEeZJcCARPEHVuRCkQvGnb8P6GHYpDkpm4Qs8Msx7zFY7yXkymqYN",
  "key12": "2u16JBkemg3uctEieddq8xsbSGPoxzSTqebsC7TvhtCkjUvWi7mGDu6HyzrKjSWgkohqM2evyWwMLziSFjgxNcKv",
  "key13": "4CKREr1uYFwZd8pxqQTJ4nLDWgpD6XN6PaAx47trK3VMuasdD2zsJL9VrfBWr5M8KhCBQLRXMsaC7SMmyXse3jWf",
  "key14": "2ZGwxDYPYMy5hPzumA5CVqNsG656nJ1h4co2njhrdadbRuFn1bRtaaeSmy3oWj1GfdGEz12Ke661FFhBmE2ZkKQ8",
  "key15": "5qGemGPkRyoswgigchedqe5Mbkn97F91dbx7Hee4P5cTyBJh1QmGYGp5JpRm7rfp876Z2r5Txhqv7ebaRxZoa1ym",
  "key16": "5qHrm5w3LZtmFc7mEBQrJTXHZbdCbhfp288vDw6fo9VrdPntioZojT857Vdwq6eagbchgZ79LgFVyFqgPmF8t64w",
  "key17": "3A8ueUHQmDR75KNkjnSPkfEj2T5UwumgPBB61C4CmJ7stVEkuvUU7jmoe8kg5r6KLBWc7RVfVmrqKFnW2saSgvsf",
  "key18": "3eiJXwhv9BFdrKHgrjonERU2hnXyMsjTkEeVXU1ZpoCChszU4zNMU9nKDqGURhPv56fanWg1wKAf7CtN1bocxatt",
  "key19": "aKAUm26R84MzufpyqKDmRUX8JbkhuqnirPu2PV6c3B2QuM7oFHexFuq9eK3sS8DXBxQbXjyeJXiFowtRQaHRUyR",
  "key20": "27rHdGdri9c3SbT9959mRruDSDQZYGp4jDiXapJnpuQDxqpWMkQrvthyivZChLxAwD8jjfWTjmfHBZkLNnvmRVpF",
  "key21": "SYVxiVtwbLZK5WyUXwdpfvo5A18PRr2jvYkn9XqtHp6yVGuLiUvsLhiJApKKQ3uNx1V5h65nUTNfRYa9BSiRFdM",
  "key22": "31fkvdc1FBe4akppDQhThuuKc9Fr7keESCP7oACWiDKWhAxPSCdpjLJCiVpmUwkxduBd3tJAWbyPNJXSQtj457st",
  "key23": "3xgmGRt3fKUWcET8DWPRwEURpayn3bgqq6uLBjQ2kQ9qkGmg2AAen7nrJzPxWHGZM1ZmaAgtBUDoXJU3cbdDdS3M",
  "key24": "4X38RZyJLu2cPi5GqNBKnJhJv2P7juh9VH8V22SVBjieTqJhxAxdWNfd8p5wVKyUGh1WhpzPrMAdRE3VYVsfTNUV",
  "key25": "5Twe8cxvWq3tk55p31UwceyLJHmYxZhLDMJ5EevZKUQKq6Dw9U1Z17UXKQQiNXcXSV8EJw8dbJnVB1WhtFMJzQBK",
  "key26": "45MrvYxBgATZkJKpH4xzRSXAqugDY5437ybaZn1DnPDEyNPwqp1q441MZeFL3U89SVfssGWJnN4BNr4sbpEVeodQ",
  "key27": "5rwwTXYzT6AbbQTp8xXXRuqnaReG6WsmDuPF7yZFxWqXnNymaVY5uEkJbkGqBbUkKwEnytDKdMDL4Zmfk5YE8qSP",
  "key28": "4idEmbrXRWQmwmUfDXNF5eKv92aX81GrrX9ygYySJFc2do3Zsh4yDnxHfKFeQPsSSLnqb7biZT5XtrzbB1C2FMJj",
  "key29": "2HmowrwmCKnrosBv7H3smHypiBeM5nFbSBaZ4pqKvqrtrFes3UxqUz1PuJS94ejoMnXnZmjdkNzspqtPzk1ag2uP",
  "key30": "2zvVoFUxNZnVGXRCpphwbiYoLakAn7mVNRvCMGURvG737ULLQDWJ2LZ7gy3zzNHJ24zf1Pk9FVphbreSLfWmbNM3",
  "key31": "5e89m4gNA2ggy94zPhu3vR6vVB91diZ9TJcMSQCuXgGZdFt3PsCKmvzX2s8yMeRiguHG8FQsSvHdm8DN3hg3nvLk",
  "key32": "341my7XrLh9tD4APLqXNHeVo5hNkkRJpm16vPA5QWe1jUBimd25hgit9jtXMy5BGxDAeKLfiCMhnvgsdCFXumP4q",
  "key33": "4gD6GZKT3h3LRZnuAvQz9ie2BewkhoE7x3PBVX9F4xdyV71uSQmRMYcNhVayQxbAaxswh3T3YgzEf4vCgDx8Fugc",
  "key34": "3Dku4KXWegRf5wA3t3CaZoKzgxMEUfcp91MH2J3AeRocM7j4ZhZq69yfK31KYytZjE2xeByR9GnGCPdzixaBqSQQ",
  "key35": "63Wqt9qgjkJyacVp1kuJ9oRxJpsi5jwtkwtFL9tacdUmNs9f488ikviwktWheNzgDALGTwpmtDPjMf483oWfsxKo",
  "key36": "3WLU6fdnCPCxFt83AojYANuFCpf4JR2VNdBYnge7PD4u8Q7ZnxK4S3F452NoATG5u1dpGoaKX8Ywn5BA4ZavTd5v",
  "key37": "49M7W3tBqLXnR7cjdHR1Zc6cj6HzUB86UztGbsGwLNYYRbhoZyAzvCjT7VqMpSk287qSrBFqw3e7MTU9aL8KkBcM",
  "key38": "4sxpciNVnnfpJyTb7ZBt1DkjgoSsi8mgZmhMFxmKW2EUU5co547fmsjd9jfSCJjs1jY97LBrL6RDz8cFNgY67E6h",
  "key39": "35DEbXUm3GW4ApvNivJuB1rKYcTD4jMrDwTeNKHa6sxikcBep9NJpDtBh42jtELkSQ6DExN9vtxqfWZZuRiNL24q",
  "key40": "2p1zJgTPQhA6jdqH38ZVUStkgJDyMjjD7JTZzXuYCz93Kvb92WRHdPUhyN7W933SzHBtt7aS5LetVyw9X9ue5vjM",
  "key41": "2iECN1FFMXZGGLdAbPtsX9ZdiJ4FwuPRuVU5Dc1kWALxS6VNzi6szA2DJnJ3qm9oVqiWG47jb3Ea3Z3hzi1eLhKg",
  "key42": "CjmAmaDDTtgjp6xQYcZLTWZgq23X2CX32Kis1edz2F9bJoZhaVDaoPXNR716sHhLPXiKymnGBuoSjarVYhRbxzX"
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
