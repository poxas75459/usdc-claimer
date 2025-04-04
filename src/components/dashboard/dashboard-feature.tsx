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
    "3aGbQHST7grXSK9WLeoHLVbB6jeYu7YScZn2uUc9KxnJAASxjDm5NVbLTCgxhcRn4dPyobXGoDB72BnnBy2PMKNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYUFppERMhF9eCJfPoPNYYMQ6pRtkgevQaxs7dzu9qsMQaFCFZvpTErbHsQ5LLCe5DzxnntUVP29qosq4CiwE2N",
  "key1": "5byLHT7k8obfYRaM49eCXMZyZnwDhBQWcmVxPezDicC1Kyj9NqkvTPW3wTRJYiC6kS5oMRnYyzfc8paVoUPvVNnD",
  "key2": "5ujQAYbvkHbFhDHK64zWNA78fWCcbGW8yR8rsQuS9WRNHzibkRYGYkUvXKf2g3XU6zKRgGUzdBh6TzkAn7nLEZLx",
  "key3": "32DbczwDdXZVJ17qHQMddDeQ1zQtW8KwpUnbsScw3tvadt1Un6mR8evhuSRrDmqoU1SzC5FqbD5tYYzcES5q6J7U",
  "key4": "3FE5Zbh7ioUjGM7eFM5ZREPzG2xLx8tr1oWqtZwNMCL3C4FXwPMDQqV3QHtSKzzAkrp4WWxxmx633NJ7kqADY3W",
  "key5": "5j9xREcmVZxf2cXh7r8Ev73NKzYyD6b7ty3GEySPamzwZmQcwZskj3MKWqBBjuPBmgJYnfognNtdcjDorPycV2in",
  "key6": "2hZwefFcmjWsyHzQPJzZGyZD6FUtc6xZDtN3xQ6F499Cg7Y6sDRZonv2VF3PiFFPDcdNw2VhvKN7SP7XCuEy2PJH",
  "key7": "sGD3psvEUFEz2tcw1axCduFnwr8v7mWyY5wgJEQVPYfTViBvQdXMED72Prt1P9gccmNYveorkZX9DLBymvpCYNn",
  "key8": "2ew2Zb89iyaT38dE7tM724V5uZjZuCMyTsDekRYMbgSG67iW2AGbUaxeZwtNXifMpTDdPgKo99L8bnvZVzfNxyP6",
  "key9": "4QaSYJpZszLnk34gpUKByrutioiuQRq3J6x5tzPKLjiiWAXFEaEj3hEhmbH16Wxro6NfghYEE32EPGrpYyNybEzb",
  "key10": "2WkqVSdLVf3MUGMvTVB4PUZjDZxEhTAhdbyFnFGB5vZVqZtQqannS2kieWstWB62btWh5V8sxtXmxfaQwuEHXXGH",
  "key11": "5Zg9hWZr9ovh2tUrunRJY4FMqdD9vtqecC4YFEmyRYRnmNh3P2A4T3S4sY72KiaQ1ENttqCsdw66RQ61bbtLkGxb",
  "key12": "An3ponNR3nnk1u3hqf87YB9unpAKou4BwR5LJg6JoMoU4Md2viGcnnDw5hmUdrcXP45gdTJSef3qdb19AmDGDf7",
  "key13": "4uph4zTdEmXozVUe4T1fZoQjNmash9Yx2iHp59fdHuxSugnv19Tpf3dJBEPgyZr7sKSrgWeVPJxT4s8MGFy9u8mW",
  "key14": "oyy5cMc18mESejTsbHUYFmYGZMQFEZHiVvLv5JhPC1i2SjciSt3YYKeewSQFPej6dS6j6B66w917t7PpxZEVW3g",
  "key15": "54KcLhUjxLg5GTdssxM2bC65Y6keKNWKbcaudpTVpKp12H5E3WHLGVw8hn6axdFJt4nPnS6fcGjmTeJjpPfgQxFN",
  "key16": "3vwd1JnVwe1F486brrxmkcftm34e97SqvKiboY3Mse8vN133BHfWZ9kmDhxrGqspcUtj2PWyfWmTZDneBVqmDHA8",
  "key17": "54aS5svxfuS8QKzvgCmMapK3mFsFxcmYRj58wKGtwdLANoLF9xWMJeQpKsJwDQmuFcb1RVsRJhjGA9fSAe2TAYCe",
  "key18": "x1wVqcD8c1Z3DgeqkV4NVtsM8SrnYNCGGzhqNbEkcz8W9FEcQrefNpwrfzzbc1cWi1hyrAho57cdTwTLLcgwF4L",
  "key19": "3E1dWGaVAFoAtwxba5Uy2Z1TybjF8QMbLvmwPoLnzQMND6vFDHMqqFaz6NaiKcip1jbUGQVhkiM8HwZpXbXCf7yW",
  "key20": "ZGW9U75G46VRKQbGk2zAUBRKKnwanQ3FYu5hCkJeuavRG9Rn5qfRLoT14HdLDTdfwEXdjw7Y8a733qE4Su5m3uT",
  "key21": "vuKHnoTqRbpVVJWEuoHQ5fK85Qz7ZgoUK3uvNmySyGDLwdbSsHe9wkrhSfYRc2XsABXSTuYd4oxxUZkPEh8voYK",
  "key22": "dLeheCT5HSq5rouwPF5kFbbKwyDtjWucUV7pjexHdSc5rrWTCaJBUbk78JbMvMkQSvV85Pr35iaCcrk2R9w7sTR",
  "key23": "3oBEbzvEaKJ2hMmdkZa3UikCG6wR2gEeeUC5zekY3y3hR5WAmz3MmoGus9WPFd8fbxVrEDpmKghpHDe9N6wXQrb1",
  "key24": "5JscwpuLR5TQwzUgRRjAHfRTnseRj9JnCAYSxAG7L4pXNxSU5tRPv5GoM1RnGbSxgthWLxYiweARD5KJex28BSjh",
  "key25": "2QSTZz2jHJE4zNRLJeQFu4cBkCjB1RpRPQL22AovNxMFoxqj3fpE2dEruiZ1u2jwyc1DTMstoU51kUJ6gjgdEjuv",
  "key26": "2gcpup576JYAznrv81aruvojhDzB1jtpvxuSHYEhWmBKc6omqonqsJEDZyQRb1CuJMprkPqCYfCU8jfAoUnZkDqZ"
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
