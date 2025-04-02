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
    "3GJG4qEeS9VTZcG1z6Tyzp4Ym3L95FNSurnnurBTXwTRYC72orHkotJsoMEQd9bqngGbqBmAez7xAoqoZunEiTG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvoboQ678gc3ahs2TabYJVuHdMhtEhGWFqz9Si7RqWDLnzRp7j2o4grDnGuSnwuojFCPFzPC9r9Gqom5LiURJiD",
  "key1": "3JVHyP8H6hw69YFje8FV6grPq3nBoYA3bwQkKUz8WH7AxZTTXeL8VGiUXA1saeLwXXwe1hH3WsiNTZphRK4PD9zf",
  "key2": "5d83n4waWMXm1RVQfJnLFPBpBGfFxWNf1M5DKEinRb2VwUZyF4UmbdvQ626bwycusawpgApUL77xsDiMY2aCzMDg",
  "key3": "3i1VTtkjYgbCh1ULqmKBcmWog37pWFA1A8xsiGEj1BcUt6N3Gtthm886txsxp19sGu7k8roxxfzMMCF34vtewy2R",
  "key4": "2YutJ4nCkVV97MmtRgSvSb99LRtFM8M9psHU8L5odULPw4qe7UnVGaXgRVtyBVDs2isBUt4AhC1qyxFBr99R96ct",
  "key5": "3xcdFYmqHaHf4e7Qq9FXj21oKH654ssSmDak1CADLtbjXmjSGXjmHYbH35W3Kgim4xniKkQQ6ipwuC9G5CkarZti",
  "key6": "5tiVEqd75esuthjb1UGmsNYxtMe1e2mSqUtPgAfwfctjDNJgapstZXDW285iFDqYb4bD1Wy1sjwetoUKTT3vT2YC",
  "key7": "2PrGsAeR7ih7w8AyZ4KnTjaySRDwq9Z1SbpY8Hr5YkzULdyBg9WKqZnJ6Bp9C68ujBLqwYLzqm218mGZiX5LMyAA",
  "key8": "25i3jujVkQG85fiDQHFJoLo1FjuW2gESWtrBrd4X8Hu2qJemMAK1M6YgN9WyVR6QFjQeQ5VxhN4pGPQ8eXnnsgNQ",
  "key9": "2BnYJcGJNqAVhVbBzJjZyBL6iHJmNdHDj9jPGGzQDhtcVeQQ3het4fVjFVrZtkcZhq34zDkqjQKwcYP6qEjotPqg",
  "key10": "3cPiGqP3PVobPL5cTA6JZyWdzUPHfkiGrj8ok1itZmGyoP6wtcxNzo5QgoqpxyPdX7cMNfX4C7sBg968cvYYkexc",
  "key11": "2a1V2wVffUMTNSw2VdRNJLD3cUMHzz1pKfhvqjXoioQ8q6jAfkTijS7PbTcYpDUPuJwJrfs9EfrUc7LUSo6NfJqx",
  "key12": "5e4AAitfw4SJW4JnJof2jsspuAwkK9ik8oynJ1JPe5ZJ2maRPVU692suvg4NRQpbWhbF3G1bfJ94yaCgmvsyeNvo",
  "key13": "3aprZnDV4WWyc8e9nDkHzW9D39ncmhgYTrceEgtSh69fyjU7Z3QTA8NwGJLW7vQ22pJiX1o4e6ZEkhgZaYTZrysm",
  "key14": "WsZHE8GBjVyCnEmwUYgcavhnphahRo4HDydBYM1EXdiyGDcW9bJLbdSK2hAtw4KGwB1YeozGapQLFGHYY9sycYb",
  "key15": "22xojxRVJkdRdmxEasc2USnAjatLGfpqEEevdj1rRSTQ2DKZ6Rv8Buq7BCCn4QZAHHy1hmvkGZsTb4c6BapZR7Yg",
  "key16": "4B5rQGZr5wktvzbYfSuCLRCkXuSAZtshY8YLWRoCEwYXidBnKq7DGQ4mA9DizVhqtESPTR5Ft3MYuKVj897JMYrx",
  "key17": "2i3DZr7dRHQw8pEVt6tpxUMEuq1Rhf1Grwv261H3P5eTfDzX6ngsd74Rce9FayWk6QBMTRN9gEJXoYcRoLHjhkDf",
  "key18": "5NfF2134KgM6pLbVHC9cUQbSRTcbjgFCvJ78Du3a3yVskWeYCRVZZiHTVLZ14XeUr5sUuPwNSfLXzFY7GXHtShAe",
  "key19": "3ffC3nXqt9BRvUkxSCYwRBUarRz1cwErHKFgnWGj278DvgfkP39m6o1g4nfF5fi2KtBADUFPco7ftHkuazcgFVx4",
  "key20": "61gVHsN11GVwKcXJvufQAUEvAfueDXbouSu82BLqB7TRprjZnSEZTgBXnEekgSuES3NybDD2nPSRS2HiiZaXPMf5",
  "key21": "3QF6enKNgdA1iawG7WQrasbUdXMaRCNYqQ8j678PUBFPqUCfGuPL1XUVRhyq6rMziLqERkRcsJHQDo1jvcEDGuoV",
  "key22": "3qbm6upEh4HGsc3zkRMbKUwbVhrqXB3L5NGQAzwq1UjiGAPBrxKzNYcHYDSk42LWoaCpUPhDPHwzHyazFea1ipxe",
  "key23": "5KeuzQUb3WKuj7LBG72vncQoTgoL9Ha2UAeDEKx7SMB3FKaSYbC42AcFtn2bukoua2JgBfB6TZwMCDVHq26SaTLE",
  "key24": "3vu5tCoutWeTtCNMwtfMTZVacw9HX99VhcTjMVQD7V3RH3opAxmddnaBR1wNgbq3nfaAzw9JPEutR4mtzpobrmZd",
  "key25": "PsTB1yABjJPaA15TGRHHMnKoDmh9JFHQuxmEfebR6f4Eag5JyD7vTFv2yJF5mSRjFeQrFk942NEUvHKCcGo8heV",
  "key26": "4ifeJyyonT4heHnxKxVVStUWCzW6rAZPv2gsAqpsNXZK6yskU2XUeqWbQ4AwaSWfGvM2LCivcgKSczt2BY987GLw",
  "key27": "2QdcngvH3eB1gwbdnYGc6fh4wuFVxs19uP1GbLJpFwPGxqzsVucKfC3NifZex7TpXHcKAhLdAb8kwXHVVEWpZZXr",
  "key28": "bMt5r26BDA2uvtkPHKiNLGpWyFfRJsndhqq9ovLxPeC6Uy99b6aijAACMTnerRoauP44wEGaYSYmFdH9P9RpsXn",
  "key29": "2Sm7pMEwTY5RFDtotfrTyk5sw7B9gKDwH3Mb45Cx9wRGW6GsErGsACAVhozZMni8BhbSydqUG3L7Qc1qP4afjty5",
  "key30": "56p3HBFVjhQ52MY4ovkEgyAi2wkPS2EGNqomULNE9JwWYhutdsoq1sAZmntSVxZhpYRqE3MBgExgMrMqY3qMynHS",
  "key31": "2bGTujkwKg77RLoHQGsFf5RcTy2m2WLcsqvzz9n1z4esJoMBXvpCy7jRrwsyQEz8oCzniM6mWAoWwyAnARQWTVQS",
  "key32": "2cheZY6XNJunYSut6K6fLamhazQuNDPw2dYa6WDSV9XYpg1B5HVciobbsRQcPtXpSKUQHZj2xxTDjBNXwYX41WD6"
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
