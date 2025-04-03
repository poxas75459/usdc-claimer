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
    "4Z8ai9ZX3vxLNohYzJUSf7DJuGYpPjsSVP8PUCbMScEgZaDeMjnxJjNMLdXRfgDZWrNawVVWDevPD9AATcse4sFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hDvYNXvYwSSMmzhi3acVg7Z4Zz6LM1yKNYJTjcWH2wdq8B4CyarGbdwSa6DYciGqgGXf76nFVTMifyaXscx42zL",
  "key1": "5XZ3mH77a5qGG2tMpwszRMSZnzJZw6HMEktqp7hEi1B4RrXFsmpEwPuy33S7t4P2DoNtnmfBvdyahvGQEZFmwmG9",
  "key2": "5kYEwqkqcnv6oPAz1DgC22EFEKQCVB7c9docmbWj8ANgGui6Tmz7Bn2wN6pxc4vHMPwEpjpiudW9Ko8N22wz7PEP",
  "key3": "4xd9NzEMc8MRJyZcHPfyELkT2su6uvgz8Cwmzt2wbioFZDD4HL7QkcZ8xchz2z3DR7QuGsNz7Fe2VRZGYVXaVeLZ",
  "key4": "27mLpn7EecTyWDqdfRPTYhchcvX5m1JuGXwPGiHZGiefQQHC1px9RvfbyK7ec85XaZfTDW8xJRD1FkK9Yz8Hknyh",
  "key5": "3u8c9KJcVrCLLmznzJm3zmmKqt28hwrnuRhtU1H6dhxVwgQZKbWJMzSDqGzBERpjPRahstWi7tEzt6PVoCxgVKFs",
  "key6": "5FaBv5fd3vAJomjy9rnzNXusy3LnEAS1jHNKviVN2J2QpEjm3SUgdojNwrSK26g7vAWnZM1uHRGR487gWgvrLgTY",
  "key7": "27xYWhhdbeyeXCkhg9UCPgzTqcGAdzGLb8AG1kQbDki8hUPfNtB3QpAKv2JLKNKfR7SRgU9UVohuVJD5ZKhUZNvw",
  "key8": "2n8D7cRoBsAg1TCBwJCTpGYoe1xJbTCk5HzQeHzse16jUVCTSxjPTwyQPq5K2kpykh5gwThWap98GR68GvwEhUH1",
  "key9": "3GrqaeyaprrKr566qFZXTAjwqfCN8H72F6o16BteBbi1G3jywTECPhHmRcdzh7tX7xXdkMaZvgEh54UUNZQbj9jN",
  "key10": "54TxsZk2MyLFoH71dRTnLsJA9LhqtoVAuXArHpVsnzB7kAeesBFALYsBBFzbZrckHiQGkqvEfpqSj477gbsB89RK",
  "key11": "2gLVhq3rYTx8MusETNh3FwerqPgX2xV94F9nrQJv7Y8N4ub5BxbYi85Afs7X8srbSYWDXeUVuKBLMmjeVUS6cows",
  "key12": "uYwneDmFN8Rg1UBMzXQyq88GgTVJWBWNd6rMSp1Kdc5ZBxE6rScrFMZVLatbvMQWK9dfixSVw45Hd6WU7kwJZMH",
  "key13": "3sQwahXWK6LrbavixcTTiWj6NKbqa1qvWvkLz8yTmbff89xgW2J2ovyBQQ2XSJBJXUj9QERS5s11RPjMbdLbhb1D",
  "key14": "2Z39kYRSXNzGTMs5vL5zFqL1T4Y9TqyWDYvawfk8vKjdRRmTL6nSXWPFtA4fhvGoEt3cxAAu3hvj6Xwno443iMd9",
  "key15": "4QrAsooccdzzUQCQkNbE43BRK1NzL9mKzwVwXsUErHckuoA3gfmAybemASv9ijTuiSmrApK9wC79JDLunM6kt8rF",
  "key16": "21Qkbz2knmo8qLiwz5MyWBANxAQ6HbLejbLXaUaFr3avefvAqPte6QVw6FZj2smjWp5KCo7TkJzc4b8HSdcgwE85",
  "key17": "vkWQrUtLJZiVDT1RipRFdZ31u1NYUkcvmEawY3A2aY5A1aYPB31w2kw5xVhMdFCBnuVnVswHyB5EmYndYStbWkK",
  "key18": "5PJjayCp2oBybApT68dv763KnYaC3idPDrtJ1Xgpc7frNwNLV8EC6VGhawSrPFnb7VjYd6qPg3wDfATi3ktQbHXT",
  "key19": "58N6rLWjMi9tNCw4LBDRfHtGgxEgnmALSak76svzsxLYoYYDh4xwiTRMnG31rK4QUyJmY3gACD9LcwusQCxhAd2f",
  "key20": "ZKcJ71CbuiyeEEjZF9XViM5RhEftKq8qCVD5godB3wgLBFjG6r42TqqFzqNf18kG9GZk13vRn4BcEmj1PGDs2vD",
  "key21": "2LX9Mq8P8KmJRj1iYPVAADRb4Txs7um6eRTbQHZ2kr6BhqEo9koq7vAitbgdxyWLtfyHUuNcqadQz2mtLWWSXD5A",
  "key22": "5WhgapCqiL9rvCMfFyYM73wByKf74XUXNweRcGRC91XxbVqPWzsCCcyExAPm7Y7kib7VNT2nrPsyXeDVCkxYQdXK",
  "key23": "5Wh3JuznAC4Cbf24LH3Ec6rpYM3NNNFMnQMjCYF27he8eiqaTvswEiY9mcJnKs5ofrmLmeFGE5obSyr3hap6WjMo",
  "key24": "5VGtBZi1S45gBMBih5Rt3bKFp7ngNoL4eSHkQ3RxCpNLsk5RuxGtiDWacNo5JiH7KWRJJuXJnFDnm7na7FH2t3G2",
  "key25": "2FEAxGJtzZnS7qPXN8GKkbMWyd6SAA5NB6y5UmqiWhZ1q5QjXwXLjL9tNehZJgq2zwkpP1T1yqAgveGZGx98Wgww",
  "key26": "58UjXJZfyY4YrXC8aAELNQospM8PkKdQUY8NHQUTCeWEwEHqH42CqGztkfigyQPaS4Q67fW1e13vxGKmFqzmaSnu",
  "key27": "4PsA4gYgWPnsyDPPLzNLpNmPvtFooaBUguPYmsT59DRNQvVR9VUiNiJoVpXnG15gqM4gkMMfaf7dStfAVzGQ4aUf",
  "key28": "2D6VAWgCpfcWRdBXcbSZGdWSAJKUgYP7wB1KU5unXPNwAAbZwFDsjiBjPWb8FNrjQE442ayQPoDN8KkP1H8e6V3d",
  "key29": "sJtL1ERzmMqK9DvL6U6QyazpdJqSxYZrqnMqEyJeuZMCGTQSeFXqfQcN21bx2w2shBCMAAAs99RTPYmB1ruDL7b",
  "key30": "4H5fMecZFFrFpwsm1EoQJ3N6aoH18PCNdnyuTvRRxXfDug8geYfSVs2TLxkdtbuZGFBepZY9kzWudvNsNULxawKW",
  "key31": "437dKJahXaMfHoWJZbWn5QXgdk5eA46xBzjKXUKGKC5yagVRWtGrfqdpJoU1qXTuVegpfWmMuHUnqrpn8KM79Gb2",
  "key32": "9n2Q56woc1NDJqFDQGKRSNR1czHTqmZ3zNU5zCg3YYjAfh87La7ftQrqaeNyknnoAWvuU6Tse3tameDitAhHA9m",
  "key33": "2s2RjKoVcNunGJhrLTS8CXA91FN16fyvhGBQUzEo5CTzTmww6T1pq8V3Ub6YR1ARvhkijA5mu5UziKJjWpsZuC3o",
  "key34": "3jhhpjGC3SfagN1FaQ2UmmttDHzJmFE8cY8kfHWVEzphXoits6b6BQD7kiuLyJ3QEzpUhvZZ5qQB2XjfM2GDYEty",
  "key35": "4bongzS8nQjaBcnAjUHZgb3RNB1FeyxNZukKiSMLTGCpgBQ98wwS8P8NqYyLYgMWi4GBEuGnftBsR53MhQqM7iZW",
  "key36": "4zm4fR9zaPkCM3tuXaQTdK7gvQMBkenefsegNSP8yqG8rL8mfuSu3pDoXm6vQqdTg75WaACbD43GGthFDz1AeYuk",
  "key37": "314h7ZhCKzNd9qsF392YwFyvb6W1TznKMLR6LiqKhCKgGsXkiWavuKzMfQkt4F4FXeMyYNpLmkUF1RpERR9U8bt2",
  "key38": "8wBK8SLJGUkUS6FMhQU9JD9ZucZtype6pjRH1qD2unpb3E9aiX1TqPWeRPLmAm7YQae7YjuqX8xNGk2JzBM5p89",
  "key39": "5wjBLbtzCj62p3CHVhGQwzAFbnR1ASM1esdetrK9GKpztJKXFPPpd4vJgxhda1ma5RFuECeR3avtUWPWta1GCafJ"
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
