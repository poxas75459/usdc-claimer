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
    "7eWFberQd6nxVwFT16toBz2dpyXCHxVcdsSdxFeQNMqZvc1s743SBaTDQiAyscoq7o72asYbd8XA772NqVFqv3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gk2PJENTBjQHxojv6du6dbeENxnrheqvXBjr5heKsEtkotB5ys6CVViz3myvpmKsjcGuiq8Xo56Uwjxds2FVtM4",
  "key1": "2DzX1HfcfRZkvXrFzLjuYiMrGKaZv2wMLQDW3pfHkCFjpt2Hk5RuQEuc7aiFpkSzGRSwWC4n1mN5tQvacZnoSe5",
  "key2": "36X9zoeTpmiBuhDeTjFMq4mzswmahNQhNR9AxpvTfvc64SKMVZZ1Vtw2HGfSgE21N1VSh4Z2Pa7Rnw9DtQVkotcL",
  "key3": "5d2NDSV67cXBXDjutN6aDJaByZdAEi8PwziLJEjdBy7ZM4VfHPbLBU6Rm4ezNQArzPkNXy4X8q3mptTiJyPkN7At",
  "key4": "32c4wSyC41Cs4GsGmCutRxvbTS5z7FvGCk6bCRa9ekMzZYfp75rJxUxKj81fkww4JNwT1RaaNXzrCexU4x5Gqqez",
  "key5": "4Zo8eL1vQNEnxEqQGzKYa3XGzdgP9JcTbFtM6qez6P3USfbq9zkM7C1ZxHpxeLG7EHv3W5EmiUebWgfVGf35Seq5",
  "key6": "21jyT12vdo6M7PKsnT6f5LPVZrgEfeRRXWFhqPQD1ZFHrpfQesRNorSTCT8wXGXDGDALM2C8rFUnW4rPiADrrnbh",
  "key7": "2JhnLoWChFdbfCtwvr3yQCn2eoX6fb6W8aZquZu4RvVUHP1p5W2RkYZtBzQ9e7U73jiYSWeQBwmxMJ7w46rQW9dd",
  "key8": "3bguTKkoMcchwS7qLZdn6cGLjmrFVkKEgN3bbb8zNXZvKzVSeBsMHyjU4SuWnSGJgvKMi52fY68REwdzLuatPKe7",
  "key9": "2k95dcWn5Lk1B3uhF4yfmAmMZxiWZkMZ34YPwffTcdZAgfDjvyTdzLTtfkCPf7Xr2bWTuZkbu4HvoVWZxXbcys3k",
  "key10": "25vhAMqM8fvCNJfTX1fQYqj27gqjG2ZNkGSHD1kSZZzCoNFNrrKWUg8qHjyAtgc72hJmLPqhiUD8BjAUPVjimhqe",
  "key11": "2BpTz2DXFkw9dQ88TZAV3jn71jyNsXjmaQJP4RoYigaQge9QihabYAoYHgAZ4kKSa8v8zFqWe3uCUvpMrcdt9rGD",
  "key12": "u7QwndhTPefzMxcTXU92TX2B5uDPANysz7u8XgawgNn4q3mo2HydZZAcBdCQp4viMAJSeAv5H7DF4PY5WSjAFy1",
  "key13": "wqGFLwtHzRgLFqVTDrhyp79P6WkGJ8moCdJnRtMgDuK32zQrLAdb2oSu18fw9ycSaUp868Me2Aptwwt9gmjkRSy",
  "key14": "3o2cCHHUU2ySXdVJdpBvVRB6pJH3YMejaUcUWW5yPsBfEb3BqB4dg3eyCvGsdWprzDJZAJEodLYib8yXtjdkSi7S",
  "key15": "pVCGaRaaqsR7jQnBZSETTNLJ18p7ReJeBoJhXHcaifksJEZh3WRB6nTs9zea29HajQCsfqvLDuKq3wrgVQy5PoS",
  "key16": "2S2Rj3ZDFRr3qr1oLTjqrf9C6YpeDs56KpU5uxQ8gvPBCHcEnePCt6PkJRpvrqLGpymQwYMcx3mG2scrrjNGbsB7",
  "key17": "4Bx6EcxYqeqKy95pWoQewVVzVEdd7fEvPfykRgaUCZpMumrfCnni96at7BdJ8KBXWxSS6DT49MNjTmFTdSQHK8Bv",
  "key18": "3tEdSHUxeSvhukVd176N14zAyY9jZKbV9D6C3BZa6wS4Lhm917f7EfVj85dUEEQsShCKKEDLeLPfDLjvC9VBifz8",
  "key19": "eQ2GeCZk6D61u9tu2VwqwTVcVjKC7j3KZYPnLJmGFWRf9ubqQfDX117R2iHg9j2xRWp7kfQyBwMMfMAh8fAKswX",
  "key20": "5nuBDAUvicJoUZVhqnQdreN6hpXhmLKCTDumkd6DnLSwujFVsbm5GaFVsGzbXkfvWjRLykFacxEkUnYpZjqx8xtk",
  "key21": "3gBAPza6x9umR6v1hBeisG69BKQTRUkdT8HJK9Yxo11sxC1hMrYnmavJrNk1NNRegjH76y7UTjLHwDaikuQs1goQ",
  "key22": "2di1wf2svsBhUcPa67cfwGmgkLXLYHfuJQtQFj5bBZqVbJd9XLhk1XWJ6eRyriF74TFEHFiPZ8hiKBRDLRfMYZv9",
  "key23": "2muTtGhcvfMboP8u5N4JivCsBtpBnfHtimBo9CuT8XUEBu5x2FjmScNZhk4JTQx54XPLTKMMt7wt25PJAVWm4eNo",
  "key24": "GCMXMjBbH6bEQSZz5ekUbQjESyAgTaDc5gbzmHRibk1QNRu86im4b9G1vEXbZicTvnc51enYx4HfpTbvNSL39hX",
  "key25": "V5WcvaYpNbDqJebgKvawv8RJcgHUSjXSxw7E52vsXyZ6wgZHjAWEGJZegeN17emwbUYgMSr8fcR79vGb7avJewY",
  "key26": "2tku2xPAPSSBwDUkfwvuCy5ycGivRMgEeeycDRFaQU7LAUt4SR2GSauFhZ9gMgU3WUGbRK9JxbVkejNaT6e36uzc",
  "key27": "2CNuq5YKhUtjYWuZWiomhZJmUXUxAiQt2ibscNsJfMxmNzB1nM5e7pudhkv5eTp96Tx7Eg4DLKqn7qkrs7qN46ZB",
  "key28": "2m3X1YF9rwRex63SdpUh78yhDvqCEUbaiU4eqV2CxSa4k2rXpJpyZfyLSWBtnwkG8GnPVLQMNJsdzq4DiZMd5BEv",
  "key29": "3b5in9PLsWkUUWxNZu3Ct1quWYZMJA3WLNxxnoRprd1P5DecnFwv7MH1jrapJ1HgEpRKRLXz5oYuWaRs6EzAASfa",
  "key30": "4fNVDt4zwvPX4aoHHHLZmQyRUR5iLXRuazxnkUrMEDuBSWQ6PWYvyKVshAuLFkKh43K6Kk4KmeB4Aq9DxxcvDjCy",
  "key31": "2KY5b5SnR4N5XS3eHNjcS7xyZW52gE8Jnem7tu6v9YCJL76bqAnEyRk9QGNDD337E9gE6R17c3Fv2n33av6JgFuV",
  "key32": "56nWd5TvLHocJKWiPc3EX1gCb1oQwaeapUpZbRXtNxx7sh3UHeAAUiQBDwNEHkC6cJq2iLJxXuQHYsTAtsZoRNgY",
  "key33": "2ttiCLoLpPafPt2yZV6TomcNvSh98yFi7LR7jU6xvujGc2FE11323ubVqhkXnDRDm825mX62cZ8RmvUreQLXJJ4q",
  "key34": "3UBCMZgoZnTECm5GHZx9UC11bTAmErbjQcmwwJJRixKM6WUwie3i3qJ6T7enVeJ1mA7dKY1ugvE6jJXZQfriSmhU",
  "key35": "4RKqyM94ikCTLCL8XqcPfdmSyTscqVRstvpsgs4gZKJHDXtuEeXqjfvVJXuywoMiQ7TfbTawA9LbvRb2L4DC5AAa",
  "key36": "4CrqLpLZspiBv3YynGx5tCsNny4VDcU8omCXJQZ8bq2FiJnHFsRXw9NK59k8VvoM2fQNJp694yquWeew6muLR2fE",
  "key37": "zUNTHvWsvc7nuo66tAwj29ciL2dgyV3Mg4pWV6owL14fMQqiDjCYQVsPFFXS3YPuQPA5pD5W2vQgYa8xyfQDm1Y",
  "key38": "2z8MQGZmqqbkNEvmGG7ZcWwwQLjpw9iuj2k2nS8dAjeFW2Fg2o2LZ7oHQFEFk8tC2BMaqmPowEJ6GdTebJ1gZB7y",
  "key39": "3YYRc6wVLWVu9NBvnMLR8h65UWA543edu9SLWue7gmgs9rMXHmwqUp3fAqkXrwkRi7tczvXhohLUVB9jWCfEoMML",
  "key40": "2q9jJxzYizvP6swVYoG2fj7PDgqDdrBdwuBgxxzECJ8hTLVZr7i5cVQaXJ5EUAGh9sdh8itHjiXARyeAkMqZCaap",
  "key41": "4oHMVHKMsrRJaVKsVSZmqFVPpQbPasXx1DLNY6XyFWWDH5aeyTUCk3tivLrdeokvUWX7FXkhtmkAGmmhEWEjAq4f"
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
