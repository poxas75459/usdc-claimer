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
    "xAYyeYJWhXuMnDSYeewm66E5EBZrcU7Fd2EKpkJK7w3XjaT1esp1kyrnMDh19tft91u5d8i4uuZX2djN7gwtoit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yf3umk6w8Sh3BxA1wdjW97TbxHruEte4aKXKk8eeJakVoBg6Ri1pg42xhFVmRDxXPqd63b8ouoL4TY6rsd11aLC",
  "key1": "5Kf94UsbyD1m7XyiAVsSQUAAYuNZphpwPrcCxbH52eC8DEuv2cP5k1GRRuTgCUHQDZhgKFYGHatTKWdsziY8KUsH",
  "key2": "2zjdTJZqu1eLktLT45CpM4bDPEHM3Q2Ke9hHq48CrDqf7GdW92NvuxCV4eBFuhkm6Z6a8f6pX4DJbKafGQM7KE26",
  "key3": "tqxTW7SutTZsEdpfJqasw6xySRkb1tq2fMGH65om42FtXmYm4pzgAS1WJsiUBpK3TxnJLpv8pavTpNJErEAJcKW",
  "key4": "sGfqWgL7rHv3kxTnGmD1ouG1W15e9rWxddJqvuYmBmegg5AnsBJfYsWanfQnLo4jtoBCUc527dXKhmJVsEYCHBK",
  "key5": "3fjFgwxk7UJ7QkcWKnPbiwMeiBMr1drKhZ1U4exqJWnPkQUkTu9ZB13fhipKnTeFTqN7m3TH9eU5feQ1PtYhf2bf",
  "key6": "5zJ4EvVSwrxW7aYEyC6ePEX3uR3mcjF48Mn28j8AyqapYANMxW6kkkQENWnFp3PJoB2277HPzG8YxGYwSXHNjb7",
  "key7": "2ny1dcRJTyABUVLadT2yEaLzMgpQZhVhtEwbvBpinFumrc6WroS1pmr3gnGsjbHuMfRq8Bh29J23A82QxgLhTaHB",
  "key8": "RbKxU8rLFnrcb93GFeVxbejpphHDReejNFMb9Sn6xW1pSKimNcwxM5DcQPP9zi38B5Tvhrw92FjSbs7FPUp4uAr",
  "key9": "3Qg1uvNgmCY6TCGrjhqQ4eYH8sT9ZCZYST5GXkVUXCtAFJgPz8kdWaFtCeUkBXPjW1pDit9QuUXX6DehuDexM33x",
  "key10": "4tGZt2HShzhNG9XHdSWACCCHJxDHiTBQovFSS4FACmzGy5t8jMjsJSXrTfMLjPWYeaCGwck28SZbfDGvBiZ1LyBH",
  "key11": "2EEugzpvMp6o3c6kABHotKUQj3h143fHgvNGA1zj4jpbS8bMWCDqRUy9bsacZ2uefLcRteUHXZzrHVtKCiPkSwCm",
  "key12": "5hmnAPCUy33wgtLt6c8BYK18qn2v4mQ97wq9DnCoEBo595DXH4pV9DqtCXwi5qw8dZgfdFzV75tcrjq48Lu749Jr",
  "key13": "25L5XJ7RY87L7PJRkwpmvLfPKjQu6RMP8v5nK6VEfNHtr6XvWW6tApeshj4wPnSVfUNCzhb89y2UVTnn9wcEotJk",
  "key14": "4pf5xXi8qhmpg7HCqCFbziKUQCSuMnTorZBpyvGWzkkttPHrHtLWQm9CzZJhJM1t2F41isGxpzJg3h7HSWpEcMSa",
  "key15": "5P8Y18KxcneeKzJAWA8ahoRCqBzBJDACdygQbfU8q82sGMt4XFJkQR1TYVRiaQQdMPWyojRx8wv1Gs1kMbDAg5xV",
  "key16": "3qHteRE8NQnb63ZXt7aqdwErymXWFDeV3ucdrQQor2bKQqQcjXWdYJnqUG56hv2uQkcAMYuWsWuvZwCg5uqbe5Cv",
  "key17": "4QQtL1bLj7NCQ74TsHhGZvkceZyH13pWT5CkWnMxHoQfE4Fe4APg8FJq83y4bPaPdRmdbd9zoq6DT8QJSXurQhU4",
  "key18": "4GBhDUFRpfT3QbzGJdMwTfa1nWhENFmDvHWTpNVhBBz1kU5YQZoqGXZYVPNPTebQf6mQCFN12qmVZ6vEKUbgsDsv",
  "key19": "22FZW3Ayz2442dTubkRKPd8iw3uAfNcxYkUk9sAPbJMi5XM9gXNjeXwS8wTT9pgMdwodiPiWgMveUexBEYaPQHiu",
  "key20": "61h6RMQ3uSEAZESfNcY515iJ7jmLwp1L1EjhaiYuCnCfYi3mG5FgwxQZcaMgvHPu5Q6N8tAtubZJquqM2iNEifgx",
  "key21": "3xE1rwtZ1qha468kGSy7wEyJBUzu4TDNvRhVjGVRULrTS9PatZLCrnPwbZx35QGSvYRvsiUvpykVgJjDhaYctkZU",
  "key22": "5CTiUKJy3m4btSeh3an56f3Kc1zdxLoRr3mcSB7xjKGAJwMr7gh2n93KxMr1paVwEJxCZ7TFxPUQu2rxqToWQoU9",
  "key23": "2RwCDcaruY81TMowcrNqzoNQPQtCPtaEf1oZiYaxuo3Jjf37sBrTudakjuRE6F6bNReHN65SAHNKPpspEHPfqo7H",
  "key24": "3GKbDBaRuEUAZ12gTDBPdETpNKZEDzhP7bCoNB2pVMUvPN6CKNw87sLHQZyZuayfmhyccUDdw9aXndNsUnLgsSZ3",
  "key25": "5zZiC4oTZgL3nFfpd5oRoUgdep7tkU4Pw8fN9RXrFZSx4PR8hQm7ZrmbhixkGEaiY7NrRHqn7oEmLyVRPg22eaLJ",
  "key26": "2Q6yDJcX7kdDqTRritLRC58Jktkv5SHsU1eTKZbWKFiYgiKWPHvpHpBnhkc6yM46RLaZEfT2yh7vjWZFJhf6DGT2",
  "key27": "2ZrefhaxxPJeSvXvWxHUUjVewURYnKW2m2DeeQhXM5uf5A69EBB7S2VnVXALszBt3DD5emwYfjZfHW8wZ6NqbL5Q",
  "key28": "4aZiUrw9YrTNDZcqEHT8KzYb3BmeLzt4hCdkStZCWJTDFnM2fN712yF4JgFNBPuYZzkNfGfqkPTSiEz4D5w7sw66",
  "key29": "53BSushGA1bfaMJQRwTKGfBXxX1Gnd5Tnwc8fksUnuYsxpX7s9VvyX9u22GRtsKqpkqRoBs4cXyaExPjckhfrjtC",
  "key30": "3CJUhxZp1taoF8ryDUQXpHFiZYtRo4cQ8jrRjES8tBCLRWrczWHB4VSQ3Ve9h1u95RJhEko1iPrbrivocgz2PNMZ",
  "key31": "62rPLLSHibmfTst9ziNU2XWPyXpjaNkxw4xGtn7MrKmF96hGzqibixmzwbr5iRmkx3WhS3BsjjzDfH4W819heSZL",
  "key32": "3ZhvjEs751K4Yws35gz9ftxVtXe5SzC9jAtQeH8SdKwL3oPREsvueM9St5hYNnbHCRhLPB6Mmidf5aSa6jjuiKUo",
  "key33": "39cyn7nwzDrRKoa1dYmLSH2NGeYpPiAXiBSNoQK7RJ48jQkzvvrBB4Td1Vqi1zoNi5k7hTzNuHbGXcdNATifsEaF",
  "key34": "2qq2juQ8HWCtuL4aamrkaWqWMLcAYjv2QatQGTniXWVwejNsGdYacLoUiW7myqv5LGAcFem2MmoYMSSKboBXGj6p",
  "key35": "4JZsHg3pgLhQAuF3PrLVhbWWp3jMCKmfdn5zFmhJL3oNw9YK2YqjHoA6qiPgaDBF8Bm3dvF2QT56NjGrRfHjQi4Z",
  "key36": "5yg9yHxGTagqwQSDL5Ge1WQBSFFDgKvHDCryNk5HSFEPgF14F1eDgLMQiqbiGSni45Q6Yemw8GhSGFVdPrTwPj1r",
  "key37": "3nYnrTiRA89kP1fKnrHhToUoRinSTAP1aH13EWwZgDrxeTy5kMtMu2jWbWcW3oS5WfstsZ6kymAPbNn2s8djaxpT",
  "key38": "2HpVyQURn7Xnr4dD1ShBvWaQdajKUrdaUHCGJb57srywXuAdzeYK4xSAXrUUMPUBQCRBqjyNTS8KdJwa6QQGrX8Z",
  "key39": "4HHZyd9SXUv83Nrea8V3dSzaDDPQaASySSFz1LRPVzffx9pRhtzCXnsRuBU7oHjSkW7LvyFxY3KZmiZmUxYhnJb8",
  "key40": "3owaMyoBcVPxvBDb7LfaDQhrofspTS8vXoPXbAPcAmzqL9eaQzb6ytCeAyMER4bSiRbbjznFkY476Le7of94i9zn",
  "key41": "5uXwKoJstTTyvhxtQiFBpwXSLzrGHaYeRdiKVYHJvzg2sYhKiM84EWhhebt8BdcrhvaTeeYuTM8GqTLnXbdong1n",
  "key42": "5jPnTfEJKBPKAn7G8jAsfNs93E92iH1rBvRdBNDtjfZvfkHSnq8wEmWN7qGxDRS475uJemkmKG9Wn8foctHVuFGS",
  "key43": "2mNhsNymMCASWZy4TfqReBEazVGjF6JN5Y5FUX47Q1PWLp6ohY8iTJHTrTG6rH239YpAfyeQHS47q1dronL9Aa1X",
  "key44": "3TRvYqeXuuayYNc6b9BDzSANRs6B5YM2yyscg94buK8qrWkiq7VKo3p7VnhZ8pLSEW9fuGYdMLspxPaMaw4LvaWD",
  "key45": "33a7t459TRSStqD7xFiKZy7kt6tg1gDZ11EG56EfL5DTfEcKKZoASZsyCX5PLYovdH18wrEo2nvqT71Gx1AAzbj1",
  "key46": "3MPKaJixawM1iPG8it192Jvxmk6ZprvqvoYjNBRC8yqvba57HAVAQup7WY6tkUbiHLGzwuozSbZZK2HgNbfJUv9q",
  "key47": "2kk7hp1cxuLTspZtsuxjeo8wUrJ2y5TTzmXkjwYW3fCHMHKiMb7utNiLHcRj6BpCUZSQxgA7wHdRWiPqnVTU5tn4",
  "key48": "nd5a3UBSypp9RSk7LZo7MZPtTUPGyetkEDtVT1TBNhkYpFmX5TxufHjVTQZJPRqXBCDULa4BLMkMeLfYCQB45xD"
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
