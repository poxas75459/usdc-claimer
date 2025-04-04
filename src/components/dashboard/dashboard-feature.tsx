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
    "2zWafRTYBURT5up81WqYYBTfvfnbCWTq4kjeLUR2ApFJk8b3dQowh6yo4VkVqyYeRAQPojz1ZiNgs9vDwKoxBzSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWesmmrXR8ae4MCYvcdaD4zajVEdMuXSNufgYGuwVDBbePkomfnVwJnuKo68z1vy8SKMXpQtLd5PFStRQbEDPAM",
  "key1": "J3aTQxtj8r3EB7tMrjkeSamoTHR5vsx1j1MjYE56En1ayQfm4GmmS9sUkQXDUheJ9JFt5eBFpgsv3LzaeRMbyUe",
  "key2": "3eZsii3JCvZcxAY6YC1sVxTUg6LnoeXbs4iERg92XwgUEjjfAACdSzuAXbxjnXtSVgMmm7DbwP4PRcRYDtiiWwq5",
  "key3": "2F48R1S3JdxNntAnwwrkTLdHekXYWG36F3xEBtSapr6TXAKRV4oBv718FFB5WvkTi9rw2JN4a14dpMQuSLApw7bP",
  "key4": "25K1YD4avzVaWiEvFYrZDYd3qCwaBT21Y2UTZJ63pr7wkcB6qSLLHayNxMA5rigFSTkyT3m9zsYpRYXgixW6p8YE",
  "key5": "66sh55ukDj1fNm3w4kHqTqLtZn16VLZ7CfrGgBiaBPhFqJsf2ucicWW1f84GkuY8Fh1MX3ZNYNjdfxPkR5qJAGzX",
  "key6": "3vYgFkU9U9a5py5qUwh7kHbtRC5gWH7JmndGNFBgYVCja5uBvQ9BFN9ctEWYrJH2Bymv9e7mvPQmrFZb81y5sLJR",
  "key7": "2j4xhLLsNqNEExvGWixXTF6iutGhbQ9i4dBDYcfkvaFSWtH4zwofTMcVUoMGCXfU25tfGjyiUr9x7bYP4JBWHf1R",
  "key8": "3ri872gTtiwss8reqaJKuRiuXjdnhKz3MbgRpruXY64bPAZfRKZkqXxKHFW9v4ghZWmAivym47JFn5oKS4EfyPEY",
  "key9": "4ig35xEQGQSdAEYP7sQnvPX2T3dRp7AEDTA4nAr6GVFiwkb4KHjSM55UyjJ3G3jh3C1vqSJtEDnoKpWxp1Sso45T",
  "key10": "2bFSeiXLDBfopH1FbhthXSEPxqgagS6TAvHxY9fKGST5Xr3QGMVsqaA3fJe4uauKuwh7v2hboRu7wgEwCat8kf6b",
  "key11": "kHsb9ctjy7W8Prosz61sSa6Zu4rNUCgG8AqbHoLAACy2p1YCYkEUJdoVXb2qgwVM7cuDW38tTz99pEBestKjeGN",
  "key12": "TgXAvScxAcSZ9fo3J3B9CAJGETeXLDkrJBJA3z4QBQhRe1SctBdVqgfCVFJccb9DfPuqqrzV55dcs1Qp26W9KB5",
  "key13": "5nXHJ5oGwG73EPkojdbt38cA8h8j5QMT8DZdZEtgMhR2jtXvNafWVbNZV5GRrhtaPfcVQjA1wR6i2RwdYe3kEvtC",
  "key14": "27fKKz8hipEY9MeyDsKQNZ43vucECHYppxWrjGcfJdUiQUPmx85rsVUEnGpQYZuUGgDCSP6nvyVrCY8ihUmNmBtZ",
  "key15": "3gezag7j46qdzXmDbgEYrssRm5KSo8HQS1SsTrcwfRJKBw4xeMVdnTzfAQj9NLJTQ8KxmPmwasj9AqrqEecMJfvt",
  "key16": "4yyNvbWcgND135d7gGowBRkqW1Zwi4h33VpyFFw2BxxTy46GLKPgnkvV5MX8HWMNVXyK9G7NWkgLrUHbqsrsjNpX",
  "key17": "49U9tNwMXQnqHLKJDMAaXrAoWm75t37nSY6XqfCyPDiEp1rpURewR5QMyqnA2JDRrm6VUFjMN274ywF4D46i8HCT",
  "key18": "j528jZeWNqyZqMiRskoBEah5WbGcwEFgwpvauNmoNPDmsWXBmaHfxkT6xfainrm2jreg2UV9raLkVFGBMEgtEfN",
  "key19": "qKoGg5hGiSNq5zgvbzY4MFTi2cJfKeoEhcHLKQ6W9xjxeLFocrqfex5rgrjYbdrjiwKpQvM8Af6hrjZfAi1AT88",
  "key20": "3Ahdcqi3pWes8eNcxSAPEDwXZNEXFQBcmsRPCQEVKmKaSYpCY4KEmW8fgDh5xFhc6MH97yxc6amfaoGi9XiK12wP",
  "key21": "3AHM3cow3hu4NPAJaKoemTL4j4NLi8PkUQFomuj9v5PFTCNy2pQAg5TrEnDf8KhDm2tgRbcisDmErQaVrFqw9ZNK",
  "key22": "3an26HF7RQeM98PnfE37MRuJtf4L69hZXv7CepHqv7datCTbTXT7jBbx8QepvuzEJtha2tGW4oG8bDxpmJcCsX26",
  "key23": "2eMrZ8YKhwpapJQMMXPCUcrLyzGAU1rPZ4CzWd9AA3asbqyNtxetXmqcQqR6dEVYZQ2CMVA2SWuFhHoVBHPphhTb",
  "key24": "4nBwbtw7aAZxK3fbXjSVzuG2CQahAR8eotCvrCMfM4YrodQwUXuYGwW7ZBo1i5yhKMYQg7QYB38FKpP4zyQ4AhtP",
  "key25": "TEpzejDj21SMj1FN7LDszK71kPxgPRc2Hg22ZSuBG2J5ZL5X3ZpuXA9MMSNCsFR5bmCWgAcEUAgi82Kud8tYnZx",
  "key26": "2F2siEftDyYgWdjr99j9LgrANJtdz6oVRHr7XmJ8R8NfbxXx1JQkRoXiSBSesrQb7eVdxpuoGkuQQVNe3fHJAHxJ"
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
