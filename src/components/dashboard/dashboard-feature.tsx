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
    "5HreERmDK32XHvaG87F3ChUeZCHVQw75AE8bojXLv7NrRYNGciaP94B2aEpPXJM4brQD8QSeMjRP2Hsn4wdo6aVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bf38DN876XcpPsKSgCoSHwcDwPysqR6YZ1jaAxMRvMeCiy7oKeS1cG6mQ8C6qFK4fetW1tUz27HuxjMbE6r2pdw",
  "key1": "3vfyWiS1CBSkpH8X8Amhe2FbqbE4GwRAj7AmKRnRAQuf1iKJBAJMz8AY4jDLCaVegjR32eDY36nhewyiRuwFUAEh",
  "key2": "5fkcLB9Gd8fgPdksCesPjyjgMdtGKcPKViK2XTVB4K3E8Z3XCcXcvHgbqXY42ubSFbihgq4TPDeeZdv2gDZihzaj",
  "key3": "KR4xV3rJXiAbh6cZrckaztvp6jZxXM7EBov4nLegAa1uWNMNmFTT4F9MReHwenfSq5riwp5Wf7eR98QXfeT14xx",
  "key4": "3TBRNvAfa4HFemJDAnXTXbMjAr9epjvb9eFbht2HXLbHe7snTiSh6d5eSViCvCsjtRphzLM1LxUArfXW6xqikWYo",
  "key5": "3fRniZLd7QwprTCwscihHRbcjyV24PZ9UouhLeuCm6PcuFLF4hVQEimmf8BRLKQH3Yf2TamjEXqPwxrBkjwEy47J",
  "key6": "3pjhT12hFSiFoY9ygwuYtMic1kgvFZdWhwyBASzqGVF5TbuyDr4gPWWs1xwf9QgKjsEyBMvZ5fbco7x3fMSaVDc1",
  "key7": "5WHXG5Mv9FT1eQhdbiopJFxcCq2FfeYxAbdLtgigvBZ3qdhQkk24c6HMd9Gkwc5ztRVQZEeoke49m8qHQJoYK8mv",
  "key8": "3N35p6UBbZMwxeEgdX18nVh5sCDYtNNPS85CCxVicB1ogKLNxXGWN1NebuinmjfPR2sDgpGbYvN1ict1fCYZpu9v",
  "key9": "bNB5g6n1bYC2JJemnrfRGG3uXtwweMao6MFhg8phj4Nd6fP7bEhH9k1uScXATfCJnFKbbCw2CTE2JNTpa47UEy4",
  "key10": "5E5TVoMozEvW4R8T6AjVMPa37a4Ar1EtXEu8VFwB91HeiMdcEW7n3e6nUcVBFhCmzhuHU1MJgzrJ41SdSAFiHSCM",
  "key11": "3NuaA6bixVUTW2BEHQKJf6bmA5mNokDv2wFncgDJKSTFnPJX71T3J4xsb16YVC1Rr1bLEoHb4Memi2ZV8PPNQAkH",
  "key12": "3PMQHb9awThuPkYQxxZz2WZxEz66CjQCRdQ6XwXKBbT2EnQ5ivhV7BHSP6czL9x7SFa7EreHGBL2srRMsH5ipGks",
  "key13": "3jFZMzvUWCfiYiXxaNwvhwfnLxUxGiAxBQfZ9Z8RfUEQtqHqmDmAesx2emifkCyD9Dg4HEKErNqcJ6iJ7qjDr4vA",
  "key14": "4ReG4NNdiWgAjFdqTFrYA5CsrY6NU3rpf1kxv1KAPwXwhGej1EpAmRiYL7TMaVPF4sdq1HkGRUDxSzbuDLheaE4F",
  "key15": "3xyXM2DHy8oPu9KZKZGxFTDyELJRtrr4BCPuaJZp22iarqpvk43x7VNPparzVMjtuX9bt66sr3fNkcybhpnf73Tm",
  "key16": "3wWibu7hz2JG19SSWqyXpioT8mqqPSsC8CzqQqDF32g6Vi6YD78hK3XX6C6FcD6SJttmgmCnVt3XSFbWyCo28rCv",
  "key17": "5moBSKvm2d35VAzdFEZVNeGngkNAHHGJiKLRKJ7zRhmr1Jw9BT8HJ3UGZGWgEjQKdUg19x81d7GpSL1PLtjd5uRF",
  "key18": "Fx2Q8Sf5QbEzMEFqhJ3FMfYm9zFBU1YRPFyXk8pmj7sXXQDwx7MFJ2pibeMihAKcCky5LoNy9ynLj9gXVPVcLwf",
  "key19": "2eW2pkpKGkjrfRdtRqMZjYEP7N5G1NorkgKpFhzd9B4T8VN8RabKxNGo3w93njotnbhJo2TbkU42Dd3FSBgjAgSe",
  "key20": "2kGuXufWHgBVATqJEWnsNUPepaMG4YWN2ifib7S8F79Fjg17oKpPUgVEjPEsubt17xrxZo6mLusnxwtfUxrMka2M",
  "key21": "3FYfFGEYaWaaQPiYXE7243w16GDeDqhPGEQmwBGen9X3G2j6moyYRqibNf6RWCvTk1R98c8cn8Tc92xGmHHvU4Wf",
  "key22": "2zx6XDJ82mtoc9Qxituq2Ybp7iE2cwEeXmtE9HJvAnaoGKBCfoRFYPJpcq5gbhMBi9zgpTEMqc8MJNCq7LGZPv2N",
  "key23": "3gNSg56abFkdwJbhkPrtLeXALfyPNL2FjwWH7PTd8qM1SDJtFxXQeHnfhb8n8XZmGFqtxk1j5WXFHUUFhBK1pDqY",
  "key24": "tc4NUmuK7cuLWHsjWzqxrNJ8on93AFWuRinffvUimcUvJqb95kSb5t3juxTzzXnNLnBQ2xWV7C1nZ8NPgf5NYKU",
  "key25": "2wHE9ftrj5odeezNGd9jM5Hqtg7S9iFuWiUXtJSFgPYsVw3YpJtkMQLhUbfN89gyLFmbysw6BwPjZ1Gi7RNTbRfe",
  "key26": "3jbKeNftVemyhbq19iYwmcE7GKUmvYC8x66bN5yC9weyTbC7mAWLJJryjaJ5Dp3Y4NHFWunZeBwjxdV3RHW3ziUj",
  "key27": "kSxKjrPyFu7KcZMHkHv8zgpyrv87F8nAsMPQ3pALVcQ7X9yGTxiT8cWgtX894KW5JZ7J25Zcn4ZMc8kAUharjHq",
  "key28": "3Xd7iq16CSAnrmw5UJFBsXn8pNWfpcGjoucV2zifif4rN8RCSFzfn7hn9VY9GVgwRvZjSLvqvkCnQggbWFEvoFXM",
  "key29": "MdzktyGdXauEQLJZpfNd68pzP5GrJKAPWauhXwYV8JFTjZpYtcw4jmcFdtQXc3SMRKw9AsQbcxZWLsb44i4ssKP",
  "key30": "2e8yrvJzjA17CUfgf4MUEgWEZqBH3fxwBQnhi5VoGUwBBL9Cip7DKQrAuh8Q7NGaoSzZLkVUzMySJWRtm7PEjXWN",
  "key31": "AvAkLYiAcETwc1A3h6kGbfjbdBQu5EvxqKn85YssLLB6mHAYBUouv6WoM1j1B5kQjUpJUGV8R181hroa9n6VERa",
  "key32": "34Yz5v1XRbQ7VJwYUBMWfoLmavfFz9rw1jNprvWTm3R41Vuygt1CotDqx78NMdgKLj1PY7M5eW3Cpb8yRsvSBPa5",
  "key33": "5Gg6pMsDMKJXsgiPPfEMgrcTFEKQhhrfyzmAgWDN3ytrBA7iUob1Pqg65WMHdd8QFRAY6Y4Wr4kzAL1Cuckk3Mst",
  "key34": "33HprHFRgWFk46DxnTrdDE1aaeGNo1nytXugmUy3xu4b8mMmwy6SHnZSMZThy8SFK9JB7Y1Tox4yfJcEisW3E1UA",
  "key35": "5WPc4cKLJzCDDMS91zbnTqdnJtnBgLGNd7P1GmP1SmtgzXG9NZnRBuCm2dcyFdvu2S8atmYJ9fQVitExrMk8V9Wo",
  "key36": "iKKJVvpkaVwDe9GVC4Vkkt9ebLxphVN3nG8w4TFKLdrdM3iyQWLPunwM5ApQVUSfLYK2gH6BirZvTcJvLm7YCw5",
  "key37": "4TtMMYkX3XxsE2BLBHBV6pbQsK49wVzQ4qdqF3Ezj6rpjDrS7bJ5Xuszb9RkZ7ukZLP6Pot2w9rt2xaC7SQPBg2F",
  "key38": "Pn85LNZeNHDWGjVghxzxKhsofMnR1nPLmfBBUWxRw1HbkutjTgiKitTrfrYrMu522AkhvuhRALXP2nUnyFtWxqZ",
  "key39": "3r2J8RRRe5Kz2yLPfzMhXhw2fpDoDd5NzsLGjzswcDavd4LD1XbrYox8bFBKpoDsP6kYTW46VWmZDSqTLpCevpAz",
  "key40": "4ymTqXdsF26woC81CpxCs64qvEhsd2Yyz8XHaaw5KHd7wT3jDQKDSDu8MRUG512Ed6XRpWWqfP7zRe88b4BeK2TA",
  "key41": "3SKhV5uhdz7ZjFGnkwhmmuJNd7mAKz8CLLHmwh4KFzaYKeG4dp9z4RFr9wv6D81hiLgWTnpeYkf9EoZ2WA9SvXef",
  "key42": "3csXnb1T3rVLsKamMpPvMxtbaTQ8qjMfG165EMUmiiBq3AgC477jGXMsgUhZJs5vAim3Lj3V6uYH9ovx5sqdmR6o",
  "key43": "5hcZuZtk95VRksavL3VFJyXzjXLqsCT1UBW2NrJcRb3iYnmoVvZqQn8s1nXY8GNpU7S4REcdbE5Hfa74PtnBcZW9",
  "key44": "2dWFYzXSuJwLL4AVCKEDix1qzhCTF8bPnG8BYGMjn9vm2GnvRStRjB7nJwgVpsWQ4kHBKeuaNrH9M5RE7m5QMSNT"
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
