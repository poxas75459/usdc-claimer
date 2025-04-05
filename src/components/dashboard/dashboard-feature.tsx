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
    "r1TeCZ1uYqrL3dEsk1BEyubio6kBGxBk41wqsjy1EZbhu2RdKJ76EpzX8HHLuMnBGhu7yXCDuCCTLvRXRdcyVDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hp2BbufZxHdU6yykmSLmeXvUoGuyw5CenG3Mtt4L8mPh4cbnUb5JUHJaW9kYXCTHgg7gY72dJWd24UciWj3DEHw",
  "key1": "aCEy6M17aYpgcCpkuij6w1adE9rg3bpbZaaWXUwLuY7cZ91gsdsc3doot6bVrd9KPiethDzzzkGc8yUcpYh6L8N",
  "key2": "2z2nfC48Ve8nuEFazfUEybL4NqHGEVTuGadL7HpeECQdZ82cvr5tXPYENXzd9QVrhTUcZuFxXHms8HcmxtEFeoLL",
  "key3": "4cECEeeL2PUgcBKUq1bnrdspYFGBXNUcdo5AXdFjATRd4pgtuyJN3y4siy47ejAQwCoJNtUFEVDMAw19M41SpBay",
  "key4": "2TqohDRGdthXeAQKaRTT4YcvEjpu92mjXJ5ZLXzPjg5LJWVRC6C2yG8bxnW2GtFrkostr25NcQb4ARTT3dfdaXf",
  "key5": "5LhyFooa1uXP1VcCFPW7SidXf3UhqH7npmsnjzeezMxYcohwoV1ckmaYiGud9HyVpNxtXFJx5DSjo9sgyXzAmLuS",
  "key6": "337c3PQQcVTcXXcV67uAEQSELf5dxyqTEcC8pMRpTYw55JN4z1oZpt7X5rHybCjymVgUuGCkXh9scQj6v5t5BHhb",
  "key7": "3kobdNBHH2EsbkHPznoaWEVQnuEP442eE9A2ayPmLr1QpCG53JVRkRZnMtH3rodGZT2LT12dMX15969scXm2Ed3H",
  "key8": "4NdT7KpZa3XZBjEPx9w7T2zZhQNFzNRUFey58amS8pQXKxX8PUUQdRM8eoEhSAANrdcEfomTXwbuhK5ndSM3EjRg",
  "key9": "2x7rsGhrASvAmQLyPaoU18ErSwS3jwvFwmWwtHGJ9x2ePg32xS2ZTK1rtHhVPaynkbeNfvV2Xcb3Z9XQdtpLvPj5",
  "key10": "6LsMzMkppLYUTBPzjaxVLZRAzimSsGD2VUJd81SUs2jProRbWF8uHsXGFsUEKFxnep8TEcVB88CN4HGPdjByrcs",
  "key11": "5cZYLcX65myYqYAnPj6Wy56EsCXP4KZyoztE62Qw9gbAj9LYpQm8mQ4YLHmc7vAto2cjLcXfHXK7z53dmdqThxV2",
  "key12": "614pTxppPquwnQ5G9fWrVvwXUTzw5vPTn15n22JuAeEBNgognh3dXJMDGd39SXLLF6bV6Gn3D8eDsBMFH8S6bACk",
  "key13": "r2YJY3yxYFN7vdqfuLKNXXcjRzKsrArtchoHZPrz8nKxEWQ8q2fuGftWGEus5kzCBoKrvU1kyQ7moXsJ2eSE6aN",
  "key14": "a9xx6fk1xVrDx5NZZNP2dzsvh3kKQAWzxzEzzxBBdgntcYsgmRhLGTaNSgj5XwX3mvfa6mmAY5d9yiK2tFuPzaw",
  "key15": "2t3UhzeV9CCtQV9j665ibGaygV7Bc1GNMu4NvEUxzjPod8iAW4qSbydj56bwXuu8s3kCT6muK335MUi65Bwjzjf2",
  "key16": "3WBKA4WNkoTGnJM9fBVwiC4Vvw9CvPJrmeF8YuCkh5v6EZi6vcDy6aibW1dmDUxtMTkUrwsF889XH4Gunixxsx7D",
  "key17": "5yzKecUCsMwFWyr9cT1ZkdCVW7q3x61n3X9XoeiWk2x2S478CkReyzvaFjzA28vKtFup5yiYfEcHKp1fe8yReK1X",
  "key18": "AtTzHJyEjDrU15Zex115gkadUzJ51MHk8uVt3DPNpxE71o8hBzsKxT6xM8jyBukDCsYQZ3RnhVoCSNGv8WZ19Jg",
  "key19": "5Cm9MUkLZDZRwK2kh2kb29Pu97gM1EVRaw1pSwbdMFcm96JC7Nseoa6WwKX6MLWZEwkifW3Ans5XtETovJASciyu",
  "key20": "3hrC4rybRoRjqxqKMGW36NEq5A6y3hwoZ57Fr2TXZTYSaCwivfcB8C8nK6nyM2JcqwZBhKsxxSAcwpAjyCpF81mK",
  "key21": "2G8EPrQn6rLt3pBeezmFW3YkVJsJ147BjZjCvsrJGikaeFbXtPhcEEsCnGrCmqGYH6A35xph1YHDpzy3LkevW2qe",
  "key22": "59ivQpy2dhKfTR8v8VshkN8uicGYs9P4SxudW99efUQUwdP8cpE7FoRrkun5Y7AYQmVVMNcG1MCLngZNMgaZC8tu",
  "key23": "4343v2hcPHfYLNzczk1a7M7x3ehJG8r5wMZ4XA7W95gvC77MY6MFS77kcVwX6VeLHznC39i5nEe74xrLn7ZkHLW1",
  "key24": "2SQ8dKgo8ABuU8xouPVAF1kV6hGh7NZeB2ozKt2EYEZmf7kUBPcGkimWdpj3TkbjWRVvFHQ8HCXmbjzpyMG4GUi8",
  "key25": "2iFFgzNLRu3QHVcb3LUfcQUZTRUe8XhamdrGsj9oBkDe4gqmNDiKwkxG8kVb4o1rUiNMKPAV8awXpCuHgQHTrKWM",
  "key26": "2QYkE2PXzHkvY7xzvgiix5x6YT33esFm6hNXmvCSN473bchfWfnuqsWasB4Sss8JjpyyZon6KbpSWR2dqdynBAMD",
  "key27": "ETigcPrg6YSsHdpgFcJAh8o2aDBU48ZyR7Q4HEkT7zHDRYYfaaGfvQYYVez2XnWnLEkKeLLw7XzN3rgHf1hJpAG",
  "key28": "4TXS5RJ8Sec2p6PUxGZC9pkzBMonjMZzisnxuZhXepnPhJ1u6Aq5ujb7VYNWD5PkeBquinqFchA2zGRh8suAjwSZ",
  "key29": "ADLRS94wXhuDFSCNyNeQo4gZFiSH5xeeyPxhwUVmmFresvXNPXY73F921f31ZuteDgzZyssqD6GVJ6YmpwRLe7b",
  "key30": "3bLEwZ3ukX9jEfvyFKfVbWfpv25x3uj2AJF1FwJXWosYFwKvWCMtAFyvBhXrbs1ouTu7AHR6758NCnJ3zoTZvLiz",
  "key31": "5w3kkJZUv6qSDdzxzCqqfLNzqaSYE9MkhKYxs7YwseAqyubrNQLZ15uCeZv3F7QSRnvkAmsrycqr81DvDitSM898",
  "key32": "5cLCUYyQ9wEPfKSuVhMnxDvWG81gmw6zKpL9kak2rhthFSvWLGfy7oaC7nijSaeAC46DugiJM76gJhB6Y8S2W96n",
  "key33": "3yvwNeepgR18vQmdkgTBkwDMsGyVVf7oiFSiTTME2edPkioeaRJi32rojHxVBDDvU238K2fce86H5ggsmRSfjeKf",
  "key34": "2YeoEz6o52RXu7ghQjBgbHiDi6Fh4wBEMd6ZSECDfkktaXbvdgpDWTshBQuMwnUhGrKv5NjgsBqok8wEghZmKu8W",
  "key35": "4CBZGwrcn4QYkaTpBEvdR7TsJF2TcBrCzYyjSKhuQp9VcTiLWoZkE6WpHAu3PXv6h23S6sfQh3XJQAQ8xafbyb5s",
  "key36": "3KvX4heE9cfwmiAZ6Cgc7Kwkun9v97gw2bGnkwZFdNYCaSugQTyEa813fz4stXZuKyecTAUUJy6SXjnE7U1bKt7H",
  "key37": "SR1TqPJLjSzGeSwYiW9vFFiWQK9EoWhpreRYdn3RYbYUZ1qwBKZtYS1Ph5myf6kynTKgbEt3Nq6J3Q7samnobr6",
  "key38": "22HhvS5GnEQKueu8RgQQDza55QxduZja3niZPE9j2Mn285fdq6p63CN248WtsNFViwgqdDPAmMym1n9AUxNHsrR2",
  "key39": "4AE76XKxhuPpQ9HyxMWb8zq52raKfki6cLFVf8dKLNk9oBxBhdKMpW6TjrCoJyr5Ba9h8KenBhgEFJTjXajphkmY",
  "key40": "uM9J33dYZ2tYyv49vvVyQx6iuA6ognD9tC7nfQQR1BS2WAYviTjCfXCA4ZDqtyZqdPT3yQoK35n6Pghb5ht5MtW",
  "key41": "3v9HWcae6yybQj2xsarSbQeaBn3YraKDnPHyeZKdgEuS6teuJqurUqa7Kq7DAWYxfxVxeCt9UcT4AAL6d7bBSLGX",
  "key42": "2BdkDgvfkDvg4rs4xwVANDGLumamudK5fRJyTnyrapzBnJdFG3SS6WJxQScUxxpf7yzJgz27TJrrQRsFjUDgS6z4",
  "key43": "4hmnENmsJspyD8wm9Mmh2J7Yp8LqUTJZ7fhnpY4K1keaGRjcfyo3Wp4P64NWB9HUwUAA5mKAfN8BH8X3pAdpqAY6",
  "key44": "5sBANJsvngE55XmSwiAQiBGCDWwQaRATpQhAPJRBXNEfnUFqv8zLpAAd1mSHqZa4vmcRQYZ3thyxR3Z8vdpLxKJy",
  "key45": "2iZU7o7vnam8qPf3SXThN3xjWKwX2v5MJgrfuGNGdFq7XWd93NNd8H7eg1mnbYFV68N8CgzmyJSHQRr7mYiQrQUy",
  "key46": "5zf5gGFhkPXjDwyXiCUAdYx5Z3advXKUVsAN9xxxPKK8TTsAPReGooe5WB5niQduWPePYyA2b3CQ6QZwGZRYoyFS",
  "key47": "56Yr5g2URS4GwHJNwL7T47uJHqv7M6uknQwaUn2MJVZDChLpNKuBABhqoECApghsHFeHKaRiWENg437sdoM7cGtB",
  "key48": "5c6NhrAqkGDwhKiASZUw4q7kfc5AcmMDKi8GM6uM9jknKYLtjigyB6UBuyLC51bdfDf2MxeXxW82QEFDxcG85ZYM"
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
