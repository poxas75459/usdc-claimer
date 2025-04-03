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
    "3yYe2515GE5jGV6SQSV2MEwyTmSGendV8PbP9YaCghYGLg2qUY1VQNVHwjJHRuBS335sNjh5hUzheqf9U5MMDV8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cre197YG1rZ6qudMy5jN9AqcBjKq8BxYS8Sx5wVDehGYtgKRJb7UxbM9wUXBKMLQca8ckhk9EKpveu4d2BXqkJa",
  "key1": "4HxBfVrb9sdWrEEaoSobstWc1XiLkqJjZmdmMUmVQotwyhLJDhJfTX5nXV8RrWZQUnWWu23wBvrXmUPYBCF1KXzR",
  "key2": "2G6s6P65c16jLbRGv6qDAWVbfaYboS8Pz1vdV8nioXkXY6ND6kGt9VTDNig5adVdLS5rGQuRxLyrhxtj7btMRag5",
  "key3": "R4whKdcUwqyAuaRRYTvyMQ7xDMPKLuCLrTUA6oH6NVhCMobWvm7aMhz12UE8fYfyCt2JxubJV9xbubTtrTom6FF",
  "key4": "gGcWLFgD9FPtNyRZh3tcwEi145boAG19PpuLhgofdgBff5gRAqy5HUTR2GpoArSdoS5SD2S8hE1r8obrC3Z3VQD",
  "key5": "5ZQTUPR8HWV8nYd2fsg235wZuskz1rX9DbUQTCaGQJehohFtWnrDsYkMrcuvwrJKhtfRKEydLyVks1FuNMhNGVXm",
  "key6": "4GgqNrsqVzXy7Y5MNTHywh527Pqy32umZMY15h1Y2PZkFRnfEeR5EXRmmg6qFL9JE62GysJtHRU1gc9WNwcH46S3",
  "key7": "5DMhhZgWGfaRcyoynBCvvz3SNYDJ9x1u7JrCVYxtMh5JdQCijwGTkWUumZUH53mnmLX3rTshygWMN7d39gryodJE",
  "key8": "4g5oyoMUDEvNLVvWjEk1tu51ZW5gVBFqH6jUrnHtS5XJS137R6Qs7sbEbCckne7gzjpYWzJPTZ25fRuukQoathE7",
  "key9": "3i6gECy1RABpNMKhrMFwVDExpbb1VgSNaC5UhH5vmoy2w7SYtshxoioAcMwCZbd41Pz8s8WfBpHfxDYKYpRr2Gdp",
  "key10": "igNxNtdTAgHGfCSgHWjQPuXNY8RhSwj7AXLJ1zeg2CndcD9WEMy68gd7VNPP3ZFj7jTzNyCDapUDRyoCUKQwC9S",
  "key11": "3w8aceKREHeshYayvuQ67jWfCX5KVtAdKU3brKaVrNRiNaEYxp4hK7AWrYq9bq4TJp8wvWRi8Aw2putWnZvwDArT",
  "key12": "5rn9x6qP5yyR5Y8UxXZ4QHuh9JVnroEsWRhW8butEyzQFrTvNsapUbuQnCoJGPXSGoSAnvfQESXiinLsqP99ZPkU",
  "key13": "29w3ATHxKsUryJCtZ3UrEhVGN64LZafpDegCsT1Ftt1oP9jc91wfF1dndmrGSZWNDHM14QXB6j8JqTtQhz2R9UJk",
  "key14": "3eG7gLe6erHrYBmNmtY5VUpNzkupVT2JPimkHtb3ZWp81VEXQBtWtBmqcZB7PFTgqEJc7a6ukcbyMC3Stmk9Kk7",
  "key15": "3mRbn5tQeooHP86ybxZBMBvisbWiuGLD9ihGewM9st2JFEyYUWwNHgaTf5HGJNNiQjGYGNPcAtbB5jdKCieJRDYT",
  "key16": "ppDoKV92usRLryCWMW3giM95ZwtuH7F49xZYohsqbzuFYbVkM5gTs4AUvcFBLuEvXzmBCwyuuTssoL9dn3qUfTe",
  "key17": "C5wAv7t8VsdorDK9vutfnx3mxpJ9ytKhXUQFt8MYeK6TTY7HqbitvqssgmATf3eoUpX96DhejTfzCTx3wRCK9CC",
  "key18": "2yuhJcGTGDuSCF8DuYGsj9oa4GwSaq3r2bzdjvpKBrAnPsQzU8w9swF7Evpc9GcDyWPj389R1MTreGjvEYAgKFJp",
  "key19": "3pV75Tgqx6t733yidGXQjiRcNj1Ua5BxPY7LnVZB5Amhj7m4ysEBsmGaNYPLUoC1TBqNx7nu6WZwYPYos8RUeaQE",
  "key20": "PC8UCzzXq4sP1TWassp57H4RQL4Ns6hdSJYMkS9d7j533s2dTv7kUSiQNpHPVcVdQmd97xYyPoVWqkLh6hJna2z",
  "key21": "2HeiMaSuHrc9FwD7P4NtbtftanC247K4zLETS53XYbSZkGQvcGwz24mkvFvDeDvoY1CLUgedQ5WN9NaDzYHsWHQR",
  "key22": "pjfiPxMZzYKqzPNmSZ1jTap4f44o7yxbhN5QUJy7ekyrWY8EG12qaxYYoyLParTSQ7LA3QCViJKWp2G3b82oa9B",
  "key23": "4nKT9gHgiXUcCzpb7A3hT3ucmhQcEYAwGiVHUnEygJTy8nAmXx8XD1oPN9dPSFkmfau7tcpS62tsE4KSP4ybDN1m",
  "key24": "yWLLwTdBXMFNNc6NQw5ApB82deZJ1vdK9o2xj7NSjw9jmwFNtHF58rqn8DhLZ4pEsiTNCuqmphNiNv8Kk4MmUaG",
  "key25": "385NqUdQYUDGknyAkzX1iXSDHaufAXLUH6SjQVza3xTGHV6mB6sdzwEr261gFB1drG7qmoymQkoUDNfNEJ82t9uN",
  "key26": "2Rca9w7TBThYEQjr7GQxhD2sj4TGqVbfxVQyFaD39Ny9sFnAC9SeMeLLTKPw5Ws6hpgbWcQmowofRVNpAMNTYL11",
  "key27": "5yycAPosQWEgMwzaS6cJawWw3Kz67SEsRAKgHL89hxhY3U72uDEKceS5reoVssgDSw5qoS5Db33XMmibRVFn4Bhm",
  "key28": "8QSyMKBH9gQTaUDZRCeGnoDzrGjxhQcZRZWyyXQxDeYKPGegUjxsKRx2fpzqzH7ZuLHGDp7aAxzrtiq3GZFtiwu",
  "key29": "4FccXTjLq5t3aKJNihu4rE1Kv8YiYRpZQ1tcYtPhNrSVPQzYwsDsZKQQykn9ZtL4jukCvoqpCbRYYbpXMNqj7tqU",
  "key30": "5qvcjv8VDzSTH8qkNqVrjyPE3iNRaqxf9wrqaUaAr7SAmuUyDTQagQELh6fKW7VGaX1bZAUyiHFVMtAQZEsxh5tt",
  "key31": "4MGDkHS7Sn12LDqnohSHAduzasYWMwFZXJxgjN1ULReBoePovcuW4dFkhTu71qvfFP3qULpJs8VZNmhfXBVwAQDg",
  "key32": "5Lq1hc7Cgkcm8iBMcRmVs3MLo4aKULg2WPeTtkvMKWs6KVXUHbWSmuU5Mh2y6j1Hgyo56a2kcy26SfirPHVjBCj1",
  "key33": "4dnPoGnvmPZWM5fnrmwat1Aatwqy8BHLRYzNP9vR6JBhAavX5uwMBwgLTFYKx9T6gGTmFGiapKfpDFQCXbXTKpZk"
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
