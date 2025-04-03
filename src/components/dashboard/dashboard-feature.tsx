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
    "678Pszg3CGAJyjqwcPmJTZ3uJeQL2qeNavXckxBJuiCnPGahpPt9iUoHkXEpiXsob3PkEai7hmtuh8Rbna2WVkYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZrQXpA5RtwwFYVWnm7mYpZaR6JDveSgWCNizMwiGju6WtFZFLGfBPWWzbSHLm6PZxCMiNwxhu11zn8wEnpWcDA",
  "key1": "4j6i14QKPCEJHMUheTfTiLJqt1iwKEyfXd3fLW5MMebjJQLZDcM2yzb3USbatVBmd8qxPiduiNoB8ugdGLanKg1C",
  "key2": "ZwyzsLYruLieCt2S8QKBAb4PwRQYGTTsb78iC7ACDdGx6FCRUz4nUk1mmZc3yHxzCA1uDcywsnzY6wjHFR3xsqe",
  "key3": "ksuSB6Xrk61ajyKRHYnCcSKuM6T7oCFzkqxf4nrRq5ZiFseBuuS9gC7mRyRFzo3JU6NjRveMryvvf85KqcjaBMo",
  "key4": "s41UexBaqYKB6qBDFuu78E2ukFY7kgnpeuah1XuA819ZWqTtrCQEwQ1zCwffT5Zbo92Dp34xzxe1w7QFQ3oN43u",
  "key5": "4m3BissG9rDQAtUndP9PiQjpf1KLg8g2QzPYtLWcofbF2ZJotCjv5c3VFYKCsBoewNX6VET44NZ6MfyYsfua67Px",
  "key6": "5XUwd8WSfeGFs6KB9oY7gh23TGsoBWhcnQWMUxDfTbAimD5dkxxEfoYdntrkgTYCWPd4mQqnCshzCdovEqqCwZQp",
  "key7": "3nKtCo1CxEx8VJLVCvvegUt8QCRKr6xtpPK7htC7znwaQofZFwL9jwZRtEb4LKZrqnWQKs688wBfg7otgoSTcPqo",
  "key8": "2ABe8MnMmAhyYRmc7jX3PjHserYtpsvM4HH43cZskzr338H5vji7eFrNaxykmuwXYowDHpXNafRE9ub12jCdQ5AV",
  "key9": "59VLEbfKYdc6KX5sobG2RnKNPk8nVuzTeqb5sXLEPRLR54hnh8YVfE1KCV4sVY2EL1xyE1ayzi85MLFuvFcLvoac",
  "key10": "2vCZcxmDeFUhcxSeavgeunriwYKHiTQhba6wVZ37r41hQafW9U3LqickBcNFuET2ZaHHVo3PGswnKykbUWXEPZek",
  "key11": "3Q39FgcayUwWG57ZECA7ZsJ2MZ7koaVhDPmUBMo6AVGH5BxfMciUip6bJJEefS6z3BovzTLYsHhsVeBn1aTegqaf",
  "key12": "3RJgULEs5iHorkQPoWtuJA1knAVS91sGguYFYUjVqv1FgT3LvGpmJHguQW9eYLWoagVnz28MESo8pcdC1Z3dg8Sk",
  "key13": "3kQZamwKHbiUG8Hhmnyu6b3sgiU4koBjBbe8SkjdVZFAjq6R6kLsYUKnfUfEcAZvuRMkKDHajAgszL92MqYvJsKH",
  "key14": "JyktaWVFZwGr7NtYQnuF97dcQNfddcjFjRWwdgTmG74D3wAxaW26EQfh76H6s36oFH8JFa9ecEfi6ZS2fcM6vYJ",
  "key15": "4sHeV2VtySCLBFeLJ4fmzsLHFDsizc8GCcCHjZJXP9yaTwv7ZvoWMeEGcekx2qEoZfn7jJmXuzgRWwqVdP4w2Gtp",
  "key16": "2UAN65kUM6uofoix5j7EGtKYpzCUu9kxcNNVsV1p84BH7Wqr9AY4dMa4W1imsjbhSqTRSNdSUB8VKypu3mLvhyoe",
  "key17": "2mVx9AG1ptMxrro51gR9LQSrAbXDQev6BVQ7avrR2ohpmkbzdJnWbNi8bLxvfsfDXG5hT75wUziPCbo3Mduartxo",
  "key18": "4P86v4wqr7rvh5VLKr51PBY1WYer3KyDsLyLFJQoM4dRkiFFBRczvnrXWMQcGTBpyQyG6twshDDg8ewWDXHXB53J",
  "key19": "3NqvCuc8TchMEftb2B2qiDGWDoEBiwvbwnJt1QUv4aWMnwcivFSTNsUdTB6PPhJVAEsyPKpFXg2wyU6awgs83XQb",
  "key20": "4B1h8qCL9neH9V5RvRNeNsQrWnTVUMXThQ6qHbeFKzDwxjqfHe9KriypTBABUqJjQDE2v8FSsTHRcoFuCqLXBdRD",
  "key21": "5MfqJ4oyFRs23XgGcaA5Ew5i7bnFCa8NkNhDpXhwka7BisxYGvbj3AWMXzfy6GAVxsCuQEXLfN1QtWJyqLjRaRSD",
  "key22": "VgrshaAeU9QoKbVNTroTXo6pZESFTPnEi2khmbi4NjcFbWMaKpaqAUwzR2iWJ3qTCgkwx2dtdrmFa4jNHxzjKoS",
  "key23": "5S3vnoyc3TjcKUuPzXyXPD8bt8A1rc6XCxFV3bjbJ1eMEyVJbZTVUJNPwipDoKAFM1jHY7LHEnRSMkT8GxmTjmzw",
  "key24": "5LQjzT3tSWTjKb6z1MFgoTEtKmb5NLywb1eCc8gykoZbtQg8cyHq5pspVMnAbJe4i8W2p6mmBVyj5G2pBSPvfFdP",
  "key25": "5fstVwkGWzPQHfUMWZ99cKb6pwHV1nYPfAkRvMXfiZFT4s75YVwMHnr3JRU4KZGuHWoKcAoVRbtrupyMGY5SZ5wb",
  "key26": "4AY5NJ4ohSscQS9MtpQegBRupbrjZpvk2rPYnZxhFGYCp9gCDfAAHDG1u3okWGYCAQhLiryJKLVkUwYmjmYDYbdM",
  "key27": "4At7yaXjmFSDmBRR7x44u685z7eaqfLqEmgAtqNj81o4VP84y8mBpvhJPpMTQHGCKSHStTko535YdqEPTTf4BbhS",
  "key28": "jkE771piCP96R584N4UGwLgCY8g69pVMqhk2etXEA6AK4miSp9N2GzS5doJjsUWtgv9g9aXPSyHW2PWciKNU9xW",
  "key29": "9NheHmCKpNvcwzdaVRcpsja3ebHgX5vKGZsWKzY43fGo87Up8r8KSQ5t4NEsRnnGwkYM8YqZYpz9okpkzooFjso",
  "key30": "2sYPQYLj62rMYPpKFa4A4wzWbVyBHqbYB5gByxxX4dzSvdctJ3VrbT9ca5k5hdq2ubomuQFB1hJn4hBwfL7sQi5f",
  "key31": "56r5YFq1zpQaAf31UTCg5o5pGSWACsWHBxDYgy5FkdQkEvvvJNXNowot5TEzjHQSpvFopdCjtye4tnU7kVCHviS2",
  "key32": "2t92D3y3itCVRZSbXwGggFD1qhwPkfhYavxsFU39CnRZ78MakyKsJ8MFZZw6eFxRSt91nKS64qzNCVsp1RfZEHxa",
  "key33": "R3tWvvvtkKhCr7g1ym4azRRCpo1RzifZRJih721pFJ1Wo1JJGm6n2hGB7EN7nTSv3M6TynGmmeqdps2uWKf5vUW",
  "key34": "3Heko38HavQUt5hAFDHroLGW2W5SFyAtyrZjvNbKs2RMD3RDEuCtJQfXvU1B9Mj6qmLEwKebszkrCZC6iMtkgke1"
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
