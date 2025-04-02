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
    "5MVcqVCTRZZoaTiAtYvDfc3ehkMw9DA5G4qjSFiNpqKhpRx1PjbWhGLGzo4nCg2PKQCMPuqEJfDvuPAw7Kf9ZSJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNwTLMp32v512A3xYkWM1EQLyTDkbNk3ZaUsJABdg824qp4wPyBVy4nFxCsMXuicHB2VtYLoTSw4YnnTLKvuF84",
  "key1": "44iG6juiEtyNUYj6hffaXQ1Hkeo1qW8RTRy2ATXZoRVboGAgKiVmnQvTPcbBTY2kuzuyQLBNH8DU1VzE8ubMmSEH",
  "key2": "2ymWsPmRXivY2fTrWmzH2EkVkKC8Jk4ircniN69UfAiD8HCkCHCbdWiN1FvPPUURc1FXfTGs5X1gS6UBb4znUyw7",
  "key3": "4q2EM1Ka137iD9zPLe1BBeNXwYt2vhRCdisT6f7HzNdiPR2PKF7gbJa7xo4PkDBtgfwP8R1t5BYRFmaiAxwWf49m",
  "key4": "2yzGHkmDCYKhH62CrxdTsibAGdsXBhGMZahJkyuiuJrJBvRryXKbse3ys6DtwYTLpKpTqo4Gyrb7AAxL2hcVU4fH",
  "key5": "5ShB7jWfy1yUkjqWyFRS1vyNjNQa2HMYJwHnJRWUNigfAyMZc2MFzQfXXdJZX6PsdtoQmqwT4yeT2mM7k9yTzScL",
  "key6": "bsCRkHYA9UzuKx9P6vSMbtj9CFruF1xiH1FHfp2qqvNxL8b7vntTPpnQv2fhWu3QnMWrH8V9M4cxhYdoeatAmD2",
  "key7": "2JpizZF66vB5cLKgXMerVvv9gqbp1kByA33T7HDQiRjKnqudaHS3AhrBNiR7mAF9pp2GhUFbL6LCrYbVaVQcytRE",
  "key8": "5ShQSPraztvGweiYbrZh5BsSMpTktPaAym6nwsyKjV2qqsPWchokipevwLBeHnhUBeN65r9c1mYmEYad9udUeKYB",
  "key9": "4i83m3w8RAKA6NzsSYQqp142kdXVrWgxejDQMUzZocqCWrnxTBVEuyJsiZLVKkYB945xRJLv9mAvZdMz4bYBv5jd",
  "key10": "5EHjb23uxAqwHTNCp4kMhWgxdW8HSCK4FTsbpiSngnRvDDv5kc4Unq5NEw7Yph5Vf6WbUCswG9Ds9rmbGjZXYBJS",
  "key11": "4b7ysNS3JsxwcCduASWMGyrC12b3JfybSZXfPW9wuXSyjy6a7YseewDYS4DSzXmUBR2Jt5ijRGGw2YToSDTQpDis",
  "key12": "2FLLTDfMfUF8961PFE48eawFdkTqKHprq1Aee31WarPipbqm5ZXJ2fh7d1Y2yktLzpRXSuGSGXs8RYiZBzPyQmGo",
  "key13": "pPpJrc8EM42cW8VpuB7Wtzp8HwRs7tdSxzUW5rPqMHdEg8TVHDNWWjts6Uu7YfVcxyrHxEjAHQjcevo1X6YBdHn",
  "key14": "izfaBLD12MrkLzv4kiY3tmK6VAZbiSGmgch2ZG5P4ubHmVEy5n3QnoJ4diHAsjcuiTuMETxttNDgksAue4fingj",
  "key15": "36kgLDGtp9Kbg3s5D9xiPKw6W5LgcnrEW17uXPWd5vH8AuW7JCRSWW75xhMzxQR34f8JkxESJnkpzgHQp7abC2Pz",
  "key16": "4B2qrcww8avddyge5THsADdpHjw2k5BY3ZNrpijfHLCMHVQMsXuTzKTsePKkVfpJnBVAPVFjh1gnvTdNWK6WqYJG",
  "key17": "3yncB2YjF3aX6nKeQCmvWAykJSykmXd2Ft7kDrzifUmcQ1oextPdSntwSDafQzthAdV1as3G8wHW7RQh5B7Q1rmu",
  "key18": "djJcnLW3rYmz8se9FXMPH8HAfRuRHo2AY14gxAKkB2FctjnpdKN76oAL8UmoNTvEASkd2RcnjCCUsRSzbpM7R9f",
  "key19": "iyPn8rxTCK3Ws4qhDJKC1p8Cv6qoLPZj6Mvnok1q6U4begYeSu9JW9iL1s7WufcmkmGkSXhf3GW7wWQbNLC7kdF",
  "key20": "3Zn3kYqnqDsUt7U88A5BpxmtHRH4QwnixuV2PRDo1n59yixmGKd4nWLfgkJH2Luzede989V74bKYhM9qsK4LTxDK",
  "key21": "5EH5GtLEzm5cCUhc3aTw3VTfsvcuuo4bdebMu7wYWmrKM3zcbZw68srB7AGRaJjz9vTahrQQyk1ViS4Wa3mEhfzQ",
  "key22": "57DVgcqf9RmfKhM2gMpsoZcUdFCPLfB8T2CeMEQbBUNknispYMts9tqRhEWUxNnCBxzboD3a4kN9DDZNiipPTd3Y",
  "key23": "2LZvAxCkZLPB4qggzBg2YtkevtrGYGm41uhjNk5XTXB9HXMzYshHjYcLefLNkLxw4YcwrUAT4nWW8FRNF7qnwAXK",
  "key24": "31TtZGudpB86YCbRaK7R9VWc96JBjsV7aA2fogTxyoSJkMaDTJ2A8MBpoPiudFzaBL3Tn5xWJHsHLquA4FeBuqHT",
  "key25": "2NbX2FJMguirdUNCLT4cDiMFY6MsEExkrbi9EYj3uxU8fhgsKJnoG79VuRNiQ8gxwsN3L8MJ1uqUKkjDSU3i7QiJ",
  "key26": "5x7G8AWKm8YzVXA7RxNMAYQZWqtUJeokviFWoQUZP4DALRALbZZ5Hnwb66e6AfiSG4CEK3a6TwyfHWBnpfqsnZpu",
  "key27": "DHUfS8PqoqDXfyte1LpsyZkyJVtBQHy9N2zTvYjUxvw4BNmogh3juFmyABSgbCiUfFstteFLzvDnY3uCcSpvwEk",
  "key28": "3G74zTFNfNv5QtjQf3TGmL9THRLLqfpTwUwTWLewSwvSPvDd2FcUNdrHo1w4xtuumQv3FZJcWfTDXiAoX51Qc7WX",
  "key29": "4SRQF5X68uSkW8LXitsmbSSsWa4PiqVzdn4gu3BdXYg2UuMd79Vx61TUYxrbcnDWmmeWSyaKKPj5sPc8MagjeTx5",
  "key30": "2TcaavTnXtAYqAboqgsxFSPKpmSWkHQYMd6VSb8JyuYKbvkp95QMw8GzSNLyxKoP1BGbcET4PeL8X51M6wkEt7L2",
  "key31": "5qL1QNo2KkkRZ5ShKGbbxiCgi7Krvaw31hbh7Da5qaMWHGGDurLLxxsFTkvbZtefDJcBrF3Cyzg12otR2aGC6QJu",
  "key32": "4M4T69yRpTQXfzvs2ctjcnaBqBfobs344KmvuUCM45wCtd99B3BK1SvKzKCHpPXJsyVorLmrCeVSu9FbBnZryJvD",
  "key33": "2xq7q8Tium7NLMXrWZsuqsSBrMwBBFRbFvgn4kGvSP6k1pGWmVv443CaghpZ7MrxJSzFEC5rzfhJoYdjGWEUWRaR",
  "key34": "3WeZwNdRbRCLWnPFG7kgdkMBtfMaExBRQ2GboxfZZBUCcsn6W3AR45qnnYSoHJas5meYDa6AaQXfdnTv7qGrAEvQ",
  "key35": "Vy4DSKYnwyMsg7T95SpH526wkhbs2PjY2oGeV7KHFYx7AqHpsVGngL9ZmzcdHfxUaznZnwePnRsercdEqgsDtD9",
  "key36": "5Qrn3TT2PZrs1R78A12ZV2DLdcQaCnRoyog9ti3fK83eaQxLe2mce62beyvyYbiRS9KceyJRxSY9bJCxT85XpFau",
  "key37": "2q4srxXH7x4wCQVxFcku9JXLYvejbmLjiLn4TqrkoN9E5G3sCegGMnoFRCG6t4fRHQJqYmkKRv4q47kiefrZeU1R",
  "key38": "5WAe3yHTeNGbXACnyRaL9JMxJS7tVY4La4Tc9YeRnNB1QQgTKoNx3vV4ajWgpYBtPaT9snCUZuz2tfFQZBFYzjMc",
  "key39": "dMxMAim8kRCYgPeZ798bngAN1PZfQT3adKukyTpssacs768MDkpNVfhFHkGKmE8XJ1d43WSrb9zcqrdxCk51bD4",
  "key40": "3oTpAiCUahwikcSnr7SsHzofGNRzJ1sx6oDYPqbgQVNeo7sgd5BiSJJqi82qRva1mvaFDHmcN2LuQi6nfaNie2Ad",
  "key41": "3eFAz6ZRgPgR1nUuH9dbxbZtho1rcNdRhyVWJekuvr4TL9s5qhA9yXQ3K82Rg4BGMdY1YvhHJchwDYUKMWusHMFX",
  "key42": "38SPA1wZbrmnP4eGD91SoDc75jm8gzFGiMPnNn9t14q4JeBNP6HPNFwz4UQZKhWpw8GbzXqk7obrEEY9GRgNQoQt",
  "key43": "3eYWqnjpzeoVE5isfzweSaEbRLzhBaRKvFPtjzHgNmNrRUzb9bWRMyVd17hCSN9Lx7vsUZzum3RGQpigruMZ3kD3",
  "key44": "LJUNKnZK1Mjh3rGupCXd1L47LQBg6x2qXf5Q5DyaQrn1vWGzZXT1PsHp5YpxFEvWZbV4SW7dCjxTiGV3VY9h79Q",
  "key45": "4FjsPYJf5cCDMXLXz1iBi53avKJP1g3EnZtfkTAwbAZTLTYpHF7sykKwyLBazAfKz11imwadxvjQPBB37jZXkuS8"
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
