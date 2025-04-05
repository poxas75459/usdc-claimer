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
    "28MYbsqQBV3s2euC3fzKCsBcBVXaUbWMdkEM8VFYDUrVYZBD2m69HznadeB28e6DtVnMGEEdmT7wjpice8sJScfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYEsr5xKq2yZDKoq5vbKRC8TRK8g7ebHs21aKL6etx67NxRtZNVwg2DjmvdzdrBJ1GzoZ3Fb3Hg2Zbh3ZzYisrL",
  "key1": "cGme3vsLSNK3HWqrfyJxADTR9oFTQZ1zfCHNmmmVSpPV59t4ZHRwsiRXjVyv8jUpPM8qu1nbkXZkTn9krxyPj2f",
  "key2": "2PvCSQc67HdejW7eevcTSJSLPgUzaPYBbaGZykNWYywLhK8ENgup3bQV4E1QABJTQZ3HkyByaphfrSAnerMXkPdj",
  "key3": "52bjTQGjpxBKXgJRVx7DGLbiFtmZXLq6uug2Q4BP8mhD1JLqo6DE4Arf8VHgUp8nA11kxVniHt3LqN21PbG7zKJ9",
  "key4": "4F7qwURddzPLJ8ExoTGG4Fe7ETaKddYAvCdHsXw2dA1LqB7gYiYPeqhU5oTayStSPgPH1bLnw27vQQtWzSUQTqS7",
  "key5": "3JKRemNhQfrZyGYxsuBWBemFSiHr6FHbg15zVfNZTc4m49XDR9c5kAxfgVfRXNxtizDnBgLKVUNkjBwZvmKYMnsh",
  "key6": "4L3XgoKD5TtRQ5XKvzdSgcsvz84rEjycJa879yh8ggTeWUEAzNcJs1BHLcxNdw8VhYXbuinbA9PePRo8rdVWVNqh",
  "key7": "5ge3wsVFjGBuhGYNbWZ7aUoYY5aMwiwyn9KQXiLpvCGuByssf1Ra9EWcDV6aY81DH98rmbHCwU5ntrwcENnZXe5K",
  "key8": "4oa3MMiUpxNBvh4iHBS73qeegvEKpifQyiin6rYPx7SrH3ttmpyryRhTEBEP2hKZeJ7XjxusvzNVpRntCxpNtNGS",
  "key9": "2q1nRiDeZSFreCCbAyTnpREj49oTYfaX6H2AnzuHEqByo8rjzwvZwqgqcxAjqVf99vxtr6Znvscv2J1gZnFWizSE",
  "key10": "4b2W9FMGtnAiYLtE8bmxHpQoqVaTYeB614dc1R1BHtphYtsLUSA9Phg2fvwNcmf9rye7eYKz8VuL6Tfk6DPhS4Km",
  "key11": "3Kt6ruy39PnwMXzYzzV25WrZfVDhaDfJf1FazYC1evimqfMEZj4Z2h5cWtKFJ15kgXz1jHZAPhnNwhLQc2y8RpAR",
  "key12": "3caA5yzFLhzwnV4mmdB96RgwHEJb3Y75SXoHjva5aXqtbNRun9tNeCKgz7BAFipaN7vPwkiXazAbqXpzgtvXyxGM",
  "key13": "4JBpNKbX5RrWHQQeqWbchNVCdGksJPEvVtUg96VMeHkjA3nqYovzHoqwZeWULx6HEVJJMbF8TNH1XxjyyhJL64Em",
  "key14": "4dpXNZKCCwraHx5W5EB94DcPMuj4p76aTyQCC559v5P1FQopDbyHWgBuU43mRRHTxdvn4gJsV6ZKMvejkqGM4TUv",
  "key15": "2HGuy6ee3kRXaYoPp3d4ngMXihsoc98Pevyc59P6b48ebbQ7nFYviQ5hH7zL4n5cTGXfoZU4fTXg6whTznaCZEE2",
  "key16": "49trPsTAkAsFJw2AoxRtABboSJzNbH8oipeYjgB1mC9QEwpyKTs1ZGsYQnpvX3xGmrSCuvcEhWjiknffBdxNDfwv",
  "key17": "48XFGMQMr7uZFGJX6pryb7v6HCK8Pk7mFknDhBsriT2qatYrw5WxYtxtWJ6nJLBNVuBEdDy23MYkouiMNixiH2up",
  "key18": "jhAkR7NXbp3PrXsYxSR9uPDDYtKmUQ1YMCFfyBtMmQckW433vnDu5CxhjLpT1HgpLZs1MTgpWeFzDXAGqgWfLTo",
  "key19": "2DGS34bDjykiZnMZEFkYccnKAgTHp7jWcCPaoduEQ7jf4cWwpk6T2EMvc3Q9fC177wUqd41ZYMRhe55fYAAocr93",
  "key20": "2t7S48FnanyjPWtrgaAAENfdLmMZMRr7rcQZ7MYnS3uq7CJkPp1rxVQyikSRY2DtoehgTeFNNLBAeMcFSjJXPYS3",
  "key21": "3dmy31NBvrZJmA732eUdJSG12Y7eEGzGUrYJVbaQsF6ULYRmdojUo7RoMikXzKdpDYDpouJMD8q3cZWSVeATMAsf",
  "key22": "3b5C5sNyTroqE6dJ8KJz9WjnyHokcyTXF78ZsUD8Q5HLQVGqnCsDEeczcMAsK8K4ftNAwKQ2uEaS1kpjbJqejCQC",
  "key23": "5uESVme74vD1ERvdvzf78TxRfg9856LzWwprtEoGfVF3zK4wT76f58GbHajwfxiVXxuonY8pAjKwWuE25xdSoawK",
  "key24": "32YshA6Syme9KritHhySGHHCLQHwEs525xtCMdk8sXRtrw5t6ByKdmnrMrN3RcfyCQY8n36eo6VH1BQCnKdiVE2S",
  "key25": "3HkCMXY8Ywvxu56oUkEMnyonXHK6gsqoCUs7GtT2RgzdkSyUkPADvEbcYzJ8K2Tgou24WcdbxfUZ9oGEvnRqkdgx",
  "key26": "4AkJe6JiYZSCJzEbWkCNHigdCLAu7vo4Gvnbruogs9SVCJDEhFS3kgVK7qLdtfa8FUJzipn8wx4nDsiAj92bCJ3H",
  "key27": "5d5KtdftG4cfL1VVKX22Cxx9wretvAx7iqRTbtrtq5WE6PuTQWbVqpbQCsP3eFa47oU2Jv8Vumzxzuq9LrWm1RTP",
  "key28": "477KrLrVH2KEide472N2n9q2dnzHud3BmiEZHTqHHBGNXeaNudbAsRFk5n2SxcvGJNyPTZX1Hp4Gosac5wvdDStv",
  "key29": "M8boPeZMJ64vaY7XD6rhmpMi3brRqCVqswr6LzfPPZXGhsDA7dFvWvhpCKDLLdyELPt9MqEr48eKQmrjYpFDTSH",
  "key30": "5MjVx9vErDSeV1RhSmRFS3EPFxQ75hArNPE2ayJpFc9CeqF61b47pXdtdQ9emQJcvBPbUAQWfqxKy4N5piJPhuAw",
  "key31": "5XC2kEe5xMcVkW1x7s7Z9J8VjeuUSeFrKx7MQTxwojFJdpmNUxkjrqQWojCETTW45EHcamQRt4YY5UZmW5aT6TcQ",
  "key32": "RaTnakqswiwMCK8qsKuH8Q379zu3hRXvAcUb3CGkjgsgTkhtvkCa5eSs8DyitSeqLWhVD3wr9XDVdufbNh5GxYd",
  "key33": "14vMtbNHdUeppWfuxViWnzGwJqEQF69AigB6CWF3Z2mPdGGGPtnZrCutBdvDdzuDfYuytbtj2DDgwwSjD7gWThG"
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
