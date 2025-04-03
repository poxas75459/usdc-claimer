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
    "21o4TtL7WFnCYN6zB3PTeViCuxNpigiT9kSPFyER6Ugw3H5prgAaa2M9MYLAMu4aUC3AFTE2UB14jrqEQBVq6FQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NidwTTDAxPRteH1ZBQVYfECSxCkL2iVpzyJ1rkPk3xzE7qVSuzGou8bpMBYursvMVvJJbPC92R7M5f5QYUBizra",
  "key1": "5E8zhr5utTmEcQATs4TVC28HCvDKQVovEG17xGRtiNkBLTMuvxrhkZpbmqTkqvch1NraTjuEdUQGj7aVHTcNTbwL",
  "key2": "3dnDfS8dWsDyLM79t28e6H1SLEm1HBG9wabU2vJJyCBjeKyjEdwF8qeo72CjfVwhfrVxXcKqcp4izxwXW7aD7JHM",
  "key3": "43QPL54szbP5eJNonwaUtNYiR6DDg9aUUbqYJwW8HSxhboowqBd7hUYJ6KrzWEe633kxMB2g7cyFh3mSvKxAZej6",
  "key4": "4JcePzesjvLmryLZ5kZqs4VCmm5mPZXXPf3Wow3vvsDjK9JPdudWQoeuit4cbQtoJvB1MTFUWPSCtyjzW6QFVC11",
  "key5": "4UACiz5SvpgnVHwiF9m7xXMbFLxFjmFJZFMAhc1XoXXnBS2Znqs34JwACFnS6xMLWJ445BdbC5PwcpSwX2vC7L9B",
  "key6": "2tmzWTsovn6Kx8uF3DeDm2y8KBdsC7B5regxQXVzKUQm8Jo5PdmnnvF5pZpAqxHdHMxSMU6ZsbWPk6uQWtGUNjmG",
  "key7": "xRpR68WspHTuGSTjnjwRnt31aMTBACNRj1uA7HwKQGv5hm5j5R3caxjmGxEnrFxWCTXpMcPy18WpGqVZNmqVXez",
  "key8": "4YVVpYja5NvevACmZ3NZRfgNLNjUanJS2FeAhG1mbuyN55NotvfRHw8HhXnt1rSFbh6CEwdPL3EDDErYCX3pHT98",
  "key9": "2soDDwEEZP8cKqR1JXcrLFStBhySZ6ANT7G8LoZZg5xfr5qxtGcNhYW1ZQfjW3HuSLEJi9tUjgVJoz8n1DXr35tr",
  "key10": "63Z8tbuiDY2jRRVSwWoAv29H6SBEaSQTj3RzpMxdyXTmpPQ4D3i3thKKHcSegxfbDztK6N4oNNuSqSNydwAXCzkw",
  "key11": "3HTuqeJFU3CF5SXsBnSFtZBbU35bYr4zSi8pvLbrNg2mxsy28QDHuTEEybXyhtvZBmjmAxWqzuEst2ZssQGUMwby",
  "key12": "63HqwA36z2HWHcmCV39NPvHy7TnQv77kpEPKHFoomUeVeX1nJP5BaV8uCNjnJWKHwnYWxUfCLHWCvHRvA9U2dFSa",
  "key13": "3N4sgkSGjXuwDsDDdUsstH1kRNfYY9BHvJAz2KxVMWx3SZmzL7Mh1vD9cVMo3wWx1GQYHhwugK8scn3DHBgPccJm",
  "key14": "2yXrViWxkUgUVLEjFKtFRj1CH7XYxf4CcRYcej4ADLwzruweJUyqn4ujTVYz8UuBouTYNfSBFmQPwYPefdQ5ZaPQ",
  "key15": "63Jp8Gzz8TV94DaAjbxiSGhD1NVEGS372xv5DDDav5fUMeVw6udFNwM7AYczUSGQqYdRBcGiZ9HNMXdU7qH6hNys",
  "key16": "jxEeMPXCsKqtMeCf4tCc22WLmJsG54QT69TkebF5nUpcECfLJAvTo88jpG2eVZy2t1DUhFJedAemLzbAsLteQq6",
  "key17": "5GFbtB25nxKfoxFzqpPpUtYryrtK6DxuS9KPJbGfEsKfDWyiSUBifThUrsqr3fAs3tryzm5VWvDqaTKrVMZCGdAh",
  "key18": "479E8EkD3dHb98vpDTH9CLi7XYukH2qhcDaBaugxDj4Dwo5ZXXvzZMcuSZMwH8Y4fi74WQPsFdeE1UJymrCkhJFo",
  "key19": "2XuaaqYhNT2wmizpyNH4hkinZhofPDYzPyVc3qVDDXWLCcEW6dirPbwEMqgaPawKszbPHeiW3je37wB4m2FjhjwM",
  "key20": "32Q4LAxgjDH2rwKaosDpRvmmVDf4TCvojKu9upyezvR8hZi7fezPgVuh8SA9ea1QDeV638e66Lw9b8R7ExbAvEj2",
  "key21": "5s7m2rnMimn8d9Uam8hj2Sy4ziUomnGvat3a4QfyW13i3XPbRqqCtzkPeRaPRwen6zRwQFMeSuJP27tmmnBTXuQr",
  "key22": "3qKxmBbDtewngDfE1jWp1n9EpfpjMEypHgiDEep7xcTzYRsrL7NFusKMkbdWdvLZuwMjsJdhjnWT96YvfD1f7xgJ",
  "key23": "AgAC7hejAnAACn7TkheMZeaA2XRjQYFHxcvs1ACC4jP2Vx2LVD5YGcBjfMDaH8rEp84PxyaqYZzH2UzkVCUYhSd",
  "key24": "LXTK8JTBWKyuWfH3jD9o7TpzFs4JdwmkQ7GTVmTYgMZnDCPFC4y3JdJeMRPvbXAzA4jG4S52UH6A7mTvF1SySoc",
  "key25": "2T9D4BcpGf7Fg5kRKmeQmgMD6xCUdAhUaM2Kh4vZX9rKBPAVqixKKtGVsGEnkXvaygLnqaK9jeiif1Nfnipq2zTf",
  "key26": "Vz1QgEmz24N9G1sAgbAKB6NLU8wfoPw4ADTEv7dFdB2bueJzscRQxM2GFSn9ubtmCXkNLrMjbhkvyyQpmhd8snh",
  "key27": "5RzVAHfC6MAnnfMFXcfzp4BqebHhYey7Ya4QugSFo9NMMp3MfiPX2maDCFne3E974ziW8J3hfwHxpmoetgzKwYFP",
  "key28": "2fRK1cduseHqXrNp3CExzCenfYZeBNzGMkW26DJs5WruXX6h3iPJv7bqbPwjxgR95ARX5HWZpG3mVWzhXbokTsiZ",
  "key29": "31nzXd642DiQBrzK7kMuujQ2s4bTHmtGr2qFoY18zVtPB882fAHDWua6XAEdPapMi2i2toRurrbpBpmSi7MRrjug",
  "key30": "4At99CbdHeJzeWkCsPHW22zhZFHrjEJcvfL8eLKCNEHtjD53UDHMnJGdZktBNAkxZe58LUKK1SSHTFYuNGdAEQgM",
  "key31": "5gucedsx5SHBKtuim7urSghPtHgNWevNduv77Ro9uvHUqzhfqV12b9U41tBfokKK9mWGorAnJD9r3WFdJHyfbmx5",
  "key32": "2pgcY7PCHSfQggbTxy82FZSy3A4mMFFCXUF7qxcc6e3r7seh9enNpcuoiRM5LAwCM7bSXsMfPQj51VZeuBxkgisF",
  "key33": "47AUZ1PG7tuNsEwKNmSstLSWq1mEvV2mtj4f4vEVQRuyMaEmqDtH6DXR3aHTdEBkQRota422LbczsSe3S789dVPJ",
  "key34": "54xDFgTevnMPRSG1U73LCrKtMNCe5FAhzg5YxsBYJJb5Li9Daq5yNifkkE5YGRFCj6LgYnaAzyeMucDFMswopMEy",
  "key35": "2rUBVZF2wECmmjqHvH8ets9Js495nxm7qQ1dt2YjkUdAD462oVheL5X9esNzkfdQckvkRyMgNgdCqjeB4DW7c2md",
  "key36": "2VSHBEfkj7n6x4PaTxSALs8btCzbP5a7EjbS21f4DGKoNTa4ugRsjfFD9Cm4cEpJSMwkbZu14jKE4opLzBtpjE3e",
  "key37": "VWMw9iZNFYaPbwLL4TtaRxC62YKf4KmQ5NaRL824uw8JSpDUxJfsRRUFwJ2CA9byefSoipxTM7qJGGFALbh6iAj",
  "key38": "pNpY8E14D1V7aG5KtDCqisbSZbBGwD5bNEPZNY1iXgrQotRrkKUZhJXPoaT36PHVoh5XWWgXJPJMN6JmuKfMtPW",
  "key39": "5bg2FMjJNUz1iAUSGZDRv3LHS1sUT3JVxCtE86nZfHPsQs9mz1sdFYbTUK2Yq4HBBucJJsG1yECQK4iUoj1iWWvL",
  "key40": "2iV9qdiDbAdgv3qwtUE8QFPQhmunah2XkYuYYBzQFEoehWw1QUH5m2PCPFSxk5if4DiH1Y59Q9oGyu6D8Foo31Zz",
  "key41": "3A4K8M2PkzW1PkJFNmSk2GcFwok2BcTB8wMzePjtwaumJvw2S7i1ikbwi5NuaKXv8fZaoNEhJUnzMgFMRoVQVEsZ",
  "key42": "4ikBnCdWpjTdGbw7M9jfaFL5D2YwTiiZEJPjyX6haXA9SEf8xzRRJ4afE6jNKkEo4mpo4RnLFfYpkiBAwtqDJccC",
  "key43": "1xSVEWUezuJbnM7xaX9XEbyA4t29gx7eLxacshRoRxHPdTyjwtkHBCpc8xdoY75CcSqjbcve1dFLgyJXpsMiBf2",
  "key44": "3cGDyDdBVVUyXmXGUefbGBwHfsEe57UXc23c9xTyi86RdpJExJVfma6R3rj8mh4hxR8oqi51bcXG7ysohdrhaqzS",
  "key45": "5MC7ZBJCkRddfo1SgHHDpryPHEEHS4sXZZe5kPwrL8Wgh9SCEfrgFxXfbVA8Tt39bgUX76qYsmRTnsxt8yR2nPVm",
  "key46": "4tn4M3Dn1unxnCY4Vt6oQP7VTcjQ2Y6q3VQ3W4EZLP84EDuvcE6gsLmMNaEnsjycBZMtaqYFyyoUtCds3WReofLK",
  "key47": "3SncB864iLL1bWp5v8rTTUeCHrtgxzKEKMDFjKEuLBndTRBC68pDutN4RHhX7tCpjfgAitRt1ZUJiZ586xe7bDMM",
  "key48": "3Qgk3y9294VmVMb8m8rqmUGnXEf5ZgzYrveGSn6ARqt69tyrdDoGVaKSCVabajMT71VsfRRF2e73QXk1HNtsXXd8"
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
