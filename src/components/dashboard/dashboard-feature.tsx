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
    "2wgPXHAJL9n4Rw3kLgR4vyxvoXjg4ykCtqZwmUbnmBYbhqGdERDpfYbbD6Fz7aXADWd928G8o3Qfm6q9eQM23ib6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDCzUDZV7dh9gNQ7yhVjEZB9ULhEunV9WQaTasR14Ay8cfhNwc2uBwjsobmqytU3wbXsYrPWUTrge72AN8eSGWc",
  "key1": "36zTXWPZCmpACvExY3WcoyyJxSaNkfHipJgXDxENRUj6fEYSoLyLcHhR3LSCnUcqTEtyXNbnWMTKWPCUA9bQk9SS",
  "key2": "3eyM8RVWXz7uzr4uyFdsCQ5ZJpr9ukw62XAF8mLuWDFUHWM3uyy3u9iZ7cZWZgrZaCG1M8wKDwihyBk7ox7Ri1ym",
  "key3": "4uJpNx5UdHrD3MacKe5JHfTj6H2H1qSLBn2aQRvLRfv6WTtFsfyLyir7tHd2euK7J3qJZZiuNhRerZzvExwgaTWf",
  "key4": "5NXzhCYVrtaRRNXsS1HBZMUMB1Ddqi8qvccY3sgnKa6ojsKg1WeEagGYQZBvz94gCzJoAeiJBqfJ4Wt2rndh9Vf3",
  "key5": "3mQ3oUmqY7AgrfRG6jKwhmY7x5JumWAiZ8qpknE8vKdwVnzUjQtfWkcZr2Jrtiv36TtMk1ReRyTFnwFs7LLY8C6D",
  "key6": "5ewufyHuH6EeDA13NU85zP5uhdKxMcoY6XhNtKQTyKijmBR2AhuJPVw3eSCD7trwf1bPXwCewNcL57Y7PCxKuC18",
  "key7": "4PUWbWrjDqucF7BGjDxEBcHZHKHfwt6KRuk34bsSbjBDCZYmtrupJk6DZSLcGDWnST7786pV9oD4baC5nkVKbVEb",
  "key8": "2cxG8HzTJS9G5vdMbgiAG8BVUGjRDYbtk8GTTPyCTXnDg7FtzJBYV2gEs4kkpWKsMTyQmZWYacG5MMJSzoagZrv1",
  "key9": "4V4hr8xXgmHUZZ4T5aWSo4ambyxkwYiTeiw1YbcJ5eFX8HNDFNUvbyjLUxpmEP6vNX86X7y9R4RouCoiEReamiQm",
  "key10": "duL1m4oSpUJtuG4citMUY8Y13qaLYF5PnGeGyW5E3GkCbn5qX5kDeUWK2KDTGaC9v29983ZhFyY72qZjLFfhKkg",
  "key11": "5eRtsiAtG9EHKSPZFvpdU464LvzhGPrj7TTJDAuC4P195LEc4b7uVh1bduYpr4xHGp9X84YNKLAhHKTfK5bBMoEY",
  "key12": "2eXHgH2BrJHDKyHj4C8qbfv6w2PcaXEDtnVDWQZdV8kiK6CjW5ougfAXM9YkRh5yDe3e1ghLixTWVkHBPo2Gip7M",
  "key13": "5WqXcodt1tCBV3R58r4PCAKNgwTpQXFtcMx9hKAWymKzd9tDc3gYs76hr76qwM3Gq1WTdXLJQq9q7WuH8qKNW4QF",
  "key14": "2s4fy7qPc7c2uCrhXmEtFyMC3RnRLNQzjcvt85VgqtqSCdfDJQpQDn8bfYp3PbFS1xvrzJdkPezSq2N2cDYPiL7c",
  "key15": "5m4ijiMxoaz1eboqnHLhDCEr191kuEogWc2jMbvEPDnkZ1HqsM9bq9BTfGYZScTJCAd8SAKEh2rA25FarVHKjM2L",
  "key16": "3sCrb5V6k1Bdx4JahEFM3xfFXZAwre46A8LAhhYWR6re6Utty5XBGAGbVsodyNKTiSEzubeG21BvRoLbZxn8HHaL",
  "key17": "2Y9iBqUdnF6dsczVLuRxWp7qt2NK6X7uTXrdZcfp2qRrC7TpJN7a2Rkjqm4RobVSYHLGRVhWjm2uo3c8zpAf8idn",
  "key18": "DqxQQC79uEFRrUeZDosdcTHWExHsXR6C5MTN8rR8DjFYdWhxBQYA8HhZXUQLG3Xi23jDQtJYmA5k2iAnzXh6ZVG",
  "key19": "3Wf2hB844o9Ese2zNrv4JRNq8kokdVTeBoodWaHzuHcbzve2xwATZrYMng2SyHk9Aw3tPEE3bbXaSChLkbLJm4Q9",
  "key20": "38rn8dAuSrvuruMSSAcT6iDfVSu1Nwm6P7Kf7VZXnDZALdju9UYVBjq8DJ2HECm1Vz2pYtWQ1f4j75y8VdgxYSjf",
  "key21": "64gS5cGuRSp2mWqj5aDcBfUM5uf6KHkLmVNHNyrX12fNdSoMv1gWFwRsk88cZWVFKhkC2NvWmybZnaqGvQLrVZpj",
  "key22": "32rYVhqBJ3rTynwCAAf3MSiNtCzHiFdBS3TcHvfCyxtL7kDJfHWWhkpcBsnjJuaReB7BmxetJ4oTVyqC8X32Bgf9",
  "key23": "5DVNq3jgCX3XcoYfMRpd7Ue12Dtk6bwpRoqsA8oJ9nioz8JYifn88CReJd2HL5ddSRWDr5hESiqcjhr3CBJhgjq3",
  "key24": "4RfcjYyEKjJC4C2MBxceuFL2V52cQVSBFJ1bG7fZcrwK6d2K4BW7r8BgUKfafykJtob2eX9wdDYfe7Dwmrhqh8Fs",
  "key25": "2i5MhRNvSui9XGJmLEqehDjFDb31eBYNCZwesHnMAaoAkdr4ZZHppHLeqAmJAGpZmMkWimmQ9xnfbFD1rZhHneJ2",
  "key26": "41TUmfzH1XVwYmz5n59ibPZXJumTqWt2qRT1gwLjkJPiLC1JXmNgzvBjvUrV4zqktecv8oLaxZqN1FrqNiwa7qen",
  "key27": "3CXHotAKya1XMRn5HdFV1CHwku9T5LUwxHSpPDzzNuFUCfSxNTCV3EnwdadPurbMpaoeRgF4ksjURWjG6sH7YCws",
  "key28": "2zjUth7dhSe797RYZfdfU6qoe2mUfnLRFBSsu5hSgqMTLeoDtkPKtXX2mAmsDPLVNHxnmtnB8uAxFhCFHLHjtaPi",
  "key29": "5xZoSrqRpqExJC8KjevnWHZeQ3jYgNyrFfGYXNTgcmr36FdcJyfVLdVLh5BxaSaHtB1udciG19uq7xYnnb8tkBRX",
  "key30": "5mmDzbWLaDgEqELpwPmnErx9oYPzoikFj4uYdgUKWAnpqp8i3MyE3nqxR54ayaeR5T4JXNfedJXSCZjJBTASKpUx",
  "key31": "BxdAkYHu8Y3MVTNx2mNu66BqzszwZuZWkgqtE7UhYfVksgVbE5DaYXNPJ1jZXQ9w1yG5w96R8bLuyPG3uXSnwL8",
  "key32": "3fwA5amGquVS71Tczjjt9GP3PSXKEyTWsdkXbbPqKde6aR453G1F6ox2BjJLdp4xE6LSQ3o1jBVqoGNqcPvJysKz",
  "key33": "mG4SuhfrX1kWTxDKJYFc3VSCfGaFjnEBvJwMiNPokkutuk5GiF16k9obQsJ6skmRULGM4AgiVG2XNLGMsLPszDf",
  "key34": "rLgMwbs2SyHJkCAoy3tbzFpot7nZSRKtrXYdXUPGbQyPRgSG7BdQxkefMD9fj3QFQM3Zn4s4wPLTjsM2nbrhgG1",
  "key35": "3X5XHt9vSYqdeJYD1rACwkpy1KWBhbkv8gUUdHnjMhsBCjJURyN3vcRjwsxJPraxkGjDSFf4hRFJbw73FAez3Aex",
  "key36": "4hTe3vRgiYo3oCs3ayXiYN4HC69ZGbuy3wYLkCA4fDzxWBmX2J7byMdV5VAoskXoxyrsSVospXT7S1VRBjSeesoi",
  "key37": "QvVGkj5p8Zy9NiBf8A7n8DVbrrLJ1vPzCMDruNuTnEbw5HtobvXkLTGPRqgd4VPwfWfLBrTHvja441EkXWD1Gvg",
  "key38": "2ZtR8yMzgVDzDSWcSXp3a29xE1sWSqczYzzYurGDdLhQZjMYzW9GKJV45KyMRLC5sGnbXoiSRmhfr7gMEdXdp7d1",
  "key39": "5hS8hEgV7Bm5dGkeETVbcH1BPZzsCDvTuXXLRDwJMdNrCsscDZnyti6RNJUi2YbMpBGSNWDyieZbNxEn9yDJGm93",
  "key40": "HcYWftzTs47sQwDzTSE6mvMNyerq9yPKZSnuLKfq7rjfxfM8LfnD89wjhAfbrzk9tmS5TA2kM1btjRWFNdqVXve",
  "key41": "G91osbJqtsRr5VBNUXcVh2unTjgY2jAjbiBT6RWSUaHX5uFbByEvAdywcVJg4zCMLTDFHoMDjeq47wkNAHTZkh1",
  "key42": "5yC54Gou6nCZZ1wfbDBjkNRrmYAiYPm8qYRZoodN3zMmnjNeA7eYngzCR5Qi9TWrczhAgUh7mpExf5Eh5xNNGUxf",
  "key43": "5nabAKVLk3G493Ee4diD7XtQGc6wvSDpDRiNfGcg8dA9QkLnpMgxNqT3DScN5KgUiHhVeZpvFStE53cz6Z31RTTY",
  "key44": "4u9ufuS6pY7AQ5UjrQ3jYUPb8AXjpchPJa7MzAqXJjAoDJEok4Du7KNrwkPAvKR98Mue1S8yx41zSkUEYhuXFKdU",
  "key45": "ZBNBLtFQZuJTo29CeiEoTXc6Xop1rK1RwsGAdGWLXxVK6h2N1ijUKMyFL6YUeqTHKxjDCyXqAm1yZNZjvawpkiZ",
  "key46": "dDCwjHA1Xw71SW57M2J5Ytv2MwuokAsP2VhziCJq6wgKFqA3ritqTongKdXzr136LiRQaQou7jtqZ5tNopXWHjK",
  "key47": "b4Z1e9y49M3hZMVkEV3dJ5GGwUYuXLov6NTY3mWJbUUFVT8BFCSYFR75DcSrfKu1suHkrYeHmtMSoQzLuyVkJtu",
  "key48": "UzABbMHBHzuwKhWnN4LX3PRJyJRtNCqkNDX4VEsgi6TyeVHogRDmxKZkbGY6gy4vHee8ZJLWGS4ojUwSRVXEEpv",
  "key49": "31BJvR7cn4m1CCsarq6e6TXhAfsoKmFe4WgPH7kN1BczpgAMMkg3MsJJDLp4RVWRzN32hpxuEL2VufQCb4gj49n7"
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
