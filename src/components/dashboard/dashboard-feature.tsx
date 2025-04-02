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
    "5xKffvtsG2dP4d1sEzFHRNncA3UYHQeV12VsUbu9oyRrczKA4K4mWc8bzr9wEozu24qJPsYoumVV2BdWyuMNHy3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wrwAthNKon5iSXLQfazWJYkbRqcixob6JritoZcryCNWmVyZhiWPFDvCVp31SmLaesuvGHGYkDBJUK9vkj5VHy7",
  "key1": "3JpgwJ6aRq2nP9ke2CWv86fwgNWXE5o1fD6geWTs3KmfjAfHQU1VnZNJr5Jvs64BY6j3Rf9ZM4Jx7t8Lq2jDXkqf",
  "key2": "2x6TWWvPnJMUprhc19t2XiRbDnYx587KzgMVzYPMcRsR3Vg6Q1HTVR1iaE1QarZETFKdcSwZ8QiX97VESsfiyMwS",
  "key3": "3ygQeVFsVaVqVv6QKhzGDWcJhKVZn3GaaaMycB9jdaytbRpsALcZ8sHkPPzMStxjp5rcGvqjhyaiCv7zEPrUtjxm",
  "key4": "4iHcE7bVPHvJG9jNapi8dZwr1bZBg1LBYsg18nuzp6iTJcrqy1achVdZyaHHwLS8LmcykgZY1HXLv96bJLez4mBb",
  "key5": "3fjCNfmXN2KYhb6gvZ6A2pCyp6WBetRPLSixJ1eYVeEy5jkaYrvfpHqvY3Kpi8pD95u3DRPqdRkCqfbK31soWQ92",
  "key6": "4NppEf2jsyXo8mpQss1UBoqbd5GSzAbbUKcvnZVxuyXSnhLU1HzfBoiezK8LsHszf3y4Sag6Du9WEEAhn5QgMhvc",
  "key7": "3yJAqEsM9Z1WnNyFzhxwrcLJHTuTRhvXt9UJvfReVB8zrCXTQPsR5MCSXoLTQFNm3oPpcCzwVffM3gcAcaTAkFv1",
  "key8": "4bpxyNYYJomCaTtZv83K3KWCsWUWHz9hW3uVQTqAk2gZ59eAvWTDgFqHZA44eNoFGESFGTvCzXJ8UnHT6yCYT48y",
  "key9": "3sCk5EUZNB8FZWqsPNmiNpTUGvtkDujnf9uG1SiKskCvCUnSL8fnNSKgZGmtSJ7qNxzQtLJqwJ71SJGG1rK62BLe",
  "key10": "tdmmpEAFqyAsxaxAyj6tr88QujCMkRkxGx7nvr7THYsiPFadntWRukttsDQmuAKEBzFtBwUG9ceroTymg5Tjyws",
  "key11": "iG3ej4NBqqk5stQuXZKYx4yAQ8qhRGgd1MiYjMYJ3cnCgjEaH8qyBnG4HBQhV5vzQFtGfGUXoxBVs2jS4RuN4Xd",
  "key12": "5piLf1C5m1AKqhXS8GQ9PQtr6vdReJA1cNHP8cVjoWDobvTSUVassURZjmTMSqWbBTMRoDPFhw1tYaUqph8nW5un",
  "key13": "3eQY2wQhxevYdAYJFv76D74dBaE7FYpAsmcszFLyt5YMuERvUhdbFdTtwywa9TJtzDVAvCeWQiiq8Rxx3wAWSCaG",
  "key14": "5dY4j3CMc3BZtzUvnmK8qqBXB5JrsKQawybA61DZinRVKtphpbQiBnME8dY8ZQvUatHYAkykSHSJCwm2Hzn3hCNy",
  "key15": "MGsUBdBtEFAkpKacccCM4Dp3MQTikawdUzbhQpnBnMipFZ7Rq9cay9ZziBmRQ277HVti7F4SkAAtAKj1RD4PYpt",
  "key16": "2MhJkmSy7bgFdf4c3uh3aXTzV7cyVmph1jgwpKF9y7EsFhRa2Msk9KgykXxttZsHqwH8k8SVKv2c6t5PrvX8gABn",
  "key17": "5kj9KWc1sSC7XCofBoj3Py5LyB5XHKWqs4ku4GbZjyVRsaAx8aMFyG6WDi1tp2eaTx5LsoyuMoDKvKyksarB31m7",
  "key18": "3SWGGyjcg8Saq5BAYiQxk4fF59Dyx6eh7PpfQP61EXmjRGMJcb1r8iEGDLrwYM9EZDhgAyknqEMVKbwGcd6NxNc5",
  "key19": "2gjZSE5rxB5kfdvpzqVqZpgQT6QpgPkSPs7nseYD9CvWfqnXphpAwuvaFfVWd8Z3qY1V2Tz4Z8rs21ksKCsNLzT",
  "key20": "ozBHbwB56WBQk7Nk8BC4FgwbaoMkjS7QYbcSFta7rARMfbpQABa7vsDuZjbATrJVe9ghLgvDVtJvwkx6LrYpopa",
  "key21": "4r3gmSzrrM4HzN9czgYhEik8iW8G3kECfATqZLz4aGChHBxLsrsSUsxzhcmigfmPVY2HmAQzL1Tpf4Tak7kEky5G",
  "key22": "2yrHyej7QiBrtpkVUXufAZpmUH8dpgdBaFxss2FjmbKsBESBXwK9LgUR1be8sFCWsXRAZXMD7w6xBbdPmmKhRPP1",
  "key23": "5cSbr2guaajo1J5txZ4bysMKaN6U6g3EUm9QX4aaitFh7ExwVCfrzCqP63toJn4SRAJdVTkzzRpHrJ311YwyDEmm",
  "key24": "47MRx1iSkgBjvhYjyQBi1Ys4tW1fVbBvRw8magFPxSZmnVPDZYPdSKaEVjzzUpuuusm2u4Lg5cZctaYorspqT8HN",
  "key25": "gUEo1WXkgiqG6mk3mqLAsfUJHpmDcfnh4Vf5feqt2XURcNFrS2mpLDePsoHpeMGZS8P26a2bxRMyfAtGEVuxrS4",
  "key26": "4gtLEPaWxRvo53rjXCiBkWba6S26UyabTA6DsJzoobbyWexxZvF1Lu2yDQmD67qz57sGztHuXEAN38axn1Jgp49R",
  "key27": "3CP4pASJooYFRuQtwiJsbqpqNLksESaeBystQiPJp8r54bee4xMhyDdnpgZ8KdSgnnoEuJDy8MyotPN2h6ddQ5oQ",
  "key28": "VTXQvT9qWXvdTfaGWbGxcHFW1wREzaALc8qyDmzvECKH3mNZWXXZD8LH7E4ZzGb4T5uf77Spnp3pwesyfBngY13",
  "key29": "5UyKZHLYMdvuSvtjKaDPc7QBddRKhbNwF6311z1SH8fXbtTZDHvDJTsN6AutHjF2TPT2VbUgL1zhmR96o2kdjMQt",
  "key30": "bCvsugTG8Lkv5NdVFpa7iAFrGGtDFxxyN5YftSpfYdu3cAUTZiV4dGjPokPfjBXWr4HiHejbFErxBWqp9USK1qv",
  "key31": "23Vaj8GBt5uGKpjf3MsDU412agtqJCWpBUe9wBcoBfMeKbioo7PRDwjwb7HfUyR2BfFrziccLzaAnETq5bSDhudB",
  "key32": "2hVRpJtgKH2AARA5TnztWYmg1toEiiRxHRa6QHL7K5ssyMxW43hNYN8nKU84UMRsdtUfij6x4QX27bQdcTg4jdbz",
  "key33": "3Lr9YpK5fKnPyGuPN8erohxyx5fJDEm5QZrQii2Xufue2vmQHUXxdqLUtsR8gWy3NLue873dDoHUV4BY3qYSwm2p",
  "key34": "4sQp4ANRgxuGRzUPjThyUJTZgWMYhnzjJNqAdShV1PMU96SUGPL2TqF5n6hYiawQEK9w7TFZe32fXxuUsM7yWqc9",
  "key35": "3JBJsCxw8FNNCHqSCmqgvkjm8PSWSKzBNA1fyLwPPrwaPvmDHrK9iv2rtVEsCj2Ma22EuhcbgQAgTnNXUGyCBjMF",
  "key36": "5EJndR9og87Zc6ZebrfXreX6yZzZM7M5b46JA5wNs7sSgf4AD3CDZGAAe5a1xkHSyDQtLokgDX7s8Lj8NiDSxrLC",
  "key37": "2V87AZJgrMeqSohcsr9z5Mp6YsikB9gnhordijMWi9QyLaCdn1VybF1BCKAaPqiDyAkFxeV4Utj6BpABmtpnn7eo",
  "key38": "39Sbtqp9axuy8VqiPnTVLCkvBbubXViUZfEJqCxJXmcWEDWLT7YKEYJJAxkpyrYsDpcK4p23PeQS4VWmbUjeAa6n",
  "key39": "7vxP8ckkFuiDC8Sdwrcu3paCpfHHLo8UyWpvj3nDkFrKoW7YTfNg4EQuNtDJoxfndjhae3Yujqm2QMzeoU3fMUe",
  "key40": "5WvX5ETZmSgfAs8VCxvf8UUH3sF6oNPtUcVjkdTfZT2WkcnVfyhby9dq7sfyCSDPCrS3JD222mYRYiR14gJsaiHC",
  "key41": "4nbozi5hRkjfaBfaUeXsSmfkQgDzPViBmmNMnALFmhjFtxiXkCUtFsDmdgUQMSyKn9VpApqR7qDkLPoVrsYeXjv6",
  "key42": "24it4D5jnwr9f5fm4kTDf1dm6p6vBxtc3ipLVMAFXqVhevTtxgZmYpQH37xe7cPLthsJF3aHcBjYNhENGjQT3Bd4",
  "key43": "3MG3VS9FV3CSJPNgVfu3XYy4GbbNvEp53zeDxqwJ8sSZBPgXSha5vcgksGksQQz2uZPxheYvrEkB7bSKtEwmN89Y"
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
