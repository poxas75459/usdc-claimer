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
    "3XaHnUU5NAdvibCq3DQGQZvDQDJN2kxUg7Zom7hL1wSV8BQY6dtPpvUd4jMWtiwgFkbXk8eDmVeZrmne1EbqRWMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oGbjBDSaPoF4mEpfVt183pxWrgkimBNTa8xZ9kKigS4u8u7pCcwqPdowxtiFrACLCsX6EJLRgA5WUuqVBrrGWd",
  "key1": "3tRAYfRPuFeURnbXZXM5mtEDq4DJLT1uStuvPeni2EsQZFxuhQ1fcsJusmZ4BPQnR2odBdBLDekFjgJuELiXiRUU",
  "key2": "5QCdfeWJdjerQsEUVFNu1yqaZkAZuDjSpX1MJWdJJCR5rZTyExHcvyAfK23EWAQJPbuA5g1HmZ3qxuNWMMrRuZtZ",
  "key3": "51uBQADmoVrv49GiWLzyEyNJU11WQh32Fdwz1aJGzFA8aLozWQCrHCExZRZ4m3vdwDhpBom6joxyBnQy8JzMkeD",
  "key4": "26Ra7y6owuHoqLMFxLmnMTy24yEztWPwTtewuheeGjZTjGFfgCMezs1GPgQPEF9HhbahR2p5yJNjMaPRg9QVe528",
  "key5": "4QHyRtWmUnBCqg722X7W5c3C6Kd2qZyzwjSQsJtNvAVbbGEs9RNj1SSAEy8TiDtWuaeiwr9LA4sQ7yLZit5RdBqF",
  "key6": "4jnyJdp29BVV41mKUbDwdSPeETb2iDM92QNoF8oNdS8cHVsdmAszn5HTdk9QfcPsDvw1vjUoFySyHetPCvnBnX8p",
  "key7": "2JniEizRHCJYaJiwYfAi6EFU3bR3FB56WbY95MBfFCnuKxbzA76nVfYWRnhNJdmys5adv7KYcespv9XPvDjHeBTx",
  "key8": "5rY1hcNHKwQhmcaMFxumcBjbDMfqdzN77oqvui12efoYm6p1LgW3QoCHMcJEQAGUhV8mF3LUgCefN2qsZdYXTKXK",
  "key9": "4kKUaGXuMiSUp2yaiQKqgxBTape4S5smeqPcPninSSa9bCdRMEuFSx8ipRtpAN9Kq1Vo6wKBxxMdJYURnpDcYn6Y",
  "key10": "VuQRRNzukjPjkJwBfcAZrg2BTzdPugzKQniUroQgriQACBoYrjg8C8rCxhmegMZBiZ2c4rzCZ5ZtxwWtctSznd6",
  "key11": "5BhEcTGUz9Yz6ap1V9YAF6D5ZbnJWLDNE5mhW9udGYf4w8tv1QRupahR6na9jrTa2o8BtgBtfDXLE1gYaWZen5XW",
  "key12": "5Mo2yJwrjgTUZxuKhMe9g9Cd3GDC3EzLPdpYmaYeVCzedmpuVnMF3uxnNZZRox2MVEk6VUmGSzNmc3y7wgVTY3Kn",
  "key13": "2FgVTC3Gpt9NwSKfgSRdqwRiPhHrbYHu3LSi6jKJ8NvM23RfxdhrpgVRjzHHDWCEzsehc5jjGRQcSrHHvDvNjYuW",
  "key14": "QXPDNRxWHxrjxMmjR8vGPuCFjSB3gLyZWkBMJebvJD4cHrEGd9m5W97ZKpKqbqA9UDG5y6GoZxFKph7DiqeGA2C",
  "key15": "2s7q9EjuGM9hyjS7HW3EDSoiG6vUWdpSo6Sr4M5cZGvPsJbwkYW34FoqSg4Q8nqHUnSZgd2LbQt7t3HyzBb69UA8",
  "key16": "cn3XZdyCFvU7mcREBsxLHGMRvRSVoSDysBg92NFQGj2UafuzJSPa6vQyoeqPv8bsWry1vVhEmokb2rKQkCgYNwq",
  "key17": "JhLMRoVRqzahvcaNCwMduWX9RA5s7LZ5D9h7J9AKxtEYFCJS4eiq3DMd9LddwR56d5impzm4yR8GYMZVShcHcFL",
  "key18": "5z43Z3N73k7yTdWwGtU5GrvfCRrceZmSL3ctHwg22zeQLVbmiQSbJThPkNzMEtjvBUGcR4EovZfPAR3v35N7F7JK",
  "key19": "3bSQUSn8xVwsm355HS1XfS1S3SZKghUifhfeJRHHXFAMkbcRFdEbS1c5yfHhmuhPSxc27G78JTvHZ3k3geUBTiB3",
  "key20": "8ReLGiyjq176ivBf1EK6sUmnaSBC5A9Z5ujCizknvDEnMcpFGU6u8J2Py3H57BKtt34Y59rTedtCsD1gdQCZF2e",
  "key21": "2z4jveopinRfr1khG8pMqBbiMw1vqjyQEkYtqtf1KdDzFFSG9xGoNiTo48fcQvPnpGQWXkdmTLMDzjfHYqjRtTDd",
  "key22": "4ThXy26ak416m3egTnt9C9WjWruBDE2F1agKntmqLqxGxnBR3u6oHN3x1KUC6NietdNtkFwUMLdTfPincZGWMLLL",
  "key23": "3MT143LHsD6w78BSiMGHt8GymxqD4q9W66232ws1x9mzXwN9e7mRbptm7x6kgtHAAsTPLKWaS55X3dpVdu7YL1iQ",
  "key24": "YCcZNM7oQ7i3ecyVUyq9TQE2u9trrLm7HxikpRr29xuhjJqbK8YfmrR38PjAMEFdUUnoFVXhfjGgawMhBJhhmAU",
  "key25": "2LVHxjQt2EtWtfbdEqQrr7VgU9vVRVon1kTN58sHynFuzEXU5z2G3c7xQ5U6PFkru8Yim8wdYugc9edDzM4LgJL2",
  "key26": "5HHGjj39PCNobJzqYqGhTaPACG6YqMNSeRJQmbzeY1jBecm7MKDEk4HT6eSsiKW8zLLD6KKbB1382y9rMeDozD79",
  "key27": "4j9WmYAfZfGSwhrhwbJMig2C7fJaCXiGo97t3hVzSXdX3s5Q6Asai5GwfZBAjpEhciNhqRuSNRJJ5xwpsFPtB4WG",
  "key28": "2hd8fNbYRXhVNUCVnr9mqypeTw1LpVFtoC9f5TJxxGpKDvre2Yk8FhToQWst7WUN7SQYuPxo9U46tbhX32UoGQ8s",
  "key29": "3djTzgCR69UQz2eMEdLiGVsfnwXStPM2oaNYggtAt7M6xXPNQG5SFQSkhGZGmherJYyqePMHPbXTfCyJyMw82JyE",
  "key30": "2aniu6rCyoUqv1ZrQGQhAHKP1XrS3hQDXkFyzSdFhdWfZChzCgPW1fycJSRbBDFCpAwJ5KXSpicodydckp7TcrBM",
  "key31": "3C8th8ZS8m1Un18YKhfZbREwqzEB3Z8KsHCmVD9eSFaUad8MtCUNuwTnyzCdGezcetb6q18y3AnkBiwjui6QTJ83",
  "key32": "23NDYT8JAGXtBEhjp35PyMzrmYSNqxpmyKBvkbqAq7Nj5BbNAKUtJDFyJ2p44XXx1pRWWM3zEU2mFtnocMWurWur",
  "key33": "26c6i2qz3NA6EdcijKBMFkbGUu1DZNB1e9mJs1fVJMvZPesvd1ZCS8uaGNkrn2MXLFAFa195p3SwAgJx6RhRzevr",
  "key34": "41SVFUDmqLqJaqafjhbBZRPzuTPYRg8cNoz7FnXFmdRdGQpNRGtffG4QqBYPS5u6DWKYaWvpFNJdmJnjzcBiNTG6",
  "key35": "3Aq7Y5uJ3J6FLAucVMjtCxKXoQpn8jxGJo9iYodvYKZt13pXNuWkrpfzUhjxAUmbg2rEBuhPxJt6qc7LLAh8mR5G",
  "key36": "5Jhr2c7YSgwS5vB6Ae6PSpVA1Seqy1JFo9pSsjvFW5AsAqcLFwf1VdnCzzymeAnkNSNDA2TWpf3p3GdNMDeXr1Fv",
  "key37": "2ueTT87saToDFAiayxZrgrAiCDUmxMh9JSbimxJ28Cxrt49SYns6KDQTQHBmvPJa1AqRFPVErDB74PpacqmtTwRH",
  "key38": "4mXbDFoQETo5AJtdz7kByoupE6ddBrxo1afgygnH6jcj6PnrkomwVgFoizwRKr1KuYgRWwrG4i8cfGFhwUGWbQSC",
  "key39": "61dQsH74F8AwivbY4iga6YJo4NAapdHUVBT2DnvpuK7xnwBAoraRajyAqHQfwwQLUa1i2anYgqWU99Ue86DZsdNj",
  "key40": "2BA5RrzVJ2qHmJWsDfNUbjxNt6YHBtVGf4CX3gTwDmwG7c37eKytG7Wb2w3WoZTQTgMFf4Vnk7xhKDWCgCmd47P7",
  "key41": "ADBTP9CdRhdGqdEW7MxjFUqTJt2n674QSiycBi2bu53TL1RBFTtByULQaaUQaaMRsvH6Qjc4aoMPiU5YzJaWVCm",
  "key42": "5vtse5NVv36zPzq3FvWGHor27huNTMZuQ1G5psMiepoPLNKi2yCcJfpyXn5c8kzjB8BFPDrbwDUGTWRvBnGymBX8",
  "key43": "4CX62CyjzcjKS6wdRHayteLiMqTxK6Kq5LoH81QNppp6mCr8ifimbJBzxkAWBxE3JXfM3BM7GLjChJNNBnRwZ3x9",
  "key44": "29ijJ7gEDL55SthjKLLCJkVDeZNVjV6R3HE56FC92GhSqL48SQqgrThdoUTjPNtrSMjYnQmdTkusHgL84jdzQwsT",
  "key45": "2JCrJYWUXLRNUJd8kvsvHuVY6SmpzpfjvRFg8FH19Q88iUXpP7SGsZVA5g1egZ1zMPJ7VPRHxCpb82Kwt27jGme5"
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
