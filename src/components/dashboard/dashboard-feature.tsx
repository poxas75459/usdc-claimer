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
    "3CGWQgujES5BPnPTEBenKiEbd2QvFJPTQycBtAHo4pqXgKyrXB2oweAyxgmhuvafNf5ck8Dy6RX9oKe1v1gUoFgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dch226akeauSTsudmahp8EAjQk3AkP7yNLLhfpij5RLZ2UP4h14S4G8GpPxfuoEogX8NxnN4eEnUnhcuYun1fdW",
  "key1": "4x5CoGM3HYZx9vAjovTkxRBpE9apdzPjHCD27pDM6Louo22D4PCV5BH3Dxpbtb3EpvAMj5Zn9rcDwWUgfMqyCAu5",
  "key2": "66QQg1xCiXVRCbCpf6mTeWziSmHvEqPxNAY495w3ihpTB9fB7TzKdf81KqeVoPtxEEmZzGsA3Ecmhzjj1HPe3fod",
  "key3": "4eNU9ccXHv5yEhcaP3L9KeA7KB1qeKox8b655CPBU6YzsqY3vraRZM33dDChZr4DF2Maqds5KEmt2HEPeN7Jppc3",
  "key4": "5WyLZB2T4eXyec3CdFBPSDRQz9ciZFPTjrnnrRsRAEPoqQ8hfC3b4cCHtmQ2J4Hk4wGbHDoT7h7RLXF9NvFQthuZ",
  "key5": "65tnKgvUtGeUxtTYDYZwCc53CkSZhd7gcafhhJ62ZrWef7ex1xddWWPDXWNYmwNMjcZYAU3B9xpzAD6C5fSsBzHz",
  "key6": "2TPMeqjvk6B9tWBJ77R9MYYy8dA1J9vJqgLxN889EEGT2fG4u8fVhhH9LusETBtWY8XYrfXjdhfF4kbByZ5CE8H8",
  "key7": "cYYuhFSQNFeagWP4RiBgvL9Jf1NnWor2iKtwdxvLTtBC2C5t3J66m8apTbbors1pQDWMWiMeekdAfnx6RCxR9GH",
  "key8": "3HYmVCeizfC1AQnskzgsNZnCS9SKdnhMZKHwsNuJE7VFKKeTFxPm5Z2hPWPuvi2Vry7kr2ZUfa1JCRQF6MxVjtTW",
  "key9": "4tTBuuw71c9aYzy4Rfjii6ARLLM6z7PMwBThQaysWJbeqrnuo86qyoVbgyzBus7W3gmhxyZ4f11Kwb7itstEDFtR",
  "key10": "oZEqV5SSnNpvSxpmgrC227LYkzFanYjKSjFobFAa2r3kFDfNMiYZWi9yQrRfRDAH4GinYmtjrNK4CHjyAqtniWn",
  "key11": "oLxN8VRPgzVBxNd5SfrYedYeZHLhvBLBM32fkWngTv2NNWEEUAvzZ4txiYHPWphffJfED5AGWG7Yc4fstGBCjdM",
  "key12": "2CHU97csD8kXAFawFSvFAav9QQ7pTb23aT178dCksM1T2TU5Pe4VCTeDhEFXXtZi4yvyLChF16Pi25gEWtUUFExT",
  "key13": "3SgUU4VQb9jh72ksjsaivVmKwkeYtJ5ohaUfNg6javEhJqndSb9V3YMR8VTttJt1ut7yQxUMW9DBr6jjujPkj3Z1",
  "key14": "3aRDUhC9soEeXNvYsdsSCDb6xqFc4LMEqKQWuSdvdWRu7xrAupEVxeACoXxqCXg1CjfcnpdDdfK6ant8ALYMTZry",
  "key15": "29gWBMcmDs5eAhnLrWoiYdhk6623Jk1MqPuAzGNbbNTpgGS4wk7d3qUES3a56QwcVqq1vZD1YNPJWQy1JqTpUCUB",
  "key16": "4d1wbT5YHMZqCxBfB2yzKQHGWcskrCzHSoRiJ8nRzen8ezuMUd2awZPTWRAPqjRbAvCWkmpc3V52xXBkMWE52vyq",
  "key17": "zsTT86Cyu63hfw643xSbh6v79M5wES5zvbPh1aDAcMX3QoUqiKLADdisrkbgHxxiR8xm4FmNLJxGRfv8gT1euEK",
  "key18": "3cCJEbWxr9h16Ah37bkZRZh54USvPVHQLoVhEdUb8D8a76rBqiBMHFVPS6yL7boEu3b4aoZw5bNASwkprWiU5ZJd",
  "key19": "AUdG8H7f7xdi1U5E9r6GV9pjki74nZr2EVt76syhpqxyhVZJ2v41abqZ5KZq8Gr7PCDEVavKMWJ6whDYAy7qXxf",
  "key20": "3KhyPw7ysP7XVrDREEpzA26qh2FnBFrAvwdeGAoXjK747YnS3xtyunPqVsE3YTS3mTLFKFfSHRaTivaeNA8L1ScF",
  "key21": "25sxMdKpqUbq8x7BGhzKYYBzPLeqoL7yUG6j3omJs5PHhLH7DgAaugtsL5yBSXDotNqb3AvEpPdg5Xj456GwNqpH",
  "key22": "5Q7mTmSBF1gy9SRgjdevUZ5Znz31V695yLz18bA3VUM5cQZQeDeMtoSTjj9iRAV4q9ZmzKScZpSJ3TCEXHEq7UmA",
  "key23": "PSWH7SrmuktrHTcRm3hVRCCa6tQRtszo6xytiEUj6Vxzt9oQPNXMEAAaphRgxCTqGkBXAWBATAjsGirSobAeaUn",
  "key24": "4pwb1s25v6oRf3JKLDhnoMVaT89ooXoeDuos6ppP6nAmYVRFdSdtbFrrMTFkVh5eiDnXY6nrY6TVwNaFsXRtphZW",
  "key25": "3UyjW6GbRqNs1sPkjC5aUVxrpdtvuCicCLKWsKHAA653R7fBrXbEjVbddKre66kNGaaGpNHLg89f9wEHfRpbFfYg",
  "key26": "3BS1GXwCGWAx5b1M8smY6bPcRnSwM1vab8qJ831Bf4qpoVVakZjjmqf6euCkJDJiADSUTyqKjHhbUHbcS1vama2S",
  "key27": "1J2hCxMy2V3851VvKAZm91dExG3uRQucPCdpN51A4NajKzvKbJq6qkhB62V7RgvcMGPHXv6byxJptZXLLNqRyRg",
  "key28": "4fFjebBTsXnpSCi9hwUWvtPEpYWTx1TPd3EG8dUWJjfzXbiKEmRLyXjUC9SoXe2PEwPHfRUGNSuG32gU2gHAH5nv",
  "key29": "2V4vpa7iF7TSxN235U83nindua9npVu9CtPD1DKcYovvhMKenfVPLQge2LoRxkiWqgFgaLAYzVEgkiN7VSUVxxJE",
  "key30": "571nJ5EJt4BkJtzyEotQ3tnokmAfCTFeTutYNL69NaTDYzv8cv9xA2BteooDf7QUrghsy1mDyXakskCJ6ZEbeZFT",
  "key31": "24HDcy3z1oCcLiwGkpKA4AqCrw3sGLA1729732kbb9ZCgsVEzWkGwpoTtc8YCbMyrYtUo7senDYeNg4dShtS4HoA",
  "key32": "Bq2JKDYYUXDyedXCwkdTRP45B1J4Q1utWosByiktqcEAfgQkyx16asygTNuQDqgvpezxbU39ShcxDLdpkZ5MLnL",
  "key33": "5XTqSwGKCEzXDM8T68DmWdhghuQovPeZckqBkocU6RYk4C18uEGBB7kDibuyAcbMMbJLcCYfffq83scKpn9iB21d",
  "key34": "3djd9WJp3ZLJ8qzTRE12thWjy46r4BFpqR6RD43Cxdm6HK377cerX32tcKLattYC343TpQbLjkgj743idchF2GC4",
  "key35": "jYUrvTWGTo4gERZLxSxUiqX6pTJnuTgN76RckeitTYVFUFk128T9mvwxCDJzDMqKK47WqofTHApKmfXC5rULcEb",
  "key36": "K5ms24V35yVK2XYP9qtrpT1NiCeqjLYnL89nAj6jDi5PvwaYEgdsUgT28aJ5qbiDRQjJENf1pWBrpxC9HfFmYp2",
  "key37": "5AsT76Ag9GjtaXp5tXhSzKbdFXWXhCgo919od6xY3dXLvg8fmib6wUGpbqabh3x49MbuHGKbJW5CLoVBLZ8MVMdN",
  "key38": "3PMVroaEFaKHMaf7ekXXQMXcRKXJQEuYSZrXB35RfsQZZtaauxmtEnxr3zR2yNBXhTdmksUKGcgtPfXZAf6SBWwZ",
  "key39": "2cZU4MeciQYEYTW7is86HDRkXeqmUkhe4mAb9AyFa3pFiYpUjceTsnsQw2HB7vgfcQmBw37AYu92EmwF2aXDqGGv",
  "key40": "XD7vri6eodMVs9pSKCQdLoDsKE97XQMBdofxHR4xfFgpTTQFgNjSwQ4G8tG5gKn7aU4QUomK3V4qEB6ipoXmoth",
  "key41": "vHnCjYfJRoNkCYxtCandHuyrhbTEnXwa4ywkMHaHTz8MkEiTV3wChBzpVkxRpkfPYE9BR3qU1eSaCuMfeo7thgs",
  "key42": "34V665NzMn3C3oCrUckv4c9ytKLa7qPS5ggwS1wRCjL7Hr6z2Gg2J4CfHBH1Y5ikfJig5Bosukhc7ph9heqaFHNP",
  "key43": "2c2iKFEkp8NTXYtM5Lv8uooFbNTRgu91nor3jG1oBr4N8S6167NbdpGCaDZZQewcYPtPiX7PYBSU6CeaMXAd9X68",
  "key44": "2N8m5F4114um9PyaJ5R2f78WwK2GE9WeaJZENzeMB2VEJ3VmgtQM1x3bYjMVZE5spDyHeApxf9qrBfkUzhnPMpya",
  "key45": "2N16RTmTSr8iVxvvgG8zBzhrZe9kRjG7S9RecV1BMSAEeF7CkRouih3cDubPeaTnQoju6kZE1ePrRXBUt9xaSZ6y",
  "key46": "2ZesPifnkFBj6RiDj13cLqP9rt5CsNbYGUEw5TXerVvtTGJLndADJY8ykc3DtPrzbZZfnWCZrUw73zTHLgjNxHUW",
  "key47": "2bPNDBqBcKMCs7ZfC8Kmb71qMZTvxkbCLWGy4CyNPSakLgGhB9xDmgUuNsXiByVaqVHqy8c94nexhp6nrP1sfz9j"
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
