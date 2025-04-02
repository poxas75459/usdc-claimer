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
    "5nfv2LJ84tX9qpXDj8YgYpoJv8uMKFkd4VnrBzVYexSQqiKzSzUMRGRKPDTwKHi422a8SvUkYmLAaHuQzizx68pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9iekFDszXNxg1KbGJx4GUxNMtNT29WWHkqLwm7F1bgprgkX7KCxsBfXafasjymmBGMTf96zwpZGLNgqVazFcUn",
  "key1": "2KzmnTJc6r1BNLgaSjfepPukrhtnxz34CQVKg4rgipSfcJMtXXSjE2vgpu1y6PNpdGbuCBqn5WpGistpSsgBCysU",
  "key2": "53oMyJiPfmYc7UcG5buYEnLEMNerwYt7Kd23kFn4CffWH2N24RVwmph8yR5E572Evcwhgv3fDiwRJvzUhJp6kGNs",
  "key3": "4grdJu1rWKcA9c9nidWtFpX81CLLsTtCHH2WscYdDgXq39WY72cin8QpxacsYJzfxNFvrRxtnuLTkWxbHnzVCt8T",
  "key4": "2gmLvQu1TJPDQXkQ81qYd1MWhnUaEiNrJ4V2WCCKAYeQMQG5b8bxPu7fpSCsRiYz7NgisTe3ZFv9QRMcfHVXWgPU",
  "key5": "QEBDhYVfzTY4dPxenuh5vfLoVuMLG61FGixcMeSfvC8sqB6rmkdvR4Bp9Zo1YFkfww5eb7kEpPd54gqEVSPEdfr",
  "key6": "2TEc72oss2gjLHEqnTyyg7Yo7yaZ4yQnRyCiKycA22U5vdjVECrfcdp6kcZ6UJFibaNJkrJ8XuZvVqKit5HsKuYU",
  "key7": "5EtBgEejRrr7huSRcyL1ueBLF13Jbh5Kmi7d5dHWZrRHhkmQbU9Lzza8pdNAkokKeYZjr4XhcUZUxW99x1jcU6Ui",
  "key8": "2Ji8ntKZm358M9K4Wt6GB4Pk9B52PQjTa9dMb6kGjZn77T9gBrFi638V21ug366AE2BipjRTYDyJnuSX1Cvz6dML",
  "key9": "5qnu4f7LvGekHEV5me5i7ya1pRxPYnoXyB7SEQyp4BsvXr1zVjD5uE8AaEjw8pP9tTrCKwc7YwsZB8ckM7K5z1qP",
  "key10": "2brTcR5y5NwP72Jc6p5wG55mNLBCgSGiF2kndqnvPSMkSJpJvSHUE1eN6MkRE5srY4ZimwEDuJ93ofxiH9HWKvQ2",
  "key11": "297uWVRriNRagwN6bUuyXrxkuqkmqQzeizADAX8ncJ8DTdRo1WUoUXJkiqiBdNiA4JdXT77uJBLwsu1uJ29aJRw4",
  "key12": "3WuxsPL4v4HzAZQTWWZh2zLcYtxsr8jwjqyDEjXaeyDgMdujDBZ4gicJd93HWeC8CLYeB3BYRwNGsjiAMecZJg1n",
  "key13": "5SCCZ9UEBf6Kuu8PyT7fZSpxANVT8DgFDjD6Fg29Tv5LEt9rGH9EHcKeBwL1oA1mBTUJMfg7sDFv7Di84utGbYgL",
  "key14": "4b49LREcqQhbnne6cxqUHdLpPQtsyM3Q47pQ4wFYyaUnhRGf8aA6v8XVnULvQS1SXGKHMtbKsAUZbhRm5m7GkCTD",
  "key15": "3V5Mtf932c3AHqMMShpGRcbjoKgdw9PMNSWnTm6zH2C3BvCFAkgtMMxT6MHugJwotmxxijJorqqeBoqSL1X2LDRG",
  "key16": "3bsG2NjKS7HM9fmodmUdybzTWDKqWtofAtRGaz8jV6w51dVh9VycLvwnBmsKzad8pwnk53Sa62XcAdLNrQiEtd8f",
  "key17": "2i15P8aqFiepmM1yYuRySAAK6GchZXPP3LMVmfAWhcCKGEqeiGV9R9X6g1ttjRvBfWrYCQihChUVimSgtPQyr1oi",
  "key18": "65bdT88VUWe5x2HjAshYRtGKiX9ySUzwKfcyXC1mJuGLuPg84BM6S56X6TjhiJbN7ZFQHht9br5F6bE1rfGybTn3",
  "key19": "mwcS6hH62owxGuhPWLTtst6cVbRSjve1ocMu9hyDAHuV3E5ZT3PoTjiXZnPS7SEUoQfRWgyjzzKi3BhSPXaXJ8v",
  "key20": "4j12LKMdG9bxmPAEtQnMRqFTZGi5jizJQHKy54fPf5roXgpN9RbVgtDak16FR4D19xFHbB9GRFs6MSQ7md1AfkLL",
  "key21": "3ZJKKo3a3yhKAfK3fCGdxLoUHinMG9QtYDtqeaYcBwcm9DoKarXYfeohqW8D8JVNvmY4Q1tvw5pathVvrgja5o25",
  "key22": "4HD6HqhdXwNFBzxspvkH67nkspc72cyL7ZS8k1S3kkM6oMhEGbu8PdFewu379D2erS1yM1NpFAG7kdGu3KCYCQnQ",
  "key23": "4R33k31KPa7ADm4tN3PY71C2VFDaBAf3vvMaLbqGocr1RuSRraVYME4SggufxN6aZ9U51bk6k5S42598iqXezPT1",
  "key24": "65mCQXBxRvhfcu4BSUZKfCwStp1sCPBmZqEpAz87MMiHwEfK1BRLmoYzBHH7PpgQpXdxYVMwSBdoG9d21j68PcpP",
  "key25": "pezRntYngDGthDRL5U71ejT1p7Z4kZ55oNroRgJt8Dk6tpSVM2D2K3Zb5o1AyEdt6Yc8spFF292mJX441tAq7nN",
  "key26": "3ujCFavnf8Ab9BdUqRZtVH5XWQchwgX7P4MsWDJEqkfiySR9qfgMSZc1PHS5oR4THWWoqh1zHViD1LJU6AsSTU5o",
  "key27": "LxLrjPjf4KivRrb1SBW5jYLY5UpVoQELBq1eAkwsbsuPPB8Xiqg9ZT4J6KXRHWKaQheDthmY55ULK54bfxSQUfS",
  "key28": "5SRGqZiisQa8X2XjruFhb5gifztpX9EDHPjqbJJodQg8Ra4quwybeBy2B3D2Kjs8uHsBDWCDchwx2a7Y3rQ33moU",
  "key29": "4idP5RoEe7aLHfocViwrxJQBsVsSJv4CnMosQxJa1edLE9JcBtN9AQmjyZCksL975kNu7DUwovLUdoYEouoQv4st",
  "key30": "L3ABfZ39d5DKiQBCSw6tfJ2poLp8a35uS5ZVtZAPiteK7jz67Q3YuQStpkK1gsjuzJS1SfGoL2kRLWXkdUL7WKT",
  "key31": "2Pn4L7fipMmHKXeujpSNKKULUL3S6rRwg1coetwG1Vj3uKpQu8LdaQybieSvd6BgbeH1Db6hU4RYonb1nZ3F9pQH"
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
