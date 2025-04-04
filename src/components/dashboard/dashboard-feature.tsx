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
    "5cwR1RU9WwJMBQMDYt5rHeKJPENiyoHUtoxX5wJ92xrrpSdnBkAGUoxmDmSzPupcDh913ei9RuvjZJ43Y9XKN9y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yiue3mUJWA3oASsDhMCS2u6Yf74VAac1Nojqoucd6mfaCasiMJkx1QrbJMfp8hYqBD1ktNXADeuBssny7V4xG5C",
  "key1": "4iD8uVEHGaLJn3jzP3S3THAQmXb2LL7H2uqov4Hxds2AJ24tUTtLiuy3g2J8Yk663ymQtrsSjipTEvsgwfzAjgWk",
  "key2": "3kKnh6h2yMsbUan5VTDBdqi4hsp4KNivqmYhvKCnEteAAgqbWYgr2ZPWYnDgiMGNgWRxhBDDvjWsSf6KVrU8tXkp",
  "key3": "5sdeHwdKHg4sWu2aq4tyid4xrXSZwDSo7pTzB8amZdxA6heUYXg2GrW67CrSnEKYnsxJ3a1x3JqGuTMiPLgRYLB3",
  "key4": "52KBnJfyxC8mUcXhh3eiaax2gh6qPrYHKXDLcSKmiiztn2JBuKhcoJ4KRc3iNG4LPLpvzXthkaBpGFdu1hNAzdcu",
  "key5": "J3yybJzuTPQknvZjeASpoU2tSXWUamWsH5EhPT57zuaF7Wm1qW1JU9JXdeWhqVjtQFhYR72KnfH8EjKKnxA1TKM",
  "key6": "2KLefpiQvY4gEZJcKmUhD7fGC8EZhKfjNNzPEEFMf58PzGCBcR2Xw6B2CvyfFSwWUCDSX219jUNQMVJPD8GRnBGa",
  "key7": "4cxvKppDJbaadawQnRR47r1HgmKeosJdTghYS9ioeoGyCAFPn3n9xZYHLX3tvfmEnN9bFHR8LM4QezQ8bfpDur12",
  "key8": "3UCWk7QQpHJT6zTEZKUeKPUqFEWbru2oyPn2c3TSc4CbjqPBq4DF4YQCYedoKvc7jYtVhRiPHDNL7RTDfnMcwrmq",
  "key9": "XPcS2v49V2Q1dpKsD87AAZMahmCR9g8geLjoke8AXTRteb6Yyy5xxfTXR16nFZM87aQY1t2aVFsDzV96amdM9cX",
  "key10": "3mJ4YPPaRUaSEknoy3GpRZuu2XYursVSqhdhfMzJramDJKYfr8L35yGUd5b4PJ6fsiaN1ZjVXLBMGnnku5wf7gBZ",
  "key11": "2ewHcLrhw4Donfpz2Gk9qjmGUyqEnsRVLcRGK3PtQSmqhuBiqkKmjKYbu6srkRVz1NYUke2Jp6bVo6Ynh7WjFj1W",
  "key12": "34Xeg9X7eDTP1SXdsBzZc5qnJ8mzFUfjaXVGfrcn2EZpRfd4PTGCKVkvEcoCM1jJtkJoM5w88oNt3jmVBEXUuqbF",
  "key13": "3J29biwCeRsGGr4we6x5PFP72wsypbiqwXLpMyemMraFBuGCpKrzUY2V88hR8CW4Fhg6f3JvL3zQF9uqqsfAanHq",
  "key14": "3dwPW6MGUPnoE36YeF8JqmNzWL49ZdfnHjdntif8Kc4mh573CMyQGvozY54CbMSsH3wZDEu5T4WVe5aE4172EkUX",
  "key15": "5rQc7cEArbPerhms58DNwv3yugsvjSpFQ4BYd9dM5JTVHixKhf5T4JVGGJkCeEWjPk4rauzr6K717Q1484hNctQA",
  "key16": "2sdsQvMQJDesZY5ijL79EcyqjCntQuRecNJuGEWjx8oWvuJS5BCzRQFkdBVn9VEpc6utd8HWTrjuVaeb8b6Ba4QF",
  "key17": "4a29JLW6LobamziKRJZNGF9B61gHJNTXXyLHfXXLsKuPuYm9vt1UCP3DV47mCqLDYfrsiGpfSCs65eZzYUiVMVPp",
  "key18": "2KDuwPkYQfTGyPVz9rFwpSAv9nJHgmcReod1xtcMffkjiszbuSM6Yh8nQjDWT4MoU4e5FWcHf6gEuDnRzoz6Rghh",
  "key19": "27EaW7VxVM8ezioLoUz6W48VMFQRbB4pSZhVV1SshWj2bH3zbZf1epNBYyw2rgDDqYp12aSq5rnyjR6Ne5SE8qid",
  "key20": "3JRseRG6uecBVnEWmsJ8FADdvhLGHssdW6bcznXrjmW7qCpGuh8eG4DDjtmwv2WKfzz5pQZ2iNocYemGrk4onZq4",
  "key21": "2hqNpa1qZ3YcCjjHUDPpVo9xH7o8HpCLnjzgbfTJ21q6zs3oT97oPvMLDM93uWKDwiLN3oQ8gFAWbfjxRGkZFxcJ",
  "key22": "5LQQ1ppeHQeeacQ8Ph1xuen44up22RHj1xiKozr6cuspTCA5byDR3NuLkX4ZfXRAc95XhHnx6aqRfCEN7s9WAV2L",
  "key23": "2LSKq9fNAkkcbzdMLyk8e5HJQskBzmw4LSjHJEQQtMYQ8VLFEuVs6RaQs1m2pzvvtnZzRM4xMoBp8KbRgq3v5QBo",
  "key24": "9BeeBwtYHtRFkKr3894FmgexJd8w32mRYaG66e6VHz3v4wiix34DqMvsih5jaTMAdJZZ3VdSvDnxBWrkbmWPA8B",
  "key25": "2uUUHgkb6ZE3iu8E9zdPA9hKLFvrwk1rcxwY4H58C1y5i1H72SdvNj9GMsqSudRHFwp5qZJTQUqf2bx2VoNC2K26",
  "key26": "61xHYu5FQ2Kq2naL8fnM27wXmrgZnDVSuL63xprTz1FovtiRMnBKEhbRX3rrC7DfaF4Mn6nLxA4GYa5MvJrZmbBe",
  "key27": "5Jhj835XJqgPvZVwu9tBSDKugf8uwRoNMtJj16oGrPX5yQgcfuQNfyueEo5PKZJMRWsN3WRQ7o4GkBTVFwrxbMbt",
  "key28": "a6FePyqv4bBZHWTyoCLXYMZTprzcztUpimvm7Pk9o5RWtZhJ23N34V1hsqomNXt3CDuqZ9NPg8BkX5wEcGp7vkG",
  "key29": "5oBw63dx1m734jmEC96xVCb681YnRHN2WD9gd2rTMUZsTKvne3JoB27SX6RQ9oPExZcx1iifHwjeyzXvpDqWGBUR",
  "key30": "2oMoHdqHzoSn47bwpPnEaxH8YPnvEzGvYP5BA3xuDYa6WiwDM336KbmNNYCUjRS7pQTDn7b9jeMs7ambWiT4ERcA",
  "key31": "2Zrdecz7GDsZhjzxx7JWPpxAWYgpF5F8TnPbcbJ6rguCo6ZKX6S5NTxPJTwYAgm8MUHcMeu7shZPmUzfuL1GruLc",
  "key32": "65afVyvJdKCdWc2piLUDq1Vve7mnf93HTXptcADr1oypuzWHCSpGmwvxdKFoN1Phq8BGzNk6SCAJuyPjdLVdVrZ8",
  "key33": "5bDmRGutDim4Ev5TrYswPur9Sznm5K365mpcrK58obuX6k8CJ3SZ5TmPjEm52FBkkFkHxpqYQUuJPzJS6w2ATmiQ",
  "key34": "4bEQ4ekK4WCjJRrVR21iLMq8ydQyU445cvA9aM78o7hroZWaLXiUBKwkZ589NJq4AHherWHz1594WMbLwtDQ1n3F",
  "key35": "kG9Uc7DwPAZodyKPaGKv9XARUmrQL56S1jrhGubwxrzCJRKC47ZPy9EN2tipWXb3MkUcw7utYgW56EY4rExezKY",
  "key36": "2R2fHYFWfnJHjoHCSdJfkspkDSxi7FxTvNGL6K8xgLrh8M7hE4GMhWs3Zrup5WtD6Y1jJmLUANYRpQT9BzURjp4k"
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
