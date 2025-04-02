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
    "4oN6znAJN1wP3JoXxppNaUBharRvnZWXdHaLEvc29mE9WJFNtBA4wDFuWWqsyY9VrGW8m5DjjNZsJb4arriktN14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDhYhT5ev82KS4GrR1H8Bs3ah4htnVVHZtHN89dnQe2iERB2iqW4CamM2rCi3o6qC8S4PWQyMztpucA4Wfip4f7",
  "key1": "3LzyApjcYvHVEW3HyZdbnYNQ6NTFbA3HvNia4s3cNcsi52ndSRJxKvwgiTLDK5rddgyrhwEo5RmSQ7bhpPSpzpoh",
  "key2": "3Nfp5ctT9cujicwvSF3h4C6VkN8Rpujx6MW8qBNmcXvnxvQKfPB2Rnwmekh5aZcq7xQNtjbj7EvTRkzhzo93j4AQ",
  "key3": "eUkq7LrS4ZSRB3Fq4CcZyqRexjaLfeSYLWojmDHnbUMFoEE9bbyNF46zaKELXpran23E8fz72NU6XvBPsQiS9sS",
  "key4": "7KfVH9ShpjoPqDVsCQSnctZEhofrzJQgfqQcWfbw3FqkwWxfYCQzdp41nv5WzXnCLshofpPxx7Bdp4Ka6bCK89E",
  "key5": "61tRQvKv4duBNLUoATDne9MtqjdvTi2Q12q2Ev9DBkMKHojKXJMMsqjy2p3iVgJaaJZhHokS8Fw1xamVApvG57aW",
  "key6": "eFfoo1zxCQhV9NKCeCeeHsmxKLwxoBrty7MwcqMMVsVtCZWyBSDTmoiSDo1ALg3zeFjRXxtQ94WncbcsaNu6c4w",
  "key7": "4L2SbCnVMke4EoD4M2dESbazkmNdG4ebvn7tVn4saCjVQovwn4RrkeMU8ztJZjiqQBecL8GCG8NA9Y3eq9ap3Pmi",
  "key8": "XWPU8jjaPt5yYQxwPywhJeAbxWiYzKmFB7JGqiuZoZbd5xHAiSnwC5eRQVfR9hJyPUGZdwLqm2WCmGsJCXotWF5",
  "key9": "2rxmjFyGwJKMdcV2r5xDWCCtMjxcohACfQ87zAB2qupagbUUSUycnEryEjTgbiB2fYC37APWQUUNEdgodr7tzgaX",
  "key10": "2ozVsN7UxqKLygr9a6vajcG2s4BHLc5TNpBAxyiwpbSuCemYTenWvQAC8SjSwBGC9sHXTxh8hwNFFDqAgfxZ5b27",
  "key11": "3pSQ6VuFFXM3Ezg9WKSFk2oNF1dPmuG3dsikWPs5zgsnJW5Ps5NHoafBYLWxG1UsbW7Urrc9JAXCtGUS7v7gpvjW",
  "key12": "2WBrjwh6miJfw5EEazvEZWpRCsDGXCUh1zH94ppPZjYv8MaWLVvvgf7aMtdzS3os9tYtUswXwXhspdFSXDS483iu",
  "key13": "2yXuSjPXX59HCSQtyTy57PKgAS5UZjShWbsEom6sih7oqUi9rYRqAW44QKoQ1br2T9aw946unN3QdDD5LXVVUpgE",
  "key14": "3VCEpiRHxw89TMAtycjaxCn6N2Bu5DpZcb6HZPq4vtUJdNdQCyahEouWAGBuTRELTx6xzHBoz8S2GSRC7sMJYRFr",
  "key15": "29XVLrbgChV7vL2kFqt9mwCBSHKbc9d2RYFJP3CcgivqTufGS3W5c97JFTv5wh24LBaWoZsE4tzAfcbb67rj8e5g",
  "key16": "5UWK6onDYp8VxdXoosXjqEsCLCRJ8bFxjadgGCFKUsGk7bKeiNjgjQp9LwPanCcynEde3zbo7YLGmx7RP9HxSEDe",
  "key17": "24SJm3fSf6FxUfg2urHQMqX1LXfEDEF4F6YwtWrYn4Uv29789youFYGH6YcUbn6dEPmDr6s1cvsGBWxT7kDrswb5",
  "key18": "2QqFqVxkcuoKRAJ3Gs8s5S9i3QYU63QY2SgBTE6snR5rCqZu5pEDfPm7cup3ZVFwYXPT39SkY1sWiEEFfFSzk1ov",
  "key19": "53wtHHU14pDp4bLJk2goDkcvGDjcVz9mKYtSFDwKan95dTeLaRFwRTmgmVTHPqtin3euPj6xgdpYYurufizN96vN",
  "key20": "496pVRiZLBFkhiq476ExwJX1wWnczMvnHtNHQJJtMfQyFSevTk2gJBWBuSdctZeBc4Lrgky5YpJwuxETPDgozcxb",
  "key21": "3NcKvjJw55Xmddp5fqPZi2e5nFsrz1m6DzdgPrLWgKmHDAck5VJ4CcnfN3NueryJNPyzsey7W6dKSJiujkKHLALC",
  "key22": "2VaWa8id5S4U9LDH2YpZCbpHboNuxcv9AMZmcP63s8ktUZLmGHxmhgcDkjDge5kjbKaFabwPhECPBVLhNBfX1GKP",
  "key23": "csHch1iMMpBP7svHgs5oTZcZAUrVa8CnWFNtAgpdjQ7TwPqvp163MBHzTeC1ULrXx83RXcRxbiYJFjUrWEuGJLt",
  "key24": "3GomkB4Tr1pAXUoCc9WShHWpYdsJA5Aa9NRNVb8Xk9WaMHeosBeKsXEy93kyC9fo2f32ftXKLNje8dFGRkPha1H4",
  "key25": "5sSAFPUiux8hJSuu1NSQqEGbBxLsBKi3qxdnAwAM9wHFUCcjebrPJx2GDWt88geQwkYbhRRhQyBVkE2nqNztCC3p",
  "key26": "5NvMDzeMPNk8bhR1YNgdmemPZUmAHsLhmY7oDJKCDijmxiqLSm4cXc9SwzFyg2n5rm3x51LTxUSfVGnzuqwUSuJV",
  "key27": "5QK3HBoHR81h4s4nQkgcHG325EJkRtXQQjUinkBJ8rE2nZcKvnYpey6FBdroFRh5qqp21nzm169qJAGdH7eipwEX",
  "key28": "jx4ZH57e1LH2DgmqdDwMWaVkyWHFzK56VgDbeWrzBMnB5sZsaAZfoXVHwfeWFeKQew2MRuNNb5PBpVq9ZZpK8rT",
  "key29": "4uvuTPKUC8K5UqCAmNUxBWPSWDNLqE7vfPLmVr3RS3T8iy2g7xu276TfN2c24iwfvkCVXNnApUbSEdtEhBAtqQXU",
  "key30": "3DumYpM1vpXHBQVwopUAUrNoB29TsaftfZUT46MfrNPSwQNmFrEQ5W2epyG5EMcwuTgtF427ymJjxqV7U7LEsPZx",
  "key31": "32C8UfHGHeT63oXLUwbJY4exPV7Eh6tmpWhFxV6xxhD4uGLASjumj2MGYgcPjAjCNgBTqFyV4xNfz7NfWtKd7hHr",
  "key32": "4EfBjD4nTrjnq2wDuWsNzjJEyntav2mYK3mLtkCkqy2X97twvjewDERZMy87QQDe1kbd1VofXzNDGuhnSJmjpM1",
  "key33": "37b12LN4sMR1R2KmGwemRCAKVCjDaaqy7bLxk6Ys5XW56dn3UziJw47Adj2WkJFgcg5SJAKTV7Tg8G43Hv5gJSTv",
  "key34": "2r6CziXSEfHvD8SNWgN3hKZFEQu9USVvVCiD5wzGyUvNyMjwBjMjgehNa8e2pPi8P8kNXSowZADvUDvxo8qtgb9J",
  "key35": "pUHmBp7mx68gRFYWpFS2pSCH6XwDCcCr2xmuNX1hbGY7EKHHK2uiyN8ffiRPYg3qkTaHQM7s8UxJGNtUZX3mCpA",
  "key36": "3TbcyQK1RtEPFeooUMWZ9qSBkybz7nGZZvMF1PziirivJJSNXU4GMR8QfnF3t5PUPRoPAbd4QFHLqxDT93JraMF2",
  "key37": "4xyF3j9asVuypuRxQQbPjtFbMMAe3GKiAC1FECEamDCuNnitZA7p65rxDV6s4KBo7ya45JgkrASYPTDTpKeb7j6g",
  "key38": "StD8xNMDPFEN9PZjoeC1G3VioAq3UM2dbVA2vcNb1EV4uWdjcvJ233tTbhVfwMH5oRAQiePSHd7iCrpJCXtdAsK",
  "key39": "25g8D9trc7s9FpMVkwojKPmo6WMgPQd1L6gLaLpPgb519faqk9pKgVBmqZGM3Pn4VzBoGGBN72AuT1vXGUNGuui7",
  "key40": "42hrTGhnJH6na2u3Yb4MqB7TNrWoT4u5tEJkwVbjAeu8zvGrTHtwqwoYYv7DpyoonwuJT68Q6gAhmdy8Lda28BQ4",
  "key41": "4f6EDsyCaviTfrgMuRbWH41Afh2i3qTd9fKwvpcFiqVDDWMJFyo7CM8kqQrVkXh2EnTAcQQzTa2XpS1yJRMEz4zR"
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
