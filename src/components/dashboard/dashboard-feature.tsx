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
    "21Aw4u9g2tgPGpsqtGitb2PEVAuntvtjQGeqxu1kfgqMoTqMHk1nCPTj7ksYbVHhQrtPEtHJjNsg9QGT2YBjz48U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaqxMUE8MHeWvbyHeswhrPJ7KKVprvZgXKcehfWt8CczZKyayaTXusCKdygLYj5Ny863vHG4CEd6iYp4aRZSa49",
  "key1": "2XfVfBu2ryEDwVg1iixMZD71DhoQqv2gxsBqdLfRhJF4f5qTToMkCUrQeUKGfauLn9VaMGcwnpKR35mNM3ZKCPqw",
  "key2": "MtpD4T2XyUJSSEsWk4prGfWFpn5RrDuGmNtYG16ecug9eDEN4e7msfJvMA7XZLxE8bD3N18wCU3FUzZggZRt9QC",
  "key3": "4QPi63TiQfdemVHfv9SUEaAHjotbjZwcj8Y8eM8fhDyBVUaKeWSLfpddVH5FefBfmy2WyB5ooPrfb8C7Yofw8EFC",
  "key4": "J7M4tN4RxuZfHfhJ2wFNH4Wr5EF99GtFtb3KMXsbNUkEpjCHsGFWG8FGDARtG6SSqjHmoQJPqWrFdr5W6Tp8q1Q",
  "key5": "2gAERguUCwnUwsQeoDu1XByy1LqxnwUhR8g6gppd5pRfpfG9Unn7GT3gicC1wagbyTQQP3GWnb4psBJS1QFyv3qN",
  "key6": "7wANfnA33YiqB94t5KqyRz7Ux3CDcanauZo24xDUTjgV6prZKKYf8Lchu35RgruTRtuS1BzVZsEF3Ubjjv9j6rK",
  "key7": "zYsNxYaPxboX461dkvpj9tq5PBUyzGfzg47AqaTWDQPdFvEUoAecQmfZfs416jC48rt97xJr3W2qtDEv4GD5RPh",
  "key8": "3ACHWggC6WpDN3eq5kcMdJt1VnTwmaPAEXCKwHDQWioDr6w8KWerbmt4FuxfXjZhH4iTVS2ufqSp6oF6z1AiK3z4",
  "key9": "c16DHHnFdhEPb1QriTc5AdwNfTumW8jroZU97HUTABrJGUQqaUpzbyVa3LXNf8FSCDQSfxwi3mZ7PXs5DBUiSk4",
  "key10": "5mrJTR7DSBjokgu1j48CENHM1R6BS4DztmFn3vD4fbegLaviJPDEcAQFL7tqt44Lgv4jenZLp2KZQSyRcFm4t3XN",
  "key11": "9AnKLGs1d5zDi1wkeDFMQjiLXkG54spovGcXkVcJfVyuoL1kDXfNpCembU5vWTqU8oRnX6uRrQ6HafXwsB4eCHn",
  "key12": "5PSvwQkW1BeKzCzSsD79ePQaTTahbWeKVjt3ptzB7xexcmkDjqHrHFizWd2sXKctvqJ8zMwAktrtfWjXpx4zKhG2",
  "key13": "3TUD6C7n61Ejpj5AZreZJeL926yAUEF58Hq5AkzyUYZG1vrf5W7uMjkDueZ9C9iAzeoWBaraZr1iMytshykZq5ZY",
  "key14": "2FWHp3ZRutU4mQyXAgM4FNJcJJgHASoMXXBbzN39sn3mZ1UiTtDMyoUk3i7eveFdfBtgc1kBiKekz9SxmVinEu7f",
  "key15": "3FjfcUij23QkXCyrtprYZXpWeULNJza3nfhtfwvvj6zrghqmixJsWUUZN9nBGnLBKh89VCkWgkvZ4dio56jcvEKj",
  "key16": "2tfKxGkyNvVLrFsS3w636hctgBdFYYy6pVWDeiAGdLEwbJD44uYZBKRDSnygLYzrETwChzsq6BP6yZtirwx4CyJT",
  "key17": "SiAfXsLaXue6XzvGm1WuFYBjDEwXrUNJkjkK5ej69RLAvL3x9u8hYFaZ4VJZtgwvgibb4od4aREpSKEFWpaYizG",
  "key18": "S45Moqt127CGEx1Noz2hK6udDmc4QvthF9nU29prbvY1yEfPEJF8txNhwgJS55pHh6N4CJhVWd1ZQRgzjREvYbe",
  "key19": "EVJUckvA8xjNhAcPgJwwfx3sTHWPoaGwG7LqzFJC24o4qbeCUDSUiWp1jNHJgEnAeH5pu5PPZ8V5VdpNGZnMARK",
  "key20": "4wGaArzTPC2fNmZmQd24PbQm9qKTXuokRtJtxHBBcx9CrE97u5EDhuMa1eAhgRdPjTdU7yP5XRKYviuZyPpcXUDX",
  "key21": "4p9sddhHc1VpuizR5sCjFcG9VAW1Arxg1aTBAhrQFkbaW4scwtRY9TKhtecAr2k5GdBua19JATgLqiZKBh3BiPqX",
  "key22": "3P2wFBmgKY7HH2JahMXkDbr6yLxivd4M9azt9EcwTJSoDN1VDPUkaEyUFUthsZdMKnZKy2LwsufiZKspjguiWppR",
  "key23": "shkGE2QCYFTVz6fus3QPw3T86F4dKMxMFpkix5L1y5bUwEzjsjtjAgYfvauEaZZtLmnpVvcK2QhTRjTmX8Li45k",
  "key24": "WVg7921NYL1EwtEcBJzFqbvfX1Y5H4dqaDc1yfemScMvG5W8EokjQDWqpaEx9dVXdZPMbuDYLoYi3NDaAfX5FSE",
  "key25": "41on6jP5nTXT36tJD3UFG8pPfgYExzLw9AWHxWZTuW22PuMiUKKu5FFLcZuDkdrzzVYnGf4DVBEBdMLEgJeyW3cg",
  "key26": "2ofJZ3Hoouk2mUDAjjUuyGxvXjapz7Y7AUVE97AhAoS6AkpCr6xXTruWW8Ux1cipNpMgeRQJsTianeTwQTLHaG6n",
  "key27": "2MJMv6GksVbktBDZCXHsLvYgKNbaSkfFC93F8PrqNwhAeBg785avWGsczQrVw9i9sBRjrqCzX74mZ6Yh9yu8WpLR",
  "key28": "3KBpAA2aPDGyKpqSyUVVMSjkQgnzBmjQStbLgEuTvrELzC2NKA61zWgDCYjsxrBuYa28Upa3ShGVhtm471iqHiRc",
  "key29": "5nvHxMFnmwaygJbsxnZkxa3x6QHxecCtKXzYvrgMFtWGFv8PRh6WzyQh9moinrK3ZGYdVA4x7LHs2ogJqPMipf65",
  "key30": "DcMZ512gTzkzKePXsnLyYqADjbonM3gmXMiLRt8wkRBuyJoHMfuVcPgUGKKTGdoA9XqkNgFmgRzfps8pLk8yGch",
  "key31": "f9Bu3v38KdzXGWR6q8wgS5Xat6cPy3ZXHcB95XNVr5F8fULMcCk2Yy2kzc5oxWfsxnKfPUasEjopNjuNM64aW7B",
  "key32": "sWFTLNG1LKHDZvXqprhUXVSeWYMfBFQc4q26j5fjU7v8inNV5S5UzuhYgG2eTo3tMskQfEzPrbjximj44qU1W5a",
  "key33": "2gd43f7be7cQGatc53XgHTJa4bqnZUiEPsk7wCGoe6hPsU49w2jQVU9TfBmTAmaXPBsxy4kVNXpkNnb26JCfEBP3",
  "key34": "576t8qPtPDa9cMyN2SuxrE641x824oPV1hipt8aALDoRw2AybpdYnwcKfNNKE87mm2k5yPnBbDKCn22Egm2MBxJv",
  "key35": "nyHLE6m61tyiLkosNLTuy7C2NqgXJFGKANH5cKDpQ9cYRMWWRADXQz5STjVsg8GPmZAVLm3AkFkzmNTzy3VrBfR",
  "key36": "64gJvmLi9Q37XD3nFmZiUuJ5BSJzrMpunrdbvSyzmGCVC1Y1LZJ5Qf3aTvWWh8Ubz5FP2BfFtU5AV8GLD5RQguie",
  "key37": "5YYwXKow83TB8cfo8vTLqvAmnawuWA6ndjU1zUM4kmii3jFTDWy1jhU84BVzRzA2rygMsxhXEX7dzJSBt2LYNf1U"
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
