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
    "4WbHwmei3f9SVR35NxAk8kNKTN3dGZ7dSXEPV4QL2TwbTLeJU6oAaRM7Dy3QezVKpVSXnjcAEXiP7sGkThUgs3tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsLaQ2EXCpwYDN2TYhyUAfPFYo4bUB6CajjmeFGqwLCPu4rt1GVUkXaT1gsH6f3iSk3j38LdDphpWtjWnL1qEKZ",
  "key1": "4c8YibZRBS4cU3Vh3Q6PtNsQRSQvUAkDYrMLxL33twbSxQHcni1dtmTAHP47AKhnr66D9qS245gnCwoG8bezEDfQ",
  "key2": "jkUuvYqHPnjqE14jXnd6QWfRbY3n1dkE9VvUSfXMfWn4m5jjf5m7Qz1zDzqkXNPLZWeW83EBGMoYczdymhXLUKo",
  "key3": "UDzR2wqu1hzwWfLoYgE1akYDaxtjTBxmtfPUR1VRGU92916UdZR3Ldfm1zvGNcrgSHnzJFMhMyTbDT1DPWqfG5k",
  "key4": "5aG8gyQVnB8n1WJJ7JCHMvrErjHPiQyqCwC4uZiJ921zSEbBvMJxebQAHDGuM66KHMFYR4u8kC6b4iskPSpauTMP",
  "key5": "5bTgkxT9RnmBuDkSeG7xeUsntnV669ebQz6eCZSPUbwT3vSgX4YrcUkRWJUJNXm9RJVNmzNxi2Mbdqx5mss5D35x",
  "key6": "5LhLazQaWom6JBhgUp9Ri7gS1yjjykHzjRTfRpfMiNRFazEL5B2zzGwNSV8arpf5qPR1D4AJU6dRmoPZSaRnmK7Z",
  "key7": "5vzW84ohHnKp8Qbt2V1LZCPJ9JRHTgg9NUStieSPcedRhtMNfWbbnbDW8X3ia1ePN98zouDtaXwHQu5fyJ2jLXeY",
  "key8": "tCMhXwif817ejTHmkBjzXSLDnc3feUpGXuw2Ge5uVzdBRhW7tjVhKusMWDk5rimXeia4xeB4Qs66i6XNspXy7qE",
  "key9": "GfwAYHRoY3zNbpGdBoazJyMH8UgTZYoehANMHacVieWyJwFma4FvDzAtXnYxrtcCxPEE2VwZZp77wtzeSxiW5SQ",
  "key10": "EPc5hexf4WV3eDMqAL9yz7vRBSNrKiQ1SJFZyuMnA6236eA1t7ThN2wwCYuf2MWCS8oryJp2VoygF74HSCcWE3P",
  "key11": "6tZaRCqQXCFDfW7maGRj9DTRSkqW7gpKghvvbT2c1JVAfZutvN4RHHd4m9rPyv7maiiS4nSqHBCzYGThD6usetn",
  "key12": "3hwuyw8tJ4sipb4fxtUhSqEXxmmgGsZZvYeFjNZbG65s7Xxenv55kZ2VdWqikjhLWWnLnHSA7Bz3LVTkcw3qvoHv",
  "key13": "3vPshwCpZPUtifdsTdaxPqMcJuV28utLx9SoNoyNUQBkvACq3R1YAGx4oAnvCchYiCx3UUhX7pJdcEYbiBpq7pfN",
  "key14": "3TGJ5SCDmZ6eCURz8aWPdayJW2BTvAQv66CEfDhvYGrUUK8as4tQK7VCDMtbBF5K2xfGZGDweaLARtRtq17axEVv",
  "key15": "2bE4UMs5dqQrJTbXJkWSGENs3Fv2kviEQh5ydqs53KnqopY6cmaFssue1mBFhrSzTqdoizjguHsGcrSd39vU7fmt",
  "key16": "3bRyVcjutnhMEaZq4jTqQvY6yyK5iAnpf6zMzB6gQeLJn48jpsehpGmc4HKB8MjNmp8qg7xmUKaTN6kUsu2VJMNg",
  "key17": "3LrDv3DED2Gr9cWwn1eRUuJG2ehwRsnbZshnJ9Xg5bUHttDkS8bnngjZq7m2uGCtonnhxT4JSTbMQp9PbVyrmFBy",
  "key18": "3QVnrqc8BsEqwxkG5eP8N7UCoVuuu2MaZDprb9B4n9bYsXvncoR5911JqdnNFf6HCQUQqV5Sh3cU7SmbcbV1SXLH",
  "key19": "4t5dfWvPe9H9DBnUxx3eewvSkW9HkmWcUK33jtd3pvTHBWYWcravYhsypePvsVPMLrfd42zjc8KdGs8qGvsTPcre",
  "key20": "4aLvvzVZ4JsMkA5fv1zEHgerkR3PKnPqGEu8kA1PvqVX8k74q9cuPTgsshET1ZHxDQ9xcRBDRp8GS6QQxuExFzdJ",
  "key21": "3q2SG6vU3iXM49un5Pk3BDaitkL82MURkcXs8ryZ6G8b7BdW5nCMu6L37ymqUh16tzqvowJw2eYxKvKqSKo2XXL4",
  "key22": "4jJmX1b5TU2huNyzDt1K9VdqRKjf8WDciyZj4Q8rpx9qcnA1F21rc6uYBkgn6geZBW9g3AwDRZu8XzP6QNV4k1jA",
  "key23": "3BZ4aHHDGNecVPSsn5hoRH5EQURcAbYEJWicm1msgGHrgR4mvGeap8sTdfPf5CuXvFrbcgNedk8QJumPnnsABz6X",
  "key24": "4JyTALPbpzR8Q1BGNXtmrN7cZEyT2MYKypamCzmrkE5SF2fiyhmfZS876jZ1DfR5PZ2QMgmyt1YNKGqKnxHbbWA4",
  "key25": "2SKKWcVjZBpUHSgSyeo567v9VmhD8CptTcwzXpzPsi1sNon9caHdDhjFAfgwsGN9qNada1BUfYmC4mAThVhMR4iq",
  "key26": "4rhDsGjrsdCkbDTSbnG3fT75Apoaw8kkeBPHGac8fyA3hbFtns8aB9kKJQztUsnYrYZcszoqeiYTzKhg4LYugjde",
  "key27": "HcQdEgR5qfiWEVHezjyZWyvUwr8nD6PLdLC2Fz3EavhqAwx3K9RvaZ1A7fjYEhRTnhxn6qrDEfmztMZMiWR3UHT",
  "key28": "hQM5Bqn3RSM7xZNuPFxH3A7MuNFMj3CqtdSdFYfDhiJBdE6LAxjtTxJq8wstw3THTfFxuxX5BRTPvCRCsk1jwzZ",
  "key29": "3memqgARKdD26SYSdyZMvku6bcFz6TSsrVnpKXzu53ry74NwSqa9YCu7dSuoCyBzREuQKEE8zoB6CQSENmk7XDhT",
  "key30": "4Lia7HjwdBpG11mPypWvKVxSocsG1Df7NpGzbUgcnG8FXr2ZXxpGPzBTwGZVaY9YCXhRxdrcgM2eELH6DHhi1E49",
  "key31": "BB23JKzRNTTnKJc2SUL3htSrQoizK5sTc3qP6iG8gk7gLfv8sr5oDLTzTcbffiZKw9PYPRsmiYYmydmoBDGKeGw",
  "key32": "4Pn2wmzf8fZZB5D7r19tTNoVEjmPEKxXe9Nb5K96u8XU1AKry7UGqJeKcp2vXj3Rxsri1bip8H83wxxN1jEW6gwM"
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
