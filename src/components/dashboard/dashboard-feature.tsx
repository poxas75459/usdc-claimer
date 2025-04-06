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
    "fuRAMG7uMwaxZy5jQ74A8873AobJ3irsfv1PVpXVmcaHFVFF8Tvjybzu9r6Gopx9NVx4JK6jt6Qgqcm1RgSXCU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vHHNw9LwWjGiNtZMgLFKTaurag7nSyAUegpjEAheE5WW6X9coNLQAe3bnRBidTdcE5ug2YKNK7uwaoT9jwZmbea",
  "key1": "eRkJb5Ga7RTKV6QjetuKsDr6owDNmfYYExLkJPJE6XA9kTZmdPC8RSKGFdhoF8XAwPagHF7KJQGFyp2cjs2Uck2",
  "key2": "5Pu7nrBngicqCAqaGHJSpHnda8ny7xtWr5uV3Fe1ttVjrUcuKsJCiFjLcqGz3oWSaWqAoN9iaWwA7xaeg6c917qc",
  "key3": "23uFRTktG3hh8D9fnLx3FbzWYqPVUb8jyCiW9wPkwPkoEL2iXfriV2UTRiUdnRPCzLMocCeCUoVqvFAmMZ9U7Tqd",
  "key4": "5RLKqUHEot1834yNY4njY23bnzi9h4u9tJ7qpDRErJBECfjRxihaA43KUBH7eutJtZEhW9y4Mui7iQ2BA6qm4pZy",
  "key5": "3wqjsMnmVS21BEY2Fpw9X4a4328JK4ce4e9tDzi4q6rFRveRfif5x65maKnrpaXT8PWz1ybxM3ecjfndVheURCVA",
  "key6": "f1d9UwrFwgAxfpy76XhjaUNdLfm1ysMUBK3xhSFQh5TyW6PNcTQQcsMr65pkU3YJELQHa7E6ohqKJgg8wUQSL2y",
  "key7": "5tsRAmZvoo5uZvH9peZV6gwUABzE8KCKxuuirRjkgvdWRD4R1X4neWA4qFzxnCgX5ytQB9DpVq6AjEVPskTri6KR",
  "key8": "4RYHoJDP7D2xxoZR1fquiUrqFouzCZT75gtFxBXF7TjY9aLP8W8vhQMSrfStbYTjuo9HKFygS6ANh11d61hqdzq8",
  "key9": "4pSXXX1hE7xjj8o9oYqkcZRbxqx3WEAgXEqvSaAc9fvT1xvQzCpCaHkQzNcbhL5zL52KzUd7NfVDq9zeNrwwLRUN",
  "key10": "2PZLqxBpvXoU2F9vSqqZ2od4CvfgQNfjwo1vxBtvXsnVQp9SekD6wXUDDEsDVe3zKp9XRnhnA7pRKMuJPEhxBodr",
  "key11": "xvr4utYkvaaT9C9iGvmDi4F9yFtD5ytaw4YMc6ncm1SQ3TPzyBfVYURod15p4QSWVSdkeK7VEqr63xqsbwcpLtT",
  "key12": "56YBM1JW439yctbGNHAiyToDeCmZpdqjUbXmwqCqrRxCuaJ9T6NvNJDnSY53162KPpFENLZKKkGfzzofoYmagSRf",
  "key13": "2nX8GCgwPYtPs9coxdd7C3mhVU3obA6uJDwtBKad68h51ac7zUQ8VKkc3KG3HKJhbMhFg6pbWtVGRsoEUJ3P9YjM",
  "key14": "32bAEXhQaBt2oBW6R6mKd6KBUt9cotjrbcEXcdHY86tyjwkTmGx3nEkRv6W7cUv8QV8ssaXmhxhhKWL1c2KGui55",
  "key15": "2eNKZGWzWDDdt2b6Lx8gczmTqgVJ2umAwe4s2F6AS3j6Z721fBFVqtyKzo82DcY9wfwu65D4D24jpURwq1tJu7ez",
  "key16": "42G2VpeuAxq7w5wTxFBwLA59iM7zBZsSaWcKZ5BdFYv5bYHaFSKkEdh1apMMcxHCLRfbSaotxcZGsxwnx9HzjWGX",
  "key17": "23Srwpr61FAX4GzN3cVpwHjSEdqcxgh7K11h68YUMibwh7vUHvAvgDzyzpDaptCPkSPNUYaGAsDD4YJjWVcaneH6",
  "key18": "1tDRaE69MeTm9vLBCkZV4S2c5LPfFKwo5t7FDtAoGTYYLt9RapjuZjKwbc4Jofsuxhu5xRHJv5Yv4Jcyxwtibjx",
  "key19": "3unBxWWfD1MQisnNdFhJNtrxyPmk7bke6CMkUwWp8yx1ZoiNviLTHaSjLaUm8pxQ3jPBWcqh3QfBCw3X7dYCFV2J",
  "key20": "5Vvt38Wjk1gGy6CmVCDbbL9gjGuQizgbaeNGNCqptdx6gfEAct8Nzm8ZaQdo84aCEer9f8x8vt5HyENAtfkPuQza",
  "key21": "3uYi77jG5wodNVWXeaSdimfm3e6BWavxdo8QjqAbWcNQq8rxN5uf6NJFsC9tDcJbrM94RvUmSbUBwvMBnYJoeztk",
  "key22": "65W1W7h4sJSdXpSGq2aWoX5ypZCjz4AYCsgvhBfhqb1caEN5HcFf6Whp1cDXB82ijTxxztmHwRxoW6Mz5dPs9xsm",
  "key23": "38kxJHrZZ9C6BcezeQy1uKwpfgaL42cYB64nwPd85ADUYLVLsJ5aBoXEVBLBGDmPC358dg1NPczvCJMY8rtYHu2h",
  "key24": "5Q8WiK3vERJgCfpDZHmLFoRatd33iCxVF3f2CcU8jj12vrRs13NRoYHyrZiXU8HfTP5cWXBEhSkWJudreCpvh9Y2",
  "key25": "3vpAnH2f5c76K7EVhiVfhcPbSuQbSW6kfWP9voG4yhD4rHpqtNFzYTwYiTrC55VB6JWeryFRhGr1HY5HFdBgbTCW",
  "key26": "56r9AsMPmpmwUNSgBHvTDyLBNUKcHXHqTH4LweWv2jC9BQe4nV7sFFXRHiKn4SzkDW4N1bWQJcrzzUsY9RKV3tuq"
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
