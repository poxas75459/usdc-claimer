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
    "5JMbzj5DDGetMYzjYGAzgTxrSdRuaSYAqxeS7x3qW8gj1DPNiuvnVhjXEhgFCepzXZ6kaK5UGT2L7pmzJ125gpUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51K95aGxUrmLHtUwVhqf5rRTan6VUFEkXbc7hgEQN715fts1TMPg2CqZ5Pn6T9iyduaexTDakuBUnjGANpDwghBV",
  "key1": "4FA32KYdsZYrsXtGSh5UCCySiVxsC254JBiS3kGzRWDeWEseFUFx7Hwf7jY4HCptQ13kqVbz5w3qjLbwXxjaDfpq",
  "key2": "56LjDW4L2kDeZRGqAw7VekTUNFaWrzkt4Zsha4HANnKtPgUdCZz83vuh3up1H5rpEPsvTd6k5ZxkpY4D1MqB6VmQ",
  "key3": "5ooKRaoP3GaEu7c2Q33f3EAkRfpiAJLP6nVxvyBLvhWShpudCQgCTLkkAyx33zWQBsaAYgUoXG2tmzXQfhLRDSEG",
  "key4": "3PvsAzA9D5XHmTnCqSv23FXukXfDwJUgrTLGBLZu1aE1ssfY1YCSNtEFManp9zc6jTvi4oXmENgGBpipv8DzASZP",
  "key5": "Q9vtz2bm9uUoh1pb6iLNM3aVVYKwNpRTqWYnPpxPrC1g2SH8UPsyqycbFDyoaDAX1tdYp6ws9D9cuV3WsveCxzj",
  "key6": "nDm8ygzzpRENt8XQiTMsMM5ohaRHTTdXbE3mAxtB9w1SDTsnWrj5SzcqDDP5kBLG7uPokKmkBf9ToFQ6wc9g4sh",
  "key7": "5YA8aCFmLP5jGqr5VMDWdigu5j5ZpNxy7UC3YVAMhkDxQKnSu8WBJe13ZezKa6sAJHZeKRJDKekAAdRwCxc3P9F6",
  "key8": "641PTJ939pMAdcDUiZhrA6KUGvmfDnrQLfBu2gfr4vjf4qDTQK6crpPVMQ5NHuARafKk7QGrEYUybYHXKhhMdnsf",
  "key9": "8pq2BKwo2s3aYNc5A8tpL5uGu2QK5LP2WtfrbBDP4TyBiK5M2y418SWgEHEAehEcANdrypMtPrSsuxXjmBFjsdu",
  "key10": "VLrTtEZWwBHxcFRnuqacNLbpU3rSS3cqgzf8j6vLa7uVfoiGo5xWcHshkmBZ8LjD21Gxb2YXfvVi9LPqaGWaw4K",
  "key11": "4YUoY1yLg26JfS1zUEkX31QVR4F8NhznY1fNjaUvJ2EinbDv8MYyuMF77S4QoTeBKQib99Ji4LQFpwz1bojNXo39",
  "key12": "5R2LP9HhpGrrAtSSd5Y5vK8SLvn416DB1XeqhfXyWXnsKtTu4AVpGYES9UyKvgMJLJ5NTBaq3ndcakJeT1kzDceB",
  "key13": "jtHQarbuqPErsxWNe3XrL7eiFjEVouVRSuCRDSQyfyRP4KbLkcsDHkr23T2mCYVP4bwahZE6JvCj5AdJ4SJr6Ap",
  "key14": "4HbsXnHPag2G2vb4WuKg7Jtxt9VDEbQup2U3UvWpB1ARAWSbbs64a1soDXbFVGGPVsKSpFqcZ6VWHjhNaB7SMA5E",
  "key15": "32qGprxLdEeiyaEVgK9XbzjiM2vheUQM7W1wkDY8Uk488UcfpLqUeat11BLToeFAr3YSCqJYRURi3Fiun2HHfFEi",
  "key16": "21YhN3NWHFQN7v3sAjwmH9JfMEn3aaKPbAUbWGrCetWQ6cZehVPwT599nwcB7Z8ZTUuKVXwsN6ikXXsmojXuA51d",
  "key17": "hfUGGumVyhWb4mpXx78fA7MDEVmx63R8oBr1MEbsH2rcwXb5w7QuJnVeVzPKdmKS8jD3uTqqLTPL6x2Dtoyv2RN",
  "key18": "5rQ4nVNjgumzP6aPpuCf5G2mXNj6x1Aaeyq6CcrhDuzrNepqiGJ2C9cgD6NdXU9R1zEwbnbnuELJqF5n9SET5Zpr",
  "key19": "5R9QCQBTdwjWH4jfUTAqwLr1PWMFCDmQJcX7pkUbiodePAtUEHEA8dnVdAZ2UJyKmoVLoBLviX4w6UQt2incwoLb",
  "key20": "ZwxAsQXjn1ThxiujeCssSfVhVE65KuEH8JTMGRhLxMscnJFYrQ5nhHh6VTRV2ohgkBdjPhboBgYeJbA3YiV2EL1",
  "key21": "2s1oYstiwDsfMr1CsV1aNBbZtTeK5GcbaHiB1kVuFTGKdBuP96DwtttWsBoUSmBcHMS3n5CGwpuqRWWmzKLsZAEW",
  "key22": "5tvywLrMtWXBiXmhCYSrf1A7R2352TXCJeFf74uD61nM115Ekzk78smkxGdHWwXMjtQZT2Vv5Y8nLVEBHJDKW3wp",
  "key23": "3RR2AvejRTvY4B6yxdcUwfXRv5a8UQZhGe8xScAwnPrUUyWENDtoZLNSem2fWVUgv4Gzeyeqy39xRW7vGaDoU9yt",
  "key24": "2vS1fikF26YavxWoYagMMWcBcmoREPdxSyCgS5ykXgvU3Jq7Y7NFnRHbAfPMj6F3bLFyERAjWw6EryuvydBFq7Dm",
  "key25": "4p3Ez4iezUvuLQMP17UJVEqcEw38uRJtjZJYYjQhzLyashJEHJdobYKJEu5gBnhL9fB6hAQPFthE7fkjcUgwdZWy",
  "key26": "2T3GgQ9qr1bmVnjvvDeiLvx9WVA2zMzN3fY6ta1Ab3D5TMdLutfSFUV6gwWZYewzf6expcN5JkBto52gzopmhoUN",
  "key27": "SjB7RwN5XwZMKgSZbCYmp6uMXZLxhDsycaSSGuxRQuyoYV7qDwNPht37DBqo8RtX3cYuDA2MNuS8iuru3g9uwGo",
  "key28": "65bxUB2zcuFmaLNzW3RG7idqNwA7L1vsoDQbiWd54nthx4fgmVeWFun4tHrKUTE7XEh8d8sCQD5X9zSMqUGpvY62",
  "key29": "4wg4GAZ8u2GjMEZRK3GRECwcoZ3QKTzWTzp3ogfnYQbsAvEXEZ69gkCEX1SBjaojyZDmtoGQyPQvk54CHFzbGjvN",
  "key30": "5PY7roGjEyvtNMFPAoQfrV4wZCtA8N9Q3aPndV43JBCtrVctQG5CL7wT7ipb4o3hZJATgEXn8KU8aff5eJtdTaDh",
  "key31": "5XQP7GHv7rAmGU9GnNezgSqkEewe9nzk98m8QQJn5cvfkWFdKUNXteB88SYeoG5PvWaa5Vy78agrUyj6yVrwZHxq"
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
