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
    "2vh9EYzJ9Aao5r3BUm6X9wrBYqRv4NVkf89pr5Br6uJyaEe2reAGGcdwpmzPkXrrXeqMj6GVwCDnBEzz1Gi8VmWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaJfKbZabcMBAMAYoeJTrYGNd2we7tmevhVzkepTBsPwUis7MS5h4P4yNNvaHc77Mx2btr4ZrsmBJzbveqQ4kdL",
  "key1": "GBLhH2MHjkGpVNUHJN5bibQUwg8S1ey6kYthvrFvpefKLw1kJRsf3ENCaNVG7yzrk6g5fhGQQ2JCBSfnmLrhTcb",
  "key2": "4TK9RSY6CKdAXyYRJQMbSWWd7j1u8SBtnCoyTYmUP9fBD97UFwWc2Z9tqmk1MaFtcbHi46Bd7ZMkVMYLuE2FpxFF",
  "key3": "4sdEtiaRsiw3ADvuGA5cyw9brc75G8XYj3B4faFGbBWfYs8G9uAzfk36GNxPjG5Kk4ugGvTtduDtJruABTmLjL9T",
  "key4": "3hjK7XrBE29YtYkG7nFAyDM2QmQkYXeEgwQpvgmUAQ13ZBZL8pzKsREpkp4H4WfBsMdq5uAgbkXjUQ4mEWXCDXcq",
  "key5": "4AyLmGoVoVgt9V6bdJKQoBfg4Ub4uNCcsy9wK1x444cEEU6pFdL29UBqyZgdDw7UR5vAbDR54zeYjk4CYHXKfXmZ",
  "key6": "27D6S3vrco8hYUeKYUbsQgbNPq5CMS6zhvHZY9JobfWwgPaozji5NLgyYSJckWZ9BttzJqVZrkkQWbEdWD3FXLap",
  "key7": "3sYCAcND2Kh3iyXMngp6cRp6P1uh9Vkhqes9WUJuxcHNp24UCW1APniPe2LMKVVJnWWkfSfsHWQJXvoAv58WmGy6",
  "key8": "iY4jSXoeYdgoqg3hvoWvooWibqQYziTsRrhyJ1aCPYFSJ2sD9gdmwGfXPnCdgGzC8vbrYQerW39zPBgq3NTnfXy",
  "key9": "ejhrVTNE41SSGhk5tkgvhZGoox84DpQgcYpHepodnF3hAyEDR5DGwpjbYagN25iGXZw7adn4FS93uLQfsdpDVu1",
  "key10": "4deDDLdbgbgkbqgXj4MrMiXD62z4KBX37BwCqKpirCtiWJGFth9zyxySpH43Ra5tdZw5mi8kroYDbcrV98WZaZKc",
  "key11": "pJUFeJeP9vE1eKo9hzKVAfaN9XMfrMXzLwFZBYLAuvWU6mL9Z45gXt6Thx8BngJEftGNfYEowV9g2esSBnWu6zQ",
  "key12": "4mabBmPKuZo2dgZZsMMprnY7XYTckbiWRMeCn1ZqwtQD8NbmyPbtyAxWwBGPHXMpS2BPFpCukhZ4wCRVquQQrpfP",
  "key13": "jq8ehaKT3Fh78UouM3csRcB4ajaLFibPUf1y9WxX4x8GMiz8BSKCwnh1EW5p7Cws2i8svSghXCty5JAXj3CvReG",
  "key14": "33VhTb7yeeFrHX3LPYVd5Hs9yuzGZpkhzDZTHuACBWtyxcsHr4LBCqXoXd4WcS9SAEcZioJHWxi4PDgGrxWDXdaA",
  "key15": "4o7Xcp5PLX4d7cGNeHfe8Gd3gRTi741xzj1HhBWbUQPVB5DWKTCJRaynvwp2Ak7NhnUJdG77e2YLyJJCnpqvegNz",
  "key16": "TWw1mJRnf5Z3awbLw1ZwpvpzXzE9JV2HB8G5orivmaQftkwTsiwp1MPCqKEAYAHMSbVmN3797S9SkGBUdyuuFpx",
  "key17": "3mKeUHsAayYdzXt4vdW8p2oDUfTo7jVuZSpdqifMoZddFjYp6eSBSBLoeQxPcmnHxGJzoGX4CYUh1TqQSdbH2FC5",
  "key18": "3LwhH8h8KbVVRiEug7xxAatakrLeDrc8Giqta6odD9Be1ky4qRdsVSCJdGqDSBrvjaHpwMXEtHegBudFK2mbmgWU",
  "key19": "ncPRwo3QiBkFf5CkZ75GC9mjbbt29ghUJRzJgSUv7G73eRFUvvNWRuAwWCDE8aypA4pNrEPQN3kyJDtFMnBhGGY",
  "key20": "F3HrRN3sG1QVQiwjzCQRvJr7d38FH2kGyJgs5R5rFq1hDxU6jUt9ig8BvaMqR3oCCJ5zGKSr9zdfYoLFxJFxnpY",
  "key21": "Aq9Jecd5MDdmGYx9MW1hGkd12sbWazscaj2VCW2DTZpX114mDTasayi95o4RvfiKgRnmec2yLbQ6tNU7jWToPXq",
  "key22": "4aE87r1j242Sa5dPgGbLD5JiR47Q6GoMarBJCrykTmHwYRKC2LaQAy2iDRKpkpSpSBTpYP7BMqW92P2p6u99ZBEC",
  "key23": "47jsWjVPgrBPvGwt8yZvbon6QSj2aXe9ngtGr2YMFxrqdE3sU6AqBZJzwtynAPVzE3V872jf9Tr4suDqreCVpMW9",
  "key24": "5D2riu617xjqqCHmPt383WweJWfub3g9DANYbEqryweX5bxsjtqoaLTgfzZ7z53s5wDEHuYZoP1Hr43guaWUzggD",
  "key25": "2XTCjAbH3nNStAxsa7HyrR13EPGwEL2CWapmGfsa9ahzZAcsU6a4EHE3kAjCrc6cWhaUp6BYC8Vxi251jp9BZ4Bf"
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
