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
    "3jVgg4zsrjERGTALCAL2Ezbun3nzE5wQ1CkyNfg7HEmNrySRVWLMHv5S6oZw3wdThMyNYVy8nzvkdS2yWT69VTUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8pjgWTw1GfF5me5U37ULgGkAb52Hwj3KPxDjtizyjS3vL5iuQ2EngPjVpESDbnwpZQegAPSUX36qCtEhjW35Td",
  "key1": "2bd8PbxyLRDovGiwnW2dkhdJuaANn42ByXgKD3znDSSAqLy3LomhJ5GbjTtSidRjKt13XsJZin7HEgcWTw7oanVe",
  "key2": "4e3wFPi4wTge5zXKjLqWH4Bguwf2ZqJ9tmgSfMX3BXMZJpfjk36jAjEDCXL2QQY2gHbgXJePU8KxDRUAWQFxcL25",
  "key3": "55RgGVnKAN2RWW3zQphr7r9aaDq5VwqZVhKa2EQvGyQgL3rMwFLYTP8vmKDDF5aRLBkPojfKSunB17YsR2JFp3rz",
  "key4": "3FLiGsBhJ9qFTFz48br2qzNdTjsXgbAhkWGyJA9KhCnZpyXm1JziNjVCzhsgqKbBdfohigX1ffXLskjoqFXS16FP",
  "key5": "5SycYxZxqMe8tSKQvJWQUD2xZJNM33BFiFVXEtW6VhBYaReU9ZdehyxF7gYwGYfx3QZp8cCiTsZaHqJn3FXC5dNg",
  "key6": "5EVK6g2RzZxoUnbaXnrKgD3jFRVcRmYNBHQuRgE27JDGNTuo8rue5a8zi4LVdFrX1cApuYnntJkiTqGLgFaYHuez",
  "key7": "5Ef361abCdhyvkccrMGnQBvMMfHLp9a4sRgSDgn2dYiTWAzqyTrqqGtNoUx2pqSRZ1cjyqHu42Nh3s5NbgjGNJwP",
  "key8": "5F6YMVoUUNZcb7XkGfhaby4T4fdqAFj3D49oTJau8KZ2RYJ75UCSKWJDM5PLnzFvHseK7hqKKVJaLwD1TZDBDS6t",
  "key9": "561XxEpieVtsvgcjG6T3rmWXkC2YcETq9r7T4BR7gU2M1eThDDRorG65bNeBHav4akDSHxm2udW4eoTJeu7L37GF",
  "key10": "2skitXPo6XDTCaYBERiKrgr9kXKPbCV8GD3mBaemcXgKXbCZVtH4EaDFhDAD5LzjDoqErTncUbGFzyKrA2CvhJno",
  "key11": "4HYz2RqHpWCpvfsdmjkyYCDbCgNcap3T6JczSB17TTKN8WcbM8aFq9Z8WiVgyXm7D6koxynoH9vsxKCZor3ioai5",
  "key12": "5Vab14cJkqcZChSP8zQDmxXS1w3XRsuvi7hPKuLU7xatvMXCtiEaShuSAmd4coKDFmSNULG7Zj6MxcNbafLbAWP8",
  "key13": "spSkzYNcZGMEWi1i2gSvCF5NPNbNPqLJ8pidYiCTxug2KJCmdwAoeMRJQixC4yUY4EUBDBHwJHx4u1H8oUMWLgr",
  "key14": "2aQnwLCAq4Bx6FW8Fu62vW8faaRrFFnVJLUKkfJ3vsyNsegihXBTpuUNZ5JyL39KmjgyihgVLK6remsSjhMghdCU",
  "key15": "2UsiFpRtC91sw2y8dSTb9VLEzoDunergsriS2wh6CzuixYPkC8kWZxSS71zG8CD31gbYjWea2dptSpmUQT7uiNtd",
  "key16": "4NcvoWwnK8i9EueurLkNBaRND7YY3Lr89ziUmZVpomVDPn1dKSUxyEcuyzy5DjFH2mJ1dAskZmDcGHYvXJz3QGDX",
  "key17": "WrfSbMd57KEvoy1omjguaw9ZZasGmftCXRyQtFivnyCmctdfoXXcEKx3KtDqd7ohUqcXt8Gy1ARFj8npDRHbYjY",
  "key18": "5FtMrkkpTEyaSyMycWBN3EQrsrRyDpDcMTqUWTNVT9oAYDUw2SY5Qe8aBeeWjkmCdWfnqbPHKcoZCUeYLuuqWfGB",
  "key19": "576T1FW39yaHpRjphja5aXuQH5byCT6LzbNtNbF4v35GaM58Q2q5jocpVDnJrVX9RgkywX1RnfnNm3xLYmCEfmJR",
  "key20": "oo2i7zJ2YysiztECE7DxbvY5ciMN9yR9aVTpXp1zTidWDm8m9DQwtizZDo37H3Nj4LEPYHNRqsNkQQYfaPWHQ83",
  "key21": "yafdm95imMzw9PX8FE3osDyzMpcAz9DUiBRrq69rPAk6BRPdxDT9CQL8nNmswzqoMRruaD7G8MMMyFqF3N7K8Q4",
  "key22": "M55hmigdK22iDiAWacVisBbBQEyFiGxHKUw33uRVnA3xHxFptapFRXHP3Lx2kTwfHKW88XqknJt4BLyDV8oQJe7",
  "key23": "FkpWEZf3C2fQixTP7tk6qH5YdPpogzi51HNYV1kiqZTAVfBDkuw5VjV8ChYix6vBWz3BT2nejbr7HBF43ZXdbyS",
  "key24": "5nz63viHNahPyz3QBvdxWWynDQXaK7Ye99rHhbikMtAaFJCnNg3pbjGACag5i92abWgjKZmcmoiGgoxmv4856sZe",
  "key25": "zQPBn6kSeJxPBKNU3gRtjvGWyyLPpf9bUjc2YWFhCM1c8VK3NjnmXCCxao4tBuqX7CR1mw1jRFHBoG3T87At1jv",
  "key26": "4sdiRj8nfsHMYFp5Gj89wNQa8fGHWYkkjYXJcwGa7ok89gaj6VSxmWioxn2QTmMyKvEu1Ys4XwmxXVta89nLDdCM",
  "key27": "4uXG91KTHTVwFz4yPsuquz3cF6rrYE84DsyX1WrHHBxQywWvaL1hsLnMajCjnvtW2fTdzgGYqxfdSncCiTg6kcvQ",
  "key28": "4fF4BZeD5KCw2Fzxhg41f8G21aoUuJh5sEZgoUVqNKXgx6yvopjBHRp5BNbRh4zNNCxcL75zJ3wrLfv65KYFKot4",
  "key29": "fAwVAgjvxyze4qrPYfCtUEG9aEo16eR7KZNHa8oGVbZySmrspYCt1BcL5ofGfbXvewAHCJr7rkD3avSP6XaQVgU",
  "key30": "5cpZqW34zps7xvEhZc3FHM8FMKiCsRc4FpC1RHZnFBkBCQw5WwMnT5mN43XYtNZFtH3VAqWBZVvyL9Zj98mgmCbL",
  "key31": "3y6cFWxKDTBa83YtLAoUgxvoptx2bjH62e6psRViCFXv1nNcz7VPgG7sMkGcJ5yKDGzdGQHbYyXA8riqh9zmuE9R",
  "key32": "4Qdf3pH8Ln3bfc1nEG1zcPftgcGB6R2A9FTewaXPnrFQe4Ren9CwGj1KxFMWPw8SSsER6EiZ1jJrShPHZ9WhqTj3",
  "key33": "4io1brmMXKBzG1KHB3CnehJj7ma3PqCdd3Sm3zDoAXcpQSvo6PCGNLrn35JfjjSiavMaCpUSUgqNZC5ZbReHB3AD",
  "key34": "2vJ4twwAwtfqNfyWVBF8vZBHZdk7Hu3djziaA7ZjzR5kNLkV7sgUdTLPbSubonYcfDPpvLprDg4fndYgDZL4GMqZ",
  "key35": "2HcWQAs35Uah3DxtFyN2ZiYdDHb2X7Pyg1Rx45FVecTTwNUDT63ZKvEtQ4eTTJ1d43RaArDvZKWM9DHf6NxFadhZ",
  "key36": "4kMVs1MuiDc19Tp8U7Y2sLV1JdAEkPC13vPZgJsPTqPTuQDSh2RyQH6nbFy6bKPwbeUxkrocteiaPiyNNermkStD",
  "key37": "4fjiVXYCPyrxSeRmhPXUC2oYGquFenu8riuBnbR4fwJTesuPBLj9TvqePQEG8pjKMPAC7dXk8ykwdy4gYdu578nx"
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
