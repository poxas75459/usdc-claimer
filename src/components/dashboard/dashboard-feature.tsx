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
    "3xBC572MgA23HUCDbKPaxyxLf44T7FHtmP29iuAuSZgx2ct2gCyX4UNBSVXZCVdkdVgqbMSXraQTQXFSqvggyQcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ujKUZVKiC7LiYhtPcYxmfFFiosGVfPyVtg9KD4LRQGBk4wxQqxpRLkXEKLYJUXsDyL24uRj28k8AyeRAYTcqJdh",
  "key1": "2L9nmrL7xHQJg1rvL5tni6oxNqJGqDEjqEyv5mGEYPrPsLNRVEkoqMogWM1wHJW1G4RQELNYijcmv3TDGcAw6c65",
  "key2": "2qEeQjw1a65cmXDYeuFbxUDpvNRTPHXNYA6DAVQUyXZvEiTyVxfcq9a4eb69Jy5r4VSntEU3Sb3kigtmo4XekETG",
  "key3": "2R7vxW7tx6dwHJGWiQpsagPWKwscJzhhZ27qSn552FkzEqUsctTJotSFVMAhUM8JPeoFk7w1AyJqTZSogf39pred",
  "key4": "4qAsurZyVew9PPkSKNA83SpxuWWEmTirqt2W5YGgDXJYNFU3gfWn5Escg3SowEtmLjJAXaS33PukuoSMbbCBrkrS",
  "key5": "k684W4fnsWAAhDaX3cYkbxmPLEb58W5YswjTrREU4VQPPJDTGoCcahYwNGJqX91Xo7KSM1d9rR54A4kW274eDNF",
  "key6": "25ecg8wRfyuuRs5yr89PP53XPayL83WqTwBg4rnUn2ttpQMTFKri3i7mG9tMHzGvTe58YeWnsN1CkbzVz4mtcN1B",
  "key7": "2RW3kVyoq8XD8PrKR7UvYPKm39pqE786aC1SVR7Yy6yCYNyqbd3vxrsBnvLycxwi9ZKpFVHJsNEbCNWN25MMirCx",
  "key8": "4fDFLpbztKjYSnGLaDfQBQNbY67D6APVNjtMxBF6RGL7ZUf2gLpXyzAM62Sbxwe3UwVAdixrGhJ8WrTvLDEq1yb6",
  "key9": "4oFwNGDpFL9sAgMBHA1UwWRjFgB9y4hrWd8N3QA4MdDFsZ5ea4PCUkh46rp2bTtoLrn1WNS6uLs58kVDZLBF8Zyj",
  "key10": "126d8xgCuWdm19RYZVCGiDkHpH7h2s8KiKuYcRKJtk5k4ixkW9dbQs117ZwnFcE1NeqhoghZJPehG4sepUHBkX35",
  "key11": "4EnbeKD3ggrV6Ami1SG4uSuiAEvG7yUJUyfjePrQU65yMuq6ZnqpbR2DrYFAesmXikTn6AsXVq1hVibafLDrq5up",
  "key12": "5bVfq9b8NM6dw2xZ7sbbujN3pwknty8TzPk5kiS7GXAZzm9GPipHYab4DPTSpaiV2YemSpkQY7jMkYuJWoDbiagY",
  "key13": "n5dmTyf3N3WcLNWhwaMmkuo23njsXqjGStpC6srTDqYKXNKpfqgNVNFhtVbJYsDKAF5WCX2EEw3RBUaRCoqFT1W",
  "key14": "RC5ANuqGEKGuhaVku12pwKVDNctt87xnxxbFMSkyYDguPkn9JU7uYnJSPLMpoFDFaaaiQXEaAxbYmsUbvzHPrVd",
  "key15": "2YmVTpgiv9xMSPYNtdDfProkKxw8Ps17TZN95B2jKTsLEfVzeaah9ABJezhN5Hvy9ZUr477GDAT6H2hvYkdC23eG",
  "key16": "5dEhMMybjE9jduoRdin3n7H77LgrcryU1PRi7TeNWsJy5NPZ25q7cM9dPwWaxqt2PsnmxbbhSw1Nr4ybYhoba7GR",
  "key17": "61yub161484wD38sibeVFsHFwDK5kD1BarbWKRruVb8kzp4LUnyBwmyqmF8U12EjASmrS9DRpUqGoWefZYkVBj4y",
  "key18": "5AC4ANUQpZnix3htTQEuqYEMxeeFkX2K9rcM4auGR5HnohhC6gszzscGzutRuWNvaPto4Sx4ZMHDBfTnGxYjFS8u",
  "key19": "28oaszp8sWU1z7tbPodLvMsycXDcSSYDNpEbc5DAg99vgTLtXZ9Jt4mDpG7ujgGdd8y35VjHgJCEtaLd8fiNcisF",
  "key20": "64iRcW3jTTLJi7E5GUGkJ7664hhALvfFpcW8xvYiop4BHiazXZhkjuHWP27gLa8XAnTQHAPUiyqj3C5jEYWvHXr9",
  "key21": "2CwYtavxBpPgpiy5D6PpgPhVwDxReezJPHUaXLcNUYqCNKmWryuQg7dsFcTQGJphiKR37Br98fr7XVP9hbP7UNWF",
  "key22": "5ugFAdxvvEy2jz2PTqFveaUFF2Qpuj442rwYYgsZ3eyZNNnaNorpWBZ2vNrPATaWC1syjX4QMMx1gBPwXcnQzCBe",
  "key23": "5yF4eDEydvKHxBBTgYcfnt4rjpnMYCtLWJfXftigdJo9HzN9qc3MG4AjjB1xd84CV5S4EiKjYezqzSzkJCmuTovd",
  "key24": "2tkpisYpD1BFQgyn2STpRL1KahroBhv5nmiX5gD1q1oSMuEPpgrtsrag1UYEvU6aNw5U9AErs86VBVUtk37gKzie",
  "key25": "5nHhuW77M5GUg3Ge6NCtFi37mkoKMee82u5uhcAT4xEqCXN9qQ7HAoFWU2UquXcEYVYo4EkS6Nw2ukJZQt2Ar9GM",
  "key26": "3EA4kXiQDvfuy3wqbDraaoXzKmvNGLJv9NgVpx2x4XvMNYUjEF2v8woKKhQtwgPqSLQ5qCbF2vfmcaa2VPD5wMPX",
  "key27": "jVc295hzjZtJ8h2yUKXyVZiF7khdXs4L5gwn2QKhp2MjkuXnRs3q3r7yNspe7zob8eJJABC4nZtLr8Fx1yJuMAT",
  "key28": "2gntF82GEA1yTiAuMyV1zqhqPBjWevf3ys9oidsWFoA9xCqQr42StMeGD3MhqqxgDmGs8kf9N8myg2dsi8Rgtsaa",
  "key29": "5VKqFT15QZXp8kM9Qw91Gz6Lk9y32hokCnHMa9oHaxkU9HGSv3zXZKbnWs27DEQpCpbNcHFZF2SeVSEEGdi7m85R",
  "key30": "S25ia7dBTbo2NcJT9XstJYwJUfbBdGpCc6JY4bxb498R4o8PGTQzUmgTVsHQLKAn3qig2jCCfa8GRXEvncnV1Kb",
  "key31": "66vAwypg2EW4eKodbUgoE7J6vKDLmmBXSgArVfWfRBcH4PjVV2DfDMcuBE3RcAHCSGFsGJGJwLb8Cav49kgTdYuo"
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
