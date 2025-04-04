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
    "3Kiq4TVEXjv7bryxgGQSMkf2Xfaifk18StZt6bm6RFXTmtBkGywb9jHrhbpeyQ1FgwqeJtH1mo7avmTQGZcEE1Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1zv7K3EpoDhzisGtVEYpXZ51MA8fb35bRH6CpdSsUmwYjZDVUj9SbyUbdghFeiR4gmY1KwqXx4cewc8bAjgvgH",
  "key1": "2Nph5RYAty4A6wv2gcMhX5huJHPBS6BA6qbC5TerjUQzkA8x7mLGznipyA9xVrpVNkY2Z4dEtkehiWBkPLHXsaYz",
  "key2": "5rqbYzSBpNBWqvrnVfG268AEduB9gNtREH4NFBoBSmBAAWDjYqbQu536EomA2wxh44HiRkDkpU5RfGLhuM1ESk9j",
  "key3": "34VsfbJmTtQdxYqkV3N6W5AfaAoFkbU1GNZXikLDdnMz5SPZjjFScXB3cWHCJ1JmrskGzHAVuYB8tCukksK56M4C",
  "key4": "4YhACZdchb6mqchQTCyRbDHmAyxaAEJqdW29q5uH4Vqd7v5n8DjBLZpLodPnkZpKHpXkKnS4DdFX3urxihYhhug8",
  "key5": "2NyffuJoyh8GbAytQ31d6LqnFdfTsGy1ecsL3hz42rtbUNPsHAKkkxbPqNRjVrBHN2FCj4eh1tMoRRXRbELPbFwx",
  "key6": "3mkf2zf2jAvxc3bJf8SdM8vkE8SUkZ32Dv68KRLJGBSG2vBeeDRezoBsVwmpzj12n5v1nrkMtDAn92uyVpq5rMMa",
  "key7": "zLSYH95axZZArBaFDMBwWouky35wbqZ3VXhohVNorMeY2n1anWg6PBHwqKncRpdmYVYxt7fyJQPMYLkMYKK3Pwb",
  "key8": "2NjUDjw7ifDHJYURBSVYcRzsRQN2riAShyHix2j7k6wna8kFXAZj2E5foxsZpjLTh1zsz3EKLuDAHt7pMViQEexE",
  "key9": "L7t7Xp2vfGnsXyyLA1JPtS8bu6H82fY7XN2r59KyGQQ9YEfmVHRhsqxNMVUdzYtfKVuUVVaB1KPWEiFvXZigSxp",
  "key10": "BZep2Usmp5zhhhgEkqu4BUuvaj8caCqAVjEH5CmuaDL6vf7UuURhgzafEqYXvtUyU7uey3VLzM14jrtXXjeXmpc",
  "key11": "GVuC2JWvtzn524bnarpN1fDmnrWf55b9bQWvpxpJ4EbGdydKy5b1qD22CyuK9bkT2L7e8pyi5CWKPWoFWZarhku",
  "key12": "2eYMP2oksbnD1yCbjaw1BpEXcBHKHeHPd4wxg59geyS8pQMFW915Xh4Dn5x2DdRjNpKsyWrtKJMzykQhkJ2tnwBM",
  "key13": "a6pPF3SpERTwB5BpnjAcr9Nm31TGPveQ1pe4crEo8rHHzpVh3Jg45J9VqtBinzv8M3oi9eR5FH7C65nEAcyrKRp",
  "key14": "4W7BmuH5GpUqA1bQKsvjE87gssLFHBjGSWPkMDhdhSa9wpenfYw8m1GAMCcA3kGVimV92QbU1cfTy4KoEKLznLXk",
  "key15": "51CVJbD3aySJpcz5XinNgoG7qBeAFWMAiFkNGY4iqqRMMKi3pEdnXoBas5W6XAYMNKkoLoBiYKwQwcGhx3GvXX8q",
  "key16": "kZz5ZaimfXUZNPAmFtckPeReEURdwCWszNZokYnWaKKwwJzo4bSBXet2Y7oFAzKmd4w1ECT5z2MiBUTxWZkgro8",
  "key17": "4HesftkYRLg4nMiet5FQ3a45QdbLx1tAbKMgff3Bvd9aAjH4qqMwXqkap1zDKr68YesoAD7koBGcNuU6ctKi4X3Q",
  "key18": "43jsPXiWtDPXt2tpSV3W6Uqi5vVJBwpgcyCbyC5inrYiUzaZjNygprp6xz6W4stEj6CdTG6kVwU8ze8wGq5QbdwA",
  "key19": "pNhrE8qEebZo3bnZSAs13Pk5RLAK8gqaaEXAc8WYq8BGCf5RoN7EHMuJWGH9wH1GAo2eqQ6Hizrp3w2ThoYRLEe",
  "key20": "5tWFCz8v4ZFVj81pH1nTqpoWjRsqu2CXC1yfHdSKnDVRpPboWDmb9KLBQr3KaNUQNMjFGGYA277Gbx2hYcEXs4wd",
  "key21": "4NRb6Z8Z2QC2Ldz6LC7Ep4frTaxZJG5j6HdhtWtpRVyo5oATzvxPoVcnogVJaMx48ofMfeBdEpEdt7WYaNHXHZ9g",
  "key22": "4ZarEw3jkk6xzKF3oTAQZTPPxaBAGnDhX5y9VyDhyUF7L7xpdTco8igrypJkQ8SaHatnsiAUnWiHasK2gme8bPDj",
  "key23": "5basXRuPx8pTDz1WtVa4x6nBZ1c4JaxHAcwPQZgFMFiuq2wddqYfXfijDyNgdFBeHq5PGSCN7aZBeoCZeZ6zwqY",
  "key24": "HPeeP8JXH5YMgk3nBgsJ5k2dX3wkMHQ5MjhSx4XTVRkwLSvm6siThN6v2N2cznwRNHTYCZDEMrWmC7FAVJ6gZB7",
  "key25": "5TtaaWfu9H2UwWMLvi8S5YKwmdhuoR2FufWHpXjVBb9tyod8TAhFNprLzxV4jKiXG3esCWXMRy2H4RoPMTmydWym",
  "key26": "4bAcaPGkarJhdbUYDmW763SD7agUX4MkzfQE6WLydZFmNFyqnEqF6R6bA37akQYnC2XJ3NZWvr95Ui3dNhdHbjKt",
  "key27": "5NYXg9gG2PAv48wqT1eTt5PBsknptESi2jD4GeRduC4PmakJZ1JQbtrdgCR49b2GFxmWuUJUBWvj8JZUTpJjUbQ8",
  "key28": "4Zo6zFu3rjVnXjfnnR6FcuYUToA31Qw5pHhHFSGBmhmTxM9KCouYmJruB2nAFgdr4NMBj7yuC32359gp5xDzDjkU",
  "key29": "4TqZkKfA5PTun4nSoDrgQrBSvc3AyRnQiM99XRCzv4ZmHF6tWS7Pu2V7rj4BGmVcYWXAq65JgCuu8hgfevj8Wyti",
  "key30": "2A6in6nvj2LPW3EW4fsyRwpjnQsnaAjBM3PhYPcQYD3AAgJbDecWcDxYXvD4Bzy4dHxVEPVxZJDodbR4v1n2effh",
  "key31": "2xJogqqc7F6grdUKr8L6hD8MX2VKL81aSevvXTgBEB8BD7PFPRx6UnFQtdecs6uRWYCcLXAVu9YEtHD6Fvs5Lbfg",
  "key32": "2FGqXzhif4ZgUSAkBH9r1s2CmgaUxqaQRcfMaerxmfviD6bqKiSFsnZhzD2ZW2D7BnNqgHbHiTWQxHb6FkCjFZBS",
  "key33": "4QNiZmRc5BnZsyvVBqsrncrVhzgTwTRtMeVoKzSnTknuyiFQTPtQnpF46usZRJans3MPntjyeoo4C6PA4T34j44T",
  "key34": "36ZmYimETU5kMq3MpKysM4PxgUHJ9ydcm4eti3WKcpukhXB6dbkeNuxZXzgu4A6WFrWAZgR2TKYK8J5a1yTfhEJd",
  "key35": "sgjo6Unbc953uG7D1Lfy246CVjjAhqgg1xpuXCzqsfTVYectKqq4Qfmgr59NEYfMrSCkhrJuZHB2pNsNAaFeV89",
  "key36": "4wiNzhnWozYZhN8hmPSz1zqafumyiFpc7t7M7Zwsn5M3dHnbWdhEQD3rFUjdngUho4MJwTHfAMeVdJnVJoPXGHYT",
  "key37": "B1UA6ZYAYevMbL4bFuJx7dFHChJ7AzNVFa6wRvqteyRAaeQS4pAsLieTmxWUKuphCFUQcCpAucxgbmuiRHZEdPg",
  "key38": "4DseSR1HkySpA1bngh2LJgJHN9DMWCWyYHK8fPVTin1QNQLuSFGJmB7urqWyMA37x2Zv2cvZQqKLW6PTeL8iZyUK",
  "key39": "5hvhxvKqdB9c16GLupXb6NevEFq6onWkW3Vp1NBiiPA5uUGtQ4FnvhMDcvP1Eta3o8zJHUheNi5a2JMRTCoiZxmU",
  "key40": "3N5zofEJzPonRuxrb2ds4zkpFCjxHWeXeBW5LFyJHyesCQtvQXJYXkBazimTjqrZ2w9m68ts3eqkxtv2pst6Ps1E",
  "key41": "3rkC5CrLYgAfgQ9sRdECo3QTtYJtQcLpxXBXAkDZjezqzuVMuuvNybtk9ybeB3xa7che7qVMctgxEsoKjnduy4Wm",
  "key42": "u9BBp3MsC3f7fxNSyHmSX5BrmNZaTE1xpmSSNWAwrF5FZozfqx587oDLi9dwjhcLhfXHrgikAoEanNyW7FNU7Xj",
  "key43": "5g9YMNhtfhexjyJiVVHVirD7Smdkin9qv5xJhxUeBZ23A4n23pc1D8b4zBNbr52REE9bVQCnHNKn1VDzSNgd9iX5",
  "key44": "5N4NnhTXceaiZ65KNPtu1L5d19udzuuzToa9FsMPtZRtbSTzwxMCJyjhbFjzruXrXxw9FbuCZ3hQV5vH4AbtDYGU"
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
