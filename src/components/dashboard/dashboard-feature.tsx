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
    "5vFUV1KvU12zapy7vLFqGYWXyq9232LXZuRBgLkWJKBvK7WDfSRMqhWRMKYoFJisEiAcJCvFeQpZjAeX51FfLWjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsXD9BZ5pRyYHWddcTFRLwvkpnMhs58JsFxLMVHkqbX82LKUxGLiRJEcVuReDEye99XxC2vnrLqjmJw5WHn3wKN",
  "key1": "3GtQkCCkquGdQot65um7jkKwq861vbJxqm35hpeJHTPBYKuznaRVWxvMUSffxNXS7WUpLSzXFvQ1UiAJATs449iL",
  "key2": "4hWJZo6R2hVEthXoFZLFPiU6B9vBsX5fxeUxTpvL7p4gUg99BmnwqUmW4Q5fjhi8RNBYwcYxZvXRtEePk8Kj7Kkz",
  "key3": "4S3jiEbh8nQSsoF2UZ5jzdxM4nA8Fox1j4rEtVLtzpEoHvTAkHQBL4ZbYSVAf1Nbc8tGFQyrEb4V67pyiFTn35nn",
  "key4": "zY7ubwLpk3NTPhaH4pj4FqYedqE8qsL2nt5rTnmJLLHrU7gXXiNemxKfYX7xoYENwbs57P695aR6KWsonhQr9eX",
  "key5": "5SotqLEx8S8KNc9YQtnQzBwKZ9rDygpKWfShMJHUmykCT7YnVgzjRqkh3N29BaytqLRgYePLgXvjqC91SxhpNKLS",
  "key6": "oBVvCWEzRL9upMDsZETFKCgPUuTAfwngBFBLtwk6xjixvhLEJ8HYeJjsiyjMS3QaEjecZsshPnbEJ949CY9Dp2v",
  "key7": "64KYej8W8BJ2KX1PGsdT1hAmBVF8UsH3Umo3NJJKZ2XHy6QSc95XGqpjU1Gw5NrSmvdA8q7P8xv1vACU8eJrhFsa",
  "key8": "SWmYDsFQmUmPp6niE42Q31uPxgKS4UY52jAQ3vgkeaFctHgEt6FAGfxeddFetswEWkxyJyrHnojde3Z5boRUU3Q",
  "key9": "2LSRWBh8qkDX3mBiGAy1ztiHBfbVzgw3cMxVjy1hgByvK1ek5KusoH1X4kYYfRAKq8RqgNxx4XDH1Tc9QgGFiz87",
  "key10": "MT5U94qArYRPMRdgmccfTFY7cVKMtdjiutsPDH6uCLx86yFyyir6qRjQTzGUZnd6U5N6Q5jP96FqGduSepjaV6R",
  "key11": "59dMeG3CKuXjqgUFnwei6J2VE5L2y737AceSavosNknrWiXVHeyyUxtQd3aVhht1B97pibmfsKXYkbCbGvvo2BeK",
  "key12": "2zJfBPtBndazQYJCCrAFDxWV5psELqnzV1RF9p25mSvPMZaZh5Du1WJetMN8eDpRnd2yGFEKs3UCm4YRdTWozf8p",
  "key13": "3fXnRHo2JhjBZmNYt2XSmEVKFnWdVYMhtBPnMRURwTgePPT1Bcdq5b3yV2oZ9a4kSshJDYYrP9ieQHJL2dKEYVFR",
  "key14": "3twiudJLk3dApFJ8JN1dA1N1D2D3nU2Wxi8Vjiu1dxWC85iUBmm75MiggaKcSWmZWHrQnLNHM28RGgiKJ8gfh8f2",
  "key15": "5o9o1MRGZbhxDZsUNJCmmekzf4shdSeYvVqCcagD3iAiA1T8QjE6FFcxPXjH2cKiSakAAHgRhWKvPFS2Xbp6eGGT",
  "key16": "3uTevMBkVSqEKkn9AHatxUadBLJ8RaMwvFLhSFQTVPcyNJn2EACU6PVJKmx5qME8xV6mrpA7LGuU8Gd8MRQhWbbK",
  "key17": "65yTEt9iQS9Zv7Udugny6TwUnG7M1AH38YaxURD6gGitXe6RoZ3vCSkbmU12g3eGxuNDGFpBjKoRQwxgZYSFN32E",
  "key18": "3oMTCGBqrcvSeKidtdR4oV9MwBvtwmpuCJ6LjTqpi4ESFubYdWGtuSf3yBeZyckGvLR1BGqRFkB4sSpFF1HjDK41",
  "key19": "4QTLCZJaLfpwnmcz6HeuCMS7rycakrybSTnEeVqUcqLwZMosuYY7sqig9BrQNKZDygeH8paaXsif2dCoQ88hxcc",
  "key20": "5Zma8rhx2QJVQhfnKiKPujodqjoS8qBUNjxS74re6spUmBHwWaUSVTvE9BKd59X7qaLNrQ4qUSD2H1UbCkQkL16d",
  "key21": "mUWT6Rxmv3VgS9V6wvtWtgR31yroQgYawjXifnddvYjafQaLCeov2NmZZ6eY4oTWKYEGL3vBsvKmK6E2WeSsYUo",
  "key22": "5MApnJ8VZK7pkxKXjHjVqtRTVzViXUTwJ5fhoRU1kdJXLJAwZmhyQ7sJ1ERjUNcaiodDzEsZZxos7t652FCiv21p",
  "key23": "5Vdwb51JZ8d8b8QvEBnEGBasrSpxrAQnV3ZbWdjBV3Fn85uUyi4TGzgbi18GMqxqSqFhiE53k8LopnXnaA4rr8Jr",
  "key24": "5e45uknqA45DPJG1xhuUvPTyiJpzmZeFcYjJBpLPkcFfNH9EJvqGxz6uGSWWfhxAow2uNJ5QCkTMHfBMquKNTnD3",
  "key25": "4MkKguZqU6tx9rSrDLpnRRbMYNni5WuAp4XLTWwuYAC8fpmP55fDwYsHNpZTBzGaXxjSxqFXf9pFFJXV7ooHYuX1",
  "key26": "3uqakRq676UKELzxUVpSsJoKHzN4qFjQvvVMxKeTmuW8jpUTym4An8NEmcCai6eVbmumzy2PE1fJEuxL6FdEa7FP",
  "key27": "o1WUFsS3enC5t4vo2RmA2jUPe2bQVA1Xmq2ZeMVgZFY1qjrBPbM6DdJhmxzuqD4NkywfqmUfomR1YVWRXkcsK4d",
  "key28": "2hJEqLnutd3UKMwMT1u648KRE4xbXYumdMdcLD2kKVjzS9fotZZ62Q2SiXh42hdkmGK72LKqzR5ZV9ZGwTErZDsH",
  "key29": "F4Lbiz759ijTZeu2Kg79renaDBrZAVsjf2p1QMKkzJVHDg9urtkMukiopfSzYj9VXKYnfdWaHoPJCceMKB8ufbT",
  "key30": "3NXSkfgi1hupKeTSTRowtffTUXi5eJ1gpR1t6WokACGQR9wUjYLXoB4Ay6ed6oxQoA2amMGWyoagcXhAc345BhB3",
  "key31": "5W3s7abbaGaKCDCwCFKk1rJcArVBVp4UTEzJ1s6bDkV3RTvZDYvsLeD3mTdCPjecmPV3PCVfgG3soVLdizkGxMac",
  "key32": "2KaqmNS91BbCiZnzniJsjwRY7hdHGmHwQa85PGwgrUz9UP29h3cW67gezD8F2Bx9uCbWeRNapoxZxFTreV3mm3mi",
  "key33": "3vuv2mtrBv7aCELerpZG31f5dL9KpWFtxpCMaAy2Dorbn63dALEy2rK4PXarXAn3Ymc4FhyTqmQJnPDPgsWoXKr9",
  "key34": "5AvQrBgya8LmJzN43p61XgJZWyEfzcCRFGgsAUWngLra2ofPV5zph8XdnLtd7VkVv8k1X8wCDKZBaKPNs8diHxQ7",
  "key35": "5MLdMTwsVjgaRxVgkyu7AWYABaFskFxXoVEPQ2oCqHwSxEG6zJ5bgvSqhbZR55iL2d4jJc2JE6dJu3svmgnTjSWJ",
  "key36": "wwXrcTHn5vPs3ewdFpBPC9LSXhDYnUEB3U1Wpz94V5y6mf9jVEzpUoUdjWDnsqg2t3mwjbE3jYoLxUXnckWsRd5",
  "key37": "2L4BbLacnd849fqWQNYXGu6BBmZmePGiWeBPqwda5NV1jYi8KgZv5EgxrJzSupjajVw8gWFocKdgkJRks4CbqanX",
  "key38": "5vW4xKNavz1XuNVJbu7kpEDX6MTGUzhFZpNpoTbHgtKpRmigr1KPFGBYte9Jwwpq6s3wvLRMHHcNqHq2suYiasS3",
  "key39": "5K6M1w3yn8HPYwcv2BiHCpfy3wFZL6nauTh3xYFfXd2rm82KDWgaPsSnJBbmLGVCgTt8hyfJTYuR4TeZivN9X9qH"
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
