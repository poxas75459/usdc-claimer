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
    "oJ7EWu8xZHqe7gpc3ATLwUwsJgBRinJaie5MxEexuWTS93HrqEtRKb8AjG429TiTGMwe2LGRwSj15XQ6pErNr2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNRV8tP99jcTo2phgHd3jJnKowpVhRkdeQzzxrB12gcBzc9bes2i4EFRxyshTNHpY5pJAac5sL2gJ6dX91cKrXn",
  "key1": "2BmixMhWz4P7Bw9xKYEqL5sKwH9UbUt7mCa5nJfBrzWm8AFkb2x6MUnEwzvdqJMv17TpvUDmMZ2QYsPGYgT9ppML",
  "key2": "rSWPN33QTzE9cQaKTVv8BdYCb6bW9Ue8MAAAh2jEmQJRPp9qrWcMJ1fr63XdmJkp9URp8Ai7FE1Hhg9yc961iuv",
  "key3": "hTwW5EAUifQPfFM2xcvbekXZK7EfbFL8bra58GtpFBxwQXmvVyeSLR1CztPcL84C9LvrJpuAsGbKTXnXGDMCAWB",
  "key4": "3uWPzfwvUVoe9WyGA1BjLKNnQkdTrcWTyanc6miTfeKtPNEGWNQjTBrSLXEK8vG2QN7EHBFbYW2RodGAvAUK2mTo",
  "key5": "4wn1dDbxnKjLM7bjrGzgr41qBFafSnaMTRdRfKJrCoSv8221DDNXNQD4GKCjjfyGraGQkiaTngr8GRwNQkX9MahD",
  "key6": "4o9kEJ4GH3SECWeeeTafaTNnyUjZ42jaJtojLqZp7wDFwmVcVXQVkYYgqafwdNK4941D3yzrRT7CJSCmoq38hsyb",
  "key7": "5wwVMdAzyMXucjS6S3eBJ9zSXCe64nFCMu5q1s1VF678reQGQRoWJ5XL16njiuTqwQ1AAYKgwb7voWa3UwqzKLCG",
  "key8": "2CQL27SLzoFAytGdbGcCo8H6fd7H5AfArTQFKXnsEN5hCPGDCXLqJFHRvzKhVnGT4koqd1Cx4L2CRbZkRG2KvztR",
  "key9": "3r6qWUvMFz81LJUCW1vwSWwzsasx48HXrcFcZfcFwHm6fSXrADNp8xkkr3uLrbV53aZx9Pj5MsA8QfHGU2DFq2t6",
  "key10": "2hFtpTmavVqiyUDr72LJCFi8qYiCxiTLyD5SnFhBai9vHSb53Nzr3wnkAzfUqD41d67Vg6H61XdxMLwKXe1XYhQ5",
  "key11": "33KehJd9MagvpVqY636UJrxytBDwfxeNmwqucxobntMXgtnEGAJ8XUvLT95HVnz7jawe7NCypy6ksUtLfcokMsEF",
  "key12": "41zpFsUPZ9XimHqNoYna9hJzDiTsxRZunCHMWUTLChzrbN8iCr3gHaUEahK5KTBQAqfXwNbiN4mgVrXkkd2LS15F",
  "key13": "2akpwczuLc38jaAZ2z43Yc1Gjuq89icmz71E5bjszocn89KfeUkMtJ4E6NnviU5PdboCz4BND3Ne4FDuAjukat1S",
  "key14": "3bzy1bsYEtCA25aCQA6oUqc43owPKUVcktcwwyWnSWTcpo4Aew3jK37TGDNGwRQbdtbQmYUWwNYGFHX9D8shduYk",
  "key15": "585ExsSeVaoRcDLRGf71esXGG4ZgAa7gZAznBmF1pCnj8CCH69UtwrKeoMZSfBwn9BKujqfa9qx1KVrXdndAWJGk",
  "key16": "35YnsAZUQEKTNzz584KqanPcvUpgMaPdeEFXBk3oHfJqinpg3CPCNRJym4Mfze6GFnn97rgaAiu5nJCGE5hV68i6",
  "key17": "zfgVUbEizmbwy6GKCXfZ68c6HDuSRp2M4PzcATuMJtVvu3QWgrCQ5SHmxM3dXntqn5yJfXYTXwtRAoArWCDa6aJ",
  "key18": "5TrKLneki8p4VWkAvvv5tLpPrm7ndUnWagAvZSizhnuZr56bysbYdkTihB3VwdeCNbeGn7TD3Ys3YFfyVNVnAJCe",
  "key19": "4VY6P79A3pfPL99QE8JtLTgPmFdShoyBnSMRhZnBCXQUs1GUfrxchANiWFwTupBe9exoWANUThut6UFDHw1U19vo",
  "key20": "3uVMP1VejKgDnPRBdbSVAZEb9uhANJ8Ze57a3u9PkwP827yTtacKo8mgAELshD4M3mw5rHJXdZ55giuZbzunyfC6",
  "key21": "5rzkRG9U4H6rapdVg7hPh8d1chbCY49Ck2Qe77o5WgDNke3KWqoX5UJ6nYTKHJcdDu7Lx1vjQEyxwhuavWwnWiFj",
  "key22": "51xzrnnUg67anUpQYfvRPfMvy67A5PMoaNWobhSkaS61c2QuvYQpjTDJuoVj9XFaA7Dzw49ZMrmBHt1FLQHdW8DH",
  "key23": "V4TCp4mcXFoYfVnPZxJFpWXEVSZzV8q9FcM1zeNb3a86GmJT6aTSbSn6cWFUoDciF4P9DitXmthttUe4B29YzE3",
  "key24": "2xxT5jRodN3b1of2ehew3fDc95iFxmxwVnWp18aHVojiEyhE3gkVifhrd9HCmN3MmnQ35a4ofRjnwY7s7AWLuzsv",
  "key25": "3DPszouxRZLAPNYaej7gXENx1inheEJZx59JUmJRWxcpJrykX4D5Rq6jJbpoJ3pbYxLwXhNxjQkmGdLPQ9iGbzfA",
  "key26": "2yUsVyP8ySmXGLckZdadwzazjLXcinrx2cgFa3KDCEAHpcyAFnyzauc6fMFqrz4hL6wGnkhwYkBA7f3KXZUyYEBu",
  "key27": "3TFZ9eDKvxXsFeXf3LUYxwTi6X3z1WLCrT68ZjYMkmUjfErf8A8qqihWn66YfhnAWFfevmgZgnCyDZZL9b8D6qgC",
  "key28": "4fAiKDyXhTyPHnEnhx67BFyXbwX9mzKY3XaZPsFkuqh8iKhbzEhJvNsMTMoZcviekP1pHPdtGWdf6b8RJFgwnAT6",
  "key29": "2ekiMzHv1mbMfr14XGgQGEyU5YR6vE6k9PoBHR3CnD2siNN43o71SfFC6ufZrmyHjrsN3DG7xi9ubGS6whKJ4vu5",
  "key30": "512LGYmzZs4diEHvEYsa8qKFTbwiKBwfRC6A35e37G22GQxkviLCNkY1XfRSsPrNyA1bdQBepaFKyvjRYZxj9pdY",
  "key31": "2UmNghPLqQGqn2Uswhg3MQM3b1LbuXvLCbKrgKY1JoWugbykwwyUv6foK6aGYAowjFxMziyzCnyqEvEkSFnMf63n",
  "key32": "5JoszrFs4dhgRL25bmeUWcvzTDXuUeRAJycLz9qovoy6oeub2b4fJX2EPbvvCqMPGH3K9phMh8tZsSgpp3tXe8gB",
  "key33": "5WiyhoPtU5kQfgAjwWHix2UnLeNWzMSuJPqrehXWEkCoASzSUdFKcN6LU88EML4xVYKuNNxbR39JcLvd5YQxAyB6",
  "key34": "4tTses6owXMMCPm4HxPpSashro71SQ4UD5RjrUUDpxcniPGduioHEerErCQ8i2yozMTDdi8wso9V2W9pmotCt1e6",
  "key35": "46TWTV3ztCqMGrPkTXckjtmr6G2C8a9NwzQAmETLAHesrx98o5XCN44ZRgJpuaAjFFv7VoqBYt2sRoK5y4R67xRj",
  "key36": "3TyHdmbL2ak6M3cyhVHUqsimWe8H7DwC1chqTtTeNc9dsEgT9db6nwGseSGxfsa1SFdUz5SGiEZGUSBL54PsafXY",
  "key37": "2U5cLVUoCJxYfk8mNXM9zSnz6MCHVRx79Vju66NmxZxGkGJCZ2LP45nFVmFoZGnpB3gSkN2gqH9xfCLJ1D3mej9Q",
  "key38": "5fdcRa63jraZywjhJKhcNHRJe3YF7LhNncj3vuFVjPKQ3w4tuqeTNzUwmeQ9Z365auDUbZymrykFzcgA9zDowD6i",
  "key39": "25kaGLCyvYLfN6HgidomR7z6PNoaeWfYr2FYuNpXzjLpzDwZQG7EbE2V7qKzHYckk8JmeHpB2RebmQRdtguNxUT8",
  "key40": "5NNQfvutAV1vWgVywza3YfzUhmVMNyeyh4yrq2Yknx4mW7c5bLyLjM6mWy4LGfBuy5pANxxzH73j5pMtiatWNves",
  "key41": "2YK5mJ3VF4aPGTzsveJg7JKaUZcx8bXF8JTES2LN4Y7hJzF5t4qXpMLmBm1dinwM41q2YYtHTsWPcjC5z9Bxx49T",
  "key42": "4dve8Jnf4TCWBdbxGN3VN6514icETF7TeDwQSCcDvzVr8HNcyZHxvbjQ2XgXgjvZd9trAkz8q5cFteeaQaR9wsjz",
  "key43": "2BbDhi6ZD4WHZuMbaF2y99Jvz86wFr91233WQj2m1wU7kAUzJN3TQWn4EfuG2rZEHgMpdaxF7AVVedn5cXGFbG9V",
  "key44": "xzNYpbHHi2j5LTKCgjcWpphkPjuqjmF6KpivUAy9BZ5ZwqczqVZxmXYg9KbcjKqZhJQVdhdjxtQ11eLoP7FY4Wy",
  "key45": "5RJh14LQN177EvHDZSgdT7sejBXkENkdeBobF3VnK5zDHyzr5ArLBGgHxdNdfhct72hnMV3miUUESjqrqYBdzNnp",
  "key46": "4Za6YLJ9s685Bw5hBr9s7n17kaJLsXmU3V93KzNcPpPLn2vbNTRaHoxWXrzA6VueRcvyJdqsvaAGyPJvvPCiZejR",
  "key47": "2kGLFudGTc6dD9hoEK7jtAvHfrYbuCZmxiyBwxdCMmxgeikuGtFx8cmcVHGFXDq39cJ3Uk8mqfYPsMYewek44ZED"
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
