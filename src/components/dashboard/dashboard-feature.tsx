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
    "3xZwtKnQH4RTxhrvcHLNMztRBNuk4ayPGUVCtXyBdL8NuL9XFufT1AgDMg5HVmhQE8vH6gx9gFpvavin5Jr6JwXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJJJH435eRGEeCUQeXX2UcfSsfMp7vsqPEfCMmyukjt5HhZUGgoGsDpQ5hRsov1PLBZujdf1CWahRkWQk1YiU6R",
  "key1": "5MmnsZTQjfjn2kYsVxGkzAiNwqX1K7vZS1xPVFVESRffP48rKz3aVNJ6EEG2cEF51dDRcGvxTJ7WZygtrBmoEMsa",
  "key2": "2MPbEMBQSGLVUs7fpKaqFk5g357WhVd2bscmMaGZykNNC6p22yks5fdiQcojftj2fh5uT1ofx7AokQbYfJwXKCcc",
  "key3": "3sna2uUoq8dM1wuVwK3hWcc9qL6TpySvZjNNFWDkiRVDpF1MuztM2rDGKWr2tLnz2mTEV3k37i63NV8e3zG5yxVT",
  "key4": "2CoXpeGx7PyXCvm5v9PySkKj2ompAtFyiox5G6z4QWHdvcxuiu8mpmme1Fy8CACnC1ZhY7JNg5rnJtsGraP48anU",
  "key5": "35vRk9QzpKjSStFXYoavFHGzsG3VoqcmP9SniWdMRJV4NbDmGiSZCZxVR8CYQwH3WdJ6ke4Xf3VhYKDhxYCo12nb",
  "key6": "5iWXFY4ck1RmE9g49rwixRowAoQzEXShieqhyAxBvQDoVcqCRucPqveDtfPdqXYnVShSqNx79tAdKvuQXhKN6ZZs",
  "key7": "21DPwMe1Wfr6e3nnjzNbEoQDn6dqtADUmnfMkG82HtPQVuMSB3AJCbcfywCUaNtiQkwUhgv1oEzkn9aYc7LBHWTs",
  "key8": "3vQNbKhbX7yodAokhpgNpNEcWy4pQ9E6LAcGLf7KyGyfvmHuwMq63ZJJHVgtyg1h8sZZ1bpphn7bHk8amJW6fRvg",
  "key9": "3pZLZixtQHkJuKcgxfE5BhznKWZru6WPXdQ2gCcSWiMZMcuKWtFtL4zNKvEH7DdRvbqUATz6DWwbba1g4ENCTPL5",
  "key10": "3tSDLFVsRCocFW1NkipRJX8bDMG7XuCQ6sTKckyKC7Fs3hyYWWRE89HuuPpEigVQLdmejrZ7VWEG3iEDacwmyPtT",
  "key11": "2tYKBEQaCNU45n3EwgHtTZW1uzRwKpgnV4ePuENXZFnBRaojadKuYeR7jDhryyD75Nk2mfC7SDFpnSMmLSTP6ipB",
  "key12": "DdjPzbrHqVh3YKmGRrdJt6JvaZE5wefFRaHMUdZ5syRtvZzNhpNWfZJRRHwRrb23zTyTVWKwhafb4Gw4Z1mho3w",
  "key13": "9PdcDg2uWvefsVn2LzFQNagdMSDeNZDQDffkk36LxjxMGeMW9PMh3gcM1ayKRWSK27hU4UbRDyrWgmA4pggvCzW",
  "key14": "5Ax2JC5t5yyibnDvKgYMfW15zUsqFWdjE3Az55PJzZKMnb45vWW36A3ZMcsMQbcPWeuqP1YFMMi4wRsTqQuxL8Eh",
  "key15": "3GVfhK2sYt41iu1TtLccnR9ueiTha6XC1BecQBTuyyN9KhQTpMxgkDyQMs9sZGyXg39AzB6hVTUpP7TVZ3T53s1E",
  "key16": "5KciZc1fDCTBjsRytf22yTnvS6PJVKaL5t7kze3EAHbheTKAA8Sq3cx1n1uXYPdaUreppkaojmnKkGYacpbsEBuy",
  "key17": "BAC9bk11wmkUqjC3hrEfD7q3hKH2FMW3pHAoRJm65CRWJ2iQaomzDiSZmUtDF9ipeeiYxSdM31VZ8Uk8WJVFhKp",
  "key18": "Rv9njvYgZiMhxGehKdFpg44WAKTriwALipTX32LJmNJ2ZtyEpHehUfr6BDpMiqfRseWuaZzrQewNUzsEUiK2bMa",
  "key19": "4DnyiZ5AtRUS1zNbdQjsnznUej1uoVRSRfWBLzak2ZS8ewY9Jz5d53NWT6gU9MqbwnVKgDW954F8hRHmS9GTsrkK",
  "key20": "PnBs7LbSqUyUCYLy2VwpvpyEovDzuR9hbPEaYQP2BnDPHSU3U2KKgDUogRg35nh1bcawNzo7bXYbW8rA9c8hJNJ",
  "key21": "3C6puAuVAnd3DkF5qUi5C2cpJ21HUXL9uEzJw2GKrQkhAXTgsespxCfG5MqcR5TCkKEsyYhK8xVRC8iygpwmL5LD",
  "key22": "3FD99ipvhF4ebNmjWVF32UkyQmpyUvp4By3wjN4qy4GW9wZNbYYBkiYQZchyeU9Ksn9fGDaaJUDyPBNNmABrdGJv",
  "key23": "qQacStFDZsngFDSuyuBpTKdPihsLPa7aCfj6h2uDHMsjgEnve6mkJUkA3FDWLe6zMBsLzjF9bbAibA28TErwgCg",
  "key24": "3b5TPP7t8WDSGJSDCy5J27NT6AbvqDEyShGu9GRcERvxQucVa8dC6vp5xiaVv3WxgZhPv7puQ9iMZDevTNEV8Uoc",
  "key25": "4mvvvkiam5qHdbrJUwPgyrdEoRYrs9T1mnbhdBUHbykhB6YqSQN5YC3E3pV5Ynn4QoRmQYweGS5sCmRgugQkTCzo",
  "key26": "3mHoTRhzN4RaE1KHZ4mi3G7HrY6sQNWpQNd6RcAYGB21uMMNyetZaqGmgzS6ZLUAVmTu2E4b61UHex64bY4kDYyX",
  "key27": "3Fq9RHgY3EMVQUCG1oZpk1Eq72SXjcepP6WhEeJCTdKx6fqxf3hQTQ9UAKXN8TRxq5vPmMfS2L74tDGuSCkT7oGt",
  "key28": "4qRNu84dPAtjGh84f1pKwp5CSDCbvwfamUmBYqdmZH82GmmZ72cG5944oFdJSH5mvSLjZ68hu89aH4hZkrqf5mqM",
  "key29": "3bNFrBhz2SjoZsXcBBbkdds4FKRrcr4zGNC4joxgsY3LZiKk3PSuAa15VZ9FvSkTDskM9PMQSJJhFWXW2BTRphTa",
  "key30": "Y663VyxM7WnJ8CfPZkUuRH1NuHsu46ZbbPPmUDuGwBUJJAFokgUMr62g28VDj6ZvyWxKEeNMykEag8HYbryhQKn",
  "key31": "2itMkLSoPVqZosCdCcKw1F8zcvgpEibik5XsbWCvPDJcHqnRDDm9fjPE22wetCakiiwq6jNGd7LuG9X2yJt24HbQ",
  "key32": "4jPYLSwY6uKQ8HJuN2zVXXCwKv3ZyLXua33z58Ki8fu42xDULUHU76b75XUj4gEYkmWsqEtefo9Ah6XZ5gVzBS1e",
  "key33": "Xo6zcsu5xyEQMYyCoQeHWq8sM731oGNwxVne5K1hY5cgdUBnEVAYHz3K2hbmUjmoPGWMcdqdqSErMBdPT6kQ1gu",
  "key34": "42obSsooQS4UvvKnyDt1ynWysttmEEpHZkDbyBpMUJQw5TxsbGR9Ycgn8s2EX1TLcR4Dr6okuPTKoAKN9PnXitX7",
  "key35": "5hmiAZp1Qi2H1MQ7WQxJzecUEdzuN3WvNqqaccjuvmqnxUoSUd6rUA4ywiiC7X4uiAV92WADbLmMQi7d277tbUZM",
  "key36": "44LWKkx6ctvZ2Ap1aH9X6sFpd3D3Rq5WAD1recM8zaGnYEW3LeYbxkFdUKo1Z5jdn9hc2FAnHpqrsQSW3JwR56jW",
  "key37": "5VMkQY3ZSXkajjRxd9FQaNZu49BfxneQ3KpfT1E2QHQBw3zGrPLVMf4DizfDBWqYvdYxoyvpzTykordhHzQs1Pjm",
  "key38": "4KkweMPf21Bhe14BqJhKxb2gnsGhhG25ASyHnKxgZga5TamRqPENDd5H6DbsYkUSLBNKqBR9gWoCPbomfyEdg9Ji",
  "key39": "bsc8BjymNWNQW3kMZspHak4aFfFfSZuv8Ncgr69R2XJetcWngfSiSzhF4XtsgtNugJpCQDF3x64sGtaNXWuBbk7",
  "key40": "4dmt9XVrmzCqrLBqQuHPNZob61U2GBnS6C65jVLEuAqz7uxQ36YirhJKiHk1kx3NdG7CgwkxTGxwuyofy1rxFJJL",
  "key41": "45HbtC4D8EpAjQW8whQ73S4czN89W4o5kEZaA6vdPYte2dFqEvnuYT2Y2Fvm5EZ9QctmDwWQH56kCKutv2138G49",
  "key42": "5UkuUfXU6X6EYhy1eDibzu7oCEAxvdpazKQhqDpUUvPrrgi33C3VM1zBNmA7KZqPvioQm5u4XerJCnwumAZrKqc5",
  "key43": "2D5rzj9tYoAAmwRyHThoZPtVGYzESRxq97QJUKEWdBLThJpiAw5Yg7zxMiqP62szte379RScyYfVpFvTzHp8D5s1"
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
