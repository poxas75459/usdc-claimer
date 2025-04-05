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
    "39LLi6Lhtp3hdgwNgyRNP7msDB7yNKYyzWXoaKxvj5HWWvEYnYCYc989HpeBWWvpaqn2grA9ZkQ2rnoBdUuCziQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YitHDAYMFfdRXdZpyJ8z4S6eh1djUNVGxiahP5hQUtpAYxdkiLthgGrrVSvS4ZjDHr911WcgLgtcdvLnt9CNgzf",
  "key1": "2NvywzZmCj7WJ2uqhck8McL2oiWWimWwFWWsiwzQv2fJq2Lc1rLng18SpctksChu8cuvY922i9wcBQdC9YaAnYgh",
  "key2": "3wpRVikDGV9YFBoxHX93HPG6Mc6ierAEgNtt8XTWT9SdU59Cn4KgvcXBxpBfnqDbMqtRDf5UXmptczwUZdxjdAjg",
  "key3": "myGQEijLJH934MGagQkb9HTLqsKR5Bsuj2q1DvmYWx39suLTyXF4Ft5ZhtfNPQC5ophSpyoFg9j1AkkpTYtVbRZ",
  "key4": "5erdfTdBBk18xiM15Up29UAbn1sp2jF73drrsiPh9AYdXTUbS1GnMXfFcYqXbDCDyjbLYAYhU4tz1Fjy5UbPMvCS",
  "key5": "3xB8jdXiVmpGu89E1eac1U7c6KyNp2ccvuVRxeFhnRRevPoTi9SHe4EegUCi32A31r6brPRWXXAZ1wW1qYfi2gUR",
  "key6": "4JQEJGcxAzrCpda1fsaysZAroKZw613eu4W28DrBbcbrudubTKUXPnDkmfDj7eGTT8T3rw3SnCTVHu4PA8zQnQaD",
  "key7": "3GLmWWwsxzUgr8WYgiKvaehj4NeZayEUEvahkHa3QBo69q2sycZA8rsCNgdr6AUEB2PrPRMYnPzZFFig8tafAupC",
  "key8": "4H6LAH2XMjJzySucN7HBDrgZneaRcZygveCRb8vHuq7AjSbauDKJXXsV7FBJ3xjCv1oa7Yg2cf8CAyXMAiECNdi2",
  "key9": "2vu3Hqx5t55bkPcDYktnBmEoLN3QDJBLcdqPE3RfaCXNxdEtmT2Tf5xn9qjoga4Y1HquScF1YcNsUeHb86xpUZKs",
  "key10": "2jaNugasD4LFtCNnUDW38RzSRkNfEpfU9A52m3UbPtx3MwmVCZvWNYmZji3u7mzprfK3ybE2JfpiG5dQ4VCAMcDj",
  "key11": "5Mv5CnaLiRgN3JoD8nNny4sxHDryUjCbSeiz1tbMBDeXVFxYxoYcpuUxeWHreXeqkmWbjQ4VnKFLtG3EVgsdQYEC",
  "key12": "qS9VjmrPyx8jhmp4p49p417C25DvswAeRhpnqiBxghjiuyiS6e9h7hcAb2BBNR5eFReaMc9omKohatnnjN9Vwc7",
  "key13": "daYCcbSGTXChX9PUD7cX17MyzfDDTs5caFwTX8E3afVZ3Vx6wQy11Kgn4DAh6K58tUwSoEvgBkBbEuyBpVJXQfQ",
  "key14": "2bpD7KpiPMHbtkhAe98JdMQLe6uuvUqcpRJGxFHHYvgt4cnmwzrsg9RwLguqc9RTWPLZxF2Rf4uHaKpJfr27BLsQ",
  "key15": "w2a1eyHfrNJKmepigpa8KCkGpb5xsTssYjTMkd3Bzv13tEzwGXQVutUPry1TVHfVEMy4AXSBjNJm4QTd5r9zAsf",
  "key16": "3CYZWGYCfm2F8Mnz9ujT1ZaX7ChywtLgnfmQvzU1xRNPK6QvHc7fQn3x1hyAmQa9zkvfTwWuJpLZz4WWXNg4eqKc",
  "key17": "ozARSexBWrUjhkouqQpbVUbpENNxZZDdmrFieCGkGyMteFegomMPw7TT5zexra8uqiXCicaCpNE4M1JkFXtYKg8",
  "key18": "p8NPgEQyLVRqKfx4NQmGGryQ4zkJRejN3cHVJ6y9rD2SbXuMr2XzjJNWrF4bUdMArM7fY2hPfe77XrV3c6qrGZL",
  "key19": "22ivHVN8Hy7bGpHGwvoh76Kvjcod2qfkDeBAUncJP44kC7tTGEmXQXyxUpEsfGXzCAVvTLudnQsGi9enWZuxn81W",
  "key20": "42r3Vzmn8puusUhnZfQ5ZJfa4KdZKBhcbNWweoGkKfzyXWrBbDg4v5V6VGoKSBKuYvcTpXPRuA5AX77jYN4ZvKUU",
  "key21": "48Z4LMMq7bJkC5YhsrKuubYkCkasY6wwg39JQW9smfjA3ooYJem6PKr4VyUWgrhWNE1e19oL7LfwC3htZLhD9i7t",
  "key22": "cgSpg6rdbdgq9HcmU9nbGmcuDwM359fzXqVt9ngeyP4JnZMz5Kngy9WNQp3fPRDB7E6WvE3prScDFXPLnNK6MeK",
  "key23": "367R3GsjyRdFj1XnyV8BFMNhVCq3bWrKi6Lf1QtM1U1c8CGyQsnes1NmVQNnJsgD6QqVuqPaGsVe1ZQYqfMaint8",
  "key24": "4NhjgGEbh2epvjwuvFNcuy3sCjnVUe6JJ3M5kZRt87niQb74UPYirqRxRJ8fFuSZQESWtBLjjJZd9jxzavQwhAhX",
  "key25": "4JxdLrrvB3y2Nmcmi4vYjGoymzKKkhuE6KjFsR93HoTvuEk1S1HbQDwHdgN3cYkZwMnys7hT4exeAyD9wR96ApQQ",
  "key26": "311u4EZ7GHqpc1Ws5wtkLx4gH7GPxQMaDF13ZtH6qAsDDPohx8a3VUmorZAfWLVGZdsetX4NfJ4Buar7eMCTPmHR",
  "key27": "217MbySRXe2Se532Mep7AP2GTGBtJpz1jtn5vqsbTs2Tx6NNtu3bicus9E9bMrQ4mcG4vZrPfxiB4bi6MmhNgc5a",
  "key28": "3sMmW3tmWsLyvxagrxnFZNHuGsK8tnG4FPZ1TSokwZyFxreQv5bJoGrUVnZvwPVXkSvRaC8YpCysL3SRtoq35NS3",
  "key29": "226Fr4yNm2omoF6dJb63g8eN8P6aeoEqyadxuMg83nKsL5Z8NV8xAf1CSWKvdwW6b7znjropwETmYYty6xpF7ntf",
  "key30": "VrrNNrvKkLMKx567ZSnWzTeYqELA6W36CShBLN1iYAv2kBnkbzqinsKrJFxPbssrz1TgrsWmBniYQirbALy98R1",
  "key31": "L6aJ3r1vA28qNiBByQgkoyoTkrkMhDUsETwepjoPBNjNjSeYLarPrA3Q1Cof3x6Z47EtaA4XU7F2oUdN3NyitBy",
  "key32": "2SeegdP2A1qkXRuLrPD9pvtqYueqprtVKeAHP4hrm6P9iU7RsALsyTGV8eKtPMEMKEWUGAKpskBqyG1RiVXaN5z1",
  "key33": "46dG7wXr3j6xdJD4onFvtFkgWx1VgEnPujppmpsVEmEDXfywfNydZEq8QHaXbit3tSHaL1KJBj88NHXiqJNNheHH",
  "key34": "5Z8WEcU4SHGEid2MeHwFwBz4McDJ8CqPg1XGjFm3SSrWbAvCL2tmMeMrfReHFFMB7pajbnzbNS49KH7qu1nsbspJ",
  "key35": "5CVTzZLXo8DejkqmEJEiYq4jEh1rfXK2hwCQWCgNjeYx2b6EGDrXdcRQjovwAMU9d745zpKa1SNCCx8Vn4qJtBbR",
  "key36": "5RKY7sfx2nJiNVB3VZinQ2moocebcjfLKd2qdBWUBziucGDwF27JhZocmTWthoW9DAdYKYF4xU4trPTkE2cqWrEW"
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
