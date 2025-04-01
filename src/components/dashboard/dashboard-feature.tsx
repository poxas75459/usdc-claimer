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
    "3dUTfKBuZJ3yaNX5zjq7JmAe3YSTfNs88YQLZvM41hk5aVX6Y9auXSzgGTpLLKm1R1wYJEdfj3XmA7NFZq93NFVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8xrY5nbXaE2v4wAmFiEoSRF7rrbWN7pMytmk9cnhJA82an2z6KV8jYQxutrjfZs2vwoSNyq1CWngJfQ6rYrB1z",
  "key1": "wjjxf8WVwUWrQDsRCmmvfB4vgjiKuKiXTfPZGqGFuCuhekXzfjBseD6frPAxoybUf4XFpWggKGFcxoG7s5whQ98",
  "key2": "3EciQFvGswXqtLS8dHtmbfCwBBwdoHUvEpXfQw6vFmMcW59WWnrCmyXWTw4BzVsDqb713XRFvpvGa2Z2MViJUBHU",
  "key3": "4ZRCD5eo3SSgTyhfGTiJ9A4ni6DZBsMEa5ao7aoFcHM6MZLmrzbeVtJjPJ3YADAEKq3HMmCopFoSuEKRVGHffJXh",
  "key4": "4s2oQb8SAJA52ebRnvHRrRwBHHXTw9XBNhPDfVTT4virqkeg5qCp2i9juqBDzZWCjHAx9SVaL17w8ZN2Mq9NFxJW",
  "key5": "2iruXYrDX19rwaNyh76mKd9wr5fTqJusyMCfaMQgZJyuXu3ng3sSJwgHDaze7fedMUqDinZ25ksRqcvHdPnpESH7",
  "key6": "jhHCE31PDWzyHbh3pfMzCPWNu9hygvkWayPBLkiMLt1zh6i74oxqi9547eEx4KxKSTMVwH58cc3YZ1ry1QGBPPJ",
  "key7": "3QDrZKHdV34g68D8ajpyUqzicJbSwdiyiTzQYvPmmmZKrM84DPdC5pjMociGMB5NmEHDiq1MsuyKa2KceYES94z5",
  "key8": "5JxeGpWxxpsgdCS1niCEvk8YMdWZjsgMgcVT87uyPW1iAXCt8ZxT1nzBLYXV4uDPP713i7CqjF9Y9YxyLixKEWfx",
  "key9": "2rx2tSPQU7zPWD2f35vk4XNQk4or6yA3rmPwZqBR2hJwHuxYiGEPRc4SkYTiD1CRHoWe5Vp7tNrubuqH2maw7XAy",
  "key10": "43g4Rrzhf69ZBCfFoRvs3onjet7U4JJTu8a9DqFQ6EvPFPPQwWgwK3msvvP4RkVw5rrjY7qfRq6qYmYiLNoLXVE1",
  "key11": "2xse4g1y1u9P48qZHRB9q4CWca9ZpCjuaEsy94wCJyS86Q5ZAPRkP2aXWdEUYeYw6dZYLeNWrrxev1N9vNr8Nj7p",
  "key12": "5Ga5AJfGAcPtZiy4sMSsAQdf4vRzHe3ja4kabYfQWy91xae5wmU88AELRSfEAg69Lf8NDpFjGhT4dymCVc7CPUxk",
  "key13": "5EEsDvFWs56zNdrqQLWxVGQZd8gwSaRopxdmrNAYsnATzRehEtYh2B5aAswGAKGWUppkicjFjvZdm4Stm1z7cbq3",
  "key14": "5mrnFhHG7tbvE4q3wMMQg3V76gFvkpAXfLkB3LHTzMfoHDJYUyGMJxzxsnCUtSJt3DnNU6rRvCiHaZ23c5bMYZUD",
  "key15": "RZd8b1aauzdbcQvVP5EDAFj1edYugHM8pn7mVFNFzF6PpBXE7Y77XnKXE4cZwuG4r7heSJqRESgW2PWJ1iwPMEt",
  "key16": "436bmLsJMmv7KPsohDc5LrR28e89cun9wg8NXU14paDvbUAi7fTBENeU1EHzMvSUMSxodkL3PahvzdzDk2mbinFN",
  "key17": "6sbbJQV9eG9gmYJVVcrjfu62AAU4xBbakyHs174N7XtYr7Y1wTkGBFXzkFD6UHV4hrbXmeSBWZdyPj5zy8iSjGM",
  "key18": "Aye6nonjkS2bBH9CkQCqCZ7oRHfgPhJfAwDtrReEq9GnZEkWCdsuVTePiPLktPauSzTpKG3pXYEf8o2qphoLJxz",
  "key19": "28sHJmtY45FLWArtLbDpqHe31uGeX2PPvDenj2jtwpB7URaFoAPuVe3do2LtwkAwL8J3sHwsXNsXqduFYCHQdsXM",
  "key20": "3DMepwdipuRKLPtwB8ZontZU92y4JBzhVKk7ir3iDfjX6fkAxCewMk4Ks4SRtiZ16rk8zCKYDfuVqwzAtbHyCCPS",
  "key21": "27wg5LsH7rCTspwnmcUre26EzQnmVQhZorUVk5uyKBWBek1VnR9MTGA5TyWm6jE1knNcSHetDZ25XCsqJhgAhYJg",
  "key22": "BVHbwN5hu9rdXQQvFXhuUL8AxtzkyFoFkDwQwsvFmpwZKAABytceV8uXvTkg89rC7d3zYWN4v6KsLXqraHHa36L",
  "key23": "5vKJXEzBhoWRyg5JxgEDfS4JnH1CVCSAyE3M1JXeRGbjWs3g2a5MYSBxiCCSVBM9GaQuorobNALgbAdQ9WpyAAQ9",
  "key24": "2sWeeSVKJ8qgg8P4QGidEG7UZBbfuXMVCWQBeCzoBpaytT7bpmtSiy8G5fWEFffd6Da7Nk5h6sYqHWXgTK8atXd2",
  "key25": "3WhuTPCKYuSmffXsaGJzFokpbQnjCKwKkje9RHmrtdFG4TwDgFgnNijUWaoDxDCRuDkMJAtT3vvGdv8NuTT3SsxP",
  "key26": "MiiQTMJPxhREEYdw229pDE48d3ZPs9AuEtCkBQiHautMrU23mJQvHnALXmHS3VdkjfSTfB259qshMn9k4Nnjd2X",
  "key27": "66QThcpLgGkApME6ESPfy1TRpMhvBTs6wPbTLCg5VHGt7nrDLRTiWjNDP91pZKKasPHvAA3KLW4H88AWi8e5mRxG",
  "key28": "7r7KhGzxMmqsBs3bvmNkTjXtkzsJC4ZwVr7FPLUL6MnAAiW7Yv7z2KdX63hsbq75EaSp23Hs3B8DsNdvSQRrTiq",
  "key29": "4zeac9fnkGAXToZweVgi7mecE7hJ2cbHyvdLh8xYb8jR5Qz4H4TXY6xrAptdaFzC1voZn27UmM79Tek9vMJdVfe",
  "key30": "4vENtqLC1aVAZw728r8BK8PBnzxp8e2mftG55ZeiAwFPfx3NPcoCJEwaJXSmF3JwwtCP26zaC9pi3ygr2sGDEbEb",
  "key31": "3pxNNTSQjxt3BrftnmHe7ueR7G5zhGpqPYa8ENTEjmPddAD9eARHPj17ZJjnRnCU4c9P2Kr7E6Hxgyk85wvJPJkA",
  "key32": "4e7MSvpVY2fF3SmjnBbGoqU1kqgHQGtqMwUbHB6pHcyY97faBuWXzAMBVmCbiECbcYXcp7bxGJKQMxVEFzJ7uu5A",
  "key33": "5mVYTwDJ494msZAJeNufZSTV6WbQDCXPRqRQ4oqt1eDwDbHtcE4osDEFxGZcru3mDyCCcShyXdsSRQBzs1xKmhNK"
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
