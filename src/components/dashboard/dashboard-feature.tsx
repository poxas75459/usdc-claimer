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
    "qVZ6RZhrR1pAyWzmAWnhuQ8isu5jtmR8cHDhV1oWpNiRfWBT5mBbnYrBMc3gB81PeJUcL2SjsNgCnh8j5oYakg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58KojpGkQj7HCyMaDyfSmzxWMroVuY77L2cfVXLRg8RcBWVWT7VftakRBU7qUAm1GXAxzoNzhVTCeTHts96yGXu9",
  "key1": "34vHp95sQyJyJt23Pv3cAWwD1QzsfXrw4LyQ1WQ21MqChEevp6y7eS2y5beA8wUt9dAxDbBhZBjKRNLmA6fzPcKe",
  "key2": "4aYTpoapUrQqvfLRUGUhRnKQsBrL3RP2jydgRQwirVsShXsccrB6RpxdMWcvttt6LZaSMzv7KwqDVu8ZzL2g9o7Q",
  "key3": "4H97HRuLNZ93tS3MrESVpi1KrE5bXneQDXjbcY8Ma6r7Q7bGF1rKVp9iNYucohNDtsoTQXsZCbDhYCfaB33LXbx2",
  "key4": "2B62WEXjtEMYFdsnkLZPMsWr2vrh9rDUT2gk3nuVWEg7XXJcxJrXbtWg77DaM64SxQhdvCtqJ3ESckHsgRyxo4w9",
  "key5": "5ktiyteWTfjSd1SHz6AZpD9Zyk3qHcjPED7HmYMn6xbAkDBcJWToVcDjE8ccYNghTVhZqSHpZHZhg6Q5kiyrHRif",
  "key6": "3Ugm2fQnVfFwumwc7g2w1n9DqBHaPhFfj5CVxYRXgJspKJF64xsKmLkq8aQ8tb8uQY2wfCrTrjR3BQsNW3uHjbBE",
  "key7": "mtHgnFRXzF6qQGBy3j1dWfMLwGNGv9xwH87zHL2t2qKW2XRsqKDb5N1Xys85UXaXvRDRECgcJ2CjYNxPngP6WaF",
  "key8": "4LcXNR9KpBQ38heSk62J7dYPvK6Ga3bpXRGe9Fr7do6QQPtL69Hsrk5xE1VUspikuWWezTNmcRBWST718e9vddLG",
  "key9": "3BKa9Raf7iH3BBFDGzA7PjJmQrw7NDDJKsHPeCeDvGFq18untuEPt8FVdWhQYuSRF431DuZrtnJBpNfTcxxCeD5T",
  "key10": "4AcHmJayBqmb3mNoXEUbg3g75JxUp5avwNf9JaLCy4KtbkFZGvJNjeLm5pxR4CWw2pNhzB3JuAHpRGw6Hj5Dq15f",
  "key11": "2Nsv6eSmc4N3b5AzS5B2ACgzCFjAimBAHoRSGBpHkTiHhtrqQfPQfXMUiWvpifZYvKRGRykZfUL5eUcT6Sh6Ai9B",
  "key12": "5rehStT4V51ytxgfgUH5oVUDdhDnqBuaZtUaoXoYFmhnodqeH22QouFSCAtxZKMPtKu2mTz2qKaUPbSHdFmhsAC1",
  "key13": "4wM46NAZpLXSYkZqHAC56ZArQFoGarJFea6GwATs8Sf2uWmm5qFpKPuNUgni3Rvn1Lgb21z3p4QbftZxXFyaMJ3M",
  "key14": "5apka4uvfddfjCS8sJNWQSmUBPV8AUD5A1R7n7TiukKa42ddYiqtPdwZD8zaR6zdwRXB6YBZ1JwKrhGHkE9uyWZB",
  "key15": "2DvwNPYXftVUCcaDQgCxpWYpXzWkvcWPNnYRKfLqxGwkvMnKNeZzWjft7U3DmWv63qmfNqxMhEExV9sMUP2QCU6E",
  "key16": "2uykx2oD6Tt4F3XgY2CB7YpqC5hHN4wuPpMcbuNLWZ4Bo6bwE1QgdkwuwSPAw2v1WKWRrcgB6jUAMMsWhwaD8Sa",
  "key17": "vD6tXbBVFXZKZ5uY37e7oAGaByZdJnqAbN3UAzhSLyQ5fiACGV7tKdLUyVFdrEL2pQ5maj6Efimy3z8UsKgTX9q",
  "key18": "64UngFNLza4Pw2SPhJZmFq4td8sQ4ou5v8CvsYv2aZ8WspcMFh5FkemA4DZs6qM9hBsAh5qNvBVAzSPfEHy1ohra",
  "key19": "5xSnNk9EFdC2zE9JmcnSP2SzAqxQziEoin2MR4eUsGsZBmc3yJEh2qeFyaTQXFEZFxNhNe6bqkFgCkyYHn6KsPou",
  "key20": "C6K6LWHjge6NdoMwwcCzuC5SP4KzhnXDSaJ7FgkfxQ7KBnkJaJCfgrDRZxGLbJPrZLq7SBY7kkJJgMfaPHTgbPR",
  "key21": "4phoKRv2vZm62z6wJo2EoBLrbioas7tJZ7ax9zin21Y65eH3zUHjrw8CHHKPw1muXMkvx9vsPixHpoQey74xx1KH",
  "key22": "rKxebRTjfgAV3V1pNH57DYBjv6YAtGGsna9Qx3f2LgoUb52mp9kVd7kN8WNQkR6ZTfq1ihzWnnqoMwXNKW1s2NJ",
  "key23": "4Xnpb7xe5r7ATCiXHJGcJZrh693hDFxyHV8zTebSy2uitAi4bZi5XQWTCBikEzbkM4GwS3pfDovnw4qPE2gFMx66",
  "key24": "2kRBzsZ8zQuCpE13oLafViHx1bZxTSAZjGQGgxPqGCJRLYnvo66SJtUXtZ1da11UrKi77oAKzDLLZCX4DK3MNAyH",
  "key25": "3Mfat2NwByK98TVSCPJm1tTEuCWFnJ1BJBkeV4wefnyTGySp1YEi3z4ss4ntnSos9dxCep1bo83FxC1hrg6embhU",
  "key26": "33eGuXJE7v6iFmCX9qKioVVEriNkaowbwuNvoVVWVwS7EpGCQTKLid6pzxZh2CL1uQkuaRetNpGbwv7Vt6eQ7exs",
  "key27": "4XLgnLrVnh9HQFEmhrJH5XPxJNY4V2K58hkApx6S9wJr22BUkFLDHVk7gnxfPPAdA12DVALJJaPcMokci1H7AR68",
  "key28": "3qrNrEkJ9Tgu7UHamDkWgAXVpAgKos189mcjBCPGN64XKGeK2SqxHet5pFDcmbH73nR9dogU9LfQzRCfi3bXh3kf",
  "key29": "67k24PRu9XY8B4Sdej2uHJgWxaHQzzsAjMkTXyHWe978xdSbXnCfU5W1wcP6BoPpimLBKqKkukkFWEa1vGMPEb9Y",
  "key30": "2uLAUK3xqYAEk2ZmtrST3NBtKSeytCYfsHC7mDgYfEjw1FAux4nDciRfdsz5oRUihKf2q49kMkPFNbtBhiincznR",
  "key31": "63f8hM5JA9JKykkgCwQ6wWVSckxZcN4MJkFhxyxADN8dr9qBXQVna7ehYbXdeAXadLz6jHQQwqpsugthrHrDNXkw",
  "key32": "4MWGKadMbGRyorX4hZCLwi441Qd7dmqPEWxEFujuMLH88rSqPi7eh4KYGzWJg1BqJB91QKgFaWu2WkSt4B38QXVB",
  "key33": "4HJE8aAgSVoaCgWL34wSpTcxJFmhR2JrWMGprYMvNKeCgfWXSSEdHaNruTHXNGTc2RDJPU18UoeMpZqXbNdo3h9Q",
  "key34": "5GPCWgqSNc28qsKi7dNxphw1thGDF4QKHGLbnyHH4J91x69iEMrQQ3R2Tvn8ujtFhKfKWH9g9DD6QQpoZDzSn91L",
  "key35": "2eHDQQpnRYcth5dLY4kp8bWtcz6EQWszXFzLpMiVdpPU9PzBntLLvyPyRD9dhZhjboAhcAk6BZDLUt7q29cjHk2B",
  "key36": "4a3mF712GYArkMoFqxdxYsXt4NUcmb3spWTBTeFmtAn1zfzRyrj4tohPuGAB94K6XqDQyWtgZzB3FeDmSrBTEezn",
  "key37": "34X9soCCFFp7XM6oM1yqNRfUkEKTK26nLvWBmysHVoSe9mUtEZNXwb1PX5ckiAy6cSfL39gWH1jDqpaUev1ki5c8",
  "key38": "2LUBd3wV8n4ex6mj3HMkkSYuBDBWyFcAjhdGXGb84ZqLxwLZ5ZKrYocE1rMauDQgSXSKcqLzbpiEbuLgi4CKuGsk",
  "key39": "2WJHoXcBNVsZBcPVWeTZaw4VDFMEWXDFR8a9LJBPFoyfjfjRkY8sJfbfriUYjYwYzzLas896xJK4AP5ujkt5czKW",
  "key40": "5fhwhYw9Dodx9yuZzyuKvumDzkdkNsF4w5AmZkdmF2nXGvdT6FU7vAGz3zYmeabdBg2EQFvqUwULwhXEQy2dxCCC",
  "key41": "35EZu2zFekbCfEXZUjHZNqpe5htZfzPChszTnbjsaoZpUMhWWuxkZgDq4WEuma66NMhkGL8vAh1FSZhVA7NM9DPt",
  "key42": "5SZR2CwYMYgBzTqbhCcQFzpaN86f6mzQxHWK43NcbaFwwRP7M6G6c4B9Pv6S5mPbsKYvyk22HwXA5uqWYioGNXyk",
  "key43": "3mDdtuZm3QczC3k6KmakvMm6xinwoz6GHWwbQq83Bg34qT7QdD4hVhD8J8r7ba8w4aUvWC6WuHaTxZPTTWmYDqws",
  "key44": "5ciwh1r9jin7hs3YVRpFVjzX4R5KGqHkSTeZo6vH5RvFpVVXTJTGSxGMWqwPZh1jAaSNGYU8qQEEwbq3pxFuwLFG"
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
