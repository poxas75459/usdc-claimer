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
    "ku2rWTmA2Wjy5R4hm3CYhDVAbGB8FurgHb2Y2Q9cDRFv2FeTwCVzDyCmKiVQ3sE7YX9L6UXC7Z1xhgMj7C255LT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eohcFa3PA7XwxBLsUYPSKajHsZR7Qf6UUdQDg14jYmtDhAGWeJcMrAj5skeY6G6Qi41T7rPzF9r9EGBW3TfM7NQ",
  "key1": "2SPh4rvPgTdfR5gMqLZ9fitPZFMCDDiv1treYiDq4Qph5dbKpp24FjX5883QXoCrvZ7ntet2xBauosjTu6D8f1NY",
  "key2": "5WHuFs629axAXoozXvkkFemsLxQ8jJA8h8LALU3KiayQ5tAWR6Vb3nnX2p6wCpPFFvwDLbw5pxnJfiEEptk4pn8v",
  "key3": "raqXTMxtCcWp81iChqi8GRccBbBzieMNaGeD9NNGhQnNz7TTHcrctKWjNUAD6ULohiQms3bcdV8184UeTR4pVsz",
  "key4": "5nxVrAhkSQf8fkbsqhN2to2TKGucoegYx7xtFZQyggFRCs6FwoPb96mm6tsQFe2V8p7wFRQuQQmVxLNwptRBBM6o",
  "key5": "5rsF93HS3DteoSBjxJ41NkXFrkpyW9aVktgVbkUP1xrnUYHdy6BrZDKWsQN9tzuqDeaUJQhx5ZHtTa7gAFaJdwJB",
  "key6": "2UyCpCwjKE7yUVQeDGUvAWAHJk6sbBpcYBnLE4Hp29J8GVr42EQsFuoVENDuhEPMeyqzcG998qfLapn35kcKXGkS",
  "key7": "TEPhMfQ6uSK3GwPpdcfyorewLGGkpnCYDWMgFuaEHLSXmQobutqZNMRY72DezW3coCdkxqhhZJ9tgw258hPe95U",
  "key8": "3daFoyiNq1qutVu6BvUySDMQhDoYAAmhbcqArrH6Z1sKVo44mZyLC7qHwhXajDPHUJW6SXv4Not71aooRxAb4gQV",
  "key9": "2d59zJRFV3wF9D3HZtzawVboBfbhWTgYm97YUGHGZzsF9xhbbQsGsp6CDegeC3Q419pSaVicRNWhscUDL38VtXpz",
  "key10": "5Pdkt4u9ADsnAXYUnd3fX648DW8xCiTGgD2DNTRHwXhjoDFasFtH6UwGcyUsanUrq6tzx9F1jsRrYVmxatPhvWTC",
  "key11": "4uXJX43gSAE23AQbRUarRNVXb88P8jGpDnntFEwfVvVFRsKpGTQoCCyct5gT2vfZJLgADsm7AcGKYGStL7oeM2ir",
  "key12": "vppa1uX3qeZCr7DQiPjb6vALXdDCNed2Dg4pueaKpstaZ6ooTszGqsk8hdfoTxUxNKCc8y6QKieNoxZEowGTXQs",
  "key13": "8VPyhRTXqxVFGzed6ueLtZgfZ7Y9uwAY8ejvXSEFzFCtbd5GU9tsBr1VsFTHyGG7WTaJAKAjNak6n5yhotp2fzi",
  "key14": "3ECqnvSCVZhr435aaWTWHNncqLKFrzmzTUxQPcLqSD9Ty3DHht9uMN4Rk2hYLQUzCosfpKZCYFr2UJtYUNUuKYqG",
  "key15": "3szpgTWbbJAnsFUFkQxsEL31nPPevrionXyJkEcDgsaWZsUbQh2g2A72QZSrv9EX7JZcuNJHtLv8kDtb899EsxXL",
  "key16": "4nzvWxk6dcLZaeMzXDHrsb4BMyypi5dsccXVh27SQoc2EpKZ54GDsdo1kYXn2rN9Jy2TG2zyyrYtcMgjMeNJQcNP",
  "key17": "5Hvxp9sHxjJyVGPHwXBEMVEsv5KSZrc3b2xNi36vnSWBSeeihK3HE8jmtbk6KyMCoodnQyhM5ntaVcmcBma6vrdH",
  "key18": "4QecoVLmy4H7fHgqjZCLSfXAhgDCTMQDZztnCwhwYYihcusJsuGVfD7g8AM8XyAatE1ifqE8Xiix4aSVrZXpX9Se",
  "key19": "5ZudZ3hqyck7sZUKWnm7sSzQ6kyP4HMNp6VuHLmHeasdRjuXZenccffZSiRUfhCRVrg729oEijvbctnsWByGjEkX",
  "key20": "2BAdArfnhiBkkESnArpoKk6eH6iGNv4C9oztE1b9FBWEic7gv9qGYTXqvb7XWmAGPW9t5jR5vFVnN3APBa2KB6LF",
  "key21": "2WBronjs17g8QfVfK1JP9RscWzM1qCsGA9Yq4PJPDYvocRQPft4wpApAcD8t73hRCVvDWsieZ8FChVRZx8f4ew4a",
  "key22": "4CNMPg5UVE3szbddXzcJRzAZNQ2eMafg3Ce38uyaGkQ7S1RZB526xQtVv7cFVpaknfMwcGKxPEgbytjJHfk417bJ",
  "key23": "3VX5FiEh2JKzsJv7q2cMpRZqQbVEDHoiSJBf8Zuvc7ECDHGvmN7s9DgpCciZrkYZXUY2bYJtYcLC7Y2GtrPUmEqY",
  "key24": "5YM9X69Cbr6HFsNXTTzCLrYXwwmHPNrfRZhprUQfK5TpnVLHojPqZEjhvzevMiehKLPM8uss2KNJaKBLpKtvMcTo",
  "key25": "5FmVeuPa9qmo89gNexD3n7diCoJrLUiFqXhBd2EMbneURqDQJxchJJEbeySarcWkcpDrbAfsepAm16vvaAdH1dbu",
  "key26": "4zAtytzp11VKFwQAyco3y45Gvp7Fd1tsGo2vzUmFEGVDQ2H4KeKk32ngS99zC4tSYiskD5M9GAmoWJDjkUJGJ8mZ",
  "key27": "2kCynpjacL8mAvixU9C5X9MkNakEf5A213vhG4psWG85i9N6mqGGw2LHmUK3tXYqvyr85KpbTZko7HTUDCacj79w",
  "key28": "5WHbUL4d6BcgCTEQ5pgk8nnTYrRHJ2VCrnG5Jx4FxEtM1QQfg5xu7J5wyhvBJ3Gxm5G2QudiZbARNg6aTxf2kjzo",
  "key29": "KAY4exjpeLJ6qGFFcgubhG7hKz3KSb4iP5SxosoJz5H9i9rc1u4S9CUwxZ2PYAvgykJKHyKG6F3rkStBjQENiey",
  "key30": "HhQ9VE9trqFr85Vv3hR7s24Q4yuUpayVAHDTWTCg1URwkkLKzFM3tKVFTHJvNkR9ThE3zhZ2ZP7XXVB3M4KM8VV",
  "key31": "49G9XZr5qmcAoYkYtLPc1CeT6W2QSJ4Bf9S2YeVHUHJWZ6MvS68hSYdhmKpcifBAErJo2JCBETuvzePCEcvM1q6X"
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
