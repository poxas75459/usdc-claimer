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
    "4SHGbrXxLvMKWeQXtv1Z32yiovrGh3Fyt2oejsdM4NH9FBGRTBiadNJfnE1zVZYJU63EHS5p2WHNsD8YHpkyL6DF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKXYFCieyiPq6wyYuF8yu1dkUkDqHxWZRY1Wtdx69brckQ69L8iuR3TAtivBPZc1fiaCorXete6q9u9unrahuWH",
  "key1": "4PAnJwzxsKwYoH1GL3HVPtfYCaBqKMJ9UDS9Qe7esDc46zZeTyRbDGHodAFbZ39u1YnUqvXFh83sk3vHTb3c4zKw",
  "key2": "22zmb4zzk9SP4LKaTSf4HpiRJaqyyGRfrTsoJSgTtSjVttSZPN58pWwdouAdsSRGDP8Nj3qZ49kuWfVYvaLvLiUJ",
  "key3": "5oAEThh12ZrU9F71Sc4WJa142J66zarFUPLguycsemcVa1ts9hrTgGdBd4WM9CBjdPNfk1CbVMHHs6WU2KAYzVJ8",
  "key4": "67nRS1JuCkq9FAz7T6cPM2Am7UafRuuoTSXG9KhP7NdNznmntLWs6NMiTQMhhMV7ttUnjfmEnUKH6zzFTTA7fuAM",
  "key5": "4Wqx5pL1psN6XbaK17muthG4BvzQ2q4xVpuYNJFvVN7xYBJfeV4scwEMtpfyYwgK4jT49obJYSbKU8F8gEosH9A6",
  "key6": "34rcdCtgkA9wkLcnnnrPNHKtXeUcFJosixkwUo59DNijiUdD4SkpTviemEGfhggKXadrgy8Mdeoi1xG28Lt8EZ2W",
  "key7": "2g4RBG2AmyjHkRAiyRxSdzypNJF5tfo6RDbTQLGY7ML2czaXBBQtMM18ZApXwTsGNYvz75vZpwQG4Mmg4SvAJgzw",
  "key8": "2tFyfpCy1NAzytEAGyUdR7ZrqowjKgptJqF9kVYhzC2gCkBDKJ5XJBfvdfR9yThwo6DQ5YLiUY5JgUjkbJ2nSJnF",
  "key9": "2zWQzDMbjY8YhgtUfdMS3yNb8hmGu1DzYnJNihygecf9PQS8RkjyMo9PFC7cgN6k5NNFz8bmHVUbvKYPFiBNt1kJ",
  "key10": "48oS3MFiUZ8YdHEzswTHsxMMypvb77at8ZDJL3RC8Dwez5KqTMzLzAQ8KeVLSw6DU1VbsoLoU2xiAbvUuGAQUoKc",
  "key11": "3azoGJh7j5K5Pr4BKUfC2xjTG3PT223UraunQgvrr9xjcqdxmqbc1YzqzYGUTcH3w4JTiBbqPvThadwSmj8KLa7S",
  "key12": "2gd4eEZVXJLQ9SfnVigcE5g1L3szE3FMy2FQEvBRRKUPt2LHxauZWeNJPWK6AErn1X8GyQ2q5emhGUPUuAhnR5E1",
  "key13": "3Kf7Y2fT28QCUwngAgPRBM4bybetspjBfu9LW19rV5ABfCMJHqgzNKBU34eXJZoy9PHBHqoT5qr32Mt7hYuaR3ZG",
  "key14": "32yJwxzT4sWtC5BahKmhVDZzKBjJ4JNsRgfdxuAAaYpHpSTgS1MMazpgmECr5b3tgT44Hz5EmAf7z77KkmvsAbU7",
  "key15": "3PsUCa95VKQ2mZQcNQa1jdxjM9aPwkKhdKiTX18HN1z82TSbBUBE2ovkfAHvd2uMNMWoZFkxhhvF2T3Ud2F8cHh7",
  "key16": "DDUnfy6NXGxwnBekYAWudVXYV2BCrtRQgRKgUtPSKLUfHrNSMoqSdyhb6FMLcJGLyaue5e9zFR1FqFs3c8sJ7YD",
  "key17": "2DB7NkzkE3diQ3w46muX1WdKF2z4HbPphC7KG3qUpPwMSgfhi5d7uEMzCJzi5fXqU7BqzUcrb2snbXTbZxiyxrFe",
  "key18": "4xdLbB9uExcBLPdH6vqc389z77N37t5kLEub2RMcmp8Byom1NyzB9Ta7o4HQxNjwpQN546HHBs2w7j7MaBJmumvw",
  "key19": "4QAQ2B7bE2faH3Gnczq5ZkaHBawMjAQgypXqDtsSGfT3MiG4PX6bfUPAHb9ZRW4ZaBV88Djf7ePHmfCETKzsRtPV",
  "key20": "63smjhCKRH8VkKr1F7vTpesx2grChTbV5sj8yAuhN8XuafqDXagTmZFehbxiwdHDiPcojNj1ZBKdz6GNfnGjVw4r",
  "key21": "2hC96wyu8Tsh5uBe19jNaVaVD4kWPWVAk92W2fSqGhGFM9gZVE291EPVQMDX5npay7Tn1QkvT1r2NKxRWzDN4w2p",
  "key22": "5NzMxSqRUE2heA7sP7owPxcSjqJAKXrzsACPDqBTNMM9doLQLaZqErY2AthkF3RMEofU3Y71QA6MvJoQYrGqK9yn",
  "key23": "2f9rw9L8oL3X5EV5BVpJFLFLzVByyTd4mqXa6rFiqiAjP8JVEBWSvk68TCzo7PNvzY9dFCBykq2ifBEhE3jxR6nw",
  "key24": "3m3x5BXSWGzT27n5dniMenGdwHCe4dthrjAfx9tU826H3Zn12NFpduEHH1xZ3Emcjnd7UMneLSpsU1oZypCYqLBG",
  "key25": "3RcGiVCGzh8VnfqDaZJ4iw7fVcrvFohk6bwHC41P1QNGWjNMJMkExnWjYoNdQRyqjULt8zyFVNgkL16CZC7MFxhL",
  "key26": "5YssMuQtvDvcTAyHasWK9rAQD7riZVmsLwyd9FViFK4sG113EgNVrPD7KdgrRBWp5sNbdH8ieonmV5V7UExgpikL",
  "key27": "3o6yYJiTx5QBDnQ782bqvTjXMXvyB7LcP6mvquuQFMPFHYumUL62WanruQ4pwdEbNNeLKLLrunuV6kiRS1zHKePb",
  "key28": "5MPS53KfaoyvM8UvFEZfrixwxgaiUagMVzFzoXyrSA8p7z5ZKxnL8mffciHtZsg7KbodBm9KFNwfrMdgamcH5xUT",
  "key29": "41pvuFAvNesFZTPXh8M1r6GeLrwh7LKFUH683fKokiWuN5AF88AeCtkTE8bcVDVcgHez3DqqRMyF7PzxRjpqZy5J"
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
