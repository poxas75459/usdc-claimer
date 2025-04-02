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
    "5YWV2BV45xcDM5nmJwh154iPTDgubbowHjo5AqBX5BC5EQHp1LyGKnQAeDbcQryZRcbHF67LoLBfAJEcA5Gbxv7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4FuCVk12ctfmHzPsvRa8fqyrNxWoXdmYws7gpU936pB3C4DhYXyHSicriip26VK5sCbBCAmUisbKtuQgTtBzNh",
  "key1": "3nHVsmqwggPd4fqmu27STBd1FbsiwjvNjjNhSPDb3JLj9cpcoeDWj4spqNEz8yczyoNTTQ4phw9yaadypgCUDenN",
  "key2": "2ZGR8J7xjaGgfh8E8H71m77tMoU4CJzdkCUdXdNGPtKAFdqf8jRhGEarMjzFtbzoo8YDZMsBLDYVviQp7WcBPF9P",
  "key3": "2kGnHCxrDEfLaG5rZjMMHxYZb9Ley6hnt2a9xpzBoUxxh4ZrrZFpY8JE3TR6YbJX8VPkoAoDSpDjA6CG1ABmJhL1",
  "key4": "4xic5Ph2RaaWPBE4CPNNu6sCeQvWy398HiQ6BLUNtrzHBgbN6vgpNebtsoCAzCLYCtMyz6cMjEQjE1EKSqjfwSVU",
  "key5": "a86Nyj7tJmtT8MMqCpNKxkLb9LDnPGStoCD6Ffuz981ex8JABPFj41o2emBSJbz7VrUgHpXN29JzFBdis33zCdT",
  "key6": "5BBj9sVdcssLuAW5M848dkBuy86XBLjN2JdYcaf1HjBXixsjPRGzf6xpo5749UCAM33JvSkEtsZrDvPCXobiL5vN",
  "key7": "2FdXJ5eVzmpiH9J7XzxAstR9mFy1cmrhiybVe2JrCobdiVhvzuNC6PjaDcPckyAzjqxCW23saa4hJyvUVzHo1JA4",
  "key8": "4UTpHvGZGxYhXKo46P7JPQ13XpxtKGggWHq8NkSSJorhdynNU4ELSieY6LRD2CPY1Ltm3B1W4z2F4pGM2qfqch4j",
  "key9": "5vp5bqBnFfmQXU8aKfYBUJTtu61eUr4Jt3VhgcD99UgcC624kqqW9biqJsztNFXPipdDZgk9DYoJPPqDrShQ1Wf5",
  "key10": "4unJG7jEmJufmW3xkKS3KxajHbrDGekFnxemR8FZtQ7rcicvDh5UtEFDwbytHB1jvGLUhsyBHs7wnTdiB4MWBjEi",
  "key11": "5vcDG6BCT6WzLkXw5DXstm8s9WekzSHKryktqsFJ7bUkKxASjdu4KgDBTjfYjz129tXkqn7Q1u33wi7EsXhAbRnp",
  "key12": "2Sp4yNQgi2eptcpFbqwURywyPEQxyc9GXJCVN1Cfof2zwt3xtfa5TdC2Z28nH1AR5fBTqvao9DKvmZvQERqwVX5C",
  "key13": "297io1j3RQ7BRC8DVj1uU3hCvFRGaudG1n59rECVrX7aQkvJ1Tgf3VSAFscyDMGC8TZj9v2pGu5vhpFKJUf59fCU",
  "key14": "35uMN6BDmUbgAqzUtJgqERcEv9E5F3sYgpGncDcegrfZBhHau4pSAMLXnnkzYQ7icECngTzjbHxZqc5TLoAU4bHr",
  "key15": "2H5rQNDvHj7UAXq3n5uXrvebR4ZST2mAL6kmwMNfq8hkXMYQYu3SVGjZenrERi9bEggJqqAiLLJx65U7StMpckPN",
  "key16": "fMe433aCXsfk1ketgy9tn5ir5tV9RpHUWVwUCHZYo5R3o6kkVvhBP1xEj4JdgAuSEYK9vKQdTnnfZSpdApseNh8",
  "key17": "61u9PEGmsXaoKS29f8wirR5XHGstmZFqmju5PC4MdvfbLnt1nSY1P7cvbF2BgEr59qy7k6H9vrDQZ9sRvWuMmw1K",
  "key18": "55GRQbXShgeoEJifBeYQUPjDUz571NkqCq5P6UbArfFhJ5YAZ1Gttj68SzyAMF429Zp8Dmpae9qFGZbzVXCFXk7f",
  "key19": "HVDUEQEga1jcH5eVFQCCS8SwqsGZkR816wkus8bdaqFrCa18NSw58HMrcobngHAVdVH2RJevm6mbX8YSxhhUujX",
  "key20": "5mGjAP2ESJXGbQos3z3ELVi8ckKbUBm4jvuWwLDEQXBNmoKSGvg6XtRiQBK4odd2wZLo5DCkP9XL7FW9C2opcKMg",
  "key21": "5abJa9tgj1eP8Fq7pSSDG8qzEMhXhA1RrSxJwPXwVVNE6rufmV6jFBXHcQFZWQnmJs1aMrZ3Gdmgg6VsyrEibWQN",
  "key22": "5AeyjnmxJr6aNU5ArdFZJVLtYwX4mv6Exu6gLxzqY8Q5sEYz8XCRgBXFTPo7mzubS9CukDkcuHWgviTjkzXJni2T",
  "key23": "LgLFNJVyMXF5JPXS4wYQP7xukMsAxJPocaxRkD8pJReBMUVDPCabHtfsebjofg21awnTmqhHK3YVzpUMdMoroKH",
  "key24": "21p25uHTesChC23Wm8BYuLVEoJK7qda7kUDBDdGgmG7RAVmNJ7wwQx3WZN5bx8jkm37icBALaSiZu96bEQBSzPUB",
  "key25": "3YompBJAxPpAhg555TNoXe7ktRDi2tp3zSTYgFDcq81kxyBGAaKWLWc7cexdkW6fpnsQpnMo9fErLexYRaVUeztL",
  "key26": "2iQD8aHmihpqkZxHRhCCCFiJbV6FX9mRM2vYn54oefDQt81ntHRP4tHRgKoEVR47zrygDS427LooKC4XwyYdgeqC",
  "key27": "poNkGyYKQR77LgdGFF66M3JWM4ziRxH1MyA2nbSUkvr5S8nsaCmzuMX1uhFyrVpdoi8M5fGe5tFSrxbrXXKtn3e",
  "key28": "58vDRueSjsnDsV5QQuQ7SbQ3Rau7UB7jKjkGEhCXiQeWWMtU3bGHgojos9oRcBNtviWNMzt16vuvbAMrbSVQPrXz",
  "key29": "5gmgH9yNsav9m8dgnZKCsMncb3wyovVY8ikdRPEK1SprANG3Wb5ojP1up43ypLtUjgYjQAn14KJYr4Z2VYSntwjy",
  "key30": "25sfozaQb6AjPrtMNkAmSwWLkkPceB1yPMVP5drw4uu22LEqn9TvvtSieDyY5L4Sptp4X4PDoQMBrP37pQjsi9W4",
  "key31": "4JuSjNztCAkU13jyMKEKgqFT9PktEwUZ5e7NH9fqNmDQdSdufJ7RqMMChRoTyraSeBFhvSJAkCMysxjrk8Qy6u2D",
  "key32": "SFkj7ja44irxNZSPbQgDick7KWCMKB1bM1Ad21UUp1WcZeh4GCD8bLanYu1Q6ESsfqhFN8KJ79GNVCATQzoKsDC",
  "key33": "2a5mEzdiAEb22b8VNphMBsb21JBQWrLYG7tKZGSqi6AhKV9MR57yK75kyfRudukyBbwuoxa5aGZyE6n1NDiDhCzb",
  "key34": "2S1jw9UxVmuB6gFVVwMiv6TiP5WEr6ZB1QzQCkVcZUqnubZivsnM25HJe8K1eQT2zaEaXStRvRvLA817DAFX6hhi",
  "key35": "2jK9QMRPw6PBnXrPdMTwP1U7rw5dPHVQmHegpp8hsRahby28ecNa61uwfxmfC7aofS2aUz8vsFoA5ikdsXAwT62u",
  "key36": "2LrB4rKSiUwSjbVHB6GgWVHprARQ842HeNdjpfvnEUgWMgp4jjAT4HvTbuxnXdcTXajZ3tgihGFHyKbGNyVViWuo",
  "key37": "2uW4EFe8LNZmd3JLeHCKHDAFLUBwVAsPWWYJ7J4hFh2NfZozoxzATpk3yHk3buGj42L5DENhs1mxn1QjZ9Ydxk1b",
  "key38": "2dsz3euJqrDVv8Po9mMB1divZDbpgTCu2w56xh16AT26pNxQtLgFUdKNXuRWPDgXN4dYFXezAeSdf7WTdcSEG24c",
  "key39": "5v4WUWPyytE2Z6PP6AEVPg6sW21UJbWNAdRqQP69UT7WaKCJeApgsyueFRE16GuRGYoidxNdsBXmnmEkfkAH7ipr",
  "key40": "59SrrfcbqYqGhTcceTiCbMgHjpUPWHuh1dkpwYmK81RTpFgyShQPKFKuoErpKaaNn6ij4mE1VfYNfsqdv8xsiWYQ",
  "key41": "2knaJ3P72MDuu4Z7LCgMaNRq2vQsjnQYwUMPL5D5TSzeEKxpweYJMeRtZZZjMoznkJju7PwoSoYXhD71bmB28JZX",
  "key42": "2i4TvDFnJhqAM25mBXgTc4wk34ws9DChMKfGFCa6uU7ayXKmYP5PYZSS9JksWj23pWdK4JAdLy2ynLJyAExcow6h",
  "key43": "urQJDRgCpp99yzUVRNhFwgNi3c1jUBcoWhqCvw9fedvg56dgTxqii5b6EQQpMuBxekHCMVyjZkxKHN8yTL2GVRd"
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
