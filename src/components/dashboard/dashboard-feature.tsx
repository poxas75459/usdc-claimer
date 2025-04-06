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
    "gFVyoa4TB9Q52c91RZk5weTdmZfbscUciHz1XxXBWcjQnsZiUSAGc9ZWW7dWWRqLetGS3hVywphx4uAFE3E354e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKbEbxqPn19JdCS28TLxBLzH2M5urpycuWk8GcXxvkrLsqodc483xnU45zRa2LbP4wWWwsFCVkGqjCjfTZ8Vgin",
  "key1": "3pZbHGzwCEyqD6nTJHGAZnijvLKRi7WSZvDKFL867KhxBYAu1nhCavAC8d4yBJzpBUTmcNPKvDhcHU6NREDXWWb1",
  "key2": "4Z1rtHjeq1ZWsDd2TeArbJ65ZewkaQKLEgGHDNRkwnDHRMNhGHxoG5uhKTW1Pb5fPy5A1h1FdBamXpU6SwpfUD8X",
  "key3": "7PWR1u71gXr8Sx7bxkgxToEUEaqDkKJLMVkgdu1yNTi9ZZ82JXoqr6D7WBDCNfEnBhGsyrWSK9epSKgxQWSQRDp",
  "key4": "5chSteUAeK35bjcEUebZaUhXr941xZtCXbCtrfu9o4F3R85D17CejQwrWDuZXMLYVsciyb8e9cr6WXWesXoaXBsP",
  "key5": "41U5Vwi5zNSqZhdxidmRyM5cEWAEynvGBTxqun4roV7GXSPuC1mKBFnQChniNQUXkShfVAqxJ9zXhkCGd3LaBmGs",
  "key6": "5ob7JurnZvuktjzdY1zKWfnZcGxu2SpX2Fup5hDM9nAnChdXrhFWiyyJNRFBh8CYgtPbPgjDM6ZdkZZhrnmtAsvW",
  "key7": "2uXmQDquiZouv5xzcqX7nkwzQekrqxaZDAgScHKRs7RRgnkmpn9QHsFD7SNrzRTvrTcGgeMg9ZMZAsXzov4E7kAa",
  "key8": "5U6Cpwkirr4gBF7Pv6nAoyRC2gXA4Gie7etBbYkwzKc13WF1Pef9TySHjKsLBffKjDEe1wPeQEdBnhGSRZFFTCzL",
  "key9": "47BX84doQTYYyUme2YZKhhix4wKLBE2gy6LmK5nKxussTY62FnhNUo8JsUqSneX1LX4868A7GCa4QYbSnHxztNRn",
  "key10": "DNdiZksmqzAvS9E5gKB6qFb29puHUDJNSmY3cYYPSGFkE8oojtuD9LSPwhvmS8HzJJGevUnE5w2AWUBjgcwTkyq",
  "key11": "5UBUnwUYa8kjgHU6C6RgU8KNUwTfEVvSYSJBz81RaMpycMDKcDyD4zMHSd5x685XYK5iRxyTA2LCKnqoku4XG8Qi",
  "key12": "3NdbY3oNjZ62AUfwZZdopxSgD8yAkvN4TpZscWJ8EeBJDuWEFJMjwRvP7mZCH1AQBiyeP2YmPgYMnfTFMfguyKj",
  "key13": "2SA6UGuu4arjNMrCqtqGGWW8YcAvTTyiSajvKpqduFLTpEwrJnHyiq7d57VFGpFGj8tZrUHmdtd2fqycEYP61uRn",
  "key14": "VMuGcd83F7uLkm3h87d5T1jMMUEmw14VGJTqsjro7Gggve1iiJLBzxFMAeLrSDwPZNBVE7YHFrkSAu7EZ2F17kR",
  "key15": "5PC39PoEZqL6CHhcv4xv7yvJwKpRtnDJFTtFHMuZprLTByd1u5zLRG6mQzHNvfN5dtjp6zZn8ktTkGgnXPAefnDu",
  "key16": "2WKcUJknPJVQy1AbyD3UF9YRpK947L94oa7Up1TBCrJ1xis6Beq3jFeJ57ww8UbUbBzraqXWnh7ZJEkf4yih6u54",
  "key17": "xfLbKL9kJaAperYmYtpWVmcm3V6gVtYD5E1pL75jeovMDfd8vC9bjdUatr8nSkSqGYaiBbgj5zSQgtVxgo3hqdQ",
  "key18": "uQpbmvEZ3RdJT1Uranpw1yaBCBto4obSGrarNStiULckrnASB4JL7emCbExchKsgkVqbz8Mhv3e9g5X2WvyiiRi",
  "key19": "PjyqAKtH364Nf8dudtsWhKkqPNaxfjMhiausrvpBdu3RfskPKM81aoeeSe1DR371jinzpDuS53PBSwAnq47oPTv",
  "key20": "61WWjB5p5bRdMLHpKgg3GWwQ3g8rSY3nDJwT3GLKqxBLTC4RYUzhzWh4gpTQhGarqnF4e63SrKUMU9txHCW6SNvH",
  "key21": "qRqhc8iqDETn19TmZ6b55tJScUbcomNQHyWDFLuskJLrLP4i7CzYntwhc2EiiBxJxai6yBeK3dLfVSSuRiU9E8d",
  "key22": "38w6hC4bgYHwtuHRi46McLnCMhp1vhbWMXTDQkc4nruHcfogxmruS8CoHV2dA7Sk8xVs979LELmGMKSEnE33dHuR",
  "key23": "5BGEHuXx4Xy1svtRhFdFzeu51QjoaNDuzq5ortZj6C1nKSFQDAtbL8yAEkWYn5FKw9DHGW6w2wNbTMf4xi7cV6QG",
  "key24": "VxdhfPzsQJJDEepZ1tVdMHSegt4DEk9cgm8uif5bg6wRADPwKZUJmPWTVbxi5eiczLRi4dTHPZpoTfmvff7Vi87",
  "key25": "5X2cEb4m6FfNQ7Asdi1o56893bpzRRqsCDddPJ5JHmTdr6vWKXL9NL6Bg5WuYSaKfDymBkxR1DTUEB1WNXzzUpnB",
  "key26": "nZq6miis4N1PqMbxkgY8yg4w5mt2wdRCVqB32vwkX8N6px3dyXim74iZw5DLTJWj8csHX7vGAXwrvw6MHQQ9nyU",
  "key27": "3fZ6tS7396JYQcYPeNryCbxXhaZ5xPemLDUK48owQXYcV5Y9CYTixVkzEUy1us1aq52aemYkQhanSdiBNgAMqrAq",
  "key28": "4KfQD3kSGHjA2we1PUcQo7tSjp5tSfHGwH78T6SQqKSfoQPXUyChYZrtQiaQF9vMomKQJn2YpMLGJZ5DtVnkt7kS",
  "key29": "sBcKmYn18oR1Kusp7EdsV8wNZGQaHEZwb3xiUi4THj5BiiqxPwXrhdDPmrzLDGxZoTzApJjPrsBDNJEu4FSCT1p",
  "key30": "31NUhdT5BLfpx79FUy9TW9nASUFnd8Z6YCoUvMb19Wu5Fh9mjwUivdVV6HAtx3YR9QDRAPubomUcibmz1Q8XiAas",
  "key31": "64FcnqbACqfaVurcEKeN5W8RwVGVcLLpB53sDNRaGbasZPW7S2S9LewvqK2sP7eUzPHLHKHH6sdb9G7snCKeQ38n",
  "key32": "3KQ8RXHTLVWxDtzZKb5KG8npJbNCwnE3DYJv8anag3mCLnLRGhsn9NzvU4qyFnacB1fRYVXtAzdHWgh4PbqBzecH",
  "key33": "2oTXzN3imLkUovHMiuQUiXToEdRh1pA5r6xm7uPVT3L5F6vp8UG5WDdP2yriU6ad8wmBuJhtkcRovVHmPn5u68dz",
  "key34": "2vz85RKUBXzetBvZpUp4HZuxcGbSru7bhpGJRP9SYZwq8JGaqcvpLiPc5XvHfLBxByetUh5947YPE4khFL1Qk7JD",
  "key35": "27vhjw52NpALVXzxsEFwwJsK4AajBqYw7LyLcYYYwaBA4D2tk6bZYBLEUyG2BxRLimHEufagKJdmvXj78CRN8b2o",
  "key36": "2RRE3hv9HGUbyZ1FrNTBuCnL14pRFw6tfxo56F15XBn7xpZLzTcHyoaxnNHJuJ6arBgDJw9GSzwvpJLZUBRXDFWE",
  "key37": "2BLdFz2VFX8hFtb2aPqSYPemGhiaxfyMWWQgMWfQrMJZLdUiP8saa3WfzyTjMCqixWAzWYWwcguBmAZebLYMugSw",
  "key38": "4xGUtrrKb68jHsaVDrschBWgKTdwWRBw3hiBgKB5Uvz2cxgibfyH1Xdn6K18Q9E6dmTJ7Nanuk4esafKAtWWFqnd",
  "key39": "gUzqAq3BPu2u1ooEzYRjwwASnN7yckdUPc2qGFmc1F4QomMY5TW5d4F6h6ygZqZZE8TE3FZekYEYkZipSs4rwxj",
  "key40": "KnEUNETjZtuk1Mi99QSLWQj4kR5HqQNRCEybpuVP8xcER9ht3Lk3TK5QpzJa91nN25ovc44wsnuE4ytL1Ex4ecM",
  "key41": "2mgnX1VMU1xhFXaSush7brjvfQAZ5kEsXD5ieDtza69D5JvbZ6Pa7unmkna7f5zNzKkgWsKK8EDv7C242cBVvPqa",
  "key42": "3vyHkLUDJRqcDneew2n6pGxGD4FRiDuVuNUnc7JdWmKqMakpPwt4S3Qf8ndw4LaSNia8gjKHNz9hNvs7y4qC9PTx",
  "key43": "52MygX9Gx3sxBYbWrbah3DqTmuPdip2vhBC2bR6gAUvifC2u9ZahApurvA1QZeEvDY624HKzMkZYiv5T9ZzaaJXn",
  "key44": "4YbrczmJ2V6FgvsFbjfbka4aLN9PJ44tCRwPq8qjhRnuJEKPx6o1fbYwSqP3oGymXK7rhB3v94URMdgMcHcxkgsg",
  "key45": "4VUCRWRvQW2vAaF83jUJmsp8nNVULoy9mdj8D3kPdW4JB2XDAP5EyXDPYWWwow2BqrDvRhsMB5t688zvfZg2Sfop",
  "key46": "5UnCgqJMexzJ54YbVVBFHd7m35kwie8461bTXy6DWHDcp59L8T2uYWcmNhujsKJiqR2VsTacaKTL8Xqidq8VeYFY",
  "key47": "5nNRfNYRPoKbvHcD6sKxqD4w3smyxQ4raaGZppe5UzfG8ASA1V7gMduzVeYKJxGjfKQhScYT5tNDB7pp29Ed4PfY",
  "key48": "599AvbA9GUNpkFCu1jsMt7swmbnbURDW7ueZU5wQDSiex1hMxcm6EQ92LMmrkJBmP3NBpS3NCnophTHSUWA2t2iF",
  "key49": "ky5HWnizaepYaafgofcYidm3GPYeoXTgFXeV3xujp5wQGE5EdkX3fsZFnbzFrvWnk5RPsreLfcWBaiXNPSbRzTT"
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
