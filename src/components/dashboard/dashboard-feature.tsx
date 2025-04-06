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
    "4qRGEa2UCSpEAvNY9yNMVRP8ysWNTPCQU6oQQhc1t2Fq1X8MYLhKVc9hNpat96Mhe8JtsSphc5AwrHPjiyp9eKEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hp6pJdbQtm8mCMkP952WTgZvVWEBbNEGrf9cEtg42AECGTJDMooaeS5KMvRUwQdB9SrBE8ce7p4uHVPXgxJmyrP",
  "key1": "287PYkBuSbfmUZtEVgmjgtQw1JPecaR1Up218KqfV2dTgeMuYfkanop1kY5MkpBECwYkxLREFz3yiPHiVudVVXp2",
  "key2": "kRBQGgFxc6UHLyc94Tkpm7xeXwfzseXenTELnxDAML8AnM4YZadq6CuxGPUw51GEmXzS3MRur92MSKqxXAxf7L3",
  "key3": "4WKBgFaBHMzTCTYvJt2XhUWYLU6mrqv6b7Rsa5kFCHgaFs6wCuJrsqXUGV1f5d12nrb5RoNLXEx5Mg5PpvdvcSfE",
  "key4": "4ao9xMT4vaQjVso6KA14oZhqGPtJtW7f73iXD3FX2FKRp4Q4XkWNDSbpcfKnPnkuqQ12Jqqj9ZufJpmn9R8Unj4J",
  "key5": "3Jui6MCKfTHHorujxXrA1W7U5TPXu7d2ufy9gk4JU97R8gcb9tv6ePMMwjT7L2hdLRRrKj3Ya7c5NGRwqEF1qd3x",
  "key6": "2mmfFMx6DEosVPyQtQgZqLB5ivuFTUZkBd8Ln247f1ExMmUaBXRmq7LHd4NHt1jZtpcBjjcGKcYevEqNUidsaFKN",
  "key7": "2ayikchsonJHsXu1AoAntRDHicm2V5kgWyBJc2NKL7JfkDwRSKETgxvfZekx437x85d3saxzREcPikwwrDx5qmtY",
  "key8": "fQuDYagh9GDkzz5GpsrhcVD7ep6icaUvwCRmkeS6SRcRkj89X7SoBUq4TmJbQSinf2yt3Uof1VLDcqycF9x49dh",
  "key9": "2vENZYQCikYryNr98HpKHJuj8tT7iTzYL3Xfhf3DP4Bu8qDBZzDs67dbDTN51mMVQmdXaa3kjZbpzZD4mwPAPvkn",
  "key10": "4caA4gLg8zGcXweLcP7WGit8e9nHguGGw9nMrYZbWnnRDqfecv9RkQsWxRKCd7aH1CAdAuPw1uKDxRZ6AgQcdbRZ",
  "key11": "4hgHMBQkDZBSUtVY9UriFsjpmRRb1pwvDZ7SNniFRE8K5HVP3TTFkWkQnuFfpcAakR4KMb86JpEJXS7MJkAmomo3",
  "key12": "28kF6SM6BwoZFF5BGPKUkhQB6LsNG4Rp6j1oCUf7mYpCznQ15yg9YQnQrvX5EdYGeg7o2F2QQ38dzeTqAi1ALsej",
  "key13": "5ELLo1wXMcoUy6iUTFFnPwVcPuQbPgfQkMWBSE4UWe89BGoKjwnXnuJeUQna52uV3mEhHP99xwCz6qoca9iHfbNc",
  "key14": "4uKDpTKkEgrjWReQ9CJbwB9Hj89vahgDtBYLe2QmdArUKYB5Gpa52gRDBKakCKBmuNggx6dpUp17K13irgtF6aPz",
  "key15": "4GoxvhQcQk2D6px2F2sPzhGeUf9oCAyezoC6GZ88NHGXbvkXqdYHs8KPh2PnBw57aZLbE2ECFZ7s885QeFx78dBz",
  "key16": "5BgEmbCSgtLDEjnjbgmzUkfUQHemAAViPTRk9oKNdbgBs6RaVvp9hdESapnmCo9rsbEqw7dQUPV9afNmwLMi1JrN",
  "key17": "kQT6vYS2wtrYPFhRTuxMABNmMx5iUB3sF6iMnJVhjzmFnDH1GV62MYugy4vaEiHeTi47dFZsf4pY2sEa4VUJB6J",
  "key18": "2WtvzFMpxMj8LgkGmAdzH3UL4z3RGhxGdbf4HJ3HG8fw2hPr3RRe8rBfURYjE2GEcTXNo3NYHFTzLwdqU7Wm8fvd",
  "key19": "XrMamYxFnGhcBWztAVranDU3ot4iKpxiBBejEDYqZpRdj1fKjum9yMbHQoB63NUVhmm5TKNQTcB32XtQWAN4Gdv",
  "key20": "32nMrZqE9yU6a8nzsPv44yQDhk8pUN9Ly3TfWuPuzVjTUp9s5UHrDrdwbqdZPzTcYxAXBDY5gNQchcLg87kVCHh5",
  "key21": "4kWZ5pVKHBCRgMiRSLRwLXVQsxiTQZe3mnhdaYS1pErrbKrWrjpUriNMBCwnQEgAeNp3t8iiniEuFPFp3KssYi2y",
  "key22": "3nDTMacBp2wJJqxR4MW4MAAfxkDURsubpmNx3wYQDR6W6Fs1BQ5QH899CS4reTSC1tCcsv2HHE725Cmv1GY3Y6j1",
  "key23": "enMdQQ6wHGJ2iduo4eXTgcbADYyu34BVq8FgR4yB5wYgDxGTHg1Ehi7beCKxEaGN1WpJ2dHBhsvLSdN2zcY6Fm4",
  "key24": "5PYVstPTc6Sj3TJSGgxLm34MRcZMfjrR9Hy2JWmFp9CNdw5V7RzpjnDKHSPuGczR81V7V5dwzPkBtdMsgzj8hRTV",
  "key25": "cQNTYye7MDqt4sBXqxb3VC65oSodKxDHxCXToBf5KuD6rLha7yedqiCaExsoiKvy2BCdw8L3PJ69y6iGpixotqQ",
  "key26": "hZDdq5dwHvgLeDQrqKxDTMsgsXhtvteiC6cbg45wkfsuD49GjifeBEiWveR7zmzHepTmWGyjkik1oG2QFP7gFVt",
  "key27": "2qx6svqskWAwAjLVrvAqjwyQmPYjueD294XmDGhyv8yGmYo95HtDwo3Bm24kUvzEuRDkxJgQtxbBXGpj1kjCX3yy",
  "key28": "3Uddm5kEMZrMBCRGax3RBT9ixqCmiTMFHzeppuY9id8hTxmEGrJ1viHwNVA7CHrdQovbYDYv82d33yDMn1Aqt8x4",
  "key29": "3eUj9cSAyXJ7G2ZtYB3KnBQtcnWnZvGG7F6MDrGZbqYSEWrXf1FhMt1F5R5sUifAWzySYz8YimEZRaU4jvR3KTt1",
  "key30": "2ZuCah1jjoFKKswsGPRCtMCgGHPDdNdzMgwAq2PsVfHanggkpjToK6aNZhRy7rUGXnZxe9nZroriuYSmqwCiAagz",
  "key31": "CsrWtCXZ8tLxJXZ82fcHELoauTjZpDiyXPhXk37DWMRpRiJ5Vv9GHo8sS7F3GJbSuFrScBNY5Z2xibhGokAc2UV"
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
