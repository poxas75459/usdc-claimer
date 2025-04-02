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
    "Yz3xP496CfA3UgLVWX16RND55eVpA95dtH7Q7vGaTJ9wXTH86hTt79qL5TEw3CbtNSmC3FVp88NznyQcqQVpChR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEVV8HeEnk7qSXFtVEaFu1fCPZa4gN89Ehaq3vPE4b4jqkJ2E96Gz9ZT1GYzwbswvQXVuHXdKF7xXqJq6GY21EF",
  "key1": "4MsXzXpWuaheJ6wuSFBrxAN6jmQC95EQvQCLDMJy4pHDsyTsuZxiCwDCxk8hprKPXeUeBvxwvLfrz1fdTcvFiAwf",
  "key2": "2YSHs3Qg18MHt5PLKrt19idhg2VbxbejefKruc17Mdx3wqoT7h2WxunajqYxhvZ38ALyM3jHow5PoaNvvGqoj1it",
  "key3": "3wot285emhqLb26HdJfcgDf2Db2tsBRAGGyXhswsJPtoZvHsuaziqzPih51qsuWWfBkLTBGfpEtRy9aBptq4a6Fa",
  "key4": "212zt2yzrHfYXa2dtDPcdXsD8Zaj4PMGkM3kyhzomhbKMzhYjy46drffntDVhHHybreSqojMjAcr7DCG1Xr1dNZa",
  "key5": "cmQCGVFgKxeiEPbRdUUDX2sXE3fv1cbgwUdjsxmhcjQuew1ALySEMN9XUey7pP4zPzcGJzKaLTTTbECXjzS1j8T",
  "key6": "4kwWqE5bsfDRvaQz465bKwQsotBtBXoMqFunHMdY3kgFbsNhFw9QTFRkbr3BxcJGHhscmGhQRG1bkCbaiNL7qcJU",
  "key7": "5zx7coMezekxfQzwZBb1oue2dGvWbgJxni8iKNVh2mryj14VNs4ag74Kq9CKzE7DJKToGzxAJNWtEHs83axGDnnp",
  "key8": "4P8PRaVsh6dKGyUrL5tunFkPxzL7KExV6dsxt9AjPEMSDWnoonG6kKXWhTyLafGawthdzouhbFV6oL9NQA9ueF7K",
  "key9": "5JSKBVSqGWRTC5zcvaz5kG7NLQyE825vi9RvSoJihPeJnqvJt9RUDm7uqXS4Mwysf6Meij3VBZJG2J8YzGWA3ysD",
  "key10": "4bLy3RvEDpa9ZwMZXYkTjygTaVq9YqwoW16BmZeQ92z7CWAHgWMEmbR1zhCQbSfzWHem6wMxJquxTqLMNxTc6zBL",
  "key11": "AfxecP67Tcf1W7JU2L7xT89UES8Fsgb4UVd3gEv5vEim3MxowNwTzYuQRydqex2RfPyyNtC4tRfoSNDbY5GuHYF",
  "key12": "sy5YGpJDfBis8emQXWb3KmY4wuxUnBiSXRa8SMtjEU3cXsoELXq1ZgyMCR3dc5suRNawRiEw5jtZtodXsW6ETqG",
  "key13": "hygpEyUhBHfjA65q3VAtsvAw3qHmKEH5FgxDTDUudLKuMJy8EgFQPKSmcBudzDPsdEaHrN9i4zz4iRqLnXjGXLC",
  "key14": "9y4TqMubMsMff9DpSoEv6sNoX4LxndnUf9aXz259hU6orRCjSc8MnxPFkk2BkPX3dBuWMkLiigd937dA2Ee2GUp",
  "key15": "KoVNkKyFkXmVZQg1my4GYsfuBV5WkszmU4LwQFgC1FTXm9p4mLKv43gNHNNrz9kz7gUSXk7xnyM19WaNrUbE6pT",
  "key16": "YszwJu7XUA6pHBjWEXZTqcyckVGyVpnnSX93H4oQnGM1Zeh443Q7dE64HMvASu3MAdwYK6g3MQD5AVr6kWJQ34p",
  "key17": "53KMU2X8zYKhXosADzJG3E8928WjxgD2p5VRAPxRSCf3Fei1h4MRAamyEUdvvJfDv5RZzSYCuGa8XypNNXxsmGh2",
  "key18": "2mrjXrCDJmBB2n6fqVgsDzjbb6ehNPCXAJqd1QmsLUQT5AXYceUv5aqAvawZAZqSXU9hB7xbLTGaC5z8ypp7LPEA",
  "key19": "4qUsHVLvpkVgteYYsipYGXXWKa7fycwou6Eq4LUDyoXx4Zx6es3KW6nWTF5SHrbk5kzsCDwz6a8hrJNmCjHY2BSi",
  "key20": "g6wDpXTZSDDSHDdydBWN6jQTC4F8TrjV12cAUc2RnRypgpSCpsUtWoKry89YPUEXNqVb8ca8tBYycVs8EDbTmx2",
  "key21": "3qtUUkipjE2aSBjVU1XDogqPmWoNp3BRthuMFN1XoMA7gQBgBZnBRyQhWgQHU2eSKM2jKgSwhSWSbLkbMpkveWzW",
  "key22": "2PDxcSQrFBQhXpArXrHcSwQHeEyouPWqD5V5iU421RfS445B6HVTS3CgvoJhLQaZtDeQhCaL9Ct2U3M7vfDEaSzW",
  "key23": "2TrEG31tFtY5JXyEQaoNPQKJf7JTAubYZHoX5oNx4hf3zNLZjkCbrmryE8BJTWNQ4ypin7YYGpEmj5GGbDrV8Aa1",
  "key24": "4FzGAmEgmCst9BHVeVGqWNdEZXHvWPm5ETxSkZ8pzTYaDHR8gNywkX8So97u4h3eEQAbDYZZ35uNPBWKofkbPw3L",
  "key25": "LT1WVauJa6LsZ3n43oNeQCBEJ8Q1u24YPgCSu8BtY5Zg8GhTyLhUJ6STWQfX8UhdqdwnRRs4a81PSsNDkeXherT"
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
