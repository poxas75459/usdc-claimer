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
    "4ToH9kGfxj7F8YC2XED18WiUF7s1FaxQBQdwDjz77vXyrXqByoa2BPWR6XXNRnGiYtQhqbfmZxU5KT78QdSMKTaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VC5LwNsz6Na71U4fNS1AtgoyxUG48Z7vvpfcsiHEePczqTo58LMCjFxhyfwBvYLHpgUY5cNZCTWqRNbPu6eArMa",
  "key1": "fCXTB6zssh9rwFrL97oygcktzhbTgLnMXfkfeAcEkXMnGb9MuTqthL6CzzSeerZ9NvSnRsGNxBXeqfgb6fU4ZNg",
  "key2": "57QvvTrzdqYbWtCR39hNnWGC6XjKRsrZcMCwsQHifEe8SPUdDM7dhxvWnpLMeoGRJkJ63zrqTasf79rVACSLo4oh",
  "key3": "3pLPdV4RiPWbuH1gFQtYQxSvaviSR8q7TMkyUQJh6rE2TdPhr1uijQPfn1KVh89JxvrChTeGLp6pvS54eyGvJUkA",
  "key4": "3pqC8M4Suw3vQjxvDVpFRzccZ9kG95HkwBG5soDC5t9WMpe81uojeXQWQ99kBxVXH8WWUYzAWN2fZr2PwVWHuX53",
  "key5": "4GVK3MKkdmF5QtjEPNBg4zgbPSM2E6G83F7AVcrNoZHyi38xmwVquFjDQ3qe5JLYnCKfgvWjP2GwKfbEuhNXzPn4",
  "key6": "wWbo8qL7mX4AjhoJinKNpvWqvViwZF7UYXC37nUqtGx7ubXNdXVH81Xqs21vU7vZidueNJ9QdqEbyHmrpauerkg",
  "key7": "3P4Z133MqknD6pgjDK82uWtqdHu6y6hsZp7paM7kzCeDo9ehr7Ti9SkYUCHcXDYxJ5Zo4bhsuT7DVPTzVDeBqFG2",
  "key8": "2G49hD84Jo5tGKemUVJmhgAoniRvusUyNjD1n4M3UEShsJrHewVC6jDQ7ZDbcFSdk7hwFvno1NV5qtjHBQh85xge",
  "key9": "doxYwkuFipzS6Sfc8bMwuqF9WEzgDdBDR25yq9QYvfTPLGV5zMg7ZKLTChTNsewJLQ2Y2Bp2XhvJmna81kQ7ton",
  "key10": "5oZLe4q4UB6YB53bJt6iwWYnCjJPLrDexc4PhESygS2GhdoQV4aEs47uh2x4CQpSJ5aQm81XhgQZZMfDW9Ap1v4X",
  "key11": "4sQ2Lei9kX3vTo7mN9YrM4xvC9gjuTBZCPc3xu4rwy91NfjvN5PYohQvkvHE7qc7YEFL9wPsDULRHhpKHkC8Syso",
  "key12": "nXwAX5Qz4pQbjvWjyp5DAGNnDAmXeeaFdvVMSXYng59ZKBpBFfVoZnC6AiTTCfNZWizBDDotH66uE6zXTE3i6n5",
  "key13": "53VRrArrhKj7gfJitphFPrAf3oHeidiSnq3yYvsmA6gjEzQrweP7synZTHsJ2C4foCTgHkB4VXRHYfzuXFdUyCxt",
  "key14": "obZEgQDD34C2Eadctzi5o58v4iyyHg79P5WfKzRStxaLbTurRPkPuKXFzG6RoMPr1B6g9wE7HwwGkGxJECxbCfc",
  "key15": "5tyFc5THNqKPGbW22Kg8xU7frfkD2DSumu8EC5EXJU3ecUMN92MnGej5N4ec8mjqJPRgYZPmRy7jV5Ua2XvRs1mZ",
  "key16": "pp1Z2RBPrF9iXeSsCGrQSBv6p8APtiw4j4KN4yPeFaksgckMgvgo7wYMbE5p36Lqkh2eecrFCuLyyj9J5QoCxS5",
  "key17": "us3s6ksNTWfsQfu6T9EvQqdkwSbDh41rJDWEh5ikGw8yissMVhiKFQpnQXgtc3axQoTzGWeyxh9G9r5QdC4WPZs",
  "key18": "5HuF5fhq3JXf72JvwjuSDnEQmC9XFRCVfjmxcGtfxogo4ASsM3VU7yM2qnfWHoYfHQGxbWGYqfimDifvAGkYK6yv",
  "key19": "3NsL5DJtFeCFXmpJvqjZqPpFTZK8YYLPTSn9jenHLguZPi7Qeg416PeLTYCbGtUNCRYLkyi9w3CA9rymxbKdWUMp",
  "key20": "25ryVsnNvWqvZEbTLvFgft6gHj3Q8e75EKwCZey2ejwEKnzhEtzzEVMDzgPfrRkbrF7y2cxcvMwSUe8CmM5sfK1Q",
  "key21": "4iddjgLeoyvHitdpDLY9sEngfwmTR2y1VW155ForbWyDojLLfZh8UwM4itZgofcKZiLCy2RpnAtY8qGrWZepMsMS",
  "key22": "4WM7g98d9Vj5NfkysJbvJccw9ynjmmjC2An4bXPV3ednnm3Jr9YMZqhXNaMCEyvBJzoLs1c6e9FNYDo8KZiQxrij",
  "key23": "2ceHcokWEjPY9TiDPpignSfApyaZNPBxNmHUJSD3nrdwtohy1iGfNT5JE4Jt3XRTW1NWs1ibN2FvKCzyypcKwGwh",
  "key24": "YNxpZQYzG9b3nrtX1PbG9hReMgY3XX6CiWPTnxiS1d2Xr5rKyMeQNBoz8Tx98sJBX4zsUxSBonjtXhqJN27jCbn",
  "key25": "4CdtTw43aDHvhqDZyzNSG4E3XhrGY8KPgw8ucu1B8canQLLoZg7wNvBSyEc4mDz3UtPq8FM2LC8v9A31HFhmAk3E",
  "key26": "XAqkukqHShPFBGks3ucV1PxWgMe139oV5NgQDtbLJ3cZnRkxVSMUZNHtickFXTQroRrHCFEgDf5KvbbFJJw9d1a",
  "key27": "GK7tjFgE5U96DpUWKBFUSyfc49i75G8sCaFEKMvEMDNg8X5sWobNFvjLTEwA2JL4su6w9pAoyTMfczyrWaVFuXv",
  "key28": "Dxh3EhjAGb1HFeErcubxaZSwjEYVtFqJAQXvCwumiD1S4kSL9qdE4cr8UzTxW3KKKKmyjWg2FE2gFiM7d7ZBNNU",
  "key29": "4kZPm9t8Cef538wisNxarfmwX1oaiVmmWBwSrzuELqyrf3CP6YDaefLxDDCJWJEMbpSEekgqcQz6nFpbu2ZBFzkX",
  "key30": "LAD6Lxs1EYMjL8VcT7Hfp184h3wRAgjJ9m3YnUaYiAEe9CNds2fpRRQ8QiivfFSrKbFKRGfrK1XsSQ8GEVUeons",
  "key31": "EBzKn2zKxSGDAUKtYb2Zwdf5NbB93stYVTHxMHTXqSB1Zg9nj9js2V9FvEvxx9NCJmzTvb13JR1ETp8kNkqvygu",
  "key32": "4ceV6bVrbMh3MoLheCisdvGnpaKssNqXonpKKbyTzSuvkTghAh1f4HeajGJ7Q2BkPKUJvfMcrzs716LJz1H4etuR",
  "key33": "4SNwTmCtHRhTmcUUpetDgSmS8x9GwMfqXtokZkmCTGV2yJMGdb8CyCYBHn95JDTehFojZxL2Xse4AVe3xVVKT2n9",
  "key34": "4awd8jEsYn2rQawL1He64zFC4K7fVFYBC3ThDEt29mSkpg9sCHDDqC7pTNMDRMxUEEPBZQ5yooq1bCWH6XMVKvSK",
  "key35": "2ExC4vrdhsLkcRZczJU1moygZT627uGz85YqpoBRYRAGPH69SDLyut6hvwvgeSq7JXQVwDHkm1R1d7pGCywqzfqL",
  "key36": "tQFd2GhZNQJCiDbJJ68zhZecEfi23gFgotqoTpu2HiDi9EXCFJQyyCH1cpkzui8nsQAV1TwPyNDiNpKCTrL2Kkt",
  "key37": "4VewaRti641vsY9HQeapBWuLCC414ueSw8krSqogX3itJNdGdEnYTGcS2TCRMmpRGN8EfA4u3ymU7ZRKU38bzrLa"
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
