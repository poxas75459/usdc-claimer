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
    "fbSRAPNsW26Qju5YtcciJWVPgHbQwmbwBWu1GB6cAfPA29HjtaMAzETw8b2VPc71puhxhnm8cg3r8VFJGrC8yBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAb34B3nZDFUDhdVx3hzgGQyXfiBPZXCBrerRwmnmSYqoT9mDcuqGzbB6A6LbaV7t99LkVUpHFtqNxxjDY7rJzT",
  "key1": "25FQ3S4Zc7UE2vJ7BpPchqKN8nLxhqxpVvgP2pKorAEoqc828Ptm9Hf4mXTufp2PL9EkATKCDc7uapM4FKLmZRR1",
  "key2": "5R7U3CScEiVY9ZsMX1vFzYU2N1xoo95xyvuH43skVv7M9Une4L8QrJdfv8NDaxhCxPEq4QcXR394GnueZCjjo2JK",
  "key3": "q3ntbNLW81sR4EjyNEPYcdaewYC2C63p1i8mUXvhNWrW8abJ44KBUG48cERpz2Qb6yC1n1fdtvUTFZKpSxiwVyZ",
  "key4": "3Ei9ZJsfwFroi64hN9nZ7K5MywJHrtrwg1TR6NbevMnaqGyGT3KtM4nvXUpbhDhBCxSaCAkboTwAs5k4rBiBKc7J",
  "key5": "u365DkPiHX9gqXbHH3Ci2BfC2GvJjjg73ParGvhSjdH19bt6gCZEpmoQ83mAJLPvs42p7LKeadpJAFd8N5b52Vp",
  "key6": "N2hematfRAfamS8Na8HpifTKduLeXRZZaXHZQ9hCEvtRbkekJSdkdCaCmTDPcrBXXFioP62gF2y5LjXHTJB53YQ",
  "key7": "REGboWz2ypvRvFpQDZeUgR1dNrpoMniAsH9iCseS3gkEfSSgHiqMkpAouVT6qYG4bF3NHHMgQspCWDQM4TsoGpB",
  "key8": "vMeYXiRzcjknV1esaXNjALoZwWAgzXC8nz2kpKKFMXA3cu8wVJbY6EraWRoGGasL1qCrTt2yYFhsmBN1XsW79r6",
  "key9": "2C5HC9SGzwaKr78viNyGF2tVLCQVXjxQbAdZUNGEMyuqN8HKe2Y46qx92QHu2GniiwXGKk5sWbc15khKDpvRGfGm",
  "key10": "64qASqrfQUsmNfNMjHmwm6PCC3G77DSMzsWavNCRi11E83NowxeLJEtJqYysAC67G5xFqpVrAKeZHXdac5xK6Hk3",
  "key11": "5P1Y2si36mtBfy5GPRnpX8g8iSbGrSq21TdZrsjCYBnd51ts2W6kkv3JyVxi9A57xcS4CoWrdjwvewBzoHmZnY6U",
  "key12": "3VF8ukz3YmqPyHTBPvT5RR8zE91Yg2wa4cnAvcFL8Sox75FC6ohwvT7jk4UFo26E8J2bfNzKpSwSaRzGra6a7EQh",
  "key13": "4V1gte6Y4z59G8dEwdEva6UiWBNvJ4KvbJsBj1xBFQVVPVKt7XJrTf5Sb7SdP1NLDN4XCc1k3gAT3jjGzYFQ97EB",
  "key14": "ShFTGURsW8ogmYeeyojsu7gkVc5jDjGjdR1z1XSxqUnMXdqDk7fU8Y2hEtDzJ6bdL7xt3zqWBWoufjUMDMHvhy6",
  "key15": "3sR61sooQzmYf1BCtoVcEtT8SvkCzTR7ePaHj8wP2Rg7PMB961hdqGcRxSA3mWtHqSiY3ehGMZoHo7q7NWnbg8WY",
  "key16": "66EC6tQ2EdpXJB5nP2ntTNZ2byM5HbbiMUxqUsp7avjYqrSrGhCJBZriQXCLs7ayPiv2KWGp4Pf5v1YB4tYdCyvW",
  "key17": "4Y7C5336xRF4rxLr7hBoD2rGiE1wQe5h5FU6qkZzJ2cgn4iNZiMrsUzFxDsvXBvCyaUZbUNBqcza7qoCUiTBXeWk",
  "key18": "aR6ccxdVtGv8MCDHag4koqg4AbsYnc2A8UrbEuTYeSzDFuJHSDaetZF4jnGonC1FKGrwuDU8PZo3w5wCBgu7hti",
  "key19": "51JZH1XpMWMM5zJbMxsadmkHDizcwPt6ynLZqWnCewDtRro2GdeyXtnL8SQ2s7HuVKwRFc3CN97fACDHA8jDU8Tc",
  "key20": "4eN9AFRWD3qFwhLiuXHfzCX8Xzvxo8eindfkNXwA72auRi32gkSNKy3KBiZHP3sKRn9yrmtSNakXr3weaY2bPreo",
  "key21": "59hJVon6sAqBc7RW46n4ZL7ENEuByCMXBmDECjPKyTaBa5sVo1ufYWLDHifQWx57VEmsEn4xKEcjwRtXPzAyCzbh",
  "key22": "3bQeNpym6q1MUspgP36CBBgcA6rMfgwK6mFrmsnHaT21AcpLdZk2hcw215HsJReTvR7E1SZog1L6wfjYdSsv4BE1",
  "key23": "25fEAkwaU5AiofZeXMop24XsmSoepr8MqAT731iykns3r7o6nFtdJFi3BA6zW51LXx1syDhkygAinHhuZRwqn3zU",
  "key24": "2E694cT4HMwLxJcAfhpgmtz7g2JGYUYATeqmSyERCJbEWRBMF9fcQjfPYKe5qNpdjpWhn3GMK8Q9AjHerrskWjPs",
  "key25": "63iZ5WhtnLVW5SjsmkQ2SD2RenmLTeaZaY1oCLxi2rgE5ACaeoQMTk8uVvBhtepa7bjqkmqMM5mzLzbwbH1T7DD4",
  "key26": "2pJjVU2j7xwhL8UZkSMtvH4516GCpSSiknGyG4DNd3P8qhbSA3YVB7xsskrjLXNXFRudnzbqr3dNYA6KnqpB1Xdh",
  "key27": "4WpE63P3a7t5S7XFZckm7vdCF3g8fRnUnXLeH4jYdbg318LSy8vRxjob64CJWMEHzj5466Dp2gMmJyST7JPqjxWj",
  "key28": "5VAt1A37qMvPZXkftgYLKw5T8bpWda34mMxkQ2asUCDvqnMDRa8t48sKQdR9wo8CABNJKuTNx1j95ywWohtNZvWj",
  "key29": "2zRexhGV6qVFvT9quHJeCygagQ2wtCQLBwRZqtRdZiKncUsSVC7MNjq91v4rLXMiXpJEfaJZwQ3ufQHxETNky4yr",
  "key30": "64oa8G7duKAnhpxUz5v3yiGiKYsL7J9KJKCPMkCTcvfcJnBcKtsJnQWnyDWsCeRwk9U5y4T3ngZfE7WQBEfx654W",
  "key31": "3MTBK4wX9YGykkNXoeT7e86bL5UCMWpy7zfPeWu9ibsUUiP59GNAkBKvighJKCmT3grLNu2nWGB3CEsTcHcpUvM",
  "key32": "7S3kez3YFqDzXe21dCyW9Pvqs6ZSmUSrZLvHwRgqyTsD8CtUgotJeaut66b9P2Yx31m7kZtvJYySCPg2jZres7U",
  "key33": "4jeVPzY7rSZXi5hRgBxW7GyQ1fSmJ3AmcD4cukJ5zGoNMeeGAuXy41e4HNkasFk7o7zEgM4PX2amTZxd26v9vzji",
  "key34": "TxY5oXLxJBtF2WvZqW84mBvLr11Cy3eZYYAFk4ZeRS9RdrxnhdP3kmX2QwH262zLmWvjyEMFjy1e8YiwGPG6mBA",
  "key35": "2w6e9suuxymXKVzAowxLUFCxmBQFmA7GanAd5rtFu9XLiR7oNLTfZPEy9q3NfpuZkMhh9ZTN4ex1mJ18h1xErGk3",
  "key36": "4ArzFdVfNzTCRKVDmYA77X1ADPFseLW9vhsCn93K171XMyvKn5NyryBkb4MfghP78YsBqWC4nqrysnfKcY1BYcyz",
  "key37": "4LDhRi838kTzgVwbhmyt4zMvRygmoYuX6cSSmhtCrSZK9k28piDbVnCj4bVNHu2K16z5hpTPq4kZWYhyn1Eq44DG",
  "key38": "5wYMGth9czbYZRfyW4DptrTGmbVAaQuwiZ4Tind6TNP18oBVQeteBy7K9ykz1N3rsEGFnVvSRTPJPhBNXT3ABYx2",
  "key39": "29W81NQcWaduPQ6wK4HuguHtfvbTdqt71ngM8nudxNS4eXrsjGYsyUfZuBQZBmoXHzc8uJ7YAEbjnK8pU97cgQUB",
  "key40": "5sLFYT28FgKzcFJ3oqzhdnU6hCqPHy4Q6UJCpR5kpkH2h9XtSKPQTfbBPjAw2xgtHmuXmiRQJYARDaxDb7eWEWeM",
  "key41": "2PAPs8oPGJcYx7Zpt6j9n9tby9kViuj1FvGxMgrB4UcJNW5rYYsAVXiQu7nAromehkFqEEsNshJWFnvDduTAVDVV",
  "key42": "9J1GXAuUrk68hYx6sNV9VHy6PYjhwaxsA1ZNUgg7uYVNHz4mdAFTvfomNuQHL2BbzmtSbUBpW5zgza2z4qN37eX",
  "key43": "2mn3L9PuswbpC4TS41ErVcgT7w3sxDYCipcUGXdZVAGsksCehoLgdxqTQ2e1LXUEaN5tSzuinJfrYyw8YBQtANYx",
  "key44": "38akR6EMrZr2a4pToUBjqZRWt32X8MfPctTx49rxhqJaHX2a39VNuZ2Af14xRf1EEC9LJNseBkyNggKxZoAiiYQF"
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
