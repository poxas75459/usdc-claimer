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
    "3ksNpaGHjvbmAyy8M8pqGApxXmwkReu1uZmugZ4HK7oRwQ7RjzNCHk2g8hFWiB36ezgeXeotMhCxWRqN1NQWxwCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMWGEHsb3CWgD37AbxYqaPG1FgSCkdpD5eocRKz8xNP2mY2VvvStwjPWes9T5f8wKac1TazE3H3WG3oBeBz5Jim",
  "key1": "3agDHxYs72QkGgegb5BWgPuydFv6132BUSVj55Wve3xp9aPZmRieHFzqihA4zFSVhXm9m1dYDiKr8nzRZ5zQN5LP",
  "key2": "3XQZBGGtUKAoPaGw1SiTvVPmGFnwET1diH8nYee4mCi43Px6s5NCUiAyETKzRYXYQ7XbbpYDcrf4tZcPHi8gV1H1",
  "key3": "4CWexFHe39PXkf2ud9TR17T14ikxe8oESNPaoL9FMneRVpyUA4bQ1bkpmXtQhMt8ujJHpsLQ2nBjXVktduiQzjnv",
  "key4": "3JWjnLUgzN7kyNWgu4y1imEr5m6gFiudEkNF7pBg344gk7oFVZU3xjbEd4ipjJzEJv9EWpTt3V8TnF2vnQzb5QTX",
  "key5": "2QCfy5qiw9wenxLLMXFZDYyb1ohTaFqEAxMqBJC8KecPQYqwYK9tkHJh2sGhqrJzYWj9X13bUM3RKtGXFdYPzDFZ",
  "key6": "2UGUXPRs8EbZ3RbQFcwquTJ1DL7pubgTp5NYLD6UJnHZEyPiP3z6W9F1MfSq62uGqjtPfoTZeuPLNd3vvFJEfzbK",
  "key7": "3hD8EgmnJUt6Yiz5UBBSrbwB4Ry8ujY4L6ZPwRSDNJ1msteou7CMQpDqy2RiP25sGM7d15zPQixDxbqCyA4i3Caj",
  "key8": "5kVDFcviobStMUBcFWsgJPK7ujZvzUjVruwvPmqQc75YjHhmryXgcrXTALT6YC7FRAoHWyTbWhogNNRmMQqJe5tH",
  "key9": "5qAfzJHhan1F3wLmev5Ff2ryEvNe3nfytGg2Txy2FgRMbRypuw1Ffscp5QcG9q5yqidkuBQTxr9Fx8JVy4RcGKxj",
  "key10": "N5FD7x2zp1oNSk1i3USFojmszTZUkDvWjrkpy6pLPa1GnGzosdtBmExoKbbeFtLtFk4YqRpfdSP79cUnMi7mGym",
  "key11": "4ygLViWcSestPMf35W5WEXXsvSC4UgkbnPutEkuZvp8BXB6tRECbxRGoHng6UaoaW1kW3mzv4MoNCTEncJSkHy1",
  "key12": "3pqDNJ6xxLdFBQn5rer5juLYjhkCaVQWzzofdW3XHxUscRNm6q4qkZJ5hc8q3qjNTZy4D6VCjU3NehRyPBRnePk5",
  "key13": "fJxbMbx7YsimEb3oRwxw3SxtDuPg6s89T2TVxQLQHKdTDqLd352NxqHhmUrWEAMKrFsgwoLrhK2Nf93Hii9oVsy",
  "key14": "4EErvEvMgMD31wAQosP9ymgQcuqodL88RNGrHbttwpzGHiWom7agQrCATYF3F9jGqHxvP8KoqkDhRTV2zQ4zE6Fd",
  "key15": "3VAoJy1orEGpoyD9VdbCZXk7j5K8nVcfxMEkERV5e6vg7HKN2Gw4u1Y6HcAhjnDEBbgZs8RLqoxm1kpUi5CUH5CP",
  "key16": "5J7XpxZzS2v6YRVCdHJSNvYwJQ5EDjhXJjDBL23KhhSDnEGT2wvU9XPsgYSajcjaSPgHAMR2BLNdiansX581dbmd",
  "key17": "3yMS3TdRHMkwgzhACx49FpMjL5UkH32D5HKPSVJwciga5f6HoQGDcddHmkLM4TXoo68u4hPqTQSxZxaZTq1QubuT",
  "key18": "3vsgMq9NyFLyacRdzmXwVH37Vwa1dQ7FwtiJvtBhPxUfufFRjMEPR6hrr847VJCpoN5C92TsiADMP2jcipUQd2rd",
  "key19": "4Q21LFbAutfpwMnD5X8mp2jJzb8U2Dus9qkBoBqjtCxgiHUryUgd2mh9DDD4JgAgJJumo74yfgZT7VdwrvVY18z7",
  "key20": "g53uWRLE7qYKYS1KkBF9qVYDm8GuHsCGCzaaqthEh6rF4i9tEs1AwX32jzkXH8eKGWPm6F4TuwvnmQ2GceNmJnK",
  "key21": "4xeswGWFXtzedcDMMkrEvgeuGXVTGZuu8aaSENWxnyXt2aqiqBNKZfbRpoQxgiafwUjcoeFS8DjHqS4EJ3cYAzQD",
  "key22": "3quVbNm2pWDkay36aGf253ScxSahECBen4N92Nya4fnacwBmj7r95FwM6Euz6xrhU6ezrEfdMTZKMfJpSUThD6Kz",
  "key23": "3DtHSL5EjtvypanvZFMtewtXkWqLhmES4u13SkgNmHESLDGgd7eHKR1m9Zg6nWAWF7AAAtsmNXpJ8cNdTHyiDERQ",
  "key24": "6rDEMSbWKe9wkKKS38pDRr48gDgf72KHtGyoZWNQVfystbyUNydMkyV72fzEXEWmAGkda9mB7DokMUGJXsF5etW",
  "key25": "Jox5C88jPDawrkywGD3ZySvxFcENQCxEmKZDGW8SacZDe11pJDmVdeZhyuqZXR1kyfxdvkHDLBYPia9r5XaieVF",
  "key26": "29dLVQdfGutK2am4ThWtSsyBD1QhyGh7p5nUZMD3nQTrhAS4sW6Djc42uDyfrK3zjzTFT8ZhCn5iqc2Cdtyy6yDr",
  "key27": "42Adf7S3Xrhkbn5ch34fgehEs94g9mF37N9aDKNq9FDq3kMbmoNdpF9h8fUxiGYiB2BjcLnvPR872LULzErTyo54",
  "key28": "3cs2esiz3CyfYG726n5wGPB1sybn4RpZnk7F4yfSGhZ4vjXxLAhD8Jjr7maJmJ56rk3oTqEEBPAMPChSCofKBr96",
  "key29": "51RPvpNYd8bAQaTgZKCrRrj6RdgRTn2KiwfpGhrck5C1bWqPzhAFEAgPenGoUCBoRhNq15nkiHpbMe29VL1YKBbk",
  "key30": "4HGneDWk6exU456boUNv55DTPJrnpsYqsfzYT2tXZKv1H2d8HPc1bemU1rDDFjwGbZHFYhh7Rx1gub3jfzNFEZ2b",
  "key31": "23tS3RBeknt54M7vLHw99HDqEgu8g6dSvh1aJB2eHAckrxGMqV6GUepQWMRnwvW6LEWzXtuLKsqok79fJqP5VC8x"
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
