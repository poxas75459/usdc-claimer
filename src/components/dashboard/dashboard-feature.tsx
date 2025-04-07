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
    "3ib1Rxzh6ksuoSiaZSBpAUiX666X2Atet5ahAxvBdD9JRBwyYYzJQUs9U5MrtjGqA7CL1e9ehjCb4U5nkLkGSmwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32nRsUTUpjhUAAGvYRwsa9xKQbzXDUVBmWtML9pLxC1zycH45iMatZg6mzwXVYdPFwuZtWycYhZZAf7w6nqEhhmk",
  "key1": "5Tu9b1W1opZgedYe18mJSvT9V5oEGKJ5cE7xtYMzv4BmwkHuvriTJjWyjr3DihUWLcFwjVZLwrGkmHPhi9fjgvZn",
  "key2": "5HYaCbquAcxmUmPXZTPzMBUvh3wi3XEu6wBWERwTufkQwKU7EHR2wWRcpDSqtsNGy2gpDop29dhLQa2TRYH1Ssji",
  "key3": "67FUq6LimZKt5xxH45Lucc58HMb1JhcrAgXhWzYbas4gPkAbfBjAiqjqRqDmLdyPHWa1B7Adm5w54RxUk4qBLTAc",
  "key4": "2B1DjCNoxSjZeHBxUqcTHEyqSZ8BfATyY566ddNv4ERQZmjzLNwGQjTFeTDFXfTK8cKdhaXSjbo4bFtFcWmwfhmz",
  "key5": "2TgCtuujn3TbbxxGEPhwWHBnqukbXBt7zS6rSUvtNdPFCURsqUQpEUDASbPg7nZQavmuSEyUkURAcZzgimrAoKpY",
  "key6": "5AB5JMf1FJX6AccEVvTJT2nvB8uvWCPbrJaczGXJz4pkyHc2ViQecVb6P5byNoZjrvjLuVJtebWjwTdzAmH4WNMG",
  "key7": "4C8XmtgiP2HWUsCG8vFq7atfgQBBXQXkDkf1m8szbxPGpRkjqMZAdcjfdLGvKWvETXcf23hhRMvVhwBvBLyWk58S",
  "key8": "5SrTDpcxwvqTBAJxCohYasaAwAT4SN1quvXwRULjjBGRdrxsd5EHLmy5b1SngRADDidEWh5yj1NwRYA53sCiEAgr",
  "key9": "4srzXbuSgDXhthtXajvFzAnZD8exYvHvgY1xw4K8LqUmd2tXgzNG8UR5pw2J6bRoaFhXiV4ajsmj8V8az6Y8ueyD",
  "key10": "3NSTiT2PGbJQjh8NwVpq3DrJPEYyTrXn2bYrXHS1x4axBRdjoBS1rymqT6aS7ASXhRYxEP6Gw5DiMe5Xb3ZVV3t1",
  "key11": "2fHBghdxw4vqxFNPCx7nzMyZgkvHRW12yx7BemGCkm9J5qyoPCgm4BQshjd9FfiPjMkqU9Fhwzyvq1NmNEa61o2m",
  "key12": "9PZrbA4qRJgLWbg4DStaNoULakbeEayjnigvYb5DBmr8oyikPc6g5gCeGWShJtzVUgP7Hqh156uy44gvTkA4fH8",
  "key13": "2Ze3zi8WjB4XHW8hMu88QkwWYqk5UyevmKxWGYhyXv3pAcW9MaRoc8QSJQgRjWZscBkf7M49BHmv7oVNJ2m72Nqm",
  "key14": "4zcw9gQCRB1TCE1yksAA56ygn7FDwSr8icGdUdxWjM6HxLMtNKy56tBUPQZBQgYVayA4Jo6imQd3wf2JKpzoi5yf",
  "key15": "4VkuQ6ANn2vodyhsWf6px9swaZMmjE4su52uUWExMVYCYFx7Ywmd998rZQh2y9DouUVU8hfoop2LTzPDe5G2VGKV",
  "key16": "58PDysm2WayunBTF1jCzKSN6DvXb4JyeXt8iSwgR32nHmrtczthC87jsfzsuoBxSKCEaiqGqqc4zECsNMKrpDntj",
  "key17": "44MbCrbzzxbDyKdvQBsFhUGdteBdjiHGArbyWkR5jDqfZv8ZurX1G53kMFUW8tiBDC3jV83qKcN2QWdJTa5vXbp8",
  "key18": "4iHQG8SsntzSu3LDvJJpzmUUY48y85awkDNSdMwnGSeBL47srCWnGcVXmZ7Bf5JQmNWz4ycb86ug7M9GzZMKq3D3",
  "key19": "5YVv3HnKHVQuia3wZDLFnfpJQxwF7veNcVDENj6ShUi3EEDEqGrucNDW1vg2jzDwR9W7pbReEpLDrGv2thV4WyMR",
  "key20": "5EG2e6zBtNFd1kTweK4CeVpF5M8sDNwNE7u7rXx4CgCxEUM5K3dZ1rVN6sNohD1JJafrgcdx8Z7wD2zwdgQnKsyX",
  "key21": "2pB4pj4AXf9oz9DmmVv4JKVZpADEzUYF1VrNamau2WUQh6GuBYJDY8SW2vHoYjcT7s16MGucKPAKaURNFneMQzt1",
  "key22": "34BSmtfM31HYSZsRQ7cdjqg2oM7HGCcdU6gt8GysrrjfXAgYx3wwbUkmQpRQ6tuCjNpnPPbvLFsptSEZHVVwZLcS",
  "key23": "5rJZuXu9pUkvjeiAwM615T5VmXSrNKyjiaN6ZgWJZgC8Y1QHrFkjRvW8RavG1mS6YhWjaixw32emYzqPNkVw7ekr",
  "key24": "3VP3wSvFDK2Rb1QhxerhaADiDwgpiBtkgp9yMLNyU25zCBRpXQPZv3H5yPSSiTq6ztjEAh2bv2bjA9Usrt2Ro8Hx",
  "key25": "2yb1nVcW8HjaCPz7eAJRwGFyXrhiivS1hvQXC3Szm9GKYoamS4htpY1igaqh4n27wFhbXCiWPXrFApyetjDe1c7Q",
  "key26": "3ZQWk48UAc58a9PmrbF2nPLGgX3PbSTd52QD8aHqAPmDm16qrrEUaGpqtaSdTjG5XFuixhAGvHBX2aiAq4vDmt5c",
  "key27": "5Ax7gQWW7Vt34LQaJoMT29XPjXSFTjADrZzwN7MZpfgHSfPeET2oUqJ6WSzJsCjDrvPXsjMfy3C2RvXimMjq3h1L",
  "key28": "3MeTtfM5FxwnzxpcYf5Wqgr1TX4isPd4WZ8fTfED37bDECU2p7fP4DboA3ywDVtiyu78rNV4pRQj13bKZUYh8z3j",
  "key29": "37LYRfFedX6HgWvTZ9zh4YEDUm3cHfRjWTEp3PS3SJcfP82zQoySg5SkgaSK9Q6Jiuu1b5FNHHc8XiEppvykijk5",
  "key30": "VTYodeaBSyWd3RP6H5WdyffbVMB8C1M2CHJK4AKQYdcdDdMLxCEqWtCvdpz83C5RX6XqN44PTQGSXaZDGp1ew2f",
  "key31": "2RqR2ko5ZuvhcfJ145N9EiyMS2YTtsuo6kt3VuNcfi1BjWbtHWZeZbv72mtyULvZgpNuk2d2tYeuGHrpGq9bnRS2",
  "key32": "2jk3AcNf76RZdzEH369Bi7hgkhnPMAvVEduVu88WxmphEc7ZkShKMia3VckEKHkpDXAziimZffnp69Sciyo5L5ne",
  "key33": "3WPyRTzpGQfvUWNwPoGSXSJQNyXuf7ksKx43jgb2Deh1d9hMWWWsCmgnTdAVriiToCSwNrskpqr1sonYWhf9GUHG",
  "key34": "4esxLdDyaSyyJoKJbe7vp68TmRfoKM3Vf37DiQJpv5oF5g7e4QDPk3ro5SB5cv4QdNcbxzxE4W47vVFbRhvkDNqi",
  "key35": "4QxCFBZXWKVaEuzMDTMvunRefZzSt1W7sxpYDCcVrX2ZcswvHacZuEuiVigw56toyawUDNnUpNraqQz6KE4PEXsS",
  "key36": "5Amy7yAd1GG79AKpD1ojJ4YaadoNEVb2zpkuP94jRMWtZo7xVPX7QsxtzQTYfonJ3j6fAp7Fn2hNgjb6XU7GAoiT",
  "key37": "4DbxQy8j2rf5FUvdKA9A21MiNf5QCr6WNmJ2L82yibLCfPVc3FYhSxWrenwchhyuhrrXKgrqSL6TVpYAx6wQS6oE",
  "key38": "3WvVawPEnbGHeYi6e3tGHSCWskz75SGryHDnA9QU8897b8XHazwBfgFTL7KB7owsGQc4VvBrsMCD6bMtSmovSP7h",
  "key39": "4KdkhaRspRAAiWmwmyM2BWAuFJYH6mWYzNomsxbeNZF1AKkmZtULB7p583ZfQpBBCpGFFwi941ozHRvAaDEGk5K",
  "key40": "4GkAC62EyXBSgUcXhkevEqFZnYMBBu1RjhEZJ2Rte2t8KFPK4LuNy3GaNVe2wgQjKYxYs3BHSxYV16zFzBArg75U",
  "key41": "3jdgUR2yaKRM4RPspoXkQ12Dw1wFrExcw9u5oumMQGEdmifsBBQXH9bCTLVpCBTFGrEEWKE33DZ2hWxeVEcmGznv",
  "key42": "szFjcjcFsmMAdLYLPcJgL8TFQ6CSNFYyc8n37EJsVXaHwRWSZ79kwndxee5BTpPhM5BeftNh2ov7RCmeWKHGvvc",
  "key43": "3wp4ju38G73U1z6eCKVU7b2zzGJTE42SkduPz823T99w1uTvW5MCec4piQGaEZkfbsAWorizCe95Zn2aQzn67CLL"
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
