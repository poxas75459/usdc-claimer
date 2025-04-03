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
    "5vVdnwx77TcpZt7pJppLZYySLnRa4hHQp17e52AP4TuZHG2Jx62a386PS2rQwudJdPjyYgbwXA5P36Gv42HCnyqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367xrMvWuMwAayyD9dWZkj3tx8DbJQK1vXtR8pYtqDoF9EougszZJocjtZg8GJrsQgxtz1PUaD4svYdtK4mkvyG3",
  "key1": "43dHjYWHsKzEnL3nRF6Xe9vfCvbYbardRERwpn2USpkVvykaED8nGAPrwF6s9iMsCm8zBBkU8EsoWjCGYisewQE5",
  "key2": "5bTxcCnkQJXKz5sQgX6APfqAPE1BcLxYonUbo64ufBhFbVkYuG58tSvGjU2QSmEchxkNGPbxHJdhk5M2wgkDUaMt",
  "key3": "5khyRLx49EgWidqgRCeop1SRWm7eA3xkQdDYJN4EvpSYit9Zh2Uv7DLJttsnqWTUdsDtzvjqukpK8G8uP5pBQg5K",
  "key4": "5qaH3z6w2RouYNF8kTiRXzjmYEkBwXaVSKTrer3N6wbJKDdq4ez66bL1UL3MA8DLxyqeVVLE8K1BfWpS5uin6VH1",
  "key5": "eLHrqGWJwCQvFYAjjraZdWZzTomaTCm4yoWgC5jMREebbShtcepv4NZinGCGVuLQHXCnoRhwfa695mi4Vvzr5VY",
  "key6": "5vwzCTmsRM6MB7SpvBoHBYXPaSWRqGwU7mWRtAMNYn8xKLtQYUdi9KgrCF5f6k1FKgS2EUvYDct5U4EZdr4NT4od",
  "key7": "5LJPsb2T7YGdM21wWWQdsiFrcYghKgirtTdnmHdrhFTXKpnqQCexA2sTRYQqGbGyr7hNUUuf3ZYDxLZyV7sp6Abf",
  "key8": "3CmmzvhMEfEbfb6rQeALXSfv2mvDYSkiJwNfjNDxEs2xiqgRUUZeHbg8CvxVopMH44iG7TPjcnwHwhDPwihPyxdg",
  "key9": "4kiAqCuc4CmdnNEqoVidxyDBndgd6fbytrGLFst5mHgEU2uL3H2TbFZNCgR73Vq73Av6EMTqkxDdfGbADucyj9ov",
  "key10": "hr2y6JJxFEf5FB9nYpvL7k3csjjkwxjUd2fbRgYjgivMY9BbVdfkZKV48XafgXQMS7iGJmoyZBg9TWP2RDGZ6qv",
  "key11": "42HWFLrmky7fvAUDyvgSdg6zj62GMTUugBFQ6wEuG9mg1yApQzH7AmdydGiVj3LgtEzcrPonyTVcZA6SAEquakm6",
  "key12": "5tRo8jnV1jPAJSowFoVAGQWLoqhumJj9Jk4xuuJe1BUufEZMKLkXdMEwgLDSCeJbiq4QEpQRJBHdUNBqFpCib9Re",
  "key13": "47mTHt1319Z64GMcaYFUvw2p1UVCszJRKtKXrSSHGZpZAdr9wnpi8LmP9bFXNs5FVZb6B3VgEgpFfurR8n2jxBv6",
  "key14": "kWxj1LKNqYqNm93zFW9RxUQg3GXAhQe8gQBJrWZXh3AgcFDAPX54J7r89e35oKoavLXnetKHPq7uGLAbW767azi",
  "key15": "36V5NCTB72c8ixerDWmL4oe4hixHdkLpsFugTz6SvFj6iX6CGEYziggwUun8bGrMkPgqZmPS75enLKTXsQZAvGn9",
  "key16": "3SMWV6VDheHWF5fXf517ojcAjU9kMMrGEfoWUGSaAvCBrMP2UKUjzCjgSnQxMXdkcApXQph9PkoHKswr52Jj9h3L",
  "key17": "3DcN7r7fmBxyc1RammjXvAPWSucwmjsqt7L2sBSevadyBAuxi5heUwr17xCXhJpkKTymRafDBJfL7jMWnGycPwLB",
  "key18": "4ATtc6nhTvmJxNosX5yuKXAVpNxyqke9MmZQb3jMNjpeXsDuUaaGLrP7o6pdsyrNgCo3QuT1rMWauNRQBFDzsSWQ",
  "key19": "4H9Rcs4LAxhPeiWnRKLYAHmW6nUtRFpPxisdgNX7znrAfYuFFi5q5F6akhXg9e7ykCS516RN9h8GCG1YwbAFMNSs",
  "key20": "3XZkGwKgYUpnJJb1TLVX4npM4f9ToFXQKxRVwtA2WUapFjNDMWkeeqMi4vPV9EETFjo1FkeoG4wEs9HJdbwtvkGp",
  "key21": "5YdjrXsmskYEKs8B2bpMQAhxDv54EnrqzqfC8Un44LnN4mHM6EiZeFr79YX8sotMVFL7DsMMjsP8TGGVHVvYNpDL",
  "key22": "7uKye14EgqCdVofowCY5qdT51LENfWhmw93LYCr96n5zyjGQHvUorqxTuTXScwV9JCmk4o6GtLh8iLSUwxfQmnn",
  "key23": "4kFq9Left1HZd4n7LV4RyK9Y8LhYfJuMiMqc8h9Udhxi4ZQ3hsHXc4BFy4iEPQEWN3wxTjs91QLYG8U8qic5fkCG",
  "key24": "4PgCiBj8JfG8peH1S2ZU4Z855CpUkLbanj82Q1uStf2CLcLAPXfzZXeXFr4Ec8wHsEuY13kwnGLLWRNLc8SGBUdY",
  "key25": "5RZquxL5voXWJf2xUczLJkUsSGSetPfT3t6Ab5D7oiGyqU2fNw1bDHgy8N6KibksfiSaCywEQC8emc9R1iQgPzyX",
  "key26": "66PRQMngcrwjxRUzVoCmsas5qZoxbMxUTB2GDh2YQR8My5xRjnSRrRLK3AiR19riuRP6R1GySB12pFBM8onA1Rw2",
  "key27": "3U9tH8cWrFNArjUxJfEC7B5sksRgqyTRySCwfvZoA8XnYoMJcPEdQQdCpWQQuWZbPaGFznDh5vNDGFSGuGAkYKdw",
  "key28": "3UpkFdKFpmamt1gVzCCkv3Awn6eTd7aAaeXdhjL9mgNLknYG7iNJLMYUzMqvPwiswsfgaDGsDD1LHFHzihjMHnW1",
  "key29": "4yw4m9moD5xKacVAEuAX3oLqk8Ctez4BQNw2TZyavMFK5bDK1Zs6frXbdkyDBaQW5jyQiLPwtrBp6uL35NUrdJRx",
  "key30": "5VZnLyTAzkorhFYdS7NmqZai7ieYEvmgSUqzb5LergxKYu3tNhyuTFr6V4mhazgJX6jv9aStULzBvpKjkVhz4Biy",
  "key31": "3oELwmBkCWX6wQngfQzDB9B9ckXHKuA6HrajJaWjeLiCMzcZ1Sg9vvTTGNrbXn8rqgb898Lv6CpbeyboLg1UTUCT",
  "key32": "4L6w1MyFvVeEPzxhAtFYTdWLbAbZArPRcGJ4Wo9LLkZxRLJwkwhNN3pMZsGj3N2J5MDoon886eSovKzncLJk19FW",
  "key33": "28qZScqYD9naPRj8Hv518JytvGYWTpXnwK1La1v2DDstPsv16tqbkR24k1PA5KTSqbTDn6RZCHNojx9Dy6yepyzm",
  "key34": "35TcYGpsWR2dx7hUbGtNhZCoEMu4gJzYVZ8ZXyXSccSAQR2B3SmFez4oYgnaeZPQGLHyXzxf24UckpYEqaRHBi61",
  "key35": "4b1RVAybunDfTBvxN9B4g1wJpAd1DV79sHw9QtXBRthmtTDXA8sGL7a1Ca2wjCXpPv5oLTjFUB5A8Si6XzKxmCAy",
  "key36": "CDujvKePobGj3JLaGSSj8n6eGhKter9LqHB6Qgp4ZuYe9GdfygmT6KR7mv5HFLurNrj3jvTGuxc3K7zFetEYREp",
  "key37": "dZwNioQPjgSLFk5egdLdDi8rdAfWGnz5ofE2xjTvDZ1MNhe3ge64BP7Htqp4kKZBihauG9Xqc4cdytBmLmhNjHd",
  "key38": "5GiuU7cFru5cjukZhGEYUfLayUkR58i9xUcn8a6BFPHcbWbSiPihRciDVKTeaYBZuALvx9RB44K31DQ7jt5uxXJS",
  "key39": "2nub9NYBofeCx1baCA8ydmxiaUWUpY23KxovZFQfs363w82KWFPBHRskLkgvG3bLGHbNSSYPMZPKw1M16F4xRPGU",
  "key40": "5qSkrg1y3gNsaNuBkt2xsWq7pv9316ngCS6ApESnrECbLcz6moDnQBMpdbCbAPo6smgAezUURBEL3BBDUe6AvZMM"
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
