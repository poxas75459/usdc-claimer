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
    "45MrF7M8yR18SHh1bKosiQ2FhMwfbWwuA3K8YrMgqLUmwovxHLcfRYfyn4odaRRqMWy8AWSd1E88GFEHEJf7TBYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGme5sBfSVScF7BiWqr4FHSh45cqhxBBF9XXweP1WX6ksdR8RNdRkF17YXHBMW1DqwMRHpyCw4poruvWR9nZURA",
  "key1": "3vvLYu4JuyNzr1m1pXGCs36PsBX1W1PkZqfwYBPr3zBfUknQ58mAFNPnCL5qc8LxS13Ga31tb4pfaW44oa1ZxbV6",
  "key2": "3dEmJBYJLuZsTz6aDvHswuRrqtg9ye4igYfBDu4ehnovEaje6q6nDJt5X2k5HQFqzdYxNdYCnmsXo6LhFLvZZFbn",
  "key3": "SM6GGX8Qp8M3xBzb9w4jbQJbwHmEEzVfzSaakXAbV2iC4YMaQ8QDsK4Mq8xDsAoQMqYqJmKYbbnzNFwcLqKVSeN",
  "key4": "4wMBcHheVDiJq2aRPrQ99jpfrPDm8U56ThtSSMv9Ao27baqpQ37SNcxLCiTbbJhmSn3WSG61Qozqt3Fej646yKxq",
  "key5": "5evDm6KVMT9L2pRs8uZHXbZCgm3JuUgKPZZYoNduEi2YVNbJUyityN1M3TPDvxbBF9qC9x2A2hi3jX67fJ7nbtiY",
  "key6": "5cmdKU99r3fTWbJuEJYakKHDxJnE6aE8xiqgTUKEdiperpgw94K254qviPm4UguR4uQ2PWo2Pq2WseZcw714Sq1v",
  "key7": "2vRQq78vEfiuVevM7pvi6wJECNzATBhGgM4mEFVNooAjqGXczyZEWnWcaoXAZ3HDh8R6Fgz7FihqJAfnuFWuaX3z",
  "key8": "28vcXy9pjK52qojhGuVHUubHXX5xoty9xTab7aXdUqQ3xHbPodGLerNGtaaCx6oTbJz5EKD9vJ5ybFYhkv1EdM8u",
  "key9": "4UZcMH52jDqw77iCo7CKnFvcito8sc7o1YBks9gmJyE8TKnLAWmmupvMU7n2FSVvXjZik4NtTVeUNetaWBoyweqo",
  "key10": "5j8FGEe8SvasVMjbHinGWeBLeMr5pyngef8YoJz3ukeossqj7owWUmmndQxurNSuxHEG99cFGGDJdWY9BJzqeUkX",
  "key11": "eNYUd7H57XYembtk9FV53dW8wJvt9xk2CxiRwhAp39G26cGQBtVrHWYcm1Gzt9XW2Ceojh9hWdx2n8Af6G9g1P1",
  "key12": "4GmxF5SEAwSfbcMLbjtDc8SghLmBa5DS2XeksboWRircitUvufGQBwqTKsC5x5jCMkkpoe53SCGHSzvE6Z2emHeP",
  "key13": "3UZpkXKG5Aq2xV4rjvyh7WfCNkUPPJ89wM9kBp23FxVr4E3iop2Mz8x14nDe4NBEZGZvWaupZ4diKtfeN5xShWXJ",
  "key14": "3sT62zZK3eDSSPjmCvnmUtKRRNt2fq5KqQah27gwUJeuHYtybeVSWFfbfZy1SWwStQLbHvCuoDeHfSdV9AJf2QPB",
  "key15": "65VZ5oGUmCYf8UvMex6RUNnESXcQnvJnT3aFhmoG5PhikTFK8T1ttQ92Uh2eVGDyv1srgyeikaYzQXMm5mfgXcAz",
  "key16": "5uhAiLRTkooXDpTmu8NLMKLCDUDWLNZKwje2MX7HfbKJUUC3aN1VR6r1SQeFb5gWv7AGT9WMNaAk9Lg47RTHRseZ",
  "key17": "38zZ3YMkQyRqzJiWWARhUb3SbuiPiCKuhAmWBcZbA4p3mx2Ph4WvigGec5VPz4dRgsVarsgZhfqvHM1VAuSLzvDA",
  "key18": "3da9pJFvg9gkK362pggfjWYqqaeWEAZh5kxqBMA8FzLVWdCdntG2AYRfjd9QoWUFeYpmrgTpnJDLkV8Fzaeo7yX4",
  "key19": "43rqkkhrLfx6A4EzvtfpeU7gFyfptwZtcUV8vQCEDTw5BUsrBSWFG18Zrj56wL5r6Z9YQFCVT1rqBcJzgcAK2qaT",
  "key20": "2JacmFpGveEeCqnvygnPEfekWgyYs54kdDZEBoBS4wLx1MQz39TzHQkye99xgKQ3gifgFUqDhrEMFDyvwwQ7Yztt",
  "key21": "43GjRVwNdJ4RYPJRAHoxXkjWGncPLF7a1BPAXVD1LxFvtMFencZARvNVenXNxsUkGnPPhSmAVL5V9VnZT6cBC3tF",
  "key22": "4cF1GRAXkhz18pmRK74iZUcFsqfe7WFoie2SPScJZZhnynmBZ2zVycNLr5RFzMJuwUVBPax3P6TLq7x5yY1twuXs",
  "key23": "2Xuti8NNKUY9cxajSeUUvsQ2SzugTRCsh4KjnHrjaQJ27jfbTbcnHzLmcaqkdwQE38CsMLoEfzAgqvNP1VehU92p",
  "key24": "7sxsdPtAVyZa1p6efMkLmJpKMWbdtUdH7y5KSHyiiXsfq72LNkv1zZ6fdbWZBnYgZsYiAbc7YTTLJDwMymnp5E2"
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
