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
    "3R5m8jGttZbXdd7gTCyEXheuWWRbyWDAuYh2NiCn4FL2ps3Q3ZDDKA5WohogDEBmYVh3JH9gKF8dM5omiTYPG6Tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpdgatCHJfqVzUgBx8gRx6oBb2AQvfmtjLrtEVkxBvCSk99NaKqqtN7x2TsNXqRN9iVeJGzgbaV32NHv3feRUWN",
  "key1": "2HTNHqWi8F1nSgPNwyPxS11X2oRpM9PJHnGdwqa93qKa4pL1YQihg4nViy95fmSyyEkH2YLJodNHZEuYNC2ZSqer",
  "key2": "3Hd1LEKxoTAGuDWWyjVgpehsRLU6SW1gcn3uN2rgV515g2iBHRoAxrtMVQ98AkYWm9JiisrLnp9m5BANJE7661vB",
  "key3": "4vg9sYkspM3BWmnb7kuc59FCBr3LnkMBphNQqoWGpxb4iv9X1aDc9oaYebe6MFbfYPdYbpe3BQeJvC2ipAmLWyX3",
  "key4": "2r8paFwSkAh26hWe88mEppNoeucPBH8E252Fs44PHgA99WVjK3TtDuH73dPTYaEuRhR3LYaF11JgJPpPmWmG8FUq",
  "key5": "3so7o3RQEFAARAq8tx68TSxi8qCL2SPYYsVPjZ5TKoHMo8mLodL46hqrbFuTLdwEYwfXofopMJFLBSSt1nTcn1eT",
  "key6": "kqf5VAvfKkTuspsUR6h1rupwc88GGw2FqTLGiHd5FFsmEY2vQzqijc3sKam6BYHy2KJXG5LuMp9gvwPLS2UqE61",
  "key7": "46FJLA5ifqZKf6WW65BsjbP6hd8anA729y1UjWCFoJpxis1DP2oaapD3ucM3ZSmF3K3v1yHFYhH9tYAp1Z1fKC4V",
  "key8": "yzzraWTAntc6vFiKuzBgwJuJushq1hdBy9hVWcTCXCtgSqzcBRpD6mXWJcDeQy4upoLRPaMeyc2nbUTS4Xg9h3H",
  "key9": "adSzmY3rMJPtrhD9wT78WviXQycJ8MXdU1xEutqVPmnUt4iXJ4w1zN1ueDMGvT8Ho83CKdM5ZjhWZoZ239TZN6c",
  "key10": "GNKxcYctFGHytfLMaeEGtndsNkRH6V6efRGMyp7rgHEMVoz5nr1GeqmAFc29BSy3wrezNqom95E3gmBZxCbip2Z",
  "key11": "yVb121wREb6qxzbtVPVsRu5MtZxJvoJSpBtkdKefcNx6TjbahDQDWDUnp2XD72iQugWAKLhscR1TSLwF5txSfog",
  "key12": "5QiUxuejnWezSTMkdZiJTt2VDw6XZgQNcUHcdAiv41MvR6GrNjFz31gkm2mxAWMi4fMnjq54XrWxw3JNv4oyvac6",
  "key13": "35XSUkhRe5tdCkTaGS4BzfVwXdTymoi7gLUys7tCa2Q6VeV17suvZfX6haoZWUcA1EgdvwGGYBedAJvMtib71GF2",
  "key14": "53B6HJkoDYFW85tFERfY3XetEfTW2VicLvhX82ZLiDMfhjQ4LrXWFsZzfenVPYdpcgXcoNRmtecQQUSxGPgM4Lz6",
  "key15": "3nNdp5h5ocu694STJAhmXiYAS9u5LAkbs2KieptC1SKvN3HWhJQh4M6PkN9YKVwAXECvEhG8prRQSd2s67HECSQz",
  "key16": "2PogkRKJzu6NNK3wWDZV9srYWyhyVsNZ1uJgETfUizyLpp4uU2FrXFDdMRDZg4a2PYuDXd4t91Dn4QB8k5XjSbZ2",
  "key17": "3ATpHjiPAmBuWS9pPjLW4QSvkM9dnzq6uUfmhKK4T6HuoViYGLey48v6wFJRF6SBTeagFxetprLtzFKaLi98XkxP",
  "key18": "31JDPYxoa7CVC7PTgZAGsNGy1wmo7jRCpv6KAE2LYG7fUhyPvVfTjWYL2X2v39Xa7yVwghrpEYSGuR5wh7kqzaYz",
  "key19": "21CP2DmoTpF1DycsWuAeLJrcEL377itzqRC2VnGZH2PxZR1RKJNLnb2LTNhw99VNPSZ3SCwcbFJQSo1un8X2Z5ye",
  "key20": "2k7A9M3vzN4hVqc3pDjvrMinCQ3PRAsQx833EH4Nj7D4uFsasCDv5ZgGzbk89A7ASc4p6kamkhVjmZsmRt3yEwsJ",
  "key21": "narbXr1b8CLViDRAZ7qvkog7r8v9hp7XFKSvRuSQWnZpwPQNUTPw1AEQrAYbE5B5mMXvkZjNFKEJM6A96Tbfr6g",
  "key22": "44CygFx9XuBmYNAzDdJPTsYfpbk93rtBPMXgJAwpa9Mryehib3whMQtjkcjPLiTt5AthrQRMoYpDfZSA6zopayU7",
  "key23": "25aRToWUQ8oWZEAiHHTYk6eCHNKzLuD73ZbZkoWd8CA5txuzE1mmbXR8Y2DL8m8GTHiskcMS8MdG85M3EMKhjBPt",
  "key24": "2ThFhVeJZ9esVg1U8UBoXqTQGkTWVrrvkKU1gkq49WTpmpDtVay5YtgHe26by2wyCEpMZAH9ZNTPKcZrg4WbEYu8",
  "key25": "g6a8iTqATPXy5Ezv86Dy8so73Y2uYjLMLDg9DevFopBg7kYFjM5h5nAYjK258h6tnmJDaJvtQCxu4zskm1phhiD",
  "key26": "4vP5zDTtmcaDe2nx3KA9APXAxKiC6bA7TbTqr1iGhbcT8imYM4ytEYwth9tUWXnzEtEWZFN4CJ4b3k88Qsf4Vcxk",
  "key27": "88Xhy5a6XkzBgBtpfFhSWXx3UiSuZoXKD8G9xYSotpSLr49gspeTXoATVXyTCPDs2dsQTXG5eyERSqTGSXwYWQ7",
  "key28": "64h3r2b2Hkhkyebu3pedro99MsYrcu85HF6xQLn86T6cwUXVk2pTTuRonVPrNew4BV8FN5yfM6fhtowXiSXzBQqX",
  "key29": "tSm9bnYqNAotD3sqgu9PPyjDRE4HLrREmBG9RAZGrzL7hkYr2DGxDXjS3DeZcn3uSFGLadXbjZebtU3aVK3y1ni",
  "key30": "4ereZB4QTbi3mjHzR5DMB8vuYuAkQSmT3vkrkDpnhrhXNefqgNqhkrgjVT7pGY5CYptKunnEkazraDGnTzttt7mt",
  "key31": "4Y5FgZCxUyEBD35ih62XeywgmMvPJVex2LPZi8kPCQcUCz6cKtKZFuXHMZWGuy5V9MYF3cdTpxxZWxGqbcuDLVzb",
  "key32": "5KgJc44zsdg5NBTbuASq6ABpwrYG39AkLK3iue9BCqFEYLvFnmJ5jTbHadfFsusc3p4sGQ7daJmUhndWkaXRunBV",
  "key33": "5auia39YWLVhu5V92VjZSDRvPZ4NY7zx4JwGBCCn8JFWSJ51Ra9sV6jMHXRoLxjDhs2mBtAaH4pYz8m9PeSnnDng",
  "key34": "3ucSV3ngRWCUiPv2KooUy89iGGvc82LjjpSnFEYT2yfWbN9gV7ZM7DqUwiKdiLeFKNQbUv2FsEjZ3zCr6Ncw46dr",
  "key35": "sqrdxNZGAjLaMZJr2rdgA4ui6As7CDKvXA5uhfEziSStPQmxwdU3yKyprKyK24xQBrHaob22VJG8yaBqUtbKEa4",
  "key36": "Zu827xPrHCyf4cFVTLvfyEarj7RzJEQGGCXMvVULRn9Q9EXhBGamVYGkcXnx1tqgvMd273AD8qajmUp6FDXQTwd",
  "key37": "5QjUGY21H2CUefC59tHytyptRgdaYEc9Xs4vxcFsxrs6QkpwMrnaiy3j6moJe2gT7LyrjctX4CFHd9cQm4tKFZj9",
  "key38": "5goNgyUwycag29t9HAWvadPh4UY3j5AXNApaaXNd6Pt9kUYDvxcgbcmgceBk97LCdXvDgm4QP9q9A5XZfc8ACFiB",
  "key39": "gPEXH84j6fV8HWozmS1CxWpzy2FpSbiPHZTXxfmMzn2wPMua6JM5sQ1K4AoF2bkKuHDTB6imohwQRd8QzJ52aPW",
  "key40": "3M8df4iFjrapRBk3ZKmjNVKYG8ngvxryDB1KhVJZk3YAUXBQY5nHfduUeNwYhK2xDtRw5BgmS72Hs4zgEbAbvpdr",
  "key41": "2JdJhKdtGGzBGj42vDWE2SbpQ93e83WhAs6sY7G8cYM76tKuJJrJwRfbUn3SexSQmKBrv7bHTCndcY14gTh4nttG",
  "key42": "247D5QSezDFSnwDKKSSd45d1X73JspPorRszQDxM2TfCGoNiEoGcm83JMGiwFWwfm6y7qmwfCksLykN4kp5hgHA5"
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
