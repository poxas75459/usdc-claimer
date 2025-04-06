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
    "KWR9FVR5sTzwcHdWfxaR1CNjfHKB7wPUq5aChucFBVPujyiWfZFg6asTAbsvxWfA9hNq73YLhe6jN2XdkujqC54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vs31xj9ki5Qdxt553JWnfhior5pRbuAekLkdDNNhPM3JGLW9PoDhEXtAfT2T6RZNrnZURSqcm7TfPdWy2Vew4Qd",
  "key1": "2K1bQRAePHx2ncxkVLGrJMgDa6awwU3kxh4Z2mwhZwSfjGqPonB7vwWpF8DQ7se8kptPVqn4s76cJCkQjoR1DLZZ",
  "key2": "46kyZjHXpFpf4LiuX4oqNbUrfXtbKx7H8pSHwCgs7eQBKDkmvxmjt9sFV6PWo4jYeNBxYuMetutPDGWqdp2acFZt",
  "key3": "3sCj6ZwTFsnkD3xJUFvL7yB2HzbZxiT4crbZP9Y9aGzJK6zQmcQK1LJAcLF14qm5E8ayJcQCMsCuK3rtF3Fd1VY3",
  "key4": "5fLDsE8EDQr4Ki2MxZxZcL1AuevitWgPWeLVsiKqyX66A8F44FokQZ18JPf9e5KUjaMvrVCqjCDA62GsbtRJfjEw",
  "key5": "57u3ahUmCoUZKdeDTLAr4trdurbYHSk2a8dTX4DfrCk6FZtMZCYKwcq9PSYLAyW1Md9tmmFDop1gki9L22ac8WVT",
  "key6": "4tsJsgkwdDv1gizp6awd4noGptevoDdpfZ4cD8yDMYQjNFFBVmyLvRTwyspSDrNN97tmtxQRMjtHC43cqHECPRoe",
  "key7": "3yv4fXcpd7iLh8bsZGevacSFQYnThE6wPXkEUGUE5xCbkXHtiKyw5uNGCJVEPrqTcvqfCCDisnuD4UNiTHhkrXpC",
  "key8": "659u2o5TcLVYgTikDfXDTGnkiBoAKByZUB69SqEVZGgznBhbcVvJdL6B9aZdTss6WZ745BzdhcxhgWiGF8tG9mz7",
  "key9": "3yAignyZ8kXsdyhsamHAySZD4JG5PrJ3jjMnA8UxMA8Ndexmx66aassnLeei9Hzc1B2XuHuaAbPC2NGGLrsrAVaN",
  "key10": "5fqxw89zHmyY8CXo9HG1YX4fwa4SmfTfqqsV2DG4MbDzV1LBtS145427QM4w4WyzAaz1yRtXM8kzV8aX1QwiRmN9",
  "key11": "3zyezoyaL4wz7qz6BgnbfqX9wqYGYai2WCY9a1HehegMJtf1ME5FTangaTERCjdys4A9J2RKuQswTYnN8rKd9rBN",
  "key12": "5tBWKF7ahAy5shTjMGkhFWxYSSed7FhgTi5mVk2NBHVn8M68VV4hDm6rSuU2tn9CoX8ncwqLnNRGWT7Evuq2Ck6D",
  "key13": "65K3y7dtAhB8SF5fiiHiUrSjkhGikd7wrNMSBvu5AuU9odsZJWwrsmJmL1UqbKTZ5t6PTPrBX49rarQ2LifUYoMQ",
  "key14": "3YteDnv9bEL1yDgkohQ5QPJ7LShBVGXiuZ7m5Lfx9tTnuthuv3pEB3oiVEFjR9xWYy2gpgvzjXjnGuZntF4dzfiL",
  "key15": "oKXYihkV7o9z8dYNiucUGrbQHCMnQz1YXZY92xqjy7Vcr8pBzZf2aqqxmh2N2nyEzpaG796Jkk8VLgwfMGnbn9o",
  "key16": "5SR4aWYtUTTvHYSY6iCxg8oNGKy5wcWEgeW8JHVGBV6Ansksp3bhyV2CabwEa388YDyGtkxYCaaMksZRhjxjMTwr",
  "key17": "4gPGZMkdaBXsi2e4VoR1FzMhZM7YSct9BBui28KHnF4KyFCzkdDtvJeiMfxRCe9wSYU9dTPr2XzzZtGoGzKAHaag",
  "key18": "B6KGpxQEeVUV1RvT3D9Mer2xSzk8cXiGRsizKxRt7BeQLwzagxKGGFrQGs6bKa9iWnMpeimf4M3Tx3wajh3onvH",
  "key19": "4hohUSaofWsnm1ZJwb2G8SoJr5NgiZ9e9EKZhFaX4tZ65nQLnsSnGSxVYykxBKbixKPsM57a1ADASYVTFMBNdGDD",
  "key20": "3E8jQE1uqNLkuCxpfBMtNbEMGHEjjjZ7Jummtp6YyufjYcG47r9BaSp9cTm6R3qboLWWECoCJ9SQxzwkmjpxcvEr",
  "key21": "4Bf7tTLb9mJZYerwzwws2udotDMBYqUBmoqpKsJ76ngAjCE2iaKbUpx1fuedkfscpbkC6iBNFZVJwSjwfzFcrZiH",
  "key22": "5UrxmzhHbfrz99fwN9KxE3N3dfEHaUWtrefSeZgwQJqHMsv2Zt4bgwBV5BMEsYeijMkRyuas4hgFnScJtwTTJTMQ",
  "key23": "231XEonuk1KhUaN9Xh6Eunztw3TX5eq6zBqMHvgnKgEPo4xYkgdU7ioDDiukbyULzqaeKyNz4Ln6RBMvhpjZ2Mpz",
  "key24": "2ZGaFUA77HMw7gactxNx6mN1YjRVXpvV8sLQ89A7CFBB7W53Wv1mGd4xEk75DRhecGep1QK4As7w4Si6sHMNvsBQ",
  "key25": "mwFbX85AN6aCxLXF15e6hJe4A473X61LxawGVZyxsZUpE3oZgta9eN7zYxyxVwCWjnLRwLThcdJd2VvuMEQ3p9T",
  "key26": "YPBz1NSJNR3tm4pPba9Wf2gonB1v4DGBPNtSmvomPgdkkdjTSRLfFfE8qGhfxV2YfhS4FzoMgWgJB9ZyQbgjhbZ"
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
