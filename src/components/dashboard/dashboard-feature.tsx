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
    "3WbGJaub2Aq6ZychJfHVpzcAsecSj1E9fn3jbfW27ztyD9fq8qocyWxyc2examiq39TLK3rt2628ey22GmxXSPBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57oDvVAgkdrDjzKCMgCua4dKSUv3HnxV6KqWAKveHqdEWa2tc4QzBDWFhVXpkKRHCxaXBv4N4tZ3A3jCvu72w1d9",
  "key1": "n8ZhiV5ZVc9rp97rWA3BKAPJZrsqJWBBYEyYAdT7KPBxYnrPdEZyJM93VAnfJMph1L9bXbF76y3obKhoFF852ep",
  "key2": "2D7tV99f9o8D8pS2crJ9rfJBDWj1nYLXUgiahB67evN5w9fA1Cum65XhcjrSBNotBXgeeY7T9jvSML7ugHCj28wT",
  "key3": "4JgkLZa6Mu18mM7H99Wr2m8XpMpxpS2H9NZUEYHnsfEwn72aPaMMYuTmySQ784grn7tnNLbYswUbU8Fvj6qx3rru",
  "key4": "5rsf7QZBQuoKEJvcJpZrJCtUiYbi82zqCrN7s6LNFYhExBe4GkaRfCdYHSThniiGPwHTjytcyGTnto2PkCyJBReG",
  "key5": "3KXfwFuhWhw73C3kFoH1s7kF2H3n2eo8XCzir6SiM1RGN2msHA9yhAcBWxdrvDpGNg21URRqrFD8pmm1wLmM9ez6",
  "key6": "2tmKT8TbCH64jZVRWNtwnmv1u4MngoxYe6GPeGS1FpVVeY2ebtn4PDUxJS5F2zMizDimNJhXJH2XRt9PydHN2vWX",
  "key7": "3mev6gVjfjUxDLjrrXzSgNraKoF5Yb42QbHfHG5icf2daJKW6cjQDEQvp4mfQyk5vgw69QsN5anjt5LRxnYHaEe3",
  "key8": "1yYpNfutGYmZMMBf6EDYGRtisZBi19gDfsvnR2Je4YofbeozLW7QfRTN2iAeRgzkR9WYydYw4WecHC5JstK6Szb",
  "key9": "4yYgZiqtx319GJWMZ4qXwm7JRxwApFYkM175nq1xJ1w7ssMMrZ6qEV54FBQbfty6ePQAycv97NRBeNoHfF5q7chd",
  "key10": "3S8Gh86o9erEyvNJQkvNdXoA1Kbyhx9DkGm79yLEVNUjRcVEzECBXvp7pa9iEu2K1B1N1jKdGRPoam8uTiWM2hNe",
  "key11": "22omQLNmJA8uySt8VRmXuXVbBdv3Tu5pUsva4h7m2TKfg7zFeaqCbszc2di1TBsMkbEURKrxRAPbm9XQXYwEguNm",
  "key12": "4FtEWYcYGzf5UF8kcj2AXjP3LtGUk6ETawTnw6aiTcSouHCsPZ6YJsPM56qjMHgeKB8KSdqqB1VBaKed5pUoaQAW",
  "key13": "HWFUQNy8E77ppLnXXtJcycD6FbE5eWsrCdu3Ki5n1cFDsnU26UTkwiyNEmPEEmn96xfakQWGMdkCMBq7R7bydGb",
  "key14": "3Ae1FRiNvjmQXwaXSym3NLjeVhME1X1cdTC61jACs8a255tbtzWjiLUD3HA7y2SVGUyoXRPoYgHzewraH1ejtBP7",
  "key15": "51Woj2KDjPqqN5wFWfDEAHCm3bjGBMUN9b3jPVtcivxRVV6ViTdvFAStAadgnbcmWcnkuG88Vb4tqdmj8FFYZvTq",
  "key16": "3ppecJx2NgQeVJdHJXm17DxJWnpX7EQ2mKV7Y63u8mVCoMRozTWoPSAubamJKK8kH5uGGjoytbmyn3kGQhPmoeBq",
  "key17": "64AmwhqdoZKiC1jGrrJwkGo7eG3dpbMeNJTCrmKbtBFX9GfAHw7gThKLbwazv1VKmGeRABqbokTCN2Sjhfqsv1X7",
  "key18": "3m98T66NYAtCKSW45L6vrQVz5pfL3mD18XY1kSJds733br5mcyLYY3sr9svX26PTGNz848sLW8bs6KJgHUr6iR8e",
  "key19": "3ZRTKn1Rg6HguChdBNSmAgbNrXVUAEuPMN2bkobfLdLsbyHjsRnRFommTuW82Fttx4qLCaW11Vzr1PBu33nr66XL",
  "key20": "5DEJ3cxz5t8TxbzTasSCEvmLfv1vL4GKafgknzkELGiVVijkATVE1w6bSY1NdXNwS6VVEeFwMNLuzdh1KtsRop1M",
  "key21": "29FpNNPkBXSNPdCS2RJiesBpvGQsoLwV1BT7U8ocBcFKuFnQYAQBz5ph7NmDG6YrSAQtmwfPu3yG1i3MnrQQuHmo",
  "key22": "2B2Sagbsw5fK1xjfEiE3d4KGXKnBxBWwvedX9SNizVgxWazwcstUnjrZRRE4FK1kmkns3JAZPL6YM7KB95Luvmqn",
  "key23": "3yTPrzq73AqKkVFoJvDPui3BtnZ9HFbn7RkKkxbbmjeWSEv4gqVZtopkoiK4XfeadKQy9oT5A7M1PSGNvsatvjei",
  "key24": "4dwVT9aus7tnFozao1xqT7Gkcp6mzGKSHhjsuJeHDRjEsVh7vXmkPth8yfqqXatoBLojEujzqh7rQJW6W8GQc9cM",
  "key25": "dG68ezYxBxpmzEjABc2gzByfeB9nj4x6my1HQdZYYzi8TMEJmtGX7fo23wb8J2GETPimwB2uDRMLmBUEobiR3fN",
  "key26": "2mGhA53fL4k3kg536HwYjG1VPk4fVTV4g5vHTkkpj8qGhScYaaBKivYenQLJdvZEkfjqVzNzpD2H7YmLMqojUGjb",
  "key27": "3trLHmi7SaEA9qLGqEf98kVxZgyR3cvcCVqNUdkfVsLH26rYuZCr5PMyLYvqV3p3Cx7NX7Xu36yWggZf24ETMWUB",
  "key28": "64rQBiReWTNr7E2rpTiLAvuMJSeiLVv5pGSfkShogcbzu9Wsh8bPfnCYwsrpzLnMukvNtpYmnTDpbzorUnrB6FQV",
  "key29": "3kVH44sShoSHPxQk4idZrW4ghLSrxrCC1TkhQuBwvopRWGJ8kbLGbtc2YrygnQ9arYU7TpkGpXueRLBKFEY6G7db",
  "key30": "5ZDnVwKmiwgBmbyR1pA5VzXC1ysCPtg2bW5uU8arng8VDGcwyhAL9WZhtZzyeR5HxakPKPqMFqERM7FMaCAhjPjU",
  "key31": "nCogXnj4idauxUG3J9sqqHWha2nsmExiPJxN4HK7d19CCBH7tW7ZnRexq2tGgcvBdERQfAAoZLA9eqo3apPXWmi",
  "key32": "Ko99ayneRSohoLJJhAfkYCxWQtCc4CjzbVgGUTknZDHWCj64GQxKG8FcQ9hYUuaHkt5afkPUmX4aS1YdjquBL7e",
  "key33": "wxHcL1bw2v4ekFV6MhbEqobuXstH4oV1Yi8eixEV7rH8uzR2aAcsYtsgQ3jhRZQUSi6KXWYG1zHWEfAWLjCwkdo",
  "key34": "2abZXWq6wT8kAoGSCGCFeFiePxxGZjSTg95qhrt3tkaUHaY5EgyUz3c2UJEQmqt37Qvs1nGoBfVkw6YkaszdrEoM",
  "key35": "4bGpMBPh97Lo7tb8ikBti1K3ZkHvcRjQny3v56EH44TkXicNCop2PssU8PNfyfGpA6C3DpeqK8LiaAEJK34BX89X",
  "key36": "5REiCEtiTANM7t9toqM4FktEH1vyokbjM7qcqqp1kN9AJpcvc7EvH66xfM2nKGa2k24SypbGYJeW9cz9s2X7Bi7u",
  "key37": "43Y9stLGh9UP6ML4X7N9wCCMTseHKxADzMa2d48bjtyhSuf4mkJKXkE7LPzG1Y16yyi2qcZcALe4XDo9m2fmffx6",
  "key38": "5kfUguTvpJbxCzEfjTq8mXweRcp6UVgyghhBGqiicMNY6DChJy8LfKPH4bYk86MnbNJwsXC8F1cF7L861er389xh",
  "key39": "42zCVgcDHPUxe58ym965MY6oNUq6rtJK5e4wKqNcTCaHVs938V8rxGi13EnWhgZQHHVFM4q6cUYwbzsi1VRdsbRy",
  "key40": "37tcMWRcjunbWu3GdF9XexUz8JkUFMMezD8iuTrWTGqHS9h1bR3LaQGVpm1zQNjWrUZLPDRjESRT2kYuy1bJrpV5",
  "key41": "49rAcYSJnPhWNATFrxtzmHednCnpeaqMKAYv24TdXAQVbgtXXYtBUcb6kyh1XTAMizdubp6xb4QgkAfXKMTiE18v",
  "key42": "26dHfaaWMma8iqaT8XyJ4Sihc1zZGni9EbZwzy4g6yZj7AgmiNxEc1DTGVFGns83QDbKBoXt1J5K6WRsYmRujHDf",
  "key43": "3ivaCCHXt1nsaUN94WKn4fzgduBbcssrZXBAK88EboSaN1SteWDkXBpYKTB47p5DCXfA9TCpp2gsn9GHuRixoqZR",
  "key44": "313nbBt4u3FnaWnubKafrmGeXd97MbUw8CNEnsk3JbGZM17f8z6MHeGwukzrvW8W59XgYhy69tEEiMhkQ1c6hAV6",
  "key45": "2VQMh1xfMod3oyDzoViNDhobAx5PbEdoPttSkyEoED5zctCvgsoQNngYDq1bS1yRN8K4JdNKgwge1P3GEHExZ8pZ",
  "key46": "4phuzAo1tSiknXMzo3htMXxxRnESyFtdhoRz4z7XBMk77QhQ4CqJj3dTk6FAjuauxWX4FLvUbjZNRvJ3gZtjGChW"
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
