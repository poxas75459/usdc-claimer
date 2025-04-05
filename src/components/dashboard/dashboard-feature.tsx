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
    "5tdHhmvmmJ3zBDTUAzY1RBHBzWLRZKZ1EfjE7iy2C3zvuLfaHSHmGT1McLB7ktomisZbjDP9hoiMNEbL1zhbhCF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WYtAxA5hvb9ZMCwKEuevq6s37Xv5SCYjNnU6P4k5iz4c8zENBme2tFGARAaiQeqe5r9zMhV83nVJgmjaB8V4Tox",
  "key1": "5eZ36MxU5pL1sU6QaAM6cg9ihLyXxyiAq5d8jWM9GqABU3okM6rBnJevKQCBfFu2SPu1mHC9a4hegMTPUA62UoNu",
  "key2": "4aB16EU4n4kbqTL7iY7jFiKCKTaQe4BFYnZHx3wYnCzbA9QpQ56zSxKRoNXUGJhH7daQ37EBoTdqETsBkwii9q64",
  "key3": "kZEic8zUroveXB2me9GyMkK8bm1GPy6bNHBvahTkZpZfJixPrx9Xm8XmLfsrspepG1h2MTxDzR4Kj7VdGBP2jX7",
  "key4": "5XHSLViMHqvYp9p29MFkagDvVuYTLY5ZKNCVbg4oxMLzFZ7i1DoxSMFamF7grdQN27Uu5Q8KnTzCUJdWtA8aJ9LF",
  "key5": "34QnGa7q8Fn2YiJpX7zRTjnEdVCVobwynpCPuRnUifvm3pyXxj3pYM7GakM2QzK6TwYfYKusRAD4wVnfHjHPXsS6",
  "key6": "5iJvJYL3fioVrxDAuWkef9xB94aUv6xzFkndafcV3YYmuTrLHAzK5FCPNdDADWPTqhK2Zy7FnhLdcs7Uq5rn7zv1",
  "key7": "8NQRvL3cZJedZ5Zm47FR7EcAMJMEhSyr78SGUXbQcGANYqxNBvSASxQ7ueeiCvyRaAVWFiyRuQf6Z4Yyz8Uz5Cj",
  "key8": "3nuKUe5enWvCd6QoUjv3KBWqBDhKgb7FG5XJJJmnAxmmhC8x9sJSs3h5chFrkhC5RrGZK38LgRtiRMoArWBdApBc",
  "key9": "5e9jtUQDyVp22m8WZaTGvgstQxcSnAKnAAvb4DfyosoFxWwaAHtYzar949T4jNwwZfgND6jwZuwhCa4G6PxPSE6n",
  "key10": "5UDxPoNHN958iSvxP4r8tPWJHxYSGohQsxnkA9EV7T4VFJNqm3P3BFFegqUFZBpgQVvLSHuDupNM59FyHYJcKBic",
  "key11": "5gvrfukhXQQWDtLW99EU7atyKXN9KmSNhq2aK9g4ytUvLn83PMhaCtSCdVUNTjQJG1YRUX3Lz91CBUrkRhaeuZrz",
  "key12": "3tJ4SphE8mricLrjzpFdUjFRRLTL6Cz1m4oTLPrTVnVazDBTnr4iWr6bzS5pgFSUQpXiQabnT3oRku8Lzpk5cHBk",
  "key13": "2maKVMzYQmXwBfxNThJn52LsBQwmwet3rHYM9j5uAev1B9ps1zsgsocZXk7KuK1rK4LcHfT77qAr1pP7JqeUTpUx",
  "key14": "7W4CkWGKZTWL3QQ3SjY3qHQk2urVo8yFztgapCnQrLC3tTh36keSs5NWek8wtTKhbJwu2QnP2DDKaGxLC6Tij7j",
  "key15": "3kajqPhUi4fU45Vsiu25aEWW53yg5uFFyGWtDVcQboxfmBeh5ewwK9bFz2Xisk7Nd3gV7Z9WGRCSj9WPBTkzGmbp",
  "key16": "57FhN6TXcRZKioRC7WUCVr5Gb6uTL1mm2d1PUApb9BhuLQNi4mwNQNBxPH9rHFhEyu2i2426xZbZ61FqwpYjDk63",
  "key17": "v5qjeuShRtmFee3qmou85UuTnadi1qgvNszuy6THNRrXznMY6ktdCjDfDs9BS6kWBAvbPbLGQt68XkU1DsJ9ggK",
  "key18": "5stxEcgorMUVECMqsA9nsE5kF8nihvJooYGaGmaj2bSgirbWf6z8PRpyy8dbkYCFRmTo7Du9T1qweF4XGNVHiB3b",
  "key19": "zXvD4qTcAaA8oPEVumvMT5AXXmfCwxucEm7t2S4mwNNJVQ8Ew3h3vGzjTRmUdLBiZeNdpsAAfK9ZNXbLi34GY6e",
  "key20": "3hasuTovsrGPqBRTP5xJGEjHwStfAuwCZ78TFQxUsAqiXe1vXSXfvYWVkxarQsvVdLXXc8yCz6sRMWJuzEWPYsjp",
  "key21": "3yYBy3pzTgzyjTyFcdANN4TWe6zqNo5kxrTMjnqeaVPWrDN2hbe8EXAxtn2X2R2WDAocUcUGVAUmiqnDUfUvC9E",
  "key22": "o9uEzchpaE86GA51KeTfjH8CKCd1e3ZYQJV7LDGH4Uib8xBq3YY2MdZaEQe7QWx1VzE5X8CSjfUTTEP4CdNd8JD",
  "key23": "3onS9KVFF4HeJKuNBWm521E3Rj6w9uTPDvynKDKxmTvzmb7fT8R1m84atZ69dZdUxFTRpGeeG6SFtpEtWoKFnLsD",
  "key24": "24GBRMbLzbTV7FVfqnh4hG4CSTwmahg46U9nMuAb4jnSCUHZmTffzu5HSfzMUYeWS55MDXrZU8grTANMYsPgenYZ",
  "key25": "4YbCmuJKoHMaFP9UsgkorRmFmS5puooPKwNS3BpqhWedFcj6eZnSCThaCjHwK5ptvKv6oKkXir9oJ9sJB3Y7NErQ",
  "key26": "hPd1T35AW6JZHNc1snfCpD6cDJsRqwksKSkyTj3TJVEvkNeGKPKxtcLLVTukwMzagzCwNeuhe8GqYWg4bSj8GBU",
  "key27": "65cHjGAnHwHnNDQQ481rzcjypt5deWLNjvYNJU82ypQEouhsjeqrggcdXFuCJYhELAiZgJU3dDW5eyKQ47NnoTei",
  "key28": "BpkccGrSx2cHFwcgFWNEY9FNSyDMGUBEhmdZNugKKM53Kn948didriYTL2R8B4zRKmofq7pY5UJ8Xbe7D1ywzQJ",
  "key29": "5ehoaTczCxiL4DAn7uYefoSUhG682Cg9DjmiMSMFN6TAAtVHxPRbEsydsX9i7c34NqDjNTBbbae7jB85GCQ1hTvr",
  "key30": "4ev658ckKev4hcURetAC99f7HNtU4Lw9TNvoFqemD597dnZEc4eJ4P4dafAbBJ6T6XorLbbqV5MHGoV8X5LmtJFd",
  "key31": "4z86Rjzxw1X6LJmxtqYNLYj2qLLPdD2Mrp7dXo1UqraBeVKZ3WEQ2R36ssUBLNo9ctXjqaHXoCc3NMawbyehAS2Q",
  "key32": "2wnF7CqGDmL5SwuATcGGRs6HkPD4NyP6Mbe1pKUHyG5RT2Jg7kWPv593oirpqzdP98XHMMwpwwJn7Au129sVJBNw",
  "key33": "StTRP2ZoaLxfCosnYmnGkXuXR1hJYfng8hoFSerYS9Faane3f6aBgfn1BNEmAs8oBhAa54pJF2hb28DAmYawQhB",
  "key34": "2ppeJmDhJMqsJT8TiwzvN241iah8VdrZ83DQiHmNYvBtvBawFpAAcXhTQcFnh56UoRJjeve8h9RSYRfH13Xt8zf9"
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
