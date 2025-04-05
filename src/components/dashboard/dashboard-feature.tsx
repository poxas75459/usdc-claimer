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
    "23F9gQSy9e8sojvFwvbHN3NfEwJQ2unQYKppBmnjuCvsphaBVmdX6YLThjT7GXbSzJyggsGktU2TZW43EbqYb6Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbEhB9gF8n3kFe2UoyTsSSNz4zifh35CFMmPJW9L8MET3LaEdkSc86wH14jcRkfdpqqD51Qy7158mt3KSQEEbNt",
  "key1": "4UZehnqGVPMMRjuRd3a2DMDie1dSxG9wkcCEmAuw4BadUZVDnVJsfEdwZ6skEpD17uBbqkPM5pZ2iAhUG1C7PP9V",
  "key2": "3fJzNJpWTy8Xcu88zspikez1o1GeUf8Kioc7EZcSs6XRXJswKiBGtbhQ3G4SSLLPsEWvwHrNUzRPe45R2xMqbyDw",
  "key3": "rjPhvRwmHERUK69PMy2wcMLsvvdc9Cz6TQSeNXYeYDpNthQqAGmUbE8g7dGEHuX3ttyXCJQtnGp9Crvot4tG8MJ",
  "key4": "yScDDu7oGFXDNJS66WcPa4EvCdFEJssRdXEoZzBmakMRyVYQCsGxjuqugYy3JWSW1C1rp1RF32tcMzKk7Qfst62",
  "key5": "4xbRPXmKjv6rvqEUxqb9AVYzhL462A5ZHq5ccKvabtCuDK1Fv916wgtkwd46tUP5MPdC91JMs3o1EFqkCWXqvcW8",
  "key6": "h9fWdfVyoUeqBk5Pkf4Cjjvaj1YfqKCNG2jTCWk1D5PQkGozW3BfLAB6CxMyCdbHTpdrCExZpmghfssge7DfFcs",
  "key7": "f2fsrdjq2ABcwqf9AgueEUn2ioVqVX8GFqD7q1ksDVer9PKhyCViKZjpha788j7MaNesZXHSScKFLvUnfJxxUkX",
  "key8": "2AR6vhCKf41wqF6XwoYJ2VEWetpRRuMowELrgNbQeop27NrrWf7WntXFwNwGQgHhFbkKHqdyi5DMXzMzo49Mka2L",
  "key9": "4gmSo8h52Dwd2APB4XVivvwckCG18yY5Jf5kSg45Uqor6cUtTWfAFd3s6eV2JXUNeKiqG5VvnuarcUMQ7Rcp3TnJ",
  "key10": "2q9fTNM1Gtr1zjuyBpyUdrXBqsxwzoKTZTQTKiKzURFBQknsn914mc3QocQFtsQNLhVtCQed3Zpc3VvDT8kffaYo",
  "key11": "2v4eRtZZK3P3F3sUJtTpF54Egvc659vc9kxtoeTUP996wjuXFn5nK1QCEtvhfb8TSatcFArmdAZbmC7XX8KypP6i",
  "key12": "3C4CnATo2FwZ4FphoHQbZLX9eQDdeiV8i3FhfLKmmWma2g3SbyHQRMDwXVbHo76pwNfkBBH3toEM9bViBkqBFTwK",
  "key13": "4yzCQHwfsBAD5C2JCqDtXrHVH3qXvJFKDkypiUXjKEcaaqWTLZsvVLx3w6LEi5F6sRXvPqic1d2kinqwD94NzEqE",
  "key14": "2P11yXQi9FvSDy1AZ6b2Wnz2FDtMRm92W4snZXkfJAaWFGjoZWUR5nue7gvCgJUWWRzGiUC8yWUKPQjhQYzU57ph",
  "key15": "5UtBA6GiZCZWvKib9JE3yx1GHiugz3q5Dd2EnYtEse6g7DdoALmF6ioNfJdQyWP3Qg3dHyJXJSq1qbrQPcU6UaCo",
  "key16": "5kFUtviq4EEuFQTHXGDLQrKXVm9HmxxbR7YGHSi8QgGqEKJ1Eb8Nu5jvan7ntLc4Qhn2gjHBmVjYW3w4o6M6E29G",
  "key17": "5CMyFxYXZxiGVhU1JnHL2QbcRgx1yAtvR7QEsvbq4FhSJpuDsZELjmpwztWimGNh5z6bZjJUHrrM5i1DQVLQpgdM",
  "key18": "4tDz6GJbR84sJiTzBpwdmFk4DCQxYq5dGhY8PHJBvAMo2Sd3ZJLKBn93qeXQDEouPuLskGYBe2PNZwbY54AB1QhS",
  "key19": "2UZjb37FrzUo8UGvTpXtKkDU3JxqgbTkSALj77iQy7n42spRtEMat6uUhFiqcv9Stvf4hYaTodPDxYWzxVro8XcD",
  "key20": "5bKh5FbpzekUi7unAN8c1HAkJKdHxLTwgF7JjFHU94Q9Rj6ktM4Fm1vmoiGfziED3DWWGXtQBc1zZQuMBUvXD3KW",
  "key21": "5JdUEdBzNpJ4FuhWfZesF6ghxH5PzA7wuTkMUFmHqgUsSwKLhMTDviD1FarHLFUy1jPSsTj3hJHEFUD1SdnNA1GB",
  "key22": "3YNds8FEmKwgQbBPoNDypDVxkukD9hyEkccZ6ujhzPL56gyneh6ALUZUeWcuq94mgrbKBk1GEgYM7mWdk39ecLfo",
  "key23": "3JSu5PZvCJCnrEVbazQbMcg6xhi9Jrstt2uE7dLnj7PNFJn4VAQ8CdvvmX7mpwrKWMk3BTEp1BDYpZY8B4mDm7TX",
  "key24": "45VEeqTx6SiG8kWS8AeeU5PyStEGigKm4vTWvuLDhR3iKnEvdWRfZdLpp1QnAne2fBaN9MDLvM33kGodEE2mMpP4",
  "key25": "4oxYJqgJQM1gbqWC96LjkS5fJhHs1h7Bc2BC4umGNKaMwSyTf9Vr4i3wKxfso9hBayAK56brqq7JezTVMgUZKNCn",
  "key26": "GY16zvwMziQHEgLD6NvPGWcmZQ69zgAZqUTaLTT7ksPVN61VKzNkzhKxVemupDXE8D7iSQ89nriBbaPUZB5YYNB",
  "key27": "45hpQvexXVepew6K3QZHLaBnhdSmkjA3YXPdQYfGQofnXHG2TPUj8ajULBMxyFsQaU2ExETnDSZTVHQd3LN9Mywv",
  "key28": "2uuXhzkatWRtPwWZ1uXehWYVBhmJsyqWWQgpmbyqGRotP78HYvU8s1fTXL5E3GXW33N3VaYv7PhWV5eGPAE6n1jh",
  "key29": "auQhJJqDXuiAk96LhoqMHoHg8dZV2jxbsVLpBMGfvcGxnwjQqN3oeDEQz9YvjUBw2Yd6TwPBB4sjFPGwxAx1Z9J",
  "key30": "4JQeK2anURqmmGJySzs25UHe8bryPz98hjoqnt6pKv8JsCwPuDC6RnHtsF3NZwqdrbtyXLbKERK9ytMPnAJcpyp4",
  "key31": "3p9gvztU3MHoZX9NcrEvAVoTpBg8GsVxYQkgh5xt4zStzwcie4KCKsDfx9L3hhNayCKkE55Mr74rc44DKVt3w3kT",
  "key32": "371DJM6RY4wV4dQH6iREKBdLSuh6y699b4NiZuWcf5imVYssEWeFWkXGaRZB19B89qzKYeRCM1kwJTMfbqc398AF",
  "key33": "5oYwNnaCERuXbhreEjvLJ9iKS5kt4ZimZDakDHf6pGGLtVWufWjrbg7HdRj5cKVpduNgpx74iAFxZCcSVNAUAc7h",
  "key34": "2jVAW9dQWYSihQBjjxCqvLLUVfkY7Sk6Ph6JsJzjcwwaVJo8GVaBNYZMoKzjftaCTjc4WgAmvuC5ALKKEqoWdmbz"
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
