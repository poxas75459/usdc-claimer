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
    "4HaCuKPHtbSABrByJ58ZhVwotx5aNzYeaYx58CCJPtgDQ5Wi17PLY1LnUHB4qte7a1qjsormjQC5hCF1xUqANPcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfzueTKqMFRQnhXfXZC7AhhQBuWymR5C6BgrS6MktPmbEU9tZio5byNx7c45tBavLShuJJ1XUygw33S3YFbdZBi",
  "key1": "5g5X7jASPdWmVnbhTsdBdasZx1o7cxHtSjzM3jFen2u6r2LBVfzrZqqBXZnp3qBcm95ahKqDZCgPP15tBRUMePDp",
  "key2": "3YexLR4scPAda4461SPN1gM9VMvTwPfab3cWrFSSsobvwWeBYepeMiS7e7QUvVqcjr9pS4oGok83NsRNqge6GeAY",
  "key3": "53KPNGe9Z65j8i6SV9z6ZS6pBDP5yvS9jYNXxgU9m5gPmKmvzembvMwdRWEHPqo5q5W4V8YbiApxPyFEcDxKDW6L",
  "key4": "34dg1Hrg6s74mVSSJzybEmaEPTeYhGRVfF4hWkcYCkqcRsikNqWodtHBLqB4aTz4pLtBomaRB2B3nsdhHCDDEegr",
  "key5": "3ZncJQKD1SLtuPGbY6EAYQEdrkV7TxD9saaBoDHxBnNXiRXhrd2VoiceTudLwxk6o5Y9SJr8gG14eXKD6mrEr5BY",
  "key6": "3TmBMJzwuypMoWkDnbuQvNuKo6CBMVScerhKm14V1tRUZet7WZRK91pABPi45JHbyWkxU4PSugkYPABr6g3fz1Qj",
  "key7": "YxqNX1SRdqwhGGCfGxV4f83Y3kpSFjH6zPe9ZvdntNcoqFPxLY1a2HLZwr8FiTh1zzJZvC8y9gsAzmpMjzHvrkE",
  "key8": "2r6igRUPnHR7iSsb8oeBcchv69CLoP7tNBqCGwmWNah9m4bF22ddDW6wv8j3XhiAGwaM9rhA5n3Q7QdrSs2u3Jq2",
  "key9": "4FTDPeX2VVaKxV3RcfBQADBLuUTrGfpVPDFw4LuwQUgSmge2b4eYo6K6z4Ndbx3AKkcUWR9oad4YgtZMK5nyxoGo",
  "key10": "22fiYBZofwbR3CYNWpQHEn8ArYGHcCBDZ47EEfJRfPhD8etieRSciFYGfRd5SVa3YEyReVbgKU8877BAV824mvCf",
  "key11": "BHzqJSFdNwwFAQ2B8ZEngfnYp2SLFbpRkga8h8SLeH8FTthDNneu9Mn2swVBiYWzrZ6imRcmtqZqkHyr34h5VQZ",
  "key12": "5Uq6GJeR34XBKoMBFFM42M1aJQqX575nTM3oEwquvX4f83MF8ME41orK29nE57y58gpfje3AaSbcHwq1tz4iAsn8",
  "key13": "3HQK1gUhYJiy23CWhdb3iVaP2BEVtLaYQJjD5DyEwh24HdT84qzqdSsg4MRnzC33mQARvB29HekBgtpecs5FjVjA",
  "key14": "NJe3bR7gkLHTNgcCUoCvNLXkhFoDxsaM78yyg4S8agpjJFvhJJM7ar6WG79SwAVvBRg8mvY4ZeD4Z8kt7aM8k3W",
  "key15": "PCFTfZ2kRZMMPZ4UnPzX3ZUZaw2FJgNFjPnfkhE3LEtDxv7QY1BQSa9bshyXJKy51qfd4KZsyu7FHPhVertzPH5",
  "key16": "5xYLSmx89jyd2s5F5weCbcmNbLgss63k1ZNBAMMe7nqzaKofAW12MGM2UVkyKffPeMyTUi1YSepEAmVtcjgXhAxj",
  "key17": "2HHTnK5EMRd7nft6jaqSphLD9g46UwQtEyZBcpW1GyD3NpLX1FGKbzffyPbxbLZK3TDwEER49XoZhuz5mR7WdWHv",
  "key18": "3xro1bgsawyitwEbPenrdcGWVtZKBGaaCD9ASMeErPhvee7kthA1z7Jzz5fhZPkzwgAEYTQHUdCeqruTiwPe8kJe",
  "key19": "URYq7MdirB1GLwKKHaRz3ToWqRGWYCZafTJ9wjmJnWA9yER5x8VuyhtwX29knvm6UezA63XJgVBSMZYjEqfi5cx",
  "key20": "4KKZfNXQvGaQzBQgUohLWTW4Nu7nJC9py1R3NckHgnPVys8LKVpJDgYBayuZhTTpoAbqWUhScDS7zhmcs7hznf8H",
  "key21": "4QvZ3eesRzBa3s3GBTigkrPahFBtne1kfgJsVqy7KvJcpCQ635KkNt5TDZFfgEBL8UGreadN7fumHwDyuwogJHtg",
  "key22": "4EMACU48yFLhkB9ziiByAy7jeHUK4T2FWEwvWeGzgassiesZnhzNGUFHtGEgonSHnGnvXoDZGkfZARQfYydqoCW5",
  "key23": "4c6zkVTVMpstqP56tuzubMGfyo2AinQEbxWARRRHQ1j91rxTiW6ZmcUYDWzdsMoGS4D15yEkPuL5s3taSFq9GeD9",
  "key24": "5tM16hMKDKXKqzks2EzBrm8htfNj7FVKsJ8CQrotu8g37HX8jJXift8J5YYjuSunnKMtuwLt9nwj5ghfmPQoHRj4",
  "key25": "2gHtZhsteeT63b26rF5BzCdrokqxJViMcR3H7XJSy9hmSsrP1nGsGC91UsyYfddy7A1YmbXzgtFBJ68k4vdj4CmL",
  "key26": "YENxZUzzoVRwpi6uozBSJj7BgwX3HzCUZKUKFNXXDberBsMzPEKdGm9yqkgXmMLZSWQ37BtqjWBHWu6Y49ZkiMW",
  "key27": "4CxPsfSAmXEd1DnjNyE7kbV1CKpj11HWJ6ZnvYb2PiEE97E7v65TYKTDFJXb1YUo3AQXRyAME2eCogaBh6WdmcTf",
  "key28": "5q2qqo8491pwfCpegUhUYBa8PF8H9pLSoSLe4rwYRQoNFTPLWTZVKZsRzkm8bx3rnNDG63ovHQvQ25cGqyBgYDWV",
  "key29": "4Gg755QbA2S7a4JAeH8oQFJSsFzCJ64HNZFgT1ZbUmZHi5W5v2CvS1sqB7QDxaS9LxyPTzqZU1uciEr6PeNjaCcs",
  "key30": "5i39gvjzipHCeQ7f9xWQoDL5STa9WTNTqmLJU98qPCTYpceW2UqCNhpd2wFpiMzCNnJhfM3HatrzfdJYa8yU38qF"
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
