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
    "BVXGzXmD8o42poeHaq9a6PzkYX5qWRgyfVNJJy7vzUroRtjzY78WB5ZviSyzmAjRBjPd1ZZxJxMwZ16mQAj8wch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SCdDqtVJAPtEG1eqKM9RA3XapLHciKCcrZbhHVUVLqs81qrWKsQkJEH6SnVasAsy55R4wf73LRfN5UNcVeAGnpD",
  "key1": "MzifNVLBA5Pz2Lrb47pUzbAY2zvLvMXt3qzsGi1GDKPKFctsxQ4Qs8TvNsM92f7XuDAFCfq68VyumtBqCx987ny",
  "key2": "pTHMNTKNSY8iWjfCeb48JovcHe2Um7xJYgMG56NVMj6xCjV9zmAC3A7yZYvsnxJVg9ejr2zQkdCQ3qxuWa65yFX",
  "key3": "3vNBJjqHfUoK88JntYRCgdUoSeDwavSTSTf95bsiMQDjg89CZxUGAUVu2SP9FVRP3sm27TyCtw5HfvS7DA5mphP1",
  "key4": "4toG8pMcq5BxVyUHRGKkdGxHDU1Nu8twh4qyLziqmhBDfr3RW7eYhpCXHqVBLRfs5CdKtxTfPTpw84NzVknMn8XB",
  "key5": "65dEKzc7zYMHappHwS7B4mEYGhPVAamSCLL7eRcvFsDvFZ7jSVX4p83QJctbj52nVnYvJTMjTPY4FoimRtUaytKZ",
  "key6": "5iva6uNK45AV9oCWT2kcVoY1akETUnd4ziPg256rNpNMvMPzApkEiMLozpRrSvms5zZAS1BrxNUpCRjHngvvjE7w",
  "key7": "5FtvZ31KG8F7nweo7Ndj9Q4a7siQynVuGK1UA2dDoCCkx6kMaLt1MSh4Lt9qJfuRCEdz3Bj1oQrnCEgpFiXCd37U",
  "key8": "5vPBhqCe5tVFjaadyTk8QroSdUkWMRbaBPtgbLRvMuKAVZGhhR5TrSrgLhRFeAcJxg8f5pdJBhGavfm5LRTxxRwX",
  "key9": "22VKA2y3DyqmPU6u68Wj8PhzFgSNUAezaL1ysxiEwCpPGhYLvGWsSNHGzjiAKSSEDfbFSXpiDfo2ZVVEKTUfFiRq",
  "key10": "4UcK5qz3uuQXbmoFRH6wewmiixgLyUsoQwGjw6nMfvQdfSPSSRhKKRvrMZhHp5Uu5tCCyaLtydF5UFbqL8HVVWE8",
  "key11": "5u6ZEZQPyMfRABHk4DSG8n6jfDRVohqdhEWY7iLyp7MznJNjPyELhmkytoWXqsXkmNm1c12wZf4cKf7UStZ1RCd7",
  "key12": "3Q49ks9HmiBYX9wGN3cXUTo4wvApqxD1bexJ83HiRarresz9x4Ti7HxSCrwXjskmRN1grMM7ekiJHogGqxJ8WFP9",
  "key13": "3hS5NkGiCHgnejLKrB74ayWqNPQwZahcHkPFRnmWofXXbaPAmC9rNfT6an6LuQeU796GviVKb4eeZKr74iWzk99i",
  "key14": "5xZQbSNk3VRcdprwtSyHnfYRX82oGcUgD3Xu37jyiJmLUR87sL9dDu3jpspSdrhvuxDnxW43UmCjsaQBhufY2qia",
  "key15": "22NzYDZ9dLYYuCvpbbrKNYKPsT61Xi7CXcQZLze7S1hRkHMeCJi1kDiYPmReKkVkWTT4hXVoYpJ3rQLMZfmXTbp1",
  "key16": "4hBsMvfWM51tBeZLeWBpCMDdcMuHUQh2riWSqpWhuokMkbnfGxXMzJUT2wp258D7nKdYq1cTSvYR7ZtiPA3oLFHn",
  "key17": "5PbQjB4xWsaJNwH4LrZ58DjjMD8a9kuGXkPLCEhtDYakaz9JDtQ9pLaTzPxUiUTnXnihE2CymB9yMpcDvXMT2Wjr",
  "key18": "vxebNsBq4JzBJNc7QSp8m6Ls6cU5L6mRDbous4iZB2oYGuUfMUmQcb5MoXPwpUBGCrHidd6ss4tra9fT23bCMyx",
  "key19": "2qxQjRmvp5i6RWt4aLuatUjYb7rWK4oiJdGB2YGCewC4TE1UF1HJm5gVj1srMYZygxpWp7fdyJdCkdc85JPM8oWo",
  "key20": "62Tih1v73rCgZiH8JGETnSrhkFQqiZ5Fj3JRJTf1U6LSuTeP39iPMkb1tvpnsBuzFFbpKmckJBnmFcheV8SMsUcs",
  "key21": "3eCxWqEYWGHiDX9eQfHieYSHkbqfpoEvT6tJUVTkSRZ2cx9cNrs1hF8W3bVvc3w4VtJmnvJ5pgybbg8eJsVBEYhg",
  "key22": "5pSgAdftyrMGL6QC3Ls4FLTB9WAchFAUQq8EjwGYPU2HkgC1Dh7BXEwyc3ShFMxnXxbCbKXbDpxRY3SA3rC8Y7i5",
  "key23": "34dK8FjaV16EKU1dHfSz5ZNbT6XnMM6K2zcdM4VjiQoPaRmAxKnpnusbmpGzX7yAc6CU2MzpkBh6cUUPxnQ3Lb3Z",
  "key24": "3J5mgsYAFiMsoKay9Emho6gAWmc5SrLnLTKrn4AMA9xmL3W4u6bRXde4QmwPq5Y8rofZZ29oxmVF4kncN1eZ7mSj",
  "key25": "3gyofvznb7A5r3nim2frCPrDo1Pe1QfhoLMuQqGfF26uvXwNynnkBohL3H7x8T7AuQy6ppCGaCxGYnrJn51jQ6XD",
  "key26": "2dXRYMRzoKVf4TgSwZL4VsXn2BWT6huKDtRDsDvKVbnnazxVWFU7phFhjTZe6EViFajS6A4GuqYxZKCdgBue3D4n",
  "key27": "2Wzg2fUfkgNdQMrpkLa2Hp2NKU7TZmYyAtD8rvCB5j9C8pH3piwquWHaJBKzAdDFKXaUzCWvYdtnzs3u4xZ9531U",
  "key28": "3NvCqSgxfqmsxYxdXSEoSJ1dzmsq8DRw7yKGT4YLAgvBTFtXXGXRzWXfLkctMjDY7W82CqXFzPW6BzDYDi6A7ewm",
  "key29": "65ruVL3c39TAR6Jt75wDF1UMURDcNVGhERM9LS9DfwEeYXZZYtDqQPnt7dikRanRCDGSAjqb2K7Xs723UH4q4eJz",
  "key30": "4JwrTs1kTP9DuYFdi6sifbv3sdsod6obBG3dqasuDMhDjMv2V4nFHdGEPCTTC1vdsQMacKqNk7hAGQFoyVS6ReXW",
  "key31": "4yWS3iocq6jm2SnUBk9rXnAmRMp8dMgQHhTyfTvPFcJMSjBmtjcA1fkSDYYyDArYRp9vUJ6VTVUCZTWv5h9uvieB",
  "key32": "4BNnZZ579nnCYfXxFDXuSzCK49b2uy8UZVbPQ5LBwPrsjpscgevco8qkqR2FZUhu1H5tCkKa5NhbSMePym3hJCkz",
  "key33": "fqRj2KpJNa72XRUFTREzTEY1CTR79Cijvp99Adkbw4UASqqBCx3jVjcvPe1ftWEqsJHBXD9faWd1gfpodCpwL9F",
  "key34": "4TC329Fx87dckppx6J3Jx6shGdU4J1bhLLedP1RVjjYUqw4BXWLEvkiaTx8bpY9YzMuA6f8U1rSKmwkZhDFicmXE",
  "key35": "4rUFwqwKuCMwoVFdMYFB8Qe9UigkJX9sKDMo9zvboPmi77LfsVdDqMuYnsLsFHjyeECN3kgemfiEbw52xupTdS5R",
  "key36": "2JL79zf8pYYWX3N18d2JRA5h3FbtqBBkVwqnPDLHgizeGP9PN7vgnQmujLHHuXxq7pVsf4urMYJfHfxEYqHeXnCD"
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
