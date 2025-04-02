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
    "B8ugVD5CxQ5FzhojNN2k1g1DSKbv8d4SV2vST4i1kooAcMF2Nxg9Jt9PwXUiG7UDtZ32BBUas2KHAmyfrJwgPZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sdx6rpxAwFtj5DYFAEFmLP36ax2MD7h1Ka8i4LsirePE127kvLVZhGxekAyT5xtLJqzi6RSLLEDM2vsAws9Dkam",
  "key1": "3ZuLuwSRR9F4z28VyPm51EsMfssWsSNgeRXCvnjcAkXBuPMPVogRbMotV61LAdX5Fn1PFXPbMkWS9DpAC891W8Yc",
  "key2": "36SsLLrACbot4xuD2RqqasKw3M7EMrdHpuNxgcZrXdmuf9AfJYm2111RXKHYpxEMFUePZqbTyvXvGHXW6QxsVVSj",
  "key3": "PqxBFsJP4Q92aaJs2PoSYZ42kkKSvFJSWDKEYJazWaj7A6mYMRHAZxsqaTfptMhuZMxbqiJ8nCkvEnxNeygYtNa",
  "key4": "3QuU3qUbFPvzotiMWDfdp83zuGxQgWpiNGmdpAT88DPzzNHcwjZBQx5C1xJGt1TaFQsazgdsfXixm9yGkZ6V2kg9",
  "key5": "32HHB5MPq7xjvQ7uAJUWJeNCrjrJ91FJqNqUXNkMyGdXW83ymoQb8Lh9FcHRfweorU8GMd49UP1Qc5FuxW1bpsaq",
  "key6": "4d2xYKXBnoxw1hxdbZuBrBUQGLSyXNrBpmzTiEY2YzBvRcniwM6Jx51AMXnrTkMGvWyy8pmmaHwrBPx5r5h9nhr2",
  "key7": "3EaeuT3WY9igTqFb17PcYCZgzUqcxoyVAeK8ZtXoDC7GozbJe2dtCjFs8t5an29PJfGLxYVw8mL8Axy6EsNfLFHn",
  "key8": "3MctRFDZUP6dUzWVTSPXxkACxfvwFgAYGSR7EL6RSAo9g7AjJ1NCaSzWdze6XnP7SnrJwqFpj19tZRX14qo9DGdB",
  "key9": "48sWh4NkrcuogZkjmf5P5PLiWk5U1xTCNeTMYjq44DiEZRPQTUsyEu8g69XvY5GXdveT1mBQmtSoLyXbYyh3UiEr",
  "key10": "4Udau7qw4fnR9Xga5Nu3osthRkiqgrBMjYRBDiMHFuWoCLmSFjBW7oJ8Da2dMuoE6VERkZHGt3SkDCs83sT6FiCM",
  "key11": "5FxianMziczG1eoctPo2q44vs15Uhvh3fca5bQMjeBG2UXV9yDEmPQwDhfrEVBeoLxoKBdm7LL3iTMJhfzSh2sTW",
  "key12": "4ewfxGvmRWbC8AujQfbVsD1xMgTXn8w7iDkyMuLye8osPJnr5dG7Roy9eJkkqXjmLtKMHL6sQhNjNgm6UkfxGHJd",
  "key13": "3TAvnrmayeC5t9DHkEPM4G15uezTWkuqLKsSoc61YxoX61Qhs7eo9bQdvtZVy3aLMo4AcjynhXwoJ4usaehZjmBP",
  "key14": "2cGrBSxEwJwKT4uNPSCYE2cNZQ3Ca9YviAiS4zPH1rBQq5uPAqCbYJZsReq9kWRdQBuCj4uZQ4dyuSYZsMRHZurx",
  "key15": "22eFX6QDowsqGV5Zyg6ZYYBCZHwcnCEQAD7rrx8AvULk6VxmRUtAeKwjSa5hRmCJmm6ab3rUN1wer1ux9tnCtZ5E",
  "key16": "4PC8FYVYemTcJCojBwa3FfepF8rvRdhNJ87RbKG3PfpSxEAh8KNK2oAe45DJEmHcoKociW1DfwEvdvShuouhSXRA",
  "key17": "4qVC1DRFEeYnQMLWDuw4FC5JXdEt2ShsVWAcePXwRadz1nxadSVh6VivsYd2cn7LE2nUzKzNgk9axVpwxnCkTgeL",
  "key18": "4s4Yio7Qg284rF3KYcEdAHH6j3zLfTdjctGBFYCMN1djefgUDHYmHerFBJVXEEPzCneKU49vMUWBHGHAx9kf4iYE",
  "key19": "3hsyMKjPs8287ivpLryLbTK5xgiQVwrMAmFkm3ZKjPJuptTjPGEoH1Nkay6E4w6vL6dCCZLffEVTS9sL6fiNp1K6",
  "key20": "4FioDFVVTdDqoobiPSPin2Hp6CHjJuFKssWrNjMcBzYC47pNWmCoBrfiqnv9PUngkaX24Yh68dVzyNvrmcZPxsng",
  "key21": "5G1j1mXmbo3uoh7A1kB8HAWZDeaVa9UY2PteiiwN17cn2abZ97614hAthmso5VLzVBUKkTgYnpWwSzUB4UWquToo",
  "key22": "4wtF6BsroGpKkmR6H8PtuwchnJpv8pAe24QWxhidd4XCi6r67U7ArbmJFALGrVPzZvZPgHPyp2pP8tSo7YwNoTPw",
  "key23": "2PSLeQpsYZxf5FHs4czdz9UnSuj2JvkqXwbt1QGJhWovRXotR8gAjMxvf6SvwpxAkbYJ7PunCUGMLpiggVd3f2dL",
  "key24": "5CMre1H9PUwpsCzn93GPKmX8usdC3rzK9fETCvFWmdZR9tiaMVxfK3KbLcdX9WjH4FReX9hHzQguo4JL2GJUicjR",
  "key25": "QqwaA3hpMa6rwZyDi2RikTsyJ5hap2HMeQcc3k8R7BmFTqqhGGCwW8my5jsvMWp5JgNFmmCMowfNkQiRdVnkLDp",
  "key26": "2Wp2hWLENGTiaRPYs7kawpbdpWbNSMkmgATaQ11y5MovrdJ1WWm4795fygcgRgMu4svbrDr1L8NP1tWhAoPi4hrJ",
  "key27": "KDaVKJAhMs3aEeKCWci3qmcWocGD3pE1VwrCcfLjGkJ7dauP4e9tu86sGrqr5i7RkjecnAyPGU6NjkYKMKVjX9f",
  "key28": "3Zk1RVSm4PodCHpLMVUbUA2jzvBwvsNPhkp6hXXUksKayxiaVx4iYc6khBodrZ9hq66RfV365UVT6ozdyrfWioYx",
  "key29": "5jXkLqU2ERk5wBjtXm5JLmtkrVcpLftoEJRcZQWCrCzVnUW2jCPfjAmsYEPsvf3fqu4TfEUTSmf4R6pT3y42aymM"
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
