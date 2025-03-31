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
    "2PPw8fzj5R69MHxGw5yUSC7hzAktk4KSy4oocvTmt64UZeteBWySh61Quftx7tyFr3bHJaKXyHrvitkxtfXvh1BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gSXqh21bUhXu6o1mTC1Mhs5PneAFCjRfM2X7WcdiBqoWuMwG9E4hLVJH5VREzoKcTkQTbb4C28NoE3gE3zdmK6s",
  "key1": "2Rv8xzKzTcf7uA7wjaeshn7uPWVGbvmDB3dEepRPgFooQ5AGB8LaZK9VAfD7rmBHzEHKTYx6gNvAtgAnzGaMrHEb",
  "key2": "2dZsDvg6UiBqPuBPh6gaJP4uUsE6fvdTA2f6A4qMin1LYLBG2MKouNzCzuikYLZ1hw48GnxB4n8xaWZLthpL8wCb",
  "key3": "5Muxe5pp1q33tSALPSLDNVj3Q48zWoL2zWPYSZx8XnzC2CbG3YLgr77i274Hh2rJvFUyCgFZbbhdJHqahTfiUmer",
  "key4": "4pnhdC45VQuEYTcx22yudhSPhijdSiJJzVfyT3jEqpNw5CcwXwGR2E24RZrnKWRwGbbfcXvDisKezXcetFRPGREq",
  "key5": "qv32b6PA1qC7NZ6gnQcKrScppexNaFAaaxiXE6An5orLxrDZQw16sd8V9iVH4mq3bLbXZ32Q3FAnRJbWntt1HEh",
  "key6": "4CDKMKhYJHDirVprcFGVcHEHtbJevHNZc1vizYsZWfo63jCpHgbHH9wTAfUHMJ8YN3GKHGmoP2rjQBMkfDqSU2cM",
  "key7": "46SMxLA81SUm3mWLXstZRvQAnN451E2eQ39y5wXQ474aqzCFZNVTy8KLJ67tFXoxLR3e5kp3KSg15huvaA5597wz",
  "key8": "4keHBaPaGbJJyBbyFfzSxonYbQzxiSuu6JbG3e2yPS9y7ETyxJPr5QBMrumPcnmJ1czN3GXps7rjkBs9sBi3FD88",
  "key9": "2NK7fhFeC2JYDHjNbeG5zPn14Qpwe4gqrzCZNX15s5zXZzxRMxTotFRkxubfRSwzmFbCCtX87kbPrNXcMsbtHCfc",
  "key10": "3M4k35kryCRKx8JJ2Nz9SZJBNGPaWnzXshBPUKxs8ytebTBeo97LJgxYHZ2KP4k896HR7NufdakPbwhorqArxXJs",
  "key11": "3NXK2VhVQrai5TowPBL3dPXETujesjy5WsQjcYtKbPfaBzzFNbUXqVTLwBJqrCB84gmZTkitTx6hudFtNcQFMZET",
  "key12": "3HVSULNXp2jjVU2GfBX1LLE6sq2zhuiobRt4yvB6KmsmYhEpHXpS4Ps3sqHJNYgGJgaK7WTi2B6hARRx76FPrT3k",
  "key13": "CbzukhwBhaw1iNdSd1MteuFiXxeafeEWuaAHQkRs6cLsxExEpvtC9Bho18D4as8PLscgxRu1BhRbjJk7AXZYfZQ",
  "key14": "3DveLTW6fTf7nwWwznC1Xad5c5PznpBmkVrUo4HLHzDbBK4U3p96ZSpPMVLn2fa4DAbq6ThjFZE3MBHP8U3QpMDx",
  "key15": "4aaEDGn6knvQRUWKLQvXgyRR3MqMT1yKVah388YEDfntkvngiUg2efKHxGp5NgXvfugnxPrmLVrdpT7qSGZouodu",
  "key16": "5gaEwckByEfkynQskgpv9QoT9UninePfzFnwvtq6p7seLWmSE5MStXjE8jgmPhL5rvTQZZfD9SnuYQbCTXok6Kpg",
  "key17": "5sXWL17r3t2oLnHa9jsdz9Bbk1oQb3p5H74DJEUBsEqztm3upmwR5PR71RRNzoXJFQcqtKvskDA6o5paWpGEW3pE",
  "key18": "WHpKFuaXTkWu1oTrHkqaTESshBtdpJDfia1BVXBNq2TAEGnG4N6QZxnpa8GhFnqYeuQXi18CyN1rq1oHFDP8UBL",
  "key19": "bns4TpBnnxErfv1nnSPHUfr2KXrhKBcyyucWgXC3m5rFczS8hM7ZNDs65Hk83G9PPMnMLMoxTe7NmbacfYSfS39",
  "key20": "3WqwtDoVoFynifSCkMkPwnv7cn1tKa8bvdsd3vor9kFGt8rBCb5orJdatXJWV5w6KobSyhfaeJZAqZrW6NSNNs9k",
  "key21": "2sthoMJgpQ9Y7mS8YW3qLf9e8h3ubjgry3NCR2HU7do6XmA6pT11TmQbBLuaTcUpBjQimN5jt4qSzAwpbkD5gtn8",
  "key22": "4f7V5nu5vCCkeYjf8mPH1P6ruadLkvXpTEuC2vp6rRtfwvHC7cdQhwmBr7QUbxpyGEteB8Z3hCHaS387bHkJeoPt",
  "key23": "4BLbH3zCGa3GaiHaewXfKHe2wP7hVVCXFZD5QG1NgCXVE7nABrmvGv9JhZWYDK2zb7inWjEPz3aUopRiAJUnVMGA",
  "key24": "4TxHVBsu2disKWZFHga7486LNzo6MagoqPTKTivhDLCi6uXex6hDSgvd9YP9bXQPoRnxWTP5HuQYs1f8M65GNHU9",
  "key25": "44mAi35gVvbwjaBD7yn7URFvL795CVWyRbCBbEJvT9nN63kTQkJEVs2jGzma1XPB4uFM96yBbW8T822SfdYX4iTo",
  "key26": "2G8fbobfYS698PbHxMJS2hPPewB7x7dRicEKQ3odKpPyRhDquhMPvqGacXk7bqZ2dRxKxv57SboXhXPsfQrp73uu",
  "key27": "4ceuKKwrQMDbS3zWW4gNV2gUzRMcZmYBig8tAvRGUwDrwF3i3yxA62ETbhB26VmRtniTKPmK3NK9utatCqLPePQy",
  "key28": "4Ko8VFgeBbbhxwZ6CDw3qbEJSaC1m82CH8SyZMCZWsqjydmGvk5dBfXqsNTLAWCz2Chsd9epfAE9q3shAUHWsVoh",
  "key29": "Xi6avq63Xmmf6zYGQwV8e3WgVFbNzpoifUKey5oMBsMNPn99qFyKXhpwA8qkquMUGN4u6yjgJHqTM4NuaLcvzRn",
  "key30": "GBq8Zon5im58MjAQviUG2GRJyiE5izsqpVYsudiZeW1pLWy3YD6NJpcuWw5rQvfgNg5yHoDJ5Z7soGUGvhSrDgd",
  "key31": "toJwMnSYVDeN37MmGnTwNea2oPKHrLArWWCkwVPnRQ6TNerbT7UhMmRUnQtjNj6rten4cyricPGyL7FthkNw3da",
  "key32": "524HZ8P2VwEoiyY8LYRyPKvF7LrFv2noU7EvkbwmfpWyH4f3cuZY9wRCRnZwWLpik7FoHqtre6V6k2sfDRLpoaE",
  "key33": "2N4D85RQ8KSNWrc53WJM7PGi6CNp5Hq61RT4WbyZoEAsLZrnFdYrpHJHBSHGWQdmBnJoEtwzefyzCNTEQuMdSs1A",
  "key34": "31P3NXrDoJHdbTYkvc1BCW2jEMH3Hsg5sMBwBetagGTH3kbKnCa74KbdW5Av8h7ULf8EZXZNfRseFXGy2irizQJK",
  "key35": "3TzNi2JedsFRvCooqGtTabLUPsueaqXEYfHDPyua9DsEAfyAuCNpA6hQv4qSW63VTURu5FqpPKp93Rymq6vN7HDi",
  "key36": "25WMzDQ55pf3ZQUfpNEWuv1G8R2mfYnNRai54iQc3ry3DhqozpXpYWHdHac7NVvkZjFQQXfnnS9f76169vUwm7yA",
  "key37": "2uiPgmzXwnQK9yaZcngd3AJNLuAbqoW6x3xWnAUmr451xkjuAowNvzakQxrgdN1vQJkmStaJA1TTwQKeGhYELF9o",
  "key38": "2iAwNT7btqNHjPF7Lihh5N2v5vrpLnRskEAiHYyAFxUGdisuqtL1JYGDFLeXzFWR9CiRuP9wzVB96Jr7JDjj3gJ",
  "key39": "3PzdRVTi2wwsQQ84ET9vRmiHAGdxdDefqYvnFFQ3HG9P2W1hxb3C7EesLNHwNa4D2UQBKXCv4n3dEBBPpbCPdWZQ",
  "key40": "63AawQktCQpPCWEoknBWCYtWz4V2dTM99uETVGn27wRzLuFWrMZsJkwejPk93A9dzfkoCTBHUywtxxopqZjXi1nd"
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
