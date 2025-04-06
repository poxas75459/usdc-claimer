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
    "sqv9jc3yQSwBLwNV9KBkuX1EZfumdB5rURGTXtVzFmevLaQnNXZS2WEM6wzNPQEmicEvzdXD8npT6Ka1yceeakc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rB65FqNy8FqMrDPF1w7W2QGUwzqUfj6AzuU456D4mAMjEKcu2VsKKoHEzFkTuS5TgkJ7Ra3ENfHhmwkz9nTC4fq",
  "key1": "127nfEfy7amp4oFoPeaoNafDd8eVpHGFrWkvuQWLCHA9XMXn3wXgrjeHagumDyGypChnWnn9PJ5C8pJNPGt1uRxY",
  "key2": "4qj7JwBp1QCD5NxYTrWsKqTbBsoTKyEzqxgcnCPAGauMSLKUx5Q9VyB76zxmE5LGHZbVBbNxPzA2taG9WRtq7x3y",
  "key3": "3TZ6PNJA3uWzQBN1PWM9WYP3Kgi73Py44KieFzBWKtzCW2ihyxJWUr4pTXxisyytbnKsnCQZo7Bvonb61BioJUV",
  "key4": "2mme5HrhUxE5keQyDh12wyvZ5gB7Z3YSKJCMTczyQ3YMR9253u3hSzruEhBaMjXXJARDu2hjTvHbkP41q7dTJiCR",
  "key5": "3WFvWu5qAJKvPcELfS435wiPXi6vhuT6DNr3PzLkpXvo6vfkMRW9sxfpZRBS7rHHTbkx2nrQgRsMrL8vnojNT2Eo",
  "key6": "4Lr4pKmtZuwJ2YDa8Gs6xEqgnfZ2x5gGMBEk1ZFF3hmCfjkES85a2QVpkjQmV3GiYfbBp5MvXRee76UUGigesRTX",
  "key7": "2NQPUymbQ5Gjf1cjTnApPmifoFkYHLkMp47h7iAuhtTDyHHwwE9AoDiGp5qVMQbkQ5wBWq6xCR6fUpAXuyCuFE62",
  "key8": "5HnaeSWMYi1YCxU4Fq7wg8KsxkhnLicDjHkBLeQQw69jPf43qwrFZ9TNQU8PAyGQ3y4QR1mEdD9YkhmTckth89cX",
  "key9": "94Wd9uUWKppAysCwSVFJjp2G9PBeN1QNkrg36FeQw1LpNUQcbhMVKHFtu6NadkLVqrqwvgHK2DdFbaq9x4qquat",
  "key10": "3vVuu2W8gHdb4AB9tHEWaQhUKGDbmUD5boF157ULponEu4EqPk1kv28xZQypkmqSzFF38QRf5Z4ZnPtmu1yK8K9a",
  "key11": "3SSuvuyNvV23arNiALopkY5kgJPsNNK5A2AaF8kZm5gJPjFAgUSQziZeg9obK4umh7mfJEotAoSPSuN2xhtarxHY",
  "key12": "28f4pWPh1VjMwRrLU3JUqZadCfC73yDoH8fLRvbCZZ9EL5xymdBEWFcTQr5qxFewxVNvgHJbAFHGbakBeWczoiug",
  "key13": "3zbTUkyGvamum8QciDUwfP1S8gCBC9Wo2HrrUK6rbqNi8v8xvbtjkVvbZY8xThVo6S4PsUwT1bBMXcDEZtWZi6Y",
  "key14": "5s1jkuPtDSk9x3tMpgz4BYHeX9994ZdUw3S1z9QhPZUnQ6c2XKJKKHfMzbR5mx4g2wueza6cj8o9XAjUWrcDtMkH",
  "key15": "3ct78PTW8KMc7RC7ZAN6jLpeVZoSKgHZVDvvftv7c5XHHfvNwUzWerB1Uy8Lg4EjbLUpTKxEkrnYCBhGKWAPMHUp",
  "key16": "4jecS8wWwbNU2WzgQzFM1CuymibsNbXAK8f1jEBpGvUMXsGqHw2bXPxmGVkRFD99rwQFv7kRjfu8fRpkJ1gsmrLK",
  "key17": "5wH8zeSkprcuBTzdTgRBxUn4t6UmCCeja58LgwpVGnz4VQjeVzfx1m1nHKYqRjVQ1ABpVyJvf1VLweF2BCDrVfuV",
  "key18": "4tKe5tq52zvewXAPZwJiggdxehps5Baqcqqo7VNuPDPHPPydkB76FrEQTBNCCKpGzcKNpoQvrA1KSL45KZvPXdFR",
  "key19": "ytqjQ2p41s6tp88hfENLyjRXi5uAjjb25LgL3w58EGyrHcBmnbPeezNo3vFobD6CjUSKs1fad33KiKykFGBoq3s",
  "key20": "41V4WNogKA6kjdmqiLYDMuNGsFrsJxb5qMYHXizvA9exWRmx9aGKMVusX31WY65mJPqEKvAXdbCZSLAUGDhUabM4",
  "key21": "Q1hCRFTrV6BP7H2xdhnWUrmv2nMuPfbo1ZENmJez3QoyrnJFwgZcLnmFxd7fNf4YwLtG2uac3vCqGApCDkXSUYE",
  "key22": "3wJiezANGSkxQwAdTB9QXi2TiFdghA5Ze9CTcip3xEbtbJopRrb6hzMW9sZihUAr1PK3QDyBEquaFgRZfyXKo7ni",
  "key23": "UPYovfL8VVkfsLE9oAcAnzxDuKteUyXCYqZMhzWEHbULF6rm4pwa4YxxF1FcyK1cCgw4pavKeEShtZB4TjaLdid",
  "key24": "EnhiorKLYUPgY68LHrzsbVaZe4Z1bhhvt4svkVYVATyVwSwVzGLXG7Ht2mZxyBeHYS9oaXvxbb9cNbdfbZZWszx",
  "key25": "5ychaweUjJv7a2YAZw26A9t57RbDae8GW8iGE8ZvDUCKx8USWnqk9fo7G95WNTnC52B2mXmkfViomAKHrBWMVpL5",
  "key26": "4RJ6mFfwHwAJ7L5NeYwDNchMsLCnUxfuzhhDCpUNWuK67cCcm4fVikEkynVRVXm5E83N3Z1tXyEJK2Jm4jYN9uDA",
  "key27": "T6wBxPqSyra5uTvK53uxg4cfh1NtgNZ6F72zzZYDBKyyNHrqpgfmNecBd1sJSDuwdea73VKAiEWUokfEg6xNpp8",
  "key28": "2wN69U36P5WAARDDyNVWUvvYg9ZmUHkF3pvKVuyLtCikbUvx457i1DxLwLMSHJAfjAfspJaDBnt6Sxw3iFZWuMKM",
  "key29": "2nKXtDZk3HDUf63H4kKTGcTnspxJbxRhh8VCNdaF3P6i9WEuETcCXv2K6E4gF7bKyTtN3uFXaGqS9hpqkC2gmbB4",
  "key30": "NsJdo4guVh5hjSr5wCT4H64VsoKQEkgJm8Ddy5i2oQAzyRw5mXztLZRCLbyK63YAywY9jmL659sWqqYuv6Rgcnv",
  "key31": "7ecq3hrkWihVXa7BSQjWpS16Sujm4mMyTcQki2N2cUwpDoC4d7eBVGYLQovSSz7eb6DSaVtVZ2XKY5BgMyUMWHm",
  "key32": "3rVKkA1rAbdnweeDWdrziKE7FVmnJyeq8hERtGyMTCAvDR9YnLggw8wprhdZbCsNtr6GRWJ6AoNxFtmenddR1fac",
  "key33": "4NYqmwrpAgGC1GsPpApkF2tFK78S7mC8Bnww5DTF9ZG1RNEW3c4HxmMRtgq4DTWZbxYFAJv4oRK2GjPHqJ7FzRfG",
  "key34": "4JyFS7TucQsWDchzSLJkfC7aCoUZLxpkcg2wJs5xB8QQ7zicRg8eeeGgARguCFDxJd9XJGa8hyY3yQY7m6TeGFZg",
  "key35": "2Zo8iCE7tST3Ne5iwW54nTAnnTYrVBnMnJXNSnvTQgNgsbPTFo8TjjLNFuRwBf28xbXJMWs74ZGdQd2zaaPMqLDv",
  "key36": "4Q5DBTwiziKqEQ2pHb8FJaqwRePow7uJi6RdibUnpjtvdDLULA4q96VvRMP9L533gqMR2vTkSfU5YFEoArTB995T",
  "key37": "29mghkwEqmWb6pvPKRFALXtsfa6T8t8kXmy72d3Wytuh5P2cWdPoQ61JWhYzFiVMqw6NF7mXPGmCnCxEzJaShC84",
  "key38": "39x5DJdSgxyqLPC4fV2VNZwZNxFfP4V5jKNrSJbkhwcGt4bmXWayQDdRBbkQqUxA4xJcpgBGR8FABPZmxAKcrtqe",
  "key39": "3Pu3EDcQyRJ8PBuM2SHPdL37xVub8kSMvEYdPB4xoGYVLnMxRCjjbmvv1F7jZb6ZTCvgR7uqEnq4H5pRyYbG2fJt",
  "key40": "4qvLD3yN9t38J9oVUYptDrfFJSUj9GBTS6ti6byAKuZtyPLnb2fJ2faETwQM4hcpVCacKs6RPGWCvETpzh9FUsTt",
  "key41": "4jSvwbaDYHe6fXAHuXtanf2FsdmduFE2sk3mSpAuRxYMS5AugniPLncmooiw6AAX5JCb2k58zkJnvwHnRrvpW8vb",
  "key42": "29SrBoPLWfu5FymLnUc35oBKh5SADjKX9cgLyo2JawHiqiEYU2AV59w6Z5XRsU2UyjBh1NiDkiMvcNgxsjRc92Bu",
  "key43": "5xH5NtQeteWs3AabRr3aABFWRH6iKkYZfRHcLusoksPf47SdFE5kFrHX7fE2zMzYYYLNbEDqizmYYXyyDQ17MP3g",
  "key44": "5tfgmjty8cE7wqxDY86itUHWmSx2URNL31zdbqtNKNdhWRndsHCYD572zhiFX4kXws6z4yR2XB8sCxKx1U52inni",
  "key45": "1qSdN1kvh9HBDXAGEjC6f95pyzJyHzVwXEvZ5PZ2cxqQtKZFejg5psDboDJUTENGZFiSyv3qEbfCcmBbyc3LSqN",
  "key46": "3owyPpGQKhmULkkYefLTkUsYUoZELH7recWVw8g5YtRRE4fqfLWjWWqnsZ2JP3jiaFREXDf89XYDSyV1t4NLA95Z",
  "key47": "5gPUX6KnECWb6StA4cMTBcYmo3D75T98n4wHYRGgnwMSiLx4HUZJSnkRDh3pZsrUweBFCf3nrpR2j72ubvpuk1Ek"
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
