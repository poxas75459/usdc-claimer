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
    "4Npt5MvjeduBKrSHzhETadZFfKE3UmsFWiNv1FgnGRVjxSQyASeyX4C3c3jmKKqCpV2cs5Y6aoX25PcZCnrpH8wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpvu1ppWTEJwyoVQCj8wqSUv1hxeTerPJauqsnPHQD59RsiFsUzhd9G2Mk5T3YVbSgNtm3UnSi14E85tMCzEFct",
  "key1": "2CygRBudtX2roQBQaTmweCxoTmA1PbhTemXHbW4614wPWPgYqfPVB9cz61VLYeBxwvfhkq5ARoadgcVv33bvqcgY",
  "key2": "5wUNTPNxyj5LTHXLPoAYoz5MD15eprFW7oWJz5vJBE5MpCrxJYAQuJGwci6vG6aGW7eYeXmNaqnboDHG8j2rdcNm",
  "key3": "3hYvSwqrKQmxeXcgwvg6apsHi72a3b1enGEgVvkS5j4cu2cBb2H8WBEhcsszgaM7oWoKNrnY4JNiRw3BWEVKxYqh",
  "key4": "48wmDP2YvUWwbwjxLhvApNLBwqZKkzFeir9z1Gvo8w1ae9aYRPoWGsL4UQo8gLQ43d7LVP1hoTtmhgWxkRXTe2Ki",
  "key5": "62AkitFniEQEDfMyoEAMRQw1EVSNRZBhfmHdJhgdQDKRqZPKH3n5VU5une7uHuSyMJyaVBNjG7Kgbq54BMp5EhJN",
  "key6": "DqJHEo3fpaRENyCnCdVCPw624RSm5C17j73XPhNqw98DbNQASZYpfhmbhY6pgJ8xMfYGzFCie4jUWYrTdtot5WJ",
  "key7": "3N85dwXjmeNvWwFrf6CRcztxNnwB7towKHTsP6vevJ9pxCe5uByyFonw4333J8XEVKsBu1BditBRcDnCpKk3ip3Q",
  "key8": "2tqAWko6VmEfsCy9RXY5pFbbR3eBdT2BtJqNsFXGcdwM3GcBhA9nFaJvbjW86jReScmZyVPUghyeDfMcoti8S3PV",
  "key9": "3hnDkKJ5bejFCZ4FmQ7VZPHQPLnQ6bsNhESankKnfvhNHVgwuR9sEPDuKPUqGkcwcEmzECm8Rom5tF4dkmEcY8Hw",
  "key10": "5r9coF7tqkjYJrCnwmXaNk1y5Zj8bvxaenyLw4mLs5ijnYCrjpUFzgSvs5YsfgVCS5oMTi5UHXTRgLKzYfvQaS2W",
  "key11": "5FaTSF9G5bA34xDqz5cuSCLbd4kPJAxYLgYJUkWBBNveckqAu1XaTha1geBXLfVxF7v6UTAj49SRRKnUTEmPmtKh",
  "key12": "581WfsZLChkPt6SjArn5j3FvBNf2XivhijaXJsSTEzC19mLBzUWGdm8nYWaMVPfit5pdKxRvFq5uiboA6WMfh9Y4",
  "key13": "YggaCggcYcGuk9y4ES6qUWbecnthTezBMiM55E9GjaE9AhDeBsw9pFBFBTC58DtWUQaidqTJAnDSJNCmGngS6k5",
  "key14": "kXUyD2yvUgUkJUwrriRxfosZsXKCqVY6WdgcvYjNzPEYKHp2rw1cSzzpQkgwQJjsriaX3HauuwcC6GWNw91QJsH",
  "key15": "2uxfEZRef8doXSXWkKTAoPk9FEVedeGgTRF8FJ5e9M1X29oqLaCMMAN7JHWdspsYehXuyrDUQMpdBPYd3hgayVUD",
  "key16": "4nLR3hie7ZhW8hrUxjHmiLMJGpfbxWRLVY4vvLzGzyrm8EV2gbjNx7PVhrNjNUf47CBA2iVNsLHE2eqFMytDv5Tm",
  "key17": "4RqXHi3oCWXafCfT2cUohjU6DpjyWREnYUzD5c2Z7oqeLCnZ1Vfwmfhgz1v8JQXRQcCcLJDCS3ipRzDto79vzxFy",
  "key18": "3FcTbr67h7DzAuFKYrUa8zTvR3maNo6Hj4Uundmn539A4caFkBcfNXp4QGUd5CD5eG4uQPvjC9djw6eq1fTCrUGo",
  "key19": "248u3FkuR1mxgkJDHganGDpD2CPt6qkpgJwLRKWY2bwyDWKo9zY5ubyCZvmKnujXqPr8FbFzZyBmoXQbZF3EmcKT",
  "key20": "3Kk2nx338uBN39sDk2SLacr2DEMWw6HYmG94Y1AcdVncfoSoN2Ewp6tymtzMN1ZrX7TYbkSsdNXWKkXCSbyBkYEe",
  "key21": "268nr1Q7FC4Ek4X3x4Vi9BS7JWFzs2fijF6R3oMTYajs3EWbTV7UP3Bm194MqdQ7wa1WrCCTg4nijvQxinVySVij",
  "key22": "2vKXsXvfyNaJ9rJEV9FGEawb4kVrLb9MJWqJWkVfuSr6WnNBG2eS8QBuDsLTQgcH7igfoy8pqftDpfCqNKfvREkE",
  "key23": "6TKy1wKtoC4SwFvzbaJXX9J1knLKiwCtRW7ntDhJB9wafG1u1iakaaakAE8RuAgdiLceAoa6ecpja3NSegPTueQ",
  "key24": "5SDiziwFEAje5iFi7JTks1ipeEx9SVNiWKjwvSEQRdET2qnG52YNbPtQH8QFLbmqAZdMn6QwstqAJ5jNpFo7Sfyv",
  "key25": "4R9go5zDZDqRv4JFDPUvYhCLbVcwN8fNemv3xeztXGnmo7JpYFphazQkK2QAtCTXCcKWmjpCrdq5rwaH3z2yWBDz",
  "key26": "5kBBgzTfoHbqgHXRFgwZZzQRx9CcYbwKLYTL5psGon4pQGndvnJQaYo9zr4qMNKxe8xSATucG88pMxDyeVnUokj5",
  "key27": "4C1MVrJzSoYLXzFWT4SXFNHMRaPusUisJus5Q85CLKibjjLBKU7RzDzggt9uHFi4najEac3aUPoPy86JHEoaXXzL"
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
