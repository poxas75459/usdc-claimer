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
    "31JsGFVYExK4m6imXivTNzZjnDhdYwKCixrroCkY7KRpn3BkSG6WRXVDBENjzijKTsLs7towFijmka857bGAix8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2ugMqp4NkEfK9cMbYVqpQK9T2zEGZMD43ZbnfXqa1SpSwvfNcCSpFR9EjdAcbhwq1BkHo7FgoJpQwq1wgJs6WS",
  "key1": "2Mshs3h1Z9NBkXagVDmEad1mCoQudCz5NnHFki3QcC2TwiEDhH6C2zQrk9AciCPtpY3rNCMsSscCLkW68G29m6Pd",
  "key2": "tDu3dnUuHNAWRAmU872zTaSaGRdAJWQ6GeZp58fsQu4M1x5N9M5Gr6Mj1qaMNmtBWQmXwQtZUQK4sxi9VFDBYHQ",
  "key3": "HHLjxkGYg5vFion5MmGYir71mz6a9FEbPgi5EDSHjgcj7QXGBokd1D9rGcwPJgoAMhnfEvnC65Av5jo1TcDDor8",
  "key4": "5iSDwG34sh4SirsPNQLGhEGVc4PwqHYq1AVDLTgkHoMdGMyaprPUnqrtDYGNURhjNbveoB2BjKemEDnyD7CbNFix",
  "key5": "2j5YGXRMFoRsrde2tDJy8X86gAqsaUCSHUys5fDpsCrXENez9SXBo8e3Jbse9VLsKkx8FhFc2coE9igtfYkZhygx",
  "key6": "2FhnpwqidMmJxRMNS2V5VmLu53FZSnMucHnKCqmKzD4YN6ktokRsbVCk6M8F7RAjo2Z6Vj8SA98L3KsZ7RDktqU4",
  "key7": "4WkyTUDeSmin6Lb6TQTzYJwUxQLBGx98BGpbNUWT7sFxmvXCKH2UX3opRKZ9RFhCX57KpXMt6oscbrHdm33MgHaw",
  "key8": "3uWazEqAv1BRYQzPkVMEueWWoWNc9hzBix69PGHQCeah8FNxadM8SPaWi39heAFzc9XXRjkU3KQFWi4xEoUUXCM4",
  "key9": "4RbmvGCS7nkBa8EYwePUqtBbnqfKX2C8UQFjskmCDfLxjUCtj4woUGvcWnFewV2PVv3KDFD7qj9GEB4wHDBPmZ6y",
  "key10": "3FhLjkAFSsZn4ArYrMFNcEvAYeKM284e9YVdc4P7HooKN1gapGazgeapFjoGyckXddujossCs6cagSErVgfe3bGn",
  "key11": "42x19CdbvewiVq3bkWbEKHa8jg9zo4tyVdaHXjNSyuJdKVaCnWXKUdhpzgKdjV6oAn3Hwa6P65uWqdJGGYGmTbvA",
  "key12": "4pfMWrvCFxAKqQpr1NBH88o6b2e7MV4doqucV4fzVJqLk3pV5roFD6vXFgefoY7NzTkgtupriupKva8Sa8FePU3U",
  "key13": "3MnE7gSx8ZNZC8ckrfCYA6GwFURdiQZVY7X88TvXD5uZ4H6wZ2wqHvw6X73TDFjJmed9v9hsBNq4YmCeH1LwVkgu",
  "key14": "53KPxM5wyf5PeHcHZg4op4hBzBrTaGCisECXNjtFrk3uSdWC5TTQ8mRJWVSm95S6AJDrCb8NvBD9pWH1P8Er7qsy",
  "key15": "3mNefgq1cxnCeMigquUZPET7qbKX4hTejsMGuuSc4UxrLFSsRfkarqQ3ACgC4HDWbZbBBbAwrcotTMdpiySsrcJK",
  "key16": "2UAnBaBf18x6H6v4LD7VYsbZgMHMQjCgcDLKvt7ArzaPpYvpswTnY4Q6tH7biknPZgXR4HHpzwBjGz6X1n3MzusE",
  "key17": "4NLHH8j8bpk6JiffPc3WNXVAXVDiEdT5ovQEokWwYFFNr3PtfPuY8UjEtn7pPGXSW17UZeeLGJo62Av7aG4FK7yX",
  "key18": "2neCHZEHtCpDNCKRVfaL6yVgqtPKUt2FgmEU9wiYm7fFcr14ZYyThh2S83qF6Tsq3eHhe56wscGhtWMnnVtzF3Qw",
  "key19": "41QZWzwZJrN9DUFt7R7btZuWZJ46gMwQjaRuwHEsVuvu16z3yN9mMQtWKSi2LGxUA9Lb5ARZqTR2iS2gEafhErTS",
  "key20": "5rc8V8PYej6zhYcmZCbj2tV7yxVR1EjaDPiDHS4hSFcUFKH5DuWEHaUfxWDvmKPLuevMZ5ANBroUSBCVZjRwBQEY",
  "key21": "dYXyeBhDCAKot6iQKzXgo6GcruELD84j9wP3VsxYbUuWB1ZWsvUhfiacyVzSXRzVLy7Y1K2StgpLCFVbZfKKMWH",
  "key22": "NBevcRnbs6mPDAA1MNC25VtLvqLfHhYb7qQNx7YJFzfY3uGkpfoLd9DgcbZjooYZHmvWBS4w1qG2qDvbhikBf9B",
  "key23": "5PTYjN22BX5XxRmq98doSu9UgoMJypcEtRkC65aUx5L4BpqosXRx1S4tifSEFzzg94t2HXfdLw1xE3h9jeEd3Ths",
  "key24": "5VLZHa7EtfSmyormb84QLXMJYh68VCdLkipobK5EEKAPCQtFH9R8D74UCjaFadg4Qv8Dn97VgLkJHARF4vm2Lr7d",
  "key25": "2BS75QrmY5eCXpo9ncRC1MeXTDFyC8W1yhkq3T2zqe2c8K4inv23LBzULeSj4qQQof3G8FTFH9xuet5dk75Luo8H",
  "key26": "tyE4jVMcgNQaag9kQU5fAERKGHctuMdfmE4H4RHUrGG8xzese3TJLB2svoyJPLSyM1ZoaE3Tgf8XZCRZwQsrini",
  "key27": "33XikLDgGtLPvCJnamdkLnxKKugwjYrCej8p5vtvcoPny3oGRwihj6MRNiH6wfGy9e7r16BHCX74TVb7p7SJb8bZ",
  "key28": "472ZkWgLcb2sDaS5JDNHtswLHQQTKosvcT5SXuwqk75XFtC71euDBQNvJaNcKYUCMdS9LHhh8NWya9iuGemDt7s3",
  "key29": "5scTF9s7eFoVtqUiSF4BZpPQctp7W7QhQ3VWhRctA2KbYAdHS1zeEumXnEMfPQxJ1RBzNibz5C3dgo8jY7KifC8R",
  "key30": "3h3Ny4wvMmUnjQnofYRKFKrD2Lf6Zm7YXkEp9rtBa2b1PHanDh4cN83NeiqDaSkVN17draJJy3QK5apBfMDb1mXq",
  "key31": "2nLiqTrne5TyTDUupiCDLFVu2qmXD5zNHLvtcpYeyd2bNLaZ88zsJHD7LXNFA1T2TFuHfWC9f3WG9dUZHKUzEkU"
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
