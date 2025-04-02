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
    "5teppoRn4TWMymh4tLcNsL63smEyqg5P9ovds1Phmy9UzwG7nEBjQ2oLTteMqkVV8iRt5gx4MTGp6YHeApTWUkso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XkfsVkKdkKh61QtKiToqi4mXrjsfiP2LVJJ9Anr13jh4XWPnVX9fQmYQByKdjeZrUnPHpPCm5K1gNnqJ7CG91Mu",
  "key1": "UyKkk7zWgLYFC3RNzwL1d4ovtzrnHo8pFw4Cpy2qC6mzAL9Ar1PSFXD6pg1NpwHnh8172q8JGFZypj695RMBY64",
  "key2": "4LnZyCpWAocermmdZEBY33CYWVcQRyrtEacbqoB3Yqbe1AFsw5bcyhUGfqPpHvFyZvKfBh7yi1e69qX5cUqVboXL",
  "key3": "zSeegP8aKvsFSwn9ASM9wuYSd9L88A5FekN4fDyDbamq3t28QJSgmfzw8VWkVKtLoV1gXY4Z5okU225ixZS6NGQ",
  "key4": "43vE7futsjfNeKeJEzAXMWCGqziLr1j5czHzQXnooyka2EbESQ4BqkW6MHsozd2WtzWgskyFgXvSXTUGRNXFMrgM",
  "key5": "3QT1PEKQbYiuJMfq7viQyRXFJpAdbRdbvwVjtD6WmvoghnS6Vi9LdiuXMaZxaHJ4h3rHxJtbErv8zCXXT4EoUMNC",
  "key6": "5BnS5RnCw9hdEqe6CYDnteTaNGUX1pSznNhP7sgEZwhci2PJdWvevk5JzA1qCWznZGqTCTeD5oAEAs7ruwzvFrxE",
  "key7": "ejsKUJ78UBCWH5Zqinjg8g6dB33SfzXHNh3mU1r6ecbSvGWUsxfRtmvMKLxxEVT3NhGnNQHNNCydaiUuTFmTCQq",
  "key8": "2yGHha624HjKWvg3sjUZMTLucWEfbqhhTUynohGzGxbqKfRbeCzrYEK9fPikeNsLUv9cr2icrZSZbUkFn14s8fgS",
  "key9": "5r3ZBM9BcYoHdBAT1D9Q7bjCvrN3qG2a3PtMajq3fM4cdrwaSvUPkZ4fLQV9UABJCK18PvDF18FHKfPNkkPgvX1A",
  "key10": "2cfXcaHdDTUGqppyEMTYsqFYpgv3SrhEmaEeAyUVDva598cV8QfykC3zyDBPW2hESvxdKaNizqfgWZvFbmAp39bb",
  "key11": "F6SFk8sy9F6XCytBtth5yw9yZauXCVPj8KpGYJpjqzArNbkRUjPQyNh8boemiRpDemYD5YkoeNXp7PALMbzNW8b",
  "key12": "5qNHhMtu1j1YetePYTFCTbqxrjBhH32pJAiCAZsa4psfsJrc1w9An8qubRHhKaoB4YQdJ8mh9TNWrZFNSFinZbMA",
  "key13": "5sjW8nnnPxEwMUa3Fs6sVFCwVJZfjDVn9Luq1GXYRfKt7ykMLd39Ey1NysFWhyHJi6Thnz6bs77MV1d5tWG13SYc",
  "key14": "Xx13G4WxLTJkiKuQ8X3iEwiMUV6nJHCySZLimoHkoanWbmt1icLEf8HiBbKyp8hr7hCsabiumBkUAhVH9157Bt4",
  "key15": "eKczTxtnbM2CP1N9yLMJ6wLmHWrLLuqTHvgTVKZj6xKzkL9nMkaGzmTcMTEqdBVytEnYjrkTTiCTWCJxLtks2vJ",
  "key16": "2VVEhDZpp4MondpFC6cH9UwvB9YNtSg6wWm6xTGmeCdj7nRT7yTCRkwMzpKFFrM5Z9TU3LjRkaLYVEP9L4PFMAJF",
  "key17": "3vXtEhXXtjwMqu7ATJSQou1RFW2Msgje2fhisXzjEx1k1AiwzM977qW9awEe3aTRTCC2gLE6iLvEzbRsvVBDKmAo",
  "key18": "6UmoTwD3fbkpyGUSF15VkJaP9HsqFnuDdvRZWZrLp1dAjHVmetBPCPNTgciWNk1YSaZwDdaP5EQWzWN5QtA6YXr",
  "key19": "4cQQ6tq8VYcdyR3yUjnF91DfYZ23fnHN8RU9Z3HSTX7JiXz1KYFsuwXCRedehBo1TdArzLAc3G5t9rHX5H6wPLPj",
  "key20": "3S7wN6PvN5bymtdmyaAGevhdDcQr8KyHANJQQMVd6o6u8u4trx1Y2iRgWSHdgtDqeSKeeveHuwni44E2rdy9BsTz",
  "key21": "2NV8tJLKsy2s1mhpyXxRuY83wk3ocHSLbR3cimQNmsCFvnyTXyeKgrpTu4KEyz1UHuzVizhQY57Y2qYynBZ3q3HB",
  "key22": "5VMSfppK2fcachr4sWtT4S1XKUKhYuXkyVrT7HWip7JNwYBG3Tm5i49RCjjeUiJXxTcLjYfazQsbH2vRDHEMz6Wd",
  "key23": "5KfYC4HJEPKnhwns6fJ1qDca47ANqp5iuNaQ6vpjxUuEyQzFeFf2REsRu9Ryp4TpNCLWjYpkP1JDpjFkcDRzkLZd",
  "key24": "2bna7wywTSwrEQWXewbzpqNYqsdSNUaSSF12s7u8dfjqn7EY6APeqYr27BWccgfAqnc5gbkca6YRT2oX3qA4F9yw",
  "key25": "4FtrsruV7irgircRKuyrD1QuDjsZvj6Dttbw462YaXNKYg7tBXukHAExDoyi8nbL3TuwSGEy58xg3h5j42yWwj91",
  "key26": "3C7riD9tJUXc7E3ncnJYL1QHRA2dJgWAkxqcXfKGTEtFrzHiu71WEo5ngNCsM7LEKE3GRxrdo9cFmdnkCdU4uijf",
  "key27": "5EdYxCWSc4bY8XnDtM8setv2JLF8gyeggW88Ut7FbLH31FBfFHdk5k2LDRanX7wJsXKDPFM64V7ygNjLsASmL3Fh",
  "key28": "4GZZRs2K9gbfmPXtbqqpeHALzfWh6r2WNtX5WZxzrwjme5cfcmWKrQD6xs4ZYeyJL14m2juYMaRYeBLtBSpi27Gg",
  "key29": "4x7hCTevbM5Nso8gvPhDKaZLCETz9FUGBXQvhg18PRrwRSx78F7qg9gvoo1TrYnMqsr4eorF1Bi4v63LVPYuXCnc",
  "key30": "3yNqF5DCJWQTcPxgoakG28hfAxM9oWvjJPXBYKyqbzyLLDpMv25sazcgXPLxCeccTootLDwwWEyszYW3jAAkeAEy",
  "key31": "3ewVWsikfxVRjs4DjnExcpTpkoGF8DX2FESRAhRKvPJgPA8E1iyxJeWnkmTeQm8e9wjuJFQbkkQxz6EMqNLXXveD",
  "key32": "5QmFR2ikWcV3vNqD3KiAEk82TBhxyv2og3Lt5ExsdqN7ttD9KZbjybyHqaqgJMDiro2HGp2GS4bMXybyatUtuaF5",
  "key33": "kqtnHJ2RtUJLFf2sncEsnCRsxWyqEra3VwA4JzBHE9BvcgMA8rpXn6cgGkQb5BbbHnFosoiPC8nt5DueFpc5zGs",
  "key34": "2m8aH3wnmJ3gKtWRTBxdqDpvezqTjh25wfNFYHNzjwGoZAL9jHKGe88zB1p4NRcFXoAVctLhLFFT9xy1Yv9LgWVu",
  "key35": "5uEoUrsymKZ11KHhKN9MSxT1VsyaY6nCpqhPPGpfbpT7BwM1rYrS98MicfoQdrDyu5Ycb7PjemPgT3P2bCaoh6ia",
  "key36": "2Ff6y43ngmvp5ECwYtrYFL8Xo5ZRdAT6aQ99KFnHkSsfDXvVyeVTyWyynVjZU5cwFuCHWNUQUCbz3fiSge3EgAVU",
  "key37": "tGruaznWWHnZyFutpX8vscDt7yZBSaoKMjJUCHC5Pndy8RvKJ129bJB9xAYZAmFs8qWnsS6nvDLmqJVA2QX1BKm",
  "key38": "3ndT9KRfchNcBWzviBWPFcy7TWSCQCtMM5Egi6wRooRcaCEjT3Chk9nvqHc4JBvRFNep3bN7GZLsg5QVRsYYQyR5",
  "key39": "3ciZzXnuZB2LKWWjTZe9UdjcanD3vBf5UQV5Fy3P6rCDKtTtFeAY7VeQWwbLufwEfYUASj4oKQG7sRhe9THPoJH2",
  "key40": "2vyiJTcX3fnVWTN9TxqAq7UrfVwLsuLgigXh96vB4PqAp3QZSE7nPuyJEXyiGKfW8hrBmM1719Fn3th2AK2Cd1Hs",
  "key41": "5pvDyxnxiz5cJGayPcHQBvDPhKovLWzuSskAcgGEPi5tLqGsfgSwYjo5ZvGGu6TcUA5u3TMRgfPFhKJKQtajDJvz"
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
