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
    "6DHnzZMYYyLcsbE4FkFr1CXAT2hBKLEwfRfPi4BQZcsa3yAnm9oy8bLVzPPaH5QrBEJDLndHGbP6wyrpTPVBE3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNSg7pJod4WqGqqY8uTb2W1f2HoUzrSSkM1h2ZLDkgTLQNvwrCmo3pAsnYyD3gKhckh25uqjmzQmbf9CHbiGR1W",
  "key1": "3jRw595Zu9cnajkgeaUoS7MjMS5jDspa13JM8WJaoGvY96xEU6eS4tNp1pBq8vTH5Y4WoWPHesdDPRNAWokfpQqR",
  "key2": "6DymYqg3VQzUk8weZ5MzY4pKncaZw8k3skhC5yRZGeqRprzgeGFMvVKZmLknfKWu1EmgJTgtVoPdtbzcTL5YFcg",
  "key3": "59hMJK1ikKtQ8TLQwoEmnSQ6YvBBnak4JCnhaVMjfsbQRft7553wNnsmGQxwbeq51xefofQXhHn9VorVn7efTaSN",
  "key4": "2hcD4mqdpm7o5FA8ZuNSixvEbikXjhi5fcFJ79NfDA3MWB2movdGtKrxcZ8sWUFNhWMif4J188CcE568e8n9ZwKE",
  "key5": "4Cz3FBq43Us1pNAcPgran6oC5eGpZKubksC4xbfTqf6HCXtMCb9HTKE63JM3jxXzZxHiXaKpPsp9MmqhyJtyae2F",
  "key6": "5MhnUu9u1nfrXruyA9x9xqDrnCGQ2JC88wiyC6818uLdd6BZn2EUAhWSeRZM6GKhJbrJzcZMWSrA6Z8NjvMiubxe",
  "key7": "LfC5jj7UfsVLhiryyFyRxHTPWqdBdd4BH2d9K89vAWCxj64bo4DjpPiDtEwXVZYZXVNZpmLj9FRvuiXCAjA2M7c",
  "key8": "5dpu74Z1re8DmTJn9j27dbmnPs1rqXzi8RiWgjqCd5r1bxJ9A7ZqzXeSHFAsbha23vZPwN7tTPVjZeHYL6ybt7FK",
  "key9": "FT1G7saD7LFBTeYpdAxWKsQydTgQXQntekheuNXAeP4xioErAKoqsCvvhaGHeUaMdRy9ktVp5rpmcxzoCPdMX4h",
  "key10": "2KUNWBVrY1vHVBqkmk83i5EfpZ6bhnsYPjUZcUGF7u7zXyfZE5aq2YtufQLKTurbbSX1hp17o5C7o5QrA43dw1hd",
  "key11": "2Jnh5aLfUeKqSWa8JBZTKoNBDCzcvSGziVtRinJrNvA6jP3GXAxsUX2AFuX4MAeaxYpDzGnuN2YdhZvF2oXYrSXt",
  "key12": "qTFZhy71az2V4wpSTPq3g36GrXd7YgcVNFWpW4GL35B6HUpJYoeTuhdqVh6suDuNGiWzFdH3dcN1MLGv7BZ8cUd",
  "key13": "bGts4mLqAWejqAgyKjxqmwSXH4udnKmeg4mCf2bNpxUYQ3nJevfAUYYGnvu39GXLPQxJsCYDW6xrVNTu25maAgq",
  "key14": "4c2TeDeraGfLrRQSzUwrizqiw2RNfqZanrsnv1ndDMYafd1GWN8AfQoCSi5aM4npSdu6u3ErvCS6d4zLMijezwTa",
  "key15": "4fSLAcxKjYM9Y9sADdLLmLFQsDqiD3FPqeTjDDVkCspt2WDFR4hqZCPn3VuzympcGmeHUVUYUw17JidZAHhSwRHa",
  "key16": "21TPSzg5HboBF4WjBqLqjocU6uu4AQoTtp6iyC7Cw4xhX6GTL2cmu2CrqW2bUAhUu28MTF3AYXwESg4wzqvgKFUv",
  "key17": "4VL1Job2KNBVMrHCohTGKKz3f3r6MDnwJvQGfNHsS5yRbVByCuTun6kKwxCeraKEtnd1FatFe1QeN3QFEBLpn7ze",
  "key18": "3eqaRm7wd2c5TQWvcncpa9bCrBSrtQmEk86jkXuLXyXZ1mnauqCcd2ofMphMPKHjUrr71SsoK1gsLf7sGuAKPL2S",
  "key19": "4Jr16gBZrvdYyDA1kc3BgmXHXz9a8DKFuwGpFKpN2JtdyPQEHypJkRARBw3h32mdq34rW3ufAQjDC1Na8ij16sZi",
  "key20": "3X32EXfb8Ke9DyzJwkVFXzyvgkVYWY64nh5J5UcmQ16dViVuj5Pnsm3kFUKFitkHq7mWAnECVyFh871JaJEn3owN",
  "key21": "2PXe5XkWaAL33b14tSzDsZU2GnV4QsVo86xYfC1CYMZZNwUqvAmaNgQT2bBVQRZpsZTQSZVfFFKUQHpgB4Yonn4m",
  "key22": "Sw9VdoEMK6WkTn6RkTZhRSjeihoKnoFJPk229cF1EFUFaVkuNmC9Uad1aDPXwas4nKWdvJJraBZ9SC8H8Lp1EsH",
  "key23": "3ubFzTyG9rc3UZWSyUsJkxoyidKuDhhDDUx3gdtCox5FKMTKU1QnPM99ZZb3QbMHMyWFK3YBXtNSaLQ8tMK8KtKS",
  "key24": "2CBDDSufX1HHny5EyZDQVEhMrNiVVmSLkAtnwGqTBehtUfCqKAXBBSc68y1k41r1G5RjL4i6u1iujoXm9SQZ31UR",
  "key25": "4LcszsyGembymG5v7drrVdJGZqxnARA6fhPD7ageizdJEkqGyQ5RvPxCbdrGKyhEVoUzeJTaYJ44axbZkXRmufuY",
  "key26": "5mZrLUW44ht5AcbSkPQRyeLkNxcoC5uFp9TqX9wibZ5LBifQLzmUPePcj5qG6qcoVxtxyf4j4ELQ1PmjNdGtvP4e",
  "key27": "5hQATpj2Y1QoxNAp5fxK5BWWdXukhr8QrY83PBBewZ7JrBBQ3rttGdcd5UumL6bZ4cMRC143eSk9rhseHAw3UPgr",
  "key28": "5X7FgL4uF3yhL1rnTc7yCX9VFoPLNGZPVjWF7K8pkNibifCNNCiXF1BMo8TpnN1eJqmchnfWRZmXBiKNX3qQ15HH",
  "key29": "cgqdqxn9w5UmPc7sYKV2TQ8g7H784joZaQUBmGvmGX2jS6XdM6zUGL8i1vunLWUWdt6DSB947WcN1Q38qr58Rjb",
  "key30": "3sjH5aGW9uw9mcTdG3T6XopVaE7Cr3kat5QQVdwqTfdzn4X7fEzGsRHsHqEyVDQPHSReZLjio6BpgsDrdbJFdo8A",
  "key31": "284vfJ37CRDkjPAJQkBmMjdoXLVmtbX2XRghxghraubLv9GhtzP8ecYYeJm3JgMRbzY2KN75Zon4C35PgLKkMSAT",
  "key32": "2foZeiJadEWCJC7eCqoEhNn38z3YaoCeMuWi4uLSzEKDE1QSJEcQG1d6ZehR6i2pG2y11WnNswyVxrVDB6STnz1U",
  "key33": "k79zihPQqWZHGUcU7Ya2d5o2NKxWGxCncgzEMAhveRbUY98F9AmqJeNTrLQAYVrtghXVLDxELwRoGWts7FchdAY",
  "key34": "4xDXXqjBVt66sEpzajYwJK7rQXJtSnaEREgMqkkBaX9zdDnjZs8GvQNomfbTKXStPgXQA5KW9KrtatqJYbK3Xuv9",
  "key35": "5KcPVHFS9cGmXZyz62dBvhYicKsxQwUQEE7ZxJG18howDUevkLozso945QWqBynrw4Pi3f8MYL6qmeLbAkxkauZC",
  "key36": "2TsbE18Jq17M2NUjNNbdZVs9sTYFDhS5P9fbP7nh1UXAF7tVnd3Z5fRK4kD3gtuQQ4zVpVKgaUz5SAsR2Fs82bpn",
  "key37": "dyKCNtJRq7SmLMBRZVk6agMhEaE8GLkiQKSZRvn3R9QGLvyPTkdtczhsGqA6bGqgmMNqETgLbv3wmTTnULZy47z",
  "key38": "3n4bEgP3cHtibuWbkefFjMCT5N7bGNQYuvyPEZKqcUaB6k5ZhdYRXJEXmZezLa6ut3VYqRm7c8LNKb6ac9q8AtDH",
  "key39": "462E8mF5hEcyAjKgqGg5uDn15xeSdazfaie4bBNrumGBwKyPXPhe2g3XBuP3yozs5MU6Hwrs2Q9dx62ND2tkeUL5",
  "key40": "4m7G9b5WAbLoWsX67HsF3hbgJ528dD4aKhAb8yrA7mSqmTDHXznsxernvjs8KKdEejVioB5o9qgEpNscdmNggyCz",
  "key41": "5AKaiD9cFYVwijey2aQFmP5TVaCJdREKCUpkwnXHN9HMvRHMHgf4iPbSPw742J83a9KRFii3NQiQfFk8EQ56msxe",
  "key42": "4bp3D6pQK8JV6yA5EQfDtPxwzK4NscXrs5XwcSiqYENLLARrG2ZkPe5ogBdPMHraKP1WEzEu5x2kU9YL6m5yRM54"
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
