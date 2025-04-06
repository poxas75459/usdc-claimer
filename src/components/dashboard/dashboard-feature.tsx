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
    "2AwUmciWZcz5i6aAvimfhLr4ZzWsCFS1S2zbWj2MkpNm548FPtgt4TPbeNi71PhWdan23LAzXPC4VUwJCzdwc4GG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v25RfbN5rHK6eowkou8tqZsrwfdZ41jq73hMT83mAAYCLKKpzbiqkPbWMMagSj7jryZkMKoiLXm3dNeQtyD4CGz",
  "key1": "4EHpeiinAXQF9Gfe98JLBH1Nmx3XChzGno1wCk5qUPY86XmkiFtv6BSGvWMV7gzdRKa4Le6tUHLLS78cAkqTAChf",
  "key2": "C8ZX511DJJMUDPJT1dqZvXjYAijQWp2eyCa98W6cwTmun9yqPqaKpEGjY4wXx4egQgF2RpDgrNNXsMmKiVQkQwo",
  "key3": "4ZYS8cmtTYMX7ocHE9GRcJpFTxN7qgs8Ca4YikQSZLf1wCzm7KRbcht5HSPpJWMNdhKZLGpqP8LYESuQQqPN1NBp",
  "key4": "4yYhdn9SN46JHq9hsJppZavRANGsCSBfhcSFLcMztxt81EBoTUdsGxAXRpEb3k1M9fvdrE1FpZ2Urvx3xuoa9sXM",
  "key5": "21PorPUXRM3GiMvFVeJoqyhnAPits6cc6rGDkDaoaNJEqs8WyEQnDBQw1XtDbeZNacK5vTfZgn8ceUrXxb48pL5n",
  "key6": "YWbbXnJFgoSxXpimYYRREtmvySt2qNhxVdgkEnimXzvWvvjcrkMNjdc5bEdPsrN51ya4PxovMxzyHePX3jDNhnW",
  "key7": "22eXQsNQ3EqvgGTTVv2wXtD3V5W6XhSc84Rrz2ctr9D5pHqvwPdv1reeNUhhkAZKZZJtUb7EcWef9LJGNgEcJ6Pf",
  "key8": "44u5BTwmWR6hhodxKfY2PAo3UcKtf7hXGnW6EoXwJQSaUJehh8c4urYzhg8nsRZLbUAiiLuBmN5sVrcde62vBsQX",
  "key9": "4eqy2X9gKzFZBbc9PVUJEwTqXnVZ4cc9LJxWvpEGMdK9XFoCRfGydbnsGcu5c53XQ8XwHzTtHJerUJXdgcr9MNi5",
  "key10": "3SZNKEp6qYsVVsMoD1dHRprVjHHJjijuA2B1F7VfNFf2JLvk75ATithwtjYX8r2gu6Y33zYSVvPWy2fwJW1cqeT",
  "key11": "7bvtmcjqreaoxyYAT6r79A4zoJdw32bcZZU66KW8RTuT2eRwf6D5wJoeZDFARqAz5QgqPiLXrBD4GMQj34AzgM6",
  "key12": "2BumLUs52Rz29MsraWN9ApB1xLL7s4HvvS99EB8nx6J7sH7TCjqUeh2LKPMGxgmtRGZK3CaXMr4TZEWu4XuL1w1A",
  "key13": "4y6aJZkLgzEvoV2MowjyA45u2syHxiybZen1aE3nntXGvTu8V7Gaq1cLLdG2MBvBT9ZCjVixncoUqeR7MY7YLTe",
  "key14": "615Zu8FTB8WzgsM7JsDrmMzh2n8D9TBe51gC6bsdUAQe3Qdoi8AeazrW1R78qhQw6ftgjZ5KSCCro1tLnY2Z3ppk",
  "key15": "4t8id32Vx9uWWW6kdbaiQ7935kiK7dZbHBUSJiW7wmLmA3EQWbJ3GxGS5P4SPxGSdvnaDNrAsp6jL8m5wQZwm1cF",
  "key16": "3SKfiGyuC9rTDEM85JD5b48Znht1FWtEaC7zXLaD925x48NwaJR3MvwGc9UfPkyhgkj74Pvt1FqE7p6xDCAcG3LG",
  "key17": "22xxRgTFNjeKsB8VZ2d2m4NhejrszErtYNBgijRFaUQjeWqUYUMgKhQyumQgWPizZUbN3GcvvFLXyKPnoP1SXxqo",
  "key18": "3Fvf7MQstguqGXU4g71Fsoq6xzfAQH6eikZYdYPFVZ8Mdg4UgnwVwjo7BGNQadiW2TgNCvyTReKi3T5eroG6sAqS",
  "key19": "YNzuKDwqz15LDxmi82TT1CDrevehjzBih3vWvGQ4F1foN37Kw9kHKSwDZjLTEx4oSmAWFbnWFJdGcxm43XCvL9x",
  "key20": "3ZH13k8aYaWWcbDrsSJjJjnREjP3aGzmSuCsWD76TuibJ2vys64uBGa54v9qd2RDA9n2LrejoSD4tn8WREuCcFTN",
  "key21": "1CSjcin3Sjy225iYVVsgwumzKB7y5Z8VXVStNekxUV1u6EG9A6gDemT6AHycN7EmfidoT5H42P6dRfLEyMVK1qb",
  "key22": "EpgD5246W9DNZECF4ANFWXS1bUKnB6p8bXpGU8YUYJJvse2tWw1qhuP3yk7vokEyWWu12VkAZYp5THQ52KcGZaR",
  "key23": "4kv9aqytbHpMXg7BarDdGZLczd2H3YsiVjHJrx3DrNzgYS4dMLYF34PruDmF3eFuYRcFB96gbDRaWPTe8X68vRCL",
  "key24": "4Lusx59tX87EecsQV1BfFCZxUKAepLUNN1VFV9Pz5dV9KDt5iGowa6tViQ4YzHcNogjat18dxp6zMSxZ9RFpSEA",
  "key25": "3N3uEifJ2fUUniABMz3TpWfCg2ZwNESqGXKznNzbcLu1Nc6BY3EBdYJ8NuPXTDR2rfB4HrwjzFufG2PnWmgjmiqs"
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
