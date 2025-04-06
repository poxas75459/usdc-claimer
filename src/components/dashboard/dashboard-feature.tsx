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
    "2KzLZiWYFrSqbzXxaXdQgqy9qzyntBbn9HMZWHWQFZh13dJxtjSQQ6stAKAz5GiyVUgYER9Cv3SFBH4fUEd1ihdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FRpKbmpM5fVFxxwAtFQD1BdyNjAymBNHgebBqqY9wfCnRcCxThNPRGXDZyUjZRpv76TYLjSHXhJxmnpgA2gPwr",
  "key1": "Kmatm3S8ETUtwe1UyCNWUw1pcwVJVQX2LMT7kC9os5QEJ2gDiFAmDyPCLwGuL4p46t25kbecfBWJHHFZT8ej9CH",
  "key2": "gHhp2Kyt27AU5XHis4PU2NeDSCpeUWsuj4cVK2PyeBd1b69p1HysP3Qa1gL7xJFeRLLDS4X2EEbFjvfUCrz2esz",
  "key3": "34Xsd7ogc6z5cSqUz4tV947kbfVa5wNdUkgpq4vSCg5hiM684Xi5cBBoSE9FiXJksj8woXNZNE7eNSuuysbZyEze",
  "key4": "4VMomTZRH8AgAWAC52KrxXGoTGVag4jEbEFtNJSaVEkY9Xzdp4azsmZDGXJHUi581K3QhQRjEYycxAFNPgCWyAfa",
  "key5": "2ybzTfDSBMRyVa2xisC8VYiNdWXdPoyeCSyCtKmMTLgPXRx3eFBRHsBVJVLZ4Wn9Puqq9CDdhuR7b6tERuDzqnHi",
  "key6": "G255Q4cqkdnPi8oupoj4F67v6Rhr54bMCNimgxUQoku9UbfSZ92v1V9pGWdEHWR7VzSAdSz4YzSopTFzabG5vPE",
  "key7": "2QHTzTmT8A3FsEocEooSuEcVgeb1ZRC3Dhd2yYzaHcjAUeVTrG1Ce2rnrnzm2uiZezxkT556ABgoi6WQL3ouzoti",
  "key8": "2USNHKtt4hLUNoE2kG4nDGbiAMjG3Fgub1xTSm9iL6EhBfZJrXVkR25KA5qPTHwQWxC2UPUAbGoecT9x5SZT2LU",
  "key9": "6M9qNsnX1rZs8NFoaB9fv8fRCabCbnFhBe2eYstp41ioojT7wQjq7y7z85AqVQ1sMJ9Xky3ysccGYvzJcB94xaL",
  "key10": "39JpBfmKUm3hMTKijL3MaHkoMXGY9k8gDWTiSBnTMQjQ599bSZeAFNTFaGYaysdw5smNsnVLUdYkUiNj5cgypVzL",
  "key11": "2Baqi4W1Voj2oqVnHSgqfx2Heeuz8S3jyPEr4FFzi2jsAYuBQbmVyi2CkcXeT3nunTjVEeimNh56HwyrDgM1noFk",
  "key12": "2WBaywmJivjv8RTZoHautLafVo8XCBe5xibXfyK2pTznrNLuJpoym3Qj5LcGsckG2doZA8gYZwEsgjNDNg2kR49V",
  "key13": "3yVyaQ9BLoe1BB5qvYugrUwrWR69LpGzx5u88CY7pdKQAFvNsSbrmwsJg1XoZaPngz2VzQXB4VxokKGDBPhsjCAr",
  "key14": "5zM7vEYdSYFJckp4d8PQw69ZNegfzriQp3eHCp3E56azMWtvGtt8FCQ6xk1DNUp7uy7joaTFp87wNFbfAtmth5Jt",
  "key15": "2HKjV7jfr5kg32McYRVb5mZ5oKL4uxW2D4wBJYdsZ4ezPXYwXsjq5Ffkc37Czfx3yYxm5VcNCkE2VDPJhfmub9CJ",
  "key16": "63UaUV14qYpNGyfLf1kx8KUULXeR1TVrKqvN6JwAtU7RtCoBd4mhU7W8YYDdP4gpkaY9dUicLfCFFT5mmdHWt6u4",
  "key17": "4CpEXzRWu29omFoJjD8pdkreQFHBJ7VUFA4b2MzZeyaoVcyKG6VTmkH5Mu1Lia7umXNTFHah2BqvCNdAkgppt5EK",
  "key18": "3z2bUhssj7kT9pT8obhYaM75Pg3peMRK4oB9CxsGHaY4mDbzk3WDzaLo2hS6GJ69Zm9u5dLimy7Uy1KDu1Dcf1f4",
  "key19": "5xSGzaF5hUTuBobgJW3m3FxgN7LhddY7PM2RaqjNToGgFA8ZkPPSZm5dynAMKBVCqnKbmQkqfLkyjGPUYiPXUKVS",
  "key20": "2E12UuH9t4HqwyC5p8ZwUP4n94qJKQyePPAzDtTtD9JYWtozkiE1tmX897mgHWLsscqU3Lc9DketXWyvfHC3nNWJ",
  "key21": "wwnDbuiN8rt8eQ4i3y7YjisHjp5VvqZ1heEix1AehoADFCbkafh5fJufYgvxQMRUpgznL77axic2V3CpbtmjzAw",
  "key22": "57KAYXirWo76NXPnqEooSS1L2w6e8DGKLVNKMFuHz5x3mpo2khLuBAWQbTpYCA6An831Tq1SvYtnUsizzbpffiAv",
  "key23": "55rbxGFQihnFdfdeXFome8gUEAsra2jT6sJ36PhWrgFp8KEcw51SbMqFwk8xXShxB9Suc93x8ksbxeTPuRu8izs9",
  "key24": "4LeA2gT5VK7AhhsJmyW4fV4ejM8NFYSLQGszyufqQdJ4WdcMGiFUbADUhm34MvWEFiVuus3xnB4dLMSsn9fgHiJB",
  "key25": "26aZbK4sZCpvMVwYrie82hEDWQ7FyRmiLaE38Rz2uhiXUdDeXeLrNFbSnU4J6pMFjg5nBz8tNxdywny95n8E4XMD",
  "key26": "5xVR1jJ13cpt6X4Qr3VRqWHUgMujnKpPBT8eo42Kafc5ZimN2r5JcHf4P6H1D88d25ajGcpETbfzpU7H6XuMJKFW",
  "key27": "2jzV6cgegYogjwDQTkiUDWdCEP89Jrs8h1Y4cRJhABZLVYSoYcwPA6asewpqSc42SVxJQ1ZmSCEVBFr1RqHcA5hH",
  "key28": "4fWu52psMX85yZVt1GFxsvwYwppPVRypG1EBRz3qnERQwT4kem7fKUY1aznBFYZFEQpfUkQpQmVd2h1yckhTUbA2",
  "key29": "64FUa4apXadsmReoYXktkqWkJENf9mEL2FtR4sMAssMSicomMAds72tupF2G4mWtf154a3Kup8A6mup9kbUcHmgn",
  "key30": "2L4fmfbdfecMyKiXENTihz2sFSvPUWBSCWR4KXT1Q7pB6i53UJeZDgvothWG3Pn4zsbof22GpQsR5uL1xK5pAFjo",
  "key31": "4yKsZhUA9aPiVhEZCRA7nLTBeuz7vFjUzQwarxz4rZXD9d5fLKGkjeDPVnujcCmGHncvEHqxGxV1WpJpeykSM72h",
  "key32": "3YyxPyKXEKt8iDk7nczZcaMMX1sKrKnDtaKn6CEjDvJunxHDTXCnebhPUpWmPaZZyuTn9oRUE7GjoNpVAJbJ7QcZ",
  "key33": "2fgw9srvqkA5KiHJnJH8zrCswq2Eq1WRtQdoLqf2CcdW6tDFgwnfKMHjkpTjUFRfZTpbUPxz1WZreqeoAtDZ8Z2J",
  "key34": "4oS3sBdMvsgC6Hr9Tb8wUbzgk8gK6QihEHhou7C6HJZr8NgpjAqTZEqVeivut6ZAZu3796fLC48q63LAyXng5nKZ",
  "key35": "SHe2i7CGRG2vmjTD5TgGsozxzpEqxtfXmm1cn7D8kbbMkgSDuJ6qe5AmB2WzvS2PhVVayhvfNyNYMYBWsFa6WLK",
  "key36": "2GDLc1esattyVd7Hx2XTkhXiRuteN6rTNXhPnXHyBdahExBYdivyVcjKTBdceZBKQSMSTG1Cg2Yf96xBCMXGE8Ss",
  "key37": "36fwzQDhcK8TJv7yo4puMnmXKHP8UEjhxxnuGgzfAdVDNHS3s8aoSqAfX9h8pKrE83Hz646v2hSCdvnyUtRNThfa",
  "key38": "2LanPFBLTi9ZL5cQuXeiS7BqaAcdqwDVVYra3ArKSuBXtBjJVvf4DbyLw2aYXzAqMvaQr99yWnmH78Ct8rdrdfmm"
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
