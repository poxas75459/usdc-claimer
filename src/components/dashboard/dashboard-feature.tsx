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
    "2Qp66ZEFcjL84bw1GFWoL8dSQzKtxkerKw3X4t1dPwiobQi2v2tUzPqqvQZ7Dkm4mR5E1iDCrG447PqkJYiEfcNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fRTtDFyjoSmJNeEETiqqNyvSVf4sYQoCuwTr5wArhtNC2hJxSejWhQBdADwGasXGyUjA7LBqEFyhHDuguVfJBA",
  "key1": "339iqRCpaj9j1xLmhbvYehWv8pUp9pLzFLKzgqQeQcd2ExGgEScLWMakSuJzvxD6TFDWFBpma6s4fvMJrz4cVPFq",
  "key2": "4Uzm3ExS4gQKoqUCu7u67QY1SsbwJaZn3yGFWTBegeYLKh2aXXdcZfBzBv1Dqx9jSWoXZNP3dUyvAzUUCX2cfsjj",
  "key3": "4VzGFprqZbrYRcwopLYy7Cnw6HFah6oYLVdUgRi5iM1rCwbhkLDt4Qz6Tu2uWxnAfbmPsK8hbWnKaDeZBRcCJkos",
  "key4": "2V4rkU7xtW3j9QCQkHw3ghTnnET535QoRcwf7pt5jxE6j5fy3eyU34F9SeoMxjWQGwQUbMj9gBVtnSU4KQeLZTWB",
  "key5": "4X1zXgsoCA3nY6w2JcfxjtfXKgZJFGerudbJADrNWAaAbCJBkxHWaFAPGCHuKTGfzU7ScaGaazhNXNK8hdxU2k9B",
  "key6": "4i12rJZpKhwafj2xKNn38no8iuSUHgV9yAS96haVTAXxhqsDz1ZyFVrSLtBiYNSrBBPGMdjkMhd5RzwRGhWSmff9",
  "key7": "Jm7MrqTbtFYtCLuAzajfhzBWiaEz3Y2E6CS7QHTf2qvwPnhDkZCq78fgJSNrsEz7FJHA7pyYRxukagYMPXFTfw5",
  "key8": "4KCg8VsQQsP1xjBFthHfwU74YqGptQCKiRbWbJ4cdd4bxcgL5Tzgbtux44wgMW1jvgGm39NttA7mgKqFBZ3WbYYK",
  "key9": "3XRBfVKx37SBZSa7GboyDiPXBF5nEKUEwRPojH2wwocivssqJuwuXAgBFZcty76aqQvz8VVeCpjiugPGoze3swhB",
  "key10": "589HZDHNGVTobwwBM7PRBRNMD283iw6dQVU7PeXqeW931Rbu1d9jYMLrycEYG7eALXBmMTna2a9eQG3rpnD1xM7b",
  "key11": "657eb3bQq3GnvWnGc1Y2JB2mqF89ChJFyWVdZfVNQHQ6QVGVSGj4coGYmPC3LyY9WZ7hKMvkCZQfufdnAz6FNECh",
  "key12": "4ryxZgrgEyamjXJwHuaq7nTPCnUmc1m3DRKm7A8aqPtheKXzk7E8QPsDJXMP6N4jEnTmYbhxFcbhkknKx2rhLxTs",
  "key13": "Dpz5PtNWHAZK4oDrifENQ9bo7KDFxkUjCwbkSDVsLzPWsvVeryE4SjdH5A8jnY6fAA7ybM5mepogpBhgrppHPxV",
  "key14": "5YvPUU4abtcdeX29r4ZqPRro3HbaejXBKQJW6Ez7E6zdTiVsNuYV6JYMuYA77XrPFZVnj4mT44J91KNYSTmXMKmV",
  "key15": "GwQrC64iFTUrWHCGBp2hJenxDYx8Mz9YdFdBcaUATk7qPUFznY9on6eVxwe7aiokcwNQqLCT7YZZ8DvBWpvGjbu",
  "key16": "2xf9c3p7raCcMVFgaArhsAw2svnWnarRtDeYuu5NfkEb7vzyZC5zJ2biqsqw6Zq8z5ifPa2Pqf54q1CKsL5v4EB1",
  "key17": "5gziMatEhp4T5Pi2CJBUbkwQuRzGbVjf1XCdyQWohZ2NSzVuMG59sZrEDkAWiGUqTS2f8hq2z7jkGyCx2qN7Q6vn",
  "key18": "3cqT5zWuLNXV2HRHNDdzuZNTKHw4k8cPS3x7LZzMGqXbLpwcbAf2DPfCvR6thd9A3myUkeHJTnZMmgSjGgzN8j5Y",
  "key19": "3jBaSki3L1qm9MiJNYUCXicMAQ4Noim6XmnfD9k9rYonfhpdX1hBomasxctVsTE6gK1wSyh3eED1iPbg9mtDDZvP",
  "key20": "5gkeqE3RrjyYqeW7Njwn7Zj2BLF5GZm2jHK6PdpkPbfDs1Ch7drxLGe4xv6PyLrwKkayhSzN6ce1p6YCKDuZhXpY",
  "key21": "43yrN4SKeEUHjvnYxqaUQuaLya5uEfpTvApWjAqnvqxGWiz1KTRiJjbQNSb8KGauigS1pHhfucTN2j12wxGbTdjL",
  "key22": "WTJcDKfPTg3Qu1EscYmdyz6Nuo4sRJzcrJvEu7DexDaDVY9KLtcy6XscomNiKsay46S8XGYw97kj45cqQggoyz6",
  "key23": "4SbCCfBtZvkVtfAtoKPYnYCaRsMgxUNc4PERvi3hkgB4tvCycheSGGv6UFnUS9paj9PNZ5BVES9qvd8RusWs1BQM",
  "key24": "4CyLBtfRYwV71FxxdkEsVVERLUt6YHQr1BuTkR6kmidDqShrU6j4x91qpDnNL7pjiTrSM2RsWhqzViHExYj3Rr9X",
  "key25": "4VJh95EEq8H47DcpdtbL6UPeHRP6RYStkow7q4rMArY7Dir7ccydQehYVgedPQZJHWEU7xoitNp3qV4fcB4FQAQP",
  "key26": "64JFLDevpoDSisxhTVMJmqcuPnkzJusr6UG8gQTzsHvKSWHFei6oXCbgkN5fnChtVzben8TvSfy1cXMxfk9dr2aJ",
  "key27": "2jwDiiHoqKkdJ3ic357Wjwq24DmgE9hjHgoie3skgs2f2uiNaCMr3ZjDfERKhMvxyAz5PskAc6YMktGwLKp92CfL",
  "key28": "4pTVdH7cb81HM2HNWfTSnXunqPywMNHke5aFiGvKgJ2DXvfC6114vz6hVegu4rPAL8XbUkxSNcba5hG1nDB2Kpej",
  "key29": "4P73LgoKLUo65AQYuC6JGFd5L5NWNvir5KEjmGbyNqg84oqL3NhYcnnqG3D9ucDQw7HDGCvZxFoR7ickPT9fS496",
  "key30": "3DjRqKuYcbLTugd5JX2yM85y5iCZVNEaP22ojSeBoRwSVdcgG6wo2KGf8VD7WqcLPKvG8TTGjFvQRQcySn296QUm",
  "key31": "3WFJiuhMyGyxy7chN14zWDYXJmXpMYUmvpYua9VYr4GwU2FMRC4ZZpvpjQxXt2wLkdMLM1LNsEKBwB1a1ZQAy1fg",
  "key32": "3dFahdgZjHy2DLki6CNn4Q4GhZmxJPeBdYqhyrUfnaqFhA91iHD4YzyfY6z5oGhUvjW8aVibYRBFUi4RTsnqEwHd",
  "key33": "4h5jTmJZhZxMPYB58GNNgpz9aBEZLmHHbnUzCuYSAP4FTuS6MCMwMkMi6PKYxP5s2rPw1agnfo7b5LXfppMepJ5q",
  "key34": "5BdTaFBwpjk9tXY8iXqfUKK288RqzguM32DZwCgzVb4LjUdjZie8R1BDfASAA9KV3kvabBgrcEHba7dRqWvqb4wH",
  "key35": "3PAFcAUrFJcytWBFratp5nCmDvehg7oktA4VyseT65MKBuCGZj2X3GoxGkcFJnYfb93PuuJtWA322wLsPSJdZNi4",
  "key36": "2Zs5yLDQ2bxC9nDhjnLrz1HLmpGUzLMqgt6x5FHJahHHg5WdBcPvoncVxCjAuWfxwDCjpv7PTEwnu1MfiNJkJY5L",
  "key37": "27faUXC6qPNtT47EcHnkbgem3aJZK33YoJqm7erH7Rhzf3N2BDsM9Dke9WTxcYE32uFtjFd4sacAhtZdpvwcG7QM",
  "key38": "XuJkqPTnwEoUKL6J6vA37zE4n4RAdHhLG4pR3JhtJFkNcQuJPrifmQCVH97dBgQKePUGqMCzkAb9vi3B8GBcg1f",
  "key39": "2LrT2e9caTbhR7XUzrdsD7oPiauszkPYZ3wxSu8GWDdzqTJ4foCn6nzeMPYRmCQ1VpvAC4dBiHuKg6G3nEwEkroa",
  "key40": "mJHMSCqFXqKA9iYpGSoyakRC7Z4PV1tY6LsMmHGDo1GUJSoarm4WawxMR7Evby8wrVYFEB4LSwksb6yuroZHBjS",
  "key41": "2CGvVmA2uWKdLCMWa2uYbwitk8w7J7NbkQSfsVPiXn8CS9Xu5esLHCWzn84kQdJVBK6RP8ce7yij58C3HQH68BLz",
  "key42": "JhpQZCbJ6Zc1eVGjHB2BtXJiGizk2uSyb2sAZfUiwA3DBvBheJkzf3LT2ngbjGjcerc9RAULZzkmSGA5yiHw2i7",
  "key43": "KXqHjAKjMpUc5fnJGxbqC5EQHfUdqGSWhNZ8zkFcSX44eJj9VYYDENKdUavNEPXdfwUQgpSuK2tY9q1JD2CN25e",
  "key44": "2aBw2BFzfegCwQSB5CVZSr8msV61k9MB944oXQayB7HghiY2dzy5Rt5DycD36s9GVhKfmXeBtU81PYsv5hy2159A",
  "key45": "kqU9YDEBtgE2jmDqvSBppdeL1YaRCxuPxjrdakPzAQk1B3fkcQeypdgBcnb6KwUq4S1ivcDADGcimBih6zvBz9G"
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
