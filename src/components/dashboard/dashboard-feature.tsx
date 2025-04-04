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
    "5vBcWxEX6tBW7eRrtJPo7D11sEVXsDpEi7SNrQhnD1gndgAr9d72sBUJ3cZgBJxp528V47rCBhBo9HCEdMd4C1Xy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65nwMFqbgjy2fw7wQFyFvo8dFxuTRq5gGn5xo3NGttPYVjDiccoxyb5nN7hVYHB9AbpeHusejqqjaxcb7jq9Ks39",
  "key1": "26g54ufkjfRS2BWovwLHxrSnES9VEnaWWsByXj5XwSGi7KurUkLHe48qPXiXFMQ9fJLnoihoWS4mTioUiHgXTJKq",
  "key2": "2aBLXKVpkd9ZW4sRrfCTfadMiicuckMP9o5w189E2UFuR3rK1Hs7PHrmRoVcPo6WweCgAx9hVkypEjSFTNrVbLJe",
  "key3": "SjHXs2d5kRcVdGMYHropP3PcbhBAEe2NGngv6qQNEq37KeofYBW8r7EmZdG1DQB9pTanJuPY1uPvpAkkhzDb1ay",
  "key4": "4kYAS4MekcX4bTLBZy75eUPvDu3CJe2A3WioccDkhpmGKUeoCJ1KpHDefspToBLxFpRLKZxp7Sof9LtfJi8RnsCt",
  "key5": "5bvzmmJzTC4o3ikNHG9jWcXr9WrE2RRvjzN7mnNHH381L6Pj75EYvcr93g89fB61HRvvqUjyVmG48PAowJyGnPCc",
  "key6": "6Fc47tHxjHJdBbfPd1cem1CDEAhcu2169641x18LZUhP5zYzi6oPodZTwup8pmRopV58AwSCgEMUEw8aJXwCZ6z",
  "key7": "43LBa5ty8akHT7VM1SJm4Zt5rjsEbZhWSDhk7AMBKGohUYUNy7iKb23KLhebHQxgc1dtiVq1Mdp7PtKWFyrcLe4r",
  "key8": "4or6VZkEbnXKAouje2Nmq2piFeaYh4HXUsDq4ZjhCRHBtutZBRyBoK9vYGKhgidRS1ZVJWcctWMDNZ2XnPH2vVEP",
  "key9": "5TPWwrLBBoKeNTWQY9x67svA2T5mA445YojAeU6ZzfXVTWQcH749DihhCEMoH8TaXu5zACisEqKHY7Mhmf6Dm9QN",
  "key10": "2NeEH99wXtMkKkJoXvE6dW57ugTKRTP8zghJLyKGhjSatJzdrZQ5vLdKupyXD5eTZwAYPAXExcGL7dYq3R178UoD",
  "key11": "368YZPzcGMqQhnBV3kdzgoLMHjtLF5oznLsjyRuFLBJcSJzMN9SfTEkwHo9yD2i2Kxp79uQDvNZE1FipfU5k2C8s",
  "key12": "3iVWMTHwyFPezT2eLTbe8wfmNtjeTyGMfKpQMNdrkrUA2dWQXr8NLg6ncT24dgZcQ3f6XYd8JPoYQrUsPG2V6Ejy",
  "key13": "5a5rWHCqjm9KGmNCVriY5AJTiFWKUcCjZ5iegQHYqPwtiTd8WApi1v7y3hGhJaQPuqXjGUnPcskvm92tFKqmbo9t",
  "key14": "5GH3vxBUC4MoYpgoAfaMbAVGhAiStD2BmrpBGpVE1LH1LSKbonhCX9QiAgguCoUFAuiLAJ4fyv1GpEtY2JPqap6V",
  "key15": "zAzD8rXq3XEC2MUyUS8Tb3e2gvLXoQaHSsqaUA3H4BBC8YHzry3Vusz7yPyqtyAmsvCzFicneBSRf6L2rhgvvFD",
  "key16": "4yVAJL1unQWDmSbeF2H1wvGgEiGD8uEhveDfJkzdVDvndzNFsENuGNJjU23qPo4hssxFvbrw7ZHqeDNquPaWi1aS",
  "key17": "2JCzWZuKkzRvyR5ugBvz2ipezgf2ovNWCE4CbqLBPYUonTULMgQ575kGSu4SJ5yQU5DRNVQnZcyb1DNiVT2SUMQM",
  "key18": "3reHEdo35pjU84DdzX9vLUehheum8Gk2QMBVdFQSt9sHuKUymzskBxUnafsrpQG7pwqLBHf9xFzKQHqPgRJo4M6J",
  "key19": "5fwK2EkP8tnwvkz8tBY2t1Dom1Kso37Ua85vJWx4fMeEZRpBWszUifTqFNWQyXPMCnqpTXw8M1LE7vwUcMbATuXP",
  "key20": "w5Ms11bppiStdo1eXTfd3PUkbsPpYcfWmEzra4RPdfusk91mCY5tD928GnjfW36iZjGWjn3GPHnvhpPReCpZyXE",
  "key21": "2jovCZCe4kewTe4uE1VY1URh5NYZtFTgV2tPiEV93AuCXSNBCcVGU1jdq5ZcpviUHVwfmuz9AWwp4EZ2cXfJctDu",
  "key22": "3F7wRizKTDF1x1v2suoxgcM21n1t3C7bMNbf24UdkAzJc7JdTL7dvivPBxsHjc6GHPndmJzHxQrfcjypikd6akmf",
  "key23": "3johUxWuk9NtrkqUFsT1vDd7Eo4R6Xwptq243zpWRs2aXp7F8nZdagaAKXBogg91w8GL2TsXXc4U9wCwyUnPfp3a",
  "key24": "3EfXowZnA9EpKUqkghE7gz3RjNC6gHaFffRTFJE1vzu4tPgjgi1TL3aDEaxkJuaaD58hfqNeZtpmQtz7GLY8aVzL",
  "key25": "3VBEmxKsxbzw81DR4PPDJ6Q6SyW3ykDtNKuayzzKD1ewg4o46toX1b5FNF5PiKQBD2zE2sNYies9BnTxvuS425qF",
  "key26": "pd8kMMhPctRUJkDLbseUoWvshnSEQuGtbNgQUowspehK9jDKnpN3QjjrzXTeBBSptweXWxTKyyPbwoDGHfetQsQ",
  "key27": "3TDsF79BxhvakuiGZ4jKpinpbeTWZBXrZLKW4pxd9hNqsUdSQwe1JHWCHkHYtC8Gogh5t5WzvNovAVgZ8DgLNrNJ",
  "key28": "2TsmgC9SbiJcJ9ChvCi7ZGgM2toz3Ywff1agQSAGfoU6K9XspqPzmdj5jzoVMsTNu41VF6VSSnZjqjA4ojsxxJT5",
  "key29": "2RCfEnEW44BQQhBdc4kjVPFkHEM8o26toABcnDe9yfMYfcNF9uafJLeZz1R7wLNZPdZVWUW34Sk3xhR6J18KoRqP",
  "key30": "3wMQgAZU3mkzvQu4UULWyjDcKKtrnmvJaAojGLWWfB9d4KoJnsnMpqaLowfXMUcf9w644Py514jch5kYpS32RWrm",
  "key31": "z14Ek3xyGX7rkbBoNXpQ9Qyo3yzvxL2paMQ1dyu2PLhfFY8AqpbQjhLznhSNxF7CUdPkdhjAToq6qxw3vwNqeM2",
  "key32": "2JvRgiSXXthMmEv1HzCaNLrbrWRULRNN4x3umBVqWiYV33sQcVXE6LYfdoRuBvoEkfcc3gKnFciQs2LMnjgZyU6G",
  "key33": "37k3j7dGDbRGEL2U8LNjYyARGYHwcHDwD7EGFqpv7dUgguJzHkACZmQCF8tpj76qBRvPXk4ZDHXzQwXWdwSbRVKy",
  "key34": "5FQBHQLxYt83rwZGuXS31W4XgpwmFFm887R34jPyJfN8KSac3FQ2E57tUi1fqvUffsC4KEyH4HP9ZPj8xjyLtdTB"
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
