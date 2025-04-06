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
    "4UjpTM9GV3sXwfmFFfN84bx8nsaGQ8ow3kvrWriJpiZgGBUjPfqeoG3GRAbqVhdd3KUEov8PAHm5u3NoQ3SNkMBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wiQBLePDxTjPpoc9pcc7pYarRV1wcDdLudeehp7ygjHTEJqn8E1xzhkK9TGqsXoPgg6c6aTapcNBnR3DAsjC3V",
  "key1": "5Gg3Z9te3e75xX7yF54pdhtwgtZBzCsLdvRJBSN9mKcDb45oC1mrmsQLaBS5gU8PpaB9ZEATkxZtuQyCWKAy9DCt",
  "key2": "fid8iWTDnmjb8yHEr2D32KuCJ1rtWTfXb7dt425V69QdxZs3m72PCawr5Fj3SEeF7FkQdr9J6d3rBHWcqSDu6La",
  "key3": "37Y9RiUU564dTZeobqRzjpSnrfvJKwHnNjq63YXNw6TkZMYVRsLX1rwr8fnSrDR4vkvXh5rLRjK3KsBtb93zQBjg",
  "key4": "59tjFmk9dfXaSaVZtAQDgELb1MTybxBswEFxAN6718QJudwHAua4Z7wmXLQmY1gG7o4GvAR5764ebHavB6CcmfmD",
  "key5": "4YtWP4NoyUqFrgehqjTZHoy1HsdYw86Dr6JxpV2RaRmq5qTfq4jMt4BruPPjTAT5WApXEX6SnpbLR1eBVexPqp9V",
  "key6": "4L7LnsmWh76rprrYn92Y7782EjPgGRjrLojEA3Qr5L9Ybwax7N75p477u9s8a5zLKoZH4vHCcWZTM247CQwaa3mt",
  "key7": "3whvaMRFdLj5W1pjSKA7dBXJVL9HdpheYhtzgP7AbXPXpniYU3SFK5e4jav6jsQrT8cZKfJLQQNCw2XMSa114MgJ",
  "key8": "2bRQG3jSa6b7gGEEjeEHFGUYYMtumx1jRoZ4fHaLDiqFtdvfUM3GRStZi51Nw4zCbmv2nBxxg3qtwKgYjxeCJMbx",
  "key9": "3ZvJjjuZZQ2G3PdU87CtX3ULbatL6SS5aamqQXrZZ4udjZ4jec6PAeoyNkQtJNBwv6FL16cFgD2ir2ecpFRTEP82",
  "key10": "5HnTZrA52S8TwXJoaGnVpZEjyUNj5prqTw1kSkXh6wiJ4yNPGoSyXVHaNKMn69HP5nJA7uKyTJjr7pFgd5EEeDey",
  "key11": "2MQwFAwR6H8QDpGctJ3P6L5v4KphWh3xZ4XEQnLJEUGkma5eL7NtGGjJDjiAKsmnZXZfrW7VmPoyLjdm5U9QTspg",
  "key12": "3dTuxkLfTYiygzf8osUemP9vioXw9dfGMhn9UXs5CRYwv21XqzoYhudYZjmtCv7d76ryYzkephppDfUFKUtdyjco",
  "key13": "4oZpV72PGoAWzvxCkEXtT36HpgUvzaiwvE6TbxYqN1v1yvDqyMAtu6M43EjnreBrFmxdr6oM4ApfXTyDmeegSUqA",
  "key14": "4gom43NCM4saK1VyVxCCHH9eJ7tSkKbaiajrP2gks2WQMSZYduAcGPBq5D8e5nJGjMDr4sCmmEynVhBftJa7GqZd",
  "key15": "U5WVorqBS4rBzX6q7TpoDG7peKsv1zJEKFkK2AvmSZEcvAaGhDxW86Jo8g41vi71PFpEBBzzQ8eJvqx5t4kc4h6",
  "key16": "5wLZfaiTVLgZApoUtYYWaDtZBnXchr2wBfYnNd8NGweRH3brREknbxxuAt2oRkX47xcttTMTTTjr5JD5CXYWgBzn",
  "key17": "4HRGAnsievxADv9ZqTUaNZC5MhExZdhmp1XgHhK1WWc3Tu3a5aYeekDZHUr7WusyB3EVV5ZsaKi8PLTSE7H8Z5GG",
  "key18": "625yrSpDN8ENxFg8k5x8BVtnkZJjVNacqDJkLk1ema1zAvQPi1uQgpqk9B5dxfYbSEPztHG9iC2dXKTdwdHShuao",
  "key19": "WaViYU26J9PKMdAtNFJtR3AoyF1YQXQpmB2eQG91E9B3Y52sXuRDtmqqUu8vCUAa5D2yWWeV9p5MzLC6DTyzk7V",
  "key20": "2faAJ2RphX27YgZwcjPirg2fsD4StGS42ZPK7gks7YmB5EmfsT2ZfngLKKx7yCJ6MmAHRqiXTMAtAnnUaftSc42u",
  "key21": "3wqhviRmwoLQZayxTteERtHfgqGyeVVQsVUzWVGSW4RUSLGUoc253e766Jcivoz9pd2kQVcRSwrkFwX9sHAnhU8f",
  "key22": "S5iXNB9qn8ZeiNrjSfU5Cwj7dg6JaKKH9JmrdBVEKE7FCPXrLLiX4daXZXMcygHPv9XhFpmvsK2pSMvLFFKEoPp",
  "key23": "54MEqAJn8uMWkg8yf3BJbUGhbRqAzgEVHF6rt8vziLw7VpQrQDtBDyqqm1DXrhs3ynfnjokHfvZDTnacfaErfzSQ",
  "key24": "5b8YQhUsjApRGihLiqr4FSFVoh1UqG19tXAhSUSgunMvWw3Sir87gUnwtbG3APzxfS6LsUDfDq1MW5X1ug5V3Nnm",
  "key25": "4WywykvJejKQ3KnTJrb1Gitdt9uy2MA5pFfxcDnLPoJGvTAYw3ecyD2Yx1PDqv6sxQrccd5rXhQLBctttcRScRAu",
  "key26": "4WUTzUqoLs87VYydAufxRtRno4nBgR6vVuDK3aKktHDnFH9nn8Wj5NGCwqQ4qe8jbtZyPpCjzLWiqz5B2KiAAhVe"
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
