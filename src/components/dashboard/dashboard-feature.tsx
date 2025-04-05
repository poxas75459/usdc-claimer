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
    "2YzSLs1iuCc2cV4GeZNoLrYghrW6SWbJGdHVAKgi4swBoBpPbo7thmVWw81DSsohdnNd3QgBNScU1jhx631acZwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2tHP7fbksK43TNyPeDSHjLMxB4Hysf523KhWUdQK2jrYAxdCX5EAJYZGr1y1T6AjcJFVWU8566GvFFEKZbyfmM",
  "key1": "21Wph6Bq21SiKunNrHEF4NYtpqLMHDZizrDXWPyYPYbNXt1nrA1mfgv3fRuitXMwZmrFgpFcfG2Qx85k2eHL1z4J",
  "key2": "iPmgKsk97skm3JXYAT9241Ur8cknh4cDtoiyzfTFgjvLznX7caZi2b411pRA9SskWzv17mhSR5ftmcUuKc8Cdo9",
  "key3": "4yhtrhhNYiL88Jbx76LzqvsG2rrAVE6o2gibUVriq1NXH577QAcRqyR2agA7N75FCxUERG4Srcfk7w2bgWhqWczD",
  "key4": "4qrGT8pbJBaJ8AuW7nir7yeRbquQT1oJqxSpnju42fWDWFKpzQk73R5yxwPgfS3yUJSijmuMN6zr31orsedju6Jz",
  "key5": "3ZaWJCiCy1Ny3TTu4dosfkL1VHBPf1Ao7iewfiJGzkinNCMrNppwMEZXCvS3QyF7UczvFvYeHxxjvuryijh4TGCb",
  "key6": "3EwaRT261di1uJQYH1kmpqVvnjKEpjr5GLKrdVPnK2qSxu4mhhBM4vexxZzQVWnfVs5SKFGRUAvuwvYuRYt7o27k",
  "key7": "41qxXuQVoEnptm1cmSDXdURhEaDXT9wtmi5QdxZCP4bVipNnri9qN7Fin9SgnVMxxFxjKeEGnVKKwU8KcgYQWpeE",
  "key8": "2nhQHQoXZxkRd29h4ZPptGnHMfn4UTkSyom8RWXPM1SoHmEoTh3Cqy9bxAyCctoKi1FMwuFmWmACiduZkf5DfS9v",
  "key9": "46141piLy45jDKQh4a8m7Uiy64jQGYmJdHdweRMxm76MeHtpJuoApHs7VSWseCk7v9142wRzDG95vy4BYr5yBsWo",
  "key10": "4o6ds4fQDtgcpQhUvke8z7NCQLVeJFb2ReYVGdx5xszQXtX1fYkKvDA3mxdF1kKpBkHrWvJmbcLt9Z3jDiVG8RYU",
  "key11": "2j6YTZMXuhVyqa73vKEhxEqCqQyNCR5H4Uck19ENnUNhu8NDB7ApJRzpVn99g8apEmR125BA61buGQEe7d1T44Zv",
  "key12": "2GPoZeAuwm5LgevC7yXSFyqUESb11eqHprsqq5Vfn2dqhn3T6FNFWyXpkWfmZakDtAE3UtdNuemYJ5djJ1bcKHCH",
  "key13": "4Q6qsttDuqK5fQjM3FY7Ze5DBGYt59vPUBtYxxjV27AunBTCumggQrHo6rDxSjyHJ6orQrxrVctPSgnB8xRJr5LY",
  "key14": "2F8Jnc9QdXnAk8Lu56L5eQzBaQcmBbxHM6kdDBEndPRvEG6AvLCQMGdKWPzhNC9ctMqD4LAp5dmCkrZUvjTwvKKR",
  "key15": "4u7sWwavES3JBi84B9TPVKqFG71iExdgxaohEaoJKqfr5QDSqF86yndY3W1urkE7BXdNcdijwiiYZBMvK64NwhuX",
  "key16": "4kDmp1e7rVHVtn19LZvZeGLxi4uwb1jhVtYXJ7eHgW7TvkvPSSmJAcVdF2L8DCxS6TroNNovbXPT4cub1to3Zs9Z",
  "key17": "EqrPG5Yg2AL9SmuC9xKYmaNagb6kFxc69dQcHn9sywSQddASaqDYJacNTWm4DnMhosntMCEjh3pexFDFEGvUSUB",
  "key18": "5SzDo2pCuLPWoCueiUspaEkeATLEHp1yj4y3VRyBEtfzfcbiag9FS4TkpUCeetqTY2s7Nu2zUemPAcJq4w1Dj3GF",
  "key19": "5UgHVfjCT4RbBWawCytGuMDdLgvUZmbKasgaiGP28VJ5nFzx6uSEGdUYd7HCXoBmJ7WKfUcdmVZKScZ4G5KMNXhJ",
  "key20": "2h6syi6bXZLNEL1wro632MdygKnosZw4HNAmUKA5cskC3HTxxbmmxKoVHn5L3SJf1npndH2cm686DQaf3YyrZFMz",
  "key21": "5WzHx9HNb2xJisw7XtwPAxtNPM4LHKXhYMEuTPD89YVaT5n5qHrHuNBtexihSX6WL7jjjWZ7rLafiFQJgukrhtxh",
  "key22": "2ddEsgJtfNMZn3Aj4g8hbso8jbiA7XXPw8hAxsJRAE267pxNQnrcgnwnHBQEDaRLAHGS5sG9pvbVFgsPzrRHWYae",
  "key23": "dcw3JvTmMsFXkYYhhnMEdYmbY6RrJtdBeuDnZaN1Xvp4VKn5Z3uU5xjALJTfiypbB7v5pZXQtewWT7NbHbRVt61",
  "key24": "5xjoptfv8dWvomNnpBgB75kR1jHALBcFm4rJpYquMV95YHHshNqGKC3MjLVvMBdh1RguykiHv1mcipV1cLwhSv88",
  "key25": "3aRh9x3mH2c9S1ya4hKP1jm2Xy9E64HTTaXcQh2V5ebrQiiQ8efCh9hWt7FzFXBXknCQ6vPhyvPRjDAh2qW4Udu8",
  "key26": "XYk1v5ToJgQMzDsuaTSh5vq7eTFbdVYMg5DrkFWtpHX4JqcJEw9dW6ZPAYxD4Bha1rDp8Uw8p3s6feGUDqLPJgj"
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
