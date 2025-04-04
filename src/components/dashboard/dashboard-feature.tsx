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
    "VT5nrrpA4vc25iuo4tJ3HkejDnqgdTn3wYD1cQhjoBps81tgZfSa5DoYvzRC8wHtDkfQLAnhXVWVk5oUHWxCrmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVE2VZ8WbceSG6XyRaZzNpGzhzkvXVC3khL5RT2vUfaAVUSpxjWDMR3Y2NKRuGJvq6gC2mfi6AQXf1tRDkh3Tyy",
  "key1": "5abW5EUJ9mdnrA25qyGAYCtPYKwYcA27Jxs5jyE748UuR4ce9hf7tFps6RnpfZNk69j67QVN92fNrQ3FmMPMwGgq",
  "key2": "4qkRzunEABxFxukEqhEnZtQ4tAqsMeeLoY4Awzmtnh1eDAdentdbrhhp4f84yhcZAYyWZQt8W67vFutDXhKKuxCL",
  "key3": "5zNVB2DDB5oR3HnpJkmoBYD91UGDPdZBXhUz3vxXhcYQ8ace6CikiovneF5DcSCPLMTLL1yWNoWweX3Ey3YzLvPj",
  "key4": "5PcuMgv3Fj7keo7efdEGPaQ4zhozNDHdx5MAhe36sR8nBV3UwwUnqjUP5ZCQhjTrBVuygSjqw1sDiyYRR5WdyHEK",
  "key5": "2mt8xH1LSXvLBpH8P38BuRAVNSZ5ZENYs2EqEB8TStCQ1MFr2BhbkbTRzNpC3m2fxZGdPiKdp7wPzScBzfXtSvd8",
  "key6": "4qVT3GR2vZ34r9da1YvSDcQ1FGJ59kqY5An1nYEb2Mv3rbpQqHExwXKx4WZLG9LvpuMzT8CgsbV7hXaNWauodS7s",
  "key7": "48ACfTFQb3sMRS24D6sJQBHADh9AdiCN2Tcsowk5ynxFacBEC2oUHXcBotmwuW1RRctMGcmw7Pg95tYjdGC8rF3j",
  "key8": "2r66ygBVK77frYavB8gcUYGax7MxacKy73bYf58Wc2YBMAj3yyeP43PEKPsPuZVqbw2FpRdfT4EpFNZwi4jUzXyc",
  "key9": "4QBbKtqSjuARUyybss68NLTtJXarkKao7ndUEa4W3EQTchUbqrt6t5DzXZBGbHkan4XkXiBs1p4VM46gT6ksxj6N",
  "key10": "2bmZbZDC1hAZcNU2m8TfzSNR3bvGZxPBQGKmuQLFFnP6Vt2LQMS7AcAQWGmPBicbH1i3RQwrWVh4wQi3xpMHUkuR",
  "key11": "5UjAarX3HYAZR3zvh7xyAq4nGFEWtmCGEheFPfwsmrz8e11yR1qPED6ezrAhsuBv3ReKz3eVC7fBmo5jwWQr5ctX",
  "key12": "SFuPE9gCmuaas65VApu6K5hv5cXaoYc2uDcWQKwZbgoZ5X7jaRivqjpF1coPjwXhae66iSsEJSQvAyBhmC4ACYY",
  "key13": "5mrRHqa6mwe8iRZF7tpxGs9mTck194yhnPRkpbbibuZawsLaUwzcWmyuQSTTmCceSqddScmDnY8KUzfo84XPutiq",
  "key14": "4FcsTtvxGd5BH6n3gZaJUHPLJKB347x8SNKboikJi6xVBsjn3HKscugLWuqwS7bujcYqogFkcGSEcLqX1whCD5kV",
  "key15": "2pqqmvv6EmJT1t3RT9jT3fkmEbF9GPiKsd84cSdVP4LyBew3dPLua54DvZ4fiEFzvMAhgUJrYoxo513XBEhWcCFs",
  "key16": "3DRFEMoexJtE2FjzoQYYWCvAV99GF6A46ongt43cZX9awBSg15uMzMq1foAMvA3TBoSC9EgQURn3EtKiJG1trgKK",
  "key17": "5HFeqrJywFuhC8Wtpo58WF8Qb8YDvLTkmuNdfy5bbv5NQxS6ftZdnUko7AS1M4CUUE6VSQ5UP3SzmeXjHp9XTKPY",
  "key18": "57BsJoYSx6sHJa13hC2CE95ggcV8xA6hgYttXDspbQ2X8uDbNoae7Ms7Qg1evEwqjdamZtNx28qt5smWXM6Fgm5A",
  "key19": "ZBZBjW7FinmfFkhH3TRCATZzX1iRSJdG4uXwEgJ8eP7jvKX3xJfCQHPyeJ8qRt5buWzRaPSf22yfQbL28agzXW9",
  "key20": "3dwByDAtBbk3toGcGth8Rb1puFUH3BChQ2nP5Y8yoGgh5afbKcMGLoTmfz7wDqBpVZzxfpELVCuMMHHAVtWpawfX",
  "key21": "fATEoGBySkAuJbqCGn2AhgZrihHeCQWdEibW5zMPrsdBNRNUML4UnEKGUA4bE3HzJNyw5qF6eDU113n4ChnA8HV",
  "key22": "5tCtnGVR3injTydeTVf8bveFra5BrP2Gqg83SijoHCMuESRiBkG22vftNkJk6k6TBHHr45BibNLHDzcyXCBWrJro",
  "key23": "xADYhz74ZWBvqLL7Z8j3qpK12z4FixfbL568pLHRmVdJhSggzvF9ySeHbmjKxygPApedD8UeK5z2L4ShoszZo2P",
  "key24": "4kxexfFqjShdQGgNJvPCjeKKqtiPrUbWSg37HmNd5DQtRyaS5gZtviv9kxRqYgz6k3kJT137itPZuLRwUC88xx3k",
  "key25": "fg2tk43KuDbW8Cq2gfwsmagJ4vDXGnZeQL6fF1j5jHveSoYRGSqfsMGm3MQLWsjHrt44SQ7dA9juwUSBPucYx8V",
  "key26": "5o32UcXQ8B4XgDRmy5XcJNGvMaoYgdnkJ9NkQjVkGeAfJp8MeUsb6KJFegY949w3Qas9rtvFt4LBGsMffNdUdzqc",
  "key27": "4K1NiqinNySh4SkLZd1x52wN15ZrHngCpVtj136HPC1oJpiCBPcqh2ubMUaw2AVgh3pq3rWDFZCg6FegaNTBUUoy",
  "key28": "5PdzzKAFFJXKkgqmqn54rqDn2A5mPWeWk9HXWoFZY9a6yUc7zrX4C799WAg9yNKtQiE5mEJqmprPoLx3h623KjVq",
  "key29": "C6LDPaX1GyabyADGMYNWHaAXBUdGozj5EmMpNWP3wrDG5pH7Vq7DU3DWkxdXwnv9BhijXWEUxF9B3X1BtKRmGj6",
  "key30": "4n2BfPGJswrKS4opeGST9Tcrt5v5GuVR6seBgico8Vpzd37kQnr6dMjJwEWV5rCSrzd2WStGWui4gXoQ8NHXakRw",
  "key31": "4cGtf1H1N3K8veRyufw5voqsHCj3246uTXomf4JLw14wag8NQLWeXds5VczFfPmUyKcoP3MNruhpZyKT2ewPGLFY",
  "key32": "5jdLGuq4gBdryqbSxH4nw2FA9Y2HTRHVDhUxHEGrVuDnEXP4QFzkMWvDgk5uUMuZGBLgQBAW5GvGjrRg1YnghAgD",
  "key33": "2CDVhhnWTUQ3wwqDJzVc7rQTyNC1stwCwp7Yd3GvhnaA5j2JAKfnGYWMimLcV2E64i2FXzGddDf6Tuje4ze2cBsZ",
  "key34": "5URsHv5wL2tFzN5rw32Yn98sZD64qanudQfZvVHA4rHNGerhGjK2JGJCSFf1qZuHpcwt1fyzQxy1VsP7akPVZ711",
  "key35": "dq64fudqTKSXToKQkFaYMUrK6zbrFkXxKeJmynKQRtjKR9Lk2p77Y8BzpS2rSVuF8JzPeFGC4Da7LZwNMF9AFsT",
  "key36": "42kX2CLZfQ9XrAftToV6Cytf7hmnxn5z5QoA215gTxY7ZyrwiDvNSTFGZonTp7xQFe1CmKxAsLTaKD9FLnWCcjyH"
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
