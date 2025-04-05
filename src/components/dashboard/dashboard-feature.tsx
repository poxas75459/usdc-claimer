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
    "4xRt1RtiweUGbZUFc8tCjJThiarpD6rAKEMKjv2nTJj7qkC127hwDv9fS83GXR4ZrUULRoNyqvJ9Hjb5Zesvne2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57m3Z1cRAadkDio2N1nLPoteHZrb4N9rY8phgY5VeqxCLCeKyewj2sw4hxXhh1RC4zbaq6Pn6BdUYob2eSWGKLui",
  "key1": "2xwpABv9MyKiKSrbMFqi3LEoppMbt5ExeCUbFijFodStguzFsgNE51KihrAYaQgYvsyuwCeSuAhQwxGx9KH7Jsoq",
  "key2": "5DRZgdzJkPqbkqa5x2maNMMAdvWddTRQvEv6Lp3UQSKA1Y9wtUCEprTENg6pmbEVH3xVADx3pdD61HQvbXj5LCVY",
  "key3": "4nK9PEWncorgqzcKrMjbffVoWY3iM9nbvUk9vEjgSS7zxFGJUQnqGtJAKoouV3qssRXdPgtcxw5KxfV9Qujnm2mu",
  "key4": "3b71wPPkXWjkgVHpUzYxWJ5ewrgEQwS9hJ2MY24w3sT2uWK5gjEy6bVCbheMHZPPaG7jLgoS8dndUZJbncVhxS26",
  "key5": "2wBA9QvahZ7N4PwisK2NY53XuU1r1UcBhvkchG9hgV6SpXZf4rcS2LYvzyNcbAuTdbvG1AJzXtU9wFBQMuSLMU9o",
  "key6": "4738b3TNP9NGAkiBVe6btGRh399AhCCoS6eHSEdnzRzTmy2gmzHFEA79RGA8EUcS6tV4Sr9Q6naDSrFVpuvsmpe1",
  "key7": "3h9Xxdt6VdiGzNjec1fPXvMAn9UZgeHBgtJmxHhDSNLvwTdsn82TYxT2uNinDneCvsWepKzBh1byJbPWvxfSnYtb",
  "key8": "45utmkuTE3ZEREddjgLJiFhvovWqS3ShyDsHygsP8WZckBK61yNCbX9TCaDa7z3k12X1UGScWpMo2J4rQUMkbp5c",
  "key9": "LQpWYqvJEsxnmFMexnwrQwMtJtYkafwPfDi2sXtaLehXYeiXps3w4xbnrLNEZz6QqUb36DNHHeRkC7dvLYnr2rd",
  "key10": "33ySUUwjmxNcnu3N753XiJwriFsqy9GGTRxVeWP9arPChBtgNnkyRVQYnKsTAHdo5fzGYAk7hQzfW1shuxN878Pv",
  "key11": "5fjYNnU4yqrifR5rdwqAp4R2EiWPXtrZzi1rVpbGRjr7785LrcBDodDdm46tyQGw2LezFYtaqBMqT9Eub3Nst2mk",
  "key12": "3Y21ZDZ9AK9dww3pETknCH2xRLgiJVLTZtDnEoRrgT4AT1m6r5ScDazL3p7CwivCNWBYu8fMb6UwKBiow3RRDnwQ",
  "key13": "2ZEjaKUubK2tpLLFu7zPEphkPr7XugZ3aeaPRJUHAQGkoAnGvSASxtQZj1HA4VgHYszZSA7PPFCDoHX83wiXMEiK",
  "key14": "4pQADt5NAz8rJwKDyQaCggBzX2GPoVjd8tMkHVD8dVD3Hap2REokVhK1yienok3T4Jmhq1ZetiF3iekztpTb5ZBF",
  "key15": "jyLCcZyQSfXii9eEhwGi5zanTu5fv9QNJnb5UqXr8TuGNDHtb6JFeAPmhWAo8TWQrDV4HhmV6ZYMoSKLoCYp5je",
  "key16": "5mwCkNYpCtFJixU3bmZQFcHGNgEJR6StX6h7sRiZUpQmHvS7NKYsBWuFSpqVh2yQ86uSfpUzXhJUPtZeCNfwMjko",
  "key17": "3jZe6pG4zUPqcK7fZB2ZMBZbT1K6yRn8fYnYFRx7LV2ZvLj9aJSoWWVtiD1jK2Zw7ot9C5S8PovdZ8dnc2ZX4ou6",
  "key18": "JURoHmBfdmhb3gnKDKx1B1E8F6dNkSEwj9wrexoPc1g4XhbNB1Y4pC7yTh5tCUUwF7fVhwyfvsNttx4w1F4xwAu",
  "key19": "4NPnKZgQR3tSD5GnmHpfBLPn4PgBY48n6uCf8qoMJ8cJ1xUMkem2yrSWWTvCE566rqaYfxzqr4RugxUFLhU17AJC",
  "key20": "7NXSGDApPVvYiouA75m3vXs65APZp6KEJQHLm7zmjLD5V7FpF7bcjcTwSDiTrtKdZzchLVvhz13nYb4gniUCdsN",
  "key21": "38BNVMcGPjp5iNYLy3yrRMqdhm4YC9eG7vKFqyq5JNPLfxLqzrnE2WYNB3Jj3DWdUY8PXvRFCRc3i1pPYKvcYekw",
  "key22": "2Fh9ioifBpGt3GVwGtQYc2CdYBoKchMsXGKvjP89x9oftgzYQDBPyU6W7yP9udhgZDzNxzRTGwmdqTJUQxnpTVn1",
  "key23": "54xBy5u2wEu2Ro3NSuze3BpeAdEFvz8GK7B3gTAvoLW3yiRwMY8Fr3hRS7bChAWXjm6qTNixx1vpDhTziTGUD224",
  "key24": "31XiG3Pvb6yvmkNHoDYDdJJD3D9BZQsXSQMP3KpCVFjMv57Ye3HxkvUCQUJsQG5MaVtcDt48DFX4Thx1y4eNo8ZK",
  "key25": "4PB4XunAdCCZjJ8Hyo3spnFy6n6WLhqEoQLosfx3vVQCw5GSTMZxdzv1H1FoCsJv6njKWHStkp7uYaEkutpjdiAC",
  "key26": "4w1hU77DdH8LmceWTamP1in36hcy32A85XU5CbNvuMXXgtgSsopdGGK7eUPVjEGqymzRheAP3UErnsZtWEtCdAHT",
  "key27": "3bprBSgReA2nCthzwvbKHiu4hMziS7gs1tijtCe4EBra9FV5yy4PL4yUfufhatSY9zaDMcHFJBPK3xkbKVJcuMSy",
  "key28": "3VfYLLjpcGkAxUB3aMi8iqphhHQETWNjhxcHhgfou3vJ9j2QDibU3DoM6yLvpKMoR926UQTpbJh7Da2agvVFt3hQ",
  "key29": "5cRzdidSWDYBF296MnPcvhGn1DtVbuqZLp5SFsniDr23FNeUkNtNRKCuZqWjopxhPxcPck9nGisBFmcWmVoK193A",
  "key30": "22q5CnxQueL65HwobhbUjLsepKCyigPZuwm4vrHddS8pXfUHiHogbVFnGTxuGURWVgPdJfdawyUGuvrJyVce2Lg2",
  "key31": "dTXdW8L59ZDovKhKWiPjVVVNhiH8GQG34n6YfCTyBQQ2YdPo1h72BVJKGx72je5QiC6YHcnXcotogyPTFJ4F3bz",
  "key32": "5p9Z2Z1fJ4nh713Ec1qp6kHwHKnXUegYqP94SQwKCWGwbMXvhMB5yCHd9GLfSwwq8xJ6UaYADNJErABrTHYG79ZP",
  "key33": "4W1q8aiMsNzRT18YhDe38RKBpMX5n2JJMQ9QJA8kmTrVoXkL31TxU4duXkMLqLJxpEDNJomo4JHRTgMbLQLZNkg",
  "key34": "2WQCLYYTGbo13npRjiRy5MMc9DDVPMY451tHWesxHhu3XEH8tk1BibQQqEGNxhGx7QrjVq8gpkmbxM7HKRzfQK96",
  "key35": "zj6njXs1xPpckmfFhBW2qB5j5b1n3SaapucoB3y9MuM9pYssQqfoWFBrFDyiPbSySWe4FEaP2y261kN59o4KhVc",
  "key36": "2XXDn6inofD4cYV6umZaDCzHyxBjPfGz94aHQgGfZid1VVfsTo8ohujQGpMWXjvmG5NQC8j8UTBmQLFqEqe69mV8",
  "key37": "3AL8y8xaTbZ4vvCFTMJeiSyDsgnLr1xzzvi2AvbiK2EdSibkvjMmcSzR87cw7x6EdrAZVdHvGcNPCNxy7jKGKXM6",
  "key38": "3G4rGUV83e31NWKiS1MsUn5r5ZpMqY2Fa6FD1vY4vvcpBffPLzhHPAtX3YR1fNdQXckKhrrqRtGU87BxZZ2yjNRv",
  "key39": "23pzuAai2DmQT712LhqT37ZWiMiDcvgHjenV9hrAm9y1Rd5GjynrPf6SRUEFs9dGoCVpQaxpnmt5bdiTdeKwdRFq",
  "key40": "2pDDtPxk6He6eDfXYUds6dakKXcmyJBwibi37NLPcdxodfTdkNYNZku6NLXTKa6Xa2WXXyvDEZFeM9Lhtb2x6SpF",
  "key41": "TeJcdnHRabAf8AJ2G9SrHqiHaWueCDPYxa4Hwkp5WQFLkJpCuXVxHfWRVsjD4Zj5ZPxAh74RnGhPsAYF45hs3jh",
  "key42": "6332tBkxHmXywbCNCCbXn2VsJJT2ZezRfPUz1d5GRviAfSPpqyuM1BM72vFYqYGaUJtmdF63gPfTGDTPpEET4816",
  "key43": "3V2kYy6DG3vADVLx12cbhkrSdoJyT6jt2u97eqnRG3pXxDzRHJzNhgaCQv6Ts7MyhAqK5jG5ak99aitEHnpSFCT",
  "key44": "U8iqBBEJvVxd8ahTd2x8sp9HSYHzWh1JKRYV4kcQprN6EnzEPuMVetTGxSqhoJWATyacCZgt4ddGwqUy7GHN4XM",
  "key45": "2cv2yQkfxqnX2TbchJB7uAi9NXmGcWR7umRfk6WyazQiQWEsN7nbetGCebvFVsrudKNrVCbTLPmirqTGToDBFnFE",
  "key46": "2am6Boq1HRvzXiNJxspMCYCoBGADticpPCSGAmmcUoU7KrbVE44ErBkkEPubrD1ezaFGrdJDQi8VLKeHLNyDa5dF",
  "key47": "2sD6Am36CFqV75r2FUpgsTUX9SzFyzw7QwGfXrQx1xHWNMC421vhuUKj6KB3AvqdFy9aD7ZwMHjTXLhEsrspQiiH",
  "key48": "3GnivWC7ivnCfPHRydXBoLe7tZyGPq86LH7rsa1jKPaTmbjMnKrJwC6KCsRft66jmmNCwP6xTyuXEQNHYwrUpvcT",
  "key49": "qrLo127ejU24TVnLWxeZDuGfSxJ3gK1zGpU7di7Mme8LgYpbgKEQ4goCjYKM3KYiJf4oQiwG6megZQMHpKT6jsP"
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
