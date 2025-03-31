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
    "43r1pvvwFnXAouJw1qHRe7uHHAAWTXWV7VCZLnuPVtjK61z5eBjGzM1fq3MebCPdYVijeADcu3GNCVY5LFVe8Rdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJLeL89mvFbasoGQW2VAvTW9DE1vFcmhqvFxLHHFX6196ycTU5igQ5EjdevbnzCPw5Azp4LJivDcYHFqBgphPdU",
  "key1": "3QMuWREB5Sa7p9LqQqjx4wSXXBPAXP9QzkdJXj1TYzbCSRSJiMyRJfAcEv9iUXFqfGrR7eWceRCPVFPp4x9UWpNK",
  "key2": "zHXUGNZCoAsc5SQek6Ca6boPDppVg7vC7JxhsQAxvp6Mr9e8oxVTqVBPDvLodw7mCscLYZixSFmWmcxHMjidtdq",
  "key3": "3agdECsJqfkpN4zUkCVgyoqShsGTcM1AhdYSeMyVybccD57S8x2PYHj96kc4sobbxqWdsirBeFZhWSNY6mihCSzu",
  "key4": "dDQGdbndk5dLUpsh9fmeJGy94QZoTTTTFHEPpog6ddaRSLrdWcUb3RbBaXBA5acjKU5rB2zP8P2jbYqwbS6wnPP",
  "key5": "3rar5FTQZ149zcjXTKPzzz8xK8JJGRzDmZk4WSyssqgtVehzP7otVuGWBZGii9h7hL5fH1aQev4w5mdFYzcdnL2r",
  "key6": "2nB1UJoZxnkzfC4d8GD641z4sSZqWvRMi7miwvJGA6Jib7SFtS5aaMaa5hJ7kLt2sUWaexiLBWUTaDSge4q42hL2",
  "key7": "2UMiSpovqUPUFpnWsEryqt3MP4GtTkJZkkESAEywqyCqTsUsTm6nWjVZcS1vKBtgayxsVQiK1FnSTDpeN6onXyvo",
  "key8": "5484yGQkN1g7jG7s2da5pH1qHZUvncsMvxo7rJoHGecx3YZwAqtHwp6JLmt7hNcZNJjKNySznCsb2Rj2xcUiPgb1",
  "key9": "3NWXSryHyDLvYRMmF2Y2xrPhw6SVixM4SnP1qXWmiwR7dMB7SUM2BgtZmepRrHTLbsRSKansAv2VMkvARyYpBVV3",
  "key10": "2eBGrGGHuKykVsdj3nzNrQGzCxMmDebeY5VagAKtVtsr5Q2x1sfnLydmH3v5vKdWzoqSzKc2GWeWAgLSVncZniB1",
  "key11": "4QreZLndq9Gop95V8ddgv5dC3cpHxiiT26Gec77ZeBk1t8GQsyCj5NnWpHiu8odzMKpa36M2UvV3ogmU2v5kUaWk",
  "key12": "396Q3mUzpNFKPGNQpTESEMX6b6Botfeh323n6uvgGcgUh35vpmGmT9Qo9ZKLmocVZYe1bX6AN9aGAmKH1am8qSkQ",
  "key13": "5C7ZC3Do1a5EzjBPLXpJQREfKGLJHA7Le5bpDbtW62kat617DoRxptZmQWc7fqsfvj4dXjPhUaiqEqWM9LfJ97PH",
  "key14": "3KGfUgm5imohZWFbrMrZ5S3yknMVgU55rWXzaB3QvUpjGWw1G1yudgzwVdyj4pBRT9Nq7byMdz8gp7oN2f8nLuhd",
  "key15": "2foYLSrgTzhetTKsd99QvWjhgDrQGyncUdNzJZtvVs2wSEbKojrELRSj1bSXdeBGus976SKDZbsuZdaTE6w51zVC",
  "key16": "owWtJPNcm3nWq73qr78nEhzRgSaUdHbHU2csACUHHLksU1Zt5jtdzKCZghUzPjvDNLCtHss1wnNx53wvrhBRZ66",
  "key17": "4y5E8STUzpavmPZX7oc1suxzz5H6tJ1sNu2husUWU3LtEAMEKeCtWe52yVX6ibMrNWw7XeZ3jDQW9eKiuwppCswq",
  "key18": "2iwa3p9z4pvLHxzU4k1hfmtTeyUgoaovZZ8KcmGNHHRnbziNmELf1sbsy6VaT7JRB1e91J191vnKGfzop7RMgsb8",
  "key19": "5N6CZJrtPKwh18e7f9giMuX1XzZNkfbaUTwDbVimyCxrr3jcAUTiNn5BhM2C3eVXHnHqPZojfWaTowr49aPwB6P8",
  "key20": "4jh11yycf3wBDxPZqTkpdjEBA8NTVEiuCTVt8X4TCBRzdCkybn4aptuGpi3tr6LNzXwTpgsgLsUfc9XAu5iygCUC",
  "key21": "48vJbcsttZbwQ8SqdWT5oMrboV5SbC1dfpTzk49HYDqWzvMXrNQoc98neLCumRiBTdCnKh7SCHeGdo5RuQppquhn",
  "key22": "5khJxcg6ucxWJLGPydBV79T4wcYcKoA7RXDPdhf2vrvqCxYMnMPZzh1gqQ1m58wZdPnsYUkRP58AnpWottQFm6Z1",
  "key23": "4a6LQoFGDowyPEkKfZVTZhAsruPgc6wTn3PwbngrZHFLrmJ6sBmh6hPRFaWEJzRxqJYYvQTC3axneNNDWuEXXYxk",
  "key24": "3CLZ42BakKJKNDCioaNhoquZkso4AH8Pgi6QdHGNfVjJDeACtruooLPm3u2zjnVyjw9Xv9VUVK5437CvHH661NGf",
  "key25": "4iVx5DLoczb3tgvzVrgTxeKCsrDr9tAHGKEVjCYZ9uzx36ffrR9thJU5q23zBswwf9JeMPjd7Yi282qd9YRfAuV3",
  "key26": "21W8fYuTCfXKVTf96zrZvtaLfxZpTAAhkvvgxgwWJnCL6Eb1ZKYrhyCAL9pLt3uDFbqcdeuKPZJZx7jukHri6Xbg",
  "key27": "3mM7Wk2ennLxuDRet16g4EUBgHkShiG4BzJSnNqVzcpFHf1smLKTJURJEf8jG1v6t2foQKiAUo6Wk3Ke6JGuG1b2",
  "key28": "2TGjxvw7rpYrmKWJh5SHvVjqn4kadgQ5DGcXXkt3W857Xq8DDsydzHaVEdfUbr893VAeiqCPCyeeH98tavRGqdYE",
  "key29": "M5Qf3ha8gnAcMpn5kJzd3JGF7oHQwkHWARnHtRh6CCvqdgzZYjxHPUxRVGLZLi8RZkoF12utoBxk8Xh6Hv4ezTG",
  "key30": "244Dw5yLx1H4RthCrhAqg2oyPC6UvUSjR1pLXRM8BnbBPTz8mTAmj7SKY9zH6TSiBbxBQS8628MuQwSVW49WHznT",
  "key31": "2dX4DYgYdb3CF9SAoFLaoHNLnW5K5VNmFNC5acGHbs3initxEAdfx2zAmRDDickrPw4pLvMopk2QWhaBRnJmvoDR",
  "key32": "4P9bAst5bfKkThtkKjugXcBLArC4jYr2qcptkvv3epyisHVes9QHDdHNzYP9eccZ6qo3G82JuZqhQGfqGyVzd8Av",
  "key33": "4sxvibvuLJSie5ZKv51kjHwMuTjh77i22ZncP9bSE43duS3sHcQ3uRwYciawdfqWsjZKTN4vsJEM2rtXcxi3yNAP"
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
