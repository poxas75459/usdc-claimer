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
    "5PbFe1x7kS3NF92ri9YDBLy7F5BQQjGfpouqDne2vhwSDG7VQk7j12Q8jAhMkwW63BwaP1mKKyFnEj3P2EyXzeHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZks2ukR7Lfu5g7WdRdWyVMjeNFV7xkwkgbhm4nVyDx8exaUGnXFPdKUdLXMB2uCgLPwS6adywy6C2umpshmBsB",
  "key1": "4QS9dttUSrLW5CmDmXpSej6sHVUcQ7FEaDeBDSHfJwsYCqhbSM3gZaEJxorieQC1zDnDLzCTrwrjoKiXgrj9LNFn",
  "key2": "LLG2BwzU3Nh8GbyXwxjG9WJDWwNLMMoqfFyXbXLtjkK96UDghDXZ6TpjmQpwHpSiURmAhJSmPJtVqnRXpt4imKK",
  "key3": "5znRVBPEK9cxHh8ivFj2mNZzkXBqMn4xnMABUAgdiAcfV2dNiccS6FuhHdBqRZsvVivrVFfRbbEA9NdcmQ7xmt8M",
  "key4": "5W7oSkqWGcjfcyFFyMh14XmmEsFgnEGZvi5hdL4476BDEgjPFEbMatnxjccmir9Gf8FTvzridRARuG4jxQDHH4rF",
  "key5": "4LAbtwhkBwLiAjkbaaFfEmkw1F2LV9iYWrCU6n22Nyjcr9kjHMJDnBf2XwWtroLi7o8a3GcS8LjEm7mnC8P9CSQE",
  "key6": "5A3GxCfwxcPhzDfSma9SgLnV2XSBLCJ4KuW2MKU9A64D7qKzdxV8UNxsnnkUtE322qnRYCaEsh4pxgbXw4qVHMLh",
  "key7": "62ACaojFzFTLLccaLUvQ2vW5jrKtBWfhgQBWJQFuAYYejes5irVgM5KtspyTEck3c6hEgrx2WeKrK1J3Dck5LSaq",
  "key8": "5AzJrdjD3YPN6YcXzAKpx3RHc52y5FYtvvD7qBioJG1mokPtdtCirrKLVpbTyXhGeZpzxq3HWDCC51JWKurntGAm",
  "key9": "nPJWifrA2DNCthbAcrJ8QxVGVV25gP1zpwuzTm5wfiJUHf9QxRkjdqW7sXyFT99gArmP7vvQAqRuMdHLLCddsWN",
  "key10": "X61S7Zt7hKeGrn2TJMzdz1rAoAVSosPFoNVUq3gHFXYv1kR8fQfejwck1ogooTuZkAWeNYCy7MwxrQPuyQkvVzX",
  "key11": "5MPAkcZ8Dvw2sRfP2zw9KMHcduPyTDMgwnpFNdGCZeqWxDHDKRKT3Li779EbH1GeRXgW9kec1bhxcK2tsLfisUNE",
  "key12": "5DxdYhTuaGXMveJL89QEWe3dsnxFPWSvm5DtnDZWMcprrfb1Wy5xLXzGGpLAht5MeW69eWmPTdUkN6F8bFYmoZ2q",
  "key13": "5meUL7vpWaGav7XzCKe6EY4ef1DrN6ViHJ4E15MnyvdcYqNzatUy9YPE4fY7tDSGMu3H4CTvEUrDDvynT7LZ4XMG",
  "key14": "5begQ8xdTUXpo6SALMHoJKVXxMhwE76cPnX7yew7AbktqwW93ZQdqKmx2ktXWzsXhZtz5dsJ16Ddhce696dyHvbP",
  "key15": "25dyR37CZAhHp6B1ioG3nFQk1Pf7DHQcwzvLZKM2Uu9FzkM4RPekh6Zwv98gLr3prtSZsmmdT93j8u2bzwGwvDQp",
  "key16": "52uBRFccxAaaZaVb3PC4tRBLRSvjBXvEYfzPegDGSBdUunTeK2mn3ht6bpAuhTpEq2dyjivzD8hjR1LPWiUsDcAt",
  "key17": "5H8XkY74A7rNubmwRtdcfziGUGbtUR6LsNgWdfFMY6jqAK3rNJS1GLAGhbCz6e4FS2KqePAyJtLGygAF2HcT64UB",
  "key18": "2HURtHQ5JPoh7ogGZvuhB427x8p3TvvNTUYarBvNf9HvJNMBgHHAX8RoPnv36v5g2ifxBDZ65QouYGMmg8PLbhKA",
  "key19": "5F7Fab4rzPpkKSqZiVnVmHRD3RwAkKMYGFaxSpCSg2DvP5C8sn9RsrPXQ23z6Aip6pcw7zcMMWcEFrCYjsHa7ktg",
  "key20": "2156QjXY2PKgnREB6gSCU274yYTeA4Eizn9rD87CAweGAAG93GVYJD8oK1GxEeZWjn9SUhdLpKiEX5yf1TDKSLeA",
  "key21": "3PPeDown6SRutPNj9vMAq15jWmD33p8LacyUUWUv9u4TJTimiK2DY3FzpgHKTDZGUUPTCTS5GgezqUrb81W7p4da",
  "key22": "sW3ouAEss7TurTzCdr9L2mDcLkAa4znfLwVVd4es66jDSFdw6TauTjekEEwPUaPJnsXUiq31wD3CJJe3J6Av5D6",
  "key23": "4xvDctuerB7ixArn43faEKB6jfNjniwax8LtGB9e17ZCG8p1dsDPTT5rJXHJuehzuwN8T6H4pgDMD95Sxw33qvWM",
  "key24": "2n12G13pBd9hPpLQmbsBhxp1eoypmdReh2v5kEXMu7ymPmmrXdWYKnmcywyoSVNhwbdFuwZTSPcybjxe4SVWJVPZ",
  "key25": "4YanKaF4SBaBD7kS3vajLfQSsCigdbSP2uwsBg54M2xJkc1VaiXqNGgBA2dNR4dzNMLNH3TmyZ3y8dnJfX7Q22jH",
  "key26": "UA2w2cWnTcFT1iDmNB1biZ7SkBV3sw7wRiQGAAHkpNfgorkjcigS4s691fg7pbJQYRn4KLi1FbvHPFTcf1QV8tz",
  "key27": "ijnkwpcXuL6XEdcKhSmwuQ1s6ZWwAHiqZywwob9nLLvc1ZDqufG5NwquWGSHBvwPqvgeL9BXhma7GyRvtB75erH",
  "key28": "5BSb3tU8zwjAmACdfqF6npEDAHVvhMgHaUuQPjj3QTrhN8mKwso1yuWozfNsaQ5w3D2Y3whwN1AxpPEHgCpppUc3",
  "key29": "5nsEzrJeR7MMZizK5iGnTJfu2rNJjRSi4KgXwyNvkH3SvDmkhhRk2CUMxgvVSYkEH1wUyZx5Tb3FzPiYmDNac4iS",
  "key30": "5EL8reQoDUr25AHVba7r3DoTDWcU1J9VRZZ4svmcSGP8RvgUbfu1W4S7YQnTSsdPMv4SFxtfCHwbiCaPaBobZDKE",
  "key31": "69bAN8xwPXfD22Zri5riJBW16Kk5Y9gndcdt4wk5ysebiJ4nYjoohmUqWfYJ31RdTsMYSBkLZMj9kASp47BKH3X",
  "key32": "3Wj2LDPeZUtDev4nrE1TjtcHnawPHkXKPeTmSdiKpMebTvuyqseZPBRZvGk3cn8C4YwkhMhNYVqxjKyeWJr7ZCwV",
  "key33": "RLnaURC4pcgRn51QeswFYHkcpDdBb4QBG7ojQPds1BrZfZGeNN8ftD5BFCPzZVzJghvSEKyXE11ieBKnttAmJvB",
  "key34": "2cvEEdGZ7om37jfsCSANEREg1ob2nTQdAdAkBWKzWjddKjBqDziiFUcYoDxp2te1wMqh6YqReTDCuBUpDLkWqPfG",
  "key35": "3hjvT1EVxrCjWX7vwg91yXta8ZfXRszFpSY9QGRaLACHATpregpSGdpijqnAPsUmPvjJMMdjLuiE7R3enWGDoMyN",
  "key36": "49ni3WZ42zSDSYCAowi3hL7MywFTh3dEyzARYYnt7LHx5sUN5wkAvzZU3hTyAFauu9ePmwdrYKQtC9AaKBQEKFtk",
  "key37": "295K4KeL5KiT72RzKsssiykcviZDnCE7LKjHr6hHVqWURb38LWUuDs3suCR3kWvKXJPfaivikm2L7pP3eCpn1P3f",
  "key38": "3MX896mgsXNVSJRNYW8mqQFXd6eQZg6aRXkqCmmz99ngYwCwdo3UL5dCmDUZexUqBzMqYuG9bJUuYhn9umKvRBLD"
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
