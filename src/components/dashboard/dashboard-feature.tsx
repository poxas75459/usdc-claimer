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
    "3zbYhq4bJr9jEQRtKtx1Smm1Bf1zGxS9LuAsWSvvHbHLcoAizAxm6EaPjN2rmWPx2PvMbpAgHvVMSLqke18UYPHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVJTXf8ESnJgADMocMm9VZpP6Y8E9wYzCape8HZrCYK3YeVTBJ4yd7NTFSUu6HZeXjK3CkWYAGVmVpg2AErsbdK",
  "key1": "3g7H6vfX11Ba8AwW8qto58GYzwagK5W26JcZTXnwRT5voWyEnKxnhYKuYA5VeidPcBPTrTaeaNV52XbzMeaBbDRL",
  "key2": "3K25eG7U4n34J9Hbj8uuktbVw4LF7Y622iKBY2KUdXxpznxAEo6qWcMquJpCfuz9949rtshwL9cB8jKvWqm11W47",
  "key3": "26RhnEGz2v4VfZeu8SxqDiqim2vcJGhs7Xm78jzNAydG6V4VrCyZYW9WQrQhB1k6MJtMKvQLBkyVYzQNJ93mJEf8",
  "key4": "4wenr9BksNVxJk8Piy6aNDWRAbDXRZaRh8Sf3tqupuUQLTSHkWBrhqQNpHo7jg4XRKLfWBY4iub5zjTV3mu8hyhu",
  "key5": "3SDntBxQRcHSGsbu6Yf75c7HbkbEnn8d59N2YbL6RYbRjz7tpsRdK6iiy6ZvUUN3DCQWJ8mThQu3GZNVR8Giswgo",
  "key6": "2aUfUvWkx6vvmuQmjjBpBMe1u5uvbxLHzjhRfiia4i5sEG1FWthWFdFJxCwE7kV7PULtxW3bVuPJ9bBzmLBDaCgo",
  "key7": "5yZAG2AxQRU2H5pBkyTfjSTeRPxKHisQP1txAxaJBtusvJHmpukj7Ys5beaqQ3tA3J6KGVpq293p2tyyrixKv1oH",
  "key8": "2rEsH9kJy6Gt7kg4C1tMYips9X1n2yuQnR5Xk8Fr5k4LAFowFu9MfA8M3w5bnt3uLX4RWfbxUPtgvvHJAz7tgTWk",
  "key9": "4mvn7st9mj3bkD5u6NpGtqFrCr1sCSM5aez8L6HNyP5hgcoLYA1GyUaH6AZCNctHqqrFwtrt7mz4wDX74W819UKu",
  "key10": "4s8BCFF3CU4BRqPdV4MzZngvsTvGedmXDRKZQMMH8pwMBEGp9cmb7jc1Usa3VsvAiMgoAJH8N8ch1gLb4CGfL3fr",
  "key11": "3trFCsciDonRAvKWYzBaUJLL7StVciEFxWCaM9m9euoNJmWn7nzf7pnaPwDgLPL4dh9FnF5tWBYaYFVVFVxkB5DK",
  "key12": "62ek7QKfodY4BYSzZ8xGAJBNpcHZ4wT56W32adD6c8d9x3BJJcFMf1FsAwhM1A6wMHgPNd8dgrKGiWRY4bs5PAWv",
  "key13": "4bFgkhPPhL8S9E1MPDL326W8ewDkrF4QGys9fLJd3EKVU6u4Bj3jNBNUVtDnyGVySfyd7UngfVAHqV93tMsGmLRB",
  "key14": "5WxJvqdGMttyRXfkeZG6xDAqkNXTtxq3f41VcYaf6F6ZsY78Bt9EgD7Cpig1KSYsMaT845pfJgmHsyFXiEJFW3vY",
  "key15": "2ZnAMkFgpa4VeUmmzfpa5CK97Jv1Fa9hdSUqrsFAm9GMcqqsK4CcS4gysWHDPosnXe7WXLWzSzQWuRomSQ6pthj2",
  "key16": "5tgdcRUJQxQaGcmrCTBMsUooE5Vz5HqXCjAwBCtZ5TuYgQrUXzYM2k91wF78Ccr7pBCSGvhcbzHHKZgLwBar6wKH",
  "key17": "4t1JJKcXEqjm1UVyUqg9hAeUBbLD8rU9ftCL1rnLkJgCTPU2NpnEhPAU3gGrhvivqPv1jJ1DaaSeMaAsX4ZJ7R5s",
  "key18": "21dLbkdqZuNe3kj1gog7SuQbNFs5d2ZuwWkgsamWBYX9JzJuo4FDFP4wHFGEwj9N9q4gZvPH24NAw77vsCZJwZQq",
  "key19": "45A3tt99U7DYUPFcqsKnahLqrcbVyP8ViZjEjsBh47nXsp1KfcdMfrAFJt7VHnmjT3wattjmqa62hDndUHgxLtV1",
  "key20": "3z5n7phFzfUx9Z71KshBiJqN5FbzvzYp5vgW9sjTL4ji5dpjSi3JptWdNVhVogqdDLCEcUspVPRj4jgEnHTXZ3YM",
  "key21": "223kumPTmNWgkssmAkhCjufiX5cLkTH5ppimQAP5oKqFSPzoeYV9EyCdCFjdNRgopb1na62UfdY2YfSo67i6ppCX",
  "key22": "9EqcXw1C6PLxGyHAFtbMuVmf8wuQ7YfZZx3A1SeowgR2ngykEZtydgzkFBgATXzBhAgCyZkH3MoumvhEEabTZKi",
  "key23": "2trYn7nxnhi6nY7RChunfTqb7a24adKMvk55S8S7AXr6yCBGmxnCCdrqe8QYLL9mGf3W3PCzLezBA5odZjTmyD42",
  "key24": "454wsfs11gDz6xT7HARjByPpNYSFdGHNS6eKDib5iBxAkRyUeCvLp1n4cMNmDnmNT6hAFHExXXK3kb2zzgN2n8FN",
  "key25": "3wVEo28PXkeyuTKsLtmbtnzjJFRbmkEth98Xhwz4hDF2hvHoHdncQze9Zge2PCscVdsSkZTvcCiL7qXS1tPKJP1Q",
  "key26": "54E8L2Pa8kBZTG5DDoiURji1EWxSgdQtVjxW667PuBx2oPR7BdFThGi1vmHKSKL3Vfh8jxE7EgqtBgNy5kkBNryY",
  "key27": "2gswH8RxQYu37dwxxeLWW9NVSUEtw2jCCyz64q7Tf8CZicVLmnC5F3skNJpDRqJw1HeiVm5tGuZ6pc9HpK2eG5bW",
  "key28": "3vw5nxD7B19HKgvcmEP1NSiAdxWmXReaDGH67wMMjSk4oitKFYt1CxyeEJTca9pdVd1Zvyut5hnAS3LsE3TDHHyD",
  "key29": "2m6tjebvkKM8TcSJ3uzU3Zias8hb3sYCeJZEntByQRouzJ6usxfLj5cRJYQ6WtQRmMJ7YLTRxRdUYC6ZdE6AUJTg",
  "key30": "2yGp6Ksy75u7XeKeWjuWfZqweDCUPTZAeCeRaKnCuH1ukkbxfus9LgtBvJKR7LRbZDgmcWkc4iNqrwcxEsmM4RTx",
  "key31": "338GuySitP5EaMTkpNFZ2DatQJpvJVzTpwpb1SEa9UgVcaVXpFXZMoLfB8eCW7NUu24PoCW6J2uCuBvSBizDzPf3",
  "key32": "5oBergAyG5iytvEg5ZPxy54aV7F1yxEqMDp9mGXvYyUsAcELszS3cgZS3VfXjcsqTZH8KYg9szxhfvnuSZgD3H91",
  "key33": "3ZkEdmtZgT1z3xmEXKsNavajz9KSPpsmXbjMBGHfn1jwELgvauYc9eg9bukD6hhJewNj92hXLnnFLPKuAqAEvUWQ"
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
