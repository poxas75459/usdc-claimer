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
    "5tYHKcbUSUfkYTft4JNs4xDkwskML5pZ5ozpfoS2M4fCMsQP2soBcyBvusqw1mNQvhMETndAcWoaWZzrwc5kok2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uuBELdbpHeRmDAhGPUjkAUxVSzUBTt1UxJxqVNUtpSXQtZkP8TgawtFnqhxMkrYkQ3eoMS5mukGrjXk1yYS1Z2V",
  "key1": "2tWF3PLNAotWdagCUPqK5WaTcsXe5gv1GHhJ5aUVgiAmpiEaEkcvAeJy1BADCZeAQMDgdyYhac9tGpHDn5MD8MzT",
  "key2": "5L9Rx8Y1d7YXAnkT94m1KZ5Q4LgFdsZxLeULdsfkekHTSSGPDmQyuSt5nN5wJ9GxJ7T6cXxdcRZERvJcJfGXoYwK",
  "key3": "5cj7yxUE6GfZhwLqY6DxdC8CB5tSTEcwK2Sidg9AMW2BvwBCMTiSZ857XtrqdJZJxBBogfkGuUa7Pw6DXDyA2sZv",
  "key4": "2WF9wQJThdNXFr8hqPYN4EhH45GPQaas6CP2jbLRjSkzmTTMT96RxcpgS4DvtUKGDJSFSuuKDnCnFqxaPJLMVzig",
  "key5": "5vRtvbKCDmSA5TyjKsQo85gRRsofiHvFHyesyv9BrMfNEf6LqEuMAwQnB8Tqhe5JwM2G8pcZkKQWJTiBtdZg514A",
  "key6": "3ErAusrz6H57ZgR5JiX91D4KhuBv82ciZQXXvgBgim6B8bjTYm4aY31iAbUjP3p55rqjMHcUZQwPNkq46PQj5FV4",
  "key7": "5cJSMA8Rm1xJQCnSsZAYoEfskaiApdGh2giKnSsKD9UnxiQyTRyhqRJAWfPMcRzHaYjRUQpoyFYyAzg3ELRbx46f",
  "key8": "48hkRi58ABYo7z2YbZvYGi95qw71R2jNkRZxmEXrwjKB98cnXCzAdm3qLRvtPGC1yj4H6jaiWZ47nvCrQwtCv2mn",
  "key9": "3Bo47P1QieL4fFkabm9vc4G8YyBNn6U2rYsBRGCKiUfFs9JqQYYWTZtXpd4VtU7bCg2ri5kQAPfYjuoP3UKZPKZm",
  "key10": "2eMRWhsuNTcYHvd6nmfY6khWqXpcxtBhbZC5bxsBuep4tET3ruLRWu7pJTvLu7CbFPGQdUgoaATZ4ngafQCYEiPU",
  "key11": "5cor3zPKPenjbvb6SU9gAv8AjCGLdHbfP3EbammTuecEfekJi4RY2L2488s34cLnGfMKbX1hSetDkgXgeqpmBuEu",
  "key12": "U1F5K9vXN7gS1sKDe7SFFvcDRQCecN5rVyqSu113EMQLQPGEfqUL4WhzJ6NtfgJxht5mDyhLh2r1R4CidgGarMX",
  "key13": "3KusnNZeZqByiWYKA6tzo72t8gJ2gaMsUVTxQxCwB5TMxam2LvH7LuVTwJbKan8QFeSzq35R4gVtF3BAyTrQW1C7",
  "key14": "3KB95dEdYAteTwL7KqFcwxDFzBJo4ubPhufZtJjfTywRsvQTLhqf7GTbbz5QGJ1tCzHDRZDq3CUg5K8NFhvEqDo1",
  "key15": "2b3sENo25XGRbPUc3xfJNMWxbUjTJsETv2US5MaizX9NSSuJyRWKSCyNvoH6ebvDzy62xHN6YE9tTacbtzbtezW5",
  "key16": "3Kq33QdytcJ5Hu5kpye6UHfnRvkiPL1Q4rH2H2Bk2FVeHcawHgjzXHqtRA92RpdAeob6gBRUnB36iXqLiX4iZR1q",
  "key17": "3R7pKGEwpqqZr6VbHdpWtzGJJjwpQGYo6SgX361TitRkyta7zXSF3xiQnUtNEp6PWeKXdEwiauPfzesVb1iUR34g",
  "key18": "2k2EfH12KY4xmgrVLfbiU9mk3bWFGfdnjeapRqQwk8kX4zgb5Mpvt23U4YBoqPgUpq2Z8u9k7RusJNsNgJPqHBBh",
  "key19": "PKUjkcZBy4ty4WHXoLyHweoCi4FfojgUQFsFEd1qHk4HCVmk18oYd5RZDP9Exa9uMogYESnaQr6eo1bBvuoqRif",
  "key20": "5mGALHefxaFSSopEY2bKqEwhUC61LYqqt4CFWGNnSYmipxPKtH2QjQJ7auNuMFK3BNsPKbpKUSe7S8cjQyvj2S3d",
  "key21": "3VWCRxXfkBrFo6HbFht5X7vWEQLvHhXdxoXPXkPS2MAKxEsjLVLEEnozrzuKU1iEoGugBoFHX7R1oSqo498BaEcZ",
  "key22": "5eBWAV8iRcqMRy38P2DzwMNMg6Lm9qrhY2hqFw11qJPp28hy18BjVE9ARA715t6o6wdCRbFT3VWz5DPhQdwgwqWL",
  "key23": "2iWAbNDSvJULvKMb1XwMPgwxuzpSsYDjhYiFbgnh3wsGc1gg81dnqwEmSmxEmLVMWR2ZyhZer6AVWLL4mFTDUhaH",
  "key24": "n72WN7sybDToBkGnpW4WVLhTnQE1P3och81y4sXHMLk7qunahYx2hRsi2zN59tKP5kMVj9CrJQCpuBQW5kpubQc",
  "key25": "4dc2BNKphtgj6zdyxXD3Sv3qTJKXmugbAw7shRCYU81Cqs4s1q8tPsoTWhjv9YwjuxdtwpqCC3N4sp7uVfUKA8KL",
  "key26": "Meyk37kWLpY2ZPTvuSEw6FCf7CaQ3JwTNjLkUfigSDnegnikdiZanA1rphBy8qjmGGwp92vHySTw79CsfG1c4iL",
  "key27": "3HmqLgwMRnEQzLm5emYie4KEzuutycwoWxhsi2cG9bR5uUNinZ8EoqYGgdMCBCxzUPSapQADAMse989e8xdk7JsY",
  "key28": "41vpdoChrei1rMLnXXXKbHZzmssCSSWBpVd3ui71Zc76EhUa4Tjj9HMVqoqFMqjF3FfsQuLitUjcAxYwLiCB9whR",
  "key29": "5RCv4Ln9t2qN4epLrCRrqPs8LU4ZF8fVEXdJmavmKKrWmP21Q2rZ3yf7ef8XJixQrttNvCaNfAiZvnqEjMHPessX",
  "key30": "2s7UfjxgzP7GZFq2FknoEDFYJeM65XLagsvgCwTHpajxm1YpvfoubgJQ4bTEp2pq3HtfXM8pCU1FNxTPcn2Phi7P",
  "key31": "2XZqATtwEMfrp79v9X97gt7Yct8prcBMAxe2SJTySr6QiRTvE2dtjP96KJFbuwTjWgaVGDuPpVABF8yGsvtfDkTk",
  "key32": "39j62mRxTNrXbbi9YVh2vvETZieP7ao3de5M2XTwPhac1DqsXXaLoFbQZ9ktQiXrdevL1ejp8ifzdFzboxaMSPTQ",
  "key33": "4hzDvXCkDMPCcniX44nm5AdAdFsyr62tQuadKgRMrRjRiFMKB96fmPie59z5yrdRWHByuaXhnXXvRmqY2ZfmTXHx",
  "key34": "4tKYjZMjbzN4KdXH6acEV6JHpwbkA7SrWJ3DwJqV6G2gu5quCkdyySe8THVPV44AVZS5VYRhUk8rPHGgyNrQv7bq",
  "key35": "2HwNyMxXDD9J6tg94aQES8emgp3Cq2ktU2fnmrUdGihE7znotuDgseuQBUGjrz7KscSKsUSD7ZMCaUFGt7twKC1Z",
  "key36": "4pZPQ5ZChx1cgF2MCNkG4Vdyrb9qJ7s2m2QDYE8XuJZdFNbnwv2fcFkSdwCUV6G2W2mJBrSq3CRTRmCuTKyJyVTX"
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
