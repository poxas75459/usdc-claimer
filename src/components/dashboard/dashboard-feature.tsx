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
    "5n2LJSevvxuU3bXZjgkX43VHqq4LqMLjw3cE2SRqNhcixBqbgo5wHMN6RheEcxgFuy7RMgTGoAE7fdFZcNLYsaDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XDvyg2Vmw3UXhAhfKfjCS4TevcZEHzzjwP18HaXiWk9vhEXU1vPac3ZvwRGPvYhcAoXeQjWiufWfkJ9uMr9j5R3",
  "key1": "Nc8hmeBgQZJYFU8Vvg85CMqtzF1MPsHSe5zr5LbpYa91oCiWKAwCBDNaXDxTq57vkJrdc7gJWDmcGKPzrNnPJUK",
  "key2": "bKtm41jeQx7PzLH7VRY1NxipqCXMDW2krceWdqZiq2h5T7PPE9EmXxKWL1hsEkazxRVSdv5FDJMBF5P5E39h8hh",
  "key3": "3ESt2X7KP8iN9S95EEZse6ADuvwHpH83MNGJRtjiNGJuDqb4tQPP2H9AKLWwZvTCKRikTXKW7N1LCFSYX6ZAyf3Y",
  "key4": "4rQFvEtsZdgQeA7v1dVn9dwUHqu5LzdEAqxzLhRFjy7c8jqA6AGaSj49CLFphg287oFCmnMRLEkUyB8WHzADy81z",
  "key5": "2GUPv4r7szwqByyia6opwoDjdULnSkzUyTvuaXKBZEGcmAXpj1cJL8FFuE8Z2h5PJs8WJpktPrdhLYDBi4dKQh4A",
  "key6": "4X4rUzesJNY5rqMwu1p26wfWgb7t4KE2LmX4Wo2gYNNH5uxV1htyUy4duUdEfBoFGSxNyTDNk9fB62ZMvyoJ4nQc",
  "key7": "5phoDHwGpxvrSZGA2J3PYWupWo6XmFWsAKUHG3KFahhCby7WVWTEx6XrP6GW32r8kQfcFCRdsHSNTQjnyT7zt9rZ",
  "key8": "2Tow9XVVYb71Y3KqCcSMEzcKHWMhzdJ8xGWra1V4siPzk7TwsFrjALoL2JfczvQ8fpJjatM7nhsh3daGx82VrCgb",
  "key9": "3Zsc5BusaweYZsmfETXw7nKEWt7DPF141LX1JCdEUfth6DgjnZPVbzW4Jm6tX66z3KTePtZcdKRRSpcD1kTv7yJU",
  "key10": "3o9ZqHJZSHtHzUkQJrcPvSVftK1RmHg2o9eX2uAVgczAFXYMYuzg4PyLSbzKRE4C65xiEXVJj4aGR12iZWGxvKXy",
  "key11": "sv4YMeS6tEdztZ2fgvwsFSxcigPUVgwk5dMs1qj94Ghfa1THWE24k9pSwj6VDodBxuZXvUR8JBJREDnM6ptWyKb",
  "key12": "QNtLfnfM3GtMBgSS2qxnyjuGV46K9hYghvnQCPhavY8B2aEgV23BLRHYEc1AyazA7w82fP4KPaE7zpqPWkDTNmV",
  "key13": "4XarTwDothd4cdJdinkE3FPf1unZ3p3VTQgrw3RTmi1PGJEPvskrCnNJ8DiMxLq4FiqFrtbo2hvXsHbxbmrsxEZs",
  "key14": "31D33qmgot63fNSsxyuAYcpfptyUrhGwXq3rJX5brHKjgrmEmAFfFxytRQZ7jtYeNfwxtB55CpdSYYWUX3MEEoJT",
  "key15": "42R9r73V9hi2fNDJ7yN5CttnH6DFgHP3zWCSeQetxRBtKXsogxHeVAtiERi1qFUDRmr9nKDQTrA6AQDbHQZtAXyN",
  "key16": "2Nv1uYC4zFsGjEXz4TJHnG2tQfoiBKNamu4c11AWbVaHUR9UVSxKPDb3d48DsvM4RspcnTraRPRbbqihe2HG1QC8",
  "key17": "3zmYq5VoDTsMm1ZVavnj1achf24HWcoFxw7gcU7JVdCS68gBUJBcP5vkyboqNCwXswMNS6zDnxUF3dTeAMc8C8Wt",
  "key18": "5QwEUSvoYgdpzPdDjpw6KmkCfcM4UVmseohYzCVEbKaBsbfmLDrdvhqLPaAronM75HGBu7TLBJi1yzssKFBAwmmK",
  "key19": "579vwgaNNaUVbwxG4ZFupU7Q84vduLqUqS9Hw5HAgjeyV3ZBUoWqbbtJuBxn5om6cRN1BkBd4urRfsu5guDTV8SC",
  "key20": "uhm9J8fsM4unDi71moojGp7T8R8xXLy4bHenWmznt1GmQMGdEvQwYR9sfV4G5REC8RWRBtDQz76aqG1gk5EqTcm",
  "key21": "4b45YNa4PLP8QKjfXtdbefLceTW5DXKdNPxKp4Mky1wpg9RpS6GgbCPdVM481WxdKH8ToECbCrCvQhQ9QVRh1EbK",
  "key22": "3JX335MoZGUBpX4EitHaFKAp7hFdKofufiZ2y612YKhmDJYkTYUyAhuQAvKzoF7LJX5FiWoadQ6naVBGBvufwDyX",
  "key23": "3pTUm4euXjVzzG5chNZtrMuwRwKHBE2LCVVP89s69KwmjjpvDFGRvHvs86YNjxRqnMGB6osJ9XzJY3jPDgiYPtXh",
  "key24": "2uWcb7KuQqCHo7voxaS8TcCaJoqGjYc8CTNAiWqyKzwgT2xfyrwB1AqeNnXkpbgoR2rUXgzmGN1kwLDpoiVdheSY",
  "key25": "p9hpNqhT7sMoR11GBwVwe6pq6KXdnKWv74qXtmRJ4ptTvqhYtXjwvcZiuB1zwDj2LQNJ9RMKCQCd8PY4vWpQ78K",
  "key26": "5yzvd82jkQPC28SC8dH8VaWpiumB22dHUJ7jW67j5eMYhvb1arrzKX62FdwuYTWzMSdempi4S5tSZL7WLYG19Zwb",
  "key27": "3NkpaRDUuLX6i4aC7cGrj2BD2nzhyeYezATMiduSJbPQ953E3c2nS8nFc3mZeRV9WbrxbJTyNB5h46PbsYuvnaAo",
  "key28": "4gqbkHuN8RtyRi52k1zhJLpz9cy8SK9xhaApuHsScghbtTVRxWb89RrhrY8hNEcLAADGbf35danvAYS49kETm4zK"
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
