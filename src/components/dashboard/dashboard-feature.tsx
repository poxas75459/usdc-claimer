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
    "4DcXvXYLeQsxpG62BXVdfxgWWCHpF94815V24adQB2iXrjuVXa8TnFE2hdYeW1ZLvZ5yxgKuEReCHsvJd5NQxAY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDs5QQjmPGcv3visZaMjvdxAansf5puKr6mRV7W35QnWtzMSvBMEsHBAKeeCLgNpGdAdgrPmYfBWKje5XgPBBJF",
  "key1": "4mkEp9TUa3TzSdE4LZCZGXaD35hxppEnTXLwGzeNecZn2UwyLgHsAsEJ3djqQEM28ukqguriw4GJu1jLvLCCB85h",
  "key2": "Z6ynkH6wzppzRAaNb7VqewzWw5QskXw38rnUE7TpSh86y9qFUE7cHr7sxZ6ajTB62oDiuA4wfpQHhLP19EYmVBA",
  "key3": "MBer25a6j7KG1dJfQjYFsQnYWGdhuHNZ8uXELmTUpbhvREK6ch39conguv3zYMNukndCJVSHFfikc1VZxEfiyPm",
  "key4": "bpH1X4h75FCDcQgRyoHfh6nbur8SwoFYhGqTEioGT5x9wQo8fLm2RhJHDiNsexFA1rBDXPPbA6UTNwk4K9dtp3a",
  "key5": "LttAyh3dsbTShwXSZMjdjwV9wh8fDCXpgU5V27C1zPPVKBmZzFoiFBqiM95bnn5rrxPXzAZj8sifUPCyYRJBCyP",
  "key6": "3VN4kj9ay8MaYBoknNGwqgPkeLd1ZEdCXMjDiauZp7DfmG2ntTmCsbzt7gz1Vnm4aVyjNLXBEfzdytzwMxfdF2Br",
  "key7": "1tjzDtx8CsizvBrM9yLdwwpW1AaMbbL6Z3pwASBD1oZMSMZxeuBAd4oGGVhVS6iNM9ofXSSPejDL2SHizTaexBz",
  "key8": "t52kkEMxEKrRee37fXEJ4T5DSkx5da96y2JxdUdhegQ3M2i7r8LHmccvd1sSsbxZYoGz6hmjj7J2UqJhxZRRiPE",
  "key9": "3t74Q2UCBrNQfBwedpMaxXoCq1dqW3Ur5nJtCpv9N7HjHDKU8GqH17b9czewkeJJrSTEvCoP6zHWgqJZWzJqLNJt",
  "key10": "36cfbfYkaQbnvVxgBxni2cnwMeiwVirXNuvn2mVNEq3n4SPtXv4cziSSrPSivw8MQ8ox9eML14n69fR69d4fvcQD",
  "key11": "4Vv21QUEfcpoh7NmqNEt6HBParrQscFRDwWqCfx6mjy8ya5HDixRq8g83Muqhmr17S6KggYKxGvDVgqmbS1AUZUf",
  "key12": "8fPgWaGupDT1xdHySF4c4hxNyDXcdDzC2hBCW7Exycfd6sX9RXJAaGmKhB3jaf5ZWv7PCH8es26c8z5KThCXTrK",
  "key13": "R2FTKNgorCHni1WCgka6mQwEPw7ugRqFQP8brUa8tMyXDZ9w2U7H9nT5HrZsP9FuutQwHVuhtf2KRStHofdu84a",
  "key14": "5BxhgLctbTNfGS1HQHvCq4tmdmUUGSReYMKubBLUj2r5wcgrCXL6Afff7mRChGiW5FTWsJk5no4Tk1re7HNd3Usd",
  "key15": "5MhDfeHv7ZSdZToTsKmE6UgtbKNqXVupizAbfmyHYynKZkq56mRzcmPn2CZWSXw5hGoSRP7tWyzEcLgTjnVpU6Uh",
  "key16": "4bd3z7uFstaHHcgcajVm4ysMkfACZoyKVeE2dB8D2uUveHxTQJ8HgWdQo3GbJo4g5YLXGkn6XDzSvBYdXxw2RZgk",
  "key17": "55JWQAjEQoeUVJwPNMbctiFf5BPh6juxcS1ho3VnN87seMqyV7enyvgm1uWyWWeo74mg6eekpoaNTvyMJKHtbcLn",
  "key18": "4GZfjfde4W3EuATUezA4YQJD4f6DTYBJhiWv4yxUikyP3mtRFmth6UkhWdRdPCpVxb6zMDh6MvZAohQtAgGxqSZy",
  "key19": "291GiLxEw788EXkokhj1FndueZBiuzunTrYJeEGEvbEkTqfKzBRcwcpdqqUVbSiiQ5QRvSVi3cj7F6fUUu7cmFjC",
  "key20": "z655MLyzLRDyypFo1SNs7uDkpujHeyShPM75RvP5r4qV9hiuHykU8yanynmP5Pqt4sSQpm4CDM5Bpck7xx8BgBe",
  "key21": "4e6tBxqWjzMXtuDqZovfgJ4puc3H4fXttbzMayG3k8r2z2k8yQHSAVezUPEF289rMFGv1gU3M5f1uWG24b5gnQFD",
  "key22": "5M2tyZynvfiSrRV8m3A53iHQCbU2sBK18dgFas9S65i9XtLcqgopAui14nB3Fp5fZFBX6z7gH89AEK1j8sZvideC",
  "key23": "3PgXrBLa1mZGerwLtmfe4uMgrmh4E4qicXnUWfCRoiK972Y9PsA7oEDx9Pa2DQYpSrYYzKXVD11d6KbzbphAgLyR",
  "key24": "4LcU6mqdTYeHapxrxvEbXG544aVu4KVMbE4CXkF5ZxPjbeVa4NzUNsi1enM1AyoRjk4q6F4sfauWZXncgffZ2hk7",
  "key25": "2kBeD5VFWUEeVPNs5cupx97M9NgcAdNSZb9uiANMAUqzKFX6wMU4CxHArHe9r83n8gyYhWgprt5AYfReMAE45ih4",
  "key26": "4XXSKW4vDXS9Nwwv1TZ3HRwUcsfVcS7nYG9H4a1paP7a1uztCMrFVmK4GsiQKuUfnTGqrEDJgmCXteU1LRxmLoPD",
  "key27": "3yUj8vQAbsLbcEHLyxDdm1cqmjcJHyAzgbWyYkHNBg2LD79ShUutcjQn8APHTKrMbrw9KhhxbgBbpGXhSQR9xgV5",
  "key28": "J2qmW8zgUH2eJyoDWHVnN59m9GDPtnoTpWAhx45e12hayLav1vgyko2A9h83RYj6r3uwa6Vgpgw4ammmk25Cdm9",
  "key29": "4UmNaWH7j7T4tUFgLi77D9qYjWbhrieawro3YBDugPJDFuCUK8kJa7DJiHBSnYf8uLHsJeiFVWNPNygTM3P3foQN",
  "key30": "4fE2eSktPGKCw7tTKYMw7ZTct5rH84rvux5c2cu7wigaN6ZqAKUtTv2KfCofFg6ivvrsQAfJxi1bwSXjEz9Xk44",
  "key31": "agXiMia6XNkuG5cq88XbRDCAEMTbZTUS5JEgbsk3HzNKajFydm3gygmaRVsPGiY9Nozkrpp5XkP1nkmJeGswdTW",
  "key32": "3uAnFg4JbzXdfLKPbw9nT8fh6rFjKoACq4Z1RKDMvzPj76YVK7GT93gwFi4VhvVeaGcjQUNzSHwCGbGvaeiquNz5",
  "key33": "5AGwds9gcJHaPq1Gqp6p2FU9fyyUomHyi8SVtNPNCrDd5qfcLVsVkZmNGk6DqAc2JkenJAkJbCYWJYm4kNe5QNNB",
  "key34": "2pHyAxwJ5G6UQJhPeMyqnU6M4DnwxbNTi4P3rUAHcYr6kkv1nqaYXZDC9fygtCDfS8fbejWfqKKcJMDUJDprCWWj",
  "key35": "Lkj5ybzVq98pivjhkY79YhG9GVj1GfR3czNhSWEb8uKXfFtLxw8iZcXdFgvkzMJZUZF2Xq13fwCzavCxzEnVVXA",
  "key36": "5sLMusAkqGfbq7pCWM5eo4XWqrUNGShpPGX39yj1MHxFsGJYF77d2PRhtgCyMoyDfbSjKfbDhG3L96dvQ1W8xnoV",
  "key37": "4FwzWb9gRi4d7aAUZMLq2MsBRDQzFFRNga8pLYoHQQQcW9uSd2j92ZXJZikdpzkCcHnMEvhUJfBQNt8PSiaeTHHh",
  "key38": "4Xx4tdfP2rmAhADYGkP8gZH8A87LXVbB578wqYpjJTn6M2wF54cf8mm8er5jHBXKaDC2tther8vFcYANjRNbLTfG",
  "key39": "NUCXj2E1mjkPE6qa7Cx6bf95D1odwAikUT63aBvn8J2rEG9YDuNYaNDEiTWe5FNRp5KWnySzP34XTwA9adazpL4",
  "key40": "2AAcSTQWdH4snLNP2tguUs1wXgF32WqYESBbRKWEopK6s3i5aXpbwc1rXJFYDm4nZTDDLc5vBrbzt52ucMXfqf9W",
  "key41": "3z1k47JJeoY3SUquXN3N7ydWAijNxbJoDpNbH9qnG6JunmKcoLM91a6dp1n2MDLdAVmbi9HRVi62j1jk2KmaqrzV",
  "key42": "3ENTR549XTgYPkjpXnvhvWVHzki76sq9KijunWWRHvvo3LYCaa2rZbvjF4TD3STXdMEMCM3X5JPafQF1XGHrFQtz",
  "key43": "HrVX5SvY8VrmUVpof8SEYmgPhbVBjZLZSoeDbCjLtUHnvKRzFgefrLe75JMjpwSoRXD1xRc2ee8Pco4FcvMkgKM",
  "key44": "GHyn8BscavRB7YkeNLSDx7YB4G7wjNAhDqnaCi5q6JddfLVxAYQPAuj3Uzcoi15V4rLtPHft6PuQDTGuQaSfK4K",
  "key45": "2KmbuaZbbEXYjjwXFuTNbcxfG1QQNKyEqqu2WBgTxT3CGeEygqPNYM2e4vQD49eDU43FCt85MtqKcjXQVSmB7Wzn",
  "key46": "4dzxuZZem6r9NCSBBYWGiFLKqd1mT3SSMZXszxPwrkPhiGhWVKHXm1LGxyq1mYWfqQsHr5rWL2B6gBLSzdZnQWJY",
  "key47": "5RbpbfGMEDcUcYcYUpsWcYqmg3fHqYAMGea1zVPtNe58Lz8Mjb4pBKTBRJn9GQMTBjXCvgxfekqidLvb8nRmcj5u",
  "key48": "5hnSzmEPtTB4odjT54QP8qeKNmVR6hakopkWMukN4VxtcD4JoHhHZNJ1MUZ31BsGsGevRhWRygbtyJp4ySCnkN83",
  "key49": "XJLVMU5oqnfZKkb6DVr8HHGG9DhLKJ3J1TPCqBfJmJ79A2UMiBkmiTJJUSNs3b2F6A6tDxMTKJ2KFyNF7cXH3oH"
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
