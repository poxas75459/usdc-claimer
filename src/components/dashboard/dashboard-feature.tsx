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
    "3PfRpawGKda9EwKNq2568jevvaQ65z1ZLHecKB3dTQQkuLwsdyawvhjxBEx343gh4URYQ9mU7UtvTpjrEkmDUnCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvJAx7jA35FYxRg7bX5FiNyXZWm9EmwRpc6i2WpZ6qZDtyoxFGUYMXjG9Mw3CemwVvimnW7uZ5GZnLisoMBpZ2F",
  "key1": "2YcfkMJS7chuQEtJTxammRqazPhuYjXrvLw8G8Xy1HquLT3ni99r8Gq1P947qk26qGwDy4i6PjZs6dqUA4pps1Vg",
  "key2": "36maaiF2Q49YoRYpk4mBimGcHVn1pTQFzpCgFRGNqUbM4TgRJYKvPauCzQ4LdhPrPzb3wBZvB5nq6fMY3F2pFuyV",
  "key3": "5Jw54v4PoigPgdyama3B9fqV5Kb4dYvDgKCuio3enrVMGovgYXvfpRSfkdtTbksJmzWRXL7AMgupYRpLJjRGnt7T",
  "key4": "3krqgrPbTQGjNUCfHK94Jx3eWxLBggkSMBeEVmVq3ZXyoBSii7bX7TCXDhtMxboGgRhGptRCVQmshPqsWpJUjnQS",
  "key5": "4dkgbdMmcihwtf75mEhrVtMxvD6PcSsorFN6e9uJxvqTAfvpD7PJUebJb4Vg6tRc7HnhU5uT9fFTv5XJHCHd4NYT",
  "key6": "3vou7VPoBtwtHutQLws8sJ8ZBkPeFXp88yjRUtxEhxF89m9nXzFxJVwKcnbkKmvdPDeE7jWsR9QmSQoGZpbq9Diq",
  "key7": "4nkshrvSA4bGYmoGracjgARkqWXUUhB2BzkDd7U6DLxoPc5RmhFBL4XfcK9r11nLW5noC6Vi56X2BFqmz7SeSWuU",
  "key8": "4AcZprMc6j9qMMEgYa3LshenpgCfWb2pD84mLExC5ZuiQm1tToKEuL5yAxad9J15zP5d78e9fgJsxGLo6Gjq8VQo",
  "key9": "3a9rucEWAd6bXYoqgNMKtrMsUjjvU4giLL2uKkANzo4zT3keLZGw2aM4dn2LdmxxNGvjH9kBpX7Ruu22vLsh7o2J",
  "key10": "poyV5pRcNzbzeqaG1g7XtwxfQ2ocAr5fUMZ1o7bJBR9viXtaoTBZ2nZaxSrY9nxkQ5iX9X9DZXMnBzRRFZYgRSa",
  "key11": "4iTeMLSi3erK3wozpsD6wkq84zUTroVLMa33DaqSMLWrni42eoWTbPBrLPTQbCqYyHQ1UTMDNUaKzND3hAcSoNh4",
  "key12": "2VnJAo1qnTga3Zmsic6saXjJLY54JgdNBQFztA8ccdYPJ6Gy14e7Tuz3tEYu5BoBEHNNf2LtHaPMjmhDfHxzDFam",
  "key13": "2ftwdtSdaNVHqWYYjZpY5JGMLGv58AkLeVZyk3Tc17jfXLwg24CPWnYjDQpzsdvJmay8haXPCEhPyfZn37M8FRkT",
  "key14": "3mzWhWN7kKf2Gu9yZWzi6GWJMybhwSpwT7XqinD8rrSdpk65zeyMhYZni588LmPaRVzp4LTxZXdTi4gunHZNjTG1",
  "key15": "4et7PWX85JbBrKSPthvpeREjR7HTPvDHbKQXHiB6336aXWz3PDzvD2ydutJNgiLfZ7PwAKHnPrRhRxiUcYgfEirw",
  "key16": "4ZGJxSpV26Hp13ZCAHd1BL3byF1bkwd7TpFuf9rj4R1DnF2R2FvdoepanhuYHEt7NUDsKPG7Ry2aEg9fkwNtPSLH",
  "key17": "vKDBnXiNAsAkqH6F6Wpdwp4YG6kvtJjoNRuPPDNtjPhwHkHRw3j4x6UGgim1S6M12eFEFXqQQMdZQJghhRzsw22",
  "key18": "3DDmLZtBrw1FmRYdYGqrQ4JHtpyme4iMyGmBz1zMYT92YFNsw5gERBMaUgEMKQ1ZaMuygbakFWGq4QYXizAwam7g",
  "key19": "KwNr9kA6Yq7MAKEx6VjgfpzgFe2tezJSYBLBHwTD8HXh9BJYjhdEg5nwkFBGQpzjryCuzFGYNVYwb58AJyNyBXd",
  "key20": "2VfCQphxYz6XdGQ1tdYgNjFzmur3hntbUA1mrBiZjAn6UxGcgAgeieCdFX3s5MEufQ7qsfTJrCrgGGsnm4gJq6DR",
  "key21": "2cdDdELaQkE1CsSRCteR7JNUuexmv1gjopsRd3niUmULert7KdqMXNsnmGEm8L8PzDdnCjGZtAy8CtWx9gvxd8LW",
  "key22": "2vCHPh891s8KYmUVa9RgQLaHEWrVqw2JRQZMctcsyGia7FqUK6dMbm4CZ6vfGXWSYeu2CyMCrDiTNjsNXNYpCc2s",
  "key23": "Qi84vTBV1MWvS8h3Z37qfCN3UqMfcw5RvozWcZHdw9uLDJ4E5wiQvXcz9r5wettpA9iogVVxY1sqSmo4Ko8nXZq",
  "key24": "CqU3rWKSe9VjEfAigBYWD2huDfnUqrj2t3wfUk2wZERjzTiN6zcL3abGYDYpdVMxc9neTRfbmzX7NEP4LMzYdvX",
  "key25": "3JUKbCZePeZsRMELVhA6kpP8PoH2HFmLqbitKLTdQmc7viR8m91mMfnNozia8AU2g3CpiQim23G1Yp1nnHQ7hb9U",
  "key26": "4JKF259w264CQd9aUtfH4rhW2BB3MDWBE8pvL4f5VimkKjKqXiSYKXqFpSUvANkWHZMCSknaLfjxjjH3szWe3XaF",
  "key27": "23Rqzi6nHn6VUvEJ1VrNDVmWj8ox6BGkwW83iCYxcE2THhvSCqxJ9NVjhevisEyWwGdyYEBVoQgGRguRtnvBYx52",
  "key28": "5DYNTyfodhaaes6iNHWYa21vqVrewCD3X48uqiFm2U5CP2oX9aV6n6XpqXwomDV1VgEmEEyHSCLJRiVdTLUKeSmK",
  "key29": "4D9nydfDGbuvKyuREjaVpG6Gmnb66yUoKh1MWdj6vcohpM94HFFpy5XVFT814fHZN8FEt8FiXkGBLo5cKGZhzwJH",
  "key30": "2iQnoGnDy9ABnp1eMRtSHrFVLYCYNGV2ugQZA3sEYAjL67mniZ4oRbHT6tsugJQjktor7KA5v1mE6yUzeCs9kPrx",
  "key31": "5WSCimDM4KXdwcYRtAHtFEFUgnJtGnrn6LwdJ4DQoXxAqMyFnT3eoLwZ1fL8AHSk7E5yzGinrjVDKbZaCiUC9EHR",
  "key32": "uZKsmH6xDom6y3kUbxUKfret45pLb8FSjd2tWS5AoAQyLKHfD1YmL4yu4c2DyEiZuaMWipKr18qRJGiD2DoMaRj",
  "key33": "3pppQooRKuk4fqSBquAjEm3sv2dfJnSFJhxbcjntuDYZE7FpKyku4ouHFAV5893NjK77UeuVe1kBbYCsLo95qRxr",
  "key34": "3tDpCBPZv8wrd22U2wZhJGy44ZdZpRJHkZfuZfuc3mrJppFKZJNmcKg3MMd18LdLk7PwbB5MXnv61GBD4MkbKdcG",
  "key35": "5gniuyJ5ijxJ658QbrhW3oTFRecZFmakHiGD38qKpSmhyEQKDJYeWdYZpTYWFrbKpNWCpKisPAwdQMqDftgQxEwR"
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
