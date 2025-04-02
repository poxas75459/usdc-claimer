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
    "54tQibufVXt5E2Np3tSh2ez1NCUorNNcnA3pGZyYEow7RPfRF8keHhkcNoZgCpTPSwAQc3WvCwaSWW4QezC79PWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBrzUbc845Ld5ZU6NwnTSZpyQX94oAvLAxuAMdADDxeS374FcNVcbCqa3FBrzwkHmB9m61DZoZxmBEMNYogexFN",
  "key1": "63ZBVVovwineCa5kRda6n9D8YFAQpn26XwSKonL6EMdrQQ858GaaraGgVQUg4MbunfNv1EC2eNqFWfJPV6Fz2FHy",
  "key2": "ds4F24kNKZJYSA76qFiShFeBB2zCrLUA1phBTbVAyoPkeC9MiwVWrvr74VeZ6jtAdByidBbXE9jUDgt6Fui48Wd",
  "key3": "2vtVfWPfgCY9x5o3KhtLw7zgrMsYr1vSVfTB7VZnUqgG8jbRBtwJASFwnHL5hKvDYLchH5F3PTNeEthXxQqwgeyL",
  "key4": "4vjtTDd3dFgEU2JdXWh8jqS2HU237j78AkpbkUGJQSuCHmha5rxTgzCshTCSdu8R74h5jiyGvxiUXE4nTcipkmGk",
  "key5": "2ASkiajEsF9XG4kYZNKXHFCULSkb6xNkPoeY2g6kwLJP7KYhcq5kJD7bJwuMxBkre5dA51KHvhahnonKcAf6Pfh8",
  "key6": "3JsGaxY9mfCRKHvWP1fpqBAK8ypVdiQ54NzmoFmjSBdgnktGs7NaQLVfh3nqVqrTf2QSFW8MXk7VvbwFMW3FhZ9B",
  "key7": "3c9Ad29ufGhsSDHPe6aVjLC89zHJds55nnRnjEv8xqtzRUjQhQs4e64RK91g27Q1KahCYDrVfRNL9T6cHdNVo4S2",
  "key8": "2yTvh5RFGma2GbBVaHnFFF36XGu4WGZGYdFjWmRS6ShWTmHQXc1pzCYpEN8Qhtra4FpfTZvTrusCCxJTXP3ktD5C",
  "key9": "2P2hvaAsh6BePinYxWmX92gVr67ZSFXJCpq7mKXcgkWhJoLLHiMABZWcDjjn6N4vtu8UR7ktnZYehNuuK4CbbdiS",
  "key10": "3YgYMhqv6PFb8YHzQNStTvqdeBRx9avLU9Hx7M6PwfiqjDuTLTdvjDTPP16uUvK4aRgyTVxD2c3Lj3nMaMLQYdzQ",
  "key11": "2sdVbd7qna1WBLmrToxmThaMf93NuiBSoSjvg8zxQYBdsGi726emkuNdQKHHtFa78BipEStytarZjp7SgR32zRbM",
  "key12": "5EU3du2uxDhgamaJ1EoMvgyBJKEey7WUbZ7kH2EGNAwrQ9okMpB7hwPQiimFtBeqsF56FxuP6QXbXYLuk25PsuLK",
  "key13": "5tJKkc2QKwgectgXs1joxHCV16bY786W3G3Lnos6rforopWEagBhsuoE1kaxpWLAAijDBXixcBSXybo65QZnyXyW",
  "key14": "5wDicFjhig9EvpjnBZyrzgJbqgWwvqgTJosFeFDXdapShPJWUvvb4Z7cGFt4jw8KuqJ3NyL5yGKnAf1xBJ4WUBfy",
  "key15": "5Bjvr1Z1enyuyCMmU1vMsaQcZwLLcvazLQzbyz77PcvxiteRHoRTXMVuqg8ERDXZ7XuTuPp7nGCis1uKWT5VYbSM",
  "key16": "4hS6Xntgaa9nYVzfjYqnSRiEpmQXb1JQaAL7bsCyXswKx6iNon57EfvwsK4J1nwD5X2XJ6s6rzCeoDietuDpeFC8",
  "key17": "5k6V7xc1QiX4RXno75LWUMP6py9GKsXH6KrmSti2seETDhUFq3muUp8RLojHZC68bowNLSzUn52vh73JbDa1Cx4p",
  "key18": "4asVgNeWNXt6iSw9rXgikfdN4sHEUXKRpeqKfaeBg45XttqUn2t395qbnffb2WCAi1EZX7u7EnBkfTvrxnCPmsD2",
  "key19": "2tqtm2Bq69YFy7VBGqx99jpTWL7XtW17Y9GD3RXafTwzf54WEayLokpk31uJnd8v2qxjTAxyJ6BtXuwwf9nfeXto",
  "key20": "2f48kBYRcWutSt8z9bCPhM6B3ZTUZ8AyxTas6kJ74SswgphaQgTk9nQ5Q73A3XtnPUZnvjHGy6mD6HHkfA9kCnkX",
  "key21": "5cLWwwwymSmPaxrQVdUy9JVKixgbRQ6istSjhkvQ9MabnhwKQ5VPnU1E6mn7daiaHzqFuCzsSHChC2UjZovnEJr7",
  "key22": "YRk5fa288v2omMXXrz5hkEnvgjcf1bJSRw8WmdkiWDeA5ZtRFJeUS6DnPW6rscEBkhTX6aUfzLt28Bkuf4U2i76",
  "key23": "jENzKDtNrLj8v5iqAY71LZqW1Dz7y4qEPaLsA8SPMe8FHzDvFh5oGNsnb2RfzvJc17bTqbjTSeQvBAMGMYfXxK4",
  "key24": "4WNBfxsRzgW5LQJWJBPNfHhsrLfsbT7HCQrRCsk9KgHSJL26BMhwudocamxQEWrJfV32zn5kwhawc6ypoyBkwegF",
  "key25": "3qZ7qUd9rrc9KU8g8hoskR8Kw9rp3uwT9cz2Xh4bEuLyRJajsfdcKBzxcTvrPuAVQBYPnd7q5TRm3ixRxyTgseSs",
  "key26": "45kdfGSCMcUm7Gh8ydpchCkp27N4cNMYMRFZTaaVSRQRfbipRfiUFqHf4AM98ChNA1HbVe6UyaWyhhRJtBePEqyf",
  "key27": "44SUPqP7HprDmc5FrGYw4mk39QEmNpNvDfwTXqH3FxPB6UFZLCDnUF4hhG41U4d93tpzxEPqULrBb69TMvHsggq8",
  "key28": "38no4VSZVAMLTA3Y9SXDmBUPcA3D4xai8L6aCRqAGPCZK5Crn8UJsEdppdN94Br3DYKaZiocoR6T9tXbLd6Xchaa",
  "key29": "2EWNjAhehUcE4rAmr3YcChoHgSD5YTCsZbEz8osJ8ETS3uoiFx1ANxmjt7nXLE2c87VzkMr91kLNLSotw86LpbV4"
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
