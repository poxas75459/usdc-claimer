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
    "TgQkpKezGnfhzz5YvPwCVB1jPfsaHNXRTfkJbVZ4newAfyCAg2Nu1mz9Abs1aap2hnT1yUUwfUgWgfb5HLGxh7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mj6JvjV37QNEbkwpTHTEZFz9NGd5XuRNHdbcnaGggPWoyGCScZtn3P1UVHCjADXwPputtkc7RUZuxQAVKEC7qn",
  "key1": "57gtvkDus8dw5vN2y3aaBztj9EZ8w3YFwkqiu7tdNcm8y6h2sPQ8r7fU3Z5R53bCCva8ChX3BHotacJdurhqCDY7",
  "key2": "39rJ3SZ427XKjoFnFikFGoyoJZ6Jw6HZ7PrGvdB2E8CChLrdzqmUFgcihuap4CjHYCfNZamSzdjUo28zTCcgBjGm",
  "key3": "4AgRKDnBHT8ZGuekZfdFfyP5oZB5CA6n9vJb22Thhrs4fozp9RLRfuRNPb2j8Ss2KTBGdoxXNQqeLXNAqHEyQsBZ",
  "key4": "4Lg9LntET78dU1tiahoU7eQPTey94AF9jr2w6UF2oFw9ySUcApUo3gAL7TajyuUYh4MYK9vMK6e9po75bDapaeDq",
  "key5": "yoSRQveiruA1TVoL9FSFHd1p74LfekHS3pcnX4quTviq4R9qMubEh2SVxzFxiTLdScspbxBWQU7amEqDZBAimS8",
  "key6": "22t9MahwHfnUoqmcEQKUovQfcrCryJxnq6amg3KFcE9eP4WmMtzTdfEQDu8t1mF73wxqFp4cbcmfVtqTtGHLwmtc",
  "key7": "5WybrBDdZwYG2CYLH3FCcFquSVzGmd8zJBRuQmezgRH8nu1ssUiQAbmT8C26sjKHX6DXRVggf3ofUXzfFgK2TvxE",
  "key8": "tLeNAFP1wNJFyXEJ8yNnPRc2PApMBKHzoZ3fYoPAhDEUpMQeo5jchJfsMrDXz746jm5SnCAiEGA4qgTvor38Rmz",
  "key9": "dL8fCK8PRqyitaDPqumjWFVRhG3dekKrSHmtPRa1C31Q3wLDhKqUwTXoHWRtEGyexA95RegD8UkwgFi2cUJ85p2",
  "key10": "4xwua9R45BsfdVLpj3uRiLuR1EMPWfTv79BTQdSjY316MoS33Xqu2WZPpEsLseJDwc5SgoFrV9W3pSBcTE1gyukb",
  "key11": "3X4pkh94XJRmjxcSXEwaSJ4nmvcFkCTZpA6tC59R9cug2yg1vPKt3r3SXAdbvVAovYmzQMHThosBAtUk5Z8yfsta",
  "key12": "2WZqaXtYMd5kz2g8GR5tbC3Xz5qU1rD2rUmDmiLFFt3f6N7AMTL2toKwNsiq4deXxtGGpJQmRzQSGQFurMGbSERQ",
  "key13": "4xEnVSNFcV5Y1A6wCjVV3qaDHLxW9uFQvADKJsGsu6oPK36WtP6Cmj4jVqMBGb75hMQhDeicSaLjQXZpBwSJ591k",
  "key14": "47BmmrtofpeQQNCKCb7DgigTFa5N9YvPfrEhvi2fACgjeEvqDsXvKKuJPBZgijPfiFcFefLSFiUroycjJQbKkzXf",
  "key15": "3jx3KEASCSqihzKMtsCJpioFK12UXcRUQUgEphXptYSHYgrHkaXAu2HUcbqkqbR6kiBwtQezT5yU9Wuqc1F6X3pG",
  "key16": "4jMvVKKZWysY7MVyKNJwhBwz7o4FJy4yv1UWMK8gQTPS4LzjirvMmphabdviwpopKYZhxiHLLRMeTk2JtPqEaAeu",
  "key17": "2FU4Ks8RAnmHHhDghjKWeqQAofi455f3rkeX9FBns3Fz2TRDFEnerpfXW8dC3qw4ijR9XC9VyFcpxjr7ziTgG67H",
  "key18": "2hfovi6Zx2uFyow7RFTqK7hxnyeB4UFknGv7jvskC4Gz4juNfGcTUdZrW7u2fuRPMbr5Qnhe9Vr5BxsbnmvoQFDD",
  "key19": "GabSDtNQ7tNoQLCUKRGp4hfQby9mEQj5VDhgou17F2iE1pdR58fvcvAASyBXWPuuFNCoxXNFfyg5iw2UsgnWZMn",
  "key20": "5XBXBzT2p4v6ETaLCnb2PteoJwz2eGRUPFYqNmCoX5DAsvjMXMprkZRNHydrRq6XgKQhxerRWWznx3YUTuE8rN6A",
  "key21": "3gUY1UijBsw1d35dSScMJFt1zBqSZdA1GVJ43Qjowf9DXvpML5KtjxMziVHYFnLDJ9vh4Jjsm9HmDXSbQaiBVAV4",
  "key22": "5i6VXhdxzNciQFk7Yp4hVTWrswyZM7X2EZNcdtW2Rc94x1mPH6LXMyKGUkTqAySzCXAnsbx6C4uMBbeiuRA5GoQb",
  "key23": "EmEEM99uSb17DjXQBruhn4nGRUqm9i6cjT7zjyEFF5bFmnT6zuAV3pKmD2Hr9kqudcLdkWEk2RVvQGwDQfUTTJv",
  "key24": "2iwVnQeMPmteJLyqcA5U7838KXLi4fZQM4g38FZx6GCJRU4HNkyCT8W1YPYro1bFK4GS4SfnxGmYDqJXuUWSocYY"
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
