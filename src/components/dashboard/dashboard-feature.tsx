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
    "549DFVpNSDJXsoEodvHBbN1LqJW99YgNJFP8X8D7jzAvwy3eBBNPKBmAVSPy4CPBLrXMkkFFXPPA3EJHr4iWEiFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gczqxCJYfSNJArQM4HGHWamzGRHZS7ncs6QQDGqmY1JnQTtCRziYwXeZKA46VSLLGpD8hQj5AyRFCpYseMLXSfa",
  "key1": "5F1S8hjaq145txvWBVECFb8dsNE5MJYihfj3UGKrpv2VGqKdVVM57LyF8t21XWJnnnkTYUVShKknDAwi8JrxePSw",
  "key2": "54oLZbbNLJmQC4g8JyVbua54XcAB4FvxC4vxg1mVkmMNWVLXoNx55b3oZHLRc4jbynAX3uCjhgKPpaRqBsr9Rjcb",
  "key3": "2xSmEpdSVUwHytkGP8PYgbjEoZ3H6hvS4ymiNaX7yfFCAHNnhZNg8c334PxLgxLb5gb6QryKLoiSft93k8BQSo1k",
  "key4": "4Jq2Us9jEPAuT82T78v2RJ2vEsr9CQVQaJbUL5oTYrL8F2f3ALgiw6SYhfPJMstzDXc3tAy58hHZikqViZkw1TwC",
  "key5": "4zEGfHAbT5PYYPpRsVcKgWQb3WDsBCAQQhitU7QfkAhLM4qkWuRZodXD6epzL356AN1EPqiLk4VaMxARpC1x4JF7",
  "key6": "cZ1tVDV5VDkyGNXq7r5ukziKCG2Cymvq3spr2FN65RsP7xzgH4GWMsfQHY6Mr1oCLH3XmdYkLezeeqG2rEc1JUb",
  "key7": "35eViRdGXwp3YcbnW9PfZwSEFY3iY5sdxjkoTxo825ExirBFwAPyEZCpFqC14gBQDPtp9kxVw3CReRjEf12PuXqd",
  "key8": "2CgqS2kJnkPQmkubjFNgkV1npzBxYCaQ9rpq3aZefXrHRr8Sz3zWSDC5M51YwJiaK9mXZSh5rAGnCucTepiuSkkS",
  "key9": "LWoDZbwXqhXyXNcb1yAgnMVdBnE2UKu3pg3ZuZfVHXcLMu83iUyhMShfZMDu6w53VQit3wDWnAakoGJkDurixg4",
  "key10": "5xRkksM2G6uVzktUsMcHRFb4fbNuvjjcGn4tnAni7v5ixnGNpoRf6bCrW3ovjEwrPmMwLuji3uXmuY7Xd7EQZi8E",
  "key11": "3MF3VjYgBwaL9wi1rJXP8BEiSkTeJi9AZYp3GvtNHCfd38VAuyZ3HgwuvCk2NNbj1yFiF4fNENQaA89PqGi1aLAt",
  "key12": "5nS27VPP2k43WvNJVvDZAR6q3Y2xCRQz1JN2YtPk6MPtpNS7933axzy5dPcEtXtxiBhFBVeLQsiJXZEdW38SzBMj",
  "key13": "PmkrSYa3BnFWxR9jbZPEvouMNFt81BopccJpqhAq2jKAaXTR6bcLkXLwLU9hQRXQWpsnTQ3YLcpMYSHqpGKiDa5",
  "key14": "5GUhMr27kbZ5qd8hSq8dPhx5NSK2E3ifaoJenpnKdu7D9UGuRkcEHQfYKtL1adrbyTuSmMr99p4rd3opoNVsCRxW",
  "key15": "5cg5ePKtMHzuh9ThixiWF413m98cCUrpmVEbaUASkDQS7rqK8y2mfFpEuBAmDD64nGfkpufoWk6EawVgruEuPQjt",
  "key16": "2zjjDZcfGw32F8D7ic4e3nFiLCToXx39aXpQ9s8PUZVhb27ADeoZkC2emC7DzXyk6sYLp5ofoWoqS9qubj5wcWVK",
  "key17": "2J7XQKV8tcMSQitre3zXcrERvWnhvD8uW3vtGrLF94Hdeesg64aPScQZJtzUhNztk5FFw3ffjcqCcrzj74ff7a5N",
  "key18": "2f9Dq8wbx1EM3XEZSZRCPeBb2Nu7fK6dzMihgETCu9VtCDLthpNgSpNFMrqzAuVprCFwozDr9HUJc6UnCPBTmePL",
  "key19": "WKNxSgKf5cXiCZacVDqawXZ5rEeY9uMWY1ZB3cUoawAGV84bR385AaKKtXt66LAGxbTc6Q3fSSz7g7hWLT3wcGg",
  "key20": "3ciBo8RwWArnZLiFgp96ewUAhpHAGv26Gm8zeGdfDnBbaMRyHh1NWPrk7sYaj53dBKRYntcQmn9WT7uFcD1kUqhw",
  "key21": "5Z7XQiAzUrEz5xF3mR2ZF1t4Bt245T1ZDA7EgS9aeNeFLeHjRBQLiPVE2ZuVjC9uRt7pvQFCiBwc9rTZdVNwtrpo",
  "key22": "3vGkLHmqFW4gLyLtdz93f6KnKdwGJnHnEHr6MU9sXRmU44rGzFadQzaD2BECDdZBW47f5oMWHuhtYLJY6Ra4DmD2",
  "key23": "4j6hwoDJjnXmwMhcyb7hNgfdkR5rnSzvgynGez988WTCPZBrHtVfEvUFwx87Pw6vWsCbEBETuEueYbsrfXCbumLN",
  "key24": "5TSyDVRQ2FD24ch3MFyZt7qSSnYsrwTVqRPTWNdPMzPy9BspfNZRUPftjtRykBRRCf4tKs8uzi5oPZrJaAUphcGU",
  "key25": "2djyd28ctd4nF3FZK6vAAKSDpESogaLC2SbbF4UHU24cdKevtxdShvZiVG15pmbY9U7QZf7TEgwrgwbWAr2reabS",
  "key26": "3rYJ7xpXeTimCiX8ahcVwoTH9pBhug4UQYkDaJyn3oh9313EZnrDhrRUpg5PcJkkpoLuocxZA2bfMhcAfEX2yR1T",
  "key27": "945s9ZBscyairqNhcEbJ6YXwxMH2r3ShwzPb1F2MA6YRbvN1TAFfMoxPPQqymUb15Y39L6F4H59iSYneZC6qidP",
  "key28": "34nrjMQKDzTA1rYDF45u8AVtW4vLHB7paeBMEG6RAebUo1RBJNKcbidxGyaSimGWiZ1PrAuM3HT7vVo1r4fjA4nf",
  "key29": "5TWCYWUfArYb7k7iXEZT96fGXiM4tTgbGDmjYGki5ZyHEg3n1dCb2QufDjp6igUeLemjQtdk9PVjG1xrVMbpUJVb",
  "key30": "55717qhEeuDjpdgNkJo84jqbMnge3KdBzMzsMYiND9pgevuz4vs9qU4biLAWcXfRLn1QqxEbg2RsFWPcUnD7osHV"
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
