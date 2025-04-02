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
    "CzXt52jMVgmTWAKUGK4USttu1WoV91iF2hTmuAJaqz6tVb7MWQsWqXpYzjfmihjFWinbc59MyS2MBGus1MKNvqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axq7ymiYq4Ur77N17EHSbjG6Qt9szQFcTDxiuXfJwX4xhhvzD7kCRBCi4DMY5abDGMcUcPUmnJ69bmfQbzhLwXw",
  "key1": "coWVvunBkHcZsrPUFUMvhLhTeKkLc9N83hsf9zwwjwzNacZjucQECkJ8QJabbqMFU6yX6Vc3n2efvp9XJqNjwkA",
  "key2": "25XD4XUswgkkxLZCNgo7nhRYCZLKposnzC1UFwv2NY34Lw2VFgTrsorVdHes8MCKWjE7NuGeeXKgukRo76HChi4D",
  "key3": "3PEgYuyoa8AuePvmqfMXdpQL2Crz8pftfvn7su4wruN9UC1jufSjkDoqweHu95LQBYb7BAzxZhzytT3noiYXQYzo",
  "key4": "p5vWhuTi4xKRzqMeUMMCY2feQtnXnrd4H6UydLnBVvajy5dckvtXjuUifNNs3NwW6mDj6WhnnBVJqGrAdWuGavU",
  "key5": "ih8DzXhgQuFyNzMiD82tLYm93PUQxtFUyEH3RdmmgDM8kaFHuvap43ZBwJu7KvbBkcYcGN2a7Lwzqd8uGkBGpSZ",
  "key6": "5UsZU1iPtJjWoze2WiZSrqnYotUK19uTHDL7Zdx5bixSUpK9NnVi9oe1DhfHvEcxgTM29S2mjp9YBnhLniLbBAzW",
  "key7": "66sH3V2wUtWMKBdjCMBP6jMsBax16vUDtKkSAPv7gu6zHvqWEVqVGMaKV5ztKo54YD3DXmC9yLyNuAtJn5AEjpew",
  "key8": "5pwphMvyzDvZBtqGQryiSfi4JqzDYcfjDDnzmteZqZw3H5vuW4GKp4yYgxsuHkAKdYHMxdvQ4ioazMwhxXAbyUPc",
  "key9": "4eTSR5dLXDpoQocdy93wFDpnTFhSj9a8pCMkCSztBJffdXN49kHwu5cM6z4VgG4JmVDrqWhewaQfRLGSdHPcFkpk",
  "key10": "5TBAiDNCXBFgV5CTzyWVsPkCFenDuNpkwdAAdBNHYJKaZ6qPRgt9BWQJRPXiP6QZTtn1vzMG49WMAtUboVH9vWhM",
  "key11": "4yGu2bxoFahXmFmXuRTv4d8kuFLEEuT16meeeYAoRo3NMDnwC3SuG3DnKVwtrhp6nSawu56TYtDtzzuwTNWQU3Kq",
  "key12": "5sVuzHLyzmiP89mtuuJBo7DPJE3ifr3ZZvLkHs6bePPNabdqkZurRhJCdYFX6cPwYPHRnUcZ5ZvBF83HBF1spgQp",
  "key13": "66Tnth9pHDzcSeoMxK1V3r2ZtP4ihu5B46DYu4T84bLdEBtK4MqQL3eh4u4pUrmTnrEyR2HXMnTW7LxxDynscNWc",
  "key14": "4rGxXvkg1GnTHWKqGJVZJi1YnSeGYJpJK1EHSBC9bUsdatoiir3RmjMkD2fjTCDiZhb5rNoBYZq8eiXmg97fFWap",
  "key15": "42XvhKNeCEQA8Gg9uQjHdAJM9XyZQX3MedG8sje714EhtjKDBr4TYwEEZohVWH1ZwU5FeeTDZ2mrEG8ipV4FBDX",
  "key16": "4ekX8FagDBoPUQc38CQ2rJVNNx2Ct69Fk4voZWYCaPEuPKFdiHhGewEM4bo46ZmL4ZqxLjtnWuKCov8r4MyoVSm",
  "key17": "3T1PXwtnWKUcVTpiLtANFtZCKmLvpL8J1tm3pvdjsYC3PcmrREUKPF4dq8rcDrU7W6QZNFqdPLuY25rHB6fhjc5E",
  "key18": "5xg67wtbu4AM9D35K3sMLLPJpcH5YcD1tmt1XjNTVXRLnCxktgTdNi2KEJVY6v7fhUM2fv779iVf6ksYTvW1rCud",
  "key19": "MZbgGzGX3D33xSWtaH78wRccaECDVzXcP6eZRXMNbPZpBWauhg73tve8J8bmhVtu8kCehBTqnhfwG8PYchRQYgD",
  "key20": "23UccbpWimGTukMg1QfR1pjF7cQqstoE9chkQ2UW6QQFaUciGhFkC7RNwcdBP8aVeUtzwQ8pWAHnzTNhCub8TaQZ",
  "key21": "PFGSzrhDxMcJUdtvQkui5MewwE9NpvwzDyB8qCoW5fefWLoc5P7b2p9quVQKKsKSiyqEjGsaEDMFMjrsZp1xe89",
  "key22": "4Kc6hc9mZvjjx2nhfgQskSFcynYjfXXBsdfNfSJgoJorJvAZa4RjJLsEFs374o6giNbawyqE7Ta7R5jQHALW4pTx",
  "key23": "283XjrircDKKrTvbUrx4FGen9nnSdzVZL7CXtLPyUSkiTxiYpG9rz6Bko6ZXc7HdUnkNFg5h1EtTY83s7nUUhUML",
  "key24": "3gzWv8Lsmz7qMfe4usZn6xpsMtY5fktqXwD1GctXAZday5rgqmmNjTNYdi1neMGcSgibWjSUgEcY7VGmNn3ZjxCL",
  "key25": "28vCz9Pxm8G4HKGhdxtTTMUPXtXXo7tHkds9mM7DgUjGsD66N9so9VDta7d6natGzcqZYJe5P2E9zNBqWZhRjs7h",
  "key26": "2Ya9QAxhqeWAcn4wTRvj591RAGF5XnCyQprKeysjuZ1c3sudevQ787qTkYju8rbA5fmbr6zzfkxznKfQUEkZNr39",
  "key27": "2T76Ab6smbsW4MtZabv3t2GoCh8RJQ5XSdq9b27y9tm73q44w1dpU87feD7RNoVg3SbHdumkJBYakG5aCf88a9sN",
  "key28": "12tm6nNe6EPCRHWM4hzkWbwKRHShQm1KXKi9Xk6nPypDsB4DdqqBQY5abDeC9pDY1oXtxaWxxw9XEYEsrbPi81Y",
  "key29": "2uPXb3RieHYELuTkWCuib6FHBzV9STXrqjex4p6sVAoJHKKU6E9veXWCShYw4fyMkeGJ8bgiGHv9GiqXno3ytAYt",
  "key30": "4x2sEX76Qsj9FFkRudGRxfR462oeqxiHSaFSnjVuwAqE9RAD7Y3TZA395AvoTYubt8J6cuattrxHiexbHNMe7ME5",
  "key31": "5UgWrqeLoT8381MAQVKcafgbUE7y8eCmGE5zb7pcWn8dd5PpzeqjmTj13YWq1xQbFeeQJ14VWr8QD3dZh8evcVqb",
  "key32": "2i5zrRa8mZwQVMJBHgjyT8fyz53wnDiJEGQko6xKE8kFgD9efpkdNJwfnMEmUcgt4nQtt9jzrKYfN8MATND74uUE",
  "key33": "4mXx6nyzKVt8rNHTm4xLn5hof7Vu2pZ6z9JT1jvFgNNnZC8ojBKKybHnHRTqGd34XEwnaLxz2PPswjmS7eoXG84y",
  "key34": "5iSVZK2DsznaKMFu4N2Msun18HsMTLMf6ysTdrJRUrxEJ7MTmovZFiKdCJ1tMvgv4xcDdCJvA1nvfFzp3cZAFPwS",
  "key35": "44YCQwo4XXD2uaYnYEraXg625UoYYezfFZRMuFC3eUp9ZAjeYbxaHkxrqEpQphkLSbRiAWQTykSWey4fxmgoxLnK"
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
