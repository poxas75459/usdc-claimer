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
    "5g7WeGoX6akCyQSMUomYDWWHArphwGL6mpBLuB8gmLyiR127sa1j6EzjkLJRpiiFtVSxu3W1K9z6zKbhdW7LFebi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59vJAidNeFw2FUHEMBY46g39v5m3QdfXMkLF3fnxpffukiFWnsToDsEvuwvfsBJvLieerpZdsokr9b8kf2nSXM3p",
  "key1": "37jUKnuGV5pfzLGxbSi7efJYhwqACqytJYi82pMggr8KddMBXW7pYAMEKY5Ffyea6yToEEksAMaaiDD3i5pWNEsF",
  "key2": "4nP4jNgcUxGXY3fzf12sT6VzRh6wFX6dXDFoKAEwH9BsLHnmoGWjiBKbhiqQ89sqoAHSES7u5B7QDUrACePnsmiC",
  "key3": "2RKDjbKKRZGdJo8YU9u3D1WwFoGuM3gRL67zkGLi94tbCYpFJec9gL3DK3s9CAFjHSnLicqyTKLWzMLWLBWbAgXq",
  "key4": "92jJNBgNLRp9qSpc5LeLdBnbQugxKEY7chvZ2WnoB8oFFTp2DW2XumdaLgtGSzXX3JRWakA5i4Z3UwAF2FAm9up",
  "key5": "34QAvRzymDXwJRQQyhLjwZtBBFKTf2Z5US6Fx3jwxrnvTrXwB8pVJ6GGamFG1iB94nUV931HS4AiuGBQUneY6emn",
  "key6": "5J1RVWoHh7Kr41YNe4CPz3enLoFtVwaJYD2mofeLYkKAi39HrDTNvgu1S2kS22sNp98ZdzxYBFv9SnpobCST97XF",
  "key7": "4ozFa8niDFdXoQEJicpcVCCpZEFPCs6fzuoicDRW91xPRM1brP37Uyae9FiLJHTmfFdPci6E78mUMtcJTxriNNNj",
  "key8": "2pXyhZuxttmx5BZb5iLZdEKxerg9bYSWEQ469EBqA4A1bH4N5DFYW41j8imkYy4VBAdLdKPEDmYgwEyKZ98Gn8V1",
  "key9": "4ZGttcw7zdJtmYvepwpi5ML7AZR2Uo5mnHhUTd5ZSGm5oufbVPJ4BeQ2SxYy6rvk9wyq7Qihj9DyDefYKEkrvuZu",
  "key10": "2DvZF7tLyjc4YBthXBrmzYAx2gXP95zTUYymnCGyv744gZhp6ND9h8pMCPJQC68wr1PqKFSb7EY5LaWaP1pMPadH",
  "key11": "29f5PUWXbxo6NmsYFS7vfjPpgxs2PgERXt9N6gy7uNjTbQpivwwPRpqfHaqV7e3apw9ExWpDFg5AZzdjZ3voRQfV",
  "key12": "qPV6NtA4bpzJUgrSiuBS7Cd6XJgSB6rbjjjNDBPQtXovWBmnB39YQwe1LuPvFjNbxCTrkdHGkBSECpU53vskFkD",
  "key13": "5aGpy2RZdWbbUpzetwEUwTPu7o9icd9McDmB4ZddrKcX9ScHaQSNZDh1ejXxvUkWCQq6PeMsNTfz9j6LJqve3eqZ",
  "key14": "UEs7QJVH6QGy7DpKRJzeDUDw7eucK3YJe67XS5NgWgZSN9suGpHk6Ryuz8d9rJarntWfQbX3HTd1Dheqk1x4GkN",
  "key15": "5SmbCHkcTFHJDasUGp1B7i433jNropGiDErzm5BgU3hgPcRjyCF4xm4wc2wT1BQmjmRxahzkJZBHZKuKw5PMTAJ7",
  "key16": "2gNAm5hgHzVQ4tkHd7a8uAgHKLdp938XVtaosb7rw5onaGtmn3s8sayxNhqLZPhbYH77dtxzs3fYwMa4kMMHBcnh",
  "key17": "e5W2xBQdJYar5MJ9hKaS65YnHNL3wt38q8jBSJaQvzAxngWA31HB18j8euA4q45HhV7AnuFkzscjSuD6m22X4hE",
  "key18": "v3N4fF6xa8JgVBwjtAaxenv5ZnrMZnDmXamBgm5HVJ2PwLm3nvsZwxJczVVtV7WbPxdJZdjpVRb6cwVi8WT6P8v",
  "key19": "5UZaRWSNjxYryuo5pvvtXWNeXt5cYd5i29zJnrJtXtMjQKtJFLzGvkBKbBdPB7eXkZJkLEk49jPhnZxLJsQhDo7m",
  "key20": "39zuQUJda8zQnh5joAXawvKUoWqXMF5YtbRo8EyKbAD2arCv51bgEEWJVhCAxDj6VTTBgk1agxPHG2o1ZdxQNAdz",
  "key21": "KHgXEfpMr1FauWDXkBeVKHwkUczfgvsZAQCWnuLvGJs2dWBvXG28qQuyKxwMtcKq3C2QMgHKyUNW7Fra64kUysq",
  "key22": "4x2m89uQCCqShafR8AvpzUsH6vHxD1dK1pqn9WDjoPf5dsut4bzxDhUXJKg2BEKpv4EmRuE3Cvs9R8XLp6Lq5pnb",
  "key23": "668gRcM4AEm5XehT1FQgXf4uvPwFaD75nJ1m35BU77rVkwrKAZNiHsqbzgqB5QC42BjV8pHK6TpN4BmfEhXNtCqa",
  "key24": "UaNRkmHcc23Zz62rrAQq3T5qzfneFmH434VniPmAp7z6jK5YjV5bcfAcYe9LsqpFseU1Gr9et3gR5za7XBAmFbH",
  "key25": "3v6op9o9X96ER29T9juaxdb6Qhp6mR8ZBbnuqTJWB1cZ3QR6HXRThcuXyabWWkcQwhhK27CgxkdRHna8MC27mijj",
  "key26": "3a3RKvjDRgSLndMaRfKbVDgYoaFKcaD8SYdgqTSrY7Wrcd55UrrbdA89RmH46SBcEHVMw13Tuf4GqFzb9Eo29WLr",
  "key27": "5zEUcbSJh2WqCypiQf3a5aeGhDRjQDNsShcsCUa7yqppmw3hThKzfLAgeFL3tu1X6Cb4uFTJVLLZbiBKFB7zZ25o",
  "key28": "3MpwJkws1KKJqw6BpU9wRbmHAtYR8cyvab3bkVq3tCxZMmc9XF5yBF3F1KESb8HTovH6dXJxuyuJvXogwXGMFvKE",
  "key29": "4Bvk9W7s8RYX5ELZvpHEZEJrwyuiPpM1iBWukfp5jxzgemBFW1sM2moSSEdtw6pdRYsF7tXPGR94HCKKEAsbBtn9",
  "key30": "62fjx8F4rXsMV2TCztuzmx76ttybUJV82T17Wvuktuk6wce9NcrcHSha7z26qGs5KVjDKHYh4fFAgtKXyC5HChUy",
  "key31": "2xHLkupoAVtVGgrhtFPZXLqDPyDg15iCKqct2GdcDr1wcRnJd2oUXWi8nF8Ns3JU5HtWDfuccDyEoy8RWKGmSHbr",
  "key32": "5GgUu98RkvaYRr3nnUWrSgd3rXihaCpqHUM44PxtgiHKGavzf9NCdVcQCtLhn3X38DMc1gSCbw89HotWDXzRYNDq",
  "key33": "4XHae1FiDxH6ydgQWdou6x12oPtCpmXFcaxRmcKh2e7Fb8PhW9Ryty5FDngC1kcR9EFeGvYBuoqr1B37mfR85jH2"
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
