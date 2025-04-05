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
    "4cu8xvw3eqXsCsF9okGs4nnXsNwzQJrYEvmwEJjvk5aCvHD1R2jUPmsZ4qnvdoGc3i3gRcY5wkw2TXDxpibkA5sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zcTgxFAAP769bcb1mqhtm1FZFSeeQoQtk7DvZLPnJbBgp9FrvZLiEUuiVCprnxZ8Ffkp35qqUENb2VtzreTrMi",
  "key1": "2LtH97kHQbhedppt7bzxUMX8HKhLzc7n7ZSh3o4FSLmu3Z27YhyiDQUmiDG3UFkJ9ypjaYQgnhkCk3X4PEbdCLXf",
  "key2": "44pVtHyKX4fqcExAxLeG1HRLPC8c15Z6ynw6UqZEssTJma4bxRSyKNxSmDP6pNnv9B4mThk5pjrSDLBv5zNNyso7",
  "key3": "4aitDPp5QeNWXTuiUf86YB1knQMycyBBPJMrRzub9FstjgnwJxjVzBesH2UDKUDFDtyodgw1qFHvYTftT696KFNG",
  "key4": "2TEcKQV5hqCCoTAyMSxgFuubfioL7BA3EhUufnLNv8Vf7oA9xeLiCdTBHPk3N5aADZo6q3W35fsWo8eCw3HbNd3d",
  "key5": "4np22GaZkQ6xx5MvvYLwupgzQCrCp7mGHMsWGxNmbZdeNi4GReGjYcFHVCSpUFF2BubKypkY12NVZqgvmS71wuho",
  "key6": "2EMUuEUyziYZArECbMg1VGft7v7kvBky9KnBkbX6ZMa8ZCeDoBqh4aR6Rk16AFr3tvekfPyYQnqxQ31NkgK38Yig",
  "key7": "34xFHChttQXPrRRaJ5bMXfPjAYXdXtdvMgRDw3cCuvyRuv6YwNtnAyBgj5yuCmhNeBEaPp7DgbazaJBXaEzAf9Kt",
  "key8": "5q4XWmkBYQNawckjexEzQoNq4E2B7UQpFMGq2kJoKAfovWkUJDrzuzNm2oMq1XsErcTZ1H9P8Ep7ho5SEDju7aFF",
  "key9": "3a7QvRRFNkSj7cL8bikyuF64tqRaYzHB9qDMZiPwTbiGzgjBWBzthvKqGRUz49qzNzhWrW2ueyrjHjaiMWCABuGS",
  "key10": "42YpZQ4PAMMb7REt7NBLPyEXZ9fKtPiNTAhnArtvm6YWmevqBkM7DJZXZKS8RzEweztp2p1ckvSUXeAigBe9Ei77",
  "key11": "41FXsAhFbXoGNsvCerxzjxbDiqTivgELe3jQbLwvkXPtZhMxX71rw5KZTCL8N8Z7rk3M5kMFMFfh3DWhZuEYh8sd",
  "key12": "5Qdd8wCmDZ4mLSRVUt4UXRbcHe5CtC7vCKUNvK1szKweJKRNogNr9VTqgvpcbQQMz3hvrcByVMUmaLXDxwYCDveG",
  "key13": "4rsdgg8JztCFkkzWQKEWZyC3YJkCuJ9oPHM13nKfDWZpT6kB3ndKZ8y3YbEpvU9ecVLhZcd5WRhWxDNtPottfgKu",
  "key14": "5xrPufCMcCgcpTdMVGpE5GuLLRSgxZYefKVgeS3yfTcAXJYsNCecTiRitPdK16MmAQiQ4nHGHDsyJQbDgVvFgaFb",
  "key15": "3Xm2bHmji3XhFdVffqs6QUEqc2sCw9FQViCsC1CG8i6ES4zL1GQQTrgev922UfUPtcbVU5tfdgNKp3fBCitRMjVr",
  "key16": "4VNpKpScXrhWG8i6DMaQFeS8bRowwM1KtCR3gCrSS6Xf83DaLFVU2iY3FRianwrMYYNbZcMhihmdmQCzhdDFnRde",
  "key17": "577dP7Vp6Zsm4SSE635ToR7iNC3vEdZBjmhtPTLBs26DDpYCogTvDzaZZxKRwntsE2PDwuW6j4fRY2nCVS9TxEdm",
  "key18": "642unc8wYvCWm77YuTsZWhtWd1PFz6QMMCvC1hxWDh9kLLQgduSEDJzqzewhm5kyVD3FQ3uizxiKmgPmQyUa7Q5Z",
  "key19": "3XYuSg7vt2dWrNQM1XCXtGJuuqxK58Jh3f6q5xLNCVdVnd2Sq57AzXkPk3uFwis3mXvaCdojFoSzh9dGqxzQLXxj",
  "key20": "5yJq2wYJnuBCYFJFytLr8SvuPGYB4M1kVziWJnG73Aacx52SPPoYNeGBE2JJDQeMie8ksW7xZd7VVcDJFEHpGGzT",
  "key21": "41ZejLbXFYce4QaqbGtUWiRStyncADryh6UcS9Ft3okNA7rtJYy1bsE39NVqVsZWMbEbTcN6xhjALy2gC5S7NXPH",
  "key22": "4JhCSoYrU49RcaqEQ6vjnWYWxKzpfL97o5qkX2e9w7GVRNKmZ1VGniNdKdUDErdMgak55JWPBqEGww1uynhVyRDo",
  "key23": "2cRe4brzAqeBtqsMUzQpBHseBZK6ozbungH9DpifUyE7hMwog8E5GoXgnx8aYGH1CLFiPwj7Z2i2ZywPE3YNtPvv",
  "key24": "4c3QYxzLfQD53kHuL9j1T1sQbkDq4ZmWM3XxCGMayB1NBtsLZTaQ8uXzMPWNQWTwA9Sx6UzDPEvtvFR2wHNWUQc1",
  "key25": "2dfeKi1E2rVMRPARUuuNaEmYQ73AQWavAFEGA3uiZxv4nk17hHhkTuLcT55pwPqTXMmQENReN6s9pA2bR9LsMpAu",
  "key26": "x5Q8AGnnGHwkt6Wv8ik2kiMqWZmoVQGpC1tWE4MDcK1oGgoPESTeBTLm8kXgQFNHcpTXNnLtK6EXFakVox6DXad",
  "key27": "5PzR6zfLDWvyUijoSrpd9WvQKMMwgn9Psz41oTNs8Xbn7hZ59NUKJY6R6j4mzNQdptw5w9KW7KRKSx7bGgBJgcL5",
  "key28": "551Fzv3odB5Yo6i4F4jjtattwg9y8i1ytrxPVGq7cphUNwW6nHEJ7Jtt2gPVspw38uaQ5QqJEUVLSdM7vsHh62Bq",
  "key29": "4GZUURjWCwMt8qHH7umum4nXXSF2Q96q3vJh5HDWEVJt3gGMj921D2PQDRiEhb4cw2kN4sBbsXk6rZujW1ZCtUhA",
  "key30": "4rrR4HTus36wJEa2vQHSMViwxSvegdyL4CfQoF2AsnSXkwpC7VyMzdpN1qrBjmeMcZN9e2wYaofhVuJu1r315KQm"
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
