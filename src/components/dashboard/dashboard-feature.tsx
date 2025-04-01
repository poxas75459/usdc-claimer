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
    "3P8kd3eZCtqQDQtj2rhEDM5jnqsmnatYf7DVEtjhNW3JmzJEoD9hjxzx3w3V3DxnKmQNNfF8YX4Wz7dvMztcm44d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JKUsjAbyz6uhtYCsZE5DXVJMggAGUz5zHuwzM8izLvRKPiBQg8hHyh6GMVCYwzabegxdwqU7E8AkJLdxNj2yPN5",
  "key1": "4LGtwWWXG9xuKr3wr8yuTbC7jwzhodTGeAx3E1xJinhyB8HWrq5M5gL72YLweXRaeZXPXbPqhSymqgo2pFZThgrf",
  "key2": "41cemYQks93x6ovCxAidsJhg2zw8j7TSZbfG4iWVGhUZ5yfPtzG9jYLLBzF5kwcx21rFyXeZPaAza8V6FyUiNcXw",
  "key3": "3BMLbeuirQdkvnmdRuzgWudRgNvq7HJ6WtnoUFuqXRkXgTzoNnV1GsDanU2JfkU24ZMQyku1BC944uESf9zAphcE",
  "key4": "66JssUCsp5aXuMRc83KdwBoCHb2HqYh6QT1DxvqydcQwuaz4GSo3SbegxKdiFXdduP2hVpKMtQ6FctyNcCP6Nn1g",
  "key5": "5r6GxCV6p7fSqS8BZLvV372jxym1J3VtjLVzMcPqYJHDZgjPP9DM4NYVH6keFtYAK9enn5Y1hFabPM6HWdMTc4DA",
  "key6": "5eoytKddebVzGeKxihteJdrTkQbn5D7ovVfgoQgBvEgcQbLsePW2Hb3TrK2NZJxPfTHZRrzm8VL13yFLmGsYQ2MU",
  "key7": "727eMF44g7sjXyanFuX5HPvVb1XuENnjjEjKVoWRCHggB81MZZa5VicZYYAFknirq7r2Ydd5b2c11K9jnc7Bp4k",
  "key8": "56UmdB9VrWDmzWEQvwdrtRzEy89jyw8AYZAXVg49NxXhEs44NziKsdTBkFhdpwceWyHpzopYZt644vvXVU9MFgJS",
  "key9": "42TZ9qZR44Lww7KbwWBEjA5VGZRdjZa2pQuv5Tya1WDpDZ8m1b2MyexuDrSTNVjVvobWm74hpQ8bq5SFeZ7H2wCE",
  "key10": "4EUVsRhJDM1VqPM8qRzKk6raRoQi9V18aFeSmjBfG9xCwowtoJpF1NhirDdXu7VrAfRVsdbHZoysajT2XHTf9Puy",
  "key11": "zHCke4GJ21tksZzvi3gts2An9w7WZaLQZs3GiJr92kdPy3J1v5rVUSoeBm2aVjyFbCAebr79f5DhSs9MHXoUyPz",
  "key12": "51jbfcTHSUuXmhLg1S86LetrMNFZr3dxwxvibJ35LLL5X56AfMB7biAuMto84LGzSP9XZaxopGYG2DhD9F1HbqE6",
  "key13": "4KUhPGewwnUcpmhW2vTPGDGgy8VYv8fTxNp3D8ppBsWUcJ7ViAVv5iVC12ddeMf2L9UXDnjWSx1zxCFynDgAYBnV",
  "key14": "2UedySmEdY4SmDR8eKXfusfqoyevpGAJr3e5WwH7Wt7RkerVs7KeHLiLFivWVxCQmkkwMrsSHgVC8feFkMtnbQys",
  "key15": "2oSPYRHVQWeuZZ9zsQtTVBoHz7ZWB6LfU1oTrQHVAcqNuVjfMXUfW1135EWYqj1P3sRdi6PTZbzF4r3om6weg3YP",
  "key16": "67ivJvgKs1JPo5a5B59dYEgY8hrctVgCPHucR6vSYsuLLJuPg8w2NPpgURKsbemnwjjdFsQAvmm3hEWbcM4u7aea",
  "key17": "fAu7jB2uqNQxMVn35Qv5HThcCskPPqqjBYrRF7WzBCDNCVo3RPHNSRtS4aGD3kqdrdNHTmNBQRYaaNZK136SpwC",
  "key18": "MTCbA2YW3BhFptTpQGs9tisPAthACK4VqK7ewr13E5oLWL53VBbCXp2Fv1L6w5HGm9KiBe1rYgKS2wpRwUQuDUx",
  "key19": "inTFGtUfJhVX1sH9aTV8fQux67T7zoHwbQRfgMk2DVjokY8jNL9XtwgtPXQeci9XRhu3NauscLJn818Q5kGF4CA",
  "key20": "5V7osWPQrM7WnHhSnE34935cbbfTbDMgEEvJFfCokCYN8VAnKKZKP5BK5SuRW8f8p15fZuQSfKY3krHW28NgzVpD",
  "key21": "5FCCfoejTxmJ64otsJdSjn2m1qZJB71eQfSpAYmswMMSpMQFd4p24bprFGQt55Re2jCi2GZVzuQ7bFWDBqKSbSx1",
  "key22": "3AcRfs5tg99GgLegh64Svs26jeARDVGEiebtSnqKtRPXy8X762sJX1BerJmfnpdDtdnzoH2yPM9C6xsXmfgfGvQS",
  "key23": "purhaw9W9i21AJnWmmuVHvv4pSE7yz9KNTUUX1mRShcFaiXZCooU9DqsqvBVSa3yow9CWi8Y8rQiui9uNdDBHsS",
  "key24": "2CeLf76SGMR7M7MzW5MbEW4yXTdj6KMewx7rtEMJ489xLzi9piB2o3Jobx7M5oG9XWWPGmwdvEHXkWSoj3MCzxdS",
  "key25": "3Pw9jq1p75ax28QA1YX4BT2yNwEtbQEqruV4gwXFhdNe6S9FCCVW6rCEddXA8oGYTqd1pTNaKvZoQcdabM9gt9ej",
  "key26": "cQkinPfRkRYeZQM7FZLdZFDKq2QDj43kXP9XiUwSrY4ABqnWRSGbzkUjJvZrs6ctK1aEyjr9pSW19TjFVVZGhZ6",
  "key27": "rszAfB8WdUdMppLSFdymfKgcnDVcwgt67MLHvnEJQhTPVdGs52MMwGWBfGQowdhbuf7LYfk1um2jL5r3Crq3E8e",
  "key28": "ueWrSNNWPcbV5XjRUDeJBhSp5UBER8Bgvwi5FTx5ir4aKVUDVFueqeCAc58yoPayjpHBfYuSuUXpn2sJXmhNoG2",
  "key29": "2TkzQjVHTDZkzixA866bsh5JSBQt8Jze4pjBFN6DVMf1HmUuXpTXr6VPPkZWURdNfEGnYZniXPxRRSsrZBCCWZLm",
  "key30": "4x4fugLWsAAu6F6Ym5kJLyaWNMxkMC4mSsGytiTztwDMissdRvQKk7TsxoBvpqY9WTuKLuVVveNJfM4mbXS9rVC7",
  "key31": "3Bkq4DUtGmvoq6QakJWkm6X2tLyo3oBaNiafhayVYJBdHDDEe37BRw5TUnYYDcjjc7SGfRebnka7t7WyqF7mQYjW",
  "key32": "3AjirU4EteEZw1Yy6V78hqA2vW3zXP59hhrRXgqpzRD5HTRk9KbrzowUv3YpCorLSirMdjJLect8b7WZ1XvQwtPf",
  "key33": "5kaWutPp7LuxoCDv37sCeyQ33yS2j2ypcobmVUWKXKPLW4JLAicDov6Vb3TLh66XqHCMxuM96166KosmXF6jJLd4",
  "key34": "4a4BLFtBQiZEjTv1m3ghga59uLjPPrNX466bF1TuxdZ8shaK6RhMVzt86haL5D6VHK4disJwA8mv42TnaCFQvFfy",
  "key35": "2E9SQBWdWBA9yBEF6cSewmaih3YfEjEdwv6asEZzHgxUqqAAoEnAW28KRAqREFc5cGT7fVUBDYnQqXERYkA6Yjf8",
  "key36": "2egQgksULviDMNwCtFBS5ewE7VBP19D6swP3x7iA5bGd2nYayTRMRiitSJoHCFXyNUkmY1CU4exuQXZZVvrGCfzt",
  "key37": "R9rHRibbCXdM6pKYyMyC6xDX47WB1kyekrcSXVRamnGwRH1jF16SYCvFDjvcsbmVzEC3BKvnmLg7pa349ZVUzzr",
  "key38": "23BfWqStQPq9qNVSpgYd2yL9uxjvg8JXxhumv3RPHWkY2EJiiBb6JYpMieQbVF4fupGLGih8y2NezoLRz6GvyhHM",
  "key39": "36LopRjZdadE2UGCcyFYScbhUyanxrHK4WH1nPQrG5kFVayjkVMmqRR6qcNkwQUV49JR1dRQZMbLYzmeuLT1DNzt",
  "key40": "4C5ww4wBRvbXTJyJ3XnPn5aBzNPfHt4iRana8WRyKR4EqQe83cZzBZP8hmhSo12j2NnADqh5UjJHJRqJvQcA4Sn5",
  "key41": "2229cuNy4L5skah8dgPb3h1yVZZUCfW3T2YwoCSQFGkNSM7yxVRN6NwZChUaG1TzN1rw6a8PTHpajxBjyiHfHd83",
  "key42": "2qg5MnbRu8PQLExAHoRthPHbhV6BDHM2nsLjwr84rL4EA121wbkL2rUrhH23uZfTVUjJCwCnGYzTxcnfVf5sg7Bu",
  "key43": "35ptRXMHM3qZSU7jKBMzkJDngERyYtpX2Z9NbPfonGF88ThUCX1powKrYWwMJqSXE9iRzH2pSdSH4LFEBVhobiqM",
  "key44": "6ReZ5AgmfWPiGawQNnpdr6mgH444WoEnvax1oK1r7mWV8jLJwemzinT9wvbkdrPTy3MPHVjiTGgLbTfgGkhHwWL",
  "key45": "2nfwxH266327ZHWeqBPLoXfr3v3wkcdxxRbjWG1PbzxkeYLF4c3CV1gp4gPnVGLGwrM2srzDhNSbNHfTwrLUepp6",
  "key46": "3hCDsvXByzBEzFNsksS7PEc3n7i7bpusmaocGGCMP1xhztRQqJKdJ3UUpLQFoSrooZZny8zicAZEiwMNufm7huGb",
  "key47": "2MSgB6wehfJFChCpK6JYnVGb17ijgBdPcikNRed64uNLWKxbYQrJrjJAfCbnG9XnPHNZdTeZiQ34SmudcBeE1uJG"
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
