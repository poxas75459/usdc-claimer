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
    "PGaHYMS5MKxnaX78aDAXRoCfNkDtWiYMREsdQhgvzjRQfLSqSQvt67taVMwwCVsd62ygesLHk57BVJpww6jS2s2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2jDhLyM8PUKBT9hu5v7ebv19zh4tGaTY2c7CueRuDpHY2RuuowSVmgv3ZB5aHfkfndsDBj6fh5xcn7ZSHW489h",
  "key1": "5o1K2psQ9FWKbAkZoxjX4FfqSunKy8EpsyP1GwVXmSfq33wM78KetQfUNgZd3ohwJ7zmQkyhCEp4Lk4Ht5H5wPkX",
  "key2": "3qmigPvxAyEmsDxh1A5P3TjCrpAjKrYJVY7YozpJNA4XcpzibGV9aZHH23X199F8CuvjYcKXrityB9YW6ZFQn3mS",
  "key3": "4yLwh56i6b41Yh4ub9BNGpmmBgNp6kQ41qka48iyqLnzJamXvQMfmPtBU2SUPhuNp4vZAZFyxAa4MD1HzWQu1ke1",
  "key4": "593ootHETpbeAUWMTHqhtdyboCtLmVeFcAT5xDDMqYnbH33id8eciYSYqJj6VoqS3wBzoQmtGQs5o5mCUbmjiNLW",
  "key5": "4YLZqbLV7jHUor3T3oANHkmHZX54Cv26SV7FZ5nQTjRCh8NT4VyHrhY5YYb6hcsJMMH5DPjzoYx2emgdArjbBq9a",
  "key6": "24RPUHRQ75Ed8hXvDv5xSwV6JP3hTZifeTYRy35NTY4wq5GLpFnxS5JLE1FM8HVjSrAWug1Bezvits9wzTnnqxHk",
  "key7": "34tUuN4iWYUiZPfKkapZbkqHosT1zpbNs7NKrUB5CuPHh8bJvCudBQuPSujdq9sBCN6rVgrYVrkC6fyFhCs8HHtT",
  "key8": "593NgnVTCyqqRGQVNcfr81kT1WeK5TTmMPhYWBWGqpCFtMS9oUW66mkHfBNHb94ZX6aSXN7ZdgWcuRaJs4mGLfKG",
  "key9": "2xEX2yHUyqMQkYbLLCXJvTmPhMRs8tcQcNKvKo5BSnAc5eHgua5nut43gFdVBPgzsKJFiLaKG6Kf6LYR8ajPunta",
  "key10": "3SoJpf6eaQQf95PHNh9jWRM2GmJpRvT7DHLA35d2SmMHCoG7yWooNhDCASZLbsLs64is1Yqn5k8FJgmLZmp24uLR",
  "key11": "2yitoztPwXofXFHyMtXvtdoXaj42Hsz32LJZppSwW72q45SAAwuzxxYx214X8i1h8uKQLShmfL84fBBhEP7kNbNW",
  "key12": "3imrNz5QBxrTmk2JqQnaw89m4CiLytJAYVKEZukYMK49d64xeEZthoyMAJQYJ5uLDpvCGgBCaTE469KHDPB5Tc67",
  "key13": "2eJ4t4Xe2uLGHULiaM5hn1H7GocEaJjqRe36GzLUHEN9cMdTe2Evj63DFg3Ymu8oaAq9tuxTmvt4zX6eBNAGsKQV",
  "key14": "cfL39ngpXyGBZQVDkcJx7YD3bScGNZCpkWsjS473kjvbBkxXgc7mi3NJ5AVe1675LCQG3HJjG1q51GxZAivf17w",
  "key15": "4aicWRc39iJteaQpvc74zjk4Z4DYoLEb9iTEpQ9f9vUFgP37smGnUukr2nQMfFvjhsHNQxGMynbxM7AddceRFL3U",
  "key16": "26gg5Yx3DpbYeDd7VdfBR6NJvKjRVVpZh8tyJ2GbRz883QgPAJmV3nzGne2mf5CSftrL3bYpmHurH74ZuYkSi3uf",
  "key17": "5si3rGMpFTZVdX8PDpguXo4BMUYn5HstyjnSHNZssvyHuZCWZoBxH8YBEYYkRVJD7ewjFKaWVgWvam9NNm58GJ5V",
  "key18": "2D5jyKE96QMdVAFRxGt5DgArJw1CRKRysyhEnwURsZfBdNAxJRUaZUVoGK88hZhU17EUVum1PrW3dqkaop8peM4j",
  "key19": "6m2fd695tQdytDX8YT27d8hPpU6zYFTQAQ2pxNsbVpjjpouzwTYpSSPwr2Jp89TtfA2DRcLSGZnNdgV9yHfdmqw",
  "key20": "2g8Lbn1BhTQVCgtA51h36uDhdZt3qg9PSBdCGC6fTyAoB1emh89yjS4gAkxmgYmeRDpQVwtZvM2uNz1djkE9xXkc",
  "key21": "54rWrfaZSPiSMV4iRkTQ12gtViD463xWFgkDBbGpze6RMcRJUuYuAMSpzZKcVaa9Pjp3oCB625R6JVsQpmYXHZqv",
  "key22": "3V1kSnpCkSHEgvfW9ivfwtSB7oCuS7ExQYjMvePgnVSEtxBYQCjWCGVHpnXEg2BdyQnqY1EckbDqrQRqPMVXb5mE",
  "key23": "3eXXRf73TN4isBZ71LBFCfx3npGrzWCcuaS96mmSfeEpobYXt3jQjWNNJhJZDcvhD4NJXxCtezfWCRyBD36tvf3p",
  "key24": "3G3Fgb4rEkdqcxScUJrVfUXYkLe4u6oCcHAPDXFX8H9zaswAzLYMAG2aDYRBdenDP8Y5GTHMwUeiqELTwRsSERwq",
  "key25": "3piHUyozHYe4vCCZxcNyFwiyC23ywu9dqeNUYU7jN9Hn18wz5U3o9GGgX5D9QEDKw5Nz55dpEkdJ1tn5oYRAjma1"
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
