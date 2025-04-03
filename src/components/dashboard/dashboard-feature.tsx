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
    "K9dUST9jNQNqRP8yRdjManzfKPiEDhCHecQVYJuHT11DaxArJJgUNvxJz8uAaVZdsDxXZcZFyArzjjDrei3Gmxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AknmYwr8TuHhSPuGzQKDNnBao9DG2XRo3zkoNWmLqVaTfjSzuJwRdn83z6cFwrnEDdwYnjDhwwo7uVdJ3urSVL",
  "key1": "jPN8sAVtJCzpaAn8JKgTgWZAGM1H3jvqdd5K2aqddeGNSUuR7baACiRvXvXU2RdbAySvawtoFEZjCJGcsyYAsat",
  "key2": "2v5wSaifDhhAAxAez2FZr9n4xrujr4rz3Kw4smtUs74BCctXXxJy1VHBLwxP9UybxzUtkTk4Br3gVTpvfMnGN3L6",
  "key3": "c5hg2aQM5vaSPem8gXFYp47s9eFLWPuVXptKa5YGPW5AH3WUghjtJXBgp4MDRkvFSa1q656LLCG482UfjKW5kaa",
  "key4": "5HCTKBT9tdWuvTEDcBAJdTfv9D4fFCSsHoCBfRPJUd2iyZPr4394GaMxJ3bFHf68PNRBY4dorV26zgpPz8uzsg1",
  "key5": "34x1ceCBJ4JgdNBPzo1KUagUZecMUZkEMq3oBQgtrbwksKteyoh5ANWjimM74Hw4rzJCGLnNmzJib19Vr66ypX42",
  "key6": "5B3oigHwWauCvWe4AKQ3yF5EMe5g4QT2yhBVsViBYucZtH56XFuEZs4C2wNkAMG76uoga8Ny8dSyZU7Czofx2wPr",
  "key7": "ZNrKtqZpMZMBy2x1gsygSMVwsW95Kyz9knZKbFpsNaKf4T53cvMBgMt5Q79HvTP2Wq43FxgeJV9aVusxhxQLAJF",
  "key8": "3oMKRnZYCmBezM15BnJT5gBQee5TBnhpqFmVzmXu3dqfFkkxCiRx6MY4Y3QsqpEovC5YouosDmbfhnQraVgzA3ry",
  "key9": "5SjyuiF6KvUS6917vgWjHRWapgezwkY838AidoQDA5MPPP9VUsE5atSdi15bys7eSNn2neqMrEuNu8JtiXh8VujJ",
  "key10": "2mV4Kddi3cqwPhp7iVKYucJZUEL22UWf97Rg61E49pQNchJMPvBzKThpUYxVh1s2uVyf6j5Zzc9EJaPN8ue3W1X5",
  "key11": "38AeBhfdJMKSGvLvr2pBG99sRK86qZa3CuNQa3foW6iVcWCnd5tjWtKFLfxGJ6MGWNQvqh3Hqio1F3YqJyQJ9KMq",
  "key12": "64yYLRW2r65dbNwiLB6wKQqrh47Y5ERVan6BQbKLhHUqJpy1opcuKSFpEcNoBAVtYdM1apbUVP7ou4LjnyDyYXFV",
  "key13": "2i2o8J5zvZ5Bt1dhPku9dF95KjGbc2kE1aq82S7AbPCazsqQjqTvLdBU1t8S9XR2UtXs5w8aTsuEoxJE8wMFU4mt",
  "key14": "5EEVjQGfPrDyckcxWxrxgJKVAuFjaDHNq4GCH5f7QPnEjVYtHacTWzro73HwBsjh5S5TWZSwEX94PvKgchZ236Ku",
  "key15": "2PkzFMExZRS4XAoo3mydHDDwb4Q2AB7kkNHj2egDN8FTG6H9Qym1PDDrtXL4f9RH5ahEdzVSpMpJWhhAVnD5RfQy",
  "key16": "5w1wigoKuVZa6icBY1hHdQpUigrJ84HFwNm9wbZRyAyUiSGd8fH5vNyzuujXxJonigFQ1WVxWcXWUYYDi4MYLik3",
  "key17": "34tdowKR1a3b9mBzn2pjZdwcicRmYtPzHWKCdHuojRa1zHF1QaVDLCWdLb35jzRELMX7AUaRU5fidmbY7SyKRM1Q",
  "key18": "3NgbuZJw4poMocfgL6PxE1VZqNe51dHyp2Z3xbUY59dwyqTzToaV7EfFkAz6P22SpimV8vUQXg6LjWnZyEM71DS5",
  "key19": "jWvueu7tfgBfZtfWzaiGytm3XeUvuuCiFKhY5VX7vzyrmP6pMoxrU2LnjY2MsB6NrWxujiQRob9yQnNd6FzqdHM",
  "key20": "3adZTYbA7HDte9s9pdXAbz891nE3tmsBau7VoPCNbJBzxDUTxiypgq26YVHTYFfQh2TtxxQvFk5bGATfntfwzpQQ",
  "key21": "5dxXeWejFjkveAEvgBAmDHqAQyUY28WTPSnAruHc59Er4JWx8WyUaYDo1xLtdPseyrmXyoSTrxQwAAwxYzDGPY91",
  "key22": "wwLSCePSdAN1wEMKhyyxHnSs3BiqLWsgwmBPpSkZ7AhbS2qSXGYPp2biYqJAEg4BNk52Zf4MbG7WXsU9udDg4bY",
  "key23": "4W3e6eAomxYMMv2BJvggu71FrNMbJYXNiNVTuGYwUsVXcNkSQwUd9taQ7bbeuStWCtoEAQA7tpmiGa9xJY65dWkZ",
  "key24": "63b5T6vk1UfTW7T1zR355q6gPSH42abA359TNkK2vGoBw54Yzso1VbSfqj65zyM6PCveF5HLQNtHD4UgdLc1p56r",
  "key25": "4YUdkZez4371foyqZ4B15nuLfLX47haR2sdXfKP8kChe3trStFKovAK5WJJFxkGVo44DHCcPcxsAx6ct6o7EDwii",
  "key26": "3DnAw68CyPqAoopJwgZEX6bzpZkYEHFMpYTfWjvtonmtd7xzd4RtToMDZDghFKhtZ8K54UxWAPm3QWqPXreGArBg",
  "key27": "mKZVvExesJXkC2Fjqps6r9ZfpXHHTvroprhxvBosNVLfuERbdqNxx4dPNtF8Bb6SkP5LG6A22tWxsHVU1kptuuH",
  "key28": "Ct5vGq3dRSQnxEq6VpqAHfeDGyoJbUBHAd7uXpUPX9FiygVZqpcQyB47Qj7jGL7C92UTCHyTzR1Hbh7ML9Q1obs",
  "key29": "3faJ2MMqfFZsapyMTmQwL7E12BkTXDqLLUQJtB4zQ2aZY8KoVKfATHDVyoqeAVmqdAHUUfmywEPhgYJ5DvDx3RR8",
  "key30": "31RZqUGMsLWoPQsekHZeFm8pYzeBYnEicV4WHWafyhSTGRSS3TKA3dGvZBCPpqvkQ2yTUZPwt38jR1Ey6aA26fNy",
  "key31": "oKkfQoCk3fwq5CJZmDeL4CpzR56P8B1hqY1hQfccvesBGM9WyRPHnsvYo8y9EoLBajg4AVXKTFHG3XAnT61iHvt",
  "key32": "evF596MCmHAYX2XwoodUVv5caVbZsB4Lu8ynLvazT4a2QKbzq1xZ59qcuzikWJHYkgbh1g3xFEqoqjaXUUXgTQp",
  "key33": "wxMRnVkvyNCzfNBsWyTyCcUJaXQYFmBVRnqeyCgfWR5WRJ6Kf6BJsh1vYD5jd9i7zbi6nU4DA4UDUB7WZez1pEm",
  "key34": "VcwtfGonRs1J5se86a2CVTXQGyvesSx2CZKfNqKH45js6NcFyxbxHuMS7YWzLQV45RWb6d7RnoQNPAejBV6QqVA",
  "key35": "3yajjFPjAXUZiY4sT2oGp6z3sJfWrJGgMXDiSSjZ9SVE3VYRhkgrD3tW9tHez2mcQ9QCoXPtGVXcx5thih8ovz8h",
  "key36": "668hxosEqUme1WTn9gYVF71GSRo3D9Ub414MoDYceupR3vssbSDpQVUUaGkZHVFPAukYj4KKKViwqW6qBnY665Sv",
  "key37": "4MTg2yQmmFPSuSdSi2BtyZckMaZkd5gJhKqD6AiTh69fwoAq1t6W3pvCK3B2aRLxhGWVsBS9cXRBR3Tcqbsx8owd",
  "key38": "2eFaxmab1MiPaAQr3pAKeoLMQqpS7sZDG2sgD9GgpFiQnAYacupipjRhrUxMeszTp54CVMJDc6HzZYuvJZNAypZt",
  "key39": "26udPuDEXfXcdH9Ng5mwe8MzEgKywYssq6oLQX367nMVZ3hrixeizxtksqM3T1wLCA77QtzhwFi9LXgsYvo8xXMq",
  "key40": "3TKyZsfuTZzHTtsWwUjNun77TeKwfyq6hCkNGPzJoL9CZEbE8hb2BTgCxpzoubpLw1HP2X6oCdbvwsxfqFAVqh73"
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
