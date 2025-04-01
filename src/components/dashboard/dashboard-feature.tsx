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
    "mtQLACMguCgEW4Xmv3QupaE8Mmc6PAdkKQJrQSqJA2HpP1fqrx1YAyGpEcB5se714jhiZ9X6MDYVhCJ2Kp6RU8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqjCpeoxUcszFGPZF6GkXX7KGoZfYs41B4xdY5SzqsMAxmCor7q2wQ3W8BgQQTaSZGwg8KNfScG4DKVDwU53LtR",
  "key1": "2ts7qwhJ8scs51ubCjxKzFxoMZzbboHqUbQm2Wd3aoUtECroXCxbm4v5A4nj9eiAAezbK55MsM4ShnczXMNNRqch",
  "key2": "2aBKykyExcvM7MCBYWXD8158AA7pPWnyqF1Yobg3EvoXbUPVQkMR6repu1B5muxsXhNYzmFvy5p5hncYkTtrrz93",
  "key3": "UmjFyAYpe8BUC584y5BcTN2v1vNtbG8nL9otdNUHdCA5Js44ce8zfRtU9ZkpQC2VfynWNRY4BR9nLyk9oAFVipZ",
  "key4": "2P6Taqucku5fycJWNAYWndTYbVAeLqXjia67jc6gXDtnkE6fdyF5TPbG394zJcyFznDzE1XR6HQcSySg6EfzCUxg",
  "key5": "4fUCpttQ8yTrDy581z2fY3dFLJ9EwWUVVyZJfMHct62Lecs5Sd5KL1CykQ1zoTxz8JZB3tNMBgx6nNZvEzK8WGKk",
  "key6": "X2ChWehUfzkEgh9aTWevYq9ZYJRXJm5dxiKc5PP3vnyTtYov2jdzmffNwtAPXArMwf8z8Ut1AeGvDJ3mgg1u9SD",
  "key7": "5aE3uiWyMwNqA93gk7pCm6tVMpewvPCaojoZ5vT2GzpTsbqhwZWuwjpmhXw1FqsrXF91LHeFSV5kFwSczoMsAbAt",
  "key8": "5dhh1FdDpJ6g8rp3ahLmBdtiaGLYHWtkcsQS9PTWK2qaACo5CeWix3u2mQT7B2WRaGKeqxM88mRpHFnss6JfsEb2",
  "key9": "4wgf3VRqJpMSX6Ct2CshnkRbc4E527bckjpithbUL4gWtd141toThAhgEPLhzn8CyAawWcbaMtk5a8YhTqyn9CLk",
  "key10": "5aLQAzWHNzXhp3cvXQQ5N6CMCMf7aTcubxYyXVrsKQdGKBT4oeSGXdsuAFPy1Fw2uY7wCtYfbAzLAPUYGPp2iNqs",
  "key11": "59NhbGj5PPyP83N8Xz1pxoC8bFb22PHVXU6LbyFfqtJ9VVZSvWoNab2LMoQvSsr2CMYAtBBxjiXfqobUxg9BqXA",
  "key12": "23T8GBpGFynL4rCy5ExUe6U9Pm8hrGE5yUuqt5Ha5xxjgSALdv7uzgYMMWDCsSLrBsT4mSXQN32xjLy1BqSWKQWL",
  "key13": "3RmE81w1avw2Gvsy5Vpr5Knu1MsJ4mYYkg8w8XtfjD35itRv6NsAp8KDNGYGLxkU8cjYNQV4w2NfLfuEPBAfFBXS",
  "key14": "3tmAUC5PWqvFMd7MbtqSXHDFwkibr2tmdxgn7BnE5aftX3N6DbNnLAmkPNu2Yx232jXrug6mw2QEnyatpU2yVxgE",
  "key15": "2GpTeJgy7e4QtDsNuyFX5Hyt1miYZXgvDJ61saF9RqQnpRXpwoRr11tGWS7R6DoASfVG7DcH5rxuFr47HMHzj3yx",
  "key16": "4BDTXpkevpQg4akQPGWW28dSCLd5ervKrvWQZfXLZctm7P3kWuB8qQC7RoFMLrbTymxg25PaZnCKoGkTa572HYC7",
  "key17": "8yvTfWN2kChXPzThRP147nnk3JnpiuMURVCJ1wuSBKnziKQWfeL5Kmx9h3uBpA6pqXaY7PyMzaVHdF5yqSefoW6",
  "key18": "49fomJ86PN97bdwR3rfkBDnbUnpwfwJKpPPjUmrsKXZ5h6stQ1FzUujb1RN3yUiqpWxNM9TgtK53C98FjbkRdrg1",
  "key19": "5rTg8UDu1qScooeYCZgWAyqgyQzmjGvWBQfmMTitayQskzemTaP2gW28kqfqC5ZGxRGMwS4tjacbDtziRNHweicC",
  "key20": "4oB4vyYPBoewScwHSPKpgd9muWnzRLvf9xDug6ytnZfanTysSURkNEXD6tTQ5zqva9iksrLw8hFb11FwcDrDfL2K",
  "key21": "rQsxevrtqkkujneX3KqVP8Wb4jpEWsikWLLqYiQE9GwwLkWYKDvZVNA6XmALFB9qhx1VmRrdgS6Ns3yv3pEK4XE",
  "key22": "rfpeSRn1BHyfaqmh9XqpWoCEGsPkWJN13VgbYaNpCmhzkV4De1WH1bBhYV6NqtMEaByiJfShimd7ekZZR64SWXW",
  "key23": "5VLT1Fq8dNVzK8GCqm4PgdEV8Uf1vzAXYhMf9as9GXN3E82FFt6Y8dC2Qic8gYRrEzV7qD2Kty9Vw5DdL3kiefRE",
  "key24": "4TZfmBUcXuFdrmCc2edzv8YwzjxPwS2NFGa2CpDtnFBkHMxfZ6ktvp65saBexNb5gHEMDQfLHgd5dpj6cvLRtCnX",
  "key25": "rZjTM8ua2FRHSzw9kJietnP9SLbVS7htPVZgboL225oBMey9deAGDmTH5r1J9JyZrckhCqLx9phGd1PEdGLmiKV",
  "key26": "2hVBnnYSwFP7KjzxcuKyrsUzoKLgPJV1gSrUSqCRuommTBgGxtvERADTaBEvVAHmift2yKpFzsoRsGtASbdJgzca",
  "key27": "4SeKUc5b9K9B4tosGk5iAQUcBUE2xJ4qpSQf57pVyPe7Nj7m5TzGpVcEVrvw1W1sPAcpD3W1zmCgXcEv3LgvM9sJ",
  "key28": "4B791gCoUxB4gJ9YBZMUebtqjeYJ3cvmhRNy5uKoq5dV9c1R6BuxRkCoprA6DuP4D5N7K7Wfy2KLo5JeXtxrTh7c",
  "key29": "mv6QbaufnxRfqBLnFrTehXeG7C6EeUcZyBn8RDPXXkeB1iirS7f9Eg74JGZmzCFW5JQUWvB8ZXjuQ7rkb5Cdat1",
  "key30": "5iRAmux9xc919xrZ593ktzxp97N7qyb88Hba9GNxk5eT9SqLbSo9MZrU3GrS6YFAci1hJvv6TdtejJJX3385pbhD",
  "key31": "66Cf9w84SZ1P2oJ6DZvusN2h94VCCFPJMJnAMzX4kjovnZtkvvumcFtQop8L51ux6JyzD5i3eL6rKNUQv5QzeAHK",
  "key32": "35MfFipUqMeRUfwtvMQYcD9wu6BMBjw45Eghvz5yaYbovrLHjeqZ3EHvnWfNSM2tPEPmopmJtzQcgSyTTgRAfmff",
  "key33": "3qLeb4AW5SJSmVrQZg6iWAAmWb6GVsJgLhKod1mD1qMTiDEwPHi4NsFsuWfqcLHpWDCphvGyNPGjuuCZ7R6GKZtZ",
  "key34": "qQZsoqFvEkUfUGGSUo42xGK6EuRCMtZzRBCWQkBR1WyyWhXNpdjYg1qTCDhq6Jfwa2gqte6TPN5qY3XUAVXQ73B",
  "key35": "2F6kxTDpTxHswxQuKAAjBXZQBhpWnUEjSczCAh7VwMwPZeswbQBLxVXB2Rze9E2AqEesDBHgcJgPY673uQWrrYmo"
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
