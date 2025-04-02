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
    "3sU9HALZCRx5JQTjcjDYza9emFTZEwMuLYrWA4wRzfCCFasJYMHFWMUtbugY1W3W79naDW9eZ8NbcvaA8T87WbXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXVBnT6LPg2yue738RhJmbLCYNc6eP5sgZ1tNC7TauWK16PuLYJDABbnrYSaVGJ8o3wjd6EHNJB33WP7ehL3r6k",
  "key1": "23pj6ksMAxAaZ3AT7ZpXNW4Ai6YB16cgvYTCHutwY4BWSYEDh6QBRg6mnvSXKKAu4FcVAjd4QCnc66jZW4AT432P",
  "key2": "5tnvmKw82u3jggwda8WPCFZq5CHwhfZvEjaT3SaWQFuQpeS776w2XTgM6om3pnNQSNFHtrxQw5ZQUVReswN5Yn98",
  "key3": "5wRopDcHVm6Q9U5iro6DqxBj743Dp3KnjiduXJYhNweSiUb9N7jrp3zXeBeEDJcbfWNnZZbbExoSWrJ1Ss3K9MTE",
  "key4": "5nmKW1C4syHxRR3erYmiYswDao5B7mEUAp6C3WB6ccm88bMwx5ft2Gc9QeMaDN42r25LJN35dH8d2J69wp1aeQuu",
  "key5": "y3XBtvEuHNyaigYpTgbqVusjrEFHc2Qp51T9PCHnSMJBdoXpohN5WA5VawxV7o5H1EttdneYAkfK7ytTeHGXkca",
  "key6": "4uY8xWCkJzoHsJuAD6r1f9hoVvqui2xywZUuUAov2qe3cYGEdCuR2eneAbQiu9qbwU6SReChog6rutQqndivC5fD",
  "key7": "3W2RqkXDyXZQgT8wCDHfFhF6WYC1mYeve3xweeiUByNQAfqWBP8pUrPXqfcDzKHT4ThBsULk7gV3iHLsVrC8jLQ1",
  "key8": "5chbtnEVdk4bwTYEwXod6HUCzjm6gYXpdF9tTSLpZw7NhjFMec2bAkMETe1UXcx3gFBa9h7iRvt4BSNJ4PBcBWZf",
  "key9": "56VfGKB5Jdz8b21NCK3ZdyqSjCeTUtMHakz9Grb6ht6UK48KXR35YBG2tK5B1eFQRQguZykEsL8qeu3ZdJbZqSVy",
  "key10": "4AQwWNWjWsCptrepbTpHx72RHAgKfEamD3qiyzFuscjLK4c9Et7XUoGzKJrKGP5QNyf9GGuCXBDZHSAYK9FcCyiy",
  "key11": "62kuChFh2Zes6ZAzTxqc4qoyTPn66kQ7gPWydY4iohskHJ1m7i4zgFfJHSMtaaXmbhGCWtPfUF3HpKtaTxYDMkxQ",
  "key12": "2dhVuoHZCxr4SkgARHBaPjLU8pi2DNHTABGPCgFLYLRvH5CkAS3QgSyrtyvci8GWssL6rQntaHUcxyYzecgwfVoq",
  "key13": "4ZYmVKoEPCXxC43jsmqNAHqfHDa5JGbfvTBmrRiq96tD5VLzNJZ616gyrVgRKaNWGqpBsdqL4HYvhP4n9uUhe4eh",
  "key14": "3PdKkJz2WDfxPhfeoBkes1VLEbvCWWk15n3EyxWNUq6QrHV9ahhWp6TSyXHzkD94k1i6R8QrXVTDyeTQow4d597w",
  "key15": "2Hu84FNHBUAYmAWKoyMLgrpLZpehaSDK93WmHwoKHT81j1Gv78uqq4HYcmGp8VZJjRGqFGzziEiFLfwXefQpnurH",
  "key16": "48U3HrDrU3mBi8q8ytFctXWXbDrELQgZtuoks5MRBztW94i1TcM9pC3kA9cYUTCNbSh98X7nd95w7QEYmyDcR2Fk",
  "key17": "2tabm6zYm6jrHhjZdn9DiVtaNw17vDtjBrV8hkuJpwE9DeqBaneH82SqKatn3AEQtzFT4quoJA6r4PAFhi6u6zGx",
  "key18": "26oJd1d6F8XFGYaMnFkB6HwTuuNMavbwX3tbAGVFLe4UND8qapRE8xxGHxPoUxjFPJjUWghSbwrf1PUXJvdfFWih",
  "key19": "4GU5U5e97ZVR6GghrVsjXwoeLoYNcAAruDJG4ySZCg5YSkSdPqYGjKfzneNvDZw2bPAx2DNkB3739FvZJWyb1GXF",
  "key20": "2VgdMRn77f5xGn6bKcG7s2bUrvSfCDuZx2i9cAau7gZVXktxaZs5cA4bWUwf2u9ShkJdbZY6Ck2rii1R6V5v35T5",
  "key21": "24snHMSCgx5o5yW7y2rdMHu6n9giT46ENY8F38Ht9DRe1TL7csiPrgTzZmezunZj6nKCAJLv1S7trVu8csCzKTWv",
  "key22": "qZjftn4xCM91EzmrVUm9GJzuXRyfFRTXE39yDKnMGUm7qfwxa5jMVxAR2vxyBFxiFa6cPpWJwvbLDxRNP9ME6MN",
  "key23": "hSjrbePR59ncT14wGyZWgWnMwwSBhzQiUr4cjrWrp8jr6EVp4HuAN5qgy2oL26JE7DmnLvaurTUd4wnad2WSuyq",
  "key24": "ohkWUwXWocmHfVBTwvMXNT8egkmvbsTumqzDHfE2YfKuHo3nZeDvN2tves941jfrcwRQpdcmrz2Cdt18Dc6UmFY",
  "key25": "2UC3VE3kk15GXRo6pwKdg4gNZBRgP2Wd2uA4NMJY4MAPS6hWto7MSTj41QTEwraKwwcCUw2vr2g3ULwaEdUJXoky",
  "key26": "xmNhAxx6oLKe9PfPeYQiZNJSbzcNiGokoUtRSbwM7eFnHhfCMP4qLZjkVVE1ZcJ8Djt26kqbz64gyABf1fVZkgK",
  "key27": "3XH4BDCCFyTiGJwUHxXq9czwMsETkTKshg7sXpGf6Qf9kGGhqm4bBrEB6Bj4H68c8KNrbxxs7DLjjUpo17MeQQrX",
  "key28": "61AHyg43FAqZgyK1C2EbeNNWT2eYEXtbZmUF2yrvp3JXpZKgf3bYvvi7DdfJeBy6dute7K8oHL5HTskLmcuXv9cQ",
  "key29": "3rfrQq1oXoSrmDd8oueyYxMsY1nRFUDQXp95sBUp8ihkZZPCTRXaFt6ZW16qKW5trduTzeZufk4qVTddhwyYLbP9",
  "key30": "4JgkEMZF8n7eg4jf85iB1UMGSPaKNgsgh9PnB2V3iAefXxxpWkPECG4n555yPzrjaw1VFpySSGD2WM2nzzvP49mP",
  "key31": "59jnQF6Kmypgx25vy9cdkFZsiDswq6yrBLeR1zN2d4qtm4cFbLhhvKEhURn9xbNPcDdnVcCMnjf4WbEmnGGrFvDN",
  "key32": "MW6FXRCsuJVFJw2FZQQEGzNvBH1zyAhBzXWmkfVVV7G5LJY8eEg53bgysMYfq8Wwq4Y9BbfkkBeyphXwxC7wNYe"
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
