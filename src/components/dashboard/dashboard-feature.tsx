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
    "4hHiybzNkTHbnyubj1eH2hd42L79rz2JKL6a6VKy7n5QixB3zJLSGYghz2uHnwMu3zv2cQU1t5LHgUKcagnVnzb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnvQGyiwaTPKpp8P82FAr7yX2o4ZmgBRnzW6BgZBz5JBREW41gqYgjqjWBGJ9G8qdioYMnXDcC6JF4d8GuSqpgR",
  "key1": "5PBjxfhVtwPYZLYtuHEuhNG98CCPJSQAT6zLaeY8D5vcdijeGsR7fjUdw31LAsLKs6sQCS4pjBPUB4KhzNKtg5XR",
  "key2": "W3EQS46q3hUPyJkrz6oHRGnKvHPWuwU5pRXhzxY3p5NrcpNQpmEZrmHD92AWvcFL8UVh9KnvtXxCQcGEC3uLkPi",
  "key3": "3ymFeuZ24TaHeFgfvdiUNF5nokBtpLq8WcQPERu9BCXKr7StSxHRrphDWPRkd2HvryyuucpyEUAB14hKZkqZoFaM",
  "key4": "2cgoBFro43i5cGxPXohYrYZDd5DF1R4Q5kgpdN1HgQhUxBDqRLEG9tVB89AWT4y6X4ErTbKsqZfmoN4AajYAE6uT",
  "key5": "o9kTk4FYc9zAdFnthKEqutr842swv49YEnsk5KJkcqdaBCiSetBgfZ4Qpqg5mpHwmM8pCjK6z4T1HjkR1mYydJZ",
  "key6": "2qzCGMj82vpUCrBGT1CTLwYGBwxAgmMXZHjzz2mzHSWzbPsjLx1vFfMRbtxYvAJLtot6bbQiJu2h73aCAKNc6rSp",
  "key7": "3EmzgiZeSzgmUuAPjhEcp87Fof4PCMhE1rLmXnhbhzXo1ikDy2GK5wUCvEB1iqtJHyXWKGihdgsBihX4BPK3Qy1R",
  "key8": "5h3KhozyQcJufSdhz3bkZeimHdeqfBEcURP4V7cNcBpHXuw787JDrzNKczLkMWwfP3N9gre5L7MgArJvjgaJXUH3",
  "key9": "4LvKaR9xcoTNLH7DMTrsk6AMAT7Nbd6wjefi7wwzU7Exk6D3WCnW2dCWyyvEcnq9gt4gn2YpkNf1haMpFmjAMjPD",
  "key10": "4xN1uMi4XcyV4FASBnGtzEqkyaw7GEjeFgr62CEwFMkzB35fWadm2K92wLoHBzM6EBd76iNyhHLppPjqJLZLG7ns",
  "key11": "5yAc4bkHDs4KSEgz7YXUo9MCVR2wDmD3mnHXfyoV1FauxcWYokQgACBBuvUQ6ePmC4VAe3GDwhq5CDuFdF4HmMBm",
  "key12": "5vsdTTPWmHj9YmQNvm1nw5W8eVegFJjpgkPUMcENaESr8dnbZH8tCCSd2PRCRv11mW47UP1jVF3mQsFRJyUgKNGJ",
  "key13": "5EnkKX3PS17wwoLqDdiiTjtDhqMGkRjShDSzNejCWS1v6GDRdfDkPtPnVHGTHau8GyiynRRFk2sqv3MpvFba6N4u",
  "key14": "2o7DdT1oUDqDhdnNbWusgWNeoVponNnBifprXHGCXCqg4KvBCT5UFSnwo9WR2K9QT3JB5Lj2FExaZUgzafJUtcxe",
  "key15": "4a3M7NztCVAC51zE6QWtko4VYkbpHyefX2fHc1QiLuLcufDDpTVk54eewF17fyL99KxJnUABfFmnChfuBYxCukNQ",
  "key16": "5ZKuPVFjgNEKQT2ZAEU6uNmBrgTe417yW3kPUrWdxPGhEhQ4xUNfigR42JBSyqf7pbas9KL3VysoJuKpgpn4vZxo",
  "key17": "4gWHzE2gtRqpkicpX3ysKyVyPSwwbR76qdiwd5ztHCLc51PCmzqvjeM1qjrD26vowG9dBQRSXbZE51hzVeXCJiTi",
  "key18": "jk5WsKo4jYZPW1nSveV9ZQz9fkvt9BbE229eezKjaTv15B98RqARW45Mf8JD3dwjunxYqRYZcDesiNsXfxyFVti",
  "key19": "5sxasyMfEzBTmYeowABi2d8Q6zGyJ17D5ujfxKASEzqKGtem9MP5ghFNQ5ZEsD3uLM266xQfyCEX9p9fKxSk8qyL",
  "key20": "4rbesZYibjNCuQeV6H1c7vo4ADQSzmavDnxGZqFrCS4CJPegsyocq5g2LQ3cLfVjbm9PmMKrLJYgA6WJWrWJmXBg",
  "key21": "5S4HRtGH9qRn67YvM3b12XpSqMgC9Xb9x6y5u3pGRDEXajo57KrZZJLBcSSMcnTY31uf3s3cQEupTPzrkfLkRgR2",
  "key22": "2iZGVjboB652Rv2umXxzi6quyXLMFTBHUZW6mZDExPJ9ehxrRb7t17j5ni4yVcfTtr6kmT3wfskWq2B8hHTd6wvX",
  "key23": "2ZxKwBRHt7EfgfsaFuU6osCoQUnUJsiBbYfJ73TH3KrdeE46NJJPNR9fHUZBg2gU6NUPWYwyUtiXNZTYRoXQyV77",
  "key24": "4RBHG7nqQ4DtL6FwyLs31uGWZXJ43nQ4F5qyva9naMBqthLk7dU2fm5ThuD3d14PZSAcjE2bGXktGvdg2d3mD2n4",
  "key25": "2jrTYbRUeGmDQPZqGYkGNegTciq8grMSVg4AQ5jrH3NxmsXEXokcGsxPPXP1Tu4AxVhUmLgYQf82vQwGFQNUYgaG",
  "key26": "puBwHwJdGbshj6rRR7FMgXdSfGUkxVCU7Gdv8y8wsMBMTcEFttgqmMExcLGRx9viXNmEyB7t2izd6tpEbnoLBub",
  "key27": "2uhUx1HMk3Q8xgkKRarsrZUBdDR1GRqBgC4wmkL9xMUfsVGTqa6Da5NKdhT6WZqvneZfXGD87UsVGPMcuTTu1AkC"
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
