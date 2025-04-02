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
    "4hLj8sVRmRJczvEYR2a7CCJVeu8MiuJMFh59yKsmCrKCiKvdgCp4qDtRyDiUWg2rWkSRfdLF1H7zTXbNFayrKMc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBPZRdXYSwKCzDqWx1vyWKL51thDdWutuKphhejLqpQRT5deYcNJ5kBKu1ZZop7md5NWpgGcBFeCYtzBgkmkYcK",
  "key1": "3FdtmUoLD3eqpT45MFZLZsiua4PjTUnJ8t4J8Tqdh3vfXo1SFEwkmMpe3X57QTPhiVp2YCSYddttHm79s6xiqu2N",
  "key2": "5CMiQ3snDJMLdGnGiHoHXBJUyt8E5re6624zYMXx6SdYmkmJmm4Rk3MxxsgioQi2bsChUQtLXNRJgLe6yQnkLpcz",
  "key3": "5de1SREEv333ceXWvE8XeFMWwPcA1Fxeh8g4qMNA3xR44CAKF1McmZkcxAikTJRPfmrfX2S2sMpLVx35gpnrUXKp",
  "key4": "5pv4idnuTTVw1Eq75Kp9NqwhfRPHoaxzWhRuYLU6BU6dwywg87jGphTKejZQcuHTxuy3kMrBAq6E865tQsmPRi4T",
  "key5": "d7kearS6PvEP81g3c8UNkuatuP35H7R23eTA823mCSnnJxr8anXfDsMWUFPud2tCZ1XpvEDwmcfgftmrSodccf7",
  "key6": "4MU1AjRH9yzenT8GAf5tejkPQdFzxPrk3g2BbXvqyh2xQKAr9wj2J3MjwoqQbBwLekTAipgxDoVQfkS6eXYN5cbj",
  "key7": "5ygGoFC78t4F4qTXG1H578nQQhChTTGzMas8dwKoYn8NSG2bJmWV1AQyLBGKWAn2NrUtALXEx57vuSzudApx9oTD",
  "key8": "36KstTjFD4WzBbcPaSpAtbqudZjuA4dshgc1aQCNySgP31rsxGct7P68HTUZrQaekNBjKjroTiGtAsxyEY3vhCGJ",
  "key9": "67jhUKmHgtitZEwjkCgPDHozZsRWYFc2RETcvq3yJEKyzEzPnCE8kChLUD3YwRCp2b5DsQ4EhQhv56Nvwu6g5STa",
  "key10": "N2i9ksbiVDDDjb9M1RAyE4hgs18Vt9baKiLWdYxsTcwjCabSFmTgt6QBArhqWqXTDDyMEXEcrJeLboqmuC842Bx",
  "key11": "2MQxuCYyqjYYQWbj3LFtih5degaJeL7zzgLw4HeZQRQ9RQQegUgvHbXB1WwijFcjK9g7cufycNxrLtYqQ7xe4P4T",
  "key12": "2YxHdJPrsvtuMKXXuMEMNpM9Y83X8MEC6SUESK6Jtb2DdhSREyNp4Es8nUyN4zMkqnTMmaeU8W4UUp8dN4sZJsaf",
  "key13": "63Jk5YPnSQW8N7kokUAk3DetGH5ur736w5evh5HWWpcZF215WEJaVY1KDV4NGToLQmDG7UmpMYzL92qDBre7HuJp",
  "key14": "4ThJXLiuHBYGwh3Pqc4rNBducfFXkafTmPmU7Bgp1vb5QnQEW3oEpxiuyzGsXdkzugq91NHibbNk7LA3xzQfodL8",
  "key15": "Cvkp6AZSLXeqXQ4BM9bpzQP4pd6854AjtKACwFnvt4od1mdxTEjQtjjngHninLFeDh9cf39S73KaHAWX6QgLYRP",
  "key16": "5bSidGbomL7TpYMrH2YBTQVPiQ86poCUPajHYugFUZZpyr5ESPHAQqL3yMAmXT3urYqpqANzJhoV8s8bBZ3571RD",
  "key17": "5SMrg11dwjcVMBXht8QD8Ni5aAdBxydKxVd6zSjzMjxApHayRcPkMQnbVBG7jN5Bz2LXCs7Z7Vp994geCYxR5zVx",
  "key18": "BoRxrBQe3J5gExJp835nJUuMEkqc72JRXcr7Zgq6KcGqAtvGdoEo7oCHPganXentMb9qjvAuS6UzY67wrfkPSuK",
  "key19": "JBjduU49TdUJdpaxW9g8rriMdWxn6w6B4NSN6ARyUfd1nrsoMYiEZKSBYrAVHP89cNKSqTgaNi1RHmfPnAGEeZG",
  "key20": "41drS2tZMGrW4hjsfKp9qZybmZHbgszSxVTVzL26RyCE8GbpkMvTAD3xrLVbPqPChaQbN47ZgXt7XPsFaNvFJPtC",
  "key21": "5Ctf2Bz4EPcDjcMm5spuA2cw7DWgPdBfaj6jq4Fksop83oTjyWXLryL7biJPuWbJeLHfCxLzWFRzdStytqAwdiMD",
  "key22": "3tSaNwKPVUfyPj6HaaakcmGP2D2VNTZh6DXE458csAY5pj7H4JwqzT1BNvsKmaBXYNz9HVrUmeHx6KGWD7QQdRXo",
  "key23": "5KcBCiQBH447XjY86pWDvj8XJmLdzkBeiC2hADXhmE27pQwvW7VnroTRhvC4z6EEvjAD9rbxNmLFXEFPoQy7ZYn9",
  "key24": "5J6S6X7Tqmg3Q9E7eKfC57NNXiT1e3gj12f5Bae82kcJrkfYEFqq2MV58uQuoPr8gfq3yMm1sj2U7xZAyj21FFrB",
  "key25": "PQ8mwWPtvpHSbcETcQGhMyV2kLQvrmtUFosr1LjMrAT55Tx9DoBq2uLwMae4RLddFCogXvziY2gaF8TPCP5Xx8E",
  "key26": "7uEPmVx7SbQNFTxBw7QjiGBitYTMjKL1hrEMHVoh5SiBUVVAuovu1n7XwYqQCBB9ZasxurDAwxMU8qwr2x8zH5W",
  "key27": "WMA96PDqWwD1pXoMhpF1Q3oWKF6PpTevFJEErxW9QvJA94C1cbfgwA7tctzXj6pncKqs56jybUX47ACvfPxwSQ1",
  "key28": "24sTDYYzYTmiUrYXnMGURBhU5jwpEUfMJJJoFKTyhL1yfp4KqbgE4DSACzydCXq1snYLpDuQAurY64fCKnPnaVVW",
  "key29": "67dPdzQCK4VhD2VZwVVyzuYhS14HygwA9MoBRd8WZ88j3H4a7NhXEKRzbE8t41P6Hc8TVURecECoygbV284Hqdc9",
  "key30": "578n9yMYSuvgC6swv2mFXCEvzGPDJKm53dwLdp1xN8kwgwxDBgtaBYEuHNbF69v7wkAfjXJMWDKbrSJw7QcxKtLd",
  "key31": "4RcjYrXuayQzvdDGGeaAPx1RmiAhn5MVqyNiz4HFU8YJBFzt8qtr1M1En9oMQ1m7Zhrh9JbnwQAsfw2ayUnJcWaY",
  "key32": "2gvUkAf2qBizn6nc2wd4AKgZ7pAvsy1jbuqkDyDKbRZuCMZNePRpScExwMGK6tCCNE2cY28SVYUE1L6buMHsYDM6",
  "key33": "61NWr9rxjnZks9SnD7R46QjJttqMAi9UafNtgHmi8icbh4k5tsosGw8AwihZaoC4MyP6NMexLRw8m3XhFyhXrLTo",
  "key34": "5gjB4U2182H67Y6NaRVDcgQnvU3Fsv37bWueBdsGyLniexLT7UaiEQZHkzYFdSrHsXgJrWQyZwzdDYRKiULmes9u",
  "key35": "2CpMkF4sFPQFLB5CWXU1RA8YCLQ34QZZBq1VHr12r47nfZvX9TXJREfKtjMdjk4XAKt8jy5s3LaGEJoRYCXKUEeh",
  "key36": "qUEG1wsZnGcMMLDwowj8GJkxuerTA1BtHePxQV2yUJ8KHMLnsfEsqRHRqecL9i84xGsZEQ3a8ffeKMN6C5sKeYf",
  "key37": "3GwCwrPT6qXAv9MHcxGUXPqkjYezx65c1TvpwrEtByDwTFJHKdijBjtuGmbPDHjMyDSqFvXF2u6qPp5mkgsDFJKN",
  "key38": "4xctXWuE8J7CduCvG76EW26sKGje6d5rsr4HdD5kPfNzMrEmr5EJQp9tCRR1cFnJH4fpQdubxLm9qou7vQW7ELFD",
  "key39": "3Fex5XKksNHHHNgf8YtyMMaBWbjPWnRji1rFKFr1z5T6cDtCdavqCuXhgvM5sB21XZPgUkBjCFKNza2AfJ7xBRWe",
  "key40": "3zzH9gKBiNiM1hcuB8CkrrxE2WhwqxmrKapmuYdxuGRks7GVDCzo2TqHj7yNXY63L8xM9cr5ryqUmg8poEah4bCb",
  "key41": "ag8LSLB3nrmPdznVtrSKFXVp8cX3FCqZUhNMWPgXZVrnHjuEnZ1hsjH8tgEPGXCYopeYUekYhLA4PWoYyaq458a",
  "key42": "4CjUhnWov5TLy1avujDaw6A4b3oNJhfHZRA1ZEPEvaYLtwJiTRXpurSscWFMLJwJVw6Z6cX2Sq7iJwi4z4Vsmtqv",
  "key43": "33eWtoRq68nZttk9dmhZBmNjTAjMKx1U7CNpWgEE34qa9QP88qBSBjeLns7YT6ZYjUJ6vYkWyVW8eLk5ow4EBygA",
  "key44": "58M8q46jxQJpW3rdchbKXpYp4qyE42MrN6R7cZ75jgUFb7D8MZ1G4BCUEn4h2ZHojN1PJzTtwzCu5zL9PqmsqTNM",
  "key45": "2Kks8HuBbfVrVA6M7hskGRQoM1Xed5Y5NqgD1VWg3rsNi1GNHeLiZHP3CL9om4SsSdoiZ5GpgV2hYmQBGgYHHZbT",
  "key46": "4k5RDxqLCNZjjy2x6avX7UjPAwJhHeHdXzzvyL9bRKbBbWo4sTamosjNKrpyXaGvR1Y18Nc1UAVYL43Q54EvBVio"
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
