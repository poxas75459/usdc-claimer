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
    "3PTP2Jdt6bbAYrQdufT6frFKayKnQDUvuTfpYYMrLwCJFqBfGNCCB75szWQEdX3GSQA4jkEgZZdGVMxJmoy18on4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z5EsbhPHYgDdmfGWbvKFmcoJU7HarKSTQJCNahsYasyyVe4cKBhouncBXUkvRmdsjCemcPm39NF5oWJLxqC81BX",
  "key1": "2kBQLLaWBNfaCbXoW2vnZfgFDDS7xyMtta4D8sWe2Lksg1nyTeD4JCTMT1jUuTJ9FouPCFQM9yDG8g95xuyUmDNg",
  "key2": "3j33wr83PCnSZShXHZdhHh8gCtadmm45hTj7S4emQr2iZyqZyN1G9m4tANi9Sv1re6cxYpVWC5YfUg8HFVZ3VaN7",
  "key3": "23tycbFv8LdsVxMazTLUAQ6WPFDsmityT6fUg86gvMqZJLRmvYtUqVjh3ZuXXwPbMR3A9TpQYdgg6kkTwdmDSNG5",
  "key4": "3tLfah47DnGf2Kyy9Pze5LTfFGVEJ3vyhB3YuApmQkjiAsbXkoRPrjYDnKQQJrw6tQKPLb4toYrNPGbGWyhvJFA9",
  "key5": "4ZPNkWmpXHcMcNeffnkMVVDpFHACsGkVnKX581QMPf4S5Hv4beCCyDz4aPzZD4xKfDbiunZBVmwwfobjD6qahgww",
  "key6": "3nuQ1UiaU7qkSusRwhvs3XE8N2Mco3xtAmLJC9woibPkfoyxcT1CrPGBToaABtfxcFxEPa94D2kV6NkEMTkL2vB6",
  "key7": "3pUrPwAgv9XZBZKQ3LDEhaoaZKPrD8ibc9G3pnzJTDHtur73hRpzNkdaf85afNXa4Gpt1Wo2GNPUUuDW64PnDY5T",
  "key8": "3QWpYZZjdApExNjKppsK7ZeiyZmch7LqfmM5jfxPmhr3Db5D4tSZehQtKoMhZxA6uPSqbvFp9W4QVhY7uTPASLW4",
  "key9": "2AFg3SVX2v1o1qf8yJx2USfcMscmy7sRTiSMQdXZgeERaqTYFRguM1JM9vR5ZiNcqqhRoDxDQhfZmQV8xPkXn5qE",
  "key10": "zaqAeKE68Bxd3atnRYZrLhSm2Cj5B2JFQPmdF5K17C2uJcPDJYY9DUTesLh3MBHLzn8iiMDJ1hx8kwaqHZZUDie",
  "key11": "2GEBTrufmeMWoWpuwxw9AHMgAZaGZE2J67gwMjALm29aQRJRFSRVKz7PzgzH3DNT5hNex1SR5NX6HunxQUNTeYPv",
  "key12": "626EXkFELmbFGojoZHzXFgL8JKcSF2eQQhgdzMnrn8DhaamPZzqRk1kXPsh5biFAeeawyUvDuVeW2e5jUMqXp7iz",
  "key13": "HKxLc98yYr3iEp7mcnBQ2h6VBUWZyYZtT34YhD6c6Mi3bH4vvcWXD9EY1XEd7u9MCx5dq3mQrdW9G76z28D68vz",
  "key14": "3yFrEUnx7eASKhWZDi4ELGzhhmSaanjMQiQmYZh8Yzpay4g2p4Gt1EQHsb4BoFuuX6JpUhXaMYVDGiURH3ooQfBR",
  "key15": "3KcBb4mdmEesJkuP7S44wX3pyPG4r5JA23vLFYuN8buWqVL5krJUsm5hEWhtwALL8YigkzDaNNod8jwrpv9xpbbn",
  "key16": "3Z4mroh7gLVC8JPuCjf7fZhkg84ewpDyoEnBPvZnckyjjMuZG6pwp6oJGpngyW6JMazWH9V14Bv7r4u4cLth18Ph",
  "key17": "5SryamYNH8tcLHqFSMdZtd4fypWcxm26qEzeABt4QFyp8pabvb9pJM9iQemUZydf8XbwWTdFYqYw5SVNM7uh13fv",
  "key18": "2g4mPK2LJGXh33jbHkaLcTPZbsYVE7dnkXXVfFhdK2RnP1EWt4En9XLSH6VXJdwRzv5ZvvHwFdGWKgyoFgMUWkMm",
  "key19": "2bZbXv8pGo1ZAmF63qSR5YWqEKBSkAUjqLHnpeo1E2bGsZqoMkRX4kbJww3BEr1PYnuAkWkK5vZ8VazYg8CMCv1s",
  "key20": "4ck6xYfQsAqLiTNs3WbXmtYpwNjojfCiugeQ4X7mdUTw9MGUmpVqNvsC7yr2ZARqJdEPuoGZjtorCT9QcdQqeRra",
  "key21": "2jwSJVTJYcQAfmDtk7fDS5jZaiDRwU8fFMVKUzCTjSSHYaBohXgJzP3ghMoAd5q42g45uNLQLX56JnXTvNeEmuhC",
  "key22": "4PWMyu7XaqiFqQGTQYxAzqc1PofqesiXiwLXM1e96dxMNjADgWBwHXSe61o6Ps1p82fjLGZ9Vpogqshfvyc574Cq",
  "key23": "3Uidp1i9NzzxNz9ThC2aaRVopVT4ZxUuiW4a32xUvg9nfoSfXSatxiBFCwW2KyxQ8LCe2cNtEG9GJtvdHs1ofYzq",
  "key24": "4d4zyYbC3BMKmW4voc8xngSTnUbAUqQtb5LSct4VYUS5EjSqRboH8pKwWewuY4ipsh6fxkFWWGPCvsP8KZ29TDUW",
  "key25": "2vkDwACTcC6F2c296RBQWWyoJhRgFLpaMdBroAYmPAtqRNiQE3CCCGHZnZu38dCmT5vjw8438KC8F6XCSC2dwRWL",
  "key26": "462UwL7eZPfkYW5Q7zhu7mX6Po2fpdSpErYLnrV3SeG72f9o1GK6FDncuxx3MgmnU5gVGr1MoCSTkXrmBWGNa6VL",
  "key27": "4Nwn6yAz9teQoVKD33nd5UUeC3mnSt4pqEHC3g8mUfVtiW3stcbJrfw3hUPhgyn7Fs8LfctztuQiFg5Eh2krMuBg",
  "key28": "2rVkT6RjKDS7PxyRWSBc9Lj8WKWqDesU45G5BQ9Ex3V8zswppaUqK97p7uu1H9DkUw4nq8wtvxHhmikyFnxrdzvW",
  "key29": "5tugT5Sx1FthdMMQ6f6iK9LpfURKY6x6DbXo3g7wkJKHMge2LAFmiU8Yjngsf8WVbXCJwwmPdeunn2eshNgYjmKM",
  "key30": "2A7Yn24Gyfi6pbpgPcaUTXytuM3mwgmaD2TNqNqsoTKEtCHY89P2VtDrikGDyvDw8b7Axv7tUCXvKs1yrTBMqYqo",
  "key31": "RygDeitrR2EBFsqGFNtBsX7zVDNTcjJPbCoHas1XqxDpGC1C7V4By5UYoLusCtTdrfYazNhTRdtJf55RXsqBtJv",
  "key32": "4L2G6uMXYhrY9JJeTiJdaBwkpXLWeCzaS7LdKMyAhpHsmqW6Zamkd4o23uJz4Nhuqv249i7xw6BMuBv256qmkSdt",
  "key33": "2zp5VDRNpyqAwt8Bb4bVKspBvjkMtbo2UuY2ob6N2afN5h9umtmb9Zky8tkMf6n8v3SG4sZzh16p9JRjR4oujWcg",
  "key34": "5sJqacCj2f1rmjqJE4sfHFe4bwhTPkBbquXVHFi1KQdizP3CHACntXmbKsPxV1zjRSfbjQuB9f3fsqH2bAWAFWGm",
  "key35": "23GmKzrguSG9PKCXdZa2PrMAgr67dcJn1Nfbc58AKQba9SPaBiWGsoeHibyVdaPGUuJnSWLTMWzqRUFAXAsCDsNt",
  "key36": "4NxDWjjgNLitPWQuYGF27Fw1x3XLp4uZiwcx4TfmsoafdGYZgr5mYkPr4JCPyAeb6apzbh7Dtc2PMhqUkiHZ37Ho",
  "key37": "3wgeSuDuDXDa8DQpFhxJsTy5Y2WsNBmVmKKyJ4EM3GKzgkdV5us2TqasP8tEYCqP7vDEcqESVSmKM39rYZ3sJFHp",
  "key38": "5fa2tGxLDdeW7kic7DcTkcqoYLLKT2FTLD6yCwHrRi2MA3fvPdqJiRQWreq8tmyWrYAFNUs7fMiFJc4shDCmLu9R",
  "key39": "cZ2YAY8HPqMvoYQzC9DrTbwQExFvDP193FQeKkFRjG5Ahn5bNqG1wFjB4bnCeuatnaHQXXJP6tr9UrMoNrWisyZ",
  "key40": "6ET1TVwMgzNBXh1UiSLQDoPG3ssje4ZeKX4dxWpRpusf5YhZmpFc3zhgu3bBephUkuSsN3nmCW66vn9M16TmjD2",
  "key41": "2CJiPo8AfmWueXnwwxhJGvKatxPP6GvdXhAbdUDpff6qZXH7KZ3TAvzaVRx9HiepxVNoBy21Q5xGhN4Y3yW93NkR",
  "key42": "5JvjnTjK9BcCphGgM7bcrAec6xVhHBkebbCkwgR5QRt1P9wGNdKcCfjvAsUQb8KnBM8j79FysoaN9Xrw72QCLaPT",
  "key43": "2dvn5v4xFpRWSmkV9U6PDALYa63Es3ZcATawRiY75sWAJ8pB5zLo36djGZPi1hmWPoU31yL3jRGqnGzLa2NjuqYq",
  "key44": "5RcZy9Lyd18KJnDeE5znwSPEYiuK2b16oGznF43ngoJ2YEV26r6bnLbjRpgCkUTbdco2MRLUdG1wydr5uJeWqT4W",
  "key45": "2zVqUeXse6tFkKTng2MT6hPjfXXyDhZAB19AghQCJTK4BHuA6K598aWnQBR2qnfs7RFJGLRLaCLqCansMTjxb9Tb",
  "key46": "2o351vFdgJ2oNuD49mqL7p4iEkQ6Q45J8HkaJ7JdEr13iDzDUdVAee6vyCgzZpktq8XU6kt6tEiUhvHbu7aAa8pp"
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
