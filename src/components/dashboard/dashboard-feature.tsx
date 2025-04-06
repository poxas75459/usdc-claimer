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
    "dN6nt6cdnGuL9Ls1F6JQRdovxajsCzgVH2qSoGdKd1MSXGoMv4oc5fqxFJgNBBcYam5uGaKijNY5FN64gsf5ykg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MbR4L66u3FXvgr3THNFeddxWfHnnBLRXkzqo2ewpiivrQ446g283XYvVCGJfjYk76t9o1MTfshjqYbRcf7psuR",
  "key1": "LDZTB33StfJUhxqkibTnBjzMy4pwb35xN8v44SrJpbceyDR8Ugcsh67EJRcCnT2FhvHqU3Gpbfp98G8T9cW18yC",
  "key2": "jz8xcUWPxUMqZi26Ltg6dZU8KK7p6d5LjbW27cK3PhgWu5mPDyk1s8Gxn5e46SqhNtM2ZG8ySJDHyjXDENz9n9E",
  "key3": "35AGt9xrZyapZv69wHPckc7f4MbMYig2W3rG2Re45eA9gr6xgr1tAdGuCB9Ej1XdpuA5hJfFqn7UqRnyCKJZD1iW",
  "key4": "2zj47HyEMbgJaAe7tbqLMvcLF6MmHYRGUpUVeryaXcGdFYucm39vBCa8xJzzaYP977QwtA9qKuK1s8GE6tCjzGxP",
  "key5": "2SiAh3JSJKGX5VSk7RwxgchyrqjvmyoaYX3w9fpGkFLNFZMC2Z27JAe9diEiuJTbscn3QMHWHnDifbiWHAcrkHKz",
  "key6": "55KKWxSw38qus5ANFisejqqWGXKXT51tcDnMPtjesJ9dsxcUfUiphRXBLoeS4vnknsAQEd2WC7HdmiAsvK4sFsRK",
  "key7": "2ieBPyufPFmCT5BeTkie3RdnQqLZSNHhv9ewVpeiCTdRB6d1fNCBCP3f8ArgfKEFfc3a34J9zy6gJPVzxrtu7Yuw",
  "key8": "3sJHyRBVQGQeGPStuW1StHVXvHC8pvpEBrfuwt1CmQ7WxgoquQ2AYRmqUJ186AYXVXgcJBsuftkvi8beZ98XvFRL",
  "key9": "2o8SpkqdDF8w1tZYgmzT54eEdVXUm2bxWMqmsombz68SmQD5DMXh2uAsmMSzkDZSBNj6Sp5KqtVC3Mv38FDqeZyh",
  "key10": "4uWXZW7he1PdfMXJKTBVK7Jruf1CcosxVBr6CSvGDwR5N3LyUrYUN3vqqcVCmAVV3u71xNA3DfnnWe1doaqRgthD",
  "key11": "5cdaD2CUKwraWfpDd1QJ2LNsjqGu6hYTT7iNxo3deLnEKNMze7RMrnn5Z5Hrqg2S9dm6RZZe4Dd7f4VNzHjVyXeW",
  "key12": "3oHrcugc8gckg3oh1mTj7zjXJWyuxVFjHXySW2t6g6HtmQfuXZDeHNvsrnfLxrwbSrdCBgoe61YQmAcmKmGkK99M",
  "key13": "3vimCzdimBpPsCudYgNQ6HXbZa4CPXdBH3rGc529KKh6tzazmyzbZ8TndXuLF5BJ7E5i32ywk5Q31a1PRxMqUY78",
  "key14": "4PjDdFGvShPh7FNQ4pLn8Zwxz7AGwm72STyjZwU6yeaUmFLsxT27EDhp5HaSkr4L775iZoaUCmbgsSWMVrMc79XV",
  "key15": "2buo8M6v7fCagXDdg5iv4r6PV1mJDMZhk2jj9AaFokMm9jNbAfjymYUZYaQGUDx3c2tDgS53QVWk1Y6DayFxUPFj",
  "key16": "3egzZjqC8yZSpoPPGibJEKLLo85M1eva5rKwWn4AduNpSjEFrJPwfoNjEuDDP9fGvdEQ9mghqM1BSFNyJscyiMLb",
  "key17": "2geuT9cpQXEm8wNcx4qii4exZt1uumDjn7kn3FfrHb18rvyhq2ryodpvZvCmTDAaxtFpHfGCb7Lpr9RmcytQoxLs",
  "key18": "LbrACxxDY7Co9nDv4PhH9231NmSZqkHW8gfQGzj5JAi5BhfkDjAEr1dXgbn2PYwQb2xFKnFQTpxDTGmR7pGQdSB",
  "key19": "5Buo5irqs56nrSBbaPVq8dCCjrrYBPzLXkAMn5Rs64DanySJJXucnwkZRPUSqpJ17xWBdWdEanSX2A7ncM2Guggt",
  "key20": "3mGJjxpJcbAvNZDNb6dVF6PYGxbsEe8MuEkSCsxXMPCcTLUHoYFcVNRMKCbkvqTbzKrWtSLGReQbz8omZooT7nJT",
  "key21": "4V3KYvnyppNUmGsnAQmgJ8eWpqmfvt1dJXJkszTawjfqFPwJNgi7pDgMhtDHue4aNc1t8sBJPfExfvmWBHpwxTco",
  "key22": "2Z9DjejuwHjx6Nda8G31VgFUnnzDd8EM9hbspNcekUYcu6FrYzbSyC1AvJjuxbXfEGiWQc9c9bE1WSaL4U4bqJ1Z",
  "key23": "3ZJqs5sYszqRJLnbdqhU4zJwMrYXnLT61xKQCQu218a6UQPQ7wBmoS8YqdHRxxwntnZZKKcJvRqJqVCHFdoggaf6",
  "key24": "5MWmpYeAKzapBmvGyn3eVNKfTgHpsq26xPa27JVejPcGJC2EbTQ4fUEJDhBEBDyvc2micXsQyuA2bc8Ed7Ma8fio",
  "key25": "5Sk5FfvZAupiZgmzusDyy7APi7XafXd8MvnY9vCbnyK9xApusyBxz9SAfcDDfEnBTkZoRqfXZyu5s8Xm3KPNWdkk",
  "key26": "38ZqsGVyQdoDaVU5VdA5coMMzG2KgkHfxtP3ChRUpsdB1FctVgDxPgzt7JVZGYK56kFGTeyNuPpK8K4RTpjJmaA1",
  "key27": "3gtesBLx785WRgBpA4qNgbqZCw91cpfTKfZvr4aLsE5irPexrLKuEc473FRemgBxxb7HXaAEfAL7NNvHUJnadeyV",
  "key28": "4V88NyQsxaRy33yZHoXMcJB4d5n86gNGfifuYEoPvPVEp5xNT8xhU4gHiVDWi8TcwvYm3bqNFbvUTmh8Bpx9hYy"
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
