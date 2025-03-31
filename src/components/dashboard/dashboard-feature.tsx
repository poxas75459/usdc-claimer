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
    "2LgznFN1YynkPX6SRkjbbaM9RzSRePsG8Ds7YBgnHGoUVnJf3ikz1Ps12YMqrsPxT4CG72p56nSNkp91h5vsRWCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imWpAiSae69CoTvDxA9MnisJhKHDhE3NwfrYM1QAcr7Q2vjxzKFJsf4ZfoJBQSteXnzD7zCnah9qVZoYmF6gtzM",
  "key1": "4xrPCxTGkzg9baHLyvrkLuFkVoqGBcNFQMcWZ5dQDi3ob45i69XHngERHjju43GsH3yopjCxXMA5TpApdTezJkBU",
  "key2": "3fFqeJnq1J3LemohR5B2k2TuWGt49iur4sptBBgNaJBJ8P14h8ZurJGexiv5c9nSoiz8MKFuor5TVcWTYurn1Xk3",
  "key3": "XX2ai1XSf2cYf8AecTmKY7WNzwEWebP18EVUoFWrQxRDsuXW6Wj4FcRMkbAUwpipnfPjjhWLohSPhtvrz8km2ix",
  "key4": "4aTRr4JSHs9LaTXmy9AAK8w5z4E1kD4rSejSHvWdwt4HdJbTYh4ZP6V8naTXQWb4xytsnGk1J3yfQcWTebX9MhkB",
  "key5": "5dmtg7zWsrYvQ8nykpQzCkiacxi6yGPKAxu97LSRHfYKQkUp7w38hUucPvVFKz8W7vb47J23v14k28FVM88RKJ3r",
  "key6": "3bUCnkT6MUb2omHdWNnz648AWefV5jdGGWtKRosUuwZoc9nsekKEgZ1zDsTkiD9TWwmTjMwGpJQjcQaQJ1hFqAef",
  "key7": "2Fx5qVYhP9nNoBNU1QjofC73Ce11eQ4RMz95McWbU384k51Wj9EcsaSWhFgyn175oxD2oxurEK8esZ8PNcytNpjm",
  "key8": "3PyWxq3f5NenP9CeAQ62XX72fgvkZ3Q5ghnL4RE6JULUuYAM4MrSZdxghSFunAXRKmYhwxepDsNSmMJpU3WdDBTy",
  "key9": "3gS3GQ11KWUwWVoijMCLHHNqdMSLA1iTo7CrcybCggy4rRbamJQvWsAKShS2Car5cF3AWoHX9yWVxYz6XPbVkLnj",
  "key10": "4NQVB5u2o9EZjCrzyiLEDDJRCKay3JDt6hqpyoDf7EWpmT8xndHoeNSvHiad8TpAT13RRGm2EfgmQj8CAV4eut2z",
  "key11": "nfnFfr94cynaoRoGdigs7reZstzrCkSBBCC6PKGwvYxuxYEJbJsb3oSBfgkgm2YNbvG5YijbuMp5GD2aX3eSHhk",
  "key12": "3FtBSGAH4cdxVPSR1S3fBdZ9UbQ5ZQdLXKYaj2rFW4Vou1HXVHHU1Den8CEVngp7XWV3ELSUAav6Y8dmbimojcsN",
  "key13": "56KmqY8yc3eDFa4YCExHrE7XmvQtJqJ8JZFRqbk5GKPJocsvA9nfSt5hf4jSLYCHZF2y9HbR7nuzwtzTxrtUB54k",
  "key14": "2stYcq9r3y3Ed5kgxxDGJ3ZiRcpWPkHR6TeGYaLssDep9Z7sNzLUNUMhkctYBhvcCgWaLW4jUn5SR7HUPamnBchf",
  "key15": "n4ELBtdyPz5y8EEs79ZRqcn18a95YVNqL9JLizWgGbWYjfDeh5Z7FDP2ivEoE3tsG6jX7mUJP4rYWRuhHzSvhM1",
  "key16": "3RgfAeWtx26F6nceeZLQxiqEcon2Xk1UE83rUrxqvMXtzN1sjz9FKjcEFwwfVUGjrRUdTDVsRuU9WuEvB2WLnV4g",
  "key17": "49fcJbffT5V6ynyMubKwywiXwSjopvTSiuf2QajJDVJvMaKyReF8F5z32wBc6cCfvVmoBj4aT9Gcv1mgBSwviVbt",
  "key18": "353x9sQ8ZMHt8ywjiRx6UfWXExRaSkAWALVQEKbWCH86fVuL2GkVRvV7gqNFT8MJEPTKx2CYTUNtMzaGhnCAZMGn",
  "key19": "4KC8jHqSmpBMNxLDgQiHkQWqjH2LpQCSmou9Pbd1Th34DVuvAKXXgF1iagNECVPHMA8K1v5M2RoMJvknzMmJBbFx",
  "key20": "3GacqdC1ws2udkDvYcUiPL2Zstas5aiwLhRMtCxKpKu8XoYYgXvKnGoCKNt83aSyrcSVqpoX7wpjYExAUEbF4gDb",
  "key21": "bKr12U1SAPk58HzWxVE3HJS555aXqpwhCg7cB5YC2nVi2iLb6VPTKitiCy32TzoHvEikj4ZUvtkWpKgTP4gawXf",
  "key22": "4xiarzr2TH17W1aLf4mggBSewjbJRCTrwv7W9QfsfUA3B84Pz8CCPLJXhTgAiquMgxqtouhARThquiiPDoDpG6Mw",
  "key23": "3834jfoSaHdTndVMz5oJxK4yfv2b4eREZPLNmFvqaZX5a3hpem8eYcnXr39UYmdX64SpDoE2MWNb7x7U5xFo7N7W",
  "key24": "2JdHo9srXaRnj7FLPfsgVe74B74cx2LnZqXeuFkwH7n97HGVqQ5GkPEpD9L8FnW77nYdJYDmPefXuEWTJLGD9mY3",
  "key25": "EsqjDDWKBfLbB9AickdM7N6XFyyJ85nnCacChszNcKKkZu5vkPCTEnRX45tHTQYWH6V195VB5swMD9fR56zVoA3",
  "key26": "vPsYa5QFoTqfuMMY6PbLZPZPAELhHwK3rjWirC2zMkqbmYyTS9CF8VQb6bLAnrm6foznNbHVMedApyQTsf873Ba",
  "key27": "5ZTemqAE6eAA9BP4msb5P3gjQngymmaZPV7Z7YmeFGTdYoHjYwZZdaGdYUwZssWUZQDAU2Y7dppAxmwXPXSQrJWU",
  "key28": "58Rywy3WxdGSGxmxBHwa1dP5Vwv9M9dYir9jW9oEwycJ7RMecSEEpA2vj1DxY2PgzNta5DNDJPxwje4WWi2eL9mx",
  "key29": "5ABrTW4dWFvXpihKkjczQdCfAKpUfLmDUGTw383qEVZMomZQThryZBTWJNCyYtNbXuPDk9WmCSSLJ78QHFYeuJdT",
  "key30": "2Ayup178KRxgTeUnXxVJ8DgMbFN98n31agCpiSNzHd7YBUVcyZrM2o2VcH8xNN1KVC4gt8qVeibtAkHWZLGrsyfq"
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
