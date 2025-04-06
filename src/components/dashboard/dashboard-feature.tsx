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
    "2eieXEDkbqARSyY3Yt1UXRkCP6Rk16H6bn1zLASx2XQqxMvDBHaVnJzU4NXh7zBizARyNqcUCVzppRfzLQ11TiQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3McNd6nXr6dcD8DzruekSS2o8SnYL7QESyc7rjFTVjyMoFVAyf8iuoByypPu1Uz8kRDJ2SKNVwgEAomAnWZ44dpB",
  "key1": "3A5McUnKicEfTp6N8hEr3J5Ja6nRKvb3UeHkjJxK9fKbpmxny3pgz7AycythVA9v2RgLi7a4fPn42xTLbL4WaR74",
  "key2": "zDQ1jb8FbS9GT5ZHSWHdFCXHbRRUr7sjF26EMxfmTHGuD6DJWNpcL2mY6nbgc2ANBpRNna4x6LRsremk9KLm4Mh",
  "key3": "3Z1nBBeRS6YtCeTcETmW981XwZ3q14RqvtbiCf3CkQT8YLfpByhp1a7smVG7x9cFxVUk4JZmbhqu7zMEthL4eek5",
  "key4": "394DtVKyVYFtAEEPCVgKZHmnsgxhJbU5C7nFNMWH3N8dRwj1w49VdhUcWuZLCLuYvwLwZy43Ac9eFGsUUQPTkxhS",
  "key5": "65LmHnCrB3axja4Pf46cMMrfeqGBzLTzGpV8DaQdeS3TYFnajsyhh8dHvtjt6CJJuvZPagzNRvKyfpENsGSbdbRj",
  "key6": "2Pqep6vZGPwUJ13teMNLbqhq4j2XWE2NxBwsph83keR6wh1y84HuigeNERME5FJAZbqWEeQ3mzRJqYDEZ6dtvA2H",
  "key7": "nF2ZBLmNk78RJxqNorXNga8jX6e5DRRP1P4wvA1i32mzpiXypEz6ygSC5wsUru6j6fS2eQ5uo7P77mGUjFBRy3K",
  "key8": "Y7UqULdLHHyemFDBBmhWCkUXPnjCpwkh7gyKREZHxP86CAstA1cCz3sm3men4G1Fm67Rn1gvTpf24zvZUPaEqvN",
  "key9": "5dDhjyUnX2RW3dSoBBmE8PErYzajLgVKBwnpTTfX6fm6CGr3eoThmmxT96TnaJfSKqY7NeYDVGmfkvhShBDAwBir",
  "key10": "21cP52eC1awEEVWPP5DpnGrJqYkkGRkh2XHK6LWQcz5PRLUVGHZz7zsyjk6M95sLV6JPu9WaDBKqemswws1ATfus",
  "key11": "3CgNE3KbPfd448GW2s3KeJwQE6Po9WFYKGmDVPzHJX1Y3fYz6X2kbCY7xH1S5NtnzE95Pg8JMwPiqa7MhTggJHQ2",
  "key12": "9SNnK57DMJJRMRfcRAKYSmLx2eMsh1Su9htaM8b7E9kVz6Ge9qG9bG4y3as4T92WFNjw2WEmmjk3TmBpxnwzeAE",
  "key13": "26UqZNcZS7ovdwWupZrhvcZXfdkybFatBdQNymwweLAzsQydPJLdEGPjXDM23PtknJfAa6t7Y6s6f1LTAhu88DwB",
  "key14": "3SVDc3DSDjfjUVtDijZMNgdCYmQfkgJ9wTPU8k1odQt1TM4FHSxyB7ZuXwadmGZxEuKSrEGRaCCwq94Spj1CdtCs",
  "key15": "4hDuPgyABy9SefVoe8YrC3QPeUQEdPWwMLegH6chHbfamQZ1vyBPqdHEcMaLHJHSVPKKW5xCy4QBfDoLdoZYk3wY",
  "key16": "3fhy7D1FX9Xfq61rJdYvxduLovhQhhkVQjoa7vVNdsHsVQcZEZx7H71kWUM8kocTWtCBCQKATJfFvA54QFhbXf1Q",
  "key17": "2VUc9Nzw29Ei6kmwb9BNb6tVpFEKNt83gZnSozbBUj1f7aoBMMN1AUpAFdMARAy6mzYABd8ULhEMbWqyjxQgB4QP",
  "key18": "3vn1B3coSLfCBdzPu2nwC7Vx3jgwrWLH9LG1ntuFRUsuTnMzwTEa3VY81RNVWsmGw2HpEToRiWtVTsy3ogCVQpL",
  "key19": "vqb9YnKyFsovkYQqDfV4LSZHjoo1ij9VUFgs6fgZbafZWKRA4VfMACY1bB6zeVuR4Xp9JqvLGBYtkis3dLLgi1n",
  "key20": "2JgefayDu9h7R4yVT7jnvcDVPVbqsesyyPKgF1w2xX3Yrjq9GhSdoufSyeYAciziBo9ibdaNnaJxbv8dEU89AhfE",
  "key21": "5AExzoBKsHiCD2UxTFngZgYEFzcV9EWMVx21Evx3T1AU7ZCUFdko3KPbsVwRdBSLBvN6pdgySRvYwaM5daW2ug45",
  "key22": "ePYAzkxXbwiGAWvrKm4NjBusV6vQQLJCo45SEEhV3BVQdasQ5SdYX2rPbQiE1fXHKhoGZRBvbDjnwnRJjLo1o8S",
  "key23": "d3vRUmknNYNAk2kqAo2Gs2KmrAayNERnyYcczKAuQfQnCB3mQX8FfgrQrHwn8sM1bsgUMMXFJiXyw4Wdvd9KMuX",
  "key24": "QumpfPX9uzn5uJ9enQRmKLWWpe2FjLpbgLjRuJGZDzka9MxgNv6BEExFtL5NxuFDxH2LxasAcFRwxXjKYTZVTTk",
  "key25": "AMJT3mwrTPz7pzXJXp7cu9jCeVcqaPFUcACddvSGsrrrmAENGwLY4a5r6HzVNwvKpSWWYt9JSFLuuSZY86UNUmq",
  "key26": "3FPKJ7ws3k5nWGNyA6TZtcynduBBt1rK6KMW2KQmHhouht4RC71bmu7uDnQgsDbv1t62vDYaG6MxbXkoMKVUaAZF",
  "key27": "zKUPJ91RdfcUGbRihqvcRRGNRPnm216nNfpCzuydh8MouANZLgFVyk269jA5DBvCKA6Pnb7EN2uCKJfTq6kmU8q",
  "key28": "4Ar8RjNQaP3iSHWbHLP1SgyMboCJYUP835zNb4QBdRne8PVd4yqLisPTfGdCQtWoKjnFtrK2KX8NPE2cmCyb9DxX",
  "key29": "2BV3N6jfFswQNt4q1qFkdRypBjuAHhVhfwhXuWjrPeFYfZJNTQbSxxSzkRCiuPFYvZ694Uo15hPLGYgEsMrSxSF6",
  "key30": "2hGECkeEScxDihoXc1jF62f4JUmCRYkrs4ENvr2JMWjYw2iS5TVzu1NU9hafGVNZCGAwXoaxpbcJnXxduJgkvcHd",
  "key31": "5Ufj5nsdFTQ43Hns5j6FeUJ3WXiwsuA54bL4jDhkhHLFssHRG3TiuMm6uUKfx1MWZDwSWVfk48NVtL3XE6JM8Xm5",
  "key32": "4URqq4KpK6siBNrqKBcNZ6woBenWKYSLW1rreaBF6bhtjfy8XmJbDJmoWUqdDMSfbdcd3CMcqGyJWVqN872gWGzC",
  "key33": "4e1DHoiQwe3WYRa6KRxrekzqjha57m99FYogRJJXsnWWZCkphpeMVRirVVpsJKG83sVAUAyHBn1SCZZi7KTke2vw",
  "key34": "5wG3379en5iRN85WYSqsbohwKadfWnokjE66f99WVv8vkQQHB6RfNDGDUCtDPUAXVxVpntBpVFpQFfE6BrKrfk1W",
  "key35": "5nS12usBVoAPUxGibRUKStiTAqQ36Tffd5AZSnXF4zrq7pjaSNZuR4nnzvecYeD5jUAVa657R4acBXas4221wVma",
  "key36": "NJ4XFKPvPfuKpkuVEK3m5oDgUDJgdqr8UnFUyqFj5yimsUSy69hbDhQrbQqZ2aTz9TeJp8HKQWak6inPaWg8yVc",
  "key37": "DCxfCaYuBzFVdov5LEmksLike2QWjTmc6bJknDAnufJqBugUCC6Hfvj4Kpo6jwMue9tfBVktkQmGeNm9CJ3ePkT",
  "key38": "4CBJSxDbi6JEzkzqyzHhtwE8TJTBu96qzBtTWdxWic67EaWc9uv8FGsG3wmQvGWjrUSYWnXZcTjuu8t6UiV37bcJ",
  "key39": "3bd1ZU4ovEhai1pB8AEpJHBmL3uFisGN711o97AFRiwi8Fgd7pqjU5omc5xoZX5ZffAoPtecxk1fE7JXruQcrpQ",
  "key40": "5cKRAhP7Zno88GQ34dXSRcDKLq8o5rzBQJtgRJx78PmyLFjTyySvoLczAp1YfUQfhxMpK4nedvbwGyu4e6B4BJ3q",
  "key41": "4DL533eVx1AhVD2RqurHgJSb8KXeRfNpV26yWuEywYQDQuYYf4oAHdLmanbfczUQStHcojXTHs6U8jtLCZJyVz6k",
  "key42": "2ghVMe4eeBH9XgFkMWapgybGTCUCKCheoTSxUc7aTEnT7rHKRAamKFVJGRaizUsR3JZuoz4sADdVBCMoykCjPiPg",
  "key43": "ZkxbCtzKYGG8ve1nTw5cMUbd3uJ9JNy9hCizKXMKDsRUqEutbQ5Ezxot8cRhzgUEsHv6wApkJB1qjJBLxFzvj8u",
  "key44": "nwfcpfHp5FDgHF1D8sUnftFbBN5mP42HUVSkWKukZVkrJcGn4gWWvAWUPi4pAJ7hgftEK2ZzkW9921hCcCnLTeC",
  "key45": "5QWrHiyJ1st6FVxDdK3ktZsSdgR2dgvjWj49DUp5bqqR2N7CvgkYx1n2dqjwtgGU1dGtE7sqMLSgPVmys2JDFutw",
  "key46": "36E7Muz3hBagcpaDv5FfYDgpQgZVsEAvE5mXcXfPrbCxsfWWbi5WqjDkFYvmrzbMhDwhCae3dTMPtX9uyfKeAfzY",
  "key47": "2nzG9r18HfhUQEBVZtHzysLADK82SzyrkmT22ZHH94wnfJxuCc52LDkeej6odJdZ2WjJLQpgDwjs3DwWgMVqYKfb",
  "key48": "41tymLvWrKthaLoodAqspfzqhfonUsgnYqTNYLf7ZpCh6fE1G8MrxziXJpPS5HucSrC6TihZ1XDLFnWe6rRw75Y3"
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
