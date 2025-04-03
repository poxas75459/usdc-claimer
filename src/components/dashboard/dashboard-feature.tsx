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
    "3TSZSA1w4tfAEEprnjsi3EJKBKpgxaJiuZq6C4BTcehpLcVVH8PLVheA8YkKK3EDBNcodZF7t57YcnhPcZmSYkcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hq4ERMH93FAfsopYqqiMNdEMzyQLFty2ULCT4Dha9uSj1RaxG5fuFHxu9Udyw1Bx594TubwYsfRZEcoCL3ZnM8g",
  "key1": "5nyNihENLmr8MKHgore17ZP74ikLztkwNjYW62cmK7aAeC7Bn2oWoJX14zuUgibcFf6hdHP2E3xTwaBC3S73rNTT",
  "key2": "Lz9wcx4BsCdqENngCfMiVqNRQFnodXREffbCK6fKDTJPLCDjmmYii5jsQcDwbRY31CFNEzEx2WEYRZEdzEALPUZ",
  "key3": "5tJaWQ4kJVoKnLAubf6bkmZFWAUmQEMTHTd6FByT47ag2qzgpYExRY97HCuRPBLq1ZwD9C1cmszJh9uz3tgvMvN6",
  "key4": "5VqtjmBHzigJUj4bKGFMiY8pRxUrqQwTq2or6bMWd3jaLxe37R7jGdy2oNCZ7ZtMEKqZ6RUdDEHJutUrEAc5t5X7",
  "key5": "4Njhd8hdD5m2rwCtgYr8B6PLh2fo5dopY6oh1faXqBvs1XwUGtuHqcnEw1sBvGpdujW7kbC9zj5B19B6iJRh5HuX",
  "key6": "2HXAiLQHrfJ4AyKEGcQhnaoknVuxWopzEAW1TZQuxh7AM9k6r8SGkS28rn1DgQ9q5PEkB4Mcwbecx1hswKpCW4xB",
  "key7": "61vzdUXbNpjC8TtG2hZWN4i3meoijoiGmrzi6U9YrLqbAPmA1WqpFfnM8BALmyJMnznZgVEzTYFw4Q78K6qzxuWC",
  "key8": "5HjpQPk6UURD1gewyY1t3jRMrYChhMnReS4swNjGV1rQhJhGGt4q5c1V39uKX2exEp32imRD6cwNGWYtkw6ymdkP",
  "key9": "4MxZsYcmw7EGCsgc8cU6MEhwZ2ZJFzi2F6FgPxPpjEfmm8BP7FrZSyEo5eBSEpsyXknpgU3AupsE7F4GNWS8ir7s",
  "key10": "5SYkqBfGPf8a3xXSB1p2yya4t4g7anwdvRLPxdE3hCE6Vvx75VVGJDiBXJn9oibgkJut2eW5aj871EPHVNmtDFS5",
  "key11": "5mD5EztgVkUdRTbWvpwUNwdDdzZjRgvpXpgy1RWpJVFmw69L9b6RMGd8tDGLUyLYK5pcr7QLCsEcHC2gBhR5aC3o",
  "key12": "3C4c2FP4h9Ecp8fR76sZiEmE3tNkXV6n2CyQL11ySzbbZGHnbkTXKwYxLNx9LSza4c3qVVVznsM4f5t8kgpeo7Ja",
  "key13": "2TEhWk4cyNh1wi5H3UXiatagvg3uDbpfDPhGS5iGttY1vqpnspWmCMYe1qqBuoLucq2PumEefzzRB5cZiAEZWhsk",
  "key14": "57F9tDTvYHn9MNhDEDYcCJNAQXERmS28rPuacbzw6DqX3phQDiGoVmp1DhM9ynhPqteNjoHZ4e8PaexkoRNT3uKY",
  "key15": "2RNqPumLiqvEs9aQFbACVzUFfgFGyCCJYyyxC9AfUUWRDJVXf657szB8M11JTS5ThggUK1yvCmX7dGeqEravAz3x",
  "key16": "4GnCrhNmtHAFjwdFBU4415WswiJ65nmPHQSSWAEpM2VtqMuz6v6zs4b7CDLo69dmpDYDa9EwdPw4KrHkptu6cHdt",
  "key17": "2DPZazTqWY1F22atQhNLfaC38bbZW5Ln84UDX9kbBP8ec7VXPYY2r9KtsHnvUc6P7BpkWcHjYaU8Y2kuZzGuEt47",
  "key18": "fB4YsdF6q8v5YCNYc4dRERXtYYD1Ptr9QW5xbY7gh5FxudsKjRkr37x7rDKQ4Uc8hGmce4HZvKNdxRxharANe5B",
  "key19": "hf8qQo5im2kFRiUX6pNWEaWbqNJ9HyVUYgHyyjiW3eZE8zZQMM3fvF8U8MNPGwSDKZ61PLHkGKg8yDSKCpqKMNP",
  "key20": "5AruhZfstwZYp9t9UT5upKT969DLHvZKSWmRWUYvqZJwsoQ6ohCWM8vmKgKYkmHKJ16StomG4m4JQwkthnEFWpuh",
  "key21": "2UuMBqN4WSCoSMD49tJQxWR8rCQs2CjSS5CiJEraEAG9EwB5kMCUCDmMaBSzrWyxmv3uybPhBBKxfNMytwWMz2HR",
  "key22": "bD4neXtzt5yJYFdL49E8zY9GPWvbjQyPbiDhwKPJFhhWcf8C61YueZJbAFFmaRzVzbhdXdkZBjwJWHXSSoenkH9",
  "key23": "43kQFdpVQP9rhAmnmywdKUtnGCnCca248Qrw7HJFNVy9hLi66K2ZbG7gsMS523E6iaS9Q13dA8eiJeR9pphAohx8",
  "key24": "5CGr16L4RKdg8HJ6GG2E7b1FCGLu5T3w3Z1A7SoxpdTLKxpxDLrqPAHFj7vHrBYfA3AKn74U3BH3WUPY1V4uMmPZ"
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
