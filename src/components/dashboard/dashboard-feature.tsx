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
    "yTxLa8uB5UNHZdQATxjxJa1wgAuiWxXNXf3tjjicoMDUBG7F5PcAFzuFRgTndCZi4j3nJqezzq9aVCJ2mfQfjvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67m4u4PRYUSZy8iXmaRc3of2pQUJh57D8wPoK1wfzKAy6N74J1m9YTb1drQpnp87t7M2gE9EYNXth1W8w1qnfWaw",
  "key1": "2bp9KtaH1Dvezy7MjnLoQwoARjAarzoFjWi3k9SYTBept4jy8LXpEDZbBVMrpHzLMHPVVPvBASHEEBfvv2e8W2eh",
  "key2": "5xL5ojS4EZmMyg2tTA5NyhrviNBVyRe155Pdf9xqFcXtUcnbz89VDSwJncxExz9gTARJCoRbUJ7La1aTto9g2joY",
  "key3": "3kHfVzroJia946xZryHis6eipiRXzJpVyzbi9xwYZFkGTJ8j2FFUmBdk6UPA84eT66WCbwxANnrQfhiaUv87w6xP",
  "key4": "3CFMd7Etwrs33BZwFaykKi2SXcFbBM17po1zdUxLmCdb6ba7KZdK6nwuduBCZAKSZTV4mf3ghjgwnt5DpiicwNg6",
  "key5": "63TtFApSuFGAMHaaAzM4fDHAMYEriCSEwHHJoYtK7By65sgQTZQQL6k48grQzixh3Qauy7tGhLRTix554X8YXtzY",
  "key6": "3Bz6fbg44uN4QYFcMLuUcnK2FUxQM5KASSLnp4gGA34n9QzVLdCaKigjgbZHj9SGwRn5w1gaMvkntbSDUMuyzLr9",
  "key7": "2NJVxaDrujbYvthKds2DddrXiSSmafTNaVCeCVvX88nhSrdPnZNZxNTePY8khZS6XNM2R3kZUQxSU3cv46apvxna",
  "key8": "27U4v4REYYHMWM5bSVFKk73iivfpvjm1ovboVuHd76V8UaP1kEV1xDF1tVpkLw49jTED2DDADtLDx38Am2MfYQzo",
  "key9": "DeYytAGGnMAoHCu77DBLcLWq4eY8Ej9rSADGMrdBk9stvbgCASQPamCycYypSUSHTbiYaLydrVpi85SvJ2c85rG",
  "key10": "2aSVVKnPHCyEDLghZZ5pk83LLM34RUWYB2Y3VcUgHQTzU3C4BR6LMedsZ3eHrKfdYmT2DybPQdonRCMDCGJT5wdT",
  "key11": "3rhWshqAFtk92vKbGaxRPhqUT6X2bccEL6V491numXwf94tRMrFA1BuZW8uBR2jXzkfBjNPHvG66RU1J6JqoHk6b",
  "key12": "3t4xGz8pgBhyjspm3e6k9zKWQQYFg7we6LjTsyDQg2tP2B7Ek21HQjWfE6kK1T4tskGLG3V5g7gevmk8itg4E9vt",
  "key13": "4Ppawa93VFLmEVmgXAZfnzsmdk8wpKarDeaZt4Y9md2iGQzfKG5kvifqFP3YcJVrabJuKhX5mJVYaAz9Ba9K2Ri5",
  "key14": "2o9hcEBtf8Si6tAnSPs4GZt1HYJK26HX6s4Jve31MQkBaDS1tpkAGhVWMDu7GAHZqV1ujoupXnY9arr56tQgSqg2",
  "key15": "eR21kXMf6iJctL1wvadAXgN5h6nviAUgYaANbt8wbkMxoKPqFGdvGW94MGHRvT3feYowE8huCSRPQeZAs4AVK1r",
  "key16": "4Xu1kv47xtKTnQ5WDQeYmq3iGCWsWz4nD5Jxj2fC5zV49Bx91xx5yefULv6hECybJumoBYSVJBPPWkZmNfUVEvU9",
  "key17": "RM3mGiEzheRGMFPxCsPHTQGJiaLsiEKzJQGJMyNCgHFWv7gFg4nt5jE4J9yiit2dZjLNxiDEJiXiDjeZceCnZpd",
  "key18": "2Z6rmkFpi956BRegB2zun9WK5BkR3h7JfaZRmfKUWyFccLaUtnUtre9ifqwkxQavJY2uMJqpjV9iMFcdVRCXNXoC",
  "key19": "2NpRomjdQJ7RUGCwgHKL9Uty1ZwHsiz9xpUbGzYv5qegyuoV3vG8wDpgnHeC47ZmN85LS4G1rFPXGvgJs9XBjei9",
  "key20": "3gfX1Y7T8GnjAgSrifDt7LQAiV7VAkduNTzaAN3Z9DiFVPdN2kEH6DqCASsCexvkgsdFjcJUVZtLQyB3WxkHLTCF",
  "key21": "fXUig9oLQggQpuPEGcbGfM6PMWBbTsPG9UccAgirDtAYiqZTQNAU9T43FZvzJQdKHjBtRvVDfSYwKjnx936JmDD",
  "key22": "2NRweTGkTDMSZziMSA5m7jNZWZ7HoGgEzHvRkbHsLaKLXgfADdN26YmBve9ib4g7rPAqw1oSkoneDeHyMsgxJ7zV",
  "key23": "5F8AuU7pZE95Nq2cEyaWCJBsGSGvomhcQV43ucgMMHStzVR1hjRz8m77yNUTHwADTepyRQy1MustzCdTPmKgQMmU",
  "key24": "uvzULAuE9n4fq65QuFxP4iMfxDv3W3ACmic3DTmW5mGNWxuxXtQzWvCUhgeXLGgqQa3SWrXGeSUCAApWwkmy4yY",
  "key25": "nJRYyNUmwTBmysLkikfaHww95oirX91SdzokX7DrJartQexqPXYFSZBGiXgsMPDbhPmxe8vziFL3nchr8ZRmqiC",
  "key26": "2jXZjZ7jM6sXPZhvgwAssNsPe3YT8dnFvg6nCmkRzHxWQafXX46VT5R21b4gJ768fGfV17p2kqEvirKGTwervKEg",
  "key27": "5n7MZeCswXhn4KMDwiy7Z26fdcz8w2APx6g3ewbFw9okFkcrx4RHwwLPLKmwYewccU97HL9oKQ9h9JKLWBiuvV4v",
  "key28": "389mGyPd8QNLJZwpu23v8TLe1EuAB4e6vYzHFzLLjkd7z6tCi2GWe1x4faqje9X94nHB15i2Z5NcbsLZaTA7C7jC",
  "key29": "2meEqqR8Kk4aWfKyheAut6prk94sPJQJdQVmCqqz3W2u4FVe4s7HRFgExCHXwNmqnE6Pf9MKAAxocpFCcgpd7Jse",
  "key30": "2oZ1iJcKRcDPZV1MP6v8XAc3wv8kNRypPf8uLKbAjcmWnL4btV88S9Veo3VqzbS3QcYcdBfiD9fAUzmyW9fHEK6R",
  "key31": "bvbZqv8TdwjJDByQfzX4takn79YR4tWVBmfv5QDKz52J4CJ1JX3q5PAaNpePZD74xcx6sSS4bjx3jkAbXxV9G4Y",
  "key32": "211SYusKVr7L89NaUpRu4TtU1X9opBZkGMXGL1ZJGofXW6eY3Dy8mGdGDmW61XqJFVK3SVVT6xQc8GCN8PAcraxu",
  "key33": "GCepyAkQtNd7o8cx8M7FQJYbf3wkU1mLKm7khnqMrPVXcSs9r8mDbdZyc6bswpyeZ4A9kYCw4KaPXUwUadRPyXw",
  "key34": "5cvGKRkNQw8BotNRfNjWK7ZLpQ1YdKkG3G61SWHLWTMhuXDyk91vgfD3K9Mwgj61wcDNkEUoeS5y6Cx585mGD2Du",
  "key35": "XADHUZHYuBtSL1CTcNAsj1XaCzb699rYs5gkPjvYDxzzN3sGXVTvQW2hn4DEuzvqkSXkbaJf3a1HATKZ8eiCLGG",
  "key36": "43SuDEtFY8kosox4GVPj1f3NXfagbizZ1kL74cxa3o5FbxPPFxUNLP3oKmi2K164emaEpXvrK9z4zy4jSTqkDfw3",
  "key37": "3yx181oG1SbEqNbbj9ePQggCJhMipr4akZuPfQRkB5jxA9D1f4uqYCGTronoSqrsexzAFvSGxDMwQixgoFur1tYg",
  "key38": "32cSRTN3HEZLMEg3kEkyLfn7K4NntuHTxS3r7GEA5YxRs88ckVEpCpoU3Qfc63F9cGVDDBazW8L9X6LcDoiwLRX8",
  "key39": "5jruMZZYvoGHexAAfnusMn2NsNLz8V7EXMRxQbXXd4j4NbLAcuFGziuA1JtNRmDypsRVKy1yyrskzqZUnXagLR3m",
  "key40": "5YXppK6b7xRV4rtW9BNvZL6LSz95cfAcYepaukinf77Y1hfRP71FFmrvsadkR37KT4YnNU94RWgsqNpa5nMgUGHA",
  "key41": "4mcSAZQpH2u7LBaexpvaPHgU7ssEJyii6CgaFCmJXmpeGKoMsgbzjwuUmVLFEU5nFos8ibrtaAvct2PE8LBAnNju",
  "key42": "56EA1a1Rm8hUCgbgdNfm1G21TYkTvzr9WPbEVwYeAP5Mh28z2Ru3CPeXNdbVELa9RbneDgQXKmThVrJFMouGFqrF",
  "key43": "5LBb6rWFAgbofF2HxwotMekHinbSLBkiZKN6ZZDZMpNUSePhAxPMESZTSoYKZn3ipQaK9Edrj4DniSiUwyTQcvYm",
  "key44": "4wdERDWNZFG9rmiH6G3CWv4DKRXCdijjEUgzhSZ9KztaWqQ7EiiTNkxWMmuco89kvLFCkKPis7Me8rSmnCMvPXYm",
  "key45": "3pfjb7tnaWdmwyesVeJxf6L3wFWnvY7xfyaY35n5rsJLRvG32ixptS8V1vAMka8Ya8qrfoFZacUhPA64Hwc7MvmC",
  "key46": "246PL8dQdxg1JXThawUpkP7NjrWfndu8t8thzyrTZGTxXaL6LV8yTvFYZYRRwj7gkZFZggpYLYAGqSmvFFALV3xT"
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
