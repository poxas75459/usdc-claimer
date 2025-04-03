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
    "4VqobLXvCtvbHVETutwmvi5voFnskgtHSCn7CPL3FZLUzwCj2N6EU8Jwv7EvyfZuGFRxjavgSfQoqbWsb8kRgKH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rw7pWNgPgCEMnmhYoVPBNiq7x2HbkSrEdKTaQnsqJmkq1ynPhVWwuyvwmgyD5iWbbc4RYQRru3wZoWLjeaCkatc",
  "key1": "4g1TD9gpAqyAQRFEKTi27WmDxbcsJHGo8uE6uhnikQTobpgyi36EPLxBjCi4U6iXGLBoAkbdvbnKRBRJKJPT7RHe",
  "key2": "5FdLSNBaFEoMLPrtbitpMTHRCd9qwV8Jhxy6Vv7hJ6gND8nCTqjcS2smPBDPXjPX7Vki8dvjyQBAJi2gohJayDEV",
  "key3": "24vqfwFnekXBrYVxoC3JXior7uQdz2hkkqHpdgfNucKE18QA1mQLfD1uPDsave5HYpzxg72LxhNw3kSU2PrzZneB",
  "key4": "4Pkd6bw6mx79N3m8BFWjRNmySGFBAQah8UnGdkx16nNf1MmXdjRvQo243vcPi2PG6p7fbEdLhse9tt13vZjQHp1k",
  "key5": "vJzE9u5KTPqX2ZaFZhc6e5Bcc2EFoosLKH87tNdCduLqes6jL4XV4ykAkfHvz4DatzqVPA1Zn71BsaFk9hf8xa3",
  "key6": "2R8hbcuyuoapFp1eCuhL84YLbVrcgJoQjW8LBwhRzn71kuFMneAgB4Zn1PhLLPCa1cxT5DGnaUf6QhJsdEhX1htj",
  "key7": "1eTQru6AsPb6s7iJtS4nejscSUth2pdXRcpH5shc63uByiZZgdotjVa3GqLgApTdUYBTYPRBtuQvZCeBJSpJQGP",
  "key8": "TN7NrfTw4dRYAhx8sQf7PE9rwpSCUaDTuas4R2anTsmh8BVKtrbMTaAKZCwcyVSWyxESqcdkcQ6WSKRHKrif7oA",
  "key9": "3GWwXwXa37DcPYwzg7KP5b1eMVSNUR2fbCYLVkX4qK2BnLnCqxxMGU1VoGXYcEku2sPQ3FaaYrRbW27tMvSvDceX",
  "key10": "3sFPqEsCd2NPbi9Xe8MCaoGMg96xCsnVkvpLNs6bBsJHB9hA1NwcvVkakVZuxxPW9Jd3GqRjE8j7bvm7nKWgxmf7",
  "key11": "4FC7yhGTFCCkSh2NqSs4qZNVspPi6kRhhdLkcR53ePGqsXwQtW6Q5CzqhvE2MQzg1NKaf1gqe8bBXvZ9ePdDBgVN",
  "key12": "3Kxn3SG5jcpgiRpmhXJ6StQv8pHjnLtNdeE6aCSFdaZHmWXFZyFE7FE1Ntf6nUBwURrVLege3wiMQbxzrzoHkE1J",
  "key13": "5WSMi4A43NqJ15YSGjT7zNyhoQgN5hSjLQQYqiVrbnMmG434wSAEE46aGYyhvgbZM6hS7c6Lx37keaMq4LMhjVoT",
  "key14": "3yJaPFhVxgEWV2Qazg5oNcPWuFRbcrnEvKxhMsG9qRNP43V5kFytKCQL2WJdyoEBWVrybSyYGnMKJ9rtLGQxXXQr",
  "key15": "3FntEJFyZ3rEJahReD3Bj2YLo7oG8MYE9RYuuvXkEGtMwMoTH3BcmVi8Ys6pKWeRQWiyzjsyiE9a3QJqiYFCRwrv",
  "key16": "2RFFQDJ65tXTBpGFKnk24YqvpLTcQ5stSsEE1b87AAnQ72LtchixMcw4beF8pFoAjP2JzH5LqvaxuiRt7iV3cRgj",
  "key17": "43nF4Py1jmCP1HsEwyjNTPFx471d4uxuXzfHw1m2rcRiLjJ73hNdAd1pbHeU7Yc41dHPH4NQE41jQd7HcKCP1tFJ",
  "key18": "4q1tLjWofhshj4Z7gc5hZXnMqqvL7Tg2DV7FyCCQGjuw2zQ9JxC1ZAQoAmiDdS4cGD1rtwQUnNX1KiKotgzNzktR",
  "key19": "2bJFWDYNKb84qzzMiq3zfuhYTDrqKNiKnSTpBATWEfkvjQNQ5RvFTepuL5acM9d7LduwfDdJrpPsQmU4d73sGED4",
  "key20": "3Q2KRjzicRd4WUtc8B2LKJKgPfMJ3VoxvQaFA7R1vzRUXGYECope19VuW85B3eAkvCxroskXHfhaJiVa8FkgNPMB",
  "key21": "eN5HLfsobERpA235R9zbtJzjn1k1Hq23zpBoa8Bkbv2E3vauW4M8YUq8p42k23XbE5v5pEHpAKmYcWVmbdPbrou",
  "key22": "229NyzZz267nXBn5U4cszvf6hBm8g3dEv3bGSbMCBY3NpaKdzbtV28RBgnt9cPopbXKk1pJeomJ23trBRpFRFeKi",
  "key23": "56wnvRr7WHyPqohuwc5pqZUnYcrbpz6BWf7Ximxr6G7FNj7FAJsjJt8aHEm6VdH8DSRaZi9g3RhFJ2HKrPkdnUk3",
  "key24": "4zdZKvgi31vSXVy22KbYyAQZTdAsvfc6EQweu2yH85QfdPqBLcnGxvg9E32Le5s5dqVgjUofy9FHg51FjVRG7hae",
  "key25": "3iRkJd3V2RWoEbhWGG89fWQ2UNu4qd1xxgZmYHMrCPfcq9dUKqD24QUtijCqZVdmek9NmMZcFMd9dMvv3S7GXLD5",
  "key26": "3o28217ef19S7RPe4sDXLcAV1MYEQJ7uGcico6LiugLebxZQcyWgzL8MyR2sJu2EavYQMwYEWaHNnDF9Q4pXN51a",
  "key27": "Lf9VMEbMrVnnZFdHkSeHpnMZMam9pXSqiiQuP6mzRD1oUxL1c4kELAGzdp53M5nc7J3e7xG7zXbj33QtZbHKifL",
  "key28": "5QjparUqPZWJAFhzX5rhhUQj6qb5iYq3k9x32qUDsRJCECxRxqznnYK816CZbJrsskb8Y67YqRyAt2HM3cN6hqLE",
  "key29": "4T1nRBbUkYYnyRvjGounP3rb3kjB5AdkMsL44Nyip6LwYn9fCnpXLMJRobwNUTaz25rSL6mCqq3YtQhtJJAJtsLe",
  "key30": "kvm3oQwuac2L5zGhDnGwiZwAnVmrwDdQLHesCsz2TpAmtYj751kGDkyHtS2rmPfgELU3xAbfFrtWQRNhQPzFQvz"
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
