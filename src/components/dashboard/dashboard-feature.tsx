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
    "4mEWE7w7LAyovAEYCnsNaq7QTH3ePQe8VAfBwbSz6yQz9W1rRCueck3B35NCCMJ41Yjs1gmpqVsULPviwUL3a9Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qL3HkLQJouXGdAWhLLb2ubLFjRr7BXKPzivgPXCtx716WyZf5X1gMxUq59tx47Ex9Br3aCUfKGSbzqpBYaRXEzG",
  "key1": "3q8jWZtPiebyomVWBVwqbxweHTVFBHxYj6gqapCTVRgujsEpWYCaLSqBvxeyGCSg7PNJKYSjBaCBEkUR8bhXhQmK",
  "key2": "5QdAJuAjWXPnRKEFQghHPqBDcNG7NshNm92aMDiCxJJiXwzVHGzpJHKDZqGhoeYspC1iNQj653RyJdT5xJNu5pen",
  "key3": "3USyQvhHHTvBdXB52RtNeidNKS5CPbPvpLfC28pLXSijtk8JfgsbB28dD1Zt65bnxXNGcAKALW6zWCbt4XMijPRb",
  "key4": "DYUjbANLwBAGKHLjsBvcX2hty9X43f5jpc3SwZZ7L1s8FMEzn8ze19jhzU2FkqPNtWQkjKfYPYgxeYrFz9wVfTH",
  "key5": "5Sb5vqHrtWQvBY1vXNUJeik543fo87TL8ZcWVriYY4vWhfFTm8ZFXS7K9GYRjg7tdxv2hntWy2Z4CYgMaxXEasEH",
  "key6": "2RgspzGaMoh3D7nKR6ZkVebFdsqUqqzoEVC6mMmd9WuvMXa8XyUAX4T4ZZQQwBH4Dt8YjLqGTKocUfMk11UwoCPp",
  "key7": "5Pdz159LCjKuFeQEjS5FWiqCrB411NN1JQ3HXPdAve3sxyKjMsJdUqNPSRHHCqH4f1w75gtAQ7ZwWXwRk9GpH9yh",
  "key8": "5SDRoFNoATeWHMN9sL1Kbonr2WtCT28mGYi8QJUcVfurL8HaAhzzGFXSaPmioiffBeCDts96vFjVasyXmqR1jTPZ",
  "key9": "cNDM6iTYMk3zdw1zrQT5gXLyN69W3M6uATnx92CWxkYbcJynLqkEEajPms7AVG3v9kJ86U4pJovqjibp8vqwghW",
  "key10": "5K2KXjANUAJB2VRDNk9cgUS2koJsxdufrbZxuWcPBYkGeDghAXFtUfBNcoG3tL7YH8ZEfjviNZiDb9Fwyhc3WxgM",
  "key11": "4nBF1eSLUFM5Vz2v1omHMzCNwKbaUc6pmqvPH7oF6u5QFCZamLsy6u4yxR77s2YCT71n7JPLS1hYX8sSiNHgPgd7",
  "key12": "59C4a2Q92de1oBW56CYophF6XwwjGNMvYjtJ1xgNkH611Gzrydmq9eyq2qC1aHkHyVuBiWzRgo2tuuYQyRHe7mGg",
  "key13": "3Eu9ujGvctycUj4M4d6pyoPZ48z5419WBCadSKZXjL4d8DnaYXgRYqgY8Pd6f6zep7McBBBxXVMVtvPwVj1Cj8Eo",
  "key14": "28s2YDD6eMW3RxqkwLpq8GXefqnCeBizZLugDK2PYGh4YQkcgZ1gC1ZssC1ctd7gdvcmManHtXVbfEaWG4yHdbvf",
  "key15": "3TtdUQTfnFdegRnp9uvwqBsfcy4zumZmaKExGu432ngiG713FF5eezVHRUKKLqsDzERezqwoNJ7Nd5i8Hyy2h6yZ",
  "key16": "2u6Q8AjevZWH4JpNtrwWt2NKKVsDYp1UFWvFQrAuz2Dum5GGmLGGZU8q6A9T8kgxEkxUijoEdTdWexaAdHMG6fNU",
  "key17": "5LRk1LjBCWo3SgA9GwveUo5YXo2SCkfD785N4T1XsoV6se4muacAMkt4La7az2L8awodRVJjSc8qMRXQGonj3e3b",
  "key18": "25X3qmv9c7SA4heKVWL8c3PkFXENuH8fnMYx3ZZ5zoVhqaNHD7AoSWKajwiEKEATmxUQZU2DPyz31rG8mbzqbEGR",
  "key19": "5ZUXrniaEVbo7tHXmRKFoBrjutmCqLiiRZJaSkDmztUYBAbfsbBD5Ne7KRMbsuVRcBNZ1x74NZrcVCbuzxW5i1PA",
  "key20": "437D2xpy6iZ9V9SCW7CKdkxvS1Xmcrkd2gYq6yyXay9Lo4jb47W96LPF9dEWJmAos1Bc7s67xJ3dmk7BL2dqLfH9",
  "key21": "4LyayntxUaERhUBZDNar1qCLssiM7cDyMFVZonnB5gwJ8s5h48wB2RbmJKWR3fpB4bxsscMFyHGtV3ufvsU5GuFd",
  "key22": "65aFJvJYNuVsrDt4XqFqM2PZSRpHQJECf6ctjU3pTTBEFxQBcoWhbTfrbCoABanMk6u937br2ja1av8xrKTs8MYQ",
  "key23": "62JFuZXXZkKbMYbhr1yhonRPt9kFPBkEVEGezV2wo1sUckKuZjr71MGpwcynC3S1mq8LrFvzbqrasUQpCvafPGz3",
  "key24": "3YjoXnKgubiRVtLwBD8ZDACyMWsaArYvMT6AmU37uomZnnfhFb42i7QLxg19rKG2uHerp2praAftXfJp9htek3tm",
  "key25": "2yTdzbU8GJmkUZQXp6AuS3Hjt8oyPyjRZtPX27RisH641yxUNUycfSFNPS2iTF5NL41TULvfnmJDnnBNLmNkzawX",
  "key26": "MEYjrKUGGQknpXa12UKmgZ1ZBiAESRvvhdKDaFHnVBhJpBmWyoHoWWWdGcFXoWZpGZZwJob4xhvbMHsHWCdMqMT",
  "key27": "5f5wManhx7YxNQX2aUR6JcUzpQxJduN7rMsJihFnAEoUwgxWP32mUyMEU1mDbaR1LQPMG4qJJ4MpLvM8Ryq7j4Um",
  "key28": "31oBXipgUUp2FMyGDHxAy7cGHmVj999c8LXQYdm2KcqGuToe7i85c6zhQuyaPs7Muc98p24zKq34YEnX6DqBRWWn",
  "key29": "3x46wsojpH1fVxQwnQBtfz4TY6MKvwbGPEFfPjKfe73i1cc9u3YSTYib1gz9ZcVV2NFykibTaJEVzDsWdAeY6i2a",
  "key30": "3qRsbShNGip4GPAnnhWEHnAPWJK3Ur6vsKNTvcuLmvCxeQymDGE8qVhPXhfD2bgJwAc2V59Xqud3JnSn11VZdjA4",
  "key31": "3kDHWy76VdHYMRCFBpvm8hbct7TcjqCEfQVfTYy31KrHBYZnkAf5S1aGW4C51Fd9Ud6uUQfnCSfuitMueZF9B1rX",
  "key32": "2tPKBe3dGRAYRX1kT9cUTKfav4Hyd73kKeFuFDFuy2o7cz6mimtcsFzmtYhdjaE38t3i6ahnHNcc5LLBFKMMf62i",
  "key33": "5ZcWyoXn635u5NXG76LkgB3EofqLqwExp5Nx7aFR1FSADtL4tF5RQ3VfkewTRnkqCpzyyauoJ7rtYiUbKcnBfPnL",
  "key34": "4MRZpfndKkzA42BrZwoESsmxTrKGn4o2Eq55hEGB6urABGs2yS6mDTmxNQHEsjnc5q5yHkxNzabKbdMYdYxi1HB5",
  "key35": "4H1oMetaaWmo4viFk5qwgsj3FszRgks6kES5v2ErS5SkZoBhNrUgpLXCDnSMCDiQDgx1RDCLeLsPnmJJwszktuuq",
  "key36": "5ojgKrUHa8PfofX3qWv9qLEXAznhsy4VSnjot3PedSsB19czvDaR5DJZeDt7Qfty2JmMYtZPeQDY46ym7dKeKQ9f",
  "key37": "2B7T4JjdNAQzraDeLvwsCSpMLcLm786Ct85VvTRdh545JbDDAQNs8XvfaJdsJHkq2VjFnRU17cRcV49smAiQHV8c"
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
