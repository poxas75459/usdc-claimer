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
    "45jzHWS2fWNTajCArcx87WnaySDYDpNSzPRVRWEoHS6XBAw9DMLzFdLGjKHteY1ohFapvzm5aedhgCtdXogSFpfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5pzoY4zx5Ftw7ucFzffQn2ZLKA51cBykZK3DkzsTRu3EDpyCXEZzo9kTdLqAkijE9N6LZn6MERmA4MAXQmKAMv",
  "key1": "4pkALvZNyQvcK6XBHZk1D8pB66vjc1YaWxu6cFRVLarkZY1B3j7jpN5V6trMWpfAnQLfAtbRvBbSidjxKr2JEj4c",
  "key2": "2pWDrnGhLud2gsr1WvkaFciB7CmF5nDvVq8nA9yV43mPhe1ixcZL39wNrHjxQDYzLnkxLWaERX5WzoiWn3SYYeaq",
  "key3": "3YhDmAFPvZUXUedD8AawtkrpuYKfKUGomJPwBeREYwgwvDfRxaaGaeqy7oj1EF8v1bjeX277vT4Ksi5MtTmTaxZe",
  "key4": "5Kb2mWQ4FMj8uka6WfaB8BpaXtaxjmwRuQ5x51CvqsXcP3uNwosdHPCkYw1urG1BoBpKn4vFA4EqHibbZJue1hZB",
  "key5": "3eGzjKdEcXxtBYfVj5ht2PW3qdpFNnXkFqke9XC1xo1m6As4hpgTgVZksAL4dbFjaZ7ZjKQa4y9Jz43qTRbdodJa",
  "key6": "2qdcVWgTxwrgv7BzGnvt6MhdTP4Qri3ACkPNuQnEAQ3dUA3rnAvgeWLfbKwiNYdaR2CBx2bJkwKtiS7HNk4viosc",
  "key7": "4tNhF4UgVuYBabujW2zCMSJC5vhaNwu1ReKBEqZahkUwmhmxnyp2WKxQT6FtWdrZqMzRaDzJv9Vh2NpwPVNhYV3L",
  "key8": "5ioVRztLft1NEReQHD8nyA3zsMxZccr6i3VGqmou4xDhdb9qYgV2DHbQykoZRrxtaCAkFscMLM6pKrkuwe7aep3C",
  "key9": "2XwVbPRXsA2UE95C2Kq2mHzvLmnGpBTZowZGAZW3S8mDXptQ4rWSpsGeMHrKcMY8y9eFPe7sXoSWSY7Nby5kyBpu",
  "key10": "4e3zR3Vm1h3Fp5px8F4kNnRhCcauDNbXRkf2FJ1zJnfde5mDo4EgDFWJjA2bjG7VvwkVHZNmuxsV9qsG1NM2cMFs",
  "key11": "3vSE3cXW2geoVrboLJBKZFvrvCkayaj5BiVKBZCTjERaKdGfgS5hxiY4Lv2v3mXq8atAVoPoKUMD2fxZqqQYkubg",
  "key12": "aZSpmXyhkgX46FtjeeY5arjWRoGzzsYfh45ukoXEw7SdPLBWDWBvUM5hhjiEMoQk23TjepozrdYCrbbN3fR9yFN",
  "key13": "5bPvrspvvR8HTo7WQm6riBHUZojpro9pDDMDfNANRVzpRivt9W993xYxB2eydHh8tSEAw3CxRxKaXNBBB7VnQcRG",
  "key14": "2EK6kvXJKMok8F7QhZGik9siSe8aTf3oDX8htvzTtNUaQWdx7zFFxULhA4NThMZpYHDn3hJPDGLox6DcZAsc6PPR",
  "key15": "5SzRdbVGVBqDtu6MkBv7RN3uK5GyM5rQ81ogZ8XBCnJMbtHYFfuTbnidLYtpgZ7XkZznFLsJgPgzXFUQFnJefWrB",
  "key16": "3cULsPcZwYzYTvEB7eeuWc48YvUBs7cEhUD2Ah8qrbDSMYE3biipSAYVMz64r8CLhw74Mx9ARCNFq6ZAEH4TmaZM",
  "key17": "5843m2AWDh3XhtaKkXRvEHYsZbDaWv1et3ptBiMuUQv7HjbKCjLkzFA7u26hZMY5v5VqzZCKbKGV3o7rDxPFzFEG",
  "key18": "2CyxvLERPdRXA3bJjSZ5x9cpCDs2dwq5pjhPGp6AQLaZfugTP6hKj9DfRoh21GmNZW1Lmbg6i7N9rwC2RztQnEno",
  "key19": "5ctFoPajCVEGeo3j8iJGKtKy3jzmHzJSCn19x2xJBchmSW18mGNxQXNd6FxpTWZpfAYBnnKt5waXvrAvG4W1YsL2",
  "key20": "42M5EHM3bEdFdfHMpRpgjgfaKpL9AVhf42kzAZNw9Pp1t5M7eSwUyGnfwhVRW1MgLJEeAXBVdzHqREwTr76ngfKp",
  "key21": "33rcJWU9DRvpPmRHWxGsS5FbTNCjeRtGrHk24cF4KRm7gVzD5SgXwcWL73BDKEa68Fv9yzGfcLZKgRzPXGQhKw6w",
  "key22": "4A4NK5A6UXAwwrdKZ34CSvvGgmRaNXNsckiDSM2MLCkkD1urS3bfYWmLjiZaXnSxyte5svGXCr1L5Z9vQKDz146k",
  "key23": "dSYAj5vynrKPLpBPtxbFqBF2rovd8H3uGJ9Eb3wkta74hYAWHkFhTFMuFQnUgyNvxDCgmP4MyS1dZfdDyskcLQU",
  "key24": "ZrVeZtKhPnZwy2YbiqYrsy8Ba5ERk97455YawyVckQKkTEncVjZApnzN9LCrMUq6RyQnVzNaNgSmRHX7nd9f9dM",
  "key25": "46ZsiEAB5EL6jXUM8f5YJH9dp4Gc3jXRxX7DtBL5WzinMfU7dg65LCg3P6R2pG88izkth6YiYaUsjB9iLH8M7UTg",
  "key26": "64y4a3RQ1NJVDBooYbuNURvosbnDiHpiXvCZwpEgBCFw3FMLa7iSMKL8iqkx6pJ83TPcsPTfgGgmqprpGDxP7WUE",
  "key27": "2e6g2VAYTuqrcCVhH4rXRxrACw9zZswd5oh8REHYdiC9kDXfVgLrAqMcrdK4AqHBRXpQ2KANwSwV6cbd8pJwh9AJ",
  "key28": "4s1kQa1WHekbEZ6ZxhHpdytwXjiQrssSkvNpM9ufbjjT2Q7AnJYp62VowxFz4kyGhNtKpitfJJ6AW9GjCHRDG4hr",
  "key29": "4G4KiDpDrtSBi5xNsQh8i51rfkpREi9rpjWKpHC61zqAhx6HF7Hgqe86BE9cq8FcqgLjN33S2KEjCmxE7ZhhrKri",
  "key30": "3ZGDLXiSmCRPwJ5gm79mNa83JpJ55uepX8UuQgiwGFWtZCCH879GXWSvgYGEVkXWgQXw2ztTa8yeYbHQHMfj4DPQ",
  "key31": "caFFuRzFSaSDtEN5EbckbrUfpdVrCBTFjC1MvHpK4MZbntMdox1RZHVpZofEs2BsHamycXFX2ioSufQbcNmhCMo",
  "key32": "22qBrpdpmqpFvfhE8H8Mt9eBNr5nJbwb9mcLzqXD8VdmsVV6prr14xDzcVCMwBtUfJo7mr1PawsYjdrZmmSpGNY1",
  "key33": "5QhevDXBMX8iGKx38NDv1hJCLBJQQ5cgRG7ZS4RwX7v9asr6N6DV16H949mWMziwHc8eFeFzYb7zvB3uq8HD8zT2",
  "key34": "4owKBoJ11ZAiYHy1jSkd1hY795JqHhfDUMdq1sFe6vfFz9Aa9eVDRhY2CRVcf72Kxxwxm3vbyznYg1Tm1oaQHRn8",
  "key35": "5ve8ZbeA2B9ZWywoYNVL1xmAQqmYHjckFScbYZxQMjXxwvEQQ7ExsmAza1wR5j5m1ihp3wSodTuxRwxVJL3ir1V6",
  "key36": "4Te4xhXXwcXu41vB1VggBN8nR1WwLSooeifGxVmGCXCRgRoXy2rJbBEY8Vg7ipoSmoDFX3nCE4iWCE4MpP9p9Z85",
  "key37": "4t6vUutspTZnyNfynJ23iHB8EXRKfhVcvXEpYLEG2oTmwBjbLzox7jRPEDcPHjR9SLxJdVdrmHERYLpWBxXcWeyx",
  "key38": "3zAbcJ1s5W1t9TBTMtRp9E8qwMxNkhqB2DMJTy44e5fVGxp39nBVVXmcXLAZZHbsVTWgiJVBggSe3CQpui6chpnz",
  "key39": "3V2eKQ5dzfKhJwtkDMetCVPaFK4mSDR1Q9YUpXUdJ1i6QP2697zMsFRFNuwB5pJBZdUYEjapQGFa9TEEkcRRKLRx"
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
