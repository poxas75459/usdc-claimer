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
    "2dFVdU8FMDA2bHnuhLpaGETofYiovBnuJ1CcFGiyxe4SvHfLaz5SXaiGW4Xz3EWDLoQFdXPpfDuDTVJTmhsTB9P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v9hLbx5Jbqvsbgs4j2edvmLicHMvS9nAJD5mc3kJt8GQke8cpsp224J9RFL3eKtTRoxurSvKLmNoqcEeAAjrSgi",
  "key1": "rwNkEUmKXyMNUPJx8WCcR1NgPoYK5yfzDvLuYLm7UdBfsURTPkyikyvJBX33fGwJndqhf5gy7oExEWTrabjo5uZ",
  "key2": "5kfjnJ3Jwz19wbrSk3RUCrC3bsz5mi7ewMapDzNNWBdvPb64Uxqrj3Q8teNFZGe2Pr9Mj2gjBvJ7oTUgyRS1hZow",
  "key3": "44VZ7cLgrLq6qbHHvK9RXqr6bwCqLbw31vRyLAE6umasG1a5nSeEJLVQbD8MJeXAiPQTRZoBMAMHEZ2xt2Yzjhxu",
  "key4": "FompbyT5jUPrCMX7Bn9Vm92xebwukAu7AMbJh15JW9tBb9VaMMtMquNKZNP7kmVCvmG6bMK7s3FmQTVHvcYhm7g",
  "key5": "ZKoVwCFaC8CvaGVSoWs2vnD3BST9TDYEUvHqWqjvjWR9nRxEjbYt6B5THzZpCDsXaCf6HdxFsGmoVNQLPiC8XqW",
  "key6": "3gyWBKB7ZkHWZQZEcQiqx2oLNxxF4hKDMSeU4vXcQ5rT78oRqanrqdGgNkZy1jNpDoNzuejzLwAMbaxSU7zbHv5T",
  "key7": "5pnUW6LZZLnBtNBYhW4hyGML3nwmWwDv7VySwhsgZY6TzL6NUKQQAjE47JYy3xHhAKYU5AVzCMLWe64n3XTQAdKu",
  "key8": "2YAPQzw3jZJAd3L76HqHjHHFfQwaSXUbC2GzLyVpM9Le8RW371Uvd39zv2wDirBjPJDpX7SDAhZJoZwt7KyuFn9i",
  "key9": "F42XnUjRka8me5bokB7UVkqefUa8Ypj8TPHSjdatTcvs1DRQHmhdrc9J3Z9zXrw1cM4HBVYoX193DQGSiRpt4kT",
  "key10": "4QYHomTRJx75VyTMACZ3nWQrqmk6CP4jgJSdQa8FupJn4LZkiyeTGAG5i3HKaq5JsrEhgaND3p8yzpaSxGysheKb",
  "key11": "46pSooeyDzvVWdgqNiZcaKhemxzZTR3dedWZPwKtA4q8F86TdX6kZygPG5VNFCkmaZbogDoqY9fR4t3fhdm97u5",
  "key12": "5VWFNH3MD5EsEJoSup2rPN4oqgaRuC4khiTANsKbCK1kgam3UQJ54o1Sv2FtwiKeDtfBPyxjhW6DPaZ5TKyBcVPf",
  "key13": "2RDzDyxuECRfndZ3YRHSoWVi3JShrAqpYeZgLcnpJKvKkH5AZyr2qHdrAm36a6mpNUAFEVKLpGWC4g4y5fRjzRxh",
  "key14": "5oamBeBauVBbF5WLPWPNp6SoXKFpasnpdxPmuj4QLZ9dK3XsV9ctuuK9E6aZk7um8JcbL68SSvPbLyukpiZRqH7o",
  "key15": "2VNQpX1S9krXtQmogG9U2aZLbYe7vL1TBuqCu9pAD7RdpbXKuFCsrWXa92ofnvRDYuhwb8kr3Y5xF1CHBEJQS33k",
  "key16": "2gUhUeZq1Z9TarYsEQPDGenXMoxYfqPyjdx3dikAyRsdP8S1uPyeiCzjKrET52UPGMnMaXE8rGB7nJrf9g2YrjbZ",
  "key17": "57cPm2dV6L39Nq24XX3VaqgS6YpnBjBTuV13NhubDcP65dLn6iGBuDZPfaS1jWL7L6A6UhakEdGjm7iREff16h9x",
  "key18": "4J9qGpvGSSWx4by44gkVFCPrxQ228Q8xR3nTzCbpMxjvL3DsjGJKoD8EFdgAuEXJaufokwibcRhwAqrz6Cek8d4r",
  "key19": "67pvgf7aXA4ANLRCVHtA1nM66M4gJi9kLQs5LRUzZovS4J3x5Ke6W5QFwH4Bx6By2cgPeDB9KozPb8hbjZJgg546",
  "key20": "2YBDkRnmobv1nHFF13nxrr53gg9fLYFnQDfixVJAZqH6jNn1WTREePR8YDwah7xVZGXm9Qey4jDhfipNLsyTb1ra",
  "key21": "5B8xjz5cQTBLYUaAoJdatrz2mWvZWF6Pp6dqfAHCV2qNp7j2okHBv78DnJGBaARY6RRygVoqYgjdC18mNU47n8yB",
  "key22": "qh8GXZGj65BeVsBtH5DP7Pe28iJMPigC69eD5KPs2vRwhwNzfzxcZzU1hUHdcZghu3juVc6XLKiTynkhUMmDPgB",
  "key23": "54iggdwT6hAwS6ZqMjjHDe3QNVB7vGm9vyty41G1HNpzMGdQ6VEMThynM4mkwpGj7FfGFe5MRXWKeDphNgt5NAKm",
  "key24": "4fAKPjkN4qLjzmGoqXZaqT2UBXMo4nWyk9ZMhHgw1CjgUL1aroyPpo4Pw3R7x24d6mAk7yvFAXMmU1vWFyjuAocq",
  "key25": "vnLNUujgj73kYCHv2TvZqZ976EpiLxFjZhhAV3fbzsaeXm2jeecFKney9njoCJXfpChW4NugP2DHAGf3BhDdVZ3",
  "key26": "42StHp9q8J5sRVtrXi3nmWVmW4pVYGJxLdSNJSDaWQdqDY4WNAAwWQRaHzcx2c1uXUDt5qFVNWDQvyRheCoyXfH8",
  "key27": "3YZJYnREE44SUqpgDv5xnjJp6uUDkK46iJToYCAm5mWe7bxgx7EcbUa2cnNsmFaVtH44kHf81MGc9xsn49xbf5rx",
  "key28": "25n5iKwwmBUgnfVM664MSfmrcdHoztNBaojdecZTuTXpaXbqVcav1TrdLw58x4FG6a4fPAtAYywwpYG2ynPW84c9",
  "key29": "4ZoeLaSkDYeWjnnCad458btChJA9mrFAXuQGU8X2CJLXtPrtBqDM73vNQzwzSDPFrWez7tsVMHvSJxpynPjB1d7E",
  "key30": "5iARoGTCcn9wKyJvY2DNZtQsAK9etT3MUAgCdbURRHXzNyyZDGoFmeGGr8SQfzz12HcHrLCwnX8nqgp8cXM14uCc",
  "key31": "iZHw3DxGkxH2FWUHSy1MMcNYnUcwBMS5bxoj8cBiQPvHYpJhBC6CP13WPbZ3r9dQ4A5qzDG7sHEV71VB7q3WhKt",
  "key32": "4Nx1ndRUyg2HWTXcwWTN1C9WwCDEt7wngPsDSR3aoUd3jVCa4vcZFWbhXuZWoHPagB9PApg6idPbXB5C1RSei4i9"
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
