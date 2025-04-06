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
    "4kMrATvVX5fHC3MSfsR8AUhiVAqivfSSGFuKeNnjw3pYr4BEYumRHP62iFwpKKczoLQDabnVoPBxJ3KdwCxc5UKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMZK1cMtvTY3S3tnXZE71VEneq3wabhhATbUJpczd2KRmvYFPYDQ8FGnp7Lz5mjxyVE6UeTm2KaP6yJQLJBzZXC",
  "key1": "2b3UGfySMtiSA3KcgMjPyg2xyDGsUqMHbEFhoBY7kLvEL6eCweQmvnh5ZpaGb9QfdVXoBtjWpEsjiwd33ZCPR5w5",
  "key2": "4mgf75itePJLMJ4dzTpmTihVNHNFj1bnofVaFTz9WHn44wrjnahUdgZi9wXi5mE8Ds81yp5XiMvrZn6cuZBSeuk7",
  "key3": "5v6BCAyHmzkHbm3QijNc9LLyGp62jDVm3eshYmaQvXDSw8NvK5CGuVpwTDFnn8o1kQEiSJq5QuG9kQpgRzBVYSsx",
  "key4": "2RFoLsVf5JRgszdSYSQ3j56pVV65tBSqqv6k7N6uUpEorLEGwbjReEnxSPw53WN9daAEM4jpZAFcjvwvRavxyM1Y",
  "key5": "3mKfok1o9HQAs4cD83nXGjsPSLXf5teT5o2Bpuac9dNVCfUqZT5LbdC6nv1Umewrr34VMDuvYWkN6s7Gc8Ub4MKf",
  "key6": "aGN8PvUWFM4nAFXarUHR6DcUWM51FkwHkgddi6pNfmK9mWxSmi6ZcEN85wAYgMscuPmGhBpj9XRH9t7vHi9rAvT",
  "key7": "2sFhWEHQGaxDP44Vg7hzZLp3KDb7eRsUsnL4Q5jLA6zrjrww1mUfXBRZKo8D6jDksAZ9VnnVrDDUrfRXRt3hd4n9",
  "key8": "4DDEGmsSyb7MbCFNKhhN9CKJ1Ws8KZtawwXbKMJv91GYYBHgZ65pdX9C3Fr3CYgtJXbSAYCKJ4WQDVems7Brf6Zi",
  "key9": "2wPaKdkgbYCJtAvZc4qzgXdc2toNUCVtb7fwT8zX65bfTUFfBafw1mpuF7BDquAVQrGfhXVkpBFTx9GqzyUYrxKv",
  "key10": "4mmn1wiJKQQksfMtptgwMWry3W83zMpaJmhXR2w6nN6LdN2qxbeURfHyZjRYPNDWQwY7Seav16qDzk1EmExnodSc",
  "key11": "EigPzCoCpiPghaNsooJSHPVXzeZjECGvD7FHUrX4J55exvHVnwcKG9vhpRiuof2ArhfyyrARQ5gBLg8CPNxMU5P",
  "key12": "647ScxWpKrXk1KxsHsmtAx51orknMp8TqmNEYqwj5YXnBc2cA4SB8BMBePkzprqTVNY4yqKZstiKGJqdL6DhAQCu",
  "key13": "3mAaMmb9nrAQx682AiNtj1YBvTwhmveCQhwotBK83P3bsoHBDzFcsbPRu9ntceDrUk9HPdp9xVaRKe2AUgtahRjg",
  "key14": "4sZJh3pi24NWpdjGedSC8vDhBWs8EgwZ29Cy4o7D5PKaGR9u9ULb9qGVrekZjHT1S8USWHpnfwuPBYVxqSm8BAaY",
  "key15": "gBD2z2hovBNw7Uf7sasJthLsnoCypyTuNS1NzGJk7zqzPWhMvFpu83dFVM7SfDgKc8Rs7MSg9csP5c8ved2RKQm",
  "key16": "69uJtyfqNeps4YqY8wHfP1Fwhaxsrg5PZxrQRdmssaTK8bT1edhBzAMAzptDQNw5YDhmd2virKGiAnBoNnjW6gq",
  "key17": "38SRc28XUPtaPRtzc6w8BRMvvAhWtQ9X7EGxZeLc1KHbTQKrzZ4qV7fDMbLLCesuS4eaZv7WEjUyDKiqidrijUNt",
  "key18": "4HUnY1mb2Lh7pbsZMn9M5yNZPMEBnnL6f2ndgqSraBdThCt9GBrmG8mmxebeWumLDvYJgztkTXiv8pYan8v9HcoD",
  "key19": "4J28H31XmQZ2YHzJhtDYFPeFRr15HiArjgP6BX4MbRi7gLsqs3zie3A3RcM1mvLvSyhnY4b5p7V2ReQvPt3wTRyN",
  "key20": "2h8BT8h8SwTdpVzTXm7xH1Y242HYZL1j1SFX3DcAmyBHxJyrEVcj2113V86ZTbmuAm6d5vC19roUSt7MzyKcgpP8",
  "key21": "3RjaH9Ls6RHBE1CADvevQqYvzXSFnUTSQsuceB4qUvKQRexDtJKqLjuaxpURhsdyE5Tk2oB2y7kGz3NQYSV5KR6f",
  "key22": "obzP7aic5PXeWPy3HFriinemgG1PUtYpAV6ZtaZ5F4XpmKYv8aKe5LUBfHwQkwq6768VNK8H1KhMg7KWLJmeY9G",
  "key23": "CoXwTJqqfpTZsMvMuXHzM8evgxBVnWdxWtobrD468AqXVYXc62j5LMyTJpvZkcvTowokJnm3XsMFxbUQSEK6VK8",
  "key24": "61StaWHgsYvWtEqJ19Rd9yPzCybB2n5drmaiya7xPbdVMCuYe9wMpahT3NbsLYYYfVB9k96uiowSc4tVfNqMKD5f",
  "key25": "2uaqb8jfVsBDRDwcQth5nEK8N1GXL8ksyePK5pS8xvp1FC8ohu4cJFDRXv76eYM393tQtYNtvmGMg5A6khcK3hKW",
  "key26": "2EL8nHqzHhzLK3j63J3H1snDEaquLuFaP7SBdioRZB1ghaMTpGUmCuUJZyYD8meRXtWWBxwYvRS5MJyki1Rs2L3o",
  "key27": "2yTLQWRHTM2FqGKwfCVKfN382Gf3HyJ1wX17Fu92NiXQZ997ppJ9LL5BAg61ptawzZiJScGHLfppUtEs2btPxdjp",
  "key28": "5nXExnMndAdf1TzA2ctdwSjow6rTfDTv9oAgJsMrw9yFcCHyKsHKHYde8RssehaU1nbkAuM6ZX8W4Yip8wA9LYkd",
  "key29": "3KKkv67NGnAVvnXk7KCPe4gEfvCnmgETetxVTvzV8YrqSzn942ox4c8a9sUKymBu7dbBe2dLFwET8MEn93guWR8K",
  "key30": "3ABbpEziz6hTLu33fzNrEMKHyRxYbKXm2CTvJWuRMssadbVpWnf18vu21y5oL86SVCtiKPzX8WEuyJJ89vH1Zzis",
  "key31": "5sFBKYF2vpnwHBs5gLARpD1Lk6P46DARM8bnEFWyxBZd1GKpbhMsKLh1QVwGNonxG2XnZepHcuREyXCJMkJ3ko3j",
  "key32": "5YpGnKDaqgnMrUTxjWxuE5gvuZ9ks3qHp4gWEfukQ7cBMBMbA8n4feQSefgp79yCoQ5dsLyNHrHnU39QG2LxUSFL",
  "key33": "46RiB8iJoUdS6CwvskDYqm6i83p7WEmBdUY2caStmwcZbEDd9iG8k9oh7xB4vQBRJzhjHkWQ8y4nEr9Zp32zRU3W",
  "key34": "5Qp4osCGTtap9FotR4Z7RU7evqvsHt54V56ndfvPUzKDRPYzDYuj9DqheLALLVK4YGTR1RYqU66sY7bgeLbhGXEw",
  "key35": "5rUjMqyB7Y9RTZ513hPGH17EbBdp7Rchq8zyGZMH9kK1rv8GToGE6q2cUL1Ksi9ukTavUW8DXCQendeAcpwmAZvy",
  "key36": "5MykdTNVVzcSEsbhi4yCCyriKTqi4E7ZAu6c1wCCLAYuLmvVFRnn7SkDaduYgzDMqrUcn1dSUqM5GMfHagP38ZNG",
  "key37": "34VFRtBaFoT1C23WwTZ7SnYvuhZs7wG4Qu6CXcHFRShzEFGm33sXeLLDiUsxVDQBrtCoYDfKrQc3pGefVRwQaG3W",
  "key38": "2Mz2aAiT7UkizNt6Wy8U9A3tPBoqWrEnsnjawecWkTYWTvUFvDA1AaCBeg72iN5BmavUsukoTkisRzAHDTDFpgZV",
  "key39": "4sS3DLRMN6pW4HvaiPatCsesfpx5jEMAWJSa4iaRvHHorYNhPv6YRY5wD71VbpJuGvpY3sngzVLf2diuPM5pwpUD",
  "key40": "3MXmwe1gQupyZoJK2FRJYE4zF8RzcjaTCPtfyJfqj1cTppHfZ1tyCm7NiSJyTHrKkLCXbZdpVA5cmd3gBtNNZ42E",
  "key41": "3wSwBtWUrNjiGy81tKReQYeATmxwwyfZBGRvMs5LbN4XPsAb7yiTTu8TSvFesKkCCSNdENfHhzBfvWH42dDfTmeR"
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
