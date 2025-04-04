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
    "3VRDpNP11x9NXUuf5DdqG3GR8sqt3LUkqfjmTPcXp8q5dg2qmp2NuVRa5MD4KBhhwL9Fyszs8Bk3pzPUZsmJHCcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CGt7baMoa48zWWVjFyZsg5wa84RKQFqGDczzWaoJsEBt5kpAa99eDXPLzjadyph37ErLkpq8CS4smVPNwsAkV7G",
  "key1": "84gTGqCsdJJqnuDHYcx8D2RSoFA4c3ZuZMCC199XwtqugsoWDkeCpi9ZAyYvC4AbUreEHH4hwAc2dPbwcM5RkXB",
  "key2": "4NrEsCXCYaKpE8pN8toktoZh4fxwuQRnmheo3Ha1iZYBweTwpDvJCEoWsy4vDwqRdhjt14Tv41xQfcnKTa7fkCfR",
  "key3": "3gnRVcgYA9AsvBiq1THLNNZrDStHXynyV4UA26TnYXByqjgAC8tiRVLvmb6JL6p9ESPX9Kf7yPkUDR6CTv3AxS99",
  "key4": "5AfTev3yMuKu2oqbJJXoDPjuwHMNz1icn4vwk9nFHG6cT2akQcMAiS6wunMuYFroD4nfEmc2XYshd1uEPmCziRHZ",
  "key5": "RZ7ELfphRKXgNnifg169SroWaQmZysbe4ovRzq3fUeEdYgheJUc54xmwyPTnTBNHDkrKgzQjm1EXX87CJVE5xLT",
  "key6": "3btr3iXhduHYFZsxRhukehog39SNSkUkQfzMPZ4JeGjRBemF3JyqobUGfhXr2UsYvnj4NJCUe78usBTKKDzJJ4RM",
  "key7": "4SthEKhhaCfk6LKJbu6m9FxHRZF8sjduwA7APLFVbuy71gnqyKrFoAZqdGjrURydkkehX8SgdUmxiuwNRSczM3Gz",
  "key8": "5RReKKNAoFsPG6DkA699ytNpYzJc2vnrY9fKXi7MxCHEwpsqmZNVXMeC3oxthETZLKZ6nH8suLF65AHQBvCte2QN",
  "key9": "2RbNCwnqDZfTT77jQWWtfaLmSvusbYuCkydn7CEzKirQdB5DgPJwoo7Z3wMC6QkBVTniahz8qgyU27NwLH2hyo8S",
  "key10": "LFeLDjvWkcAaBrtC7DGC4vAxGE6j5qpvNX18fYwk9w3JHExg7fx1WRkfVLGFLC3fZYae2d7pCD3N6XfYU9bAtxs",
  "key11": "ogqXeLegcY4MbbtAyW1pV4H11nUNrLP71LB3Frts6My3jrSL6S8tRQaZfE1hLCBJGZj6XW9xHFXANcGGrMiVyWB",
  "key12": "5eqz6HWcwFk5jCGbWcHZ9Szusk7CwLPyWz3e1VG7Z7qJkTvRkARMwEoWAG46eJr1FSayXr636nmHkDZVowmUq4La",
  "key13": "B7FXqTSsnnFn7ySAWtxHL5pN5SLMm53KJD3WBDyDYkF19jWtYT5ZhN9374axFF5MhBNYLzgDDzXByZKmibMhUNS",
  "key14": "LET8j1cn8Mte6nWnaEwS7HtNCzJmnbxtfqwPSCZwuSzN5S4xoRB3j7SvRRbfys7JrM3qkTZXkfWDMdoCWfSyf5r",
  "key15": "2Gxf54Hf9YZakWHXMHixSREJTJ9QaJXvpjN6eeaLxWXYBzBPtJWKa9GwEX9WbJra2cAeB8mUrdnqMCmGqKobXiiV",
  "key16": "3SASXA9eZ2W6X7QHbdG4xyXLQRAQgBekbpJtQuvdybmkbETEtyeRsaUamVYdJdNhETFbL4q3TK28kKDBijN4q633",
  "key17": "5yaHVfgrLS89eD4Am5YG5FRw5A8fNpUKXGfK9F2yh5AsjokRGg1cQv2SwMqxQjJxtCeXEaY6T6a2XjfSqyANpx22",
  "key18": "5k9kpzzCzep3FB3eFD1AbjBzDSWafnqc3CvehpswTM6ZaUKQi3tcToy3nkiSH816WCamz8owWockduw4CUpargqX",
  "key19": "FEX29xUxL7ptzLQWW1DkJBhiKzvDU4dXa2n957pVnxuxvP851WaFYuBb3Xa8otMp3QeNyDfbZzo5DyjhSjiSmUw",
  "key20": "65eG8iXNBaP4LF5PjYwo2QAx14RD8a3cciSjHg3xT23uEEWDE4VtkC4cEmjMh3xp8uH8MwpdWf7kWohWBNCToiou",
  "key21": "3q5CLwhaVF6hJoD3aL9STvxsoNKceffVZFuHMeqEi9Vm7RjVY1Kb6j91ikcDQrHYKBcmJUbjxgBqwgjayT4zm9aC",
  "key22": "jCvdbXZBKrJEpaB89psqntiQdiw86spvueijNVrbRnwWHqpooYTLK1ZkYSuBRoTokSN6PdjMxotNVUDBX4KgsGu",
  "key23": "4MWtA72vHXhtZv3VXLizQmhgATwkvgR3M5ZWANTyAtDFY1E7q1JAVMsWu6b9aZEq4c5XjSYrZ6V9qQzoN4Jzq9zL",
  "key24": "5MRhi7JSeaoqCNuGEo86Tamz1e6x96o177n8ZEj6hoohKYLyHwjVs95CmJAHCdshcZXBaNktLsQkmxF68ZmftJKN",
  "key25": "BUgoY3CcKceqNUKhGphpQd1RYpAB29ntMracXpnPNmvSgbSkgwz8spvRGFns637vVr37s6U3dke3kfLdMQ9momF",
  "key26": "4cgkqG7kVNBUohq1rwAKYhojyuKGHjAgjLutbJdbcwBpVgbWR5x9WC2pg2mp3Pidp6yASfLt68dywRLqhp3zY8GD",
  "key27": "2a5yEdvuyXMUFk9ciMpJqm2z5FBJ4pyHm2uaq27nrEjMQo64SrcrLBTQHUKgWsNzsduxAwLWK5TNuVMKi6FDZL73",
  "key28": "5U525VuDVwRW7ysfconmwGGBtX64WVLrk1iWE6QseLSxCiF32JNqKcVsHUfA9XzjnFioivQGknrCdJDPfmjBuzDB",
  "key29": "2SnyAeMfDZgKu51ihEXmd6eaXSRQyALenRAqFmofgCwKfuQ3pSNFoZAVDD66qUGSG43PBRfeqsXFZnitQgS77U2u",
  "key30": "My65ZFs2j7V5FRBEsEQZjfNm6fHEGrLoL8cA5n6oHMMJ3VRYh2es6gLoXNZBRr7obZEBXHdpD4E1sK46SSqXVBB",
  "key31": "uPtduX3DgdjepVMuwfyDmEaZsGxTjpt4Ze4XB9UnrpHf4dgRW87WDQpGj39R1cjuawWCdjqB128ioqqJkBhBK5Y",
  "key32": "3EwGbcUqUJLebg4qq1SR31QSoGtFU1vyq3nE5EswPcG61BDVeAaBJ8WYnxvcRn7V1Rwdag6mXTLyQhjKLLsrD8ow",
  "key33": "NZJ72isobBX1BUUkiz4tc1n78nBkFnCSMBjjxGyxzfma5DTQpUy2UBVHGa5w9GHFvjQJrGewfjR4ikkKee2C4vD",
  "key34": "3JjQubCjGffBPAxeHgyRnBVGgRB19oJxUHL6837ViRvLt2N1iMZjw8waJwW4s6rVKiGTd4qEjC9DV5zQUisEdrwq",
  "key35": "2nt8aaP8V6GztMeZETSr56FyJkMutMX4Mcw7kKoLj4NwjzuGqsLbEQjuQV1P2MXuc62EZggCi4DqbRjYYoMBndux",
  "key36": "4SuTNfRkgz5UitfQMtCLEpXxJWUbFdYiRsZunwT27Tc6mvXm4N7mnjqkJyosFQ3Rac2e49TgaMF5XajDvToMCszg",
  "key37": "NQMbTmBscPRh6dxKhCUfFpPDEEDHJHTnYsCyY72DiqwEeK3WxmnANx9Esuxaba96469Pyoif7cjyoAQDo7XTPQi",
  "key38": "rWL4ixQJXx4akgwYWXhT63V1aKZGN9YrNonEopoEyHQu6bZ1Mi7oM4pr3ZjQyHS1kLpA4kK4AdHJhMhCZVFYvjo",
  "key39": "2WN5iph5vstfjcdo4CN3iRC4aMga15wAgVexEDzaaaTU73dBuiqkkgmMmk5uFVGhJvZVijGPN4y5geJn8wQ4sdFw",
  "key40": "21rKUZSWd8fA9oNfvqVpxTDEzpBb3MxfWpLAbCDM8r6YJvJti2E9ZQUUJzwrPciY6V89F4ot2uxyE6aCCYsdyY4R",
  "key41": "MybzGwwYCsxY1LGaFWVLXbM2pSRLbaPcMGTBjgfnrVhqxQ2JJjmviC1dgRPoXvn4sqa8LNFRdfDAJzu5WmQkYk1",
  "key42": "3hsgZqUMCrtUtDry1AU7ZXkfDpxzxWYh7zTuThipMdWPWH99PvaGora4PEzqe4x6H2Ky6rPEWwKV9ZvnUkzF6mob",
  "key43": "5hPsJaFjmFRztz16vhTStGjPmQkJPawQRQffQg8feemKR4SKrXZT82dbwnPay31CyuWgMfsam2vwdKLwdi6taNHQ",
  "key44": "5q8U3ghRgYMtCATBzcFjuYGdqDVzdpC7ZA4JwJfZogSniVqAG9euxXVJG9uRmESsvvVP8QtjsYuDg4tAV7LpGy7v"
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
