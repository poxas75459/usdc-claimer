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
    "2Hzom8bwCANzYm6Sa7fyzH5L6NfFoM1iSqWdemn3kQPkMetaRzAHvnbX6wHpSGRfLnW4tyqqtGcohxjg5YmA8PMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZhSWBWwGUQYievRNJodtBAvCXJP2myJmcspM6UFLRoyMmTBbxbBihgMWJ124BSufw3G3qvk2rqk4699eWee6Rr",
  "key1": "651dKBmg4nsqWYHPJ5wHqtd5oyQY5TYJjGaNzATfGPSZxmFtvFZq3KJavKCV6jzpZVJph4799nAj1Sq98gwc1uPC",
  "key2": "5yjPRamtuoTswuzUQEXgwMqWAbivtpycc6fJ79vcaWdC41XRLd76SV3vERFCnkokqm72mrbm3L64FQQrA7N1LgUG",
  "key3": "jmxQdMsvJoFQ6KUBUq4JxwB6W3QQFCRNJp4rEC52NWKMejZZQo9d4cWmi2GJMAejsETqLgHkRZmgYzhKWuQyeJb",
  "key4": "4zxZK6wNqcut1E1Sxkm1PcyMHFVyqWt9cVA5X8npWpnZ75GycTNJE2uwTXccQX3WwsFqL1bb1fe3fFrTfaYxU5d6",
  "key5": "2AEQFTEeZC2bfqqaCk5MSx1Sjyw2d16qL31P9CijZktZsf7Zw15ofVRHsbkMsHCV6Lf4hfPgRWidDsNjBoxM96ww",
  "key6": "24JqNpB6sDVgm6NzSARu9ELtWKHPfU9kmL5Vpg3pGjVbtAhu8BUWqmS5RfwSqs4qDRmdugQvSLmost1y4RuD7ykq",
  "key7": "4iReay1SMGZmFVHCwwFYeBTqNCguQgeTrwFKazUo22TPbWuKSjAye4DMuuVfnxK1R4azZPYgHjc7e7PddbtSuhUC",
  "key8": "4D2rxqwjY1LPXDkeXFgR9PSv1VJL5W21C4f6UnrFEuD6RwagXqfLSRF3uGDjyi78Pit8bvo9aQhfPmPz73ss9DGH",
  "key9": "4maUAc2ooHKvjLMMmgCSVLYuiPPckZadam7WJPC9DV72y7a3qMYBbsntmEmVZzDRWcYRQMQko4EhEqVbtTMZEQb",
  "key10": "5YHjh6oE42ojxGEGNkzaVBKk2Qi2Bm3rioyRiSkSvBJhrxJ62XDwxZuynxRh8qMBeRCjrFeQTZ33Y5qYiFDiwhSM",
  "key11": "3oHz4NJAv7R31g693w5C1wft8qfpDjeV7hLYeLFD88nHfNdBHYZDr2PSXjHQ2VsMYyqJ6ojCsBPNRMq24uHnGKca",
  "key12": "4MtrBjZtpxEbeNX5Ch2w4kbzgk8jt5cRZ9gsSviYk8k1k4AAY9W2z74TWPTzKUGUXqiKvtMonrCxGs8oxB6Mpbjj",
  "key13": "6qioJSxX7w1idfMuyDzbu5Mi9LmmCS8XpMYoxtMJBertSpoDpp8Kxvd2Mq8wFz6JUswsxKizsv1g779FmY4oh1E",
  "key14": "4S412ENVxhSFTbjFpnkRJMh4oB1FXRhsUMKhTUN5WLJHAppNmyF5ELfQZN25aVj487SgCkmvdwQr5CiSvk5gJRGK",
  "key15": "4eUR8CEfPztCZFWJi9MQ5M66EW3i6PDe4aYRfLFhiABYFHGNh2xfEfTUWx9qaMntk36tooPZCPpZJCRaGGe1xHkv",
  "key16": "2aWtseRi2c5hb68W5YTU39QdFmqb4wbRaQdWyskjA51r31RBNLj7PUaVb1cjiYFGzRU6ZTpp6SCFENcU1Fi7EP1m",
  "key17": "27aTcvLpYKZ8QjGmW5itTnRkKXLtjYdruznbitR2nrm7s1oEaPVWUSDgzpm1vFrpxBbvWkEuKDih792PZ1GP7nFF",
  "key18": "4qan2QU5fQM2XDciJjzVqMkrTkSpaaesxH5zs1JTNuUg4zeHZBxmbKjtBBSBN6Vpb6DcmQkCiTefWT5ZCJEE49dt",
  "key19": "u9U3oK7NbUUyr73tUZC2yN9WzPQPDdfuW9h4MqF2PpE1NQ6sLtoHhAgLHvuTkKLfzjjhFR1RYmJoVu3JwZcb61L",
  "key20": "2UbSRMikLXDsmvDnPsPZDj4DwWRt8JSASyAjmV5p8Bejhf5Fgsy7DAreY1ft4KYQ9H2YAYuv6ZwGu7XNtsNkMsQ7",
  "key21": "RUFyZ8J7EPuV6oZCHPdmckxVTZeTFw8koMyBmnnYLY5Fxg6azspS8pYHzALfshuygtVRBXHt31Xt2EVHfp5EBmc",
  "key22": "4oAvuiNF8tvEn8ZqpbTXRpTQaFVfprPQCQGYn5m6ykbhaV4WeZXcNKyb6x1QjfroM6K2izHiuKPZaK2QnnGkTVxp",
  "key23": "Ts3jvKanUXqjZ2sCvjXgfZ1NPcnAVcfjvwkCFDbvwLep4J198CcTAcq785FNcFY5PKpbhrfbDpF3tGRpoKoR1Cb",
  "key24": "3aeLxa5jt6AXUViAESBuSg3jXfVZB8jiTm9yGD9VrWxbHbC1QWFctcNQtuDpQrpz2wVP1ZnHzi2PXTcy8xKzmfM4",
  "key25": "5cLCpVDFW5rBDWpijWUf2G37kC1uegwYMeNU1rZP1EqLBdamdsSECjUZqmSBAWYZSNHwHX9XRp3R885XjjRHZEPy",
  "key26": "JQfDXeaeNUAU8ytoM1Jk6o2uN6jDucNcSvgtJWgyvwUKh9ECanCsTUYsJru1w4EPg1wmfpdsHitMvex2Rd22kNt",
  "key27": "4oE7gaiPkAMxECMrKpYYfQE14CerQdgJx11bQX6SJULPHuJrGGCgVZmunVAS2eV45HRgcxkAeu9rf3uUpkwx2EoB",
  "key28": "a767wkKc9vEb6pZHLPB68kp8n1xiMe1iA588s8phV1Zn7jk3Efuj7uVtiUhc9HrKAEymyBCpTRqaBFNugQukA1G",
  "key29": "3ettpCoJgQz8RmJgxUtjDqdgHMtc5SDLeoJUWJwxZyKUsfttpwQybcgzvCtcBwoVfC1wYv3FW7Qnmu56HMJ1CgBt",
  "key30": "4CwDKaLM6Kq1ZkvRRiD9oUcfy5M47KmirPdVGSH83aNtVSV5xozt6BgHU4RLQTDzFXsXUr8ibEQg6Yiey6CFUY1r",
  "key31": "4RvDMe6WrvymAMMSbu6dAj6JWypHRaZHDHoDZebNaqmKmFE5t8rmFTvfmKziKGJfmoBt7krYTU5cxHnxWdrQgWeb",
  "key32": "2Fuic8kypyRCHFoPQJp3JNsH3vA6G6XphZrtXyunx7zZA46VL9enoY7jj6hwM1EtNFe9NuR9Li1pNtW9bTh862kd",
  "key33": "2WWX6i8JiAsmWNKe7HqcbmFqCE6zYivSJda8JSYGJFkkUbG5iZi9RU4LA9rVZu1eTkodmMFrVJgNTc3dsUeFdQoN"
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
