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
    "24aRsr2tvp22WEG16BHCpqBcN94BtRPq1ZDExLGmYbBL6EGkuBzpvus5jDihBr8sT7ouGx4pBeAB9j67d3SwCQCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZuvf3617bThomJmcULHhBWHbGdK93zC23DFCSopvtc2MNP4T9KurtULFCye61w9fr9mkG3RqgN2A4GhN2aaGmg",
  "key1": "pV6YVTysKajETUvhGaS3fuT6io46tf6TYUsTCvpTMyuHo8iBHZhX6mJaYn5A3vHSjgbiosLzACrHwRsENHQCn6f",
  "key2": "3zpgipZ2c4mTDjyo9N3Rd92otufpKavnuXHkuCZARK2dfzX451cF6HqkFhYcqRa9WiUy6p6Ynbx5w1oYrRRsbZGS",
  "key3": "5Ewoh95pZzpxKU5fdgZkYGnaHKuFPc8p4JxjLTLyqcGpTSuBJ8bRYcMYzHhuno7QadTNrdBZM7Nm11RMoEa9QLNf",
  "key4": "2WnE7NVrGuJ8WPkoN7Rf7BCWJEjsHBpqi4qqHGhexTf758LQjDkoKWnJnYRtj5253bcUezm4F3Dsm9GQTbqycgpB",
  "key5": "3GiyVvbGqotJi5A756nqfVmbB6dmHdtR5H37V6dnksawmnfPPqvMzc14WpjBdahciaxBb7Kap6UoQv1Eko4yvE4m",
  "key6": "59fx78PA58bLNr7k8EgdLKa7RDCJzBnWSeVss3y6dQVzuXPvEEjkwrTZZf7C2uw9xMmqNnTfQR4KPRsubQTCyooY",
  "key7": "4npVaZU1h9ZMh1eLj5nLkzAiddmdmsyDc7gPXmWwb3vpQoxnxjWTcifH95Ax5bXC8YziF1PMciKY7pMG2qCwPQqb",
  "key8": "DTC87yKukmeCzWmsP7H678rHAensizAYM2fFJXZBVST3adsxjNGeCWSmafXvkojAZ7rkhfvY2PUrKk74tJTDFNK",
  "key9": "243Br1ZbUSCJVgbWnVGbMQ4a8gbigzEvzh7KgqDaV9Q9hJNopEpt1C5QE7fzVFGExWeFztALbnHxMJvPoWNW732Q",
  "key10": "4sF8x3KAruLN4ZDWXuFPQc14R7ezKN3bfb2U6UBGCwpWbseBEDsV6pFX4gUekGqEknxG8v5JR5R9NsZ8bds4yhpU",
  "key11": "3xWiseoJZejSgCBzLKnGNFJxD6M14WiVUMEwH7UuxLLVvarecKH7VMrRFRTJVG96RecW7XhnD2vq5iZmAvAwtd1z",
  "key12": "62hFkAqxdjf3fhezxNQMKa2E5UWm65m2eT29kqfznC7CakFrydH84nHapnfLofhR3pkkCVjQLq8imb8rQv2pzTMN",
  "key13": "3sCcxi6Xk59UVNp1cw8WrbthX4Js7PbXkWycLQu4LpxTAixcW8MfmAQtrhaT6KpW1zXdkLh5kCJXc6cp4UaqU2em",
  "key14": "5DV7u1kJKhSbHA6Qt4x4AB3SrS3YtCWsXHXxKvnXA4R2wsV9z5Cu5rVVFuj1n6nv9UcpdMDxEXJTGZN8i63cSuaF",
  "key15": "5Up9u8ufzchQtNr3PMnZXMkcAvb7JujDeo1T6jbsJwvqm1DUco7AYPLsPbMXsQwh86vuTRRMGevg9mx8QzTA9Gcf",
  "key16": "5J5SRfn5zKjotsUiyfkFcDGzZ2ipuUFqvftv5r3GxBacmyR42pxpXuX1hudbkXso1yMnF2i4Tj8HXC4VrwjK1CPo",
  "key17": "3V7qeFvcY18DSztJRmMTWuwbZUMfashPJhtkhiac2bQ4HitLaxnDdN14R1nwbtEGMWGiJeReVhxjZjqspmFrr5rw",
  "key18": "4BahTCjecYs7aiojeoRLWLry1RrtBrGDCH4y53tW76MHdKpTJZYmdzz7dP8tPx2WdApRyN5GDcuXZZNyQUNrBch",
  "key19": "5udEVueD9xNH2cX93hm3Ek7Jr5Gutbjjt1YpR6F2BAvgXoW3cMcfVh1rfR8iLw61JodiWdj2Bdu3msGtp3wFmUeJ",
  "key20": "3d1NkWNRGMbqKW5BSB44DXZupNYpeMkBANDneLWjjFnvf7RGb4btui5X3jLAXzTy7yRanuqSbqbBwd9oQ4EncuaA",
  "key21": "4aUiAHY6Kp2zHhCpTRcmq4TvqtcqHSaxvycS2pb9keaaAMJhKMnFtH2qmSgMEkbHYD84TBhU9TXGmW4b9W4oC7ff",
  "key22": "22oYjac7oCBVou6Uk5dmikeoWRdduV1DWAQihTmqYe4g6APFG4qnvLJV97wtcDZBo2TDLifqsCQn4gPDQ5KMWFYb",
  "key23": "2sfPwwnrGTnakuEHXTFVqkmLivHUqgepkuGeKxumoXi7Vy3Jbu2ZUGqSp8C1sTDE3cZiMrH1SKvZAdxXbYJRUJGM",
  "key24": "2FFuChS2cjBXfR6ctbTKAg8fkZRERU5UWvjGi4wDt3VstnrhQ1kkAsTHxoHsqvXb8MSAb4WhfkCvZTSnXcc1KWZm",
  "key25": "5tHFpYaGrm6ZyhwwQ3RxD5Hj4r6oY8T51dFfZTCKMG3dsXxoKJ5akR3LXN7J44fjnA6kifNiMuNJaDY49W8EfhCy",
  "key26": "5QVRcjxcnPHLnKGWnr993wgDw2sHS4vt18ZYrt39jQnuXyDsMZppcUECV3UmYMd8k64amJsTBRuG4Job5x6km3KK",
  "key27": "53Ak5RwP8h2TeMRHUBGhgGNuh3wvETZadXcSEi5UToDoBMKbeAXAAECLUSVRyLZyRfFBzUr6EhhUPftTS25M6MQ2",
  "key28": "5KntHvQe7sQVgGADL9zb6ZFLRmtnXbbUqjRJ65K22t3TMAmDkS6GXPB9iGAwdF9hrVyq5LwfLLS5mjPy4Uet4HEe",
  "key29": "5JZqj4kgcjAYxJrQC77GwRYAFd1zQxqJK6bk7UtDoYvSQQz6Jzm7qmtxt9LjHozbMCzHPMgLojT63K78tVpnATdq"
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
