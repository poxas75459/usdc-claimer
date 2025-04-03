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
    "bwthUjZ2K5pJpdU12WrPi3hSVdR6PrZVNvnEEM9RMeRPD34sSXaud31yMMKgSCquaVBRTz6h7U1BEcQAhGk7VXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651JsvyDHwkJmtxVrPtA1LCpHkiX3zGaXysjiPjtXspt759TRJReNDchmYbiUs2iZH4Ptg9DN8QKBfJ7TNBV95GQ",
  "key1": "bNqSPyA7YLwBy2mynrZb5gTwZBD9JW9uvR91k9YBVDxD1Vx4rbLnUY9vL8pUWZoogdJGoxhPPxmLbSNgBPvTPT2",
  "key2": "215eH9r3CdsxxnPoyWkeNydsVsQD29swtxHJ7ia7XAJo8dJjvmRqdRCtctpZ6DVpqMpmy6HWGgThHZnwpVaQaZiF",
  "key3": "3hL4BjwswfbdR9DfAUxAGrjEZhwSyFrdDiy7AjZnfdNdeGY4Zsv2X5GYzehdzpSaJT2n5BnWCu8RkBdkdmJ5JMiN",
  "key4": "5EmvqAeUCqimPAckSi8ECa4YaWhuTTE79hfJwE5T5QSQTaBAXVbFYK1hYzCZuBx4zRastuubQif8DQhZdRcEUE46",
  "key5": "2hMjhMgcsu3vpxPdBJ1oMcbomRuprZt4GB3Ppn19nstjarDhHx33KsbouFsorVFejm4LUd5dxxjFWN6zJh1SBdJm",
  "key6": "2ffo5aKJPYmLkoKcWSmogKVCQYqXikhGdaSHpGCwkDCnHpuZHiqM88bFx5at3nxSkizVRysh4BCJkLsgueNVH5F6",
  "key7": "2ermGmxf24LnTWRvdbXtasJp39K3EneQ5i1QYFQzjHkLUrNHcJXF3G3kfbfT5iRYiyqkPE74cxjYhyqjpuB7isT8",
  "key8": "4HuBEsCkikbaTrXwrEcMHHGuJjARubdPhvTujMZ7HCj7qRk2V1Wo3s7yruHhfMxy79uUmJVm5pFgqUwjkMvA1czA",
  "key9": "2e68gYvUbDSejEG26kqQHyhJGqFqx8gLpuSHXKT8RM5SJpwdLhnKSVaZPqcc38iJv7mekwnoPgRVbC3dgwi53D6F",
  "key10": "2nqJKEH6PoeJxcVbcedpy6i3sxEgxJKQzAJ5J7mwP9LjRmc89qGcQNfCpxT5Bx588KgCQ6PRwWHpeWx3zS13Ccoc",
  "key11": "4jDMZJg8aYhEeeqjkqUt69ee3wmyWjemeWyaefZT7NwSSiZw9MLgBFKLDm3j5JhfMBeCkj9g4K91rvgxuwo5i4qt",
  "key12": "3RBbmdj7nzGLmiqayYof8guiabiJj83qFeeQtvJ1chdzWqR63imxy3UufRrMmQxkaYfcQvCkxNroPdJ2iWEq8AqL",
  "key13": "2Lx3nkaNnxNjUYeWvsm6tmMtzAegRm685avQafLAw835EZkarV2byNRyLTvPrAfLrMGm2hwk23KnTweHX5HNEobx",
  "key14": "4NSAC7Y9TRffnEcbBHwLrhu7DCYbSQtTZyYZt1tnuSyxoqakjJnh7JmGVM2LSe5bb5GWpNGpYJk7wggWM9qRzW4L",
  "key15": "52CanKYB3LGa8QcP4TS2YkqiSNQSQcvScC3h3HFqJ8TnQc4JVyZcTazBe1bigpimGuKtLKySYSuLCkXYtQ3AnF1m",
  "key16": "2zsiSA1q1sNqVHchwVCG64v3L2AqYeAmBfsEVnegv6RuaSoBh4mchJbZeWv9h1x7kb3LxfZFvgnhKeeUELA23eA8",
  "key17": "5KbYjm6YB1nQ9GV7T2xFepDi7nCCKeBxhmHwASFCooYh9sL1PrTYjFsKdU9BYpRMV8pj9ipmVAuTGjKLrDdXz1XZ",
  "key18": "44nLuNBNNB1zPgEbh3NbgDS7HfLg5XuroPeMkT7LudLKAJKTmhmypzRbvA5UEktzbyDF99yE3JwTFZDJ8vxoRdDA",
  "key19": "5n7HmPmn3uVqWZH187mP2fqaVXGf35TYkGrjqKuyTo28tcCf6Hc87cRNfrYvi57XZtNGkC37uqh3jN4kwHNpHgsP",
  "key20": "22LQpVEPsb4dLxELVmH6FNUuk9MGGexNN154ZNx6zDQAPF71qhcjxVcgm2CHf4arVUSouP3EZqsM65fDbbD1acdM",
  "key21": "2aGYLnq31StpdGrkqHbePrN29aMLhorVky6kjczUy9jqPY31eQ7rCXQgmCx2MAkSoG6RdfFCMu8E9GFxozSrfHkJ",
  "key22": "39Y4xmVk6GzD58DJ6LSzkb8qQRW6gep6cquo8XTytukR2oSJ8rgcsdX7Z8BzqPrAodrpzqzbyA2Lb7m5KBs6CNaj",
  "key23": "2Cc6jxdUtVhijAqbDabxeeztRSHLbTv1ZFHqVsauk79xYn859tZXxs4DHYBx8haBLDy1Zc5mECnu2uCoZ8znedsD",
  "key24": "ZCL9XrsTT3QUhGJzSsq9qPFjKasfKypWBehpRUafGrG1LDHPS75zQJaUJAmNk3FxZjSVhSuizY4ZT6g1ta5HDGG"
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
