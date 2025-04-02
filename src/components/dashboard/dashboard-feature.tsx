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
    "3ffS52VEoYKanYE8wVAZALokJq4yGnsngApQiqTVfBpkcakykcWnh5PochXsB3ejLYhUgKXQwekXouvT43SVJfkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhyugPjedErFartEKkWEdKWd9bYdrZo7Y72rjPCH63MKMs7VzGBG1SxCn2ZkvbP6tH4H76f3ezkKhW1bW1qLQrt",
  "key1": "iWYriJBkGTtBxtt2Xjc42HjH9nJHZwwkyPpd4Z1ZGWQ81ivpLFJhwzai6qwYZpxDwGizSdmRcq2tycHnRw6aepa",
  "key2": "4tmyobLgTgbhqR9iCfadsV6YSVjU2p37tYNr4u76i988CooLMSMJ3m8TqBUeAKwoXkvPFDxv5VUabDve4rhHkDhC",
  "key3": "2V8VA8Ndh2WE7cKgHMbKEbaPPxx94i2gDHzES4LVMVDHBVfsitBgH5tu5BeAQLU9HST3WmxoToda6Rnoxu5NmHjg",
  "key4": "4XUiBYW8wVScdFYUGmj9nL6BPWwg6X13Ctnd722h3g7uonYPjgcADkfthtTd2yJPTxt9nDe1zb2yW9Mizodaiadu",
  "key5": "48ruMU2gAHFVTFivmx9LEsBofPHyZr8pAVb2CBvJZk34xKy798Kv6EgFjkTZ5VyXdiCyyN4uhUZQRmBGqaam7THM",
  "key6": "8UxUgtF7FacsPt9qgZbXKwPQztWzhPdf8iKNaV9viTq4cukE5XSpiF9YJKCfZGGLQZYuUiAJ2B3BzWsSNkZpDXW",
  "key7": "64MP9jvgEzgty1trym8UsqaW37Kfbu45tLYL8aatnK1yzrAsRgEAQnb2DoNVAWNEFqktn3pwUJok1zVEPBxLSiVx",
  "key8": "23GKpxVXJZLrs8QvEk2druDUKBqwa9qNKpeiZa3sw6AeXSiYzsVxhpAvJY8hk2CHvif7oZUmJoYRG8FRazDGFwHQ",
  "key9": "3igHnCUdiQvjPYDvcqaNnEGpYbuY76iKFFq28QTijb8dK8sUyJVWcC4GoumDCVhvW1bevYCFhrCnNoqqZ2Gu3amP",
  "key10": "3JhEsfm2o8i926iAApkx55PT9hDWYp9JD17jzYMup3UJk8bhZjuAbPDpFBoyvoDYcSG9AHhTr21cfUrPgTi4Svdp",
  "key11": "uHYFn1o9PMuLCdwUvvHwMx3QoJe5LNH5pEpr9BMZDzQ4tdAk4zJmPDrn1Ef1D3sMF6aG3idWpV7fbKzn6GrL2DK",
  "key12": "4gsmnbWuK8Dgug31r3qPpXaheTzxHCyybzHSaK8DGeH5tAUnaoSru45T2DhKQmMyXjCBEGzKo4mm9vtuJJHs4WFB",
  "key13": "2mfm4PiHuhUZazA4t7gwrR4hYJ6zJ6kQD94ruwWhqXfTK9CUKawB6WniPUTkK91mXzGH37CFtwAictohdmpwFAjJ",
  "key14": "2eLjfAF7EW1VgBoQHgRuDdZ2UgTumrgz4ijskj3XSjEnMDppkR1XfeCusmYuSuq2YCppFwZBwMpQGDxBWQfK9sj2",
  "key15": "5Tek1EA43a39CxDDsMeZYfQxmH7U4iUDhBPzjqkqFmR1g59wkJXP9nTdHWKidXkKubRNiHhEKobn8wu8itCgk8e7",
  "key16": "CUS18PgDhDBr8bgxsuTfH2NZicDQ6N8GAb4p9M2b43XPdiwPyU5zCP6wBWcW4unB1nwz8UshgnWmG787aLKzqRu",
  "key17": "65eZKaAZ4efQpgKrfaQXwYXq4AaYp4AP1SvxwzQC8m1DGuUEN4L9ibkz8zu5ccyjdCcBbFUnNmoWvVtuAFTFte5U",
  "key18": "47Hf5PKKMk8gezvsNptcvooLVGj8Gsc4NVgz3JZvCTarPao8DzVj82nCZAfeGAjkuRMt3JHTZPpyLJM6Aacs8W3q",
  "key19": "5RueFcsG5BfaiX3DdXfPgMTMmsVpspfqbJTv7y5ia6m4DAAnqdTh6KN8W1RgMHFn1R2uUYVayJuHdcaP2xi59Nqs",
  "key20": "2gJkcvsH1wXDwRf6cw42gzAKv2PqiyQ2XEzbx2LpXnZV8168wyoLDaiQgUwidZfHmDTf7vSSUCPR5VNfy6X5FQHL",
  "key21": "3wf14B9czJSVStAbysUUzbHsWHNoinyqSzRNbwy2ck8w8GUnhvUwQHEvNdcmkgWZuSdC1fnfz2oAb21Jmmnhgpoe",
  "key22": "121gVC4nhVczyBFQs4Cs1KbSJ3MWLJJCLeABtUNUfaEh5SdW2SsPYoCYM9cXNPp2kjexnKdUebMbKcN4n4CdSYJa",
  "key23": "3J4NzMwvG8tNpwK1xfnPeonc7Z7dzgSvQmnke2CdxtYENjGXFJkLqzxEs3Vb146DenFFGoKGHPTf1JzEgabv1FLU",
  "key24": "2su2Xgo4Cit4exJSqXak5o8ZQ6iXASTSEnJWwSzWnaA7oUN4CgKhYxU89JGuzPJxqbGX4vefUPhC5pUMZJFiE43R",
  "key25": "roLqKtAETwVpRCBETv94saEttmkKwD6LpEbp9FNipqVFQD9B2xDTwnBjStM71LtZLrFjBgz6XNQHyXZWyR8Pvqa",
  "key26": "5dzTkxfmUqpBo6X9jexDn7NHeZYMy4pcENGkWvCXgTyNv5Rn8gjjGyrSXEtbVZ8aow9ZdUGX4CJVVjzUTiVpp4Bz",
  "key27": "7LLaTexYZ3MUxiy74ryD6e6edmmx76LjggFoebu2APUmQqKZaQYYwUpSdJzjLGNow3Wqs9G1P2Kk3yu2W8MPQFk",
  "key28": "4QDXKGC47Fq2QtNDB6rz2kvoSqMvzuExrGJYyEbAkaoGaXSeWstDmBZ7NsuR6bthZPFn5fwGBrTPsHNLfw15vBE4",
  "key29": "671tVifKP2zxM22FaHTH2rgEVzRnBS1vqPnvG2XK6npRyGy63tX5CcXsXdVMoh6YaJquGN9e1ETTNPkXTpXzTvGM",
  "key30": "2zsvZvyx39EcnW41pUqj38NabubMUyYKX7iAWDJcc8FzaGBmymmC3w9m5KRLd13yRjxP9vV5E5zU857GHEssni78",
  "key31": "3a9qBFThHyic8Xkr47CuXnNKXwsojvsb2L21PEjaTUcgpZymZS7F8eBPfHYD1EFiWXHJjPDt2S6qNbTbinHtrHrC",
  "key32": "KeUT12TcNfKQ6RVvnEyS7ggMm4qNPWWo3Lpd61mCAr3gsMwndHSiniHasqwipFJbcpGKpQ6dfjTrZ1TntTP9biA",
  "key33": "5JpuhLUy4HYidrujySnsRcGJLYZMRjpFPyfmhV3QsSZomEiSXWGQDry1FGGoMaHNRv9NaDepCmoKfYoU4dWxrBCx",
  "key34": "3kG643zgNQ5VuYRd8DUas7Maw9tc7C9HqvxD99nzb1DdNgehhMFcmEMXZ9xUkPq1JUZZuU5rniXj3a4VmSx8eVyH",
  "key35": "29pGDqQLzq23ny9fvxHBasim548co34kdmf3AiXpoKardPx57Ewp7nV9WAYVmCgexcYTyv55wsf1VFkkM7DuhD2a",
  "key36": "2sFb14ibyH7q2DYa4U8BdyaEBrNa4HrymExaKT5EXSMcrRuh7MLHVEfpGeuDemhA4mcRT4yoY9V6VAq8NsAJSMCG",
  "key37": "5b1JaEWzG6XWhS473CrbPA6xoYScAMNxs2VRV1ZefYaFK7SCjeLye8ATcxXpA3j9iwTTZVA9u7DERtP7zaMUDVyB",
  "key38": "3okoAxBs3BX5uqEeVwJUe3PzWVNTvBkY3Hr16s4qrhgCqfdZEDBsNQDGf12Q4c4txjAqaB7LySWyEaXqtNY7HDFm",
  "key39": "7q7vTXmUBdw3fi4ziYMpjRwAck9ExyVJ1hYTzs6ypUQzvu3CwLbnLc8yztBq8FK48dYRkay7q5pJbBEnx2jwxUG",
  "key40": "1dNWUB1fMsLsYs3rjoehRnfASn4MJJaJfPPMZdUALJ47itM1WeugzdYa5MeBMNVoFAYemfjc71kVKvh8dFWLvqD"
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
