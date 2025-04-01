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
    "3EmE17FpEHQviJ6xT9fxiWaQ3yJra1gMq4mdx3oZcW3g2443dK7JUu4nRhmfS9hJV2RMYj9EYGt1NbTWS44g6v5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21PSXbqGe7t7Nv8PzZ5zpGPMBuSuK1p8BAZGHqSBHKBpFN264pGBJSBxSjFiyGwj8sbpCe1885eytdxVsovppaGn",
  "key1": "3AsRvUH4rrCHLXEJx6CMXMES6Tyj8EKB5twKJZSb26uGLdpJPzzcs3Sk98WKvLqBJV8Sjnz834sR9eCtcQDEd6Cz",
  "key2": "3g4b3x3hY5ay3Nk9DAj1ofQZe9RKDiHR4bBfujmWhTjXyk6NLYPBwYFAfSXLhwyFWREnMZ9P3uH2UaZEzdHUvots",
  "key3": "5zj3Fio5hXZqvaPeBrwjQZgiTEsc5iqa1U1W8HvKVHB37q7zWuuY4CuBSejJqgQia52W3iyXu5oVXwXbirEDADa3",
  "key4": "2ZYeDsE4u8cvU7g5TXnfygTWY3EQejDKaKPdvJGfkrc6MeSJGW5H6BnDzVG5VYpAzBKp8odJktXfmGh1WDJWuDoA",
  "key5": "2bwFW5AeGzV9mpCqrYjDvNAN9gwH3UB2XpujzLik1qhf5vgEfkdfCjC7L5p1LX9qn7K1S5wxRqETy1VBf8ZP21pc",
  "key6": "nN4tW9WSzb5ZHPzfHZbNUCPL5HYCRYadTScnRhKfvHKeFsMMbibgXKgS4cFYnEjVK2DoWJhstfHixbinVthJLY3",
  "key7": "3YWtGBKq4HkpQsuBuxa7TMoavKZcu2mzNPVBQS3SCBJmrcpf2hntZ86rAPWXZywQ43e68VP41mH12oT55GpsBC9Z",
  "key8": "2HD6ibDmQJeqNfthKPyD79djAgchsWV2DGLZLJZPmc8wnwp6P7H99vwfSiYjwe1YajQDNSqkjcXdkgVbzwkvu58v",
  "key9": "2hcf1HHXpTjKAksPce73q52FYaZyoZei9DzCQZJZ6r1qrWrSaALfBtcoQiRedF9s72akm6EJCiH9QsaRZtupfAhr",
  "key10": "5Gm1B28YVurhnQZjtaurPd1G8t7xhuetKLkrUZS6jsaYhyHVyrp8BN2j3zjMHGxPT2jzF54a6qsGW2DPhTZ4USmz",
  "key11": "4csq7LZPAeCRd3yauKPvkgLAzicUmoBXo6zKrQwSRxg2enQectwVyU9z9B1rZ7qdfJUCxY5u21iqiua6eNj8LvsG",
  "key12": "rvvbt6t79GwMsJjWzA1f19zCVeuksWsC93nDT4F6v63z7Zodyi6HkU6YtgioJ6SQwn9MLpcc3eGGutVz89ibYQt",
  "key13": "5D2Eg37zhej54x8mVBnR1EyYWiYPNk3XsRy7BvmcC4poLMM7RWzPa2qZo3PHrAZcttqvsZGZS1fZ67MPsK745BUT",
  "key14": "3UhQHEr2goKLcgbCgpsjp2PP6Ewbn2FzpoM7XP2FudzNwsPZpvZy8fV52rp8AzwFG2wa283kfrM4gViqdUSaGPuC",
  "key15": "cYVngRhyUoXEMw64zkteT7ZeM32vubU6X3wFgRCdyYHKWUPft8kwieuABD512TuR6VjLLnkWALSXSVzKryjqANw",
  "key16": "3v1BBoo5XH48WQqBPURqeaXn7RuaYiSruTFx4HDg7MoeR6LF2eznmR8BiqSkRDN6mtV1KwNfBb64bTkKqvuRAXgo",
  "key17": "NNiRffgimLUvouYTHWhrgnt4SUZWZwfi8cpagmSTqsG7vNi2n4zq1xtqqbkUbBvwkiXhJvRS2f4ckt9DeAYqeG2",
  "key18": "618ktLWCaoUuFxJc6bvLnhZUfJPnCMnNterm4NLyrmPf2KrebaxdXWLoAFPgxbnH9rwfhsKjtjotsjNqMHUm2Nzd",
  "key19": "3Dra5PGo7dfgAchpcPXdHcqCXmpCcrocsEG9UQCRuJHCt5aTwUt5t5mBEQzRMEpzmnmJi4baFihkBHeQxj6xKa7N",
  "key20": "5bkwThd3TmpUDJKo1hyyRcT68wqk6ndxb8W6qnXLkFm4DMFqd48NTEs3nKcEM6rYCEeEvmgw1Jtbe73YzuipNCRd",
  "key21": "262GoaSXnfZRvCMNF4ksFCP71RX6uxPpFZCGqQGybeZCj627LTxWYThbkTCFxbpeK1VufRLu9AQRRmjaGer2BbFa",
  "key22": "Bhp62FKFFTieAr2uuh6YEb3pN5uJkTDaS2vRF5SEDvybvzdurBrqe7L2b3g3DqaYQYpwfeXkj2wHHZDbW1dmvMe",
  "key23": "3NLwqMFYCsZGKepLgcUinJuLN84GBV6XRzCCy2GShfDLb9tDnpbr18UW4p6R6jrSWxQRLQhFQHA4d2bfZR9EzAtW",
  "key24": "5NDUgtbaY9u4yNSruEnBLEMAoW8EPQhdZyYHaXsK7s7vJLJkBsETB5D2jfg6nHdiK1ZDMWKYV8viEg8nqk9FjUQK",
  "key25": "RNhSAr4ttsWY3zGboBZ1q5C8AHiqu7nxbWKNmcaJCTjcq6epbeBGE8igWANVJLeY7MQxxAdNPmcNJvGyVXT6Jky",
  "key26": "5WSSv8gQXKcx1xo8bvSwGPVvwvmCYKnhP7oxkLKp75m6HCAKuoisSeVHviRDN8NQB1KrpD2GgvZYc5g545SPCUoC",
  "key27": "2tBFtWcEVaknHn3r1PaAUgRf52owSwDGhMPbT6zMVBVDHDEnMffw3UyFDFmLSXB9SEwr7cKMaWGiJSHoxGUVdtNh"
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
