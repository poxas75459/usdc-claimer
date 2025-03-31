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
    "4LvzNjDixrdECL1hSqnH7nDHEyxqFcSgEHYyMvqMuThXATLDu51MSR6RVvkRxK4ABBaMvV7xgpgRmMTA9e7aqJU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDqUBJ51KRorQo4oULMgB7L7Z3UDNxXnCKp43dfX1cCej51TRggQDar3qkcAUowa8Keq2ksCffGpWtEQdUW4Zdb",
  "key1": "3AZqgCoRK7xtLFpgah9oCUtFf8p72Fc2r1rQtGG1SrtcpszsAEVaiL2Zqzyko6LnDLqbqB2ZHqgVtK1eP9RuCuQ3",
  "key2": "4Hj5cRbk7BqJjVmihE1UkJNEV63StuuwgLcEcpg1vMSPJGkMsjQ8sChBpxjKqT8eMXkJqvDh5n7TH8db9niXx8iB",
  "key3": "2dj2hhRfiqCHWSpHA5RBcZrBwUXtnnqyd2pnasp7xQntGUNzL4PcckK5YiXiCCTeTwoQztsiqsLCKrbuWAyUv2Ye",
  "key4": "5nqLWQhr6Q5cVfaENv3zuSkS6jvc7gHmgGiwpXdKDySi9thdKfQGgXHCu4k1YMDKoKAietx8EmXkBLagsMUQSfZy",
  "key5": "wyYAF46WGhJ3Gtx8P5sc56LXXYUQcAHZnRniKT4KsBfsXRxox1ge1Z95x98DGduD9q5baM25k62NJuM5NAQS5d3",
  "key6": "5G5nW6d7VGVjzCNBrggBGz6fd2WCBgVZKJKa2Mg2NEDaNy4N7dZuCio5afjfVv1qLDQBFQsVwMgZXsqbrFBV5ZTc",
  "key7": "sBsZ6tX19DpRmCsP4gUxDvosswAn23jJN467vR4sQEHG9GjBqjkgQWog4Ghp7YxxML9vYjvPPYNGvMXr7tjANEe",
  "key8": "4bSYbP1ADo5hiLZn7trmmfMfBLKDJFX3Q1U7GyKcEWjM5xAd9CsXeaxkdAv5dQwcSdA2Y4RYwckcdWv1irfoTmhV",
  "key9": "5HFNDfckXGsfuQ6f9yHbqok2TLa9CwB8N7dCPibhoAbj6NpYmC5PeqmpYt827pykptdyzE725FZS5y7wWrtYfLFk",
  "key10": "2zFAQYrKy6YdaBCyqjF1eMJRfXUtmeWYE8SN3Np28aBS56mZq1ockyurAAcm8LoigiCtYZ463YcLi1X9fGgNCirh",
  "key11": "4dx3ckkwEKXjBnTFTsSRRi2gVuafeXHxJ514BJMKJeR6JRpCFwEL4ieysGLSeEeU3nokxXoj9yewht9pvgYe1S9W",
  "key12": "35StBtL9AEmVyMNCKZqRMBYwZHiGBJ7YbDJ6Lx47EnxcMY8baa6Qf3dNRgSCU9TR1Exia9XZDNk18oYHWD37MLDY",
  "key13": "5UabpgFhZkK3xbH6ph72UsLT1hWfsFDwJi3kDm9bKtnWh5RWgFepDBAtMhqCnKCXPysjVsDMfjC1Uw4icEAfkMNE",
  "key14": "hj1gauAYWSRXkZEUvSVqYiJn4fWzPTzAehZyBmcDKSaT4xmSSNWZmHixuudM7xY7YXztuZgGkjr598oP2t214H5",
  "key15": "oH2hZamKhbiAQWrmYdErcMo2JDRc8f2duCuWwg8Qwe8LuyQmYP4SYHdFZNjrSwbJTUgLj8VQnaf7hviwW4imWeW",
  "key16": "4rJrw5ioetHvK8E9ixXSKfQVq3uXcBTPfkgPPuuCsTwPbNRyBBvucYtw3Zj2gu9eHwyzMcMGTKiACMZDi7dTGgaK",
  "key17": "5Xh3osTtbdtBPL3eRoFCqsrKo4poSXbRUBYRtqoU1kXXa6K6yRaCwDGxTHbsoPAxEgjHsG5aroBuL8yJKDd4scdJ",
  "key18": "57p1P616adWkGHq84YAcWH6gMYQwen3UZzfpQzwRYgiZtpKUBTym4tMPdeofoN2vXjsxZGhkMcys2szEwbJFit3T",
  "key19": "5DGd3wGxHoLDURM2BeCjjhA5AoFfmzkBjnQYobpCcUMgvjovjo3LqaTe8esBFtCcvD9KW3r5Wz7kQohRhMBM3fWw",
  "key20": "2HDr799fWhgECck1mkrbdCtwF8ohpvKuUqmVJDEHc7SkZGcCU5PLJfdf2tzDWxn4U8o7F3AeakTrZiHAof9XkUqt",
  "key21": "5LtmDK9W3hHnBYgpsMZr81DgXxDJLtXppkt2TFcr5QMGn8MdLDt1cUQ9Faw6Ekv9AUiQrezUNhcLBXXwXhsVVMSa",
  "key22": "28QVhs1EtQpuK5y1SGjhCxr7qG5A172dfiVQeipW2KzD4mByzwwb4Y3xZEXgXiQq5wJQHuCxBfEtfZgbyfRMUJzS",
  "key23": "3obuAcg9oGTjGonUYp96qFFHdgxmCDyH5jdMaX1hycdwYf8DAtNwcBGMkCBj9LELPafoqCCQ1ZhRqJWPXG6ZnHeP",
  "key24": "3xFqk9K18rNRpS3YzTCKNtMHaQWbWV9iUzhdcK5dL8DnmftSLxTs6Gm1p97FqGy7YYAvUkiGpg9ZaGMtKBrWo4pv"
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
