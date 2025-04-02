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
    "396sRWB4hsFpZeiTAsNW3JQzDTaRrgrJPcup8fdCjfeb7UL7qRL997tZpnmskgg5KMN5sYn8CiJ3HrSFHuZH38C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4quj7hj1yNPX9Li7qAQw6VrJzcZXfEgRgbD3KqkLtxfZYZNprPsZJJTcRkpnvHpL3sRnMQ7LnG51GrARBZUVNb5s",
  "key1": "21wjcgvXQx8LKr3Ft7dgTDzEvudKUTp7Y4Tg5M3v7sUQ6j5ny6fkidWbU2WB8cr3EFHcbkFHWhUr2u237yakpNY1",
  "key2": "38rjkSKVPkAwdWHcGi1fJCDYfTXG5HMqeAVPAG8fBYhYw16rsV524bkndsvNYm7HdZijRm7uu2x7JRBf3Deegb52",
  "key3": "4svtPWE6AYJakjqFPin8W5tF9NvU9LeawfNdcBfUbodgowbaJq2f3nEyYWDAvvJth5MapCzaHEBfZ1t74YREc77k",
  "key4": "sMefYvyPoyfB8YvM7nXXa8othCRpd5nkitQzcPUsLqTr6vXNgGdfCqwYRJarznypywUXbgbboY3usVs3NHrJELR",
  "key5": "KrkRbMP5LYkLQpk48ekRNU2NzyVVGiadssNQMwo5ciaGZ7fXu9uCdwVm1h766HZBFDf32fo5giRNkCfx7xiHoZV",
  "key6": "3WWiYGb74wd42o4tRmRTwiFAYcGg7KzWSaSZUtUog9mJRGuZcTDnVcSD6Z3YodA8XfyJxKg7yaG9C1p1TTzwLDvp",
  "key7": "2ndXhhWLMzv7W9RS5sdqB2RcfqFjmz6KXgSUDx66misiaHeTRjHUabTvktELQrJ3mMczzD2to41x7mjnDRHRmF5i",
  "key8": "ck9cAkzSrbBT7pEmw2kk5QKSnXeQwG1Pw9MFUsBt21BfpD2RkkEq3fBR1CfPmzp5Z5ka2DJPnzwfwX3yGApfnMM",
  "key9": "qh4xQNVpf79SsBTiAEj9YXivnSDDvdPCcDYMUdsetpz9WF9UCGW783xvSjRNwikLiD1Mr6TMtXLWYgPPeCZFaqu",
  "key10": "3phAHvSMzQau6CqBX87Qrxrpswf29bR8EuggqGQrKHoUitwSrb8KwzSGKSAc1pbBGZWv2vyTksj484cy4KiQ4J9z",
  "key11": "2yVUziq4m7qiedUbztiCauD2kLsLdyCHAuoGnw73xhFSKGixFTMbeEVyo3TSsyycvkpZjKrMknk7Xo1CuxhVkmHf",
  "key12": "26kpUG6U9uVbRKSPPAShTp1uRX539Zwm6RuUz5Vt9xNBmfPcbj5UM2hQRao2czWnLbFRGoqGw5yXTHfh4rvvpJe5",
  "key13": "5E2Rh36puJDJQGJsRYDuzXz21rX2i6zShxqr3hyAJfsquN6qcrFnb14kGPJ2QmNS5hmFZCEWfdFeWgcvScKdUhUT",
  "key14": "31yR3WF5hkJ4oU1sS7UHEzAt62TMdAG3DqCiowQivvw5s417wLVDNPyAJirJFpCdeq8yiRyCYdwxF7HBtrzFEZsi",
  "key15": "2mM7mrZLWGSoHjB1kxwNVvgkHeibydZT89DvXTqAHfvPJpgUNTTYQysaNWqUGNzaFUCqzcRQbPf5wqPpecatCeC1",
  "key16": "2Qy3dkUodnynsjo56BCySTGRrgK3cQu8wRxzsM2hWRzqB6SeC9tude5UWwZtPEmk5y9P81WXC2PUVXVmoTT96qTY",
  "key17": "FZawYXs78bL1uRym2h4wzBZgCDxpwWR2UYuwLrjmyaf8FaUBW3KZ6j2qK7NRzKw3zhiqSFWwUPEEyoymiVSuCzD",
  "key18": "2GFGRnz1g9CHXpbNQbWEFwuV6J59ptDf4LPg4tz6uN1XK8G4QaGCECzeVvdizmy8wjAbVgKgquv3orJ4Ds2ntmgB",
  "key19": "47jTzYK8Ri8CkywudAQo2fFEvZt5187Qxf76ZSWkCjFUAABmWGBiek3fZTQUnZqZqzxKwyWGoXrfWYmceReCi54W",
  "key20": "3TbUtdENKQ6RHi3bzBuutQC3eKki9m3xq8PQ4hYTr5xhJ1h8wrsodo67z7EW3nD3xBmqpwxjSq1KizKjayjvZs2b",
  "key21": "45rkWpDHDDRyQAuTutAtxk2eCGTaBv9n3VjzJzvBhN8U2SmsHgVxn2v1Mq7Dpz1NsdjMNB9d1ScVwuSwivmsMwVm",
  "key22": "3xsUP6g3ySqJAmqc3hwywfRWEaJ4gsKZv1pS2KuzzirqEaEoFPmyEMufueNYgAa9ieVYWqvnWmi88Zh5pABjfaiU",
  "key23": "64ezUbYTC8QKyfeZ8HsDggVYb5eBH8irqXyB5gNfBxw3JsvjKej2rG5ViNV7kLVoVibkYd43XEypw1jzujvz6pQ",
  "key24": "42btTmHCsm6ndtrP6eUP7chGQXuSPKvNajEFJR7UDXqxDozKLhGzYStrJdZ2QfbxsqvT4twZDEfkXLZr7HAcS3BA",
  "key25": "5RJraJjQZc9yE7hm84QC79fWZpFgDWxcHrhZQYCrsQsaun8CpEN3988oTjgsA79TMmVziWf8AzkScPW2Zn9WVU6i"
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
