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
    "5FnenahhKV6LEDwkLniCexkUa9Bb5jemi4sc34AYq1s2WcrFh6sJyVUbjdUVP18CwH7X7n9zqZ8ZoDfPrQa6PgTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVP1jUziw3iNSbxCKBtZQgq2bDtzvrfkS99Pa9vghYhQDrGuRc76yHVTmbgekdE5LYpKbGFu8ZTKaohihzocKa2",
  "key1": "23SFVftXkquTZJqW4AuiHZPTipZh8J1qJPipaRjEs36h6bF64GPA8MEjUwufDuD2xheoZ1t5z2iXrFc4EQmw67Rk",
  "key2": "2kJ2EazBkvpd3qs7e9NsS3mzeaGDAmyXLyzCRAFfw7LwRgzanz5N1KaiaUUY2GnEnerSJFqkAzNM3Cv3QCMJvMaU",
  "key3": "LJN57Mv3jvT7eRyKt6ydjo7TLcKCBLCq5cwBSQY7jPHtq7zv8GhQteMjWbKoAYVwKfXhr3UFqKjMUzCmWY3RrkM",
  "key4": "58dFJ3GzBPonvTeoAU5NjHhFtHtE88P9XRg13XHr1YD8f8JGT6AhBJHFSKeoHFD5wYZf7h8xLnDzXytHsUHzLSrS",
  "key5": "359gjujiNSEsLXipMtF79xUDxHaAe4ZKYs6vhEegoHdMgKNbG1gU16pySJYkJs9CoyaQHH8HVn1cFPfcFbEGok8D",
  "key6": "4YvnkUDDahQpicEtTuh2EvjQAzrb2ssqbNuoy8Ps6TaZ2fttGVLwjZj6MjBmVCJk9WjR7jmgfKN2LjbHoacr5ty9",
  "key7": "2ncjqE63oMx43kPMnCR5mgvhDqreG1VgWGvKBkyoWn587JuhMv28YySACK6uC7xwbvEjs4TPz6idYz2cfGorS7Ly",
  "key8": "gzNY97hZ2c6n3WxmgvtoqFNnDTsrcpRAERBjH7Em75icx3i3Tt82C4QGg8iR5ANe12NRvuLJmAFKiPTaQrNJVk7",
  "key9": "4ykxym7M4Be8DT6jxFLeUfMokSTi4C4VK7jg4XaMenqffiGYC6HkQdu8EXMBX1MUejPwRom2nVAWe5LKvCpYFcvx",
  "key10": "4WsTR7GnWW2tiVWoPEmr7rnPo1JNBv4qitJ1Ez7R7DRDdvc3EitH3KShgz3JNbw8uPYMPdzyWChutWD3p3VsPSj1",
  "key11": "Wmtep6aEstwBu6ZnrxfxZ8x3XUfGNtgwMHBpbxaVseuHkFSwyyfhVFGEvDJEmrY9PSBWieJh3Wgr87epCbifES6",
  "key12": "5hcgTn7kUR2wLAzhLgYDjjj87EuupoazHEdscvEtLq2TdtmTkNvJdJSZPPwEEX4p51WCWxP6PzZHN4qrgUHMTeKU",
  "key13": "4iJLosnPqiT4zv4FKtZvkhoYPygt9nT5To6Jxu1EPSqd5Cybm1iacYRD225A7KW9QAb1DuQ3XPmwUfjPJYj5eP3N",
  "key14": "4Ze8Q1w44VTTyDxWtnndbvhUtbnBt4q6Et9ohX1ipR2tFD7ngHhREnfZbisdNcQ61nz3Bu6PbWg56wyo3GZUArbf",
  "key15": "4dpXZc7mkMdTrk8PBzsK7T58xGdCgfyH2MqDDf2JUCSaJRzYNBA41vDTkamhb8NPF2DKwfX2kmhdDom5GmmvHFj",
  "key16": "471PCEEmHkfR2DnDxQFGT6VhMUW5WZQtPn5HWPk5WUY2pYa7bTMh8xvxTEDz1B5ZQej3sEScx9Ub2Rhjymz9qYw1",
  "key17": "3xhoXV95xfZ9JWXjPwsyKzApNpPapb9XU5a2tpsxG4MgHb3CRztZCy35kk897oZ3ys3ffTsuxqYCa3tyVoyBZma",
  "key18": "2kyazf6Zkhn838TPQtP5suCTgbjLTSNcUaqaoLs558oJywKLQkyNZepdPWEUbdujM4DPZWaAatzEKLBCJ4VdhLGM",
  "key19": "2NWDkXw5RGCL5V7iRY8cfdd1k9Bg8ar2ZLpcdwoxY41Wcq68ufwUhJP5JrWAhbxqn91y1SNkCJZcdgHRYKHvpEgi",
  "key20": "3iYkz7aa3JTA1gbLWbtiiYoesxYzGhCcNZLfFQUiDHZcNu9PnEYejQLf17JeVsy2K8eVtYwy9YVaTypLPTHrNRuH",
  "key21": "4SZg5LMqTFVTZbB8m3SLU3R4AWQs5SuLJmYsMBUiEcYShmCWLmfxK5udmVTfVSUuNSQKr5bJakEhm6L9QpGacohZ",
  "key22": "5rxeYhG2Q8Txm6HGTL9F4w89aB8mW4XMjp4AbfQTRvSKtPxS3EYZQaGDZ8rJfR6XAfPNyz4uoKHDxXYZeMvkSuHj",
  "key23": "4S3sbQAojN5RcSHnGWZgEbonRmyrpJgcW39aYmQmUtXXgQ12Z7r4ZZ8aW4ErmCep3vMNwLHPQ7Lr9TqwoCNaWv1w",
  "key24": "Hx71k3NRRzoZu2Kvkp8tHFw3f2EQwZ5QCVKs98VTKz81J5Z8XzrFVLUg4SpjycVZ1QwdzDZwgpNKpC14jtZ7MGX",
  "key25": "3niWzTnpZv5d4W6uw4LBhrQzV1PNwwbihuyz9K7287HAwgdk9Yn63MRLs5x5uqNtFYi6thsV3PfYvgsY1QuiwEtZ",
  "key26": "52jkzmHpMXARnmdpyYvh4hzxpHGfHaomEp2xXsDmunMJayGMbXRqUEaJSTWGGY12oA1n3Z1wDTuTsL3JVoQQ7sTW",
  "key27": "nidBRfsnadKrDkL6X4E1HBjLwmgBuUh3RqgYm7K8YrMHUQ76rroUb66MEGaMv16xeDj5VXWjQuRcSCUGn2p7Rkm",
  "key28": "4xWiakTEngfASk19BUinHtxuRYtMC7fJXCBh42jKsW9xr4gPwE9dXFMYUFHD6eRemgktZkfVYq4Wgh3iyPNMte9F",
  "key29": "63SCMsz2rWPpqsyhnhRGzCKvyJQmoKosn1iQgYNBDdHWvSEDKqXPa4ZkDvBhkVpvzGzsHZ9RX9QpREBATwZCwnsz",
  "key30": "3WRKwEZAMUMbPBtvKCJAjH8zpNwsxYgGbRRP5Zcu1XvNg1ZRzU8MvetUQ3bizbTqvgdmwXLJpZY9w5VDqbvKdUQX",
  "key31": "42qcfWnPP3MNNZKRXXyKnrvHWiwSSVVSUYqva5c7i1r7quLU5HdVGTJaeEz1XiTaYfsfvUf27tdJbnbiqLgBs7ib",
  "key32": "3k7MaJx4KgKjyvbhrS4PCcByT9dTWsA1huKWW8pNY198SxWkEggquzrTZkwnxcrJ1W7jBDLXdMJF5xdsTf8s2Mgb"
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
