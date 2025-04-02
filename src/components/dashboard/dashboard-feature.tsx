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
    "GZ3EjS8pZ3SqmtMUChWJ5rKVMDbBEXN66Wsd8AUcBts2c8daPGBNfKQ96dpakzVaei3zNRJ4oWQhZssBn8JfR1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9P1dvNrhRueYqH5XDXFeYFb3EAVgHQhkjqqHBAu8556vRG9SqLqiV4gtFa46eWYPfcPB8cD21LhKJ1puvot9jy",
  "key1": "55FqKUhue1EmNM4sJeMybMxmev2PWXbmyfsmdWPYoY6MwFndstokTjr5Dv56Zvhjc3GBUY937Yv4eVGt2CpThVvU",
  "key2": "591HfBk3sHbbi7b19wZY6ZgV9wTF2t9ff8ogVMc86JuBoshaB7vZLSoNNWKRY7drZLrzeWE9gUHaGrCchNFKFhNq",
  "key3": "4H23y1nX5ed41QWWzGCzsj48Z5kaSWe3uByrm2Zr6pYyRi7bS8p97rS6NqMZR5o8eJq7psiztxrkyWDbgLmBLa4N",
  "key4": "2AuGTfSBbJsB4PEAJxukCWdn1MeRTqyq7DznuPSMbE7qFni5gw4YWTmLWMzg3s8pywRqQLkcsri2xWHb1UMx1yz",
  "key5": "55rgMsdr2PcMo2k7UgFrVACHQmQ9TkvEgDjmJEALkPdpkv7Zuo7QhCBVvvoJt8akDiJhhYaouYasoAHC7xAYjSv3",
  "key6": "5eR7cEjiPBHH3tnFFE4FR5FTix1Lwhk8G5d9gDvvi6AjYmwqugF9bReR5AohE82rShRPsrpzj9cAUq98rcig7tTL",
  "key7": "2zbbaCn969DKdGk6JU5aLL2zhQHMmkpqgNRJGhHLtebD8nY6R5KLaKVUSoPKHT2jnofoYGkVKw2LUYCTfS3QNtbP",
  "key8": "2hnPBKLRw95b3ggZrdrAQt4HLMcXV8DFe5NJU9ffKqQ3sjUJvJLFKfUxtcbmqZ4JK5e8e1fiaAKPJU5b4wrwXEHb",
  "key9": "3R4qeoACwBk3P5g1ymdCNpyfWt2QQiHt2mA6PnjTBjs8jw8mCFLCTq8SjKL2LE9VcorXU36TKdN1kXMuP5zb5zJy",
  "key10": "4K2ebUWJpSBzDNQnwWA668uNBFCMSDPErounn2Qnixzh5c9sJpF5cC97xHG45PpSrpm4A7WerzqMofv9Q2r7MHva",
  "key11": "3BbrAUqjBPdAfspfvtpTjJSJRDYAEHtaZLQZ9HubcsXETkoTnYmwLmm6ATMytSshP4rwxSui4rKBUNg8DgRkB5sy",
  "key12": "4hq9iDH1FEqj92bh2wxwUkFjVgnZ56RabeBN4xRm81LyhDZDMYEbzg5N8g1bpsQYQYhu1koxCDSePkJNggK4Mh4E",
  "key13": "2P4QSrM5n5t6NVrZ2RHe3JrjqC2SL2bYh5pDqmHMRr8aAju7vGB6rhkrSdhWUe2tkoJEDNJBoHbymStBEkoVBqwy",
  "key14": "kcVXY4bf9PDqNdaWo6JNRAzyzD59U2UJcFzyL1FXh2WRyzZo55RWyQvJufX1r9vE8UJ7pJtBZouWe8a85F9W8hd",
  "key15": "YoHtpPrMrUWCjPd74cTe3u1CgkwYuFitSE1UgNx1YnGApj7heUHE7zTB9giDqvxdQVBYifDubwxreeKF5Az9QJE",
  "key16": "3pGkFtWgZYDF6GjoMvvaFakx2NxaSfnivievEY8R2AABKQ7XaLiqGF482DmA89Er6Q7V5kBBCyob55WgDxxcfr6Z",
  "key17": "2L7XMY75m5iWQWe88UFoE3LpFrgz9kTz9TMWmmpqw9WEZYJSrkAFcDDUKPEtyrHPZPnb7qbp2mVWSsPANHKjriCM",
  "key18": "2npHAqgTWQw31J8dstFvsZc2dUeLPg8tnCF9NJWGANkpb2CXoE6ozYXqSAveZwV4HgJQNh1kuXAZ9qm4xfJXEsEk",
  "key19": "4XELj2eabGiQmBFvRngq2wb9h9fpNDMtttRoHPVwdCzyCZf489JeBk6BZcUrU8Uh5jivR2YvqW3jLAYJkzXo19PZ",
  "key20": "529UbfKu2qy6YkmjG6qdZBzPMDb4EZs6QuusYLqqdeEedwNgQ9h4fdHHB74zU31LnF9hhVhTYqM8UEufy8WUZFoX",
  "key21": "5huyYeBy9r22oKbXwqkxyJYtw9NqQ5egDU3MKFhsSCu2GkxXywwrN3v1gZ7yTtoE1ku91v8uEVRhqB1yYrZJbiXf",
  "key22": "qPCH6msuorkpXP5t2CGmjSup5A3WSm79CjHce4ekHndiiv3v4bCCFh2oWYZ1k1gLGwYZPSrSLygWMa3SXmNNgSM",
  "key23": "kGHZcpUT248KSFReMjShXiJs9NWdQbcEpNKKhEatcMSGTA9457iW1YF18Mv9pbbmMNYw3XUFe1RWhHiLCHqar8k",
  "key24": "4GUxncRMfAqAbw1mVZdDbn4gycFiqa1CQrAfJNXgnFnMmUmmRzkxoqvFgnUTHX2qvex96Dk2yN8ez94sH8eHZvFa",
  "key25": "2UkbSP3XGMjawYdPqYm758zEPd2G8HMb2AwwuKHDmCj8SZ6PJYrv1uM88UJhCsNCHg5tmqZaqsL9AUhMPFt3eh4U",
  "key26": "5xx8tGcx5ZK7GH6Tgb1Y34GQn4kbS918UM32E5w15SWDD1aE4SB7AH3uBJkkJw4HoXXXDexyg134qU7nEMoCnMfm",
  "key27": "3Duy96sgStdCE47xvaewCFgqnRKAWFnHMEhZAQ9RhB8n1qJS9SnU3gbcbTgXFKDKLLMonkqTiXusFH84jUaJ5wnV",
  "key28": "4aSBqbaQzduosHtR7r1dBgPJQwBwPJYz6fQb11jcG9zRSY9uF2ScCDBw18ye4W7Drtk2AN3gnvU7PoTdZYqeP2EY",
  "key29": "3N3ZrRZCQFJvjXq7k4roekDS3L8y5tsQFcLjd8LUZeb6HfFUgbUVGu3wgsqkM12rMtXYogEfoL5GoXKEbMBkFWNb",
  "key30": "5zNHcYmP4ENb1SYJTK1LYQZHiepyxELB7Zn8HBhjVrukkvzX83ciRgJCkot5kCR6Za8Dj1yw2Ab7oGL5nJNa1GzV",
  "key31": "4MLnyZEtuDqrnfdzLQjPrbKUuTjCaCFoWsddpFRSDngQqNmjnbg5xtrxzBtcQhPNFu1RcL5pwD9NigCiiwQwa5Jk",
  "key32": "ZVeC57y54Vvid5W9ZYbeRieJ9ajBGRPgFaCf5umSDedV771R8vGtYkockUuwHKoZD3PwYVwfUh4wQHB3mGSoFZf",
  "key33": "21vt9bWa6mruA8RZD1xaWeMSmmkYmNHqtKrUT8uw5Bc2r66Y7xmNWEvTvNhxmCQkjVAasMEDmYwqAP7pEAmnSAgP",
  "key34": "413Uuv2ZjasL5y4CMtFz7YwNePSFJL4rxSvRZGDRyTibzUHwebFjHDVFUP1ohfbnmUSGVZkN9sP1zNJmH8ZZKFhB",
  "key35": "2H6eAJBH1TN9iUN1fBJT7Wg7Fiw7Qkrf9y511bxPwALFgYSWkE6LSrP51FyCqJxyy55bzAdGLvPBXaCc6XCEjtZm",
  "key36": "5S4jNJf6zKhExeBU3uqDVdyDcjj5uYrkXkdVVZaRWPQnc2nVpNTxitWwYPfdXiyQoAEaCs8yNf1hkYL3JDmAkmoZ",
  "key37": "5E3punNrHgww2hoCcjmPdQBV4ykYG9fcXkwo7rEYsSTEtLBgJw5TjvxZaqf6ZS5LpfhBuGVk426oHA8CrV6mv4EZ",
  "key38": "27BDXB8jHN8iuuxyeTzmWbJuLfxmVks4pajPrYr6o6z1AjWnAurGJa6AaUWJ8RteHHbZQxfsmAkrf54C5yJbBxKR",
  "key39": "iMQswSr794bckFqYVYf27H5igLUA4oyUf8cPmxGbfCJc9gV2ixekvVbnBdDMQe6nmZjs1RfyXfvH8S8dUQ1sGbC",
  "key40": "4YYdFN9krDDq3vJ2cUwa3z4mjYqdJzexVVDn64EFM8UqoXvSJh15yQhr148SopP7p973xXgVCSSAjfaqmBgV4Jcs",
  "key41": "3WXWriF1LQ7nodfG4G7zEGR52Yq3j543VfLWiU84oqieaDYURKQo8QY8q2YzaxF9ULWpAqbDB5jzxjgHSWYtf72Z",
  "key42": "5LJkbRjsa4nVjeGnfYR83TxLHdByDu1AQcHgcu444JRcBpYTXzMfZbjr7R9QUCHZbDU1QRgSWWLGFBgAFaQ6heFM"
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
