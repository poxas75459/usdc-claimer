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
    "4XmKjDEnbrYEg24zFG3UX6ajR4kPrz87ivW78JX6HVFgvBj5Ahomi18BstqAA2TJXkupD8Fq2KeFxDYpLDCwoDNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLQCncZ4AYFbRE7PzfXDTDQCvbwTi5nPfKf9bgwZz7iiwPGMqwDAqHfqVhhW4zhc8hyt6L7J6tPTWGvXAK1DEYL",
  "key1": "3qtiBc2JHX6YXbnxB9dS9dmiz9N4hJazSsvz1GWv6jPdmb454ERnybg5GCqCpzAkUjRAfEmfxz2V26z75WsqD77C",
  "key2": "5sb8KcLLN92szYfZzanEJpG5Pkm1n2RPpSmwBDg8ksXdnShnhVSrSiefMj1w5Hs2aznXagiyjM6V72K1CHP4Q2jx",
  "key3": "3dZvJwraHmZ22RMQDsnpqCAPZzvkc6ciPaZrhm562cyqNBovhMTZ9qV5NkG6BubG4C37NwkZ3dFQLLaQ38Fs4WVc",
  "key4": "48noJSkh7mBwHxBi5A5CFGFwFJzbLJFBpaaqovwedHH85do4oQmYxEfGWjqBmWaynmEfd3GLn1xeipze1sv7zXsN",
  "key5": "o2GVwwegUBiuWVUt7pJV73gaNQ2h7DhTAr9GvJcuvFtWb5JDJsRaZbpHjBYRUpudcxqc3XyxyH2Cm47nNhC7YJ7",
  "key6": "3ZfdYGKRxmE84W9PciWz3aTYyoAx433EKxNPnw6okzWanWhtwZHe7NMjohHnxtjo8WmYwmuNWzAiZm5kMRmHgFLT",
  "key7": "3snfQ7MPTzC4wXmgY2b2fseCMF5gZQrLA4jWqtm7oinHuPuG53poRt8eKrmzKzhkM7nkcNKRmk7ZHnm9NaEg3aCW",
  "key8": "5e4LnuuBUTAo8xzUcztMXWNy7wXJviDamGHcVaRzAjUWPYqn2XQsUyxTpezoEkdUyyW3Szhr5xNTFY5a325oTqiU",
  "key9": "25adK7r2utE9qKJhH4HuVEzM8dQAWPJuGXyHq4NrVhvCtXfSyfhpwgPQug6uBTxRnH3736CQrcWzTLPdHZbTDJUo",
  "key10": "2wjbc9cVjjHkHLKMUihAN3q3mN3U4C7LBBMLiGwg8bEgzADqqwStUq6XSBpPwZAFbEJoG5ibxcj6dRNCZXaP3qgX",
  "key11": "2gknbyheQwNsajGmGrF6TyiECENowAdvwcPJAjPyqdLayTw8bCBTY2UZ62YjdRWB6xdL3aTQgXsoaXnPvueEa7ND",
  "key12": "2445zUfGtLfe3FYyLHUCE35MXX2nx9y1nSSMujPdq3Ro9rekb4YWeDaZywddMbeycGVXWvMUReLPQTz5Ps2or983",
  "key13": "AT6MptCB466ZpaaXoGLXkQhfqkt5eyr1RvYYDsfQ3FodGbG8VkJ12B1JipZhvmvLEofFhLbkbMApgWrQKgndKGx",
  "key14": "55s8XmBuSah7pT2X8VxVdTX33FF3j7534GijnYiCXmqjFFQ6reTC5qeZjB8TWrA3PqeWqs7XVU2361uzMrp1CVWf",
  "key15": "2a9cgpUnpjESqHpj9KFxsihicE8Pujx2iPeGm5hsYU1XHo3znS1vfN4okhsb564yD9tP5rybGVqnMcH7kHLwCUzH",
  "key16": "3aj8decGr5L6KTnUk5GtK2QyuiQDj42XfxpGxKsBLL5HvbVGgnc9pDn6Y6NwvMDz4fsfBJ6jEzrzwBWZ7AjQdA5Z",
  "key17": "5TBy3sroXF6u8VmUEmTEA8LBFDMpt62eQqf2cuxxWv1Cjmxgt9aq2WNrpLXwg5Qb4LcV5RKpbbnWt6MdQRT8tB84",
  "key18": "5ZSrM7s35HfD2P1Z9VCCrqUD4PHtBwKTpKUxArNC55PrTVJxTYq9WvuinCzrvaSZ6drvK1LtfVhBMcfQtCbYyuuc",
  "key19": "4fW2zAkP7wonUYwDBm3PBpk9t36fJkxLyxh51YKojJ6g6HQxGf8JYkmsuivZ9pgKo1Zib57cgfPQSn595oPaMeXN",
  "key20": "2Jx46DXiRavWqCWFp1habt6MymS6rTrNFWex12n7Tk4YTWzpV5k9RFNM8A1JD8piZVd4MpgMnSHJNAo568gVXAAJ",
  "key21": "2t57uczRPYY41rjVzxBD1FKCM4EctsSJqHUWNPJjawDXQhK5NAK8H1ZjWNxCS7n9jbjAcA46cseQsjNynjHiXyX7",
  "key22": "xEEthBaDRU2DFSBdePTksDfM2kiNAeD5DqvooN8PCEg6ZwVcN5wKcV7ZUzBi3HsjBRvePzjYxiYhcm5dKukSg5H",
  "key23": "4GU7wao5BF5gwLSPaL747V2aQNXjXnCuJp3UT7VugVtnbnmBeqQ2r5KYNQsbWvxoEGAvkBw3ddVkipfbGjo1UYCX",
  "key24": "2Q7vX6NvzCwt99wJpfnM9ys8REWxE6AEEe5Uef7Dss5UVKrYJSiKjqbCre8qL9Jjitu2GHrKDAUBFKBUAr1ygNq6",
  "key25": "43xG226YEC1CGna1sVwjRg7JpoFCmdMU9HCTtbXRxTPnRXQJFUNLRkfdWJWZjUqSHrVycFH5mfQQjwsSFSFSWGBn",
  "key26": "suRRUXU5rcBXmi1efp3k5xgc7rcFKP5zq3upY6JqCZKNwBQqnSRWpCTaAXYyqcQ9zL47TaBwq6iJxhKPhrhpdyM",
  "key27": "5kNdGbzAaSmweb1SJnYo87pjFkmTcVPC4gyrYgM2u3bJ6KL6FsjcvaFb2ZC6p1dp1bjYijgks8jnwaqekejBALeP",
  "key28": "uFo4Wco59NfmXwDn53kctum4AHeShUTyjcgnPnXCRmuR8AptA9R5r2w2afwK7xs8wDujkNjT6TQhca3v1Dc3n4y",
  "key29": "2RiGURQSpW9tXGqMDzBGUWP3SerEf1JUE1YKSoL9HkFx6BakUhyZKAk71QZfb9tSb8kf3uwQ2vWBqAXGFnsMHPmN",
  "key30": "5YLkmtKhxAJKFVjp2iNoZaiaMXJdnSBJ66UVN1BnrQvgzAeS9Jme3Q2vSVf17p22maagce4roqGt7j13PCr6eiV3",
  "key31": "jD2pysysYCsXjAJC2mx1J4p6kpFzaYq6R7HtmTGTyzWTBaeFpt764dWxVo6D3CAPXPAsw1N1vM8nwofYWbCCmxr",
  "key32": "3vWoecTJcxJJQSKmoqBFLBh8cFguAM19iV7CvSZire7gJnkxpLwjmN6g8Z7LkQFaKDVBZcJHPpwLPzqaeKKuXZbp",
  "key33": "5hNdDkfsy7excv2y9pLSBCzGUJk8VVWCEWYSUY6BbGYAdamDx7ahpVwEnXdAwkvuXoskpvUQoKAtmHGUypnK4T7B",
  "key34": "2q5hpgNojtdDx7a3F6ZjMqT1Jf6bif4MPxhksSbHggb5T5SRuseodUZSKEQptQ6cFK4LNgWiBkZxeE68rKAV1p8R",
  "key35": "3214YrXSYtqCkY9TLdr5nfbEwbCQYvsMho1RMSTf42ERLvFk6TrqBqAn3s3ZzR54E2Ydc8JnSFqdtVitKsC4uBLs"
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
