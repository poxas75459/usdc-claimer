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
    "3TFVNg52nv9VfNKfmp9frnqecSAtcNsDTxEDGrJ5kAU5ASQhSG12Pz64gTMoEchYjRxz3LL37uUNPHwEZrC2yTeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c1JrVphvy35i8s8cikEAEZE3kx6FpXFp2VbRSFgFJq2a1KJBfakvVfkyY4UCRvBFEfwajqfC3Cw36UR6S39ek7U",
  "key1": "5yHAP9GEGZaMaA6FjrLnEYgXsVJaWLu1yGwBy4V15qDCMJsmqfXFk588VaH3UuPPRukrq2TBE6JN3V8H5BGUePzD",
  "key2": "5Ujp4W7sE2ebFLmdEAyvntE9e2dExxnaVtKWRBTkPYh7Sh4x4kVvniR4U2BmKmS1vxEEuCV9ej22gfEUt5ooNdjf",
  "key3": "9yRrSVLpZHyvUTSbNxv9GfdXj54j9ncxS6StefMrbnaYa2xUs2wk87YcQMceuyiraHUnLxcRznXGUPHmJKGfUMP",
  "key4": "HvkwouVGqDY6m8FEkWNMQnwBfnM8kUNW11d78iNNQEw7Yy9ebioJJe9wZwYCjdeKgRsGXq6ph7BdMQT7gCp3yc4",
  "key5": "nv15wg8wPEJDY9qhTscypSRSTvQei6BxDFqknUQdVbq3zCyiXNp536qpp47ZWogfYRkagGSQ9JCPB7d4RjhNxEU",
  "key6": "NMDUDFkxU7DuyYv1g5nD7Q3aUwBfYmetabhgFF3zf1p6oUx6QJNJ8UdYMHQ4CZswUQak7adzNazYeB4GMunbFVZ",
  "key7": "3jBEtSbakBJikBVYeve85M3w9W5H8KWmdgoPV4o5f8VhzqcntmZh8eaa5waSjaJMmuTjxMsjyFhUKYh4Yd9HWAqv",
  "key8": "5tRw6VavHpX213kj1tKJJi1Hn9GekWnN991qW3ytxURArb2dS2wyuTwcHt8nsQXwFHChUzfBNNUoVbuwzwFC6uvp",
  "key9": "3HT6StBDNi34g1ZY7KDJhut7mbtWeDyoLy2zQFE6hKppUZ5Vpz5tSKy216owp51L2BQPdXpUypzQ86MpqkSZ9dGE",
  "key10": "bTWwso8VNDMFYj5w858dReQaj95xHhjercx5zXyAm7wxNzmzFozqBQSzPKp8F64ASBLUfubsdVLgmK26uc4GzAv",
  "key11": "5j93aqQtaFDM3gXEFaBzAPttAKt1egfkEB6xhcrcBNcBwmtVLaHmtMyqnt55Hje4x3r6cGtkyBsxXiWoaNH9eH2P",
  "key12": "3bxUcP58wRVNb1v55Z3HSuteoGppYwMtpk3Y5efeGoqDVCMJ1nAKACxktXaGt5htSWsut3swWbDP2WpqexmrGpxC",
  "key13": "iBYpBEPxEiZcvvKy33dmQ3soWTmFKDLSkR8SVa3udWddchMoYqq4mfwv3ZMPu8gz4QAUUqkaNHvM27Rq53TrFos",
  "key14": "2Rd4wirotPNys9ismPEFL9ndGjEteJKHSP3ytHA7a4Ex7raJcqrwyd5dfn7wA7aDswCLMpr1VLZCJ1FqvSF7mp81",
  "key15": "5EPz4s9UGr51jUpfB8oSLATAYy31fkxir2UJPeDBiJ8vK2LEzFsaSyJgaTUGe2CgsxtSpWANxnyCXaiu9k9AuUMX",
  "key16": "2smr1MjbpDbWxUnH9gc3uMDH1cnrYSx5VR8w6yJGivfwwxmJuDNLD2BfaAobwY5KjihBJtc6cdECU4E2u6dSaMc9",
  "key17": "248M4MH6ed2DK7DeEoYdy6QTRjzQ3noqBGU1X4oAykT9J8CSrzQEFeRc5vRngDJqHxsftPo12oMjpobW9DtopWXy",
  "key18": "3a17B5TUKG8R5d1PH4cjCKJzNTj3M8ucxXVYFzQBu1z8GDgWqtpi4ALerCGJHbxsZBhfXDPxGx8h2PqzdY3ZvMoP",
  "key19": "5dywtg2ius5jTATD1XEnbViDV5BhrA69HLd5VXbdSkt75rYdpBoxD4vUuaMaqjdwsa5xJ22JXjpxZS9AgvzAVG6F",
  "key20": "4ToRpgUcMunf5G1YVmZBk8JS3e2SToDjHrAhUTSm4eMyvuEkYUkMiG7Jj59pnasiX8EfhUxZ5GR2DhM8AjimZoaC",
  "key21": "4fx4V9frSC6aRar25TrKSR4xm28261i7GaJzsreHDthbyA2UTepPv2DQ1KZHfFMWgjDcFNqFsvGZtvmkY1qqjHA8",
  "key22": "8BqV2zMaQ2oNKz7jHeKzXYY8eZF4YwAjZEBcWweJsVqdYo69gq1Dra1gDtzGxGnp8xx7KBgjWFTUH3mz9FoKAY6",
  "key23": "5F2DhUZxxSY7JVXmc4ZrHTn5QvkJvJgr18QqRSRuAJ5hBHRfZCqEYAmZoSzq3uR6KfspBdKARxYN6iyqzDZZxZxU",
  "key24": "3n83BdE5ePS2CHVk8evBLd1avActv5hBqws6bkjf2AhN9AGsTUJ2msaryLX9iXXZohY2HktVV6smBLAWhFbEk5Aa",
  "key25": "2czkEnerTYJMR2FecvdykqcGJVrnTtodny5146s9VFRZUamFsrGHJdVEudqJ5F39uq7h2JUioi85dn1WkQdnTRK2",
  "key26": "3wBU2m6hYMUxAsxm6CUmSK37UKPCPxFCqjaUChzgANtZjtSs4DYrfcG3TD395Bmi2RcfvonmgRvjQLCBpxsm8wYB",
  "key27": "5sfSAPMebq5tr2bVwVB1aFF7bCdnvYrpbt5HCKLXX25yBqo6HeGqHPRsBHEnPE3awpC4dcikVydZxuCEet4VWgfV",
  "key28": "3dgvzdFWBRmqFTT2ppRbkA9WxAErJorWSZN42vqV8QgreHnNa8wQhaQhqq5xTbsTkiVCV1wEAkUp1Z6jSndjafos",
  "key29": "5cfMPsv8yGGWaEH3MRp6WG4SNLbMuwgpV59dRnJsmGnxvQiTzjbzsDoe6dYh8LubeekS6jV9FymDK4hAPBnoukSw",
  "key30": "44WLYiaL1zcQ5B6cJaRiKkNXaVoXhvQSzgC7QsGUvAvxuUQu1MeNkKoUvCwDdKyGsaHpfoh27J5XZgN2nkogAQfD",
  "key31": "2ck5TfgPo98q7P6TdJLBnPLJddg2FZ2c3ci45SRLrPCpsDnVSciuvVcokMBMtmwaZC45JpPpk2GvzbPgny7cmBUt",
  "key32": "3zkAGHaLyj18h3ZqK3TqPHMBQxK2Xjc3e7sctp9uFmYA8Q9KbTaphTJ6pRwrnJVZ9qHm6qJwGGa3Pk2vt1mCYgpc",
  "key33": "3c9HYYputvJFHG6nZme8TkFQQZivG27bexqFSoYP55DgdGoKGvbNERqfsRvedrwoHjfaRgBf4e674tpfBmDHSBRb",
  "key34": "MtxyZku8k3qfUCLKfth4WvSn6wFpthW7ihrEQ5RYZAxEXnL2wz7FqPrxNQn4bdGHvwFhSEkkzEx31cFDZy9xtRa",
  "key35": "2SKD2d9DV6L4swZTX41b4DGQms1vxyp2wyDCDYhAaCjFnDrH6T1pF2nXtZe7JWPkDWMHTcMQFoWZazdi7usiBoty",
  "key36": "5rb29xwCSFZe1gy2njxsAD1V3PekCV5B3DygqAogGKNksC8kUo9K9fRNSEqNmEejMsdnhgBiXtaHWA8EmYUXR5nN",
  "key37": "2CQnJDVgs2VMSxe8dV9H4BuxprTrKAiYprKmKw36VY27zn4Xu2mYsqrZ4g6QZeJ1qRjarZpBBVYwgUieDo5stqEg",
  "key38": "2uY9DeWJTyLiy3wHrmPNGPQ1fgDoSdvKvKpYhAN1W93vB6YxBUkEM7f6SHacGT7zxG7YjhjDYqNPhyfAazNgJ3NL",
  "key39": "3Hk9DbzDYQ5ZuXgjXgQdiDW3vTC4CpqVGjxtZDaJ3PsijQWouxPRyDx6MmbgzRFJxLjvN5AwXDW3AgAgtActk5As",
  "key40": "2RPLkj4bVZCKdXZMSVyRSAWmJ2dtXWByiYFcLkLjkA33QJusYcLok9KwJtJ2HWf4GF7Enq8ENBVxMqsd6R2VGFvE",
  "key41": "491v2u6hsmApXguaCscRGW6QTuHXa8AuMoXqBnYE42rmxeCcszPgRCKcfbcurNao16Ux9ge8CGkBephcVWuUWWfq",
  "key42": "2BpughRrs696iHcCTp4xzHCZeJtQWZgc9fuMzbut11atQTG6DGfzZAQeKq8ZZ6yk4uobxkHPNA8rfK95BjfwhePF",
  "key43": "CKMTsgbBdzyGLJ2a9LDNQQxtbuX81DecbcZc4bvt6BRuKZSZPX3tsPGBViAzMyWXKTH4Mp8KRk1FHRaBy8BYqwj",
  "key44": "4doUG5jEXexUYH26aiZr8DXAztny2rtSETgiBC8RTzS2zrGqW4n3HWDtgwmR4HYb6BqhEDpRKL16AGWatFdNryfT"
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
