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
    "35VKNZ6EumpTtT6Wzr7H2h4xHR2JK4WsPYcn5GiKQymaLTPv3dMaowSfAQNuEd9PaQBmULVAq8mgQb6YEzF2Hz5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXbgk3XeSCbNybaU4JgeKoNvkELRh38mnSSMhJahaPZJ56urkjmwVjSkZhCKRYncvyApy9dx9F5JSERqF2MiHyK",
  "key1": "5mXg5AGzY1JHuX2KLKHcMui2ZtCREvuA5BPoy5z7KbnHXWr1mcUWKXjb9xtDSCujPJHmGDNaCLcFoN6rcCnQqs2f",
  "key2": "5thzx266cLG8F6sBLh7hMz2qfdUit36FnSQLGjLqBtRzQSq6enHxUK4zCDBMdxk6z7B4EFMMj7UMeKxFqFUjzftR",
  "key3": "5tjE9uoJ8geQk8taguKhhcvDqbWKzeTmhk2UPhLqDtHLNPGZDbbxfJMMAFZtbXRh3rZcEe5a9MqMwmYXKAViRtF6",
  "key4": "4eq2RQyTpYMHvfFzUfSjFFPQSzRtL7rVXNeX6C7YXtATZremttmY6asAnHDwRv2dnthvMBeXmwk5nH2Rjrp89nWV",
  "key5": "5qazCq1aFdwPAEtWHx4AZ7SWuHEDjxLGQoJAdSn6H4CuF5Y52fKCdCNwVyLtgLYp6CYWP59ouBBp88uPvyjXUNAa",
  "key6": "mAm7mJcrPEfpH65VTumUMsmhgbKuuzhw7kMoAjoTyaiqeh2B5SydexEVrAmGcCxo5kHkL3RpHXiJ3emNY2QQBD5",
  "key7": "3111dXYHyo5VTTgcJSPMkmqpnoCXqfbehhYFn8XhEUdBCABiXyiPFw6xP4WbmdFnLJQRi7wEeArQzojDsa9FzjzX",
  "key8": "3e2E9f1Z4YNgw39c83QJzYztae3YXq4y1zX2pL8mtc6u3c1jfRyedoHTx3Mrwsm3aDfCRnd6m6HTvFGLRpKSp8iJ",
  "key9": "3ChUdgB3p1otzJ3fKsh3hfcqmuKB6eVeE9qPsfqZBED5AbyHyp1TUGPfmtkiKdx6vCYVcjKMB82TKBsBfxyENf1q",
  "key10": "3bZZ8D75GtNfuKmcAF2s9Pr8KVx7HDh6NTigW7uVVvRJyg9kesDoSH9gurCm6Hyi31QfPgHmb5nSxfVJsu526J2h",
  "key11": "4GtxE6GrQtQ9SjAid99c3jRSNa1GCm3Y1z7qqibBKfMMzJSr2qhpUvCsYuSky5fd4JXwaRvg5TQLJho1XBfvRPir",
  "key12": "4cAumumdrg8D2KtgvcGjWoaejUGtSEymNhKBoxvEtR4pNGMrWi75VcFer6gaaNfciyY7vCvi52NdDUexi6hnhvmc",
  "key13": "2xyMurnmC7ufnCdZy9soaB2eDbHqSK9m6sscVTFZn26LZ4aVbwk8F15ZFiBs62JqhNSUX9Q54kBUcX3Kbc5L7EXU",
  "key14": "22pSFJaRwSfhoiyhhw5hX9fmA54znd9oAP4qDsZpRX4s3ha7hbn7TP2JMr9kjVa3yqiphrzAPwMdd6PHDn7imvzW",
  "key15": "395J1eJUzq4PpAG4tRxGfZk16hkzYcZ64QVV1gQD3DaeaxvfYDoc5PPk9A1ixzRymN3zqV5378afhZ8QwPuoN3ov",
  "key16": "3xJi9cDa6p77FvSmyB81DmH8z7mBKSDLTdCVgEHSXaJTGvtwr9ha1Ce5MeHJA6YF9soT3BTG4WeqY53Ju9U8qEwy",
  "key17": "35EdSZinczqq7HbtQqAkxWweksxUXtZhMhW8Kx2m3y2DxFGnPCKHQagw9g9fWpc3x5AGbmQSieUGNC6H3qgFuH6g",
  "key18": "38JRgZFSXRxui5JK9S3bntdNuQALhnPKcbkHA4n6QoJPGkXhJZ1Mkroam1ZDdksQQigFc4bckjovbANf69YN3QLw",
  "key19": "uMnDQe6BJxBQFRWAmsNuSJPayv29T2QxpLe96Ay1eXk76i7q6uqVttFtnmdTCoRfLE2vhUs5QwQ8VL8H8pyExEH",
  "key20": "47rFoDqe7uGyDppLimXfQjq96ewgCqy7VGXkqVmhbsm8Evgf37riB9ioseVaC9rhKYSF6U8fmNUfb3aHSCbdJrQn",
  "key21": "rDoztE73fEwRF6KUKpD8kGnkipRKMRF6GxjxWxC6phz1C6y2KBzz6FKhuYBjwAqpEjCoL9VS7MvF6QuXmCiPfuP",
  "key22": "54zGC52RDMBM4kqdjX9vJjos5yqCs6VoeyejJU7Ke1kg7uzENMRrHBqz2Rhh2AQqwa1Lqhawu4W475ydMVVfkB6Q",
  "key23": "56pFLrVZUNLkDDYN2o89QcjwdPnZ1G9aC7K2WsryFRcTURs8r7c617GAR3D8YRTtSMbqqGiVhRWYTgDmbR3m3mby",
  "key24": "5eehYuVsCMym69BVg2RZcyBrjDn1681DYpYdxfPiUuA2JGDDxm2noKLjHL32k4DMkWM3pSDCBHdcBSueY63xBb9C",
  "key25": "46gaNmeSazk2wv1Uib68SFq7Kp1s6jQuTQrEJUssJRXddKPQg66wTCPXAeHvUpPb2Wk69kHjt3sgcCAFdFDyT3cx",
  "key26": "265AKXQELZEX7K3bXDzaeVXjyxrGKGpY3SDvnXQJc56GUbu3JievbeoafUXAeZDRe5xpvKwvayd2wE5HkbyGfJLM",
  "key27": "vRNWcwgEpFCH7dhpfBxmt5vFsxKULnu6Z1RkRGVvVBfNfryqpUWJdsw3sb58JTdxuSq512AwpsJqkBW5zdptHti",
  "key28": "2KYKgGCT6rwMtL3Fhr6aZgNW5V6SX1ykzdYARWoyJNKi2XWPuxggcj3bTbUqbnwkWkLXVz27STbA6sQeecJMs8No",
  "key29": "2TUZYE1KR5nMbNjYpzdAWSzYZbi8zEzYhiMSGFzrpjGGLTvLNdNxqxzGb9SV41F1dxWfTafddWgZRgnW7NHYtKJp",
  "key30": "RY7LfmvyWfTiN7CKwpsxfXKmWqyPRsEcuCg2xXRDTJRJ6A8HE5eXAwR2RYA25jgYmVDKWgQ4b13Gnn6A4XsUUNr",
  "key31": "kNMfqxYJP5mMumXjfKR3PwbFRjGmfKUg95kfduaX6JfeAktWP5hDrJE4feLKUqrJYkqmx6rhagEGKXAi3dNNie2",
  "key32": "5epoMwvHrfkhXE13EAcvycFBXsk7Xhu4Fr6X1Y8HG7JiV8zbXVyjirUM6Y4JueuB1kgu7RrJDsHuTivHySafv1bt",
  "key33": "M8Q5EmWXn6qaz51XgWoY2DSq6tXVM8mcbFdV3oHJ13Y8GtZLy8PXF7EXBZPWWyLyg3FvK1rDVisHGMpS2aDNdXE",
  "key34": "47Y4USV1icaGtqm9rsouV8YzYRfoivAESzqLAPmFLCYM97PZCXuAyXP8DrQdZxCUMXpphyj6M6oSRcijakXDwDxi",
  "key35": "32Pf7KnhSypNLuc4CWQygvvC7AWNCxEMsD6FGmzTAMUqesGDCFXFAduYZobFZaV2Rvg8U7PWEZ7zFg4HvXmR5Vjh",
  "key36": "4bpmDN3pp9PCpgPBJWekmgv5usLh9stQRDnCyKKFZm9m77MbRuT25rNxtNK6V7cq5SqXVpKQoKk3zWyReo3Hpq2M",
  "key37": "5iAyLnbgLn8mkAK8ornMFbvRVEdXkBQF6phWXWfnpB6mhF69YzZwzi93Wg6Skyvc6T9b5GtmpbHwqbef838sAnja",
  "key38": "4PXYaLizktQv7sDEvcKqhQtwSwr8UYzimGdLYmYZP8oZAx2MtBED9et6rPyks7xXF8B8cECh42UxDLTc17MJb4EY",
  "key39": "2573ZUgANYDHQj6maRswCQjoCraAe2FTsjLjyKJMdRKRjmNRfpq6oFubbCHRGMLmorSwmXUfETFU7SqXTZfivpgA",
  "key40": "463LSz81t9KVkbtyfr6YhMLC6v6yzaxJpzHwsVvptqvs7pV4gZxEnTsZJzMpftYEtuCv4ksNoaiR1uFZom2pcP8L",
  "key41": "4RJ6NExEQCre4TVJCmUjf9DeF9H8HNvXjveRrUZB8BpKqsj4qsgbZGjpBNfpHzmXWUtwvcw694B9ocvbQuood8sN",
  "key42": "3eJFmiFxmBfYu7vaNbjDwvqVCqDXWuYjWLXbXRK55FiNvyxN9sAUgDkJ1B3Ns7BQSbRCBdZZfGw4NU7MEwnmExfp",
  "key43": "57a2tpGr4YHQ9aF7eTdQMP6FkDP1JaXaDDTjADrVJv3gXEx8LxspG7H9137bHQavSZYEXXkpupZcvvb1bWgh1aRo",
  "key44": "26tHBSLccKaeKLWMvXQSWcnfHSf7y8pWQD3a9SESYAGe8z77jopQv1LqCeLHL1Z4Hnazhf3dZgzWQmWaspJHFFpm",
  "key45": "2m4qWMUnuorL46EKXNuRVV2RwufXrKd5mYMgJcs2VrDEc1nx92oRkNbwtsZrHvNZHp7fNipNo2qkQYXgRHgqPTyF",
  "key46": "UEHhKodL2yzGUcqbCV5GnT1xC4GdrMMhhYD4XpXuNNAaWi2N6gxS9NL9MW9wChea7vYxRD5D7Frn9Fd6R5BpcWd",
  "key47": "326aeedU384Qf3day9BFdik4jpfxAZxoCpPvrw6K5WBYJ4wM59ewZxJYVHEXkUpzNNbf9ada3SwJkqsQKW21eB1T",
  "key48": "2z83VvryMzNYxXR7cxY7r5W8eZsttnaDmU2gwi9YjX9DX5UF7fXn2kPKUj8vnxaJMZCwVBM3Ha1fjdTn25roYmz9"
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
