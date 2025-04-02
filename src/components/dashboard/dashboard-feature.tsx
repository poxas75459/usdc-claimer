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
    "2LGzU3UqHemC62g2WpcfjkoJMwVSekwBqiAFY7zyHjFcpDN4hTsyCdbA7XcPAB849bqwhuWVWWE4qwt3hk9X9qGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uV7Dare3ZPtxP8KW7gaDzgorP1UEUdxRsP18obriTwqh4qMVB2Ez9Ky7bWf5ck4P9ZSg9CrDFjQ4F2cd6PKAjNx",
  "key1": "2mu9czgvasCTCFrEGVuuwQn98Kfvoywr7hJtYCF26D951xLxzxhtVHMwxViC6rX3G3BSMo3R6TyYfcKWLbGThEU9",
  "key2": "3QcSaLZ54kPQuWKaduAk58tV7qvyfh7S2xg3ZVdPwRYELshxjUipCT9NPYVgRrfbUojbHPrjBf8wtRVCRod2LBU8",
  "key3": "7MZGpsjPp99uJG8xxHDrj2p1URPnc7mZcbAbZHMdrLTjRnWgfj5qUkdCmksrNpuejn3xMWUSCuGdF8voRifFXcc",
  "key4": "3eSfvkxPo8sMoMxQYfMZnCf466PYeQWuyQ4cfXgGsHsi2m9wEPZtiBmGUy5jfUi8ZPR6rNahSthBzSCQA8xVBDvp",
  "key5": "54Ug8aZAnk8B7UWj3aYphrciAAGmUtssEYCMyWAzS8ZmqDyF5dACawkU6yYw1psZEGkUvvC9U3WFBDBxyyGXEgTq",
  "key6": "rhunx4T213KPSuA943hddtpa2AtavJzCoQbANmY7CDQovHxMGegAThjguLKSTLDXPcaLtMJ2aPSVBGk5qCnbPPi",
  "key7": "66xfhCgaNexUHRrWdB8pZYuDYfpSquiLqtWFo2u5nPass7yGu2TpbcHJjgEvuXAxYuxU1HgWGXPW7gAMtSuMHA8K",
  "key8": "2wn2rRAjENVg29sac7Jqe1u9zem2ynBtWx7BWZnHGTzQx2RUPC9xG8NWYeWyksELjJtHCGnfV7Sp5Bk6PEH1cF7U",
  "key9": "5uQr2Et3zrhj8f8F9LLdh2tnKvS35N7XeiLkaCfKxy8ufc5bVED234UixLN5gYJNxiGPSgaipK1tGqxomNHW9PY2",
  "key10": "ik9qyLqDiYZLhAC6s97FXCzd26zke5dcnW4FR58sxh78useRu4hvzZ8G6APWEjojNn4AhRk8DFJD2doAo4p5tMK",
  "key11": "5whLd1JQ5EcjTC29pSsSuGoxLcrBGv6KHd1w3uB2ZBFsUJoRtoZFD9nX8Aqe8d3x7yofZkyL7vSVAu657UVvGNCF",
  "key12": "dbKwRi8dsQnBW83g7jTDrzyaBfgqnHrbqhZsR3ZDzrYoyyB8GnBVJBgHePmnMsESuLKPxXCJuFj3LXmbs8Dc2DL",
  "key13": "wZ4DVNPn8WFPcXT12DpcmJeu239mSKKx9mHGtiLH99mx3TPCPhsRjijVxWsLRCB3tJebtkCqy4h8JZYxubor1dq",
  "key14": "2ixfeYZ3ij87f3Z8rbhvZhrboNBVGXVF9FnVQq19NnxZg5bPiDzBXSfBQrrPiLWBS26tCq2whq6rND8w9nt9Wyta",
  "key15": "2DM1DFUfySdjugaqEYhs4iHKG1HukeTg5yiRVm5i28r1pDjHucBpUyWjx2kRbafzpGxgofKYsA8RMc1Q6ucM22SG",
  "key16": "UErkAD84W4N6NWx5diPR4rYgBCDgkVMjHnGpZ1JqKpuzKAefwYzh4jSCHvWfqMUkoF1Zg28eduZNZi5gWoRtgRv",
  "key17": "2msCLhYZefZnGNbGdWAW9Vw7PTPYbhLrheZEBj82FfA8ULVYa1k28CsejhkqjYFQTu3WrKAxxyLNyFpv6NUPvwDU",
  "key18": "2FYwFhQ5HtWt2xQqpo4Db8ypEGgrpf5ujAEQcY9cdXn9svxpbD2uxEuLTHBeYSAvrEjojEVehseRXu32KAGmPtHW",
  "key19": "4gxBGWjt2GoLUEsV6mdLyJSN6wQgPx5GXhWaBVdLhjARDh2Vy8CFJLEZtuvmRLsmapK9nZx5MXyCWroqrxVmpjta",
  "key20": "4T8LFJrqRAPdGSJRfuB58GaqdT37bqPasaUeNuFycYxJaTa1EXjXr6YcBDQtr7QPr9aZdHsEwmxD2rNJqrGZ3b2d",
  "key21": "2G5hkiNavKyNzrKRceSur4MV5RJppT5ErDMJNAAyZ1Qo7HqtGHT6jiLNKF5ZA15zf3W7amXj6UzKTzbMCJ2ZPA8X",
  "key22": "5UgGUGXU2mc9N2kApsYXh15t3VEBPA5UgSHndEwAurD7F8KoMTHSy7PsPBKHdq3FCsDHTZaveFdXT1ExSZc1siUA",
  "key23": "5VY8zUtTyymLNjBZ1iQVRuoxhfp6deXjF7t9bA3H7xhBouy1PcFZuj2CzW1sqocP3apxR78M1zjF4dHLVdz4pkqd",
  "key24": "3LBPoHXh3UbAP5NCWCxaQzRN1tJF31QNT4AYS5SedsuvQQsqfDWMvPF6BM6Am9HJLDMYcBf61XV79rmY5uxWnbC",
  "key25": "5kJcP2cJbgMM3PSpVUMLaCkiK6SkUpgYwthYBcXTbjPZ59mr5UjjCqPUgMJx8Ut1AXeLrxCNVVcMMLf6rSjrP9Fk",
  "key26": "5u8UacpQNKMewShGFbJFrdcnYvk5gGV7VLuo9o2V1DweoB4AJPLFVuCFp7KYQEqEKKZVTbRg5VJ8HMCFxSueSgwK",
  "key27": "4Ytu4BSVCU27jVZ2kEdoCaEjdJHyQhnP9x22QJ3L6PkzwpMYtUzLUJDhd63oUsD24Pz4jEdEGajV9zefmeMa4aLw",
  "key28": "4Yvw6uEFbSh1Vp5wSkuTzEcfj9LipNdYWdxPGoyMjxQsLeMezayYFExZgpxjs8RsPQkTQrDQxAGsetq4bMqSJhW2",
  "key29": "3AdNxxhhffVBfWzwzgfszifu7JADiY88mpehE68fdro2tm8XGEWRqZt9mPi13mNwWuAXQPeEktm7A2rTCyqhfnu2",
  "key30": "2p1oszoUynWnGcwbnmT7QejrNLbdRr16BXTy5DExFWD5qU4NAdV4aNdRA2xtaRH3KUqXgjc1cYukuFgs8KoZiiLC",
  "key31": "2bKRUVgR26FLP1G7kqzJmb4mp6A89VYGoRbXnPqYRbKMWKSdGcyqZmL9rEKBmwmu7ZwkXG9XNRMBmwNNLc5yrRvk",
  "key32": "4zo9XjHa2LFXnBTzRUaY9T8GbdbJzS2jp2pDu7bCRrKVeUfebBbjE5hUr9suNZw6WX2MneUuQ3pVQdtw7FPaQc6y",
  "key33": "44Rw288h5zEZeeGECCpdsjmTykQ7gLSunPbjYM1oMMinCUZBed9mBpvQqb5UTdg9FGboZ4zHYFZLaHBJpK6GE4BY",
  "key34": "fKy95rSmF4J51bFWmjDjkT2Q4wYnj5R3Z53ykpuyLJvKCuBYsH7oD1kcG9b1Fr2nP9mkz2foz1ieV7cR2iy9qSq",
  "key35": "5KcrVui2i7aNSt3rx9oZqktviwdjLXYobBuuPDCmctzCK3kk2Vw5LHKx1mEwxSnV7SeKLVrrPB8bRBEDHxngfhoz",
  "key36": "4g44VrieE66LAf8TsVETYYvqda1HT6XQysryUwDMDnSX1o1Zfq1UD32vsnp3L6KCLdUGttGfmgUi8eacS6pGQeUD",
  "key37": "26TYSRHBfuhSWYxMnEezAMKhWxqmgoKAihMNcERMg9PhWsWT22TSqZPQEnA6uCMfUCCJjXXLwmYqTppYBV54XumN",
  "key38": "2XVcpSz4xYJDbrwsuhdLakuciXh8eruTn7cyqJD6V5jNoZ8nQPfJ7i6BbvhDnFFUAGkrGGyAAyU12EWi4b93k5p8",
  "key39": "3g4z41L2KbKehqY7BE9JaAv5z4UCHCXwNkuomkMx3wXwS1dqrqWfkC2542BnpGpgezYdoH5knqo4MZk28cGz29dJ",
  "key40": "5dMDqh11aDoffiJPTrDCM5korKcZDu429mUqKEeaksXWP4yn6tVcNEWr6e6vusqwKSxPmAbKwx5u3DKiNJ7sbDdR",
  "key41": "G2togLnc3ZyxAvfX5ZAUCx54YrNSbBGwLVLsWsNyqBQmqLZk6cSt4fyHqYeXZnCyP5K6ZbbQur52VPvhCVuFGSK",
  "key42": "3H4J3wgXrcakBKWydhJVpvexQ2MgDAqek8xek4KiLATnVgL45hRDWokLNYSSsWS6v1pi1jTGLFrVbo5RgbRE5G6v",
  "key43": "5k7xUdgUYUsckUmioqtFudW4WfhMSSYNdYTzmDk9JWeY5mRSN1M7Qnu2gGezGdhWSVTJtMisRzJFrNUuWAhMGkro",
  "key44": "67MeJi9V3eWaaaRvnC5MRt8zqwgb9dVBf1Yd6qt893i6vUh55G4iZKKaixpxheubfjpaHPXAWPDiC16sJgJAjLBi"
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
