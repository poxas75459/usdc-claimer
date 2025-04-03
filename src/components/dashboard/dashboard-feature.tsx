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
    "3PbExDNhsHyNoQ3SDEWkEBVY1o6EutEMjh1mkk8m6iTrS3hNHhsWFRnqXZEJDJ4bmKjKfXJxAW4ePJVQj76wQ64x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xF1bXQB29aCn8kLEe5Km9tMwTR7N9BCwC73pCKuYBcCTyz7VBr22eH7qxWzP2xfy3wNwjsuVcij32eP3A9nyzc",
  "key1": "2Ec6ndCJx2qoxmBtMfB8n3qeGBLyK1M1xNuMjoMjvfnhjKQytVGUBjjUKJqfbvmmJgKwUMtCTrajvVJe6iDHH6Y2",
  "key2": "4UKruqeFPBrPbcENiAMYKrxg4BSJD3RaWR8w2Vvy91GaxeK57VQCeupQFxR8mXWCvNae3GZ8H1wmsfSeHy2jRBRU",
  "key3": "52A4Xz3nSAafGpPHne84pHFpdYQ4B5yC89F8iXdRtuTjLHtMxYzZBw1NWtARKKSnzQZeV6es21aKDVCwXqZMSfN4",
  "key4": "H5qveFC8huhuwC6CZp4Cox8VFokm8ApzBUdnJWg6f6nxjt1yQxZDNrFwXPjmJvNom6PnidEqZN1Tkq7y1z31YXH",
  "key5": "5J2EBSWHigrj4Qgdz5gukTh8JVaug66x1utvLF1X37aTisEP2F2dLYxghMjExquPrm4QnHyp1TcKp8A7aBaYJjQt",
  "key6": "2bMRuiYX3PMavyX8QAi1XfYDSU4xN6gwwFbU9nzwiAQkFZgsisLCxvocViprDU8RGGAAg5i2m7XZuPXyuKFhJHKU",
  "key7": "3RZtpNoUuxiZwmoqXqkhtn8oVs7FrThDxnQz4BsTk3ioH6WhB4Hd9PDRxx7vVp1Trth3Kkt89F7WMXcKcH8aDM1T",
  "key8": "2EeayyUhdnXyGsrruaENNsrhAhbmdeey5WFSsTuHdaWmsA5K6XgKtqZS36KNsaSpKWf6EgsL8mDX3bdQok7Sg19m",
  "key9": "5anYSyVydEmWLFiKAzSZkzKM1CfTgvv7qQqyUxSMz9gAWRDAMkCizgVR1LM89t4ajW7ncLZRpEaNB3EEHnBUeQfa",
  "key10": "5Y6m2YFA2sYns6DUq2jXZYC8B2BpQXDtNYQbdDn1c2EDzCjq3rAsM7ghEFwCUeXuskgu6XRkSigtkUTLepDQxv7",
  "key11": "3hTiwZRJBxvpJz85bCfnqs2D4ptfDQujVzmkGbwG2WrK9am6K3rKqczMz7Gqd6pPK4LrL8hBuyAAzuGX8j4KGSzk",
  "key12": "L8eHgZBeNgYufH3QaMoN5Xd8QJE2FZkAS1XrgvPAZ8UAKoLBmh3q13kEfH4iF5a5N898HVZzXHx38SE8s4BjCy4",
  "key13": "58pojTaKnVugbTyN53bFnWvmNTvRN7ekwM4ecTs1BuDULJeASwHg3Gvz7iaJnAPfoJw52BHftviXtxYEpzzheDXk",
  "key14": "4ngiv48zoVUdwx7kvxDYZP2xfqpupbm9EZbSyAcZzpeqwnaPhPo9x3nwNw7WzcbmYWgA66erZaHMsTReA9b6P7U6",
  "key15": "2KYsXTxcSUiLFWBHvZCjupYTp7dLUWprRDe5RvizPAkKUq5XFaJMj1RBQFPaSPQHgXDWCz7L38njLHZJ3nt4rQLs",
  "key16": "47MjBT6dzdfvSrv6XykZkRQtv3s6jLRou7GAXhx2d9TDbbqp6yr5D6XbAh79SpAPZpUWJHq1h9o5mdPJoXRHSBKY",
  "key17": "4KpkvTx7PCPiK4AxU1L1GBwMb8FZ5cVE9AEuiSa72xKx8q5ACC1P5kTFvx58qNkqvEUtyTdzQmnfgxiRU4VESK5c",
  "key18": "X8jJ2MUii9XQznTZHm7aygyBmhnXY63agYEdEg3b7MDcfXEd67cgvCoBk22XCoyZVAy4fzSPtCTeknheSn132uu",
  "key19": "2rm6kTC7U1iv8qsnGHbVY6Q6aisPRtCfERVydVk5MAfp5eUXbJtUnb17Xkz9JyTcrjDBGveLyy9PS9bwTiYdFVRS",
  "key20": "HQ3L8SKCZRYQgLAKeebf76PfdAHi7jjotQeCZ8QxEWqZPc5Rk4Fz1qkjENUzMSQEtxGUz4tPPvbmK7TvBozjBkg",
  "key21": "5XdbYaF6arbq3SKQTCmjFp73Rzv3WPN3NRSpVUNGg8ef5tRkWCAEG8DgTVn5kUX744CU7H78E5sM6eZzczjyZj19",
  "key22": "2oux4xui1FKvuf1BXwb72ehncCUk8Hoiddc5P2KFFa29DW7kkSaNN5VL3YqdmEty1P4cHzBcWXYsgQgynxU7s6XH",
  "key23": "5wVvEFSyeVUuQHHCq3DZxcNVUGGFnt26Ecn9jJXFAyXQp2MP7nxHvwfanzND3Vg9jMXFkxrPuBqjqS7ojXhDNzR",
  "key24": "5q2FwwtdL4k7NRf8dsFGF9utGWkRXqsJXkmSUWZ6Zznr7VmxF3ZRnjMsMhvBYG8SXRGzfkmtpRZ1dbdp76fUfXS4",
  "key25": "4VRrUMAVD8SH2zoEDiCRe4hiYs7fgYTN9NgpKuqjw4pM9BjijZta1xRzu9gY9kRC2md5AhuKH7AVr4fo12zUVZJC",
  "key26": "3vgcRiACFZspVevM9b5cTg7JC3doDy95MzmumxnY2svrjgfDmMwyrL8qXNHjxssNuoBsDxrqKaVhis99DNouLMKn",
  "key27": "jevhLsZfhMiJe2Augxk55Ccp5cMTvFwgG9iM4Puz3Czz8J9N7RYZ83d1xsbqJtL64ZkDA1HD5wikSy5A7KpashP",
  "key28": "2EuHPZibApf4zsSDfCLaXuyYqUeNpZcnW43kFJFGb5wYwpZR163fWq5jUtbRgwzX7geYwarnk9UW4FJsC24eJtEQ",
  "key29": "4PbkfkYLsBFVoHP4Arn1qge41npWM9GuEwBLQwnZG7Cah31kZASjqa8tw6coYr6cCRTxPTx22jVrNwPKrGK5qE7z",
  "key30": "5qNv7hjyrbV9oxyLc2c2JFYss1FjAgQeVDeAggdUzkcx1p5vgc5rjG6rhXzpin5rAhq5mQ1Udg6U241ozxVj1SFk",
  "key31": "65XV189qgXjb4P1ffq9TAP4syxVzFVMvUHt7kpU2cf5wq9BFoZjBLZjF6tPmtK4149wFzLB7hmgMN4j7EniABeKJ",
  "key32": "2cKyNUiB5vR15517go2pNVUqivWa84vG1LtASTEo2wLHGLXK9uHk9QNUYvg376HRDeMgxgi3YGS4FrbFHeJ4fiFX",
  "key33": "57ey9WAWSWTRoAXadxHDU74vN8RGuRuZGBS7cWeQm3kGZv56hN3RqnoFcgDfXkDjHNZgrZE4VSqcDCfjpop2GcRZ",
  "key34": "3XvwQTfyeAdp1d2w5ucefWZoL92BDnJvVsoyfMgoXxKZjDTqRtpCxnM9oePGwpvbpvKZ1fXUhZW167ZsVnE28qkL",
  "key35": "4DtEzKkTPCruoNu1RUpTCY4Hy9muGvGu8aiax4dN57eaK4dfepNijo1sg9qcsSuoixDVcquNN9rDTGsHZ1RUF2H5",
  "key36": "f2LbEMTBMfp4pByjjiZk3mHPrBum4cfKFGaQ5NzTTrTLpwAQR8Rmz6UTKK4sgpQwU1eb9fGWX4T5Uuku3ZcfTNt",
  "key37": "2aQ7pq8DptHy3h337T9pmSVFnGXHmZBGaSmX9PRbt4fArRFDzKNKmDNQqcJ4baNEiMx5Q8H173NqurjFZgXzG3Ez",
  "key38": "NZjidkeuWMuNTCGHQZ9on19Szwgom1eW5T3yYG7x6mrwa2cPs5Rx59UGYrMQMyrYPcweYNbDKXDZ4BVV73obNyS",
  "key39": "5UdDGRxxZ4taPCnBSHrZ9E8wn51numEKLtpUaqVafhAoLJD6sUSxHUWeD3Ci6nKDmQ1izs6ajUpNUEy1bR4kMteT",
  "key40": "2FjmXJHqF2pAVMPRc5f2okdnFQgbEaraAKpfcGU24WXUsJgsrT1X4UW9aLFCkrtJeeM6E8y8n4p9mLFk7o3g2Kfd",
  "key41": "5NFY5oXq1NA2RGbyyZqkafrVpDCe1hiLFrdzu4bM2D5ArCnxDR1v9By8Eu4Trp8fJeLBPoFKxLJarY5t5EX9grHd"
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
