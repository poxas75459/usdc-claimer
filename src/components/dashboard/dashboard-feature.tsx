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
    "28AtQwdT2S1JV4xKevVbrp4aQkcBQBzu9YRXbcCJFfygWEERnyDq5p61poG6phNqS2GiSp4KsFjsVRmEGD4UrkgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ByG6cgfxmm8VRZK71K9Chb2Z6vz2LJgLxzsXNf7FMjp9SE7yMEw3jaYwBnGRWwizJM3zze93V9Lhe18y6XZafG",
  "key1": "5jfsb5uSYhi9Qm2e4ChjkMip5wGkH8NQ7B6amvZMyLKtbFnGs7cwahsk2Kh5WyebhSbgryKPihxD47LMbWrT57FE",
  "key2": "LUt3oBRZGWLrDKRyEVheiAhppouGZXG1Pr6VvrUohcAfm1vFnPSYQfJHFQE5cGmjk1aPFfeGYAtQ3q22AiXDhXP",
  "key3": "2wWB5NNiLzY8NKAU4oWsfFEECVqqkpM8wUx18Y53RMSfaZLJ92tx1xUU2YFJdEnfXsqbaqhmo29NFmN9KjuafiAU",
  "key4": "67bZFFpF7dUotvAyvqdNDD3V4zkmRGFhTER2pcCurLaUgFtj21H9bqhpxwXhMvdc6Xp3DwvdYFmAmVm5jVyNHSQK",
  "key5": "36bxboiwLSmRbvnoSMdvpsfdFYnZxhXKCYb3jrkdaPAfoqygigsDvpP3iaxti9uex8euiaqYJKqZ2W2eWPkqiTe7",
  "key6": "43RH6XobmwiyE5UUoT26iU26Ps8x3qaCxWsbb6TFvrLHiwFdasej5AKHrMpjXXZhFUj8bQt7UDAs6a5ZjS9mYX6W",
  "key7": "3LZXqBzxZS1AWyRfL4bDCVoBfxKY6ePm7QGB8FwEkpVUeTENKptiKfugmMaFDgArnKU8hHDJ9V3JSweyFhWP1Jfh",
  "key8": "CXdhgA2zJBozj8Eoy5w4EiR3NrBqDyb65TiYoDsuvbepnxta28argv64CcLBBod8vNyaU87C2WP5GZyW1CQCPQe",
  "key9": "3PCPK66up5PiXG75Qk7ggF2jYZNUfKpexiir9197hQUvKiM9eRhhrsdEU4n1sRKmaKa53AoDkua7pvPg9QU4Xsnh",
  "key10": "wADdtaPC869mimMLry3EBKkcrkRY24Qp6WBx5hqnjcbza5z9o9HCRykNWsLy2HPj4ruCpakxJaosTw7yteTdynW",
  "key11": "2ZZNj31eisKV9N6w9dtyDH2BLB4sjfU3bRgb5L7wKcSnbSdcRjHKWCdo6wMTmH1NdUF5ncY2ZpyAQhZwu2HacTs5",
  "key12": "JoRhieKqRmozSMoupWN7PEJ4EHXTK6sMb5vPjGgjKhLFawMLoCWPdNit7pKyKcYFkkpYUAZ1EW1xeYD4AdnCCBw",
  "key13": "46mrfjkuY59igyrBPeQDvWV4CGnAjkVKM9NVuELvTLynrLFsaZoQDQhAmxagZjXnSYAGJJDx9MF4ZQrX1tnf7f37",
  "key14": "5LVf3mtNXwNjpe6oyjCcjgy6z8NYX6qrDTmxTM2PRXYAWDQqM4D9BPkDfoBeKQqgWhYmrEtnrKjKogmUdR3Hns6F",
  "key15": "3yjH4E3PHTj72kFdf2QQhNqfpt33dW9k5R46KxusWPvAvQPz9LasR2LKBiyrCgx5ThamrUa3hA7952cntAZzFGje",
  "key16": "2xC1YC2tfnapra7cugJZTvZczW566FsDDdnNLyymPqmy2kSBM93CDuZz8LwSFMLLyig42zLyf19V2JTgQ822bffs",
  "key17": "27epLSMEEihxSryjTS8TyBkLmPeMx8GJoenK1MdAoDSoC6Zg2VUfr8Qd2pNH3VzN4yqxJRxbDNZ8KqCDsVXcHp5c",
  "key18": "4swZXoceBzk1GrcxT6vJemGeqNzdb5MFnijCguHz7YmMxStrXhkJWXsroGZDKoLFHNLrTym4e283czk4vhFAPgmj",
  "key19": "4Jdr2Mt5meyDfUoLDo5zNLJm5wrQVufpHbZQgCnHTSSJcmh8BxSesJFVWDMe6SHZiHrj5QrU3tBSvnvDcDbNWpNw",
  "key20": "2XRQrtbRhuR54xLao1rLhC9Hq38DNnc5CQQ6ULa3WRzwvrajhtXaPpjKnnCoYGW3E8BYRDdZvS8QtgGBcYYJZqsC",
  "key21": "5WJkVERQjnF3rERhp62Rd7GRDQEFFWhaFz9X3sE6gku4F2RbgvwWDJxzWv7teVyUP9GPjwhCNT3QD8VvLVHsKMxK",
  "key22": "5adpK5Y4W1k54aPcjeoiMfCQ5PqBiy1K9Su5Gcbphmfj9ewG3hiQxCoxa4S6sGH9ow9ZeSrFmP9ozWDuaVAvUAWv",
  "key23": "5rtCf7VMJB2EwT4MMww4S3STtadrCMKuVv59cpmzro2EmVrWVyyz4yu9JnQbTGcvg8iz4vQPjbeLUGziXroHwNo",
  "key24": "3ZxSvARU8Epa4NnsVVQV8kb4KmWBWJQ1B6J9XrnKNrBTo3YqQWo86cUG8etkw8BGqaoU4KRtixicAhaHT1ZxHaMq",
  "key25": "WvxVF4v5HvDtze9iZrWvkpUjSpkR3BcUQh7LfLrpKRCms7sPCViAiuwPHSFuCU4CGhqHStNwWcj62dPS3jvpMr4",
  "key26": "66mAL8aorvyzHMi9tbyS7WRyLZFw7qjDJn3vb8D4p8KURLA78jZTsCzzBDQy9DXCGY62iqRNQ6t4WRmTBGLdQynF",
  "key27": "5W4oxu6k3aE6EhZpbsqSPwRjWEXVVddkQBc7CVsBbcz3vyxHDAN9rEnjRSi4WfGC1ggs8a9gmwASdxRiWc15Tna4",
  "key28": "5GYJP3rWMWHAWC6FrnDEif8fd2Bia9qVVRgxhEUKujf1p3zywCigLDEVixJzYEgbkvVJnyZXMmPM6Nfw1Hdep8to",
  "key29": "3VfrEwMvycHyQHLKcaQtd2bgJciz3GtyF1TcR9nuq3XP17av3bQU8bAngupegEp6sgKWh2BzReXQokd1tgX7aHed"
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
