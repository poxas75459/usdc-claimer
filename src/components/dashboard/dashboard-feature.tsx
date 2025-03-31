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
    "5oChNv9SxXFq7z7ZB5M88UNhGnbhPZuFSrYTsZcLL3DpRRp9u27qJndmSgzW3k8uTFZth2SqEAcqVkkRP1YDcmav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p22vCiU3dRs2Wq99P4cmoEy4hD6dwDFd174GVZNrpAAQnFHK9hjUUPaq4LDjapFVAunBs71pe4ZC64pyBAcDX7L",
  "key1": "3kd8Z7qEuGp6D9bG3baryGTXhp3eXYdSXujJSbSGD46BJQAFAk6DKsMyG9q6gFZBDbTmne4Ey4ofR87M1n7oc5hy",
  "key2": "2qUsCPyvzqY34TQjxckpqZXVecTRzoeGb4cbn1dYgWocrvkYSvLDmvzABiUDTjsTwhQrEwrGVqWtUeS8sug5kPnJ",
  "key3": "5Fu3EQPGT4xK2bo5LduGfoz5RWrsqkeQ8RdbMUCLPquDp5FmoXciVoXPcXFXTZ8k3kgNdsvtmhaw5mftV7S4q475",
  "key4": "5tG4aJGpyiGyHHagVsVq14mG6Yq4nkQ4kWY4qjNx5cdWxWcLgzmDYuxwW9dZryXRrnA6HxuBn3aqPjJCZZN9sTEE",
  "key5": "33B8iS8NKjRzXeqKou44gywfpWLuRySPz8SBkk9P5QQMBX9kYexhdYvaysDGDcMcqzwUychpvRvE7ZNfLaKUaEEZ",
  "key6": "5bmDybTk5kPjdfkzg35YiWe1MhfCQijMwx6bW4BWwiUHmqymP5WW3ePRXsdJME2gmpSQtuFz99sLGHFCqDUSFvpq",
  "key7": "3baSm6n5VHQnT8NUMd1op4VK3Ha5k2ocmRWrCCrovC8BwgQ9qLaCAjq54DQ3g4isQWCGnq7FZmEH3ENT5cWLKmnb",
  "key8": "54n2rGrB7iww1V1dw2j516MgHM1XZqSez8az5tcbxKnEMuZz2H8yCto5WfYGLMWhh7nS9hS6SFkYv8amJMmKWdiQ",
  "key9": "3VRe2oxjRS7LN3N8e74cvz2R5Ryk9hLvPWLx76s5FnokyXUjcEhtE94MRW9BbBa5rEaVEopbjsRyoTFT5m4Jr6o9",
  "key10": "y8khdr6PLo4ncm9x464YvmJ3XHU8kzdVKN42U4i95h7GKdJLtXWerLXGZGitXeVH4FWVMdKe2JzdWhF7QTNXUVh",
  "key11": "4HGcAWP8YbcSshcG97ewrzrSXHkzDmfpX7KxciMeApT8esbptDKkPG6Dyx61MVfDn2rjeuKzGyGbCoGYuM574UzK",
  "key12": "3fFuaStsgYKyij1SX61NfmSC2Ysf52g8eChTdy7mfBm1W6freBRA5R77V6PDabM93vS6mzeaPka2rA9UobD1LAat",
  "key13": "kGA7ntrAaQ9qpnhDa55yYcD5VgXKZpcJv16CYeCueEfEfcyxBNyfXeJKkR5Pfy5zWUzSmmK7yLZe8TkXJr6wR3v",
  "key14": "5QJVFk6PJUaFkJxtbUmXtBUeTg6QWpf9GSEtGLwttcCPzSi2aKfFdpWyHPMw3e1Ed7mSsetkNPDRMT2F3KmoNJfR",
  "key15": "22dLTnQQ7J4M5WM4BWK4z4cUjvNhVKkVnigz2drUvUUqxf8VTDNN6M4k8zJ8eSNf7dbByZMZPwFhYvYdwEa2MyNw",
  "key16": "3UB9vKJ9MjYnMUutAXAxXX3J1YWGJcCo2Sos7smeZUVx8RnSpzL92CJpWDRSd9TNcbxihjd5fN4c72bAQvQ3BNt5",
  "key17": "59gUMQBRdHoGxXZN2fUxFstzVLquqiuk3JqfsZVsnusY52YTDYGcm3iJYqoMSencrLc8uhgWUQUCBixKThHmGKCQ",
  "key18": "2L3ym1JnxMXRe9SEb63eS1iZbjfx9k4UARRsdZuFaNf6W9bqHYmproP6saRPtcBNxM3ZCMLuoozM4XxqtqbLKyg6",
  "key19": "64fhdRB3oJN6EFRbQxnjgzsp7BZ29QX6ir8gJ3KUHW1QCiynCFiKJoTiMRcqtvM6LR7614WabnrJkSMxCwEq9A3q",
  "key20": "cjbLyu6FzNqz4Kmdb5RwM2o5N4TwSTneR1rh6dSfRxRjV8qPhpHExADwqsEUp6j1UNGgod9AAfi9Vgi2TeALwoL",
  "key21": "3VXAkzMpf2ZZzYQ5TuC16AgidCKs3dWaYmGx4jkJaTk32oEXXt2NS1JCDN1ke4ZY3JdL89nxJwnAqmnaS2ocXHKh",
  "key22": "3zFdDU1nDEVndWyicwkCPAajexLxNos32pZbz8dpdSeNNvBkVvGnWDZejaW697RSAki3jtqdqD9GfX47fPZkfsR8",
  "key23": "2N3SHpNvvTYSdhApqoeiA1qSpgeoz8MPM7jUGA3NVRyphavqqCuuHE7Wns6qiPaqxDx4Uvz9CecVMv75epRoDpi6",
  "key24": "tFhPjLTWdGq2dzbQ2iQSThHFt9s9VrN1HHcJHzG41pvBB2oDsjix681ycZh1DQ6VGvX9tc11X89L8yZ6bYQkus8",
  "key25": "5iAAdsnztBL1oDzjzNgsokcSrzPYrSKpGt18rHLt7EtRRqXGMipH32S1xMSkBx4cKYV4vyzkGCvfPoyGdV62RCxY"
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
