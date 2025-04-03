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
    "5q5tTLSueD9MCxU5iwhwAQjZoHSsovE8ZGfv5WQSThJX1uBEPM5zExfZuu5wAqM1forZsfWjbnDApJjkeLW1ZoCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sZV8GrrQmQXniHj3LVxVJTywqZ8hukBKzVKso7PawTqa4sph7EUv8eHv5gjmKaMoaZYZqCbHNi9p2c46HFv9QN1",
  "key1": "4yfP6wRGJiKyfvmi29aNTEF7Vd17e6JTSfkGBuenfKktXTzoZJZgDA2tgAGZCwrPnLHG41ASAADt1eUGHEbGSrMJ",
  "key2": "jLA4zZVKSSiidZFPSmnFEGQUC39gyPUnqZ4zpy7Drc59DXd6Jrk6t63iRSoSBg1jtqjtAqiDZmDXXiR3uhz4poY",
  "key3": "5nNCVYb6CeVpKV1Wnw94QhQ3UCf9dSBhoyWPSt9aYyCohjskmi6M7FLHrX9erJJn61bsQaTq7pT2T95A2UqgTNBe",
  "key4": "3rCab8bQzSMSNuyhbfJJZ3wA3ddWkBVDdkwRbsGEPbnnn1hw1dT1TeMsHo4HfdzYGE5iS9rJ1H2C3CrKRyn1qMtf",
  "key5": "P1PTd8iL4WhtfZ5dmpk4zcBpXLmcvwKcVC6aaFAp4Deo3g2h8f91V6UX2R4FunAKr1MDqnibM1T4vWt7Q7AC6jQ",
  "key6": "GkguqEYfQeGRqbVoTYkERPmugYekwBdKb2wYrPhFAjNVghUcRoxsuAGY8maMes9wA9DHviZjFKjmjspUVDjMmWd",
  "key7": "43PbkCGbVD2tGj51UuReFJxVnaoaFqZ4DE9JvZbz7oprMRiEqFcEkUPbA6AN9pQtJgVmtY1xGgV7pm6BjJgCFeCk",
  "key8": "5S9QaTyVsdfY4kMQMUPDKbXjv9SzHhhio63smxtJEg48KFSrXTDMQbfVDKRXkiady8eUMREHyQxnGjUXQyBFZBSr",
  "key9": "3p2ghJjCEPTP79cVbBZRYGvRTnSjd1hCnUVk88fybi583CNvF5nVqfDC5RobKgQgVR4RQdcanLk9yVTD828gfyjp",
  "key10": "3HWRGj6KsDyvz1eNKL1d6aPBD1uqmE7RrA8AJdgUSHrqX17QQNSv54Vpz22k4basPp8LHdMzYJsJ5W9TYNwxnUrV",
  "key11": "36516GHVDivDKxP6sxf92EKUbHpkdarNKuaieBm2wSTuMj3UTviZV4Jz2C6ktk2HQr1BmWZnPtKz1LbjhiJtcYEG",
  "key12": "2K61ubzirG6eu2uG7wp2ErceCEcrEf36gtuDVeedQMT7QqQoBG9N3A5GQhANcecZgx1oVA32vJC9owCCvtzfSxLG",
  "key13": "5VWn3H18nYQQjm2pG6pEQqu7q2CjJbPgkFuoGgDdyZED1LXgqrhGyiiy8jMPaAwBLJjNFd5ztuzQ9UfXgS1Adqgq",
  "key14": "VdAF9VQ8iTHgdeLjG2CGKvoryqievSUmtv6DLyV9XyUp115HmXv945YQVxG5mmSgEofybFMRQw3kHHdL9fRExSH",
  "key15": "3caMothhrnKmTbi3nXRSenK72jZW6ccUJGpWV8M629RTdK6fBRTn811rBma9JxJXQHZyJmRw6Exsibk6NJ415RLV",
  "key16": "2H73z7SRGXmNSGzZv6WtZHnXUDsmPUr7DkAA5X5aXDVbEyq732BPVL1hAerCBdYrG8dPUenv1Sxkxkrg9a8qRSUJ",
  "key17": "2SiLRpexWjsptKzUuPnU6ovzjD9hDdL4skup926RTT3x1nq6CYPz73oTTvimXbK95ryiXmd1RjpVkHAySvdgxnVm",
  "key18": "51nF82Xn9u2MoSPQH344ofpLDQ9kvxK9TNfjJCFWm63yLFerLL46CMgapup8yM5EP8CvzUrtyP99R74a5hd37n5Z",
  "key19": "4Ym2xoncDZ6JQZLmCpGmJac6d8g6m9C4H2vhSJQv8FGyFWZuNN9JPFktEizMcnoTnteeZPFnBi39MKNhe5GCy86F",
  "key20": "6sCu5zj7TCRUb3vQ8MB8DBazXFwDJoYyJFemE2funiSe3BfMcMJupiaLQechvduyhPAvebZdhHnXvpNwrCSxcAL",
  "key21": "94qfi2qNg9sGeTaE4kVrZzmYskxxhNkgVQWgjZB2qvonNgijLCDckJYtJqzcjF7GAWsj37RK3ULaB8ZcEMLZSbC",
  "key22": "2kUFYaWMUUSPVfBxJaKVFMPy5T7p8DL6xZLnZjFRoq5mQ1vA5QpjRafUt3kFDUjqPZ33hjQ9zGB6fMw7tMDEoGpV",
  "key23": "2CAyTQ2GSf48B9vbq1yVPBMCZ6rg5YsTCdW1G1MXboC2FnQgjnVAxrpEqoSgaT7NB1yybSLUR2fHjeCCNyM84se9",
  "key24": "35rgPbyw1PV4XgbCJL2o5wg3jMEmaPawQ3QvZcwciZ4egaKc7BwgCvV1pXoqAM1se8R9jEA9n3HuRLVjkYX7jLna"
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
