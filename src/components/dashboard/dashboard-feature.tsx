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
    "3nXjMvBpsB6bWS12hbTsdHwtz2Q9vEidCMnnX25Wbvj9t8qp6rEw9iJ8EzTWsJ66yLgfpXwnvjFrtVEaLV6ZZE49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btkHHQxxMcfjLhGDGsRfBcxhG41Gt7pxSaUStayCDnAHkJW2Mvzr514Ehp22C8yuQDxnwZ6qPdGEjn4AFFa79Ee",
  "key1": "2dL9FYfm3q8oKXNiAyHNSmZVft6isGJ7zJeABe6f7ZDfHUPRKoSDVA9hXkaBGrMA9RtV1BooguJHdzENqfQfePun",
  "key2": "4sE3Z8nmYUm3n9Dgpe2uMMR5gfKabceF2aT3mMKazyUcAC1C51qfeRu5VXmomQYqm2trhWeJiJmhHwUL1317NnLg",
  "key3": "41hXxeicnvNt8E1tqbYsKcDgHkWKxpFCUGudW9LrxfJEcvoQAkqCbUcWNF55Nbj4fSXdR7Cv9jDZ6KZTrvt84MNn",
  "key4": "p4vRutUra1WXM9qih6x3QCnYLF5DfxzNV2qZYjw6UvQADFj6X6eEcrDubpqrCsjyLpGHJv2SMX7jZpDQmLQgmnw",
  "key5": "4F8dMMLaXNeW3RpNZXrq79dZRGt2YpEGKWrSv29oRZgZUi1cLUYdTbC2bwkss76AWjyT4iDXjkMvjzcJLv5omBFL",
  "key6": "4DegRtPhR6e9ZyDLMPB3vaZPnvaUVC7kJQiHBYMhCRi9yLM1XcysW2D2efdXXv9trYyW2S3WugPNuYxC8JVseuGr",
  "key7": "4USTtBVYuSjupd45vbXAtzRomwpLCRUAsQ6SvTna3kcm6PYEmVYJwiUUcFmVYFCdUqt5cTzWNS9in9F1VaCP9QjN",
  "key8": "4re3CjmN3rSSqcWBBwYKjsBvHPYpXSow4yTb4BfX2ZBvtVcUncXJGtdZrbCtxrQxrSiRbcr1rMNQ4eGxrT8arTH7",
  "key9": "aANUUCz1NYUaQti7vDZycdmH2yua43EtRNGYYyKS6tpnjvPVwXFq9NUPQyVuDMYjFrXroNyBXPfjokbit74Ut4Y",
  "key10": "2K2GvoaikrYuLg2wG3ZRGJ4NdsLcBy4JFDqWTVM3cvJFqDCtRSZLepdvbzsdJL3yCxqmEjx3FtQcyK5Tu1rk2RKi",
  "key11": "3H1c93yu4gvLJDzJZQ3wLo1XV31RPedDhpj2VEdz3TnJfNJKC9zBDxunbdajwbF77czTXUUMoM3GTNmYYotTGWuc",
  "key12": "3Tq8PRBgqV6Qb7b1aW6bC6qZWrUn1a6Ews6SrpQrRHmqGY3sGEVGKwnqdPRJdBFPmZ9Nv3TqnpYc2kUZ5TAtRb33",
  "key13": "3jbpMuhJvnAvkxouHZ7VCRiRkaSi7HLzBp3ztQJRtBwDoNyyL6WpmirghSkBrbvVADYtAVRHZiE8vudvPD4nE2Jh",
  "key14": "2Z4g4Zik7x9DwVqXMMfccWoUuNUJ3goXGqEwCqKNPC3Q7SvuXpz6kbEVyRApUiWEidgLHjXMGUDUn9az5JKLb8Q2",
  "key15": "2cwYbDocy4htGyxHdyNRHJrnnvW2f92F1aXXQ6gxxT7JgQpXLUR9Zcn4LZQ7NapyhscTyeMd5rDsCH2hncXVXQP9",
  "key16": "txPRXAeC1kePYqaCC7XGKpas582jC9JS4A5zrhZxwpK4VX1FHT9PtpaSEN61mxUg7hZCNauRMxh1tGETQsQqcrL",
  "key17": "673qYnCFAY6ptXV85THi6CmP6yiVqxvYbKd7MeXefLFynKQdGi4VwUk8JTSuV2Y55gNW1CmdMUjAvP6uYuY6kEAs",
  "key18": "5EivAWAYdyivMHv1Z1RoGbj7VGuieCq9TiGD2SeqWYkAR87AoG1rtCi1a3fpiVZ8maahPZUK8zFKP7wNn6s7SFzZ",
  "key19": "5nm8S3mLLGpnYkie14bBcuE4v5yHsaKzNbcdkGMFtrQ7A6wzX7KQsYgBxv2pwN1gnf3wpyjW55trj7q22uci8Yye",
  "key20": "5aD4Bf4obDRBgN2JhQ261pkCqBrF9sGBeGRkZ4Wq8nSV3f7dfoZVRygkwd1sUmionLu99JWtuSoUPDKGzRpWdCiE",
  "key21": "3QYuHhCLCkmPkehiN6h8d9DJttovkMLd6EmQKpkHB8dXLatYdoNYWjDdwRodeKaP3VgUP4o4fJa5cSTvRPzm7iFP",
  "key22": "5nxPKFWyqJdtQuUB2SiraYh7LjQCKaaShS2VFQqUpU91NLJ9vFnCL254eca5u9mc8XXV54u9BdxxQJ7DHzhTLjeE",
  "key23": "A6sGKzH7KrLUvF1XMbED9M5YpsGKPmMxzSMbdAHqaz9w68SdCkHtc3itQxrpAviaUkUYZ4UVuxVUwNQfpbpDLg2",
  "key24": "fdk76ZgPn1dYgpqkLEZAuv3NqqrctJBCJUwnDEj5sGBANhY9s6dQAB6NSUr5cytTFpadgRLNo59efz6B2h4iikG",
  "key25": "XkkkbVdBfnf6T1iawmfH7HeqgLS9VDCRAGZoP2zsBZoEhf7v5ujVr8Uxz4D1mnf9HHiCnLo2Ny5mun3W9dPCGea",
  "key26": "4T5prfaiwfLFnnjtUeXVrWkx81AKsUDPcY32ufYcQSG5ptbJRpMvgicPGe4AbacmBa9N8X7RwJCsZZbXCaVPH3X7",
  "key27": "2JvZPaNZEYxHGtSRhhhbYd7f7GpxbKEZ1JsBDLMMnjc5jgvsSGCq85jXyUiFWWT1kC53oMjC91C5mzcXExmCkqob",
  "key28": "3FbZ1fELBUX6UxUuofwKg2mom7E2qPYwPcjkz9D8rM3LZDopRxhqj6iJp4B79MNZG5MuRDsbAnPaf3JByQbiLXHK",
  "key29": "5J7WgMVm1vp5s3PvNTWGaeCDWNSFnfbB5pkgRp35PZZWvW8HZfcBg6BDAjFUeU1MCzChr9C3GR86Las8t2Q6vHRr",
  "key30": "4g9135UNrK5cocmJbsxeBJA71A3ky6DtVN2qhXnFeArj4hEZG87Rrw4EMk9wWvdPkj9L3CNy5LRNzW9eNLFbAhgv",
  "key31": "3KG7Wy9kZnqwNreUYrsePZv1DpsfJvvvt6KcP2Pnye6b2ZoURttkGtCZ3ELYh3N2wiaTDAgsF7dB62QNn7ieSnCt",
  "key32": "3nhXQidaVpUWueA71DRzFj36JTgbECzU34XSPMRozJ6AnGTDhtqWnySDZgft7fYwZ2pYcdv6VR1Zd8i4mGXTGjMh",
  "key33": "41L2r45MtTNT2XBkGkrybJwr3Cqv3EjjMbQJPfpF8eFqr6Cu8Los9XPGpjStYdyV1Csb5TGdcdeoQ5HTJqS3xzKP",
  "key34": "3JeaVG25jAN54xqTCUsBayZuPp6cM2WgpLfXKhDcqv3WeYvwM85gBeuuhVpVqV6k1F6bu43y9RLjuzSxZEUyVJB5",
  "key35": "sAPWsbAhdgizygAa7YrUeHSThj49B9NJmds4jZkgeDYJzGfz3FGkL92kR14ZoMpSQFgoGpisnWxtzvSLLrUbMes",
  "key36": "iA5w642jn95wuEAjFkNBLGeepMW8h38Guqo9kw2qPYVzq9N6eRSPLbfxuwG3Yk1fGjeyx2BDhvWd6zU6z9KLMBT",
  "key37": "3LhKEH764DCZSKXDMrQpJyBHEDCbffs7UHgtg6wcPzWahnazzFHbrWPc843YSwn11WdQ1Cx8mB9wJugcEimjJ9p7",
  "key38": "58Zi6QhWE8sTjxqzVEddwdm6HNBt613PHUJfFVrGURWuttXBpnR3kRfXJpScthCmw4Sq1bLsd1vT6Vy4v1FCafCW",
  "key39": "5pN2EEynrrmT3KKe3r7u7853pzMotUSp3Mdn7uR6PJeVV3GSvihqPTX6iTABS9CC4moBEwqNnGZgQ9GbTzHbAFXv",
  "key40": "5x2eYdH7x4Kyh17ijJNPYjYnk36DjxN9sKR2y1qtVaK1qgH6wCmkSD8qtj2J48f3Mjkyyn6HaYEgGJcaxgbXBpof",
  "key41": "4GxqWUimDodHZvHdXDADoVa7fJRwo6426bJUZsudxpwvNp6wYt8DkiZBb77jFrVdS8eWB7PQZg89uwfCev9ceCyh",
  "key42": "2frFQK5CCeBenTSuWfYb5bNMACGyFpmEahwqtVL6Br5wZ6iBFZUter5csbbF3akFmi8w2ADd6tkbs1Ke9tFUTYdg",
  "key43": "5PSGYGsFgMNcAP8VbtbJAFfiiPd5b53M1jR8jv9XVC1EeZkU8Gt7wRHAoCquvZ8JUTqAJ2VQJ36NuWYkynDLo76L",
  "key44": "5F7u2rJJy6j2HUkacqhYFe9LVz9F2r5utWGpJCptRzfkBFXosuPN8d1JbQxKBPxLJeWpsA2UbDDDXfio3fiqu3yS",
  "key45": "2k6RxPDuHoAFNM3btr4BxrBBuDiEgFj6ToYge5GZtYLvn3aUtYPbbGTRzUPbekFJ88TFZ5EAzhuBAVoG8hMtrSvw",
  "key46": "32ZFXuJNaK2yTmMTKN2uJqPSPbqZGwVyLR82CyM2NKncBm9PcaXJzJQ2GoVJiJyhnru8mA8FooJbxytKMRbRHYm3"
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
