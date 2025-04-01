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
    "2YahgjTk8rcZxxwhZDxEW8xJxdU62YFhBAAsJesPmHQpQpmzAT6BFMS24W6DpNqxsJrAsVpZxUk3yHVNhoMz1UP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J5btXTiL6yLazfH7jKGyXv7MrmpJRyGqzMfMz8WVFYw2BSzPhyX2svoi8ujr5rGZoniXwx33GBouW2qkwiKzYRG",
  "key1": "22BsNiZEb9MNLPeTzu4WxQs4pP4TD9SGqUZb5ZL2Sv7rvbFUr3bidjyTAxP3D5wyxqFkc8Y14zqcybqBvin9SEV9",
  "key2": "4nzVRn3CRApHLMPQ5TMUhxsBQgrXY8F9im2GPidzBTJgozCUoUEg3vBTaBpfX8JExvRaJ2NF2JoQmqfUbY32Yyd4",
  "key3": "5KUBSVnN2AcZNjytwYv7ymtWxzYtCiQcStWUKcuMGh5LhfQPbWJiCtZE6QFGQqoXyrNQLRNCiM3VWEGF3ozxtYB8",
  "key4": "5kXWJ3kfMxVFejWZAhBsbS8BQ3Ku1n9XZCncqqhN2eWHhyyBJHLArHZS6X8EA88t9j6Z4cKgP7HCVNde9VbNTTFg",
  "key5": "2rWWvcBQJL3ap523Yz5RCYbHo8eX4PQKYAYDkQtJELyVsvLorSJF79PrmpKiBgJ4iaGu97pWVhZcCGJheisumVnL",
  "key6": "2rXthhPjSfA9o7Ar9d6mvRJATxErqinXsqNonNTQoDDNMi57H4L24o6G2RntJBrjq7JEwAUGupLnq7jKVj9Jscc8",
  "key7": "64jFnhT4JwSeu642nLdtiQ3khPB7ousizpNVKYNd4me6bukL7dTucgxPuh1jzD2BFXT2CcudB8oksuB2jiKntmcE",
  "key8": "63Lu7fAku5DRxujy6QW17ztUkGq4DXqBogvfTYmx2hMvwdTdpiEhjbx8sNcG7wbGQ2RY2gphHN1R3EdkvJbEp9JX",
  "key9": "4nveECfjA7xtd7XPEYucZWrfBqdg7AZUM9TQP5S17oTyMtLMHkcaWPqGUKutUdt1o7Qg67UYRZnNvfvfrQ6GsyZS",
  "key10": "EStvzshA2upa2VkMeK4Tzs7q9Cu6uQb5ScyWL5egntS8U3WbYMVQ29MTiJNsee87BcefzJD6T8dhEB9JS7dYFeH",
  "key11": "4Ko29oMnRn2S7Ju75sgcSdaAM1NSqkmcfghYEcLR16x2VHR6qkmfSGsLBB1emyT7Qt933aBgh8PxRSaHYA2Nd2fN",
  "key12": "3LFEFX3ea7bGTkoCrTayJKxdDBTvVyAfjkgiSnBH5CY5KeUjvxnQWe554WW5q7M1PgSqvAB5EbD2NLKQTvCog9c7",
  "key13": "ZgAkiikggNfZW7crtQdgoe5uiZUiEx5voriJg8S4zpS6YkY2dbkHQFx5XyVJkM3Q3TZ9bK7QPQDq9cXt78GRADj",
  "key14": "63ZTcbzJD5BxgazRFUZorBS6G9bYStJtypTCSsjj6ZpTj5VT3bgCkJ3SpW5Adt8bPU2gA9ttcZJd3PmRBtXjg4Nh",
  "key15": "575qVpXt2SyjFLUvCrHt7iGAABSuu5Lz1DsHzdfuMUS6wCkWJYPKLzNbTZNGvso6BEqwXNqyQ2MzvpdmuxD9Yovq",
  "key16": "5r96zHZjw1sUEUv9zRkcV2439L7kTcRA3HeSi1FYbrWnhHQNyVKreqQD9dUexpWNcM5fKDMJtrih7B9XpJ44Gxs4",
  "key17": "5i1AqUaJxJBHK4rcY6ncJuJFKPfRwXTvNGqcmFKgSNadLeN1DZNkLbDCSzZFMBK6CKsa4r9BJeQ1XmYNnRK42K5d",
  "key18": "4HcscTgDossK41PoiPkLtnbbVAM75tWQdVA1j2EDgSpho4SU7vZ4tN12s9CGZ84xLxLHJZ3ofXz18BbVv6Q77mcn",
  "key19": "3i8Pi9yvUwyRsRWdCvwPAuSTiQSxbFjMA3ud9DLmwQXW3Wh9jr7xVH87QeGoeXyFE8qSa77UoZWc812TS1U69Mhq",
  "key20": "25mYYQ6uyCBfRmyM9Q6zLHtbfrZZV1sy2vmHEYtKU6zDh1EHN3J9J6J2FCmQ21Li2TEZvS8gatsiXfk3uniXzZir",
  "key21": "4XNbuSKPJ6PRPZp6TeVXEGieTQqEJw7y66YqdP2Zkmfegm7nvH5FEYprUDx6LrJaxqZpH6933bH6XKeVFGyhqjwu",
  "key22": "2v86Py42CbsgaRqHM3biE7XTGNV2uaYp5RhH2vehzWJb8dnUgXVtp9KEaSArit6Xcrj4ZvLfWVPpGaYinCDS2KkA",
  "key23": "66r6fqoHi8EjvvAZFExm7HYThHwU7hkez2xn1Pzk6hs1jHLHqMt6z8m5qs2Arh4rJdiZRqxJwynAM88fAyd3sFqm",
  "key24": "4zszHifAtBYvRgCGCamYawM2vNq9idr76Py3EcohQoKSHixqVwLP4Pc49GqTRJ65Mv8rPJvF4Kow2upDAfCxsEQ4",
  "key25": "4EdKjWzihQB6Ns5pnVmN8eLmy6dFKuUQrEMb26vrL8FDt8M6HhsimT61VFxEqm4TLDFqvJXo1JPu4jBhwK6oqGQh",
  "key26": "2cvTY1TAjQ696UJ8TiyhdxCDYRpo7ZyU3P5jbkwVXk1Zwo9GHFMr2oEFuZtWqp9T5iPVQWtSBUAmvw6SdVyBiAfs",
  "key27": "4dvknu8VLEfTkfqdaHe24NfBGZqCbbFtWJjvvP6WngcVDYAGAQuhb8B61pJeRtt2PxJqvn6rdZFwX88h5QUE8fvi",
  "key28": "3qKamfyqyPSyRdZT6A7DyzmruJ1DZ1Ck7buB5d3tBCx5SWukmSw6QYaTg1HcaCFtPtFpnJz5j492BNgwP7jPjkGT",
  "key29": "65cqAfZef3S2ESD7fDP8TxsuFQhFh8i5o9mq1us7zriF3e6cNUquRfbMgby2h9LrqJL8Ltket7HMez9KbrwsCNuN",
  "key30": "3sQk7meGJ42uwvusGrjDSNnUTYdarkZwwxW3jZkPhomf4ijB8bsT7C4exAmQSfuhPVtuMHz2NkicUBqPWFNq5U4k",
  "key31": "4phpqAimMREhrEJwm7BRhgF5rVpfYadLsH73DdWXruDTYw4dATYjK8EZoX5fB16epcVH8x4TKdYBUpFBpAzsrave",
  "key32": "35kEFXawuirjDKWFkWNvGjVTpUwxBxCqsvxUwyafHpBAqTvCjJ6kje7tnSeGW1D6DkGYgAh7yvq4m2ZPLfBdSR6Q",
  "key33": "3hfwhYncWizdtMMPeBEnMkVhQ8h2ikSfaGkgQAEMsMZ1kb1Qtg66PJvbVJfvroLzPUNyAb4Nm3vcfMnvts7SqSpJ",
  "key34": "4XUro1SFBwg1CX3GveTW9d3a1yYPuLJqwwnMW5qzsCLon5JVwjem6iLR19WbLG2yPa6t4RrHVqTudTLucjcbupFt",
  "key35": "mHY1g3UsJSLRHx7gFFCoKfxUAzhzEMVJccrBNhp9VGgoTc2oWXy3nMwn6fFM7yqF1du7QaJbQbQFu6FRtd1xA2o",
  "key36": "3qxJphqaEe2Qm1D5fBY7gZEDZYer6kx1vmxvgFbNr3XNKQt4nrZi75uKLmQUawzmskW9fAFw6z4dPV3n77S7VrVe",
  "key37": "67EGWukBafCqMeioqD5neTXihKPvAPGu6Rxg4kkrNWRYLFfKVDRbJrYtCdk1KpkXN4QNhXqPsCVJzfmJ5Y4TQaUG",
  "key38": "5hokdkUZg1V7zb8F7TC3wbDjN6rGpU1huyEBPDt6VQ6a4zduSvhfSW59pwP7AXDGr9xGYurLKMTwCM6moYrWESBi",
  "key39": "26Yq1ApBQNTsb2VHJrNiVuLXwkRFVvStDryjQt895JnuJKyPTrRLzfLWVajh853bk8v3Q5HxyCPCxWbbVnQ6T6rS",
  "key40": "3TpojXBnF5mPQi8ihAKD9pjDEydbuGX3zHttgWjFZ8yzBhE4PtfDYp8Yn6uTAiRn9BU7ufC6w4vww6aoYaaQwN7R",
  "key41": "392Z1STJTRA4MAMuBtBZk8UDdTcaVs5wwB25CNVTDAvK4gfLcPRwHT7CtPtnjhK8jT7Nzp5MJLrEjMQNTte4dQvx",
  "key42": "Ht1jV7cSya1GUytTKgWry1NX1Ga4E1ViEa3jCH8X9TjoQyekn2Z1t6ieo81KAF5vHHoEUaMdmwepzuaXgoosWSN",
  "key43": "TRZidC6Egg4dWELpzuaiLuRgJkmKooF4nuPQQ21gmRisFwd97ZHKRGikNWd5BvXxk6b31jZYFy2P96U4sQV4vMz",
  "key44": "Wi3paBBBWxQMatSw45xfXomauEbVAaShtYToDgFfVGN2fB5TSvFr2iAco4i3F75kMdrRmpN3xFc2oFqxWJ71LuK",
  "key45": "wxZzUwZrqYTNrSCR14RnwQLrCkHcca7BodHcrvC1x3rv1wKgFhMeCtF41iPPqYCKByS4jqG8ZXLFp2CYf2xahPo"
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
