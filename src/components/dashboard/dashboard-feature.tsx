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
    "3cKiBGmY3cxSUxC8WuYhNWrFhUWo8fJaBn3tf4PKWJsuD1Mw96QeB2kUWyX98bA5FseHF2LgGTrJpf7CuZafhqCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRQbLqPUdbx2EMe3ZpZoJWxXoGshtQsf3Ysi5wTutoTDZ3hW1KXzxMd3pzHxLQd9Azr6QRqfN712eoCMWyGLeMz",
  "key1": "5BDDEzGXD7t6gM8yJiJzaeuh6Lb2SZqHiLXrNLid2rD274ZUwMRLsNZWVqMGMir69TWioXi4kRZXYgjiPVMfDyka",
  "key2": "3pWQfJXtsChEV2bgTvW9CJJEH9cjRXiLRhaJ7fy79TPcHaS5dFX8sEmB8nJzxiaZbYBBS9E6VGK4MFruySoxcetk",
  "key3": "58oeEVZqwkFPFHTaQoK4Q4D3Ks1SthqAayqXZ68c4jPTqtVHtoFSyiZGhLw9kq4fhQZsvNkK1NRXBv3MKkTKJB7R",
  "key4": "fuEkB2zZarD7ugUBU8p8cPTfnekhhsR6Rkpx1ux5ondjmXr3JibjBdfTNhXLFpuJc4itgFPWcPMgA5m1zVS2PHU",
  "key5": "3jBrUkiUvUxmZoyDk6RFetnu2yo6rgdxs9BcaX3ZpPebmdvcLZLc3jWGY4hib2uCYcSnYU7Yf6ZhJZUhjPvPXyWF",
  "key6": "3SHW9Af3YAVepCBrBzT6B8AcxFujXmVhk9PMS13s9sFXimfMqqGuR5YFABUz64BkzYkqda2USFZohvDWfWPcDhBt",
  "key7": "5UATj3qwFN7RT3HMEZutJYdaEdBwLXutTamnYNvZ7SEXQ5AvavyaMoqDdwTAVKQL2VMwaHLuMv8BShkofqk7XXph",
  "key8": "TAsJ1Bim8yDiyYXYa8jgXa8sT65vgQdBDoZLujNh2U8h42JxgedqF5PfmDYD3TXZFc7YvqNMoJmEbXUMMWbUK54",
  "key9": "2fhdjvC5FTwkwRne8up2Ev6AYqJqBsbuEjZFzQqAqEVMu1ZzA6SDGee4TEYEqDU3sf4famfHzFUTW284LGdS57D7",
  "key10": "tWQgZW5xxcxH6BWQ6GVdPmxrRSGHqzroK21fHR5C4fRFCEySzH4s7BRgcbpEXxjkzjDar1CGjchkJXZ3H2Kn7td",
  "key11": "4gW8wvoQAG8nTYMznA4t7sWkdvrpqcQedoUbu6Q49FtzSJEBgREFwzVKS6v6k2hMAEz2AuYYey2kfLWRvFoLbboz",
  "key12": "5TUoUuWrJPCBgs8BCYNYFjbyiDQ7Jdh5XSYgxmhgMye4DBBjK75dbrL3YA5zpzNHwmhnbq2SsQB8E8pskPsxUxjw",
  "key13": "5Hv1QVcQ9MireiCbH4jS4HVVSzUmySs6LNPU9c5SDoKrACC1g9zBtD44YS4PMTuXimPw5u2wKYXnhztEx3RUCbFW",
  "key14": "2KaVR4K2dyfWMGr2Pj2MM3ZKd8oTM77xeY1RaqnidwEoZsFG2bDYr5dr2puUN6QSn1vLkaT61knaiXhbLd1tsc2F",
  "key15": "3PAj8NNiYg4U1Ua9NWrqFrwV3JzkppXbUGzogFcow8QvjpCMnqaQAvMBWzqpj8hymYnYBZGrmyx3dAqG26uG7FNz",
  "key16": "2pXexgBLgRVrBTZvwE6gL7jonUWs1rRrrcpwJL3WDWQ8Xt2doyaQw19CU7sEcbZCmQeVw2yidRJBkPSWwVU9h5Zt",
  "key17": "2ZJisWqJyaLAfVKhNNSdrgrxK84TEWsAf6VG8vLCRLze8QWfE8ds37WTEKGi96zhXRbk5XpFt3YqG29YRdk7fb5w",
  "key18": "pBLQaSkHn4F4PqjEWZwXsHa5wE5cGxyDTHtcCa62iggPJcb3M7g1FcGYQFbw6UepqiaNmTUKRu74WqcVinqNWc6",
  "key19": "5EUaUadMp5fDvU1hQecyFUCixJFfNPLi49HXL1y2MxzQ9rU8JmJsVHJ3veYhELwPLKQhq4k1sFCPhTJivm1TX1yV",
  "key20": "3ud7AN4L2LyUdR4aLrQi45WLy5vxCFbxjbCVLmaiJbooyPcKPzL56dNYsx1AfP3zFfJqFJnk9dLWpjYo3kyiXKdR",
  "key21": "Fjx9GacaSuxgByVwsuXwwSPve6EdLkkCiiK7y7XpqGSrzUEBivBqnX2gLTJzwrChPMwRqQMvgpeGbe5kpmhgGGG",
  "key22": "3WMZMBeWgh51XvJ3UtNegd7brnN55uCx3LXatBUp6og7RKXrVvtUSFbuds37H622qXEviJY4td7LPkYQgun7J5vD",
  "key23": "5M5DWjggNNJwDFfzkvH2mtW6r7193UMDzcb2VhaCLtsB3zJbEZEWVcdbcv6Myy4dJrPVnf8GbQqtpfHx1BHiSeox",
  "key24": "5gXWez3rEKRo2cymw2xfU2W8EFeQLqceG8nbh4gMeWqcCnpECnKCRKMjMtuB46oKuuwfRK8i7KGckCxfugftSZZu",
  "key25": "4aaX6Ka8tEgS8ZbXqXwhHWkLoX9atk1QshFy25sV85eXpC8jB5HRNx5UTfKsK5z8N2ncK5LTB3bB4YuG7bqxEDip",
  "key26": "XKyQrCsmyi72eSx7GoGwWfgDyVvJFMBcvs9u5CjfUf9DdWGG9yXmhZ7YVQnq1v9NoiH9HFxZkXKN3G3M68aaXt3",
  "key27": "24Pw7pYxHqSHsZHKUSwEyU6n5PQotHiRrHidZbE3U2bXMGR7RR62U6z5vjMXUrZ4Py6xcVazxQUidZJeqiy6eDpJ",
  "key28": "2oWUKDY6ScZjnqDQDEYuhuKFzVLotni2Yv6jCj5Pn5NLzhv6v4zmSPfZEeCmA5y4MMUFCFAFuDfBvdiWpqgURnZw",
  "key29": "3PGZTnTPPeGVR6UwXqGtQR5JwYx4kWQVhf6cHVZkUnDPLmFAu17XgQdDEzw2ceKcfZmaxR6Zzrgrvzp47t7SVEy4",
  "key30": "yjFYsw9aY8RVP1JWkYJEZMdsWFsjM7zsD8uQtjjRUkhigm2ScskRiad6QryMoh2zz2UBb1gXYWUdA6PcWs6ev1D",
  "key31": "4Ys8ijgAUVrcoPPKNbQrxCGxWTnxaMzgK8VWfGrY9372iuRKYCnRFSudXy8PtmrMuK5yNuzSVm9g8qZptS1sJv1R",
  "key32": "3zkjAST4mytXsR1Swc3fYsxvWiCuwbah8Bfzhqeygb7JfFe1EuxQd2f76nw8JdnQ37jy86tEYX3ubSV7F4EsUpc9",
  "key33": "3EiHkvTDfFSVLMA1y3NJt1FRB7g1m9i6onzW648RkeS1HxxTEVhD3kVRSKv4sbbuHCa3R9tD6vAhdaiFMRNuDB8M",
  "key34": "5xmPYWTsrVFchybutTsoUZ9S3ySxpZwMu1t3h1U4gVX2pyNUmey1eaVfcPznnBK65xZj28rUt1gtUr3KGgV16sQG",
  "key35": "2Xux41yVzddWvh4ModUSRWGbfnVSYHpYjvogeZsBD4NsHHu69yo2c9veiUGs7i4yEcLWfUC5XcYSNfeTzZ6e2Cjn",
  "key36": "zP7th39AK7KRHQTPSajj4vWWVLcNhPS6WmPJEXQDG4dCu3vGV4gcFiDUYsfSG4tsbo3N3UAjTnEMob3B9pSkVFg",
  "key37": "3Z2mJb34ArmvyDV6BWveJ4x4DrJB9oSE4Q5p64aK3ehSBYXRRSqj3b1MN72STxwZngT5gKburAZY9kiWitwcDMxi",
  "key38": "3CVEqsg2Gf7wN2Votw5g7J4Yk8MfkGYR7B9wzYRWaoHh1SE6hWS7hF7NTceenuBx2DGtjSJ4rb9fV9Nuoexcad2j",
  "key39": "2m2UX8S66BicYiqPSrTKtA39uQ6w1q61MBccQJHcFKs2fUkB6ZvEZju1pLUxAoyuxnijH4Pd1qoQy9L51dTF9Qsq",
  "key40": "4osM7bbtViahMC6RfC1Zx1WwF1BDfNf1b11X6wi1ecTX6yoLDapmjLXgrrDfv4L8pZTKPSVhiFaRUdwCR2gQrKWu",
  "key41": "5768yX52cAbobhVHi4B6ae1cpCfbt77TCqZPdtXaFMhh1gVzroxy9H23kmyJLPQEtLwrkR2UgUb5vCJ1up3fhkm8",
  "key42": "3JJRoicz7GyMEchDzcU1ZXHN57aTHcAD7zdQEppyoebQ3J5aEvXRw8MkhawV94huUkctGBXdUuL19RPd9ijwiYhA"
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
