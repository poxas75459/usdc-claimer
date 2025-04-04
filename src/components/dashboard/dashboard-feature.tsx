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
    "4tz9KM456mQdiVNRsLYubL3QezLeQdLJjFoDvsXRXjP4BAGrY22uHLLBz3gSf8bLfNygucVLZrRujEd4c4GXTJsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tzvtvzzn2522nBzzRdKQzBn6wpvUgwbLui5BwsEj2eAbc39CCxHeJU1rPA72H5UuiUp52fpHLMYku4g79TFVvx7",
  "key1": "pFE5akYNUJhnboaqKPbD93qqmKLAhRTETxMsKejuzHYoaWMjCw5Tt5JACQYpkJzfpFQk39ziuB9Puqsg5AHJhsK",
  "key2": "2HSHJg1G9cZbbFkv5RwbCyYywydD3m8vfBkf1DNqBKjuPwoqTFCAFirPgfNscPuXYXa8L5M49AXkenseeMtj1qyB",
  "key3": "5jZqFVRV3iraEWTA8kPazAbNZ9ALRXveGEKdXRHtjVCMqERDKiJ7wbti4a1xNrLBAJRjGhx5HcxHRckmKt2Ue1kJ",
  "key4": "2VZeQDP6eGdyLcEaR1VtZPdpAx8VTVD7jT7B6WjPbXA27EVcYbzpy2FaJ9yPPFZfG3y7Nc26duhUwLVsuGtpJaYW",
  "key5": "3Pg68G1QEJNkvYR3AbBV2hwFxjgPpmujYHKHZFgWthEaMZiiP5Hw6aFvLRwRHYDzFL2hYtHT34apLHbdeWcS7uMe",
  "key6": "3SWpRzDMKYze7C6EhZf1KkWqaJVPXQbaeyRLVbqMvwGKqFYfRsh1vbEQUua4pFicDTp65xd4mVvVxrxCW1YMP5Sh",
  "key7": "3cUyLD11ubXhGRhjh3JcmwehBZHtkQyjM4BnDakRX1drKsa4qmJw5DBYSDSDq7TfAzhCDVNSm1T6Y7ekEWTPtdyY",
  "key8": "5gawvtEL4UxuhNpciTVR5JbquBLuSWrUT8JewUGzFB3ps5W4b8EuZ6MMaCJ5NhaxAsFtRt8aoTGFrieGjeqTnJT4",
  "key9": "2qUXpRfFL9seByA9o7krRTaxbJR6g6ewCCTCtAkUiqymWgUk5HyDHmBbqKoaPNbGupjKRBs1cyLgc5q2a8N41LKR",
  "key10": "5yeuy57L6djWmzuSDwVgtMNcLD9v4LgRmZC7kaomDZj88RaRRKHkaANq6fwpVcpfVcgdXGcJ86fpjAdz6rmyP1ns",
  "key11": "5jGThMAKquAuXiWthnfXAKau6hTBXjn9Qh33BANR5bhsn14XY6wYbyCQeANdGfAgHUANd2Dpp7R3BED46iWNrE3p",
  "key12": "5BpoMGU16ec9vxRwbDq1E4CURiF3kBwNqY8RwEJcdTyM93vb6AhnNDcwej9yy4p9MtuN88utDDQU6HXJmeEZ1Tqj",
  "key13": "5dkUBqmm6SmqK1s8qGFAtgV7uspqRAJQ2TCb21jQGTKXQnfQGGtRaysVMtuAL6THaAPPabu49As1zCbwrh5uBvHu",
  "key14": "5Fkdiqv7Jg15pJa9K6sPZT9J3RCATsL5tMU5yHhgrhNTsqCRxT3zbGvxRqGMRVT1AiaTZGFQY5sStnNKaVQkHQZv",
  "key15": "3gH8cNoDBB6H52f7gXq7DAacKpGimRWifAS6XK4AEZx3THddmQSKkQRbXcj8pDiUQwLFFCwigiM5umfXsNCp5KvH",
  "key16": "3N4Tp6RYu7aZyCWAsocnndkxqPWka17rhejmwRTkoADKLzB8hQQhZC8bVjdDpqBzdr5afW22PJh29gUnCjgVUtoe",
  "key17": "2VtwZEadkhqLU4NJdvsydRQZuCWCe4DXSNNfJNX1D79duYreJPpSxzRyhuVSaNiJgewHRBBebVuRsu5eyk9GmFWc",
  "key18": "3nRPdtCCRNKoJR7NgAaHgts4rjdRpiwF6SsYrHs5Z18okR8bNMrp8j9MH9joDncatnAHF4a8oLFytkVN5ijbyn3K",
  "key19": "3V6C3dMsCXiH4oUcoE2zmcQsoi3nPrBQpw4zozfLQADRmMnvnt9BnFvXsWymFQw9ttgG72LQ3egEf4GQeDMT6W7Y",
  "key20": "hsRgQn7XHpepVy5o6HgsgTRTUbmbYS3rD7uLfk287WacRt4kt6tJer5vym3c7Yihuazyy41d7DbNR1tPRH2Hw97",
  "key21": "3ZN7CxBFQtWVtMWhZZV3P2Fs8TW5xwF3zxMCTRiS5a8aTrQ87WjvUPebwj4heknbHUqWdicXXA6q54rpU7gBNtSE",
  "key22": "36q7A1QYdjHpoNVsq62ZnkL3KRe8K3ECubRSFQbHDADJzYNZJSUQ8WEbP5VBzSZaBAF7KZZdgL3iT7a5nVxwjw42",
  "key23": "5cviWtaqLVubDPPBv42VEN3bsHAkgdPamnMzyqPp3Q79ZRbt2WfKcC8aZRAy1sMR6PDQLRUv2s9X54opT55xwN5S",
  "key24": "4XYGjxzio1o7kohoUQgM1NLAcGvhB6jWJ72x6kL1Qtr6iUX1fH33qGMdFELoZftq2ZCWCfbTkVFHxfTt1XteHpAr"
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
