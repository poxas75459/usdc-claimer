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
    "5iLN2uaBWWQyxexVTYZhRRzAAU2tngKUrj8VxqpMAySDUdabyb7bxLxLvKbr2uHCMPV88qpA6y58uTBNpBpx4Ebj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8qdHKzgyr2oTSmcHYuNRt7Veg5LPf5USpnuMEggHJF9e8eh2PJHPrpc5SJq3XN6MfWNSE2EysyRLhg3GhW7mqM",
  "key1": "4DEhq4qArsvr69JN5QkrrmZsTNnYVgNMM2qrGw7Z1tgWJdZEkEwnPoxcQQTCi8oFoYvqaaz4A96VJwJbn1AxRJAe",
  "key2": "59BUFGPf3HFrZJASg2rGyXFiTokDXzSzcygHAG7QjN7SSWaNZucpSHkmyhyVzyyLCWtVe6wYjFG46fEmpuwddPat",
  "key3": "4Dyd3ku8qq7E3dEWmQGay7dWmVnLRQVczq4HoPyodZvYzwJQo57Hvmd8v61y7hh6pXTiScnMZuWk117cUyXoAUf9",
  "key4": "83dgWhL97JD96rgDybyNSfC2fAbSeMDkhf6Qc7ozxhWteWJgRPBYkhC6ZKkQHbqqjDJzDdLqP1MofBVLfjEZKEJ",
  "key5": "2QoJPRgX99CgijzYqYNFXM6HWDo8msuvRMGPyd54abv3pUd16V65AsXRn51UFGYRXrffyoSuNkEnnW6rZsBSVkw8",
  "key6": "y7f96GkjKBzYgXwmdsTxvuHMKsQZiDVgXrWSqugQaHs8twd5BKD1hTKxnN1UJ8F94Vx33xMKx21moN46b9Q3Ttr",
  "key7": "2g3mnt2xZajdUqm4cm9GEpC864daYJTJAEAcAiNsHjVMw5y8CAa212RvnXvDYL4sxUm58zhMNtV19tRcC9diRNSo",
  "key8": "4rDKCQwkzMvVwiQMXRoPUA9V5cPgTenaeCHfaeJy9Ehc1eRfneFoMGfekEefegcvwBH2K3C8He6gPvzhXcF3qSpw",
  "key9": "7PVMJbojTwqydR8qA3Vf59qTVL3W6sSmHMTsbsHne3kKxec2hmxmXUNJZjw1hPgAagdjEADYnv4nrhPQKuQ9zRP",
  "key10": "tbpXYr4R3a981swGppT9kWa5DXuaGvZj5FpHqmW6nPCeK2hVRpJPvwLdoAmbsmZKMJ2SHDukJAAEELRWBjRjNrE",
  "key11": "5KQ7azpRvQjF6e76fb8TrQ5f7CViuqjoLFjjhAKiWtJTFiUj2nmRuD7Gh9wnsRCgwDJKxrVU6AcBxxGhCxu7gSqu",
  "key12": "4kAKzJ4rgx4fhi1UZsBjPBTeo7XpLKLuMVcdqFW6sYuKwLQshZhYMKVPP3gRtTEjPUKKZZtWXSG375npCMvjwE4T",
  "key13": "3zcZsXgggBxuxAKqc9GS5bhjSRY3WASUBfmJhgTK8BnEzEwSGKt9kkm5qMyshtzAo6XjDxR8tqEyVE141rJHaqiL",
  "key14": "4g1K56NuBawnugWdyQC3WnDe7kcrRAk7Z5fqE2Sc9tQjSH666naG9MBA2eGGELivxiK9sffKwzHMf3RaGx4xKXxh",
  "key15": "U9mrEazVo9qZoKKq4wULKLXzpTotHLTkzmqRP4tE1Y2FvPHT3e7L1CFvshNZcAZYp93arMKKh7NTyFvKRgGzHwW",
  "key16": "4udMvY1PT9vw2CNbmjefXrPCNpP5VqnEDUaC7b6F2ycVUp4zq3xZRT8HANmYmVDtrvHnYVUsTg6m8SJ4JqybFZEc",
  "key17": "4T31n9mSJax4WMX5caBCRWV7Nu3c8nf243Abze8gYdisSrPThNjrcsyBxTuFE2q8y1vZfvcLFZxibSxFXaqAT2hU",
  "key18": "4mB5YkqHigRpqMT6wNU9iWYBnBKELayNXeXDfNeq3xzgBhT4a4HZi4YjhjsVxvtrYGPMaFA8S2xUgdNiVW2GehF1",
  "key19": "5gwxwZYi7pVrmp6nRsdMeJdMzSMBfYTpWwUAYHkHPDRobTF5deLHkcnCxguVNigmezxuwv3hyMca6uUtnzvakvoR",
  "key20": "2DoZrghAqw97w21p7vuryLTNp5LfXsW6BQ4qgANFrRUXck4DsvngakDyWahEsj2y93h31u3vcuwRdT51jutmFj2N",
  "key21": "2q79NaaK9NwWf9yjiTufn74Twmz2pbNWQjJr2kMKZJ8SBsNLCb2mK5GEzqVJowDGHzdu6RU8Mba12kFTzLMdHLtj",
  "key22": "2e6n9FnUUiK9cCiGEYydsw6Pn7FupJsYZ86n1dCiX96ku42nqTJZ3XDECsNRzsmour9qYYjY62ef6G4sGqwgAgHG",
  "key23": "3SKgXLjnVxvBqaPmznQxxzLgcZ63JpUx2DubHTkbAkJmpMkT9bDr4cJ6oisdm1oejCnfhfRbiCAY6M1DKotzx1kT",
  "key24": "3KiLfNVwmChHqKiSzoGoQExUe6Kf8jueZzXvZiW57i4h37YmAdCGGrfiuZ9MreKhAutXqQ4MZFq7yniCbrNec34L",
  "key25": "4vPojdRLDKuhtRw3Y63xrLuEgPU3raouakucYHgPtb4c2pzcHeiE9VEY4vC7M9rf2qUvG4dRELHMnd2qeZroSuyF",
  "key26": "3kZyi7qyVEFTnVLwC2HgWRA9vVzCwkGkbqHhuMaR655LYz1cmHfupKUpK8mgokCoUBHRbTRPdejvLo3Su1ZxLjQ5",
  "key27": "MpyQUSir8V4mVoph7K5P1EZPBAiJYSeZQr9baj4mK5sSktp6ZvS2G8WA5gdvbK8BKUgGnCjAjxCmgmVg88ZvnJ7",
  "key28": "5qhmptmRMzZbPXoTo38fbdnU1HG6wmRiefAp9jgKDskPK73jgFg7vCTK3sp1PkmZnLaUEeBV9Lm8n9zh2DU7BpRv",
  "key29": "5pmT7J6WFST6DsyigUXXF6eWsikPmP2Uj1aUqmPpTnjGngpXPPRighZpnT2LEzUw14mAwGULe8fnfympEWobRHC1",
  "key30": "4ihBKUhm3zxFGdAXApHw2YHHdpyEd1HyEh55cbjpp9R1sJLfoq1kuwVrZfTW7TvkARydPS87fbWwQnSRMD3HRne5",
  "key31": "2T4wGMQVcfRDdcnuLx2Tf5YWNGGe9uH26S2RNRKrLM3R1b2eAu6ohkbWNDT6yKehuELraVhqEvMAZJes6dcztwXP",
  "key32": "4ThJj1brVXvGk6qyDSwSu9Aij2PLNtv4g3LjXThsgzPE4mrWoawNYJ1tKCSFq7WuUWmgdN95Ma8ez19v8sQjpw57"
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
