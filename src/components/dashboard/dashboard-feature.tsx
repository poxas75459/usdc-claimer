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
    "5th15KNk88CtPQsGCRxpGRRtTQUycYopoqpSHZksstcFsoQCKkEC9XUftQMj2dd6Gnjf2jrn3PdY1URm2to17Sc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKYnpreRoivHRejZgHANa27hTHLGnfBqovxKwHbcNonxr7JyJquc2GcXoTuUAXbxHRZ4SvA8Z6YVz1vfR9tjivs",
  "key1": "5zhVxvniG1DEUgKof3bP73DW8LccjfWVKS3mjT7cr8U7WAnMkpXU2fEoXtPHC6sLJW2BkQQDbF3d2kxJGh1hEryi",
  "key2": "ZQ19bnMsMuZJKmPkGU7dMYDuyzdJuRa6UccFMswRFB1pNQacAebt8vC5d8F5JvMABwBbc2gr3YcvUG1ipYncFoc",
  "key3": "3sRsEzqvAyFTMqBQgrQSuoa8KPZnx1Z3Q25gGUM5wAf6JE6NXt7DKSZnteo6tvACZUdgJyYRFFhqporJdsCqR7L7",
  "key4": "4XRk5o9XoYoUoEXeffq4sN4wKg7yJZ2NvvYcexLfhSoqVWSeowyWLDJ5gfXYRGM77gQg32AUT1MLKgaTz955Ey26",
  "key5": "63Htw2pvwqewjW8TjyBA3wfPuHCTvdfazSjL474c7q6yQYVpA8CLnupQvwM3ZkXXshoY2Lz63c8TPzsW9vMCPUzP",
  "key6": "4XZNxm1VtG7DzdXtFm3fJNq9wpRF5qnfgp1yCxcpLX1vs4Gbq7CAMpMYEeYDmFA8iYC9EouD6brtzipcRDfeUgVZ",
  "key7": "2UYhgPSq5xvGaTJAdUEutvYVsytSvuh53MpfjQfnJBEgLB4qv32cNTGune1qXGZG2DPUgSac3tewoW6cGCSrUboL",
  "key8": "2Fxnbca1EBe2nc8KDudHdfncrAJj824KtwonSdmGcZFAAQf4Vwn9t5h1o34iVn5i29GrrYdHWMQ73UXdLVhLjRio",
  "key9": "3xzDpPVm662ssP3yFmuwjbHJRptYvvZFdfw4GLjKdMByw5VCpqy3RWFgxRafv4urnWd11VaeVh1bqjQEXUch46ak",
  "key10": "NGeC59vYbPQ4zcB7VuZrjFHr1mg9DDr7tQEmPs4ffTtv8Vn7rhUdAr7cmWAmksgtEA3ZYHVi3xhE3otZmgbWPaF",
  "key11": "3oWnMFxZimMtKpnzYEADqb9geaVisFc6cGuMeLW4wRd4e87ULzoYPHUWUmesPgMFbxW3Bj7Vug2GwrXTbV3JaM4V",
  "key12": "24PZjVeaEVs1PqVmKbyn6iyMgkFZVznfuUdJgn44qtEvZEmSaW5YSqsNna6EE96YPunpqxP4ZREBqWJ5LjAZcU5a",
  "key13": "3qf3NAjjXBwDcV4QZoBVQ8eU1pMUuYk5K2jwYVjs1aKQtSdKZA8hsM3NXwALrxmivKdkHU18ys54ZaGYTxRVpTMi",
  "key14": "3UXq8tawwTkj8U9Pmir4sCcshX5DvPhYyqyZspokKX7FWaEJHh7g12YxMV5ALaEkpUsq1YyEedJjzaZbJmJZLrdN",
  "key15": "jdjrrv2K45v9K5wHfLAyKzNcmrvW38unErTV5hhTYhibiEsSuMZDiVH3xxZB6bCNCpMmWMcxA7JsfxjuokCaMuX",
  "key16": "nwZp59o8dmwyR6RZdccbE2zrpykSEeziHw2vU9hMNEfmfN6mioFfQDC3hhxHNG1eHKzGBafrYXzpVCPq9FgVhfA",
  "key17": "5Qqz3t4NgFersMp8jhviG6Ji7TbgV3Bs9vHi9MQwSntzhgEhaBAFqimBEfVG7Czsc7py3jwWsLZiFabrpKXFaUuR",
  "key18": "4YCMLUtS61oznC6wu81GbbTeqTbegdHvrEseB6UhJqCEtSp2hTncQmqBNgjbUWmNUfhSyH3miE8fESJvR9ssmy96",
  "key19": "3ibDdA37DarinYT45juhgVoKkjTYuHiVM7dxyruUptxzLv4Ku3jw3T477UottjW9XqaQDeGoBY7pyx3dNpC3PBHk",
  "key20": "3fT8vycFNw1hd2Cm9BXyXJwFXTJfJkV4nFXvUR34aax2cpyKo5duv1FuLdoa3PSnCAGaai5aKRkxop8bjpvNYq2g",
  "key21": "5DJ52SwFJVwvontAVxXmnk1dMEyeUqqGRgAaDzpRvNTQbvxz474tkTp595T18hs2dkQPANMhmcaEreH2gGyyrNTM",
  "key22": "5XgJxiu6tMSkqQHbu99BJCBmH8W79qEL4bZM6MStwDjB6FkVCK9nEWW9YpvuyWW5PEvd7tar236154gfxhubae71",
  "key23": "62BDE4uMTgEVeccHkPzTC4JcnS985hBgJi2RtfU8mPPisz5855MBhDXKbW9vehwusvj7VTVGxB4A3gnc9YQjXUxX",
  "key24": "3yegob31fa5DWLwtsMGPsSYXAt8owJZaLywqSdvVTuFUsEMpRJhMZfguVnSaLmgJJhT38Z6juYRz6pKuungq96RF",
  "key25": "3waQdQVZT8ZFwdx8XvNnkg73M1FzRGEErU3BrKeh6YD5kWa8CRZRBAVXgywUksT8qZJCD1fJV2RrsrpLgbSN6G3o",
  "key26": "3tcDAfR4res9ykAmBf2sdxSiU9EJ7ZuwEyQKtii5MEvdGQixbicGHMrKcb6PvqViUKDevP2WzPQPM3cof3rMuUQm",
  "key27": "3jpRbTUXrGL9qV3ToBj5DiD7czQFBErNPuG6WJrMMRCyKzpNVNY5SdonnPLzXAda4pXyPE3VX7uUKrMx9s1VzQar",
  "key28": "5xWwGVLwMGGvA5VuY2iP4udg25eW17XcgXaDxLs6gWPhPahn4KvbJzQWz7dB3pRLuHhUdxHy2NgbCEg7FQnob4Rg",
  "key29": "2FyYimM2Dzhw7bvEBQkxcJ81Dqb62q9v6nAJ9AGgdbPnf4CQuv3yEUudn6ALYdMmWFqMtKSovEhkU4KqNGD83rYQ",
  "key30": "4ecDBemzkgNGAQTv5YSBpDaMs4AhH1px9925DPRbYyFKD2dVUiHQatab13LcANmVfP25MBmpz62GPtR1qPE6nvgS",
  "key31": "2acZzLY38ADwLhNTQA5gapyTwTGbLi6KXcCvvZBmG8nG3rzmRGji5yEZN9h9Fp1xKaiGsbfVgHNaNZ9BXFatXa8r",
  "key32": "2i3hUH4GmHiUrN2cQxgxTF3QZLb7Lbxe1nyhStnU539sSVWpne6jDrfFy9gFF9m9aLtpWnnjtjLi6Ki6jaNLKpca",
  "key33": "3mktP3G1EvNqxZE4vbf2p5Jqwir1gTsLG7UpENgVwjbafay5NacAfaNd6FX1YNgFxm6AFBekKD7vWx62KCceT4zj",
  "key34": "2cordEJHntoJUTZ4WsqXh1juqZeyVoRtoBCQ5E5Bfq9E6rvq4GH38K65QL4BTm1bQqfRAVSEuqRCPiCZkGsWMGrw",
  "key35": "4NFb5Y8y6WbTFoKrbpFw4siwwnyJN7tAT9NyKaDuWke474FEPfiAJmJ2FiTjvTQAqiBsMEuEnjRhyJjECtxLww3V",
  "key36": "4NfQ2Jjrw4fdXowHZwgndJVzEUAUy6vKGLG9DBdHPJqu9k7AfMyU3Dvk3bXvsFwzAMSJtzZ78aNDjLvZqTVBAzj",
  "key37": "484aDqsbVLAHm8kZfV8js9ppJshVZxArUTmgEi7KfMagfT9mcX2C6QdkvRqtomRPzMg73LBQJdcAW1S7Ldx4KzjF",
  "key38": "sQSa7n6zLK8uGTpnmNXmMenFrpxC8eLK2kFE9VRZ7sDMA6BrQPUDngnx4et5CyiWa2gLd9YePwhUuktv85bXzkU",
  "key39": "27QaauyyDQM3qZKp3K8A12JDb5tTbVbmBJ4hmRPVTJUdJfJG1M73NyfkKKWXfVXnVTo5WhNxiBFiMNAykyMhFXTS",
  "key40": "xdk5v4vHmkcGZq5HG31jTWvGUKzJQiZ4NAjksCzGCpGvH4BdVuyGR6vS9M5qWYZUC7bhM7KonXb3LjYjHhB9PVm",
  "key41": "5tN7vwM6WvMiezSZAnvevNiyeSqccNtZGg6tPkuhSNdUTUYa641w5zcP7TPcjDR5wAVp3BhkwTCcop3hG4jJyYMQ"
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
