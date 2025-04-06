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
    "4zFKBx3ZNFT4a6XHmJX6YYYrYetcxhqqqvNDNZjyf2HNAD26PyDJYYyMgMtH2oUrm2FJr9S9TuGXhEehUkQQyHKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEuViNqEa2yiaUbYUyHHBUhEy7nNJH6vbtBLBpsY16SE5uzSkt5rDDgGNceF1o5cHmFeZGWNFs59ejBLap7CxpM",
  "key1": "24pw43opEgjJ3uBq1rABFo1iJsvKh17h9h9GCVtVfM14WAFmWy7khRChkySjZA1WiDm9zTzWC4qXSY9kRJeyiz4v",
  "key2": "HJBfnizFV4N1VeRKMztu8EEvssREekpxyLHbCozFSJfJJjzDsJCmmDLZXhrGCkZXZr3hNbMFfnMShVC6bje29ei",
  "key3": "25B2wkekNdf4tSbrcwn83PdraxdEizZiaLBUYeeiFko1oKGhjyjCiohDFxVL5DPY6ZL2wp3jKXRzMVxpvxmieUKj",
  "key4": "66LrhcASKwvM7H2US3cDpVhcib68qx6CFLNQP85yQPfv26ju1GXANmaac7m1fwEYh9p1mJo6mW3zsMLwm2VxVWmT",
  "key5": "4tRXK6twmwbSBWqfesCDtvvEdphqsURTkaibicgD9Qs8vQEVhkPuXWLi6bsyrdgSkrAnJJGyMKJpMUGVTcWNFJ9x",
  "key6": "3Bw5W4Z6zLBqcx71wMqbhSv67tBQkuMwtkEb6dPYdmSdGk5J9uywnjCkjdmJxStDCN4zn1dixZPBThcNSd9B4ouN",
  "key7": "RBceciCE1RdUnpRhckXLdFLi81STajyAtXDBchTTixWa1vBMLnv5S22AUop5nYSXAjePCwgjf1P5LkZzu48AZxx",
  "key8": "5BmVVAnmCXMmQTMENxczCCykKHu4N19QaFC3aMD813HCnLhpQLj4fnu4HAVTLfezE9aV4fMzziyRfurkDT1uiLzm",
  "key9": "4aKS2MbnisxcAvxJAgxwNUj87UrPJ4QzyL2ACj1s1sZg91v41mWfgzSbKqs84ThBNiiXkPfR43gCFZRpLeAwtsb4",
  "key10": "38vjaZZgp2QuuDz9Gwg7FFADzuZWG2L1udvVPMWLj9gzGiXEqDXhbTHe3QYS4W6UK3NZZM4zQsVi7xUEe1iS6JeF",
  "key11": "rU2WWJ9HWNk6rGoqMZyHo4smeSEpiM4wxjvFSmsUSDAEkwQGDurfYCmg4PotKFMRFgcujPNZ1X27fNaLKj4xYBY",
  "key12": "5abzE1e2YwaJ6AEEz48o4oiEMieekVyFgY2gTVAmNqNCSHbAvFmFB53zA35Gu3KtXTpT8b1v4RtmUnaCFzwMgNej",
  "key13": "4D7LHzxiyUC4d8UnfufGh6CXko4vT1enLbNUHnrEXvE45wkJDHBMqVTeXSusSYqHZu85Gt3vneVNXgXGJxYLrYuT",
  "key14": "3369gj21PVvSp1sYgekjmTytmjD2a2ogHGhhnFDaaPq3EuhyFD35jQW2nyLdF4KVn45KVbhodgafFVDGhu9ZiMPg",
  "key15": "2zmPkux5oYCQ3XgfPAYAGLkhPuKEPSPFyRThKGJ5mQqn33nYFjK88Ey5Q7CHWKaXdFTmfLYF9sCbh2tMsgc1U917",
  "key16": "4WdjVaPhoGjp87WBVioUf4DpFLhQuyJenGVyeD3UXSJ5XjXDKuKUmcGZmACKd6maqDz6GdRdXRGbBTjzkSgiPjSn",
  "key17": "5jZLZxZ9wZnh6mp8i6AKpdWcdQG82hKJdqEGdRSeg2Foc3VtH17S4QWeDbN2Jrw9YYvJuSaRatRG3GNKYD5LNqS9",
  "key18": "UopxteLmxRG8dz5RNzV5pFG9fKEZVTHYJ49QgoWJbWtYjFXZ3hZCu2mbPKqE6iKiRSonFc2gnYqrJK9pU2LaGZ1",
  "key19": "399uTtixDQp2ygVcfwmY9fmfMfZvb7LU4n1eEnHFRR3j94JKyvEkceWEPArzDdBRkz7H4VgesnS4ZtxBQUJaCFTu",
  "key20": "DUa1vgqKtXVqF6rmMXVuXvM9MY4w5xKwWFo2vpRCJJagDvV97C2ECWoXoKZy3mUVtNywUeKmYnutgtwwmTWWdfx",
  "key21": "3hngeoHZHa2mYDTtmV7kgR97AMmbzJLii2ARqhVFXW5JxWyELeFNkKUsfmvvSYJpiL2z2nnwy9b3NG9R4nZ3Ci8",
  "key22": "2n7SaH5rjGRQFMXc5xtUtQ45ZfMAEYtSsxuJ4XDoHmkXW7ypLjqu7XHFFjcyKb2eZ2d3KBbmC2QjYCCBrCj6ZphL",
  "key23": "3XdMdmKf24L8f5b5QGNB8sqSWqxLnDFT5KceNDDrTRmagEGzVGSfPKeNqMEDT4K9EdyqTDCQH67jo6Zrb4qUGFFJ",
  "key24": "5Z7mV8Sb5aEMmwUgDRvHJzvEoua6yUTqXNTeJs1HvocS9m4ncFNvr37vxPWWqxcuSwPDP8aBpcKpmuAyr9KCsR4w",
  "key25": "3A9DVJ2t7PsHfMnZayrPgHgDzwDke23maQwPmzJgE97Agn89ndRd3dGACg2EAwMFq21FR7h7jCU4TsQ1BGqAoDFy",
  "key26": "qz34ncXH7SgndFfKPn822uzSXBs3JsDyG9gMEBNKS8UTSMFKtqcrGTdrw6K8ZE2JyuVPaG8UBAcCtQzRVLBTZbt",
  "key27": "2ouai5EmDynW4LK9f1ucFKmuJPihUr6V4KfpeNfBchUHjVXYZJVNcG7EKJiRUoJ3QsV2RETLaqF1wEH832poqiqq",
  "key28": "5CXwfp1sDgJHHGfmSgCdwrUo7bYKtJpubdB2bPEsX6h1tsdkEpkP3ZW7unqWYUJQRkUpmJzjvDZY24TB5XDNa53Q",
  "key29": "46G6ZJAt6Jd884wbvAQ3peDF7qBM84vyFkmgYxqEG4XtoW4HFJ3bWZGzsesEJNW8ULRcNTVXmWveVLV2Gm4DfXoZ",
  "key30": "4c87Z1io6QTbAyiDNZQsjHbSmeChVihY1BXK62493Pbdxkwgyxm8oCLhK1utqwWNvcnzaRFR7HuJuofZtHuUqyBY",
  "key31": "2RKanAsqWky8ttKixK3oy1H4HHUfhk9QTDQ58UFejNkUS4bpmonneAHTKMArzZVuNuZSA3WGKmc1vnAnZKFC3YwV"
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
