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
    "2m2MKTPGWz1ysYTRKgzhB5Kfzz3VLuLevGF4PPutyaBVqw1LRaypS7ST9h37syPouxoc3RkHCYHn2LHo8dhJZECt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BhwgdyQiepRtFu197FTpHzXvHytGcPCuVp5nKGkUftN1yXANFd8XWFPur3X2USgLbWzEVzx38UV4CabBv9rXCVu",
  "key1": "2A1o4w7Dh1Z5YD6DjAiSPx7DqDty3u2JCR4QRa8RT62necNJYa9L1QDxKWVGmySvS94MyQEZA3pggFFL7WzaXgMp",
  "key2": "b4p2CqiJZaaASshhGcuGVNtiz8XAijDja9V8BsccumyMVGBq5aCgTVczL3vE4rvfz86cERm9mJwQA4GY4Di6k78",
  "key3": "fHaVSJFXvQbXqp7m7DLG6aWqjkchfcg9a1Dosg2RbZ5bP4Bx9dRnH21mcQp2pFAB8okez2uXhPpcerrfYAnUbnD",
  "key4": "2tUoGc4vtqsxSykxFiWbGvqJqDBMVDTh2oALCbfTqBhfNKYsbe6k6yKZkGsXFm8c4NHgdNNfraWcPmTdeycgjCcw",
  "key5": "38cfQoxc51jMTJzQDVNBtsNtG8Lu7DBiCqpnKCD8Fwo3QECRbSP4zA8AS37Zxz7kZxVGudz7cyfVUpEFtC9Tamoq",
  "key6": "2h1rE5H5t3FgdJFbG43rZ4axEgig31BCKN3ziju4aF1TB6arYS9cEmgaYFc242s3sdMknv7T2WdNCXdk2U2fbsQk",
  "key7": "5XwBWVH6H9ip62xNBXz4m1Z6X44yW3jwpDCQrc75kaktmC72Lb5Aegh4mAKE86GYAhmrTNGSVRcmKad49PUVZ7RH",
  "key8": "2mFewf8Zji5tehyYAgbA4NDATvxyJYd8qGwQDVftovZ8fhhKmwnfUH83PZvfkxayyYYZ5krmhLjoV8SdjkwVCNQW",
  "key9": "3NcNaeGn6XsTUAA2hMkTNcWEpdyqwzABgtyFMsVGqr57YUn7m1AgpbHirQ32G5jJVEo2c9seesKJ6XRy2KMgBRuT",
  "key10": "V4q1MuHnvoLf4MHNTgcEHghH2grLWiiAbSM5qkBNzJ9bHDbij3vw6xBnnFc6dDgHK6rZJEbu2whF1hkTaWaQkhQ",
  "key11": "2QxpCQLYGDqRQGUUAgDAVrK5CcDzs51ofxfsAX8mN5Jo9bVeRNPwrN3LYYYE5VQwn9xqDuj7k17Kj3V1qfbTCkAp",
  "key12": "A5o4px6NKJCrWoSsgNxjyEWxPMihR4E74ckqBLw8uruwCCtoR9tASRabjL1R2L2n74LbjZyr143oZPv61w8nSkC",
  "key13": "4YMqjZMpSxmhJqqjYefrTpYTrFAiy9s4FDZK7YoJ8zrbKBuW7d83s6mqiyhPpwYU2p5LaVVhxNUMs391RxBGKP7Y",
  "key14": "5wxExfoSiJJjKr6R7dscb3nA7vrrzCH8NCbgcgx7UoxcHmyeqF4kgKyFxgVyH55cXyZ2xifFBziZpZWeF2XyhRTx",
  "key15": "2avAFMtvoLo54dU2f3R5W7ea4LTWuYxxCYRozbJbCsZnLzGXegryU9goRDQvFZvuachajQEHexiDnKcZY4CAU6yx",
  "key16": "5S9PVbA17EqhGoLyYG67g6NugieKeTDjsXT7gT2GsLQW9nmjCQFWhgF7pmSiLQjtdoUc7JyGv5ZQxoCMX5e1kiCx",
  "key17": "3GzwEZVrg9ZFKPGMaxGg8m5K3WkhQsgeDfgzHxig5Y9aoJpX1hkQHkNq8BWikX7vithT7kEvB2jryFJqy4r6sh1E",
  "key18": "4kKDF6v3M1Lgtv3cQoTpRaVPuQj7TZ83cqgYFTjB9xPDL563P7VPTgGkLscGhq4FUCKrUHEBdLXYWMzwbGr9NqTa",
  "key19": "4WaCTQ7hjMCxwNGqkpKZcEiENmmPetrhEkJkBUk7kQAsd44WE8w4djRELC46mgf4GRCPVGFRjdJsiBVPQ4abiy8a",
  "key20": "3qeTEmZJqHvLC97YK44WvskAQkoqggAGs2h6sCsyHzvuViyYoQkXu69RjoGsf14ieTpx2e76fHQ3zbjGNo3emU5a",
  "key21": "3uLx6EswvgHp4P38pYXerTyhaRpQZnmXvoQqQdX8txdHuCDgpbhhjt1uThkYe2cxALaGCCEQijGetdgY3eYCc1xM",
  "key22": "3wuaHieYptEGfofjDik3vrdVjdSftEJf38eV12NS5FdwNwkYzABxQwjUMaRN4kbSsWnu3S8XcuQkkVM5owWz8bds",
  "key23": "vmMYdAcd62Ck185sCkR9DwBgXdj2g6ahvDr9wijxZMs66TQWMxXdmKwJHJYoTkaCc81duhFRmCy9kGbqNzpXHDb",
  "key24": "35HjKwSopw7BczCUfBV1FfGKUG3qRDCJ7kzKTzPiFaWmBTCoDmRSiFqn1vkDELnBE18wzrYvdhjJYYWVYDtZV4sL",
  "key25": "tkU7rJxxNJSvRgsAwvixpeo9CHs6eeLHtg1XGyw83tk16A3VckiyCfVTpPC9Mm2kPgZXMAsSmznArsj1ty2UtHP",
  "key26": "3H6JmoLsNoQBr9PcUAJKFvy9jBGropH6qcFyymT6iwXgPdA9qNVT4qs7cvf9yHXM6Mc3DAF1fykTwXbNhTXFFyop",
  "key27": "2HqGs65EP7iXzustja7tWNRdKuazzUmKDPPocTf1uesfRk61C6ZgLZmbuTP7sPjfApK5gtWbWsta8wfB5Ne1ptYC",
  "key28": "49y4e3Xx4fda5AeH288FGFVqC2Cnvfcw258LSG6TMHeYVaNkVP4A3kJDeDy6onSab2aZjNViKyrUW7wC7spfP1f7",
  "key29": "2FifXeCixvVfFVoemeuRp23mpFDG65WYpvPRfE1d7MAnBywuL2M4kRkgtFRqMQZEhN1QKE1KfFbRGYVwPxeRzG7P",
  "key30": "AVbX8dJWPiAeBZ91xcQwX1E7KZ1o4wMj3UY5kjp9AJ76YCKEj1Sr9BjremX1ypfKWdZSU5PFmZhZzYxGapLFNKU",
  "key31": "3EzN4vX11fj8x4MFCmXA3fGuJZGLckiha7wfE6u73uDDyNCB6xFCT7UoB19GPN2RxkTdhhKCweE9xTpYL5RU5SqR",
  "key32": "38VcSuRamBwKSndUAcqxLFkJe7tRubXFjUfCATxzyizcVprB86vLBPbKWACtpvUz3FKTgAbHMUfjVujxfBjQcRw4",
  "key33": "4iAjUfRe5EfY6YdrqNd1fKj2YAtfonEbWwt5guvZswCWvn8q83TUeKLj3SRCbF9GXXQhiLtREpHyvJcxxRbu2596",
  "key34": "2oLJwWijnAY6ejKgc6TCBdMpHdgpomfEiUpqoc66Qci8bZkFGTKxQ1PdSKJhnQEJPtMTYmvfxk4U1fBbAQdJhrFA",
  "key35": "2fbFHqrz5u5m2Kgxk5o4FPNYLis2rW7B5vzNGLXLsoq7MRwzgvc3Bp5jje2yFyjjRLQx7nidvHSpcNC1aU7tiiVX",
  "key36": "5Sx8pAqaG18TS6JXCLDcEh4d9PJL8nRsVW8F8yPZ98eRnvxGBM3og351k8JV6gkwGbX5Yj4CExthzJtCKA697uf",
  "key37": "RRctqgfZUPy6VGGrJgHFtq5Hx2R4mcUMiBQa8eLYSyjNrLxKfHAFbfdRRcN8SBv7PwRc53Q6JpJAqH1LDPQj1rH",
  "key38": "3yF2J4WiadQsATrScWDHNr1Nnubhsiic1BJcw2K1AdrapLuXeWQh1uZ8KjCJbzBBNdtMnxS1GDBBd7shMbv1C79S",
  "key39": "3vsBgyXTtjEo681bD9AYfpmoeGLATBQiJBSbiDng5nrvYdhigSd1KiwPgsmebhK1B8cym4VXCt7GStVK8qsgWSn6",
  "key40": "411RVvbeqj3a1BAAjDFsy7NE1Fgu147sZtD9JT715ynEuPSbBPZfk7zztxmMogNNMHGf8ndd1WzHreJtARvjjeca",
  "key41": "3B58LbxTh1DH2FHdBPuSePbARiW9oxYos5kpExCsvTz8mh997PRKQGnPHMVtsob8oGCbtLBM1JPh5LoYK2HWuzQg",
  "key42": "2K5ZEUKp6eBW65prvUZUKNtyeMSbtYqZjiLQgbS97VqbJS1X3pHyQyytXv94K3fa14EzudrkiVfVZNLvehCreoWe"
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
