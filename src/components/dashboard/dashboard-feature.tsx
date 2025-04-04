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
    "2CmnXpE753gv36axQMPocqjJqrtFgkt2fv5Thg6hhv8UHiEfXY173m7ChFYHNMMdLKx32ehiVy5RFrF4hPePM3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zzvgRN8KUcYhs3stnL2A1YZ4X8TVVbUwiuQkBLwm2QpxqhfNgQQksLYUvaDgHoUcNr8VEVgHmzY5RXtH1aN4NDU",
  "key1": "4saBs2jbWkPu1RXtEEhq4g8itALqY8DnFCaWiqhkG7boQ9fuT35Su3htF7mYvRwqqGZfgZJKH4PgYgfVWLv5AkQy",
  "key2": "Kb6L6BkKZLVyw6xEe2f9HhLFK15uXBtxAa6zWArJUeuYYVQBCmfP1Asqf36bNcRKbviujri9tyjdF8989J3miKF",
  "key3": "42xvNdAvG9FPRQ1zBbZN9J5JDiZLW3iHmR2ByQkXkJLLEAyy3pCsXBGGabDB5ij1ybKrvUUnLDmLtP5yb5w7SaeG",
  "key4": "5mpUBssLpAJ6gMsceK9mvqZkgvxZYfjvkUCorJvz6D5YeSicgQBnbv3dV2PUQcFYf7DukaVEacsdj6TF19brmqqU",
  "key5": "ZJRLUVeUbb3LhaT8CpEWVLTRgJBuPRmEwERqc5KK6d3yQHER9W3GGAHutAB3JxRtyLDeBXKS1RiRNyRxB3WHCPV",
  "key6": "4J3FWyeCaW5x9FvfN2v4qLmhcbsXAEJuT9Rcpc2QeyiB9rLci5o8mRQyH76SpjxcrtE4NcqLVcaTQHiEzRCFiYiK",
  "key7": "52vDixQYtGRzZxwAGpmduzjMWkRvvmDFbLSoa3nmLU87cQLpmdymptWQDD5jRMrL72eHFDrxwXoLtdhALTtpp3cQ",
  "key8": "MPb9LMW9yhYnL4kKkhWv8EWntZZD6yzAiKHWYS9obLtjbuTMms4f99p7pK9s9WQfo5pYnkmRWiuUYRRvDVUHo6X",
  "key9": "2VnES99CYygAbBKMi1Kz36mk9Q8XU8ay5SFBegDh53LvBRknEoGfsUcBP8wNAsnVEAAYLy4gdYNdugya1X4GpZjb",
  "key10": "yeF5iB593UciViy6c34xgjvqvQxwiyrnMYaVX1MTtAVuLjofbXGNJsPVR1T9ErsqAEMonHcWFRwKtuckExXMXny",
  "key11": "EXYULXUZzt8sP9bGdu45wqYHqDuxDPid55mLtGGTj6tMP2n71YCUNfQ6tyrXYxRtdF9auMWbirUDU9Gfema7fiM",
  "key12": "5ajgPJcXUb5zCYXapiBzoGUbm8RvX1Nd8LNZc9kh8eEMVUZo9gjcMKZAND6h7iaEPtsUM9Quk36aUBsiEwqRPn8Q",
  "key13": "3TZjfoyAQuT1eayhG5tARjrkivHKg162WPaE4keRHda5Lcx2D7JM2c27mHLThvp5cfpkRdVh9Kv2bqbHd3vg2Sd9",
  "key14": "2NAcCWsih39rskwW58zS19cPXV9hT8Cg3FES9s4TjwShfULc8K7ohQDBCzPNKY8rNhabWJprSUd8g3tmT9vZupsH",
  "key15": "gP1vVmEpPqkQnoiZrA7LySmngpgeUcjrrmCMRsTDceLkZLmiPTTuBHcL3mgBBKFD9HY5h6J8uPENhPKz9dTpKdb",
  "key16": "3rebezk1RKt7TXQ62Cz2US1kNApAypjX6jqcrFz1wWnosRfcM6D6u3fSiQVQiygVdXu3hWmAatgtwo7Wbgric2jK",
  "key17": "16KXuQGt3AtxmQ3W5GknCFQhWyYJTjXMxYW5Kr2d7WhUbX78Qk7evH7NrkA56CMD9VBCow1FgKNn3DejL6KSFtM",
  "key18": "dLh7gs1PRZ5XhKratqJCDX3VvsWRkV199t1cqaXYLqBfkU7opoT2dR9irvwSVeaqkRizW4dRomvd2niu4W149md",
  "key19": "HXydVY73BzbcrV4HLPd8t6vj87wLdR7ntwVadBAg1tKwoTSuQRQ6qecL1JiVHC9cVCWfujxM7GwJbBbh4mfmjiy",
  "key20": "tQ9fDBE1sCNcMb9QkCzmEpgZcAr23AmRCSqEvaPKHw1tmEc8mmpH3nk9Pd4fAdifjhJSNiD3WFBaB7cdsVWX9aD",
  "key21": "VSc8YGjmPJ3AZgHS5z6pVNeU5equ5TCRMLcsfb4XNDBkFs2WR9eSDjvVsPZHUkz6tH6p4LVvS2i5mkp6eHEmmyr",
  "key22": "4nP6c9kc27uRRBfxmXrRsuKtbWRK2MPMhawYkNTbVJZML6pccDSMo8GbdRPSemPtHnW9bEsHcKGM7QuDDttDwcmt",
  "key23": "4nDHPDKgwPJB5y8ipJnrKBTJ5YQCLWDDaRE2D8m1m337rQyS2NzgxUZMepm1osVD5xGtxFXBkhiN7NrNrKNpHdBJ",
  "key24": "5zk4uFgJqWdEF3EPFQnNXSjDnvAwAwQjss6Y8tprHXfyagfZwxMcSv8x5Dteti8wZWtd51SLYQKdVown3gXh1kKP",
  "key25": "546Lz4uDNKdk7dpCWh3tzGtzuHfMXfaq4RQELvUgNCUsNzJo41UFqtZRNtpX3xT65K2nHKKzGZVrGSXY7JJWvgxN",
  "key26": "3hyqpYgbUXGgx13ywDswREnmVvfZLoPYJVpBs2yY2nZ9SufSH3592owkSViNsirW1nt4Lo73VrMtxiyBWDranwbj",
  "key27": "46Yw7BtU5urxMXLnisWA65r1XhauALMRYuATS7m53oVzNkqfdpFdSW6TztaLU7FqTHLMQaCnRnrxZ37ebAqecQf5",
  "key28": "rmoo4gtmfuSu7Yybj88ZvH7TxLSisSJj9xV8hx8z1fqHbQXFLDGFkDdfTwSN2CpjMS6QE4mBqDdQ2bgi2NSgcsC",
  "key29": "2rMTJevB8yoGASzz3bz7S8b1rZuS3SvaQ5wMDVUXZLGMUfgPd8uPGXCK87ZYWVG84qMDcYhcK3xRyUY2teMEdrEe",
  "key30": "t4ry9asB9L23sPXQT26LdMhd275hfVypR8vTjL1m1baWNJgmpwF826SLvGa3hU66QEEnYq55iKQ7ayzL9CpkUvv"
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
