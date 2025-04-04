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
    "4iDUmJf7kpfVTjX65M5RGGGYvCefLZiuFYp5v1JxySiQXaH7hqdmV712M5ay5Y2w4P9U8WauvBp7nuXPrx4kcSBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdTrvfJt2MAGbH2D3D19EAgJyLXaUcE2AWG7yd3qssQYbPi5oxWpRFtn9goc3YuX4VWmYie88oNc6SQ1ZkS4xN3",
  "key1": "5ktgW8CRwnExxQMEbK6NPacD4dN1uW5hw76YkNEPzYGhHz3h3A4n6oJLSi35SCm62dHkTDndg2xv7WXT8cmewk2c",
  "key2": "3DByaof4yanj7gueuf3KB24ByYNrkrp7rzwNoHQuDYYP3ED81zEEgS1JMRqMiAQ4BKV8KDxKHAg2B7z8EW1kPjs5",
  "key3": "53gsVLTUBSFdooGfnnSU37GwSioEagmnz9W7i8Msomzu4cyXYcm1z7vXdhGWW3scppP9AN3UywH2hu36pP6PZaq3",
  "key4": "5f6ES1eGgdePYWwMz2LRqkMCCzWQadQNKExcUCPcxV6VWmdjdpe871hdet6F1gHf52MV1wESRkFqHKemAPD6FTmT",
  "key5": "4RCin4y4wMySU4ZmJMeRAACzXU3i6rQ35QiXBrRJrUwMSJ4kyVjBnFWVmt5ndHTukiYfapTo2D2a5iZZncDhpENC",
  "key6": "5NRswiSumsUdCncDH1YHXva1emeNU4hQQuJrnfeFRr672vv33kQxdteUmFBeSWkbQj3DyjGk7mBFWiMAZ8KYMosp",
  "key7": "Dn8h4bL3gVTNWwYyKLxfrR173XnXBf2RQMoyJ1ngnPJoBAVDvHZDh4rKA2N25Mbe1c8ZdefJn8NqcChV9hJu6ZA",
  "key8": "kwhFEVb3KYjPNeCwTxN3NGGWZaybZaup5PZtbQvgsqpwyjQ8LKr1BRTaaN5GS4KzHTcg7jZHLTiZ3ZWH3Himj4u",
  "key9": "5Zfic9e9jHTEXmRL3gdvJjGLgcKUB7k8kQhTSpCuHgZv6eTa43TuMc2MBVRR978QywFdUphG6UEt96YDXMBkNDr8",
  "key10": "2g17xN93PWNSCohe54YfbDqMqkrvUzJ9aCPmj8CqCaA8JQ2GGHYWZTL3NUN94CqKf5yBZkHadAZ6HiQ63TJF3ddW",
  "key11": "39KboK2GoQjwsMwjd8TMyuwqfDccKYAFd4qfz1NSE3r21HvWMFtVNNPbsQ79NvHceQu9LjsYoGiJxiFTasdoSMou",
  "key12": "5nbRPtLr6UNW1JdLBWqxd1tWEeJ1zQAevsFQFBCrxD1HtWTW6MQHyiSkmJjiebwxTsRfCJEPXL9cao4NGzM4uZd9",
  "key13": "55f1uFx5YWg2ip2Lfur5p5sUfx2EdRr4WMrbDY8L5uRqRaWgs8iiCJkASG2BNnJddWk81qwtw5yRzPtdnjx8LaiY",
  "key14": "5bcXSYAt2jSSgzTthWpsJ5qChBwDKrsWYbE6UkDjErc1vCMvmM6k8o2NVYp51vGgrbCmjrweQV22Vf25uwvXYA2e",
  "key15": "5j6d4sqENmd5dxNHJHYwXUJ7xhPtKe2rLLt1MRsXiHGS84t9m7DNDq2EXMZhZhTA9KuQTE6C17LRsmX8VgSTE6iJ",
  "key16": "2Q8PUXCk4oWTL57wMQZHCoC4J3ZU3yxN6L37dnPSmfmmMDVWdA2jWe93WwFve6myYYTCHjqQ9DoGZP6uvbWgfymR",
  "key17": "38nWk8G9qgBpMgXSh1RXPuPuz3V1JQ151KWii55yRvThEfektA1vaoRxifN3u2MxoqWPjZKJNmyVmYLryEtihFLY",
  "key18": "2bS9QtNvp9Ye9WeD1LnVSv7TWnA7ReYJGWLDHggAsaTrRYExi7ERwpExPyzfAFXQmDyku3MV5yxyqbJsZMLGPz9r",
  "key19": "5REnBESgR1Y95jD8meBEVoKJLSfRAWC967DTWG4WoPnjdzmgJnjDHYckAkMscMmfH1zcduYkNcQ8aKA3tD49kxdt",
  "key20": "5HsQ93dYxDB2QSyf35e37ieERcds2c1r3UijgSFN3wgE21v31NzjxoJ1HocDrNrC2eUnEQ1R8AXoKsioM9Qv4nP3",
  "key21": "4snxx5GpBn284xPDbpi8Ha7DvbxV4a8YVpK4b9uyBMqmFPadE3KZZmwEw7XV57z653CZc78VtS17jthqmPybCjHT",
  "key22": "4YmxRTesXde3SZLLKZCy2yAprcWneegMUauHSsCPVQNrm6LFGozYAAsdkjCLBNqDMhEpXF7TJrASGd5tj3AzuMTx",
  "key23": "3oUfTMq6bJkWa3UkfTBQ761kpWvcBhKWY6SpAi7eSLsSgtQXTHmKmvauZZDYDD4RWpYocmevL3j6e1ApgS7xs3yW",
  "key24": "4rUraCQXftzCQUznnCTc3uuLVvpA6NbLiNKfAPvAndgikHqA4TNq8FRRmAomw3QJmy1s2CM9n1RaBND7rNd2PLot",
  "key25": "R7rLmMphXQFq5GCa4QrGAVrVkA82NmPpJyHQuEPWbWrVbwc5xRdnqA2btrFXZKJyZiMtfWr4uddanDJ1tkYuwA7",
  "key26": "4M9SUgY4pxt7wxsoAsfqPpPSkhHrCiL2JxAf2fh5C4Vq6AETJxkmy2XKvfvtuRMwyGAQix3SACbAFZezgttrmgHk",
  "key27": "33JhnsHLVYzp1TbXseS3ivEe4Ex1mdQQNR62Mhd93TF2sdran4qrLLBLj3dk8Po7EBFRnFwZUGTcN4An5HkXdrza"
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
