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
    "RmnSPPtjSQYUss3ogcTEPiBf6kNJq15sPMMa4BW9F9AFET8ugdQUFbixdnufsrC4d1nSfRUBzzXbHCamdjzhHjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhJ7MQWiJdU5VcaLCiUUXcqu3y8rH77dPLGiPrXgbFiK1tWTKuiihtRuyTuU3VQGP74j8PjpgWa9A3gRYi8zk1s",
  "key1": "5sTktN2ac1sQW6chuNkYwCUcKyY4cpdmiKa57QeNNcxCiLSpprDXDnpxSoR3H2JVDooDG6tgZLogRrxWXCgA2Nir",
  "key2": "4VXf9LzzHwjvtADFtfsRqPQ4iiaony4H6HrNsEAm1TTY9QuiVRULJc4JjHhxLP8pViQ9fgPDTUBkqcgsvw93bfcS",
  "key3": "oS8FkMRVFeZEEMtVHe4KRZXYKNWB5x2TYh7YW8e5YwBPhWTnaM21wrA3AB39xGBavtSqHktCfhznjvRDanmB5Ra",
  "key4": "4rpvAuoidiigpmUrExs4nEShFsAK5DABU2r11YPGnKepS8GKWfTMEzgrF78zprWx3gNkfDxA5ui1huWCm5b4s5vz",
  "key5": "2Zb7TeaUiZJN81sG4Q9TZaSHSwxRXCn4WCJn3sHUQiWEKtoWRxzbp1RyqkfTVZ3V6oJjbVTSwJp3TPXuSBsY6VYx",
  "key6": "4L5gwrcbLdZMp7aXroUYyTtfnDgcU9XGj1T75Mqpf4uqja9uxmujVKQpLFcjQ2JK27e3zoyv7kQPwUE1sVizJthq",
  "key7": "JQ411kEm1Ttuf9FQt44BFD12vH3HoxJnbkqrHgLcDx2tFmL2pyjYnnbwe2zY8jQZ4R37tAZzTKruvfYALFhrjb9",
  "key8": "2Z2FnCqiVhX5cm2Dpk3jiSA4GwWXwVrY4cGNAnU6yjo2sC99kzsWnSJ9t5f4HNZeSPpi448CkJk4cZEkux2c7Gi5",
  "key9": "3bZFEcTLevHzLtcL1nYJuYynePEQFmk3HBzQNYUuMMiYxYwxacpPvidp4qQvfenXB5ssondu3LEjqY7guMjD2bXe",
  "key10": "27DfzCWK88eyBkZwoDdzndA3A4G5nVzKArHqqsRNb8wUb7KKH631XpxDUp77ES1djAYXw9VYoLM3waduLWeqaWht",
  "key11": "2BUTikk3L3D7FSGYJjKDyJryQbjaUQ6Vdegg1JU6ZNbn6ehTY8gLutQXPBhuRzLPQLyjM3YbYcFchBL7ruDnvmVt",
  "key12": "2dQ8xazsuM6ocEbmbADfHWvz3MqYkskXXDv6sihwmtkwtn7u5gbrbkLUveb4VSqXidrboqdmn2WomWtAG2G2tEte",
  "key13": "4Mgm3USR4y3kaCeqJzZqTPgbwvuNB3Jo6pQVKbyvLfbReedWQ44M9cNupa7xAsXboJ2dUBpdsEdsXNJyoZdWNvoS",
  "key14": "29HemKBNdSwN8SahhvxmR3HbHz46VSMGJ3f6hMtn1zfiKh2gEGnRbuk4ZxCDaKxrAoURtdHuzTTxWNZudqxbnG4N",
  "key15": "3mH3gRMVz2gAkDddzYpc65JUEbxzMiXVzDockwRqYr7ULMrkhEzmFQzj5rBjPLDdHnPvzohCSebvgYjHhdAvtVcH",
  "key16": "3utC8bGBhTpf61TVbWvYfSBBp5Z6HrMpeknMAH2cB1GunYx9r5Me5Gs5rFhDLCqWRPKn6esk5XfoFrEMHRFdH6CZ",
  "key17": "4yr7KV4jNWU35Q29qwwnZ8tyAG57Dzq6GaaTWE1WiDHeh8crJyJnfxbkNB8emeAXtwF5WdJQRJHiLjqQva9c8k2Y",
  "key18": "vSEQn54SygfFJ2BA4vD5Gf2BT8KdVsGChTwgUQdAdDrp2kGGPXYx1hk9TgP4p88rdrX5u78uTGY3mWZi5nVoxfu",
  "key19": "3qUr4sLA3yYXpHNBbppKmA113siSm9QfjRdLm6j8Hizh2sVgC9eLEA9JpgJnq9kBPpF2JDUdY53P7MBT3fpf6CpW",
  "key20": "jxxRFZXkZeXqkZZ5GxwXp7LnNyKFi5hBGGaLaJSWJRs2uQ6CA57PX2mpTRsaQ1BvCy55FGGmUXHCCK25VMxrJAU",
  "key21": "3TUjYWrAfiTzBytpKYV9uZvBo1un8m2aaqjZVS58R6eFsBo8vCep3mVY4yBwAQgCYWNH2QDRMDFLQiwRbq6eV44o",
  "key22": "KemMtLEdRwGWpeQDNcZoaqFEPaSmCos41z8bjPbgAjhkqw1Hr5z1ZdBZTMY98gdJd8nR99MZDbmWTizBV2ubgUL",
  "key23": "gsuWGdJU9Q85GjL9cuxRnvAD1yEcp4KouCpZqnRDYuXTjPJF4XSH3iyEiBzBkNTwYvYXM6Lbw7ZS66uyCGMuh77",
  "key24": "2vuikp9Savxrg3feuHxBucVQwQNwLYwtiFpSQ4xjfyEiJ4r6kLgi87YJTea2A1si4PAEJ87Xyth2jMdt4sZ4bdGd",
  "key25": "313HgKKaSzK6ALxZo3dPiXccPypgY87YDLGi6Sf54J72vjxdw3Sb9e7HbE1s5XSdNtLBQSAswKgWBzotLzbRbdc6",
  "key26": "2bHqrDY6HQyEf2UgD4WNhkRg43UubYcwTedT9n9ZXYjs5M6bWcEW5iGdHZzDZQXfLEEjNBUHQuwrjXpj41FxoWmJ",
  "key27": "5ZcWFLTcr8vjeJfg8eJ4enB6w4Q9ZXTAm5118pUKk4UFfDxTQBgcZAFAjPhRRXJ6h5cC1TZDX547RfmXWxnsqnR7",
  "key28": "v2xEgn1PA9gCQL85aYWEsHMiTZ7keHB1yEKS6MuAyCaiJsqrnZWjEaZMkcfqTwsb1nsqB7KdW2YfhctL4JwUSkc",
  "key29": "2giLqM3Y8Du67NFv2ECU5UbxAFNAzpAFHdYpTcf76oUiA9mHYV5gpC4i4SgLBVu2yQXCg6Est3GNKweLedLSbuk",
  "key30": "M629Mz9HYJbBFgLaNTQMV3u5xGSYuBPg4keXd2t3r95HdNVTfqBVWuh5CuKQT4RftaVQT6FcAmF9ZsQg5FHWBgY",
  "key31": "5cD7UVy6vUk8WDkptnnNkBgasfBbBo6oXPPZnohcNUa1YHRfZeJH4b5XJQrjqJxtJwAUgFkNpUTsxgwBKp5DzJZ8",
  "key32": "3q7ov4GHtNrQ4u13g3YBdTKAW8fiAgGC577cU6ZeEWGV6qF3NM2FccV233BVHKpLPogumzFPK67Wdgw228rnnLJD",
  "key33": "5DUGhzzYaMXXaFVrPx2Xowpp2N5VMdwbVPshvYYyJWqSboKmY1WZRiP8sR2zBUATk8s1rsZN73s8PU1srHZEt4pa",
  "key34": "4jMpcxYWUGRQ3xjCYNSQpeynhXnPjEwS7Wqws2StsNEtLy1Qv1mAqQVzEq2f9snEaAJxU7X92NaSRab6rzzK4Gqr",
  "key35": "2BRYGKdZ6Y2ZX2ULvhBBixNbo9LWVSTDHicHzncC7QFb756FWuGvAPiB88ZhF6ubJB4YW1VtvK4J6jd7a3vzZU9i",
  "key36": "532AWVLkiAehpTCBkSS1ZYEKeZ7d7ny3FM3pCEkfBjCSNqXLsJ4MRKq57UaMChEmxKRsNNgQJKheJitKPPJYfaFK",
  "key37": "2QYMCBCoNw2cSgPmBdwkWPkzDuMCaVHPXzvzT3SL472X9M5MRZXZbs9oghhF1VGX6PqWmnTMabDTN2PZnsNsd4To",
  "key38": "Dj9MSE1gdsQJbQC9VoqmguqFcMbP86vWEECGQ3w1royzJk36A1Ex77f5z216RdPuH5ikij8qSt1ZYSLMx3Q7LdJ",
  "key39": "2n2mKcZoXGEv6h7hewn9zyJGmuqD8YmzJYNXNKxy8VughHdCEt7QoTFW7JoTMT57FoPNsgcbUy3QXwjAMkhAGr8q",
  "key40": "4NVrT6r9kxHL3beVvzYtUQWgKuinTAai1A2JDPqDL4mRs5KJGW8MTroCZgGAJ5biKzrv6bAqgNK8YCA2jupHrSvJ",
  "key41": "W4s5LUUswTJBdu8vYx2jPTVJGxWW2Y5mtUrLcbEMo1gtFVoUH5LgExLjMrnUpBjeAxBkbc5HKuNbJ4ZnVh1CnVw",
  "key42": "9HQa6hzFmSn8dSvmbyuf6BezC1Y6Ybp4ESs2UCzsrXnEszzJFYJQzGF2zf8xeRE5RbugzHqtkkVese4umcqaQKz",
  "key43": "4FvrFGZWwvbd8WLHVgjdVuKSG191MnjDbzzuJ3rFEkWC4Xs87ud6yzHbvxspuu6negbhDiAiyMiT6s6m1S6k1cQy",
  "key44": "2L4YyeVJWqB64n3UkyC1emZyXQTbTmjkxQA6zHJAde2GxyLn3A6g1rMXixY7FmLpQgHBeJ2Kif3HAQzG6AejzaRX",
  "key45": "4ajEUyaHB4A7pwqrFTqEyVa8uQp49t9voUqg6X4irQG4vURqWRYCosbVWusQTKNbCtgr1tbQ2ZSwq9f9bAeYi1un",
  "key46": "497jQWq243Z5fzdXDAEGqMdpmgr5e2bgJQFGQQFouyd7gMa2HaTpYE3UXvufAGa6mrG6rsHqtgYqJrsZ4BbqoMTZ",
  "key47": "38HfecKrBknSsWgVEF645HBRksx1zi8qYFpHWdEB92cuQ13iv251KBK2cxcYj5Jees12zXJDAUTekf7Wob43UuaG"
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
