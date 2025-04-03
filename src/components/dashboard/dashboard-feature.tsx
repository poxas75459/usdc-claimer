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
    "2vMPErSpATgXc2eMdFcsWvTZSZRLQunFRqbtarCpvgzpAYhmPZmUbRyExvXRKVwmGTH1ZpYvpZ9G9UnDWwrGh4km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32HtpmBqPL2TwGVTmauGej6QHeu9YG6BZ89uKbkKgrpWCH2nrSPVe9GnMjYVF3g93k6bNyKBPRjHazFi85effRJ",
  "key1": "4miN3iiWMJKgtvH9jM8fHsoCVvX48LetrXmvwBMBXxeJXxz2mCfzAtpnraa5QKXFAZWU1noXCVEDi5Gzdb6hQAeV",
  "key2": "4szD9ytnbJ6eW5x4Qn7bnX5vDruC2yZDKwN5v8sxLrqjrKz18RrR3fWUEbCcHmXSin5QknA2dAx6E2c39HhcrPzv",
  "key3": "5V8gcpx57EyVYuK3wvjcMyX83TjSMfPsfrnWHaXhKr9fpRWBGGE2iziwMUStqNx28LE4F8AmDSQHmfZXP1vhu5P4",
  "key4": "38rXHRNqYtJwaUbzRPPog1yP1b26CBHMAxeT8EdpptWVwibnfgxvkduPG4bGkK79KK8rvzwhqC8LAQbwndUfJUuw",
  "key5": "5RYM6PpYWSrcZ4vBHGBf7fEQKtKtyuC7GWfwxjw2sPhkZyM7o3YigD2xTNMJWD2QQvro3MymhGN2tmpzZWCu46dm",
  "key6": "3aAJ3S6fhf9BEZSX9cEDtzDmwh5Cmc9sGXrATs8diWnJBdg5sLA8wMbvM2KE9u2YS65a2bW4hb7osrUcXpWqU5Dt",
  "key7": "3GzLQhNryKNxpzww16DtRa6AMJ55dsUWQi1xfJzptdV923ESPpFpbD7iVCKEzkNJNJ2QynkVNx4bhbgNce8ewXM5",
  "key8": "97h4xGgpBnwNTnZnvhu1154y5mkFjBqiyT9eqLv9JmQu4tYUZmb4ydrmo93yyQ6ew7ST7dYYWQ5RzueFzS7QwBY",
  "key9": "2w7SzpJDYK1VHhigykzYTHrPkEBsePRSaG5hwKFtVoguvFs9SjDTufWjJTGRQ7GY5JXuh6b9CTXNz9o3sGJcPPxd",
  "key10": "3XKTQ6e4yyEHwFrzdhtU89ykejQK1otL8vzyfTikHeGwCadpW3hpY4f9JwLDUtXnmj2uBA88CS6RC5ZYG3ai3vwQ",
  "key11": "4HfPoGkkJBSnDGLACTphWgvFfGG5BhAPGJmWZTh4wez4nxtjyk2ejQVww5WnXnLAt6ttsLjizcijh21JLWt2wLXt",
  "key12": "4gAZxBw2GKBEr1211jC8m6229n8x1zr4uj56yQteuYdTFzjmdsVNPi5gBRuRbanuUbbxn4zETSRzf87gfdw6h6qY",
  "key13": "tUb2L4DJHGZUHHp8GSFLFtB9QFmyt7ru3nu8hd93nCkCoktGdQ4DpC4DzuB74B5Kfwx7G3pwtP8Fcxo9ShfnUtR",
  "key14": "wrz5Sf21xAbo3sKSBYHQwBMQ2BQ191cTqyog8tegahhHQZjD4EtJ2ALE1SEwppU16bZt1hJtjYW6dhpXw4wjRWx",
  "key15": "4Wf5UEr6BT1XZAdFNFV5EzeuLFwEGCCvpCYVXaYYbj1cXdmBsa5L2SAsa6fzTZfkwe21HH9NR1zgT5PzF1m6RF8j",
  "key16": "5CkA7TACcdMYecf8TxNs4PGf1HZD6b582wp9xBRFimuvRcRMFh6k5QuuaGc38adeBrKqkkZ1TCgg5Vkgxs721ijy",
  "key17": "38iK8pw4XDeiY5mk2SZxYVc7FvV9wdijZh31sNMvxeDGA4kSacbFBWpaQMSiXPLZ166AYUucTv7ztFRzXT57qKgt",
  "key18": "5kb4rqmLHJWuF88xT5ujYmnDM1xyGEQ3utoRv3ckt2X8msuNX3UcbqeTjo2bRkUHh7sDLeEqDRC67cuRnKJYV8rg",
  "key19": "DmquLuPjkzuUp5VtGpKVdxtQtEj4jJe1aQKGCmW28bUwhukgEBaawKaaGroH278fu1jqcnmew15ycM86gNvYpvo",
  "key20": "4LUsmVSPS85AwADHNvL8AoRGZcowRJ712itTeB2AGyBw4gKuB1eErGKPFiLGvaRJd1wbRrdDdkZANFAqVRB9sVUC",
  "key21": "3k1yRU6SspojWRRtgQFw6rRqDZ5i9kiSpeaQ38Sz43vQDFzXcsfE1cd1S1rMC3oYeCjyohKW67nJhW6Sk1nkAvtu",
  "key22": "LKrytse2p9G9ZdiqMFpWVpoRXwo1RBQt3AzNHuuisTABPxQCZKnzkWY6wr5JJK6p98mUVm86RZ3oLK16bguNnzp",
  "key23": "4exzZjmeg3v9cj1xs1JBFj53F3orzfsfQuggZFShT9c6QKA71pNggTQ42xrrM5m8FsGL1om4wWStPgpm1D76UXZF",
  "key24": "L1FuUB91wJs3tKxZfNyimk8J7bbLyoTzbNZNPZUP6vYioT1eX38snidnw1Y3S7V5zfSqHHFSwVAzP9EB6MExtoG",
  "key25": "4efo7p3yFBsHqBgvd2BW94xGm4BE7exSvSXZGPa6rTHokFKssEEi7YiUYJ2NjVgeaPF6m3UFPmKQ6mE6HbRwit7D",
  "key26": "ifdzQ6TMTHrDakjvTRQJapQX1hAVRCfKQXdppA4WEChdC3t8yqhgtvRHoPJ9bt6GcCVfV2MzRXMht1Vz9DZcrjV",
  "key27": "3DuV4WrdG2ruuFDqoAJKuyBZbPGBTogMgANeLFeN4hnyEEwJV6HNuV6ATJm4bFsmVjGmH23n4gHrNbEiFukeDsTV",
  "key28": "5p8aj5vQrbpoBbYZEZ9Zd1BVt2b1nuSTsCJj745v47vUWk7szET5pHDVthnBfmJWu3JorcAnEFxfC2A5K8JFMc2g",
  "key29": "3PBBVWBeERyezeVjwJqzfAqpdSygihzrzhCq93Yj2QxgU7cFSrigrxyQPnbRRuPZky1845X5rNsffsnysoJQbDQf",
  "key30": "4F4mKzpwgFnwmicrQkhofAJXNP1fb557RycjDFQe6Yj6JUMkoG1DGj7K7pG2URpWpL34g1aTVfuq5rrftGBcaqCs",
  "key31": "2JeRHerfkcjDnHu1VxeqSe29M7BJy8ZPagEojHRqrp3mkcy6iQc9zJCWJWwwwGU9yGdi3Xa8TETryWaq1LJJR7ce",
  "key32": "4uKanTE5kXXHhBHthcUDfx9b6ktoCsCSHJ7AoBTzq7emvkmFt8PYuvPFGot8UoCGcKN6VmBX85XwE4RmoguTvAQG",
  "key33": "22YTboLEmNdLH3ehYd9mCGiqJnaNUqS6Lw4sgpXdSiioxn5771eMsjQoJiGxEdD5ucqi3jW9bYHGmUPLFBZNCzp9",
  "key34": "5rRTdbN1MJShCfsqv5NzjkMJGRwJttibU26nHsNcUa4rLPusdASarXviL8GjLWgfX5KKiEhpizSSiV81oeA5rskR",
  "key35": "3YN3dksHd576nKveeq6Hik6Wcw7ft2ZSedtmrNnX4hEEW3L8ZnnVYngQB13LLuzw6pFYw16DcZpQUVV2RGy1TAVV",
  "key36": "47woT8nJQScgYVHE4R9x7SCuCmArYpMLgNXHaNphgtxTXwWgeh2mfBt3YDeiucHKPxCjSEgUtbniyyC7F7KSiBfn",
  "key37": "34TFB7djaAu4gdkqzVD22uENXks2gCJZ2FdkLQ8QPmxo8a3zTt3sgxK21nwNfr7Eq8fgLBdnRLMdRx9Av9ZcKqEj",
  "key38": "5DNihE7tY1gvQNKVeffcMSbCtXer5dwgdLurQE3fxAGWs24Qh6tsHaGmyfUi1jCCErqRgU2MNVrnsWGwfWn1PnQC",
  "key39": "3ro5omDUneB7wRjJYvPRJTHt4jkyb9Vn9w4w7TBWJ1W44ezMadESwpRaRDb24fyo4TtXG8CWhnQg2EpswXedy53",
  "key40": "dCQ3T8Km4bmD6y9jTEP6UQp1Hw6EEY4diH17QMXaQeryP8BNzfZw5fXAa3872zoPtVB9cPrQ2mr6YMwEXVkVSJd",
  "key41": "2L9jwKkr6tKdmpxyAnc2XyAoLVCi8FnkXBTUMAVCZnVuZXxGR9YH8oUq5Vi8HjBEdxP8r411MJahChPK6eDopCqs"
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
