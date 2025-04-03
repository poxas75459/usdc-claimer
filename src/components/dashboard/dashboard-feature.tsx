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
    "3TmrtUEeUAhbkeWYw7RRw1ppAt4jpPYFPJv9kXENpeno3BMH4UcwBBemQrRsAUsD3fo12Zu1jGkRxSuUsNsBa3a8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNb2je1E8NBi7eHNvMijeRbuphfGtZ6KdnLvY7oe9CjrVC6vJUxVnWKVgLYtd3Z2K3FyyDpZBASZGYDebpwUbAy",
  "key1": "5iDr9qTraay7QEd5jhXpiuQBTgDzTTWqh29UNB3Ted8Uks4onYoMNDnLf1C2Ur2WZWhJFC36FLFknhHd4A5shUuq",
  "key2": "2Mt8iSGqG356VmxHoT37uYGcjzMeYUF75XoU2mvBPUitmzRRmqLMqUxgxw3yRP3ipMaK1j9RMiyR1tNKB38Miw95",
  "key3": "5MdjsoBR44j1UuPRcNbf7XmT9dFBW4jCCK3Pf1XUCSbUBXfxjYEvrcugn7cemRse7UeV1181X5weN1JQad6vHyGd",
  "key4": "2Wa35cdGCY61EQuY3snUDYavuNhsvyiS3AzewB9m1oodiNEqfZd6SckSirf4tkYZaDJM7WSyNJMSE2b9xkniMK1X",
  "key5": "3tHUDsUJxDMJDPFEgLtbPihfLZLGobW6Qv3vQfkbGE1NrqdXQXoG6deynaRhm7KU4aTBrZ4qSW9VBRRRQHWf6zE3",
  "key6": "5Yh42SbexxUdFtp7ENew66eksv3W7qTt9TxYz4oz3MygxqVwb5tsrzbRaRiyY28BiV7BGW7PCKewvcZ31yehvTTp",
  "key7": "3bvX2G7sNroHx7XeK2WnYn3ma73YU8WTLbRSpW63LbTeiMVq4iKPsKpBTmmPTx1zDAcfqWqjYAtqXuimiCVZSscq",
  "key8": "4XMrVyBCEoakompyrcXQX8wUeeMksQaXYZ1F39oU66oRYSztVnzceMExNepDmPNfFbaM7yqEBRT3nKhAS9Yu8gfj",
  "key9": "61GQFQg9tuPnW36Tru2Z78Fe7unxXtcgnE2pHtNGvrT8oLAhe5bRZj4ANaA3piv6mGdyHRsf2o6WMQibYNBQT5R6",
  "key10": "3cRtNG2JvTNxr3mAXy5pHUTpNdChiDzueAH3HWoJyMonq1aqUAQRGJf4i6h9pYQStm3uiwoY5ypude1cHRV1YMHd",
  "key11": "5av2Pnv8fX4zob1FP9RGhFv66K4K1D3CKrQ3wocmocVuCcjRc8n2PpzALknERNAasmxGxCchw4bDCxLF7kXqr2hH",
  "key12": "5Bad9grVhGyuSummWu6KvjLUrFbcP6x3S42eFVG2h4rjs8JB3tBFqgEcDwXsauQinJvgkMsPCEKdFhyuvqzpxp4F",
  "key13": "5LzVUHWNC4qeu8wXJZt4bgtrpAdFhKkwL1QkmTDasQ7Yh4dACmwLebHkifWBi14z6JtbAyjjTqsHueS75Vvu7b85",
  "key14": "65U9t236hGB5g7qQf8vNdjDoMgi9QvDuQMJmqKYfXWxPNYhFnK9oajpS4oz3xdCSq3uaJeF7f4Z9WzXX1vABwan5",
  "key15": "4nVNQL1VTsS3xyxDxSh8dctpfLeJqMB8pD1Ma7DFW8eoRpDpZKPcKP3LcY4KdVeun254H2rF8timo4mkUmvihcRy",
  "key16": "2QMEcSJWXdjQNJrTk8DnqNwosVoYcuUDvFQdgUD8ueUUs7dcvNG6P5tEnaRGf8hdgj375brA3KkXxbDxrZqQ4tmh",
  "key17": "2pzN8DgbxFFLHTEqJjZCKDapP9qnn68vsB6ftu9qEsyPL575EDtD2Ak4AmvqVn3AA61wurGq126WPkhwooFX3m1q",
  "key18": "3iCwq6Uva9t7Khqivqp1bBFiQewnwAD1Yf5MSvc8xMQdqpMgDEe1RLAStQsSc1dKATZHQPoomF8j6aoUiGhFiavo",
  "key19": "2T9CMWMHH6sshaaiv5EkW4m8eSCG1RWc8SQChXwKcuXiuhAbyFV3XdyJRQaa2ZzWmTxQg8ZySSVa43gPMqhaAZCV",
  "key20": "2LAgPTirmeRvWpgHqALTzeq29hxkRFHGGcFasxSwVmaPev439VAdmPHdHrPdc85hoEqcboFVbX6YzBqq6dHGdtNt",
  "key21": "2YJuCcgduUury7BpP5RsxE4WCYWpZMq3qTappTbFCYoSwX63TtVe6UQrabS3R2t4MntfEgpDmQqwVnxiPEjQC86C",
  "key22": "2rzv6ywmfQiYbmFTGBYcdkWsvyHKFKZGpWnWgcnNzntFKiCkurhHVKnMRmYPvxzL66jG4kneXsz3PPi27Y8VieBC",
  "key23": "4qQ86kBTdbwsoxXhF3bJ4P8ySYoBLYKWkrULBE6ibNDiofLkUpUvX4cksZ9VA33UHiGmDSZ4AwcB6V9zuAXMHPiz",
  "key24": "4LxV8FR2xt4h8dzVdxM7fJEn7naynCarknHnEgR5J7s4QuGHeHFCDwBFSVX4TTgWsaji1VdipduP2wTMmZYLkh9j",
  "key25": "4ppWaikCLDwZhuaiV32sg48sfdQkFz84CYtzy6n3J1QHqKhdHRRWYaEdfdwxjknF9ssB2ZLJeQ9qHwaScBCfyNdi"
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
