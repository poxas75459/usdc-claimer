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
    "5x4JtwJGaE6yAciqsD4GX8mujCkJGeTjogKeSQM2AFzwHYsymnqBN1vK4ARLd9EgHkCge58zRSPuDc4oDpdmhtFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjJW8eoNKRXZn3AqGu3vuP25bdtYhaFtZGsPQxRwv7gXz6yQkPX1oHUeejWemJsEGVsFn2Au3gG6LUPeq6hcqMs",
  "key1": "2GrKUnGY5dQ2MKeLhiggnfxHvNrC9rcrnsnL3sqy5trsiyr9MY3HWAPJ5dQvwnyQZZA7qcRihuS8DdQaXsCcW5JZ",
  "key2": "9GfXwwAWvor3NdSZ9KVshWSwstVRVSZjZYi89CYa5yaDsgAfRwHJePAALrMG2hAQUkVP4ksGAEsCxa2N7oc5HYa",
  "key3": "Yu7KGCvtsfs9xqDcqhHTZM76nJ5ZH2EXymFPoJvVJTp2byQiWxkgtcL14DWLrjpyknLAD5jtZYTz62p5foV6Hgj",
  "key4": "5Ndr6djTD5KgcbRoyeQgYKApueX6VhXmRAPjKGn39mRYcxpcdfJxZQc1kCbz4zvot8zFJF8KU2PVVzr4LFGoZ649",
  "key5": "3DWpRZjLAPRTXdQuoLQAuCv48NiRqEUoXT565HMYPoSjxZWXdmYuKapRQ5AmiUzwVmKC11XwnT12KL1GVpxDtfYz",
  "key6": "4dLb5pDV4cvzMd6NjWsQXxnq2xjAggyJBwwtU4VeJuXsFCTdXYfiE6RnHhipUo4H6nNSHfYW9dYUEcd4tbsj3njZ",
  "key7": "4QfKC1WGSjHgdFyjgdm7GtMhjxAJrtZm2bb866QxJueMPUFfUMQLFt2UUdLaSeZJRy5peX5V4t63PPbyFVGSidCF",
  "key8": "481HZYoUrLBhL32M6csvtsvPC4GL9AjNjMDbkpRmRoK9jXgPa1ntD24G2DAuBQi51vgiUpNtm15wArmbjymJBRyk",
  "key9": "4ifGWpAu6SDnteQ2xf9CfhF2TmQTVJ8VDqqgMairJHsdPBfZRTnP3G375Kk4d243roewXwdcshTShJLZLjTs6Gm9",
  "key10": "24vKsdCsxbxpvidK3RwwbmM36uMqeCGXr6AvkpsgA14udEwpwny63RWjSg3RP2LupFgApq8v2ni8QkK6MsbCSi7d",
  "key11": "4jcZqfeUcXr1CstGvnQjhXpA1Npg2oj2esJhhtSPpWJrojfG4mDXa7fYdGHZJ84Xdc5sAsCFPMfyJJZ28HhA1hQ",
  "key12": "5Ha5o8mg2Mhuf7ewx4Ahekzr1Y4CRy1oxWUzC7kHyd5cVck4x6QyWS4T89w99YdbcU6poJHSvdanbVXQHD5cPDSj",
  "key13": "51ViiynU6gUEE5tpPKUxEJfayXEK1SQsW639ZA1hfxBeWS5sJMLzqCXik9HaftbYnX8mjsJXLcNbM7DgYtmT6qcn",
  "key14": "3xkaJ6EifNdgUiwjyX1rLjzxDSBSREDuhqzdbRk7n9sVf6PLMzdrjTVHYkfTWrgiU2Rtd7ohs72i5kezUFVeSjuq",
  "key15": "47VEmmCFG7FyQGFQ5GjUvwi86eHAnBofduCvkNGWf4FUZSctriRv67D2eV9JjuZsHcUB3tC882BAnD6WhMTNffmM",
  "key16": "2wAfLvJgxjKnfjCvK7yRZLpR2U6wk8L7Y4dFCbYbkCPMRu81ijNkU7ZSgdWmF6SYjhVMCFGjr1vf8wdvwJ8tRRZX",
  "key17": "4LidTLwboVg1qVSpET7QBaNbzMYQ4NuxrjTSEtvJzn6hPu8WLUnxQrhkuvxPP8u8VVFJ2LwugKktfRBKL2ceFPrG",
  "key18": "63mfRAqAqhUFAgjAgLMkNsso8moXUtamfXcN5N9qp9QLzpHMGyS9EqmMgT1cLii9ico4xhydkvpA2WwB8dN4Zp8K",
  "key19": "3qgPWjket3K41o7PS6iJE2VY2GwpsfPgcvUMon3mHxzJsSf79R76gbGRtHkVNGatT6csN1JWjrRfJXzYnSbcuR24",
  "key20": "3uQmfXZiNR2p1QDZwGhnSKRns3sTeC7F2V4NsLLxh69be6WfYLyULsMFitSVNWTbk7Xp8Vq53W9TX9E5LpZaWWRr",
  "key21": "2FCCqTNsnxF6QAJy89UEEgpoWxnfCU2KFEMzGFwFbqSw61UVN5F5c33Z8gGwMYeAnSEo9RphBVgLggYr5YJM7vAj",
  "key22": "3zoRu7cn6LYoDeQ9nHYd8rpFBkziavzuA3YrHLh3y9WMXRJE8MThaHiaZDQRPWmPqWPq9Q26oiiV8NyWwbPEcesG",
  "key23": "2MgVKAsNPPBwtXhoYrC3T3xhfN6XGgCSASgiy5CiBj8zftTMR27JeimT5qKo1AEvHuotHW7Y984eeACfU9KVFR6Z",
  "key24": "4NjC16PNEnco2dyq2ttJ7WfMyyYA7qVZ6vHTmeihMHw7MzgCf1Ch9cUA2owRXFccPb8t5am1dXkwhANtAWLiLqZ2",
  "key25": "5g5UpPhieR7MMCJJoVB8rKd3NXb82dZ63MwgzC4NbcctfSob2BXEfbvtx8gkE5W16WGjVjsp1xow6vSzQwL4Mzsu",
  "key26": "5XktiTKiMFwZVs2M8quQDWJqtrmhikmn5q2wHexnUHaNsh1ToArdVGDFyauxJQPNLHQ9JmxppiaioEknsXN2SuyM",
  "key27": "2Lc6B1RpNYETLAvX9Ua1Y3D1imfEoLSxfpmYbu9WGjPRvAFeqdCaHRkutAP9SFXBWymWPMDMza8jeiFbWBLtDDQG",
  "key28": "AEezJjh87zVJAyvbWx1GEEvxEEvud1m5iDrk7hJK8DPaTLBTm5X9rQUuVpTWCfuoXxPLpoxjzJ71naDp5qfDrj4",
  "key29": "2ZUEtTD3if9LraZJStAqjLjD4H699yq7nB5J9m66xbJ3459bvvTJ3XSPuy43LDoiVF7sGWpuHo3DjP5EtfqE3Qx9",
  "key30": "2DYJoHpu8SBT82ngwvL8ZwfBNpmtPtmJcUDWcPGmtXK4djZsdM4tvUV5riEGnvvWULdhteZEissFyrasFCU4nwm6",
  "key31": "3W6mEmunri88A2KwQjcA65a1QSq5gSccshBJp7BpwBwC3Mi4he9SXD3T1fDKw1rzLCu3eD67Tq1GyFDdX61HiU2y",
  "key32": "3tnLtuiuNzjkSrKM63GLhV6pESUfGZrHQQdoe9JYkgBQTe9FDjzKAQQJrWWAwrm9r4FVqLnCkYPhX8s79hGCqX9W",
  "key33": "WfAbQtwPW4NAkwVDhTkDCL9zfeoajdpA4G11rmohbYF24NFRztadqAyMjwRrdGit4pBa45vg8KooPhH29YMGoip",
  "key34": "y7VFuFjHsR33xudZrp3NiSnQa7HUR959D57yi3CMMgpAnxPm2eKYV3Q914astKHHZgSTkf2UXqVXPyyGgte5Fre",
  "key35": "3gGgDqYLLNm1pXJEgMfS39HVuRBZC95sC7y3n8YwU2vut5orFmnXT5CZ9qJY8jnLcTe8HbyrUf9dVe4J33DN5ttw",
  "key36": "58NmHLF5WEDbCgi5BZGzMwZTLvJ9kDmmRdeujUTECLwmx24QemygLJ4VjNERUjZEEfTRnUp6cRqn1CCfWBQ7Mdy3",
  "key37": "66GawdXsfjA7uvsyNeU6TetCRaoo37pGa3NWKw3JyYck1YYG3Bhi2AQqDgfjKqvQpeBiZhGGg6W3Y53J84GhwdxM",
  "key38": "63St3httDKiYX4vMg5xLPU2Sh6E7ku7cx3rvNXbHe9U4cLxs8jxvUZYVPvcDk1rTD1LmqC3om3zAAkFsb5RGxkd9",
  "key39": "2rvmRAtEV1h3AM7opMY7stsHZ27SAfYCspMNXp7vyUv21tHjmHRntHmjdqXah2VJaQuZXZfYtQR4obBaSr9CKFic",
  "key40": "3ozrS7rFWzZ5XK4BVeySVBrHNtE767aejcuhX3c1qZULKoCnp58Fo4XxJYjmiJnu7bnv7yUWaGupFR3SKhk61BRv",
  "key41": "467JX19hACCrHf5TS5LdJCKYZenaNTQ7MysoxJGpsNEfEotd6Zwk5QBaNg5dpYwarsBEx7JUSgA77ccxWqTkhdLm",
  "key42": "EsZCqPZRti6SK7q8bFG6GBgbPTcfhBfEDS3jtddBg9ykNqXsUUZYf4Pd39vdptCP1TmFXq9NxpdPhU7BsAYWFDt",
  "key43": "3AWioDB7JGAsAWMCnd19PBdptnov6yVMXvFo6BBguSZqSArTHhQssVR5xuqCrHaxs7md2fEiDVNiwdZp63SVGWiw",
  "key44": "49khuZ6MuST2f3ijex8QZqSD8S4LKLPVGtP8rhHJToMpkSEAjvaq9aGPpo77YhrT3q3rgTYtd8HipqKmoqaEerJk",
  "key45": "U6uTvkKwxtbvTZS2xxyzQdudAf6zTdoCEKFpcrQQJkcjFQUEDK21KacgvBwTp33u13pupKS32SdqTW8qa5nPa2d",
  "key46": "iE4wf8Zg4xyqoBFxBkH1Nz86wf9AgeYbjvMki19fT1X5ZxnKV8J3V9ejjTc8scyDebZE4mg4vHKXdWDNYKRBfFc",
  "key47": "3e98W29vdU9CeLcPZxbFxBnZVKzPa7WeCwW7Hp1MRqrA2j4XfEyH9nrCGRADCmk9LgqMvv9ziVZAbQoWmRdVqLbk",
  "key48": "3g7WxjjgHoXwRdJEtXJpZv32QQuZ8GFUNoLQdPzpgksRxrErGxi1HcBjK2dhqWCZh4ABW1SjS4p21YKJP9GfaGzK",
  "key49": "4K4n3DjaRZ5cKK9eSLsF4MXB2LW8Auakc5BDPaRPYeFTQBEe8W65uqVNJgRwrHzPc7CVvVu3CBuQ6cJXP41q1Piy"
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
