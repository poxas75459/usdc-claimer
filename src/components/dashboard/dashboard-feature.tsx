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
    "4UJbS465QUqvcJmqT2zA1QnBdjTSDXTu2y9bRNvKaqWAs6TPv9FqKG9EDihMN1ivuNuTfhNpHUxLxJ9VRMz3CDBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g643pzdn1DAwy7Jp5S8Nmm2MRtSg954tzrW1QefbGuRCtNu56ooKd33S9FKxocZb95TMkcoUnKoWfGAxuQ3pSQ7",
  "key1": "2jQPBSVGhBdvw3Giwvar7CuAktufaQyPTqvHhrSxQrEi64umHvRaBk4NLEuHZS1SYMzHacKLH5Ugf8MGpRUYHpLa",
  "key2": "3hfmzVdQquAkWJhpU6bqyCWoWrdp8P3XmFqdpJibTPK6tzNJS4CLhjchqBobApdvcrdFPJCMAGTeBBnQDz6iGJmd",
  "key3": "27WXVxPUboom3xjxTRejfkudSTvzKWcN5McSge6vPSgC8Lx3in8wtKyptbmPHzJAikv8dXE1e5jc24NMccn5Ujir",
  "key4": "tSR1rur57b1yiB5Fv39kpPzN1StPe8W5askSFvoLwCppq1r8kj9kcGR6uQYoMHbeiKxBEbUJyy1AH4A5FmESgap",
  "key5": "2pvQimepm2SfrNArpxqfoyoQGt23FmZqBxTnsGDEEi96aUCT2eZNNFRE1eGiJ52iDzTAU1695foimyE8QiM7xjh3",
  "key6": "3LCsA8mDhepWdr9vRwgdwcqoLvbAmuHgPUhULJQkpRudmVJE3epsQDt4QW8pKqi25UPpNB6RUF6xHQQnzu6ktmEq",
  "key7": "4zSVdMTVAJaju4HQzLeDimC2BapLN3HfuBk7F2DrFFw9HN16pb5ogvqa2HNZbEpGtTUyUDgUiNSRaAGfcHqUFecR",
  "key8": "5v2uqtYTSNZY3Xoz38ioBoiqg7pxTEmYdXJ3iATx1o3Hb47DcE1NjdhhqoJECmiRVAhM8ugLRNAaQMeb2RrmL1U4",
  "key9": "5CVV7Y6hD6x1sQPnW2VFsaeMrP8JkynvZFzxu2s3mSwFdC9PcDoJ7eC8UW4QuhRManroUnjYXcBYFiQpBoEWkj89",
  "key10": "4TGoouKdTB2JKnXSJtA8Y6KmBGwu98hcDYtzFQ964QEvEcHcwQQCNX565wgRy7M3ZTVGJnXLEdBPeMbzyLeZs9fM",
  "key11": "2UuCXLqdCXKaK8tgHfooBZSmosnauNPVZNsSPk6BRFnw18x13cbvQtNxGKjFguTimhueHj5QkVrs1Qn9dFDapGnk",
  "key12": "Cof5HLBM8BnW8ivbK8BPZZXAHWqhjkHkrVRS8yi9h65Km8bWgfReo2osMg53HW6iohfgDGhmrTtB2hd85e2K4P5",
  "key13": "5tTDxFeKBeWXVXizymm6bDcvXMRy1HiaW1R6Cc1hbpTnUS9DSgPx49hWKpzZdA7yUPKa2rWKZ7QfCuUXDFboprx7",
  "key14": "5cCovyF9W3Q7DN5D3rnBTg9PT23W1gqeSHp1GDFbgwuHL6kE12CMgc9NwXgKwdatfdNEUaKj1AENbV4Zcf9gMe8Z",
  "key15": "5WbkFqXYpvRsjUm4aRXhHLMukqcAHyU6fkiH3cDT8j7221CftAH4pgqw3oZBdnmLTAxH6q2ReLTB3q3pRrY5vgvX",
  "key16": "52QuDPuu3XsNtfQJaoY9FkTpEoPYP2Do38f4CWRa8v2LHfs1d8k1K2BKCt1h3iZoQ9dfukrDeyMrZvwLKABxFk1w",
  "key17": "4QDNT8dXRJUJdgG8Qzi5zp6ZuGB2yywttmKUPjdofWLTcM2fgWp1u2sBuYyZ4g9Xo9qCEsX2p8pKkqh9xDXYecLZ",
  "key18": "zHir6UgxnPQqCXSNutFR2wAT4q4CZbjSFNaAs5VaujBAoUb8kpBx6VwpgJK9SXYFant9CRjn4s83L2cKvBs4acs",
  "key19": "4sPD6gckNsrvh63u9v8yT7ShSxHvxJazr3bWowGEhA9gPdntQrs77f3o58y8dPbMHhLizCWZXeDd3jssH9mHA2ve",
  "key20": "4DgJxd8vxZV2A1KVLdxt8uEWJk9A6eMArrXg72kNeqKZAwnphGifCPVCLqkEiV2qinVxoW9YyVqKBheEB8rDtmKp",
  "key21": "FCf8sf3RJ1R7tTPXwz22jFzx5VGdpr547V7zBwK3aayQeJkDgCuTsWtUYzZ6wMRjH7Zo1CkaYNDDcrgEjaK4Tow",
  "key22": "ZGAetyVXoEKzA6NAkvRCxvszkv29xAZmcTC9WtBPvRSxnis4gMYC2iCuSVUe3mfD11QjTvZCB9BDWkbHBUWjfM4",
  "key23": "4MXFbUQhXhJZdoLaSwVme3HnyVHiLREJK3p4K1jnvddm2udHUXXvyKDERSfkkKUFaPU4aD5QmiipJRQBRRr1AGvh",
  "key24": "4Sx7TQfj8x15obS8b7pFgRC2N2RZFheQc9SrC3LFR3xeFfXiFLKkWkNQKz7n7rK6gwexBJEVFEbh8cEj6vQaKSpk",
  "key25": "41sbLXp2hER9DzKM3oMcC8Cw6Wf6miG9v4iRUjwCeGjbSTNyuGL98y5KQtNmGg5Rz6jLuRvJc3Hxdse3F4WuNp55",
  "key26": "2B6usLBEXJyS3UZGoZ9UwGoj8Q5hGYPpXG7k2qJ9KHwMhCN1Qfxw59zddXgAnbXaFx93ZXv145ohPcd5VQhwg8Ub",
  "key27": "2PbyzgjAfEXoVK4uMVACYXLmVtkM5JVG1vrkwW8aV876EcWdyeD8QDjx23Cyb7mk6YfkcMTy18MJraE7YYjyZPJ8",
  "key28": "4wxjDpwJ2i3HSnPvBw8DWUAZP6GZQHfV5kpvYumXA8tE4HtKho7EmPXR5u2U7vhTbx32znchJFifMCoWrm1JrKgu",
  "key29": "5K5zhZpKYJcJTgMoVCXg36FZVKcd1jjHz1LmqyvyHksjMk13ue9oohdYmm8RAxnYoa7LbSeE2EV94KpWAYfd1FU3",
  "key30": "2hmkagWt7Lh8nhD7sdsSSJga825zycGwGQk2FkYiP1S7kmd1TebjhiixTvG589WtqAqe1zbk3gUqqeBCguimWuc4",
  "key31": "5yJQ3vZzniSxpffrKJGWNtJfsYTYtovkjfJ5urpMraJDqNYm29WK5pCxMBYcKJmKGCKi6PLUFbdLEYXLGYzi45LG",
  "key32": "4EW8LrALq68BvGETBdDep5YNvKwd828zYLiAb5rT3zRKnvBjhZq3a3UE3TvwdmZA5JJNBpeXcMJ5JP3NmjNK4thR",
  "key33": "2iW67DzDgqaiwQ6nM2aDWbz29S155SojH3rFEECVCmSshrSezKigHfM2nnr4YS5DyPXeMDT3CsqH1fRqoY2Y71tc",
  "key34": "2qdGmWBdy7FBzcVDgymKHTTcf4ruQSDjAwFkvaLMHYA56FAseZoqEMKR6Aa4jk9ZgntJ9PKKTbSGaUReTzfQzLCQ",
  "key35": "4ZZuckZHaJGUHy4rwQipBHFcAuiAQmYJ7DmbTaGs1h28XTGi8SWWkM5VEmhKQYavZBsncaVafqpJarTXsa8cwmNo",
  "key36": "5EXxbtr1jMaw7RpgvGexvKK41fJ6328VQkFc7cZ2BdKS1JvWgLTKYDQ9czq612cBrQARV9eT5DyeYXozGJq4yBGp",
  "key37": "4tvUNPwGuqcSs7AGsS2wxiYHrZyYJGun8bpafWuwF7GjvJ5eaMz6rU8wTGqwihbeqzRLfex91pTZu7zC9fFdgnAD"
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
