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
    "3VDtC6iFUBVM1wtiQzNeeYk1nC5v11oZTg4Hag5MuiXA9izPtxRGbi4noxmNcb7Zg6bzfR1EtJUZ3xkW9Ek4vwcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbaEVkp2C7sPpqUeVCfmGr2NfqGsy5VNTF7x28CNTcMgx7dobmhJRVB1wR15NSHdag7m3uTnnZCWU6bEuQBcufp",
  "key1": "5VgYnHnik8iPt2DxaBHB3UKMhritmkDWgJJLxNYrU8GUQkyuvRnY36RtUPFFBshyfickBVWG3R1uxTeogDyTeWqi",
  "key2": "nU91vkZicFc8CwrowL67qk6QcLmYaKJHHQpVTh4uRqjjGp3wL7ZrP32EnJquKcFTNd9S5G6W4E7KgPrJD4gNTxX",
  "key3": "5PAPTQTxAm88Ty9jWLcvUKLiU3ZnBbFQmT2wZoxTxqY4piZxHKWUTLzUahpVSWsT2m594gWjg4aX6m6ykoUNibZs",
  "key4": "rHYQFwA8QVWxP3nWeErhPzgGcY7mQJpZAjpoTTm2GKcE3VNat5Ku2P2X3HNCy47wMT5S8DyhpRPWD9kRemEFxP7",
  "key5": "2P8nkPLkXvAxcA9iY1ELfHyhYtGf8pMJ11YXK32NWGfXG4Fz13QgjXySo6tsveJgU4rDx4SivLTqeh3EbCkvR8E4",
  "key6": "xGhfb8jsJ1sZL7inRW3uq9he57sFn8ZrBBkouSsvWcE93EKWifqc25U4wwVrnBcS1LTGxYe3ZD44vhjf941uBNG",
  "key7": "58LHKymnAmFiHYYWhYZrduzn38WwZGaMGxRPdjbtzRPgHVbEvD2jWFAWN5pcnmxfxpMjRTLpVpzM3vedwcPvUfnh",
  "key8": "4N2CaT77yAvhNDRpdzN7E5RDAzFJod3FFhrCDTriR4QC9QBfgQ9b1HEGPN4FGcLN7Qt4rRYpgXb94hiPoZwn9VP4",
  "key9": "4efq5oaBA9qo2RhAW6rE7LVdzKo3uigoBHXFQCAVHKYhBMUSigQYzhwawSaYnrdqGzVYphXgQtQLF9NULULP1xGK",
  "key10": "2Z5PrJ9qavroKHYLY7L7of6vjmzVdsDEAUkr5bRn6qHZv7dEjLB1CHwKeTHkwRChocfzuUhsbdHZjueHeMzVevfW",
  "key11": "sr8r4ij8FrZ9LnS969QsQ9eZD62SZW4Katu7PgRWyGyecizoVuFWo2YszLrFHRy1DN4vrUDB5bwsHEVhyxHckRV",
  "key12": "2SqBR4jPKH41M7zSNn41qXH92JJYBvTMNELX8Z7LwDGbdT2E9Hg16HehYBdcLrUwEMjtF69U6BV8jM91jV9y1Wxz",
  "key13": "gdMNrid7rgandDUntbbhCLSGWUrpVGswCzZs7ykSjSCEpMojeqUCUaciM23u7v1ZFd2ocifQbsKuFaZwZcpF1Q1",
  "key14": "3GQjir8546TaHCe4pS1eCQYzN9dFTBZQGU5hW4UMv3YoXSQcx4PejmDgMWDpT8otYyAcj1aPFCQsZUnBm4ZZrcKX",
  "key15": "5xPwPVLnf1us6QgxBcxmqNybKLwpC2UzEsEcaaGhbGYrZTxk1z6JjmZAErcHBYiqWAqnfBpkFpJG2CLgCviuvtLk",
  "key16": "5qmCceW9agqnv4BfB9gDLdzjNw4vhEucFfJcyXPsvJkYVRnXxbv4aKXaCH7smLws9e3APq5TDPPwitqbp49mbrYH",
  "key17": "5utVM3VTvgd9zfYU2yYF6rLdSF8eue1UKiqu2cNHQsV5SavNDVaTsoTgs76Pfj8JxCDMm4ubHw9XkJVs9y459uwC",
  "key18": "2wcxWZ4qBTuJGTDV3Ujj3oy5vDjgSSxbVbkGKuMtJRR5BXPHQUaQED5o2mq9rfvL9224mj42L16VMhifFysKnZUk",
  "key19": "5E1vcTmh9kGvJnPGubMiAC3WgFaJXytZ8FGYaT4QcEj9N75NMCiaBDqesHhKqeHb9hAdXgiTByiHw4g1tPtQGjXj",
  "key20": "2J5bLkqweeNyBCY2Wphq187QyZz22ZvZEtK2j2E8tfrnSzjKyrn3ddkhiAmia9tKSKnuySa9LXhsbRjA1gVhpnMh",
  "key21": "4GckBjh7k7PDqvjVKLF58XUV5xUwqS4Kg3mBiJS3CKnvsD1QD18ubo24hWXyTZ19Dn8pQF5q9GyuCqeheGcwqraQ",
  "key22": "5c6nMCPdPSQq5Mqq3fZYcgwFKsHMQTHDaYEEFfSJfyQNh9iDvSfdHnSKSpsZPY9yQXrrXPRsW9roWANGXr9nkpGg",
  "key23": "VQ7xssmnET6g4N5Esq8gj5hCh4Sc6ravtGq1Qb1zGMAU9viUuj14de2zLkjfVksdzrG4vUdr8NtZWA9D9FuK1e8",
  "key24": "27e57zXfiTYKXdcrRrdsWAHnfcAPkjyaToCqYCubarEBAGokKdEwKBcMDE5NuakZAMaTo5Z2dCojQRBQS2yMjBVs",
  "key25": "4jnopgrkVeGvW4BQkCrof1MV7YurTSb6SjHfpxj6avC7KPbkz4AZZQ1Ch5RELyJ9BPQzXPtgHBR7jWVpcQxNAywd",
  "key26": "2SYGFHU9FK7rvwodxLhWHcs88AG4n5H1KRcPYb1TFL2WTFWgh77HXZUgutAf9jEEXqpa8TpTtaHMfTyddHnwC62o",
  "key27": "2YhUVx37ttLVbu9U8cyBuJrFymQYAc8iZVUC2GrFPuu68g5zUiAFnnUVPCNK2gAMEb6ddsUQFTtFLpFagBAU91f2",
  "key28": "4gNarb7ipZQDdqazkJEnPrP1Y5YrSbcT53NAJXdBQPbEicPYxf68AK5ZrXp33W2WDkbSZjU3wapeEVPV8VGpH1v9",
  "key29": "2gL7ucce1XgXpw4dFf87CPbVkUcYNW8jET7PqZKzHinineSoTaciYLiYGj6UUEaTZk5t9Rn2ZtjPFsLersXZtHSW",
  "key30": "5NBaKZdzWza9zErZL5QcbtcnptRvoiKMgMiSQx6yUxoVVfnUBfrAZnadKpk9KvF2SvghsPTFy4z8J1tA2AX4hQjG",
  "key31": "373Q4AkPUvcWhsRzK2Pzz3YAVMuqsMgFz7gdwTNpi96PkJVomPkbDd4ngg42kY1qrGjtpxroWzi983sM3puYoway",
  "key32": "3CsaRzQXcevUTDswZu7EsoBTB8cjewkUDV47j6XaWbMYpBch1Y5CzjTGxUi6vTpDxWdcZ6iqegq4LJq1oeLQyptP",
  "key33": "vffnVF3ps8UReJWF16isLejqp3Xigg3CfDdxAwuhXBRfsBP5uTFsryTpaU9uPU7vYK9F9H28GqJLM9dzpua5UmW",
  "key34": "3XSd6wkZnk1iE8yok3AugrBy4ZcadTjnZkDMgRKFtu1AQ2aNb1xt66epK3cxY9iEfWF1LM9n5VJDLHuTN8YYLTDQ",
  "key35": "N1iZZQGzhY8CoqBtwiDebCDnhz2kiU4xaJvte8TxPZm9yaVZQdf9P7nbCdXjZ1NvAAtKbgdb3MJ7H28wrCBEcgV",
  "key36": "223ER35u8fouQtpfssZvTyB7WXpBwdjG7yDzVvc2LeJxuVBavfzbVMGkGU2DCR254NUFqvjK8Ljxk8QcXBD4swzy",
  "key37": "2PUQUnCPYMxGm1txuVacHybwLqMZCMsvmGtFudXYAeRTGyQEA3tSoxDsWqYPYGSWEDHdWcscgXGHhge8ntaZLeGy",
  "key38": "2S4vPNp7L6SWg3asC98WHnr6yXGuHDDRWVwLuQ1DWMr6xXaMGgVMuC9t3et8kd398y5avdichg4qdrom92Hs9akv",
  "key39": "8zkDvN28knUfUUy4YbJE4bUJPVhPxXKya4KBsAJWJzY22LPrHKK5YhTkQktLhfKKKXcmDW817B9vBKQZvgukwYZ",
  "key40": "4Amf38hgAqCwgHJngTsKod38ucMDocrTyTLNW4WKdn8Afas1jZYp9zCrXCibkNSSRvXFp3bWNmFt8XdefCgiXa8U",
  "key41": "2tUwpPhd5BC5r6aGyUAJjwLneoN9tGrBVQ1pKptE3gWhNkmFv7WYR5Jkt9e8wSMbzUqc36PakkU7Xew55tF3xCRG",
  "key42": "66fTJGaUSQtm5c7kbz3gLrabtHyidwq5fzTKGmgETmoMRLZk6Bwrw8h9PgY5cpmH2ffC6yX6fAKxwiabYRSpTEw2",
  "key43": "4yLn3xzkmGxpBkWtTsJuJWdbpmzGECBTZ1CiXThdzqFs7iQwRdw3ZWx5yKopHBNMZ39pLyN8weP1Gw6TZK2oEqtE",
  "key44": "5PpoDivUexr6b57j3YvJbWDhAuNW5X5MRdCEMhMkktoRh6JNaa2Jdmmc6YbPCAmukUH9Ltyg8wirrt5szthj3Xwo",
  "key45": "2yMktiUkFkVzRiEtc5D5xrmTSGCaqchF1BaWyfPYuuryWrXTwH9ZwUB9MQ1R2yb7qyav29dTAv63uLKq3GVKtjgb",
  "key46": "29NZgvCCRYTZw74EdSheK35uYxnuMEy6eANdrirrUxvbjf3oyFFhWuEBsRBeihv8N2q1RaatEWe2LGah3Dgmry3p",
  "key47": "5SDLbdn3K3hhm5KtsktArTGAWaHSNaL8wS64ByWkitqTjLgsU85GGeLY4RpkrLcVNjxUTwjsCMRXB3cy2C9N5qSN",
  "key48": "EeC3kb5KfKyBUwvauwGkeQJ7gzQcjMo2cKZ6sVZMxTJqfEeYEi2S2EBZ3ucehShfdq8p3eT7TDNXBdDzGJaMUfc",
  "key49": "38m7WKicEV8aDWYuijDZbQQjydVE6tNJZ3PGrrDxaXwyEhNynsVuTsbQVDP4w83s4XrdMbuzmJKHdpyBXoDekyNU"
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
