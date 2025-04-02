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
    "4vVkxuh87Tou22qQa81cLiNapqWHDaSBykjTSGPuWudCtjoWus2TUcUQNmGomv1Rca4x9zQB4Hgk3bFhbZnMp4Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffzWzav4iRcka5JHM2UCaAfiHnRCbpJbHuqcZSdeFhUPxWBhM7FS7v4dw9JdLyhV9D4fxHj2mB8XcuAa7VCKV9T",
  "key1": "5JLPSgsSuFGkgLnp89gv86YGARX7mLxcgdsf6LmPUeTBJeG3msM47ZiRQLzD8qHsusEWHeSy531L1WmUPzpzTYTq",
  "key2": "zs3rXfo99aqqKTtgCyaTUGtfovVhLEhjT4EZgrsR2gregvpcP5oGPKQkYVeZEAc54jtQ5ddBUoz1xXKhGyYNi46",
  "key3": "31coYgbxKRwGDnxVq7eM5s98E8cT9MZ6oaFPbUUedxWoRNCRyEkiCaondiD9EPnYsoiPePu5fa39VGDcWptgCrx6",
  "key4": "3jpDGEm5En44TVV6kPUjH9UFdySzZenfKrskP1tcfqti64iWTnHVN7F1xwGwnNm8t3bu4nV1DqiezpXhD5Yo7UnJ",
  "key5": "2A11oSQ9EUi9hVGqvocZ29XdiKKEjgCcn4zi9ABUBNP1beFFkP6ku6rU8Ys5VrsoSnqd9mSwvX1mkjZ7FZviHvFA",
  "key6": "4m2MSFgH4mzqZaVCma7d9iEYspbXSPfzYx8NJKLE6rTrMPhGgnPZcudWEC22np1nqD9ENcFS7yaWWGRNpbszKPZy",
  "key7": "3hBJEFjbHC7fjHFq6b4mk9qEcK3xD7UZKjUTeX2Vn38W9ewxzdYJa4aZT4UoULGErhee6CJiRcxNZBoLxUPnd5Xq",
  "key8": "4QKwVrwKbTL8KRYEiYkFpo5dNfXqq175gnQpWc1Li6jEQa2YpUZoRADNVrNUFh5u1E7WyruTyuEXSRSVVruwSgYH",
  "key9": "2tQZtMGNGUcyX8v9G2y6KDqLrR65VLVvcRfnEYyCCwFwRYz3zGDUUfyznvbhr5vVQCEYU3Usso1GGjwGrnNwWBvc",
  "key10": "4HPZcZzYUg9z8WuV8cLcCwovywgcuZzt7L7GnhewDDA9jWeJi1c9nW4HLF5G8Bt9xrMGqHD59FsYj7NAsDKFfoqC",
  "key11": "4ADBriXCwSUD9UTMoxxTzWgciVwswXGiYpJMui3sRM6bF5JPfYfFjG4jGuQ3e6RfHDHLFQDzmgNFCWvzten2o6QA",
  "key12": "2ozSGo9GkeZ9AcPMAZSWuuyVn8sxyJeAJvJfpuL9FPuYQ3Egkf7CSghtPme99aerbbUCVqprFQ2u6W54CZhguNp1",
  "key13": "4ucQH9XWZb12ymdwmBCSnwqRhvyG9azECFGGbJbkx3eLtsqimL6bkMgspL8KfFxXPUsMw7ot9XNeyKRW2oS3zC8c",
  "key14": "5ESsDUUNXATXkue3wZ9Z113JW9n5NQcRyVFwjakYpE1u5tcBTeQHkWACsPA6F7232NamWJuPXh8gWbTe61SRQn3k",
  "key15": "5TxPxvuokmGXz6heF31WRpNPnFDA3xujNsGW7XJoK4WHWxSdxMkGg237vf7YEgaRnNh64jbGo35N4uDtZSTHtPgZ",
  "key16": "2wU673ENjJ2JXpgjoEvAcLr6ViX5aWtnfuYGo2P38wBvNqo1vCSsEotKDcqMGP8hM1yq5uBmhXJVxKkGQDw3jjmW",
  "key17": "uMmS9qdah1XjoYxXhnkM2VHVceRbaoXnJm9Esya7HywmCK7sBghYST6Sz89S6TXHACuQ3YzHuZ9Nun12TdNPGYW",
  "key18": "3kQpLB8CCeainXwUdzeYca7icRgbgqcXyhYtVnaGTLRsB5Ki5KdBLxw6TVMAdK2dzNsP9J17rYH19tE82ggJzrBr",
  "key19": "23S8LW4wLL5YwrueuoSM7EWnoRS6FcmbdgJM7Rjqeuy2pS6eiaotN95rQFA26vi4RFzDyEJiKzj2szasWf87wgUY",
  "key20": "3QAkqxvQ2wzcYsqcig9jteku8G22MnevJ2bLVs8tbsU3fUad9m28WhkDGLDFbLpumUUHk5uyDpxYCbJBmkmn8PvG",
  "key21": "3XPwkQybXxg349XZDHAHuDtVDQaAS5m8GpPt2Nk6YrTPxoRBqgBKTYCYurCDPh5mZQxxqr13vNi5E7uQ9jHak2ER",
  "key22": "3CqTcEwjEf963oKuN2g76WPgkK42LhwMW69xrS7HjjkdqFKCgkd4URKd4mmQMGgVCqt9eHjRXh8pYsDyzDJb85T2",
  "key23": "Rp29ivfE9WGbKH1yHXbhiYDiCEvsrr9HEvm15tejVNkbXF2feA4LHDA5T34fPiXndzbczUyRiwa6UwrzxaT1ioU",
  "key24": "2nDZFPNbeE9nKMQExsk1ZicVTLD7XM5GhzFSvRsPsrMoS1drVUHNYsByvHL7gW8Z7kdbGQc2aAzg1FfhwKBGxv4W",
  "key25": "R7HaBQprGxoETYXUjfRJyGSuYHUnTpPXLU3psX9i841Nw1ghF7fQgCoTsEnKvH7g46G9sXebq9bW7gR8DvCfrXY",
  "key26": "aHJTXk8gi2XNfxsqqYbaUqPHokCH7Y4ZtKJNrrSC7X5mbfkxbLewsLMYRx5DM123n1fJhz1daJn9H86VqJro1Pf",
  "key27": "4RJtThYEdqErEBBk8NmG15hJtErZ4LzUtyQav43LEXrffdLVpFjM3Gekssem54u1DeddzvhfMFuAVzRTUrzVdpsV",
  "key28": "2ahgsTLGV13b8zYgLA3JRivx2Rj9WRRgymXDRQzZ65jkTpwbvnVwscBUSbeiB7XGmWmUTpDbh82y8KXKL6qJK7ff"
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
