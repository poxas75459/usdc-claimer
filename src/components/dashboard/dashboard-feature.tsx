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
    "4Axx8CY4GN5R4K6ttm9A9JSCNJXD1TDj6GWjhHQvYGAjxgvvV2auyXXmKu2fxjMvMNV5AY723N2vgmWwzLYsgrMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59c1j8bjjf9a1Uwa2s28hKNUns1ey9SjmkBmfMUJm1dYPM6o1Feo29u4zbxM2WuNPM8URhAyuP9HCZ2ZU6AAWDqF",
  "key1": "5RtWwvryxu8tvARfbb6b3imBbxEUoYNNvSE1ch6uqxgQvgSYiTAX9j4BVJ5VVeXSqP3hMLkeiPjawZgmzAq1v3ab",
  "key2": "2GXBvh5gNd51ptEX1MPfyLxmGXg2iFgAPncoX41zgyWGr9omPyVeQozggYGxXohzDiR4EUBrFwY1Qdrz4Xmfqkv3",
  "key3": "4YCLs1DAiv1YpknQ7wyZ7KgBgpyniaq6BqwrcTjprUDFaNoYyVCXLHnuqeDJfquDM2AFhy4V53p4y4Zuyeo4YMzB",
  "key4": "24fs14CF2AnDuYrgH9zKCSG4sBHy7WijE67hofKYpbPV2iwcaKvN3TXRr7LTBXuKXqyLmS7VTMmuAS5sqyR5qqs5",
  "key5": "xPZAM3feXGSWRaE6Yc5ymuBVm8gEnsrHcdf9U5RqjThRk341vvfzzRAy1rRHaPtHXbAzvSFEDVQf97snVJuQaRo",
  "key6": "Kgw4MucLA1HcLiKdeqSLhWG4pEKjmaTxYad85bG4MitudBs58GZngWyd6v5QU56VoXVGAYyAFMytcN7iGMHHVi6",
  "key7": "2u35CWVBhTAYpwu7VYfiqUgLkNSsRLazgzj7waPBLPHnqq2a5KcTvFhj3A7mjYWwczAEBCZgGAXnFm85NAXkyLvb",
  "key8": "9beP9c6d1ncQYyFvWipzuDwkxLBF4LvyA6YxPxAgBhX8HpRx9CFS5iA22J4HGp4B6hSHtt9t9Dzv1mRaouGpGBs",
  "key9": "224z74xjVp9iDjxzRB5vbkSsvWG87AGQepiAATxTv8JGsoYv6kmwYKJHKYCu4mRAkdaou1gC496PAGbskbj828RQ",
  "key10": "24Q8QY7TsHKDKTUsHcDsvXQwjiF1XpTDns8TXuyCJHBneAVzmaUUuE6TBTTjMNrdbTPwjFV276nSTGdyfttjqBPk",
  "key11": "4rQ8Hp9HqFT1YZc8V5JJViTuZdsBheLNSBi76KnB3pD1Z6kNp2v3Ybx5wE8NHFNcTKv3aqjprsEwrsw4x3afbE96",
  "key12": "4JnR9UGFzgUxJbQyC26LrwH4MDkGEYHjKV4miDPWuqNgKTkTgUv1KRz5NxdrRQakaL1p77FsXHeKaKtEiMvPKuzE",
  "key13": "4U6XTemfMZpoNUU3rZveUcxAx6AEU832r2NRpCqWBPEbfTp4W5x4zDmVm9hfkgcRkrpQ7ZrhfKoKFo4fyKqGyHTM",
  "key14": "3gZiFowVV7n2FykDW9SyVoLL7HW6yMEUsyg3Dbu3yDchBHJXTybzEGPaM7fAYpeAGHWGA9A87PdMpoJT8bhwuVWh",
  "key15": "3cUJNCsZJMrGHZJDYdFLAYRHpveemBphMYeyjApacxjsRfy1Hux3DfcMYVPSd944bp8jMjATKiXoJzRiZLpeDGDv",
  "key16": "2zbCaGzseqGiHZiin4GBpRC37bwsCDwJkrn7xTsCfKPAZEZcSyAdgFSUzBryadc6cGCtH9P2PA7Gp4jDoBVHf7Xj",
  "key17": "39P21P394e6KsnmToaGfWv3Hc6WfVk1hDcifRwwgqgZnkNjjEcocFmfmbCZLyR1oYL6kLzRLPzvLks51vCadBEMK",
  "key18": "3eCqAgKRU5r7sEBER8SmBzKHFh44zKZ5MDPMCJ7Hp5wc2FxEWrsKJqauMZGHmHv5cfpoENX7Yh7XpD5oS7qcp3mT",
  "key19": "5j5iFb2ti7nqExNZeE8auqTYEm1JnZjCaTch8dPF4yKvGUNJ8UTq51eqhzhSEaasUbdG5K2DU7ojmS1JsDm5bark",
  "key20": "3huDqza83tF6n5qKTQnRmJckTYtaVeqrTzLnz44f3X2Ps4FyLpAJ13qkRXpdw1NtyqUH4dFJ1VE7JQEYnB2McusX",
  "key21": "4NFCjPviXXougeNeYSB8FxVgNBcgLh4ih1jZ7Ywb6BBpMtrbort3Z2pN8n79GeBwwC5EDZftKULbJm5jXamAbfeS",
  "key22": "5qi8aY22r1Kh4rLyubooaGDScKWBCB3v6ocWtUXQoLTKDyJLwXhvVTNtQfzJpDab9M56LNUbUMZfstMx6PENwaFj",
  "key23": "5EcKsN2KAzsxKf82PWA8fnz5Pbj7LkMxgE8YzHVqFHXgmXHQta2FG2PwPzkE2GB3sf2if1JuS45wFXKSzNh4RBwY",
  "key24": "EoALhYt3ck4wJT86yQXXwvykx1WpJ1mZ1LWFUpqH64FDZa1f4BBTRYdigCYfy9WaAGkC3JAYq7pVRGyKNKgXvcZ",
  "key25": "4VHvRdBhtwF88GBtGALA3WjRFvfaSSqCqTR5kkAmaca8pshPJY4GSsJwbkGSrq3Zs2TNc8LBTKUgLk24MrPwuSZf",
  "key26": "2et59FfeYfdd25bTacVhLuXLPHzMWLtAexNjAxqyfm6VGXYB1ok2NGXWgAKEdxUeLTUYPH6Rsh9AYmj6UwgzR6vA",
  "key27": "5UTUHsc2MkEP99HsnDspXEBdVQXgR3tnueXdABLMtDSiKPmcZ5VKquLkxuhahqnDxmsdRAUtDD6kngCQKche6cLd",
  "key28": "5BZiq4SYB8wFojmfpojPuxRFX32f7cnJtaxUJFzE4F3mt72p9k5sVZe8mN4Za6z12ipp2jao5hXe2GHaQUaP5Z2s",
  "key29": "i1PjoMcBsn1emGsCNbENBv3pE5dfCKip6joQffMcAmMDB4UsEAhEeUV5q3L8wFijGCJtXR8RQnzKq4YZh5gvRPP",
  "key30": "5jAP97ihfWoHzpUDYfL9FCvWS7FEGnWg6UUiHMjoRicp8w9uMgCmEWbdvbYPtJwLgcaREh3ce3vQzegdTEDkyxA8",
  "key31": "4XuKdb4YPe2EREEcGkAf3caaiXrGhuBpjJxXyhNzjuj8PXbXFc77NrVvtNvvWy3yyKNsUzoPTSLTdxtUkHUMz2rH",
  "key32": "3wXFWyvraNwL39ZvUKP1twsjnYezR5BihTLxphLY8opkpoMajzDhNL9xi4M9Fji17YrMiTex8irQj7jMfkYSAsSF",
  "key33": "KFg5QcNGHVjbaFCSB8CvL3LESeTCLJ2gJK1XDpJDC9RoCiuZVWhpvz89zUonm1Y3oNzFXe3z2Q18stKFT3GPKSz",
  "key34": "3wDJm43j6Q8qVo94Hhz9bppWgn9MNgRH76rqXyP1GXYWWf112yz1V3FRpF69w6nX773WjKEdRR6jQdVpHJtP5mnu",
  "key35": "4FCBTS1Rs5EL11Z79hDxwRjc9Z4cBJWzdg4o5HG2HuvBaqHy95dTPYcy6ZQtMkgyoh1m4HMP8dwVdutWDtRaUNSk",
  "key36": "mS8ywNsbEhXoWea5ku18VVsi5uk1LEuV5fNUnazdLDZQTTuxTtdEHtDCfimgKkxpoHwqZLXVM42BH9W6DrWCKVi",
  "key37": "3jF36MbzUSZm7GzT6zXJDtGEryYUPrGV2NAuXibKW2invTn2XZHRrLmWLrc4QevSAo76cv5qUXgrRLeTRCSpXaXH",
  "key38": "GrTZbqpXSVQtxfTbPmmSUz9La1jitjsu57qxDa8Vra8P93j4BFk5pyXZtaQwkyjyqycCUsPXQJhC2A5HRttcUpN",
  "key39": "Vmytz9BUAtCVrYNZGZZAxjWrpqN5h9vtHuzm939YwDF58VwnCFemkk62hSrniMhy9qsSkWSeyN83NczAZTWvbDW",
  "key40": "GaG2dypfY2X6zpjyesXJ3sVviRh5t3dekYGyWKqASDFqg4W2WLq1Znw7TQEarXE3prouw6YtFs1fhr6XSkJ8FtV",
  "key41": "3wrL2wX9AGxrrmt8JV3Gi9uh5XFbQYSwn4mo4EUnxkDcEUBmkBLhZUjdH2VhNVEpUWoAjJMS5rCgKWSq8LaSSgmm",
  "key42": "4Fhz5ADp64kRwQY7wBm1wesYYtLXSVm6e9NHugi2EWpEUyLLS6iWw9DEQisZ14BZLovxtziBkviyJJuJzHA9fBj1",
  "key43": "2vQt2Xkoqyozq7Aw7ywHYwpWhm8z1ZfiDCbpDiCBiQNtZqU5pAYK17bBdGWQhDqqUQHTrPaAp6zEM4TGZ7EGm4Sv",
  "key44": "2zmvTfk18kfv5cmogzkfcVzLheGSmeb36Mcb7FE6SRss1HvwgqsxRGQt7VZVKupRGzYSvsXDu5vdRZN22sMzEPLp",
  "key45": "3w6eQ2Eik192Cpgr5fEBcEW2AgX8VKN8Dpgk12cWddq31dUMqsGnzMn68JckNXtyjS78NhXUXhFC98gW6RFBdicc",
  "key46": "4wRV2fGF3bHbZmVArxS16hB5sSxgwnkEdzSrCcCb1m5KS4Ud2Jk5BKRummC3szvNmGEkViLDioqedT18Fw2WSob9"
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
