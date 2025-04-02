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
    "2anjdDZYxfKXBsrbeMXDQRbFeWbMqw2RZMF4pXSF7jivCykYrKPXD62AkrN2GZV29mvnriYmrYYx187Dr4sKdVd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKFHHHbMwonNjxeLdgvCLqTUiGDwrsdYRX7k9YUhAKaJEnFzN9CYRkWmCxyeWYMG3guU6UW57JP7zqR9ziLKDv1",
  "key1": "4umuvVeA8CbLoMmJsXm9knLnZXMamQ5gbez4BHEYXrR8ugdPom96U3SE3uDgg7Rb9GW1vsxZmKS2GrtqApaLnSzu",
  "key2": "3Av9JvGbhJDvdbHx5BBuvBjKFU1TANYX7gFqhpxxCEe9gHBSHn4LakWjxwhfbjdQNu8cPXwosqfJzgfHaRjTtidH",
  "key3": "2SpTLrTaFfHapLX9X89Rk5sxhBc1J74LwhEQeRm9fBY5ur3F3N6E511TnbTykLvz8Aa4s3BbpHCJRzJxm7RMJuXZ",
  "key4": "3oQc3MTvvUqSTi7p2qv2aRuZQnJjCkZtYV375UmpTq3nrgigoxX3oyEfPUrwpeAWsdjDykHcpMJULeSWsiKMvw9K",
  "key5": "5CTY2phqBVoxSzUcXSpKHwJAAjxzrj6ZnTZQNcEmXwrTXWpTWX5Mpb3EeHbdJfdHm1zLQVfWjQ3QYDwZBnztUmTX",
  "key6": "3Lu2BSfdqbem28Nk7eEkwLzUafBqDzuwgGZyFE6VoCyUKAnSwGmh58NWeJMmTDpXBmNLRH8sQggh1QimCiNXVwHx",
  "key7": "2jdSq2zhnxhKJXzbP3xeTn97SKzMv9rS8T9xEC1T5mDrazVbDzkmdF3ZGJbvuj1obzS2kh95FxCwVQTkzt36WyHk",
  "key8": "9xmHv1ZDv5GbfvEC9MiDavLsnjn37VqHh64ifsoHDYMq56upRYmCa16hWy86wkFL7KBxysajWRLVzTofsWm9kHw",
  "key9": "5uct7q6FPpcsiccUKexvNwbbnscfVtW2wLck1n9kcj5XY9dzXMrYSVm3qn5dvm859XZm5J9dcvNuwiEYSG33sZTB",
  "key10": "4eocYxuusLH4Qfw3wo7kq64f82HRNJ7z8L8KbpswwX5ZJiSmwpZLP1xxoM73Jf79H752nxTsP44VKqrUDNpXmu6M",
  "key11": "4uHfPE7sLkDLE9F8czeKvfSHjcLF2EU5gweJ72qWrSJ4GY6NK7yXjFRQETH7XmcpQt56os5WWAB4wqVkJvWx7KFZ",
  "key12": "iULyoMtA62r9pipjGwB1nvVPiDTdu5GQyMXm4FeakxZtTZHdwbQAPPWXNgtqJCPC5B6EKVami4Wk2XSUchNSPW4",
  "key13": "25uSDpPPYg95fJrJ2i7eHFKtBwNbac1KQRdBHy2kLdom8rEzaSBVETRJXo7syseKG1si9v6Q37S9xvsesw2J5Mhk",
  "key14": "2fP4dZ3w5BouwbdMnug5ZJHdenM1gkumx7151QC1fToTc1bTG7jaDvCeLFZTWrmLKY57EgTmQzPhDwjuX4LGK98L",
  "key15": "2pvbcsz652S7fRo3MZ7yYFM3VvxdRykyRgLTQDCbTGoH1GkWWuyo7owmsUXpoaUEDbKYbnS19t9koYBXz7xxhTZJ",
  "key16": "4jsHzSMGqyXgefmYiW47FtNcUX8Cmbcvy1or8Zue6apr34SdavcgDKQ9cb2V1S1e831EQM1MBphZmKnnK3Gqm2vN",
  "key17": "5RomfxWnVea8uge3y6wg2CCKzEqbsdXuWNExwqFz66EQZP73oVDdgVBCaRmKch4mySYVuvUM3H1UZ2ph1ScKsg4x",
  "key18": "61jFyAC8S3K5HxWNj2LhRoMgfcHcobskDD7Tk5JDaY9QtkS2ttfhqUTNdWRnNKUQwCSYvqwxySmZga5cNwKJoT4q",
  "key19": "xWMQgrT6wmZ8gL9SZmaMZuDxAoMe4mfjrXWWKBr63d8vYmBCkDTGqCjvQ13bR1DUbaihzSMWGDdaSQdL3MQHztN",
  "key20": "3KdoxDN384WkfQMoKL8oXSnnUqv1GreDdEF3P2sUL6gS1tS2f4GP6fQNdVUAZ2RurjHxxbxRXTmdvQkcwfT1oQDX",
  "key21": "4JRcf9Ks4QpxbMx2LzkabcRBWF66jjY1Ycm2XxpbXG1sD8ZDWzZeZw5ACawj1anYZGbVJNk6dfGXEAEC6DZEHzUz",
  "key22": "zaGbFHzAJcTtF46yoz3tHa5v59e4u6aL77P16iM1VSTr2AhSjEe3RoNkjeXG1PLRW2pwDt6XdR6h2YHbBHv4cQc",
  "key23": "DXX37mh1asyn4ZyHoHshAeyHM2V6jkFTMYczHGdYzUFCaVA2ioTjNA2JVi5fGienDJXUq2Cz3HgDxUT6eCFsWPz",
  "key24": "5JWbtq6arAhkg7DZGnAVkL9FQWrBXvYnM2wBwVbxWQapK2SWFrMkcZfWTfq7zQzNJLoTigYKanHy9pJa34Rf22aY",
  "key25": "Ez4xGzaJ4X9ewdQratNwbWQgyJCDkz54RrqvVh2gWKMejF33VmWr3U7j41wG3LRTvH65XapuoJw2N7cyiAneQjJ",
  "key26": "m5X6xGFFU7f57YTd5BL1aCtnq2DBNnC67wfMkdCZrPb3fDEDmkyvNpiKMqqNFN3Qpd1kwJm8q3ajJL5oCADQM74"
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
