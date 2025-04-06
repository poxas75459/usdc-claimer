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
    "5JH7tF4v3EqiyLy1bnBVEXRCyzLhDi9dY3AYZZ12otLc1kNZYhaYwrWavxFuE8VaUQ1tgEfBxXhkAbSn6J7pfEDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QEJuXMWUAG5ek1LwGwvggMTP1CMwPkkuWyKtmZcxxicfZNjYjKVUu9quEgjWwEecdN9tbMTQrwrqWbxBbpEU9C",
  "key1": "35mQtUdBbhLPQYYezmJAj5qP1N4YmJA2iRZNs2V9Hpqj1qW6CV77EQkUMHnNQLHKGNrPwTwYDMyWFmzGbeKkBx3S",
  "key2": "JC2EZpGiU2Vi6nnQ2qmnmbJdrMfqXDp2AACRgkEwQczYRwyAjCfLnM7EZ3dLZJMU8X3Lfty7qizufbiyHNMFmpa",
  "key3": "HYo6Ywb4caxktb2BRz5LheYewqUEEtzPZFf5J86wTtkdAqhQA1RunWgoAK7WrTiRhGw8SQnsn5HmyPkG2yMkWNo",
  "key4": "5FEMAs3neWLLDBKcebMVH1U98gqQZowY1jhv37aZwRje5xFAydptu7v6rih86NAggywwwwyKF4sNcgtWbGy9xr8R",
  "key5": "3iNzncKrxpKXbjo5GUPcskrPeruX2S1GooWvP3rLGbHfGFCWJXDPB4PWssuD3xfatLSVsHJN5fZRRdCq2DWeUcme",
  "key6": "2cCRqryEU56kygFJPqWxrRTMHZJDFnRdfdy5cHZDvuwxsYwcdr4bDMMppr7U3VnUoeNUCNX5gWUxZLCz8V3spVJk",
  "key7": "Bh79FcRZmLcgKehwfPaDAJ6ySUCWFLMjfYjHcfd9QS1gxCBQbH1RPF7oSvdXdCEJhXRDfBhTNYtrVSUWLvTtQer",
  "key8": "GimCXQq3qyniJq5nPqLorUXjLCE13DyK3tisuzqkBPDGtXxZtespJQmKVFed9cPgx8NAaLNZ8kbTYJqpeLazXri",
  "key9": "36crrU2ut2KHA5iDEWfHaCBDML2vh3kD4bc6X1rVjbY5DBgCdqZKkMiv2LGn7h7wbmdS7XkkGGzUVkZzQPoFaYJZ",
  "key10": "4FxXMZsZRGrfw78VGGJ8snsdBb1ambnzDma6pgsKrHo6g27Sz4yntf84ej1KuebQTw5VimWncUhG6FQfgcSx1u9Z",
  "key11": "4c4hZ5T8Do8bw9HogrN6PV2NLnQDiUxhA8vjoGvqiEbFj9XA4WQZXKAC4NRxHYHkEh4JXcybxbNbNETdtzVx4dof",
  "key12": "5gPbGoDSahgZEN5CDYiTUJ6D1zqtEttJfwZ4i1CERdMivumgvT9bHgz8jZwsM4RcdGvqmk6bhfR7hLNZNeocseTt",
  "key13": "5cr1KP2ET1aqujLqdQ4k1D8SK6mE1dfxenknA1ihHmL9dwjWnFfzoXvNPj42eCF12RzKA9LnX3VExqxvDagLQ5UP",
  "key14": "4GZWPtXfCeSGBgKR1C9hgV8gcaA7uQxgvfeWdZYTb6PDehubJx8JZvTvGXQyeuvcQajfNwVEu8q2K2MnmVCGqwUP",
  "key15": "4YpYBGmm66iyEyJbfAfnNrGxQkJehurNGEaTTrAcSniSigaQPB1EFsG2hbb9kcetgrBQjNb4u1dgarN8GfBqbGi8",
  "key16": "4QHmrHCSgpBtHDvau43K13C75oFnDRwnMJQHzcGhB8iUJ3Uxs9XrYqCWfHvAk1uJGwxkGzZZ78Z8UFaYc2Ux834J",
  "key17": "T698wf1DrR3MuNbmQmDW3CgroegC3eZHNFp4NvnHvHPKC27oxiobqzjB1yE1Rs9cFskpCcaEjTanGtswXhQpGHW",
  "key18": "3VahCEZYbe5PYngRsWKKwkGsiUydTiJmG8R3AWjPWajL29DDmSBJFXACvf9cto3pjNmNRVPoy1Wzfj6H1BYnAXdT",
  "key19": "4MXKvxH2PkT5soxwzWSr35JcQEoChGnXBjRnvLjWWUUp96HFtvbupgubb2iTfCjDRZ7uLqqf9CKsut6eg2a6MQuV",
  "key20": "3pg3CHvhcoY6j6NYksvhb2gjNccTgGpZTDfoHs1gQioi6aXUkrR6KxAhkfsEAgUtytVMuBtq74q6CCeMcZdc3X3G",
  "key21": "4i2aAG9mcCRYQV6Bs3sbjiPV9S7WTDBGjvQ8v7vae2cJU3VufGVYZpDe3B95PzhR2b6kezUp78NNktji6ibHQdSg",
  "key22": "5gau966S7nFkm2nC34GHwS1zqBS4LrPmj6VpKyv4GvYvA3VxHi4mVcF3qn7rzc8oYxhffPLXXLk2d39azNX56rqr",
  "key23": "5tG57BJpBH39cRgJd981BJ4fvvGUShUyxDQXnoap69AgXTzGbKqCruGbPUtLWcYJugskVxQrsQvWhoCwXeeGqkgy",
  "key24": "25dUYaci4kkFrjgr7N8o1Zbp6cTzSCXnqAH6n9d5GfniGoQVnjNqKegNkUU8VVanFJja8k4UpodayZoetaXiPRzU"
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
