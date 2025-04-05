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
    "cUKuW3kwgNjkK245bnAqbj3H5BiXDqhd6t99GtCHqDG2oMt9AGgfYA8GXfzzuoeLJBhDpRSHsVF62jJ38V6mfeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkeQdin45h9ovwioG6r5DA6Dabh8bg9ChY9GAa4xqWhvdSthWpAtUTiNj7ErpYETSWTUrR6bX1my7S91Mno4g8d",
  "key1": "2tdxubTXBV1b6uAKteRa1eGLoUiYXuzMQPiPLDHt8qiJ4nMcAvV9GEU2bED7YeZS6MQPoY182nTHkFWCuzTYbbxp",
  "key2": "KssMfuKSdzBfXXc5H46DtKWt57nZkGZ5zsHVmHuzjFctZAzheA9NL1P4crCf84KzRWQ22Wz7CP6NVXMADFqSpkw",
  "key3": "U47RoD55b6Ur2rqARebwpJfKmYqX3Jx72zDxPAxzfGQSbxMMQ3AfkmW21xHbR3wWBYUWD2UkUGm483HTHSrjk5k",
  "key4": "3jvKLg4DnHPD7f97771cNX87AydkAfNyVvSVSRE2EtXzVoZp5D3mjGZ945LVA6w8cTbTJCzkRjD2JwsNYiYH5owf",
  "key5": "5yEkQw6jCUoHwAJ4DCj6wqiPawoScYnPjUkw74DSWai87n5TQiCvyxBpXJVRUQd2xum3VsQNDNRbu73E48X7PHWS",
  "key6": "3XnyCFaUgwuKBTHz2xFHcSzGJv68UzMdq28cGfAewcGfpFfhjGsEKpqhqSwoZYuosng2hFvYPGP3oVVdN6ExKwC5",
  "key7": "3cobSnYrifTBu2E1Yk4AHUbA3WwEBfFdSVsNQRmaxWz2qHhcz8J25YU4eZrtUY7h6vh8ZiP7zeeVqYyWTg3tr8HJ",
  "key8": "2HvoZ3HzUTxW97CMRn8s5DUqYVBnZq4XdS7MFva2Q1rbEnMQonDeNgEACMZpgwXyJY6zQQ1snoy9Hy4G4JcHCVqF",
  "key9": "swUDgXjNre7G5n155agCtf5qdNDEEHKbbsa23gci6bHh3qJYJ9vDCnaGyBx8uCVcHtEfHifjS3y3oKDEFP8hroj",
  "key10": "2E5UqXijSgZfZyPEAJN7aTtAgyjPpj6WqtnTXDduwYvHYCbshzzzGggQHHgcna4LUNaWFn72Bxf6MT4YdQ8VVj9H",
  "key11": "2W7mDg5MVWZjXtGRxFBGxFow7bTm8Gy3r5s8Se3CNeVpEbmnFNEXyY2Zmx44ruhaZwT4XYpHT3fPRPJffYfwdKTd",
  "key12": "5cFyFfWsFGHwnUSwgtfisNEcGE9ubcDJxSrPBUegxPTwJye6zKTA2ckuyXqFZrMKmahcBjwKqvmK5RSBVcAU3DcM",
  "key13": "29uKyRYYuU3FxFVmqEfbm64SBP8gBuV6n5QFZ6VXjbrgmupe8hvLCWeJFKbjtHfHD5DjWuuFTT5NyjdrV6N6hpRF",
  "key14": "5WzpGAdNxw718Wj5w5VLyYtYzkZkz7y6tHKTncLCusfbEhtbDSLzmeQdms7fc8WD2PW3tBGkLEcS7NHfuBg1z5n1",
  "key15": "3hRx6bN3ZX2icJUDdagJheHK5R8zFtabgxpPDF4rCHxseY7HnsyBnsNuTZph8wWZLEAHbwD5VQet2GXbk92ejfDH",
  "key16": "5z5McRYUn9xH4VhDCfW9DtjNRU4zRoK3dfqtwYCcRpvbfZyeKcZYQ67me3wfUcuxg8CdNgSSwXZvheAnaRNi843z",
  "key17": "26xrWuUtqoyM4yCdZYozUU6dPcNS17ZGsBwAmuzjTk3fXmWnFMcR4UTsShKprE7BS4WD8kLUvsoMPjXqUspKEy7x",
  "key18": "3xkMfvQohpyamfrbU22t8Yic5VSvDFYgfKgECVQWDHb1VW8uQ7RBG3WTXkKJ3CKxX9MvSkXu8Pw5py3dFmrgMLK",
  "key19": "5D7qZ47UVQnTsGvUpzBmEHXQEsS8LvMBU6Rg5G16Hw37gyGeWwaJDaa8QXWi9DTv3smwTGhZvL5VKJj1q5ETXNfN",
  "key20": "382C7JtwTzBZ6UDWB7vFsf85ELQbqrkmWxHS485UxjobbH3Sas5oELrkpcr7PUPywdjBejV5vqh5WPsahiCX9yfA",
  "key21": "3uNfpBZUKGdPDt9APyDETk43cSSu1id7uCXLndhHF9w2qarmypkH1jmk6gfSYeJzeZY219irrS6rMZ41VVbUmpTr",
  "key22": "3FF3Ta3VGPXHnzSB2KPbo1zVrEdU4bNouv4syvhM8nCyUP3p1eYwuWqy3FYUqous8xcN9GE9uPGpN5QWii573SwH",
  "key23": "3W1qfbh5vmTYpfG8XAtkAod8FhxsPsxq8iAMgt3ckzZ87YX3jUFb9TK9UyjBWqXTZm7XjjVNSpUPav4A8LU2k3f",
  "key24": "4KSjooyRNK4ST1zYQy3ZsUv2ibYhhbXZSYnqRZsPbeFvKRFUitHNmdfo1237qz42Wn9op5uZHJCbf8kgDtWpys1d",
  "key25": "58fRd88Zu1DwqcNxy748H1bSZKp84wYPJv7rkNWdhNoXezDpZsTvUsxKgHU98JRR6duRXNgbLck7gV9aHzdmFiVv",
  "key26": "5Z65kDmxgWiAETaULMBcRDJoMgfqDcs5HTghLPXu7bQMB1jX3t8Kv2aQxTfqF77USsyqGBbx9XNMkZ5LP37bz5ic",
  "key27": "2Gvtqaedh5Z1hubpfhCJAxHL3ZN4uvxEMhj3rebz8FSptJiPBkdDHfseqHfdbG5A2TyAoMs7Q2gZt5wa7NUXYz6m",
  "key28": "4eGgjRTrfMDmZpxCwu94VMgEzqq1nQp15mkYV1NwA98Z672P2tjjmV7LZY8ykFLVX1drebSSTgFZAL98kNget5NW",
  "key29": "2aQcDVsXgCzmLtk7tSpGBNrdXF6kTXF7wmwLfGnpChUMGepwWpoQUyHSVtKqi5BHfyULXeCfF3m74sWLcUFMopqF",
  "key30": "2Uzr1fGMxmhZG8C1DQW5FacQgC2pRYcYcaWgWXRCCixuNyf7GtCwiNFYF6JSuppe3QwH15onHbr8AMdcdDLT3jVZ",
  "key31": "2LHHsegvREMdjwS6eqEKC4UEB5fLUMRhmit5V5FCFGo6ZenxNX858Zg4AZftVDhVvbgmuF6ABf8HKgujgVRVP445",
  "key32": "Xn45rcDdTLgAdCiBDezS4mHg8Q2Q77Xif7rYyvPZeZ6xST6Pjqw82j6xSTNLeeCJ5w1KqMUMCGKGaTTnyiHX3rc",
  "key33": "1Ggd4LPyFsSmXirN2Tq53EECAHiWxVSfPoREsJZQJzZ2UzkPmXi6QFuWek4HMW5zzS9gWjqaqdnuRL2czPw8zTH"
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
