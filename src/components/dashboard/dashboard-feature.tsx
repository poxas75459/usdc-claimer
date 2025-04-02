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
    "2v2BLrxDdUqDtG1mYDT2cftutgP1sVYS6DEaMSeXtyK5KYu1WANM4GKjUm7L94sGTNGycSPXKCSJfMcke3XGNNNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LoQ6NZWbxGEHKwHPTtg8Ng86s3dwyLqg9cpStJ4yBDhmciSJucYQLV1CjHCouKacux51x31eiqUKjadgjrueZ7",
  "key1": "jA9bBpM4Vfq8xAk3hKHHwHapPRbEL5bmbMba41iYCwhzQAfQwyWTJKaVwmDdrKQm5pb6mMvEEzHbn5RbWVAqHG9",
  "key2": "3cqsHBaAEJQMZb31MZgwyiK8sfva8ZWMPp5rkQphGDBVEbmGAyom4EzvZ8HMaFYFGASZdd2wzpFNLrGxCRZby3LM",
  "key3": "ph5yHb4gxQD9ATqhxKQgkX1wFssvHt3PFjJAEyHfdsWshUKNoKDyDJLPLN8Ccbtb1AM73KuHVoDh2q3w9UvymwQ",
  "key4": "5yQktZzkEjnSRDxHioJbXSZ98nu4GzLahBbfAtzD3eBwHvoUWFDc8VrX557hqsWEXLsRFzGk6gFP1JgNG91zjZ9a",
  "key5": "4Zz6fbMYaEbYV1xX7bA5bwKhspkqYETeRiiP1Ypg4sA37ZLhJ8FNU7jXQHcSSMqBZ5dmEVQtvu5CrvoDdJYcFRo1",
  "key6": "441bCdqiGM3dy4N7oe2i41TNzq8z6H9YnDT9C2pDtx3DVEk5cEz7PRsAtqJE53fzWvPK5WwErSexzhuvLXbvz6Co",
  "key7": "3nkAu2sTQPpDkhdRkCvVSXQeNtFvCqCDH3WamGdvaijpw6dCFNDJtfQ9Y3X6c1r279NXiwTqZCztW2CZ5bNM8hGA",
  "key8": "4Q4ZGfjbZRHGQPEYqq5p1PmdMx4EBKEfex9jJvpG9LwNSWmXFXNBRypK7UVhV9DR16ecsQenFwYFEdt6B3qLq7pF",
  "key9": "4av2Hghui6pme4sxEwxT6GdBmQNAKBca2VRnQxWdkysmBtG76tKtToniZhoGy3xxMcY2gkzGMfnEKQGPKJQ5gFU8",
  "key10": "FS7DYcY9RxwbcahAd3YhyjteGBq1bgQrLwEacrmTHcuR7d6WhnXf9pjp69Sa5GZWmjPeKowJYWdedpmpraWd1PE",
  "key11": "3pVhe1B7SyGsUVygmCHfSV1GbuWX7RgZYUR7H6LJ8D7KadyVzarRJ74PpJ1aMhjq5UHQH58rKj2a8KqRvnadQfVj",
  "key12": "3TDvVAD1KWNiKRdnYEkAfXzmmM1xZPcjMDZGQ71vhiKqmLCLkaoe2944QfTCx7EGPnKys1RgPF93FAbjGRyVme8z",
  "key13": "5kxTgADr3QNG9dEgnNr9dzrsUKT81NLvvUbXqx5eHaYUKJtbAodsfsjdyy1nZZyTMgQG4AezUoub1E8GEfoy9rhx",
  "key14": "3fPsyxDhQEuw9fkeesWdZqsNXvQdCqCZVH69QLJX1xXBto8addnNBUtmrvv9k4tQ5m2wQQnSsD1nrGDzpXKAFCRR",
  "key15": "4aKMKB8tVASwCzmuhHEGVzHchqCdJCgDQK4a1F3ewDLiFSSiF1jbz6ui4HmtHAgN4YiBehfvUhnSCaLSzJKyoskn",
  "key16": "2qEVvy7LXB83pTWYwWkE82XeRHgErSaGQME9jmxiZvpxY4g1rCTFwniWuJXf6FKAiUpchpD2QDUyXiraKPRt9JE3",
  "key17": "4s5BFdPktqpUQa5vbpQBaFN4KZjncyfnyercYw3n2St5rSaNwD2VAA7hzg2Y5YMDL7NsGeJJqMBqfogR9ASpshBA",
  "key18": "45N2BiFfgKk8XEuKohtjKQw9TxtqEMZdezqm9mNVsV54sgZxcfvTaKXYCpEbUbwCMM9m91t4CWAXiNBMPoy1tz6N",
  "key19": "4gpZTtaSbmteb84LuCyXFkNWrbhyYz2XVUF4fjRnpEucJfL3y2spV97WFP5W4gxrFsq3DkhDZKcj78yjN1dNoFtN",
  "key20": "JXSUK8XRg8crhU28EYVtwnQs6Km6XzhXzUXrMkgxXPbvKXTY66w8fBiCqM2wKCbsNnk5uZWVFdMFT9jZQTQzM8d",
  "key21": "4LpVESnkDrikMnDbKoDNsPX5cPwGWLRyPzrWjQh3wY2hXSmcEQa4HHXfzUP8YBaZBqF7oL6yBHwFQmSyHdisEs9t",
  "key22": "4XyB2NghoQ5PFZXwg1rU2eRGwRPfkhKwSVMZE5LocUJ6umShfE1U2SP8M4mtvik4btNPpHkVW67AZ3ukWn7RC8Ad",
  "key23": "dUMQ2rDpdYCHKK55ju5xn9L21QdYCpyvrpwZN1peeEZvT8HEWcf2ivw5hcUTMa15GpiCx7BLd1piEuztvN5qA6M",
  "key24": "uuH3xgSxfytvQ5nEqbPh66f6GKhtaTVJfSwDBB4APvhUeYxTiKFXbFuajXn6RDBUUvd7X8kuV6yJKiyBv9p5aoq",
  "key25": "4SXj4S8wNfdLgmnRhXuMA2VrCHqb5ToawhZPZYCNrdtxUMxyrZ7rvcRtkF1Jvh2oz4Vhek3oQXAWZMLdTcHePZv6",
  "key26": "5JdortUDtu4YkfhkpzY7dKcVPo5y4xZqEE1WxMevvrcoMs7uq7nefPhUQy1iLomL9VettFFNAWvedksixrEsa89q",
  "key27": "4rTYrcwXHHvMV42p4GNS6ACVMfUCjoWujhEfzA1bJsdEwUKp67ySWtgfTJDtUKh1NRqUfNMnrEbuVNecWaxSqghD",
  "key28": "3dbfFaLve1AUuBoXsHxboymbsprPkBBYvYKAnJX114218QkXux7QBKUgE6XeVtMebuRWr55g5dFiBwY5aw58QGkf",
  "key29": "5Y95dGFMU1JUJ1KzRER8DGkscuCMcq1xmD9yPHFYWejPNhd2NrscgZNwmaaqoNnfDkfC4SUVKtTjJVXrWsPcT26h",
  "key30": "3PvyKmnoNEcn1STk7oaeBf4eZSQEFz7AM7xeXBqNXWRmTTYVZynHmRmZW4vyyDTitnDfSGqhFFYT1wT1XokUvmr3",
  "key31": "6rDU8QTtEvi4dhaHBvirhjGpqKnN4htzcZwwTCgY3H6P8dd9dyQjNFgffzbyVZHCMMLLtRxpuisYRFNtRZZdQki",
  "key32": "4F2YY76duN7PewxdoNHUcfamMMEHZxNeijy1BDrba9V7YSuBnVk3ro38fXsWTA1Ny7EbN2gZ2BDoN9dpggQTMNem",
  "key33": "4vAkoLgSVRzigMwbzGA1zWqzcKhU6R27bZ4e1iQvgVzSqzR8RxrodahxNHB29g4diP7XtSa4vd5MyUwYmC7X9qwr",
  "key34": "5bVmgebAMLVtxEYd8gb5pQCV78EgmbEZLf6yoTCvVkSDS4WrMhJKpM5CUFtMZHCaLXyjAAZ7fTWB9bXoax8gu18c",
  "key35": "34bGnJimJwqFdpL2iEUMAoSimqArDxPk8Dptk2GzeMGgwJF4j1SN7qsYCSJ2D7cjtvoxSnAPwgCt4ax6cH9XXeRF",
  "key36": "5haaGDBKqqfWjcyernRkCMQxp8BHRWwN78geyitFY48yS6eBtCtrNNf5YyQLwrXe3XsN4bWYHCpji672A2cHSLtF",
  "key37": "37BZgE3yGsKG5Wdt5TCjEXooM6aoUxHcD7FbFAodmMTyWiwfPX9mPV6kRNxmWRBRGvfeLVipuDxuFeNRTcz5VbrB",
  "key38": "3sEg6pcmzwgj5wgdNA42dHpbisjthgVhonzc3YGkNPTKLY2Qoxf9o3aoYAu4swxASZ5e3TjvWW2CDWxbqSR6drjf",
  "key39": "3ULWYbxyniPrp7caoUPcBLAsiLDsQLNdYBsy9PVVp3WP7jfPstnX5JkrSxXw4eUkQKjWqhbeKRADrTMECTUW4FKJ",
  "key40": "5o7ifhMKhDYW85wRhnxheeTydyNH4WYV34GDSc6fNPCZEtrgTrnthCFYQuKfXQehSe3VnAk9efdU4CArkqXfPyPy",
  "key41": "3TjpXFcpeVybUVqaXBqPL32ac8RiQ6wfVQM5McgPRLkuykPS8pNRRovCxW4h9XuJf6JmZRT461BEm332H1ur4mgf",
  "key42": "5BvM3FZu3yaUaNU4vQm9Qih2ugXzGduoQcrvkVtojAx6poU8cQmpT7rHntAB44WhWCm33RkiRnNSSbG8FqJcSYS1",
  "key43": "4yRmLXuN53LGSXzBruywJvVwhTrZANxCfbZuHBPnmZnmqShQ347gJX3jrHbF2PCwhr3Sr2H9uRJB9YS2dJ3SP8rs",
  "key44": "5RQR55WM3uNJtMJ6s6sPqJSkBxAjwH1ypur5eXgWKbQJ9MYUnoM2QkmZsEDsd4YNf8eGP3o6g6psL5TUL1NR2dzy",
  "key45": "JZ2HHWnyhvxEMcW9mHu95qqAn8DkrigDnQnhpwhbv3993VGpXrCvxKYfPpaHfhuL4nj4huvCNY1hvW5HHeJvQMH",
  "key46": "5zP4RhoCg5z45TTtCMnhEHHNcGmiQAK3XSURoa63SAvKNAw2yr1mXEtqhLgnsDkvJoM3ApmNL3CquypwdTw55YKo",
  "key47": "5GvMG5kEBVvKBSX1ZDvipM3XTF4xv43kgzsTYREdyWJLCLu6XdrrhW1b2weSDPWe2EQ9UwmZ8rt6UMsd5MaDZgND",
  "key48": "4iyQdFv89hVPFhFwrETVkQVg6f6TmJT8M7KfQZESXRsYikkSQeyZM5uMEUGKWiFS6iGvPx5B4DyeQPhbgc9QCsHT"
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
