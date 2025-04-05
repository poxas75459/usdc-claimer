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
    "Br9FWN1FrsDk45Z6MmsFP83CD4nN3p7ZaBzQzHH4GdFiQVrWEv4LtJNXX4wwSujEFETpdGu8GSmodLahdtgNEF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwSBGzTSnGHDM12nCdvZJoABaNGpCmiNMbcC7acZibNodMQAKuWvP91WXwiZuRB61qCCpAVUU5Vn3s2fYjqyDJu",
  "key1": "5EGwnPoC434agdUqnvYxSnjozSBPQFJKrZGuzhKLLfEcyEDZ5WBfyUSkuiirGkFvgBLDsFLieDv4hA7QnS3bnKV6",
  "key2": "4xJ7ku6AzUwQKR2JVsyTddCk9cQUf7KceemUMDTYpWAFrwGuc3268sJdbGprHRS5z6CrQQsvknGTRp3tvs813p8h",
  "key3": "2gTH78gFvjeZyBfUCq23BYanJ74jAwEjF6NJwAWSdKu5SuJBNGcg7bXBeF1KgAq2mE8LU9nPRD78Ku3n8PVg89t1",
  "key4": "5TXKXa7Hb2WHxRJ6Pg4H2m9izcYuhtPWdT9e5rTax1eTdWE8Lbywwzikw1uG8DTaPg8G2in5YJwEVkkfDTLgeWfi",
  "key5": "vdjqdqXR365Q7shykbZh4TYF8Zc1efFowVyknYkA85TsPsYLV5Sb5G2qfrc5ngKdTiMFcNkBQwNK2jHCdSTu5YC",
  "key6": "3F9wSRVKzmiSVvNwM9y3LJKvJGs5m1v9sETjYyaRp1ibTEDgY6oQU1VgyuPLs7m8oXp92yZcYVfPiG2BqXNb5Bp7",
  "key7": "5c1QR3tdnUuNCL7T5A5j8Y5e9GFkFCCuXmz4yAJKxx2QqvAgRaRvgSRtuyfKXoRinSzmfWamMeu2ibsCcsmLiGWR",
  "key8": "3gZj59543wqZ24RMsBTfF3fuFtU5T8bCb2Qj6rcVhx48PMydKiAv3USzg9CaHSgGzfF82hKH59GgYs9bses5dFeh",
  "key9": "5SykvQL1rxtv7aCHFQgrfQgqVCvNGx3QK7YuyDwR1gMPJTgk7yo4xh1EBgsBUxSNorTmMpxcpiAYdztLNfEE9KeG",
  "key10": "4PTAemLggnhBYfmEXFdzLytTtB8y8tEKB91HuUzkLVTtbqRaomtXHYuRL4medzUdpxjVPEWBjvkhJyry5yCpiXmb",
  "key11": "4v6p9fwDJKPhBuryDQUiuNs7pN4PdnJfhyFSMio3uE3cFGUtyk7RT8UUQS8ewpryWjxaGzmY2fH4UZEr4T1oKH2",
  "key12": "3hPAmpSjZDxPLLN2U9Vo6kU8HtSYQpe91SUjTypVpMvVWVPvAAb34gR5dR16ZADL89ujDZRS1R5W3L6iXKtPPA7P",
  "key13": "4D5aRZuLAhwU4GHvBJA9nNbUAhDtxLgSjzU3oU4SbiPQXVUB4pndwjxTamTs8y6aAXSgA3ZM6FBpnxGBcutjY7nv",
  "key14": "5BTJjBhKN6K4J5etVaoWZ3YKVG8XDAbLZKHqpuPVWpg2n2QYGzCJJBAaX9HjuMbGvQB6hCvBbBsphC3jezyTHwSL",
  "key15": "FAHwcF45ViEb6mm6QWH4K9aSb26LGH2jshEPDUu59uV339E8iowCokowXHxmJmHt7ZU2jnzPTWDuVjvSbfZ5TFn",
  "key16": "3Aub5bQPdPL8KBrAtcPkbS8Wc1F7m3mXnK9pjqcRpLjHU74DNt7UcW2ZHYV9pyV1qvwxNnfWB7C4N6pjnqRwmc5L",
  "key17": "2E3rHW2nM7GQGsDRwbUXmCeGcyRDXFaRbUUArf69gMHW9dG5AYkM3js1hudG8PbLGuy9HN1AfA9JFLXZa852vrP2",
  "key18": "4mUNkWizHBVdiTe9SXp9sQoZSD6gucWUbRYuVRabNz1ps8rqeb8c65MtJCmZUX29EpHaW6LWga3NzrT4E1GG3Y4X",
  "key19": "78AUqATZoP7b6gzeVaGhMjsk5d3eskYcy3mD6QEumevnjgdQSYq66z8BRDz2ChpPz54PiZDaUBcQVvDru8nwhFZ",
  "key20": "52GWzJc8hir9MrWUjQVurJXqhRePgS8XVEQ8wJJEdCNxnghKa5Wet8xQBG6qPePMAy8puWg525m3DLqjZ6G6K8xs",
  "key21": "5J4Qq3DFVJ6bKYxL2E5Qt7B57W333gE2D2P2WxFbzuVtBnzcskEtJBusELUFmntC73VtTK5uq2ngoAH9NESK1YT4",
  "key22": "3mMruHPsRYf86kPaNrmgCaenBXQMybUmoTZ6srxTLrpTcoxdgdmSBw32Gsw2vSqAJi3Qk1WANeugGdybrSyvxUKT",
  "key23": "28G9ekSmFbUotrh78g5WnEZhNtwUzu1gXtP8h74fy7WMuciV4d2bxhWpPHfjW9cmuWTs4MBttppyLuBUs9JRE5Yy",
  "key24": "65jF8kHDnVGYtRpaiggVx7FEZ5Wig2MvBV6PqADHZEHGTM9ZEcGAJMac8vSiYmCDnbGdGFUzWPytU9HRzqqxCJfF",
  "key25": "4k9L4JwqVtyw4csoEwU8BE5rdBt4iaRCbHm4qDaSBa9pKzMpniQeTQWvMP2rv4UfHVoY6q8CiaFgurecwHxLJ9pN",
  "key26": "382mvTNu4nEgNzyykqCLpUVKDycdJTdtJcBw59E9HBfDEoRbvEipqSbJ3AGttcpKE94ZV2PAavTU1wsbNVZnqL6J",
  "key27": "5FCWSWtWuJUfVUUQp7iUY27LKzREpTHqDxrr6vqetWvRYiY4i86Ye1cxPqAocnb4XYA9PDcKFt7gs5kuS6Q3Kd7E",
  "key28": "wezJiDmvHM5HPJMpo4YeAwZZAV87oUcvWYzLoEbT5LPUvihvuMVCtBT2ddAqoiyXvNK1zKfdDKbTEWJy7WLUpxy",
  "key29": "5vniRm2KrCGs7tdS8iYd1VSxkdWAFwYDLYVDP3Rfk3s2EGPaN1GPcA6KELDPpYj48F8fzaCmsJoJcFdWcMksgCNA"
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
