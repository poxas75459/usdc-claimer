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
    "ZrcLcaq2VrkaaKH7Xc1BDvbLWxdyoP6Bti16g63dr5V1BigpC7SYCKbkwzxbdguBvjiBcjZmKK5SVXsKdgo9QB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JoAd1jeF8eLteYzdVRw9B9N7deLkuAvv1N16RfuUN3iB2m1tDVfEYBSbYPSVRMSWa7do2d5PxJ5SdDbQyXoBC4",
  "key1": "4Sv3gL8CPwBWizLkoifAdFKkSDpcppc1CeTRkUoFpnECmit1GTcr4jf9Ht586X2WwMBxEzhXGwUHw19XvnZesx8X",
  "key2": "4nKBuaNjNwEQ3GbNnAUGxeLQBVSb3E9fa4jWRhystmmHKUJb5BHiuzpP3Hto478CgwY7sEGY9cZG8JqMh5WYk2ZW",
  "key3": "fwAEyRLPNCebodvnUAhfBpxorSq7CUTqcp5hAkBSLGxeRHyPxAN29a7MmGR4GHTevYMnMJ9g5LnhYXRdw6ibFhL",
  "key4": "2DkoCRQYphGtkZ6weUoGJdka6Uj2ABrCN8oJqMhu2Lqo4mD1QACxbonGV2Ri7CnZijcwyDx2pvq7PwPKQAAR7sMF",
  "key5": "5mpM5ttFPogDuJQxxGHZ2Cku47FbWFiQA8DZYdXVRDGbQGoVkScKodkvZepVYdSY4sJ72RcNe7SF2EbheJEvH2TQ",
  "key6": "GSrdePR78m2vtNkSAyXPXK6dtH8jS6TBBDh71A3JsVuQm2JxdFQrzstaxHdmAC57bU9ZiVrJkL3Y6S71xEupSrX",
  "key7": "3TZHPEdw7hmESNX3UUQL9pLYKgsFRGiTnp9NHBwmLLRAjxuBUisbVMoeq5oh13px5dFpdMj6JnNstCot8yNMGgQ",
  "key8": "43XBt9T2iD9YrmLCM2VzpBsVUzbNDkYdGtFnr92VahEYMn2BuhsYgGVkxcvbfwWZrw3yoGx3GHto2HJaPeQvoTMe",
  "key9": "29yK98Mwuye6rcihkaeovtmwv3pgUnRBKj5CHSMjd2QMLPb46K3jVQPzUxS3e2rjSvydh93PbVyoitXMExLJuvHT",
  "key10": "4sTDENtUUCUGSyxjo2pjR2uhsVZrEDy31ZbjrsFzNzTHKWz6QTCxviM4wjo2jhiyiGQR1foynD9HkrcugwsH7qwi",
  "key11": "2Udicm1jA4cfhG6UaBYACWevTmX4QuBKBWuiEGo16DWmx1AdLoWjLaWfBndB9eX2nm2rTyCQ9h2fSRPNZgsAFrQq",
  "key12": "5fcxBKtDSWtxdFXR2A2QjqGa9iRsFLgfCfjiS3Mf9sWi5gckT3DwrvhKqH89S2wbSSxiAjx1hXMb67i9m9tMiGdi",
  "key13": "kMjebS36fMtGFffmtd95Nd6Eips41VQfS19419XzmrQ6xfaxDZhsC5KTD6qqBhv4WhXnPaQZKCRmXUDTTcSLVGo",
  "key14": "4NsmiWqZKswJ3oM21g7Qd7PsyJdNZ9pmBV29PUvtosNwYudG12Dva98n4S3wjgEWrEsWTRj1KK2BJhMfYa9qTAm6",
  "key15": "54Xg7ggzCVf3aqAJCxgsmUj3pxbDDHRoJZKA4dYsw4DMXtF8pPvLp53keV7yKsATa9HDJj1R1wbqMiVjdDhdXdzJ",
  "key16": "8NZS6tGySEyfysZLphCLhqWrTxQqwcy1eeqMG6QmmytKWzW8rTkKgskhPJqVJF9f9Lza1X5LToenqT8z3WfXZ3Z",
  "key17": "5QywNCWWtwq5x9Br6awyMS8cfQibEmgnLPUCDQPVXPDZB4GcaF9hYqbrB7AQiDFU5UUiGzNJGKmMPrqvVrHwqTtB",
  "key18": "4Nt9eJ8KNFETBvst2v1suDxQ3Dw5kZVhDYLrMjZVYwgu5sxnDvPbaKodRoChRbym4pXxof3tciZQ4CMuiuL6zayL",
  "key19": "2GUipZpFcRAGRfHXc4G8i77YtY7x5j6FVrbLBFZkE81BUAkPXX61dS3q8WrFBTwhYSvcRM3B58sDAUuekNPrVLUU",
  "key20": "4s7vQH5pymYFehsUDanCiwD5FR56Z7knibMn6wk9P9L81QpjhpjVMkeAx9AvKywdoy9gRqnJYZ7P1i7yyUXRsE6P",
  "key21": "3iRG883L3KCtA1vezwGrMRmiBHVPMUMnNRb9KpMqVPNGDg1s2cNN5MhZyvZBNHkd9qDC1UXLVKbx2uaQedzia9jB",
  "key22": "4VmuwK6DKdhzWcEneASHEPr7AdVd9qfwwfwHRDsrR42KUDR5U64hE3YYVXrnZXQJB6aTU8MFZNBrsextwx8nmoUH",
  "key23": "4JfeQJBt3aQVoh8asp6CC787aTYjcBz8Cmy4XsAdJCuhNVjRxXF9FS8bMaRad7pH7tSyfbmbQPkgHQeiJH4J6ACV",
  "key24": "3KT2D22JxYP3eEwzZw7YgMsZzXnmo6q3ddTqajWkKcbe71WrKmz34rMjMRcX6jcuF5cKepp6NM7zgUgkqsJ8Xiy4",
  "key25": "5nizaR356RHiahT2RNzBChNUuodDARCLfuDHQCDDkEHZDWpcxG2AkwzTZEALwV1anufw23RbsVNKUh1FXkBjXi12",
  "key26": "4z8ybkEYQy7wawp1CUv3RH4g6BtoedGVCuqYFh4FWxG9fgP3qrz6561womnBzZzDRpbDJCSgSYuTPzGE4jC4PXVk",
  "key27": "6wU2PTzcwDXinZSzqAM7peL6JxPShsgctRa7W4wmLfELhmk6zsfUYHPVdw2Z79Xnz5ghvLC7edT7Tkezo7bG8EH"
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
