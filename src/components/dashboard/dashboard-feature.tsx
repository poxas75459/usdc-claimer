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
    "67BngokVzMwbS95WSF3wGLHQ8te9oogjMpn8oxYGVHSkWYEWKEEYJrqFU3jmK4ntQNjiBBb8BT9rCitLhiapvPJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25nnXNJZRJaU6GGUJT2MJeVJ4EGPNJF7gv3sNXADLoGZpkV7YdN91US2awtfi5YRPBd7FeCWTdhFu2YhKT4nyoJ6",
  "key1": "4MM3GPzEEECb7m2XhAj1xF1Ab4YzhAasARkmWHRBqc7bnc6QWQLegYb4U1ERVNdBL5o5f1qTb1z4mbbjpmJYQ3oU",
  "key2": "5g3wa6D5Qr7mD4Z2YuVq5X8y5h266hUj4U6NcqsgpBZ27G4oHDaQAD349XZmZxuKHwPYinajLishrTwdfJktHK1n",
  "key3": "2hz8HihGUMs3sgczwvCEXSdiTBGq1kPM2BJacrELuABr5qKFYYw58hL6Pmd6hkv2tGMQEFuE6vzDcTPmTGTSGRR5",
  "key4": "272x4KhKG9wRHvSvDHqSTJsCb2UViZtoWCukz4KytnWMuuF3egFbAgKYusSg57AcqjNTHfXF3hzdY6F7mP3qyxhN",
  "key5": "5C6YGEx54E1XK4e8B9WG4D8YLTCmZgSgXMcSERyDRcsD1Z1WmJaxEQPPZhErft3VrgwVra9L4tUTTucMbpt227C9",
  "key6": "4WrBEF5h2NPQyseypumZw3VVWrPzHT313HbvvDvnbZCpbZCxeeNs8V5amfNGSAKXwsm9AEbCaT4Xf9Mhdqfumgkw",
  "key7": "4QZZmN5UskPvk7GJqJp8YV6PVHUY1u8VjokSz768gBd2aY9Sq817tpVKEatMSJ2Gg9oUnan6cU4xeWyPZwFLfAyM",
  "key8": "hGebtuWjNvsZ9CUHNowoRDcGcWvWq7ATPq6VvhmU2qyXiRSJ1Uz5cEGRHmfFpARXZMG68DZGvS6imynSEQqhkN5",
  "key9": "3F56GZ8kkRw5WVBZwmxYSkPeekj2stHBMh8dQbSrUDDNRC4j6CGgJTZH8GvepwguUTkmrjwpcWJnbxyxbBYhAqbj",
  "key10": "iRNAoz3XKdXrgTDYBBaM4NNATPDc4Jfcn5hV1Nik7PpkSPrmrvkwBzqgpfLVSN9xkSGiwb7knaPWrQ94tkr6PCH",
  "key11": "4q7MNsQNcyBzRusnsyeHSxCtHzd2u9LvR3eQJ5RS9UkBn7UchN63UbZY3VBUaexSutWR3KJ8XtER6i683ciw5jHr",
  "key12": "4JSXbG5cZdB1bu2EkYLBJk8AwGAqD4G6a3rxdtsmvftLbcpCwqfoqCF1QyEtjPtC9AvhtB5juXjeZWYZNfFk8Vai",
  "key13": "4kM6BkXJZaV5vff3xh7YvALkkHVx3PdLUze6gjqtXveefHq2Dr3k3Gdj9TmTdiDyLTtjMWmVgq2MeH5GHWzJeqx6",
  "key14": "5azo41f4Pb2xmJyGV4xw42EPsWLyZztVau3BNqPnDgnWYdQWntK7vuWJG8MzKs3oEodKB1Qx6QpMfJWqe2pLHr9o",
  "key15": "5jq3HsSxtyV4AYauWoM93BnMRr2yMEiRkq45gWEDJLjM2kYZtuQemmy6E644CgoVmSeiLBLJngFqHyA2Ui7xXDkh",
  "key16": "27hSHhf9EF5FVCthdmMTHW6wHe5uAQJ1gTWQ1ar6d5u7bhai9mjm6vrbYrsFKvDhJRtXvqcX8zuZYWsqR6PRoQFG",
  "key17": "4JpJCJpD8bH1oPeVP5ArSkdJwPti9hMXvw5PiYCidu5aWeCNDXTcbRdp448M9uy5dFvPgFS5eHfoFLj7D8FhrN6n",
  "key18": "5vpaUzit4dB9o4PPZEMmhWzbN7tEU8eNzNta7EFv3HvM7sNErkwRzgsqUS78TYQPtT8zh3cBivM843ZSjbmLnPbm",
  "key19": "2FC6gVu64AR9FFXcTrttqpRkfFjtei6AnVYwLaiuUwLQX6dV3WMam3Zrehk9CP8aCUJpzA4o7vc7FitMv1r1AXqn",
  "key20": "4erpgR44i37ifP9Rarb4AdgZfK2p5WRUzPPz7gdwP46TSDg7jEFa1m8or4LjPXSHJaTrnEZr5yeC7inDM4edLYYr",
  "key21": "33REYGzPgYvb4gXcVkb9MbQfmWZcZTNgL3zqgYmHakXCnfw5Z4nxu3Kq7W18DF4iRvSUuF9B5s5wLgLrK7Q5e9LL",
  "key22": "51PF53VXS8BCCnCXyDdarhN5uTRk4WXobP9C58csVHjCMjjtrzYRGcyPVNLoHR52geHFu4mGcxkrBhBwcFtwJPaT",
  "key23": "27RjyWD7dL737CM7WiUZBvy9gfTentLzR6LcztG5rNmpjWoD74WrzJd9jQRa4NqY2oTqkiM4HGRquEgnCpS8aXiz",
  "key24": "4QxbjATsD83QwkVcnbBfwthR4oUndxc6iWKTSH7G3uAnHm8jWSnJY7rC1tMqkjBYEqkWgn9VgTdkqPLBGcZvGyoB",
  "key25": "9EnScx6aLdqCZCnKS5bmM5gPt7jQ4eCB6UTrzQbJ3GUiYtiUaWCTJKtMWyNC7r6caLwGaWSw34j2VPeR1AkYHje",
  "key26": "4uT4JKgk5YktRLLfBFGqQAm9Dpwx5X7JoyhwSKVD3LQVKZca5dcovW49Q5TZn4Uqcgkq8iuCzCXxSUyiJxupqvT6",
  "key27": "nHo2Zj4qmuB9QpALfE5E4fSjbD1fYXkoydxjmX5DnAeRQf2sRePxeKvaBfvb58erK1mdyLmCpZXPqGhDWJLNLTQ",
  "key28": "Jv5y6ohL1HtiJRPPF5aqfvdUkHRrSfMstrMgH6memEWLPibss636e3tdmPWGeBqF2KK3bUA9Ph1y29dvizGSaz3",
  "key29": "2xkZmt5UkqFhZmD2z7s8j4XYMzDUU8xyGjaCVkgidNDAqm2AMdLEeVSzZAtEcTVbTCLZZo4hLm9vMyVfqrXiP1X5",
  "key30": "2dYocLoaPBwtZuYEPmXaonY1gmhdzHo9oY2bxZ5h1SbTHq7ZoWH7cfAkKpxPMG21SpT7W6QE9FyTZBdBhddgDsoK",
  "key31": "2WZ8w7pWPNENmiwyx6Gaxc2Cy3n8Agir5kCuT8ZwtYAm3hk4yNg7vH4SSKAgSi3Rt7wzJnG1iVaAYvESKgStYxY4",
  "key32": "UJnaukTYvm7kzNzyMJVcxhYv8f49HSjG9aTHg4K1YFdkDSDETQ8QeZm9mkL8jDw3aqnxqCFhnppoV9CJLVgFDZj",
  "key33": "35tkrATUYUCg5mCQrBHXnTQ7RhLSPVbnWW8NuMcRkSbog2xAMX9BVNRHUTDtq4J7sBYFAuteawfyTXbTCkik5aJn"
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
