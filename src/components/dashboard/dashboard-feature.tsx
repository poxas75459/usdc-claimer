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
    "3Z3jY6Uq14kxtsEVU54iiTTLMkfoN9knWnL7Z2w8pCCLn3RSDF8T3nuVF3QrjEuWaDqeZrbdx42iRrgrTAnCf1n8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5LfAcieW4eMRqfU3Xgc8xPBFv4rSkVkQEJEypozGq39LjsQdVXiTA6UiqsXTtDHi1JaN7rKUYAFtSvxFmrXpCu",
  "key1": "5ZZHHXiPdRVHrj7JeBEBjh7y99CgEKxvY9XYM9vcs8P5KsrR74CGJw6gLTnztbvNumiB24xVYfM2B5QAwEAJJ2GK",
  "key2": "5cYaWeRbSXQwk62UhH8gwKBdkVq1mdqKpYGojny1CH1bgpM4t6VASwMiVrsVuKRwXyTC2NavZLcrucS4BguFhvpV",
  "key3": "3wLqthFKo13rh19bfkzGuZXSLAkjtdrmW8eQp6bKhzsZKbg4AvM9CiuLJYUNi8EkqJdQZbeLR8ungutKQAwTqxHn",
  "key4": "3LPnskomGKX4CFXxxcYzwxsXRJukqECdGMsBQgsq9xbcnHzuYysqVyRukPXpPqFU1QRg4UDozzWYzfhmYG4Rf6x5",
  "key5": "5MYs5J7YtFYaadRQ7vZQbuuFWzPvJATYLeymVtDMr4nN2qYPs4QTtWYSvJAG4p6FJhEMVknkWhPuoFD7SxVu1gWU",
  "key6": "pucL68Xq6kLL7WwxrMBjtZha6V3FbNRGVAKK5iyP2ZfmgZzZtnjW5jNMFZ8CoDjJsWQVKuVDVK6NPVXrB4x6izD",
  "key7": "2NEpY2tHvsQM5Nv8Pe8TSunC5pSdiimR4jSdAvTCatFpfhuy6xwFTwgH75PBeLgqa8Nyt7mtfHzf52hMkcWJm7Ld",
  "key8": "3yH9NTsAtEVrdbGEF2WBQoNmbZBzB2Mfmj8yV6dDh8zusJcXWCuWnUk2LoguUFQqVVE8GPt9c1fBjSA4CMxifqoT",
  "key9": "27KNwBb1KDAWV5dY1SqUYBHTkX3mwg9TuswEum1rXuc1Hs588nkeNhmWcSHP3N1Db6Lxgur98qiWxT4fLizhPpaE",
  "key10": "4X1FDPUnkWa1sTQDxjnpefiDLxhRSBFk7somyjyLrYXG32aYbLVrCuhdRunxwuMuL25bxcQCwzgC28ikkbopYX1K",
  "key11": "5AUSeBpipRdZU6mC5Cu2GNnQweShv5tejmkxFNcgXsUJAQyBpCHbMCc7CdgFP8bACXoyrPNntZk8gVz9jqzpHML5",
  "key12": "5oiCoHEwuUogntM6QoSRFfjApjGmhazRZeymyhmHxoMSuvqshrxzyv7R5yopRrNyBNthTdfZypirvgm56Ft1KegW",
  "key13": "4zKPC6HLJMgFRBiZ1Wd7o5AWZAVB4UWc577mdnWehzqakV8xkAcrwrcARVaLkQD52JqWwZboNqBMgc4D8KXXAcgo",
  "key14": "2pNmFJgBB6zhKGN5xPVXLBncxEjm7yzEaHjsKxzUhvmsbpA4jh9j2uqikBVrX5AiJWsgavvybj9iznj91C99kEZt",
  "key15": "63N53E9z4dhDhCcyMrAqzrSNTaJKFeKxp6sgf3NB1aY76Xik5sb5mxb6AXUyxSjjin63Rxw5arYjqEBdXfQqSwUt",
  "key16": "3JW6QyQLvZZg3aomzVd6V8sFLRJEeLrdmcdSwWiJmsvaVpuUzaYS7muL3MA8xkWqWiufyQGtLk2YrkS8g9y6JSMP",
  "key17": "2TVQfuyjijva1kQYx1KbYMPSoiARYF4puPMYMLXvbSYPFjVJKrhQ4tYgrncSQN6HouxBKAL8Kd3CwcEca84jSBgg",
  "key18": "3BkRh8URc9zAtp8zkp2msShERbF2LSMfiHbBN3R9jkCUR8ikGjsFEH94m2PwVfvGDggqQDN1uKVAGqbFfjUJ1DVD",
  "key19": "2S43BrE6F7YZs63hPWD1ymzzjezfzX8CgCfkd5JyQadgMkL8YGFFsYGPpj6CQUR1PZ3dgS2dvKTiNMjhkyNbH8Nk",
  "key20": "663ALUVtV5suNhbRBbfFnPvYzadxfY91QZKX3Y37txhz1LkMTJvF14zrKBxKsBoTaLrbawTq2WwtEtnuyzszuLRj",
  "key21": "5Yz4LmybJzmASBs2XhUGbxZQfYJeHeot2vbETAeRiPxRa8T43N2KpjJ5Q8pLNMjSoHFrc1UNQsfLpDTLytYDK2bp",
  "key22": "5f5akpSxPJuFpcY3yaU2EVHGBirAAKfpMZMYCmorA2rgicx6FSXWFW2ukmpBNDJtPhEsLzXwsbTLSrydKVtikrNN",
  "key23": "5e6TR9dmzyww7qaft675fLJ4AVgwzRQxgWdorqM1kEi8B2Viv9zNHWrK8D7t6pihhHktcEsQbMVKKUuAEmHVx8a1",
  "key24": "3vuRSLWGmQgk1seAuaVSGBs9CPrgoL7tHMG6rgPRgSiJtsB1EEthy49PHrhxq2H7gS5pzsFBDcKnJXjStjq6fqz8",
  "key25": "fQv5pUncassZV4mTSRMGwnWKHvf498zgA8ZXALugnNC2kcYwfgvZBgXGt6LhdT5b3qyLNHXFUPvNy7L7inA8REL",
  "key26": "3xAs93T3ki4KUqGPc5LDHtREi39oi3B9EH7PH4kqgnLiYrz8JxHaJR82SkyXPJJFHR5hT85krRpS7vDYPgM2iRkz",
  "key27": "3gFYzRD1BQptMyudm53ZRpkWFQqhjckjyvxe4NSLy2cfKr8mMN7DKaBwMpJWYP2C19x6udE52oHrfsdKjpMv5jQH",
  "key28": "4EkArKXRqRy12E4BogvQf6G6zfnSQ6KDixSA9rqEvP9h361k3gxqxA9ousiWgZTSmx87kq2Rk49GnMX5sZKxNtTb",
  "key29": "XPrvkqwE91tPHgSTbZsyWCvPpNXtCG3vgbdWNBcGDdvbj3iWaUcArEKfEarRoQ9q5rQQD4VMioFm2fEv6riYVk7",
  "key30": "5PiWLmAdobYDHNjerYFuenaRr6Un4VMks6VWuGBrivqQGkcC4RxovbjGZ4sUjcdzqqPBzDY6NKctboNWvCcNoNdF",
  "key31": "3yK2PGxMYeMNv9UFWv9qxM4HvUjPDfqPtgSwaaZDstQvMw2XyH2zvpLK9VhbRsFAZqWgfyUaKKdjUSYpBDJJT5BA",
  "key32": "sgmMW57GQMJytpRqTAwUBZ4yjGZC2rpH4pdeCU8Xt2n6FFEjNqKmpe1zYWbktf5erQZcwLjkFEfamPMfk39Yzoh",
  "key33": "4hh33VMw7abngFtvnNgmjkyGajeowQKnQZMmkRY1svKW53uuupfCVG65ikWDXXshQFb1kNFhTW4u8VkwE1o9YHbr",
  "key34": "EFk7UnkG8UzjHAqzHwjxTFtjsGjW5RhzqrYCD5Y2duwsLwUbnjd193FKiVQhKRJsmqAAkHVGqQCVnzvwiqGmHG1",
  "key35": "2epRbZTi4BvyHim63mGD4t1aHRAejVW6L67mg6rdUHonrCR5a56prVKfgyxvp4xohPGNuuk2ooYzJ2Zd5pTTidXX",
  "key36": "5LFjnhCgYp4ZRXzTMJv9atN9NoFegooj97j2r5oyQrErKg1RfKe4YK4sarGsCrtfTK2jnXSVHKNGxPg94zjyAy7s",
  "key37": "52npXQuySjdDDy3YGHBVPWU9U5nwyxw3dAgEEe7dwMV2hPpM4QAar5QHsnsnSaoMgx4d9zsezzxrA6nzmaXq5wyC",
  "key38": "5jYCPaaVGSLqRbwTbi27dZYE8SuoaXCB18kGJgDMFSxhrAkTZ4fcio9gznngvxfzhkZSpUwewkFN78Ukcq5VKLZo",
  "key39": "5TfLRyfU1fF7XcdTYhjLq1wnfbcYTcbjmqEidM77RuAQZgbkithUco8UgY3obkAjXrZugv5mNAN85HLK42dHwZYx",
  "key40": "53KjQZxBNePkv5LL3pR7iBJYNfp1kwHTro3P1tDLPXgAgSyjy5iengy8Q33L5NkV9WBSAvDgBkvzCwPq6HTQQoVD",
  "key41": "GsTqPMTDuucJLcQjADA6TweLBxD2zCsycKkG1pgYsjdoQC5XKgb2DSL5U2PX7B4vhmXuVcG7YGPz67Zb7i3WqSV",
  "key42": "27F9ZstgfSXmjmJvEYTDGhCxVaCvNKBKC8juf7eUbRAm9gtFTTKTfeEVN6SSoJBsAf28em3b4W9c9qNUEHqSBtoS",
  "key43": "6NZdVmajHBjeagXycoJpgYQYDvtud8349i38bH3vTgMsQnUCFfrmQrga3Bpt5UuzVuD24cDaohpUYVHAyT5QPiD",
  "key44": "4E4TefrSfVWE8zbzT3SKmxDVbBEWGh2pMGWWkiZtrAiZKchWmhxcyG1WLA85bTh2UwSbeCHC8SNtef9TTdoJa2cJ",
  "key45": "3M3NtJQ1DWHCfb5HQB1FvSTtzjurWhqJt1zkMB2GrFSVGM2RguFoS49BLsSpTa6S7Zb9wSQ4mSbPEazEtAGaYpZM",
  "key46": "5T6rywtgAny759TgtmzLMGgyztYm17GqDVJTWxLuhbXSwcbtnB71FWNam5sQKH1ejUHewm4XX9AP1EPAou71wWcg",
  "key47": "2vCYCo2B5NjXt9tQTU6fb8K8CEn1RSvN51Kc822UPSXNEqunPjR3UxpjzcGfgeFGHdNpH886BfGRyjiQBMp1u8ip",
  "key48": "51tQtqMAvR7MH4sPjNXwMFbvynrUUM673DFHE2Rb8LDWQt66EVLTBZwZnwWBwDSZnR1y3esRBBnr5ZwoNyNsXvSY",
  "key49": "3a9rKnLANmva932yTJwxrBCpsR4k5AweFQZv7a65i85eMa9WZBtzZznPTWaqm55YuFhiSTHDH4xG66dtwMLYKfSF"
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
