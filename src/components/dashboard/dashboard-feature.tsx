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
    "PaZgZREJUHbqa33hbPh2ji1Aqo6vZJmtGc9GbzDKHBoWHBY1iycPde6vWJnegtiWi9TbCpXd1iw7JRRJ66cV2Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56L4X5K7qv97gNXVhVHz9Cupak5vSP9jat1yh8jbdwJH2B1q9veWxXWBnVzPRbxkfjTt29ezejx5SNo8FGMd96Wi",
  "key1": "312NfR8h3thEAmFHg4Ps7Q7N2ebYQib1SbrwernrYDegeM6MszYzx7VtZyT4HRfC1hwVY966p5ku6gW5vKjdvDQF",
  "key2": "3KgB42pEYYGTQGp8gGtFExCwvQV6oCbSh7kivDsboS48CV7taWFmAN4GyS69UGTQjFUfh1kcvxapGJhso8RqG2qL",
  "key3": "GxaVXfSKPNFjaL3uuf9F9AcvEVhK7huJ95xTVEPAkBAZqrofVyAid5AWwQkiefhF5StqPN6MU6i8fumbQkXQGLn",
  "key4": "fC4xLUre5LgpYRrNpJJu4csBw6KdGnwae4XfrBrCD2312cwo22nbLz3Q5xR7izWUj7uGJj5TZFEqxaE7uJXmp7S",
  "key5": "hMuex4z7ysBQ2TpStFrZ1Hc1jAcBme5Viqpi5gL3tjAY21DAqCzz2bPH288uCDc6ve31ajgNQgVKSAgxb3qM8Kt",
  "key6": "ZqnNubgdyqEb1f2YdzXgrCArSFCrZ7ukyZRgpevoF6i6rDa3DKUv2uV5U97AeQ1STDfppNxzk9ULwZi3rPZYCuM",
  "key7": "33XE2qQHgb7NmchMdv8PZ15vpNVJLRhH1d2kXEkXeLpJ9jCsRpTHAj1RcqMQbhsfZXd7swsszBcCT2ffVoDVW7mk",
  "key8": "388uzkVRMKCWVAShQio7j2vYCme7t6nLP1FWn6sdgRJXeFkTFBN5dWzBgWrFwCYsY1sP7eLr7WCjWnfizfsJQsBn",
  "key9": "5GjvEAsCHoYJDb8imxNTGry3henossRzEcmhqDG4oVq8stTA2XwFtkdRE2xUcdL7kQnFBBhtE1wpzbNgxRm8eqUy",
  "key10": "4eLUuHtDAdKK3Xx2Ak2gwdsAkAv3caVwsE5nWQeBrs9mpK8rLtNWNU6AFm24Dgk7zcsSoqkSJsitNuJ5VDjkPynE",
  "key11": "5hdpQfu1QxR8G7znQBo3VGkc5J89Q8AaJzjB5et12XpdeKyk52JfPeBFMrBpkyHLWLSNRGxbxNvo4u6FGSF56uHG",
  "key12": "2NuLzJJbajispZ8rQy3SfFkozMpDxyWyRkUNMpS9c48oQsV1wXG7ssgGXz8pUeDgPdoXkFBQCWerCss2Bg8o6EzM",
  "key13": "3LeeQfwZLD572xU7RhbborGzLBaXfGgwWvTdbac4PBNSXTzLhxLwZtJ4AsmsDwLfD6wFse7fpuTpzEuPaUMzHhDF",
  "key14": "5nGVT2ABUGmemonG57xPtjr1PStB4F9akJg683gPQeq8Qx6oL7WgSgYLXqzQBHCa45UN4tVnFDtceX1GTAWZ5cm1",
  "key15": "33mNT52tQNjfVBYkn3bHw6T9uWx3v4eYbWVxmsFYn2VaaPft3bbLaJf3c7dzYU1FQ5MbBQ5cC1kZmXQmG7AUS5S5",
  "key16": "6ERkvmWFBztEeZu2LmERhiomzgnkkAV4MokWbiPayyWHip6YWLENJEWy5D8aGmjWT5b33NJEq8ibGtVDcNeKiNc",
  "key17": "2yS57ox5hNEVvbPSq5QuGPjJxFXFMwrdcHGBAmZhZ2ES4HxuQmLfkXPiXQ6oRwyCaX43ykUhvTjuDiDKHBWRTFk9",
  "key18": "4PkmPj8Sw355xz9eHMoRiDRGRHuDVScdxbPLpetims8JY4gzoiGLHouhr6ryCHQtB5z6puLLqtU6igrzsTo1dkYo",
  "key19": "65Mrf2U5nY2XPVx4wHojGrxNSdRTDjmCecKtg8N7Rn4mRqwiNrL44R1XHKAEmWnSBhS9ynnwomjcp1xn6qq7nNXv",
  "key20": "3nZKVAo9daey889JSgMCE8TaGYDVYDcVe8F3pju63JqPTNdNU3wLxtijENXCvw8uA7T2dZiUn7bGQPAmEqGFkkSa",
  "key21": "q382k9Wag5uhAKYQDApRznoLMoCQ65HsDBqAX31F42bqgSRthxegbL2tC2eSr1qRxbiTZh2CSyS8Lfw8vrksmfN",
  "key22": "2zqAEWG97SfURD6jZd8LbHEc3aqtdEKH2jhAuPvXMRWNNUEtQrq3YvHWemsmukcZwsmxrehZ4C66zUHBdpbbb8Az",
  "key23": "5E6GpqHEDbs15tpvk31Qb9s9QG5tc3wtGRVbLEL5MgpVTht3cu2y6drqC6u4D3XuDedrhzJz1fbpADxVSL8Ed1ZK",
  "key24": "4rTAUYuGtsThgRjAVtxzuqQTUi1HPXQaFhK4mB8opQUK19zvErDXFVBEDsuPC914uhA5YQKe7iZDF5MESzbCz4dN",
  "key25": "2xCtww1eNsQwSmm7Rjb8nBaLZug6PoSKMXe45WaGXgAKAWBRCHCDJ3Jouc6daNGG6YHCrPCeQxZXJ57yGt6pYSZL",
  "key26": "3VbMHUtSQev2mdE37F1feud9E1PERtwqSnGeLjQP5jdfbnP5D7S2iNgq1Bcv5firqXAmiUv8gnWdm1DMFJqPiUh",
  "key27": "5HsvKu6Jtg9cPV2UMHFxAnZcj61E4uVcu4LaZ3b9Z5dbAL3Y44WCqT1q2zcNgg8F7K4diMs9ZT8mZab2juZUZV8L",
  "key28": "4XVau5Ys17kx6ZBVVF9JwoNvk9mtx1P4MqTiC77RsCBpeg8jja8tNGGR8mTdrtsrK99aCD4Ce9zEjY7Cd4NBxyDU",
  "key29": "49K1Nji2YtFA8xyajzwrF1kVzGpej3aGk5SGFiNMokLspYz71Xd8URjFZSgMNXaTymfzZoMtf4HDZujxfysKXtrC",
  "key30": "3AJpKKAbzNHSM4aLcMCcxigRZsv44mMh7GFozW5yzr3Exrg3MnwwmG5YXimHxRd4qZhkJyiSxDBVDheLLhsiyFe4",
  "key31": "u3c7BMh42zfdPfyRiFHH78XzoCqYjU3p7uuk9wLLkEvp2HSmHRHJBkh9Hufu1Kv5mZcSWXYrrvSMrN18b85E2iT",
  "key32": "4Xpr3oxWSqjhtwXxRfF27vpU7wdZGaiiMKcHRNKhn67nyAa5zxYZYh5L8TgTk8qY1rQ6BKznNfJsPcCS6Riv9HEx",
  "key33": "5yK4wtL3MziMDZ3mhr3jZjSoBgqPKJGqVv19RtbjjwFvgfeWA8hGqNdrbGsABrQpyhNHeemoNHroBZxn4KTdW7TM",
  "key34": "2z6SVegt7VUgVCspVHagovdK6o4h2mwDW7Fd6svDS83bSMH3DSNXDHdK8EkDJLSkCKNw2SKPnKL3MMThRPUP7iSy",
  "key35": "47fo47WmZJeNSSs9okRQqZsvivmZLkEBuLo9kXNGYDLFmSiTTt3eJoNRtNTBuXyEq31AkBtiK1wVuL5fUWMDfhkb",
  "key36": "3hFFQtbFRUx6fc9Hyrmegwgmxdc5oUswvSnXaeDfF5B7jhCmKrmeK73DNKEeBGW1TwZCAjuPU1u1o7hgUJ3PhQK7",
  "key37": "pmmcxxZHjvwHZHoMVQKQMeCEKBYbJFBsgh5YsRALQt95cuwEFdMwKcD6dZSicroHh9mxtCyMH3BCTF6mwPYUyYv"
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
