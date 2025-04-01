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
    "3AdsXnZY7drE1m6n3KA5tCQZu1ePGKEuAoPJNyJtgJBhKL3t2exRc9GRtqrRwo9RBrAatpcX1YXbDdw33dcSngYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QNDnSdVNLkotXXAZZBFjXC1FTNArWDirPcMTN6hFJcuEVBwThopNkQ3fxaXk2VFNgoDbSwpeYYWXWR1XDpBn1c",
  "key1": "3pkHgo8wFdfuQJJDntb9bdw2g8QdgYo1MzVLgQBTQpzzgxtTLDcnQrdknyTKoirczNVsm7EzxL555Y7rSevAwY5N",
  "key2": "5cdihnstGjc8Q5sWiAeF21u9UH8zv1W6RLyoZq1GmzAwfiHvv57EArS1cyKhQMW3TwjNYhPh2BbB2eeGFrbsbsj3",
  "key3": "5UEney6Kt92SPqPhaAUrZhVVzuXaAazAVeQAfqELb3yrX24QYN4pgUquoJMdcb64aT1hHYKPEh2h16B7AhKCSPRP",
  "key4": "5ymyWk9senL5YHmm2QTbmRVjxWC5MKeZYomWAaKz4qyaV8Mae1VCzuM6bkMf8Pe7293kFL5LTy1sJfgxsc9fVJkd",
  "key5": "3XcoQGKBe2yZFoJeLjh1ZFTQdHevoJPetVXu9D3xrj5i2vR8xALoSmkkf23XRzeBhgCdK6uLjgVZGn8L236VRTJa",
  "key6": "2iDFqXKnQXoFRNj52CKPSWP9NwFy12c8yvLtvUWHbsu6mt9yQv4eT9EtiQazE7Z5xvkdRJdMyWaNEozvaqNA18t5",
  "key7": "636HVWdMQrfQVpRKhtApXVUHbKtDFVM6EYDYwdv6ooUgtYBiCLUEMq2FvuPTyUoBaEmPzif94gZP2N3CyzwFUDKL",
  "key8": "2evcrrLTpoircL91NUwFx5rfK3osbi8hQRHLjZkgVDFRBGCQCNfREHXQA8HDwCwijZp8iKjH3djYPxi51oA2XesK",
  "key9": "2uGZhs8GSWwwrvDi1UnphJqCy27LMKDFb4W3dZ94rNBsTrkR1ZGHccz4TACPv8K9Vvs7NBCfKtkbaVRN8gV9gSMw",
  "key10": "2SU3MtBWSynMeUM5nptj6nH2Menfr3o1bRmeadeLbnMmt38HJ13VTHBj61ATtWQmv9QCWHx4sf49HzvDwGc5y3ZP",
  "key11": "2EFxJx1hrToQHwH4xCzYC8vEgy5ezQKx1fNR6PDQ5WjnZJ3V2r4PVv3Rmup4HDqThvUn2gxkwp9KaySADigDe6mq",
  "key12": "4GUcqEc2eKdCzXeHxSiri3qp4LZGnVRrcrtF5gxc7TjUTVMXjWRY3QzDTCS6Pbzp8vsaipg3vJjyYDZ9DcLSmQhx",
  "key13": "2M14VrDyHmCCDDUK9hwZCFPzG3Q5A5w2CNWjCzHRALWnRkmepfAXAMB44uiY1yujiNu1s3CbqKyYQcNSUQj4cJg3",
  "key14": "4JUwjeneUgA4QPrzNc31Hq4impsefLpUmC3fkT2d5drgGUdPsSgmKHaDzMkYt6oNKFiHokveuEFAaxREcSefttrA",
  "key15": "P97QjJBohS8P42JudatcvvVzhTpXidY65HrbaJfmUbRE99tNEyH35YPExQfbPypvABFhnH8QoJsxCHsxmURHCYB",
  "key16": "3wFqzGBPpRWL8KS4hEBfHJyzxSzzpMtNuqYS4szGDzZC1KXzrSta1B3m9cd78tnqhx6wSHzn6G2Wnu2H5bechymi",
  "key17": "4cnRgzRQRaxpFy4V3eZUMxYbQvWTJdK8dbCpEa3YAKDKEgmBMSoAsUhqdDAnCadNDEWoGy1Yx3Y1JMjDzgXp3vqe",
  "key18": "5uRsAsPT9eyDp2esSJzRkUE8ZQgywWrpzGwTQAEa9ihPxRHmUxKtEMkGee1cU9q8Sw7UMinZeuUavpTxtZ6hej5t",
  "key19": "3X9pHdR4LT7jDhEyQWubimE3oWqyoKr3tgDtcsRLyX5GphY4RXeYMWrMnusDiEse6LZEwdZAnCrJsfSoR9nWHRR3",
  "key20": "2uXHdsFPnszomZdN3PCAHAEJqyCNo9MSZuHgxHv2WoSh9Hi22P2gRLrtRLi7ce925jKpKjDGpwe3bRKAHM4KHzk3",
  "key21": "XS8E4BgR4bCPugf5jNDFrS35Zv7x5778RjCFHNKP2ivAXqfMWUYz6PBVUWERkN1zJbZkR91SToVuCFEB19LbevS",
  "key22": "22oPUakdJASM4s9vzF65M8fCcr2Zoc5zPQTpyT41bAPDGbTcpkWU3WLTG9YVqyUh3R9ezpPzMtVrJEKWXHpDXtSF",
  "key23": "o2Yx3bDADsZx4JaRfSJkVKbcuB5ibYH3AxGNiuwGCfU2m8rYHbcA6ScjqN4nbSGSJAukwYe41wNYwx9jrCqsWMM",
  "key24": "4UJr2QxT4bCSvivNpBZi6ZL5D5NNYs2eNkhddJKsRWtLnYTqBfTb3YHtLtUk69NBqZbAVhVZ2aKz9dS6dJMBadrc",
  "key25": "uUFhWMXaAZtTHoAnH3hZt7MXtXxpsgqKWqy9xdzmxNQV6wZJ3C27ZPevmjYzZWcWFwmM4wH6YjobDoAhKXfXWR8"
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
