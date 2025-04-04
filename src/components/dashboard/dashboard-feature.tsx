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
    "JNmFb5NiKJ6nyXVePenA5tx8FopKRnxEseqV18DRzuQqTFAtxYifsE5XnQWCtPYThLJ1ZC3F7BWn6u69ihWj2XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rfr5rPrJ1RFNEJoQmQQ1voxzD4VLSyCUigh2hLyuMojkteFFYxHVMP28i7CWYPrbFP4bqkzVRPv8u7mUzMT2aZj",
  "key1": "2jDqHjogGhKNmVuDPPt55mSLtLx9q3f4Z3iGAkyaLy3HrzhwMdCgLgk488rgoUdHHNFRaoFYg1RFBd1tzwQEdsY8",
  "key2": "3jni557QiyXhKe6TT7mvv2tUYZ5rEctkdCpWwm4zUpoStMcZq9USnDxNEmnMwobt2YP4eEiEU9njhknWXFbpejfB",
  "key3": "4RCZRkNeDaRHECfps5bjSzRcaiunaKnHAXuKtzEh6ZLpkmEwQAYT9nBZtty7F4yUpGiFMUa1LqTbxFVgpVbGrwHR",
  "key4": "GUxkniMkn8pAk3WN1nQ3G6k916neFaRHzRDMKeH8tvsikhdb5Wo9jh1jRR3MVtgzawJFHbrQFMkLrumCHAFBo2G",
  "key5": "5EVgsSQK2LfGAX5ifyhb8gmArHaVdNkvabiGf9bCy5THPknb6NS1JYMTat9BbLpcNNVcdwdnToFBsy7EJ2Es1evD",
  "key6": "5baQYF4x4xKyZwTsTmNYFeMyh5RrMLcst9Ys7UVHxQG7AfdDqPPTRa6w3s9RNysZ7NEXUP1teS1p7gP3817TgqxX",
  "key7": "5xxswphnnXfA1a1Tsafeaed8zTnoCKcNaaLCicM8Qaa7f41QSHTvictjcUAkrjzEikPv1LF3Jry9y3G9Scdoveze",
  "key8": "jxdorDj5BPtCmHRckJyM6mqLRNnbEFj1ruAPRi53aKNQUv5eurACYyuG6GKd7nqJzk5xKSnDZhLNHYNJNcAJ7r9",
  "key9": "4m1BE2Som6WZ84ZiVw59jLvu4RNmYgDRAf3WzLZH8FXbboFhmZ8LysDzkoq5gXErD6dALasusvdo8gYELe3XMSki",
  "key10": "2GLNNAyHUrBERAuXeWPp1sC2RLhNWfaj7Lfd714bTazGXxMbGwUtYuiwaE4JrsSqJ6VnBz9CJ2714LZk7ZwYxcs4",
  "key11": "96ovn3Kv3NXYN5xjSDf7iskZggdAn1yEETxJ4Zbqx1pUT2kguguGcgmCGf7qEhJHD1Q6zkFxQmxhYahhhCbnjRy",
  "key12": "4drqmp7FA7cXLL1LoBBAcTEucirJnxdpsDyW4G8uvPeNzFjk8mdHfMrryWniY61LiSQ2ii2VuydEhNurtqVHJ22Y",
  "key13": "659VEQisELDbRUyiFEmLpkks3QYqNrmuACZsFRTYeKd6cbFKLFPNYcp22sb5ttPmK5Hr6fWGByjwgYUm9M54xsV2",
  "key14": "4Rhr5cT18BxYueKE9VrJeQqUxp5w6EppUEDQRcqftPTfmYBc4haaYkPUeZr1Cbcdxz8KzojKNqMmSc98Hd79ghiq",
  "key15": "ZTKqSDCG297bJMnBeV3vWyqxUTMf1T1q62ArANTW6svqK6Lj4LAg1mZSEa2w51rax3yKNsoR4Uumuf28BbyR8i3",
  "key16": "5mH8zbrBh8JnFmX9sHFuwmVSEp6fzVAFezKEeFYh3DB8467iCkze4mcAbMqfcdbPPQWWPQ7jNRtb7zDw3HUrkDCU",
  "key17": "3a6NM1L7HvMsAh6CwMW3AjuiFY1DxkjgMNndjCLRgm7CjjgdPumFFq5cSM2A8M1cbUhjFqh9AvaPRv9b28M9SpQ7",
  "key18": "3yC3dvM4MzE6w1TvrYUzxMTA5Pwscnyi6S5PCEAaAFYWkDM1AZ9cg6acpdmr27feG7f9No1WWn51Y1eKBXW9RT3n",
  "key19": "4jwpHJakz61QTeQ4V1oVeGFMdDmEgoUqCWwvvezM6YcAQPrXi9CjrqmwWbsc73wxBzAGUQzuXLpSXPT56ouYG1bK",
  "key20": "gay6zCWsCzbfV2eH3qNf6ShcWdkzVcjyPtmcDSgpLLxs87hwHYoiMEEgTYgFqDT1YkeavVW4ftVyL3fw3c7vxbM",
  "key21": "5bGr7NRfa12GMWt1zQ1NH7caqdyPwXBrdETpupeJQ7TAHimQoykc9ibTt4Vdf3jUYwvdCGborLdiSz3H5Mc1Genu",
  "key22": "2SoX5vEVNHzV6aMJLaFjsNN3NGoyLH4h1LwgoBbVB2JWnLm5UpZyMW382KPaetFEjUSK5s1w24mjKSi9WFijmwCX",
  "key23": "tJgENx6TNCisMerjq3CcXXvDxb1NueUfsjFqAds8FjXT4ziZELRVS6MXrRCLoasxvhgbR9CPSpiU7osaabRYMUw",
  "key24": "4o2387oFHUenW5sgzSaPi44v4zMos2mG2Q96dFyEP2eiGAvC5QRpvoaqf4UhMASWHb5fh5H5Baog1bSUoT9yRiDr",
  "key25": "sbocT14Q3TSDboUXah2ectUJ7aXDPhEdjxs16XSmwR4THiJNqHoDr8yaL7KddgGoG7GVPLVaUbDwnYDcuzQb1Ks",
  "key26": "3DVzGQwyLUmmhQmGbPWgv2bPBX2JkWExvDhYhR59FJVXvQDL5AyE99yr2kAncP1FtifYrMWDyd2pTYkuzoZcsyyE",
  "key27": "UENK3Yb6a4KRxD4YZjy8ZUucm6eTYpVP5qjLqqyPvbrKSTUPqqZKpfstbiJqTxHAm2yh8KWJ6EAp35UiqfBpQaz",
  "key28": "K4du6dChZp2hY1xUZwTW7Wuq5R56JQozE8ACLs4GEhForX4eNQTz2jVbT2M4cEkTnaqtUx8X59x5SSQmTpDdXLH",
  "key29": "37rEfDfWtWis6nCt3ZJ62Bhf5bbHT2r6ewfiaaWpHcHUnoZH9tufH25V7mYdbr2aaBCSGQspzC3VikvvmGiWvoiR",
  "key30": "4HjmVDqEKTD26fmUejm4sR4hAQLjdM6eBvYZR5WAWTRnM8hJUkBXVvGsjTZi7uRXF6VBdXKq2efsPJP4yCmci1pz",
  "key31": "LQH4YzvmybdEUpVPvQ51HDwLuhu66VQs6U5uZsMwjmyQdC5PcEyDrrUMydepQUZKHS8m79RLdhGGCSGs844t4rv",
  "key32": "3drNvnfSVVmtbo9ap77grQzFArhhVcZyh5iv4XVquAj7XbqftEQbYBxXkCBr7Ag6F8YFXUnwNoPa9ZnrAHP78ogq",
  "key33": "2YxwKLNf8AuiahKXrEfs8jCuyDKDKjfVqXBtnkKTZUHzRFNYCV3XPqbUrRZKzpyVMQhzPHp4tsSPcYMhhJNkGa2F",
  "key34": "1HrgGqmPeDYmaZ2t5kxz4mXsNndULiMhWBMFX5hXvE6mGEdzBo19LFzWJ1DYm93F9V73dSWFTnLbp1LrZPnhpQH",
  "key35": "32PLdJ9Ur2G46Gx5UakeGjM4o3ncKnmwaqgZ3MgCVx52PfB9AueMnY7ohiU1c4q9FXWkcVbKqj6cGx7cZbwjtU3E",
  "key36": "46YmoxvkEXiYf8uhUGLNoXywLAPFW8nu25fzQ8brRuF6AhCcfvAkiqjNHNiuwD95MwyrwpW6y11s6mkmrmzhzdMc",
  "key37": "2JgpohF58gXvMhZPX1RnQFzAEkAMRsPJ2xHH7v5Gmr1pSgJCghV8hUDU45b5VGB2z29UfSR3Sn5DZshKEoPxXuQb",
  "key38": "5oVXaRERFbNHHdCeULtC4ozWHWMUBznkEmRDd2aYKfw52dUPnxPwoxdYxsUnxhdJLC5hYQscP4QutCqJC75SAwkx",
  "key39": "wMjfsAEfqEzjgEENuWs4Ux5mPaqEa2J5EbHK9dVLzU6A299baMw8Q81nAxv9XEqSBHBBZWUhd6egegoK7t5qutD"
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
