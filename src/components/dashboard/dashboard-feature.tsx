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
    "3DwK6Puw8gs9tR94FxCqVgjXYL2pZPb73PWE32toyN32FRnwt85Dm2KQHV86VRzS4ma54xkuKka4T3kSF123AzPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izGAGVs3F3w7Lfw7ndpeyNBKXDfvY4bXZMTi2Tk5rnVbbM9GtyUQKX7BAd2WZK2WzNV62A7i9q9TndQZEgRufyT",
  "key1": "5jAsR5DS5mShtBEAfhXM4ZtGRGaRsoJR8EAsZv64BfGeLbbDqtjCRDTdmoEm7Nn2rY8hFSouwhc7w5H1q7NoAZhh",
  "key2": "dYcQLzpdMkrWL4yCNkRjs1jvvdGF8yaVeZvft2r9qZPoWaHrZxjPyVRewsJwFyXeaB8uhie1quwT59oUod6M7Mr",
  "key3": "4TSHSvaHkoLdmAA9eoUfRoqZ6Q4R55E4J9cvrP3XE3tHuo7hj7xdp1ugpwmdV56aepoB3cRC41rDnhvHhPWqGrxh",
  "key4": "3sax23XRhdAi2vpt9QFcKUzrZ6AjrGdidvJyaFRY7ruh2wVihdDtpGqcg435hPdBtLevCT3j4VJ3u2DeXknG2bDT",
  "key5": "3nxYDvSbvWEFFCm1nghhqLNcuSKsPkRerJZMrFXVsPJk4SVRnYX7GJPwcDogRvijSFVcGFuttq4JhbdJdEgKbFTR",
  "key6": "xNUEZnzpBUebAScRgeMRksbZRTNALU215Bp2Vn7mGgC3ZyJN98obqVr4L6czZjU1KMRCQF98cSG2bKircNPzwi1",
  "key7": "WsdNhcLAzZ5zac12j2CFEjJ4arBnm6WHayAsHUNdxEUi4EyyjEiDQvxtkg164gWLjenKwxY2pshfTPuT28y2fcn",
  "key8": "63GQkBvmBJD4FBHzgqkm7yXS8j7G59hXteND456daJFR3DwFheom2XKbewoeyE7BCL7YF8befF69r9XaBYeGRerQ",
  "key9": "J6hiRhULY6BrY2YQi7vZNF11qAEJ7qMsgvYU5rEFFzZtH6Z3SpRE8CRvriGGU5f42J1JHTB2meneLs6ECH3MQXr",
  "key10": "3SWWYyc4PEQa8SxakCtFYDZt5HyaxGnGpM8nWMWmcf2i5JKjSVn5QtPzzpg1VynW5xtCqYqnMzttqZqQsYuAjigu",
  "key11": "3WU9TSmfL7QkDT3cjjWzch4wtP4iXD8K1jT2u9kncjjyCamSKK21aUZMmxsXwCch2tPkLDQbfguJZwGAfF7svRJn",
  "key12": "5cKTqhMuDy5rpS6ckVX7u8Rcu58XyYLw61nXNDbM2mATnUcX6MWhc9An9pUPiLspyf7soGcdHYd5nmcrEAJBEGMV",
  "key13": "2Ya72rVamhJuNQweo4jd8KiLfKXNiG2X83sZ7nwi8sa37NRAPui15afZUzQj2T4gtJWJ6Nv4yxBDbfbRH9VC8dHx",
  "key14": "49LYwmPJmmWsSUBBoBaCwzDYuiqL3TsX1FY1JkrvTVWqzpV1YRpv5gYdQPqnHbf16iQvNN89XHnQNyzp4GUqneAZ",
  "key15": "3cQv15hjsendBMFvKcXra8aSXEiUTn3BSUaeJTExhedrkcxaqvW6PZ8cfuEzeqWQQZ85iw2HtY9yQ3R6eSoM5Kkx",
  "key16": "4chAgZoFT8qvit1v2GcQbo8fhynnZHGbinYn286vAKSvz6g3t3qeW4jWnLCdDJXEpyLYFU3aekYUTLRgbH6SVsCn",
  "key17": "4A692VVPYDgRw2GAJsVMgVLkC6iVA3vsezVRQZmPcpsWTirVVYKbfH4SkWNJGRSgQZBaGioCaQKY1xa4wc4KZvMq",
  "key18": "45CcJpEM9en5Lk4wPKM18qxYTa2EiHxVmuyjmY8o7dhjzewPYkT3AYHM9soVoxJwopsP4mzmqEktxsfg9qd1dKWG",
  "key19": "5ezjPkvrYroTm8VyppdhZb7FBUdkMGrLodjqViSgKdmzh2vPnnyzdps9uLFBkVzgDkRB5Jgpfm99Eq24Q5R1ZgQT",
  "key20": "3qJoM1ARYLxQRKVS9DMrCJjzzrW6G9ZKtxBqWjEG6pCnebcfLzSEweUcrdURs8K2p7C3uJFxyefFQeuRxs2GoxBy",
  "key21": "47dYWkyVLWqyuo55DQiscY3EnktNRV18REszt6e293923mpcGiAPDHMbUrUQ793suYaCzzyDqvBYDWfha4YDuCvf",
  "key22": "2iXYQkaQbzTrN2vHbRL1PVd4EkCkRvzit2RietWAQ1D15VybTUa3HPF5B8yjmFJG1z5Pquh7ZH5h7Z8F1XGXgydx",
  "key23": "u3h22GCDRiHe6x7kUxEsm5Aa2cszggLmcZiB4U21igaoXZ4MqwpLLnx7fMdh2Vw3Y2ZLxKCiSRP4b5SWiJUBmEY",
  "key24": "54qaKqLzGRq1K2woTUm3SdPQY3ZQYyiMr5XLwHczRZipUPwmauKEZAwvqeNEVavmt5otT5LxWfs1xRC5fptuEJTe",
  "key25": "2skbX3hYtqjEa1YyGfB9M7LN8XBk98L5eoaRG8fGacX8XNGRe9Hr4rKkanJF5kH6LxZMowKSq6sp9c5Z7HZJ759r",
  "key26": "h6gZq2x25K3X28rh2WDUSd4oUKLi8URn4P353UkGdpo5otW6J7WGTgw5bsPVfbcZasPRWajMUJfceWzRnbCp4Yz",
  "key27": "4LEXNBLx4hh3PZMDoGnthKb9R7EFDt7hZPfE9NocJ671nMFFnnUpX1DwRjrfccePfwkdNiJAmfhTAdoFZJvyPyLr",
  "key28": "3F2AbC2ebgeYHSezZByNFwv7f559h98sV78qeDHwnEB1PYLnyzfmufiC98saRxwppocC61GH3mAV8NofRVRHSi7u",
  "key29": "51zij6iyDZSmv4Y14qgmgAjKMbqW5ssR3BbqGrC59ZTgat7bst7jpVtjPUPwoEB8jkDRTnQ8smfAspB7SfpjWuLq",
  "key30": "38pGrbSJezkuEGspTg1YEw4onriR2dE1dysVRfT7RjZBvCmFc1S1wCZKkuxcLDcPBVAR1ArPZx8Trke4RrEsXJDJ",
  "key31": "3MWUxWqamvuH1C4kiJSzjvPNm7uBEtYe89AiQWRvMVQmsATRfU7xGkktseUQ8fc8wrPA95thXZwsbkYB5jtZW6R7",
  "key32": "4F4JZmS6oCtCq6RnCFQbinKBiHXAK1hf4zv1oEr2onJGpvNJU87ostDc1b9CNHQf88aKzxSj1ka7f8CVbV2KzTtF",
  "key33": "AMFkAhaKHHNxk9T1yFYemrrdnTM668u3g5AdKCsmHehoHEvReoC3RkuLQVMJ5YtR7tWR2QUQ9YDeRZyz5m8BKpZ",
  "key34": "HCigjSk6Bs9unEFymNDRVSBpyEmtRV4f1FcEurBWSonbwt68QM1kwdDrWW8cp8MU6kiyBF4XRg1Juk1yMpV4Eca",
  "key35": "2r6Je47HEGaTc2fVS6PgTKLuTLm1GLAZZccjwgwFnsTLBPguwj7uZMLpTbEsbEBCDryhDv6yze1cxVWeF1aeR9t7",
  "key36": "2tfgJ3ERsvk1GR2VcefKEnqpdaNjEqaYgECZ6HfC7GEWkgLdhsG2zTdT23fwJD7tQyoB8dMWkp5zf9zxGbpGhHwd",
  "key37": "5Kg289jTuNWbLJduXNxo4FFuSm3TDtu1CDXep6m8pThVK7GP6tSwh3aJVpZUaBSH6gQnSCEYyXfpy8QLjDwz7oZg",
  "key38": "3sLrTCuBPtafhMHPf5Suc23ArnBdsVt4NpCmgGnb3KbatbPboPTPE4S2wWHZQaVGqGzaxjeZiCiSGfZBqn9zvRUM"
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
