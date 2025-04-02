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
    "1Kst8XFnQ7WMDjMoXH8Tmt5ZuFxtbnt2dZTn3RASchxv48bTaWVJvhh7CKocUb4igCY9uctYUNV6iMipcxtQUkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qa98pt6fGpZuWGVtLzNCPXi75iqgXXbzVD4XxobiQ5SDbFjwpASXqnQN1K6xNcHPCRYAnAEntK5adW6N7zJYof4",
  "key1": "5VxbF55phFRpbhgseFyHAhVFydWvzR1hi6JmEkoaFezHbQu2mmEr1JoAVsDmZrVsxwV6hjowW4FPfKoK2p4R3wZ3",
  "key2": "4cQ5oR9KbBVadSFqjB35fgqPHrviysfosqb1kGfBBFJZiQFrwnWbitSD4tAHtHJy5CFMg3UnwtqAYpLVhYR6FieD",
  "key3": "4sZPR5jfBg9GVp5yt6asXCWtgcVFmV7C3BwVzWUPDyYYFX2vG1tXycsQqj1YpJZo5Wp4RJpLqnCV27HiXtm4CHa",
  "key4": "5vUBPjn4SbKNoBGtSGWZeHVZLZsQgfVwUp3jvmBDRs6Wqd7BXHEb7WStQrFTYgxe169YEktwFznEtLG9LeHjMEhJ",
  "key5": "27PWxPLXAsYiXhT3pHU2YJGWEWxJHW3zjG1dEfLNYEvXfEfsokVrVfWgwmEYgcaWC37wQ8x9QRoJNCXQqCf65GHS",
  "key6": "2NeXZnaSmmkMvQ9zkhKQ6wD3hB5ABgCJQgQpEYvzMsnnZG3kt14ktyXbqZfPCQggDxqdZF4g7saHmoia9U8BFL9M",
  "key7": "5RPo8vZkXuJXRick6iZbXqvXdF7iHDDhi4YnjJxQfrfLkwN6NLLMsMGt5NKneRxYPAtjGy57fkh3ewE4N51pNz3w",
  "key8": "qVp27Pvupq2ZMkR6VCrcvr8NskfH3VDng4DBAkE6h7ETKMyPvSAjtXjecrdVXoGqaLUqdaaBmzApszmkc7yoh2H",
  "key9": "535RnUNSkfXm5pDB7BJGRQUPYSc5m69sX8qHLkTJPcbaEMkrydArsEHA7iSysoQ1gwPKiGp76Jmh5agRkSSTmBzc",
  "key10": "5g4xL1YjBCJ6QCtEaapXmVokC491a3Hy7hATfbjtGXoocCeaaeJ37aewSynQJwBYisysyxwPyxaxsBdcmTvJ6mtE",
  "key11": "5oLqzSeqV69wf7KNAVSnHhUWYj6St3PNLqJk132c6yk5mbAKVBHU6pcR4P4TzKYtA1STvgGg3LPq25qUG3pvoUke",
  "key12": "3xGkZSBuC6ECq16y2C3fU3JmbufM6Fmj5deXb6ukC6gUewfKK7rwmvQzEnu294Ds2rbPZMTkVzfWLTsWPffivPuB",
  "key13": "5eog8cYtgVCUbd4A4YvUu57Dih8H7ohrexFesPCovHkgjZ6YzXaDToK6qCcZFo2w1ZHAPu1pTT9x7qSAB2xSzskF",
  "key14": "3LdELfEYMtHGj63Jrb5FQJfz2DrcSMP1zT66U3unf3oetiXVckmruDRUWtR5SKQUNcxuxt4Lz5zz24CsCSRMSZSy",
  "key15": "2jxtWqv3ej75CwDqePsZREZacM4njGtyvmzcSkX8eFT8KyuKPTMTUjqKw6hPWM5X4phDukA7oAbowHM52n8qjSYK",
  "key16": "4MFpYaPcxu3y2WAa5ZGKHAmSK2dricRdEu5mpBzDei9v9x1HXhnEQyPGAARhB74n9DwocBHUxE6yWhWEYKCQQcW2",
  "key17": "482MjjfeQERGP1M5krBDtSroAhh8TiqoAKvcdEDTZeoyN17cbmKXtsDKWDq8cTCravhcovmfD124GSDGghDgGVhr",
  "key18": "NV4iW26qVzj41HbrURHAfPrCm3TcRGUw1PZkARs7yDxRzZusJBwGtFuEu2TpAXVdb2Sh6c8yQFZVhAzgZBHmqVp",
  "key19": "4MrQt6i146RzxanAmZYetaBKPH5YBUQX8tFGezSagUndeQdcB9JFNqB1YBinwcvGFBVjDwT47V62EtmaZ8vP8nHu",
  "key20": "GKbmt7UrbLtfJzj412qQXUaL96o94DXwi7EtzVT1jzZcnsiVoqS8VQdFwjzVxrk8SqKrZCJehpHtSHu9Sk73msx",
  "key21": "4FUHTetzJcwWgeYY9j6ZN6xnCLd12Vqv1V1sDQGghL3gjpuLHuqsDf79jZfgdEk8iTcYtMy3np17rkT7NiXwyUUS",
  "key22": "2JusNkvj863WCoSFKJEPDjur67c3FibwNTPHCTKcfHq54mnBJQwnLdsELmZMsyeDiorvGH39TLfvU25ot9V9xGui",
  "key23": "GaoBY3wgzCizkdt7czBLSrgAZCZM2rrYhfU4YDqmQaoKNt58iMqLY6EqqtPF4WxXwhNSWyvz6ktDVSjtBhfLiT5",
  "key24": "4k8Y8JNqW1omoet8H1oPuWVNYqAFhaK2Qs8u2pw5W7tRmfUHbbZpzid7hvQPaQd4vu27BNoijyxRfd7MUwAB2AAg",
  "key25": "36MT9YeV9D6TWr2Mtxpbv6d2WqpSbK5uaTdSmoNchGNq1SXB12gcYid1koRRjjjHqunAJiAS57hmZiM3D7Fo7iR9",
  "key26": "MeKMvjRptKmjXtu6YuNMM4UbZfGi5P5eL5fqHcF5XHa5FL6kBDmxueTAtUAUEZWk1JT2M8nUvuUmiAJ43yHcZ5U",
  "key27": "4WqnzKSFQehUE2SuqoBxoYHj7d5UkixyA9GpvuvdKb4STFV7aerUxaymPrEEteK9MS5YCM9vczdna5rCKiMZPWdn",
  "key28": "3mW3enmBAGyz84sbETJtaGVcEhzvcCRCTdi3fqp2bJFm9gcW61bRsj3aZAkMMuMhj56kcjj7hsvXCBJSnJZUvveQ",
  "key29": "r8iTFd2rtcC1VQmeuLxhL1166HbGnK1VK41BmiXUCsF6sihkK3YNH97Hk2ugK4DLhKwK9LfLiDVJjSRE4znTLjL",
  "key30": "2udDcmvzAwiF6CxhE85MMKzUh28NdMfuV7J7mS6g9aBBamxqGhZBV1AiF9musT7MomnEFDh7mAjGbxzamGxsZPDv",
  "key31": "27nsGWAMpW7C5oS6HT8ihhcidBu5Fiq3qASHvWsEFnYFeat1xwV8RzLWKRuRbEtcT8HtenpHrbtjQWP1iPihowYa",
  "key32": "2DPVJaMS48BtNKMLFeS7pPJzb9A48bU6yFshaomR9bdzjNJWN3wc2rSawzPpbPmGMHiiajBZBGphSZoUNFPSaQ2r",
  "key33": "3tftyqwzKMP3HgSjutkEzvboJ9wdSJgdogYsjbY58gwR41oaACSbMz2FTWoSnR3Bvqijpi2jKFMERtRmbsdsMpJx",
  "key34": "2X7zs9iAkYbDYoFCv2WUJUXvauvPTcW3wpfwVpVMETVtoH3CDvYucMcxsCG6zvv6SYbw5E2wUMMmYRj3wsmJFckm",
  "key35": "4DYAbxvWHTFozWo9NYRxsV1g4nzFp1KLD7LwHeFFFhrHuEBkmadmjvTQW9swohPuEzKtXRxYTmtzQFTFM9jeV6rZ"
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
