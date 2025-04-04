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
    "3yGR2BVCunhEUQxwJ9JDSuQWaPh4ZfkzfftxtPWK4mEorBYZEiinL5HpAfrDbzNKkpoHYhZddANjSmaKwsNa46o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKhxYVEinJ1BryyoAy58KeDG2DaJh3xrQ89AafHCQaYkNARGW196tqbjzTHN2KETsBbT5f5N3s1w2twuto9EiYk",
  "key1": "4RAREk6Nj7yysJ2A7hobTNymrWneiE6mjR7469dxjbW1TLEK5kXXhydk5nXTtUo9Wkz97DMjcEUVcsx6HmwUTGXV",
  "key2": "2wr5zKYhwSV2rD2xkDY7uCj65NmVnxAVb4kH8JBC6y2ybVLpimVzvqjWgpTrTRWNHmc2kzKHDSrqZT6KAyGwAvvA",
  "key3": "3qihSm5B4cVksfTvbZNShpFaLAAUxqy8kxdKQHFXjJWz7Unzn7QABZVJNWqWBAGBZsFzej1MnEXpeEHxG7u7Rbmo",
  "key4": "21n4yLTKycgiHiQ7qJ6aySc8Dk7BAaVs5wnSieUVHYexhFnwCQEJ8AB7pPRLpkxiefx4MqHHCuCzTEsJz2PMoUnY",
  "key5": "662meoQg8mFZsqjcUgUwCYkB6nAS28atPWQVXr2hgHJSXwxQCNJZ3rauejxhEX95TR9N5KRpSieZ4z8JF2wTBphk",
  "key6": "3vHzWJ2cedf21PBAmgPSHoaz8ecpwmkhMqABYJBXMnhyPS6kJRVM1qYTf25Sk1BWLf3Hm5hjyDbKcd8bdiK7jRZD",
  "key7": "5n3yNCqCz5MSzmEXgcyhjnGkWJf29MY38RpMCsa2gSVDPrgwmWTzcJ5iveZY7uVxQP64jQGAUb1aXiCbzZbzUpJm",
  "key8": "5hHDjgafNHwFb19jGqDFkzpQqepjaAt1MDa82oWEPQJCx5NcJhK7K2AHUUgHToLirdwTMsyvjBafLdhkV16AihLP",
  "key9": "5oxJa3FCcwG8NYfWrYK5QX5FFVPgXXuFKUfcZRqDUeTmXXiZnGDUv7qKjxuR3e57e4PJ912JBGw3Gtus6qvpVvBp",
  "key10": "4aSs34Ub5nBxg65hehd2ZtRNbfdYK2UZpAQCx4kWAyqLyBjLqLfobFPhq2PeSPnZPZAMixjnNPm9r3DnY2kyxVxf",
  "key11": "3isjaSeHAcp25NmNaX4aC2oXDRzXvv7gBDxscPEycTtCwzfdBPgpc4AsMwZ9U5sA2Faa7GtdqyZ7wg3WotEDksuF",
  "key12": "2k3SMXKcUGj6HHeS7s94prLo6wsKEJSQH1scDMtaYwd9zMHNnRcJWq9gncTNmoFuXoDfbDFHn84KBMYegqY2DUju",
  "key13": "2f4kg2CajmaZytbK119j5L6YeCr5rGDvnHBpSEW6H4FZe3NqcQXQVE5TyDbcHredHVo7PRWL9QE3DYuwHKUwCR9R",
  "key14": "2dAS8qUx3tCLRT1DZiV3YaFQU7MqLxsDF2MkFZt4CwTkETCNrP3C61GrEEeqtJc4EUAx6kGT2G1K7sHmzAExoQUY",
  "key15": "62biowty8vTSJh1AY9hgDAykgYMeYmkG1wp42noaSYfZRFUQ1RUsVxPK2jd6cxU6FY7SuFzzjeeNspHgPjD5EjAg",
  "key16": "4ZqYxutrRwR3MKM6Q6HEbaS1LEEVN3m2GSTYKLTei2HU39hvyRgJPrRzkRgeYcKNyuJN5t1mBH3JTzLrQonJnpMt",
  "key17": "4jk4p4WC2xZGYLF6cZG6hJtayAmVw3Tiy5HkrrG6jYpgABYYV9MgN1poun8Xag6oGRf8JFTUVLjmF9iyJ8833iPT",
  "key18": "3jvxzsnmuHMtN4aWF2dxoRAd1HLocg2f1BiqqYY5JjSkBFDbshGQGctkmsbawP2D427pZGRXSEY2Utu8MW9V6mzP",
  "key19": "3t8buQFwQfB2E3r5cp22b717g2eNgzEoA6ekiPFB2TGRdtprWkg9PjXhz4mpGwh4z7ek4H8b1rSBabTRRJyZUadG",
  "key20": "2NWoq2JLzZwDnN3GKGkTswudv47ZuapY48WFkPMZb6rxxgp1RnV5nmZiZkhNgorAGaMJJrwdKjtJCry6gVSJ4aVA",
  "key21": "tH1xggmZjav88xYUD6aBCcWH9dsc4RRStyq7p5GJNrXfpqCTsWHjhpUgkc6htTosDr1uDTGjd6F4BQHWSsUjh1M",
  "key22": "4gJuk7wZKytWV4uyYCvmL1UimaSqVqhKVNjiKQ6NcJ28qbzUdStfGq3rNUR6UkEd2uZV7q9D2eYYfWNAAqwV8yE1",
  "key23": "2hJYxkQqDg67CQfekkQq9j9up7VaTo2GFBMxAYFNRBcMfgpdZEDUnC9KLLx897wCS2rjAsWdqeoQ5LP5o7nL96JM",
  "key24": "5qCbL9woAeudp3nWf4FN9ZYVhQZbaFbxrA7qdZqnHa1ki9w2kjFYT47QY7mcJ5Q3uXh3WQJWWcNjUSqF8dojEF5Y",
  "key25": "2ytEzG5KJKWaPUihu7F7ii3kwvViP1kstvY2eCkA38eciKt1gkJSsopgVQR4zsajTt1CsHefMYjybCSCp1yxmMxB",
  "key26": "46yrFbEmBWFvVyUtEjant72TSmifxCQGBPoD4U1NhgXp3wXuw2GidRGdTXZBfmtwckgTRRnaKG1AeuASCSGy2JMz",
  "key27": "3PRdPEHpujbfRz74XYUenYyfcTpnrKS9y29gukGsAndm8MjNv4nRNziyEgR1v8CbcuPsqDeHvf99pv745emyXX6j"
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
