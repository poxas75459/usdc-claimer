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
    "4rspwQ6buwhvtZMbwtfFLwyWZeVdxActqWHmt7AL1kHRgGnorVbBuDWXL5hN38om9zY5K4RYU7HYD97Jy7qGnr6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FQ6RpasjGdtm6gamdPDTRawTqdMDb2xnNL4fqLn4mTfKsCGoEd2c4UpoScUf62zafME6TBAjMxtAuJT1PijniH",
  "key1": "FNetntGbeVds6PrJgxVZucQBedZT16XdHYXCXxNGKucxx69XvW7gv1eib1PV5vLUAYxf14L3fMjBT8grJJq9ZBT",
  "key2": "5SbMCREDvNq7h2yeXw2CLjz3RMkopBzVbcMUGynJNZ2WqNd8anuTCr7aFXLEcTSGj1FQ4H5rpATucNghTVqN1LBF",
  "key3": "3Dehxj9xjx8sdowxdJoYTa7UbjBJZS4unSGz1p7BzDR9hDn3mECo9NhQsnUdx7RXCjk17rwgabmhX1kRMjMkhPV9",
  "key4": "nj1rBQttBsTKPM3cjxxcm2N5fwQuuwmyDR5rZaYQGvVLZnWRpGzkK6UmKjsUy8B29NHr1wVzFE1Uhy8y9r3dcYZ",
  "key5": "5QkyHygq3d91WJL66VmFjSmMLQMdr1sFmVcCGhryKDWZEKwWgEDNLbtkQe2NabUjAoQdMg5DXJuws38mJqy6zpaU",
  "key6": "62A6p1bNqpeok73RinpQMFoFXYoZNuybbKD8cKJCxN7tdLUjtD2PU9sCZiFbL5C2Qea7JMbyvhFEhc3p1Wv9Te3q",
  "key7": "4qBwV2Vosu1DfERMjcSYTXbo5Y27ANNUVwrA9SfynfwJ9QoWtaPhoEyDu2rSVWuLAAhzGnuhjUVPMgU5qW648YtW",
  "key8": "2Ujpu9Mjy7sBaZhPXvs3mkiRhgrzKFkMW1R3R37jKuqzR2ydNoYndJokDuACvDYEtMzZ8NZcivWBCWegqFigWrtj",
  "key9": "3eGRM6LNWuEu6zrU14AqRVWMLRMiFbxwNr8hDyM5anznbytWDYt7VSjqoFaXrp3DBXE3d7DHib8zrJmq8rNDJ7SC",
  "key10": "5QenXx6aQF1iKqvYi9aFhNG57UYZiHe3Ww8Ny3gHZ5BAa7DDET32CgeTLBRen1xbTRFcLebULDRqe11WXZvm9LEF",
  "key11": "5JihVEmEExdokgqMNhH2bT4xXKiS9EvgRPuPF5vgs7HD179s2uVzLA51AbjiJtdVdBBXTj3rc6nAxKobkRZ8Ek8Z",
  "key12": "2VqGGYBP2TDzfRMRqZrazcHRkhyfxjj2RiQqooWEHERodUpNr3Cn9uF2JuKazkMF12RFLJic7RvoSxq17CRBS6qY",
  "key13": "4eB8dQ28EmUf1i3fvXiB3QyKY79hab2LHKb1sQMX4UtMhARpZrA7SsqpRxnZiEVbVzToK3spqQH7rXrh6v7snsxF",
  "key14": "3aTeNqYLFVQyV4DU5vLXJrfanFijEgMDPk8i6igDf2cRWEPCJ9BhV22BwgFJwevA3cSfnQdKukDP4T1Ta7bYFH6S",
  "key15": "2PcS1rBdqSxNsuZwkYtFcrtnsLktuYN2k9sRecbnemTRjEsuKzXxcVEieeiu45o6aiKwmtdBsQ2SBH4g3MUoqcCF",
  "key16": "2zfS9SfQamkt3nYdiZrmsuFrrd2Wx1Seknw81dXtE4ZNA7di6pysiiRVja9ACaJMe8aZ1bGKmupZHhWn9tBzU5B9",
  "key17": "2KBQHg8Pp78ocRDZCtReCvUAZmdxPXF5mQ77aeBgjjPnLVEAk9NqSx9vVwygyePytn7oZBfekP4ZEvxEn5FkzjS3",
  "key18": "4ShjNDr8grzGiygY9jYsVtNXboE4kfx16ZjczmPoWawoZWrFz64P88MnnSZVk2ygXycKgnXG842dFjxG9s6j9iGy",
  "key19": "3nDpz7ExPVpztV9oHeGQViLw7Ye6JCHCBpUSHqpJNNCvAWLvxi5oLzjxLNdZ3jqnDnYb4Ko21KFHAmDjdwSkz79r",
  "key20": "2p1uDmiMHqDFVBVxvrMu83mWUYaRiqYzsPYaXw71k9WzkbkK37haKP2xLBvZ3vJ6hx1Jqanx7u4hhmHAQtmZy6C9",
  "key21": "4p1NrD9BneqbxMjQFNFR3v2dz8ypRe5JMFrTff4MBbMi5r3UMQL1MUos4HvaPB4w2pgnjamzCfB66Q5rt4mbpSAZ",
  "key22": "2PAbNVFr8Yo9HCQxyLRGTEzyo67XrScBSGNGwdghnU8y8T6xE9vPJCXb2mT4vFAEtj8vmhjG7YgfgXSb5r2AVniS",
  "key23": "5GtpVpDA8fAbczQmhjoc7UUQt2VzMFeoftLC3mUyk3DdHuZ2b8p5WGVT1GvLGNas3b4u4fEBJxwXGoJxidevQtAj",
  "key24": "3J6Y4f3PsBFAA6iEwXypjEfd9H7HcUXeNWeKvaX4ox6ErHSVHm2WgywaKyRVumVg5nTByjHZodJmuxDXKf894NpQ",
  "key25": "234mFXwmnFhpfqnKvdxD5Xo79XuGXETENEmPZ59BQukqGuGdfaXA4q1VKi34fyPeSSWwD7nAjJa7Nj1LvAHtXi35",
  "key26": "2BZGiuZiqji1iPK99yLD26VQwxPCvuCVknDf66pogKD5EbH52LGKggoEoK5kRn1R8MLHQ7TqjzgT8sV6JFyBNjiV",
  "key27": "aXWkrs7cd7WKm7fjoF8jSn9EUuFAo5XPw8cjXK6GAsadM6rjRQCxAW8r4DTgkiG8KGa2NqEd9u4hb7w3UVct6zk",
  "key28": "3yxMLkngsQDiLGxKQBp3Cx3a6nfeW5UuUrKPEMDh5ysMTjbqbP4Rwk99EqBAEESDSLNm5GxPsB1Qx5f8SuXtMxaM",
  "key29": "5gS9XpRZgffoJAj2A3tsFXBbAiUzTuMx9j1jzytBx9xP2sRV8QZdbXzQiorChVCL5aZ6eYDzMpULDaz9A7eXR6qQ"
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
