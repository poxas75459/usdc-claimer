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
    "3Ajy7TcfKJbb2CqC5oUtcCWW8AuhmFR6mncfPKY1nbvWbaRuA8x26EMn9oZJaGAF9LH6ARvN9HukYAY94sjyMwLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQ95A4XApoX9g8D7ymj7AdnMdfW9Em4xwgPvrYzen8BS7CtcLNkDey3k9nCVio9JgSDQLEyWPH8RnwbXPzMVP5C",
  "key1": "22EzeRXZk5GwMvSfPDPZcSd29bvmSxCWgHjyfX852t2hGh5WBz7bWyEmVCqq125QCroEkznWGyyccyFGf7iNWicC",
  "key2": "5q64x3xPWMRG7sc7RQZt9QNmwcT1PG8mhT5ZBhGPLz4QwUnpZ8QmLZht5pAhnfeQR2DV7aq51ohWsJzrhUQJ3HDT",
  "key3": "28nab7eS7jxyp35N5arYDAdRNsBZ2WdwZDPhzu611FMnK8eyrZxQ1hiw5b2BEVBZ3UjfRsPt1ChAWVVF8Lut6XVa",
  "key4": "ZvSKQCJP51uPjZi2nHfj7tZHQF1nUfF2e6Cz9rARYEmaHLsomYBzyBKBhVRbsqcbKqHb4TB5ETNdRzF7eEhvpRT",
  "key5": "4KuKCDZJpZS71q7Nze4tT2aWktU6dwVmX943UgNAHnF7NQCoewXUFLrM21Res7acyUVLYnyeMFtFE8Scd6X7gVks",
  "key6": "3JfyqgeAj3PYgyoukBdu9jpDzWohxyjPZLBBdU2x4aSzz8oZjxZm63bifdCeUqZHvn4UTFn3eeipkDfxPhDD7HWu",
  "key7": "3vGKuQepzwvTuyEbbdvg2rVXQAC3SnvzBL4h8vJyd3hRSwYEtUN7QcdhNyRVkfmEmp47gPbx38GajjChtZSKKgeM",
  "key8": "4QFhTNeyFw341rUin5uC1VfJAfis2RQ9mA14THvDaPc3TbHnMdKaLcpbqMR5wHYocndj4zZvkehEgjV7NJf5sSxd",
  "key9": "54t6TwyuMWoLJRtHt2aZRjv1zg1pGRFoSNuhpT3ebVLEExPXsJPYjHBBcDZKutdypsFCYrdNT1ShTjdA2SsagP4R",
  "key10": "3SWod9KggKAR5k31STAE8ZAkzpqVEvfjEAopqj9yiQbCkguaEbtac3rjDFWDzSnmduWzprngseufyLfTovzDzF3h",
  "key11": "41bCop2EjchZBNseVGkefY6CuMeEN7tgmadqR4LWDX1FGjuaop1dfHrFT7wE3tJwWTr3Q8dn99BscjT4pTYHuUm8",
  "key12": "2nCvcTopvw7BNg6UvDKQub4Sy42WthSVqSs1L1aRkB7Bve2MYyTyogeu9NqhcQj7oEySDD7Zjc7k2spYDFuji4G2",
  "key13": "k22VTcYAGw4U6TPjsRFGbJJzPPGg16runvXgryhWVpYJtF2ubvKwv7cfXsSGnQPFJXtJG3EdEkxvDddN1qPJEe8",
  "key14": "3KAF5WqmW6AZ7H55JdcrgnDbPiNnbidokdibjhioxGzLDGF2ADrudhR2HbRQ5p39273L2c2Qgn39HnehzU4sCcuG",
  "key15": "3K5b5Uoshiw3CwutJ1uNigH1pUSS6VFpsiTGqTep3G1EXAiG4ebszzmRSqskehpJqqYNsnwViJ4ncxTnifvegr2h",
  "key16": "CKsarmjHwqvQn3idzgudaqibZGgH45Tvx18ryN9L69feVP9Wd48m5GXRv6YyPMHEoxwx5GvEixHbtTCCTKjoP5W",
  "key17": "3zidbV68ngesGnvRPWqjEqcuXQjLaacYeGcUBx4ACCrjWhnBjzP9WDeRQK8BYnNnoKwHYY7LcnyNp56GtRYibCKV",
  "key18": "2iyvGFznTFLunUZc7YoLuNFjRie14uaajSG9XZ6eahqHzqmehoH4f5TUG2GsrTqZkyKkRANKyfshKNN663BQmCzg",
  "key19": "5AY8Spfkj7MrsLEy18zwp78GsRg2ME7Y9jHaXsydcNQcKFCEKwjVUmzfW8JjxqqMsD5xRWh2JgvcNozTGG7Af1s8",
  "key20": "4crpiKKFxrGQ8u8rxLmE1CpbtjxnUPnxqck5PSARxAoN2CmHu3ZZY4VCxg4UxFvbXUadtJ7DRJ1L2z4N6EX8r55V",
  "key21": "3hcrV7rcM3KrcUQAHKB8Vs5jZJAo4gNkXQkpF8LQa3r32ncXSHtwEoLSzScgSShMtKsSjScP7qQXvjHDv7UZciE9",
  "key22": "4ed3Dta6Sa3Gp2eZB8nb4eTEzf4zciExYjhCYjdWwwxsfjqt9iatUcXNRqxjYNk52a2EcxRvkDKL414BZXz54GwR",
  "key23": "4nWMjkUHVCm4NsbUr1bfLK8Qu55AQVwfBgmf4knkcewPyjFU2nf9681LTQRFrw3gJVhMqEM1nLJKH8jEgNX1CEtw",
  "key24": "5j6DL5LjT3CwhfgSP6bZyLzhtiNoM8VDWj4TaspHv8psMXvcRTWZuS7P5dVp8wqGCu1jmMFm454fe9Mm4XvoascQ",
  "key25": "3zFs8E9gJ7iWRUR7UvTHjcJ3fevQDUZX4xfYxZwGsJxwbmtTWECXmvEft9UZ1iLfiMuoi5rvmirg6DXvqEan74ga",
  "key26": "3nhdCsoerEiW2iagR18t5HVrBak59cD3PMKpxntTxUDC8CgWE1YTAqMLrwePi8kYUj1BpDERiL8Mo7jAdTQ9j2a1",
  "key27": "2VjhJ8XpywiwTfjEKFVQW3gghrpw5eNxmgDBBufgPnHyQSFSHYh91fb29kDnF5JVpoQXtWyEBuNbdUQf3ojpSGHJ",
  "key28": "5Ew3xJSm9g4oSZKVYZXLr7p91c88DL8DH28zX5NvxJWhZVip9fZda3XdigsHnsN8agN8M6NxX7N1qzGQbHrTA3ez",
  "key29": "4M3yYhMir2Ea89XSze6K6vM7WJ4P5jCDfVxfrT6X8mP6SdMPYiU6T3RbSSk5unDg75ZGuGe1QUNEn54ybVCSwZCo",
  "key30": "3PF8s52HG98moLWccEzbG6ccdKBCk8xEqHCkmrM4QgKbscuvhvzpZiv4GeHX9TS4HYRoGyhdctsRbUoJoSS3kzMk",
  "key31": "3nnxc5KjW8m3NLtkE12eS5aGcgnR8jJb1CtmCfvKGTthoqNS9NhspEjzjsRfgUR77LJQcpftqCsv9Q77tANzuK3i",
  "key32": "3KzzEHEJQtSpJYkqazPg1nBkLBgSQH5v1Mutjt6nSmJtx55ytyy1ZJoe3mcH227TcCpYFXM3mPzdRGfP8tY1UabN",
  "key33": "4sHWTKAaorAoM7nfyCxzqfhQ9B7bjHyDp5eckyq9g155Jwz2EGstRtYExS1XApTWgmPGTBMnHCKgaZQGZtABaEY5",
  "key34": "4MTsTxwebvaMpZmpkKWxYZGNVX1TbHCcS4Pe4fsNa3oNMKFkhRBAjccsvRTFdXLwHnoHvAYEmyJCCahWdUQHFS7F"
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
