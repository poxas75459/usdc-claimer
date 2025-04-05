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
    "3BpGdWuxHhxV1hs4JDeqZs2MSnfFdYBRznxAG84kkpRBSdvgoXaKe4pQ2U2FaDCEkgyVH5TuHRrmg3Yj8FZ13xWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rx97xacmaHSayfXXWTkPNRdSAgzq1Rtxp9Rz7r5jnwH8QwinUKsQxFokCrXMTS4qVKGN6sss2ixaC3ukCSvHbu1",
  "key1": "2bJJH3Sjr3gSsvYxtiB2HXs5sFDNQxEBcmWG6DCvXspV5qnnF54zeeDe5kjAoQH9uvtpcgvSGwzg8kZQxbw3ikbr",
  "key2": "3i4yGW7WyPeBXVxXTBwMN5SXrQMooXSsz5jE1MsLR7hTpR8K6hoSP5z6UPDa9Gcp2vZw9axLhyryrjN7p9aJbwCi",
  "key3": "9Y7gnNceaHWaDuXL1R1bKqpW3mnnWoQfYyRWjTQB386JW64o7N3wS1kvZF7ey7pYXTr8QzxqPp922nUJu2MLhyA",
  "key4": "5tDV1uvt6w35wZR92KCvwwghKSgEDhdXGDrLjpB84z8cR41wWmPGjRub3Dajke4cAhg5NSBRWMkyYKADNM62NKom",
  "key5": "5PfZ9DHYP34KZRrYsVAKurj3Ct7SsMeorcgrfiWe5jdEcZ74idM9T2hVTPDdvHkmiasZPvQbi6ioJ8CDTA9fRxaW",
  "key6": "4zdeTJpXRiC2HD6nZ6NpXpi9ewNiDuVWncKWW5pKKX8BotdTRG2aS5nfZcJ1dV5i9YsK4fczQY99ruVVerooNdiw",
  "key7": "9SmeMuHGLqWk1Kz673y4MGKpNFGjDGYvpU1CibkSyE4XJGLnUSL8GZhoGpR4mbHLpCr4B8jyUTXL3WbFnjuLaaa",
  "key8": "47myKvAZHAb6Tbh2EqJWhBMSF5DSfnQauGtkAbihzre9E3zdYKNfV5ijp6khKjLQUqXdp4xLVC1rztpv4A8ZFeYD",
  "key9": "HJMbw6zB2VtVsrN7R22xtHVUCMS7mNvvVhfVy2DpResNj8d2GVagGPo64M7iHVBBEwTKpdyum96sT9KEi6GAvEh",
  "key10": "2DTiNtKmNKCZ7Y2XLJCwKeTio4EQiWvkGzkuJSnMDGbjKDj2KDndxRHVPcNty9m8V1JHHTUR7qfc2D8qqYniMKke",
  "key11": "2BraQt88mVF67nXY7d2hFV6KsUcnnvFQZ84jM854NVTEeJtwx7YifwZSjaFLQsNfJsG78HCQG8qHytuB4ucMV1y4",
  "key12": "LTc962ttfkaoAEFRCpQDkyq9YgtnbxYycx2iFCnmmsdLfPJph3yyW3enbUSmEeA96VX13KRpz57oQxc9Sg2uYyu",
  "key13": "2DpgvJpbsUzYJDZfr6WRCXAyxrjDT9aL3JfRhmA5An1d6JypNtrAa1rJYiuXXD45f1zwkt53wsdXLmPyzdLRi4v4",
  "key14": "2fHeckJakuEEooERCmPpBih6z2NWFvcLbobREtvhzeUJaNf9y2KQMVxwz12fAkMEUsGBSk67XTs4DVy1aRLRM21Q",
  "key15": "4U75AQq2JUbnidHzxs5G5TQiuovQDpRHfm27vziy6S4FAfXQJoRgWJNB5BVtf8D9L6kFEy7xsBwRfbBJUEbaa5KK",
  "key16": "67nVA98YwQNpU1pShLUs8UzWtwK1UPtrA2vUUAV1nj4SPegngviaj7bCT67MYnSVaFJj8gLswqtkKi5dkae4YZVP",
  "key17": "4kvnnAP16WQK7TL3MyoLhnxpurtuSYgho14LiN7DrGzuDsLTbnVWoWK7v7JdjmMduhUhYUDzsZgMwddCGAFQEsBC",
  "key18": "3EfA45jYZnGHNDHduhZYmt2YYtsTjrJ5n5kLtaX7n5AMG4ptJktMd3wkrhA67VttWVGWk3BhynbouKKZW31ZTxQ2",
  "key19": "4R42v8TncqoAQYMFGeUhwiWE7K41XgPGs6feN2SZieU63bryxXB1gFA5K1vCSoaFnqUcpZsStmwrvajRWeBqa1AY",
  "key20": "2GW7axhK4rsj4sX5zfU4x27Xg4dyaWDGjrLRA4twD4gYBopGYZ8P148bTXTw5jz8g63Eee3gop6wibqFWHyqHGy9",
  "key21": "5pqidkoWBBaMn4hUuGcjvhuoWLAjtW7gCD6MGTxmeQvtZjBxUPQWWj98KsESjUJwRjLd5RDANnSUot6wrekLCAGr",
  "key22": "3zeqRBQQTDdpZRg5QWsrQyLTYMC2ekHHrfwboqCDs7hxnGoppW7hNbcXGxR9c7MMSNbnJnCRJrgchoSCw4kQ7JW7",
  "key23": "U24ydxMfBDcMtkBFpvc4vNYtvgNpgtRSv4EPuWpuVdU3ffvkF6djhPxeaR6vnwMuwFrsLjwGvkVvrtZhigSoJWy",
  "key24": "34efRM4C7CRon9QihNmPuAz4qoCRy73fsaAUR68sgYkQ5WG1Jf2TCSC1vyVyQD7Hx5VtReaE1i75q8CX4TVi5EDp",
  "key25": "2xzida3p1SYf7WWNd3J6VekM2YVsfhoFdZGxuDzx81WuF5fgutLvGYmVmpbYZsRrffEJ146qwsfYkpDpJjAzoSUz",
  "key26": "5oqczxpAFS3aupKpz1cDXDA4WfiUJJsJVqm4G6JjHLPDtSckGgnvNgviZJVAiJmny3b5GbAVs1Yn6huQs6uoALXb",
  "key27": "5M7xE1T8YqgXYY43fWgR9UG8PKVohm7g2CwR9hqSDC8vU3pToaGFm7F2qijnJtPuTutHX44qK3bh7ThcN8nmUU8H",
  "key28": "26TUeABNfNrm6d9owoK7wboyPPN5uVTEzueGAHBHdLVzrapQNvpMxQy6wxkHXRfXjk8d6YaHs3B3tEgeDDKQEnj9",
  "key29": "5jMncxbKwR3jJMwbY3cRs4kdvpLKJhx5u6dHvDVkMbgPw626EuYoQoGrNDPRaED5C5rLpaxSEFf4ZowRJazHfT2A",
  "key30": "jdSAiF1gTytFaq6NBDTk3YxQ7jPEhBbSHPeG5VJL2sjjmjSK76EcPBWf48a8PXEduz288T6mBURiBNx8zcC61oJ",
  "key31": "5jpXwbwiebfhqfQKBGBW9Ka7KB7vDF7hWTcmJURNDm8Ep8tK62jGADF8VU4bnUycpq6ZkvX3SkB5Ucy54kMFyQXq",
  "key32": "44DLJaGW58SNL12eQbYethJRRVg7Hh1eBzVfZuFTFrS3rvnfzHHZaSDRLyJKLL1wQ87hropVSYez5hzaLV7M1TH8"
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
