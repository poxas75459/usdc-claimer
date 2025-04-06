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
    "2ZTQnCFGUu9MH5Knw6Bw5yRk5Q1kQwViaskUk3E3QzpZvrXfqyurwjMCZwWzFmYKUVu1LqXj5WtbHrpxW8BmeLxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kr6D2gyouFkXqjcBiyUnjPpFMc5HrZpRcBaGThzEFVS92tXhbk17XZN29FhG1uWWJPT35a8hNN7w4w8uKXsfoWN",
  "key1": "4L5TSms7sDHGKoqFNzs4Jjx2rvvKmz5T3xbZWVSFHiRicKorVanS1Z8W7UaLEJFHhguZER6xgJ2j8rujCYw2j752",
  "key2": "5LKvQqy5HxmoS13rSGE5zQmuZSZjfCFFD4cHgEuzzj2XdGZSicJ6fQuFR2LBPZEsGDLfDGZpddJ6fuetUbFrAUev",
  "key3": "49BdAxUiZ9LNyBwrHd15A61mKq65h6bY22WKftA3FTXQnyJYhrxReccT6wBukkfk9kbNvXtY6NLq8DTs3ZKgMMfn",
  "key4": "2CKGMkoE7cZE38SMk733U7kGmJ4h6WvDRHrrdPKHJDz1KG5BCCn4znCcU1MoekZkMH8qXHtMz5GA7QBjND727ynn",
  "key5": "5UvW1vHnnhU92gkjYowzm9qnaXzCchm73b9vrXWrpHMeRaLVg2feX3FxGZMUV1qmvL9sBpocvdiQVhzq9qVMCHCW",
  "key6": "4qF3eZeyM7vJVUTnDJU5KRjc1rkohMbRemiVRigsVnNkMrxfwUqTQKhAfuDBfxqRUUQ6NGtN6G8XKBwY9ahVN7KT",
  "key7": "2H5eN7HUQWa4iSQggnNhjfeAudbq3T4z5N3LtGJv76YTtGf35SpqNn3Szbac6Sw5MtGJgvNzZGm3ARR2R7cxnwzY",
  "key8": "5McoKbkpqQvsQrBkxC1k91azvdnwTrS1jf2chsK8h5V13AYJwMsHh5B6Cg7iie7FjhVmSW4GvKvzyGxpGc2zZnAT",
  "key9": "2cn2fQUL8aqFQMWWEouA1vnPH8D5KGaw2PRhWKXPa2Ee3WknDa8yT44e1fih4Ak7NifPJcAhpQumKpNUXAbz3P9F",
  "key10": "3fdZ198j9gqhteT6fQxvJq3JL6shPpedGisZUiuNS2xsMVYHVjX3kmYNj4C5JunAFe7q5sotjC67PDfXgKDmGP9e",
  "key11": "4REwWRxbPmQQHkpb1wutUtdrWUGLvfWy6muhgoYSNtVmWkjTEuaR1zHYBMX7q2KU92pbu2Cc3mY5s1ih1ddgcRVj",
  "key12": "5edyTDtU9nJVzQjCWctnxsJyN35idarVxKPZ1yUqBSvePx4QQSb8NYfBqikfeaZjnpqNSyrjgQWMY57otnVQRt2s",
  "key13": "yAqjh2sENYVx4c8nEW5YAk49CifrWmnwJZt3PuwXU2mb3uZL3S1AtEGn3nBrhQqmwsu1segWSpG2mq9jkV49Ami",
  "key14": "45yn7zEKAXxPurBCxbVkxjDYfuTykZvcin1dcBfNVWWV2UPTjXQvmUBL9Eq4KR3ha4utArx1gDy9ZDd3zDQzAcTt",
  "key15": "2Vs8cK2Q5DEkycBXoiSg1R3QgVFQPQ4pKDY4bZUzfBQ87ygGFoXwVsF6Y6TNdj6kVxMWvpfpkArsuK19wcaLGW24",
  "key16": "2E19Ny6dYwCUVzzGghvWhSdbsE8eoGPoLr4co1xWAjmW5MNFwaqpS8DJQbQpBrRmgUwU1S8r39JkPm17T2ELmuqV",
  "key17": "2yx5s4p9goeVtUZhBtvS7Jcn91cf3hPD5fVubbYNhnEoJBwhXQzMqBYEtP9CvvwTXhupnq9jWVoma2Q9NuwKg7qr",
  "key18": "7nDYypCaGyZLobdBS7nVkkG9bceBcqUfJeGduwSkZkbeAyprYqWjt7cAWeM5iu1z79LRCZweqr7j8Eyq2aheL68",
  "key19": "4DjDKJixb8GFrohfHRUve5oitVS5QgtkxSwC8Ksg4AwNTqrQH5nmT9E8ntW5QL7ipPFwCATnAN2iiFRofoChoU6t",
  "key20": "2aMdnCu9pieJ9p949EgiC6iAraBdx54RQwVvyRTgJyP6etVuGkGT9ZkcjQG8Z2kqGmGRHtFCfSBWWnbUBF1GdMHB",
  "key21": "YCBfZxNLBjPn6XkW7xXGmFzNymJcu9ZShPfEiLuiCUs13jCKBhc1CrMbq9FFFMDfJ1iiL9CA78T4b25Fo63JF7B",
  "key22": "2eMXirkwCjSSLjR6JRKCnefKTZgMo3JTQBGqWuPjHHE7jLEjw1FaPLPyWxrtbKs1z4rH38eP4nGvSES2bXbm6SUF",
  "key23": "4eKoAmzaNmfud4R1BszaEbxAuTMD1mFM4HaQedwK5bjhehtx4JRiBsM7NzvbgttpbhisSA2Lj8EqpNDbNLy23egm",
  "key24": "XXHE8w4r93B8eVkX7poT7YFQg5ieLKxTQs5R9DZXufZ8iwV8dLjDHzKUNvsp1ZNjNxQAzz7NjsVgvLbfrrkt1Ec",
  "key25": "4kx3m8Xrq4v2bQHyHhGffQvgy8JF6bGW72XpMfSMsPexdL5yaTFZc1F3P7g2TwEzJCmX6yM4zUpaxc7DCwZaCQSf",
  "key26": "33HWmNEEC3WwzavGeZvbt2eSSNcryqzxJKHy27xndmtF6K6wLvcWUti1wtRufgtxTyEuEbsPDLdwBUv3xo8vZmtT",
  "key27": "T9WT2YfUZvk8ktd8jeA6MU5x61HrEL6Bpp2pyJQCKEqe8cMqQsxKpjtzBwJ1MJRPi9bcXoogKEr9zJ2zueKs7Cb",
  "key28": "2bXSGLV6GdHFLAdt94ouqtajNPs4VoNeaBN7ZphkrWBPrTWRjg9Vb4RytyqzsQFBkZYnXvmALRNU6RhyY9cuTsZE",
  "key29": "51XDEWo7JUs4k8jVaF8qbEhBna2qSqu3s771ezs2zUQEYVuyxFFj3YUMoMVMC8a2y5DmQz3ijV42xB8peUE4i83x",
  "key30": "2YCUFLv13Ged5ysSDfVSqgW1rTU4z6ZboDQRzBwqKzPbeJjgGVydnDLTFaRyTNztezE494LzBRsN33NVWAdrcRNE",
  "key31": "3WetqJdfDiHpNcrH3i6aFWZN9168dEL6NAMbYCzmuDBN7ujfdNea7Ta93W7ruWHABKgJgZ868H2zwEiEvzuoyChJ",
  "key32": "2dhEXJJG3n1LfoRfNa7LeY1mcYxdF4nswLu5qYdEUYaKaudsrTCxJz3xQRHyckLrZMuqXUD5TTidhPw2s3ospvyY",
  "key33": "5EDQqqV3vw4YpYff2vuWTNPXQr6tu2nUFMNsCPyFbLiR7nAVWXGyEadxzpAC6AntXo3vw4sT2JGQAP9nWSj4Lz6m",
  "key34": "5zVudk2NufcFC5gqtQSwJ93rLq9LVdsHgAdGVRHrpByFpArR5EDW1Gxy5jNFNCQupMv7zfb1nFW9ukrNCDMmZ7dr",
  "key35": "54aQdm6FSkzmBBgXsZ5PT9jFFmk9c4cCVyCjeAg1HU5hZS4K3BnRBExs72keoWRin4iz1ySUY2icDdWpavbCnNjm",
  "key36": "25huEMos279PC5ZVuFF1cAAnnTEYoqnGzNqvxACeV9SDWfvqS7quUgNENpkRbW6Qh4pSk5xbDF3UmYpRHT2mRT2g",
  "key37": "3SkmoFtkmDAPdHrSVYrhXsNZGM9Jmxy3nyKAD3qKUEMwUFNRCwSTrbakbv5wVYEhFhR1EFqkpjyoZiKu1txY5pHj",
  "key38": "247dE3DxLh9xsKcKVM1mTMjM8ENqcVymVcAgxFTXki6LAVE3MNQEDsoJsFbNYJzC9TXncEYjNNZ2L49iyVd528h6",
  "key39": "4TTYHQHGL2vopyJN7389NSg3sMCPbJJojsqBrX1g3stTE1aoAjkw1uUCZ34LXHFrexT2MDTqSPccj121g1nT4Z19",
  "key40": "EZETiEgFh8kv3qHjfgkaLFAFtrvFErEba4HpSqCSRFTaBNM4oG7eQvaM1YX5Yqu5ttGtGrEBS9T3uZM8zjY2jKT",
  "key41": "5nwmudicP2FU2ULsTZwtkLn59KUo6qp7RXKMV2mioDcJQypUb6B7cJPX2BqKxzv6zoZ5e7DTTziqmrcczmNYsXtu",
  "key42": "5hRm8xoryjyVjG72Gk8zD15Ub7qBV7ekS7WPJkiufqoN7ETicsso6ddWGdwtWZo3Y7KbRSFsWQb86vLCXDnWyxPf",
  "key43": "4YKPYffM8bGHsRCvNpWxQqpAr7J6vEoQU6f9t8EmPebQ6DPBSwi5hCdUn1ienmh5HXpEb5thHHexZMojEiM5uTGg",
  "key44": "4wm7GYqZd19JrT1Pxy4ArXA7nmR3FsxF2bhKsZPMqZUYXFhWAaag77SmY6rjRcMCHYnj9zxXWCSNZNKEQpngfLyh",
  "key45": "5kPeQk1mQaD21bisHBHywS7W5tzneDH1v84dFVVfkZwXHdmPZ6NkwPxsfszdv25YWEh1KeyXfteFVM1cXeyAgpoU",
  "key46": "3SYmYvviozKBt5xTukcNTi2d6raxKVUArc7h2UTuY4e7isXEfHrKKT5GtuoL7W7yLUNemq9Pq3ffg5vuBWwuMYFu",
  "key47": "4W19Z2uhZvoU4YiNUuSLX1t5jNwyoGiZgrQ5vcvvWMvnfQR4MBxv7yjMtkKcc7bnqG3PgQar29nCZ47ehXGhtX1a"
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
