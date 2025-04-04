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
    "5ig8qgLnaasXQ3CpacBHxHos1QSoj5ZxmWH61WGidpmY8fvByTMhduV9JCXD84ezE7bUqVfMpQ3sxtK8Q6peyj9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCQa6TphEVozbuU6hyD7oMpfUySexKYS6W5BtPcpaRkUyGwtMNJGpbsvd7khPm47KFomqZ6v5BUy3Rw1tRvXXsX",
  "key1": "2zccuydJpDzQtpihVMPR5xpTn1F8UNATA72c7bNNGffBrsVJ5Asc8cHMkqJFx6V3bS3TURK2sX7j2ZC8ZhbaxY6k",
  "key2": "2xrnC5U6A4bbyGgH7QTzqv54eS1n5nU4hpgJL1pnBuwcWG96Qy5aLCGMiPv5bCys9zW2GsG2aA44FeuKmCTa5pf9",
  "key3": "4Km5CSu9ns3nVqzVYVAGJi8d1w5rj8rk1DX6KP7uuLPuQYhisGursjZpKm5kDRorKTXpy42VUUxH2Tter7AYePpZ",
  "key4": "2MVVm7pGyBmCGLmouwsYQGfN2eKVaiPX9G9qjrjAJeejacBtmgRdCCFyU85rzHXA2zzhpD5HimEEaC7Pf9HfYgUw",
  "key5": "5nKeTCorY3d9ki4FQ5JnzfJGFab38PfkauqGiPDABTsvyh3FNJYkmYEcqvwnk7QHKZVwuMgZfvUVWc4xKc48z3AN",
  "key6": "3ZscKNJVJ9XMUf9qsdLJYrKWZpqyK5kzUyvgi5ihjr6WMHZsdo5smaQoY4vdnUDaf1myyXZFYEE4XNAR6o9zg31S",
  "key7": "3j8ftVJ9m6FCqJhDhifbjCKyfXk9AFsdJoNnrZYbMhAPYywJZ76icCqZRtRQshVJtNZKZbbf2pmUiAfUzkKMLULc",
  "key8": "4NSEXBuAECBWqoK5PoKLMbXNNikf8mD79ZnXVDyjbuFubNCnanYsUFW44NpfybTSEEHBW7XYKBrnnLmYkmAssubA",
  "key9": "51prtP9QRg8K1ZFUWSANtTVU9eBmHst8sR4equqtyL9L2bABdJ7Wtrr1u1GFRXqDBwk7Gk19RiAYBjBRTfQuasBe",
  "key10": "g7qFggfK58vcn7zGEmfLP3DhyZZM3uywrFBK9cVv1NSnNfMNPE7q3sreUYyu295JBhenDbYSeD2aSEC1CbpgqxC",
  "key11": "2QEG1dSUGf1Tw5ssyTn9YXPCGyYJQWCiW3WRgFds1yw5ZfAgPqD4D31g95CL74DXvTpwmTC4mjR5PRecqn9EkF3R",
  "key12": "2RqE6fMNmuvEMWoEStqiRhmDL4WTtGZ6WoiTP3JxkMVWTpsmS5VVXpHd9XbHApdC1NNX61sw2oQHTSYQ6dCGA5ic",
  "key13": "dpjNbyuFuURJxWLkxVBCLyLeYR7Ams8otb6HNuxWiWRfsxutt9WBDvWaa8XQyW7L2LYrJNDAh1mp51kWw2xEuXf",
  "key14": "h8WNMxVxdGqGvTiiFSBcTmP3DbBnDKsz8owCYRKLcZcsSokNuvFYgYpz22AkVVFN2zofBRhWKzuLcUwLfAioBaF",
  "key15": "3WWDYL2iGRwCYMdrtbSW5pMNavT8bCDvF3a5kV8hcPSmVtgEib2WuSJN56eL9krGD7LgR2tCwRvs4iU8t4SGNVmA",
  "key16": "38tPR1Mhe9CfeTeNojmBm83XmGygWg4Ut1sF3eiq5KXpYtiA2rUhzNK4Fi25NBfF39mN83pEh2RNU9XMpGce5TyY",
  "key17": "5jhhBevQccTSvrDbvYcRdvMPDD9DWKB2X9FDw4Yv5x22WbvNKH2hQTLucxGt2XzxsN3fzd71BQbdUDbLiJ33JvkF",
  "key18": "4zqsMPXhmyut2UdjArgwYK3eMAwy2kax94ovzfqJP88JM7vNCBQmoMzuDvm8TFFJ3hrpGRJUyYBZf8dQp3yE1Bt4",
  "key19": "5yvb6pu96AXojNTRB6ZFi9LZbAeaKWdSUMwBWTPWPynhGKp6HXfZJgwW7vESJfWFbymDgAzFAuTAwZHkyfr8NydJ",
  "key20": "2YqJGRnHYu4rndz1AC3HPbjVxpsigpVy1gZchMneRQixBCaPaAb1EkMqoVp8uB9EuVgupsDbHXRKp3ELMfzTeS4L",
  "key21": "ifk5mFnp7pnRKyyT9Ziq8oLFbFhnHAoFZGcwdFD3feuwKsKyS1go38javD6xRTjTVdmLawDFsEM8y5Mjd2aDVFM",
  "key22": "45RRcQBt21vtR7Abh3CbSgvjqTisf4pdjG1E9ko3gMn2mviqihrQCa1ER4VAKULifYokZ7ig4EdLHvPzxK5urY8A",
  "key23": "4WHZ8HKWo7aJFTM2eVSQYaggpmFR9ytJ3jkijx3zucw7i3ThftNQtjqEYWtRq7mkwqNPm2UofzmQewLTpm7nVZve",
  "key24": "3jtNBUTfv4TU4YTqZ5pYaBm1TYsRHkEdXwQhhDrz3CoSahtEYtvDDGGUMyYmmwWVP2AjTYaQyTRtHA3NjReAcWWm",
  "key25": "4hGySbApKRFWkAZVS1MdpHcUtMsHAzmahZZv6JmCHbjhqYQQjxgQH94xw7sahz1eFp5Ew3NCMbAUyZ3dPCerg6s9",
  "key26": "2CQ1eeH6v3KUa1yC1tvMS4MAsk61Ksr38RGtoFa6eg4XvMarmkrzABUnus6J2ADut11CzMTiqCpqazssCV6nJ9M1",
  "key27": "5nZmfZdZMpmPKGtrKN69b7M2y4wSEuQuMfe8XubCPSZGEa8tYT1hFNpNfkfZVU6ytrmcrfPwiwNewucyATnHkg5v",
  "key28": "42FYd7JLrt4j1mhPUkSnvSfPbadNg6eDNSsbYxqVptZPU8p1ktgnpXTCWyxzGvsGKCtqt8P7ZjfcLc2RVThod6vA",
  "key29": "3QCw5xWRoji9iKkLwQjC1WqDEwSizd7BoL8dmNwAJBxEHP4hZY8Js7Ca16LzScjuTP9ABts55mkPxcJp8WqNV7cX",
  "key30": "4YmXaDRQYEYsqBChEXCgjkTZ6XDZ9SPTTBLQqEGDvXsGLSHuvR1dSSccVJHbJbFYfEpzraq9tvmK27wiRR7VuNjm",
  "key31": "5GnGFtXohmp4TVQE6csPMNrueRnFukXuQZrDPxTxn1jXFh8DZu5Yq3vVK4fUoozM9e5iaCxjP9tXUp3K8xDD2X2C",
  "key32": "3MuV9hgD5bD4LCwbCNaTohR7ucuPNFVWSCqqwyEfMnyKeZfK8f6K7fNopnYDWfdLaaLYEccRZNsqKVwfCwDNS3ER",
  "key33": "cMhd2GTP5qFuLhiUZ9FRTvpuYvhioYxq46TCfhsjv5fdobStQxAiDhWWopRRdAA5mPcyDUAzxsbE6xu8x8YM8Pw",
  "key34": "X2ZWNxAcVvcqCHNbAdKBwquiTQQ3sjKnk3bAKZrkKCWqPmBHXNEJKX7RsKZHtdG18gkiiuJBEDpb12ZoCPgFUn8",
  "key35": "3zpZG8oLx2gJYSXxkDwnAvbH6Qi2bNetqzK2SsKiG46xPjvKnMbLfCzP8jPJdcvNPDFRts8nsx4sruXdvdQULTBv",
  "key36": "5oSFdtWr8PBzz1vBFYAqEYYzLyoEXq2utCCZ9M76oSbmzcrgbjGyv8ro9Zr8ZsRJFgdHzcaZKXpxrZzmc1FWvGa2",
  "key37": "4643d9e9Zp8gn4xR7CbSE2MYsumsRJ9TVCRqaruZLwi7Ynh1EhAzqWxG2DqV6RGyc45mDDKU9oWwRdWrP35zgHat",
  "key38": "2o4YcNaYymvzYdgJBjroAmcPGpQEqk6REYsGQ3jfMkrKG6G7g1a6TGxUGDzaSzQQXMgHUMidEvjL7NszApQ8KTVK",
  "key39": "5qLM36C1EVjiGVRDjbyV4vbsbCn99AXAscxPo8DbmrN3H9AuuHwS7bFvsfHxB6qWitV8pGcxVRRX8aTUaTA11xFN",
  "key40": "41swWd8tXvHaQmUguwJCBxCGJ267Q3Poz6jXgSqv1LjBgYNQm8tRrhG2CiHrJtmLwpMswqNibuKT3CCfEMs8taFR",
  "key41": "21A2whBF6GdmoneJDUKm9RYQYm8auU4qqMiWBLoYLNe7AP5186LNnkzxUaAha3dCAjTJ65JiRuNCTgS55SKxQovz",
  "key42": "5EWM31vzDWARfze2dVQjLWW3mkwK6UJxNKBHRTKaDJZKzeqTPUSG7yHNAH7zRj6XgADxMX6AmjuSZb8KCoYM1Dvf",
  "key43": "5XUjE5FuzAwxqKKxA7r5x7JFWSZGi27HLahw8Fb9Xd6ZQ9At9rHi1rp9HeYemLrtKBSEARqZcvSFVCaWASgVju3o",
  "key44": "3ezrRxKhCFszbtaJ4ajfb68kcsRFY5JouW9rK9GLd2XaFUqZoR9Xr24ARcaGxrNM7KnDEEkMhWghJ1Y6uVdg21JM"
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
