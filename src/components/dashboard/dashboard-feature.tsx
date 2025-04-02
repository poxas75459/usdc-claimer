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
    "3geo9GQtJBHyYphpYwx7ZByAPLiNU6nQCCEbCjRtjUJi56zHuZpkwgpi61RcXvbZJ1UY6MkNbDbaTzRiATe32DgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNrZVsb5jo36AxyqMT57MPYv4oq19A5wAtwHTDL3mpvrQQfVLdbqHZwVXgjJ3LeSDAsiD1ZogKLsgzHprHszdDD",
  "key1": "2yvFzrXwBoQrqqfGQVtd7PfTDEcsS9K2b6rgapN43QQcemHhBh4X665Vcg3deo4RJgfD18uPNhWTcpWTsgP13ESn",
  "key2": "33164dTLJYMMNeG5KHw5HazZCx2P6eBTTvacWWaKQLWfvihg23F4orSr6PoL4fhsEWLdHdehNWXVpZvuxQeDqreY",
  "key3": "21fLh1h8RcffcxeviHcjHPJkEjZBS42XMQHsjuZ9TrCjPtyu8xdbf1EomVkQkJ1SDhfajJLet1FWAPuthH1Ga8v1",
  "key4": "47gjGcSFFkGgaaBHwhBxaJGAWF4iwLBwhhQpM23BeE1JqnsQUMD6wFmPFaJUwWje9EyuuAq8i1kgkHNupacmAZNs",
  "key5": "4PkUBSyh3kvSfTpPnLAqeAej67rXBNWQuX1XaHuTkZ2E6GP7s8UkW1UbhbWNXC8BazB1Fh7Zrf9ii736y5tkEFGh",
  "key6": "4emoWpeATtUMpKK7ytZcNjxtZnQcU2TuDZcrs2tQ6xAv8Q1oXFZaBTCPepKuv2b5hFbGigpvi4QRYGfe68DQzrES",
  "key7": "5qqD5DdGh7zYHwmFXYn5teASWpbjULKkJoYyedZuFH516Yyj8yqCJN3din4s2RwAzFN4i7BSx1oyEZJnQWGBcRbk",
  "key8": "5qdU7e7cRib3yRnXDFi2xX86zCbVmE4cbFXhnbfa8pCEtbWPtCMybxd54RZkezW113oZU8pL5J9UoaZoUPZY51Ui",
  "key9": "4DdEgsGjFv3RZYc1KL4WbRo57hfe1RmpzKi6bZRkJ8TU8DuqozehSKPcN1xYeru4F7nFQ2rZ34s5hQedSFG6V7yC",
  "key10": "21xSqRnKdbaAAJfj62SnnXSFvuMU5T2EG4TRwDYiJCxRNeQ4poKn8huMNqCqg9MDNM3JzW4r9HbaCd3uHJHu4oKh",
  "key11": "5y55XNpC7u2HwCJDYhxKipgPBevCTeaFnxGM3JuR9en7eKH3ocnyt1YJWPmFtNYiYBYt3obTZriZmsmUTcdYJfhw",
  "key12": "EQcu5QQeEPnERHHFXxACbG4UsrMWxUwcAi6FYw8AMpnQVdwJq8oNB8phTVZ1iYC67LKriqHAq3mJp12WiqGHyc8",
  "key13": "32EzomGAtbD4MHzGc3voGPQ9iMqkBVMTEFAvxyevFbmumCHaPK7PzuXXX5yLAbnM5zE4JSMXZqk49PNYKBMeohEQ",
  "key14": "5cFafswprV1uuihcChKRdcgfMsijyPcLVUm8EVA1eWpQExTKMmBH4AYBKHhDxH9Ab1tbqxo6C4AeoJ8AFDB9RvCY",
  "key15": "gQjQqNr4S9E5W8BdJcc1yCmpRw8RFdxcWJw61svQ7nMU5adx82tTu8HfRpBbbkqiZUDJAvCHgwR9CMUsMweQwcx",
  "key16": "5f3cRxYxx6F1WAskJ1eAc5NMjYVkL8VUXWGg6HhcWjLtbHKWiqta62R2WteeHz6zGRdv1J8w8QEYomV6DwQ4kfo6",
  "key17": "2GHpDBPNnoiBtFYF4msBXbmKMYiMqP91hXrivB3gDvdEk6KNYAAPmUrj9BZ2jTcfwifR2kHPbgCe784mXZeHNnRG",
  "key18": "3W3XKTzMVxY9WFXAKxAirDJ2Vi5sc7Mvs1MevunTzPmSsEVM9Ab5kCoGUk8FBrUMZLvXAiCPMnGh1e7crsMoUiAd",
  "key19": "42Fr7ea328nYgvvvD93AfndwfpF9NstqwauTK4ZnPb3B4aYWTjDtVMXFm9dUGd9mRBUq2732hfF1WJf5vQwC7VeV",
  "key20": "3KfoY2o2TMMNQe1ctehRmBFaWjeyoEifwxvoTF4w6ZQRgHvtqrZhrFEXKeT2xBJphJ6tcnUxTv94oswsd7BguUTa",
  "key21": "2LCxwoipvvXHCxaSoJVrzfgYHebZnKaver1xEhqFy5ms4URpEbEYFZs48aRVx794mS9y3FhCu6jQUMcuKRSGSRWe",
  "key22": "5noZqj5yMpgrWqShdJpULZQky7ZbPkk51jrvD3gfijCERL5ZWebicPuGT6bhuUV5UG3dnsWZc9HVtFx5AnBz8rGA",
  "key23": "34KV538EiGbkQCiiznYaF5EChBWXGSoTni727qmgYU15UWyBoeQVW3HhTgBGvgEoyYPvMcWpC8MUr9bJdMZ7RxoF",
  "key24": "7f1y6q28bV3RsezurXmU3xpeM9R6uDJkpNo1RpneWqez9doP9iMexJHe83oapFgBRdmUrcpHpAFTtWijqf4vBNX",
  "key25": "64Z2qU5k5k9dGrRwyXbfkdzgqWT1HX8Smv7VM6R9s8GVDv331wtzGdqVVEmtPoLuB2YFyw5S283jifDS1tBh8a8p"
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
