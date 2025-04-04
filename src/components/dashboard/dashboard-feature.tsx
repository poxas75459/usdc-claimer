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
    "5ucuRedg28nNYQMgc4RK775fmGZLj6XcJLpktnjAwQ17tNHAbNuw9TMsJHGBUf2XRAeF8xz4YpnfyU6WcNRgTj4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ssrwCzfk2XfXcCCfNqfy3Ro33FsBNFRujmLYSE3sr1GLDmhw92eJ8v66Lx4fZ8DThqyvCmVZ4kMPoF8xTwKW6mv",
  "key1": "35iCBci9UTr8wQEAZei21Rnp7yN1zauh5NzdLQ9hp9kaRhL7CkYneRcZtNjvAMynGuXuCpJdr2SbuR33Xamh79sB",
  "key2": "44RVx4gBBDzePrDpjTpNTHkzW7ijKVBQr7Ld6Bo5wCSXogqTycTVP2Tdmf9xSncXK7QZKd8KMKfskyyqf5bfTWRi",
  "key3": "5Dty6ARPKMMGrfww3wGCMjacv3mKsEvadBMRV5DHE2hKViWBNfH6jRY4PaL6uGVPmmda51WFA2smm9jeKt1Seu6o",
  "key4": "57RmhQvvyN5gidxWkVTbuyi7eDKzprs2zLSGWERaQpWDjLJtknKJespZQYYjWo39HntVm83vCrdKHvvDQSGcGJn5",
  "key5": "5hMY29P7r7D8wmBTUQm3rvwrv55cybFVpXHXu4gbh89DBhRrBVaZhbQYkbBASN47212awVfJR1W3GH3ovUv2PjHJ",
  "key6": "4szv26CUqNo5Cfo6Zaxftkxu7zCZBLk5Hq9r42HGeNcZw4MgLaRD89qrk6SaqfkfeKGoCr2CG95jSVBHfrRVL4sE",
  "key7": "312VmvpS7Tt9Wmh4ewKVNfp2Xbg4DKxG2tkriDjjLFpBSPuqnorfB9XuzjZf98fxe9TAKutzYnrQ31t88gxneq9m",
  "key8": "5Cc9AfFZ51sREXJB4JQfdWxjFPsk9F7p7nQJi6GoPtim5wB89HM9Etv74QDo1oKTP4e2Vu7bCytjamscNH6FLkDS",
  "key9": "5KZZfuWXy9eiAUbLa5MLNKdXXYJY8YCtiAXbedvkT9gzTLyqHdaRXzJmYv3CotGqLqMeDrBZWXiNQxq8oEKD16mS",
  "key10": "5shpD18didEZUpniEqysBmw4NjCpqvePvEyJwttKyuMv3KRx8mQenp1dsFk7kEPG5MJqq9YoFYrPAY4iiJVRsNEo",
  "key11": "5NN1M1Nk7qpjs92Td9EbzHK1fqBh1AXsyjdyCb81NfC5HSUoNRAasiTNGrvYZvM9Zc2mqn2HNxCXXwxrprcBtYP2",
  "key12": "5nQquPDcKxZdDXmmhHtt1rBgy8eQcacQ7N9go6dJZ2PbHDCENRvuDukogG5etDeLNABSa4tWHLRKSayetCjh1Ysj",
  "key13": "4N8cQRa633uzXstCd6CSRwVKgCpXZravWnFxKrBzeD2YJZ24dojeMtBH5H26Sn8CQvaMViKQVbFKwJUp1VaKpCn",
  "key14": "66FoC32ik9bPtaa9My5MSM6DxBpm1qmSTAZadi9Jar2fT2cRG4q5eg1GdaD38EuXXDDBa6DZ7yWkmqUEzb1NZ3TJ",
  "key15": "67PoZAwnwzcihJNYLTA8s7jxrKkHPHLk8XnfmDbEpvJjXQFXZLNYjA284VKbQ8z1dZzSH92p2N4PbC18VS52PKxP",
  "key16": "4w2PCbpzvT8TXFAaBrvRRZX6cC4sGfTerpVh2moC1ZER3A9TL9UrHG2RtgTCF4EC9s5UbEma8chUrFsD9HH3zwta",
  "key17": "5jaevD3WiZnLRn8XGy9GadP8EZ4Y1H9n5k5TYmgRNtFxVcSXVYmCBayiEfTykys1ioL3WnzxRBvDEvB5SETzpAxg",
  "key18": "5DCXuK8qkB7n5LtFFfUYx4hqZN8du9CbV8qid2MSiUT1w3SiVq9WfugyXBw9uUNRSFCUzjQrLDVuSEFx7bNGbHhV",
  "key19": "2Yq6xsK5mvzUhRyfkMyLqGMRVqwEZeMXRkwmtvmRtEYs1Yb224Y63nwptpnBdCzndkiaLF5evNpHSx18DGMuqVs1",
  "key20": "2sZMPjXyXMphNXWhvnZkDe3TyDHTxDaGzQfdT4c61PdfLkz14gLZZSJ66KMjuLjZZr4KFKUyBCVtRzTXYWe2LDDQ",
  "key21": "4gM3Xqns44ndmPZg7rvWoQzYYcNkbas8TsyDGRXVqu2gou1fpe9PtuvNrZMAa7RCizTorJr5n5VRNpNxjEhErTAR",
  "key22": "2GqDpswuwnFc68ExGUVGYwYfE2TKqFLhpG6W67mpY7YedzekivMymc2QetXuwgSVQWhDK7hNErB3nWGzVrWiohc7",
  "key23": "2HcdxTayzGLNrELRNY16uebGVo2qQ1NEG3TtpnwRZHMZPM4uegMvBfgL4aHvrGp5RAsBZnFfUkrdLR9iv5xWJEHf",
  "key24": "pZr9ijP4qziu9GxgMWVv5zsWuN6KHiUFGX14HoVkvR3qyZnXVB8pBnMn6uHULoiVB4YVR36yVfTA5dGemd67gYv",
  "key25": "4iFUUo3xtUTBivufw2EGcGbpoqTM3mmXWqwQhNJXAjU6UcBdxKuZq8njiY1kNMbEVXfsX66M5mfFgG8iDcnbjntG"
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
