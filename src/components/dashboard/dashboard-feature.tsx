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
    "42jpsNUZQbeaVmZCspezajG8jad8ENLNS2oZrb6r5Fq7UAoX7fF1MAw1Yz6ZQskTBzx5FTXQ51VwEGqGkkpYobaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zB4bUAakzsBiTMsgrEUitDfXHnXjtow3iHqK6q8h6FQfubWCrhAbEjdLCmY7D1dEGDRuFvpH1rAsC3jvPLi9eW1",
  "key1": "4syhLrTApHoDjtfhTXpRbzCbknRP7mj3xG8cauX9iTWnVSxazwMiCjpKuJpi9nrFhzFLPaXuMmQGChHg4xMomrhy",
  "key2": "3gRQ1EwKWVK5TXm4FDRHs9WHhK7pqbzaT2tDA218DfiTP2USHx8YM5oUGbNPH3dFnYbSHE8vMGDUMmcRLgbvagN1",
  "key3": "4c84Jb6y2RpLFgAnkAPPjPxdLZzHuzaxsyj9Ei1ZfMwLoseTJeb1k46fntgykhAiXdH7HpzKKPcmco68vwJxQ5hv",
  "key4": "4HGY1wpT6kMNFCFRrqbw4ypKv2MWeWoT4MFUSxxCXAZ5wD5gQanL79qeJRtKZjBrvzJhGNNJM1Lh5MZ7EGwByZ7P",
  "key5": "4jFyXEuumaLc9Ystbj31tVBvya9orVgfb2e7uznXjHFPBRexGwYiv9cA6M3Wh4GcnnxgLakwWp5c5NrLofPnPZYe",
  "key6": "3UaduhgSeezdHxPDJ6rL1LzCTCpskb79hbnXuD8w319nztUwJ4nuxYjsKTJhjpkaaDbFQpD7gAugaxfeHaBPfwSw",
  "key7": "4vpcA7cJbp3T8GnXPj2qzgxDvxayVvTjaPV1LEN99BdXLvdeit45QXBKVSCeHqDAtfXjJHu8bSFW2F5NTLXYvUvx",
  "key8": "22ikqoVzwvTLSiCwy3XUyRYfn19dGmxCucEjq8cx9EG3akUfDzYHZJvqgkBQ8AsBPjeRLiN7NhvwVDa4gSTAZBix",
  "key9": "5h4gzuBiHnk3Lqgz8PkPzXE96Acg2jAMvHagKhJmZm5NytuTgGBJbgPBNsLmaeydGRxy6joByH2n3GwVX5juuiYj",
  "key10": "5HChSNsbgxH87wRFxGzATahdG2cDwWKdQsY3ncouku6RTNt4PgPs3kuT8CKKQiTtCb21GSadmK9YrqFnHfEvS35k",
  "key11": "4GpNpRRktigTwbrC5KNqbcgfavVGcRjcXVHZeCuRufyqgVbhBMQVA31C4YNHyCcESa3s4ktY1jH834GRdUmsNwF1",
  "key12": "5tdeZiPtAsuPLrjKDYPiCtPm3SXhbUXg3nXidz6nGMvLHCgZSh7ZNkTNoTTSvDhZpWf4hyhYXxJSv7ntsDenPzQF",
  "key13": "5eNkd3JrrxaS78MjaUhKDPWdtFq43oRCCo3NyKRn8nqduJVHLoVZq4AYpXFxB62v8oWSjP6B5YxhyfwYmQy9bWK1",
  "key14": "wiTPtzb54iYwTCYBDQLWVt7WqPxHb7LMagb7SPAzHDdwBzP9C4HqCbExWAou8f8Ac67hkrA6Qcqpj1sBRffCQzh",
  "key15": "4BzDxLaeNhr59KCHgXpMJu3xue9WKwMwoBK1nyZVCK49nDfrw4UzPfbj9G9Ga1MfbeEGN6CycZtjH4DdEzpmuNHC",
  "key16": "3kdd7hqxAPmGcWisWDFZNLJzcwSKviNh9g8LxsgdyrqGsJun8JxtBWsv4SQTZ1bZ8JgRnigBPKNnMSwqFgK8phm6",
  "key17": "3c5yx9BwX5KmnX6phRZEjHRE9JzE1bnkTFB17jGMz5B7DUJuSFc8tZMweGwgwii7YMfUap4DphcL2HdwkrRPKf6d",
  "key18": "wZXANRcH2fJtfRTngBmQj2mg2R88Xx536Lx34azC2ZFnTPjVpUZof1jsGVPjfucZmdbUGV9VphjLN5ZdfpTurMJ",
  "key19": "4TWYL8ofMDWpY4PCyVvKygvfBFzegjnThWaTXtqe7KuVMDViJTJ4ofAuD6a1SAfuSZBCqUpjhq8JXK8JvJnotnnk",
  "key20": "23jS1WMhAaAp9LwaLCj6TZqgfuyePT4YbaAF5g6vZa27erXiETYXfD53DzL4xQ2T1gwP8NfVzGXikPtCw7mFsFH5",
  "key21": "2t1m2Le6EwgJ9aPgLbbZVoNaC8rpHS5ds8CMV8xewbkHYW7vDu5m8sQSZMRebUjghKo1HAPA7bgHx2ZgAP5PoCCM",
  "key22": "4jJipT6bGo4Mh646tc7Tbd1R7cCx2wE2xTsj1k2cTepjRgCKtNhsTDTsEb9d2ECmyUQQuv3QBymRoe6dWDekr6iN",
  "key23": "5nr1puFd9G2X1sDG1ysJ2krB4HFmDTVmV5ZNgstD6L6hAqP7wG13VAcqrkktjkGYntj5XA4EZjgLCmW2HdxkWdb1",
  "key24": "Fwh2YxtrAVnHEBG9Wfz3Ds9nKDiGGXrzrVUEb5dYDhj1UcHaMbsnch1dasCgYpXxtxBMAXbRgUHNQxrLfgBPBYg",
  "key25": "4derDL3kx4EGTAM6QexJdGDrfcdFxzJ3188F5VScqL4DevonNUMfHSUqt97eTT9QmDprpBPdAcLyk8XCj747ZNvP",
  "key26": "4mwskNvZVu7QWgtuTxJY14kKatVLWMYmv5gbRaDinzBr8cjKbxBDute2Mt9WA3Ra6FcqY2oWixGvgon4gvrJbkXX",
  "key27": "2GtmMjMvkawYxr6F85XwAVfu4BiKA1MJp8ZXLVVxkhPXMcfqdXCFixeFT1NUfgXNG1Jj7asKA8ihxso2xiEn6YMP",
  "key28": "3uZiLYgtL8dA5RSQUsJWYDZYuBS4MygQojNcr9A7gXZSn3Hji9tE7pCb3DU4C4tgUzsGeDXvBdSKys9JgMQgg4az",
  "key29": "23jSYe9zY7ZcPHjfQyfQB7TBKdVyLJ4oAAGg2Qit8zS6Jy4MDm7Lcxytb4yRGgHT8o3fyTWZr4MJTpTFMJe9ouwi",
  "key30": "2Q6tZPp8nFpoNVLgpGaHEb4BvrEtsxgnTKAHyWoqJK5aEmMUex7N8z91koXJurz6L7kYEpJjYJH974zMGGKCFiQV",
  "key31": "3ggprvLMwngB8wgFsLP3CFYpE23iM4HA9szLaGMBfvQZ1gPRHs9oVzk6BJBHqeyPpTYp9zf6KRzg8XMFC3PQtooE",
  "key32": "5KrWTLEGyuivjU7ZS4spEuPQxgMAPvSKzuq98fMD1dcQxNcAKbaqqTBVH4AUQuqmzfoY69NtoMfUMjHCVZM9mJ6w",
  "key33": "2j1iySW983PH8CbxenPg8io4tu8nCBJqeCM8zcjV4scBzLKsKfrrXjV3KrtzKSYGDmMmMes2QQadefA3nswtiebY",
  "key34": "3hyYcHiVMe4hpEkUmmkkD8AyAnbHSKSf6NLdjQAmZoCGmcdMLX1o2aKyXxofkbqmB75sxUhtseaN2zEGRh4evSF1",
  "key35": "2sHPaECW7QgMHCooi1JVBCDw3bSj9FtdB5UMfeus3MCgt1aJHJyw6dU4Lk21jAueqoC2SMNBjGthPtCz3RSnHmN",
  "key36": "1Nvniq4ZmfuvG9QLvnFWpJyrEu4uhF1Vj9kCcXRWRCcfaJyTU2bLSTuog2nufpfpi3GUG5vqEpcRrxMMCb42LRB",
  "key37": "56kfR61CrGocc16gwPcHrksTxoTu2N5BNNBosvR3TcD6mkNKG6CETD7fL1bnjQ3dWgnrxGdvaCm4v2vwYnCoqP9j",
  "key38": "42ULzjg1BBLrPL5Dr8aLit81kEp7ZH2QAzz6PYXtiRzmMgru3aabrQfMBMmkvgYWqNpWNVyteqYMWrVyJibxpo9J",
  "key39": "3KNqTpGy6SRK6MbMQefJ8Sv4KwSa4A2MAFPRpz7zBXo8YA4oQACrV6BBSSuTr38by6MDUxH5NjgGiet2CK7iSzay",
  "key40": "5UuyY2FFcr4x8RfMuEGJVmaPg4xutnYEiBQUW3KyUjuR6JirUvM9Hw2t72tfoqnyv6kNkH9HniD63u1EXe7qRFXP",
  "key41": "5wAaLph7sPhiDt39zgWH1eCH726u6V1KmoWb3bE75XgtKG3mj6KJNLLKMJDkqjfsZZXSrrvgDToY5qSrEhQidFq4",
  "key42": "4MmJXKsV5QiseRJ34bbrN1focaf3pMQcxRoUjYFtCqWZwTmGJG6AoPD5hVoy34kL8nomaeht3LLCkQhtK9cq64QV",
  "key43": "54E9q1YQMPtwciqJoQFbeEQmjYwmRARpUXbCnQ5ftQpAcXrUpfPuU5UB9ekx3BdEie3YZVKSykwNATjWiyBQrT3a",
  "key44": "22uRhDCyAZV8NtsDSB2GQUE9GPT1JFYBqkoXmUsacgeSkrzzCSBEWw5aQSCex8gr5U9N8p6yNv6HPGrXX1c2TaYr",
  "key45": "33v7NzfVQGzeAx7xVs9G8nD8VziBbxn8rnbo5DXP8fyKgR9pgV5JeArvnggsofQGX7xbpVH8nHVTuUCFodEzzk2S",
  "key46": "26QG3oRWn8GJ8P7tAQCZaPXaHywJYgQPF4jWW7PN5zvDLGhES52EqSeiftP7xiBzRCAAxV99DGAXUmd1n5CjUE2s",
  "key47": "27C4FTU4uLP1rSUG9uoVhKArb9aPZzRSuYeDT3yNoxk9b27eLWCDYkp5XPdY6CUNwFK8EMKuaGXLweDcnEYXe7Vq",
  "key48": "4XNeicf8umeiCfcFHEmKRPpGxCRBpi8qSLgS7LJ7fT4NZyxJmqdf2k7iHESqm9KExi7KvV7xuKrhxuVsCPEpyKgw",
  "key49": "5iAKnLZwxkyg9kooNimoDCGcLXdqQqZj8ecjcMrsn3zVD9cVoF9S7tCXtccmGqDkbKgMa41BsUcH6tSepLp3oHre"
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
