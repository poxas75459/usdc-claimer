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
    "2vbedVPCC9tANkeoTLznxg945K6v99gkBibXUFdKjGRWQyJueSV2R33Q5ooB7sjRmFWrq9pEwwStmd8E9Sjwygoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUSedAwVgutsGYxxdnWQRQTvTKm7o7jikosLv3gqx9mNfv4ba9BGCKpyet9X4sQwTukMXPs1FfBng8eoc5Fc5G2",
  "key1": "5DfZFGat2P5EEPAnvomkoazHPphn4P1SMqUjdkGKtkvmEA83eZgju7Zt67BZXXnTAobcKEsCi8TUqH5Z3GYKdqtp",
  "key2": "4UmYE3rUAyUcqddQtdNQEydBgZ2U3fuhScsUx7TH7rCrh6E7DjbDVwv7SMQFso4jTvNidjZBA9VfiDNrx9sPoKwQ",
  "key3": "3RefQpwjFhVwEU5BN6cd6E1TpmtAfF2USxESnnsxgTs9JW52KfZkgZqTMMsBnT9qW1Ycod7Uh6V5jdefkmZN3BkC",
  "key4": "2j8wLidEGVEDT1s1X2ZVnVSX4oZWzMcgcUfVSuQCmsnqRgteaxJqSh1AEPyAisTuVuz24nRJZ3WmMvjTeMGBoKnW",
  "key5": "3DWvS5bwMty14irzmWG2ZLL4ptMRkcoYntwT6frE6suUFsCYq95vZLTv9F6XAbtWtBEDAz5Mc6SvLk1jkEB28fm3",
  "key6": "5ryu5Rih5uEDwfuspEkRM2sjW9D7LMsMRgEuat2dDyVTt1bt7uTreebDe46TqgQqprLrhAqkMqRD5GnjpZxZnSLU",
  "key7": "4APSv1W4MADCyWyGkgfUDWcHGbsGXWLiuYqSFWbY6bZQ3mjKigsX9F1m1aBWz6trJGsgWZjPCoo7AnSMGi6s3min",
  "key8": "43r1EPHVagy3tyhrg9QzpCQGHCmAb87FSY8CGKFirVtsDreseU31UrWGpsAUj2MJPZGPsRwoBg6CDHtR7VSz7uF9",
  "key9": "2bdyrUBk8sdZ2T8T2dA29NEivd1SR1KuzRGSM8xXfoQXGA5SuGjT85c8WLYR9bxKgXN691EpcQor5wW7gUJLSKvt",
  "key10": "2Ueec5hR1SRBH3S8TZkr4jRXyiS1cRXzhWHaUzPwKKngnKnXNcmaEcXhA939zP12dSmJzfeKPjGJfF9AuyxREebM",
  "key11": "37jouqyfmjmTbSdWyqykUvPZ7yncSaNBNB1ewEzfHotZ8hoQWBexXQtgbnD7XberFbw3fc1ovyrhSJQ4WRW24Yb2",
  "key12": "2YD34NSJ8stChyJpnwq26xQDh9V5N1CD8LZn819B3xxAcGVRUdf6jpPK7f5yiooVRkNZk76PGZQJFh3be7hFDCoM",
  "key13": "23L7z4FXFZFmQcKZiMTT3exrCZ8Bes24iqPnjnS4Cg7kkGAzwLBYt43AFtCyPFUVBRiacoeCa8JVba9UpR49DkTr",
  "key14": "3eHVzKaw78WqCivWEVDV7wCYDeiKpVqRtZRwyr5Rc1qvLkc3Qqu5wtuutThwYYHdtvG12kffckTJC7oqGExzj5L2",
  "key15": "4A4J7WTrdheUV6dZEv6aF2cPbKdy5WgzMmiCJCGpLVbJAhHGtxNCMEnV3MJRcgJMVZ87GZ4WSQw4ZG3Faj1SpwCM",
  "key16": "2ZrnZicwcBGUyvsjkk5b98HSzso8jK6iXqW42WnXe9ccLDaCdnvSxoCZWkF2uYULdD63yzaukitDtBhMZqahbsGu",
  "key17": "xrKpbAb1je6U91iLYKhd8vGywP3PF18tW3V13bMtJABu9CZ13XKkvEdR3Jyi5mY8ZcEeVf7nFYtZuB92UN8bmVP",
  "key18": "annbeDh3Z7kbzVHp2y4nc2qqzo3NDB4CRNaWDuoTL93PA4P91QE1x9bwRwMCvBKaBDi7oSXmFzRSzocajtZyRCo",
  "key19": "3BLUzHycDoNc9fNuq6rMCUBqvKmPjHH6QeUxLfqSjcsE14fgmFpcrYAzAhYRMJC9HGiyADRFQ2dqHt49WFDvy3nK",
  "key20": "5sBqKxCGoG9aHD799HC4dWNDRtzmfFW1V1UdBMZuXbVa2aTvEuTGn6K2Rp56PH4DJP5r1Mx86piPsRP3peUrtNgv",
  "key21": "4LTfodD1hcjBHb4dvncYAZFANw59egwagZt9kbXPDnMU1FZ7A32An1qLV1fcheq2XaNqm6h8haC78qCdcQue2o3B",
  "key22": "5Fjf2pq5SEuKz7wTSBffK27Y6Y8961EAXjW7PCZQdnLPAzZQEyQMBXQvLti5JPixRGtLwPPgJQ7J2VaKLkf8Xraf",
  "key23": "4wSY8rkFM2BjdiR6taBhewDSa5YXAR8D2E5CD7XCx9QnKGT7hqMV7QFzCRYw8RSmSDveaPd72iKnPxhy5LRXtpi2",
  "key24": "4GkDBjCgQ2X2gvrdv8b9HrAeioVjLjjEYNVYWVZGfrZJkH8HurEV82CuEsuru1L1LH59oG26Hi8qMcG2kfqjYMVe",
  "key25": "3XVGxPvujx5jwqbMNeuAzjgUZa1ZXxrLLeRkuMxnycAXKMVzLRmgKjMFcByCnEuKJTmEDNB4JB5xTJNXwSUcV73G",
  "key26": "wMaHu7gKMd9uxYXY8GqhwFmL9Fg5dZfWytT2bU8KCmuM1taJQ8XhFahcgpQSA9qvVpuGbT3cHFVHgHdVrJFiuJN",
  "key27": "5UnFoJDDKhmSn3GBDmkURW8ntmdyVvpVQ8j1iNSVe64PtKev2avKrqsFU3CmxC7MwNLCP1DBYi8s7GR1fWt8ErN2",
  "key28": "4xmHRXXbR7MueaR4Mz6rg8RSWLQvXt4j8VzzxHKLB6AZXKwK5k7unBoUriso3cjYD5riasRGVuiXCh5kcFQ3yKLT",
  "key29": "4xA6w7EPwk7qRMSnoTNQsuVyW2WxMywYrN2g92qxHo51b2oSyCqLUytPQQogw1VQRSse1DZRHnbdo1owffgjFDYa",
  "key30": "2Diu7dLv4bixYBogpLMhdkAhVYmygBVg6KXz3RYgeJQyxgRCosszp9WrvwxgCREjSRfFHEyWJNJ8PRxVuXXSUtr1",
  "key31": "61DemhSDpQeqhT6BXtRZUaFEdovJgA2Xa5jQj4owDMd8VyoTeLMjAPudo5kCf5wcEyfHTNpHBZHSDz61jBF9yM1w",
  "key32": "5n6ofK8in8LEQ5kbJizw7LLNhVeg6ZN6DWgFM3y6Eg8QE7tHqVxMM2Hdyky4yNjMC2hgHcnJ3crnor2guuxGdeba",
  "key33": "3RKsinkNbyoAWeHsdvjXm2jMLGJEdiUwzVh7chE5mLBos85KT96fWrjurQ52XsnPqTAGa9ardhTSekNxMbCF7Qud",
  "key34": "61MfZ4EAgN6Cq1BY6jLrfuouhjZs6n7LGrxFifHb6jAxkThkWcidjUSk49H4ceSzpLia3kuDAJLxBD5ohGiXZkhH",
  "key35": "2x7V9kpVTHa6GZMU5PaygQJVwbuYoV5fnmNZFX5jszmZgL3atpKxrdQ2zQjxHxr6kZgAKtGV43nCjffktkRaG1sk",
  "key36": "2NgWnG8VG5CZ6NgESS42bNygVVKVq7SA9NEHYEg8wXMRgbaw3s4CNbrxmuihyS16cVwbdKGkMAniJUhuZNwgyPN5",
  "key37": "4zCDASMf8sKdMKVBh1HG4Lbgu9KZpussyE4yWof6y11Bf6EHgdvUnstsSDm5qNh8VqobYtckiLdQnsRns9bMQc9K",
  "key38": "4RiQHLYSoc5QLBHwAPHN2CjNevFzQYVAioox2VEEqztyxdzMEx3xnWHRTFEHBZZ72sdGuhoBxrFLKoTQKDzGbabN"
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
