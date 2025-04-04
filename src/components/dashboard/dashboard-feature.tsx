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
    "3bMgjA4RaieiEgfTESGTAMVwQSgXksHryHaDdeetBNWxmCLsppQAVCvWfaKByE4nivw7NMS8nH2iua9AgPyZmBei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irbmp2vwmGKERND6iMmhPQmh1jUd9yUt5vVTYD1j1L3TeQDkt4CejJuGQhuHoZF5d2XGR5exk7qgYj9pbQnr6FK",
  "key1": "5zo9rLLXub7TB3FjMcDimpyZUWMRdYqHjcxNrtQcebmAHyk51g8vrBQNUBVKkZjWwiPsyBdwgkjgkiQMkKVy6dmv",
  "key2": "5MerMXVhHHoSQD5QeBrHyZEHL9DzWH6jZzJexppEF5G7wRcUC7KNz9vMRp9cvTYFTDh9tWJCJVLzz2vwpeTkWjtT",
  "key3": "5Lx5ZmrdNUnq1n5AsoU52HFV1iuHdjnMypkfbq7m3edEk8VGwefnLL5sQbjYXMveieJw2J3JoakixGfkEEosYLtv",
  "key4": "2j5DKM8AUwGY1RrhzLCpMemgsycKT5Gz8Cx65LLaVXpDkn3eenjhDJeNJFRjG48rPvgyuSnqM2dWoPpx5LDxqiAN",
  "key5": "4syFTMXCcsGTmgMxdLatwgHSkRkRZqEZVrG6jewq678RY5mZMje8eg2Sin6sHmxkdDFZPaJrNuZnMpFh2RzFtP55",
  "key6": "63j6axudPFjvt9acTjakY1sGWkkjS1q28aExJxp7VajQ4AX3LgtVUeTHreTiLJGo8EMUtqwEETSJEtW9ATSarDPp",
  "key7": "4SKjNTZhUwaJfRd8CHt9P7uGBwRHew1wG29XTBdtLPkzMPtKpbLrPTTv9RgSvZuBhcdN6J4hYWQJWvv617PqmPPt",
  "key8": "3SGVunDZq763Si6M5akZMDjVxhCFyc7ijohssFNAi2Jr9Eon6zowYvF7qYLvkJZjkncPqg8iwZzGd8UfkVxN3FLe",
  "key9": "63fZ3Vn45fo7GypTGZ7tfnNWG8aBmWiKcsRra72cwKJTFFsLHUeo5Qkyo557gU5sdY8PJQxcthcQ3DX9pN4h46Vy",
  "key10": "tctZxXp9kFUikqT2RLGJ3d4Q4PSDQuPvSVyuwHu2C1rc1YQtRDywFKQ7WdrwzhR7AmVBPmQnHVEYg4L4sVBgudN",
  "key11": "2ZvBpaA24yPWZbK3TUuVksayd6uYa9fezANYeKLJUNvpGPY7oM2PXw7ueCxAbJvpqkbosPRhgVAU1ACPuAEWGFis",
  "key12": "3SHp2MYr8twKKb4SqxDbT3qkC8f1k66RD75oaq1oDgvmTMiG3bbFW9ED7i4X9bFU69JHpnGtqrzVdZHeEVTiECDt",
  "key13": "2JXYkzb9HX6hiur7DhLrpXB9Mm551ND7uiwiEEBWvwnUdyrRZSADgSEurAY2KPjiM2BDBhUDPYaNtmg3u8ocnDgu",
  "key14": "4VRY2jy8S3cnUUG3JHK6GdjtdzqhXMsUoLN3MKnB6nEP2UnSn5jp7nnNMUPxmpuSntvVBu1JRyYW2h2Y2CJi66Qf",
  "key15": "3oVykLhdWWatsUCvjMdvbNr3s5eRKCWeUGvp6jJnPbb88JCnJwsuo8NvVPB5GCmxbxpVfH3mpuKpgX9qgkjoTmDm",
  "key16": "ZQfQ2aqeZiB8ias2QcCoehpDrCs1DaKykmCqKu2HxSW8xzMEtkmAHhjkt5AAzZDeqkjxrkZ3utjEnscEk5u84XB",
  "key17": "2V9s6qKVeFMUyXmX7quXxbnBVScPRfUptaTUSSFtS4ERxkg6dyHzq1HVbBVS3GAiZ7jP1qKVTuedkxRhV25WFM66",
  "key18": "3LkTaCq15ypMsv5HT4WhosWvypupigxj758KPMbp6Vxm8JMZ7XbrDn478cEAMnqFesxU23uLGGukrj2pAAWoKSFG",
  "key19": "5Y2jRSq8xvvsGqegVhAUBvrjRQKT4T7RvPREYKp4uRw2N1D35avYTy6cfdVEPF4SeiHteA8sN6fiFkZ2GXvQ7gsE",
  "key20": "p7NSCCERCNoYJFeWR294zPm3Mb1kWRg4p58dBdw2dYs9v4KrKMPkY9cchgtHygELFHtXkj3soyvnMxqnQkeFao7",
  "key21": "5pBp7KP3sCPrRLSDDFMLiogCfUfL5ZDzyquA2fiWjfLJu8WLjExVFeEJN3U9s6c5GijZuKPNpZbQRiwaz9qgo9L8",
  "key22": "5mU9KzUjSiYNgdwDuTbfutwjFrZUscSP2CXugRYH5x2KbvnWqLpioPRXCshMc8emGgwuTftCpTyUsy6KR5cv4p74",
  "key23": "2Y6VSiirXT8WychvKFGvQwWCGD1G7dhbnV2f4xiN3SSzXHDKWapuLzLwDcV2Jw3VqaBiha9WSk2YZegGkXLxSuN7",
  "key24": "rMaDf8bipbTEemdqnyt78D67HSapJPnV9LA5yTnbLedU1gFuQAnXA11pAu6zCkDcBzCU7kd3aPWb4d9SPQ9MoVg",
  "key25": "2j45v3cF6S32NBF9N5E5H1wJf87KEZdsxCYW31beuGH2x8zpbMh4xffA3L9zcAetYuVhs613pjj7BWQ4CSZjfSRS",
  "key26": "4GdpCm2f7czw3bu2tZGPbVYoVHE11cscMoyg87bYjyJcQ1JMTUXNzTx6w8yukZnKqxir3sRxheP3BKbEXVVn1awB",
  "key27": "4oquSh9odoMJtX7Ab8Ao3nQgB2mesvGijXXDx6mXL4DejET9wu6t8cVX11Evvpx8jXG6hHYme9GDgkG8fUQkiLeC",
  "key28": "3ddXLNDnNomgMij2Q5ueJYPBndhZ7qDLCPHaLN1WgpsJ7T6tU7393fy9SeNs4Rwxgc9Pi8yxL1H7ETWLeaEZrzMn",
  "key29": "NMuWCRmqCqNd5nS7thDAm7njwsWM81a5nPgHWmDZdoWpG65ztYA6GLaHPLVzUrmAjZgynukyAFpXukJyRqgAYDc",
  "key30": "4zB1TxZjNa712qPzLvhMahs49D8sL4Voa3gKjtkf7L4MPEFDL851dz2xGNyM32TAAsofnUMdox9gmj2SS5QPbNJ",
  "key31": "f3hFYqGUD85dmCmGS1S97Yjby2MWqTyG1BynPbZoBQMEJgKQWe1yK3VmrYhBYKHrj1pKn1nLveedhxeDwY14dNC",
  "key32": "D2KUcShWr34dZGnfWeSeCPtsKk6oGqHVDVr7AxXEJ3kjvbanwaMSK5NRRjy74NjQnnrnxUjKiV5eBXLpQirSuSf",
  "key33": "4KXTUBHyJk8vMahSNVHybaP96AYotWRxCyFoeEtprnrGWeNA6558c2QcWfrwqNsn2hdUDyr6LKaBwB2PtNbWsz92",
  "key34": "2fPXSqAysKLrS2tCsichRbnxHsbunQAsSdv3svBQimFogTBYEW7kHbw1BYgpHHDJGKED5RFsNcpBvrPbgPbb5jJr",
  "key35": "4qE3EqJ2hUXexVrpqaXqrbifvUuhiHPKfjnNk4Jw1RkYHAS1r7BzAnQrFpEAVKgjraRAGdzrBwKWNmmQb1RoeJuH",
  "key36": "RJ8bDF7YDoYNWwJGRMKGLikKyhHQ8qnncva5mEtknXCRT8utqf5RSHVL7Rr8gw7kHYaMY4SMLt2gjYwuMVuB2MV",
  "key37": "2uQCoTosThubyDYcq28j3usMAfawfArQKauyZ672NYQ6vWkNgsKQjapU5AkXyU1NPDVkLuQptnedUyo4ANctQbbN",
  "key38": "3wjQcR7KuzNMrzTA8urRhFAVFUWY2f3icFwRNAmtWW7zppLxrab4rwwLqrgaodzYFvmYaprcq8NHsfR77uSz1Sh6"
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
