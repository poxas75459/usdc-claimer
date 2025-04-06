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
    "3txib6Efhwq9r1xTs7PtqV6xSRKUnVsM8dJwvNKdZgyQh55QdmApKVcFmcsJvHJBaWT89Wn7sY7Ruc2k98RUcH8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ioCAo6hKQsAV8XbWmKozjnd8jo2m5cFRgQvdKmdCCEqW2woS96kFRKeSA3EHrE8j5ksMPiiCHREfuPUuWZvrjQd",
  "key1": "RNtQbT42RmRWs2WANC4WMRR2zibsAGPz7gz5VnDjQVYcab9PFYi5GarU1q48xx4njecQhX7SRs99iiUvZnsTicV",
  "key2": "TXukQ4DJNtc5cUQsjeUtdmVpD6r5YyWNX1WMkzwgdm9J3bPx6daKayP7mwSfRvZ11eGjCnmBvhjyiryvSFsvFy5",
  "key3": "5JRAF4YfecAz2p2Bdhzh5TFs9xno4ZvwbtPWtMRGCYo8Eb46fAcdGi44Rkbe4F75wTPvPN45BmdutDoCkxfVgXNk",
  "key4": "2XaA7Wm57UAcJXBvsTCdWA7BWiyg1FTHfYnCS5ndYYRc9gJUDuWR41q16iZyecVJQRUv3zeLfdrf1HSoU7o8HwQm",
  "key5": "PZvxyLFpFxtnm1nLYw1DJ93MxfiRxoekogY3dKjbwNiR8E9h91Qa6KYGcLma6u4Sjk4ar1uwhWh8XxSRQmRrcNT",
  "key6": "4DKa1bnQWNupCs42pVdEBvFdwda3hR4YGJHvhfD4Bv6AChJyFQjuAnypF3cC7NyBWZgA14mqxZD8Mfj7YmMZ6b5z",
  "key7": "63R1WUZ7X9cqhrobqAdrPbLwGWrriRAeAvrhztopJ1mejX9hgLHX9j6nqDHFHsP98m2NLnbUdusNNhGiesgb3rWV",
  "key8": "2nNcL91wy6FNPzPvLv1YmC4cdEgHwzxupG6KcAp9R1oQqeB2q7VYnuL4KRfKqUsmmJTau127hrc6zkCVkMJv9zpi",
  "key9": "3WQnjgFqsSvLCujUND9fe2GgXbhgavWABp34Df3u9gC3CaFqPLLsWv9FQhTmh9ScvQtGRb5Y1Fuz2K4eTYB1cuwZ",
  "key10": "38KBcfkXsmqtUzy22PhwzcrK3TcRBDSjDPcyBYxFBdhCNN17z2SuMHYkLYCm4NZKNesb7HKmzKydEx8DgPFeY5c9",
  "key11": "LHjxym8n7DRgvtxM7qf97dgqZoai5TUWvzc16XP7mdNqgwuJGoicc8Ux6gTSchfLjCDcngm1DkxxYJSJqxv6yuq",
  "key12": "25rbsHoZZuktoYo8kYtdd1mmGRs6TEC3WLvYN6mdRmePXar2dbBseUBZcnyxHzBtCpANmj6FPvWDENKEmXzpPhhU",
  "key13": "4ey4X1s5baxMP6EkZdiAQyLAzbZ4b7q6rLu3u2QZ2RfNFu7KHA4CWZA3L1fFMxfnws6LTqxRaL91RZVuoyBDQNdF",
  "key14": "5eTUJHYV3ivuqexeC9k3QNRtCtmKsGZW6kSrGjki4E4BQxm3g2gh5jJ17wdnWpvyzNYLeRB1xkXEyaW66s9r4PrB",
  "key15": "4Pvcv8LLAjpjXaoHCTtgYodDPWNjM57nxKYArVbMXKP5MuaKMrnwqXP5WqYihT15aaUe8ZhSAfaGRt1xpGbv3buM",
  "key16": "45yjj8NWKCPJivd5uPnDjeRSexRVnwSAVRK2dJTdBmanAhNexmsUK2LEY7aj2xpgLxQbJXhaYqcq314Z1sD6Lt5A",
  "key17": "4b2znNtng6TdTwUvyGutD6otayBEYtkJkB5LE5tBDa9pfktKq8ejt5puBPYXrEGChGaW9u5vYceZisL2MS8vX21q",
  "key18": "5FkqYtfFGcdmQ7QoZW6Ch9MLdTbtoRdjxY9YNsNachqr9HXUipq3Rqd12A7i5k4XMyEy8zRPcR5HJ8LWj1J6p1db",
  "key19": "2Ho8aVuvH79ypWS6UShctNyPZABAe6TdcCXkZJvScEeQEqE6VhXhB8sgUTqNem7DTcdEFxxnvLYYHAWYhSCbimiy",
  "key20": "4RNo92jJoEEjU3qcwipa9TCQXw6bh5XFQ7i5STHBzvgLCwLNFQ2NrxHoMVPmP2bgpuR6mngfWWvftRcVWrsXaKn3",
  "key21": "4cvMJcvcmxXVi2SyYk58nzSraey9cUCW1aJ2VpRyKBdp3pfYPmkwsYDWqFDCBNjN6kwvp2X3fr66TwiVuwSuKfkV",
  "key22": "5ngnrm75y7DEWejk3FeRbDdShEZmy21Ad6bi9GBMcDfn8t7xPBMeuENXpEU6HhsJ2EVB41uxaHhBr7y8pA8d368Z",
  "key23": "CHD3DxkU2MyjB7Wj1wifiGS4GCFfhF8t2fgM1TscyMuEpipf9c4TCtYNHfvrnw3dfhhRVc9CKwHvjqVeybZnvFK",
  "key24": "4UNjzrKcecdbknngrv2GULNJeJ6WdxDJzi7fs3NQuadV3ovJz3iLfRQngt73SvTp3n7ND8yNGhmgSewME9ttWLv4",
  "key25": "2LhxAysXCCAzhYbZKy2Z2R15SrVTP77kBLjH3sSY4ewm9jQe9ZXLtVFq9m9S3sjJFwY6CNXptzsWHDZ8mN12LXiw",
  "key26": "47VTs8GF2fjtArara6pRAri3uJw7zgKA8i4aQqMckBUKmELwCjcNnVMn3tBSnVHPhZr3ZatzKHxCAFYQGPoPX3zY",
  "key27": "397yK38NgPXRNq4A1cWSgQoHqnDZj7CyF4C7BkgyaiUEeAzK1AkMvoRW8GKDcgtJ4UJ9nF6rAiPiz1nu8b7DJ2HM",
  "key28": "2EDxLhCQSM3CDzJEYKYzrSZdmsbikeiZXvcogwbihLa4yNHPvoEugpbs1NhVVcVANBB7iHqvTeoWfQviiu7EvTvq",
  "key29": "EsAsdeR2hA5qokb1YgCntTrN1nxhfLqLyqKZCigeYTt6aL1FiTWxHq7JAuUjMseu635gAVtEhXiAcgHVogvcDRS",
  "key30": "3y9bQZGrFfRbfWzxt2gAoJg9NgY2fFu2GNo7FdbFyJCENb5xfeHCoKuPmyrMJhyn7JiLc88iMg2VjV5Ed7kc98bQ",
  "key31": "W9i3CpguiQtGUDUkG8KQyjYhgAo8bvCWCMnErSNe99evb6dkwuS1rYMoTjQHYYRVSVhQjfZCAJmTAZ2aKTXxcwP",
  "key32": "5MJcvjVh4Lr7vsBCMjaeXDyDauhtYhVYobcpL7XAxdDDHcnNMjjStbos21gWyBE8ttcCKoBFoKsNxMwPgaW2chiH",
  "key33": "3YENeAk9d3vKTDMcF8QD6tQByq473yeHTr4vF4ek89dS4DhXMVehS37quAYG453tAA3rxmZXYQzVnxbrc9YuhSXu",
  "key34": "2jWggaHpsU1yNmnBhxD886fpXvwxg7cL7bdA37hvnPFeEJw5ycWAdNUBhNCFYaZZqCa6J4DVSFsTGkXw8py87J2",
  "key35": "3TbCcgcMFLA6fbrpzVtBsWUaZxFnNYApBmQ8FyLE6LgsRDbqTTSeNNKfDUM9SUaHTVSs3kmtyt8GQgHzwuN4KSqD",
  "key36": "2oMZDB96aXGT28Wj5BKN7JzeYzCiyqZxBYQjoXorRVQm92oGS4njxVgqsEvH1RYqiaxviXuqCrDdGUM51gwEcpT9",
  "key37": "5No9DH28aHN8WD47HxiPDKzTqPrk7mV5uNomExAXkuzXy1xmRYwQeMxKqiXX8YtfmLeR21tjhcg3YBodxR4UbSMr",
  "key38": "4toHkGJQAFrKuBwnLxMH7XUF1tJQ7bzbBiNjj1c5ja2o8N6x9YiopU2LTjsKiemGyyyrm75QmMCnr41E1QcyPr5g",
  "key39": "vF4BL4wevRnfeWzE8WjXVNUTLDW1QvThpWwxKEydbVmzbUALKhfeCtLngd9QfcRKyqyLZemZJffPJwNaBjCynAW",
  "key40": "2CZAzQKTqZcoGfb6hWQHYC67JaNtzLJCdBtySo6rtrmgSAtCQovnLMF7hgUzShkFHSsMBEJm9rvujzbL2JL2c13M",
  "key41": "3PPC8UoBY4Fj9q9hbTvruGo3fQsWDb5KFPU81poYi8dXrPsUfUgsS6o2mttv6Jfr9JJbQGRr5L9ozUYLoh7N8K9T",
  "key42": "2UV9Kw5qk6bWYThYKNjPNyxGaokYz2dppATzkZ3nPRtbChUTyRzqzXHFZAL6UYeQyt9cmcQg66U7gBw3wxnEj96U",
  "key43": "4BXEZSfmfoyXg2SEEKp1EGhXzDh7cUq66bDi3d8d9skaZeKbkiHoCFfiZ4kxtSW2Sex7CL2tnDjzUAfCX9aPjxvt",
  "key44": "5e6xfzcvGq297scjBr4YZTwexuK5LjE7H91sTE58rCYJqYvzLrDQS1D5pMMbdLH59Qn6uBQDvuCWX5seLiaTjrAP",
  "key45": "5kBEjb6Lmj9nXH7RFZ6mLVb8he4Eu8pzXoJ5Yva9fEUo9fYdmCE3H7ohrpfCFcY2e93ZGnVT7VV92RLCJSZ5cHEP",
  "key46": "5x4xyDZDvJKzRsdtR2ivcgGiGLZbE9NEyDByH4WcHCMZxwbUo1i1V31yw7USGTNbDZENyb9B6Q1X6ZykWPao32yU",
  "key47": "3XDJxYtXYMUMxwujDC8c4ZdadHFGFW8JUm88tK4JfwmAyLJCu4TSKfWBAbCLdi3mg6WQzBWVHsd5eatJvxC5HbUf",
  "key48": "2xizsz8ytmJyrdN8sxSZZ1f1zTjS74onJME3imEGsadiJzCYCQBzwU4TStbgYksYxVj3GjyZiKNaMdQmtXQSrfVX"
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
