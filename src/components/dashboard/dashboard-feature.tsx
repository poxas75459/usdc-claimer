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
    "5jSECjFwhGB2QMxQWfgLKaV264numUwnXCFpgGxbyQpMWhV5M5iVXrZAGvgnSRTMWTNmYqdTadjdiXqC1M728oBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1xNjxMGCSic4EEvD2SeTSFmJgmpogYRVXSeAbmGDWyQokm9YSTMkDW9csFTanbFV9AzXR55eZEAoSGoWgtLCMU",
  "key1": "45AaVXQ4tNRRX5Bw1z4UoKDnx67sPhSCfAwpkDbLXEBUY6gmaDmtr9dD1nw3BiTELMYhM3isnvWkXY9QZiVtrTwf",
  "key2": "jF8dN6EjJFcjxsBq1JUZYVk8ZjywSQ75K8PxGCv1ZbXSgfojhhboBcaf4keZhLQhoAqu8nGmoWuXHEBm89wNpzb",
  "key3": "32UdEHoDdJ69vLZwH7J18LfX4u5GQriwU6RM4hvPw86isbijCodSJ8ETEQRiJ5rWkveg5ZgA1C9ry6jsfWbR23Qz",
  "key4": "S193SnM5sma517CEijC5yrgzRz9hTqtEiQkMHkvPaMRueuS6xmy4WHm5iEtwg96Vv7TpuhkEgqmUutpwLASYcyD",
  "key5": "468FPaG9dx7U54LZjEURe2aakpG5U1tFAwj5rS5nhHX9DkVRNk1L9xq1T9a8nFTRjnRn4Sqhe6ZbnBPFafeQqiaQ",
  "key6": "62E9mmKNn3wpHHEAuifNeqXbNnV5NJ5jKafhykqzsWQ8oHgdsJWXEabfhBG34uAiezucHzXT4hLRp1nwDhxVvgr",
  "key7": "4QmZLTWSh6T7PFeero626KnZvrB36y2CeaALC58SZtFnStPWrm5JdQKvHeUNFLhQVEWVCtz2BsL4RJdAqRrTLu7y",
  "key8": "5ry9oTuQ65RJuaq17tduxHJVjpbtdHCikZBgSBXZqkPhpQfN2qUyE5xEue9hnj8WgJ6V5noyuEAFMqRVTakV4vB8",
  "key9": "fJpccNEFfaPXJSwedgHND9ozFQ2wRSKNJyxy3VNtzRBVpp9kupZENdHZoMjs4QwXQiZFhqwaAYt6NMBQ1xH895z",
  "key10": "2VKKHJ5nCFvypHK5w3tm39fUuzY3zWU9Qrb8SapbJe4LXbzxmpEHHt6XrUL5W76G1XGueng89CHZpyrFW2fLfsXB",
  "key11": "xoGf4fReN1PikUQQNvyYJxtjudSajxAnJNtJzKex8bqS7zr113n7U6TTk7ESPXxF2JxYQPUQv1uWVTrN1shqz2w",
  "key12": "5vxX34omRVoAAivyfEx7HMzcccsPEdnwoXsEuRndXqpPVTvNbCKtsejxrWk247RMuM6qLqKLyaNj2NqTiFoEzjxv",
  "key13": "5Ts7vFHd7LzxjzLUwJyrGomtpiuybSn5dVcZEU1AbYk35kvJ8Tt3hoRHSCGzfc8xVrg28jETET7q8YhkWcEsdvjm",
  "key14": "4hrzhUPwegVzHC2kR4wP2DAEd4547Sa8eJhLfyqsE63PdEBxB9pEpaRXLFTRPjsSomCEZMqNiVUEVtR4atz63UBh",
  "key15": "zK32iVHZWzB4dBzU3hU4hYmxbXL9FTAykJRWgeXPSkF4ujRne5hoCaWwNAtRuzAiZL7e6pZfDxagizi5aMxnJiE",
  "key16": "3zY5bKDZC6fnMVGYREMb9g2owoTvVTUU9LM4CnztriKGQfr1arBuzWPLqT5LWqGqdnBtm2CbpTRf5We17pXrfJ6C",
  "key17": "5Zr6gdghcwyQBf2tCmEdvd97YHQdNri19xzErGBZoo9enLW9FzqhjD64Dpp41Qc9cpGEr7qQ9LEzoc4bgtxfiFsA",
  "key18": "2eukneyWHYXCaMpBUvTQKigAkWpVDNmyVLhjNaXpHNqeCYcptbWksh7Wm1rVbCzaD7SgATeA9DeJcb2Xbtjw3vt8",
  "key19": "54yDLY9TjNUh1uxPfn9S1Le8bcM1BMy7kVP8t6CiPH7sxBJ9zM2MR2Dg5Vm9zCBuTxWdVv49w97dkhE6pP4TENoN",
  "key20": "37VNQCvo18uPZBrYQnQQuJ2LMVCRDFxPN3j8WkGrzpcv24b4zNxAGt8UypizgHcxLH46hEUkimixooD5GUw3GqRm",
  "key21": "4xXvafgAibg7n8DAKVpEpNqfREGEe66HuJkfjiMNZGXvZviYnwF4pHRLPcYsKGHo6DJrG2NSwa4ovXYZ14Nxah7X",
  "key22": "3oGaER4Aubyz5aypKyBKS6GTJCMYznCXNpQde2aFVPA9CS47D6v93HrFewPiHU3DYsmAHKNQb7cGZnYHcCJAjwWm",
  "key23": "2bea6J4dvBki5RCb1Q2yaCHR4XDvGp7x8hxDQPfAVjHt8ACN84waKoyvTikYY2C6uboMr191cEA5yYtSyTRYrUJy",
  "key24": "hkAEey7YYxPpBW44QiHKMehhsQDEGwQYvat6bejvbsamHDFMKoQMbfjkfUXh65E1c1u7qpX4rvE647Ls67jCKzk",
  "key25": "W2LaKmmW2cPGKb6Jiv15ZDoi8axhxfSHbYCij6aAoKzgaHAwxXdAG1xzbPAVhgtuakWABfe9Qweb3R9BdhPb5px",
  "key26": "osLUq648Cet8HBSMZxwZPcnwwrSAS7znL3HjZ9hPBi4KX35n3o4XwmwZeMGGEmJpre4gDoaH44isfKLYmD9phiZ",
  "key27": "4de7VFgh7LmezAz3Qx2w6k3efPnqmKvvz9jUof6jzbPh9tU2CR3SEToKLLL6JLtR5tuX4sCRmWQyudotNLpUtins",
  "key28": "3eLKAFVV5jE1ZGrekFK8dUzXidHg8aDhcuKHnt55sREVicqyCn5b9xGJgFAvYTH39tSDJZYMJ9sMsRXkiDHnxYMo",
  "key29": "4wqumQajN1KZRBwTbpA2HiUvM1RiD7uTf6AQDqBgtFCUWjHq29iQSXwZGnvYarhzsuc2aoAswPMbDJhY8wKQqS9R",
  "key30": "5kvTuSN1ff8nHS8VQpN3eoj94zncjKsjjTyfGPPKwye19GvnEsXTrN8gytLwNMnWDz3iL6UhfMLXq5y7mz1Xio3C",
  "key31": "5PPGMbAgtfwnWnwcXrCXX5fggsMG8VbCv9sKye3Vzb7cW5WweQbF3527hYkz1VdWuM4U567hif6yrue79rqgtRQx",
  "key32": "JddqhTsVwiHakkZ228Pb6vuYUY32NsNHZsVPycGEB1NyLunZ1sBPjj4JFAMbcanczN3zqRcpJs4Acyk6ufbN4Vn",
  "key33": "3azneZQBHbUDvCCrNiWHf83cFSQ6vusQEQEgcDnEffL3smTYz1y3vWnJ34D7XHTerFGwMmm7zq3c55Er57WmBkbK",
  "key34": "54TxzP1s1vfWym89yqscLGTDNEPxsjHZ8zFjeJSgWmSkpRj68tMLCQCzzBsC2LKDe5UQh6KHb6FFgusguA6idyxB",
  "key35": "4iGWEcjTfdsw7cyp8hjrkkpU8uobpWKbzSnesJo6SjsxrCa6neztF4b1pDaGJpFe3iySXYU29zrju1Jc5ugok63V",
  "key36": "5mD59hT2GBpk9ZqSsu6muNNnbXFnsAeLpVETjBpfjhTGmzwijcE1dXU3CTMBmh7dB9SuuJMuM5kZaPjqTS4N9hLX",
  "key37": "3ehiFhJQkrQCsP4WduEMwskeD3qku9DiauiLtmz2PtK95e1zyCzDqfzRB47G92obDhevni4Yr1rwN8FdvSjV73X9",
  "key38": "2AkydvA6Y3xBGMVVJ1fgSoP7onYSvGYk22UXdanwG7V6AdAwyWiUZkgK7HxDKGxL198ESYbSHXS1eRcBgYUpw1Gv",
  "key39": "3SMxicUzj8B92Uu7NYAUPJt4vKaWTiQqwj1zAGbk6JkqbCQs9Fk6PsVgDgRaFAbjRNiYeqrSMLFSvn2HsJ9DTg78",
  "key40": "5rk438MjKKmPyU3jv2np8mZMAgwLkCofn3b7712ZP7pETTeKBDP6pmBwFbQLrZLSKcekgf6ZCG9YihDmdeNKn5i8",
  "key41": "2jnBAzD2755xuLmMU7NbCg3kFKGgtiUp11z4KPfPShVWLqrYkHhtmrHGiERdjvZ6BVPxVP1hHDBqRugaEVYK9GBp",
  "key42": "3w63KfKJoS6LY8pvbV9ECMTYHRxcjvzUBNbqkWd6eMkHgrtcu7YvCbtcaYDiMwTrfApozH9rhPBsNRfFWsRZMkqS",
  "key43": "5pYpAy1SnWZ37rcbMGCa1ox62of3n3a4N6AW88Um3ojtdqfia8a32PYKkDWgMR3Q14tTyzXdzAwWrhBDQTecAa7g"
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
