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
    "436jM4tSzWPJvnS2tTkA77be8o84vqUVEudcdxRASRpv6LCxyRqiU2MrwxfmxMUbRbCKwbVn5WoX95xKu4giyprF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G2dLCZM1qsXutKNDiYZmZrprttCTva2aL9kZ12eSov3PgRjH5gD3z6eZeDn9tpkMsC4eGRtPrF7TuF4BsZs297f",
  "key1": "3hGRnUBhnP8Q6QYRnuV8J488vbBeuFcvBzKWkztmbwTd14q2HmqdRZMeskeWYVFCSLbJn3sVSATDkLKm9VHExRFm",
  "key2": "89q9cQxJqq1kYogjoZ8REJZNPJFiUcbr8aG2UvBKFeaAJCBDHWnycWP4HXXPA7iTtJkxg4LBAUJjjZcVYAe1ZoC",
  "key3": "VFDU2gyuhVX7kYDECsXg3q2cnEZ1LAh4NBhgvx2tZL5f2SZh9D2Q4b4LfDMf5umxwQH4HDMro3MuzkemMs8kxfv",
  "key4": "5TNxqC29xg2BCNXLQLAv2Uctk8iG65oSD28zeZxM24B4aFducuAsipW9ZYNavz9JMqQF9svh6rFiN6WXMc7cV7a7",
  "key5": "5KYKWZR86i82XjgRDxbLp5PZX5TYRpRJW1NMa8KedkcdB3GswnMJGvfc6QAT1pKDEbRsAQtAyhLknufo5QafbX8L",
  "key6": "22QqbTPH12ShkJqAjV2CLD8Rm8nZALw21iH5WihjqfECKDWCMtt8trC73L5Ey4wZvVB4sS5Zib1FGfdENEmKUoc9",
  "key7": "Ci81e2yn6bb6Epz3mnLaNTVjm4rKvcMDpgbEnoAG7PiHLn2gG7SqeDuEem4SoW1PP41eNixo8d1wQFv2rTzuCjT",
  "key8": "55UswnGzMQ38ppZYMbobgkuQ1Npvj1jarMPLEuvGTwPuUbiJk62bQYoqiwrFFazK7h6mKebpotmeZV2A558D9KkG",
  "key9": "4tvztzQ5DNLCunyVHA58DcyW3PyeiSunAG1fdVUakSzcDLgxreEnCBRgfymQxzZrmbFGP1YRWkFyiffPLy9JcNwk",
  "key10": "4G67WuqBZtiWH7JfurnbRvYVTop954hJ3ssh6Vc9JvMf2ujbC6m4ymHSLSujCfDeRL6aXHJV6w62YyRk6kzrWf7w",
  "key11": "39MXjGcH7UkaCr7LKSdMk1YNgVHwagwswsVniPafqTkbtnHQXLYSEkrvJBgMfdRLLwJ5Ln14KHpuqbDgrKfrg2sw",
  "key12": "hyddWGSvQkXeEHy7U24iQAbjsgjhqBNbuMeXJDrQfXwcdU8G7wofxL7cNFcoqdNnGSYZH6kibgwAs8ZGjQADNhp",
  "key13": "TfNtpb7PRSsEWKCvyURm3t9pqDws6oJ7gNWrKZpEJ8LuGWokki6qMy5X3D8bbDd7npfvDLXkprRZLaNEVDPkf8N",
  "key14": "5iAzWfyRauf2iHjoeWP1U2XdSpZsG47zSeCrTnn9TTYAr7jPtrfAU54UYX8kc1vJRTzUaH8N4AemtcAx9tCFvzVM",
  "key15": "3AzTtvJRwGNnrfZbhzR5UuH5XTMdEzLdMiQDKGrqC7CTj5PNrePgzPVF8532WssQvZpTz1FyrCU95hCUtUkrC1tc",
  "key16": "4ug7o4funm9BhJsBmWouihkoR5NuMLwcoPubBYBQYo3Q3f69tE1kg2VKPfMPQb6A1qz7qjY4MTPgqLtYNhmZk4zH",
  "key17": "2jpHq1r9KcsgNiMb4kiK2kMXCSmpBXHEPNbKREz8H1oyBqfCkJaJMxuhSXBM12RC1oZ3X6qcpfnE2zFojWri4Bb5",
  "key18": "EfY8XMcHtvZNNPq193JtWn51YhgVfhNuagEat4fKdYezrfGPPULCSWzY6AHBouwsHbT7EyJ8jL9BJHWAjxMqMsT",
  "key19": "32Hrg1eFYDdtc9BVaQEsstMYJEXCDvNz41pYUNrBB1hErw42tkZkQRz1UHWVY3cECaP1b5e1ozyvikfgh77hcPT8",
  "key20": "59WaMGjUNdBHy6YchrDG1kzaf8yobPEAyJAn4i1CEEYhZvHwxrTq3Ng9TGDpy53gYGsTMLpQmaXYs3xEVxXyw2Zk",
  "key21": "3MdtoyegHYJBdwdcLjpnewHTSfXp5cqWMJihCTRDPNTDmCMdMFxvT46a4zQkBRENzNwQEwHTC3s8aSn4MDxLTR2w",
  "key22": "2t9woGaNyDyJerMskcVZrCjy6dtU63RKdVrMhq72CbA9GWmP2jd6AXZYpbReJ98DjBsQbssUKXFCA7DuzAjLZ3Dw",
  "key23": "55176bPHSA7CeS2egnR6YGULuwgLx6bu4keSBwvh1wJqGMV1xEgoKF1tmu5TfrQzP2XnAyg3YeFZZsU7r9om4ciC",
  "key24": "5xZoda7WMo5W2T2XeFCzgrpyWTcPTzV3LoCKyx7Xwf2b8JvufYouKrNRadZA8C45fCwy4uy8jRrLViw7V4KrSJN2",
  "key25": "265hCKXkXHKF1KguxpufzCsETtaRrFx1vS2nqccaEGnH6erimnaDkWnSWgEGMvMGpGQFnQq4gP1Vfp2K9TZMaYmk",
  "key26": "Y9My3u6x6okWJEvHAVWz18SjBtFYAVF5b77iQY2YTkFDKXcnTAbbg8LnmRs14joZr8sRrE48i5EuFaMRxHaAPuw",
  "key27": "2qqTwtMcpK2DPTL2ov83tUEeUt6o6Lc4ZAFLiHH1yHUHZ8TBWEWuJ9VQnbKGUDi45Y9asWQxHAvvJT4WPv9szMAd",
  "key28": "2YRNCqdso5udQupz1HrLieRhAy8rznv6haKYYZnd5qvge87h3rHMtWwGbKSYNfxQzerP2BRmBKVThL756aifPMe5",
  "key29": "5omRWUXCykyFacZsomV5m7TY4ZE2VX3HabEPVvdkxdVNZ2Yd2dpuuHsfKWKxPb1CbsTY3ntbUk5goVkWrqUki39Z"
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
