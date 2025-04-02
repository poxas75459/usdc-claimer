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
    "3PSL3T1Z3mfmBfhAb3o8vedWB5USYCFKXisyAjU3rzx5gUWM3Nt45hjfJ3C8SkLfDHDawGyTqDHwr8BUd7PYGAwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttynFLy8is5XokpRHeZp1FdYdV2KR3ZaHCRWcjZpLz8AUd9wYeRg8AWtB3sZPcq87Dgp3EHW2G6ZCcNcEa2rXub",
  "key1": "5dCFxTH7wJgrpVxUeYeNrAK9rZmKeSDJvxTW3f6NhHuURG67oCwXGS7UpEpJj3Twk87xBJ2XzrBhcLYxGanrMCMy",
  "key2": "yzTY9HgyfQ5pRkGESP8pvEuhgpQaU3X6eTKhWEgzpc9g6xurPi4sLvyciXrfbKWM1QwzuKpX7giiVN5rmnegsMG",
  "key3": "Qk8dbMLg3w5WU8QqysxY5Chxta9r5AfbNcBmpxZsSw7q87dd6whwsUhMewfxMH8EbgEYwwqXpZwVXUYwq3mFA9C",
  "key4": "5izZBXDLu48i4hjpBjgbQyzAWNx2tLkEAnaD8b39vLt6EmArh2Pr2hAvWehKBfmUcLBWnLhWcPKR92tPQWNWSpWj",
  "key5": "5dbeX7QoXKKkBszyDotcq1FUvPAszjvU3b22i31Et5UeQuuQ4D8WGjR61DLErBeNDL9UPL7ByNNA9GPhwC6GXmzo",
  "key6": "2KTgCse2VWrxUQB8TLh6hvvma4q5prNCTp2BRctSXtgkfeiwRbWeLr7i4HXvKdPB94FnGECDcDxmytEQmMS1ZekM",
  "key7": "4EuJ4yzNbW86NRK2ipGPYv2g2dKBzc1ULdaQwUwdGEVK17N43uC74RbJJT7PKwc4sV2F9QFD6jAWrBXaravSWcy9",
  "key8": "nyjkhUFWCmQHCAqqs5sXABQikaesJTVjHzBShgrxNpffsPGGAcMwxYyjCstFLYen2WfmzHLbb3US67ctbEwe7Gd",
  "key9": "gwv746VwRbBSJqMQXqYT13mzSbbwcRVCgVLQXtyjNauQGpY7VbgmNDPvtFAtosibW8suR7R226De9aADy9Uvobe",
  "key10": "4RD9i2MHWJrNByGm7aqwPsXAiLu78EhnCovWsf6MjiwSZARDe4MRymSLK8BfdzheBfMocsuN2PunJvRwLAzuwJVa",
  "key11": "8uUEc3yauZjh8xi8zB4RoRJwQacZSqCP3yjGLMDV5ZM88vRaeePjm2yACSk98eXBw6mXmvUaTmWRLKddeAX96Tu",
  "key12": "Mwa2wARcYCWa6z8KWSgrCvKfou5C1gZEwys4NiRn3qxDaEDcMvnNf7AsvA4vL1umsppN4idX7h8jcSXCFYhxLgz",
  "key13": "2pL8AurvU7T8FQYjbZDDTvoK9TBVxqHp48z9ymL6tyJxYTRqo5JXPuMBdXhSe478xnWLUK7quMmVSY6saGhVfV2s",
  "key14": "4BNVnX6yi6FTR1vXWHNVFCWARqnsfibee2F2yZh5z3LRkUVWAHPVQqVm9fwD81ggVp4Rjkozx4o91RUt9vnTshSX",
  "key15": "uxxbHdxud82PkwfEE5WxdL3hi1L5Eo7LAUcguJ9BuL98mo7qpacqB78stSvKCbAdXufAgutMDcFwK2JZnSyxCd1",
  "key16": "541ofLx7BMfmWgxGDhoQ63tBYkt766fCU3szeuV9Y8qN4CKrdMynUUmLUJGwXid6x76Uw2DjXcgRfgkGcNmkFVPB",
  "key17": "3ZfMD2g2PwDJ3CQPABzwv9DiZhGs9qjt2NdQbjwNapnmX66CevLAn7hoCjV9WMLg7LjFrYUD4JxCLUp4vsXKzpKP",
  "key18": "5w3QwYBvKEc22oXLv6pTtJJ7Wv4DNmHMV93MeqgorJDgvSZXUZY7fZ95epREDpwyhcg1fKWW7bAD9MA6Kpaz1xyG",
  "key19": "4kESm1LovcgE2BTrxeYMMy3jwUPwyapLeeV4QEPR6ymKyuS322AsVXtBgodJzULfm6Di2dMj5g2d9mPot78JdSSe",
  "key20": "4xgQPBp7fBMTviKqaPYc2xhuD6BZyURgjXkAUQ59f24m4L9xbcrfGmLnWsfsa3UopHv6qsQwbPquAkRF41ftPt5L",
  "key21": "5wdHd1XFV6bn9aosKTvfMLgT4XvAW9ZA4gEAqA92o1CQXwCJxTNAVP4HdnKCeT3tPbwYX6T6vwYsJ3tyPXwUGBsg",
  "key22": "265Aq1VEssMwGj8NoEG15t52piUk22D3c5E1uzNMZWHfDQdX2YNRK8hjfypZNiFm2GoJUUkGzU9NLB8WSyR6VWfR",
  "key23": "xCjtWWaijw6jFQNkwjLeX1LfhUGQB1pGFD4mwuExu9AEqJP2CcHcN8nE6D9mbVtMbvEzcBS6W6qSxBfDefxxabU",
  "key24": "3nCyyJpWsgnTK44u6gB4xdJkAfjDnVhfFRdAmFr8hjTEDhktALApTezo6QUBPu8VrCJGkyi4kQ4ZvrB5iFsNc6iN",
  "key25": "2XdHc8bywASZzWDky94jSAFSMjzaJh2J2x7XgSPKvYH8uQTBah5A4HdpcREj35aMk4Hwafh7oEufkSauYePh4tw6",
  "key26": "EwbunGogz3XJHNdTd72VUR4z29ah9nVHz5sxWQCiU6x7oZv3xPGZmHKzKWU942wgq6arqKNhDemHhgrib6hTnjr",
  "key27": "2iY5ArwEpwis6RyqjnU8ef7djixop1b9urRQiqfA4eY214qGwxoKLeiEM9t1Km7oMAWNYWQtA9ZSCbJ2BY8zQoKp",
  "key28": "5ha7UbmkoLZtyzLskHUjwMYFrRK4zzd3uwrK77U5owu7QDPdYRxjbwGBJwaSQpygYfHDcmpWHFZKWo1YvJJYLPAZ",
  "key29": "FDLKY9ha7St67u6cVz6GC63Ko3UMZZYbQqeam96LztU2j4HKzkxJNPBz4nfyNVUbdL3guPNURaCvBZveCCZjLEB",
  "key30": "63GR8SqP7w682aE7SrFieNepQQ4D3Zs2GR97k9fsRMtHPPSECHaCsfNDBj5iSoEDkp1vcVKSZSo7R661mQkN4Gnw",
  "key31": "2krCER2Hp3krEbV3YpeyFeLh2k149ZGuLcZ2twZCyrxrmc7pHFBPt4tMRT8uSdN5XwyHsKf79pzHrpVuUudvFmT4",
  "key32": "4oWkC9pVwtUeBXVvELS7FbSm7jWjtm1ntpZ8T1aW2bykMgzryNArd8rh6KeSyW8XZvfjZdWMLFJQahVCUy5HM6qx",
  "key33": "2GNhrxSxgjRdPV747Pp97moKdQtfb5XjcEwp2gktiY3bA98MDfrFHx1WECAu3vih8jmoUt6mz5fBLgecMxhrtG5u",
  "key34": "wUuAAhXkbgP1mFftY4UdG5uhhFPrRxYuhnh6BmeFeZsM1SryotGNEx9NMpHT7g38PQieWZvkwBAuMYTaSj1UGWj",
  "key35": "3Aq1hEZQR73jziBmoDmFH71pzm8awvZviXzvh3gugyKgKyE7GacAFB595wQKGmZdjBaKw4KdMs2B2WXHU2JcovYZ",
  "key36": "PcnoCvvRQ35VJw6kbH8i141121VaQi4o8oHVApoVR5NnQVc5VLmGtKM3RLJFsbMpDR6xziB3h2cG7YJzVW69Bu8",
  "key37": "3hZWZ2Gmsh2HurCcd4Vz9f5Q1DJgTLN64cjW1JydvQb35Hs6PPN8aFTnFK8XpXSYMyi72zVZbL6QkoiJdmKvVcmQ",
  "key38": "4mWNLMiyCT2xvG2KZi3JuAuRJN2ohxAqxtKZzFMULgEps8yv698REPxbnEEc8Ddb5ofa2Gi4pNDUPGLV8ckmQBpo",
  "key39": "36KjwBLvBkExH8rYpWNw8CAbazE3pE7quBtZU7Z4SJqPWyY8j9vu2CbwJNw9yMmbtQpuVa4acDsZyavMBpxX2QPe",
  "key40": "3eCWHuvRY7kdeieseXJk9NenKvA7L8hDRRHrt7jBCt1Q3wA7ETXFzt3bssdv8MTeJ4nrQmp2yykXabgTcWDZrGB",
  "key41": "4d6Yhujyt8v3bh289Fjtwob9TmUuALw8ZDYw1ajKTnkjXsQCeWBbi6twHv5RpdSe7A3USqZBaGvM7aLgDY9ohzvx",
  "key42": "34J48oLvKDibj9bHjriuZEL7dtx5sssBRuKY3v1dF8DLUvn9P4kunzVEnfLuyUK4k3UGkcmmYY6Qpsj8ECXXAizw",
  "key43": "4k63eWc54duJM9wbrGa6CuPRAoEihZpWUypQF2uWpqxCrGNJtVu4R3TNzgM71wWvKf7CKtovzb5rAwC1ygmgztHV",
  "key44": "2ZL9JWjF4R9WG1Ei4sTYc4ceh4hBuikdzPAquhMrXiDXVytkiHJMahWmCAM8vThw52DMnDdzVn4sbsgTBqVNCVde"
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
