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
    "HQdtM5aNq7h9iajZfqVtjyNV25LRTCHueJxCR5Nm5bgYwwKV18N6yFdKBRDKBndwp9wC71c9BdW1g3fgL1vTeNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZYW1edPTkuc9SzbLudEFFoWQ4JfEfdLT9hZt2nzqM3WkUT99Mz1Bk1TmBVefKfMMgb4kZinA2TEJ3TafyCLvgB",
  "key1": "4QaMGeffe1T2n56D2Cs6QakCw6hSmsWo26sATrCVsT9bViGL9gZTgEfNNW7gt82toGFnK2p3SxBbKih2PiESDnwB",
  "key2": "3nuQMDkPkpvTziTEJjf1uQj3rAY44HA8QXoSmnVmytThxgtJ6kDA6eWvCKfbGFaVQqrtLhwC8BnnjRLWte9LXpRv",
  "key3": "4aK91szhfya5VcKT7iW4m3tcYVCpRg2B2rBAcvcQW6ASeT1QPWD5YFuBJjwDhG4FuRtrZ33EtYPuQnKBGrVApjya",
  "key4": "5jjJoaN4d597ZBBQC2jAzZSV368NeAuwDAdEZWMHC7FrNNBa1TzMZkKaAfqrs5EibeHP3ghcwwkU1Bh5sDbyUcEg",
  "key5": "36Eh6XFKsqDnXR4T4NDE4omANmiUtjzTUN7WjYx9ZiBnLHcJ6FM1vYvgrFzg4weBd2EzTUZTfY3Dq7kS19hwt4Ee",
  "key6": "3E3Hyb7uD2zjZiwd1th5MLNzub4RqsT5VJW8nrZW2uwG3nAKzLKrnN8XEs5xV9LF1yNVms6H3hnV3JssRK7mWCYj",
  "key7": "RDo7Swb3gsAC44QYiyp3tjezD6f1M46GmXFVM4TdiLuV7xq6tpZPbjKvMRX3n8dP8ZKyn85U5WEcCopzZrePGgA",
  "key8": "45xcT7jHZE6oSdNvPoXiWHKWVg2XffFNzn9fNSgkxiRKP2BKnDkcQUsKgXo1W2xXJvffP8K1jtkzpJ9ieP47mr2A",
  "key9": "2SN7zRQi4YdzRboSFdU94ESUa98m7WTh2QgtkwF6NovChDAi3YQZNnezA5kAq6Ko5EaauDVDBe4bjVQtpG7skg2J",
  "key10": "4W6bkTi4Xc6x1cfxMLozLQ38eSiPQdXGbfhrdBCk9nPCnpUJwxCnrGjGNDW7Uabw4A4aYwBT67NzDPqL5rKTg5r",
  "key11": "36ZpLD5qW17C4HwX96KG1ca8PVEXt1yMbBMzjcPgReto4uQpPCs2dbQoLa3b5UepWpwrLoCEwwUJjjupoqQaz21m",
  "key12": "2CX4PWZ1PgczuD8aP6jwTLCQcVRLxyfQRqof9kiF35Pti74PSkmjCrwZ23KYnajg1JQpFkxw1SoiFiZkBvRAQSrs",
  "key13": "4FMimSHZ991jXoKU4udK26S769t6JS8EaB5SypQb7ZfrywiJnJe2tKxXq1bQZxDMgpL4FK5sKWqHkThnjSBMafx4",
  "key14": "3c16Xd1Z5rssSSxZzeAsiaKJWG3b2TDmgb1xzqDD25prkgeNA2m2zuQv62QQCChgC3fvtBgBm8NQbfwqArsqTYYG",
  "key15": "3jFkAViEoACXZfZuaGQGnDxV7jpdi2auPHrZeh1TfzTo1esEnfsaAzZ5ksN5VacmspY1tWakjNsSyYSVPdMiCHwz",
  "key16": "2AeD6ufGXupX29EyvJjQCQqUgc1GjLXxqDJ7xzChnuXxuyBJJDUqHafUFTiXaBpSeVntABAWe6y4BdFs74p6EMmM",
  "key17": "hn7eyT13iPUNkiuPV7Aze3PnFSp4xzqDHz25muM7fUVySRtMt787muAUMoMiiaacCux5XCPQ9GkhruTiwVnPskq",
  "key18": "3m6ziRizcoHSuCMNpBpd1xLfsGNeLxce7ppcbyr3JBQ7yF6DM7VMnF5ZfKS9F2uFzDyvjN1tHK18z37e2TUi39MA",
  "key19": "41j6pRK5Fk42PqGNzf9VqnfB4TvvQfi1NrunBvihMLg6ky3AuYSJ8xEczVCXBS9q11sAdTLkopGrP7vgY6UKHosu",
  "key20": "3C8kVDpYDWnsM554WdxaLZG3voMKWRwoAEQRZ2ZU6aAeiXAL938YtuNAUqnRxqvMzvZBD3tsjZyGeCSgXEzS6ct1",
  "key21": "5MjDtBEeuuqDRsRhpUpbgdaiDrpYdgKm7B1Wi1hUSf9knTRtFTy3tFnL71i4yLZuUNYfTJVCbigsDJBSBVtpemA8",
  "key22": "GxvAv2mnvqettReJfVHt8RZRPctxY3DxrZrzF3RxCNnM6NH2PWrqq6EzkYZvtQhE3nAKdupBHPXyu4q32thJoF3",
  "key23": "4MWjQF4jKXQLXUGPZk5mEDLC3WVEJxntaGjxRLqptNC1uXtjqwBfANht8NSWitriZTGRv9TQp2WhHgjGyM8oyk6W",
  "key24": "5BX9djLNTBGmze8zDGAa3E2a1YB6RctKBmPucQhYq2ifPKPsFKAZZqbbU71UgL2Bt6yGa8Q3uuGi3AgM6cCTcYQH",
  "key25": "3awJ3Cw1iUUftx3c1iRYXqfSVc3nsjdF5Gk7Dd4uxx5GnCyczpWQgJ68wZsrangnDVJ6EEkgx6XpjxbpWj7n1szw",
  "key26": "5B9KZxHD6bEM5N7pjwu8J8cNhSLRWgxraf8MpwK7qyzBeYDwUXB4gsxGu8ioQPQLUECrvtgkXNEeuHQaT4gAWpjP",
  "key27": "4hvcHhzEyw68VqoRvwhLWtg4y47XZ5THBy74p6AVF339qAMFQsutmd4Dt4s6sAyn6xp3K7EC8HmmpquPW3bjMrTB",
  "key28": "4WCrvxqSpMP3wAdGPpjuCbC5AD1Hu5FgkVjCkunWkEqTUQycZZaiXQGWizhiKC5sfkq8UvXRSGQuSH3W9kJzAmM2",
  "key29": "4Nr1Tp9gnfJDfQ3iY86DdvikM7n86CFxHLmpFx2Sank4ZpUuBZ7RoJjZb7y7iVu18BfbzxCFLyR9BYHrkECNuLru",
  "key30": "y7kPGy2xWwNuTY7Vn2C36XTaX1zD268WpcnqmcXrzBgN7vmnfUkUUFje8U9QQpFsQAbf32sGucvm1BpmxccQ4Bh",
  "key31": "5kWsV8Vou24ny9LrrN4pmto6QtrXL8uvhY7LgSSRSuppVoQnz34msnpGUQibsPsDDnfkVJkkFxHy3hubsCFr2YmZ",
  "key32": "4UbNaZnHJw2GCG9yNsZmVyvqpc8Jph4YB5V96VYiBiCWAfomjePsDWmGR91zENqaAGKuUKy1Z4oioZrBbuoY25zt",
  "key33": "5cYxMonwv85dVdfJExGgZgJJPsiQavWzevq84g8ZHRoxXdrnqg3zxHn38eqXY69X28XSPPDz4RwBimrw7xNH9YTp",
  "key34": "2gnsFFYFBgFvausbdpweZ7uA2vBegWqF2Z8W4FfBwHZocucs3ghDpXBmwau5JCXJRLToKKiooJoaTz3JaygZqFE4",
  "key35": "UGrfiwv8AgppE78PHESDGFBXoFf2HW9875SXPnfNnNpcMiyLwgkSC7bUMxmuLfDzyXS28tqBtE2K9uRoXJjEwD5",
  "key36": "3UheYCbEQLbM7RkKCjUfhQzVo7hYHJW7V71PdpvDU2gf6SzSPLg2BuYmhs6yo5jNZYaDQzhU8DfbmZHUzLsKejDt",
  "key37": "5HT1MFe1c47ozLcsviw1TZxFJXEtgVVVG3Ea9onneTN22Rjp2HTL1ez25b9KiBJKuC3jpuxPeoLpvpLvxkHe3NFq",
  "key38": "4U1iYyfL6Eosp12BbpdeYyZuzrxo2Faj35ouijqPBzNpwfA9CAxMM1RYbKnZXfEMdjx1PA7uTdySCk9uVX8p4ACi",
  "key39": "5kgiwLabXp9Y7mQxUgMYAX6CB7tFgJDSoufjtypxoHeqrhE2ujRrvxL7k15JFPDdZk4d6hNjr5ask9oiS35T5C7c",
  "key40": "GbzwMthbRWwLXwULejzMNuiLpM7Kxqm4DoXhsFcjbaRi9hQ91FiyEZ8Rs4bLXNwAMPXjC125LgtCwYdk5oCqzHh",
  "key41": "2xtwHCiLoPQJmN5phKqyJzZgAAkUBoAbkuEThGmo3YjVTJ8ADupMddhuUbva73nFoHNsm7skSV1hvevijDokbpTS",
  "key42": "6WCwbnFmkdTRSNhGNAjiodd7c2h32uHVgFAmCLmCYiCNA98o1iC2eFwcTcF8BHbefb4NudDFfrQKDvgC5Rzfsr9",
  "key43": "5gWuuXLyPDQCRdQgTUNJzfaxj3Yyqwf57reumdK4gvFqrTdtudfczXtaw4xMiaGicWD8KAtGq76AmdcPMV6wfsKV"
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
