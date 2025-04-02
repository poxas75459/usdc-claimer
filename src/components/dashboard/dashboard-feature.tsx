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
    "3wBFUG2zJYzQnBLMcb4it1e4rWmLXTBYBr9DzLi3C7zCjJoH7nYzWDFb7qoU9KG8CUjzp5aMAK3g81djXHFZVcRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KX6gWRhuVvVfyGWgjxRidivmsicaECA9XeV6vFs8ZLAc4DRwFygjVTsZJkL9Dq1TG1nvHVHHFUTAMWLi9q3J4Vn",
  "key1": "4yMcwYmNRkSagpzD1nPSKTb9HGHxiDNQ8nsEjQfXHKLNGECh83b9jSdkGZ8cqs6ESVaRacqyoB5CDjrZR9PRVnC6",
  "key2": "vamhrm1JvKieqtGHQMPvDTe4UUFZ89RM6dizV23A7qzysgrq5e5jn5HNr9e5cyud8xWyvzJtCzwp6ofGAgFY2bK",
  "key3": "3itaDgwMnTyDqcZJeH7esaaTHJEMLE8hBjKAQtASSd7rE2iZ5u5TGzn8KuYjQ8rdTbXu3iMS2BFtj4E9bZjSKQmS",
  "key4": "4FZFteuaE7tjZrTPMEgVJaQjUpJRyMfa5APQ4Bofx1Rs6MiRPVJnuFnc8Kb1DbGi2q91wzTKPHSn6WrEYrQ2uq7X",
  "key5": "sY8N81FhAbwcqihgNSUhKLRR7FFG6yYGumEXu3rMKV4M4gU9zc56b9Dyrc49nwQxFhTRwSnvpQcmNCbn25jbYNj",
  "key6": "3X1BAorqJRs8PUnERsqYsKoHsxCSquJGqaRXcTLnwpkaRXwm3wd5cMmS2qGB2Y1aFGo7yzQCattZYRSgEfud83Bu",
  "key7": "skyAf79ApiyACozAwtgsgVugHMzAvaZc8rvixeQfwyJgkYKXB8a1QHN83dgJqntECL2uZQw8TSnv18pHtgZd2Pk",
  "key8": "bCB7dQBfJApUrpVDLQWhva4ZgMsX4qbPwBJpp1JjbykQPWTCaYamHDMJJUG8XUKBeZbx1NJGFieJs7GgjSgAVGQ",
  "key9": "637yUh1rMXKjoi35kHwLkzFHWPg6LH6RokzDSL1cCnFMNKV9zVEgLWQ4EP6wDiAmT95AoSWWNo5JtfEjigwXqSaA",
  "key10": "iwHcMF8E8i9vrhzHHFtNxpcro43hU3jKMCnM5bPLJ93GWnNckojDcKauDGy5Co51oBVgHNa76y9kHr8J5kipVCQ",
  "key11": "5qvtWJgmgM8P7KuH3e7iRWGSJ3NShojsA4wDvUsTnT4pPRjJDbEfcenx64HGswbRwtaktkhvh66qZ68QHpieGfYQ",
  "key12": "3mc54eE2FKYQs1BL4CRrLAdD8ApffAyd7wtKPUmnF8HHT7b5c6LpNvcQQhPUrx8537Z1LztUxFzZGPYx3xqKZYrS",
  "key13": "5aoCHMuZH5SsM7WuLwuitWFXfitWGN7KgkFW8yTkTBYEqxpKKRzdCpAWsrUeyKbQDnXTc4zVQ7GVkNoQ2Buz5HR4",
  "key14": "3m3PgVYSQXsjttHdF2ikNkCyXpB8oBawrdjDhk6QmKtrfSRvZmA4SEdkUn8bbU6HMGBp3bbDfgNovYXYBmnvbRdJ",
  "key15": "5sePRrEVQC8kq2zK1pMKFc3PTvFuD7wNFfPKFenZ61rzMWoMG583eYhSRFrZdjNSU43H4qzkJkKo8sXhWrrtKwrk",
  "key16": "2MYRLcpjrygx4sMTPZ79S8Hc2wVeYMyQY8U9BYKSsXacM9Tub4oBuD4bQLPRYeAkpzmkojeAjuGCRzr2jqwayb6q",
  "key17": "4Jybeq5CtmBTpeu4ryZ8bnGPkHe6fKDui89ZBuThLiuPPSpfjqjmsmtwD18hMBrn2s7g1k4c5buj8LPmPodyWSqy",
  "key18": "3cnQtrR8gHU79RQPVC2rbmf7s1JShbmm4KqW7qcHXZiLTMbENcqa2QCiytbE9EZ7hG4RrsJ5ffdztUmqKxN4b74g",
  "key19": "3kW69Gnrdxi7zWWca8qHQS5AdE8cZgvXDE2oQ4So8FEE51BRgaWKVPAJ8PjZzGJAFKq11LPyJ4Ww63Tws89kLkj3",
  "key20": "2n2wDv9UrTNgzZBxdVkwEZwbpZNbAmYgXa6m31qjWn1QqCFLPgdSqEdUmGjM3kyzCc7xynhvAJ7V3pmPUYPs5KhP",
  "key21": "5uoyLptmVJJWXbKQbfnGujiynpFfGKnhLBtZq31FwAQpunuDjmpMyqbTdkQgCesaWXjiukthtVDpPVAFaSCE4sAc",
  "key22": "9ypa3PXY3qgEBkgcAFS9a9Eg4rVBAyaWNVwciCqtByKBo7e7kbTMTYWoEzHxVc8cFErKi2Zisy1GCnZ3Ab3CgvK",
  "key23": "4A3TKff9Szubc9Y6cjMk44m13r7bxjZYZvBEvSwQGxWHtnR4XJ4vuq7orgXVQRz7wkNazj4gzo3gPm88EmEgUa8m",
  "key24": "7wuWP5RxsVUbk6wbv8HQa6xd8mz6QNg34AxVcKhFYMPf85RZF6sTyeRkWuEK2dJFwx9685U9GMc6axJtckj9Pch",
  "key25": "36RLSAHKKdKN2PSAEy3bjGKZQtncY7Gvu1pANffCP2iUGHrMyDfMiALk3LreDVy3y4uVDPfGsY2yYYrgvmp2Cfwy",
  "key26": "wanEzCrS2kJkdwiTSS4yB27N3bozbcLNS2Gwz5LvhhHhQZebYGu8uoBgMMM2tMG99Zs3YG7chnAaoPtuGyWheg3",
  "key27": "4mRJ9u9eC5MNb5ztAvh87VwCMjgskZMnmBCRxeXF2ATXqouU5tu5mBLRQxccWnvEcqruwPhv7hJSVYzNRJWG3otc"
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
