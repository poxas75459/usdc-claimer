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
    "2isWaVBXdz9iZCoQKwTXZ7e6dydoCsKwGKscLT4XcPWPUDxuVsLzKtL12hahALP955jDcGw5cX28oqZhZ8PQaqHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5RrtipVybdvCvAtnRn9YBKwmYeZH4M3RH7ErAEaVojhUkb8xNxSiBLP7EiNGoYP9JVghhi2ABniZhZfKpzoxbg",
  "key1": "dExXWXmTSu34EWD4Sfn8NW5yvT2veCNMbFQJjBc8QPsYkJyQ1a5yYsMFvGnAJ2iEnw9TNgLerpVZHwBzPHVPUeY",
  "key2": "KNTEckMNo7dBuR7NUXTpKXy836udaRukqxpZU5sC26Hd9EiiS9MSLVy1CbpcU2hzDkeg7zfFZ4NV7VLvbmiMTE2",
  "key3": "3FHLN7Yv2WhaQ3eMifminPR9ADFsbQspm9oHRok79EbzHx2iEG8LPAPAVF4CAPmdN813FRNnjQ2xCBuxNN2fbDQb",
  "key4": "2NfvmFF8EWWcEyQgTrAW5Y35vGopkUJb4h6XRkH2U9Cg5vv4wBb8y2dCRRkFVNzabUJkKhmDcqZ4VGqmvJdbmF8U",
  "key5": "2ycxQ7TsDqb7jhZcN7rxTA23cBsaA6TC2yXqbgiixRZ8oPRrxA7Y25YawZe4sxykRCJeSuTw8nipQ3CtDnHnDUb2",
  "key6": "3vDMyfBVmQj5KJNm4yfr2e3e7Rsvus5UNAZCZjks2f7z1ifc8Y3ej8tuMMX7UWAubTFSV658szGD3GWg8FQPzrmR",
  "key7": "5im1ypo3ardHC17tH9VEPXkPWmC2WHHahtP58kFUTYAmtaN33JyejKNhzEXJMur8ZAzdbRzxtJRxa5DgBUXDDsda",
  "key8": "5rm988ZpcsUBXK2A8gtZQW9Jsy973uPJR1HpGLuWwka5HqAzspFioP6JoP9anQEQUMksu8gepCjjegLqb2myz9zb",
  "key9": "2yunNvuSUNH11w1kx7H2fNdtdh15i8qyKRhoYNezaXpPT8fA6hEDcJrCDaq9v8LxmrMxec4VnoymWiCN658dzz29",
  "key10": "PfjW8tm2jHY2bkJTYkhDr9fWGE6csFfsxJypTAAPbAgJNu284BQJn2o1DgvQvCb49ecdoJWHYynyNXf5jRi7TsK",
  "key11": "4pu6DCv9R7TEfzeNUXnGy7UAks3x3gX8poxHV6GkKud8WbYRsushAYU5y6aEzSs4A2wiPR7Y14zWWatSG4aHjnLq",
  "key12": "4SKwNpUfciJVUh1cudGkFj1AeSN4hhGQyNUQH9Htc1MxDh6uJmGzYnnQDraLPFARRDp6B8QhRL4ZLJL5QYCp1jHV",
  "key13": "3YccmLZW8PqNLcVggFuWjEHARfqjsUtCzXuu9uKajNz4Mn4hF5smAKj47tZZAe7jhk8m8Vm1x6QzdXLQaqL7umis",
  "key14": "5dfGixM6kUNJoG1tB7fyXGQQRjn3Y57sPyFACw8Q2PHKQ3hKjPcm8b7GApuYwGemtzmrCZBgp8ReEgafUHGDUc1U",
  "key15": "3bNZoTA9iQTSBVZtZNGJfypq394f8HZK4QCYn67pj5eot45Q9U45Q2B2mTh94xcFRcJsjsoPkhmqrHYBWT1mMrgJ",
  "key16": "5yqky2d4TsXfQpZkezewkynf36XEoRxea3s1idVezPzmJm6Bw5h3cyxhqwgDjJqNcaE2d7WfuBLExKTdEvYWcoUn",
  "key17": "424ZG8vVS8sQHKGgq3oAHVZvYnYUwQMXZU86sRA29rscbNfLfCHEjKQ74W3THwjdT1XJDjdFCSsZhk4u15Hho8Mj",
  "key18": "zFaLMkQwMAaD7xpn9DgxxcmJhC2yzHmF9Ee8ngf8Ceg7GvAADbQzYYc1o7uW8LxXjuR6Li8ZMNqeGhTPykJTbeG",
  "key19": "52y89hsawfKsf5waoUc7fCZ35FLZRife3NR5UnRPb3udX1KpbVT8JEADpySHpndGUQzj7pSStSc4Gpf1wcp9arJn",
  "key20": "eN3dH4s4zJMeK69yLQUEGahVC7eUfhVcBu2p4XQ1P8mbnwzj4izByJrNFHNytBmYLWryJVTRtBYSWVF8T8G7JXP",
  "key21": "2zud89ugKEcEn2hqXerTdsdA2eabTf8crUbgdSjk9dAeqisgxiYwdYoBEDEt9FVfdaD3mLRcZdsDa9q3hWcL743y",
  "key22": "5yYJSVfSpYBHhPEPicYCukc7Wzg4y5QrMN5wqEajUckT1EdxysHH9bn4ob7u5MX15ECS7qPnDHr9GMCLWNKBhYhq",
  "key23": "2VyCwPyVMGqMqgYg5BWNNC1AZgLgGG7d6TBtXkST6Y3wHzUw4he57sPa2od3J4yFjotSyVpYTikTM9k5jZij641M",
  "key24": "46gdLjMAc4jrQWChVjYN4qpCQZzzRsDqRwhZurXHsG28veMz7L3DRFAvZ2E8HCpPWvKBb4DAwG3CuZ2r1SY6ETDi",
  "key25": "3punLNzxcuuBhVRaTahqE2efFqj2Bh1G6cnxm6CdWbqr2AmwZ6NWvcZLGVpC2qLdBv8HcNAuAQedq3EbVLqkKfTU",
  "key26": "42GpFYhsC7nvUvTvAUrfkwTS2RZ2xAp32kUTXHsyXb99jmbHqNyNaNSa2RDrULywem8nCKMkLJRvZyExBTH3VU8W",
  "key27": "W3Ads1PF9FtHmMsQ9nWXZodTXrk1cBWvCAwhqAzqvMDZwTDMujM659wvz57b3nzaPwQzqn8ZP4WBrHVvugvcETN",
  "key28": "3yf65FT1gU1brGxkJwtA7qZKLKfceS2HfRLPaHn2sgzAe3ULonQBGGdiGcSByEKx6bHasiLq7ZpVC4UvbGGgy9Ws",
  "key29": "551xCB4UBavnxhmExiFRF6hMngLkSXsWPDunzrhqeoxWXTaGVR5pdeUdAcLEMaCdBUtYbshq6Lo9xvxDHesJLmEK",
  "key30": "55XTskb8yyuvoaaxL7q7WRY6SnwtYTFPnHAPhGUxKhfdUzGM7AeJomTt9jdh6hunzNdwS1uJWf6H9STcHACbxQ61",
  "key31": "2hnCGttfXtE2DSppCXKR5keDjWmBxEDi9hGZqPMaTSbXgzvYnjrRRNpheRKX4xj8YXwcnF3B9RTcmrgkgA3BpBfW",
  "key32": "2rSrezx9c9tAuz6inDUW4ChtUu4msuRY4Jpp7TL6DABJ4vBG7Cj3yiMA1o7qsZhuBsJUcP5Z2nXWJaqmweMPCrWc",
  "key33": "NshsXamgWK5y11nsntzkYkH8EaUJ7dEjoZ6i5PBWCCZSJm1QpD33K2KrMYiV6UTcBLZNEKUGhRcshcKR62QyMqu",
  "key34": "5TKN6T1CvkcTvDy1oLo2619PibCX5tWfgTPkEo7bz59Mq71JcKtDZfmXmFyY1ZHSxnvsbXJQCiHwvbZV2e6RydcQ",
  "key35": "4tRBDZKfBaSng43VD5FHAPkVWnTuMXxHpKq7dbAqUvDsAgzWjKEwv1tamjEhtksp61TcvBM7awtUwibPpSDuxbmP",
  "key36": "3FGLYKVQTr7pVxLJdHu55xUC8ZmKGjdxRm7MzDW1zDvZuq2H8c2hcQrhX8PZSumndYrNDesYTPTNWGXsYcgvEKAy",
  "key37": "3kmESxYZ5XvCU7iD3XE6khrehnA4W3FENykNGcs36o4qqoGVfKdxVV5mTgccRK14qRp1SUn2JAkMQ12e88vNHY7q",
  "key38": "3aDA1EJWuU9QbJuyqDkkgJSnbgb3uFDvrVZ2vY9vJPKBDTP7wYyRvwKpV1MyCULxgCX2ih6BvZrWoJbXdp4HhRJu"
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
