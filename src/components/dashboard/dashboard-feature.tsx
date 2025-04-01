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
    "Tw3hVgWcnfTTy1uhxnjk7SwkMfBDNFT4BZAbZTQaVwgvR36MHXoc79K5dtqwPFbiJFy18kduRTg5xbMs6dsuuvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Z4oFw4QG5bcDNZjowSJZV7Mgj1ZZGXyyN1GXRL5iRseZHiSfNEK6mYRq6zLCiesjfS5ua4pRkJusqDFdAoLoqH",
  "key1": "4u66ZvMSsuZZJWAgUYG25BVL6wbPDpUkhvVMzZwzSJpN6vyQccDPFjAMkcUwFMpvDjQbbGA8E6vkD8hG6h48UTL1",
  "key2": "5asyogcDRSXdmexZ79TRCsL5piCKnST3LpDUE8U3ojWwjn2xMQJwzMpCLpUqP3YDLmBczW8rfc49FJRAvSPDJvBH",
  "key3": "5APtibH2eWm3rZu5LV2WvKXKoqABPpRForSVmCxCv1frCueAkqwLccppCwMLRasHzQmXewz9e1TE7FHqSHe2YiLN",
  "key4": "8Rf23WLLSu1Bhe9wqwDNDaAdTCUZyhcaPnngGp8Bv7H3e5QagYDkt841RXPk65VJBNBi81cUtDapBjtKjnG8bt3",
  "key5": "3qUp7i1RRJ9Vz4pSfj9RU1R6JJvaZSbZDdMHfHh5Etobithpdj5atKTUUpPmQDmKrxsi8xjeJQ6v9n3rxcSQm5H3",
  "key6": "3Tv1ADjdztrpSVNbDB8Yauojjo9ypNQULDSt1jYTgGitYqXXpxD7PCu7T5eymX7h6p3WQJXNu4iWDXCib6XQPNqd",
  "key7": "2GgfaWWHaZiS5bSCp8WV4TAKTbTQfmrA128RmTG2Z5chMco4GFRg8jBBk4bi3MgHrD66kndnrVYqGjthG6dJ9CG",
  "key8": "2RAgdjS5rauwWzdojdPB426rpsE7ZME7SFdcCEfs7mEXfWBx9UPEZDipxzi6Tyo9UmhBcn58vyfEDA9s7VcP2MRK",
  "key9": "37KtZArzzqESGkrDkAkDLrySFavPBRTgEBBD2KJ5Gqc9VvatxSEzpthazQS9R7KR6xKPfBNXJDnGeD1BAzGpu3HU",
  "key10": "4h9G9tVqNvchTZgZPLYAATRm4VsTiVT2yTwGe3EL7mSmh4hLwmwusCDugBsep32fAtENpy4YK4LkVgUGa374mLak",
  "key11": "2f1W8GkubMmQmxpYMjEK7xSReyCgyXaXBTj5coGpY8gu5KwxsP8LKq75zRQ1U1wChwkBgWyHN12j54uvp4upZgC4",
  "key12": "252REvm2rWDNZs6AFMJDPHpaYk6cAVKcogRfJhDd9T1Xc3VyGUbchWDtVA1bjXtUdkfwnpwJYJQ7XbEX2LjmUyAT",
  "key13": "4KoKwDv8MmAJDRZfjLwEnjtS7HWF4LLB1z77e5nhPAFykwmcxpXmc35EWNYBjvF6rrykv1khntajXSaNmMREJuKC",
  "key14": "64iXCojwToxLyFsSai2ZgiPm2rUPBhJMNeVGsvdAPTVvS26CiNjyGDwnmxn8bj1B2ytiwjYDxZMJ2VtdNSvz3Yba",
  "key15": "488CvVbViQxc1bzjSXJKBypjU2tyVhAWibJdWeCKMc7d27XeB6JtJUZTSszVj7stCtBkunob7ZWSLL9VugQPkTKN",
  "key16": "4TtCpEF1K8f33wojstXAtYoh1dK1Chk1wBk78CMqMRd2sLz7amEaNLsMSHvfxJxyct1F9odX2ziN3cAjWQQUzUnC",
  "key17": "61NZtnaEM9Xkw7gpcvnG7EvP1vYtJHUEn5oqs36NVSQ6JCWWXqe8EjvPkKUE215a4nmbwahgcFUFgHKDdHnx5Ppj",
  "key18": "4ncPxhYJui5jsvuEEWkN8GhxNQCpoMdk7K1EJA88ruADrZYaD6xqS6sdY55ZYHBqVqVYr4AzDhzcnFqKWi5EtVjR",
  "key19": "3VJzBY9isWk9oKb26MaH9xiprFAUFg9R5wYk8D3qjs7BJHa9GsBAcdGxwN6iXEtDFDgPoaBdcXwAd9HgDj4pdtfG",
  "key20": "23SUUe24Uf9JVRwtTiPFCrtWB1A9jdLWoS2md1WznAPAJxFSiFLYocwHvQRVHTZgPuZbFnuy8M1nMgeda1BHun1d",
  "key21": "zzG3UGzdHnM84EmPCfTeteUJ3ubDTi4d3P9VVGpzTHyyPtL21D2xKxSmCCD54dug3UwkVoh6VYk1uvgzu6Hg82B",
  "key22": "QqjnNehbFZRSczvXJM85jPvsfCuJrj5HJxSiAsomUtA44rH9RJYFfiTDYRs9Ja3i4LZk2P3MVGaUi8rjc1WQhis",
  "key23": "3RTsHDaCPKDFPSR8Eauw4LuPJxYN6bDS35SA7X78jDENErEKoe3aEvUi4gzHFrdqkLg3Tf2uek5A4sDeQeSabmsZ",
  "key24": "46ZJYQQw2c2mzEkcq5Vih1HQekyfWHQiBnCq6Nrga6m36WDdf7KdyK6U2oDK37LSwqdwTzgoo7LUvuR1c7zrJ59q",
  "key25": "483vEaKgiTJbFVvgEG4KjhSNKZsB3ybBPov4rLPqLhCEVu6Xr4R18t9Tge3dBg4Akje2zuYa1AvpFfuzUhreJvid",
  "key26": "3FFFexq9GZEqRNrM415bQjYunuoEHLy9kHcnu3KfnLqwZ38gYk36sHiNZV65uX7p5KHiXJhZdoVTMK4z2HANn25k",
  "key27": "2xYGpDd2eQxmNPtVQtkHm9G1meNBZ1gLg4S8XispMa1NqwPBBKbnTnRhmoJxk7zskvGQGoPP9xy5SdDrJ5Ns2TWC",
  "key28": "eHH3UmgmFBdRFBFaErzgL8WU7dysWnkBud9TXEYVaGLwPDpwevNWe9kjXQMMLmSNrrv8L6JaTaaNR8G4MD1soWQ",
  "key29": "23rRsWvh9baW8VgtkVZiPwCPAMLCzvMnWMS9dEaUydKxy7DY4GivRVnaZadqeNSkMW9biLe54Zw4zg1kVbU3ECq8",
  "key30": "5R6XmSmr8eNZRW89auVPHWk1a1M9WCqRdmgWoM5ZfHAGzKnxuzwuDAerhwcwNTZ3n8Nx3Axuo7FoNUdEmWEKrW22",
  "key31": "N6ydMpg6YweMo9BaJMqQLgDbYodSDFGnTYmyqPMea86CgygeoUBkKdVMZrtKHZGCeBqKPU5KmP7mv7aPTUfn1tp",
  "key32": "5SuXLBJ4ZE75YLs5tCPQkMyy3gg4hE7sB2iUUNN1AGLMfYMBKpCe67Kn4Qb2TYJ4bxrTZ8WhM4rhn1bLJcCifvs",
  "key33": "G3ofU6tgLzhuyimiPtbeiGrgqwKtHpsKV1ivSXyi5gdaMoPGhppdEwYXsChMFq9ZmvAF5GVn4KmypHUrHPvckB3",
  "key34": "jn71EMqN3ttugpEhLmdf5QNAHqz7Lfyosee6xEWXiCmeEquF9EYZbTND67jd7qqE1Y8w66sNG8hNXNLqQ96gx1T",
  "key35": "3kZn8Vauze7BTXAiKDbPCD2LVopoXzDkr2rctofXv1UJ4G7AJuiaKnD7Uayu8qTo6BkApcTkVD9YeS6Y1JE5iWaC",
  "key36": "sisD2MJGeCQQNT61j4EFgYXvcY4bLPdsXWTVPAktF9yhkiuTgdUeDnBmeiT4i61qcYfsqVq3srGkHUFn7GCoFiL",
  "key37": "472ZTVySvk8Hngw9qwA5pg72j1A29gvD4BuqKAFTMZs2Q1in5tXFPbM4zM86DEK5r3xhim8RkAZgi7GAzYXrJAFK",
  "key38": "2WQj6T1U6Lb4N4RNwh23m69TWEkChsstyD2xUjYVXUMW711gtzQ1VhCqZBbgUdkTJZ86Nj8mc7oNzZKqHcYtvXUu",
  "key39": "32oh2aDfqzeYQVE23dSc1VFhr11Yxa1CXads4CwzvoSA9ShcPTEDngrharzvDo9EsTBBKFABGJQ7svFhgQG1jJAq",
  "key40": "FoJMbmNt8t6JeqfNjosib83MUHBxvkxY25nLwToE457e5qxKmAdwQACqDnNzW8RzuLYwNgWhCyJynY2eiB59sXC",
  "key41": "2618RJtf4miffh5NBpnwiLvTgeprVJJ3nsAiArb4MzRGPKP7MrTEWbPGuK1264J227BvKeUnf6EJ3WDnH1yVjbUh",
  "key42": "3kUSDmNi5cTqCN4jcFVdm1cztGCpFruGu6wL2Upb2NhRHYNHSUKHmMaxLNbMmfHYgMdim7HSUYxYA7eT7u6zekn6",
  "key43": "4rZFoUN9bJvEkNEcKXMYGvyNWnNKNXzixa9vY4HXBr1cFcAHm9v3Q3XpWNYPFACM8KL6XWg5sUUE4x7JTFe4nfMT",
  "key44": "3zebKRJuSYpFb1FonGhGkvFHmWeSRz8qFXiMmXtBEZSR5Sng5udXDDrY1P3g141VfDpdjp88vdJyQnH97xXC6hjq",
  "key45": "RUiJpLXVYCT9oCFdBJUUia78MFJATz8Sj2s26y8VKcFXHPmKwzFgVtzDh9B1R2hmE4YEeLdrkGMTE4CyfF6W2JH",
  "key46": "5DM7assh2ecMRESRNLQJuHozoLqsNTYc1vKbHF4qjLjgHeurbJQchGhBxkDnHNu1njVenrfZGEaBWuyD4hroaiG",
  "key47": "2x6BwDR13BF6Ma9u1J7cBHEqNSqnQv97oBwXCGz7D82AcoowsrTCD7b6XSHXJjCjsQFCXqFbm35cnyaxvNFksbJH",
  "key48": "5WcbzXQdBVkRGZy6DfPqgtNB4i4HdQEbxfjcQbC9XwL3Gzqha1Xq56wowGtRxf9G7M2LuGwYNKTmuuk7ZJW8TYwM",
  "key49": "3iPKdXHb3W1p85QkMd1SQqFv2zYKSpKEnvfqnzmekGmFfwVYP5EmULiqB91MjHhx2R9XYhVNVzLggJgvrJMRhRZ6"
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
