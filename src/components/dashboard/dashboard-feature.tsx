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
    "sRFYHp2VbmxXcJwakUWg8VaaKja126CNW2oqwVGU1myfKGZmyPTLN3LXPoSPJGFG1KS5uTi7Qmd82nA9bg2iY2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fDuu2d8RUg3y5zjNTT1P9okL7XjU2e379PRsgFMeY7PGHovgHbetqxheghx2fEHvhV9mC1uugcohUFz4ZmQErC8",
  "key1": "5cW45sJqX2CUDnLq3hayfxwMtqanoSYvVrTaMtkS1MCmxuTiRJZtEFqqA8kHTaHext3CNaPw5mgAg5vZWRxE34WG",
  "key2": "5eDbRqZwf3a9dKjKz7Q5Yugef3jcwXNUZQoMVwK4B7u57ZtUCsY8f29uvR8erDovn2XX8x1xQ3ureRnkTXXGcYtN",
  "key3": "4WP1kQgXB1j3QdRNf6Z7m3RPJkfqQXgEBFXKqdZnrp8FZXGXifRp6cWK1WtWFa9mnVNmgiZ7FVJp512DFdX815Gq",
  "key4": "5USCvUg4GXgMGc1hF5hvmbnaTrQYDUfd19WeGTcoSngfz6yvmfoukBJdQyckq7sGzzWQjCSYzp5MY5uuusMMdbnt",
  "key5": "2dNPY2HyV78s6btG5bkxsVm1RfDYrr1SH4WtbWkbM8xQRB1fJyRj1cLKHRGqG8bZAoptVVPgohjM1PhDuTyJ8PPY",
  "key6": "vvqu2BHJbdW2b6LLXDRFWasfrjYfpxU6YCY97TBTUqD88oK467Txc4jK7Dk5eg1JcRzidgMi7B9MqiDfdgdeixD",
  "key7": "5CLifagxJ8CqMLt2rRhzgry9egLFEmatZAaDA14G2PjZPHh41jGuMt9hVE87wp4qxLx6U6m4cYCAMPj5gL2RHBQ8",
  "key8": "2KJr88XGw1CqpS2aob9AahKKZ86GxM1kH1RhZEFt9gQPvTpVQb4CwYVoWG96VMgeYfsksEgPrP9JTyBa9FLTcDyR",
  "key9": "oqQR6kibJxCwMKkvjmTA2MPKv3Pt8THuHzng4dq2fWn7Unj7v9icgA6VYdwtmhWEivR56QpqNv9PQCKzgZnT9ic",
  "key10": "5TmbmXSBgy4motiejPTavfNB8JaA9w8kPdqVzo54SQw8cYTmRoyp7Yy3cKyojxVmJA3yfZb9Pm6wY4hTKxpRhHiD",
  "key11": "3EPWEC4DK2RPFgDuykC4qQE7o3rpkQ5FEg2gaS9NcjfdUpHkPeNxQN9QLqAp6k8YV3qmetuG1hwpnjqvV8r3KwrF",
  "key12": "2aQA42AfpqGcdxYaWfLW6mwVWfbZnvCQD8JjB85v99W8DVkcipozw2mgmUAJY3nZf74fxfvxGLm8kCaNZ7nq2dYs",
  "key13": "2ebNk3o1GY7A5DwbsNCS4SAR4FEpJrtszqFsBm7eUkun9m3ZkYuFQv3yQentzGUuPmM7Tr2hSotZP7R2hi92u2W8",
  "key14": "21QvhH3EvSXY8nHxiMWwZt3nQ1GzwLzN55ZZXKSsCsr7oimNFmUwVDvWE8dbTRDkLvR9gFmfv8PTVP56W8zwyAVF",
  "key15": "vYKMrfWrF4vPR6cfEtKbe7F9ykHzcYmHHgpsKPRjNZvcfKwBRWdXtG1cSyRPDusMPx22aQnvEv3Q4q2CNAXoxY2",
  "key16": "3fKYkTND8DGTsFVhFTZSbsXBiGtuKG9WGn9uXPesBobHdZteU2cjkJNg7hWUEwg24DsMtfx92GPofRKVe52TmK9h",
  "key17": "5AAh75owoVhxSjfz8fKpW6e7pWyXZzX32K6wyjurFLduvWD6CRMnRngsZvHEwoompDWWQPxMVen8z6oEv57JhMFN",
  "key18": "5Zp8K7s2z6rVYh9swijqSQ9KdXvtfzAuj6vnXowHgeSNJo8SUxewqXYrAPmcZK7jScqwF2LHnTdaxyDpPyWysAP1",
  "key19": "5pK5YQvqErC9NXT46N1HjiPRX8kg3Ry2BJUmMVyBcBait57DHHJS7ZTp6Dx6jqB1WxMYid78D3EM45K8gws3LKCm",
  "key20": "3HiZUSy6SGXAvErvdLJoaZChahS6uQxFLwZN2Uao4xopp2yBR4shtHVfUnJSnngKXmX5yXfWBvGqphrzu28F4mXP",
  "key21": "5HMMFYwZqLeSFwK8kXDAgrPPXWLoQNCMHdd4RfQgDZTirFtGV8szSNTqA9NShdSi2TuTmU321miWinHuWXsrSFJ6",
  "key22": "2SqDgSV3xNDD1A9Wu8wbQyRMYoBqWmLRun2Tr1CXgbmypg1gF314ixoenniMHd4ZiEHQ4ChGGHi2d3Lherx52nFe",
  "key23": "5RMtksXrz2tbXvqg3HAwCqu13yPKGD2e2WR4tbAH2grepqSpZVbQ5mMdwtxo4u1jh6CXB4knPbZ3eDmpYj6mJDze",
  "key24": "2VSawinqk8Tgp86S7ah6aDFmtWkwJDnoEcQY1KGEWbuzoySoN3xXfUCN4F2e4CCMXqCpUqYUffvG5ydUWgbxyqaZ",
  "key25": "KEfq6sbc93Y81cyDdziPD2RToLBBAsFANEDsUk1pwXN2ksrwdQCbMMjQEDWzwwtH5Ff6S5ZQEcx3HR9b25tsqeg",
  "key26": "2zPz9ZKRgEsMR6Kd17FAx31NrpXQpHMg7QDHfmCoPaTFto2fDcDpLJkeG4rGY2y2LyhkvsZ9TVNdMX9LXMLxMwR6",
  "key27": "4xPQqefHeZAkQibtozHLegRPZ9yd5ZSVEPDQ1pHmWdGiJBtFfpWrYcNqoHXdkT8b8VbHzmduJMJR2U2gT2G9VU4h",
  "key28": "2HL56PMCSB5xcn9aH4GYX9NG82ra3meFKjvZDv2HCrxUjngdxzyUqzBv36Em2msP1GycJVR1kWdtRFEW1Rw9sCm",
  "key29": "2YdD55XLz2VsdD6oYGzade9NTLhQ6GqST3sVgL6zzWT29ajNMrgKvJ6qUnp8onm3qt9rNZUFrjA9HWAh9bwLz2P3",
  "key30": "5P74vzLfktC6sZEBG5toGmJFV7C4PDkVhvrHufh238kQKULvDrX9XfAyKvejcX4ESw1Po36S4qprgTqmxZfK848N",
  "key31": "5dYjtPg9i2jHzbACtstfkJgnw24KviGQziv8gtVUTUU397DLKuq4JqbL8ugVc38qWD65joNwnG5hamBrCHP2Gm59",
  "key32": "1B3wjqWyhiwJ32TGGZEB91rEDzR2M25TuGDHWchgafDiJ31Snxn4uZqVtqBsvZqsM6xhaNxbQWuWk6D2ARCK6ZF"
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
