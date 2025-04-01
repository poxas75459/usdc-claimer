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
    "2eE887xJTgSdWPePhzQXEeDR4dgSW6G2Sd5TaRQndwNXyFZqqXxzdRvf3FoFHytLV38BRFg4tQ2SJpb5eBuBoDFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Miun342zQAmZs5uqZPAKxNhz3VUvQJ6UNuAr9iNQVrsnboA572CavUTEZGrtuvawnkrpE1CJ8rxNcyKgYbbU9n",
  "key1": "4AHVPX2mrD15AyTgguC68GKhA7ceJfcVyoHTSPFQZAFArRBUbAUSUauqkuhBjw1JCYem3GgvnNRGdoSZuups9F1A",
  "key2": "5w2wcepUsrokLBuxQJ6j5tpnrXwtPVKvPmRy1KGLxFD5Dc6x2JNWSSnnaEa6avjetQN16Uy8bd52KTzZDuh7BY89",
  "key3": "3fuEn6u4rJqhFesxm4NApnNJFfcsNfRvjZy5yQWdvACL7zYYkayw1jai5hsSL6yh2odD7Rs6Nw728JahrkZ69nR7",
  "key4": "eonsomtZqi7NwuxQtET1kVwaSoXwecZ4erdt5o2zztxEzHesnHyMgHsjYNjiD7BVFLVCKdakZ2QabhML1XTbWQ8",
  "key5": "3QvVwoEWSo3hqDLzHLuXmZLpfuA47ob2TwXM2z2Hse4TMA8KBJL5kMHiGkAtPUfgzMiWwAxWujKUUm3V5U13f8r6",
  "key6": "492Qj6BrqB5zEW9SYEvnxAbVEneX86Q8oUhYSuju3XSQen5duEXuogoC4Fn4ST953jGBrkjc2zWnzKtPJ7og3Y8Y",
  "key7": "4GpC2vwxdkhK43yXB9oqeHVfQieAwDpFbYTYi2JiQvLX9J78yh8ktbR98weQCVGwKsRiFJXBH4NhWULs1ZbyumJC",
  "key8": "2o9SX4kAgdtEN5q6UT9hPXYX7YuSD1tVyZwYxZ4mS7QtNFjCXrK5Q8EXbo8w8KWJUydz9yAoUkdLfNbqTWQctkqw",
  "key9": "3Cs1ma174bJpPHHNrNqU8in2o97tmpDdWYWNz6XTbxZC7KMTG6u4ZUP6x1LLw8HVPFVRU7YburdVWVsfGrfG2dmA",
  "key10": "3UHbcvwAuie15RDxueTvfY5fCAm6sqZCopDo5hT9JzKXai43xgeQuSkUgRHXQ4iaw4Jbygq2EsPkUMRR7UVtnEUF",
  "key11": "45XcskALdBW2bPFAh9QUPJdgCnJkhiEqgHPU9iMKBYKHjf4MZcucwQFqgLhUhgbcj1SdZyfEDXa4FVqsr8E5YNTg",
  "key12": "krRCPLy8hfXukJ6NYh3FGcTvNSL9JfMTjr7HsswchSXLXfsiR3A4eRbhmJhVScFjaNjZ9Nyyp8Sk4JE88c87dzc",
  "key13": "5Ff9myeF1G3KTdM3FpB6cDA1ZJPfQrYvwUNwunTyVbMHw58fWxHFgfRQzHfCRd8vcSgfkmgfHd674gAwnhG8cEk5",
  "key14": "actFPrqMojPsm94UR2hVkc11UA4wRak69u4WUhU1K5VMyLv96s2wQfiXx36nzwAC8kZmAN84LuXnzAuAZ9UXzur",
  "key15": "2NR6Jd8DdD7xZzTzbUwbvwYsrgNzqLp8AteMAvQPfvzswcmUy5P3LRUqgJepr9bdvSguNSjvjcSL41VwkrbzcB2L",
  "key16": "4xC8hwPwkVonK24CRHRrNovQHkFYZzH3QE7x7yJ6BMKpeTBPhHHFfxbQbgbjewh8xTBHdM958ScSjX1XQmqSEZMF",
  "key17": "Xym7a9wmWvAgTkwYRM7tEdZeexq4aCccfGuB5c3xQ3EpCGGNjAsJLkD3htjw8qcMhUqxdTufwsjECTXX8h2VtF2",
  "key18": "uqMD4rAAzTNtniWLhSpVY3S5CVkknfBweUHv35FwfeMrYPvkRGEYreYFpvVKMQXPd6kZSh4N2z2ESiB8T9rXTN2",
  "key19": "m4NueKUfh7C1jYEahiFQUbzzjyJbU8tWDryucqja2ZmaM9vfhFySY5P8JX48QGAKfKhkKo6YhWVbTE8yJ687jqP",
  "key20": "39LTMrt7KXpFMcHqkXzziRiXY7gmCbWjrJcTEAZPVQVeELJReEjxEA38WsUK6YU2YZ4UsSA6rqt48vyf8Wmgrckg",
  "key21": "wRafFyu8ketPSVvzbHorNQ4RCmGNz6wRafZWKePfVGPYCie6c86JnoyEsAPDqcVXRpcbyrwScKUWJLW4ibnMJ87",
  "key22": "46UV4SDuCQnqskH1sga16Rj82A8J7jZ16n7xfqcu5ZCJPKTftJd1DdNgrcJNtWM2GgVVss9fEFhsYjiQqYyb5DWq",
  "key23": "t46JdD8AjX9WEtRbGRPBao7dsfDD7arkTqr95NGgCxnH8wxVZuzMadd6TTUmS3sjhTBobnZmvQLug9zqSXf3wR4",
  "key24": "4NQXJ2YSDWJiNzeg3vtCQX4xFGEzfyLPoYw8ykpG97fV8JvGqHJfm732DsUE5bWwgGynDoqcLjdHBwgMpuH2tWKT",
  "key25": "33p61zwMY1gznG6pURB97BXDhA5d6TC53oH1mgwDEfYQFbK97YrCHsi87rDfbvsGdFNsyu9UDFVZ614PD3UYvm2r",
  "key26": "29DByasAkVj98B39wjE7zWoPZeMzvxis3LhmxtvfrfJh1xapWRYPEbrZVCJjGBUtMu6zT2BhCcWVVy7W4EMJeGmR",
  "key27": "2ih5FsifMcSF4BXpr1cAWb95Yh5sUaXV3AE3FWP4s6zqmQaeHVXXoyUAfBPtrwe3gj9zKt9peQhDgZDU6EGGapDt",
  "key28": "4pQxEkGBTXdLGgu22Ce68bk2GpjdSYmVphGB3y4iy7yi16PAf95x3uXt1QPwRmStvHNat8c8AnE91DqstTGxomWc",
  "key29": "65MFLEyh9SiNocajvXDps4oEKPvdA7DzAAEtd6oYbTAGAGZUgPkuaS5yYCnu8XBUoHfpHqS5o6ub6pdgFkeDRYYC",
  "key30": "67McQChzedrQipJPgqwzg5R1A13dXe8FAgFQQaqcDzCRZjhj5gFABFFcAsnPeZZE5z87zVM26J6Qib1SAxJixaKi",
  "key31": "41vgMw8rJrgW62F9FZ57arVjvFMwj6pwNwVZZENRV85fLhNAwcGdex5UZXtN2AGpnFnq5xXXQRnuDJMnqZbAEdat",
  "key32": "3roQ3bC6YvZnQCerPtiTd2kgCDa1S6B3SiHdUM4pcf28ZJD743EZbkMhWwfhTymhmkuSiEa9KrsBtF2EnFoHcxyx",
  "key33": "5wnzZpzWUv79QjDhh2no1MhpQdT1h4bGdv25357A7yyohXkohmUMrzcFFHqSiudmg8TUkozJaKHWjpuNQCS6khL",
  "key34": "5zaMxmGn4dZNMks1qxocQcx416cNefHLJH416d7WM6QX8qVosakE1eLqc7Fubk5RmT2Bzmg3qv7DcvoAWrmjHYve",
  "key35": "aGoTcPEBywcGBP2UH98WjTvxVqtw3YdrMRisQ97p4TvksNbgnrzP9wTbtFM7QLbY23zTN3qS1EmGCYQZomGgVok",
  "key36": "5M7e76zw13a9Bki22D2rySP8rJ5FHdvGTAA7tNFNJJdApVqBZGcrPJxYGf6iP8b7NRHr4RbAxR51wDcahqoUUdeY",
  "key37": "2HNpwNjqT9q8qzdd9uDgrRNWEjd6MS3hJtrRhD3chQBr6yiqdG3K5Am6mnDP6yupnwUWBRdGP6jx5rZXp4XJmapG",
  "key38": "ephfyf4SXnvjVFd4F9UnRVa6yv8WnhyEm7uhGJsgR68jQpMrMQNAtsufrWbgXRN7ZHSrLsy9ytFEtyxBrx361nm",
  "key39": "4TeZPNqKjRtgwuTyqi9wQUSJgMGKwdrT28M6MHb2zhc3hvVDDbrziQcnHjxLpoCxjbHkZjxNRMp9f6DUdQaCTJi3",
  "key40": "2dKkc3CVuS4FLZucuHmcquXQh4S3hyaxNLeydrEW43rxdXmb74sC9orWrCXgqKL57tmzRuEfvdeaTinptUnKQ8y6",
  "key41": "2S9U28op3K1D3MvHFEDgiwnHvUQVySfum8ziXtn9mLEPt76VfkXoWUCDJuukDDV3MbVfkZFTQwgimXT29rWz2joh",
  "key42": "2jD6sek6ZEniWpPEubCys6vAg2gureWvDvXs6TGe7UsHi2YNV4XWmTktxmVAqBWSARUwK99bsSq6PKSdKJq4SMhR",
  "key43": "25A5e1ehtBWxKeDM8Y8Ct4BkrHD1WnRRiapRj7oCN99q6Zwx9CGrtrCje33BVyC7asz5Keav2rABv8x8mqrdkQVD"
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
