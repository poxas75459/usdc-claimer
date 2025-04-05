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
    "1MG34SvkzaBofFxJgJQg3NCnJCBNVFU8rPDb3XFi5XXUPePWu8rpJZxg4V284QTWNjJfA6JHCcehBPchAG47GEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JcRNo1xxMwKMkzuLktda6Lau8ADTwknc5fXR2gJgQVM1jQwQ9cioNPSHjuD2KQrGMyv2LBtKjM38ZrD7bzKDBW9",
  "key1": "5SnxmTPJByT7c3WMwhSxRDZUwv5pGAHZrkzLpEd3Nm5ZLuyKrZHkwoTYDxGYmcbz5MiE52N2bcMfsa4hKRZ3CPf9",
  "key2": "3RXWsmFMSLzWmWHWaVW7vPBJv1HvQRMKSRAkcNYoQC7i4LQBDtJFbeVJ8niyV16Y6oBUYa62968HkLX3eoFoGU5V",
  "key3": "bY2WgV8pMS3MVH4WS4gn2ScJPYkz7hUjuufYQur8jLShE71vgBQzJdy9fzvPMNFtagvXmaRRm29vyPEacAeUNSw",
  "key4": "2A4XZxHj7bArAZZSjPuR9PqSxTcD4t6dsQKRTmKiWcHb1j1RfPPrgSZpTxbiGB53BLLUPnAgqYp1H5GLrhfKfea7",
  "key5": "3vs6ZWPbRKTm6NzJVrbdZn1vh7aKCkLSDHVMpgHqKxt8VhJgwp1RtJeCGbktD18CxgWvtf1EyiUwxPPEviLcNHM7",
  "key6": "4JSEje1iNCeVYtdjHZtJJKnCmDUM7RdoBp44M5YuPqyHBz8RMGL514dVfjsVNAAnkfCvbot1j9h6RFFg6iSrdRrH",
  "key7": "5UgQNMQxXvP4eBZ4SjWyJdjicj5Kkmftz883cAYBVq2gDrsfNiwHYME6UkjtY6ZFrSsWboHvAR3cZH5dj2eK5aSD",
  "key8": "3JyDvfM5oEggM7X3cAGQuLDJBfjaJDsCeaqnubcNZRzZT8MbCdBPWtBq9rvvkzaovt9162m6C8wpWZZ53ATC19fd",
  "key9": "3Kk3RVt8zef4z7bgkgrxqLHrtQftmKqsNVUz4DHxdnRT8aUgaBoMkZZ1gKpmYUMrFfXNZSexnpLN2C8QgJF5EPTa",
  "key10": "3aUD5ziURwu5YsixfrsGcoccA4NchNgkGJXtdLQopCDMiVS6ffEiZmzqyrfT4Q7QXvjc266FDjYRQH3RaWx2PWfC",
  "key11": "4mUs2fHdWgvtBxAbZQctsAQD24ARYGg9UAbn9XNiQ4soaVMGYwT7uzrMz8c9DwSVoU7Tnztg368kqHS5w7i9nKyU",
  "key12": "3rWk9hfobGnXfqPxgJmEApQYJokeB1pdLszE4su3yzDKuXmX9XBWcPc9f8zWubkE4HYXMMPGscyTcCzo2dJ9189j",
  "key13": "5SDFzNV9L15Ucx6Akrw3k5DFoXbT2QVi5TtgwkHdeRUjXydmPmTbcNQjJqfzGTKwrXx5pCpzc9sio7fQ7bH5VUns",
  "key14": "3vu1M6UFug6sPRikbLLeRF6SjqcgFL8ARnN5z4FHBAZyCtRMPyAttQXHCmSrmKoyKnGrmbVsjAg9REGH1ZswPpMS",
  "key15": "4ar6DspSjqJfaZ9usVCNp2g5MiXmQGcdw8sPvq3Mu27VoGDGUEdEjxDfzJYZrBPggPEo5nz8Anu5hHoGBVesVxYC",
  "key16": "2UToR4MRqxW9e1TFWJTxEaE66GvbVoi4RFgcyqtJVpa531f5oudTSQHzrVsZSvVfh5PNxwfRjqCxjGWW8WtLkjfQ",
  "key17": "2gkgFT7PP6FmjhKduRKynnwBt935AGigBjtRWk8HmM8VwUQBjTgPKsRgu49ZnVoUyjFi2bcvkeHZ934J9y6z3u4X",
  "key18": "57iPo5LrbokdWuLsjg1jQpJZ3J63uzdeSvo5RC7KLLGn2vrXmFG2aiM2NemvKc2MbACrubYCQ4hJjco7EPwF9mKW",
  "key19": "3GAjtnqRiL7FK6Z3dNLbwoQKh8KaL5jN7c4hk7AVpQZD3shz9jW95M5QSEEABr1EBkMjgebLWQiUTT5ESvQXsNTh",
  "key20": "Rsh2AhCid8Cg1Fr8KiJs2ZS94wALvdmTJKsh7zvuyCqKV4Zsrk26b77mVF3a7E9dyzPD6sX8wPXt8nPdAB7cSgy",
  "key21": "66tSNWVsCnhVgWEumz2bybr2mKD1StybVh2tetMbKn7Ze5RU5xVuKGzNAM5sSu73Y5CFqnvXbkrRNqHZjxiGFbnT",
  "key22": "5YBZgwN8tE3tyE8g1dVpqAQMNr6PnDrwySnLktD42pHtUMAx63NhUXHVRASmxZofiWh6o73rhMu3eKTPyq6LwoxS",
  "key23": "3aGfvMGD1jUHzmTtX4VfbfngoUao3KPqWwjDD5ocjJs4jc9pfSCaGaiFxL9VkvHa6L5BTP894D5oPNiyVBxuQhx8",
  "key24": "4BsRZcucJu3jCHwNXuvQhfkdCS9wR2fUTP35xoSuX4RgSoag2VQNH4zNz3Lj7zFhFdQrKqzSHvAdkT7fr4CAi3g5",
  "key25": "ENPkPWHtAfZAcmbNRx75AwjQNSvmU7gmXMe7kiVtWXwhFEvtMErB2BThaHFHKgAmv7GoRX77MXjB1GswPs7AbRx",
  "key26": "3bJM7ZdapmRyiHws7vpZMiZnu1iizrBen8L3hWv5vUSuXTghneq1QPPHV7zRtBdv71wGk6im51w56vmLt61NjnW9",
  "key27": "3ThodaMkwC1RZgQTBYMS8BdCnUmovSVsczPkoKSu1gFoWxJp4zJCE2hGNcGEq331xXSGtTcXVZFVmNyzd19tKsE6",
  "key28": "41zrjyP6u7xBKFitZxKVBt7MoJvV8wF53tSpJbL2eTTVFbUZNvp5f2cEZstgFbD4TRJTwnC1DbXZC4mFFfBa5SzX",
  "key29": "WAfyTUXZeSYMH3LvoLgDcHKTxfJ3XqHN7Ko6cTrEFsz3QNEriuzikMUyZ1un9EZcqXTYxarMdR58wd31m184C6k",
  "key30": "2m5ndMNxHDm6i8SVgcoECMqJKv43c3CSpZSJ5RL3SBpB9e3YZH39pQFuX632hrKw25i1RV4dXX9hWQRRQ15DmsRv",
  "key31": "5QGT82bqH3Jg7mnpyXznmdJFVsBFGXv9f6vrzCLUEHrxHbapLCUuv25VAMPthwD24d4jGxZ1Bd6usoSptUpuL6qw",
  "key32": "4HHinYeHKbpi6rqq42vQd5faSBBtgM6eBrivG5scQhSfo89KQXNJFcAchT4JZugmHXgCbLurPwKgLFSKbijz2bX4",
  "key33": "2jsAt8CJRFdPVCKJ8efWRvhGVYHUGHjt5VcfLpMVATe4aSsJFrN5MK9XLUbmhGp5QDn25R9JagKLrBtqgF6xrA6a",
  "key34": "ZicFVGmWqstQHWh8X5xbTx5km9xt2T5viPCMAgAPXYSmYhhTyatLZbaSB88eaMVezAoZgy3gTQKRhZkZ3Vqzjry",
  "key35": "28todmanNjgdJRbYr94mX8PwRf6o3fRuoK9py6p219aEsTNis4Uom9ddjcLSjBf3xcpPKYbdprBXyHLfHjjFqg8t",
  "key36": "5XhNbR8tNWofFfuwGmHsZaVc2vzmW4x6QChhdbxJaHg6UDpGMkXdErj1Bmnu3CUiMF2eNDHe8EeN8D7VQErPWPuC",
  "key37": "KdF7rXrLCzssb7ozWb4aQoDNUHCNnQeyQJv17HsqBG2w4Nkm8NQ6EoqtEucchi6qEjmtXdohqEtwN9YtdRYp1wT",
  "key38": "2prpdVM6wQ14qSrqqs3QbrUHqCAePzz8AphT1HZyiZhWvbDfqbQGxEEiCUqG7MUWVXibnmqAW7bgrXgd9hpbDkVP",
  "key39": "5KTJHnRMV6Ng46xy5whu2uYV8vpe7pTpyPJenK4oYBZV7eEc8aXzxPWDjMJjLyqCsfhyJSZSrYXstKD2bFHSE3h9",
  "key40": "mHLDGP3GUpKT9M98dWWKQ8NvddTwWc7oPnJAYo9R65SAmg3wceaN1kf3B5AXdQzQwqi7ESqaDA2jQAejzfiMfpu",
  "key41": "D7mrCTVsjZDzuA6YfGrs3dBrAA7W8Uz62qUmMqUrEfmcPi3BGGdH8um9WQWzXbQWZrcQRPDv6Sy1fkSPdiGCC8f",
  "key42": "5mDguzcPKi41b7PPnZDWTLH5zWPu2pzKksMhgpokDmtotdjEqj8Bcm3U9CNevSHoX7cQJWyAyvubJFcK9iscgJXF",
  "key43": "5nfMv5KXUQzuLAn7N6U1PnFk436pmy3L9T78KmxGzSs5RyevT9ePdNqckvSL3zueph5w4DV4LzJnCY356yUpUuoR",
  "key44": "2Ug2KYZMYAWfAYtfMRHUssuaHQzfs8Ta1aSAGaQPvFUFsaSqdeu9eaVHGnAXiDKp3eZFw6HVekgCsGB2cTn5thGg",
  "key45": "5ywKTfVy5QMwd9R5CBWq28V8tW53RswhiUtDYARpatQjs99u6MD3bycA12KKtzidq2QiWKCt1mkn8spC8fjfMUjT",
  "key46": "2Kx26Xo4efFLy9fWEPCPpRgkvcZyXTkWT61KimEKzxRkqzVijNR7HpSi65jfrtvJK5bGm9br6Wd4TTGrFikcFw3S",
  "key47": "5wX5yZ8WeK18B37pMi9Fn3P6L34hEZcwUe3oTgznemHUpaHawwkDtvidivJoPtEBtso2zdZCHV92ALe19H5zwPMn",
  "key48": "4XNt57VcekgvJSBVRKaXdMhQJqs564H4oUvFLdLCejVU4XQWPXQy5kqRREjLhtgTkNYKq4z2eWRbyBNJcKr9M3aV"
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
