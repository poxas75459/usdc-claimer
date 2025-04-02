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
    "2z4Uf47Czkaxk9myehoYq4LnTsYp9kh5HzSui3Wd3FogucfB86gyUoJ66Lg2gczwpQ7ZYsgoprVei9NGT7ehS7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kf9X2GB3HeFLgVHCdZUCjpo97snn4aY48QEkDQzCXHMQBDLtNHamuzPKd6HacvM12EByyhmNHb6FocgSwiBsncW",
  "key1": "4zhJEGRSr3KG9hCC6qtrbopFm4p9ba52X8nmEKdyfYFwYVjf1hYB5UsLTAxsWWBJNJEiPxRArH422PBuSz68GwUB",
  "key2": "42Lm17GsonrHFLFYwdBxxpMFJejbdLRMQBj1rS1RQiae8ywwLZV3MwRAceh7bJU5VvbL34rZgeKgrtV9CKaTDWhF",
  "key3": "3aYpGkR7TxthjbH15dpKiVwFx31ojhdmgbPmv6by2ovyAG9KckcTnfkCNkWjiwPXfKyUYpaDcBLaaFrGYe7zrJj8",
  "key4": "3QkQxxJ3aP26xapJyUySLuCokSRSGgrvPGiDAqWeFyxVddhxJ4CNgagkGGfqz6sVpQRowpL3vgqU19kkrRBRuJN4",
  "key5": "2g4LFB3DBmha8qCxmBmsorckZK4frDjLZJ8Gm3LUQy2v2PxfY5r5UrPb3kne5VWdJ8t7ugSq8XxLPQ8W9y7ccQ5X",
  "key6": "3cG2qbyNejmjExcE6uuexKNg4Qu3JxpQ1oxG5p6DWcna6Hy8FJ5nPMvZD8dFKK7UToHEhprqi7L3yk7x2BGVTAHd",
  "key7": "4CDQBt9F7vipdknFqvfkQXDRxrTV9RCkqVBtFxeqErYD6oW9Rf4Y6F2ZzgjPnZztBHgYn2wWx4WHFBVHyqBUBDmc",
  "key8": "QeeKiZRo2D3obMjHK81abchHahxtBH2zUYhytMBTdW9kipWGhV8HuxUU1kYTqyvv3No4B5TsEpYz1LrTUSBMmCP",
  "key9": "3X6n9yxYhmoZtEed8XBGxeeCQXLW2sCwKNTBefZJFUTNzsbeYynRuXV6bPK1wUAn716cqg9Rjyb3nMk2Br3GWE3P",
  "key10": "4XeaRdVjcKi3j8EAZqUUkEA8Cw8U6XWTa6yNSV52kvGofHiwB9VcSdHfSUqpfuwSfw4d2qhGCJkGmYFYtFRvugLk",
  "key11": "5ztrQaAGJx5GXswtDBB6G2GLyjh8ESvYsDzLHjaKuJSMQ4T1ysJbv1oax3eY1BkeCWjeT5WDZTEqq6F4ASK6ttir",
  "key12": "2SDprvdDqBsXELXCChTc7oyu3rP3txt7wAX72dgTCVLq7ncSjEwsfhB36GB9gWbYg8w2m74xT2TFXm4XYbPji1mq",
  "key13": "3YKVYEqV12ta69qzWJHDvynCwEB19MUHjGciwhnXThiap2um2E9A5PTKDTngDyGXHNf2bkLNYcSNomzY5zhW1PVc",
  "key14": "3S4NjoGNbXU3Lbf84eJmaD1mngPqM5euagvHUuXNPwPgih3N4fE3JiwpYRumYies7F5b2fJhFUfJpsNU51ZFNSG8",
  "key15": "24a5849jCDkiat8ZrV3gTxG81CNTfPQ3JpAfmowcHPJu8fQr554B9fk35zopCGqoCggJQzFGJYYYd95JKAyHgV9d",
  "key16": "43LemKXua4U7ephTCHmkpU3Aaz8p2a4VUEa2q3eqJNr4BDGq4FUBNkHhhGfW7r6Dts4sxvneqgs5JMagdJRVTBSL",
  "key17": "gG9dWEBmcf3atbWhP9UgYx9b8Mz77T2S4vzeyFeNXqPP2sL1SpjRdorcNyY8rMY61jg2R5oRjjLdPkJLmDScvcE",
  "key18": "2EuUQHroHjN9msiTrihcj5Enbhg7FPSq3rBqLQt8iJE93gdSdb1LDKF2VYGyxKAuk4VbHbcebni5EeeYUhWEKE48",
  "key19": "3iaqhApcS1muPucENkwKUnU53E992iDe7p68RVDimYE88vcgrdjaNkARu7VyBnydWrHUomdEMiE41Y7y2zFpTYT2",
  "key20": "3tMW2H3AayViFYWiwfgEKawy2YKsPCzL8F3DXyadKRMhPYbVPHRdDn38u38hmo6T85U8hnW4HGTXBCfExk9qHhgW",
  "key21": "3ukdYGp5srLs73i92BX3c8pwokp7gywgDWyGQVjVMJ4VLK6LYXozUmGSDpm6mjBtcX6XFq1o4tyirmPsHtLerDYf",
  "key22": "2W4ybpph82DoNtscCvewHySnoVSu5WTBB8YaRoycoaRg5X8x2VjjEj3974teeFwTQiirbmyhpuZYKynR1qxbp8hU",
  "key23": "4cJZBHfL1aoxXtTy8AxEfJFWnDHmyXfCEGf2vgdacGtnxhNmsDcYgMpgFqiBiBG6gpncmwL3y6u34GbhC683srgx",
  "key24": "Y5MJt1Ek6oa2jHaEQhQYa6SxJjLGayzBusNiDVc6kzuhS3QcP2FCF8PWMeS7tWRXVVdBccNVuUTvV8UqHbXES7o",
  "key25": "3grL7bENYkBrTzPC5fzgpPDBxKeL2zXdrsCUonMJNxgT9DqWv41zEd8orneAPbZ9C973nHXQ5A1URrgf7UVorQAK",
  "key26": "41sKpZbJ3cFr8JvJQoSGKbkRbvuutweV2R5e2Q482KbgvdCcQQYtrbnTPmT68bRgH6byLzxbPcrL2m6bkE8MGB7s",
  "key27": "4LmKPCuPuiDJK2yTWBwxN2F3Xwwme8p9Dj5xdGx8fitouHcastNxzPhTFyxut5zWRM9DvanxnN2NK4j97pASPpJW",
  "key28": "575csvk8dbzt43jAk29xeDwmJSvsHUHtdJ2M5VyHn89UeJUuFowpUvaj29m6L4oB9KpqcM7fGBi7fcMhioMAk4a1",
  "key29": "3ZjP7uhvxh9JUgKE3cii4zP2DsBgRvn9ru12TPq3i6d2orS1Z8wVY8BzuwckSy6K4i1zjstLRQNJEG7C7drc96LB",
  "key30": "5Gtbr9cyTTbk6NBvcC8LtcT9GpQXJJFkhUSmKdvBMcMdgyqRk5rZwphUt2Ze6H8z7ayV6t34qhv9yGsj4cwnsw13",
  "key31": "4ArZUcQMaoK5eWNFmryLvJm8qkGAUmYFZoyJ7UEQvLsf44N2s9aMA5V2mrwHeSzRJLqXKPpMdAXYTyoxP9o4ijgh",
  "key32": "cDcebwju9VQKkuvohCDJjHyF6PRX9LszPp63SbL2jnVvRuQv1FZQ4Whh2Ugjv6ScJvTUrq97XvwhN4MTXepYMHe",
  "key33": "Kr1CHdo7LhurAtttispURa79pitKAdDk3trW2G5dVNqEtA2twacyFGr3CFmdmAd17VDcsAz2sxvdWgeha2DT7kr",
  "key34": "UQkCmB6kbrUX2HXHjnhUcf73AXuqYustQ6S6qREGuhfG6HUmQcj4QERyYoHQWjN25cpEUKYKHs1Ui7Mpp7L8JNi",
  "key35": "4DwE4RpXnsgEdp1bJayUXBqFruCM4xUmwLMCRRujWzqP5pXEiJ4ACFPX8WSrNtR9u8Y9nAV3uXxc4QdQMNPadsRR",
  "key36": "3oEayKywrKeLooz8kfsuA4HJukbsVaim5LwgQ635kDtsNspcfVevEuQ3eKwHFyKBQey1UM8eULUFAJfggVHVdTR5",
  "key37": "5V1rotaWM6BsrAiqbcNxJZELsVVUS1y3DUtfep4JDdqFdEYB8uCmPkQ115NycreHALYLWTiKnEEDxJNDEfmErjtE",
  "key38": "4XseSfXMPbYrs8njCP8aLnL4u5CCoZxq9r6ENbzwmDwpyPDwn2oFFChv6hq9MFyiUwrDoxuJCPGetessrtMmFgpo",
  "key39": "61sspjm1pULytmhMjyCydoU3pueaD2RECpje9TnYZX7sRt9o8krE7XuL5FxCL2j6Tu6D1vV2Tk2S7edDGmtqPCsQ",
  "key40": "vv8KZBA33E3paYiMCqmTEzeivTybtDzhv48ZEhEveVfxyzWCaZbUbPVzeCgsz9k6Nfzwcas4ikuW7565tbCLw16",
  "key41": "3TgAmAxiJMLBmN8cSmY7pZFyDjxuADBj7HTudX9oGnT5cAP65jaqNDCxJn4zr1jrGj8hEfD8P1BPfUim6DbNC9Nr",
  "key42": "3sFVhySYsC4sbi5G2AUB24XfVf5xGT98aan11N6i1Q9eJMJtPEWk2vfRcvvCQZqSh7LYkZjud3QDodyJJ1ocgUiX",
  "key43": "jNF8KMwbc9rhV4NrqMUnNRE3sLpmy8aK3LoDi6UR5VJE9bhB9JjLPEMDSDbMMANs7PC2dj5kH1ALXESBbg4TnTL",
  "key44": "4hvpMe2guA9E9uw26ZKckoa82M7nhHqFDk6Gubp5oW1hA6PqeXRQGTd7QST6FKcSLQGjthqdxYtFkveGPsEaeFfJ"
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
