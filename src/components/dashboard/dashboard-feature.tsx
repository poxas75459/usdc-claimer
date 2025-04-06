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
    "HCUDrsiBeGGqUMmdyBG61yyw6UxJSVbVHHHpHcRNzBW2RkjuFkQMNWwmqHJrpxKsEbRocP7dh9UShGpLAAFf8Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iVJqtz4TFMjiDcrSxNchQAMAcMfY1wgWBNatCFdi8fRfYYyRKtkUC7kLU6gatxGXFUnfrxXf4Ag7QgR9GwEwYqc",
  "key1": "2awGAd1DjF5kN3KU8rkXfe9JWnA1Ws7fAKxME9xf1o3KRNViD9baec44nWhiZQQGRBLpjWfmHxcDtSuJTowj6NJv",
  "key2": "BxcDRSFZWfxZLuQTonmuq1gSWnihbUVzSGtBqmjefUXfTwpU6Dre3eHRqjZ6VrA9LL8wufWgqmrwsnP4bvZY4Ch",
  "key3": "3biWxfMGMqMcr7nRTTdhepk6YrbmgU9ojwpAkNYtwdA9BbX6ux99GzUfy2W7gQt7oBHvfrgdLJff1D39joxxjVcK",
  "key4": "3ABWMQnWGXH48txqb4P4y1TbwgvTktG4avyL667toDDjU5CzXkncuy8sxRZNMnJFCFkqbgD9DBftvAEREFWziDa1",
  "key5": "53fXzZ2sb6zD6SYE3AUrgKmw9xNzLetyDSL5KssDj1t5yqbkBkYLoVLS7stxLV3MzfvVjRUZrN9V4mow1P9YqDKp",
  "key6": "4vqPWHZGShzwD4WAVLfMQXu24KeukkiuXsNUGodepVzLQETVGgad5Lbqm534V4xC2Fr8mFqSoE3qXLwixhsvZ8uq",
  "key7": "655jx18K5oRHbiMz3KKdz9Ru8kNaMZZxiGWaN2hCttCR72cx1t3rcVq7DR72XJz6N7eguaVuvpcP2SBJSRPYPguf",
  "key8": "HbTWbCrKVr13KsDi2GMx6oYCpKVJ7Z8dn9sUEXqBGqrhxKKK4535uYQUJT9UzFUERvCFtE5T62zVgsS2tkerK1Y",
  "key9": "468tEqSJRP94td8yHkhyhmjp6yiDTapzCWVgQ5RMbVWTCmLN8hUtsa7fcS8SrApPTm4HszJtD6G8e9aJ2ohE6ERE",
  "key10": "4qwxPAHG8g6WZ9WXyXB2mYZaiXfNr1aZSb1qaca8Q36voXryemqzoL78YTxUYoXPkCE43wfRF3kf7YztZ528TCNP",
  "key11": "5AVgo45JaW3L6fwLNa9d686TYTzDwGnFgwBt8LcN22Bt7k84eg52jNDbKYqgqmE6NstPsnKy91UJtwWnn19fGiNh",
  "key12": "4mW5YDGWtvNu46VA2uwE7hHFTUQKGyEFxF9sJy162zq4JiPHwGkyDC1KqocHsXaRL4xch7QKsJ8Cua4XSmKheDCW",
  "key13": "4TAxf6UZvD3CWyNVdoARDFiCTKgb5stHGYpD8h7t5Ki4bAn8iKnYYaKPEETcT6o4qgtgiKneysojLacbuM6vKmsv",
  "key14": "2oPnmPEvK7dy99WYEf3cTjrh3iZHZj9KtMQwTkgt1zN4xw4fxu7P9V1vTdiSieUBy2W5789jaGAhBfy7nGZBxdXq",
  "key15": "3vanyxKW3r8535RaVhcMs15V9DbMGEZUJAb4RrAAkWaiMiG7ThKHAjE8U7DPkQ5rptpCCfFe1uRWNf22toTDuY82",
  "key16": "4c2R83b95sB2LpeM5Xj2ze7eFADJd3DgFRBff48tstmCCxkwzkinwaY2nPbsShNEHM7NZwkZFDMcjZ2s2mMxY2zk",
  "key17": "5TeuZcp4CaDF8AJBqaX2gxcJUDsEgatrT5uiwzYbFWYAPugABBuZxqR3h9awsP8SLxyBmguxnZB6VQAEm3tC3gWz",
  "key18": "Kodni4vtocbkL1iT8DJK36HiTaUtsckD2NK1ULj8qrSNoSZscpEqB1hPBKXevQJe4H8JMNHi8WcrGBReg6D2qU9",
  "key19": "4VC12ecsvTHFKPv5jVMgpcui4PvRCHswmekJBVTAFp5Tz9m9judxroRrZSRQH53xNB2QatGf8QLqD2XfQanwnQFW",
  "key20": "5QcDpuREqBFjm4BeAESqoDnUxBJWGAvhwuK18jZRC6HwgXZtmVyho6FPHuGCXrzkEiiPQ9VxupRstdRhG3YxbKs3",
  "key21": "53gjj5E2NbmNKQrtZ7X7avELcT6a5L9hPKpFjB4Dan4riMoToms4PKMtm6nV99BtJdHJM54f3p8UKyXtXx23seQ2",
  "key22": "2a5Hu7zhPJ2tKt1oRNri5QE3rfdLSyt5RGiPBpmRDKfnMQHzBP5ec9UTyruM2jxkSwyXnpVdkgbQxrNpj3oa4X8B",
  "key23": "4yU3jarsfNpWDbbKndGb3D4MjCsWUosXGt2iFPfWaHDCwznEsuhUYCgrzAh4q1iheQ5Pd85o54ZFB8XyzBry8Aww",
  "key24": "5LJRH273B8uwbg8jVaTjrfsyBm6XQEdNtnG4zniouCsCM9GfFTddRJMMmEnwumoDvW9uSBTFSNFdd6R9joZCe71a",
  "key25": "WrDQTSCDJSYfCqjnDuo9w6gtRm13LnLXs8r9YkBtEvXrwnmqJocdXaxi3NHfgUyxV2pXGBaEqUFVoAbDNecT9Rk",
  "key26": "5qbrP4ujTxkVyJ1ZZNUkWjasLfygbXvbs4XaQrV1dCrAxr1X1fdLhLomueY1d716E4ef6u26Wr8daXNTEkuhX5su",
  "key27": "HkqyY6ZnHqA9WkgoXKYfcbDNMLMWF4RKmAFKR9CQ32TdSMS7VVXqb1gbiKh8sRmkxcCM8xAkLGDgGav9GUR6nHo",
  "key28": "2Pv4yUdNaKxAqfFwggL75HeEJFASymywWSkBUA9YF5pNdXdHciBmA6tr59c6LC8UiHxm3NxVvP9bqpkpatnoVCQ6",
  "key29": "3vCQ5bAS9ctRGBDBkE4CUffobBYLEUKSFhjsVZyu53Pmg2GLUpMMcwT1RHYpvWJodcCF65q62VF2ZeD1kR67UkwE",
  "key30": "42dLKwNqUYEWJZoKx2SeDauPJud8TBwAb2jedjuReVZkeNx5njcXqCZXQ1iw2oFSmDt41nte1AdpruR4z1BrD9Bh",
  "key31": "ZpR8HbcgXZYFHCrq8gnW7iTm99k8dfgMPyp2vhMxBBRMgakzzFmh6uxzEBSrq123pCqKzsJAnRVxbxa8U3Nphiu",
  "key32": "2zBTYCGmgrqeXwVSfmnbGrdbZNqZP1NdxDhtSSaatv51kDZsMU9JdX8turCuvF3F5QBmU7vTkaxdw6Zm3BommevF",
  "key33": "4hkztzYJAG7dP5mi1bHfxqt3oEaWrqZMdCXorfqyyVNJNYRTa9VRBvYtHrggtLixT2vsYrtkwYZZPNaCF5r6KvGv",
  "key34": "3Pep9QetRpfvA18ebV5HfdwcnGVwp18G4XwvaHHTaNhLizuWzm4cNy3MWyuw6JKQaR1BnXqDQP48MUf66398bcUR",
  "key35": "7RcgnT5QGERybFdmtDio8n6YjWG7zQrAi6kbQZHK75Gjdpw72LoNs7Yqbqo1KeBiqcEN8rx7yak4TwTPiSdD96J",
  "key36": "mSfj19LzADRbv7Mecngcp6EusRxeuwg6r9ESMyJkHKzEbTBeqdNp8bJvfnfL7bMMcLxtftqUqr7NimDYgyWDVQ1",
  "key37": "qskmw8TLtimGMpCrGzyptRoq1w89CSMUKvCxHjLC6CtmjBYCf7UmC68qVQwTjKHjsDr8qiva9FC4y7h8KAEiLQF",
  "key38": "3QZMois2Nbkx5Re6yLCZGWVKbKi5CqKgCK6b8xSLjGSgABTMJZdQ3AxiqqvhTLbTU7Xc8CS1o1JF9ywMErGnNmcb",
  "key39": "PtNUrgVTULvLdZ52WVHKpc1amB3N78ozsyzTH7s89yzdCG7Xc4QjwoRRR1qZB2zzQRFMtHHmPJhPnEnkbcqa9aa",
  "key40": "4WkGy486iBVZ8vFkhvhYcfAxcUbcB3C92ubRMEhS32XhiPDbMPyxGbcG6N77YSzYbnaqiHpQQy4jfFhwZAfyhssg"
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
