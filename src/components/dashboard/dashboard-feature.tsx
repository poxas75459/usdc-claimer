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
    "2bBWzCXYsEi7taTe2sXm5oUUDBMrtswvPTMYdo74TtMcXbVu5zkvu3cy8ZhTEGEcinbyBBWZ7am5j4xkeTtVf4w5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDJPnDv3xBzotsUjdFeehfC2PxbdMMCgapDUqhtnHBWFbchwVYGiTBWcNBLxrXsGMDB2LSjNgrhtYmCCGe3Joop",
  "key1": "7oRyYsZAoaZm5uSJVQPncVMLAv88xRXfZvg9ga278z8gdG2V8z2w1yxmRF34FWTDTvgW6gKYnY1ifqbWTTpNby2",
  "key2": "2GzbGJZEhrG81sXRChQYZPVbpKhTvmSidRXYPUFh8TsGqBDP3jRBPWQyC487yGyHjAUyYYCZrNo1zGwbJveQs9B5",
  "key3": "31Ku7d9wpyyLrUYGzdeQxvknEVYm4iM5crcKx25H9VtEVbv2iQoA3EPm3WMuPmjw9zsNsS6ufMH5L6yZEh616Zs5",
  "key4": "3BpKwd6mcdQPesALokFXgSYbPP3PrQmCFzhEnbsjWNJh3fk3xB3djLZgN87VPqfnTfhFjqm7U4MvF2yWND5ay2ng",
  "key5": "3ZmPmcP8fh3LqHNqeX4TN6pCwPX2qHJ11Ji2NkTvDJpKJsYCQu6K9JuacEDgR8VojRumSFCpkYyYXa8PSMve9NNH",
  "key6": "2mUkgasA2jkAkt62QM9EK9H3CSQx3msLCvcrnDswuQKNGCyrJ2qpbyh7CGT9Nx5z37v4MM8mijjUMzPsKMCMLj6F",
  "key7": "676KKuur76Lc2EDoxUtmxJWJanW47WofNioRmNZusqv9Q5fY6ihs1sNWdgtGPevfA4KB7QqaXed3mSH1A1v9uFCn",
  "key8": "31EbNwFLWvzto6MJ3wLjvScMBi2vBZh4AtCjJrAd2E98KcTRvavifhdNJ1JCSZcAfCa6QvqSbtPyRBWzBGmZKoTY",
  "key9": "3fxd1NoHc75jzikr5P5KKddpd7sguV6sULZR7LPQed52KaLSagXmNN1o5r3SxpT6dn4UNPVMuHtYiSGCbR5q5an7",
  "key10": "54SuNiQ6fGzZM5XZo4PK2sQa2fE2sLKP7pdZJaSxJhmZGzJpH2mW7gQ3NYt2zdTDt4nVaxKJcQUUiuWgAuf4QfBP",
  "key11": "5WaDdvwBz1ETUZoCeaMPbyHMH1Y9CRcJtNK8BYesB8ZfmuupbDVjCntEqY2GEDtYsxVwDjPgMDJxgfDeySEPCMjM",
  "key12": "4unuUBqyfZJkPnfGXgKm5KjEGDnCn7UkhetxJdBTsqTjQemgtjazeg9oEvhbcGTX1HeoUvAL5LNkuvrGLdGh584S",
  "key13": "2UViNQasc7662ZuYUaoLxA4jV4PG5QAhymagD94EPwk7aBQdXEFMRLX6UdqK72aUKjH7KGBcM8U1JCsJv5b7hGFP",
  "key14": "4cKaKSpr4jKySepDRdrW2p3ARaj3zK3MaAALmTkv9y3xaJT7eaxSsMgpJsdu6ndaoPXMNLNexmvvVWNdDD31roUo",
  "key15": "vekV8KgUbRFQyrnh2m4eXsfNSfm5vrHoTiKqeLJFwKwhnniz6dA47nkkuR5MwLmayTmoNd43wSvvnqM8yuvgwVj",
  "key16": "oJKDBeJxTrNinBW1Aec1HfdRUk3C7xBkRhZdtwYVfTNib98RWfFEXBCc5ib6cuNxDyjwi2NXTZ9KqEqAkHuH8ss",
  "key17": "4JLnxxu4na4cSm2mt24fxKrpPqwmHhEdSD3wx8Va73SuzKgZkHrxfoSPSP9Qi2qyHoLoh3jdztXhGizRmuAS2vCW",
  "key18": "3JJHW6QJf8HY1aGxCCXGvbgyTJaPGdnp1oNVZjfoe3PbDZnjU3cifxA48f7ukWJnhfU6d4e5jE49ATCe3MnoA3FW",
  "key19": "3UidsqkUsnsWw7cEbKaxB5QfnpLgEr1bX7J9isU8R6F5oMbMF3ixqgTkbGHo3KhXhVrZnmQ3BQfHGzNWvJ3zZkua",
  "key20": "5PabGRDpgjS2sxX8MdxF1sSKXAbKYCJEobbKc7gXEnaoXmEQcnYYHKu3FP4MwJoo6Jr8KHkPLDRU3Q4iFRMWD3wy",
  "key21": "2uYAcBXLpakiH8ogU7HQT1PBmnCaZHBkinxcrCxkHyDmkKd9PmB49MdX7EvMmT5ZxUdwse7BsXLKbi35vwiQQR6s",
  "key22": "5mf2mPuQsfwJQUoLNXCwdvTogEcc4KMhxi9Eb5cwqfEWai6jmEnY6wi4D2iUubLoP3NYidspYVaKUaYKBCggHDcW",
  "key23": "5F5rW6WFYGhd1LBLkdxwDazxqHYy6gcKRhwRyduuDiTnuTxPXwuHCgUq6nbEEonvhhQiCWroUZjBb2mwvKpkm1wG",
  "key24": "3rAerP3V8xwzsg3RbeKxQbpaAAU8nzBYD7F9P1BDHRd4XwMruT9W3QzpEEDUjeNkhvhjYNqyRm9CXwGCbGgkfVVV"
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
