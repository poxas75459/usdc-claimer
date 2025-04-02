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
    "5fBy8Tz7eM9dHChd8ayzmcoGGbg9ZweSFhmKEWrbmpcnkPTUApmw8nT3ov15ygZerEVGhHJt9d3wciiVapDibBzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGvcKqmBkTzRBdBtN6iV7Vo1hiNU8vLfQDDWvn9fkrUmd4Un9PpuoJrxGMmXAsAw5p1uKefsMUTwKx9CZMBLBw9",
  "key1": "3NYrzH4KMmJQmQaRj5PQRnU53TX5mJckvhPctHkNnjutT5yu269mqCGc43SjtBhZGYjtgK4kRXBwX2sNuKy3dqte",
  "key2": "W8uzM4vyST4mxHTwHGpQa81wumfHYjBrkaGsxEtX1pxJAhqMYoBUwK1CAuNo5fkiK3fZ2H8VLLT23GG4YBNng7U",
  "key3": "4PGqnEWNbGEh77gNH2m4e6ir783sniApRqxYmEfAkXwA8TsB5S242SFQisRBQGXdYRpdqM4ASCNVoHsAPNcdXedN",
  "key4": "5UQ2op9BJFECVnEcX4G3w5YrxL6g5Lg2zUq4rHG1zJWS4Wxr8sdjE6joqZfwYywxhsESMVgZcKXpJFJhrnjEoUQe",
  "key5": "614Lj7Ta66ZbrZZwDLNLxsKRs8KVKarh4qLfvtWNvUb3BBTW2PiE4iWPps1rwMjevtjSrxV26UkPgUJs1LsQrMh2",
  "key6": "3ERqoYMQvN5DYoiZgvNpEpX5DoNtjCjjPhfaCTQJTFHaj6sXUitN7f7AjPxdELPpa61MxU7LjCnWwFcyWZxbmg6g",
  "key7": "4yxaMtDBftUkdtWH4HFMhKUiR58AC7KaxEzquQLB2MMCmWh7mz1KCaSNPrHhzaMQmp5SCFBKDvCHDyLoGPvaayAn",
  "key8": "4c4M2L8bvZr7NLmVo4FVg9ZvJ9p12etofTM7jki6gLbaXazAgSEWv7tng9mtBRV4q9RBJG17V7vCUZ1Q8zBSeCB1",
  "key9": "4XAQtVV2yAKxEK5GkziYhS12GX8ACwXcj7KBWG3oUiCUjo9eyWfJKMzebwZ3inRDAfV1o5nCSxfpFpRUqu1Ajqqp",
  "key10": "5oCrVA5WQu8hQTYwAdoYfoUxtgWZTiMSdapGrbydKSYfVDn5mkWQCw2nVimbkDW8JdwfiST1DMQg5VaAJyb9JY9h",
  "key11": "fbaQdyaisSwe93aPGc5vQmFGoAh44DASB9wBz8oowAhtyfaUhPcpuQ3pwiLovg2PEmvKfn6T23KCZMfg5MbbBX2",
  "key12": "3JbvTGyVvAY6PZAevfvGy5bW4aQvZs2QPtg1FPUtysatDtvCZ1eReRvUwQUAmsdyRPuHPDZVhgJe6YMASUeXMBXJ",
  "key13": "bgmNR3guJX539hJsg4RHd9NsQEYSSTctVAdAZfhzn5L5eFZv8WG744r7tpBS2PKB3MdWs9zix33qkETowd5g2ff",
  "key14": "2byNzSawNbE4Bc13K6iLkjn8vBmj1eW4T8M8qyjAg1vGmitLVZ2AZh8e1QbmXSY987aweNfYJ1pfygufx3jaEPAu",
  "key15": "4FSQny8iC1yScJ4F1Xe6joeRxfLvcnBB3Qiowg56dWPbG1cGjK2XY5SMFVRjdecyp8b7hczw7RKT9pPT6EowJJbU",
  "key16": "48HTzgXeoBcAXW1eSQ6bpkk57azmQWfpLNqibndzc1P2bRB3fkt8Sv6jKVdbnrruByw1kUB6ojd5NncUrgtrMDF1",
  "key17": "7VivtLZkQHfW4PaevAJKPQsBDJHwAHWFtZGmakN6GTHk2Gko8uHagd7sJZtGu41C89Jh8XxVfHFvxEseChSrYA3",
  "key18": "5paYfFNH6sZybrzJN9LZMkgbU3d7FmzfVEW19gJ7YQ7kMEVPGy1Kauk5icb9t6uyRCe8asWFBZHgRgQc8AB7VJyP",
  "key19": "2tBywKeAQu2P2DgaB7Ljb8cWga8271ohtmZ9DJf3xwdVD99pumdDcgfjTMBr8jL9HPuixnPUve6GDPvQhA4Jx4jC",
  "key20": "592DzvWVpXDRYQH7dpSgz2NkjxFPyXezRfTzXpGAcB5V3S6ZAiY1AuRW9dPS1rZ3zygdWa4ekMsNDJcDNQ5uxfHw",
  "key21": "62zVDrLezce2hzmJKA6FyuzMAGdPZVxTwk33GHfcT4hU9bhVjHgKQDtyntTx4vepfAxntWRfiZyDmbN6zCWdM1Y7",
  "key22": "32JaCAxgF6S6txLFT3PrQdynU3SZjJo9EztmrKnxL7apr8k6f3QfM1ij5LGpCjnTL9PZjTxRxUhuL4dzpv8NyTKC",
  "key23": "xT88BwrWthCDPHoN9539dxdG1hVNncS51azAMV2pkdtiMbyvEQqLAwxH3BSghbYZoJdjybpkLvyjNfNgjZUqugb",
  "key24": "55Jnv2Rxmwat4Sv1mCn7VtvMcaNiW5DahUuBVAVgqxPwr4sd5iZXsnCxT1emSvxRXjxeEtJbqFjKsxFbdJesrLKH",
  "key25": "43pZRqedYKhuemK2ww5WF7EnLBQry91JF1oJevhix55o1rndJ7v5Nt6NCZfAMpMLNjYpprvcC5d3LiQEgVbKMfee",
  "key26": "4YnxVqFuYPKbm5MprYMjJKNeZrzHZXLwF4FtEiUFLNDu2kQmPdfVJrWevGz2DAZNdScF4UNTc9RUgenMbqzV25by",
  "key27": "5FiJjsyL8az8WT52bCk6k7j9uKAkLnw5sY9T62g9WpUyHrAfVCBVgEbTKxbJripi8BjTvXupfEsH4i768BjQZnZX",
  "key28": "2vm4gLvBf9Qm4nNn7XxoENnBrfoaDENvkX77UpWkCFpRh4PPoQCuzudzkb2CPzj4JcuBqqthBznuPM5SUuNVzvtg",
  "key29": "U7fJuVg6PCqEkQUqqG6AyrpYgUqxw4zjMie7VssmDXbEYwHhqvZZoWxgjm8b9fLGVrc8gPMBX8EhTHW371wAS9N",
  "key30": "2Fxczt6Q5FGNPkbGomXWPBhqtL5pcRcvfsmxEjNHdk698fcVbjWKeCbxkosvmCKngDt4pfN76RNJZpDqLjLwhqua",
  "key31": "3Mrxkua2q8XnSFtfYczW9a4swegv8qJjMvG9rnFFWiPariyFvvZFmPu9uiqsEu7YdjuHqjkaFJQX7vcdr5MhJLMu",
  "key32": "LHj38xFAp3bysQAqF1swsefEFFpZh7NLBvLUMfR84fWei52z37118wu4KKfcHfSesC9TT7FsXocTdNALV9hY2JM",
  "key33": "5v2QzKLVgkG1rUNzyuWcSgN3SB6Ww5gk1L5iPrDNPTJvZCCeRFzwou9KDD1XaCyn3ZezRGtqYpZpt9LDAXeG4z1t",
  "key34": "23Rew77chmyZbREMhZL1wUpSLHrdem4gtrEv8sVvX9QpDnDzPpEMm8GFuvuctkHMg8oehmadrZVwePtMts96c3bY",
  "key35": "44VLnoXpiqoBJwwRWgPLrQsXShBRrr2aoaqtpkx4Kfcsw6bUnwpRfz39BFAA4utxTFKGdE6NuBpNWYFuxptDGorz",
  "key36": "puZcfHEPFYKJwWDfGFAqBfpkCSghavnm7Vr3Z8jKPMS3cG9rgoMMdZCGEHqHz9z14vdQwWV955FsWjNKTKHXCuU",
  "key37": "2nVwTLVipDtWT32mrAg2uSv8ctfqZMUiPJqMtKzMVLcuGe21BdoSzJFMfzhXSeNu8B7je5AzdrzMEmbcc6i57Bkw",
  "key38": "oEAHEo3XCjyFDUskXqU7zSsUZjZCGcnVdhZTHNeDdeAzQPBE4s5G9UuLydVxwpVsjTRApv9LVHXN8sNKLPt8ukR"
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
