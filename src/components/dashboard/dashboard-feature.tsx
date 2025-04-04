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
    "2JegFi3otA1PT1oEpwFTnG55CyP4m3bRWd1QT1VFR7P3gtdwsFWxTcUV4wLNUVqTfsHjsmZqKgJtqYsrqxBVojkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFLyAZrRZES6WKTwsSKKUgZzwgZwCmsyKqBnsGdzakFQ5ZvnFfLoqjRia8scbueTmpX2TPq9cWwjEGhponVHYTB",
  "key1": "2ANagqQuZCCcJx4mG3TRRM4PdGCTSeBp1dCSMXoBekKHLdxf1jV7d3ja6UM4XheafAABeBU3KAiQbqASTxpMQubx",
  "key2": "Wc6im88RCwpKnsfifzSojWfHqC1G5KtVJPpebtZxEYyEU6eBmZJfyLDFD3j6WGNXv999SwHy2ELMMUvudT9px6e",
  "key3": "nMHFKnfSkLGw2WTyPQX3h7raat9kGEe3fpJRo8cfU5YyFsvSPsAyhxnASDkADyhtJAen9hpL4H3TtgWgg4pBQQc",
  "key4": "54m1HbVH1hjxJw92gCe6KQMBHu9SWKo7PBWuudSN84qgRu8Frqb71KKHc8sheVkYoSs21ZhqE67aLhAXQciJzxjo",
  "key5": "1VVoUgJN5hYqsSB2MpeCbGHE1ocDz6RJQPVnukQZbsMCpusQfyMxfVQiUgNPF7yuQpkUkKZv4s1WGSu448huogN",
  "key6": "48hzJzokK5jx1qSkJHawDAVamhejGX2hNZ6mj1AjpEZRBXJjCCLPXfxzhjZ7Kkdf1dsA7EMA7N8n2cu6BoY3iF7M",
  "key7": "5Z5aHGPspAgWrw8exLWcsusdgxWAo7ed93ahSo8NSPbEbZRx4kJFe8recXxk56rB85mu4pcfG1wL7pV5ZbQDn3A",
  "key8": "2JkYsBVF6ycD39w9muTSLqo7XwLAJe8bYtqu8NUgA8fNuLQ8snU7EvMYmpx77yYZbAx9ReqwCt96ZtiYn7WwndY2",
  "key9": "5FJwxChRg867P85duBb9jJXx9tk1b4qLHcgpyeaMbpyURumoxJUphEYxyxBGqesRZSDBVFagg76fdFuuigcNnfdU",
  "key10": "5fzHA9H4opwhe5wR2kLUwdZLHhKTW7m9v74pZmdHt2e86JncqnN9kViYyXe7ZeUnKbV6YXaMpciyuXjJUQgZP9RU",
  "key11": "3mDYeHEyi8hMHyozHo99A3x9Rx8RGMAmZNYozZEe7YS39VfqwKbRUjQxD258j32oakDKjYRkYbE2SezPJaoQA5Jv",
  "key12": "4V9mDX8N1hfd438KNEGbKVPrw8jiiCHPqG26cKStNMkXStzzC6HKcB3w6AgVAbiGF7x15biqDz6KvWjNwaVXt1AB",
  "key13": "ygwD5G9EyeNreXSXMaqxypvSFhYMt2pFEtww1uFKNQCPfvuRvZEZaPBLpXG8Fkmb1wDypxwV9ACPf8Mbzj86Sa9",
  "key14": "5K1p9PXvnxdzm38HkNbyTv12p38cZYcJMWZ7X8mZUvfVWrXVKGZX8bCktXHyKPepVoHKtDpCJNpAvRbFiZ4PNdfJ",
  "key15": "5AcNUSyLz7omjvsAgV9btdMQs8F6CNJQNhjLbdHBKWsXZGKAyRiG47NuAU4QiGzeswkR41mYiAKpo1bm2cAYADvr",
  "key16": "3kLt7FBvmzeZ6RH5Ft7nUX842nhKbT5xsG2wDxvRKvq3dFrnxXWmSGsuj7TThj9ZcjYVDyimcZhFusZB6skFFM4E",
  "key17": "2YG5rWAsDbsjwA2rdhAxasupssvzuoSJ889AnMbvutWQVFRBTCpSQzkAzeif2L38YDUiupqzmQJYZbGURvEbVvK2",
  "key18": "ix2Hjv2sj7aKrBvy8f5vX3M7h4nVKYUUaLdD9stkKcNQAEmjZFxtsoAUXU5y6QNZhQcKZezRzRQZQwiehHWFTeT",
  "key19": "66wf2UnUFDGFbK5ZwPz9uw6WD98qMwuKrN1zMokM3ZuApSHTTzJcXds3kgUBKBvkMhG5nbK1VoKiJDecqn8Lhh4x",
  "key20": "5fQfSg7d2NyuJYsguSiXg8NHVuJMvMPkyhvCiF2Cmp6DYtStfGmqvWHbZn4wF465Cxp2B7izKwjZBgmZYnYZyS5H",
  "key21": "2ND9URiNzDujZQwp8yWsxCZvx1DzwHsHTJKfiyEhAP24iGcZr1JvZv2mrrc1symNca7gM2stoq9NMDUrFfPKac1N",
  "key22": "33LxzBeFTBM2z72ccjH2nxLS18APGcwogDfv8K8Y6z9EUnP5nPcfuR68AtZVmNW3eBbs4RWoZjQnmPFu6d4daYvB",
  "key23": "F9c1nukyLALriswtgUJcgzaw3SKhdQ6978dCwRsdkbi1edfxum7VPvbs7pAEqSQ4otNc3Gwnwdrb4VF3888kj19",
  "key24": "3Zda472TmYCJj6Q78k4WvbiYf6vRGJbcQbFMmsWDytasey3Hs9RbUNkk13BN6J5KfuwsGJdMSLyjSVNWz4mGy9E6",
  "key25": "123w1v1EQWEEmYJtrAAFLL2ANRnAJhPNRb1EUHMjNv6rQZibQy59Tu1kRHCc6defGJbYy8jS6jRpebMZ5dmbiJ4v",
  "key26": "4CW3jjFBgjNAYVQdL2mCsWMsSFH5CJe3a8sQxSriJ27uc6CzqArZi7SS3tYQygGWcC9YoDvyJZkHyMQzUQsE2cm4",
  "key27": "4akYgLZNSo4tiV8fuasirpFkAPDYfqRsHgaKovuDUHUgtfhSeKxM7J7B9HqqwZVB7nFevQZp5Xn89zapdbQtNJRG",
  "key28": "S5ZsaKMdnjzXfr3jhm6UykTKRHQnQBRi526BnXvCW6LVU5YEacWt5XexhtPQEi9YKUSxSQgpbuQda3TksnnxZ7y",
  "key29": "3f58w76wAfjsEhrgCapkY9dMtekC9dD1uQTtdJqHb6ZL3DY8eNy22WSvX4v36TP8NSmnreVVF7WRjaLq7EZxVEfk",
  "key30": "3jnxKaALav98nAPg1TWtDmdKxbnVUErWLyp1BxvME5TWscTKoaxCbAaSZiJec9G7cdFmHEDoUDewNXrprMPYT9Tb",
  "key31": "2WK2xQTBRxCcjyGUp8aFjZneYkXd2N8UPgdTApzciy7xKsAnKCSjpaTJkyK9NicfVF2LmpzwaqtHFyQThJdT87Th",
  "key32": "qCDYgpeN2caUFAKDGWFwbTreMEFXa84HCqwjs9NXuBejYoWy79PLddcJnPqpJ9ND4woufLdA1fksjAto2Pnn4ok",
  "key33": "5Td3Y2pUDTGa8BHYVtc91yCrYRKK3E1xyBxXi5HfK3JHLwdNmGabFPtJtwzoz5iPZYywD9DNBixx1SaEjkz5sssb",
  "key34": "48ix7k4jfdNJgRBDkRzb2uhe25Fs3TVgENH9ovcBpYZq7yLvH2RXYChQrwtpfZYVL7dYUmQz9W658dxwq4254wxt",
  "key35": "5f3dr1zRGDo2jP3gH57zpVdmjyk8zWow6K8h3EPLeRmjDf1yyCRQN7kHTr3aA5TjhXh9eGZrBnQfsWLwDVqB2wPg",
  "key36": "5yDALJF9Ys9bPe7efwe7sG7M5AduajVBwfEDD5B8TqE2scwPdjD3Ss8X962Xw4SkrfJa2qErCJdqLfgeGs22L43K",
  "key37": "Cdy8NMvEVq521j2vo5vRcwFSEsA3AqTMq616SVHSumWouV2jzKBaQQmn4UNM5sa3zJhbz5dBHo5np9A4RgRZrN1",
  "key38": "4oyDSoQRjcaxDhMZbAxarEwPUs61kfw1vkjSqJe6FcKvVn6sTJ8WK4RZHCD3VwnoQs5KThTdxr3Pv2kohPX65o1e"
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
