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
    "5N6684tLrzkm5xC98zr9yv4c5nC5zAxWoJw99yUJQo5MbXBoUqxXT94WH64nGV3oJDAtEv1c9csFpBcgB1NuAy6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yiwd5TbkxTBjEPvrTyGhawgNYtxUPxc1EM7k7syaM2MiV1SxLAd1UYYcQ6BGmz3Pn39ZWTQsVgHEiTqMYXsw48R",
  "key1": "2ec6k8kBHeTgDxg9hJnEURt59ehKqr3Kazz8a9kfRd1bc7qrSq2WTGAec7NSXyJdXiqAnSRtA7NQpHEXk8GfsZph",
  "key2": "4NpAgU79hXHWagDi8wpkAGQCSiotrtUXTNHr5kJDtFW1w5ouHfNvAXoSM4QqzW19PwqiLeRk5WNVuKTN1Lnsc3Cz",
  "key3": "52q4dxj6tJMjFa1P8D6N1zqr5or7UcNncY1RfzWrAtovFHn3NUqkxvag7CAXQ2aXWnv3qWfvM13E9ppWmd8jPkFZ",
  "key4": "5R87pg6ECKKWJKiXd92VhvXVBE9aWE1NvbMVtryv1z4Kd9yA4xwCZn1rNJUPx3pKnCjs1ebdtgN7K94xjAPHyE5Y",
  "key5": "395jhcY7aVdgv75yAq6WQnP8XaLYCf39Q1Y6GGNB3EZTpC9pnBGPmt4BDhH2YpZ8uKfE56yW8fZtfAQvGCWDU6oP",
  "key6": "3Wmf94RMqQhrinoqtHSoLESG1wtnQkhd9eaLNykj6LWAAzDPrwfAEudBaPDpKgjFJHr2jj2fQ9tzpLmjLJdPfEsg",
  "key7": "5Tpo4gQ1BXG3yWrQt7Ugv7yz3HEx8QwvbeEe2hVTXVbaEw3JdL1Vkkvx7AvhwqvUVG4Wu9ngxBiuh4ohK1fhnWny",
  "key8": "3DNWUjdoMFwLXAnjEcstHm1M2zdVVcMfSKGoyHwmygZkoWot9gLJm2yN8dYTvDChsrxhvX6vfVfBEP6hiBedya1y",
  "key9": "3jzzjk22RGdg6fWqb9Fyp2g1hqNdResZutztAFzrjR3FdSbaratTyExbwWVxu42pqphPUtDhm5ES9FWSDd3oeYWf",
  "key10": "65PzWkC3aR1f9VucuH1FvHWbvRF9WmDtkQMGVLyU1p2UeZU7JM3GHFN6EJgyHgbwQ4W4MAAoYYoTdFvnztms1Gm7",
  "key11": "2XaNRNHq5MYeq1iDivau5b2x7qYfWzT27n2q1ijzZufY8NGnK338GN23D3r4rd6pWGgsiekB4SjmzvPAAgt1DPFp",
  "key12": "7q78hDNYo6f47cwXPqQpqjyitRCfkBYWwgV9aEHDvmy4g5aGWb15rfninB2sDZLaQGsrX7daqebMUuFbmP7cpcv",
  "key13": "xyJ7GfdzwyZpFnT1LkZEgP4Ex7w4aq3iF5SCj2GPyme1KwR7AmGiNa6R35MAphr7LThoy614KSuE6x7DKjLzCQ7",
  "key14": "2AChJaCYL9dbVjoMhDAFxRcpN5yZiM5SHAj6du7soBeCRKza4iwhDDfXJAGyVZ5GQPXvQBmYTxiEqNaRBWvgp8iB",
  "key15": "UCaHUuMQPSUicUfi3BXdtYco6YPBEPTWKd6b5SDbbfPBjsYvUreeTG1nLCJvAwZSmP6WEUtsZbuXni6CvvroCQq",
  "key16": "2stfPBUCMn8faw7jeAnWAvkCTK3btA69bXYoGHaBpBmwf7QfcSXvQgPFtkudExVnvVNUe1gb21ybfcn3GNkeWjH2",
  "key17": "5YzcTKpB17euLCsj4tQ3CmDWpT8T7XwiqFC8TfTpiHQV5Pg5yc42wg6cpN5vB59sLkhPh953h8rHQtCw9s5h4iZa",
  "key18": "5BWnmeBFqYJSKLCAUdBFXeRirz74cBWtBLS84XRUNZkQ2id22PGZy5fbH9oVnYPk9Si3KFFpVmmKvCYk7MgzMcT",
  "key19": "2TBaTne46EQg7P28mFVFT2mhBNAnNNBMPpy2VRTjPoRyByVxU5X9zBSAPnHAtY9gHaevvJPeapg4WcyneYsp5Ga7",
  "key20": "3TpYGb6JCzRAEsK6WuEpUUsRvomT8L8g3n6KRci2eAEzseBkxDLwgbAxyrmm5FEnXGoEbqWfN7mkHWsVg3wZPPeB",
  "key21": "7zVExnsuoYVgtmyb2HesLdqaGdtxwq3JXy1mYh5HdXH4RrugJxwUZqzETi81V3SuX9QnYeymXKDQaRm9k5zVoGH",
  "key22": "5eAbvY9EFV9ZBNWVc7tc3fsS9hLdcNPS1WFUiUYcFqLYkHFLMhdxFsoxyeXCkgipNFmDeviYfcAHDWtzHaz17oaz",
  "key23": "2ZzLfX6odirBfu8dhsRjBjuzMRiiYt7BUU9tLAHH5w6ND1mQ7Knbm8b2cXkPv967utHSpWVuJzwtS4GPKSSfQU6f",
  "key24": "2D9X4bicw1cU8QPEJwMiBMM3MrekPiSNBvDWsm7z8PEGLFap8euQ54dhni1iL7b4ye1shnKV6vMBsHRtyYJkxcgq",
  "key25": "2qsNVgNcpjVsvV1MhEALYinCUKr2XB7qVv9miq1X6ijYBzUdkAJjFRGJgWMcnfPAfeQaFSrbTyRp3yHiXLCYi1f3",
  "key26": "27ov4x8FeSUn52KixLpHBgJLniY4PAnqmnFLKP9indfW5DFez1k7QB7fnXCJWSTWEME8zAkgsGyLGyqS4icxTHnN",
  "key27": "4rpxfeAV5zEiGHj4gFbLzfxFtYW3sQs68kKht9XrJL8XdS8etQVM2TxG8emaUACXuQnnWQ78vePbg4xEjC6Cy9oP"
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
