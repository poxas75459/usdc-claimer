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
    "3qE2Lsph8hKH8wZBzXQAV9gb116kaYaTeR24SvfN6WpKNh6zaTqY1UZo9UjVdyWRKBTe5SsARGYPa4RsVGZmhGMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYCeccKogNK9YVRAoU1yfXSw8aGitokPZ2sBEFHkLtfyTdPFFa75PRzGnBUQXsdvjqcbZcihfupp2zD5muX2aZT",
  "key1": "5AvjNK9jUeG82dDsP5v524NL1erkqaaSbwau2fcEbSAbsiKr2FLGQLp2aEmRcKCGAs6mRxebtyosQ5rTkWuGuHtg",
  "key2": "4JtnYWihhkAVpg7AesdXPERj8SZDrrovUtLPE6txwmrSnZ1TSWwsGLYBtdqoufxsRQLux9jSyViBELHu43AebaJw",
  "key3": "35YJt9kzt84hokht1nz6ZT38s4uKRA7H8vKQNmmyuTSU5ZQgmuEM6FZAJ6o2m2AUC8ybvGEkoG7j42S52xCHasnE",
  "key4": "3fqaTeEeNUMfGsUNqkhqAmc5VVFkCp6nDsQFskbaDSSgrtmnBnsGLM4pFNUwUv9R12MpbFqCJHXro7j1ADCkncmW",
  "key5": "2MC4KRAcaa18ovyLkQD6E8UNsJNNs5wqjiRVvrfLF33hpXRUGe3nabJmyXMvLgA2GW5jkqxHFMn95tA3mfuy4n28",
  "key6": "4FanLMkHwBebCAojtf32TZ7KHTWA6Bx6r1m8puhbbZmSHMGHgyTnTvDhZDC74SrAkH7qZXRa6xTh8nEGvXyuY7t7",
  "key7": "5hbqzvsz6bhdN7FcqFxCXuMmDwXmVprYWYiDYDHPatqSD5b2qkrBgWkkbXjf4GJe7DZ7r2EqDzuw4CLBtDWaFUfb",
  "key8": "3QS4QuREvY6R9wQUwsZ3nac7wLjQ756SDie7DHzbzEWLDruvEDkWuZqP4csjbi6EUwhpZWeMffHar5pStV4yUvwv",
  "key9": "ShEM63eDZ5ZsMZhitiP2uX9w8CNXUSrn9c9HzFUuemf8fghHPiAi4MGjQ4TVf7eeHDBN9oaoiqjagbjMTKxLgjv",
  "key10": "5yyUYYhGtXmzSMJoZA9TDLwYjY85CvscWp59JYGbDsa8dSMApFbpvePskyYkaTCVrZ4Foc375VyUzfZA292MFkKN",
  "key11": "3N88hw2FcS5bNWMukvXPoZ3YukhkA9y4eP2TfGu6kEwqJekXqfpNqnpV3J6EFSMpJCbkorvxZeteqZD5jmSmsD5M",
  "key12": "4FvgMXqpRxXzQTL1LKPp1bNTc3YsPkcZTQAW5g8ZusUYRJvm2Fy1fQu1oGNKgUrPEtMGL7zRAdo3ti7SJqkgtnXu",
  "key13": "2hGm3Kvg3NY6icsb2qfHxKfmmTpMDE5PVnK4bcpEhnKgnbZie7FExWyjAtxaUHQD1BErGQkwUt4GqVp5kW1WTRED",
  "key14": "rBTcqGEbPD1m3P2GqeLrtmsCbzL8LqevyGifbjToe9aujJu2YJs1Lu7RL6x8s2xCMJSKhW5fHMSHbtgjT2HN1Ye",
  "key15": "4zxn7cPpTT46wP16xHDzbgtuFyoShBLsuRHEsgMAiLZk7FqxzbaJxkZWQuE4grkqU3G62LxBWm96iE9cxQQfLNCF",
  "key16": "5BGpMSTnAFrh3e5gUtfu37MN14HrYAFv76o4npRJ325uVbt1hW9qVhBchue6jBLwfR2hwvdyuXp3DubXMahA83n9",
  "key17": "3rZvgL25eJ49mEBuspb6xSVeAzebQ865Tx3CNPWgQi6doNNfzov86kTR2fFTpindR1c2decWqjx2MnPP51cJjsQA",
  "key18": "53ACZEzNL4s2595YydyvwroHsyqUwmKxW4WZ7bwxvNb6d9XGiEoe9t1YimPcoewmPCUwTXyetH3aPQeaNTJtFT5a",
  "key19": "3fYaz6VftpZ1cjCJNNCyMR5pEFhx8RszCuoKPZ7JXJvyUGxc6mFT1wv8HWAwU3qTw1gQQbv25okXynouYYFccopg",
  "key20": "2tCvGRgLMH7jwk3buLRgmNwGi6KFfD4AU4hRLtuDJCLy7NZRnZWYZCkizZkvnsbCs1Ze1QBcDsFnWv5tBZgbGCiH",
  "key21": "5j6HbDLeK2DVrwvZbvGBC2VcESL8jUaps2kuC65tqDh9LGzVTVEVvkDr1qezq3vzdyHA9WvoxfMSo95Y93ytdGGf",
  "key22": "3zBgwkpvpZFCjnNi8YYMeTzvB1DbyNnQAHNmGdDYsJYGmdKbDv8E8sAXbrztiAFpCw2Drcebc9BX8xmimQ6SoQZw",
  "key23": "5EcPsooEPQxRM3XQdvN8rc4CN4jE4Q7wWVwbP9WF9F7V36LVp1HvXR6aQ7A7VppKPppHdF1uXiYjemZwAUVgSHm6",
  "key24": "24WhFA1uATq5ZMAquy6xMsVGuhg6jn1cFuNjFA4bE1naxQzBuoYjKJzn4VRDMW2ABBCp74PTwGrrBpspcx1pR16z",
  "key25": "5FMhpQs5eM4BrFzgAjDQYon6XE5Ec4x8dSwUVxU25Thkty2wd2dqePHYi2FuLbR1aMuZxmPVjDkz4q78Fx5baotC",
  "key26": "54hBZYnUkGkzKZSr8V4BPPSPkeuKj96rWxuv65Wh94vrnZ629T45bQUVbLdZAdfYB8Db3LsatrzDDnmAYoxtm12K",
  "key27": "3BNhCj2JDbaUkTw9iqiYKBHyAFGXjsscbXLr5yHZa8W2bP5WmRnMjZtUL4K6iEWaa7sAfUvxhfP342v76FiZD4xc",
  "key28": "3ZmiFEfcvJ9aGFvj29Ktpx4RoWtPDKsdGeELLE4bWyFsLa634uf6M548mDbpQeuUr9TJ6wburXXdp3bTFrzANMHm",
  "key29": "41x3qsw9FeHS3h18xcseLo3ScPuq1aRt9jvK4KKAZePGsN9mqjzAH3naEyMZ1PpFfMPscYhWaHVd8vA8doBPwCMq",
  "key30": "5caVPTt8RFrqpo5gBtUbXkJUq8WvmY5LbLzYKJ6e9b6KjpiE2EBYk1dPUVimFgaEYwpD8Pw2BiRsKawVX89UDmQt",
  "key31": "4hzhBmu25QmhCgvrg7A2z3fDiAxhUgf49cX2VXWenezqr2zVQDsZs8sKFEMDCNBJ3CnV1hQfj72PCoR8PJA6z86b",
  "key32": "338kp2nHU5jhJ9PjcB4gmzFtGmnDVXY6grhm2W6HfUktK6N5uP96aurAHfYxpiZ6jCFxTPNBRtzamzFDuJjfzqai",
  "key33": "5qkrzcXp6DECdbAjA6GXqVohv2G8KiP7iLLe7x3j1vF9T2QJE9GU2H8DjGMy6A8xnWH2iH2PU3qsMgXwBVVBjezD",
  "key34": "5qzhapkQGYDnkPtx2Ah4prcwVmvMqrqee7TPLPCXT1QH1NXNnLrPt4VBUw2gkXT1gE1XQz5vnVUiZGHn3ZZ4pLQG",
  "key35": "5g3WTyjxvitaNTtUTWuw8Wiz3KqRbNnHYjZHa6MF4VqUxehMTAgiQWKyW6uztjM5k8We4XvDtCSQ1sfsfsywjmMY"
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
