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
    "5xLnUNFHWKryeJYHbDZgRo7r6U4da5rCkagKDwoEQdgYGbZq4a7N675Q7bcSu9ZNEBXH6kLftgP9TorkELaXBGy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677928n5Zo5jhST3CznoftLNHJhdAe5XEwKwjyiAKxqvANY3TzkjYgdoGHuj6WAsVoHWRZNMu7i38n9THWaDoMpA",
  "key1": "3nvgh7RptUwAtBTkm7ijDZgywfxbwybDW5NdNkB2iTK4pZmX1G4RiXoZ4zftsHaTtbjAtDQsTu3qvYaCFk37rzZC",
  "key2": "2XwW1Qmg3qQeiZkgTX4KaWhHvjFuJMC9QKLL3i5x3aHG6iXiCiFg4LBwzEmBz8rFsXFyJSAi9SwiNzajWUAzsT1z",
  "key3": "55PDqj4yuHVPs9yWS9uqB1uPG1BUAZ2XEYCcwsQLs7j4Gqm1SoRRN1GbaGmqxXHxreEeUeUEn4x3LxRJXALvFbTd",
  "key4": "4Na8Zim2pWj1tFG44MgkxYWWdfh48PhEyf38W9eiMNpX9UNwJEgfaduiviPGHaeLvDa5cwzjCF9E9mm8cNBv8aqa",
  "key5": "3LMMKKW9KLQTBUXAKWxNhk3rR44qz8gunm2unW3sLSQGPzt6ySMFGbugFbKwVgRM4H5YzzddifymWAZW9jytWGmh",
  "key6": "ti8cV2Nqe14uEcdBtUz4avtEZUL8jFrY6ZQMjnsC2QV7JqbM8frVoKoo8BN3FFVA4cjKvgCE8CXpzTszRLPVjUz",
  "key7": "5Y5XFWjHF7niMJupLPbnvueyygPBVyHJmWftbphiRsyrEmzhKueJvCudmAjZaNsh48dicLSu37VyErLUPPauGN7R",
  "key8": "65zfiqQYWLmfiRgLR7isgfbxrb1GnG7Ptz6TL6MWxm2crX1hZZmxjdXD9aiwNNcHiJJXi8w5tEp8gN3XuTdTrrHt",
  "key9": "3xcXJVyKUvH9WRfjXUM6AuTXFwdctdepb47qqDYBwEeciGJKBDWajKW5ibShPkDEBP9WUE2azT7Ts6CdEfm1kdQF",
  "key10": "2ciuEEAo5TncBzo6Knja3kK7MjTEtrXqZ3e17wXWy93vX2PZQLAZDFPvggBBKCz8bLjDKEAuVamFungTgkSG56W7",
  "key11": "3WdoLgcev5BLcr7NjthTbtHgoi93YMjkfVv8MuLEPawwUTi5Ec76CdMyTDBrz6biZz2w4JSyuZW6VJGq5zW8PcJN",
  "key12": "5kY8VsqwqfYeqYooX6ne9UAWw2kYdbPcZaZQWVGutB1h5duUBDTwRsvMg4jJU8BTnhSA9NwAJxSiRnqkPK9N2Usj",
  "key13": "2q7Yerz2CmZF1Dvb4P8grjgNvJ27UTxiyr8LhmbB75PzWuYVTJs1DTouf367PJJ7JP78UM3DPNrGHVRqKJ4UcukM",
  "key14": "yNF3jcDs2SpmcGTt6RaGVLqZkGbobWrAzUUtZvzS9AARsLsAFxWoxyzf15f5VsG7RJQkoyL9BrdvSGY6oVaupkA",
  "key15": "4M4w5djnmSxwu93Wfec72oQM425Ksb2P4rDNQpGGe5C1wfK8RsowpawgbafmXkhLdrmSauecWKXYwaxWNBtmLrWY",
  "key16": "5Q19ntqEyDqibPX3KtZitnxy1HtzpbWqH3DztPqwE6Uba9iwPrpCV7aR3FNHHe7zwtgjsZ2WCTL8CiQ5w7gRkvCS",
  "key17": "4v5DkrEGSkjLQ3sDMx5E2L8VaCNe5LVnZa4VY3isA24yYELrkkHPYbF66D4fcci1dqTF2KHgtNey4fLSEeCZ7nkF",
  "key18": "4M4ByAtAtpi3vpryBzfjfLyDcZDvpzMzgG2cvxycrQpf1v74F6YYqpLsSRpE31iV9tUgRxiUUVfPZnHhUfXtJP9f",
  "key19": "5P1seB52qPYwjbnmYWMvzTonwFvZhXJ6vAqiYkPkfeTer63ptmZHKMCr2k7AGegPceqLp4VGsHrg46sBYudj7EMG",
  "key20": "3sJy7UZnoA9aAmtuWTkg7NUwmkDHUQtMEW6DWRACbq8xsXwTM3j9rpPKJUMyNUhesVCtqxGmvrHmvpndpncYnh3Q",
  "key21": "4cZG7VXd89oSFoUBAX4R1LqfLjJQT4GT9cXt4M1YCt2sjkL5YenH4Y4t1b2WutJdM1YrB1HFSmqqN9mTNqEtpYNe",
  "key22": "5YamNfh68VgjzHCJTE7EtTVNWuc2S3LXpnDFghDun5E7GLkzCW3cd98ZAR8X7bvhHmZhGZmXbNc98GM1D3JypuzE",
  "key23": "4XzPtbjXbsWNEDCPpkoSMdmT2FvYg3zfrykzuVnaxjXpMC8H2cJXs7oKQ1ryZxVqRzchGeG4cmNAf2CLkSrRcghQ",
  "key24": "kSn4YsZCCMXBD5ZvjjFc4Ud1czjiRdRuRqjYiPVgi6QbNuGCs4FYcnJGt8P5pTqEFVmgSsrdctYdwBoinNv73Mu",
  "key25": "2R92TVPQoQQnXvWsZd6xv5KGZs6wZwrksfiuczPrnYUbyZiYCB6RoEFZkE9fakWU2DwZFVEkUmiwCb5mGAmjhmku",
  "key26": "NyYgZ7RrUBkRfVXg5qeovh2fsCRt1gLTvh3AsXaEYqx819W756LEHvdYMxX9Skrnrf1vvjjdF4hKQ4i1JsyCkTq"
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
