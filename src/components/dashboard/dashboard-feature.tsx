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
    "22UTdfJ4A6WU6dujEPEWRdMd2kVRfVc5PxhiPh7E4UoK5LVPqnr3PtKGAUuZs9GVm3UmDGuXedEx7TGDqDwBTMTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvhUSqExTH4zvS1T88BWZsfc8TrfB9anXiQ2FFKyUEDU8YZWTdfyd51MwwSmLhUewLbxWoFyLj86KcgZdo75s7W",
  "key1": "4ntHdK6js7LvdUFC1xKupjExX2aTAeKvZfJ9jFDU96ysiS7mW6FFEWy9verrRxubYmvVBUF4oCtNwBpYvBMbQbHQ",
  "key2": "23JrqM7oGrRPoFAJauYBWbEpB8KijSfwWxqVrjxuhUAKPUHavgdfbykHjcnK4V5MuuNsMfUBGMYrhwU2SmjrwNyS",
  "key3": "3YyPEXrdgd7yqRLcNG2EoNysbreTJRP6bJL6FNeMNnYduqBzz5ZWW6kjHc4SJ59neQD3XR3Bx4LzLre8yCjbYJYP",
  "key4": "57D2z5gLSuQQbWpe3fdsd5DivmCVxhig8792J2FLUSRPbC4MfTwQ2ue4BZFyEqMJT6LgTjjaCnh75aYx8nm3vWPx",
  "key5": "2vfzyEMcaTqHFFLG197QPDgxaa54kK9vAjhDryHtdpJw5C9yBH53jP2rxNu8fet5F1yMx1LMhQNwziZ2XrzXHdnB",
  "key6": "BRMUYJpk1HQD4qmZHgfaSX1rnkYQDcBs61kucWxGf4duhuGA2pvrZBmQcwbzpPNMQAsNo5ug8fUYQEjQHQCnYxL",
  "key7": "5UQ5pZSmtM1CqzHDk3gYBdsL2bt4TM3EQScPm9c5cyrGyxx2YCAGpwRujHC56zBRqDEtBUfcwV4UcpvqiE2CuaPe",
  "key8": "JECJ8Ji66QC3YVmuekaZQBxDpmXsddx5sqJghiG418HR5RmtSKcA5ZSsnvP5jVH1fKroUnuMRN3wgzMhQ8rSHpu",
  "key9": "3U2mCyZyLgXKGREzuYzzr1DCEZk2tEvsrHZQeht78BdCV5RmDso1MLxSMxyYvrQsJBrXv8xCYwWQPgh1Vzn9qGpK",
  "key10": "2TQGv6DRufrHqFje1FTiiFFjwjkU9gG7C3CkWbEDTBqVLWcfJMSujbfdv3PyqRim6dTjA881a9LpTQNA2J7TVKbg",
  "key11": "5QWRshhCjJ3Lx6JqEzp5sKF197EniqnkLqhCQjAuMr3tpx27rD95tFgPwfvmnhdidU9QAPWZZ4qvSi7k48n9bNLD",
  "key12": "5csvMsydGA7eaKJDA1tWwp64peAyUzAqJVgfpKLxx7gA6NVFebNzyBoHeVXuKuGw76nkRXHkYGRjcDs8JJZeShd4",
  "key13": "5MUsVW48hZPhwNuqiS1X3EG8dusTx2Nr1zeGbQYSr27RDA3xkTwWhb5YMmGpG3dPn7fbXNPH58L1KCLajNYmT3qT",
  "key14": "249zH9u21mwJuuJsQ7PPBe7SMSFQB3bSs1oPUFfhqXrPZnvBBz5of19STKCocSL4RwsM2njpXRUZsE5Bkg8YM7fY",
  "key15": "2G32N2WUPTfoZLGi36SzmehnRFvFQmvmbEy8Rcpyt74UR5gUm56tMk4YU3pSYoBToo33GsbvUwdrnX8Z74UFr2cx",
  "key16": "umQ6oCUbQc34CVR2nsb9eU8brAR8UzZwC6kbo5zsqQ2fYSNda9bmB5be5YeuioXjTKF4zJZFNZumu5UPrL32pDS",
  "key17": "3BtswvsCFjAteapUmD7nCE1zP2mn7S2HcYLNnWdYNQppy4uezAGYPRscfobcWzaJUy8RsaMmEvhnEjcovpzGfehH",
  "key18": "3LkZjpppdXq85583W2bSXpUNW77AKSwJDXjH8qFTRrB2q3cV4ZtsQgFxWqjvBJYQNPKUGWmehZoy5GKZLNMZ1pRV",
  "key19": "3eSV6NAMK4Vz5JZJsCbuVZzWNvwpscMwCbf3LHx5k9eoRFEqEquYNAJFWJ5VmgUeuyg4bfgyLUs85EBwpzk69M5Z",
  "key20": "4jotzfBTM3NG1r3sJQgddQ5An1b1RW8mJyyGE1faECnvaURCekhhGqqa5eskt11VJskP2eh149XExHHEDpbxkLct",
  "key21": "39LieyfDp5ZTcmzgtzG5awTqRGiAL3BLuGDKrvmZodRaE1LP3nm1d8QzcCtCAbzkFoyBKjYsWpR61P1KGmeZ2Gj4",
  "key22": "3iY9QkUGxPczhxKbF1FTgrTrAckjYBdGGeULbJMmSGaQzrHUj61nUt7EfBNt5U527JDVjZAGBy9H1btVWhnAWRJe",
  "key23": "AEKTVy5VwpRvcQeip575uLySE9NHGTqRYw25ehyfjEex7jbC4xQKZztyfAdDEwY5CpocyCKeNKutbv1FkUo8MUi",
  "key24": "2uHLMMexSAPD3f11z3VQqq9TFF1ES6QrQAtQcpSKUpcSj4bckrnrNgXyfy9797Wqc4ykdP51Asn3E5htoedgxdvU",
  "key25": "TijmURh4HozTAHoWZkR9ac8nGxgDUXgqZsu1oB2bACkpQe6iJmt14sdvZ1cUBorNdnrBsUnVN5dRHq1WD32cq1c",
  "key26": "5Zi8cL8vrkt9Gm9dEyFc1E1NhBzYmJm5f8or2R14eN8josHNtHPCjctreGVTjQHpEo4X4VhJ5r4myNzmyPVbUB21",
  "key27": "PxFmAiqGzuPZNiJAXWMeoUTvukmiSQg68rN1F49aYz3hgPVGEf6kfzGAWBEZo2eW7D2z68o3MxLQpuDSmxKgB3w",
  "key28": "9KdqmwQdTZbgcDUvY9doURFfHemuXg5Wnnppoow2cRg4U68Kt8eKF5kQ5qY1vAuxYYmerhPEbaFZKPVnfGjpFCu",
  "key29": "3DZyA1BjDRyqAocjw8i9o1Uirk5tGLy4sxQm8ESyxrMcVZU6oFHBL8W318iQJr3rBjdYmS2XnA7Y8sDmgqTxuVLJ"
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
