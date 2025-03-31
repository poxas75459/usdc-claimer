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
    "4hgeFAwehFnu1Uhk6tcxQroxiVmonvzgAeBvczx29UaM5zCbS7hpVbjqskRH2SbUPcJBPeiBzvqPhBAyF64E9PpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ygc7HAwfM5EqMuugeQ4Cagyt8fKsEkhwmhtTiXRikHUmZ1jDZtcBamFphNzMDVZN5FydSMDjeYevkk9S8y5XtHB",
  "key1": "3GemEqBjZKEkmHpXy31zKfi7q6qKuqQNxdGt4v5tSwpqBjy9BkzBRnuAPegcUMbFbKgnjnxCn1EtB6wNgKG6GSTk",
  "key2": "HVDmWs2bhHFYxVpYm29ABYcJ9Ea9Gkm5iUN7Enry5EojkCzDS9bK5xKpYbmyJjdyFoCeJGJhKe34TuxAs1Spmz8",
  "key3": "UfXaMiPWppLRbj5yD9yZEo9fEX1KNBsok7xsVGFtVpZpm2RYMsQDwcpRekW48QxMKYi3kYegEBtUAs6eNNHisqz",
  "key4": "Tcs3EMCNiv63B8QhsS7g479Yj2uCwHoFPULvn4vE2cXg64vpTLTYrGAM5HyF8nVYpE7zyBKpn9ydajgmUm3eXZr",
  "key5": "3BoTRSdX4FhSJLTte82X3oe3rQDmE21tv4ZL5nBA8VZn4H8dKqzaVyDYWATEaBWGmADKBv8mAguTH3hLhc5QbWK2",
  "key6": "4AcSqBxt8TvDVqBSxaq2EMrBs4b73DzTeZzas6LSpS8nUhwZgx9SVA841xxXwQ73ZTUGoZk7Fi3dYEZofwYx4yuX",
  "key7": "3BV2wSGz9kVCunabjZ4A1QubQj3KnuGBhq3vtKSYKt1hV5w95Up1CbBRMwBmQ2fPebeiDjaeCw2fiDdDWiYnxZRt",
  "key8": "FCjDDsPmab2MTNcfPg2RjW6mqTtBcaiQTQT9QauSMNZFGZbFoudMSdBatShc78CcztaR4y8Mt47VXdAmPeeTkTy",
  "key9": "5qiGvfZyn4ox2J9oeLWiRdXxrVgGwPmVzPztrRBWVHVx19QiGX3yawWRYE7bnKM2Xu1JYEQTfVFCK1ub7RjJPeAQ",
  "key10": "5dv8Ypi9kcVxJuvmeXPg997RfJGMgSwqa2STit1HR8RRriu87afiVyqWjYML9U8eefAZxajfbBMXDQn11pwqqrs",
  "key11": "5hioUQkaT2pEpBx7txaWEJyXF6y1hiUcHHVZ78BCv8RxTvw6psyao7xxaKzDQYnZFZSMLpPmrrt9eZ3grDGj8Fk2",
  "key12": "2mBxLzmyLCd8A8wUiM3gH9Cqwbye3iYc7mFYPKYPohRGy71asc3i416inQ8t6d2aybwu56WkTpVTCdsnf7QkMVMD",
  "key13": "2XHEh5NUg3rLqXkB34QB1iYx61CNRW7iLtMzzaoWJ2gcWbhTPm755NmzwRwnHvDpWXJYPYAF4VTamn2L18Ydeg5i",
  "key14": "38dLdJYYV92XwXu7UBNky1Y71ACvKB2b5oRMziakK1MNgLXxJn3oGkFdNmfPktBg7kt4RF5p7pyk78GZeb3QB57r",
  "key15": "32J2t4TBZXWp4D8VSUUkLuYiKQKvUxpY2xM5kymXEnk9xtJY7PZfnKDnqSmq51FJNVxkRWkYVbPQm9QH8c3uqqgh",
  "key16": "9TA5weGt8GrQUPk51doQ8Nj4GSEvBaaLgbc8aHTWpfLCSz5PoZUvtVrUJAUNJr9r9hxnYdMAdGg9w1V2y9yvNW1",
  "key17": "3PFaBH6k3z7Yi6Ym2bQaiq92t2EHwE1xVMt2a8zNg62DT4sWAxkBWVN1RF9F116xqCXknfj6swtL1CaRpmiTCDuR",
  "key18": "5ZFDPETkadzsy4uzp6diSRokoy7BMvq5WnaAgoncQKaWGoVZv2Bkk54Bf91Hq6rJUYQFhVm2DwbKHPVCSvixNKww",
  "key19": "2ETHti6s95d1Ejx19crpT1Du2XP8ZBSJ9ptA4pogrEzkvfBHWKQcug4jeZJgjecfHHBAXXWoG49fcpuZvVmrRgRj",
  "key20": "95WuaFLyod9YGgdxg9PGeSV67BZVxQnwcLAzpYV5ZfiVwVKHMELohJsbV3gQktJjEf2iQG751jpP77oDSS8cucT",
  "key21": "2WEZ5KCxXCh2zUs3vzhAQxHj1BPDkEJx1iXum3B6S6s8gAVua6bon5Xg29yy7KGwvwdd4UTvHEutETqU66Lxp18f",
  "key22": "4X1aSMV1AdSfUXo8X4x2oi1MVhqrruEB8djf66nFEQZMXRDsm8xtLRayrvfFmvESYnbQdtjVJAXMuoKn795doJY",
  "key23": "AmycvrEFFqELnbaz66oyVpEXZRdA1n1rxBEHJgm82MYmShHUKkUAAe5wEbdRfSSnZm9DdTJymb2nvRrt2Wijair",
  "key24": "2hvZstSbqLpt5h5SMVae9DbJD3WFvjjsKAAWoHnhjaY6qeqWKx3io34ovNcHi9KDDG9hXp9rDMiA6Ge8njKiPcXA",
  "key25": "52wyobm3FxS1ScnUne9if8V7Lp4EwtqA17X1mBWGEJTrtn5qM2Cfx95PU13xBpiATqtYh1XUHY4Hwh5As8CvJXMo",
  "key26": "3y3LAsBJgjscFtCehznbjfZhB1KaWr3N4kgEeidyYH4FRk1AUa7ChnC1M8prKz8Zu9VphHhuF9Kg94uas4bc5ECP",
  "key27": "4ptmJ9nz6D2mHKukENX6z3LogmnL6bcwELYUshMe5TL9UcxKnX7oAKQRXBYPUvCJPRrpyw6eBTnQKkiCzSuEsApL"
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
