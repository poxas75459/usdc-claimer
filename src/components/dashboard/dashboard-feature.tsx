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
    "4tzqqP4oNZUaD5HFAfLpanixp25pDdavKT9SgEVPECXW6ou9UnHpFvxQmJ2zux5iAkLEmNk3MFWE5WHMRPUHMM2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWb8ks72khp6fYQqbW3PW8mZXdGoQ79DB87FEWgvS2npEgwFWMoeXkMMdHeq5nzLApjk6ryP31WyZFBb4UPpMbE",
  "key1": "3iPUbr6ezGK2jpBgAW66MzWmhfLS3vSR8xsBCbGZPyR8VLG8QvdcGJuswbBAxwXLBkawah3aY7YkuSupwEwMJUkW",
  "key2": "2vFjqgXog2LUiRso5D732vNsK7gyfCkQUA8n9H93qYX5uhKp25XuBTJHZuJ3WYReyVm5PmKd3NTNk4tg8sCmPrPa",
  "key3": "3GWeiKHpPvME1Hj1EJuwbx7WHjb9ffBdNFocQGDCA3xvMhdWFzRHdxZ371GtXqCJMkncgPvyc7coJrNkE3b3HeJa",
  "key4": "497SduCLGgbu1gTYY2AyoZF4gQifNrZjCZoVAzQ62Exzzpuy74azDJsTAnKm2e3oomNYoPuKEUjy5xcSUezJVYVg",
  "key5": "NGWEqZay1spZmLYSXk2zep9GEeorgpJixicnk5wKpVqETLRzEQYRSMJEK4fVeSUXCSXFerwQZvS4mE5Mfo9Y9Z3",
  "key6": "53pEDfhUNAhruJYuy72APJMHotpiG1UkWVxQjwWMBnYXjYfWWs5oVrBGm8ByAJyt9iQe3rNVUEbuG13sGKREiQa3",
  "key7": "4KmNrBH9KoXFRibZNk8ZfT9kex9E6ubAbHro6ukQeCWxsZUNeFUzxhYJUMTGitdKiJeJ1gGygdSunGMyCP4wmeEc",
  "key8": "5VVgMvnvKA964u94FAkLquCoMcsQFaEkeNEdPWYmRLHE6tAVuHCHq1WpQ7WGE9s9eVDTvbXwSe3gUueWY9HEkGjH",
  "key9": "5a9YRJkUA7GaSctk598CFbTFroFCkKadixeBm7i2biSsHzF8bCg1aTgqVxy9763bfXAj7v51qNpbUyfQzxdEwTNg",
  "key10": "W2q9inJRuLgbTxWVS824aGg26wAWiXTak2g8NuBQtmS5oEpjyNodsreoM1H2gSuH4wgTTococJvPJSnN4s1T7sj",
  "key11": "2zqHsuPHqPVHgE8h8jKokfB1jAcUjPjLFQ3rpHGNgYtZVWrHhZBr7PPMmW1pZrHbbrcL8otoVyy75jLquvUeUYRh",
  "key12": "3w1onmZ1MFZ5PZ4TBP4x329andCNaB6FQHWM4o7heeSQJA8bmCHhtQ4yUrouLsn2Yd4zAUeT7mAXmGfk92m1mf73",
  "key13": "58sdfYCUtUPH54aEJmAzpNMEgFW3jHUd2GpaGZ1qeKBxHqHwbkHPmAdQgTvV97129pPSrGcC8Ny2s82Kom8u7RgW",
  "key14": "Yij6C9GJtRNp9FNfywuNYR53ZmuSHtstUfyeb9UUsk2ywuXdY8a7fR6xwjVigdSBDjMeFviGTuDt8Ss8qr1sNTL",
  "key15": "4R8GhnSLvP8LdYXZXLJzFznsVonU2tZjZykVG1KorSjQiWkxgnN3xQeUHWPkH3PiquuEAE998gucuJBvDyvFsB3L",
  "key16": "5A9CBDEpAs7ym6puDDg3sRMdK8uX3cmS7mUaXP9Faq2ioF2onsHAXzFe6iybLKv8wydEzAMMeLxLpuNqezbD9A6j",
  "key17": "4XyG5jDDpZcyPnBjmsfBX82yMVpm2DLVfHFRvHEeHLqDGzsBHg4nX3yc5WwgctZf26cXxUmZaBzojsgrZVT2qg87",
  "key18": "5g1r2NYHhuRhPQsbehqXLtDo8yzk9YjonjLF796dFEEb6xJUC87jKgJSGTYMcJRMZw6MtgVPPz8w21tt3rNVsTZq",
  "key19": "B51zdSf8LK8P7CcWepubUpssN8a8aW1ZpAimZKTUn5rEE4gBK4ZJvRqSJXYdSy7TWzXn6jmCfhUp9WPuLK2z8p1",
  "key20": "5ecXPP456UBiDpRu3kkXWV7C1uijbdFhBJX698mWcsXHAZmaTuqzj75t1sbdEyxJHdRj9qBabg922prNJNB3JQzm",
  "key21": "43evnkZJ6SNcqNpL4cJDi3gftQkdcwU4ZBYcK4HKyZUUs6XB5cnJsFPJSfryEm95nK3DNw1e2pa5jxPMQWjBUyVo",
  "key22": "2mKicz2UdxJvAFGkMWkFC1PCoFaVzZRuy9DgyySCiPijiXcSJnKDp1WYS1TW2KeD6ZrxH78EAqcM2GLPXZ1PTjrx",
  "key23": "4DZjWWcmZ8ggutMdzhr7rAyfxUMKAcDa9P1t8rZjy5GCrmVcQ4CAJ5nfZZDojnjuJQ3wcCgzG2uMWgUSYUthqJpx",
  "key24": "4X1pun76rQmb7GvtiQ1ZZrjY87x5dHzHgnyoTW6w8HMMoytmTQbx3VxuY51BwoZ9AtGibHza7bHrLTkZvSHiQPoG",
  "key25": "33tQ4BXCE88eRpBsdayvokoMSke7gQYBnVYz9uCB9KrSbT5XiW2hjx7knSa45bSfmAfJDHg7wbvvwVMsu2M4EZSQ",
  "key26": "5SMMkvFG1auGdLTES2EPRLiCB9TaEwBKze7yteigZt13TQvtTF4Ho1RczsgW91ezA8eHNeoh8YM3rD7hFwB5miee",
  "key27": "5KV6qanVCZwjAe6YuXoLUdqTVBpCQB6DTWjHip6fZ3S4FJFp8eH9XJ4744MGnjC1SWcvTDmysf3E1KpHjhN6KAo9",
  "key28": "g9rqtmWZbmHwGW1qxZVSsRoaXxwfgy1a5xwCZ6xwzkbjiUKsduSzCB7rKBF2ty8h6SDgoeUjbr4ym3zpvr8SYr5",
  "key29": "447HLueMuTBuoyMZvDh3YMrpGhBqzcwtLssd5kPyh4sps3nrv2iW5Zof9L5FJTESS9gsuk3kZeQuxpuAhCMbALYK",
  "key30": "5a3q5ySZFv8TiZgHMJp3US159jTWjsKkfAVCsKdjp6Upahzj3vuqNui5fRw8TykoD4aeauRjndfsJ9nfcWiyzoc5",
  "key31": "Grm8aKAYeMKV493Nk9JbT2kHEtbQa2WFrzXEwUUHdEwMFai7CGPi4LD4mFNitY731CkJL2EXqY1ZkQef5ZF1qgn",
  "key32": "2QhJJDyPcJWpMPz8wDdFJQFfJfgd2nxfycVGARn4thwLdJxQpE3nqEU5XoiHFNMMWiH9eowGcTgFQGXi61ehsbEA",
  "key33": "4KQCMrBzQtjbY2rEt3Z78sL4C9JFBBTZxz47zSQ8pDUxsSFkV9896fVQxHWRayywm6ncnTHw8qEe9LVtSEUD9hAK",
  "key34": "65y5fNGUTJo3Q9yC3uvpa9agpZQRPMo9fNaA5tiDjgRfdzNn36GrhqJ1qpA5MeAeKdSNhgVDFb9BZyuCWAf3NmbN",
  "key35": "3w6gw1SCURsFieZmGqpLcyyaob94qhHAQEyakQZYvNsv85CU5ShhAV2S4mQUbXNLRbd4Z7QExMr57k26rNwJ4wRH",
  "key36": "4PZLj6kqUpFQK5L8zbgnPNf2Writ78an5gQMZLS1YGPuasXZUtQoQtLKTeiuoPvyySEEfgnDA2Z68p3DxbErkosj",
  "key37": "34ySpKnmnXo2CDcA8VHkULGw97kuvraePHi6Qm3DRkmLKfYQcuvXfsvZ31NTwJWUtBLmSH2PoKc8mMRNMHJbfZMG",
  "key38": "4H44Mqk6DsenwdnuiuCTKrUrwgg5UV2Wtxcuo1LGSSnf4rRaGGnvxuzSAD5AsYKvySAMkkWvUTG6ErpgFHaZqrut",
  "key39": "58yBkKTanHgishKu2sbaiVhujsKjbx1JPPvfKDw5vW9tSSJCVdEkSka2v2UynPNggbwKq1e59oGocsPc1kZgkBhn",
  "key40": "3AFuTW3a5XRgK4je5JSBZ7EySaHGgXapcu78Fh2rUjLQtEmWaS4B7HdXHydszgbBf5C2QRfVXqNtCHPoAwX9Mjc2",
  "key41": "2je82iDKfDWY6SyiyWRXzVPfUSykUq8nHVG7wDQL6nSab2QTFZPDEYJQ79zAheiCBRZsrqAuDBZhG4BoprkACJK"
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
