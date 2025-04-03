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
    "2SMjKFhqe6rLjUobe5eFt4kqQMbbRGv7yvD6e3hscUKnvtRGqrzH87GVJbJZTiZnd4ZdoP8DW4CvLsTzxMkYFiMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rCMZVApx6BhYtBKe2WzgLn8pipr6WFqi69sPqGBjwFyNeLXCZESSkn83Ex75iLdnkUyYT8G1fhUsVQbr7uefVD",
  "key1": "3qDU3RQCY7Y8k6QxXWux5ypo3AfjACi1hFW8StuqFtGHkezNQ5VFvTU7rZK8Xs6kRmMsqXjG1We4dtJYRAMMeeqi",
  "key2": "4Eonn3PsKWDYnqXKTAmaQZhQvZmaZeEoFaFYoduTwSS4sopHXYuuGTTrdxam84Ujti95TTPA5CPMnBZNcAkrMnKr",
  "key3": "4v4EU3P42rxmuDD2yUQMtznV4aUXQzxytgycKocDRufPfXUJ66xnGwVNLVuwC1VfJmNUuiULRCs6KsbAPmwxsYrF",
  "key4": "3TRu7mBFJoGHbeVcutemFr8D74ahSwgyB2JCSeDmpxrGHHpYLieHLvAzbm2oMqs1xDY2r46yLNrHdhDS2DCG6N6Y",
  "key5": "42YBgExY9FW7bhwBmjL36DUZaaxJnLPLpAkee8SvbUDzgSAgXbkdLtzwgFqdsus8Gi7oLyVw8VvqzgDCxjsMaFoU",
  "key6": "63uKn3bmaJhsBP6Lno3PJa97Wfi6p3zvyAsWMsTmoaqeVXzzmGAewYuMdnkXXfG8HbYzBRRp5jaDHv7A7ruuTTzW",
  "key7": "5X9yLp9oUwFiax4zYSTMnnwRyNHwt7NuMxeByunrsPPDtjfXhyf6NwUhiovqprvTxG7C9QGatp5GriNMzGrdxjis",
  "key8": "4Grw1Y4kuNwTsWDYyWWGPyHP8MUpzVzsDXnQ5pdNBePD8vNKJYro3AwieoLDxG2gUcKZApLYWifD23eXDM7CUeiZ",
  "key9": "2rTkUPZd5k8SgoQKUaVEwYn8D6NJPxpnShoACUD8wywooY61EKSRGurTNYkwrFvhU17Ud93zHK3bf8EaSgrcKQQg",
  "key10": "2N7me6h7B5FVPetHi1pp9DNuJQ7mxtRsJZaTk3twxhbANXDdsPAHTsCTC667PbQ31x8ez2g8kKC9S57dy6RsQsi5",
  "key11": "3SvdNAyT6L2ZPqM21ZVs1RBxKephb67BDiVV5GKz4AxgjrVqtq3S5rTqjFrCc1Ltu165ax5uR7KckeAhpFNPFTHQ",
  "key12": "5X3qHmUwJv1piYDiBPm4MZTC5FcfbeU9v5HqBztsDpYB54YsLd8mzaRoHMr4BhuvuzEhyq6k3KTddsfwGXBsx752",
  "key13": "Zkg9pBMF2WkoCPPcRLqtdYVXtr1XayBizZ7bBnBwFjm4FkJnPyVZNSAGTuTGamJXRtPmuFqWtoT6cpQryZri1mF",
  "key14": "4W89BXEVj6A2EqJqi76rLX8VPyPj7uNsPSUsNAcWLKAYG6GKmvhknnqcqkjacx1Hx8phM92WT3wuyP1Tzy6oH9FK",
  "key15": "aiCifCgaBFsP12cw63y8TAkX9nKBk7UUuZy9LrSBAU8EGJBaRGGwLfsEWPTSd9XU4ZecABccM4KaDikAc9qdFu2",
  "key16": "5XBVwdJAQkdPvdx4GNCfLJgDkKpFZNyeUr6GFaUBDcqDVUSyh3quUnm2aXJkR9P4G8kNPsPnB4vEaPbNSg4iWY4",
  "key17": "xQL15Uv7PWut1snE35FP8PESjGx4JbChjK1Gb4bZg6Bvxf79mbmBpamrJWpGJvYLoj71Afy7jqEZGxrFnZvSU5i",
  "key18": "5zd1Y63yaJCqgvmhnejLuXGSf7A7aWQ2gmM4wJn2PgXvFSbQGEXccBLj32xyCgu1TJSYc67wwcPtp1rDLncn8Jpg",
  "key19": "4AqgWh3dfg3ETnYFxbKq4ex1DGhFAwP7iFDiXMUJB1Vm8RYGKZY1ESRMcDzrx2SFZ5m5bsZxZoCiS3pevy9TMtBF",
  "key20": "3WiAsinDeFuBKzgax663Czb2sQX1ioh9YUwKYwVv8SH3oUEfKqKthCBscQit71834Lozh5UAsF69TUQ4Wi7qNVyp",
  "key21": "5mQozAaFqRe9neniJdyhJzqPS7q2fq8gsM993MsNZtDnxns9TejauMiRhe9TbdbGcMo5in41j2m34PjyfD3vMHoF",
  "key22": "35vJ1o9kjpRrmyhjnafBymJDUzd3R9R8Gwqjcx9QL15dhgrnXPYLTXgzUtBbYEk1XpHYNih9qQho9PwBmTLuVhVX",
  "key23": "2xh76jMPzaj42eRpVPxEzvP6gDF5CWLrYUR94CBrdeenqqv1qYrp9wXM767GsY2Tzrtq8umiCE5JSWyK2uBgioFs",
  "key24": "36yKh5Q55WzEJFXa4UyFWPJFhGG8T4Gqr3fW9zvQzWQnCSEEBvDB63kYxc7n97XmZDkfSeFsMaPcdwWR6FNhxKYy",
  "key25": "5MUSbmUJV6PS7S42VGzpQPHq44C76ngfzjFL47T6G3fvwoEUUMvNWLsBJYGfdUutLweJ6SLsiYyczxyMTwNerBiw",
  "key26": "5Zsq5Ap1SZ1Uh6XR5g5fiUzAxbCs9Pyuujs1HajiJHyKNDrrd37MF6PyZ41Z9vVRZGtiEVqdSJfttsfDQKnw5cCQ",
  "key27": "28EHhYV5bZPQd9TAcrUCGCWVUHjLqBAwnad4ADKhXZBioN1P2b2pcCTYFP14TEySSNTCUXhWknoxd16BCfJVexTm",
  "key28": "5926N2AWjMLxgdN6RVe2Ywrsbpd5Pyjdtcq8HKgr2urBfcHYefumysoCqSnvJwvLV12mCujbh9j4GP8GCiyorw9J",
  "key29": "3Afd7o19UtVYN81J9pBDV76xZ91pPTa7gyhnqSu3B8u25e6cNXTG2CiiLYc14RtUDnxQUHfXPxe3YQJHG89aXrjf",
  "key30": "42mYLkbn6m9hjD3ko3K2EmoPXL2Bpc18DefV46NsuCgY4tsBP6LXpdMFgq8hur7SEA62FX31TzumNmeH3XYMYCKb",
  "key31": "5oMG5qzdNerCNPM3FVyNcb4qntDogxc3qK1Png23xncAvR7CqFFqVP6k2mHva4iDgGXYZ5Ka5MMZDwkDGKXDkYw9",
  "key32": "2jQkmtKDgHPgw91hz4DZRNhziRWrDz2BMYxraAbBjWBpKeJWUBCp2VnHoSwBef3Z2368459xqWBh7u1cmR4HDFTb",
  "key33": "KaFtsYocqh1T8jTxnuYZLhAA4idbwtkTWgbLXynzzJY8aK1SxQLgWofLopE6ZGxGSwVpSVvtxF3PcHDugdCHVTF",
  "key34": "2ok2drrGmYsCEVrmXhM6Lq5UBEqwuCZBcaQB5CGCSjvK7NzUnLSqDnwfZvPZz6LQXRWycQtjP25SEEDvYcpkLbDJ",
  "key35": "4mMV9Cd61z2j3AWGfkse2YrXscJsw7sCzwbqVRkth8poSva235wNj91dCJHwqW12AN4XfEhnLeBFViMBNF5LNkc2",
  "key36": "3wBYfghoRJtf8f22Esu386PmasD4NhJo1VRigdhV9Canbe3ncKSkL784oh4guxbU2WnH4gJJExXYm9G885bXu7mH",
  "key37": "dEWsLUwTPeEq5p8dNMoTbQgcLyzSMF3Ydp82U2BHdovwWVaoXCpXPnxikaNtyCmr6n5vhirrwFRf3Pr4LnnEnDT"
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
