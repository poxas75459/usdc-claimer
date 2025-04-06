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
    "9HvZwBkE8JDYviG1hJgzBSGcgSdfGEX2zuhtFtNhWxPWBeM7i5DeeU9r82qsC9rK4kdqBE8rdDWntQwXYsamYir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPJPA8Mh2QTAkBe6LBUjk7QHboMuR8tLmfvhtPoTuydE5Zrgr6GsSn5ccgZ3abxS5EkXRtgxrEEBXCxzdcMWRJQ",
  "key1": "49bEUefMApiSqYQkjF4GiLTn5ytcr1DAJNoig5w7KpmpYEJJucAeZGC8wwYyN8DyJWhCHxEtDHa8FxgnanzvwHmT",
  "key2": "526CpqT5jCh6SH1G2JztLpmKEaKFyGxm5vCkjYBx7WM3fSH3WdLHjG89xWm5tiCnroZ4PfCwSTXcKyg9C5uMqcZV",
  "key3": "47HcRzqAWqrUWcZg2wFAAtPNPzy5aRk8JDFVFsB2ifw1tmFwFWSbM7yNVVTeYTrVUn6JcbyS4oB5i2N1mV3pfRbH",
  "key4": "3a87nA4FeAo5Ubtp8FXN6FC2kz2mAKZKRA2nMM8Str7XPLkeTD2Hv6oZkNoPASFMHDv1UTF7nXCQ3GfXpnQ41BZE",
  "key5": "3ycdozANDuhv2jzjb18h5eMjFZLdGJtddGLNWuic5wCA2xKamFLxbJ25bYRA85AVquMDNVFizQcYKGs4zNrhdeBx",
  "key6": "4mD9kobZyiybhudmdeam7zQAHz3jN1d2yM7ccL4mYY24wgbN4mKH2QMHWu4ChCTcVYjFFaYaG7MfkvJV7ZYNcrU3",
  "key7": "4SYrX4T3gAXzu8kxDfEnhFb4xWcZoCDzokPMS19B6rFmQTYBwtU9NJnvy7QdVAhQGgJx5mJbL3ctc47PFKt8Bh3Y",
  "key8": "2rU1m6MeDamuTosj9Ke7RkuZMLX8iHAuw9zXUxLHuXjm8tp8z6e4RCbV6yQiqWMztZvvAYAukk6zok2dLed6mdRb",
  "key9": "3q4Sgih3RFQiW7RdNn1A9EijrAHxFboUxT7PzL4qY9U5NXXMTJvs7V7pLimyYhW11HVs1piqseB9gnwAW7xyFgFs",
  "key10": "4vcLe3n9iVHA1r8ZvzyAMia62jVJ3uwQ4e4ebKGjLa2vpccsHZKWmjGekhAfreHaaRXtoJ2nW3REifaHWgAeBYbD",
  "key11": "5qszuFCYkCMD87wry8Qf1vEvwNXKukEsUxRdZ68qcMnqx4TQheMQDwNDm2XqBFYbFuTqwwKjCpd6uRqKTuVQcYRg",
  "key12": "5NrxQ7KE9kj5bCiJVwimmuEk2Q9H3ciTpFKsAkmrhWrZJiQobywxzuoaahfSTS5wN9bpCJ9s3pQYix9vWmxcea6n",
  "key13": "3tKxwiE3H3We9TTsgSPqYwMaHuKFY9diHgeLegzkQPdj3EMiDxZwoQEereFGQrTbHn9SSxXPcDJAadV32d6LtxuV",
  "key14": "4skFrPeidwPzvRUiqkzX8cnrXWrYN8yuuoi4zf1H9CHtBeiYZpgr21iXZaLhNT1CTmMc7zaeSr1zAhy5Nw6a29bN",
  "key15": "r2oo5Nzzyz7rEfG5Nn5RQ6R7RJJf6AhR87s9pGzwDCQGP2osK3oeLGbHKpVYxmpdSjcdEFoeos92mSJqhdiMgy9",
  "key16": "2riEwazvxhfXM7tt9WaR7eRiPyaf18RodDfg2X41t9d5rN59scYdMN8uTJ5ryZUMzRAzbwP8WjZhAowcjeyXo1GU",
  "key17": "5W9PUZ8hAXHtcHqXjCPj4FHczDYbTMteKoxzQ4WTp7CKYcA6ow7mSHQmwDD9D9o9rRQ5qiwbVBpvgR1p9SjZe35n",
  "key18": "4URWwQnneJTNX2fahPkRwu1fa8BGxSgNV5cAKXFHmQfQ4bXam5ru4gSAEk9RB1jH2s7WUG7PFhC8kMpJHi94Z8Sm",
  "key19": "4AqLjN8FHPyqpZFNavarCpiyB9J9dsgj4mcpisgyWvfCFZ4xDMGLqcg18vMzoQcHiXStrUjsv4rgUqqTkQA6tpge",
  "key20": "5znwvuiHmq48gxvpviMKPXhyw4HA2mA3MMDLUykyZhYXBBFSAWi93uEdnWa7uxB5VR2EJXYGK37WcNKD2fRwa3RN",
  "key21": "3n8vpavMfiibudtvrc9wPTgAgUYFrggRjMB2Rz6xpo8ogGAShCEWkcdGzfQ3u17jaX1LdXuk8nBNdin1xNUf44kj",
  "key22": "3TjkAijGdDKqkUjyY2cMND22aDQ6SiJvW7zkkLzx3NSc3vbRQx7i5nFz995cLHVDF2uo2MSVGiLnN473YCV3k5FR",
  "key23": "2s8cLxQtmrtkVZ832U3woKG2B58V6qLPuDxA5BTa3gCiYqnhU85KnhJXiXaRNzLuaVaPYCkuhYpkQUwBzferuv2u",
  "key24": "7EVMJa9ZW4PA2ZuZhdkW3zhm9hvXczYkVN4z9pMDWUB5PGhCN65J9ss3nUNgRZg5sqknGQoex4CkYXreeBcds1N",
  "key25": "2pHDNpGZQjZkSEu5nZCDfHs5C6ZbMAxqY2JJE3KjEpEHWP2G9onCGGHNHKcVdg2oJszgMBDihrDXsMwcXNmfX1gF",
  "key26": "63W3YCER3FcXKiTZ2PUVsnFaeLMDWyYK6f8PfRiBiRFAMitYto6sidcLdk8wcnXgEbhSyhy4Xqg5jz13CdnkX3qw",
  "key27": "4n8XEbuQqc8RixMzBnPSyVnfYJTQQatzAemHUADDehHYYCpdqwywKzo2nPzKs7KDNAdxtsdZjuZ82dpjZ39bML5j",
  "key28": "25ax2Ba92guXZKjzSVyCxgjXDSjtj6TXtYELqvj4FhsDtsuuNKLf3PNumhg4CjDojH8vHd6FtWZhtHXp3N31XeP7",
  "key29": "4TKWTZR1VV7tK4ET1Fra4VQKRHX1RwoXTrYDaZUz42y4Xq1tCjWGbogTpjEueyZPsRHfFyng8VApDB82Q58Gop3Z",
  "key30": "3ZBdimwBCMiSWmqMnzyFw2a9xqwQLoQdpTy65zedMXmF3uT28ZgXbwWKQRCB9w79n6C4MZFZjux8awrHFSfFViL9",
  "key31": "69YnV3yGiQF5xa3AHw7gaz3t3vRsv4xByN7XCMA2X3Bg617Ew9k1xBBuED7Xs2bkyuTif3vumj5n9v6jrHTuMPr",
  "key32": "3d6fQUg4TVqVj3VpjojSgri6JwEBNMwoeTzX6k8PdUnYdAkbkodeR328ymb11hSpGknAQ11DsQUAWVGfSixS7NNW",
  "key33": "39UgoGPPfUc3Vep7jvYrTst9QG3e75wr6ohSDY6JoRzh6285Kdg2Mbhp5e8PapadTHNxy7J1edzHQhjTrkT54vg1",
  "key34": "41xUauz2rhSrwyFVUkkvnqGu2ERz1Fw92XjweJzX49e7zkafd2e7huMDAjZoYXgCGBkJAdjomfk6JR9Cq82xd3s7",
  "key35": "3FGt9AEPrQVLsi3vSyRvKWeukR6Jpzb2Vw3ztZnKR7CwGSD5gp2VCkELqEM97snBgggqJGQcSWXT2S25A5XN3cs6",
  "key36": "4FZbmtTBky4fcPWa9fNg8m4G559WYBQq3k6aejuR6PC4PTbUETR34a1pLGUimyt8dK37Pqb52hoaswgjgxXchrZP",
  "key37": "2R1SMpTqASxik8ADMPtYm7rknxex7ghEdc2U988apNovf5xTvvJdaPBMPBo3oHGSd7rGwD3cq64pmRJQbadruoTv",
  "key38": "6894kD9AACttoEiur3nm5UJ7X7jJaAG9dZQ7JsiUcW3DAUNbRUjyoNzrodG2ocbtZKgVFhHZLRgzqtgR3VfCYY6",
  "key39": "4iuZ8wJjx3NsB2VacpHspy1C5Urs4Zr8sYWoHqjwsQFq6ngkbLM6BKAADsmetRnQhKw8yX3eGB7HrcSkeuLkuKRn",
  "key40": "2ntnaqQ7uABMq9ihzhwvQnkphv8nik8wZaBQiva9QqqA5CMTtbmoZNjiWKGYogdDqyhqVtWcUqc6W3fFnXVG9gc1",
  "key41": "5APJ3nXVgEzt36rTbeFo69NZs8gyFMcaYU49H8gzSsz3nVch5pf1r68vHr1XztKrAcFB3HKeZVNTnxw1dTadV7LQ"
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
