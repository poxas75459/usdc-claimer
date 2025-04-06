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
    "bBnSm1bBFQBteKM6T2GfQAQpqY2H3YCMgZhPyuqvmN62RuQtxnaQ6bpkkkt49SkdHz72CAGAGPWZ8De9xhaNdW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5dUDGob5FZDBZmTYoixCbvT11t63QiZhMMaxFnAKQAgai2zgS3vAay5GWsTkoWfhyB44TSYk1KnZypCiCQmTPC",
  "key1": "4jTpQRvcKNUEcbq2pA4E9GcmWJT7vRDKM221AUW3bkBf4rXMwWeSf8kXm9tcUqpSqmR5Fk3MdPoVY2hjGafmKLoo",
  "key2": "FGxHrNmrd3EQA3ZzCit2A8G21KCvKZC5WmSYBLB32CzWPF1udkuuWyeXMA1wNVzfdt4GMGQdCqDKfCzXgUETyno",
  "key3": "2iauXsom2VEdowR1oPAyVhLCZs9XQs1bpY4naDVLeB2ckqupYGNG6bgtEHCo2La8XvKyZrs6vi95x3iaZFkf4THa",
  "key4": "2GprpsW2Egwv5VfVBzvAxQfH6oL5GYEGomDy3HFt2CaJKTXG2tMqcYZuHayaH7ELSxwXPuZ33BrvCTWGWAUsKZ5u",
  "key5": "623CAZadfAnHbK3SH835nRZnnTs9djMAoRC6bj54KazgkL96CrbVRDthj7rbr2tg8qm3C1qDTj2L2vytfLCrgtVz",
  "key6": "5C3CLZY9VqVfF2GJUFzCLHqFDe5Jd8u4AQWiZfn39Jpg1tcXo55ZDiJWY4LasmbHqm9GDkUSbvL8h6QnYPCcnKSm",
  "key7": "3JKo7n4nxkpAWXh3y5D9Yi72B9RzRrvSFoyoBFnug9sMYosxFZa73riDhHmyfKHDuBhbdCM8ZNvbjcXC1duPFarb",
  "key8": "4ph3aVxbdV2zsBVtxS22qR2mVsJQeYtaV9Dn1mTfSbmC4SDwAk7oFeP6pMm8pPcqc2yDKwfdn5wpWqKLpSZi998j",
  "key9": "iCSxheNrQ3zWTCmUnkqoDTxX21EvTAm1P4aiN5BfJyZCwpgTKAAHxWuMwCgxZMbB7emwwVZFsCKcB8kSLL59usJ",
  "key10": "59K7hvoERyabBW28bvW9fUg3zMyXR8efa7RWen2YCSdcLTEnsGZMKorhPoSqeAgP9DcBjQeSKnV8Dn7CiRA8zaZA",
  "key11": "5LN4wkCg3ZiTgSb2Rp1PrRfFAAxLV3CF4xQGLfXUqsziG5gVjX5aVbFJ3Z6XcXpef7vGWE4DsSM3gmqD5Wx49Hha",
  "key12": "y5THZxRCUg5HsGK2o2bkynynaEy8vsRamK9kVm3bAy6ZXEuc9pUokoYCeKUd25NiaAMESDB5aKjn8D44XN9sCdQ",
  "key13": "5SJvhZQekfc8GC7R7dH3m1yyMnP1V5gEC1PWwo2KxxLWoUnKRZWy1Z93zKmdq5XVgh1URzY38GaXMvjgPW4U1rhZ",
  "key14": "2B537VXFQrBni83HM6qJK5neUmfdbEE3UEH5eHjXSfuV1ZvUcqj9DxL2UoECFsQtRPn1finFDsHQ1KiQNkcJHDSh",
  "key15": "5qEceR9fGUy2EvKWM128zxnNeuK6MMEk4a6MiH2u5nNAmtSJkeCNe31MK4ykaz5fMsYS8oxZQi6Uvi4EgEsSgghh",
  "key16": "32mEJAp7n3Mrzj4HQqXPYQFH4yTtXz3qRdXfxgxa2ikwifvATEJfWwurfYSrsqvBAd82LuYZHb7jhaZqQzq7NYAj",
  "key17": "3V88SfPw72fBCwrQehPBKRMR7epyAn5eZpnhmawhvpFN6G6JCPxe1Wvc6fiynmRFSm1kRgGgbxCh5EfreoVUe8kw",
  "key18": "4CWATXTHKduaA6ngFYZAqAQYN9eMWDBoTKtLiynCiDjXb3VrWjfhDmQzajF8zjvf2vBKQKuDKA7yN1eCZzsAQvz1",
  "key19": "5aGSivgBHPfCHHmyNneQkNjTcyaWwPYwxBn4BxgiopoXuyJJqeQiZZHQbyU7LFhoCW8Ranyr1TVYs3tr2mW5vXPC",
  "key20": "45YcQQEmzmggPyisrPfVK67LSK1jvJeDHLYgC4sDQwPxCpzeoZj2NLA8kFwDiz4gozjDQYsCjgiDu5yHSk7ix81L",
  "key21": "5HTqBSo33ZPnV6mNQuTmjJ1dxJMcDGEqsKio8AHV1GkW4sLEUhqAHUJZQNf7Wgk6oVzAjv2yWhSCWDvTK2F7BPWD",
  "key22": "21nhbviyLjtWxvki2CKhTM4YhKYiF4vo79tszubrm4mDUxkNrdNM4UUFn3vezbyYRNsCNgmnosBddv2crjtNeFiY",
  "key23": "5mEjoA4tVEffbNotRPa154ytkn9EXntqmiYxcTfufFe9tGXHy2bFDixwUgqALS6bDVuQzvbzqYCfq75xHFmiWxRj",
  "key24": "5mah1PUsn2zv9aq8L9wGbXHawT56hm1AFMUHK6nnt2YXP7H299hcjTmxjLXBqzYESFoWKn9742x4zwDAsDUKMNi8",
  "key25": "22Yh2eMQfPptTwaNfkTGaZjRMfeBtFPC1zNNAsb3J4DxrMQjHkdAHKZzMbrgqeDZEW46GXqG5ZLQLDoC7AwS97qi",
  "key26": "2o4VYNSWcXsp81GSvqpD3eneBwNGwY1tydXjBptmDYSfiYzWBEQze6RiJEUEYcKUFNV8sh1vLWD2aqUuX6tYLGFA",
  "key27": "4M3af5om2GM17qHm8ApAVzXHAXEWuNWxeZHVaMLDpQF58R56JK87v6q56qjGfutPpdzzogZDXeaDx9sZnkvXrC48",
  "key28": "4foVnuFBMGnUrufo8525uC3VLKXnWeSAR1M33F5KisqqivmUgqXF2BCdSqjo5WbuRnKVPpUzrgga1kkZ5QWVCCwg",
  "key29": "5AVPzk68WWc4Z9pLhL82CqtYHu388Bc4y1vi64mD4UHD7k4KWyTh5KyVGgy2L76Bdv1YTEhR8MRmRaV96YMA8qpc",
  "key30": "2bjKxG1SeyjRdNeNksKUm4fZcde6xeRSzEkAJnVduwpGeUpLyRM3tptFZpbWzRwg5Pj2T2Fa1E9aNYkortEq8F57",
  "key31": "4PapKTAKER1WCceG84CepRg2unW8mJ8bp2Qtt5PwZrHXXbk5zz3aFA2vPJHCdvdBpQtNuH5AvTdE3xSCShNFGV43",
  "key32": "5X9tQ9PRSG36zNGeDYwTTXrBYWqKgHYwJSvhWPyfBS2M2ZRyuS4v2xJag3srkMxdDC2gz86LgLuH379NyWgp81te",
  "key33": "3oF1Yp8pViM1zmf6zjnqUrpg8AXjqQYzrK4pRjaaJogZVHKNXmRyMPRgRFNfS5UscrwEiFiWpE1VTm55mYLAMuJ5",
  "key34": "3gSwkBu3QRvcLEhZ7LdJ9jC9PiPDgC435YktEoZqy5Q1jTwtx7hxeBJGSQsoQ1Nf3iyQapV35h2qHdoeshzWVAr4",
  "key35": "2M9HTwNjuEX2jpPqXPLfodtPHa6RV4waPfKKLNcLtJgLAK6LuZdoud7A6TfyKmbtvsEaQUTWXMVPZemuZHuB73ko",
  "key36": "wzNBr7qGL5K915XogZ7X8XMhVLWSyZHfitNqKntrjKXtgfVE4GfNPXimtpCz7KRMFAv5hVhEokvPWbaua9itWaT",
  "key37": "26mvg3Kaq26dGnu4cQEmgTpndHCsJU7hDNZaDyfLHNxrh3fFcPNfTCnrA74P7WeAu48hxqHvvQj4n6t3taxw2DAT",
  "key38": "tMks7Q59sAQNUFJdbQLL4DePEQwBz55tyoEbWkMY2S9wmqFWFvvw6jYeZPYmrQB5TuL4kGP5sP1pB56qYzehUfY",
  "key39": "2seK2Na7V86TXLNrjmMxce9cEC8tfKvpawdKsv5WXse7DYxmZ8ERR86ZKqikXMxzuRiyktPrP34ykuU7SeYeUacE",
  "key40": "5UYe56W8sB9wuYiA7uYB92pynsKnc1oGLiHiSVgPnZiAKntDnjrg3aUFc2Rzd2hQVZgxXhE7BTEi4z57JqdUrxfD",
  "key41": "2xpvDZP6tLa8FgQxnoQiuNH6chvnQSLNimxsBQY9dKXUKBzWwtBQEb91M5ZkRmaJ3yNkFqJGUJC4mm4SkmBmvSnK",
  "key42": "5g8YDPHxXWic47CFtd5AkELSG3yYQACFBRZ17EufFn1gj4epFXfTUkJdY7j1DVNUNLSxKXdJNSi4nBhmjrUJv5N3",
  "key43": "5VBhAFBPpHB7XGmrCR96hZcYReZHqCgxbpMLqNjKsQCD6x8asbxWfBStnfjhFBzw4Y1vD5kWqeZ3TtYhRTUStJze",
  "key44": "5d4ETfbEZxE8qx3yUCE6u6JHjfHjarYPXBSjrxV4Djt88eGUGGEJ5YLWpCRcqYfW2Pr33AXuGU9hphc37SVyNAwR",
  "key45": "3NTeUTMND5gLKLTKNpw17dNVKh7bcrRZm9ZsTqCCoJNJr8UrsKgPMeNHRSGE9yafVf5ri99yjcMp5z8FH3k5A3ZQ",
  "key46": "b9HLwnG6rRvzGMjaFYgTquE7vxUexfcwHBeL1UK9Jy3HwjLZZP8BGRzp3AkkLda81weXXV3CTHbWx6thoXxPzvh",
  "key47": "5CjLkS7gumnJTWtf8FpXsfW3V1ypg8MTVReThxu3FZn1QKNby8vRjv3fYVVj1BPTsnB7UANowBmERiT5Zkf4UHV3"
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
