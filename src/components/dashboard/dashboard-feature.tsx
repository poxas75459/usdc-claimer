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
    "fFBELzEikjyYLvmJhLz4b7Ciocn4XLxwLuB3ziS9z18G746hBNGFKB6fdNh4tAAY28sKBaYShvxbqeBS9kjmMUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7V8pzsGdZBTTNtL1Vxpaxsh8SeQziTw4TEzVyK7pFJ7nTE1hkPGVg8EywTUAjr2cRCAZhj7aqDjrz5a9TgT3qqT",
  "key1": "2GD4qGADNHUnB4vTukJ3hQSof8kANqvCwvzRn3hcprmck8GX2ZD6RKyCkEh4L6vaZDz6WgxJUrWhPeqiigMfjSvU",
  "key2": "3NTXoP58c1HnuMh3KBXV3uxqE9Y2dm9U99bZPcFrCdh1q7wBLPZVZ7coiCxL1f7zi4fnAUrgRdhYj8MRo1vo8eBW",
  "key3": "5piqPKZDkHdmP2VgCDquMn3p8WhrciiP7WgXEW54qE5BReGb9FsLdrRLcA9hfiq156w8iYfgGVDJG7jYJiJsEqxG",
  "key4": "MywZzxZLVbvUygNCAnZ28p9SCjxemvpbsxkuY5myqFjfBHjWVne79AEE2tEXRuWbfPAx5YJKxivRwD57Jf1aJeH",
  "key5": "3QtVrs9VdbNdyC7AgEbkq1h9UDoiLTDWBJuuj6QaMumgvWVpWkZMNF7iCdaicgk3a3SsG7jg2RXod2Bh7qRSQ7Y8",
  "key6": "2UUyoz771EsFicytYt8rAKWx1bQjFuM7pXR3ptoniPYkwBVynZkBCg5kpcMHtCwEjzt2bTdpRKVme7oKyUVCf2mx",
  "key7": "3oTUnToxuYpWAAhSsL5b9hQMTbk8GWp9yyadJWjgCQ9smczxbm6MSPYZADtWMim9zbRoY5Ap2remLjahm1WjEMAN",
  "key8": "4zWBVdy2zqk3i4Y2LMyESBvGK3AFKVTGq471SfnddLWVKXqn1FLX2CUGrVpQjoR29evs43SqUkXuDJJg48X7FEfM",
  "key9": "4F6JDMbkCm6cpKYauehcNmv5YGr8ts1bXJZtJp79puhCGdAuZ1WzdEfot39RavpLW3WLorvjzwWZJbSLMu5hVB2b",
  "key10": "55ah7tHnSrWdKk8D8z3cuYcSYKDNDYYfjaEpqVoVxk5ZVAq4MvspVmtL1CmxSRAtmRc5vGsqL8jpYyjykevmKwSX",
  "key11": "5zNFNUK2T6Fjpa3RsBAx61sf7GoHSxe86tM5yk39J2AhEExwws56Bzo2JXx68QLBwjNwAw7Dw1swcqKsKL2QHaEt",
  "key12": "4FXy83doYjadrVu7qXdntzYZYdRC8trj4vjqDaLGrNsJ8LnW1YC3x5WNxBY4bQmLWRjcbFHKxymcQpeFbcTDB7gD",
  "key13": "5HRxYcTu91fmN59HgVav1HcruFo4TY3hiqSr6aByvcBQNpoKWe5NcNELC2hjSvxNWb4WkEnAsPHMYhNzb13DHjx6",
  "key14": "2kqDjF26xUZttZPpBbPuFjsVAQLzt7DPrvDsVJdEA34nJj6JxQ6aJpef95FCMFyam9aaymEVWnJA5nGwxZQtiDTQ",
  "key15": "4NbihrgjQd7fC1j6WRRwjU2jbM3xYMfU1S4jhoNbTyvKXBtY12NV8RQM2batmZ456K1EGagw3D4wEVLkvH7SpfbU",
  "key16": "3PnuVURyXY4zsLfi2uQbwEnjDPVGQSyRhayVm3AB1vPbF57d14zGrCKEL5Li2Zj4uWMRMUuSQDnyh1bMxc9tFc3A",
  "key17": "3sWko2AzYfumTBknmPLNGvfBEv4oR8GrxZp2iMr2ktoDP9x6PGNCVzz25LyX1Q1kULLSM48R2Lifski9T3QNGoYf",
  "key18": "4bc1drRW7QuSpLiozsuoagHVsdK7XR3DwRQSegq5hjqtRXfyr8bRMAfhCg318WZKqAoe8TyMVy5Z8Ejgm5SsNPW1",
  "key19": "3sDfzSHEoRs4oqSmQpyH9AV83vXmSRa8isrWDqygdrgXfDmhfx9u7Y8tKXNiusZWVakT3G4MYQi3j7mFYnLj8qkk",
  "key20": "DXauyAXvD8Z4q4BrBUYh85du5AS3NELuUPxr8eie9eDeMnicroWcq3dDZsqq4ArpBGNFdQJdeq2gxyz6ULyCDUp",
  "key21": "58Nnt5YFWTWJD15woueLP9sq5oJrQmoPSqWVi5dzb9T18DwXuDyi12iEi9rpJKdiiHzQjiY4sMcHaKajf2MfnrVn",
  "key22": "17toQ36kV1JBV6HBDHg74LDzYFyJbhV6o4wWypeP7WrgHv4u8j8eQX7vGCm2CpyddqXhs56oEM192iUeux7zu3N",
  "key23": "4E8huk2xgBaXnh7MzV2BCKNvGv6dsg1vpnJ4PLLVUGy14VSwuHWSjt5PJNbNcHqUUf2WGLPVNx1jFE9k62gLaQpm",
  "key24": "4rJrbVi7R2c2Zwiy7Fg46bFKzu4LV5toBH2iTYSAiDzpkYmVZSn3ZPADYzHn6EZoNF356RV3DPqqaQY8sChdwbfX",
  "key25": "4StEqp4wr3ujPhVSGfppWkxXjfU2bvXrYzbPg1j1yqZ3tstq4t8YYbMJtKC2kGza7ZGBBQMF7i1yG8aKTdNa3fwz",
  "key26": "4y8E2U5sR41YibfXTkRj3rSt3PF3zro51bSLBdGMFgKeeXrM49NPKYmMFEJoW3CMxsazMxUKb5yeSEuqR8nihXxB"
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
