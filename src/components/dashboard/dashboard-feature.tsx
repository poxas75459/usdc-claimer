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
    "2LManhQGS7yNevbwApeWEmaYme9hMKiZteG9XPjeTMgr4DXfUAJBuph85ZCfRqucjwZLgZk2MRzJVuhinFZbuBcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fB7dKbSG6vJTkVEerGksWkLpYZnUUSki3aMkFH7STmM78vvBKEtvaMUPtPFojuZs7r1J8gcUaF3Un1pisTTUXJb",
  "key1": "1oRasTLtLvbQexfEXA5EaU4LoPkF36yx7v7gUpWQR9pcPzniun3YUd1VtDpAgjnMasyGthGMQidvVkRu4vjbJmN",
  "key2": "53VZpxUcsBfbm9PXAPZzNSHy9nuuqAqi4qBRQ7ngki2oQ6DmNhwA5kxdEUYUef5JxB4rNf4mYMjirUiF4VABxFk4",
  "key3": "21VU6xETTW3N36k5uX9K5TMWnRXdSc7nUyM3RhsCHUTMpnqRYNTPSFSHtDFb5EtMfGmSq2iYK51yx2j8pVQXcawE",
  "key4": "44LNyz4UncgUvyvC7q5dDy6w6HmfuWkSJELQsjYVZof8ihaKqvT78GjfJURwWc6cAapypBrtE3v1V2gRYeuY2Lar",
  "key5": "5bDpUL8SxZ1JsGFThaBtYk9Lj5K1MAmvtwbF8tpWSqcHRypAnspBfan3UUqtdvBJrZ3ADu4kacBm3ni9xfxurQYY",
  "key6": "5agrEaHa1rju4asMGWW4EgR3qGVx1KY8XGhV98ojDZrNq35LCgt7CbmqVz6uARK1oBrxBk1fFpayXZqopdgyVCmi",
  "key7": "4UNzxZchsUgKuiuB4jsSh6HvyySPH5EAmi3jtJus9sVYpDsj2fnUaE7vCwh5wkqoPPVRdrfUYmgor2XUJfprVwcp",
  "key8": "3sMq77wYpCe9CfqE1Wr19Cpw6PLdjX1tVJ7SHCZHeQNuAdkSzLMtBLTKiGa2nZjY6JKAd7MAJ3qxFoFjbuQ21Awu",
  "key9": "3osv1a5ptutqDp5eTdYwVbi7HGagw1cVUywW7oxuqRo87XttdA8fCwCUSxMdMXqJm9HVqjf44vzknwNiA4NA1i9z",
  "key10": "3PkUHaiNf78pEfZSAhYxjwmuu5xmRgdqbquc68XjYC715YkkRhZ9ENMcpzN3LKeKiStcz7oZMdjGQtTovuu2yFHz",
  "key11": "55XNx3TYQzrKHYbaVFReVoymFxPTxRaLj7f87pqkejsPpYwbZkBXqSThhkBShk8iw8fmWcmdnKehKAupfE3EdCnA",
  "key12": "35tDxB2VxTY4YxEjYy67yA4uTu6tDm5NyWtaBrKg42jqxyZaXrifakymfGSvSUByvRbXZow7XTwHQcdqFCS5XhcN",
  "key13": "V3CJex6ZTj2F3hHnxoziGuk7GnQjka6bV6BN5QUQkTsPYDBu4UizkjeLFrSCZmkwdtata3CkeorzqqG1zo5zdjq",
  "key14": "2u698KiXtmqfabcdhn9L23zKHkErx9ooudzEvPugUdATTPkoG326uMRxpiSULCgxhrypMHUXQdVgK9A9Wi6GS9aX",
  "key15": "JfMytdnY8QqU3ZPpzzFeqEMmdHBpMQ2jB6auYJ9E9xwi4FpaAQtobuiAe8dwspMymZdgeS8RiWHR7gYJnLQxAnN",
  "key16": "3m8mKQRGw6KsJKABPKagvSo8vDGnTHDgzGd9xZjdsLcBDmhXZDNV2epq94AnB5qQtaG75xQreTx58gBDXgvDUazA",
  "key17": "4j2Vciwhoohru9PgKM8KhZ4kzzCssxtUXJfCaqo9bL4zWiJfid2sKL3uxfULsFod6hLZ8EQRa274hSWtp8nDDzz4",
  "key18": "2byHDdXZmnhRP5Dtpv9xuuiMmBhcqASAXoTFNhER5UUCCx1JyDRsev3idy5RspQDKsYVT6SgusHUbcXodm3y5zhY",
  "key19": "2Vae7fcJpdZDPWE9xFzHz271MQcpzk6cjCSkU9ikuKA8K8fHGY72EoNEKLqMR2KdRot12vGGZjZSVA5EDGwz9pmL",
  "key20": "33Qa8rcKP7aL7JraHZQdaRV444ZimnQhe73MXSWsnuR9JLVJAntfJ1HDX56rvdYzQgRritB1sjHchdUJHEj4HgVV",
  "key21": "dPQ5WL6FZvAqztzqtrZNpDc7arbR2MnkV6rUW2NLqY9tThzpBmD2RsmHF7UYPpPsGFfjC6QrsEdheRWTBspkxDS",
  "key22": "3GTC7K1Zv6r7frnryY1vikmV1HGvav2YdtzraqsfSZuxsqtuZsPdAPQhB5jUSpepmZzaGhhtWzvJFBfexXw2R1M1",
  "key23": "LokKE2HWAgyex7j2LAMtL9VabgP3hZgSGwgpt7yaSfjMs5hn4qm6aWPCmdvyzXDz1cdNFwTEapq16BBbtQL453g",
  "key24": "39RCFNq2eLBvCs78ye4DJr1tKmu2XtFRRqs4cCCgS64JJkLYdFdoHxh8AtMHcA3GwztkY2ELtdNMXEz4BsdEmpXN",
  "key25": "4vRgEp8gcDifjY6tNpLg7kGraVFwCC1xnqwxarrhjT2eA3JDad98PsPdZe8XGcXzU9fn927Y3pW3s7L7WQUV9nRi",
  "key26": "4z7X7S3QeVsGrrk7pRvsfMufTAeyWm7rwCSWRnEPywLFiVvvke79MtGohWeLHSCExWhiTarWAk6fPqFBcoUe86AK",
  "key27": "2meAd47oaHkcwvRmX1Emtex3KCzsumNhZNunkduWMhrTv4MTziJ6mhKszERT4TvtqB5ftCEqWJWxzG7FVG5sGTY",
  "key28": "64V9ydioQPrqfAGEiPVDY6hnCNJ2pU4enyviHBxChG729E8ZUjCphB9DjzqJ7NWkawBQXTJ7PP4QP5JnT34n94ap",
  "key29": "3KzbHr8jJkLUCMPeR1Ncfmxwz1ZvzckDnh2bok9X6Fs8ZEirVyyz8hhpSxHq6wMS9GDLxYZF6hz1ypKmJUdJrKoq",
  "key30": "YLQtyoJJww1t7FuFk6gMrtyNJi4VZ1eoHDW6BR8Bd1gCtSD6FcCAAashCCyy6V9zaUEUCqHQHh7HxWSJzKGzUn3",
  "key31": "2UaKYJNhzQkVwYinwUWFLw1YrnaKDJnGvCS13TbApwQynYshiYTNDMmiZeuwrK2tj3Qm5XFCm29Ktd8xh8KByzL7",
  "key32": "3DSv1r2A8BxxcxMBZ6Ah5ySj9k4ahUhrwxkwEr9Fog6kVptbQXeBUdAPwS2GZRkMcnJQi2xT7GLLFnG2xwbWmeAa",
  "key33": "3duoKgL2t5dUWujgmMZCtjgD8N6izL5R4unNd9XbAExyJReBpiQNcsLT9mURyf3ZiFHzRgNfaVGmgeH1ubX8FL99",
  "key34": "4J2igaCeoD6Hzw9hBZ5vwv2q377bVdp3dBPkW1f4LWSMF8uwKZ4G6GbojyCYScczrukELWicZ9TG1iD7EJc52FUU",
  "key35": "42EvX6QBtcgCyH2fwFyGANRVaSmRFJj79cRxQcrYtwF66D1V5xKQzJsoUqVxtGyQ7dbmLAMcra3QKSaz7ayiWy2i",
  "key36": "4Mfpu7jCDEQCRfeZkgN3nJgT3GCdkhkLdrXaJQswdo6NWBjyxicA6J7PD8kGL4bSZDn3Uyd4Lqd77g79FzxsTgvX",
  "key37": "4fDbAVhSYiQ1jXfwd3syEjxf5DS1PvnyKuW4eeeE2wsGeb3WmqRxL5tJUhC1hHYUS9Q2q2G4MHDHwAWcvntSUtL1"
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
