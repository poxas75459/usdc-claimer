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
    "5JqLRoVGwm8mCg6oCheySLpJW55KiRZD3xwCLTqiaLhAHSkwam5wNfNF4MsQvyjEy9CwzmK5j8xZ4H5nS3bRK6eK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dT6TFr5yAjzfY2jwFUjDFp4bkVtQMwQZtajBETvQbuzk8DLjqBBV5kzFHxJvHawqULwaw7VEGE1DjzqQhPaybuy",
  "key1": "5fBBady8rhRb2FsC5d2o3Raa9TS1YZGqBdpFTWq6W8DL5WkivXu6PJTd2bLbdPRgfe3XXYjRPioAH3TEWJAi5Dvo",
  "key2": "4aNPQ9ZogdMU4cnGV7NLPzwARxq8P8PJ6xLRsxVawWpPsbQuLcovEvAT2tsduxT3iSABgGPS2dQTr6bPTMSJ3p5w",
  "key3": "2caMVBemKqr21TvtZexUnom5vF2xZd1nRYVwZZQVp4oD2SbF5RP1pza2iV2nDRSvx1k7P1kAiaHQXmgw5qffjzbB",
  "key4": "29NA5EvAbqGCAKjCHPV8vrLAZimNh8Ro6sdJTwZTYXewD2uANTUtP4EZ4rxmzCSFJDVMghhT5epp8hixKqFp9Bc5",
  "key5": "3KysP68wYnQA5UhcgazoEAUV7W3Xqn7BX27nHGJ5TENmaii2iMY7mj3SKVg8c4fJYexaMxtyM127boCwDNf6hWBK",
  "key6": "5tEomNkKT14KB1nY47hsA2BAu2G8NTgwzYSBKgfRnSTVqntUvioLsbYouHPVNQyKDYvHBxryv124UxjdqxjQ7miM",
  "key7": "28X6RQupPRmcfz5Va562kT8cdndArSXYjUaEzyy1nuffNLiedkT9MUtRgsTvt3eZrcgZA4rjYPZ7Ju3Y34vSFAJz",
  "key8": "g6PfhBp5gn4pnDDUBF7xDZn6dhML9fubDEb7w11C1soTuem3BLg5xwkS1zjFHXuS7t9KfgLz8691swszeXaZmYZ",
  "key9": "64GeTzNP8NZhPe6wom6GKXFeRtwqW2SWT1jeFi8faoZWE2zshs4iZ81TjWrRV3yZdtUQMKoVKsevi1TiTao8Wda3",
  "key10": "3jEcNKT17DgQxXwM2kY2fP7A6Tyy73GLetDpsWspQdXhG2i4S1zUuv2tenWw7ka3zg7eN9soEBkHKCVEeuUB5e1Y",
  "key11": "4YWHM5djQzAfXYaMjv88WW8LvBVsQixxaGJEvsBBbTDUnR786zkQodcanmWXWKj3yJihVsiPMqYKKP2WBUMN6NEG",
  "key12": "4Xsgf8gurxBG5gfkToShSTgNce2w4911BxKcffpc72GA8k65a1gCbQmUmVR8vUnyohQqyxfSY1YbxZzCrYYof4X6",
  "key13": "2KS3QtAeyzoh58yLGdv5AupJzuoW5w4hh5Gnh2mv3uKU83ma6r1dXtgtjTLtBt6jmLTGveVfsbdBs2ngnPy9LiES",
  "key14": "27FRowyyz66oc8Y1RaUCfA4REsRRzd4qqbrvReXDhGFGoDKDpu97Pjk1CsmMxPuD1EEdNdDsCXkdMwV6SGK5HisA",
  "key15": "22v26tmrL6eLd82c8heT7nwdUfcAuywtRpfojTwzBfrNDWJguArC3Cwk4SkYgLio4ynp9Cp84PcwHSoxEqYNuFj7",
  "key16": "55b1yneTabPKdbM1JFGuB5oExeYbuLgNzZz7ywAFm8b8wYkAoaRQdRPYnQHNQA1xosCVWPuzmYmquqMGU1mmkksP",
  "key17": "452juCnSDYu2Hkt78Mzm2nfgdXpxCqLrA1Z1Gw5NtqEGMZVNNRfkd5FPp1oZiS7T26QK5J91so5mAMkeXBgKybq3",
  "key18": "4A2q863win9PzsNnpdsrX8vWoJdCMdAP6LsPN4AygvN7cKgre21oNLdkJtM3Q5kyME8hVVbfMdenAmqpBvW8yPvZ",
  "key19": "4xZMBrP1r3yav5BzEhe3Wn4UgAxorUJAZWjTSjbFkwZ3wSXeWGZMpDqQBj5dyRH4PW3ySAUKDBexJY99cKoQ1pHX",
  "key20": "4ke3GQ7gWpTxV7ckTxND9zRoQD5ibvC27rEaTwCZJhQt7mFQuR8EWEqfeHGTMbudYvGsTpLyKuPxR6fTcrCBrpXA",
  "key21": "5odAzybr5mdj8cAPa5P1XrF98YwWhi1htzCL62Dm1cF9ut8o4keAJtBci8NWGyVbAKbSqY7qz11tHL6QxytzNQfv",
  "key22": "39rhtPH6hzmoREkBvxQxrmk3UuCnE4d5KitKPgWBLH9FC52d1VoDNdSeabqdknyTV6VyJ1prLpUNmJS9deR8WDxR",
  "key23": "3c5NohnU7AfxzsfT2tBhzdNYpvuL8BrxPv9hS3tF3ee6MC4SLzaZnNCZrpgp6DeKmcTDqAhMtf3WreXw1H4A4UuJ",
  "key24": "5nuc14WphLaLrujr9ySJ4QGUkWnptuT52RA8KamShv1kNQAdYpk9gQdPpsJo7waQPdwJajATUVFQhsMPzZoQkaL7",
  "key25": "66H2pFzwR2dQafHSK8r9ztMipp5GNgZZMoV7gGjyQ1WD1aRxJAB37M4sFqCV5YJHhuoB7zmEvXg6VLDuFAViw5QS",
  "key26": "3DFbPLSeh2TwJ5XYhwp8mEyB9hjsCmwtGA5qyJkhXZFLzR91jUQRGZsJdB6gpiYnUoLKYb6zrBehidMkdteDTC2h",
  "key27": "4LkL38dUkhVaRe68pSoDtMc7MJiV4r5pPMoBuuZ1QazvhmDBYbXLkwvkCwTxzcBFNyMH6TNwLGGivsT48Q6L2SfG",
  "key28": "UkkZy2Zqwh6Q6oELvW4RVGZbJiHt2UowgvmASAdAxe3dVaTMcS9yAvU1tUrRrXBmoaLbfnz9snLK9ZPHd2mM1zN",
  "key29": "41mS5gk2ovs9DZWiJYmaD9eb4arexNmrJmErkYFQrAgTnCKAPin7wRtbhHRfuhhYHYXcQQBo3bcPmdAyhx3Efvf7",
  "key30": "5h8LE7Z3f5YLPN3FgTxz9uAJt3YRcc61sAp1PHF1roFVpKfq9d7gn3UkjBfD1yti5wRuZDJW4EY2RgTE52DafqXq",
  "key31": "2LRqudeBWWQ4VsYmysH1wZTadVQFndBLYtyTgbdR2Ph7xPSpGrYXpDzmXWSjgvPZpDE1q3CAQ2gvnTe9rdPhiCar",
  "key32": "SpJ43qzigLCoHfGJ3hAubW9Gf2di815Z5rBGXWQ7GWH9dvT4cYxy3SYaP9aXwNVuNsdAB9CtcHERSfwivNdYkWY",
  "key33": "2KD58FMJsibFzrNtqwf9kDYhqbtK1ZrM71NuKCf2iciVcPwJoArgLrSaRRKCg4PaTnaAqSvnAKbTp2Hea1FeJ2uB",
  "key34": "5mpN4nmSrjQHwb3d9JhZ7LhdzTEwXyrbC2sezWY5d6N78FBFokpV4SLeYP1RnuZAJRFwVAq6r68ngpGjNgAxCTec",
  "key35": "4Lzchim3FcRozeCP65TsETcoK6HjSVMvmEEn6pzvmzABNSbP2ds7AkJVQXSekBpG37RwqaRTSoZceq4QmN1JrEQB",
  "key36": "2RfuSzeGkojzW6jSqqydW9fWmYXg8tvx8RBprKHCnogdFDqSWXpbPnXfVQF4f5V9qHjFej5vV2threANGZX34fF9",
  "key37": "2nGNApMe99yXRAF3kRADvTwLi7qpzKbQhw1MMyZZBsQNncqALLcqf5swcyZ9xJv2qemRZnxhz1CWfPcsuqyFN6Tg",
  "key38": "pzkkME8KYzg3hqouqU1rNbS4MUhYfgshnE16zYMTrkoKSWHNKgoQ3CYsYrXw3NqqgkEfqjSttNhTzSjWG4LuknH",
  "key39": "4TQXMY8rJ5ZiwssS3LGjwNkwWuz4u9U9ZZTnWjogbKWanTbXPNHCZq5is6bj5SwgnRVPEHHk5MKuxhM9YeGoj6bS",
  "key40": "K4r2EnfvVdMZHGpZzQipgLuu1b92utZgSVs8j14gXH2pVVpEymZfTWdUDyykrztP9cWRjGxa7XubZHQ1XP8rrRG",
  "key41": "4vXNqNihfH2aPRZuj3hEy8FFSaCeNdEpCKxq8DtsjEBVvj4yjTLhariiNgA7UdN1DDv7hmuR2ggsUJcrJKVBdnw2",
  "key42": "4wti2rFxVNaDkDDQZyEXCmALNPjfh9VQWnnMrXjKhgvPzYGaVabN7tvuQbQzY6yo8s2TTBT4r2ykEM1DTnhUmNTE"
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
