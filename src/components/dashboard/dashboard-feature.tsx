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
    "2vkc28Yy3gH7eDhJB9j9gmBgejaFSJ6h9Nk1WFHQUCE5oE8fVAaA1ygcypqBiPoWrBEWZTbgugApbgxeGFJSWKxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFP4tg3WD9TigwpFm7FtAfCQ3nwFWssh42SVq5ZUGzTG97YcDbgE8yN47G56EQJH1fPw3P9pyK3pwLwJoDKoUiX",
  "key1": "38dorJXK7mMDfaUFZJzcDYZR263pUiDuTpHiXMUVAEaHth2YsScwS1TMbqYW4bZW4bjtaSoVgPFzYQGY7WmPPsWe",
  "key2": "3HWHaNgQfNXezTHrQHU5q3NrWFVZsMBNuBseabphQ1oHNk2Ze82hs4dCYxbDDhtSYdkKZagwzcAUjdTZZC5ujw4G",
  "key3": "odUKMjhJoSnN7WCQbNLytPNbTfZcYn8h1Zu9UuHqv78zXE6zpr4gFErnHzT5dFLkGSW9MkFqKSSkR9cy7gh2RVG",
  "key4": "5jHAiFTmhzUDLBo7TqwwHTDjYRUanuwMx1j1p7PWpkTjcDhfN66dYpqrtiqMh8bVSJ1Lw44SC9zzkXkn4u4ifbja",
  "key5": "mV6Uq4LJAEQQNhAzqHTGSouLAZW9KcAUsN4KHCdDvjAYD81vzFjEWknYuTaPAKiCdnZhaaFD2YQ1ngcdDYXAz2i",
  "key6": "3AKPh9w92NZWf2DrtJbxkQJS6dhxTKFGPcq6aBzLkR48nCdJbToAu3hobY2L6hGFfQnasukD2QtgZZyTH1abNFu1",
  "key7": "2FPTqaR65wjPqNAUmEpnkNRwHssYBXkq8dLYHEMCufRLLS7dgohbwKvfG6gC5WeVhkvbtPMCC9T1rASdrssFxRVe",
  "key8": "56xBueuKmmwk6CPTnmSB81cVtLPaQ2qe2g9QsjEP7exYLemSfhQZfGQ8AMw6fAjA9VKeVs1s9txQmQkygNDB8SUp",
  "key9": "4PSf6j2ztJ5MBgodgR3qx255F7marLtBf3HNHFW4Dx24YHJoU1NteJyecjaDrHZWC5tHntcrGnyQnG2BE2JaD6GK",
  "key10": "fvwzNh2NzsvfhMxNCtUic7E4JGKxkkCjSQoex7Eo9mxZgE1fJiteFWPEUREk6REpYHbA1BUQAUarUrS4qB8xFEb",
  "key11": "3JHSH6cpyiaK9kxudFXSd3QtxCoYuiXmDrLmaxz35zJETHZFBLgLEbzawNVU4VLsirrDuWtsh7Hssqn2FxCAGpEt",
  "key12": "3rySPDAb6iipXCEZtQCCnBXGdBr6CkGWjosmsbgyu8UyokhLL1UwjwMDqNJ3RxmvnCN5xBQobZRzZEM6TgGzkZu8",
  "key13": "3Nxy4Z8Py8YAvgSrbmxJvwVhLz9Dwt4gA6ewcj6xqHJmR63KKnhhPZVcLbMm13kdK1UE71aEEjF12wpMwWzbgXR8",
  "key14": "i72CiAR8SVAxn1jJ1bXxYfSNaEbMgPKToiJ1nzLmoxyNd9dwZDMK8reAHvYNYTMDV6RD3Z49nvf5UBt1VzKohKs",
  "key15": "pV7zAZUDAMQMm39rh5E3sNZYxeRQDzHEnABEi3DyqoJbDaLEcoLMZSj6PgawovEzXZr56JRVihxgBPoeA4Ribuc",
  "key16": "2rmRsB7nux2w7617SrUbxq4btfMThZXtcmrkKqARasoFW5K6L3rA7wanvijogDXRfyRj8dtZqhSYjLcA97agaJc2",
  "key17": "2zK4A8xvxQwwDm8u185KEFhEJ59bFwUSNgEdi4JfGvKcwLntaos7jZCxZCohAStrW4tpVJvRsaXDgxGZUQgUb7d1",
  "key18": "3apNddytbNGAQZx7GWd72xJEF6hAkTLH2se5LNxkDHp6Trqcdsc9CFFNVLYVGZf7bzBDLew1hhEmf5DeD9PNsUt9",
  "key19": "5mzWJ4d6ph1QWjF9v2pzatvFYw4NZX4RaBnbMP1QmhCtN5A87wTahZok37fFgwercYtB1PCCU6Z8P2p1DhndkR7s",
  "key20": "3vQiENEjt3YT2gyopL8Trn6iPm1CofGkamAcPqncxzBbz5Hi9bP6jNLdc35YHXdyQwYVv9UKcUsKYZwcf2NLuR8V",
  "key21": "3y79WR3jmwzrS3BuzPzoMrN3SGdhN76qbAqM965QTnw84crNahJDSsvzQYydQJyvvud2HAk6XZhM9hsGMUpNSPJU",
  "key22": "511NRvRHKK66VqFSUKrBfEELpkt27HUUf45VxMhPKqyLbuukwwuuLZNpPdGQ7NvyJ17o2q9vWgih9EYLN43kVd5B",
  "key23": "mBhSj6bxAVsbxDUKieCnxYTr7DjSXtE5Q5ppATGjkNRmyMyPVxWpSTfmXNTNgRRr7dokjicwR3ybTWg1LqzQAyD",
  "key24": "4RLY3wgm71Mf2u7PZdKL2woyjksBkruvDeNV9gqmdbcWwxYrsgSe4UqB5KgAQtag4yykRL9s1ijumUD9tqmc3Jzk"
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
