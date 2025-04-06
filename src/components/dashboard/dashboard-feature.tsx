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
    "CnKzXPyt2tH9zcMNmWoYX1kmYiPxj519VjmNVrVFqvhoWzwbaV97PekUKVWfT6cXajNE5X9rxEisFxN8qknH49D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXEmDe3v2fzFJxAXS5HExwPU3TocuwvJHGsU8yKTJGahA8jEUUZ3VbFHrTx3fYL59PTowwzeY7EEmR2Jv1Z15qn",
  "key1": "x6wW3UhfZzECfcDtp4LibDJuYa23qfoofc5BssCAv5SZ35NGGY8dddCkKUt3rExCzsjZvyCrH7KUSbS9USvzNVb",
  "key2": "4gEuUvKSNTNC6KvgQb5D7b1TfQukqpsijsALB8C2QjQHM4ZrBvxhbFeZVCDDgv7BNTrkBHWj2gJRgMaRQccNiKnY",
  "key3": "3WbPJsSjALeXc6xc4zeAieo3LC4QQdehqEWVuCsUF5HqZK9mKzqmR5j9yY9VpJbau3zDh5h7fy4oysxcQdmDnUnJ",
  "key4": "2JM4fRFW4Lxoedr5hsphq5fobtgMRFyC5aB8P2w9RV9Rwyg3eBv5xjSbCa889S1HpNDY8oCBEpsPYRLrRfrQdkB5",
  "key5": "41EaxjDJrMigFaDouzsNMLvP6FBs5gewaSYvpwLbwvv2YUb7XibsRDp6JiDxGBoPzfrZqS1umcTJ2F9f2FsE2bio",
  "key6": "Yv3jvY2JKxe3J8zatE2uqCdQ8UgAyppvog1FsDUpaSwQ5ZB3zx4WjWMxSQPpWsuSbDYmKfsbjdDu7pgTiBkh7fp",
  "key7": "4S5BqBiUG7xEZmP2KWmbEYsGULPZUfBc5XdifDMhTJLyHabc1aKU9QTk3YkR5TTVgk3xVQgjmv9nr4tfaPaCv8fd",
  "key8": "4ytuaZewEcPEvJ9ESh62QHPcLTrhAg5tFSSUkT2T3XmSHgXa9ZntiQn6GH7pNZWiu8oXw1NS2SThXL2mvCzDziBQ",
  "key9": "2Jmc8D9SW7ZXAuZmaycR6o52mdXbXSRFdxhNDZ6Lk3FgDNfKiAkedfszC6Yyzq3gUzs5KuGRfhV773m4Ru731MEs",
  "key10": "4cy1DvvyLeSDgWhRpkKXZpRaNgCKamMCAcX2t4GgCUJACUvdBydxzQ7ifQawxZaDgMPnXEc2UrqSTGUyvATtn5SG",
  "key11": "5apihWsxkjvxKMrAaW9z4TGArgoTaKKXLFGuAi9w4z2EwX95MRfeQDZTYCcGzmFW6BR7z2euPKGW5DTWqU28RHaS",
  "key12": "5BouytFACd4Wbb19aeEhXC1t63B8m5Wy9z3j3PaK5ZKQjhepJouc5oqUUC7YZ1ZrXkou2CJoC3ZfgDM31fDRKUrq",
  "key13": "4XQH7oGcD1Nm7ManQbiu972LiZ9mqFCF5mucwxVJEyvk35ohETvbYjtaryjAaUEUqopPmHYoXXPz6KYDzsJwgX5h",
  "key14": "35ZQyAYTkcyDfYAeszfTuZU7tyHe9wYoBUz1vQhTpUqWRcGPcLSrVnQarjKZWQ35xNFXJ2buovknmqnhRsqiDxUW",
  "key15": "6kHxGzFjYUa5ShMs4GRQuUnttk5y2MShA2CuJSb8NyUaEt4SnHpiZmDzr4PkdpyymQBX4Ez1uRCJUb56MTybwfb",
  "key16": "4vc5BHci5MSiNsZvt1fbqVpfw5JPVBwMCtXJ8FXZqzANEeVT3tYcnPE8KMED7UH21iXFREAFDtNmpVHdDsdmC45F",
  "key17": "5x28ytnLiGcKArsq7TqBYut66DiwNdZJgm6u32V1Bzrxjd3PoYRNacHoZ8QYo7qLN1ewFxxcC3xSBxzs8kcRPfU1",
  "key18": "2pJWqCAzbij3PAATpGYFTkNeEnVwpZGN1nCm2Szubp8Tpcp1JKvBhVaQWWpu6aZp1EoUNJs9DAyd2AHaV5Mo5nhs",
  "key19": "aSeDAXQFPe5Vt684bfeXtPCjHfzq4Wf7v6ddhy34TDzUYeKR43SVyABRn4XakCWFGWWBDGT1RhQJ89V1c8JZgi4",
  "key20": "2BXT1mFAMXQ2gNcMxzyjDJhhixhqaiy97nweVfKQ37GgnZkkneHr7aBCYE74RKEMrD42wyvZQu1q87SKpD9pYW5X",
  "key21": "2oRQif9zs5xQUMpCJ3JhwySyBJskN783qvP32L5Xk9RqVxEG4XHz7T71566Lk5GTYzAkwSXxSJ42kNWcZPwH5nhX",
  "key22": "5wGwuhX1gvhubregrLU3jCSbHaQR4irtAuxc7D1dzv1F9We4Gr5D45F6NPdHiwgUAtVE4c21wiuMgboZxxrZu2XG",
  "key23": "32BUBFjt9XMCRM9mrFPrC7s4j4siELL6J6Wpo8G4rc14hjDffSJqShqtf29oKDPXU4xzitjQ8Lm1GBg9mC3tbCeH",
  "key24": "2T2GwoF9LiZTvyxhBeTxpAxF4siaJxVXVRi5BhmihwY4Stg7EDP7shQJAVttdXYVZhtadh1vn2jeA8nshcWTEMwC",
  "key25": "5SkEygHivM2ug865MmyPcNPZr4nP6VaZf5QMNHpgraLBP7Uw4YgGr2WyFxa1uCjGQwKQxNF3NsS1qNWyHsbrvYSX",
  "key26": "2cVzXjyVYM4BphtoS7KvVV6rQbdgBkwFmnHXH5ueXm8YCrf47LoCE6auskKWQDAz5hxsa2PkvkwTCxi84B4KWoXV",
  "key27": "2pEvhHG2LgPsf45feBjf3Mz1d7FG3DVJeDcq1cdV9kvGFEfqHwu5a3Aa1RikHrND4TG5ANSGLMsPFNaPWbsqzc36",
  "key28": "3wxmU75sa5Ewk2ejNP9mNErLP7G2Sueou535wph2GVPkoXjgCRVtjSPWnzPusUwqDQXVV6wdTTZZYJjC5H7Q9gsR",
  "key29": "2yat5fxrNNbjLrjGr2Qk5KMejher4D1jY4BPmdiCfyBTd4MWLe6Qms1uRVV9Hm8yXjUgRUEcQtPDm4PoXw3ebnP9",
  "key30": "4CYyidpBAJvT95VxyVehkrdKCW9k2PH6MQy1KKyrbcQ3T5nFfA3p4zbgmfyVCmRTXmXyw7w9YxpJ4UECDwAtXcSF",
  "key31": "QQFqKFY5wUfx7x9Fe5gd3SE1ksJ7T8aUUyWrPrMf1jJYuon2ggsqYFFpJZMrbefhZFsptrewrpE9svcG6yhR8cc",
  "key32": "51DPgFbJbqts19z8nxpgH68LTxtegkgkbCxmikLBNcjtj2k5LD7HFjxpz4Z4PhuactTP8H2gZ4vgkh1CKTxDUk5g",
  "key33": "n6yCCHYWRKJawsVc2P19T19e3qhkMzLhvMwbD6V3auVriwiT4sYWsKJUTqK6YPKPddEeYyCgop9wwEdeYqgHMg7",
  "key34": "5JP4MVW5VcEmKhgXdeLDgUwCxHEBmydnLnrK2bxhKh43Hv9TD7zdctoPiwWFZqjc4a6Q3u4CpYVKAJsUGBsPqAcF",
  "key35": "5bjqnBh69x1sZ2eYWwYoqXtZNzXmW7AosfUkq567JLAdfsnFhS98LTLBXjudBUPb5WVYGqycW6ELmLXAobRSygQp",
  "key36": "3ZyLfxM4QDHY9trUu1cgvA6ESMB5Y1GtwMQpZ1T1syRJd8o3BHPEr4WwFrNBUZiFnJbQ6kXCYdYum36dzKq9i4xu",
  "key37": "2SQpfCkHQGvcAVEWkriVs9wNWWW6ayBhyhYBG3fFTju788398bVvU5TEpa5goEQFjXx2bWk5mHGfzVYCU3Px6Gyx"
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
