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
    "GHekBH1ZYVTGPkYrfYdnA74We9ofUnnnwaGxcxKyvSfDHKF1mrBYE76XnLj2eEjigqX95QtBv3UWdbgPRQ2qUge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8cMjA3PEFTWc9xqbuy1HjcithUFfcNFxK88q5JxaxkAzHoQYjaZj4TLCYRgsGqiRcvZmQWZyqHrbEAYQ3vaQ3N",
  "key1": "3wKg85vFuuCaSvwC34Wxp5cUimsZDks4sSFdCtJjWkF7jsZaKWq62tySsRRdhLkJAPC3xM3Nhcs9WtjnYQeynEir",
  "key2": "5FV59QFwJHnHtjKfZQi92ainMkbZJeiwrXXocixGrVWXgaxeBpPPrkFaDtBkHwMwMr4cbFeiyYhg7woxaQNyhomA",
  "key3": "4MDLB5CAjtLjnCEUiGRGsfNMrKFtb1YR8Uji47tJVQQEppaziAhzsJQUZTuKkH6pTYLMjXWZVfYL18YRvwX7jVxW",
  "key4": "3Uifb1DoUJrtbdVt4ZhouYk859A9p4MdSh49DFCiqTDCPKKJ7LuTChqvrTaEQH1SN1BssgvgpoCgUxg2Pq47zFSY",
  "key5": "5wWc4ELysApwiHcf29fNdMGrtvwXpJJgFJsF8brHRmJd8m8cJdLrWxuE9ysQ97qff294LSULbwP7KXNr9Frbi171",
  "key6": "5St2iewi5vhGamUyaJVJmcrx3GayaFnZJvpnLAoZqJSESKUQ3jgxpTKTzoqR7WTgEopsQnmDRYoXX2mGdy3VG7Je",
  "key7": "5JEJPQ7eF4ePBEBmzT7wwbbCWP8tmQfeJ6a8q6k4uw8MzDZTcfb5VsiNyGtDokAtvrbJCivTd1BgMvW49U2EhKTp",
  "key8": "a9EnpxLNT74dXmZWpi6W7rCRETHa2funXwq7Mv1EW548e7c5pLRzr25QJrE7kQKWQGDKC7wiG4eunjqmR9BZRzm",
  "key9": "3B81C2sV6tk9gq6f4ueW2nj58rtnW5KVQLrc7GxJWQ4jhNUDLongiLvLSRsPXLETLkmnSpfUNWG6njb1bTMGT9hM",
  "key10": "4DbmDK3LLXTT4KFHBS8q32Vba5wAUmbDLGCtt6CF32qRwkKTjBqt5Z8AD78mmHENop5R9WGZr6HGyLDP4Eg7vxbN",
  "key11": "jT2betXfYrcpysiN9nQc9C1bFdJMxdFjMam2Wxr9TEWCFvWHh2a6JjqmSY6G3DMq9HFVbuu76FrYRjgyo3bB4Pm",
  "key12": "2Stzpt5GgCjKhWWBSZM8MxLCm4kAx1dqgY6ck38exjazXDNZQeqB6kLx6awuf7PJELu7dmcZXPzzxneY5LKNbEtA",
  "key13": "43uEQJ38nQrBRC82be1L7VRLxwrb541aq2QSQpScG6Eb8kXXHNDfGuhZrtNLngiqanXfvM8wQMZD1krzDJyZx9sm",
  "key14": "2vs2apwwk64vLdEk9dcxCAbKWS1KK4rLv5YmBezCovioM8etooKRbjqjQHQMUuGkVm7vhcKhDaWdv4EKNZPXtoWd",
  "key15": "49tTfNLNqboeLzyYJMA7ZkyyGhEVSn51rxLt16aUqr1zDsuPv7t3RP3db48MJ6DyLfFhJmMqQ7u1KbZhXarUdgH2",
  "key16": "3ihrquGoHDsZLQLRMhyH3VsLALfGvCRhXtCxhc8KQrU7bCfPj6kkM255RjsjfvrXihJLrhECcfAnNZBQDXppczBZ",
  "key17": "2Yik4zve8e8Xj2DNhfTjvEG5ELuKUcoauuT68g9XPrz1AJZPLzZVSwCkekBecUD2RsN6VqcPRmgu1FteiXbgWhGL",
  "key18": "56ND5uE42nfj9JSWkk4voJ2fpSwn4YTKUJ8HHtWQhVJ9snWz8hYoytyDZAwCptBRRLcwrR7k67k4af5GmDCZuDqT",
  "key19": "Kwa1asvhMigCEddKALLoY2VuQcB8X9sdSuLJaYj6zB7PNVRrMhsB6RT1cpz4knsYoa5sNjDfqphzdZnQQBZ6MtC",
  "key20": "4VQnNSskZLgFf1GexfzBFEZSwJVzTt8tQiQ8tbZxoj4Zsng1QzrLWXbzn9CMqZujcN7NtJCawhXTQsHvJdpYDDsy",
  "key21": "oP2bnWXsK7Xg4gv4whoCyjpMrgfTyGagu9v8AmRYQq1JaBPKT6PSPux23vgnLnqdUdv42NidoggHmj5cLJv9YdE",
  "key22": "3zvBGRsKgG24JjGnsJDG8ytEE3sbA1CWjqxaRExNDD5ZSjShRXC9z5p4mDFimK9BSUkSVaegXFQNKH3BjVizFJMP",
  "key23": "t2Rjpe6noperwEtaVPJq1HXAEoFU1r2BFQHPNrPCoEjLxbKvZPg3uBPxGWtMGFXqQn58rwUhWxkXdH5gAAa8b1H",
  "key24": "QnWz75SsX3ssALyjLYQWCEtYMvUc84jiHr6N4gHEFVt4hbwYj1NavjyTiMvt1WVpPTJwCSXYb6QnNpQgspuRika",
  "key25": "32K6H3YnfGUVMmgoUtSCG9yNkvfJGorNERti9sYETeDYvBPokrkq9hy8suZYTLHnZRdLD2LG4xaHMsRZCUjSRSUA",
  "key26": "3uEK67XFDVRaWqG43V3j1R8XgxaRb3JyfK8GmsieUXja4sPHaigwgSUNZ6oHPkQNMEnKrnrDMhAgT1cY47VCvycw",
  "key27": "M2HjoLEkw1v69k2FFMfZvTxhNPiV166tZ7x348bB2Xxwzf4PBvxbcTWvEmcn7YxPDqkboLwE5BKR4eLQrb1bz2Z",
  "key28": "62mAWQ8GUg2k97ua1pQLtCZzDLGUq4fLn69b5sKqSCiwaFP7B6WxfX9LJzV1GXH9TumkdETiABESpPLHHmLLuvM8",
  "key29": "pbefMAQp2fivkjoPQCvLwYjko9trKVsXhdH7vK7eJvGunp7nZueZ4SK1sUrScx7tQ5MWCUVunZJxVzzHHdPcgkw",
  "key30": "3h4ihPfUNNXtFBatqdQs4jTW9JvJXMiVrpYZrGVfBt7pV2uNQ1FNupqmLYW2pFwVcm7v9XKxsJaZGtFwurDNZKno",
  "key31": "378ZK4owLRHDTRdfrryGJnhhiGqKjVx32namxkEgSrdZP8tXttBfhcovGNPJ2j3LqC9BpM83akiNgYpozZy6X33C",
  "key32": "4eg3cJYPJKJHhgaNuhchg2hkaH9TAuMDo1VojRr3QTsFuUcUU9UVzGjvN8weXu6FZws9kE1L28NasxXRTANZT67F",
  "key33": "kJLxxpxpE4fveaWJ4xADQPKhWbXP5FdkAjvecZAAEs1XjDLXc75g4xUjerQjbBDYTehMiZAKFPojQPofoiB5BoQ",
  "key34": "4MrSbUZyXXGZV2oqEmCpNTFozE9DViGkSk5mhqXbFQzLuFiLyCY2MmLEz8uSuYPFbvEbUexR4fixDEsrso769kKP",
  "key35": "4eH6xyvA4NbcMVCaQ9UpM7G5rUjW5VnuicAtdyZCqfSTghwt7UV4L1Mq25KWX5cp2bAuVUaBneCpgAiZ4uX8bFR7",
  "key36": "4SBKG5m1EodCUKxuv5VpBVfrYhyNJ5NWBocnx1KD5KAzFFKsjNGbq8yywEdXadJVm4yLPg8DQ91i9abg3xnjykPh",
  "key37": "2J4Db6KeFzJokWcWCjdSBjmV3rrKg13j2mAs6kiAP6FGj19PURhd9FPdCUyyfqAppLanbRk5j3TvotLPdK54Ljfc",
  "key38": "3yPspM4W97BeaUZshfccSd5LmMfQDWA4WxpH6RzFHv1jMELGyQrgWSbU3L8in2AmeNPY7ja3XfdhErPtHxf1jEJ5",
  "key39": "2vhL1CzJ7WucLSKQk4V8ZFMteeSZmobY2Y4VTfuaj6cQYV5q3GtQq6mkGv6QxEMoHKzfYbFYZZhAWTTmshoWeLzL",
  "key40": "3jcSH8wGNmAjzthCtaQo2obuPA2Vt4f79akUgLLN3AVJUx7Xkje9rcMwRbCKR1TuoGM3gN6dg2TNs6kbMisTV9AZ",
  "key41": "66MmfaEdSgYHsQjLdWGi7rEJa19M46aiYoFAuM54j9RaRQsprPcG3ToSF3SpuV9KXVydhf2J9KDRLyFsDfYwVNDo"
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
