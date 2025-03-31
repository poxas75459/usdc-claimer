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
    "4ppe8HXKUyqqFL1bRb8ijG7Sm55ewnztx82xZFT1DuU77hmbmeAxnDd4WRQFJM4t5hjGdgYRsuRa376FsrciymaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxBLdtgGcFJ2Q1K6vywxRS5TYHUySMyzWfP9fn1LGzpu7THbJscu4XC3jFhfGKF6D5cknhiVT1GNmtwB9bXLVs4",
  "key1": "5k22p94jkJJCtaVvMiqomAuU2Ps9WEhqMnFXwEqufVzGk8rotFkBnnUFMJVEwaxPL5tqm23QG68DqkfZXta3ZPDd",
  "key2": "51Arhan1PZ8XhqRF8vDmcLh3BHiWPWLteJ3ZyA7owjkfaaaepJ9wrTsAWbuwgsDZJ9dU2LbCSWmmA47LJZs6fAya",
  "key3": "2QLPmT79GWsZbaPrJdiSYmikBpJtgFD6zijFvFeqzp5iwdNiLsAn4NGx73RCkrdT5c4Gqnv9wtY5Dc3pjh8V7H8G",
  "key4": "K2uRWRp14XtkbhjcCVqHZiJbEUHp5TDBhzQQMTm3gRvwJBbAyQu7LL3R7KYyTye3QsNY65G5ZGhZfWLp4azE6VG",
  "key5": "5S3PqXkKAtzbk42Kpe8J4S9c1my2fucxAMnC5kK9r73ECTP6XQJFjDf7hQaMQiu6kZm7Xn5c4VgQsj8VuQE4rA99",
  "key6": "KBVKsGo9BU7BQekuXhC63A7WfN5t7YFJYYdcub7npdtZZNeXSoRqasH6RX9nM326gHPwzctwomAxFavusrKGvoU",
  "key7": "895F1j5mw8uz9U3XGS1gv7vhmf8rSCEoeD4W2B2dosTYaUTcVZkFUEcbRkT1HsNkrkgqG9oT7Aw9cKSAAMFEQJ1",
  "key8": "3CHcS8D27FgaqN3Cw8pCyRnXxXBxUgCeqHDc5EFf31zFvwrayEhR1sG5egx2wekhG6WwM18Ztf31Zpk8CFuFfyMW",
  "key9": "5gb1nvCDvdAdgir2XWCbBHBgosuag5ZE1Xog5rczSi9rtAztxkgcu2Mr3KeK63DSiq4sgAf8nEVD7ueEbJwcSfL8",
  "key10": "QgpkwxNYU7Zj62B1AHEzxSA2paicd3q9MkjzHFQ8sjz7z96pi8XNMBmffvtD9o3wvKFuFT2MRMo6J4nc5hUbgFF",
  "key11": "5sv7KW7cAPxFpT4VwTbzJHzrxqTLhagzBYoeUpwX82JrobvaRd8rBuPLps9AoQTkMPJb88nUhkHRwX12rcc99Upn",
  "key12": "5xuzqyB7Ux8CdmxCz2TS1UpX3QwQ8nkvu9d48cBHouYZMTAVBNMsxh7Ae4dwdEP8PRKX9TWALggVjdpSifFe1JV9",
  "key13": "a7Pu2aqgT2MiwEkvbgUF5T9YwRQdDF1mo6jrs3oBCjpkb89phbvQaZXFd4k1aG6W59baiTeDAMrje66w1K9g7qg",
  "key14": "3uurJ3u8hfNxboYYtp26gSLL9FXxt4chsvWvKdKBxLuXghWTHiAXySKqnasA72zG86sYHa9z7s6tzDDiWTzymSWE",
  "key15": "2WEGLQ1svggeNtLD4LvZ82SZKmY8hVe2eAycVvYXojQZUg7mLoKiAqsKMrReorBEQ1gUGAuBcosF2241G5HaSCNE",
  "key16": "2gAgMyZcj43DNJKR3jxC5Ls2EvXZXgHsij9UkhUX4FNPEVazzeycYTLmiEhgLWoMeGrbt1fyK6BJGrVvFxixcjUx",
  "key17": "65APUFA5XsKiyax81djp49eJR9duBA6mnYMXgTHRdZYL7zDsZkEqyDS8Xmyoop38ydtt27CSFPSzhhvJs6da16Md",
  "key18": "2CvW9nUaJ2NRXuneVj7TcYhs7Zw4yDGKwU21Xc561AMAKQ1cE3WkpEnr2MyAfCooLCXoZAFccNixPHt4m1dV4tVb",
  "key19": "2h7kBuYKEFKLRen2sWnQhaT8okggpDvTmZnvn8F8h5EBBwuUZJ47pn7RVEG8nPWuzdpnDsRfWGbNC8x9kTUbXtUz",
  "key20": "23wgwY7uAmDw9LC4tpFjDnBzARHTxA2uFQkyDrUHNuqL8A63XJih8yq3nxVaK2JczSmYwsqarJShJJx59uKjXyRh",
  "key21": "3uxYSuJzsqBtXxS5TLtaQxXrMtTLwHLDDLwh7X4gLEzGK6nXdjz6RR2SFGeK481SXFTNHS96sMfhVYxhL1K7CArF",
  "key22": "28Yg1A2knzY2KpHcQx6YFCHMmsc321ZVJE7q1Hi4uuEepwqY9fjec96i95EwZb8HiYy4FqiKwmdLUtAuZoDDPjVS",
  "key23": "4yEVwCcNb4JWtTWQFjKHmv4LxoiNg8TQvVHZBmHVTfYxWnKPLk3DDEHFwPtSCGQcf5mCUXso9FK7H3qaF57jdj5J",
  "key24": "4eYdTyYB1m6tJzwEvnDXA8aeGN2pGS8ZP9XkKNU2vjh3TgxivqtAcbhLfaFzhHZWxdGgD2oZicAjnGQEzfkVorzL",
  "key25": "5x1d8Ebq98NkQLvcpkGjg4DCH1nmZPHG1WyQL13VH3KXuBsYdBMDyJB9zktpNyS9EPmUug9hD3VLjt7TGKJ8ewjh",
  "key26": "2CQzmXRH91JhgFz6EyAggV79FxnFHvHffgyYa1kcdZVGPVpqkzmVaBLvzJbEHW6YYF86jmW8fpaWHKf86HCEEmNU",
  "key27": "4CcbRkRLETypctE4mg7YqzTPoSh5CJnzn6sj9PgrAXikbUtjcGzDkbvnJRaMPUxWqChr8BaUwc8oTy7ACaybxK9f",
  "key28": "4QT4DXeYjNrSq6iXmaAFeQ54aR7fAb7jsKRz8e5NHYfEwhA9fwpj32QFcVmLpRr1PYfA1UY44tmmujRzJ1CVceQi",
  "key29": "3cVc3n7y8FqgvL3DTumxFZawkEcWjki4NQbL9rY7x1xUEkiFiUcXCytENpgreE8byzujibAbk5VGTU5eNArUSUoX",
  "key30": "3X4WdS6rxd1cnc788YUVcQauCXjrAJvkcEbniJd8egUfTCed94NK88BmZdkoVGVBLcDu69zhZ14BbiZSshjZL3ZQ",
  "key31": "3gCCc1ftAjXhExDLSP9ES6xM391TdfrSSfF6eo4vwTBcym5kdZj2oFaWUWSGaiWgNceN9qxCoK6pQdpoLVW9pygQ",
  "key32": "4kFPCNLsndkXY271tRt3NGepMQqLEzJTE8tqztjFMPdVoQoUg4KZSn57tCyzahW92dbFaW5pMAKWdeGM3r1zcnbi",
  "key33": "3Liru6ZAu9vyLRMeBkqy1JHrGBHrSMzKrzbpbxXG3qCm45Ucec6WorVEBBmJt2qU74SxzDPfRYXjmXfiyMpiJEjR",
  "key34": "wLUh1jnNE7fkm3mVbJwmc39SfRKo6znrZdEXcDCfwX8pAibkskUxcHorRvHmf61ysGRuCV7jc3J158brBuZwwCq",
  "key35": "5iXpQyXJWT9rKDFoqtHcFGDMtupoDBYfu7hPU24PMTnwDxkUGEFMsCLjrPVgMEyZxzVy6UCaZEQjyckwXHZmQWrh",
  "key36": "5Hzz82c9KXJVbx61oKKjrja7NH678jfKYQMr6bx3viokT4jS81wpDL67sbM2ictQtinsfFGhxTpCctXqUXJ2KUB5",
  "key37": "2TWH93u8jKNpRSAoA1cKmi8WxkqnBCkdB6sQ13nTeVvRtodPDz3QvxeTSuYMnEyWnSqTBJxFbXfDAorxnr32mRSx",
  "key38": "WwJKq7xT64czPu4mvw2vy3NbJ2whQtY5RJE1dTqdMcdTrsmj4gDGUuuYTXRifaqMFB8zJk8Q8dFKbCanjTVEfWL",
  "key39": "52XP2g16aPsEL5Ly2jQ7r2oaLGSzQYVBC1xpZ8tmz3AbHSagid3mLzj3X6KcQSpKTHU3MJGJS4abDU1ZYdi9Boke",
  "key40": "4VwAWrmojuTM8azDzWKPHeXcUUHnCHmbyXC57aPkRbKupmCwhsu8wXobN98xqxLxLagxhdC7mRDHBYtNnx5R7vwc",
  "key41": "53iyWVXtECDx6h3p4FBCZdb3Q3d5hD8bd6U4QRbvZcNAmhKfipQfqDKUNrWvfUUFR7pfvZACTuC2FRwZJ6sJHBdN",
  "key42": "fjj4cygfstr6ewzDPstcKMnGKXsCuEvAK3WXNZtXFbuLxnn9q5Hw3ei2hYkBnVe7hynpywUUcAdTEga6goQ1Xiy",
  "key43": "3i1KN2nJ7nLtKt5c88GXVHb8p67Wt3thTonAoZBjNp5QU1U6ojgfp9fhvQJyyUpPWZ4RJSfzFWWCcSjnzvqHfHCH"
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
