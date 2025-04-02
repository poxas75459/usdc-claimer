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
    "5vwX6RQc72XLMy4xcYWyN1zhbXhKp3N9VuiMj21cDDuhUr1YEG6E6KwbFdmVkyYCsm2vAJoznnpCX9f8P86WSJWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zz8NmYhyDE4TcXAftH7CGPrZPGxRqyusHMmKUExXwaJJquCpukKKbH29bvA3jVWRmHMMiv9dsvMzAyffTWkXh5",
  "key1": "64uaYmBvAYBLaQP4KooKcXgNVJCT6uoK5BQc7JCEWcMC1LsdruJzYQK545WFKYzkvF2XhNe7wTiqwaaJo2UWiyGF",
  "key2": "2nUifm8n2y98h5sFZ2MeoL4xopCcddKihUaiCtzUJsuqG3iZjzihBijnmHGrmKUA4K8wYrSkd8rSjDS98wTRzGyG",
  "key3": "3xUYP4sjWXFSbX99aUbcbPdEcbEYriUGgefvEhqac1R6C6ggVQEZfTV2i4tWXmHG8ZREag7RBFsF7C5qoEqPe56s",
  "key4": "PFXXrYVm2qcBTeadLWhV1AajP7UbaHDtU868W7xBAxdebUBfoSpmuNsnekU19ebPXGvdtFThf8SU8RhbRiX7EyM",
  "key5": "3Cz9Ei8Z44aVYT7AjmLX9NDBm4X2VraqnQaqPEdmgrAYqmBghxi1cUUfEvenaHQH7NgwsLCpNbhr8z1vtFbB3ca7",
  "key6": "3nGifmeoEQRfyj8tKEcAf8c1CKyeJWm9dNs1YhATcPkaqmjLAm4PU55XowpTLEfPgTGPrr9MrpkHx7zrt2wRNQG6",
  "key7": "552RQQJPvJHbirYDSzRoC4y2TdkN4TGB1PTi8SmRh77yeuVuzGebn2uTaG3Hb4KH7CojDTYY8peH1neUvkQkNs2z",
  "key8": "3HaBg4Dq86QsfkNUH38FnKUv2ZhpWtk3Bt6jnQ4mBFgW6mDsypBhBX5fDEHvKM6QJ7XgECN85ETJbet2UAeRSTQU",
  "key9": "2tfjK9gc59cKcrcf94o9JJJ4n2ATviGi563cpprmzsYfjxVJVkaQtPzvqHJ7pui8KtbjxEtdbzreBrnk2z8G98x",
  "key10": "4uwPcR17nDF3WTe39xabXMZ9dk1s7DCFzhyVneg5JC3DxrSTiKkPcWupUWE4qcLhxcpynoB2ahtPMBeTyYmvnjWw",
  "key11": "3a5GZqL4qBsMwca2DXd5Y2wiMuFy8xnU95uLE7pRusAjaJSbVRpXrP2e19H5vFDBWigtA7RpY2a28yuoSGNMBZeb",
  "key12": "311mXTaePj9ir1AQr8gDymNU11yBG2TQxWds83Kt25yn6t8stnBvLv17uytQno9KLhLdae1rmbPTRCLiV2m26Fe7",
  "key13": "4PgRucYp4PuTJCGVr981CmecB1LNQqFqGy71ujpgLUwBAsU1ARkSvKEgfYv27ocg4iur4JiFqBfeyoC1sW4eF8jx",
  "key14": "4u3DXRTSpGZz1kKosajAFfLobjz57xc2yA1tSrnNqdxM3zHdvBgG2NwfB6FeLLiQvrgoKK89GhJ6ewfKmqst4Fjc",
  "key15": "5eQfrq7mtYgu65rH655rhXiG5kvRwGDkf3sQJkMbU7Nmz58zB7cWuH4Gv47Vz8pwMCDKMButq5BhKLJ4zZ9YZbXD",
  "key16": "4AFfZA866rVComTwc3WXPW4emGB9EVVgNceMMMnZJr69hJRScgZJTRK8APejt1nx29nzqZGArCFn3g9uYvF55dkr",
  "key17": "3px8eHzeuJ7ZTxL4dJJezpSh7bPix1kpWcwnLHPi5fuwkGf91YvUuMPmyp8kdshiunNhyULhKNdFPVjv26LbP8Ku",
  "key18": "4vXtWnahgucrRQkx25rrLunZ6aLY646ESWLDgnuHDFuhMuv6HTAbUCpazyUdpau3SMEFFwNzVLM15aYvuQMhEGvw",
  "key19": "4LKMPp4cvfj3i1YWzEfGyhwQVTCon9D53XEtgTQP4mqWzT18y8j2zCbp8Ty69AwZGiTxEzq4kHvYiYdYrzdhfqP6",
  "key20": "3gGErrZNCFoqkEpMUmYrubQwkRaKMTEiPEBLTdDTHv8CgjLH3hbRzZ4N2yH5xVghiASiniTBqLE7XmRZmqNxozcz",
  "key21": "5ierJef4CLx5pQuvNx9PSCBrKzD8BWMBUch5KRKre8Ny4pXMd8SQwJVz6rKi1FyLAjMZ3uFwmEAhj7AEH5ZM7woz",
  "key22": "5dMR3BXG37YXTxfaCnSujfGeAb1FSC1TSEiRm3Zd9j8sunPdAEeY5Jo8j97M3W997bmVKH96fjiA9cxUgN7aU1cZ",
  "key23": "27er5MDe5iNaTLhNUp5LB2Mk5aKxF4ChBJUm3nEoYRzeUofkKK95EsgxmnAgSKmRh42UXG7CLSPuWrNYiuSKwTkz",
  "key24": "3Ut5AYiBe3eM21hip83MVqpCJNSqyZeJTNaZBccvurQ8vcWWj3PCdbfKhV6qD6omuGz62KJnz7MYR46G57hba3w9",
  "key25": "2vy4T1YKPhCms7Yi3UsxwpzZgPuLf3MJAKp9zEWMMRwY22RTB4TD9Es2ALKYiuouQZ3CeEwkfh6QwiYU1592jhnB",
  "key26": "5ztmEF5iFqhAXZUcC9uzmLMGtdGKBU1ZPLHB8o5NSJam1BFq5Xf3emK7yBFTYzYcLBQWhvAzF3DJbgdgt22TC23S",
  "key27": "3jq7wfLvTdcRTAk5Donkcscuy3yNWhBC6gR24QhLqEa56Nfm434FDrxG35sLL4rcnJJ8wNBWTYFFkF112RyA7yp7",
  "key28": "5Q9awnq2gqmzCS88oatTg5NSgoYrTyW6mzoef31mz4wixurikbuTc9tBV84nnCTzuseU6f5NKDsPrD9L9tKqQzY",
  "key29": "34h95G82wL82RiBjf3noWh5XY4LVPSJ6Zez1yNDNTEY85YtfZDxjxkLRYQpGJMxhf3ohZNX3HTVwvBga8MmQ1rw5",
  "key30": "372CMpx4dybvq6Hnbjs6dPSHRc4KYXm8RxkDmELwcehNiaxKyiVqWGwTBE7jpqt9PY52KqSy79621xVxUo2Cb91f",
  "key31": "3u9csuxMfz39Ux7w6xyMnu3mcSzsBnaJwnMoGEmWvd1TKskNm8trhrQkgyLhNxpJmJWg3obJqYVEVxcVNiHtAzzV",
  "key32": "4dUnVfpV7m3CybWCV8EZa8s93bfhq5gDCobNo6coiQJptxy7PykUYN5tzzzt9BxhNpeAKGu941odzzTejWwmuU5",
  "key33": "yogMX8LHgkQFhLpFQrT72ewgTYPnbKWjyW8VbrfVvn7RKPDjjAZcYxYL2gHyraKYXVacVofYnCWNezHhiskNCzz",
  "key34": "3MDFe8XdY4JciMCr7njzz2BhvVE72J9wTRJqhsyFfmyJpFy5RBfrdsZ7TZ8eUarx6FnqRkT85GHEo5HE81x6dSdY",
  "key35": "31MokfKEHKjnrwQvKffS8GC7sVdg4BZzZ4SYuMMdpLsj9pEVwXgApVQoozKQLvuY5zDtRj3BV39J719NbsaJVgd9",
  "key36": "TGGFgkxbLugG3jMMzvW6zmGujsJXQ8dybjqeu9bgo9xWN8XC56Ejjz6ye9UFgY5QeiMKq3hXHXSaGKKhtAKg1gx",
  "key37": "624DegSbQpTBRS3UeZRf5zoCLjPnz935SbYQFJFA4PoQcw2uHNN2JX6v3hwrdp5u3WHhV5deJ9xyy2nzTeBftFaT",
  "key38": "4mtmaxLFw4uhUMzSwQfjknbEnVFmgvZBJnmoesrvfPRboTv7wMSVNKDhtgewHyXf8RhHZUzLgFnojybVmrhhEziw",
  "key39": "3VbZUee6mQj8yQ5q6NgM2W8qpWCqfHsiP1RhwnSz4PzLzE6XwuN5c7ye1q9A9zL8ZEtRBDayLqQC1gqEeqE8hYE9"
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
