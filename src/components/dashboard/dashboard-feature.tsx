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
    "2B25rtQkQYohFxLBNKLEgiWSdcCpatYL3J4fhP9ocGYAZJkfG2BErNdCctZRwMtqg64A3sGigL4HdRsrJBvv19Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgd279GqZGVA2LrE3jY1sqUCeBoh1EBoy2FoAVNxNQBYjdSnnEzDoNXSgQePVgpZQBUy1YPCEUoLYARdjHfD7v7",
  "key1": "3K9T2bZnBwtK8thAVMaKZr8R3PykKp5otvxaRNfd3yrGJCuxCp2kGDhd1AN1hYQLSSqngCzzFWRfi8cg5gKrjSTx",
  "key2": "3AeooqM6bjWXVRYk3rfUQaKe5PCaxniidTePc2rjeV8pLbMb4xiciPi9inMDAvnKVhSkVbHwG4WPW66TbLoSgAPK",
  "key3": "3QEpkiRpP2fZZKkKBVxi6xCtDTM5wBjmk4h5BZi3hrQ5YYQEmpX9PcEMSffih5dVBH2M6fNuK2h1DJQaPDXJ2fUm",
  "key4": "3djqA32BiZEs16diAyUUqXxBkAnG8wdi1uPVXG7Fg9hEZZjfhzsNU6DPfvSDiCU6B9JFfEt3cJBrNt8WtiEjTeE5",
  "key5": "3SxNgyP3vVXq8rkTMQ1x9MkJfg27LZa7gz76xCTXAWcpPjmGZeCrskR6EweXQXWGh1mMRCqypxhFQVcTbmriawT9",
  "key6": "3sCC5zQALKFFRyq6Hy4P8gTZQzM7YSkfGioChfSLGMtD76dfxCtPwLcyBZZ5FSu1ZQvNMzBNqzDLyod1Hx2Pgc1o",
  "key7": "5SDtdfdvHSvQHe7szCYGUyX7MRQRHcGTXXTC12Aht8ry9GrYfEq3q7bcr81PJNRRSQUMi1hMSSyvTJymPMUb8x7q",
  "key8": "4LY1tLJvj4qYMZpvS2UknpRQ9tdDj5hrynuXd6AircQ6k1LqxQeoyhrMQfH8NNK3s2BdnGm7p5nu4v27zfqegx13",
  "key9": "2eY49JdqQy9y6W11RRMFUDvKzbLJ7H8G9fddP3ncMTgstom3yzcr63qJX1Tiy6bgEpXSTivDehNSdGajfYFJZKf4",
  "key10": "mhk7cSdJgv4rYz8g2BLMtjpFpyGeeWadfgju7N6MdzwCNHoeYywR5sQUHusAQ6PeqnDQRctTMBg2kdg164XwPxh",
  "key11": "51PXNyJ6WGCGFhpD6G6rPhs9KAmrCNLJVLWipsd5tjM1j1VX4zWPaKe1Hvv16X8sxctb4ot2dEFwsCKb19Av4hE2",
  "key12": "uMTkMH9pqn62KmGJKdXrQM52jN2EHqiw9TZcKToD9C3NwHNeXb9EnKvouCGEVrsqu2ESVf6yfBN8g341bAP2tPB",
  "key13": "w4W1j5vsMwg9p1Mw4hnJ9hsuu3uroTE8xpM4TY7VmzR5KqZHKi52DNUgEz58SvoANLMrpPt2wsrAApqLSs7fhUm",
  "key14": "5ASrxr5bGrFGxtX9H7Qo7HTV3XeGo3vcssAzsb3J18y5vDF15E8SWn4giDDUH7Ev9r1bwoFHLh2Ns2E4PPAgi8U3",
  "key15": "3qUWfVY2DwEqiagHgNcfv2jnTgqShN9cdi7sSadvXUvHC33DtwhCt1AjrtqfMALam9kj5rbkXLYhve1y2BQdU2Sh",
  "key16": "5hDdUkSob4qZifUzc1ijzgyKrXKd9zjatF3JP5PvMTJxgiVfbVA9mVvrpBNb7K68jmb2ZjjL3NjEkG8189CxP9T8",
  "key17": "2o9U7CkaYPG33oWaRgmNgDNGUnQpv96q5o8zQKbsbb6siPkB2FFJCgoqqXVg1mnWQBa457LE64kdJ8Sa3XLt48vn",
  "key18": "ssN6HW7iXgCKcJRqjBALnaDm4CMhnFAsZ9MEV4dsYJC7ZSrViza6WS8yeQzGztsVqWmb2H6nhJKzTbz2dacbLTR",
  "key19": "2p4rLeKYaTv7yUseDAVgNzcoNzwR2rFmxyM9SPfJYko54xJDCqPLCWz3eWgAxyaq1YF8vjsp8bUGqkweQ6xGBTTK",
  "key20": "4WvMHJUWKkw4agGNKqn6E5iCU17jWSrGhu4kmNZkD1Y8TWWMYh2FfVsVq2EaFbj3eiLHaFKdobEux9NLABxqoHqE",
  "key21": "2RqXaQw5V4HY8VYTeeMj96vLEzULpdiVwMBH6fjUreok92fNcjVKZqKsGcR8yH7hiSRiHk5uL1hEZDBtjtJobLmv",
  "key22": "3b94kSUPNeSR7ZwmDDfcvB9RjtWmdcr82hYCovhLdigc8cNx26CfkJMyk9tzQfNoJJ7UaKgfJ9kdr6wQzWFqqtxP",
  "key23": "3FUKmpYXn2rCHZBbUQFAj4ohXPwUCzWavmhAoMRnN3Vb7jdeC4DV7fckYCzKhN14LReES6hMvnN6aDjUfaMtxWK9",
  "key24": "zDpRWAqTLi6Lu5faasFToX9T9dNa68YznhxscDEB8r1tX6iFeq7haKyNsHEwsARmevK4sdqTKEGi4AKSRymAY1s",
  "key25": "5v9tYT65uaHTzo5MAfkZjo43iDSeRa4v62myWukeSAhhxGgnaAJBmwXT4Z9esWci6Lu9ZdcRW1bZREGAjgPmPxh9",
  "key26": "Ps4kLE4nUCpzgcrnmAu31GS2CWZKkhK7QrC4rsrozxCjq6fXA7nD4L3ZxfuvKdDHkU6N7WoR89xc1X2axUz4mtA",
  "key27": "hUXFBQyAmZbcnsphy1RCHsthNwcQq7WUqox1Y4DijVb5E4YjUtLSspSKW2fbfFdM1RJ8UgvrWDRqWSqNuyY8kbt",
  "key28": "kJxgpxCADRQv2jHYwZK6sPFqzJraBPq35s5EeeyUSas2KFGWC3HvL4xDrdZ925XVgCpUbAWxnCage8S9avXSpTp",
  "key29": "333yzVRg98oLfkNKu2Vmx62gD9KkStYDMWHU8xtP2aaJzHGgAr1WcnFtE4VCB4JjgSVcrMjBVd88pq2iMqdH8S3r",
  "key30": "4e4fH5hYgdgAjGBDFsgnCQm3T2yDfUgRtM343mgDjvnPr5TVwL2ZRdKdt3AgfvqeJfZi3nzKCCLP4QiBov6nA1yv",
  "key31": "2wrMF9xn8ExnmStYDDFHBkF2XTXnDcRsWpYooRhQPVupnQYnnbMSsetn2fHFmEGbH76iJ4fZ4qBqgtxF55NSuZAY",
  "key32": "22R7XgYnyXir8j6KcN9bbgX3ByaDjJJtUTjDXtvYETiPg5NcX2BqpfcP5mWrAtQM5VFckkszeHA4U6JwkjfyHM3a",
  "key33": "52Ef9ie1xxDoZ6uo8596JFxjhck12FqfWNxjottprQbyzT4QkkmoybbL11T7NMAzRUcUYSU5F1qcfEQXs2ULBCdH",
  "key34": "5MvvpyoQuRh5yhG3TLh4ynm4yGs5uSwBDVkesYpuC2FJLrY83byTmv4aGqwkqcBAPL1HTaNwz8MEz2bZMabNHk1e",
  "key35": "49Ey4VyDxawbPiabAKWWipR2Jj3NfVdtshPoVBEadvJdxAKQrxQxhtMs31m9cTERb9NMAKjgHHTfYhouRADpG1Y1",
  "key36": "5mwNS5m5GbvtFbBRWoMBB8uKW5keRcQRUmHMHfhVGhHNqYuVsRsNDHt1rkUtXfdGaAKP1rfwYVnNq3ss9kHKkZBU",
  "key37": "48qPuv5pEvyPKokZwoZfD32Fe69Ly2yvEcChsTdNjZPtudQWjktApxeJ4sdP9XGETPqAB9gTCetGDaqZxARFDCaY"
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
