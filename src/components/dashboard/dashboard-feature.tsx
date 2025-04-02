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
    "3pKxNSEt3kAXxFLX1nnQN7ghkZphAFWTi5Y7gVmTDcPVbxNyJcMB21TutxURc7nAvaByCRNnoenKNsFtH3NAXtst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTQ1ju1fndyv3FpBWt1dPYHemL9ph5qRDn7m8BU1GiCrmzboikDV57UChbZTGK4KJW1teTK93EK8ArPpP8wqwhf",
  "key1": "6u4PpovQQVpi97eU6rwWNkfnvgJTsyqGt3gVRw7X7efizKcHkaYDhDfpEhNMfmKo6mYdN1hvGENtpgFrP3YuyWP",
  "key2": "zXuonjK4EKKJTGK9R1zFytadDBXyLJGS9s7iFTZeWRqrjHnjeKdzdKP87JKrkLbaAymkv4bxLvZaL9DBt2Ps26S",
  "key3": "4Au4PW3iZ5BNGgrKqu5DdKWiCV99uA3scctZTJvESRfmUWbCAKeVeGeEZZmooKeKePC2L6SfNXd4hYVtF5Wsz8Nd",
  "key4": "213MVNypbQ6r3jrsQiBsVokQCBLoq3c2HFLBhPzmazSVZftTRJtSdi8tPo2yF3cv1YZyKYwKpeT6iMdE6Yi5k5Q2",
  "key5": "2KGSroNLCUiRoDhuytu4fKTwZtEKzpMP2Sv4bvCqYFmQUba7nH7LCZH2Cwk2AkzP6gyQXZQwJeFpG2PwBUzvzkui",
  "key6": "5EU28i1WmXtueW6DVspB8p6PyLPYdtRWNYe91XK8wH9xomZoy5PXd6AxUfzoWbKz4HHotAS8yNsCTDuc9sTYJFu3",
  "key7": "2XSHQuAWJ9tJzeEu5AgcUjEVxYDdJjuKzuTMh6znSsKmLJmy4EmzVrwJwNgomAfqkpPJFw3gyRXMgmkie4m2uvaK",
  "key8": "2yPe3PZgQ4FHyvhvsKzkrfJvemWEgS6EdFapWq24wYitcphkznh7qPEMLa9HudeTq5y6rn1zKu4v8zJBYLA252CW",
  "key9": "2Snwa2q2Ry3ry3GFhtm7YzzCvfina7RHv7UcfKqvkraHzeRTC7VZ1wSU5ofVvQk72T7T6XvfzL99veDyYUTVgav2",
  "key10": "5kVHeyMS7F95YpLBCALn9nKp7WkARGVv1LPBYzgSZG81sc33pveSGBjNneHkN4VxT1A9KsAXzHZ2hxgZDWe9uRAU",
  "key11": "izYLCByNhBMVvhCmpvYz6EGBoomjzVVgRDEUt27SH5kpF6kLJGY3f6AwL5NXkCdDZQYQ5wA1sjHDs2vskH4U5hn",
  "key12": "61P6qQQWoDKmouQHbcEBpQEEaUMxov5X5wVnxkH9GJpQwz7skSgi1UGbJoXEiDfChxPjPd2F7aSoabd16pouEHVf",
  "key13": "41HhrAg4yUnhDmLgzuLVrCdCmyFfcTYQh6v7wuuHH9ZMeg4JBSXzZFaketkLRWCtnGzYjW7wp15RauKihaWC7JfK",
  "key14": "4GTBiKcA5CFoBBVCkA2o121fjcZQGTpggZndaLtzzHcQgw9TZiSCLC9sYAnQbACVjTd4s7NiLR7k98N6zcFFkac4",
  "key15": "58HUxb2mSVACfm2hf6W5yDQ6RnqipEe6pR2NZgdj1XqUk7qJhRh4ZYiFEznwQD8qSernQ22jF6oH5UUNMCUZhSFW",
  "key16": "269LXJtRCEbyoTNBkJkzLKNNCGzhWxgNqcqoy5FY6apDvyZi93j9MS2aBqYHAYpUwLkFhsXLhqBPaUwnmJidpjmG",
  "key17": "2CPc7LBsZLX1yzQcqbK6tXVmbTMXU3tzXxSPzNnvrfqXWs71UxdPvaeqbiKaVotcYz7zdf5jpoww5RUeKGbBPtdt",
  "key18": "UPJEDLayuhAjFnCKxdmcNfAG4LR7jkacBwi3gGaV5UQQegFyyMaASmdkyKQuNQ1fBV4Sz2q6rtJETZhjkLr5WqJ",
  "key19": "2NPbAgtdZzgPbahVGGCCTkWAuS3jRvtk6yZzvm9FCDdanfp2P6WjWVTXq9Z67xWCmp4tEhXuzWz2qtX76wm2CmS9",
  "key20": "V2XMZWqct1kfUFMYKxSnCgsim4e3VMMqBWcPUeu7Qw6xoYs476ZgDjz3XMPFWFUvwWbLNrKXgYSetYEXeyZp9vC",
  "key21": "5Lo7sjJvRjjSxRiWCqajK8K1oXXHBzsxhJG5Bp4YUcuf1DVDGqExRMp2QEeBzmEs35xVynLCwgYjp9uBoANziCuU",
  "key22": "43fW53t6bWbGLriwDRrSxJqRCHrSfEBmhuuh4yDuWX6zMCmZ5NVJjp1DY9Z9nPo87Gjpq2qNgLKjTR5E4LLQwhHk",
  "key23": "5erYhY9xbQDTTvbj9c2GgJk9ApgfFkTkAE7owJdChLMtC2LqjrUcVXHfvNZQbRFYpdNenNeWzCi7ckDo7P9ectbc",
  "key24": "4xuhW1EmNUecSyQDZB63KdjEUeHPsiHKnMBmKpqYZDvmoEkNTH3eeEKo1V5iEtjziz2UpNM9kxHxp8ZJcJyhHCj3"
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
