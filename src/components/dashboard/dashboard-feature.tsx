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
    "5kf7rj8y7rUVEWyUkXsCGsbxo6ct5Kk1pteiaxJrj5FZjSxZgYvcUyHo3brjtcigNezSskRMS6mbG3f2SdYdT1gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rczDv4YdH3oZ9KB7tjxrw26c7Va4dBJzHcND75eBQaqZgP7aZwYDgQtiuyTLygUoACTqySVipzuuduzby3ydpy",
  "key1": "5qHka3jtPCQp5bFXzkTC3G4NEdcmTh7hepeACvnY8XYRjzgaTBP5oJvevM244oxBFt8Ex8anwyYtzYPCx1Zo61HZ",
  "key2": "WEqZz93Qz3voVQYqtnF27BBK9D5zihM5tfqjJkfPXuxHHSAG3FtC31v6QzzYcwyMmJDpMBiC6YqsQU9bfbsCkJC",
  "key3": "9RvDjykTRCGxLXMjJ9LMxZaNCWsJ8xtLirKTa3PQwQPwTQBCMzTQLQQs9jGNUXvqZHjTEyLWQbf1iXQEzJhBPqH",
  "key4": "2tRT1LkBPMyomSjLXhoG5hvVZV9VcMpqRhji5yHnxckxd8mZiubSK7XmeR4AaQyNf3K3v9qtNWTRHjeGXcCDQrgR",
  "key5": "3BbVj8w6wj43PZR6iNBPKhK78bywQeqgdBbmCdK2aMHav4dfHg21i4vkLztTqXEMxZNxSabW74HtRZKioKvnCg9v",
  "key6": "45cxUxsF2GKFJj6b2sG8JD1ckkgK44fpue8C6L8JmtH5tc1nNd2gdtZzDenafegEmLy8aM71iLzVq1aKoetxp9vo",
  "key7": "58AWoRrwFPb9wNrsBKVWBJf9MbKKFpZhj5WZKLrY2tEFxVPLhMnyBMhK7RutMwmzeHH67FCAYvebgJS28kvkaB9t",
  "key8": "5FYCJZkw7KjzQwupN1TfKXFrDctGHVewSd7YH3C5YMDwQoPt9zR6z9qcLXtVwAj8eDbi3JQTxkmB5ee8kHb9ewXd",
  "key9": "gPKL3zmuUb1kbUkVhTDg5M3VQWoD39mf6BJWuCudVp8PC3x5ac8YeZzHjzsYdB8iK3ZLG9b6eqMRzCNWokVHcdz",
  "key10": "5g6UrW1NVg4N4KJVmeTUN7gPhXSLvDPWwukduZ1S7nHJ7L2mG9z6kovXQv2HDZzLpSQSqSaAFNAWjRPzVYGdnBeZ",
  "key11": "58pUivbNWh56WfUMtPWcL7PTNLLiehMXLyzaX5CNDc7UvvX7zEJMUk7odgLKhueNzDxEnuXNW392E55hPyQmWio4",
  "key12": "5hCVer2LT4nFDUf3LQ7TcytjNhmk983kUjTLxWyacj93bYgaKFtyDexuqsuKkBW9AYvMsr6ZKZzSdh1e3shajeNU",
  "key13": "32H9a3FtMtms5uCurWLnkhrDyEYfbfr1YTJDra3q1antKysuRDtfm4nsUuKKsv7us81hnTGTrJzsrMoM4Qg1EkYN",
  "key14": "26FexLSvzH9owtqmvbBa6s5mt8ZA1VjM5qgF9JgazCwqXAAxz9zPgbjuu9eqPsx52udstqen4bekQJ2wBTM7Sqgt",
  "key15": "2dCfgj96JZHftVkWukovBADqV37fu9svF3C2FCbD3aXiCqN91BanabGWCYBxwHFKogGd1NKyCKqPFymYczDbUF81",
  "key16": "3S5AbY4zJfQvbYv2JdVFZhvTqGgi5NjkzEdH4EpG1FMVZNxQEhF2N34GjLxVvSjfV5mBzN7RFPn8rc7PUHLUBZNB",
  "key17": "2oc96BFoos2HSJoi7bnvgW9PyLGYN3AC8XSW56ww44QQyjGh3Vk4DmrGbk3FtRQHkCtAmovzReeTynPhKYj9zSQF",
  "key18": "3G2fwPfLTaZGqqTnPiptcSGLQk9Syoy8p55iAtcugaEMa7U1PErgVQJ2rr2LJrbrMYfcKNzL2azn2uaKD7CnWWsW",
  "key19": "4mhnsEpG22yJLk9zbkQ3zZVjQ2XogZhZKTyvNfB96smNcHCa98kVjrka3oArQ3QnVV9mC8m6QqfJjv9bZUJL1fwp",
  "key20": "31KP8D1LGML5aCKtRcx3zVhZgjXUZet4ioqwKahzcTTTmBrrYHXMbS9ficwpsmwPL2ivKJ7spWBtqZPBLZLqt3TT",
  "key21": "2uFqL8NkjJpyLGzpFNRc9YhjWDmczJe8YPKPAnaNzAyb6pFn2RM5y1eKhSrfrgckCWzX1ttp8589t38XUJkZGeeg",
  "key22": "wrg8YhQ5GsntCkPDTMzSvTRzpRGxFG9tcZn2g3NheYRrxjEAfQdg1QdHx2mxJ5FNSumE6ddkeT9ax3FuKrwsyMu",
  "key23": "5sZshFcV8RjQJx5rdnqgC3f8Sndhx6pdokN7oitVCmkhj2GqNbQFxYtDpMGkftZXzosPmq1dkgdFtDSg9Y4oNEHU",
  "key24": "qBhdesz6h5eNknYyAqYqoJcdhdLoZscEFNZVaNTWPMbSMbTfVgp4GoEE1GXS8egSihGdE9SEKC913hyWcFTXzFu",
  "key25": "5qW12ZPR4kPhSiJPVRra5Jf8bZee8kVwAXB3jc1aRdKtitcR1Cbz5SJuVxpGmeyxNZkXdGpQuMHzGARvp9hWjGma",
  "key26": "5hm94yXfSTfM8UX7bbcK1yS57MGtADDqPcJLFXKR7YD4rtb7t6VTcUzx43QtWZyC4euxCg7EP4SFVZxS6h5JNhZM",
  "key27": "3oYjhPnpb3sCn6yCdvQNJ2fYuDXvdyvxFsUpAVUSkixrbUQUNJfUtWnjoT8eEZM9Eg6uwFXe64uSTXxGgeVeYu5V",
  "key28": "37dDqu6FPm71kmPPn1EtJKxCzdbHEnjwF4vEZ7gywwTY99hPSx7E3wjpUJ3NSxUPD1pUdibpSRsDETdPctF29fe"
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
