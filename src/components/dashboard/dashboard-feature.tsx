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
    "5AzWqkA7QWtuHgkQCc4QU2V5ErZ3LEkogKHytjb5GvTHKruiJkHQajfRi5S4xQGwnQLeDvRCDkEvp23vp3KJ6jfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JNN96rBaGyCNjVpM7t3MHskSg8WBhG1W8E1RfXHccKQCTuhAbaZJWeshk3qUQbpi97gMSyxjxRRmz3cWqwEUTut",
  "key1": "2oAfPQ8nokM99PAkEcAebqywwAisrYDwbxyZ3swGGS3eq43L8APNigGajiYTefSuNPM8yzzyLTN7ivKGYndu8FTb",
  "key2": "2bz38YEN19VAfM1gH2ouBQpFuDGtX7RxF2NDPHGpS4VufMcBff2NMjAdBarxkdYm2q3WDGGmADu7rDEQuzZfxzAg",
  "key3": "3qQdqpTq6XJGDrS1xmCPddurEeVFGUT2d1QyKn7Lv9F7VMc5nfixTmrnwLoxBwBbvzAipBXAyYtSNEyM5ruC17fA",
  "key4": "25hTjbgiuumqBCGSx5TxKDKv1xnaLnZKVFoTG6uMBoDpsp7kbjYGnNV1BeiXExaRfRqEkGnChBqSBfA8HULCkRgV",
  "key5": "2WJ3xDDCVLrrPKtTP9fGVUBERxzm42P8CuXmcHBci6JnUawjCXMJxjvfVGYBJk1AK4GoMKBXi2tMZ6ivYhUfXr4X",
  "key6": "5AAQQre5eLkbo1nePB6NLL9uti3UDkqpCaBUHnZxBizJttdfyjhSDuybnkRsUPnvpbxTHggbTDeUPnrVSmjpXFru",
  "key7": "5jmFapVeTaDjSzFmSV3Zp5ZSBBmNYaDrskphF2hopbHe5GRYTYidUESVBLDusMerY5tJK3VbEn6NsnC9njQaVibv",
  "key8": "343Jr7VsdxQ1hxm3NqpYXACVQdcWsW146eR5zniShJtLa7ETU6MTETEd1HWE35cG3Cg4p6gVgCTSByCL2CQJ5s6y",
  "key9": "5uDkY6AfLfkvAUH3xE5mQBe2ExJDY7scs9eykP2yPQpcYakWTLpSmAP62hX3fAybnD5Fn7Q1zPG5EErsv9Reaquk",
  "key10": "3gTGeMGAZNFbhHwfqa85zDY73ZD6avWnj4rwCU2Q8rtTaBKpBtSMjA4WWygVxwwSKEcTntLafGYeyQnEovNmUpPD",
  "key11": "2wS7Ch6XRQSCUutmUZ1Wr8gwH1mWoApGVUsfmHBPtRS5uZQusWRuzNDMhqVUEtiMwzDZo65MeS2zwEJppZgPhHTu",
  "key12": "jgKMiiX9pMkzz5AkgCZuUYLX6Fi54ehAoKRzrstRdwNY26uCAaEPuHL2JzdHAf4EDbnppjptvgZriN5ugPBPcwq",
  "key13": "57oCxhNf6jCGfJBzymaB7eSZRzJZBoixmZC2ufp33NE92CgH4v4GzSKFwCJyckjmAd3q2y9fYCsuJuu7pT6MSS3m",
  "key14": "61wLHg6ZaaWmSpBZ756rdmxuYjcXfkVXYr9Ag6ooGCuzCxRCKNfaF47cC5ioQUEQBNsANe6xwP39N4BRFcTFE9zY",
  "key15": "3jN22XApt5MJKX5bNP2U2Zvsxu4HrpuYbSXeAf824TyH3qoQSpVZqx627SHhpBH1asm7qVXJirDPSPY7aEm9rmcn",
  "key16": "3Dujcy5nn1F4LupbW8QBudwFGsAsQ5gVS25upKZvB8DKMgG5gY9rnj548AJMDHr4SwuQFmbJng5XiJTsRUHsQ86E",
  "key17": "TRBY7oy5YukekpBkLNqzxB3dvdCLueibhcCFo3Tk8z2ZjJyaBTwU7gVNgs2jyu33uBuWs2w6cWEEHqbkuuct8R1",
  "key18": "mHTKwYojajyXzCFu4cA3VLKiWahay7HUbLwd1DSbWyr4f5ciDvnEeT5nZwdcq7MWsegwzHkXqkmsa8FCn7c4HCT",
  "key19": "3W5Kso1q6XvND9wU8N3WrXiqQ4CoggmgcwoJeoPEfSHQrTR86FF1n8jLcQYczrb68h23QhL53BwyDnfjxeVPVW2u",
  "key20": "4oe9AocZA1ngZoGBzWw1odFc13YG3CDJBupYpQzPpR5UaAr4cf9UzgDjU5bx53RjMUjBV3pm17H2K1oJiEfS7E9H",
  "key21": "p1rmdG6G18pSeJjo1weaVLoxV9Ap5YqojxV16P7bhKWH7sxbXue2XLCTYfXHoxdXz3L4aX9NukZdk4BWpDF6W3e",
  "key22": "3bZfPkGrauCjx8ACX7htzS1Zd7o67cyqpZS9dFJJjeBBDavAntnzu1oR5CetaFZmVYpytJsbZ7WF8S5GKpnfv6nA",
  "key23": "4TrXhTWyRswQHLoFWseX12UEiYNAEHVcvVrU49JZ5J8ZJbhxRyRMqD3EfkyjuEwr3DPSRLaEobokrUJSxpV5hg7k",
  "key24": "4EgxNGSZ5pxzFtULn9GdtqJhFcbGTsQUbDdQUyHnjvtWK84GKnPsETLTUm2ac4GXTraFzKhF359MnX629L4hQuf6",
  "key25": "4e5DaGXf5ka83otMkUeSTtMkusfwYocfY8QQXyy6teikzQ5kY6RxMgviZHbcnVEgpC6RXUUh3JZJr9h5cAvh35KD",
  "key26": "6366MscnRoLnC7UUgsR3yUFccNPfuKhRjYVqPtch6gYiq6GRFKDrFwwtCoP1a5ZeWLRzgSoRaQCiF1kwSzqk5d7w"
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
