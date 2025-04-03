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
    "5yBrxWTAKxriS9uN7Eib6vTCwkwPHg6uCj6N5K1RtXzLbt13jDGSh8VqrDf3LGiBqZLu9Pd2QpxUTduPudKCfp6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LvGHgsn5819Du6ZV1PWjV8wh2G3dCzcmGHcEf4en9yXKC6ERkY96XTwyu75NJKfYH3uLPgWnXYnfEgz9LwiGfuH",
  "key1": "vSkwLc9jMB7rm8aMiHjyBQrp16gASZpNDjHNGTFftbYucsa57H98z4sePCq4p9rRSx6cPsYGkc3X1US4ib8xzhT",
  "key2": "2YgSjvcxpzJ22tzvkmgNQ3aAg3R6fsSFv3iPUML6SnFG3N8CFUuSThC5RQt9bvomjUacsN7deazaERckcuUuTjMY",
  "key3": "2ycQjSeLAwkfir8o6kHGqxht9nduZnTeZCGv6wTwrxiapxHg9CaWssc8m7vqWy4XZfn6km8figPhkdRiGPRWVeCG",
  "key4": "4PL7nGWvPidVd8U1dVHUvR9iEmEBc5eb5NJCTbEisoihqg8UiNES1Pa9iArwVDBsEMrtd7CYUKdzN8sVFCfdpAk1",
  "key5": "4v3Rx2fBujiZdApHjkj2tLmGCazz7sPZDLATwxuu6qEeg3TS8BKDwcH5RmKRdu9mcHfdUSS5opvuxvzScPnGSU1d",
  "key6": "SGa1a3oAjGE8yT3evLXkdZhvHJLcnRtzC9yiHgQB9ZPZUntbRRsK4ZZ7SYkQumbYUzWdvbnZPVbD8Go64Zs68ke",
  "key7": "8vjmfpJRCP5WgJDe9fdLPtDvN6x3qjeBkZC2fc3MU24AKufSgAxEiNTvQrxLZRUDPDNr6MQjkntC95AUDuQ1taQ",
  "key8": "5JzeWmGt2qVwrredrw65Z3iDF9jkHZuMGCu6Bxz1fU25EeUSUaL79pjkd633YciXUVDeZZEFT9vA9XMDzt25oJhu",
  "key9": "5EteNesaC59rGrAx7ZdXELq4mt1xFdZqx4ySyBgWqRCPDYWwrFGDYKEK3Py9kp7vpa1G4TJjY2PUDCusj7xTZbLD",
  "key10": "59GEWrHoyoMbrLy2VZPaq5DwBD7rfjNWjnCH8fDAMxjWVv97Sd9216WhnmjZiGr6WvQwWpEoDs3yG57PEX5rkPue",
  "key11": "3QJVq5NEJtmRPNXx4g7stzZ9cB7W1c7jp8FtsDG7YfCWPeHssUUH7hx2P2uaTQeKgCFTDqWME1P3wVQw5APDCwvQ",
  "key12": "4X74FESBfWfHiQCCXuF7xMpW48n5uRCDyhymibjTcwnXEN6nqCGCvSp42BPSP55mnWdtqKqLN8JZgVnY5c4wmcvF",
  "key13": "5r6WpmSa5X2ZJxkkdTijHRgpCkxEuT5pQ9pNritqCBvaxaXDSwp6Tq7G2hwcWhoMuMDUKDWECoxrsZ59xASSZkV3",
  "key14": "4pR9L8DUufNMz88xTxsw5ieSjdcrpBXg63mDRUGhD1cJd7bSojPSdvei6LmmtZ1yH6BYjinx5iGhSXtQmCX6S7Tx",
  "key15": "gvfw4DAKW8ncawgzWRmJ9f6TDyz5WmNRWMxCiz8D9WcfJ9NspLK8CZtbhrkJjfrJMFYWxjKTWRRLnLs5qom31y3",
  "key16": "4Y6KavhV1xhW3iapT6uLaG49Le4mjUtiFaegzsdUFQ1ucWeMGRLhq5ZnaTs7y3dAauudEeDfpWmPCPE8rNMWZ8B3",
  "key17": "kc3aicGMNcrkbMVJBvTJU4nxmKSuuqsLHY1JVFCGjDhqmcomDgymkkEqijJkEMku7gLYvZ4Mhm6PQGjySS9V1bo",
  "key18": "4wQuc2hsMr5Fxz8GtTaC6Urdihqo9L7xPMdtRjqAne22iJ9fKr2JzCFcipPTagkUCRLhpAS9WaW7S3sSameDMDAs",
  "key19": "3nfJP5QEMjVoJ5pp1usvkNH4yDeUKMCQaZJCke7iLAbaHp9SXjZ28h3Xz5hwXa8JzBFdKiHSjr2RH6FW7xLWDeZE",
  "key20": "2psvJnERGeqXqYdkmRHptvN4UjvCBDCiRiYm9tkePe3YPTCAg7RLFjYEh4TfBAV2fbiKQXnVyQ1cthtW8EQeXZ7L",
  "key21": "5jadVij45pJZsy9j3PRreeYGd8XbrBoWgNKYHY8WfSUcvt4BszBy8JgTQwcHfoACsHas2GaufrsPM91sboGLZw8L",
  "key22": "2zqWdnc72FUcZEc4N5m8hgGR8QjctgFhYmm7Q18wNVHDVCRy955VvhDtKU5WcJ2ASdJTnvVoAhbAUbkUqwYBFxUj",
  "key23": "3GQPrGBCNWA4w6uBy1pyYpJGYXdSSK16XhdJB3cMe5QmDyqCZwSNktG7zn58QWDeL4w6kyESN7UWQKX1mNWw4zUF",
  "key24": "VZafLwptxRif5ZmWATJNaQbMawb7opLcJudaHCZyTtnSGqEs9kdFrw6r3VkE9fprZDXtUgxJVLoxitUqYC9i7JM"
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
