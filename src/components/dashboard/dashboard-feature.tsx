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
    "1DhRgV3ArfQveHyk53dNZPRiYPESm6kc8WJbgLhDMQQd63cT5zpVHZcFnw3rBeRYM2izF4DsBtjrr5xnNLe8ExK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBToVkDR9rNqUzCBJAK35S7BYV8cBgJjBexLmC9nNbKK5yUts9hEwRbMHWYeXd9cVvyWjXvGFQYBcVjR45UxtAF",
  "key1": "211giXLKE7nDemNNeweRvfQhoU67yLo1mZYL2WxWEw7HGAxkAvAPPoWqFLacQrfcSY3YoSxSB1qDKWV9Rqjkb5e7",
  "key2": "4eUoDSpTRuvv6YPGTpMn1wh1P6LyqzrneLASeS5LkbvyS5EmCbeyuzLzcKb8xVvdzJ5eBd5xmG66FYjUpZwisXrN",
  "key3": "4Gwk9T6BWj25UuJdXmHdLEfATfkDNYSg8gHTMxk7WdYaRwEsA5foucWMjTXP4pREGh5HGFsNDkiFwhiLKdMxfyDP",
  "key4": "3sTUAGDs2vVjtsDaXTbbYoC2GWa6HHQa6AS5r6UbqGBWyBGu7XK7yzia9rxaESPRG5oX3C4tBSgDWsF3dpERxh53",
  "key5": "3rvv2k9uca9ztphxcrKRG5JKZtcRwMGqyUq5xNxVM2MUG168jkksnWvwiZByHWTWzANTbGvoTgX4p6uYGDaAxzhy",
  "key6": "3Nh8nYV5qzLBe9NHaUHq7tBV6a4wDxXrgnhCYTdj8TuyLEMc3q76xEux1FT3RSkFp87Pz4dmim7nh5dPBZLwH2j4",
  "key7": "3zJcYVRQfGgn3hdZAycoANVsfLCaRjZeB32V4rBK813q895unisUYgERnJWpUEWwbdjNDfDUS4bNyb3sZURxvZuz",
  "key8": "564YtCP2dum48Qev4bpLbDmbo5CmFhv9NcfNoQwMTJQYN1UkGaSGqZpxdYzN5BAcNx9D7rdKjonM1oyqfRLCZt2m",
  "key9": "4sUminGw7KXu1wg3Dw32tQTNMMV5G9rdBV8kcDS3ABH9GW9kZKon7P6jmVbvD2dRzTGk5NYqJp7K7wKWstduK4kJ",
  "key10": "5VoMrT1q9L5h9aQL2tPc1AUQWYSdGuFBzmMgFAokZLwaDuxApye7whzhb7UPJwnDo4PQXEUVu1hVJ7TcXWpJcnCY",
  "key11": "tKescHANF9vPhZoD3aDmvc4ij9WjMJ4UxMYxjxYESCRu9o76VJ8Zx7EnchFvBw1cpyC3vLKLdJ3zKFp98XNF1gw",
  "key12": "trGGodTsx2AJodTrtcKx52Z6dn8G454Tx28Ks85BnNr9qwmh8smkZEr8fYNBvx7PP54qkFMtoSQFWmjRmpRyx6J",
  "key13": "2FSy8q1L1Yp3uFEQjgjaXV1XYpKH9hJypTzF3FVvvJ6RkHJCXTNLctKf92iBhp2gkFkbYzqbz3sWuG7hsmhXCJYA",
  "key14": "28pA2n4HVEjxkbd4pFKKvG3yLKuEGisZhYkfavavSZWpK3R2KMzyrBXgyoBmDViE5WFVttbogtaXMEVTNZ7ppyqS",
  "key15": "2voAK2g8ZqQu3ZHa8yiA7GXLQzxkiDT1d6EkRp5UfmHpM1afp46LLDFVBUTPqa8cEZvm5o2Jqdr1Ab4fCXvHnWi6",
  "key16": "6uoigMXUMiiYs9sCoE7KR8F7fNhe9hhRrvuung1jdWbu7ThYtLnfjDpHb3fFgwk4d3TwcxXXqFHc3AY2V2Abhjk",
  "key17": "56WHJN4iDWF62q6H3e1ai8P8ZGT58qPrDMR4eeiNRzchRxS6yfHgmMedJAJBKodGxTQqBGuzMVYJJReS54xAU4UZ",
  "key18": "3QktBkWdzmWpSdwmYa1G8ibjjmP1jZ6TudwdvzpAwH1bZDde8R7dXu5D1Vz6NHCv48mdNHpPwgPT2uWzHQBwArmP",
  "key19": "2r6UsrHQSwZSt34uHUFJVZvEeqW11Ce7fk2PL9i3aw4WGrczXTqeU8DScmKxTFwWr2BZApq9RNHASXz5fipTzsfA",
  "key20": "4jobctErU6LkJgtz2ZrG82LYU5GoF473ypGVunUaBBAgdPBim3edo8yShpzHgs9oREQ1kkJHXvjJhFxprygFSQzN",
  "key21": "DqKEcHoTdfuTEKS66afLznSw2g7Cd46qWkhHCy7E52QFEC64xjNjX3ND8rpmKKzVQvdcriJdcCv8wU3onGLU9Ck",
  "key22": "3G1q6XiFeeTHbW9UboRLRSLsmk5BC9LkWq4pbVpivWdvTHwGfTXApm98aCi5D3dyzKFJ1WJbypC4V15s2yN8Es1W",
  "key23": "4GHWydyNkoxYJaRYvrNUq3hTWcc5kLs1riYgYMpyjRK39fZEbn38BvD6YtcLvyLQs5NjbzsrV5TW8n4xaS86SF62",
  "key24": "25Dbs4wuGzciUgx99mkZvNyCzuDEcvMux8mfZx1bRTnNsuY5UP61zKmxbrt5BgLUuoHYQewfL3yzjkCAyKcUtnpP",
  "key25": "3pJGXLfceb93SGZ4fRq6HnJohk3fTPWx5YjcqSh1pG7t6M7EPZirYihKqmcK8R8WDCMugvSarWGBNHK3uHeDEaJW",
  "key26": "4YZrKTNmcPWssUgSvEJfmd2dkfeusnHRA7MD61xYDHPM6VFhy9cZ2CVEo2wW5QfW1Zd7tPdfcbHHrfApLWApC8qx",
  "key27": "4qMiFAecHo9qrDDMLyiophuceZ14fsFcxdbxdhUDaQVsdtueezp6mninXaADX2gxhdQkDXHGr4eA2uGV8g3fDoeh",
  "key28": "2Xdc6Nd5popV9kAJMDgR7KAwoewCHawRN3BrYb1NbtS6GLEVdhboj4zPjzorhSnsVuHpE4UbYHpppYpKaTbLAaQG",
  "key29": "4t7hbrFpQ5pEeVuH3xhKWeFRVbqYY26KPSSThyamNaeDWcyKPY34URX4APULJfZJA6Boqc4JCgdcAtt6cMuSHG7x",
  "key30": "4aj2yDNcFatSXJgbg3w767B1eRXpxvU7ogsvFkFSmYtBBgf2jhDS42WthCzD7X62YLkG9iASaD7of5jzTiYcsnPL",
  "key31": "wGxSTXigmkG57xFAEz9KwXGZxWv1Ls6tihhDESyTr1TN1h4YStUFBR5m3XTjNFY4mqi2LZrhQkxHnkG3ifF4CQp",
  "key32": "YSvrzZbMdzQxKKAKatmH3MtSuy99ZSM6uX2cFKA2WPi9L6zRzM3VgzoLj1Lwwqwx1y1VwB8m82iEwGcCzRF9dJA"
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
