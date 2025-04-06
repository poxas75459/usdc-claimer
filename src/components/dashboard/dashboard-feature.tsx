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
    "4oK4fs9C7snAnesvjHKv82CM9ptrzv8eErk1JTsji93twj2m9q6mG4kZNbQHdiUsoyb1X1mvPTd5exVH56xNUaRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZ2xHTk2Zf3CBSmThfEUg2dUQe7Y5ZBhHGpYdP2PXCHHEQZ8ANC5PT7E4gaN63p7HE3Bp1qNQJV6EDRUbPzkpnw",
  "key1": "4m6unfonUJ2EUWq3EuTT3qWTEwtuURjX6G8JCkHdU2Mf7uAeGpreRBrYipmtswfGRiSrqvDEWDmQRrp6qX3Wx2Dm",
  "key2": "2bk6Tq6fxBC9cWCsFEj7PkEo5mjRAsep1MsnUStZvtAVa9zXCoxuDXNu4btScL7khyoV5XJkqjHYkjCpdK7KvCV5",
  "key3": "3Y1hfVKD2oBtjmGzrDWp4GViyztybpL6rb6NMv5eX4wbJux7ToTG3pDe9f5jJXXz7iCrsesUtj8tpVfXDNWWVEqC",
  "key4": "tkK83Yti5ynsCTqnfeX6z9YC72rHgnTuFNmTMffthYFQc1Tx8eJTEUPME79dKP4y37n3yAAkLw6RMyqVRKFBKRo",
  "key5": "WmS8MjojKcAfSoyhVCvg8zs8wWwxeKA8PhhYn5jaAasYQb3t3p9rZc9mwsZgZNBWJqsMUpPVS3c4VG4o4yQm9io",
  "key6": "5VUnAvK8jDHA3ywDMH6MoqzBnCGhcETJnWXCqWvbM4YcCuqEys7RhkuRUQCXKV6StgLK7DSHgMZSg9ZR5Z8MDzPg",
  "key7": "5B7mNpuS1T6McQnkMTEB4kVmE8fNSB8kgLcj9mTsrTHkY2QJU5zDawtzS8yQak7kNT3WoHi8GkyA56ZuzkPspy4J",
  "key8": "3JGfYpHubf9i2j8GXCym8u1XpiJTgLJh95cpDL9Z1SmABuk769jknXpv1idkeHCA6tCd3XQt4Zn1XaD9A3rBVZBt",
  "key9": "4JVAEjctxZS4BcpHmxfF2cLefxT2t8x296wQZei88TTmXQ2QvBhjsSPUfb9V6YhZZXv5J3JmkciQN7DAZ6Bww7BU",
  "key10": "4mzHFWYsaq8Mc2AvUTaWR39D8V6aUvCR7p8Zb4ZFmj3ukAN6Gj73DKveAqhdcoRduvdzaR5yZLKZ6roa7yvXyqZf",
  "key11": "4DFJps5TNBi5S7zdnVPew3rne7ej8YttA6C6wjvLkb5Ua3Diax386TakHAHHCVzdgQzn8RJnRZPgbRgvczytgkAh",
  "key12": "2v68PiDzWS83GGvLbMS9R3JEuJrPxcGS6FV5sT4n3csFmHSLYDgbq6c4Cjjgrgmi4jmb9LtyqohmYSRrSrNPvce2",
  "key13": "4nAjzqxiZZQi4sFVXJ8ypTnd5dMv6x8XdWjwwUzsD9eyxmvqwXiBNphvf7DRnVXYqMjdsCEAfNupfQJLoKfAtuZX",
  "key14": "57wopYy4QM4UcjenX6jK8JTtVGMZEBrmsYJf7DohtaGRfE64oSZjwgocqSUCLiFGjFyZ7QEeuVJVMRmbb8hNAVMN",
  "key15": "3xpR5LGJAxCZZEjfyUdTxfmduijqHM2yZ4yWUVSCKQwmL8SDzQibK8jdS8m4M8dCZ6816EpJrqDkPVdCgwy4Cqo9",
  "key16": "5FU6HCb73LvPUkj2BfTNuUh8D2TCbfPFPyJQzF8PgkjU1TSHBsBKSYqjaV3Dy9PvG67AUP2HAX7dgcpzCxvFnaCv",
  "key17": "2a4cWEhKpdFQJyKSNsHnRqiRfxJ3kocCavaBo6aoezgoK62sxYUAUEaRgTVWEPSBG6DFd9DRnoQSdMvUmhHha9zE",
  "key18": "4bzrSekJKsL4BACNAahWfkwTdd31zAX6xu7fspebLVHbUDc6j9fF8Etw8f4DrjJXgxgNwXYuRjBA35R1qQrixgwz",
  "key19": "5nijr2UUVKEZtECaSVHjZbxcNCRaynB1Ho8PwDrzpPRGtYakdLu7di6fNYWeWF2hobdr64pjZZCoJFdA4K3RHFCG",
  "key20": "iA3bT6hhEMbFLxHx2g9Cc5YLtX8tU6ypvA8zZUJXDHY616xhFhGb8ZwbnjTFyiYiFDtCUXDHFxmakS813eo7rue",
  "key21": "5p2Qdj9CMM1qGnGK7rEDiqWLJk6Lid6nsDtaynMdzgtqHNkrykYdxpVQDZXnyrdV4Gp6PqBoKFXBy5zosfejwUi7",
  "key22": "37n2ihhzZPf3QUcBTLkHHpFjxiqzxygYRriB1UPLdbahK4eEYEMXEvusKe1eh3yFsUhg6YSiG8d7WFtwCdxtU1Zb",
  "key23": "9B9nxhMHRbFWBLkSYpYBYZhz2Xmuz7XQ1BejrJTbGPS2UKFoZCApfBjrtSqm8Nry7GmGTJ9yCzqPxH2TMRxwyDW",
  "key24": "53Lv1ArVqKmwpkbEPZLXjQwo3hJ9EQN5Qf9qS2u5PVXvYbR2jBbX7bQtLw8hrG4yqaJygvAZzTuDj8jcKnWWKSmo",
  "key25": "3WLQYMoCo6mVjA9iu8cTW7GPvLJEG7sBWgogc71proBxDKJvFFReADobe6zG5NQ5pC5kCdh49HQYjc9Ce8LL4df4",
  "key26": "3KgqrCQHdSeoa3MaHeMpzEK8d6eZzcpksxU47NbAp549giSR6po6gb7LJyEiwEjN5jvci5w134uR1DvUpgd9Tbjf",
  "key27": "4sSZtaTcKYoLENXfRaihnFhHp2vPuwKawN7x6WqF8ZUxGTwmcqJtFdwtAAgroGBjauEQ7mgCV1XUYqFREMcJp5Tg",
  "key28": "4VNkXjebwppd9yB91Evi8JhGNFYppxva1Dpqq1hPdz7CvYVs7d9VFPA86phTNvR4vAArPRKUe8DJigLnqd1RJx4X",
  "key29": "5cXGuFZhCxX2iPdaTY2kr8oGjRAXVw4MnnbQF3CcsS4jb4gj9NxGC21dRzD6g4sJM6v29Tm793jPemSCTRFeziMd",
  "key30": "2XjNCuGBy4e7z8pZH1ucwzRbgc8sos1SGU1Vbk1aKp415rGK85YzE6yrjHFci6UxSyEqvLiM6SC48XRh52RJshad",
  "key31": "XbRQYd4a31wWuEgkWP5Bt5C1GAe5LERrWZype5yu4zKDRHZoRp5Ygwox578SuEn1pBHooWpEPzYxqE3jGLYUhdj",
  "key32": "4QxPSEnbNen6pNepr7RgkzMYCeu5jR3d4sWXGJ1CHpvGDc8AKf9Ez2Fz34N41XfwevoqcZtxuE4GLzZ4yYorQDbP",
  "key33": "CCk2ji3vQxgurB4LV9y33iPLFHeGidgiNk1sU6x364EnNTfdw4dXuDk1miRBvScAyzYdHdLmyx2zmY1udTcj1Aj",
  "key34": "3kgHuCLFuzGhgwwvNcAZHgGYZiLQsi69WboxWAXebzQejDEEmaX8idACT6T2v3AXd49qU23ug8M7hqryZ29Dyq6h",
  "key35": "KjqMnvgwG3da5RAaZiMAEgMcLtHdeCXEac8DaM7S8xyPr8eFKFfCjh1R5mjRWbxKGi8NczZzU5ucbbiMJnRYivZ",
  "key36": "BguQB3pXdmLB773Vf2TQu5QpGJzr5PDc8hnoMpEPs7ShAASJimdw4dqg8LbGLLj1MuAwWKQJG1HQnnVZamDA1Eq",
  "key37": "3H62hKc164G61etsKFoztZ3B4GBqGkLagEr1eDxsRu9rZuzLcDzKhW1m9ji8assESN6NLKH8X9PyFUjBCa95YzmC",
  "key38": "S1Nzo8oUQv5wnFcg9KgwDS9z4vy6Dhm9u1ke3e4hhCbvZSDZA88xgWatoV8QuUPpjoLzvvsYzEr8NiyFKS9v8BE",
  "key39": "2BptEHMZyfvZp3993fDHrvT4XUWddPPqPLKza1XJf5EjeeR5kHNmqATLjyqR5t9KKSxEF18tipG6Ei3N2rpUbpBp",
  "key40": "5aJG35YC4Y1SPoyM599fpHDdYaHaSgBHQj1wVXKDdvceguSsqY29vqVGymFEUodmN1HhXh35rtUTxdEDTc1RY2bJ"
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
