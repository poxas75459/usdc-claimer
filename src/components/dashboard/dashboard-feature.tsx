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
    "34RG26swUQam3AhJXpZPPNqiRAQraAA7m6gGadVeRfL9B4QEWLgfYFP88oyWsSLwomGguNq4hcqdN6jpXyqzEkwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjKa2vbGpyD2mVtDHTY9zdCUxtgFFhQmhQAEfjyBRycBnhHa1SfdB8tknwFCXnpYUyMCgr2TKcwX7PfTANneKaW",
  "key1": "4Kzssa6A6XrGzEygBZASyUsea2PFJfY9eMM9x1gKkwHvKmZaV5aBaLcxYhQBDScfMhqJDkS49bqFjVx3ThXoqEwh",
  "key2": "5WLat3yD3XEyYBfW6MQk97cdw6YJ62qeW51bq8uDB3SAR61Pc1mQJC5bKhgsNNFQNhayEqBQczzcnC6VHaKhAyFh",
  "key3": "3eCWw1AB9JQfEkD2X8uwGS3xHNBehWQ9zneUTUoCg4VUxVJZ7pNpYyNq72BDr3zFzzSgvBxPgcXyK5b4YGj5YZaL",
  "key4": "3LoZP67WZCJpkf9dztfznaRWpJAb4tBALXBzZwQNbQBRro18cLw3aWSfinEo5LusSewhyVy8K7bgzx5BYgZyPbCW",
  "key5": "51UWBUvHM4eB21e34kAowhk7kYZDK2GDFGZq6Ygdy8r6eZbgiyygjRU2Rk9Ut3MJTzkjzwgMqAY2mzcrZNULQpDG",
  "key6": "HEXmtuPCum7sReBGqTLaDXzMFCZGPaGunCp5pZbFR2Poj4FzaaiY2Pq5MRJQMPMgACsqAmhb4UqYARSpaWABKLX",
  "key7": "2usMwaT8k2cHpLc7hc1QnNhruAfJadYkYpL3LBHaVoeeZH8GS7d14pL5vPAVVsbDeWnqz82YphJAxpoSdvbiQzN3",
  "key8": "2fmXPKPKeQkUtRC9EJRCX3jXQEd6PMuEJHDcxZ8LZZXgFyiqDacp8PJ4HfoMhq6bWHWNvBNANG3in18gq8G3ax3e",
  "key9": "35UaKJie7aBwG9trVY3apiu5huRDEFSYR4KUesmzRLXf9HzdNw7mjQGQqYdTAWsfMk89uWCPxdEKnv3KVjM5yYNb",
  "key10": "2ouTdEMUQT1Adewa86ST1GVhziULzc8zUtLrnS8GXAou2zHamEPWvgkDePuLsqUAPefCHEEeb6ou5pV9thy6CdPS",
  "key11": "287utXRN59TeXqgG8N472dzhZXyNXiCwmt45vnSYgoccFYnSzYTDrcW2QLcVbBDaQ8zzZnHMz8ofDb5uXycQVm3W",
  "key12": "52C5ELaK9Qq76avcwEApJTpPZepYjRVCggCGbSdDsqabqzRqJ8C8KYR9Upj5iYeR2GugLGLdTeqEE6zgXqNZDFoe",
  "key13": "38nhcD7o2AuDoCZgYEQ88niPf68iasbgMPKiz5Ss5wvgss9g4JMFR69FwrfuNP9bJGkUMtw7MF8UKkAPH34DYRNW",
  "key14": "487eRw31y1DL8VMZofzEU9gEyesHK4aEqM8DjzhWqjwSgchJS4FLhzVuArjCi2HLoRVsxiacgtrVHyCwWNNC2BAC",
  "key15": "yny68uyi1H77QsKGxAQrgAb1ZRRdvh2oaCz1zyYgjxRfoayNeB95WyxjNXV3e4mQXBSxeD3dhXeFYzksyLsJ8Fv",
  "key16": "rnVvNS2cbeHrriLgQy6cgtYpqNEfujZRb91HoPUSDEKksecPV8gnpbZ9VpwPSXxdcpdvaEegBKeJHhS1gdvaR2K",
  "key17": "4M3sdhvvvMJnfSaADXfWbEggjKFaghGWG5yqJ9gMHREQpUP9criNESJWioYUSKygJwA7SqxeHiWh7JP9Bj76oQwL",
  "key18": "4VEivtokZ8R6LhAnaD79pGEAPpnfjNcKt7U9RZH98cHSKuLjC9eGnsZTmFih7kcAqQvDmJSfAb3h2EjstfTnjRAv",
  "key19": "3L8iPMpQqu6YassuErQkSdcDW6EsSuXnmb4y5WiemrZjCmJWrR2EFriiAyYSYTJLiftBq2VymhrSGbgHg7v1KJjg",
  "key20": "2wL1cLtXNReXQGRb1T71M3Y1bq5aQHhQ8tCpPSar1Fx7P5sYx5Yo8eWppvHtt2uUaq1UGe1uEtMzkqKv5AP6jQLC",
  "key21": "5Q4gsZGVV8sNgyVhQZSL2VyNxL6G6g4ua2GkBzVni8WxSVFd6Yap5YJCy9iAha7hty4yxsY1Bq7HxMsfVd4H3jdx",
  "key22": "2hb3yvtUar9s8b8Q5jbXDAy8ywruZV65hYSXkEProHLTeiSCnqrJzVZEyKTq6RtMFbjNHvVv2XC8NwTazTS7EmZp",
  "key23": "2SkerqfZ7QFDQTr521dAQiNhGm1WhEEqQxbbwfnAhfZD7MYdMMnQvQSFnimW2ngPrUnYNMRuyWZ8daDbGTMiVqKK",
  "key24": "CxWjgiwxR16TTZchQ75GR49bnENFCuhG8zVRK3ANaAMcfMfg3KmGr16QMAwjbHT9bJpswxQw5A7zKiTd9QHW8tV",
  "key25": "4e68n1Yfw5vAuxkmVLv8dy64tfQd2cb5GnqY3Mps8f3xrGX4zwZwRncCYcaUitSAhFFWnzx4PMpcHLdHiEW8UM3s",
  "key26": "3AV4fVigDiR6DLf6eqxR9WMo7v4WRf49npbifx3pVr5r8RWxqFsLksw3VUHWciBLvJHQeLYUUVoGf3tHweVLcnVE",
  "key27": "4pLNQJnJAHz1c5wVB9zeCWRHqVvgFnMpwPjKSkTiPzAyY5yRQinmtTfLWnsEDxi79JiyyneBfNP12RqET9itUWJ4",
  "key28": "46M1Hrr8ktRUrbMddEHQiPm57cQKrG5eMFXoiXiWgGzLHTdJ2B9vfpnhoCitpntESUzkFMfZ1XLkAZdwuz4KJuF9"
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
