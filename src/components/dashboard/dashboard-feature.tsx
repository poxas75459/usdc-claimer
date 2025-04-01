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
    "31uiSwS2Pg3qxEkTVdBvwtZga2bdcBeY3dEqxcGikgrSpBLzBWj5Adg91gTeuTy1BjPEzZ5nb26vx6LBQRuCuJid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1unUA86dFGZSkBvDAFkRwcoSXVY9Mza7jXNBnLvjZaR65bpoWU2TBebR8hVPN113V7bbWLQRzwr5ViCiyiS9TVk",
  "key1": "3VBzNdED7idTAdWYbPDJ1A3Ld7fEt1yozFTpeeKMczv2XfHzLMDHCbUqTEeVPHSU3hCkLfaNJ4onG7K1gQkE3hs2",
  "key2": "5A3Qz6ZNFjhzCRpJEEyzGhNizeLaH5PrgRbi9NMF1cBAG3KaAAL7UXQmMTwuKFLst5sgEfAZLYhwSj8SXcWiYVdy",
  "key3": "5PUuBYrApRxLfPrhLto2ytr3xvDRySS2q83p33pcDzxYDbi5MZ7LcF2b47ojF82uZepvfBQtWDAGfaMEZNEJ5FGV",
  "key4": "5HhD9jk7ep6BNXzKEy5t87Qe4vFBzDMuofPGg3ejdzKoqXZf8vnAkQAMe8yirEHQDetsRx9H2ZpY1RHPUNN3eQd9",
  "key5": "3LufjrsDDyDhPbkiV8VFUquzMKaivH8L7rbGGRT3ESv8SZ6sP8BNnim5gid8Up1w4r86xtJfAmwJLRPZ6f5dYmiK",
  "key6": "2HgpTLNoHgkeLmzMDH59mVHitbP6ZM9UkCkeNCg6QMJbDyZozFPjB6Kqwqp1ijunzAiKiGzFHX6UAuwfvpP3XEQk",
  "key7": "5Gq2awEkLzpYm7H4fs4rPeyA428DM5sWRZhagVH1FqdaqgdgH4B6WGFyh9Ysicv8kNGU5VkXP263RJMH62ENxs93",
  "key8": "4rBi8X8xZpEcf5b9hpuGmyqe1CHrUtPRoGmiKzySLv7WwBGBhzWRHEUu5w4eqNTHiDmpdXmGHoyNbPK97wLfmtyS",
  "key9": "4feUbkHZ8nmJ2Sj14oYjEkNVE5wUEn2mhqLo61uysArtHZDd8XoUNWnTKksUj96tfh3Ja3kSRVr86BnCZv3XXyp5",
  "key10": "2LHL5dnpXjKU5TWbSmxDwDwikccEvJfXghv7ohzt2Avhtt3FL86sxUMR85ShdTn4xPxWX8aVkJezNZQrHrLtbsHm",
  "key11": "51oA8b8iJb7aL5DHDLPWWc2jGQqjATjYCSz36tTUFiCwwpDydhB981sqg6xCXdL9VUYyoGp7bPx6vJVjBZWkTTYh",
  "key12": "4TJWZZsW48C7Hs4xpKRUbEHnCr5zGYnt8aBpLij9ufiRTgACLiN4AT2GExB3n8RyEtR5Pgb6utLG7j6y3kgHSAWv",
  "key13": "2upmAbvWKcMqGjnrqsBrYmiZWf2fGH8tz5L6VgZkHmcN1oDwBSswWFFbrAsb4ewuEUnQd1cd9qjFmuMdj5AFTSK2",
  "key14": "4HWw7onaHy9fSU3p7tdLSYCZ1opKwJYM5e3EUeCqyhAvwVV55DAwmnDYawoq4SVG1St5abckKD3bxsgX94mfu3M8",
  "key15": "42mynreTBAdaEwBTUeBLHwhPr9KScMmnhrNRuKRsdiB6ZHQmtx4TazpR7gibmVbzdVMtbvrm4xj8PhbXxR97hRDu",
  "key16": "5euGY6MY12iRc3iLYYvCeQJGCBCbHiViWqixvgqESNB4b53mnaeenYRUeTHqq6ZC9BSjD9BTbiupvvGJax4ac7dd",
  "key17": "5RH451LtXWUHPX7TUHj9ji6Wuc8eRDRz47QgbXZNzpD6fGhv955KVyevzuCbKtWquBPQ8VQyozRZLw7mwrGe1zo4",
  "key18": "5TDfuUiFMuFxCbf7Z1hEuMAd6PJwaNk8wmQNXbeSjWNnYu6VNBqb9VKzwgLUefzCsPZciRMHab1XikDMrDsQeBwj",
  "key19": "2A3G8NXoSaAZFWeNH6QSKRxwyxJwrLyMfLrXhmRHK7pE67K5BwxsXUPG2vyXJQpd8HzWeTf63ZRT8vvKXhFNLXRt",
  "key20": "4NYpcXn8r3GtpDdtf2RV42hfqs2RrLG3NrvSXZTgyBd8WQ6caN58YTVr6VuvfmC8GAsxyvh98YaK58SeqjmUtxyQ",
  "key21": "in6Uvw9x6X2zaGB1eCUg5sU4rmkwfayFjjzATWGWmoS5z8LNyYeMA32wjgsXaBHGihwHsn22xLE7GUUoJhu4puq",
  "key22": "HideLAqyHLbB6MTyMZbjZLoomt38uaU1qDHdhNNiXbEerW3ZwEZFBjW3LX8LuYXqAWjxp9skubosv1SsP7KgKNf",
  "key23": "4zSsQNciYtPxBP7jroGrcbKzmWUqdTAP59NkMzdVcUiCPXowMdW8MP248YDiwaAPbqPpxV7v7mtTWWNYDKtVgYUY",
  "key24": "42j49yyybwN5kLWgU5xmJYW73DXUurx42CJP6F3dhePn3SuppNhDrT6K2arVQfVE6wYWXBPFEecKYhgJvizR9E3h",
  "key25": "29SgJ7cBJ1Qo7X9L99pzaVjimMhLHZqopxLNtuTDjbqwYg3S2UxPdivNkdcRzQRCFw8LZ77dTRZGyjRa1v3vFmcU",
  "key26": "3pVHyD5vzuFJuTPwZTNcnr4DutHD2dJeFtfgWB7uwd9nGQyQKP9Qkoqt1wvor6idBCqLU7PnYkwaWTYA5Fxop6N3",
  "key27": "5VePDyuJW1k8UsqFQq95UenNTJsp6AQvdLNCTuJoMFm63EWzCodeM1FeGAcho9pmu53yw6ffwJbXFSD5EYCXyuYJ",
  "key28": "3ZyG5uRJfsUfo831yCfXpiBrSHyrsf5fjzZNzaviMVGfXvEjFY6UqnuMbXFtHnVytDUHkFViV95jmAt42RNyrEnj",
  "key29": "3VrtuR4BDDukSRLc7nF3Nw8kxCvUzX8SuZn63firF5w2f1NdGt6RzcWkp3drjA4kTE3FtD9xhnqmLY9rej2YH3YK",
  "key30": "n5i6Q1MtktzsPy1oePxhkLagp34wkLyLX87knJ99q18UhuAyjwvHFhsT7ESrSjZmkWqmHpoGYXx8rifFzd1SznZ",
  "key31": "3UpDuHw1XgcHeKRQNP2jjZxzvdAK49XpvtMqH4w8S96DMrSy9W4Z4afULUzbduxRdmTFE4UnRDHDMXvttkGp1MBW",
  "key32": "2YRwFHZWMS5tHXixCVzQw82xqohvBniLtqiC5sRx1rfkFSR7Cj5S3Uj5aeGKBX7Ykk6SWjszhum8DtBAdx8AhNwf",
  "key33": "3gSzWDhbtMCCnEz8YHrZSUwV4dvLNbbhqLfYBUygrMUfHZDzPMfa7UEZisBVBv8yUMEpnxDAFk9DFPyGTEFkBsei",
  "key34": "65BVus277S6M6mZcNHgJLPFa8jtqE9bojUU3mwDTd6aJDVU3YwKPuqafbHr4jzzf1M1Rf6pFsyNZ2fKf2uFpYkru",
  "key35": "JzmVQbGrXxjAL5uZ3xVqNDLoMughcRMasifSC4arf6MKEkd3JM54oeVvXJcde1DxgTsLuL7SbHd7LGED9Bjxun4",
  "key36": "3mq2AD8e7okppiDFxibq4bCTmJpGgQ9Qp6ZWjkmBLhCT7kBHz2xqGemEbYvXppCYMJJZfWQAfCMAnuYNCWavxFVc"
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
