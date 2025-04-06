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
    "3EWBcdcSQqRYSCa2UHA3swqkA7oCkjMhyU9jJs8aW7xnQxepB7zGdCkfMETaay14FAa7ouPZErNftCsjbsmSqtBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDvaNeXBohQEgLioWiW6X3pTJfr8C3CPiUVVAKJhdpAnavn5SkaRckT1j6xwzyqydTKAmr4eyNCLoL8N4P3Lbpw",
  "key1": "3XDW8HW8nkbcmCgPceeATMMGVH78BBxuq1vXGSCWXWD8fhWvYTzZtZuSzVX9KTEPFLPGtBnWvSbqe9iH4J4uANxB",
  "key2": "49c29bub4Y5iPwmikyFq86rTudCZYjcjaQJjpaH3PStHnPRD5ZyiQqfsMaqyRSmFjSQrMbvyXzScCbWZ2t2zRvQi",
  "key3": "4p4oNRZZgwG54iQap9zDnw52rbxxpTB1hFw2AT2ub6DEz8cygoFxdZDky3HKj7WAyjZvxyfsVkSCuuM7tBUr8A7x",
  "key4": "vDWRk2mpB4DTDDFHiWa2zxs5vv5Tbz8rojfHr7W6JTHXoZhokmZJmivEUpo5c5vhtBm2XN4yr3oRs3h4zn28g5T",
  "key5": "39q2HsxXSrpFJCfdh7aUR4XUZ2B7EeooYYZYq6TXeWG1sRK4WHm1sYoWJgK9KLFBaUtdaitgkTRCGjC5gRNmtRcQ",
  "key6": "Xg6NQn2V1sarfMqFbksVaCpa32f51pCovuLMbFXbJG6r3h1o6VirQAEjhEHzKgwQf2ifmHWmmHJUogrHh5TPJ7z",
  "key7": "Pip9RRRFEKgnRV79GHzzvJjWFLvE83K9gzPFZ5YB25ZSYbX2r74bHBVKKoFt9jXdnBKK4SCSGY577uS5rmYSyCb",
  "key8": "44wwTzDb7gyHgZZRt4Yq1TV5n8EF2pbL17URY3KssQhjqCEqmcxrnpMKFr6vs4i2hHe9LL4g73KQXbTcpxtQZPkd",
  "key9": "62EiGfVQo6ex72yEzEw8FtcevHc7TYnfY1pYQq4HSM2PFzPNMJbD5nA9D3g2qDfQhSfLD84mHvC9GBrHCVftvGqY",
  "key10": "4ypEwGJvEXgjr2poWomYN6s78L5yW8iqMvwXFrq8Pd6ZBW4U7HLgLmtndF4uVKYPKUCjEUdSQZHw2SnY51o4vtgz",
  "key11": "5Bj2pimHKVLePZTqymrgxi3ZSUCpnET1gGVdd1gpkt8P4oqHCe69Wn59HfHt6jEsMtcKCUnHy4i6RfK5oSdhh4v4",
  "key12": "4npsnv96ApmqJkdvyD2tdSCeVgo6PSW33XvientAML7uyjtLVWgTMVFFRj931QDeLBnSBjZGmeN8fyxpFYzrjkwY",
  "key13": "5XH9JRckqSzszvyuu9kMJ7fprCznQHLN7S9D8nFSVgG2YoPD2VpFYw1jaQSMSZd1jk7zUAcziaZboRC1xipyYidt",
  "key14": "4FsdcP2eEyj2axvhwRfrXvseZjVmqiVudUaedafD9RngC6X2SocY3jHWyMmhPuNm5Adtq8MZeobcGr8cVKuNDUbt",
  "key15": "383iYkE3LoAWZCQc6jbAHWhybpMysFBuZdswn5tiuk1rysQ7FAYVtgGXj4Bh1DGwqKu1KsWo7Kzo3yvymxwQswUr",
  "key16": "5uM2ytjuxNund8jEDZHvtgK7eGkfxxw3TcstXyVTHUUd3GC6i65Rhjg2NhGAprSzBggSHPR88HQqkVYPTTT81SyT",
  "key17": "55GT2DLef3nuBAx1tvyMDWTUNshywjFuhwbXPTDnqxmFa7jkpUTCSSEAgQZo5Dgq8gJfq3KDkb2ZKCaeyLatfcmE",
  "key18": "3RW6sRiSKahLFgpu7p8j9ZWtXa7jRwNQE3w8QyPcFnQK5PgiHmjJj7YZpjchVCDMdzpZR8YxKfHAzvkTrTRyyv8T",
  "key19": "3RDzGLzn8NnFG4RHXsAcoXjtQCMUD4wsiwwFHorZSFoaXJSbQyzXmY3RL2dv39XqFiaoKebKnf4WwJEvuojKrCRv",
  "key20": "c2NsAVUpUXBmV2BA9pVuCcUe4dxrmrZ8CZSZsLNH1kc5KG1UM23X6b2LRpkGLxZf1GM9LDwDveVqdcJLa9N1f5j",
  "key21": "2hChzSB5vzrGAxVvhdxvJy2wVu4zvbmxqpeSYQkcfNBSFBqj5Jq8rj6msr4xH8uY8WEYRPbPvdpRtmThZocorbeS",
  "key22": "3EyK5LgeBRVjubYMsAAvcsXEnRSFycW2Zg4izWMQjx7saQzGK7BJPFnzbg7wMbyv6Pjrwn3Qn4DC7UFSkLwZWHWy",
  "key23": "3Xi7XDadu8Qwuy4AFWeTe26ttoJyoopaJbeFa9B1pega9sUKK2TwcMesok5zwuevNj7hmHkpWZP5ephh4NN43bbz",
  "key24": "24btBGUh2XwLgryKeT1hnBzL8X5ZGohUbXoebxAnHe7kyXwT4qMZH4PGTwD66kZzTnzqKXMkBbGY7G2cTdiby4EH",
  "key25": "5Z8vVdcXQeFkdym4iVSnxBCSQmUyDr7XNgw4ihQjfM7J8pq63NcqPXQpqs6a537NbY4v5X3XjKhGCnpXXXU4PoUR",
  "key26": "5PsqAUtLFjxyuUgGp7b4hsBgkHiF7qRfCEgor4gXyMVAiZcaXdQtQVFfJgrxSFj3Gtq6gYzf9UYViMUefm5Gf6dJ",
  "key27": "4rg6MJur67fsMMdwfh2K3c4waBw8cCDuA6Zbvxr7NYMXEvgmZ9GoYDxHyThngsjpmsAdaZbRsxWaKPoxjxN5Yn4P",
  "key28": "4DBcsiHt9T1WAinrvPBRpUFm3ifL3DBHpb2SEKvF1x1moMHky7zZEHgzfV3eh6GXGLWw6hHEpZFkdnjmqTmn8XTd",
  "key29": "rUyheoHQRQSj6oiSo84XFJnPjmx3aRtDW9V42jjoYLQ9k1dccELBRNqWf65KBYBhS41VGoT2dScKVSj6LnCeaZz",
  "key30": "2QcE3r2pm1dJBH1rZCSdm2wA8G4zfHWWv7eB5F6E2hwQt3Bn2YrB3uQR3KEe5EzFiFQMHtmoHQjMTiWa8Z5b88k2",
  "key31": "5URLAgGDAd5FM1ATwvXtXUGj59uAjw7YskyF9t7SPuRevk1AbHNQogYuvZGJvz8f9cXKwPSYdWG9MQ2FrQXRCVwu",
  "key32": "4Rk5YAdfopPiiLCn1VcGJn57oZJW9RphjtnCH2sUyUnyoaKdnUSsX4ZwqhdnCw93J6Vf3KWKgq7p8mReJJqBj1aE",
  "key33": "25D6tDnqTqVkRrsQGyqRp8pqLxvvtyK1Q6yDKrZTdPLuWqMtKmpPuY3QDZfWiPGk5zoPrJgPqvpBxyxu4r7WtP8v",
  "key34": "5LXdPm4VEveaqNyg1eBL2b7hKoQsvQhQMZeyBU7JL9SXnZE7Z5SYz6uE6ToH5JeBZ6oMwpejQP58JKKy2b8KhWpT",
  "key35": "2tGrmsyLrGp8qBapYkUV81m8icMYb2W4tyMZmhkUhpCuJwd9KzhVuYtKx1DKGSqyTRMjUfEqjAC5EqLi9AH93TrN",
  "key36": "5KWUmfhJg3opidJz1BGwFNg31cnx9yM2RYH285JYhApYkR9yDiZ8w5t7abHPsQ2FF2FAkoyQymzSEWbdYsUo4onS",
  "key37": "4msroGnEmGSdetBhPrwevsFAoq8gk5QvgL2maKjnq4BNBagtpX1XykiJMwfpXhjcJVgQ3cEoeKDMwRfKB6xrd5dF",
  "key38": "2CRwMC2BU93w7UYEZaGsm6ezJcTUQAABqfhJvnCTJBMyGQ91eavP6YGsau4GPEN3Pt3bzs84aTV3R3cxzm4mSPRk",
  "key39": "5fNgBeYr9vbw4DtwQGfLrN84cBeYbBReJbzMuyoS28BCCQ2gshcXme5XtVXtQgJa6V987KvPQswXQZzEwxuzs7Fv",
  "key40": "3KWbgaKvgLQRNR2VJJyF87jA3Bv1KHUoTbT9Craowwe57xf7TRuVNSe6dbRBzXUc26iFTuJEiQWQD2ZA2iY6zr1f",
  "key41": "34J6Zi1fqzMAfxqv567wMuQa5onXw9EBLbjmcUYLBqz8N52GmWa61gAZ8ZrjAT9xuYGF6zk2yJaxv6ZDGuAxQGDP",
  "key42": "nFoWTr1GHKgTjAvXCvRgzgizR3maQzPtAtfa5LMaYFoD2BzjUJ4a2AbSuzT74PjgQo77CtJpbhVh9rFvjG6Joud",
  "key43": "4ak9AyKF7BDMT4VqRVxQuwC1Gvfd7xvVPpQ9w4anJQeLUoNqEfJBNRWN8veNRjRvEjiQ7qwhfkbNudA5PQQUrRyK",
  "key44": "2nPJLwKiCCj3q8abiLKviuNsKffxeGoFr2uKCmZG8yHUsFt6NX468YmCNJnCoFbNNtPrrGMJUBmpnaFRAHXRnghG",
  "key45": "3vVdCYw4PgMnpxyG56XHXktxcFEsswf8T9ZoyNWs3BbQ1Phkn1KeCDkWaoTo8AoxS2J66NUnP6eJ7NMmB6iLLg6W",
  "key46": "4dCwaTjQqkZjCZTVgQND7tKH93vhf2GLAqD4YnDiA2iNskNSHDwAeVsvLDhjTJnaukmQv3Qfg7d8LfAvcRfnVAtW",
  "key47": "3hUxMVeZdVSwDma6M3hDLERn9xBveYxvH6EqiZVcDFBZuWFxRLLphipTLGDgAKUp3qziXWSG5qBEAkFGaBp21urG",
  "key48": "2jSFcgpcyzWsAfaoTRri2Tqw7jpNDnZz6gwJV4cE1kTMmb2AeDJ86twbpXPmhN396d7eDeNo1ZQi1ZKZmNRzvzDx"
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
