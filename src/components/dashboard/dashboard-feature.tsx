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
    "3q3KhL4Rg2HuE196sGxBwQH1wCQB6y5F81RSKxLc5Z85y8GyaUQYHAGtCXDU9PGpgyrGB99sYntYYSNJ33xGjZxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbc4VLoFHaoMY2k4hQN8qgJDD2Poq352SgbiU55wqqh22GSVHDhAMjTCM2gnCnyfe8sJdVsSFCxUEiJizwz53tG",
  "key1": "3DuL9JDuDGjeoXvqKhDuSzqxy8bDuKg6R7Xx49Y7GQq55v6F1VboUuTEeGGCu335YzQYwvasQEt4oRrJYCks9TVA",
  "key2": "5cbFsa2XVwuQuDcwGbG2We7qZ6KRxm6rafHThyr825QjqJCf3qJ1uuVSJw5hf2VW4EzxQ25UZhhRtzNHaJ2LRzWW",
  "key3": "35rLSLDzmfz4e7NykEdQMnccmNGakHxpXyBBN17pEDr2342VoiUxtUiZVmoBGBoc45oN33ZhqBL2cBfsHyHXBLL5",
  "key4": "2qQcs9BZ7eYVTm9cveqneRpLGHk2AEodaFWnreXLoo6MRKwmjMTpkEFHXFsuxhYBJ8oBAKmbiovuZhbZyCW9idw7",
  "key5": "51MZwsB3cm3g4njpL73Hu65tdKLFUvZcLyiW8ZXSLz541fioshYFuLsgQvgbbsNiWxDKaGHUsL11ck8gxMmVMLaQ",
  "key6": "V6QovsPgrGU8d3rfxGS1j96EDELtRjkQrK95CiTnZiEBCAVJp1J6jUx7TMBkmhQh82uj2AHBrVkfRocwoH9d5JF",
  "key7": "5H5i13UUvh8hGBTRxo9Yh6gXiHkuBMeLXH9wUurwUkr8a7quPsiTq8mTb9y8BQ38e4bsVNo6uebDem4ZQk6G15XA",
  "key8": "3peMeohpad8QWeQ9TbSGTk3JYYJmsJjy3oWEVDa3yjpRCwR5QRu8ssJMTeLFZwRjSjwkzx1ygeShxoEP4p8Ssbwe",
  "key9": "5ATrDJgsuPrJcKCq5EvPi6AFYnrgDCaogvkHWDwxiXFpgzzcFU33v1pAwRqj9xXu1FUEgYWrHdq1peBGbPokfY1s",
  "key10": "48WM9jwGpEKqnwdwuWmiLKam8GRrERKLgH8w4NvgyUdvPR5sGyfvsPFnM8tEePBh2nmtB3YStUSLTLokzf6gZYQ9",
  "key11": "5K1GWV6JcMNFgSNuTHG7ExNkphzLQbBxcQi6aFTekXTaGiwkEvbcUgYRNG87rQQuENDBbkhRj6DxZ3wadnf673m",
  "key12": "5A4oNiSz4TYHTjwTSDbMjnqYSMrkaHSJSzZbnYtAWqsnNZ1vNPP6UE3wV7dEJurbvkYDSksUbkYKcZbYgmTCkUGy",
  "key13": "5RMNRYaaVM1xmUeTznk3whWEri8HfmPQHgKshd4vSzusujbijr18grk9PwmVKPRDmfzwCxWHqapC9npSx5MuAa5t",
  "key14": "4ougTM8q3PNqLURqP7zsG1H72uMfWeP2dtuBcnvHsMaToN6kRiWHznUS6jWdm4xLzFu6P8bEdio47F96PM1FBb3m",
  "key15": "5F1vRJtHQXyXt3QAPgzTqDJKLpvPCHN6tK4bCW3SCrghCDEpuf2iMBiFrFQ7LmWd6Vij6GMNPPiziUGVhpz5SiRN",
  "key16": "4hohne43A8xQMr9WLtNaQgdwkvJQxsQKE7ysfUAk6eefifuZ9TcULnuc2kn4N5rYrFZsZjSFyBReNtnv9fabBvan",
  "key17": "4XjU8YnbrSFvKFSfPuJu3Bk4yQZqbgzQkTxj9AZAtfo1KxrvqXX44qbEGzeUFhJwSuCEZe9p8ztkjhFeDPBpCa4h",
  "key18": "Uq6BqRxKTgRkHr6KF35PCwUP3hsapXySMvVREiUcaRBRve4H5fNqK5VmhJ14o3nJLvSctRJJecXeGyHWWSxkQMR",
  "key19": "3LM9Yzh5s2THKVsUNgoKGpfTs8C46EMpFaiMTLGvgk167QkKuCBDxdMyPvyRoWhr4Ds3GWgmVLrGXV1Q4qGj13Gm",
  "key20": "38HfjV1KK3Bz6ryvPxpyuSP6YwT1wszG9chEECemaHcZMJMkQmBEzXWmgCsPzcQ3eSzgeHxZCoLCo4ok6y5yo9XC",
  "key21": "26NuQXbmKAy8Hg3zAcr5VUMiYRJx8DgqTtwNdWMWm37L7xcgnvNYdRufJiz2dh2wbFbeszxpMuqjqDYiuTkUm2Pe",
  "key22": "57TLW7jpmaTuFekk9aRZq6CvNvDzdD77CX5KyXjtFFYKysQ2Zk8E6RgFJ2CwaZsyD1tzo1jtDBKKpsZLJkt5Cjbi",
  "key23": "v7AxDU4hEHordiaYSKz3dhcxzv9isA1NXqvq13yVGmeXdqHtdPSdnA3ccj3E9Suib6p4E2z8e4Sqp8tjjsp6Lkw",
  "key24": "AX7DHtjg2TmeDtZ4Huk4Rhy8d2dzjnwxk5mc4o2NbkirCygDbyXFGpz9Bknr47f295D2BF577QrWhW5hUpxggMH"
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
