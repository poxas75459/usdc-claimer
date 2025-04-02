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
    "3NhP4C53fzMXoeSz2cyTcrbk9GaFVMupQ8K9uNdZ8vFoYMdTDyfUmu4dg8JF1kTX8NtCiZUpQMdVfT8kL9mb8JRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ksZgoZHUvgkJ4BQYvic85hfpdo3rmJ737Vt461mKeCGaCyxSEpXoidwk5QJR3sUZXMo5w6J6PB79cS7xRNii2we",
  "key1": "39j6DpxR7DkxAXM8k2w1daaCVCzbp6uHJTEsDzE7fu6epx3pbZQ9sdjVs5e57By7C7tyms8jAFgS8BVZmn5f3n47",
  "key2": "3AGLGe8pregz6w8a1Nvvkxi7v1oTVTcL78X6xRATWaRA1GKBVuwFuUYf32vNc89tmLVq3XonsDuSLaBcdMB76dRC",
  "key3": "FBXmJb5g2hXv3oLqVrb8MDxdcc7bUApNzgiAAwX3C6A2Wbs9pxJbLE49HjSdxqRCkexwoYQZteyungT4MRLEVKp",
  "key4": "3U227baWCU7a7p4jEJv6P3aZ3CBBnaHbuu7pN9PhiquJRRucHQkEjUpwwP7UoztotKKFywD3AmJqv22PTv7dc4gs",
  "key5": "2B4k324AhjtABoxmocTRQ39aC1um5j7qFKSheLHNWQeGfk4KNERGmugTscRMKUvsJgsM2i2UfQ4yQaSpxYzwRamj",
  "key6": "MMkYJcYwKRqCMwRyVvnPipjHUHazxFNLWQh1cmexwH2AoeEmHR25FcUenmTZNhKhBn46AerBntY2vAdG87f7keG",
  "key7": "3Cu5z9UYiBzV7s5g5qbfbXyYX3JATu9m7AxYFaccuUzYhBwvijTyX6sthvTxm7s5rXHcWubMnDfbfbngLKMJ52f2",
  "key8": "YUCgjviQ1NkbEFoFLnCzj6FMLr1w22o5WkWEe4pZswKeqkkE8U9LMXLmRVV3GvtXxshRefCTagC7LbhtYNvBDTy",
  "key9": "3S8FRZz315s2CrrfhL9Qybde4HwBuaXhisvjMD55S4GJWyZpsPoceC2ET3DGGGAGKpVNyMPUEXQQeuJG3BDD7coL",
  "key10": "2PfNPwWRUhqreQC9qbAeySMDHY48rVfuds6T2ScWHNxvkdgxA8w2T9HMkqiQjrSTsjumLJjhWzBLG7svEodyUaoa",
  "key11": "3xGN4QkiQVc9NJbUuquDzZCH51HD1z4KB1sH8AaQXcqkpqAtbHyhELRnJwFSy9z5pqUenx6qJEViAaEWDcCEh115",
  "key12": "4YmAeHXCPoup5Kh4TnVKVuxegWTkJ845UcuYLBpZoXXuMpYQVr94MYMEsAUXorbJYJZ923W6PbSVKVpUHkMm76gh",
  "key13": "3tANkNTK8YmiFbrFx3ZdMTJAyfZhuCVdXrgq4sP7x4daHvD4XW38rku9sFJKwvdjjwo9ZhG6HWEuuBD7YynD5D25",
  "key14": "5FXJuNpoeUTteXj767GSj3u6en1nGVJYnuAoKiAcDzvw43wze4PRzbqmEfoubor3JiK9QeX5CHDJtFhevqwaUYAi",
  "key15": "473LpgjzbjvK1Nmrr8eNmJcY4K79BEuyEkWRVxtUPxJZcUrY3N72GgfHntAkgM9qXfkC2S5YpDQvC1GLz5N7MX6F",
  "key16": "4Z1TvicE3Kp5czAtTVHTBCt4VBnkUVsXoB3mL4YmG4ivX4gx3pgfV2oxPUQsdJv78c5CH4FRg8XyvRCjJeJkmnxM",
  "key17": "6dp2YFPt1ji583pwbAGcKoieKGSgMBm64oi7bYTSK72zkq4tnP4C1bMjKPUPsweC2WSNFXaWbLGtbkmGUN7CdQs",
  "key18": "3acdCenGCo7GXhaCGRr2mW7cBUxFVhVtpruqCDsb7GPy6rWUoxa6e5k9popogsn1cHobdkBsj7AHuWigGs7h3yZJ",
  "key19": "577gfBu6d2kp3evbiNsQKkk9fyetCVFd4AJuRRs4BeTSDbifimmWU5oAGTNnMRMFfpUrWz5GzXdxQDj5WbZV7LKY",
  "key20": "3xvY4YjBACmw1Nwq9Mg4NrmTAydAvF2wAnKAQBGL2idihKtrEhqGEi7hHJPyKb3Nx2FYYDKGC7Qu1kmMDKTpvU7M",
  "key21": "49KDA9skWZh8mzWFYmemi2ibSbwtXRNnQKqFM7exX9cXg4MqHxFXinqDTAbJhGavSnzUsEwhk4iMDFXTn6K8Uuic",
  "key22": "AgwraqxjNtnfjZjm9ijTXu7VMJ2yJaSTfnVvf9481Xz4KdfTtrdaEPr1ngJJC6kx9XUok8UBGCve72bCHTqiL4f",
  "key23": "29wSPRfCjAtPU7oNwbwY3Ntsxa7oBZAVoap1hZGcvQpzSDdyJcAT4w55RBf5PH2frLje211BLBjzieY9rV5FcX46",
  "key24": "41qwDsKDTwrZBz8QTnaQtjdbdsAHkMAr5Ye2nfW1PsBAvooLYF3vi5ujJsUskBYL5RdKDLpqJ1z6E9ca6L2ahJED",
  "key25": "2S7u5NMRYKbtBktjdGhFDyDwpJgHWYMSRmsmfMh5ARUdYeZKrHU8KkzM2Z4EWhgK44amLA5Jpr2meCTcCxWZRKE1",
  "key26": "42wj1McBpPHNxh1me9bEuJKZKQBUSCqy2aB2HWwTYByyy819sCbqaw4EdWXukvoVPEAzxSPYHDhUa12HqAmu6YxB",
  "key27": "5XiZQpL4suPrvfpNvbGNwnSmnjBVv3Jb9P9FRgi75uvnAWmRuE198fTz5GYwusNfGRDkUEiKAH9wjBEBNR71EAV7",
  "key28": "SV5AUgw2DiRUJekv3Ae3jWJco72aeBGbPSDVyjYiSWd6VLr3c6RLch9QGXtQhpKeYYptbYx7xw4r2s91ARbL794",
  "key29": "4XAJVqA6m2dp6XSny3Mi6qLJvAwnwfcDsbUkx4GWVbZpjHwbWJg7wnZa64wPFcRNoG4RokwGHjqUcP5ExWcdihqL",
  "key30": "5dDwgx1TgXxdCebqCgjzcmsXyEvSphayGubFKtULuSNvGFsZ84tbsiLDuvox6un7FFcAVizRrgSvxP9GGuTeR5sX",
  "key31": "2cMR5h1CiVUrggWCcAUH8kWKaqioaGqzgLJoMRPxRCcuNGAn5PeDj16dLtZjsTji5qegnJBQ5GPBwHSDYrrZiKnD",
  "key32": "3n6VR6Sh6r9RkJTXGbMRzqkzonqLTHvUCQjRUiQgyyWdh83ZBACbwG7K8LJv4eTf3xFa5xZygwFYZ88nJ22ZWK65",
  "key33": "a6SigRS7Eb2VEV9748XGC84NdgVQTkfs6PUxPEc9wS5MLhz1oQbYMSSHnVVti5sEf1mRc7BkYNztKapjuLiSwEF",
  "key34": "SGpAAc8HkhfG4s2jJm7bTteEHXfpVSSBo2HLyUD6S2aET8hQLAmBjk6gqzwkqsiGXPUXcDxbJTRzxa78Q9GttiY",
  "key35": "4q9p8nMdFFhXpF3WxdhE8q5NNsrzBNdyEcHF5jf5tGGg1C71cSFtB7PSaSGr2GoL4N7GLMAS4rfJ1bMDZbrhgwQN",
  "key36": "qJtt6zriTenLYFGZocFN7h7sK2E51cMmBiZ8AcAPPX1pkwLYyddskxScXMDdyVZy34JCD6CeEKJqYWhg4bage6j",
  "key37": "4PNHt6U26XK5NvE7dmAwzs974isEPCuikirrDJ8Wzmv3EPV2vMNnfRveSmybJ28y3a6M4odHTCkfvgN2yG8Z2SD4",
  "key38": "3ikWCdUfQ3YgtFYzzp1aoNCZQmf6fkzXEGHcdcTjNEmCzoNYRqR81yHPwSZgV1e9fBKWCXP9LUHuaQd1poRjZL47",
  "key39": "2KmR5Vya3SJzvbm43zmfSEUvW4xR4AiHNqu3A9aCLDdRpj957Aau9H41YrZtsq5vJ3xfHgTcFhPZmxvXJKpNMVyw",
  "key40": "g7Jr8ycDEzc8GNwh3ujgRpV5Yj4CACtgZ9B6e7yHYgwvVkAetvRPnJLorX3aqcMFv9ocBKEHvVVS4SS44zaDNLH",
  "key41": "5j6rYVzjN4Hsc9GhiQAumDJW18HcPWabtgEgMxLjCCfDwGPGhWhPtY5WCjuDUKYCuyh2xKQh16tUcWiepTTS2iU5",
  "key42": "4hnV6ESL8UV2XozbX1dovn7MfdwXfahtcba5cYhV8DvfSWjcUPJPu5u3VsWXXjyRa8MhefTGCGeqCkpbA26osddz",
  "key43": "gmW9foSADFxytnKCMboPrJho9eL4dfWyaVeCTgM5udK3PsSJbCaiN7GYpeS5U2fhxsyQbVg67orxPAagD75e1j6",
  "key44": "4syspPwP2DrWLzRvLaXXKPBhVocRGF4MShgtGxeTeXK72KcqK4GjxBNgWSnoc9pj6wEkFoVM4aUx7duGb8Tc7L6w",
  "key45": "5KB1dBCDE1o8GXLqKU5Xzwz1Vy2Qq8FguJYiWvkVGupZBCWGpXhKquBZuKTYp1QjcRbNt6XauwoWEsqQTtrFUBxx",
  "key46": "cUqGm9bbFhsB1NutRWv4Y5AWnhnPLwHeidtGeNAaNd2v1cDTjXoyxQcgya4uCt4EKaqHjLFYin4QhiToSen2ajf"
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
