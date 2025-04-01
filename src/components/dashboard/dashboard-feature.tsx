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
    "jRQChgYbark7f1UUM6JnyNnCkHfiKPMnTef592Gs2BgG4o237Xz2oWmmTUJsfm4N2sv9BCLVkR2T7X1sKVEevnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "539VavJM23uyqUJMDQ7gS2NBUeuNBckFr6qkTHx1gmCubZTQfYmkaENGKs9jnvhgZvba6NWxD59Zbr9dYwmBxJB1",
  "key1": "NpZ6DP2q5wwSGPzohJ2UAiEXZZUUERcre3ZpVQWUVkFyr52LTNAK2jWyw8R5pGP2K9RfqrANjRLfts2KcoTPUG3",
  "key2": "4Nh1McC3MS55obXYcQQhzB9T1MBjcQW9RFX7cA3WXqHb45wvdtrERZifB1SgJjb3DRVJNypHDscUbvZcw9xmjgn9",
  "key3": "2EEf1j2pRkDqieAk1QMwbEkvyHJwAWYqGFVtnkKSkYhmthqkrfjGZqR7YrbsRspt7Vyo37RTBjxezuJ812d2yFPc",
  "key4": "4aj3PxxDMcYFetdYrShgGmJNLB3UVfWQwsnUM6gXTuRSEW3RFzKyMAQXbovwGUy6Sp9Qog2aeqJQ7wxxdkZkXkXg",
  "key5": "NBcUAz7UXhyeJHtgA9E2T22bwTF6YR3v4hJHftv4t4JmJyfznPSyNSdxPPphGdCEMQLkhMh7KNBXPETygkUuuQx",
  "key6": "2RYzFyrjF8nJ5w3CckfxbJgM95YDFPrVT5zKsoZUm2kVCJbMvCRydUZAfx9MTKgPAaC2BaKyfxcLWzgqrPYVMt8r",
  "key7": "3ASPv3ymUYKQsHLd5HrYm5tkWxMVTZaUJ2VMUervsWGBBExtEXLo7DHLFo5jhd3UCxEpwwcUG5gh8iq86tPGtZUU",
  "key8": "3x9cQSXtFDvvTW8FjuVtk7qrLEUoLncz342ZBLAYJA8KNwi8B4q7CVYanktsKw9X1k4ATvgpHSJv44YGJJ7HimwB",
  "key9": "5uG5DKFkuUxbSPEejhshuue5u6oTsPcVXs1yFR7bsLU3QLNZSJS8ZkkjKr5xdf2SfaD2GXzC7j4UoXjnFuqSyVau",
  "key10": "3ENtE6yK2hjRfBcYdPyJGyXnoazNzR2cgTd8o2vdHVy9W6QsiPasJnTMRxRMjq7MhVv1orhPELFLNLzPqq2UbuFT",
  "key11": "3sT6SpgLTGQrVczzUhSBejtEGufyutj7hpYsCnewaKVF1qhFL4yf9Wth11pmvhmFWKQDjg8mhz9tpsVuztrNYJf4",
  "key12": "5Qrqc6Yj2PsTJtvCLCam2kxjr34hGm9X1wkeGoVhf49MYFyKKLNAAYokbxpjPqdzrK5RL4zkfHg7ppGbRWMY1pAL",
  "key13": "2JLhrLtA36BZqwkxA4sLgkyzMQEX6Vwx1cdsnHnsF73eesnphNnvxmLik1XVeESAURkYgdZrr9tc1F15QA3CcMZ7",
  "key14": "4kwxuMdspWnzMgk5nn3zF2tnPuJT1qbM9wekMyxcQwP5gVfj2X9EAUkFoMZ7tJvcouVEMCkyzCM5Kgvyb8t5w4en",
  "key15": "489LPhMzXW4q5aMoGYSvEc1EQyckzYKLTd95HM6R9AC1ThBg9z93X9r5BPnCdxHrC58TRGQ8SqHqbqrUSDLc4RyR",
  "key16": "5KAL9QWPmSDEbCibWS6qrRqwr6dPXwqHRpXEpZ9YH3MH2SJMrNVRK6HKn4enE1HdsKGhGNq61LUNk5DvBWicptgv",
  "key17": "4Y3QX1TeCpWUiVumoQ7d4QozX5kgbqfdPjZXtJQMpmhPPuJz2s86WhDbhiLdzdMqCnWBGMekbALaepNqAZ1JnhHt",
  "key18": "55qvnqxXaYasrhxh9wqFAzQuVgMoMjg9rCQHvdszUYp9QN1q9Ev37u9JBTtxSm1c1VH78tui4UF5VEW33tBnfSXF",
  "key19": "nJbpHQH6NMCLv6swz3cjAFoXB2WhVujWCMw4hsNGGM23by5ramfpZ6Gq5fEWJAxFPufjVHKBw9Wu9vizoSqaJiV",
  "key20": "4w5nzbmafutzdPDxJWBAmboy81epkzZMH6YA7qTuBUbkdrRM2xgQ4Ha3oEn7hVtrrvWNF6uMAiP43AvwiWQLQD1X",
  "key21": "2GuNLzQxMMfPfYNnvndMzpcDZFM4BHaWZMPQn2J9BUDoXSF6XC3oyoY8JK2KRSmsjhJRkd7B1jvyYX7WxGMEEsku",
  "key22": "4hNPjjnKyUf4cKsF3nptYeCe9ihne5mWHGuvMejL8dWT5PXPFehk3u8n2M9F8gqLeuZe54C7636VFiTjU4vYVRxK",
  "key23": "5KnSxVKAei8NCncPKxozitt5LDWGR1734sFCViX6Rd2TwGHLnWf9DZLwAcZiYV7hL7jtxJapixrNVXPddBLWTW8J",
  "key24": "5NGefPsEUusPb79WcgZmP9A2pQyTcFgGWqjripaDrP9sLKu8wD5n76HZ6Qdx43eDhBA8j97YqLepXxTQo8C93F9H",
  "key25": "2fdti3Ryie65EaftxSJxXEkvouBYqZNGPcSLHMLCCBKXyLFkUs6xS3YobvBbHpYZtcGUJEnqtsv89wCedLmBAKZh",
  "key26": "56iYFuGzzowiEjKayiqHwRpPoB5AsmkHZn4A331wAGk5efV7JWm6kiBwEWeJd3SedGdUvX44Aw67BqRbPmyaa4jD",
  "key27": "5XyTss8Go1kDRomEM2ewGxYcjQcfAoaJaNYsGK5CNrLbDzJu4opCjSRKL8FyknXdg47SuFvYh72GF6GFXeQaRscz",
  "key28": "59gdecYhMMndHKP6z4dHw42ubTtZRNZQtMBSdD8UkNhY59SyR9sfBkaUxw3RrXBCqu4ry4Kpd6ZEzao6TJ45GUfG",
  "key29": "57qAhTx7T3CEwcPLZ3JkZ96dQC47TrjMu2bboJAMfKumZ4VxrZDARSXtGGLS66HKSvWd7N2RufEa9ND1yDNNzYjU",
  "key30": "4sNwHsSUs7gG6zKKy6YU7SWA5W33e3bGMuVc1sJjnUQPgYwtESqmcSs3M99e2RFdgF2Z3wJu84dgkxhvZU6pEsW7",
  "key31": "2BqsAE4NB9K1cEE8L6gxU5p7zZRiMLfdYTcg47QnCUuAGintU1uFafs6n8Rn7ySHqheTgp5aMkkFPJxmee21tqKs",
  "key32": "eALojk1TN6RFSUiMek2cnDM6Aa1s3pRZzQRBdLYDqiqaTEkesr8CzBG514wj6rUvBLZLy4wcPmH1miDTW6g4Ah7",
  "key33": "3HP63fRCRvkpU8NN26ZRcdGnW9NfUK5eDwm1FksLiCys5fk6SojAe3qUaWDFtpiypWD4jWCPHK382dTHreh1ZGMu",
  "key34": "3LvbQzoUmfjmTcapzvSdAMXKRd6ZufKVxxDJyg9q3nkJub7bMU7mSrKaJSJJukHy5kVT8HBXp1msz4VUDRXt3d4Z"
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
