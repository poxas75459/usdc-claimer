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
    "XVpbnx3YA4RqzDSajKsFpvmBjm4jpTwAAtDjM5RFFoJtUGwPzzokCpsS938UwmuwDtCpLefUZgA2mWJtYs3m8i5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCC1Kd9rhm3bewEVMxU7NUHe9vEWVYZ1xWWzXvssvZYKq9u5cd67Qv2D3YfEUxAM9uFpsSNx3P7DR1hggg34SPP",
  "key1": "KH6gDtT5VHP5qJVFTPLa1FjbEj9WbRfp1ziDZhh1Ea4Znnsapb4dSTnkN1KS9scHRf3sLN95AgSyKkmnTWtzyoF",
  "key2": "5DH1brTjorikzPyfJWUvCK2gd1dyojQqxvAnZdbHdJnaeYL4m2mLvZceT4X3vwbceJMmfGzYhpW3VeUv8A9nkcXP",
  "key3": "3URxBegD4AhkrVqB3SxUyhvE9pEhQSbie44qEcCdVCEv4ed1y1FBPrnKNYrGBbaok9GWniy77AGoCWrKmwZSPp52",
  "key4": "P6i4i8hG1ShyWiaFz2qaaebJBdbai8XUuKCt156TC5MwiRZv19x4oCeVGfrEfmdMr58S8e86xSjzAGyPiE2SQ9Y",
  "key5": "AQ681rZXFbMhY18G28cYZNdMvXW7qka8gdYHSC6qrrU1XdfDbtMQLFgTUvkDYTyWTEHcwsLaynkSKaMXXvawey1",
  "key6": "PzczM7qDTxAeuMyBDB9TuWme8pTZYaa3CKbEc2z9hhf3G7ouQx8pwx6BajXuLWXHuRmqefmhx8fkoAdhR5Bo96J",
  "key7": "MwHxZ8A6ssyMeXxKtF7K9crJ7ZdAqC4HuLZgh2LSeKbQmATZAJJJpNcx9DkN4kjdLj8w4EKypzCURgiooEuhx82",
  "key8": "3pb9JGD4Pn7nLK7RvGaRY1cDBENyHLZ7a86CvKrqtMJbftwVQW4Ys7M1JSDQ8LTR5GRMJbx4GxHwLFkXP9nsv56U",
  "key9": "UHN18TrGkARn7LngmSeWhyJ5yPzE3JAGrfHE9NkqZ7rkSRM7B1VpZVxpyMBhRfojMDUzhT2twUM4n5eXT8cYSB8",
  "key10": "4aMpA6A6EMBbdaaa9zfKMyCEUGPnMEE1BRexpGz8Uj6WEnpudHAtRWz8jejCpivJKN4QX443okrLkiQ1dxTnKp7H",
  "key11": "esMrRj7ZzrakLbDJoaRMaxXBAT8xGHLxFt8kWVByfnsMT8E5RHE9XawRJJoeqVEC9nFscFX4xnu4HksN94Poy2v",
  "key12": "5uDVkU3MzWJNnQC7w5yGzpnGV6TkSp7mTjjyVEmbxvmWqGid8AFgDJJn2nM6CkHnFCdL2PPNKPQdyWweXmvTSVXX",
  "key13": "3tbQRJSQotBRhscigUjPAKaNt63Qn5RsQjxKZFp6jY2UsDZWPJSmYEMy8yhaU3RVSz97keMQAhQww581or4rEith",
  "key14": "2eoNVMR79Xw48oEgwdPeFJgdqC8Y5WoSt7Ssg4YXT3yaKpP3P6kpLXqjCjDZVdrYmoVaNXmw45LWCwA4AUoqQtDZ",
  "key15": "2hpazDNxJbA4S35aZa2mKsfAYgymkd5GNf7fPxb3raWCskBQToBrREz2jXqXQ3eqUzpjaR5TpKTYDypj8UyNU274",
  "key16": "5BFEhPVbg9WvGHYAas7dm6QXiD5sZ6YWrgtQ2Q73djoQiyRrTwLnSa5Bxm7ttKFutMCMMYeC96giLTkqspwaehYM",
  "key17": "34qRpeWkxHBG9768V9JHBVMB8XLmhMCG1g6CMmx78tbCaqUKkwVVSyWphxupqmfbNFj7zCYHZ7ghxhc6ZEGRyWzS",
  "key18": "5zWkSEbdv8fKMYM3Xx3w3VwidYiYSTXq5qeSSrJHm5AKDUnQ2V9ccwtF4PoBeTgtQos666JZG78FouyuJG7HuF3H",
  "key19": "5uP1XTwBwaf9ybjs2UhHLLTZSabGLX279Ms2aAaK9ZPiZPgyKi19SfSLKLMPazAuqVr3VCDCqKNVU5Xbfwt6ANva",
  "key20": "9Ss6mfsh1eaL9DVPjeaRp5i9tde1LYcoJ7SGQXY1RNviLdeLXgwsh3r72gxUUSAYccc2ehKbbg6ESGCThgTzj2Q",
  "key21": "4RmKPzyvYx6xBa156oEtMwDHhJPXVVP39KMaB6VaYj1EjAkTKpT7nvoffRPj6ne14bzFDfTYiPHGqm7UpqyrSaDF",
  "key22": "5TqMYnbpf7NyrE1FgxRb9WLi4Y7z7koZkDqkrRzac2aVsxbH8gykgdG3rsZEtZy5txGbvNvyA4B2uLhpFRR4Ng2m",
  "key23": "X6kKTK5PMNSCCECTbhpGFuneHLje44ju79p1QoCz4UWwHKnk3zC6DPJ6WU8fbFLdyuadUj2nJnanaMT1nq3E4En",
  "key24": "2kyief5XMyjyijMqUY2cpbopQbx9GjnQ2dQZipc5m3HFYEGyNEPFD851Rwp813YAN1fYstziThexoeYSM7fsHMyG",
  "key25": "2iSKyd7CUkyordP5xrwf2EmCZXs882HUCyw6tfuSMeCcpW2YWLPmFMDdzSGVaLuWizqmL2YREMfFuejWtFTFpw76",
  "key26": "5ctVcgwWyQViQV3RJHXZCxYrXLi7RJNgzpAPefDy8fzXTKhpSJdw6ePoKMpVUefZdhfxo6NGtf6hXDQfTjhh3SmV",
  "key27": "3QiYuvV6FJoicaNHVf59UxUZewTB5DBwzd4xLRJgp1ahBXooEUbhDXRCNDVpuJf5bj8Aqf294f5m7qxYLmqQGqRr",
  "key28": "2TrToeKEk7w8ThEV2LkvameAMcdGKtMgVG93hmyXWSxs9k3PmPvUmM1qjMjEJNP29vD9MMg2YhfpeNwojxSMaEYV",
  "key29": "26tJCn5cSNHP2hTQxyJ1mQCMecz6F4V8dc5VV9BnwfU9zWgJ8MX8WQuS6djXJPrAdfrbMc7j2zystLcVVhzqbTw2",
  "key30": "3rcsoyQUVrqiPJiYi9hF3Ksptu3V5y3kmTcZxu4bvvekz5xJ1J6ztB7Ly9haavpgjdrGzfCf92f5yBu5K4DdUTzk",
  "key31": "2uEdQExtuDx9fMCFgPCqpyLAErV7obXXdoiwQfxtV6j9r1rPntFoZVZw5k1EwxcBr6qUYwKuiFTgawrGLNpdcSM7",
  "key32": "HfbWGDEmUBo8vV3vhKqMVjQwdDKQkwU4uVaFGyu3X97mVLFtmSpPKHWBTSqe6ML58CstnwA8FuYp7yJVNVTWSfP",
  "key33": "3WjGRdtAh61ps9kfKw9HgywYuCtiJ3pYta1WQL7bontirQcWJnwiABjCHSq5HfUQaSMuAAAQ2CRVqyG7qgfNRUYp",
  "key34": "57vxnoTbZUtr1VWNWEEnQ3oLFo4U7fk9b6oHq16Qzgt4Vwn2Yc1WLaeR9wE7nudUsttGg1nysRdK1DLLcbSzheS1",
  "key35": "5EH3maLWekcMKoAHWNfgxSSTqqaTyx1UMcMpjyKsMnjVTvojdZ59sJDPaQGY1VjK1fBcQNvgMJDaju6XMD3VUjHM",
  "key36": "3juvzvPGxvL7J34jWnZPCdeK7gspJTcXyCnCvvUV3xbiFNR9KebBXveuMdMvakybsLuNLtYMeSB9TEzRp1bMRTYK",
  "key37": "4KBrD2ft3mST1JXo5dk5wrMgEwtkhR8zQYxoi4vT2nCpXRszomSFEZCCpcEaV3LZzguM13nFg8ib7E9RK7eCM7Tp"
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
