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
    "41RxgwVyFWuENtkXozwwbt1EbdmBDAQPUakQFiMESELtKzcgLYBFgqZk5F8vWwogdBcktQHktsELTWLoW4AGtonG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkCpMwnJgDYbsQ5R6zgGyUJGas39FWf2y7necjgi6AcYLHHGENA5aRoWQAppM1ZoyFrnM5TcTtV6f6iu4GtfqGy",
  "key1": "vr2ZMCMzi4zRfAWTMQ6ChVu6iEF9zgRpwNPP9Ht6Q9H2ygGAzKeKHZKs2WYcdiPEcAgt13nFGzLJdbgKT9zyDhQ",
  "key2": "2XkMaz7XduKrGTWkqoNwovLvfJCFFonNVm2tQuawY8GKC51xQsguLHM5iuzv21tr6nngegMiaE5psUZe9zS3w6aW",
  "key3": "zheRLK5jXg3yfiZwoST4YruZe7f2PfLFdQreLUm3MpLuYY61QPVRYD576jtFVQ1ypqc2ECiFhaD9MikPYDxoxzX",
  "key4": "NJgxx57FygcuwvKiqYMT4eGYH7qTyXLEFf7uf82GRV4qKM6cvQSkai3xwYaLg1j5x7LGHbHTWsxHhujJM3xmv7y",
  "key5": "2Q72XzdxwJiVEQFDLo21FevvoWRuvHvjKvYpSRc2auZpuyB7cPpcGJLRLcd1rmiCdLfLxftyJMBtUqmuPt8PXWLr",
  "key6": "c5ystrinEUL3MP3uxA4KHrsRm9FJQ5gd68jJWoH2v4zHivGVtSyPQJkrPbGdjLFL3z8Uy8NqxteLpd1s4xEev77",
  "key7": "4Z2eRNzzq4Vi49vfLznHjbeBUx9j7YU3e4APSSYYYx3eYSpn61qR3rdfHkYp2hh4aUEvcds8eVWvMFNbB3EtXePB",
  "key8": "5YDGHKPx3vLDHAVwzR4G4fpY4W7HMegnGxnmw192mB7nR4FbJTUo1KMgsxCz6GyHcAhgnxnSAePgQ7ZFMkUBcB1y",
  "key9": "5Pcuoc9m95DcNDJDHzoZX2EE339Q267YvdBzNJbHXQyErwdhvrr3V2bGnoKZiczwxvsiX9q4Nsz1TXA9iyooZLT3",
  "key10": "64Ui63LE9QHFzJJkavxzq2BrzJckGrmn5iSiWPiJpQ5ryhuxvGSSDg6pepT12rt6SNG8mEC9RYNimQ5xg8S2S5yS",
  "key11": "2hWDYRC3LiZcMcdjr75DHgzFPw1JadGpsGGuRhZ4ThCuAycCC5HgozyxLH9CiozaSZry3JoaBdHHy6C3ZQgWTdHN",
  "key12": "5pofsTyKRxtkEcppMpJHyrxdpBrA8oZF7vumXemMGX99UXjwzVoFFzowFsEsN3Y3VZZiopwW1VS6t9SagKKmP7eY",
  "key13": "o8yZznPCemkU3ULskxuzRBi6PqWfrXsKkGf11c9nJpRHchtGQeVbXzK1drcB22Ke1oMGacGZfb16naiNnq5GYiv",
  "key14": "5bwv4RVyeRJoqZ3S2sfqmg2NLo2vspQFw428TzZP8Ff3YyZ7iMWWw5H9MYLyFNTuDkptc8KD8PHUfkgfZqky9xLn",
  "key15": "5Uvza3fBgwYxtvrXNbtssbY19EnP1vgnMBG38b9jNvq39Mz4AdoyiWvTtUhsrMq2YY7aqKUv7GXZvkPd3tYw7StY",
  "key16": "3T1uBwewh7sQTFycNotjiruSPHrntf6dBvxsag8V8WKnzVrnEgCvNNnCRNEBZitNGZTAXQe9akw6QEMsfPn7nMYx",
  "key17": "CkRdVp6qsNJtLHQMBjyv7AvyLMahvvDFThzbsvzBsbEDyECmXiRg7LCZT7MDkM4YgQBx2yFZgHZ889kYWn3vwdq",
  "key18": "C78S32EUwAxYApoJnGeYDvBodTCy3j1wqFPgXsA2GMLLRe8dVDWLfgXYxQbW64jdVkXyMgamvaUeAYqJN3xuJaj",
  "key19": "242mzkuSZmWrVfjMWwEU9cG2Uyj3K5fbMtBifM6DcayDCis8uscB3WAD5fbRYwaEBYR5ABtepcSZtfCeTnARtNSM",
  "key20": "5ZS1dUo2Ga6iTQ53YKWaEL9MVf7rk8HDhW5YbsJQAv5GpxmoAf3DjyPeQhmonmyhe2b3mCwg3mVoJEWFvr3agtz6",
  "key21": "2Lx7CdMJ4ky8qG2jxV1aLi6ZEm1xjHUGxscfZmEM4HgiyHnX98y2VLaTWUptGiTrRTfy8getLqmxfnbzedn4a61b",
  "key22": "5piwwiNUobtzQpJSuoYidzpxLJitwTzARrZ2NGsH5iwc4CS1GQFQLHVJ6KDP7fc2zy3uxuPz11E9ogUjc9DV5jUc",
  "key23": "4JJYBxfBSjtWYw1han3gw4EV13aguM97QubgPbFUNs2DJebkET5t748vyXWwCf3X71QPDEfCRVNRTnA7vEuGNEhr",
  "key24": "2NzsZSyyRr2E4PrzxcxBNWYY2AihvwdD6JHuhHYdcE3k4WUmXzk7JiKN6ydR8vopy9C4n9JEwDT1mdr38HrkpE1N",
  "key25": "3CkRhAWNcyC7qKLMqABHvHwBtrzw5TxNjpDvhb9FizTQyfcTNsQfJ4ap88iQZnZbgJ4wSv3HHwLmmTY1Sh8GPiFi",
  "key26": "9oyEKR4Jq9frHXKaqwCYAX9xXZQCNL3xhvzn2eKNERyRgCop97se7AKXNkbBJidEFSNXgHh2cjMWpCdcgBU5eiS",
  "key27": "46JwmMn1pGRvaYYbSSc9CwEzES3WVoAuEVGg8Zvw34idycGPCtjdnfFyhgodAjafE7arY91J8wmy4QaXw5Nh9dy3",
  "key28": "4YKbbWAGfQijBfT3FowbHSKmZWB5wSE91Mjmb2N6u8TJxc5tSxrtxsjtRURvJ6XdsEgqwZiW6ndUxeNrUZNQRWPE",
  "key29": "25ojdbxL1GKLaD6Mcsb25rEUXhMdJ66Xryn2CGm71teVXb4fKC92yiARw7xEqrA1zhx7v25FoE38pnCPVvpG91KA",
  "key30": "4iNFH5fQ8bHXYy7xqoD3gY97pBasKnSLk3fh8XpbxBLYCnV3421dKTQPiUUS4o8pxFJdihA6DMatQCT1r1otzVyC",
  "key31": "2wjVE1WQAJFsS7EEgXRryB23m7we2zdtwwTrHeWRs4TkmaaAWnjj6Rbx7uNUsTtVJPUEfDyc3SqYjPkMFu3bu3AZ",
  "key32": "2vrYSqt9fZWfNkwyzL4BQF8s9iGfCGCa1g6gXjHujKLsB2qqH1YLvzAdLRJMBixF1iP3zoeXc7w2NW3CR9YJiuXz",
  "key33": "pML7DJghu6eqrZ5fJLGn9jtKEuZ9oGeYRE4wadmxN5wKaADH4cD4ieUjoEigE78dJnoRwowTozFEDrQe6ZMoNiy",
  "key34": "528t5VnTpLpBP4hmq2TDsNuWaNxt4ZZ8fV2GzDUr9bpu8K5A6GhXtAA2DL7bejy5yGzMZpXCr3yLTdZHg6BWaJAy",
  "key35": "5Qi3bMv9Nf4oyV2ZddFfnfA5VRaQAoETFQhpNj8YwT3kL72jNe8rt9kghVsvKK1HmfvDmBLVSnsNPFVBNakQjJjW",
  "key36": "22piELvYCd3jRG9kr28uhxuSmjcNEEgc8iYCSHDBriyRtcvqSdhi8RHC5hT1yvUwdpTsg4ah7aZAbNPG2NBF3tzn",
  "key37": "4Cr8rP75HWL8h4GFrkt3HXy1h28doUu1UHePkXZYeVGKwYpauwPsDurnKJsWuccUsw8diJYvma8LZFvNTDTMEXRn",
  "key38": "2MDNgjzeowQFHYWw3uWEmxVkS4WhSXK7hTCy2r15ebwnDwXb8MwSAQ2PqC5Fsxtx4aAwZK33fuQXRumzwCgFDHNz",
  "key39": "27ZnkvqtGiurUBgexJk7H2oDCeMUY3oyMBGJ4mGGehDKB7CGoz4VDH1kZYQe2vdQESpGyehCwakyvtaQF6tZuMxY",
  "key40": "wRMMhqt9eMeJm4ALmsVBU3Y3qAjW3duaFTXYVB5qQjrVMJb1tNr2MkW5fXaKBAPBEHyxuTnb8DGbBtCgW24efZA"
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
