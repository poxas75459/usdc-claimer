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
    "YKiJhpHUGLxwMvmHik7wwHNajEZ6FJoMhktiRtFvkEBGoprwP4xQc7S2SyQDEKuvD997znUtUWKJkkacHTBNi9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mSvzUjtvNLvYRjXfyjSKdJTwEeSzd5RZQNL9aLXiF4PNYZP45nTGGUV1yhHwEHw8Hh7VyYwZZbVQmN2LPhx4jFz",
  "key1": "M2Bf8myPFd72EMV73AVpyWZRR1ih5ZJZ1uKbBjmdVCJPa7m5rhAuS1ZA3PvpBohV99XfWs9GoeHRqdmGx2skMrt",
  "key2": "17qvspqg98a8gpbED6WJvdpyzzgh1Ydk3BxcfVds78CGoxNTjPGiTfAN8C4L6xfKjcofWPruKTVNcaizrunHBC8",
  "key3": "3K1Y1JFAzCocqou5JnrPjGGjxpwxG2s195AMP4V6r8gfMEEve4oW4VMpZHcGfwv8s4fn75yn7zAJBNCUERPMToLK",
  "key4": "BE5Q2PGvZgfDavmMsWUD98xH56MAnZ88WrDS3JV7FdibmsebdwWiWXZ4tZnTBZmbFDjtQn4p3GWwiMXFdocF7QU",
  "key5": "4wGrYhJD9KbS9kn5mPmsPQTGEKiiN7YRGLtc1KZ7GVmvWAbwBxa3jZXFrKJKn5GF2XTmXH2DHaTvQDr48eA7HjAv",
  "key6": "4JYeAbgXUmxRDmP245sdWAV6DBqxs6Rq2yAQFR7TFLtgZtWSWFC8qPv6ywt62hej9q9k23y6TCm8mfoic5QfcAjT",
  "key7": "666xKDvJ2P7exHWc9S287a4tVbZC1D68rRdtMoeikmuJs19gaZ6ZKjvMwcbaGhHPKGbQhRhDF5LBbJkvEyb3bPAf",
  "key8": "qHyAwNcvJic2Ws6HqRoiZwYFAZ4Rhqy8syxaBMT8ks6RurNwWxqEdb7StBqJogPKMoFpCazLZSxSPZxYF2QdEdk",
  "key9": "4oPoKj5PeSRoBXtTCZ9pq8Mci1A11rwmSaKVJh3y2GsVXC3ZonMZt2AxMw9a4tkvyHbK897FtPp3JKeDGA8KQVg6",
  "key10": "ds84MDrocagDAb4PbTd6vHGHg9qUrzQbWyNzPkKkxYo7FZaUdhHQnwzvmrzCshXpjZyw6FFZyrYKHWVLM9MBHdQ",
  "key11": "2TymVNgqkftxX749Wk9D9avVRsGFhZKqRx5qvyPEQnNn2ZePPZBEGb8eho72HWNWsHtd3jtWgaTC5qUCf4MPDEb4",
  "key12": "5LrzaAiTp9QpbQ3XroC9GFj8Vzuyfv6vciEoKMNFP64Fm8qphYkefRJz4bSHndFuyV3vcN7URB1UFGPi1Xp37JJW",
  "key13": "57P8swTgvzY85T1nUDS7pChfJmbvNBz94yxx7KKNaSu3wkVE5upo8qpva8ic93GPKkbFJJagtHYyiRZEYwERaBxg",
  "key14": "5q3SNGnABBNGScFvjv8diCCyrYAAGM27kL8f964gCzzVt7Db5HWCGLgVD4JFyf5GbMmQEwN31ozdKXYa1ozjETVr",
  "key15": "2VwKBcixy8pCoYec3Lo6o97a6ndriG2MkuUBwkqq6hnBKEwcqD4NfbHN2Cxri3AeBh2KNaH6rsDUpMKqAb1MVPgX",
  "key16": "3HcRhpyc5nk2oKtDpweqrRzHQhs1YkUhFRxE59taYC4YhMEyvkKxYxuAv3bzDA4Jz7ZqZnUSqGv48wAqnDSn9JdJ",
  "key17": "tEyfC1zLuXDD9u3Y2FgXaVfLb1HMsLeYznHp5aKeZFyHUPyfYHst13hh9wR8vw4t1baK6BBahnwca21rKyFpmGt",
  "key18": "QYP5UHpTfGPoopmkVsUcxVxmgqKP9KY6vVg9ujegywU12tAZa7zVuKtvN1K2gJHsaMrHFU9RUVoWzQCoFw8tVpp",
  "key19": "4ihKYCqU3ChHEriHq9MCHcyZ15zZpGuP5J7o5Cnmz5EjSUpHCAPhwwao2EzkmbePGjNrvTcjpMPCzcqEL3Ryhnz1",
  "key20": "2F13R5ZQqgwuePQ8XrMYT9pe2qVgdixJNtY47FbqS4uR7xqPdzPQ27ME4xzhLoPTZ6fCEEwhpXZU3kjugV1Uqbhr",
  "key21": "2ZN9qPLEaCvqRWJFV7hL2pZCKwSdCkoJ8yvuYTXxf9uZ3iE7bZhybd4Lgwsxnb3Ys36SazcfFucHpf1F1JTJRsB8",
  "key22": "2aVKiHVz1RGNgBXY1Y6LMmpUdDXHzDDKoNDkAsQfT9npXvjKrZJQVrdH6Be729g4WTmuszLc5pzhH4fr37T9km54",
  "key23": "2kBfZc83otoa5Gk7N5eR55cfDquYToqxx1axi72GnW2zfgQE59MNWWvRXJ1WEzVn5pBmJLuf4khzi3Nnt9cRk1fj",
  "key24": "4zSVSCNgv2x1Ntxr6JRTXtfPduGgVewUKMBYL1HKDqdK5ogGspA7d6z4Gsf8Mh3jGdK14etNJL4AA9rEzihLeeud",
  "key25": "3ZXGDiitfyf1Y6wkmksY3CPS1qEcCRsVjL2yMHjtjFQc7p5EXE37KY48v9GDkzf4HdBCJj34t5RWduYprJxkRMN1",
  "key26": "44v3Uvj1Nr9kPNx7GXu61o5WfdnvrrwRpud5T3S7JwFcnf7srFQ9omAJG21bturRwD36GCgp2jamwGXzditg63w1",
  "key27": "kwyRHRYYLiy1sB6PR6igqER2WxtUHzNr1R5Gvn9ArSduQt4UmYYqqbSU6t3AaJZPWWm6owviZPzjFgzAEsKE493",
  "key28": "4kFYKKm9MSMekn7A7TTwJCkBRi13WNYJdUnmztfbzAqgsZpjCnVjxP5LVS3MX1UVztkJWDUEVRHxtFf9HYCsT5aA",
  "key29": "2gzidYWsLuFADEq2E5bTuTeZ1BwkhvbbKZjPWbRmwdBM7mb6QXRhRZcSEv3tVpe2ZnfDjaVR1HPAB1kor6SZXLEY",
  "key30": "2Cpb5CjLQFGf5yGAoDytU6GCydog9Dmmk56rW6uUTrcJyZMyg65Mx8Nu4AvE5zkBDuTRjS8NHFTVoFgeyxxmFNFn",
  "key31": "2xnY8my5cqvTUfj9YYXCV6vSqQdHcnaGKWLkjKptSMDU8jXbBsQMqJF78iv3QypYkBD2owJrcjc7bv6yEjAStvSw",
  "key32": "38o6LUeu7MuK6QKR4uV3v2k4QX2QecS4K3RjvZv2jv8fnSaRCs5R9qbuWBmnHYffQbe8MXvAfC5ZA1fcVpXeXB2H",
  "key33": "3reNLx2UESSRb82iLUMHcVadpTFBJo8NaNog9Nd9chmk2mQDZTU6QKQHPeLYbhg4ic75oMhAotBhVVurCaYsymaq",
  "key34": "22RpJKoS5HCcHuVz1DGXDx78cxtV9X2H2rJ2jXHytQRRmWpGXTothoKVDdmtqu5hDDLvk7V9kqiYo8ewFvMBsaGZ",
  "key35": "5a9DGMYv11qjH6gwoTp9YWii4CpbpZRQARyaebexMVqVwqCfx6VaRfyDSeZyC9kCGhAFFVC9odfLbmstCdBZ6tqX",
  "key36": "3HYn64jdxfYMuBUKFPejPjUgAXVMqa8QbYtqhTQkpREvoQgejQrhn7tsSyHTPS8YXSbgxjEfU13eGNxEUbsmMZRr",
  "key37": "2YQzYmRyYqGDp7xWDyARW79efAF96E3KCZHnEZ67boceP5oZ1vqt1QHyB3vEWie9NJ8Pi8RaBsvG3ioQnb1CTaWv",
  "key38": "4fmkMvNm5443Si5HyJKoRH6nKgnwpy7vStfhaePkRpZwmdt8LjRNxdoaaAzSTzcLWWSqD94kS87RqcVY3Jgfv41g",
  "key39": "5NGy5kVkhE18Yw7CyxKqqei3zDvtAHt2MS6knjBrd8bSTQzKK9dv19MAz4zYcvyZPn3QqNL45rMi1WxtNiSabBj2",
  "key40": "Hccxw6FRpefLD2MyBefCwNFLESkE2SLh675rspQwW7L7rYavpg7VsJt8N4J3bdVno9qtkiA7T4hvYbWT2dXxRGY"
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
