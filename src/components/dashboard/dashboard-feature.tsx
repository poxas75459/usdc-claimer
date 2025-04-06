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
    "519aZYpiwKYtzKJ9aWd9W9d8XhcRWJk4Kz5RDuTSEwpxiXRxf8DR3vaUkvHvkv7mQxEbTyUTUhPpwnDL6DLjaYH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4cP2SVNnKASt1Sn3e6Dxs1pUL8cWbcZ28cJWKnphbrBmX3AkpBMTWesY2NBWYUBewxdREwDukafuqfAR8RVTSF",
  "key1": "2KRfFsLyi9ajWBJm57wemS5MDJy7ZhDSMktepbX5uTUHDrMU397Q3Vp9UqGLYZ7foJyDRAj5DU9h8ZVuHRcSC8S",
  "key2": "634aE1D6hN6qHSdUoT8DatME6JeEarixkngYgd1McuoSu4mb22rCzWDhz5CL4Sq4m8ET4sBRbytSEaCZQ7c4stLh",
  "key3": "4j57upk6arzgzxeNVsKXvvM4cJPhWpxf63PMM8n5vvPqiAn1e2w2AEe8yiJTgHSALDRN1g2aAW7sF7WkWrysZuTq",
  "key4": "3fJrKDvodbSQ3Bz5jjq1o5sKCQwQAExiqtdjZiwSAbAogw8wsoUChhXbrwiWttACW29WUPZpUZtWH4DHE7Eovd2Z",
  "key5": "2bhCfMbejxiHN5uG8AFpmWER3mjbEVRTpoV6t3WWewo9jcyfqvUn7BqWSruXkWBUUFX4TsFphhdgm5Hp5yBjbfGJ",
  "key6": "5mYWLsTwobWZxptQh9rXbjMZSLtWyaaPBv5R5Fps4my2AQeXZT8i59WcXi6NHVRFDdMNY4mtTNnYgC5rSD7WY7Av",
  "key7": "2HHG8G3A7MyxPU2c8D9y2se4itW9dsirMbVaDxTYSe6ynawqGu24h8pa3VakYUT5ZgtGNBpos2NRtKBvKzTqS1z",
  "key8": "3z88eAhxqAxbtHwWGNGHdtTqgYEcZuvvpYr6icPHLPRr4RCm7Hh8Chhhg7cdxddvACPiFFQDPMUPhsLtgfZwaTHi",
  "key9": "4TtKcrfNvLUzmtJf7C7v8Bk8grEcYw8pzmVYBNyC8sReDe9Bswow7YVGeJwXhXYGLZcdaAwKTQTXJTUFfaFoUoFi",
  "key10": "3d81YAYWX73BVAjqDcHELNeR9KfFGDteiwZxyeZNoLnCa82GkRt4jxpUM2yxFwNp89K4L3PvmrVAYWZ3vJtBXAME",
  "key11": "3MamKTpWDaWaEwHqNpUgJWoYMi4N1VZmrwexEgm1wRyGV5A461UgJmkTZuPwXANEBMpHZk3j9N1pk33pencfXUSL",
  "key12": "2jYcGRD1ARBkMWH7YmMaDRHzQ1jjGHdFh61w2tWab7Nf1uFFXeUSxKYsLskqXCq8Y1yuFRvvqHG1pmn468dzEhGP",
  "key13": "2rgeBhBBtg6NLRP7Dx5FBytGuJnePyrbQLUHsdZN6WaK6AyCaanjGCKkXWZhC6mEbrwr6xqn7gABKLEEzQwqFy7W",
  "key14": "3WMYwuy8AH4DQwKTqzEy2o89zPaFWYVLnQULcboJJz9S8szYoWyP3mgmkJ5HWwwNuAcVo4ehwfQYsLHAMaCQ3UtL",
  "key15": "SMNoKQqgS3W5hGRmn1YUS9sboVREQcvgkHpdtLtaiYzVyfNSDx5gJiCrL3gWUEcHWa3LfdCj7jBEDimSWMWgGQ8",
  "key16": "YWr2hm47aVYw1qyoG5e25PaTK694ZzZpBV3DfxEF1NTYumtMiptWEv9AaUQXmeNqUWbTpswNYFqTcK1Mamw87DL",
  "key17": "2LDvzvbfMTPhfaTCUSkeecdsQ1HsREGsMKmfJJasv83tu3qa3WH3R4tgZWE2L7ubfzo9fJb1ssXCy7WJKYLrzbvv",
  "key18": "4maFSq9vJbG5AgVYQz8QHoG7ErAUzfL5Dn9M77JM4FfgbJRsmp6fTE23tUmC91EN1ZbphSXTsthSh7VVb77Atx58",
  "key19": "3Xa7ZNgs2mMqTxEQ6MiKZSEikpshbCzpy8qdWhe9AwBtNgL5vxRVqNiBKjNpAfQbc9ekjtuzz5R8kpr82L31EQjS",
  "key20": "2FUg1D9BSQqGWkmW7mAJQUG4JbqVHNQuH9UoX4gMWHq5z54j5j6pNnhCpG3pYBgREMhuT2HJf2z9zEeEjy6zKcJr",
  "key21": "pihk6QCQBPEHV3a4x43Q2vaU2WN74V91tr3HgcjEWq2Fwy4XkFAbARcV9WVPTiRNjJVz1En8V3BExCifW31yHbc",
  "key22": "3J8WXv6mNwCFBuMTzQdRDKE6xyPPomwWZ1THbaeaeJ9771ks4FZ9sGrsM3YKMMX99C42vyiw2CapgZLgx1QYJLG",
  "key23": "3esRTD3Q4um49ANvXo2BRu26Q2guVUphUctakM1Gvwcvf9bV9JdghyrMT7osrFTUn6WTrrRev6VgbjHa82PyTjxC",
  "key24": "3SAficFUMWMAj6FRaD9Gxi81Mtx3pms4h3MwzrcLdxg4k2MUYHPQACiiecJxE3onqYB6JEJ2vYEsaZArqFdiUGLc",
  "key25": "3ydSthYCUEBHynP9RkdmyHJkzy8R3FxGJ6pGLr182ZeXmCm77rc8aYDJsWceH26pKsdo4NXK6gdXZhzLXVkn5PVA",
  "key26": "2K6xp6hMx5aHiF6Pa9kDtVC4g5bd2iLduXixKLQy6LpHHi4q1Sq7d95x8W3xz8YtCwx2swjfH2hdRwrayNvmiEtE"
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
