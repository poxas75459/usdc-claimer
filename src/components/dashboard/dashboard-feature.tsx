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
    "2j5F3FNZaUmz9dQKv173DcfEMaoPxfrT9X7AzHxY7exYeSeYJP5R2syePp1wkWCtVpVj2KV9bJr7pL3Szw6Tw1km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuJ6S1NR1cJQzaXkTDXfdM2MDvrsWJp7oH5rW27nPhzkDWHsBCp9f4Far74pHvyWDbWTtPpX4DiSZU8HTdphknW",
  "key1": "hcHaAdt6WeLDJQqxwbEazHvxLxtxL2rwtQ93vvFhkubW3Q9rUKZggWh4yXpECCQvWSP7cQW6Yw8RfspeQoTgEGS",
  "key2": "42TK3G4zwaHHAjtcKryitDhf54SnoZuyQzSnkjgcdLrkzetfBm4D3w1vHSjiKUcFjLfZfUmKeoVKFBqNEg1tV9Q6",
  "key3": "26vLeSpQDULaqS3f83AYZ2Lp5MR5baGWyqSbMrx7HdgopM7ANd3zcSxF98g4SvFhuZ1kVkT2ybF9FCsXBvftJwbJ",
  "key4": "2jGqLRRCUWW43XP9BTaoU3SUjerVqLEsLvTjnEwtGwyeKwm3c9SixHhPrYm29XppfqXdHB4mD8Y1L1zSXCSgnRwp",
  "key5": "2cC2Lp8fSTvMzWz1guXQtitYBKyeCFbJ8JMF4f361jLM7hsvUkrhCpthQfUZPFo9v1CvYdx8PwpDbziwzYTmE3xC",
  "key6": "5i2GMk4Qi2SwuozkCBafNBvXRN673APLEFWGaeDgUCCMmSfqHxoxvrjimrabA1eejF87xjB5WYkofThxgj7MW7mD",
  "key7": "8cQsAP4VLAoUxVng4YzFSgRe3wrL5g258t8SpjqeWX3pEBw22m8ZYPwkZukSV9XpXRqd3C1nxi4aDjdLK2wm3qs",
  "key8": "4yTdTVqiobrZh2m6qW83aX8RJyjc1tvxSug4DGfeDorfi1UzagLEmhhWtNEwTZhE1a7qojccHsZWhTCWvbHP2C93",
  "key9": "66k3wRaSTKTPbvgcbkL8KSkj3RSrNaGFazU57qcZfyXVtMQ7PELPcBNsSxQGsshErMsBq9hYM6UykzdaUv2A6RSx",
  "key10": "3Z7BUbfsLfjcxmvtezTEAsjEg811Gr2MEbBfbQaSiFoo6FmDPrgnmqAdk6kTEgLWtnbEUn29Xf1QvQEatUsiG3Qs",
  "key11": "2DV3TraMRvT4a3NNdSDSywWWj1JwDGePJ2HSCpXaX3KHyixagKaSPZACfZNxRreopjBkWgA6A9a9awurw5PE8TWN",
  "key12": "3tXNjUkt5ftsNY8M1ib3K4yt5dvvo7nktd2mkHFdsf5vcK3gDzAMX8r6Bw6S8Ssw8HuTDdxWMohaeD4YvWukfvuP",
  "key13": "62ZwfkXG9N81y9vyvPREiyrXiH3mUV98qGCeCx3ACXUkjdi8HnRGDXW13r3feV1hxkDmrPczMvGujiXsAk17Ptiu",
  "key14": "259d413AdriasdQdaZcm1upDWBawECjijV9sxWxZSTMv28bjz9rcfX1Hv5k6bFw2kSowoHFqiLraF1JfQfGSncnr",
  "key15": "GCWSdpqrjv5ViNjZHSaSu9ErP2ZprStEpyYuwABk7UWxaM32RsJPZ3m3NWrio7SYjTtwhhGsWevfQVnUDLzegi9",
  "key16": "2RLgKaz1tyxqVHaMukoSRgnKD43VyyxPvEPy8zyc3D632ynagNKdm6t85McqdM4MDvYPLQ9bNCTxW7MmMqCwnGt9",
  "key17": "41yG4eSzoQLBdi2DyjRPH56VdHaBo5YBJX8jB1hUk8s7H6a8y8iavmNZCaNZRsPMaUywAhFeC6JEoew7PnAPe1Pv",
  "key18": "4W7GmWzxZ23UjscLww1ZQc2sUX7kQ5UK3VucpTvCD9j3HKsxRAyGtkrWeZYJCcHBphHQPVGzrcRwPnLyCTwMoyY5",
  "key19": "3DRSRAL5dvG2JhaS8VFadV1VkQMZNDaktMFS7xa5prQY28tXhZVkjjcuYswK55wBHCyymtJaHqYA1g6XA2zEFGNi",
  "key20": "277kqAwiM82uABPAtPdfRXQkVKx5KBdHXpzABB8DwwNQFfE14DaMedLjQiwxkpoHhkMwmxZRDGh3LHJEnEpeZ1F2",
  "key21": "Qfi7MtXZuQMY6vtJr76yEZ5D9eMRhuDzmHY2tove2SBVyYPYRudtD6XJcXEJcotaHXqiXqqrwgnhs2HH3uBskhx",
  "key22": "3RPxWTDFNmiUVgsEPWZQUuX7Nqy5GYyirsoXkbm1unWsAtQr6xZG44xq9Z8h5SEQco53Xovhj7v6Vx3yMWcUruuq",
  "key23": "3ZHd5GAoQiZ1gZYNkyahZaDvjaN1R3Dj4pckJWqhznZHnX8KrVh8xPHnoEm8MfELb7L9eTHj1jUrHiZoayAGppvz",
  "key24": "4AdXP3yHfLH7bdsVbnL75DeAxzoyT1k4nZdYJ3SgxD7FZKUmS1BvAoCE3T8tDXe43aNXYWPAMzuzg3VQpLJ1bYHj",
  "key25": "2DqtKJpcDWDz9Gs8pSDN2C7EzFUhjDr7ithp69djHkpPWA4QJkr1bByyhNkhDzUE4ydoq1buuBMWxuAHBZAby5xg",
  "key26": "3JtYbRo6gM8FVYE3p6wJ6Y6K9zPkCzrHrr6QjC7NVPBdUEVQcncBLacHjT48UWe1VXJ2SGerGYA3PmG5zUcGhUwZ",
  "key27": "3DcfthRJc2LNCnuXbK5ifTmGThCokFrKiNJdMAcu3iFara2kyAbEu7nDSjYP9Xgns9i72X8bJJHfMMUDvoiAXPi5",
  "key28": "2WdmQPtXWmnvWW6tNM8MWBXo5K9MrwgLFAuDgSY6aXHD7cUNzaMjGbyb8qxm7x7KYYbiYL5rEsLstXNNkXAJWbN7"
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
