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
    "5aE7ohVXiciEQ7b8hUgvbb4ZkMbrJUpsAcu4Yzqx29EpeaSBZByY7vaYNZ4wJRBoyAp2sFSqgTLdULibRBzPqBnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQbjDYqqXwYYHmoe77YnKFbtXv3nuSteMatrhRgdzTu7BUK5eM58sRtgJAHv8e1FNJ5NntFayzPSBERVXJBsDvV",
  "key1": "61ASuqqQa6QjayfnEPNTWrtDSocH5YX16SHgqVjtJtyY6KaNXDUWznVnqkgccJU7xj11RK3B8H2DDrRW8kiA1cDh",
  "key2": "TdXp6geQ3d46kyLyShKmV5LT7Qazo1kLs4qnrHE7yt4WHfNQiB5azFmbSfQVo7zMER3P7xuVvdboZ3QzJu2tuSt",
  "key3": "5E6L88FQ6ohYxapCyeRcBPwo4aYxRsQdJUWZC7jb532MNvaLihsHrKcbzUj4347Yh5mxP4e8FUj4pFKYM3vWZWfH",
  "key4": "5xqTMqpHoJeoQFgBa5qnd8Y95ZtJtYAGy2BkzbivkLQAMtPGfjZkLTSARJNdrHtzuirf2cQimebEeT1D99CBgcLq",
  "key5": "2GmiGsuoWYDVQDxnX6eDontzbcFYe6vznXAxkE2HpbUVUdwL2byBxQYcj343eMKbmtQ58hukFvVRYoPABiXG3d9W",
  "key6": "3Jk94q2yYfgSHYinhTJC8KJpyi2iNuzYZjrjo5ktnh24RNwMH6h3Lg5HjY3hpzssLtzb9T7yZdAB6sHnLsSAPzDs",
  "key7": "TMN6PjzKpFFA922ddDmVXJ2Dm93RdTLaXUx5SGYwax9Bv9QvHgNhEYjEvVh7ZYc2HHq39dErca2W5mTYihdM8pa",
  "key8": "5Rc3Scehs17j1M9MQookA98FEV4mpVmfe2ZZDMDzt6mdFjHvKmrkDqMGX4NpUwEjWdT5guFkqn5c8vZNXTQtc41i",
  "key9": "eFjvmLuAsQkvV5d3zmoZNTrLFGVfbsD9WMFdp9pivSytaf6vjEBXhr18rztWS5s4wa7AMMDPYdR6MpYUGc7wznQ",
  "key10": "QgtFaGPezd3uzvRhai6u6qFNRfkFypNUmGruzfHN9ooaVVvxXDEUEcnZyFmw43bjNVyKrTAbAUn5BRj7FJwEUwj",
  "key11": "3gbix2jnsxYmz78jA4Tp7G3egvejNmtynzZQBJP3C7FiQRED9RAEetfAgzhU7nB5p3VqYALbgwCSo3477EArNuPj",
  "key12": "UMbi4EJuxafy1xs4d4LdXzC2VuzBAWutME2wAGa9qZu5DarCujJL2Ky99HWPTuYRKRG1XEftm4uFGKGDppC2n99",
  "key13": "JVcbzA98kxpihvKF8sShVtHv9tZw5K1Ba9amSCPoP7BWnDwxTXoku7NmLX7LG17dM7karqChyA85EUWLmfyDTuT",
  "key14": "27Y6q1xELeFMjrqjgC7x6D5PHCLnoVZyXJ9WEzMd5irAuzBCLtKcnS9yVSFkJ6FrTzt1b2tih3wyhZ8rt88FpMEb",
  "key15": "3qw42KqYjngo46B66exY1zE18kwTViZAG8HPAy77UsCqgHqzx3fTB9DAoqK8cifbj8MFhpasSjwQNAzyhyirUb2m",
  "key16": "2yyEUAd8Vm4gagwHQuGneakUiU1iF4JjHmkHcQKD3qjcb3uAXHvKKsij2N1UEnUPkRcrqveZXAwUYGZhtXiwgUKR",
  "key17": "3XYQEuijHmaqqBJ91DDaenuyi5MydqERN5aWTwYq116kUcHMBCs65eEa2oSuECiihaoggjT8dapEy6k48w5Qfui1",
  "key18": "9LGybQSo4ifnoQrn19b4mjhPPF9GcnWgX6arNUnYVxUA85g8DqDgqsYARw1PeWzSq9iMg4HzVNYYDzsTQiRcyyY",
  "key19": "3HCo3Xh1MGVpC2QEjKv4VKQxpwrq2d6daqacdXA1boPuvts19BE2WV5wTyXqHJ8EWzJpuSgz6bVrB5upC49Gx3z4",
  "key20": "55jekiHJqPRtsE9qUTuY7MoYwLN5uKmcxLWtH41xmhjHgtR2G3Nn7X2Eu3XhXQrqYTryid9Rnf2SRc2PwPC5Zq1o",
  "key21": "52u1rMoBsqjhgxMSSxuYNXULDfXzJiWjCLXoDX8RD1yLVy7zjrH1c2XxsmodevLahaAUjXwUgFL4ushWwEJP4gQf",
  "key22": "5uuydupjyhrA8Js28i5C7kuZyMYjHL3DBkgRGTuHZ1CqVr7f6p8nBByTd8tZFXAj1DRnu4JNJifrvPoAuvbYs383",
  "key23": "2yJ8HhoegwcgHTXZCGH24jDiaeHFd1VnCyR2Z8EKEKHQXBAUJkX7F7oS9XMY6tpphj5SdsyCKynbxwpCNJVDS3bt",
  "key24": "UtTNmtipwACCcpsCqMo5pbVejjstYB1qgURkcMEEB6m4myHMDFA8EmzTE3h5mFySfSiYUv569AQCKEgTZuEFd4h",
  "key25": "5Pe4K3mdzdtghtub2MJJzMGKF3bZQxyj1YvRinu6wR7TUP55KLbjT8UnRMuqDvMEt8YbUkzGxPHxmLjZWrwQ5Na3",
  "key26": "3uEKAicDTRY3z737HiRwaQucSzoRU4sVK17TWVHoNrfXewCNj9479cAJpk94NC9JQMT42ci1yCG9mMaJB3A4qzEp",
  "key27": "3Rz6DFcvFsStbqdpWCvu5hsRupaww3vL76RGESnYSHbu1i9Kqv1TFG72n8JQQ1Ti44MM1ULr6MVCHbCFRTZzYb6J",
  "key28": "5vMF78txLTEXtVEJdU7e77fm2KtxStqEmCcKRLUfTjSReQL5JjTYyGzT1uyx6VR5cUwexWsnTAtMe5FVkg7UDLiR",
  "key29": "4JxePC9obRXRU2jzj1epRzpBHkLFF64BbxQQHHqSsWWshZrubTZNBk75fs5U3DVDmCEs8egLDvPAk171dQbq1MJB",
  "key30": "9pt7hJcycc7CSDi927x1KgeAi3rj5GBsEhzR8GHw5uQABJCmx4AMJjCu3cjKhc9YmBghSn9rPcYQxDhYwyF23Pv",
  "key31": "4VUMhp2ahpVKtBN4TjvyP81PnUijJ4FgcEEmvKkQJd9B9ejUhaPE8w9gkFrDNtRom29rr8BWTBWJiHwNfwRZ3p8d",
  "key32": "JjpETdE8MFUiUkM1qNuaDVG1SWhY8ByC2Sm53CrsRCYubJo3RvPG9gaiFo7is9Y3dGAYuhAMnKuU5wp2DYsoR44"
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
