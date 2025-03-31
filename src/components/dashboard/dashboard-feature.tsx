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
    "4iLj1f16qVEz2dG8rHyUZwiqB95BtcchozsY7Tu1kGirqCpP6ZrvaXannPUqTHuuxx8qWbyPTwULqwURWrTorVDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6M9HgJs8h9gi7jHZvearKyXaChAfT38nyqizh7fepsMtEibmriAAd4JAEg6Stws5s5Ltwe3gVEZ6hf1cGASSeb",
  "key1": "XMoujyx6eLLgWPUbpqfGX1iRYa47yeNLDZ9pq3QhPsa64tdWXejUPSMfQ7VMg5y1g1CUbXygZnuw4VXj22esidP",
  "key2": "22ss3EAUnKTu5HE1G2vE6sp7f3TeYf779ABbG2URqiCo9n5WQHifTqfMzmGAKFRU97hjxbsFyi8DQR6siLL65SZa",
  "key3": "2LtNkHNAi8uPLJbK8fkihSjeaS198w6dNfYxeGkUEGtq5Xp795AiHj7uhR8n7FvkCP12aM6wuTocdqK82uPznMfX",
  "key4": "3bwVT8xngpK61VBW6DjLZJv2RM72jh7Nhvms63fPXWdNaSmS2A5LKtD3UBEF9VR1VThktYhgiscG29Km5r2Yo8rT",
  "key5": "3koSRy2Cwcao2fTzV9tiSnhSidNqjCaDNvEUnsrSuk7orqkaFD4S7R2Tu74e6LxK1WagHzSyMvbYSRTLrHddaepE",
  "key6": "3CuuPHsZCAU5UWsPHASPeMEmqjQbo8gsgXE7jvq2EpKSrawNsdqMKfSVnaczhDyVftvBGmjFGwH5TECarZk9dxFQ",
  "key7": "7CCEF2krEUig1swGdFsCRNsCU7H1t39Kr7wg2Qzz9B6LzCE5bfN6fFJwru1exMfhSZ6exy3s4JHyN3xm6yPxGx5",
  "key8": "5SEKtxuwdS6jCMfbw8TM2aW9KjB5vdD6Mp5ZrQPhBkS3XvVpYFWyXe3aq6a6YKJPxvGSYPS1Y17mKZDPPgEzptYx",
  "key9": "4pLTuaNYLVpiD7aFXHCtxojXm9rda3MUEUNdrbfzf5Bz3RWQVcHoWDCHFhpzHPiLcoN7e2dkpwF174vPTyU34iUh",
  "key10": "4Y6pPG4eWXRB5TyBHL3ZZGCWkZnvpG12jACasjEsX2bBek2nQXk3nbwTWbhHkZ9btinom2YnHhgEvtfdWk7SXehx",
  "key11": "3LC2cAMv9L1DWdfH1av6H4ncNA6irjbF8eTG19q7Hymv1juPqA4mdvvJzdyJjanVYMibZYuHuFm9Fj2cAVrCS2gV",
  "key12": "4ZvbTQbeQajU6AsQ5CYimPhQB6YVgMJkHPUFvY1aM1TxUc8G9DGJUBtHjL2uDAYQQfM5dtVXnjRxRV5hVmtBLhZX",
  "key13": "4KvAZuVXZWwfxjfTpmLAkUGPbQi6g3yFCkTXF1XMugnUcgzkHaK9X8zmZytyWVmRyUJKcfD8F5axvvU6eea2CUrQ",
  "key14": "2Dmeak7ieayL6GHMxLCVsRuYApFhy9KbySkqsho98zu5ZXeUQd5erfAiqngKRNwqrn6gb648fwKtF1qJTmc1QJeY",
  "key15": "2exfMarPHtgDqtS3ZZRDZQ4F61tnHjVGL5ko8pd3oaqaMfAW3NeKURgkz5HoDCfStwnoVQjHTiGpc6jbnoCEq8Z2",
  "key16": "3x5odi7NGVY9Ecc2QVLg5sdeVJ6QgQ4YdDeTaoRjXPDenmoyP1ewQ9C8SfbQatzSNLiBVbZzZG8C4rRKcBbcmU6G",
  "key17": "pN3T8KJbNgXPxnueb2wRXAJ9QjedDcrg8tVwEucbRCRdZXvhh8GKVx2S2o7EXeLqtKQMDLAPXsPR5H5EXKJRUbp",
  "key18": "5RsJk1wWmoYCku96my8UfBjUYKW9c7jvXMra7Ztqvuk59JzJqit76jPWwigwyBP4k5NNfYBhnSJkSjcREoDdsjv5",
  "key19": "zKuzYFBYpbe4KbEGyxppWLRFX3gbVPMNjFAAyTqyBQ7d9g1cJsasHg83TexjzYuNERiBgfBSpPCTNisN88axT9P",
  "key20": "QZYiZ18ZSZdfk9gthmeEv9jpHFBXfdKAmNkWGfC3puc3y4dCq5S5B9JWhrc4fyn9Rsy3bsKH7adXNmoQVNx9mvd",
  "key21": "4nVsAXpF4Q2yhwc6KiFQDZ1Ei6SsTVrqgVwbbECRLRwnMDdxYmUdSarfuDvWG4tWQ7KEBEnKNd849Xb8BQJLkzbF",
  "key22": "36fTxHqS9zHA8bCNjpBC55FySoZfbpvJHwHfjVx3LDky4xRKZCLtBUgmrfMvEyufhhHWE7nrrFKNwtfS8tpbdb2w",
  "key23": "xk3tjPK2EnLiKHijW5tkXmdcoxsHP6jbzJ6QU8fB4GoB8bvSP8Vj6vNErx1F9gVkpAyX49mjtkGbfw5BsDRBQsX",
  "key24": "4gpGihHd3Pc1XtcZSMeNR4JsauQkMT63QZ54paVmpqZtBL1y4owzPsiwjcnJ399tYkipAFiRanwXigJugirzHjuk",
  "key25": "kUvxtr3fhrVrhGfv2GHC96Xtq1PmjS52e1v91GniwLe7qavG1LGzZRdk5WFS8PNRW598E8DMa2Erqcvh5745Pwd",
  "key26": "2EMnp7Hkn42xw9rYG1REua1JT2GeTfj7Ff8FSh3P22GX8VEktM2v3L6xk8JXp7X8TeTv83oP15Tnyc6kE42Kxbnv",
  "key27": "3J7TPv7f8D4rtk36g6H6e9nuqF2qM4syrAsKew3ZA2FqbmZu2oBeVufR5QDg2RdWj3Gm7uAntYbQ3kkVW3WC6KS3",
  "key28": "5VWzFWZAcuh6Ers6YWHbxnJuYTNr28isCZmWUb72m9WNH1MbKaojw1vczJ9keroFUiHNHFSxcLPjMe1N5NuXw9a6",
  "key29": "2uRpcQ4B4bno1wiQFUiVL4BB6GnYP314tc4utqWZ86kS7duAEfuYgcuPL1rYiiBHXYnWpY1jD4i1tEAbThiyVmMM",
  "key30": "4PRTiJRhM9Z11nGrnEZ7dvircSMheYobUkZrpqqyJ2vjadd9zqBTnRVZPrivnuKw1oMnK4i6SNXeo4NMusLQC5iS",
  "key31": "617xHPZtZsS2rXcdH6y91g5V7cLxAd5VVkbuEYAxPo2DYJgbVnBz7UTdayUipxThQPP1yngainRR6kpazGTdJPad"
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
