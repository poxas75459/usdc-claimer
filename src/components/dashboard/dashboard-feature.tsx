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
    "5NBfLESWwk2uQUnBP1Bc4wJ9BX11gqmTfcHtwz9gaCcNcgg2vzqgw3qkkWcjUrWGdTYvpZf19bX1ajEMmNX3xZHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFxZnxp5cgHusx3LRpTDVun533JMhjAZAmUyHdPehNAY8h9FRe67duk3UrVn5zqMwfLvFCFVZDZHwTAap4tX3mw",
  "key1": "2Nr6ysJTLPrYFd99nA3EoksYwXiLCojWPzayiL37FF43mLjNf6DThPt7SsFAvcqSfAEQdHdgEsikhk2oJR93NrLU",
  "key2": "3sbgoK7cKvWNSk3VMmxnP6kvooBCj7HQa1Z6qMYEbwPb8Ujv54hkaEa6opePSHr7taL8L7ojE8GH7DYMxC6BbLHi",
  "key3": "2HAeJtFQkyKGj17jy4MuT8u8isRWv1ofC7SbRYzYNidYxRGFR75BBRuKhmFKRSzrUzQfVq8JnybrjVqJmzFmNd3X",
  "key4": "2jKJEkgoGWkQxNxauDBDSCuhdfsb8VUtLdkDE2hEiSyY9bemuDdT3nPaXESRzV73toBwVS9iPkz7JaLHspZYQzFp",
  "key5": "26Bda2ppe6n3xF7XJZhGnFkuViKTCfLzZoMarwhmaLMqrjTwHoRw763KVnJhQUZ6gEv3ZkZDgsrETYEuL14NaAkv",
  "key6": "5dtXcNX2VQPwofxCmYeBFRnxYBk82b9H16nQdiCaGrezPtDtU6xqCrNkda1wX3rN1wVTu8LPAhuG36CADyTicJv6",
  "key7": "tVkfgMnx1UixesL83SjMj5rYFA97uoN8EHWog1QuU7RvfxBUrrfaUYUVg1h4kQUreQPQBtzcPvSL4WpaXZoMe5J",
  "key8": "4eJePyaZBniZvFc5EQs6RCkJnhWRfPyY4pAx9xfoprdraYRpdUndo5nGVz5fKBLqycSmV7qDoDbHsqcGnkQX14pn",
  "key9": "52BtP2eXi82mg4KWQwTY59zWbK1uqW4Cjx1Aaq31gnEhYBWZMZ4eYKZFEFJPm98Dc4WRiiEDFG6k9gVDLbNyGGLC",
  "key10": "WySxZpN911fCUpiG6ZU6hvYPEokmmXj38VcK3iqiXMXwdzkPUcZDL7eunfJk4BQkV8KZKYq52vRfFHy8pXtPMJ4",
  "key11": "5P6FvL9msQ3A5MnaKiJRjB4KJoU7em73SzDCvs5vtDsvqpF9hkU4AQNwt1ZKh7T7JMhzjZpDXEyjVsRmyRHoCSB2",
  "key12": "4Fn4KUxVVxEza7bsRmnFZ8uGT5RimabTceDcL1FuswstmcgpeacpuTdUYPTCvqgrFf2mNHWdad1Wa4gDmZaACphT",
  "key13": "2nQeErwfhsdsYTD5VPoKqUiq7pKTM846AFuhycRDKMrSmnASzDVXVG4ASLTnZM5XxexNtKFZaezLdcKR7KpNCVkf",
  "key14": "4Toztcdo3XNJTpSycJ8HBNnG7fEVZGUPXkXTdb2LAjC7wb94TpWQBMtypFTP48Vf7b4pZa9QA6PNtMzudm9NnA2s",
  "key15": "2ftKSHoct9R6hkpCrMVUFodJu6XobjURXsLiiqLrN4KZnUrN4Wpiz5K7qQQVXxRzo94CZLrQNSDk3KtN1vH4vyDP",
  "key16": "39a3swLSLXh6FbVR6XyoUZTbv5M16SY5RodcJcDuZey5ZzmsJTyu7MUfQcjtgZHviqabdd3Fov7Sip6anwcL8ASM",
  "key17": "52kyvU3UHK5dHLrjrgweNYY5jxSBqPWxicgDwcTGnBzx1VyQEQV9Jq32qTYt9Goqr1CNZ29uMdPeoX5fTSjRgksP",
  "key18": "2L9a8ENj35SDeJm948B6NzSygUY58gCRuvq3cJGNHAm4vxB2Mss99bCc77a1EYydP9VKz5V1jZ2wbks1duPQYDCg",
  "key19": "4KGXvpp4Xo8MGEhKtPS13cU7bca34DHEKStygj4C3durPQGwMVNXbJoJkQgWujCGykzQW4MCtBLaZfp2uSHe36gi",
  "key20": "3MgjDbkEvG7F38Da5yoLs4NbxV84VVP71tgQdgoMipKMNYVhptXosXEDuMyziAuKhCD2wNykCA9dGqubpjDyNpz6",
  "key21": "1PqF1a8biQtWBATUWVNbyQCGSz1ddHj2uZuBxSdTkmho5nGTZrNvME4ALM7Ci8aV7kRYPpqMG2mNLAuRDgMvzKR",
  "key22": "eMjZRPpYJ9Sj14oaU2SSp9kmpZTents8cZs3nfYkpLuPHPc7iCVmidxhyKV81KN6eacRWi31Uxi974godrbPQ3x",
  "key23": "bpUn87cAiJMQaRc2CRnmruwFqwwsefgtq6SbpzvUCTtSTnuaG7fu2yo3Q4EwNWFL29JeGiGzAPAFHUvScTzehqb",
  "key24": "38YMtYzYumrPKMiq7g84pVbcKJ7EtoWCSgHGfoKpngb4QYxZPyadcBvCiNRCT1HNRfRZG8SWab9yK16g1E82zepU",
  "key25": "4kX6grCZSpfKhQxyN1vqzrRnTfxaRD9xAHHHWVi2fvq7HjaDGW6QbH2HTqtjeRtrGZxV9foMGK7ADXUEcktoKDGg",
  "key26": "3YxoHs7SHM7xNgXbrvcaG8Qy8nAra6kByAtcZQcRtJWBs4CwXNMnogn3faetNPfZ1UQV2N7aJNAm44wv4jjSHChD",
  "key27": "34EEWNwLAUobRhUKsy22ea8coyMbxqhzSeYSRJMorcf48kyBCxyKYQeEgKyDR5MKYoiigdysuuEfqoDfo7untVZn",
  "key28": "3cAuq5CWhqvaHtAQq8aWbD95wTjn8v1yCnoRWzanZCFA4xbEpBGmK9fR7sEC2b5ozvAfF4f5cKDjHT9e9ue3QLHz",
  "key29": "27SeeYPq81yGWx9KbLPeQFK8ejNGSR4gHtvju9DQ245qRJ6TuQLyuFpy1QbpnN8HCNXt3Ho6QeBTxNwtFSQmhuA9"
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
