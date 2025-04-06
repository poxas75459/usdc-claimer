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
    "rK7pKK3rLFLEJBwWNasUYo8dgJ2U32iuopi3Y88jpWixhXdAK7s71N26R5XP3tLR6fZGvDgQCGw7ooyooPSJrwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9BF2JpnbFmo6dQsLK1hqaMWRCRH6DaDKZehvZEaRF3Mh4g15GoWr1zyhzSrYmznLqgj6JfF3qR1TLV9gWNgnG",
  "key1": "4zL718aiGoxiTcnbADZ4divBXfJkGAyXSRfjtd5WEf4zu2U61uD4SM5Wy22zHUJe7UQMqoBwhhWcmaAtRR9c8J8o",
  "key2": "5EAsXvSij7wGkgeuHw8bKmcHoNYa4uWdJTZS44KAzeogGjN97ZoDA85UFyh5ZRb6i8PKW8g6SgCux6XnGiVevq9T",
  "key3": "fQfQuJKHh7aoPo4g4v7Jap8j8sDPywP9VH35KgATvv8JDAA3Q4XFYNhLEyMq4y8fCoVaKUtF2EFjPth6qJA3tPv",
  "key4": "3WZXCjpnQSMdNGSp2j2cf9c3xqujbMhGKfYqoCPnYQALqBCoNDQFovU5JvMcE9gZL41ygffWBZC4BBeXFZrxSjPm",
  "key5": "mmQMW7zUkcyPJXBwCR81BUWK3wuY4mrWSahebH33Knvz9eQyn1tnDghHBCXscHkxDyy1o9o7XhM6QS457qw6uEo",
  "key6": "5q4ymu2JfpTszCH9pK848GBJg2cHNwKUPMyB2RAvkud6wkfk3TTcQWdXU3WVsJG2FNJ8NyVctQ5JFeBfiycsvddQ",
  "key7": "4gFaDVKVRDF3R4iYm6P8gkPmUaADZBn8fYrjQGPdJF595Q6jrrjtbpSsGeazV2jBtEkLCJz7g1rPpE8tM2zxcTtG",
  "key8": "5owEdMjvhYBtYxDJbHG3UPNCJu8fhPniZq6zA5dTMAB9WMcd2L6phffKp2FdpNv2VQhm3QRCbUFLgcCoir5cCPro",
  "key9": "5ZMJrFMFNC7Q6i1HXEHCCK4VdLhpuY4cxqPMb236PWy7CS7yxvGvHHMSa5kyKThRsjEh7M9TxWtXTQ3tiEibscEH",
  "key10": "8N8Z3bL7MVJAugewwPVvZjTC6KV2AjYi6hrboAsGSf1pdzrfJYBCfKb3CsEZT6KgXdrzWEm7DHXDpTqUxiz8Dhr",
  "key11": "4EB5LfsGcbFdgnncrtvJtgZyWcs3cVFUW9t2z41ZA94ERx2SM7sP1hhq7fMFgyTdn7HZseHD6f1ucsrcj8ZpFkik",
  "key12": "Y9cV1fKBZ1ywtzgdmsc2RFMoj3gXUeSjBFrFcShStNbj4xrfga9yQQSXQRqJJCdExnotvakqxNoTEBcXSmwD4rR",
  "key13": "2FqyyPtgnNzCwMZ232jZ6vghZ1WBCapAXtyGYig8PNpvesHVhPFa8FfoyPaX57Q154QXETxmd4bnUkLUeoiDfjvb",
  "key14": "252HgnDP6kZ2i5Li7VnsBaodo8nSjqGaBzjVaC5qR9Qc8YLnnxGu55yiFcRgcVQJ96y8CHT5tyUpPQQaDoP1WttL",
  "key15": "5sk61XgVkJGdmwhbcT2p1gDUhQvA6buhUrfciQTHcE3d91mb9NrKJpFkNHwtPPAL2yMX4v8Qw2EXUuESutBiYhrV",
  "key16": "4qoWmoWrvyqFSVR3asPqtz7JDTSLKXi4BdQUVRkAvCH3Aba7fTYXniVm9zeJ1D8j8UV8R3gfu6vEQd7YSeZXDvM3",
  "key17": "4EANPJwKHMRsc7SAFLLFLrXFfUyrekdykf5Ui1on4z3Ptpz4QTHv8CWzeTNS1Ns4ekZVFV2XURWpFQnqGam8ttc",
  "key18": "2yGS9qbgmXcJ9j9JmVu3Fws3iYM6FTW75DxjDRNNNg6xN3QZXjHEo2xUBiZT4EhnzHEuogtMd3eWfANv96RxVdWt",
  "key19": "2C8rv1QDUsKAYdKHGPQyRok7CJPgCq9D1vCRhfGLUwuombWkQ5s5Ld5heRf3JkiYwhGzmBoiMi2ugYHd277AsPUk",
  "key20": "4XVK13NVa2Stgx52AyCw7GKhZLAfPCs4wFmb65U8M85gJfU5nZTBpdNbyZx3Ey4NuKJfk3oRsdHvx6crHsYjvUoy",
  "key21": "3byPuGS9UMfJBQZacJw2FtZGJPMEgMh8m3mjgSRBbLwnAbCsZZhJhXZMRfYZX2xu4Tr6NXogNPuD7b2Smhm2PBCR",
  "key22": "ZdqpYrr7qpYHXP3eBiFQ4mwiDTzicZeD65Bv12eNJVNCeieoQyMScEfC5orfdBXuVT9PGDSFqaqP4ZXJ18yf1Js",
  "key23": "3NJTZAYEw648HURsbs34Tni9Ct1fDSSgvmxrT5KSw35ZHPrU8Vg6BKhWtuEadoaEzaAnJNFnyfXR8EndUvX7jXER",
  "key24": "64qWW8fvBkyRLpAFBdrd8pCqy8oV6Fcu3CrQ9iYLeXMHVsNn94uZXBWBaKhACGZe2CP46KwVQeqTjcqa1SwxeBxs",
  "key25": "5mfKCx631DRaedBtfhTQjXVkU5yXKUTcme4n17viEu3mryPHRmHRMn6fYc323CpWBZ1hZobxBc68WPNLxvJbn1Qk",
  "key26": "2UbMCWLUDxwkqaLbZ96TbEr4W8SJtDpQZFubkLM63ULmsmuj5pLGdCPFkHzeuX3FF8zVnGbiqwhcSwu52338bkQ1"
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
