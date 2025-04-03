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
    "38zgdG9MF1VGNtEFRV85Q16X9No9K8VEqser4CET1ViGyw8pGUv9ypNA1aUoeNoeXffbjdDad5PQ8hcciJfWpDGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57PDKtrYHEhq7tgFh8ipCao8DMrePKq1MD5HWtGe3BvQSxtDBJmV3oKrAiDTBEiUW9pj8YC8Jfc6GdbRJZLgr7i3",
  "key1": "5eD5cgeDajyA6m1ujikxEdDaWvXQKdGeFfjsRkc6y8rP1vQGA1nmSFfVMWUATRhZr8qevaPF7hviAncsXoTd2V5i",
  "key2": "43fyThbqBiHxuGxLQjJ7tmdGmt6tbu1Uc2NgAajgi8CFrXfcHDovN7knRPMbRGGrqnfhRTykrqhSRpRNBGzjUtHH",
  "key3": "3K1tM32LbKfStgoqPzaPhzGnNFQjdpA55bYh1Z3BjkqF2tcE2DUMmSsmyqXf6vNycsh2f42rnkGxXU6Vyz9q2Kna",
  "key4": "4ZZ71nSsTB7gJrSW5TypNc91RDxPHAu2ZvAiuQDPC6ozfLy4onXecVabPcWJxMaM3iiJjYYRYjacN9BZcNPf8xg5",
  "key5": "55ujJpnCy3wbTW1oi5yfP2UypwpmNhLwU7rBrkn8pW3yWzFaoq8aC1C4X6cgHaVoWR4LAXqfjVJRpJ9G37ik52QD",
  "key6": "33BGczzpYdaXZLQGuHga9MZLA6cVqErLVfXJzmC1rTxidSNxaYK8uZMuVU18BNphqbxptARBJN63k8ZLirSogFJB",
  "key7": "NAzvHHxFArxMGr3HkipMmach6ixtQ9V6vD2ByepidZi4qLgtXULCcYcRtxgeeJn26EkTE9ZGuPT5ZFgSTVA3MqE",
  "key8": "ZHGeHj7byt7wJsDrb5SMPy3iNaoGobtnP7rC4iuJ4XxndA1K9kR2LHZjbWNdrybxuwns3FurtcQyCT6Ri3kfQhS",
  "key9": "4CcKfAQpMur1XypESJWwGD3i7aoqGGGP6uZ6EFywxtfpA3foJeFddQe6cZgqYx8xhmgVa5paQ3v68rqADV5Y3Ama",
  "key10": "5GdgCvoXeFQGyW1dVWKHSAuoQWV3Rx9rqGQAha66goWMx5jdr2dDGzy5PHHs8KZQ1wVR87p2WBys3in5JRXMYyrR",
  "key11": "2uetDBa9eGkRBC7MoiP2P5omxb4aT3zBpLMHk6LBebHh7XKh8zPBE7LVsqqm1Tnwr5gR8JU61NXHrtizJiHrJezM",
  "key12": "2mJShWjAMJ6KMd5oC1SB3BBrqK8cTU8Cw4o42ymGVdb6njxmDEiNkFr2LwTtiZGhcM8ZyQkwGa6CcToANdu3xXuj",
  "key13": "4gqNERsmFJ9yN1vRAUPxHkWMemLMBGycdWLxbgbjKoLEwwE9kucQmg32PtUAU8GnaNm7xJ7fzf62r7bgUhAQM1Gb",
  "key14": "2QQGpyEhyZPCJSwc5H9UauSYfRFqsKRGV5ZCPY6utE6K5VqC2LWEGueyN5jTqUX8mkLPnLZNZ2MedoxjPseusCWW",
  "key15": "2pXDzfst1LGss1AXD7nGcERqxoo591ry89P5iPwnaMkrFbtbtX25rP3SBdMbThypEVpMKx8qN6sYDrfHik2b6sGT",
  "key16": "2bRQVFQVLADja5VSCoyMyd5j4iusgSNPCympYoE4wf57ozZzg7yGhH4biXUobtF7VvpVTbHRBSkG4UBLHo4WP1o",
  "key17": "5mtrdiGw1KYNBkdqN39mdyrGzv8G5gCboznWiBHqZpaAHQvaabZP9fbNt4MyvCzRtv3S3eozNUsqw9j79z8a53L6",
  "key18": "3b7RdNEQUVJ5GvhhmRxrsZsbUHeQNokPmc1gyCKntPRKbMsSRBtFojctTKUs59mLNYg5jS31GM3ho69pMJH9ZAjg",
  "key19": "3Vhd7fE6LwsvHXs1RnyU18XgUECAuoV8nxRbRFKeN4BKVEXct8AakcZXUq2pX2f7jx2NCRfzcHvKU8DUunDFrGfb",
  "key20": "4N7PJPdSekWvNeuz5MwxidtdR6ArkcaKGmRbjBgexsYK9jBxppQypVRXW4q5dqAUydENMb24G5HDyF6p18TM5YCS",
  "key21": "4iM2n59Zb563qRyrMnFPCx4qW1HCr95bVNgxzMTiSMVUyXpbdA5MqcAW2WQcY49pHgb2hctBKVZMf6E9JDq4T41e",
  "key22": "3SuqWWnATdKWRLxe4mZGHRMwkma5hCSzSQzhqBppsyu1kYMdzMLHz5yVSURQkcxVADHMqVq7uX9fp74u1aGiaUEp",
  "key23": "49FNyWaropomynyHRZmFsoveR6TzsW4AEpbnDxdyBUaJKFHLEF1HjRbYvHkLd1Qrwd5x4VPTB9Ee5oVc8Tmkvi1n",
  "key24": "AxtjgWRxoaQsJFQC3PW1T6rR1k1eGYiCjnyuirMQkxJkat5fnCi32YJJwPzXs6n64rKfbXBjD58is4EEuE713FU",
  "key25": "4b87rUufGRph411EfWF4KCD2kerR9C2yNYBNwrLJFNiHvawYuE9XC99apqF3bj3HC8HY9BmBsDe6XX6bBvL51vvZ",
  "key26": "3ZsPeLrgXHnUgE2xyzkKBZrTkgoMhwHNA5CxJn9CogGk7wBP6M59APgG6suzfdijb8p7ct7p8EBoj1kZgTX3PgEf",
  "key27": "3eqA7K12gZ4gctphGGsM1Di99dhNVoGFnAjg6Rt2jE7vBBscYWn8agThuezMWw1CAJYtfquzwdN6mLdV9xSYGemn",
  "key28": "2PTTqV1iXMxNEVyugGfPFHVD7viPxvwcQv66CX1dYL4upnhNC2tBBguKAhpFES5ehwy7sNy7nPiyJWDoGut1HU5J",
  "key29": "5mBzHGmuESBh4JLQckNkBbW7PRomEgvByBFpry1uVvCPoREhAAHbvmV9HEMZpsWVFnGPfuKXiksAghXsqGNePs41",
  "key30": "N1opYFVoKBJkiZn9dSPfMgm8p9D3QchUJYnevBY6zfo8Ez8ze5unNeEYp7WSzcEMh9eSSPzNFjfZMKPe1UNtuvJ",
  "key31": "PZUipawrJPaJgQyiyWNmokKBPp5bm9wgACnuJthxNhpAGqgeqsRraMumWz8vuz1dLPx6UH9GgyRNnj4CKwWCiHk",
  "key32": "21Y6H51gGBTFXU6yxffgkQmV4BMiUCxwyUfWqcozpHV5e1WY4BoRitDAz3RQ17WMHVEsb2owNsgfkwhoZ6eFA25y",
  "key33": "2Nupq1TPVpeoGnBQyhV3pTFdwRFDNSNndBZq1gAm5pxfmA7ZTjT5eoyVyZ5ZLLPJhW4jz1GLMaraeLFWV2oS2jnr",
  "key34": "5QL9vdcNmNj28Qubk3GdnXYXnLwL8Q2U9eASUkEPDm3MzWiKqVagNhavSvQUQ1gbgK2rmxCFRYFWA33t5WjRT1RB",
  "key35": "3nokHJTka6c1x3GRF2bFkNSNY2W84KDVQgejZhSMFASXvs2J29H5C4BVU2ovkcwPHUZyvrEgxUx2bexm7T2istAH",
  "key36": "LCZ5W3tuxTSWcbooY5zaLNNCHmmSwJMmr1hQuTEm1dcoBbgNh2xbmVAYqnmtL81vqqX9gzdE2sGajs44PbZFmL9",
  "key37": "5QFKj6UH419YgnEBNZHWNwprbxED4HtquSCjp5b1F3dbqT5f8bZJK345v634xMBkQUeqG2YMuVeZXYQVrnQusiz8",
  "key38": "37Fc5eLKCPPdcaxT2GKJU8D9uq8zrcRVSaFZm8Pq6fPmzgQzenD1GFwez6zggFEHqcvty9EWj2UquH3S8rj6FYCF",
  "key39": "2ACRV35vavAk6eU6qnNXabQwyfpYWnEsADeAHSkGMBmG1i3WiYBeKruaTwJDousWJcVVhwDtuDp7zqkWWKzLFmk7",
  "key40": "2o6vxQrSJgodd3eM2WwSzoZZR1CZwjqRtwnSQMie4d52qv2T4VFQififKZbxH2apeSPxdzVoWFZsDNZAgHZyzDtg",
  "key41": "2Ms7DaYyfzH7s5iHhb4ZudduY9phCcUyBwtSjN8kw9hJymTJKujb8gVEKJHzqesra9Xt3Wev9GkbJK33mM24kSgb",
  "key42": "791YvVsN5z6JxvfKPRjFZZEQ8Apt1GKoXhbpzCQ5YjZg2yM4g3aPVSEt9SZo54BwghDPRhSzC6mPUVnoYAfwJzJ",
  "key43": "RmPWmBxMYbvQxsHzGULLQ6o2PzpxaVwyfQj3TAYWqDCRgGc6f8f2uAHDesEuF12uoEjLXA32UQ5gh233pxg2b9j",
  "key44": "2wbSDZdqeH7YWid1ppCd42uLvDZsf11R1vnbnmrUGmBbkr9fjn5fRczKgVRM28gSR3Dkgu1rdZxyYDtZwH8LLg2c",
  "key45": "3yymkqvsLtamX85TbPGNVAv3MhCz6oWGnx1Hs9URid7cTuYPArVLMZ7BwsVsLVYMLgGqxeSBCQqBsS8p9te3gqQX"
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
