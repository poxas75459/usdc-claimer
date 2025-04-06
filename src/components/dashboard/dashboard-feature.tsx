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
    "2zTh1oRRjTTgzwD77WhwMB16zEnEknvMSoiip91bXDacvM97GLyQu8f9PE1LDeMtTt7a4RVSGpvDRijkDreEuUGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616tsPAeeKhjTv9iAJAp5HWYX5tvAq8ojU1quXbjVP1HUkdy17QNXi9oSKarHCHdYQCUzcPfjE316zLbsDppLZKk",
  "key1": "4FjtmHTgpRb4ef49kA33wfYJorRPiBhrAcBzvdptP6Xy7812HUDDysLZT22XdNbqdetcGSwALMDs2BV8ZAUW3cA2",
  "key2": "2ohah5tZZ1zgudxS8mqmcJVMfVn1BrS8GvNhdjdeyFWmvWXEd7u4XnjSLJhtKzHTmjhx95hHjePNyT4vqoyVym6X",
  "key3": "4DgR8xR6S8TfUqNC2kx3fUckASMmDfX5ra5ckCnecJBhn2L8C39KhQ1uSzfhZV8Z3uQv18Sj9HztF9i5mF35D3HX",
  "key4": "4FoAKS5Vb3M2bKuezqWV1CzHTMtpTne1mqP7pVMY2S9Z5K8wRi74mt35QgDoRKotsCqHtbf1TMm1m1RayJoR1eo8",
  "key5": "4Vp7jFmeJfSGJgKBwYgk9hSjTNcJJVo4BLPVo2oQwSQkaALpxubmBzVMLx5HsvzPcwxeJZ2HeBE8iKB9DDR36UVc",
  "key6": "29sxuwC77dRwqKUu34Up5YqZPt1tGwH2bKrisZPQ2QPDtKxjRw1fQ6ZMke2e8nfAvh9qnBrUx16xhVwnHku5E3g9",
  "key7": "4WprbHg6ouoXxS8Hnzim4euad28akFdwVWAGujsb7n25GYyMmDiXNN5TCMpkMyVFkbAjXK7VkyUnN7iojmXj1JDA",
  "key8": "3S98JnYSwsKnqpj2Fcu5Jf8Vg1Nu6zq4HokVdRBTT9RN59WR2ZkG4Twb9MpjnVsdzKfRtZeAzfZeitmzk43u16Db",
  "key9": "47RYqDU61PMEE7875gqvNikrQvA2oGM9TU4pr35WN4heKvSiywq4WEqGyzMM9nMdv2nuCuL2gmDeY9RZmfMzdZwV",
  "key10": "5vTLycTwkdvqWooFpf3UaoBEgCUkjTJNXcwnbp5ieBp92WzLCoFhbHY6ZTKkT8gnXF2fxaAbtjJU6o6cAs1DidHZ",
  "key11": "2ws82JdU13vGhwHhjkS7SmX9oWB7h8jiniX2DFKLg4bQfrfrGfu6xbPeUQsUFjrzZP7T8a9VL1sHvydWe4zHGrk2",
  "key12": "4ymPQVRZaHGSB38bCLem5hZYDjGm5XSabfV2ewDYivudfVYgjGFavhyYtekTMDcpvb9vCmRQYY6ymvg74K6rZ8Vk",
  "key13": "2BU4PkE9bXnAzyRd6dbzkYGu2EoJwAUwStWrSDR7TFBqgthPsAymq3GdM8J5tHp9iEW5hujGGzzcKGZZUhtVV5A8",
  "key14": "3vDawqp2hW59G1vPCcZtmZmQXCfDQ5VD1Jvi19o6huvW9X7YZk1oWhp2eqAWn6W9V28mzrvKPC5mQEX4mRn2CgQh",
  "key15": "2swR4CtvrSLq3gksEWo4mWpSEhwbLZ6bh7ouQvH1oCxS6PQjFp4piZnztj8b7vjAQ5H4pftB1PSChBw6oeYQbaTJ",
  "key16": "4Ys9GqVr7Gy28V45oBXjLBaRg6BJDsKd2LsuMVZ8nU61AHABdvYC9Cy7nu1ENpmqsrtJLiSnHYwPjdX9dt8TfAmS",
  "key17": "4ANegT9Rsu64MAStorxCoWb5CH1PQn4H1PJjbGkGX5eLq1dJsiRZPsgPez1RqUBiQXVPjvMPm817DSp44U1h21Ww",
  "key18": "4GRw4kbZN9PEcEewB2fSnU6wSog9V53mRRHkkfBN8iQ9epE4DS5aUjdrDCdvyd7hSnvDRwQpAPmhoVNKtqTZMyMc",
  "key19": "59QFA9PRE1N9ue15rjJf24QpVZwcb52cc1xr4QHUEbyKDXrixM4n96Yzdn85NJ3XGccyZ36VzQp4KrfAgW6iDQMK",
  "key20": "54fUfSADnLwMqJqeGiqo9Tjf8gPRu9aJt4Pho4rUDmaP1TARKk8PYWKc4LzKYarstBvqLg1BW76BE9XwfX6BNkrS",
  "key21": "5Aj95usb4rJb42aE65xWrkEShq7wEa93nfNDGWMfM5DuJ5b1ZiwLvCJXUa4186w14mFWPUfr6YtUPn3iHBw8RCm",
  "key22": "34XJaNVtCGnYcedm81gBbjti7dSCtnk1DwVoMgap2YvnkypokZqDuP6mcALkjPCPoyRUh6xHhNsAzwu1HmKqVhDR",
  "key23": "4QqvVsnN36odhWHi2nh2atqnSE7i7TfALhW9bzui9gVMKAx3PpfxsC6YKYhyY4qdvniCzpS3Nvc6apcsvapbRijJ",
  "key24": "2whA1uENDFgNHVBXzJZH67NykWQGtEdcmgEvR8zWhe3vGWmfi3v7XtwjmwTyhcT5xwjphgj8KvdDg7nWd3pEJUVV",
  "key25": "2jbGRkhsxU8AsugMC71J9dvaGT7YU6SLwWJXTF31Vz8A5YptggMDm9umhdagcB2wVv8mzxboQYp5dkNuvDM7JJ1f",
  "key26": "2dvNaJZ8HjsdBDLHVS8HdthuAVDSYs2mW2u6cuaa9HcJFTPF7eQFoUWBQfBEKeJENSuRK5mFxKvzefHm7ZTEcz9U",
  "key27": "oGTdrAx8cUwx8ptjLCWGpqPhqnVxGE147sspkk3hzMd5tYyTm1jmqb3sci1Z7RZsoX6jxZmmJ5a6GkUUVkoc5Rj",
  "key28": "4qT2Hd2xh51E7BCc6Cwh3jB2RvjAs2RXyLaP2L52bqz3aY3e6mLhMZeQvEZ7bCHHdjeqnZ8zaCtAmLCkpjLNMCd6",
  "key29": "2SpSC4EteqdGU9Tp1TWf4vtXTWqggC3Ao3j1UixMXFnSdtmLXayXVPTceMDGuEWQ7tccq3wQTngSkNAx9ZBpRRvf",
  "key30": "4qb3jzQodrbFnT8X9BfHaDAR54zPUPoajoYa1RjHrQJ2GZ1HTTdpz2JSHMAzrkBMAse6dajysqDwnNkuydPLMkmU",
  "key31": "59dNFJsN4pZHYfjWuz7c7K9R758dJVY6JnaahhqptFNuoKwFFAANiMwXrrFXdRXvdqtck8pxEk5m7WY24pkme9WZ",
  "key32": "4k5tKQEBrLSrjLoCU6YKGpwsY41ZAAYkHsQE3mVQEt8rGKMRg4CV1bsjyj9zaYWxwmNe686ohT6mmBvjkg3x3kHd",
  "key33": "5Tu8uQojjGzXm88B8QvLZErhoai5Wci2KBdLmhLTomaSt9EYDqVDdDZJpAVfU9xijSiqzporLffF5KKs9fEATdEo",
  "key34": "58kKe6tQohKJcjytKom54LJKGfNcBRubM68jEPDM2wHBkEGHxBaNqxQ9CWrfTQcw7nQz5UfrQ78EsKBNoHdfQu7C",
  "key35": "2aucLxtwh9hqKJvUWEWKNuTx3bYuYB3ewLxRnfbcWFVxU2aj1dYhrE1sDQuFUUcnTv7F438bNVRezkkoqj29rCh7",
  "key36": "3Gwhe1XCwnSv6tJEkDXB1Q7MRJsZK6gidQ7PvNJ4rHoUZM1dLBEB9y7kU9B3RqAXmXpnJPj9T8zb4hpJK8p8EgDo",
  "key37": "59NMBNQ2mKY7udZj6WnpbJWERvqds8ueJz38Hb7Yji2VHJkH1cuNZQg8rnUmNdtDLybBr6p6ckWEGFfHcfatvMRw",
  "key38": "42AZxbGqzzAeXu6ZHg9qpSRNNVLttv9XfTJ4HidwRNCtjhZt3FQhVAfdu6mtiroSyPQXCDikWm7CPpHWmVAcjbiA",
  "key39": "rsuyLGCq3pr6ypTr1b6Rag5ErfJbYfHr4n56a21zcSyyuw2HnXmRUeeXvQhXvrXtm5LTfni95REjTafzdJ6RNB5",
  "key40": "2erWbwwXwMATrwqymUZ6uGvwLNcfm1K8ANnrAvnTiSa944DCZSNVZ7mhuSW9NkDp63dSTNpt8FjjzB2n6p2SBXKq",
  "key41": "3FcJ9JwPCgUkaBzawiAqwrCQwRDtbjn41EKj26KSJhCrRWJPNQcGW5uGZePunk2joSRFnjCwnDWLGHy2V43JT1vS",
  "key42": "o1Xn4aAhZtLwqMTbeie83LaPPi1eDD3q5XLa5PrBdLSQFuA2CUnhwjVN3R82nf8FTbp9kk7suF3m2FbQJiPrYRd",
  "key43": "5FTKaKKW7PUbALEkuk4Q5uHaCyuXCirHJHGWKPaJi9y3hoQtk3ZwmhDS7zVk6xXzkab3HAs6rnm42a9pSbAACg9g"
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
