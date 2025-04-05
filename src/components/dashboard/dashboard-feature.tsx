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
    "3TxVYwdTnSScJZH978krfJASnnnAadj71Uw1ps53ND7RLAaJK5bSTbHFDxaPPK8PY5BQt8gFsV9FHb8quc4pKCeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2587MYZvvWGEzTu7cHTjeRZGnbT1HuawS666grWUUVmM3ViZU4Ueq2sYwXxyocYMbAvo4m4y6eapAxmNvWw6XCYt",
  "key1": "2Nn6AG7g1tRjdi4A4mG6Jt5Z9jTiFL1kwXxGp4w6XWAp4GLrssmbBhpgGhf8JCZqDDpMVKAhiDVWZUgwynMMu6af",
  "key2": "5Lh1CtUvfZTCVpzUaWkWusxXwtUG4wjDt3KRsowdd5Tyhbc45RDHpUMrvMQcpNgTCXfqLgCY5SXL7E5JuZat2b5e",
  "key3": "3eMnZyMrp3eZamP1YSUSxLzKVPLhQoA1WGWuMmrLhpx4pPKVBp5LemnGMnckS8T45K5qjNdoyn3APirgySZC4JRW",
  "key4": "5zTyh6FsRt8qEfeRoxvi4eiP1N7UysrWDVLunrTNZQuRdXP6Y7f3XCUoG4BksZ7j8qpR4mKbghxfhmxFsXux7w6W",
  "key5": "5rPRHx35GdAG7sTFpvYHZLxu8EAfTn9HzqhiWpzZGvNhFR16B7UFcquQynfSqoWL7KnAufbbawrwdJZGVy2HCH2V",
  "key6": "4UwTNKkjttjm4pkcFyPfuurohdvyzbUKyLnd7zz1cfNTz9dxgK3tYm3ebnFqDFrDyxEtJT8JUjzcVrWCvWA58PwW",
  "key7": "47qCs3E3QTzSN9YK9eDFX6ZAXtkQE1ZWQa1REP5HfffwnnBw8LEUjoqpU8Vsj48qLYxnyrhnq17ooomKRE5LZQdY",
  "key8": "LRPndJ9mr8agwuAV5A83JsYoV9cDjYW6qD8UbHFFgkVQK7kN8br1J1qEdhXwgHiqzRrGptmuGFSSgdJJe5omabu",
  "key9": "5exdDzV9FbNrD2tUcFoXKc92fR2KSUp4NZRe2p8YuCZ6AWgVruLpFqNrEzMBWH5KYeNm7cukC4prx62fkRYEmzUw",
  "key10": "3ZpMwd8Yxmyz4XNhMZmt57P2pEMne7rvjk1XCPvAWGBW2yQ6ev4C5q1zvfkj3k3jobRdTR1T5senuciXc7CTXdkA",
  "key11": "57sSsF1w8TKJfLGQpoHXrKAvGekDfRgjiJGxLdzQpYdmXsR6CPTxK1HCkEaYzobxt1wW5psdqfS3AQsb6ecyYGCU",
  "key12": "2LfYvji545CbL7g3CkoMopDQQHJ4YkC9UTs89x7xgKxup1Zz1stKEJuJ3mPjgmnkj5YPqCvDNgZ16ts8oUuyz7k8",
  "key13": "3dLR3FfHyfQt1abwpqLF9F57rYpjAUDnhed4XWYCd1SCHHXXqp1F1oHZ91sh8uZPhtyC2p8P2ijUP8noHB9Dthtm",
  "key14": "5YwrXMgtqnFJL9RLcua3omMr9AnytHQb2XWa1E7r5svPxT943cZbA7MpufonMC8uoF49H5EhFfj3NMBuwtw1yiYs",
  "key15": "4qxXC43xFdRMWoxcjAv6vhxuG9GLmBQk9U75iHq1apbrHE1eGn5c7pWCxuS4dDaYJhTuu7GFD8xDf7wHmyp2iUkS",
  "key16": "zrHFbFQsKbZ8JEGPQqE8yBwkPLdQf6cqBpkKUJ7Lj1sZihSq2oBp6Q89fejmWkLLy1mWP69g7TRWgVXq5pyzj7c",
  "key17": "8FtUikgksgyASRiQftRkNYHe4JroVFWymu18h9r1NE3qQyXRMbNuc9ZySppPXNEBK2smF6npUnMvtiQ91iXtMwC",
  "key18": "3gjiVrHwTxEsTvWRkQgbaP96KRAuqMdf6VDBk1ADCkPJNUj1aahR7eSUxtf9t8yXdZT2dN6hy9nEy72jf2Ga5KRu",
  "key19": "4WDjYQ7F9UFD9ASngtNHCqGhGfasrrEPwenYmv2cRYgWp8RNVwmkHQymX1iN67AjXGk1d5JLvfPwuUUcBd2hewHJ",
  "key20": "2g45LBTxi4ozwwT7GKPjtWWMtB2BbyA2dCstHnNHi4MRJsmi6tkcLAtRHh5YS6EToyjS3MPzwEKghqqbgwLXtSag",
  "key21": "4UL5HiWiKAD56FiFxbJk1KiM8UJ77K68DXe31jWW1wpH5XSMxqyrPA9DHfwBUP1XEqygCJf9WCrcTAPXX9u8Keki",
  "key22": "5TavWuDudzUavAFyfYpLu4E3pnK2C94EvLA1gyexrUTcXKUNLggzc9DLGZFLUHFdmCNYYv92TPPdDNMWj8dRwLX4",
  "key23": "4m7zLhw4sNrpwiD7FpieBp8UNnNeeYGVGM6T2NRp9NG7U6LJJRH2jCzXsmn5hF2GcQEMjHZCsTSvXYzjTQiDs8PE",
  "key24": "2yVpikRFWmDML4hEEYKygcVtnpdZeoxzBuWRLESELUag7zeoAeMHGrkZLKa9WDe11jbmW55Gq82KS9H8nBToe5zk",
  "key25": "5L44DWLp5LqxoRPReN72cF5RgAyTwnNWs8xqSiq3xfhzcusX4bwnA8vSUP4txSd9QQBTLBmkyqEhiX6svip8U3ML",
  "key26": "s7DBGsfsZ7b31vmoMfXJJUaB9DzJS1wRKZD37xKyMsTB7bt4dgzRDJVNWUJfP9TxupwvbM2kTHiguUH5rfVQarK",
  "key27": "3HbXe5DchrPYEP3phVyU9e7renPiuKdB7giTTr4TESMX6kNgQZ51Te5k3S8dAxCym9hjhg27BCwqywvN7MxfAeqf",
  "key28": "3Gq9Hz27H3MBNaSTUBfHLSN9hzhZkubPeqicTXThVkZnJqVxUpgvQ7kJJ8RUZTRiNSPxgaDbLazuDW7AxgCq7tyq",
  "key29": "3jH7QMA85shVyD8rQLwM5atWRXcjYzSAgktRqMHkYMwqqrGG5WS68ggapBSusmAhumgQtPVdfrds7J4JsqbzP75c"
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
