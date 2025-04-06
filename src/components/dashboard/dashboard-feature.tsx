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
    "7qzd1whxXVLSPFLPvW2EZ4Qh5CetyMukcsr2BidqCUhBgq8B5dtCNridTs2CgQE8K7CMsiLgipD8o2izayWpZsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s616G4m8ewgmshRx5Zn2ACj83TPVhziK6aKGKxTcXNvJiSmjwFuJvi7JJxv7MqMj87eBEJc9iS64b9g7fv6Y1fA",
  "key1": "5KptPk4a6QunQC2LyqAJ3PjCgQDVfnDB3xa6upcJvbf9QcNJKoF4emmw8YeE4fMjJPqfe4Mg2jSo9fUwke2yzg9V",
  "key2": "64AdyxtFqcSMGtgz1vVq7bU8se7xd5pANQDibumfXC6tjPEPm1traNCVu6cLWLTrj4tduBBHLtUiFivL1SBDeQNq",
  "key3": "ERfTz4ahswPLCaZJdKjGuS85kaEXFJvcMeWBgeZ3jKarRmg5uFnm54K4skzCLQw83B9PZERWtw4t3XT9dxSoMB9",
  "key4": "43N4PJaPs2oqQ6szxCwsSKnYbtGtnFM2FpHQdFdFGfm62T4hCRw4sK8pHFaZQi4AVTN8eBDtrBfNLk9vAeCgebQk",
  "key5": "3krcBZDzyC3RE4XT8jaJpZqhegLQdKTEUMbbuuUKJSWRVdGH89TQD5jBNpKRfZHdyFPpeKHyZ27EM5XgH2CBbkea",
  "key6": "2rwVtaMhjSfAeyq6wuFeHdoJfJK97WisqMdVvopaV9c9ZF1nFooa5f24HpYLGeReA6MD9Ya7NBTZA5c9wxz4SkEN",
  "key7": "5Ng9SrK6L2FHZea8nqarYubsUaW273rWQyFiBfgYnnC1AbZjZfrSsx4HXKzECLSaHJR5Q6UHvKNnc34xSbkpbwer",
  "key8": "UKq27jsSSZbhGFzqG9icPkNYFXsw7TkK8ZZdyhtfcAPagAGgosSi6hnNEKJtAmUb4LKTAzMo26FG4UF3dDUSeBs",
  "key9": "5JXbJ3qUZFLJmfhH3iKYPuZWAhQHNNf1E6Qu5uQAdFxTpYtvAdiqDN2vYozcZcYP6dQJwi7aQN5iR43TXSE7vsM7",
  "key10": "4aXxpDPik4by9UswDNeuFKiKQHZnFK8XZjQpMyY7tvZTGk8sJLaHmTGQJHzBeo2UMC9vK9gi5RsKfvTuutA87NM9",
  "key11": "62sWKEC4PPYp9GtE9V34BSKCCMhzdCzQ8BdHT3N3c2ggwfUzvCRTmmvHyp6FMQbN2QcY9UxeGpHHfsj7p2qwZdCM",
  "key12": "64xft3wddEJLcavShzZo5Zqwb9FGP6k5keRPpAC2Kwm4KR8tVx8UvBvCKCANLfVwXsFs3g7LvqagSqG4aq27LftY",
  "key13": "2YLRzcNkCowoWk2hQrJuzjcz8BZ5pwmRWBEp4ZGRrPUcXRQxg2qRqcXEsJbJsf2oL1qVBdmychuTsmTxeygRkNW4",
  "key14": "4MS4TgbWTd5e8xihyffun6oTzF5sBYUK3BbWczonBkhsZ7kGqqKcF5hKhyv8kucR4g9D91bMz8kPWNJam4rWSnM5",
  "key15": "2BnDrHYAN1UaTAptvKxankpZCMwKpvXsmZDgkJk14FssYBxRxfz4TFzuodnCG8RiyVjvZ6Ch52BMQUnhNZPnFWzE",
  "key16": "3GperwryoK9eBvgrVKBYS7RLgA6cNE1kZLAaupXcbR1xb74QkRtZvyUy2ovEBrRh8ro3HdzrJ89NcXHExDVirbwZ",
  "key17": "41tZLwRCAdvQ4MUXK3FFDwZo9D5cWmgeY9y3banb2SiW6KbcEiDo9nEBMQPHmGZknnas8jS5a7gJobNDByWWC9UG",
  "key18": "3RSWKAwwrLq3tFxiuDjdNrE547TTnAcZwPvDA4TkGQGHqmCaP6MTqesaKeKGF6SZyURym4wUeeQcdH6FFAPRc6jZ",
  "key19": "3jk7xM5RN1wvAqggWKUAMGxNwFFdYMteMjevGJkEcCDckAy5atBgkaNeLsXJU5nis3HPBLmkQvZJedoJYLTYYXtV",
  "key20": "Va9N2fDDQoCghiazc6iDLCkgLPkU6NQD1RyVyFwKvrKb4CWfuz4nhEo2YukigMLMfCBLeFmkWYpLDcvBqZRse9z",
  "key21": "mWoHEgCW3LPQghuW5peQmoym3AXGoEU6ferJWhMdM1jgCRgzTMUWNrxcC2yU2yDogrX4y2if2kQ1WMi7TPaVijL",
  "key22": "4ur3trWNAVwaoTLKVi18C5aoP5QdLx5tYQ6Zd6ovYbEyaPEwSBubLLHN2QdJk5d5YRo9Nm2Y6ELAd4BUS49iSC9g",
  "key23": "36NnWUPneChHzh4M4p8s2UDw8G1uRJx869ZBnsv3wBPAZtg9hMAQ5AGaUK3rD7xi9EfBNGX85wFks3vrxTugEDCe",
  "key24": "3RuGJ5sAv7wrpiHi3tvdbT8PceWVYze9izoiAeRAt28fRaEJNLvesAhjFLTpVSdtXPqssDEdooTzuYHBN3BkfwGt",
  "key25": "25CKuchRz234ZbtuLnpmekC9VejbgNfJvF7DW9wW7VyuF3X2XyjFBPuQcAQDeGyzTy1EvGJSgFbBUYcWJ37SdxfB",
  "key26": "5UYfaSrRPNEc4HmzN9rMAPdchrzAFRYdFoHyABXGFNSMVYgAuwtmnuRoY7Xu7DzBWnstx822oSMspaABK1CRzWnP",
  "key27": "47Yo4dBPpqowjPoxZbqN636AZFRWzVUVBw81b84nXAQfphueKBo3BwksnUfTo1p3yNrGAs4pBRr6eU7KUNYSFeiX",
  "key28": "35rbgKcU4eWK13qcHahMF4pajGwg8p8u6W1zkKhVUkhwu1Y7vPRfHpbUC93T29PTsFykAPSo9GpY1fD9sWEg1Jdd",
  "key29": "9aQVgyicgpTxqpiEjpEs7RFEUubVMTuka2QGnuoJLWGVoax53Rdo2snAzJM57pAAH3poF76CQdJVGsNsmnRNYCo",
  "key30": "3M5GbRVC5tWHnTVfTTRgo8ZgPZV3bypoxbhw8mGLSFYnL8BTvBwMR7M4RuZ7YgsEjGCrF2D4qe6Rm88KQiksa9d8",
  "key31": "4N4fvBbSSCDKLiQ8tDBxTt9LXEgQekvJEP3yLZ8Vw69rE9PtRrRdwgihp8dWkyBvHEqdSf2jfXF2jDzm7kk16S1N",
  "key32": "3TRgCkCHt4Nhbs1JfkqREdVkkXf91WHPJxuF9d8ESMgZ4K77bE9xGusy8K4bXopjzFNXmP6m9JBY5VkNcGwwzNkM",
  "key33": "55FkdwrFA56trxFFyqFvPYur4NqxL9hDPRcgHAnozBAVCX155cevvJzyYFwoXCAkBtuZPNhDNwYPFJo9x9GxM6kq",
  "key34": "7ioqxWpNUvdxGMxV2dYmXYgNgJKmQjuCB4CAKiYPMkGmvrPutk5CX5pJyZATzo6DwdrmQLGBmSWSP8PuASxTjmX",
  "key35": "iWizxfHrEFNzcxwrBXJGmPJSqazzFkCqhdtGZy8zkdJpWSQ5x6BCbfohrzm158QGBcwSFbzwRiG4pG9LeF4e6fa",
  "key36": "5Gp2QB1jSFYZVTgKUbXf48vpJd4YUrQHRaJrd7tnNP1mCbUkZgk88uD96QAYaVyWWeoVanLTWd4fVp4su4UqtvYD",
  "key37": "3dmr9ArM28xUDum2MuLjm9a4EspxQou1cBBBuAEa6Bsigqy9KoJfxnoits6EYAE3SU6JtYh8fNgr7brdZvLaSGUe",
  "key38": "GVsvPryKoBoXimWJwwWRQSkTQvrq7PkzAgNADDPvagrGo6MzaUUjx4b8rKpNeDcjf8EeNcWYdasLwaqAgKkp5QM",
  "key39": "5BLWB8WXr9MDZXuark3aMVEefS6srVqckinFwXZajuqAwLmsqDbwpKmmU1B4DwKV4NL5qZNKeZwbpBxZbffLb7Mu",
  "key40": "61JkUZwgquZYbBQDxwt9gnn74JaDSzaMhnPpa3izTErKYyJvv9pCKyAWUqVxbqmybh2VRDt6uADHfMuQMhi9ixU8",
  "key41": "9MSZCnX3h6ezYBTsKcyyQsftu3h3SAChNKr26GunZa62kTfMzV6bJ9TLAca8ySjCcnaD5DvnhXST3wrPoKymScN",
  "key42": "CZ8BkNuPdTD5VoS1vy35ZCtWkSiLh8fBo5pWKbcKZabT4PLADF9WhYd17SMRhZ4GQRHy6Zo8ifH1LqWRYfCDjWG"
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
