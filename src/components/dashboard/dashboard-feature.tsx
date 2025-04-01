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
    "58Weu4aqGXpiWzS5tKgBcUeQFSYPAs2poDREwH56coJgdKUML1Q7GNyRcHLftnaL5RcEkReVL8GBSLEZKR9H5nxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xb3e7CJdEKW3b5TFVS13r8ZYXmD7Z6Uv6fPEJNJtjqR1NxnDCUHHXeycAFuMcrmucrzkTsTKqgvesA6Zh6SyFm",
  "key1": "5oAU5rNJpaNTRi9Fn2QWboo1o4MPHTmLCrhYhSLBkxYgkn99owdKkDAFUPNaek4NVnUBFUJktgMFwKYKEALpF3pL",
  "key2": "5wujStxLDM81QcPYzdcaZ17JJat638pvsuNQ4fUb36PABTyELNh3UxJ3U2zGi37BZQwyqfzJf6m1Kg89oLifpHY7",
  "key3": "3AoMsmLbVwmDSi661aTREuUdxGosemCx77asvdLHw4QNsS8WJrqiKHWkXc62jYDpmxsNonBGWtyhAC4cwZLny9bN",
  "key4": "MZ5hhnePUWhFVaWnw2AQBLwgYrFPLzjBkacis6RF7unwxvogrDALM9GVTGuiKofcELdDYAPjMC5ZMt2JdmT1ZLq",
  "key5": "4gsprBt1V3QUVcGDiPfuRjeetpdxBs7SURQertHVL4drHSdpvDjvpCR1VngWSBK7onRZ1E3UWTDtJjq1ZKWTBtPZ",
  "key6": "VGLrcmpXqSqdY2Vsbzzs8mTYgbm4DajHttFNh5M9uEmzqiKb8Ec8ne32rdhChSTz8DqZTU2dP8YC5hKion9FFrW",
  "key7": "2L4mBeG5m9LajurV5Df95xrqphZugCSxBeAqk7BD1zJPnvgzbjk38rzQc5V6cj1ZYwfJviWaQiXpwL1geTp7in5Z",
  "key8": "3jwjt8ZooA4kaK3TbuQ8LZeRbsmvAXgpzq6MP6S5etDGJexpQjj4aexYJXVhf9hFNiALAbivWHa3xZ8YCjs186cZ",
  "key9": "5FURwdzRPbP3qjDABssumse1PEy5aP7HBzzLqd4j1ABfLBH7LocQKcvAsFiEQ2AiUfCRrse23gXh9BHe27vobVkv",
  "key10": "5cdyCXfYxEsu4tX3qW913sQRtBHj65Z2SmfG6GMcJnXd9HMTGwjMHwLikd29imEpGHXZ7CWpo1bYqtXGFjexeQpH",
  "key11": "2DnifXsB7XXsTZWaGBcMPBuwDnwJWKwRoELShA4EMk7aACKaonZdzMLaLGZH1KmSHUHAtKVs6eUZYDNQU5dcngDi",
  "key12": "38QYjEYsm3TrQJ4g1J9ARZL8s6QHKEDTN4PiMkPnDU3LkYTvKHtk96HawjbRZvqCi1sdHK4rC5AUaDyaL5CBo58j",
  "key13": "4ehik4PyanPsjp86CXpnK8jhQdTCJXTkLz1F4XDUMASuhaHJ1sCn6JvQKpszcsVoa6DBrLFoo3LGFUkJ5pogo17b",
  "key14": "5LfDKu95kvpfVPgR3ucdWUBmZqmeFevQJTkDxwGfkEoNAamZAspDTUUJBXjm65QvwNJNjRfJxJdR9mTqetUwb5Df",
  "key15": "676NoxLFZngDecupoUwAukPiYyZ8U94EyiZ8yFisKRhehYxGCX9ACYQwfBrxCjfqAmXEjiG7gdE57LcL9DKeYZE6",
  "key16": "4Ca2wQxv4BNFiu5yEKt2rq4QSd6FypWN9QSqEcstFANCwSG9qymLUMytcSL1B5WY25qPcW9J9J7KARDmgsiFm7ys",
  "key17": "4UPmqqz1aHPVtkNib9vRpDJTTRU6L56MNgoyws77sLeCErYWRetTByVJnUQ9ELCBPAUCLT2xcH6X63jbQXbvW9Ko",
  "key18": "2dbQZedBywThxPQ2h7A6C9AZ6QrCVmhvSHRzWYPfSSo6bmdnwB4k9UxQRAzzxWeMLLxF2T9GpneFCwwCqD5PyinQ",
  "key19": "41L8piWSD7YHG24T7hZjFionpZ7MUAVP16iVsjGnRWMmT6ghMXFdiV5fpz23Pboid7ZnzPC3uY3Upp12M8iHT6as",
  "key20": "5R9mYh43X1owvBaQ4oHxpQYFemVU3WffpuWbYvx1oBoujek7sSK3K1jMtgqdhEgtGpNGsJ3BEuGJnm5Ejmf56CzU",
  "key21": "GzBwUYaPn2garzfTSCGgxSRacdkGWaCfmxZHVUKcjztTJ8ue9uEgtDoyyCEmDxQCZyAWzTgg1X2PcVYaaxCBi2j",
  "key22": "2j94FZxorh4RhveVptQAztAY78YRurUE5Vpf1GUfoQDPKBY75rciupkaq9rT9aPdkmzJNQpJFpFSL6c9chmxsTQ5",
  "key23": "2jJH9hB4fvvg8ocdbWZDDLf5hNptAGNx7BaH2oYZtQjDe74QYEJi7mpAoGQQipbZb3RDQBGn7SV7nnWBcXvTGZCM",
  "key24": "tyQaHfQvJpxfvJR74FavjwBMVY5MsmT6BxUMjBuah8KWom4p1bQgre7iQBZBut9NCwE5GMG9Z82A3au6AtrqPxv",
  "key25": "2VFkCFdPhT5vXHTMQ5K1zXLQThWX2nQfGeujaDf4jb8XehCP6PAGL3VL2bPiYyYaZ4238NdT1MWxZvG4oLPJK87Z",
  "key26": "25b2NCPi7uTSUidDc3WzswW5WQ8vps3afTxoY8udJDz8APiLzk1zks3EPxTVzisEAn7fxiyGNpi1jAug19UPhmTC"
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
