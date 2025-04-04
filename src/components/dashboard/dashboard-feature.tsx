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
    "4Qm7wGRPCTB9eWtz6EWbvHkYju2GrKu5onD3JgySzqqLMeZLDrCehnSWyo8NsgDc3vsAY9uvrPun7xTCD4ErFAsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgHEJziLB1McQJnXxbgYUHwhZy81vMua8LJp1eNfkaz369to9WXXtRT8qLJGJcVqdKLcumVeEN8BSfcB186GrzL",
  "key1": "5QMq6Vk9cBFS1JVVFp9h39Zkw1DKLHRzRKtx1hPZqn8YuEH6zm5P84nFqrjVLCahZoqxuTTLEmKRQqyFmv5q36R6",
  "key2": "z8awmkjNcTC2bX5SLu4MCxv1HKVxhTFo3D2WD24EmfBtB2gZbog8xHnTzg6kjHoyCCTC3NpUD6QF39qYmrkjX1E",
  "key3": "5UYcZGhpEqH1sKyvVaMJS33PRGv5SuchP3c7yPtMrHTfs13qPoGEDUjdvNwjzY8tfHdrFxCeYTa9vNpdu5Cbmdbq",
  "key4": "3Uiv6UZEM1QKMMNb17LxkY3FT1r74x4nKLbekKkiH9VKmGbdshs8jaUNBS6jU91FqkaZZiggqDZE3DD9jF3u2KV6",
  "key5": "5qRjsY8zpKyzCf27GX2b1udESgWP4m1Q3Qe6az4Wkainc3dYUSjevnJSuLiegsC7Lso6waDK2D2ncxpNWg1f4vpZ",
  "key6": "3kSeeie6zNQCur54ifoCvTxo54VV2CRPq2mLvx2rG8qXmrAU3K8Pz7jxCKtvBMJcCL1YLTbmBz4TQN47kH5baJB6",
  "key7": "4ZyWjfzUqfsEiTFYYxqcLuBbxdBWhLTpntj3SgwZZkfcjvVXDBN27ydS2Qdu57SxRy3FWxgZ2XNGgW2LMiuJjUBz",
  "key8": "27BXGM53ue7UFS6NxCfFZjuznfmPeSXHABQw7dfyTXnxHfY1oPwWZzxgYrKzeWskW34CpFgmVzJBdzRCZatBEaJR",
  "key9": "3jmVpcZEjhJhWuzn4vMjhFdR6onUcbECuQ7NK58tmDEhigKMYZAaRjkC4HKSi6cYdLJX8JxS2ZTLFB9F4uHdTGsP",
  "key10": "56r62kBbzgecR6njyEu3yetHy4UoStRJw6wykBTLoqWW7SpsshHuiHDCrgnFqVfmF6S4d5mXfNVyr2j96FmkXVWE",
  "key11": "5F6u2XPKwGBkfe5Y177LpFL1ZGZk4tkZ5FgSEzxYXKP8WDYZwHH4ez4qUkRrjaPAWa1Z27gcmr7AZ6Xh7QbBxEJs",
  "key12": "4ozUCStGxutEkExYBAJLpo3xZj1DMWABuGU228aHRKQta6psmAmAx9K5WB2ZGQqAf7mRuYgpBPBaMrvm1QG1sWfE",
  "key13": "35yAfXLP54UDR95eeEA9y9BK1GYXHzn8navCQPDf5stZiG9NQks5EpFEdJHzkJzUFsk38VpJSDMxKSEFV54AWVp4",
  "key14": "5sdDytsjdLoVv1T7UPTe2hQBaSXvqqc4KmuTLyrFEgPAoEtz6RjVkbuZ4TL2pKL4r7W6WGnbHxKZ9BykAgMyuQTx",
  "key15": "5JZPVcuzyMtQFgvTzgw4P1SC8r4uUJpTmGhjLZu2k4NMoF7fef7UUGpwsnqEWZVgHQPT8pSANWRj3bf2myDsAhjV",
  "key16": "2vTGUSjh6v2a4KMthj7vcFZcTDJoxAVCCKi5uu4aNQd4C17SvDsjao5GFpshQGM462ioDX3D3uMZsPg6JB6oQP8j",
  "key17": "4Qwv1q445yzLSkneg6exi85tPKD7BRWkwYqzymL8KeRsgP9EE2RUqzHfbMTe5iBjPDp98B3uUYMEksyhfqW4sFJi",
  "key18": "5wJ9bDQQVFFSiRcVBcwnBw7Vu6t9yp89Qy5yT6ZdXoQY9JSiJJQ4ZP9z8fgUWxyBoQaWCxfjWxwdhhXSH6hi2EuC",
  "key19": "2oJibFrUoefsGUuGEA2MSg3dQPqm6hHuVwJCaYQbsYi3C2SB1vhKAshfTeD9TcSvKgiMRia8bCS2etvHLmKaauLD",
  "key20": "3ss7diwU4vLmoYk8185MWbgoJFNKKqrrCQc4WYErMjsRJvZZ1VtJKxRBwpxmFmvW5qDU3UQ6q3Q4GBQuKYQLTpPm",
  "key21": "2edaoriTPTNHxjvPcpiAEiVgx3bwB8N7bZ2Q7hoKPPQ8auk5t2hbEDzeX5KmeZhDsKJ85uQYgzowhAyLC7nSoNQc",
  "key22": "43qfec5TAg2AcLExa3sKecqfjBCWALfduzRaZrgdo1ZdXmZpC3mMco93xxcNfALkeurDw9EBUm9kfhbFgZDgg7Nj",
  "key23": "HEJWFM6r5oE8MkC9StrVWPfAafvHFLheZGDudzBNvGtiLx9A2yxHVAeuHpHeWc1GMa9jMNtLv1tVnjBXN1BW1fG",
  "key24": "h9iLQvP4123jWowJsRnCE9mdWj9SEthUrKs5NLJmDHg968VX8pcvwbQ3pXZS9idYt8Gr4o8CJQTEKRbEE9MMLvJ"
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
