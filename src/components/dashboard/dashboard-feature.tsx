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
    "2w98bA8LCn7bZrHrH1VBZL4vFt3HbrEocYVj5PgNZjGFjsBq1fJh8qykacsaF3D4hRBpmzS5f1GqnrcDmj9ZQVHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vu2Q2nnncS66nbWctjPLuEBSWFxbHDU3kh9U7Yus5cfrP8tZAGo8wZtwsXPDQAptye6ph1pNUCXR2ZSUWauya2v",
  "key1": "sfvB35irBtyvfAPthbK3LFvAkNH4yKhGvS6eid4wrchUGdC3TCuPWJ8WAwf6CrDjePFcWFuZSgzeTufRCvS5Qad",
  "key2": "4bqQcp4tcDMRhk9E2icaYvHkn8j4NfdkAiERSUP6Nbz9WG85umBzfL7hj572bK1fkLcSVUV4CCw4xFHhFuf5vAQZ",
  "key3": "27fV8akbpqFiiaKtDKHPCwAFgwuURfMmosqcM6g9vANwWiHxKetYBSp4rsTXjwZXyYNnZyTzLjnVfPwaaVupW7b6",
  "key4": "3Zw3nnCLGFFEQmqF9bwH4h4Rs4EocPedcGcyykqbKg3GctH524QP2mT7Lp5FtVqppsSRzeTuxwv2cjJuoCV94kQR",
  "key5": "5YoBEhdBC9aaiF7oUPUjVnXKyEGhGxsPVFddPbbhJgexujaWqpfiuR5oEqk6NEqonumQQvmd19C9tAuJ318V8xF5",
  "key6": "2Yiqx11iN9RY8bK5MPBKUY878qbJgcbvzB8c7KyHrxGRvyuZDmRdR5HfapgHrqM29Kp7Y7Ahb34oYNkCNufPFMaq",
  "key7": "2hwGB9K8QF3UaS33GZLfMxp1dHjMHeUh1dth2VFWToqriDLrZMtrhYgXS6StUxwWykcZnkn4mM3jXX8nZzSyoaA5",
  "key8": "3jTtvA8wpw15GcJAHsocPcUw7DZ8fPCxPsS4v7r3pUSVnEchwinHT8LGDRDBYdtis42UivzLMg9TUnYsCxQfzjC3",
  "key9": "5Rea1xJSVo2DM88anEEZ99emzAvPMFC5ZuEbHE8PC8tigN6EqeViNvkeiz7aVVXtDVfhPhMnvEGqnWsDov64SMDQ",
  "key10": "2XmN8L7XBn4Uhfsggj68bFahA1Ckj2bZ3VJ3f9iTgbDsEMmS6Z6LaynrnPaZu9pAooTmmppH6jde5vGwBy5iorq1",
  "key11": "5cNeDNoCNxaJcPVFSN5UEFb4AjaZbd8nMuXVN4gNw3JFVPD66W2vQEJoS3RemdvMNfAV6dohvs8Qi4PYfM3ujV4g",
  "key12": "QcE7HUNgajZNgKbFnz7qozykHqd3ghs8wUYq7rKWFAMY4PzDYdqfKZhT83S8BgvsnvgcVsqZtyonRJPpX7w38JC",
  "key13": "4nHaGhf1WJ4UUGPknNEAfMhzTBZ46CiBhRzWTxEkKpXohNwqrWmt5WSKQGpnqkNhrvaNiv2tJpuaJYtdeCpS3Wpt",
  "key14": "4mAEKa3Wvx49fGf97R5dAWmYvvH84XXectAo7tzFEkGdvEi1VZVtDz89zveLo8hQ1yApL3y3426cPTNHTiLA1HiC",
  "key15": "67HZShfGiSHSystWY3VqN2qvCkmCHsHdxbJBzs6R9ET6dGvVpMbh84hMcJ9CUiCbeDs1pUpu4G87pQT4Fedu6hqf",
  "key16": "2NvVxB6acwwLGNpvuR7ri73BjFzoVH7cPyJAuThSMnuKzaRdqQnvjWgezC5D1c9mBNNSzzVNi6Scnf8hLUEX9meb",
  "key17": "4iFGyaxxYhi1ddMyrVoF5ZuzRBBqpmyBr46EA4ZBRENBvyNWygDbTzbCVURHZm7nS9HMXWMkqF2T2M9ADLsgeyMQ",
  "key18": "1EQ5Vdu1FFCC496N92QnKoNWJRvSjsgn88qxkR6Fo1PujYBSgrWaYpMrGvka9z1W1oL4Sh44xxs7xxykYE5cbrT",
  "key19": "5ot4yxwSZ5MU9c135gp4gLAxsxvbmcQAFJ4wT1iXpxygWZ2vjxinScrL37i8fc8StryqoyBXCrmWZpswySNDMro6",
  "key20": "4RjYar1qyVqzw7fSoduXQDjiKHbCDVmnCiqJudcD5Vsygd1BgazgmfHGmGFfpqNpCBBJWu7QHzYUqAZDHUksq5F8",
  "key21": "4aBx7eTtsmwuJNqEYrdwyahNGAJzsdro4q6taDDKMCMgVjsvu9oTVMo9DBSzxVMCe2o3vngbCQA8mFPaJHzbLL5L",
  "key22": "5jHnUiwSENC5sGtyWrs9gP38bcnu2Boq2FBdTa1gCKa5F5qrrt5mjrdMgYie44bonfYjwt7dgCBPjpQ7JnPj5m1u",
  "key23": "5N2WxuHmRsXT8LgGcz9wfSSmnAT1SfPsce6MTiZpfBJk6EXKMW2FQHB5PKoKiX6sTydSYyC97AMUKudLvefzNXTC",
  "key24": "An34M76cgN879hvmmj8afYZzpeVaPSHGgD8LHoMKhC1eYnTnyQvKxKMeURydef8Ytrfx2YiNDxoBh2S218Sh19Z",
  "key25": "5YafvHHWtUHJoJr26U8fjzXR5iqDHAzxAyRmnqP7JDuDheEYLUsr98jubTZQecRgWwiQbtbu3QE65Bysx3JAL5h2",
  "key26": "4tiaAX3R26qLVfdcPGGwB1zVmiX6V61ToR1rfRRugKfjRpsG2Tnczj3u8akF99tauKXBxQYDY5APDXDsATSQaHJM",
  "key27": "3QCVT635b3hgwjZWJhDt3S3Kg7fbMdU9X18CYVfro98rELNV5U3Qkx4RdyXXiyVASmTAoWzmEWnceQQygnUWE1F8",
  "key28": "2jqXNh5tomN7ZrNjyMWnYGDoy1YTYvrvHKXqFkonqYotTA5VxnV5QgFvPZ2mYBT7LF1VVPfej32GZpGLgyASXjqU",
  "key29": "635gNx5mVwN1c3rQxFTQ8zuLAjDiCfaqz2eHCpd8jUgxq7AdmDjvCTZXjZKctoAHG51PhMxqU1bbCGPXsy8qfJ8p",
  "key30": "244ssAinTpP52AJBtZqtcswCMrpqpHLrx1cDDDBfYzcsANQqrSJvMfPxWF7CKtp2ssGv697WUHctKRM9eBp3Vmhw",
  "key31": "31TmgKGbzca5xxe7E4e6VCYNZpPqDJnFMGesZ9tiZ6MxXBTVZPXQMuetCEB6dGKHqvgmt72zzWNtQfmP2m7fxfFS",
  "key32": "5WPxjUo81qdfp11p3Pbp12c1Dpw6h48JJKQf2G6fhg7jAXiHaD9DXSdMtu8BggTdXHxciVVdjm8X9G1i6W623SJf",
  "key33": "3YASiVaCbrE3ZoDs9xVFGjrLw1JDmdAe8XtAaFzDs7CDwwWfgy8WJc4RTYyhyWv3RtiyUrjR2wdipDU7dfTt3LFs",
  "key34": "LKQNuWRRxTo1S5XfF3rmrWyDKwupeJjXPXfeVYQMiFk8KqjQsbG1cyPkKNBFZG4J4ASrwv7RtGBAkdyYW8yutLp",
  "key35": "2qz5x1QbiSP4S6xqucZ81zA3NGm5bmNuvNej7fbGNNwy3iAgrerRL7jdF5rsXcjFeiysvGoJMXsLRoma38Rbprdj"
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
