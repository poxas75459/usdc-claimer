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
    "52QQUNG3cUXoeCFsCpFD76rrXm3oci3KXexLCXe9KaN7SnQW8RawTtyquym25nMd7z3Hk7DRBZ3Bf9MXVYprdy1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kLw59LNMwM3rhM8tLT297S55GSpaPVcq1XCC9de2Bty3VVivri6qQ6pazscWPezwvWKHtHh9tzUFZCXgD7vzAMD",
  "key1": "4btgg7hDPBB2wYkRWEFxBAFxAZtATCYSgojbHH8Pv54wmZfV6MKyseUBJk1Y81FzpRgpUeciQAJAZHTd9EANFfPh",
  "key2": "63wcKp65c7nwikMtMJAt9Eg8nBrMgxLt5KspizpDjr1NUbvhprvecQcan3WGDz3jCc1axeFxdHYhXub9cYEruZdG",
  "key3": "5mqcKYYRqouctRjZjgSJmK3do6GiSoGcKqXRtFgcHvmX3mMfvG7pLsoRqpUSpqSRrfednuaZNZNaZ29NpY8Gev9V",
  "key4": "8TYgANWM32fubaZ6qTFhbrKxtUw6pMmrC84Lhh52bUW4xohxJeTaUMhCUgEvwf1epaTtR5BTEGQEQMiaVrtSvt8",
  "key5": "4ssuWgE3JmEUjxPbdaicbB5qSkGQPBrzFijSBa4zGatvjsFiBGnGaMCZFtPxRiQQzhA4gDXGtGwYLmCgGfUnvKqH",
  "key6": "3iMUhazqTJsuKBKmRwW75G8PYBvfFcYxShLhFbTnXarsMkfePcxEa7VfxePbYMvX5E5xjTsRvMpExYSYqmi2rYSQ",
  "key7": "5yYRvZ8oFjaQg2yeoGGiNrsXqPX4zxisHA5ty8KuZxhtqC2PwGFxyYyKAqkfHVtt5k2JrMYNCHFU8YUq87dmok9i",
  "key8": "u5kLvfSqCoy9UtSQ9SYhCLBChHmitCPPGQVKCxbcPtX9SJSoYpEA2kv71ogn5AQHAe2FPwi3zzrWubHjXzKocE2",
  "key9": "4Kg1tRWqwqoATQdTCdduxSB1BxwWitVBEv43WnwbxgdHs3W62cM1AsFXfAkfsvoqgDV6fP1rKs8LjTSgVbpaU4w",
  "key10": "5fmRRsPJcA5piaBqUhdoFCG5hNTih1CTqgaVg2v1Gd5vf94mCALpjPok6K3BaHTJSv6RmR6sz7Q4pDzs114Xir82",
  "key11": "4yKj7sWVu8FNnFFezAKnrRJZWmUvWsSpTHaHhgRrATS81YqVD6asmY5tivucJEo2GosQG6GvJHfDNE5CycJNULZF",
  "key12": "2kQ5sACqYNz9xtSeJKBWtpm2aRX71yeQRCc43uX9qff5owfrbc6uA2n3NKT9ZaxwER5VNKC84bckBgZTPqRJioKw",
  "key13": "4QBKTRkJE3DFmPrS7hUEW8F1QoKGa314ChjZt3VriwwrEJkjRX4xAgqE4oPH7TjPXuXHyPGw9kT11Xst3orm9z8x",
  "key14": "4ZqAY4jdzmjuhLAL4iEbKwzt8QaRRPxWyBXitKxgPxBtoemqF1Jub1R1iAtHkG9iWLZHbmmwMm4booc31RRT1SQv",
  "key15": "28YMEdEcfqNi8Awvhoypmno41yGsKvxugWbCjEXmw55vfNPXQVZLvXQyqnzgG2HpaE3jWfDc2LLGakgjMKFwtoVc",
  "key16": "21bNijRSCmJiQ2DMYV3fJjm32StRsj4aBbaiMfHkFE1NHDjtF2mGa248NSvG5Hrv6RMzqnfsjvBmEszMHeW4N3g4",
  "key17": "4PYVSkTajG549hUi7NzB23QBjuSyuHYgLzB4NGYddErJt4QnQN1sZoAcJuVkvP9HuM37eQoV5FSP9HfbqsLKoVb2",
  "key18": "3YiBJ1TmfyVfehz92ozic2wsuhdNnpA7fCcPEgozo5drY896sQ496qJB3tQRRxNSY3dTVLiZkQVQVvnNvokBCpGV",
  "key19": "5cRP5k8MjNJ3gX9oqSY7Skrq22xAyM1M7s6eyMSFbQFTsFVMQVccn41m9fPKC3njupy4Kx3X4Gz2gRppJmeWC3u9",
  "key20": "4c1KmnfiJxnmWHSjH5cQCwLqBAEvxiPbWuLC5y7AJ6AHTzrtAxbSgecJfZgva6LtB5Si4dnGfTheva6bpGbi54R2",
  "key21": "227FgBCk4iNapk9d1omoDPPNzSwu3hVnbXhxqQ4wmVJQ99TmmVTe8zpS3o6vYuPS8Ba6caPMnp5An9pySd5DCBH1",
  "key22": "4sqUbCnbRzWftng4qBbexuD1qPzCYLG7euRF1m2M327RSs98fFVf44F2RbL4JZr6jubjqGAHJMeeuovktzPbAYmh",
  "key23": "4oFF2McfynDiWUqfZYySUzgRXTdhTeiv8tYQtgkNg5Lgd73dgYCf6AZPhiipRE9uMJ68v7iGWAHf5hFAwQcqkqgx",
  "key24": "3LYPpfo3Xf5D6jr1o3ibaSoYnXpdmZ57bGtu75y9cGCZt6uUnT7Za9yJFxmJsRCcAWzv7ZpVZzaCATQDXa9my6wA",
  "key25": "3F27Kz9eTFnnxhxm4yX41Gtu5uaSuUg67h1LsMbvkoRPqp2uRVVfuBhaFjBooHPBkSGHG4tAH2BT5ZaKkzomk1RT",
  "key26": "4GH2mrWU7SuqZpbybyGVkgLFZxkbaRLFptAjcJZgHK2gZ67zCjjojh1L2x9se37mVj5Htg2XdNzBLiF5rJrjz6NG",
  "key27": "5EWq89WGapsWLYQ8hiUouEM5rdZDkYNEpEYh7QReFJHzxQfh5QLQeyhfunrub6gJoFSfXYN2uz4aLEkpjC1EQT4H",
  "key28": "23KnTKPUCLqN3vAbrctAXsa6qsVKN68hDpdWMjYqu5j2nG8ftRxRYkddetqk8jQVGhBgyCpUiHzsFj9D5upiCoR2",
  "key29": "4aEcavCHUDyYHxyJBGwHAFQasDzALGXNbHGWoE9r4emhscnjqMsmhLT6W7p7mUipTxyzjrp79nqBVUH3tmnEZK4A",
  "key30": "2ZnqoxdSCerQiFgoFKVjaLYdAszxYHrkY9x2sLfBySXnqDJy5qYXLJY6xmQbgAuUtZVja8nUKKjQGtKGeC5SL67",
  "key31": "nEwNAat5r3toPpnh9jUMzZjynK7aQv8Pao4Ve8QiWYTTakWgdn6AEPadzwDFGPdE1ttWjUB3iTQZrTWv6jognJH",
  "key32": "hVCaXMZ6S8sYXrTwrmtB6fjKbJ9tbQBEPgBcfTAuU5C63gamx9tbiKdwKdCC9fqvUtDqqqTCz9tRQvjDxZbf68F",
  "key33": "2jARgyacvEhidFNnjB7meFqdYjBJbpupvwJSfAGus8fbio1TYCDkwGka4zrUo1CvXEjKY61W6dBD6Z4gweVDrpbC",
  "key34": "2eFSzLk9zWBj3frbLpkB2YT7aEYNyXPvpJVvihYHRqw6iRee3BrLFXkN7yVVEzTxvNvJUW9ahvNEsNiHPTLagktt",
  "key35": "5wWS6W5NRk3taP39qYHrDJumbthbnXh2XXUMiDxJi5wJ3AKbuEAHVVEvgyjCw9gHMzkTzhiVcFG5soD5rPez1CHm",
  "key36": "5SpMux7vBcEVzmZS9pKUMwHaMUwrxDPWv8fuunqt28MA7SfoEch2FrVxF4RRC5ZyBJXchSBQUx6ksFoyQo1wxN1V",
  "key37": "3jZpqfZo8SRWP4a57tBPLjK7SgYhGZVCDE2nfoejTwQon17URXPrrshvxzZn9GCHRpNkj5sGM38gDNzh43d9Wymg",
  "key38": "kn7am3E3hkcTPozcGwtUa8saF3sFYVpGhjuw3G7RVq42NErEUChZsb2WZ9LKU9kjmKgmpZpbrm7PitKazo9s1bL",
  "key39": "3meGeFoUZ6hL2DAxFuhRGgGhFAcfpBHY6uEPvf9cEFNQWv99d2n5yueaW2kroXJYPDfhKTQr2u3DQEyN3XeieG7A",
  "key40": "5zpxZR7Kz1TtoZH5gj4GXtDqBtuVGSSMFA7AT9v4cPXyY2A68TEGmwHsvR9pDnahkcnJsaoitgU3AqZ7GLC6TMVA",
  "key41": "4myRiuHLTV57BciXTBiNysfgkXeKnhALGZpFr1KHX1CPyuP97jZMu9KkuirCvLBZoi6JpwSHDtYvin8uwfqcejHE",
  "key42": "4NJdid2RozK2SAsaRRTL3pbLeCHKw4W1wQdPFyWFuezoQ5AoRrnDMw8Nf7LXLfC49W8cPKZUjkpg6jZNEUL5Qy4V"
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
