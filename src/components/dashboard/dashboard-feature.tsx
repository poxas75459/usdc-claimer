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
    "28Ngfq924dMKgQZodoSedygZyjadoAYEXCiS4E95gCBuNH5QgPBpkb5TSh5DNth5ExQZhvpLzCxKWLiPH4i3azyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epPwgGPmM11fXSWippicHQd8f25UUbzKtSYtsjZCMKHoD1ZqBupsi2rZtybPwvLbhytFyw7NNrzYzP7aBqCmspg",
  "key1": "s1sFxRRcKtCDH8JCiadMZvJewgC3Bw77C3cX7s87q2oncGJV3oob3tQx3nfNevuo9aJpRyND25HPexfdNXdWXDw",
  "key2": "26LaS5m7HkJxF1wXbXdtcpxFzutFCgCs35cbMAYhViReJckKLAdtXgcqTw1Z3SPqbEQwcZLR8Y5BsNYf66VZswUe",
  "key3": "5qsoQoSp1pAYjkpvU2vNJdLEaYBvGBbk3qNaUSzMmmx4UFMbJ3Vda5yjiCYBd7XLX9ojaRdR4NAC5DuCQw7wd98T",
  "key4": "23WturWLrrFBKzb1NLXfFJwBMKJdKtKWZx6nSguNkWASTcRkA6WiYRxT7DHQjeTn6Ayb6ACR3h4hfNbQkF92kEeY",
  "key5": "tT3NMvdsbt5HnagLurnrH6SwcrmMcKj8FsckSFJNxg5aYrYdh79YXswcs1wwFh5pjv6QaAo45NmWjewQiY2a684",
  "key6": "4DT9niDYGrQ5y9BzaVf2gHJL37iBN2AJi2ro9gdWve1Y8KmwJQkZ2TtyHDZQKgxyKNMTAsXtXtURV8QoCPdGnLQs",
  "key7": "3gKiYXs8hZhJ2WRsaLHLkhGFEqo4UhMPMk4PZoPpA3wsFCbpj1EJGV51BzRrnXUKh6iMb3R16qngG67vqHhBSaNX",
  "key8": "1ZMcjkRcU6DhRunad7ifNVreAwmhXR5Xk1rvtyaD8cqNo75hB5et95EmCjD7GzzhZscwN2R7Sw4MF15cPmv1SYR",
  "key9": "4HZTqHjm4SGb6deNzTgX1vMFyrsCfRJd7HMCSAqmJjtwSot6Z3SvHZccqYEooYzC9CRLUfKr9ELDVTP8DeY7bpEi",
  "key10": "4JCN12qQQZ5w2NtvPC4ZQNSfpy1tSS4jHXnS9z6J8qNc8DUQbqnH5qNGs1uDDyiHmdViB6fKLURPMiSMSEMf9ChM",
  "key11": "52eMoAkeqrhWTBtqZ5owDJLmfA86smq53ArmSTv3W7Xtr2LEZv6xBq5RgjmEPpGuyEt57HE2FtULT3LtxtByUM6m",
  "key12": "61TUB6yuNv7gDXz6sGreDvkjcWw72KqEz2R7tJBLAQgVkWovCoSFuD2vxK5hRE2oCR4A1bkyek1NJsQtyorcdiPA",
  "key13": "dA9hgKDqzn3aaS88FtTqGJgC3AqSwPBAhaACyDLnXBcMm1WjCMRREJbo1FfGqari3TxRAyh4JTDauEshE4SZqYa",
  "key14": "3HSkNgXYtguC7o3whbiLyoj2tmM6fmxposuLk2Yt7WRTmuWT1u1piX7rBcKK73mESErDnDV8xDnbpHPq5y6hpV2M",
  "key15": "5BzW9aHtaWGwmuu1Vy4r14g2Yor8vbihpmo8zN4GvMXqmnG3Mm1jhyK7P2s9PCs2LjVwKdYnEwSM3G8Ci3WR54E3",
  "key16": "4RZvCEUXNQAGCRraw6Lr7rCPvqSq8nYzs2PK1r4P2uxsYdq3xvqUPaPjdVf5pBJy1Bs6H8VgbB5kHAnj4chtCJkS",
  "key17": "4m84HFBJLKRvFaWFkrYUfsUZL18efQnVXAKEbBzzhXppsnavmQWkht8ZX3L6hAkngtXqzWZgQ4H24PUJaEquNMec",
  "key18": "3qvef4mkRfdPZVxbc4Hx3GfiqiTHM2QixfqH8EsaRjEb98uqg3cnuKV4KogASa5qKrXqgkgTNAknSFSfE4xJSAYZ",
  "key19": "4JNcYkEf1DJPQpmgAaQLtMwvjnPyNjd3NiaAmuoBNhRtMvv54qQrgxDqa8ydGN7omGiNNQJfAqtuFrSEuA1ADvce",
  "key20": "553AN3PR5qFcGg5eELP6zY1WU5E7B5d6SSYa2S6WPY5BiVqkhUmC3poSu25WmQZBqKNdnEz3QWXF4CKWUYPpqoz4",
  "key21": "1mWsc6H2TnuK4cZscGPstBLtuo3zfLU8VZRo3cqHFAXiHmzDKEAy1VLJzhaMozJG3jpY8YpSNQdo2WFrQWFxwp2",
  "key22": "QFLvCLqHT5PbdR3FLE2SpEnboMBCJiZw2LRKSzBxL51NKRxKaKdt8Gkd6WfUqfzM2Wxrrg1wowcEKHWTGsUfZKc",
  "key23": "3kxeJyuBGj3aMAon4ZfEBHUe2YsGPn4em4kCCS24iqUuKPzWDEr1Xzs9rm8DgYPkvUHKXncaEZYVBMg9Z3GWGHY6",
  "key24": "4LXNhyK9FYa3rVoyvFrvPf5nxnUXbDsyYqBdg1s913VTa6E6f3eeUikbCoBgxmVaSa1Z54DcpYtFmsocmHiQriPn",
  "key25": "3QHCfcXWmadX7JsZv8cWKy21PHMMP9xTdVEpNQ4zkdCV1YzDzK2sSxX7TExBmt3nVHF1ixp8hKELsVPxXTPBL5EK",
  "key26": "2tvqoeh3VJbgTCkHEqf32efmikSphaJfCmpDq2BgdFPH9sUZiTNAczLkrg7q8FT68AiHjPAZkNNHCHDE85ZKCTKv",
  "key27": "Tu6i272B2gspVyqPMBLC6cwLoUaULLDLREePPicqdxekAbgDNizG8Y3xMGHHnXozm9R6NWGUdRwEsaWkNQknxt3",
  "key28": "5kcFfYMo7AGF68oSefkCbQc9n1sKsKCmiVk5rJYPVfeNUMP3uqd8LU2yvh15Epj1B3SxbaGSkihDWyXZn8R7987T",
  "key29": "3fDeJzhT7cBQ2S7kTXxdiuQ3ccmKmXYaZPU5wyfVTq5waytUEzcBPtPUivahDK7JQUicuVPMMG7J3kHWafpYX6E6",
  "key30": "2awq1fZNzFWY8AD13Voz8wpMzUv2mMp62SQ6rs6TXfB5FS8udaVKS93Jpp7tszVjjHni1NX5yv12gUGfaGRnkjN",
  "key31": "xLzntRRnCvd2EmSAkqHBbCoeNhkaDPiM5oGeyCDMZK6Ttq6X4KU63pBRmLD6eCKtJeo6HsRa51NGtyyMW8ZTndR",
  "key32": "3VQaA9PZye22ZMKeTf8EmwPzyXab1zy4VjGGTvas9suWGmn2ncD7dqeTRHgEB5SKyS8EpetPzgYhz58fpdzHx3Xp",
  "key33": "A5h5vkweqzNcioJ1tPBDyzzYHVpRrKZawdN6ebNVvMikD4T4ShWGCD5hPSd5CADhrTMwdPPVcftXC9yDM8QDjMj",
  "key34": "3noqLuVme2xT5mt4ZnDBV4W2NrbXRjQ8xkc4nK6VPD3WtUUMB9jvdGUxHaqab3rWt8Gk6xhYf91MkM4Jv9oGSPMN",
  "key35": "2hDoFFNwAtA1JX73xSZSbT64phEbHHCNXV1gGkKM4jvyUmtq2J1pMyurS13RXLjggEDG8avJBUYdbUUuqXLaHa91",
  "key36": "v82J1BUKpWmxvxe3iYfswXM4h5sAA4MDtCzZg3wAjf2i8VcwB98VvCCEL7qxbPwnFt5a6NW6Xi62xR4nAf6uq16",
  "key37": "EafNeLPm6R1MMDJ2tmhqYwnUk8XhnZNesvQVPyP8B7rmLz64nVriGas1RJGEurEnu7ZmS2Gu7qk86jKDxd48JGx",
  "key38": "5zQAR49Ad4asnqPhynmmMKDE82MVHsToYC1VsAX2gEzZB265y1GVf1YYeJZFubhjNS3ReFzhBzZKVcun21th8oGc",
  "key39": "3GfzNtUJWPPYokUu6YWTXy9FLL5gs3mzrtNpFhpsW4Fz2nKkfUvvpvzHjNCsCXvCT9XcbdgfcmNArE21VG6Gmz98",
  "key40": "3EKM6TjobazFJaeCSWUgEVSk7wzBDK2uQbTKPFZPm78U3dJoxMHkeqK7mc4tS1mQzmVaTQ4gQr6oxo6Wq8LGsc1N",
  "key41": "4AYW2La3NVYswcEv2phVB3KgwLuzdTZnJkoCnpDWw5UEgZdvxm14UQgLYPYweqVWUbKf3sAjpZh5skn1yFW2MNaF",
  "key42": "5ydnCYUTfkByLm3nWCxVf1yXGTvDHWB7jW8ZnKL8ecPzg5PASk5b93fSnErV38GeV4cMevMdDQEZsjvTvLwFECsR",
  "key43": "47bhB9vqVidhDjXr2XW3bXMG3mj9E537PVyVdytPzWYEx17vL3dJWpu7PhCS15gzBywR2RwJKzCUATArQfdnu3cg"
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
