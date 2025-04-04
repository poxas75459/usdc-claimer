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
    "4pnzMWRp6PKhiVJqWTKa5RQS6mGGe23pcrsgaEoNtu16b5DQXbojBRnpsaFhYQBehkq9teXh6GKkJ2jU5HvHUB6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SV6uvairAKwEhrkdkZS9hyMQJJDecAtnSrnrxCmWqjCEnLaWm5EgpbYRLr9gXW5xejraRmXV7mZ1cRBRnTHbdxQ",
  "key1": "5sfscEQV5n9q9tniHyr6yQnDRCATzCQxkAYyNBUP1GjEkdi2Nv8MMwPYneQ5dmY59SUYf4jrH9YTuzCR5vdpcAHt",
  "key2": "5yG77eGDSGUuTgV9AVvVvJMAm7aXt9E5vt916nmP4x8LK1y3wNCPbMswdC9dApTfw4TfShrSfbKHWcAnbAvUirHc",
  "key3": "5V1QdKTwSPR3uc5YB9o3EZ97tgGaQ49Hz1rKJgq8XXgB7gCWxzfaiWV5Refve1WAshVNrfjJpacRNcGh6JLyo1p7",
  "key4": "63DFda2wnMreAWwT5FyeSvvf81HrpxBYMZKFoQpQNM2gamcbBe3f5B368BvKbsFzCfiHYLbVLtDvEGup1wfFUe9r",
  "key5": "3x6jHVdsczwpBKGzQte8n8GwagyEXbdmjE5e5snvafC2orwGcqoRvrCQVQGfyD8kNEfCM691Wf4qjYKXMBwe3SKc",
  "key6": "2aGaF1B76AiTA3a4YVo3egXC5LK7TvsPiDhH4XnnEsmL1GgDokV3GrK865tWj7QYHKMAruSHqDr732VdZY6Uypq2",
  "key7": "4R6cphL2sbUwCyMwcjJnXJB99Dzr1pY9nRJkkqkP4EgHiVAFU4DfTS3HrfH3bNMpPNxtgiMqW2nRAq4PFut5pZqd",
  "key8": "wNgcQWYqzsjG1cbawpaKye8zquVCJQQLCFGZMtSfhZwDA6s62tX8u2LZYdpBQz7RpfDsm7hjL1vKnUgV6W6388D",
  "key9": "UYKMFEmmsrkcaf5oaGqfmvZA6vGCB4PVb5ck7F14KFrEttpodfgpF2BxTTECFNorR3Qn47iLraFvYh2b1cwTxMK",
  "key10": "5uTuP6eTyM9JDgUjkx4FeBqPwmhsAEUuJjsPgyCwLRJwp3jiqVpc3Cz9KYgVC9RhAPMoCZnYcQPCfr9W8YBAnJph",
  "key11": "GM5AW8tpmvyRDL7KWpizYsfvZnHbVbqZ7ov2DLbcfSuRzwdxVNV1JHX2AkQS5XyysUrL7CyRZUe9gwV388mK2zW",
  "key12": "3UwvfK3qTFR67X5muic64VEmDZPaevLoAarC4sC8zox5mUhb275zctm1V1cXkQHZmiGNWLAdL9ePhEFL8gVCWs2R",
  "key13": "ThuSJaV4YvCY4o4nymhcxUmWATG3WxLP5NMWMxtuyutLGFuzXoJK3zP4n9e1UhhudLzY3rEyAh6no9ZfbdSWxRg",
  "key14": "46fNN13Zq6yCHmiNbyEDazd6tNqXvqKWN7UddCcSDggcjBEfj7bQL3robUwFaYv3h3HYqAHy5E8hPZ3ZyqUksrpD",
  "key15": "4q9FQkPX9VM3GxxXVD5cCz6xCo5JGFw5hd95cVMXrWEmk8U6xoAWEHNbesMrboqSXoRfyJ956BBYGY7yPMLLMybJ",
  "key16": "2rEhdUdHB8mjxsDpjGGBSfHorGB6Lp5k35BrB3w7tnL7Wtgq8T3F2nri5w6Ux8R9Hre8o38xoNAKGtBkvYzhfJdZ",
  "key17": "5rgtvP34t6bCkXGHXGh82y7BQDt7zpipisfntPNDfSkACuypp2WzxdPZCbL4N4ESn58RqLfFs9inHaXpw21ejcM9",
  "key18": "5SgBGTVdJ9LZFQJJTzXFc1cbyohAwHDMThu2bnRqCxe1RSr2ijdFJnvUuHZXy1rQa6Qzo4rfdbZoXMshVKPDqkBw",
  "key19": "4YaX5A9JtGo7MBQMqbXxsWPuHaxH7x45FS3S8KKQjkmXKbyW4iwwoC9QynQqtYx7iHtnTZRUvbmAjnsuRND5K8i8",
  "key20": "2quH6LiPniiBao4um93oKjQjRFZYabvknWPsBDYSn1QXnaK8AeLPw4htsdKtWKb3zib8cyrKRWP7UaqAjY8QAa2q",
  "key21": "646NuecmyC9QvaS4jxevaqTvkJjTYumb28EChGzhbgMRyTpH8ARZGCzADyDFZKgwVeiQx5u68VyLNtENa7qQgoxw",
  "key22": "5MGcbJsTDvUBKZ5fsnMa1ZtYnxb6kjQgHphvpTXUZu5cgvroRsD7ai6KtcHramN7F5aAN2uApjGcncQynsbSj64Z",
  "key23": "7BtCdoQHHd91o5CeuJSNhymfCnsmRsAYtieogfTaV865Er4yDF24QWyGBKKpg2iAMeHWyFj1U6U5mZ3a1kgdMKW",
  "key24": "5JtSxvHhMYHLXY4ToNWhUWW5GugGkQvDkUBj9juAUJuXN63TAtQS4GEXoLyP7grNiMoGPRPxEUzNGM3kAoBgSktc",
  "key25": "cTPVjSAo3mRysRVDKXD5GckWPe58RjeggR9aLXiE5EfLuUuEtpH1imv7cUpfzLDQAaqV7SeaGDaUwXbzgA15pFY",
  "key26": "2fKeNqrREHjFZwEdaUKJxBAiHw3a1wkgkGikDe7r8YJSTPDuXLcgrtKXLfA2S42StzMTN9u9NT7AgcEdgyJ6Mcwk",
  "key27": "3NUCXh3UgLKweHwQjZHhovwUa7LCcRzZpkG7v2bRQRcmVf7kJahRfjZ5K8dYYGCwYwqEg98b3S4Uub2SvQAi2tYU",
  "key28": "2tALWCaHADX622M1874jQeJRyWDW32RwSFoER6zb3gHH83nVBjfTvgmtYUTrEXoocCgSc4VphsUg97EJD5HXycad",
  "key29": "3bfKEYrW8FNUaVQEUPkqtkg7KooyD2pHfrMfGVNa1CedFRgCWk5v6RrYyRSVwrezQiJkE7ybcrCcezEcidFHth3q",
  "key30": "2qXreXB2NPZmLExiKaYqFovzyqh8TvF6yxKb8jSjU95Emwnihs19CJ5V2ddQLrih6LbGpd5YDSUURBSdGD1gGNH3",
  "key31": "AJxS7SyZyiNxqjnqqaw2XeMVPFmHp3i7tpigG4Lr5iMZehmALR527pt3NG19vyBQbZQnN4JtY2LL3xbxHmEvJwp",
  "key32": "2bFBpuNGnarQsFckQbi8YJCDSQT4m4HquKAgGY6Br5PbTq21WucnuSB8tMoMTLBZ5fWQiXqnu1hjogwaoraBHMXW",
  "key33": "XzS35HtEvE9gKBrSvBw3TNyUXc3pTQT5KagBRYuk4uhi1NpazYTZxtddfEcxp4N6YRHmTCnnwwTiAaSS9K4rvdk"
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
