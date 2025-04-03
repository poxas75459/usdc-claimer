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
    "5onK8qM5RfCacK355VxbTYmch6nkATSGARJQTAyHHbRozBLWzTVcRYjaTQWAQjzhhVFwPmpsNudgotQ1oZmw5SxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31777ByKBbrHssXHtLULGTWE9WYTnKhrLBgZ57Q5gWUB1LgXMrcR2dgEkcX3Z5abmFAYhT9wxYhMUmHN9WuEyRYm",
  "key1": "4j3dxrdc6MJGb8jCCZy8XUUzGXU8iwwRUBtoEi1RKdwQGvwDqGpprJMWFMXEvQk1efrf4tw79yzq938bsyAkQXPe",
  "key2": "2XSQRFiBntzFjqrbKjs6zvGfRtWm8gqyyeVzznRhCZKHAStQ6SCKFLKjEhKPvsLXhVDxDUmwAufVMfJuySwKb5sG",
  "key3": "4mL9GnMAXcCgnXqTVa1Ayxcd6PBUc1z2JL5j1vtustHaHQEcgDeF9H78oo4HpTcQAY6Cms7J39sMxKns6EbMACAv",
  "key4": "5195cSArXsjXEosSernD3rVv88Y8d3ukhmxhzYjRiYUDgGuuVAoR3eZdcfwL3Hv41bAH7bTFCvkJZWSeSdJEuHq3",
  "key5": "293sc68967bvzZmzgiNNTgNVdE6xYTHUtBmVL5fXig6r1SWKAg2id7L25wCCr4eoTX5FpZiGv6Dixtg58p53HnQi",
  "key6": "2iC12Dvzy4DaudhxYzSNDujvdtJm4LVRnwkE776bFM2huRX6iiBJzhmY1A1V3qQzCWNicdRgct1dcA9Rb2h6EdeR",
  "key7": "5bbEHJY98YH76cKnFtJoavPNN8pKsN38PuSKTmyfF5bHx64n8hVeNaeY8M6Ddg5nAeZ7D4rM3SyZAPbD7waTZXqg",
  "key8": "2RDugzKmSdpWsb6Z16M6t3xwMnty2WiABs9hx6uM5vo9afEcqqTr2d4pYiR5NYBs4w8QDgRHxCdHEC9cQFANPCcE",
  "key9": "2BgHu61MCR7NmViJLRYKNB91eKdkg1DSw4DtiVyzMG2HmbdNS1zoR5ZubsWBiPvof5QZVYhu4WVS4D8NKn3Dfn6B",
  "key10": "61MwJz4WsgKWntSHjktQUn8Qk4Cm3yY1qoQK9YZaDJDYmwzsYFyzSJpAZMWmJEhWosScZpX2Q9AfYL4JK1U2Yyr5",
  "key11": "2Sc6JBnE6wTBLqWpSZhm2T7AdFw9mKsiBfe8ba1fA8nTG8LpbeFWMFYxs21Ahy5taPDsYEx9NBszvFhn2bdPyR7W",
  "key12": "pv4yocN1mYztTmKWMJ16SkmgAEMesYDeeQR8d3LXAULiq7Ai1nQUGEV27UFFCevy5tKYkXpJ4afvDrKmyp7VEDm",
  "key13": "4yZwbd6tzhEJVhFBxy6ySNFZ3oNnLn72i6SRY6tK29GxySzVeL7KvoUunuhmzYEHeLXBDFGbUsMRW4KgZa1cirtL",
  "key14": "3rrWQQnX5HxzmzfEfHxWs3vAGGruqcUTnoS3X3gibG1Boi6TfEStJ3bw39MSJkheDss8usv6vrLopNpjPbMHZBfd",
  "key15": "gZorQecKeeErRPmwzFwkF4tH4Mbc9xcNQjZuESuvr5LZtoeqmw8HNwwPqZuxeeDgA2hbsynn4VA7k8jtyVih4xr",
  "key16": "28eJM9U1LZCesLwATJtwVfi1kRAgLQjucGztfxGY8UeGBHsopPdqQxg7QR13SdkshfAfFiA5tEd3FVb52ByPZb3a",
  "key17": "nYxMXJgoJZxSsHW8zxpKqNNgsPceLzcriRiEKoUkot35apMNGfytDhBA9FWDmDfgV3vLFBnhd6xM41zDUwygYob",
  "key18": "3yif6LAmExmFCfY8DtSVWJ4QxzVovYaJFKdXrAmvzdQhBURratbvjjGRq4nrUvSaHwfngyKAAeTb5VKYzhtcPyTc",
  "key19": "3LbxniHExZjaiaqXAfTSmbCZwh4cqRGxptPkr5zTXLthYqU4NKrHt5ghmzVMRh1dmarSDjjaQNfid1twT1BoK56r",
  "key20": "3v2SLkKNLRqUcGNPE4CZSmJmtprdnCT8xLNWKARxxuGT3tVPsGqK9zZYXUtLt5NrmHoAQo4Y1jM4PUrzSunXynbc",
  "key21": "5jvuKha21kZmGuJiJB57gFGLHVWQ7sVNDZFaaSh1oNLgDD6to4P7hfaDBRP1aDyLoNxuMbqk2F79zEMRoVvHGR9h",
  "key22": "2iQ6gbEugkZPi9UM3x7DghYRLsdDARtMj4ANgj6UNmBVaS6ztDXMqvrKJUbU42jgYJNz56FbVrhvJFXEHhYqJNaG",
  "key23": "YVYXhQtcXNa9Y25jFdeB7XFKjMGD4YfWbBqt7pk96L7rP2apgayuKsGgLVgsEafver9tkKXge9Z7NkT9Ws7DaWw",
  "key24": "2x6PBy4vpMctUcV21fAqGVxkTBswBEfTjGQsoNYcAt3563EzNgG3dBBRrRJMrmHjMF2bZUTjxUERxMVESC7SfPeN",
  "key25": "2aNrUUz3vTEEzVRcmEcuoCUxnUDdKkqBJuvrvcogfMzTqekZeh5F5VsgFSWM7bcUfuFXepZn6g7XprUMdFDspwMo",
  "key26": "qp6vEdYD719YFG4642PKwEGstQGAyx2NKsFRDLK1JXok4WcVQEobxQbfak23XPsQ7S4rXmrxaf576SJC5d1yaKd",
  "key27": "4LLM5DYWzntduaQ4wmJajAqcAeer2S6K9cvxenNV2ggpYikDkCk2DGvjyY2XeNPw5mFAu2epDtsHNsKgfyxNJ6up",
  "key28": "4om9FpTmjDBYvBAHXSpV9mMYMbMLrgmgiaw6Gb57HERFTeUqxkDV73w8Dqpy8FhLf1aNaeWQyLiPkTm9QhtvqHcp",
  "key29": "stcM49LTrXJfjBGAtZ9EygdYzhC7bu1tVbU7F4X7FXywd4Pi3ftpLnLyjDVdeWTLG9wyhczirzzMHEjTnEQ7cia",
  "key30": "3WNzM7usZL54qoJ9Er8eg1ZwVZBFeToKv3ru4rDB3Dt7yMs5BmJGoY8Una76C1Y1cxxqKBH1rei4v5phVEiFx16J",
  "key31": "2HFj3nSB2DwjmFfbqZoKYs9VjS8F9wGnsAHCc442cstHvXvfNDxetsoRHyobBU9kACcDiCAy23vVciojQm8B2Xq5",
  "key32": "rBLNosvn41MCno7LWmC2LpPbfXu22TqfUCgZeJQgMXANtzJSoYgKUvJq76xMSKrZQgMUf5Zx6tq8DREAQB4D2UF",
  "key33": "3qYWoqpRCJWVAvBZeWfXeYnpcLRBqsBC7rm9hPxwXREAQ1wHTdGsDFnsmNkzsyJEtGg9aBKUySNDTQ2caoZcjzvz",
  "key34": "56DvPeZcC2JkxSd6DVBU7TaP1qyfh28q5GKCaBvayDt74Fv7Ddb8F5jjppQ2yQG1G6Q8wezs3EHKj1eDGHeHBpZY",
  "key35": "46hw6V7Tba1ydjjGcMzSxpPsgrbz9L1jWwuL3ZkFV77S2bdbRkpkfRfjdnGjZNXoannRqZSeSLv45XwhiWfzeVJj",
  "key36": "3L2qhdg57W9MYrAWzRnwex2vgSA9N4DbaAQvH7L5zJyCZhRD71r72U78sVrNnyGBL172P3SYgGuXNRpr2aoBcwyE",
  "key37": "2ex2yWQ8sK3usYVmne5EJDUTsMfvf5QdUbinDjk4xBLcwwqy7r31zphE4qEwycd3xPsMje8F1gBkYpFqynPHTAS4",
  "key38": "2kjDtJ1MnLnrVcPUqUgKsA6JbnmGLSmpix1vEa1XqRFnokj29NuaCpVuWT3WznGaNVDzushec7ajh5pvSZTRMGqa",
  "key39": "51qvPd6sMbn97ynDTD1Zbo5qoPkS7FhVeVK1bjnurpZ18GhjH9ScAexQg22iiS842NpnYTUkfbC5jtn2KfhLYJPr",
  "key40": "277oGxaoFrHBWKFpLGGwYhaxGwFgoqZXYZm6j1k5mBpCWrfqhAFqkfHDxC6pYPghUJxuMPFSdJpvKB3jW3ADc1VW",
  "key41": "2qm79MuAV8NEKSRfW266DUVSGeQiWX4THFsJny1j6rppsnQBTSbYU8wvcrAH2Hygm5nZY7CDdTchagqyb1BR1DVk",
  "key42": "2BoPBNFxfMTkoW5qxgY7o2mXFhXip2PdCghEqDmJ92SNQVMvwQX8WFNt9yjDud2e24qw7sfnKk4id1eMxd7y2Kqs",
  "key43": "583yfGDoNmd9dzR9JFEUmtN9wCdimnokcjB7Pi1QMkrGFt6ajTiRUPyS8G1RDkN6D3RVnCgunDbKCCT6wgjbW3ov",
  "key44": "62MBhsbGqL2fMswjSczZWJdfzNWySKoHKymfShpWmx3MYtp5rVmoNH4WsE8EZiwhPkigYXvNZoiekMiTbp275DwF",
  "key45": "4yhCxZWhCZCmP3KPBRYfG69MNwUBEb69FYkbPG8KYczicvEzj1SCiJdpaRC9q8xng9jQ8NxrYF5fEx5eprV4fktS"
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
