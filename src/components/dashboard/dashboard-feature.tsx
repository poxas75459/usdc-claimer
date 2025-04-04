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
    "3CS3Q5zpp5bw89h8fCifaDSvhyMt19a4cuHNQt1yLYvUJPkED51Fv8FKx2ZT35QmHmxfc967zXKCEH5dhPFyEd4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bEzzWvqNHxX5anqjGiwq55uwQQNFeCpx2k1UzhFSoo2YasND5LtHAqwdrXqU4ug6K5dqAzTRMFg4C5aDbfuLApL",
  "key1": "2Z8xiMDVZE2TSyLmZ9nsBPVAMQ2cTMYysdbwUoSCSi7STYNFazxnTsjRErcgyn9xwfw4p5439YDbDHT6vSBwHSwJ",
  "key2": "5S9UxQX9PXG9erJuoutVHbfMjb5Qsg8tA8gGSfAk6CUcsBRuLN5xAhYo5YBz5Byd2xAVaT3aMBeE2fxAVHjkN8ZS",
  "key3": "3pDcg1WqZ9xAK4jJEPryqmDgDbnHzmF2DjJpxgoxhr7xuLw8mjxim1g3eBKEbQws78fUW9EKTVD3tMXu4Ls2KSss",
  "key4": "2bnpG3mPakHXSWtu4cdg2J3vC2ZRxHokyioRVuuQQuNbHtmiKUqvYeJBmP2KGCDSmwGf8ffCC2aPu6HJKFygDTxW",
  "key5": "KPUgc91daZGhCsAf7HwdAqNVYZ7cgtHm3G3WBpvH6sxZrEYVwNyk9K7vyYKt4KULCAcuQb8Y72q6moGcf2G3YQm",
  "key6": "4JQ55nz6uiobC2WqoJEXZcXtQkurVhMqgVyjzhnc1rDe91BaApzfWcDeJYyVokd4xS4TScqPob1k2TVVWnDNRHMX",
  "key7": "3PPwi67YhLrPa3u2eTaV5w5fGy5jCr1jYuEi1RbhYiKmEv31a77B7DxZbUneYA9cv4trKRgbCHpMBELeRz45gxDu",
  "key8": "hQRZpRbDBSnkDChLswGiCDWBLeixsYmQCUrtfry6U1eKjcPrWdVdUFnfP7StosvXbZKNEPksc3JUrJpSwPE2ZYB",
  "key9": "5vb9TY5g1sP98vb6eGDmRhnbsHux1FroEhvp3sYMSmh6KnbbFhpGDdRyUQJ9RTjvGebGQrkkRUBS5Y4gvK4aASdq",
  "key10": "2K5DnZeywAgPEsdy1ch8vh2MfXEaR1SN5WuCDNFBjrjA5DdXDLzV6qhhu2YcQTyTDceof3fHC2gcVYhAmHTcam8x",
  "key11": "5xLd6fnWJe7iSpV4mgCSPtTRHy5rPLEYniHe7DKPiXMSWU8qhmsP34b8xEtkAvuKYu4zKS3ua6iwEQe5skwiJyk2",
  "key12": "3LxjSLnSPaQpHMGSuqfMNQMKB2FTQcK5ZeUA6TAUyc1Y1s7QgXFB4PRnnd2Px4xq41wNryZXsXAjSpGX2R4vK4Xh",
  "key13": "5H5Wa9qiscvRWvmv5wwidbMw6fAgd88PdGm7sGEMD5ZJj8pHf7SPytDxP9GS4ufMV9ikqosfTBWiyKVVdTFDWXzW",
  "key14": "5Ert9rG18qyzQpLPC5S4s8cxWQzUduQSYZvdskuCPXYGGyNyFUaRxst55yf74Kbtobsitd7dNSYkmAi8HCfGqaE7",
  "key15": "5vTZy4C7rN4fdew7CuZ78k6W2UaFJnYHz5YUz6tyW2n1H4pwxbYzuy1eCPT2auBWzFcZAduSym9hJ3pMzwgki4RH",
  "key16": "5zcW1S9mb2c3Goerc6N97Yt1W875VR3G7aEdy1JcKbxeYgSzAX8bHWNww4JB8cMMyib7QC2puAM8wo7nrV6xYFta",
  "key17": "pfgFNFVKuaTr7ahQHjLmiYxsNwWbyPSswZwhzUz7XtFg2Uq5G3pgzAaPTH9K62vTtZgx6PkuJZGtufPZdimvL6z",
  "key18": "51NZEbrR1T9gVzSyTc7HkfDArRkezvBCEmGteAJu2hES2Jy2wLsazZruofkTuHdLrV3VyLWBVYUByBcmJztJh5CZ",
  "key19": "aV38kK5Xt5GJEiQpGiDps39mJeWRPTDaKMNoTvmE2YRSXveYpAnV52H4KjkPgRQ1VewjXHaAFGRVzZZJTxesvTx",
  "key20": "28fXqsrKysLPvf2bjiMyDJRebF4aoooqAFBQ6yAR7kTCwyEba7cxob56dhP5vw8FYgyDDmTi2aJmdYy6Hte44j2A",
  "key21": "WFgrL5Ngz84r8BZaiJb9YXgYjTV9TLDYMjBQnjDKoMtS3r3yqdQCXdWczNpcszixMUjwq2xM14ykCZR5DMdTUcg",
  "key22": "3qoFSnCtQgawBfg42MJUi84NSjGAkLETuSEk7zcqoxfdctLuYAsyLUZX9rLNs1m2rvFsZYQQt7oKM9sjutbowPvz",
  "key23": "2YuRsA1ZA3k3FRb7pKbuWht4bT5S3VXWTFNzuLUGUarr2mZRTDKTtdUomTQgFcRvyjMc3v6n5V6W9Np9Yu17ntay",
  "key24": "3p7mfyjP8XFrmQEEXQ8iAqf1MDGYZBs7jGpif3pEgzn72TWQiUpM41H1uTrx9MDefy4hvLwZSpbqab4a7yNrvup7",
  "key25": "3YvDkjpcBkA6eruXcDYhbQPUZMui41amtjmhJQf9AzUngjqFFqBfqnJm5cJkDqfgFHEwzdPLh9WWtMvmk8VyQrGK",
  "key26": "3mq412AwGEcMQAAA2b1jh6yX14iDq3AzmTjvBfZGa7N33wPcAGgGMyVyhGkf8GrsFckXdkbZZJV4Je4nj8SzoYTZ",
  "key27": "5FPBLnLZvbyJRJJvLoduHxw3DHJKLUBYWVuK4xqwGMhxAQSLiaPooeYMCA95iH9Adi7Gw2x7tHXzYW5xToQCBc9B",
  "key28": "JFXnkW58c4oSZKatpouQcz289BebcEpFgFURqWWJmc3YGDxakWtpg7PFVMs1XeW8iBsYFKuYPYJKUW2iLSeAUsm"
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
