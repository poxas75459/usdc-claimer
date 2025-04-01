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
    "3Bx6VrghmurAwdjPupvAprsSJxJWzb3zrMJaf2rz6iYnUoRMSBAkrCDNrKaPzfsQuLk8Amb7SsC9QABLrvr9Fydt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52u1Q8msvgwyydyhJxj4K1CVpwHynWQQLeuLGvJtfuMuFhJMUQQ4wHnxLwAksEsxCmxCDDVuRn8YLFUhKmdkXhss",
  "key1": "smE97a5mqHkFPDSBbhvLLiuZbYdgDnArzpSzAaibpSKAwvoVux9SZ9dBjBdBxzw19fWUzKXHGM1kyFr6ZLihYjb",
  "key2": "4rwy6ivdZhvB6z2B6o6pBsntmN6YQspJz2UCQDhJFzpA7Z5gHVW4UgUzw8XWHuf4L3UWghwmUmWPaw1y94tfTrdV",
  "key3": "5SBjC8rgd6ZnZXs7Evd1ZyBxTVePbrKmoiZcYZjpVRfmvsxeimVoiMgEbobRNKaqExdu4N7LUMFmuhPgoSuweuHY",
  "key4": "3yoXgeP7jMr5yU7c7kryhKfhih4dVnjekBtXzdAfL3k3yHBgidD112KZwTGjxHf6uf2GdYZXhaAHUJkmXub1Eqfx",
  "key5": "3mAp3j7tgzitNrhoeCWmzdxKuL35a4qtMBmqbjtaT5xhKqbhD4dmqzWUtG1PfY5xuzTYWBtAJizzSZmt1yTPdv9d",
  "key6": "2Ro3ucPk2zYpfPF15FzpPAMPVbuGdfzPMCBvYKVX3AtNXymS7uWmo89DfnAD6jEPggVe8TaZPaGpfbSaMDSzdAik",
  "key7": "39LmcxunGUAu4M6tYWbDKyRmHSTKPPMCCmsKBqDEEZC8w2rEzVziJRLMvo61PpVZz6Q2wX1ku5kzqfkF8ChqtpGq",
  "key8": "319VPCC1o4J7kMjNPDjjrSSHtSSsxqVFu88453hffx8TC3Z649YcwmvU4ZXanpGgkD632Bdsd8TApQMXB2amm6hq",
  "key9": "3kf8ZYZzrmPRvNQc5GgEptcdnMAa6qTKyhcWC3AVoQZfYPnkSEfyM5p6FcsjL2SQfHpZ4baL1krQHXq3kVcPoFuP",
  "key10": "5JbuVjHwYtvMaLiSNGxotmFhqgEK7yzwMzuP9Y3hao1mssa6Bi5zNw5j4ptY5GiuB5bYZbiC2M9vmo174KoUZpji",
  "key11": "4Pw47793KnUKLEjTpVeuRbRLXHHecBJFaqEj2T258BYz7g5Br17K6eJvYW43zemaDU7mi8MRfbdn86Egiamu26FC",
  "key12": "K7g9p4YVny8KTZctoEicLCofVurwKJU2zyPTtk5QunADL6sVWVq7EwqCjW6d56XKJVY7Z8gkqQjzk2zMrezdpM8",
  "key13": "2hEUaQo3yqSbNfPDyFAY1bWUTaeCLoKjMU6KdkYihb1xavfWUkZaCYFCZQXyFZ3evXkCFNfTetCpHzi3fPUXN66S",
  "key14": "2B9fudv2pk9UFV4qkneazZkMv6xfBmskrmRQstwTGmnDLpWhx5v8UxrSZJAyjnk2m82gG8yyF8TaGVsdWRx5PP8c",
  "key15": "2fSy9Lbae88mtuoFS6nYVGpzsqfDdnpiL1qPV1YafzHMEPi4C2ZDWqYLM1xWRdJcN4CEyc1RKoBZSsw8Zv4f56M",
  "key16": "NRr1j8VwVQjeS6CmaAqkp7cMvV6TBKmDgp75j7a6HWfjpvguTDH2ogyWmiFXWqFZ3p9or6Np4mNek2T5HSBqChj",
  "key17": "541ZJQQEBogRYrdrnycYHmsjQd2HTYbt9BJAM1Yqwhb7t4BsYjzrwS6sCxjmUuvqCNc1REc5bBf97L7n3VAT7AUG",
  "key18": "3s4v2VfTK3yAcoF4hsLB2NfLt2nHvyHiws5ZXnUYcwyxwbsK9npiaA4rdRaahgnjAsTutPWfAWjPsFBxwsw3LXhk",
  "key19": "41RSSm9n1pvZgziVWDPQDs7YN9chd9oxi8FgNkMNzxG7iTTAeADbN2hsvhi2UM2t5ATtMYf8VG46fr6FBnBFgDzA",
  "key20": "7q1SUn6GasvivjygquYgQMjSu3bkXBurAXksPxZJKniiT5CGZQp2ao2wWF4vYsenognyCtJJaa5GvjQyDk4VC4f",
  "key21": "5BcLYEGoAL7HVYHQkR2b9deJ5hb7qpKKc3mhgzFfcySMchspffGcFMhBesHyVmhDhSeJnCsi1fdn9aUq5bVK9zs1",
  "key22": "5mhwEtd5E8SUqTTQ6EVzp8C4mDQ6cYv4irCnNy5KxmJwjhZAfkA6wFC2dEE1rpUmTaX5ZrBxvHRhw5fJAtwofa7z",
  "key23": "224wk7CngjdiK9tnnysMDyCVkB1hQdY776RHK1WGewaPHJWSmknxM55dbqTNm8pp3Rd4r7sxzKSdxcM61JCJ76e7",
  "key24": "61xUsLtEZ8BP6CGF2Wj2DfuRUf4aQDcdNs1s26czs7NsSbCVDbZFmx9FChvNBG5LQhtVohsyD13aWENNV6PF9UsF",
  "key25": "3XSDFeDX2kceGbsaHM2npkVgUaBEboYTwZSLvmfP6Qe3NceBxERQ6dKRuuVJqFqh8A5fQ7pZJ4KNKUbfJEjYjJ5d",
  "key26": "2TrspWoA5hkWSetxMShh7UJHdRYFieuEwCgffanni8NZvwsiJhCBuFxqTGu2gqASbiWYMW8MXVnLxKrT5BaFZtAG",
  "key27": "3rGp6C2SFM6qhhcDGXJfKRVtK3EUdYYEmapi2SdsGXtyZmVc4YW1h16GWRYwWDcLdSCnotF5xAeFmEqQBEwGnXdn",
  "key28": "2JhhP999UwDd1FKoqh1khyK4LrZBw6xrq4KB8y3aeFeHPVX4GYM2vrJDyTs71EKHkgEsFBt6yA9mUMfYtZhctd2N",
  "key29": "2Rv7KsZpc2waNFVzRN8LoGcMX8DbQnbxyMaaB3Frnmap1hp5Gdg8BVRAbj8p6NgjAPebcckhpMUwosabyEMeqNCW",
  "key30": "D7n2R38G72Z7E936riJbC6xMMbJ6ygy8ATyrvuPM2yF993cvmegkcyvMjRAmScNam6howfwVTTrQsxU6SXubpLH",
  "key31": "2JGqopbq8HfRykAhZD15oNwFPTJ3vxTzh11F3BzVKXNaZc8A3WYKVcRD254W15tdtubaNpvmvwsz46CME8FFZLZb",
  "key32": "5bppkYqqhrEJ99Vf5PNDsRMB3jcrtVpf3kjjrfFLKyzNn6h6656XkzE1sMrupN5eK59qtuTzRxTakxotHDFXjF78",
  "key33": "5mRyNhqVxMZ8FB8UBXfDMNPJmBKRe9sN7PjvRov5yL2PZMTDyVcRYirH7udiGWRpaEKRjqNzk1kvd6gVuEUzF2AS",
  "key34": "5fWaQifzrSmJn5Tf4p1aWBmZHfvNkJxJ38pKjVX2ueFUbWfRYk8bt7CJUKMH9je4fo9SEdhEYg7qvwfbwL9ANzsR",
  "key35": "EbCAK1jKB5QC4cejXJyc2S8ZKQa6mcxXozWsnmyh6nubDfPnZj7yV9ExV1SR5vmZvYgBzDCzaEjWBFTYb5ZjxLf",
  "key36": "53rZHsUExAYVsviMvr5YXhqvaJ1SwHB4apSThKcM3iqdFMTKBaneHqr4KaLp4dEwRH6zwno1eaz8QmxYKHxDDHk2",
  "key37": "3SpqVW3SDcph8YFW9XW3WtqiemM88XqTBoH2LGm1TzA4VNrMSmgB2Rdqt4VQgZuGDbxf4ssnZR4qCQ1Uf3zSsrDe",
  "key38": "gdpc66qiENus2gBJmNuQCn4hZFxARf4dzqMNqGFejYuA4yXgopc5UgvymhAjASvRn94R5rBibmHe7RVJ3pwKtgg",
  "key39": "5H2Td2Rj3WMJovsRpH65uRvoLRPB6vNs99pYk2fDWf6wYREFLkDESrB58tAKAqHmPgAHFpCjGAamXNT4yC2nhNdQ",
  "key40": "2HtgxxuBci4kSFtTq6NF727czfWPtvKpAWsA3v8ijGMTiiMG1ueCbN3ybW93yy1JcMgFAFLMSWJDu7TNLpp6jyp9",
  "key41": "3CiUKobNDrgwiLZ4BxM5RAA5EHcZQkPXECgLp8S3f2W2v1rQxGHPPWPm7ri3RWseTbd9YWxyeSpcbHnXUS2Bis5e"
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
