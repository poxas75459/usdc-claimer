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
    "64opq5JmnRbuDVCfY8mCxQoM5nzKsyKbHkQZCoZjrJEM9tBGGVno1VhpantEicUozutw6ivY2Vgu1sWAQWDVYM1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A6yrpZco34KzRGh8HSGYQEnr3UA4bgrwd9QyNtjj61VBtuSqThhuvNT7PSfuwJQWdn4LLxjRQJrrRYH764U8LKZ",
  "key1": "3V31XGXQDQhrwXqQ25oGhQoJRNWCtxqDj66k4deSve924n24qynCCNQkgbkATRKuqgQVrCQFFYePvvaH2ocsn1Ut",
  "key2": "2xyeih3Cj41fK7svtCE5vfGsPuxL4mCbvCB83suZNksc7gDwjJ5iQXZ7s51urzt5TjYEwjA8ASYLUNcWrZChuin9",
  "key3": "5AmrWHi9kvoriiXSXaVXB4ztUgZ2bhdnBdVXNgp2KdXQ7E9PZhsoUjS5dteNwyKKANgLKrJPw4ZUSJnqXsPwbV7c",
  "key4": "4aJ2NrG51z5Ny9bxhyLjaBBkZCH6fq8cFdJ46rZ58omFGA4yHenHWzevzNiE8JmKG5Fwhhka5zPHpR9DeVgEdSRv",
  "key5": "3QpGgESgsiq2QqVecBzerbFDeQWwassL5bae1BzKnqRYpSVrcM3JoXhsG23VG7AMPaVfDkTWZh4UFG2yqeUospPH",
  "key6": "5WqAr8VLaNuc9p7j2JZJBFmXorUSgp2wfH3HuuNLAcLNmnbXjFr4jTenRg9KJkwLMDAbYCa5MW76dzkcPNW8zUPo",
  "key7": "2vUjZDbamrSQeRvQbd8kPVMhSwfiQBb1V4XZYRP19TTFM5E5ce7gpjoyZ9uPq8ymLQKEBGRv7UStNpZ68pbSquu6",
  "key8": "5NCZ8fa5hwnnEnFUWx1FYjoe2tWLFEQCASPVJ4rZ5qSfCYYKd1V4dHsSeakeHLecqqnjdjC2Qg6osM8bgZ3Vyijc",
  "key9": "3UpbkkyNTcZbnnNvnMiAGkTKC5fnAWZvVjYsgnwVMRLGEZgZ6YxadU29Vp8DsR98FpuLxCMGkDSMrzuqg4F4Xdhb",
  "key10": "RzcbwfqSeK7vUZLyoxxW6qw3oBiYqDXc9WqDeQrfevqokvPnZwt5SknwQTUf6uT3q3zvGBuXEmd9Mn3bxMcnchL",
  "key11": "2XhXKYFwqLR1mrynBo6dDN2zmz4NcG8iA5bqXWuZuVMf2Z8ejGaZWnNSYkHLZxTTaDYaE77EwaMjuhL1cC7RKYZ",
  "key12": "63YifbRpXWHZNuQFMt6iJhb8maGzeTp8PDFfXNNwYSmRTe1Bx9Jd1c2b5NC9iLm9PxaP5LFpxVX2guMMkFJWJXHK",
  "key13": "2z9nex8bnyJ5mw9zsei9168Phc8NaU4RnYhutkMDJKFCc2pV81oTig4vawhP95kKGLCB58QXSq2VdmfyWYCsJAGY",
  "key14": "5cvX5SbpVeMGDXrFYNYxg424jDKA9EQyyLwcLDfqAQ7gSiybKu3uHmjRvumTmkxMR36qv5aQ2VF5QLixiy8jCBaH",
  "key15": "23CtBwN5SoU4LHEci9mHYP76z2yG7SgGhc1Sp9vG2Gxo5GNLpuTdKuRT34X9YDsg9E4XjdnxMSPjFE2wwnbpXu9m",
  "key16": "2vuvzPTCRkkUmvx2rEKu3q8Sip1HsiY9qUEWB1tECXCkBj4B48Bi5UrZs1jusCEEYiQKqLq2CMx2SMWU4A83wsYF",
  "key17": "4Knt2jHNZPpoiFoqDzbwDwiKC1Ggs1TxHNjTYABx5WC39nC1GBoBZYcwSuaKPaga8L28vZquKEJEU1QDDH4yw7w9",
  "key18": "4stwFSo6Zi5ctf8KKLD6Z2bee4sCysqiTNbJttAodyV4sNmbnrmb4E9Xt6161MiwSg2WmjHgYUYfkGvrwEbzbbbp",
  "key19": "4csvLAGoGPCMkymTQkVwqWHs3ppJuwbc398iTwLeiAyaeTeFrbxe8BtAHh5ZFTLYWsBPpZdjzsxyaAp8SGi7FPJ6",
  "key20": "4oAf4nwYYQZRP9yAU6eG8Ly79jHt2vAKUbVHqse3rc2FzGrs3Xo2VrD1ZQ3qn6YoSJGMNB51uE7Wr3NUCtUN7M7",
  "key21": "3aFJPeUnLNH5JmRZ9pG4devBJDvLXzLFUenJ3EHHLfzaGVAaoFpvGf1X9SD4PpZXCtFSpmqaeGL8yFNXBJvP3gn1",
  "key22": "5koyfdaoz1QiXan7NTRa2DbDswDkknvPoSY21CQHcyzDpjg9E2zkzp1CowWEjkmV73nUw9TCXZz4iTJPpZppsx2X",
  "key23": "3Zb1XRQscsFCBiRVtTfBnw1m287afjr86fD81aPqzKZY38oDyqps9XKq1DoRcLgBH29SrFopZfQL8jcpQHBEFQt6",
  "key24": "5NCiGTbq8XGiVnkExvSK1m73TLRqEtHiPhemBCcTHT27gUEgMriguTTKBLow7gmR4i441dZXEEVarpQDk4pTiWEi",
  "key25": "5F866JY9VqN8M62SXPeTrgjXz86G7wriXWBngofzWuUzctmN8UtU2EWPSgZ8QXEMhJF1PZZCHyq3d93C41GRMXzD",
  "key26": "NMsHuJsUpT2eeWfc2SrnEihUZ6sk24SSdc93PFLnZPjotbjPNW2hkYJwK8daJDJTCFUkMimd4Zkh3NW5rChaxFi",
  "key27": "tF5sQ8MGcJDr8VZ348VHMvZDbL1Kyr4xVg2FG7bBYuuF74sNY3W3AKsskMq4mCEvVgFZPrQq9o11fe6KksGEycD",
  "key28": "4NMEsPhKr1o8i1T8BMXHXVoiH63sXChqT8oiaPTmfc5y89Zzx3GaQr28UJ7TLtTFNpPkjLjHymyMq3LDi1Voksbk",
  "key29": "47joNWdDPeEiU5DHL8w9EkPiCgJw9GzdsKDySn6D8pZFDvqvfuHQYTFZpWepW2ZmAsw5SNAGjqpSUNScnCNwynSZ",
  "key30": "5ioWHLDasnTHb1pg6oc9raK3khshQcBYPEHnT6o6gTmM9EfSfsmJBpBE8rb8J2jSwPxpse6dWfSctqFWtn4oDnGE",
  "key31": "73JKbmFDXCZ3NntKBrGFKzAwpTDU54TGRUDAwvY5mxc8PJ7UzwJ77zPVqYxBShxmbZ7hYRqLQsqVSnENpSw8bth",
  "key32": "4MR81de5fFvEFGAbjN3K2bTokovsuxomhf7StNcuWEq1xKDzZpbFmpeug8XsCupHGcyaWjoqiYGBukqQQXDa8pkC",
  "key33": "QdDbywjfHDJJJdkutPgNxc3UAFYC7wL4JpmzURCPiY1yb3WhkfFZ3TQa9rFacK7k2kND8bDcZismwgfqeG31L3N",
  "key34": "51MaD4s8WAi3dc8rT1NFGKFykce7GEuwCeBgu1PJAcAe5rN32KWZUmJT9ws3JcF4ohiiiBq37SDujYV7BsqAWmuh",
  "key35": "59sDDWzeMTsx6WrLkfkJMh2evL2g8fFkwqGyo1MakDTrDF56vdfLURXDuqH7hraAtLdtPUvDfbfgjUkan34ZUNz1",
  "key36": "48RJXpYjx4d4hFhb9W1c9HPh2ZdfPAWPk8cMjhHm3mA9XGVACmnCsh4CdkWFmPyaKa8YjEpSyjq6bU8HhF6tU8Fs",
  "key37": "42c12yHwkNNKqukKexkFbUdWYAwRFjY5f27W5GtoSDPyGSN5R39H2ia3ErsmMU6rYvGVN5rnLmffs571aKQuEQp3",
  "key38": "4dB64RzmNziFcR8q55pfZqonaBadBkvj6FsW8e32MLLXEgtX6rL4VZWMbJSStjwD4cdCrAoeQ5ky1ZyYMxfmM8rK",
  "key39": "TzbryeWvRxqmD2s6echFHuP1yPWwxRt3HgJfrTZUyq59rSP6RvQNfGMubb2B5HuVHp4fVpXtvffKyLLHXMN1Gqx",
  "key40": "38fH566oZVciG5HL76Zn7rdrfdUn49hRBw48t2sJESDhgNHStkaH2Pmp6hx4g3Rh5PmtibJiZCth1PZTz118tdX3",
  "key41": "2qX67SfzjR71mruBjMXKxVnYigv7RMqZWhnDiUgpTsp2NqeYbS5Q8hoxE7jrCESfPyhyLncHf5yF8TEBSwSvHNf3",
  "key42": "3g2CQayPh4jBstrF73qWTS7yLw7w3iU5oeA625LidXDzs8iEZnrTKwhSSz1xRgmG1t5E33cTadLLW7PCC6GWHpGu",
  "key43": "8g53cS2rJCqM2GKsk58m8dH73XPoF4rptQWrJQPoDA7y7MCjnm6UEe7k9tiBwaKsVEp7CsoG61VGxKUkEhK63uk",
  "key44": "32Doxmnp4ZjUgHFAT5p3RYstTua21NZSX57GSteqTgRM1puVt1UTZTFXTWvZapd85VvTND5Q536hXDerf4jWpcnr",
  "key45": "2hdbqb4dsQVUFNmvJd73R7UmGusQWXZdahcvjX99quucdGdztUoKN8JSiBLHBg2gjuZ6kCa9yeC2b9optNsBNsPb",
  "key46": "5UxEoWPGXRoMaoWpMGpYFDbCBazwYFtCUhisKZzmbrLTo8Z5LRjvpeCAJe3G9GiuS2mkC2uXTgCCEvWc5KqEod9k",
  "key47": "5RduBEn644cdE9fM8F5LiboPj6GFWPDK1CkJAUq4jrNdDAYEXXx12qAJBMnVn7ViiuasXAsZQ9ADNRzwqUw98Ld4"
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
