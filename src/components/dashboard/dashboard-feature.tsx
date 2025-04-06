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
    "2CrYGQS5hqupBGmmZZRsUR6cxQxqujQPAy2vSyy8S5h7FUtromYQtsAot4xPcNRfxF5oNHtznN6JvBs7yvP8GFi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDCcmXpUZ2mkhCBsXh7swhedf4oXZHwjyrSmR9A3tB4FPFKZmQpKZj8WiJS7qzYMGosw6HsdVitfiACxi2o95dH",
  "key1": "282zZfg8MgisNBEfGFYDnNgEtuyb3NP6e51M9FxfAfSsfQpkyvzmn7FuebDymoME4tAg6LpLJHW9RyeoWyZgT3ow",
  "key2": "hNQ6p1CmZnLACsh6gFRhxFSEwN9tZqCFmbEkbkbdLfpriWLUpy7NKdWEawoCBjH4rPFhpQM7WjiswqJocZtTStK",
  "key3": "339KQxU2avQYZRbcyapEmKkxYEEzLuineA7SRkkvwKp77HX4j1JjCyG9ybUG9sR689iA8QSZ33EtArorvPrUmZVS",
  "key4": "2bbTbGwhTkKWLgt4nJKX5Sg3MgSj3xFD4bdBQD5LHuSfY9hMZXXeuAeKFymqJXsiURicoX7yZCpKgw9G3tDfVk1J",
  "key5": "5ymPRbvfVFchP1ZKiBxZQhXEHtq5ytrSGA6LfUVupvYSNWZNQsdBm8t7LdhodGmv29MoY67nFJRY3SCJXKrCm3Ws",
  "key6": "27YcLdE4aE3Cw9fhQkCgN77VN2UsMTD5QRdsCiiAKD26bmg1eAkTa3yBYiLG1uLFMvSwqj4K1ftkhY65ebg7VR9G",
  "key7": "3dFCArrZsd6qDFHB8cV6XuzgZGBUXCRtxsCh4fz4HSJmVNzNqQSfhgcLUBBqvUf2QovYVwbX2NMriSBttgGysxCB",
  "key8": "5v1GPYZTySuGudSf8eFNtCK56d6dKRyTr3btACtVZUFcQz8Pf1QwDibw5v26ZjbwiFMwNLk8uqi8HpMy3trXMop7",
  "key9": "61hhm8uWXXB9kxk3tww1KsgobAAjjdLhecuPqxY58dFGmemKnhPCBm6CZL4mGDga9B5YT8nxuFA1M3kfSF9k7dEY",
  "key10": "3kkoo33ka2nEpBW4rdYzXN2iPwCRWfK3JtyQhJ7Gz4HqDmjh1pdF1BsuJSdTXQBSCSxH654jRoCVSK9ADyXor8jU",
  "key11": "3qsAbgudYERKDQ18RH8JYxRg6kn8kN7rkbwN4WZiz13iJwhqCmw36CHsuBzUXxPReq9femUnreNQgbUL46DUAy5d",
  "key12": "DCRUdYFbqTqiQBDw756TfQZyAW4QPLU4WdWmJSxPtpQpMhiPppHze5sczGEKxjfbUGhqBW4yWxp1pqaUQ6Ww6ay",
  "key13": "4ToyBzRMCDFFgrH4XmCHmaAtXmwapGXe8L7bKZwpZg34kVQGMrPxwpYzwFReGVZPGzRrYJ6EEjeuU4iAiBGy3P8c",
  "key14": "3dymPeeoQtxYKi3wWDrvv3GohUv4FHkgjRcMxtSsp1wD4b53EPd5qJeA22mgx9TReP42SrjdTZLmJFqrPzCX1zRx",
  "key15": "3kniRcCZPCyE5v4aDq9e4fRsbjGaxUgcGMm2j1eAe8cevXqeNLQnBAh6k4uAmyVpme2dNYnNSHPHnG4x3MGbz2XV",
  "key16": "5Ex8wFRBDpjDDoVnCRtNVXh2rn71JjohigiMy7gBoeehoXEpofdy9KPRfhhnPaYxxuDGC8RE1RgEdcEQxv92NXGp",
  "key17": "2sbEQMkjq7Bh5xdBDeYc7QZxbJt8eq12XoXJW4ta16tQAjbdeBAD46dJUxxATRwfuHgHkJhVLNELUwee2yx8fPFu",
  "key18": "3XZL3fH3Qa3j44je3hWXJJnARuJHTc3Uf67nbudF4RkQRZHvUxYFkMgi857jXpr1bvJAUEdt5m34sTWDqFj6Qbch",
  "key19": "2cfuAQHWqZiqEsijTUXDDBbTxyiJ9zNxCMmwpatrH7HfUuSPBpk5GG5VWQDZQLRahDTm5uFyqumP1Rob6q8vjbX1",
  "key20": "ueXYuZFKWWRYq8YRFhPxyoWk4MkKktgoSsc8N4UGNqT4JBj9YW8ue7qwNmJF841G8dBrnwdwsviZ73epyJNRhYV",
  "key21": "298GEnS5KRqBq4NFsTVsCmDSFhcvKMJ5UsKuKEkx73U4WsyrL8t3pNyjWsC726yRtJSkoSTTd9EWres9Y2n1Gcq5",
  "key22": "48cjv1SJhSS2noJLFFR7H7pzxp63hSYx4Mvurcy2RP3YnB56F6YrZWa5H1stQS8geo9zutTUxcBxuNcZLAJKFf2M",
  "key23": "4kxW58xFQYuaZokigYBFMdzyUsCgxxsTcxDyMKs1UtGYTuY8MXJxqSSJEdg5J7YXUbThbqcTFpdxQCiHxX6LC38D",
  "key24": "dPxpkjwr44Qt2gAcJZqcvuoESLxtkokPpWgUA64wya1oBaUTFo6UgnVmyp6TJGyG663cfu8WAahr83g7ABHVdSd",
  "key25": "4EUdBZPtsgcoLGAdkmKmUbZA5RUCjwECggg3kU124mqtJk1jANpybDndEL6MjsyhadWtetugSeyxasqS6ENSEhut"
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
