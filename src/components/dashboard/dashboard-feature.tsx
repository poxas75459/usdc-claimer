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
    "2WyeM64TD4gU83GvNVQu6XCRL6EUj1tDuKFAYzW4iecngQQ2RHjHvdHdKUs6dYGeDYFpJFQJxv1PkTKi6YPThV3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXJzeRtE65XLvax9LoNcEBBt23JRnFMBZ4qzoqQE3aYoRcrsFj8xt2Fdn4VA6N4udskQNKAMwqG9g1CiMjy2hEf",
  "key1": "4qDrBxKcvWFUgrJguGgDMLeGoUExyWh2LFnYF7JyEYSsQAAKbMx8eD7uhkbbTF9kzxYm4cH7faRn5tTCbxB53HbM",
  "key2": "WmY9ZN5N1ZRNQ5mrWc7Fz6Zyz2h6BbkA77wYrCjNeinCCav76ttPa2WDoixJ9WC5qtyuFVs4eH4gy9CVgRH6wj9",
  "key3": "5YV9xkWobMYc9nqXnATbT7oRSFCZm922gCvytcjbeWocAUcgTmEz4KJgM6Sqys32TQ12cJwV9Tuwbq2yKt8u7hEG",
  "key4": "2LF2JbzjkiPyLkaMSCKszHwbCXQyJqfXrXvXBnRQVCL4GdyhiYpw6nGsX3g3gyhdcTeneZxAD8WyMaxyKc16D9mt",
  "key5": "4GFsVYWqYRkzpEZj4BxeoSiEzqdEUTFawCxTY28zSQcqjTvs5vPBXA6tUugSPFRRT2SbayFiG65EoNo2oW8rXCQm",
  "key6": "4y2iJWNXGTXRmVHV4Lq6PH2FNEchhws4Gqa3Rv3Hreonh6wX77JZRHAdQiKM54EZqoGfGxcwJeEe6iDmTjxAK7hW",
  "key7": "472TrRxCWx9Qvvyt4jKkEoji1XGW2GuJBTCm4YzcfgXSvmuADegW3SH4fLaJJZeNgRhJdE9pZJKsS6YyJyXaBvVo",
  "key8": "65oEKsBygYmfwqTk1xMv1K4zkRJht8fTewaqUEDrtgPSVb23W9jWyouG25nX1tz63wxKA1fDhwi8gWTxZUE1QnLU",
  "key9": "2Zyzrp8bhNnh8quEcJDKKV5rLNRkBxwER78FvSEzuQybr6mAVHKhyDdfEQBfaJqgjy13E3AY3Bccc6Y3FsK8Y7NS",
  "key10": "TtRYRZQTjpv9tKyXqrE9YbAW8fwS1Yf6gMaq4KRJjyZLgoJCMz58tTxHpXfbPsEkrey4zACPnNuBvufJyE1iDFb",
  "key11": "Fkh6u9eCV1kmaoCN8vsFSSqFHovHc9eWSje6DzEaP4wxR7XL6gpW4C7bdkLRgkkPZhZHpXHLip4eMxTVJxPJmyc",
  "key12": "51e4QvPvgsDW6g5ykta681N6UqBAFfqEMPYLThMqknCu1zBWosEsx8xjvdixnT4CCNT8tZfJSBWf5ujKDEmjLsnK",
  "key13": "2uTifa3uGEfSaZXF6NcnYp1K8A3PgTMG6Zz2swnPv4tA9ck5pRDVuobYc9Cv5VF29GiM4i2wHCuxjamnvHobXftV",
  "key14": "2suyfTDfaQZsTb4dpV5hPQQJTPwmR4fk4t8cHhqGpDYaeDVLPuj41RiDnnbYu3PiS2AREU79k5fxqBU4pthXVis6",
  "key15": "mXsaZz3dfbTRWk8R33mV5VZTSDc51fJwDpzNSGyDxpGo95UbtWfzCGR8EZWgbDE3staJK1DPuQqE3KeVZBfdmVA",
  "key16": "63Hb7LqWEaz5vfkzX1MtV4wqSQiQsGmPuPnryJ7nEF9kU2wgSZCkFST3sY4LffFUZgmv9RbdmrMbZ7zRwKo5nWPj",
  "key17": "4uJF9c2ZRLv9jfFZ76nH99iDXsLhfTzBFdiSATK25pCYBSf3BJnZYAVsekbsGsJHgr1ZocfNC3xFsHDbLU2nUL3g",
  "key18": "4fEseiiRVAYNMpHXQeMqUc5F4QKUzxiaWJXcvrgHuQC5gCN7awM4UNz1wSy2h7CFLGumvGsTM79eBqywQmCCvBMT",
  "key19": "2RuLSPnhgiehoA5Z8VHHH6nSpHuLQd5QFzd3VDfnxCNE4au7W1CWWfax7j8viHP1cGhqaV9j6RiE8Q4T8yPneiDo",
  "key20": "2hubiN4YT3MogwJsQhwyghaFzhf8AUQqoGkzQQhgx5K6NDQrvJ6H9fbMTLGuxm6sWY9UDR4LS13VpbUCmMTRKoVo",
  "key21": "4cG9zhcgP5deCyVntnb6owNiWrZM7Ti5HdWb3kXqLcfVox9kfSJx5CEcVY64kfaYJgrFHXQ3LVsE5N7jtzVhBDCU",
  "key22": "4DmAw8yTDQmWubT3T4EhQCqGciBXEvvPDmgxqNY2WzDn6ShzJ6xbXmGBMhV6Y69gvavWCwMGf5UiS98N1k4Ho9PB",
  "key23": "2V1pnRnLH6pfF4LMycS8fHEi6subKYxNqQz8KZw7UD2B8FQchaL2mkDmipDPTbgcoXNyyLburCK3SZ8AYWXDQDHh",
  "key24": "2t9GzZNmXBCQ2r8LfAsM1yXWnUzQUNuBpVdDx8sU5f3HY99aQcUoV6Q93y2YqD9NiwgihE8onUFjwcwaajWpKp5F",
  "key25": "2tVEcngYALwyeS1UoaxovgUBjcb2gM57yQMnZZYDCNqw83cJLSTBarbQ33cTFgCVo8Nq7uWdDy33jonc4NVhBj8V",
  "key26": "2fZy26rMp7NUxspBfboxtLPUg1XaNGojWFncqCyJ7HWjmpQDZ6HBPuy8BxFXjHVhcFPUZigy5bPGckHYBQ39e8io",
  "key27": "4MoDKTieuyCgALod76HypppZgrESp63BMBPxGRJHQGUDSXMhuokz1foiDAdw21qZ1hVDyT2BjpnJ8jmukrFTYjkh",
  "key28": "3nfhPRRK14wk5jbcPnoWwtFTbyn6TFTqr14kXdogxeLyYDrMce87m9sYsSTk6U94ttYGYM3Z3gaS3mAD1MHybk25",
  "key29": "4kZB6zhxaU2D6yReLrSFpsuYCwTXhzjsgSTwraXT2qHMjpzhL6FnKUtPkT4GN9STcyYMYJuMvCiiiyqMd7DWkWVR",
  "key30": "2ePfvcJX8KZV6qAeX9WGtc4gdNVnkChndhkoqintDVD47WHK64QUSyBg75VmvEPFr8h1kuT8vdKEBfVUDRZhXQsq",
  "key31": "2LDgNkzyNJY8cQmsTKcSMy569gzGMhM3TrQzS3yG18AWFq6dwzVMKSU12rJucJs3rKYRqaBBQTrmZ6ADS1LETe4S",
  "key32": "CKSZxdYvQWZvELcAoX89e98ruDXBjT5pvSgPinytxHrTh4amXHPjuquoZXP1MBzQPH5ZYPYG43gCDG9rSgQtusf",
  "key33": "5hQzJXgp1c2d5zLXtjHQcGbKNFTo5XFosGwQ8uyVi17bvwFvNcm84Z8PasE81Nhhb6EHdspoQ5nLkFh1HoHpFKYn",
  "key34": "5MY4sWZNaL4P8E6gE2yn66k4stYbUF6m79APjnEymhpCwv8uiDEzdC9tqBePcmmaaVe1T8d7qfJmjDfLXM5br6Sq",
  "key35": "3Gu4ghYytLgvGiQo93BvBbEAbGJiNwJaPmgu51m8XtCr1CViPdU9bpbj29HFuj1YwYsyewDK582AKJCEGLt3ob6Y",
  "key36": "455sR72MAUjRTcfbkTrEhTno25NCjCyqBJEXMMBbekzk1ukW3R2K2VCHo1Y9NU2VWvdWksmm31Lro3JqBxBdebkk",
  "key37": "3jJvej2s3vAtmu5pDAZtw1EaVYYouMm1vtXYi7cR625qd1sUCqN7wScjbLiacAnysohGWk8wKszVaMPEptZ8fWLH",
  "key38": "2VhYefEgxPPphCNajdNiuuadpACbukvV3CJgjP3RFwEZAUB59NZZF2GLQFtj4uHVSDs2tDjNeZdb5bMezYftdaLx",
  "key39": "44xpHQf5QtFQTEMzmxWXGcMn6bo7iZ4H7AZp9ABJmeQ5B7NYvYPiY8trG64yRwF8HVjMuytzqtYcPpYMyEf1Yhyb",
  "key40": "2wwno52s19mfKqcc7ESZcGReH4QK1cjvVt5ZWTbn1UZxzB9cXKyb2v6Mr9AYHWsEkm6XwujAJZXvqBygX5JY24P9",
  "key41": "2sKqMVYWTuiAKGf8uUqv3MXLRgb2LmVZS8ZqEFsSEQBxTKFsdWAMx5oUhGw5Y5et4DXSQ736SfFPJD3iJ7zMQdMT"
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
