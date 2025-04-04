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
    "4M4jHwyamdVVDZZiyT39LznbJDchKgEbep3qQvXGfqFM5hNhjkA5dEMqWBG2zfE54jBG4NndCyf4x8LX6i1JUXaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FePTvHL9Kh1ehgMT46dzwSjF7qdXSUaUa4EvJF7C53L62StYmjdz7qxAXXBFudNDugGF3v1rYQwwtankPoX4hRs",
  "key1": "vs7AR23BjsZCqzLrSzQRZLmyw5XVXWeNy7oxdrCdJsFCSWB4J75YHHQERe7e76zXaBdWLQPXghBC59PBeJwNyRv",
  "key2": "TR6wn3LQ7qB61c8Dg8r9eCjxahWsTqbYY2GEhHWeMaWD8brGsiPtgVthci9VenxgGrAbqakPmMX5WRxZGqdpE4S",
  "key3": "21f7P7a8EQNYDaXCQeqaXnMYKqPfhThW5GR7WSqB83rT8tqRaY528SGHqKaRNY38ZsWEF2jdhvxmsyFkCBgrtofF",
  "key4": "39iqREpwJpThke5z1CHMjPoJ8pCn9eFBsHDQVzca7ePr4SpkUArD744ZZNv2LHpPJd91YrmJ4FmHXfpTmN1T2eQR",
  "key5": "2NStggP3yTwXeSaMNb3pLAEhF2MhgyNSi9z3BixN97oFHVcxJX1vxyYU1UckZSEfGWpC2G8dR5caDXGgSY9kDWVu",
  "key6": "kSofQotiikRLtDW5ZBef9n7Cc9rV8Eo7FzDRihM1QM9MnZp1ZQkCvbP4jMgm7DrsKqSx3V4j1s3E88hT3DfBPXr",
  "key7": "3rT8fypw3q4ZDHjYVKp2g6jsuoauhzf7ME5XySndQ286kiVKNSHr7NekjW1SmdEXSmFU6xaMFLsXbdnsgV3GKGRr",
  "key8": "4ZzPNpadAGj62YsdZubQVcxCG1dk6uRwgZCiHs8p6jC7XdMHNHiA1e1hcJVRrHH3DnPZuhGEX15q8Laqo85CgrAZ",
  "key9": "3WgC9DHbDyNYu7knpvjB17127S2bs1iv8LdHPpSQingjXCiq56ST2Uh4JaxoojLQK6ZvzAGGCrePFchyL5EVu7Sp",
  "key10": "51TnJdh9kHpmhkrSwWheD2ew4G1fbrdttUwAMNySE9LmRPZRz31vVCZCmaifzZWomtc4E9XpnwJD1Qr23cRUvZap",
  "key11": "65eiKJSPCy8N12x7PJRQKNi3FXioitLb7WA2YMLNpNfMFxbZvnANeZJnFaCMKEBnRM9odz9BrUcPoDGGoLipFEA4",
  "key12": "3G6WpuxGexgn6mQQSum4gpvCoHPWS5mToigbiB3je7skrYV1sCBjAU17TJmpcSRJETawZcJMCCpsKtmK2RaM4nPa",
  "key13": "5K9bzk84DwWSJLPJykAR2sZo2h5z3GZsvofidiwfgaXBSPaWAe4Gt9Kuts1FgyZmzCGLWjdXLsCz2L3UBftW59mr",
  "key14": "26uyG2FSMsA3WFKJTut3GhujkAMadQbavs9ekLbT2ZhB1rndsR8UmsmB5G9RMwKXh9Xn21zDaCDYMsH8W9yPgCxZ",
  "key15": "2jrS351eVVgHAfMdpbitfy8GX1ReuWnqfnyBHqJHxQmw4Dgc7Zt4Gn6GPbPTYBrUXezjfTAohjozWsvvPWP7oaEx",
  "key16": "eNCKQf2vo3MYoiYUbssRYQ6JTVUVKqCajSpvrn1uGCJJi4UwxRt6F4MeBdxGDwC86UykqsJxXajazxamoT2rD3M",
  "key17": "2NGkxLb2i5iFxc6bs1gENTnNXfv2HXcwXono6tMZLVTvvxkLJrpZ6qEbmys9yWhMzXDXkbbGd8x17JDd3pJXRwb8",
  "key18": "5tqUHPkZwJxKMjJu72QCfetgt62px4N52c3GeFQvm8Cvmg8PcrMJ6DDYrqJJeycvjeCFpSZLPH9buTa1yghr2yMS",
  "key19": "3vCLRR5eL6ChcGBkAAdf36XxEF6Qnud16mrfNozWcqYfypUpgCkjTWeqf8pykyu2qYbBP5jngDBc85a9SmkyNSJr",
  "key20": "haHDshgDEprnZLhAxUXoG8MXgreSPYy3N1uminNDTSrPHZRx7gp6dKiUDZG3B8wVCRYZMzhuwC9N6zXeYc5PzB4",
  "key21": "2rb4sVfLUvvbYSCW8Px7sdB6UZdMA2QFb1N36Qrv7UbZuQKfNvA9rXU8Cg5kDCMBdQ6m8GaU65QoaPHYE8bGViR6",
  "key22": "5bDnt9T9ojfWLWVvn74mgCuZK7VkAsJiHNf2HNfAjuBjY58zuC5sRR1SjnDWM9q5Lsu34ECPVoTh7k5ojwt5ALxr",
  "key23": "mThGzHQYcRKUNXKPXf1yZzQkST8rVvEZgp6XXmzro4A2aMFcwc6BxptN8pjcP7JuRnCaM5Hd4GaN4Jg3zLp6hsB",
  "key24": "u7xTNGQSwdb1RaLcLV8rE2ciH326NUy5CN4sF5JKw9yqvAbkvtrshyGXB6BexyQYkytBAKzJDsrLbsaeasrUx17",
  "key25": "4RsLdfURTvZPkGZVeP35jwmeJvVqdScxwCi17vQT6zn69non5kTuJWft7ZPKz5CPKQcN3jP7pYkK841joGskCdg1",
  "key26": "kr8P7rgPe3c77PjDovD1yLHiPTZRMXVPn7yCw2TExtxABvaaijvZqUCjU6wBBcLqQaMtbdP7yYnhwbCrELHqJec",
  "key27": "2ghxs69p3wtufUG37F27gELb3mDSho6cuxAhtzMjwfF1TaEB6GHKNu1pM2ex4AGbogKgarFpigBpZPrnqRijG2n2",
  "key28": "5VkArUjP6xP2H6BsHpNQxepCV12P4kF8uFy5FSD6ttUzz1hpLoQHmvEWT5Mb8u1xrSMq8xCH73oncXDYgtf8qPiE",
  "key29": "4kSPaUFCtF4kbHR3dH7pXGKKxxnnXcZqZ8Gid55afJ84M3CDTZe9fL7V3Xf9fSTdXuMEVs4ngWQYgAN6xx73EYU9",
  "key30": "2obWpQrA447fyqHkPD6uVnLqTqPLdQsvHkDUbsAjdBX98vniQWYHkUd2YuUwF1b8cL49qJfG3UFTduARy2CUhfi3",
  "key31": "5og4UWaSBJsRqkuMsmw4HSYHW2Kkn2s6VcSxdVgwPN61qz4pBGUxSS7HjTYv4WpGEd8oqmSrqDeAz5pGLV9gbYeg"
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
