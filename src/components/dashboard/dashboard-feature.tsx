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
    "3X8vWL5iE12m4sgWEAoBXgvrvXxQR1P76tx9enqkVGRdrYP3CHgRof9qeM79uv8aZNWbExZPsmKM2ducL7FYW2nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7fdXLK7K3EcJrPPaCog5KjM1deYdET9rcgmo8j6wtheF3QuGVH9VRGyECphnsRjnK66ytyMjW5nHh7o1R5nYCQ",
  "key1": "3s37MTGmiA7p8GT99KL5NyVmWUdJGVTbuE6envqH7PHLjvMydG7pienDt1i3tm8nFuJ62RspjmGq2A2RSeRT1Sxp",
  "key2": "4bS6EcodKHSL3jtpeauon7miDfdPMRq4AVsgXZ8veT83qMiQiVeiGsSTPhyBn5bVQVSPQDm6HjfWBZz61BbAHfjV",
  "key3": "4juyKYzaDsmH7FzBVpFiCrZFB5JJkoqY7iVtmKyGZhGWf96ydADRjy4pHxxGBnRVBpX1cy1Fea7guS6sZWfThb5",
  "key4": "4q9vqgfFEj9dPEd1tvvr1CrJZD6zm4toPc1Zz5tKdqa2peW4VLh1QVPY5NrkCXBP6aeGF1BbxFw9pHdNopcrjFnU",
  "key5": "4MePTUrrhtWFgRV7zVPK61Kyyp3onGbLKBBRWEthtVaky1EpTp1usXm2gQ9n9TgjnQPt8w5kgkSZvBWWwcQioiTQ",
  "key6": "4Yge6DvjRBni6BvdnHbFyrtmocs66iVWM7W9MGcLhHdEoECXoV3aXYSV9tb3ZwB6Lm7mcoBDuCoFnRxzyWDGwXCV",
  "key7": "2tsMSgNcpEsaAXnS19JUytrQ2STGS9C4DZBAkHHZHb11Qsy6nUGV7HE8suDiQ8c9YXs1Npui6J3F7Ub9zDAZssfa",
  "key8": "3FAMRRtP4VJVt4WoJHi5YpGDx5EtWseHNQgd7n8EKHxbBggqQWumR6vpV4GDnGNR3RVH1UKGEiENkUYmSDSzty3W",
  "key9": "3jQPCyT1Ksoyti3aRgxrrDY45wxRhqxMkJSmtMTKgYfC5X1yudFzgzTHrTEAysqdwBjHCta1EbwTFEF82z69UVhv",
  "key10": "2FarxQ3FUeioUi9ezR6hveRSLkhvhR5UqiXME4ZgJPik4NR6kzT2XsVZwcW8sLskJP2BQtFRzJ8eKVUxFGumABeG",
  "key11": "1JxT7jMTYTPo23vjmgLSinrpYP5HucmzNpkcfMLTuuFnfyGmxTnuzsUwCD1d6yJBHfCUtuhYD6zvDrmn7QLKjas",
  "key12": "31djWMtuuCtnNYzyLy2CXCtzQXz78dTRaydcrRnjdGKG8ZsALyzgMhTGQaS4HB1aeSV5cMwkHXxpAwxeUUmAZ1WX",
  "key13": "2ENXqfmM1i5teieHugrZUCy5ACn2cVq2Py6ravMaV7oTTXktom2uyNzZGWhfSuFcUuv72PB7pCJj35gFs1HkSaZ9",
  "key14": "2g2uGUquXUxgbqZ94wxTkYwAKWZhdMU7mbN6ecZBLjvmQhvJcdnJdrJs8t8Lyng1Zb9QzyqRJGhXLsY7s5gSRAES",
  "key15": "22LELLtk2PE2mZqeeL77BBPZormE3ohwqy6SGxE8fK9XvS79UNEECsGM35j9T1JE73jLtrQKe87MLK4uLrPx6XKC",
  "key16": "2CTsAwjwXetACEVLQuhYgQLdjDYjR2RDFaDRVjhzWh1SRMvCsDMiacaZqoq7yr8qFgFrLni7LKB9kAemTpSDrvpL",
  "key17": "3LroSFuRea9tjjJ1udawaEDukL4ob3pTD1EXjaQ3w4ksYB3mKCBVYPyGP5WL8hArzNGyR5LPhSzgyKPUDewzcRJj",
  "key18": "EgwkWiFu7aAPkxbHuTc3GDoZRoaJzipCbERQ5twoELF5MLXH3MQsTy3HjBTdAbPyNMerSusPKK8Tceom8sUmZav",
  "key19": "FP9qLKdNy81fF2W2HJWCXeCpupMpWtMnETuQBWa9p9PdCRai23Y5anVZbmNPVA2pvvAoinPdcTvLDu31WhGBYNJ",
  "key20": "4xxMFMQhBowhtMw2UEw67tXuyXgZCFK6Cti3uPNN2JonHJTwMwrYTxmUQk5R5pkDFLRQyj6SEnBaXBQjF5VM1HKr",
  "key21": "hMDRQouPncv1pXvJcqkN2higENRP2KxpeLYmHYKC6DdFwYmLtJNJbHNZhZy2VEviFoKymyGncQZeBQuPY33iipz",
  "key22": "Uiyhzf1TNNeWKLirRaGRUrauhj6vC9ov7uv9WEbZQppiJdB8WBDo2XkvvMrwhU6zTMduEe52B1fBgwGmAKZre4X",
  "key23": "izmH8NEJnFrAG5kTXMZJbMNTDyj9ko4AknqrQrpYnZu968HYxuEPhHFxpEJu4MdqRxNxtfmeh3wNE3FMtRrKvaP",
  "key24": "25TNpQa3DWuAnDY2KWTa71xx9SySy7XXjiB15cEnUYCwz7hHBb3eQzukVjvSU33YfLBzHLGYDBpivgQtsDuub6su",
  "key25": "2KbVnUyNWiHKbJVqNpxkm6oCmV1EJiuxZ68HcsHQw5j1fkiAXefE49Kbstx8c9ohXNLwGy7Ut9C3pdJ7jJqVeaQH",
  "key26": "2AUr39FQQtxum5Ziac3sRnGJTCMdN6c8etXqgkugU8fSfJxSfELCrjtSZQepQXAx3KY9rKFVn77bscJRAB1QHSSR",
  "key27": "5yGPXVeRuAX9si9HzEp2Q19rEr74P5wiqAjLzKz3bFBJCAXWf6oUC6g5PFM13ooJ6v73oDmV8YJX8F8jhko14Kb4"
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
