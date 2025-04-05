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
    "3mMbj4PY7uRUMtGSbXTgEPeqk9AVMmMfgBgZ9qagNCai7yvmpzVo5nuRkcxJTKPCXQ73CacCmE13uzB8Zz8CeTBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yb9NnwRFrwWZ9HudRuZJP9vVe6nVBzqHDbYMG75LhSzbb9B2KvcNHvWtQBfmaGiZwJU7Rqp5GU3WHHhmAarJwgL",
  "key1": "62J8AhGr4w6asNQeAJwcdq6Q7yzeKvvH8toNcbGDVTsLufofP4DvWvsrQNqTnbvFFrmMdGHvrEDWYnS2jZAhysvj",
  "key2": "4pWSDWDognAnTpV88Y9htSDmpqDXuqnbmPyQaGjhkpfFbbWR4CJmAy6HaKosT61j9ywLBZ9M6z7SxVLT4X16ZkBJ",
  "key3": "5VUCui1ALARKqbeyYoEjFqH1zTxvuhAcMBSWD9kjcmxdennQopi8y2hfHwPScpK6upnd1yjPYgBMeusp7XpdTV85",
  "key4": "34VbZeitveomfakxMtMhEyGupRk6Mdj2wukDzohee8TuGAGLwY22heKhsSJXAGcLkzLZUaPwcx58uHox5oPVHj1W",
  "key5": "5PokAoUn91BvqVu7Wc8aRm9AJ3vebQ11PZ3gkPppVMzoNgqw6HRr24u4GKP6sjFBfSiQRHvN6wibE3yGdsUt7n7z",
  "key6": "4ZMp9ZCdSWB68xxzPkbKBiYpBVKzdnh7UYSsvTyAQrM3dAFTFCbmxEiKz2B46twAj82vbM1cUbaboK27q6SwGRKm",
  "key7": "4cvTiVycCsFGesUAjbki7V6qz3mB7ZKdSwswGSeTBZ3YZFYFcQ8cMZ9X5Ah5sMUHKwnHreK665QjHPzTSWXJUKhg",
  "key8": "2e3ZDvVSWxc1yRh78VyUwKfucHPPwPVDACPsFck5N817m2TfDe26Ub4ZAifnmVcHvJo2afMogJio7Fk3yoqTspd9",
  "key9": "5KWLy9qPrpVdok2Eb1iPaKEUM6cZWuQv4nUoprtmCC5TgKxDcdRgswPt5gsDG3qhGCJB1vR2snafB95a4dQhFbjz",
  "key10": "xDTVjfX8KEbapcfmdWxchzJgd3ZYUg1AUKFCrB5Mq7HhGqkW9x7oLESRJSnzKWH75EZpqPnjJxtvBDwWzRpVjdf",
  "key11": "3d5r14zMWhtcdBeA4aRfcVUxX4VR3nTXuCczo1TXMcVtYYcnx4nER9EnZCRCk8HTWs3sHxdTquSb79LJhdLbjyHG",
  "key12": "4TCjGBjVX7x1uSpemD8JAKtWcbpKRVM1A7KT5ZW1g5pUcYKRTAW35dT6NAGB36ieHQDaBS8xdEeFi2ewYs2VuvT7",
  "key13": "3qeStfVSKdjY29KZNyBs2T1mWtQBMSnQAJcErPzRYJShXp4kz68WfS7FEhukT2Vwjk5wvkNCDGdqBs6N3TV6LaAN",
  "key14": "5FComscNeqEyrw9owDfDihuyHUsK5jjtn8oCCqiX55tU2jN5PHhEwEVKsXcssZzZg4vpZhqWcFY3maQoUuiEkeCb",
  "key15": "2NsAFjLZJ4QT8s5HcLhvdkfqKzmrCxq9V2KetrUjSBiAKGWsnZsp9wXDgBq2NCRm2Gm6AViNfmXMEzbW4XF7vRCX",
  "key16": "rvoUdcZwNczsP6Vx28iD1cccXUcZybcNXNfoEwU2D1E28G8CKfhj8mChsQfnEHtX8zn3Pk1sNapsRPTgYP3BB7Z",
  "key17": "4XMDAiZjkmiSotMaWDz8jzSQRWg2mwKLfbmE8DTUsKfPtXtnXyXS1FBX5FJqDtNP5CTdaMPuyKbYsLWcguEWHssZ",
  "key18": "4xPFRso8xfxCNxzV1WnbKLL3Lov5DXmrNMGjnFhwP8p6NTW8jYqt5vgqgjsUvniA87X6doAoWUwQiEXrjKYkm1a2",
  "key19": "btqP3ATvHqfHvGNFJrFMLdmyC5VXfPZUezfrwShCbZiHA9VTJdMWs1HTnSAQz8Vkpt7tS2qLDrHQmkM38KbYoqx",
  "key20": "cPjRe7f3GdmNvT7zrTh8TNVekbExYoDXpLG8BbPZDZXmu8ctVUi593vPrbkkFAkRRGBN18KMe4QT8GuMd8zUSBo",
  "key21": "2kCb1VrDgiE1E7Kau98e5x4Gs6RidQhSfZdZA9JeSyQiVhYoAL31w3ggbEiJ3SB232betRxdSBUvq57Esw86NP96",
  "key22": "E3gKwitLBBZRRf6NMhqqcFD7Fch7YeU9SR7X4bqF39MKj6Fnz3cKrnsA96oaLwGdjP9exaE6BaWtDbFJaAfGSfR",
  "key23": "1KbXPpxw4yNnU2M3UdgxxxZxYgoJ5x5fFfotNmTV8Vxm1QkR3qnA5V7WKYdn6jiSafCi5KqgzeozTrKvj6ZtQmY",
  "key24": "284Q63EpXw5ZRNyQpVx9XxSmkRJ6KaHYTgz2evEdwbG2X6Jwx9Bx8tAXSL8Qx2vz4PNrXzmBinB2opZfVCUrbxPL",
  "key25": "3ifnqP7Hc3C8xT1hTGbHzFH8hm9pY46cgsmYFG9mjMj4BiznWZkPUQKkTSK1F4UiDjKbtw5WMkkp4Aep2z8nkgPZ",
  "key26": "2efndun1nVnpAfs6rEqAwu6K8gpMmXhLTPLRu5Kocka7v1uyLQFsAeYvRbUM9jTwcwro7ej4iUE2tnR7Ha9vNMs3",
  "key27": "4EBaZhtFXGt8Bb3tpEN5xKM6WjiSoJ869193XzLV7fr5U1kRvKWLeWYuyvNRnqdhQmoXnYsQ6SZpBQyTrGKzJQS3",
  "key28": "2WiwBMtaNbQQDznTA9nEAmqBbZ3EYBcowZmwqZEY2raLjwyquPupzQRhcb23qUCqPinXpifKUmcLjvCr8CN77PsU",
  "key29": "5QDByBstJBXEz5DN1Sx1svwJU7AdDrsdweRiAe4BtQdbJZM5W9FSYB8CuN5SsTrCRzriq2xKhanfZSAc43hVt3u5",
  "key30": "3SFKCDwvuTwL1ezAN21LebBgofzGjcGBpKtaLfEZ5d65NBS11FxXVYUg2eZUF4euqpJswdbNWVisrP4jPzSdGjSU",
  "key31": "XJS4uBdmcU3reXVxuUF4JaAoFaMquVrZyCyjsUVHoDDkqJvQAs98ByM8HaXvnaecj73kB6iU8hbeTXFqKXGFyNA",
  "key32": "5GN1u2pEw6rvis18b6acysLGMEkFxKSu4U6H8FaeCUAgkZZUL4ZqgDn2h6ArAmSsaE1giMdYqYgeDhwTSeDbs2X7",
  "key33": "5Yg12GD3Uzud47zcSZat83v53daWkPeAV3ZNKerMTrp7HvFTfshvj7o3E8pCdb7ThiQCELaxzMXJrTJfkvp335pJ",
  "key34": "mMyDur83k2gntBDhgXZiAYNwyiebWagtqjWdcmewXVDaPavrKyfby18zq1xpyVJhV8zUG7cTBLvqEUK4q8DuSwE",
  "key35": "48DQ6tzkMzxhLRHAPbUrrVizeH3KaEA3dr6kjYBrwzMvVKNoyqsfpJS1QC3wUHQMBtnkototkYfve9tPPE7skdeQ",
  "key36": "4Zk93CNWRU8qsqdmX8vcPQVdHL8DvgtQJBKkoTi5TsFdvNBC1j5xTb8MhS5s3143AiuvHGAprs4wneb9GWNYFzmR",
  "key37": "3AF69v7okc4qQiZLDXDbmDN9oXf9oiH9dG5b3RwE4soBPYyFFwyvPeUPkyTDweqY25JKd9Ly11e2q6U1cU4sYLGd",
  "key38": "2JB7796uBArDLPu6XCbo7tA7d28feci5TfGKYjaRicoMRo5VHS4W1dWXvTwCvcPbE99R9ta9aFGtqgVv4mSnACdz",
  "key39": "nEHEtL6A9h6dTCzz3sp3MVnHj8esaSPU4qFB7KgtAxEAfM3JJEDuifBZcfxuUdwNMJZGzSoDHRQwFiUAt5tfJ7Q",
  "key40": "2oGrSnUyHTWC3kfPxdiJukWfCrZA6XZMrUGUigWcKcCiGgQKM2GD7WizCFcMCqbqkpz9tFjKVZaSsDrhdr3VtMtS",
  "key41": "5eEcDszjSPxHcQMEC7VtbFGTfCoTNh5oznvVrJb8mQSsm99nZbBzCoc1VG7H1J8NeGxDkVaqR9wbzpWvXhAV7t3d",
  "key42": "2G9rgXjZspWKevLpLgMFEj6ggSbtdx5VBHmjitwv7b2DHRfa8aRxELP1XvhxYZJju1ym5VmdQLEumu1FNLcwQpJL",
  "key43": "3ZKVJh3zA7BpE7qf5wPxZf45DCZyhyJJLkSp7rpjJmGKJ6pdv1vrSkabpsAuxXG7zFhoPR6fJotV9ySPYYSAhpj9"
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
