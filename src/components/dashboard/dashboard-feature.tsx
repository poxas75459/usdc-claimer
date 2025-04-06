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
    "3aFLdrTnsW6pB1x4HAo8NmZRi34SPXdsPYiNGHTmqMaVygJzwnjqtW1KpkC4kzwEy214c8cCrenzm1qLJ9vsV5K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHdy2c9AukZDfMnB8iAHXiQymxrBUgscfDJ99kwsh6ctrWwo3RQiEGoBWveFnztagbqvJ8dGnjdxCHSGgh96U44",
  "key1": "383Z2cabEf6PMan7rYMbvL4DXfw2FDPuWnmpkhpXjCDzPMenFcREyap4d6Gr3Sde1g1T766rreQsbkXHeG4UeLfZ",
  "key2": "2B5VkbdfpMMank8CcHZ1Q6kd9mPCXEvYDRYUMEJQWdYE5Qq2cqWan2LFRYKLAozH3QHRZ3oXbS1CTw1gge2MEiuc",
  "key3": "2SPdMm17hRVbrJ1M1ekH1oSeDhyXE4RCwPEfLqzpqDtvW8HdT6fDbWodLSgxb1ofBreNWWwKGDcPpA666buJgoBu",
  "key4": "4vchLsrYE9js4URNgvUY5ittdNbLaVneYF6u21atu66B3cbLoMP6drQN5D96QqJ3qAjDBXPhPmoYghsKGfaciz9Y",
  "key5": "cr3bJPQbcuyJiWaKN4bVvTvrTwHgDsBJsg2jAqDj79Rc5RLrAmiyxvc2UhYHGg2SPjaWe3hQBg4FqLpJno9xMu9",
  "key6": "xBZZQg2W6FyPVwqmQp8jL5Ueq6E4cC4VTKuZsNdBJwqW6ys3fBYRov6y2vJZ1VdLVdYdkz5UcVVG1SmnCGk13FL",
  "key7": "4viwGLBiWx2Cx9mqFrKyibyBM83EpaatNcvTvhU2oKrZrtrPjAbMJjpDD1BTQst3z7LdnoLD6tGyea5sX1ymCgBz",
  "key8": "3o2y13aPZpLpeqTUohVoSzuhXgtU6yJsS4pdpc1EQFLcy4fALX9YJhn1qJsqibkbFasUvgTYo6a4WSWNNErH5yFB",
  "key9": "4vXDiu4qap4U9HmVH4ABtHCxMUWQ7T4yNbUxAGSWgTYZfsMuR44o8N8QxhdAiP5XkJ28CoHE3uQPJvDL8H2HzyV2",
  "key10": "5vYM3o43428L658LT9CabKYVzChk6LGnbrMrqAta11WnVSfGpRPi32MEDgdZJ2akCfiyJyoPqQ9CrmSjjWry3PEe",
  "key11": "5aVT7mH5U6DFTH2uMqvjpu6qa6XY1tWFsqerLvTdH7EzVfLp8y2fB9PahBhZzaZkwaXWMpuSJQrBj9LTHhznrJwG",
  "key12": "45Yu66K5gtrx6kKo7eF5YGE9WVSsaAygtzB8DP4sCVnrGVwppfm7Bk7qv1hkvHGgaX6v2Ag9iC4Dr87Jrg9Ty4Eb",
  "key13": "3988RKyQC8QNJQMjfc77Gg7NgUjTv6ixxPZey57sqJy6hao86Gk6uyCd5iApECDVvnZtER1mMFQPVAmjQ4coiGbB",
  "key14": "2KffL5XXnfbx4cZMt2BENcmtJUq1xWecaFwLbFhR9GyZFwZGFkztLAnWK1rRV6J8TF2aABGLeNkxhTudU3B5GufP",
  "key15": "3Lq62Hwisr96vux6vQBcH2dtERCrSoGByCJCqAng35zYyCpoqn6Dg4JATGt8GkJDsCtcc7KSKbP5CiyTEXb5Xb9V",
  "key16": "4Qj6MbWFNxocuUBMTJdkZkfcQ7aWPNgU9fQsU4jvGrsrARUTn9qRvgscmaS9EWhdYktUF47SwWuBN3eF2y69d5QE",
  "key17": "2znhL42f94VCV8s1rCtaoyzWNXvFsXZgRpTGLMmX3yo2ZLjZxm9vesPx67n1szzwj9anLHoDyJAU3gwHLfe1mCHG",
  "key18": "2DdpRBBfzdQkoxs6syvUFf1QSzusHRvzbjjc61hjsJ9f1srzSqiZ4VNZM1rpx9y5aPKC4tmadgKrWBC6FEr1LhBE",
  "key19": "2XBQsRSb2YDiKcgZ8EQwK2EWbGqAJsABDHgM1XCRv9Wzy3g93arsfNkGwuYe3mE8EQAb5odd5J5Wue5K9mRxREDX",
  "key20": "49Sta64GVD4Y2R3QBvyrU8kiuRmVNVJqvj8VHAUAvwQHepHw4NeASjiC1hhrByj3NAMhMTW9qRmo7vARZTTN1DGb",
  "key21": "2dkTCD8p5B9wpqxEUozsYKXm1gdhLbFcQcnsZBiafctgtpRzNdJmKwRTAuBgMkcnGxwtoNtejQ6zrrnK4Z5XAwh3",
  "key22": "5uXJ4SEETbv2ELHfyMKKfXmibBw6SzB15FCb8WciN3y7H26bGXdnaVcxfZVsQkA8FJk6KVvTSzTkzHPDPTR3wmKa",
  "key23": "Gr3SwaU7UY7gZmvL27JHFCLAPy5y5uaQw9kn2hnWNcNsJmdr9eRFxgtwcqKp3vkvYBmi3wvDhJn3BadXBVo75Lf",
  "key24": "21oBbkK941mRcVEX3zuToBxDZu8suVD32QKsN2ZQ5k6arfQ7QNFJD9BSGAVoSyDKRWbEKRYg5Nix7p5oyghVrPVx",
  "key25": "5yBwyNpEv3Rb2qyftnB39r3FpWp6vknXyLjoxyEuMnkJZ9Loo5NZ4nDgndx2i3z7Kejs4Hq1KESKvkXV66JDz5VL",
  "key26": "4YgB1cZ8XhyU67KZdr9Z2N6BaqsNYEiqXggdoS1Nu3en6KDADHkbcGZtTHbYq8j8a1c5tcMxTAHt3bZByS7UwHMV",
  "key27": "2xBH8KZxSfEPd7b4vtdqtfrwLZYwSxLVNktpFEF82NiNFRZyK94aPe36hM3viH4Eao1nnXVrAt1eAK6GqnJHJR4Q",
  "key28": "5LV9LE3hnXGZ9sttmbaK3wKfGeHxMWsUFvZUXR1T1EZki8TmZifUEHEbX5XyAUS7m5VZhq21g7cE9JAXJBtXcWB1",
  "key29": "28VZHa8YgAWyboodLtJJSeAknHyD47maW8dvu4PSnpfyCnnuK4YZJBEcY6vemp3kEZWM99uq2XQhDNSvPVQz4TTB",
  "key30": "DsepbFTVn971vawpyzvBPNgJJg1ZaSUkH9YXwUWbLZPcriiJ688K2rDZsNEx2EDpFE4SjEPoQSXsm15z85aDvS3",
  "key31": "3YZun8qNFcizKhcXe7JX9M7gZ2oCdHnByXxX7smgP5kPJgPkQrAAadbWS9xpiyt2t2oVMQeDfPR1DhKmgn5tEwRE",
  "key32": "euNvrBT3s4uMGcDQMk2UYrHgnUAQzt4q2vu5kKStsN1X4zDciWFQEvzeLJSPHCtFbV52XDGze7rfsrejp3A4NUf",
  "key33": "2vbELBS1YxvJ2QSmeg9k1BcwKLgke2hXWXT1c9zhByLhYVFfVrcoh5Tx7uxWcXEz5hXbGriZUvAyRNFP91mUtPaF",
  "key34": "vH8b8kzAienxBy61R7uJpWFct9yUG9QRdhitv1oVEu8Ytc8vWFAVDQUZACwvcyYrA6hiJvY1T8ADLxdtLBCWnYH",
  "key35": "zESCp8v8wdhAGV4z7VgdHgVgmZfmecFYYniKqZxHuA9yowiZGsB5eZZPiyPkgZTkHZrbqQBJ3tDHWMBv1YVHusL",
  "key36": "2PQCPu1257YbCx18FeGAtc5xdmauC1SvHFWvZ77tcm8PwC3VsPVdZLrfgnEsWDLAumSkcrqTWQ8ApyLouAeoyby1",
  "key37": "2qR7fEQixrNr4WXPcLFjFsRrftofUAjCFydSVnT48QW1jiqdhkhLkEBYqEeYvgrHbvrEnQe1FWjdDZhuUBo5QDVA",
  "key38": "52CBsRWvtWwyWCgrD4zVV4RJwUhncfxr8JqDoWKi6AZ8EVFpEKtnnGQA1TGuFeLT5FPBvCqGtjPWf1isrNYXTX7R",
  "key39": "SEnVdZr84AtgScgDwQNaksz7ioA5hnt6fi45KJqQhTyKRjEmgbR455dTT6umBrAFX92P8LSPWhgZ6us8tDxJRB7",
  "key40": "DKxurog5zXdwBns5XYHrg7jH66t9Y9oj8HgFdw8ynuq9T6uopPwKihmVa6vVcugVfpP9uGNTUFNvNmNg9caf7rs"
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
