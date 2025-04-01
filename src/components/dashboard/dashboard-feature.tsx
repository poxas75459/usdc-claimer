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
    "4Qm2VFQq2miaXV8e9SU7tczdBYLAxhTv35im1NpPGWRVExaQMKWs1MVMVE95XmLqH1rHUe9utdRpxLsiWE17T9vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXzrkGnfg7SJFG7Ed4dXVtKPUHfw8XZiRaF7GeEWFbKyviYQKfpXry9QnngWJ5aupL4ym5CgotuVyoPgUUpeC5D",
  "key1": "3cmY5qGJQBVXfGR7s9kAYyrWwcRf4aGPJiCSbnG43PzTHj8E5YxPZkc8yCcDJVf96hnxiNS7LkPnE4YwrJez7VtU",
  "key2": "3KFoi21VGnzWGQYEZPNjgewdc2qtuBAMv4uMgJszrPY2bLorbKzGBCotagSFU9zFaLKsKQnPQn68mK93xM7vyv9T",
  "key3": "5Do4f4SzrXJVi3zQU9CJiTBKMGhjgQMWwgGHvTAeMSX9Kkvojw8CZdo3cd5kKTymVkJo4by2GxGUm88LgZ82vZAA",
  "key4": "46Eoj39dgQkdbimc3Q4p5fWqnGRySLcQP7RMrQ7kqX9abUTJHhCfQVjVShs75QPNWQdoFtrG6NJuqfiMxG13tacu",
  "key5": "2UjpQZmqEZE6zcFCFDzG79zKC8S1BQ59mzGsKM4tHz7mzDKPbi3zEFS2xqtQ8Uw6N23u1oCyu7MGokhuw64jLzv8",
  "key6": "567mAzuzoBmbSQFjGd4UahrMhURSPjGaW1kU49kwwFJoG5K3FpdFWQ2MVjHsYH2pMJj1KsenHfDn56VyBhqndxv7",
  "key7": "628tjm7cqNTVXp6XWUXHGUGcfKpDTqM17ULqWPiiyz5Ga3sgKWmy14iHMoA73UkdhzosVRGxm5iGfdyRfMDM4fVt",
  "key8": "2Em3tog4FrwEnC8m7eKoxk6p8i4t1mU8JwYPECGAV5wojB3MaNh76uaGURQvvTtCexfgoww3RHjzj9JSreyYVTnG",
  "key9": "XaCCxZ7K1FJT7whiCfX9THL61rjcaXhR4SzfWzQT8uWkiFXe9YntD78Pq9b6ANL6BuQ5dz4GsVEgrpvbjCGqxZM",
  "key10": "5avuZnQRj6P1Fp98VCa8cPBAySwQyhGDN4GJo9MfT54JFK7K5XJXcgaDn3Picf2Wx6bBCjiU5Zy5GWFvXVVhX3Xq",
  "key11": "4JxneeVRdoRrFouo71RNRwMW6Lpro33pz5egjfGZFEnU2ZkNn6fcsP3MGNm1LQuoNC8YdDyWFhJcPWVZbCAnh76h",
  "key12": "5K2u3CU1AuAod7cyHu8jwjJBJc2WNyPgTsWwJ5TLZKdb2FgzcKkTb6vVnfHKr5kmkGkEt3dzMBRSLH6ANcjRFgYi",
  "key13": "5vSnerk3EWhogfwuJgAQvsYqK5C9pAckxGUhVDZsZHwi2BT9D4Gk9ouPL6jfN8muoi7XPxiodWTuXPYP9EcMJYDG",
  "key14": "4yy6EsRyrBrGSpGeyZoE5YC5aEZWimREbbWvgBpEHRMk79TkKWZF662mTQpEGAKvYAE6Ewx77wLGy5Q2vGsRpnLj",
  "key15": "DLU1xgN4i7eaRv39KzNLULLELrtUpNs1YN3YUjBkPSUfLoexBTFpjrhDYCnaRGLKrEWnkdJYp6iDpeM5umn64J3",
  "key16": "4LXiNYTpaYyHgkV2NFHeqbYygtBUsgCcMs1gg1jfoXby2u27VRkb4HB6GCavaEgitHYyJ6FzzvBRBv6H1sBtKBTE",
  "key17": "E1CwrSnsAopeXDtxdVbKUVRb4oSg7U3QD9GxEeo6tsjD5XdJDt42poueCXQMiqjXEepu9SnixhH2imQ74RR6KgN",
  "key18": "U5Xw2BviQaU6rxR9zgMgjsTShGHAoUnjhumkzLoV5poeg1UjpgZcLYk6FtpiEwtE5ozJEuNmQBBZW46bSgaoMth",
  "key19": "4yKeJYoUd9rh3EF2SaVuex39C9rRKdPFwz1Fwi1VLKAgKMUFTpXvSjLZd9fFQgfUEbHnB37dwEfdw2PyXc24T1cS",
  "key20": "4NrAZYaaN4a9AgW3B3Zns7ntz3d7XFhvRWPGaW5BRRbrAooaAPcAR1QtvjTPdT1Z8LiNjPDDBXGdrJP3K5YCNS23",
  "key21": "yMCQMYxgYHYwYomiebqkTWjJnC1oY59jtmovmPqJBy7UkvaqyvJx8PzEiiLoXpAYVUKSfv4PUaQYKuRACHyovSM",
  "key22": "35Z6UDWq4JDyRpJzDdaQHsX1RDuhx5qZ2zGvtjeVtSqM6vhEyTesD5MpePbsZJn8PAhwuT6fzzU3WoH77pEHf5ct",
  "key23": "5PSn8XM54E55GELAk6kZkX9VQ18oSNfa5hCQcSPyMwGF918kj7bSVuhpjV6dszmamMSV21zMmcrXiJf25sbEbE7c",
  "key24": "4Vc6S9hVU8Eke3MsutK3hRywpvpiXWjjEcUP86TuFBtpvrSrgdGduHrzAUhRnaTGQ8mnHBpxdxo24pkbqRdWZir8",
  "key25": "2AYqwYoM9xVwF5MykRQXJSeV2kgbp5FcnNZkNvfhPHWRxCxCCWnRbKhRMtqW1GHtqGYMbQZcmaFATnE8WLJtYCEt",
  "key26": "5zecQRUGK6r9HPSVPNNGKAJCTtkSMiEfFnK3EWQnFBtd6ph4uKern9HouRjXrqArafnc3CyVdCogpziMwKLvBU7o",
  "key27": "5149z5bfDx1pVNZpyLoowJFy3PDSXry2Fgdt4qPN6RDW4iywJKwqAc3g44Sso1tkXja7VpSbv5QA5yK7uSj3d9i1",
  "key28": "2nWBbjct58yzy92wmJDYym276RKBYS5CKa7efMMiCh7JJmC6co3JTCKBCVsioCBsHeCC4wviDAHqm3VXMKeZFCkA",
  "key29": "2yNdfxMCW9Cj54qzr9izdY1H6M23Zgddn7CrNuW9cWtQHG9oymP4m65dyYEXA5M8i8dGBDYr2V7duUA9xrQ7rVyz",
  "key30": "5VweSU4ASSwHxkgPtmEZ9zxDJN9MaanKWkPfxCw7VmqzcrppdkGnMFYiEdeDXxZn2X4Q3Nx7VQS1GiRbwWyRqRgh",
  "key31": "3123PbMuzBjikHbMBh5Qmezu3ZCB82hzQyhk7fJzfSs5jXG8yuqn3UFA5igtDwLjkDRQWVBWBUixwnSBxWbbN3zh",
  "key32": "36iHt6qmemSYoMh16MPfGs7Z36pnf9UeYz9iYmYhyTxKXnMmEQ2tvwDPAV2P78FworcKoR6bsfZ8amhd7BjhroDg"
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
