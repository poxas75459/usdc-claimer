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
    "4qqhzkLQR7ef3ir1uBZG3GoC8PT2Hzpn2Zkm1N4PAghTDnHTgGj78Xeg87ejQDP94SxuyJSWGHpR9p9MAU4YJJpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urT9DDcNS5q2q8kmazbFypLybiPoo52BdeBPwSP2KrDmuYVUenjKidZ6qwtuHEwoT9ABqjTcGJUChLnuEYbe9n9",
  "key1": "4rjLEqeYW3Zr3joju5yLCeUjAhVoCo6GWGga311KLLSpgcu51KFNsUXb7BNCfQxvb1hhQ11rwwMtY2MLxsJZu6ya",
  "key2": "3PCRWoUyYZLHPDDSSBmLiKspRCi6pq4Zq1Pw4R3wi43tpnySeVBhs1ePWhUmkQekFaqu3EBMKUQa7L52AUodqi2n",
  "key3": "3cjTxJyKMfvYErfXTYwMEb5ti6M8R363vxbHkdyjPjv8mHZicsCePLzQsmwMmZkpNxrHJFPoXpPsgeuH4ydPaH7L",
  "key4": "RB5tNmpBNk5YtgqAvXsJ53SH9rRukw2sMvKXtCVZTVywZtk3jBUmLkTm25cmnm4YWWebcTeY8LkmBP2zroQkBFP",
  "key5": "4oY2FbZL3cKYDFCY9WBKWvsCsFV2FXWu3BUtvCG89WMNztntRNKiHzeDS1765iRCeUhhxtjiVedSGz6LHYrNiQzF",
  "key6": "5DttVNkSqEppjj2ocR7iRtBCoDbHnVuCEzX3eTUqZfLs93Bk3BYTAU9PRWYLQwzZFaFTz4pgc7zp1c88AdRW3fvZ",
  "key7": "2SrZLgUCFaPH4J7y2iYcrBxpx1V6Bh86xnc3uK9pk8TjtEbGD7nTSdjNSUCf9AheU9RvBhx8w7JhvXX8QVfAEb1h",
  "key8": "bgrT1gFNTX8Saegc3SJ5HFCafJCavkBbC1fGFqGjjRtEXMkPY4HnB7gb6PknDtHuRp3dzLGnH9qnzctV8o4xNwN",
  "key9": "4KE3iULGqAeJDFMmd1UWghcVJXhJrYpcFbSR7UgK4QUY1ZUXMUbL5Rt8C9gMp3rjrXXgLcUdtuK9ef8ea861VuL1",
  "key10": "v3jDX4akoEgz7ReE96VpmkJpjMzg1VhaTpugPEY9jtayYTZW38WiCHbxjGEcrK7NUqVsbSqC13H7hdLvXvi14ds",
  "key11": "3Ygs8Yz8b93modxH2Qvb5mj25Puau3ThY3JaMvAE2TFfCUSujkSvbvUkFBT8E8gmaEGyNqKVTAELZNDuKX7Esq9v",
  "key12": "63j2SFFPzPuKXe4L42s1UQdu9uULf4BVojD2b6wmfZwxbpxJXabCHNdMsAq2GYoxJiiRHfb5NbT3dmPA7ioDZkPS",
  "key13": "2KKPzX3BMLGECVs4F74CaujsPJgmSthCsgCrsHbznziKq2fXrQPQDpdgHdUVfXrsLgG5EBjUFkcGSSojuEzHRCej",
  "key14": "5sZyELZVccZfeNqDeUDtEPrUPKuD5ny36uPh9mqoi9Rct6LXhbasHpTqvj5ppuLsLZCu7vJerrPq82g9SPWPgoBp",
  "key15": "5PsuvW8tt778r1LQtx9ZzAYj5cDVbUdB92kDSNpvvixB7YxmqZaegAaSZBrrj3S4PczZqhrgN2UjCY9et2ZRyUkz",
  "key16": "4JnzhBebApunWZVf7H3bnyUE58jutamuV9XyVk8aPWESSgj3WMzKBEAn6k91eBkncZhkFcu59knpENh1BMSmod5",
  "key17": "4rCYP4i3UQ9juvuYif6F76WJPMp8ZVTTaHdkunx8NumhGkLtDBBAP9xLs5mvqVrx3NQ7i22K6usPQRdsFHVrB2UR",
  "key18": "33f9C6mQHDDoZbgwPabmfpC8apJMkqDArRQiAf4Y3bh1j4L7GTJkQ3yMfHesT2PTYoMa2oHqZgC22XkKeC5aqZko",
  "key19": "5Z1pZcQstwLvo8MdduXdpjNWBgM33cH3bUs7pd2vjetZhFe5nRvYpm67mRvTMhr5fQx39WJw6YV1upoH2mi4D3VP",
  "key20": "4wX7PwmJUseQNPnxCEdbuT4zbhTLPG7GusvWKT7HpixNrhDPSaQjatE791Kvr4bHDJfXRdZEdeNXo2Y24WD2o7u7",
  "key21": "FZj47XwMwa5cVUPat9Q2LfpSa7cqHjS98XAKEitAJ4AMTX7mkHt4XZFUpURADrYHiXXex2kHwRL6RK46c6FVtAL",
  "key22": "4x8Tc2dziE7rDiJ3uZ5jkMvJfhanbKGK2BciQMxGhVbBo9sN68bTdHj56qo56GMtpP5DNfhS68jujERD7XA7SpPc",
  "key23": "5BGbYL8jDNEYYByk7vKKLi2t3YvojUTy7A81uRuVkczNCcMYkFTB6SL6wLA8KD2PqDgZAGMswUtE1JcCWS9FZAVH",
  "key24": "27TUrWTH2CLibVDUBMLCDfxiFPtmcMQ2exwgpEgwRmmTCSgrc5n9De8Q8tHg5YhNyGYZopruEiGWYA9PP7oqeAqL",
  "key25": "5puA3P2LHWJ1Di8coXKq3SeBQipyiDV9mbJmagvFNxRTXsd4WPJHogLU9jfZzj7d24Eey4yyiFXj7yCsjqtELedJ",
  "key26": "eb691yQKgDc7w47uTKDT8bu89k4rR45FcDeHTzqDDyMT2BwdxHA9BsyJihvVRqnqFTmGDZMG8t6wDJ2zYAYiWia",
  "key27": "fA9NLoJ6zL31AXoCBELdQgXmn14Zf7PxhzhGafdzRUKJFGy78hvEyXcegXu2ovBVr4M9AxVmhqyxva11XyK3Um1",
  "key28": "3HTA7taEeMsmvpR9GasNARfqVDRDtPi1vN4RwDT7YU6QX7sYGQPRXNLwUC3SSuDeRuEp8oaxRvnQoxWJCAYzRFvX",
  "key29": "5oC4CSwKxU6fHSvbfPeRksjAkWWeBtzvQfYQJuydpPQ6uBrL1Vp2hzxaZutcxSYvFmxPDTasikRwgYcZGLPz7aUd",
  "key30": "1D5wHdg6A62rPY12F15ov8EjPBvjxcnKadfeSgExAWKqB9svP6GbQe9cTwiDTA9BpoK5CojsL5h6FWkKZYH3Vcw",
  "key31": "P8EkrC2Aq565KKTghmrS4VhbnnRWR2DEhTJeQcXuwPwJ4XTVDGAYgXLob1cDYkKP7bxssLAWcSuNSqhbQDhy9nV",
  "key32": "2pk5Lkaxrns7toGRoD66xDcjMo5QhTo1nRTLns5oWmyvAh21swtdriZgyjSNTTQZvRt4BDMcbrRFVrn23HqGf3y"
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
