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
    "VHZ8f9wM7smWzfQhbdJRM4qSZgKdyXWU36KQjtcYDh2KEgJomKZ1GsQzncsJ26iLBK7MoogKGMDUFuJvykyV37Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLdqiuLS7f8WNLsF3x9XqJmYXauyoVDoRazgp3PMLTkUujaozbBGXKAFRwfb9aZ5Fmvrr62fe7dT1zqwqAhcAGV",
  "key1": "21L7vdmapfePPuhnLJb9sPtNP9tKfzUtHxWvTPY4hBNP5BRKQ3WsoEuvH66CuHJfnb4XNbvVCeSyL7SgWMaaCE9x",
  "key2": "ZYToMrWfDJXwYnsRm7zNBfb8tpffCLvMwSCBAGh4utap22Eq2WyrFJksgrVSBXEdyao9eeKpjqdiGu2uMwUW1v6",
  "key3": "3BQ2xxS7ZWVRvhaGb7Q4MXiFHiF9YDvDUNZgXwfQMYySHZaMrvnS6G4BwWPvL7EfdnM9Asazewb2chBimiiKaaYZ",
  "key4": "3L5Un1g6E2hUAeFNhJaEi4LvMcenzVamQgH1RkWjpsH9F7reRniF3jcN3RgfsiemkoYiRcnDmcqeBNefoowH2PYD",
  "key5": "4HUqCPCLXnqicpsJjppgL8KPTGsrseq1px2zF27gv2THVGywVpjUDdiJ8dGSaYdvZVHzadjHcztAjbiVWXqL4xQc",
  "key6": "45VRBjTKd1jFiG5CAjwuDpdm34GxHBSg294KgaXDxcwJa2pJgUXCZGHvBmZDSWu4mtZY1HFJDxLEPrrq7EssfDBk",
  "key7": "2wpf9pJ6SyjZgPjjWjtqCZRrN9Yv5Y6bC693j6w8zajQK9miUyzmjWDDq4sE6yXW62CGXroKYTBH4zyDYy4rRUSC",
  "key8": "453bJShzZ8wQDMXv3koBdu9dRz1Lb5jGr7dVe58C3ueamZEgEdKF5gf4QH8ofHHkAytDtfYtTnk3dHXduDdunSro",
  "key9": "dLrSMBhwFGfhEwn8w9ZogQCFvhDLWPNvq9p8LcLR8wTPjjbtQZLqw4zMu8ZJnPdzjW7MRAfQN1uNnjqo2jjA3CP",
  "key10": "Sf7w7HhqfsmgbmjiECJVJnf3N2tqAm9jdcpEi2MbP5bmtbbWWmk8yM4JZEC4Y8Mwr2vz5P7Eo3TiWUYcSE35J6A",
  "key11": "4p2wQzcZyAKFRyBcm4PQmE8gxFWjLQScASUMKcvSb2iBirfFHB4ozzQrM1kuPomMdcw6Cgv6QBT8yqicxQqncGrR",
  "key12": "5HUB7LtBrD7jejrSmchfje5TuGFgqBbM1zhg9jd5yEaZbfyJynz9nEkaLCxRfVefjsdqG1RQAdSByWsm288kzPtb",
  "key13": "a3kdqoTLDJR3JDCUUpR1nc1tmUxc6QnvJFnksBLK2TVNgPtACXWCwFucufKS7W5eDtqUJAZwtCp3G4Qg6pgieeL",
  "key14": "3QbaBfy2epzLCpVX9jQtFEkpunj4gvNkc9Cjm5hSB2toMm7b3Xk1cyAX3c7WoAnQYyugMtxHVR3pDp3qoGjBv2tn",
  "key15": "34MnxwmLdamv1QoPMCKFZ6cQipFibGHDdkjgNgD5fkjurnHRZtnZM9zBvZWxu58FTTB4RnYisHATHPqVjjD2cmbU",
  "key16": "3FFiXUo8Kne6orXwdLB5Bqs48CvZ5Hohidu2fDAoGuePwJXJeamsTjJ1u4Pv7NbFDFbKPVrW7YaarM3u1xY6y8pu",
  "key17": "2g4BPHLSkAHyeZhHEtpBQrs5rKL5HJbm6c26tFjALSpZzBckQFpdpZFN5qqcZFwhxHLi877oMF9J5aLix1Hpd1Cq",
  "key18": "QHjBm9ZuPof8GueNUSJRnjp5yWpKysieYfxyPwpLJZhX9rEX8eJ8bCRFXC6e3ZuDxScVbUSiq24iFXDKPHmtyrr",
  "key19": "3XoGPLev7U9ZLaCh64B3sFJ4KWH9FBpyGhygZN9k51XCkMpvRP55iDDPGk3WXdZeD2rBkL6NZihMKtv8htxDESwr",
  "key20": "3YNoMR5o24unLAGZc8k4iuitLgte1XEfNai47RmGkfJ7rqAF2j2N7ef6tQBQaQj1MEbo4Mfjz7hZH2P6oDXXqgB3",
  "key21": "4mdoRey9SJqau6B5shYpTxGhuuWACPwimXjQjh4zyKpAv8MTQuuCrS62E3w5iPCFTGsgipCBFRssBp3jMqbeb4TD",
  "key22": "pgi8J9RbVgBnXFoUi76HQT27m9TTwkRk5a5HFBbQvGv5sVRapNbS5ESEvqYypmdY1ej2VdtmKz8Vu3pxzQAmhTL",
  "key23": "3fzHZxNJTXJEPYeD7TxC7wkvPTJZBSzbWbPLPgdm7v36qjfAuEpWY23PHKw6Nj478KrrvFF3wM9MztUcKDbyXrNA",
  "key24": "4tCfhFv8jAQudAMHv3seUU3KK8yS5kgSzJNUX3JBj7KSCVU3D3Mg8rH4FJanKcaovusdEfAnRKfZK1GE5fa4euRo",
  "key25": "fpr3gdJNhmSGFtzx7oRMdFHr7dpLawFmBzWB3swuicpazNaANC7RkgzJG2kwvSG5KthgySLLvShri5yo4F99GeW",
  "key26": "QGsSPmTT1mbkRgxwNG6kw4nW5ppvgXQaJML2YDdDsLikYRELpvFprVgVHPV5QC5fAkSNxbHZQYdSFSRWtUr91iA"
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
