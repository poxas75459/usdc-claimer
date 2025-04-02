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
    "P9VsnJWeDELwfZRhdQSkEvpLMEUne8iyPB6RWJ72wpN25g2mXGS2YZhexqaeCneeGR3RDmVDwKtnHLRYq39pyfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E139D4RWjhXF1k9AS8u4jNL1YtHXCQtYw6B9azUqk6yBybT39pid16rn2xrnD698iBnZBimZFp4LMca9d3gUh1w",
  "key1": "3AM1rXHpXkubNSRdXeyvJ1rEgQsvaMLMkb3o3MYnWfdcvtMgaB9sW3Fn1GKQmTqwhsSpgx7Bo1aGpgsMGXVHU3Hz",
  "key2": "4BxZni4BnrRGGdLvkxe7ginHvwHkn6SwGBrS5WDkWZFhMCvkqp97aLbQeo8MD1vHQM7AJxD818vKKnnRxqAqrGzg",
  "key3": "4wY8iXzbvPUJme2FPEiyPfD7NKUfztS51wa4mPNp2DFcRfbmDdmMtLK86eSUBAa5WeiXZxjEevRhYB3yHd8jeBH7",
  "key4": "4y1RNMwb4nfBPc6nFv2heo2rjZHAn8RWrQThWcdQxeaTryjC9o5GC26rVT2734gc84gMBNf6PNhqoP9EodxdD11r",
  "key5": "ix9JZp5b69bopehdoUKXidhyaSrRoq4qu6RUMbbSb6cMKA1mHryPzadbzmEchxTVyN4oVe7DVu974TWLt331miy",
  "key6": "42eYvuvsrQK6xxhzz18q4idUaSztksn5z4EXdEZtJ8d32bzBcjcVzqxgNvK1kHvVX7kvK1Up1YEWqYvxrciLhaYF",
  "key7": "5xnesKiDyEDvNhTSWLLoTw1tZfTW8pt5iEpY2G8LSCtVJEcq2Sr2Ytg3CSL5qY4amGBz53WPXGGqFMRjxfpLbMMQ",
  "key8": "2LnWBMmeDWDvDUF1pY3Wam7SfEAVLGjGybHhEZwPo2Y3ELBhdtRdRc3JLgBdaUwtuLUGXdBv71hdFXs6zwt7nznf",
  "key9": "2TSPUhbXVkDEnMbpDrofKruv7L275YXi3FJuicHfckWvUwmKMaHPhcU3Y48RUaDRjJ5Fy6RyC8tpempxpBQmCZES",
  "key10": "qoP4b9UAHrPugaJPc3GkU9fH53vyFXKhAFbpzckcHyJpKizxKamd8vYmzVrSowH5NUnuK4L65gs2RB8PkSTqxet",
  "key11": "4ykbe12oZeqcyoWudbcFn8Gf23wT9rUHpF8M62wz7yz5STVAHf2C6xugypZw6iNoiouZFvRmYtdHVdvK7NpKDoLF",
  "key12": "24uSM3H1Jbc38Sigy4WCLDbgaoxzeE4dfgB3ND8K6bdAiyfJThUgBsp873NrS7w5mnP1xQuajj6kngsaxBh47WYr",
  "key13": "4rJWJb1As5VFzEqy2n2nYAKuaAMVNX4UqCGpS7cd5YddMPmunPNMUGmGQFPzsdY8g9j8Fn7i216tFDC6TdczFdHb",
  "key14": "25gu8WVnhErFM43bL9XECfCACEAJSFArXMeH2V421QkFN2dR9DNq5h31uAT7ru9PQsAkg7APUXvM9tnsW25Rh7sc",
  "key15": "eRa58j9GU4pDoJ3332VxwYTmoiBMJek2ynuijY79cCUYpJLAeVw1MbPqSyuftEUp8auHzwMBDciYKkpa466rH5C",
  "key16": "49PPZDJXyKKKMZyN3pPLua46AA2ce9TLaKbKwodrCB7g54udHpohDjQvkgt8njVB7m8guqzDtoG2WsmJf49XbGxq",
  "key17": "2T3PjFnnWhSDxHsBBgnUkR4GFfrd8rJo6Y2xujmfPF1ywobThatXrLPf3VkCyaMi7TxbLkj4NBxpgMYddYPZV6oF",
  "key18": "4M6qMxqy3EWbTCxkTpJz8Hf1P7hA1Pb3U2vadFBoxGMWwBtFgWWZ2aQqfNV1hVPs3xjvPA5YWivPaqbRCgQUcNZ9",
  "key19": "3q6mxvaiGCVwmwKFRFfsqS9T21fHk3DfSQdxvxWSf7vXhdqNAx9RB3oprgVsF6KPnQrvR3rQYjnejAC3vSysomcY",
  "key20": "KW2oYUZ9Qo8Gu1VJ5P3oNrSgbtaVyjUkddEVesecVrBZ5Vut8aipZ4FQU5pJbchjvxvM2fw7LiqtqSmFJeGMiX7",
  "key21": "3qMRWWfdLjwFmXx4CTLFYRt8iUjmzFZdhamAi2iUrR1E28Rd1gG6HT7QDGGJM46LFVVcabD9WNsdtkkBCxym7RWr",
  "key22": "3x23GVpYtADP3hui4JMjwfDd7TeZmvbUP6L6S5CECToz8MuvDYF4QRLSXRHrTJM69ji1eTvEHERE3YHjYLcw3itk",
  "key23": "7qSZry5ARAjE5BkQ2o6auaLDeRHNa5d1hAfRXcirvVw7LrRchzGRHY7q4YkcvhcWZFFvHVuWu9RLWeHZCWmBGTE",
  "key24": "59tQWvx7Rx14eokg6m1sh3tgfsM86ZGFKGAzFHpzKS3qDQezEAis2x2RCFs2eUbANKpxC2gWNVo5G1bpkrYh7Ltk",
  "key25": "5F2QLxWrVpJ5d4EpEXKRyXJt3CwkuEquwnbFQGkgHKy2pPohMDg7mrHZeM5s52CcdjihrdUyt3sztZszqMLZRYbq",
  "key26": "22UgMMAx49Rpkbexejg5U5Vryn9Swd4JvMPyB4yuT9aQmeGcYcVGNYSbhTmVKokBSjWrWjKFQM6pFFJsjxzAzn22",
  "key27": "3rndBXYytZz8QYiCz9Q3wAsQnFTYtER5dGKsSUexppVJTeKnGTTr88F7wDk8ugw7BZCTuBzBXaEAtgMM4Qhu81sc"
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
