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
    "3v2NSeAzHtoPzX61A7EcpBwu6ajbMANTbudvzk2DNXBNYwsxpXeFSA1yvvAQmgWeDxRGMJw6FiPdvME6a2t8FvZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qr6rKJCb5TzDdtW5uzwDbYRktYEeKxMv4wZ7okqDJBMzBMReL8bPejQxmqPoHAwcymGQYpCTgzWEeU2SwJ69Uao",
  "key1": "5vtFr99wmLq9Z5ehnJgSFacEW7anbDiTfJV57iXYuaiX5Coq1dyxDWWctWvhbcKEo6vWowafdGw5aW51Lh3DfrJz",
  "key2": "5Tsz3876xEndbeM1LMp3QCeGbdhERGQKsewoTJp9ZXqfQE8vAdn927rS1X6GyenEFEcvNC8QxX6Z7NiE12x7MiZt",
  "key3": "5FY6d3RuHK9Yq6A6Dzya2fK1zaErLdknhSQLJCF6XTvziWvSt4TgQUpwY9QbrgGs8J8dxqJFRjfNeWZrc4H7DMUt",
  "key4": "4fEyUw5DFqQjk4BSyVFEvywH9F4w3M3fpLYpPjQcMC7ZpmNehGw5i29ZpcLHXzR7zKbUjfFVwrmDFJFTzQrgqa7C",
  "key5": "8L7v8FEwu7fYBdRv4KbHJAGf8HhcBe4KfKYRjfUoKf3eMFKKPFteNphwnN6jELmb1ASusA15rub7NriuABN4isz",
  "key6": "JZaQVuThpmbWCSF2FBzg3Q4t5AmN1EJXasJpiVt8arXb8MPj7cHhXkJ7trbN4bKnvWSgE3AeFoAMutdTiuqk9U2",
  "key7": "5wkMe6tizUE1f9QPvHUnoLX9GtSF8fDeSpHbShZDdkX497R6wYco6GqxqzhFdwLfVnx7wYbdbk12q7UrjVnjDUL",
  "key8": "SfSgNukBwV9pzDL9itR2pAg3ede93FJ7MLVk3GfLTjbeRvqzVTpoqYJusea35miJEEFsPFtGL87G6o6k5FuXaTp",
  "key9": "DDwi1T9xXAGMorArKgXL3QKBWQJERCpxTqWB9ChExLsjLbmcozyNf2fCS2HF3uTYuggBPT5ZhbpsM4h4fQDevgH",
  "key10": "56EzLZSdWGhQYKRvJwZEgxuFTLkqXx9Tz4JXsJu89tYzvD2UoPV4WzRsSLjSaamksy7Tnotg9rypkTRsQYiUGSHc",
  "key11": "65jGfMt2jfU7wSYGGahvybn7LuuTUemyCbZFAn3tAP3czoLW3ysNz3GDyMrQ7z4xhiGJLkMTJ1gh97RX6RiapFiY",
  "key12": "3wYGK8iEmnQfsLrwpQcuSVwQNyrfxQaubSLTsdUH4hgEEHLmzATpjWRbuNpYLYEjk1ctfn2P6YjarzsKbxWSmquu",
  "key13": "47Lgn9pdh9vAmxNDTz2gyoMw4yTHcZD7RiixpStUHwnMsVtgpPpNFygPp42wAVXgra9ibe6VAizJXopYCEjZhwrF",
  "key14": "2KHs9kR2X2xxP2wesYNZgdsERi71vDoeeZi4qCzmCzKY6kPzbn4xJyCcsWikNZaJAr4akoA5jK8Ub7LVjB3tyrd9",
  "key15": "3cXuYimaNFvzTAxbvrK4H4FJX6cQDTx5Wm9B7XJW2eWsw7Cf4fFFk3vmb96UJywPokGjGRTLj7zrfj3kJ2mwjoi9",
  "key16": "642aSSSLCatsD6iz31rFNNaXKFcvAL5KBkrPEhbMukBMdyp1sT7ktkGnSeEvr7vsg4LSwNR6dMdZoCXadqAbEDjA",
  "key17": "52v8zWxJvKyVEcLrCwDuU9UoWfC7N87kYTd2T4Q6TaXWJHm9Ub5NfNVB35MNezVRUfwNVGpT5AekGpf7bBj99RrD",
  "key18": "2rcvx3EXL7Rysg2SLhqKVecFPmhKeoAtH1XAdVMbqT1KTgWjM4ES2Eb2nBA5kTTGNXVgtYwXTtzJjf2B9T2NkZY2",
  "key19": "47AcCE9VuC59hxNfjG9KZ6K42XXRof8JjjwvB5WTTNk6U7k8fRHmWpYTWQgHBkyEHWQhkYBDT5NcrVF5yCPV5k5m",
  "key20": "5YqRDKUyGsgqrWvXkwHF5owtw4ZRCtB4oWToE5uD8amS36CSqSFUPBW6zkFpfYLN6sEChJtnhqsRZaEqzULKwvUb",
  "key21": "5uz4LfsKAqcwQ6S4UbTBLnM9ugCAbK3EUd8bA5UAPpDufCZaxiYy3ga6Ppdwm5HcYh3bi5b8aT4LBQkw1QkBESj",
  "key22": "4F1GBwEzzbUraZvzAH8YxzGWvu6kWYTxfFq11NF7D4NYDabppJqAQ4qRMVGnoSGZ4rbuHwD22PtX6mvJ5ec3Q8QS",
  "key23": "3rfiJjqyk456VgjgNzpEXeSBoqrDQV14rfdyRyPZgQSuWWE3xVoS7hsK93EvTvGR67v7u4b2W3Ueao7UvZ5frxsz",
  "key24": "4aMMHv9FuHgEAdtM9fVhaxDMffb5ahWVieQcQmtfNdaaKJQBWLvs7o81Egfd1FGLMUB52ZrruY5XXydejzqgZ3PB",
  "key25": "33XMRqkGrQtgdP1HoB1YDdgJSiAVBjXAM7Cdv6cfPMa1k9VK8htu373k6BQikJzwHYV7dhmWxHTDrYJn5BnUREe2",
  "key26": "65em6F5dfzKwxP9cyCoLgMBHHoFomykzMABqR5SXqQs3wPukqDbDhFHov5GRZgXGUGvR6ioWa3mYMm1Rb6Q1pnQk",
  "key27": "5s62Q2N393219jrrb59CfK77HjDePfCJf1SjjahdnuLPJ2xAEuRwhp9TTMvrMH1foBp8W246yUD1fmsZRR4y72ip",
  "key28": "3HKvqBWyK96YXrdnQe9UXGuHdNC53qh784GNZTGemQHBkkyS7PH8VTV94YJgKDWBnB9itf3U6b87JfLA8QCPnTXv",
  "key29": "M4aHK1Fi2UtwHgYnWkFkbCEnKNKqqmsEj2tkVLwEC5Esv9n1oJPBFjA8pqy82zt4Pafr4CrdB6oNZHWMf252SpF",
  "key30": "2zithDfxRzuoqDTf9wjvkzFRT6kBeiLLF5V7rAyvora2fpCEmw25kdRVobwDJdyGiq7xyBgZFHupJqv9LD2h9ZVw",
  "key31": "4y7Uv9Hbww7DR2a4r1wCn95H81VfH8s93XD8PRnBPqMEwBsCRTwPPwxNDtg5fhq8NJzMQxNP9G4Zr3C4KSfGyA6v",
  "key32": "3GfALAY6QPTzX5E93XkauLtLg1qnT3ShPxP4c4i6GBsSTCwp4my6KZPLrQFsoqTZwSpGyZEMoVPX5mAVAHNN2tKE",
  "key33": "2rcpqXFVYcxzGuHwUoD7if8xwASdjkJ3LMWzKpPbFg76YjNWcTwBQihn1tizYW7uuNSdJ9CQRL2P94CBqnXYmWSC",
  "key34": "pAYNUXdBxZSP35fHDeMWyJmzvVrmHQDCnHpciWzj5j8ZY6qZyD39LKNFg1GaC4EFit8wcWj19S8JHykAD7aMhxX",
  "key35": "5Xp7VpwgBdLyN6EkAnbndzC3tumMv9s1Emriz5KtFzxravRUet6MB7ZNcUwcYnkda1XPr7ypg7npBzmYY52hBXeX",
  "key36": "xBauSVKM4kVdcjPaoFYLiK4sFi6p9bsRzQySYcjvgSHjkrnFsiZJgcipCKpUbHqf7CGQqeK4LuJBoPU5dWaDg2d",
  "key37": "2QiqqV8XLwoJv1KDQf52bv2zK81rQsgdvSbq1UKBBiQ5sjM1S8dMiuzYsvANoqfCHeDnfZmgJQPcKAxcEDwYstTF",
  "key38": "3T9vSDEC9wgvc3XDxE7MGqbmEYDUq3EHaGxG5ZTNcJhV5RrTZJS3qq7soHq9WCMouPQZojbSC3krww3eyoJ4C8g8",
  "key39": "3t7M2LTQsaDXNaHThRttH523ykVVsJEG2mtjsmq4h8yztojgABZ8tszFbSGzyH75ZZMjgMPEWoa8z3hqYngug2gz",
  "key40": "3Tv5WDodfkQj1D8a7t6Zav2XzH3KSqRNEBoaUDbi6Qv7Q67T48aZX1f2Xf7jhJTT5DHPAdaDiMGkCgTjEgrWMTso",
  "key41": "5XAJP6zfimWhf76Pc46d9RX25RmRPSwE3uzzFdEzdHCpsSYo5sYC7vEYYfXf8RUxxLxP2QHefZvJg4PE8rXnCW5p",
  "key42": "3M893GiRm5KdqcBbBmbYHFXnRyDtiBaW4b3icyEvKmopKS3oQnMvKx8zgrwgVt7XuCVhBf1m9Mg2Xv76kNH8W2vP",
  "key43": "4nXG662R365fjeshfn2sDhcaZYKyN8YcHrjdpAjX2JB6xYRZfRPWPSaNoAMBwP2Z35p1xQSNCTbQAQji52Vnf7hp",
  "key44": "2DAPPCYyPPcdB1qJiLRh3FNxENNs5NqdffuqKogqGM8jpV4ZqKQqqFRyDJFRfj2WYh2pB8wMXEj5t9UFEsxdPVUH"
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
