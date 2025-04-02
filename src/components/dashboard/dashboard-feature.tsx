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
    "5xcCJxCZrMUp3evsiiUiAfaScA3DP1JrNVaTaHYzk4N1gZghs1hEPsa1bwophoc4q9Kt45JWZcmQ4CsyXCCadF1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sY5ZYDZrEEVPsGeKbFvuzJ7eHbMXRnYWawtguE86Kgcq7KXY34mQReMvadX8EbWRYrCcSTR5q87HNVd9zw3dDTF",
  "key1": "2LBWo9q3pYguxTbRDnwDbaa811ASZh3STnMvZiFrM2CtYT5AAkx9uk3Ss6PcfYidtUjesipeQKv2rNCMb5yNBzcQ",
  "key2": "2LTqAdxrZgGjttqTtz3higaTna5dYjpxZb8eE7EEvAVHVV7u3BoVPoBbPqtSZ171zW3ZQDiQaLS59PWeEZupv7Ce",
  "key3": "PZNZoh31vwgJcGJJFjDGtetSSxCeVsm8i6WcMpgj52EPQzzo1ERaP8pkoxuWPhv7Fq5ES5K9NkBuFuNfKmDpcZX",
  "key4": "5QktTX9xF86uvjffdDzfAbQ3A5VvjrNf1URy9jscb9anWse4WkhSbk4C7u8DF3ybPQsS7rJCta5bA26jsGDWBjHo",
  "key5": "2hVXTaND6KG866yHUfiN1PgJNHa1LeULgsL1ZsbXco7mhrNsCojp8qbmMQPqsEFi3LZYbG9ecvqc9ZyQndPz6NyQ",
  "key6": "2KJXZSDZFi7j9ESSwjggLt5FChAEnXEgYEYchnwkveEL7FFqTfkrqVPtUZ6s12iey8s23zrAPopLB3qEzvkPz73f",
  "key7": "5NsNahMbfqpMeYsKZABUE4sXiTLnbxVY9NuKosE2qwGzAd2RCfB9WK5QfD1fzSPSK3Qkv3iNmgbdHtjEknBJHGc2",
  "key8": "4ZE6Es6t8njbXD3Wf284PmrbbwpCPWGrwHe87fSawXrsywLF5q4XV2FnbN4SCfobbwFLe2aByQ5eqEJREGPmU85b",
  "key9": "5cgwY9PRDimWhJKqcKoJHSNAwGsPmPdbqJJLmv14a2Cdv6utCyuiuW3Rhep21GEkX8uuDctppzzC9i7eHUof7oAK",
  "key10": "4atXf4keDJ1irVFpcxNkTX1gvrNKBqE8SxK2gxop27YZX3bJc5XWKHnMxy5ybwWLZdiqRAKu3fcqSVVVyjFGYXyP",
  "key11": "63qDRBMQYYeNG8VBnntbr5ASQXYCRQRuzK5sArCz5dJUSKEKQDbhLKfqQs4WrfA8CiBVJsDtHAJzaAQbYC9ytsV7",
  "key12": "2G3r2U2ZDdeCGXqcDXaRzete4wpgkurXwhWm82Jp6j4hDxkBxEVmQHjAsLnRTjkabmxq4bSKkHaW2LEtNZyhSDM5",
  "key13": "2wgq57At1HoZSSZLuNKWoiFqP1W7EJyWoj4qp3JNRwNQSEeSgT4PfEci44Wht9tKt8enbppVKxHfnt9cctDsHgzk",
  "key14": "3VBXRQNqW1KVD7mg7M6XfeebUoxkNWGW3BDn64wgDdKwGA515wkuJ83uTLkptLP8aBRCAh25Ao2ucrRYnCS9SBt9",
  "key15": "N53eRKcdaDtLph558TNp6zytZTURZfTbtwmMdwmFAHTTC7qghPw3XBkDgwjTjotvVbd7sZsyTsW4F9c9rRGRLxp",
  "key16": "4btxoSy6ecz1jqkWDEdTinpE6sqsmUp2iwkZVWYAo7roZU1mswdzeNRNVTZanAQqgBCeBXf8ZyowJsg3rf6w9Z6v",
  "key17": "486sKey3ChvfTZKmgdb1YGFoMzfWCu2pF18rgxtx8obiRkfYmHoS5j9kt3J2YENmVdYkcuUy33S7j9mEjrxcLi6m",
  "key18": "4Rp6Ucc8NegzrKkTQTDE2cSn4xovqNepJKth6157EaKYiPZeR8kmWw44V11JFrSB7AMf7ZjriWw6h78BGWaAZwzg",
  "key19": "2nECBhTAjCB5rZDGrSa32xWFAgd4XBJNLpVFtx2zKiosYdq8bhPqaynfukNgGusUwBzNFt3WA4P1C9Rv8x1XaMvk",
  "key20": "2aEnb4AWP1vq35XCCv7s3225NRT9TR4WT3w71Lg6Hv2WubZmZQDEyztQrr4psFUfi2XJs61qMLfUp1xf7nqGjcuB",
  "key21": "4hFvTQsZ4fFWNZM2DWkinFE1NRbza4cnJqu2obEwCQJcinC5k5J9kmQK5WMNAcaPimiRogAze83MLs9XJ42d8Wxx",
  "key22": "46kUQBkXKR6Xip98s2jPpdBGzm16aNuzcKiGutvjD3TXhn97qrt1irpeHHaTUU5Ah3Lb5HqK39y4Kxdx1aDARWr7",
  "key23": "2swMSMMzTEqryJX7etYh3E7R5AWHKKgsAFdW5cRtAgUspPDJiaA2TWP3aXApEiXov3Uq3WUyY4FVjWYUia2tjZ6J",
  "key24": "2tU2HhyqYZ3hoHTEMhYB3kE1PzEofXuoNesEXCN7gcut2bzMdiwrTKahKyr31VaLKegFij3LU4RbXcZ3XHoumScd",
  "key25": "5EY1XQgMLRrjUDGZYKKMwbMbU3MSphUc9a4A8c2hebft3onZDBgdfLeFJtgkbJMuRdQtsZa3g4s1J3i4gguN3geC",
  "key26": "3C3x1ePiDbkAZrAGCMoYR5VmvFKNAdrMx6HVRzR3xoPmPA54QC4qaWfEq3xKLMzCaHEMmgc2hLKF9LJD5SLJ8E3v",
  "key27": "2gct5RswqdG9MsaPFTDgkqhvgHwrgwVwJ61eQRBdvTpFRsgzV2UBjwJspBhKFwzbYAWkDEfn3QCtGTLW2DeRGfZA",
  "key28": "4KDHyPXibZrFgEo6kVdtYwi6gZcvygNZ1G7JsFWB2fi3PpUqJfEFbnULfzjMPdwpo9UxMXuAJWq86h4yL4Q1dUj9",
  "key29": "5jMvjw5HgF6b2UzBMUqX5QQRbowuujgM7CgZhBPwCLs9bQpZL2ZziD449sbBE4qmPU6RFzg4SMW2bvtAWPZ83aac",
  "key30": "2xrAGsv6bi5PFxBD7mJVFHTLN3pjv3WQC6XY3fb1vVKTegcQDYFTM7Z7tKT3ZcVasMr5PsUgQ8Ajz1Vi1whqSd8V",
  "key31": "xpzTFNreudkGjCgiS5Gh9UQrBVSk3HG94uDJBgGvJQwef4vUJRk9d2hQKhCMMB8wCFu9enFjraxu7Ltkup7nzmR",
  "key32": "5bxeRUGuHgJDXncY2fDe1SEChdbPxzVBMu3x2jp9F2gJqE7qtsUo2F5yWeiuxt6bZByPWJb9UGHfC9tjfH9EoXTu",
  "key33": "oT5YR8i32vSySMpNV1zBtMdA3xBq4DRYhs42wLqBFnq7MWU1d3YSc9hb3nYfWJu282ACbkcqAwZU1KhvJuNWs4b",
  "key34": "56i687bhzRWVwHnhPfozmBibijpdRbMtta7frJW7LTYMZEvvkxDyGmTn2WMdAkjKCyZSGgYFTT15Ky8FE5tesk5F",
  "key35": "4DQEMN7umwXXZB7KVuBZRKbtG1Yu27aEyw9wxMysZy9UzqmGo2zNhMsDPb5ZnFLLGZGgwz5tmCqgucaw3rg2ue7P",
  "key36": "7z4jRi3ULYYzSbUKgQVqwqZ9DoRXBFiiWR2b1kJKEmLbNYnppYNZhttkRWco5QxnxV2AM8oaUSXJaFkLLd1ddtG"
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
