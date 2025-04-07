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
    "5Ld7S6L8yAdUFzCEq52BY9XSkwoWhgNr3ufwFk1BchnqtKW25GZ6oaW8DkKNhYLybsWovQHmmPb2ss9iy8R46qod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DzJdfH13P4y16zjZw9ao5mADq2zMLxVEe6v6UWdkZTW87bZ7EYU4d7xUp7NsxSyFGjZT3noL8HC1pp1BcVAqHJ",
  "key1": "5jfHXxbKtzwm9R9oRpT8SAj6PBxUdgnAu3nweKsKBEmTgirfwhsvGYmL6n1brzCgmbTtnkJDrDp2EzrWEQa3D1r5",
  "key2": "EKF9Kg9jQhmbTGZxkS9Mrd2hyxpknBKHNfKn5sdCbPASk9La4BKPKqW2J6gwAjTjwjD1eCeCypjn9P6dJQVPErD",
  "key3": "qfTUGdGhej98AZXoGDN2eNJ3pmnLYAqaGghLCqj6rvGwyobAyCd9JN5Mm2HcuTArdHfaBYHE77FKV3noKcNtooQ",
  "key4": "4eRHs7upYTaPJaeDJmBB4ChFJkWk7fNaMuugC9CwUtnStc6U78Vp48QvBj3vn6hcZPhtyarBAFVgCz8zPc9phmdD",
  "key5": "3ADaoCZJmgz4Xidzk8hbw6jE1J7UACsKYMnsdGKV98SsEfyJMp75eCw1VxNbdwtF3h35K8qkCCw388MzBhhT7NnT",
  "key6": "3vgoH3PNNNBKgvRRqHgKDCrPpZN5RMkLNdfNGNSN6BJKwgdz83sHu3RHpkTiYnEKhBsJJRaKdYNGDvRmDjdnYZAf",
  "key7": "vaZwPJL89L1hTjjzHgh2Mmr5NQVVRgM5wdYi4Rq3D7aYwDQxfZRvWg99tBpsR8uHH8hSDxS7CcEhfyTt6J5tp1A",
  "key8": "42hptScaLoneAsWPRe3Qh818LbH2JJo4we5PpnchjdQmrmE2gzTsjHLdyx5mv2TEX48WPa4DU31Lm7b34vYeLGzR",
  "key9": "5ioLPuqSW9jsbPG2JShhhb9dm5TAu2wE5asNnzWXRxHSrKigE86f6TquYMqw6Dvg1iormkhUi7Tui3V1JbJJJ6Hz",
  "key10": "98sWAYjVvrCBPpABxFuv8ty21KPjU1c6BGmtwxDJJiD4X5TSbwy4yWUKQusto5LH5U9p1n96TzQd644dTRgG3Nx",
  "key11": "5Z6M3DweMWWaTrh8vTMUtDrn5kWkKwUEPfsZMyaCJUJVBpeDvntNd8W2HagmoieHNzrQcJFkNjSHTiCQWfqRR5Z2",
  "key12": "61b64VgsW1EPMxQAJw8HYgFDCRMsciE2RHd6ytarLqD74QqSXrqdmC3tPPpjiybTfoPfcWTguZGGjnyStMrnkUrz",
  "key13": "4XKMKTTGBHLQgZPGsTPBw7F9gG76yzPUrHNXz6T3Q1U4z2itV6Kyu52BNi3zTRoCeA3oB8b2Uk3Zovi1eoHkThbq",
  "key14": "2n7Kgqc4aVrtNmD1ndgeaSJE2znmQ9qaC3jQuY2oSKwM45zUmWYoxKG1Cnw1EiDd4xPzU48VDm1LTMz2G7P1xE9q",
  "key15": "gBfKMPu1V3kRyA28XbmGA4esQKffWYC6pXSrPeAqmHC7sKvfmHaYYXME31Lq5ssthZd5AWJF1pu2ZVkMqmDzGh6",
  "key16": "jQ8YRiP6AmkheopKDDugScSFCaSJQFZxPesZ6cf6S65XECE6Z619jhLbYJW294x8cw2GtvhJkjZqmSzYbcuxreC",
  "key17": "4Ko6hpp9PEZQawpwLMnive5ZvSmpgbTLLrnNBxJucYnUGakFmNFAbBgx5bsY4dfcsR2dvxUisqR8H8uS11rNQNu1",
  "key18": "27K5E6vSWAcR75MzB5U8KZLXGo1VtWVhbS4KxUZ6hGUQiGPRs8EdqxkZNNisRWaWDc2LXax27G1WwTShjrDGxwce",
  "key19": "44w2mkXM8nqMm2Gb7oc9We5KLknbMgc7iT91itt7PFmE8hkHptMn5rpWJFHiAzPBioUeVN6xJ431MpbRg1Bu44ZV",
  "key20": "3jr3WFR67eCEnTYTVMjbKJskVuWv6yamSoNhv56mZW4KH1kWKTu9p4yWrnMZtuXiyLJUiMzF1jUHiBGUiy8yJvTX",
  "key21": "3cKkfBduZWTcD3tqX9VMN2zqF71mfKZTYy882EB6oJGyBd7s7jC6c1fHecUTpgkCP1smaVxDq4aXutDxJpYzkEuy",
  "key22": "DKuQJgty6qheeKafoxxBxDysHqU4Y7g1FHJVGpXeuMjM5QFZQdAt78H2mLtcwQengsvszQm1yEfgeL8yN8Bjusq",
  "key23": "EyfmLxbuS8az2gHUBfttz1cmSCQKMf34vkmhjjt2i1Dgu3c1vEb538MFTgnjuMKDhcbQpcGYcMQd9LhSMJUq7Zw",
  "key24": "DP1goDVYyemzAqmeGVPbDewaf5cqBxqhwH3e5vd4kjm53vZuVWTbHgwk234X67zd8UZrbr852Kf5FBiQriTah8r",
  "key25": "5AADXcMApDhKv24rZn1bBEBbsKox56zgjUdfpbHvnPV1SMNX2FtK7HgceVMPkKiGJZfRpuJpV7p3Nqr8SrWfFr7V",
  "key26": "2qR8tLbe42zofvCrBC6jEd4EBtTQbfdS388KyN6HR4D9uu8nMhiDnWvBJZqJ5h9zif7TAt7ajwxinXRkSQfRxr7D",
  "key27": "5cy2oZY3q3cRzVGpK8hEQhb8hP7nUB5p5N2ChwXSVsftHHhWM8L6fgYht7yUdLsEv4HcLbXNGryQa6jZzfUXjPme",
  "key28": "ELCDzyYEsUpBSxRCbpNmmtJGpKk8FZybyBs9MdhBo2pGeEpEZEGxfnPvoywggn8eSkX5n9UttjyPsUsTB1CVvZm",
  "key29": "4hi9Q6iHzbXUkWR5VWWLbC7Be4khFaRHW4KDmaYTfHwKXPx8U1MihjZJd2eYqRvb6EmdH2GnQgmrHVtmags6n4R8",
  "key30": "4Canwpiw7sLJZGUkSbF7VcHgSP3Y8dDRd1YPUfoXinQN3Lc9S7y7H7auXuYjJMqKe31TC5ZSBCQw7owVBtCsHawP",
  "key31": "7LcxhXCNrbvtHs1CBG8cpxBR8jyUtAdp694V4p65ow4tYCvMbuEYPKvgEHJyxWSXgRAfSMqZK1Pa8AVXnF7b7kv"
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
