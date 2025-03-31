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
    "4FYVSKoDzv1jo8UeQNAURcyCpNRiBwemQRayi1t6EUi9rg99kWHgx6p3JCm1BvAiiJQajD1GEixhoesbPq4gAzdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYvhR5uJ5LqRKYUG8LrLQqvuzCiGYobCAW2z32qMwTe1tJmFzHqpHSnffVSpoSXsp6m2DLhYkHgQjuXhL2acCDa",
  "key1": "BS5vYyz6y9r7gmPPBKSUTNLxYkaaifWq1f2b7d7m9raiAzZFigikWPgqSkeYuAZQoHRpwWBd6MAapQmrHQ8oz1x",
  "key2": "4KayNfz9KmVncAk3rQJ4aZ2mUPYxgHHWuABCcpQqX9oXHm7xr3WSSmi3txNPmvdWoMzHbYsMXa5eq1jbPvMshqBk",
  "key3": "2DxNqpCpzJ5EMSMu7srjTveDP3MXLdaqQ9XjXCbhTktg2nvJfbnLR1m3g4bEXACWNRUHy7JHtzEasherm7UaDRwp",
  "key4": "2WQo1W8hjNCwu78Mp6F541v6ugjFqEm7ENCyxAzPjpkS38hCubHw9TktHFvLtaVYSGQG7RugXUPd2y26zWsLduXA",
  "key5": "YmFgaw7RZDwXoQ9jetaXvuRPjGx7sbmaPrcsyhAbXMHshakcB2xya2uHpVZaXkcWz1oia2shMyvxxTxCKmJLF2G",
  "key6": "2jyw8337fc7fNr4q623HUxRED62vSaXtFDC83inFEjgGYzLeXLDhktbzRm5mYwZ5WCTssXpd6oZDpvJJVTvApgno",
  "key7": "42LvCRJjkGHG73vPJdimujc87sBtG7cafrmQucLkbbYi32ivSA8RmFqZQYHRezLiadC3E1KmxpG2VLkTvNC5iNZH",
  "key8": "5Ku8mpFSFPExwtCLjLBD5KWsoYbC3b4L2cAkPQNdou9fs21wz9ftpLNRSGoR2DChusSWJVQa8rnk71km6xjAoKm1",
  "key9": "qgN492ubyEpaav8DqfZgAK6xYomVyLxA4uZhiT1Rw7W2JDWznVqFet6awBxCiVFMGSBjGmsJexxHyHNVAFUpekd",
  "key10": "42S5EcESzQXM6qJ7Jdozk1aXtXbuprkyc3v7fA9rXhSJs46w4mKVfqZAZsBoeqrbg6r8bWDSnBcQ21VmJJzv4Yy9",
  "key11": "5C6oTs4g1obVbn3Kc1QbrGmugFZAU8Tfx83qV2daSwXHhVUhiMot5TfDb8qLHdR5YMiAQrJor8B1S9YcZtsYgyM7",
  "key12": "4pReRFGDD1Ei14cByRaPTjVodRUFw2YGoiQcBFsWzqj5nNgRLiBfYCnfE716ykfZcwycWQB69Td86VLb674xiCnx",
  "key13": "4Pg1GM2cDFBQc6oqXYsmNi6nMvKA8pPEBVvFb2oYQ4U7JyFTysrGvLbyih63Sa43ynr2LS6GtrFksz753DuM2TuY",
  "key14": "2wLdnZ1pr4fpUC138SxK2tfnah9u8FZH2ex9xcF8FynffSiJk7xYps2U9XmhTVRfYi4W4sFsEwzXzjQgcdwHtj57",
  "key15": "3gT4KXwPTsBPSjk9h7zxTJ22zQiMeGNzBnfsroCJHAHf85nEHFoPr4yTVzNxEGR98N1B7fbnHj9UwHVQB4RBRmCZ",
  "key16": "Z5V5KVnFW35tLFncXshQ48uDPkrYeoggN8dttvhq5BGv82N94tEsGiWJHU6m6WNwbc1mFSF4Ur3mXUcqqxmQVsb",
  "key17": "64GJBE4vC5DBKjpwCCCszK4tkg3GJ6RVuBVmpffkZXFAjTyshdwbqDDkpRuShvkWURLZGy3J7onUobuWfVHUHrvV",
  "key18": "4eQdUCG6zxj3pNdu6cPqkv2M3EujzN3qm8mV2U3YbmQcJMQEh4PxYjXnqmhqDyXCP5pJp8F9x4CK7mPS9YZTLgyz",
  "key19": "3J7M82YYzvaw2Vv6mcSF8dSiHt3fhhywYo4yAREi6DizAkoiTcRAmcHakquKeiBJuwmUg5kgnVhCZLzQJs5VcY5E",
  "key20": "XX3znZgv35F4eGRfdLZ2GQxrknVqNmREZfJVT6ByPPi2vVQiUZuecKXSGyjtvoGUBDycFa5SkuXzobJHRinPLnW",
  "key21": "5JRRDg4haxCQApwXhbMW8QUrsX9FtDdu8pHKzNzA4fo2Xhkp11MQ9ZVMNtQoPgtDWz5FKaJ9WQvt7Hn47sdpAPTX",
  "key22": "3sF5KRfAEZW1S2SUnTN78Hro2Jat6spKZsnATM7xq6BYF7nMFFW5VEvzYiq2m6eT4emGG1YsVURqJJJALT6WLVra",
  "key23": "54FcyTsvmYYFXBNUrDBXLuYpbKTeCRnHRm5XRGT2KdSMWy82ggE8oJyUZNceKfzVdKtvPKCY7Dsou7TxDuTB7ZtQ",
  "key24": "4gDDWZ6XPWWSLsgpQdpD5D9tawmM4SwB3GDTEN2BFhPCPTPstRS3V5EFFdmRY1T41bUJKCyEZpuFrjbxqCB4QCKd",
  "key25": "2fR4RQ7qPdHALSd759sKrjX2BMH4Eq8N61bPFNxkr9bME569B5p3hZnLtux71tTvJKcBetWiEs86ioBumyam7CGN",
  "key26": "3Sn8emAdcW9vGDsvrUk5zxfvH3BUAXEQqcjtsz2XK97RKUefzku1Ptcf7HBCs3jJYjEs1ZjXN4SyH9N9H7RFwQww",
  "key27": "4emN9XDADwXaL38d6FDkTNEJE2CgAkzwogZ6XiyBBBA7QJ8mPjbF81sDxMJB4Kkfd8SsmiHQ52EY8vEiiSnwW5hw",
  "key28": "3EDiGDicYegGKcreifZjjFtjRSHEK5Jt8LpdSw2zsvFkvHkieErHRmyuLsAqbz6Q1MnmvUTMgpGyr7iinMiQhytp",
  "key29": "4Pg7UxTFHEPoMyNgxPgdkyMhFtzSmuMY63Vp1kBXq1PU1AYvsUaMKij6UvUddBJzMiz4GwZwn64kaK82i4nLPmQr",
  "key30": "H2DaknnUNbFdhHPwcLLBtM8suBwrYsa59FiyKZVsmdCBJrpd3jMYsdVrNAUd9Q3jYA7GRh16ni74C4cwgJmDP2w",
  "key31": "3ugooqXN1GHqai8s31KJjzSn1Md9WcEY4qb2aevSmNoiF4E2EWnnVG28V3UwC7YAiFCjH8Sp5eucufVX1w4ZKTQn",
  "key32": "r5fmmoQn5jWPR3muYp82FUyySb95VKcuMoDF4XWPLgfrcFhc3wk4CQiCMEShAYxGf9fxm77PtAyAT9rPKLK993B",
  "key33": "4Di2KHNnX9KaiMrk85a9RjLwa9jw7bPJH3rrDZJTn7EmJMfY6P994JGykh2R4mhKrNmty6eKMx4T9j5dcRxcBA6i",
  "key34": "grc91yLM8RnYpqA1CaKFwf9h1jekN962LWvrd25J3jB3RkWGu2jMrQXS6nXrGL8DfdF7pkQpLSST4qYYF7v8kqC",
  "key35": "CX43nwNm7c8Ra9576UJYm6cWYWDzgTEpf7pPzEdnMbcGNUzdpEtAsishKkhNKmiZtdbnfChwk579Ss8eu6qL963",
  "key36": "5AF8jdjQ6oxoZxigYG3PTWdMoYCUHcEjRoUySXPT1hbtDe8m4Nkmjg2o1uV2owkUG2mPwRUXsPFLv22gVQsdfpdC",
  "key37": "53gxbrniYC6ThNPX18XhWjuwQay88MizgWcmhDicriVcS8jF8ePqApYkx1Z4pAzDJBUm7vziE12jBd6ThPZafsqH",
  "key38": "3FoBC11hcYr9rwWmiCaKy7gdPrcmrsiU7wTWjidmZVxAnxCvPhYw2TTsXskXxJQeFV2aCqgdAu4u6kmtScmv1wHH",
  "key39": "4qgx9m7K8AU2qBN8wAm1KvwGa79tESpGvfjS6y9gwbbbrYnDzQ7KjNjpjycGJx6JWsUewY3Uvi8WAQZgcoFz6Hs9",
  "key40": "3egSMNkvSapsq6wVXjqAAf19rGhRnmicJ6HmaBLW9td7vrSxWdhdyPu3enoZHnBGfe9X8cTzF3sR1RdAGFe678fF",
  "key41": "4emqEm27sJjGgKkcZFXL5xB56KBSCHEiUeWeVXtRhW7K9dKZcrctekt3LbHcU5wHpYS6vR4nJ3a6SkFDDfQPfqsU",
  "key42": "S5UGyFTQ4tkYfhYwMv1XQLed5mVgnbSb9F9vj1vMUHqns4hTx9B39xPTQX9XPR89NKsGF99nkLno1JZsFFz9WfG",
  "key43": "4UrGZB2iME4wjbr71wVYjTux6JvVuvAD5Cpsv7XrHVvna4AN7LK3p2ikst4eCvJDgqrLJMQM875ZmFjTApAdBLzw",
  "key44": "3nMgHZbR97yXUeHv845dfRHgnWg8HDayTdepk97Mczy5n4D31S5ZDXyKpkcXy77XVSaqWMPZqps324WqdDGBDr64",
  "key45": "ZsQM1rcpPcakCAes2kkCVPqEH31aEYhUbEriuuYqLLbMHYNDkUBnH7azEejczacMku29HNx8SqvgEiXDeULSF2i",
  "key46": "Dru7s5QLwFZaZVookgtaPBGZ7miDJM5BRN7fawSpfAa1PDaRMYArhrXDwJRq5KBnPsjVpKBxauAjmDvLR8P2ZDs",
  "key47": "515rgKRdgSL2ZerpVguZgy12TPiabZmpS7jank9s4yVRHpRSGUuYuPMsTZ7xH6373sgYnAC5TxxnTGGtWgmfDzqk"
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
