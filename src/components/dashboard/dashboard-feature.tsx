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
    "5rF4siFLPJcmLnXJvYKFWtJ67PCZzmHBK5kmB2cLDbU2oovgiWoqdQwiJn3twibT7NpdsXrBzRLToNkViKo2cS2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFQq6XpQJkVQKys4aPzGkQwaZSoGRjR4Xm5jHRMB9EraZp1wRD4GzdzvHXPVM3mFcTDKcLjngdAmHkJi3N9dV74",
  "key1": "2UArVP59yhCc6aM5DMuzQAdh4jf1zFUuCDUcPSpUHXV2oyQKuXW3nVi7QtXrjzbBzd6pd5sFZtEwEg1bv8vSpXyc",
  "key2": "67hJbRoG1Q23LaZJu7KZuYMPYWJCU7Tqevwzd8haDjBewTw7wtEyWhZhKyUik3r9V1XtYsBmDj6aKWgE5s1Heeqs",
  "key3": "2zNWfGHRJybPMrqkffdh1i5rGh86MBkaLggePPP9N6y6ST29bYJaXTYVkVdcyLA5pW18fiEQvw7qmBGg31e44gnq",
  "key4": "5rqVCDisLHQ94By2S2eYdD53A5rc4SFQnZhyn5BpDXNjp6CkN8QShi21wVybbVjMu2LkL7tjeabLiz47tP8cafyG",
  "key5": "aTEBo2iwM7zEfH6nRNeTiQXaqKpfDTjz855w4csYgTBF4a3pBgMk8L1kQ88Y5AseMJL9r4wQashTsMahdqZtNCb",
  "key6": "92ny5qpW8e8gbBgDMi1vpFmA6m6dQybs1txSmT4WsfJa9YUB6YxQLhtcfUEZXXf5C8Wtr7CbCTrHFFQwdtA8VXL",
  "key7": "mUL93hzNpmQu6NfPLK5YYdj7g6PngRquuhb73NftAbz7hgCuEoeDYk3125S1kAgp4AG5MJgEkj2eKhzhVaJzNMk",
  "key8": "57sjPGwFmK3jKz5jERojCRHuRsaBG52GRuv8ZWYLFVqSVPMHbX2JpbjjEYYf4mUZ3XJuu7GetGzo2RkbKyz89E3L",
  "key9": "5uEU3dcbU8oyhzyW7WQanBfHXhRU2YPrev5wGw972WSBQ5S9pUdqUBK1YHssd7ioYeKCt2SvcfJgQQkmajYSFndX",
  "key10": "3B13MUVAQoj322AMcnmGEzT25yY8yL3ciM3zQA5D6Duj8u3JkB96CgQKdPETW2bKBcRC9zQEfUp5M6YXvh1B1zNF",
  "key11": "3fLQSZ4qxWQBETFxfYozYbV3YVSnYFmnbg9NtcZCW16D3b4qFnVAvuBzTujQv1PgpyRXNVfPfXAkJC2WznudksNv",
  "key12": "3KANbhLJcLx2qGWJkbpVQRfb7pf3pmJzHynSwmmyWhvCm8rvLdzip8WP6GY3mifJixaSCFmZC1LCg9xwNUnwWLzC",
  "key13": "SbB3iadtFwqvuwaE3nYSJFUcHMDqHso1tZTUweZPDZmQJHVrWdQaw78LF67SymoJVLHyuH8Ei4ceYMZTDyi5MrF",
  "key14": "48anBHHTB3DbmAA1BAi7iAeA98yZJBUNCjPD2xhoY3hrcAjrgY3itjiQSu2Z4wQFXeaygjK5gFX4Ghtstwvm24vb",
  "key15": "414QF6Vmup5XbbRM6eDrTuyNQbeKwDTdrHVsCUGkyJYo54cze79nw7sJdULUThEfkqMW6ekWmBsSe5n3Q76GxtT4",
  "key16": "4gtLjaxMvFYbMLjjHYvyQjqeEyxE4x6KikTAYAvPLG6wAtHt9LVn1onGe3X7vzDsZVnw3ukqhCfte7RPxs8gEKdw",
  "key17": "2YCBnSPgAMUfJmSDFhLWzoxmDdjpVtxVgX6KFYo9d2swyeJxLaX4g4hYgU9hmvN8AYxiNBCp84XKC5kRWvU1yvx8",
  "key18": "2eQjom7AuHUSHfmL7gA3dr6FeTx3HwvRpX8m6pFSDtD8fEf3mWcEJwYo43dsesZhTwnV2y3eqoq2kaSJXSaPQmnr",
  "key19": "4H1eB4gxv1yFfdVCyvzRJMmK2LXLZSvX4NozqDNiqAA1iC83PxJRx1z5BCHwMcQt2cJv95WkVSMMVB9p1gZstnn6",
  "key20": "3ZB5LBwxxAevTBGkwxVWf4XwY6qfXFJMoFejyBhjYpSjPggfMQtdry4fjp9QshYrWhUwbqdnsKj5Fjj8EtA3UYyJ",
  "key21": "MePzx6yTkjwbQL1jeSQLpgsqA4LAiRAxvHsWVDih1pALBpXf1L6eJKKhaszZG8T4zG1VCYDrnxt7mdddyxLQgtH",
  "key22": "3XQyyxwGB2s9wRSwsVNATfhb99LWPykmEHgJXRdRDhVGCFPJfyGdUY4kyBnfAFsDQtTbY4B6YGEtc8tPT5e9GZx3",
  "key23": "aAJer6QUwSJzsfH3wQxEtowQUsHDP8EMq67ifMmfYYgbk5ZjpsLzRZNfRNhjvHvZPJvQ2r8r7abmSFcccNaW5vo",
  "key24": "2fieYLaoCBdvDAup3Jo6NPJZDvcuYF8JGXmxGT4D4tguZ6RE2NT9SJEMjCWEXZYfcfq9nGLFHYsTxs1S6UgTbHAE",
  "key25": "4nqLtrxkt9AHhJPETAY5JFzopRA5e1dP4VEteKiBEhUfLBH3fDJ7gHgzXrPbBv24Z7cS6aYpDekxTiALvPSiwcTV",
  "key26": "5zLpT4ZWoQM2beoWXDXk935Qf1WhC2aGHy81rmi3YFjQz4ETHJGHo8x6iTrDZ3BrKo5KeEMKwbj5tFKKrT8ztHUo",
  "key27": "d38GMTsVCggbFCerRK8CVhPwAjitcdnS6yprtWK9Xw9gnx5W37xkqbMMi6FduXkL6CjmbZUna5Mi2pZ13FnpKkw",
  "key28": "XUbkVypBdFUYhPrL1br7yKrhf2av1B8w3QjJerat5cCixGdmyKVJRp5RH6BBwLT8yJQRwAR538KXGUeDzRewmfF",
  "key29": "4DiewZWs74N1KQhZgXh13rgdKYTQj9uqxv8y52mE7Q7E3WGPyt8ebKuSZ36eaRtc9LVYTohg4SjvsbRgA3oCd7Af",
  "key30": "5g7LMtdEdPx8kUryoMqbJSCiu3XWynfevbR36DsmhPvudArCWkJHLonCLryENoMEzKjugRy3Mkrqff2urRj82ULw",
  "key31": "2oA5L9k7fKr72KyP6NF2EYonU86JAyReWLrqbgdWUSY8s8qGonP889ruPSmyquvCBHLA2MLYGJdfLgyuhfRfm7my",
  "key32": "2iKSrF3fNVMBkREipmQDCBYt373oDdat3fgcs2Bec5CZUdAPkLatazJ3VVtDjCpB47XJ5e8pfpT6Ex3FfwjNNJjz",
  "key33": "5Uk6QZJ8B4YpNWjoV1YZL7ayZmDG3zy5sWMArth6rV6pDhoXzRyrzL26AbCRgzjspSmYS5REM87ejDLPrzj3VQKD"
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
