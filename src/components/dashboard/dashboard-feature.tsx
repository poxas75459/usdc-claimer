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
    "pXKJJgT9yVbGQDDXxRzCXESG9Yjtk7d7uxgoDhG61uHFDsqhzMWxNyjJv5mQmZuHXT27HVPrTC3HQ8eGCe7Wrqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QTKTcW5o78XLV4Q5dV5GUtZx2pXBXicyEf2vm4LcDvcfWRRF9LWkg2ETz5a1kHuB62sc2Ux8PmpmAfKKywro4KT",
  "key1": "4bBTiMc3r76QgMa2dHZqCC9grTYw7SecjhXC8RF9D2Q6JrwrVbJuXa2Gf1HPMgE137tKaWqaXaBByRLJn2gNgn8f",
  "key2": "3vn7FQz9LkwNfC8ct8fmbCJx62ZxG49ZDodvkBr9vL57DTYp7QDhHLTei7amLK3HZWMspxro3mi2GDMe7tuy73fV",
  "key3": "2J42R5QREX276m8JKS2UbQEaywbfZf41bMeZb4LAX5rbRkhaVkiz8o7xdb3JvMYKVNKbkntLQRw7nyF8SZAEVmtw",
  "key4": "4yj4w88mTPTYr1Cm8E8uUtYkisoTUtgbFEHrkNxbdpRNpdPL9k5TjKo15Y6MdBeEGzfEDptsUA31guZKTaV2nUM",
  "key5": "3kGMJ1onD9LqukunyjhoPqfSCkGKYVcZbGAEoN54GL2rVYNq795mNHupQVZghE26NviNsuE3XG7CvsbF9w7ixoox",
  "key6": "3QWfihBj9Q6Wn78e3wTvhwQTbUw3vDPDQbRHKKKqQSssrbTapXUyziPLrMJ14YDVTxPv8z6wyES95ED1AJUDuwJk",
  "key7": "2EnqoMxHJiNiZooK4n118QaV5Cs5Zsh9oGjEvqq9r2dLdSPtbYfw8TtpVwdVPtXbJ576yU2ZxVfJQxJqM1M7TFaN",
  "key8": "4ZnNXoK2hFm3a2zs375Xa8bs5S4Hkeua7F9SjnbFP7srvqogREsq5frhEZBtW9GfJegK6S61veM3ra1QVsGX3w8W",
  "key9": "2HV7jpA29svMgnZp8L87XwBiXSbPwcDa94C3o8CzYjnNsJJjKPrWkxqkritQSX3n4piGems6s4NVpcV7x46o53EX",
  "key10": "1GRi4CfBDKDziCmDdc4f7y8pZFaRQSCWMqcXMPg4LkBhPznrzfJhpJMDt4oGBYpvsga9pUSb72wPKLD6hsubir4",
  "key11": "2aneTWuPE2uL8Dna4WMvZSB6sZ8hyD59PtR255tWkWeHxs9JNMToP9LSQdz1fNfVGX9u4BJaebQkbULefj43ncZX",
  "key12": "J5VrjdHo7vMA5SiVjCDcsRWxhRziswReqaTVotfNEUMrjg3NmNDf7EXgZMCKzy1EXhae21kb9334SSTSNhVs83R",
  "key13": "43n7QF75BLPF5iCQyQoWyodiqkJx7ps5ng2ASq9jkLS4xB9Y2ExBUBrjVJFos88xxoYS3pnXHyB2r7Y3kb3TZNHQ",
  "key14": "2N2NAeDB7wCZB4YuATThk55GAbHp4WMDNcap8EYmteH1eQdRPN8CViYWSzpzg6bKrmJbjLAM2PD6ey8wuJkwDRXx",
  "key15": "2YtjgkfWRmwkZnF4QM63qzbEhwLjtsYCahKNj76vvenntNVEPR6eTbS31ytDyUULWxtv5HuZmsEtndP7dWaQaJQU",
  "key16": "iGpwM8Dsg24ceo79VNtt8EJKedgHPxzWWPmgGThGRsztyKFGYKMCYDubhGdU8LiUhpw1CHFZhsy13M7GBcEvdTf",
  "key17": "3j6vVGhgEWotFfthrMUu3Pk2AWozpZjKYiqxK7ek8y75axWqoujdJ2nPDdXmAqPswU9xoo3bY8bMbVQmLseUydjf",
  "key18": "4LaVkXbyKT6ESR1CXsr2sqsanDGhBQ4224EjSoiC6UFMDM78Lws7JtxyjKVFZ73EoG26mBgKzXut1m6dDVqKpUtE",
  "key19": "hU1kMRyBBBz19WArvQrY2abjxs3hgsBPbGKX6o3WgtnrBhVD1WHx3zB8Cm8RREo8ABNMdLppAfARmjiidKqtgS6",
  "key20": "2VYv2ZMGvyPspoDjyBnBNfiEaVDMMypFRhKZk5KrJmjxovpCYSymAzFNBRxAHmPya4wCDtGGteQSBBNMygDovdEN",
  "key21": "2NbwFMRms3Qn58mtNJBP1jz3cioYdV4uL4vSMVLiSmM2Qqxok1mdHWrv98kCTfEuGa2wDzrScDDki8Tcvi1KChyR",
  "key22": "3XfTSr6bSw8YPvf6wRarGPGqcLTerkjYK426zofszikgHZdJutGZr7WK9vq7gQAaogUyec2nPpm7Y4Tx5yGiypTF",
  "key23": "TezBJ8paLvcgomJHR2cM2j4GwPS58JmaumpZMHvJcpL3gvvzBa8xR9HPPNqTBR25QUKtv91AwewXvK4u6K7iMjD",
  "key24": "2pk15QBH8g28YqtVPvYyGXAzSff1JHSVaqVjqJPgCihcwJBcJ6ng8XLMJGup1ne9dqoektqfpCz82Ljkzx6UvwQe",
  "key25": "4tj2vHX1JzGdHwEM8a24ZkRio5BYvVMPXa8eVurtmrDVX6C2gdTnXFUNgSvGfT4MncCgHCZZs5TcgJqYmt1eWzAL",
  "key26": "SA8KkkYcu3j6V9yaf3gxuXksyj9b1q36rTFDRwdiLkqhykvFiErUdSkCD3KHTgae1w7wDH3F5d9VUuvxSB3ydrp",
  "key27": "5bPyKfnbdPGgM5ykjqBzSWMBbRtM3v7s232JQ63NdSgAGTPAGXvnWv6fmrkuEho2BWn92PEZL6efrHXfk2JTztrT",
  "key28": "2HxAZPAbumkccBNMqFskrLfcqhtXXaNRuXgMh3HcBFFoTrFVWzKDWNtqAGxyktYW1zDfjDWG3JWzRuDvtW4MoVDr",
  "key29": "2KwLE4kNPTBHb4Jeh1hXRQXu6Psyq4ufmUTYcriZW1kEtvCsQ7KbCvuDuJ2oFUVDQu8oRM9KvbRSVmfKYj2umsnB",
  "key30": "4FcGS5C3XxQhud5kJReZYCCq6QoDcMpFdSU4gRs6kcZcPcvXc2gMCFYa6h7AntESSky56GWe7a89UvryZ5yw9WF2",
  "key31": "57URohofdheg9tDtSYiUpsyDiG71EgBA6CRQ62ioRGEHpPwSa6SqACTFzJFjXgpv2wzrBjjp6Kywq6AUL4GXB5an",
  "key32": "34xvMsMJZwBUNVdsMLjfNUzF7ifVFLkXWnYmzHhr5sTVhmSA5w6Px82iSZFphTYfVCsLdhPpDbgL8eqrfmbWSf3d",
  "key33": "43eofhc42VX436xsvvoPv7W2P29vcTAU3X4jVZgPTCWne2nGfFjUc1MA8pUoREXqMKi548VU8cw4Jpz2PTHhybt5",
  "key34": "4CZg8pnT5tGo15yw1zTfcrLN5pbe3rgsFL5rTM2A7ky5TFqMmxGXJ2Vo7zW6rnZaJxxgbohNVKMzJckt4UyxhDCQ",
  "key35": "3BaVnuW7DE9ixeSpLkRxmiez9yhQGf3g5NBTTzUQPyemQ8iKwJvrebkVTpVKiytEfXBVTj6CoQ3AhBHJbv7wm5aP",
  "key36": "WKQKf2RKytPRUuBcvNLRp7EL3RQykaPBJKhxdp1uLq8AUD84wmrkaJ5fPitba1ZjMRt82h3irc8i49TupPajQPm",
  "key37": "5hJHbtDNyj8SWpENSH5mrz7mLidX2w2t1aCdpvq9oYaNfsoLaSobWGZRqvBRyrxHr5kpKjKqQtMfYwxdjuMzCVJz",
  "key38": "5ne2Dra6xzGbivg1QzkrACqZhVhZU55KQTYLTYo48vKyWJcoEWRauNCaYyoef2KC4BBMKxysaWaP5yLY7iJ9W7Nq",
  "key39": "sBg2GVvTjP5xJZNvRFeSzxkkWcnWYfzZhW9AZmu6AGBCLQyxNjrS6aYXhMTDefSKKeioYr1dFkUqbFyWM8DXVqw",
  "key40": "5usJ2D3JmZ7hjNKGfQj3ZJE7HG4oXrRZT9ZHexeUJe46TvUtShVAp6KmPHbYVpsLLFXarsLsRyjr5GuYGuGbzLr5",
  "key41": "2kUo1826YrtTratSvMoT5cyYtNKQZggMf1wDoHKENRGGkcUtgBK9zYexMdyVPfhTXW6dzQZyP1UUuQQtHkA3yi2j",
  "key42": "4XJ9fekDYmZhwQ5XfExhzmPqAwY2JsMyMLZonU78JAumhf74f6iUVyT5T2JnBGtroTsCH1R6vThyMptNFh3i9UzN",
  "key43": "2iNvMph43ycsWCy8w1fXC6KhgL2Ex8CK2agNBFC62VcfZKXuQfm1kjWwRdNpmRS4UMrsYyRDUFABNdioiv2aoNhR"
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
