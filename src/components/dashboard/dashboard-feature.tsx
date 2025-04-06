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
    "55KMX2payZV4G2jfXgGXGAW1nHpFT31zQgdfQKL7vB3B6GdBL8QRCf7LQvk75oz4uTLwLQiHMEcBmtBwn12HyjCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pBc92YetWNfX4m8GM8rKoKSFHr6wobGy4zAEDCrHsSLwQo63jBy9uEz5iwR5t9BiYvg6pQagxrj6KoBqDceUgv5",
  "key1": "2U9B5upf2NzyJsP9bPAYEn9Ad8Kz6qy2PHWGTFFkohKLeD6AZr7tbsCqGmGjj79gZ2eiJBdrnJYi98ZbXKLsFMKE",
  "key2": "41jRohzsfUoBueWPa3Gga6G6dePG3eVwVE9QRwaygSzQp4gbEBgmYj4DCwAxiJGaudY46ASxFrmqwi5P4Quy1m9n",
  "key3": "9NFw4PhgfJmm2xsHcGk5DbVpyhBsNfxFYDNXHoGsSa4JCugMbPeE1AZDZgi4VPKgRdqzsdc1cYhkUU2yRLce59h",
  "key4": "4CZbNXCHaZafAAoaayqFfPucqiFQ6GcnwrKqu2JBizi8XV23dg78aC8NqeZApzZcVP7EqfoffbCTUhKk6e4z6QCb",
  "key5": "4JmjZnd7nEbuuD93wFGUqMVRkWW8b9qjdi39L1a1Rk2RkgxV2emv1szoN1cmjfS35suPhSpgPk9y5V6EcEo9SiYh",
  "key6": "4q5BBkz1AKpHaCuJt2uuGPYgATG1dAJrZNbjvN6dAZXyARkT5utzP6tRb8Yz7aHrjCFD578PGM3JUD8zJAZwvfkp",
  "key7": "2LXTWKW9BpL2rvEzfRYKcEnbJGqVMRuLybtsgJ4NpoDj4dNu9wyjoRtrsb5MGEghvdZrNvDNzUYCtfAngoTuLNrW",
  "key8": "4g7B15pJPeMDpUFifMSwWjkuUoLD4u5y4wc1y5qGkBXF4YXZrmJYqYueJHPpcPms59hERaVqSsT5a282HVDPgANa",
  "key9": "2D6jZSEmSqf9f4sih8WeCTv9NjNTtx924YG8XREsFTiHNpqfm3a3Rb6ieDhjYg6q41wcKBXAB12oJh4Dcr1fs7ct",
  "key10": "4GuedY8edEzvPoyRZNhrg5vsjuxrzYufakUJDvuTfdeavEBevCGpUxNutrFF922e5UxiSLQXCgSCmdKFFTXSkSP8",
  "key11": "2sWb1KL8HVv61Hz1oJCLYGXRw99RrDws4CmYwAu8PvnfQH87KqEvsbaSpTKmxzV69kKrqmC2R7qVoFo9ow9JwpFC",
  "key12": "4UdHTbC86XL2SgkncDzHMnY2k92EEBBfaRbdo367byFZyCPV4z6j13bf5XG7eGenSVZSXA5CAPYiMHkPURGXd7dR",
  "key13": "CsQV4vXt3YwiowRumGFm8wYyVyDQQXbho4RafYaJNJBpnRoVhoN6JguQmG3DRmAoE38QuR4YfkFvY8JAvmvkKLX",
  "key14": "5EiK3JVQpq4SJfjhJXHpRsXV1233WTo72U2EwWzcP8SnmVyB6JcKxSnpBr43wNDt8XJMUq5xdVEGaG87JfAxtdYr",
  "key15": "5YLio4USwSXkwiemEZxVc39gySCVioDmpa8RXQmcxLuzfjQ2aG6WNiEQiAARTvj6mQxnSSKLcngkNXHm85nQrzhB",
  "key16": "4CH8i7P5Jod1jMZKAGNt63Lg4iTL2kebzsnJfPeiZogKBuTwwtaqTBv1arZXAqdMQpcDsm7bggvK899go8VWxvt9",
  "key17": "gCU1qBdCwt1jJuDvTU7FWadvT7k6DSQBGjYAxKivoEXQPNG1VhqkUqdwBJx7kd7XCpaiPqW5s1j7BjAyufbDQXU",
  "key18": "5Hs2NTiLmFfV7pv9DK8SFfsKdGgb7WnyyWw6Wtf2Z24mKR1fXGy2yWcokk8VvRBELKFHFU8vVR96cB78KY4Z2Xtx",
  "key19": "PbiZTA4eJezyQpf9JJwtj7iSRHHLCCybNonQQfhXFcHiujsBBdSVdqYCunTRFyzjVUq7A9QcmmBYqUQRHsBMRxZ",
  "key20": "HGwqNU3yGqPHou5ittTjbEHKAgWoHaTYEHKncp2dasyiSAe4rQtBJ2E7Kxhc21yLh9bkGMiKLi9PR7E7W1UNs7V",
  "key21": "3PKzh5ji5FjT2nsA2Do1qfRMzsxX23bwtshFPStenbMNcgcWMGkzVTWgcjLLMRKbYnVVNX1fGGkHMpazydmehYBj",
  "key22": "5JNLctEjbEJnrsxWjgfuyjherMWn7oBtD4Jn7Ud3jFHMHpiJ1KEGc9C72q2oM9UDE8YhaHqBgjRaMDvDuCkLUoqj",
  "key23": "3CECnCDeWhJAtfwwvyC7Nm3DwkaxK6yfezhPqBeGZCs2ZHDRS8RpLFt2PZcvUHoaQNhsdPQPRehzvGKLrfHBg2oQ",
  "key24": "33QYRM5ty8vFznQfcznSpaq5oFjtDe1qrscSGQGhiwWwkhqDHUMBkMHddzrGnhj3bLQfXDg6q24VgpgFH4o1gnRu",
  "key25": "2pLJwoJ5oaBk2PJVHvhRHGTxKmFqQKPnvzZWUc6jBrXauwomXMKro4PG92UEVek75e3MzFjKBzeznkRbLS2mDQpP"
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
