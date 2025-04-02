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
    "5oc6aeKookccVvFXc4daAjLjD1rd8xXAgSZkjtmoPyHMhYoTL9nMtnhPa5n2TcUtDySKiwyuMQNWtKWFNPFrndu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPLvDqTZTiiNxMjUui1H9tF5F2KtfgsAm9Ao76GtYwhaB814cHT9qwfYg8edpnK1UPha1E9vkq7gnYcDizUTaZr",
  "key1": "2pXfQD8huvkGuyym7wwbCGsiQNskZZkXgS5rfhjaTuYNmAMVuVKAB6kPzeuDBUWwWwsTA5coyKG4adZx9kHHovzq",
  "key2": "5Gkr3DrsqggxcbXqgwPWZzkdWBhjwpE7fuS8fGNjg68XmfprH9fLRFzqPx28QmYiQnpsJNSBRMmwbxXBNBfjUTqG",
  "key3": "46WF1Z8iVDHBkCHrP1STCxvBGL1rR5pioG8FaueB5PxKwBM8A1DcZP5XR4YMWAvQxyqtLYKDHa4Q3zRagtqVzAxe",
  "key4": "py4gT4msStTXXgTn4YaqG3968Xwdtqx2RqiBf5foq2qpwSedqpQuVJT3bJfszFNfEcTcU4cHZP2zP2dnUVwf7HY",
  "key5": "2kyBqdL21a2uvY9K7BH5mfANDYg1dhmCsz9nYKaJRsnj7cL6yhgE4rqZsQyC1fVn1JcmvV1GXuEBfMVX5NKs1Koo",
  "key6": "598mDUWyoxvHLTxm82kYBsCyM8EsXfdFqZiG6ScKhkT7tDHVWTESMwFhZG2QsP6Gsq1DF9HsrRd7Y2jdxhZaXHC2",
  "key7": "4ZQ671FcoEHD3WPYT7QJKYjVBfKh4xiAqoPA9K47eBJBc8LHiQRd9CVwscdEm4GSSsKW75qZNf5Tz9KgKsbgx6Pu",
  "key8": "2SZhX937yYmA56e9rwVJVorZQnsuAWzmtNVHZC4cKPop6n8rjdgGzYm9kKxJWAftKNbRyjWVDowMf13tp5aBSMaD",
  "key9": "ErwrTqMvtHAvgDp9JCtqns2qssaLRD2oKS9YPrUHhByJcrzq7KvJw751FpkRE3zoExzd6LWihgVZDBZwQCXsQPL",
  "key10": "4kX2M8JQy32Y543TSWzHRieb6pPa44efPHbsNHSgibBnGCBM8ikUG5qaof1vk4fQwfh6VpBvH2NVfru8qsDUnj8A",
  "key11": "2Gm6L69oXCHAYZRTcChEXmGFNzfiSCiFh9F4dPugZkdtpvVyQDMKsTJrLdFuR3TsrYmnSq9KvV4DfTJu18Y4UsaJ",
  "key12": "4uuhmh2U4oYdscULH4GV7vP7SDEbAPPmT8P7hvCi1ngs8rcavNMUE3Y8GumWqWBAxwZwCembJhVNo6gSb1WEjBLD",
  "key13": "5afuiRuiiDMj7Z78nCQFm9ZZLApoLFWV9b1tdcdcQkEMYrTrTLFZKb3FDwG9BeHv7fSihCUZLbELv195hHt7imDw",
  "key14": "WNXJg9DBJVPJ8Jxzdyscn7nh4oqwwG3hRFJHkeyPHiCuNa6tgZA4YWgb5W4rpwNPiKmdk18zmUnWwCGRugk5f1a",
  "key15": "4h86yJHBXL8Fqev1wzvs6F6RZQLsoNhvjQMDbv4HS1qqhwo5ebsvE2Pk3meFDXiDT6YDnCx2Hgv3xLzd6157RTTP",
  "key16": "2uHCRaJbjN6hPikawbuZkCJ5JLneyagUWHHJZLVoDTFqzTDHcHoDxbdqB8HkA3cvxsFnv1BXfAfWTUvycDDEjVk8",
  "key17": "3Xi7C5vRXt1WfYoT5Q8K24BWcviJACTGYPiZwstqEkvpZbYaedHZzwbexEyomqK2MVsFTLr4z1oRL92WhHZACMvs",
  "key18": "3eTDZuBAeKoV1mDSGYaoB3CDAS7df8mKaB8xcHNfUUHnGSMgTfsCcZSY15PQHm5xEicyLjpVKHEcYo132n2VRaqi",
  "key19": "49BYsuyEWZ3pxN7732uupqx7m3z1Wcw42hEjB1gkbFm3p6PBS5FBTJBoAGyyaf3S5qaP3Jn21hvwWWxAhafPgwxK",
  "key20": "48A6vv84EtGrUCXXP5FV26BMaiH1NhosigVJiPFuW1A8GqJWsv1BeD6z4vJQLLGAd6kEaphEoYZuzHFKUcKN3Gqg",
  "key21": "1QxWTRfx6aRULKYFjbq8GWERJ8jXX3D8Twn8zfUmRMv7nGaE7t9kahtxdQHBYSHCFYsNw1Y7xMnPaxezevrj9DW",
  "key22": "ihWhq2dFN89FXeX6kJccMfTLKjcz4qrrkXDmacmSTxcYQdA7Qnz8eSpCh4GiGPMfDwG3mt4FUknyfEEELMjU5xN",
  "key23": "4Q1M6GcNTXiLxtVDaBs7Z9827Nv82UgeF9q7TCBLJNvep1Svg26GGh7GujNKxGxGae4LnuzVt5U9bj3GkR18S2X",
  "key24": "41FhyYTdEzUsN2aGKymcymy9N5DybLPsnEHd9gaNMf4i7LCYAK5Gio5cQiP4j6jkLotiG6t73jvUGHE5w6SXdxoV",
  "key25": "3oXAsawAHHq6WwTqmN32Mt6maDYV2qGUGZ63WWpYqPf7NsPX6Gm4PG3Fs98ScR95cQybZJZhRTMhp7kby6quMEc7",
  "key26": "4kPQzpNvNttc3dtdFoJiUkrZMn28dKGNXn9VNJAq3gHwiXGt1pWXWVVV7qPVWErja8xe9XUTDgtTw9wwR9jcAuZP",
  "key27": "2RoQsUmhycG7uALDSsEpVKhBiT1S2Yzz3uZxJ3Eq5Zc1mdWhnqP11MF8Pjh3Ywv6SuEtLLcUftucnc7aGjjByRCq",
  "key28": "3ZjNEsGSG85vj8zo171qcArPy8dDjvb3Z528vVwCEwxx4Kvq4k31RdBwtVyHgGmSsD3KBucgFyN5a7N6Te5VWLbd",
  "key29": "3dT7pYgYVhNmCWdeaCq1ptQXeQYnKeuTKwMDU9NAKf5qA3MERkhQbBBTGgaLXzJbuiLxBHtiWZzUtqdFo5v62FRV",
  "key30": "5AmXWfERwuU8viKQDknEZVMcGJkz1NSoxHUyHUzV6N9Zmty8u7pd1XTCyoAtWfCQkDMbiwPKrUzgoHp6afatYwod",
  "key31": "5V1oJZ3uceK8afiUxtbrcPYSGqdy2nFn4SrruHb6ZAsSeBkxQ1VzKJHRX3NMfNqsiihniFkEK1hrnG1tmJGNP5am",
  "key32": "2cm4XJ4LXR9T7y2wLDQ7Jr5y79VcUfhDALJzqUuSCwNaC1W5jwqwdVxfS2ma5fCxfW4PyaUGZ7U2gBW78RKpBhXH",
  "key33": "4kgFMgci3N7R7xb6y95gN3TczETSGUX4QY4Smjtqusj9a1wD2EgsZJzgEHtU2TPgJf6wbr9AjYv8FiGmJGW5HvCK",
  "key34": "2FL92h2dLvDVtUiUyrprbLPGPrms9zRPHn3W71eRWEujvhNzwa99uYupGtCseVMKHXuSj7xuSwRtutBAqLsYptey",
  "key35": "9SNrVAweXmYdtbS6Few9N1uaT5C2XEteAYvmwMNkc3yiqL84iPg2uFX3bqkgKxfLDve1Wqe1m6ZpdVra1cRG6aP",
  "key36": "4vmHRm1K9GY5XFSqWPJvAbPBJ2N1pSG2wBKxKCaT7ox6HFRmjQfReJukkqcYG7cYt79MjvmePDEUbW4LBb9NaQa",
  "key37": "5abFw6NcJkqKsK4v25vAENFHiGZhFAMG2Ls6kovCPN22kQfy1YtAGVkLxzj73cjd4sdbpt4Mo5KvNikANdfFWUuT",
  "key38": "2fKGMvgu5VVmjv1SPAydhneHLCKuam7tyFDdL26bjxuev5LJdGPeMtLSPAkthTFbUoqmT8io1L51yDBpiUdF8RdD",
  "key39": "473tiswRaZdPRLQkfQkkK2hnztc57QRbVwdSeeY9XUubjLtr8jLYBK2s8t9bmYraFn9eJkrzoNTwnxpGkfTP6yh3",
  "key40": "2QuanAM33hDpcsiavMHt4JDtpHttiYqadEsm3x5HsCGtyKgt9PuyUJLVghd6Db6FJyr8MwuDcNQj5hmVU5yynt8K",
  "key41": "3tBwpGoVvvGKwdQo6jz37VCDZJFip1uDpjix4qfFWr2Y4AGebK4JBGBWeycmkAFT1BVkjDoVvkWHLgvYCgVgQy5Z",
  "key42": "618QMVDrqfwbgkdq8z2kS37yheFYZ2HYHWQRDi5DZfuwWZjWk6atYszBMDTt7MLjvtw19pbdUn2yZBtPraBWVvTR"
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
