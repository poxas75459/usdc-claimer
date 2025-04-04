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
    "24f8oBEdpnF2qQ1vvZJvH1RZYxRj7TMxf942fxPHrabykHvX3x6JbAtiyHcpcZCcwZy4nM1n35DQnTAThJVk6ehW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMwjKh312i7N8waUSasF5wJ1nCHc4nVTD8sm22Z5MWkFo5c1fHexcGVg2VbxWt4kSKroXUV4oyySZ4rQpq8WgZY",
  "key1": "599Fc3EczV9hHqL7k7asx34ifVATCEP9zab37JpL8i1XWWKxNaVEUuy7ERFMmQxG8QTcXeVC6btdTYj1FcZa9kLo",
  "key2": "56Bm4n71eoQRsJ9ynmoe1vVW5mchEpT4p7JWmvJcQy3zYvpei2ovf6LbGNpANaYfgCwTtZDkFWZEk3kSvgZSzNhH",
  "key3": "4BembqB9HjV5qq8cVbRAoceR2TXkvX3G81dKgHBt3pzQ6MHsHAcZqBS8R2CpWTiN4DxwYFZ5GAWFWNDExM7GnHyx",
  "key4": "WgzFAAtY1Puip6Rdv556PdqwQzrPLHpygXQ1DL5yXnJw2kSDnpyR87rrsjB9BrayL7ic8qAiDwq5KTiSowzUUhy",
  "key5": "4qK2tKfWHbh9i1sqWvgwpoFimAN2jmKwtXr6Ufzb4cvUfzT3c7TrzCrF2MJmBkyfnNuq7t9qf6R9a4ZqjGPdpRfn",
  "key6": "3VPeZxeDPsDHNU3dE1raJV3goV6xx2Mr8EVL9An4tu2Pwbomr5HH1MphBAVXWGr16oatEm1A1WBd9k7dPGLeTBp",
  "key7": "2DxEc7hkQ6JapHLo7Jqj53RevPWaLxMMPwiPoZ1cBE1cUdixEhaHUiGbYPKB41h1gT819X7g4euyvdMhmbv2AM6Z",
  "key8": "2dHrKHCp7WTx97C4HwMysKKARV4Doc8DarVvyqJDZ24BRt8jZUQz92RSwRBZqjsZ5qcwFMAmN1UQ3goPyaQ9RiML",
  "key9": "4vWptJ6MvRdMZfdEpBjK2DLdRnwm62U6L8oDkJ4749sd9HED9Ef7j8ThG2e9ucrgnaMSrTVvh4VNDnVmfGxy9r8Q",
  "key10": "2mqdDABFHtP7G9MfhVH4nzfvtQMrgFGgXvbpfda86xSSchrqw1YWHntB3ncPfhDS3XpHDSUG1BbUexJBVaUiWuJr",
  "key11": "4jLL3ouxMaD1n3A4YRV3djjsLQyLbZVnRqKfJrLdjQ568SvFX4xUdkY9wVMZmeMXcfsXCBUeC6x3T8UjkbXMwTCk",
  "key12": "2TbVtzpFcFCfFE7zEeB5ktG78Tj34RKfS7R6aCux98xwenD4ZqfU1mgR1hiTM5m3j7S2HRXhFyjEK2vsqr57nfmj",
  "key13": "4gJa5kNWfLAhTgN6oBeyiBLdfWoetAkXEEUvvFyDSFpv2kNCRZyp4tYzND5d8iqT8qnNJJ44XoDAqNhhRQ7uB93x",
  "key14": "5APvxh7EoQMfWnmYu4prQnFWFqu1UHNaUxCutxnK1iosXNeZ3LYSq8vkTa8o5GdExbNvZC2bKrHnv9Do9TPApLcR",
  "key15": "57Cr13br598BciViEqMabxbKERMBRuaQuA2Hbzzdh7jAEW3MqeGBCLgQFe7ueXwxBah6gVNqJGsW5CSUd1FF6AJQ",
  "key16": "2eCxuQdW9xGRHLa3YBrEBfph5N5a5qaCA28zpuHswscJQLpgCZoeJrNji2eG7aevVMLcSWfuahsC43sF79WfqmgG",
  "key17": "31GF6EjXJHoMNqWq45t9Vzt1nWwVj9MMVjZpysmYZYbR1giAehZgLDTxYXJmVodncNu4LWA8uNqg6Z9D3uUxZSmg",
  "key18": "4JsWMpN6jjgHkmAFCaB53hRhKUrjWF3xwU6HeV3RU3LcjS3c9QM69NBhNuf1MLCtjhU2irWHJpEKbh2kLMQK57Sr",
  "key19": "3oarYM3Caf1xDFpaDD6znLZpVZnVSkZ2tVF9Xgf7nbWSJjSoGedPp3aXKZ1wxNKSCFiNw5YFnJS5x2kcQ8kc2HeF",
  "key20": "2Q1o4dRpV3JKoTUeWpZVd4HmpxzBNPLLUKremM158xLggaA8J76mc74BH5SgVCSQssvguZe5jE4iGD2MzGxijBQe",
  "key21": "5fkhzLRjJLfef8FNyCpL8WQLNfCeT4xta5o4tELvve74zu2FCzZibVRcY3K5hQ4mzwNuMWkgxuNwNToqXUqEgmAQ",
  "key22": "3P3YH2hwrgoUkd6efwK9xGEWqEPqiwTLM6iMsfzppZraxDacUkM7v6P6h66GkxvEUhrzTPwR3DTPQTTsguM6XcmQ",
  "key23": "zQXpJnpQSuN3SbNPkjNUXLHKdTWKcuaCs4TvF8EPw9KgeLNPXFxKcuv2NVz3RJVE5MuNYrsWTF8AHktmp9vSbJP",
  "key24": "3s3Am5bEK4FAK3Gbkn958L9GTpFyvjcCXKCi4UyZ7ntqLxmQymhS14t3heuVYhTUfL62R5V1DjP8MsqJtENaJmNd",
  "key25": "4eE3QoftnYrak39jF8zfZffkAVyMVaCDgoacaZUvWDVaZQJwWp3Z6a1EnCDYZDQBMk4ZcTvLtveJwjUvz3FaACiy",
  "key26": "3QvHgeBq76yipKqLLfQfAfMHiDRUiFNpZKk4hUauym2KwnjqJxQe4VE4GnaC3Up6UsGqp3kDk9TBKv2e6NNiwiGA",
  "key27": "3BdSJG3j9wnnCbCKN3jUqefN4RwTkYL57SW5SpdU9Nz8JyjEtf1VcpP8ggsS5ahd8Cx2qrYnjCWErbpoUh4kH7Tw",
  "key28": "3UkhzDsVDQkAa31ZknozPnxxJudnCChz1uVnJVPoCnGqK9qdRhDmPedchiDEAA7ULD56fE5me2XJykVYiTaySBzJ",
  "key29": "3L6euxQYM8Y1vUTYMLAaiatfDFEnUgKsLUMAzLWriZkToBVhYjgyqJ9XfsvRCjAtpx8WW69UqTSFXW8D2ngZ2iB1",
  "key30": "3dduJYaCU5eRxfKM3SP8SENUHYYmCuXdGPca4DdL7165Pv3PsTrJzfBtyhXTMtFFkcyyqCJWSqifXf9gnGh5YvX8"
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
