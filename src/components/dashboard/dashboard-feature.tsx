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
    "BrMxKGCJkmrvKx2REhTk8aojAjCkwbgftDMTt7BHNnsJBa6t9zaWdaSg2Jie6wjRooRbZTdnWJ3aNpxiCydzVTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agYpeZ8SPMjXceKjZ7BwKa49JowsisTNJQFdMzhGeBGGsiEcNFkWEPiCcTmtzPcie1RDnBUNxXxrhcCX9v1QSgq",
  "key1": "1hAMpt7NoWrq58CFvsLoM9R4SsiLfD7cTnnjiVLTcawdmRk1HUp8uq5iNYvzTGLzfDG9DEpWTWqM19ZGSFpaKiz",
  "key2": "5KdUQVYSJKA3ATt3xvMSb7T38mbjBEUsPsxPcy72SyFASAY8SwiG1ctvUNxMDb3PM2KTgEpEqJcZjU3jKGqB7eHL",
  "key3": "Q59PVb2kuoB6WQ6kycicYfTt8anu5WyqqG7sMZuyKDbxQUgez4dFduwdhT78DB8DxAgUWq3hcfa363fqLHYh8fC",
  "key4": "BykRsv6uZTyEGhKXv9uzNvtdX7pbPvbDHhHaQkKboX4zJCVFEecVnw8GAKxRBLdgFfEuSgkptJZwGFP2bq4oWzs",
  "key5": "4vMUvyRSt5sEaTKYfx2hgxRThhiDw6Ma4Lyz47eHavEopz2bMx4dMSRjfdhrnudQc1LZZ9epZgVQWgWWziXEuqHb",
  "key6": "5sUvPP94oz6P8euHxcthGJeTbgfxCayZDELMUcgTYpqAGkboXDWi6uwwCkx6NxFdhAYxsx5TwmVJ6GTGj97K9RV9",
  "key7": "4f3FwxcyyumvS9k4Wuwvv36yFX38xa3332hdxqzQPNqS7LE7XdhBhG6G46iYmpQB8L1vLdmMJteRRvKVWTf44EXq",
  "key8": "2GdWPz2DCPyh4jemUQto7azC8o4yYNbDoZBmWKS4u6vqSz4fEf7HESMsRNEPFFSTwaURdvAEDBs8Z52wXtoobFBB",
  "key9": "36vGEWek95gqDLTQay4JNCys14VPrNUQqcNys5WCvX17usVu9pQ39k72YqPDTxY1UCVShGYwJ5DwHXKUVYkZ29U1",
  "key10": "3oeUYyhpwpWsG6hMP9BczRmjGg5m3LyPKsi3EaYbnxGdmVozHtw2WEyyEpNRynfAaWygawnCUbb76kN9odeQ1Wdm",
  "key11": "2NqRUnAWTbWyf9iHaj4pHdC4LjM7DRXr4QSMDimjjkfFMX9MFzmF85crtgoC7dH2v8HT4ujkdoco7uTKXNHunXHo",
  "key12": "3T4wTdzbdcamaUbd5ba88qJf5S1qkfsX8MQ5NV4pg7NB7BVN9LHpym7de4nRYRX7o2MvdACrWtUZJzjUtFbM8X7t",
  "key13": "5UZdtWkV1MV945FbvzPb2FsEaonzbfgA7PrNSCV1f2GnQN4dEZKxptEho7EMRtzg5dvgUC8rcZnQsBd35KCaV242",
  "key14": "5rf1DESpTuKYRSkSjQpkrd6tjPPeEWuVXnpxkva9N2HWvQtHMDeh1QJMYNpBJYdfnHpxdw9SexiEhkmeDC8HZ2h8",
  "key15": "2rmYDMHzR6zE4aeERPPdFyMbohFGQNFmdzmeaPgnx6czxCqHSvDWQtnERh1EwZxjxQA5MtycJQwM2bDk3zqTNAEq",
  "key16": "5Trjb47Bkzhh5yYtqep1ue341B4Vx7X47Jhe77jLchKyKkC52KtfcrdvjpLa1zYVi7vq7HgnTDMkUYzToJrfHutZ",
  "key17": "54eSzxiidaUVUh3U7ikkNnDxyHWV8AnZDzx84yFpUm7yjkVKSP6BeDdxshAgWDK315nuVPSk6dhFL465cwPYGMBL",
  "key18": "5frtRqeaAoKcseKyJ7KA3zNNMaBAMqJZ3ZmcQ8zzGaKnJ4LpBqzG7Dndhf8pWTngPu2DEPuF4hUjppmekAYZkhdE",
  "key19": "2eKHjD228mrCwLrELKa3JvbUSCtUnCmHguQCWJkazRDpHBvcYvnyYRgUHTUMYhqJiL8XNTpg8Ni2fUrnVHpyT5iQ",
  "key20": "2AubKmsKoss6ejo37adbkjwFQY8JnCh7546YpcwizrxsD1cZbhENJi6k7zzbRmJY8neySsoDBp4pmRAT1Rbke33Q",
  "key21": "5peQgpMZR9HpxXo5QTqodVN2xFrmkY47PvrXsbht3RX4e87weNjAbVRjoTf16b3QFM5XSHRmjKkbuuAa3T2cZffU",
  "key22": "5vBGdpBGGM9gYVRGyQzrUGVvSQfur8PWJfy2i7GFBs4UaPUNxDX6GhSpQ17BVW1FMirnTEsuVqFXERYqMnsX4oRR",
  "key23": "pc2FR9QsGw1mUS6RKNh13LfoNjqWpPRpkEG5oFjnrQABcQJq1goh2KAGLDqepoTCuk3Emza1fXMLhirkk8kdFSh",
  "key24": "2EzATbi2WwYRPzwGoS2C6Ad2ZTe2G8fX99YwVM3s6rxrTDCvEKQm1Vyne2QF6TTcWHqfx1SH25hmPvhTjJKnw4ut",
  "key25": "4Wh9hJDCKFNNiMNoT7WGBLkCF22dK1vhUBr2ohMAEoG39uiEQWpCsnyFMaWwC5rWrN1neuSVG6C2CmGtJWEEXbZF",
  "key26": "bJ77GqLrMsR8oAsCcRbEQnnC536fBS2X3T7xXbMnZtxEyU9pg48o3Gr8TuWHiachiC6GaXH1tKLNxcDHTCVnUfK",
  "key27": "35cG1BoCBEFsd1vEKG8YotXMpjhyTuoV5b3ZLLKHKyzi384HiXW3oUCPKViFD5uvFgwDRaPFEhhvySoEpETzfxFF",
  "key28": "3dnxAN64NyKvdtxLVUqm9SCxbBQziWLbVBbAAWKu3YZQeN2a3526gYD3H7mxsMW98sevntvAyWrSczyxS6Lyr4j1",
  "key29": "38SM2kQ5nNXqEtG8MhVRjKS52CXvTax3paZefRMKX6yHtNi8yh3FbnQZiU97gCxk6WVbVbuifdacAdA7GefEfAxp",
  "key30": "2Pq2PXQrvU9LPCStkWXF5cdjmYmCFk4z4xjWpcmzDNmnakLwC6vu7Uq6nbbc96EC8zj6CuqdgZ9stzEuE3gnZdKn",
  "key31": "EbpstiHFYf8H91uuTx2xFyVRJJaNdEwKhKSk4MQnDj8M8GRgqvJtQYnenyag56bvwnxHkBnp8YZME7jSRKC89Wv",
  "key32": "2QFTJj4rt9auyx7NSGKeNSP1WkrnpFbFv4di1Rr9257FJL5GkC2u4kkhpxrsU2wux7ydjVDozsfgLneVJ5EFAqyh",
  "key33": "2E1Ry45zG81VTL7eWMSNHwCg6om1783LYw5G46tWtBp4sgXaLfxajiUjsJQCULHgjnGFmY9qdkhYc52ueA7sQ8rM",
  "key34": "3CD1aGW9sTrXAT8ScoueVF6Sb1pfftkJxfcNt6goQRoVpsEEZSRsNE5BtKcdiRhUCx3W83CFBy327Cc3eMoZUssW",
  "key35": "2A5CnbUqNtTqykkNXyyEVaSmyNBJTZwg8vpwLdB9H2ELtoyKYxoxgattUzP2Sj3jGaqPPGbPWqP9A7SUoiuaGjSQ",
  "key36": "3oGL4JRVWw41DxsLpnBZUJnKZMT2naed1vSdxT5PUiu2Xnw6D6SJ2gA7uZxfnA1uerSTtv2ofFe4TWY42ipyzoXq",
  "key37": "4Nagf1cKd9pqWGbmT6UfkLH6QAsUQv4JM43gXw5ytf25pbzKikfhSpfYQSAQ463T6wP8zBB4o1sx7V5rzFcUf4Uo",
  "key38": "2AQQpKQVc7tq4iKfWmGTjXjZnNPfGCib19PUkAxd1mFpDLfWHVuH4ApFjQ8PxJKSzmrM5z377abWk7Tkh2otXuBN",
  "key39": "4yKYankxpeFsAL6AKyTLZE6UbpHRcFVUANS3BPC2HaLqNB5yZNfSr5Vvg9jZ744qd2Pf6p77TCTk2cBQNAvEDpe7",
  "key40": "55FgoVYgPJPH2vbffV3nM1VvPjDG4RB4CUuv7qDAUy43RFHdh2Q4Z6YTUcvQ9paJRRZpxL8SPw2AsCBaSi91DjPT",
  "key41": "2sZqrbJGAfHwz7mQgeLAGmPcGcFE8ZWg8zwQtRNDY8g56cNStQKQwLBskY98wGkiwB99CZRENH8JpApiM8ixWN4G",
  "key42": "4iD4z1RxibbJXEWjjkXE9DQZHxLuTATmYVrKpQddXf5F5ijTTcMt9Ygvo3M5StdVqjT1sivp6K2iYU2F6rC2J4KM",
  "key43": "7SKnF1skp4nuw6pDYM19AX3qmATTjvp5yBctZEA2JuRoZjF7CcosAii8g1xwxrx57F5MgXPFbnVL1P1VZBBqAfo",
  "key44": "gmpKAmnhSZE6AYHQ28SAuouJAxVmtF9AVu63eqqpkj4sDZjpHkXdy8NEu6LviK3uJCbkgrwoBn86hpQ6oiwoWqT",
  "key45": "26B3ruLUE7Dz2YKGF2iHYzPzyDFYN9oam427jEdvxFa3FPHw9Sd58bTo37BvMSRLPYajVh4LHfpjFGRszdvkynBF",
  "key46": "3hGJjM1Mw2oUzTeK9NDJZCaewr6sVdqpPvbdPQd4y98zaRBTgvCAistoLZrNbWzTVxEArQX9ziREthZZTe9W4aHE",
  "key47": "vhWMtvxHEoDxtnuypDbsaDyN7XDzrKom6AToAUfrJqgRf5WCgbjprB8XiMY16cF8sdwDWCYMPXsWsPwpY1QsScp"
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
