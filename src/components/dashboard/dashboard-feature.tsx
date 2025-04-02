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
    "2CfpBEXb9t5FJFwfV6f3KrUFxsami4uuoLZC1oHbv8SAyLbm42hELUP8pEHKxAcsJDNg9SqaaiWSigTq4U6raw5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6B2RHTXB7Mo5vVtj9xsXLxQm6ZG8K5WNiNTo4suGseXVZHFLHdR57118eYuULGZEUgnwctvEqmp2MUwoq8aKim6",
  "key1": "5JjEa4KUBE385YJ32f9aE4G665YnFcnunYEZxJY6HWiR5Y1oMnBCddEBJPVKCXvhYnrEnRLN8vxsUWdSG1BUEGKp",
  "key2": "5nqVUBzcN15JgamijkPmiTJVChCN7W6yz2QDgnu7k9Cqxt8nWR9P18XeYBk3Pufek54nUDyYdP4vi19rH4RJ4x2S",
  "key3": "3ZqiZq3YCc2ziyqRtheJe6fNMUrCHmSfTWYQ1aqoyLMg9EAxT7kCKgG3iQqeZvQTfAEVsQUmq8EqHpJSQrAWdpWm",
  "key4": "2t9FF9c1VTDPongSCcQQQH6jyK7CEFMaxS5Yw2Uh6LLwNrMz1VwE55vaay1htg9A9tLokqKckq11XrrbVumVkFnF",
  "key5": "4PqUSVPoDBgPRkU6W8pwxCzUFMhBfwhsuJHRZPkLagiQYvgaBEHvx6yCXSfZt7D7iZi2uwFk1h1n2DzhNPSgvbqU",
  "key6": "5RuTcpigQWAt7X8VJWJaR4mqT5FwhXcXvB1DTZkkrCQ3h91rqDmpjWqN7TmbTi54xJAdrbV1hTJruKmiG6tWZYVH",
  "key7": "5MHQSdTSHSW1zis9LCvhqosyppeV6gWF6e727dyPpXukU785rsuyCKv5KUzdthcZKL4rvGAKuD2vw4zRiveXpZdQ",
  "key8": "59oJcY3MAav3zbGYcKF5QiKKc3owTMtoB2UpK4JWDTkpY9eZdd6ACuBk7pVzBG1HUb8GtUwpxxJHeAByNWfUYCCA",
  "key9": "uaJk6U3CE5i54iNjfxG6iDKCqhh9aRn88nuVxmfHxaafeNuhrW46TcbjSzJ9AYbP8Fwzxn2NaPtYkUMGTiWMp5a",
  "key10": "3kP2tXRNidoh9FNrdzTcZbMnnUEyAWXr2ugqkXid7wK31pbeSwNPsRwmCfhiCu49Df3zwN1497TZsPWVbsLCDkJ2",
  "key11": "55qy5dArUz17rZvMnzKr7K5Pp826VkqJRTxs1hMFq295gRGL3Ais5WwUJPo33JAEun1RWRcEWZpom4PFiyhKG8y",
  "key12": "2WYat56ZsjN18TXQrACLGub8xgx2kpFCyZBsF3GNpJN7tYe9nEaUuHnxBZecaARqzQstxYgEhmkKLz1g3v2PReEY",
  "key13": "2u4rRPsAQHLnc2g49ZTVUFWjU5ehK8W58LYpHeGJLf3zJB21V2GcoUMqFQFTeim1DDsFqE5xPbrZkz2tQp1hNxxs",
  "key14": "2bamt2durkgtLpwDpj5vZEtCxoa3d5Zj9DRh8JUbfgp6aExwqbJWLpTqBcMywMZRAyRuXY8K1z75so4k1mxZSCuc",
  "key15": "5E4FsDcuxyodyTuhnnH7HeVfWR3nFkHgeJ85Pgjirc6bXHkvhudeUv8rbYVk4rXB1tfyHKmCAJtsEcGJtxfjX4eC",
  "key16": "2CF3URjoQYQqcKk3KtYhfahUD4o3WgtKxJgjAbuQHkFBqM2JDnXtHVcjCf1GmZAfd1LEcNY5YYuirFcrXeFPWoXf",
  "key17": "2TiCBVcsRpDTkGcqu7arTFMJkiA5FS4AUFtHijkdda2rpwj6GvWuEd9iZ1Rmr3am1iFG7hv1feP5rNNjRKAN7oyj",
  "key18": "53P5oFDgahADYH8K4uN229vX8RFMUw8W3D2ZNRykfJ5L3mpwiLxGzz34zutsRh38hueLkENekzL5VoEP94Jo8FbB",
  "key19": "4NXM67xzeXFNUVgYV57Z28yG3RtfTqdsYSDdrBHDorERL5oT8ToRdL77EZ78oh37oqswBpUFF6f1Ke3z57szjwFJ",
  "key20": "27ERoMDjD7nKGJJqg7kPoaTp5KXmxw4zTvHsspvJrujCp64sG3zGhHH1WPSn1HxGAKNAwk1WMFUD9GgPAEBVZTTB",
  "key21": "SESDSJDE1bHFxUx6drBqYXQfYNHuxeWjbJqvazpvihNCxmySA8kT9xhdxaXVdZRdYioWQosbxiRcCbxoPDZrzDE",
  "key22": "43Ahxc2s7hs1TFrLTQUd7zhDwBnLLyLmKKmXnc6yV9WnuwbsPv8UVEBXc2dDrCbhYBVbu6bUPFt1TysWwkQqhmY1",
  "key23": "2yYUDfawmP66U3j1hNMXMK87DozBm3CvRk6ZQ8tk4qUAYPrHLg74oMgsHDkkELE8fGSHDxV6yPGhSmicw6SBZXCE",
  "key24": "2hf5beVQN7spZ3hueBf77N9CpGGdbG3YJ548yHm611MaA5FjouQv7odWS5AVuCP3b35sxRyWD9rVojbkc7xHqnN",
  "key25": "3Bhcchxh8kxqDtwtQqwhwV25YxzvMpBekqJ7yr1MwdfrwiatsUqzMYeSqDdUz8W2dkW4zbJrUoemvAUUZykgk8ix",
  "key26": "pYJPXEGHmidWx1jhycEPLwKJ3pZMWYMv2QEKPV3yhVEST6697JYmUPzWK7pCESsryB99UYsjCL5hysgoRtvnr6S",
  "key27": "4j2yZCZDtSxEoX59RMam7svARSegmwU5Dp6R423Vbhf5hHHdyJ8zajE4LzhJGsYWfDQovAqYgTPS5zBmectimorb",
  "key28": "2ZhP1TvE497cxs3Ls8MBnvrcvmV9BPPC8RKRzg6tGdbDhP59F1knTaoXt9Zp4ztYr47jcfaJU5976jm5dJfQPYYM",
  "key29": "5BtxZdpWUTjCBU4U9CsZnLUoNykyj9Hmf5WoTiHP6inEurdwzw7SJQa5JP13N4VMcxG3ke4481sh32QMksraAevS",
  "key30": "2SXsd8rwKzmDmKCNVZJP3swboy1VM1FMQwCm6B8NoofEZ3dnKHpW2Xyfw4qcB1SbGr3HiHzSv9ZMzNELuY4Jc1jN",
  "key31": "5QoPAZ6UiGtG67LbpqAvMXiK3FYjn3B9vgGSuVBE1CZ4G4jpQwA23MqSZNQJLpHyAWQBQbLNKUt57sUux4scRB2k",
  "key32": "67oiETfH7h26yM5KEUrHiBT6tDpTXBib4ZJFMyUftBhNyD4N1VUzMNF5pgQcnUGeoCtfp5ifpQ8NQvHXaxYGWD4i",
  "key33": "pUFoQAzQe4fdjs582oXLFxRfrH6cW7buzawBn5xKdjvKdmhhLsCZqbtvNjtpWCVDHPoeLr1PSJcpncEq3UXfcAf",
  "key34": "ib96hq4reSVBJATsYK74krn5wviGqxaB2qqMXGArFcDNYjuQFXWLm7SPsyco1sADH5mvAs5SQU257gLAabqcDco",
  "key35": "3ixsFF3a9J1dnmyiyiHMNnnmntz8HrooBFjZqcioLrPeHPfPgjyb6HyTYaC7MsbV7KaJWk5tk1LRxTVASJX1dwEZ",
  "key36": "532TAMZ7gHPLtyjb4BujKb9SYmrocDAnoN2qKgq5nsGinH8obNkRngCAgaGLdXo5aG5bBGbL2qCQExD1LessZx1r"
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
