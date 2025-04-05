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
    "3NBCuju2epMuNUJTPhP1qYnJivEcQK9TEXmbmTrw3RZ9sTdKGQ6S6TJQDy8fyMAag6Xu2J5r7giPKoT3FicnetvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNpJp15dKdtXe1pvmmZmokEZuhyny5r9KjZ5NUqwfgYDW9fukMD3xVq8grRiWy2ARhRz9U6QwL28SajASfV2C2H",
  "key1": "wth9x574pV5UA5zoD3j5b7JiwVvzfSjZEm8osw9nuWipggdLcRPnFj2fiq6D98BuCiMRj5wNW8KzyheuAqSv1Z3",
  "key2": "5gtvz72iQwQrs6ipeYu462EtePJD1KTamABkC7ie885pyLPdjrWiySF54qpqohoWfBHDad1fc4MPUqWSxpQKDkuq",
  "key3": "2oaviE7J5QhyRrPGi2ue4Zj8dDVMk8yKRLZfVXKVKWrPR5sZjkbeLAdBsvz3bHM7mEM31hWZqSDzkoTVpAvdWxGm",
  "key4": "2kTezujxENM7pcKyAXmN87hBnAVzuZCzqdGvZNyYjLm325xiCvt9uKFVUEj3SQ5Vexx4uqN8cDWR3bQaWcxaNArS",
  "key5": "2KVih3Lqn4iC9egSy8No6mm2RqNyxYhTgFXKoXQkMvjKuUHKaHfmvX7yexDPQqt4CcH4HEFnoJQe2RGKKMfo6Agb",
  "key6": "3XWXSWv7Vizgjg7MCALeHXN5BxA7bwFumqRAbB1Bbjnpqpy1FbrxzQcBaBpMZqJgwddT5ofhcAq8SdvoUoS9gYXT",
  "key7": "3FbJqq1Vv6mn1BM1EiR3PPS132jy1SjStavVC3hX196RtQPb6Uke2WWE6pTMqERLrcxC5fyRKQ4AU1QYU1Ur9jrx",
  "key8": "2MoQirqzp1AegLrj9q3pgm8S2QXUK18NZvbs7yrAcqdZUnzy3yxKtoAuLTwxhQFA1QZHciwCss7DTh7xh3Bdsu13",
  "key9": "2kznLq54M8TKQsU9RmARPDcyFyp35EJCknRzsfTTf7pZY5kdKLuoAePAsBAMR4TXurMNZVFVkkxsVctgrWudBZ44",
  "key10": "4M1CxxuAcVpvzNT6NRumbZ8mvnnm383gdozEFcVEKe2PMvuxDo7TJR3ys4GoGfA1sLthcqAu7KmoLNtkuRujRwr9",
  "key11": "2i5TG2WAHfFbrnn5DYnYatEkccPbXYd9JpvTrnT5VVJfUTZtGYuagrph4r2rKsidxcXFy6ySL6hurSqZibBfH9o5",
  "key12": "4e5x1aPJ9MJwM9iFHYnun86YsotRJ4urZZwfQnTMBFaRthsKzNM6ZMgwnXSe6pLxkEotBEui1obAwVNfDFPJ5F1f",
  "key13": "KnXrHyUEhkCvBUqZb9HsjRdbAopLHQAqK2ASGxg9gjZKfspJJzm9yh1K8tyQxwD5ufH9oxNAS8obEhVQVZuVuHY",
  "key14": "5XbVi774Hsco6FfDtqvkKjq4yhgf9ynP2icstVMZGV2geKUCkLuMcCCyPiyZZ1N7mwFRuKQGRDkqiWfyoDDsnGC",
  "key15": "3GQDRsrAd4JDcY4NyxdKEjfESgPtUaJ32EKyLizAny6x2Hn7iobyaHykDiNwZ4KRoVRbQmyhH5B2zg6LK8TD4VCX",
  "key16": "3bCiNLNv3MQsyQjeTR4NKh5XmULkDQc1Y5dLZESAJNKaCFoxhToporPAaQbXHh9m2gUiBD4YS1wUnCHJv1TBnfuA",
  "key17": "4BLZxU6xn4Vcei2LcvYvt2AkHwxMS5Lsi31JboNDhvbRo7LCaCfeY9e2du8vx3uz1SZqdjE15Dei2bbm4vSLCAbR",
  "key18": "5N74HSVuKmABjh4aBEmJgPit11tpj5ywWWP1EZdTknZcuMMW325s4zExYiNZJJ8fBX12A31WwWLKy9VTQB6TWqZZ",
  "key19": "5jjXWXh8Qon9pPUunrdczrkiHPTtCdSkWDgzVPHwHZFBrZH8EMjVAVVNSs3Qzmde6L7D65jjg5YnDrdrfb5FuiTH",
  "key20": "3hipUNwWWbzpJWMEW9yTkyjLep47h2hKPbTbzPipGdyyshA4J4EDbmZb77AkxJPriGHYQgeu2H2j8Y7vkrezf8hu",
  "key21": "3Vhub263E1QSDw8TRSE5S26wC9mGGFHexqdmB4VVYR3X5phHwmfNcccPt48EcUSwYSw7ZMRjZzKSDgHB6wTPCxQe",
  "key22": "sVvMpKfxxQLkwXkbWM4PrPvQUCfR78ktpgHQdJ7dxcMAWPRxy45aAn7ZpywoAYfnzZ5pRxivw4GoA5YEBH4DYRK",
  "key23": "3SFH53cKSDY4wH2RFrzpG6kmAzutwSib2LKhMTU8mPRbwEAZk5Y7NfPAg1cUQc5npepC8U4hnWcUBJX4pPa5piQM",
  "key24": "3o4A7gQwJMQUMKFCan4pTSfKQ3JQTbzPWq6FhqD9evYxYK3M16bca5toqEMuoYPLeKSiz966fj528iBsQ6yqmoSs",
  "key25": "2CQNNJg7sZC37182URrT45zncY9TGisuhJoVFopb2xK67UudX5r2Czwn7tJ3eueS8aSXpb9n4aFgKp3CnmhYfFxg",
  "key26": "4rVhSgwtuaDnb5hTEDX813LbTuzGoesNNMWcsdn9hpxvK6oUH2GWi8rWJWQnMK2Pdf7imRFjJEgsEcYaTrCd4imt",
  "key27": "4VeHQrhKKJ1mAogWKSRM9eucH9YDqwihCrj7CM1C478sirU1fAqt1rWeYFwekWk37jBHqXis4peJg4ppJThv6T1b",
  "key28": "5dV2uEqhrLSKPCL1j4FqN2apVdHEiBaD92PvTNnAfq9ijNZXoVU7LyeJeq6suEdEHC6xj7yD8QyK558zLnzmRUne",
  "key29": "3NGSNeaq8RkbmzcVaEWyieeNsuLzfddja49QA47ygxxWxukroQcuEtbtRkxmZRVTqWHcmCSHdhNEhDefSKfZZ4Nt",
  "key30": "3HxBMkRLpXQ8KZHDrWmmKo9bXd7qhVfiipLpWiHdTN7PziUuYcmDbezCj5BAmF4mtoSDGnBuhozJURBybCknkqsg",
  "key31": "3YD3e92oeUBMdP128q7sgY1TXTNPai4GjZDpEXv3B9b6nknQAMw1AiqvMZ2CmZk454UE2fEmW3pjGpdPdLwtWFnV",
  "key32": "2Vdt9guGkY383VmyBACLaSNvceJZXVJvM7p2YSoGthZrLR1BcK8VhsJgrBC7tEADwDNbEkVqUgde4Uwuqpk9L3Km",
  "key33": "2FEADB8qTV4b8dypd7kiWP3Se2upv4XAZCTSr2RwVN5U3uwGRrNfvHFWgtdb4Q2BMkEZCqYEZTJj6Cq1sSiJUHGk",
  "key34": "4kzLv72fbUWfNYNHaxxBtnmouQumAd1mwfjbUuzXG3X8xdikCD1yyWhaL7dwyPM1i2FLp8qvHrh2ZzJvrh4ZvZiv",
  "key35": "LQgrUPLUWhdAKmpDuHKSRuuWN6Kh7QWiVdmYDirZeDxMpvgEwbgccEFEPpB7qWfpNekAdHQRvkbqGQaS78WUYVL",
  "key36": "2CNfnqsrJ9qaNiS5nx5yxPWm1KXGRACuXza86R8TRpiPvk9WJ9bwiRaWV3wPWfUH255hQg3FxjUjbduc8yGjnX7h",
  "key37": "2giux5TJn3LP5DKv2nAvsAtYREvZYq3aonZtaxDzKkwW9AfgXrtvPRCcsKij4j7tUrtAqk85HQWDqUR1BqBXptKW",
  "key38": "47Hdyv1ksVQVnfiQVFrhXfumRNJ9ZJi3FgvB7NR2r6p8FivFqw97Exe7xR7a1h7ziPHz8X5DAFumF92eFB7hzBAb",
  "key39": "VxygeHtVWiMf1jrd7mZq6N5PdKN1gHv36s7xr5uxfanpgMPPHxjjwFKMyH3FzqQ6LSp2CqfUQpci79ooH5ehovr"
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
