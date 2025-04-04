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
    "2YXKGrmTGDsZmrviqYpvfp5XRGe1TaPRrxsutUjJL3XSv4kSTqSeLBGJQ9N46tWqdgtMGG8fnxMZEc63VNVyfq3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqFg55JwWA81gB95Tte3jCgv6mC8MVgeX6VANNjP12Rdy1mTtSKydce6F2YggNvoqm4jAk4AQdcFcjnF9yBiGPj",
  "key1": "41EbD5Px6KZaqZS5xTwMVE5REQjj4y6dPrgWw9ypTVSwF6xQbTcHLURa2NjSNoanuHkdZfmdtigkw2JgeDDGeNxa",
  "key2": "3BSfMGykEbAJuS8EwnxdbgZZ3qSmAc7QGevcspVBotsphsiak4U7q6PNpNKLqgUsEqchZjVt9BVJq2TCAtdgjqvS",
  "key3": "eGNc1isJNvMw4ERap5i7VnAUSApwPyqiWsEZpF5gY4fkLfj7XkGv45fqGUACz2FLK1vMuC5HfP7qAW3Y7fhEaGp",
  "key4": "2T1nwNrhd7fuuZutaha5HVFrHEy4ePToskCNaumSWY7nQb9HEi5JipkZMUBjN2Xqg2L5pnEyCxpnE2VopdCgzhB7",
  "key5": "2tzQ42Q1iyLN9LmHuaRMgYdvJhokG3uf2u4Hxbp7ZEu9fS2sVwtSq5eLuXV8LtUb9Cau8G4cMBqYF7uU9z5CfZ45",
  "key6": "2QJkbgxrcPUCnDGRqVE9Vn3a7xrVikVmJp1ULyoDDzN35JpyxckFNNuMb6b1pFe1oBkfZ9PDzwdkhVtb8vvFA7Ye",
  "key7": "zTn8TMCXPq36WxdVgbNfxo7PwEWswaKH94wAkU7E7jtSeyUcYRpcq56XV6FryU3v5K7KjLN2xXHbLTCJb7Ke9u1",
  "key8": "a55GwWG13NhADNMezBxyUNXY28shXDGNziLYv3K1LioRFYqvSBxvyZLneXtg4zcvYTXX1BCLoxpfHeYtdCp4zts",
  "key9": "5MgDueZjJqfm1adQMd4rpPRHAkwZe9fXNjtR9ZNGTzu22fgBNS2AopnfrTQU47Z5EDUe79jVvynzcGwQU6nGu4P6",
  "key10": "2F28MzVcMvTWgfH1ctTFhydmigTe1TVbEdC7gLxBX3fAN5JWbL5bPyBXPD3zZKZbZnbu15R7RthgSxxhAjy6UQGx",
  "key11": "3dEskbBLdTXAm4iPt1VWgmuPG1GZc3VYkSDyosMkE9eadZeHdz8MuxD8o8T5UoxvNJbPXBwk63xZWnfj6UgpS52G",
  "key12": "8RXwLRYLFj8Q4Lo28CSqX87srbtnP7suht6EUVZwJzoix7z16qpdHrkJrAj9ZgbNfs1qKie3h847PwHsb7yhTWn",
  "key13": "5i2Nbm4CMr4Sb3LPCrAkRxG7GcZ71i2pyro4eYd5a8PLbWE6GbHsxM6fdSX3TWLmXTzndyPx1GQSLWNm1nLcAEPi",
  "key14": "5oGtPdzCgtWUySZrpjzeNoRGbkApQsvr5kgDduQ6CVMBKHifUtYfQuDds1HUmVkYWRdCXNS6h3G4TZkgWC8pKYtE",
  "key15": "4hJEiGEiauZssbhNnytasyrmuSDeNroLkXHWnEj7PrPzBSv6DCbsjNyLcvp1vQiJxcnNoABw46WfKwhcAmQddm6j",
  "key16": "EZM5FvNZ7vEDarpWE5WWcM5fcpEyYu6QRJFhkod9SrDgFJjz8JQpVW9RzpgsF1AnjjZR3as2jeEG9TY6HEEG7pK",
  "key17": "2cyPoCiKRdY8Wz7MUXNhssrPH8RSybmj4UqW43UGxzboWv9LuNLNGa1H64nvMEjDiYp5Hw8omRfoiKKgWm1voFRY",
  "key18": "MUEFzBZAf74WG1pY1N5dPvgM4fFKqGQGC47cFNLLH94D8FmharopuxVb18agZiMjsHywD3EvGWMCr1YRQUH6xBC",
  "key19": "fiA9BWMXKmkKgS45rqUDhxt2ChmLLRfLk4QgEozG6rDZYSi7DG1GBniBrehLmJLLsvHKGXAx689Xnfzdvnd4Etv",
  "key20": "3N44DMsT1c7DtSQ3jZM3mQgGQcJ4MoRKsQQXXJqgh1qmWaALorhx2x6gvbUs2dtFAqUYwgMkGvMZ5eYL25fCSvxA",
  "key21": "2rUwbvBWX4fzNYNsS85zeA14GFXeBz7PP9JuvRhGemmmAkSyh5iQinwTen8oEv4JXCdJ5GmAEoJo6wtjnzaj9ZZz",
  "key22": "3w9DGKL6KCayd1Ch972gvrqwj6rrxzx5m6sdmDCoCRoaP9xc3zK3iALNNx6SWjCCXXHEM7KmFcHa3rNs8if6wzie",
  "key23": "3p2NjGXHcsQTXvkav14WJvJxatkDGoifySSFguCuBMHFbHvNqB3kXVpPoUgPNqzzH2EA88f3E6NdVz5kSAtpNhts",
  "key24": "4kZzq3YhsueUtXxgCjPaYs4hrSxPCvNUVVNE7FEmsETW47unNgC7tVC9LE9m7fJ1mLHQnhQpAknjEp4o1wPkmnvM",
  "key25": "wXgB5zdD1FfqeVKGjMYVBioc5zgp5fu1MBNFCf91XGeR4jWgqZTrsyBxQ9kJ4Yce9QL3GDAHg4pC5NGA4JH9FEa",
  "key26": "632DLoGot4KG4Y2TVe6E3udb6AU4AdZQWAPtpdeeibA8F4rLGB3dCHmnfhTW1eUYmssjRsk5NWVVvdwGSjtjRsw2",
  "key27": "4qRCV4d2ASs5jZpxLdQeqf1xmFC9DBHVaWojwj9ERt3eJcgeda9R3Fq4EzZWh4kT6ghz6YVJYg4KGbjNuTCnjLLF",
  "key28": "5ZDaM6kwzKMC9K8j874pxNvF5FEsfXVzDsSNdCm9JjPmobu9s2mTmH7Z3ik1Bi9kAkYZNwdmiK3fo39Fbp1TdGfk",
  "key29": "2DqAUB9eFazS9T8FaTqyzq67B8gB1TtKgFznpJmhLY45n1ujdUTjRgHTHrLm6GdPeQihPF16Pe3y6ARBJpodyYYY",
  "key30": "5AzJTfjnAnEwTNXZUk39YWYNN5hfTj5oxXTMd8CPeKAtihHw7fT5rosXb5HPUnng9oZ19Z55cGCXP9tCWG6HznQT",
  "key31": "2gvvk7EMAH62287cUtZWhJwRa51jGxxfwitYfPhZtrSJXrGPZcBdUt46UR7WgXQCnTSYdiJEujbH6uvPwFs5P9jt",
  "key32": "23RXShyw8fYNPkEoqvbzApzdJxoyq29eTHAcmmdJ7StrfvKzesePJY9dx435DcUZtTuBaokwK6SwtDzZfBvaQMkQ",
  "key33": "21ResQJcJMaaPfSAAkoGDyVGxZPAYym7Hytba76Raxp7RsTxH1onruqtppcz9z53f2FQurwL49omvrjD2i75tH71",
  "key34": "23QmCN1H2sRtmEETgmqTFowmZddSRkNBiuifNFPxMvyjzim1eUueznDsLbVYaaWFMQK62p25kUA9MqGo4vHpSLAB",
  "key35": "7j2NvHi7HQSCREgRnmDUyznDJh5ugHKU8HT3rdWKfZmBktqSJcDTsVuX5HmWBJD5R2xSEsqQ79ZgMJHyVnucQEs",
  "key36": "kXuXD12To5EZmo7Z93p8toeQouq9S4Pf8GAWDRccMNEuzRntQfzoN3FBLCPp7iuuFRWN8Q15WvwBTPvZYk21YxN",
  "key37": "36FhNsoHh5v3JUz9mdGTb5JUJnLvDJh2thS1y6BE7QmmXWnWK61Nc7ELpWSzwreLsWCvPiCjeQLNve1qcg2yEDAS",
  "key38": "9veyzwxBENAEZ3AFj3GJUSGM5bcDgQsez433ox5gaNnJFYKSS8EzNuFAo3vuwyAJc6SgtqnW3to4MT8QszFHEVq",
  "key39": "wCKaaM9CSSKXUWjpD6YHQYpmfUurHpXPWhxo5VPk8nCtuepsHdQrDvCsN2ir5p1BQhxh9JZvHA32G2hJT6J7E4S",
  "key40": "46i4ULnFG2N2WfwcQx3VW1TVW3YmnL8UAyckuQKnbNxX8WG2hXWv5N9j1ff4RdLjozvp9AjY6KukGPLTEvFZcPC8",
  "key41": "4r3Y4CY6om2rRnmSGneEqRzvzwZAeYQAKJurP3mALPE995YoAEv9oY4HpcFCFHPmvgBF2BaVY3EMHEVY6JTCgsFU",
  "key42": "3MDZf7P552qLFk2GPKjeyoN5sfyjvwyopiuMfNBDkBEAMEdfx5YP5duNrXiBE8FTV6FD9J8tnf2gPBqBqqt1DaUw"
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
