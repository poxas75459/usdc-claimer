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
    "1bkLECDn9v4N2NqYEZYqFQsjUF4sTT9dSp1FXGTh9iNBkH7MMnyzTNnyKwmy49ZDvaRZUMkGyxGYwULUEy4VyzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58pHwvuzFVws4HXFGWk7KRMwJmsfFYJck3SkGGKcWCZZxVR6QXQzEJy2vc7TCRQLS1k4gVf4896EZQJ2fLWtK5E9",
  "key1": "3hVFNGrto2mYfkvVL3cDsFMWTjN7skoctBax55Y4fAKxozxMqBE3VdkotcubVoND8vZ1LGEcwWmpt3vKvy3nnJ1H",
  "key2": "48KkzwHJ3mkN4YfXoEZGdsbsoKSdXLdbwfjpQ5R5TCPqqPTg1Bxi18kX22GKXKTbrQB95zUZXJMxwEXVFw4qdamN",
  "key3": "3mnBiyy64V7kRnQ9UY93ELmknkPn5ciAt7ULRRrGhzvgx9n87nPNmu6XGtTVL3uZEz8Qo45SjFW56KYwXd2FLs7S",
  "key4": "3hQaTcjZNF3PcRZqReGqSMxecu6vnaqfdo1R1SUYf2tNphsXjE1g2o4fpvSsxZ9gvK71pYyA61yvDcRZbvsYV46Q",
  "key5": "31X2NFjkyvzUzqFFcM7B84ytbUgkzX446iphhg3G9GDeF9da6kfoQsCQsZaZv5zMyLE3ioiiFe8hZRoXugR88ci6",
  "key6": "2vBprp7qtKfX59J4Ba9i35bV7gCvJ2KjrsGzqr1kmU82z92EGwxrFbwQk19BQheitgCvBLo593fLoLjRqypwGJE3",
  "key7": "2ZXfQ1s5ubRBptS9NNTvmUACWJdNc1wRrfSYm8zsFkQcLy9wfit1sR1xo86dhJmqst6V3kGeVi22semPte66xJ39",
  "key8": "3oUp6UZHSBEhgqSmtL5URfwiFQ5UBCxM9hcEAA7DvWaV2SeFKpuFcfNLNZBJwqsnnQoqyihwTBZbWUdqvKtk5Wuh",
  "key9": "cnbFV4eXkBu7FUMwwpcJwZkU5dpUQkipC4NHnvKUoLnRUaXapMu9P87bu8mNkYcnC5eSXoWuprssSN2hthfMkBU",
  "key10": "62vFQ2m7ji2Zfov42xk3kVKJ4Cg9RFZqZWLRZYp5MnHwXxtSrfCSiTcF4mhTcAnhRd6Su7C4A1qpmeEsGijTGvY9",
  "key11": "42dqyh5EcHGgVAWpnmPrM7wVaQVzYC2UZmPZHJsLJEGNVMsQ1KngsNm6uNfxonWfgyxw2R7LFym5Denh69UFR92b",
  "key12": "3pUuJMfXP5YwHcgj5WGSYwM2yotUsHbHgKCdqf5Y4WFGosEQ34Qty5R7SAfr8rJt5BKc8qFL2EKsi8nw7ns1JjtP",
  "key13": "2AHn8FJW4di3asoKnswxRVy7iUkGbPXsPMt2L2j7fXVvegtPbcHjxFNW7h5rQ93bvd4tDPxmjhjEybjwbi2cBJ8j",
  "key14": "3npb9j96wyuph3JjN62SuY9f2cDAy5TZvNeziE5EMF6DRo1FAVRBv81YrAdPcdaPHwoTwoFGzduBnfJaf5Znybjx",
  "key15": "4EhEmwzfmX8pT4ESaqob3QaoL44AwDaTbTMXVffctzjvAeB4PttUpRMtoJLcqJGRKcdjC8fCYrvTzJpqgZCGH6Ly",
  "key16": "45TYqdCkDPQwHEARZq23u3m9fCkx9n3t1zgdCGMDcksGoZsifoanyWGCaM434YSCLA3qJ3K8MxXudRcX392bAgaN",
  "key17": "51UvW2cbNbernyVp24RPtPUy9ytbSSJcW9ue49BKdgpMw92TWcxSPrTuNu3GRm4Ah79pEVyfYnFMAPhU17er49BL",
  "key18": "4E386MmFmAd1UXeSCChbhRC8q8N5gE2EzdZ6orLW2FePWTVQC8erszMzUE1DTcGRj3XbJj5LYnzTH4NVb1HsivtY",
  "key19": "hcc8WFr31PASL8oB31kewHSafqBgdtq8wYHpFB5buWZYQmg5pVCLNfcJFEHLNiykef3w9oHB8U2StFFyAKSvuKW",
  "key20": "3XFniGiP4Yk8KyNLsfLyUXxTqm3dziNzchzcs792CrypDADELXnHrxQN3tWRJ4Wwo6dAMP6yqHrRJ1vqGCWF2CcE",
  "key21": "4qA8Lf3s4R3rLECMDH4bd6BLU3KFYziTXcm99BtM1F1CiikJV61U6Aqwq21UhkWgf27BxfXc3Bsgk9zppQjefpL",
  "key22": "2ggmYG7XcW35vF2tvTifEfNiMmzpeZ5g5s4wn3ZEQEqK6SdLoXsPLBDWbgLWeTWUDkhGonRokzDMtReU1yvHS7cS",
  "key23": "451oDTXemLeuFSYL8Rdcy2H5Hv94YdEx7jW4bW9jXqxRKiAVGe4tvmLTAM6d8to1od4mFdgjr6dGWQguHhhfN6jf",
  "key24": "3f1c6y7qB9qNSGsYV39ZohpW9oDqFAYaNzKcy1TYCsR5Tc3k2TeQMPGK2NX3BEUSAqARSpKeRmtoX8G3VJNz9WKm",
  "key25": "5swsLK67FohTS21VvHdEQduoZotSsfGme45X7McHwkGVtQNBsoqBen3ufVg5xS59r13nF1APJ2ksoLEokERT86wg",
  "key26": "w3vKU4mt5zwpEbGFGZjJoDQcGovU3Yo6H8UVSbWWFxn4QfV8UoCkDFDEGWL86cebrfFwW8CUPyKAy4vQKdHL5SE",
  "key27": "3x3SMJy4P95aeoa9Hng6JPkSUS6JMsnEJ9mgK62JaBrnb3361AkJC6HswHue98zYrWYcdYWqfzjjRh36mH7uEr8p",
  "key28": "gtXry5gKZuaLkdYRPi71MRhscNfb6jmYLv8RKMKXB7DjLo9fxiWmHBNVSpziinoT6iHaVMHqFyfWyhrB3HFRUFH",
  "key29": "5U4bDDQMXhWDLhuQRVvSuVmzXk1hxQcKXxFfZo2JVvc6G6Po7xe88D1iqH9LFdUeHrzFoLpFA6egFGTraiXhocoR",
  "key30": "5k7SknwNfxtHPmFgK4hjFnCfbMj4CKa4QSgUEocm5cjZTp1VK27fmVXbRDkEeSCoR92j9MCBTaQiw4N5jVRMoXzc",
  "key31": "4YoBpDafDq9URjE39akG7Est4acRjhn2QWzoXkCiYbou4zRUS8jJe2tsWmZkLeDxB28eKLvbPDBy9DAHqrxqQ35c",
  "key32": "5EPmj9bh3tkveXNPHvFZmqfViBrgyGGw7ofEMAKmuacH9qaZ6GMrHfCvCSeY1sVHmHT8NyJgd7p8nXSXXgJdZorz",
  "key33": "3u5bdDoEvqBYQ8fd6FFffCmPfw5uzK5XFFsEdgAqVFc9tm5UQLXUSPbboXmxGQJnBhi3GNj8jDdvfGgsRKP9km9D",
  "key34": "3LDbJ8xjdma9DpqZTYoAGgPTzrotgmjyq5f4XRknHSe1saSiSU8jrRwv6uCQJgqPMBvqC5PvMCVyq3NEbpaKPspZ",
  "key35": "nA3sEDLwkL9o61T9b5BkjEXsiDk4ZKzEbfMBSAqDDLRZpST2bHQp4wk3WUbpem1F9KoFkiMzLNLsCSGPtGC11xA",
  "key36": "2mmswLYgJy7CJtezEojAiHMDEAJ6HZEujU6WKVci45UxjUJyHc2fdPrK7VvUTVCtLf2XapinudddRAhfs5Bs4wpZ",
  "key37": "4bhqzUqnorNDe1daWqLhPw27CXdMiEgw96q77uLCDVLPaf16WJyu3r6qrTsUcmrZkKdtCCis3zSNAA78BnUnwDmk",
  "key38": "2X2GGVdh9BQCa8LBWvy7sL44GTvAU3xiYBkPpvpQRPYdpr4Zm5RkcnnUPALEVqavwCep9QDG6txpEj7Zr7v2GfBx",
  "key39": "MeBmtPcsicPKroQWGfbwMZMeypZ9RTBRM97ZbJFUdMrfy3sWisVpXBHpaMKpvdmeNyVru6U1ipdDCfpHPQgpYUA",
  "key40": "HyYfuXjxbU3UF6BvQAp5RjmFayCTJjci1KRs3hkaTrGV4eCtB2FkwXdBWuSsBySAnUs81PLqTZ8PCeTahuvprRX",
  "key41": "2Mq5He5PmUfyfBWMiJypb68xmC3jQcYga2Tjm32Kfj8jMtQTWWUZXKymVQzA4717QhByek5b26nt3BmEH3xnN8Yq",
  "key42": "4wM5JxMdaKuxw5Z21nUpVCQ8zke7mUEFrjwwqdqp59U9kUFPsGVTZ8UrqhdLsMFQrqHiwSgUU6wSSPsNSRFFiYCG",
  "key43": "2KDnZZoyQRhUfRWSXCLfWAkei4zTR4eYxMNJXPNLeJucGfyobnxTVFEpVtjqBYj7bkjEXTBW6718XFhGQAQqx1AK"
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
