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
    "2SzLmdHrGobaUzcvbCzkqc6pzSfjDyqr3bUfzAxToD8BE1EFQtdR21TYxsgfAvoewVwG9a5WJGhypiFoo2yeWDMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SVexPmNrGVtw6xq1sRktRg357Yfw6oZ7QtcoxXVMDRAyBuGhNXYFbmfd2LNsSCYeyitWketHoUm7DTQm5ViZyip",
  "key1": "5cejUYpHwC8PnRUJHg8tsyn2Vn6bKVt2xaYrvWCqexTAGqR9YPf27CotRbmFo1aBPAfciHRfgQHnNm3zKBuEszPX",
  "key2": "5Lkc13u7W1nHjGdux69FC7re1ga15Qn3CQxZmikrBTF7tz2x2LQ8PPkkyy5jiBphrLZuwU5ext8eS8R2SszzTPn",
  "key3": "3S1TDiMxaexDAnZhVca95pjc3W5yhYsY3dHLWwPuvVCBas5kCHqHSa2gjJXW2a9ugafyVaXjhkVtNM4wniL69Kch",
  "key4": "4GSw1rwSJgY4zTjwN5F4HDfJCHNeq5QZ7vdXGqS97LbjRRgAAtXM5C9gUHBB4TyfZ4wM8kf9PewgaYLyotyoCzNa",
  "key5": "2EYrji6Wwmg4MN9Tn7eTqxPiYHyvTsLuoqCg9dEM8txBsGyZ8X4YUHPAdKzQjQ4Gu64Ttn4z4zMuCvgckyPCmEYn",
  "key6": "3Pe7B2zKB6Nqy9Uvf1P7sCPp13kirQbC5C9o5UpXYBgjEAJYzrpxhE1FHETke7C64Ks6kysm4PEs53fD4nHrdUcf",
  "key7": "4cHhBJjdSDP6tTjiaM7PvviE6iUTEf8cSb6QPcVARkJ1sTV6b4bDfbgyhn4N7mB48ANxokqceGWygh2CbSUdtHEi",
  "key8": "knFUAF8PskAHaNSouBDFBNG5XyFzp9cnqRS1JxQynUDPtyZxC7pStxDNMk3SZUggitJ6tFFxKyNTFV4PFGkNqLm",
  "key9": "5eoeokAkUgZ1reifomhnTWmgUQbGJbZqjLs6Y2cNRNp9V376Vrdbj2CYw2PpDNqoHHtKG3H4JNdT7oTChgpqSHi9",
  "key10": "2wxmA3SJ3sqYEyuGNdBcEChgZAS4Cfukd2GjUYkx7uHrTPtHbuYHsZnSuDxcDhJDers1EFV2d2NDrCbimw921UXr",
  "key11": "5BtudgSod4DBCem7pqwFMnuB3vdNAqERFfnaV71CgpCxqxSAs5HU7GvnNRL4a2GnLf91Mm175P4foVtfmW7tVtwC",
  "key12": "4Knv1yZHZfm49k9t2cJb168mp52vmXb3JRKnMR4ttim4D9oYG478Q3HEVSM7i48kHYjUcivpaucjF178MFLzkske",
  "key13": "4L3zu1UxeE9r1rmvyCMTuqXDjZ95B1MXo58HyWFm4Fv8NGnQNiNW9wCGHJtDqHsoshxiLC1tSYadFiZu4mx4fVra",
  "key14": "2siU7gK6gaT84szQq2Qbt7JidegtnqK1if7TzUNdLKYngmWJYHQBwQPzwCdWtDoKHX72HrS1Kmy8fUWKsYMAB1Up",
  "key15": "5F4vBT1Vuoim9SUaPHgrsgLcfwQM9MexSBe4idBaRKWwmDRpfwbXCzAAVnHA6czwduTzMjNeqcn5paMJ4BE53AhZ",
  "key16": "4jhxBG2xymLppiNNw9S8w8GrysLHdB7vL6o5qgMJGDYQKAREZN9K9zjHomBwJtEQe7dXA2sQhpZmp8iz8tAfhY3V",
  "key17": "57bpkCCoJCjbko9MGC6b2qCw3zMpCgKDSEcwEENTquokbKEXgbLVJk4hMVVrsTwTuwfCeMeQQSSXLZwSfHpxFtEv",
  "key18": "5JZuA7yJExKW6J3Jucsgjb4ofiGJYvWwvNNgDzxQc6WQANuQwjpa9eLaoi9hqjfSuu4m851rxMeDRXNeTwY5bziS",
  "key19": "2wmpja53bm5cjNfQWWjDfEWpTutHHaGcTi2UpN6Rn6j3U6XHcnXCVf3bC2SN5CWov2MMYH8YeW7EkzHgyndNB4JJ",
  "key20": "3qyMDJJdnp3fCbGhQ16S6A6Lx8Z2UaSpMrhqmkM4b1VhjW6zvNm9YHcWK2dU9BiWrHi93m6Gk86Y7LXC43MxxmLb",
  "key21": "3Hr4Cn2PfgENTuhE7GAcYQDAW6h5Y8oGbhEn3psx81viBjtYCxAqHwt5WFRhYLBwxbR1Ugu5XoFP2ZsbWxRhFBw1",
  "key22": "5CEu9sYybMwGju7pexZn5ZZ7Q6xrbmqqsR9c3tvU5ycU9YcRdW6KNAH33nxSavXbPxLpkf9NndqD8bE8nB57uaGK",
  "key23": "3zNes4iGUgmR6Fzgbi4ekUEhJppb22VDK4KyfmpCxbBmF3VinWiFqH2Enon2ohEW5ic6Pu3Nw9tNabc4c9fL7LVY",
  "key24": "4JjWgPdxTTNUosaCNuhRaADhnUibgRny58593zhZa4gzS4mvatjhtQzKT9KKwNBcb6w9X7V5Pg15LBLQtdNF12Y8",
  "key25": "rV9YSY6F9rWA3pjh3SQbtRzxV6aEPr1xHdY9isQn55XMwjiE4N1JeheSUnNQfN55LCNEKbukF1c2ypzepa6hEbE",
  "key26": "4unmzvJjxxoSBmCjokBJEjAHS1ybZCuX4dLSwzXHGxmm7CwFTcGTYzctc1oxyxyZsNRjZ8TRcXqAj84gMwfuGYve",
  "key27": "3o7U6NxnEVJUHVTgxUo32aY9CLFDzuf8Mg5EXrX1xWbq4YQ2mJ49JTnhpVXUgN16GQ6fVcZMkf5qPByNGQSrrbyJ",
  "key28": "3nc7RyPd6WPcmAZYg54m3pjrF6cb7RnK39MTzo7DcRvVywpzquNvSpbp2KWbsjXA7Qstw4LozBRGwaRkh33i5vrd",
  "key29": "5LbW35aNCGeT2eBkYZLf2FgevroXsMYxhhxAwfQ1VV3pUB1b1nxFpQJi5MtuqaRdarKCm7J2RN687Teov6zssHxX",
  "key30": "2TdMdcQspmKqv1pC2CmN9aazwqDzCUuRNCQppBT8Jty3YpzwSePRYEyqZKcN8n93M3ak3KgzM7hNSgaF9yxAUCXq",
  "key31": "Hp2qgd3pnMM8UGtpC3p3LkvnFahWnSx9n6FCgF5mHB4ZUUQg636653iwbEcYLLFePavh9fVbeDujgocnZmzHLav"
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
