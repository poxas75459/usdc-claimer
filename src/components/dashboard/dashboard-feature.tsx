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
    "4by4d7CaPg3wRUfZWH7BnZT8HZnd23GNR3aGNbeLSdPdxZCBdzzytqC6HXnypDUeiUH16yRa5RNmNZddMBg7MUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4khU11Jw4TZ4SV6qf7azhAPwCM6d4gvFYes3g3zRNa6xoUiLuBAdHWDPSSs3LTDAsd9sHPuVgxk4HSvZbBji4MvP",
  "key1": "4FAJSNd6vLFcaSEM8MEJXytZoXmqowTCeBkPpj4yMaPtCLwhkCD1gCkUXaxb47HTb9jqofrZKpvxgRXiiiU5ZaK1",
  "key2": "5WgpVSbhnkgwQ83GpwSMU2wvLdRUFNkmhYdG8WnnKVUJgfDzDuRQvNY7nider7h15ghNeuE5g6sZti8yHAUA1Ndz",
  "key3": "2HXABSt6rXqEvC2Cb4KB1hQjhsnRRDvmEJPoBFaRa9qi38cwLgpMR1JJW662BX78hiiBqt6gsuZDMaQSMjvMkqgE",
  "key4": "3osGCCTWb81cZyRw65SkCp7GYEdJfsh1a6TtmePddqiAPbj6dJc1ygCsMeBkkEayAnHAKvEcAb6gEvo8joe3t41f",
  "key5": "5zJwBt5LM3oK39SwmNSnVngGzSGY2uYGeUhtVR8ahZC17jw1TAUE5qKmGyDQ8VWe5RKLDqLdcDFusEavq95ndecP",
  "key6": "31Ye3utWdoWnf7A6LKivDyaBAP7Ku3MxzuDHaR5BHkEGezh9GePfuE88xXRzSiSVzPRJgiyo5J6K6YBPbD1D9fKX",
  "key7": "o4FxvQqy61GQadK7UfCkvY6LFZRfE7hr4KbUBkj4guZDB7tMQ7dgPB5S2XSJAm3s8bTjmEjnLFYHJdkZN52ua44",
  "key8": "36J1Jf72papSptdvQgpjn7JU1VxEJ2zdcPez9ERwAewqobpHstmLFkzFkSD9KLQaTGivWEHyb7ZoX6osgVC6crrD",
  "key9": "5PED7e7DohxquppPgxYSY9tMNdX6xNETNaiuL7kwjr4AkFojtanBZZ6oszKQ75CuKYEz3JkWPaaQs8tmYCWVjDEG",
  "key10": "38H95y3NXf5hGNSxVsDMetCnRBVvPoiapurtP7XXwDyt1NFcJQU8Pzz6wHgLWzUC2cezCqoE4TT3WzQdTyFhoiwX",
  "key11": "4e2xxFVdbp9HsXUNTs1rXEk8apqoup9PV6dNoZgghsCk1iYTfXXnQ91htHuW4tdQgJ9RnKHR2QsuufmLPhP9CBX2",
  "key12": "5vaSNnfsrWQ3CbNT1rVwYgEtwuhMdmdjTgofjSxzAQ4FwTvo5189LSZm2v4fUJRT5t5tfxC5YK4abjeiLjW1ncoo",
  "key13": "52NEpSvxpie8adzJFSx4iNsHCByMxzt2bw4nR6DLrP6FE48zH7ZcXzw9TfJfZ8CteyGM2os7GJJPwhbZQSxhjwJ1",
  "key14": "4Hx4SiMdtThmnxjLV8dTzWmZPTk6h9Gsb2LWt6S3Aq5taXriBsRKyMmq8bVCGDagBASFb1DrdSJTWPrj9sHuQvNo",
  "key15": "VweSPA7LxoWkz8QDo1DZQhZvo9X1GvvHbQVdCEceaKZn5zvGvCKyHVPVgVHc4YMLnJkqpouTBF5CsogWMjJT6XH",
  "key16": "5nPuQnDUna8MBYa2dQbTyN4QuhUYZ19w3oLCiDQnQhiyXs5NFAX2WSxakUH2b5t8tdjHkmqM2QQN3thDuTcCsufH",
  "key17": "4h4nMK9ShoRr67wygLPNRuGM1VURH2EjwoZbq3cXVj3AAQH9HPc1CzwRYsPRjTSgYPhgYPAjNk1jk1jJk5U2fzpd",
  "key18": "iWUwKRAHRWKs3yHwzTvHhV3xPWMSRWDVem2bnAr2NTiuPjPSJjZL7HEXVuKhvmg4W5B88gCDc3RZwPGmz5brCqq",
  "key19": "CUJsT1kn3AEkL4ChLs2hWFqff7jh3wemb2w4jcShzC8hnwx7WQXwTMYGXnGRcHqVVe4uJWfZ6qC1EFrLaeEPoys",
  "key20": "33AgVEd3ww2UbGSALcg8poVtHd5KSSo2Lx2FtT9RcqtKERwdpuGiqWgzPuXU2BkHboBMuRwmVhgYdxxnvPkwyVVf",
  "key21": "39FLFEj8ip3W4qaft8Yh9KHxgLAFa9SHJnQ7NRSRYRZG28u638UqD9qD8hCCKoUryrHamkYixtZyZKYWrfxdUgnn",
  "key22": "4hswpDKsG4mcZmcStMwiTsb9j7oVAhbLr6HZrmmfRCsc2973Hsdnp54Vu9dmRL9whNYpoDLmN2g5mc5DYYMENqS5",
  "key23": "2LS4v5bUp52i5jarTbbSHBSswjt2QWVeeSpqvJXR28cR8Ba6wGWWzRoHn7GGDYCGuqGebx5xk7GGMLMNnoQA1CMD",
  "key24": "4pmMSoPmo7fkr79CNgWMKEQTPzmbVEVK7NPMGDqzApRvSu7rk8zvDE3jaehqjWwUdeTgSbD82XDkGeQDi95g1NYm",
  "key25": "2HYDRdrXrc4mjJVPwJm7DbCbtMe8Du24ULHfLxnpAhWcXosh3cJRwnEeaGxHjSpCUHN2NuwrkgTmYZTK2JtmLKdh",
  "key26": "2zSSM6gt2mzUpeSDyN7hJkjcYkjyjvaQ4YWL84G8HmefQs529KjAu78xTysrtfgZyCLEQd677Lqrprh1iF8xVrGh",
  "key27": "325KBFDdJaMqUXY21m86yRXAbc22DnnKRiMad69MGt3nsGWvMWXnHuimY89xdN9LbGBv3imLQpn29mG3Pf9Y3YQW",
  "key28": "3AKapn6TztmXsJC13so7z3G17REgsXzMgsPFoCxHxu1teWzgBeBXbSpR28CJ8Af4MsCRd8SpmCTkW4z399cTHKJJ",
  "key29": "55GMX8pGEniRrrP3kyuuHfAZTSHQ1udazHWXBnkS7PsWxRw9UvHGKJq4v36ngGg4cLUhu4tmCF2h1MY9AKioqLyN",
  "key30": "66aSntKQcRv61wtNbYMoQFYgHAqVu5T3abawHuWnWVLuGk3XzuNnnR426pNhkBVRWPWsBJsXQGUFmNS8hD1X4Th4",
  "key31": "3BRE3G5f19bCu7Ni1Qt9jcdDQftUUEjuYkhmJcrk8G35ifNgV7Bj7ncgFtfbhfdgpSToop7oWsSfP9CoPw1zCrXA",
  "key32": "bLtmq5XGCTEh3msRXUBriaFLcTjhTz6QRK4jrP8K3wGCmQ13AcXZFuGa8Swh6mDTxUHVURPM3XYbAYWB9KahHTH",
  "key33": "5tdSoSAJ6JSWY3WNpSenvZLGx9KqmBpVKFvaJ16UHTwgwdZF99vnpbB4TxRz8oAH3cGZzXkvAMYDXxLZB7mKDcb4",
  "key34": "3H5gD2MVsz3mJSQLZ5JNMCD6VszUzGz5vSWfAC4Ci5otsrZQxD9hZYau2CtwofVS45wtsPKae8tuxB7tnA8Ye3Jq",
  "key35": "48q5rDXxLmuJSjcSg2sXa16EY5TkW7F4U9B1aqLrw2pRcWG78ESzJPufVDvJMtAamGVBNMbTPd5esmSeJA3upA8G"
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
