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
    "66D8nTS2gDHgruhzCPY1RcxMF46XuCyXWvcuwSsRbuN8yZapAa8hvRYZ2Qn3oCZhZM2GYqER6qfG4wdhWjHwZAZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Wg9u6cupizNjPpHvYnEKNGoeTh2kczM519VrSx6BAQQuNghcizDjre1V6nBYesaXdGUGx36xE6MkcRieuoAgrT",
  "key1": "3YAGE8Tfki6kGhTB7U9vRncxEWj3tz1eUEyTzRbuVf8R8vDnKCnzbjBYSE8r7n9jGaW8urURC457Ktr1GJZXA7f4",
  "key2": "5FgfUgDumEUHZ5WNV8A5FtK7NtJyBfgPPzK3Sgv7JM9QVbZsqb5rAwAVYyTBaEsMMcPyarGuSi5ejfGzJ3UKB1BC",
  "key3": "3XdNdWBxSdRsZWSeqi9E4ogowW8jsXzkDFJTZrz99gpTdq4PnysZiXZNhTmys4DdqUZD6qQ1rgeGH3oHYxpqV7GQ",
  "key4": "2ibogrUV7CLRu5Vxg4UfgiQqkSHbNyr6L5GS9cLiuCERQj7WtXgkERKrrhQhEZBJk1i6Z8XG4ohPjh3suktGEDzC",
  "key5": "yy6z8oTuuqPX3EpnH4BnPpBPMcfMCkH5uzU1gN6cw5EgHJk562MzGePzQthrheCbJnQCY1oNSrXCctE5umMB2EP",
  "key6": "Yjqjj7J2J8BcypW7Bza5vsry9b69S2XC7aPSUkkp7ctgS2Wr2sskbuRA4E73e37rWBd4tbCYn3q1S7VZN1BpVmu",
  "key7": "3FfpxbLFGtQFiV9pfzBJrZNckF3Ma4woEDRPsjeUHacLhR1uYhLnB3WxSCYbF2dxfD1VSaosSG92GJQ7mcAJDBPh",
  "key8": "5cfMvt2jvVzKftKsdwJZgyGh7SowEGLPKMcRfsGwbUcxjrNMQVV7fvY6HDhMvLWTmgaf9moWCh7xHKu93jJEk2AS",
  "key9": "5vr6upq96jjr8vv1dno7K9s5nJmR8hgHYyroqtmEMbxxRX5nzy8zaxDBiE6sshpNvGRNVqZK4oVDZDNP1XkoBzSo",
  "key10": "8VgpA3K2ABJdqvtfZTV4FrhSUAMAepVN4YpdJVRWrGoJ8VGeYMyV8NATZ8vmht1hW7cMgsVNJFxnaShUyqWYB2A",
  "key11": "5ob6YLvGR4npt2vw7YZ1bAaokzwR4ADU9FtzeGSQqMMGXC48Em5Qj176YfgDpYYnMwqrGoM14JDQtq7xBQx9p1AC",
  "key12": "5tNomBquM6JqMsC5P5oQ3JgZLAvWWxszLMganvMarNuTPdfTVxCGsufgH7nE6Msb3YiVJQyQfRoSNfWTe9kcCzsM",
  "key13": "37H4xQ95ZWDxiyjmorSqxKQzudEzSnUBTWFGqZN37tcadT79RbMK44EtHzcicLJWzmrCxAaKXaTUGnjJUb7Gsqjg",
  "key14": "3Uo7SYKjAu7P5ZVT3Zx1vxPBVBieUGtcFT2LqiQA65UHLZrXRmKkZagkUwneXyV4U3vJnATx5AmiB9DAryRsnbrA",
  "key15": "5vUti5SnZ4KczYkufAHfMnzFiqsFfuFYB8GPWNU5dTrkWs6Juk47bEJEWofi5MKa4z7cPZ3Arpnf5mJRgacVCqgq",
  "key16": "4xbZNHSi6eP29cRPU1yvHfP1SbGxFxhcT96A4e8zFkE8kF6WPb9e72FH35taFEn9YtPDMHit2SECrFgytjjKtVDT",
  "key17": "2VEoR1wsLChKP6cYonniow52rsXWrmXg3f25f4QTUETHooLDpnymZ6pYur4f38jif3n25CCCiozYmbkLVXSv6gCD",
  "key18": "3zPzB5MQQ6hBxF6QJ86LZwF5Yogigos5LMMhTVH7HcVUQc7JYYXziYhuxz943dBiUJeCsrtvaiw3zXnD3pjvPEaC",
  "key19": "35U2C2NAaVmu5424TmG39wgAhdUFT3oJHXjd8TnCseJeunUJqWGgrHbpQPtPsjthRg8W7cvK95LjXjZMsH62xH8C",
  "key20": "zbF3mcCmaq6W7R37kFuFvZPd6jgdPxG4DFdPsWsStP9uu1nT4fKgqHWSEKL51b8rV5WNtjxcqSjEvpJDMWwdBx5",
  "key21": "2AtYGsKfwYYUGz4vMGFuZw2sFMZwQE5BWEMEn4xaiGXXxxfM1JwcNyQqGaFUsbojeJTZu8TxE4nspBHP4nj1wzJg",
  "key22": "5wSLzq48QnaLoTjyTdx7bxp812QAu8NAMe8MLthLNGWHpohNPXJ2wUS1Jj5b9CuCdJpNZ2Fnz2UGGSApfEzqwnHS",
  "key23": "2GJ74L7KANzWtJtw97m1YqqmbCsK9gBXtvBjTd9JoLrZ3c8RktBYF23WqnKbeSh4eJpag725FoohqVru9Ah2emQE",
  "key24": "vCk5Y4zmtZxpaTK5BhiiuR6RKUksg7nZnHjiq6BwCTXKiBRBeuYdfR1kGoKNSCgVb4suAWjT8dbQeDCANY5fMjD",
  "key25": "dStAyQuK82X8ovp9ADHqiZF7Exh2o8Zb84qQmLDowgVHNU2dsebUsFnCz9og99hF3mfcdqjSseLW28uAchkpPw7",
  "key26": "61CFksPEDFuLNmawdYruCtc9T3JV2ycMQpT8XA7wBvZYbWXcMyBaYjVQuT1C9kMyyQe8CUK6CGHxNdvTYCZbgtMs",
  "key27": "45WrtBB9hgtV7Ej6jrGE8f3HbK8Eh1rFyw2wkQo3cfWFFV6F9jXqGWS9icGUpxqf2PMqujJPaozWWYo8ABFSDZ1J",
  "key28": "3SA2V225n3KNr3FcjpMXjCLAdPkoRjewLaksAQA43W73G4DzKFYBQSk4rSogBpus8v5Hp4BEaoCccb3b7V9UQqK6",
  "key29": "62wP78c8yJa8o26DVvbqrnZPxSDSvjGU2R8tYvDXptqPQzYFVG1ydCs8eFrfe8gDU3KWYAaaNM45bq2XNNMuqavt",
  "key30": "5R2MFPN5UYkrzzwJeUuD69v3WJT3Gg1TmH7Jm39tC4fjXSrd3sFXaQnfmk1YBf67AX3T6z4XzpFmDi5Fd4qQs79",
  "key31": "3ieLLfMRaNuCXtdSZEEcKxPxTc7DksTRbcAcwrSfxGGVz5K2N4jYErKd7ks7vixd3SQyN9vM1HJMwwuxuAQBtXyM"
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
