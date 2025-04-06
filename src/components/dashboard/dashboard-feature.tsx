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
    "3tCgpYatpv8Ysnxy66j6xbqiqJRpu2XEzgcFN7ohVH8esL2ZTjEPoA9ioDUCaa5CKAuQMTPfYXXTniDQKh21PrFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoDkFJ5haGRyfNwzdYQwtg1eXEYsZzHtyCmJJdoE5tbX6crd9gfN1Y3RabbAc5x98P3AJuuLHbtW5b8gA4Xswst",
  "key1": "ix2XEZsHq6DSEHnrn38ZrtbxM5U5S2MgFhmTgCePtowjdLWJWNn3hUmaBkaRTDv4hLP9WfiVA1WtjzCYQ6pJkVC",
  "key2": "2VWA28T3kemQ2tZN3f8XcBfpGqMsrDZ5sYSkrbDJthwi4F9ChFFdKj4UviqZWsKswuAsUHnXhMDhKze74WSKh4QL",
  "key3": "54t7NywEL7mwnyntjH1VG5Hwd7qzSD2Kh5k88A2gYfhchMdgCTieKHu3drm1HrrMHQoi5FAcgGgmM2xhhtdGS5tK",
  "key4": "3hadnDTApFHytzhSgCzMDbtcXU9MYjiMRkReGvdXC6ctg5yY7L7XU1ZULnaVuADePajn6QHS3zZt2R5YRdn9R626",
  "key5": "3DUfdCnY2xdBMGf1Ct7aKXGtG5pi2sJrpxjzA8mBPjaun4sdnhvkBH5PvmkJ4J7QNrVKovtjbb7d5YtU2CJWme3s",
  "key6": "5ZSDTZCqwMrudMui2QKiZBTKAknnFXSMzPDtJc3pqwastbna73NKgi2av1xJLzfxwYWxTGeAtYr4tRK4HYhVFQLR",
  "key7": "42muySJ6Y2a8UcweapJbA3fUkiLL4Tqvi3wVBQ2wJktjp2iLHP8YUoutu1jZg4qXjD7ogAkkeAAZrvoHpsCF7tQX",
  "key8": "3iui9WBk3u1Vs3myYx815XsphXUFScQC6HHsVWACg7fHDMHzYmiaX3u186cdH2VwhiDvswthaeknHKn7efwhXVr4",
  "key9": "2VGNEYFzhEGfFLJ6798QzJ9aZzuKdoekwQjZNNG8sRnCuTptSvHFDvmiGdCoxD8BufUqrWRq2NzaWjtLjW3WYQiQ",
  "key10": "2whd86G5NLAYHo91SNuBJEfFLobmLsNGMV9xA3xRpxdENXcCRHqzLVVfy4THzMmYdJQ24m7NxQtnbFd781oYhCCb",
  "key11": "61M7kyozATGsNG55J4UVt1Jj8suWe9ubWXuGWmTzCdkKSrPMPa38FQKV4WzNQLTjEvLJ3KghcSo3jNmr5Q6XJ2ou",
  "key12": "5WBiPC3KxwvFtou52m7UyuMHwXMcrVqaz64JWNSpPjpLmbFE382PPUT33gYwsXWuAdNgSikKUtADvNuwmtDt3cZS",
  "key13": "66bbZWwxpETvfwZTsXmknk4rMDZNUx2inbVQ1yGRmJfAGQfCJ7J1VN77Y9xEWRYDYaAcY7Lqd9t6wvzyxW71pFyo",
  "key14": "k31eu1iMk3YnnefsppZp6iX8wTbNkNi1Fv3P2hLEKmd2UfGfWQwDdWj5chpCeqo8SiKjL9RwonfcsSk7tRD5M6a",
  "key15": "3KDsZLXqutt3pyPp9gdXaF22NFcfoWh3x581TCeHESt6yKv2szzvbWiyzqB2G33bSnMRyzCXgVezpubzBYnaivVG",
  "key16": "2javX3k7aDziotoRWu9CoPmjXJLnfkQtpAZgQSm1tkryMnwhnKKcPooqwySUYcNGL3cwUQhsy4SPJUCH6D2ary6o",
  "key17": "2JAWYojaSqqhYcXsxpLbH2KnFcTwv85iEucFLKBDbFmFK3ZGMGssniAQBfuvg3qwqaWXxzEfADGt8Wg97XoB6Fct",
  "key18": "z7f87M447BLXf29RsNywAbXQEXRsuxScnvXhmnAShLMCk3hxEJCwBGYzithWhULJcq95EUMeVwr8RZbmyh5mzwk",
  "key19": "jBv9ZLmESts1GtLZwua1DftAAerfvNMGrxYxBKyy1b9ebbAT1SariS25A16S78wq1QKX92cW3t3m1qPWGKoitK9",
  "key20": "3JrDzHBD82m5GTcaQFut9GnHLfF61r4twL6yCAMiW1Yxo7fW9oMSTWuCoxFGn2fLuZqR5gNHgNqopH4SpDBoY2p9",
  "key21": "5Hp7C9VcaQtte9nypKLU36AiMAEErBFXWLzCma8HExTbqwnak7sRR5ymSeVoXmWE4Yhy142Qa8u4StjmxZbZ1f8u",
  "key22": "3Au1StqyMJpNnDbHTcj5v4WjdpWmeSFSSbcGFPQrqvE1kvxXZuRckhUHfGmbcGju17ZczcvoX6Cy1cg1EwRhzo76",
  "key23": "2WWttZt5uYtZfvxqR2M9znsFVoyJPn3gNMjrzJTVvTh4vjCiaLBoqKy36BQR8ZD385zRGi773ErcEuJBuoriJ7oG",
  "key24": "tVmTC6QsvkY4bDej9PWigie9isHPU3ph4K2BkkYnSMgQLpths1VN3bnngAU4Xc7yfpSDLGjX14J4dp2cVWYc8dz",
  "key25": "3my4sWhwuaDRiuK6cAU8SJEofD8QrkgdeNSS3jcdYcuPmBWE6YWSF5rEyVZW7G633HVS2jBNak5Tpn2ugaR4tQzP",
  "key26": "5SMz7s1UC9enAVQyybYaQr5fHi8WXGi7G1jpvWYMALZcoNmVkpQ7bZHyvs2WodR4A7CSA4V8rhPzoWE3LmqZfVaY",
  "key27": "4PwCQnRWQoiYyt96G4sWNqEmpKNYi7tZAfYxfxPixyYW8XHcLhZgx9Qk4Tn7MpEyqwQbzxVRSpKXu52rAa1m2XWa",
  "key28": "3CStXiYabPmxGA2EE3Xk4nXNd3gkqf9VJMCiFr32xaYsKfxfM1TEvpggruj8UM7i3fzn8A6f9qHVPqdy2q1CBU6i",
  "key29": "4sYxuvezzfrawzwdqsNNsZbECE45b7xRdggxCnpmHoa9ADVqvEMWsVjYASGTezY3kUYH4Nht5wbkyuoCufAvw3Md",
  "key30": "3rXvAB7ipi4DCfs5isMbn7AwBJEW58tFz7tNfzXYasguLcwzBhZCrpNhQSp5df6sgsT3fEyBhepxWCsLJXpUnqTy",
  "key31": "SfKU41eT5b57KPUErTGMMCp7M6cao3WB9RxdAMCALwKoiW9Z7mc2AfLH6UTQnwxf9bCtSkP7edZWF6bRnbamar8",
  "key32": "2e9TygoYDf8dR3qewQx2oW7cUwyANVCkHQm1VFVzrqXkqREFy7ZbZsbzoja8pZ18K6HxKfGJ5hqsx1w8hWhevqjF",
  "key33": "5xFqESGrp3wbVjzTqZdC7JekhQJUz6xvqpr2qaKh4hUhHLMmY6evyrqooeN1KUSVdLdfPBF53LQNXUetVyrDevx",
  "key34": "21D35R4nCiwJpJGTvPQ7Cc3W7mggjfxraPjHEigfr4w2QjC7RbFezaGNWgG4TtddmrU9W7NwiHF6AsUdnRWSsC2u",
  "key35": "2PaGi7Ey78ziG4a1X8okfrJHHHz85iCWMSdGsDL6GPmhtZJ5JVSXebxdE264oQgtEpyfFgELwGwiga16oGWBqm5H",
  "key36": "MmqyhHv2op9aCRSNHPiEbVZsqJi7UqebtJpFCaHZPAaV2XiTgJ7JgJ9XdxYveSbdkVqAtajJxxvUDuYeuHqZPep",
  "key37": "44PyjixE8YYDv6UA5otpkMujnuTaArEE7spBjsy9LWdwT4ERNeZC6Y5wK9366eRJucbhvydRVV6Mb6rNKSENmE6Q",
  "key38": "3htMAM6vSEtUatDjzBtu3ey3mUMMFfQ8LeYE4sLtvARyHVQpHWffhe7cy8F9xowghPxJ5c7BnJnvM6NBpU8f2gDf",
  "key39": "2WYUnr2gP1haYJe6knQkrqF4ByuBQjYAbD36hmLrmgGgdLR913FPvmotsPzNSK7LqYeCbHCkyrdyAAoSPmtj3Vyj",
  "key40": "3NyG8hAn96QnWrCturAvDDt4A8dWNUryc4YNWFQMbtDcjxp3UpZtWjEVNBt3Wm2c4xfHbHpHrM8yAenBjd9s3NXZ",
  "key41": "2XH8yq4Q7MzoDbo68hYXVoa1w7npEeBp3Jnz1gSQhXKPT3RLK9pbSbTKoAvwyiujTVNVEgJcLZDGtZ2j8ymo4qxA",
  "key42": "3Rb7Yy3LXZs4dNRmRu2HgJ2DR5w1BrB9SCEjN8H6negHu5M2Rkfiqi8i5TzzWbU8n3pCNEN4sjjrhzz3XjWuVC2F"
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
