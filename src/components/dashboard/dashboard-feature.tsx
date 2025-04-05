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
    "59ocwDvPq7F4JqS3Gc2yXT963uA7bQocZ5B5isHXWn59kfuFC4z9u511EBqgaHrcELRT9rHub452KVRwzjM8qDwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrGnPCHdo6Hatzd59rnkcGPxwnugkTBNBR1J3effAD8na9RYU7SfVP9bLh3gNU3pxfD7MxAYoGxmaErewRfGp2e",
  "key1": "67B1umBCDKoxWTX4bnY9htFWB5D8XBhjywnXULPyKCP18ydJw8xsSi7bxUWjAKiNaBPbtxrxR2C4XcYU8hARgJJ2",
  "key2": "4fmvYaJNRQSK42LKwTS9t849ffVtWe6t7TPqgSe9snqGTVurYCbG52yZWdJAq25K737aRvTttXD7ZiPdYm5MThC2",
  "key3": "62J5Cj3oBtV84yckrwZ15s3ejV2FDNebAn6azXXcARv2sWVzPVq6WeGTRFrLANc8pYKgJQUSKJgakdGUiThSAo6R",
  "key4": "54cWmturWqXccMubhf3X4QWtivU5VuUs2Ysjwfj93Ks18svdHNH5BnLDk7AVnYwQ42CLqvCq7HCNoa66zSeGUadm",
  "key5": "2QX7MbRh4b4YTzk9p1FLqZqTiHcDkHCg5sT2M1CoP5oD9fwhUsUCSqdre5UkJmPcdG3UcYXb13JXLj5VuvUW5Wpu",
  "key6": "3wUwr5YPoJZkoiLyd5ZF9NS8jePw7MPFcE57u4YNtN96vD27nncDLAkZ1MNkAveiyUfxJt7PpyusHoKeMU5b86Sk",
  "key7": "4wYXi4RZj5TEHajzztvFQxWBfbX3393W9UEhnoMe7JnqqPY9nmRFunfsMBcU8HmD92JDncZW3DojW4pkmqKci59H",
  "key8": "AGcvipkbtJkboiAMb2MNo7eMJezu7daUAsF5yjUmJ6C48VEF6XRQgPKPtgQmE4QP18eooaFd4erAFkSNSrRfwFY",
  "key9": "2BWPBvzhiTqqMmoak8ugC1q9sbRYqYVoQ4b5fvzVAGhJyDWr7SwqaAQjxf5KVKbTUKufRVV3KEyxh6jA6YPuNNEP",
  "key10": "5VNxqQQFxJoWqLvW5Ur5jC6f7hp5Cq8TaT87nNMKKsWfFLmUBfzgQKr5eJZC42FyBZGvz8nyPwB3dAfqVDrfivSQ",
  "key11": "4uKLJF2dgvP4eqpWLpk1Q9aVhSzGneruRisw6PTj6pFc3zchQNXrnbSz46N1aYrwUPTziCETvDmkac3H8HZTgCsa",
  "key12": "5xGfDmBhHn2cg2L45BvBJpEKhJXAyh9XZUU4mfvnCZMNKxfEwmNRPJNdk24mQ7nco5b9A5sLXYfvYqyFLxhzBWfN",
  "key13": "4RLhBF8tE6yQA2eQ8K65Q5ZYGFYpsWAVm5LyHbr9LHiaRTRZsg8c2nLtPwBFkpRN6egMiWzvMs2B4GrfJyi4kNiD",
  "key14": "aSGTAMSdtcTxdDaiArmxrzCEA3qPtZ9CjjF5tyRKcpgmyGV2jKEzQf6934FAUYscimwZ7BNZGvV77E4DorJMCNp",
  "key15": "4k1S2gcFhmavMHJRnEP1UzjboZycV98haHCUPBavhQTdxKBtqsMexaXWLs9VgjUErMqhKNCykQX68Uo1MruLtqdc",
  "key16": "2nh7Q4vkKpYxUb66xPNTRkYJuKLpwVq9wbJ5yD9tDGo2e7hfEZZskmzaEyApoPydwtnvWwvxFQozzRmkXFEJ5DJo",
  "key17": "4eTacKbqpkJjuDMUb8FAEejQcYiURzJgnPFA3EzpEyU6RAhCj5uHP6VmVDjNK4DVKzsoVYr4FSJprsKMbNiBQu5o",
  "key18": "323gNPNFfnc57GAUAdMrSpojRxs4ZoeEKLpjbhQgUPpcb99GHnMNjavjbUwQXwJEFxREVxwSRPY9g8rq5GtDsSb6",
  "key19": "4GyFouHDjZNebsCR1H6MRXg4EredXfkPT93B5w9kwp8LeabmELYZoDC3QzQE7SeU74UudVXPDJPYQufM8KXyjcUE",
  "key20": "3XxJBg8yr4JScSyGWRvzoE2rEwiUPPsEWBj9ieWcjCWd6UGJHz3TZy6MaFToLbsBKVjGDTWyyiLvKrwULJqLb8WG",
  "key21": "5cXbZTF8ePU99nLd7v3338kCjbZcfA2BJNcty84xMsNFXFUv25Tqzc2Le6f55UPEpj9yr8rUktUWThPTGos74Hus",
  "key22": "oS4vMfufB2xCfbn2xejduDb2E2HU8XFrDTkh7sHADDPDdeZw7RVDWmFW4wqTXtSEfkqpboY7hWR5hBC6EwY7UW7",
  "key23": "ZUk7saRSg7g1eAzyWaWz6E43qDL4tDbpwHccUXnGTeRaXQSXvTumrdJVyPPhrZDnT6WLgat1ULQn1C2pzreUz1S",
  "key24": "2ewMFhXBXL7LCLGRV8H9Hno9pYyDMhGeaHLVr7cA79bAbH8pDPpTKzjvhdSSyRh9CLU9yH7GBXEvZPG6MKpEndLs",
  "key25": "5Fbn86KWDnwmJYob1m2TV5hbrpYYkAvFL7wxamb8GVwsuh3kt62Uo17QPH8FXvATrAekbqBQErS1mK61wD2KvrUy",
  "key26": "5NzgQbTMTrC4YR4T7Wim2E6U88uAJgJ7krapkPqi2BJ71ZRi2Auv9AtaPmhDPZtEgAuBuuZGsRhYtPfBmLDUG8au",
  "key27": "2MyokBW5eTKf5UUajPanoJBdKYCz1jhnWXKtYPk42ry2JaaKxSQpXjvvx8bv9bEzWqWoYKcZbQhbiaE3iQmTkZj7",
  "key28": "23bFij3X8bGfYeLZvW9VHW48tEZsBKt8vsKCfnHCk1UzHssFM3dDE6CfJYc9P8DwjM6u5bvKnr7pVSdPfrXsiVCy",
  "key29": "4Hd9PFWUQhJq5tNvMPsM9W6pGiwgp53ot4XQ4j1Rqdp7FASZyby7XEYAW99NeajXZubVzKufMJTXbukGzTgNJdNs",
  "key30": "3upf9oCbt5P5EbHctHe7g2krgExabkSiqLnwh6xpDBA8dvAo4aCVVc5rRbfDs5FD4pL8Ai5wARDFEnU6ixbrzvsA",
  "key31": "3wFK8UkqQXM46C1eySDf4SXoy1macanJLTbtKDDna6YCNhwq8U9WiY9HaZtrCBDrvfjXTHtfMaFbNzDpDjyb6cH",
  "key32": "d7MkWGWrbvfaz1846qDGdvFxcoPF3RF1kUs7FuDFMrQrdYzHiuys8rVKcqX18tHwonqHUKAyex3HyvpiHuProuR",
  "key33": "2YvfHb5V49h13fyTQBTsKAQhGxUv6oVZbfwvD2SmwAxoZLYHPsHZMt3Y9mGvCdqcwNt6x2u1YRdmn2HBbSroQgAp",
  "key34": "d6J4dSUvzpkrPsH7QTZnz8okvbGJj13jRzXYxHP1ooUHZbrZYMdHVAzcmFJpaXEzWEzzQ2AAe8Sx4Zv1jZDe26d",
  "key35": "23FvDhB3ppw1FvBuaoyDopxVqKqY1ndnCHaHWX5eJAgiNuThCttMYKaUsRDNLSTPYwvpV8diYysTvWu993bBe6S7",
  "key36": "5JaxRuKXFBqHakvCp1t8PviGEJFeP37gCYe4LhLLJVQSD3Px38nZ92r9naM8BQaT5RqFeaUsVxbNgdLKM2fMDwPX"
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
