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
    "39AS8Sjmr6ReAQttYfYQJ41yGL1Ph3TFQrCZ6pRed8xtoeqoV5Yt4E57UyoKRuRp7LqPt4Zcu5to5GeydmPSLVma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJqkT5FnL8vajMB7j6CAccbkLtLASWLb4cJ7qjRvP3zMrVe8k14jAXk81KsxgLsHL7cQWSB22SUSjiW6h7qmGeD",
  "key1": "zo2wcC1c51EQ7EX2JWfdqobdAuVgMcyp9dNxMo2EKtbkauEdfs5ATuW3V2kjZgmmqXC2htdGyLJRnsYiEsrtbAr",
  "key2": "2qK3JtijwrBgtCTeACvPhSGwiC5J8WFq5jsGyXZSVWpNzh1r66ejofx9Z7EEp1F2JgAuPSx4ov8VrifZjBiUfBWd",
  "key3": "GETCig3cXmmYVw4nsmdmtYunrequjU4G8mwFVrNKQmNk63no5AT2Sh4pBreEcA3LAijueLZHCh857faA76s9gwo",
  "key4": "5Lk1oi61aZcJb7SnQjTpyfztu5orwPK7owPK3RiA6T4g9kC9TQfHjDYiKLNTspxk18FDiho5a13X3RKsG5CjyUuQ",
  "key5": "5tTS1s61h7iTuYjuXz8Gbhxw12V2y1SeSnY8cRAKx8AAhXwXqZjbmKsPyZhEWwemUaM7GsbPxxc6Q8Sc66MY6HcL",
  "key6": "4BABo1AWLcZ2jVdntuKXQtC22TNtEUoT8v9C6VL1z3CDsTK9hJJCiYtRF1LB1UTJHbYSSkJNKHZKoGqd8zMHwsg1",
  "key7": "HvAbBVa6q7mLbYbAvfutJ7HNwwJihytcfvqAaMghNH3hAQLW9P7o1AXaExtRATZz2vmFn1dFXH8UoqFb6AKjySY",
  "key8": "3QPvJusWHtmS1iCCgJrLgrvDdRvmUNhZQ7Cyn1zvQv243LeAVK3aJ5ub8K74FWiaYb4DViJ8fjecFAEApg53tdnT",
  "key9": "5wKNfzx5VcUeRXg1rmf9BGbfkY78o6Xro2Vx4aGWc221a5V5EBf8crDdALRnhZfr6ZUqqkmWnr4HN5wUeiR2UjKV",
  "key10": "3WfmYDVkK9HyfoZtDYTeXuPc9atRnYJ3NWAf4czSNLNH7TWv73hLb3SXtFLrrbV2EaBHc4PxXH45v3e9Y4tbncg5",
  "key11": "5cM2Aav7DiiqB6jkkYrQ93uYbVDYyrk7koDsxQmuBdvNBgvvkxcpypgMRmjaroYeYjCTZhBeF2tHq4MiN2Q45APY",
  "key12": "2ZZSt55gj4W2xL553GbtuzUkwsukesAtTCwi18D6dueE9Ns1wNqPrHjcWGDkQEfJPPJDq5RHQ9rgTnhBYh2X9BaV",
  "key13": "59meTTMaPVprsF7uhHLtqUWkUJDnB5EkmpCbKhtPq96Cf1tgxNtHy1JXYK8uF4KP8Am8KB3gNyUeRMnSn73JakYV",
  "key14": "4dknDBtgt761NsxTAkhqGk8o9ofgHrKs99btZjNo7fHYNrjZFiA3CwFwVYErbQKeaFkrMJh5pafJeSAhmDmKPLCB",
  "key15": "4Km3hcB11jpDeYXAHv71tvbizu1qhSjeza18wwfifYnGzDzYaJyFTyNYg5yQeWUvLQzHQi9FF5tUZdSWbTyHPNXC",
  "key16": "5X1fjfdBwwTwdk3vzXk7dBrvRuQgxuX1F341spKJ9bySMwmf2sgN1kuEyaw4zx88TudBcjryiZY6d8ofg7BiJqZ5",
  "key17": "3CtVqaJFkAco37AjQ9ptV59KM9vHTZv8ksWdZu8YSp2esFMbqRwTHymaZaVrzg4PXraeHJRFKCS9KnXg498UnRBb",
  "key18": "34faf5bs2NeXsBBQEfL66oLWXxsas6ddPWds7yXKcpFJsWr8Zdd6Qh4mnPFocgeFETaVBjwaesiqJyccFhztjbyf",
  "key19": "3kfiC4djfEuXrVkrLPP5WoAFEFwt1XnCGJ2qrY8WxK8HppLwpKAv8e5GZrqb1defe9itGjRX18UVSgZ7aj1XyN6D",
  "key20": "2kfSKTuF5WXpxbFAhSyLPsQgKvTJo5q9vPneH6GK3qR8LZLyn39WitVQfxwabrg2qEEP1gFseDyGsVqhyxA8CE27",
  "key21": "2CEVXv3zKWhphKBE6KLXzBmPqAGivdqc3CC6gfHWqzvkvsQG5UaLWPyw8CxrNbHysfiMn9gdXUC4xrEbLL98mo9F",
  "key22": "51seeSQqdXVXyuZLNz94LzfdM1SvVfct6ZqwYpX6oDnUvzCJxo56Y1fnnnhLvh9oza353XdYQ5hV6FUwkZiAoMsu",
  "key23": "5hkdbbi8DoTvLvx6hiTqTmjZVpPJKAbCMQRtQ4H25HY8y4P1PuNJ5NXjJwEa4AANwcSANGGHdXdYL8nbTaQvc7G3",
  "key24": "5FoUyFVcdqQ1Jfk7jN3TrA42gs7MfzVBrrpAKw3HDKZktG3vvfKy3KTA6girR9rwDRc6WWnqE1wyJxZCjsssi3Da",
  "key25": "3ixEPQinU8LHJGA1couS9L6W8gZdzZE8vaUrLLoX1rbt95LJ7kqW1VuhEmjbetX9bGj8TWBPA3PCfNeCmXMcwfyw",
  "key26": "cwdx6q9H7zpX7G5cygHCSw7xyfkAGgyNcvhrYtXVGbriBAfnSjLo9UNYTvCNAA7HF6731Ydmb1wVdvJpusoHT28",
  "key27": "2EhQCQ2YSVjvUgAKyLERTa2Bk1tzuESJQSmfPhibCwBr8YfQLCdvjGyRtoTHzNAcpYqs3V1gC9eS1Mt24fkYXfD4",
  "key28": "NYptV8Z8soc2cnKS96p2rvmjVPwL6Sm4eKEbGb73wMN5k5vZQGTd2VA2rvVjnjqTFXvgXF82t8ZDD8G4XSEFrzW",
  "key29": "2N1jLS53CoAmL9Lj6psAkB83twkmuMsFjN2JipaJAFFri9BGkjK1JHSRFvhkEDwc5ZGgEjkqQjWkiiwL3TZxZcqv",
  "key30": "3MBM9NdB3c6rMDsLfN3hExkSo4WzTg8rjcZhQPvQNvCh55k3dfx1caRFem3kNDTCpCd1RUnMju2updUJoaae9yAz",
  "key31": "1QzNCg263dyef3ztiXF1eCcBy56L62CQCUjz5imAxo6sbuzHVEEaCnfoUTjHRWrvwR58L2Te6TXwCNPSLYz2AxP",
  "key32": "4YhtEWxRE5wL6xV9YdeXA5NsNCUzmFESeMcVEu1Nrj1PrSMzP15R6eur9hsKWbxNZqMzfVojeC4ukc7tpFqDXJRS"
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
