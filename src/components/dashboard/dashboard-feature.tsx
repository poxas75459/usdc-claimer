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
    "3JyfEvRDjaotg7d7VadNE5YtPv3Bq9tRgdByb8xqCUdriMEivJibqqYDJB5kq7qRbGDT49u8wF9cqUoRQdTHuDA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKakHn42BjCLzuMYPZmR4zPK3mHNxpZbwqp6LDKb6zgHncgvQpCcMfnR7rsZyJUUWBKDXYC6NZDNPSdRhxEeDVr",
  "key1": "4FmrJWFKbzvTVDZhnWcFh3yhyt4hyibD63oc92ydXQ7qg2ns8gxXXF1sFre8fqtzBkivREDLWzcT3WeGzaVcWTKz",
  "key2": "5y9CcF4A85qo3udRpcwD47tgTWhv8RR8n2gFmy4oj2ZuGkiA2rqzcazo3z65yA9JsG9kjdKB1hmQUcbQWhjPMnF3",
  "key3": "5HcY6sMP3nTTWvNeSjNc7qmwbhc9mnN2p2VDpwLJVt3UhwAu9W7VhXsFXynXgpQs9SvpSLT75EYqatBAK8vNTeH6",
  "key4": "2LxrXHGFLRfHH33Xa8iozoG7n9r3GvpLFyYB92W1HVNpgGaVkMTneqyVub3mVdYCZqto1bwLyHpCicZY7zQ5aU53",
  "key5": "5y7cVQpkJhDB89DcrBJaEtVTecq5Y19HRxGrToDKPtdXsNvBy4Ej9wKimWcotnsoYLqrXjbribYjvGERR9ro4QRQ",
  "key6": "4nh5BzvF3Mr856tC3fYNxonAopFRaztbQkW1DWbSX4BbytoWofLb4wW1f9yBLxsfdgaJDoyGjKZPtHowkzHBQ4N2",
  "key7": "wMUihVWrrkE7R8TkBduYarKbguP4SFTyZGxL7U5YiWGagTFce2ckgvepd6eXdnyrkgADLeahxeNvBD9QtCnXxEW",
  "key8": "5KDF5LYAwhaonXg2NpBBfyQdQHZg9PaU25TWS7rNfvb1gTP2jMZsLPQCXNcCMrZowCdmRYCov12CTaHhQjfAr7DS",
  "key9": "4rB561AzHFRX7di9EHcbsmpTV4wQi7WV5w2G7TqyAY6bBpUomwersVGq4z2cRRf1WpNuJXeQJYk3oEieQUc6jJnS",
  "key10": "55jCUzcYZjnEJYwtU7f2eKfXgYFNio5CSfEScxAzHW94ERecXrZAbWyXxMyCKquuDMT1PS8Gd7nyFw7MGxXcGU5P",
  "key11": "2TLP4BJVVmhPcLsSiZFgBasa4P6xFFRHXUErspjnP7TBcq1MuhGPVnnioiUK9kCGVTmLL1kQkTy2Cxig8krfDc8u",
  "key12": "2vYdNvbJTgoWKQGkbzLZmcrccjVvnxZXAKi2cUbEVAp231zzpSvkKTkpRSwPPGgCxxs6jdkZym7Twh6qyF4fti7G",
  "key13": "5Cvxq4EuNMNe25LficRtvXSZdzZvZHGihh4q7KYy8a19HE9KUKneZfgPsjJLVhzZfCA8wizZ9KLNTu6ATsZG2Kbu",
  "key14": "5Z53qGEbLbpDhxNr57116KmyQ5r68omvrbJDiqCZV3nw8iFkw7PumXBKntRcefxpryfVm4qXc5TH1woekvPrZGeg",
  "key15": "2EggQNecTWbdMNNobC3zP7S6RnZrywPwhVxNkvHCgwyheTCoDTuqAmKGno6eYJpzFDDkNuXLBNZyYSG4QuhT5RGR",
  "key16": "5DMi6EMekHQUNrgxfEjF2kq1P6n2ffhtoHM3Ye4gHmbq7m5fcexKqLkwe6UWFVWBSq2vzeLFqdsX7ZytHGKARsSt",
  "key17": "xiKnT1gBoWRaNB8uz5i4e4V9RkUF91XMzzpywoePEPBrLyjTdwnvuxrNcaLUgQqnGTTSPJiivMSx5B5rUqVXHAh",
  "key18": "26dYdeBqzYxEEzn9oXUprPyZdFmBrjFJJxrmMMFmTjfVu6VpJpknYXiu3hx45WFbnW8ocxS16oXVjv7uUwpkZqNn",
  "key19": "2jFbKHoECwsvyGWLcAU2CFMz9hMJ8z45c8HU9Xco4FBrWZjSKXW7r2r87s4cc6M7h1eKVMMzMtc55a6aYGBBkWT2",
  "key20": "4c5RWE3YnYeVrxdpWGA1wYVJ2EmnAp7T6z7yL5PRdDe7V7tdyD4NqB8czyseuifez2qtu4rMEv3TsDFBJSuASrDe",
  "key21": "mfayR7FuKKXdRDueY3gUEABT7zJnYzBLLyf1nNTsp6D5rxZKNSPggwLZxWy7VAWJmag59S49ua1tFg5JWnFENuk",
  "key22": "6323SNqqzo6iUKuf8zqG86nqqeyjzqrqBGeX2YjGzaw2BYRzXVP4msJcBrqeaB1bzwjLPZk4TnGP15RGc75bf7gT",
  "key23": "5EfbAKoFuSnYEyctzHogY1bKVANsgytfVYPzHbH1fvbPjSgm6YMYGVDjW4tAUMioK3LeyadUARbYXqNV7sMD1bTv",
  "key24": "5si26CqJq498ioJ5a5o7HMXtZ6XESMBRJqVtQX6zQ31q7PfhpGruDpYRhvkLi8AZ7dp3xDEEWHtAKAiSTXpWUcaZ",
  "key25": "3YuCJQY1KBmcK3UTjY72RvVkEVENcH7VXPztsU3D75sv1TNTp58CGdZzz5Z5xCX2ZxjZAG71rJ6AGw74vrSeaaDR",
  "key26": "4mRi3fonzdeqajTRh6FmMgNqqw6oSSvKnF6qyZri8yEWyNgApJLERhx48BL9U4oDY4BL9eKRZNWJhcccZ9LZ1yrw",
  "key27": "5A7LBSKU1f21n3SwaTgSZBe5XjG7iMj2qY4QnSG4CPPZH94xTuCpNz3R2zmQ8tMVr3B6265xvSsQEU9HZSDtN1ne",
  "key28": "3JVGKdnrEyQXD1vEqsQVLCYeqE7tTpiKpKNSL9xAfT8bG8NQAJKZiyJ9PgUbtP77VgPJjTGLFZiR9QZnHYSxWEL4",
  "key29": "3D9giqsPRiRsKteY38Ut6GFMdryDYQzEEPSxSpPuqRrszLXm5AM6baSbGb6qGBF1DS51XV3JvA7WVQ3pDANXQzys",
  "key30": "9vELbDBfhofm29dFZw8uy59tURniMWP3mL6nrCifgWgTz2W5yRdvQJaxUUsLTJxemxQjWFgYgoYAEnHxLM6CB8f",
  "key31": "5mhhAmsvFao1u2uhKhv9i4PXhBCPrZWAYA8sBYrWmLAuBwBv7tygtybFCa2a6GKfqaBq1hWAwCuQEBWSaB2LHo5k",
  "key32": "3j1E6REAzC3uxr4SpfVdrEDCWk62EsFAJUT7S5ciASECwBRLSYcUjDJu1DRw8bXQ1Ljs6kGQ2j9zzsfjYc6KEMcY",
  "key33": "32LVvQStC94PxhzueGW8gLnZCKodQCupdm12GSLvtnm2AFqbWt7QJoMXCF9wXxQETR7WR9aQ1MoCotFiP9jkDNSt",
  "key34": "5R6KCHSnQjCc8sWNLmXuJEGHdMFkMa1n6gseDs3f1iTxdAKcBXM7Z5YqBf3ZvsyUVaN29WX8cqkZ4VKtpPTGnUaZ"
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
