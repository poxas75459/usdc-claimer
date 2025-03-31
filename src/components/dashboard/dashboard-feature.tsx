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
    "3S5sL9bjnYtM1MZSQdYgmdfrFsQjNd3MwBZNiKgxg51i92WkVh1Duh7SfSknfxJcB2hLvAR98pj88imo2M31YPxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TEjkFK3kdFtQey4erncq7QCwBM7GP6bAfLmckRnjzGdLq8PT7wCyGwWxpuu1ox6HVx4XSqT16DwHdWrCX2KRWZa",
  "key1": "3tzw1ERMWh9pHfFmbx37nymJG9KnCXNrVfF9DkDyMenNuM2boPArWDzpZJbwEQxPsqBnSkobwSEnt9ziS1QFnsm",
  "key2": "5VKqy5R1n3V7uTMk8mb2bMFhqSUfwF6erXV5ToxznNywbdYLZB5BX32WtCddunNR51QWp9iuLmukVBbRsF5pMJ7U",
  "key3": "2ZERMuDa8Q5ESAwFCKYPVcx22X21bwoX8DaArEeysBxfpgV4JcGwHRMPeqBiLurDXq5CoA6ySAMkLSQqfDeHcen9",
  "key4": "ceNR98kVoVMgvA4rAkH42nY5agmKiyy3iZTXXto8U2NFUeT7sBh2JBoz1rUEbtAye2uV2FtPLdX5Ev6cfCwuKPG",
  "key5": "2M7Qb5KqQ4G6itvzrFN2sG28kcCD5abeBZcAEwTrJvuZXLmc6GK7VCY7VUnLL7xvZgiPuyydj93C39q9MWwQyEcA",
  "key6": "2QexGcKAD6XJGvLPHRViSVQAtHSzrjrXpdyrFvXzPeXoNtBqqTvgWKdf5dn8AnyzXDymJGeizW5mDktT8Fy9mndC",
  "key7": "4rRJmHQm8hUMF1aiwAiBXfatifzoTjNdX9qaX7npXpUiLCLxLgExYRaJDPGioYihw9mZ81odnyuLusPuFuVd6uxV",
  "key8": "LzD6rPhoYB85SaXcKGLEU4C15mMj3eEmRjG8xXRxgvUS9ZSTCTv6MrJDx7Jyx9PSAiLHqx3EgKCcaah9Atr37rM",
  "key9": "2BsXmEsspSdMXdBo5CjvRVKe9WM4qiML7DySi8LveepLPa6yUtFi8HvNJ6g9xPeUNhAnxFgHv7QpaZP9wMzRaAjq",
  "key10": "5TzJJBLj71L6TLacdCny91fKpinLigRqjGBjLD2EHkQceJyWhpQEGRv6JmW96PGeUq4mm6KFxNxwGZoGMVS6zAMy",
  "key11": "6SjYkW5CnYebBsnDxFkD5MZR7EGMYNfw7coaj8RczvAWsJmqPyb9U1d61a9Pzp62CLvhguujqFDcDfhHBRr19Pr",
  "key12": "2dRW6cgfcLM9wSaVe1pAU7XAw47HhS8tDxst97zH6MsH2YnKekoJXVSXnezbWeCTjC25RdmxRofdiTgtTUcWaUHE",
  "key13": "8xuCMZ3P1xCk8d67nBcTt5GiBDsdzpPYDDYu9TaLKo3Hm8mcS7jYfV4HdYjazvTMbYrx6yiiVHF1rJwqFKXxYuR",
  "key14": "2fj9k3YGQAPXK4dYL1qVUqyLj4dGji1TJ2jzYqyVfcZYDTC2qgqvgB1mjfTWDYTDHmGnvMtqXoeHS6n28MSASfQP",
  "key15": "4oDEDxLmxgPa4Ndphsk6zEaE2b34zu1qWPGTqM6wLoaLLERgMAJxYPGoM2Rjo2w7o94g4NccZcRzNdVWKVNUgfEx",
  "key16": "9bJT2p4wpQizLZqcbhYCy7XRvU8CmCjdxvDMvsWPCqW6VVsseQWVc5s4x2NU2ZhBgaUbuyFJvpjwD1DTPFWUWLW",
  "key17": "35A8iNfHkjR4jRpeb2ZUWaDNzBjGFDP1UPgBhSLt5oKtAXY7ACX6h7ojWmda3iq7AvQDf8KCNDYQnyDrsdea3PvY",
  "key18": "5w3AbHtthegSXtaf329qULtHZ7A9qrE5fTy312FV1hEbZo9eDSJwGoujemtdTzPHYf65D4r5RuiYUwXts6TQQKd5",
  "key19": "7PpZUprMzEUkktqBNaeWytZwhZ6Z5AXphg1z9o7FCor7D6k8K8gqbxz2yg9mo9fWFQQvKZbVVPhwPTN6VG7miDJ",
  "key20": "TMJrrDiS5Tombcgz1SQrt5PbDf73yeGtWr5QZhiWmMJuEfki8vNcLAq8AV6LwfGasvyVtyPALfRV7j2LJ4DPHBg",
  "key21": "5esvTmsTicHhhbGw4SQF9Zcrc6hdX6dZgQu2xGoe9LWHe8GgNYdY3XpxdSiZvsGvrPvRF3bp7j7PF9kDamrmYmTW",
  "key22": "5e11tmJJkxqaVDJL4dVcuhZgJJRVybDJGAeXW8xpZMwHQrmxQ8PwBSDfaF7pCj5sgeL83o848i3zVJdLNfQE51gt",
  "key23": "2GiSDY9fEbe441HfbHLSAsZzDR5ut41u7VJGBjC6PLmEXcXjE29Wu82i4xg2Tnasj7BpQAMYEXo2zPncmgUowoZB",
  "key24": "3KHbqTxAbToCZVAJCG7KZkPf25rCFh8hAWPYtY9Chi4dyYpjsdquFYwDFLtPwJsh61bGFn7CESNa8V8gBTSEiHr3",
  "key25": "4BedrSau8uSTJ6v528TLezbEr51Kk8m3WKb3HVy9RnyfAmj17FFHUJLpXCW4wQkiT6Qikz6aNR1nDeGbEcMHZnNH",
  "key26": "4EZrYmexgssgWp9Vxi2frUyn8YwpyU1BHyzUutWxQAS3JygZRrvcpKxwqY6FMbPoRvCxbca1pzvUxUod7hWzpYKy",
  "key27": "3F6yvjDTb3ppJu4m6WTe5kvfLBFRQhnbosvZ8MY4EmUQeBC1uv8mJKLJSNJuAYiPYyRrJVPtNaaRDSgBUZuDD2b8",
  "key28": "2mpPSdfprLFkmWN1GfVzPD1VjNk6RzuMLPRQvBNGpZ5TdKbjEunkHxMbgTbBpzd2zQnjX6vmQ2xguzpyCpnia8kw",
  "key29": "5tkCtNKJeuuPhXTefP6LrFxZMeRpbZkfWtiwox2zu54BU5J9hCZtowH2RfTJEk5FTm958P3QgjcNBFp7NsjR2sVH",
  "key30": "upToiGCMa5NYouvGCXWi9PQbCwpWRFuF8bxTRN4MhSuaVuKWASYxtDfzH4HsMVYBR9pNiFE6HmBrRk4STs893hp",
  "key31": "5Ei5mr25T2pQjBRdDCcGmYBGBQPf6gVwXobjytzamxxiwfDgE1MNKCM761uVfTRx8Aj3q9z5hpDeSbBLsYpi7JnN",
  "key32": "39TWEUDmyMHWu2GFw6XcuSeNuQZEGNtGvzUjiNZQZMbjVDrgLCA21YRGXhnB58uC1SwCyHDYRm4tKEQ9MJL6dD8a",
  "key33": "3RH6sZ8L6hk4qzBn351uuzqdDMFbQoNDuJpGhdEkbb9GdDkur6rjLBPUfeH4SHY5LwScAHsAz5DU2xF9rM2VGmL3",
  "key34": "8J9z3vf9QHdPUp7jYoXwUQ7DNtYq4mRBFHeW3beSdfEWKrxruZPJTo5msGFunaWyyduAHkYvsiCEPAFTbo3nbix",
  "key35": "zHoPcX4yg9xFy7cEs2SNX5yteLHxsNuRrmn6Qe6UWGGpa9bmvAtwhYDkCkMUJzQTWi9Wg7Z3MjTx8cVKQsyePFi",
  "key36": "2TT4mUMQVCmcjA1QKHtxfqsvpQNPwoSox9xLeNWGky78C98GfBTez8sseXsUX87bZCNXBoCy7Q3XFtCF4d9ctb4Y",
  "key37": "2HVMmjiwmfvZWzFWrh7ErteoqffhsQ6fnC2FyyjoDFnj78BtjeX5X372xPHV2ncL1YktyitFQSyckMBPzeuNbAMi",
  "key38": "nMDoBHjD2bdNY1LSc5TxBDLCeRhBxEdxVzhTKZ5jmjvFLEoGANnxaCHb4ZUueNRK8xuw5PMV9XXkbvg9aF3T7Ax",
  "key39": "4FVGRWcEg9qR5tw5wsxLupLBfGvUhZxPJuVsWNGXawgGU3pi1QxvRpAUnnt3Rie1A4iPqGbwtxiTjCQMJ3NGUTCE",
  "key40": "5BNT9PuvCgG1Zhg3t53jEXvvkf1YXQEAAEDNUorGWbHELsSoAQGBDfWZR4eoY842kSCgTDH2HXyiSDNbMHyWJ5Nt",
  "key41": "2EJ8V8mM8CP18zafFrBva9ra9ALYqoj2mM49NCkqWP89VyqvULpQFDdTNB9XoDP1TXCdhzx6uAEtg6pPygD7QuS7",
  "key42": "54Ec9FrHzjz8rLJYXT3VWssaR95etkREAAC2xTSrmpMBhFuumtLjSTVLYVp8WiGJEkbKBAEo33qMmEusXTCUrzsz",
  "key43": "4Zsfdm4NaKzwS1fWbmaRoYcmuxvRsxetQ4LDADz8FBDz6uZ2CcVhQFJaiqRMwFRyiWheihEAnow3h6G37bPdWSmx",
  "key44": "4Ffi75e46Djie1uikwe2NZxnHqD8F16JjLP8i25r47AARsJXrJUbgpnEpKgoDssJiRkeqDcZBDSmoCqzw4U1M1go",
  "key45": "5SNU2ymvBrQmKCWDyD7Bg6Bk8km8a269fLkx5AMhgAd2R381FAuiBrDf7asUaxMEx7sFVEoBqTtbctczrFBMeib1",
  "key46": "LceRoinmE7f23zjeDfVqTiW5nu3nNT6yrjENcFtviMmwA8FxpvCYHBzcVN7vJMZt6RBvsfPwPZErhAe1g7kyPez",
  "key47": "5PzxyK4Rsjgxipkwu9yCazdSdDtWgBhB1QXaak4DazpR9XErEzPAikbbi3UigGmiR4HpcLRH96LTbpKb6t3DnBTd",
  "key48": "5njVKEBrTavz42ej7ATCueV7PyQpUvPBWUJfuZRFMAcdCzKaDzRGtuq6osfaR7qb11SGso7fm5ZbzKnWTHSCptmR"
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
