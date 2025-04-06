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
    "5s1a9Ui8HVbk3A6ctzG3FtG9sa6MBfGihfwVd8BFLzvszahniN5EZH77YpdWKRdhJhFDBXiR5xSrWcsbxuv5BUyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4oJKYz4nbP38BaMnQgodTsGn55YFjBMdJo3JQQeiwqZudGj5TPFc7x22LHrCbmgAszBmdA3F8HdFfZxLy4ovGq",
  "key1": "3rHw7qGzD7M6zzi1UKNF3AbEFZ4QTZz5bhkEvasTTsh5RxYRbtUQYJdEWyRjmQcEvEnuq1bXvTpo67uMtpQHXyDZ",
  "key2": "2m62wzwvjSrxBV6nXEqge5tSufEUQLShz5vR3pi7cdksdG2dQyaCguyeG8oRB2ZAUmnfWTedUqQuBLu3pAiTwbtS",
  "key3": "2Z7nqRJBe3xVqRALy43UHn5pRzoi3ArzCi7MZT6o8b8VjpPYmFx4kxA43JyR7E5ggxTAYvCRgKsPjDbiJWwbjUaG",
  "key4": "58V6aTv5Gc2zP8iSGoGDe6Fvbf5bb5fdiPKmv47fbVSs2Zfd4ihEn8NDSj9XdmYPrbFbwc8Ev8WczUjdyXQhfJyR",
  "key5": "3PineYuZydaWSdTRwmGRRc2NGKTrJy9XY3uc4rPxRihfjR8fo1Z1cBXymry4P2YiEUjddSFoaMD17TqZF2qvgcjL",
  "key6": "3v32b1z3wnsbh59uMVcJTSs6XndYwzAzhMRWSe6R2Ey5WpvrjJsxgMg2xFR1ThBX7Qv4weSge22HUyXysSYNd4wU",
  "key7": "5bFrhEPxkekD89tmKDmURd2ALvBcezVb4yb7n3e6mhZkYhYLctr4gZTkMrXkg2W4stdW6C3WXxWpEiYXHAUQq2mY",
  "key8": "4wWkQ8SWDrijjreGiovdRXgA8ty8p3Qa76x682dHqnkDWhRGMkRbgNEQHdy54v2kAn8Q2RzPSsDufjVpMF2P3cTf",
  "key9": "2o7W4SsKaTEDZ9RiFP89dJsm9WAquXMx3TqtZSv9Yd9qoVwUvqar782HVoqqpWCkAD2xBExgz4V34qdrR3RG8o1N",
  "key10": "5JGidte3P1eUDafk9Jk9i7trV8vxi3zcrxTT3xafyhcZR66P6trj3Ef8yurAqYUun431Aazx1zBuhR3HLj6ksoaF",
  "key11": "53W2ZkNEzsMVAAinr3kehBUhso4cBzpbPpFp8p7GfT2edyC7mKWpK6wmhLNczdshBu9y2JCBPdSmPkJPUe7o7f21",
  "key12": "y3QYsQBSYgxBuLj7goWKjbGUQ4vytfvU9K9SPvxcZ6gKgcze2frkqddFDtjEUyscusrP3pa3Z8r7uFyX7kHHYx8",
  "key13": "5sdk4ShbWB4zB254N4jFethZihk2C5y5s9aayj46ZPHTrjBRUS8c1xDT6c8rdM5yHoTkWP9VQU5HPW5ZfbAbYgsi",
  "key14": "5BxWsq9MKDrcvMgrpPnqu6cjRfDMQf3EQscnfn49hNnchw1RefmZK7ZSxVzmL5UEmRGSxRe3RUG1jKakTQT4V1kn",
  "key15": "4YRcsaWHWGNWQiwBVAZvcXwaH68obXPAVTUWhAyfj96u2UDssGJpX39eQPGhjRBmiEziUfw5bZnaKASRws2ZQG9P",
  "key16": "5vyeJCwB9RraGvyPhVmnmNhGbodcBggK2QDL3USgBVTu3nUf68qRdRvqeGRURd6XHTbFPycmtfKHHrTg2ADHtjrP",
  "key17": "2h78WPkzkEk1W1mPQGSDdhDHzixAHpqEfyooXNABeBUzRgahz2rXbMuAXAxvG1WhZXcjHdurwbcLYoc7ySjgYwaR",
  "key18": "3dSfMsbvo5ZHxQRSLXf3XL4enXSmkXmfQbCL8TZKbFJvpPsC8VfiSeTXqBpWbR6uiEWsAMLY5B6C4DXWpbkeNbof",
  "key19": "63zjJLFws6Q1ofJdNZkRH3zYATqzfaJi5uuzD8bEkR4jMMh1U7R9Hu5U2XnmCw2dc1zoCaDGFrrrhiTcHDQiJsUZ",
  "key20": "3FfSrBVDFAWaw6ooArRA38ZLr1fQzoJfEUyn32Fb8TikjK1VjmCfvDzY1PhrvFZSBjHpQDdwipkjbHip37Wph1kG",
  "key21": "4kiaSs7q4G4sT56Z3Y2MJfyAkbgmcwjKcorZRTqsZQSMmpyTJTTrbUnjqrgQF7ehJZ3WEJNiy4eWFPj3ZWHjr98b",
  "key22": "5WdhuLuiG68KcZ1BanTRQFrrhsZnUVuhCZGDTyfx2J7ozfryWkP9UT8KNbterB9RFU8ZmMhpk4WMs76o8J3DsEEa",
  "key23": "4KvrUPjNfcqi348HJbJn5F861pdtowxEAwCGJAbDaNoK4ivJzaFuQ5SfKqZzZzeWqNVJ17dhiRffxb2cbY7XLs1U",
  "key24": "4DBsq8ZGs1isQp9vPUsU18aeyRh8UThd8x99wGHJPq2wAuGLqLSu4PU23kDHC1CGPKLNGgpv2doJzGsspwKT4pQ4",
  "key25": "5Eh4W4AU8oPMSt6CvRurxuXpPQYxTd7ur5nRpXUerR1ZeJLXVRbKBs6KDQfJkWqS11HKufXSZ4ugsMSuKqYgjKc9",
  "key26": "ypLkx2KU62R5m9KbGh5jLRnJHHerEh7BF8DM3X9ePx97qfSG825d7dioJcfym3iiuhnM2D5W3ovBMaxv4rVKLFW",
  "key27": "5ZsREL2S1K2szMg1gtAyHUZ9Pow4iVabDJWBqfiNAvnxgXKa8QjAeUZo3RHRFpQRjgEfFsMJD4sBA1sSu2Va5Av2",
  "key28": "4a1GHNgqbpAcP8D47q5zgE2dbx71K3y1dqK4HxnsfvDdrZykCQBxgbwiqcC6PsVW2hGbzN3qS5fJ2Q92u7iCEmN5",
  "key29": "4mkdLdHUEJNCjn9zb4a8oSiG8b5fD7WVa6mDzkLQuh5yyBVy6Wsg41TGeMhbFsX3asSTJmhhkGvz2NLcP8b97jyF",
  "key30": "2GBg5BEvcX8LVWLyivYq34PEXfxA8J5RSphw4Z2cwz4Q9qWMoTR9eDJYVyfF92YZU8noC5eDEH66tsXNnkFsXtqA",
  "key31": "2rVpD9F5AB3TUaSShAC5YbfY8ZzyUy52a4ZPoXyXXabxcJYcd9CFQPEq26pXt9pRazut1pnb3BKJWrrP86p5MSr6",
  "key32": "2tR48PmnPUc1XjYQ4weaaNhGphqM2kikCjTURxYcXxvWMzurApz38YjkNS9McGyVmfL2G6est6RZZvWdhmHwE5bt",
  "key33": "2vrUoHVoctuAzf9KaWF3QMfomU7DCc2eJNaxsLnH2JhDjHsoYdMjLEHxxBhqgJ4JEDgRCUHLz2GgrS5nvFfei6Me",
  "key34": "ZZkYMS33ytmqeu9xkyVy3aH2a4uMZCSzvuQijWSopLQ8PVMPFmf7x9R6b81RXR4VGTqV3wJdbKvVDNisdqJkQD4",
  "key35": "5Y5Zu3bjtx1swCmuwg3tG3vd1gt36TYrSX7tb1wmeBXmfiGuwrRXungC32HindUanouiWyaGgYfMq3U5qVDcbnWR",
  "key36": "4Jwt2XsRYpstbAt1kosFo4dSmxNHZFFbmLLdLqHPWwf9mpcUj6GPX5y1wiSV4L34bwDGAv8xr8vneKfHQJ3um7GU",
  "key37": "4qp6FLuZZLsvEfH1tDzrPCuW8PG7Zj5e8qe2GaGNMeaXgszTftzRahzDxorEtUcthKV53itgpti9VHQZw7z8xb4W",
  "key38": "3xFNgnTuaLdYmhWq26y2QqGsdWdtcBmSiWhnqsdEuBCBwTGrRC4s33eJT4u6FrEsGknCu1wTXoA1DBmzMA2TZv1E",
  "key39": "44t2zasHMnUBuPXR6ojimVgyQguAn1fEUJYats8HSrsAh81EHi5Ws72qHQoUKpPwevmHYRePcc9vDpnVGxb63drA"
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
