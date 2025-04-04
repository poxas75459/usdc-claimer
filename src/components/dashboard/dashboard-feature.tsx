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
    "247Yx8jrPsdJCJt3xMytsuu1PGzTDpGM8Y2tZgwVxXQqoUTbpz3LiDMLMr6kjzg2GeTg1DaurigoeACpu4y5A8ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdgHvSWYSw7TniHUjDzEbXNukebRvppzb6A72rm23DX5nKeJP67xLfnppnZ5KiczCVkuubEacGJ2Y2qaSafdzua",
  "key1": "2vimYDXHwKbSUF8Ht3xpCkeYJwcWRxX2CPiy1APXBauuuS3Figiw8w4QBk2Fk4eLkE6gcmjM2iAgFyodZQPWWNmA",
  "key2": "3ivNctHWyeuwSxGi8TuovhXUUxBHQNHJsjWVH3nSMUWxVnqGcQNCtybmsVVw4vEC6biJ9qhJLgFFHu774WvW4Pkq",
  "key3": "3LwBiBADao1hDtPzdbWwoeK78HHdenuqkAbaSqTZwxoQxpHp3rp6Qs1xDSm8QM79WFyZaQVTUnVyyVWDetmGadt9",
  "key4": "129RJ318vXV1QsYhpcunSYZKBwfMNzMwXRXuejBTu71g9apr3e6G54CmJ1JSgS8qnLvE5L1oaQto9HNnh6wHmqYA",
  "key5": "4oaMSLRJtXEkCRRVMjSkevgsZbHfcvadvMU7bA6aeQWjZ8Lc9vk8R1rc2Fh1PypHzupt5aGxYdiz9inkXaHcsjcQ",
  "key6": "4LSyuLzd4tJrFSx8ecGYDxKNZ8cg9DVscA9jkTjzAnkY6VQyQDZjjkYjPsnvEazi63qPfNqp8VQGRKnDJsDGgwap",
  "key7": "5x6pNXXNuZZf352n7EyKCsNNfaGLrDMqs1GYfn2Cf1HSLPvMiyWbm5H5v1WyuS5qJY9aNYqsAxURSKCsTp5ABHGM",
  "key8": "3Fma8wVCiYqsavzaYrhmdswZnTssjbnBHY37uhYaDomhEpknyuGmCpRb7VXKXzTopqs5GjB6aJcWKayJ7rsbcJeP",
  "key9": "5NBNPZibBu6jbFMYCb6svFkYSwVg8C1vkoSGq4EoZ6eDp6RbRWBRz63oEy56TAgyXpRswYFEjERHa4QZgXrph8sb",
  "key10": "eZtz3ditNMZpvCxM1KzA2Zj16mruUNZ5Ek8TjLoBbk11QVBni4BbXD9RrnSrDB7m2jxWt5fUF2gZHCdsjK7fotn",
  "key11": "5FbByz5cBZ5qZcWAnKQsdYAxSBTrwL6F2mco3jYq9iFLBb4q6taBnAPJfBV4MxdcYuK5oHZa1YN8BpvL46GMovB7",
  "key12": "3FTjZw7h53cwjgn8H7NH99hgU3Zn3i7ShtayHuvkXMu7VZsFp2gnqDgFGdKzStvScWQFTXCSrBfnSfgAKVt4NrsU",
  "key13": "buGfz948ss6w3xfhGR65Abr7BWVCqNV4vFAzzD81UecwH7iXfzyqoofjMRzHDLQuXLJpXC4kCqm1XH2gA2tvpPS",
  "key14": "gkJGXPQXPrteJTVq8amK3DAm9SGJrqtYo4HnKg7Rmok6ivDrEw96DreYMFS3EWEs1ZsHomAdAxmK8nTTLx9Trzu",
  "key15": "V7iTDi5dEsxc2235XSC2QAHEtQGJRFKpAsFAkd9sP6iBj8KyVFAU9nkKym7ie1VnYtCmSatGfw9uzKcDNtZWri4",
  "key16": "4isYHvVUJkY1AtBJsrXqcHUpkf3gsbfe8owgvUSm3a3Ce3jEpeT4Ndgowq7wT3Vkfig3ngLNHAMyLhH4xgsA4m4N",
  "key17": "bEL2bs2YZgA42QVHnDHxZHDw2U3xSXKovVBcaQxvsuQtbNJNLfnmFsqoXexDnPXF8xAYY2yTrhAUjACAtn1QZtb",
  "key18": "2yhD3GWWnFsnjpegBVAriQkWd1b8ZZhEUmmPSzqVrv6uR3NiCM81hvKzJHx3MY5YLPCG83NSSyWrCfRkne48CNWf",
  "key19": "2BnwTAesUBCW9FoayDM7orzx6KDFsN7gAJTwdeimFXudf61BzyKnWQxKxcTrU8H3gJhnZbXY7jkZTsbL6S2eEzpT",
  "key20": "5eq2a4LRnfAu8TxoR61xWa2rw62Z3DuibJoXVp5sQkEUqpspxNXyPKbMEzD8UJuWSGePk6YANP381Afi2cr8SQsG",
  "key21": "31zJTXMAZJWckuwZX1WBb2EQLD6RiYD58pdQY8ZmH8ERnsK3YoPzv9LgmisinmNBWedXmtNQry3xAFQYYp3qt9gx",
  "key22": "3S5SCLjTckHC2c8uXmnHbaMAm8gcsh1VwjLhVooTBiNoNi84WZYNDGRTRSKuDiCXmeVUrdq6RZNSwGBKYqivYwvN",
  "key23": "3qLTaafQxxTf1zrVknXRwR8SFdk5yKkdcRikbTxRwZ6guGh6osz6g6X6do3aoGFLTMG55RfkqyTBraA51g4hCgYS",
  "key24": "65L6VKLTn5XoBWsiaXtfPF6gyU2CidLgtgjfHq3gnFGHBBibGZ82TY8nrmzYh2BdFLVdyEbqJ6XdEGRE5qC622x",
  "key25": "4RA2X8yq83r7AXxYZKp4wcpL5fZqSeNDNNuZaSM4kUuBebEJ1SwXMf2bunkgV4z2ManNvvyCdkYdKaL6pzucm6wN",
  "key26": "2VuDgoPhcmjbUFEunJ898L5cQiip481rTDKXccC86mssqshWUpxVfFyKpRG2vf3n4ng4A5kLMhPmBRPVBnhKCmsP",
  "key27": "6289x2fKtpSqeuZvdxNbJhtFw8Cz2sX94EadbAnSmR8M6WMrd33YxaSNcJTXQXstUFciz6BqQJ6qgmBi8kVULqy6",
  "key28": "5FHJabpbd5G4VyEkEz3b9oUw6S4bp2edUszyzJWLrLjZSMQy3ex5by8iTmg29XZAAvinrMuEkbBvDsQhndJjtFQD"
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
