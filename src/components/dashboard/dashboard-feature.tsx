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
    "58fiyNWgVQuRBFAPYifXeuXtfgUwoh6SRstf7oh4futyF4PtfsWkVktpqwxDZJ6XnKegasivtxMY6HfwUFhgSp1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PguP6EYZR47TkMXCX92nSQo5wApTqFVowPJLXtmaUybT738zf7ZK6HMybBiQcg9Xsf7SzSjCQkm16W4tiYXizq5",
  "key1": "4wwgBq23oXdLe5vVixEfaH38vHswoFVkfiAS2quJfiN3LGv1ZrZ6hjSys3uW9PSeqNFe5nQuzJRUcnJAH5AybHeq",
  "key2": "4zvgCQ2kUBUS4PdCWo6tUiWfgeQzUJxrCUVhs2RTpKz2wup7E5KDaQVKyRYLWZYAy6t5n5dBdWtfpLAZJhfLAQ1L",
  "key3": "3ovjpiBaFNwoNQYyAt6zBR5p33kFYxhbFJBFVkb6p4uvti71gRvsPFXppXEudxFR93Ef3j9TBe7SS14DpCNxgybU",
  "key4": "5JW3YBmkiPpwm5YFSK7YtRZW9MeKyHXCpsEayA3UCNEYSwM9RL2eHhR3NE7B7Dh2aYrrJE4avfAosk4BVpEjrJNa",
  "key5": "3bPvAhBfDvA1JquPcAKTrwb71pZmiKytfCzJtLsfmbH6GbjRcwZ3p1G4TngMjattojm89vi6NHBVpMkuz7Hqb3a1",
  "key6": "44bshSNEiMCRa1BQVAxTLFUsyAGcZnw9u34w9pqAJsBT5QzzGcgvy8HMyWtWN7ZdvZ71fwsZC5FUU7etyxUt5C15",
  "key7": "3RpnxdQe6qiRukvjroMEiywKqachX5nSFHw4QwRuy31CmjduW3r64RTG1xi1MAsTm7Z1mwRycTtJPcij4HQGDGsz",
  "key8": "4fawiLr6a681WDKhPr1jEgGWSGd4swZuer6mnpNhFtCo3q7AGaL5d9PJqCpJA5HqWbyL7cNU6u9rYaoAogPc5WRq",
  "key9": "61G6QF3B2FxA6LepHFyrH1sssDZA4wAB8FPWNUMertkpzVAoFDDQ8Ziwof1oAFf9ZY5FR8XULr6mEyrjCWiQKcuz",
  "key10": "4wxMQEH6ejYVdKGQ4cm37aZxr8UzVvb7gX4ozxHh92fwhbgwSEi7VGsujCGZS8nqFnaf7shFzjVMPdPDGZuy8VQC",
  "key11": "4TxgYEVMVkBPeE5QdRe81X5QqojvSS6hgjtqJwZKjcLE4WDgad63egx4svqYWxMrJoxzuZUqWhuCUxC6QbUruaAd",
  "key12": "D9fXhjyqLTsHAfuQ4yA7uAiXtrGnKJFhVBobanFB8Fx53C5cFSAfNKfB4QA5rQxgDKnAw8n1HJtLaBBap4oMToS",
  "key13": "4viihncFTWPrDHFiyqEfZiqoQXXJ8Yi1rdEpt4EfqNcqVuMfHMDhEvudcGBwXGFN5VtmrCuzZavExR9eVHW6JKtC",
  "key14": "4r1CBvfA4ZmNmJWZpVrZDbiosM5gtDrdNSsYcjoPU8njZoh8zGnip66n1geftvhsnhix9i8DfYL6fgEEqP2R3Xuh",
  "key15": "61KTwxx6DWrC3AUVZ14GNERdKpKeGTXX1aCJhprSe1rxArDDP2qvrXNrWsi34QWC3ojYvciiyG12L62LpH7yc5cU",
  "key16": "34aMe84Zo4jnPMtHdaECXY93ua3f553tt2FukrqMaX8RbJrfxzC2jKi41TzHi2yTnBm6wAwdEgY1a3nu7NMnKsMT",
  "key17": "597Ltyjfksc2gumPopxKAYhX3Nj9Hpu35hKR3VDhfS9ce22CnLggx6q92ZCE9MWmt9uuyr3Yo4HJhzUM5whjsuYj",
  "key18": "2cekRf1kx8kTQFHeCXFkuKJMLdcjGXP7zXaK4vMt4eBCd7vtQ3f4iGDsCWg5vkk6u6CsfFvirk9AuEhEBauVExUY",
  "key19": "ndkqtqqvZQ3WYnmb9AjNfgd5WLBBKvYeN2jRcXTMVzozHKEPZvYy3w2Y7dQMi1qreR1UX8z3ay6MN5NA5qsUT1B",
  "key20": "sS2RCETmbdREzGimhpQ4XZYdT4wAsRzsAoRG4beXfe1WFwV9siV15t8yuCrmyFyFYJ62DqEUzq8yvwMU9prFZ6v",
  "key21": "Xzt85tbKjzB5AjybsNqZWpMXFhKjNrCT6aAbCtEMGzvyFp3yiAckDALujWPAuAcPd3USWiomPe93PuTFq5QuGDh",
  "key22": "4dEiKpo7mVJhJpo47LtChhnQaHFTEPr8fVHYVyemvKk2r4qzqape66YEfSwdX6YhSbP83eo8rNRSds6Fu7VuNx7n",
  "key23": "2YemFitBHL74tmMJTidGL5qf1cHEjWhCNmcDeiEXEZiKkyLKCDLTd63uZHDWPJoGoDtucKvPX11B86AU7Wmj3VUo",
  "key24": "4dE53gPE12GVXVwnXu1BVDdS3yDw4bH23JgtT1pgvLe1VYe4iR7vk5tFhXt7XpLqfaDADkC1iDFfgJLVXXnwCSpB",
  "key25": "3p4d8E3n1iWEiaeBwMNn6LCmcWLoQzYPgpMiy6hy8nXu32BKWTgFyLPrbJ3khrKhW6AxanXZxQavDv5Vid93Qtwz",
  "key26": "5rUc32eE8oGbmqQm7dnDmCe2mtV7scotsz2CdLrBePpZ1bBgVSHX6cyGrhmUzVciwUagRZrnRa5qQxwQataBveNw",
  "key27": "vPis1PGybeP9DmTAktm8RBL9rYyZkWdrtkDjWmZKCitN7BxzLmoxyehPvStJzinrm4FaEGvREszA4dboCxVjQW8",
  "key28": "4CGAP1LRdWQoP3yeQ4N79ysMuvdQTZ5NKThdy5tCsKSQKYNCfM4QBChWj7jzxVSX2fY3rJ6w8jp5T1iDvGmtedSW",
  "key29": "C96LrCVeynoZNhPd3fvWhMVBePkeKJg3WadNnFF2A5xcF2ZEc8VyossBnbWQVPD9M3VzHBF2MYTtJgX1jjqMtzi",
  "key30": "4Moq9xVdwS86drT2QMFbMaAJiNdbDwVhHCrmRUmJTR75XqFe5d87TrUAY11c8ybqQ5SbFG7hA5HMMvx6YgFezvbn",
  "key31": "2SswkUdkrtXzBkv9o2fVzJP4VSPy8mE1Uz3HZett7khm6abF2sqK3KPo93YkXDr3Wve6ss2bABqrGQoKKQAxefgr",
  "key32": "5m2DjM1DPxhnphNXFqTBH5qq8oVGRCiNREz2f5JEvWSDHzm37NrP2Ewr8BGpKauHrERXN1Zh5MtWeo8WWJ4uCUeR",
  "key33": "YNg5ad7VxuZU7pDJqPtcp6sfFKgBWEMMxY5YUSfVnyHw9HW1zXoibzbokgNkbMdEX7aTArkb5WoHUz6seBu3YAz",
  "key34": "5fs77m4iF6EP9vReJqcngc3t2d9qAK62yaNxxYeFovDTxtWmvkN92pK7T6U4LKzFQqvqDhwMqVhSM4kFgJt6mUZJ",
  "key35": "2J9HCSKYJAZ3hpSn5DVLptB2d7AGfwcFBi7j7GSk2JMJXrgfyqUgAHUeMb9SPwWVRv8fhM2yB7JvHbi2sQWUGtkE",
  "key36": "46qkiuyFQSqWfD3apd4GygS1oK1L8RsSsmna33SUTwyY7DhFkgEkiTfd9dktPCkcuejAz4V9NWXPiyNfpAwADHNm",
  "key37": "4tQSCg9H4Hpzs96RdcxCfVpewqfyuF4tpBL5FkHAkegwDGWWCpUqgbhJetTvvHN2PnQBaHR8hKVNKiD7dAZtbun7",
  "key38": "2RdLsNGcREQo38wdgxrnZksq91eFckVdZhojp5Fkz9yakbnwg1jFY4zk59A78pewbymdCXPG6XqC6zvShhbrPK8G",
  "key39": "3Y6YLnfiSCcUfS99qHmVEYCJXVjrjSkmFL7GR9BUEzzbXYiFATSyL9dyGtpEeX7JxfNNyCxBFjW4BUEgwMsfr9fk",
  "key40": "go8WF2ZktUrofBHCfKdzESc4J8emVX9cDDjVFknf51bTQUF5HKYKwAWi36BNa6ERWgus7LXL3tHitNVov1zfUDs"
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
