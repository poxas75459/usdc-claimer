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
    "gQKCtqYFQZ6LfUoSG2DEy3EmN3RUwPWKgKj8ELW5RjX36kJg2psKP31Y1Dgg1bh7xrwhM47aFazRWvDEqsBVjGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m619SCAtXfqkJy8dBh9VrN7ahQFdgqmvxDGJAF5FaJCRAQTJRh5yskWaPzPvqUKy9hqkhzXx96JJMrcTEYVBqcr",
  "key1": "5hyA1saBcurheG4oBx9WD23wT5vFXdjJ9EkuvJ5Km5CmFnNeWwWFERUmzjo2dayidekanNSPzdV9ihCdEh6YUjfp",
  "key2": "4HAWUzCkTrDUnNWWnKh8dBJMyYbBHnQkrsMq4PgsCfDMimvs8apvf8k7z4UMgXHCrTUD3wDSTYFrR1kMAgcdWauv",
  "key3": "NLqBXQq2ohJbVSzr8Vjj7xExZdLBqQ3DTNSGLXuDeDAvDRsfFhbrohkz6UpYiQBy3kzTbr63nMDKdujvGMZ56oR",
  "key4": "7iekPjdWXkwQnGwXrW6kq5F51g4WhRsSDtUUfbUE9khwtTuDWFExRBU5VDz8PsFw6a91bmQAPS4imHHzGZSg27x",
  "key5": "4JURfT1rhSmeLpxt4dv9xFFUPbXWNsnmzVygC23GQE6o6musosuvnb4Qq9x3DTfVB545eUdgAcnCTDSVRBYG2jVJ",
  "key6": "46aCpogRq5kM4paSAmhtvv65UKQee3P84cnQmdEtzoHWkJUwHnp5rDDvpA4urvfnQNMEr2Qr4As9UTChpLgWqVZ6",
  "key7": "uWpbLVmw38Ejp6dWTNz7Se9SbvDzWigYsG62S9DcTs41t8bHM4htvMB7D2KYTKoKP1pwaHvcPTddKNCkzk5TfLr",
  "key8": "5tFDHFZqpdnh9U7ydrcvZjhkj1z2g43zfPsHDjmnHH5G3K3xPxyC1tQfL8LPSmvkTN71ScxL1skVbCcLjKEr5Y4i",
  "key9": "3zg6s37oij7rC7zADhqVMTm5V4uc2EobEmfWpJzmuDuidMKAooaFt253p52232HdtyunanmRYHKEoDPcLnX3R6u4",
  "key10": "5dDTm7mCJATewD14maxvLMNhh6VxhKPLYVncd3tBsMsHmDn2K5aNiY5myDRri6wNWaLDVvUbLRGnrvgKkBTzyZoy",
  "key11": "5dnYDQNs2iv6eLdtVvtT6sJQ7QmpE9vBEgqRBHAyg2NdvKPLtJyj8AR5DFB7EmsfHx1nGywu3eGJe1tpcWzJDXK9",
  "key12": "3AivddRbbTWraPTK46yyTxkTptVdSoPzCBJ8fd5EabHy1NJ3xgAjnvxhPK4smGNRtUhHVEA1gSKXBMzG6Xf8vKaF",
  "key13": "EGzKHNjKRE8b2Gz4NEodyrQU2ZBJ7WB4DscdVAShCLBeRiWb1huNEpqHx5bLiUF4Qi2QDWxK6R5NsHEUFGzt1Tq",
  "key14": "3iEVXtXSbES2vvf3tDS2rR3k5YSwKVtfqkQiaSehRZ9vDy58dr5utoHWcUQvYX9et4yGfkYsVRG6AEay6XjkuGht",
  "key15": "3hNkh9xfa6m6TjqYnfuzCHAXRkS1tmhrVGH2yQ5aazpimjUZp3sfMkH9TCr7zGegEGd73HDVJX7eMcSNFa18nK9F",
  "key16": "5UkBs79GdsK8JUBnfPoxhnd6kTCD1SgopwusDPLok9gLhjVfgJUKAZTWmJAcPhGCTMftywqjB6r6Cki4RJ1LENvr",
  "key17": "4o6SUQZj72c3j34vB6LKn48MzbhicGBodCdbz9c9SD8CdrHuFSgahAk3w44Ljx4cZSGFbxN5VWiznrWJ92btU1a4",
  "key18": "3GqsfW78DyjTbzJm45zjSuE9uzQb3eyrffTxCuqzwip8A8Sk5bJ4ocWU7siATMjXTnByNcUBapA4AHR7DCcqLDao",
  "key19": "3XnaEyyBSfzA7E6WhkroBq2ggfwNzBhWEreF1AZmZQgEGkc19ho17x8JTqQmWhjHKrciC4EibztoFG8zZd775Z93",
  "key20": "4M19Kn4sK5gg7inyxbm1jiDRVkZmR3x5K8kNkfZD7phkXvbVYLqXiD3igwReQ3ankRrpAKZPGwCELC3naQrag6P7",
  "key21": "4JL3gqVqmpqqZfqPmReYEH7Q2AcHxv2v4Y94JvTrsEKv7VEBGCQAYCj4JZ6Dzcz379Mt3u41TvhW1KjXrLiVJYXF",
  "key22": "4CuXTWXaihrKDN1xZqSoKi7eXBdwyR44wYmkKMDc5Etf97Vdpvs9wUzsgDbujpKArq89r4PyseQvEbwu8G8WTujN",
  "key23": "5Q5pw6EJ9fR3pvRdJ2bK6r7shuFHrysvwaDsFzJfR7sAsuYz7N4UtjV8e5FKDAV5mgYQ63huVoBsDLtySf12PnKa",
  "key24": "1vcNXL6xet83QT9JQ2MDGvesfbJsyBopfYTVSypFAZeFR4EWd4kxDzHCr6icxNyPEhvpUf4exj5rpVw6c57SJnA",
  "key25": "4zxsZosjTSbJKtyEpfFmYvwsVM7gj3pFNiY1mqGzeyHLhHgPYuZUxoQXpDDB1VxXN6wsyy29xvdQTm1QaiFEmmjK",
  "key26": "2t492ZiyRhXQZECppnNB9EErBSZqntHzRoWhrk6LjdftEiR22TPaKa7Sy54av7vRzupmQK8kNtfKwT5PTZycks7X",
  "key27": "4B4w2XE8sfVHQ8ZNsnVMMx5VLwxoC11cpZgPLbaN3beQt9qrj9j8SAUnPozt48rTMYzcuewV6v2LeKHyQv9w33tG",
  "key28": "x9qk64uGeUnL1sPWFAbMpikp2gCeGXtXJMW8Mt4GS9miy9KC8sAt6TSfEzeRnwHmXrHrZdkq3XL6NkHhxe2FGsL",
  "key29": "38P1XQfGg9r47fsRymHRAduGxCRMQ8dtkRQbV7vwsGSh6Dof8smwHSPfYQAajvdqgw61HwGmh4QSiRZn8D9KeZ5b",
  "key30": "4g9L3pY7rbTB1fvbPc2gwMC1HfAnH2dPJEMcwUNggRgUM3Qxh8nJScHr2tB26AVuhAJwhRSNyTpWCANNd35eQco1",
  "key31": "3qb6RB6uzPfCERGVVuLodGoEb3dpYFsqvCQ6ZEtmEcqE5PfxBusLb1FEshX2NwSphJTkU9GENnLvWUKWyiZB8DUt",
  "key32": "3ShXrt6WCLHozcPcvYsfsYT7JQutHSENRiyYPi2ZYTFwRmRpqP3JuGWp13HbfMtJYczkLMWSCyahyKtMATgetCRZ",
  "key33": "wpSFnf9s6ZTqcFFzbHYjyk7qCrvHNtPhyHFb4moz3fmhfjgnpwecZc7oMCfgvBKWcceRG5csogix8RG8riKajZ4",
  "key34": "5nQKZiDreHEtsstQ47GhN2CEhQWnw91AKXw19PuKHdeQH195C5uqdeqLipRi7NHm71Yz772mznHnJM4Ek3L7fNom",
  "key35": "2rvFTWuuJTHoJM1kWxjtPXjdkqVzV8YTXb1jA5Z2RmWYCu7ouKMdpBcfPX1FoHVmYdbMubfPVAm82UuZCCCqggqm",
  "key36": "bdiEaDrWwC46GAsT1DjXXTaLkZFLqQ1AxXqxWsV5drPZHvF1rMF7Pxx6iKWhJ4Yyw2CqHsMpRCpdu6kKQNs1vgY",
  "key37": "KCBVEvsTDuxMAAK6brUk73spKkxXPdS7sKnSpB5izmxjauHabMsP46FExaJcSyFE2HYSkGqfKhiDcpDYA2ZcP2e",
  "key38": "589t6yTfDqiAbQ6tgQh83jcudk2AT2n9pNNN6bvzihpzxKouUhQPZqxCcP6vw7DV7ZEaL5BRwA62UGnpLay2DdQ4",
  "key39": "4mNFAUSf42Kvj3ErHMJFdZmFxXJQ5btdRBXbwF9Gsmcg5W7mMFqPxRJjVegKhKk7J4v3oeepqLpG1recJFe3sxCk",
  "key40": "5ST7i1EokbaumJpTkVT6PBLQHRbdxMJVrjbUqcxMGgtgxztYfYsujpKV4V4xhv5tYA9FXuduLvnJVHV8j6QUgdjw",
  "key41": "5KrjJ2aFd6fd4fWS22o9SjZet1fRPfsoQYEkhm647L3nAEcrZtnrEQaeYEFEH1xVcGWz9vnP8UdLFnyuWwceXEnv",
  "key42": "2zc9q2Q8hbgBJ5VA7ztwFbaeYpdEZTHPBPZ48KBy3qKr1hUjkxbVXuWdNTgimZPPZmPbiyW9KpYbRUSVKBofaLwM",
  "key43": "2QZQJeE7ciHtEMm7M48PtEcPa8uUMMakjNqyvoazm9XVmURDX2ypyKjV4JErb73VUMtyoc3QwrrBEf5gzFUDTqUU",
  "key44": "2MmYAVUqzeHCtiDFPZM3BrrQ43EL3G5R2kkEmpSv6X5zZHX7RETBrvtz5epKViSPfBUFJSKnGhvWAe6D2BsyeZ1c",
  "key45": "5Dqn2BJZxmapYcgptdt8Ci2tZY8EWAP9Nwr2oFvbmCJm5zBGZQHfhrxEcLbvgvu9VG7UTZnx9ZGTypNYNuFuge6a"
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
