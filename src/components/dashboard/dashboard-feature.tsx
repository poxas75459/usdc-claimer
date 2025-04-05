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
    "NCAihtujBmS4FvTBF9cKfGjU3hr8u9LJ9pLSGqoGVV1ZMDGrqSRWpDjxb47XN7JMxkmJUxMhWAqkMcsMprd5pTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631tGMSSsTfZiZZZrAPkUYGrqTfnCH62kKPNzMUUs3Ajn9bTuAsKJ13V8SZPLUN41fKyr1f3pP92e8vjMJf1onKi",
  "key1": "2WMomphEeCUqLmzGAv8bkJUxEU6qFh8KNFTdLECqeHKRAnERaETR3yyU9PpkvM8ZQ8bE7LQsnnFJaMGiJj1XLFqz",
  "key2": "pSrNjSXePvUd5wafVt5BNaddkUDpyshaUwScvbaaHaBLNeQ1A3GL6xm56S6qtDTJGccbu5wyfFpHaeBgMGj6n2n",
  "key3": "3VWt9xaGwt8KctQp3QdTeH4zFugj1Z7xv2tNyuHTSNULMkD33ieSzvtqs89qCfQhpsVjszYro3AnwMfF63u98DR9",
  "key4": "3axgrTRULkU8TU6AeFMcagmeBSsXAXsujT8t9vJMAvRXWWWbffACbZAgTN3dVwQaME7uSMHVkdfodE7GDtJNAHXg",
  "key5": "47bVm6pbkzkzoAzgdqDKHFSYVVDhkiQipi36FtmFGuC7Wmzb1pnLmDms3JQ7Lve2nAp1sbH7hhUPotb8x3VL7F6n",
  "key6": "2KL6GzddpgK3BDoEwpxrPVhcjSz1TcRSXLjf2JeuoQwVEqrxDs1hYr9e2oBrp22XDdmUXgcou6kpzdVSPE4eXJt8",
  "key7": "3zGB38T9KpNMzTFjNmz94nsAFKz1cJHWdqtwVqbKqys62i7MMhpPLzoWoKCPrdsbWEnCprdB56YQZtoEBSAgpJsy",
  "key8": "4bdEo8gB4Py35FTLj2Dusq4QsUFmFUuq9g29RmcYfQsmPDPRa4Msji2wSAAdXgV92XkLTWrQkyFA8HxJKb3nZpeD",
  "key9": "3JXjdp3qdLkLzswoEwzbwVBJDgLdbwn1x5V9Z35tuG3awBWyRVd87f4QSjD2XA24oA5hBSrd1vGXAgLHaFzvzErN",
  "key10": "2kSLyYEGXR7k2rY3wo2tvCJ7ce4XgURN4tAx3A4rxeh2Qde2w4xReRrrdvcdraPP4TwwbwZn7unqjf9sMoaHa15m",
  "key11": "5yo8V1fNVg22ifXniJMCc7wjovenAxF7Q9XaAinSK5aDwLDuG7YbTZgYLxemHqesWDFsvX6uGhKhPcpyjsjym1dy",
  "key12": "2SBvnDydM7jgH6SyHwSipjfVDZKy6Nsa5NbiNW2ggh9T3JhksdWu7Kz74uWHNfYzgoaMXaDA9MZDBzuPytxjBaH5",
  "key13": "2stEMb9BzZUimnhnhPStWwgq9CBoKMv6kJwGFU7JcmEPXeFCbcThAnzFrnSr2GFZHLN5Bega1imGrNPvHWPVkqci",
  "key14": "4UAd2W9sbf1PpLFGEaoCkzJWhc795PEBqyu8ptNqxDAYKSwiiZPco26q3FXCJJquNxCVBM49rbj1MEy4HcaZwEpM",
  "key15": "5A4aUsM9BaUeimkZUEfvzxHuUvpdMpFWThWHv8KgSMrUayQ4qjvaNAPhFiPQUYcw79aCiT82t2EuXEwSSL497rw4",
  "key16": "5312tyjq88GN9AUaie7kHad12FygQ3Puz1MqD2SBEk258mfbTSfhcFMJMMB1QBDa975W9HxJ5Z36r1fMgrgRqEFg",
  "key17": "45J1c1TEbpkKT46cY1Ps4FT9GdFcgG2bDARVRzsgqAfTbCRt1yT1h9oK4tpN636x1zUpHn3qZfZcpTtCwS2FX87B",
  "key18": "4dJPc2cPH9vrd1HGTVq3i5Cq2oivsaQ7HTNHqCVkcgTFweu4yEBTRZT7CahdhrT5JQ3WqAcg4vgtEQRfguYjZRU9",
  "key19": "9AguaEGV4zVtp4MD71sUF1xrEwbPB7j7vghgXr2JAo6QSeRErLvYxvQch9BiCNufyLxNWQwfnrcBATYZWgoUkmA",
  "key20": "576QGpM4Q74Q5JJX1aqC6PbjqxxMBsRtX3AMYc2Jc8aktYT4Rk791LF6R7FgpAS84QKiBmysJxW1UpZgQwvpg6WS",
  "key21": "5UeobC2zvpHEAUr45qWePTS2N1zHdkq3BZYZbNMopfkzDtqjMKd1id2WKm8QwLJFJs2uGmjekAfeEyJt7s9zGndC",
  "key22": "23RvaQQEE2D9b341oFrA6ZFwDXnRZQRLN5EbRop7FAQXDHjQPFgHpxaea9CaXzJ38n1cHswZoHpJXhvjyr7jXkyj",
  "key23": "bMgTZ7QhNRnfUhuCpJ2kdVQfzwN2f9BWhotWx3mksYpeqHkiGETjmUdyM5D35Cy18tuADZ2i7NBLTZzf9ydp7C2",
  "key24": "bQC1DAKsGJhmuepBdXT5inuh117ZNNfJcDG8bHKvspHxCHWkwBAf3YSdFTJuLkvwfSsccTUZSwnPhH9b55iQEdJ",
  "key25": "5LvRqU8NeixLVVyEqfac3TwwFZfSk4ctWSwVVtp8pzmwFmKQogFnXizqEH5cdWATZyNQxRgJYD2jnyz23NfWPWwq",
  "key26": "Xd652LszeoiSbq2WXiMRvpNa7grt6Jky4ANRmk2sBfqgW2HZxQRNGi4wpV1QYWYQx7ySezLW3M9AVA4LeAvssTL",
  "key27": "3opjCAiihzHGtsig7KkFp9EXwyJZxBRQtqSneqeykWGJZW2V56pBztZjd87kG47E3EEYfQUf4aReqWnHAt46pfNr",
  "key28": "2bN1ZE8PnK1jNwVjUw3tQ8cn3UzMWBxS6FiAHCSA2KyEB83ke3zxaWMAz71rbmdrCVuJSGmkfBWeNneVg1YbKQ2z",
  "key29": "PNY4Na3Vvmxt6EkJkjSVeDg3gB6gDSEthKSvEC7hTqRbpiJpYZZ3JJ1FzgKxzWgymLK5JD6JYoR7AiqmWCzbxVD",
  "key30": "3ybGFGGftjyWMEs9nbmiXxAztuz8pgjP8JvMXWqtF8Jm3Sr7uE2UeKyTBmWfWyrWsXTzzSLjLhxzcaxGyRytF8sw",
  "key31": "2PFvgGqHBSPAsW1NXNeZu6jt5gPSr5xy5EmRjRRh4WbcfiVKpYzENpbznHVhaxEYwR2mk8hzYYb2MK9UkiFyEkk9",
  "key32": "3PbUvM3vTLJr7szJDdASYPb2io4xeDGZ4KuQnqMG3UE76uLy8rjNVDWaNMHummuWWARieQQPXieLDPEmQn7K5H8J",
  "key33": "4Efyf9QQYi2bRhsiivv8GBLxtfx2uSYpGtkD1NKHnmnNHUAE6K6tajJXG5PFyxpxUUKvD5REFHakZ3P1xB5RYZuE",
  "key34": "2Vi6AYnrnnUjH9gY1Z8ciJdR5Jc4aiRsn18nRCmXHuHnip54vvihD9wnks7QBr9aVEtn88E9iowfM3tLBFWu7MJr",
  "key35": "9F2heqDG8zcTagJ8U1dJtjFfdn3DujGU4wfg29zydjLHdSxPKWDJdku3yeRLKRKoM4emHy1UCTV2err8bFBJKbc",
  "key36": "D64AYQvZBKd5yBpWzxcEy1L9dgPDBxp4tphYjjuTf84srMYvuceTgBdfoQc5tMedNXgF377vKuw8NDU5Do7YsGb",
  "key37": "4UjepH7TZjKEhGcw5WLSM2edNP8pKEvHz1Hu9KutARV7UEohBYFsgqtWr7kyPhugqZqrsekJR9t7cMddqtwV9X3x",
  "key38": "3HNfbzKuCDAoGqM1EUu24gijNmDgynSgAL6iDCe4YDXFraBvzjRkDfxC713EZXBrfqbEX1jNNrPB4Muc2LJgh8Pd",
  "key39": "53dbs6DjgzayTj4kRJ2eAGHAKaEiDDGZ6BBuJDuDt2sRzTvSUWsGx4N4QXR6UdDwc8bVofdXSAbzVKo3XNKhTuL6",
  "key40": "349DvRF4c9j1ztx6X7hdwPb36grHUetSP3EUMQhzJrhvBECwMujrYQr1XrbVSBbd4m6SSnoZx2p4y89JHknzax7i",
  "key41": "5odR3aTAkpusQr8R34ULrbwJeA8yt8ydw4quc9CT2NokQct54VfRyC3E6wZ7uqkj3UzQbnrfh5DXwQ9AMRNwdCp8"
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
