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
    "2ZWbTtejGkVaj998BVDZpncSuKdJf1itPcxB9Hdej6c48aoMeato4sRdqUgKou2AaEWZpU6XP2e54CqPMGRqVELg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Ls7pVjT7HksbgbEWFNxTKPJpV5F5u8fra2px8jeU6Peac5atR3JgCBbvAQMyia6zjFpUyKaWGdwFtKWM9tZMms",
  "key1": "KA3rSe2oLHPfqFFtYX9LN7686rg9XuRrrUpkZfMWZTCw8kkESsTAyLwCvcNCiBHubCgowN21ydRWF2H36wcWUH1",
  "key2": "h6qMSnL1Z9hAzKsF2M3PQbbSzvR1aeS625r5nTXij2R25FmVMLsQHgrcoS57KkAQPwcYaa5oCMjmZpLRAYTcHEy",
  "key3": "4NEUEhtdhZuVXWGTy8miz2oqSCe1hM8RC62RVAThVTR9JBykhVqtJoheSS7SuuiAcpbbuCN5rJG9CC5rEYsxW4Xk",
  "key4": "4TLzsJQNGGr6qWsdByBHnVxq5URJkbxFLaD6vewYtLVCv3qkBMffUiiqaSSn3VtHwjZ8DaMD4Ewh93JqDMBQ8zUJ",
  "key5": "2Tc1K2TNocGtbRt1NqKgaBGsPBfzWxFbdhqLpcGsDJSCWt2m87xkqxALLrew3EwupYoCaCpeyXeKM1zKzJXp5x4F",
  "key6": "5UxE9dyiV8PSQ2W11AfRABtMGhANZVJnZQ9XZH8M77iDw3wxGPzz1tpEYago9bVjMCGVuvqrVPyBA4KDT6dufBVF",
  "key7": "4oMBAEpWa1c3ERujvZoSVGpmHDtPBrnrhqMaTY3YmAASAkhfJpqnC9s6phGBuM8k4siN3MdYmxgwUbJGaBJhnT5R",
  "key8": "5KeVTUZoZmumBcNz4smi8RSZq18s1eUtvvgFnEEzHFFEX5dTzK26xtvENLftHJbLujCCPh4fsfh7kXwHZ5DrmNF9",
  "key9": "2kfxztp7roL4VRMq3sK98JrJM1kdNu2cbcicCQdaw8CKJqVpwV7dbhoedEHh8D2KM8EkpPAAgF88UbYcp2rZZnAP",
  "key10": "5ZLk9sLBCw3LLiwiCwFV79UBU4Xn7TixVAawrjBTc9dpn8HZkGn5Yne13KAXMkFHC6fKpYXifWH429UnhCtxhZiL",
  "key11": "3iWaXssPGrkKJvavJxQJcCkrkkDVVe8HDy3v7JG6Jd8ABhwrebaPARyh9c8pf2k35tMVNaQ3RxiCoaU8zAyTA2Fs",
  "key12": "2ksHpkNoFK2nyN1VQ2spmZozZmuZUk6V6hPE7KiKkRgkWB4LqwKskhB29J4JRT9XDvsJ9tbe6LxyYmajGed4osY",
  "key13": "4bDzCZ8xq7SQFdLjkLQ2fZsjsAct2x9V3xsGeJYFgaKStSKRyv1kH2JbScCZE1zfF5bdo97irf4R2gHijnRCS123",
  "key14": "4ySSSAPcfTnPZoEvFarJenDe1q9koV872XJ6QfetBvK6L4VqiP1EHsdiRtWSGhKH3wRgtnoH9Sh18caCyGgP3sRp",
  "key15": "2AAozj6ywNwK2JeSmgXB2faBydm7gVRPDLXT1YinTbsYRr4nsvrqZymMTjoTe1bRLkzA1d4mnWAcy7QdkWbxzWMh",
  "key16": "3TUnUPNng47Jkq1nXVN22xWe8gVgvaFrvZvRa1DwxTFL8Ro2bgmgWLE8B9WdHLYvpgbxhPFT1u74XrvqaHvNyjQk",
  "key17": "87Pj3f6jdcsCo61J5E1VWchxcM7jXeMP8zDNib5BcnnzxfdYM3hL4MzFoATUKBjcwZcvDn7c4v63X9BqpmJCTUM",
  "key18": "oWnUFSDUpHaZQxGvSkf1uvyMPak4WR7R9T48YsSnr3dqzE8xzuWWBXs5QatoFDBoM3Denjch8JJqpRjUN1SEGSv",
  "key19": "67YDRhsCahko5spoRnAByXScPDGErLMek8x11x8uJYnECQRsZaAnvQVGH5xeyhsFjm3FEf37vPi8XTBnC8a4EhDo",
  "key20": "54VtSYWY34y9oKLs9Twd8DV7Je8WhzUELMnsVHP9q5yH5ctJ1HCdF9ihRFZzGGKZr5aGf73Pcg9iKCRR94gvEBAL",
  "key21": "5FqUahUCQq5ojCgpWPyygoStQ4EAd3ak8NbiCnARNNLDBVBD1EFriJLGwxBaKwACijCunCu5JTKvDz5yAW9qsLp3",
  "key22": "fSWx3F6KUc41sntdXR7NS64NvyaiQbifrbpHAPyinnpNXxESs3v26aBQ5JTpTWzxQdxcd3Aoe6nqs7S99juGg2u",
  "key23": "N3j4MB12ToG2oJjGZqWHHr4pSvZTV3j8e5oZmC3iK8AuGcAzNC8C9tBCDmCPRkHuRXAXGkKc5R8WJYP8AATAUEk",
  "key24": "2XNF5AT7anYAiAV1oFXyFovCQqifydWSw9hzCRmxozrmFUx2evxLYMr42oqgbfL5fvPM5sevgRr249ZiWrgJypbt",
  "key25": "Fzkkxg5fj88nUonTnryB5FSXW7VmpsAqP3tnmD8aKPumHSoSNo7XssULMcaEXfXe8aeaAjBU98E6XQqSKPKZfqm",
  "key26": "2by8QKsCCwAqgQtTjcFn7JFhRcZ6nc3g6cNUncB3bjB6XS4h3ij3x1aasMEAs4T3NAWbNB3hYhrBT1Rmu5o6Vnfm",
  "key27": "3cYmskTuFLS7LT2roNqmRcDAb51TBSNzsbN1gfsFMzBKnf4BRWD7ddbX1J7zfAmymKTQ2GZUSRnW66MnryuYUC29",
  "key28": "2v3VnyCc4vfPCQVm6tnyTZJf4RtTCR8qyBhRWVaEnCwdPhPdgYwNfBJVCaWaDrD1KZJtPwXzGk8EpVWSUBRzQf1K",
  "key29": "3dnSBjN2jijwEaxqzLhc8VEPwPWcRLoFYnr3L6y3GSgrppxYec3yc9ZKdeTMTJyR7JHDBGHyjei4wUbALSmiN73b",
  "key30": "28PWkutcKp8VzPhox7h9kRhhrWC3CG3tthHAvTyHwZWozmyXhYqsEkzwD3UuEaGaq8HNHu3fD1AEC7m1uoKsGdJD",
  "key31": "273fSHF9Ng9WAGZJGxKTH8NBknYiDXDNJzBC9VbJ192PcW1D8anQB4UTHSXXrCP9psPaF9fiaERYyDtioVrURhUF",
  "key32": "5EKMTkBRqMtQKdePgxeRJT9Yj5UWpkFyaREEQJphFdUmxXAuqdr44G3JpRzCpCCSz4o6GQzcgQBwEomBk7WvmzEH",
  "key33": "5zN7mz6gE48z3PjfvRdD1cYvaorpXZEn5PkUwFAcguxUw4oosnZiVomqYe6GGMoN5gmahBhrWbZ8DDqKggeVSAaz"
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
