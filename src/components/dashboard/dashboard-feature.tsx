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
    "9FEVS9udNpjFYqBPS4Y3cNrKenEJyv4qUfpFcwZ5iNxX2f1KQtehRCL6t5dGbTb48vWoLt6WDPWbTc8VLLMyZrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WpmrtB87NCFx12dKzEv4EWd1n8PV5w4dQoeRKBBkvj4Tucyqe6Bw2aWzQ4TRcB7LL4KsdsrgASaJRRJa5aRxn2o",
  "key1": "2xdyhHX1Wkv5xxDu4L2FSBNY3jjCdjtBiikecBzmPyyDNvTCiLR7tiB3FRHVt1hGFrG7fg33mVpx9mtaVKv97gc4",
  "key2": "2mBGCfWcThd7Z86BzAQhHVzWEbvTncmAXJHpERsH44njBYdmAsqs9ZDeFd64qCJ9Av3TzBNnTtDFt2QGAumGVC9a",
  "key3": "fUCxY3aanKhNYLVbVWrUqrhpDn2vvtthCdBv7kfGemVVpF8GspZH4JZ7A4ckdrYdyMNwfxpswqxp7RghBymcwWf",
  "key4": "35us85ewRao1fn5r4coBaJjzCwkgRMrGvrtFu1v6xLuJeCKSwaSnZf7fSA24Ptw52fuBzi9nLVzfXGgjPcg6Hzew",
  "key5": "2FdP51s473KQ1QPHDXBc88cPrnkiFDLw9Vj2pky76ATycDzxi7oEE4e3D6oNA5gJ5ynEGBEMfrFTUMMvrK2KtCDk",
  "key6": "2VEwvsq7TB4oi77XTPBT2Hxryga76bxfbnLa8yVFmR1xWyFD3mUqkH3kiMTUzoPi8KkZ7PtDiUfu67LqZNGGVma7",
  "key7": "5NbhNP25VYGKkN3gNNgHRXP89Dpgg6TnK4aKTXrF2b4dVwqAT6aKCUqAdSMTpQyfBD4A2Hir8X9iMD2txcEqTrc",
  "key8": "2duxEcuvnZufvhqX3khCVxPWzHxNYL29Pht3rjjsuUuyNE38z5rB8ARCouzFvU8e5sqULBNA6PEV9y1chLEL918f",
  "key9": "bvtghoUeSwAiFg5BYr7nX8Nxbt3nz4UYnA6wuBfZRVqBb8bLNBhDHfgAyazTR3uYkPsGcaaMZUQ5TE8oum7yABG",
  "key10": "3LL7Sbtq1kz4iJsUENeRcjnGHGyMws2gQW3SeFB8NZ5qLMtAVqSFoiJRH8fgUwv1jkmKz5NBsBBfhoDxd2WVzLFU",
  "key11": "5errxtNab5C5amchAjTYfrwq1C2DpLxZkzreHhFJkEwjnvtaDTh8ygXvHD2PVGHSq5jeGmgB1P2Fj5R35Ygi4uv9",
  "key12": "gS7LEwaMJoc2iFLc7h47KQkNHY1RtPhGcJNTAqpRcqJXn4EhcEiavpJSbGnzKVdyyhtZCSLMmya8XXVj6nuBhdc",
  "key13": "2A5iMkzGQR2NNLi8oWcdP4s4oWhuUuuipqPYHJ3RVNJvRfps9UaMk4s8Py88ojcguY8d29qkaVAz9mY7S3gD2YGg",
  "key14": "4hL2XJoY3VBb6HpHzJA9SrvGfrWJZsCnqcj3e3oWcXHRG3HoKp7og1FH5oe4h9J6ENrEaHM6SxiXRYcK4QSbsYai",
  "key15": "5sEBwbN99dJ31s8TLiEKmtSmRJDkMRK5NsDmEFCxVSyEmwptyupeNh9GqHBJv9ZtZ11rgzroirJspN62tioCzsMv",
  "key16": "4rucK1Rc1Pn5YmotgbSA11bhPR5nkRWuUa2ywTGiqjUJrgRBgKfmgRKH9iSyFaUXjT1AM9aiEZBbqiXiasDgRNuA",
  "key17": "23w2o4xRxsaGqDfU4Bsxp7WkdxH29xn5xR8dwVEXSmMaA5Np2oE5C7cCZ7XurhASTVGD47EfQyC7p51PFMPfSuEM",
  "key18": "4URiwG29B26yerSpiQyzFsQVYFJUgCxyJgWzpYQYcBQPKc3UcBMCfNevwfHTM3tcQYSnefXg43um9wfkeVu5RvyB",
  "key19": "G6895GJrHBCdZdDRvh4WiofvnSE4rdtBbrrcPwPFvoWR9jwYkCaRJBpwbYcZiPPuCuTBUFjQ3TzqsLyRBJos1dp",
  "key20": "2G9jSD2ecyoKFBz2hZBk6NGLsv4Bkr3rcn8rxoNbQppCiTasRFYqtEz6Y7HMPK38NWv8oU2EEcusvRPwZ4rtHzNc",
  "key21": "2jyJu17LytuUfUg6csAWKYDtBWNnMJ1RNJWo2Gnqs31YKP1QKb3nWJ6na8S5Xy4YdUbU5b71dVJrSE3WMoCSNuu1",
  "key22": "3s3fugekTjT1qCcpGp13XhbqESQ3N83fUMkVhokXyWJsMhc7WFrkfLUwHnbykjsZBHVZi2SpCq9mgWRx3gk3YPnE",
  "key23": "vzv3CcpkiWhDN68zd31V1p1r4Xg5qBtVxDMjBsjM4MtbE6oNu2x1dzcLtKiDifJhZYBbKerXjLkiE1A6u1gCriQ",
  "key24": "2bhraDPy2F3NgjvkThGzPbpngjmGAWETofDaHBVLqGYgQtddTEw682ZouKBdLLc9zLzaHZYMyNtjb9NQ9UJg1pwE",
  "key25": "qWUYtCxg27JQijzA2Ba9u1LTibQYCy4DVuuHPnHTCgnJUQvFRy8AnnmnUuubJMzCXfzYeyMAZ6gQ6Ky98MwTYkg",
  "key26": "566825P8gf6VnYbozn8gQaizugs61t9AYj7nWF3PqENL4quNNbc5QKvSiswXY7djFyTCyuchZxZJJPZEB5FW2Th2"
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
