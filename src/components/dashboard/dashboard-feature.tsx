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
    "3SvqNRe9hw64SSxez2QBM1zAna28TUuSVozG87X9QSdSnZnRusdc1QjRYskhw8xPto9rxDPYK6knKR3feXmTdpPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dc4ogTurxfZTRjAPk9jFE88cFNzhsFdEwzQZub59LMw5ezA7SZQNRmczmazbEvmZzicBpJqEkedVwoYZ6G6XNZm",
  "key1": "EfcoSUc7ug6hmKWUi5aZ9MvAhCJXxNRU3pADCJvYb3rv4ia6VuJscATws2BM6sQUhjZUQK5vz7Yg1WWxYE6zv3e",
  "key2": "qo63GUFNuxXZpm6825qk1uYNgZ8gcV3yN2xzpqnGgqbNdLzVprv9grkkNquzNNNNed9ehfh6UGcFykJpozyta6S",
  "key3": "5qZN2CWKS5Boo2QKXPhnLXE1fDWv9TDfsbx6MnfmsP8RfEZ1xnreSsqDcfXRrHoriBwrfFyHnUBKQ5eEgRyb8Vj5",
  "key4": "5EPXC5T2XgAedL4RgVcVnXSv4gvYtoZ6m1d7Jvsb7so3BKhVFdsQ1kY3y1zP3CEXGxfo5NG7tn6GzW7qtqn5hHSC",
  "key5": "2XaCjS1HufqakFyppmu7hQDRiWn5dcot4qZzc6PhZDkA71PM3DZ8w6JMk7HDQGyDW4Aj6YNXQxdw4r1eMEYr4iAb",
  "key6": "243Yujk45YsAEHGJL2MFMths7Db2XRktgVueDe9nksjwGRgHGeCLiKWtqWwB8i2v4zDUn3M4RizdtLHgGRQv4nPA",
  "key7": "Mre6Fds3sT38kBYVqVH4yHX3TonwK4YdHo2tUK8YUQzFfN4xhvSdr4qZbgYjjgNnU1PHJZomb3cUuwGWJhPCB18",
  "key8": "279c35LPAZprfDpBrDZqdeTrFuYjRCt73dM3ubtANv3ytZ2R34hebc9sVxxBC7whRrpJCCMCqBmXnUaUzDVk5MFL",
  "key9": "2Ce5VdtMdgN1hkLLegdd6CW6uhqm7pnwyDxgHzzTRVfRZykw2Je2gkBZRoH6btGsLnEQr3Z1YhX3no6j5U4aQ656",
  "key10": "hEDkXZYPq7o8pEWwUHo6aGPLwaJsXPhnVVSCGa6k9KBSX2FUtuYuFqtzVnzQJZVw1dFbBPk3LchB21wWhKYtmZ6",
  "key11": "4GFquxsbrpBdk68YKJqAtJ7C7zYhm68iGZG9GwPjvJYf36YxekhiFRh2sud6cmTKyU9uH1BKNSbbeiWvM6yjLqNQ",
  "key12": "5M6EKgKMzQYxAKVLjos1y2eW1LoaMiR4bSKmk4mMUA2B4hTAfC4VaKddNwWsaqVGWHeCwQX1oUZCQmB3kMmD6cQa",
  "key13": "EccZcTEHqJrVbTD3ouMriz6CyZH8vF7CCRCUE1J5di9Uq3aJdFB3NHAFHddWs8BrP5vgUNR8YaatFnNCMgNUVe6",
  "key14": "63cPAsQFneqnGraYbi8FfuW6JF2NGp56iUwtkPFjSG6Vxq2ze21UHLVXfLu7QyzxMVPXqpZEGZ9FQExPo6C8ZRb3",
  "key15": "UoLh7WsHQP3DFKQTAXYyksvfzUnCdy1fjVHf9JS2wjVLBV1kmnVcS2WVZkYbTACdmBZiz51yjiVr5PVB1bfpUCF",
  "key16": "N8Feyv5gXXVycCRu5aVY6XZFJJFzc3JP4grjiJmN8PUUC5SaGzLGRdJ6nUmZvNsTWA9GVxsdKmkw1V6H1Sf6TsH",
  "key17": "xhV5LnH6pZSPRemk1gPT2J5dbzepa2v73XKzbGhfouuGyjy79bHWAY2ubdQohYPXmjj5UaYJTNV7VVjQubpWJE1",
  "key18": "Tzyieh6MDFZpRTwG1uRgjw4zGiYbsjfWkfwbgMgBLr3JfiUFDp1zVdDrTPFNfcS5tHZYhfB15t3SwzccSeWwXFt",
  "key19": "KVHb5VsVza5NNTUq5mrfqv8g69MdfmFEcvtvuWvUtgWyeM4e8X8qVLoQoeJciwF6SJ8qc5RSJ8zx4HfZg89LLq4",
  "key20": "35Mr6prkdY5e93RqdTZaDS4mu1aBmGBowuPw2vpea2vzQNYx3ZGDF3roTaCbXqnq819ZhjrwJ3LXtp8phWTLewbU",
  "key21": "4ayrKYRytb5ti5Z4r8nEDE1UuMFhXjikwYvftNPfrc1DFt36Kpco2HjTyzzdaAGPGUbgG1FpnJbJEzjG5s6SpU7Z",
  "key22": "2nGv8Ga6QEUMxA4gJbnenEyJwiKtnuGrKFMTPTG2X7cNByy5Q1Diw17VnSFWnNen3MYXPLMuS2o65wq9uVAyskTC",
  "key23": "4ocRafaPvBwArnnFzJo3n2XjWea93CzBeWT2nsAieGqGizRCGL6ZWCCaBUGfdSgpNuiuj85mrYdT7fYNGe2yzUEa",
  "key24": "2rvRgRVTbhNbiWjaujAGjpkQiRPTzxojgRkJ23McHKa1Vwe5XDvhBhW6jxQC6Qh7WEDRyphm81b8s8hf16sqzdPn",
  "key25": "23XP1mz4gzu4RCCzNHzPrDy4wC3qwsrjkZ8a3Unx6Mmu7hHDBjRjyZ93rhY1SXyVo9heUrhK16iXsuPzoEBXFMe3",
  "key26": "3dSUJLhcJYNZ24LrLSyk2qmPxPw93B63iUHQPtWg3ob6657zHw4wtsbMg8dmJtyGsCRqUzYwrTFdGgoKFqYATJX",
  "key27": "4TYJqSf5bj4afmXtyVzqycXuUj8WFWYRikwBvLJcBQvvtB12TmhpjmkxgMV4P65VoEGAt4c72f52YSq1vt1mJyF2",
  "key28": "5yT4ZZ8VX9q4jfRMdDaTo4LwVZYr1BaQqqACjEi5UBXnBV313mGKfswo4zw1uSUWne4JkDtCjsvZtKnbryCu1UdG",
  "key29": "2U5rmCD9u4gqzuv3vsGUVjghzm7Ckgc81bb8Lxb1RBN1jHRrq4DNz3uhVsAtwdkFPXPsLi9tDi97QHN9WhsEdhxC",
  "key30": "4fGzDfmyA5Gnm7ukidTBo3e7sxgPfTUzS4trKu6C54duTwcJiD4N2HsrMQwairJLY1Uv9p66fsv9T63SZC744huE",
  "key31": "3XPPpFzStNkRAQJbwzCeYm5MXfLmvddknCrJfkSgPCBDyrZqeMRdvC9jn29ERi1ADsu2z9RTMaMtQXrbURFnwgz",
  "key32": "2dBPJSQSnuHBvK4DMMcVKtCfxvAG6mdZzwSebkGdfSXVCp4hRcM8EdBA5bA8vR5rmbDbbwHnhEZzvwE8XTWPMMTN",
  "key33": "4yCaUcV9NaZ2XrP6tg5FjXHWaZrCfPDZYTwLt4YYBXV7yQHJzB8wzp8MUeg9HemyURXUvTjP9Tkam3GDBbxeUpKU",
  "key34": "2GzDUdxKFo1J45bFKsS9MqZGb1pqe12FbUEw1pRHF7raW4Jbn1jbcgBf9RLMWsS7annCqLMpFP8GgE3mmMhWxsex",
  "key35": "23KjuVbjG9vF4BCY1CnAd24rjK3SviVPdNFz9j16xs4tNGdUBfbAuNPANZJjzwCuoVF4A7rnaGkNv9VNo12jXXU3",
  "key36": "4g4R9MoxKB5BwJT9prwUzwu9b3sANNXYZiwycqTHarB51tjBRaSCJNeNZBEJU1MFytbxZsykiMkc7NJoiofNGRiy",
  "key37": "3MVb3qwDYYApuCAmFApwMkx1vPKCBUoggmM46Bmkv5ED861VRzNjDcmZ7bRQ4PiQVxtcmg1rcsc7utYBys1qy73m",
  "key38": "5XXuQ9J72ukLQ7cFcYLoJmCMKt6kSvoGZRWgPa1Ms3auRVgkgQEr65d4F6QERoEfFUuytVfxHLLCbr88x99vYHp8",
  "key39": "5P8EBCoWyLGyNULYYFZUScFVgHHWSjhdy8X5DqCQyxdxWeta2HaPsDdcqZ6xXSmJgsN4ztCY5UFKffErfnVKXjax",
  "key40": "2PSfZKwBacEGDcUshxrPmEq3NnCBLF5yJZxBFvDAFRx8Ds7ECFgpDzf8Z1oXWE912kveAefSJDLUE7SpHHFEqS5Y",
  "key41": "4tK5awsMwyiAWVgx9ry7fCVQCpjWVARacMPpPqJVi5DamFeu7jMkcTk5U12o5No6Hh1txYfoJ4uMYpo2oiKFhw9N"
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
