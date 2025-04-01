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
    "5aWPVKvtcF61bLjyGiByUcnYyiF3ntotf7krDWzjGevqLCnE9n3fb2eVJjCnHnAR1Yu13LY5KwEPKt2wPXahVVFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iBs3XQRJWdmnMkUT9CM7HXUSKLcD8rNcseFfqNhphAFb5GjPhiXjeQnyTWwFktnCxQ65XZ5gpo3bz15hW1ivqXG",
  "key1": "3eUXFoknQC4jkzHhMyTLPqSAFLpE2UPbEJHa3jBWt4pEzVrwf7AuTcJaQawNio46dc2S9QZvoD9qkMuMbgdtNNJ6",
  "key2": "SPc5QeBo5x8y6uj4yQ3b2twHkYmyZqMHNRTpo24YFZxERVMJm2Hnf3MgS9QiB4sU5jzh7yjfdGyPoWW4NNCNwPe",
  "key3": "45YMJkWGRMf7bayHEPMJWQspiXhgiwa2W3DDMZjhoisyUPFzW6rWWtLW9R3Y156wWuJKsuPPALWkxBbuNaZWg9H2",
  "key4": "Q9WB26MhmDSw8pNgSUx9TLMZY5856f9tLRGzH8VFdQrANYi4fp9DegScUDJPoSk3Mv953c76t24kMKV5Q6oriam",
  "key5": "fYbzVqDLNT1z6nU4tbvVrXpQx1UooQ85ZhUseDrakrn2f58FvQtw7D9mQCL779vDkiMwe596jrddHyew7arE4SQ",
  "key6": "2UoXTSaK3v8pQ2WjEz3RXLQaKVL3KjX7LNRpJutDxhxhganbDtd4F8B8MFbnWzGN8CBMfimWWefFgS5KKbsUrKtv",
  "key7": "5BCAJ2aSbay1KRQPKSEtE4DtPXpYgueJ14QUyGXfwUtPKwGNEvioNHFTneCxeZnD33jQQwHhaMenXGnta6rxutFw",
  "key8": "4kfPVJQsg2o2Q3X6PSsA9S8UqyFX2rJhWnrU41k6nm4UBmXuduBkHiau8HKZ91nLDU9oWNLt3GgsiW9M1nR1V2bP",
  "key9": "2VW25Sz7cv5eweVBpv8dsS8hEHK6ScAW6qmYBvsjCn68oyw61oqGeFkfEUpaB4dEyr6W18aM1P3dkvsbjSuQBy2U",
  "key10": "65ZfepBCk23RCZkRS4dUEQKfbX3BqdFkgQFSF8Hs3zfWumXdZwYxfJh3UjFkXrJ2w11xn3bvJ29f9fjRymwHUMnq",
  "key11": "2eThNJAUup9nLG22CSVzggbKRdKYBsMkxx7ow9bnmKsLGSeH4TeifKXV1QhZsAvrDQf6tPNFj6SXaaq2dh4rEwow",
  "key12": "5hfPCELCEqXFrcfUYKknVaQgKCdcqpyvtGn8fyizod4DeUGQ53DvWkEL8JexnEG1hX7LJ2U4rzKswSh5GZy68JwF",
  "key13": "3HKRzA8KGUJYcbRNyhEbDSHKiXTBbkqrThPGmFYv7ajSTyw5poDDZoa4ceWAuXxPLoLc7a8QrcFNPRcV3krxHFhC",
  "key14": "5wjzCA8LS1pMr1iPFmG4ZMZjiuEzhbTEuoXziVKtiAed2AKRL4hUSKEo4NSRDDjYWrvdnSLBREXpNcunUy3iMZTy",
  "key15": "5HuhfGveT4TFoiGVDRVC6v8xyhBcYaBTaXNiy5V6YcZ4FQmDskkgNYEtd87EXPDsYoG11E8EtTUEYabPqGKvZSZQ",
  "key16": "4oRCn2SSXYG19SeEGM2NEbyJekGhxFjN5314JsTNcpwpfxxbUSbam9a6PQLCTP9pEmwafQAiJWt6VLsTz7fGnNPm",
  "key17": "3WNVyikGDY3D2wi69uZmNvF3wQNge9QngzBJAh6WKhEfAyVkcnnT7cWhap1zdiWoEHKo7Y4vFuQNEYTtNTVvRHzy",
  "key18": "5JY255K5pjTEXuoyaSic96TvV5tk76X6zmy3kDdyiZxYtHzxmULJFfnxgcWDARycyepqBiKYDBSZVhoKqYSXZkBQ",
  "key19": "2fdqFK7WwRPJMFLdaJiHQKKyHLPbEK2jTmVgoWoZmZi4c1CDHENN4YFu4e9g2MUTzbXJpzrLytGCUiNLhsA17c9H",
  "key20": "3qaBuzFsesAKf2MMTXjvmqohvvPBhWDPUsrcWMFnxVxJ2F73P1jekwTR6qZ9TqsmJsZZsGKGEnJWvUcRmmfznSz6",
  "key21": "Lo9VF6M8TY7a9qb67UzUtJRp6W2FYWVXDUDvgKFQwWM1evbrEDgKDfWgce6C5KdkshFnEKs7b6t9FLvfX5iJU5L",
  "key22": "2jtF7vzMG5XfxHmgC9zwXFvs3JePVyx6zDyfY5Zr3FEpwtJoTqehndHMNp1YgjsGzZsdqyHRTzu8Nh8rMeGwRoKi",
  "key23": "4st7xNVfpBnJ7o8rKNgGshrpsK4BRLaGuTTabK52icmaNjzJquBQRHLK6ZyG6Cad3gDCT1vFfvWft4DZ6YqYrUW8",
  "key24": "34MPs173s1kx5rvHMbP61w3ucsTh3LbeewYjLZtTTskXnPUZEayxNtfrCZ7tdBvW4SiRJ1vmLcztkorYosDibf9Q",
  "key25": "5T9kKwz3CWCQ17bphLEbe3Avne6J691MmmjPrFyAUga69Z4BVpzN2FmB3TFsUY8GW9vzSZjXDRt2gboomCNJPgdB",
  "key26": "2WsbcRPyX2F9s2C264t2pzDKzsjkkEnERzddXSn8pQQj7XbHqs3cGJQXmMoPDBQfrecUeH7iA662Uisnwhim7un7",
  "key27": "5MZSiEgUU2GNmYZ2ux1poaSxqHDgj9CREvk8cHT1KSPL6U6wDW2jcSMCvTtKa8ScccgGfxELbytDH9DXbfH6NuqK",
  "key28": "4Z2AtSwjR8CvhUQXB8v7HsyfkAQw6uWezbi8HAV7hn8M1KuPNwSXmJiqB9CTmW324YD7sP7A41J2zYNr1LFmAGF4",
  "key29": "5qA3rtLEwSw8kc6hD58esbVno1zxeTTFnyzMw9DTowy7jGGd7KyPhv65LjmntzrMAREGZzUa9pe8TBPEdJ34aazQ",
  "key30": "4wY8UHE9ZvTTeTFeS92eETJP4kPGXbtLeTH6EkgEz5D5vpg3QPT5beU58PRn2FdX3DJexBgqhzGMapHQtzS6q9zb",
  "key31": "3YtfXqfoY6JRFgtHjXkoZUBBoerSGCfzU5jkK56Vw8FNtEAubtG2ZT4vtB19KzqompnzvjqFAVVfKWFzFHR2TRcg",
  "key32": "5JqpJC2G9s18VvNUGgVtkbUz6hzUW8enhy3qZXni3m8i6w3mV9u1Qhp5wQ8kA5P2QU8KUZA2Wyf7vNmwPin2Qxaa",
  "key33": "4PmtcDPDsSGNZy7UnRyATFgeLMCriuyQAYh8u9orr6Aus8HRuXDWZmdNh7iQ2Mr6NX5vhktTnLtjp9suD6sc9eX",
  "key34": "5vWLcLy7WatKxYH2xFuyG4sRz3ScGjgyVfHMnUSWYStDrUBrGTAfqz4HbLsVyBDDUUrStZgGoKZeGYrhLkkXSm1q",
  "key35": "Jy2Kbg8FKs4TMEoc3dVHVv5CFfGLK8XCBJa1HWfg1DyFTE2bxxZrtt4QEdwkNauXCod6t1gqYCSQKFjjFFwEp1o"
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
