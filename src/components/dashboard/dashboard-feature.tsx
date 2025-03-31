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
    "BwPJZENXxxWdhxMAXtUVnkagp62dWY8ocr81XoRtw2VGFiqFof39LLzbcULWcKNvqS2755ajrwMKsnBi8hVgcgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLhJCiiMcK98FunYHE2gyQZSk8aQeH6jKKR7ngVPvvJoMobhZewpNSiSp4rW9UWzZhPqDmWYPDjWf5FrJ8ecVRn",
  "key1": "5RYi9mQmg5SZjyPa43k9tW9iP8YUkGnHxaCT2J49VgHuu99Cx2a3LDaTECEofyCCyu8fjpfZ2Z9uPVWzLskKWhJd",
  "key2": "4xaeqNwYXo5jWGQZuVPZdSZJxfneH42TawP6RRUcfDKe2TphFvZmgZnnfQFKrMaYGhLA8Cfnn7eoLgxSkovYSger",
  "key3": "KXw1E2fNVXBXV3Z3iP5j5W8VD5QQMEoFy5udqi1ie1NziHjgR6rnBwCPG7UxNoAsDHXyMmbTZSpdT43E91kVTtt",
  "key4": "4EM3kB3iv6sxGuPvhj7ZtaHY3WpBMSdUaN52zswehBHFZPYEP3PmTpj6jnH2WjhvtUQdwR5DwpuywxGt4afsaL6t",
  "key5": "4t3zmpGCcQvS9DzAtfzsJY613trxC7hA7ba2Yi9m2efgNjxQjNv2gqUDhN9W4XFL5iqshUdCCoq8LhnLamfsuZem",
  "key6": "3ceBv4CdKSa5MAb8rEc1RzACgXzpF5xmx4a1VsupGFt5BPVxVX2DaTfVC61P1ttDBQSDPbgzvL4wBDGmMmpF78VH",
  "key7": "2UTGwo59kwXSkSY6h31WhxHiojdhsNqttao9tZ9AwXsRoX9UnkJRoMnF6Mebiw31B5yeLVimVhkTSpRwqtNqtmvw",
  "key8": "5eRxJyTtyD38HsWxmauQ8bTowra8gubTK99wGhsHF3FrVFck6fmYYjSKhzz5Qdd4zFSLxc78MZCCoHCxrhmeCct",
  "key9": "3WcRQvzvzTTAaG2gaZ4XZKNCuTugCYbv7qDcFYQ8pSPpLEiCcQxik8crbETPpW5ZX6yDhgrz8ecK9zbCSpRY2v5E",
  "key10": "49ayfQ9MraAJ4KBE8Luyvt5ZgrNjkVpgEBQph4PWvEJAzsQpRt5GphddqowEhn7sCFtprufEuQRzVaiySzGacCJv",
  "key11": "2w9hM1BFS6nGoYemXDfjqVN9gW6yY2Cz3hwL6MoSbWU2HzSB2ZD92chSAsbH3AtFPreHyFGvpzLsDgPiPTpND5zz",
  "key12": "51kfF6g6yHNvJLDreEjbjo2uR3TCB25CWYGJ1uWoEFwthvwtaHL3S9NNCtCy362RubiPWjWrbvdYt6oYMUXRbk8R",
  "key13": "3JVUVkBRuZffd5i7ps9qQj3KURsb8KFQVmcMEV3mKDthHFDTbAV21fHsXejc1jhhDH8DS57SZ29hGtuedj9xA6FF",
  "key14": "56JWkfMKUcVBkQMK2gDKUhKXqMTLDMw3AbiJa2PwjykMXf5nfLsdva22V7atXo3pKxF3Dgbw3jckDKRULoAds74z",
  "key15": "5ghtX26g9uq9pP2U8GuAk86j4ue64fk7bpAgk5fe9FcfXWdes6wV7XaxDC3unsTz2D5oMVeydcgxMHvYWW9WjYTT",
  "key16": "5NrLVUhTjCD22en92UcAT1VQYTurdT6UuHJSV8H6osXqBNTzpi1wEnGaxnDQ417MEnkVgkTiuXbzFe7vsL6AdEd5",
  "key17": "5wGXYkYUMxesSaQ3iMTvvYK4tS67oTqzAJzNfsxmjnySQnw9nyTWfTikV8wPEQTpNQz87dphhWYDxfaeKhBeps5E",
  "key18": "3iFejPaUC4eaNR4M53uWMj4f9qDJuiYnBkjcZb4V3FnpQctycY4JYuBcNksZKPAhaFna8xe1hJt6b9K2oAFwtXs1",
  "key19": "3kxmmF9VLZ6Z2xWQNq3nYjLcteyfYN4cBhrxy7rrmKi83G7FW86tEeMcnBBPa75cYKXKgEegMcXzPWRsTmGUUe2R",
  "key20": "3ugdvwkhZmzhyr75xKDgzmeCKMCRt59nvjhQzzcVydLi1SJUFKqZ4vgSz5kNpKu42HvF24ZZdqsoBTViTy4pWaem",
  "key21": "5znnVGFUjHwnr5mpcoDRqw2DodZekn9YBExt5tmpE6TkgoyLZtHQsG2uy9KLqRVCiWjpWHGPNfpx7EfPUu2ZdD88",
  "key22": "2bxBe6FYLtJoeJCe9xpRDXM7fDz4V4T9XvZZrd5SBUX82fQ4Q4ooiuxJrCPQibt5fAqdXJ33z4EQFSazheHpUXVq",
  "key23": "45YSp7KSjwiYShMsorUEky5vRfct1wJh29ARhdcz8fzav5b7ib84kM3GLQE3R3XxhaEkCdGSeraoVwhVej9E6qFf",
  "key24": "44TmDyqWZfMxJ377ZJszvtxrBdXPAZWJxULEGhHtwsKn4oHy7zpoNPdJDKopckbZGZHo6sEpfMqb97vLESxFryq2",
  "key25": "3CQCJsNE6gvGayDXJxC6nVgkff54SPtXdSqeWbJU6oj8GJJfN15W2krAXoYxNs51WEfKTjVsLYjZZdurnazyWDcT",
  "key26": "dfnnJU8jGj6LVkxLNcbJAmhfkYBa9spqAmA9jVcnsprTmAkFnnxT1teDy77BsRc86PiuJibGMYVgmf54YNeorFi",
  "key27": "2ViSQkTRiNpfQGf2yF1yZz6jncRMo9tFKpxk1jQY3PeVbm4VrN6vekNaHcLbPE6Kk7tWpUJscrbsgS86s5RKBXWa",
  "key28": "5VB6h3sNW46xiuagejv7KBdpSRDvdg69E7BFR1YDc9Rsx1hPUyvV7heXyRAVvL3qqnt6Dq7cLudJXnPCugUgCfhp",
  "key29": "3PswRUk5VmJ3BUArKPNWdpoSLoQcsgxM1HpmGM2Q7sD8DP5BMjfMa8t4nwQ9KfcgQVGyEF1smEtyp26FvS7GiAMP",
  "key30": "ZM9rbkWdiWfUZ2iZ3W6UvQqMu5cQd1YajZgoeKsx2r1kMca3P5LbV6wLMkcYUrd2THNCLSawJzCvgfXSSYWpsSx",
  "key31": "3M82cB64jCb64sY2QdZ9WeMj7HT5CSWepQWH6jWAdEKWipcCWwZUrfN6BtKdedbDq9Kkukog7MotTtu88V76pbpe",
  "key32": "2j6Kp8D2eZviN2CDC6wGumbpT1ffM2ZCgzHo2xnifUAvR9G1NQwgW3Z86AduWWht92ExpLyLh126t1eUh9ktuSBV",
  "key33": "4D7BwkiSjJSc7cUmLzt23Bpjt92qMCC2JmC3HACsn6S2iEHA5o9oeyddPYnEHrWK967ycJbR6BjZDkBqMXLF7Pjm",
  "key34": "5MA2LdQooUi6WeYtWEn4uLmSFrKmWmoZZEciVJCSkXSreeF3n1tp9oAVfhzammnbFkggTvDau1AsDDsce3RCC9pJ",
  "key35": "3tBRDEFwaRg3pSgeXdbSHYNpzsdLMscPZoE9CRXJofm56vbWXt5174KNhH6AuUwpTJFgU9Nxtsj8dGdpc4y9KQU7",
  "key36": "2fQhoDR2BDBtcAqRpKTH1e5PX6AaB5BxSuqYjsNxDSo2tPyBXYiXCyoRde3oBN7kqmhZ34nNiZaj828CSQQFFmTH",
  "key37": "4yCWGGauMchunMMtHz85a4fHCme8UHjdsw5DsBt8rQpdid6YtzR5W88BCePYqVSX5obDY8udCBTreqvJXwVv5LNp",
  "key38": "5zHb4KMaQitjZ3g4RiAhBr33JA9eK9GQu4e57vFkyCtaWSV3q4mp4LjRyXeFhVtzVhvHBb3NyTxdi94Nq62AtCzi",
  "key39": "vBbbzTPXyzNqBXpSH8vXMDNfzfW8TG4RWTZ4uMtesKwsJs5vrFeNQyaU43kVByWs4nnLPPV7AjYzWnpJEMMfJLM",
  "key40": "u4fA9TZKFSRjJwXqgk7mE4QY83xtjboEdaqdydZprmvRV9A8FsGMQs5nVH4FQPP1Xvsm1d2bzDgfBrKxq4WEPhu",
  "key41": "3YJVmkRUJgCztWdoTtL85dQPZHuz6qEGgvKqRKZV6fGJQZDE9zzNCWMuuEikTR1T6KpA8ih28UMdxqYh2y7pRmrT",
  "key42": "5iraaHLURxaz3wKAB8hqaKnJ67C1evS6mtgrDNGyP6NCmjwsz1J372fuhjSxLDAyWMkXuLBajP7qya17QSj4exAf",
  "key43": "4hbvfEAKy1C9naPtBudPFAETjbdvq6LoJLjAtEB3aECioCrnjEbMqpTEUz7VCQn5TKg5pxkWL1HVAYAb3m74EqCB",
  "key44": "43PAf1Jny2hGJHZ1aqGPkptjBV7D6WXZnNgU6wubr7iVMVGSsozhp5mmjWZEntVt7U9d61kwSrnmdaMG1D6pV9hX",
  "key45": "4THthXFR1WG5ZLBS87kcdwSWk4p55Y9rnrJ5MEHmSyywc4SAeQpFvHYUym7zM66PTRpFLayLe7AuFmNsDvzvhLvm",
  "key46": "2qaYUtRXpR2JLpPCVLksEYHa754BBKAeGgQ2sx31sa6tchRd7im5hHBN9HcWEJ9f7iDvAgzTby6ZjM3k53qatj6N",
  "key47": "UfBQQ6zvoix14tfGkB2wwHQuBqe5eiocvDJqCfEHxBTBMBAZziRdj9bTuEVNiMac6dLR9LaXUTLcrtwmVmBPYy7",
  "key48": "3EUFxynHUgpPNjrkN8SZhd8L3C164ad74mqRZ5Q7pWSQPJH6eLYUv6EkkNpPxzSnmJW67yQHixxDCjDtsGyJcwPB",
  "key49": "49bUdVCHWVvbe7H3HJCD6p8KDq2CdwthitKL7UHAeW5H4Cy8JY1BRt4SsSnQ1b3G5zBuXiJKSe4q8zpqBch91U1d"
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
