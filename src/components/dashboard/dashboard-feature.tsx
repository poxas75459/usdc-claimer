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
    "2qDGf6zUZPn5dPLj3gCbdPXYGZXEYa7e21UX4yvMUjs446WKG65vpJ9X9b4Ucfzzg3ouUXUhQqNghyGj4n89twGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4RdnKhUngFwvhU13E38UZLWpmSW7iqKFVHjqWuCp7trQaS4CXGk8aYW8H3wFmz7vNhaD796f5FAxuvugMsBy1y",
  "key1": "5jeW41aDN7385a9jfFUUAdMthE7b6C7Z64iHvGuaBHgwxVr8HExAho728jJjeVaJGCvzQ9CkTJXmBeE9rW7RWRg9",
  "key2": "3ZQYp36XZt85muym4xzmdBdWKk2TFmCaikssoavZndvtuKmF1EqcWCmjWjfdXUhgh1qQErTXsdzQa6upPkyX8fn3",
  "key3": "5c4hq3jPENfFMvzwHZjaTpYLFUfSDKxMB62k3Qx5asPYXxHc7gNRaFXqnj8iGygAgvMALwfUhByFPiqKCFkDk7p4",
  "key4": "5KzLbC6a3TRQMNk1ZTK7vRyzmbV918YBv3kUgiQL9necqEeDNRUJxwDGNDA6p18LTUsfiCXfrbHfa6TyyNJFb4xK",
  "key5": "4STWUFD7MsgCgJxRyMswTnNTwY1VNmj7hp6W1VD9Bq2dhGGAAhBxG2EBMhFE13XCry5TKxXsAU4HYcdYS1pY8Xwr",
  "key6": "5BD6gKKgdYSXjAFmtxtCrU1niXC4wd5spb89DyBDktSDA7mqXFShrX5rdu3LEuJKB1p1x7mbUzqoE2mwbnaJ9TgL",
  "key7": "3AJM3EyK1fmN8RT6hRDrp71QKLmjJ1v3N7QDErgpBTWrequSwbBy7NMCQ6YPNswwuaRWbPWFCMnXscFCZxawJaaj",
  "key8": "2zmgero5Y3s2pj4UJnYcUsdi2DFmS9ZSabpXHrDGdP8FKcoHPeFuAfPqjMMUXaSN21p185wSdx3sUUPh9R9VXj4Z",
  "key9": "2FVfSSRiPwjcnnD13uEYX8mHVC3ggyunySNHQRxU5AU8VZgfKT9vahRsGP6sby8vnXftvYkq4jGqzyyJ6yLCP4Kr",
  "key10": "2zvD5Jw8hJiR5Gummr8rTY4emMzmqXiRu3pc1LTV9Zx4r6gaJy9dR7BKB83pP2S6ADstFZsYmquo2dRedNHrNDiB",
  "key11": "253jVqWYQqJTDHawR9QPFvfS3V7M2h1jis6CA7VG5v7xMjQZGpn8VVTbTj3uE8G4X4dqVcy2cLa3eKHHH987yHoa",
  "key12": "25dJBuRkBh8NSZAPbyuKXqjU19KVCiMRXhtBzwU4jWN7HNSRS1DVeaibTYgdgTDTTJaefMNqu2xE6L5KuFJXsVi2",
  "key13": "43wBMkFw3YN5jAP1To5XpG5UVkKeFNptXUMPXCKkLbXWCvHvwwZ61mzCvk38bsyQm7WQ4SFHyqHEcenjhwcjXvXK",
  "key14": "5SL8nfxHwxzHPBFXdgvKCFgLEZbmFpmxir7BXrF9vi6B7ZHGvA5Nhm5yCTc3BUK77PXbLYZicimWE6QMbuxjpTzy",
  "key15": "4rYcBUr2y2whfoASX8QBffMsRb4wg6BrTuZVbjwi2XZQyQLQ4F2xzJzxVtJqdTMxHazmbTPHc699fqkKMAqXfLVa",
  "key16": "413VwcZjPrtrxHuUo5wChrW3PtHcnqrxmkXqcj8XUQKxp8sNwjtEx7wwQSDKPn2hAmFCHwMiUo83nHCWtdGjqd9k",
  "key17": "RofnAgypGEQsm32hEC8ZgJxzdeULhrUPPGx6xLb7uixn3G3KQ4fmAFW7h7FT7uYZarnEtAd9pvbpTWNKySLf7NK",
  "key18": "5FeL36fXLgyZ1xPLMZ7wmwSm61oBsG6bPcUPKjuCS4X3kEczmkoQpPgYSy59drrV14XsLZxmvapUS6fVjg4nhypn",
  "key19": "2GDYDiABTPEdWH1LM9mvo2EpjqvABjHpRBBrzLaSu1tDFRPE6AX3pXTzsHixWe6AsX83WGRpdgsdJyWwg77wKyeC",
  "key20": "CfMPx5FdyaSp1K5wCBhWK772wkWwTmYnr8Q8hRVhdJterniAgeU3CSLR4gCyoMdHrccqNDK6ogCsaSQHxgbmW8q",
  "key21": "5PF5LMfuuqYHpY2nC4T1pUZvaZXvRyLQKhFPkM7CebS6cVJu2K7QEgB66m9GqJ2VJRH4Y6pS5CJQMhtqQ5HSiEBc",
  "key22": "pzhpSf3hDpczDRDZNbf2EdBqpkWiwKo5XqJc8oP9UqnG1634gK2bUfSyVVW5s7YinrihV4FXoUXGy8Rugk3mCDF",
  "key23": "4psdcwEzSsaurfZNJvQHuu1dNoo3TutWyKp5rtCDTcTobY3nBN5ag1oHBpS6Eygaz2FTQMakgf68maGrnZWqTECf",
  "key24": "5uBusziK8D4fehbGj4JPy4cdyv53vYBGCAKXcBAUbce6U7GTAniryTFnjezw27n7a4mqvatmeGGasXGCLcsKx4oV",
  "key25": "Wo19cJMDUMH5uUHgLZXwfHw5AvuYkLomKWjw3Weg3FhPLn5DdibFcFeuRZ3ikWq71HdaxhCQtT1FHfxUFcuK2NF",
  "key26": "2p5NUNdZptHBuwLNZNJVuinAxkWJuqYmUMwwZ22XFjmsnTabcnA1q5PobQMsAst8uAa3sxkb9SuNvuLDrSoBQVDY",
  "key27": "4AWLwmT3FtDBe2MhWT6DGfv8okDtMC2raX8UajHGtoBwC9ztcrwBQ9jBpg9z78v5L5dTsY4RMN5hmSFgaqNwSD3d"
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
