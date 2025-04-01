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
    "3w1Y4SvLsaw7k7rUecjHnrE6PyZufgtHn19Grsivv3N5ejWTrHBidUQJLfXCdUrrJMBvK8uqu8mGMbu4AcoaBzmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9QuxdhHWjB2LqbgmNKrhwxixukktzVYBfbR7aAxLgB3yvNTxfPZY1cvp917sozjpncwNodY2ReeoUyeLUxMToC",
  "key1": "eJXHAUyJgoWJN1WBpsX5M4Z3pNVJC67EnaFp8Wfn2kiMQwREVKykQ4AmZrdSpUN3w6xBCLuZjL1oyHY6LrcWnHZ",
  "key2": "9PrDGEDW1Lg2QPjcELuR5Rme6WuUxjkRhJkJghhxTbGGbYEe5VoJqvM7tY66h1LdSGu2RrUDtW1B2umngfswURG",
  "key3": "2RJHNfTxTTGZe1oeWgbT2hhKteA87nHx4grgK55Z1eu6sKxsEQaZQ73j2YCXPpBcXchr1Ri6Gwfdw4YBWTNbsxdb",
  "key4": "3MmsPvk9Rbqff5x3uxpow7XNPW83noHgajg1ueMjiYfNSAsFYSX9pc63bwmvf8yvBCEk48ruxzFGpLcmJEwMgSCY",
  "key5": "4m7SsnvYuchYbvBWyHr7Uf9A5h1uwx2bpNjsxtJLhgFdLWDR3AV1yyjzNGhWptvBobBCGBJtPMhfUUy9VVAYPwJP",
  "key6": "4KfQ6qvTS8CcNLgZM9HnWDVGir3iN5YLBHd31GJS1XzERY3oz4y2b9wT7xqTmeCZ6XB1EvKDWacPN7kuGwZ3ubQm",
  "key7": "9FGuRGHr8jCR4h3QqFsMYjDsTi13UEGGRhCj48pa5k5DBkHccPHgMzve32KjWs7qWL7uhYxx63rt2S4m5AXSqyk",
  "key8": "7jRD7hucaNmmZcLDSqmuYnSpyDBXR6gUXhzyqwgu2YbuQvKGv3178gJgEr7YC5hqAAx6mSN6NgooLzRuEb7tue8",
  "key9": "3ZdbzFa4gYPWCMzNMQUVanm3aeCvkkArB49LhW92z1h4iQ7wCLNy8BUuqYLVPHgjBGKnErxnPc1cHGzrfNVB3fBY",
  "key10": "8yDHxiEK4J1tB4Rabx4sVvc4CG4BYLBZHRPg12f5sCmDLeVutmqmvLjEYPssHrFEw9fHwb6gy7BAb5a8njYe9B9",
  "key11": "2AUhUwQiBuK1m1n1qYhakXHHsLfTf4kkefis3MY644sMLVueRzzouTPk82RVXKPC5PkZyt5Ng8eDcvJmYLXG2XRa",
  "key12": "2WgPmHv8bNJw7ZKzUs3cGXguqXeZ9VW5GAeUgeXGWdD96DakyXyCKMmNxfxQkUNeLhWL8SAA49XbLHdrdHYu6VSR",
  "key13": "51a9zBQTy6ZxgFVTvTye53QNZ62nr8uNAhLECedDoWtS4CtTV8tXuaZCWpxUrDEUenCQryDi5bSm1FUHYvdfzG13",
  "key14": "2DbW7dwi7f9KTCEMjbdtKpny7aCX113JfVCq8QcTdZMAo81iy4xkGsanL6xqyNWdNfrscV2jreTL16Kk7DUKCzyC",
  "key15": "VrmmY2p5gLJee98buJXpjszqBY1s7fEpMvnJx8cWKepwsshuADDWdRssuNkFEeor82GGePwM65MUr5hwGayQkje",
  "key16": "KbayB5qjGafBUsKpqUQrdrYwqUDYjoyix1FoWgFgQScRNaB1w14y86wmFSSJGDhR8xZLNuL1wddgc9Q11ERdpSd",
  "key17": "4LyYbBjcZj3F87oXyUcVPxWkuZuJKC3AP1jnkH24D9okDF4dWjVYwY75oLLYfJwHvTvNdLbrAFznCfpXrm5DM59c",
  "key18": "65aBpZgXjxUdBi1cmZ2EhSB8zLK9DBw2niL1ZL7Bx9NNqimAtPHttY4GvRBwrGPrgCN7k21jxPJYPkTQPLX2MRtY",
  "key19": "2Ss8nug3yFY5ubT3YXqhqqkj8XcVgKReLHvwFYq93WGuuqrh6VdH5V4paTx5TFD4JYGdhWLKnWRiGMrLHeTYJjy6",
  "key20": "4MNxjxSUYeaPFRvihuFQEMfTGNTtGDQ18QRWQNrBEMCYVETcsj22B79FripchzmsuAniNBUU7CXPXL2CUa4wVGNx",
  "key21": "7jGUXfe2iE4jWqiFSX1zQZXMhuvNRuKumv8PFvGfoVPUcDoGX7JM7g996jtSX3b5vpqVqNoRz4UujnLScbSkeCL",
  "key22": "2x7M4b5PVMptTDSRhaoEM5F5dw4XhXzkiuV29PL3N2tiGUjpxNCSJrtWACLkN4s6Am1BbWYtM5kvqrHDcpnENsV8",
  "key23": "3FrsZhp1A2f74c1YsXCqahzQpyVYwSSUVPkW6ezZXZDHKVDkqHjcVLmtdByaBPYQ4fwSRZjF4cVvSB7FR3yQauD4",
  "key24": "ADXdu3CDgmEey5mdMME4YuYbgAJoAbCFhXrf76MRex9VW9pe9yyVzk4D8EiDdFn8gECSCpbhWk3gwuMKnMiMi54",
  "key25": "2mAfKxYYFswv8rjHeYbuTyhYDU5NHv1Z8ScvNca1o2nU2KQw4odAZWRNrrdXZ7rigHLLnq1BtZTq1gXFwHkrcfeX",
  "key26": "4MCDWvu87qXrmwEj95mv1NNqExjKUzPt8g1wQw7hCh4W4h8h9u4LikYXbMCgkC3vZHmaziXSs6h6pq2HgscHVtRM",
  "key27": "21k6V1HG9iUkmZFpbmuCASD1doYKt9DiwE3Cm766Nc5JaQBtELWaK4mGRedN2D6mSnNTvasDJK7m8Q6dxFtHVHmu",
  "key28": "2M4Zup8doiTrkqSMduXSBbCdoHxARd2ktBmcjPxmwAfqhX1PumsYwshSaibPd4hGzFz6DKoUmQKb8izktk6PQMLZ",
  "key29": "2LhvNgeBtBLbjGAdQCUzoUbFe6w9joc4NDfFCn6BkhP8uQz3NMiP4nEdVQLvKc4Y8Fd54ejyWW98GauaYQwvmq4M",
  "key30": "2JZ5oxCkpFRcSQuWpn1nyZmecVjdMTxcq32mkTDD3eNDeQT1wTS51XhyCFqf7xWUy37BGhAkTnzYEDTeBuM4wf7b",
  "key31": "5FuFgj9GNvVWsdTdTzYj9XKLXmP5sk2Gb23mQJvc6RLA3Kt9mgVqHmYd9tdvnuHkrNEwrBQ3zeAvMXswtUZXx3DM",
  "key32": "4k6ZRsLbFe9rFgP1ev4wJnpwhaiVZc5W48jyBYvk725AA6shNByYtkbmgfoC3hBuKMdAXHiH3jx5LtabwYezVbqi",
  "key33": "XZmhW4rr7WW83zzXFdXa4rqtuxBp1Myi444gB4Vg4rrnn7VXcSTfSY9NARWaaCUeqoAwbE68j4ZVMeNj84ez42D"
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
