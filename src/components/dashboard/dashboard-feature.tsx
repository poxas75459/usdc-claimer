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
    "2MZYpMnr7jpZhVVsLGu5ciQUURQwGXrtncz3YuutAcJ8FYvRftDoSwYx7rZiTxXtJxfLzCsnTRgeVK3xHm2iqFMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1r2CamuVwuVBKuzh1LzfgQdeWmbGLFiRqKgGfNmHCJ8wtP3PApC6FNF4j9yKomCGFPdKwfmwSQ77Q4WiEEMsFj",
  "key1": "4MVxUmq1sswqttJResGJo2XweD78y3LLNHAirXBewiE4aVJUoWHF1xuud9j7rvSwnBQu7caCTJf3cMsMxGNgqERX",
  "key2": "2auLeAKKdGgg7YzKMJ1pm7HvRLhVFPB1jnnKKUZYuA1UBLSWTYYAy55HMW5Mkg65VY4V1imqfqfni4HoKMiiqpoy",
  "key3": "23s4wDMmEXpRpSosQxfrGNB6kRWU4EvfgMzgniHoNiUhjGYu4Fujgz62NyUebYe7z1kZjNrd6Vv8LJKVaputSmKd",
  "key4": "5dPQyYprQbx1iKCnLyYuhUMEEVJFhP1Z5qU8239CLcgTypNHJY6pT5Fdhho2J2i9fqfHPqfD5g6NzfekPZ4jBy3s",
  "key5": "2CjqeBmt8mQSucDbWg1ZqiHmTrbd86njebok2AhPF5qvqe59ZYoD6fxhD4WsjmUk1dwRz2JcwR5kPeTtfanRjQu",
  "key6": "44JzkdhzqWyknzpdaoZTJDyJaYHpLAbKJ1xdKR9i2sivCoLz86Uih2KxWGaZUSyyxRRGw7LJiky6Y6GwM7oCiFSH",
  "key7": "2P2gRy3hVHwU7vPPZW6upDxThn2GerSJuBsg6icMXeX4edheLnQYy8GuaPxs1cLFQ4e8LMn3uujokZ1wwC7jpeZR",
  "key8": "5JBeJgkqFTMWLycjjvrcPJiEKZxmXM8s7jkPkSSWmMR7MNYzNWLU3LpbgtSp68GXTWe8pNRAJhFEKMS6FSNnKuUr",
  "key9": "MiX4ZQHSF8FQKM6fhh7Q2sQh8BaWhYVDvurfnEYSQVjQCQRwPnjB3zcEtd8M3XEb5VPjczFPBd3v7AGhF4gKdrL",
  "key10": "5PBh9UWLqnLdLTST2sDVrUvsHR5SGNy2BJHDUbw1K4iVcirZSJr1NxXP9z1H9ocNiP8PcNixv1ZvMMyptBiW8yEK",
  "key11": "Nyo7w2YSfBwf5S42h9xiri4cABiwbUbR7AsuQcVCZYPbM1reertTCs6ioP5HKRZLokLYxui7QrNea5XZ6sBJ761",
  "key12": "32FpWR8UqqF8iUwXJtGSTCkzAgZnMu1xFUzpjYHZLZGYAZWCRKB5N77daXuburY25FoQijQ7NgVyjVAtCS4jZFnv",
  "key13": "7yrvSYSvXLwE6sqKBLZzQgA3g4AHcysxPjENibHbbffH5HYMV9eqTQTo6hvLxNceBUVEABayQsXieW7dH3fquaT",
  "key14": "5ZSfwN4qq8bWKMLBZRzoJZmUtuNPe5kCpyduMY2mgBybn3WmUWwrSFF4jsCko29xQp7E8Jj3hatquMfaTchZVgq6",
  "key15": "3iV3f9edoYXk48Ld4dHCBAAeFxS4rYhJLeJbcBvo6UncCyyaW7WJaAutE7kZuLYtzyFT7fzcqf16jLQNroGCKA38",
  "key16": "Py7YKZqUm1a6YF4kCPPWLVq6mowber5gfoZnSUuNeXFEvhGz7GNQ9j9stsHAa4YhhNfpz1u8WLjFCQK4hppE9xV",
  "key17": "4qUoAruWsk56Sohrvs1otfbqUdQqSqNFmnA5q3vBEPriVJp4yXvcAEyxvzTfhRJQVnKpFHiPYu9zgehUNL3K2JC8",
  "key18": "5rpCfAcYsfYNY8PdThBpdrWXSyNaWsRrYqq8keQ9BGQKKxqV71xS7VAqJCczvzDbx78iTwjmMRcRzULvbLF81mFJ",
  "key19": "3KdstqLdbCEGF3ZC3dzAuUtv6fXnnevn2ugKSucwrcUdTvCy94y5DdFUe83mayzptNLYv5q6JYvJYrzbrriSM5Xz",
  "key20": "5P2xGaJpnjqhuyDqaWyByw8MaStLaW4CFD8KbKyEj8aRbMnzUEjkv969j9EnToeiLnrowz9tKPGaK18L2zPahEpC",
  "key21": "n3GMupagk98gueQ66fNKoVnHrTxtpxiBcg6g3RE5QvuHYx6wL14qviFsSGKrLVWEEErHp5NEz4L7KCeDtg314rZ",
  "key22": "4EKHw3cnivoPxwJScwJouJxfU48jmwqi83ac5U6NdHF75hqJ8j4xuWuGccDmBQT8WNnDDaKyL2Gg1UVTnGDaTPip",
  "key23": "5FYyxRds3pJCr4j248YjHhSqW7saJtC1byk9JBzPZR8YZ4YjL6bnbDXaTNXgtJ8xMnmPq67f6mGe37bXpSMKXNCm",
  "key24": "2LALX6B3mQ69qGFFwC6pfwMMEdGxcEYerXiBhyq2RVbJjaz7QzijHLvqm1BKuJiwRVCt25Wm92XkXg5WTBonp1YY",
  "key25": "2S4s2sbC2Yt3ADcjgBRLZ2ATVLi9U5y1dxF7GdN873BV7jfweSh7W4SNchCJhgmr3bvYnq4tCx7htggeFHYshKio"
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
