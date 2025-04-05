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
    "5ZqQDtwLkCDaUCnoR17qfoUmrVZiHgqCgCnodpA9FAiyn4AKfx8E8FXTM86eywkzp3KRZ1vkYYnkWUsDcxgNXeiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EU7jFZY4SH8DUyU8or93n9NJ6TkoyeU4dYL9xTZkrbgBxF4tBTSaZQwALaMwmtrEWmCuPTYqLDT3mjj89nqkQ7o",
  "key1": "5aDidUXFuJv7X4zcb64m3YT2HXQEue18prCjJDBMKN24Z2hrHSL1V7h98t7aikg99U34hV6svWFxLmLctm3VFPF9",
  "key2": "vHRKBt9X5L16svWFfGNFM5ACgdH1QZmF5QFXh6FWinoSmYpqFjT2qwPeGgddoo4LEqF2Z6TVA2BuqCAnmbPPH5D",
  "key3": "9H8ZgSNdz1hw51zabMMuXj8vbtet2aPk5MzFkLHUfbCsc8KmfMknp1EhjFzqhnghx8RkSRk3Sw8ynitLdgpwrh5",
  "key4": "F5kdEfEGaxWWBxwN7864naqujrPZg5yWbNPWScoN5dMs9ecqarPxW4aS1nWF5Z7ddUcc1gHxdsuUMWREZYyjwE5",
  "key5": "3ZcxuQUnXSVvFBnyQPk1QpXJyFpsv2bw9V14zTRidHdS1K6rw4HFhyVyB8riMuSwv8vRbxcLboJdzDcytpxajbAw",
  "key6": "3EUiKuvd172pEKHmVFaLjCKCALcCu3fh5DKKy4UokSgjHVFmivzsf43n8GRHDA8nq68eJQ8HP6rkRcU8ZhBamyMz",
  "key7": "2mqm6h9j85ysmymvT88Hsrysen5uWUqhaiFoyimAgat1v9szL8Dje4Z9R7Ge3usxeQydLqX9t8mEfC8iCVByX4u9",
  "key8": "5XYrtby2rqrTqsmte7LMJBt4bK7pPkrFidPvyu3KJh6kWHvKPY62YkHkPYtPEP14FHYjH2osouwAxr4g6n2vnMQe",
  "key9": "48HV49hiLx7a8rqkLUmfZsgEomG8JmrM88XZDQ5UrweQbTdvgDnjEfh3SiVs6mUgC6qNucbxF645g4unNYqCzGUm",
  "key10": "5Sq1FKN11N7cgZw3x341zgas9MXWqU2a4YgtPEE9Ym9RqUJ1xjSTqXbxoF8CAKfnnAcUiNPRqtu5iiihjmWUdPpL",
  "key11": "3vNUNyiW4AuKBpSHGuiqKTpjGfFAmVVoEYVJP22uLcyStFwXU2mEGqARvov5cptgFyf96q4wLZjtPZ9gM3wHJZZr",
  "key12": "2CyW3ZiwvHu9jxnR8LnMaTmA6oEqKrmx5PZDSd3kH2v2BMKnJNTQwkzRGfhwrX8fbTenqUqX8pUVXjzN3Y7i9NLm",
  "key13": "3oNCs2daceTETKeY5cmefruyFyJWTySAzViobYKpsoiXY4pCp3e1wJ1ksJib4vn2GZWbvYw93CWryGbSTBSE9FSU",
  "key14": "5w8kVs9qpTYkfEe3PDMAnQmZ8s52BMQkpu8dH3EmRrPkEYD9d5fr6oQubD7TGtchMpTEaGuLEGh3JdvKE8nWWMPF",
  "key15": "a3nv1vbm21yepbP99zoqXag8sL9YghaUgu8eLaP5AKqcJAc3r7oVcHMviZkjVcAHWagSy8Xj8q7VEkUwQFj3CdQ",
  "key16": "5F3f5wA6WN4wEMqfKaMyMd2YC8Dk1CJNDwbC9knvirwNqmUQzkjn3JD4cSrSiSF57sFXyrcg7v6cuwK6H7M1VzDy",
  "key17": "zpFSqLRgF6Ma1AaGt2iuKdzUfrCfbaKvg5CLKJFimSbPoTLQMwecAfhgXqpjsyNErxrY8cNDV5HE4hsTmJxkH9Y",
  "key18": "2mPbNkrtxyVPnw4YQXndcCgHAjBwkEDkE9gz6UxiGz5VEZEta6CpQJCvn6oXgWDocMaBUm7ym9Zuf4Px3gvGzaB8",
  "key19": "3UvGw7vR4d8VsHWndKzugirQ8jdVANx71mn9dJc1ygUyoqEYrTPxP79rk1Jo5fRHEcHX8eYRqCVZDxaQpuqNnXNk",
  "key20": "3v4PKYPgrN7LTqWkrcYtQHoztkNV7wUc3LLymH6CCM1VHmRswXBAMufVV33deDgVCVBzyT4euP1Nhh3BZP98tmLA",
  "key21": "5PqfDAYXUdNRXdSv9CMuzxgAi8m3SgBJfCz8fZdc44h3HBPp7TUY1MWm17vpFJkejSu1D411ctXKjF3WiKeC2msz",
  "key22": "4heXctrVD2ACCBnuYa9sLk6r2Xo2TfztcshsiBiFN3FFDhKDkhXSNX4KjGDLpp4Wy56G4FL4NsaNQ55grhDwLYAW",
  "key23": "44rdLWd6kkLfVBixX4jssanPdrvJ1x7ATiW9NXV6CLvdeBvQYp7Lypoio1AkjKYhzEeTZT3oRoPPH1c6tsapojnN",
  "key24": "3JTRTfxzFbYsQBceNiYPzbKzt1DvF2w8LMfcTcvWVxNZz9Cw9fk8EMEd6aygUuaCKnmCgNrxvamqcJDX75HL8ZFg"
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
