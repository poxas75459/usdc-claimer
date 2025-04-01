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
    "5TbCUVYJbUc5WLfjNi8pY5LRHwPZD2WTzBroo66PvQJHSZKMbJJUnu7Me2RdKpTstsqb3YhRYpfmvtXLiW4rMQ7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgPaL49fYwxCTZkjrp7KZnGW9faf9uYr6sDxPRtER4C39ByMs381RpjqJX6EKqdP3PyWvoMQzYKLCg8ypya3jco",
  "key1": "3uxu1JUWTQ1ECYNmxwfrGuDoEGnK1xUQWRHefvQpG7EWkpqPK7363z9RNkM282YG6xQZYchVykaMxmMxuYG45FrJ",
  "key2": "5RHjhJSonC2wWdi7DABD6ZQQ4jMjNtjD8vcshVVHxnobJgQkY8xK8grHNZrmMso9hT7uTm6bSPbzB9adggti4FKC",
  "key3": "5MHsu86si53Z4HWsHQGTGz4nD16sSnHVjGfcCh1cqTUUhQCrQvp7gsYwD2ggJLHEDd2tHyZC2MvG5sj1eAFJ7nSr",
  "key4": "Axmwhe37bADkr1Aec4AKnxj4guMqdzwqu8Tyj6kZEw7KxRJLoychVamC5B2VELUivM7aUzuEnjppA36vzsrmjDQ",
  "key5": "2UyBYqwUM39B83sKP8d9N4Gh91kfj4zdzDdu9ZJykXDjDFXyH39DR84SBHo2iqusxWiGr9FAkkPqcgA4Y3XFow6T",
  "key6": "5umiFVqyzBK9yBR3yb6CEAB2ijpLjKWyJSodpxQSvhtGQFSy2oySNZXxSWVBp1RxMXTYZnj45d7FFnDCta3WTHRx",
  "key7": "Zr3VMcspY9GDxJyDfZnbmXxFw6Wqr26nZXWPYqKNCVLQyroJBGKph2bXokukca7ZhPH1YTVf3znkcUtFppa2pW7",
  "key8": "5oTkuRSihvACfFAK4wW9XKRBJSSTaGW8qbAf94UzNDnidkNz3x4hXM8YjcBDz1KyPXk3C4guBt8oYJ4W1QrLUyBw",
  "key9": "5GYyfLFRHpCbc7n8PEnTzurnKTnMPH9aHGuvavZWBmU4PkjEcjoCLLP2rVetsvJbCwaDnrGANqtjsvSo6y9zeMLT",
  "key10": "5SJyzYACvf4ii6ics8wQcpRLuTM4W2oyUSbjQEXnJEtL3jtFFqvVu7v2J1SjxKko38QpUZcVaYufSDVe9So8anGH",
  "key11": "bXWv7MG9aBAcnE4A7NkFjuqsJ5hv6W74MbPKbHzaBrWR3LJuDZqTdDk8BbhTJFrEPFyDTEx55TzJ6h6RiJL8t22",
  "key12": "2DvcCdhHHnm3tYmxifhWoQnmdngrHmakeJgh78VnhC8UZsNmmFLqtFL6eLGMVsHKoUhUj1sY2C1EyDMon6uaJrgs",
  "key13": "3CyT2pv2hKX3dJ2LATAucv2ij5NMfn9A5iqFrtXZXe6QHXzapcTstpjjmYnPcotD8e1NYg4AxhrTP6YWdKcaXjsL",
  "key14": "4oWUMKh5cb9zewBK74DfvDMPgfvH5dhURaDSJrij3V1GfgvAsLBMMbcbBqQasVy9bQiXDAaxtEU1WvqMuLDAuEHt",
  "key15": "4EcQLapYLukJb5jvTJDKczTJ7VAxPshCq4ay29c5CAG8Fb2rcz8V3NKaMVbWLH61KFes56uHNj6XZzpJcNfFX1dh",
  "key16": "5oeaknUFT5LgKQMuWjhNUzQgprVukTfPvJAJYGSi4ePi7F1H7KoNnbdvp5rdmdcLKx3EvtFHrWzTmHkMwzpXrFcT",
  "key17": "2URvGfKr46EQ1dQecv4JiiNsJPLYkfdn3E5V2uXa46BvCjq6Y8KithHLyGrRjVDPKJ53mq71xqRj11VMRXpqm2zC",
  "key18": "BZ17u9ijDwn8GVSKA9HTiYSxtv3oLwYy9YK7TrJE4Nfu7uhtFgGh7QQ5M7RSF226u29nSyRiAVTHoNfKTwYpAvQ",
  "key19": "W7VLn4XnCJC7vtVtoAmiyGN9A12NjhcjfDysppM2kuBKHiAHidhVW3Z5yH1gyxZQWRnoqy2QiR6hiX8uR5Fzh1Q",
  "key20": "2RckTEJ5gXDstjsTsK9SSTZ4Ks3BSwsKGBvuXubshLfDJE1wsgddnCj2G441QzMGwR8qYucUnmootfXBiFfo779N",
  "key21": "2tUmp1BzAcneSq8z3nTzfcVXtWMWwC8eECeiMceXYHVva9eJZo2NKdwyvwZRwxkkKTMiV47yYrB4PuFHwzxqdEjS",
  "key22": "2ia27JKx8Ksk33RceS6xn73yRgHWbvrpfauWBBpXRqFwH93YHgCAiLjF7TyM9sd4mHkkgvp9j6rjE8JqT8HQ98st",
  "key23": "3zZax4Ecin1G5K2DWSFk1kWKWzk9hRcmQWR46QyH38tLym1MsKsFGmpKYk7icjKijfaDaQqe3rtP7G8E9cKZt3yb",
  "key24": "5Zm4SAMiRpaVXw58WsJ1EBvrJF2YBULbei1SPtEkA1979QA2qqDLgbh3JvUFK4qFcfnJyoVTk4By2dPnMxLQ3FoQ",
  "key25": "4385mA9PKAZsxga6mdNRKJ1EyL15EgAkMEB9ewxeCcxjXAUkWcu9LAACpuahhtoHWJYy675LTgY3fZUzXgeqisfD",
  "key26": "4n1V2hXrJs1xpWyopVmitLxvCoqjnPGrpzzujTiVCVTX2CzLW7yt5yeZsBQaqprK5VxvnCbyEjDnyS66bYbykBxr",
  "key27": "3cfW83nZ2q6Rp5TbGr82qfsQyyeUSS4AufMHDtwbihmyyhBV8Eq1pUA2RjB3Jma4m4ZrAfss1mgLrZfkNaEYZCDk",
  "key28": "75oVDhnu7QPiMD5f4tM3ERAZFGYRUM1yWBcL63r2BqUgzK4LeDvKczX6dYL7kEiy6kmiTfookjXAFA9jbr46cBW",
  "key29": "5sqkj8EvJ8zSUdLpGV2vrks7UncXMkatxMNsQENTb1DAFQLQTmYYJnh17zE7KQF1FdFnWfSKY53KXknL71qodwhi",
  "key30": "5xWgVWjvrSDMWTKJvFYQJ9ba1j4F59KQN5rhWZjziNH1RnroQnpdpSpZk1iV3eWGDBzeQDT7Ma8zZDZHdD6LjKKX",
  "key31": "4V4ii9pRijfxfTn2S631tR7DoGYDutHqV5vDfLUFEpedX8Aj8R3v7MUgCyuW8QQapv8tQyTD7dpwvABaQVuijkmK",
  "key32": "28iTdhNZeEWhxm23Eqdiy1sScPwq8pDLNGnZWzEWS76oB2nJaREuNMV72jciHNWqfxSaB6tHSWEGCUrhMstBnjgg",
  "key33": "3y1pYVzVkft9mufQjQjSn4BpbgsAWiWjQMBnveXUZPG1oym1HYaPnCztRWrCiXnbJ9BaCT7nu4UtkY79WzNg6XAo",
  "key34": "4HsTrdeYHuvzRgboh5qw4pob5MDqqHg6yLfcW4f7fzkNVxa1FdEM7TtL9xBceevynidR3dZLJTTFXHN1qtjNdhwJ",
  "key35": "MLFjQdnQKFUXYGGmvBhWHL4is85HCLn2mpzG2dg1UGsopjC9AiyNkwWKAHZir9srMnDUYpQ4EoNS2PbytHP9ojM",
  "key36": "2fXZgMS3YjVchUFbTeUoifRSG26RPumYLs1fEmLRZLChLbTaE7SSRUSMWBS46GGCxE3BrtqC7HTJ264eDfQ6Gmsb",
  "key37": "3DvHsXvrwx9UEHoh78JQkjzp5R3nT263EWMWa53iiZixPPgUjixzD3dbnFX4cjqBjnUNzZ4XKdm28WtaynnEY11S",
  "key38": "5DF2zbZS4Pz6iu6tZ4dMHzvwCnMjRaPAks2pHv5zftdNvUWGBjQGCWP5UioC9PWqV8ty5cQnZimXJFi1QKyYUVpf",
  "key39": "4xAbnkFayhg9kwa5odfupmi4GaRfWEvuhfR2RRfM8MKdpdztXEMaoNQAemGZUXt6Gkn6T7fQVyRDMrfWwACWTXJs",
  "key40": "2iwxL27btmqS2BV3rHQefh5qf1EnXaD1RHYzLKqQ7Z9LFcs927wFmDtPuaGTHwqrhqjDQAzvrbW5scvQXAsd5FVj",
  "key41": "3uRJTN3cyFrHZLFyRceiTEXjtiXxvWMQg8eYCkwXJczzb52BkibbxucwdzxXRpBgEHe2t1rEKSWsDd1ok77VoudN"
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
