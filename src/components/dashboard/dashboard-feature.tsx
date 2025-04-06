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
    "3UiVTTrVu2NDf8yyiPvFaKsntY2jiMBMSzmAVmh8noPxKFra3irQPu3HTCLceSFfRV5RnzBs4RzbA5qMFmPSaAfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTn75wytffVqCHU9KHmxgWotrhZRVLKK8iwBsiYoJwcC5FrZncRpn9R7W39fYK62jzi3yi1qtFv3g1h3p887KL8",
  "key1": "3sGyAvs966MSZuGxyxAKn6ziqniAo6obF7Z3HAvSNg6jvTFVUbrqEGhZAw52YtegjpoQeFCeTm4Y45XGjrmqR3oA",
  "key2": "49sC1Edqbwyf82LPuBi4X4KPqYYWpyoapPGrz8V8dCdvEoxnfVshnDG5Vcra6oiLBJMpEkQTPmVdVD7NqomyXFyH",
  "key3": "3jvcBBwWMdMu6XBsQ4ssFyfMZw19f5H7X1D3rrxjsvPT4oYH82kiB1CAHg9bHCwWtuJCdAbuzCDL2SEpQc7FcSCX",
  "key4": "21vSy2NYSeLGj6UuXVunNZnLdHpoyAN8r5h5qerJyn1sUYBifTFzFDPpkkQw6R28SExY5zGrMb6zwgBGAXeDMZS6",
  "key5": "5xAjtU8GZmaK5DgCwqSKNrq8BBXBHXeEtgvajuK6k8DjiACRqa1Ewm1RTHyUKQBiyosGzyY1qt3ofxX7YNcAawrB",
  "key6": "4pzqMvfespNEhGcvJfXWwYnXzPttTDW8XvSE9ZdnxPsDPTnFryArw5ZzCNtkKAnitxTgb9UNb9UessH7zxvgCbnd",
  "key7": "2yqRAxfrE3NNkfrgajXwfs79LLuLVBsgqMkXsWtnqC5cb5zBKFcazFv2NwJhH66e48DHfRt3jDLijEVcfyDzsUPd",
  "key8": "3eNPAABzTp4gXJAeaamx6AwC1xR98oVtSaXdnvZwzGVygRxB3HJwmN3hRz6vwfAdBPhWFbkcso82GVbu5jEro5iC",
  "key9": "5adpu9JrJPamMDFqa9TiFmNZHFp9y3ByCi6RqwGGHuvmJuhFgtqRXDi4psaqJ2dqVRU3554vQwkch1oqVtRe9X8M",
  "key10": "3oAeQt6udqMLL2kRy6yZE79UzhLq9FoNLHnqXJLi6MtRgTPyHruTbNKtj3KVyVQWe7c9wVKzHdeat7RLzPoG7JEr",
  "key11": "39ncuM4zbmgLgczce62UN5kzAsZtqGVsEjFZ6yVZipF4AbALZgWbJLMB9Z3MW6uCjHNijTx99guPnX18Mx1msEZ2",
  "key12": "3BFfr5pmjmjwqeWv66iSJTqGcfqJqaRfhXeuAcAFDbvA8fNDZ5BnzXPyXUAXUmisQFVDi4ZtvEqUHCt3M4UdV5Vx",
  "key13": "2ZoXBtt35BBnUhbf7BGeMrVR4ztaFqhRmvgNXn7inGreDVAtdj9ACbmiwdMcw4vJkCePhfWhhJjkpTMrFrW7rtew",
  "key14": "2m2xRERzbLgNhouK2w5MpZhekUQpyDQzuYYqCCqTptqufnDZYuBuZHb5dzPQrK1opeyVqLEwwMksxmvGMNushcQw",
  "key15": "5dAccX9LSdAkX9TYFoUVZ6rCxiJE112i5qqy7rwEeQpWEH7Xui5eknyZ15pENdqW2ics5rst2m6q7D2yr24xcUmL",
  "key16": "JG3jXBvXFJpzyTLpsfKoSaQFH4pHVoUPFQk77sDFfUB2UAeDjoje1iozSuByxegj2azcmMmwYhe5XTkY2s3f198",
  "key17": "3PL2wU3ckbLEzLesazQgaQZ7UawNPr4628CprLLt4SAKB85NHBZKTBUxc93dZMxcmUzjhWPPwptGrJGz6Fdy9BwK",
  "key18": "7CxYFTWiVvfZu3dRXvVwMcD8ueD2RgeuJC4fH2ERsaEs7DpjNCCVdqV6q7KshqLDpoR4fT3qgUMEVHgueuWrXQY",
  "key19": "3cVczZtScYBEmNmK4KajHqPXy2x92whqfirzSyzrRa9vK9hQGuYqjec7WqPYgb3B5SqvvvP8qDeJPA6HcDaTtHc8",
  "key20": "4xLtRwkg1qHxCmwWfzGSD4jBD5Z6DD6en5BuQWeb3NyNdd1t5sNo7W28K9VdR7fHtA6GC8TQgwhiJvkbBqwWetxR",
  "key21": "43Ax7c2ZTKcDKdT93VzoB7j4kQwgSmRgKA9XJdDcdWB7STH8uBoJmEKoc9tdfx2CMxeLM62hAMqw55E5zBRtARie",
  "key22": "5FSMGNPZ7t3RE1Jqgjo74rAESeCiTRc3w4yeWkK4mA8tcRgoTh6GxeCuNwnEVWLoACsZXL5SKchwLTFC8Jw1srH6",
  "key23": "VN7sTm6n5UQbm7NJC85UtE2aYQpiXw5HooraowVTHVkhyC8bqB9hEiVBGpqc5ypumeuUWWg7ceK4EH9vaR65Zxi",
  "key24": "2cYoYdTkA6qys7PPZ5tHD26he1XsiWBtJjEcsLbqYfN62wyvqoU6vTQRvD3Wq6JubNNetCu85YtfkocSWpKZx54c",
  "key25": "4QpUpseGBgFFXtMx57c5gqFFYc5GYmZhw25ExrDdkSH32EH6Gpvdn92gf8EJv6uDcYq9sCJSrB7DrR3efK7NGeLa",
  "key26": "5XpayatrnkjTVNMZDajhtnkWzspusuRxxPJgRCyDVxxq3UtxP14FUKBzmu4yA7LpZYqt4WZsfr2RwE8G4T171cbG",
  "key27": "e8s4Q4PnEFkXPDMeHu1TKY7VaEY5RUZqUbGwUCybCFg7MhKk9CXsTce5DwUrQgZ83WySCo3Kcd36X8EBwJJ1u4S",
  "key28": "379JTryRKUuymqEiS9BCTbg8q2XyEoz9eE6cBXXNV7KH6QJtB3hmXMfvYAX3zEhQTbPM2GxNGDC7Aq2tJesXY6dz",
  "key29": "3ggS8UJEKxB7Wh1jLegKJU9BRRGQdjz2Bigkpn8wwMzDvMNyobRavx2WMbDRooJUQFdC6XG6i9EdzAUvWqNHUY6a",
  "key30": "49tcH22Dfh4FypPNfAWG5UzBa7ALh5wztmVTaeJN87vk4oRghQDVR5DmP1t5CWXkPiw4kKq9SMNouP6eN3wrunjX",
  "key31": "vgi5qx4VUnUusDWo531dJM7gBXUvifMAtAcYEY2P8G1QS7NmwuXcJ6A7hLwsYYXKJ9t6f9ALa9fnNaRwHRGekAB",
  "key32": "vsyqN4ihQUqiyPgpcycbhypW5F8aDACpoconDairwcw6WeYee5SLfpCeDmtvQrCtdZMjMCZoDhYiJ4KS6DyZ1Pd",
  "key33": "5tc2fkmbcDFXPTUXMDEm3Mzf1XrFfUCZ5VyktcaP5Lr2CeCNgxJ6wjoMhBrVE66yLqZS8MzuQybx7jZjeffG579x",
  "key34": "3K5v3kVs3TKFhFcuR2MFGAGw2iE6zk9MTG57pHWbzTFdii9XmaMAqVENSu9c23h7EFDxySzSrsPMKMGBGprEjqwD",
  "key35": "2hNJSSWyBTX9Wf93nfGChuWePCms8s5c99btZXUvnB3z6oTRF1xdRtgiyYZoW6g2SMEkerKGQqZsjhpgWkCv5emT",
  "key36": "EwZkvu2W3wJmXYnoaWKkZN1eBuEK7oeRfWMSNC1MSDLZEQ8UQXywovkidNY2QAttwKWYQFarMmgVGo52WEcnFxK",
  "key37": "8cjH3xHFGCQcshRNXxLZxkvp7eBamSLh8jh1e1TRAXoeBTkjViyx3uKM5fMnMZ88ifU36XXsZSAMDMy31PQE24B",
  "key38": "gPHTEUk4b4kJ9Fh46uWBC4ucAn9AeeQnE35EzohjF6UbdDToSSh1RVvaZySRWv8qKKo84TSkGn6uPmCxheYMSJv",
  "key39": "3xdvZiybCRtZnzMCuLheaeRJjD7nBUgbagfp1GgwWzb2gDdfT5232d9BZZh7iQ19N2V8VSgc8JGVWVwoeo3vMYv3",
  "key40": "5nuTvWSJcekwwnHTkcTdoESThcwsUTwC58bjAiQBpKm8QTkAiqrz6TMXj1i7Z3K4n2u47VrAM4oqpdvzawxfKGcX",
  "key41": "53Q7gJtmmkF5SrRw53RxFyb4Ktww7W287eu93GoUWfVkVV5PNbcJPehcseRvVSwdQMAZdgckbierPTYUnwf58HQp",
  "key42": "3SGHaaLZUSS88P9WezZQXMjspkwn9j6XWoDAypdsWgcyb3tjthHvvnG54GjaESv9ZySSFgFuSLKhho9TKJqw3j3N",
  "key43": "5gSQgCHddPcdL5t32uY4WqbZtBRRShrUTxgpUhSa6mVmZzgrfzpJQxbYaMcRGutf7zq4J4JF5Mqag6xPBnaM9syX",
  "key44": "3guQ9K8etcTTWgJcscbSk4vcyiRF5xmSp3NujXhQgd5AaYhHyxRHbHTr6yGgBbRJrLFJfbmHcRhNMyT5xthvWB9J"
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
