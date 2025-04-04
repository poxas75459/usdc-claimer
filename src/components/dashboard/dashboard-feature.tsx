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
    "EHqJCtWsUSeoePMLq4yY52VBam3twXqh93gmx7q8WDAPiBFKZVcMnTmWqPgEjyc7r6JFhwKrG2fe6Kk1qdhWd6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wS2B51rhnJGXM7HoRGzPwbiTo4JhH6A6JWtoBAmQ7XndKTEYpQ9gTdaCzdgSbZ7eW1G2jeyb8B1Rk7sBk5uJmbL",
  "key1": "RZeMT66XrUT2Ri9uuza7PFw1KWAVFy12V97uogiNugnzGmJaARgtnzCShXkqwkeCnJNvrbdDW6FYnYo98DTFBSC",
  "key2": "4CvAdk8TZHi64zjY8TbFWdcbFcmSbM3MJCWxzfJJh6E4xLmZrv7guNkRfxi5mmnWG3cgDio2D2EKkKHpH1fcmBH4",
  "key3": "8iLR7nmk1TAgwEZiq4KBeAZBtwo2TKn6DxTkinRGHgnynxvoetKfFswC4JgAnz8cKSfGXRTnZWXzUWKi2SdWBTV",
  "key4": "3kiVYZHbSBQcmFNUiysVMMhoRxA41UhSMr12ad4K5vEfU2FdTSUoCsSo6WmCSUqorsgAtPmfy9XTmyPN9HaiCL2H",
  "key5": "5nnKfjTQ8iHY4kEkjjcQxTYSvx1GKmndAiDwYndXxUUMrZT5A8oGez5xwJQHB1kQRQeB5k2XzcVobSVezXFep4Fk",
  "key6": "4Yg6Eyko72BU9hKhtM58EDx2DRx3LrZkqCeXPEinW3AgELnJnnuc1B9jaqJtjjnfyWr9HJ4Dergv697kBM1d5MSX",
  "key7": "ZccdmRTmLCkJGv2VwzkK3KuaecYM8dVu7GnMjPKKDeWJpAFWRfSY1tjLFdxcGHZafahhh4ikLm5h4Ah15LXbLi6",
  "key8": "67JGVBJDtPniEvBifbDcL8XiJsZWC497fRMDDFqVW1oscmWJjFvtrHoq7zzQRX1Zz1ukq4nwsBEu3VQYAL5iqU9T",
  "key9": "15pjWE7cij6axwGGcuo9S942KTSTjCcGJLjfRdwUD6YBPKHEAsur3AKRvAEu4Msm26N4gkcR73hLJJ2HQMNzC8m",
  "key10": "5zWU7pR8txUMwfw4MQhQs9BjYVnkMFxUokLWibHZND8yq2Vam6y6ncAMXoWuLt52PbXWfLYbW7kF9ggQsBqnPhBg",
  "key11": "5Ak4b1FjBGsJvsXmX8gFBGzENY1WdrjhJmGBMRRtWvsVJzREsAJr4FazbpJbrpvfxiAu3ARukQVgZ8bxrs5jiVqJ",
  "key12": "3MdcPhXPed2PKGPsgDzadC6JogNv42u6yZgR2yeZvEWaKjaM43GMQuwHf8bijWPjxpfKakq31XaQ3tmG5GGPFhrF",
  "key13": "3QWoBuVzXq94Y8fCRYjg9WMEcUMwq1Gy2yswLhyQQ78rwjV3bR1MGQUMGjnnRB9CLwrpFeLt95BbfJNyMpHHGgSv",
  "key14": "5e64xAe6qsE3U8h6RyX855EF7FVDLdhqMHVszRwmXxdtSSWjfRYikHzv6RA7qL72tVdyN2jJhRGzj4zm4vSv8dJy",
  "key15": "4r5WNTLihEqhbKnV4C3HshRBCo3SGrobaUN2p9x1nVrQUJa2hhE74ZNBG8MTTRT7F4JgjLp33xj5FYKyqCtYP1aA",
  "key16": "2SFGScxqkRZzG8hMvSTD9pLVPrndSgnPbYPs97bLD9pFxz81B7MyLJ7jmb3VJHhWsUsGemFDN8SsRLbPSUZ4CD4B",
  "key17": "4obG3K9hukhPcY9P5vXVzCSjXPphLzBaDmfv4urQaG2YTPUjEudLjz6UJH4W11nqKNXVuSU12Wc39UDdRXn7Y9Hj",
  "key18": "2EX7bTx9iSbgFjW2aAHH4jBX3UvvF7cxJUthT6jsocMQcNZVSJFYcXrgq3vpFfWXhVqJwsfYVBk4wT1iYZfEbGQF",
  "key19": "2jSYakxF5pT1Ej5szPDEq4WAZwgK8WU3Bc8MGEiMDL5SaPGgTvgsUDJYbt7m5pkLuVJ9nX7kkvDeETKYoYg6RT8J",
  "key20": "64meiSi9YDZ1yYHm5Qjx3n12ptaZbvtNz7asTf6ENr1AMWVY5VqRmJnXT6gjuSFGqYPujfiizjwsRW7j4WeJisdj",
  "key21": "fWUoPnPixbDaryT3qRvDoQsh35nzp15m4BD48pREVvPb2cTTSxFvBzyrGDayoqvC37URW7iBDBwFShFvtvmjxhV",
  "key22": "4hFh2iYkjw19VoQGGHQtJ1XLDsLQPKRF7M85WPkrxG7pZncmWju59o1JpyZK8aet1ibfFUKYhzYrpHSHnhPQSEMp",
  "key23": "5aAUuhV8bBnbUfad94aeyb9JFdC7tB2bq2hfWe513zCcZ4Xd2kTW6JAXbeFefmrnwCEL4bsa31Zm6muifyNr2tmA",
  "key24": "3WtJHgrZBap5M6Q3iM7TwuWCmEq9DJDGBUuqsqDp52aDPmM5cmjK5PDGSybeZzzWVzBSy3U8NQSUdwaVoXZnbd6H",
  "key25": "2MuX9xZPGdFnV5KTCX5ZLDoamK346UBwM7dbmZiTyQH4Mfg9LsgyuqCR9dvqs87rrBLvsKr7VBWXFeEWyh8rCvu2",
  "key26": "5maNyP7A2nuLEf6xZPevXBkxeif32WgXwFjUJG4cDNgabbKSkqVfqeBLjw2SHf2fx3VYKdkV5EedeZFqyWGnENav",
  "key27": "4UAC7DBnRvMCSYQaYM1nJvRZgwN21NFiLbsTS1fLo3ugNTAxzhwq9bkcowNtZbPx4KXtvnGgDz9WzZLCo9whmhdQ",
  "key28": "4atoUXzuEmvse4NRZqXo8sDovSBciubMvzWXHaibCkqRSKzMcbW1pCdXShcLS5GsWNRHrM7ohNbT4VTZB62ro4L2",
  "key29": "54qUGdGmNmSrD93bZo1heZWGg3omGgw4n4UQ9HGmAoeCDsFHCBNZRZDYUeHvPfm6PHXqNfsPsVbV3MZUK25tpj5K",
  "key30": "Vk3xa3rZqsnhKauV3ZSy8NoNE86679h21pGc6LgJwEu7gfuiWPYe8KXKWftv8sHMA5kqW66ymZsaUZL4n7D7R8d",
  "key31": "5GqsC3S2g3P8oFSxoXYTH6qC6UKrnBE49qPr8B5esc5hGVa8mSbJE1Lf4hDN4FiHzFyCEiYKoFYJ77FEWWKuogGC",
  "key32": "4inhzjhzmxhX2GbVksCDuFFTBba4zXDpEXYcE8LcBFzQADbcNXhWBZAY4EGjfMk9KB5jPWArkKLQRowcunxxsJwj",
  "key33": "2VfWsrbPW3AGu5MgYGwfQeykmurFvvGJHAnSgP65j6LGVrKgnjGTPQNJwbp6bRL5BVz6JBy9NUftHyQoiJKyFqYe",
  "key34": "zswa9EzpgENM4vzme95USdQ1ajXbCgd6RhTxkrcbCiqfpwEyqscEkKhQX8Vj29zbxQKvppmgRDf1Tm5bgmb72w8",
  "key35": "AwxT33XWYgTEzVGrCqR8yLtgNTUSxMimnJTounGxDGspiWYLeTWCxwq36Q9MyUUhiKo687idpruFX1J8LHgEtK3",
  "key36": "2b3kpYiJmtSCTE3yaKeaYrMZqUgGfAtD57akvQxFAeP91hmfDcwS363w4Rj4WLtNJPEv1E46Ri8bnCYSzmpPk3hV",
  "key37": "umouf1srAUk5Gno7oie5Pmjhm3uhA5WjNGaipEh8mcxryE9zrQmZT2AwEBPNAEpePQDcRgVpyQe5PsJ9y6XY8t6"
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
