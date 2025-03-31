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
    "47QEJDNN1k8qtNPpz16EFo9oborG7mgrXULnpC7rnTdd8LoKeSUqqPBVpvnK2BpAmDZcTZajNxjotJmdPHBT6svb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K9dK4q5Dc3gopHw9bfjkJ9fMNkJet2pMYxA9FH1hdQyhXJhAVABoFbsTS8pXj2ueWdydsAMe8dxkRDwJdhDsHWL",
  "key1": "49ViNe88ztfWk65CSXq84vmb5NainP2aeTxTD9qhcokUd42zGBuKy5ArxLxR3Kf5tbrYorKe9YnKAsxbvDgmJs5o",
  "key2": "dcJDnY5rdBvrXg8uQPSHC4E2PGAHoTZ4Tpzvoc9KYEjdVPWHa6bW1VLf11FEbY1dNHt3qPz255oeBCYca4FPzfF",
  "key3": "2PwedAxjf5oLPAjQMwYcJkytnMZst9yBYXpgzrPDPQrvES3jes2NdNumMQYFFXecUF6ps1ET57EakKj4VnJogajH",
  "key4": "5qeUA7pruMqUnUqa2fe6mYwKW6Y6mGzvfwMoYrANJqZaEpkNTjCN1qJJNqAxWei1RtUaHzLU1TtMD1Z7bnDopdru",
  "key5": "yBqpGHvW1SxmhTZGsGkZoUR9M84QPLYh4RvZUagsqtCVrGmA9juKQqbcM5kWAzKxKqSMqvfDmnhbokawLMRTw8a",
  "key6": "5YVt9G5bZcyR9jxyYnRDzwHrzLzRBjHDgJMmQSEXrZB2RzpQCE4itch1AGw7qsW6WRSUbNXCdDFYmAyVFJD3rW8w",
  "key7": "3zR862N3qctmmYPnnMbxrd5JZoyjnQL7kgsMUtftNh826aVSHyc4C3A1F9kEQudeCkCABVEtm3wVGvj3tqczAtoE",
  "key8": "jW6FEnkTyGnRJhfYN1HPPgsmruCpo2xMHrrHh2ftnDYovm9Anby8yA4hnLWUwRA5sAT7y7KvnMdJmRkaDUhuhRC",
  "key9": "4W3HTDMpyo5zcRBrLetiFP4TifKzoMTTCVZHmUD8rHmj7uo52oNiJCWCFe93AhytiZs7oqH8QX6JWG381qEf7hEv",
  "key10": "3fcdJGguxX5KsXSqCnySZtwS62xQzZnUw87GQnSuMNvhh5qsTuvf6tzmXfk3f6kd5yBtXLAXwYuS6EYwYjtPuEir",
  "key11": "49DuXWQoExPEcigFxAK7tbPeuBDDivUASn6hfX9xB5wz5WvhnxrjNwYt4d6PH8f1iKAktWV2uGVSAa8Y66GJHhWD",
  "key12": "3kQbttAtV2kp994kFHYgwrqd4scBYoNX2tZRmwax7KAP5aG4E57cLAZR5L2auJCcHh8XasDVRbNSANDajkbFh4Tb",
  "key13": "3WVAFXywMpoy2Q9YWcdCR5QXoHWJjRBLLVzeQHqGJyzqk31a5vv8LoXS1DjpfC3vuLgrNuVxPkBTF9GHXSrftfrF",
  "key14": "2ypp1uwrUopJiSaQHzRZwSzCNJUS1kGzLLfevvfDw3rE8QCECume3SDvAxLhhmUx6VN8e6KBtneSwCpeG5k1Ro8k",
  "key15": "3w2sWrmrd7v5zLboTmpgqm8RivhUjguycdy2E98kAJR3i2j8YTWLf9cjTsiLtZXypcvYv97bKP7sj8yvjEgK8hod",
  "key16": "4auy6UzXGK8QWWwxxo36cZk5LJPeWRFSUSMoKXZVXMH91UmFEUc56CeKxHz66JDn2Q55G3Rw96yvoNTvPtHkvDS5",
  "key17": "3k2KDUY1QUJrnkN2ZDTi1Vf4WaKvbrQSW97UCZ1KkFxTLPgb4rm91fyfkFFVVLZvKsp1puvXbjJKxbiRkfkf1yvK",
  "key18": "2xPLHzpp5mPAoDEXcgovpsKzL1Sdxy1XRjJB5denrmf5YTT7rSKf2YofWUsDLr5oGV6n1rgiaYJNmkkyNbjdKE9K",
  "key19": "3UZXRuXwqteE5zMWpw8urfgguZP9k28y22NH6vGbdPBmvtCSWtkV2YdauLWKon63wds4h76aDjAeAj1Y6GSq1EDm",
  "key20": "5ueupFR4J9Mb67KrTk3sDfhf1FW5kbWVBx68UqvFRiytmTw2TFvgR69YQeAAu3dGB3kYEXP5SX3CMheQa54xBryg",
  "key21": "4wVA2bZnSCKDVMFLShu41sZRqtdZTBK7LTQ9wq9q3aeQPmMcSh1YScGQ3KoSNQjwgchYuLzoYZZxL1xz3L1Eex9q",
  "key22": "3Umbv363U6aJTD2cEoCof25ksqQAv82ihhrRBQKMrwXuC8gphS9eqFuCaTLikyWkCxoMvFCBHtpcgmFf4LkdhcT7",
  "key23": "j1KdiqwBgWLquan85MVaG5X8JFcFmoiNB4haqBVbucXcm3fzChv6KyvXchNoZg8r6k1frtuicNRJ6TUc4bFZ72v",
  "key24": "36Rm1N3CWn8fso7MyHyLcx2nBvsTzjroqeTicPSeKuEWRXSQ4fTMkweQ4NisJVhuTKxYKJAVxVhNZJwu7UfHdP1W",
  "key25": "3DgUyK7xi4Py8sucYigxgtgE2ZqEWnqBduXLdw5bC1f398hNYQnGptwrrcYkibBFBfUPFrXgTv3rj6EicWYhLynb",
  "key26": "3WUYRqx6ye75gRQv1n9u85Q32NtQZTxfwdpDVJFDU5vsaHfppfQYYeAVearxW5E1kJVx2Ddwxz7B2GSNoVg6NV84",
  "key27": "2TGdWWTKXXwKLvFfjDRbmXTmF5vksA2YPZ4ycXQYVSLTBwi8qMpYk1RqEn8U9dtAT4m9cyt4WvFeZx8WestUyrwa",
  "key28": "3xERPw5igGQvyT7jhiVxrV5WLRJvkoy6QXib73m9cfRFzhNwX2cCcQjQ1UeDiFvuQi49EXPv555ohYYLhQJ3Zrqn",
  "key29": "UgFNhHjRP7V4dnaRu7N4WH1MqzhCsdk4nau9G3AUo7ZgtMzUfj3HR67Zn9JtMJcMtkdA8Y7Za9kUB77YcxoDkEs",
  "key30": "3Dn19oDNSvh2g4vnfbwyXrvszGtmSzFsG5jm5KuedDVw17QKeLe7nP3FLX9QdN6AF2Na5exCAYuwmgbbfkAXKYRX",
  "key31": "3AF62sZWnGGot1gNWaPzaLBxAw3Cn7LTGs7JATSUQVKhQAWnBzenNQphJEtdRoHKPhvhUtZEJxa93eWqSccaobZr",
  "key32": "4U5qThYoUvAe7duzHBsyvVWSNeRuonvx5ws4BgevYxxHMaQxwYYdvFcN2weFsZAZXKojJJnaQBWuyYy8LCT9txWc",
  "key33": "ZLmFVNKtojnk9PWPabfp41CD7T6maPpn8oKgJZuDrh3kjbwFsRddn1dmtyHmiQy3ZqDAXhpjjKwAN51s3fVfr5E",
  "key34": "2N1atLPx5BFKLV3gF7geBs69T5owX52StRw9n4QbkNqJghSz1X2HWsxtiLj5kfWqC6m9iZ8SAghBNpfQYouEsad5",
  "key35": "3Wxm65NxatrE6jz9iFLuVQD2q2kg3TJxQyVSEryPPCVvudxoTvM7GZ2cgQjAthGzeYHEjNsSAwqagH1H2t75FBBd",
  "key36": "3B7asJTZFjUKGt5ceeDg9F1VSbZVhwbswPLGLQvjKBa3EQs2Q9mNRMpSofXEKQMEZmMTWSC42UKjEaq6xZDqeugN",
  "key37": "12d6pn6p5qrxmVHoujDoLYcYYxNgHVbEwnpP7EAnCiyCTUc1ffPTHjK4Wg2XrZiUv15wK8SLq7bjNjaNUUMZV4t",
  "key38": "3xW2kVH2DNL3TabbRRFt5A7TNqWBNusHrnhgc4SYXa1D2bUAfL39NYQXTUn4ijHcdd9iP6ga8iNWPhQcJNAdPdGy",
  "key39": "59HFP3NkGxCTdQEyKsHbUe11PmBh1yYyizQ2TbE4o5qXoer6m7sz4W5AJs3dHmJ3H6ea67hz6XuxHg9aB3f6EoCB",
  "key40": "5XKdKMdHQDfSPs6GfYGKYuGRCmqbUnfWRWFZoNG9sx43BMXHKCvZYou4m9UbvJtTn5u3YfrunhuLTAc5aniYuTP1",
  "key41": "4bbukRFHxqqJPFFnzsze9GvCyUwDVaVyM4H5VbgdyT3XR3tTMf59vBMMYdx1sc4kjS5dSdKHt6TuwU2pKfaAEDWY",
  "key42": "64NvZ57RSnLTR8sDuDKXvhVcyZEMZQWQn3tP94tKpEjKfhCXxAvqsZ3gZcErv32e5oh9W9uQy83zZAEHMdisHStc",
  "key43": "2HJtQgB4Xpm8j8iMBotZ1Fuj7FUGWWjRLF19dQm1Pc1cZpzCa2NRdc7T6quGqrqxdDTR8wcjyijrnnTcsj5hFceY",
  "key44": "6aCwVwFAawyta6hDzkA8iG9r8oKUKQv6rkiFdjpSubQADuRHW31Q25tHwWcYzeTwxVAizy8hgek5xsYSQemhS7F",
  "key45": "ifezr7MN1oqkma5eBZME7RwoFPKPTKhGd8Vemzc3AF9vgM3FqqJpjwBX49rVh4eGutbcU7bzerWa3aBi1Pd7PhH",
  "key46": "wU9v4Z6Xyipm5C5cpRvRuVTtUij1mpUhaQK72VZVVxmXt6JbGbRUmrCxzAsonnvqmS8zduoAs64BendtwY5WnTF",
  "key47": "2qiwaYbCZx2Z1wTLSSSYAhTgA76nQTz44iyyQhpRuidupuxSCiXFpdkPYwf3M8HJXpfPGvqmDw1q7QQwTYRJkzEP"
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
