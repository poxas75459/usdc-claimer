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
    "2wXv9qwFcCvxpaHG82uvXdxBn4BpwxyHFbos8oufwcPdAnXviFCwR62Umb4mFu1yYDoTN1dq152Xo9UTBAjUfGrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2W61sXd9VH3UCT7tvkoLcjHgo3YTUHzCiGMUTBBFoA4YHM74FFo4QCDxK6iW4FpPY1AHSvineH5zDgonPqA4N5",
  "key1": "4gqETQ5oUzp3cDkFZUUKWxLEueGNhx8W7LPZzisMfg64xT9RNb6qfCXvT47A9YPCfSrfriV4wvMHfvnPgvuadXmh",
  "key2": "GBoKAfWyZcA92QTnM14x2Y6RKL6HePqYwKZarfN8rDbs9QXeTmr4UcNFrSfojwkompiRBLKcQBrfnJfjZWUY9Ui",
  "key3": "35UHudNTa2kqBQ4W6nkBGS7zRCqDFVFJ5tTPKbV9qbyPdtqePVk5ASqmJvAuB5FVZYnyRWpMnr4PMKoDh2MvmXwi",
  "key4": "2HYAT79xeaZBP78sCemcrqJGmAXpzshy4ZQHEmUWP3L6VyhyoCpk374beYH7BMKnZdY1Ya5EWzqydiP8kot75f3g",
  "key5": "5NKBa7Lrz7ExQQ276FT6wzAQeMQYNyTFHM8jgVyagpv86Xcq5gC7jj4giKdDSGrFXoEuZFhZHp1mRm3rsU2EqQuS",
  "key6": "oxsNxSxfenN3b64WvfFZWrTc9t6fHoiyTYwTN4MtN9ucjNf88gxUappfmyg6hwp98dsNDLU9QzFxuFGGMzdrZpM",
  "key7": "4nnGmezy63gsFPkRB5GNFeGPjquojNpMBGoJJ3urNT2NvzWzfbEU9dEmzk3gD5s3D6XVnGnpjgnA9yy5qJwUwpYo",
  "key8": "43PygrzM2uKuVaHMYwUe69a29bZHyMjD7zabcgJDv1i6qAvh2ymi1pusTijuRqf23Z57CsSofdYxZa43GjDZG5ob",
  "key9": "3WM2Gatyxmov9nuqEQQWh2bXJHJ7emtxJTAMjyxYU4af2h2sHJzb2N5zwcDeJGDV9ZkCT4tZwoqshm2T9GU6Zt6h",
  "key10": "39ktb8M7jAV31ehY4qbiodvjUznjEYEfNbvQJp79UCZJzGSWbQAE3v5Xd1rhYKzKnUEQLwALVzMaBsnEGSRofM7H",
  "key11": "5wJmNJtsf23h9up6GcUDrJurtxfpebX5WPN4ky3XG1AYMUvGJ2EaRkdPEisXJSwQi6VDsyFTvTHV7fqACFLdoGvy",
  "key12": "53HUM2K2ywiLRTbwLafKw6W8E4RCbbQWzHC69NJq7pSWWuWvUU9k3NbYPNEjyT6CWEgKyU3mpw4x8WF1JQGYhUMx",
  "key13": "2qw6LqYwLCAaTEjkoC2veeCexTPWRzKtyAiBMJhsBb6Nv82pJbHk2Lv371bJUbiwbrB5sM6JjNUed8Tfa7MHiMBy",
  "key14": "zntn6kvHwLnaJQqbAKtPZYcAp3LdLhso8a2so2Nsr3VHhQ3QtcdCBwBPNN2MBiKv75L2xahvWpZyiAjwb94UUxs",
  "key15": "3G1SABCQW2E4qU5JSPHqtgFujJt9tpwJe4gEavYww1s2TiSSiacXgLC7xgwxSZDbDzFeuCzENK43f3DiSUbDkwJr",
  "key16": "2gdGjDJ8NprmdXjj4e3a6QbwGyftbvv5zh7hYhx3md2Eof5TPuWeyEkZB3Fi9FTADRbPCfwFFZ14ujbXfPjrgeaT",
  "key17": "ju4ZQLkqtvuas5A7DPGLz4MsTrGNjjmYdzEaQEGssW5Loiny6zmBUfJJ2vDF5cAmKkqWe7aydKawv6MMDLL97uS",
  "key18": "3r5FdZwYR8w8RLkYoYhDJq4GqgNLbY49yBESivEZL7nGqcKRPhn9mHJ6cRA8LjatNeWjY3d1wFjVVBkS5W7wLgYZ",
  "key19": "2rxbLpjHvknfj1DxhoXBdH6BT7vxQFgQg9reTkLehXVcJj5LWdRNny9RxmZFBq3e1geyu38Pi9tPJeV6e7EfusoP",
  "key20": "2GeNANf1jn2WjHnvtCmR6Q8Ptc4q8or3j5JyVVf6BNCDepS2Y4YZww8SHmZv6aBwtJDgVEv5AqeepntJwux2znD5",
  "key21": "2Ava7TLtmtioYuPCKztzsPM8GrRtw9wjpvUWMKcBJrz2EijeHvhSRUeAfpgtjD1JZ7wtZwgwFRS5GYKoVyQxJh9r",
  "key22": "ZhceQwVfa3ohCer2d88kHrrhWs8HPZhy5LiNwj5FdQhjWQQmcwJJtth9iR2g91WJvUebj1rUAB8rVL3fu9sNJWQ",
  "key23": "3fyXCTbyXUGwSq7icAF7LzhEUjNy29pU8AxvCt9gyjZiHMxJ63tPHuBVjNXjTz4S9jxeezoaeZo23QLLEthay3ao",
  "key24": "Me2qRGsD8JGThsc5Xse7XJ56MvJjf2Hq8eRW3YreEr9uJPN2wNQthNht6xbmGpcUBcxNX12JTmfc2CaPkZK41Nx",
  "key25": "5F4ueBwjs15gPVPa7nF4wNmrRkYnbsM9GF47oNyomCjHAEphXtKXTrK4xVQXacWJDsrFAKq5Tudrw5RS2tUGmt1W",
  "key26": "55AkBnjNXV7uAkC8kmxZLrDDkyzDw7irWJ5GHhAH66d6U1XeMA8RiKPiXHiwhigVxhWqbcFMZ3QEX7yEyaXv9KY1",
  "key27": "3A16BdMDrTSNPrHzScHuKn5w14kfbNVcFR2C8H1ej7PJPUhshRVadfiDTwu3xbXKoKyRCFYF1c6Z55G1JUDUvCuH",
  "key28": "FHkitCAQkeLxs2vXXUSF2vwMe6oqUkc4omtdB6XGPiu1LW5rFnSwzWf3Lm8NEKk1VRegRNDvSjtdx15HqBM5Lec",
  "key29": "EzUyiTt7FnNKLRTa7X428znK9LfzGETAbk1yVVFpZYiL3tpgK9cJz4CJ7PifyRqLZFWyJsX2tHkzPA9x7S9Moym",
  "key30": "253WVSxEghw9cixhtmsn6xriPZwJgvcVnC9f6c8W54MHW8wJErMixoWh4FgBGeDMd5Yhc4cRQpZQsUbpM55jHUxc",
  "key31": "5DZ7ztCh42NrpuRVoKqtRXGswPH2DkG7ywnnmhcghdgPrtbxcrwyNuNewCFewpQT8GSCX2UAazXKmDzWPLf1xPQe"
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
