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
    "2iEENFhWXSEFd94rW8sEJTa27kMZP427dXghN9KvGfp7bvS6USzxniMa4pHNjpTm2zwKS6b9HpxPv25pZfq8dRNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m54Yyf1WQczMx8mDHTDKXYipEAn6HCqcGEPj4K9LaMHp6sE3wMB2o7EsHXHHpgXaySqS6sNrW1RRLYdtcHkZ7aM",
  "key1": "25J25ZVkvsAYGB8dHKfm8pgBAGhiW3MUvWUqWHsQrUVBmRV2ahNRQJsgeBhfJz8RHCVRoekfQPEXbHQ77cgkJmyF",
  "key2": "WKoKriEdTkTsa7Y2nKH952w58MZoa8JPGXvYxGATi6QkRahtjD3HyV86S36ZHmq9JFtHcKAZnvoZgK938UoU7Ax",
  "key3": "2VQsz1ub7ScrD4YKMW1DtXD6Hy8f5JPZGT2PvUvbFBRaMNP7P8TgjpQJsVSW2ZXjv65ZgyrNHe1c3NBFU5BTyy6g",
  "key4": "3oGZ1aSZ7f2bqVrFk7ijpUijYyorWcyzJ6748a2Xauwb3t5sA5MiatLXUhKq9Dpm6SP8KhSxHdqpUhZnWS1zogWg",
  "key5": "Z2GmGtxmpwzgnJ4fSBExCcQjBrdshBDbipHdhJFGF781QhideP32iXH38XTCDnF81Rbw5pLgMHxketqKY99a9jh",
  "key6": "2WvVuALrwkMhZPUUjtm8wF5mRUiTZTokv8MSNGg8gt5gnyENrKWXxZoYbfuXGtzsY59jZvKNRHLTRtWegYHW1R64",
  "key7": "NwnNnDAQbYagtJkX49zEQdyzrdBNmH1Qrn38ZMWBGc2AXpN4e7gg9pwSsvAM8crm9J1Do1iDFavWgrHgiS9kHbr",
  "key8": "3T6UGw8YpFEeRn6tutSTNFTQXHcjjrid1RFKLwjBQxct8cNpLtZThF35tTzvXhKu1sohs1WBaVgJqqfb6KzZ4w15",
  "key9": "5A8qwjtQr1fMnsK16pY2w3cMijDvfekgNPHUYMhmDS5VXosGj6F7C8CN3zM52hEBv1DCdJhVV7nEPw2f2oQqSv5q",
  "key10": "69V9yjEZgASXKNjXkoQEPx4syhZVQaHYRCGNJcuw1wkoZFJw8GT8Gvw6xFn91Zm3Rk4SpBaUTxVmkhB6Qxs7vuR",
  "key11": "27MbnWjxEPrRXzB4V8ChLjjBv5cxitrGKPZhbMBSEUmL6UP7qEt4u43zDjL8hhedNmAAHzbqak1d8y78Xi927Nwe",
  "key12": "m861iftXxhVM4rSYgneTqDsE7QgKmpmZrFg6CcQEgqW41EAT3mwexG5fTUnMEgrBfmE6JZyTdqXbYUFoS4HyN4N",
  "key13": "2sAxBMa9rpKzmEqVwmv3wAXrTUTMnKfWTxUwKHsChdc6ap1wSHpVWiRzDfWnF9tKSQtu8dz88TJhrbz4njeubeTo",
  "key14": "SmPJNM5SUwCBi7HJfknYLPjeSkcjX2MGSe1bj2iMfvDgLT1HwjtuEfKMjcmRwAoKMxSsXC6DimgXGqvM7mQWvgp",
  "key15": "2TRdmD27TBDc8kH9tEqzRA6HWsyvf8PsXBnssJpd1nuYfpmUBVUdmcr7WoRtjucWee4duDzzB4m3ftRWf6AzXSv3",
  "key16": "mjFHR5Vdva4Xc6mMvWBtPbagzSmFKhwsvXkfAFpZdqKgAzcVvUZFC38Tp5j91gnU1gz3nMKCKSnELsV9MLMnx4R",
  "key17": "5Wa9a54haTQYXmqe2qWB5cfR1QGQqFmUCG2WNK9oummyXR2gMPDTrxFaM93JtFYcWzbpihmXzRrWjawrvH6LvsPE",
  "key18": "4tiwkzvbTyCs62ziHitrSBcKEZuSW17P1hQNqGi6BPiPM2ziK3wAFYxDF7MeuX2ZEyQvwWW6H2sYqxCERr7T166Q",
  "key19": "4dUcZ1ADfzumuyFurCvczHw1B3w6VKZ5JMGXyLVcyoAKcfcmqrFVhr3LbXh5qGFvcvfw5wpuuahQWEspND6fk6nY",
  "key20": "4YF39MB5ST9Cru6k2TZKmQJpeK4rPh3LvGoHsnJWLXja4HFDjtDjQEVAtCUtLCzefpsANw6KRFdScTQxrSboaX1E",
  "key21": "2nFEgEsbuhEvsw9ZBrbdcKiYVrvyteukTY1GwGt8QPqQbmHbD1oHSsZrehUL5KPRviiwJ6VkEA1DkvtvhsDKvJRS",
  "key22": "3UHUQUZGRKM1yLLtF72r1uNndsfSphRXiLi3LFpxCxP3G2NQJfcLKJ9hx4Ar6gcPYFpcHAZMbJZLgPvuhjimZAiB",
  "key23": "4GwAisDGmbpcTyf7CDDLzKaAcYEUYHVNnx8U5eGmVZ6ZkAuj6Wguyz1LA86T7zkTnQnRvYrbjRT3gTYp2TTvQbjN",
  "key24": "3TFXsBV4oYGfGtGL9AvRy7UoFhMYXhfjTUVMKoti2aW9kryBhtvvrh963khJG18nmSk7mgTnYRpHXLebSqRo4L6c",
  "key25": "4BWJKfkG6c8EtHVmdN2F3pyLARnKuezLxaCYesmfuALahHHAiEkspqQY8BjMnnevhG9RJknAQPH5jPgWdeJxeeHW",
  "key26": "4BeYtN9PhDzKCrjUQRm9Jhx3uUtf7YgiAq8q2BXn3yiFHY1UzwtYQ5jBDef4a7JgyM8w8DGXXPpXZbeXoZu7oUxP",
  "key27": "4S3xyJYVehK2kDVC6tEt6QrnnCXSkGcsq6qH8dNSp3wdSXuPxrUGF4i1FRqbYM9eSbbwEfVAcWpZ8VeZ4CKUqQh6",
  "key28": "3YdrH82TVA9EMh1W9tw6E9NXju5vmByBzeWWMTnoyVH3sYPX6gEpnVLuPMSZjXbeow3n4rbj4Ekynruc1xqKmXGN",
  "key29": "4XnwVJ3SGCYwndFA52ciHpUzNUjQZ3qaboEmsWYyLD219nrXqwgspE9oQM2DNXzuNfzBVftPUFFcefCrusqa1bDs",
  "key30": "5oEwjmkW48BJaPa7itgVsCCAu55nBMuCaZEUg66TqAfvqszenSTdp9DmTbpiL22QTfLUqhtwFHiNqZoDDWyzDQC9",
  "key31": "4ihDJBKNemJUw81x33mqyxEL7HANAkYqLS9ghT6MYzqukUXNLm4CntjYo6haE2qHKn6dWHEs2z6Hxt2aC1myJxvz",
  "key32": "24975nt7uhoYuQUthnU5JRJ61PB5Ji5QYpD2Am1Z19R9UA4edMUuSzuBH3SqUqmpZeFcN1D8TogVegkbcxJjsXrZ",
  "key33": "2aaJgM1q5dNtQRaZb4Z43YGuJeMukmk8HKdshJn2N6UxB1RyFGkTw7cZeXp3egxyooym7hrnxUrQu1jjL63Ubpr3",
  "key34": "2BpwBfZkkVSR8tGS1VYt1RKniaJrTY7AG7iDFNJKdxwsWLnhjBcYaeYto78SQkvFuLCe1Xqn8gf61RFM4g2fZuTe",
  "key35": "5VMyvrTYN3TgvzXo6dU9Xr2mXbDYfPjfXN9N8jecvzFppgDzo6HNk9Sz9Vy2iJaWD4bZfBYZeHNDyWHAkeCEQYAn",
  "key36": "3GiJuHgmi4rsPSmAQgeMxxAj2qisfi3GNLSnFzpeEhmMSyb6qZH7bZQdxuxYBJrgroQuYU97WZsBs38vfzacPu9V",
  "key37": "2nmbB8wqmEDXgwvfh1a3dqJQZcTB8My5w81JWB5pCczk2rgYuLx77MfZDrKyg6tjWjdd6Xy1goJMDbBAiPyQj6xn",
  "key38": "2hUpEP15unGaw43Wpia3WBQasZxN4dSvdcNFZNwgtNXmSG3R9Cjou8vxVkReCYfuJBmsWnRtbnRh62FYFZQ92CMc",
  "key39": "61LCf5dqP5xqYfzx99ULHCGcYT1hLCSbw9y5aYpbTiiQSYebS7knfUUtP8mhs22c6MtgKzwoAaT4WwoRvBMH8Hc3",
  "key40": "3VCQyQvzXq4JmvT5nSBr6TQ11m1KKNd1EGGfpLupXor76Kwdky91hE55v7tKQuBJBRPFqaNukR1UGqkGQfL9mUrp",
  "key41": "2X8sY75BUWgNKjwqycTPxvMFCsw3t469rj68Ho9qwejYMatvLMR211t67MYAq269FEjp5ADkrv4ELceM2LxQ94ge",
  "key42": "5UC6kQiE85RwaP5scis5Rz2fxxnExikxr5pbw5RVpbKdqrQW8KJfXBjXPtrBCT94rdKabUDEPkZtvpCGMpaV5AX5",
  "key43": "2jk3xocTHCqPyW64aZyiudbgeDZkon6w5hSoGHUha1GqmHiDpGBbo9B5dpdFSf4PwPRoVogPBBMWVAXmPTzwDWLr",
  "key44": "3GrBMEEVBuQJnt2vpnQFXRWHb8yBPBUQsKwYhxPxALxb2YARWkE3fhKAbeAkXdFDULtwjAQ8g7hXSp7dV9nZgtxS",
  "key45": "43jzRdzt3qW4MuD9CkZCM5APwxux1jRpN7uE6LBCk5szUmunhZQH1uvqqH86ZLD7zgQCt9WtPWdrJ6udEybHzWE6",
  "key46": "26CBMvfEmVtbdQiDmVY5WYhF8Jk2QYox2J93oKEmL3vzX3gPfEfV3895naHDDF6Au2ZuJ94EQU3Jh8rzjzwHSPpW",
  "key47": "4sShk4Nk8GQdL8SfQcM8KabCzbVuvh9Fv2RaXKHTgsJJof6ymFm7aksGWNaw6HUdemZsraQqiEepoZDz5UoxX9Ye",
  "key48": "51MUkYs4ozDFsrk86Yy27bXkTGko3968nTpQsUgNsefD8kpXWtNPd7DJk9fai1zuLNqLjSVTuhcMMjTPGcTv516z"
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
