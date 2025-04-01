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
    "sdgzG6pW88EexLJwWbt8j4WUo5qBh2s555DG3KLMKBPcjJAhAf3KxBB567cyNKrNCc7rNrrxE5FBCzVjaPRHRtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQQpLYSN4CFLqe5RCr6dWhXE91stDpzQxBhU66ygtnrxdsRvAWb44CSd9oiWjpc7dT8gSWgY7ZhfZ5xX8sp3xzo",
  "key1": "2d7zTr5G9zw1zvWj9QuEYojsZ3jWvc9HhnBwFDRJRAF3zhPtUhZcEj8Bro2Kkivyf9AGMeevLv3V6YZ8E9nRxBZg",
  "key2": "2MqwKC7LKYjLnMrGhFmhrLszZjbLZZHpxB8Z4qHSEVZtZfVF86RuwKcWedbc14SUwUtriMpL16hxEyRX4GYpmrrQ",
  "key3": "4iD5uhnKoynAda19J6vaTodrXxRa4us7danxnvpXPrVMfkLWD1AwP3oS6fbTzCDRE2K5zcdv9MimikVCJfR5Vk9H",
  "key4": "5R6DCNJyVNDEZdDJMooi7EVegjcjW3RDC9xTFeZojNWLPouJyunC2Yi9nJxiATv339hgZYykbLATy5CBaagUTVcf",
  "key5": "3MyxWyVhcgBu13JcFKfZe5rmtg9hpz4SbrEMrWGeiWiAbEiauN7UR7D5AqRtRjZXAmiWcySds9MJQXhy61ZbjNYf",
  "key6": "2ExcBfAjPubUE4mXSiT7wqfkTip3UUsniGAr9mtxQrjq3jS3jMVSVarJgor5NQFQjyB1r6FCjygdMYHqWfCozvbD",
  "key7": "67DQcKq3yK478FWbWi9XQLhGfVGLywt9SRYZX2TARb6tqJgAUidGXUmEJdPW1iP1mas797wJ9nqmMuGvYziKJw1P",
  "key8": "guVhRULRhA6ipZAnE8Q9f2rYymUQiZqwzjRVC43CSJUuGZGLPJrA8xodc8wdqeTubswrhxDhaCtRGNedZxMQN5U",
  "key9": "2FRWvGryY6KjSfjg1C8Zj3jbTv9qByhDcXRdxnroqHJzdULFJeApeXdTnuGKFw2PvHTzSjUTrWZBkb5c5qgkaCjX",
  "key10": "rez34Y27jouDc3Bqj1ETYPk1wm4JahMzxfS9X3hkAtKgmpWTLiJwAyaVRsCqFdWf4wT2SdFC9GKnsWsnNr3Nwst",
  "key11": "5F6yRrFvz9M4tLjk6gTMqyZgRicARm3KKysScPoa2QBNwg29QmdEZYAj7TZGo43kmaEokfXxLExv5M81TvN8voJL",
  "key12": "2p3S57imHAdCZjoF6gGjpm41tH3H42zyD6165auLfJ42iWrzcNsqf2kCm8Tht5HXKDtxZAM2xaP3fAQnFtgyagXN",
  "key13": "5dmTWmFhXzaa3qik78X9vd88FwLs6KNLrPPs2nYk72kLoutRAH2dwMazx76FDyJJ5tR65LGjGKB2oQR2YtoEumHT",
  "key14": "56oSK3EShQG1bDKBkUKWXxLw6bDXmAtpBLawdybpTGNeivcH41P6N7rx1SxAvqkTBsmutQ5d8mwRjKqfwofNZkiA",
  "key15": "5uebCywfkhxm3jnF3VjsgRv12z4XTzE7Kx1XUfsNRv5maDvt8K5ZLkqXXhiHUmoTg1BmwpPigutfBDi6mnVsAA2X",
  "key16": "5ZYXiSc9S3NWAWhQEucpNzSzdtTdnPXfJxLBo2UVNNDN1WA5mm4TpAvsrHvjYo5Kt4uALWYJxFbnwesjGCT8jtPn",
  "key17": "5Yxri2NsgJrYYLY1hduaRHfwCFKvpu9uJVwX5CyJu3anGJAasj37VbR4VK8GvoVPsdfXTecLjxvWboNydZzibzaM",
  "key18": "2SuqtZWFtKxDDghbcgUUVQqWk7j3sF3E1XDkJzB1U15Nwcmbzqu4h9TvZAB7rqutQ3S1T8tasbvqF1XpQinGBmWN",
  "key19": "3BJ6xxSHaP6JVJrrnp6VkgrX6vgh2Z2DQ34LA4T81U4wJPaWpFtJF2FfLPAzwcRYdeb6RBqsUfx4MwfXWH1an6zm",
  "key20": "2GD8eWyrrNwbNZP5Fm4cDoeL3LTtT4Gbc58zRmbLxNWMvshwcwRtRMpybZ7aWfx2C48qCFXw4djdVPEPtmN33Pw2",
  "key21": "5hSXGWMRc8opapbe8gTRV9QFFJWCy8RpT22ptyaQ7NgKK1NULknbYSV9KT3X9A2Mso8hM2dNTPfCxPTvLvUhFEcc",
  "key22": "67dkz53BKURR2zNoVajqL7YaNdQotZV4uLP1H7CTLrKYAuEVnfySnwSBg7ExjwJCaKWVoVPFKjH3CuQriSDCyoMj",
  "key23": "2f2fND26gQJ4chVBEsgoMGEJbJWUpLsL7oc6qLixKqUtqGSyGcd17fZiCjYSS5UnMJGoN3eWJYdQCdk1Yfqe94w5",
  "key24": "22r12AqZ6zRgwNTGS1Aj3m9Bizwo2LNZQcEwmvk7zK7ajZNo8tdYRjVeSwMTvbXApVShNMxTk3t4D36VDk1812b4",
  "key25": "4wVezy9wnAkFme1yNJopAN6iEYh5graFBANTXt1zUw35VE3yEwR4vvEthuV6ZDwyr3QSKfpxgRvrFr8xwh7ixdsD",
  "key26": "5Vt698K7nCtvbrK7Vit1xxE7HXWbTRyxqvx3DiDgKYTZzGmdCEVLidobVWouJdUFwj1XtKYHQqhxyJhnxu3FBMhe",
  "key27": "51LbcYpbvRgoQskhFoGVb87he1XaVzEkFwBaCZejWdjuwBKqvzURmKF4BWVKXftEwy6QAXbJNF2VMXNTx5XYNmtH",
  "key28": "3PU6VDo2juiB1VzNrzryYL2eFhMQkw15GUMoGuQggB7QTT6hapTy5DrbVmRGhxehkDzqj5whyHph7mjUjkeSs6mA",
  "key29": "3hYSVjidFrRJUNubdg1XQwbBV57FGTSJmW7CZ4frvBNVGHMsANuMFbfLVk8yxsXyDUvdksE1p44zcHWGjoMhAA6B",
  "key30": "57cDJAqfLRALeWrh8161muCW6roiNZHFQfMCrsQuExgbGvQi1f2QoELvq4LH2gcN4artzqCSFYkDNBRHjVYEUozy",
  "key31": "2RPeEgVnHqToPY55JcEELdp71mt8MWaE82GfaPjMQVpp9efyNN1Ddodb8peCeFQ5pcXrGrYyhQneY1sX47LbWnwi"
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
