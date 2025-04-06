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
    "2gX2yNy7oMAN3m78Mm9SB1Rp2pnSorv82WMnHpnP5DM8DVnMQwCaf79no5rFq1heMV34fxSBvMjuZFRJ2aVtk3LX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JKqaNbws9zQdPWLvpVghFRL7rrXVMqphafwPTjj8Ea7emq2BWgyQd1KEbW9aT7nX3Bubx2ihBTDqDCKCXG726N",
  "key1": "3rcjrN6nNiCSNSwP4UxSm1YTDdDboRr44iHQ317spkkNZtauuNAFQhb43D5a3iwq3yKysJTSvzr6He2BZGmX2Vzr",
  "key2": "4DAAB1bdNU4jmuu1XgdWTvt2k98WQHZzitMBM7mvEckBLyBHPceeuyG7SU2KRdHkqm4wHbnvLDbnrvVpyj11JUYv",
  "key3": "2KK1LxnmMW6b8Efvmk9bdUWtooWHwJEDjZ4UQWzjoKsxM7tZrNho8dWrFLMRFmCkHPst2EPyRcTRF7xGeik7wLtA",
  "key4": "4S7BeV8JhqgMtFnhD8hMM7t7PSh7MbMjBxJygYDyNVTsn3RMLW1ASwcirXLZpkHH6uJea3DN65RVDNg9YN1hXQxT",
  "key5": "4gQiKzbMRpKZnk6vE35cghnM69KzkLS7pg5EpBz9N9ztcJArmXY1L8e9uBNga5nYQnEwqScZxBMx18o2SPTRYXE4",
  "key6": "5mwSNAGmjUxT2s7FYgDf3zS5qKGPqeVshMSHrHKLBocV7gnY1iH5hLho4xQWcWDKb7QQ3MTX9Eq7gKTt1ffEVHW",
  "key7": "ihB9hjPMrstAqiJhgueWgbYgVMNnsCznFo5qiSX9KvTRaYWm2vEz9ujf4mwYua3PUnNZvd2qUveFm7jWafP5Pq5",
  "key8": "4foLaTKfpaLuUFqcKPzvdrRaJ9YbhqNtjwXeXiPnnGKUJnypogqUfBAZX85ZEvYU8Gh6536V4GRCRiofYWRvtkjW",
  "key9": "EuHze12zYFYnMwBzhBcSWXorMaBzsVhwhHAQtwM3px3qeE64ghqDt5PiDaaCasB1cotS4bdqhmVE5Yr8VhQmHou",
  "key10": "4rjVZ1Fut8afKF77RTgVmJPEnwYVmwpeMqZuimEZSCJwEuxH2uZ8sS2uwDhMWTwgYaNhE1YCmf1sx2bjR7Mi2AJu",
  "key11": "mUtv17smCUgbDZRoty6Le6rESHrtStenipsrmGD33xNv9EY9tkhgbxDDcqvDQVnYNpYV842xyW2SSP8EfZdQv2b",
  "key12": "4gHswT7dcvBFLQw6A1uDGWHnAQXaUtS8kYQngfrhDmupkgGeYNUsaQGNCZRXDYNmF1qja7ta4wsbkEk4NS98X4oV",
  "key13": "64dxazh6S5CubcuU35nbXvA5BGudPsv5CLZtE2VTuv4r7xvULFJwz51bomaemb3kqXv56F4gAocQ5h541bsrCyQW",
  "key14": "3LuGVy1mNRNdM9q55cujykM6c2b3cikx28HjZsCwJfHBhZ22a6RbF5SostUWX7TXCoygV5L4qovmwdHNtLEdMpoU",
  "key15": "2Zqj88SD1yiaH76n87aTBv6d3FapVp3WBhF9NrzW5epKYAgHmKRd3y3DgkQzkrZ9sJ8vqZdM3gLcGY1LrpuoYwSv",
  "key16": "Z9pb72ReLnq68tPt98bRyPu17n5qhUiwaAgWzJGspdcpMwxWWB2Vdab1gT3inLWioBC6tMhZmLGfMUrn4n1j5JG",
  "key17": "2LKRHp3dGoqYbmFmcYK6ebBg8azQr4zrKvVm7NzwPNSUcJweYuAFZbgswLf2JFYFHcEF9cx2CmuoRynEHpwrRWJ4",
  "key18": "3xbjkNd1A6cY2T4S4krmy9uNLVHoSGRZiS3vpBNVBfu9Wi6MR5ymYv5ShToPcvB9BRX6wRhnkqbAVjc3YdCUfScw",
  "key19": "5GZXD5HdANg1sGZ8AgCkeTxahCECYtqY8f7Fgcdg7dNLdp8C5ER7b7nkQtvyd8ac17LjgFuEadQqjJUzrRUqPSCh",
  "key20": "65AHzxVLKh5URPPsriAvHhV32cz6snYTjsqt3hm2ToHpHqdTJQx9U4DEaGZKhFbwHvEs7tErmqD6CSJscpFuSeVa",
  "key21": "5DiXPWArkr2zj1G9Y2ZeXCTkmoR3JCnE46Kt3EX8fqAKZhLg6288KxKo8oAERpdw328WcD4dHqgHfzD4kXyCsx94",
  "key22": "5a1RdhDPRqhYQpdiSoyrb4sHcvd1DnT4emmiYo6HqSSkzykviwNXhMUMbYsAygX6KuBQrUNX7u6pAt1CF75DohUX",
  "key23": "5LMcYv76Pd4S14mfFuF9SSkyBjxwrkLEFJ3DjvpRLJKf7UvopLoWYmVe4NJ6a1GA1sDRXcoco5etCAB68JtsDv2W",
  "key24": "2w7awH9PBzJp6BgyzbQEAi6ZkNB6jVGS8F1i3QjGZP2CejZn1nrwjECPsWBM67kDmDruCwDbZwvukdWa9GKFXpar",
  "key25": "2nzZ53nFTWby78yBpNFLVuogfZqG7SrK5D2ZVudKWwPgoazAAFaJfHajXyZg9ugPTa9NyaJ8zQwxRhMgCPuRPfnt",
  "key26": "3eusPveLGtGdzxqUFzgn4M5LBzy4vnWiQCycWvS6qiXsEbMtUtWRsTuVfaT5wmTvkcR3NyyC6DkiKUSTgZu5WqRs",
  "key27": "5Kp2Mfy7WkHhv6WmWcL3h6X2P8ngGMBX6rC2YsSMMhjzF9PzyLRzW4QS9VGNrycnwAsq59MoKMxXK4LqtdfUEUzQ",
  "key28": "4fJPeX5ivNJLCEamtPMMUSEpKhJzeWfg9WSDbbF9b2UKC24Vm99XenQhkXGm8aSbCGPac2XW86G7nH6X5yVyuQSh",
  "key29": "4Ue3MDPGcRUoiKgoa4H7XtFHVAUjTqg39Y4GqyumauyoSLzmeAhD1XKQuWqfhCdXPZJGsx5iJtn72qoKZsW7PtQk",
  "key30": "26dzqgYdPTKdWcNu6xo5LsWEXzsRtUsW1n47QBT4bU5ihhMJqE9CKCx5gWevB8yK9XayY7dpaNPMvHLifzXazjTp",
  "key31": "3diz5PZtEfDzAE3ncg16QkmNRjvz3ueM1VHJNetkfBKxzwfhVAR8knZipGb7d4rLoPhCTeCMs49hUqq3L7itCt4A",
  "key32": "MdqcU4ESk5r6ityjcy6VbixYuDUtyeHNFfNb4e9AEpU35asbR3ctKZGUwpHMLgd4fH6gEitiKwHbeNzR1csiy8S",
  "key33": "4dTwkLZ6XZaqNgRSCNqckDPkX6L1g4Qo38iHx1kTrhqRWsiiK8WLjVmjB1w4R5dG3p2FNGL2sAUvYq8oiRtefx7f",
  "key34": "244BrdUbRBPivhhUSuAUroUvn633LDhjn6rQA56SdjWSbx9JBbmRjRGrhGgsHawoGsNi3XwWb1GuLkVwdACzsngp",
  "key35": "58Hc3wtY2aXgGYtpBD1upC7EZHmV6hu5bsZw8YeySZSqBiSAvpQsebdBZfDimCgxust8QeZDf2UoDuvRNHYVNumQ",
  "key36": "2cfbuqG4ffvWaN9QfDRQarZypzsduzpi3QhZjjZ352VSFQou2a6FuE1gxfSzEAm5hJbEpQhnwrC2U4uayC3Jtskp",
  "key37": "43YGMR3J33Ec6S9Ta5prVnv3FjwZD7RAbcvF7AiyCEemwhmEBxoCzzinLaz1Yy4odSvUyRh7GuyjntBg4iKvtxWL",
  "key38": "qe3ViCWmCQo7v124dLrhcshCYvWjcakWgPtJGJUsBgW511QbbNqUsXWQj9bCT9FwPUFyZhEmjW1g4jsfAUx6a1j",
  "key39": "28Zc5PYeSsgjtQT9C3yDoViqMxtoo4uTnDG1jJhSNnDaT8BJZMpDoHeDyZT5nrNmDiK9j6XdCMiVUqTjTrfyC9Ym"
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
