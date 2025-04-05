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
    "cADZ4auSpFgSktdu6EGPoXYcueQFj9X2Mdy37acMS8XTr4f5kVZsbFck3Q2utY3veN2Wct2Uve1xDa2pcQMMDWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYzWiUdb4wG2CH28Qbjr15Eu5EMvPUe6Tgv1EedRnSRQ6dqFbb1ngGAFvydPbrz53Hvy83csBTny5jPXGyWgyGz",
  "key1": "5EQDXvudJz2dKYtTYFkmAmZByGiPrngrkcoE7YDGmrWqv1kN2cAhmGa7kVdqnVkhU1bFeRgqzfs4Wpa57LKU1bEr",
  "key2": "24AgkTidnGLupeHtPxKv2Nv7UmScZnYH6xtXxv53cqf81HGVZuY5PsMYL7Md49vD16jzFEzc2N4pMXRz9BQYWxnZ",
  "key3": "75J9RUs1U32xtHLgpzpuyRgu6kNXujYfpnCqjpBhQtoY7PLLtxq5b1H3PrKVf9xLURx3WPxefp6MpdywGeMU89k",
  "key4": "4PptRhU6VmgrnNhigEJJHuhxdwU32qey5PxqLhtkSqH7RninsDgRMQ5LD2jJyLbfbWo44x8D5Xv3ob5d25BNJkJd",
  "key5": "3PDM9qD1ZJVK4DhAhYp7ZqZsasvJm2nDPbMqsA3DZvN6bCVauFGNPBiztcVjYTZNpNH7pVP2dscGTPKR9c9DBNdV",
  "key6": "5rNSPxMPJvymiQSoVKC5bnz7Nb71vjYdzETYEQ8NoLeukedoao7cLNfNqbcL5vE6c6oZCEZ5VTYL67wUgEo5WgR",
  "key7": "2ZErE4Epmv7bfcuduCFheurY2JpsiyWCMbB7e8E4yTaFg1VF1zNdUF7Q5MQMCFHauC5ibKDZff37wXvE4LuNrNak",
  "key8": "48ZauzRvPn7NSr2RRbGccXhztK73CjiP7CLkVvHnAzsBjMBAod4CpvWwwRi4tbrFhmnPr4BqHtDqDjYy8U3ECjeu",
  "key9": "4Qy1vTFApFF8Vh5KAm3ciDmqdyqKKyJ7WhQ99dRrdjV3SNTw4aMtfGyjhsgWWQ4xxQJ53aQ88f2nXeXDtLNzCoPf",
  "key10": "5ukSbN5g88xsuuQmG4FUn1MRxQgpniFJyzUencyq2ViWA2Ejnjb4gaVpenEGFzhr4mqGNqwt5yEnESn1Ztb1oYZF",
  "key11": "25X4pnfpJp8iV6SKQexUCxXe7udPBfvMaPWH8ThuEKTdgURSaHe3an1LLJvinnHCSMuviiz7hXHDVdetYnTkiamD",
  "key12": "4eGzi6wKBcCe6a7GEV2Fc7MGJqVrCHx6cFyBax3aLxyMXodjj9ypzNGTmkSzyuXuo9peVFHVpTmZcexzm4rvvohh",
  "key13": "5jWo94HFV8dt1Ug6XrjT7TQLAsCdzfeEeY2zLhX4jFLQWfXtx5dNdqCUgeUYSAQDwTYK2gCBsiikT15gdHXWKfdD",
  "key14": "2HjNo3zFx5cYyqWRXmY3e7SAaoPmuD1eAyuii5nDw1SGi88kx9sG21NUCwM97C8uRXCdiafx5JfTfNrxeT8edts7",
  "key15": "422YpU4AbxW2Vd5bpJXRiduseJqBxUz4epVd1wArCZv9DvX9A4CQP7Zk3uozEUMmhqw6XNejgt5ht8u1hkz3SP3k",
  "key16": "v9ack8pmxRtgXgysVj5yZDb5f7Lq2ZJHkMjwHgRDM5KGFAnnsSsBVhgjCBjv9f34d1SQx5AocFxHyeyjNjAgb5r",
  "key17": "3tZztTb8qF15BMLL4gXo2mfXj6DVx7gbT2D96wRtnrzLy1ffaktKvp7qAt8FBYwkF5eq9t4GTNJm9hqjrsvwDuFt",
  "key18": "56snhamni2UXohW6qFB6TEYaJFi84yhq4sXLzo5tKvSN2xbrsVbvpDrrEp3mcG8ovZeBAhzPZzjCQ7mMv6rA8QW2",
  "key19": "4c8Z6SdNfnUzbiuv7zSUyffvCqFygbYH8NJJtKCcd6xgNAgsMfJX3wwGLE8H3ocTCSoxAdvzUFoWBZ7j17pWcxjU",
  "key20": "5TpUFpaDgPYLzzo4J1y4ZpxgNw1P15uje9xCcfheM5osZkxeoW6v9nyj37HS3fr5ntufPNXLy7W2w2iEHdpRqXS6",
  "key21": "2SYhPCQqUcegQ6rYzcv5phabfmBj8Nw5GtZz12uvgniyeqLtchTnePZtHz1tdLaewLsrmFGDrp3qkiWYFuTWnXgN",
  "key22": "2JJKwYyvhfqygHiSZqCfFBWqQvDhpSiD9AnETiwkVuZQN6WFjThCspq3dDf13hAwV9i4i4A8Jv1kstPX6C8Y5JF9",
  "key23": "m4PCxBKC2oRVnCaAC3fVWXjXwf2R9QUeiGNrWYnN7hxQWCXP8aubUtCUYWSiWzAT45kXrQWJbSkQ4nXkmVDV8KS",
  "key24": "3Sj7iMAkLcLc6sDNpiPYmARQ3rDcPWA4SaQw53gEn7BYezF5JdP6mkAfHpmEJ9pGJWrGQgi3jgMNKAJwk5QvTE1D",
  "key25": "ci5fhcbPpe71yJXRoQxyFQiK3exeMMhCfbA9qPEJf71ouZ3c79HKeJ1DiQHn1eS23BQWXjDBo7vexsWGi14XBzK",
  "key26": "54vdVxoySJt9WiTrUi6zpjVVfdLmAwype9xFkDDDYnymGGK1mhsKwPS5cUyeYDSmECnujimtcLFWHtsbDZpYu9H8",
  "key27": "4SZgvfoGM4k9ysNM24AvXY7k5tjqsNnGq7LchcVJoTrKH38SWW7CvpTpsu33aK8QL6RV3qbVfEtpKCUUkGQaXf7g",
  "key28": "3pryLK4XYMvMSwHZw3aKcCd2jdvdmBn7REhPJz5Ntt5Nyb5vFYm6LTxvQm1pujtsk4KN41iqw4gnfdCzG2gcQ3Mz",
  "key29": "3ptmd28uL9SspAMKDv1eEwj44p86Y1Q2Mdfy3JaKt4V2YgFSravUJbkAd9r4LRetqRLPup61fScYGZaFXPCmJNRb"
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
