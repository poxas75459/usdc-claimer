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
    "5zgsFVtE5nD9RCr4eYYae9xHGdJyVVDEZxUBW32fBmVtoF7ewsEBT7EacezsX8qHJvYQNQnB233USVcGaXfnnC4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnApSXQG1F2PZiaKmoAWGTeXJQiAZDXRMXRrZC4JxAyoANnQqsK3ZtAzr4KRUm7HVe4wtmi6RGpV93C373H437E",
  "key1": "6tWvWu7SSLEtF1kjWkPiAoEd9S8zYuPzncTfhx2xR157dH2jEQuGo5oynRrbtNvf633JJBufPQ5BCz8KgjqTe5g",
  "key2": "564rBDvmHtVFmhnRDMHdBhS7DT5ELMiVdvNQut6Jxv6BjzqqqkFrDiL3TgKHicRhorBpXWYBnmxsaQksNX3cSMAN",
  "key3": "mE4wyeVMyW7VcV9Hdnv7u2dsrJtZpBRqt9gb58BgcACMCVwNcFcS1x3SWtptHsHPpuF6yeLj498svUPoBMwVkyx",
  "key4": "5mSNSuCHa3MjEUEpDzRYnFDn2jPqG4RQ4N6TQaJz7ntd32UPwtcpSqjpBiq8mNJgFugpxBe8iQFunEeUn989VeW7",
  "key5": "6372JVKzHJZCiV3v7NBS9jc4VYbbkuggio8r13vZC8Q1JDJJmJCPyDGc87usdGMnwizKbquewAfE2DpWaXgZi2L1",
  "key6": "3we6G15at1nSNLUxShw41sSGWiCkDdmQDMS1FmjACiSMjbvDEZAp5wMnPCFG8zKimXZGBRDEntjuGN1yEC7mj8aH",
  "key7": "3GHUXHqSbgBvud2Gdmx87zzZySAVUcVXojnBsyVPhELq9MphfcXdwTHLMu4XFQzHrNkk3f3zUCkZqPpYnzFSR27q",
  "key8": "2NSBFMZCEWf1vTajM6SsBjEF97djSK2HAQapk1497MzyLLFZYXUVDqEEELU6VBiYwE7Sk3M63XstdSAKxfkGHMyn",
  "key9": "ug5XGxFoLUUWgkedsC2cGJX73325BzpY2E3EauxTsmraCQUHfibfXQd52EinTdUqzNjTLpZw9Y1CD2QKfUrTXXs",
  "key10": "5s4662MypLexeVo3niShQwjxfrwMR3Wi4UKfCV2qqfLuESvs1jJn1HNLKDXx8UxLT6qfQDCgmG8UZN72YoobgznH",
  "key11": "52CnvGXswzw3KqZ3RYqJ4WqGic24BVJhfRAqd7XmyJmh1koy3wW7W2YD7ciLwy5C49TUw26uPBDK1tNevSPunqvs",
  "key12": "2YwTeUZmoC6SfHjK87pbp7epcdNhUGGCt9pj33E5hZVwzrGvnyGnsvBy2zYxrvVDFi639u2juNECA82bdzw4RNHS",
  "key13": "LDHxv2xScMxji51pg9ADAJTGL2HUaBRDqxw2yD36f5P8agqC4978P86H6ivp3LBTUq6EJDHvJDGVvVzMnjpkCCy",
  "key14": "44TVoX9cETtarcu5VznEbiLeJFnRJN1YCG2ZL2ra79tAhKNkQLoVpGGeidDUdxdifsmm5RfEoy3yKNTQhRvS3Nqq",
  "key15": "4WRJQodXn9gwvC1EUv5i6fBSTrRoZxwRwbgGdndejg9igK4nTLox3zERo9rLDyfN2ip85UrP5cngdAZhGCN3pcGH",
  "key16": "2NqCV3CmKyRUMrf53jTdGCsMn3kTBoBbTD66XNUEwrS6DweGzvzoeUokN1R7anCFXUW8pEnqVKPtM8yeYwBAcDC",
  "key17": "2sZTMt9GBoztDqmgys6Avpw85ceyyj1ApBQ6gFCkyga1bD8qNtXei5Z14EJWqVun9FYU96L5xAgDVWqXEh5Mzm3H",
  "key18": "JzpAFAbyEwKqaC1VtX4kFPfRdafv5cBGWB7SkicfmLQsxX2rEL3KXKwWsQoD9Sz7xiCoBJwjquVPKheoJuQjebX",
  "key19": "3N1owrpMvQzqByiB19wkqqScJepyUyBwWJw9cjBSVxahXXNoZsYF9rRaXhNH7xfKUQqsBPZVsGk9or62ELLsaeKf",
  "key20": "3DAbhKiKJgw2qubMpjKkbS9gATefzKzp7GeMZmx6k6rF8TwD7h19r6mnzxww4skyMNgMTVmMpEKYe6AT5U5r2cB8",
  "key21": "3NoY1yXSNwReYeUNQPoyBkP8SHNAJnmyQm3FVZ1eeh2dhPB19zCK7iqCg4adwKN3jZTUAbb4kQs2WHbhzCmVf7fi",
  "key22": "4euGzNRwF5Xc4x3rftaNmmZjHtQ1Vy4Z9uVf34hbsh8rt26dPzisq1iWp371xqt8JkR5Lyd8i8xshxXE31LoEWJp",
  "key23": "5qs92PW8X6kKBFucDbxtCd9bpBLqFqshT55L9y5SFHVw42MbYQpXLRC5Aq348zADjf4rmdCf8zhYUyDiTrTtK1Ut",
  "key24": "56bfPL9T2NiVA3HXsMwtv4q9PDmoNbkcWn67DefgD9D6xD9fTuLUDNgmbie5b58ZtL1Vww4xxpMt6rCwXDqiSXMy",
  "key25": "3N71LJFHUuecn7Rsw9H2uYT7UaGYQGQFr5xCexie8PtCnHPPifj6dzaTnvCMtZnPsycsDfCRJYaXKJhpBEv5Xc92"
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
