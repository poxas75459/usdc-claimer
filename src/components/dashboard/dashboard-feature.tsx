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
    "2zbaR1Pco4GcHXrZwzS7teWb7eWYRhzrYkqCyN1Jd1SVupBWePpBWKmRFb7QK1EKLohsJS6y5MVYGgUSwa8Cwm4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDVTRXcDNkNCYdwTr2k6vzXpMJDEM4DHNQCTCDMkZ5pTnX1PpzW16k2pQxMjpovpmVpfkXmKf864yZtYqK4hNvZ",
  "key1": "2KM6ese8YKRDqLzfsdcQLWQUAbdN4FDy6NSmykxiyj9CSokbAcPNXVeFZoq1RG82ecfhswCvz6HFkhF5Urgk2Vpf",
  "key2": "5xbfyDxUEcZ1caMvx7ZfQC57g5dtxoJyGqFQHFZqYBt3GHL6VTE3Ugo5uqSryW7dNp7xhU1f9v2ds6WurTnST4QK",
  "key3": "4irQUoFTQWmEZtrZBucuNwkoykeM6KtFpj5JtnUAoqJt1tiz2ZLS9ZAvSznrbiLe4kPP1TngBsDiQgeuPL8ao4Fg",
  "key4": "29522ufqc4FwFWthFuTLjYhADJAAuSJa3eorngsh7hKRZ26vnQRYvQhthnishmAY9Gbu7uVjWmEpnqEVQsJmiJQ9",
  "key5": "Yb68VcfHS14MRbsD8xXRjkJHrUpUP7FsSLkvzDzXKydbdHuc4uNQ3aegYJrnJQ3nLkSH7Cgu6Gxs4o1vk67pTsN",
  "key6": "2xYCRZBBGMK1fBv4YXoKgHwkpHEFRoxqbDocnJp4rn1yJvTsexCzJmQWxhrJFnkPdSvaDgddD1J3jxSm332yaAC4",
  "key7": "2E1Yt75Jjv1rLtn4BmAsEVh5pwSUbnqXW3YpGmyzfAmA9dnhHz1fAfDh5cTY1Hbn61y9K9Thpc8Ahm53gR24sB6z",
  "key8": "5TpABRRT95A6oVGbdqsTrFbDfFzhE85k1Snok8GtVyTAutBHdjyyfY9gs7FM2w1SbGnjWK6SkkBfotchcF2AGar6",
  "key9": "6La292Z4FNwC3CD8LdEfuC1Ya7R8QC2sb598RZgYbBAUb6XH29mZ3wQnV9aLVwFAfaDmQo5tdCSw1uMbhLPhQSk",
  "key10": "4nvPBAW64BWKt6SRhR9dfux7GQ2ZtLGvkcre9L1M2v7HRHNVGomsyxAuJMaxzN1TUXaUdFhDZ3f3i96nHnqMz4nd",
  "key11": "32BQoafzfBtwhtk9tsvAETmwCJkgc8VfeRL6KNntGDXQ5AMujMAac88eGJieoNzuNbqXJfPvLyNxhh4va1TKR9Vw",
  "key12": "xhUHHzAAYMzsaNZd5RWPJumowj2DKooCckbsLeJ93PaApPa8jnGjV8dJ5pgwScAp4JfawD39FtiMRKeyc2ZzNGk",
  "key13": "5omkUfuvvfegS3g3YXo7vqDim8Waqk1LYuXtdWUvj4rHKqNvaqmUMTchpeN2932A3PEzVKaqmdRHxizamXUHNhKy",
  "key14": "28K224vueuu6ojFGzawzVqTKnC3BPzdvjsBFCAdnT8L14RoTHSFTk4xhmW3c1kqfga8pNtwj44gEUrwFoL6iRvJS",
  "key15": "3pqdHWE7UxAX1YfjwpyEkeMgq1WkQL21Lht8AFrgMrMTwB7nk8YpRj9n3MxQQ2QJLkMswoyZafeBB6QTneBCDiky",
  "key16": "5BhZNS9iF2AEwdJD6yDoDLDPiNKA679etLpHT4dqxBoxCW7RtoAGc1yYpUgB42xv3pm8KgHfnrZf5a7LUY3HxHhv",
  "key17": "5fh1E7w649tbLX2K3qoXkjr8SV82gjhpR329JTdAN12LmieHKws9xM8bEmD1BkHH3USkFbXBKuF7D7ajKKgwvoas",
  "key18": "2gm4ani3m5h44uFLYPnGTx4x1M2nt96ojgbrDD4VP6aWsHxDv2UDxkaot5bgNqoFbVFcpzfNetQze5cq5unPF4Mr",
  "key19": "VSLrYFCDdnuKTacSz2xGcMDXEmZtf4fuCSFwL7UZahBsC523d2ExPc8cxqhpj2aRQ5uP6V7AzGG1pLw3sP1WsSz",
  "key20": "5ARDcH6su23PgL1PDFvDdZVBpEhhWJun3aLt3ccqDjkTEWTrb7RGjDE5dyy719SoYeCaEBRim8bRoDwinNZLUbG6",
  "key21": "5q6yNEEmLrHZoGjX2c3nNBsQzGkvdRKR5AtKcUdgyoW3mJbwK7Y84nyJAaAAUxdM6br3cVCMdZw724pSm1yCvzAd",
  "key22": "23GEC1DCES6ZRyWszsG7ThFfncqpgaXYf1m7sPj4BSkdkpgX4zKea4GkiY5eeTcwJKuNw1ZzCpfZ6KqTaWLvoeFc",
  "key23": "2oHugLoFdW72WWXJMpxhhi9cycgEDx3jDHPhizk4vaJ1FyCeLBmpkZSVxsnuawvQV3BtHWthRER2uQoSbD5sc7V",
  "key24": "61XZoFUyuZrXASVkXv85D6mv4wesap32x34ySxyVDZKmNQc2Nr4S4z59dULfxsDeqcsDd4GptbxckduJKN4FFrjD",
  "key25": "5VXiwcDJDzWk3bBqGmZfZN1EM8wxNBfxBy5iHBJeFaftDQ86SUCzbhXuG4RunSpwMA8E6YuQxscoqLXVc7ugz4Gr",
  "key26": "ywpfP6BgbgtgS4rxj2ymT443ov8zhAncP1j7qgPjsqiXmTEDPjcJuA7hzCJuxv6U6VocaCW5SRzUWxXZrrkVsjx",
  "key27": "77a6AF8Sc3SmF6oTfTdL8khBAkYt9SxJJWV8tdGDaqP6LBRoLXqpgDu8VcohAcriDiQrhJXXMxZLyWBw8v5DLvu",
  "key28": "3BjPd9MhtwJzSREhWX3r3ep3PsTQkfsSgXEovaEAYyySRLx7GAUTjbxyCKkNtkXdJKWfwkeSiPupyGEFb9T9HPuB",
  "key29": "5a3tB2bYDhr7Rn7kSRbXSNce5bgmtXkMcMayD5Aq5PiQB47wNU5dGtqS4NjbZSmHS8ehpATkMf8FDwnnzD23rAiQ",
  "key30": "fzBQVJxRuAdxyfbh1o1CMynv3tTdMyHfgNooKtVFHJeoSXNSh43cj5q6XvhfYfajGRnaawept68gbKHtyPLsjke",
  "key31": "4v2pzRqwU7q4Df4UgnFdpn64rEgdCybwZHo8rSivpvF6GJjU6noisx75CVB6YpTwbUid1hVdQQUxP5VTKj83BqEh"
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
