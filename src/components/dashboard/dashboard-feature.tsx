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
    "4j4Yz33RBRPptN6yVZvrfiJ71an77eXXbNUTsFmMkEhQu5JdpbBYCW1P6yTKMGvNATSqszinX8f9b839uDXqmMhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9qJzxdnRDQ7uVM4gVcMqge2cUkMQjjCC6oWcxqKr6FDdxkNw5rewNDGaNJoarLuyiBYV7NXvYWggMEnTae2vpZ",
  "key1": "2HeNnvtkSiZNsRxnAsVvjjbSzAeVjAgpBbH3f2X8z5J7SzVz4FUontNgfZPMHrH9EiPCM8jEnehdTnvA7dVwiDCE",
  "key2": "54TEJ1v5PqN47wWZDdraPMoAPV7BRxAAF1Bz82MdcPdxb9Cti1uJRWWrz4mja3kveodQyvRReUCQyEe6Suz2tAm9",
  "key3": "5GaBeQMAmqa12Bdn564Dzxjjgx4sDDffafbYdp1cEsQfbnMNQEsSvpd3iPnvXrxbQqzaVnjHE3UK3hUR7WmCvhtN",
  "key4": "Cij46RiJ2ADUhGEG33Y13nZmrMD3Nx6K77rH47s41YZToL9H5mZh75LbLMceUDYcnunKeyths3StJHYA4pDXMBr",
  "key5": "63sMf2p6BaZRvikmCKGUk5es4XpugQz5tbH2QLVCtjW27HCVnKfyyrMqcFcLELoUXa8YErVfxH6PaPixt6erPr34",
  "key6": "4QmHftaQUADRwsr9aKM52GdxPTweohVY3T8A7v2YGatQt49AwtsarQzbM9Ba1i7AuuA5ErfLmihNyWT6orkB7ouZ",
  "key7": "gfE31xHY5diqHdFwFNumuJH7GroQvdRMsTT4UGwBTpjDF5W9NtfVUtbKtLF21a7dtA5RShWpmhTDazoQDd39NVQ",
  "key8": "2mNnUmGAuwgo4Q4j3PHFjY24CKBdB9VfELobVM71sPaXFGsNYGF3i5BMRPvKyf12btsz1HFNGzb666yfrPbr72vg",
  "key9": "5tfnoyD199ibQcDijFP4LSnxfoh2JGfZWdnL43rStEDc5xdQpsTwFuGPDzLp5ZFE3Tt8eaewZf3ztVopKCyEN2fC",
  "key10": "54chvk6pS1UgGcQJVDfB9pSSeajTd5b6H7xGGcpxCQmknJNstLqTQvczJuD5LXPR6CuYVviVy58GDmGHMzVtDkdQ",
  "key11": "2ya6fQo5McQoCv5Fc95tbN1iKLJow5tdk3JjWysC8Y4bsSjXYTMiz6rZMTgMRNYFJrXHEqvet8xfuAV9mn7HCG5e",
  "key12": "3pt5Vo9AQx9iarzPMCqziTbLsY1ZusnUMeS5GVRUXC4dgZtVFnKTHeFzoyDEprNxzxUESw4o3QiaAXws4Px1aym6",
  "key13": "5pJHz5Xq2bV3snQamgbrhKt8oo1HozziJZ65eWCEpYEmxQ3DLfFZFXXB1J9FPty6y8vdQdjyLB2jj4KHsxifJJRD",
  "key14": "3sJnti67BdaVFMhmDsif81hbE6vYc85xQFAZkM7TvyVuNXLsoru2MZHMsd7S4xLwenk8kHo7NrqJnDfbUgSSUCTw",
  "key15": "2huwgfGeu35EqC4rNyrsTfaUZ8EquzMbQnNkFZaMshbifwBASa15YvhRthggfK6Qa5BkVUfZjLRGkaDYfGy3d7X",
  "key16": "5fPLLjsLQHwpuWjHEukTQEwWvKwkV9n4R6vwgoputxjSqjxvRYYPgcR9Jzu26ARAiMHqM937hRtKUns538XeDdv1",
  "key17": "nWDadNdYYcVpdnYh688i57RnuT4r33L3LhirgKx8tLo5VnD5sYierAhyNXWwKxLzHwbfhmXWAiZowzBVbzRxgms",
  "key18": "3sVgM8Aoitytr6Wk6zTnACSdwocTq4juyqpJXQPc4ZXxgzTuqca2C2uVuMKCwUkX1emH28ZpQYBeAMZr58P8Kcm2",
  "key19": "4RTVZqwVYgXdppmmt2a1te3hcPq8UrBvZvHX48hAHJmT749BfN73uVARt8FByddBD6zHpMMY4ntGcPRphQydYY4j",
  "key20": "3Dd69ufBV6PWt9F2CMAjftgKF2PhY7jQa1NFqfSrhoJ4MVK9iBZLLBBVhJMgsa1oyLaZZKoaTxaUMsniqXx6y8Y4",
  "key21": "5VwixanvHbzfptUDSLrqpuQhJZNaCcorJemigQtfdYHxdDFDNJ1Fq7eGnuX8oXeWdzjbYhEi7h9TTc9nnyfY6hpe",
  "key22": "3a7fUncdMJSd3SenaFiAyt6mef9tSw2STHU1j8kkKootfySFncNczaUPNwBasqxBV6iX5QhvQPfwtdKt1Vozm4qC",
  "key23": "3Mp1WsGUkk4Q7rgN7ti6wgL4eFVLLUciFNUKT7HWn7G3Q4HN6SbX9oLkCwbWoVUaRktbkRC6AguQMasMbAJCQEQb",
  "key24": "AyXyN1L9ykip1mAnmJiG63uxxYBkXj2wV48NyzKrGVMREhNSjMjmaq6HT5dTERH9Fs3DkFVZNypGxTykgzH132k",
  "key25": "3zu62PVz9rRNZ4mDn7bkdoEXWCPiss3vsqphpgBN6Qv6XYB1Kogjyh1DER1h7Z74cj4GhdN4Kici8iNhhNddH4Uh",
  "key26": "37J2vwM1PYjQFckpytxUbK4VnKwUjJKayhpREGPkuY6ugx8Y3Nr1YS1wXKmqeNa8DQWzGNYWSSXcATrMisZsMzvd",
  "key27": "3phwzf9AyngXGiCwvPV34pRvYYGy6WEyMFvBPaNrRSvs5NM5Nf2cjN9YGGPvyFVpzPuQHEihfJ2he6By374mxwFB",
  "key28": "2sSZjmAegwgvZmmMjqGTHdKSHmY9WtgRDS1wHVXizy32dZ7r8ruGUych7m5T7XHhtiLBzsmegsyTYGVTJWeaY2U6",
  "key29": "2s9Kd9xRKmyc7nwpFVR6d3jmWEbhfvViujxaBUJREN4FvWabKs5n4hbkaPFXDpsGmvf8HytsiNp28Sh28jg7JaD3",
  "key30": "2bXMHG9p2LeihxZboqZ7TuPd4Mwgz6UbycbsmFJPmL8d93QajESkjFT9woGyrirdznZPdiMA48JcqdZD9nVqVvJV",
  "key31": "2RQtCMwALxexoTxQvexNs2HNi9DYFAqErdHDyDWs5eUbbvTaGuMBuvKBqf8EdpfefjRF6DsvWms2qVdJhZR4aJBu",
  "key32": "2iYAGpenCp3jmvmBxfnfbziThrHFx3o6Far84d8pANNqu9hRbYtQA7VyT4kf5grsZ4fCU2VQcGTAPHGGnaWmMpi",
  "key33": "tcgVMcsRtPzUhiT7TmdaZYMzV7K2J4HU1qkFghtMga77heq5UGif987tAdA2MgcTch8MPA4fqABpzq2HjUjDfdF",
  "key34": "4dqtZk4fAFKuzTVMutUYmYesJ1C2E1Gt2wJ5X2UJ6yjLTTG8tBVRifD1fNX3agioTSe5n9hgtqeNojtesHQ6M9tm",
  "key35": "2bKGQCTT5BgDvR4s644nfUMdh7AXNskDEP7cszrWwpeVxfmvLCF1YgHeBfVPzb2MReDHe5J6FJ6wTpsHVGtCYhMh",
  "key36": "4KiAA1DLJ3smrgT7gCegegVnYj5BT3CXRgkhMxT16eggsJA8h9eZAAuxuChicL7YVLtZB9WjrYaAneYfkQx37rnM",
  "key37": "qv2kvxURePQDKh2cy8kmv5onApEV1P5KFdCMKz778gfYTsHK9GKxid1VuVYQjXWnXb8S8Ct1kuQB2ugZfJnjmJi",
  "key38": "4cRWDfrBD2ekwaYyEaauM5LkDMwtvLvPaCE5QXF3UT6NHZ7TMoVvGoTfDwt1BLpkqWhhjSdg2Pz7jUzYYyL4zrJw"
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
