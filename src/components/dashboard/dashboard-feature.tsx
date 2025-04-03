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
    "49NNg1Y8jzo3Qp1Qz69CxDVLnmW6JAz2k6sgQPDfCQXwYTcWq9K4vjv5sY5usGSLRDvdXnWhzMXHn9tt2P7bbhS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4od3zLht4bietBqSLGLP943bgnmLCoCGxK1KvveGR6P2LjsJp8Pftq8ZvqwEkvRCt9tLbLZz51Bn2YAnLkFqJ9d3",
  "key1": "38vtN9SpBXgww6xnT2uH89Ln7zd4jSP5Mn3VB3wp8yuWwWhjJfLgUC2cYjpF77Zp8RhHMsCidTyA9NHjS1rZHDmG",
  "key2": "2xwkJo2SvkMkU331TzkwqMuGcircJMAGD63ekF4328jNnCYbbV3H2wtMr4MEHVZBMQ9DPpFivUT5R8z5N6JpznKM",
  "key3": "2r9F9MxoU17DwdqENSNzKWQ4EwSEtiu8H5oArCUYcEmeKbnxybCseUyTUYJAGdoMzms1Tkh2TEvD4AVcaisHBCM2",
  "key4": "21mU616JF7tGDVYAsygb3kY38RG39qwHEq6b4b3pMd8XYmB7ZVW6CUr8ugqxLGyGWLBxHfmhBchWA4nA8DZVJbQ1",
  "key5": "581UKjq89FvQRuwnjeTPSnZ4KXx7EAkh2EcgNUmiv9dHDWrN3AKkWpczrGj5jrs9GwiM6zuVnWep3MXau4iZG9BA",
  "key6": "5yVr7g5WUFBapUF3iSVYQ1CSD4kXjr6UvGHpLouvVxKzfuxCEqvnSd2G9tGghLcpdwAHSiGU68dHRXN5CcqiveL1",
  "key7": "5DjeYiY1oRJA2Vq6G8hff8avwg7RDPnUv7kjTaafhHFNF9GFJc5HgAiYWTjzDYMY6cpeJ8jR2qhoAcMkDbccPVTF",
  "key8": "5EVu2wrYaagfKRt287CVvY5EdFpDpbiNuJWsdmzZy1URny9dSf1WUXAaqCR2PCXB4u5oeyT2KoU4Cp9d9aAKtAGe",
  "key9": "YABYXfsh21qQXJfHxgYdkPnejztQ3mcdTthijumADZchmi1VWwGhjthA6UqiWDdcr6DCdFiBBkwg3RpDDqu1XMf",
  "key10": "5LnGr6g8DxAPxJ9KzjgN38BkpHv2cRSY5wBTDwSG8ZXgvyJRLjrkJyWrVACHiAjUz8D1VGSiv6Rdc5uGoAhJiz2Q",
  "key11": "2Vq5tY5iF9yk5bhKzY4cEsB5PD5qaZT6aJHgjY2uXZFV41V5c6LfQQeqJa4xVvGy1Kt4ciJ35MzER9EJuh5LBiQP",
  "key12": "KdUoU7cGvXGsF8K6reYhzryYMbSgumVaZCG1ek5nXpLA7qsXte5jaXtfQ6uSjqZMAkwmxHgX5XrA7EatvM5t7AU",
  "key13": "enV5sWpDxed6MjEFwrJq2uf7JJssbgTvtfvCAj5ExYShvvXAycRYPQrky7YjhfKJfyH5sLPhapi5Nm4gJxncdvw",
  "key14": "5FaHei6RNfCf58nygoYoLFXN5A8ruqUTdYacopkWxGXAFeSzJ2SuUYxWYAePhDeU9ZyEq5jFYE18JGQFE8yLaL3X",
  "key15": "54pnAYWaxvpLqjyJC5TbEkywCz6UCFPEQnKwgE7pDtTbaFL38tGbU42U4Q6xmYAJ2YDc38CJb2wQ9396M3sxK5So",
  "key16": "2yBFhNug9V2FsZjUhWtbQLaru9Px6ejt7R2peKZWkQCsrMwmHTmm3cvmVKvbvoioGRseDQWVkpfJ2tn9AH2yXiB5",
  "key17": "2ikKE7uBY2egyHHbTZ31MxT1KtcNuNnuGqcgUfjmeX8w6mu2bi5mAtr2fGyZ4ukFArYmS4PtnwWeKA6DJukLtQyC",
  "key18": "2p7iJytBNi9QcpkAKW1rnHn2qZkYNN2GDJNvQps7UEktgE8CJFu6sQkvVimdVgm437d4omij9ZELu8mM5grbpw57",
  "key19": "5kfeHcoonKxwjX6yH9Zif9jhjRp1PVYNmiucpnNgwDxrfb4ipQuEaR7a1YBry8gTuEXaACJP464SUJUETA6beam2",
  "key20": "3r6cYkLe5P3HoiNLGuA5E2oSNcWYDpahYQQApC38oP2hBQS5tw5VoMRSR2afCD8EaYpjd6sZDK8upZaDr8oxEtMt",
  "key21": "V61MN2t8yMviH9LW7QeDpPrxHdVnRZAXwUV61obsYKJdmjnyPz8nY8iC6hjnxgCxA9ejhAbAhHvNEV6oFhVHEAK",
  "key22": "4hFy6n1dbiRXX4dEFLxamhzvRGWLoAxfNEYW8rjZ4jzM8JnCFY5jXLbiUc65J7s1KEGC3abzXpTWzG7GfrYMyDPX",
  "key23": "4abTUrZ54dKCSWg1ZD262JVPUSp42MLHvMqac9tF1YbKopETgJAqLgHAcbpfMbcWdtq3txHoa5SKjbBxh6qa1Aic",
  "key24": "5nHermskqSimiFCBzDc5SmWYYXGHPUpdnKxFQgLTsm5vcYXX6HNHT1ETEKwZ7ZNmBnwYstCZLYT5ujfzQ3hFVW2U",
  "key25": "2kKZxujhd6ScjzNjt8P8qWYqP5faNNsoWWgU9WBZQikWQvCbe8NJkhGhFmjwHbDpNTD3w15isrFsKXXYmGWQW4Mx",
  "key26": "5kWJ8ZL8oJ7NbAQvu4qyWdSH62jjd4Pet4ReCmvbjCkTfNt8Bkg4S274BUu8DDdRFmx1iDDY6oM4LzCp2hFAjii6",
  "key27": "5BNBeHkB5xVz9ck2T6WBTziycXe1fvFNNHGLdLPwSSjXqKhtPE6g853L4QFZKWDtN89Vu6KiDFTApMq3bsuYMcJs",
  "key28": "4nVRsTkCnr3vmWXX5YqgQ4dZs1nQijRd8bZ1humftCcjNLmb9zNdCK67Yr6FvL2q54bxToMSZayRj6hHEUtfcbb6",
  "key29": "3ycTK35jNyJohMj4PZBmNqebHuuPusP81YHvBy8JoKuUeyqaETy8ejqrejGNk28EgwvA38p9iakZqhF3fAXX7g43",
  "key30": "MAx1fZbXGAiK2DmPD2jq7z8JZ8FkGykeE1mootgtxLG5qCVpVn83bSU1Athkf6Jx9hPdVLFe2PM9BViZp3qqsWQ",
  "key31": "4wDc2VNVhMS54f8RLoDGFAEcuTb7PAfdRxpByL7A7dD9LBqwTDVNPdFg5m56aGdcwLWoTSfBQRhaWUV37KaJgejH",
  "key32": "2EzaJ6S2eEZCFByZ6jZiSxkErmH3Ly6iDf9ePFbXqh4MMww9g1PVN1vcQk7aDCQCkCPLhcAdN4Hr3jPskC2qFMWa",
  "key33": "2yVw9WSLA1EikhFipy7G5eN5fDoic9fteZR2uDYAvumEK94j7TpVYhggS6cv9Y4WoBWNhTdvWQLWRqKEQKtWsqri",
  "key34": "TmzuXH6LJ4QQ559uPwcDXmueP7ZFzyJV8dyHBWhzesY7hP2mxEsWYnb1XiVygEcu9eSTyK4hoRY3LM5HWtjzCtC",
  "key35": "YddH7CyNmU9KMhM29U6L683FG3FEB3NMb7gQvBnZhgi9ihycgFGRDrUBJTmjjbmJvQdmq2hb7E6wcCLXBuz8Xwj",
  "key36": "32o8DWFNf9cMeehNQMjAjjF8W8Z9Lv62ti7JsoZr8prtdfmtEupZajUpWdMR8T8N15WBs1phbSu6ecrEHk5qhWKt",
  "key37": "4Ji9k97tJJfhQgyWLJvtdWmoTfdjFH4osFns6v2QoYYzqGYfk948uZNntifquKJ363j6CzQoccvSwYGtmfLJyfTk",
  "key38": "4gYRzQV5LtRFPa8FED8o3NGPFEqz64MdtR6XMMThZ1p7EQYRGaGgGYiAE3Pfsyj8XWn1TAqMXG7iY1y9fnZfmWMr",
  "key39": "61Py67vXrv5F2L3D7ZXvVBkZgoAJrz8a9nZxqhQLvFWqjYS5qL6nVrzmHvkfTjFMLfT46YFthzjEtv4wwDu4iBUs",
  "key40": "44ZQm6A1VkavnwTgEGasqLJMowZscP2tkkFAJ9Hksb3h7fJV1Nz3nj7zE7hf9aoaBXSN95hgPjf1xAYk4htogbDv",
  "key41": "4WksN3U4s3dT7f5bB3YhULvDYyJLggKYEcRYjq5CkdZjj4DjqFDjuSp3gGqTXA2DEms9WL94H6tHjLijv8R9xY7f",
  "key42": "5PBcvDiU141bnkvN7u7AR7MfpWn9pHGe4tUHincgV2a2gtNwD6s1qHoJm2E3Wjk75GUNLSzv96y3bhhVR6jXcbn2",
  "key43": "3kvPdpM9oaZ97pa8XTj5m1vd7sNcgXtEqUDG7XFSNTCKN2xcq4LWBWXTBYCMheuVMQidhrquYaaBS5eEHuYrMTAk",
  "key44": "217jbBkTDbw8CsF68M3ZfwBpyVMfoEyjVXhfbjRtXQBerCJLKDEKJs9HMuPXtEQm1cu5i56x1msEsyi6HnFBRBUt",
  "key45": "3t6jrAMpwwdGvjbNgfGiiRo9yAyQ2uwdxxxv9wXobagCbd4NP58kxsHyqxPV4mamJZauRtnLkYG46gd34hxjSFDt",
  "key46": "4BHGSu6pa1dqtYG32sRvwdQNZZfRzGuLaepGxxP8R1KVRzTdgoBfHNMiEySRGPZw6CyQ64f2H62ZWgAU1wVRbDab",
  "key47": "3DgTibP7UNL4b32vBhAK9CUhtN21v8JN4ojdMpGiRybjVFgn4LdorhJVhksD39JkjkdFxLa18vPtBho2KMPod1B",
  "key48": "4LmeFeL3oBNaZXnCxWwZBswey1JMUFm6r464qLM7dvuUWqGDFXtBbMmkmdL92EpgbLDkqJ1eQyTnDJuMgcYQHLdN",
  "key49": "2K1CDvcM2pc3Yzu3B3DwkPEm1NpcJfMskTMcjZ1hCNEzmKV4PCirmnfQagyejKMoATN8chPUFvztHWS1zbu1uVEq"
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
