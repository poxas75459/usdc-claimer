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
    "4zRiuD9G5wBVHhSaErRsrhQeZnv9D67Yx1T1EDnJUxuYNHFPUppf3S9UDGGZnjWAJKX53TjcoCkFBCQiyBZbGGpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AySAECVDEcsJJpbTXQqA4BcapRTNfvvWPbZCvaoexb8xxSdLkdLYS9sD754Hb1FuU57fK3jG5RLHB3ptgUG7E66",
  "key1": "3zmhoshaLMs3J474KQxDUGnpyU7PW3tMytf6S5tUe2wPJkUT6LSSYafkNDS1ykfxvXBNYgfpAa7Ds6e7MB943T23",
  "key2": "4wCXF662en3Tfy6kfR3VfQ6AMXU97trNELr3udhummMQGj67zwLyt1BvKkJiBG8b3WKxdoZnqkyd96ouXMPrVRmw",
  "key3": "237YYjegPC7A8NFLdBzreT1JUGuy8eKGrxVEXVrNzrizsYRgq7sN6VmYzKztCPbiFHwmbDn32DvZjVdMys5TA5Re",
  "key4": "3Misabp6FbA4b6jboVeCGiRrtwGg5idYA3rTqMRACUgbYWeu6YNky1bV6yJXyAYchwxgFq8cfKtUC7bu1H6bo8K8",
  "key5": "3BJLDjuDNFXsc4DqtGMsEQ98AATm5KmBYXvpid4q9M5BGjYFmXiac6fjTnBLozUNGakM25SCbJVx3urRz2M6jXCM",
  "key6": "3RR5F3xagmktYpYEezL6kAbGBUpEa8NbSMmTX3mZJmpvvL2J6HtE8HRpDnGxHBsZCnV3Bagskj1Pbnc13hmq92Qm",
  "key7": "gfQqnQWRNr8mhtSCvdfkA2N5aPL6roYjKrvykPXBqMKDFL7VsS4AGT1iuK1tktaUD8fcAd5GvkGWPmRFGSFFjR2",
  "key8": "4tQzLn5CpTCNK8RzsEsb4pFNePb88UFkYemkZXxsbxWLPtjaBdCsFieJMyGRzVDnVPkjftGcykVzrSZTxC2Cpxy6",
  "key9": "VRNfG3MomNPBTX9nrARbHpxjCm8uJJfyD9NXHv1txCnfe6hpp33R5u2PR2zTrcy6fuE5rytWGoXJykHo5maZVNS",
  "key10": "24PEUrVJssJx5KVDh6xMhVHFoTbstHJ8vuhnJwdii44iCtinEwaA6Mn5RGXnAiLUnh1bprKWtiSnDzGura43u8Qu",
  "key11": "53DcnwSkcq4caD5bmrfvD8tWd2RdJZV74quhWRyf9GbC73Vsc2bBpV6p9hKxUgWss731jNwfPMrGBcutSDtXiVWh",
  "key12": "3KhtoFuYWG1cMu4PZYQtXDosfP4vF826yhSwtit21rQrTsqrFE4rGHryaANi9GQS7tNkTXfYtC2oPepi8UhGi6r",
  "key13": "42Xxaw5BfEFupdrVEEWEVJMkKUSD5BBZyjpa8ySDDykgCMXUj9kRke5RtawesbCwh85EefXfpxPCdiUNZtu67ZPa",
  "key14": "L2J8M88C1ur3JE3yVo2iBmHXN3bcjV1bhqwxRLcSFFA91QitTBJPD9TZnBmJ9T12TpAZzRf8f5VGNhnjmJkBWLC",
  "key15": "3hKMU6AYJZ4bzLMeZJLtEho9oJEeZgFQoGaSoebTLN7xL1Ss37eJKY9MJX9i5k1FRCZ4ZFVq3UTTPePNqKuCvifM",
  "key16": "3Y3v9CKzaoywqS9EkWE8fkTV2mWT6ewaEb2so2BL8qF5bj9t3ifdaJScuzpuRQbV8DPr8i6NxLExeDAq3MKYb5kW",
  "key17": "Rg6qs9wcDARoAMnuPV2wv4y9VfqmAvC7LSDanmikkYhzVQzbqu6MzxYvLcQLgFVtQU2GLC61pE5t7P4K9M8esFh",
  "key18": "2ojvvs1fARXFv5P8cPm6SQXS47454nxuZD1FhF6YdaBQ1sF5J13EooxtwXzYrib3GMV3L7tbxknZ8Zxt1dYjK6Q6",
  "key19": "3HNwo4uCM9mMx3U9BvRRph6a5Z5zUnWeovSDxbELni5Vim5QX3eRT6P9J8PjUs7hzJ9cWAex75SwnLmamCcPFxZc",
  "key20": "54boWiVNBboDUESpwq78HFhVo9yHr3nzXekAXauJn3vNthd8zSPui2w6pYefGzAXBuN8qXejXQz7nBD3oYTWqNn",
  "key21": "2Y9RkSR7bqc3yyVR2TSdG6GKH18m4uKhwgChUVqEdh36HvuoBXGnw9LQUdC8AA1YqVDB9t7WecGMb3hSSr4pSnwp",
  "key22": "2yCNYy6EKjQRABs2X9xu7kaJugVN6mYACrJGSQq5GH6a8us5cEjjDSGc9pCtcKehGiuQTzV5tZ4a3iVPaf6PSZ9p",
  "key23": "ewsJZJ6ifPGCSivJmnGr1VuiSCkkPdVso9cAnU1KeiGjXwb9uns6dsUh8qPwQRHXYYeGXV55saMMRhDwZ9Ncfrt",
  "key24": "2fEy9h72mwcmnL5BCoym87zQkcHZyyBLvnfcXdnhcxntfLw7swNCAb9DjJGJWmP9YRP1A1DLeBqoC28UXRnaK8Jf",
  "key25": "3moDBxgQMYf6XgyC6EqUkefhw19vX9Dnw2inNMrMeFsHAetoFgSTV7LP6tJ8ynZNv3XsFAaSYn17GDz1kGqNY92n",
  "key26": "y4nQa4kBnfurUSddPbqcy47rh1ZLp3D8JGSrfTmZjbh6Gettuynz1FvKbA3kShtSpzVt5B9ZiGALhtpV9B88NjC",
  "key27": "5tZyUEqVFYvnsyGCxZFCW5u24WWjTYnZeQjh2R5g2dSQt3H42phhcqPdBixrU5gBGYerU5QyzzKNr68ahgKNMThE",
  "key28": "4sM8X8yPNuEpRjp6EeJNfCzrg2neV5ZriA8QD2XqmXhaENXA8K1NNKQ6xUAAYPCMngauUWwNZUWFxAJwGmfReh48",
  "key29": "4V6CnvdpuTydkQseDuaqxvHYFZBUeK4L2U5sVaENv8ZJEFYSzf55hAPz92GM4TxZKXX4kAECFqNQnXfdApC5LEFP",
  "key30": "26uVHgz4RKLnwppRASwBuUNfDeTVqXP93ACUcP6vs3Bk9oAyDimGsRLYKHZ5yTpapn3bGJLxZ51ds4Zui4rpoBKZ",
  "key31": "3xcgTCmqkA7rhfNcS95RdY1pmmFEhnD4JL5BzvnBMQqMSQFm3gazgg3wLGive4NWjkH4w6JG9h9t91ZnZ7GwTVKz",
  "key32": "5hng7WGW7Tzsv2Aw4fiEkYWeLYZmb5r2pbASGJm4y4xp6BbpJn2DhEFG2mAzQDgnXChNvSQXYBbNE2nNpuKReP4V",
  "key33": "3aRSp9xTwA9dPtaAHZJHJBRpP6bgNYpiPzoYbHX5hi8pSgqUG1g6y5fC36LkCmkjP8Yr9TrK4MeNcg7UZ8G6y3wv",
  "key34": "5R3Rk549TiGRe394YewQ5fZuvus7w3TzHvEa3SaCY6WGcQGDoELEGKxzFrrPzw5h5CGXXTBRtNj6tNzSjDEbjmxS",
  "key35": "442PQQQTW7ZwGkYAF2N2XS4iF98t8AHiqNWUBCNzfXXfK8Z2kidkocBf64jYc9y35GPqpPiGN5EQpqUncoFhEFwv",
  "key36": "3hM7EBLKEx9Uw7vMvmxKuKjnwNXzPmUMxxALqZa8ytmf1HnudGgzVArWh6BZVpXe7sCT3oFShbCefRcpSas4sZbX",
  "key37": "3tx3fZ5EZL6pbNwvQdLUSwQ47XogjMpMpk2cQuio6hK8qU7MrLCDnnJKXkc7AcGW3hu67zQL4Rjbc97p6tpoZf8r",
  "key38": "2mDYrWBR58B5xQtzgCppovBRJRq4eb8d52uD9qkNg1aMScmbCS1fH1J4884TwQNGTmHU7xm5VbWy46cfMo76j2Uw",
  "key39": "e3figDA1paqwRSSJQgC3JQSXgPs681AxvZNhegAphfsk34X5DSBfiz4G1ETpbAVzDFNWA2ZUgbwt82AeSdKtQvC",
  "key40": "5ZrKqPCDMoo6QHpRopeASqhvKJDA9hE6FdQz4693W4Du66pZwjT7aWEnAFyfVrhR24KAshbH1234Y4xDQWrQ5ATd",
  "key41": "5wNZsw5AzEADBXw3cJrvDLceBFi7J63ejQK85cy5qMyk2LxoQdcsWa7nmy9ng84o1bdVhzLzZKhTCtdVRP8XYQKC",
  "key42": "23gpoFMYtyzTAVoaJqKN7rkptXuuG1Ddbr7FeEwuxLS9kxc5vMcyXDbQbqag5QGFtU7xm6mYs4HMbmwyNAjb6NAH",
  "key43": "3k5Fo71XGAaH61xeUYPtcmHhxdav8oWEHXCt1ipWzKoEN7d4puhLJGKZWbHXJ9hiRMdobS1YVryZNQEA8BFaydNx",
  "key44": "3jv8AvTG1MCMeJk9qGiqd86z5NaA8AEHtzCqKdnpEM2SvcrTALqEJN9Yiuv4x3x6c2Rga82giDJhnnDcH6KEDTVQ",
  "key45": "45P6R3toLSwknyQbNMZH1K6VWGhjJTkWGzcM1SUvPgj8xsbCpRqcSEKhRMVrrEjsaAMh1avXWzQgGVUnUJYrouJC",
  "key46": "31XipcYaPpYCmhixvjrqncCPc5NnAzoPq2WrNeoSQTAxKNp8QsbqP724u7HVLUCwNgFMVHVAq3P3KqAVU2dCp8yE",
  "key47": "5dtGoJn775dQBUS7MFLff1AA2GnGf8bKwWtfEPhMbLiNicYDAPK6hNNkVqbA5Fk27Z8n5NHPnvPPUqscinhujW1q",
  "key48": "3w27vLhyELaMLb2qDdKSpdERunKKtmXhGh2bbHKBED5A96CiQ6vaA12QwGy9YmXqdSnjuvowFERdTdE7TtK4T3kC",
  "key49": "45kvkt6SSixZLnNXnQHXN6etUKuPcCDiHxo5GqNRB9usFqSRcbFetPmWQhQVNEzTyepcarMxb4pDYFJPHsf2YYLZ"
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
