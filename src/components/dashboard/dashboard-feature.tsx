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
    "5GpzP8CubJduBahiN4d7VnHGNWvJgTK9cSZnXtAtMGLxMw32ccg6JDLRcB7Z9ufQj5U9D1etKdUbTMbST4shnhcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VamqvjfrpQuMEY3mYoR3bgEXc1EnWbXjzesuVEfQXTDNSDGXDvnpxMpY7r6h2inxXe2jxwpij5j6iEfMfrAHGJN",
  "key1": "4uNAmpBFARXQWQX4QP74Wse9NE1M5JzVr4RrJbu8JWW9iULjohVGtHtpPv53sqxy2UXm7zvDjAVUy3H8KQqybaBD",
  "key2": "2nrq9QA3JiuQwXexLqF2XAybXp23qHPh4nEUyrn4gWcwuypFYGSmuS5ZwfiRcjKXB6XHvTbr3uJD1hLuPVMKibKV",
  "key3": "n9f1F6vHRDpAnFo5aesEThvaGFMpSgs23nMHwUfzvXGWYhvUAvt1fX2MYBkRpKvoTrrjo654Zh82UrV88MFLsTJ",
  "key4": "jFrPjZFAmF3yMyqmbagZTQq4YxaXmMQgL4AaUzK5DWjcAzZ9zeUSdREnXmBxA2HPKhcQyUNkfuNghfFsU7ryHjA",
  "key5": "4uoh9DS67BrzCitpZojwi6ZQhwosuboPnpQbGpr24qDsbaZUE5Y7Z5iEWZ8TfFPHkiSPFxDuM4Gk77GYmn1HBrx4",
  "key6": "61pAC4HM1PwmZSRtzVW9ifw8h3e7f12RMzfjUzTvU8KUZjKtZZS6rDfJi1gQu1mzYiEKhdu27UobmiTgXEJzisTQ",
  "key7": "27osGcvYW7fkuoUrMAFcgGy9kJKu26yvuJFQQuY66WWww7mEBziEYSz3fXgeFFdRFgTiP8JrQVf2rqsJqqQjh5xy",
  "key8": "2JTfnJLR6GYdXTnTFXyQCk4sVirCPodyTEVeoivscdQwFmsc15nK1mUZzprPTHKHJXLeserCtkvjaVCovn5Uwysf",
  "key9": "55EhN5aHQUYgbLocKumuLwezsMxsuhE9cMiZFRs2EpcV5vRUizK9yE7HiUihumszhriHFk23zWjc696F6zM16KFj",
  "key10": "4Xaji2zqpckuVJUX3Hpfzx3BdNm2wej6RQ42a7BZCyF9CUnf1LdSUaLTZh8qyeHzXcbeEqzDzyxSVPxzx6dCfLSj",
  "key11": "zgHDWrCd8jsBLj73jbDaLSf8t1tqe9NXTRuo8UaGi9EaNcsoWgq63WEH8Buq9cLfCv1Q3BgRaf7n3fYU73YBDh3",
  "key12": "4S99WAvLnPuW1ieNHV3mXYBLasZqLwcFmAE7cNknGJbw4xWMEvPtsH6o53ouU8AddRiqDrnWmnLncLWFNaAYmMyi",
  "key13": "5VzcG2NgJcTzDAzvkxEJTtgKiCnXWxsQUvYE54KP426xdpwqzcRoDdReB3t6KQy8kqDhqbinx1HWwKRj9tQ4YmuT",
  "key14": "5WRxymTqevS43aFtgTA6nanFXCor47dH43byPENwxqfBmsTBqF4QkGUDRcxNnu4Jq57i5kdij66ZU9MnQSVzLNp8",
  "key15": "2ZagDSVNL3uZc1GiBmymMri5xUod8asXKNMNLqUARryhYdpzWNDkbdDwNYpYW3X8y74mpQDiL5CAAnvEYApYihF7",
  "key16": "5gDKikVP9W7nxmqR1fsMtcQxcWeaMroCSQkAbAhiM5DAczcL49ZbwW3XQnCJ5zaZSayDaVXhXno8gWwmSPxZKZxS",
  "key17": "2hf74dhHU5TZFcVH3hfHj4gnvjWYRaUpRBnXHDrh1DrV4D6SJjh1BUG6fADE3V9j2YL3Q4hKSnGTuNgxYiEhPMmR",
  "key18": "4vh3Fu5jX6dcqsifx1cyt77DZqa6YT1D8oMJKCkyXEwgfKeGVJX4f1uqoXVpkS3X1vfitui2XPy6c9WBK2snkkdX",
  "key19": "3q9e3uskAFQJgCV31Jjs8DPVZDPRRdQDKRsytonf9Zpr2P4APsWWSMDK6F5vMmNhGdiyidaKGN3nyimXCNCv4VeB",
  "key20": "4efSGaWG7bVUd5Pa9nYNgBADosMHrctvFWyfU1wdckNvZDZ7x3Vmgmy21tDLPYXW6pWKmQJMyaf7dCgexveGJWC5",
  "key21": "2Y2wGeUWkXVnvzhE9kb6UYuS1tQn2wUogYrXYESPncgqYBi1dfMnNT4QbXjpXgqLpnbZTLQyZgfs5M5gQh3jULvn",
  "key22": "2cAoiUuMgpcCpXQgqxGTYHKWRsJ6GiYY4nrZBQ1M4MuPTe1DRbyWJPJxja7paZZ81jLohxcQbzLLJzbecQHiVrro",
  "key23": "4GLJP6GoNmSwR5FfQCM4FSeoWRtKmuYgQG7txPDvVtynviLyrjKvRq7AzNSntgD6tgnR4CVhh2c82Zr5DYEBigrX",
  "key24": "3HHcM8MYLuRu3W1wPpT5jeMjzUFkmwV7YrgSGzELqWDcdC1gwQoYbWaVD5VRbQ6LLNxCzaNLbdxwFiuPFdsmaHiD"
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
