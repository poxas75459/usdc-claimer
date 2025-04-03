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
    "2apJnfSWmr5684dZF3so66mu2vRvcmo6gHrYuRpF9HhfBASknaC771wjJccmtKPxTUM4dSM8M5WcrGHJfubHAMSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t8xzegEB4gKGTEFjWC5bWwQaGJ4eDHy8QS8TbxuF7kXFjYJyuYNmfK2TBWoLeL6JZSBEup57YoMFy68q6esmG5f",
  "key1": "4mFJvfBdL3e6hQeKd53x3ZZfQxAdXz4nFpD6WrXddr9xwJfVC3bsiKJP9fqktz6Ca9jaXHD71bjx7jQLxAfaUr1P",
  "key2": "4RFRZyvsbGTGQgrR1vVaBFzmx4E2VqhuEQAik14qaK26szMjyRHQW4d7G2oADTPsuWkadtRqx5o2HjFNmkUWehD7",
  "key3": "36aqup3RGdiiVvHJxYBSCDhmRcXB6cYuZMPQNzKWfbn9jyEKkuaiNWBpzihrSa6WiUNrabBtx37nDFfDeVHxVrjw",
  "key4": "2XbiTP3fJessx4J7dfJaipQHgbsUMgWzTPivaRJdCetqNgMCRrhgNs27M5M1yE6iiAazsXpxLBSNMQLiZKiySH4T",
  "key5": "3mFNTq5fAxg2XqSezvNma4rmBjnXmFp76ni7cN4Tnc2z11XZdYgEnCJkLBpQmvvJq5WZrAW4B567JDumqa62bfcu",
  "key6": "5SCtbTpHKytcH4izhnYKKYhYf4iYWmzjYEuDu1eGFwVwUKG141aA6Xzon15JrtxSRENXYFHk17g77a5zPN8JrTrW",
  "key7": "3tXFDbLMimLXEtdkG4cmSEhf16RPfxCKcMuEvfZKR1UUXAJrqogdTNkfT5ii6MYfU5QzyJ6JUaUasfdWgbWVd3Rv",
  "key8": "3WuqCobVhDFfytpA5CBGC2hUwB8DSfVjmAoxCqjtSKSfzLPa7N2DvjqRSN9WPqqBG4Jz49iUiTd3VEoQaRZgfUBc",
  "key9": "2QhgzSVn4pTPPJ7dYhn6ieqKp4XDJ2iPor9APz284ykKgwoVvsHAJapiadhqc5CJM83UxMTr85Ye4RGjHDcCq3gi",
  "key10": "5if4oJpKW2ecoeKrLh93Jr8ayGh9vhF4vUm5aaW9BjJWEYs82nF5skot2vjPNfAdm5ozrbmUzzSdNx7Ch1z2snLD",
  "key11": "3zazdSpYmXdHJM6sjCPEcjXTCLCBdn9MJnURy2EnoFaYKPdaQCiLCyyrRUmjaEFQuB16eEPx7Py2u5ACNs2QREYd",
  "key12": "2LmZJuSSf1CBzr8S49RhB7QLLjh8nyg9uP9RkBb8Yc5h447f8P5GR4ek1VPHZiqsbtu9E9T7pFgAtpEdfhTqe2bh",
  "key13": "2DjhVmCNRGFYjBT6X7h3f7XtGbS1oWRJxHTeBQhZnmVmMC5fWPxouA8fCJkEutCWexdnSMkqs5QRyqpCFMJVGMkT",
  "key14": "uPxcGn1qSPiK5WeeY2aZGMTwT3v1Br7Yozkb3qn7Fra1D143A4drx7y3uh1oPAsxb8turatxodkJAAMonX7ARTn",
  "key15": "5FHE1uy6uq53jt5j5sbdbdxHQ31BkJBtw4zctAktzCZjD1J99iNSnGEN2cvNtQYGiR3PxQAEtz4uqaD9wwPtK1wd",
  "key16": "3zGAWwwjHLS77FEfYpJyEyocQteoKwSeRAdt6on1YYWqGQVNqWawdgCqhfZDUaAyfdyp4knqRU3Tcw2dNBHLELyz",
  "key17": "5273ymAni1MfYKfWdNt6QsKA21uqVJCd1yDGWvvbD5sftt1HPL4hzhe4qZC6ivDYR3TEXKLT3pLie5qNcXW9gCt8",
  "key18": "jkpEpJi4SFSZF6vQK1dVJxSPTuxnhUaG9QLyp8KYqLd4JET9Kj8Y7oK9ZZZFHELhC6C6LyR1bWsVsGbhHTnffiX",
  "key19": "2mpdv6mEJjNEnVRTtFXogXavR6HnpyT2gEF5uz873ayZupjGuKobubf64VhJfTgUhKjJ2JagFbuj5jrtErFvPHym",
  "key20": "23KznPcDcuaMmzQycZ6Sk2e3BgNuggiRkyNWTrjn3gBUhttE21T36u5ec3SH8RP8nbVnAdyYyALraNZ4acVzE7MG",
  "key21": "4atKP6CUG7FptMBswNJNWDLDRgf2p31zzMa2JJjZev8YJpFDHwZc37j9RGdqPvGLzYdamjJxm62ggjmg6XKRLau2",
  "key22": "2c24LECfGFTnDBWy3vWmqRm2a7Qaj1B4Gy346StjtkbQknNu87TGJQHX5H2PtHW5AV1qwfqaJfWwMc1NHk5QceD2",
  "key23": "48E3iZ7uTcqJWzj74hAynypTFFnKTKR9Rq3dQAqFs1PGbeJ7rEH7A9VvWRsqRsgU4Kbx4BF1s9HiC9H7KmJ73eFD",
  "key24": "t9dAw8DEF9tAniXp7D9Mmk35jpsYJFgEtPFAmtR9nScd5PagXuZ9NKLtVh47RdC4JwUZFCaDm2SPYrBNJigUHw5",
  "key25": "3Ft4y82NPjXj9C61AEReq8u1UXRdrQMjQyfMtyhV9o7zwZWjDXbfZyZ1UZAF9fJfPaVqSjjJ7G8HJn89UpKiha4E",
  "key26": "ZLDY6HEk4J15gFNtqrdduqgFdtx5PzxNid341R74FhZnPZB7hJS8nYp7Za8syWisx2hqkYo8xyK5shszKs2q7Dq",
  "key27": "v1hBZNQd6am1neVPFPjHrDnPiymV14btbnHgqdgN1QqvD5HbLgdAiwZqeGbdvsWqvqzj64fuX8cU4DWpCmMPjZT",
  "key28": "2JwsXir2iUxapRe8tQHFJRdvbAEwEP2Yx6Nr9qL7mybWSpr8STS4NXnvPBjRMbgHAb8SEZaWYZBgtbSDnojNNhg",
  "key29": "4TEGkX3o8z14gntqG4g2WPSvCyVxDXnCpkHq7Px6xnGAV1fpCoHvqoYQ9Gog48gwivjNZxfN3wf9X1137EXyLLe5",
  "key30": "3FZQFDYwnUkK9ASNJfMYExynH1Jcmx3S4s3vAo46qFWjToMgBAyzv1N2YE6k9wdtCsShHRCCPm3HvxCvZkAv6huN",
  "key31": "251guJNc7gG52Mcs8pvKnNQvr3DFNBeCNZX5gwQyEvH7DhvY4BPw7DBPK2Rhbh9fd8BHeFxV3nBzj96HFfWbgQYz",
  "key32": "3QMzoQWC5mXV8h5q1SEFMK7YhMeyu5jQ2Vc3khN4VK2Es3xMPvWRJ6yf3wb5uUjzi82yr5Esw8mvV9UKMsi69SeW",
  "key33": "239QeeUfb3WNa25jw6Xb65xVQbGAaRUHiNfrAfZdj53eWU2Et4GLvT27zPisuqFAq42M4HmtaHJLR62BD3L6j9Rd",
  "key34": "4pyN4LXG9r3gQddZ2UYV8DSSXSRGZBLCytDYuuMRkgfZHmmY5QwzboAASCh94PKJshEcveqMTRBj5pZY46vWr37w",
  "key35": "2LWfnaH3WfKZhT585u6ZYTg6j2DMffEY4yYwyYggK5ywnCP8LspJfLxKNvD5273QSoB2xaooZzGHahmXnpd8ZkFz",
  "key36": "3AJL9vTo6L7sCXBbnP7cs8a94C5kJ8xFfkWvEMfh8L2nsKux2361khrckTuYY38C9pFVP6o75126GKFxp1tYuRSn",
  "key37": "G4MVMa2j2eBnboTieRzAneApGuELZX4g4tcjDbk8aCx9VfkLHig4K8SKrgGHrFm5CmF3f3e1hQQRBXBy35KSLnk",
  "key38": "5SnpgnDHN6W6weqBUDs9zbJJmNdgSdGWhh1tRiTj6gYXrArdXiV1Uurf2gWUAU1kxS3jrkCPdAEhdpBhfnLkYTxJ"
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
