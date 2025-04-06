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
    "3bwrgaLXhCCaKqfsaUn6Z4deS5UFr4cYTTwbE5nipGBuPYJyjYg24P7BjsKMH4Gjgpr7Z45N5pTdbpQGZztrJePM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61z9ppDavyfrBQwEGHBaFdS3U8xDhgsZzF2CWHaxZKm7wvCQEUeuUxXNT4o6teuK8NXNanx21DLJ2QVMKynQkx3k",
  "key1": "2UaMx8u4Zm95vmdEnaidMbrYCjNBHUuBC31hNApuFjyQbBx6Ajr2PsXkTc9dWfFrL3sfcDr7uXnAtAGi3G3xrypb",
  "key2": "2KiZWC9ros5ogRPqHENTBziqjRxVsTFBS9PjXoyycszqNeV73zwEVvYSMrQ1QhLA14eVfvrqNw2aZc4KQm1QkKoK",
  "key3": "9P3oK3KHEW8HkTdp7u3W67LjhDqWZNABYZUdrPhiH1QtLhBy3w5dyWGLjPEdifDJsLhgQ79FRKTun3uBG13Wa8q",
  "key4": "5stkPxjsYkXQw72u7SQBZKjaTCerq8R2NERVRH8icvJxLtkJdv4Gy3mmt2wXx1VrghBj8ZiXnFJZ98JLVpoVn1GU",
  "key5": "2L4TjdxYo7QXJkt7G3Vxycg6bBueAQAJXw7pieAJ1xeTm4jKRf5C92X7GjuLUcvem1yNN3RzWYSmTWx8ECJeAsrB",
  "key6": "3mt8DSdZ8LW97pCBeLD44Rrc5PQTNboFXCARu97D9n4GCedA5AN1z3gtmF3JVtYztXBzmgzZzLzuZXbzB5DD3UAo",
  "key7": "3kFdjc5twUMDtqYxvjKxLsiwmtYZnPRJpTpBnfK7ME7apuocs1uwEv25EpQTRjQTnc4Hop7i9dZN3KAujj7uZ5eV",
  "key8": "DFHydJHvj3WkdbPG2SCmPZFzAZnTJmMtp6f3dVPc63VA7BUhg9GMqoafxAHAKWNLDguZJuena4bo4QTeBmAEaG3",
  "key9": "51LBSmSeCicrQ7qFc6gJpqyfH75kVeJN4HhbnMwxYW3G2ccfR4p2KpbdEnz1rbKVxrNWftG9CjYw6mGhhiPMhiP9",
  "key10": "67Ts3pTcJHtQMkef8VD3xPsX4tpxQ6iYmmKQFKf1RBCskDKnvfxfUuwbyzPXqQKkmNF7s1BJ3cTGCB56ao96V79V",
  "key11": "1KFVNqAiFy15U35Gr74HsEQ9ZCmGXouv6MjitLCaH3AGMuXdi8ZFBFkPLAES6RrgQdvWFaK5BdyXnvGKsux19Pj",
  "key12": "4ptNFrHsLv9uwXjbrbFcNmRQVqp1kD6eWcmSuiWLK6XAsdfyzn1eooXdP94TpnnSUuh1E3z2LAV5NkR6nKVRgZTp",
  "key13": "2mWXj6GFAxG19usQTAripFhjQcS7SiNtg3p8VHnGv7ZqQQ32LBgv81oPVzUBi1Qo3ZnQAgxCyLf2sdHjhDkDWCJA",
  "key14": "4BshuvnKd2DgeYtxWBnQLEBBMdi7VBqWAziU2Qk736YWnDtRirQNkLrX7dQjvpUXCeGC7G48KNksZeMacS9wSCie",
  "key15": "2evSwMiF27Qeepjx76uBJZ8Vsi7idXszT5paN1qDAWDwq3Nb16FZV8sP1YButFMo4rWTdZzySHCL8GU2R6vf9y2C",
  "key16": "5Cf4q7nq1qMxLZXMKTRB8Y9TFTdsBwJLunefHRZ9BL1WT8FTf6s7qaygCkEMQXDfDEsfqaFsPzQnQReXHqmpcDVB",
  "key17": "43D6s85y5B4xXiRJzpubWZoXJ2Jk8fvTkrm5CoQL7c7LZYmmtZzSii18JppJiVBvS8eY9fvTy5Vrs7ThAfgC9uDY",
  "key18": "5aZYJWUsuSmDLeJvF4m9aNm8LfTVdZLVhDZcrMLB39Xjzk1VdCoLhM8eyR4WJN2BQVHUPMnxmWi8kgY1gVDT21Ro",
  "key19": "4ksJEGJDUtczuoUSdBynfYsL7qajMRocd4cGazH5C7FoLP1STC2yr4YobJbjipdZVsCEgkLr5M6JTdk5tg1gDVty",
  "key20": "4AH9sDS9Zke13PqJPZEdG81zNbx848N6dtqjcFp1WuH4xQZzjrYVqH8Fsw5MDzj6vjiuNZT1bUE3RMBoBSRo1LTd",
  "key21": "4SN1AHTkdwkWVJJPuijGcwaEq3Vdzxn9DGiHLN3GCKexgjfLhbS3Z2GiQEXarxSfVr7gTniXe4LHTt9QvcnsBcGS",
  "key22": "5VhoL3XMf7vdqaGUbWa6cGK97sSyxGvrjR4NPYKbsE3qSqEvACugfkYJmKudkxhDFjiXqaapBaBq4fBbvjcTYnRB",
  "key23": "2qnGjjnxhiuRCw3mEJgFRgG4fjWJLNqGvpSaNutvWkMkmWzbHqyYzjDrCCveh6VUQLmPQrgJ16Gt8SzATvB2zrBS",
  "key24": "22sSsje9hJubZKNZFgBFxQwofj7mPvBZMyQbkQNmETzmHmQkTJrGxP6rJJRhMCQq62riNH5m2NTSDWc3HrDvo9tZ",
  "key25": "QGcaSieKcMr8tuaYenkyrVqcYBJ99puvoKwDvpPUgAbmCsiADaCwwhEVbP7hHJphKb17VZRzPq4rEUnAD22sPfA",
  "key26": "3L86WJQjA7b2pw5QWdrGQjvrsHi1ZMTrwinFNikP6rC3ANXLEvNBNfTix2G3CQ2pMf1AiK3srLkJm1GoAkcjb8fH",
  "key27": "564V5HpFQY4DGVE6kEkYfHsvVDJGm2iUFmEqqDMufsCNFjp8qhPP41tUUi174SCMpUnZssiWUksu2ofagDQGZi3j",
  "key28": "5ZDu7MmLPe5qaRUEdLDFE949axk4BXpqAhRhx75GpjwjkNpnRB5VxSaFgh7sT8U6gjm8wHVe58UBTMCDM9GvsdTv",
  "key29": "2ZhmyNehUDYecvWCEWEfJ3ok4Emgb9H6rNMYhqiiMAtnyAo1mKM9aPcr7T28hhMXfLnxtcRKpSiqqX8QP94a9NY5",
  "key30": "2hdy9rcFDTSVhtBb2ABTDo1mjrJzjebekAfUpP2HpnNTJYXqL2WGcBdjbhC1CFGdoRthkWnS7Raay6tZ7woGScmp",
  "key31": "4ET6mTUtebfmkwGHnMomkkzXmHeiR5W5L62fxL6FDQueSMsb4VnobC5CKF6kDyn4EkySMY6ifob2gSHKZ59xpFok",
  "key32": "5TYSEDBU7p6Xr4SovFYGseorsmi2vMW12EaTbSJa7AKCdt7SjTU6XhChwkP7ZWWQ7UoeQJsUYfjXrNL1HzR2XVy8",
  "key33": "4h32C47YBDSUpBURDxhnJiYdzG2L94nePcFwN4mygZUdakhSnbpXkBknw1r6QhGjvhsGbCfXfZQShLT65viBfbFR",
  "key34": "33Csm5xuxgWE9v4QWohn6Zqc2J2AxaUyv7Mu9DfScgga4j4kZzULPWkMgYHLjSveSRaouCGgtHS13XmVzeLbG1XE",
  "key35": "2DJ8zn85Vv4Ri7gQoEE7YQUsAR5ym1NpY51C6qaPnqW29Uz3DRFHKjXf5EuLsS6uMofAkcmUkbjsmWwPvGuPgbRw",
  "key36": "39D1uw9bG7zN2m6zaXnwVyQeRF7XZLPgddiyKzKqHziFhXoAipVXbnFqtp8s9nk95D1LhTu62KA3UJ3rPyesinTA",
  "key37": "359NXSNoq2xgk1qZFHhHrF3X8JrALxgcrxyRRL8XPFLUyMYhjSoaCiMLo7aTF59qwRVBRNu5zJKSjo9SfKgen2qs"
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
