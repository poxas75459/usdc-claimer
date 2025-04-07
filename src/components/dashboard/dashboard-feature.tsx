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
    "5APHm1QW1eQqQwBYAn9ggpQQFbmRRMpLFnhMkFh1KsCTun9pnrJxW9b2NJzEhGuTSqtyoZMdCfrEFePWYLpunwqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXtfNaiPKXKGtGw7ja3CY2MqWvtG3DbUZBacKJhmufMJeane2txxoMj9TdyBhyouCF76jW23Z6WNrhfLoctxkqF",
  "key1": "4TaYcp2nXwZTTjdrm7T14mYQNDxKU1JEQgZ77ctgV9TtCzxwv2TM8XicyygWC4yDwFGcXFMxiAzJMJmGBHAM7Qf8",
  "key2": "61wEasshUaGaBbFGcQckwFb6GD7Dq4DUkfM7u7fcJUG9VhtZ883iQxsFUxPveQWut8NfH21ZD4XUVC2jR5TAysfs",
  "key3": "3tMQwfn4cPnM4UPQSUxgNXLPYYKGjiPuKKsG33GwXMKMRCCo3HAmaiiwE444uRqQicqn2pDrinrkSnZMc98Kp8Jc",
  "key4": "2QeBcURgHwNPm2YD7DuTRAatsPCHAUUnWJBMCWxt6dGMXfo3gUbFbr5E4EQkacCxP5HjTZGdi8o3oio1q98JMgZu",
  "key5": "LVk7PruZZM2LWDovMeYKpJ1Ttgs1BRdSQhH5eKUMx7g43gnHBgCKEXC2cR1afo1WtkNPMwNnjKL5grASytffZpQ",
  "key6": "5jsmT1pyZ9EohNpDfj4xueVKNUH9aWtbGXpCtvWeessc94UYZ3K6r8iaZmoPSYCXTx4WiRofe77WbLwJKmhu11UB",
  "key7": "63xEE1qTtNcPqS7c3nF7Abp8TmoTKuknsDthNxxyG5gaQn5PSiWcK7ECsnXkhGZrKRuWttMiqMuqGZTTqcgVEV94",
  "key8": "5pPBHpsKfTXRAwccLYqJYk6MqVAWbV7kiawMwBYmvQc4fwMffsxR46QVFUaZqonZVYtni4qW6bj1tpVeQLpZupW1",
  "key9": "3JxNZ6Dm5aQcK76oMLmx7tpAvijtSVu39UGaNHaDMcq4ySXtBJie6n4aZXXqcvxVd4zNe1oZZkPNoYz4brW5e9y",
  "key10": "2eMr32JxtTr2YCJpEXkVnXtA2bjHzvDP3pBKJAyN4uQDNkLn5MBCAccjVxXox6GL7zCDH5qv7WiqdbqQmrx2BfBz",
  "key11": "2WDjXecp4quno7g7TDTN66pSxTozoMU497hoNFKDvn6sgkcpA4LXBgnPNoGV89Jri6DtaTQq5aapRcBB3pCaMGoJ",
  "key12": "2Vc1xFxg9ccjSStJxin3FcWcRJZRjzsaEGa6spUHx6rv28MZ1mzyawN6mjPt2KYQ5VcF25zzsSVYaiRH9zJSNHwK",
  "key13": "339vUevqWtkUKKeLbq7cqkNh3sBH8M1WPdneNJvRfRBRzvX3LLAU99SsKJavXY6d4VsMuVpZLxxipAyHqfT9oSNM",
  "key14": "2gMsyk89ABxngCZ6MDZqTGj6B54LmFmfhh7hshbHTiFXF51dXmPg2NbHhtgfGnnN2UhJ7B5xB1tNDXqfCGyVJt54",
  "key15": "3cjJhDXB4VTL6WMtWqKQv8wuWqo8zuqHMkV3Ch6jhoG7wo6Kt6bEfRAT4LFoUrjRNvTCECRH4K3aVxcV9FnK657a",
  "key16": "5tQUeHF8MqFEP4rbGyTaahCEhXqAXSGGWXR7xtN1N5hQrmnnMtuWQhcYgrTDj6dvR3mAtTUpwzpf81WwKk3qWWCc",
  "key17": "4ZGx1TPb6SxMevXKtLV7GW2WLrCw7eiJH4Kqqndh7i9AC94VinLxfvw37DTBbbu6iWVjkThTR4JYbBGxYnph3cp8",
  "key18": "vgzeriVTL1BVY9uZqFgt3tskUN2eVhVbkDqXPrySzwBYKR6K2WXmXXeJbzAFMtsYuUbGf7TwbHehhY4PksD78RL",
  "key19": "5bPuHbmoYi3GtByGbPzW2Ph5phdX98Rshz1EHJUc3TMcAerSHc6mpHhucSVQpw6M4a7ZM3cPDJ5Daz1Q6aR5iS94",
  "key20": "2XoeBTYPqXWuEikeNEK9YA5UcNDBD5kHYrtoi4TAjYYoYESLWeKxgznrvQpD5rBfK8A47yv66i9VieNgbBAEwJ27",
  "key21": "3GKwhjAbkSPWNJwfrK7FhkvryEkMZprHDNt29v74gkTqeKUYXZ7Y5T3kWmpNpZ3sGrcyHstKdkEXYUhnq6hiSV3",
  "key22": "4UDmQ33avJpta8ypQYQRtDWdGQtR7tnufb2i1j8ifBBZn7Lyct5pAHdNWdRHaZwCoK1Xiu3AvqZqqWtpj63ZvP7V",
  "key23": "21KUvxFwXKtQ54sja7XNTDnGi5TQri9t2BLYGA6YN42HKqX2dirfRwqXomeH5u9ZiQL2yKZY4Ftmxfvm99F9Ce4W",
  "key24": "3gCLHhG61oS63ifrV17p1ptAseM2LpetbszxcBuHzKQJSAhc3c8mEexgWqt2j3DeK25s6svseWJnhF1vpZqL8bjg",
  "key25": "2eYvcSKjtNSab4pZauYPJrRNBXsn6UPpGodw2y23YLr8ndVyaW1jqqEEoi29zojeM72XeoM2G1znhq2j3ZXbbAUj",
  "key26": "5AfZ9sz5jGU4w7tGraVXN7WAsiJ8R4vincyXe4izC7a3nGKr3WJBmhPc1rZHrjLHp5zymBhMtdb67fUt92qg1X26",
  "key27": "5JFGPCEZGeqYZqQxYS6VqN1L5snYuEz8oiWLtsAx8w7cmEoBGPRPPr65yTTeB3RuasEPdQtPbXLSuGykLdzsJZtu",
  "key28": "4FhM1zvo3kmCgREKhZQCMbJpAdYCiYBX24vfCo9sNR6Gd584eq9uq77R1oVeWULNz5oEN3RqkHp9RmpcTreFS55t",
  "key29": "41LDBAx4R4Pi47zTZjKggRReU8h8prjE13AsNRCnBBX3rbPAR1QNWKfid7xkzYNfgUprZ277QvBK8kott9oQtbfU",
  "key30": "5CpFi1BoBjLfEvQQdzQDR6G8puwHzuZnuhCnGnB1U9AekDPXu3HmtRUW1Fxjw4Vhtb3WiYssPZABwc9TN1sEi17Y",
  "key31": "3jyPu1ebTYXmpBvuHJwDTUKUByAzeNGZi1D7qjZMgFJnAWbNQXR8CCip3uZWH38CyKxGwqFTwQLt6NuA8RiXrVxE",
  "key32": "3PQEAyYcHDMaZxyF61yDFoU3Yk44SwRAkJXmFDzMqW1WY7rKSkLS7jseQy2caLTrvdYbMHMLsoDQewzrjuUtWD35",
  "key33": "pku4qup9EwxSNF9RWYivTkQfa9x9CKDezzJ4UNWzKzKEBBB3sZ6JPFomyattSyU3k9f6aBzKBhKsJtFjsDJDKHR",
  "key34": "ioF39TPzceEN1bUnDkiSjdMsLj4moBriE3A7aztHMtiAiznBN9v8RwpPUmGqBwGqAznMMhePyYjbYkGeDwrUQv2"
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
