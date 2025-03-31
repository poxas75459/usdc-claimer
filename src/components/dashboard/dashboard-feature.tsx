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
    "qXatr7SkZKSTsRtRx652yxCQyUUUkKWk2EqPUrwqX8KcSwvZEFXintuKfx92bFe6DMnY4MHN8WfyFpv89nQGhFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63uerzgF1sNVgjvnZh2nyqvNDAVQDp7LUWTBtscSUHFi5d9XbdnjE4zy2YPpgRBRuDeznQXL21weLEPa8KXR9GqR",
  "key1": "ej3eBiGsghxnC4cuvojEMGK2R5qtUn9SyqtWf8JvzX4yCzEjKvAM7TdwaCddNX4mHkZSsF6U1nqiiaMcf936EMi",
  "key2": "F2r6EZ3EQMWspT3psQyhc3RxL1AF3yLHr2P8bds5ayt5u16b3YKyf2wdgW4FGCZeQBW4GckhjxBygr17G3AJQd2",
  "key3": "5mqMpUtLRbUujfYLwHoftAePMwBxNH84AMVc4thmTMDmhkTsvx9rFgWTaJryaWL5ifdmpNf9WY11eGc6xh9Jq1yi",
  "key4": "4CjxTSce5mjVH7QbLry8AGKV4PjtUUhBCjqW8HKSi3gY9yPfm8dYNrNPV42Hfkgn96iGUY8oChmjHij8wuHMQ93W",
  "key5": "65CWdib1CdgRp1RumbTbVywbty7iTtoBtVQvP4ZQPCbyw5NjUaNbQiSHirka2eM16GVx5t6uYZrv3PhHivSkNDmP",
  "key6": "dfuagxqksMMJdU115YWmYnNMMP1xpbxtkifJjUK9itcjxWwh6cQNeRYH4PELPTtSmaYJnyU4oss78arWMAN3j94",
  "key7": "52Pwq9YwipYVTQGzmra27B1BjHuHK14ZiKRjTY4s3jdgG7qH7uyZ51NSqRvmmNNXtKzm6dFZeUk9Hc3xvXnS5fuY",
  "key8": "4jEoBXkzv8bmLbiXQnNyzeJ3uvXpn6H4tL7B8K3D9HQnBkxAosLAEi49ufb6W4UXd4gwGhGvz5r9YkddTaqvL57a",
  "key9": "5CECfWaRyZKhmuK8ZS1zDvmW51JdxJfYxy3ncwZ6cGecL4jSaSTiEpVinVxfEVmt58CkhZQfRT55baqQvMymdgYQ",
  "key10": "4H3YrEyrRG6Vyf5Xu4pLJNyyCsbzSfcFLYUdyLxE7cmNzaeraSW7hdhgfkzUz3rbjWP7jtZuzgvcxv1zf4HGw4tT",
  "key11": "wsn3292tyvzh8ZhdXojpV59puTGBoE7UeDmct8o9PUdxT7tYuACcbo9oFZWj7yyHpQH6sJAWE5qYAs9F89mNbDu",
  "key12": "3RhjEQPmBks7PRJpKgbtnxLMstd5vWtM7mXCJHmD7xVtd7jq1XmdJ5zjmUMWFFXmdp4y1Bt5J6jj94Ht38TD9c84",
  "key13": "27rEvCCF7QQHgjdQWwo2Y6eJBbhMcBNZL9yKd3NYTPii7sxwwqL83UbuuJJvMhZnojHYHuDdtDrtb4pGqjuT9v6P",
  "key14": "3s7VnqPSF4gY6UEorrMqUyrUBzTvr69SpUBR7tYdLzujRa9BE1gQxX5AjmQZpPkduVWL5WwAiRdKZHreiJrByHTn",
  "key15": "1zXbQyDC2gzYYiUecZEezZNm5N8NNzbhXWYxmgeKh6YeDzo6K7BVywBmNeAjzxsEzqhCT8wMyTsNgPvMkHdCX5Z",
  "key16": "3CCnVHFBM389CxoEAPBq68qir2eNYEbNqvscBsVSHk5ogDsZzw9Wxxou9kP9krVqwGjCRvqUU4La42rdHhnP9Qy9",
  "key17": "4EDMuo2MJmMocULG3xXbUazrR1gbTgDofZSnJ4Xa2deqecjoM9rcrHPbHU8xfyqPqFzcJD6XmFyLxrFeqaEEmrLR",
  "key18": "2SNnbwyMCpoPcvPyjn4XsHiz2rQ6WsiszkundXzBiuLQ4KRPkV8gaDsySxviJv6semybzJRxKp8VSTKdaHbx7aBF",
  "key19": "myccXhit1SPtFr5EgitZkbQ729p1WCviQhetAU6Mw448hNi83BMpZhoH9h82JLoWMMHcZLV2r5dZoWxUmiwnGeu",
  "key20": "UdiKeUFmXRNueWhFqhkETKeNuLTyNBuUZvDKhuowje4NBsC18pgx8Cw3P6YWGmtbU83TsXHgn33QtVaEAVRcuh8",
  "key21": "2xTTo5q8RQEtvNefvNPBMGWqKKfDGL6B75Z9f4njoVqxdwrEDztTh1RADAoC1utwptUn5L3QGgB4B3TQ6UucuAWA",
  "key22": "3ZhrCoQtK7PgyTu87NMLw9t4Rg5jCKeosbnbe5GiA7b3Jz9cuP9QkwmpdcSDfEY3CzBTcupMW544GBmHoSjquKTU",
  "key23": "5maxd5CnVhHuG35JhxpSmyxXCaYeKUbbT6zR7BV4gR2nRNfhw8ECcvHyLojq3YtBqmk1RQj5XLEJZFHqcU93DxUU",
  "key24": "4tPufFbbZwa3nj3tHjrYeF6HShV47BZW6CKggeuS6cHgMiaRtEgAy6uWbgXuMEzEdrwyJdXJHJFoNBwAiLHzJpnL",
  "key25": "5ZFtsH2KC6MLT2Q9bQCXi85u71C67af3tgGp2ynUM2r5SPyWtw6dZvtxqdjiwrfynMUVRTmARNCYxnogM5fieCUe",
  "key26": "2CKvLpRNE96eiUCniJ72WDT6eZpehNVXvyrWJyzAreueHPz7E29DNReJJv4sRSJGSfyN3ymCuiUKm9xbnWM8FLY3",
  "key27": "HmdC7ybYYUyvL6m1bxdqnfxMpYgvA7SGsFJLc33nyJLXJnioQuSK1bE7XSbhkzskCx7LosJsk75XpGXDMazFCXp",
  "key28": "5aPzX4GS4mBLKkGwZjnM8hRZ3CaTsEQUFmCSgzN6sTbzB2CC5CdPHAUZvRUW29abjcCDTeax44eYcn2rBYCuDiD7",
  "key29": "4JW5nCWQ2aydcznQENMLd2eCWrEuH94mhD4p4Qy3UMbs2BzAya4LY72GhaMdeajdogfc6WrTYrWaRwa9VD1H4HZy",
  "key30": "37VcvZZUNeBUXsL111WMv1U46A42z73FMNTVPcGu746YYYDwZi4wVi7VpoRSfD99nUUqdVzgj8wNU9k8Nd6mHqBY"
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
