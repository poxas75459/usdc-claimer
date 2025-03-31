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
    "4TfG3n1S3dkTZLSmboEaMDh7uBfacbMbTeUqCX3fBVN3seJGUHSpRV13AvYGxoN7thPbyQpEMfLwEXHjyRyaWJ7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUdpyBtCBtvcg7Er77pv27MGZR92KCqbxnUa6C8zZW1LF5t5vE9TE2m8EMA5Bdj4i5yRhTHKo1bu9hyGepNgQj3",
  "key1": "49fnVK7PVMQ6x5LKA5aHg71oQHSbFtUaaoi4WC4XE1WpjR34ccu6jvE6cdz4Dzq5JqL1gs3Abn9vPEDUkbhyoVVS",
  "key2": "2GgMr77R8L7o49Scjr8de7rRbxnt1KqH84cGiyd9Gap3f7MyESNyCSv6zDyEEnvxHwfuFDg2oMasTrJLWDruj3to",
  "key3": "2cxm2m74tENpYN21DaZASq2YJVrQw1eC9pqAupp3VfnNxskfSrPn9iZu35RLaHT6vfsshmeiQDxGXoteqXDG7Lmp",
  "key4": "2rdthm8kbji8ysNpKnYWExW5HoW4V3e6kgJK3RydQHA8LcgbStncPo7FDodMCF6PjfX9PNzRCSH6f3SkD43wtJR5",
  "key5": "42rgEzcZsrA1FdRNBhu35BrmA7Uhp4VGGguDBD12VFbvCmbqbrQKFNQjhDMdYhVMwGxuYGRoHouJ7UqviM6ubjW5",
  "key6": "4g4oJweXTN5mTSsD5yaq9cgDDcDjyAPdovBpC886Kc7TS9BGCWFozqmWHd38siAtHErydJBex4aGzD9mhuo18VRv",
  "key7": "5eeBtnU6mruwHXai5HbyCoD3xzvKX74A7v9hdMPtZkUTXU8SjvRNwBfBqZhRE3muc8LYTK1HYBCpH9jQnCLkfZnU",
  "key8": "GVBk9pYHu6nhyyu8pzzpTfSWD8RGszBvwVzj77suk6WsxUmW2fWArQeirUxasHoeDKabBUA488WakrKCKevPXc7",
  "key9": "DTwtQ8PwATT2Bb324YwaApctxXaAeE5PSqhJj8QLV9kNLSVsZrQygHS3aMFzbyMFLGehWTL6QvBtE8fnojzvoGE",
  "key10": "4HyVqKCybUaThrVnVsxg87ahwbob1BM7D4u7gQGgvFTN7fh5t1miMkQAw4WkubkPMrkjzBxmjVCSdikQ6w4vqiV5",
  "key11": "5UjW7gPY8hSoXTFiprTpJdyuMckm4QriDFP6vG8HG3Bu24XyZ1cLeBAU5xRtyBRJLk5VjXiSfwcN5E7Nf4kfLyBA",
  "key12": "5ESW9B3UGe8Udp88Wqee1X9zFs9r1dPEHBtN19gPZUXHMmrtR8sPtSM2nMoGZzb5JfZXySmRkLBMbDwHpHkLJM9R",
  "key13": "444UrF9oM7bXUi1iqCeNw1neCBiVCsLkMrrEfAJFQNYf5A9PjQE6NgDJuxUBccYYDrPrc1VhafPjM1XVTppcn6do",
  "key14": "2SgcRaQP8chpMU7mx6axgdNSipz4nVUG8WFpntjdPJdVrKz8ByXV1qYcb7q6MMbBeZhyjDg2X7Q6r28t73KXMkns",
  "key15": "3YjDimYSAu7x7rvYnfaeCdai3YBDY5XPt2EitnVX8bURNJBD1TEavJoF7sqy79Sea3bQPrN37k2Goo9N7s8uQfyB",
  "key16": "iEhtfVUgBxP6urQVqH1sw1ANkd6GTEHbuV14y7cyxeebiFVe5UwGHWZQgwgvcgtmCcKr6nd7bXUp9ugu5eyiwZ2",
  "key17": "3aa8PWpQe9KX23o6ZMSv34EAgeG3exSgzGmYiNg7CPAt9yrYzoRaHdsazh849utt87M28gZx5crVResXZndQNej9",
  "key18": "5Sq82wW1Di3U4ntquyXVRYd6qepskStLxpLKnTjpdaPygPQb9YCXWhEKbyXxSMLHac8cGghErV8RUkkCSJXfcURx",
  "key19": "3c6x4HjLxb2BhqB81NToKktqDr4wXNYFFYbsf7FTeLvch2ymQQs4oAD1aDKoMkecv1FgiCBcVwa1D41DvXAJ297i",
  "key20": "2nZiDN6sGEsnNbTftsKuwQhgiecxpaG9e1TiioNDhjr5A8QC4Ts4cF6PfeBfWzpKQ6mMwoBQEPAtg8RmPazgWK4x",
  "key21": "3tp3XmYhJHrsm4WQW1R9hjPrPVv4bEDqD9yRBErG9L8JzSoCPdwLTCBHoUifH8DkaTHgX1qReFuhcgwN51hAzcTG",
  "key22": "3CCFJu3SQQyRVQ8XsSTAaaVb8FdD5cQSCViTcLK8xrKE5SDic3sUQ7njZoKSBdBXGN275ph1QRvxqmiX9qarTBtx",
  "key23": "3jDfdrbsdMRk4Q2FjAX8iBKuTC6fjTv97vu71zGBpMWr5iQnJWgX2nhPKvZGr14AXxkMxj4TyGSPDMrJBNAkwu4i",
  "key24": "5YH5jpDMnSnhNN1R65XA3CAmXRdnidUEA2scKE1u3tL9kqd1WJCfFW6ukAgH92MwgXQY7uPYfY8i3Lxsuz8hTGaB",
  "key25": "4iuh13vYRTfCx333KfJKCGJCW78qUdDZcRBce8WFu25NYCvDShLWxPoV2YzMbYG9u64LHBcsfQqyPzVbjQ3ALRVj",
  "key26": "5wqTM8Yv3rYMKH6k5Yi3HGE4tuVr8rwXtL4CvwvJReBXGBqw9Ajy5q2AH4jgfMvnLnTh2mTiSWv3x5igUL57T94F",
  "key27": "2uLys7WjjUuq7dKQE4zn1aPpEeX12wao9F9j2j4sH3WdpLfRC6EY32fxa6hBXoaFk7qduEL4o3fR38xxKZRm44ky",
  "key28": "5NjLmibzLvS6HUjmH3jQrxEPhqWkRzoAwEiGZW6oWsW9S6NiRMXYPq7MNS6tr7De99GhRX2mQSVx8poh3dKnP93e",
  "key29": "4DNZpS9LnHmRGkPpZinXdNXaEyNEE9hZZmEuHGpxJgwP5YeGoEGo5n4DkDYu1eKnUukfye6iiQvWNwua9jdQRXPP",
  "key30": "jRG8TSWifEZ8BgSy8hQ7GuPoijrGRzBu16or51Tvx5LxVRPTmun2h5drHf16cudZaGATJwjG7vY3AdRoVACsnYP",
  "key31": "5cs4ABHJqKB6hYUzNMs9unTDuGVBShYnwomVfGzS1GWtPGQM6cqi7tZkoTabGKgkCumvTJNiwDcULUdjAcGQxGtU",
  "key32": "3TXxox37TppsZ8VZoxqRN3MvPgCSUPkbexy3eACa4AhWiYheAUe6ExrSNcKaUh88Qd5JNJW84WjAC89dWN9oquLk",
  "key33": "4q6wTDgbtTDdvzjfnyw8ur2yQhwBVAxXWRA9zM5D8mtt3NQm3wpZd3szP4gJNhFxUj7GonUDrfzG4uYVgSFMoMVC",
  "key34": "V7qj3ocLzuvq5U161RSiz3pGCVwqZzudkbU6aB3r1BmSRYyfbuCkvH5Tw4w45jY9onqqq2ADj2REwGXN1WibqJ3",
  "key35": "65SUPaBFMHcEVtfiDgLCEK7sdFzXfHB1TCatH31vg6rWUQKH5ACKdsNwtfJdd52ndU4MNWcapKFx546Uoxbr4KWx",
  "key36": "2Rfs6PVro5RngfpriQ1KmUo6YDTzGwTS69gTkidPkqe9ZdhGJ297CNs9jszomuZW9iXNTN1vKjgnBDESQoCZZdgN",
  "key37": "wjbvtDKWjyEZgfVagpHRsVYfV3j5uRoFHe14crRjYCQ5xjXw9SaHdKCjguRZdxWYdZb4GBC1QNrmU5MXrL6grJL",
  "key38": "21e4j6DcoFjWkSr1x2Nj6bmvvSyZzd5yDg5q4rGU8TAZivBe8tBKu6qJ8ky8KYkLhz2kR9Hd2wN6nKKZ4ZNWNGa2",
  "key39": "2Vk94CYZo1pEdteqVwBvYx4Edj5hGL9R6UWzzq8RCpAg6kPkifQEMjsjs2DDaZG2Pg84ridcYakPd2wJyoqG5tzw"
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
