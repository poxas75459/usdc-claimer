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
    "3FFSzzgnPDVYW8oCeumAuUEmddYwrpX2TgjANMWZQnGJtaekGEdSPgfv8bHrgLnBQA221uy1Ch8yvuwYrvDe5cLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6tBZTdGF5g4kc5UCCM95EFLY8JNfy9qMZrFxofXsHso1Hy2VGkp7KfEVjkYzsmPPntsnZBgWarDtsoPWNe9Vzg",
  "key1": "Y9nengeWs4goKMrPGHX7urSwdsrmm9sKgkum1YM1FCeUbEE2VrZmgDwHjfonK7f92rPFgDUZeHNQkJ6omQc85w3",
  "key2": "4tC4MHpnkY3GgWd7fyUdGhCnL4BSzdhe5UzLCqQZWGmwULxDX9nE1EStFfA5T3KTMK95uQGmQ4GwjeG1issu8geA",
  "key3": "4PisiJh1iRaJzpoqaAPJSTRUQt6kmkhYgHGmiCv9dnkrFqXx9eXHE18hC8FwEMPVJcqDsLoMBcUGKWb1Wnu5uhEv",
  "key4": "4jYSV8CPMCZuHu8d9TNF4DaZDyitRddAEq5fH8wYJMAW8h8aZn73j4JCpftP6WbWDufDeufrpdTNHuM5qpdE16f",
  "key5": "4WFXkZct7dpYSjA2cSHhZUer1ciRQcU9J2BuJNWdfh3tRMWYRcVHQrJzQvRkRUFjdZMzcq9RZpvka1ZPrXBTx1sz",
  "key6": "2LZLn2mm6GypE16tcdrJC6oevepD1ht8v2cq9N1aMD2mo4xHcbP25Rr5oPm17eFiG3AdaziwVbemGyBDKv7RQBYc",
  "key7": "3tgKt8z2fvQJpD4iSTAjSASbmoCh4zvHjHJKZUo2xVM4XxDjeu5Z51CR3bgWJbeGDqbQdDVYD6Dc1yPtNMCpRXMt",
  "key8": "2HJB2shiRBaNAbM87qrUDqoX4qiHj9QHhYzYSHxbDFsnDEvSsobLQ3kTabnAwVefWaUJjfZ3bzojqWxY93YuDvAK",
  "key9": "FphyUFWxgJieZECLKNTpzTPZY9ix74NoApcoev1GAsKViiDsSVCTG9EXRjnc4CqC9UbRaAcDJ3m2s3gVtyUTWAB",
  "key10": "4egRmuC855T1GmMU8FEcUnRCmcbJPAqJKCHAj3KdBdS5taDnLkgqFqcZHHQz6CrmTr86k6VBhdNx95Y1TkMkGtZD",
  "key11": "MzcprKdx2z8jc8vYTRS9xpXVoWyGNbStXR4mVNNZwpuiyBWBsVyx61MAfdNeAATi5ncSSs3yK8wmcH6p5t9KTcq",
  "key12": "5QPyPJc7Z8gMEQdFT8o6yKVBkLFswcpSWnzaYSBL1stkLUgh2TDRvqhTS6LhpZRpT1esN4xXn69Z2fXEjbtbzpHv",
  "key13": "628fhoKZZBrNaSG66mFW2DN52hgUbtgrimpcmhpzkwFyRFLsHXzWvuMShRY71opTn75ANyBV4wnZMHj6pfqGTkxy",
  "key14": "5kBADZDE7z7DtYentUkS6CVb9Z7nF8Xo1c7P2KnMiq8d4cgJWSDn3i9t96JU9BB2wVxzkRiUXijsEu47ebBNnGiN",
  "key15": "3bxBFLifn9GjwLcZyQNJP6JN5Y3ccDQzGqLuVXs1tEC4XeknFuavHiwawT2sYhxxceVXW7ZFN8GhkQhQvN3XrPxz",
  "key16": "2PfpWhRMh1nDeHRZdCxQdgmBgFggKL4AfyZhoo3xaDvNhjJqtcUu5YtqZNrebFRCDXi7TRNyXwLZws4TiEJhV9d5",
  "key17": "3Hf2XBVcZKTeGs6RQz1N49pToJc1GWT8Z4YFXCMuSrMkCzqWiFcu4AfFdqcptrSypGRhjXvoYEtsmhMZeW6jjpJ3",
  "key18": "4mMdEsSHX4Ftor4jig4Yu8omrkqC1jNcXrPN3171q6mL8oXB2nHcMvDJU823e8AWX1fVQZBHGAWoG8fzNTfuoZWR",
  "key19": "5FXkjbpurHpsVoAWtmpFq3AAKjAUNUefhguLafpSxjHTGKpsB7ZS9Q8nfo75GdH8WBVbZYbovB5NND3wHoCig5s3",
  "key20": "3z6RRL5Rsq1SE1YoEgZTK8UhrPmnFzPNro8TYhLCLqhdNBQpwsXrQbjokLGWWbrhHJpYRKbS1xxpxYufqj8txtQo",
  "key21": "3thoBmUbMLBZWusFcBWjE3chnQF7m5ksvFtjvgFCBRqzUTmo1S9Gf3HgBe4r6RKLq6qLwHRqLQDN73CH5W7atYyD",
  "key22": "4U3R865Jmd5jjZ69nPPpm1kjiAkHgWJbAm6EBTmWseeEo57mm8ZgAgzFsLr96cZJgKoUSkW7iXxiftod3uwwvHdk",
  "key23": "5A6WGjMa6X6XieMpW1LeECFxGvTUcC4ASjkTA1PfC8Zyoa4jnPAg3AtZQneYmSBpSiH6GGxqvSLBwQsYNWGfv6vK",
  "key24": "5UcTdCcBQXPXYTMsyTicoKvKYdHEqiS2bX7Y8ap6ZcVDoZPHG3xhNTUSpQvSAhon1ASTTRffDbnyv1hEqFtedRui",
  "key25": "3LzpeMTDvHno2Eie6QqrVcyvnE6fotq68aZvZ9JAGEPYHqoJxt4gRCb2wajsV3VrPriEG6TXMMgGTETDFpuUcpCo",
  "key26": "5z7Scq3Wd6FpePhMv9s25zAgsAPVmHYRA6CUG1CmVtb7Mw6o6Yi9UVDn9E7oxPmXrwCfmkcdcUgunLU6aJAATDoJ",
  "key27": "5JcvYgJDMmHR83ovmmykrhCJGP1gm5ZAiAwzf3ADryB1x1EtszyrxG1FRouiDpF51iREuhAhaYwEhXd74di5Wocx",
  "key28": "Ltr2FrYuS9jGhYXYm2uDgh6eFEGs9QDVpUEP3eMxKe1KhPDC9mAaSpiophsd6LqR4ppKDh8jXo23W6dvKwX76AS",
  "key29": "3kYH4muykFFhjYyLvP9hmvpVnarqLKnsoVEXewCiwCDNUsLVPP8ykPv8uiPmr4bPpyHGZSL63c7qU4qpJfzGin69",
  "key30": "5VjvynycjB6BVU5wuJodk1PnsVNSnxZxnSpKerwhW4T5zQdpWnB7VcLy2qquhs8wPw95wAbUdEUrTsd6HfgP6y1T",
  "key31": "5xXiRw8VbjFjgS3sgkZ6wZeDkHC5d1vKQ1hohKUJGJ5DEhrjrqG5jp3GuR3QZvz4FzQfPjYu88YyDGFr6H57XMZ6"
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
