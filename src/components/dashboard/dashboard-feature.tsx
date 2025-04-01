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
    "2XKFdLxds7bsdqi5yhE2V8HKNatMgGSBhQ92sQRRXmBqgo1nke5mD7P7XGgainzRPK4DSepzWpR72mcQv6KvvEoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahVVctV4w9F1VcG1qkpGxcTTbhqWWXqs1FUSGX2uNRAteKw3ZGthAJvvZ2PPNt7kYXFdmmSpL4VyrFCEvgSBzd3",
  "key1": "4S8hjt2tK2jEt29aENovhV5cnPh8hD3fPfqPU5aUegZwdoVtiuqmtREKvLMFFW1cSHNeC459WmwWP8wVQoc1A4ff",
  "key2": "3tHiXudv2omzNWk3eUXy2QdhhrdieVibVCpQyg8SfRoMh12SHfgp5R47aeQ9S16SZGhfsmPAkny2kK2nbuX3Kfbr",
  "key3": "dUydyXssHZcTMT1qc9yjb1NdkKhnHkGDugs3cRcgMMHGMP6afbDqa3YBqgbYZ2g7bdy2oRuA8QZh12B7tSSQHUe",
  "key4": "3UvziXbZrY6HaQokTQZCp1DPUrbG5Th3crdKmdMFUxbBTBLjhABHERqQZKgFqk4uBHMnENt15fwHoxMboMETKBPy",
  "key5": "2XDYzQY4zXhZ4gHW36LGnNT7i2PPzbeX8h67T8tL4rcTSB3coDWgJLquvNhmQAhw8XusE5wvkZQkQFM1JhEnQvcP",
  "key6": "4Uidv23wxQrJ8oigakmzT2xmJjsz3Aiv55fxQvdJRvyS82hGNEHyEtSKfLF5kbnFbDP8pyECaFuNyowroPVsuZ6Y",
  "key7": "2r7muUp7vKAwN2n6dZHJJRQQ6ppFfX3uuko5tZGfi42HZu1df172VVHDsoz4Hnb6gE2GDuhV7umzCy2EZFHwsdqG",
  "key8": "u5hnCUyzjmwykGGaTy5DsmCiH4BCRR5mjF38B9Dng1pN14DfMqajD1JiN3U9Ka6XusiH2RPPcSRrwcm9JCLNEGF",
  "key9": "hs2C7Qf3jVY4Miqt9Ntq1SyE9SCckX4PxdcvPWa5UrscJE5mfcM7Ysg6tEqkoATfSGxZ3x6amqkE71Bvy394uji",
  "key10": "fjha7vP5hfFFTH9DkbkbMyYj5zBqFMczAVRvp4vWh1cWfmwE7p6v4TWtxPukZ55AZBxmLw3caSwKkur8Faft1Xy",
  "key11": "Vz3EkNXraTuArUWBNKCNA3JHGwEDVe8iDj7eVEQu2ixkXNGRLqFNC1rzqztbTzd5Uoni7QxoqmGpCveETdumDq3",
  "key12": "63hRD8ndNWbV1KRWf9JvPM6uUJkzLoay9LaSYM46Unn21akkkPo41guTVMfrdCwBeKWwB8bWQ2QAn6EaEXoZd3Mi",
  "key13": "3hxJpAyBpc5eG5TMdb1TCp1S3zN5ZBtpfqHsPvGTC4Zx2i9Js1Pw6m9fDq36fRtQ7JrSdATYMZzvTXhP9yN31BkA",
  "key14": "3gJWrssp3SYMB4Gzpbg6kXYVN4aaNkD4Q1QfRqM9i4umbH5uuUsQWsYwrhBUpRN7BvMZ3ycfovivgDEQ4wYzkxkS",
  "key15": "5Qs9gk3jkzsgAFpYKDV3ZqZLR6uv4nHen2yjkxTRz5DsQmryNNmcPH3wfLWgMV6iyvvXHRoLwCg7B6XC3Sr3DnBd",
  "key16": "5ooCt4RkF5GBSo2rdaJbRzdPB4h9WCZLXrgvGG1YN8HVXhriKe4yYAucZ9R9W5AzXHiDxgd7jJ3ry8CH613YyvGw",
  "key17": "5V7ZgpAciSeSQJMZZc8xq3Q21kT3PWbTNyMwrnxovdpTGd6WsJYcSKDsP4u4FaARtAo5ugLCvtKaLEHZ4dryD9ud",
  "key18": "2ZuHyxNXBqBPy19sXMNBnn2mLoCojUo9q1dRfZsr7rUozeukUcDWk5KYzB8EFXHUFsrY59NJqhBJDh7fUkHHGnp5",
  "key19": "2C1HP1nErqQBQTY5fVhVTVoEDNvKZoigAp7YZTg6dR9BPwnDzGT5bEK5awGthVBLyoFeKNwk7oEr8VWpcYjY7HC2",
  "key20": "437aQ2qWhjBgV5P4JB8tHv7RhBzzJJx1Jjpqu3gfTGhZne1nFWMJzSV73xUDxMxJMVLDHsw4hqHtBuxaXRhRDXCZ",
  "key21": "2FBG7g6GPVq8CzmA7xae413x7pfen6QXAY8QzCbpMRiCpxwP8Yxxd8jy4mVdwsrQRvFGXW4F7X2YS7SAnEg7mKzF",
  "key22": "5YxjQQg41v6wtawqmvrS5jtj5vYYbZA2ZaEyrKGHgw45mWMWcf5DjbiBjZ4TjWDrwTnKoWeHyzhpsmd5RtxT1ctp",
  "key23": "2LmyMe1MqC4MBt6DBFkLLF9BfyR4S1HpYYhdTXZc3ziUF8xWdWHfJuQpHnAx7UZEiFU9WMsL7jmr9ifS1kfQgWyR",
  "key24": "GaHgpzDnuPj3wZsFQz8Ar5JEZ2EmtuzRTq7Lw2XbRSugFzAhraeBsodEsNzzx7UYvS9nUyQgyHq4VyJG4Mku6jD",
  "key25": "VPKKGYavwJTHsHDqvrqMXdPpFAzzkDHZ5c5Bmj7qeSfLjMPcCyNbwTFEVTM1AJyjd4Smt1j1F2psfTG8P4SvNrU",
  "key26": "7oVvnaNxHd5HvzjSJWXvUEUGF8vS8rtbTDsHrLcrsra6NPLqjizLwtGq23evqBaxSHuYE6jxJbqXGqewXreC4kM",
  "key27": "8DazcLYXGaxb1s9UCLJCuQg5m9ZwNAjADYdTSbNEbzia9PhBJvQujFhp1kX4No7EaVNGvEnj25QdBn1SJa2vv1X",
  "key28": "4NoNLVEUJbzZFpM5jRbXRe2qyPcY4bLYwLebLpy6kfpH7uAEGcyXnQW9ETNgrpwWv5SLXhTo3EN3Jqiss8yBpndM",
  "key29": "zdRWBLmS5S8DZ2w6YNtnmkyhUg57QteAqdHrPEmBmYgCAmEghHJ7Pfo5KuGdGPkX7dUfnTzRdneQMnQgtRVsVop",
  "key30": "5CKfCZi2mSipvarH2xKd28CjquzUptamWx1Pt9Z9pLioCkueqs3YWJiLS4Q6ooc5yLAQ2TWLEhhHYFnPYWq41Vaf"
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
