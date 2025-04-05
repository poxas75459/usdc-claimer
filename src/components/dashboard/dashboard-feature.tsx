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
    "5rZCqYqLBtH7GfNQZgBMT9TPpjkDmJwoFJfnJ7JBCYcyAHf3db43bK44Tbb8F5PFD5uTYd7RBsqyVaWV5UV5tqFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3QSxc4UAWumpJGaZBeH5TBuP5zT1ZRZPWxy6ERsRfBjKeLKoE4Ste42NWY5dE8Wn2FTZYP75NFcuuZxdJmb9F",
  "key1": "4qM6k9b2A9Rn8eSrAWhvKqbi6PMW3buQqrAuotStfEziosAZVbU86wpDo5Cv4iEiKMbqZVo8uN14JFs3nJEZ7rq5",
  "key2": "4SsjyWwQ9xfk5ArE1Q27XKq3rQWpoEYLkPy7zXDbPheTGZoVeMQrUxGHE32DVmXpwcxBCBQcMRgvX1FQDvCXcaZc",
  "key3": "3CZnPVt1SRJSegBhFLC4VTNrzGLakSBb2YREwxVwDS8NRpVtriGu1f9WFuwyqdgn5Hbc9XWR7opF9rqFqcLfzD7i",
  "key4": "3KapXEZ91837K6mmF743VZJhTVmNSeNRpguamXfLReyiu2w5v93NVdN38jMwAaznHv6MV6nrMxDGamD3jgJbnEju",
  "key5": "3h1cTsiJ8HuFrjdUVx477zvUgthTzjufHpYCDDhV8bKTMpsdESrK4Y1vferyFV58zWQnvsT65CFGmewbSKoUh8Va",
  "key6": "5aJzBo2VmmytJ434rHEEzYF7YLtkEyPLKGNY2BQVk8KLrhh7yYpL8EdqkCrNVDQAsEtxb6o2TYp5kzCwyizY3bBn",
  "key7": "36Fiwa4vYMLcNTqSTQ3H7BPRK5yZB2GEj7waLXgFQR1mbwbHi12PFqeE3hxYfYYiMLbVyt8Hob4VwrHoc6LMepKk",
  "key8": "5P2SDSHL5VZB7WAEgwX74vGugP9tjkWeRuPzMuAForaWrotcBiVfcPjN4n5HqywaJQ2dqTF2CNFY9hvuRSmfNktT",
  "key9": "zS19oYufZYMw86LoVNbRvezN11j8PHufxjpSoSMQPENkrcqknNEU4wbVANiu7aeUjG7XnuAoLBYre9MVvtA2A2j",
  "key10": "Exs7vwotoocC3JJ3CdH2fUqaUDjNfpWrmpisAsokfQ4sq8Pua3cePfA2GWtvqMQVp4zmsWEMjFeScscnbV5myeb",
  "key11": "4ywmTJrw22KbB1AyJxRdVGW4EbDD91GFXJzyDLcQ2WH9cUGbw9neJ8Lv6pX1f3TKyWjFrWmrp2fi3PxQXnUu8Xtx",
  "key12": "rtHqTvLmACZfTgUM3aXScHMqNDMEiFoAAs36iSTF3Agv2WJpvM6RpoafgLbqrRS5W8rK6X2PCxHvTwUByrye66R",
  "key13": "BdYyADDNtNoQBSphh3jmxCoiCfb1aXEZFFtPeZ5aVXvmrHrrzq61GoNvaPDk4rqsisYmkTic1yqBwWMrYDefHUS",
  "key14": "1rykYmJKDdiebxmdP355d1BwLnW6G7DtBPoqenegS3vHisCWRkPbc8EfXgmxSUKm5JKeTSLe4QL1vDz3KE57WDC",
  "key15": "3PWL4Z14LjeESiszrqQQWvUEJZ8hp4h7SDraWJiVCp5ek8oPsftR6cdP5mTu6XtiGJMwMdWQWBG6gAZJn5P4dpGw",
  "key16": "38saBs7b8rqkY9KJ4T6SeEGHoRackc7rhXCEeRmVWG8XTUTGVcz6nHaWHWkZFEAVJdXSrsCu1AyrbXCs3DNxRztG",
  "key17": "3ykWKSSWq957kGQusHX6i18GoHX55gnBAeHwEQJMzgjLzzV8HvMpdvM6uhiGAoKKKwFVLyND3mFnmsZHD38bUvtF",
  "key18": "3PHpRpdU5rNg7sTCouSxiUKa6V7tDqKjjHD4NPCoQftizJhjxVXJQmxeNr6YpjmjN6U6SeUVZdb4U1sG5i8ZHj8x",
  "key19": "3zSnXaFW6ccL9crbE5vRzArcpaU8yNuw5aZumgrsLBnEUKY4sMx3bdFRE94RhygjGEQ1yqzkb5HDVhd65ozxp2zV",
  "key20": "3TJEBAx3mkTFMoGHQwdRFixeQGn6rWtAxk8Za1FcNqsECWegB25vLw4ZJpC5chpbH9wVP2nnSDWosW9Gg6LpQbc7",
  "key21": "2313aLQ6vsnACPwMca8T3h6MJdb6A4uC1UjsAUSMnHfxStQMhxgj1byJdKiDibYPXWpBe7fPsB1Zf7TaWncLamKt",
  "key22": "2MeyrPUVszLgSFLef6c2eVCsb2A18LMNkbKSh12wJ66u7aRG3Ht3ZsGR1y7JaFNtSpRN96j3ppdUdFPmueu9dHZU",
  "key23": "2oZGSNGRCss8myXr5Z4trewP5mFa7oJzAkuR947tFDXmd8u7UvBjCBLswgM6qQZAZz1uDsqd4jbCcwvVcjewL3RG",
  "key24": "2TRdiXqC1QNMUJDGeEKMXTpLuKX1WknVhsBB1g97i718jGWbj28dasUBmx5cXwsUsDFM2jbLAXkfc2x8B5d6YGLg",
  "key25": "38z3oTfAZuykwK7mi7VDpPeZgLXukBnuT7NNdPptHU35uyQnehW9fvKdDJJrrbhy3Tn9UECQpejKEj4C6fAXWuoi",
  "key26": "3C9YkVVVZqrJ5weEUjtVGiw5nNhjbbZeNkC6LpV4gXS2d6ujCQLzwRuJG3XjHMGLndxbqUGfysgxsw9MUzpHBgsk",
  "key27": "4s6CbkpqNdBgmZPQKoMNwBzgbhf4SVSBn24sjgfFf8FKC4WYYPGwVeAduGu3cZkKJUNojQoVQGRARAuhyu7rfqKM",
  "key28": "2nCAXKAQvcJ8Ato3pk6o3DBxdU9ngJoeLKPQezQETHvQYJcokwDP29DPLL62M2nfFP8h7Gmxs3Xr7HCi5xqGUFrv",
  "key29": "2g5sHeMVWpa2VTGJEKvXEy93e7wyxyQXdjY36vsfcNfVDsDDN2L7tMkR1bWS6shrYhepkqHDVcnknN3GnEY2oXLn",
  "key30": "4JP71rqUhgLwahqgjJKw5dwgKtgTfgfwzKQ97NNKCi4aVBsj13pc9VQCXN5Um9S4kSbW4MZ8hkaac5zrLyn6sDnY",
  "key31": "59Up8WrZPt4pc6KMkqjFr82AAmuQwJ9rmTN8Ua5mmRWKpVxV9UvDW8t231ZriKFb1x3pthuEFK9me7kGtmkaKAL4",
  "key32": "4CtnC5dkjW5CEXe4SJGigekuwMhGb22RzfyYM2DxHzbdLzVnKKrL3MRFDxxkeoYtybH6LA7Jdj9uCZz59Wv1jdA6",
  "key33": "3A23Lqsiq6C5LyZFh1HExx81nkatBF2R37EDYps9knpBNKecPyPwfe7FZhL2sfj8ysx7pAabYp3Bz4qomEEjKj1G",
  "key34": "3QeB3JJxgaYxNYTvgQESu2n9Pt164Z6fQqt5nL3nAN4xsX7akF62bVhN4cnoPXe2eoksAN6o1nSCGCS49kuo24tP",
  "key35": "S4fP36wZnUcgBjfKkyxPZTLQ2Yphi4NSUMYjkDio3krCMbzAhEEZPMyCrJQVX8Sn9FoxECoS2WeodtqcC2hxxAk",
  "key36": "49upE198RWKH7CdwNWbj3GxdgexrUWJpBE64ExxYQ9mnAAQ5HHTZyL8JxADqpZsY8WA1ft3YCUoe6xCWwRN7qZKd",
  "key37": "5QquQ4FqX2cenpC26ZeborZGN4YTmJVaq7uYXYg8wLBasf5nTcQjYUQFB1mwPCAH21pzbJwggtdUB1koWHPbWmeC",
  "key38": "1pac1az9Tn4FvQNZASmRVwC1ZrmSjR8bKjxJW7qUXuGtL7wCPtQM3qzSWrcnpEoXAp7HwzjS5jn9k4puLJsL6oV",
  "key39": "mz6WXspDHJrg2JVmzqD9joDQWdprfwwaFN5HBNzNuUGBfiiUVuBXBH1GPnLZprr317fEjcznQCxVBXtEyebEeAm",
  "key40": "5HcVGNzpzRGHQjCe9dTsCVMxzwmDe38yh5WXX2caw3nzbWtgFTgvqmgnk7jzJhbnfucNjTpfWVNg53sB37tYoJpv"
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
