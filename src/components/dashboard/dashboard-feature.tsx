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
    "4Ki71fShyNHjDfmHdhVxr1i6VcEpa47hK46y2GXQQMEXuBBnLVxshHumtxzaUsmHZT75Xi2tQfRHruqEin8iWoyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfrbv8i2ueqRyehHVaVntSVtFLQbF6pLNwfBsg74Xv8PntGBJ7XLbuHfnMejjxU1fjgbRnQte8cjrEgFePPUfnU",
  "key1": "48hnDD7dHiyXNSuerjVtJXKmXFJcRosiFhSDs3avsjUCoRm2zw6Xu43YBsdTWriFC3nn7EMczDu3vjcqtHHt1N1y",
  "key2": "2GxQy2uKmFXwff2pV2FofAmtf2HCG8LjDKzPvamaLgxPefnJDvf5335kZAzQyijkjS9MyDXSzVybemKXhLNGKgse",
  "key3": "iGZHjRU4LV3isdcyg6NsfWsB4Z4uTrsaG3LHzahSicHW2Re29j2sFSwmHLouww25n5g7vweHcWgPKfCtBRj6AHv",
  "key4": "2f68DhtyPMavBruDZoxVpyoYjE15VqoyKzmahZTg52wB6zayPBwFUH1jjnk1mV1PzVWzQj2XYLwS8B7QN3wE6qJ8",
  "key5": "3ut7eRzPp1XPrDyTQhorFfMga2QRomuKw98GBa8ZKygFptw9ke7Km3CTEAtxEKACWJh2jzsnQrhhXmcgTLakVmhW",
  "key6": "5JaYaqoN7tom4ZFKmUrtSEFo64ndrkMKZSpGSgPaF8vwV29RNLxbxLa7xbrtB2qmxarPaF6VzZSBZLaFmEMXGV41",
  "key7": "db8zz1JA3paerCqgx5eBEcTSUP3vrbDNa1tNeLFnDA2emiwvGfhrhFvpRSR8EvUiobM3Hdb6hpXgkGo4NKyH5xj",
  "key8": "5shTavrAmGjGnC6CjMZCSiokvTMkMiGnUUQ2KDN27ra56eEnhsBFTYQBuJp8L78crA43Zg7svouuL72z8Mnj3NPR",
  "key9": "EMFBGiYQR9jKeL3R3FoiNdrqnbDoMdhTgPPxvJDA8eGPQD9fvAch4NNsWLm2f5dwYtuRyDJV4WNLvkWeevsdFN1",
  "key10": "4mj8to9rDzUjfdrGKgzRNRdGRGjihaZ9WbJeZ8ZPZ1DorZDivK3mGcWbj3TgJ3WVHnve6wtBFE2zMwpBAkK6bJQ7",
  "key11": "2uorshdgLnSqpB47SJdmQ6Rs2f1RsKSAyzPQLSikJkBG8szYFwxdDzKSEHewTC1CoTU18VkQ8SAvZm6X8iNQHgwu",
  "key12": "7uQ97wDSLH14nTLaVvfHUjXZn9QBcySji4iLRFScRgbMZjyHoERNEf8zkwEB3cpZVaFgdcK3pzaL3VVrVh1AtUX",
  "key13": "3YFuV4bWYVmZ5F7Rv7e7GxYi95DAHcaHfscJaywhVJ6caUi9t6biocVodZ5VmWF6jErVaQsfF3jDAxdACtKbHQpG",
  "key14": "41vd6jrwbNUmVqUhoeTQbzeqbUbPvgEatTB687qXjga19RR8BGsuzW2AAihp4VqSJGgZ26nh4nQzZbtm7Vc5zF1X",
  "key15": "44PUb4AHXgQri9ktvuEkAEN2GQPZHn24cZmbdJ7UUSRYq6MJPqqoeQwE5oAuJmHyHuhF5qnsDdRpZcMgNHR9wf37",
  "key16": "4iWfTQESTYF3rUaSgUjscTCjDnixxSQesAYyP6jT6a5N1zmx6WQfV7czEmEBxybn9Hre6yaNAHCTuNrfuVdeLuY4",
  "key17": "5MvnrrMKMeM3G2eFQRSvtSdeaQ7bo46cELzAr1UboQytSuQrVwh5qKH2rPdUqzbZLtyizeDtjMgUtkcUKFkBEALk",
  "key18": "5icNzZVuGBpxCYhFcuNphEn6XyLyUtCksKtsYQ3LucCtPcY3PoEPBVtNE4KguvW8EQyLuEgg7Y4LQDLa2Ba5r33U",
  "key19": "4pEvwQUL2rDsZvcCNBM3h6MQkNGsdFCHXFnJZU6irRKLn48yhVzSGg6L3mTvRpqeXextDGs6ZmXyoqkYZq4LGJYK",
  "key20": "3BU7vpPxxPoRcYEk6j9bxX4ubuyDdXssQ3n2uiVuZxPSgJpGy27KycxNHWGkvrXYreBzCeq4fM3AL3d5nVBAYRCr",
  "key21": "61329vuENCSqZgYMv2vG9FVPxqMRXnJjNCZR4erXPiH71NFzZc5S93zsZwtPiXKLRF3zedkoUWLSJW6FN4FmirDR",
  "key22": "RZgUuigWrMU6qGAErQ4PfUGAQ8AbdDEu23q9t2ar6NxAhxFWT13ZaU9huuRYwJm9kxjWyBxGWqVbWjnUunYn4Ka",
  "key23": "5bDtps1hNyNdyysrMMZRx9aJbfa6c2yTk2De4oYku8jbPKhfZ3dFFLrZFfiNq5HdrLndvPH7Lvsf4LMCbZo5Zmey",
  "key24": "4PmPRrnmJWd4J2FzQwWKw2jEvHGdYst34BwrSe2HA8G2XBgspyjmCuhEDoK3iojuH88ZzsHTzXKWoK8wEFoEGoQm",
  "key25": "3zdcc2cPFcjKcnLeVLKRd4YCc4EPtQWSvXRnWinVhd6N8HSXveN3Yr5cpv5HA4REhNypReA4U6ec2QPeQpTAGXfm",
  "key26": "5WDozB2ZBPpFN9k2ZAk9JYPAoK5nb7z4oi9zzMeEP5p4s7bvftJy33ziebUKXVy2QSUaiXkHeBGHxux3yrmDXFpj",
  "key27": "488kjXYXMdtt2cmVU6rVXr1HJ2ZcHZw6zqZ4zbsGVdpkR6vwuSmA5HhxPwAFEMoZRBmxUqyukrLMyPpH7a1aW4qj",
  "key28": "NRSqGQFbU9bYb7dY524fMFwWLzwWXpgCsLuzur5ApefFtvFznK3Ch7jBbpbDTinaqnkygnPaonqpJSG33KEwnT1",
  "key29": "3fjzTa1ggkTC4aJPjCKd5PoBHSFTt4A73QrU9byw65tKfAE9uMgS4UDwTPyE5V8bnTdkKFS81AJ21UNC66isH6TD",
  "key30": "3nmwVfE8V7SjDry7uHSYPNhScn9u5HTu9vHBGoM6LBtcbHNy9anDP2PD65bJ6Wwhu4ypauovBohwhHv4zDYoUt7",
  "key31": "JHZrmvwgToYJVnht3KZPk1AZ1wq7KCcSn89UunctvSSCHiSKfCbpnfT5kXHrgu8p484B1oTjMFsSx26qJFKnoHT",
  "key32": "wxeEgzzUi1peXW67Q2uuaHfuzNj4r3qYVyDkG8oDsR8s1ae6PQ2Ck8V9QUY1wfJugi3FWQuUgvBa8uYmiGmePX4",
  "key33": "2CthCsbKoxNjudEmyMBog3pzY7gg4HqsirHGV9nWCKjRxYPBBUtYMe6dMu8mPyePgq2dGkPcK4ywy7SBVa86XCKR",
  "key34": "3JtaJ2ALm8k966UogfjZddcTzmdfiWMDHWYA6Q1jy5j2YrcD7ioASpG1vpQ87txSpBtTossacasGPyknmYFUxV9q",
  "key35": "3iyrNvMQTXpevjKcuyYAgqKvJh7X4LuDyMUhH8KT6JvWqfNgZxZa5ExVjDnwcNXjV4ieAcpAL7hdkRMJ8s8wTtzT",
  "key36": "2cwJzm2XWnvQQj7TozYCzGwuYNSJS1fHpDaTVz6i9Nfsbdow4RekXpZiMjXtdKQyicZYzXRmkxCWe3wi1w4ULUKD",
  "key37": "3tLn6Gd7HmMjzL1874C7XKkaX29HoSR5BUnFfLLBfHp8gQSD2fT96s79eTT1E7q7R2EeaZqi3TRSYvkUXbYsNDkg",
  "key38": "3dgRxtFq7mRxmUJLMc2gDQsZGrsgaoJn5pcXL5ZepTqVmMQukopTczg1Bdh1i6hQq83yPX4UUVkJHwuNMZrgtiJy",
  "key39": "4tHzEeoxaekx5jcVC8MzYfjEJYmje7vrfPonuEkBxLpiDaHebTyywFS9xamMHtTUhYf7e4HDC7UaxTTtZsf4Sd5n",
  "key40": "5Pou7zkaBbNj4tBK3wTBqhsYm1Yk1Utx1NtEfgfiZBHtyrxynW6XXrX6hNJNLT4H5e7HjvsGrzkVU5QRE9nP1pqz",
  "key41": "5WVnWZPCJqXvx2owE3Rc4uQ2958mavhZ7emG1d7iZajdGkzELdhfMc9W7wTJFS5yY8ysNwWGNodsHc8f5Q3yFaWc",
  "key42": "2hWLQJEKaG1FpZ1wq68y2KiSxm3JUrb9NVti1Hg7kct7pMx8XXpUeCM4Mb9Wn4YNv3mf6uHGC4pzRJyv7NTadDGJ",
  "key43": "VQJ2rTrboNQH3Wc1Z4uSamgfEdDpw6nYtFVed9AjotghqmXxukgi5ZmNP3WFC8JPg6uh4USr8sbWcKAtmshZkjg",
  "key44": "2S3uKtwd8NDBBiNe7S2SujUvMDEa2eKCQcAgcdrREnguSUZr1F4uxomd2r1cinWr9DRDKvbArDAVrWzc85y1oJqr"
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
