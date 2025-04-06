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
    "5gVpW5BbwXU8FZjzfmgm1JVMJEiBiUxDb1vaiWQX9D4Q1fRLj9NpJ9UbGd3mzfEJ8zBoDqKaoJ6m6tnmr5SEJ3Sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMzhfCoShS8izUkYW6m7QM6dNw6xcfnu64PD5c8rJZaYQ8EqdPCH3DoUrtB1PnejAeBUE4gaPBA9mvxwc8K7h4Z",
  "key1": "41WM9WmMFdJaf2tBr7yahg16YDC93AHnNMGJVjpvnmR66yqDTkSVikuq1dHak2RgikPShcpe4m3YwcznRGsDUZbP",
  "key2": "Yb7QKjzorHz3ak9XLYH6DkCLs3ovkTKP9zWMXEYbxrwxJB8FkzDxGND4Uei3ioA11mDudWEBm4X8xbuF8K7yMs8",
  "key3": "5FrEXUQaffSk8Kgxv3M1vyXRJqjDeQhXTH8HFNmfMjtL4hpv1ZLcFH9nag63hLjtcn6ayQdAm7PsWjMdcFGHpSnm",
  "key4": "3vEHQxHiWGFeSfgx25C2m9Lib2FjpsLiTaBewDesgJr6jeXRY26K3kHsV35pp12wjuUbu2mLHFa4phLuwAB8gHjf",
  "key5": "UqEeDB9W4SnCQifDvDGM55cpX5dqwkTbSoMGys49czfe1Rqn7HfSHxFkrhfX87KouUELEoGFw3V9pCXxK1NP5jo",
  "key6": "5ksAcuX969uiYNCGtdwk9smwRTqentJfBxaiFpKFyQNheu8j3Roc61xWA7NobzAbfPvvfRqtBdMnaxhWMVXatAW",
  "key7": "brebfVtNKnC7grum1zqRDht4GkaURA734jJPTPUb4cwdmQh4ySriTSTwAucgc8HoVi9vHtSSdcMJr8Kd2Gvu2Co",
  "key8": "3NRyvdNkAQzVXzMUyeQKdcp23uzwtSWQ8TSkNkKtigdRFhZ1awaouHr45dELDqoLCFZvr7EgbCdGd4DzfQWSYFbc",
  "key9": "5h1zFZrLWCSsxcvdrRppKNEyiCkT1fkP3LV1vCL6AbxcfKbRpgxBgHF6sP55zcxq4bLvBMjFA86JZ8mH27tQQ9D7",
  "key10": "31RAkRFfVDeEQSGVZ6qXXYiTuwXwHdg12MwJinoHrrsJcVkQZMY31BXHaYg93mfRVhU3wF6k9HZd9x8EEgUagWGt",
  "key11": "3NnLg8qtFjV4HtRmz4GjuK6xtJVXwi7ZmFvtJ3ZfhGNHSwNeKokc1XaE8HxpN4faYioUrjCbdvHS6MYh4TULcAKT",
  "key12": "5GWP7kWhzkk3tqhreGJfRrrNUqtXnqwkbw76GAwfboVpDA3dy5kPEHgZ7qSaqgniAydEirS8U1tJ1hoh6RczqrtF",
  "key13": "3pKWmZHjBcmziJ52rtLMzz4muhkSNW6ANFNJdPvpP3SPtziQhY64gZb25HNgRLueLEYRvbbYCcjL8jsGCpGk9kqt",
  "key14": "62kbcbYgeFHc1gdaT6QF4xP4D3RFhgtXiXRFDEvDojXwUvntELiy2XkeRW5DZVjpqyzRcdvWzNCVFFZRh9LLwkiZ",
  "key15": "5ZYJUn6DUYd6WB8bgBQPt5Vz8tH2GnNAh9r5EHXmEJergwbrWuNB2EcyUtS7bonDXmQwBBNxmWwQfDGVzbZidvM6",
  "key16": "2aTyMyFkvJyBhcvgE9gzDK5t5J2LHD9sZTqzRhif4iySZWsNNxGfmHEdRw8fpipxf5q9in1ouLiWXJChfZ97ThoS",
  "key17": "2DNfXmcqTZGpJAdMNPiprYxjEDCiq4LXJ66sWNu8ahBDy5E16NpvRPPksChGAVEpetmuEyUYF652CSKSSCZza9B5",
  "key18": "5p1UedvyQFGhkApbPA95PjTLjmfNmAphMmYPJj7bBe7suWXgHRP7QZxsY8BD54FUk2iN3D3vkePX6mgAqzMPB2r5",
  "key19": "4QEM88VsK8EhpFkcxv9tBqjGwdgeS3z3QkMDqRWVPkbFyMXWXR9D5qEY7knh2XpAnc8DuKrd8MjEixBieAPRTKVD",
  "key20": "4K7YSUuKPJuJcmNBXbrnHuS8tYx2yx9T9sCJ996jkuMP2FQw2aNwUVB7fQDSQLzwXcpcJHQGcAAQNyX8LB3zdXQW",
  "key21": "5Yu5LEeiT2jrDAfcdDW3YpDp7N9pvntuaRhsppxciaQNWQmpYgzpMVb6T79rjKrFmMxkCBcEnG9CvUPuYd1jM1NY",
  "key22": "4gJNwFJac9BcDmZY5SR5gRa72LTPmx7BG3hemf6bGcKDghshjNWC5sWgqXpqHyouaVV5sLqk9NK7aiaDiv3s7rpy",
  "key23": "24PUMWnVKSfU6Rjwxak4eNQZ7kXuZmLDZfnAunSuqDthfXqQnY5eVukV4DvpWWNfAYjrgCAYPhS4vXzf82dvbQ8b",
  "key24": "22NhxdbYaMwwP97BhVFGw7EL7yoPf1GZV37QLTq58WgmqkNNksodLPJXchav9S5MfZyoB4oUgcfZDHHbVoosASfH",
  "key25": "zHLu5jp8KyA8qEtGWZXD7ZisyvzMsnzw7ik5i9tcb5wacY6vQj1oY3eX22FnbgbLsKkvi69D9mos4DrGCk2LTze",
  "key26": "2rX38DQhxijdLy3LipTgekeRZVEGHUS8itf8vK7pZajAMUmbf3aHNfzbGDDay6opfUQUipPkoyMM4wn5UY6C5bTp",
  "key27": "4ahccov1Xe1GxFiN7cFseo1GrzpAhsvFwXXYwmoacBsoQnnH9aa5ahLy84ujtVRgu8RrYrY8aFNTxrn3V7oedYZB",
  "key28": "2AUAw49QiujmdR7bGsBqJ7A4atWAjzE35YW7miYJ3f3LzubmCPkt4GC7k154rP6hGaR1FmXMc5bs38AHEXxtSTGd",
  "key29": "FKRTM3eVfeTQhHZqzKDivHMhs8nnRRfshkgqtPQWzWzkuPHXZj37tcnosmXCpWVQbu9mv98pJygPBZR9XZcwDV4",
  "key30": "3dGbRhK8FDr4XaSn5v7fC76jTeVA3ywRubpv4hqayZ8k4CMEVXtSuqZuRhXYuBg5oeif4kKhcmpG1cWzBTHvrnCw",
  "key31": "37gQPyeygqHm3pSKMaXZDDvDndNiVAhmJbsaB6QnpygjRgXQkxgKuGXYp9YUzx8o1Jew8PFwJ1CSbBe3iz3vWmqC",
  "key32": "3g7YAv4mPE8Mh5yQdA6G8C2oLgCzboP7ZQfHi35gLm5tsjiXJq87BqkWupS8SjTBPU8wfj1kX9g7bAHCoakcvRUE",
  "key33": "2Q3TgWaosyc14xqSVzkTNiMbXQptYhFdb4Nsgn3yPWEdLGT42ENwqARNQY1U9sFyptSDtFokWLf6woe9N75PzUhh",
  "key34": "5WzAeKaDye4Xp521bctAfKF16nDPoNvEJgh2w32UzfemoHtD4ns3ZSxELgLTrDLvFNiw8W1hPJn5DRmnHVLoJXyJ",
  "key35": "35C37xodVpf9o1HmMtJc821L6EHdmDfDtBDXX2iFhz2uPZA3KHtrkx2b51fQatkeueL55HqTYPNRRmjohY1j6nqJ"
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
