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
    "4AVCokqrj1xfHRRjzwECiZTaGoCrkAgizsXNEq1Dus29bvaP3Sak99wWR33dHomrMs6fJT5aZv4Bau1PMqqxWpkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRvJ5uc6gNCrcua9i5QQ7T2FYCpDaAik9R6YZz1H65sib1FcswboiwvGF5JaiqY3gjY6UKiPgcSrHAEzg5mkwmz",
  "key1": "eA5BuaRmXAXtsL2kaRMi9Nx4hjRGdyRnvL83XgmEfwaLeiDzySgpfaSi5HaR5NS2GLqCRRKzXwYzC1TPm1rEpNu",
  "key2": "4mnJFKAWb6YpTAyVWwd1mQakgFVKxL9kqwnoAkyXozSBysAEr2yC4D4ndGqXsDxR46R8xAkUaVnk6Ju5ZN5cr9LH",
  "key3": "28XxmH3k3po46f5iqQDdnzAWuVsSnQaayAEE3diPnWGnogePpjczgraqzFiDFC17EsG5VD9MC8zGsWBVNbP1WrUz",
  "key4": "3r21cqrgw4nvACw5eD7gchJNQgupLKCcrkKdioqd3sPsieZH3eD6wwMFsgL2B1bZ4QsnFsvP27Tftr23oeQJXLSL",
  "key5": "5Sw2itKpaQeXvvsyZJQQMJDGTGxA27jPxeso7f7vGos44QdnLYiDeGHTgayJNjofvTPCTowjJXDKGEjSYGJzuDBP",
  "key6": "32BGPvYJaRReC95ZeYjUqcH1fXFRnbD9sZ74UpiLfwYwDKB43vQvTaiy8PMRqsvwzJCsnuqWVnyJs8CajKwqZGWc",
  "key7": "3Rhc3ipqeqmjs1jjgnFaAh3aSAe5WcfUE1Z71DWLrmPkV6SXi8eZQYmLq1JSxvxHB85gywWkBy5G54721XxrqqQx",
  "key8": "4wMG5uPW9Fsa9wgHgpHHbXDtLBvjS2uSRBw8b8Y9WwYGFhVjXgB9udqHaVkyrCvdu8VeEGRL8PCWDconbixYKMzM",
  "key9": "2mWw8w4Y8kbQtNHH5sGK1VMmBBa5oFoeBaiQNXMWvKegkujzsTrjUu5xaHSMQ6oyTA1BryNaeE8s3S3b1q31p3pM",
  "key10": "2JvnACeaGsU2QuGAuw2yCrMbc9dugowm3kGV2xgv8mrJjGp8oSfsuBTCySX4WsfXtskmejMMo5SdgPEdYFs288yi",
  "key11": "5iqCgDifUw7yY8J9EfiQqRJLgqbveqd8PfM83Ryi9rspNtqb7UCBBnRV4tLYtpoTx8J4yujFFhTSCHwS8s9FBor4",
  "key12": "2MoRrC96mXLbmUYRyCkgmHtCLL9Y2jZLrZw14oKrJRKPVFUHoE1pddenY55aeFF2DNvQqWy9u9PdtnAkjcn4g8A1",
  "key13": "4tZqy6uKDHaQK9p7fbzNgDDrjQHPGZmNLsxmuuPpNavBk7WRoyH1ZV4g1BBj6CNhTjHTB41eavrrrGxzyCSFUtbE",
  "key14": "6vvvjHA257oJkpcqc9NspD5AdMZc9c4MjNTcTvG5qCETJtqDAajCc8LS7p5uTS5E8xxvv47U87gXz2hnCdq7frZ",
  "key15": "3KNHJAzniayHxs5aKezxRbnCjQHN8GvV3zb1BYrHJ3Zv4yicTub9zbtkz8obP29xhtDZ4hja4RdguKxN4rimpMEV",
  "key16": "ybvJ3WeKwkoaveXLu39ba6T3tNWZz6RoWV4VXrfGxyZ4dAhQJsdLxTgZCKB3dq3N3dYpLVR3GhyPADSJ3BXLtRi",
  "key17": "49vh4Xh4VANsjPr4uLaGatYvDJbtDG2wZUeTXnqM2XKLTijD8n9Hb2LQUJBM2SyRzaiLD7Mix4qDMyyCKfN8cc7a",
  "key18": "kU6Knqr5VHvn35653Wti48wKQbvs5gtbkih97ggtBX4AGVxY5m377R7djfgPC2RKoeCDMe5E3fnsT1jurwPkaDv",
  "key19": "5SsadLgwaAxgTF1PV3Ewm37z4tK8F58mnKMn4AUTD3jdkQMrVLyLBGFLf2K5WQ8q6t8CmJTHkVKL18w2LFpZArz8",
  "key20": "5L2oAvFuooCWhU2mjGw2mYP1MfNjV5MTU5rUz5GkraG4AEc1ywVjFibiRT3o3vAmZb9kc8Tcf8CU1vHrswRuj56J",
  "key21": "3caLRCPB6YYQm5mF8eaKApqXBnZ6sBM7SdE5msiZM7kF6DrnH2jFMtwRvDxdALqD3FcZiADYEpByfbfyr8y9Qsk9",
  "key22": "2MndonqkBAKPmEZXGhwuSEf6c5uneeCB2A8wcQiAiYDdXGP8d4mx3Zy393dnwFyi58zotfui8iFG1kSjcpuEB56S",
  "key23": "S2SxNLoj9ahFD4i8qdKGQ8MC62sEnwSTEgPLujCd28ovTRCALBoVspEovLUAq3oV4VoBkhG6byUia24dgigHori",
  "key24": "wnCznxLvrf3KPsDYTusjAExj2KxYuYrtxwevriLzcSyQyKfNhpBHVp3NZcKSqWYikbyyMdHWN69SZGighUTYgts",
  "key25": "2NAvEZSxxkvWZWtT3DuwjoCGLumgi9ct1rYURaAriuRK3q1Mf2sK5qweMxntmRQ4zupNYcNCQqtFKk7YV3huL19S",
  "key26": "5qNBgRGF9mKHfZcNCjuuZH3Lj2nGbp5e6ktcP7UqTMt7pZYBH246pikGS5oPihhn1i8HtM2zJXqsyzQ3MtjzJf7J",
  "key27": "4b9oAmkiLaXxS2wahoHi4PCpH13prYg8eLDLGxMeSstd33a9LQy312kqTAn2GBpjxLPhKN6MkRTmw6azy79M21oD",
  "key28": "2RfcqYgY3oXddzRe9DGNteospiBvCgdvDjuWmzsSJ6fZfz8VJQYJFNSaazvoZQfQTtBErc7Gr7DYs86cy6jAjxUn"
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
