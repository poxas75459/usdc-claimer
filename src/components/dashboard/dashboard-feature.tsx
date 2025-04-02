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
    "36qdbczkCyxaFjBuosEZ1aWPB5LbySzPG1ZQFTUa7zfEpWgLUzZ1yZuNDv3fhXa3BZyCx1JHEsZvvxYDqbAtub1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dQfsFhZkUYzsUn46wx7M8THnQqgzijHkE88y8C8wo1aUDSNgsLdAQQhrSkoBT181T2V7jodZWUubE1DeBmasZju",
  "key1": "ZW7UQbWS2x8ezyofrRnQxbKSRBn922B6z88iB2UyMaD57p3XT2kKt4hcMTGme7p7Hrhg9FXxgFPyqm8ExTY8Gn6",
  "key2": "3YgzFTC6e2HSRKoLsoPTFpwSes3F71Dhvxf9iDMGCn2tGvDfSuGvgKudPatSWBSSHwya4QsYezCb8vJmQFAaCZqV",
  "key3": "HbAktaMBV5JSkSSthVUcF3c1wvv62e1t9NA8rXERmgNkJJyomqhEXRQCnkcSXtWfxTAJSc8cg4oPgCP2cRso6ks",
  "key4": "3uKMut6Em2qKMkv7VfU4KtU5eB9zwyKZKuDG5kevb4j4LDHNLvqE7sD2oynJrV41txbebrQ5NW4ivP21S2CRWZY4",
  "key5": "5NB4d54N7RmJtA8NcAvbKHC3gm4gbsyy3wxi1uoLhzKFUfsjvvNBWwYr5bJX7QgP5koRcxFRMmxYFBz6mLpoB7ox",
  "key6": "3N1CHQUbxEGv7hKWZv1j8FABRRUHDtRJCQhADuWEZzDs2KkzwpGxrF8e9nR28gRURXCRHSfUuriZxeizGg7K2k9Z",
  "key7": "4hgsA3gAMQPNRMM1kgCZYAQgbUtY5GQR2q8Mp9KTDon3vzsjDhn8wd5ASXveL6x3xUsN57oH9KZUARZ9DsTWdmvP",
  "key8": "9CibBYqfUHw6VMP5fk9WRxJ6xo2BZ9Gh7PKbjixBZbfXJzw4UCR8Wdk7YdKYsBQ8DjVm8B3T4eTA8D39EdVPo8x",
  "key9": "96e9rJiymbHgethcycUFNp8BPDZ2xx8qSRvymJy1sU2rwiiovT8jsGzzSpynq1CrL2LxGvbqo6nkt3DC1CHUqnu",
  "key10": "44EWwdyhH9RTF33AqA5QGQAmyg3VRckjP2GcQ41EW1ujG4xFJfQRvBfXt5CVTXV175mMwGcw5uy3svCwLPWErpkm",
  "key11": "3Qk5RtsQDVwp7g7ZrwYyBsmaPqAzU4vCcVgCTafW9ZbFTKyRQRCp8Lq1DTjgEKavN9UUGgiwJ69N1g1jhEchfzjh",
  "key12": "4nRAyhCWJ8R8hFyAu17fzwLQ4Ln71eRYLz9QztdScbDvcNruyuhiZ2qQM1UEU8NsSkoZNyMQ9Tv5oQABKqSg2N1U",
  "key13": "5QH2R4D3tAjHnQqZechjSZeZxMKcNDXiPuAmdxWqAtTYKuCXSNLPR3x8KR2WSEXYG6ch4Za7VBRo8k6DDJFnm5E2",
  "key14": "4nzy4n4hBtzZrCAkh4fJxRsRskqCigkZNBMuVWM4KSRNDTvcxdCbuAC9JkvAPDpJRhoEV9smbTL28AXbqqbAnTpv",
  "key15": "3MZnGdKtgdYqcryTChvgTNsbPZMtwZmhcLaNB6u6VrtxYxHbVA52oTEik9K54LTDyhCLMQsdZod7KNye81nZZEEy",
  "key16": "NMsCC432dq27oDsGZbZMNaV7iMMUqFCjYg4pzJHRhQgHa4RBhUFje7jih2GhwvwmYHiUmPZjXzessG2CQfvjYEa",
  "key17": "5tNu9tkM3DBKopzwcyqJtmRk3hLaiQm9czasPrmoE7Go4pog6k7AHh76cEcvuLSE9sXyt6bz7GDCjGzBRgbm93Xh",
  "key18": "3FXoeBZCyFCKExRrPc2nP7jVJZG32k12bPbjZoMNTk5uuU2PTxs3D3urvY4HSZkKVnT94taJ5HYaBB1ukg5BGUxX",
  "key19": "3tW8JLUKRTRvsw1C3U8CiHwQ8s2s4DxRQyDegyuevHhoMLsTFE2ToVgUJ1AFZ3uFiKvjMdtjN8F8K5ynWKaCBrcs",
  "key20": "3G2J5VPB63db7JocCapSf49yzWJgRBNxoGsejQAe4bcCaeUUHAgEEULfYC65MAsWGSMc6pisAq6FmTcxvYGjv1zS",
  "key21": "2ehNqz7U5SAcWDdEhrjxSMFUbuxoZmPzWcbzrxSxPtbaa4GHEyG8KZ6KgFLVvC8V8TwFdhkK6iMqjhFgYRt4Tf4U",
  "key22": "cwk4zwkZULXKJa5iPiFmvSmdHKQfb7KKk89B9gAd1Pm6FgAJenD4G3Cy7gpQ6z9E8mxK43g7zwurei7N3fkDVFV",
  "key23": "2aQVxQ3BCnRWj84rBd6dfm1SxLGBvDkUrV7jo3PsigMNFUH2eAGSZgdTtzykJs8JeCtQg4Do1kFb8x92UN8YxjYK",
  "key24": "tYjzsdjNMxgntsgRzug7LctaS1U3hTJtxD1HPTR3p8e2d5MaXosF32uDCUpYtGdjZYCg6hyfVPmjP4tKhAHvvZh",
  "key25": "4q3r8WASxiKiSVomwgpzgzpMdLYyLrjtBR9SyPfWFicm5p4Ky7K8EjddQYD4uNiNoYvEpDLDJCRJHs5BD4eDmVYQ",
  "key26": "btpyYjqLVs2KmRksTGMpkWbtn3UEjdjgxNm8ESk7ngeCitcXWeiuZtgMEMPwfgC1MDLoHqrpjb6eQYRiTi3N2ZP",
  "key27": "22VcwuJLySVzPuMrUbYhoksFCjtvJUx7DwMfmC5Pyi1cW9UUJSsKKo7b8ibx83Le4YjSoqB21sbjg3nNuToNRTSS",
  "key28": "2Zdvcqq8sy8kJgMSsqibrQXG1yPqJ1jncCqxvUxsquDxLKV2LGt5it7L8uoYi63RAQ4AoLLvVt8UXknwmJmd1vVX",
  "key29": "ApmBhzvwP7r9AgeinqvVwJWgViLEsaY56eFzmjqdLjGt4kkahB434PJ2AUX7f9MHaAQ1ixevQ2rvVmgWt5K7KJK"
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
