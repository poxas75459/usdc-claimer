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
    "4YC9QbKpDUqso7SPjDKfdETE64UcGRcqQ8iZSuQtWyLFqnq8Uw5QjAWMrvMCG7TeKgyHtV74GG6oQYzhXMsECbZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8Prpqx5h2EQnUvFS3whv4Y9BYdCDuushMSFVCKCcY5D98eqoM1ZJzNCaj1sr4FsxWja3z9CoLUXGMxQhCtRtXf",
  "key1": "4hs9k9oXwVDjfYVKTNQebmEHMcaE1tkCePK4Lq2TNYZGR9qDk9hq1LAVWgKqTGCKAmyaTTusEtHsm3BnUfHZhpmh",
  "key2": "qa8rvYozHBVQgoJmr8ZkwRs2uheZuRKD7rqzuK6AHjYLJhSB9TV3cPKXzTzXHPPTqt55WRT7TmwP1vchXXJviLv",
  "key3": "3FkBH3WkFFpfpvpeUW25JUTspwJqb39LjAnyBBTU9grjNyF3FppCRvkzAi3kxb6DbzkzuyGWZSkGyMDoX2KzFSVg",
  "key4": "5vcagE8wMHkQwqaeKkk4CCjseP5664KHGXMaCZoTQr4h55GXNrkT3Ugb6jZvQDojbjifQ1deHkA9v8R2dUkkwUv3",
  "key5": "2QGTjY2Te7kiiwEmdrMFPezXpFtysFEhnKqYXeAT8y4BHfwPgM5ZR17Ao8eAHcitF3QMjPnpBtRwayXDjoeJKtyC",
  "key6": "ciK4MXHHAwJbTQRuxZhughiGKk3qs3yVHVyNfNHMbYveE89JTVPwxEzygdeczM1V7r93DRxbNPMTjee3b7fGf6o",
  "key7": "k6sXHdowTfju5QiRtAxfUQi9cZRqC281MtLLW6XG44dXMQ2WizUnzpFLi22RHBB1x5ybdAitmf6E7tyCgYuvBba",
  "key8": "2CvB8jvgy6zcaGzPpMHWwY5pANvpvejndzETonMcGVWWrggjqHCMskgTta6qsjA6p9LvaxTTEyr52XoPve5dNi2x",
  "key9": "5pUU7smHxxWrEy7xzRLXGkKBLqd6st2TroDTcUosuquAizn95JkuJAFfmD77ts66c6PQEuxaHRFpBBwA4PBxFSxk",
  "key10": "3eEZjqH2vWbMFBMris1ECxnmh5jm3fsyhBwDPNSREKLjYiqJG29at913f9952FBCZDwKoWCYvBgkEBsV92d5CiHK",
  "key11": "DHVsWQ9ce1eRs1seRtrqyHUH1FWzAZuoeRuJNMiM7zaMtf6YebiL7yvqB8NsrB1yqKoZ7WHhY3WVia25Yzaiom2",
  "key12": "2W2SsBrgjBpnVPzgNQyd8UAU1a8NbY2izMDdqaFbK8TCkXsksDV6WiVnnnaJzvZsnjM3wu5jJ3L49G8wTP9WBoJM",
  "key13": "9S62HLwTXTryhGwYxqeuuA4NwbXYrKHQntHrqeDLCUGCn6izV7pnK7iBQZQU3sENySFWUyX7HC9Xsqd3De74VJ3",
  "key14": "3U8h6G1vQm1QLNc69AvGYw726Qf9LKXAmyWfBpzPk45Cia61DLYyzKV62yGu7sQHX6Gt1YPXH5CG9USVHkaHdZ5a",
  "key15": "4gzFGAfLHhnfaFftPDmtXSKyyHfm58jsjpUz5mFfoY8c4x5eK6q1JxEfLxFvGqpf6XtQMQuEDWGmLNncyupMdLnQ",
  "key16": "bfzVbsdtfXZjtP2XbrHhBH5ziSS4f6Gv73UAg1A6LUUx3p2zBp6KfUZUZVpn9zSrxLSwiWnm7EuTcWsJtM3LHqj",
  "key17": "4uVbEg6h4q7XMNWcrhk3LoSFNzpTfsqR9cFo2ZYpmtyCGG9Y7wvVsUyL4K84z8cgQfeMxNTho6dB2XQqPx32oQNd",
  "key18": "4XNRc65fViayt3J4Nu94LdvKQfo5MmJu4NeVhJ6A8X6XxzbkmsQasL3DoT8wB39rZgbgkzgwiJRyUqz3Yx7V7Exm",
  "key19": "x8dexaBHw8LUUvhWQo71L676SH91SrSRmNnCEG8uMa8mZ8ocLERDpFhCAQ8CYPyVeSth3A7E4AHfvrygbU6LQdF",
  "key20": "42Sc8Tw2ZiQ688VrsygAkL2kJaGhetVy57i5pBz8N3jR84CBBfJnyPu6r9dMgRcuWwUhCP2oCtwu4d3FdoCgmvp5",
  "key21": "2TaQsjgxuCfRRnyS1P31PqiFceu66oGmCQbWxHM4XnQ91oriKwVPw7oxmHWiemUs13soLkWk1o2ziLqtDakQmAwH",
  "key22": "2Cb4yCBaPqa352muzGAAuEvKqwMhrDbmWVfbKZ6SdBjjRdLP4JYHKiBfvSPD14EAJqDpxC9zQZ6B3tdnXSiwNmEq",
  "key23": "2HMqUH5rnEDRhBrwdtCkdK1MxVpNYoZXEZ26uLfbFztDzR6gzJYy9mADQpoJrMYgEhcFy7bGdmwzzk9D8i9tnqdU",
  "key24": "4SphESuEiwqPMfcmosA6vfhT4TELPABeMJUp4jXvt9GXG3xQDFCKKimVKBUFo244WeTBPXXAiRDzrAC57N4xZqg8",
  "key25": "oQtL88XQs3F6W3e9VgKnBJL8PHCzRcuyyFemyz4FKZCauqCZBBFvrTTDM1zFDS77FTfePW3pKDQzMJ133nVtMGw",
  "key26": "U88GCVY2uW21ZbmQMqEXwKkvLPV3NsyRcP1yadEvRDPh3RyqC47VeDexurr7cUa1YHQwmuhwYGRibSVojeNmYLU",
  "key27": "3EuTE8n8VZkK6rMd7WbbWd2PfW4EAVKDyPwYQVsWVn4VumfV3gwD8T945FL8UtjFxrd4BR6zAmHp5TZiwYfvU9q9"
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
