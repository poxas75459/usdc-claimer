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
    "5qfizafAM64Fbh97cmjXKWxYnEx4NCzX3GxXmEYnZQHMWAqAkenDNihqgTeJaJKte3H5bNbwRFZgtd2QbZtbRfgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYZeu2K4YkgCZzGDXtYjbeNUtKgmpz8ejyhUYQetYQd6H7aFamz5ViCb3cJX8jLGPx4uZ4kDmgUMW3dLuHeDtKT",
  "key1": "3Qg8qfh8Fx3Nf6ryYJ88ZbfATRWvVxwYKMmsQJNDdFLQnP4SPgzJXXpMKG9yVRxh73vfiEDR1sZbTK9pV68B1UXt",
  "key2": "SMBJRpsiHLUSAYCQTYiDdeQRcsFgN2ztGBscUCgsAW6CEcnfrhGakN8ph5GpDVLH8LPz8BCnspku3q1Mp2Rx26L",
  "key3": "Ed3QuZjg33QJ6Qb7A5Tpmhfofg5P8KdCs9ncrgvN78jPc2HyuBakS9kTxyqUyY56mkXshLASumA4cMKRZ9yNHBG",
  "key4": "365pkhRoQW7Mp7VfFG7u9JdJkF1AKie5skgmNYzzue3PhEU4cRxXqJw7iDXTfP7jUT7byAsnnu4JfUmsXo2GCkD3",
  "key5": "4Ush4yXqocmYUo2frfMu9bVBcWeDtnuHHyvG65SpyLP78HGTHfqL1PGBiYVmnCSkXemNiMWj4UwE36nZSJ9u4b77",
  "key6": "v5SZPDjaadyPRvtVyQY6Q96yGmjbxWSUvhJAFH66NUK8p6ct5a74KfXWh7gxFkt7RPhfGM8mEQ9M4z8PxiPLwzp",
  "key7": "5tr8CVjzHNnvhto8tPSdqu8ByRUoF8A1YVYS5sCRnJr4w2U69jXeW7xb3wsi1zr9fV1Mtx6AXkRUvgAJMFpW4mXA",
  "key8": "kxNmBYJsh6UcN6HrDSNY4BfWTU43JNihxnUv1HUaw1Ze9yVBxhwRonUBbjsdxquF5Eo7SCcjY9jyUXRgtVqJgpY",
  "key9": "3XrdVoNfFGJCYsnjHd4LKUYFekgbZiYxZSww2GGJWTfjnfr9rwYnqGmnAKZjZhWZQeBgPuCMZb1ygaJY78QMUiTU",
  "key10": "5UVFLFB8YNrhVjFUvAyTnQVRLqzabXZpY47r3o6DCcXmbU8Gg4J4WSDQQC2kFD9YAEBkYYiMkmDAnY1Ex1bJUTrM",
  "key11": "yLL6yApFv2H69XMjPgDaFKngQjQJdemSDP6cJgx8CTYNhVt981RL7gPtR18otggzHzhAPJ3T7r97vDdY8BvQuWH",
  "key12": "3P7VDFor8uTf7FfVBGT1wdyXYNkX8K44NcFEq4qqFCSYm15fabMBCxLwQSZ2zuKvTxgBkYicfMt4LgqdSULzEvd4",
  "key13": "53S8KCKsQjsmBYVBSAmjRpVtVyUtLPtezD8yapFsj7bfGFieYN3LCx4fEHrXMebTgMjPA8ai6kunKCqyN9rCHyFs",
  "key14": "4GYmuz8FqG4gM16rMP3j4dArBE6tJvegUF9oErPBGdsKAskEHKGdj6QM3M7GSu885Z9rgL4w8cWanpAtbWC1PBVp",
  "key15": "5RVJe3sbyzZVByawTp9gwAiMC21TQSz4QzwBVBYEACM7dH4g8nakiKQjFkwNZuCHRGmgrbiYoL8MU4rBt1cR5USL",
  "key16": "2wuvhbGp7QyDm7oYH63BkcZNj4wMZ5mNRUxHkzKZt1t5xfjuwJfS7upANZK1MdLvMJzqmWdHbDKUCuK1ffn5R8Dx",
  "key17": "58zd48sGKCV6UcVELBjNS234heJa4KW3wgTrMemJxxA57khEDRUheiVAmLtGv6PnW6GJjagAd3k6goaGgALGuzGr",
  "key18": "2avayKrGYA66Wyfe4vixEPPRfi4V9vksUAmhxVkxr42ikaWCJDZvRX9nZL8JQo16r7FXNJ7MtbjwjfHye2PBEmXA",
  "key19": "3Dbdqt2LHC7G9jRi6MH2VJFUGHBp9wZmoNUQm3Z4ag7zFb1yQx66z8uv3svoucM79ea91w1P5ES3vEkEzkY4KbG8",
  "key20": "3ePHvnmB7hgAPCtwZa6U21n8X3rehRaDLkuTV2Nv2ntDdc1LGbGwoJ3PmZqKqUG6y9LHVfzEAhbkwNXoUjPPqTxA",
  "key21": "BhmeCAb6omYqj22pHs4Ug5MYKR7XYWPaTEHU9A75HZpWC5m2Dqq8xjqr8EDSkiq9MGAokqNxGfu3HPFcgckE5Nt",
  "key22": "259Kp1PT4nsK8hMPwo6TYGXQrya4A6Adt6U2DUoNTTLF9Gj26WZRk1wK2sbT4Xev34tVrHMZWUvTLaMJyhwnzr33",
  "key23": "5t7FKn83oFbGabSiudVNAvn1Ao5RvwpQfnuQsqW6GtG9KQvoVZesz5BMb3FZmJVYxNSrfrRiXxS33EWMwZ6nmuaY",
  "key24": "5s8BmYny2DLFnBk2bPkPiTQFe6cJBhirYWAdtNiQDQFTYiqsEdnzYqWnodMH9Absvt5KgHzZVbbpewBq1gah66cc",
  "key25": "5LdcQqaz4Shut3DreGv3Cvuj6pXL9497LSfuchDxwDv3jXe5gUZBhhjtm4ZPuzVedtu2WzSn4qFUMiHVzHSkcvME",
  "key26": "4b5NNZt4DuNByLYB4enaxQ9pdD8sCgvPgpSRjKGBsGJBNpcagFaWH6wAFG71A2bKH1Pbiv4cKDCWZuWomPeGoSxi",
  "key27": "2ZnUGtzriPgpPpSjhPkxUko2aFFd3u9EJTj38UNSRjJb8LDcbfxGF8BwQcv5FKbvUnLb63tjBWn8LSf8LegbXt3g",
  "key28": "37KSsF42oRz8mDzjhxAbNFqLmPNt6Y7GiPE5uM2FUW1AmoUJzxRP4QvtNvwat53uuVpdL7RQYcBSdEwXwLzGh9p2",
  "key29": "5tSrFvvn5BPaUSsSwCf4eCFU56kBGSwL4sUaFK9cyrzbe1ezThMTottSW77PKeeu2iVuUfdDTjdsRi2y1RcsRdRG",
  "key30": "2DufKW4Jzt8VnUnEvWptHkga16eRkkkjWiFdykJkxLG9yr47BoYnyHBx9h6qR1Ae9P84vqwpEGQsk7oi1REHxzbe",
  "key31": "2y43JyumyqsW2cS9vmokfTYfq9Nak9yyhwragPe67tyGrxoji4AXsECFMSBoZkfqHouLamnXVQ8JHGBPLT8LVUFA",
  "key32": "qipY4is8nfHhbBuguTbrD9AHHxJvbZK9iVbjq3QGqVKhmaucLjYWUXWdPo96fYvNPA42U1R11NwJgFVrTcfcdST",
  "key33": "XQr43MFBCPsGKK92ZcNsN73FhvvXKDvyDQP4Pyco2RSmtdmfvfLm7g5Wyr4azTqp5kpZED2wHwRVoRpPCRAMQfA",
  "key34": "3BxkuWCcutY4PqncF4QHxjHq53KgTLuaHXHwRmPBWLoPRyCQ2pLLCXUcPkbug6ViyUDXjnCjppvxZohcETwmzSGD",
  "key35": "4SV2Mwoyv9zBmTjeBT1WXevxwNKX4xWA9eg3QzeSUJM4m63gNhtLup43YAVTeRNvLzwUiGx4jtDJFzn4hPYSxDxQ",
  "key36": "KCmNvD39n9Cwxa8sLKgGduBG2UBgFVUdP1bvTGcURR6sjLBMf7xrhNptq5qtJkR5QR3BrNPCteoxKKKNX5nvxFb",
  "key37": "32kjTFS2ZAXVPQ57edAmHAzLh1nzwNrB1uMWyqmLbjJVJpAuGmpyrhgE1uyu5AnudP8KT3ZxpdbHNyPijgzym1Tp",
  "key38": "vuWR8KeBBj7zNWvx5Dh7Ae9t3HADfU5JxTEBiYo66Mep1vXMwVuS48Y6ctfP7dU2Zf3MbBgwoMJ44KnasutdKiZ",
  "key39": "66rzqiMoMeGsWpgU5JwZAr2236atDTvZQDzAPUsoF48T32dfgwYDZfBw5A7NADq9T4CZDnPNwuMDJ2Jv3t53zjiC",
  "key40": "3E3yFUXiFfRKSTCeNmJKHjWqDSVWcQvADgNDMFj3rn24bG5p97QmeKcbbFvew4yL1q6e6Mju6HZXYQhYhwCi43AE",
  "key41": "3poCQexcXG6TBu4q9SNf21nWinTzQ4M9emAejXwhg7G8WrnVLNQBcpV1bcZq7YHhmcJQhSzhReRVHCgEKtbuBb2f"
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
