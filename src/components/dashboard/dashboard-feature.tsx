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
    "2LJtTWMDt73vELDkLaHTWea6GUdpFccmrJbFPD1eddjk7a1pj6w1Je687ehgtAcWMDktMbxa1G6p65tn8fpsJoB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qa2BuBsqCkSWZ9SErAShDKNf8jaqmajTsXy6sSCeJ3NTN8LyUTRaErLSMQRqLRTFAiHwVPFBp5QDgruBkayZqPD",
  "key1": "5MmniUZt8ynWubxTfQmeV9fjvCWRPvRrtSjmqBHXa9fnT1TgQ5MewidUZuu7PbKNHa72GkV2dQGEsfatt6TP3VVv",
  "key2": "3fCJXwNTjb1YCXMwscPNYF3n1UwgoMTTdh9hBwj2apxTHxCETLYSMkbtCAFxKyjMQXu7RgFJc918XtswfJdFf8zk",
  "key3": "4VA3XqJMQpniBf7pV7DPHFRr3Epd798qdBbF4FXtdzDPvYmZLhMLcTW58TD7jKJUFHs3AvuLbB5B6rHazLscAuk",
  "key4": "63HbcCKPUiGCP158GdexVBRRVeSGV3rCd6a46ULM42qmcmuSQMPdHyiwB4Xb5jVmo5H7eqbvcKbKfbgqsSo99RH7",
  "key5": "39jfuA6cM7LAdqF1iMFnAhCukbpksxbXd7vRcoAP9u6CGsLxDKvawPkyPnYeWcGdAJVXUARztaE5yhs77dKCmcAA",
  "key6": "2P9NP7XdDVeFYBsdNWFhWHkJXkC2DinFSoRWVKmh5FdfKUwqm4yXveSYSg9JmpQdYjd7Vaf9mDcJ9cbTtSttMBEP",
  "key7": "2AGwbdykkVrQyrRQaVUZMrdZRK2nKKiG8MnpSELdtf7ysw8hfzbJm5Joe5PDvfJ2m3i7mdaMrWwP6E5YZCJVkBWj",
  "key8": "2YGXXLM6enW5nnuJ6qVJnyYAWpFrP98SybQnMhZHrskoZieDYeat7NfENEtMsmFBv5A2nPyTyc9ZqHoDH61PfuMN",
  "key9": "4G8HQnhAwZw4ocmgsc4XL9gQ9z3b22GNGtouk1yCuwpDFugA4y2HVmvYaGQyH1CudPWKraTmYWfMn6PaddQKMJrP",
  "key10": "3i1kHmy4ngDnXRdtG5igAZEaHZZewpXmLhMrL9gKmHTdR4bVUba31ZjFu8Y66u7ZSUUeNAPjeDHtg4fFE4kv4Cyv",
  "key11": "4tCo2cWUTJJNKg1uCY69ZAUAjNjzLq3FvkRasJDE4WnyFrnzCqZJmR74mvRtgmUZJUrcyNW5KLZs4ofGE1WzTCUK",
  "key12": "2ScCeezFAf7mAQRyqGz9UYs1Fo7RgjBLuNxc3pXfha1nQfnhc7EqWvxWy9zWrmfzFpg5AbhpP4ziMJaDGjbztZzK",
  "key13": "4TwXUUJjYbvThPKoS1xz5JbaMK3JPhKu6KdzoE6nNxtrNtypfcpQmvDMZhzwTSreHFx2Pf8irSbRafXkrvfNSUXP",
  "key14": "4X35ujyPcVSH4Ba6KpwtwfShvLmGhcph8f4uGtihqxDBDSas1s2yWyRtuEDyodYB8TH9Nta9fHetxMFoEWJqRjE5",
  "key15": "37rR4APCdEeoFpJ4RK3xQy6qroSeaY3HiMgX9Vxq27Ez45JXm16bfYsxhJj5orDPdZLHcex3nKLhi2RFNFEDZZBR",
  "key16": "269y4e4xMeFKr1uLuESJN5WcQYzZoeQj8ZvrM4VE8AB5RpMh1TCXPcNZDr4tvRnGYReELqJey2nsGHrTarpb8ywZ",
  "key17": "4uSoG2UebktgzUQrZpUZp7eTqrubJcSXqny7BqSN1PbvmbiuCUAqgpSD8yTvWibQLGcdLmqL7DrYxsfbR6Gt3UGr",
  "key18": "5XhKzJYbBF6X5yKRTcf8EbNWbRsvsJmdgQBZxvDpGaXBfGfw25p4CbgxbxXvg1ft3jeeSk2Ld2SqgU1dncymrrNU",
  "key19": "2ZaKo18ZrzdMvDncRNTQLpYNzL7YZUv2c2rCsTvu8Niosduwbp8ouYZqwLPMRNeLQBSePQ4SHuNZow1QxSpwmYBZ",
  "key20": "5814vMZdrDmcVFbvpM44RNhGAHj4SMyAijQXPmUzGB4YP2yRY9JWdGB9E9P255X9MRwUS4kwoUQi77gZag8J7uyQ",
  "key21": "5h4TpqYSVEJKiWrHFurDoTYY3h2NrtKnreTCXQtNrWELpotKDttvc3vdhQrdfutjNujvH6Sn1GKuLcP9daNY6M3m",
  "key22": "4vsPBuBrTCMUbsbJEG4wGD48BBAgGipYS4q8dXEFrMyc1jkyjYQSnWXzKZGe7kAmojk3CAQKgCHpqQ1pBuNznHdt",
  "key23": "3VnVXj69gw2ZM3jhJYyDWZ8Ruc9DcRXWt7Qvf7XWMNbYSXUNrMMebFELtigWf53aXzMU1P5s8FWrx2BaBga7kfv",
  "key24": "267EWKTzjraPzXR7ZMWHPEBFPy41J2ry3cnYjnuTt5M2ywkHfxCzpnPNQ74kF3ha83PyCnLWBLQnAXxj5svJVSTm",
  "key25": "5rTTMt8jr9qMHmSc65UroBLpinuMqivVFfRoHxKdA2eZN7TrNViHkfwg6nTD9REu5AP5Ws8FkRVnPesgFNpWUQcJ",
  "key26": "2QfdLW3tp8WV1q24cnuMbSfhZ9fU22y5HXEESjx7kqEKQLphpwDgWnBPjoLsXn72tsKGTat4gAPAPE56DBau297v",
  "key27": "DdWGHtXWc7LwCDKZUSTbgG4eDPCWeEppqZK2wYr6xq8yPJzQNVNJjBsua4mMEJw646mXJ5mXu7bVJDcU5cjum7w"
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
