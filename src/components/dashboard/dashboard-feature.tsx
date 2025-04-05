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
    "5eGiEUqE9KzHodisBiPa4AsrWLYwRfia5ieqqq67ubGFNKGMFZ5Sn4uiLtMDAbqgfX99Jpm4GHo48SaawpCHcLU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mch4kNRwTxbrzgYXeWAVQCjYUiH5Bcga4m3WdLdAMQqdT9SRMZT1frwPFJkbRcjeNi23vaYqUaWGJsae9GhdB9",
  "key1": "3dkgzNqtTxTh7U6BfEcbL9gax52tGEKFEzDSNgeJQLLTCBY3Qyjj5E7fKAjWrAuJJXkhAAwQaCDRumoKjwE9SZaz",
  "key2": "4dbRJtrogzC4zmTGTSMWmBqwED1AQ45JQCBe4KAwT3BbgHDoh7pzDcUk5g2LeqG6VPemmdfbFVedKNfbPvsfysUp",
  "key3": "5HAxTuhCDjDBTKBGKjKgiVwD3XhSLnadf5EuzJLq4A1zuoGTEk11XxuqtE4iDiHjbJKLYVEny4YynrhsWQiPtzLd",
  "key4": "mMaGefUA5auJmKeZv2egyRzPDT423jgFudCy1fAzxqM7rzf8cQTGA2GDuM2bruHgejvktzK3GRRQyWnTeyAnFQK",
  "key5": "WX49BoR21gKTzArpohPaypVhszuXuHsZDeYFCgHzyGgsrvdmgkxknvcVGZLGX5ebZ7YzpjdBBUTeAgrJf6Nio6n",
  "key6": "4AStnAjBzP14k7RUN4jbEaQ25HCx9y4otwJibTXreqyVt3LdEu7topqiE9tedW5an6qkYUxUs2AtqSQ4AbSGExp2",
  "key7": "56JRrW5BP6nk1sLz5C5kHePLAGZMEWu2en72o7YZrNgNmNb9a5UkxZFLpwD8TCytr6taXbVCiQ7BLghDDhpsS1xQ",
  "key8": "4RJH3Q1aLfLgKPMoeCdwhCiKd6VvYq6VpwfJSCez4weUVZqGSLD73W7QMi7NPJWbxhsVVVrwhe2e2Z4w9tmY9RMU",
  "key9": "2WMQGixRCDrqBi28tGJkshbqUtqaqFy2D1r7mTEsthK2Tug8wuH8tpw1kaN2LRS1LdUinEiBtJnu2AX9FUevJWvu",
  "key10": "3XeN6bZNmving5nKAqAP9NVqVmuj5GigACJSd1wajv3iXaVB9GGTAJauTP71ZFGiZDionBeGN88NkbcEittCKR9d",
  "key11": "4z4aTcc4Ev8RmDEoMLXSv4Nx6Bi9M2eeu49sDv5XR116Fn99fWNvwPvBV3bdfPSXSVThi4iv9yEL9aiegmZbNKFM",
  "key12": "4Ey8zjWRfgUCPkgvMc39uvMUKskvvEn9tLe2A1rfHE8zEy4hBNHY1yQCuMurzDWXVnCBVS4EfeVdqN4uBxjTdpdw",
  "key13": "4cHUzr9L2vWabkjSmgfZojqHJeGBd89Y2bvjRMcxvAuasX1Qhru7pUPWv8SPqKGyqAykvubkJeKiosJ7vhdLXysD",
  "key14": "3npNJuBt7hDapyL2gSs6S8punGJH1XpGMYUGrF6gRfnKLuoAbme1QGGskwHB3gSu9YwMi31vo7tH6pqpUHh9JMTe",
  "key15": "3XPeYXZN93vn1od87nrwEF7X8sE3mEaaXS49ybJN4dycDPx4NkiDehxTas1ubWHjPf589sVJbhDLquSM1YiUV4Tv",
  "key16": "PCERQNBLr9gk5zBS6vMYDqKEAcmcSoR7RQJWw1NrEXRzjQuTFPWFMvvKMTiMcmxqX342q8oJbFgW4Uve2EzJ8aF",
  "key17": "5JX2GyW23PLPyUWFs5muDwHnEqq4MDVLebLbnMkdcLe5jfFofYoUWvRMibH3cgZg9TtvhVkjh6KAJkW66G5A2d1u",
  "key18": "2aZ2mnfNMUjSubG7nKeQqEYHY2GzLkuDGPPYLCqZdoNRFWu3faPFCLcKP6DkS5Mnck5FpF5X6XdDWxCNbnYfVLpe",
  "key19": "2cdQbjoXmWvm1p1TugZi4bicc7QwtsRbQd6c7bHKBTHkqYgPFWqd1FjV9R2NtFPCZ71dR7843MrtvfZfKETyahnr",
  "key20": "5Nf4Jjg3h8NenXKS1TtiPSfH5rnFQuv2h649oTCokUWd4m38NTERDsFrcmuqAzVwJoNYYuYpe17keyvJsyiEmUef",
  "key21": "65x9Xv7Hrtuxvrz3qTqYkqPu8qzstPb4LRp4nrYYCdm6dd4s3N84KG7nk1jEffQSe8ppNLtNLKrf7QG9HiLjCkNV",
  "key22": "1dgtyjpFPn4TuAcX8wqySbBSUgFDUmqm9tNAeiBoARMF2yCixdBsmSDmDbNnAHF6mAGLPPxmjNpAPgew98Kkafs",
  "key23": "54Bk7yzY976Ro2ezuB926J9CzG2nhno3wDsLqs9WeYKK5u56uwSeqotGmgVX6Tm4GcodFk2vMuRVZg1k2cW5t2dR",
  "key24": "5Uwauj4eebXYv86LtDmoCrVgPDCAMYCi6Em362TGT6txqxtLWs6iqHeqR1eZVk3o2ZMUZEA68bdkyunPrLEQ5Hoh",
  "key25": "44PwKceuw3CA58SwUUtchTpReKrThbDQ5WsRGcNDhEfQdH7aZudX1BKAshGABKzHHiDg88AY5QpJXbv2JH5b53x7",
  "key26": "2sGW3QUruL8SeqTWnqpoZZnBG6R9krEB7JWERGon9NFWEwcGJ48DvsKu7gYsQckNqzLxFyDezjHeJhb1G2wXL894",
  "key27": "dsy5EG6WpgrC8nHxPuZFU64K3n5mzwAFAbPBFvwGystYecpXfwfacQ2kwTFBUpMxbZP898zDKJuQFPn7jbjgFhU",
  "key28": "4ffozjDmCsVMV3WpoAzfS8DTSDaUQJDPNRScnhVSiizbijWPTxjhkvQYQKTyt62iNPVh6ezfu9KUE2v5TndkEfmy",
  "key29": "FB6Ln5uoigdXMzDCVLsq9tFus9GXWgwzR4Ksc9eoq5EfA5Sx3a2PrZjFX77UWnDu8uHzU9wHEiFL9VqKYK1RmCH",
  "key30": "5bDea34HjEesZ3rVheZ5nn6omtPLCGEbFdP6dUnr6cAjMZNJD55L74AZph39KDZtG4zm39Xd5MEzvhqTedLtG6GF",
  "key31": "4D7Ss5kEbjDTSKPRcKJ4EiXnA4BHxjHL7UnA1Ri8eFuQAw3BgKtSfEoLV5hE38ukXunk2qKK29WeEYra8nZPMFUM",
  "key32": "Nr6zrjDxrLZQhzjJgRaEvJPAqvQRr6ZRCWF7fAqkafCrFB5XpGf9syQK4EiJqTACLkgHEZ9LVrjcRBHVe1tAC52",
  "key33": "2LGAns1LkujosQx8VGqbgP2AArgjoD5iikkUhAbbSvmv78bAVZVz3BzS5dnpkipXABqiCNz8rJ2vBpQomB7kQScX",
  "key34": "4DxamgXVFrUNZaJW8WL9SqX6M7o3H2aBAeRkf4Nk22bqAgQUBpsZ8f7vEdikBj9RS759b5BucKLztA3qmt1p1EhA",
  "key35": "4hm2m1kzfwhVBS5SP2whLbn3P6jSDfgssWk5ZCLaFm5N4ekpQfKhj62WBC2maa9SaxRe87qsXLjCHTGdp8Mi6z15",
  "key36": "5hahUkdV9jcJ97dAd1i5aKRPUz2gePXXeTQ7sKPdehX1da8JDKNKupN8B7oCRBjsDQPeuCXKpWnuB7stAc1byq9T",
  "key37": "4mZGpEQ5vezx2Bz6YUus4DTnj5hCN3H2Lqq8speCvy4ydHnTpab6vdA3TXvE3gnbc8kRfJkpUUnUNeQy7hMhrDin",
  "key38": "4TPsAQECP3fq5MkPNmUTXvH96F462vGweNcasNyPaDZogGB7rszc6UJNtmMvaUQuKHVB3sxQrtxamvJ2ueYfAjde"
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
