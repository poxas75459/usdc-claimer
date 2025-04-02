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
    "51XoDyuYj8F9XwyMswcadGCHiMA4YmXjY17nRL34xFLaqKEZvxq9zPcd6M5B7WMuwd6RNoUAwsJBVz2LMS8RLitN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2of1udaNPTv5ktXZNDWBvoWw3eJ4LMZ6WDqdfZw4Sfdu1HgF3gZKBTrphtfdLQKU9p7Yr2LsFhaui8Yyk6YcPE2F",
  "key1": "4hTDsoBZqRT2CmR7PoYbekgsUxykdpvMnixVgiE8mgrSPcvrrCzHGVqFjoUwZgenAgLNhoyZm9WMwZ8EUW1cYYzT",
  "key2": "2GNSxtB3FL5YTwTAUpDYooV4517kAaD1Ta7hbBYt5MUBiNbVNuwezSBc4ZGjtdG5FkStCpPSt2f5DnyNtvM9n5XC",
  "key3": "5cCQEE6ph3DwD8yUg9k7udJnCSARRnLp1VEYdJE1DV5FEwgaRfDYFczprwA6s75SfnLMBSZY6MtBkE9tFdDfY47t",
  "key4": "3YCRkMtiiACau4tmuzxeYqQuboKwR4SrXYWVa1jeKrs3zpCNrYjorB8Twxo8CndySfuieiLSsf4EKifadMirdN1N",
  "key5": "3GhGMw8DtuPb7s4HcKeZQkFtTJ1YkWJco3Sqz3rBkt4YtqKLCV6eqnMVBN6dUWbznwdbfw9UU7s3y9xXiPDwzLHb",
  "key6": "62amaccx6PyPG3iis7XNrsQc4e8tBMgAM36Jrnhd1A91jAnZJkCmaHjvPia5BpTcTMjyq4273t3aFZKCeCvqKPbF",
  "key7": "TQ2YPkwXuB7Bh55PjzwPNi1wdCy323toLspHawSTmj4ahQBmpMdwg1ojJK6PkdrUvSwRzW7VYDRbnqpsHwA49hJ",
  "key8": "2hgoXfV6dZuEtiwXumMGdEB27bA7UqUUkP3gi9DGhXrtDF8vB8bBM2xFf8yBYo7pgz9tRaMz6bm5FfczQ86xtPEF",
  "key9": "RvSTNZr7eBmjeBkEn6K1BVf1ia8vZWufG4sVCjHWqvi656outTVREa7A9JohEGYX2ddfwXCvHcu9rhbnYjunxNq",
  "key10": "5mdikwy6M9KyhLRLx765unhXearF7KsVp4ZjyJqTEuNNsKYAZK7Cdc5gtNUAiK6vYdKBxoGC2yCLycAE3MzDk4Kx",
  "key11": "5NhgckTm3XkgfEQHZZypa7RLPtSZs1C6eLKCWjjpFGjAKNWjBegnK4fwFxJvihgNtzBgYew6nVgVPF4aLhdhMaoE",
  "key12": "48c2ypzhGyc932VmWXyBB68qd7w3c2mYgkHqf3kGDUPjaVEsAqPkW1mnWsW478ntyQjszAY3x7sQQ12wgjCUoZBz",
  "key13": "36pavFEYWsc1msMEgWoQ5Nnk5gUJWkxdRVUNjBzy47d8u1tEnW4hkvNTZPymj3Rrm1kZQioWNGS7npSxfiS8aLE1",
  "key14": "46r2P6zM2SjpAq9bzCsYGAtHbD4Znx6DDP1ABWYzngmXoZJxvsbQSjv1UhWW1CVAV8oj2SA6R3FGsoks4ZvsTsDp",
  "key15": "4JpibSgvmDqtDWntyBAN9HfcjKZQQDNADTpin3X6CNrA9SDpiGPkhypG3BUtMq4CoPu4dpCt2gECPCvtvoFEtwn4",
  "key16": "4V4DSQKimzhrHRWNtZCPwjUfohpqJcbNSY9nC5KnXxzbBsviF6zAvpbvzYLsmUwUvfmJ5y6mNcQ3Z5XmFUS3pqB6",
  "key17": "5Y2VbXbX1rUFKGTBPB4G5X1mnDfRsRxPDTDigWsm8wBFeuphGjRSYEnonTAK9Bw2MN4hpxswb21UF1cWaPU8BPXv",
  "key18": "3uHpeqUsLBZxZaDsjX982vwqhk64Q98pKxeEbKQRD1buvjAdJiguk2CzwRKRPmTMethhJRBD93fMsRwYaJvUSJtC",
  "key19": "caVMiRKNZ5ANZy42h5RJTLKzHWVhb4m5sFYPbtBPaPpNVs2FW3hFCeB5c2wSeCLpR5BLtKqpz7ivPCcRDosC74G",
  "key20": "URrhjj7w8yNLgfrzsCwsZjAMs9j94zzwvhCR2o7hfr4rrH4qvTgh7yka8t2n4QoRxhaBiEPJcQSpThQr7uyi5L1",
  "key21": "34gbEcaZARbTj92ArjkdUvBZB72XrKEHrfBrzYvMsvPKDC3ydNWEMPssshkoFXGfHxUF9KRdcKxbFnSUNt3CzM4A",
  "key22": "5hNXw52JjXMTXHDjc1mDBNLQznFFLiJGKez564n5AxE4zYqnmwioyidranuvrFp66Bik4An7tchZW2kxw1k4dJ21",
  "key23": "5DDYbZsGuzk7T7ZuUSoKpLR7CKsVTbjZ6ZSQr71bC9Ffp7zJ3G2Mia71KySYv47yB4MiVGgHtdtGsVmphKqPc8s4",
  "key24": "4EJBYtsq3HphYrtPpCGiBJMFewHBaCgueMxqkW9sKQWbWrDw15uTydBP2CmvpY9VT32F63GgTRRZsVL2Xhupr8Nz"
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
