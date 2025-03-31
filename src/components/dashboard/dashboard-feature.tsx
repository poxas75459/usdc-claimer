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
    "3ruF8LisfozTHvCchVaRBbQ35xzJL7Dpf93TLgP6ThuPQrtKDL1cF1DzPZUeNWy4hm8aKaEzuNEDVdw1TQiMwAJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dZUk1WSgHNNSZ1VU26xoJ3FgVYjTUUiG4a3iM2seg25SUffMwq11po23MEj4bbczSL7KeXyNuEYvJKfV2v3cSHa",
  "key1": "4LuwtotD521z8CDdyvBSkM2rcsnenpJmF8TezL2Lhh1W8abCGtnhaBdcgTj9nc4zaVQn2FjngTb6thQLmmKzsQ7B",
  "key2": "3UuZED6C87grG89yYQCRZR7XEWFfL9LSXwd7UUSbgniQhz8oUHmAbDLxDKNm2qs3F1KMpCGWe7paU73yV8SQDY6H",
  "key3": "2KgyYvrHsEUu4oz3Hdcv5RRaxN9rjAHsqiwWmFEvXh4v9ndU4pZZ9h5TsmtVm5wvES8RQ4TJngu6XizRzwGCFPZ6",
  "key4": "21pnuFuKBAZuXRCFtzbuzB5tCSgPjHYnxaLc2njJrsTTBYTUEywboAxoQftRTGRYwMTCYk29KoNSdnKx868rEcVo",
  "key5": "3GnqKY92tGic4oSCeiCFaTaeYuekdjMC9u9Qb4ogofShbFhHfD5b1g2X8o8RM1yhpJDe72HFh4NAXXUS23DDuAqy",
  "key6": "3N7iveoW2YEEnV8bLSj5GczDu5HiAs2TUPHJQCuYHmaSHUwWZWh3GkZnioVgQWqN4FoSXRsmmjBjXM6JA2Af5BtL",
  "key7": "ezProvNDWXkGMZWnA9x3MfpjahR53wA9mHugEpdrhH93wvqaNzeKhrSzNU4ErksR7djVvpkvm2vzQXt9X7LJstL",
  "key8": "3bEYLwTzKMMvz7JNL4dFhDgmuVogDCHoJwbTZgV7igvxEDC8HmraRaX62ix9VVLb1KA143UbcaDAxuWwaDEXSjMY",
  "key9": "3TGeFNy5gj4vaLry3ZHowGnrg4aWqCrfM1Ks6fVMttBi6QNnuSYokYURvfi3FQcVsoipA5xQzuxLseBmRP2ZR8Jv",
  "key10": "2HRKoLkDS9Ri8xjt2vydNDMjC7gYrFMqTreWS9roxN5vDuogkXzebryt6nvGZ7J3cwujM3Av4cr7qUjZ8NkWYn7s",
  "key11": "2p2LcZxLXqGdRzcJzm99cg82vq4TrbpB2pBHboAV4Ek959aJN9LTvXryUeRcvgkN3SuCgCMbXXAnLgDh59SrKa1F",
  "key12": "5oK82ssk4xPcBCKYacD9PQmsz1vn7FfqdwZ8juCnnMG4uw5Wjye7NiMhKZXJ7M5Vv6EoHymY5LseogdTKJCUq2xE",
  "key13": "2ksE6Jm8VsWnmXQzY4y3HpT4p1zEQr69ibk4ZGATTtQXe8HSqBsfTM5pc8XmTMGXyb9BpSpYg7XWTq8K2FTDe8gD",
  "key14": "xJna8nw14v2CQJVG4CYS29ELk66V1ZJPXp6XntHQjbMmEUWkHL7SfDRoXiAyrZFHaG6GGhGr66MxCpD1ZYa1XJV",
  "key15": "2qrz7nYJCNb9V9dfWsRy63Rq54RM1dqbJqTyWMxL2YgdvAGSmQmi4yYvu3NrHjJ8QbpHAidoavFWZttx5JsEwoM3",
  "key16": "2nAsT5aegTPxqBqcaa4LBrzLdyf2uTwcQoNrTiE2LvuLcX9ZsYdZ5XzbhdBCE1JCY57iCGSyqUf2SiUPELx9s9om",
  "key17": "3XRRufZGQXM22PwSYT86VJ95zvXPDeuxqqeeBJBxyMNYXuBGxo4V8vx1skiYR7Rwe5Pw5gwfMdeu6JiMHK8vizBG",
  "key18": "2zw8EQQ1uL59UW9q9qrSB8r6XPMiJpDKYtDY7Z8bvt1xfuo7QpUkMoYoXEcjceTFziM9WNKRYnaw5SG8tQickAm3",
  "key19": "3fo4nEMWovDeydnaoutT9crVAFeeY3LBTohk7b4oazM7Akv1F3KZUQxjgw8gd36Rsu4V3T1ynJ9qSevZbRvfgVZm",
  "key20": "3fLLMrNcMvu5M72GH5AyZ3wPSHqfLabdcZWuEepDy5LkNafz7LQ974DZV8Twuzhhckdedmf4ysTwyr7uohgjs14x",
  "key21": "agMVbwXeGNbaioBP4NdZiWJ6ey142oH4MWL5Sd4L48vYuKtPkVT4G1LwGj8pNaKU5ZE95XrJC68ZBgPcfrjY7e4",
  "key22": "4oUBYF3gcRsJURVRuvnfqEP9pYeV6GY9kwg867DceQseArbjwz7QSpsVn7kHx9zzwMyAebDvZ7VCXFbyqe81Uxd9",
  "key23": "2vfSehCS1ihABiiHnbEh3rTMuSPazks3dtN9j2dNCLpN1FD5zpN8MvQfV6vt6APrwjrmNKhEdbFJK7s9PBWw7EVU",
  "key24": "gdusukEsHSJEjxvpu3atLMyCLc4k4ySFPnQHSDZfhxbufpxnAZGLRsL7xvBmqsbHvBFjQG3qkmsSdZP9YyQAocT",
  "key25": "Jryx48mc4tAfqnZDDvp6QjbiYvWTQWd5Yc6MknubJhRqzfXHUu8S9bCW5snkxnrfoKEUbCcuYJj9qu4zsxQN2Ho",
  "key26": "4MpYFgqhXGv1dH79CV4k66oThPJMPPVrKuoxXKbgJhaQ66wFX4pMhkzi5scKNkwNNnYwRx4sefS33NEagfwPq36h",
  "key27": "3vfRHBvuroDcNHut9PaSD3FTbzEgmXdcn1TLQsZs9Akf7NgBVYpvgAsCDaHYFfMJUg9uDK6ez8a6chBBa1huhsUw",
  "key28": "4B1w7rmDAd3KRgYT4kcfPYd63p2P7aauTWhwCdV1FJLikGpB7cxaAZhD8e7SDVaRjNDLany81Efx7ELeW9xvUgKj",
  "key29": "4r1QY9NqhnKHV5A8uHDyPRGwhbVVzEdYd3765X3vHD8Uv774BABr4bAa8eEicCtedifKdef2fFHLSEvwfzRnVxEQ",
  "key30": "ZTHPanF2m95LBvorGgFpjUyFVygJJkMs3keLMu8PSvvhFAqDvwhuTv5k2UawHvTEfXF2yqp4fQYNaQVyZsJGcjc",
  "key31": "5i18RnQq7nn9tF83KEoBBx6H72a1TevsWAZCTuCQtx4pKGF1XQtwPdwaz86Ue4THQCQmR1BuLXNdoVvL7bXPBEmo",
  "key32": "5mu2ZQytGAqsDRnXeJCSDHdmfuKmmgmboemev8jkGxUtftqDJhKPS97rubNyfGXPDq8YLSJ6ahyHLhqZatKbQHRk",
  "key33": "bRjVkGdvuk4j121gbk6WcdMWAR9zUU9Wu3t4nTxHKKKfERzNadUWTfwQjGDvsdAyLQ3gXC4Q21M6KsSruNzrcu7",
  "key34": "gXVmuQv1MYHMRYkuM8hpRsKmHD9EW81dfxR32sVZ3NttCpMnxmPEsYW9GRBZ6jN1XTMtiYmGwizM8jSQXDxvfD9",
  "key35": "4jff1NDsBfeqAFao1ksjnfRKgZfsXkkdJns3NTvWuSPg3JeKxCLcGA7dPAfQ76udkATDE1JNUc8EGwohYkSu8YdN",
  "key36": "3pW4Pw9VUE3wYRwS7AoUVLysZiesFN9CcAJPkgncU5gJJTtsKyjuvtDiry9h93AHYmPe5Gjko6yDkx3ZnSCZGwM1",
  "key37": "HLyK4ar8af7AeqwAby9SS8HcpGhN2Yu1jgRbZniGWmDMJcFhKB15XUCVTz8jNris5YPAUuw4tHDkmpJCA34nCkt",
  "key38": "2VcnXWYRVmS1VEtjuG7NoAJw9cwx4QsNmeA51Q1bmAEZnTutXE8ipu1SpCpkkWZeY34KH9LB9aDYzpAPPnfduHMV",
  "key39": "4w3U3UeezutbTKdbRPUEB4YYJMMwRL6F4fEwCWfvqBTGHBv7yYzXA8kbVZ3Y5VT2zABhUJj1GYqsAoVb9KdGx9Qe",
  "key40": "5AsvQej3cjM8t2qxcFk8PY6RH1VzwfissYeBCwhJmcEZ7x46faqDdYHZr6oHmFE3rXAY4AgC9EJ87ykA2kRbHijT",
  "key41": "tyPE9jThnprmYdDUnnRJoGZ9oLmwACVXZwUSTRW28UvW2JFJwdHrTFom3VHLmK4AdhEr7snHNkD8uQMpRyiJZCg",
  "key42": "26f8zRhNN9t3k8zLDr5UGzXW9YzJ9wyMwPGkKow9NGFiZjfTGMoNjdpk1KFawyHBY28mdgnbeJUdTmmktzEoHwsf",
  "key43": "5UaYbLWENue146kJy1uRyKutstvMSJm98LL3cGa6gT1JMzF7tmFmFuQfpPaQtX1mJw25JEtpNNknLDFTh5FpDLKR",
  "key44": "YDTESqYeG8WQ9SEVF9t9J3VqJYGr7ttADmTZpntDZriV3wcbqGgoXFbgPY1wB5S3SYbrUkPY385S2pdaPaFeXBV",
  "key45": "VbMkbtRbNwkEdgtJrhpDffRZZ9oBwzifYwECGF4g4JaWiZdCohq4Bh38W292vJQNmT99WeVQvPU2EPCKMnbbp7i",
  "key46": "eGeSJCDU36mZA6b9X4X3y42po13m3sWvJMf8RBrk39RyLcfH3LLhk9QdksCffgfL6xu3ouBpnMBfpPweJMS72H3",
  "key47": "4GbtcUMzuXGPiqHsxv2yxjBS3CtNhoc3kyKDoDMK36Nm49PLX26WYYAkhmvXjjDEja8HHAiL42TAvbTNNwm7Cwnu",
  "key48": "2Jw34RRRzDVZ8oQATngHw8sNDwz83c1MjHYcC1DKYoLaQnWuyXmXAcgSnFu3ENpDJSBmHBurWddRzsdxxKUMKzLQ"
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
