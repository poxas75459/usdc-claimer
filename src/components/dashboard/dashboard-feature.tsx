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
    "59voDv8AUWN48Vh2t79ugcHACSAwDebzhvf7qzmeNHeuTWg4vBWs81kFW5j3aBi9v1JK8KsZ1Libu23w8LHVeJHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZKgeXtHB7ZTFwtd8aBby74hsvin3BmqtHE6FrCeUkNgFYPZbF7Qhuczry8isjRHU3HUqBHBMXdqyESnCDQBaet",
  "key1": "268CgbkHvKtqmpggWtTASTWjhCE61UTcnF3DSJyar1PPC7fvQ1qcDgdTExtSEXYwKo8DBarWweWN74hWCzgCmq1N",
  "key2": "3CpbrtYeafsMx21Z3fkDuKRGsPihoy4UrcimWdzQtM4QytYFyAwsr3GH8McTEj87gSYuzSip7Uyvk5thsd3W11ri",
  "key3": "dgTbt12f9NHzsXJ8eihT5L19W4Gon6G4BJ8GePi4JNdgLHLxTE52g4da1tq2BYKKcmE4mEWf73RDDLoPKWQHs3U",
  "key4": "2WvnJMf26BJPxF9FJeRj1F45CkNnoTSPjewrKrJqUEV5LA1F3cbpkVCPW7Fq4MXHRHUhmkAr94QEPuKsJqFEgES7",
  "key5": "4WL8F2stTtacmZe5Ef7LsUdnFVM9kXLHPWgwDbVCmfLJsZcFUSdYUW3LeZhS3aie6bNmw5VDDt848oD37wz22qpA",
  "key6": "5M2ZEf9LUkG9M2SQQt6TrUE7TabH1JgHRyBDZgE5R7tuiYGZyTpgWskGpo3Mve4hBZTwPmRXWrfdt2fnHSKPTnVU",
  "key7": "67MQx3xBTqHAboYotwUYmBhUoauQPs1ahCagsp7f8WpA4xaK7BDSi2MkTGc8VwuuqVfSmQ3NYVqtLU19a5MprwyC",
  "key8": "4FjLuJARmPkWh89sDfHb4J63q9wagB59WaH4d8LVjnXSEeMXDxyt5aoWaNTEecu5D9GWRh6gtTaVXY7vjmXp6pPV",
  "key9": "4XcwxAJpkyJFWkmAz36unusdRZcGpqdfZHnv6cNsidvtrrLFvBBzQe3uZYKEr4Jm2ar5XTAsF4vBvnUNLfEvoFep",
  "key10": "5AChiEfCqXny6aisdSqS7hC5MZ5gkKHHhtCGm5FiBJH2yBDE5zzXAyzTcaPHaTywRy5abXryjqrrQF6FXvNPNX9p",
  "key11": "4VEbgV8QRoQpQjw8azQY54HQi1wcddPyzytmiYWYgVFg5bGKtk83HFQGQf6kLiZGXoNUpzmHEswYRu1EAy6noHP3",
  "key12": "5mKLxp8uvmo4Bq4fWGVKZPH5VvJMxziaNo8ng3CCkb8YqtNPBYeYssWMQXEgA16qwhMZJAMd7hMZK8NPoWJ8swUJ",
  "key13": "4D83eVJuzQwWrhLA2jf3nke1SvuQnuFk84V9FXsLzbrdy783hMxmx8iAQB4CCn9x4YH7nf3ZjUroep7uJokEPReJ",
  "key14": "XxJV1qyFHgfdECxjZ6j6wRv6eV3GLocEuo3wUFWQpjysLbiGjbG199ncPWr6dQWxin5SLD1LfgRwXJhH9QfBzvR",
  "key15": "676u18o9gHGo2ToTSr2itYbtVDefzQprNGAi1x2oXCPm7HGQXfZLSsQpEsmmjcJnYKP4ksqvPSbEPFePKu2pgLSX",
  "key16": "42Tpncsti9xv8SY22NumV12VLUieuyGMVmU7EZwSZQ7usVVN4iGR54XYyNdh1cuPHh9iV5iYVc22HzahPryttrwn",
  "key17": "AqJCZi7HAw7fD2HoHkRpgV8n1AT25nbaLmLPQWgPNEZgfQHy8jp2MeEVZRjvygpABFQD9WWe6V3BrVDkCzcJUTE",
  "key18": "5ov6RB6ngpvACVrUdUXqiyTbpV5YtuB1RfJbViYCrdsW9Db2rZcK5dWC2zVLfuhwBdgNg5DBgkV6wcS79odSiWjj",
  "key19": "vynnPXZefVrATtUpP39z5MXxvf5R7s1NPaEma2fSzYMjUrE9qLedfWwvqfRQAg9QkhpsJgmA87HnH6R8hyiQyqi",
  "key20": "4k94p1RedsHPsQPYksLsX9jA94WBji3y8sviXCBy19kNQ8vxzWjh23of2BV4KrwyG3V4F7oXd5mnw3RwBPTbGWDK",
  "key21": "3CxwiCzBPFtDg18P7fAxbSV56xf3Hpb7rdVZFZeEBT2wse9NZFVQs4zNa1f2ie5qHryW3iGeSUMfxEFGyScEGkG",
  "key22": "3eA2dajH66k2MVUGaWTyAqbStec2HJmkUytAZjgf892BehQLmWPGWaSy88zLkGrZk5evL7jRoufGSgVAaX1apUeu",
  "key23": "3CQdjxQMpR6XcZNFQDjj4zXUrUMrVP4DovDR96TEohYt5h8YBhC84xf3VzfCMc81M3pi9nGkQmAPa6QqqBCaejb9",
  "key24": "5kxGhhgyHtUwtZv3Wf2NC1S3sAtLYhVuHo7t34GfrH7peSQnLYVmCeNAqtEmmfgtF8Zxpq1VTiHSe4A4TUfUs8uo",
  "key25": "5E54ixAo8fwA8HXSnr4Jhe2VNJFns1ugqV9Qf78osp1uAqEo6vMLPeJSHE5egNNdS1exY27kQkMYg5GuQsnePQPA",
  "key26": "3x1iKk3FtRYjKtG4cAHr8joE76onMeEymsbRNsiHQ8d7uErE2ZAvx418JrvhFoKc7F85eQvakiSsPh7jpFyU884g",
  "key27": "32fRkDeSnFTXje3n8Gx5tHWetbtgcWxzUfg52M4Thpgo4ZcoXvxgutvqMQW81zQ7cUaFQt4Aa4WaSoaaDUTp2yQa",
  "key28": "3qpvNbxbN7buSVdbEEdnLgoGouhV3BMWYJ43BXvyCzsSqs9WqzrKFu8bhdNfC494zP87nK8dq5JM2KMRpyRzi7Yd",
  "key29": "5GyczXgBDxLBD6BqgxD3nbdCpM6rP2k5piLUnkZSMSJ1sAc8KS5hGsm7ZGQoWSzLkmvebzFW7fF6zLdUKK9JocEm",
  "key30": "3KgdictQesmVKYSJgyA9XGjyXVjZcJBgB2oUvdWjttBoVzyrXQok2yPDj8F486ty8Ar7pTqS34D8c3CjTp2eXBrR",
  "key31": "2yxxNiTUhdEa8hJzpaW83cvh9sdBbx1CxJBxvL2PsGbjcehE2BJKVGZz419YYSy6yVC2VTYGAnw6zB2aoXTb4owM",
  "key32": "4nDNgCB5iSHR7eCs4CXsCrpsbKH2qNTRQAbV5HwAWn5hynb5NGyXC3V2wjv2ZvMWUzZ7mRnQMpM1Hzv4EHRXY62E",
  "key33": "572Fwhu7DDcJzRDYUt32p256LDHFPpWmSXd3PG8Pn6ww5uH7AMWxGvBEFMbVdULhu8veWCbiTGyb5T5FZntrEegh",
  "key34": "66Xwd9XGPZmFXccNowaJgWRdep6nPiKY2Bo3Z9KhR7qDHWV9JLQ68Pv2BJaNHCxFmnpnrUKLbLkaBWZR2UTjBWuT",
  "key35": "2AS3G8TTm67cty6RBDfV9uwokjbZgPJFcu1LuR1QqXfTmZtubx7PaqQDsNtecb7m8XPgiDLiXMYWfsZgffZYRuXP",
  "key36": "5c6A1vM5KiksXGJ3guGfZVpsbB1xiiUm7cp3TqA2QnogGY4q6UBNFzfHjwU6ahxbejAKRFwVNcn4KEeLRui1oGAg",
  "key37": "5fu7UzVodsa3MaSvwWYy7GhCZcLnSRU2K2Xdn4KkNnRNesL6NeubaT23XbQL5cuUi2JV4VrD1GQnJ8a9XYK8ie2A",
  "key38": "4z2qf9m9iP7KELQ2adZ1GYn5J6bYCnirPQbLTncCBXgevCK9nY2wGmrpGYx2D6EcvLSEdA9DF1RsSs8Mkw63RRfb",
  "key39": "4Yvf8tPcFxSN7okXx8MH9G3VBHYSSztquCyv3dXqLZtVxwXJPJFNc1eWA6GHP8yaEufA4DexLgdFNEQ9zpQcqppz",
  "key40": "3ev4yuWCj8jTswPBNpbfvzwutNHkoSS1Dv5ks2eWyTExh2nEt1L3UaZKLFh1Vg7yDwoAimp7e3wLJLJ1aJMJmsnQ",
  "key41": "4XprdhRRcXandPDpn6m5LUDA8XtxMTX7pddpPYygk1FZK429mVQGj9ntLoL9rYE37x1p84mDreidcEc1UJn3jbTf",
  "key42": "2WatSBiaAxjnrBpx214r7WwDmhGXg7RqBLYLYqXPe55nk68EGmfcXQypdys1eRWUUj9bE8ef3E6nkarCFy3UKNwg"
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
