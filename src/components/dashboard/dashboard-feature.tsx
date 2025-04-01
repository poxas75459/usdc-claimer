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
    "2iRycEQKdxusD6t3mFs2wXkroyCfm1LDJC1juCdFpXkK4VLoQADiZPpncjFkjx4pZw5Qq7AK9b1SBnN1m7dTzDWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmXWFWhC3PpmewEgwSEF1DdZGZS1kjAJpVMr9w2aJu87kq356qE7F3VxweTgrTws6VF1agJEmsd44efa38oYVCW",
  "key1": "3cjzSPBEy3suD67aVyx12i17tifv5NwGKgY3ko7DKdLGD9Mf5d91xA8gUZhaeetMMspvWk4dFpoQDkCJdbeWoSck",
  "key2": "2XqhMveZ47tMCRKzN3mF6y7Qks9TsDpvtxH3VhzXDYkaN1zC52TLegxwfjTC3tos9LmsfzGoBsnYeVKPQhAKHZrD",
  "key3": "3VqqJSYw9WPkwfg1CxkiRLNWTPs1LqBffL2ynWxoQHbkhquN1tuT3t7kjDgkvJCjaK4d112oQ3GLCwrdapjxgqbD",
  "key4": "3YVKyeEhvfdZimomDSAYmXF7r3irAAXWJuUQyCco7NxsGTxydnCNSuctsucWcPsu13TwSD71sUYrjb5hg62Nx5Ji",
  "key5": "3gLj9RKiP6gqeihypET57HRN6T8TPGjLdE74yxbmMBBeV265ih8k31JG4SmuQGoX5a4XyqhEWq72eQRzPR2U3noF",
  "key6": "FU6Z7U5xpsiJfJ4A9gn4eZHXCx3qv2AzGoxopL1JqEr4Tm3NtUDC7icyt2ogeFUz32q8wLUKn9Fqx6qq2ua18gt",
  "key7": "5fDtuM3rUAaVHMWhdKCXgv9WKooSppAj8DGXu6Zd2BdkJRLLUSiCjhAHQEYNXpdPmQChK3MevgaMV9aGmwWsQgdH",
  "key8": "4mKBFZA4bzfiucUo79yQU9jGGpJ66XtkxTwrHfyRs51bXXVT77oUWBQcAS7VH6BJwkYJ6z5zPbY5652rdubisXCG",
  "key9": "5G94kYL8oKA5PYgDjGDzTvyFEwwZ2EXPMoQaZ7jDc2b9SLEwYMNkvBfVh4EBRXp94gHaJhksQZJPqkzudRt1jERq",
  "key10": "5Wy1ZtPiFtSPM5VqDsyG81HN5QTNY1qo1w97PJgZTXaFrb8GkPZhUD5ppuZAd9qHpQWzYVxS33XzrkKmJaujrKnr",
  "key11": "nd2DXxBabqA5VBTpzXGGCtoDH2bqdgc4i29ViaGe2zDn8rsaxptVWqNe91Zd84C6RxXkDqjWL7wpA5dsPTok84h",
  "key12": "3eKRA5eL2UFH9T43LkuiLoQMS2ChAsAvmV52eTQy7A4iHs2rzt1NunMPGtwiyZDDURAAy9QaHXKRdbKqUHJte27m",
  "key13": "3G1Phrqcugax5MDwZJPD99ux6MV4LT7ru3bfgrqqAj2wXbUrdzUEeQHFBVriXi4EdTX5Kjzp4oiSujbqEZRvP4ek",
  "key14": "28SpfegezqZr1zK5w9aAM6jv6d1VVRtorBjhWZz4MawZou4S6Phy9B4rp2QfWbxcW53ix3SMxLqS21Hk19mi3YTb",
  "key15": "2xV4fEpKoRBmnzYnov7ddUMi3WSG3ehLL5CKorkorfUcehcfvqT3PcjkQWVgbfKaMhE4AQgNwP2jy5NSEWgXVfas",
  "key16": "4GXLK8pNfcjEWk6sBuxV15cadMuHcV7WHnZzGXuCnHTjn5pmECZjHmi6Ak7egsjuY4k4U3WDfQ3s8Nhbrzdczk4K",
  "key17": "3hbsvT5EHoJvWdw8kJ1fBnTMwyTe3QgTg1MCD6nsLLxCjsEi4WC362ipQk7AeqYQWCEM521YU11Ff4Be7YwHCeqH",
  "key18": "xVMW6RMrPz5fGBFSUnmHAmRy8YDBze8GRG9EByrkSFif58i2WitaKUpSPrTV7FYAzB6enRuc2xrWo3Fitkyg4xf",
  "key19": "Lu4Hud2X9Gp4HrEDJPYZVXCWDmA4bbB8h4jP8VHpnd5zczNJ9XbZ4TMVTkMRvaBSFPvB7di3n2mriVgmbjarbBG",
  "key20": "5M5NHiAm1EG5LeMtpXaJEVMzxNzwijb5DGVBJcVNH447M3Av7vdHqNAV3fEFekzZmgmcXje3Yiwgk2xx1P8ncnKq",
  "key21": "5V5sKWsmJi998NghMT1zCv54LTX3iq4Yyzm9tfimdzH8Rk48re78toyuEgYKoAkqH6rcw76v3aFVq3FVNFUq5vN",
  "key22": "Hd3s41jzd9JFwWNkaay9xhfnW7yBT6A3eVLAGgL1cm4otA32yudvvfZJtavCKYKfdT7Z6jkSnnqdLV6txBMqdcd",
  "key23": "2zcNrg28WnK6jWY8swnMH3oGxeBQ4dCASeXAvWUqmdCxoDvhfPmrcwE6CGbcUsMynwPfb8T1WR5aF89BkC1YSRuH",
  "key24": "3mqz3xd5fJHuyeNwjSQduWJuVK9GpePtQXtAyFyQhvFSpphqnu2NmQNjUXou4G5B2FbTB28hQBxFBeYEfyqY4RgS",
  "key25": "4c3m34ZQSfkHqPp6er2B9WxHbhihXM6D6TVQAGoZDEJMF5au4XFwfs8AmqCP4zirwxZ4w2jZ8V1pSUYZuSoi9b3g",
  "key26": "4psoJn5qRQj616psCyXRuXrQ8JfCJonAYQ8mEszdjD1EYBie4vWShZjRmnmbaW9fjXJ8PsneKM5Z59X7z8u3aUH4",
  "key27": "4eVNn5vTG38qt251TQigyVSstoXbttnpwJnWv81sM3gyyu5asVWHCMuNjPQNNay52r8Q3fNunanWUuFFsjP3nwHH",
  "key28": "32sFLNEjf5wUV564FEZzRnUk1tGUJvVp8GkTYqBAnNQdUqeae5daKyHwzW1DnQuUcVVvURCewdFTbYdUzjeCNXAR",
  "key29": "3R5NbKUq7NcDhVCSiW7TpkyFe28AnnfQ2qjcg1mVHr713kXDdxa1PsoLMWk524VqkjseeG59FJL3Rg9a1ZfXpP65",
  "key30": "4j8LEWAqZXgv2KmVQUYUeMzKhvRLsrWDrnUV9w9s35w17iFHSHoFQRL1eZdNDrhPBVGCCCJDiCVRQLPnR9sNj4Xr",
  "key31": "2548PSag2TB5sZPf7wVj3dhPx6Gk9aELpyWvghnigdX2CbmkUyFjCfRs3gbUSCGnmX1o4ijvZTcam2qjMjEGNsMx",
  "key32": "5paoFQHnd9zxKX2co397VwyBKs1PpqMxQwRstiY29DYxiWDrEnr2KNC4iYz7aSh9zJgdCUXajCCFxYqUt55rL1th",
  "key33": "23rRVESbsDyF6ZwsoNivjDgbqdcX7v8HxrqQH9KhYsxtUPz8RAjxktufEfEXUE2Kd88qp9tndQXpTVzb8wWwtMJ2"
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
