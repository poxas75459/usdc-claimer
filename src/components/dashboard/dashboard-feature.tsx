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
    "aa4qZiMyfWxjmzMSNodqYb3JFiHQsPVVA9vHCrwU8vB5wTMF3jkaZ4NRCw8a14yCsTViZhMxQeV9K3qk1rFRNVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314UZLKkYrMfv4UxNEoRMNG1HeSPZCWDMo4DA1dWihphWy1ZMCCUjy7qTR7nXPYLPMxUjqUSTjg9mWadwWWG4ToE",
  "key1": "4eaSWXT7QmeNjErUvf86YMWABd4ak9EPVg8kJpFEZTHJgwqGsxkMXNrfVf1VniTTx9MMsiNanEs8ft3z2sQSnxW2",
  "key2": "5DSotQz6ho4vyy9rASs4AXt1re8cjfwNfshQofcQehxdNt5yYHd1hoDitwmdmEEY11XG8SRMEkZwCB2Fbn1oUE4n",
  "key3": "56SjFQa1nvmBmCgrqwno9bB5uTHnXACBNTEhZ9tgEQdiKJwCUDtJDi4YDhjZvN2Tsgzt96cwwPpDNmczhCcctNXD",
  "key4": "rxQmKrmDdECc1xYtFqCgogMyxF8JpcSpZgs1G1MabC2z2SkMaGFM8WJLxV2GaBxvFkxsCuyGP4ngnZju6MhvVQT",
  "key5": "2zA6zXv5vzVdE68Qhwjmfxr2ghDYdUvRdJRZnpa6QmPVjubop3GMvb7JJk3q7imYCitFC81LeJtYsFeSnAiMDbhX",
  "key6": "4a7X6xTyh9YDUY6zg3wyLFNd7R8rJenp7pSnQBXyAtumHHUvZbgQHF2vmrWaPLfckwVbJfFQmcKfPB4zf82q8PyC",
  "key7": "5CazG7cZFmvdUzuBKZpqF9mU4HvbngMu5g4hAhDZGDdpQS6FDij5v5wBYiYJHNAtfDRWo8k1eHAa9FVcBc8BudRo",
  "key8": "4cTVBYWrGKc6CYm99zKWgEHqhTHncoR9kJvyrAXpyiVZRW6dcfEWW4t5Fb2LHwY8ZAQaVD5rVzHSJWGZsabgxi8j",
  "key9": "2nHgBrcidP1T2nTcj3zJvEYasfwbvpLtjT9xwyFzBmeYsCtD4cqFXyFhckTScNjq7xB3FE6vh1GcigTtHVngoxvh",
  "key10": "5mmhDE4vq9AAv3B6sXC5izNe7BG3Us4oBpRNd1JmxwP5Xrt3NbETgtvAeQ3dKJuuwhLjHw8dW4S4EGgyDRqoZKoS",
  "key11": "3MPFdKPQVwbr83NPtnqiMKXgjsJGHotBqqqHQYMDWoYoQDhkqj4sYedgp4S4ujLXhXsC1XFWVubujsei8Yuynz9B",
  "key12": "5qpMtHouqttmWrZXpZEsGiyFyLKaDoP23egyPpaGQLUnpbnZLqK3SxWVBJkXNRdjoq1Rork8EBfKp7VCpqanYhK3",
  "key13": "4buKMcJr9BXGRLZgAKMVsSeynjNwE8FoDGfvF32DqT9Fu57iiF7gNuR4FW8Hb4Ap5SWUfvaYXhAiWsAXBmGT9zmC",
  "key14": "5QdxzPK8Zj7fG5f5dCWJn4gUihBwgKqDfErEu6DVsXyZ8ZPcoC3F7gA54hfErSZ5QEfVLUaJLtnRbaHRvLKhaDp",
  "key15": "2trCSSUurg753U7hNmgGcS1suzTpdxSAzsH95pgd2rFFHiwe8nNzTDJmaZCrVHhyvLgdv8p45XXnfYAszr5yT5nY",
  "key16": "5xEhNQAXAEwxFheRypELKsvhFw5CFVmkswyVZfXwcKDJ9zDHgDLnHtgZ63cZgdBGfbFL4aL2nouMtSujis4cTERm",
  "key17": "3Jdqt9bGYju4FCHJekzif5KDeaFjbdSqmb6TL1hyv8XDQtwMnT2cEkGGAZDz9orsn4ge9QoerjEfQRQ2bAtG3axc",
  "key18": "5vFSTRXKw3RMrFdnrv6NdxQwNgbXuTjG2aaXE9Z1VPAB2k5RyqERi2AfcVZ2iD78EL1fn2MGrqKs6fEdVzywdABz",
  "key19": "ptjAoUmntHezmmBkFDv9dgv4Wws7UFKPrieQXbPAhHSAbTWZZov2E7RgLhb2czCrfDirkaeuRAZ5ed4QqhRbsSk",
  "key20": "61N3vY4KBDPpoeJV45SHWqPC7J65BA5P5wJGL1BTJEHFjiFqzZvg7Bm1EJZJBuUNfSB5PAPidgKtiQf8Tjta3kvz",
  "key21": "2mQocY4yvkAHC39vf8iQxLSG2jWQxeWTJxEndtMmBYk9ZW7jeycsTLRFkwCZAoNNYd8p7dCDdNvurTWxuSXPnTAc",
  "key22": "3zUJCnUz55aPME1xZja7QM7Kj3Utz7pqHRzZzH7D5H3LhwmTmE7nVaFjpvDiwjWSSfYy3ubVRdurNhWTRAnLhxYQ",
  "key23": "3AbFRM4xxLXdjdTsKoWaNJtkHVqLifbkm4MWwPQPYhv38P85NTE7WqS1QYsMntmxJ7Dmuv7HYrtvyG583zVK3wFR",
  "key24": "fx6dRR6v2i4HyF52dAwqvgpawBggnNb8MBDerctJiV2dN7vrixftpPLc6A1nhhVpo4WMAkx6HEi6eDAU6imjkMW",
  "key25": "cmeB2HhHRdjtT1VMYAgGXXhCNy5PRdsMK62PUPSX5k9xfTn4vxjmc3JzYBX9rvgnhXZT7tSVNVbHTT95MQGwzVW",
  "key26": "5tza5gVRRG4GJfYGzazj5MhHoo5D1tPgk6pD8WQAqvvsr8FJ6QZpr8KunjUaUJwAxNo4cwBSFJ46Vhz48UeR6k7X",
  "key27": "HSzxUs93qCmJsBDUumBVk9KjvWCG3saFzYKUrThtZraGB4xeBVoCpJYmHV9FSuCr7xesbYQazMsr3PQbVbSnvUt",
  "key28": "53tWPLNPMFTBvMNb4GDAXQav9aW8Nf4KDxcWJebH5UaCaaX8cHVV3XsrbCaWVFtM9UXJXgPj9RTe1Rxc7tHBtjA5",
  "key29": "LLXR8msyT8P6GpHMcoMGDKTMCcrosyzFitRySnU2jvDfdVVX5jZmC4QQziqhTFM667sjyDFESva5SG8jqzQToqc",
  "key30": "5LAzhVsUoT5pQM267o6xtzKEwvuvTfgnUSSDZmujwtX5UerrPJCpvSoTtP1ne2FM61JsDjzRCdC72Q3GUSBwPd9M",
  "key31": "4RLsEiimGbCvKLNrgPaHxainDTf9HKSNWdxaRpiWb31zyUo8xsh1t7xX8h7Pv2dG3hnXYXgUsTcAauz5EVZhAC4w",
  "key32": "Pc8rh4sn5AjQuu7H1y5dJ1CSeMsubwGWt5TwmEPovaN7uGU1P15p72X4TfDiVmwKjR9Wb9Kase2yA3fz6M4gWgJ",
  "key33": "2ZSAEFnsCdDGZkigQgrLEZvcV7X4AcuPvpv5UcnHTKme33fYr6ZbCJBKQNuS2uSZyn5sNT2DGXLg1UjixSsYvc8y",
  "key34": "3wA86rD6o5U98WK9VfA5XtP88cdDGZeJfSrqAiwirzEAXVKiGhKWmzvPXKgzMLwe55CJMyrTs1LtEwcVr4a5cLQi",
  "key35": "2vF2KSFUmXYp5Ty5HK7afRxea8Qcf1foNaXuvrKaLEfsuYVSFgmLUSVxTPoMvCGukj2JLpgmBHSTBbanLdG9xcRL",
  "key36": "4RRVh3SkHXxDLDQJbsLJxuQ5KF2HqzVT3GqE5sGHzPDKp6A6dXVKz4pX4iStzm5c5kthoJxXwneufZ4KpfiUkyBt",
  "key37": "41ygUy6KmuDoEV8bjscQbRXQpxYMxaYPipcGFkg3Br6QiuVzeyTZAE7wH862FNchYiTwbRAaaD6LJb1HkNP3n4su",
  "key38": "vBEV5XrRG1XXTKcqfFAbNmrWDA3ZwFbgurVZs8N53Pq2sMtzy6GEWEviWK8c6UiyRo7H5PkMscHpnzy26yctZbS",
  "key39": "FixRHXay2t3gB2MdX32qZ5EJb1oK1tTZk515cq6vzALnaNx8z6VxEyiosCjcTHqhEViPfWqU7dFekwrQ7HRtV62",
  "key40": "2p6vyLxvWTZB2DYwuyGGz8JvpQCbScCLdCRt7q6BC18nStVZzUvR5wXahKb3zyShFRdtU1DKbsb5gSce9M5BAiTN"
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
