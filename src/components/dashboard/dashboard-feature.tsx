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
    "5KAz2cqn8mD48snuwf9zq9gE9HU6beQoRiDtQFqCJLtyQWxUwNNVzGzYBnnCDdBCPWuLSMBJBTuxyg82tZu9arwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5faCgwZXRyQhAtZqtp2Ay7CfEQ8R5d4gGrLTvFvXnyzguQ34Z496f5MhyY3uPyjgRh4yEVbxQKVu74h3yUgvKCUX",
  "key1": "3S4tvHUBRceqhoV4t8Je526byZZ5NsTkojU93UTLWP5Cwy3BL21QEGpWe6njn4LyZpz4tQwWZsxo3w1Ey6e2jbfN",
  "key2": "5xnsmc1Vi2YDz8ATWb1WYMdA98X99DiPcarvLsHRyky2Rv47nQbCcbjd67R14kCP8LFzmqU9FTrb7L5svqHZtKmZ",
  "key3": "29QoCqechf2H9fKEoQCLvVrTGhuUaFTZPDeTNRjP8rXsr9VWibtjQGSTQMMZBD9TeQDJLy6F5aGyVyVmzZrgNF3s",
  "key4": "334QcK33Rd8NAok6ortY7KSmgoyooUGnNbseaEt9Pk2ufiY75vXN9f6ccm94tNyCXSSekPtjgPPXYZjCczuASBRB",
  "key5": "TgyhBubTVLyTQf71X5vRceGzBNBK5RyAukV13qXVKBhNEocVgPiMUrFgKmiLTXjpYawbWKyC1pEajChkprgBaav",
  "key6": "2aCu8h17uZvR5N1pUJCUiadmoRQ1ur6dT8gFm7sBjX9qCE6fqAfmeZbtzs7cUCca6Vk9zr4vnPzEpTj1rfzQkjVY",
  "key7": "2TBf2vhHRG47f8vA3GE7WgBcf9gjQPbf8JMpvhbLtjUgfZo3SKqE89LR3mQ5snaZuH85v8rpGxYuTbMPMr1XwBNj",
  "key8": "4KyVqCLe5X7Zw9SNKeFV8WGvDsrMhS5soM7DmjNu5A4DEaKqb7rrLAPtcaQkWpisUANMidUNW3yLdGmvFNwyqXZq",
  "key9": "5gqVEYpiHY7veiQj6xawAZ5RUphkfwYHZmvG4ZcfJhySBQLSCH4dxgPV6JMvTwtsyUrw3HCQXTJrsjhbrBpFRjoa",
  "key10": "3cRnx3Ee9uAYEbLAYydVG47eu7gPp8dtuaUvfAAsZSJfPu9ukFSLfvDiv5hPen5tF2BaqLifKeR7cX1Am95Zp2je",
  "key11": "5hL3j18sogZq36Q8bwTiY5eQ6cRGAep8tNSVVN7jUGmAG96kNinY72KjxQagS1AvXktZqv1efmnHuoMaSRMTmcWU",
  "key12": "5ZDkjxFKtPJDUbdf43VZfznfFX1g4vNvBufunmDiXzYxMVAMxrKujxgjyuLQh7bGZtFypaDW5eeCHHJsJ9tJ1yev",
  "key13": "2pHKEUiKTGYSHZtpWs3NEZ4MAuscDng2f4UBwNfmSrHrvoEJhMLCGYhUwyuCymJhnTME6z77hy4R7tznLbDX8L7o",
  "key14": "5tRTYV1yNKyCfdE5KuRxsz2NugGAYCYwfYGuC6X9WdYd4kQjPzRR8S4eA5wpffV22bRVxHws2AEJMvDJTjJJhAQN",
  "key15": "3djgCe8B2jZ4MtNsLwFrzQwETnhqkMqjSCCFnh2GjQS6wPzTXvxTsSejSArYCKGqJHLBAjViXksqVSdhw7kjHJGx",
  "key16": "goMLtNeWbBj4QaSsxzkzykwZqP5FKmyGan9qZBPVSPpWfiPSqwZV3we3oa9NngFGNcFDjZGyqQjM3TuinB7pBtM",
  "key17": "3qb8K2n2Z9ZjMcNF6rNuHRdyFzEsMkvLbYTpYiKQ88HkJhcBLYaoZrCfTSuZcvCWvgPm8ihZWKv245yb1rkBtbrM",
  "key18": "4wSd39ZAzb3hj8Wr3QZsW44iJEkxMfVySTCcMz69Uy1AHpEqzc9txtAzFEysuHmt4A1Pcrdw2FPe4Diw2cTbRQuf",
  "key19": "pnwj6PG4vYUJtS5W6zqgoLB2Uf9ZtNNG1b7NQuE7VW1aWSraUkzLAdqBmQxhUwfVuySBmAgWA5JpLnyHWMy9rES",
  "key20": "2fZtEdR7q65quC97MN1WiUTmsyUimgG25cfp57S82vpHHD9hvPqdCQHQfB87ywkJucejpKaiUUEf58bCmiRdprpf",
  "key21": "41MrpmQS1VLpxF4fd7znNox4M8Rko12GaoAwU7bKo3bL9gigwbUHDJE6kj7FGuFE1RUaKmty2XRHAsegE8ZDTzGQ",
  "key22": "gMa6yzmhMkkHN2E1QgmnDZacVa2ufE8yx5nRdxT7t2Efpas1FTnsehS6fZsoThr4hafVJHS6tbSMNvQrqWAeZsA",
  "key23": "25PsmybDkzw8pQxfDp8RHdmmd4YbK6EEUZZKjjKz364CXeFDzst2X723qF37AYffe7NAuZpAo7YnEds94Cv6sxxY",
  "key24": "3MtNoyyDu5E2yaAv1DELPNnx66WvrDAdGbZ5w76YECcam7DcQaWmWZpTarZRwnRB64JzAeMbEPXFRAzHvyhexMQv",
  "key25": "4GU4cJ9jSbvELscNcMeSBwkDWTeYFVQ6a9w1GShuRxF12myMhrx195CZAUWd5FSwpjA5tVGE8DkqJiQc8cUZLduu",
  "key26": "4uWMVmEToVAAWpAsUARHPy5fPgwHvXB1LJqdHMz6xLECyNsUBaJHL7hB4YKDAJvC7AriVzGvv27mLYhrjC23oseC",
  "key27": "3Meiemw5v5iEvN78ZJLFaW4RaYi8ZuLZ2f4QJsj6GgwCNQWmUenNZuwsfhoW11EJ4vsFVC2Luyk4mXjWxh1RLgyB"
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
