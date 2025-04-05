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
    "3Dhk71dwmkpMHDds6HTXNzt5dC5ap4z39L96YtvJc4NxZ7NmZVuEbnj86LUE7842iL8C9HNn4u9kCFnNAidzAhAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32i1CfhUdqzP3fDPQvrVhDDqVmbFf5GoUHRWDkuJTAbZFLsGr6NA8XNMF218YtVCFwwHEMqM4SRryYgyq3QfCLem",
  "key1": "3ZmoS7JW7nACyWez11AEqW3pc9vSKkThYA44zFS4mXyjxymrcFCXcmMPgJYnkAL2a7YsbDYSFguXjq7QXPf2HjYk",
  "key2": "2LBTMZSPKJ7KeR96hHicaL66ikphyutV3t2SCrqe4CRYf18Yhrj9xYDC59sEGDtRSqcuACgC3gSrUFQ1wqkr1K8p",
  "key3": "2dLrsW2gAN8nMbTSe5u1ccbrPUqKzLFx7tqC5BCSpK5ZsdcwnKqupnW3aimutH3WrGNNwrEYAUpJNc2P2HArBYgS",
  "key4": "5LtFuTiR59TzNTkeGdskwAQxyCoLgL2zQg8MPH2hKqtfYZgfgss264Hq3vqApE1yJbK5tjJ5c33d63fCa5f2GYnA",
  "key5": "j41ofS3fPpkVge89G12ypB4iN6mbvmwrNv1RyAkZR7ZuhFHCr8hpyG5uVj6rBzehBKhaqgQBYypsVRGs71wvLV2",
  "key6": "hnu143NwrRaLmkF2tyajdbzknKhBxSf342SbD1UEyrE1FtTMBqiExTS2PcpZSdhWQTxBF4pdriwJWXzao2hbJB3",
  "key7": "2CjzMZC1fYPAafhpHX8yEVvge3bKidAVzUivpEqcsKrQGDWwZeJdYWVcNvvJ11aecwHFBro4NMTeV5fWCh37KaT1",
  "key8": "2Dg2M8c1bxhFytmK6WTdxwFjbDd4faqs3Zc4j59i9MSXTnDwpLaE5N26XDoK3vDLYjAYhGQUWqL8i2kn8zjJZZHq",
  "key9": "5tET8yB3NAurSgKLLakmSyhr8v7ccpp2uhbzSRmw7BVbefUoJb8afbGa1oJDqqWbEfHcfJ5es3UrRRyW2isQawz6",
  "key10": "4XBRbRYrNZ9h2TiH5o3ErMoiW3Wg7GV4XjUF1ZuHZW4hCEFEXaSgB4N2Gwm8i1kAjECZ1oNf6BpRyFja83GqvpiG",
  "key11": "2aGuY3q9EDNRvtFRJ4yXjh4wxacD8fPpfrV8pNp9eVu26zx4FNCsWm7ZqRMTt7hVQHNDLmpsLht4P5nfHjhsnGeR",
  "key12": "21YpbUVSBdFaH1CAKqN5nWSnNN5dsmCUo5isqUsCrr4AxztMADsRPBFHPRf3PRt9imSd4RfQHUuqzmaVDLMqYXAR",
  "key13": "4mzCZhvPMX1mHZqCp9aQshhw2SnzEMnr1XyfrpaFFNXz33J4ep23wnp7jTxvU1icCwzFS1Kbbe294gQLZYFVkEiE",
  "key14": "4mNSv55rHvgC48nzUqfzz3DuSqwLeJEisqzsRMKJUCgpAk617BzeSvky53vDi6SCHUP6vfrTqkJ826ZxwQCe92Zs",
  "key15": "3KUAbLVnQoRzVuH5PPCFPWEbje17wMt6N5omJWzy9DKuLwzW5iJ1n18WF9HXhDttc1qBFPhySNBaU9eE32ZinjP2",
  "key16": "5h8zhSquGHaTahfsJYVxxuM7nmKyEqcotLXqFzeVjfSSENkwNb6EHs8g6PbXWzssJz2svENYjqiAWojCb3mr9sya",
  "key17": "BSFugR34H68u2V2rqSUE2r4G3HRsaicaoWf3wwPqhYs7jJ9ZPYipprXhQXk6kYHGqc1nXdFQcU1cU7zeuUC19PL",
  "key18": "2eY2Yzeff7HhK2RS1QGZQjZbbNzDwmeD6u4wc13wyWUb62guVf1iWE2XFftsW4G9PReYAP6mfHeXvkXi6L65UwDf",
  "key19": "3jq1VQf9WcRhiQXawBgcj7cwqpp9rdhec6dArvn3aQUTjxy4ZEzsR6wg1ftY9MxGayyaYDMRpwf81YvgHvhkKfnJ",
  "key20": "5hLiB75iBotmBHdueRvMGk2qHfqCbkxsaCnHztwF2KLfoveuQmTP8QoPwNpPUUo4XnEtpmvi1LoPSVgBjdiZmKBw",
  "key21": "5d7WViCMv5gKavVgK1Efbn1TddG2Ly37orbmkVKxoi7jsLygztFFGsWEbkXHUp2aXLDAdnU1rbe4h4NUxc8R2zC5",
  "key22": "4ZbkDL5K2WkAZj7gyhGX1HDvo5rtfdtaZPQm9F27LJM3yvc3VFYrjwUu6Q4WRi82ohhR52ec1zfkVjbbpdj8kp8i",
  "key23": "2m8nTeiKmrPbGL6FC4Gcmh5o9La5ucFB9GG4avcoUSE29Udwp9FAgJthTvXauUntR9AFF1euXzv2UR31g76wfSYR",
  "key24": "3DfUUf2AwdgNZgaFEQb8ePRT1M6QrDhkX96SvkxKgxukhcWWKtGVxnhMLtU3AtVcdRbvE6XQZikRjUjGUjLWgrHg",
  "key25": "4EMksVKUipngXEiMyaXPkvvXh475w8DThswgkaVxMYUQd36uReJefUbz453527TcdMuiAhiNdBnXWX5rUJmuqJwp",
  "key26": "o97Wm2H7MkoqahU4BA6zhFJnmCMsietPuzQEUncm3NN2BjSm1AeofPKEuwy5Y68yM8AaZjWjs4S2egGi3nVyLVP",
  "key27": "5JuqqtFSfQaFFJCGGnfnEMygjWbWcFNVMDM8tdSC7ZNrApUTGAPazCRi1aFMmLMhB4cnz1T6juMf4R3qBg9BApEy",
  "key28": "2zVEkpMWKczTBSBxNnjK3jwjqt1beHkCSrNetZx1axDUHtoPJ1xeZZWgrRQbmt2nhcoZssgZzAKoFPJeiLMYTYXA",
  "key29": "5o7XRvMPQcYKgrCc71HJhmuVVJvQgE99y7baAv4tmnJzwnFHSJZPnGKvAktPhsMHp6dN8T6gHgV7Yo71YtTPyMaj",
  "key30": "5JJh9mDkxEdb2cMzASLZpysT1yPo2nmKyt3KZGrG8j4SkbSjtRGnrLGo8az3dsiv6G5oDKNpLaqzp783diojBGFv",
  "key31": "4jjnbqGZ1AnVe4ep7ymw9Vjwn58rYvskjbTmjVkqs63DvybfbxfSsdcqusMLPu36CC4R62FQXRB9qdYa6MmzenrD",
  "key32": "2MV2douEfpZk99vSPu6yHM8Vd5QfVK7aR5rhAvaAmCpT9L3YV4q1NDV6xMUGiW4e5xoSE423e7itpnm2Pzye56mF",
  "key33": "4aWwHFtegPR8RwMuqSzNbtJMHbKPuA2Et4VdKjz7wXX5PzQCsDqyEzB2y7QnEKJ9xk2ppbwWiKDMuk2WLmEc12MJ",
  "key34": "2E4Xq6oP94hAeDunF9Soa4MbDmPy8ZybycGDzxHXrV6VDN9Edio7aro6GKa8bbw2DRnWjqMVHUrxt6WiqS5F6Lbo",
  "key35": "Jk32ZZSfUcdordgnBm31Fx3D26FZ1vCtTaYnMgwoPF1gcDYBUimEKxyH6X6wSn1uiEwb7YWPEY1C9irGcjCQ84Q",
  "key36": "2Qm71yKe1bWKF7BRc9xRsVEVmUs8aYaPCgzp4NQJJREd9sghkPi4QndRGfoDcT8ZWj4AqpSeSHPYJBQy2EQPHnRU",
  "key37": "5UuQ3juu9jj7WEjt5ALKqNQZqCW2CEdTShwRNo37KFEMGKb4AwyBJnKnbXRVujjA327tFJ3bm1AxjrLonSYbxMJr",
  "key38": "4J5kkYXauneRzhksdz6hwdBGRdxohb2Nz4N3KDggogpBVbnG7jqVEa8qq39NfXUo4B83y1itrtEJHTMtDtYnZhx5",
  "key39": "3h1MqT3CkuLmU4qAJV3ePa6ZyZuaqtZz9J3sT7YvnVShD2XM6yQpBdmBQw4MDZKe3ZrYfsqJ3xjifczEJ3gs1qC3"
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
