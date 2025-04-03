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
    "3qrjnh7LUYbEy9zUG6DRFQPd4UUaVwus7DZzKzjwbo6KCU9GypBB45bXCVvU9kKqaNxc16iVsvS4PK3rbPt61w44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vc2Wq4kot9dgacXFBdE2qCBMyZHysC27ajWxydvKzj9C8pt9RzPqpUC629dUBg3nyMKZ4KXKT4kcpeVTYhyqndF",
  "key1": "5chDQhUTdKBCi8ZLykNrhRsjJZMCgvcr7NG5VGE6iL2KMtMjP4tkmwuvE3Ugv7ojTzzd5ahLfJs8ycpbRdr3zRDw",
  "key2": "R82d8DRzsE7XjnaAi9YFdrRefurEg7fA1hYDEimtsHwfC95bBsUhY3AnbrxZHxp2GcHZRFGZTzuxowrdC1CKKok",
  "key3": "59Hv3RrGzN5osFDD9F8HkvdsAjAkPzvSyuExYQgNvM5LSg2nBg7cN512ZhzuQdQqWmQKB4Kx24QA31MA6SurcdZL",
  "key4": "4dB1w36kj3H9koQtM9EbxgxMhdnba1j6LvxU715LEEKhYXkcMsABRX267GoQTgPu3HBd7CUrsJ7MTGe16owhX2HE",
  "key5": "39JNsLgaSxpo7vQvQFwM93shfbbn4piU89ynfyja9aAwBSqu48VDgpWwvowHHDritZnABSwegqrksqgXK23sf2me",
  "key6": "64K6WzX4E7V3Z1boHCpaiKhmTrHtGo59GVxRSCqKuJRmyHPDURmpUWdf6Q5CiyemoCjj6CXbNEaoCFuMe4Kdj5cV",
  "key7": "3ynQ7hAcemtoNzM1Y2MNKnT53AiQfUtqJy5ucNktx6VpbgX8XCfaHkXJLvjzd8eTweDEh8QQVaWEoah9xVFDeVhs",
  "key8": "XiwSZcccTKFUMTqGHZYvDSpEFgpW64c14WxX6fAcYCB6sCdi99ErAq7qgNZbk7V2EBUnsFkZuYMjYdwz3h9oNrT",
  "key9": "53aYrNzEiUcyxgnVc4L7cPiK7vwmkNeJt4ajG3gvZDE8Wms9UjMpitVQTUrR3N8tRi4ZewnzwzQPUQTrBnjJagb9",
  "key10": "NEzUGSRko6NwnB5MTWnYo2BAbbkaEt7LxczwMfRBURt6Xjy9mDPNdabfNyazPrwM1YWU2dyarBHiJQbtRr1JkLg",
  "key11": "hXkaAPcT57qLMcAxQ9BqV3Pb7hacs9qEdkV4XZYNTLeregNQbjzh8mboed8too7cxVQ7B68eKUe6D71cXp82DJu",
  "key12": "B1mpQ5z3313KxE4bjZvMSWPsHYSF9FeLiZkQovEHyyVhZ294DS1uUxLenDkSbCwxP2pqmF5d24RQSg2LC4t8spB",
  "key13": "5uRKKaqUQPjKk5htsG8w11Wp8gLUsEBLfp1rP5yWj9w2D4ZDy3Yij4pA9u4GK9TkGHEoDX8Gcn7h1kjeHjVyxstL",
  "key14": "g4MXsdnWxw6YqBoMjTn2BsmdZTAoGTHkEAZVtvjyDh8gnXZ6rHYJHYuGT2atSUQSxYoCL1wEVgq58CkdbTkU51S",
  "key15": "3L2K8rYSmNxMpHvzdDgDdU1cdfr55kcMQYiFtDE26buh6MVuzWJBe6rcSVUDF9xmkkDKZaWxvseDeZscDrHrd3XW",
  "key16": "5XCU67gwKsBqJiJ9kSgb999AubbrLdxmJo5K64zn4MfTqQ7XvXng1zcURodEgYG7hQZRk3cKN6A8uy22LJDg5Q26",
  "key17": "2KJ4DBFB1R1KUUf1k79SZNVXRBG2oJMty2RDqGeMBmD9XqRLnF7Gw7oZ7Bk6YvcU9MhCfj1efxf7a7bq2pTqpmaU",
  "key18": "2J6SeWF6piuE7R5ryQavqsLYWnRFdmswLapVgasqhiaL59sXARwdB147B9mBYJpYGHPCtXohPruVVZ9mDNGyWYuM",
  "key19": "443o17aiGXN5qXWn5UwKEZXEbRDQ6DsuGzD3VCKXc1LNCGSfXb94VeRtK7n7VRuMQBaAbSaf2tG6WhRJ1beeUCLj",
  "key20": "4B3WbtxhfSoNRaCyuYAiytZUMns8q8WMrqiZLuLtjh9PKY8WYpnDHcpF1BhUcHqUNFpXSb8tZwGSrDRpMXZFyCiS",
  "key21": "2XoGP7FiBKywYhzg5cq4htKUChAAXo8fMZCZHVeTKPzQNhgYcAAZhHxqj9UVvkU4wXDHCec3bMArWWqBMRdFLpPi",
  "key22": "CcMSCASTb1DhJwHiAn6wFk1fK1AdA5npgGVYqLiGX7jjCH4dGpPycieQy3A2JjaQ6iudMFkBhhb7MUpfaF4F3vE",
  "key23": "nFammfHSE4nKDkwDb2N7ZFQ2ARM3ug3vfVKoeKT19RDS8xtVQ3v5J97bV123pGFiAy3cpCY1qp7nZex49kU8t6s",
  "key24": "5HGbZkv3HQd1267TCoGubAtBGHW12xXDWYcFeZWHC5Tuogey6opco55LTzREmeTPjQS8vT5B2ZmViU9DcrLUsx7t",
  "key25": "5DkJhMSf4Zmr71ecRXaEpxdpnknEg8zCerFbPgBnhuJeRjG5jdPCiVyS97BNcpx62MZgQfTwQmQGA4ThAYJnxkja",
  "key26": "3gajpuHDAppMguaMdSH5LTDtMAapjepECR4NrcXvpweTvBy3qn2vBYaB39mPyse7MYyiA4wz1mF2zbWDhBRvUuPV",
  "key27": "2pX9iNijZEgUP9dEzLyKUm8jhsfqVzroX6h2Y9oos8uzvizmwGbM5NRfKiCh7Psy9R9igVf7ifHCvt6DCx6Xbdgq",
  "key28": "49Jufur9WAFDJdtvj99YPJM5pvzNXHz1fC53a4xMEqaaUFHgsJZNhYueU8FHKiJQo5P3Mvvi9kBEgXU7bGWBJf6U"
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
