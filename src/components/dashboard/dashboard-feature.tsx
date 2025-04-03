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
    "4vrUZNj5Bh9xZFp8J8qVvx1QMpz87kz6FuxJU8gNk1pridApbwK4xENHk334jM33eoLpnpDFcrG5sDAmcnYytTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qdkFawcbitBbWR7BJ5o3Ju7kF6p7P1zoeBjP9RaPSvYFBKszBwK7deG7AMpM9kpVXJ14aESxpyvJh9oUYxeA6sb",
  "key1": "2CahpUvui6GHocLknVjaAfi7eRBgKvNox32QR7pcZLonQmGetAST118Wugr5nrBFTFPD9E3eyvqe6YsURVURAzua",
  "key2": "5m8vU5JQExBmJzX9Hiq9KpFNUyH3uGiAWuVzPZjAmoN9qzpqUtzRizW4pP5kDKx44pBhQ6LbJGkcrY7K9LPv1JUm",
  "key3": "3hyyfNuRtjUY5PoEAVZ2mgRVazKtjAm9AkJG33C1PsWJELAvjcF7nYgAdx1PZJTtW36cNM1V7bRUyxE7NpnHowQ9",
  "key4": "5oSMoaRN4eBKMPmG3UsUc4LPVSbXnMHRASyaP4f2x5qiRnpxheDcAPSXZhVkiTjAymA3Ybx5nXpeYWtU7B2jhX5t",
  "key5": "3YCPqXqhoKeye4h1qLYFj3C2SEB413B6jirBPa4E8g64gxhZCuACyghqC6iW9MMLg311xoKRLh5NXM1eDrrp2xKg",
  "key6": "3LrEvSp3ytQMUVN284shTg6rvczarUjqhBJP9DToe64FFiQMqs6HrVZbVHVJm8KTnSzQtBjAgxuuaPrJnnqQREHv",
  "key7": "D259rW2pvUHvJVofY2d5pKUtixDQ5X9bCK1LAawpRUcT2Kr1x68W7DhpEVzxu4dwNtQqu1hT4KTUd8WrK1tBQvy",
  "key8": "5N3Rq6mDvSSkBDuWpHJwoVKsSDxHrPpkVgUcAZxzXhZXnWfD6YPgs68KY6QWXNJSh9SVBgpdjjPu7vFEdX2DC1Un",
  "key9": "3xXbxyzXtoSECZCBQ5Nohoq5T7Ca8ebzEdTBLV8xZQFJh76QJzTBuXbeS1L5VUvRnGZrCB9J8HDNdgL4JTnsZ18q",
  "key10": "3x5xKZWZ3xpWFp7c4s7FbJUk3bC4LmpKmWHtp5juWt3SMeht7VuE9YvfkTgCHM4aioYwJUzBAU2ds8nqwNqnPPN2",
  "key11": "SaYZquwKmaUdvHEvNHSqqMixHoydfpB73mNwjDixmC2HNYXyGSR9gYhSFCw9jXynvmQtW5zRFDfZ1sp6qst37Me",
  "key12": "4XfhrHwq25eTi5tocsPa7q1hnhPLeeLZa7JSGHyNZF35GGeoaL57VwFoeG6KEY3RbfCjNqjpzeuHPJAErfbADex9",
  "key13": "2FrZUkAuhyeMHL2fTFwB4m7Gkv8woaWoN5YVpzD9Lmgob74srUEEzpQTZLaZeEw29DM933ZAVGP5r5DiCxijqR7V",
  "key14": "5nCbxvf1msmyhsxuwEFJRc6ripYKNKHggyMEM1aZrMTf8wi5AmdKr18FGx5hALJv5jEbq3fJfSHNb1WTNFcxoRWC",
  "key15": "4zjSapvU5CFumoQLN9fpo1pWXMm3yredXzMBMzjrbzQezF9741L5pYsyy2qaK3P9n791LQ4LwBSzS3bLYcbRC5TK",
  "key16": "4B35WV3v83AFJgSme3DhDXEY6Wsebg15PV5ega81gyEeQt3g5BCWGdTpQTzzQmfiNKmXVAbwNp2WoZNwHFg9W6Zn",
  "key17": "5ZbLZR3WmM3GJgqmyQiFKWEKiD8RfoqGfNsHkEWPJjx2Pqk66jxC6YRF2PcwxqD8aWgWw1R15FB7JW6poeETy5kv",
  "key18": "3k3EJi9yh4SNv6EHM39bp8pFz9r8MVW4sgyBxBd7nF84r1wpaWLATz4cZWkAHMhuL5b3BdTnv8s3zJzrtmEMvek7",
  "key19": "2tYrhjbZLLyy8EEt7N2gCC7pXEcZTcc5WkP6S8zUcKHj2eVTjzaKUoMZvRJr1CjQfiG7sJAwqqH9yMK35q51Lfuq",
  "key20": "3kRQG8TbQZijcQhimMxCSDZD9iqXDxPAxC28FixwuW5SMCj5fzgkrBTuS2ErnUrHiKGjDHugG9Dz9sBZrzVuQW9",
  "key21": "4MLTn5yufmoX8Ssvdg3CXhFuPdsYRcs3DHzQNq5bqoXm11kBdxmdgUuq17Etu2EEukGZbfgHPCVHNa8TToezL1dk",
  "key22": "26kJmqP5RGuMFp6GRbQyoJmQkw2kr9fibT1UNVMNQ6ZSCZRo68DtwPSNo4aXwY4CMvje4WxyrcDAtSje2P4oq288",
  "key23": "31iyaYQihX5b98L7aeC5VR7D4GDmH7ouP5jbKZ9cuJNsCakMARmxi55TQDAhuusgA7PdJc5WEUBxEsNKMfC6q7Gg",
  "key24": "4x41tcU7umqzwiYWTC5kc2zmSE6gMMbv18jhzEH1xmzjBEdsh1s575wuaWNcGxvQWhqTfbVCdgMpiPKFypCzejFz",
  "key25": "4j1S4pgi5g4qA8b1iACBBeTCu7BKjTp5ZMj67LF2ffKBKHob1apEhN814K2kMfZeXFZcHPKjzHiMAJ3b5vPVgF9w",
  "key26": "pUWbwhSaLSrtSkFpmWbdPX6nKqSZvsQCCgR8deqRJ4qMaiE4RGG7escN2zrBqeczt6dL2KQnrcRQAjjXsnMu6H4",
  "key27": "4ij4dqKdfWVrf1osWsEsM3BrPDRAaGVXa13TcC9J7dn6SGGURPSbkudREgu9gQJFvYhPpF6s68L8y9qSkfwxBMbZ",
  "key28": "USB7RqRggDNH4KBHyFmKGgCJPW3mFBjTLsbLuA5HhdY172oHckEznWim7eRZjkt1nD1Rr7kszXjVvHULZMBoro1",
  "key29": "n5m5TQK7hvbQSudGWm4M3nqBJHE2VMGErYngExYNsKfxEui6SyXj1F7amMwzPojBPPo27VjLpk2v87wU1cKpXVj",
  "key30": "9sq4xk4xeijmM47o8chNdKFb4PRKZrV4wawru93MX9kqpy4F4kaDXUw6H3XDy4HbVM8zFC7pFSbS8oNFkTXQh7G",
  "key31": "mookMCz5v6Cb6aTxdUyFG267yfe4PP9Nuf9fJywxAXJv52cVoW8ixfCRZHtTPs8DGPrXvSdDFPzkDVFu2o1bSZD",
  "key32": "2aBafV8VFmoCawoXyuqDw3mwDK3ATNn8bS8caqVu3qiJqk8c9r3ePxRiZ3Uf9YPiTCTjSGb3amrUZwhvcNB9U2B8",
  "key33": "3cdYeGV5vXKYbeVvKkwMXMCZBmysvEt696pRhtwgMjpJQzCvJkbiEqa4QvhKQKpkK76MTMHnGsFiqg2jadXaiC4R",
  "key34": "4SNTnbZhi9WSqZUTygMVwjJkVCNW2y8juYW3yZXorQRc2xxJS3d7mf2spPC1Wzs9occpwHFDdz64v2cnejqpwQWT",
  "key35": "3Nvt9nvX857QTJcAoB6bZ2frPYpgNwo7AFBDLP7RmHRAsxQiaoBrpiUESoChbv8V9HtpxbMzFzDUfB6sjzra7u2t",
  "key36": "2XUTzh1DjMuVXB7UcNdHnE5mJwb2qeRuhtDM9DfnWrK3VNwKh1ox3HwKaBf6TbYR3dZUJjPDKgH1acFdkPTrtKob"
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
