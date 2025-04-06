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
    "4Un2dWnbbVgfvE68K4YUBmiGRpTWPjbRVH2WG2u8NA7KeLfKtSCiVtsM3C8z2JNbBM6JywvpMShoS51hxzwRXrVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4hj8yFuyi9x54d6xJ2ZFgge2zskM8XuSLwkwUjNB233eD7Rf1eWAFZ6ztyXtSz3EpfYQpUxmdbxip1LQSCREoj",
  "key1": "2FXGMGppW96dZYELshp6To7755ZCnEEyZkSHjSk8RYvxV9izoEt6hn2HPWiNFK4gAeJ8v5yMa2HXRzKVP2aVz8Hk",
  "key2": "v4sNpHeacoe8ARYgS3sGvVpeRUmRcLhb5gsC1tDxk3VSedibKqVi2nFnwZkefDvnEnNsiYYApFCi6XLsg6NJmn9",
  "key3": "3HHC7oovWDx1gMaZ3zV3tEKgh8gpCTEAahhU6k1Gf1yfx4P9Lmz1ESB8kTsRReGxXNM5UVguApymygbdeDi5ZP4f",
  "key4": "41isCBJruxAnStNiQifpgCMtWvGXxdY6b3bE8p8171Dh29nWBmeTkMhXcHSRxx3nACbVecE93ftW5KD8N8rdayaw",
  "key5": "2JErdnzPYEBUZogK4u34wFiDSFX9HHLQmnkx2UhG892EtXmH58cVSeTfthtsyRC9bYxpqfx1bsvGWk1JZSmZ39AC",
  "key6": "wDLeFF5357PBJRcX49b3W5CnG4GsCwqZZfC6SwZtcSeSAPQrPEq4ngQthVxovqxz46NjFudvynfZrfFzsZyF5av",
  "key7": "5uxmUm3HWNtdzBYYbvJ5T8p6SFaegR1XW6gUjJ1Txsw4MWceWzTsWuH2mAjs1QKKaGFKi2wZ35pChUohaYMBGyUY",
  "key8": "4ojWr4cx8wf7VC6FouNmmn2DpLgL3oeeEMLGYRidhX9qZjARtSTRkcovqo4QoWHhxCCAub4EYWZadouViG4H5U2C",
  "key9": "5jsWvtF39pGDnkLnkdJjRpbaHG8nGfECH7A3Befbp72AWyr8uuMPc18ArP8hAg5GshfPHELBtzcZuPXCuc1mZ29a",
  "key10": "HAWVTANdCayDrWqVZcNFtTn8Dqo5ZhHQ7h7jbnN3TQCmdCdauVZuv3eYu6jNpK8SqibzHQJuG9jCu3QHzYHrPax",
  "key11": "2Aw73NHNX7THWjTmWgEWehdWJFyPYhnsrGFD3cH6arLBYrWr6hvoqx4JBv5NEtFFjELwPbHM5pUeH442RoxqexJv",
  "key12": "4EVN95c3CBJugjErcN7x8ig7Jmesi4WyfHaNntdMn46S3ZHpCfLApR6N6LqgrS2Wnj7PDg7ywT7coywrsj56Cx8C",
  "key13": "2bk3aB1gNtuoV6VcsHSG3T5ekWBkQY9ZQJwwBW3bE5azwTdAVSUKJ7sG7hAdXq8D3YfhMaH1gvNdTo3Tx6rk4EgP",
  "key14": "4P3gkPxfr2HfdGasozsjQ58VCTbRuVokhmWGjBoMquXd6j3ytMMLZMZHxCpHoJbKqv5mmtLHSNWoZZZB6RupyCEc",
  "key15": "2y99E3M3ExS83YUmNjB3LoWDTuhop4SbSqYmejdrSSzkdXzKHBSxEfz9xiGjqyZz6x9Ja9mesPJrx43y13KSQ3Yr",
  "key16": "PPPop3Zphk4AoD8tzhtFSQ5bjxWPdTnpa5nQsCgDsUmvzP1aUYcJvXXPDQ262urqvwwzwUB9tsr3QKvJWHcZKeh",
  "key17": "bwy9ZXTVieTvkVuhhKbVt1H2UZXE8bMiyhM5bsSyB1crhBdBKpQEjj5V731oN5aBntxjAdydbc4kG2T5oN7gXSq",
  "key18": "rkbFoHHLC7LbGiUJq9XXsUZkvL77YT3JtGhCHyAhJC91wJ9CEPYty4Vr4puvEKMLQpLzvETH3fu3B8h4pgQ3N9x",
  "key19": "3uQPxtzaWDXz8rbeE5AqgmioXVzcXcWcPx6vYeivdfJ1rmi7LcerjyT8q13ceEtcuABVvtcXiKw8E2bfDfrGuL5f",
  "key20": "z9QD9WVtWcaMPp9pVeVbHNZBa9YdNDoBF2yjigggrShpKArWS68cdbta3FYusynCKHCU4ny8XDDqFwMZDPAXQnq",
  "key21": "5QXLPs1vQZJRAiR48tAscjpfo5k43qSjDhuMJAhHeBXKnCRqz6KJMTBuMBGVNQsTuRG7gwWzWTRwzvFKCDQKSRkL",
  "key22": "ujyv7zdVh4c26hwkRgMyTR1nsbxwQcsBkJEp198YpmnTxiJkqhKYF5MwxCFtqnF114dt2QTKC7AS3nWBnZi2eD5",
  "key23": "5ghVog3B9wCdWuXQ1Tj2YqugS9PnTkazbBvTanz5vipj6gxdsEZc9FTFSWAZBj6DEgxAuVurwjR9ojFsKFY8w22h",
  "key24": "5YBkDniu9Zk5UwCoY6sxqQKHtU7bWTy2EWG2rd1Bya79D2uqnTi1YVnuoZrSd19ZSiMgdWqeejLcaFtkEZhJzmxC",
  "key25": "4RAyPLaUD1tTYts5k3njbof1PrpjA7HMCqGXXLQeGKaimYSk2Be4QWBajLNyfrR1zP95a1qNJoTyaY8zRTkGwnMV",
  "key26": "3ch4pagh5URGHCiQeV1RpEwr9c8im34zp5jmPLSANswVXL37xtHQMZ4URJ5Yb7qdtKbaXbiUhb1BM3Jm1CDoetoa",
  "key27": "SKPgQA9JZZP3DKWD3tWiytHagxGs8hJthBCKT4XCYTjkzZVQSoYHGCRHJvfjJEhHxZNzFWF3uvXTF76VpihUuku",
  "key28": "3Sk6xicEXyoJSGw2ZFvG4uHr8q5NnDwZbUzLh4452g5b7hvwSChEXVkJ276R9nxvKKGYt9Jb2TBWV2W6Hk7jv7xW",
  "key29": "8RL1XVEFmdW3oWxjoHzYDxdmjXQF1zYHfuAEMtU7VTjntsC3jNyzeSg5L33ZcUpn6M8RxMNqtFaRmLYJouuXSCf",
  "key30": "5XbvbYwivxAwrY72rA9nmFDFqwDywyZ7SDGoBbf9Un7pXKnQJZHd78STgHa7BF5QSaMcjGWR661ZRi4mbHFdUcXc",
  "key31": "2uEnXMU1PYgUPAwTGdpGwZbGDNiAbnftMhqbXS8wfd7rWfv2LVgfdsRGPiXxnFAVCZeNh2a3Rg5Uc1bYtoqf5HqA",
  "key32": "2PtwqFKYcKt6r3bbcAALb2vz4AV5F8HRyzLBTvxdHsaeDwu9XecrXpEPtB6wAbP6fxukCrJyuphWP9XQ8NcV7pcx",
  "key33": "3NJdQRBufVztKnt92WTG2ca7374c5SMb7s53jFFUJd1LU4fjAWsWpN3vtzJ99bDXwT96uRJD5K3GdrGjiQPrNWJG",
  "key34": "4oCyB7fseZsMRdcAVy25mPp1RP7PXmhERgTVnPQHbJUuV1w3vJn2GEht4bk9e3ANW3bjdhhBsaUydHtZZKndoFZf",
  "key35": "2XT1118BnLPcWu3kDVept2YdPDUb8XonmiLF1XyErS4xhhDA1motWmhGm7Pxi9BD73VVwWGTD29BmGHpev1atqXb",
  "key36": "2wm1kZNPAgRyEUTkBsdty7euv3G9g8ikqSyyg93YwUQUhW1oAk2aw48KaSzveC43V12M2UnRbJkKcQkZphZvNtpm",
  "key37": "3wMXjEt4F9nKhxJPqWP95EkaM3USMJZcQ6yGo9gDGk5dCWkBCcPJq7euoXhwbphoeEbkVbViq9GE2HkMYNa2nw44",
  "key38": "22oMKEMnRhZW2j54vRyaPn1dsdFxVdHN88RT7KoYHrY6F7uCJGhagYNPKLdWvSVRC4jCuuNwXsEPCQCm5PZwxzTf",
  "key39": "3EmT2UqXgfgapz6bG4vKsG1tyFRfGV7ndmxGJDzVHPQqLkcFX95TXx2J6mDQWWWFTh551qbttGNXgoHmsaHPBGCt",
  "key40": "2SmSXsB2U237uus295CYTVDQUZMb7dEAQXdmhXAZaKXZEyCC2ASbiE1AwrBSKZFK42jdYrdSxzRW1BXPMgVZvzwA"
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
