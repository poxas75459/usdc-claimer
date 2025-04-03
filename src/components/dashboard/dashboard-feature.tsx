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
    "VthzUJG2TvitBLyaNfKUeRZjykLoMSdsz4BFKXtHcsCmh2CWXvNmZJc2HJ75LXdWR33bGdKBegnC1syKNnCV2hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgW5iFWJFGDKekrBSHj9Tqzb2s5KzJAajqEjNNGmdCYWf6j8vs6vJYPCkGNSy462Yik9oHZ1dJ8a5Dek8aTE6Lm",
  "key1": "4A7A4FXhuxEt28cvaMRaJUSC6YKx7XPLLo5xiFKUNcaEoVPBHJpRJaJXSEdm2yd4W3BhirPZwScEsWgC6rAFyPb8",
  "key2": "5A5yXLf618qCWUvkmRFzyZ6K3KAL6Ev39Tt2c79cvYGPNtvMnkz5bFmZziiCRi8DQHT3q2aVEX6tib5QKCBwupcX",
  "key3": "5uFtG4nGrbcg87Zqy4etFNmhKxR1yJ5BurNpHU6jatGcaXtianh6bbUBUYyHybYwFB34iDaRNMCk9ha2RJY5mt1C",
  "key4": "dmRNH3CFxg1zuhavhbY3syYQok8oCq3Ao8DYzDebyrRBhDq2wMrGfX1zAuw6z9R6L7abnfsKNyMaFej53cvyNqm",
  "key5": "34RV4ZwNE4eeZwfBoK95wwvnjNMYexKfmcjoycVhopP9T1bHaeHcMyfFxKdk9E8hR9qUiVRUuYKYw1zVQeuHjxwJ",
  "key6": "Pnnpqt8BXTnGZmAjFjbZh8XuYEc1whjzPxnMUTPS637E2KUkpJZeJa2UViXvVYf8oftzZwEZ87V7Gaxmbark81m",
  "key7": "3d2t8ZjrUXq6ZrpZWdPcjXFVeonTz4ur8QvWiEE6hc98hbfrmRiBDeCwTtWd2CqjqM82BLndXgy5fzWkdH3aKFSC",
  "key8": "2TBe5aYkwu56Gkya7w74wx1hskzKXW2styDTZDrNfachcZ3vNEF81pzCi5rWKCk4oNj7DcGhr2cw5ExUonupnLon",
  "key9": "2JFSHpqUn8yYJ4LB5c6m7GrRRbLFqtRtZiLSopv9KqF4NctHMypYENbQW9RmQrCou3asTCHotZD2acmqPZU7xJ7M",
  "key10": "4UnbugoA1nYtJs92JaGzoJET9rEHA8LsyWrjTCdaV1CGF5NqfyKB1KnEP1R1o7WhAeWjvczFt5oyhUrWV54GvH3r",
  "key11": "5wbo5QRtwRrDMyGNyu2ucQCiCBxmwKa891MdDM5BuD49vaT4QgEYo1v4iwQSqq4pDsLfCBdPtwKs5wAU79oKpPLM",
  "key12": "3agxhh7LVM4kPMsaBtDfJ8Pm59f5wAiBCCJkPN4M5ojHYjCZC3o2LreoG5J4ni3Ucg4HSeNxAnzsdxgPM3kAUBXW",
  "key13": "EJqkFmPfv5cPFv3KsBoJEHrb9yywYwSE7MMrK5HJc5VCGKfZKoig6vZ5QukVYWrDZuZ3TiYHxfrMEtsoSWETf28",
  "key14": "4GnVzUcEiS2JxJY9hH8QFiFx8M7FSbnbnzZa52uE5R7utRrf6YgqNzowCYv43MnYcWDciEqeixVbdAjdS2stVmM",
  "key15": "3Uu21Rp4HoD4cAtuXk2ggi9V4zz3nbZTpCpXKphmeXU2R1emyGHcqsrekoACntqx9nSaLCjs4tiEo7vtzj6FPK9Q",
  "key16": "3egGaNZk4hXAwkpAefRbqSDccrMBeMdhNyivheHMqXDDYNkaDr1UDZjGw4qcxezivfPna9m4euNeWcPSGQ5HUY7z",
  "key17": "2EbVhfWgR6gfNsrUK1ZVQADw11oeHKWPDvwFuMSojFVB1vGnCuhunbN4RzK3pUDC7xBfTtrjy1opsKPXcgumjf5",
  "key18": "5CprYZRNDTASPNdxVfDvGEF9CmPSQ9bCyNkmJ736vZmzifGBKJ7BfEw8fq3Jpr6L31GawCcJMzZ4KvvdtwUGoK2a",
  "key19": "3NBiTVGto9RFFVb99Vgme9CEqk7GhZKNRrPt6hCwBhkreno5zPR1JXdfYxjVQTwocrFnhs2hQYvWggU1NPTDaWrC",
  "key20": "tNLTSbqstgqtzAKdn2x9ireEtMfmDjWUmgR2Gyao8TLjYKPhYYUnieuEt5fa93GEwB9k5uCUiZax7HPGtYt8ASU",
  "key21": "5G1DqTHL98cLXVmVirHUfigvHwBoEsk88s5XMd2rkkAgqbeYJm7P7LGBZnLewpXkPHPULANRxjeY3TZVa8e6hT34",
  "key22": "4121aSjmpokUQR4ZL5Lt8QogH7X3QfrtaKhV95D3DWDCV68PTWEVZrWrg8hs6ZsueGjQnpUL4fNzi98JmekRu86P",
  "key23": "fQtdCLfuFK6LzasHJT4ULWRz2GSRgoBUunWfMtRvKCbWCkF1x4gkrcDDYQEp6xD7U9VLoEGXEKNXAg15Y88e7qG",
  "key24": "274aCwfvmDPSGR4g9Zk8Qr3ys1XFqnXjCbB8zQNR9Ytdv6xCp1G4pmiFVmDWZ3PjSKg7kMH4NTzxLYhKgpLe8CFF",
  "key25": "U3Nez7aTHLZULNWawVPEAW4XcH6wRS4HyuVwv7gmsnCfHT3Jh9sguJiaqK1jFD8v77TPot66C71n9DgfnQYmrVe",
  "key26": "4WaVD9x5KHiRZmePk4ZDZLy1bkGWrxQ9CoYZaiZPXkyoTLwP3c71m5whvdavCuyU44KfpCD4u4mW2spZHzjK61xx",
  "key27": "2HVfqPYKC6FuGxrduB12VBVfbHd1vHnL4tihfaAobgcrrzTaX4634wE45xMn7TpCJSqdoY5Lfhi8kpq3w5zzDmt4"
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
