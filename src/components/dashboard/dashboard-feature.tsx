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
    "eadwQ7xonxS54ggPQFXoB6MtEMS3gr6eBnqRibLsHAHexAGkpzPcxnQ2RP3s33SgwTDXRviDkNqYpNJVUXNNm8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqPQnYUAFBBRMd5MfsAi4nxXoNm4oTjs4eCYWRAGY5GW8onLa2oHCLa3X3EFXPLVnU4zeYmWiveR5QqBHDUkDLi",
  "key1": "49AiDEfv23mErVfiDUR8Jj8VNz9JFQYC5Uhdt52cmxXktugnicRCLvMjwfphC94HMvS4tQVCFSc6iSRbyZP6x4US",
  "key2": "3oJwfAGDh179AqrJi9ScKYZTGFzErqJAAmw4Wx4of55dYzsopT74U7wvcJExx2eMvbtdSRmpDeq53WteR1EzaJyw",
  "key3": "5do58h4VGEjEdJixmwN157AFk1Kpv3KsZiJTrUx68o33ARNTXDxxeLh4w9jGkDBfY11vRnLQXrSb4HW9Wc4eUrWQ",
  "key4": "5WnauKqu6c8D4H5pf4j8x7zuW4xVdRgVfHaAshLYSV9MyQYp9eePMYTGY5VjkAp1nRZHNGMsme2PnJFB8VQY7qPf",
  "key5": "CdnXFXB1W98PuFZLZo8C118uckA5PMhcsXXx8R2oWPRRZNTEDKb5w8vgQHagLGCtBU7vTqWfgw7DSoe2HNucmzm",
  "key6": "55rGzmqHArGxeTWwVLWK3swc4Yoo5ieW7tU76YMu4p1Et4ar2Yx36UWLBaGcB8yaYd6XUFrs5923oD7u2pXv9uRC",
  "key7": "4SmcFhEqp3ficU6NpNbqBx2qSnuZYTM5KHqd4Rjkb6mT24ey5scme9q1sU47w7WuacVZ8YwgasmDRYhw2yBLnMF5",
  "key8": "3kV4hULJgNzrPA7ZVdfPvVqG3cVzVUGF2Vbn1V21kB7fiF5N3JyiGC8KYLqJL1wrJ47TxYqpdMWPx3T7uovfU6gK",
  "key9": "4DjJ9KxDa5E3cVeNDT7UgFkHSQPThmkPofFT3rWysvyqbzRiGL27tUJDM8iRFFinmud2dbJ5ymj7hoGC74TtGvMz",
  "key10": "2SEz4mbdfJ3DXEy7Ld2duPsGQnSdyz2F1LSgGz9mJHhnLcy8TbeoYzcs3zqhUfNUfs5ni3xRFyrPhUANqjicrP6J",
  "key11": "4zaqfABPWn7CgSyNqwu9tHjgPJBTEJYLggkuQemVZNXpZZXNH2X2hDS8xpVX5qBxAsFoiSq2SNW15ZrM283UweLy",
  "key12": "3xCJwPJia6x3Cg5KYFJftmpaksqcoTuJXKry1oyN2tKNrEzo74GpXNkd5FbPSQc9u1WAvsyxrhB7hdh1VEFDJEU6",
  "key13": "3TJBYadAp1WwddyCoFxFW2V5XxHYzYkFLHCeBgZmikafL9bbkjtZXNLivWZg7anhTFmM9SSj2mDroq7T1qU5H8vP",
  "key14": "2NazAAjF1yKZZN4XwsAsaMM5w2w2pXL7qJTKR3gc7LMnYHCDDrGAb3375dFFSbxZFLSvGbsj3Tw5g1bkdtrtSDh5",
  "key15": "4vETfE3t9FLrinXZkknsfe9gE7TZ41GmLMRuTQanFAGGdV19x4gPfYj66kV54iKWVKUWXNnrjJ4Zvk84E4LfhFo2",
  "key16": "34sJ6CE4GMyJzydEG6Fz9KAgcvFVMPQZFxxpZq2DbGUCVhcNc2dDj8HAunvfTwh2Uzhy1GfetstyAg69ieXBLngH",
  "key17": "5R346Ye8w1WsCV8k2jLj2Km5QkQp5g6FemAhyYffFAoQujnr6dV7UHgjqKizrKPwQQpEJ9vG6faJzz36WtAeXTub",
  "key18": "4eJwf1Yq4B6vbBDZXPfUgShvsNLjn3oKUm6DfuJxUzPRwwRPjaSzJ4WgFC5AVZUyMBbid9qtshDEwDc17AHWXrdK",
  "key19": "62xUFFHFf9CTmZ223UMpLtiKJgYMG8XKpntRoy1wtqgvjZUNe2T54UvzoU61Ur525Tjc47rKFno1och4LP2X9uyb",
  "key20": "5w5JpdqwqRU2x1QCn18MrtBQTCdGaTAnBVikT3aSsnqrHsHHfamg81foezNTHgFTNp6oRqQZiDq7QGGT4F27hFVJ",
  "key21": "5Bqvsg3XXBknhFsEqGryNeT4EBikcJwCPWXbW41HsXcb5k13RZDRda7dbPsB3UpcWdeZJAAncjX8UzVoswZEvAyk",
  "key22": "2tcB1yP9JfpYMbUYCQRdhRjFmqK1gQLtv1VMgBHcXvZDShDruLa3gFPrMFF4stNPqQcDLeUmUZ4PWE8tRGQiTzNW",
  "key23": "5TPwmUnYB6DP6nXp1VzNrW4CoohsnDC6YouuEv1oofrzEZpzXJNuCiEa4UAvQMJLNj4nxcBEJAnyEpkGrSUZWn9m",
  "key24": "52g9hshXkNbyNEUNGJw8uABXpXiXDCdiwXQbZMt1EM1BLE5UjajYUUmwVGeHLnHNbSG1KdE4B4xrDob6YTXiRy1V",
  "key25": "41N7Zvzu9ArPoVg3J3mAQfk1K9LmsdWh3ixW4qusRVyQ8f6Uo6eaJ6ECNFvG1TMaogZEBMVCWUPzWNN6ptr5sqRk",
  "key26": "5YAonyUPrnKV3qZeq7uBwByPbDmNtrt2LP4cWeBFAXftQ5fFSiT95xsXofTSrymomE8n8npBv33q641tZjkovXhc",
  "key27": "upc18pujmWEPK7fmMNcQB9wwfhnfSH7vmQgawLhVTUjxU6FUcNAGhdfRidpkwsYUrRy8WBH5hEuzRC8zkgFYruC",
  "key28": "4FufSE8GYkiG5X3aJs362Ts3n96qh478JC76bGQ9bysuZk4Vt7Cq1WSgZwPZnS9hFmFtNAF71pygFdXPTQE6v4k6",
  "key29": "4V2qz5NAb4VP61RLCpHHRiuPhCnZxpnaaDK5pgZU9d7NBNX99mgxqJzKP7K9QJph5ghR9YFBYFU7qE7jgMTsfQ84",
  "key30": "2JC6pUEoeHSm5mSLHKd2UqhVv4pHw5aunh2XGdV2VpB8pMmsx35ozFBNitVLUPsAYQSL5BVxX36BfKtW7u9hns8B",
  "key31": "2s59WP6odziBDTBNFpSij6GkKp3KCKiSnYghBSDpzTxLv4pkzHfp8GkzLjg71Q2MGGD6E4XiE2u3KjRGVSVW3yWz",
  "key32": "32E6jTDfzQ4X5NyN56qXMcJE9mUsUumPog8NEy5k5SbVQ35PSBUp5JDwi5ELzaRB7VpiepUT9j6Gnfek3vkshNwR",
  "key33": "EhG4GG8Uc6yWQzbH4FvW5htRShHkhKZhkFZr7XGjEH35BfYxMzEHpfgJTgu5hjvNC4eZXQSgEiTJAXBwkPwDceH",
  "key34": "3MqTVoEQ1G53nRwSEFgCqDbexrFbB4nZg2sMczuPv7zk7as8eD8SnN7D2j1b9REpqsVNQzb5kTxYydbigaQ8ptY"
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
