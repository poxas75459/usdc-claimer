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
    "39K4gjtmitn7YnBEoBuxow1C1tyXvJuwL47f2AGWP7nL7qBUgTBZoY1pxBgkYoj6uL6AB7Xyx2gNc1z5VuREj14K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3SsSLkhU3dgAd64zf2zhwqb6hrFs2hFYvDV6K4B4pQUVakwHhFpQDKLAYSmXnsZUAz2P1d8rsDebXX9RFPwEeS",
  "key1": "4PjtLRJ86GfRh6ZrWkxD4fxCVNAYfXGVUGw4oJLEh7L3Jn1ZPhmx823SEKgHenSEgqKyXBHkbVxzbWMAH1Pu6UeB",
  "key2": "26ko4ECocyT4PP7gbWoYgW4upXiE2TDuiHQc8Gx58XZfz96TmbgNJxEbf8DBrdFCZd1SGir51UdnT3qzNtr2izNh",
  "key3": "segt6jAmW349pVJB1m8imHxnQUKykJsyx2MbU81ZLj3Rq8ePWo8UU5tHyGNY5QGJApD7gaxUFxpX4GzB7HqwJ7F",
  "key4": "2ruFQLMuKJKZcXQB5GdRQtAAv2jd8t6B5vt2jvaTm6xWK7tderg33kr2k7cfv7eJkmkDKEQQGiaTsYZozLr1pRxh",
  "key5": "4rZpKg1dvW7DnYWoZ27LrmdZqP6TZDnCzmEqfd8Up8FaUctK9NPZUpbcMyUmAYprktxai8L5AovXyaqsQ7f7rtwn",
  "key6": "2Z7kAzfypMgSEziCvS7T3Zoqzpej3osAgaVxCVK2CgMRSLz2BbR9epQcnATtVxSoUfNoNBSQrLmDtg3Ceq3urQd2",
  "key7": "5HF8kpfA99DRxgqyES4P3cju2KdY1JR3Wz4WSz25FWpx35X9Pbht46RR6xFt2JbUaMY4uoqh4EqGDoibZqV59pDL",
  "key8": "3PHnRZVy3HeNk9Q4ZiFNnC3gSg3dEgcNd6eQ4hP55fuaESxXJvtVQmGPYFUCk4LbqiQLxsm5v2fAt2MG2soLtu3D",
  "key9": "2BP8F6kW4L5vFPsgy1abVfpKEdhxobSfpB8KAfKekXxNfZDqTC8M7M2fqrNXEWrcLLLAo8GMyLWoPizFbRMo7M9M",
  "key10": "2BNZUTWWShsw7ovw4J5gdPwvQhKQvdLDgdsYjpxqpUDG6JDpdZsyjyXNhTyJrXd6adWVLJXmbaMD9Yzw8UjN9c7T",
  "key11": "5b9hQeqcUTkrByST3XnNBrVgnozvBjSCkCjn9iVYnuz1matPegbCrYquxLBEayrrDEe9ECoaPXaKeGXCPbuGyMEB",
  "key12": "srTMWrfjVfXVtCzLL6WH84DFoDqPukLsdXAyY7vKgvsQWKP3CFwJigpPs3hw9wHWKnFQF6iH1BAsQ61yaBbPTo1",
  "key13": "28mx3HPfiTQdzKcspJK7t5nGxC45iVGyN57NBfmwWWypaTaDej1pd9SDK5W2GLFyfJsAevzqACyC56xfPG1kEocv",
  "key14": "21ViPPvNFLkdxsqHurnGSozPq1w9WUjSP8VAtTbKeE1Ub2aSgZwTEiF2Numt77MGpxmJ7LPXNnNkymh3RdtaGVQN",
  "key15": "3aLXV2aV8Ya5539JQ627qamiLC55VNNSSGMcoCAmm92FM9RcrD6C7nDpwXJctgvZN3KB9NZUQdK3ukxx2o8fUc2X",
  "key16": "2WPhwyMTbrqrULw9CqJDTWR9rqat2C1KJRqUoqydJnGSXKf227kJDEuxHUPVC9MuZmwJ4uyLikUjTJ1RcNipZCVZ",
  "key17": "uR5nVKsYzDH935GXCf8w7ixQ4hhThxLai5JZL1ndLWAVAQU3K6mBZ8ZAv5Xa8KcDTdnWKyaNk8fFcNjWS6purP7",
  "key18": "3rHgsAtbuauu9GH2NxWTktjUQ9bEn8aRcX4NafSgq7tMXBChXNuzCPSPwB6qEDVigW6r6CHHrQRN2qR1VZ3Tw3Rk",
  "key19": "2VN7WYQGYF6iDT6dBdm41vzLPzb1EjzU4TCYiDLtHAeogzHEp8ZMuLGv5i8BUqrTx1SkGfxZfw5izrqPwnjVaPmw",
  "key20": "Q2zUD8hi7C8T68NtCec84RvEtMEBxwvNknSGw2eBPr2DtmHXYDzc2wDQn3ViTRtmRJW7EWGJgb8CStjTAr7e5oS",
  "key21": "4bq8XoTE1NfWgkCoKMJPm5BdRnD35x4vJjJ4otq9KoAmyQEEdfV4dW8rh1G2ZE8s7VNchCUspZnVdDhRvDXSG35q",
  "key22": "2tXRwBAUZ3pE5U5PpTJKjNWbJxEhoHawo5cDRJTdqQdB3LBxG2ZwjHgFQUgjVN1pb216Veci2d9pGKXSQNjvHJCL",
  "key23": "562yotqdC7coHfvox7zt868zs7zSBQJHyDF3sQroPQM8xFpDJzzvF8pDDUk4rJyfuasmP7j4TTmbBHsSFbqsMYoc",
  "key24": "2uv75w4zYJ2j3yNGMzG3QoV7T27pEDBBXh3TXY7jJimQydjhQxiXYsxgiNzNBSCwsusq4LjmZtu4PCbkxdR853QV",
  "key25": "kQgcwsLuRvqPnT8UcSrJy4rNwzidhJ4gfJVmsgYEm75mtwYNbmvkYX6boHbYh8pLyf8fVd2rcftcwPiYop2J7Np",
  "key26": "3hioDKr7jkUDqtj92XQBkPFJBNWdgtTogoVUzht5u3U3b8Ls3e9BWBmB8D45PK59TY6pQT89qV5AzwCEt5p2upPd",
  "key27": "4vfiUMfNs6ho1iVmdNhK88ohuurC36yRG9Y3uk8gz8eNyxvMyvjCZ77dFFPRBwerGv7HpT931416cGFLUHMga3nV",
  "key28": "3YcaUenKpvzghFjt98Qe2zoGTvz8xxtDoghxAEH7kVDy9CFuxonNbcJFxsuoyL4dDZHfPh2fH2XY2ea1LDeSsuXo",
  "key29": "hobLZrSoSAtZ6burZpAmdCgZ8rEPifB7xNmmtrZCyeKbPuE8EtB5YGGLbJWSVZqd6USXMePoTY3VhqJkLWuzmuM",
  "key30": "4A61QJPByiXwk3p66pGUwHJEZ7c4hf4DFiSpWUSCFhemh5J8ed8jqbfKNzpLK9JaQGY4udRsU49vPNCDz3sT8cZz",
  "key31": "3L7LdytGaUJQESmFSBs8KhVS4zAyxtWYLkphzxXAbDGBnN4iYEmh5EMS9CYfgwRVq81SjTgPpD1NY6JmCENwstWY",
  "key32": "27osAh7WbcdSRdbwp7RY1vSeWPJz4YSHpfXUJNfWeycsdySssM6oMjgz4zAGACaDi6kut9jZ91fkv2DUiBJT6V5Q"
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
