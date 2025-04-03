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
    "5PDsHhy9KVhdgK7BJuWJRUqwSDFuZ6NETm9tLtuhhJE3uJLkm5nrg4uufaVAd8pnP4CZMPsjPu2WsthfbwSVD2KF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwapEoiMYLEBPvxmv2mDXJPJ3cGnFp8Ervu9TdsS1iXsCqaNCERFuFy6dyxpMbZwfXUJL3vrUuUAg8BfjmNC6FB",
  "key1": "2xJDNc9tnese5NNcyCPTpBqXSKPRVeM8Se5j7XYbMAQbVCsrm8HnUQYaWHc8PGw6159aEKYDMUW5ikws98eNPvVc",
  "key2": "2j1x1Hnn5x42dhHxxooFcGXTwXabp8vfiXyPPLRvszgRpwyW2AZPN23uREYL5LLqexe3yL8XW8sMGkYN3eebqUqZ",
  "key3": "5S36SNRiVrTPTN5738UCxUDFw58Ep4QzHEEK59u1CkeZJBxKPVu7Bin5KcTtyoZVbc4iYfcjbswTMc9t2qLr4YLx",
  "key4": "2koBU68U395nDktZqbMKNLNvap7N6MEfVzufcZnPrfuPyZnG5FqAw6KPWNwyRkpFg2HmcNs3BThHkoyGJ36eMsUy",
  "key5": "5Ehht2ub87dGPEqZ4kroyePhh7tTJyMy83kpyhfz4SX6FVSGaxjmuE8UTc3tNj1LfE1p8dbFwB1R1GCZmAovrAW8",
  "key6": "35XvygHiezdeTRWVn71UeLKXerHfMyAhQakV3cVjn45XuaHyNPhMaema2NhH7rD89bN9JPfLx2qg8VCbrzmae55d",
  "key7": "5YuTw6E1Y23TBLMJQi5skiErCvF8QBuSNPcJQEUUAkfqxibdejhcbKG5XQPYzffZFkX2wBgwxRqd1nMiwxD3RCRz",
  "key8": "4Eyz5pQJfuyN4ssB3NdABPadXrq5AxNsgsejgHYAZ8Aj8Pvjw5o7t3yGU2JL6nGeHzF33cuX5adi5V6j7FbyxffH",
  "key9": "4ptBqcYv7BBhKrky81gibdfdcSEDuDLNYvs6iZuLoTqNxGp7mWzwtPAJTbTgd7X199tLveGNGqEkiYXJ64mHeL5G",
  "key10": "5vsEEgPALomPy3a4UjD4sxt3BMvXiyUf6PW7e7bjHPMCR2Jce43WW7dNnn9emziS5MQSz5GULesw8HEae3YW5Le7",
  "key11": "3q6L2vAmWMjHyh7Kn5ufjDnBpTbUZMHzppLF6uhSF1z2TU339b7nfqyeBxArNje1yWiz9V2pqhET5Wvd5Xec9WB8",
  "key12": "2BDYvjTUq3yxZAtp3QAoGpW8ZFkQrNEhVRZ34PZcnu1SPXYFSMeiGhWjNozSGtVjfGeG4Mn4aHF5ErJf6Wgcx9bD",
  "key13": "22jciKCVxvF8b6wnsWnyQxRmmdff4XNqM5x2h59ymzX3JJfN7CMGBhZKv9gj9UbSDDmsihGGvVckvm3GhEaauE5u",
  "key14": "3cfhi4V9EcU1vo546MRyHWVtFSRzsCfKqzHvuefcW9JFPLL3KNUcU3Bz3rvEXSEcoctkMPzRgUgui2oHZvqEKkQc",
  "key15": "5xFoDH7ph6ysMe2YAQnpLToqkkrAsZKCekM4gnay3jgpBvDL8ADU4Yv8cSTQuCYiLuCM62KjmF2KL7vGsHtMswPN",
  "key16": "4EpGz7KpjoPC89FjidLtt6N7Yg8BwnZdztKWPkzRnbQWdhgQ778HFrf2s8j9bPkLvP8bbBFVaadSmejiQyuagKVj",
  "key17": "ZF6hJ22XDqhayux1tt2czy1yHKynRav54JTiCQa1jMwZfqf9K9e135Pp45nnTeb9ifEqoCkLCJztRs3tyQKs9yu",
  "key18": "2YBBvDzPzjhbJxeQkSESkVhbns6LWvUfQnTZom1cjXnRnonb1zAfs7QAW4tDGP86aWP9RMEfjvEgqBGmqYNsHZQ",
  "key19": "4ZGQhTBc4rKYB2Qq3n8vx1txpny1Uujd3ZcVsb5PTbef9Tr52UU6My3oQooroT7h1yW9zjgWKCfrfTD6QoD6n5WQ",
  "key20": "38pGqy1wyU1ReUmfMQJiWDZXoGrrDcr6DDdGdqykujfQUFHeEFyoGAtc3F31Sn7by72JKpCv4aM5SdJiyq9QofU7",
  "key21": "2DuQ3Lcs1T1ZTFnC9Q1EFfbHWScw5FhzPyW6ZxfrqjrCh6aN4J2H3hfR7y6QFpuKehAoV2EszfpjGaMaM2qcKT8c",
  "key22": "4n8fvNhbtnsCzT27b8dBqZJFmt5vpxUzABgeCyFGATKdGc3GcoZFLf3L7JCh2MoVzcBfNianXTjNMS8vnfcg2Mv7",
  "key23": "xqGgBrADU3AazukEFTVHxzFkw13nbCHVXB68JYK9aVbfYEFmNboWWkscfDSYAdaZkH3wyXno8DDSU3vBr9mUNYt",
  "key24": "3y1krBxcZcTGhp3sBbniEpNJQp91Mtb9fdNW2H5PegvCg7Wvo7t4rW2V2bFq7jYhBh4L7uLmCtUhry25mNVrgCKW",
  "key25": "4hbZSivCaPftEeTgihdufdWqwbHinW1bN68HrbVLD3nLEJH6dNo3y4ZkquDtEmt9RPMR33SskecPowFGQxP9fQTt",
  "key26": "3pLsD9Mf75cnpix7ei2PhQSqHqPJ3ovjdmWz1Gj8x4JoFt6YE5917mDVubrtqYTB3YnvTTXYJPSiDYprXYNCoceL",
  "key27": "4wSc3uDc3i9d8phnQdpToypPs1kvVLcsXJS7B12dkccfELP1NJfKqoga2wwWwNt9zcdHtfbNy4gHvLHBSh6RnHiF",
  "key28": "4HGXHUMCAEsSx2zQaXhqEkEU38jUgLPsYYG4aRkQKh3Uw7MLxrSBS23GVTANmVPXB9fpHE9T2x3X2qCVwTrwNBw4",
  "key29": "3DMGtR4LbohcDgjJN9qhHy86zB5tzpCCGuT5AHo6845TwKTkckmdga4YBiq1EWPbW6nzUr5Dh2AuTwJkxtqbBKCP",
  "key30": "2aMmcn5xqauMx3hir3c2J8LnQHQHsJsMPXKW91NNXNXwhxdFi1uyGqkAvuq1mD8HaHc3FkafxDdBXi44GC5Mh8ST",
  "key31": "f7XYmVbNbaTzVfu3m3ADi4RHHnaf3GVq9sHb9Ncowjhd3VSfcztxwfB4UkxFvdDYXxczBo85kuHcWZDyc8zrgmY",
  "key32": "3RQRQPBQoQ8gTSNhwvgcV6qUJsWWUdJxAy86VHjEpg3TfvLsneooxsLY5aLvkM73jRgpHgvHd2nAwJoPqwZThr5q",
  "key33": "3XgjFJWNXfREExsGCLx7pHYnikpgRrq8zZXpGV1P4RVzxLMJRiMfUrr6oUMb5QBRmZKwJ7s8ZtzWW3w65VFFUHj",
  "key34": "5tTUEkMsAyyp63M6c8SqdQZ7Es9REUv4WgwKy62D2AV1Nw3jkd2qKaXZaYTjfQXQaAHzGxU3dBtxUnKo6HurMFRm",
  "key35": "2EtYahNUxeF3gZ2JhXhdN9uGb6r8qoBSW8F3yQAUaSvEwgwbGNyC1oFnu2NQhGgcApQEyoroG55pYK26jaCsRhuJ",
  "key36": "2uPV5rFh5b2Yiz8WdRSz91DV6BULCkceMvhqFCX2pgTXovgAhDjHL4pQPa1XMhR6DDdwGXnqiG1NUSTEk9hbzpuS",
  "key37": "62uDmXXyRcvHk4zn22FDMq3sWPioYjQoqR2nFA7EEA8PHZGHyCPNhYKF2PCDAi3gL6k4MaJ9mPWgH27Ud5WkXx5A",
  "key38": "2YqEfVHjXXb5EeHPd8oMCyJ4pGgoSePJHK4mcitHv7F2tG4JpPJ9gq6FWRPotPZRWPmCvzk6UFVnQrSgBemnqkeH",
  "key39": "3DLK8TEck7gSddDmRYof7ivG4PRreH1P2SSdLH7sGS6vxVBh7kaENhHwMMJHiRc7jbTJBVW1zT8uF4gwo9kP6svx",
  "key40": "5zspqUqSnZgSJcvLWA8XogHaNqsiBV7CZm38Men5dPMueWL5zqCq2SPhQKnVyp6G3PU5eTS4fYAy476Rpjxsu1nH",
  "key41": "5jUKWFedXQBsEd1LbdUv3HxrkjJG7ZG4vHHRxakRJGQ6AepRcHG214wp3QQowYyaHNLaPTEU9S8gGUMaK3735v4K",
  "key42": "birpwtT9CQkVunpdjt3NTdRyKGZHi89F1ipJ78dpp2YBfEZH7ckaaTs7pzSSdyedKFjU1JFTtHHForU7673DpkW",
  "key43": "4C7P6NGnB3A31mCtFYog279SoTrtvUQw7QtcYu8zxVKynz4WtKgqxJgAWvg2yHTanDNE9pqsqvN71udR5rgH8Uw",
  "key44": "4jA8yTzXWh9K2yLYvNDB4vgiu1xpmiZiwHqLPtzWreqVqryf5qZjNX34nx94AFswJQ5yS1vCdcWVMsy8QUSZiBBS",
  "key45": "3GXos1HanPjth8oTwo6wJVqzMLY6o2gkGrEQSHacV6pqd9YBXhSEXyJDknupwRRzQ5Enr8PvtcEBuX3Z7AoGYSjL",
  "key46": "byYEWzJqDw7AF5Gz6c2S5iZCLdW6CLsHnVzKLHFL1MV18FtPSFrvjVsxaP1uHrJPWD9whXhmLZcP9EPfm3A8Y62",
  "key47": "4obs92iA6ttqH62PUDM1MJLVU86CttpG48eiD5qcM3b8C3mPWZxAZuPb2kmcYynw7SrNyEinaAdNYhke5baYHFEE",
  "key48": "2TApv1L3etNpnRLjGuyeeDsLFxUNJGR7jZ3y2S5xmDRhQcYvYEhpPf9BDQY3Y65EtbCh8rB1N6SixVhZuxhwsyPk"
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
