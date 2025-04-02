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
    "vAmeS5Uu8bDeQERBYjBUQDbRhRXyEaY8sPzKe24jofKyxj7es1VDhp1UhZaauExZXJd1Ja4TJs8E4graDT97nvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FnVe3ZasT48oBSxPPemzkNEREGi8pibHkdnA1969PXeTeKBncjkjdbDqgBRDrAyC3bX3hJhDmFpx5eoBTjHRp1L",
  "key1": "5caqLr3JRftGLk2ehA3zxrJJ4FEgGrSwbLhLHoKJNVhjHvbrPBDYne9tFCHWBrjHUhE7w9QXH7QB45d8oqMVWA4u",
  "key2": "4epjJeWAjxmsEmyYzVvoimrMXXGcZGnwrQo8x471uSkemwXAx7JzrcNV7iDLVvgnpAdjBq4EPqTDJD1XpvJWPhbz",
  "key3": "3eW6bDyxTiDmywadDeTWjiJsUk2zQHFNSmEQVt7Pf1PUncmpyPUvXT5mZjNKqKBdbyJ572MQ4Xq3HyP3oeHyuzV6",
  "key4": "5pdby2R7NLaBUH5m2exPkzs32w6xpxh5bJBdmRkiKtUmk1KmX4RPyFpt6JMLLks6b3raMoif9pJFpBhyt3QdGnmw",
  "key5": "5hWo7oXwEGrrKr18bmssjipYmYvfR35ckuwmcG6LkHiJeUKJhvuaHY5V4amSEx852nRVv1qrPDN8TJcwuqUn6Y5C",
  "key6": "5khMGbycrFrmiagzJpdPU8kV9hpQpWZCJQYYnyTqpYvj8xy1PwXzCoPqrtoUKb9bvHZwKemJ2QN1kP3ApqFMVw8G",
  "key7": "3Tajionkjp1KW2yApc5EKMYNHkaVm9rb5jekWFNKUVeaSjDxbG9Nh1K9cbtoodignr8hidTkEvXUxT65tLUqGmYq",
  "key8": "2xQpPdAf7sUYufAbQAWjj5FqkuwkmdVMrzERJimx4dxHoGXdm5PughJbYqVXGHQXtMu3dTMzWB9b7RVYrvDdA1Uv",
  "key9": "5Y1K4oU1oSKFbSvqzCZPcmsSDCt3cm2LNGXjQScRxPVMtDAfe4z4F5SE1FcS2RZcH3vte585ueZnmyPMyLRzhqpy",
  "key10": "5HqS6vxksoVTJs1AeDPoqdYAN4Y9B1xznrLupGoDjsbxnr4H26S8FUdAZ1sutd5qyz8W6bkAficpU15oq5HeMN6m",
  "key11": "sMi4HPZeHstgU3paTRpfVXgd4chqhPmji7kKBiafog68UqynYGqC9HEcrfU2NLq2wgVTBFce7LHUGsMtDGKqJM2",
  "key12": "5ZDJZc5sieUvZYFcMy4CGmNYYpYVWsGuvZ5g88AmQ2JPHQ129BZG4ShGMjRGa25qkZCbyzQiCk7wHebjJbaQ4ds4",
  "key13": "2QAGZFq8ZeugSLKxctMoNSUzQvfeUZ2crAANgWGQeMXimdwSitSmqoKMztUpvZF8tYPSqzLPs5iDnwo9njYPAgYe",
  "key14": "5kaGxBdRpDpgYtbACt8PbYSEgvG2NnL3KNDcTGH1wWG1ZZbVRrYxyUtpUHx6sTTo4rZtnx2uh1USUFdzHJ4TRkwB",
  "key15": "4RAFuC3CewDs4b6XqSB6gVS7VxYPzYpizhxbUrKGCnrrKwsEeFAybgZu72DeMMfFamBR3EWJM5iKVZCYytJAuPMy",
  "key16": "2c83X4X4z9JDRDHpYu2Nsg4iiQ8cS7NBZb6KWpXZ5xodvqSMNtGn28phpoBGgEWGrJFAqtWLhGVGkpmXsDUC4k6i",
  "key17": "4C32h6Aatu2w45RvH2muwKKTpbCaLg8P7dmWug6tcSWeWUxovSQKwx2VaGiUxUfAuxeRoQtX64NkW3HR2UMcwGM2",
  "key18": "2gcDznFsL18hPNECL48974aPhGzugiqdyhhEfSfF5BjChG76ghAfUNVfz4CxWPWyUK74LzpUCfHNfXwjcXqVBvGp",
  "key19": "31FddBQxbCbrqK78Lmu4GaEKqpEBLaNCUUJSDcR5KzkvNomVcK6Ng7U8kfwLcXLDoLna6t3DjiN8go9rBjTneoRa",
  "key20": "65egVDTBRRTytqWzo9HGjQ6PepMRyRVNAPx1K93F9RzopaRH7FgFsFEPYbrb2zVYFHG5VVehfZZLqwWf8S1rsnU5",
  "key21": "65CSWCc4dXJ7CJNZ6jCMJfvv4o53iez7LBdyGRDUveEn6zZW7fhFwUE3zWBiLKcqeGgFdLi3ESa2T9QnSUcM2cuR",
  "key22": "4M4b4DEvrdjyWj5UtSspobfGdtLoxWA6YxLb4WeTT6hDhx2ANfeuj7AQcBfmrM635sVek5ibhqVGCuhq9BWmEPSe",
  "key23": "49WKTidcQQ7URdXWxmdexAE7bP27CMbqdRjRrCYtvMRqjE3yhNpaxvzjmeb3nJ8VtvGHnReh9qmzWxqutgRhN71C",
  "key24": "EpnN5j7HJsKufzPNsDja7QUYK548k6fpWwisqn48uT6DD9iwBm7XgWDUrzLqcN2vDCcbbp5fR1dXiiUn1dhextP",
  "key25": "x2Nv7uzCJD33bn7c1fbGTb7Nd1bFDZBffEmn8h2wzWttqk66jb13W8X9EDvTJDiaQjSTyttY7576aeGkQ5z51iX",
  "key26": "5oDo3CzKSjy5Lt5pkJxhxbEjqb4aNkqr3EjLJz6zfWvwMPxZX2LTn6iuAMmojbX1fBq5rKfQh1sqSNx9YFaV746o",
  "key27": "EWiJLqHabB832CrEhJMfHdUqunAkSjwTtNRUaq8grWbWFJEQfUWCbPQmVmJcVCnhpwyNYQLsuNJnGZYUd532Vq3",
  "key28": "5r2zTe2RfiThfwVy7Wfkdm8QF5BuhQiW1PEHaeruL2fXdgKw4mzTQtxEE2D4U8oUPjMhwBw7tU2W4ZprLpaP9i2b",
  "key29": "4SyTpRdeANVtRPDPQY1f26XMfLZuQKsdSyPgsmpjRTsDENXMu2VtFutFSCnMk2PpWCMSjQb1qVkYXEdCAVaU4Zuz"
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
