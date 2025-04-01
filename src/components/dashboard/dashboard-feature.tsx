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
    "3q49H5Lv7fCRboxTKbpKiEPS3tCDjiETDHcL9VTs1L2VMP8GZ5XjvuDSnNyxTM2wUTpadaDsbsxxKk9PCTGyshfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQcUb5Yx31kcFpAf5pagitZ3CHgHtkFzW6qo6hzkV1KXRYAei1r76hL3UDrjWfUbcBPsFb4c1E8W4Gs8PwiQmYZ",
  "key1": "3YMSsYPxhDyNPhRsJp9QYzW9hQ7JWskUAoif6XEsRCnDgtUzwMQirek7nr7VkFmiqVk2FViA8Y9NXLYp6XCF6xDp",
  "key2": "2enYVdxJafGFX8GELWCBikBzs1d9w2MyFeyPMnymq9M4tzBWyothhrM1KF4Md56umbdPhEPG1FjWcKvR3saiV1z9",
  "key3": "4CvaSaD5ZjiUc48aLeRVFe5tTi4X4nakK3F6WENxM4khERuBPs5ebNLodFCCg7QALKiazYrZqpxJcXtZpx7DD5EZ",
  "key4": "35ojnHZ7recWd1uJdhP5Voh5vJCp28EfYFSS6WQw6tcnhYzdcfhzbuSK2M37X13MY5W7L2fn1JWk9YmttwjxurGw",
  "key5": "49RUyuEt5DGDrFuJ9hWPnW5993aB93eBddhYzAwoa4uLnpkJmBx6QcjFpX9LjQyiVkyC3zEjHhgYHXRg5iaRDxWz",
  "key6": "3DXAmyup5y7a6Q1rXfJ8RvZViMw6Zo4SReFvQqoCTkPpU5kHstLzocgPkPWRr51AKgkerP8zrChTbWfGLoYtNhCj",
  "key7": "dBjE2bf5CdappFUw8y1MnSvYBQdFeD1UvKrWhWVE8ZoRvNz7TbaojcW63bKpL1yhnKGx8wooSPdxvox4Bsm6X7S",
  "key8": "3vUPTmuuGwb4UDp7kqZcZtjqxaRMhvehKc8Tbhp58mSsLoyHEuuY23mxBt5JjWjHt1AYsczF5UdgLS5JLX8ALS3f",
  "key9": "5X15rS1jqX8Jv7Tuok2rKTNke9RBCWF2fmskJxGcye3zZHLHJyDonMeH8GTzxynD1L3Je2k1GAMczdupZrpv2RK9",
  "key10": "jCviU9Y14vyxghhhkYE8x6Vj7sq5JXAmqCv5qFpAwU41F99jxRiMetTq5CwjD2JapkSLeDPzLFDiHHFFKTRAGNj",
  "key11": "2YtHLQzy26JgofW6bcL6FPVv2V34TmUi7h2ao4bpCNUrYDwDro5XCgVkp3v5H3DDDsJgdYWNrqDM6VSNEGX4UfED",
  "key12": "36Wcf8Ba5iz4vmuqPUYdcuSnn4DPyEZbU1D3xo48ZpXGXYcESWF4gv4j7wvKc2gYTk8yXJRJ1nH7cEBAPd85ru5G",
  "key13": "2JatqDtpBFUTF1seUcCnUsJTa8hdMK7Q6KCeTekz7Nt9W1Cjpjwj35SqWZu42oWBc7CBkWrWJeaNxVgVBGADSzdD",
  "key14": "4n8qwqjt71PyEng7k9pi2MgkyZeXTXdh9Dho3X9bCEtzm4rNQuXWyJL6pVBUSDu9JYyjq8nhabzSUgEhUYTfGgCJ",
  "key15": "3hTcmtAtWj6TghDwfseJq54xEp523XzD5oUhHx8fpUs9aMJBj7xCZLdsesG16LmsGfuYFFtrzxKPfH1AYxJ9xJxp",
  "key16": "2pCTLKj9ZZ6pmBfFoNgz8X1ktaXKjwCjyq1RYMoq7uzKaP21bAFsrHh93Gj74M9bN4KPUdw9j6JBfz9XEXc4EDYW",
  "key17": "55dnFicPujBvifeZoryq1uf8VbyDsMBq2ZSDTdxBR69Hgoe9RLdhZCuy4Q3zCFJDE4jEa4rNjZ1aMX3YvkNqYjAJ",
  "key18": "4tBpvvy2Rnugr9vn5Z3F5HMzLTyLYcGjqT15WDU43ycwTJ9xcMHQnuy1eyYjFBAKnYUpbW2p1ATw4edpXYrYkfnJ",
  "key19": "2g9bR2kJ7E9UDFVEbHxaE4C1aLe4ayRe618v6MRpFnj5v81HRMeVzqHTuU4BL8jAj5rvuf3cRLFQB4xgjHnJsbCd",
  "key20": "2KUPmf79DooKENqf2d5NyoGrwduefDfDUW2v2xGBoG4yiYtaQP3SGXtKuWdNG7v9GXqmz242zsTrkLDLtzV7pTkv",
  "key21": "3gdKMfXradetCyeAemsXwYmD5z83UkLKvRBZojv6GgRtFqAptKxzbmbThQh8AHWqHDi9Wy8WgkddueEdiePdYiEC",
  "key22": "2m9EZSr7cLanieiY3gESeQypkbLne32iVkgnyKA69ivXLhu7bV3VhupgXhoPPYPqAN3eyAzELPYQL6jGenWfobqu",
  "key23": "2aA1ch34PjCA79oMy6whm4ZvVMgD8jQkvgmm9rhWEG2ocLCfuQe3CwyyTDe4TyfLspRdCK7JKrqYZ3tNVswfaV23",
  "key24": "MmSN8aQEfEvTV2qEw1yZnj2FacuHUatPutPDPZcta4R8BYcDdyXAnW2om9hQZFhECmN37M1vbZ2tZkF8TA2XeCc",
  "key25": "2LRvxojHQw7ZNAHWzEgVYQa49RKRCqPsMuC6SaWkCPzztja5pt6At6TRUQ3p3WPti64XTw6Wd5LTvAgfLfMiHkYN",
  "key26": "2zzeD7arqJ9zuubVCEoeARjXvR77MN87MmhLbUDrnvvwnAxwtJ1mqv1ypj3tkiYUm5Q7LBKKhq4dMv9aGQEyp7Qa",
  "key27": "5MAKHRFTCKeSDVUV9roNCWNdJLMd9rWYFAHRgYrmXe3pFL1QWQBTDfKfspb5VzjKaSDLL8AdzxxCQjNjjp1fEv4c",
  "key28": "3sCuNGQT1YvvrBBq9icby2p47htHsbnS5onQwkHzqKitAZTaMQrqm8LgnGoFYD1hpRdYswgF3SnLVDCyik8sXssJ",
  "key29": "5hM8A1gRhuHscJ7x6X95jkM8JwdfkRahJMXccE9f5eXw9HEBF2te91sdvgdUTCTpMvKn3VZtHphmctAgVEQzK7XE",
  "key30": "22eKDqngCibMpiuZuY6tyKqF4mg3CFEHChwR9JZzkMAXjVswjTQsEhzomffHw8fZ97reUmxLWwdkDzsgrC5a2a84",
  "key31": "54kXEaCvxTaZrRBsx5MYwG4357RFKoHi8dxHrX4tknHsCg32FdGAsvFexPjumcaLgEC3CzQFXYN2QBPEsAmGBpqD",
  "key32": "2hFGCLPtHQz9dSDmFXehBLJbqmZZJ3RHbXTSgzKYRV6p7E5LLpo4Af53fP5UcTBuF9QWKwwvJdKnSyAYScSyCU7b",
  "key33": "4MyDEcWaqVoMrCYWjsnyqpziTway68vfJ3J3WJFpvg6Wa7XndidGpc8Hus8sExYtunz8oQmcdTYdszTRSV3Cymin",
  "key34": "4YV6kmpZnVdTNPGdz2ky8Nb8WfiouYT8wQrhwa9tSjnYaiStw41tLKJwsaVcEwcH8iVVw19qYQ317sH6o4AfVZK",
  "key35": "3hCZpNZpGoh64QUWLKgjvBBsipPGFLQGvXWLbjw12GXxC9fbkm2bwfqJ8qdneqK2J6goFHdvZa3EtjqHX1Lya29V",
  "key36": "3JVYLb9yrD2JB82y5ArL2shiiSsU6gwaDr7nfym7YN8UMJdvt3u8kZvY8MJt6KsmmgLaNAEcJbT69ZkssArEU96H"
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
