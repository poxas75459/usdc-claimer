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
    "4C2nF7gkbAo8Htb8Y1nAEo7x5LekfNgzptWvSFB4ZGV3RPB8jaYas9MZmwuNzigTvmtL2iYLBQph4JHj51eHkeze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnbakrJky2dtbRfC4CuqACsWCQukCnxf1Ph531236EN4B6CnyNgjNqySehomhemHKVE4zLFP36ft4vP9zPYhvjn",
  "key1": "5otLq4WxWocd7azT1abMJXVfMzjRX7M6nCv1RGkQpKPqi9Mo5d4mGFquRubj7wzrDMiBpEbjk1ywCJxbuc49F1AG",
  "key2": "fDUXXhNjwTxfi9UDwo4ewwsePkmmUPKD5S7PpAia8A3BvUUQoxi1wnLbX9dk7E6mnMxxQLf3ggHdGn1rw9JE2NG",
  "key3": "4Ag8HMdKTUHERSRSHpfidkKoFMUkqCFmbscC6vpPbiBfttofaaG9wGNHCMzNy52fyooumYX2GxV2VR5E4xB6VpVa",
  "key4": "5WztCvQKdubxP2oX65bZVxyASqWPodxTt4TMTTxArgsGpjdz91tmRLn7HvXpfT7AjE9iww45vBAfNjkqaY3vRgs6",
  "key5": "3C9j369tg3rxy89Y9Zn9eTkgBzSLpXtdBfY8wJYrv6GNrctVwFUX69gWPd9XuRNHyTS8JPatNht4zGLtmRf48hCf",
  "key6": "3dx8xVWndErZEgc97qV1ENgFvtv69GCPnCPxsHiGMd9UycLoBqrksXJDt6WhBNWCYhejkHQrss7x8YXgu8aebdzq",
  "key7": "iwu4fmvfBkHpud2yHWhz3PLgRDRc5YTYDMhGov9pYiQ2N6TirVmHQ7gwjjpsSk2GoB8N2KDAXpcvJ3p8y74L56J",
  "key8": "2ZbApEAY8EQMYvUg7jLNdZfaxuG8URQXyPJjDV6BAaLgLo7VZxFMfehmhgFb9zarqMJKLdLBWeSuGCx9WLBhoG4F",
  "key9": "5dPadS6L7mrZ16L19tbwq1SW3Qef24E6iwMdaEwiHQvcg24MxVvPeF7cMeBqH6Nkke1yrCiMqfTmu8ek7KoPt68t",
  "key10": "5dyBXKTSXu2pRXSEcPE8EbSTimVZD81ecv9uMBLqnJRD61ePDPErq4PmCoSXZmzoJRxg3cVyAUSpmGm8zKhaHXta",
  "key11": "4RPjXvVhQ3tA86ksLw5PytpkGBWeNRTMPfQow2jt8nxLAYRpduAcFaSEko1JLGETJs2MJwXsKH4C2dfA6xokR6fY",
  "key12": "5JKyKEckAYXHth8bHMYyH3L6cvAsEuVKsexFnEEpZSLpmTvRG4kzJVVALM54d3Nn3K9C1bk1Sxx1m1XDsodgn9WM",
  "key13": "4KMvHCnbxvxwecfzBXPr6kS9UtRNJmShbzrjxQBqdXNUGDr65Qoa9VFWwgD5yu2jU3UaVX7U5kT3c7QVVKTnEMem",
  "key14": "54Vr2aphv5UeZqQXNEetk1pDUXmWvL562VVULXR1vi9qubB1qPU4tfiqQDG7bmuiRjQZrLg5f93FKN9w6EEKB9oz",
  "key15": "5kP4tzXyYz27dHFTcUkLGTitbFmZP7UysUTXsqj3q4SskVQPdkGGe24TFTdKzcaGp8zbAARheSg9x3v5jdU3prVj",
  "key16": "5fn3gueSA5p3uBALbUNKFjRrem2bWG1DaopLhu3gNtPEpPHV5EcokbGPNNikv7jVnzVwieKk7x5JFgNjQxyQauC9",
  "key17": "64kNckBjgbM6jbS7CHvban4oMNs7SaJAs1MD6Nff24QkkY673fPYgYdrNsfFxUxp7rwCDmYSQwDTeqAkdVsktzVu",
  "key18": "2iYSVDUy8WmETCkfYx88cV15k8Vffut3C1jbpURi3hJs1DpNFDta9E1aNqF8cJXLHyekYywe4F5AS61CR8Sffhay",
  "key19": "2te9aoR8kR3aQ7ZhpLcgHhcBcs2rDGFcjYoc7GKnu2Lw3qjDvtLFoSaKEJXpQ7o2GPKpLbsiEDt7cVeFRQofVS5f",
  "key20": "27XiTo4ZThXGP1Mmz1Kfx7yLwbES6uPotBpDwAUAFgSmiGR8NSqpb7Kre3ULysEej95y7fK5PPQjovoYvKPXT5om",
  "key21": "3rS4BJcp4D9s3huqgn9tjqWmaWpUdEQmX7BziDyZh8RdaSuKE6Y7Xnzz9EXEk6omdhTQBCXaV9FoAmcKSDsh9xRk",
  "key22": "4a4p9i2oJTEm4GRV8pqbEqTMFnJxsGXU5XhScbyKtFwqizH3MaMMaw57cx1a24SGh2AyPdUCaUHyeJrjPB49KxVz",
  "key23": "2oeFgS125C2fHncRH6TWVYY6DFyXVGhuqcaqkwUX7VnJHys8s5q2R5bzCU7HGfQi3pkBsg7UVktS9vKdzr9nNrn8",
  "key24": "2PCJ9g9QzLYLx2PjQURFzrN52Z77E8EfEvoPQtnUWKMq8AR36bJKBgEfDTT9wh4wAtqMs7SWFCQN35Bc3wGTDshb",
  "key25": "DrbUUSnGW63RcXAosfoknFMnBxhMFEAsvuSbzz7eeXnWobP9tcTQ5gQo5SteC3256V89AwX8h3j1KCat5FHhznz",
  "key26": "3h8qt48WdjFpPdzfv1rmbH4QESohC19nbxUD7dcyfZtDxrY2Hh26kvPbyF6W4NU8P4UE4KFeEPYkVXNU2VhSSwzx",
  "key27": "4PdY2qoQ1FGsiMkv2odjYVPg28YfN4Z5185hqRAw3nWutEbkNqBYBYH5fCxzy5kUYVMUEjKiLFtYAHYuJMz9FU5B",
  "key28": "3fqDa5AbUqDhwk2T4dnQcLVJhVnxbC1D8Nh2ynRDcfJgdGtXYzWDdPFDhgtYDXFXu4vNNjpabekPNbRQHkSyZHEm",
  "key29": "2komGcpV5QpDt4cRGorC1CoAn4ocgxm2HPHAUcshKMyqzpTxp89dBZcePGXhYvGfBZWWXi4xoxqbCfzahA7CaK6X",
  "key30": "58AEpFPwXUe9J8wtyyZWN8BoLY6FjLPVTqVGcG1PJzJ73DqkwWNYpCoGb6bG6ad6BKBaNxCmPSby5BE43HNmFh75",
  "key31": "5xU7BqKyci2M4SgKRXexhaV4hNUXAiRJA5cXtVcYLxNsTQW5muJbZhrYstkJk81ogpgBk5eDaT2Qek8qa5twvSK6",
  "key32": "2XGU6Sgw8AwMCN3KhPjXvhk1XCDHUE4cSXa9R6kUtKcokbZu5XSx2bNd4pWSgZ17C3t3wzsEVvqdfu42WA44vcQL",
  "key33": "2gCCyJjP81u3y31UmzaSy5EHJ6Y6RDtfejZj3Rhuc91Pc596pNoDiDfvv8ZbLobrKbhQLKmzXr1ZGUDqk3G7GXLZ",
  "key34": "586N3EwYsaz1zRLB72ShDHFFK4jE3AYoL6V6HusgDpqcYrKkSnPwgan5iLFFgMnD59jD47XL61XLofKjoy3RAPJr",
  "key35": "4RZWomFbCMkxhpjMfmd2Q2U1cZLYkwmPAwZqz4E5R9C4U1NRo5xED2hNtLdRRfP62FLLYJRNk44Vn6j8vLwSNNu8",
  "key36": "5aQADMmbs2phyfsUjDqTqhdB3NiAAsuzSZvksUL9nmm59ZaDCjWnEz1kWbWr5uQmVEg2cB2gxCedvUN6K8giocdU",
  "key37": "4XwfsxNcUegtQVXmQ3ULau9A1z6sc5qM4iZ5ZWyTT3uHpJ8L9UzhER1fZ1favkhwdKVgmgsocMhNhRAkQBXHhtns",
  "key38": "3cbZF8qxiieeEuJPTS8mg2z23xFSQJ3vLuPfHdKTghhazA64fx9Usn4iiUbqiSR7P7qLHsGsEp29hhiQpQpyExUT"
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
