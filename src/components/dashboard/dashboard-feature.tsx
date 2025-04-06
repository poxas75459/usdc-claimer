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
    "2pV6yVnmNzfGsPmCQ4H7xueTJjmVARnKs916oRLyRqmP2utFZ8Mb176D86KB8EUxykbx3YeTkiA1MCJHSYrRjL8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7mNMv35AkhVSVrxSRXqxWA8ZFgN9TQuCiRwdfbRxbbhKwwNwt4LVUCCS1rLjZ2TzgQZubJaTdhhd9fcaVMY9Kx",
  "key1": "5QpjM5SLHL3SNDt6qrGcfa9ydPxgazAAczenGfgkAK7VsJ8V4tq243dNDXM9WTtuhAgKdCi2qZ8aTxz5pVwpTBMK",
  "key2": "5Bhjph4YAGmuoEMTgmHdYp8jt1EyaLwYNKCgf7qN1jS6raKg1TjzUfeTZU371SSY1xPZu1goWJEPRNM4WJujT2U",
  "key3": "4NJ6vHhzWYmrfqRZ8jEvr6AuKcUxm45o4NpW3o74Ti4rPcNmEeQ8p6Ggfg4jsuNcbPPEp9J8MegoJr1gtQmmhaH2",
  "key4": "38rviTF7v3i9RYxA8ndVEwrwSUHdfU6u9bGNJj3F9sTaw6tAcfbJoZMJNnW2LXuRoTuVfq8MPCx74HK2MVaBALX2",
  "key5": "4Vqv9PpobsahZbRMQVJZSXFVuPTcdYUzgBLJRGca9nSzjN8JqeaHTFSmGQDrY4nLUEuoYmQwmPvJ5eNZdQdGL8U1",
  "key6": "5pJMfLcLpRAeeS5posSbtvBCuvFEsxCQL5EaDuVVEg8eb3L7wmPCGUDcXNCnQ37rdDKSEFU71JCV7RHA9GWidPGU",
  "key7": "3tfEL2EwmhomctwukEmP4488K7dbdvh3VJ2hwg7xKmGTptfwwU4b9xGYEWrcw4c7aRqYQQVXvAXD81QH1HzoJUbb",
  "key8": "4meXuX2iHnMKs6tnywLvi9EQLEf9MF4v3HVJjZnZv6qv6NWT21dp1PmrA57jvZfHVwsmY7jHchzkchnEAjr5VN7F",
  "key9": "WxYw1zcuM5rYUXUQSpSn14evp5AS3HfjCFKE99egkvc7ko2kRfNXu6jj2pRAsKbtcKe6mVoKVWienj3vsgvrJF4",
  "key10": "3JwLm57ktjbGKySPkQ3UWbx6XyXvz69D4kvPwd6dEXHyz4TfMuxHbEMyGDfDs7a1GS9LjMx7TbJgExNRzAvnb5Tz",
  "key11": "2FWxGhhhxu8DxvDHNJwV6azuWnTFSAWPBBbdGypGxorBt47MsTL4jnvRNtzRC5qvWhqQEH6aes1hxSHcCnuBSqzp",
  "key12": "4wqABXycjhktPNR88qT34WFYMwF1ZKHQRxw9ZsjUMnWAJzF65gZzomjVtea6YKKo2HN7yXzY4K9bUCZHW9ugD2Ku",
  "key13": "4pfyP23teuLn4QiehX8q3ZtssSjz2T8vkYRKvCMvTWoyJqF6EdA8gCdBWXRFDEPfHMdXneHE5y4pSwuZTNK8pZje",
  "key14": "5gAa2NkodVAkgL1uryN5n7UTU8yUhWiqsMg4dfwX3NErWvfj7padvfMRMDHzAPStjuJgHdKJqjgjfe811Rxyncjf",
  "key15": "s6izdd3XHz3CBCVxQaeWC9K2c8g6Ave9LebV7owriwKfr5x7s7xfhHRVFAApBnn4mdwDvEmqWjdfZJyRA2fB4BT",
  "key16": "2HFSEMYpXFXqtrSeyFgWsJi2VKdAUNwBBqiYPik6RU8yq1imQd1aBD8SV4cnoaVA3Je1BNMngeG5n1XN6uNGHkyU",
  "key17": "25aHmx7fkSvzLofGgkraeKujmuFh7yHhFbrJdEvnB9dLuikG4HgNCCYnCWpPwEbmAzsmm2YvqtDYiNgmWPRnndaN",
  "key18": "NqYNS2gG3pwGKLSfrkp81Tujutp781TR7DTEYgVa2tqMVHRagq5qxhBgRB2MnVZWDr2da9xpKd7BxKke5h9a7cn",
  "key19": "2qyGLkukM6HhANKo5kumX1DyZQJZaJjwmhUCh8rBe23Qo1Tpu3uLMg8uV8QinUEdqEDbV346VM5HD9r1pa3343nY",
  "key20": "2wnQrEhnhmuzVv9qkdwdCm99BSn7SfFFELwg5A4wYBXSfUqfkJdeQT2Mi1aPBnK29HEh9bpTJkeTtBiTsdoD5wjw",
  "key21": "AcYJQMNzvfS8YsduDA3Bt4m4S9aUJqy9sjxCBQVGAnZUthsEqEXFsSstbaN9owywDJuoxkNQart7s5Y23NjAMvF",
  "key22": "uJZG1KFZ4LpdGzcpdVuQtjDTWNishW9mBChErS7tVCGUF1asZig55JpnJAoTvQkKtbiZaJvo3YtiViRH1tQpVXi",
  "key23": "3ZjAoBkuBwFdEiAVgXEKUcMZu5dmcERb7ZtFXKZxoqSRo8LhhKjovXo444YcfW7XxKUcTXUa7ENTEqGSyWkiGAY3",
  "key24": "3NhMYQDL6kJfTCuGHpkHNM9ZJcWpVfRxUg3rU5kr37FyWa5eKSbpPBJiaTw47YM8TZ7JphX1Fp71z6LxhGnujFGn",
  "key25": "332oBEC8NQUhy8wBaj4eCRDyHEPpRnzdcQo9tAKgj5o429LrBptDXKXds3xq4pv6hzJnGv2ftmFrHbRfk23cTU2a",
  "key26": "3SpAatn8TSatmE1iwRJd5tAYB1mJDDrLufG7tURXLmGZ8Jzn3jPPrBnoM1XnZEjNTjz5cgGoA7TeBdhaV3gEx33h",
  "key27": "3oBqtamUhc5qi96GKdHWJXyG4FQ7EEPRh4PMgppSnY4aCg8D5cDeAMMvSYtYb2oTURH2DD6LcAgQ164J1y3z8EAC",
  "key28": "2JRV45KHXmtCxsLjbgRAbGXoByx8EAXwDo3SzJRZARajEEZJoSj7xMEPv3zBCiDnekrmMjLsFj6rnTAfV85GqeUm",
  "key29": "2HWpEn7a8QopprhD5HzAUzK8GcnxgsGfD948CTYwPJ5GGUZUJ9y62VTowaphnSFtQvNUEd1Vr5jMgwffHWNiRFbn",
  "key30": "2qrpA2DZoBcnQ3gGmNaGpCz5wJEuH7a6QowwTX8bWUMheeYQXJniunTNP4B3CW3u1eEhHDgrpt3kMSSuD7Z68uT8",
  "key31": "4Tkzf9j85pGy3uCTvezEMUF9r586tiFnYRwpCC1qJuSF2Zk7bwSmaMq2mEwPzeYKUSY8XE6hpyLuGSfgmL5yjVkG",
  "key32": "2cUWBmEoCvvL9z5GauQXTG3oEGvbKNaK8xTU7p42fiYHHhwN5a7GzYafuCRSgPnoinrBgC1HsBypQbJ5cNnEZe4q",
  "key33": "3fDDzVyhQ66M8HQ1C8bg7hbB2Y629k9BqTKyBsUKhApHbM76DBMG51bXHB9YrY85K8VLasaQ5kHUb8tBu9sJka6q",
  "key34": "DKoRuURFiyk7MPX9R3oVC2115tf1BQegMp9iDdvY9uyqdgDSJ4eKT5ACdfXuSMajofekAtLevLJjfHBiSok1ykT",
  "key35": "2bZtzVr3Lx43wjTg7SfShFe5iZ4k73Wif4ybAP3htUme7uACzaukAqKcoHB3XxDgcfJkHQj9e7odE4N2vXMjvnuw",
  "key36": "3P6Wpfh3qaeT5vu4qGXGyfaJdfBWv4jY7A1j7pLsMta18Mzex9fyUg6YGvMJa1dCANiKbKnUPiUnLygQW4QaSGkK"
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
