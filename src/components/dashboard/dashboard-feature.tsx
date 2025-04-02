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
    "5XaF4dcLzjLdNdzPdeUniUxPivoZhmnSgCesc38AQBx47fsPAtPWJ5LWoW71r4d5qbJbDD2UY3sAc22eh6Zn2M6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNN3qq6L1korALoqcf8u1ZUUw9FLBmUGKK85Ue1ocjvq77oiGtx7ddQK3G3MxXsdcCxEBcoQTyszbyk53hfJkiS",
  "key1": "5hgWLxv51ZuhtQTYXKXN2foqE4RkUgbv77zZuyXMX4YBuDjap1fMU3EzWwigpd79Ru4RirfosoNav3Ce8toX226w",
  "key2": "5Z5hRAS4JqcRmPajuK9XAq8a5xJx3yvuGxugq6hWWx7hi1V51LdyLNVrSBe3JbcyZKf6T7U7SSZMNoiGrMW3JcVo",
  "key3": "4P5iTrsiK1SGiyik47fTXWmESXpgvFNAPzLiqg8vervNwpXPj7Ffkw7Q3BQeHTVysquFWAMccTXTFqja9E1D5UPo",
  "key4": "5VYDXNYf5JSASGssmkL9Tik4UCdweHf6zXApWAAnVjWC3AopEZ8Y1jcR8cMsR8mVaRMoRrsWrxNgKHZkMMPVjGwe",
  "key5": "5kgFhnh5FcZgGy4Lf88US92hiL54qFwu8xKKSyGWHcfRCyxfsfyAb5N6qFw34nBk33mSmnR62rn32tR87H1LEH6o",
  "key6": "5gtZdjED9YLbaEMkrzV7x3oUBTUhxpD69z8vH6Qks5tNnaAQFKBLiWADCoch1eWMD4DP7A4VgLzQjgXyUxCewYGX",
  "key7": "5SikqBnLx5LVEzmunBhoeZfJE6DBUPDTi42jWfzokaJUM3rfrqrtr5KDuoBH4ocFEqWEiV7R77hUubEUL51a5D6b",
  "key8": "25Z3X3N76QQkmk3ft1E7VRFEXv9Jn1WAy5MzFxEaQGQZQ5aPpkC5UcYbbautr3ijWg9YXh7PNm2QXhvhYWfhfd9Z",
  "key9": "5ibBNAjMkudk1Xk7vApreWkHqeV5hzNpz3R1bUSf4FNm7Nvo5oiQBASmQQro1JBGL3hgmbiGMxLKWMhh1eRaoTZe",
  "key10": "3fPQ28wZoChQz2SqbtCuey48N7gM8Q33jamhSisE85JgyzRpYG6FhHaVwMUuMncJfWxifC6BJRUs3ALyyfm6ibQr",
  "key11": "2JRCBUH4CkdTmqBAv3J1TDDjD5atgs9o6KnSKC2wnKgFB533J9riQE2ExB2ktChEdoqHBCfJ4yEoSJhrhsxins5L",
  "key12": "5RFcC5dNNsM3W4jn2KTpSeN33KrqpkW6jAnkm2ozpq1uztSws4KgjPvrifjtidkTkRgBhko4fkZLi7XbvZM7trJz",
  "key13": "5ZxbzFMimAzDQssSnTRdaKpNz9kxJaCB7E48evEX8SioLyggWBrqhE468giFsS9uAZNsMdfSeysBBHrsCEz5GByo",
  "key14": "WMmddYgcPKghNnbcczEAL1kbvFPN6SMZ6toukDKHJUB5cyS543K4gXZBuPe9YksmGYMw2BwVsDftT1ZhF62n26C",
  "key15": "3FbPPfw6UCFBte57EpMYu2x8BE5q17szXhC1VzKFxbs8FXJhsdv1bMUT5LuEYxdLW2GTnoWYxLgjMBW6LjYgF5mb",
  "key16": "yzFvoabmRbMEZk89inbBQHMubyEnXvhudSbXfLZ8KW6XQ6kYHdjn176rPgtQ3wyPZFFpuLpTHtqnwBsCmtno4kp",
  "key17": "4tvMwx4ECi8WiUfWEPmePRGDDwHY8GXs8PevHk2XWayPhaKxzGXfbd4gQ82QA4ojikoHGF6wKdkYWMkz9BXE5i3L",
  "key18": "3jSQ18vsBCbFwwKLHDPaudnSiz58z4jbSwFuVK7o3TrxSh6Kozx18esfyQxBdr9duPbuXHy62ZptJghRXsQUY7GZ",
  "key19": "mdeyerTNDriGS2oGg597KtfwYKzERBF1cUJycM7vEtU8w5JkJodyrWkvTRgvixhzo7p2ZXvx58pAaCmHxtp29Kk",
  "key20": "258mzFT76W1Yrzrkm5eETgsKGv9bYzDMHbyY4MRHeqVUpHyyVpKncCKFswfjNN644Qb37dwd8z4YUWUk2NuifaBU",
  "key21": "2gsS6D52DE5BikDL1BmavcJp2BEVprHZPPzfC21GDWG3qtCNmALxyVVyWP7eXkPkd72kQTKSXXAk5ddnCuSRzoFT",
  "key22": "67kebQcS7Gwj62wkAXScaT9rw4CXmCoGKooQFbJAwG6yRzaYznqeSSjgvN8KJx7ujSDPwsvNHZkU9UVoT8J3DvfB",
  "key23": "MvjiBJPMiepHewacz56eL3wAhd7PKddRaCAFiiHHuHCtxupx5WM7ZTqh7X5qZ1xmPhLVR9PLLpdASTLNrQFmzW6",
  "key24": "22DQ5r3XKzTpKdKFGwh2WJNima3AapSenDDWJ6vFQsaPQSotFjhs9AEUhmhR5xhgPZJTWfHbey1wfgksToGk9JYh",
  "key25": "4mmXPvvTU7X2TFWNG7tUp6XvV6NFpsMMQtWDLKgyVEV6oh4pKy2rCdJKHvcGriYTZcRXNfWiKWAJpN5hrf7ec2Qr",
  "key26": "3CZakvdo2ctM55gCUsnLbQkkqCe6JA25ZzvsGn4V1ZgnAENk3TswfW8p8ERZuhXc4nCDkL9KGm2UPFWcrv7t62bF",
  "key27": "58BLUY27Tzgm8N2H4zowNETSe4GBWNuosmM89UhfW26od6NAn3ACMJmxoCsGnBvKCtDTu4KCnXA19Hqk5Ws5NJPY",
  "key28": "5mGpgnLFDbAJ6y7nW7cSA9jN6yDrXYdLwwDeDjYDBUy41QKQwamF9RiixA1F2bWVHtL4hdS2257i3pmALRYs7kJ3",
  "key29": "RQRKqbcU16zoWxUmHARMjT2EJqMBXNcHrTBENBmeQXZ3N5TaaoTHGtZHsm8ww4nbcXByfLDB7hzL1SwrxwZAhHj",
  "key30": "5df9Zgx15MZsHVHm2LyrxboziaKD7189Jn4tkCdGN7jGFxKLkqhNnEYWDM1L5PjWXFWMUYQ5nASjFeu4wyNvomVA",
  "key31": "3V9fpaJN5dkdr1gv4bjkheidGMw7UKjFhut8jemZJBoubbbboPKZG8tzBwG4cekCQs2F9hJ3fPMBhVs9VLpBM3Ct",
  "key32": "2FkN1Ys87M1XDUoEB84e9jweooiCW8fEmt1DE8SJJxB1uE59kLp2beA5KRaNYo1NS33U1CRB8b7bjL9PzjAgBLfN",
  "key33": "4Jq7s4UYqARqEgBjRzh8cSb14UD76CC2GqdM3P1JqPSC2Gjbr8a1h1FdrtEPBg2j7F6XA2MheBuMFkmrMP4Abwf8",
  "key34": "5muxNjVyXraBrq14cRf9WqPpv3dAkFQeZYkSFGy6BQLniMRC3beUEzuURXJ4FKkh1WtBgthgz4jbksCnaRfrrfrQ",
  "key35": "5sQfN6J45bp3cXWxDAWLqnF37DioVYW6LGh8k9XRsKytZ43Fu3CdxCNJGyofYcKTCXNEGMQXC3quE6HQ4hLUKUZF",
  "key36": "5LyqMZWkA8WYZnEhYhaR3zxYrodkfbR8KTa4FLw5MdNgjyJckva2sLTsfzEoENQiYJRVme2gUnuVAU6UqVpTA4XB",
  "key37": "a4GFXXSVHwws2gcnv57a9Tybbb6Wtj2o3Bq22pQeWL8BTAYEccph6UCZ648wERigC9nHSHXjZtGJft1ZhWkENuH",
  "key38": "2y5hvPsTAbT8cGgZPy8EkcVB2g2PQVEnppxgfnvcjfK7ULNEmHjDSVqdxBh1oYg7BR82Mqdmfs9fzj2k1DvaBtDm",
  "key39": "5p7559ESfJLSNEQ5dUxZy2NCBVJjFSPp6NEMdavjJ5hduCuxcaPskotQ9e2RoGwiePdPb1mJrtCM9Ke3mNPXfCV7"
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
