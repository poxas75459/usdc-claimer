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
    "4zbzYkgeB4p6cYPBhewtWTWWcb3VHEdorPtBYGYHkwNYstYjbFBUEs3AeZtFD33bWWP9SdWvKAVRpKm2sJBvSeWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQa6ZCArRo7WaKJ9yhsntDkfJJVZ3Y9n7PXzQHweh6L9qcWgKerofZtFpGu2JeDnFZhcyeUoDEfitxf2sGWKaEM",
  "key1": "2Fh8hUwJirgxAWiCZUSHGRjPTcDnYZZKs6rUUUVYxHWMy7YJGU96UVVm7dyw8GjBYGhTFEBr7YvMPtoDAhJrsgfP",
  "key2": "4E7Z9FP8iUaHhbmvKq23TSUvy8tj5qzGsNeTim4VYhuqHgW7k17P7kd6xodizQ8EZBYeaCtY9gGsMDbAvQNdxVef",
  "key3": "4is2TxYTCZnfXMkKHLNxzFviL5iH2YDobs9R3PgM1nrZZAbc6oJFMpwUkPdN9YUWdvpGxpSHZeP9bpg7SWkRuFRb",
  "key4": "WR7REReGKmt5rVVyV7QRVzNQn8gmyHz8E5tAZtuHLDw8oEnGKExAhN2Vw83TniLaPNevPgnzm2RxJjsPGrqBa8P",
  "key5": "5yVtCYbZbpwqYN7XeQE4JtJZbtwcYorTCQxHCTA4x5MXEDSKzW9tD7bsm2symzaRe7RvfH7ZAfHxD4YYiaff5UHn",
  "key6": "3A95nMnNYVrysR5akGFH97H1uWzM1EAq8xoZDL3sixRoZZyMGm8USpremc5kNQVMZqU5GNPV95ASJ9AcdrCFkc82",
  "key7": "2kx7TbMZsE3P58yjRQJ5b3CA2pxbDgc1U6R83MN9xgLvqcoQKeAXRntXPCUrNiTPAfXUsZJwH5kgcE7xzpfTR8eT",
  "key8": "4osSpoPsKfWFWSRy3FRkhXpRRz1Wzhxbivscs65fUpAVSXRFum37k2tenNd5EZvuHFnQuCAB79XkR5Ghm4Wws5B3",
  "key9": "Pk9b6H2FMpQL8gAyVxUpvtsRbjP5hQ6iKB9dy9cQzz4vk81uysA7Tuu3CWou4tamocCUmocANmLER1NZqKRoKui",
  "key10": "Jxqpwb3zDy73ZHTUg6WYddKnm1TGfQNsn42oeAiWgrMbgSABKVTtx32EbSKNJ9zpMhZYv6iu6A31GybTmFAufTn",
  "key11": "3K5cNF8EhYHfz16Q6js4n3sLSsNwvZFDLBRTTG2eRWdvFgfW3kHRbRJ2i5uNW6jVaErqtyn9Cy1nXtvQ4fJQM6Go",
  "key12": "4DSkuB3FzKpgi68kmNzmkds8Prb3Z8bdJrfViPPHsXBnda5ouapBCnwykkv92cbVuvMukfAYeU4R7Cg17t4RktQg",
  "key13": "3SF6nbtK5BVvpkuKoVVrWyiVMY1NTmENcWeVyruRUTzkmHhAU4MHRyuCtPG1fcE8DQZGvtGVuzKsqjRDEjFZ9VNe",
  "key14": "2ESYXzM5v3yK4XmPLoSu4Pf9dW3QVzfmjzRfsDyn62tGT2Tyj368U9GgLXjppQmjgseHyuUERBNv3DC2SUpKiRyU",
  "key15": "4geWUA2WSYNZbbYwcXdPjPFzELMqpxN3D9YQrEHMaXoZYRcWw6fsK4WKANTcqr6DbYDNeX3b7MRj2KXuxRWoo4tG",
  "key16": "3Hcjz7Q3u9JNNJKYaHE3iQrkwewkadnTDsMGzxnHz25H4aougHVNBxx37UDRvbZL2RJwE1uarnFphx8iLPudHV71",
  "key17": "2c19xU21boXbhxgPunYxADGSufL7w8V8Dp1Avyh4msiQWWTXzKgaBQnjTFZB2Eqiw8Y7XoFwgQqooEeJhxrDiG4e",
  "key18": "KzsMDXKYdh8P5qSvYcBHTvySRcbicKoBK83QEmRfYL2J2AXMeBnnLQpbK8xT7T1TABfdJeKVnxT9XrsfwCvDs3y",
  "key19": "2YRb87H4wAuDdMVnqDLRDvVuEtJpPbTbG9Jb1fybpRL3XHQZVpuzasTxopA432PPxyARyd9cHQn4xRXKXQrLezNo",
  "key20": "3J1xZS53E2MAJq1HHuUG6yo1KtwcWQemqkYdzLXKYP78srqyuoiwY8jfmWjbLD5tKRBZaX8ac8Dqy5sWv7Cy5mUn",
  "key21": "4AaSvZR1FVcSaFEPdK65QNvBS6jtiGFhQhcicyXpDjn4DgCMp7pC9tbZX5QgPuSxr8TzERwDFkuKibpVCNLsHB4c",
  "key22": "4uPw33WasugdyTJwr8gisfRhQ5MxWfbafDoiRhzpdTLJ2HEPkdKuVwwzfSDA1s4Zn1imLHEvJxwsiLHyaBHyyiN2",
  "key23": "3kFjjgbMqYG2DD57Skh2PNcVoQ5ehbtixKTB416Y84VHRWwDsrxF148KuevvPv8hYf3V36oKibEsqtDdVfHqU6Pz",
  "key24": "FVfp7jWMb7F3Agho86vwwB4ucUTJDB9ScWJZ359FCWsWYMDBnbaKG6G1FV8PYkWhbu4sL9NzMBvW6V2e3RvGLu7",
  "key25": "4xXDHN9JkkJd2TWNgs4YGxGjkq3bMrBAWvmk7HmTyw6MEw5zhhuWQCgXSMo5d8HkBXzZ6sV61yeE12kkKpptUomY",
  "key26": "5KWy7Noy1xHqMxooENCUSeQ4YhyeHriLWs9awxDEBjfE8a9qjitjg3MHWcEQgQ4cpP6VQD3B53M1iwjw6iEQ9DYa",
  "key27": "qmCHenUSJgRdwUW3JzMAvu9V8eWR5gNi2DXPVPW6wcDVLYdTuXpPCusyNWBLptp4rraxK5LLsC2wRDvx8tXLrDM",
  "key28": "dAE7WjQBXmCr6f6MfofwFNRdrVfH8y8sEGvLwQqd1cwyTH67KzFyymm2NbT9KybZ7SgDU2KB8mzoBvbkPYpanyA",
  "key29": "554GQYG5ovDjzTEoVi29rShapPTxGsEr2uqi9rKMd69t3YEz6ZwXKvxmntS3JqjC4pBHCodGvdSWCNQQgHQxxokS",
  "key30": "KnZiYBgcHxudwNn2GvG9e4TG3ym8zJRvnm5Lp3K8To2DDPqsSRciy1yYuY2pwAzU4EdNcnhAoep1QJrcWt9TiQx",
  "key31": "d5EBhtJY2hkWrZhdGCrXNiU4enE9LkTndM3TLdMoSb2goRFJHA1z1vtti11U2cRnCMZKsGo6G26f5pHkRGZJa7p",
  "key32": "44A7ZkNoyfmFdLUBY8yymV3f52GThNQAARYseCfxTEnro3xcFArpTTskU2zriheZi8obcwLZF9gxM38PaPaeX8Eh",
  "key33": "hE19nbqDWuMHgPdcPR7dMSUNtQyi91qdiHCW62bEzgKmLDenwUtjoQoFtzPkiY44YiUR1DCUATzYpXwZiyoDwkQ",
  "key34": "kGdRm3W9t3Ro74UKfvaeGxJvLSj6gjK4raWXdfSTGUdfMnURicB8Ep7XsbYgRtR4H26cXxypqQNi1smuFRYQRWv",
  "key35": "3xYeiUCty6t64Vqqf9ehJwKgB93P4PRYbph7winroReP68Hse1hBiSVfyQeUMbt2KKvxyv68xsJeCiThxqzG7Wyz",
  "key36": "CRrJF2AZTVseJtEUczvxn4LrmFsv2qRLUq442AUBhrrYyna1E6MHFxeWgVJ9DaXW82CbzBWJsLvPBxb6XBCLETt",
  "key37": "XaDTvLumTZwkE9TGDP8jy7Rq3kiDBCyjMUrZt1aJS8XLUV22vN5P8wp8d7S1ioLHSxLxrrHDttsrB2ACuSdVcC5",
  "key38": "TAoNGu1mZCh9MF78Umu2fF1Vc3aHjTuXk7yYK3F5SrqaY1CDBGqfTVH7dyociVsu6W2Pd6UjaD9DoRNisx6nrhQ",
  "key39": "472Gq7Wq9CFpd8VyefcgXuGdNcQ2c66gqwFdcVEAN1XxYCTi3Wck1N1mHNt6hyWK1nYADkQGYR8NF1T8dthZ5PVJ",
  "key40": "3zvhsBDXTtSsDtmd3uCiADgfC3Ain7WQwqAn1hJMrUi9yMwjn6VCpckbGMzW4DTVHPPoE5DDjGte3uKMSvqvakDk",
  "key41": "33hkmmqKBdPWhTn95ZFvuBygxKKjDprrgp5aQyEDrgC4ozeEcAqTqC9MMSQ5zuMBUqRxHKczthYchzSY4n13gkei",
  "key42": "4w4t3ejiC4vC2aJoeTLbBhTkyZBfTfWvfiZSeGM5bHs6fbi16seadxq6RZNu4TX9X97KkUduMCCSQ8s2YpN1haBe",
  "key43": "4jXYvhahPeFx1cHLXvwrKjFXceyEXFzcKfUkTm8LrbxvgLqRFTjiDAcg3zxRAQw5Gofxpz7dt58cRD7SZ7Baw53x",
  "key44": "4cSPbSEmJ7MrEUfgu9YceVSCiLFU2TwxW32Y5FCxt2eGAcuBQkfTC3EtN3kozbAJA9A6unwvGwWaWYBfwy5amonB",
  "key45": "4WySrMKfw9qxmW4erA6Be23kTZhNT7cFawcXNxeuvovrHRL6jgpN73FjW2G7vcCJE1eGpd6M7sh2JNcwfkYfbYaD"
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
