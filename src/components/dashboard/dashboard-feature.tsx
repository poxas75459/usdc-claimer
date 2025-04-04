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
    "5Ua9AVuvNbhdNXYhnex4FJ4ziCKx45vkUgzT2FeppTKgqCdVDRyg58jW48w2TWFJzzJvN89aFHL1NqSzgMdQgxL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23cNVqivnVHkkwZ2qyRYB5pjFs4qeqn2wKFvu1onGqTY7jsUt2zFxfDNyz3QuZpqeHrSyMThEuXG92rJhS3pZTwg",
  "key1": "61WsGa8xA2jb37aR1fQ5Bb2NCVPh4qFu7M23Fu7VkPxuMJvTBNi2WBkqknqbLKMN6sNmd17U2qud3JbLBMA4dnb6",
  "key2": "B39JoUoFqp2ju84HhWoph3etPUfH8ywcACXfgENdDjiqcTFQjiDSTqVNW34dy6RPrxegEqjVBwNKVC3uv9yWgox",
  "key3": "2xrwgfNdygLZQFNfnLqUZNSyco5CjHtqvedoGj5XABBwBUkc15szh3p8XFNKfbxY5nF7VUtX1vKmVfpdjRBurPYB",
  "key4": "39dswQqrtcCQBfbL2sLsKAzBv3KvjE1EpDY5kfenKNa94T8RmVhsAz1rRaRDdHbvVM4vCue8ydugUDhw3LrpQpGB",
  "key5": "4D6o1YReR9oc1p9WaqXrQtDTktUybdJFJb4iXQv4fFfkpJGW2y5PFvsfD3oRy45d76FurfTTSQfqCkknfa4RnAqk",
  "key6": "4CP6WV29EYVFiJM3z9HcRV39pBaLgwSmZXVA1krQVJcoxutW2SfQuVJDDkaHK4wWSUGqbdJ2uNaEgH4WYUVP8cYF",
  "key7": "624Qw3nN9asuqUB9RDFqCKsHLmaEbwr4XbeH6JEWm5mSWtbLwNH7DRmyzZgBunb4f1hpbXq8dFcbo4Dm7s9jgTrh",
  "key8": "46kNap5nMcHdWwYsk3X3xs3NiA63Vf5oTh9BFGheujncf53xiA3hoJ1GFFfpizjBMyzRnHBNDdt4LDgwtTrJqrod",
  "key9": "4mmUxtEGyEJ6ejBcMLRi8pSVR5GgEkGKhtkErCpeSHYJqTtU3AqAwaRLvspe7Zyzvz98KG8qifjkzY5a7qbZxJwE",
  "key10": "4nYQk2oxwrEgT9cwkQi1Caabmn421SUmmPcVpDE5wcBR545KoDtmf2TFDSsvErZWqQS3sSQ6c6XDeRWUeNVKpF2e",
  "key11": "kqC1ioVj7PBAzdVnkYX5kT24z51EKkMjHrHtJzKNSNtYNJjY3czf4FFncgEsKHvD1VLcvUCpm582G3k85H2khY4",
  "key12": "2pfEpfmUi9FryUUSRGHPPTY31QUTnZy5GXfWQSTdpJ9R64nyMRCyGqcgGZV5J41sFmyDwNJvD1FzVZ87hX6APsPM",
  "key13": "4enucnG6Ddvp3Z8kRHB2ZeYfCYnK4Yp2Tk6pEQZo87oQ7nnBfHAK5vvLw9Bq16yRc5U5LTY5kcMB8UddZZkSM9TR",
  "key14": "VkPq3LMWxTq3E36R1EdstBe5H1BosNSydh37KTSChwEjyAmmuHwrbnU9rywp8qcErrXEs2JZdcJaFAuTWtw36eg",
  "key15": "23p6QJhM9MVboVskaCT159YbWXCJUszK4bTBmHJ8ciK2gMWnGZ3DnS2FDi8D3WzpRm6qqJxgNzVE6djqaZWL9RSw",
  "key16": "mD6nos9xRPkYQewaCLmRz3437axUj9D9gLj2CdL2D2FLTS9cW3MnV1e6nHRRpZxjy2baABpWrEQxYgaSjq4pLrr",
  "key17": "2Wxu6M8Bkuhjrma7CsxoonZWeKCUKRf6z1vRSZeWXS3NKfKWPr234iokDKQvKHhqYr84ZV8odVUNuwygrH7MXEww",
  "key18": "3w49aEcFXfXbPrsCjnrSKzZhnRnep9WgXEUqwgqGg7oW1AoXbyKLzxdqg16n962oNeHmxSeGeA268W3HwfETTrEK",
  "key19": "2VUkuVZpddQLRmvQJYiFmTykquCANoXMcLBsREU27riDQ9GHYHh5HZPUHyyxHfLj2ErGBnRW7gjDzJyWMGtmwj9c",
  "key20": "5RzqLHK2CDQ3cC9nYzJkioAhBGzFxkPkg5BTu5Rqm6mFXvC2Vw5thDH8nzseomRDwAnP6LSuZWrppHwuHjMbNMLP",
  "key21": "33S8mq9bUzpYAjk22z1cGaxRjaGNJmvR7nUvjQJWzcFeW33pEg1DmeRAmmn6RHT2ZTBsBsevFTcXC2VrNx5Wo8cT",
  "key22": "4PqcXi42NreVyykfYNMDrtuGQLpwXN8jojPPcj6aEUJhTwSFup5DKMPHwgWSrsu9gvpBPUYAotDmraU9AzwitAdW",
  "key23": "4EpLzzgWkdabjyZpnUqwNRMBBREQ7Ngbau3WtaQtmzpfJruq7KJqbcDN3gtKeGivgQqS3sZUFgU1ED1AAEz53sU8",
  "key24": "2PVrt1tLvQPeZZvKddx5A8mmydPFxgVLHavXqQCvnwqtDD7LAqsRmGTVgPS6avoauULTLidSgnZnv1LZr7XiX2F6",
  "key25": "3m4TVqfezofAAE6ZherkFCTdMTYVdXfKHQgc86sWXRgzkknDETUyU2XLxfqroe2SxEoebANXW2mob1aUgYEUtkyE",
  "key26": "3FX6kmy1D9zgrryjnpCQczRATzBxemPFsP8fTdRTyn4KwWMhmVBMq4TjAnttGzGeaTnGV9VvwNU9hW9uhf4Dtbv7",
  "key27": "5FK5QDgLFDffH69qxMpLfuBbUJwVLDTgpTSuFYkhN2NNo4dVj8BDqJePTqefH2KkH8tnFjUmTVoyqeec8iDonge4",
  "key28": "3SE2sMtWQ2uB2jcjfmRmzTudmWsvTgzjtKgwUN4YFKoCjyanxAXj44fmpeEGBYYfrtv8ZJvGeuj8nVq3dFc2Yg3L",
  "key29": "2DmUc2KSA6UnZkMWYGN5FZe7pUPZqUz1UWG1JVfs1TZHoUTrS8R1xJQbs7MzCtuXL3Ed5WKEmepJsJKxchBEHrB7",
  "key30": "Tp7YyjdsxP9mtBUwHsMEPJdr2SZBt7h1PfsyzDkJrahYgBMXgFhYybfAAMUijrBwqAxHmCZkrnRWv1RNHPCDi2c",
  "key31": "21SMERFQTAnmokuMSENmMu9ehVjvH5p2h5eTiiBKfQ2jWpdVk5GauBK1kJ98mUiB8mB4m9TZxFVWaGYfsYAJ6zAo",
  "key32": "3Yy9oathJ7mNLveMwKBm5aDKwNQAKMvQ17QTK7o7thx5cDEsDRpiVgYoR3hG31KaJv3ha8dy9PNu3RAy8xvW8Qdq",
  "key33": "27UD9diSxrgSyH3oZMQmoUkWmJvCKBarj5FbYNqnKdsdzJ7BRu884Safv5MFtTmwhHo3SJmDFqQxAy55pWxKf6n1",
  "key34": "2TAjT7LsS5r4tTcQRVLpRiTLZRtXzkEvxUvKWAvAzB37LVQ3p3gpNKJPGyKKDuZzvNjWy4DTijV7U5iUNTwvnt1p",
  "key35": "n3JvHoZ5BmRK9JyFA8caMBWKX79qdgV4WCQd3MNRE4xHDqrCFg81vHZSYQs7ZynVPkBnTrRwDfiteAE1yrCuMze",
  "key36": "3mhtS2tN7B2oGKjoe2q58ehR118LGCgHwgPJvRV25VMmAwQ1ZQD2JCJtctd6n2XCa8VpPVDAMLfY2pJsZuBBhXqT",
  "key37": "3x6NfNNPWgMNA2cZi2xQrBJhDp2AvMmyVHVSo2khsyifNgFSkY58zKAPWP45ifFbK2wFq1LEAXZXG6XPf4CMgk6R",
  "key38": "2ZyP9vxCN8J5zRkndirEDpChqB5cYXQVsgVRVaAhKybhyYaDPGXxqzqR5D3SD7BojVpjVLqASz2KvY8QQF1RMtNB",
  "key39": "2d65TCDM7WCA7RHZxL7rg9Xa3itUPMRSHq8bxeHisXnrCq3rCn36e5jBWCXpF8v8dY2B7ux3nYm3AtSSaSudmg7C",
  "key40": "3WwvzgR2TaczMm1wGJPJKAoZgkkWeXaeUmNgmxuvTkT8jtQyyPM9vf3Yi2PaNk6n4uCLnt1zeKmvpyFB3HeWUSFc",
  "key41": "2wF78Nk8Hk5SLeZG7bnXMtk6Arm7T8Aq7HZps4m145Z7vqm5GsXP9WL34Cv4kCLaLyEikRN267tVKwCfQhSLoUDf",
  "key42": "rsRH8xU2HRaa7dy7PRp95AeYz3f6FZJ8UzXPzecnWxafj3ABXfcU1i3RfByToCtRkzKZ2LYNuN6aTgHvGo2JP7S"
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
