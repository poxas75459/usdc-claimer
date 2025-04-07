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
    "379RjJ7BBA2o8N71YLxRBwbtEGgnKGRo4TBLYaXbZDGRPdXuCFdMM99bVqZAkc3A1wtSXAhVAAU8SYZgis1A1e2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MThccekdKBwBfu3nE1e8xi5zXkpo4nfPhbS4CoqQxTKQi613TENVRH8vHSVXbtuNAeLLmAs6BBCbKxkxedLJFtf",
  "key1": "45X7qtitBeu1FbJjpuf82hCTjnmLoijBcmRB6fBPAAPJ8AcKLsT4RXpF2EFPBdG5ZmmdEzSfoikAhdqwBG7jZXPh",
  "key2": "2pUDAdBrUcqL7ZrxubDj5t7uY1uQNBnfKQ1s6PXCUY76hxj1fYxmuFkLHUmWRSRPeLYhFtapdBX1EDm9Nkm1JSSp",
  "key3": "2kMGTyZovpVfZCKU1n43KeDg2w3xDchS7MY7dRHVEbiiJkH8VJscWdRPDXEP9Re2Dh9uT5MCpnqbsy4XvDFEiLPd",
  "key4": "5ViaLyc5HASfdqQDMePL6MS8p5SXzvpyQxebk5TN6eRuzoqMJtW7CHprMTniksTnKHf49XELTzadVRs1HKF7uYHD",
  "key5": "3tvZBvf7AJNmaTfzaMsKbqULV87nBycGkcfVC35f67QnoHeHNBaXtwcL9hcicaxDD89gKCvYszRhzxovCLJzKth3",
  "key6": "3QZGMqgSWuLqFcrerJxdZesZd3tvsrY3Vyd3DkFRJrCpT1CSLwMUFK9a7Gkfkxi1qpodmFtfUovymTPC5J6Ufjk4",
  "key7": "615sWcXQo5R6MUhXBFAyEcpQb3trzxRw83hMHxXH1Ja9c4NgsgQDjZSSx3updmLB2AciAr86LgVHc8XBnyGwmgvS",
  "key8": "KMThmvnWEq22gRmzJWKoS5oYV8QJtmVMd82BfnapG7AfMarPdWt2oqM4ftrZ1ht45nvLwTwT5HmfRdYH52b82St",
  "key9": "htbVRuAyUCCyWwi9ZNbiBEJio5CAJufc7r4iDRb8Epp57jw5j5DwGKHCA1WXnoAbm2Km1MZe8hyBFVDJnwLFQ3v",
  "key10": "3c8z32jg2vx1CphQPwwP3JYzjTVdsgM8f5NJnVkkTogqVRQKvJ96GH7DUHd5v4c1psV19bBJQanK3Jvwt6VC7aF",
  "key11": "5JUVMjnjAdDV95q4pQF8ueUgJkqjjAJDb7XqTVUXe4dvH16SYt9PUqMD6HP85pp1zsGDhCmqDoTzxWdQjuWf8x5j",
  "key12": "2xHJ5otHd5n4ZwZuHhJXb1GA3Mb7Drgv7DY17iMpHYzmKS3nrSCKAJp8LXcJEkiasL8RDQ59MYUSc9wLrKcXE2WU",
  "key13": "4mZtTzGffgRCeka2VK9JUQyVee6QnCY2B3tk1a5HwBFAwYDhRMpHmyCSpZYwEJTBULAUhrSmqDWS2zxVCFcYR5qG",
  "key14": "4URfv6JjZP1fuRct511QE5BKLjHtbnLzKujyUrdV4h7NyJGxjp2g8ocpVznfvbxJaR3vSQV4vcpmqpiyMMScozhT",
  "key15": "2N7jVcv7LButP9QZT9yREASZjKvpTeenq6J7asPxbPEAgjyez4wH2p83N5dzMJF6bjnuozRaKbaQUMQFXYQLY83H",
  "key16": "3AzmGKjLARuSdr2Dfe8NnDtkHvNFN1jsM4rouraa4NQqAbukHx2bVQk9JdzCsgnGWSJNDP4bdoJqL1FiSwwArnMq",
  "key17": "4Qy3ppvx8WoXKExJWAo8ADN4x7YtnW9ZrNXMPHv3oSxbdfu18zqmVscoNFWbNCvs8RD9VcDhMbYXuHVas8WquFy6",
  "key18": "48yQ2aqE5V3mYB8dFe4kkQHFZJvKvrEoBCqqPSCevhAnKj3kqSGgJpYbUHXhHEdDRyAt4RekiGRnERbpEXAyQj4M",
  "key19": "3njhKBZd1CHa5Wf2w6KRypbTzemQB4TxHYcMYzXzmpzesKj1JRZdPo7DGcjs7saQz8iA2fsJ2sfvWrtroxERGkA5",
  "key20": "2wvUfJy34uiDuxSmuJt18pSSdYpS51scgEEJHz7RNbjdPpDppx9DEKiJndt9epexrmbwWUHB6FvpkASyVrAUXPEy",
  "key21": "2QLy8TpCTdFL1qT1nCjGyuZP8bLiMbVq4NWzjJd8UeZ7EAC8s8cUwPXzHeDRqA5yfyqeEW5vH2gBmb2CL5AjPgG5",
  "key22": "UcLo5vNovbyBcSeiawLHAQvfh5MU9zhYFaER47W3TqvxhaciRYVK7ZnVJSJhqw4QgNE9KoNSFk7942BbgZ6wXJZ",
  "key23": "7qEaYa1NUhhDQPHKPMPfZbik4koJJUZmHwgLgrFqPfVMe6oXD2DgEXHPVTncUaasYYKobMX3wxRyYeF2sS57K5Z",
  "key24": "5o8nDqzXD37vHoKvHuuv8MfeZZnWCZq5skukX889st7iuccJ8hG1Xmd8MePfNq6GixNCFckUqYBgCtz5R1eytjXb",
  "key25": "5WWtQijjmZxV6bMk1NJyBUnsXYYzhSXnFevKMjpv8R8JBx4vMwforzpGPRHJB6QvwQhTME2h5Hr6m5xeiMB2HQbj",
  "key26": "631YaCLwCCH5DsZVVJJJgTmMm4tXeE5xaZo3bgUVUqTpaN37CyPNGM841CFBXszyh9H1rSnS7pX3vgXF21bAwTKG",
  "key27": "3cngcaxSJnUNEgzY86KeUQxmgW4nXq8mYHj3oTXuJnCKaaJnxGZu1ZTpDCwAmSbqSrM2doYa93YAaiuzoDZKGVmH",
  "key28": "39xRJhFd8qoiihpTUFdNMi1bnnmqwVDHWH8Dp5n8WbVweYsrHvmwkQHQBk5zsU9Mu3h56yDdKKw3LDAd9GVBtSd",
  "key29": "3q8rnDLyDf2UYcLK7eRyUkcJgfid86KovXkkt87Rc7HTxdYusx5qapeyQdhx2hbhSvqWd2P4FtT7qV4iBxNLX6G7",
  "key30": "5Q5t7VTjZUk54fXVVbvfzj63kxGwb71TPBsb4QAAJRUguMmcssvTNi2B2L4A8dCDLjcZdwh3Vd2CYrQ86hU489y3"
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
