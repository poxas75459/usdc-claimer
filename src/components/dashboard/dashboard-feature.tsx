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
    "QeQqcPBiHbZinYZWC86svKcdVrSpVzrBer8ABCY8JiGY4DiqY8L5diUhBgJ3DJSvHizM5nSxpXaE1pc6skwU1B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQ7pBqfcXaTnviGE33YPGkVangzgsF3Q8LRyShHxg8fhu3KHKesrkH4qdYmjSZoiWD6cmaTNN6au5Jv2tBXxCeW",
  "key1": "2rkn2oeGc1ruRJxqomZ8Uufm6T4Sxh9132D82s3W3zAyXh7cFnPuJN1jHHj1239dhwoNGVNGs3QC5Mym7U9KcD4X",
  "key2": "3p7bUYTHAMPeTBNKcmRrsnii7ZdTbygmSUhmHLf5imeFCPkSZvw1SmHVieMhC9xXf4MA6uuKdtRcSzuxWkcBn2qM",
  "key3": "3NrBsQMbTdsTwjWA9ALudAWyyFaJbgVryzJkL2H8otcUe6kcRrvneipizTjRgCGpcTWZUsQqhQCrwLqRpXvg1XrW",
  "key4": "fMBv6Fk8scw95wRUtmWVjiE15TmhD15xQRv5r2Ns45oXM229bxBWFrmhRbVurr3b7TcFqLv6gF3AJ9yAdfYce9S",
  "key5": "3Fokpy15oQKFiWq3dxNCTREjCtjZWF3mjWyMEgo7DUJzncHW9gjXhUQrWXhv39VLBqL2rPTAw5q4tpNZvE6TZfJp",
  "key6": "55HAoyAHcXVTCBnRZXkBfPnDvWzP5fG5wfk7HBSv7Qpa8DY6bcEZm1t3xEniE4c76Zwtn8D5Xr7tjYsNaa41D5k7",
  "key7": "6KxuvDz2xdZ7MRPcLseCGXcLuAw1AeWWndAKoJhexHuBn5zexSVCayhwk3pxhjFU19FckB7aDtMjt9DG6CWDnuV",
  "key8": "4P8H264SqDyCLfnrdVexZXKiAs6Yv5Gd27PfASaD2fViPgMEDo5sop38c4eHJuxJwhgbDYbpT3kr4hfVBEV4a8dT",
  "key9": "243aENsC9YzAU86qCAsUK4vMyNJs7a8m5sqCEzUSFNgYYy544XiycsQswaGmFeK5zFQFksHHzaNp73ahRQ5wKSFi",
  "key10": "caRS8FvjDPvnkuJgR7xsSbUsELvKqC4GbDnDDXcPDTBXoZ5RK28TxaFVEd7XDusN6d8TrYgqmBBE2RFm7wDFJ7q",
  "key11": "59ZNJRJdtWosZa4Qiw5rTpWK2b3SmcMgnkqGuEPxwVBpJJd9aPRJzknxAVLTvd4diSb4DXD1c8M9NStES18oKC7C",
  "key12": "rdmWiJ9P6eXDA8638UfeuGhFpRF7cs8D3P8u6XTiNYwYjcRzrhw2DMsZPYi153UUC1K9WtJiZLjxMwnHbiTwe7E",
  "key13": "3onbfEMUQyFCj8oRcHHs7bRkwnpm2ujPqUUrDMWzbz6m7rvizRpBbMGrt8f5WWNLSTs71yP2F5ByS2tPpGJJvFPz",
  "key14": "4gXxJ2HYYbDkKqSpZPEmR7yZ1Ze2xk2Toz5YVZT2RCJyR6CnWfWpMigFqfoLuX5coGX7HWJW1V9M7C6MG63ktfKM",
  "key15": "4QAnGiiDWeAoG41YxuEQsqCCDXprxBYzg17uApjEoLZHPBJDtu9VJrwEH827L2MUeQYfpMdU9oWEwWuw65sMBpYE",
  "key16": "3bepgTNADCXb7ejQ5D8vyWe12GvsPdr4jnL2hEnzXnmp6A3ZjWixEGbqSxJJgixaAU69gLhY9wAuHMsE3kGzm38r",
  "key17": "3cB5zPF7K2Btq4YJYBt3S3a6JrmMBLjpTmPp2D1RxhT2C55XUjMza23EYCP9dfybU8tYMzeJp2SsufUD98v63dyP",
  "key18": "4Gq6AscNP8bWS2G9DNHuSkSFnhLWKVmVTsYq5Bhp391EK4LQgM1FHwPqNPXsrMbY9VNqq1Q9TvoUcHvgC86CH9PB",
  "key19": "5dmEn85re5Va8i4sUC7Vn6JY8jJqHQjca5WRgbvAavtGUS4gKb8PAdHYXRE3AHfdhbPiXCQ9c3fJmW98RVwR8BmN",
  "key20": "5gzor95Jc9CiMZRMeEFP2MfhXhkCccgtH5VWp7FULGxevnfFbbiSqNjWxuE9FiPUVGmVGbZFm6NzzTkND5yDoE2Q",
  "key21": "4ERdZ3rB2PVmLQ1NnjFumgpUB34XSp3dnqEgx6DJGhbKuU177ehnsPNpsk2mqoNsTzJp5wD58eovxJXvKXYbUH4B",
  "key22": "2jhFxS18Q7EE8MW9uUG4cz5du8VokRzf5hYHFEPcyKq8RdDRvTiVan2ewza3TwA4NAXhGYHqmqR4TAWsues9REDK",
  "key23": "5YnFDYJ3Yohuc5ZA2q9Fj5inJugLgxfYRQHbbWddjVTLuPkn7YXhUNUWaJrW17YRPU8Z2DghaCYeCFdF7Pd2mi35",
  "key24": "285evzfPwfNTxpVG2zwLjYeWm1ivSPp1MYKwSy2kC3A7AurKS2eSrDDZidnGEn2qxeboUzBEkaxEKBATQE6DH4Lp",
  "key25": "4TvRunF7xs4QgF8KnptHDML1FaD8TzyAdyGanHwiYjgoVyJS4f1tL27mWTeRBUoXz1M1zY4TtyCzTLupifWZx8cQ",
  "key26": "5hjiRQ26nZjQJANf4tDGNaLc2DCx82eEYqPnYcn86HDfEyiBLFjACRtCQyL2AoE4bHDy9KdG8BvQKSM126JiHw6T",
  "key27": "2tuaY6Mt9kaSsAWA6PFdwjgTVQjwmYFWQ6vabfp178txVuGxM53GZZSKTaUqiyY32QtLu23HmZ3K3RCJdxTMx61V",
  "key28": "49nDEfWLGw5R2XHS1LBktU1TF2BWdKwnD75rjRDah2hTkcPX15rg2psxjaBRYpqU4ZD8BoSNkJvqfx8zLazBSsoX",
  "key29": "GiRzCq2hvbDedMCc8PycV9owPJvu8pdNRbpE7VBsgV1gAoqFYjuq5uLHaqaUiePAe1zCJXMAosrPtYpgwVrHWxQ",
  "key30": "38xcynYPHaS5TYJYp2hwhTmnARKcwVSXeP7u3vaW5kyFcRy1YRphnrPUf6MFPMLnepvfUV4DcRQpEGiyBHJoj1kA",
  "key31": "5BYytuQf8SJMh3aRKLtwoQSufXRderJ1xFucjhESCCwYKtbqtSXxfDvhA8wodWnjoKCTGGXVtibdK1PqaMxNAERi",
  "key32": "3mx36U9EnRHdRX7odtpqg7j5EFBjcRFpi52j4MUuRHEvvSofNUjHSiukpTF9G6eAMJ1Kwz9CTdSYXEuZfjCLdgFi",
  "key33": "2rbW7wcVETNzDDPQsMfRzww7zEdvkZJgkFiC5m18CQruHsSAaHiboAkVRxTpt3HT2mXVGxUtuLUVgavas5v7eiXZ",
  "key34": "24S8fLY2wt2F6LZuhWKVHAxYMW1nco5w263hLj1iKFTvg6eRFVrEGMUGDczjj2CKzcoweUdAtTsMqh2afJYRYXSW",
  "key35": "1298SkP32dgdnanXi4ChuxKCMqs9gAR4bMZ8SLLdKxwyyQ9acxDD4aaaZvsXYF71pNmbx2X5RbppvpY1ExG1wkqR",
  "key36": "4gEMmKL5ypqYNyDds8Ng7MMPvMkdkQncXWSAkP8GUv7EXTsnk3hiCb1oS6a8GCLxgH71ATM7SsksB5cCR5tfvEeN",
  "key37": "rByZ2MZpFE4G1VGfNV128WWU1CrDzdSgVURGom8Drep2sixqpN5coSKiHsedqrqZJwF73Ek4gupyjugrXDjFAzD",
  "key38": "fYCQxexv362QPLqSELofWmhzWwBfd1ok5phWaUtpHHbiTVRrkwRBU4eGd7PwS1QPWda7jL7jsv7s5iTAwHz99nK",
  "key39": "wAxZ8MA3CupxTqtiKSNF3aWxmsjWzJJktG6Qq2euGoai7xBzwzWn2ALEjuGjqSkQo8fwu2LdKYX3Em7vbnfMZSS"
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
