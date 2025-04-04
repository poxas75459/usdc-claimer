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
    "2Ub1rRAywq3XxJjwq8C4CDQiJ8e9QUQQnrTxsWcXtjgVHZJNQBsuFUGUwFMs5v1U32xDhUuFDkmszQj7YoB46t7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihaJg13WpQPaWqjPriTijaxj8TPt13Pq7LHfEe2auSs6gvqyQzHCFqXHxwMW76ZBHums4mXznAjpBtDD7y9s7kd",
  "key1": "3QuTiQgfAAmMzs7cwdXmy8pC6z39dWVg2RQmuG3MofUUXZbLSn5c4XQ8hA2oeW34WHajbCnTqmsp4JoYAxtyVdcp",
  "key2": "2ToJH3T9cf6jqZS1TVwUMDurmKZ1LkAmmwaYQTEDPYB87xTNdB6miAUnDozdmsBgxbQ8q8uc3ZoZxAhWikmzbhsQ",
  "key3": "5HYqqt2EK6RS7yLaXrpHBrznbtcAKE2pZ5GaghJ1mu3APSmcmc9JbnJoSJqrkfCJW2aK2P8Xzf8K2oEnirnxvtFx",
  "key4": "29bDa64f2U2Q77YUh9qZjxekoDUguk9zsSJmLMpY4NukBN7e1zFF5sqzy49icA1UzhGjFsoHCHNKMNkH33kWHqty",
  "key5": "2PtgGswrkCcJqQsijsdw6B9SKLFTLvqyggbuakChsyoMGiRuR8c8z7gJnGeMH5ssm6gfREi1YASHZMb2CkwZj5Tr",
  "key6": "2sA6yYR3r3Gj5uYgGqyTe2Tknnigdcyz8QwxYayhXyVQWSqWo49A4tGnBMx8MtWvx7yVGcb55KpWneQEsEKUwGLR",
  "key7": "481kprNNeF2Ggwozj25LTsdFUaEWDs8YSXzMNkCx4gJFDJsAEHNWfUcniVEzeyCzju9vh4vktHDDy9UrxqwEA1q8",
  "key8": "4FRjatcBmTxffAZkk9HXxzid1omFG8gyFujmiWMk9GP7csxq4Nb4eBEVUWsdBboeJb8CqpYhyV7k7HYMTtUX3YKL",
  "key9": "3c9UXbE1rVmE1DtB5Vb4N2wUZusjcyVGFnHD4QK6YYgsLEy72sW366tJhnZpT7FVLgH6QfUCjrKPVoTLdqGdpYkn",
  "key10": "5pJKLxirNznCeQXSGV1maqDqwNvzwkb1RAJGQTHpzgysAtW9WnpXXEhc25bFT1RNuBipwnAP9EvzPK7qPhn14Wkq",
  "key11": "2UQdRh6XitDHqH1dyEqW78SHDf3WXEAdPHT3P7n1ACBZMNmBR7QvZGhHf6w9cZYZL6grJUp5XVDS8ApmLUgdZnd1",
  "key12": "35m2foEx2cz68V5ENupTRXo2kUaKCHJVExPukr8JiAFj3FiSp2uskzxPEZHpTXThmKa4iZ14QBCWZTTaYzVvgcPW",
  "key13": "2rQmKaKZYJGn9A2GuhnDQnG31WiFFMxjzApykCRmDainy48957iQXR9jqQcz3ntiuqitdAV5qQFmCskBMzhYckQ9",
  "key14": "2YKnPPUBDgjFBYm9VEpQaCojeysgzgr8ughUTP8EvjZNDEgp4gXve8ikqjRvnRVXBAZ2Le1x5vMSrmqRb9ZjN63s",
  "key15": "5r54zc7gHQ4NqJM5kvF9tbka7jQXGf4nCXG9xFRVmwqgmFxbQfr3yn8f4ALAqepTRdaKVLDz3U8EYouawFc6Z5rJ",
  "key16": "5AhHsy34gPnNZ2WManHKUAHbfAUoKjZRsj719obRaW1PRg8dmW3LvTcbAH7JMVgPy1T54rMujvbADbtvKT837m2k",
  "key17": "3cPx2ApHdtk5A9y5JZJPke1TCAKuHzhwECk6ce7cqE3CF7Rscp6dzWv4BJ2jUiGPY2NymcJAL8JBYjSZpfwBtFzx",
  "key18": "3nZafVKPYrziU6r1u4wYtHGZ4MG4pSbmLM5bhj69STurG8yNE8u3RANGyQc5ePmU4Yd1om7484N9baHxFU3WoQC4",
  "key19": "5oekx5Fp4o7ADaaceZHHTRETfZc4qKWSjRRLnhZVyJ6X34jyjYRHt6ydbGnPdvL3vqyDDSN4Xrn2VWhTAkzyzesU",
  "key20": "3emviBC2mGrbRkPpZvnhbojFk2P3S2Dp1usdrLkgpn4nVXG1MWtDhvVjz1xHHA8vudBmBS7fkg3prvo32WuQ7Aja",
  "key21": "3hTNLZoo7BBthrDzHB8ER9RgmoE3yVutyZJ1KWgTacW4cybkoBAogEzRCKUpBJkSA8kRTpuwcVnAGQqj9WXWDgBg",
  "key22": "2WeTA6wBLDso25UMbgEsR6vH3yp5oksEcvZ4mFbBsWGM5XQqtU1PATMsutcEGdJvwiZHuBwLHeP3wTZQ8iQW1mdD",
  "key23": "5BTo8VB3sy1QB2iPJ3dhFX1MSbfx2LBFHYDNfTdE3kKYZHd1J9tALdkMTW93gP2DeWp86aynEp7SzasX7rDnmUsZ",
  "key24": "LbxxGqbMXRTyA7Uv9d63Ny6iFZrMX6iFx8MBLWGK7YyuSZXnYnAQmmKPmRuEYDm9ZnGbfg3g9VD4ViCXiQG5Ys1",
  "key25": "4QcdKsE56j713YwJpRtJEhTcrpsqxQVcqmDdP8vNVwsHDBNsoHRiuue5783JHaR1nSnzgZrdHW2xaJjZNgK3vywt",
  "key26": "4jEaScBfXDYeoCrst852AgCaLN5j1Rksu7us2QjSose2G4oryt1sDxQkmCAZBU7TvWFH4nyUojbdj58MQJsrgDha",
  "key27": "5SAWyjAzUjyU5REL4AzcT1dWifdVeNGM9Qjrs44GnvN2yvRy8xdb6taASMEet68fj2oggTgvEG7amcjBPLhfnFs3",
  "key28": "4iPH9wrN3mh61b1sJMrUZuqCau4HrN7TNvj9gS7gdJWZ9qonxfHJ26kVZxi9LXuarUUBZpg7RvySjpVxpGqhrucc",
  "key29": "4nT5jErsMNpBpyVw3CBrjbePjw3dn3wpt4n86M2B3CnLxRmiSzt2D6XQ8vLkecMxiSo41ea49auvYTH5TfY3hxQP",
  "key30": "4UbbJjUL3qwhNNuwibw5GU7Su3csXLao2Eq3k9FxLexAXqRM7FPSG38EvbEfoxxWFCM7LUh4pryMchqJyj7JJLWe",
  "key31": "hdSwkGc7FRSzYk6yf2h36Pw1ihnrwVPXbmpw17Pd29GTu7nTGEw3ztV96ceoXs6UTFGPE8Cvo2c5LeeVq9ruDG6",
  "key32": "31NiWPaLDMzhkJqv5LTYNRFjiWbJaABAtFNU2Y8va3N5w8ZzQk843EBhFZyCDumQFp1K4Yt74VRF8a4TzkkZLGiM"
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
