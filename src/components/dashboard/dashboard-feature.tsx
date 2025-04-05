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
    "4umCsHZBVrUws6RmUdizzPRAxtDtXqSSmU1aDs8ue8MczxEDmYfzL91aipEKritYoNYiMkxN9ExaX6sQyUbef1o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCjDG488aBA3Gc6nngfeexXm75V59aY45R2fagDEJ1gu9BrPR9eTPcQ6GyML1a21acRamp4To8ZFjPLyPbf5a97",
  "key1": "BPy6BaKW4h3HNkat8m2zGiEtkPen9dY2MsL8e3qXFXrap2NKKafLub1ahyFp8wRydiWDKZSE6MSKjhhhRToJnSi",
  "key2": "5wKAMscKzQ999yNJYghkdTDpwY6kL3sUBCRtTod5HkuT6b2UizLEbQFhXmaEXYd53jGy9M5EHKLnM3sJDaRmZCys",
  "key3": "5vsWd4HuaLgEErXb4e7UNtah3tsCGQiSiUMi2yd129To6dXKY8inG5JLcA9mLd6VsUA8x3EE7X61SLTeiavr4o66",
  "key4": "2fmfY1t97S7vWAFYKXCZqTMTT4FztH8ZfDcVSGiNM6pJABRcx3b5yekxes3n4Q5TVZ9XvU3nkM12Jd7dJijiuJPE",
  "key5": "5sD8JaS4ccpZjrzn9KaHujrmjz8jjFigLhDC2TJzRGKZEJUoZuRYziLTaEdpNG3L1L9GuDyAMaNeAy2mBUDEYZw4",
  "key6": "447ct1HyQdyeLnBjKCptMjQ3ZpyDtQfX8aWYfHNcm2eBs2o35PENLckSQua86dVBf6X37n1JKHgZo3P8FuqmuhsR",
  "key7": "3chpwia1gKCc8mirist4qFT6GdhUo5QjV9TrFSbuRQtqjyvNJzaDR5f7s53wfMsfsE6T26429Rq6gVG5NadDuby2",
  "key8": "pGR3TQFRq1Fete6uic2RJ3jR4myvSA27Pmr68qtg49JkmCrkSVgM1WoKRotUFkTw2B8tkYkHTjvMWXYAobR3Ph9",
  "key9": "5E8WuV65Ya71MegLW8STMS5Q7PFDajh424ZpxVWRtpMURNToNQvcW8w81zDQrX4a8FsNb8YH7JRapYh6rm3Lv3GP",
  "key10": "4pQawUzvibvXFvTYkSP5v5sugDHZJDgUYmUtTDqDCsfGHXAnnFJbdUQDNWMht3KHP6x8CLCSsn5ujuASEj8KFHrk",
  "key11": "5wqBJ3kQvssSMXXABbkHVmg8jXcnvttZyGzZqNXSp9SBmZS9qafXuzx2bRVLzcjjrijVAVGzmj25i9GRHVnhGbs1",
  "key12": "5cmFy94XxE3eQ5p8KV9EpHSSwmJ3tEDXp4bX6eWej3N6vuQEBrQ8nB8Sznwrt2vnKX4uwGQTe7CZtxEMPcDsbswq",
  "key13": "4fikMMsCHoR4TBWvPCc7LGkgKAETeb28q5QF6uYb6cAcPCKpn57y4MzThgEJAr12JgCz8Sr9ew2vrLCP4geU1M1B",
  "key14": "3NbCEC5zethqpySjUgbMubAfsDKU4G7Nu2boLaG1MbuFrnhA1FoXgQyJst7sWrrQJMES8FgYmjafgHUdDt8Dsmcs",
  "key15": "3HUtySs38cmJQT9spsTiCXUV8PiaYr9Zcyf58kQqyUC69BVeWjpXT3oKkqzBUjJn7fcsnH8P8nB8T147Hi2M9kqT",
  "key16": "4Z77LYaykmV4badtB58U51RbMZEgaWDcJCz85VZBbWP8yggnJGs4zZqcvWS9qhPvG5MMttvkTTwLdQHe7KtJW41f",
  "key17": "5ezt3LvH9TgFnN5jxDQwhoTt57v3vJANuopMK7oKzimabaBGyRYiSo6LKA6ZfMh8HeUFdtZXufqXqZBQCzBaNM2R",
  "key18": "EqLQAeRdr3b1qxantur9xzmL2yxXSJ4b2m5erkNv3EEba5TMPFvVrmtH8q3mP1TPpmgRnidCRFy8epEsAYmybiL",
  "key19": "4zj7tARFYRozByqMATbUHWvkAP8YVLitypLPcSeQVrXoe1i1uen3WZ9pPf3Bv7FjX7HuorQsCibr1MSTtCmusYHE",
  "key20": "4bJ7FHr2rgoVqMxAX961Hc5PC7Gjzi7ExTcUyYhFFAingJtKGTxcKqELDkD2CLvqkyvRLgnwoRQBiEzskS9au3aS",
  "key21": "LTJiWNrFo6n5unYcrdLC9vrzpBsckU7B8xtunvnePzYZ65PaaaJEgbrEjp7NTwHeBa1w22WmRtGbJ8ivvGYqZy4",
  "key22": "2rgC9JpWD4taBqx1zmVwATv1aHrQWrt5n4sF1MNisyv5c9wN4DdfEoMmAY6emA8dduYYrJwwwk5KWG8jFL2qfvmV",
  "key23": "2ZWt7hHpxGzvzSFbWWvCPDvR9NXjjmbYtRLaXhQ2DXE4rt2J7vSNneenhtjy2r957KqjfTGU4BJz1HEM1LvgA9pZ",
  "key24": "519z91J2iygeWXPdTyDn2m2Zp93CPwsZySYZ8jEGQ2C8DQB1JU8xnbZHZxP8A8jVNQwKqdFgEMqJ5s4TCj3jdQaQ",
  "key25": "2HAemA5z1Y3jfTELD9ajfug4Fweh5wyrCeRjTmFj3SYct7uQB6J8SyjQMT6aDpp8ypoyyQMeNHf8WJehGQewKgj4",
  "key26": "4j6DdVRHa6rtbAFujP2z3Kz14qTycNx8YX4x9WBoirWtj5KUbq4FN1EF2z47db9uLLZGGAmBGUcQMKvDSBZbWVRf",
  "key27": "2foP5sd9z1NkV5o59RJt9L8nJ3gDNJiU2o49TTv78YcnbPruJAD2BP7ZELEueFm2sdCTZmvBVmxEGGA8R2kewvCP",
  "key28": "353RcLfyhJbQoQgHwSGqC1xEJztZAMtvLMfoKBWH9kgWRWnWfpCD767pVkfTqEMgSyQoo9XVh2C3uyaJbfKXVcQp",
  "key29": "NWKbJ2o5LRywe9aha5eg93EuoEsSJZrKaFNM2MjW9Xok88UT4WRzJD46kqe1tmq8eWBgADveeayNT3BzYHcrsZR",
  "key30": "2X6wuovbwz8rMLFh41uQeSxxAtqxvvkKooazTZ5hqArm2kj5xExmwcTjJ7JBEuyhtKwAa4AgA6Mui57C5q7rgxR6",
  "key31": "4iwAeiU6zhtYK1vxdZJzhS4SRXdfwKz664hpMFzW6Qwtdp7vMWDf46WVbzHZZAYkNyvNC5xUxhhPVUXmyBPYaHBv",
  "key32": "4Bc9NucJdQ8oDHeU6ekDA65VbgjLT9GpYyVoGujB9kiG4xdBNgavtdn9VFXvfAhRQCfBkzoay5DKN4GPE5kntvX9",
  "key33": "3wiZqCttVE4czsgeuMfnvMwgWQGuJ4bRH3hF4FmurvuRtDzB1wXWPZviBrBM6FFxDRCAj5PpwDQ8wogkXDXANVGU",
  "key34": "6691jqEyDFD1iBsvrAu4kbA1KfPRSYNd76fJ7qXCEpgzEX35Dm8hd9qu3JdqHNzZTZE2gNPN711CcPt7F7quZS9b",
  "key35": "2b3b9MK8iT53wQkkyfkpxn3Cpiv38VQW667bzpNC3sYrK5PHm3NpGzDzUwT6LCZ3nX1SEWEcqLo98F3a1vstYaw4",
  "key36": "2SgtFzwAo4mFNSGuV7SCJXa7wqpj15p2HGJYssVwYGcigMv6aMKeu8zTUH2YTNbhAuFPsZbyVHZsWfQsrPKDrLko"
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
