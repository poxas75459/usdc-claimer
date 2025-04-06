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
    "dXqqehiE4eXzrjcGe7xAYz2LWA1UjHRh4NPv7NRFc5FX9tDha5YQ9XxKiB9MtG1yi2LM236TAxyTbmcC1eAHi8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zkwKDHFNnnf7fu6GBCSv9RswHvcnG6My6VZFQfgw85iHAQNa7UoRZrfq8EeJUboELMq6btfcYpmRza9eCu99G9",
  "key1": "fNN4ja5XnbwnV5p6uMhP9HshA7F5jTqRxdHakZXbAyTKngvo9SaUpiMF1T2XYcXtqkdPsbvZEPhVzUV8KHCk9vf",
  "key2": "4Bzz12oy12bKXBuMLEGgjWorP9EvqzfM4MLscmc3T6zC7gUEnGaU1Usm7My7VqcMafUzuGTYsvMWJjctsRpccvB",
  "key3": "3hapFXeCVCaVgr5RkjXBwoHSYJSJzNzUHL1EmJC6GTPL5TexFd2SH14gR2369DnFDnGNzB6rbmuoe2NpcemggqJD",
  "key4": "2aLxvtxKSw63JhixbAec7bJy2kqcw8MFf8ViBMY4J2suocvTXsxKZFa7mY3D31f9caNjjasfMResg3nx9pgWxBSz",
  "key5": "4RQiSCvhBrhLgLSfRJTQmGjtU781FpbvJ5aErEf5SavvpFafbvCqnV15CHAgP7uDMguw1zwsy9Q1MPbY4veqa9Yo",
  "key6": "5oiZ5cUUtXFppgswf5d6NCrmYQmhWMydp34yeZQbNVGKsZSXbPXnhz777z9Xr6jbEkLdFWnvKGavTYcWCXaDYB6h",
  "key7": "2TFdVpLS3ScRSGQLz3fC5SFJMpUPZA74G2HmQcadXsWEwKac4KMC7e1Cm1esdE5pE1TTTQpahkgD6ed1HGxWCmjp",
  "key8": "3EmbQHFthxuxsAmEM78pJ5ogJ5k3B3LQgNKmKf67dFgAetZPU3EunrzcMLT6mYjNxAe7d2G8CJpkDkHUe3GcHzZ3",
  "key9": "3DMextd6C6bpGcNTdx3W5Mnm2GwddA5Umz39RT6fvQLrXBJ2k9NscTyKTM1BWJKSeRbSLJ9YaVsxWtg5tW3Azdcy",
  "key10": "52NcZvAKDvM29thgxcv1kxvRNGqACm4eYsodFpvLFHz2S8J4LyJPMF9LDL4Bh3DqaQHcdeCx5WSZPHovF3i4Dw2R",
  "key11": "4vHFBxvi2Ja3U3kpbq13f3q6AmFuPs2gjGetzAHBDfJc1VZ9iKjKsNU5TXKFZdxERebSbFTuNZtiDYnzXvVUd1sj",
  "key12": "2t57CSnHFUbZo5mYDEDkwjKcXytHuX6peo9vZqPGkWjQC7NgSewvPzMAcsnhDpTh5BYNa6fFnZEkyrxtWEAdZHxN",
  "key13": "3jP3BiF5Qvrtxk7aNJWXUVU3yQDQGaZ5HxHjdMSvVJXLLFUjtfkAdVrByuDJysCjCf1WA4t2cd3DREnNfr87JUaD",
  "key14": "4bLnCCFcm6Fv7fzmkBYgxjw72536EAgJT7UsRsdhbgV186VDDCGrXaVYbFrYCvn9DtHEXBV844qAZS4o1QRJ9cW8",
  "key15": "5TMNjnBpfHQbFPXC1x9oHQ7z5oHQdrYBDoEtnC3maRxo8Mve8pbzAg1s13QsLj7UX2szLimzguS6UTsLnf3jHTwi",
  "key16": "3rodRY7YzBwNeKLhp8jdqrnNjB2VZZzcrD9SrAhezaVg9aCNg6tKUiu3oreqiujyctGq2RAYJGeSPWTVaHqP6hHy",
  "key17": "5pCvTvgv9BbN7GjauNj4WhzTw8JBFGCtFU6zoABo8M2iyBbFEuEs4rXmLfxfbxeSf6qcnKxQkp6gc78Z52MS9vxC",
  "key18": "2KPwesTHKJKw7BW6QLrL8RPRbKvPSohp4T193ZCQdNViEwUL2FENq2VrskUeUyQtsqrfNqgwN4aF5gLEnvWUJvrY",
  "key19": "2Mq3gmrJ8L9DuRugJE7UNLc7uS1UWiwnTAvFwKnNsK8R49DDUQqQPktj2z81GGfhkzZ4VrkGv7D3S8b8mFkRSmRy",
  "key20": "42k85ix4ppXBjuy6nCZ2JJ91svgsfjLDdM7sKuxcTLD2MJ8FVEKLQyicrbxMRUvCM6o9FZnGpRS1MUy3xwWRSFBE",
  "key21": "4g4262f5WeWuLZv9GpYfqj1pVUbrKDKFDX6BeQkwGPkFdZfabaxeSRfVBeyScPcHxqCZ8Ai7xYe5R8dGkko9apeG",
  "key22": "5goa46c4KpoF1XKQRSfr5ifNbm5QfSvTBY8tzKNKbt2gjLZZsxZZxUsN5wA6yCh8DDzKTnkALz39CoBqjb2fbu3h",
  "key23": "3kVsXSQF1WDZeE91kEmyNLprBBSnmKCemXh7cTyKW1UJDUdEMtTSgCKzp7wQ2YKqecbsMiAcbP4Mu8dgpBJBF6K7",
  "key24": "Gfsfit3Sae62t3uzWDKXPFgVu7UNAhuxJrGuW2nyH6VmbbxLy27fWUxg1zjxCB1XbEuTsA5ptPMCcEty8BeTUgA",
  "key25": "2TMDgCe4RhtKatNAybfgghmmv6KYd72JNgS9H1kFjzD2xpfpKMm2ayPxzrB3JN3YpxNr7rzDAxa8AJBnK582VHse",
  "key26": "2gKFZ76ACF1qSBfULsjcQkpk6Az1qNYZzh2wRS8YcyaCH2HEZiCC5bGJ4MmXtXYNGT2tpCJ2XNGqbMDFn4pxHaqM",
  "key27": "2eYYBHv6YB42HtaAy3k7a5yHcPQCQ84EAPKYLazYRH5cqkVuxdjs47FKnxZ8hXB4wJMQxiEgCxCVVpiGEiQWVrG3",
  "key28": "5xcwe5PqPBrFjhbJMkq3VZenWvhCLg2kiUmwiVf8HFqhvRJJyGXPQaWFAae4tMzPV68V439axD3PLGi9UjSQo1Tu",
  "key29": "5jHFcr71xe7iK7DQjXWLqnB5DfkWxyzPkxpsqmTnvTrrmn3PUGNM8ycyTeCNEqw5YAAKceaMFAxbrCCLpTE6JZdH",
  "key30": "3raWAKg5zYGndt26xASTurFKP9qr9XbbK9JdaM7Lzhgo9wwZPuhTV8JzRfTHtf8JbxuYTEKuDBLN8RBh83UMKV7y",
  "key31": "64Ft76i4ppUGFrHuPr49uvX399U64YFw61tsztD6dF6nk44e2dW9RNFgGmotvNWkMJa77hRTJtnmH1ddZrrsSN66",
  "key32": "45ii22fVinxNe9QX5oMRgaXb4XijkmiA1FymnYXKYTiDw59EdSX1d2T6Jq1b7ouXgsxkK1gNu9AW98VWbaaQerPq",
  "key33": "5ENxjEozpR9NYc8JY7eRn5kVicrFzv69DckbZ5yvbmHQ6GbZyKTrBPvFH4ZbLJyw66piMEBiGi1sX4quMM8CMdQZ",
  "key34": "23g2LviCfcgg1TtpDQjcJN9Gxp3z2q5Damm81r1ocEZKt67rffCiQ4ScxuzWECB2VkjD1wPnWBhsmSCAS3KpeTZR",
  "key35": "2Gh78EgE2hUmmzmpbGgXaY645gG7XtjKbpk3CpfwG8HxHbGhDJRiYnRfFEBqwmypbyHjcE7gLepQQan3WmMPh9dG",
  "key36": "2HbXv2bg7F6SWCErzSdjESp9CrExJbwp8v4hGPH6CbqN1LC7kxUG8k5LYeMizikUGjPQr5jrzigpixjR4n8ko8qE",
  "key37": "9EyCQAXbTAaxgoV5Dyc3XKcWQFgHStwEEfTbMQjtDrAjZhERnjGLuthjiMGaPdSzsoH8HseXpi3rKsz2iAX7PjC",
  "key38": "21j5pEU2F9knaPFns7VeWMKEmhkdNxCqyJnj3tqoaJ3PWoNuNggvcD4LTQomdj6AxijTX2zrf4omNA7yj9nsc3Vh",
  "key39": "3EcBSYKfgQX2pHdrZ43Rp7yAUMDYeQpmfMvss7y7FGBFrEjGupzusu3yupVrovG2y1YHh7Rw2EaMWnJbtGebz3gp",
  "key40": "2acuiFPq4Y69MeR6z5Rp1JakyC5oC5fdoqn6V1FYoNfGFS9WuyRR9PKxy6iSpZtTPF1g9jDYryBv2JJAFgr4gn9K",
  "key41": "XoZhp7oq8g51xfhfu56GPFfvUJUMCmcVasUFXizMQuT86mPrT4Jb8G4aTvA7sJzWMMQ5i9GPvroTX5aqZyTwLha"
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
