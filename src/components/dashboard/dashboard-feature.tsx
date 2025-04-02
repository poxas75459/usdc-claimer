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
    "62JAXq6GJcU54dKmeo92ShrmQ1UwkfQQG72rBpQDgcWYjRq7hxLhWRvGCg9axusidU9evng5FXWinU6CNuqqXFkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xEnWrdvbf72vEMBG4ARPTygU24LejawMi26m8cNc69EUAGHQbFJq9y2MsAfmt73PrK1JqCUgKKsP3H7WPMjug3h",
  "key1": "57hWcBk43boxEcxg1ViYF2ksBBKveRYkKhQJBMWxzoFomioYMi5L4oUazW3goTtUDYbkD7dwy9uoeNH8Qnj4pPc4",
  "key2": "2wiJNq3cwU82sGPCHq8nfp5WGCLJmPP1EPRL7aHSi1nNJL8nMtmNZhMTPHMuWXBtbefFKXt8hifH8XVEWH9urueH",
  "key3": "4zHyGXdNVJrZwDWnLbvdVC2AAk8xcQ6MBUsdeDDbWxztQVqyhhozQV3SMFv1WDpmxELtnfc3jWs51XGnHPxqqNVr",
  "key4": "5evFoW6vRnXRLzrsV97VZmtRqmVxHeRVwuVp1eyB26hrR6MyDafCqQNfsKZt4pjBh27D4ikHoUbBcQBVnubSTEDz",
  "key5": "2rNnEipVyEsnb2NqBAPu4aZc1yUS4qTjiaqSm2kFdt1UwQg7yLA84fduqf6LSHJ52hFmeoCRHcn82zi2EmrgWzxy",
  "key6": "5GTtyfaNDVjkLExYmKyymXAfKhV88J38rSWhGe8aRjDpt3sAwScdedbV9LEaJByFgdyVgqmXw1JXBVXRRt36Tvto",
  "key7": "3nsygHcypvRe1cXB1s24FU4V4uSr6iYSm4DpG9uYyNSaTLo9Wj7zqvjT142xHFu4y2DPevStRGifVAFXGsayfqbF",
  "key8": "T7gW71TDGDoBwuBCvcvkNcYeHVxY27ozKMsrgYuY62bZ8Wbe7TfbRz8N9bCgPXKaPKHLb892cJDJpuPpDt8L7Di",
  "key9": "36UkJBGukW1VdvpdMqzDzDe8z3bN4JehGD9F2MsjD5GtTZ1EihchfbBfsFagctUG8epaZUzKH1UjrUV1fHnK9TM6",
  "key10": "CzUyjfyt75e5vcckczBP3jDziEPERfN9Anv3xo9K8dvstSt9fzo4Lzs5RVAMCE78rMrhCxvuFZePyXWpsL3wFVG",
  "key11": "3HwK294dKkiLt8XGHJdiK8Vmq89hS17RqhBn52wFQTHkmoyKfGca6yrG63R7eDbCLJX7AmD4vMnqGSbZQwLDDHPH",
  "key12": "6SywYF1GeNAc7b6vwgxZeP5b1iG7mzdBZXAdWGL1dzkbr3QttbwvCAFbBWH9rPrwT1DpdhXNsqcvGBWC83tQn9t",
  "key13": "2y5iLq6dKvWVcpdhdZMFxCDM8iDWRqqGqpXAnxL5bz9PzJqJTKEp2EqvZ1YLJDY26CdFsEajuTA2PGm5853eD2kg",
  "key14": "2zr8vxGGU78P8KQXU3X8hBN6MDKme5RyRxCNb7AVcEGrPLNgfTEbG8f53kDJMq1cpWyjiPkAWGsew1WuXTk8ambB",
  "key15": "2BMzWujFejpPPDyPRbCZoEHc4nHxpR1hx1EZFBEF14WSr3HxuF6nTNSTKLqgPfSYmpKZGUm1MZFX4McBAA6s7Cbw",
  "key16": "63REQMXJsnmig9ehZdoPgh1JuNgTmmN2fs6WmWNbYfEbWLUHjjq9GKCR6tPtDEgvmoKSgatwBvUGXruK6dqR2sJa",
  "key17": "669ETxQ8MD99t9wbev2Gb7FC9ZtKsVezNYnrxfyAMKuQi2myg35r3cFHrQmNdgRNVrief6TGpiayUGFAQxQ87Tx8",
  "key18": "5rspjMe13LaQ4WATQsWGDT6aWZHoRipahBGr71s3LdnXs84vAL2Vqfd7JFAV7KVbmsEXPeMbcgtgz4gs4S4yKZUe",
  "key19": "5F7JwTMd6vWZ2hckiSAf7pmj3YDweGLGMS2YWRnGxkAr7BdyR5q36rS9rePsMv3wBJh99iEVKwufD8uRTREbvd8T",
  "key20": "41qgkjicS6eTDJpFY3ciq1bv5e1gjK4B7e7smYXnpcPFyjLRMcg5FR5MqV4jnJJHkFcLDQ3v31QbxzFDg6sGvnAm",
  "key21": "3FAypt7qXEXWDW6aGxeCu7d48Qkm5DrCjwj2UaBNbjsS6H2rBaGFFmK9dBpPzGvjszjXyEoJSQBnKLe8jfS6cvSo",
  "key22": "5dMqM5noAgGYvpb9xRSAmrq3T7sWwQvJ89sfsX6F1NxX6avhmqMCqJAMy1HoRxEVcy7bA3UyfNRXH5yTrs1fvib4",
  "key23": "4Bb92CwUrv4dbS6NuxMUJrX8mtCG39nSywSnQGGqh3tGaE9czacKnsZQhq5yAsePkaiwPEQ57BGqoge9CZXG8NjH",
  "key24": "4S1SHPyTrVJXKnRu87NdukTbXDgg1VNHWjsHLyRPFqy2S4fqdBSHpiiswKXak9WXHyn6e1qWMK58Lau18D1WoxMz",
  "key25": "4cPxaidjQT3QZsxAh6h3ebdAhq8WahXMmRokKMvKGGZ1f73u5yDVzDK18Lkm7FCEBgqZxcxAxRg5nW9zNBPuzj4d",
  "key26": "2DSqyCqQWQQHC3wWyyoDhLNXi6BVEaVBMNVYmnEoiFjJMQARZvhyiQNzDoREEn92SLwfTbxufSVjDccFxwwS4i3n",
  "key27": "3CYfWbqmxKexU6RgVAuQYQtFcSobqVJSWTjC2JcuFfmQ6t112nNXmum7yxM3Ko99yD9ed8U5JDtPCGf8oogXwsxw",
  "key28": "3UDW5XcwgyUnDhCTVwmNc9YmuPcvaZdhs62rftg3BnCwKyX85PRHeg4Y3cRD1UDSBffpRGPAbXepKfpYat6AjujX",
  "key29": "2T6pJ13SuXyxqfZnRTVbwyBuknFQkQeTCYMNXExzEZioiraYQJf29Ak56662mUzrFYDCECqzmiWX1yGLn9sXZDNZ",
  "key30": "3UpVWPkyvUk2UKhh6WrWZbdEtBVJx4Fx6k3QxwtJDA6ZBtjNZ1DG4bcqrx8JeqzKZGV7rqRga4J3zUs6FRwwJmy",
  "key31": "67eBP16KoZyYHDuqDSYimzaa8QJAaqu4nzqjT6evY7PXKUnYE4BaLC49qfb22JGX65pedgkwTk4xf2i6y25EWbJT",
  "key32": "3Z7ry2soeouo4ixEgS8VLQm2wCpfSuj7hUvVVCXUye4Zxx8qPY16JvEa4VkGH5R2w9F6bJDT2DBaXng3J3787p1U",
  "key33": "2V5iHde3zVULge37o5E4H5K4G8ucMKoS7FgitjdkGvyknHuUqaNrNwFrrJWT5j9C47n6YUCoGpBjrrJzS94Vb4nH",
  "key34": "66hTvvNLdyFva7C4KFpdDcsi2EcPQyUUcpB5LSWZD9JZuTaM1S6xhzpFifqsqP8DrGTxMcbBMWiQRGZH7NjAxC5f",
  "key35": "2bgExqpAmAyQxmFk1wQJBAMk3P74vbzCJqPa2GGmwQYT6hohKdUV3agyGdHgezZ17wH3XPvHCJpFxxs8d5PppSTU",
  "key36": "5GdRUAmSUX7Kgq4aSLfy4knz3eGjNPXDc77PR36ar9sYX1zbAchjFr7tBRZuBwxgWWxqM2cDn31Casi3pyNR2FZQ",
  "key37": "t57xJvjBDepKinfyV1psMEgqWW6mxXFgELVzFbmr5ACtFEsfTYxSBCh1SjFpQHSFdMJzWsxWA5jaXYCW9TBTaqa"
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
