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
    "4yYNofRzboqVrFDrNiCowo8cVJq9bhV4jryfZpYj1ZD1SpzR6bpuYDKehaRkQG48thVMJFLPuk72GzMQamamcREp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a4aDEgxA7kJZ67rMyVa5cjyQbWCB5NnVV2CqCyxVK1vm8HK7yszxkyffXNz7r6XWEH4SKyN8toqEfy5bWfYkyL9",
  "key1": "4XyKjzHr7JY38vdfyHYLon1CR9Tvg4PLoVckoULZ3wE55585CCAq6DK4SD3pEGBfgifDRKMoWZJGrikQTnTzyUqu",
  "key2": "MjsEDHUQX3RdiUwjhsQHp653WycwWjRwR6JRJ1NbWyJ4NnST2ZmyhGYUdXifvmEUb7gks7PJF7gjzgagRe1mqCe",
  "key3": "5oubNgMnt88bsJa3mNXFSS4V9xrjKGKBHVNUxEzK5dLR6Ken5NEQmdjXPG8CUH3UtgEvJVLmn7UtxhcotJuNhuqb",
  "key4": "WcW7diETfo3AwpjdEsL7Kt6L6dS3QUxrHnBUTb3cKNZgdb5w779uDY5ARJBBQ2A3k9GPf36QucGb4asP64M331W",
  "key5": "4ZZGp7Bx98TPXWwdPmwc51nbLzZHcTdsVLqwUvy8rEdVae5Y5MRLzh2Gy8x3pVG85MEKyxk7DhTHkBtVBghcBrAF",
  "key6": "4aMctKWmwVoNnNwzUKx3LPpJr9bTbCCkedZYxRGimhc58srp3ymup6Jnx3Sr4Pa8o1e6XewY2fwuFowqJyookUwH",
  "key7": "3BHsbVurYeE8S8tB2TR3jZTEMg8xyStVjfgpakcdDMoEY4RVxHyiLZeJaTE7xCuQL2TbRcswUp6pWJ6btdj1ACEU",
  "key8": "H5DnwsbydXyidCA71uZ1zBFP167nndL4PBb8Q5KaVDAHks7eDXWBbeEYF2KvutGjCJjf8MYovVDJP41mwjZ16x9",
  "key9": "3iKGqawH58qujJSWiRZkWvpZhSmtaMBNCNbaHFWn2K2JyfhZZAKxW5DPnmPj9XASPm6ssXSMnb63HWsQd51dfmYC",
  "key10": "4w1NqfwyYvch4LACN9XBzsdZRyGdEPYvfRqCt2yvqEKqZnC6TmcHVhaLnjwsKpcwsv9SZoGvmoB8ButPH67UZKAf",
  "key11": "5T83G4TvXUa7a1ebEcvvMduKSAhv8jwAd3r3qxigLGhsepdGoien8j7fCdD66ySuBf3MurSxsznNFy7n5j6WSUX8",
  "key12": "2xcXBsrVjNzqcYgmEwWg4FdkL3QeMTmocUF8LJUJmJiFuZt4SEDyb2v3hTEMUSCLhdcQWTkFsScv9LYjZTPctocX",
  "key13": "MockdjeC1v9EzJk2k62Ruh8Wnysv4J3EtoN2CgQiG8AWxhrdvuXqoqrXr2zyuLaYyKUKsHKkUyesSNdPAfRezEW",
  "key14": "2PnDn1okNvhJLLCjj43whA3NxwG9fj5637h59V9C2XPkDHy2RQKXGeQxiLXFRiYt5u7izrUhF6xd4rnS7Qs1xf4U",
  "key15": "33YWVhEc1Cm8vAZCf8nqE5nH5eGR3BFhSEwJhLibqvL28FUBr3FKcbYExAfj3VxFcoQ5ZfY3k8aqU51gdMxBuWjV",
  "key16": "3uAXWznE49y7PGMEhNn9hkairb3dz1HvKDg1W1RgD8QZyNyytdwAUTvwaLrA4ybTg9igiEK2asFq5WoRghAPB8A4",
  "key17": "4JjmV3wi8AJU2JwXPDmeqVXhX8sUv85sm97UMpE7m1zz1pGtLvcwReVJq3mrXGcZEub4ijZhZA2EvChhKDSLxtGv",
  "key18": "4pWpqZKHpRhjUiZ4HYA7pxegVsb7oFH4S7WzrKVPbWkGzeB8jQE2jN39fMFSJA1Euq1TPigVhzyvTaBphxbuM11U",
  "key19": "5eNjeZ4mnpxP9UaQcoKqyJMxWejR1qfxpFAeHQwQNXef4JrCRLHy3w4Ed19Spb6nmSJfs18YQQsLyY4VxkW5EGBR",
  "key20": "38geguQxgp1PGfPxct1VPBJp7DYBDmwcAp2S56ePJDdGHpDjvRG22PgtTBnuKwH5c4bww35bbFuw4nDZoRsrMEDJ",
  "key21": "3v1fn69FdgNeEMdPnvKcYmW1XJG3HUDWJJjmiJx8oNPdzRtBtu9S68NuzRUejP6QgrmprhRdbFoKEwQYUxNKAa47",
  "key22": "5yt4AsGXNHBewN8B6JRMoeJYZ97SzH4dUoYit3HR89fwZti22vbwtCmWfWKCzrEhYGREpQQqL1oSCEFP9ttAGJ7M",
  "key23": "4z3xQdBMaWJA4bquB2eYTNXBkSaMMmiV19DrcNwcqr2LTvfwvFEXTmCzqYdnpbaZiya5dRLPkzGuW3378TPbYo6k",
  "key24": "4UM3XNeePbBjAwGmWWCQipkj6ujXVXD1N2mj4LRZMGBbSMdKiZsWxr5iqenMNFUJvnpEFDna9QbrgQhVjbxSGAwG"
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
