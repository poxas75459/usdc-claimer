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
    "263ED76rdU2kbhhZ8bJAZMDpZAh1e71d2kZhvcZGKxaDzEGpnc6ScaYub2G1teHqJi6UuUGWprdRVk8NGoYVyTim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHGCfYs3iwoNzcax368MDrFUBZFWTdjsKRg1tofrETAiKPu9L19UTBXXeGkrNhFoqWNyEd6x4WqJ9X3U4mmSqVD",
  "key1": "3mYQC4REXKngcMjciiGMpjNfCbN3GxF4s5SrHv41FJ2A9RNnWVvjLsL9a1BvAkDNgvcKLUBhdoYErRr9XPzEUBjm",
  "key2": "4FvCUynH5u9WWA3c8vsF23Lkw2yLauMCYjQgYfXAQMSYRyKVWepVig5NReXKyGmup6htmK6MQjRkny2UbQdzgdWK",
  "key3": "4BjcuwicKBtf2w7M6wpQP1UWCTEydk4wMg8jJCJvYnsdLwveK5xJtbYjkrwJntM85Cqr4HJCLEHhM9to2CuZZ1Yi",
  "key4": "5SxwXkQeu8PPs57JR7oxU8wXSFWVeYYANYQdYvUGLVpSVq4s6NXEDjYV7b4YoDCZnWRMHo7nmrg1FUush5YWrZSU",
  "key5": "3U2b3CgLutP17CEsy75rKyoCRbiYcfkYL5zaMBeougv9rf5k8Lvkz5t7cMLqz7t8HVh82VEXjtPBBthtsL9QGyQA",
  "key6": "VfGTFLYScApPGbgYngEirXLRyzGxkHbrnEpNHDLicXqaGGHmZhScg7KPLC33jU4vSjhr5mn98uiyH8okzk1ALaF",
  "key7": "3Lzwk8aNrNMTGWmHzKDkj7CknHcTLPoq6RqmjVtQTa4BRXrzN1CFqBsRqJP9sfPc4Z44Z2ziBBBP1AuXv7DYJ4kU",
  "key8": "Ctvv6yoGP8G95Uh7QGDbcrefwbh87UAwWaGB2yJHfkmqwi6YRvsPmVyiC5e2uJN3tkCuK1MyGyrCHsPuZzMRYVk",
  "key9": "6XgUTfPEiMq3mj5whYNfyyWrfxQdSPGQs3GphhcRrC3Nka2upVKFuUyCkX7ae5GNDFp6yg8udr1HkouFMPPKD6E",
  "key10": "3EY3iqxescocx2zQ9VCdL8rXj9GrVAnEAAYzXTsqqgEXKZ8UUnC1KEr4rP5qtzLzwE5rfMxjMxamxKR935WrRdzb",
  "key11": "mvadKK6sCxAftRrc4CZGWJWrcLEJ2FGwGBfqekdtEyb9nDDy85j14zezh26EovvV6kWNoVThLDqufjuqH3P1Leo",
  "key12": "4wGNHqbswWHxfa95nHMfvJS745VDg3e7Swkab8QukcamDkV6xZ6gsSVyrFEin4ZSC53x7oF8wVcqdNnmkrD4EmT4",
  "key13": "32N7u7fS44kTr48Mqr7WRcPeXybKrUrsKEvUFmvyPr8oScbA5xHjNfUAFRjwj8BG14XpKF6drmz6zkRrU8v5gz13",
  "key14": "2MkWoUfaohZUCKHfQprEvxzaqdQVEbUQbY9DpTJstynqN6ztdtjeK6frRPnbGFAPJgefWRnDqPdHoYih1Bc5SgRB",
  "key15": "499iNpfRaF2M6da63oKGWkDcpRJEG5tFfZWbA968spsTEB9QSHRzRoAzQWXZffTCEXcu7UjaEfMYgyR5Lq1cQqej",
  "key16": "TTkoL8aFySi5f1hamEJT6Ej7itbWMFAUPqRvnPJs1DxYAptLwoQnaL7f4yf5giXnp4XmmUVoApVwJREA2VNK7WL",
  "key17": "4G3EzcWnUeTDF3GekKgFD2pF94Q3G3X6yNtgU1t2AJ9Qnj4BjzHf8aQ5bJ96RhsDUfhrW3RtZ2H5uKzPGCiPQn1H",
  "key18": "4rUvzU19WEMX3YzvPVsyarzPMV7tWYUvY3MP8X2u6q7XxTSFRHWPgJef3Q8FDEMG6q4vcMJ44o1QqWRwEtWMqf8t",
  "key19": "2RqwZ1rSQVVaRKwKUe1GzT4xzVbNDUKBqFJbUqDeSmBVcpzNrPuuSFwzmsacFVqo5fa8twqn9mmyDhWSqLjo7UiL",
  "key20": "61fn37wZDWVBcgE7kYFy2uSXhbUJn6WwKyw3TLo3YoJ5J5s13ezJzX9SQUGP6Nv8Fcq6cWAgMz5Bq4b3qFALViGT",
  "key21": "5VPDwRJCxHhLCDnp3VcFNUkDYc5wa56brnZTwVnymfRAHG69B6KL32Rh1wB3AtaDiqWeKxpEkN1CSpnmeN5ct1qq",
  "key22": "m1BhD2TtRR865XkhDrEzQAuzqxJMz4pgbVVK2h4FUTc7iyp7bFJ3JsZ4SkJUqmWo4GzAWZ6kvtRv5qxCEWDbmeg",
  "key23": "31PEFEqgX67yyjFRbedQW3eDaXawCFrERuAmTsbCRWnsbJTJXVmdyihkVrDsJB8HoQt2MA7irYQvBkSAWeJEgeiM",
  "key24": "3aWKdvJTNEMZX2JyEhpDszGt3sNZiHsr5EEXHVdLA6rmAPPbRSSH4xwcXwb3zvc4vAMTDEB6e2BPNqAtiMx1puM8",
  "key25": "4eRCCNh7ohy4USfAy4DkCHtjfmeawxfziYFLssVCRCkzSPJ48QFjUrVt7EFTrHtAHRJTsFyrTkkJCAvtRzWhtmNh",
  "key26": "QeYn7jK2NsrHFc5ArVie4D7PSozWCPt9vf5pRsAVyovBRgPPNiYSn74EzvHPrniDqRg5fcdjvj9FAdV5ZGMjVqC",
  "key27": "4vgmKmDNV9yCGwgHhGm77ZxNEb29KKBF5DE2aNhKxfydFaxgcaHoZCUuykzTrhHcuZPgm1Wa49t1MfKQf6KyYCoN",
  "key28": "4k3X5wCVdVqUXRZabDRqcHk1FAR3EeZDa1RWXYcvvfHjZbQuLHdm6tCYrvjNToWp7QphUat25fCb7ptbg21zD9ru",
  "key29": "4tQ8Y3WoPnCGiEdGox6eMsHDtCYhxn3bpmUdsj5C3R1eWWsTuxatJC5q9BLc6ziQQn55JDaL8TRXNoDhjg1E2C1X",
  "key30": "2SRyyhmXdxEouY2FXHLX1i2AviyAeLYA9YejyVEbwMVWRDnDKGwSDq8qZvcrSrz4B2djMrSDYh8FGiCNkLgqbpae",
  "key31": "5V4jpmmpJmzbDgShq2YduFyKFCv9wNbG7pkDwJQ9DS5HbhsnKYUj8hUCWYw13DAwmAAejG7pZbvW7GYJDqbQ1TiM",
  "key32": "2ZKtjPCwo77a8Wd73V2JLNg6PiojpU31o8JDFDFh5aGpBVyZWeCjwdRukn1CKXfWeRutbPUhRxkMkvry8xi5VeMy",
  "key33": "5KkbVMNvope2uivvt1tWLTZ4ZmcjMJmMtFk8V5x98oVC33srmZYutg9xs3wHeG6oWPYcQTpTWRLNMoanyZrNcVsm",
  "key34": "esVLx9EzBAQ8W3M2SgSJgf7CLNr74xCBjxxQfck1VQw3x6xVufobMqbJ2oPX9h5MqV22wx8Jr1LjByffSeiqawt",
  "key35": "i8be6AMJ5Npg7AjzrLCrVxGJJ22nMcCVDU5RpdJJv6EgLUGCFV2cWsEfEHdUgrgoT5Ffqu4wdyooJ3sSLSXbsMA",
  "key36": "3cJovRYaFhdEGk8XXeR5j7RKqao8hWe5AQV8fmBzB9PBSTPkEUAMa2zpqxWXEPXj2GPM8e9MTNcnpAFSH9VDYo8i"
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
