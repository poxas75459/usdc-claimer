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
    "2ozaeTdMLo9XEJpSTp9iHQdtuJyURDTXRj2dbzeCAky8yxqyr4DZakuqXxMMkhkaozo7RBAUoEvLL2sAwGDZcNVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1ebuf5tfcqZu1BmZqcvZRmAgKbVmJdqeXnYWaiE9tg8Cqtnxxnj2rRWNe2Gs9z98QSNmf6QHNDmqtroYh6raRx",
  "key1": "33HVYw1EPR5Qqowwh9XQfwnGugprqMF7r5rg42QGeENFD2A3Kqvv1nYpH94ecVdE1hftcrz79QaeGwqqdaTUJkRc",
  "key2": "22QrdP3pMC8SgxgQERT2Tf4iTZc3a2fiKzDjLeTaS9u2PpaQcUKfCnBfs1NxVXU2xARZT31Mc4yWvaverzMYwaSs",
  "key3": "61YN7MKRMcoKF2ZgWPxMykmdii3UGhgvcHYszSDCtirQ29W9odxtBPYj9pmAkjdtmzPVuJgbLX9Z7HPqqyVcU8cD",
  "key4": "4bCD7z3JE1BB9pL482pSZP7YN61wi7taquT5xizKuxieh4UYwgSNk3eBvs36wqFXpD9685V1mndAtAtadpaq3Yow",
  "key5": "48TdXtXqaBoFuDDXSUQAvKSijRoF4FtUkcz5883VQ41yNfSqTquxSCTTMCU5aY5UN69TcRgDYdDAMbHKK5LufB6X",
  "key6": "XYAkBjxCvT9y28wriNKkcwnhYWKVedDvupLXHCwxNYL6qyTuDMw2DWpjJRJctn5JeTFSAyapj6Prgvgxf7t7b5Q",
  "key7": "4P4vks5JUWqHzYzt4QkEmJreaTJ4bZSywQvzaY1TJ7ajvVqC5K5yNT5shL7Q6w3pFpSifCdjSTTgByVLWr4Zroq7",
  "key8": "4v3L9bTgXvkw1dKsVZ1kbF73PkobuYpFKQnAehkUCtYtK1YdDVmUPAnXwFMnB2JCSWxfkXySgzKqRFtdNqttanas",
  "key9": "4ujNLqw4cP9B8C7oq8m9hGKER91x8ZxBoEsmiKY4ANjnHAcbqQDsd3mahtko8SKqybnp7NUwSgEuq6DFr2A6ASjP",
  "key10": "x4iUwUzxjx3xsAEVNAiT4twCJiRg1BkZHHbCjijPd7C3hRYeqf3rgWYk9GAh4RPvizTniKh4WfkznvtHicAKLcW",
  "key11": "HsjoKu1poDGCACjZ2eHWHwyN9MGgSRvgADuZYRRAob8eABMtgrp7mqwVeUTjMZPVzT7drQuMndtHW2XkpoGy5Bk",
  "key12": "2NZFJe9VDJbngRekK4Fcdb5MNZEFduRnJwv9ip3pGh49CrMFNY2kiNxrq8T3k2yRZyeoiMoSL3KjznbPG5vo4o5p",
  "key13": "4daukZG7iq88KodUj5eEuNmpUJvoE7TS24iGEEifrJV5NmuvoH4WzpJMoc323rZDnWk1mBrAUxdj51RK4E5XzTua",
  "key14": "3vyY5WnRZEMj458XtKTihZQyjBg4VYF6J1k2LHSZJaP3gQwP8y83KPH1hgwu6XoG4ut2FHVJwqHovZcUnJhnrS8T",
  "key15": "2Mk5fKKM72BtczGPPpabjKVfFiU5H5W4s9Ut7VkJvBDLhFcMcxJeNkSDfG6KeBjDB2cuqnctF8s2gPwuBctMUaTQ",
  "key16": "2hYTziCy6xq1ydtiWexMKm8Rj2vexsmgNqJz8qsLeMxWRD2rTrndqwnwem2pE7z8FYZXNjJ54ojgPttEUAimjqoY",
  "key17": "5gXjkXu9RPaCkVKoQidz7B3xuTVR4JJSPaQjX1ofkM1cws9hsC5eKY5LoLREbw1oh4jfe9skHQFkaHZH58ZNYeLY",
  "key18": "pcDC2FViTXqx45GfqxqJk8CamTiWxSwak5rE7k6TS51RGNiDQhB7eKvtkNco4rtxMuURatAm4aN3iYScTrw35Ga",
  "key19": "jeTJ1UcGAtSvtHczctgipfhWq5jt4zVbPE4ku5C1Uvb1ZKahHTsJboP4UBksN1J3j2sDveLnep4tC4b32ap8ZAy",
  "key20": "4VHJxZpj4P2TFXn68ZxeMr4EHbYmYvYJT9xCdXYpdereMmUKgppW3L8mTDt7JfxTQ5YLH5FWUX9bhg2vs8Y7mEL5",
  "key21": "3Dp1qY61482jFvn2KKT2yfRgjcKWHrg3NFFT61gVr5vRGRB1xcgMNqAVf3khYdXKRGYokcRbmFfn2JncFiebAoY5",
  "key22": "LoLRmaykqntP8w7DKozX5g37c1tnuS6KatTFFWfasHCJaJj729PyqyAtAkd676dfM6qrFLrwfiQZWX1PHb3UXQN",
  "key23": "2wGuVPCfVAWDGLXBcJnQcX1Th1UZjYTB6kbXMB9rzoE9qrVwGmiMn1zS8qgxoRGX18ES12q137DEmaJxrrFdgfUV",
  "key24": "2oe38isWx6MKKuZM8jqjPgQtHLYbmW2oB5JXcVp42QiFMoVSYexaZE4sYXrQYkBWEqyuehJJkw4DUFZHUpFzpCPZ",
  "key25": "5MCxqDXbrjBMoCwA46n4ufDvP7jh8kdYwADGWBjYH5ztBaJE7UrakiKkvMwNuU7nGW7iyuit2fQ6tx8gPKUPbjt5"
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
