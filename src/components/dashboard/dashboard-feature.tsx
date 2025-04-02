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
    "4myLsimn13JmS4ZmcPLQher6WNKoZhHpf5dDQQj9ze58svLMtkkxA545zFFdnVcbr8DV9yYt7nWFrnifMG8G87X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VD42oh3nK8TUhF2FxVBQePdfoXbDm1tobgRsCtvnh2seCExFNgbWEY2o3N8BChURuHkUxAEYq4ZN6fjJ7Yv9Y5N",
  "key1": "5TK5PX1z8kGmmuL1CzKP9NtVSx4BqaDrLizRoVnu3fXDn7hvxqQbYRqrJvZxN1XEcngcAdXghAUq8coiyLYgRETS",
  "key2": "2ejYoQP7vpyyoerbkr8YXFmozcRD9t7tbEDVSeQs56s94pWmqxg41mE8JxbSie53GnWYj4NNiXKboqV5pEp783ri",
  "key3": "29FkDJEQrhxhGK8Tb22WfGceHgHd2N3EPzWGCd5zjxgANLVHWaNghxtTzeDZwq8oQKtyZWP5iyBR5Z3GPth23nAq",
  "key4": "2gFNABhpnY2JfeBTwW6AFaRpBoiqtKjQvc4ERGyvFTFdbzJsM5xp4moptweLrgkKFDHsMqk8gzZeLJ78Ywc7zUnx",
  "key5": "537qjpasBFYjA5LGkfjxHQnFe12LFTZqpZNpepBUeHVK6cMTNHvDZM9Jxmu2C22hdJ1CUQDf5A1jBgWBeM4nK4CP",
  "key6": "48QD1Fz7A7YA6B8b2HfeYHJ3pF5Q8GABKBPWnYuKo8pbH38VvFxacyitdB1o2TtELd1auPtCZL1uiwcxdc3Uom2J",
  "key7": "5jhLabyroXaGRokTKXnNz54QLm2syQqqnDrZemDBCHG4yKkkXEeTbEDPCmkpyXBJrn5NqsvPuTtmTs1W1nFY7RTc",
  "key8": "cdA6qhczTLQxzfPSPMZZYNtXh9Q3DbNzdd9G9Uqj3eR6Z9YsHaAGzTy9Z6YGHGpSR7xAXXvoGkdSJSj8K7gJXoa",
  "key9": "4rhkUKVwZPXECGpjsyR2swCBud5nVKA3Ppxsr7ZR7XDomvBmbaXjs4QBf3iYTv8mNcyDRvg2bC7Xrq7bs8JUK16D",
  "key10": "4qBuS8hsuRVG1g2oXWJvaCbTNeELD48GoNGzrPs7vW2PdNLTfH2QNB12GxRv5YapfEziJzfw4dvm64tHBTDvajnu",
  "key11": "4p91VoqiDirMQbEUAsoESbzNPsuksbNKkrMvGoY9tUCqRDwq6Dojv72hAAi7XfGP73j7rQiWYKTos9wcRjnjVKsh",
  "key12": "64ZvaQ6to9qzcGzNTQBiULxEA7TU9PjfF9wgRDhjKEVbtpGdmuwYP7vo2ybDMaWbFzrqUygh5PBgJttTSstC2ncP",
  "key13": "JzFzmipK8CvmRAdvWE69sn47fE3V38hjRkU1bw4fYwTc9MhiDS6T7EnSud1U8BjZtYz9KZetMWhiGMNWh2s8Umz",
  "key14": "55bSzSTceTvPpPAy85SjmVqdve5JGLo8YazhPa8Tosyusn5MhTuBVVSVvHJNDk9ss5qajPJSawKwc2hK7NcYSJLD",
  "key15": "4uwphnZtRz9KUfFALJgoo13VTxCpCcPWcW4gAxaEjXJGn6m6fgA3HXKS2KhUJ6aUHa66P99wviC52fp6WCuZofdh",
  "key16": "5ESiicX249n3d5xLQDq3LUfxVNhJh6UnoyjAEgLsCWyyUatqDGsmUWm8xR8KBLE78p7E4bdrAnEcaxnKhMnaWXCa",
  "key17": "5XBATcCBRRFARbKsbwaf8p78eSvhnVHjCS6x5GMYWWKM3yx2PniPoJHJAr23RK1VnpfgBCQhGrfUo9PPRuzSNF7S",
  "key18": "2uz4G8M1iYXgLAAeJ545KYKyuqdFhmpcGCWHDxtDq9nipfdR4fHSaDaFQAN1ysxZLSrPsJ4EAX9HxfVoFgndHAMZ",
  "key19": "2kuqjKHbhofcw51Aomg3SpfBffZ79Q9Jy4TmZ774NcGxj1UNZzFHAAsKTQfW6g3CVUpwga6yxT5AGw727x4nFwJ2",
  "key20": "5GHzCcbuK2sT7xF61zUHK7hjjqVXgd9LEkz1C4whmYkKmC292VvhReicYB6rT5WnjEJujZmjSWR95GtabMHusdeM",
  "key21": "5YxF8HYRGinneEsmbk3L6ydhsZp5agpyiJWr2npbvf5y3Aiw9npxU36hjhzYb8LtTRPe1biV2HMUBwvHusa5oN6c",
  "key22": "5jqji2Y4g5FRVSpbwcP5MJn6iDn4na9RZU6uH5rp5wwTkFMdrguuP1FMvSiqQAJ1fmDrXdXVehuhczTmT92HcbFH",
  "key23": "4yKqCbfwCVoqEwThYwjpoUFCXW931Fog5U5ew66UHuQSbnJHsYzAmes8G8x7YWibevUvkBRGPYc7LZ6rAWjA87f1",
  "key24": "4fnYmdNkzhRePFaLyJtP4LwuqWzCiGtWppTSFrpEhkC4bcGHQTNM4CbqDKyvDMoSrMBUkHXmx2JBPQf6DywDALsZ",
  "key25": "3USKtJ3MFwJ899wkqHfbpzyFG8zg8hrzfzPTJLEfxHre97rf7jrr7Jtz1QpeHkxqKBFmJu63hH7JTHB8dyYqX2Uc",
  "key26": "kWRadLSMiJA6tfUm3vxQ8R4S723D9iHt8Lb9DFboCJVLvy76TJayJ9w5jiWPH4joTezeECzRttqewJh1mb3La97",
  "key27": "3NiMs5WCYqHJiZeFU9qyL78YCbSBrpW1wkqwFujvGHTzwvuFR5umFsLSB5SAobMLx14XDKpGEwS4bcX2amcd9pJU",
  "key28": "3UYcSbv3atKwqxo1iYhQnErrs8girpSFwxVY8gfEXBQtxKDNrh25AjA7nqHMN6LkfH4JBicj1tDUMMj4XQwXXXXL",
  "key29": "brpJBGXSFgSGHQefVpjAjnvGEKZEeQJskD96NfrkMHgRsuPG7gcd5VMXrhcUdt1LC6tTvYgWCKLYA8fZ4kMZNap",
  "key30": "aAkCGXY5K4DN2MpnepYmzDyLAUw9U1hqXEe9eS89NU2C8rPank1HUpRihTXjQAT9rmZBLsmeucTngGAawM4TUBk",
  "key31": "3FyPU3RGckDzwsDQ7vgtQ7nZAFwpd9stMPi6dMLtggzmQLVkLnN5VkA9MXJkEHMwBGuYwKjA5cvSPEMKbKTVBN54",
  "key32": "QPBUhyWLKc4a8DfhoHJjcfH2dW737MNTHKuwday5QuScbLY88kaQrjXvndaCkwFTTJtzUj3gFF5M8fGx4xaQoN7",
  "key33": "3kMVDyKHYy4RfzkQ19wQ7SpuboLHYkW1VXGuRAJYCiAiSCrBQj1jUiKDVDsGofD8WprEjtpyoLqffrnuQ9TnyEvK",
  "key34": "2gfYVAvPptNUGoWnE9TtbPncxbnreNcG3KPgabBH2y2ip4dmFzyohjGkWUVXG4P4iUHx4cEwLMEKVbKGLEEkt6wd",
  "key35": "41PQwyUysVcWuXQYvkgcP74pfgYv5ooiDtYzKNgSarDMFiKgxxkhHZa8D5ZHRPyG1JXhSnYvB8V7mFfym66kLQg7",
  "key36": "3cRsevhtaN5DdnysBctZvju32GGy53zcikH6tXUsH2BMVaANKrEiSziD5pxHyHCrkzE6WfYD6qhiLEfWaykht7jc",
  "key37": "2FBToRvyX3kUdZw2DRDQR36rmuVzJJTBYYoHW2gQ3Z21Uo7xvZH6FzSnzVhy6yc7qiQc4yDr43rJzGQZK1Ptwvi6",
  "key38": "5VGZSPjrm3ZuDVRzQd1DdF1Vz6fefaqVKLB3GJQjwdGuVMiB2qUuTmUzDypvxNHr4bQBkh1e3zUQZB9pFUxc27bz",
  "key39": "5pWyf117kceUTdi7VXXJenmeMCRAE62tgkczhYwd3SaGJwWdenM1ZoTaGtjGQJ2puykaeFUkGxGrf14Pbf47GwrH",
  "key40": "45ND83qGcQACfvGES8ZdLXh8j8L9yiLVmCZ1DQzAphRyV5xeWZ1s3SPs8dVzevB3P2Q5uLqMgv35mS4enezNBSjc",
  "key41": "3GG4uD5UpMRCx6pGq6g18pf6jJutMNrYXjL8p7ua1iSdBcm45bNCNAVtrTfTvYEdQHRAqWGGPisXA61kcq11D2dS",
  "key42": "5HVANwxKeLKYHc4DB8MMMCVa8N3XjmrFq8Y78KJr1Xj5nE3BFZPabcB7xNMLVR8tGfKWo2iX3nvfyKygNfT3Ng28"
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
