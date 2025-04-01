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
    "be62r4ehkjJe59n6phxtVjBN6AP8Kn6Pg7fNKKhsFRJFB2J55o7fouZQQX8ocX4u6ERqCRKpeMDj8NUVMg2Je8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jChtVtmNs39Gn9aT6Sg3N2Yf7E8pcV5uqhLNvFxBXWYFi2pkDvTtUxGBFUEJMTxNvo2sogy2sqGT7TA6ZCRUiei",
  "key1": "4qjcXssJayh69xBzwyGTmU1iynkHHQfhnjcKNxo8Jy6Lt8k5pZK29do4jP91QpqbjEsji9ewsyavFTedmEvm9DzB",
  "key2": "5Fx3AgXS3auwqyt5gYJBtnTe91CKzj1ixUcS2kWxbWtvPsWofd5dfFqcR3UohHSQZpXSkDU6WMxGUbiX8Va9zEft",
  "key3": "4RPftbwz4cd84U7t7aC4JpQiMnrrwaF2v3M34mZ3vUT7bMduHrczyfxVXsv3UyGbMrSzgoKG4hXhBMbSXfgmngjo",
  "key4": "5kyGp7JFmJAthJugqBESM5cgje7AAjCKk5Xxi29wJQi9poEy4gJHoiekxKeNTyJDXv2HQx1VGYyxMnxjw815KHvH",
  "key5": "3tUSoP8C1bqKw1AcjnHSvVuXHgGEHDJy4CVBU1E19aab5DZaouy7AdUu7exFAmXqtsAbXUZrPVusWSzFTdedZ4Ng",
  "key6": "4XeZrtxBsKzdXAZyTyVgahiBfontizQrAsXRgayr6dn5rWTK9xaHHL7osbCj5od9zo6EWZraYaXbThYyAECXnJ2",
  "key7": "5f2X5wvhHpC7YCo3uV9x5MqZrhpvmyA4SP4tsfnBopkteokXR1cDDnVXXwEgtp8GzECg334FLCi4rihfWn8BCCf7",
  "key8": "3oqCvqd4N8mf1tsJhqAM48SHtZCgBWrpt5D31zMPBAdnstfJkvM6RxVDZ9N6fpkNeHHgwxp3oeVJQtFpc2iZgvmT",
  "key9": "q2NHVdM1FWzYtBxYDmPTyNfKTRkjatjocmiVgA1BL33ynZZDLkmCtLfZQ9ga4wWgDVfXz9uSVE8CxNU1mq79R33",
  "key10": "52mYir48arU4huoq526jU7Pa214MzY2UGo4qh9pZZBgXhPwsCr9ZjcG8a5dAnQADhAfwqiEv4UBuJnEhRg9KvM4W",
  "key11": "2hENtA8r25iaATJgtwfxkiBXPxwz3vDbvRuZ341mhFzEzsB4r1RRKAfAJ4vSacFtfxbxwwUhht569YDFQYAF7iCs",
  "key12": "UawwQ8uqsXkLuVPw4Jc98hhRFGDpBZqg5pW1xxFXR2wLPn7o4f1Ao4Bj1Pgdb25wzkbG2wjUH9yNibrTGHr5qQf",
  "key13": "4Gsvs1RNoB4KVTJExjVccBKELDQKY49snzrYe6QvDV5pBbFrdsrCLHzN9TiTZunX7FdrQAp8aSQuzKounoVsu8He",
  "key14": "3nmSsYsz2PeYibt9UwVM9en4yz6MFBhCuSHtaJhFTzAHLqbAH87MXSXPfa7wg1dgcQJUQdc1Yhu416gWxvFgaWe8",
  "key15": "4PEzvoVygz3qiTXgS6j3f7XiPzJKBfLkPewiTLwserfNLNiaer3RUBBbWUsLv8fJ99jcruPyz1Zrzn3fJMtidrzC",
  "key16": "2MX14PLki5TksgVDHDz2KyHLwz1GNJUU34upUyLfrXspcjXGNqN8gKJW8XNvpjJW2Zq3MzFnzBzaPQSJGUdvhJ48",
  "key17": "3f7HbYMBBo8uTpe4i1ZZAXupUiHanHXEbqWar7ytRNbv97ZANsu2p9LmhJxBRYteensjgpCpfnANakhzLALrD78f",
  "key18": "4mDt5UfYwdZdCL3znjCHSdiY7fMgeNyzo9SJDzGNPKEQcY4TLwxky6mMFRtdE3JFmFd3r9YVBaUVULrT61EfXfwi",
  "key19": "3bC4DfrcXQiHXAC2xFDZJi72qASGgv9mDvdSMWNJn9cdyFJPEBdh8ZS7kpS9b91be2L4yn86BKKQD6r3AxPaob7Z",
  "key20": "2QYLk66BHTXqJXdzfcz6mQMWwGVHSsCHeyrv2Qz851pizi6SPcrueh5oUJPw8R4JMNgMu6nRG3hNyrfK5bF7SCu7",
  "key21": "8q1xRfNLgD5GUCDUAe7UrCCdMKqR1tf4WG37q6P1di2nzv1XDGaXr4SteEdjboyBYdzgYAn8fbTLfGDcp8Fb4ec",
  "key22": "22EdDzLogYkFRUex9zpTgGhp6wnYwf1wg1eW9cRcj1KummCrZXcq5nrYDgCVkKvrD7n7caSEEwfHZkupRQbVcS2s",
  "key23": "M3aMZxy2teYEnb26Y9Ruxt7CYokguSXdWoRvDrGX8HYgfP9WbWapZrsZBxmK4rjkJr6vpEzx1Rw1gnwcAaFMFuP",
  "key24": "4W4LocBcTwGx5VtaniGaebQaumcFSh8Dn31S3A66i6YVUgY6rjPqzCQFHc7YGmEHjckgA8cS9XTERFEaZff19ZQR",
  "key25": "wppnxpJZ9YMUC5kBPJtZ4BRkfXQ3G74pnJ2hoRk2ghXJ2VRgWPgkfBD1SgBmuoxwbCLqQ9zJ8ijbjNqy1twQBEi",
  "key26": "2hm7Cgc1Y37mJtq3m6tEvd5LbmVjNVWtZ8oQX83gfhkDVcTY7FfkCTpLpFcTb3hy8qje1n2J7QLq6pCfSoVJZRLM",
  "key27": "3QrnrLNKFLLzbFsQd8xjSq3eCCStmoyv1RXwE2wA7E99VfyaBKpkwjFVU66X8vfBuii5jvLc7Nf9s9qtDVhcuW3F",
  "key28": "5rBCHnjw1jqiA7547nahxYpFxp5p3L3uA7AfiDykYPM3FkMWfDaHxnzK45dtvtbnyPCyn1UEWVFUEKypBgJBqCvE",
  "key29": "3hPdSg7r7X1xbspVSU23wmnijN5KASYhVzdv7HQW3AK3XSq3mPrk1Jb3ozLYBYCjX6arbREa6AaJV1oRgQnPdSgE",
  "key30": "62aKG12zzJ6GNtw3EJDR14VPNEQnnnnbbDdQJ23yruE2BJcJRoMBKRAc9nRBcrEQM3Lcwq1N7CYM82ndsQEwXChF",
  "key31": "62zVfAkSdNJcDzNCzpJvzMf8waWErEJFGtPMgHyjYFwGaTfW7c8JPvzMSaWvqLuHP9HkuC5z47fGSrpBWur5N8Yq",
  "key32": "2ZoUDEt8veFpVZdDikPskjewubW83TLGRH1Fc1p3hnJFspQkYLieDcf2TfKmNqNMt5uepbNkN1jdNqRHMndJibsK",
  "key33": "x1GTQVTogjnz9Xff1DP1jQEHYnW2YCPZmzNq45tnsxp3nCyrxnJoVjAJZxJ36tRVnKYbuTjMGfJofuM2B5hJrsz",
  "key34": "2W32wGqkodHMXZ8XivgTuJ6JEqmdBvqNtCiybHvBZh1gSpL8w1ieqbuk4Nqejz1Zsds5DmeEQNtWQqX3JLF88DKr",
  "key35": "2tfpBEY6Q7YAK5NDp8J1PyAXkh1HVXzgS4wUfrfNTSNWBfaFAu9HkNyw1gESLngaNE2JgDohgU9DYGyutV18xM88",
  "key36": "2hQnm8AzwXVncCHFrZ7WRjt9Q5PhD8bFX6TBWorKKa8zTi6vikt48gAXMyzNfHb6wc7EZHHKpgBiN25kV2x9PmBn",
  "key37": "3PRaVMMdKhwhCevGiXYKRxSMCRJeiQxoDFtQAHgd7bbpuroXu8BxvqU1CAWr4pbsiAjZCTHd4X6XHrmEqSpUH4Em",
  "key38": "3UpEiRWACcB3PvpiELBqhXjWGGoWXxLN3eWwUqSU5FhYx1JoMZWNSVzUZ7EvYDVdcgbgg4YtP3j8xE7we67AmxTa",
  "key39": "1cUopRH6QKqYSV5Z5QRfLjUbCkUQTP7LN77MMmAi2JtatWu2vnwe72Bo2gag5gm8cV5biGuS661AYDHJD11dKoC",
  "key40": "5KQbEbmRrvtVePA2z9be7QQcDjncGjSquYY5iUCjoUMUyTzBeRJjhtbnmPwjKKoNzsVk24ViQphEWuYTjPjiJDRZ",
  "key41": "g1337Cdtx3ELDBiAUbQsaMpQg6Yj98nFj9HcW6LeqFB1k7ksXrxfiVznqu3gU3YA2ywSjYFPKYBaMMHX3jxy4Wm",
  "key42": "T1926CCg1dnNr3ZVkmBeNjJxbcs6c4Fk5JerYAW7WLh2bYx3rZDFjMPoRbcs4fejWhTinKfEWuCDnyLqSvMmVqA",
  "key43": "fVBHGDMLCowvCSqiVQbtSoyfuFUJxc7o67p5YwhLDYyqJpyfyo8hNfHwEySrCaZ7i4ZHdp7jNVb4SA6Qegen4FC",
  "key44": "4y5ETqHawfQSuVYhJw88S8X2LS6epqCiVneavoKFgHo9hA6VNs9KUP8vggCkZCsrkB2RmquWzPVWmyrKKYyYRgTa",
  "key45": "3Z2iRmuYjHfDq5X1vN3ey2TZE6PzcE2GzavEYT11fuhc5pojhkKhMi1XAZD8aPnTCmNUkd4qKC8kxW3h67gyHxgi",
  "key46": "5YohWuc1wVdgX1WyVpbTtXed6tyWCzQZcx4PyxGEgUuEE1apxPamo7NNHrXDWDGFYvMiuiJHqcN3Hh84ZJekS4rZ",
  "key47": "5grdEpEnx96QYc4HDdWcX7gUmVN4bB75ScFwhK8tGSEGvPgKQgZ7oaxMQ98UwGGpCuLuNjaukBKjaqHnTGRXQvQ1"
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
