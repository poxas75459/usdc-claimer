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
    "2PnG4c1agbdZmxHgk3aDZ3e6jfGeYJxJuJnbSJh2tqhstbjHtXVB3y5yFQHppaA14MHcTn5E76tW6VS1NytwRt2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1A3tjNPQfqVESUdEJqVA1PUmeSojU5nxZ8hCrMojh195Le1fqJFHjq26faVdHH3UGX517MDvid2EXPZtKNWpP3y",
  "key1": "2vkaQFHpqVRGd2z98QNQvCSTraftpssZi8Fsic1EHuvK7rVptvCepsZVrtjzX2VSuJ14bfirgMmWuJXjmmZPF8oc",
  "key2": "4Ss957FVYzouf6ueupNwy3wX9WcrLunSukCZLSrwYXeoK37pu2q5LqR8sEGp9y4yJ4f1F6g45MagAkyehZQjHDbA",
  "key3": "3J7FMcBhp65pJLPqGykxCpAmvb4qEViLDvM1buk29WyUsBcW7nGiYjWj1dTgXVAFYvNSrouwoBmDaBT3sFneEMWS",
  "key4": "X6u84GUps8GnnR2DozsU1bVCLUE18A7xVTPgoHd6otV9CUHPQXhdER2Ai4YyMFijmmscwTMQSgcAWjtiqLvmMvR",
  "key5": "4qmm7gP3j6x7UmzxFsZCBdxSFwZkxBDYQ5Y1tf82R9vPxpRHwKnKjLRg9aE9LGoAJjAFRnmeUNeA5UgShK8ZuLSm",
  "key6": "4XVqA2MCCyTPpDEER4rauSHpMLyaPmvqsdUtiZqnXELqUdPPF9hSvKfhfZ6tJHRkJbzrihW12FbckPVRG8H21L2S",
  "key7": "2XNFFr9F9zEz85kPTx7yHm9DY9eqVxZ6tKaLabCJpinsa4iB6LsVp1DVK7v6EaSmTub4PPfmC21G8owkX8dK8ixQ",
  "key8": "29J9zyebMUebgQJUAmBv1foBLJDZUuTWKwn6HP9bCnGevRtpittBeN7NiuWQGTeqYZvTAFstYKVahaYi4w2poWCN",
  "key9": "5H9BpdqnTHgVoTUCENYU76AvBdm5Xfg1VJqduFrh2w9roqu2DaKwB9TRNE5Qyqe8mw1wQh1ieXPmCZMnj7TaAwpU",
  "key10": "3HBVQ4V5X2AppMpEnFSTQkno5safoxfxeMFuTnytcMGfxpopxfX5KjxyPu1Q8ScyqRovvjwbbY2FWVZdFr73HNQX",
  "key11": "5MzxfiWqhzRavVSMQRog8Yqi8EP4WsUwdviJ1Urc8aywnBGBn6iNEs36pr9xStEXpwczTxuyxfGfQXooLdVFsqQz",
  "key12": "p84ZpBkHdrQjyBtHB5tvuM5dHdRJju8xtz9ihPKBuvqJH3Y3trYkhpkNQMDGntCfsE86cxh44tuo3GZTdcNrN92",
  "key13": "3seii8qSCSDmUeY6adXVXRa71FAR6DiHfu1QaDCqwGDAB4rVTYXwzusa4rs1ytuiQr9dy3rpFmPESaMZuP3AzwQw",
  "key14": "3BDLVsHo97XDGEWTzHDK1e6HTc36P9Yq1YGM9CvMk8wSvTr354Uj3DBtPPDkCrfj2511NPVKS19RvrRHca9bV9d6",
  "key15": "3akBUbjrash9tRA1PJ3s4RyQUkSuXZKucNe7SouHt34x6ui8GCMh3ftQ1eC6UZbMiWwnCXV8P6rM3ycadLo8Tb5Q",
  "key16": "522NEdkqH3Y7EMTTP9WshQH3ge4Xu3YX8ozb6Nw11baytof8MARRXqBiHgiPgCdF55QHScVsSy1xZGKbKmwezYxP",
  "key17": "21WXAEJxYX8tRt4L5QKWkeL6D1G6iczm77RgrKUnUXjqCVfEfyHnJMu7zDXAB7EyeGpixEwzaQ99KgpeWAhTR9z5",
  "key18": "3usJxEQ2WgEMHUNyK7aEE99K4XTZTRneBfmA4moYeFGsDgNRLijvUoPB6xFKWwbYokKy6GExYxv9WPofYF2BEkSo",
  "key19": "323T68357Q1xc497ejgb6ATNTBop4HcdDZMVWVQE5hF5bGkfoHZyEtCP8tK3Mh1V3WzKNU3AtvSHzMbhmkfxWg3m",
  "key20": "4o99U6XEqKZBfzc7B8oTXCXkjf3hvMZdNbseeuZdArzHfo19F51CdktKb8ALWVZHA1tpSvuee19pNaMnA7PP4YHo",
  "key21": "5PGtJ734TRDxHsJGCjSphHER3ywq3SAjiBPeAuLN7DahcvSqd9prLgKp6J3oDHBTTtf9bkn2yHH9Ca8dWfPHjm74",
  "key22": "48jYhyfcwLVbSi8h6DctnVkA8jnisEMdr3dJj5VoVhwb9hLTgSf7UyFRQoow69T3FKSdBTXYuhGmTbxcDnA4CdTQ",
  "key23": "5f186hEjy7c3BT4VZLeZKQBA8nUsqJ4KVzHA3kxV3RVPLNmFCoaA3G4cj4qhCBZeER9855DL4pLZe1XtEJmT3dar",
  "key24": "4s5gCU1rzsRJNvyPJ7FXR24BVA2G8kr1q6euNxznAL27aiNciB92EmdPodFUnMSBqeMCqRsHA4yCu47WoVM9KiHr",
  "key25": "2BAKMC5BvPoWcGfwbvKMKzwMe67gLK7kVngQEeKoJHmLEmayzZGcWnW7PvwVAPS2XRC4taFehXLT83WkFuSy7pWB",
  "key26": "Zke86a5ogPjwcikdGLKJHcEssRxCwfs7Wv6qSdTYAH32AUcmozmNHXW7KvboXVsvpqWLEajfhPFihvHRSZMKK5a",
  "key27": "3aZaRoDgeQmAmRNiKAmFWoPkhpjxtRrxbzinjtAJCiJ13p2axpoiPceVw9u4ZDQaNTxtRoysbsnJzusTp8hdwafk",
  "key28": "BWHaTT5Ha55rabdDCv8HnY53FLiSZtbdd3fnRmv5VTa9fuDxrZ7CWCpoobpkrLxToszmyUYUieuQ55AFJTq8p9h"
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
