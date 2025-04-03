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
    "4FYv9xkj66C6vDTNS2Qeo76QpHxpUqk9dtbVpgPzShNwQ4EWPFJV7BNYPrpKTdEFMbEsE7FgP5gFvbbvS2iuPZUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ft1fwmxV4t6vBMVbJHWrViREQCSoQbQcjdCNPTPx5hNiujUajUiPCmjZP8ucHRpV69mQuSDTJwYG65zxDgZqBj1",
  "key1": "5MdjAE2aCVGqEC5Jfj44Xbo67vWT73ofwbfobUYudWZ8RMJy7gs4KqGkyG66mJZgghjnfac5HUVFPu59mnBoLETN",
  "key2": "4SXLFNd4FEzArHmzoJ87maMikBZxCejaXC6kt2qLKijkNd6ibfqZMJYapAPdt9oj3zm5hSxi4CghSTL2mc2dufxR",
  "key3": "3ZmsgWkwhZQkHFPFNX1qG4Q23ggsH6S13a6V4za3NvqrnQDRxkfwd4foKtBnkZjtE5PJ6Yuz9xUcRDSScSQigaA7",
  "key4": "2Qs1vQt7NS7GTXMuT3rCTo58TXEb1XXUae9eFvpNHr1BDeVC3wZiA81Act1HM41VSvCjGoaHS3LSZZMWbwLeVaS2",
  "key5": "2Te3UHwPH1UwSjSNBUn1J3YpaL9bAPA2EDwKrmGE5pXWVk3URs24oBfs9NLkufAxjanDtDCBcktnkP46Scb5K3V3",
  "key6": "4kcMu2XMNY2VusBWpCijmNbiYnNybqz4sE3UmQsN3fr29VutfhcT2KBFRe6qUpNofqVeygTPm5x4cQzXSitWqLpn",
  "key7": "5MLhDio8ZPQJT3i2nV4JtJcZL2uX6d5ah5aopAgRRj9zS9b8qfkaabfNiXfKnjMi1RVrEycx7TFUZLjgdf41wKqJ",
  "key8": "5vL5kmWV5Wh1T1HYeyZ8Y7RF8KbnqLPUZ4zdNbs3c8JmPAGzGeF2LskYp1uw4woCjwGXCUMnFhctospmDePio9VZ",
  "key9": "51CwTvKNj4hHqUCWaGkj8L9Vxkz3fjxDkmxiWtxqjKgRf1ezU6Gv1xKNfEimjF7ngULfzpnCcL9ndC7nKnQxWfKt",
  "key10": "9SCwosHWURosiGZ9AJfFbfdjWhSaoWQrvf6mhywCgNqyT9wzqxWsFLwd7njU8955mbrhPrvMdupHpUSKkuDig2W",
  "key11": "5ZArEC3s6YeYQht3JqBrqxbviQ4vgk7jw9tXUtYkrzxBUB8srGqexHKGchSpjf2c7phDxThsWqTFA3baRhjDctNq",
  "key12": "3cPKGH8Lv6c7NeGYM2MNrVDmEDR13jjcnAsKJxDujdoS9qjNPnwmXXMRFhNPKWkCVPRL8rpQuxJmJcn5d7PBckhN",
  "key13": "rxsyderZbZVitkAqAgTAc8skNwUNySTnS5HmsdshMx9Qv4CT5emA5ZBrYtWrzEHPzRmVp8VNK3ZyCjcD56uVE69",
  "key14": "5yDTVDCBmUY7YKDmAt22DymmoiqjpJuc6HKe77FJSQiYmtBYH7HXMwbm6MBejTT7LPXqQFQDci1zgGXikhf9xsy",
  "key15": "5iuShTd2wHTFLLW4LYB9ELcRfKgdWM2anpcoDDNHEHatW3Ww5U4aFo5iZoxH7z5Pw3NvAJUUjri6dx58hHXWhgR3",
  "key16": "3gEnB3ZX41jHgtSWwf36FhMUCMCwTiCHdhLybNuVs61zXh7NdzAPiEZqbyRYttfC3ucjFiuo7jhUyL1EMCyJ7wim",
  "key17": "CexWiUdJmoPn9VK9Fy21XTwPoL4pPuk1sZT5fKNyLR84vBGV5oCwah6YeHMnxaGmDjziQyQWuLqhC7k5N6BMayv",
  "key18": "385PpHFtoLT3eV4cN26duz68CAaCG9kbydpAvGChBVu5MCYSdRH2NXJ8bjjijRKLYqQKHNpa8myi7MUzoCNBHvAv",
  "key19": "2NrVfhDcQskYT2aFeLjJ2gbjZQvZMo5NK1P6bv1DPHPuWoco4DFRjc71jcp6LgbVxAyA5GAZAtW1GViVXBTz7rzg",
  "key20": "aHsri7bzmxWN8kXtxp39q2MFj3vEJmcD38jLcMy5KsiuUaaxM4oswKSXKSPMjNv1DpNyrEnSMuCevA5qJQNa68W",
  "key21": "5rygFytJKsqb3yZoZXZGcHje4arXuoc8ch8rDyoK2zN5Fz7Y9mRDPgUu7tijrLoRaqqJqnNoAP8FdBpK2KkTx4cS",
  "key22": "33eumUZSGDoCqswzQ1pA6cv4JLRsSgZxzQ4oTL87dERrNrampfkdwxvjYPSJtXSfCv5y4tFzx4zdg3hmdbTMrh7d",
  "key23": "UbWVp1mnjTEK6pa2KudvU6gsGFyTiGncuGUVif3E5zs4spACExe9k8XPcYySpdUCeQjoBLp9DWbxcmo466hixvi",
  "key24": "5dVnESk16UipdDKxnWUAYReBgTni7gXpRshNkkwxHQd3mojwDDG8W1zLkr1pQLM5oaP2hUrXmRXHxjgDTVBLuqtt",
  "key25": "61nT24Du4fxywK36VLj96S9FrrXB1QB1RdvV3YGSV4atPirGYLMzvierkkvQSHrRCVLRXpSMXUpvwrQQ9HeMmHrS",
  "key26": "5z9QNx3u797arBkDpe4wQXgwtWzdreiPxp6piNcQH9qepxMK8hNheqiKXEGYo5PfS6beRomCDpkZDjaYTjz7445g",
  "key27": "3Mnoccv1BtC6ooV8Rn1x5c1Dm5XHygc8cn8G7349N9ZxGpK9mv3b4FjzgEVyCF6TASY1KyeMQs19z1tMkqR7dvtk",
  "key28": "4ZpxvKBFbaEbjW3KrTeNZnZTzQjgQt7TPWuAyZYBSk5SCqK8LCJDnJZqnMymfZCZXL6qnaod329qGkb9C3zeJer",
  "key29": "27zTEhwJB6iasYhM15menZb2icvQKLL8xtVfpnGySmqMrnrW3Dx59fXETTXV4EHYScveMYbp9ZfdLNcKAta7sTbY",
  "key30": "5Gujzm5uqrzkYuPeQxLBnfh6rEA4GQrnRs2M6x98gUNqxATdwyPJujsMSSzQSJV5GBYz9NP4z2tFavi76LHrDBHz",
  "key31": "5Tob9m6MqeY194fqPYS2sSCet6qf5oZr16qFTNJNPY4jprNiuxQLM81FJ9xpRraqgLY3h9XmgiEsJEC9FiB9memY",
  "key32": "5rWCi3WqWQtx6ULGkEd4pdRqB2Y2sdSK4gdZHD5PmF48WGfP7rbgyLRkciupLUD4MJNDrxPaaSqpHACBG7B6nA18",
  "key33": "uaQyCHpyPFHwE6XxvgSoZNLViUjePxBv5AoYPJHek58vBLrensnigqjYErte5DTK54rBErC9Uq4sXEb1GQ7QMVJ"
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
