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
    "3kpMrZPv9KqMJ6TaHEe74e5Dr4SnhvoxAUmZ7YKueXHPhqez2Zxr5PVeXrDSXZu79p9pV4fzG2WQXd7eLcCcezDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhrbYHFGAZwGMNfHndxWVPnchEZu8XAWAHmYHsU5ASs9mQaxswLYTP8tADUEp7d2JUgbibxSJgH4AYDeDKk8Pv4",
  "key1": "4NRdJ92CAe3nMM6m7nXJ9RQ3yMgquvzP42vF9uyDXHuLiQvyxZdtNN5RSUmGg5C8LUJNX7RLBgVpKfp3EiFphTUh",
  "key2": "44MPf74kDkW8q34XDx2YSUyXURtKKANmvceoh15AZRuKQTWCyKafdcFjYWrtePeKDxTjuqoQZvhkobJeY8BmFoUY",
  "key3": "4aGpYRqP3haSwVzaxfzzgsb4ZBASFNftBi9F82VXbTnqcm31V94LGCfcfWTAx2CxYoKLT4SbMoYfWPJLv3QJUgtc",
  "key4": "2veGieN1A4saFVptmZJnxrwYbtJG1ATV8z3VcZAiA3Sx2FA8eYDgQc66QdDhaqzRuJ3AKnsPLCnSE855WGDccfe6",
  "key5": "5jNNt2V4F2iHQqK79VKVk8daDSxnszAKgb7jVgCsCDaLnztiFTEHVjagaXoF2WnyB6E9rs67dBcgfmTnG9szqdck",
  "key6": "5vz8kByavVmyKjhTnkZ4wYUrLsfVTZk2UnNWgfh7ULSDn1VvKziJASB98B9oDJNv2o69u7x6fLF23yPrtBCXdRUC",
  "key7": "aMqXYYR7R1kktcpmiBgu1NymFqSf6CkTfpqvnteJRcAqaqRJBNCEBb6mo8ngE8qRPnKSr6pzDLqoUq7BkJr4eAz",
  "key8": "5rEkSqt5ovNh7UGqEqyyibir1rqbMQpU259TerW4686vXA3JJZBkCk2ejD6MQxmmHK9dDW7mTc5vvXfQBXGsjdXz",
  "key9": "5taaybowZ5a6Fw2tXqDd5GrDSArzcQpYJ36AChygTjk6nan1ezaCoYv2YTEA851mbtBzyqfCvR5KC9rUyhWKviu2",
  "key10": "5fXksR44XXuyCHKB9VaNGxPeSKxK1Wy134q8thYVCy5QjANRukS1vd7BSrcmuWDHHBDV5GPCeyy4PTV3tG7fxxc7",
  "key11": "YyhToVazP7YyyExvXs2T3EAG6ZX7AFaYnuGQMuXapdVaLQs6QxuyPgU4x2u4FXZtiwuY4FVjWJje6z923sghi1z",
  "key12": "3aUDk7EzARydH2JFd5ku6S2pwkq5ETwPjpmUD7epdooJN2EpHnRE2yr22SB1L2AQG4Nqz88HE1Z88kPG3iiEL8u3",
  "key13": "4ZayyeXb6nYBD8q9asUL4i6s5p1K9uirNRaUvparLiPyqRuLJ7xXcAUhftcRDxuUeJtdnxESR5mbPGtnXCoR7TEi",
  "key14": "3NPULm2apa6TYvH8ZxnpHDA5yf46DFHR3SAA8CYNjLjUnn4Jr4baLYp5W8HJWLeCAFmYSink1L116tQ1An2FrGg9",
  "key15": "q19TwSW8xxuzmHYoHYbPBffENima34HUWn4uLHCjxc9mXkeQE5H5p7qryQSH7qRm27srwCuM1Rs8TreMcKmYcCb",
  "key16": "4s6bnKZ4JqgrUdaT2xasdBEkjg2J8bQ5znpn5iDdzRkxXGVcWyXCgM7oZbeWEhuqS8xWNysFZp3kgBYaWyby2nyD",
  "key17": "49oSLF6XUKRjEcMffFw1Z6fobL42XPahoC4g51tmJKJzihPqK4sm4ryR5sHhRp3dh26N4f4z8tJvpWEbsLXzQBms",
  "key18": "5Y9DmTNeb6uUwFzrfYG1EdtzxSCKWWhV7pM7EKXbbzNL9EQXei4Hcqh2N4gB85jPsDW5w6jxQk4WnJB9f6MCoFJQ",
  "key19": "2wa56UNC7PTE6kKLt8CNogoFvcMeG7oLDdQPz8siXYLogQsJH7HSBrC2r2VDvXxoje5DAjN5d1NNXH58Piz5DHFM",
  "key20": "4navxC4WEFpPkiCuNTq6C9CHRY4ywpuuU1PJW1djFUgwukebwRsyaWkdcXpNKFhK1iYT4gbSvrDVrMMLAmpshcos",
  "key21": "GWxogxwUyzyjSYGDDHbyXY9ASqr24KPjMDK9fc597xhmz6F2DWdtJvCDigUQ5Na9tobbNX5nSbk56zZe9KQny6M",
  "key22": "5SbbfubeYbeHEcTonXUoqywTZ96R388aGbYbL2A6nK7Bdf6hvfxyQiL5kXjL4NfDvsmcRFpb9tusFtbQfocJ92fA",
  "key23": "3oWAZ6S7dEWUyq21GucEDfH1rjCqrU49Ty2o6YXqRALyJyvuYTDUQWSwuyXJhVe5SZ2BtfemZnHTTSLZyyT5VLi5",
  "key24": "a6PYMTnAapWBbU8ZpMCPENNSaB8dKMsP9USeoNUjsP5dqDHZpNT137kMpGVS5aMtomzQzxPr3S3jsokidmaBcoS",
  "key25": "HdpaqzGBQyhXbTiquh7QnoM7S4UhUg3XLvg2ZmF4xsXayjeLFyCgjya7xkarhrPTXo6WY5sHDHxENrRjA8EWW6M",
  "key26": "2moiJZweC4YvoXa2VpLPEe2NZJLruPNfhpLaAybffbG8Txzq1zPSdmbWqgmSsGnjRJgaeoveJQHVg8L6rTptWECc",
  "key27": "QeW4jg6g58k6tTXE2ae6nXGuJjQMK9pzyDVRKNc5KukKfXfnrATRt7EQeKbfMeFcTUQnZwbYwNrMwSeotfNiD1Y",
  "key28": "3S9omTNUU4LwuPU816gCX9rxVYR1mJsrm6A6n91AG5zHy9Gmek7cGz1gP3f7d1jQRTjHqqLmhVKV2JUpEc99vifj",
  "key29": "3bMLhEQVWXAi3trFhnDjDf6e9WjPDBtchW879rcDKEm8BfXDb24DyUuKcJGwGAgAszMs7faVV1QH1BrQHoZQBpiQ",
  "key30": "4QC7TXNAisKEjAKTgq1MVo5iwWhy355SDpGFTa9WtFX6qzyFnEf7F7hf4hoASRH5k7UaQiKYzFVteGfnoDJXHgnD",
  "key31": "Fp4jhJuVJ8ZW9JFc8pxgpRbAZN2ok99kPtpdUounLJdQBoEqdUfGaZBhdyzmfnQJnXnaTduuqSXpLoMQrsu8BTE",
  "key32": "5QqTBURWS3WM6AdgG9k8cUYfDUPTHDhco4aZocdrZMo814fHrU8XTjjGQWUUTbcRWXsteyTq7ybjHDFxgiEX26tv",
  "key33": "2ALouWis7LPCSpmjzN7y6swKaJwfB715yYqhzX3RGrimwoyW1zwF5adnvkcXDi3duDCY8N4HTXK6f2ag5EmDHToi",
  "key34": "5GxNms8SQgDbqLi2Rroer35fi4Dq6Wqd5JpuBxh2x1B3znZXhfZJGLhkRJv2ujvm7YwWioeGw1f9saFjjebNTdSC"
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
