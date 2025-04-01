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
    "25hfBMh4xG1heUFUKF8kPJguDyEXNSKGahkovYjHD2awdRBBycE89StFh4hKG9gzci7aGmLgM4UxSNBGYAexNqbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EuFjpW6xY9yW1pe59ZPkq3tCrGkAsDkUZpbxxotbnefHi7moq7wWWbNBKGWhs6wZp7jDApBNrYB2cfKcF59Huqp",
  "key1": "4xGiyscT1VjySQruEGT6uTjXXcxgM7xaw5aM6opFe6j6v4RrqE3edArguzoH4G1Kjmzxn3r8vUE1XKeGqZJBEiTJ",
  "key2": "3Xu9QhEMywzzSUDqrGMGSda3DSeKrkuQrq6GpwQNScNWT4LqpyP11a1rWXQGFJTNr3reQkXg7Peya569dT2XgUy3",
  "key3": "5UZPDTTUe4N9M7pUoafWh9JPg8sw6AzY3CViB4FMKYugmABA7ntscpCcaoe18tjLbSj3FaYt77DK6zA1Swd7RSBn",
  "key4": "55QNrfLm3baexSXW14yPfeEywzfpYCikXS9eVbQcCpDsQfa8Kohhny8PaJ2M9ZCsXxyqAgory64koWpBKyeYuVsX",
  "key5": "jYMiU8Sa3g4e2KvYU6zBaRQSjT1aVpnfZMmDT5fbK7x5AQwkfzYSgGMzXkkM8o7eoJSVpU7NGdAh8cXukBwWBCH",
  "key6": "3YBg1aWzwjq4jj3EP6snXYA3BDmdjEsXs79thkjAriTxjRDU2KCfu5mfcnw89pWegHRknckEAaxBuSrGrYfwKWcy",
  "key7": "S7Rwrk2dCTWqcdFU6FWuCiZ4MyKbwQU3K9UpL9tdoxPZFLyptNSJQasMZc3UNLSZ2YW58Jb5nWQe5arzoNcaKhp",
  "key8": "5QrHCLgxu66bM59oSi98B8Ri5sAhQHD3m4ZAsYGRvtw6AiKkQG3jiuBj6cDyZMzbctD2pvT5FXwcfD5zdyvUqgxp",
  "key9": "3bcmufwvkwUTL6TYZx3u2En6qJUHSKy7rBDs23FmxtcceMxRrYTxZPNSMAZc4mFvQjvSLkb4fHq4QUa6sVyUrGcj",
  "key10": "3TcGkTMicoxECMajRkN8tTzNu56FFCG8bnkisSVyzTcXz5gSvoGgubmZAn9mkNZmsBPCAGKnoGTxzhbDqihUTqjJ",
  "key11": "bGYjbZHgiCSAnL2ozFp4DiTrTEKDjET1u9FH5HCsnZnVUDJgEyfi5CGEQsQy8NvUme7mvChYdYhZZ7LLR8nCGjG",
  "key12": "xz5jaPwGNDYoJNz9jFJL2YmzzebKet18kvgqp2Yi1DUj756jDs7YGUKSg2oh7f1oDXhDgXfMZr7d5ox2baMBic7",
  "key13": "3bTD9yaUnx9SB92ZDCmHkB8wDp6W4XkBejcNTLHX6W5TmjWS1Pc1xmrLVeydbGRFKJ1DHdED1YxrrLV7X4BELe2w",
  "key14": "5rmxYSi9MZQJJY5vuVqf9WtAfEwqrRbipsanP98HRrnqFe8Lv8nkozbW9CugNVQVf3ysmpYsd9Ut3r8MqR4vfWAU",
  "key15": "39a6GKZC5BUpPwZe8dWFKUqHxL2Lue6HeksT46XJippFWnxR1EfmAWQCPktGjRR4SPtavwNH1kE5GswcBoscrMXJ",
  "key16": "3RssqBB6wapAUj9zSQX1aPVR4MBgTZTrk9M558MaUCQ3sZd98857np6x4x3U7w71EgeAXcHQ4KHDX6i63aeXB6zx",
  "key17": "A3hkaacnN8xwKbHN1FQDC2gVUYU5ms4wWJKhDsYejqKZwLkBu8jb81ovFBHHEpzrBE4cZAmii4DHH8brtGfT2KS",
  "key18": "BU3Lc1Q2f9hegB8JRVYso4PXLTdYdvspuNpgb8gN6qPqJDXtnzS8EDvqpvc2pTJXvbR8vTvyPm1GnSyuiME7iAM",
  "key19": "5LaFbQLPRret4qy6fAZzVb6cP2o7qUBPsmcGxw4QvVDVzsSyRzf9i4a9wihMaNTn7eJJnFKBESU13oWbkXtLmyen",
  "key20": "2XCZmcHrd4HHK5bHbK4S31rHFCaWZLYD2g9WTbhuvy3GPo1xKfXx1oZWnpJrEsYAY4rA8EpViurbmp2XAxSfUbam",
  "key21": "21EqparwHiANrpZviCLpoGazNqzXMmu5dXbviyL8WWaVPSUBCMn18Kxkawg8MsHi6wJq57CerRdXaoFGavknQc4q",
  "key22": "54SpnTjz2maJS8vzVV7hprQ8DLvYWgSSiGTe9ohJR3UnjGEhABPTrafZkcNsF7KvwiUvPAdgZr68EkukWB5eN2TC",
  "key23": "491Dt1d4EkQ7H1SAfTfE61QDTXhgYyrNbXrvVcUPmxL6LB9aAKWrQzSyu7nSWi92WuaBucPjbwcJmbu3opb2drUa",
  "key24": "okGFKsH21FDfoALu8WeWLBK21MuePeWzhkGFdwFBjY6cVT2GcQj6VcjzXdUALRVG8fVm6H7GNq4EyL9DmskiCYN",
  "key25": "24Ycw6Cj4XnkwErMMfdgJii2mnpfxmdEU2s4PwnSBkm2bbQSP6KqszMzsEyjKCEaRb8YqSFwZ9KwJv3AF7Vs1sRS",
  "key26": "AcUZMahYE75KxmrnKuCqDdmb8WG593R9WACg6RrDhRuNP95UCTE4LVDhi5FgnXBDr6J1NgScFoosLk73LLUJsaC",
  "key27": "4SGgXDn5r4yPxcsjHBBKcEaLModsN2MvNXfsCkJCpgJ3sm4Ec6xUyU3YhVbViuxQddc5yL9x1wokkwTnYuQ6kwBK",
  "key28": "pcEUGotVMayw22GZ9MRscJR7miGpcRtDJ6Ub7mxWcUpqEzh8qPQMRUzSbJTeEVASsB1g52TwFgGTBfWnE6mrdj9",
  "key29": "4ugxJGkT1FfXPc4tExmhiGukHRSgyH7S8ktqgRj2AZP4TzTr7QgKNCLd86XZdCGETgS3brEgtvLuxCbaSogJdCcx",
  "key30": "28iyrJtYRspequDFKecNLiBHgUdWuCoBV55JDPsiFguTXhiVkUtQTMcMqwnSJQPESKjiRCvBxNZYzPSSZ92A3Uv7",
  "key31": "3MYivZartAmv3gZAGFugD5h4r3LC6yt6SdSXZf7e5HCN8o5JokmFPBXzqAf8ShmFXcczjnha3fv29FtTdHj3Btfd",
  "key32": "5K9AD1g5Bd61T18x7JBD9vWFn9D19cWq7XCEpZkvME91owEudvHmtVM5oQPmSXDHpTko8RVEjpVqq2UavPwXWmuL",
  "key33": "5J9mL3p2sDH8MqkWPMwAG3DLMPPSymVG3HyuxX3Yz68aWn3F3LHKS73b2BsHRuxT3FeRBKgK98Rjkho27GyNnt5Y",
  "key34": "2PiiC99c4pfavhNNZwZJ3aD1dXFuX7vd1KQ8vfTuLYXBqXcRjEM9dC54rNsgxb4RDQYQA3zRL82QcyTd35BdEarT",
  "key35": "5HikLuhB7irEa3DZF9pRS6cb7b8H8NBAQcs3LuwjDnEGSZR9b5HtBPZXjWUM8HhfeEWSz74SLvUV6cBWkNnmL6BK",
  "key36": "2WMa9UiBJ5FAVtZCAtG8YS6sc757TmJJsoDBxvcu34YWg8JWTUr63HbezSzbaZycZcvyRgsXq5LSanFxxfT71VzW",
  "key37": "CAaqAWkyRzhZ6Q42pSfRkLwDTCasfK3udQnaevuohHrSjv6C73opz1HQdWpbo2vc7aEibDbwU5ZfJ1SzTbK7Qja",
  "key38": "7B3BxKmQGHrQxqLALvGKwf3e9iraUWfG3U31uqqX6NZbbYt28WPaiLUQEpYopBydpFfZPLtnjtZUKTwfN5xSBRg",
  "key39": "58GqyXdMHmP6PyYCT6caZZZbNpJyV8ofgiZXgJwy1zFgvagJ1PYjaxSfUx2Xjkf7ZYBqCA7Hm5HMX7Qkdgs9EDG8",
  "key40": "4JFtwpe7bMxmVvifsnu3DtbAHbTiSzZMZiM5cN81tBuMuGUcTokLgsLLJo99W8sVUQsJYCr25EtyaLo3XKpdKKq3",
  "key41": "47KJkXHg6jEFfWDHvZZJ8LQw4tJT99XwYSJVVvokhz1YmBZjHiZrFPc3SbmrV8PUkZcG6nsB3FBSwhBL4yckswf4",
  "key42": "5CjDc9rVccHEJwK9HaiF8t192F7Fz7DVctzrLzLpuYYk68SdduVgHAbZLZM1Q1sGndzwsni9YXUkysEE85tg3zwi",
  "key43": "5TWHT4GEmb42AG91ieR8UhVJQvZLBD2wAGQftdFVwKzEJkdgyxYNMAHMkAXX7BCZNBDnaQ1nEPs18L46E48HgKpn",
  "key44": "WfPGbT1DMAUdjQN8ujL6eS8DrZJQMQs7vCeL14AFrd7kwQW8pngb9ENKYnickJsTSQothhz9BmBjZeJytiLvaE2",
  "key45": "MprEa1K6JHkhsT3L3ryDJuz6i6PAborwCysVx5y5StoDt6X1JzJYZnE8iZc2DJZDEcqNMK24XjMDcZrEQWdfXfH",
  "key46": "pW61VTxy46sjHhTrqMkLNumUZuo5kdPfz5fXxrJbQX4G4MDwh4mYCnGZtnttGQZeUTjyPs93XmfxcGuCVjsNBzx",
  "key47": "4bJiruNzZfkkyAmwwNgSb2baRVnrMRCT7rWVsDWU9wdADLTjhnvdriHsRbBhm3dgZyAyvDdMHjZjoLybQotUe7F8",
  "key48": "3jG4SCZgqEDDvSxVmcGT57uj7yuNTqYTNUnrjrpy6qiLxSZSQhcPApTKSWg4gxMewNgLcXhj2boEWEjY7Zw2XgZK"
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
