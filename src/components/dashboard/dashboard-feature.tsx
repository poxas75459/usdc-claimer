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
    "5XQov9Zr1j96q83ULAwRJwDJNm2qT4dUAQTirM5fmPKCJnrt1sahcHg9EqiqPH1rSAx3iCbxpEQrXJ1s8cjQVgmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDhf63gE2BeBBBTboDKA3x5Cs1L25FKDM51x81KegiJqdKzVquPCob9cU2aBmN5zFyDwtTLgCprin9AiW4iZFpS",
  "key1": "d8dQ7NUtHxTmLbb45Nkt77j5KmeRuGDXdi2KBcH5o9Br3fonhZb28QsDPEV9Yqb4kPQ1uUZFpQEnyUhU2vGEEY5",
  "key2": "4G7vpoBdq55Zf1PoL1EVo4htfqH7W9rEjNZferv7YbT5FYVxcwNhnXteR37FjDHWWzVCp41muf7148vgiKp9zMab",
  "key3": "22JXuh6iQjhGnAgqXvjqRBqyztj75sw7FwBaZ1bV6brKrob6pwhM7Qpp5eLi6BbHmPkho8ZCNgVo2CVoSKGHAnVF",
  "key4": "5CWTSAARYZ9N3rksEJuMF6UFWEi3ax1Bim6VwajZUXh3sDdUhRqZroTzZfS2AFycDTdEtUgfch5oRhWFQA4xDmkG",
  "key5": "5ZGTiezQ1WiNuAaLUsBP5X6XESUy92qAobx5XoYrJaWHdTXGyT4Btz426nxrm57dSS35gNJNWZz8br25NYCUaM94",
  "key6": "3nw8BKY2t9dKBUMnVFyJvCSSKkipknVtZ9D2YyMq2ammSrpnTPLH1DnYukRXPJFuaSu8TMPDx6a1btJtvcPq7A5R",
  "key7": "5fvF7QUMdX4X4jkqEdFs79v9aXnscmQQv4pNoLC2NXq7MTdZHxRigZWdH6xvt7M7ueQWU8vq9gnr7pGsxres7Abm",
  "key8": "2UV6PKcAw3TEDYhUoqTusyoESFqzLqHDYDVp3mdpVyAud5CvGq9pcYBVu55C6mSgmoCvHF3afd2cMaupzjAUngae",
  "key9": "hiNZfCiZfJvavzokejeHmj7DiDyM8oGhpg8jXh2nKt3gsAvVhhVwYoLCa8ZbuMHXsdHr5Vu2wXvkg9xqKCTutbY",
  "key10": "5wGLna32iNZ7mAChKg9ZtGGnDkxca8gsAW4hu63xcGmMvjFQUMWSFJBKjhwhR3jGxf7sDAV4Hxr61kh6nvFtwJbj",
  "key11": "5vder2dNUh85m44SQdPHoqq9br1ybeQRxC2cbM37rRGgzkEtiv5Tg2t8udF4dS9UjnFK2GqELG3H94UKt4H8vK6m",
  "key12": "2RkYUjaSCA46YpPhedMVFkhsTM734BsedzsDMf9tUtW7dFgbcs4fgmtWHwNSwr5uwcgnsrAi5NUxm51cogT6panv",
  "key13": "34G6cTjttTVsz4PBfQmkgyLEvH1WdmYDx2w741dzansCbA69H3e1krMJeqcLyZ7PiWnmRJtTiwb3NVLk7jvFUG8p",
  "key14": "3G7yBCJ5Af1JR8DJkcvDmC9Fg2FqQwSPzoZbvXZmysy7nbWkM8GxNpg5QB2L6Kd7Eu8Bdd5mrjqNrkkdVX3XTsUU",
  "key15": "3rvdCHGmYDe1HSQLyGntQoJonn67b6G5S2RQfMidE3W2EyWN3U9t5gvDxZ3PTojAGPhERsHFpM1ct6E3ZEPADfJ8",
  "key16": "53QG3x9SKU1JW6Nz2FigKgr9anHjAgHX6qiexGNK9w1jX5orbZWWRHjrLmUqmS93LFc4bxWMeHC8rzQfMCP1nrze",
  "key17": "666CUiZDXDWRe3WL41r5d7BBz5aj54xqvGafQXXsuFwLwVerrcTrHLXz97eqZBJrAb2nKUQSc4FfZZ94FhkKpRD9",
  "key18": "2FkztqfHXsdAb3jGgcfXGeCLpLnZ7pZLwKyPxnCYLH2eD74VxG1k6hHbN6UrQqWh522HT7bwDU7bsdYmCC6S8jzg",
  "key19": "3zhvqWcwhpxWteGwiVaKZZqGtxAb7H17wXXgbVri3WDMUoRxFqN5vFSrmzTy4e1NW4E3mR7cNpUTFnCdHZFjBrbD",
  "key20": "dSq9qVNcf2K5hivwdVXTVdAo7nrX18N7F817sx7QMY8JT1UXyahuS9uSVYcxpHYWVCUdVVwdkf4nrNCkVGa41Qr",
  "key21": "5riwWNk7JXYmGYDzqbe8SXWwUxqPonHcX1CkQ25ie5XZKD6bi2EbzasSd4pfcbmKnb1ezXAS1XaWYN3vehH7Gd1o",
  "key22": "43jQWBVckjBPGbVFcDa4wjbYF5aPqqLXajaNXownK87cKJiA5V2jayDY7nQsiYkm2djEXNHD8xbTNtrv9ddMXf9o",
  "key23": "5Ti9nQh4hRpwtduLjoACYBJ1vS5Xpj8h3CYgtzJJFJASakQAEt5PpgyRQ2R7h48euUehTr9YYjFHyrkDBZ3UXYid",
  "key24": "2T4X46Gw3zhYckrUEVLjygaTU87H1yTFxtrAcgypXYt6T5S6HuQwaQxnqkT93qUWsrzKMy5b5UCpYCbB4AQgrQbN",
  "key25": "qUBCdmjC7yY6Wjg94wqH59Hwz3NTzaJVwSBnd3ThQCaQxLLvVn532xbjAUC7KUPAKBxHZnmqyjJoSbW3sctsAzE",
  "key26": "3Mnrj2pNAx7jCxHPnFBaXBSnjgUQ718QZKHkh5i3YDCzWZe6cjd9uPb56V8UnXBDrxPM3SRrVdMCW71rC138yrKe",
  "key27": "57FZGK52H1faVKZtp7UZWRkjrMLDrMaTJA9NNcDJVoJWBuk8knGhskKfKftcTaAbsQSnjdf81gNLcC5VN9irzVXZ",
  "key28": "2N5Vn9SPYtFzBVazWG3uh3D71nbR2HTpCjCGSFUeGzAiaGmFs8KREweeT3dyPJM6wwhvLj3AA9T1nNmRmq8Ri3hL",
  "key29": "65eUgQEHcvPkiVDEvJHeMHUpGHt1n4Z39SEZ2K6DjRZVV75XPdfQjLypgz9cFSWQLpyP5MSwUZ1wkZrGXJwnNSRG",
  "key30": "4tb969d5JYRxJQq11h8RpVYga2AnopMC7rChL7dpte5br3uuCViLDjZqs1aeENujymYqLG81NwiYXizwFi5FEKif",
  "key31": "2viJHV49v8Y1QUG67Z8AU7Ub97d4TuLMh5u8FmbrSmpFVQtvCdeBMvbYyzkTX1tmuxYYH9pbTbtXcrfh9rkKgKaD",
  "key32": "6dkjCRQVFXo8PLLLXfsSAVBVftxmDstBTqQzaXakLyPgB8CX5wVY5og9HbpUBnA37hbrF7nFKyomLmk6q6bMK35",
  "key33": "x1J19bTVjvjHMfjzyyn3rMoxwSUqkhbPqRmAg7CqVsLGwgahc4GPixEK1jA212X62WC2MRnAMs6Uztpgr6NiFfd",
  "key34": "2zrqBx8jXykveCxytGpnQC89BBZxo1wpXaaXfLxnXK6uHCrtvBKaBSc87zpcvGY4gD5o7co5Pvkxxo225hg8ZiSr",
  "key35": "5xhzMpQdS7MGUcvLsGrKqZJEHWWYLJwavV9Jtf9pqAUXMBEqkqnaR2WwBVbSzscV3aL6zSriFuhggDaHUqezaWUh",
  "key36": "ygk94FTGDkMu3xCABRDDX3vb66W9uTTufew9v5PvuahUQxP5pR4gLVufvfzz3Wz6cAcwe5KCZVr41hyBJEqcKRP",
  "key37": "42sEdgFvL3FCsezVTpF1vK1ZeEUpaM18VVdVSY1eMPrfKFkpwwDhDBpdxqvzfiAGy6C6aBQoM4VgmuugWjPto7ML"
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
