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
    "4MWJuoXYf1qGPJzHvsiirhW3rhdNtH1sMLKCXtmphAT8d8aTVjrvExR4VPZQq7XqCW1zqro3F7av7QctNSpbbZ9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6Mt27XqxdMXhsmFpSfUZFuCKrb4Vi51kj3GThkJ8wQxUDE2vsVA94DqXKfWFFM1QCaq9bZrMvdABAeWYUs7R5x",
  "key1": "3TWZtJuCAkK4N3YxenPGpseBMgh8CyLLRgebZMrmKhfwp8D7r4LASSBvswFUDtETFJs2np4osAMvrDsGCP8LKnQc",
  "key2": "49vuVhcHhujvH1WZCvmsgSdNa8VEtRMWjShT7kkXM4VvDTFYqBJDs2roZ3gy34XrhE9xzTNHKqV6CpUTebsRFGcb",
  "key3": "Sw4oQSxaYGuPqP1ew48aFHsL2naii9AiKtD1BHmNKtLsk6PNRhGRdq9A3QHL4YNcVgf2RhXqQURgXfHnYkkDDt6",
  "key4": "5pSHs8S5pdy4y1ZD8hGXmc6VqxfdE342G5uf6p9fALc8x1haqYEzhNKTTEDeb79CASFryBf1bSBEkdvjS5iiTstx",
  "key5": "2WhXTT3RDhKQSyrKMz5RHex1MmYLBX5dFwi5V9SVPKUzjWtvAeUxz4T4zwsjqeuqvptCZTSkvFHNRuDTD6c5rBt3",
  "key6": "HnF7mEcSkMAiVzAToFXjMvh8BwpyC21tQ9qZ2ksLx7NwZp8q5JeVi4YNoJdKKHUMNa93tUhMbQmfGsPTWsLGG3v",
  "key7": "4Ao8hkE7ANMPsLu45mQ3EhVHaW9bWn7kkcUnpNWzX75XXoWgXfttPCwpFoUcTtuQPtE4Y7DvsbKwXR1aDoaeaMJv",
  "key8": "25KUxeDueRDh79NrHFyovCTAGbZ4Kw5btiSV74x5t6SQUvU5M5RwbGMzu8A8sPagxYXDZBcFkMZLudpDaR44tJa2",
  "key9": "3U9o8hKYvNHSEzFp8qG5ddnvAxBPdUA29ZjdQeGsGmi3hv6tNt4oNrKyKWCVLdrQbRmj3Q1Ygjtz4ZJ5ggrzJnb6",
  "key10": "41dCFXzvg9sLLFcDqDqoEcHZzFSxTJHotmF92t72pZF1rA9yRo1HZASwL2FuTtVsDcJRY7KvGj4EsQUohG8n1XoC",
  "key11": "2G7i2WtnUJuWLZykA4mbiJVL2LpqSGv7kcuNdDoLhcYpw8VBpL2TiY7PnffN7ieReKeN2dpevjDLhhDqiQa5Bcnb",
  "key12": "2hCibboWVKfipD875MRo3oFsUitE6ywTnsrLpSm7tcUPTLLx76C38Ect8dw4TQgMBRq7ebGStiXFqLsGoZQd1WBD",
  "key13": "3cenVtzaVcN9aCmAMXkRgtzW9QKqSJfAKgma8pmG5zqGpfiK615NEZKJSZ5RQkSYxWqXFCVMGhpSSYdU64DMtiN6",
  "key14": "5xMsLts91stNurWYKxtTbUiLp2uTihKH6ffiqxh1YUpHN63KF237LwSbd4b5S7eUhrdyMvbwSXpDD8PJdsNr1CnH",
  "key15": "aGiKTdabVTzKNxeCogkXSDxaUMaCXZxKnKCiyR4Mgi1AmUntLB94gbQNA1YZu7eaHmRLERf7hCyN4W1JRj4DHpK",
  "key16": "5iUG5891evn2LV9WVCiet83z6Sk1Y9N1TLrt4AWZup9zLEePWcEjHNxz4AAMBjQnZK1vhEqaENGYQxunC7Mk2Y4e",
  "key17": "2owAnMQjgs3MRcdxzFQ2mkTqPPeHExfMXP3RQ7bkEHjD4VgL1ovZS3d1KTiqr8b9zdsp2xnu2HYbszToWtwNJwWn",
  "key18": "4yRHa3hKVonkDWC6J29H7kLWkaqA5g2qqm7oq3ucEkrKXPhuncbd7x4a1ypmexSaYa9nFcjZu8d41ZxzMCtWYkEw",
  "key19": "2nqcu8tjVQtLiic3fVZivrMk9Rw6PJwPGog5kVzsKtH2o5pwEE41QTRtuxifiA3NHTeQPXydEv2xVJ8hNJxaYpQC",
  "key20": "3mDmynnhtFDH31x7LjNBQaC6QogW5UUCEtmZHpwsGVzXuNDH2FXJ8qs2Vf91CWZKuru5bjJCmpaCucyHqcYC25im",
  "key21": "45B5NiefAnqCqHBpoKMS1qPxcHa6rQVMAX41VNqhmYFowTRrDNr5wtF3vGt1dYBkvqycMivycS16zWe2AxLGMyyR",
  "key22": "4dUxu64ZG1JmCc4RW4msqQ5gY7JGKDNUa66q5GQ9CH8CBE1cf78Ma2ELTemPKaJou7dse5bJDMpRmEcVzef1JSRB",
  "key23": "oujVzkjkE2rZE1m3TzDgtW6NUqpbUut7jwqFEv9pvKzuDfVBmfAEx4Pa28REhBPR6YAfzSRser8GsyMYgf6ssm3",
  "key24": "289s1qkF3swkCiUH4zbGQgGtTUa98xNFqPXmEtpduS86oi5uVCi1FzcoQxJ6pErcu9XVGZGHpD8526RwwkAgSsZM",
  "key25": "jC6edME6niQJtv1HBapJzRDw9x59w9zHEPG8e44HGVeqiB4hvdcUTDdiouMwmyVVAydKSwpsoJTkv9CHTM9896E",
  "key26": "4hAwNHRkv83GzcpsBbaXTnaBsMYFJasSQA43cmchXQCdpLumCkjaCjY6wA4zjGgZtA1WWWvnC9bv68NE237qbmt7",
  "key27": "56bs1wvmygjm18pfeFe296JVcmzLwqYjeVCehUk8F5i3cwegQb9pdwyddKKsbrKk7ZWRG8uNzEbVwKxz5xFDQZrJ",
  "key28": "2rmFFa5KLVtMJSDVEgK9tkpML5NJH91TYPF5cRKzKQiku1Y9bcAHbgq8xmYnFNu9rzB3oZ3CC1tqsTjLDJBzXYiB",
  "key29": "5GJmBwFQUoGf7nwGgAJCb3fBy2pYBHPKSQajCpo92XWfyCBmNFx2jnkbtkyKW6AsawmUA3BW89qHvk4u9ZDb1WKS",
  "key30": "2efgfzn3TjmK5putUzsnMTq7xaChYbJLp38pyvqZSZt26mTAb3dmKL45W2m3AVvPkrrSekMH91PWmbVzwnH2tEST",
  "key31": "4STnNB1Pfga4QsGGrSamkerN7hasYFmAMtDX4LbyqMmsFBqXLoyavttyUga1n4f6EbQ4LevLdp28xdALCmyxSVSj",
  "key32": "61t4ZZj16DbzeGCnxWzecTJwAiRhRJvhsNfWaELnBzWWRugpvS6yTaZH5ANg2kHxFRLrsFoo6EuQQUMvKt5zmK4X"
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
