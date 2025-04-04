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
    "2JaQKYAEygkPyANfYZJ7g6MCFdKAcYZSgzGQnjnZNLvHiiBfgAnPTv7k9gMJKEYZt1Xcm4Qm23wgCYEpoL5qUoMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3CYjs8B3Dsd9C8x9yeM6cVv9vVcj3T2yjyhKgyXNDPqUcmUmZoedrcmAk7n1gJkpiDkTsK2xrS9ZoYHnx9ejgE",
  "key1": "3rfQZLinNXhVCpXZRQaSHCgKnAG1u8fBWfi5DNRdiAdzQH9PrmeQZCA2i7zJix96c88R9XJWnHJWyfBYvqoMePQP",
  "key2": "39TJXtPjzanjoB25Zb1Xa7PBnWcpgpjT44JCMbrtJ4bHFAJLTvwitJzpAUmzfyjK33MyugwND1N3iz46ceXXcoxR",
  "key3": "3G8w84DtRhQCVPUiXMx5ceDG78NabDPxXQmWi49PV2a325aPybepdfhkPpEHKF9nmCTDgWUFzcwnqeip2jChHmRe",
  "key4": "eeKVHqmA8Pggs98ADJArbWDJgzMVDEhrqtLA21KkdVNu4w7ooxAWonxVHEkJCk8docD5URTJAGFoikDaw4vkGRY",
  "key5": "3MwpAkDucewKHqsvMZXGKvSPwhYLXEHxz4gXjCbKmFKQqfe789augdBiZEYd4nDdjDg2kuWL2P4MPZ5JtEj2KPhq",
  "key6": "epzH3uyetyRAjCarVjAU3Nomdy5YZafdku87NNavTNFBP4CoEV7PnaHLSuwAT8diDaFCWbdteHD7JgXEgU1xjTC",
  "key7": "3qT8vpNPdgbrjkhzCpQS1JePKbbBbB2cVeLKPfJB9LxfndtWUgWYULn3zBjtT5GXtarc1FQgtmKpGP4hzYWY2HDC",
  "key8": "3Gim9RWe5m2LJV3xZHSCyQJqvtnm6dXpmMXqUV6qdKeVfYdPXJHVcTnug9ckzUXhh75FqFeReh71JxFNtvXcZGtP",
  "key9": "2d9vZaYbhmA7EBMigjJQAgpy2Unh7iNvZbMkqdQfyxh5cjoA3Fi5Eb7KU74DcnKggBdNHQE4THkT5vNMBxfvXEsi",
  "key10": "3aGqNLr5GcQHKayzvRNkga3SSQmcQEDfGjtMcPJ2z2KEjzDTTksuDbRJnuBBHbfYe6yeVFx3sVgARbMDoT9CJuHB",
  "key11": "5SMd3ci1FjQetFFzpkHwoApkTWMuBy32vqn6d8UrLb3xxZyzggeBx9njdHLenQCHUpuusDHviFumyZ6BEjE7h4rt",
  "key12": "3bsC8iMVoFDGEcm33GKo45zwrobuCAEeyFzyxZHunX6i5Rdc7417LfLpZpspPSqTVaZgYbNdhFD3xFhihsvjX3Uy",
  "key13": "sf5wSHZi3RPuNNiy92S3sXggyFrfRFsHzNKEND8HxsfXCMw4VbWk2KY3xBh6VfDXaWXZkqmbxSDekUuJk4iCA7N",
  "key14": "4o5GnSxerXg5WgTQ1XuCSjbzZow3xdTmKjRFUN7Kxrj3K4zUZXtWTmeXgwNAnNQYi4nANtV22rgVL5tzpSjaQSao",
  "key15": "2YtZt9FDGYHwgVQLbLUJ7cTB9KK53vcHRcCGV9X3osum6kF3UEs8sqtt4f4Jiwc2JK6bNLUoveJydErDyQiWaTPc",
  "key16": "3UugC7gPm9j9QwvgTfJm3Kbq85q6KpD5qfKgwRXCmvVRyEcCKH6MpnwXWdhP8btPJK3Ka7XGbYhVXF6o5EcV8wzG",
  "key17": "8mP9YQWfFr1KDSHGjpjjqjfuHr2qd1eAeCTtiraDNybwXgyKBMEWWFw85sQQaX74j59pDNxKcJvNrqP2Cm9vVTG",
  "key18": "28QQ83DtBawvKHBaSbEzb567tp31BTGSvTqycfogRKrAoaENBtoZMgBJhLXQSNHfwPz7d63dRY6NJ25WtdE4A7na",
  "key19": "3JiRDs6LN549A4XJ1y1GYk8WLFcFaew8dthYfQNaoEgc1zg2aK13hxHXjDNzRSdF2UETB8BuZPtM4wEZDNSqRLop",
  "key20": "4ua2UfMueAbW6twSiTAWrEqjNzU6eGFe1cvGKqrQVfcPPsS1bNYRizfzp4NxsXf9TqFmPvMTo5fkjfYxbQaqtCov",
  "key21": "4uCmwHjHeDnmK8X1pSA8vHGsxaGi6epAuqzxAYP7gHMorpU9VrgBbDjZQdgZS9fHSGdDnA8yUfprVqEkgRYsgHaq",
  "key22": "XufPAm9zbJ1ohpvKyXbxGUzgo3fiJsZ1oDx2t3Tdj3isW8JEh9L4fSeaL5FRQCos3WDQe6rgiJDuehjUhqPgAa2",
  "key23": "5KciW4frkMr4D5Nya5xCbUPz27KRvjXH5DtyFa1Zx3Zy6GPrX251QBhxJQZLzMzgNUBcVMVtpZ3yaAyxG6ZLr9Ew",
  "key24": "5pbsHEAZ9tEVauetyAhFc3GSwVwm6YCpXinesEW3Wv3boGKP7NXjJLrTrViqbvtTxckRB3cer5HnFKqxw6hCATJA",
  "key25": "yZBfHvLuWEkJzMxVpDEQfqP2cU1kF2sRss5habuiQ4Vgg9qBVCH8XVNhBiZuubfJcsyYoAyD3QMxwfuqYXtX9V3",
  "key26": "4JZBeuQjpEwmC4Z6qPGhVkzaUcgUG47Ehf8fSUbafFFyJE1eTNVPUWTRQrcwUUkevC9QHdLAhSjh5p4sa6SMDLt4"
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
