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
    "3YXc591fpN9TDAfegnHvtsApDCrstsEBbuEFdpdgMgeESCpAB3JUVrjfnTheDygFDiLxh7s3k94jPUgFCRfmAuUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHayNuZnYaRfGGMo23Z3shoqL8wbc6LW1N5RcB5xj7qCK2NyT2YEdWrC29m6D27FFcc3H1tY1NwHpYX94ePg3w8",
  "key1": "46EcNeKwDXEAjat29TjnJfg4UoxgDuEn1HhhMVwtMP4JhxkuBC61QwfbyRbdCV3AX5mWT35Xv6iTNBQBcLPp5x1K",
  "key2": "4URPoGbR2bfoeqrz2kxcgnYmMRqDe5Bij8McFVNaSDkiYiWJDSz66fSLd6ooVZHGxxexf9GDxgsgxCisR8rjs2ts",
  "key3": "3DcatNsaYX5gG5nSud7tpFJcF1X2Cz13zbhVi9F2TL6GsRfR9ZMJ1MREB7E5Grx9Fk5Cg2sQu6RGcMRopWywaFq6",
  "key4": "3Z2tiZAv8TtwMBC6BNKxiooAi1xHJxQqUgJWoeunS3MEix2oWzfGepWkAaa1QRzReo4ycpZ3mj77rVjTAeNUMjSv",
  "key5": "35nMWxkSSuFHScsrrpeBJcK6KHTUJFc4g73Nu6pavWSkzh6UxW2Ld8EZU7oqEwQ2PujpFsD8pPkVCv5932UK5Tov",
  "key6": "4jbmRvCUvsYNLUC9ZrXJ431Hh9Xe6z5MWtzpP6eoEd1NvriTWuN8zsrHDEmCig6KKNmbMAK3D8exaTtgt56y6Fau",
  "key7": "LFPTHTMY81MNEt83ReV4DfpwJmnAPaUzgSmHzNJU8QRXE8NBpp4Pt2GiCJmh9aozpuriCKsjCZjSF2ebHnrgM9t",
  "key8": "3fvSd7ykgy8CnpUWVEMejribNTvnsF5Sb2oMcvmaXBcTXUD2bgKeJb9kPLcjcbMdZ3ZpLe81KxLU4R9DXmyc65hG",
  "key9": "3PeSTBcptq9MF8F3ib4LTbhNponad6jztiGabYNnv3oB4tobnH5prLVZnmvonUi3SKcX7osa9e1WY5u1ud6p4aKd",
  "key10": "2LywwAwiKeJPg3CQ8MhcvMsy31hKAYCu3yFzZZJpv1E6Hi4xj9K7Eus3Gd1P2rKpsWbd2vHa3TtvJvxe2FnxVYF3",
  "key11": "3X1c2zSKbuMaLkKKM23h6FCoNRzCaAuuXHkznBBiXSZ5UwJammVw2g6QBkuv1UUvoYAB6LEu9uKw6bQPBGZBVfEc",
  "key12": "4iSmA7rcLs8HZVAP7T7TxmTZ1MLqL9iDiVPwXh21E9mEG2wAwyW6dNgx2Qih26dAwbQebPeJf5fvEzLciueW6n4A",
  "key13": "3dzFjCx2bVKczwNSAQtk1YcAw1jndqCnCdV47mcE9qLmYfyJzfyxbN7Uw4dct8yLeNKBbq2qW5FStVaqNrG1wjNA",
  "key14": "3v4REHdzKWvVScaMVgsxvLd9G429ByCi6Z9UiWcvRYKmMejaEbDmGXrogHxmCpYUiwgHbi8uSBQrBTsmd7U25Kqn",
  "key15": "3BdtzkaxZzQWDCX48mDAxvrmxqa8j8bJ5hJZF9NouPW2dk1aSaBbUsXgsRfkqetqcbDjSsVehonpiX3pCs7zXw5U",
  "key16": "3VajQayQEnqyaEeorMUbpvn9xCdKjjgJnvKGsWnaSBBY5e1yuotR42TaS9x9eZvkyG8HAHFMsq6ZtWGp94wVmufC",
  "key17": "2QvKJmq9KQZF6WBSr1jmVcR9YTceb8GhnBA4nTzNjZdj5T4L1Ts485DnQiRTVXsV2wd8F44a14AaZm1qdffv9qVQ",
  "key18": "3mgmYyKpqh8jVp5pkygccKvn2YCLLHqkRH2Yrcnf3QrkB8BMd1L82mDkwPjpcVW1c3hgsyNG8AVYmeRh8KFRjJGC",
  "key19": "HgCxBrP7AwY6bQFgad44PyfgtCfJq71swZwBEoG54Hi2rKvjJUSqu4P7A1MKBe6pSBvJM9cR6wecNwNT4YUGCPM",
  "key20": "4eV73ntdcuchMvrVgQD3Bezaj2WbbEUrYY5869vHPT7isEXPcRTSkZ2gXgnhaAFstp6PUM5pE5n6L4XwGk1mGLJ3",
  "key21": "3beoPa4zi3mQoKb6hyKsWjytUKeDcXNUMZtWuBgGNQ4QYtsnswhdVNSkSyJDkk2tvsk8QGr6RyaXxMk8aQYtsdxt",
  "key22": "3vtzerXXWG3SjmhiYTkwSGjxHS5zhbAoMse7yMFhVffPe2Vvh1EgRx5K7hD9YvvvE8NoPeW2odmNwoGc7mxgVPhe",
  "key23": "5jab8iFDPd9yyqdMank7KvRxKQdrRHcPakBamZ7DenX9zzdDdMXTZhgXWYB93cRsHkqzPkouo11PELsWvXNU1Ldq",
  "key24": "5a18iMpfRqyth9Rnot7oSHk8V4eCy4UjyeFEyhhw4wCM3dYAn6D1wMkdJ2uDmgPVM2nZznm3MinC6HHhCKcQRCyZ",
  "key25": "M9wtLqP1zAXZu5mVsqFRwGFDM2G5gBABw7WTr4j5bcG3gcT6SuRF2cPGoTMJvaY1BXYxQvoYK68zziKtwz8nHFx",
  "key26": "5qV4kRp563RinPLdymbjDCVrNcnPRuaYMjyWpRUQwZR2Rq5rVLbef4Hr4LHzB6QrePFG3eyoVxVTGM8nGFWsFa6w",
  "key27": "2ENMwRGUVWKRxwQTwbg6k1aYh1VGesjP5YQcYbpwUKqgEGZ77EtfgWvoAscAUzBWiKSyeouLCEkuwZqhmZ2NMSjn",
  "key28": "5hHSarbkiz5hQXN7d6VHvzb2f6X58B8VJYRpJxyWZjgSyMC7QBCALQ6oKE1N2AZo4XU7LVmfWWd2Herra4MLfxQD",
  "key29": "23HQwuuPDUAGfxLyP8QwtJh33aSkCGAnytGeB9vCcvnrMa1KxHHDA1ibV5C69cHgXg6cfZGrA4CQcWdquqXw83KU"
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
