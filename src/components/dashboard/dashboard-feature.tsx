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
    "3mvqJibMw8j5RNsceufL5vMmnWUmWSgMYcxTY51atFMrYgidtp8mY2rcdY6tubkHXnaKCqQsefTpfWZ58zK2b8uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ExH1fnMN83spvLpuhZQ9UHsAbVXXHpFaTc1M5GUQJE1MXnCcG7qeaMVDcow1TuoQvTRyeR4bmy9sy9YnEXfxbDY",
  "key1": "559LoxoPTsd9xd2usTU8CYBpgX1GcNvadPEUrkha8xno7E28eJKgM782Ly1e1gjMHwF8rpoy3cqvjFNQmf2fWh6P",
  "key2": "91Gwup3bbMb8Ur4Cj431aPCZRu4xNLVb2W8neXKFCmJtUHYC5hqRwDnwD5t7t4GWQfuWJVkULaHe9JhSKPVtpZG",
  "key3": "5cDoztCxfs5Dw4zrPyrhCwNzZ3cxRhSdGhn46SM4juThbYUvzogWZ3iTgEYikDNnVCM8VaFVAcak3AwUbzo9Z73e",
  "key4": "48ZgSHfre77L7q51srTWQvpkVoRjDuMjfJGQe958QA8h5w7UrT4JNXoxnXJLfYHRNJpVrG5frtLfuTKfypX44L2p",
  "key5": "3TnHXzUE3vFRjoJaSBD7j9VvjJBzLuvs3QZysSVx3MoHyC85bxXt1qcfn5usMQgd7p8tqiMgBfFSmwQz58SCB54C",
  "key6": "5o74fKtRg4mCy9oTVgUdDZyLczWVfyBuVR3SMXcpfpoe6F3eHKZMa727oAMtLgSLG6UA4mN5L8jaByugwube7Hzg",
  "key7": "5iA4czsZhkLdi8DQCun7HWztbDzi21uVGfafa7BVRFRtX34hCky4VoKLwXWfLE3gS71eMTZonS191qJYdGgbscqC",
  "key8": "5MAQGLLKWW7JhuUMu8F53n1DQW1Gfp5ESnK7RDcgAu5LN15LxqfVa5iYidz4E1JjaKzXuTcMV7kmsE1QS3f6HFVj",
  "key9": "3nTfvTqKpBptrtUHKPQC5seV7yKZUvGve1gap9f7f8odkSFHE5vGPVXJMve7Jjcs2FxM9WahyBRfyEiwynNhNdqN",
  "key10": "513nTf4F1oEJ2uq1qdoYhXjWFqSVzVWoVjTjonPsvBvkBuXW2YDTq6dL6KQjQWmGosfx5k6gX27qn4ZN59boKTbN",
  "key11": "HvRLLHkCaptRy6ho9a26wEWjr3MaMg3yQKyH3WWhM9ADrGtz1o1cwB7uMvbqkrVscRkbzgJGcJWBQnz5EVboNoD",
  "key12": "5Q1pzEBHbfWXNFqwyowk24dXeN3rWbq4ts1sRG6sp7MSsuGBuupjTpvMMbJEzzTNZhM1N9anp635eQAKYjT2e7Tu",
  "key13": "4XxJ3FivDaHA5b4hDdU9Fjpe88dwEQgMEomjZpnLrYtz2QW488LWiX3D6BqKENEsPaAXdKGc2MKdU2x5zGieaHsh",
  "key14": "sEbFCypfZmrjsuE4RMS9PbknnzHcUiTVijpk6SyRsYLzHfZavN7jok3gM17rwwV4pV76YjauoGZ86A2SBppQr6B",
  "key15": "gcXxzZTi35V9c4LgpginyBa3CvPJKemuB1Sw5RBCypvg3RwMbNJjsac96Ccp9V4MDxR1GsPUztyQ8gtqqGFz9v7",
  "key16": "zKkdeFG5yPFKqnpzqKJdkYb5VXRZWfEFvxteK3CsCfrDSiZ4bYyLaE4kZF3pfnvEc5ZiJ7PcuxoWoeTNAa3i4gP",
  "key17": "3mgC8mhJUt9dVirSnG3xd8sus8jLkLAeU1HYwpmNtgWxRXuYNJPigzZRRKeixjXiZXXz9xT4B4PBHQsF5dTzbjzo",
  "key18": "2PAaqur18R2NzjNof4KNhPhKQjnjS1THkTjYPGAQudE3iSDW4pnDEcWjD2Jv3bytoP2hafhLqNCLgEHZKXJqk1vK",
  "key19": "2p89PjJdzcSn9RNc5Ri61zGSdo4wkpWXRXK27oUDn8fu5xY11CwZ6qAwk9VECdX7sqpP5YM3EbiKtCw5SA7nosYE",
  "key20": "5trNkeS4WM1NQqj84oxa1ehigg3SRKW3xh1DKB4ju4agSf1SbmiSbaSMATsbVjbnpfic5QWGwV4jUf9QqK2z7hZX",
  "key21": "5MMCKo9BWLSwNHdJp7hae9QoGeqhwL63XAqws9EkRpHnPJatZiYBiTWQnZjtEbXrGKBLX9S2oyzrJjXNxtkZP1oG",
  "key22": "2c8e4wLiRmAqZ9ESRa91tjKGy2jGwWf6zd8gD2rABQLHFDxHKcCYQRJ85pSAYizGjCKMbGRN8f3Ag4KcshuQxYUE",
  "key23": "5uFKzxo6eVCWZwB4FuGhscZUmVWbfGDPs6nGcAprq8AdhHLXuDiTdeJSBTR94JHhqGsNvDJ1t2S4gGwjg4mEYxbG",
  "key24": "29TYasj2aBVnxYJWJbtgxFK6mhavvFyQW2DJDQZ7URzHf5BZLHQYMBXPQPx7wY9kkQ7BLU84tzoHzPWNdo8qBTxL",
  "key25": "2uG82KnC45gaFZ2FrMigFc95jZkYev95TJSHTiNRSyBvAPWhwxjwU4gigxbZ1ge1mWC2KJ6iTs6swLB8SXLK1gZP",
  "key26": "WHCC33kgy2Mrs4ctqoxRWrsLhSFnVgJZFznhLE5FZi6KPNLXoeqe1y2mWEjrRmVwsuScHFXUfL99QrYvLbzCNHN",
  "key27": "vBouHhLoqmQqhd21jfnZi7G76THnnpxXB8ywvWLPgbL7XgByVoytpNhKHGhA9gw5NJcEcAJnhMU8vAg8MBQLd8T"
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
