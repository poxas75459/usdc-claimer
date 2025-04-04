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
    "3Bw37dPt9JWsgCcLnp1TtMDyHNrc8H6wn3Mig21HwMsf7SNBBBXokwveuEo9xc6nyPHWMRbsEa9zuTVukgbcKSL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqQZAJpP6ggdQBs3WgzKviNPuyY12ks9FmtgqmNE8DqHwM2gBYp668WDfZd2ogjPhkGKaoZav2Lw4Ed1kVCYobZ",
  "key1": "34TxP76So3jZH2AyhwFrafXyiZ5kHXFSZLYG3ruLmouJJEPoytyRzveCLH8tHWiBZZjH6gbGQvHpaBfimVLcGADQ",
  "key2": "2qWL5VcJ1QE4tWuiBuuFxjbDDrc658QYPD3eWTopiKUsBoLkvAaKLex5E6sCUJ7eRYQGsqS2PzXo4BAtgdVsRemC",
  "key3": "5utvhiVmVsDjCaH5Mpabuif6oogjKmoZK19Prk8a8D8m31PU4FMx93ErAo123vbHHxVk4cF1HUgBMmqMVBveUsbk",
  "key4": "5QmtPSV6WAd9fT2zJBvZJXnLxA9tnY5B821LqeYD8Q9kQZYKUPsvY9tH8yTBrGHbdQgmRzctmhH3uY4Fu4QXd1aq",
  "key5": "2kdXrxh4Ngwfy7yTSJJr4htoBp4d6ZHK7YMQQ88GK3WjzL74XNH5XQaVnNa5kAd6gN4gorT5SSCxsdhPTYtMCVVb",
  "key6": "4uBC9isvFe22Nkf4fDiNDNqYuYyrph7QgtkU7iKhGXaKmFvT9uxnn6JQwufci76gLtEkiTqMmdExFA5QF4JjC7oe",
  "key7": "63gPTGiwYeNpLbggGFT7TS1G2jM45pFz1Fk1Bciya5fFqm9gFDKGEhojLGXSjLAty1GsLMmsehLXZ5THT7yJ4zE2",
  "key8": "5zMRqmwsdqikuYZv7WzQyQiwDvcfob9tX8d9fcrisT6bDzwdbZHjC247CWZeTS9tiQNKUkaEL8RKRSJvv4K7L3Qe",
  "key9": "5MxyJMWZhpCCo6MUo3MyyL9AmuM6xcxVuvMbw932SPvCM2V6HV3tuLa4CzAdmgJfSLym8ZJhFMj19Hj53noM9BV",
  "key10": "4jRA8eoTzaQP2B71QU3V8gyEaVNimRdYKxxoM6X4Q2Vnr6EQivoJRmdAtp1frxQwAtZpWPjzwJ6kXQpGjb1upGQd",
  "key11": "UTveRfy4moUp6zWmogkLswZfn2nCLcJPViRCXaJcNjnzeRppQVhTyzWoiaxQSm4J353hadsaMLYtTnHJba69ozt",
  "key12": "5URi6KWUxBwz2KX4RXVB28qnkKTfWkykSuMRH41jDNzUqdTnTX5GrquVdCEqrZs7TGaVMXCgTMneGDiLiJoMrhj3",
  "key13": "26rs3x65P6Cq2ypHfUSUeiAk9X8dPs4Kfc6qqEQydecR4mFG4EaZ8mqj2TFxa5JijJCnSPCh9FUoiNYGMcyeRAok",
  "key14": "48RVrtaft9oB4pxcUzTcyqZEFz5C2M5NLAUp7KPdxwRHkWASTKV33BXAM3SRaP8nqsL1u3qKoC6tGFCqbTsBii9i",
  "key15": "3ectEKJCxD6T7zs7LvANqbb9jDL8XdP2bDmGQ7zSpmWpExA4FcydxVVVNAoDFysojkgDvTLVJ4YfqZ15A8bFrcf2",
  "key16": "4umZCQ9CBU8sp8uYvPitsghnsqFqkFuf7BiMjtBcqkz8H8jMyqoDKAkvCf8jRgm2VM1UzEV28ptT8vHz2AJvHRwV",
  "key17": "5Hb5qAdZZyNzq2oB7HmGuW76YwvUiNXFajW4NUEZp1bDdRz6LHQRzrr9hkEns97GJHapgp69i2s7kfUAEAJxXpuY",
  "key18": "vRVz5hXxMwKShYC77NuSYLYMfbaSvXr1WveSWosX2zrntsZZSkq8Nx8JqEejhWpodW7TtFXAVVQ5SgquxB2BKPv",
  "key19": "Yk9VTv7c45RBoVRLgKko21PSRGgMvoxwzYTTLWUj46nEodVNNZ4B5Sw2uBL9dfFjLZ576qci3UAF6e6XsGBZURB",
  "key20": "5kpanVNjBTwXjdunK5LFdFuJ2JU1bBu76SdRNSJwyWdhENY1anT1B9xYErvTCQ1QVJk3W8Y8YaYZVmt7beA7VrZV",
  "key21": "3Cs81HJXuS14NFNgfHoRXiNuzapVVZkjQazDz6kybrUUaNGWQ6An1G8Q5uNp9TTz6cYmZdmeZGEVmYimAAzGfNFr",
  "key22": "fXuHwVM6V7hmBp6FcYooVNqqFWeZe5ipJU3yD5ArTxCx4cPuC1evELRsd9LCZHir13XwTa2oks5zWEgqdYP9Low",
  "key23": "xKTfRvbrgCdaZ6VAbgZsy56WpE6jY7BUG17DGeK74n8NRWzBKzzkyTqDcSDTZRvZRktE1BzuKAVk7qxv2jAp8iu",
  "key24": "2hr5fAKxwsdxvQ7La3iPjGdDtsmfMtwwykSLK3Rd78xqpnzUzfWBdV7bohF931f3fthS2ygfRbmc7A9518CJ5Ang",
  "key25": "5huxPZdfg6UGU3XqJLHtqGQUG7AcnWKCQpo3WphsuNnEVeshkDg9rjJQRj3CBUASuPbCEU4z8C8qTL3GK2PPcaAr",
  "key26": "BwZ61UppdrgsVp8ybYRsYo1cp1rfVwfbtvgN86iZyr1r2mcYGZtXp8u6cy8pWrP2jdBzMVZ4ufcFJt8kbC6Ku1p",
  "key27": "2kxLkfQPwLpHpFyKoe38nqRtXaZVR7MrsPQ9gyeddCmESW2XeyGrTSdWoeUsbi1b98oCmbUMELMwtCUNq38ejhPf",
  "key28": "5XvKjFpUH5SwmwwKiH4XYqioo8vAuoCfUzq6wYS1dGeX1Y22FBKqGRKvcwopnjr5r4pqYd9suqXmF5KSWGEkt7Wc",
  "key29": "xfZB5k8H9R7we2SyHv3FNvV9bxMSMxKEzz1PENxvhuQJbf6BggFnxez2ff1iGe4YM2CfJ2EyRPTQJq7nUVqNQ22",
  "key30": "HbMKjMUAPZi6zrqQRmsNuXevEpe5RbcGiiwVBLomoudTEfcKvtRAdMbgpu354TU9UVxmAVmFRMf5z9htfrHAHzK",
  "key31": "4kdUMyMofyAQn7naiHnXuYM7S5s9uGpvNhNiSEG4YiU9aLsyeNDc34bxK1yoKYY8JKjbKmz2Y66ZLx7wMT2tjz2h",
  "key32": "5qwx26gD1y9VjY7S1cHTdCAbG3nBXAQ92WPNU6ZQrKShjccBs15FpyRBM6V8gFHmS8DXnm13QK4X1VxAkgU8rrqx"
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
