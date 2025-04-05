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
    "2ztm1ci2UH2E1h8FSgeNZpLqppuTPXYpippMVKHJA5iJksbL5yiLQWCeEkfGypft1QyZXATTZyeSi8zfUEv5sis4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SoPRetj7Abu9aqraiJmAKwe9buURPBh7jGUGzxTjWcYmJ8m8MEnxLpgH9uJkrW9YESbAGnrEesDfGTSSuyBjR9",
  "key1": "GTyySMo8waDSSDa7ve3uLCA6eXEP8bdsZCQKzK55twC128peaC3XokNwuwxj4BiHyZwKZ77RjmLkfDqu9SGoiMp",
  "key2": "3AipcLu2jPVPAZrP2wynpasEJBMqwn5P6cX8uTf2FtxCbSinwce9cWmd4QoYcKfi4q1sUsRbThNs9U88NiZzpkaF",
  "key3": "2b9rFjdJr2X3BjX4GyHbB5e6AQ9FjoD3NDYbp4vQ8VGXhA5KLV9BTKT3Pqj2gz4CR5MJ7zLGYgGkNref2AV4EF9W",
  "key4": "XsdY6ukCaVuzwRu4xQkRK8kiBo3SXjpiArHoGPpRniKowb2ruERxN94gCCvy2YPz8j6HYYZ8g4kdrbceUDBYCnt",
  "key5": "HBxTEyabnPnY5tcd8hZasJjMo2Ljns6SPLEYKueF6bagSjR2Ckh6ExWzQVh9bFPxMA2EbqLUyrGWNNwcrd3VnD8",
  "key6": "XUtA612TmCAiZHmMyz5z519rUVL89buVTadDFCefDt4Jrfkkdj5zgxdwDNi2TvL4rHG2ft9FbuwsFDNofdPF2JD",
  "key7": "21PANpkTYyTrLGRge3qApLZdFYpthEe7vvYhcvKafyMq8vRwMwUMiuA7szPkJuzETBXLgB5RZio5VdyLNJ8zXYcS",
  "key8": "38JMLKYizjbnqQTQttPafmiJ4FpPfiWzbUVGx7e2nmSx1uTy1hG23zXjqUbJK1yu2QKgZUjnFJbRshMZJjXUNpFX",
  "key9": "5Tab7L17QXj6xdPDuk5z5vR9uQunAbGtKbZV7LCEsRyLzQF7FpDsmQqD6NoT8xHEU8AnjcJtEkH4dRgrjmkoqcsv",
  "key10": "5bDKcaYd5CEoi6RntYEGbJpLU9DTxpMDgYU71J2v9XKXkdtncejWpmXEMgbkgHmQuGbRTxVSRHUsKtfNvnqwDhjk",
  "key11": "3vz9XtXdAYYAXnuYMzgayLn9231AjcRAVbPTsvuurmxxAk2pN2H4Ts6rnw2JWAYiixxQKxQU3VVJahZwyJHHRmz7",
  "key12": "5YnzFHu1n1jMaXHkQ8wMSzfGKoiwyY5hHRV4TXCQCTwSgCecyXdDBk7dfRT1sxRns5NVuJmu3HBMs5L6X4VD55Ba",
  "key13": "5f2jjYAjk6Z4uJDo33928XDARZ3aJaZF2S91VfcueKgiBV71KAWxFes5YyGkUExvTmTNXn46VTLARdU8LyTEQtSp",
  "key14": "4qaExgCs2MHsLVFMSSWebixgFXqPdCqxLT54ARhhyYGqws8xbRqp41MuMGVLEA2Vi2DM4kUJn5cY81sVwh48Lstm",
  "key15": "4cSakjzj4Vpp9VZv31Q6PBvnftHk6WZcehU99CFXdeCd3mQMgWVLJYiArzRhDygUQaH7DCcq4W3WAZwNEwtnXX6b",
  "key16": "2cuL8R8y8vrggGxKoBXW2xUyTKcnbDQJgSziCVyShzDKRTqTTgcJSPnAyx7jVGZWngoVaUHvisai77NJSsua94ka",
  "key17": "2rgsd4PTivFc259XAbT9HXw4aNwPh2UCKVdbz6nL8Ptc95fxhLfKj14gWudWLHYgLSpvmwaR642eg87goWwQeycm",
  "key18": "hatJULTxXLQW6EdjzBajgT4vueaXUqze7wyv4YzbRw1BJjs2iwSvHXrTqGdEqkSPU9wgkpaFK7EvkhGyBwSsnbw",
  "key19": "z6eczveni6bTqz7L2uX1SxdXdVzp1vP5qMU7HvADY4Ze4oJob8frJ5PkzMrt29awbb8or7Y7d9jNK8tpbDY6ixH",
  "key20": "4oHkkcWPap2ifeoEP16snYaBiYjeCUjzTQCAcFRq3cEnQ1ZXJdDDPcSPRJbw7EyGBN5RujLs7oMkwuVD5gGhBh6a",
  "key21": "4o3tt7WyWKw9qKtoxY3zNEZevQewTnU1Nh99tNkfTsv9ikZv2aLddxv9PfGMYPdaMYRsmFS5W37GjjJm8uYtrsEu",
  "key22": "4o4Ezy3b88okbZEjXzYh2FZb4oj8mGK58himbAJybHZy7iN8H9uAdm2EYvfPApbFUkKFMUNSivFuccKoLnQDvdJ2",
  "key23": "35ykKumZC4m3BLQbutHPubWEmyuNpp125dCiy6xy5gAoJiYykpkx2Qv4mZ1ozUoVdb5oKLe9YnNe67LUEBhCkwNF",
  "key24": "3q4nXQaccMXrGUNjbk2p3tJAs29kjxfyB55RfxaEDsFS7NsS7nxE7kXMnASk89N7pwDX2Wi9NdD1PKZXEYRsMVMd",
  "key25": "32WQQydDkYQhZ3s2oyzh5eWV7DpmvmZeuNqmGzv9pPv1Fbm6AYcck78s2o18NkXeEg7CLsEB2EMZC41VUu7AHcU5",
  "key26": "5GmjDTjx3ZUxfyMNNiZcscCFK2t8Z8rb8W92jX96k2iQNuR3aWbhzdUBdjpESxMgKxESZoHerGBs2xQ2K1uZTMvf",
  "key27": "4HqwaRbvWgQviQKeK4dQomwQXbAn5qjuiaiu98u8SebmhEkoD4gSaRLDAGNa8Tu1M2JqrHG9ug4vZRBHHrejpaTZ",
  "key28": "xgLBp7TUh7EFjPE2kSJ1PvewKppbVRBomihwx8M8nnCGXn67uj4NVY4Dshp2kZSgRELzxuKPAL7zw36e7heJd9i",
  "key29": "2RyaEKC5rANBMNtpzAxPTC9wqAZMmnuEqkXz1ehGkJnWBMt6U82KQtBDAzM3DNfTzYKMy2Bm262mn9vZkPi2p3Mb",
  "key30": "2YyTFPumiCRs5bPAkz8NSEfJ595S39c8yHEscziu4FCg4iWehu78RohYuwa2wHwdpoRM8xFsoR4Zfq8jP9vDMih6",
  "key31": "4M41BQ8Ao5x8hC8fJy7ntJSSu7AgfoHTi3peJbmUhE3d76uZjTW6HcTRXsk3qLT9Y4sa96tHJKDuREHADSs8o5zD",
  "key32": "3QXKLGbjFLG76azaKHay7h9CoSAmZwSdrG8djfijdJhjkg13XXMSa8FSqsfz1CDPC1f7KRTr2ooVJ6KES3LjfnbG",
  "key33": "67PewwZ5JcxhCndy3HTRmJ7sXucAsedPZHSLX4TF4acphUSW6Er3vG1enZWxsPQFCcWgshTiguUeGtAN2NfiU5CL",
  "key34": "wfSwLYHnB5dt9jbPUkESiVTVwC4pnpgTeDwWNcd4BV98C4YMPKuRNTRGKwgL5ykJVF8V8tfgPjmWPoCU32hQQXW",
  "key35": "2eTodLj7zjU5DsrDnYDYT5gVRQGCVKw38D42Q4DBxz5K64iUZvnUa33E7ytavrD4Vob79BwtumaYXYo2w4Ai2cVa",
  "key36": "P3Unp18NuafPyhb4fnddwE7Np72g3Ytat4hd34NJqZMeTe51zjp4J4juD9fmcb2fkvXQ7B2ktuW1BEXQ9cgwFdg",
  "key37": "2UFnSgvsF3gShr4YpqQTQEWMoodgW6i1mWHeatcvzpen7QHzPWK7WJaSMaPWjhcVzNEvTUCjCtoGVEeMZXTwmpPS",
  "key38": "2LixebLvXwDWrEdUE5codKuZzm82uDLe4yAQsLx3Edg6W6VjyxzJrHMEw63XgEx8Z658cEvzG69rybpRRdQpaiqE",
  "key39": "2jRt81uvoEKnPHbQE2Ja2G7YvCnPHHFU3SSMqP128G7yc3B94Y6dk1qv7P9oWf2AUaL3f5kqwvzjAhccXqXkzkvW",
  "key40": "386iUfGgVDK8VmD9Mr4pqJEnD5UXK4BM65PbvfvWF44KDqztCHtigFhQ1GtjqPwGcBJRT2QrWVqmveNzEembSTHS",
  "key41": "4zLSFdP1ENbb2jm27ZqXNEMk1oPbd4qb9KeUMkTjfUPisGAXCyUNJBEeLkdwizCrxopCpWRErmKFQN7HYi4AuBho",
  "key42": "377xMqSYHsRmnbiSEGxgcBibjX8H8WD66EzPadh89PJekt7WgmZ5qj5k4XPhG2SFrmiq1Gz6Pd3XxuG2tvGz8oPh",
  "key43": "2wfB9nNtdhgDShrqWn57KzYibzFqqBYTgXxYsKkYts7pU3DkRp3F1oc8KaJVueGP9ip8TcncQGeJrivSN3neYFUR",
  "key44": "rt2BerLKdrBhQWV7CXMEc5M8SosoXfzfk1VjcH5h8UHixrcFNFEEjvsQLSPXgH7pdrmfqDMbq44iQm1hsp7YwgK",
  "key45": "5e2WCgouvNNkRCLzMv36mPzLGTM6k91zsZHK9JbdVm7oqpXuyNgBh47sVFZ8sAsgA67AHAhT3S34Unx26ro61HHj",
  "key46": "54L95CcDvCFPtqJSctkP3Gh21Q3fmNi9ZgytjdQHoksmz7gAD5H5yA15ESU5Szn1dzn6yS6EnEMuuTmaUyR9dhcP"
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
