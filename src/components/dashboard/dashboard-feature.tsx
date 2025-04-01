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
    "2xiG8SZ6jEYYnyaaC4NrTrYmHjFAjUyci8SY5VPtfEBuZ41w58dFNqx8atozp6kVB7mrn1r4dubvpVjrcgrU9wWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vw2bg1CiiaBvexUbsHKEuyepKkD5zzC5SfuUuBDrtYvWMTrNE3VuaBmDWPtmN8GLo9L8Hen3N1tqBbTF5svDSGM",
  "key1": "2VJP6TecuUxH5Ry4ismwePzoCz7wNsiBJ8FwDUYswEYJVtw6LZm1BD47uXhgHS6fHkzoEVnGSpL9VCA1vzhiKqSf",
  "key2": "26KEUHfY4kfjVkGLo2XEfCKufXEBdsiMtmozfDnz2xMHWnKMqfGjQvbxMym35SAS2fNawN8ZcgeyXbmBYSBzZhys",
  "key3": "2Z8pEYUdPEg17TuBrV2MJsRPC6sAhVmBawRqnuQr8qtMzaccb5yksqapomeQM1nXQ8fndf7KXFgfMZppZmkNHVm9",
  "key4": "58c8zQXZc19SC7nCY23QsDttBnxsdJm2jZxfDoG1Xw3C4ko5PiSsENWK1NRsaYEAPpUosaseLZAeM6rcrFCsPJAA",
  "key5": "4srWgdSTbbNKPZtPh1Wx6vBWscPbC2fDkc9DBoeEDy98hSiDVf4mmKkLSafWR93zTDB6EyWPRRqYmwxo2jeSGiAm",
  "key6": "PpYEu2GFzRiVqsAHD5NpjDa7rJn8r7VRFdLaKU9JksKwPUcvyb4HHxqXGFkhzVjAHwnn3zzKnaNMn2dv5b7jhuo",
  "key7": "22yuvJ7WjiXYVmPYpvt1yoJFC2NUVxJZXrBtBfVoCsnMh3vcc2ceAAwyVo3VmYoQ2BuNxLiLFqh6QYpwbBrXMAJU",
  "key8": "22EpbK6YXLs957m63CaZhZ8SzR3CYF36xWAwVGxcoDUjwhvLRd8B4EVRsnKHPZuM8aprTLimnHu462rvP7EzwT23",
  "key9": "3VDXR3P7qvKWfwxV8f5JHCLXYEifVkNAWhp1LjnCUsjsxHMQYposuNKdmyGidB5nHKLN1YCvZ8qJE5NWFd64kakJ",
  "key10": "5tewHsxekQ8j8hLymWm8SNantsXuJYhW4QfUrvELWnqNA4x5CLgf4NyjgieyzGxhfoXidYGWmpS2E9ZUvd3v3o4E",
  "key11": "2e3fFMRnKY4Mh52BKEPVJJVxDQPFDR5xS3Th3pyqBjxgSDedbHBLjrvM3i8xzocsT5eW6BNxGah3eDo9DSEW9gRT",
  "key12": "56BpqyxzYubdMKwTfpmDGqFwgEkbnsMnvjj4C9AJAbzW6zNqHXhxqUrLD9QLbb3m71idbjETRg2P8iAsykXK2wDA",
  "key13": "3JwsxFHZQjuWXygopX4D9e7XxULxgvAKe23dSCQvDKFE58zsv2zqK4tFL2645LH9NGTopLt9ptnjtUJNCaVRZrRh",
  "key14": "birYaWuq9g5yJn1xJ95ApSHc1CirJ4AvHZ1QGRFCXaYvX8bnLaNXh8hHjbfKZMKTzEerWW67AtMKyE99Dty2nqw",
  "key15": "3gzK3ijc2QVC8ZXoksBapBYngxoMgudxq4uaWYxQJyXwerxi9fT8nLEFADirqvNadfQJJdUNEW7NoogsrSZpLfrs",
  "key16": "3CG7iaxwrXf3c8S8H277fQeRQjXZw3xH9NcCDUmZQ7wk7CLUSsDWAGsDhrjnDzJpS15pCoXTJuoqcwqCfP2Q6Lhk",
  "key17": "jHzP8AhvgJmRtgnZRotamGBecLAyq42SXj4Gw7jPJV3bqh1tDdUSYvktdwjv1D36VaxwxYmAnzeD3ZomkgNTi6a",
  "key18": "2kxsPrPAXC8rdFkU25Ryz6Kjr1uDiksxKPDaJzuC9KuV6GRTsHK43nCMr1fphg2fe4nmeR8cn6Kf2f17T9JW8tNV",
  "key19": "3KoEngWL3GcenGJCYdSiGEMDKKLpRmj83Vp63Ru86nsGTwUCdm7avpnwnK21kVkYfZq8zqnV32dBXrNz3YqaiXqD",
  "key20": "3mnV5FyECfbcWiW3JMi6jpYxCVmnaQVxcDSLJHvKjpmiPmGRCs6cV7kCrM5hgDwG3kLb6yiJhRUawNH1wWxU2DVf",
  "key21": "4tqVwjxyR1Fji1tifDGcJdxdzDmiuPawk3im5KTc2yrDjJNq6xiK3Fet6uJy5uoY1Bj3oxMFm4DUD7SrUZTocitN",
  "key22": "fqzU1CQajSD9U1P6UpKzLR1WMMhqFpTkH9Sbvbe7ciGkSMEtWs9heoU3wxiQD4hw3u2iqXWK9z3XNA2hhtnobTF",
  "key23": "2cSLVtVSt2b5gyDSSTpmcS3Do26HwQvidNxVyoEAp2m8X2uy41eLPpbThGBykoDBmTqA91Ac8qW7PHZKJmrMQ5s7",
  "key24": "5kbBhwSZxHQUiG1eYvyFbzvoFjq4JPbzHJKHnL8Q4229HCZwnvy5kmjRKb6aF7diAzikP7N7dfhf51MbVX2hHnJD",
  "key25": "3qTuh8ozmoWuS38dLJX6SyDK4rNairiUSgfg5ATdfUMhqDWkQwvTse7rnReYBrTPR1vMmvFQE8s61W7c9ou4gVHW"
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
