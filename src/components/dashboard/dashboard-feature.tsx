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
    "dd2rLXpC5RWFVxnAYNtFaBLnHzDaXprBynCzqd7CgMPj7uJQhKT2Ah6EfcYvcQBi6wF1Yn4caun5VMBPnU8xs85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veRH48UWozfPhtG72NyYwDtzYw7e3v7pppk4yTwbub4UXg2fqfbxPcsTAxBHdMHvReHDX5EncnusWpdnBzdvDEp",
  "key1": "559Y7VtpHZDaBTDm9rGQGSUXqjWmKDVDM7AEZEoZQP5yd2Zk9jquGGsaxjbtuYuHB5Jx7s8Zk7LgH3fRvursR1rX",
  "key2": "9YC3vpzzitiNsBXSnzT8yHVW274HA71et5h4wcGZrSwYkgeJDGMBgdQABRJhETV7egioDAj4QyXGh6SQbMyF7XN",
  "key3": "5T9Tf1DBkjUgxtd4fiMAec5yqbQ3m1ori5vSaysvZbxWajuucCQAjQ5EzazZFf6eoiewmpXSPESZMF18UGAcXkZt",
  "key4": "5v8qPXnHCFiStpGfMCvRBT4gwQsppH2TqDkZUVXgii4spbeoNuvxVF515Nhkdos3SSzRkPpquxPx22gpk9GNY49R",
  "key5": "2FByqFKttQKovD2QYVupgRzd8wNR1PSjKUCxASJFq43SWQLS8VapA5WNbTy4wbtysDGGtA2BnRKeQfVT8khK1KXG",
  "key6": "FkPL8wnM5ggtA7PtUfXErv348rdqFiGdYiftmEszJvidm1pAbhs19kNYEij21uqEy8pDPizgfoTQoVvh7GL5gVp",
  "key7": "32VntK6PtsRXVpf4mgFmSM8jew3Kchokoo7x2AUqkmN8DUhyzpdviJccQTYxfzzHZ15Hcj86RjNHuTB9hLTXB4qF",
  "key8": "5JkjqLLUbW3iuxrz69H7ZCfBioKxmBgw4VwCFpLpJp382pKbb2Aw8YcooQXAWG1ivm9CVMRzJn9swA26UNQ5Moit",
  "key9": "532pmNEacRu4UTiN3iHFHUXNjxcz2C7dSW8ySCkNRB1jJqrjMESUGh4EN6TAdddfR3QGLnEdKwEyRjUy3QvHLigg",
  "key10": "2xxqzxw9pPGujKfyFPkbRB1kFL6quemnr8H5Xt5MN72LqLnFPhPFVBc9LZuU4SeBEr629He9anbLwxQ2TLqaLHEn",
  "key11": "4o7x1kvY4oGK5QMLLv7x2VTRRY1G3axJkUbgbs3BneTh74duYJd5U2CsZQVxWtuquaxvy3Q3WNpvcF4c9iqwuHZ8",
  "key12": "2tc6eU7zTVN3HB7cGdMsouU4q18mUFEvJDNiz3mtcZiLX62hucLqmyZ3YPSRoHT7Rfx4cuwndR8bs7XkeZcKEeVH",
  "key13": "2fBdhj4qjWCyoJawz1tGcNZm4xRKpYZVK5G5kFU6DPACzSX83sub61UvqALNRGG2nASGWQdnkTrUQBVZjUFRLETd",
  "key14": "34QqkHyqqTVsjte2Q4EFZLBmL8X8mC7Eb6WUBbNUZcqxuN6HGsdkpwnjAN7C78V6EKnnioKorg3gqSL2DTkXQ2kB",
  "key15": "2TRB5CuGjW5MPCfwnCdf5uDdCZtCRdocLMskch61BAHY8TYyyPQBevUryR5Njne5HgH53FrK318fvBAZyRDhRBEB",
  "key16": "2X4cqaqpScHxTyB4W3JHvL8DSBmkruacP6ZERMjXianEx1wKhMjEzBudzxAv4shnPwHM8Ug2EkijHb6pZWh35ccw",
  "key17": "arisuRM4xSexfCRTTQxNcuKWP2RqD3v2wQuMvHRnKoQDRWRZdL1e9gTtteMMaEzzxBbxdeATnUTEkHPiMuUHka2",
  "key18": "3rEEqhunJuxGrmFQfgmZfuXZLx4ewQhNKf3sZ2k5NcLJauWocXMkKi4txEmaGFCW8LFeJguPPVggrAtcQXsksYg1",
  "key19": "4iw76h2JEC8HBF1eCVh7VJM4eCBiLii5pqkURkkPMQhCujn2d4whk54Ympn7MsuXsw7Qm5cd4qZhmhx5vcXWcTkV",
  "key20": "3w7JSREcfDkJ5iyDXQ6FM9ybynVCzvYq5wmkHqKAdw2Gv3QWJzk2UwQp3RcKCe6ERyH8aG4ktDUen7nAvpEt3TGb",
  "key21": "3JpAkyZ8ESrubF6ggDrY2rhHpduXFsjDoFHQP4cQVc2UUMg1pibkd6mSe6ntJd4jg4oVdL2iJXy3QQSvcwVtyhmG",
  "key22": "2Vfx13e2NuKyQas1Y8oTpgDWCcejesy9hSznv9xs8Za26jo2yLUuwbbaX6XqZn4GLhHeFEFERf2rDUkWH5dnzEmN",
  "key23": "2P6Tz2Midhs9fGJQiPxbYXUvYDaK4ePjGBkcH2bM4ZXcWUgjnqmUGy5mqZGzrrwvtTomB1bJUMAz7EvnEiqMRHGk",
  "key24": "4QvMqJrvbtiGAzLWNazg6QThqXwQ6txu3tpHq63cxSXUnJMnxYJKB2PiTztR8GwufwWnpM7JnSkEEuG1ms7gwT73",
  "key25": "42BFWhfAkUUHjjB6CQyX4A2Ja4QkwhL5dzbpFsuEAkBfvk1ovh5mdxguzm4KY5M9rrsSfhZAJ8B5Edj3h1PFT5ob",
  "key26": "3Nwj3vVF1t5iN1jPpSxhzipcU6GCHxnwsbSKha2hue3jS4mcwDGau887BbnEKMXP4kk27JroPECaGazbFwFLUYaG",
  "key27": "4Vd5dW51skv2MDKtCfkzYJT7PNZP6tf8QA4Bz2QXfWUEt13uAZDbrAvmaAMntZp5iYPoM3yoidTTsNpQ64pQ1hVL",
  "key28": "kYifww2YXWMicyGaeyCb1fuGmhdbpDmgoBfjzLwEWysnZzaXMuxqPPQRWekptQvNvcKXGAfiBHAHN9UVdWUwPtC",
  "key29": "5bZoMVEc6d5Nzs2UnWmQAnisSJdKMWELa5Nax8JY4CuDJiiH9pLFAMg3AqzjEMS97ZNnp1163Ju5SAz7LPBYAYsR",
  "key30": "4BzB5j3zriR5gbMFCMexA8vHE7bAHS8AFctBPmSKytvwo4mwyUfCcaVgw7Scshan48fR15udAsyCVpACiNEvCs1M",
  "key31": "41WAjcMb7woFA8yHp97T7f1Nfd6EpgBoTufrVvp5tDpSSsRCitRwnSxuy54xQAKd8fKHXJFxy7dBUpYXP7viTXLw",
  "key32": "4ANn3migKMYkPZw8abyEzTNLsLyZouNfeGzZjvofyV6fsN3qRsxDPhJtd21cACf7Y24JddQpJcV8vbSC44u8Evnj",
  "key33": "5ThE7f4cBzofUmJJdUovZMTe3esxQu25PtsSCh7aczPu7NHjMpoapqbtHVuf3NcCJQpMiYiHYKkoBCBiikkVpfsZ",
  "key34": "5DXrgAuSgfRMkptAABLMb1iTK6cfKxHYVEPyGWVj4JtVUjtUD3vnXyA88w4P2oEbAMug6EtCMtGSkmzNkQnrLKPY",
  "key35": "c2Q2AQLtWvEg7VVLj7KjNAjmGs3B92da1yBEXnfW5s4JoTzPo2as18ZjAgVsy99r5feKGKpATAdzKFDR8UPgBUi",
  "key36": "3U7oa1SoU73qehB8X6orn6ZkvWjYwaStb5ij1bP3N7J3DLZpAqgWdZfMAtRpDh4dQY645ZhV5QWrCurkDVK5oJkh",
  "key37": "9uQDsTMf492SRYtFCACaqQczD5SPrMpJAVMyhh6mGz37eBNKh4C96chMCorYgBVZpj8jK13Wuo7KErCLB9CVn97",
  "key38": "2gKEwm6qbDsM1jKGnN7cDgjBJkKV7KUXqoZh6eoWrNEdpYfsXHyBGUeaPJzgn4w7tmqRdegVkHumeBoYEyuMBaRx",
  "key39": "2xhYqtBB16fGM5SBFfBbfazKSnkvt3KvFXLEZqPywssiFbaFr6FHbsUFJLGhUjnf6Vg6JR3qiqGxM4wMTekm9Nn4",
  "key40": "59ZBKHkxCapt521KTbbZ6xjXAbe1gGBzBFyekkgUy1jZS4ZhmjBRhAjNAg3yGtVEh9AAoLmUDPtGmPAMdW3321vN",
  "key41": "4PHgd98CgadLh7zjaRDSg1LGn4xHcbJHrTK341Gse2K1kFazYGoWENkHtFa8z9GhCAksxbdjgRHevz7fjUyobMs2",
  "key42": "5mDsPztmikgedKvpmLGnVcGqitoyrsyAthBKjuDjvNAAwFSY6pTKrVsWTsZ9qjsG7BHVCnAELaxVHrfVGqnn4sax",
  "key43": "6fwJePVhLXC2py5gkNzHbTT83Fcz9szvPH6HPmsrcVdwVvjNvw4woBtnxKpr3CFLST1bfhjkdGwyWSGbyAM5tVK",
  "key44": "4JQ8P9GTkxMqn6sQ2KtMrsD26v4CHFDSaZ3psC2d7vTvTsbUut9qsvXAND4jdqE8Dgc3d5rd8sStLhSfJjd99YZv",
  "key45": "388uHex8M9Q5VozJAREvfSJinszf8EpG3tQHuyAHp3iYvGujFPJMnahxvhYkULN76NH3hE8vxyzfrnCdtp2LX5L9"
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
