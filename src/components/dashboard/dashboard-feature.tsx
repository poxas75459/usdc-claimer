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
    "4hoBcCNwELYrQB1X2tcwBTLhymJZUSdKMwjeffxeMr229jwhucCXVwWqiBwe9MQGd5a1ybmzneBmjaCxb4Nr9ZHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyqH5UE1mo3aLPSx1xZ2t38hF2e4Gzdj8rkM7JcWr5H76wPVhGmrL5ecxS8Y22C6cGxma83z32DFgfgcCa8P8kK",
  "key1": "CGVM5uzJxVqYDYozDNMHQAWH54ZEbq2PNymRvBJv1XytycPhUkK4YbyYqbuJpoy5fDDf8B4pB5dmifTei3nLVys",
  "key2": "4EdmPjztnBBrT16Ux2k4Z4TUBsduuj8NM41NfA9mowAoPFr1Gn2dK7B3RxV5vHz7QE1r3nY7ojdDfnw5QHas4muT",
  "key3": "2UT9KgDAdtexXwGmXMHnT2TYssWDJuCzHQCMcuM3PfY6Hfonb1d5jgbA3A1mCKcuHHfZ6ZokFXb886hE1RxjNSzj",
  "key4": "5BzhanpX8uJYqyzmaKFhCxUkhbwqCt1ZPZPUXCnSoktww3bxigVTvrmnni5mxtxTiapq8sPr1rW1SjAmi7Rgxo6o",
  "key5": "5N5SeMZxXFrqWKK9U3MSd22k2VRX7BnPMxptMZL6zAyKo2MkeHJBhAdpKEKP9F6ebuwH3z2wNG6zRrB3UeUrKydt",
  "key6": "5SV2megWbnHSHcPiyX5eJVA1QUb3igSBYQNu55VtuTJ3gJp2DpLHuhx1Ui544hH3R1QYwQyiULhR1kCuLJB6yW1z",
  "key7": "4apbEZWL74wHFr4bQ2GQecYfoopzpZWijmiXi6YbpsVTB9HfogRXDbMHB1AYJJ5LvJLDJpsfy1w1ifeEE3FevAnj",
  "key8": "V2QXwpvawnbpAoYNWMXAwD7CagCGRJtYzQQqs8inTNCMBNLrL5R2s4fsGZ5doKpFbLUgfiWbPoEQjBkGwC8qEU4",
  "key9": "xyVQBgfyJsPsvHyaApMd1UoiUdo5wCYfSgTTUAJkqryexr8xRvmb5M7mnJhgtHZtRTuZ4yjMU9x25GeG9s7FMo4",
  "key10": "4Ey9UoMjayJAPYrN4erVDZqyJxmFLY2yvxZZj5YnShxCbRpHKYGy78972LCm7oDvFcF3fhhUZzamucA9zdk7QPgg",
  "key11": "5wo77hYW16X9AzXmUGZQp8qutp5rjysugik4Lhxk2wDHTRpSkKBCRuPQwGYxdeuWTLBwgtQLk44Fzow39Jhr1xWs",
  "key12": "kcTB92c3scPnybR7kGF6P53yCm5VbsWK2ga3RzGN96xuSrMVawvbK9MMeKYAy7MEsLfzccixZbXDLZEfgvKjhuk",
  "key13": "1UP2dboVxt8JJqMB7PuaDme2UA4sHJaWPqnHrkpVF1MNGx5ggUnzQZudCRuhKv2ucaFNvrZTkuhDBNbaUTpi1BF",
  "key14": "4Lx5gWDXQxgZ36w7WVBh5xmLogP7r6cPzKSYYt9dndLza739PMUHLwhKdtDorMTRAwvihDWHfVKfuvqhkbAdBHYZ",
  "key15": "5429Vp2YV2sHTAkmbA16JE921TZ6MhZfttVBdea4rm1dWQ9N4nLsQs6Gv8HXWizjY1JuQRZtpjfrMEzjq9ikNAt8",
  "key16": "ZtyN1KvwWQ8KFVJfUtySCeQJkRFb7CDvJR5RQxqmvdXG2vzh3gTCzx6NqEyzJU78tj4vPX7g2MXpRXZ57HrhdP5",
  "key17": "3nXgzGvcgXm8YUSdPzKQ1ewAgpe7SU1DGWCEpx6feAoFcjFCvahBDXKTPPmHUPieuKtHFG2fa7RafuQqXU6naBNw",
  "key18": "5iun8rdXYFrZJaKxwE5MNMC54CTEAhusNCUHQigpiT6ZDbWxudB54caqWKwR65rQ4kfPkCN9gXc3CKwiXoBkk9FX",
  "key19": "92K8eY93LZUyovQsDNWmQNX39ok1wVfrY4wBnnuTAD9j6M3B24gjz2wGSEryStjDnMhbnLpc8TTGC1TCJjKqzYe",
  "key20": "34sR4PZeh1jeMfRpQ92eTTTovm5zJXTFQWU8opMbawM1jLo3CfKGT78BB8wFsxWPQNgS9dtBRNq6Pq7cBRpWkXKt",
  "key21": "VcZ7LeMyLuvUfYSPqbjL5c57sZ9hpxeixhig7emCFd3Geu96X5zmeuLQdGmQxmeEyxNif2FLwBAcCiJkAd86rM1",
  "key22": "2QRhLhnXtXZ2E64iqYmbWf5TxZpL82pGfZEWLJzzQJCCcQyZEj7cfG16sdxfBJ849bm12rMavybY5FNkTF7rAdGu",
  "key23": "4XkSaH3uwj4FCqdu9mnGudvovHByp18i81CkarRkmgkpbCxkk2Ckcg13DdwoyE7UUuKaEhHRLW5VE7mAEuD5nXjw",
  "key24": "5hHY5zGjKXQXAkj9TpXgYAUfCM2uKoyY25QcQeujvdRajwbsTkEURqFGm7yBjEpqnJ1uuud9ppazTmKR9AjBxxE8",
  "key25": "4WiU9QamzTh7dxNnHtVQaHut87YNupLEafnoNThzhhDCvEwFKihqeJM9rWZacVf4GuuhHtNovwhBZRbcAp3i2kf",
  "key26": "3rhK5caUEZDLVDqLsDK6un6gXvdZ1FdcD3GrAovBFAJhqirQ3VXsjmdpCbMu1JKQ3DnHbufhppRzG3K6w8drihKz",
  "key27": "4Uv6vNhfgzEAECH3yCzquBeuvjJH3n1ahX8ZPp7GNctDEZLVkH6fsa86go4MjaKRnNm9dJoFA85pkzhg4oCHFP1R",
  "key28": "UNBAi6jnTt8xMW2f7zzaXqZCzYnJTiQejHmQLMrZX7FYrvUe7fyRPq2Za8MLwtvTLLmWLDiXHwcXg8AomD1HA7Y",
  "key29": "5TRKDYNnLiUzz5UcwtqeuoabjgwxesosNQphYaWHEcGRrZCWqKNwE7i7JeQcV2WeP74yYwjSK9yoQDDEPFJfG4kU",
  "key30": "4XeajSybk2fdsDuzTAex6u5iFqkhzhb1apawU8zFs1ndCKdBYHqDYV2ot9ubsUuLaXg9ujWuW12R1fyWML3fgw4X",
  "key31": "3nUXoSbSaozSJmc72owYUWQoAXXEhZZgcrLoTRFShVo5CXgbbDMY9j4TTnErkPiXv1aYH2sVytGE2osooFFsDmZC",
  "key32": "22qQPMvmhBUe4YzEuyNPHWjDJrqcaRSSHwHNbmncMZE33w1yLj6Aj8MJ2HLTb4TiR7EPUYmj7rZ9HKLiAYMw2gG7",
  "key33": "3kqLrjCbikD5o1HnuReSbqR5bswbCqEmEMP6wQA3TQTDH9K6u7FAXDApd9zoxv2bUj52ekDCQEbvVSRQG9iNrj8q",
  "key34": "2GQXFrvofg6ta198qxWFwBr2AURzvasezSfMNT7d41YM3e3UHNXKJsHX7GBkxbPzrcAAwKmWZ34Haz6dXeL1sppd",
  "key35": "63Fhj4FMdAqR5w4EQuQf2xtDd68scecZndVABk4UPTDB1HS2agUfFuQQTcmQwWpvVH2WnbvkVgpJKJgEYzD338q1",
  "key36": "3BPg8uPGEXLhVqbZeH5gRzbsbsvg6kKa4eAech2dVNDCF6hYuyis2ijpJt9dM7u9jka3br2GozbNxRkxVmMJzVm4",
  "key37": "3XcbS6QCq5t48yqejjxSk53x6WwnuFvtXRg5HXCpapeUnYRAfHV8FaFGXd8K3JU3nsWhcoAeUF19ceUP9cAXCGbM",
  "key38": "3VZm39FkPr5Xov1zYTWMkzqAiL6Pkuw9vnDD5sJqvd9Ff8g4sS7J5phw848mu35yxEHhMYsDoENSDB8QenvfCerC",
  "key39": "R8a11NPV57EkXrL5s2o7EQi1A3xf1CwdyRnzbqMt3Fs4xZkQgUt8DDFyqTShZeCRRZi6jLwr6pfrUEWspmBS3kt",
  "key40": "BAeeWqLq9kRei4hAZp1DdGN8MXpcdX4p8QBwYokQ9tecMGqFuQdRnEFcbLj4p5nfrEfr5SYDq4jrLEFRxxBYY7V",
  "key41": "5pNFf5FeVvgC1dp6pWtfXfhHVJj46jodpRBW8KTt3XBGjCb2TNC4APnnia1WHopEnqHJaQn2xKbhpzK77tvot4ye",
  "key42": "4V6Xgf5z5HKom4N8kkNywH6TgV1WEripv9usmk6r2f1q9GNWBZ6DNwFyieWJMYUbHzy9vwiZsWS8ui1AbpKE4cEB",
  "key43": "XjncUBspa9e5F3ifAvrvMZZ2LvM2CWHmqxAH7XpoQEJ4ao3onehQExJhzXDty2wzqCAQdyon2zCqYBukRwkxa2Y",
  "key44": "4jar4YN2ko9KaUUDGxJ8tyLfEAEGCVEHh5e9YZMuAUPDFqW9bJJEEiCGrRsSkyoG1gNZieDcVLZXErEJ1nEbj8Xj",
  "key45": "2q9iMtNHVCSxkCHXsWrHNQduFq6rvzXqCSu5REkzVymp6buCM8y6wUGVgrn7cjFhoiwZYgswxaHcZZaJbJyJQRzG",
  "key46": "3zdLLedDUzVEfT8W9nnJfEdsm7yPnRtv71G47cvf1NHRX4ZAKZtpLZ5AWWeQvY8PrmrebELW3XaNwV5BqrLPvMFd",
  "key47": "5XF9Xtmi5LdsBgYnHYbJF6orDrsuz7aRVSFFZrwzKaqsLFAFaqLFUmk5M9WBHeviei3TvTAW4hyCRq9FQrCSerjW",
  "key48": "2sBfZXCrMWF9HddvW9JsGJVLMrw2FR212PsiW8C4mFVfDgDvfSt1iicn4ZDiTWfMSuRx1TJybB1W7GRapkTHiDnL"
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
