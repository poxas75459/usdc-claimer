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
    "64eZQ3gRZ831yMzbdrdEdCSXDCa58fjYYE7YGeKBTT845iJmgCSTjJgR32acQXubywSen9dwSqUq2HnwsQjhQajE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxVUWvcpVC27ymctVrQMgrD1tt9pBUC1kCZ8Y62g6HEFsBnPNTDr2mJ3dHjL4e9hh4QAt3iQchCa7WbsJ3qAbmt",
  "key1": "2EnEsxZePV4XFgFsuiExpH4tA9RFA5SiT59qeoD1Agpn7x8ASLHwYgS9F1yuW6HiZegxztf73sFv4ntUW5nBwr7U",
  "key2": "4wpjYxtpJszXka5zXyAbCRKF4SaFgPo2aVsUBWh8iWroK7pUzJD2KDf5H2sti13BQ5iN8FSQzRd8eWzbcDFBvpoe",
  "key3": "2QH8hmzzGvcxVtej3S15Zx8Bn1HPosfTh3a3ew3iRiTb2QWyS59v1bgcY7638w9VAvdb7ZvgfLoHrf2TikFus9Cv",
  "key4": "3pqyeFxzt5XGWM67351xhQ9TxpMPZSAP5sWCTp3pw1URyYH5naovCKFSUutrcYHMzKwg6t7GLnVK6g1uQ8biEHXm",
  "key5": "2xAXnonftLeLbhG7C1DS1L5MKak555EqLfsPtjjzfg1TjQu519UhKtuSg7wCphtMwQ9RTqufkN3xapKrbAz47SvM",
  "key6": "2gxxMmLvnxyWeVWXDFiujjy6hFWhRHPWD9fZy3YGKkupwBjmNameyDjSCCtPoq9Ph7u6DPM1bJ48o1Niyw24zMNp",
  "key7": "25dA8pSeLNxfjfdnGmZgmrp3HQyqTJByV3rRQZ9T4JuxQ6GPGMyCF3vxanxTZYX2BzM9bpGzwomKJpMYVnc3sv84",
  "key8": "5jxPJHCHgwPPw3BRQSW1y1MeYyf6fDWRFdher31PcqBBeFv6JSjUoaoxekgiEY67WCZpWWBnKYmWnCr2vezkHFBU",
  "key9": "ghKeUGSpp8TfpXk2hefxSJsXZbv8xwbYHeAveLSdykr4PHrUH1JnHjFWZPP9jaQmFgQw9oShACTNExhvr2mT4jf",
  "key10": "3m9h5aiuFNfRRFD6LvWHVUExErxksDAzDQ9NWpX1B4U5pKMhytg2fBCJ6CQAQ8XwHzMM5DU8cWEadsKC7HLG5xBs",
  "key11": "3ekQjDh16yjcrBjSnArbhJ4KDfxNQetoZApeLR9K7oDiFLpCYaNGnMzw8mnsUbi1f1JLBYWhkdj3v93ENXL6ARhy",
  "key12": "CyiLgK9nhEdbPQ4bs6sJaoh8Aa1LLoT1YDSJLESSmQzHDURU6NFGEeePgd7iZob8JKX3r7j1JTgeRtd4iaPaEvP",
  "key13": "2zi9pTn4ZHH4tu9xXm5gadSTAJ3edj54fAwpsQvGMyom5S98KXm8rMBNiYnRfBQfPuDTQi1zHPtWCKU2kJvNzVaP",
  "key14": "2hdQcC5UPv7q5ZpX6ngd2hxAYFudFJA6NYMupYjqRhAiHpouTSEHprifQ9Ji9aCtKUb5sYx5bVa4wnEDvdsBibAt",
  "key15": "2r1vX7rR4yTaaQiijdKWUpEJvzdybfhDwQZwW4MJaofDqTuoNf1NxNRwsKuUMU25ZW25w7ydaaffRMuTmkVRJDAu",
  "key16": "4xDozjF9n6MoJJ1vd7CRiBAhf6bfntCgw2pVRtdJ3Nv2hnSeMg7Rf5JZwfrW2q3EnzzQJH6rt5TpNsstWi41GJbL",
  "key17": "4gtC6TPvZCEVyMwTMzFx7vKjJKcFzBMGCzdVCSExXoem5CcygyHrmcg2VxQ6u6CjwVKcKLQvKLtpgYV7f5ZXGZeh",
  "key18": "3fvt4DNBJFgyZfnvLiNmfcWm7hcY4bn9oxVdbNGPBiRJvxoha5A6iD6TErMWibjrsE3mhXUPgsnTyemGWqTjFqPK",
  "key19": "5dAYgUhZYQFyA5g6LRaEow7F7DDNzZYBarQp4khnMC3QN8iVrUbMiKFGLhbppeamacc4jRSoBM5GKk12WARJsSyb",
  "key20": "EsGnnPScQm3fgjvEKdtS9BhK63P9rJXxGvKzVE999rgb32sVKbrqU2F65kR55nxzKovwquAjs6ZbRC9SdH8FEb2",
  "key21": "55NE5rT429ccAbvbkXN1VMs2gSr2yuZR8fL15gJxzAdhYsWif7waecyKkj8kk8CeEuUAW7Z9jPf1zGz1s9YXY3hu",
  "key22": "3pVpsgBcN4fsLeCKZ7xZnfgonNbptT1VgkkBnE8S4pnedwRmWtNHCzrXbz5qwVZULYK5L7DePQA1HZn2VqKWnLcn",
  "key23": "2SZwXBVT5KF9hwQUHu62X98nYWSVgssrhNaD3e7oyPQ1W7sg3NnXocLptq4jXBBPZUaaj4RKzw1BRPSzwrWREipV",
  "key24": "2YkizngHvYDvNbpaABwffp1wqg42SxNzsEscuMYmojRx4fsscpbTUACmQgXNXVwfrxky4jpfdEESUTVnMMMVzUMm",
  "key25": "5wT7WzA2QyFM3bvPV7MnJrZqposPkTarmn5HF1k1R4SohDkA7A2MxnLRYrhbywFBnLjTTjT5BZ9vQpWi3JwqY92d"
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
