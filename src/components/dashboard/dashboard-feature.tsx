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
    "4E9ppYYsUsUfgtVnNJ4gwExzqcytxKThGCtiXkoN1Q6QH9J8pybemVBLucfMCWRpPNg1Wi1Xd2WMNEHkPVQzd7tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFFaJ8KwSvuQUiL6XzGtjszZyU5mWaxAUGDUuMudM81eFsS56THscp8uaVdhpRYwGVXqefPPp2GGfsFyoD8mT3P",
  "key1": "5GzaYEyU8Ba4grLn2tpkQ6yMakSpSNA8nisqXVn7Ko7z2yCtqirgdMV2oswJkYzVF3mzUn9EyPf9S8iTsFdpzLLP",
  "key2": "2Ptm8vGYaa7LMUDkoEquzV2VATU682gXnhweYqB3DPYb2QbmL2wvbh4N67JJSMzeUdasxzEp4RHfEbhpxa6rYvkv",
  "key3": "aoQUW26XZvWBWxfm4TBi7U9y3TyCqHw4XVqcUvmWQZrQXXU1AVXxrMgY17z4zPeWuXM5BeRxVmsH8ej6dsQTStG",
  "key4": "5d5RE8vqSLpF84m1pKtWoS317CQBagKtuXqnMyuromUhNH2SSRY3DgppAyLaBUTWVud3gmvBMTsV8teXiPefiv7o",
  "key5": "58XhUJqXQ73A7UmxHVwnYmZ6syCkntm8QNzcpKjiyFdmcnvZY1EHV52MojqeinE8FgsWVFRSW7Sv8FBkstVewLvB",
  "key6": "3wUfx4t5QHUyLwwiSucYRj4EmoVhej6yEy4wmejhbCnZxJVzrS1vH5GZSRpJZ3dncVGkkrEHCBHVP6T7Ho7NUHc8",
  "key7": "3VenYmg3rSAwQe8c7ZHfdvMEJdiKPxvktdggTocLVCFSbfkuYryqCw3VBjocGdQzZHV6q5RupGdqJt5NoCcVGaMn",
  "key8": "5sbvGKbP1WstUm7JifbJCTt5M4cVLUfeEdG5XYrvMiCVakQ7w7kxeoxLCjAE39pK7uCeHsj6FGsKnephSLM9bDWp",
  "key9": "gyj4BRVrnHPJkMwHHs4wrT6oLS4eB84ggMmWH79AJoi75UdcTB4dXGSrnoM82ME9VBZbdBspq2t7dkoDwHXE5oK",
  "key10": "3JdkqXivqXQAHg2kFeE3rLv3SbTCL9zAEEGBuEVtDfimni1WVzEiZz5ChzYz2Y6cKRR66ayq7kqwpa4Y1YGfFvvq",
  "key11": "5zZ5ZJ5yckshoheE9pGxeom3mq3iGWQBypbHry3buyeu7zZx9tFToxZfgUurxFLVQmZEYhE9RqWUGn95XRvuyMR7",
  "key12": "5mJ5tzJtPoypQhLybZET7enBxWXp2MpXNtdYDgfL45e4ANN8t9Fj5YCgM1TBXSEUJSqRHrjHtJmpobfHxBJALTHq",
  "key13": "3tHJm9pqJn3S2PEbZvNCBR1QMxrUEzpT4qGBYSZm9rSSYYwNLfizXhPQsqxaoZodE5LAe6tQ4KLvp3PVkeWdLVYB",
  "key14": "3P4DD2ZLXqmzDx62p9N8YaQ8AmfrriEh24fog2TthehqMn1mEWGTnxTAGAKeXcFCyh1RAiiVPN7pdvVVdc191yWW",
  "key15": "4ExcD7jjicRmL8Pd2JyaEpjmmcv8pCG8ADozexWprR9XZwJPYTYaXstiwHbhXG2mA4mqtrLDfKA2MQt199ioXTZo",
  "key16": "4Z3pAoWUJJZUJmLYM2YRnyWSSbrRFzY4WhF75QSFYr6N1fbNKNPYojRbCEsXekQZpjZWpdrxb3soEMqGdiaqLvk8",
  "key17": "3nwjTr5vhvCPaQYhejETejY47uSmyrj5UNGPuYYGrDS965FSrSL5GqArYFYwT5KGokW75rUVg4KHYXd8RTceVWQT",
  "key18": "2YhY5GCaxdPnSUNh6xBmA2iw8nDzgSMbTL3whcGkNRvqqUVB4WmeDhbb2agAKQo4aShbKBM3LvbPicG6VgfPUAgQ",
  "key19": "oWHhKtyUrLVLT95ugLMnWNy9993nhX46AYioJjZGJncS95kZkPLPvKVjQsBj6sVXqWMAah9X2eAs192yZmMKkos",
  "key20": "5o6SbPM3FWbCoUH6itso7DYyUZgCZoPjDtwZSDGyWVviomYt9erqeFZp54Vxj1baebKM9B44kYpYchSyUY5UdbzG",
  "key21": "2cBe3ey4WMVNwALLVmDdsmwvgkDgGv5U3gQpmF6oFxoo94Hib7JXX3hwRvmf8wD6ueGKMELU1TymoY6bDMiNA6zL",
  "key22": "3nNKhBw5ciCa6K5iTj1hzsj5jXQJJ2r7VwyrgyEJ2yLZgj4dJDCtBdG99HxGZnZmCKbR9HyR2uDxiDNEp3eZs6D8",
  "key23": "5o4VhsbaD2C68Mi3kCtG9sY6tqfbPVzbgEZPL8ixVmKLPnrstrZajVrjFA9nHeJ8yWV3bgGZ9Tw4CmkrxkrJBAQw",
  "key24": "27khKUmsKtdtfKwiN7XvAgPuGvWYikHajnEYYeP2Stttk71CEXPXdRu6prsUtdPGZLpVAvnJfVnQRz9DQe1nocDc",
  "key25": "2iJFeNnUveZWWbVXA1tJW9W7qBk1ccvU3HgXF7GQngNVRWmCpKjyVo33rbmzJS6oAQJmuZEaNHNbGBhiCs4iCL2j"
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
