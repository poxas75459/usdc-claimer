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
    "2PFLEbwf3AEhKQwNTfny9yE6kHby6pioz5trcCd5gDVrPuLH7Vgr2XSViLhQVsugWQSJDGbXukvhW5urkS9YfhiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcTXzfzeaCrqUTZrpBKAJkuM6D5Bhh7HFZ3NvfCUmtpnN3GPqffCX8Tu1cchrozmfjbBNjRtcB9VEjQLpcvsCrq",
  "key1": "2trdu9m5gMjusiXVjxbdNrQFThnMm7WBK5gaYasLt2wyWp4suPV8CabFYBNcezhN5RAXsZukhbS9cQSWKuoTXyHf",
  "key2": "3dvx4ia43fECG6aGeuYbZHgnCKbcJvbeKqXKSYQE7YdjozbVkEmBC38oJxTkmKawHezZQDjkcyB58pG1TcHkuDfj",
  "key3": "5E5J3d7WVU7rTq4i5SoL24ArU452X2ZmacmwCSgJMv2EQcnkHfbs5HU6SymBrDBoqfB2zWKEWwAQeNDwWAe7BnLE",
  "key4": "4uzVhEtQQuNKbzLuY5sNB3bio2zTnKPWE6hVMoj5sPKyJYTg1yqjpsxojw2YVvpVFoBan3tnM2J6iXvqsDc5tka4",
  "key5": "2v8wNGkUtEyo9fEDx1729WJcRu9xk9FDWhVKqbPUAETBstbbiuuXNXm9BhyhPTsRRzb1TPDvthHeLnJ814HUrAPE",
  "key6": "3ZTRhawS7DHne5GivB3diCayE5fjZcMUFWVmA29GowzapZuDrvwXpvJERYfB2BjVrmzyuYscu2KNefd7LeTatGsB",
  "key7": "4ns5MK8denY4E8QFDb6TdZommaEkUkk1WF11GDzAV5kUgWCwgpuFL3NPkewkDA8ydr57JtE2vNvVHwzxvKuVT1qe",
  "key8": "C2u3AUKZ9Av2J2zM1g9LKHQMBeGp1q3eEGtXNCYgNJ1rNuyvuS7GfwWdMmRpiEou2Yf5rrHafqLkvX3jYnFoCCC",
  "key9": "tprMh5ygyQSopNg8jmHf1cqPXvd68TNAYy1haNi5cdhpmauTzbrY3SttZM7rU7GRmZHnZ2NPUtQNs8erRnahJSj",
  "key10": "5MFdZvoozYuq5xGgpX2LmynuTcfzYP2BHDwZrR2b4r9on8tzD8u28umEzU8bLYYSwJXvSBBoKyEMUam1sWKFMovp",
  "key11": "3oV6V3JnM2kkGq7JQz4k7nSehf2ZcCXiSTZhSB4JKaDAjRcRgac4dB5N4k1h89nZdvserDeHXVEnnb61Cmr797Sc",
  "key12": "3htouo3vzLnDgRSLMLLcgJewSuMNKZaiVjWiMiUrahySqwQxkUcH3erXzMiN7gj57CmY7BPWegPpsxtDnAG8Jwqt",
  "key13": "sCGRZjXBF8K2EySZx9DXwuKUXjVandtud8r8JVNRSwKZBEXM7YdWvfSDWgq7WD35X82dXi8LokCxck3YAdJn7nR",
  "key14": "5MKym9s5TQcLdneL7nfystEW8nGaANGGHGyNHrNJNxmMXmANrRfRQhco1YobJbZP6CJZw3649rkRjHTALvFAAg8K",
  "key15": "43YTQkhm9VfK3LevD3ymSLkxhE1XsA7QcdhqQGeo3iPpuhhGuhphcUceBasnbJH193DAuWfqbSPDUZSHQiKmS8x6",
  "key16": "32KEBaSSfoVxJHzMRU9ghT9fg9mvMS5u5QvAWnjg8ZhtrmqiYAz3mXjz3Xi3qMzUYpYGbQL5Tfn4X3V33U7hU5z4",
  "key17": "4TmPKoFFd58Hn9XJ2oUDtoR9hkBRGg8cuyneAsEtLs5Mk4kJWZ2sFLpGWsxdLBKABPebXZW2E3J9UBbo1u3wwGXH",
  "key18": "AACzXUvsrZDcTVxuUHJvsxkmn2strv1hBfzgoPoeVze6zuwhcYxqVHvSpGcyG1n35wPz8HcVxDDckz67tWJn1JG",
  "key19": "2rdzxxABAGAQsb8L86xkBgusBEvfJW4poJktM6FSwT4wBySFyE8SQCi9KxLgEQ1iLp3JYvzWtnRxpdKzPchvTQpV",
  "key20": "59TUd5p1KB3cEy8vKGf7g1vYkh4oFGr9wy6CQSwek5TQHNzwdU6EH4WRjRwiupVAHrdMRZaEjzLMQPMj36RC4Q3G",
  "key21": "ompjB3Cj8SHcEJxyJwWrvL1ngo9bF7vz6f8jsgFLpEjfDrRM9aRWRJiVGfAxFqYTCMZP8ZJmNrpTjETryVNecdQ",
  "key22": "2kDRize2eR8jz66msWjLjFQBMrS89wYHjghcES17fNvdZ7Ezg2hW5py31CxBgpbyp2uVr3dVbJCTE2BfNnBmxn6T",
  "key23": "4tPUy6AsVD3PfgBDcThdYqNa6iMFyKRbfZ5iSjoa1dPmDeRSeVYPwpZRmHmVvrHPyUokB7v4WERMLHfHMeY5ZLH7",
  "key24": "D93gHsEwFH7KGr8cc5uCk5KLFDDvKYYFuXMBxXgpCj1wLCmCCfFbrEgupoTJxk8bw6HRepRBQKTohgHQ9pm2EzT",
  "key25": "4RiZqyEFxXL2mVPKtsnUn4hgw2Jv3t1TeE1Vp5Z4rWUkwnDF75eqmCT3ZQthQ8N7K9MDnqpgm4muCVsrLocsRZDF"
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
