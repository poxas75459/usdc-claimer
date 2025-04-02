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
    "39MZqLhZ2FEnRu9nEuK4nZjrCPexKxTBZ4DZwB3YDRob1BfowDZ9scSa28Nj8vwCZdA1mGgz7Lg3pdNU6Pt4j1b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFwYDKYuG9W7zUcEm4req4whSvmFJwXpQ1M869CS2cFkbvmEArASSiXthZNvkzNkzQMD1wTtfXiRSuEUntBJSTA",
  "key1": "456pfFVYvRJ45nwgovuPg4vvhG2iW17Q63RwpWA5jZk1YLgcz8BjE9n6F2yU92y6qZ79WxFhu1vRmq4SvsawZf9D",
  "key2": "4jKWQVBMieVfu3rfTkVr8yPXDH35Ukz21JSz3Bz5SM9ry8cJ319vKBBQ771ZqFQoZX7GbHR3VYyoRNF4eddY5V1k",
  "key3": "2wa1157Kiy3uXcuVxFRunytpctEB4uyWwjkPFaCN5Yb1ysuYkTBRyA3mpXAFzGzhsftx4o5qochX3baewuiRMykQ",
  "key4": "e21FtJqCRKNUma6PERyLh7SuSiqJowfxTthJWvNbag8QdruiQ5aTKnuX5TwvMjmW8h79Lvzk4kvvJhkcWwp9iiF",
  "key5": "59Ch87ytqizWd7iDmUmi8yekrEZAabqSmjHBoASnsD3AEVoPQKHNUtU8XrZdHJ3e2AfUF5JHatqt1QE3NVuxDPG9",
  "key6": "5x8P2Z2CGyDckgZNFyz4DNKeLR411DGxk9VWwCUkRG6xe3ojnvTHLNZeMuzwTUjt5w6Ui287HGqmCCWuNkJ9V5sn",
  "key7": "4XjH32Cpwc52fbCPrvJZgcXbVqeGvoZ39UESPxaU2W2AwaTeeqC551VW9XeohC4tnkRQTo3VoNZwc4KNSNFigkmW",
  "key8": "cHjrSioqCkyPs8SpN4XK9h6AN6nJSBDUnT5iD6Shbnf1SwB3vyERQvcwqxctPpmGboSVGCTdzFauiiNeQmHF4Em",
  "key9": "492JPSFGcb95waJxhMcP7tRm78UX1WPcWpRYdhF8TwyCyGDyRPjNpUSTKjMLVhh2EXTmihnLxJuRJycLWFutPvfA",
  "key10": "5MMoJujRFTWJnRXwLtZYxypsRdErQwb8EkeWyURTWThMA3xEMPyAgF597Gu3aMG45RgMscCu6PTqbb46ALqi1RmX",
  "key11": "3KGfH5tuHEML1Afsb2ZE46qxYPauMwwefEMxCC9kxWDn1DBMFRbRWvkNr8gKBeaodDRb69FktgEWzguogJbuds8Q",
  "key12": "2QoTTKiuTdzpVNwBB3T7XEahqB2YA7fvX2tMPrq9oZ8vLXpesr7LUUyB23N9y8NecSyq76yZ8QxvG5MSvGhTSi1H",
  "key13": "5qR2B5rbKiKXjPwFtkHwSntqicYeo111Dkvm8HkXibRWJ3XMM8NomE3PWwosnhnExbXuCemeN2FZhQGd8n3RPLsJ",
  "key14": "uiBvdsNMJta3Mo2A62RSaPghtnnUJocq8xnaVvmytSriHPCMW8jZXZHvCmmeEDMKY9cvLtHqudgWswcEXzvADCk",
  "key15": "3qDx6gL5epENRCM7xnhhwA7WHzBgcwWyiXQH93kQcExm8qdT9dPB1UbMGSxoRjAaXGY2gHqoDqfyeJavaJnJgsGT",
  "key16": "wQ2rH1v9Pemt1E6rgrA4t16GuJ3jLRezgpEybUkiTyNeuoV4XWmMhppzfiitcmUMjB7ZQUAABrakDVdEqd7gKkN",
  "key17": "4uBLdf3Q6vhYLX5Semb9sE9u3uW3vJ44fXL1B14NnCaRi33tfuRb57idYRsQtxxCadHLsVQWhP5BuLKvngzu4XiV",
  "key18": "3Ww92Y1t9DTucJnevz35WJ5eUjbYC7LFd91W5d2mMwPctsKy8wGHraXPdSfRWbfSiicJkXs2jmHCzbPge16Y7yLu",
  "key19": "vCct4wP4ms2t8UGMHLC3PbyB4jfeTb6Jhb3CWyYjs5cLzjtLFztmfVzH9qLo18XsVSYvda2kMf9PpJFyw1iPSQe",
  "key20": "5y3JQCvoFsp9g7ghaqAExQbrjpGb58yp6EVEKoAVeynDgKrNVqD9crr2jNJ976T8wvg7o2Y3r12v6igbKGAoTbTi",
  "key21": "2xnvdhZGrUk2gFL5vEnFjaQZExr4abFeWwwjwcgP2ZtzgQomkoxCYqrGde6FivEJSWJUTK6gSK8SnYfUsG9z2fxd",
  "key22": "3s59JFRrtsNFinkn4LNuo7FgiHNJWjfsSDY71whzxTgkxT7JENxKmQeV38gMptZJJ9igLMUc7GaynbppZqN6Lhou",
  "key23": "671E32zCMnYjjCgZQQpZb5WQBVBw7zMrmXZeUFzoWhJ2pDsnbKuTHYZ77ZcwijQ8xM1PyMfqmGHZSM1Lg3rf3LWh",
  "key24": "51n9bT1Ck2c4AvhYCb13pm1fQhhfT8QiWcZSuAzEWFMdBtY5kJjszL4kk9fw76cRDSXym88cekkDCGHKZwPRcy2J",
  "key25": "5ZxvsvNt6fRVjn53duqaBKcV3Hm4HmnjLyRycebZssWxczxnKCPfpbfgoZwfV9FdhG4UNCLfCcvNwSP76HPccSsQ",
  "key26": "58p2T8atfCk5yfBnqrzh942wgnffBUYAC1GmswhTy7f465eBaqRdeSCZRCpG5qjdcBCwRivi5zs8DaZGT8w2pEog",
  "key27": "5N2VPLfdLAnadnCqKoxoHLXLyxgGgqHzVQKXZR5Gy7zFuEAtvmfVJ7Ni2uYFXfUQjZuqGr5DreJ4CLJUxY7Svq1f",
  "key28": "4gwuN6LW8ZCEUNTQKiYSFK5uK7dvU16wbHiGVGomx3X6cZhAn8mJv6P5sdmrif23PGuU7KDJxucqfeHNPJXm7zze",
  "key29": "4mdMYf7nsmDzHW1m7ovS4M5tvwvoHtALsw2oSCWt32wmSTXYqAofFUwwskJ4KNfJoEEEXr1Ub5tpnWf5CYhZhXg8",
  "key30": "3rYRJVPU6rCBVdmMbrghJs2tq8Su81uuptJo8BDusjDj3go54zJrvCgDd3DpXEY9CxgkexHe71QYU8vQDujLhsH8",
  "key31": "3rQv6y744tZKYW1teseWzpFTNXv5bidWoMZNDkvC5saCc2Lkr6W7sFzK3CLH64Z3MNUJKArUgYaq4mXPRaFgp4eS",
  "key32": "4EeroVe6cuEzgVwGGeM7STrJp1rjP9YgaRWiCmMY7okmVRaaaxNqwmzvMANuRYFwSv38SbH7Jb2mtkMTYZT6ucXk",
  "key33": "4X1TJ8Bkx4TGR7KbGZmRXDyuRg9t6YjycB6dxquFZySvqgR5sjZQzHB93HrphA8tBLCwPZwV6LPKmXCBnQx3ib9f",
  "key34": "5uj6h7V2eQ1yuGV5cGZmwvE9LynpaXyBP2NhtVLiG73fNaVTw4wnbde6UwvbHnTKYURof5Qwbh93GyCAUCT2Fkzp",
  "key35": "2V1uvapGQcgzvrj5dKA2mh8mrxS5kDm4XXr2KLRn5u3RcwRyrecyTB72dP8PEYJtseeLY3mGY9H9KJSZYUdKJeY2",
  "key36": "4bgqSYerFPhc3GbUCvY93g6cetmUbFMkUydthtAuMdBNNtd3vEBvhZVL6jHzwWWGYkFymWwWqG4G1pjLwfiXdFJs",
  "key37": "3Wy8F3wQTvxW7xcPhRjStvEUuN8BKRM8ZZj76zEh9LLC9Q3XciXoJNpBjSfcL6ZzqTzVXfThhArEsibcMG2ze2x1",
  "key38": "2DnaDNYkbMUbhPXezUdSyHVdaou4CtL24HpPW9YrzPeVz1bsjEQ8wK2QmjvXygSrhjEp1vmZFy9z893yeMJjgokQ",
  "key39": "453euhULAK73juKq89aGrahg3TsHEJdoSC1nEZ6AzDNCv8LoRhD9Uk4a2mJJMhiTacoeKTVAnsho5cnVyBqYyV1W",
  "key40": "5p5F4UVxrnLnKfBW6MQrHNhxJAxDM5v1qqpg8HX6rTXH12v5PyoPuX3ZKh7631F1uY7MFAcdZPCWWMG6rzr4vy9f",
  "key41": "58NNwYjiyuvHmuGEs6qB79ups6EfNGBSDymn7DgGFL3P8ADU5qf32UKFyq1B1mgq2CxX5HbJrfA9xG5rCACV6wcc"
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
