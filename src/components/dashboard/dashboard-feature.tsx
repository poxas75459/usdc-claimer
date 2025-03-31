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
    "2tePVFGe1ZnhD34HmnCBTsuhpBQGaNa7zu1wYDdPnkfRQMZA6cHZrZ41RqHCpxrCYdXNExj5GxvHXsQ8yap8bgW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TonRo8WVkwPEUPrfwPCmjrm3Ss1D9fLdcmdmTjKcTRs81uDfjaYjzaJyH1eX1BfZzVeCgxD77JRqethK1kiADgE",
  "key1": "3k6zZcsS4FRANxRdwJuSVL6UfJvzVSvB9uqRCxL2xyR2gyki13yLZrY2wiSDisQF7BXD5mpkAyY7X7Var4QRPsuy",
  "key2": "66UDJ89g3RsCzjhfKQa83epEMyaS42UTndWf2Bas56fzpCNiSwswkBoJTx3u5GxqkmC1u182unnjeGyzFVH3NCzS",
  "key3": "63X18wspR8jCR35tKhvxqwJfqsyJ8Jgk6GEvCNSSQKH416REsFTah6s4BE56ffRQ6e6BmpA7rb8poUNDe7LuVSBk",
  "key4": "1Uye7LR2fDnwV19GRXvQnCivitA84Wy6EJcwJirgs4MQBg4D3w1Rrwx4GcJEPYW2nDP93mv1xkchwAjMwFjhCbM",
  "key5": "3fGKQm8VWaWMvGJHtMQXdqpWd2TtJE7VtmfWT11dAtYv2H26vmCqyngsk89w7LUsfzQsx96DbkPXBHGeBK76qa1a",
  "key6": "4BHXVx8AycsvwDqQsoWgf9THgUvDH3qtFoopRiH9ffPesqCUGupbqzK1LV4TPLjeRo1CCaGXXMjVZBt3SooMmg8N",
  "key7": "Au3BMdZgbism2i44rFJdAHdk8WpbuVR6p7iLBmc2a9HXThkEDQvBHJguGbXzu6BH3f4GYFDtWzRBxqVgQNYB2pz",
  "key8": "5rjNTHXPm7cCairn9goToZ2bUdjheEFMptrgK2Qy1PyL6BNtf4chRw9mEUKYjPxz1tuBsuFft8m7MrX1JPyxexqT",
  "key9": "2Fd9Qwkzuh5E44FGEqEXgUgGa5fDdX9tERJp3B1mj2MRyoMYuJ7uiBaQbpYESpjCXieZEAVLZufg36k8TLyypfAX",
  "key10": "44u882gb193rLNQD5XqBtbgrtXbBzi8K5RzvzpzKWdatfSft1FSJ6yKRAfThRjoBiRL7gSsXv9H84ecdtUi5qXzv",
  "key11": "zo6NJnEAxJnCpdibqaCDB1NYGiNkaiwgsFMmX1vT2saJBXmqewFzV7yAR6GjAwrrXUzUYnuzvGsCABXYi1XkFjL",
  "key12": "4swhWQ1VhXM3qjtKF9MHpBSckgiy6CHjEEmWW3AnJGD8HW9uVvLTDwnS91ZowQj92A3sxrWXkrbXfg6int1dU58G",
  "key13": "3nawKnmVUurJiRyJrH6RFcsfu7sYHxMMA716CrC4xnyFT6ktQuPrAFhbuuXyPF34bbKZcuuDmGPUPE7dM5otoBc6",
  "key14": "2ehi7kVrEkdbtqQuHsMYPfvXXMDYKSuuuX5ugTXS9t3EZU5p9auZdb6PYQuJjfHnDzRdrPmkfzoTG4hB2PPiKDmo",
  "key15": "TwV1UbHm6LY8GWDWW1tJRJ4wPqkrV5VLTkVjktMCmgpX5CNq9bY2H6XrFBrAG8oGRXAdFLr1GcJvfFaQb586G7G",
  "key16": "4thaPbXmSrNefXkfXtWogH67Gsgv7mmYCpeQ7bvH3mzPwo4Ag1KFqZX96qKe9dNEoCNVqBbDkv18DnpybGWrqUEk",
  "key17": "399TavHBDAf7tKv4QEL8q5ue3ZrHf6jjk8asfnrvBQ8ohJQKWZT8N8mYNv9SGkueQ4rgCM554xH76z1e1PKf683H",
  "key18": "3xw4B4cfWtYHt2ugSYv7VUiCmFiLGpjtvHgbTsYt86zxTFDuUcgzibevAVDvUG3Lo1cfSNfTRrZi95cCb1UYuSL",
  "key19": "3XdLg6RvMBw9MKwti55QMxe6AwuPwuxxav7MCxCgjspJzk3YTtSWP1vHRjuKZsKQQGkUZRQosfTtqVxYhdXfVhAd",
  "key20": "2sejzr4JcDL6PKYkbQyKGnqaVgG8PdWuNZV3jJ8AFEYxX11hV25YsyZMNtP26pQE4RgMb3b96cfE3kU2KzJ2naM5",
  "key21": "3qmRKNVFEn8qLm3f1hKgAkvi92mjbu7wWnzRxLjJycaK1DPWTgsQLX1HDfBHxpAtyUgHFeYgKQXxZppwh9inorpm",
  "key22": "2e4TkHcquGFdaiEMrSgaULwfGWq88FoVbuo3HEBGKh8mWKd9KesRzkLqz5vjTBHJjBheW9YyQbSKUazmvzoYFE1S",
  "key23": "2ucYNAfvALjp8v6jzRMGMdDvugZ9hJRrN2wxwnDVYzQpshjyANasH33AURvvVmPQ8wpwM4j6XoSy3g6usBPvJDXZ",
  "key24": "vtXkhmF7AtFGYVUmtYnq1jbPvJfQhftChpHnuYfswGGaeGq6iUG9HyEeLigTAvszh1qvteT4g5SnmQ4USUaKatj",
  "key25": "4pLqf4jZszhJXguFCQZw822UV6XArgJ587AfTYKSJMnpU2URA2dCt3s5tkkdR8UNNK5iGCFGNzSgKrebo3Bmy9Ut",
  "key26": "3mariAEtgvwa641JQNwfpwTJHuxJgNAmuba19mjQXJWAUxBzLmyrtsViP6X5FVX7Qn1ZjryfStY1xMaRKR9CBPXY",
  "key27": "2sV4fEGmphfDeEvDH3rusxGjXLM3ass8qWTiAaofmSiGL49iTuz5FtppmYq5TL3gDCPsswrsZHs6nUnz5Czp3edP",
  "key28": "QGNCHfox6AthABnPuZcf6kfztc9FvbCu4fz2unvAaUbgtKPor1WwMUom4VGngkVqVQWjA6hN1B8Bu2BCa521kAw",
  "key29": "kadSVhvbfsNK3KSR728373R1W9LBo2qVkqBKMmrMEf5N6ngqVAjWeKG183ksNbgcwsm811yBVFH3a1W7VYFNmXN",
  "key30": "3wgtKUtey6L2j2yzHnerrZ9UquTuDMxsHhhtND2NjFenKC2JMjbQQmGB47YxeMGQivATpifgeBWzNJCPmvjiEDYb",
  "key31": "21dsWta2qdJ5ZyFVLFfMTftfwGzzhtCwxd7z6yetrpUYqwUKqzwZagzzY3xKa9CWhrdeE2RNAxyCuxsjUKvmxjXr",
  "key32": "aDoTNNfCvjTGChXRPKsJTXnMXMBKrWKGuYEz412jwd5xx2BMmmWJujBUVv56EUg8LsBPJJ8GH14f1FCV74YRPKG",
  "key33": "cC4D1Czbj8NfcAhqYjABWahwWYPLNZxnYhZXJghyKaFe7knqsZ8qWYdi1qwpUjZnKMp895KstDKk5sSiv3q5vzK",
  "key34": "3sYJmneRMvp2W4qmm9qhZWBBLt5QexHPHPwRC3meYB1wzTgLQwj2niieuwPN8vaRk4G2LS7s1vZFykw83xr3wtTB",
  "key35": "FiXSNJyTwBKvkNw6L5drT6hXt63z647Rx5oCNihe2MHFayM2t8uqec2Qz49re1T6nMxNgXSqReSdD34CAaPcLRD",
  "key36": "29ACuYYqY5b8uMZ589YJcFibySdX2mtAMAs7wki7Mxnnpnxu1cCMwG1ZZqGc6wD61vVwqhrxfAFmRkPto55msQJR",
  "key37": "3jNoKy1iGWuAVZ3HFSFJRH7BEaLxyMTWpjNYhaZA6mseWvoGz62uLVFc9hx2Hvr36F6CoL21DB8dGukURjFP5Joa",
  "key38": "E2u5cYNHS21985fzcV5zUDB4nrCYoF1KiECU2udpffsK32w7Na8YYrYcRWa9y1jFnDyKtqDBVnL5XCfNWbmEuHj",
  "key39": "65a8GEghgKMHvdZh2YEhBWWqrC49ZRkiQ3e5HvoMiicooVHAhVwDegpH1TEpJg9hHLftV9zwqK4DFuPT8nYXuWtr",
  "key40": "3YxoCQxedSb4H2bqdY2VV6fvfBLhXPW6Pm6JBdWwSGBT7TVCxiH9h9ARXfniris8N7S2sRDepJdVBfxHZvGZE61U",
  "key41": "hhhh1RUTkPBeVNWjvL4nBymrAR1N1W7oob6ZPDysN8uj6J1ZL3M7pVXK96Z3fEmqc3ioitq3mLRo4J64GwXdrcK",
  "key42": "3uodbj6aQzEkQTAjGAaaTqgWrjEnvi2WNes7UPB3FfyXJcPyianyLiUyiXeaQ2gJ8ema6zi9ASK9RsXihkV8Avds",
  "key43": "59pHwdAWQrpE4QggzBuo5VA4zx9wDieEFMPLLBhidJVcNPMVVRs9XTFZkF5tSmsGLF8xdQsR7zKB3KWyHFfdsZ54",
  "key44": "2mCMLJoHiunjE9gHHWev22bdksuz2PYeu5ucKwBQM12ddHRkrva9GFo5hAV4HuZWzU8qC9StNrpb9dampKEjVhxc",
  "key45": "5EJ7RKKNU1atYLMetrHkcAGAMmjuc9Brdto8wqWC2rRZLCrkf6UWAQhQa2bATmboUK7VhUGEwxZ57SwmeYusVDSX",
  "key46": "523YrWdxPShusFkaekZSgVv36UPWWUnkEQC9tBPbUVxvvHbuMk9jWdusMmT8c4cwPVGSt2ZHyjfRoynAmNwgBKhF",
  "key47": "5oTrgGqSoo739uvrSsgDa6oGaTMYTVwB953g6LMGnsRf9mVRMUNBtJLkLM9hEXCUKC2wjUyA8cbNYAda8oYAtsnK",
  "key48": "3VUyDqCiYqhaSrPiLu5pjbes7CM3XUsZksoWbLiCRo1YprPrwjtzWmsgf6YsDuYuqjFNihSjHFNAj2D9wH4KX9RA",
  "key49": "2SruUieGwe7MgqFyMYww7PeTEAYzMaermf4aNHoJVJXaNWp9Lzqtb5t6WywWxSXLXHZRkWk21STDG17STv4E4U16"
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
