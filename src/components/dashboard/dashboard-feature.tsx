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
    "3faENCUoa4T6zcFanjpyUgu75wGJLffN9mePgGhqRwzrorJBweupHt2q4iaWMairvDBJJzP5LDWSVEc6iuF9oYKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mziGjDkjYVVLL7uEWkEsRfmrqSL5RJNQoVofVLHGDYLL3hjni6WCB8BnDbUqeG4seobN5hGqnhjdrfc7LzAsjnW",
  "key1": "5B1Dff7xMNgj7L5L5K2WShG4zctoZx11nGxFp4r75tCicFfM5vyFUYSEvMeNomw42qL977N32VPxXVFU4DDoycix",
  "key2": "5RgQWPV8yC6g23RDeJHRgkdtWiwpMromwD24jWULhhhXjmDMKFSr2pnznZb7nRJzerPeGqdvyBxCWfLBTgfefFJ7",
  "key3": "3AbsJn2PW5SRsnzdUHzWm5NYT9q6JFpuBK4ZywZcxG8xvjDj3TJDkmx55zyMgtpA6oNRXVaHzHKQxrXNwLpJDDaA",
  "key4": "3bet1XsygdMcFkLzu6H4TFRnnTp62SKndpneTk6vJqQ4JAXVYgo4Q6YVr5N4x5QRsL8qhTip8ASCkXZmMqY543d1",
  "key5": "28VEw1TqoG84C9RFHPXmHofsHRFxGJctBsEBQtjfkRcJrBotntvGgrdKugJUuEpFKcWTTmvpcULBUtxjUSDew7ff",
  "key6": "2i3jUrFW5ASazbbY1q4s3UKhBJa6cQbBnJRysfFSKQhB999f21GKq7jB4AVp54mVVwVa2g91ce8aspCCk9Zeq5zi",
  "key7": "L64emp1TXCeBZNuXUK3n8T9VASKG5UhcXKPxqQ9G3RumZh2E4m3ZtfHLuhAceNLjFfp9chmLE8WAf5ovVTVrETq",
  "key8": "2a8n6PgecwcoFyRq57qDs9UL2wrCZcHHkF6onD1GTdGjMoGQCFkokP3LwqDhiYDXLysCbaRv8BoKDD88ctCyVgWv",
  "key9": "2gprR4QRwq1y9d2y9qbg4fXXAJt4Ht9uUiAfm2Agu4q2fNuLkkxRy2BXgFYqD6NXbVzCrrr2wnMY67QJXb2zKBGx",
  "key10": "4rZ3QWfokXEuHf93xG9miUtgpjqL5hU18YSHQw5cUgoebBPdqY8Pqjht46pjKyHydhrE9Suv9wsbKgizhjHNkVmL",
  "key11": "2JQsHefG8ah272xX2Uzo8aKc2GZwVwgRRjxVFQZK7zhhkMaYra2bmX64KvZLodFmVbgrxo9XHzk6oLF79s6VFpjH",
  "key12": "3yjrfaT4ijVbMYwzorgZEduKTQweciVVDinHXi8LBM3rGpca5dPBKfU2bkFNDyqJ4aV5RZ5d3gGrveA1WzLYi27K",
  "key13": "J59G4MPMu56tMzhwaoyuYk7aU2vLDS3SZvjoaX2XqGUtvzjFbh8wRZAirGBpdjGAw5sgNUcZPWMKKiHB1vaWmXr",
  "key14": "28wSGYgLXHZ6WvAhrnxWy3DACTPM5BNj2PyBtZzgygc3ouTKTwCA2rdnk1deMNkAMLU5JqzxUD2G2Xr6SA5PKorw",
  "key15": "3pASnzxu6hQ8uFWRZGXYaeYXD4e6gkWtJNZvRT4VnDSiApCZ9pMygzXuWzghR7Hz9WdQSZTZV69FtK5b9x8fjrU1",
  "key16": "YPbxKb9dhD7TygVNikWEEyQFcneT5Cz786w7BgJxfaRNX8x64f6uNYKDU35b9S6aXHC5knmKYiUzBEK4i4Rb8Py",
  "key17": "22akmwhzaFCgX4BEndT28qZSkpL45wRWqS1tLvWyg2gcwbnB8GSGSm3kyzzQxrwGsKmzD6LAWD2KCWDhQ1LrzQXu",
  "key18": "4sBabNnLALJUApWGYLyeNP3E6y7GUgxg9zsvWXN7ddbqFUH5zp1paJEUzVKjMG9DdaFrkmCTaeNZVTJe4BQHWhCZ",
  "key19": "3mAWeUjpZNSeLtBiKX69tyvgejqsq2AtfS31YSKotsL23CFyjVFVo6YWQLN74befhSdfuFAsjrsvFEeBh46Scf9i",
  "key20": "3MYXM78wd57ZDyj784v51vyS3L7USTWb5HQQsMUmTzZ876ANZJgX1vpWS1qtqvJofC6yjvexc9Z2mzbSiwvA6Vgf",
  "key21": "jTpKLUb3XSexweETFM5jc44Ag9XewzcXc2nPH8QY9gfi6RCd7zirPyvj6XgxrgUKMhT9dd3Doifh8iPfvTiS15t",
  "key22": "3qJjpmAFES948rvHQYY9SX5nYLtpc71vxpyLK6D7oQVZvyLBekZ3f7UFtMUaB93WUay94RKiX5yHrmMaHrMVVkCE",
  "key23": "d3fNtwktqzKCre8SGip5ytPjg9qwrv4XiAkqvvWSnJw36yGz14bXhcSf3hZSpBjKRNPgYEn7pYQSts9HvCqSiNb",
  "key24": "3j7556oaNvDCwnp6HmsRQFLbMdxX4WtsQa45kkRKzxX21FebdtcU6zP4rDYkqUojmip9vdgVQawHAbvJoWKwmpbm",
  "key25": "2n1MwB995KRS3WX9gA7ivvjQFdxBM3FruxYtDnQsMoukCZkHfRJHHJ65TTxUmxNJ3US1BSuMdpd218bYvvz1LczC",
  "key26": "2qmHLXRDrWRyqPT47xbY3p48Ax4YWTF6hS3Qyr4xg3FGu3jYXSPN5kUgecAcPzGDPDDi49QpXb9LLUNqs1qgAwRy",
  "key27": "5Kh8FWgAUH2KMMfhgSrgHWgbHrLfxDKiTrS5oxWLwY42LyUYP4jgKGR6RAra4KhtDg9f4zSuwHyDT5dxS3LgSmzC",
  "key28": "2qMMXYhVaFQa3dRxHdL2xZBCekfdG3t62FiQYERtwTEVXC1QYLkofgCiggELqd6nkMFq973b6BonCurxGPs95BXJ",
  "key29": "52nxJwSvSg7YQoYRWqiwX4hXrxyj8datdYGxLRamMoGqZAYvGFmTAuKfY36BY2RnWJbLFRPSExRSbmLJaGgu1Xdy",
  "key30": "3JxuZtp8LyCDavX2o33DA7ZHp7aDKzbYHcQrDLRowsBzPrruWGW2tVtGPRWNFzGyAGto7py3eU8C58jSLMrLWyoQ",
  "key31": "byysGH8tB7c4X2GHNayXrt134vzBkqtsgajZV86Qk28DTVB938CwciQKcFbPEHuL34DRD7Ke45D8mcDva57UbiD",
  "key32": "3WTwXZn5m4ggpeu1gAULPb9kCK84vHwwKpyJKF6qkFaQhuxw4ZVFx4wsKdnrptDw5aD4YWWvwtJyeojqw26Y5mx4",
  "key33": "5R4Nr24cj7t5zp1eFVPqHxXhu4sMjn46szGPrFYcmCPuXvWe9cUjxxp6U65vL4gZ12LDV2ZnTeyFcX93XcF8Fqzi",
  "key34": "2tHVFpjmnRGJopHwsAuYweE7rgk2kgSt4DotMz2i37BAQcSEQnaeMJwCM4G5XRn8MiY9Bx8DR7qiwuPGjAgREYjV",
  "key35": "3poYZSHaZzFGM73rdJjz3hFz87K5YQ2sxVgVXv9hYmbDCycmFiDMppjDQJpNpi6EWZD8ajqF6QTU6u5mcdGFDCeD",
  "key36": "5tKcjoHTJGtJn6Xbwb2D1YBan5r3tiaLx4o55V47VR3TUGLWDNuyd7s5Mw3tFVMLbWzmVrCNxTowknWe4BSxjvrM",
  "key37": "4JDDk9nfcUMNTH1wRv3e1ofeA3APmZQnpTBkfjapD2TaiJk2CmqmAbEBKMLHdGhma27ezU2R3sZEC4cN9mdciwVu",
  "key38": "4Aya6nVf8K4pSVYEfNF9YXpB3PMvEJTM1GLukm13gypbtEeNCpzc1ReKmwsncddTbX7ZVLNw6sSzs4w7xLPtX9D6"
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
