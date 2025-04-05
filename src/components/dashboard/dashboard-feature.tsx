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
    "3jsPn7q2evPJWc7rGaaJtpv6XrWt3hSFqfXp7xnRKGPoKH2EHpPcpruRGYKSByCL2bVuYEMRdxG4PKrMPP8axZGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZHgTmJkENd2pTSFKJRvSKjbPJAViSk2thNimeHUnaa5uV15AZgJTdvecyZvxSGE4Qg71p2NdEL44QySeRhCbmC",
  "key1": "5ZBx2qnTGL44Esje1XksP5oBh2SgE4MmLzNAHUjLxgNBryqzAL95pikn9TfBdZTDr5UoqgPkx7rvSKtEoZPbuivR",
  "key2": "5EkknrJuyH4xc7kvs3xKh4x5e3McuAPuQNs8Hv511ugnsRvGVpbSTqPjnkjh2QqF5ivYmRy4TnyxwM21ZUdiNHw",
  "key3": "7JGMPeQyH6Pxcq4M8C8LedPt321zRoqdw1ViApLY69pKNvqDYoJNZPDeNivgvVx7wP2cjYNuY7c4Qn77wxCpy6U",
  "key4": "4srCVtrY84hRGBSUAt4kMbeVzSREipLWgMEn3BuFAncsJEiPgjqLGrrnbfCyNUPQW8jG4DBLnCrAXFkcfezfa7gy",
  "key5": "52sCeUv4td1GhpjRdF3JRsdt1ytmqkhbCyFTa6outnpS9ft6Xj8czxyVxBGBVVcJcgH1inDwzbry6TKMABRFxi6p",
  "key6": "4AUXTM7geBdp7MHFmCe7Sb1Wx8wL28q91F1t4nGUaA2umCRg79baiVsi1hSPf1KjZjWXPg46s5cWqccchhncaveZ",
  "key7": "619eNnQFNrqydsxxziRQiNLRN8oz6uuRdRTVcD2NVLmVrYgZNm1D6tFCco44yFd6B7kJ13FvsudfJQQV6ec2Tzwt",
  "key8": "Aa7m3XkR8xoWdhQvcUSne24qEaVwTeLAU63BGUsqigVpVQPX1rQNBn8BW5cJTkrsv18CgXNSThrtLrMBwCLkLMx",
  "key9": "kee17mcUohVsm6Ruzfgq1o4hRcJzf7UMsF5tfwNburxYY7AHw8ShPqoSHJKZa4pZ56wBu32x2f5yvw9Aawtpw6o",
  "key10": "2ZWcesDwQKGv2gWHzk2KH31fQvP6prH88An2fTobSeqpqPa9R33ubYjPeqVVvhQNqBpHxq8UhQ8iigGzRvUXQHhu",
  "key11": "2h6RuFgasR9bAGi3va7QjwPYVDv12Mu5jwTowdfei5B7rRdoduMKhBaz6N2psN8wRAw6qj4pgYscNNcZXneBzcbT",
  "key12": "2CcoSJ2QJohR1k77YKioGUmCyT4Hp3oJXZE3VTJK1ooG9fH6k7DYwx2wAbsu537FsZ8rBxBrc6dwJcudYoQQdt2v",
  "key13": "MPz2xDwhHjh8CEokaZTt88ZHqt2R65VwVN1fac4WjT3yFzyWW1hw6uiZrgYgvPPAnn3fKe8wSbark4KYQiVyspk",
  "key14": "5gVGwcZu5r7Suabuu16vnJQdcMfa7zbey2BFCYmcU8BT8a2M8oZUFNj2LRXE8nR5H1ohwCea3y6eNi45peg2EwRH",
  "key15": "2tLDKzKqb3uhx1uF9iYGAqtXYHArGJhet1yFtVVMEofeKAo2TanEcWr8hQwBZ2BH5D9BhJQ2KiMvj1CktkKxtcW8",
  "key16": "JEoPWejX6ULxGehmCFqU5qRVSJMuY4vGpa8SssFizvipSkbvkJn159ij3kyScysxLNo1S3HwX22CY9prQSiYHWk",
  "key17": "2VcsmsGsy2ffbeQZ2th2U8o8wMd4XJekXptjneU2SRauW5ptqRpf2Epq7Yh712q2pNqDthpHsavzEh6t19YM62dP",
  "key18": "4sQY3dMMKTgFsYwy8ApzLoz7pX7uA8qGgnRUaKcXVEvHnHo1xWsFzi33BpPhytATuD2TgQGEFHgfq8i5835hheBP",
  "key19": "35tFB8YavJen72XYQ5sYeg6p8hpYodkTioPLP2dD5rqpRdt1Q1ZC41AUuKnQ81bvsJibJvWUf9Re2o83wq1ZNpPf",
  "key20": "3TuD24RqkMbXp5SwVuFehrZJ5N8BNvVx5fJaSzLiegWqfpDcZraNmXzGd1kLasGBi5KTceHigRzJ3kJmR5XAPim6",
  "key21": "2ijvXN2t9HFRoVo6ycUDTkBycWLG2Tf5zC1Y8SaonqxjbeVJ8H3fkRcPq8D5ZaPL3vTYzzghUYYuT689wXowimoJ",
  "key22": "5wGKPGQwcsSjeYQjMbbKfb5QkWrAoKgug5UifbMvtCuFKL81aErBqaU2ukRQnjsJTCp4aaL6U1qcVoEKJdvTuZhS",
  "key23": "3ywE9v7B3KuAN1fpBakJkyheyAbrQsPjfvTsQVMCeDbrpYhcRzjUwYsyJ4rRPHFoAa8AdF8uku6DZawegaTLWbVU",
  "key24": "3niXZemXkvTnt9NpSkKh3jgF8ZGcMb9CQyS2DR6EqvJr4aSm9JGP3M817ruZhoWD379KdWwq5QajTuGzKdkjQBJC",
  "key25": "qbFtFjF3hB93KxGdcPeFccJRdrd5Lvivevhuv9piGeH3U741Qbt4vrvEJNPapsyH3GZKjN3GwiUCSQDDoKDqqyv",
  "key26": "2mTf3KzQwmfSNvNnowRiuUw9oSn7xd2m3GyQyPRdPPqJ5DUQ1kKcyiWYccKpYv6TgRshBSbiNQCGVniC1BoGqUDj",
  "key27": "4CK4FyiVHsZYiqjAV4rjsULLPk2V1PLj8dLZttCXWMEpKGHi5UvRHsQSuLypvF9TyfqSdthszRFEzKVdNAYnZcYL",
  "key28": "Z24EUhLRfMpHFqoJghAbkwR5rpCpuG3PLkTBu5CDCZb3e4MmDnPJri5aPoGWc3gYL5vbisav8eGomcbUKMNxnb6",
  "key29": "a7AetxJCPdQThgghTr7ywUFQQXtDqN64V9Gz27C8Hxp6Gv5PaUQqh3tvKdQYZPuMPa1TotuRTuE7p5zhheZxByq",
  "key30": "35x7jhDsge2UjMa5dJ3ZgXq7P3MDVTvivySK94UhZRHWvfHg6bgvyaTWpAbnv72Zf6GQqtA3ZGMTqj7w363vfqVJ",
  "key31": "r7jbZ9Nk4qeEPdDEv7j2ZAqmjqmpoJnG84ohfzUdFahLA1gK9skQwcVLrZyZu1XZfrzZDvZxz4n7rxNLC8Gw5yU",
  "key32": "61PB2wr9AgxXefH5FTu1wdun64T3GnjdB7qqeinurhxpE6rmLPJn23cTJkdkDEtSu4HHAkitQ4NVekxWLnaNxycj",
  "key33": "5woHzr3xr8GNLYCCzwsrGNmyRRAU7rMTXqx86akrrkk6Mp6U1qZzwFDxZ87vgoHRzmHhLqDvbMkAxCRwVxxntL8K",
  "key34": "KjAGeoyvkAFjC1wNCHuTsC2TSuf5arHLQkSXA4GP59t7bEu7ajCMsAH8WhewDXQcRpR2An6muM4QewzMKucv1mw",
  "key35": "2Xc37WfMyQTAuqrxSahhfNWQasQXvCBnrufbx1X6w7AttGpfkS7xPYJ2fVX4EEFGqHrkMDZ91RKEDg8hFSbroL4y",
  "key36": "5UJdThLSdjCPzsnyDvTDFGRB7AiwT7vbDJfStMnTGKBWCfVNzLacqz8mRtedhV8XBYnrNGCcGhqsa3RoEUKFnWhc",
  "key37": "5ihbXSKpq26eGnmR4Q8SLugCR2WJbQ1FgwZbr2LF5BsoEgFZ4YpQzybQ8AAMp4P5ZaE3ogyMGHg318zf3qEThW2a",
  "key38": "5FiTU7cguA6ZSr6vNpoJ2u2ea4csUzsYeNexnh6ACZw7Kj8x59BfWU44dFSWs1vtmCqEvQLiwgpTjXjYaPEnK4bU",
  "key39": "qfvgQAFkf5pEGLK1QqrtZdCwyoUibgEbDM2RNV9ZfzNFNqjmiZwJy9Eg9G2rYCm6k86a81PwcGExSrWdEU716PV",
  "key40": "5K6hbkVkzr1ks5m4erxmBvKAWG2tMVzhheRcz87imoqMRGBX664RASL2Q3mZTavMuXQFgt9jZx1zNt8QEhFpTyik",
  "key41": "4mc1n1HYYcxsPkhPN1if9M3uGwrqZj2UgbJ69tUjkGsWhW5827tiFkSL5XHVAvanbRYpbaGj2BCSLmkqDTdPF8hY",
  "key42": "35ZmYEE2M3jNsMwhuFyG8mNbBHBLy3YipnyD4VzkEysCbwMPaMA1qzrD5yGibGvrWaQ53Yj51Cr786ML3FJ4HipE",
  "key43": "85kd9EW9YGmhieaboSpXBGeizGRu5sh9pz92C4wNAVztwmJ8pBj1ZgywXixvoRT9iamdrgdetZoRQKis7kGRwgi"
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
