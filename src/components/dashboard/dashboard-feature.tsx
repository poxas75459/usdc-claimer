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
    "CSyHQmqXGZYxtRsTyZcvJY7twLwgdarp5C1SHtMka5xXTK85tX72cGwUJHi3VXya42F3fu9meezNq55Sik4YrY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Srp5xKWqspvNnPrvU1qfjQZQGbVpPKVJSy5hrKdoSbxfQyX8YwYhovq9fg7fiQt4FFUWkArw599Tnits4kzBvSw",
  "key1": "3JY8tHPar1t2HPTUFuLa6QLX1yvV5GR5yfXuYC1vkjxtqEgaKfgXkc3Qs7Zz2Q5kkfvNHzLhvrdVpBwbjDAtkKWM",
  "key2": "4SVAbcZcXQV9RX6FKusP6Qj2YZDfJsteVq4mXqo2rkcmYeb66cF82uPALHgg5W1dUZJx37M29WwThJRb85Tb9CUS",
  "key3": "4QVJQFbcDNeBoSA2bUBfBG1DUPLQxtXcottKbkkrknT5dNJWNqeS7ApczvJSRQCtNt451nwrc6AUTBusdvpgwTHj",
  "key4": "2ceKz9LdhiJ85y3nbPMagTGe96wGT5uuSTVtnTvyXPCsAGH8SyqwKHkG41bZAR9Krq2n9G7fwVaoTfc2H4kSm8t1",
  "key5": "5gQ23CEbKVYYEvxAiQdnoM2sXNTj73AHycVDe2sxVrtjqeiErRGTYSnbUtCmN3qPTJpzK3WTuntCwi2P6euqwERv",
  "key6": "o8sAJLvosvC59Tuo2PXPkjvaxwg1PKWYQKBLuW2o42dw62EdStHybRVe97N1HnjRcFn5VN6H1MkpVdM5rUv2sZA",
  "key7": "c3BgbGhH8HMMpHpiTcjpx9dULCiwZSmqDUVSxSBw4iU6wm7k37wAPnHeyAwmrYp3TAs23dycMUxJfw3ueHrZNTc",
  "key8": "a4Ra7PkmhT6w5txF46YDVkrF8j7x1LAFBmYUsaCZ8Rz82Td4SyevaXHPb3uyJvqHLkEquBetZABj964HHPjVHc9",
  "key9": "5hyY9vSP9nfMqcSeg8vjUCziNUWq1n1V8LLLi7D6ZxCAoMEgimXhppnrrfrBHtW3xpRQFgqpZFJ8vjRNjonbMJKv",
  "key10": "2toxncVMxR46WhbrGSvzTaE8YRwxST76qXCd1TaFKiQsZvWbm7o6pT6hfCn9Z4eQRnF4PsvTDguDc5z5uZxZRfiN",
  "key11": "22DEBH641HsM3MyJv1fyHf8DfSXxk7uAkECkpqZz75QkDbhafWQzJHCYDCqt36iGoc9dVk1kBkP5a4ViHz8xaGpZ",
  "key12": "3CTYpNnM9uAwcZwCYPDSnj7wzaKg2aR7wBi5CNo3r7JpQd43e3auqEgpTGEX6fyfF1ZTBTrKjSkfigKHUDtZ9u1Z",
  "key13": "3dUQpxHs9NZG2E689q7AztMGf8hKz4aSaBkmfU8dqeUisavoXSh2SuG2Pz5Ti5UQ6ck7S3eDxx72JwyrhZbZK9V",
  "key14": "2hoF5QTzzauVVMjiAcvT7EhzUgYdoTpU9RWbREKEotHwkfGdK4GtPbySaXCXp4aKMyXgsnmuczNwtmg4LdnHNBZ2",
  "key15": "4ts9uCY7FpifvbaMKMQEGjEADwoPiFMBWt8tnodua2rBWRz8PcU73t8Xfqm6DL9Qh5S1SR74jrcavnth5DvSSFCK",
  "key16": "4NuUoeymWAMQkhRwNTDnUtoxnS7v9kUcvHEuKu5GbPfu2afkxt9bxcxkyriYKYzjWUPbNwb1mdmEcPd5Q33uzu5f",
  "key17": "5Sg4MmDY9ENzSpZ4QmpLm4Dy7uiLVhD4reCx25Gz84UqCMT2a9Zoi8j38r5addirTHWJ8HEuZPM6PSvwwPT2nrM9",
  "key18": "6hN5tcz1MMdfaDz93azK1gbDsVnqYnS6JFVERz8HxbaX9ZY4V7iSBqksNRfanC7xeXnCXPzNybudBqSCy846be6",
  "key19": "nDQ8VKhqfxxP6RnS1Hjrto59mPFH4WqQWWsA9ewHNCdhD1fJg1VeAh2arXCGbPRstkAVsCAvR7Urxdpyh94gPzm",
  "key20": "5PRjjiHUCfaKsw5CLzGJgfZ5VtGPAZh2kVcrVY9ysCbxz9Ahe4JPUshbmMCda7Gv8BMafWcDeanHB1XMM5pRDxu8",
  "key21": "4KPPQQ1DdkaHwgwBzcP9wZ16MqfFPA5S5uMjVc8X19LAu7Cagaq62MYoBBEhyzwyho64u7vJQfbK235wjcLhR41x",
  "key22": "59hGHktX7fpJb1G4sdkuV8AxKqnm8rX1a2ouGBdp5sA72JUpMseG6ssaRbWzBicrwP4aUaj8Tp9d6zAZHTQCj4VD",
  "key23": "5tzoPW78cxhTjLpqLeKybZ2ncoT7vo7ZWP76EHcURTpXqL9DCdcqRR1QEu3xKHBbv8jUqwkLfv6xVpSWcz91UgFM",
  "key24": "2Dtzjukf45S4n588oqBM64KoeahF1gQ2UFSZZcRJA2FS9T1bgkngtm77CGXR4JHEi7nnv52115cEXVgBqTkYKyW1",
  "key25": "2kS1Hc7vc43NsBNpQGVJQBjLJhsFTVHehD4oRF5FoFopohsWG51T8frBHCsB7HcQYfLPwXcuxVauwJ6UvKw735To",
  "key26": "67BChzbG45uR1stE6aU3FzLLXLwqDrg8v85sy5jB7Rxn9kRCTWAkn7zj7UEAjZcM7MH3UUi6eorxayCHsCAnz5is",
  "key27": "5dcYUykLL4zB9qfg3HTbTBzQbzMJTEUs1p5qA2ZpGSdxbT8zaK4TLuyvu6FXAn4ybT5UFdpdqr2ZMkaPripDKesk",
  "key28": "58QbPUPiSJtqYZwuBDP47ZakB7jQiASkFQjs16W6dGniSQboJpcwxAppsFPF3m3ksCmFeZzMfGTHiU9FAPPcgzCL",
  "key29": "5jMJDdQDjLDsxRJYwcQSpe8EqUcF7tpWT74ooaZ2MGHj66xndDcfMYu6g97Ejz4eVj29beWtNaETHzZZsweCZ9YY",
  "key30": "EWKheBzcXmoERByiwYoY6R6NJwBQVkHPPkaAeXx12nFtMy5hc4aEn8vduwFMdKbhJNSW1xZLSjYwaLymX65E1Qq",
  "key31": "56jDKXARiz7iMqCcLkYBo2nVEN1RcrrsR64fJAq6CxfYa7rtknGFoGNfDt4VGkFcTAHKVLv3xtY9WJdDqgedrLtw",
  "key32": "fQ1zwNJpemwE8RVfrSv8gXHDubEzndAxxGr2NWf1vn5SFpG2c7ARjKfKArbni2cZdJexUAkt7EcL1KdBQpQQveF",
  "key33": "4Ksqq84s4AukijGaKkumwGpz6MZuFWvH3f81FTWGtxgANa2UbWfYuTjULn88DXXioTE8sbdRjk3fjitLMKUmHrZ6",
  "key34": "4UMMixzBR11e7MFsFscZxpzZf9X7hwEpvvRHa8R25XgX8CyW3jm45vaC5B7vch9W31AiRpuQTUtavA9runEmMTVV",
  "key35": "5ZAerSqA8VJx1CHECKh7pTdEjBo7JbCdWmm6UJn4sGFFuxy8FjnvkGMKRvEUNhfp2Xnh5g8CJau9uthsWCaaXudc",
  "key36": "4wbNgwZHibWYahvqJ2wCgZ2eBLx5oY22VgSpAj3NpoTtT786ppD7YeoWZoasfU9sVoWCp99sDKWQttjdqZTYyWNZ",
  "key37": "2nXy5mHVKsy7byqQuXTWsxxuHtA7ftWLLGibKyEgWxdGMzKo9ax8kj5tDHgEZtTrvEEqRtAwR6NbyTxHcJVbZhnB",
  "key38": "2k2k8i3g8FSevt6cQS34d6698XJ4MQ2AjQN7nUbAQSmQjUne6jQTufvzzWfy6iVkjki3oQgM5xFtm2EifewceSAe"
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
