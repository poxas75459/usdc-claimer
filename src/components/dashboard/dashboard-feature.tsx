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
    "4WVAJcxXmJ9wnqzMxqmzjWiW6VjqiVZmJ9aNhK5AHEmTbbSKd4FWfPquWeSkeL2XhEnbRrKAQCne4RVEm98RWj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W1aBtcxPoNpwVkZ2xGzMy14g2YYGkLHTMbRihPFPyrwKSTJkrZpRr4Lft1zAnBus3zLQYo4u1Ue4ZphrVLUp8ki",
  "key1": "auWaxKECXn8yXE31YTf2DYnatZJYNZRzqngJRHmVqiEKqjz4Xr43Htdx8UsYK3qDMXsxFjhN8xomHKoNf5vQFkt",
  "key2": "5GsaMs1Xk9m2BvYKTFeg8Cg3SnrXHpTUyPYDnQyeSS3vxTbEZLzezmpQeZCvjju6UfWec1Lqb3kfTgnvtq8S4489",
  "key3": "4oBkCjmDydVmQY8Q94iBJ1FKr7BzWFpKCtCGS7TDBoKai9hMn65ZLBzUMRgQknHXRnJarYAGjBXtMLLXnQgXWX8S",
  "key4": "2Ge37vceSnfMCp4eE2KdyZmAKWFkCACAzQjH2Tm2YfnW4rjMNYoTvCLBHTLPgq3qk1k2GHxE3pvs9dN17c87vNy6",
  "key5": "JkF8WBGgYTU8pFHvZjP7Nt1qrAGp8Z4FLiFAyCZ3MSegAg82CakZWdmV68geMxqXJictjdqyt7tUS2gD9rsFEtr",
  "key6": "5RPvmtJciiF9rFMvwCWrsFj6Ptz5ybbsKfpxrdVhVwGaChteJpazSYaE1sAcRJMCrNWdExf7KmdhEjwCStUe8eiu",
  "key7": "49f8NzBS8orp4Dae3tNniePSUHGZFbuFmJ34txWyvh1erjL8eiKezn1wzqHuBrzN9TgGfNrZJSiLEcsqGzf5bX7F",
  "key8": "2YsKHqrKLNnqg5FQBxzjqyJpfvqdSUwybkfigE1kZm2CLiAog4BDqN6MzkUYt1v9Uj97ksCZwfBeM13WDmBWY63s",
  "key9": "4EKcPhG3aCjuhsyUhsEE6Cj6EtHoTaS9Svcc6v5NZZXUAGv1XEReB5ux8hyqJBSJATH8GJpumWcFdaPx5ghxtgz3",
  "key10": "43N3ru3m81oizk4QrFL8BaZQacdvvrDK3EK8SoohayB4HC73WHTFZLfC92Q6UXjFtVLYBSSfSqjvZ1DUZP2Rvk7Z",
  "key11": "U8QFuD12gcDyGQfnHgY6GGRmNJm9U19R3S2dVGYzHmpA9u4gd6TnCC7rsScipdsRX4MNh8K77qVsNbtocHsFb3W",
  "key12": "2unWh37eMX596sFyLcoafoSd6HA3dCcaTdiGNoNBofpCC9aAU63XVzrFhYLBY3yAjSZaWsyjtHBj2BULhkvpa7tU",
  "key13": "5agW8yweK1UZ5Dzjc7ZPW6S8sukaoCkKsCg333XPQBKBwGMaVeUnDVHtPqyguWecmSHb15QcmbiSkHVUAan3v1pG",
  "key14": "4WfNdpAKqivuPCXKcz5HkJtPan6ZLxL1a48xiEyLV1KyypKp9HhY9vzTdExJYF5pEBggxjhFwhxN9ptuZGWvDVnU",
  "key15": "kDwneLtwgietK4xifSQ1PQpr5Ro16YN1SHnTZo8FPJjBfw6js51fisKkcZuMiHp8KECagurPixipz5zU9B9br6C",
  "key16": "5YHNkkqP4hxnL4f8nEjjDSmSErzNR8GqYUJdsppseChLCh8dau8aCtFgoqaby5QP6fkmG4ewmvTT9ydjtGNyWXZ3",
  "key17": "45TSUujLhfyPgTUGJKDxTa1W3ZwGsrbUJ5dFp1xCnpBE6VNWXxWjYLqBHJaUvva7u3RFsNQrVdAm4QASTpfgnWKn",
  "key18": "5u1gucpSUdP661oWiCcPY3yp21XppDJ2A47NtkBT3aCVG3ihL3LYFrKWBkTHRAyn5STxMVafBqA1Wt1dKVrSWShz",
  "key19": "4qTeW6uL2geMsWS17BCmcjaRxEXRHX96b2QmYHmA6hprxJDdE6nNjEoH5uwQ5AbTLSkJjzbdpcGD3hEn4oGvW73j",
  "key20": "suXHpXhtyBZNu5tMiSHWzYbd2CzH4fyDowWESpPfFcxKKgRpmLYJUy8KJqUt8KQZr4W9U3frCAB4jVi1wze6PHE",
  "key21": "66US8n6oaMfwa6biKFZ6WtHEkyD2ZbVGcPc6B8447awWcivFg2JsiyaBndnQUaXnUF8RwoUtkJKBu4CU5ZXBuRX4",
  "key22": "KpwefHn8msvjkTBbZjXdUwHQA6yPKLiJLRJZHsiGLtnFPvEFgxbiyjWVxKvXhu5GiG5RDHdmxNEZJoiXUKjXzjQ",
  "key23": "5dFaVvaortbGueRAVn7xSDu56v59UBG7SuWRf1YssYNnFzCmxZcnTFB81deMbn94NDWdRzEDxfqxbigiTxfXhcDR",
  "key24": "p7CD7kbNaXDmNFPTw6VCFHwZv5pzMgZXkNV7Go82kVFQdRhs5GehTdcLtKbcXuBniVX71XomvQrrxKCT8r9i4Q8",
  "key25": "3fWoiX9usXTDR1C1hjQJ7mhxUVo5Q2zgxnPmAb4sHGZzfY8HFE6YvNSHyxUpaFQgV7XFMN1BxpvCyMZ2jLXKRuxM",
  "key26": "HLiS2YGCpM7VzgXr41LUWioAaS37t4iGM4fCVu9qb3xPKJaB3s2AZJcLTtCVZx6Crr5wYqax2YoUwt8KFhcEoQN"
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
