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
    "37A7jRdm7PaB95MJ3Vjvzv8AyyiRdaUgzjbzpLaU4gxXMdJ5jFT4ds6bn9CaYKjfH9N6AVFtb2j4kPLRigXvHj7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAzoh3CLTWNzynKLhyW2PALRGTR2JbFYMmjye8brqrgKGz2DjMJPdf4F4hJGreSN9QyBTMAtCTJquCK9QQUKHyo",
  "key1": "24JQNrMQQRQN3JvsySE6VV5zw3ujLdXKsjqggW445DV7DXmXZAs1kPWKtizG2dW3P6zVyJiGdAGikWxomaNzagBt",
  "key2": "4uxWpjrH1QPRENzUETtzQomti2b57niMk28YHsWC4T7sjb3M4y3Ste6ZoaQ5rmUanCY4SekqZLLs2cjEtKAxjKV2",
  "key3": "425RZiBrALYD4ZSsmQYeg3otvQgoEkd12mUkGukNyKsqs5G5Xd85DHTP9N49puzwwfXkj3w532V4CxHkkEGr2XJL",
  "key4": "5jTNRm5MapwnPazzikhbNTAJQD3QfEZPnqAu5Qo2HmR2GUitHueEQqjjzn5HTLzopH3HMvBk2SypLRvhX3bo5KFu",
  "key5": "4KCEtbw5hYZT2eLS6RoHYtogXQy75yjfTayGe6Zxx8wxPY7jjU14eeqYpwKBGqeo6yfWsRZrPHHNgKcczJZKQQLp",
  "key6": "5RHYLsE8jov2HCTtJmPnA1uVjRJpirJgVhEJCehckqmCkVxCQZPRYgss4NowpDvV7amPngaCceuA5dNr4qg5wjyp",
  "key7": "F6rdQPL7cwfpRDoFQaMthnxj2n5CY4Xe3WAU1YyTP1qFdBKav4DZR5m2t5aeeEFM5EyTktMamQitKsKsg6Ud466",
  "key8": "2K2nM4jbxABTpYbGbaYZbQHfar5csAqZWREgb2yLjGLTefk2bg7xyaR4VtgackvqN1peiXGjk1JBhjW7jHcQJq1f",
  "key9": "46cHyMgwpN2mneaDNEdYMoDbyiGVELBaC9GCEz1esH428Cn8Vx6hsK6Xb2RNuvS9aBmVB22oRcXtNPRbhVbDExm8",
  "key10": "3yTndY2UPTvKLTVQ3VaRgDVNossSqo5EatUHd9qXy5aBoF24kCpTfXQKEn6arJrMgqxmJ32LBdNjtXBiS8JQ3a25",
  "key11": "4FCTZwiErKryQgshJnjkERK1wP1a1xxZk1cgzPKDeUEtemmSw8bkdUbSpUQguGWBPHWeYvc6TbUzSGqsE8QsmygM",
  "key12": "2iqu5sw6MR7au92q6j3XAxW7BkLJcSKsU8RBcVr8M3n62K2ZLbRj37iBuqkk86f6CSWbR97zSQSfKE3LMyQBiP4c",
  "key13": "rtgbnGYUD55SVCEwKVbEw6FCZaoyUhixRxquPPcv2v1vs7ERowfpKANAPShP34qJqybn8jmvgpDR8m9JyqkLnGf",
  "key14": "3orhGJdaRLksg7jGCg9aq6rCSaDJTHkj2TVUQV3jwckGwLdMHDmXkwJxqYkeVhpjY1ECxUGXn6Kdpwm2FQ7hbDBW",
  "key15": "2iT8cZrFjTV1HUNQcfzS49fS653JMtSS2eqLPFNVf36evHt7DWiq5KbMnjNvDEFeppsvbKXvzAeqhLeMe4pLh2q1",
  "key16": "67MpUboNrT7iEuH31BLP5xX6z3BustZ8jscx93kkF7FXJDtSMXQ54b4wEPjoupbvN83GCYqZuwRTzhSPRWLLg6zG",
  "key17": "3KC66tyLs3fDxxZF9fqEQy2WfPb6XY8kBdb4XUWX8qaibqFrETLa5idus72qSuPd7dwreojhEHVDeu5YbRi1rTRk",
  "key18": "3uEApPnuzdGSEkUhbGtjWnPrboq9h817nT7k2DCcz81W8DgYEEKBpKif7NMLB7PjxmUMDwcWFBKPxXdPSie28Afz",
  "key19": "2pmy2gJp33rsiAakKXAUkrnX6vCitcD4dLAC531YdwfH6uDLRPo4n5z9P9ZKgnCs1gPRHk3UrkotsRChgk4YyJJg",
  "key20": "5Co5os5wAghf4gP3gFnvNgPHQQshBXgTEzs4T49BumjjUQ5C2av9PiGUBxKJ4jtNF53v3ZCjRAE9HnEpPrNfCSPV",
  "key21": "1Vh3zwXwrPKBjgbECto14H7CFMKSySHf8WHBwZyJyVJ7bJPjLoLPyFFhyHCUJU4P9LQtg5DcsNUXGq7CiT2bhe1",
  "key22": "dHpoN2LfGGE8xQuSqK8TBqFLitRV55yRSTbzBm5QdDtkHJxZoBNuhh3AF9zaYkwXxrdEViZp4dHXEXr9Mfww6uf",
  "key23": "4fJcWDu7e6WP7k5wnhLR7wdwpdQwEJNak958fJBCtbJSBdkQvsVofbdJjMD545tDX2FZjmv4X3JGnxk15j7bdY9D",
  "key24": "2MKZ9rRcUZXMd6Ry1dhXJYcp6YgF39N8vh9w53zRZjoCiL5rUHFj9pkb7FxxVP2J36CDxvckygPQKeDF4roapTdy",
  "key25": "5Xyj7J3fX3LgeMC5Mv35Eo1Jp41Yp67ojzF88xy61JxzGokNksGZzsSGHA9ktcgfiDwsFabBXJrfhP5jpEqDEKhx",
  "key26": "5fsTrrzd6fJDH8Kk7akTbogiuBP9NcbaXExqmB8923vT7BM5HCCdmhczwzZdZANLYcRwYwTpLywmQqqNVsfyCDBb",
  "key27": "3ivZReJjafsJjkod9QfFKr4C7qgH653LQbrpF25bQjkxseo84uiGbiVWqQiNBMwVV9k29ho1KsgGmX8CkLEeci2p",
  "key28": "4zGnrUPyH6LZ8uSjKjZpgpj5QFu7zx2UAWhzHvasSjeybPutzBYV1arTZFYJe3ifgjWnguLstQCfATmNBBDXcVzq",
  "key29": "R8hNXQy1km9Wq5Xu69jqv7mbW4WNsXuVLTpq9JJyRsSXn9zugJ6bFXfboNt1X6YPkKokWpq6g6227MKisLffJQr",
  "key30": "5ZgSZQodqtuGuuGF9q5jzg3bnuCzsVYTNcJnFznHb8HDHFoMT6Zv2XjHSJzdZY4e3EnohDYjHFjncM2v8KwwoeH9",
  "key31": "cQhGCEqn5Z4yDy3uSZMnEYPWWGBkd2aDrr7tKZN87mxP1xwCNm6dSLLp5p97m5h2pyRmXFYzn3GscgryadSB6Zg",
  "key32": "4Q5qpYhVPDMg7KVca9xFnpMZyKrCXF5bRyHfipyKyka5xextHYNLfrRYk5s7TAEY7y4t7gUCq7UWNPKNAhtxjiYx",
  "key33": "54JbfGeXCrLBG4KaoTtv86SZLSAiaLuG1xRduTrLYnzfSDsMDDF71rkcDURnX4bQKU2ZGv8oATu1bwNWkLTiUobt",
  "key34": "5cK2H8rLNw3CUD9UacScqpynURYxuXBD418ahBAXFjCZu4JZ2PwEHaGiDt11Vbat6GFvQvJnEh1MJSLQMzK7CrNv",
  "key35": "3sTsfo8o9ZgMiYr5R85ZhndgRi9nTSebYM88eTr1e3roQcG1pYn1ey8rUqKJK6B1hZ8VFBTn7zJHB9xGU1G9DEPf",
  "key36": "DdicF7r2kygiaBL8Vjg1TnjM3oxwJRi5yQWb3SUaYaoqwoUz2Vo8gdzAEW5Ymjb5uAWTyUk9XQczbKvFeHX21YM",
  "key37": "5eWDqKBfFeNn3QAWcfhoMwsJucR5xaC2mtHq9JPdsdHyaqNcX4eW66Eoyqhdco5x5aVVbHEBDtZ1rA5sH8xxwqEy",
  "key38": "3X198eg14C2ue17U9o42Pvta2Tv1uXNgiKEwxdMUKr7vGQMd5xYwGbW4DDBE3Kg7vPVKKLxi29guMnssNyagm6SV",
  "key39": "41usdeQjR2X3vaPCgFVUcVWJ5UtibyRoY7bayhRJZg69MZXiF1xHLJV9mrDupB5ms5DdRgZaQbmpDyNtrScRp8iF",
  "key40": "2Nfo2RJmne6MsALqXsaZ44DTUDxM4b6jmUFfMFMWeGHBS7GovoPSeaVD5LDxA69JLjsPfMbeiDxZsgGJWcHGZUtf"
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
