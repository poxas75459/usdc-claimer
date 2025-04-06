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
    "2BMJuLH7N8nzzYLAzVCsxPQCKzBmizHkkmmqJnBKk5LUdXA4Mmhuj28rnPkMVqb75pUdpG26civLNgHgPMogY9ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UsyJ6NzPNmFVCXhxBgiXEfuFd7XtoQQNMBHmtX2pLKUtMFWnjv44xqbzVkecgdBDMKUZL48Tyj8rgLQrA4jmEiw",
  "key1": "iUsBdnscQRHdAKCgv3AMPgL8F4pMN8oqCh8ex3J8dUw497cu28s6oosCPYQNbxyRECxpHV5HLaTPhYYRhSCXPMH",
  "key2": "27495YoJV1e4sHrHbDfTRUuv9hwZWAio2mAYBbAMtezNkxAK6ceQf4ZTXqoH133fbxin1UU7VVeVaa6TKFPhYeZV",
  "key3": "5EJA9pz3AeQBVjyCnvGvF65U6EWvdkjuWca9Cjrpy9rkDSqtf5bo2SohDWuL6AJsqpEure5Ne6v2375V5LWL7QZ1",
  "key4": "3qHh8HnmwG2ktaf8LWpugKfYc52iyy9gV88g8ydVjzFqQwaXxbyM4kT78oejukzntRKQA1eFtGsmnWSxLJM1a5xX",
  "key5": "5pDLCdaxunUcarxSaS86KnwMiQMQaLY1oUH1Gmn6iEezFcobY1x7uGHLXDMPLBaWuKN9FSN3S1VXqFMZsozqZujb",
  "key6": "4Yzkvfaz4tZsgqN9gNHYrk7gCZwqEWpWnZJrCJaA9WCBwzKbVeSHguvy4mGjgkK6sN2wkmmhH3H7GXpYsQoUi4Ua",
  "key7": "2HuyscBVBrb8C48gDp15SFzBxd5M6x3zEbBcPBa41UPsyR74291viaKdFRpWtgobhEJzWmxqVHncFixgUYb6NFYy",
  "key8": "5Qp2MhPtaw9PuRkehtvDHxkbarRxSQmXtWomT33R6QVLedMYsMr9YXgYT35zD3FgKS3RXWLcQfmF4qBYC85d8iDp",
  "key9": "33bhPu6ANzrSoeik8mZE3514qVniqKjEAa4cbufLrHZSFgXQZync4yZz9Z5s7Dxvqg5ypZJqBdz8C3bHgrsTEU9k",
  "key10": "2QwsdYmHoG7QJV3U6Q7u6ZWVzMYT7UdyvmRWCSVvXwrCaRnFWMLe6xGhNtU8jVPiSNWypL1FftfZHvfULgJZAcRK",
  "key11": "2BoxjJtL8VTBJLsfaWGFKh74KXFfMZ7cZ5C8qRAGnsZdMmieLKHfd8S3AWtmJGbwEMZdcQcFpEcdh4aSLeVHotDz",
  "key12": "2UMqfuzy9i4UrG9qsvxFXWiZdLBD1thUF6L1q33ML41fjB5tTYjRK3rBvnTrdY6Cif3wCgV3rJKr6C6ybsyPqcLz",
  "key13": "2fYJ35Tk32pChC39mwFh9PVWamzt25L94rjtBvUhmRf9KReb1K4gzynVk3isR12UpvZMCDSGmQryZcZ9SaJBRiAN",
  "key14": "33nge9jppueAMYSuCjosZBQQzCGj9Qd6B4fYyitFTKDPih8xukrBD8wiCMYdZWKbchCMxHyt7HkSPixdbyUvG542",
  "key15": "23j9wr2sNVAVEffZvw8Aw6rENFxv4N4jYHJjc1nwzanB1vVptLHzbMn7u7LCs1bGG6xSCtENA2kdJxTM4pQWbeKp",
  "key16": "34RWDPQCNCyrYzezgUPWduce7gnWmrjpzxQsWFanXqaR91kV951kQQQYrTbTNvR94Zgu39kSgzm2EngW3qZK3XDL",
  "key17": "5CD8RyjTvt4WPmM8XNbziJDvcrG38KNK8VKmyTxNAyCCBHetJYKPKkd8eQ8Ma7BtEFR4GBmyRaSurraKufT1Mx6V",
  "key18": "2EAdDx4gfZLkQn8yHUrkZ4JVp3MPtofjDddNchF8tXzhQJ5Peq3x3n3EuayTzHordx6f1gkrEPVHDAUXji1c6nw3",
  "key19": "wVrCLw7GLnCgNhk7rRhv8VqK6ahFqpkVgy1BJoSvKGMZoBSMomo4bRSeSZmkcvF8f1gsmm5Aq6iyH5FZDf9WzHU",
  "key20": "4yLSMTanATJ8teT6HQM7kJ8wpHRC4a4X84FMB6MerwEFChaueYY9iugxzwByYnWcPaV3eUaSifoQQzmPBuAdFpPz",
  "key21": "3dnRkLj6yRWWL8wGgAnfWVj7tJwuuup9cncQ6it2w71oCsQZoxEgYaFZ8Tkn9FyWW24fPF7MX5JhJNAD2jhmByu9",
  "key22": "5FJYH8NgbxjoT33KGptRhjPVWvav1UWGdAXysW3Cw6s7ZBiCskNTGj4srhcL7bTxfhNKuwL2T9YHsGbwaqhdw44U",
  "key23": "2ojrfu9EdwwzMd5oVgdxvcSL31ejxUJHDjQaHgfV2VTqEB3pwng9Pza2rChRQp1boj3tvrTytTTmnTDWV4itSFff",
  "key24": "Bhtq3QomAhD5cBkT2YtfPW2p1CV7swsAqwdsBjknHJ4EC668pD7KxbYH34aiZGwVpzaHE4gpj58DdjaSEPvdWzv",
  "key25": "5ufx2tHgaS6MvtDgXkNUgajH77xHbG2u8ys5U2E9mLhDuqsCVL4V1UPc3yqR8UQELEzC3YnoWtMA9fepQQ9kNMHG"
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
