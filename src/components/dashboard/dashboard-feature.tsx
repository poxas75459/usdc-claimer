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
    "3wbZUhx2DGpECPnhM5cwtGhQv2DHhJB8TdbakVCGmM3NY618EmWA8kYwpsXMp7EfFHLK9vd2amyUKQxUaKPUkz84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Z9vtSQD4osmT4VKxMuaKtmJZbWayRX8ZY8onpQ9g7cYvTZdDhc7x2aVgjwrsjyyNQXhSPfkrw4g9QBvZY8hxxg",
  "key1": "2PMaC38nV37UPPXVLSGHPsRj4dv8VJop9KPF1txAt59EdMrSXVcJABXLY1hyRN4veZewc2YegtXK7RsbpSJWvskF",
  "key2": "58XsrgzKr1KxC3U23yPW5LCMfCtkpK5ZB5i83Xv23j3d35XhLGEtuxkMvfFZsuqmYqzuzkBw3ti2rHiuCa1txhAH",
  "key3": "37GQCKda9V6TQxHBzxV6QDKqTwC9s4W8JrBLqscXwSDLApZENx38Put3n5tEaobiAhr6o6Rhcsdv1NKLWPuDg7PR",
  "key4": "2A3GURusXrKvCaUP3bFPmkH8UWh2CcYeuDfQKz433DQxYJ3r6hMrcfckJryNfoBenjdnzskzC6CH3pGqq8r8zKtg",
  "key5": "3aRZZHAgBZNf97u4KkjMHTyE7uESv4ATRwm6TfwoKye8SMKs38mabd2nhfjVGHkhnT5d8dgT8xB1aCRhL4S6NqRo",
  "key6": "2AVxJTo3pGm2uXWpNMsD49Z93ugpUnnFvHjp6LYZEXFTL3kBCgVEnHJimWd7X6EefPa75QXtYboUKJy6pazVE4Fz",
  "key7": "3JntwoPP92ECTqkCd1NLuRwg7vyyLnPzKXdr8s6kJBungWJLs8ggRNGQjJYek4BY4RuXzCKtdyNUCxHkYrLQxhCq",
  "key8": "7MiNEmzyTYXSdVnYXniFDFxFe1YHsVAeZpqd9q7iQJ3hdoTuRd2cjKZppn23KWFHUSN2XKVsRneuFSdoTdhXS9U",
  "key9": "4W35D1SEdhHCAF3Cdxn9L6vbaFVLATWuAxKhT66fxtTe7aVezEjivVjRM3PkvgGtkT6aVzS6sj6DisYshhDctQKm",
  "key10": "ANBiVkbA9M6fDaSTYfCmgeJbV2RJzGHe1zYnkX7oGJByVDSZQaAW7pmA1TE7PuBLVHBeNbTTXETMcxNra92FkkU",
  "key11": "4QCK8bsXckrPUHcnwAYHSAv36nWDQ6SLx8dyp7ucPqhcAXvcGriLrAgTAhVBuonxVm8bwzrLfL8z75fQKJtUt9un",
  "key12": "2MHBRFLac54rxGuonFY4K6ZEcn9DgjJJubyTMW3hvpS9iRC5Z328Z8Mg822JahKAD5s9y3vZhnqY77M54hyCZqpp",
  "key13": "PS2JSEr2DXcetfmPhFbfgVBzkPxagDAm7wZmAhLraBsngNRHjpVU4dAFrT5nooP5D66N4N6CEWqYWVe64BkSYfd",
  "key14": "3hmPJdmzm6szMtGJwjBBBMY2sC3DkLoY4afw3DNmckkciBujdC69Yi3FZo4MbedPdnZdn2aUairYyZkUgifvNA5h",
  "key15": "35ALL2HaTHpaaf6S6CBJu9312KtxNM1uvmoNLv9q5V3L5bFSdaUDSfTn1YJ3qcVcuWeQWqp2sW91zwopJFxYVGHd",
  "key16": "3c87cjG1bRBBcdi1mGzAnadrWVigu8qRvo5nqeRNZsYgVQWJeZMdb52oABo9k8554tgsGmNZFA5QGWh18MMZwDdW",
  "key17": "4C2WsHKEBTZmmqKmTaDhMtDySuLFygj9cSfDfSYPbiJ9XqCy9wfC4jmcs6FHVcVsSNY2ivtaUocDcv6DeEzPJXMp",
  "key18": "X4fCkHoz7b9vAHRuoRMzUjvYGkyExcq221ApZeJXfKbqu7xyTAG2gq5sAQViUSNEneuk7UobReu2x1WL6czD4Nb",
  "key19": "dwwYDRVuisTBQcoUt2eC7CmiPcmLLiFswjmF4YjishdS3epkPczuRhvPzDdrvBRthQ8vzEGmFTW1zkZLYeCayZh",
  "key20": "2XNjyQiAizPQGbdouz9tHqsZoNHn8hqmfCopdSajcaq3so2GAFK7S1HtDq2LTuvJKzTrFEEDhgEXvLYf8LKaR87c",
  "key21": "3N6P66WKoLPPdUVq3mRb43gfNWju4Sm5s3dYyZEVp1wgwgiU9dce7vJzzaY7ouRpTync9gDUXTU5v8SpAdehBTA7",
  "key22": "63TezU31m5WsaV6T9fsp7iuui2AkF4x6fiXDzcF68ghMKFm1uYoFrCbgSYr8zBdPabKPnEowFUDtJ8nRNpuwFgtC",
  "key23": "4JmmcgHjJVby3kBYxwc7JeXWXC7DLgWuYQcnt95DJGiSkJM7UiTwC8yqcazffUPv1Vz6UsJ4BVx4LNfyQ232Wo51",
  "key24": "87DjZ4dinqiENAnNPTd8LmbEyjNtFAofvayrXc1eCKyrAWqMsjq8tTsXjMxFwXEoib43tev2b4Y1kYXNziE6gVr",
  "key25": "yFVHJupSanmXyUKxvpYBWGRsRGa3AokmwwiCb5KFq143J6JghViUd6XC1fZTp89GWNRi7a11a7jJGsLBd42ZQH5",
  "key26": "2tT4bRmqfp5GEXgG6BQPJvJXSd4C5CUYRpW1aMxHByxhW5UseCGzKfV5nrmApyqHvfS5tgVrKynaNxdRcusZ5xqK",
  "key27": "5zGL3aS2Z57UxdpYzKHVy8zvjLirx8wgtLV8EMX7aUit8R6n92hED415zwW6SMSPn58egeeUs7qYpAUwjqE74VXi",
  "key28": "4NT7aXHYYAVtBbeXRJSBxYSjGbQayP6bLEhgMdgYrepHKAht5yQ6UKdBPSXcputctCX3w7AnZBK7W6dekg4LqheR",
  "key29": "vyYWyzkfSeFCsvF6Xwq2Emyj4tqyojxXcr5ETJVYdnNBoSbfPQ5fh5AeueCp2y2czkz8CSUVKAEhpsSFGL5Rrzo",
  "key30": "jgDWXgR3xBzQLEFxQD8VoYnorTZ2JquCPUqs1wENisiCxpXrp6roNvycsFEFPRiBy2g9pMaGSjMJSEbnzoRirJp",
  "key31": "3P8YWV7tYhb8LG35x6B7mBz3he6UkXD7Eqm8mBTMTHYbhwg6r5ZUhtVFwFUTjpSeWPF4B77CgPfjHwjt3AVUHVX4",
  "key32": "4D2uojVAJ54kUs1R2UJThngmaUntSqSPVuwTJsvd3YrGr3pAZH9sGioF1w2EmqjrTiQLhxhz9PpprW1UftWo5Kcp",
  "key33": "5Tm2DdNswiZ5sruGfu84FeSaYh7DeeserZwUfmMAH8y2UpgeAeFSwpYzj6Tn2VxkykR6WsycmaZJmCXMKiFeYfZ6",
  "key34": "4Q57YcnhwHvH21Vw9iiTJBjSmzSxchHEAJTJPJSk4tZCZA4Y2EfNA4hrpp33eiQ144eXBRbtAzcDEmJ145cFqrmS"
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
