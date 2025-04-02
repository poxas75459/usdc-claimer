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
    "4Kc7PrEkVbHABXykSDxUp9MWXAt8dMt7w9ttgpRHBBLxuK4MyH9aUcS7DrAXJEP8Xb3ztutga16wqq2rUUCGvLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzNtURKYKgJHTLtVxAPyMS6StLyPAKB3UKKAgtc7qarV2ADNUoYw8jM1R46oeuLsTQgicYYtbB49LGiCw22zXt5",
  "key1": "3BL5TghfAHu9fMwfjaJ2pAjPpoT7BcjuWMHZbQEnFDW2e6f9cCUAxvKAMrfhSW3Y4kTx7nthDQMNh1Y179caA56P",
  "key2": "49J2N6dKxmGccYFbadvXi54YcmSU2VUxoJKbTtvDjs6YBJnSuShzMeNkQyGhSvnFTZnjkduenDtRkWM1DbyB61Gh",
  "key3": "42Mw8oKMn7qjsxwsCPMY42Cx4isc5dSxeckNF82uK1jkCKo72hSixYnSS5tvAMRqZNGL9kKdrW819dHxqQLRdo9o",
  "key4": "3bPdgmb9gkjhM9fjiw6b8ntU367t49yFWEB3BrwjoZe4aFZQNQAV9F9cBq4CM8teRq4mzBggdACjHfFkurRdLpiA",
  "key5": "2NYu4WLmjwcv8H8wigywrBcZ3XXDpovWJ3imt6tKFStRcJrmi5necq1LzqjPWa63sRAUQukBWagSHC67xA8o2KHH",
  "key6": "2qARu89KhrNCEmKnNApQJiK8FHbebqPXmNuLfiEpJ8zHQSSue1AaUPDjEMkph1yjfL6FHjL9EsVP76wBQNnEaRg4",
  "key7": "4VTLdaLZqpKuksyypUC6cSU4YcVWh5mXzD3hUo1DMoXCo9syp52tiotEFB52BS7hkSVpCkcuq1Zd2CiDocLdzk2e",
  "key8": "4Lr5BkuA6JLwFr1k6GLHHW367J1XeCat1rikSSXBWsjTQekXysPgUx2MhbWQzpQruUcEPKA16KB2CUCVZ9San8kF",
  "key9": "33mi2zLkD8MmWfuj6wr6Jg4xV7vMAuXdBek87dsJWfSaYA2sQyJC123msjNWChu183kUvcEfhefod5iBNAs9K6Ut",
  "key10": "LMAgxuSWJV7MsUp4S1AE4G28qS7vJ5REtyRx9b3xkmrpeudLC7E6MciRefsUd5dpY6kNsCBtpWtczazRbGSVZqc",
  "key11": "5hRmLhC2HVK3KoXTTNZXogMCieXqQ8Xr2QJtkf2i83T9G5XZdt4FfeXbuhtaE8YVANzkY6R9Stvyw1di8uLJ5z4P",
  "key12": "4RbgbgfH8uq61DGpWjZSrefzVgb99DVpXPMQ8mS5DZG5rcKJqYQgjQsm7vJ9qy9KcVk56Dk4ZFy9MDG8HYoKZFnE",
  "key13": "5VNXLUkCGPfctybLdoxg9kYagMzK5jYCErs3tNKhW83jfY6wKmbt6Dv8jNEvtzrssPpuzhCceCyuVHKUWRjVyFVF",
  "key14": "Y8QE96bBAWuDaKMuHnG4b6LhHNHt8XzMz7PW3EpqUcmZm3mDDNXe5PewFsoNqzVRMcxHn8ocS7UrFD3bVM8HVmg",
  "key15": "ZvGbeu1eBh2Dn1aUC8JiUBS4sMQxWvvmsznkNTJnY5ggcngdf6P9CfvEcnWcQSn8uchKR8z4XDQYdY2gTBQcy2z",
  "key16": "2rwkge5kvT4x9sE39XKPTJt76qYraSojUCSZNNbdxUFB7sotdQJjBteK16sE3jD2h8CsmgbZNZB589uQ4or1psTd",
  "key17": "3DMRov9o6J4gv4PYv6qoh84QKidpFoo5njXsA2qow4id4Gh3CS3g11FLebkyo9ctczGE86zXNzQTdt5fZsax2eVg",
  "key18": "2DSkiUuaF6GVdwrPDjZ1BkAGbxNpTLDC7ESHiPKtSwpSE9XazQhyyFTzC3NEm6y6HtVEjYJma1A3x24stm9Hcp6w",
  "key19": "3DJaHtjKamrL8cVc8tgzuJ3iXkc5mozsfSMGyygop526cZ7chqTB77PrjKHcuwaMUxQJaBeGEmPr7YU71RYM9ot8",
  "key20": "i1H8HKYbp9mKc5x2xqh4VJSNSiyZCyv61sN88nZYAvXdYZLBJMoqSUrAHKgQXvwy5QNrPmqezF3GbB2TxLMPAH6",
  "key21": "4gsM7EDNXqTV4LTyUmBkKewhabjLwn3bA2FRgUuMrkN5JNKF3HCAgq1owKBGnh2JDTZo79LCvPbH3aqimT3qBTGC",
  "key22": "4v9uFnpkZevrBaUqAXYacXpq5pg3ee8cE4Pe1aUZ1jh4ATS1ra97M6A7SBdMJmc1kKDe6Td6Qp6uEdV1WU2UuszQ",
  "key23": "2AkLtnCadadX4KFzx3jwYqHQFrUM4KqFHHeKiDxTMjPEuu7jk8Kph5NkNABEk7ZafnnkM3bZH5z2J7hkfEnNsRAU",
  "key24": "4KK7J3TnLFeUBUyiADZUmcF8LLdMX7vsNXYJmJMA8nMAaGpPjLaezcW6DKjNVjCT7fLMdBGKYCSjc7jPVo9VBEAe",
  "key25": "52TP4iMCE4r6RBmEc2pr1nSxiev71mhYSnjUGHYVe2LZM2XBCwibLxVQvVbYwEGFnYY5RmYihfrbMjxdhXPnJ52b",
  "key26": "5tjxDazCmoAtdfomsB1iin1EDFeWySWLBVspL6T1VBFn7BqQGRjaZ2nLeBkAyiNbuc5RYuFkcNRNDSeQsvpeVGNC",
  "key27": "4QhQuKMxqWUWf4LBwvKr67CmVpiKty6sR32gAKL3YkrLXuxSkLPBFgnvNHqTLSdmJQ2p8qb4GmVCYS6UBrjj2cLQ",
  "key28": "5L1MiCVXWADYBpCLDzQ4uHDZ7osVsKcaJuwgTZZJdbweWzuSHdcDh9keejPcXiPY7BLjN4ZwWjXDBktAz5jxYLW6",
  "key29": "G6QVrQQ8iQvGeU35kbti8J11WHoAErmuh3rCjiW76zA31Q42YgiBWqChwdNiSe85bgQcKnGPv3cZhP3K8eSxU7D",
  "key30": "2t8kFHhoZihvf2VX9c9geQw8m5UUNTtkmFkpL3uRbgNLK3PdkNQzXKzsRSecU6ah4eFbPqDmZaFD2AcgoESE8P6G",
  "key31": "4DnhK1KGMKrW8KzKtK8DBMyYH1MbCD27TAYQ9eN6Kja1iGjQRtv7o7UWZtbPPdX3LN5FGndVejN6LDsexSxT1g1j",
  "key32": "2y4mXYDyBqnrXjsJs6PTdArmtyfnEuxafuSrVbU2bSJTKYNp43pquipk5EQknp9uFxtXtLaaxgq7i1mCtJVkWmS7",
  "key33": "5tYP1LQMDaSXY3ReGGLFSEvPcdwUfipNSkeGytTiCPwLerY4Bhm5qbNH2hW8B8TJtN8oDj77cTj36n2ccSJd8W1j",
  "key34": "55CgSevEEnEtGzH5b1Pt6qMZhL1cueoswfh4V34u7jo774f5rQXXFrA9S3D8tMWMVJLwSfsmYFqPwgHCcKchZGd3",
  "key35": "2H3TbJKqTtC9PqihMSJNo9XZNU4oTWwv1GeXDDDDXiQcLqSt9TMfK8YquPipu4tmUjuzcpCfKT23gFkBhkxTshus",
  "key36": "3E3sXG9agjCG7E1BR5wm5Nug2R7NX6CUMxZ3sJ12U6MsZPskC119r3TkuWt1mR8UvSfjcdsoKb4xT82BejstfEJh",
  "key37": "5frNQVeYEFZWxnZ9Qde6DvnmxXxBZrR8PNyxQUS11KKjY1jsamPnyqWkXvQySZRXj7ebsQbo9TS66cwFYyuLfv8H"
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
