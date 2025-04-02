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
    "4UrT1LS4cjA83YG48axkA1DoVdA9PT3F39zRSoyiT3JFQyRgkNhmtjwjnaJs18ULXx98mucaDaAehHqRuyfyVAFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfLCEu27SLQKF9ffwAzrkUG4so7e1P7EEyndbRwAg1A2XqNfCv3fuZnxuDDyN1fUeptMRaLxkVWmVTqzrXUfMiP",
  "key1": "5z1a5APMiofxD1CYNDz4ZfPhBBCr1hQRJNRX7KhsghyHnurnxYNuVEmuePykbuvQ9rAMRTWmP4fEdVPMvE2UGZY4",
  "key2": "5c7271SwzySWBEE94cbLDMFBKmqggBSqxQCP2JH4xHHibZtQF9PZoUftrEfTAgVf8EQfjF5XADVzXcqhgj59Un5V",
  "key3": "24kSxL4x5q7YPGW8ZvYV9utRtNHHAFbmMQ2BRixL9aPFcVy1arhGuMfX5XqtS2E6t7vAhdtbYjittTyJfRP4zjzJ",
  "key4": "2XYwSZeU1ow6DFHjmagfHZRfLSvpkXnB1R7iAoMbohyFL44qnAv53G8LHZQULrXhheTcu2HSomMgRPm7DQGtKqVd",
  "key5": "4zBKxxKNSJztoYVnZEBb4hg6P1M6LN39bUjdayB7619DCBDAeMet7kVjjD3Pq1H7NNsSQJ1P37JHEi7SgzMt6g4E",
  "key6": "54geE9DB6nbANbm9ysmaWkHuEzfX7UTLBRd1kqe1qDC7gJNHjuPpvkPsPcim2FnBUDh3Btj4eEYk77jzYkuuAef3",
  "key7": "59Tb5uvMXx3BAhTP3ZVTGdZQZaBgHguJdpynYxUgiEBXZwyGiJLECJggHEWx789yczW1bQWuxoD2wC3fSECdEXHN",
  "key8": "261W6SQy9h7av5SB65LakZSa6TRKHgRzyBFBQaUFDujoi8FsyhcCAijnM34sgkh2ML88f9S65HufXbxYX9H7wZPR",
  "key9": "4yctiecC5pH3wkmWVGAcUNeBjqRuuKEJpet3LqXvnNdVMDZisaGfd5yb8DmMU3S9fzMETnbmJXNVyhpMpaK9t2rR",
  "key10": "4de35SAmFarevu1Kw91uYR8zAM6oDtF7uRZ7EM27rrR3FJE8qnV1rADXx1JxUcqyG4HH4VT1G577L4obV5nKjTnf",
  "key11": "wRQi3exX5dcfHtJ2joEChjNVL5DGJXccE9DDmxGhfae1X6rnUmBSo5ToNaEgu6k4ynX5nngiBSXmvM2xJGcTNWR",
  "key12": "3ycdh1fT3Gkkmq1vzA8eV4oyVEuoeYTrGGErtewhkJ8E2WiXBcSJdDjTyTgKxPirGqdKTpTm9nyFZDanDmycdtaT",
  "key13": "Bpst5UU1QrjmPGexHvv7Fkp4RWCDdkP7UzP9GkGDhBqDZZEmee66FpeHEL6cfopgYXSKTV9my6X3UL7oKGikYff",
  "key14": "XjnNcoGX3CFnk5zdZzkpADo69h3YjENHSnEBsQ5cue3Mx5wPi487mA1hwggfgrYN9UL6nuiNn9JnyewBJ85r8Hn",
  "key15": "sjWQbZ5Z4r5JxVsmAdNzgcmC9YESZeiH2etBtHmBQWqctrD3LPhZMXi8ZEkzqZsMLZbN2fkV35gJVehDWoRoRN5",
  "key16": "2r4aRZJPCxjwcN6DvCbYzakiTu6CC7NVSE9zBVNnxJWQgN6YTXKsuKtDyjpWqzYkCwvDxLqcii6yRkkvcyE7q3a4",
  "key17": "4ZkkN6XTNevqNsq6BUjDxjgZwgt9QYos9rtp3JEYRDrMfDck2PgUUKrVBwsg355FkhQSy8TpseupW15bEeFoZLBo",
  "key18": "3zeKiHJUfqjWBM6gLbPKYR1sH1p1yTPtqu1GdjbFW5HsPsNgjdwqVreEtqpKdHhWABqBSew8fjfn7SckgLPvHUvj",
  "key19": "4xsDViU797xDTDgTUTZn6EkYXEBNFTm7hjxQW1H534NL9FLNz7vQkqCP3gVADSx6wKBUEGXY4gz7E1DnvEoar7uf",
  "key20": "66UqNPEvLoyvf4Bx6cuCYfELLf2g14oNgJrXJWFsunBGwN721Nv8fgHhs2Errq71ESKHW8L4KEmgkm9CPWDhMuf7",
  "key21": "LrnP6pBnoLzi9PbaYNz3CqYGgwpYYt4eGE9TfsBD3Gap8DzWmSou3H1y9btB2cFXcPoxeSu3Ax2PHUWAkedkED4",
  "key22": "gixin164BgUP5TGTdx845ezzQETGHK2yZrWCn81BUqB6Jx5ponHeApJkoPYNeQ13Nu6h8CBnW1rwif9FjhScDBe",
  "key23": "645nwxiKayTy2rAUBaL7WjmYuan3EH79HEdM1WFrdrXWuc4vLSKA9CudLcEE886oGgQPJahCEhKaKwCByp6pxNqA",
  "key24": "2r1eiGdY2JuQfn5okAdRVTBVMUAu5XkcLuvixeNADVWoMYB7CAgmQMiTmUQXRtwuD837F1cufwKPdYzexuap5dc1",
  "key25": "3ft4Ad4i5DkQBWPzCHdASHd1fJcWXjWqAqAfvagbWeZoAEctHbt7AjJ6Us747CYLNvTbfdVf9K7buKPAtCNoZrGZ",
  "key26": "JJSUNF3RpY7DvTF7dR6LHtMR3FDdEWPX3R6jvfD1hbGRaQoah3AmY85SNZ7DqaEqLYs1w9tQkNfx4Xmz5zbQKZu",
  "key27": "Ruggd6oKUGKbernCSqTGhmqWaja7KYAay6gqnV3PVLGGn4RincjEBwBPgSZaChdtUR4j1SMAdCqj7yKvDifeity",
  "key28": "4uHaf4bMz8MmAkXLw9AffztEWF26JRqhmjqzg6p9Lrv5fH5VyLEHTzTCmemUy2ZavHqC3aEL8dWTgnt8Sb2dCAQR",
  "key29": "2zJBxrm49KXcRYiXVggRHhYaeuuN5QSYWvxzRELVW1ivrTVEMXHCQ2w6yXWChicqDyPZWED6dpQXvMJGkTuCuu2z",
  "key30": "5xZEH7h2juNpzivs29tA8cKu9ktW96h6DjFoz1jw1erYHb6q2B5mbK9hXE4ufnQpohLHwvwLoYsQdMwLgkZ3C7sY",
  "key31": "3aGAi9jgytPX4w6wLCveJ5yJmjHYtQ7KAjdkwW8hPGo2EWUQKSz81kqKsCkJ6nhRTAzkk55ZxMtNPPNEG4HZfmax",
  "key32": "5zwLnPnLArCtgcCE3yoPWFRJNGTv2z6HxRUoGAMaPbzksGVvs5jMjWbryoSAXF4K9DVpqaLA8hCeXzsMXFJJiFjY",
  "key33": "UWh2DgPqvUBoTGW6mPSE9Pxc5yqGWn9wrAoc6H52Mkki47Y7KMZcKDc9tUvvq8kQYseoEqgsn9LQYUjye8a2o3F",
  "key34": "2qCvB4s6b4uis71B8dPQHiiKxCDXNCdFMknA6Gr7uS8RkraB8MBycca1W2uu1D72dhQMWC1ETgsHLiSr1qVdBMtU",
  "key35": "2UzCi2wkAXdFxtgrSQJctvssqHPKyhkDpyWhjhqFk7sHW4wr3rb1cMNPuNm1vPDkwwsHZs7Ks2dPhcfegrqir1dZ",
  "key36": "3J6x8RFeUTcyfkGnqkhYtT6mxZanJEeFQeVEv344SgGrdkq3PP955quBV5mFy8NqvP5AmmQkcSpRZn8wRoXdZCYx",
  "key37": "29zNmw47hXJQWAuyWYU7mXaUzafnZUKVWLdS5N8Pem7KBo9zvxbkkS6pFhqPPKcnamcAoUZh5LtDCiYZv3D9Bhf8",
  "key38": "61aJ4RwKFHKpxToMVdMR1aUVokRf8srNB4QJ7Pn44W57vecN78KB3qvRLa3w894pKxcDuJE1WcEBg9CadybrBw3j",
  "key39": "4nZnZWyzkDGX8pUzZdPFS8WXN6tKyz1Gx9nC5YFJ4mWWRoZ1Lh2fBhDorjkokMEM1qGuRgHtngudAN7ChmR5yfc5",
  "key40": "3wZCc1BrydgZVp2Wxh35xi4x4sNhULzFd3M5ULXtM91UReszrH11rRExe6vQzPnZKcawwkxvCS7B2qmByRWAg4YH",
  "key41": "4pS3mQZeKJmd4wAek3NWcrUTEkYa7vTmmHgRGDujDb5wCGTJRNMPUeUU6NvVmSA8xzgEsX2NwH8C5EK2ZUzEriMD",
  "key42": "3KcbURF3VRZYmQd8ErrKMX8xZ3ByoFBf4Kru3uCV5b9dcvMoH7G8bVJgLDYJSszVCRWMzY96wpdhKKjXpZnf7Njs",
  "key43": "4mnSW4Upzp7nEErkfBSbXGHbFfQ5F93kwWvNXeug8H6sVaKvDYV79ouNxA8J3DS6bzWYdiGfoq6tiNg4qyfK2bjt",
  "key44": "kwNyNWpneRLJooGDdcho5P2fpB21jeAXuiPtn8RwqYiGXji4EyYw1a6KJtdwt1XrdqozYBnVDQihczxXiJgseZ6",
  "key45": "4p3SBQ2ghPTWo7XVtgN6VDA9HJ5JoPtzjXyVMBeF68pihnAFxJDfq24heXLacJ7eDwDo2TJQ712H7cY2ND6nsX17",
  "key46": "61jNBPz9sHbpcgJ7YZKX2Ab4zf8U9RLBjk2hPLeGEwi8M27i8nVrq2sviFzKhKxcepDzkABPADZsxKkDsREXAsci",
  "key47": "5d898ez9UV9FEYgsRWChBdnFYjADbF5AF7aUu29KtXQmBcD2r9CG9qWoXgeXxeAC78U1sEn8j89GpkpjEAoZj2pE",
  "key48": "S2Kccm85KhwYS4SxksdLhm97CModCBt5361b4YCVex8F9M4rCAajnLeX8TqaHcJJVK3jdBb7M5tBWkM5ftL9sf5"
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
