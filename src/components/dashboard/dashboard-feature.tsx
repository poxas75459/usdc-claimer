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
    "4zjQhZ63eU7SqvKpNg82XgVWTTGmTyuwTARozFEHGdGUtJ2DSyDUVPXEzDgwb7wZ9bWZLN7G3oqQRWW1wK6ww6ok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QE87kfpgkMGhmwdTWLzqx3pDesJFEPiKDphx34KGnU5XbB5JoPSyAhJSvwTLXBTzDKtwcXuTkmnn6yzoH168fte",
  "key1": "67WRptAQJeNSVVLHbyGkTps9tUWi2xeMzgzgfSu4XQiJQ3Evm9KJqxGuVsNoysu4Sc6hauJ8QzfyyH1DC8yCrHYa",
  "key2": "d1HRKEJ9zabRdppKMFKDKr8TSGE5PRCkBjrNhLpGHBSZsrBhPXS74w76DT63eKov7W7vHm1yV3mszqyH9Ac9ynM",
  "key3": "5sTfYLmhYVUqpieW6JLusjWMCqf2Y4aXLm1cmJHBs8KRwYHYVp4XMD12LoERL12oyp843C67qQ5cy8o1bR2V1uQY",
  "key4": "fG5Uxbgvj782UWsgjedfMTV7Ce7pVz4zD2t491fjMYjyRfTQpNf1PcSCSp2Q9uD6diEExLR8DFcHrsegxALVZXf",
  "key5": "1ZZaVsiEbn8tZhgok7DoWUPuWksQfCtMknL4pwaHop8tXJf6Vfh3bMHBwLS4yZZC6bDimmXKoES5D4wKFtzeeDE",
  "key6": "2Jn9ZYxaFxA4fH9mEeP1KBEM9i2k8kxm8yShWxYpYAm8E1ybdYwxMk3SYDYwtQXSjcfsPvP5cRDv3e2pUYzmWCXz",
  "key7": "2tQkFevasC8frikzV9R11dSzqXu6qBiMyRqmuPFyBGy7tnKZxGeXAuhmp6xFDKLGojDRAENuvybFJuH735344ePw",
  "key8": "3oXBU5f6KKE27x5TZ9NEtw794aTwWSZtwNH2eKEhXnH3VB9Xy52xKUbFxv66ihi77zGEnFp7PkFkVwaUVQ9EYeEU",
  "key9": "5MhEdc4TE2o8UkSGhATaergMatzHdSjSjRiwhhJLP5zRjKnyJ2jbicHRFB5aE7joXJVPfyoJ6NdzPBDthvm8gqsa",
  "key10": "jqHzfXByPVnTTV1FToMArGAw9kR19E3FpUHrKtBJsbNW4ddpDA9UEKZYxQphkRSN6zf5fpUXG87yhU9a8CwLh5C",
  "key11": "5UzHtLNgf2W9vzVzut4jXag9fk92UF8NZfCCAHfdZzNC4WkcWuZJ8ZDCTxenLyewxkpMNPHGbmMw162BEkBuDHmH",
  "key12": "2DyRDAmVRirAKaCm5J9nzRpphzZgKdFQ6riRWQ5unH1Y6jQprfM6t4USgKa9D7Mi6qFEqcRCB84zPiJtF2LUia2A",
  "key13": "67GbypoPrcpktorcaF4VxMxytBqTC8PM8b92DFZoRe8rBDKyhXE9gkW2kotEuVXQT6AUU4CABnnk4jbQQtUPaEY1",
  "key14": "3wBXaD9jSLihMpVz1YuGVzTouLJ42vnhzCk6Hx8C3y56CS67Mgrm7NHVAL5v3bQi7PuAEwM1fdaninGP62NSkzQs",
  "key15": "2huPXDNR2xz9a5JhMQpyWue4NfJcVUsG5q8gCKMYvutPiJpyjoKiCMQxc3PLJbgEW1uvGmC4i4Q6WyLjnMcHeSuX",
  "key16": "5VsWYXtbbuPsLfZxxuY1c9UoneGxYxvTGQqQ182Kvudi7viJbqP4BB9HpHSzB7dayUJqkV7TSeyzsy31u3W6Wu1S",
  "key17": "2RuE9i6DKJFTgndtKu9wtSTYAKxiuoUodUAyNCDJgd5MyPcRtV44TrFib5WfmS4T8byMiX3xeEieJT8QBhwbznPR",
  "key18": "4EuE4X7PvwDWjaL3ezifHupR8gZoSx1AeVqMz9RsYKaXhebwR3n4rmyXB8Nmg7Yn2mjhyr6jFfK2Ge5xV1wAjH55",
  "key19": "35mKoqMQDJinGLcFmWuQmUUyxARyRzhEx8gyNqdoMxQJ2mbbUi1UfCTP5enAx9vGxsgpqFez5BZqjfGBwdrzAcf6",
  "key20": "PQAy1WDcYGb2bk1Tke2eNQKW18xg3MnybtQ3R8KSvn18TH9PSXVbMaBsqVpwTffuZor3rZtvKvWsgdN7LoR13wb",
  "key21": "3UaLxDteyumvy1ug2y6L2ufDHvQTqdDECqceNtwwosHJRocyeYSZNRJgB926rLTGWJFEGkU1a5LFhHzCVTSAj1X2",
  "key22": "3S8e5LPtY7Lh9pyD7CoJNGdcgd53j8AZa9zeF47BcqFoGVhR4ZfTqPbhCPPqBSFuHD48CZ1PVbpmbTdgE3X8uNUv",
  "key23": "621pYnCkDTme6v2ouE2Q8eiB7HNvdepoY61JXREHXuEYX3seqpDNPTd9gBaukTujXTbE63C8XN3iUGiY7pmJDESB",
  "key24": "5pLkRCtUKsbYz8uvqN5cUXsX47rCukMwoCNV5EHRxQSQZedpy16R1vJMTAQmCvHum2pfrRPhXmVUnKRx2kft6Xv",
  "key25": "3T46kbAC4EHr1tBd4exvGN5LDfnELjW1GoRQMjVweJCH85mhSwfLBBuWWSXBA7yX5nwm3Jjp9ngzDNcdKKzKuYKo",
  "key26": "3Eu9JBijG761FAfc7aSECAACzcs9yaW35QSRQufh2vCN81eQtf8cqPyyvdWTYAqYTAsozMmBK6Ra5afMZHhaoVtL",
  "key27": "Zwrm9riPH23uFgcr4DhJmdUXy32edEJjWHsVXvtFhK4TMVDquQwdmaBCn1r1wb1ptnCmYAdDFn9ntqm1YoWFoCd"
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
