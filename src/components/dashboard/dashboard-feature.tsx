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
    "4RkFCWb8B7e7SB1BGw9QpeWRALPcMyfPb4H1V8z8q74CNPyaeCzXda7b4z7WEnEmVAmp5y4uLU6GaCmN4ZtCtpcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8WKRrhLnGe83Bfa6kLeYcueVph8JeqZfLhgsQbKMNgNxQprr9m9JknVRDnZU5R43ESSYskf9d5hXFrNfgsdQLh",
  "key1": "4q4BJEh1E3GPH2mSd3r56FsQjEyBMm3KU18Q4o8vtZzen5UQ3yAVNsy476ErBPdEMTX9ozV8r98XBCo1PjHwUstZ",
  "key2": "3hWsJFb6UCymDMTSo4Wn8CHATDS5XscsxLb4wU6ZdoMtiPmhXFHRJJzVjR17MsQMvek1p5SPW94wCZgq6sJhWp32",
  "key3": "3wbAWNW1iFYsqQN3Bys9CJuqmXQpaeYoncKdCt4F41FQ2NoabPWPKQUke3DL9K7Cbt7Ya2sa6cQkrFb677BAXTy",
  "key4": "2f88L7nxyUsdgxLHdy51EoUoSbzfhLWduuerucHFUAgDuTiGF1HfKDoiTuciv3S7ATWsD28NxiGJHFAEXN2CXh6i",
  "key5": "Drn1HCGXMFxAsrFhAwBjTsRzjEwR2U7soPVqgLwBuRhfNwTkgd5DcWSmyZ19wQt82msV5WxVCJR6EjUMFrDNbnJ",
  "key6": "DEozf5FN3N87pWUNRK881XJYtDvhUn6TTyM582moboSYVxK6Fa4XiwPGQebsLxtPyVR76VG6cv9fJaDdMmQ4qnx",
  "key7": "hiyVRkB6VNjjG5B1M4svxVEJZ4DTCnUScgvjaEBa1rBzvMbZ5tTh9beKmKzFWM5mq9C6p6gMKs5ebL1y7oN8BCi",
  "key8": "3x2zRqAJdCCK8fqzbihLwuzotVTdTRDNUBNxZfuuECozvYJTVqDUSneqGDHv7Yrn1Qq7MruFBYLHMCxTBDHP7L4L",
  "key9": "3CXfHUhj2u37ZSuPT5XLubKhDEzMVre5rS5XQ7YMv8gSuDZxYK3ZFD3PCgG9AsGkHdwGr8inmN1LK3VHmRT1q34z",
  "key10": "4AtfURh2i9curM2avd4nsGTQis1Yhm99amH8XJD8aaaJHN4yWJMWb3a47Zgq9pQqyNCJxEGfeKLDwRUNXen1sRNc",
  "key11": "4VxQRsmykP4bVmcYzkJ4eBVk8gxC2Ge8nQdJvp2VFNZqn1QwyPbMUWFWTmLNaxEQzFJLek777Zr5eez7A5mgiRMR",
  "key12": "432SRjsbCZttnUEjJLp3dG5CCyQt2K9tvZjv7aF9c9VADuu8Ldxuni6DLXQzADF4zET4VmdCF9uPafFtosp4F8EB",
  "key13": "hVUnT4i2cEwUUvt4JSMGLJBGyNUo3NefJNho8RdSPeWK8c1Eshkw37e3rNyfHNkHtQXGpXRxYqtQ3EdvNeepQj3",
  "key14": "2aLCma32yBozbtVB6xZiNvtpGKhASLJUcrK1kBtuhQiLRfuuzWbacbbJLytjjBvEPebRvHoeYWmyfKt5XqRMDoZN",
  "key15": "xH2Y2QckRiWKwEw72Q4YxmuJa4tPV3w2bEty6PpB8qCkVB1u8CuyEp3Q22qtVLsnLXbR2EYAg4Y3MRqc1VUKbrE",
  "key16": "3c9aqzSRPx2eNPSTTKD1AptaK8eTD3JJXtDpL4diDbXzd5MqqN57eUAAmsdg9PDecgE4K368jGJg7nZkjDKZvr92",
  "key17": "3riSePQwFgZDsUFfktTxpttkKkTFWUTZWW1JVL61nw5GNqqzkmtwRKQYtZk49YesPKTxz8o59dhpcyN5VEJgzhKW",
  "key18": "4HZHZmvsZ4wph2c3Cv6FXNtCM2tueJa5kwCAAv19FEqvRUyg5HpVcP3E9BxoSsogYhMbVmw7gg3u5XkZdSULWbJp",
  "key19": "4PUqmynqWhrdZWdE5VnC8MXGThZWAopG3mZ4N4MyniZYdssgeTB55z4fvXd3cFuoRHZFYHXYgTHTdrxT5wXVveiB",
  "key20": "3jqU6T69rw5vuitYb4wz6o7KFYRyTL7AV6jfR65ezgQwSsbno6ejEiQVdHCRnSreZbuqvU59obw5mPD6ADQFtAk2",
  "key21": "3WHHrrCfAaNLKoVBDwA1PoQWLyEadVJJ61d9SUn76YT6PurcytfW1J3xyF66KTcGU16s94rRFCkkqADoaV24q75m",
  "key22": "54wesC2ohZ14ck6iCTRYnwkV9LPknQPw8wRANbPd9MHRdh3jYvv2m6E451quqMxtjyqJgrAMBUbTh4npWYBmuman",
  "key23": "2H9JBUuvHXNDeAdvCPbM2ptPpMX7ZRreL4pFE3gagkdeKdWcH7RohTZTZMLsmwYiLJFGuCMGmLWGwbKBAASeEfif",
  "key24": "4TqR9Auc7CnF1qsubEwVqk83ETez79UTzWqGCjfEsbXhsK78NKTZWbJkbCowoU6p6iDrqRGRo2P7ADWQpUAaJZZj",
  "key25": "4s7cpMpgiSaaXUZVZKMcs648TPGvG992euTB2PD5M8usZvUXv1b8xz7VUAeqEiw8Lnq7zcBWS2EGnyaACMDTV7C2",
  "key26": "dVBvo5FYgPcLXLURnDKapfkTqY3xYvshgXGWK1UMownia1yX1kgL72asQ7urJNJHXhe1SRMWTTjR1HLrSBZFuvB",
  "key27": "2vuLLLfCKD5DnPFrw2b9rtkt1m27iqS6Bd2Gpn1oFtQHomQDSZkkRs9nfB5Kecp3oBdkr8JtjUcKE56mL2TJcMyT",
  "key28": "51BB726UCkFkaHSomwXmpUyJb1M2REgaMjBybbm6TtyLcFP4KpHAGgthqXrQKzSKSs7sNNmysVuYjKV1UbdewNgw",
  "key29": "3tYscJuy8ypSCXcbHacCysgkgD2AWMbWJJQVrDwAxvzvmvpnUqzxwcQAjmSpPE12YGAa2zjMJr4NaQZNHmvms4kJ",
  "key30": "5B7AU4tH9eHD1odYQMH2ZKqeviNYHpjBDUvYPt5S8dM65rYrrayJNFHPurCKorRZhj7xJrV6eLNu4dLWVM7yr3Xg",
  "key31": "5A62sfk2D6ngH8hxVRWgjXdnzZF2iFUbECDEMKWjU7us1XniiRTHoqkM79CGQQFDt23jxZxKYMW1xMTb65sh9NF",
  "key32": "45SPUuJ3e1wSXoHZJaLQaty35SNhTxC6LLYPxmJc7gyZ9pYgPTwZf4bugMHJ3GH1egUwRvC1V39ZgPQQrXTNdJw3",
  "key33": "2vL1KDvCGMaehaFawj8B6mtG1chcLtDEAXbgj2buREFGidHShnu6JFrE2eb5oA1RyA6ahgyhyS7eXhZrxBTKQvrH",
  "key34": "2e93FYBzaHXEdbuHAJ4p8bH8VuFVC4BCDF4BhXWoAePTwTnehC3yDWotZBQ1BD3x3jJRjZPyiwCreCP3HzrZTe4r",
  "key35": "hg9ityR956QgSRfyWVciXwc3zLrzvefR3gdoMejQcNCRbYCqUxm4VqvuxSDfpCpbGAChS5tbx9Yanp4StC9d7tH",
  "key36": "kWTS7yxunB1g93naBMsHgdGgJLBKiiMsGSvjK9ArBpR1LFi1diSLkm7BQQDc6qTX6RxeyBbiRUcpM76MeEKfT4K",
  "key37": "431Kjiv8uVnnM3xKvsRyAqfJt1gLEeBFun33NEfadrcLWg78BTmP3iNYaRdyY1JTVjyoo6AeRJwDKSXxtyFzzjfN",
  "key38": "4smCZcG6WENtTBcrPtUdceT71WqRLCf82HrEVpmRUaGekntj3yJAWJeLbZEvp8uPjzeoEQceE5sR3QuzqEqo6YDw",
  "key39": "4eJBf4oVUKPwtBLSTdFgpL23w33gTins68mHYiiCWZCn7AswkeuHTjrptNUDx8KGCXgJC8tnrwP5BTg6mwyEjoxt",
  "key40": "4sQ24fNDPfU1hwth9Foqwep21GLvbZVHzCdw5Uq5h5Ym8sb5kLmbPJp2kz7Qa4NEUEinWDMLscA3es5Yqfp13G5U",
  "key41": "4T9T5TcrHqrR7kxPkUFnMrk8ju61sxjBJh2UW9GbS3fjtj5fMHN79YBJ1v2a43s8kYsWS7Gxw1rMJirjTeDzhRer",
  "key42": "4PaAobwK6dt18FDQarrBFaCKLUiyvKU49RnQGpPcBEWPiPCS4AgnHYwv77K8jqeRhCtgYfaEyFctrqa5WpgRAMuD",
  "key43": "E5JxdeSAXvf1c85hPpwvzfNHbS7b6NdL97B2fwfVoHu9mGYz5ap6CCAomZRzXVQRSAFQGgg2ogAurxwV1fLYifa",
  "key44": "3xVZgGJdGve5VWUy7zbDqNcfyt7BDWnvzRyPV6jsYqwnWYKfBFPew7qxQ56jYourDbuCbkgLRRLWrFsH1DQKy9HD",
  "key45": "ZqoqZ64ZCCbTWojqcSuVk6YzbHy86pkARPYuyhFKwwK5jBbv9EqjifNLt9vX6idxyxzR9gUyC6dhwtzJb3PjpxD",
  "key46": "4tPb5CJHQnzhqbYVNNjgvhLVbUwMXAxZEoJiAwg4JXc4bymaA5yQRaWGYKBnbenYNfALGonqfDFPLVf8xUiovhUJ",
  "key47": "3UVzAo1bYoNWD3Vt3FiQkWg1gh7mxTVeW1QFwTShzMqRxqTHFdXoxUaWpBV5arnFhDJSL8dRzP9GES5jDUiiNndz",
  "key48": "28oxcf1WywSgUMcX2s9g1Zz2GTuAfRzgqGEYABRKrqg6vmq4LbTxEyhRiQJHo8btXmnFgsHpuRdX36jXd92Ujk3a",
  "key49": "6ds4jTbgj23PrK81TG7odUhjn7G3CbBBSVwfWK5ks8ygtdromvr4GkB2bPErGNC6vU8rnNYVAZSQNGjp5drG7My"
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
