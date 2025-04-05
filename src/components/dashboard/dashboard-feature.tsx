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
    "2QxmuZBZ7uR2pPAYq1y4AvgxknSoxL5AZRcpHrWvtNfwuRHWavCXz3NoUZBWmAG9SqVHgBdhXWsbwgPtfxT8qsfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nfEwMJpz1fXy6TKnQiMEf2R96VZGH5DB275d7jhi6NFjR86ZDhGTcbSPTjY9uxH2HGp9hesZ75LXiMwym8C1iiM",
  "key1": "2cHmtCpUiDEM6gACpSYmfqVP914VwCd7kLinxewGHmQyLWpkmQiagy1QXfoRVNfxaNsQ5D4jVSNfmsUUNt3ZGhn4",
  "key2": "2bP5pJqrvixTMP69oUbCQz8ny88QsrifHVYcTzp5tJdvF4sZc3KqSKSWSuDzW1fEz4L9QS2pqNJGcoUsVeDAVX9g",
  "key3": "3Knze9zBq4uCm46zzZWouJDHTHZpQBgfKHi8BtpwiJprJh2caLEpCZ844tgsvMra5vEjxQ8VkLFpMW8h5Tvh5HEb",
  "key4": "5QqjRmvXWXEajf2vcDQcgBUrjhQ9h6QCwVZiFWC8YXPDiEhU2jdqGYY9aSHAaf3dDoyUVjUcmgVCcfxXT9ofzsTg",
  "key5": "2fumh1FGGayHfDtnbBVP5DwYwhWML4Jyh7rwUypFeQ5EnoxbExbCT6ShzsEdnTXsdtwkapDWainRNHNm3e7wT7M3",
  "key6": "5ksCoqiDq4EQn2HeBPB5eTQh2t7V8vNgaJZVfqoRPRAWvmL1XW3bqbTuwDgkxkyvVVQaYkM3jQ6CrJFqG9W8WxMr",
  "key7": "4ybfpRKrz8k2wpxQR7L8daMsR2TigjHyDLKjQwk58Jqgns72BhodZX29Q73EsgUS1WUBTWYwW7nSbhgoLtUcg9Ak",
  "key8": "3EMovqGnwKJmvmvMqueJ5sysNHbHVs3f31qSbRx6YLQqPp6pVqGKyLjjEhxqtFp4sb3uSwLZkrfDGxk6YjGkELeZ",
  "key9": "5wDNN76PnHjjo61Nv2twKTAqBysz63J6LZpUx5tmK7rjRJ4RgTBAoE13tDsWJrkFQfSd9iZLkHecfmzAfWNhbwzV",
  "key10": "5EG7UjNJiZkyGeHSVvsTV5D2Gb9AVdR2TVPJkpQ1Mct88RtyJ6JeVNX8WgoBhCj9ddKjcz2nisbGM6bdTTS75JzU",
  "key11": "3UeX3pYxfFig5y9BA46nqPySHEs4G1VZKLwnv1J23Kooa4haz2SaevH4iH8kHBDEKrcwxJPqmTPcpusn9YgoFdcF",
  "key12": "28zrTF8Whco7fDG75PSfnxLjTviNJrPMpGiYHiDACGaVkXoakZD7L6bRGQxzTRBWh7f6Ash6RPLQkRGeaVB5Ttf8",
  "key13": "3sJH29aAppPeEQBao9stvaHvPU2xvW5AX6CVABu5LVDCRuopte8SB6DMQ6P3AVvF5JBC8jpTiA4VgJcbYM3uc4Kp",
  "key14": "3Y3RXV5Wh9zopgop6rDeAJhnAcJdM77E77Gr3ktj99YqEevPcZGyR5vAb8Tct9n1vehPc1GNahVn77LiTnhkzYM6",
  "key15": "4W3sBXVziKURsAJMTW7usxLVtvgDVK9XV6LNbLX1ML4MFMcKed3Gkx567ogSF8ZPgyVwd2KkxXoyGzJUkLPt57of",
  "key16": "4xCguY4HUs1CFNsrfNvPmbUigAGco41rQ2X15qFjQkVhWH67RSG9gSvWdVRZvHqJB6kkQjTzfFfGqQQgbpocHuSN",
  "key17": "2ZrnEbaTVYGtmcmRqYVacUgNegBmLXCKyu8z9cnsRHBPCg14qJZLVA9Pow9gsL3rK8JU1pdiJ8g3VXfUixbfFMnT",
  "key18": "3B3Ft31dTArm2rKXmeEuHd6RJEeWTRsnj2f2qXwJBDiKoADZNPhyEmcvC5kHTW2e3dfWKp3FVx6hYpGBYSpp9C4U",
  "key19": "2GYan4gq7R9TMJGs2GRbRUUXs1JJ7jDohoyjsYxVs8XdRFXtxn1poMbaFxoJh1k3q6zXxh8YKwtU3YUUjkHGCmbQ",
  "key20": "6nCSKJNVAdgwAudgh6chGLCCeYKfKhRkPd1874dGh3QTnh9coLcXv4cC9tFWbU6bZ2GXnhdUnrFmwobgYN5LHUd",
  "key21": "5fL95vyrYrx88yZ7r4p5KwkjKxLGmNi1JkPUMDBdGy4Kx93xY72fTFcrpn3RcEsdeoxqxv9ysgbCFMLnsBeNskQ3",
  "key22": "5doDRhRRzHpZNZ88xEx8uSyCF7Sy7RuECjCzMqydCPRQmtULapxKeGtXUZASxMMVmCb37Lm4cKGvnkyAbzizDgbw",
  "key23": "Ssm4Q7hssd2hTPyXAeYcvu7wDmANFZaJFK5zzZqh5KByRWftbB72aGVzo8L9WaPqEcHCFboD5wskAoFCLoR2Z2H",
  "key24": "3ZAuD5SKreuqCerV11MUa9jjPTbMLkcfPg7WddhJZKdkG1DWr7ThwrbnCBc98zCsqXpstqaRyyB1A5P9G9XsDiQC",
  "key25": "5MXnnDaMLNeuJ2iPtSEY6CcxmuEbKeMmJBjLQ9Bwbro2xkTLrTxY3nQiUtBRkv64fyhLZNBQjMNrodnuKxZyhPLy",
  "key26": "2UejNgQBqQy8v9RRB8QT82CQQFYRLm4NXj4P61bkCkLRQLzssizYcnFu9nW2Y3pkzWEWsGAPPsyxX18N7mxvkVwj",
  "key27": "3kQvF5X6ZwU1pvNeUbQSWfDWejFooK9PE2BwEZKVgNjCjXhw4zxkdAHKRPUraqPNUiGzPe5zoxd5EQo53azsxTFu",
  "key28": "2TtLLKokXgdwEwA2hFZnyYN4fhM4gnhwt5JBwxm2iEfPCFc6qn28bv2g5dKsNem7haTT88cJgWBF7z6ExqptdFZj",
  "key29": "58iUgRZiNGmxoTBtnU6P66upGeiLfts5a3gMmiAKned9zJ1w21U5Yn3FG5nF5hgdUZNp2JhT7iZgH4iVBGNFJGM4",
  "key30": "2vQFo71JEk6NDC5EaJvS6MWsderJRe4sLBKA149wsqDQyXQQ1EnnCrDpjzgCJJrWEUAtcijm7Wa6BNb3c72C1kNV",
  "key31": "3N2ESGA1MNuVokNFBEfvVrhWc2FwdneF1EcskxDTGUASQ8eU754TLvDZoSU2Dr5FuRaWrcR7YiBG5jWDmEZXbCeb",
  "key32": "y4jrHvu9XU27CQ532ehjRBNMk3dDmXC2spyQH5u75Pm6YRtcAqQd8gviwmHZhYmazyTDZunufkrwF8vhoPererN",
  "key33": "4onr4iDCBuDYuSPK46Yb1bYoGMEWgzJWC8h2JPVg6qskndZpS32A1KtjJEkMWUNHRhcKWHmTadty5wGDdoN29bmE",
  "key34": "4zFg9gfy1QyNdZeR9xFVhpqNGDv1bEaAF3yZCYTABd3Svw9sviMshWTw4dEpKSHpVmhiVxN9XJwCThZfL9kenNX9",
  "key35": "2x9Zy78yZNSfMc9yNs7JdWP1yGpahDzjm2gmxAm8B5oSChJAmaWUu5fvHgLsKya5KETdiFffoF91ZRZVm9mYb75p",
  "key36": "3HT2djxJ4AUvhZHC6p8fwQMudpvzmcMBfZtr6JwBGrz856xsFKyi1U1w26tWYNhbdDtxV9ZgyxCppWGHEyutQAhE",
  "key37": "5fhSvDTiRfngLqrshRKrFTdtFTpUWVRzxWX4AoArr9s5W9xyLXD515Hc4JDAvAFdhUhc8jSUhVB27BUaKTFhPsj8",
  "key38": "3mzPJAVS1LGovfFH1WDN2v6M1TCFzyuKyhtK4jo2U6G5abMECNJg9VpncnLwGB2DFrnKjzGZuZtcFfcagCEfsLBb",
  "key39": "uczKgmnPrVDn7t5gFEyC6aGUFYUQcLKvuEAZgPYWfCwrqWAZ7kGc8HVKSHKZD34JmXzbechpWdnzN4VaXeE5DrN",
  "key40": "5Wq6uk2WKHxyH21ykqAarcdKmYQd5LjSpschbhKTqRHJsE8izDJ9JWB924q7gnmZiLBgGvudiLycVo2U9UBPMFVf",
  "key41": "43sA5XPCrGXwavUVPVBTFEL7RsFrporv8dNZmn998kvE8UTStcbhR9eV7eRu8qst4pV9UA9CVGftV1opLba496Gx",
  "key42": "27reVwCVs77CgX5RqWE6BNw4QX11PYz9vpzsg6V4GGy3YW3XS8ij5FJAJZBzc58RFqsupkM3aLi2NFzSqgL5n6T3",
  "key43": "2k8Yw8S6bfSweVom6TgsMbmMwmDaypNhqYNz6BrDsuE3cW5MVEji9TMrpctFE8qhuhiM6NQbG49AWtCJUBi4uG3W",
  "key44": "21DYxg4dFPVEnVAZK35CyCdQukhp2ozchNw19iqKn6T3DfgYpZu448zQVUk6cVpZFV2GqcEi63UNpGZJUAfMySQE"
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
