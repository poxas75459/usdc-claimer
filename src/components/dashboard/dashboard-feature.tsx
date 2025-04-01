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
    "5o78CDgtsYZb1RfohViDzQ4Lwwm7kq44gGjXLRitk2nkVSdBUDm38ejCShiyyUwPA5Au4n843bSivbMtaRg1dNXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tq7QYD5fZU83Ka1mfpxECDz6dHb1ddqv7ub8MpQzniiPum1HapbwVoQp4ScHNwjQSgUt97azf8qjLq4rdMMu4i3",
  "key1": "2hojHhQ3LaZ6wRbPYz75KDjd7vXL3H9SSahH2NVGabbX7oSC8qNCwsnWCVC1iYNnagipW84Z9v86VLgVmHGhwyMT",
  "key2": "FS4gEzW7E19yz95A2ttvwyD6W6rGRBWRSYFXFvT8ALEQwkd3GCHyL8wTwZ4JzJyudGMWjMHVq4q4LjpoZ37Z7cF",
  "key3": "4adHVVKDWJMbp7h4qp8U7hED7iH1bpenkuYv1xYeHJ5mYUpXsw44mdJ6hQPRDpkcTWrjn4kT4pdM3FzTRxVjbZst",
  "key4": "2u9MQtPpmkdKsLELZN8TXjqZvqcP5NmpxQzDaWkADQBn9RW4yqdHuYHrfU79T7gmkYuoADQg5nrSnzB1ndZG8YEo",
  "key5": "5CdzGyrr2twNKn2ADG27V41CkxHSWAE4bAmD6wGFp7D62KUmHXPDhYHUZHrSRbK61PEenQm8Sna1c3ykqHDcCCfC",
  "key6": "817fyGUPzx2L1bktJUdAD3Kh1A7vK1wPPSHXvRuMbFxJqi3jX98JPpKBpYNUKvKttzHjYJwajwEhP71SV8sTzy3",
  "key7": "r99R9AsNtDjNUPFcWK7zYm5jeVZbGbUFAMfE147AMM7qcnmsYHv1aYF4DRrNuZ6dfCWYCNXyZ1yoZwsFmdGR8FY",
  "key8": "2UT9dNfaapo2H9LhYPN1UwixzNzb2oAe7jiT5Wa6MbJ1rARga2PZ3nQqsvSVMNatU9aZEaq3oRfPeb8KzhFhWcc9",
  "key9": "5b5XqrBghYYPXCpWNCVFNVZjboKnux3EBepg2Qdty7TEwoDPjzY3eVd3t6aVWnX7xWxfn4gHBYz2A3s3aVL68wzk",
  "key10": "4eWhQoDQHyh9ugNKPwmpwZ4Rot5AceoDg4ZryJuQ7vGESyn2ufQ7t3pTttUKQqBxN997GBwfzwLCtQNuFG82B25m",
  "key11": "QqnEiwXLtnrkqzVTEqdnSEpmdX47qWqSvSpAeRfeipv5N7xyp5SmvCBiSfmBsJAiWikd8eUviBH3ioXuJ5qzGxd",
  "key12": "7SF5d9xFmqFwgqPUqW1CMoMx5VZ9bz2BVV5ze6mFnhxDGiPDEkpTQEEX5szARA1ANxzt1g5jnJz5rPxtjx6cBpF",
  "key13": "2ntGammHUF3CuRzM1AauthU2xnGBWTqDSXZ9p74AUS4Gr1UwVJfPpf7tgEfdS2gLYzSZ859wmYzegjR1nX5H8iYt",
  "key14": "494o7UuKrrd4rBd1pzKh49ZYvvmkRWRWF9miEEXbFGfrJXuLibYBJpbxdoEhXvpm52rroA2C7zDKD2BpevaASRGq",
  "key15": "3GDXFWvukHKJi4PtLr5188g92LMRdz8qtx93m7GPvwJeQ19Xi8tpAYy9NduW3xR9eSFJCmbEouQSpfBBMggTNP9H",
  "key16": "3k3cCrhFcchSY2hCXihJkPcF2T4ZhJZLnjqn7NnspCr5ZEvbCBBZXBTD23CHT59YZVKjbFRtk7i12EKb9638W3QW",
  "key17": "3PuXqC7NLN57ZQU7BpkWEgnbF3e55gChdSoQ2tC6oXvaPhKQfLqPMoinokHWRajYgFMnSoazjke2K7tWPGm2DnA7",
  "key18": "57tjqtoWzps4tCk9H8aLMKrwj1BvxBQEP8ctSqCqvQisaxGg5SEtHivemDgyvpwS4Sitqbnde8bMXRvU136xMXjj",
  "key19": "1KEkSJdWnNjx1uyShYSGizaZ2WVnL8Z4xQmkXnrhMBmwFMB8roL6gCTBF8qAbEFchQJqhzMKFUzC4VYxHRz4REW",
  "key20": "5goFNrUCVSrACXZHV3kGzYyjy5FVNRfMs4ncVj8RrUZGxjcoCuYv7fKaPxzkdAoQrAymgBxjnbKzbXQjNYu1nzh",
  "key21": "4r6zPsv5ctXs8nKK4RhSdZT8msQPD8TdgBxQTeWn8wFRpV64gFw4VxmEMeHb2hBVTtziwTCR6s6k2URjhonijpjL",
  "key22": "m9m6VUsX4zx1AARTKQ7WDeMmMyy94dtXGBHDPggBvMXaFwMnU3Jrqk5sVMrRyA8WjCJwLgiK6S3Lrn1iGt9EtAZ",
  "key23": "5LozvBgyokoriMLWmpoFYUPet2j7zR4ChK5Qs87zUpSyaMXqqJUKLjG554PHAZKK8f18PfTccJob7wXiJs2Mf9F2",
  "key24": "65y3B5GLicCzCj5GczHSe2SGupnBNpqxEUsHaa44mNH5XfyUtPypmiwAqujW8GXcsa1zGGGHFY9i68DPbSy5JiAK",
  "key25": "3Q7xqJYooEKQMwCPyoWAvQ6WPS4xGvadKstQe9fkAwE4Cmwj5kT5kbq9FuLJSb3mbxNbscqUyJvNg3c4PijgCXcC",
  "key26": "3UYntif7Wij9WecXRua8nu4KC5FzKM5QQmsaVohmC9Td2eN7GqMrCjN8YNmhuBZPXeDxztbTWZRvXriWwKqvoxb5",
  "key27": "2pJw7S2VCZ3pSgQ452pVYE4coALZKMTrmsU6293eaq48a171iZvSrxvYdyeQ9p3obppMXFpQmFDcFToRwS7BBNUQ",
  "key28": "Djsa4ccxp8RgkDNogMquVPyeSPmyK3EZEUbSYPrb4417FZeKcHkX5fRRg965Lr2aa1atSV3FWa2Zxz4F958g32X",
  "key29": "3FMQGKXUvtoXXvEHNHJHXD4qbo6VKQ6AFBk4xLszewmcBmKYwWtDpaeGjGj4nYvxiWJScTR7Zvbb2JDRSK94kyGS",
  "key30": "3rJFGp8mXuHs7FyLkxUvutvgewthpYaPashsu5Q87z6JzvwjiJTnnLnPrmrz81xdM1aXf5sGCxVGtoCAbrD66p4Y",
  "key31": "3w7MShykbjJjXdPi17KhAH8hkvpkB2UiH5UgqAcSrdukghDeZGmgp8i4PEfrfucXu2XJ6sHtP281FC7EtfpQ1jmJ",
  "key32": "2EY53AFw5cazxX4a2b1FNrBYQtb9VJyebtbWRHjF6uDLuHKJMUF5htTHxixiHNfBeactmMUpkb4bFzZ76HiX8Frn",
  "key33": "5mjei8eHB7NRTMvaJMrkRc8vip2UmD8EAvZZUxsuMuJaPaiqMfmuxPTUC32ZNFvsdpN9PWBJaTd4fKHAzBsjB1HZ",
  "key34": "4r39abdhtwkAorVxprGPTtJWMxg3njgogRzKiFoxuLGHiqWpynbi8ghDnMhDddJfSL8pRsZKfJQTAGSCxSY17Qop",
  "key35": "4Ss3NFj1W47amLVQwCAZjVAnfNU2BythHrvLjEqBd77hYHvh6nps8td1w9un9XcqAFsEMDKyUJ129MJM5wXbXHTi"
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
