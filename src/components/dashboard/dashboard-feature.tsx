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
    "3xYKGh5ioUiva4LvQgPWdDFvFt8wQW2DC3YzWwMZepfHga5ex8qCbfS2DFXkjn4beTAZaTMx7faNbVvGK6tZgcDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxF3y6sCUPzbixyrNEMtAthLStAj3Db7dzdr8MQ1p3X7Nuc9Dm8AigykgX118oxdA2PysYmS79mFK4w9RnR3ma3",
  "key1": "4NJ3FwbMwgL7p6r8nH75k5Kd3BcPE5NYrJJMNtpxQBX1gM23Kuy8P2P1wMZcBg6vdT2N8nv78WwJGc4NpW1eNCz6",
  "key2": "4WtifcpdK6WQz1qYgcogXV1kYDzZUZabDTR9MhRT6eK7Jm14vNGDDeJUSdk2XjU2v7bwfjsxWQFN2H8hQTZWyhYT",
  "key3": "2KhwZjCkpet4iTU9bkaA82yfk2B3EhKKo5vzVmdSwYvooGJPG4WMVUyRGhAMJ68TqzfxPgicsoZp7tHkMffv1APp",
  "key4": "2vgUNvQP75Gvbuy6CZooKvB1ZdTP6BrJpgdoXGEYvsDeLDrSi4SZf8t1vvuD1bHqwxWAy35WgiU3vPmMPc3Gvxgr",
  "key5": "2gTuXWzhfV2yw9mLvH5AewqyyhPBHFbNCuDbmC5B4JPCWN5tH1YyoVVVt8zSEb3iP4St5uCSCgCJDsi58dofL9NQ",
  "key6": "5SCNaBUdPVEqSa4Xo26pWXETf2t5ZLu7UcYn5mJU5tbJQdUnBYFP3P2stoGF1noVc7HpLZqjUTos5HpcDTqtSCYD",
  "key7": "2h2aGnu9NwQrjbguEpk3ozsPfzW9NSGeLzPH4fLybmLJUckmze5EmfscndrNoScKpJj5qpXkAV7LHUdSyJyvny5Q",
  "key8": "3DNB5iWGwqxexBZyE6CbqCNrki16BTrdZLUmGhDivuvc2GmL15im14yHjWre9Jc19w5Jfdy7yx2Sn9reCdEAET4f",
  "key9": "2D2GMyCya9N8QMhroj1pfTuYV95Fp7rABacJzRN15AcfJgxUVLtGibsD4tuMZfgbqJDmV1qadZNnkYRnj6jPCg2R",
  "key10": "3cFJ9fU1D49Eu1Brj9Qcpz4tTfZcMW9766bztTXxRYFxAs82PgKiYvpEEMx9JZx1Hcnjw5DGBpWavzbdRwz9MK4E",
  "key11": "4p1CZNGm5QoNcRMkaMdEgZo2q3t4uCvkcFywMcXPAxBEgYPihNv8gWZG9LoE7VgpTBFEfUPRDBuHfb81mQ5txb1e",
  "key12": "J3LDrEgGnES99z65b268bbvtJwpuvtcvehtq5aDDQNgjz6Gy4ue1BWHzVPqarWuRs3pVrYMQ8La1okbJXJZZjcg",
  "key13": "3krcpSjjc1kbrQQuxddfCmDniLxLMubZN7qXKJMAXsQUsdg4uPiHWC5CcSjimCafUY5ARkQHAJa2uNHDe1hwydi9",
  "key14": "5qcf7GrE9GkMMsGtnMWeNVpSkQ4XEYfbQgEvFWj59Zxukzqr8JtQjEWCTLsJk9iCS5kSu22nC6vTLhsoefyZmtMV",
  "key15": "2h4PUTKeG8Tm7r6cocDpZyYZ6cAGNnzZcaCTusDd4Mey1rpdyKhtn8LTebF1r91tJBbopVbYrF76KoZznCKZAaCT",
  "key16": "cE5hyfW4iBFVM4Pt6kHJ5UGyf2fB1ogki6vLgemAXJuqxK176vmvfTe2vQzw6cpfyTbkDisvxLjhYUJssTq88iR",
  "key17": "3f1QFwaVyZ5cX9StuRiJHq2Db9tq35Uq5smBh3b7cWNo88eoxjXsM8erQmA6PHkgz5DRJxQugotnBo5dsfTu2cvT",
  "key18": "4ZVsezuibQyGM7epn5chHGiBGaQNXBD16M7cumfsJQ6F2N5wJrwtk7GEP6XSC6mV7zGAy5AxVNA9jaPbJkhivD9M",
  "key19": "2vqfWb5LuRQ7Uqb2JErb35wdH68KMZfbdDA1UkA7SSwkG4fNAjsipAUVQDN1AC1VvdtuZ8iGfY2h588UYax2utQU",
  "key20": "5ErL2NUJQUm5sjJiKR73ZNaCJ6yHTH2C4ST2Bfz7vrJeKpnTEYxjcDKyvkjxJJsnM1HRgWnP6mCMyicMXQBrgVMo",
  "key21": "5uYkCALg6sihNExoMdFP9oPSY32WDGM5JAKJxczjqYwoBeH22RsGas5hWhprm8NJKeJjmDkv9SrFvComkcnBRbfJ",
  "key22": "3VRytSauh8hkZKxfXCupNryvTkkQf6V8JMQBLVoJqekhiFvm82CVkCz7zDjStjifH7JFpqLjdXTDx8SAE9XraFu8",
  "key23": "2pJkpWDrscMQ2mAPn78bnAvh3sruie6SDaaY9LnqMUrdbnTMpHgU8wFUtvMrkyBdfmEjaXSLqcjFv8GyKRj8ak3Q",
  "key24": "5p14EswwaQJPCoZEFg3yKASfsb2QZ2UXDr6RBkw4dpzEN3kbxiZv6Z16nkDU5zPGoK7vdue6RC9Qps2RRKbeP8Pe",
  "key25": "2YgHyDMNpRJLRgfHT9b1ZzKd8edZWkGZZTDyxUFZoSvhDPA4MFWDaQC7EMzH4PxagTgEXv2tH6jtkdB9LLmcAewU",
  "key26": "5yykqZBRFMgkMY621UK4ESqxSac2AanGjpAsNAt6qmCprgPJpjwUU3VRgSBng2DVVUXSu5hUPcxgjUGJaxuDFqfR",
  "key27": "4kfDDy1aKU2Mr4X3o9XJD1KEZ51GHVQArhkM9KiP4AiXy3Nyb93kKTL9ZxCC3f4cuyLbCvxDypVNBuqeQbs9io2S",
  "key28": "c9DRkwZWtwd8NGSSTABKaio1XKJnBjGgwar7p1kHDPPmwbJENidccJqtozonjLztQVfjj66HSzjgzxfHmmBRDib",
  "key29": "f8PUaYSmprdd3GP9PUdsktXQQYbn4q1R5bMi76Uu5updGazc5coDWWxcX8evrEZoVqoF1RDfnPLJ6FzPtQmJFtY",
  "key30": "3kSvo52kCeVAT1ycpyncveBdKSPDMzczhAd7YLdHPbuKcwmbWX7C82r3n8bicDrdQpDzTGVA96aJzKGoQfJhgnyu"
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
