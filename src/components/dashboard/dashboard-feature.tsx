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
    "3Cphj1cUArNYqUSaYWXYxwsCzbno9L1eDCyCWHJ8fUt1BjGZVC172gdsmQVEbTZSESMcPboNBM1LA5tkNnhpUcdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "576ofSUo8tEAiuQqb52tSpug9eTNeKkNWPw9hdzUp1cmY55W97KC41ctv9V3ZaFXapyMmiHYiJjsBZ1LYKiWchgs",
  "key1": "2feqsujz882x5C9xCB8yfUVBU421yVFiqDLV9bCMtsfvX2JNZWsUb5jyFxGSJwLYQ1wAf4oHyAkhWsjCibg9Gxjz",
  "key2": "GJzHF7BWrrfksE3hcWPfmZ7w1LLGGM8812wz5JTGD5ArRqNshvUBnLHnhbVtDe8dZUh5fNPurn38oQe4DE4CqmT",
  "key3": "32dhPUizSx5MY9ax4Wv1BK5BxNFGKuxsH3FoavFe4zMbnm6uqtB2BugttceBRKofoa6hfxHKWXtz8mZ9bBEUWcJ7",
  "key4": "4bsRPvSDN8sw1d7nznTYZ3mbnKVbahhwwL6qk785YjvFbGC3t77gZD251JFxpm8izcCCut2vCt6a37bLtKaSapjj",
  "key5": "5DWSCJoH1Erxbt9fk9f1BZFXkxuKcJ6i6dArcijoFpYfDfQUMCsikVT7ZdCyLNaDSUJZgudJNdMnyyBevDYzgk2V",
  "key6": "2ngShJKADV2MeXD2F1uqd7SqyWoeq8C9gDmY4BXLS78XtQZKnK34uhHgYQJwu5ym61vwFTBpXVTq4LwpcTKDQeN7",
  "key7": "62txwwk5wNgzhHQ4heXfiB74G4ewU1FYLwdh3rFeH5uCnnoFFeaphaEkxa5qLsbJr4a1KLDQkYzLyuXj9FcdQsdw",
  "key8": "27ESC1MjYxW6iDTSDV2t8M3fhjSksk9Mare4xfHs8b1dRbksuV6rA8kFTPruQamuF3aQdBcs6v9QFAY7iwBu7pts",
  "key9": "4D6YfwNMQh3LHKLjfoy1gD8yVHEmHTmQWuXFtXi8kH2hft3m4dffN1WcUj1tYVu59TV1RoRNQ7KJ3iaMzfMkfuCD",
  "key10": "CDMYCBiL7oP8hLiXdkH6VtZxqmvER7mem2zbTzHPLs7KQyKq8ui67Jv2dsDEpgDTeoRLoh7AE3tNcdeQX4vRQ2q",
  "key11": "5KvydtNc6e4cgm2m4ZvCwWx8atookJcTzvHSWUQsHUg2npExGPUAuAM2DRq47EgtwRLqT7mHAFrBtY1P6LHCf5L3",
  "key12": "5M9NkyCVwE9PhkaGXeHjqFQkGC3UebK9Jv52CmdPaMjD29W7vjjYkr4WPhtkd5yDAHV3aTZ3RYw13qRsNh2zvzRw",
  "key13": "3K266Pap2gXytMKswcU1NkmrzVDq6ueP3SD5CLRNkEKYAFJkogFF512xQrBojPW6KFMHbLZr7xWeyAHMjTKWQQ7y",
  "key14": "jZd9e9gMJBh12sK9uV1cfV88ThqSbvb5tD3nnJ1NMKmfRxYg3M1TyuTdbXc6MbHifg2FxM4sWdd8Nc4R4NBVvhR",
  "key15": "3PqwDs2X8gZC5Prs5Whak97HEQktFSt7dar4H4vv3GHSQhVneD6U7BBXQPD8vLimbj9XNttjgBurKNLZmshfGrAo",
  "key16": "3NpyTRhWk8kiwTu359ACCYBRdhCi9KCxZGn5NbhHpQPF6RMauvvuVDRHEAbdsmyYEWYBZCKdba6yfLP335fzcshA",
  "key17": "4R2k9UzX85kmV6Tk7idsLiYjBEyuJwnc7guUBkHFAqneRbPyUm4ChPAqfgEFdPXH6yutbX9JvjCC7p6UjenH9QDm",
  "key18": "3FLD2nh8jpn3N4fhC528cb5qVqg3G9rRRif5WDEs5rQ3uMhCop3qoGjSV1uhsRr3bSa8gfV4PYnHmXmoejijaNcW",
  "key19": "5iPWztjceAAaBbz5bLf39uUE34hPtjRcWjDF94e4z5t1xCMioC2NCkGZMdqRdwwiNTtTSSpcb1B1oRT4rt6GMTT7",
  "key20": "5eKEC1xFYLtXgthBwGpzTTcJ9oyxGX4tXjZJwPKjFjoAxpo4E8syLnEiFU6J2HwtQC6EGKsLYbWFZhbhM8BkN4jB",
  "key21": "36YYgxD435c7nYyhg7njXx4EZva6xFLEgiARip7pJQ9VWJQF16odaqDD8UnPmyv4ZUB9RdBziPryq6ZJb2XzVcpY",
  "key22": "Bpb3XoYTmfVoCiaMFbrLpEydzHHwVDaYMipcLAXuTGtpDRK41chK2emT3vyQ9Z7qLokXiukRFuUWQte9xfBGCur",
  "key23": "5DVqM17Q6NqhAP8dxXeV5oWMGvAjjq4gT1is2obHaZvcRrdJG3vsRkybPgzEirmvqLB2wXQuaHcVRG8Vu8MrcLWa",
  "key24": "2CCBQG7jdaBZwHKZwSAuoG2Xmah9FWJJmK14fDdqjRkbM6vqmhub4mXsyZgKgaNATpcspsNX1yS86eu3CAyr9gwx",
  "key25": "4h3V4taU4S3ajf2cdPkeU8Av8VeF5GcKGHmtwTHKBbL9GWnv9YLDon9N5S7gn7riVhPY1mP7Hugmgt5u7yzCiUBQ",
  "key26": "3HTqsSKBNcXnQ2vZv57SiQZsdh9ivAbwWU2FBLD6CrqxzHfW86jvMyhdpAFoReDV8H4ZzZPGDSKkFZkUDNekEKs",
  "key27": "4U813Uz3T31UTE2fLR9ZaokySnX122SDJm2foGjo6wQE3CmLfWSbNVoJCNRuXkvfYhDwRXNCuJXLhnKux9byfC7s",
  "key28": "f6Vf4Udad9NPmyZ9QKUHvKof94h2iAN1upp3v1Gq4b3Apve2Mor4sRmRLDF1DshM51KAVJjM77eEWsFZcH6DibP",
  "key29": "5u4uoY2ayR3HHirM7RgMiEDxqs6gTms2TEGtsBSncEmK5BB2anMakdG3pn7bfZf3LBnjVSQThsR9JeuamxGaLjkg",
  "key30": "2du4zeCLqAuYGAYYKSb1ez5x7tdw45Xew51jgTEYf8ZYkgnoc4Gq8Nv9RwA7iSNAJmAxBHKWKMqmCRV73kfG8QWm",
  "key31": "43oSX1Zyaty4nCfNhJwiqeK65sGAq1GdJeG8km9nGPU9zPvCt3M2cPxWPPCjeJxjye9VvkL2sbgrZFABSBsNceqb",
  "key32": "57LFjPmkQ8PBbUrBfo947Ctxqu96woUxWmapp4t86Rxi8fT5PgpBsiW7TeMCyLPSXPV69Dko8wdpRKxgvn6M5gym",
  "key33": "2SkWps81LPhUJE5FEneiFadXpRZa19tory18wYUkhXV5xB7WDcGxZJQfrtYtEaEXaNPGyQTd8dCtm77UCM2aDi1y",
  "key34": "NDTfCDFzQ9fPThjeG6JvxDCqQBwSg5f8gcRREg8mLmErSWgdiGtaiJMBuh8sPC8jqZiEVZBtkre4uQzVqfYsSoZ",
  "key35": "4255qnEGtvqT74QHB1mpEZ435AFyTaVGXH6wpiwXCei2ZE1Toj5wwxuQU5u6QZrf6WhexcvbdvrKCzV1uaMUi1Uc",
  "key36": "54A6EH8KH4McG63aXt2pvHceneuyivRBJjnxYA5r6YaD2W6MoGFx634CYXtAcK9Q3crWSTtcV6ZxHu8ehN72krbB",
  "key37": "2P6yuSLj7SX1FMeA6tRvMLJ64hcXX8tRE7x7sGf5xecuRxLQXkYoVNJ5rw6q48r2mR3ouTvWmeE5SGgGzpe4TGG7",
  "key38": "58Dve9s8Vsefcg4zS4X2eXjVjwv5ggB8GmXfh9vCANz1j5BoGVtxdbirAFWQMRbi5Gwz8ekjz5CKTbKhZTZp7Q9s",
  "key39": "23pGe8sCRTBBtyTJFbuRrijVHH54Lc4147DojdcAfckzDnxHhXA3KY5iYCfUVc5mTxASQmoXBhwehUqrvjp3GZZ4",
  "key40": "56Cu5XMKzydeK1j1fMpsXFK9KJDaCbPxdBTjGXwapGJGAkAjDshN9mrHmwrCu2SjYXm92g2w6EgW9FX6BXZVG5e9",
  "key41": "4zP3rmwmhoWYANd7EM51xwCtKKrGAggVyJFq8GX8mJkStMgmFTPbfbkSB8GuWWKjFqDcK1eWYgwY8eemiyvdGz7u",
  "key42": "63tfFzdijRRJsy72eYnjufKTja9VKxxrmHohmTkmSiyKNYpYrKfpDTt6t3oKm9Dxhnn9CMKjXG1jBWHYvXmaSagY",
  "key43": "4C7Z5uQcUvVZPPmMdTYx18xJT3FWNgojWV4Njh2QvVm88YwECSRx4VX1UWtU8tEpwCXrfhB43KhFRZqXrKgAegFu"
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
