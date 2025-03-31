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
    "3ffSZ4E9vpQPckYBhRA7VAfqonsHqGXdcaaz4nhrZ61921SM7vxhskP8EyR22ZgyMjeyeKJnKUjyGfUt81PvjdDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39f1wxhSGekZj1nXEx6X5DJe3AD5NkpLmzta7L8aJquJFiQefPMBDVWHP41Eag2qSf8vi6mbGK7cU9K3yGAQhvPK",
  "key1": "5t2T9YTLfzCEayE9WFkMg33FHgjE7wm6WcRkUhr661qtBGKE6b7frN3VkywzyhE5aitCvAd353PAXcct6YNvqtn5",
  "key2": "5xTqX5X3HKTKUqEhYbs6QbxHnDPUYQiNPpFqZkDHCRwDRBrj1eedQzqxEG3jdVJoUbXz15NU4KEuoTt3u8aZ7r5",
  "key3": "i7uzfcBtWjUEPMWg72bP3NHbQbqt8RZA9gQBZGrqbmYpvXbkVbSC4yeBu7uD2Cb1kLG9B2HxoAGQUMgfYVAhXdG",
  "key4": "3Q4xct1hmd6QAFsLFVFjpqv5JvcBJLtSok47yL66CdD8DCD7bHR7x9gbvw3Njn6NZFsJqEeyJoQmGpWLfQbNR6pj",
  "key5": "BSBPsZdRFeQcMFNwEsVMnuDyLCN3QeUFs2ampQhgwjuiw1SVYFMmh6o2GoRNKNzU8YPx5spajoxNu4PsRVpJn26",
  "key6": "rCMgBhYt5YHUgggtrSRTe4sXrpgQaWtWyQD42kX6p3MaNaQkcF39a6fc8QZX4nBBK8wuvHJA9b3vdmp9Cn8HhpY",
  "key7": "5nFKecWpAtNEJjqeJF7F8GPPbFmhZCVYKNavsTwApX87xBu9MZP19BfuDeAaZfacWM68z8DEBHomDz5FvL6z3RsD",
  "key8": "3r83AmYin1jNFSnoqpRjhssgZDNWWdAyRwyHWt46v66AgwVYifV4H1BSAdpstkzEcNQhM6ve8Cxw4QoMuRd2upLM",
  "key9": "3s2gjQATGNXEhEeaNmcv3dkL2pRrF4Sz97Z5xp73AsfwfZWeAywBkoEyg76iv35jhMPR2ZZ9Zk3j6rnHAwXVQshR",
  "key10": "321xxTaJutmsqPWd4iuv9nf5jhPUgJJ8fbvXJ1xFvoz3wrEAmenD8jVnvbT3Jw4DoAgAsqKP2jocxThaXQDxGfj",
  "key11": "f7Jdbzg74tQzXrQy4ey9phPz8xPTRU28y5xeCGhd6sySCRVjxAYTjDGvm3iw5NyJu1J2wq6Lbhw8e3Yeg2TgNqH",
  "key12": "cahmwoeWX3juxUbrviwuHretk1oTLqr8f8apaZ74UL4Upkp9Y1bpmTYytgEv6J8hd8CA88Ve7DCtj9S1bF6xJg5",
  "key13": "3B6QgNK5Ht4A7UFWQd3Y36o337qt6PwQzHjpZTZGfuSwSj6DpE4Ny9GxDdekcWQxjLGREfpf4ymLwzpHSG2ETQhA",
  "key14": "3zZ5eZZtHyWBEb3xUoegTgcDjoiBPuaTPq55Fh3gaMNihsjyPDUr36ohtYeThkXZVyEjtbCLJXK1r2PLA5jmMu1Z",
  "key15": "5HidUXWsZeE1La3QZBJMHR9bCZEHmhWaejGwUe5nWxMpSPS2Fk7dF6R4YGVJYbYfDjgr3f33BmA2uWVukBR8aksF",
  "key16": "5XbmXpUVLYSZ8uDVqvygKj4AB5cbVnCySKmm7YkLiaJKgiLFGTAYtYSTeeMicoUewi8o7aLU7StiBH3r5LAA4izR",
  "key17": "34z2F3SrpbFE7FyVfbrSmJmTWaFcAxd7J636KoHy73iM6UmD24mZ2k7aKjjrtKx97uE7o9PxEE5DsmXCD1ioeiDL",
  "key18": "59sebyKzuaqpdAkTt6DzmrfBssxojfcGjhKuyDSHPZrfWq9Kwckim4WBDwc9gtukkdPWcCqKTq8LPPy1iCqsEL93",
  "key19": "2zbYga97ZVtc1sHvHPi2XX5N2iR1arNZ9n5hzsgiGTjjPGXy98yw5nb6ZqTvkLFR87L3pscWdtmNJGutEpLoWep2",
  "key20": "4CEfXRNXAj1DrxxZFs1qVsu1h9wSsJY5d7XaLih5thqxqJxNEXinDF8theTsiNJUHGjZuYrbxYYzC3BQNJ4kBRXf",
  "key21": "329FPUiRS8H6Y92BK85vDWTUdmHXmfAcTSDsq4RfvbfrWGc4RaM9nmTu1wqEwJU2qcKXg5LVGgsGh6ksy4CdXQga",
  "key22": "3WntnJ3nRA9rv5cvDNXw4UQ5ekJE9MNATHwQv6X1T1xmavCPpjGSKir7AMwwBCSep3JRgd5xmqGdAWTcJh7txPwK",
  "key23": "3AyyguRr1ksHDMJGzjSzWfouPLySu9BLb1znNPFVoLZLtd6NZLpiV91bA3SRVe7SpCS53yWP3ynBUxYzVdvp2qcf",
  "key24": "2ofTKuW3MFhC7CUwUwVFxw2xvCFMEBL6QpQ3MCv2M88trv6GePfjDXFTrStTSdyhYUCBAa8wmC3tsGmDdwBhRkWq",
  "key25": "58fcGzArHR4WWjMkNWsuu8x8J21v6G33GpWkUdY4dP9axskhBfB2rDH6cdfdH7LkhY2yT7p1haLWrqDiQbnW2rSh",
  "key26": "2rm8zjcU2AU7SP5TqhJJJeraT1qU43eos481aG7GXLMNXP92Zfs74E3MSHiaVfkmjbuL1VTWGdZewRXPzfymEeeR",
  "key27": "22oUQtKAyeFfeGNX2KQZEgUK15UG8xxuj63iV9xc61pk3ECxxQhuN2CV1oqKBmTHeGCLNad5BLpzuJmRxthxQxfW",
  "key28": "QfVJEdxBpXzhMrcqHvPk78WKwgbgPA8vapyMLDsJgEUGgAbFEoQBfQqQprnMenNXYj8H9ERiCQrsYQPR1nPNt9S"
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
