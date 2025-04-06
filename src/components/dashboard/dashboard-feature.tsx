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
    "3HUoDTzP3Q2Jki1YsVeLFW887k4d2hC2PRXhGK6rDAFyizRQnVBiEhTzgsWgxKKjeeYLLnG76KVjna2icoTozQoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGsbXmspxJsmuarpysR3jigUMGvjETGjz4Yfxs4uewAeN7HitfvzTrPeMAVHuDRaDcrYjPLfVb3eXUTBpDyugM3",
  "key1": "4TQtf9tNbGXEJi2EXZvDK8HMHtakFPkwxm8JSzoz36dyvmjjLsiXiH1P8ET4NLoWTx8xYAQZAEZE4Y73mHydnzBs",
  "key2": "2y7dXK1wsme25ZiJgX5REV34E2mYqXgME6ST6qqXkbZhViTQ28N4441yy4bDLNsRg7TeXBvc4XrsFeWirrPUfn2e",
  "key3": "vRMyEt4QbsfkDuoMAHcdUE7viVN47NnMoUmDCjGrA1aoPsfjRQUiarnPXCyhAGei3gZEEcfbhYMvRHsZTGBmaqT",
  "key4": "3PVGrFWTMvRmme768ncc6s7KYunChdWpvH9AnrP1XmxC7xm56BmSWQ2dJHm4nDeWGeVygt65HfXfVm6AjgybJNKN",
  "key5": "3krMFGEQCDprmJskA8ZjGwn14aBvX5sSe1UYfTsXtYGJAvQ5pHqhSKPaHMfo22k1N7D8c2HvxDaCxLEEmuRC6cVT",
  "key6": "3X5j7wkYbcyfTwaaepCVCKe8nLKNwAHeBjMUgBkWbDPQGsWn7wCVTp7HWxrXm1HFvQwk5B2QRJ5Ah5a3cSaVZtf9",
  "key7": "2FvT3H111vjRJ2jVWsPNnqKrPcwkVTNB53gBcM5gPqtRAGJPRStNjY8Frkct74GauESwyW6aFkSDQZ1vZ5MZi91q",
  "key8": "2NoWhJPgwnJhYeHWRwBxRFZRNT7kE3PB6CgcyATkFwHjv5TTAybirGJrRYQkw48JqCEMyyb8b8Sqwg58ic8FKR2w",
  "key9": "3LNLpLmTiQvkFPgb3VghcyPuFnQszxc2HAfwF8TChHh14DwVYfZ6R7A1mD3ZK6JC7ArvexQWeozkRPHwfsCstJ81",
  "key10": "cefSCf657iK94qPNPC261ndWsWDQBh1VdaxRwtauCBZT47KoccyR61F4VxFN3qpSoLHRiMtu1nfbrpR5bbtpFq7",
  "key11": "3ot7vL7UBJNH9kAz7p8RXE5w9dRBFvGJpgv1mDnetRPvYGfojRsmghyGLyXpEwBTmb5i5QKii4aZGB6t2FNxJECo",
  "key12": "4u74yGo12mvr3vPtzA3WEPS8GT69ad34udRkCwY8dpDU2mp3pz2JG17x3M1SYbEHMfP5cdoJcadjzVkZB39SREiU",
  "key13": "4Pa3cm2MUfTGZFNysanCNUswdd4vyyts7j7VKfNBhm8ZHqCZQf9846wNdmLFFipLTwUAthZ58B1KG2Vtb17NVQdy",
  "key14": "3demFY61bLD1SVwwgarxu1McnPhwn8yASysWKWL3jhFsY3KaFLCEiMM2QA2Fuw87dQdPJ1dWvsSo6Y7t2S29g8U7",
  "key15": "5aNHEA2h2ieobifvRV21xRzyaph9ugsS1i6d2kodDVxuLjqx92hLXQjgqbVQaDkjCaSyZkrdEQLDemxMTZ98tmbv",
  "key16": "2E9NtBhPw7qT4Rw4usQZe1a8hVjRYavcL2cW7JtAwf45Zx7JcbXmayQqtWiBGAVYjFPQNJrS4B6MkrzYjQDMawLz",
  "key17": "4y35KmjjgRRHyHPXkuDNQRHf99r1wsbAp4BRKJbZMAjwN541pVPD1k8temaxDj8GgE5sYyVBKdUnSSNXcT8jo656",
  "key18": "2i6BPoreNRrrWUM24PTybiDBWNedr49eX57zRrN9FeKjCEU3b5S9Ut3BJDb5jbwQQKG8URwi1EUqSNLcoigY1iAw",
  "key19": "5ycPiPvFyqNfKH1Dfqo1zqmpvFaEoEQfWDFTVnMebPRX9zZ2rkJJU1o2YiAut9KEtk9rd7D8REAhgPWzzpesop3r",
  "key20": "Uf4hZrm73jRDApY1cUnzkj45VVN3X3ExSsSNEe9oyfBybV2YZxhr2495dxejDwK2eGfcGqxUwW5S6gFfJfdkCyJ",
  "key21": "4b8mCiPihwRQJnAHJ8iciD4X8uBSKdbQg8zmkbNAPDjXGawYYb9GFc2Exf6LNnVthk3uzWTMBgufRYg5gjZ6QAaP",
  "key22": "3bUZKaT6oQ6CaLKbhnLmvubRpfyyD9fqEMCYLdQFNxhAo4cqaAfcfHYCUKaiB54zf1pfyScKkyjXiJckwC55bfrN",
  "key23": "5tiYHbe5Cm58EUNUsgSV2oosWVTPXpQrGbe8Z6uBcUyJRjsBNcJT1Pmfy3Fgumm9Kyn6Xw1TACXnmU6kkrY642mQ",
  "key24": "t4igmZdGYiTan63FR6xnVbXhLNgWSrQWSh2vuB9uEQ5L7G8kcb9HapbZR6x3TZPrAVVCzd48hXwTgFzFYeU3b7Y",
  "key25": "5dj7ZftBcstvHtftdkFnkirJkmhk1X6SS1kQX4TT6SQpr5HGkCCNLNPrTR2dAdjGxKgoUN5jkq7wV1euu65T7N9Q",
  "key26": "5Zuy2ahmpgb5kfS3U6vhpqLLuamEmhMYZ1cGCheSA5FCTkChZjeqQNeMkpZvEeh5Ew8GFawJuGpm4f4mnTbxZo9n",
  "key27": "kBrRp95qqPEJ3qpoQSVgMtrzzcVPBkRwiZqTPcbaGRFowBff8PDf47hPgu5wxjx46uZxouP3CFxjBJksBZLxy7e",
  "key28": "9qJF4YGwV4SSAtApQZcgWdp6NFNSkbgpxqt6gvv8ZKt2T5awQCX864gWL5xRBdYdMm5rxJGUMPNCDCiVrwoEj1R",
  "key29": "3ZgoBkQFt1CZPALfK6TzfiYV4VBhLafm2EfCQcZR29TCkBc1Chu7nwEqbfzV4Cx8kdwi7miwRcJhJR1kCp6CdPvc",
  "key30": "5mJ2wJJU3Z4XjUD1EdfjH3te1u9puZipG4w2PEjNCjNQVjNCMSdT74TMitg4rZPC51C19ERjW5DN3sPucdxd4Gee",
  "key31": "2p9xhAsjuXZcVyLGLhLdxiEXwo7oL4zmHdVWm8MTpG7KJJYC16DWi37xkwszmjSZKj58VDnhpeRBpyv83a9HYZFv",
  "key32": "3cmD9kw81QgQ8eqRUL7se8Nb9j5ovPEwGA33YMGbqMs2zzF11acdCNPeTrt56HECcbFJH2oXFEqojbf3vT8WRnqh",
  "key33": "5uUWFVFwtKFHP158MHuDHe7rPg1CpLJYWkMf7Ya9MoTdFWSafX89Tw3sb5R3B6q8NoMNEhVr4neABEmqLRuzUQqe",
  "key34": "2bkbq6g3WYsnkWxCTZEYp2mgeNVsoKstAnszWbxYv8bBzAE2d2otK77eBBnK3KmKKbitxf3aFkMW3NnX31ARWgpX",
  "key35": "3Z46otFaWzhnETGTzgwsgvsrQmuc4ckzCPSYK6mUztsFVpGyWAZRS9UnKkEwwzLTSgxpXy9SN2E3kzB6WRWoNcRa",
  "key36": "3oMbk5XCacaWLxPUMgH15bTh4HjtZahRsBqx8yagFtJ3Wxe3y8Ap8Q6yS3uBXGvbHB5vgWeT9RD1DS9eREMgDVex",
  "key37": "5gE6m7YL4PpjtJZteUSnCgSd9fVbMqq3R8viHVqajLzWhqLALGNmRRJpd2siRyPhJyQpQHbscbMDQPQUrQBME2pK",
  "key38": "3mYCeYhPQgJX9tv2SFt21pbC33yeDgx4qCYvf7tCEhXv71sP28xcHvbwcHfyGymBJetqAbAx14aruh5ZpeyB79GB",
  "key39": "45DDPHtoEZsd6cacs4o88MohXyX7pxuasGy4j1tDiXzS5GHCN2NcdNgu26gxN8WUjWUikmsjUmHfKpT37TsXL6TF",
  "key40": "LKpJ7qGa75TePaQHv4jYKyZiTA9PTgcjGyHSBqwWXHzTZvvKCoiGEjkNniz9yCv8cibugRLUTWVCQkRf2MAP2pF",
  "key41": "5YCxRJzcwMtwMseUvyTZEE5mpaUNgqX5jTuj2fLq7vYPa8WPLKjM2BkTWtaHFayb3JtLqHvQwMyZFvWKVovCBt7r"
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
