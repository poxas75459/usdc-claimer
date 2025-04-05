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
    "ksQnPNSLWyvAgXiNBDyaJY1cc6zfMq7yAHqMHHLaT6XTb1FgnRSw49BYUzJjwrDwDUK8DeMonfK2mbMmbRKp18B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6pn3o6Eyrh55EQVY47zFZPWXXzsyx3rF28s2Mi5fjXK7Teii8dnQhqirW1YtBh8xiSSRXMxTF1N67wkdrY3DRWu",
  "key1": "2yDW4b7JvfN1J3zCmBKFUfrtmvczZhuFc6u7Zv5m9MgESBEq9rjEQwyHkVefA9nCJ18bZD1EsNnrKrtUGHp4YzTx",
  "key2": "5PxY99xkWxQTFGeMB5YCW8rCACcU276Gw1U2TuCNacGEWHgaYWXFEP64BUNCN4YvJQhrwrjnokbxUhoVokjY2LYH",
  "key3": "eGZBwJ95HmGGnsaNggiZjvfHv2o6qq7VBNWSdWNGmgbUHBhF6ZUxPjVi1VvQNqkBG6sT7bQ6Sor4vfxB97C81oK",
  "key4": "2FzJc75NiCX2pscRqxZnYYowF4JgW5b5HS47pQ4ZQUDu4sdrwhXQGqKkoue9skAvwBynNJVBr3w8jD5P3d4cYQk3",
  "key5": "5tEGLm4XKgjmwaQ1CW1TpBzY33zYYkXxRgge6YeWefigDJ9ELW7pf42ZWRtoA4R1W2jG1yEFUGcZX3fD6SiRP1K",
  "key6": "5H1FrYeDewYq9tBkziaku4PDmNkRXoMm6MHY3tQVBMq52NFENxDY16qjCcyNkYqyUThyH8PJeVQoyrHsr6qa7Far",
  "key7": "4beRN35PF9XDLoLh2WYHaLrWzxcKW8cN8dLwoBjvux6SDPjhx795aqpGaCSss8RbQcReS8wbXL5Djsj9ehULXe6S",
  "key8": "2xcM1nDJBN2bqKxcYQyBJ21F2RaMarVTC3yxbqwCbWSmV7ogykxgvU8CNMmcr4wq42e2iAEGMTufSTJN4iSWwYhb",
  "key9": "4ppi2RnzxQrba3gTgvEqqpQyoLHC2jAifpC8qiB3AJKBfFpmYAMMPH1sv7yrrF1KdWdb6TDcVLwYyveVAxjqyuDv",
  "key10": "2yoFXcRzz6iMD8UBYXM5vgS8shTz6vfVuoDoUNqx49aC4oXynVgnMgWcG46S4LgGnyDo6SGd4TAZ652ontt1Nunc",
  "key11": "2FdvGEyp89GVrYzHHTCMHLezvqwYQ5WzYEgWwHHMKLP4gM2kY22UZ9bP7fZKZZwiqhuji7YXwrWhyHWDAYCWkK7B",
  "key12": "2eBqayREjvpAgHCiumW4NNfZASbk7rGuBGuHxxa48spRHgyC75amjDEguvqXSbFzfryHifrfeqLswZ7gvBbasrso",
  "key13": "3stPRqbYotDjJjtEABwBjU1ipdQvYqJUKPF3Huh9o4nyJFnSVwMtP8yrC45HA8F6c6AArayL4XGshhgoWjKFazh7",
  "key14": "5aa2BkmJzX6WRhWMCcpgnAHR1GmdxtwEXRJC2x75LUqsyhbigmgXb6mRUy2HQyjqbfXzeokcMF1KNpQ9113KJ5Xf",
  "key15": "3pZumbua9XK3hhhCZK2iq23rCqmu6LpT438tZUx4Q7RbMuG4BP3LC5MHSNzL1o8JA3H6MjbkUHSUQcHggPNybhgR",
  "key16": "hchPvvoeHcsv4QgwXoT92Wguem7CEuG8eeg2uqeQ6PQhvv4wmeFygFCvXSHnrdgf6DH1EFfwvrqrpBkQ8MFXEcq",
  "key17": "42B4tbRTaJwja4D59fSm85gFtZu8Mye4uw9J3buLknEBo1K73EgH6hv4gGDwVNPxFF2JhngR4TMDP54FtZUkEQk7",
  "key18": "5yKMUgpydUUV5oR4tdaBtJtZu7pvJviSdrx8WRBuEmUz1zi5sGJy8oaLpQP6o8M13pv9WS1kq8WBNBWYXghNR57h",
  "key19": "61pd5thgi9med9h21ho7tPCSSmfqrz4ycoU9J3xZByxJi7cqZJF5eUhYN126jfkXRZuDzwPyTjbUGW6FPpGLWAaM",
  "key20": "5y8QXwiLtbPF1h2Mssy4BoFQTJwyPbj61zHFGf3dAqmnysP7AhuBnpvuhoxsdQbzaijs2Vojb29TZ18HzVB7xvDQ",
  "key21": "38rbuZJqMhbLzb49UnT2Tvd8sUvwxN6SQCWnU3WDN23f54bhCj51FTK7cTpd9zRB9tVoXGJiLfGdyUyzKfc5HcN3",
  "key22": "5cVNsWinhCtywrNB86KmAANMrhpMQZj3kv1HHfWjkKkm5e2hRnvUPFqGpJXJU1bbWs6cXVpDySiKDMVEiMkWgKhJ",
  "key23": "4Ahpxq1DJYB1RirwKtcaJcN1iWSoVPe5CpBSgzW8AXC7qodA24QzHdf6ZvReBNq9W98DWa9XYS3GfR8hU8VYaw1Q",
  "key24": "5YrGQo2XNfxPWJPergqVZQkexT5c2bUDrhUFKEP1h6rgkiLAsQJhSkbjSLsCmGwmmpYkjZtm8C5Fp3taXr8nE3iH",
  "key25": "5ryv8xQzfyYryxxek5DpuhyyQuuRA2x19F2hxPLVYf7TuBif1LHVCPNZQSSR8Khp4QBRAEM7pvVypb6BLHiTHJ2h",
  "key26": "5zCAQcDGV998ve3QsDKRswpvUtvHUj9FvVzEKFiG7zg9M5FojN9bmtTTGLM3ntPcyTHrDBckg7QWx6CVxPbTeEK5",
  "key27": "22CYTTDN1w9eUixXA9B5hzuLUj2Awqth29AcNEMRTu4GdSTCFdHg487kNJoo5Qf3fjugRyNvY6mXnqnZRtC2KKaP",
  "key28": "hrYiznXYLCwN2RfTMtfSLZ1ksT4mBDMHwyCRRsuBqJgWWAfZF7dR2kUactJswG2mTRYp7ssFvBmoUZsdPw5TzuD"
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
