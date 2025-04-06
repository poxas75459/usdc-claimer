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
    "51cWZmcumWchNiMb9d7yaHkhunSRg1KSC4CHEmKYuaTHEPas1h35bQrk2swua923kL58r29byfbPJ39xJyaq6BP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzFLnJaGJ5gCqSyveWfxEERCuj9ymRZTK9aA9689JENLM84KpbGEDZmoAceoHs4BZqHZ62TU3dnyfHX3Lo7B6Bw",
  "key1": "44A8WmYzrUeYheYTcjdtAyPmTTnLCHsZhvqSchRq5SiPBRLSrE235JakjqRB6AXJ9VbVW1giRea5peGMEkE2Fpt1",
  "key2": "2gpUWTi2EHsAekmaYFoLNVZrLe98bRCFvaLfCUAYVck2uJAAVRr6jWRJ6RarhdRmMjpduLUEyLZS5SF3hB8zDiaL",
  "key3": "3vFJT4zjgihekt8QUkFT6HC1oc7rFvJj1EcigKYBqL44xUZEXFXvqnQfCQJfuC4SLgmzerC3MvwmhR4RhWnukUQc",
  "key4": "3u5Tbu77feHU8wQips1TVzu7LUr4XztrTkKAoEsfwahu49XVS2WTEHFJm7zYS73QHoZnsuJr6YXWn9cNj2jvEMn7",
  "key5": "3YEsMEkDCqpLSabtdFuCfJz3tmHP29dr1cxF6c5HBKYDm9JDAYvjTe8EtFBZXRrWCU4wQPASPDMkjdZz5zKvF16x",
  "key6": "3vimqEo5cf7vTyrTnkg1ACpQgbGGp1ETL5s1ege99VhgAvsn56fV6iafpbumDNgHANsqeX2wW1TxSnkWCQLgAcp3",
  "key7": "3co7VVoX4WG29t5LNc3Fj2spojBtzYgygyJRJ3QvDVRLcffb3jzGXvwoezpFwvpVC1Avks8TfasiYXovDoHViyvF",
  "key8": "31Fi6wr5fitVeShtC6LbjSKF7oXd63M9PQWnyZqU49Z6MYj9yrnmkrR61Qr8v1p2optz7CBvkjWM9gBL6YR9Nc1Q",
  "key9": "tH8ZdREw6s3F9bHPgiDb2fQ6bhhM561bsoxzDdSnQBUfLvubNwYLhyb2gEzCzSWDLCUCAHY57VDP5YFNxHzYKgr",
  "key10": "MxoddZ9ELBzaPg1BT9A1WTa7JLqj8ayxUHapkHdyiM6PSP9cnP2AwKmS49gFgUmVwpW3yLCqSBSxzxUS7gyiHdV",
  "key11": "4kQZ7L9R7KRtUCoVBZyJb4CrqVJ8tiWeBJsS6haYqr5mqtMUTwY2pB3WuTdyjZDD5D7FGu66NUQxCzQTPSVKmkV9",
  "key12": "5yBdQ2B8Qry7UxEuMAPTGCAcu3gyaGr8iLDFjiwp8u9EbkRG5anEYcKt9YE5QNKbmgXobW6Yb5RViVj2pPATPCvH",
  "key13": "56AbYBALfxK7XuCraQmVVuuNdnD3MRgEvQaytEjqh8Nb5y2SiEtA2wKfaZnGBkCoMGYHgMNkqzErjHGgkygaytqk",
  "key14": "3xbCemMPxAE5TQuGrLXeBHtRN3QuRg4Em9umPBYgeXcUb4gFdqaBmFk4exYX3kU7ePDi1eCzShmgbSoFGuGqzdEG",
  "key15": "3aZkXcbiWh3c1tUX7mHe99mvAxaLCN7yLTr4poZ6LYj1KBYbcJat66qonU7TkEbW7WPitfahV4hXR7kE7WDMmMGV",
  "key16": "2Z67UuU1yoGFB1WtzML4Pv6WkUgRHTNzDR9FXjDAtp2vzwgfD8ZDHnbLYm3yyGE486dEWey5yfT9ZPuxsUVRyhvX",
  "key17": "23fk5HxvW1GqpJhAeLDogFuXjNnspsxKM39MYuRUwaYhmUSYTkzUCdp1VaMhMywPw3UJ9LpBBZkiLhhFSDsq6qYP",
  "key18": "2aDmEvMSCmt3VeR3GL9gAhkA4fG885cwe93B3dAoV1DQ8F8qG6CBoHjZwsDyQUHTSerdtbvjwbtUgVHsvqC8rHSo",
  "key19": "45LoXvQach76SRhrGjvoAWtiAXFy7cULjHFonUt8EVadpwxH8vhPtavFJLP55aXsppshvJJ6XtStFBruXgMxUyu8",
  "key20": "4nUctPdUQHwmYD54Qz1HvhGN63LKcv83ar8zzwkjJyD2cg3uTzMW6FbdfnCDkhdux6uFZLDXq5BNHT4Fharjk5tH",
  "key21": "2ZhMkhFzZaja2jN3H2MTfyZFvJ18hWVMW9snEFriaxw4bcGAak2HfDhoe8GKNCtnXzKD2tEmdaNEkrTUe6XJKUt1",
  "key22": "3JXN2E1urFQmfgYU5oYj8fuUhBZadoKU6tx8q4nzdN2aCujf1E7CwYg8cKLaH3b8ae2bxd7M4qekF1TySXDfrz1s",
  "key23": "5MhZxo2Mh3rjCMxAvSTRPgSmNymVkvzCSwFrA6qJVo2uYmgR693fR8wpWVe8DGEuuSBZHVamvgU9jcztXKUrzqh8",
  "key24": "5iL133xxPvfTLcMRf8pDAn8tw5optZf88fzgZA5eFHL7Yo5iDe6upnoT8GU4paaKNVk9TiedrxqdyNnMkMZ6CnGZ",
  "key25": "46XGR8nPZffGfhNpQEvp2Pv7iKvFJwGBWR8q8u4s5YhU6Si4vkgkPuw2HUrtWHhtJxEksfx1pbYtcpCchZXiQ9HY",
  "key26": "2x4RwY87L6L96g4LDM7LqhNjb82k69chFDvFqK4aCJ9uY1jotGin2BXmJCfEQhmeL2AdCLt1X3obHhiEr642by2Y",
  "key27": "4QYbQ8LudLU4sVdN7fvHKXse98EEruoe5DyjVGjn6M4EHLK8GFDKaYcRBf8gag4pzgzQYd1YfnPVXkrvvZAB1G36",
  "key28": "5gsmB6iiv6RVnma7roxEY985KuQU6R6hYQ9ZB2972HmHmEoTqhL9JwviJZ6g6eei12u8H9ukUUHRtr6hzJno4Tps",
  "key29": "57ndbRnU7d6TE29cp9oieMhvCJ5fNZ2inAtqtQpyGrgUuji4RkPoCCH19YUm5anpyfYAx7ERQ211fQaCGLamp8SX",
  "key30": "4cHqA5wUpMs6wrUSw3LrsRrQfKwqrTnUQqkLzYX8dg3pjA4QPfHz3Mxf5jpgFVDyt3t4TtESM9TVZP6FJzv1W8f1",
  "key31": "3NibnURoqZbAfVHKfyXqbws1BxuBFj6BMS7DRPQueqjwH5LEfRP5xYt1hkdybjjhCPDpnMBojz6tMnksMcg4j8dp",
  "key32": "2Sm8QJjWkxiTPmqRyGJfW1v3K7nDAYJT8q2REZAjUDA23rP5ycMxTFUgUd8UKzio7haqBvX8Vg3YwYq9Df3ZtsH2",
  "key33": "5UKwJ7ojJGFruuKJdhW483CJPpAeKbznhCBjDzaZG7Vb4JgFS3xEPqBjznm54pgynDKBH9qSZbgyrfpK2GoRmj6S",
  "key34": "5drxM9C63VebZ2tMYFCP9qdRffYXpgzxYnf63v7xDms83dniESFfZiQEupaviPW7DqLLa2UUkH6Zz46Rdoh6c7pt",
  "key35": "3G9KP8mF3Unq8FMdWUBsJUuzA7t1Rsx3DoUbxJMJi4E6L5Jqfuw49bdUMyWQyui2XhfTdQVTj7VzoN25QxufHUBz",
  "key36": "36tvJmAiEp2b9CYbzAZo7prix8Cc5TNZPv9wUiNQAmguDQbA6xvZ7tAMu6BSKFjWUrHYyjH7SNw17gfxAbPCHZeU",
  "key37": "4Q4Bgvd2LWhZvoWFGfDA2FJwPQe5R9tFk2FyyeERYjGZ9yj3TShkYdxHfcYJvQkqWwnf46iSyJiFyfUERiMysC3s",
  "key38": "4N8M8cajY7HskysYQamU6jX8ZR1SGvAueuQcSmTgLJjCF3uCVftPTueaUpgp7KotRfwrFJVbQqHnWtfu4v42UAhU",
  "key39": "54Wce3hfHX3kTg3aaxWyn3H3dKvpxk7eoXXsbdB38BHYRiThuKzBH9gFoWJbm1psoKLsFLecTZrDdeNY9cUobe93",
  "key40": "s9PUiH8kwZ5YV7999YA1p68btgfmShJoFTCvvvCVcVmPVptAn28nY4H5oW5PpPmf1zRXkD5gq7Fz5FDF49hs5DJ",
  "key41": "4SSn2bvSzBHpmZTPejFrQh4oKmgFTK3WUgzQMTEDVNsVY385BPb1ZKZZxTGFZ7u2E5hsru6MLrWwTDdxnTK6gaxE",
  "key42": "2gYtgFMt3aR3LELejQRzd1qrR8YTf6ECebWGm7RSNCTQrUroBYd99dY1326VyZRss4VqrR2JX5dAEm9DqQLZatvi",
  "key43": "5zmwRT9DPbPHq7eKXo7Bo111frVLP1e1a3nnEThjKoiWfADjY9vztpxw19HHkL2XeeNxKWNQMtkcdVivhH2jXYFz",
  "key44": "5eFQpZTDGDR7Qrp51wvN2hiTRTWVAGccg9remze2bv8wRQ9aXNoRve9gL2UbNmLR9n9RUhDGwPdSgR9gCp2vPVZm",
  "key45": "2MMBKEMPwcEguLkAGjHEHQt8CYvUYpsqoGWobqW5JGckSNtdvQjqfvAvpxG2ija178EbBXKsetVYMNH7CsYDQLav"
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
